/* Momentos únicos: festival de linternas con fuegos artificiales (aldea, de noche), aurora (invierno) y pétalos/hojas cayendo. */
import {A} from '../audio-rio.js';
import {seasonIdx,SAKURA} from '../season.js';
import * as THREE from 'three';
import {clamp} from './util.js';
import {P} from './state.js';
import {LMS,lmPos,SE,forestAt,gardenAt,lmType} from './world.js';
import {glowTex,scene} from './core.js';
import {env} from './env.js';
import {encounter} from './fauna.js';
/* ---------- momentos únicos: festival de linternas (aldea, de noche) y aurora (invierno) ---------- */
const FWN=8,FWP=44,fwPos=new Float32Array(FWN*FWP*3),fwCol=new Float32Array(FWN*FWP*3),fwG=new THREE.BufferGeometry();
fwG.setAttribute('position',new THREE.BufferAttribute(fwPos,3));fwG.setAttribute('color',new THREE.BufferAttribute(fwCol,3));
export const fw=new THREE.Points(fwG,new THREE.PointsMaterial({size:2.6,map:glowTex,vertexColors:true,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,depthTest:false,fog:false}));fw.renderOrder=9;fw.frustumCulled=false;fw.visible=false;scene.add(fw);
export const FWC=[[1,.62,.75],[1,.84,.4],[.55,.9,1],[1,.5,.4],[.8,.7,1]],fwB=[];
for(let i=0;i<FWN;i++)fwB.push({age:9,x:0,y:0,z:0,c:FWC[0],v:new Float32Array(FWP*3)});
let fwT=0,festOn=false;
function festNear(ps){const k=Math.round((ps-240)/LMS);for(const q of[k-1,k,k+1])if(q>=0&&lmType(q)===2&&Math.abs(lmPos(q)-ps)<230)return true;return false}
function fwLaunch(){
  const b=fwB.find(b=>b.age>=3);if(!b)return;
  b.age=0;b.x=P.px+(Math.random()-.5)*40;b.y=4+Math.random()*5;b.z=P.pz-(55+Math.random()*40);b.c=FWC[(Math.random()*FWC.length)|0];
  for(let j=0;j<FWP;j++){const u=Math.random()*6.283,w=Math.acos(2*Math.random()-1),sp=5+Math.random()*4;b.v[j*3]=Math.sin(w)*Math.cos(u)*sp;b.v[j*3+1]=Math.cos(w)*sp;b.v[j*3+2]=Math.sin(w)*Math.sin(u)*sp}
  try{A.boom((b.x-P.px)/30)}catch(e){}
}
export function updateFW(dt,night){
  const was=festOn;festOn=night>.55&&festNear(P.dist||-P.pz);
  if(festOn&&!was)encounter('festival','Festival de linternas: la aldea celebra esta noche');
  if(festOn){fwT-=dt;if(fwT<=0){fwT=1.4+Math.random()*2;fwLaunch();if(Math.random()<.35)setTimeout(fwLaunch,350)}}
  let any=false;
  for(let i=0;i<FWN;i++){const b=fwB[i];
    if(b.age<3)b.age+=dt;
    const a=b.age<3?Math.pow(Math.max(0,1-b.age/2.7),1.5):0;if(a>0)any=true;
    for(let j=0;j<FWP;j++){const o=(i*FWP+j)*3,t=b.age;
      fwPos[o]=b.x+b.v[j*3]*t*.8;fwPos[o+1]=b.y+b.v[j*3+1]*t*.8-1.9*t*t;fwPos[o+2]=b.z+b.v[j*3+2]*t*.8;
      fwCol[o]=b.c[0]*a;fwCol[o+1]=b.c[1]*a;fwCol[o+2]=b.c[2]*a}}
  fw.visible=any;if(any){fwG.attributes.position.needsUpdate=true;fwG.attributes.color.needsUpdate=true}
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
