/* Momentos únicos: festival de linternas con fuegos artificiales (aldea, de noche), aurora (invierno) y pétalos/hojas cayendo. */
import {A} from '../audio-rio.js';
import {seasonIdx,SAKURA} from '../season.js';
import * as THREE from 'three';
import {clamp} from './util.js';
import {P} from './state.js';
import {LMS,lmPos,SE,forestAt,gardenAt,lmType,cx,hw,tanAng,H} from './world.js';
import {glowTex,scene,R,cam} from './core.js';
import {env,water} from './env.js';
import {encounter} from './fauna.js';
/* ---------- momentos únicos: festival de linternas (aldea, de noche) y aurora (invierno) ---------- */
/* Pirotecnia: sale de tierra, detrás de las casas de la aldea (no delante de la canoa). Cada carcasa sube con su estela de chispas,
   estalla sobre los tejados, se abre rápido, se frena y se apaga en segundo y medio. El agua recoge el resplandor de cada estallido. */
const FWN=8,FWS=44,FWT=6,FWP=FWS+FWT,fwPos=new Float32Array(FWN*FWP*3),fwCol=new Float32Array(FWN*FWP*3),fwSz=new Float32Array(FWN*FWP),fwG=new THREE.BufferGeometry();
fwG.setAttribute('position',new THREE.BufferAttribute(fwPos,3));fwG.setAttribute('color',new THREE.BufferAttribute(fwCol,3));fwG.setAttribute('sz',new THREE.BufferAttribute(fwSz,1));
const fwM=new THREE.ShaderMaterial({transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,uniforms:{map:{value:glowTex},sc:{value:300}},
  vertexShader:'attribute float sz;attribute vec3 color;varying vec3 vC;uniform float sc;void main(){vC=color;vec4 mv=modelViewMatrix*vec4(position,1.);gl_PointSize=sz*sc/max(1.,-mv.z);gl_Position=projectionMatrix*mv;}',
  fragmentShader:'varying vec3 vC;uniform sampler2D map;void main(){vec4 t=texture2D(map,gl_PointCoord);gl_FragColor=vec4(vC*t.rgb*t.a,1.);\n#include <colorspace_fragment>\n}'});
export const fw=new THREE.Points(fwG,fwM);fw.renderOrder=9;fw.frustumCulled=false;fw.visible=false;scene.add(fw);
export const FWC=[[1,.62,.75],[1,.84,.4],[.55,.9,1],[1,.5,.4],[.8,.7,1]],fwB=[];
for(let i=0;i<FWN;i++)fwB.push({st:0,age:9,t:0,x0:0,y0:0,z0:0,x:0,y:0,z:0,rT:1.2,L:1.5,kind:0,g:.9,c:FWC[0],v:new Float32Array(FWS*3)});
/* resplandor breve del estallido (ilumina la bruma) y su reflejo en el agua */
const flashes=[0,1].map(()=>{const s=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,blending:THREE.AdditiveBlending,depthWrite:false,fog:false,transparent:true,opacity:0}));s.visible=false;s.renderOrder=8;scene.add(s);return{s,t:9,b:null}});let flI=0;
let fwT=0,festOn=false,festK=-1;
function festVillage(ps){const k=Math.round((ps-240)/LMS);for(const q of[k-1,k,k+1])if(q>=0&&lmType(q)===2&&Math.abs(lmPos(q)-ps)<230)return q;return -1}
function fwLaunch(){
  const b=fwB.find(b=>b.st===0);if(!b||festK<0)return;
  /* punto de lanzamiento: en tierra, tras la hilera de casas de una de las dos orillas */
  const s=lmPos(festK),a=tanAng(s),sd=Math.random()<.5?-1:1,lx=sd*(hw(s)+24+Math.random()*9),lz=-22+Math.random()*48,th=-a;
  b.x0=cx(s)+lx*Math.cos(th)+lz*Math.sin(th);b.z0=-s+(-lx*Math.sin(th)+lz*Math.cos(th));b.y0=Math.max(.3,H(b.x0,-b.z0));
  b.x=b.x0+(Math.random()-.5)*5;b.z=b.z0+(Math.random()-.5)*5;b.y=b.y0+13+Math.random()*7;
  b.st=1;b.t=0;b.age=0;b.rT=1.05+Math.random()*.3;b.c=FWC[(Math.random()*FWC.length)|0];
  const r=Math.random();b.kind=r<.5?0:r<.75?1:2;b.L=b.kind===2?2:1.5;b.g=b.kind===2?2.3:.9;if(b.kind===2)b.c=FWC[1];
  const ax=Math.random()*6.283,tl=.4+Math.random()*.9;
  for(let j=0;j<FWS;j++){let vx,vy,vz;const u=Math.random()*6.283;
    if(b.kind===1){const sp=17+Math.random()*1.5,c=Math.cos(u)*sp,q=Math.sin(u)*sp;vx=c*Math.cos(ax)-q*Math.cos(tl)*Math.sin(ax);vz=c*Math.sin(ax)+q*Math.cos(tl)*Math.cos(ax);vy=q*Math.sin(tl)}   // anillo inclinado
    else{const w=Math.acos(2*Math.random()-1),sp=(b.kind===2?12:15)+Math.random()*(j%3?6:1);vx=Math.sin(w)*Math.cos(u)*sp;vy=Math.cos(w)*sp;vz=Math.sin(w)*Math.sin(u)*sp}
    b.v[j*3]=vx;b.v[j*3+1]=vy;b.v[j*3+2]=vz}
}
const _fd=new THREE.Vector3();
export function updateFW(dt,night){
  const was=festOn;festK=festVillage(P.dist||-P.pz);festOn=night>.55&&festK>=0;
  if(festOn&&!was)encounter('festival','Festival de linternas: la aldea celebra esta noche');
  if(festOn){fwT-=dt;if(fwT<=0){fwT=1.6+Math.random()*2.2;fwLaunch();if(Math.random()<.3)setTimeout(fwLaunch,420)}}
  let any=false;const KD=2.4;
  for(let i=0;i<FWN;i++){const b=fwB[i],o0=i*FWP;
    if(b.st===0){if(b.age<9){b.age=9;for(let j=0;j<FWP;j++){const o=(o0+j)*3;fwCol[o]=fwCol[o+1]=fwCol[o+2]=0;fwSz[o0+j]=0}any=true}continue}
    any=true;b.t+=dt;
    if(b.st===1){ /* subida: frena al llegar arriba; la estela son la cabeza y cinco chispas que la siguen y caen un poco */
      const k=Math.min(1,b.t/b.rT);
      for(let j=0;j<FWT;j++){const kk=Math.max(0,k-j*.045),e=1-(1-kk)*(1-kk),o=(o0+FWS+j)*3,f=kk<=0?0:(1-j/FWT)*(j?.55:1)*(.5+.5*(1-k));
        fwPos[o]=b.x0+(b.x-b.x0)*e+Math.sin(kk*9+i)*.25;fwPos[o+1]=b.y0+(b.y-b.y0)*e-j*.12;fwPos[o+2]=b.z0+(b.z-b.z0)*e;
        fwCol[o]=1*f;fwCol[o+1]=.78*f;fwCol[o+2]=.45*f;fwSz[o0+FWS+j]=j?.8:1.3}
      for(let j=0;j<FWS;j++){const o=(o0+j)*3;fwCol[o]=fwCol[o+1]=fwCol[o+2]=0;fwSz[o0+j]=0}
      if(k>=1){b.st=2;b.t=0;for(let j=0;j<FWT;j++){const o=(o0+FWS+j)*3;fwCol[o]=fwCol[o+1]=fwCol[o+2]=0}
        const f=flashes[flI++%2];f.t=0;f.b=b;f.s.position.set(b.x,b.y,b.z);f.s.material.color.setRGB(b.c[0],b.c[1],b.c[2]);f.s.visible=true;
        try{A.boom((b.x-P.px)/30)}catch(e){}}}
    else{ /* estallido: se abre deprisa, el aire lo frena, cae un poco y se apaga */
      const t=b.t,k=t/b.L,ex=(1-Math.exp(-KD*t))/KD,a=k>=1?0:Math.pow(1-k,1.35)*.72,hot=Math.max(0,1-t/.15)*.6,sz=1.5+1.3*hot+(b.kind===2?.2:0);
      const cr=b.c[0]+(1-b.c[0])*hot,cg=b.c[1]+(1-b.c[1])*hot,cb=b.c[2]+(1-b.c[2])*hot,emb=b.kind===2?k:0;
      for(let j=0;j<FWS;j++){const o=(o0+j)*3;
        fwPos[o]=b.x+b.v[j*3]*ex;fwPos[o+1]=b.y+b.v[j*3+1]*ex-b.g*t*t;fwPos[o+2]=b.z+b.v[j*3+2]*ex;
        fwCol[o]=cr*a;fwCol[o+1]=cg*a*(1-emb*.35);fwCol[o+2]=cb*a*(1-emb*.7);fwSz[o0+j]=sz}
      if(k>=1){b.st=0;b.age=0}}}
  fw.visible=any;if(any){fwG.attributes.position.needsUpdate=true;fwG.attributes.color.needsUpdate=true;fwG.attributes.sz.needsUpdate=true;fwM.uniforms.sc.value=R.domElement.height*.5*cam.projectionMatrix.elements[5]}
  /* resplandor: sube en un instante y se va en medio segundo; el agua lo refleja un poco más de tiempo */
  const wu=water.material.uniforms;
  flashes.forEach((f,i)=>{if(f.t<9){f.t+=dt;const k=f.t/.55,o=k>=1?0:Math.pow(1-k,2)*.38;f.s.material.opacity=o;f.s.scale.setScalar(38+30*Math.min(1,k));f.s.visible=o>.004;
      const kr=Math.max(0,1-f.t/1.3);wu.fwP.value[i].copy(f.s.position);wu.fwC.value[i].setRGB(f.b.c[0],f.b.c[1],f.b.c[2]).multiplyScalar(kr*kr*.9);if(f.t>1.3){f.t=9;wu.fwC.value[i].setRGB(0,0,0)}}});
}
const aurM=new THREE.ShaderMaterial({transparent:true,side:THREE.BackSide,depthWrite:false,blending:THREE.AdditiveBlending,fog:false,uniforms:{t:{value:0},k:{value:0}},
  vertexShader:'varying vec2 u;void main(){u=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:'varying vec2 u;uniform float t,k;void main(){float a=u.x*6.283;float w=sin(a*3.+t*.25+sin(a*7.+t*.4)*1.3)*.5+.5;float band=smoothstep(.15,.55,u.y)*smoothstep(1.,.55,u.y);float f=band*(.3+.7*w)*(.55+.45*sin(a*11.-t*.5));vec3 c=mix(vec3(.2,1.,.6),vec3(.55,.4,1.),smoothstep(.45,.95,u.y));gl_FragColor=vec4(c*f*k*.75,1.);}'});
const aur=new THREE.Mesh(new THREE.CylinderGeometry(330,330,120,48,1,true),aurM);aur.frustumCulled=false;aur.visible=false;aur.renderOrder=-1;scene.add(aur);
export function updateAur(night){const k=seasonIdx()===3?clamp(night*1.5-.7,0,1):0;aur.visible=k>.01;if(aur.visible){aur.position.set(P.px,95,P.pz);aurM.uniforms.t.value=P.t;aurM.uniforms.k.value=k}}
const PN=300,petG=new THREE.BufferGeometry(),petP=new Float32Array(PN*3),petS=[];
for(let i=0;i<PN;i++){petS.push([Math.random()*60-30,Math.random()*12,Math.random()*60-50,Math.random()*6.28]);}
petG.setAttribute('position',new THREE.BufferAttribute(petP,3));
const petTex=(()=>{const c=document.createElement('canvas');c.width=c.height=32;const x=c.getContext('2d');x.fillStyle='#fff';x.beginPath();x.ellipse(16,16,12,7,.6,0,6.3);x.fill();const t=new THREE.CanvasTexture(c);return t})();
const petC=new Float32Array(PN*3),petM=new THREE.PointsMaterial({map:petTex,alphaTest:.3,color:0xffffff,vertexColors:true,size:SE.pet.size,transparent:true,opacity:.85,depthWrite:false});
let petLast=-1;const petSe=new THREE.Color(SE.pet.c),petPk=new THREE.Color(SAKURA.pet),petTmp=new THREE.Color();
petG.setAttribute('color',new THREE.BufferAttribute(petC,3));
const petals=new THREE.Points(petG,petM);petals.frustumCulled=false;scene.add(petals);
/* pétalos por fotograma */
export function updatePetals(dt){
  for(let i=0;i<PN;i++){const b=petS[i];b[1]-=dt*SE.pet.fall*(.45+.3*Math.sin(b[3]+P.t));if(b[1]<.2){b[1]=10+Math.random()*3;b[0]=Math.random()*60-30;b[2]=-Math.random()*60}
    petP[i*3]=P.px+b[0]+Math.sin(P.t*.7+b[3])*1.5;petP[i*3+1]=b[1];petP[i*3+2]=P.pz+b[2]+10+Math.cos(P.t*.5+b[3])}
  /* en el jardín de sakura / castillo caen pétalos ROSAS en todas las estaciones; fuera, los de la estación */
  {const ga=gardenAt(P.dist||-P.pz),fo=Math.max(.3*forestAt(-P.pz),ga);petG.setDrawRange(0,Math.round(PN*Math.max(SE.pet.base+SE.pet.gain*fo,ga*.85)));
    if(Math.abs(ga-petLast)>.02||petLast<0){petLast=ga;petTmp.copy(petSe).lerp(petPk,clamp(ga*1.6));for(let i=0;i<PN;i++){petC[i*3]=petTmp.r;petC[i*3+1]=petTmp.g;petC[i*3+2]=petTmp.b}petG.attributes.color.needsUpdate=true;petM.size=SE.pet.size+(.42-SE.pet.size)*clamp(ga*1.6)}}
  petG.attributes.position.needsUpdate=true;petM.opacity=.85*(1-clamp(env.night,0,1)*.8);
}
