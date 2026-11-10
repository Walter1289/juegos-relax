/* Orilla y estela: espuma de la orilla, estela de la canoa, gotas y salpicaduras. */
import * as THREE from 'three';
import {vn} from './util.js';
import {S,P} from './state.js';
import {ROWS,BACK,DZ,hw,cx} from './world.js';
import {scene} from './core.js';
import {SU} from './skyfx.js';
import {spawnRipple} from './ripples.js';
export const foamMat=new THREE.MeshBasicMaterial({vertexColors:true,transparent:true,opacity:.7,depthWrite:false,side:THREE.DoubleSide});
const FN=ROWS;const fPos=new Float32Array(FN*4*2*3),fCol=new Float32Array(FN*4*2*4),fG=new THREE.BufferGeometry();
fG.setAttribute('position',new THREE.BufferAttribute(fPos,3));fG.setAttribute('color',new THREE.BufferAttribute(fCol,4));
{const idx=[];for(let side=0;side<2;side++)for(let j=0;j<FN-1;j++){const b=(side*FN+j)*4;idx.push(b,b+1,b+4,b+1,b+5,b+4,b+1,b+2,b+5,b+2,b+6,b+5,b+2,b+3,b+6,b+3,b+7,b+6)}fG.setIndex(idx)}
export const foam=new THREE.Mesh(fG,foamMat);foam.frustumCulled=false;foam.renderOrder=1;scene.add(foam);
export function buildFoam(as){const s0=as-BACK;
  for(let side=0;side<2;side++){const sg=side?1:-1;
    for(let j=0;j<FN;j++){const s=s0+j*DZ,e=hw(s)-1.0+(vn(s*.08,side*9)-.5)*.9,w=.9+vn(s*.2,side)*1.2,x=cx(s)+sg*e,z=-s,al=Math.max(.06,Math.min(.85,.1+.85*(vn(s*.11+side*30,5)*.6+vn(s*.5,side*7+3)*.5)-.12));
      const b=(side*FN+j)*4;
      const xs=[x-sg*w*1.4,x-sg*w*.4,x+sg*w*.5,x+sg*w*1.5],as_=[0,al,al*.6,0];
      for(let k=0;k<4;k++){fPos.set([xs[k],.05,z],(b+k)*3);fCol.set([1,1,1,as_[k]],(b+k)*4)}}}
  fG.attributes.position.needsUpdate=fG.attributes.color.needsUpdate=true}
// encaje de espuma: textura en mosaico de burbujas (bordes de celdas) que comparten la estela, la orilla y las rocas
export const laceTex=(()=>{const n=128,K=30,pts=[];let sd=77;const rnd=()=>{sd=(sd*1664525+1013904223)>>>0;return sd/4294967296};
  for(let i=0;i<K;i++)pts.push([rnd()*n,rnd()*n,.6+rnd()*.8]);
  const d=new Uint8Array(n*n*4);
  for(let y=0;y<n;y++)for(let x=0;x<n;x++){let f1=1e9,f2=1e9;
    for(let i=0;i<K;i++){let dx=Math.abs(x-pts[i][0]),dy=Math.abs(y-pts[i][1]);if(dx>n/2)dx=n-dx;if(dy>n/2)dy=n-dy;const q=Math.hypot(dx,dy)*pts[i][2];if(q<f1){f2=f1;f1=q}else if(q<f2)f2=q}
    const edge=Math.max(0,1-(f2-f1)/11),blob=Math.max(0,1-f1/9),v=Math.min(1,edge*edge*.6+blob*blob*.55),o=(y*n+x)*4;d[o]=d[o+1]=d[o+2]=v*255;d[o+3]=255}
  const t=new THREE.DataTexture(d,n,n,THREE.RGBAFormat);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.magFilter=THREE.LinearFilter;t.minFilter=THREE.LinearMipmapLinearFilter;t.generateMipmaps=true;t.needsUpdate=true;return t})();
/* la espuma de la orilla deja de ser una banda lisa: el encaje la rompe y deriva despacio con la corriente */
export const foamU={t:{value:0}};
foamMat.onBeforeCompile=sh=>{sh.uniforms.lace={value:laceTex};sh.uniforms.ft=foamU.t;
  sh.vertexShader='varying vec2 vFw;\n'+sh.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvFw=(modelMatrix*vec4(position,1.)).xz;');
  sh.fragmentShader='uniform sampler2D lace;uniform float ft;varying vec2 vFw;\n'+sh.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\n{float l1=texture2D(lace,vFw*.16+vec2(0.,ft*.012)).r,l2=texture2D(lace,vFw*.07+vec2(.3,-ft*.006)).r;diffuseColor.a*=clamp(.3+1.25*l1+.5*l2,0.,1.4);}')};
foamMat.customProgramCacheKey=()=>'foamLace';
// estela: parches de espuma que se abren detrás de la canoa y se deshacen en encaje (una sola llamada de dibujo)
const WK=96,wA=new Float32Array(WK*4),wB=new Float32Array(WK*4),wk=[];for(let i=0;i<WK;i++)wk.push({age:9,life:3.2,vx:0,vz:0,sc:1,mx:.38});
const wG=new THREE.InstancedBufferGeometry();{const q=new THREE.PlaneGeometry(1,1).rotateX(-Math.PI/2);wG.index=q.index;wG.setAttribute('position',q.attributes.position)}
const wAa=new THREE.InstancedBufferAttribute(wA,4),wBa=new THREE.InstancedBufferAttribute(wB,4);wAa.setUsage(THREE.DynamicDrawUsage);wBa.setUsage(THREE.DynamicDrawUsage);
wG.setAttribute('iA',wAa);wG.setAttribute('iB',wBa);wG.instanceCount=WK;
/* iA: x,z,rot,semilla · iB: tamaño(m), edad 0..1, opacidad, alargamiento */
const wakeMat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{lace:{value:laceTex},hor:SU.hor,night:SU.night},
  vertexShader:`attribute vec4 iA,iB;varying vec2 vP,vU;varying vec3 vK;
  void main(){vP=position.xz*2.;float c=cos(iA.z),s=sin(iA.z);vec2 q=vec2(position.x,position.z*iB.w)*iB.x;q=vec2(q.x*c-q.y*s,q.x*s+q.y*c);
    vec3 w=vec3(iA.x+q.x,.045,iA.y+q.y);vU=w.xz*.42+iA.w*7.;vK=iB.yzw;gl_Position=projectionMatrix*viewMatrix*vec4(w,1.);}`,
  fragmentShader:`varying vec2 vP,vU;varying vec3 vK;uniform sampler2D lace;uniform vec3 hor;uniform float night;
  void main(){float r=length(vP),m=1.-smoothstep(.25,1.,r);float f=texture2D(lace,vU).r*.75+texture2D(lace,vU*.47+.31).r*.35;
    float th=mix(.02,.5,vK.x);float a=smoothstep(th,th+.55,f*m+m*.3*(1.-vK.x))*vK.y*(1.-vK.x)*(1.-vK.x*.5);
    if(a<.004)discard;gl_FragColor=vec4(mix(hor,vec3(1.),.8)*(1.-night*.5),a);
#include <colorspace_fragment>
  }`});
const wakeMesh=new THREE.Mesh(wG,wakeMat);wakeMesh.frustumCulled=false;wakeMesh.renderOrder=1;scene.add(wakeMesh);
let wkI=0,wkT=0,bowT=0;
export function spawnWake(x,z,vx,vz,sc,life=3.2,mx=.38,rot=Math.random()*6.28,str=1){const i=wkI++%WK,u=wk[i];u.age=0;u.vx=vx;u.vz=vz;u.sc=sc||1;u.life=life*(.85+Math.random()*.3);u.mx=mx;
  wA[i*4]=x;wA[i*4+1]=z;wA[i*4+2]=rot;wA[i*4+3]=Math.random();wB[i*4+3]=str}
// gotas
const DN=60,dropG=new THREE.BufferGeometry(),dropP=new Float32Array(DN*3),drops=[];for(let i=0;i<DN;i++){drops.push({l:0,x:0,y:-9,z:0,vx:0,vy:0,vz:0})}
dropG.setAttribute('position',new THREE.BufferAttribute(dropP,3));
const dropM=new THREE.PointsMaterial({color:0xeaf6ff,size:.16,transparent:true,opacity:.9,depthWrite:false});
const dropPts=new THREE.Points(dropG,dropM);dropPts.frustumCulled=false;scene.add(dropPts);let dI=0;
export function splash(x,y,z,n){for(let i=0;i<n;i++){const d=drops[dI++%DN];d.l=1;d.x=x;d.y=y;d.z=z;const a=Math.random()*6.28,v=.8+Math.random()*1.4;d.vx=Math.cos(a)*v;d.vz=Math.sin(a)*v;d.vy=2+Math.random()*2.2}spawnRipple(x,z,.5+n*.07,3.2,.9)}
/* gotas y estela por fotograma (cola de updateFish) */
export function updateShoreFx(dt){
  // la espuma de la orilla sube y baja despacio, como una olita que lame (amplitud baja y lenta: sin parpadeo)
  foamMat.opacity=.62+.08*Math.sin(P.t*.55);
  // gotas y estela
  for(let i=0;i<DN;i++){const d=drops[i];if(d.l>0){d.l-=dt*1.4;d.vy-=9*dt;d.x+=d.vx*dt;d.y+=d.vy*dt;d.z+=d.vz*dt;if(d.y<0)d.l=0}dropP[i*3]=d.l>0?d.x:0;dropP[i*3+1]=d.l>0?d.y:-50;dropP[i*3+2]=d.z}
  dropG.attributes.position.needsUpdate=true;
  foamU.t.value=P.t;
  wkT-=dt;if(wkT<=0&&S.started){const sp=Math.min(P.v,5);wkT=.13+Math.random()*.07;const sdx=Math.cos(P.psi),sdz=Math.sin(P.psi),fwx=Math.sin(P.psi),fwz=-Math.cos(P.psi),bx_=P.px-fwx*1.5,bz_=P.pz-fwz*1.5;
    // popa: dos regueros irregulares que se abren y se deshacen
    for(const sd of[-1,1]){const j=(Math.random()-.5)*.3;spawnWake(bx_+sdx*(.45+j)*sd,bz_+sdz*(.45+j)*sd,sdx*sd*(.35+Math.random()*.3),sdz*sd*(.35+Math.random()*.3),(.75+sp*.12)*(.8+Math.random()*.5),3.4,.34,P.psi+(Math.random()-.5)*.8,1.5)}
    // proa: bigote de espuma fino pegado al casco
    if(sp>.8){const fx=P.px+fwx*2.9,fz=P.pz+fwz*2.9,k=Math.min(sp/4,1);
      for(const sd of[-1,1])spawnWake(fx+sdx*.25*sd,fz+sdz*.25*sd,sdx*sd*(.9+k*.5)-fwx*.4,sdz*sd*(.9+k*.5)-fwz*.4,(.35+k*.3)*(.8+Math.random()*.4),1.6,.2*k+.1,P.psi+sd*.5,2)}}
  /* ondas de proa: círculos que nacen a lo largo del rumbo; su envolvente dibuja sola la V de la estela */
  bowT-=dt;if(bowT<=0&&S.started){bowT=.75+Math.random()*.5;if(P.v>.5){const k=Math.min(P.v/2.4,1),fwx=Math.sin(P.psi),fwz=-Math.cos(P.psi);spawnRipple(P.px+fwx*2.4,P.pz+fwz*2.4,1.15,4.2,.6*k)}}
  for(let i=0;i<WK;i++){const u=wk[i];if(u.age>=u.life){if(wB[i*4]!==0){wB[i*4]=0;wB[i*4+2]=0}continue}
    u.age+=dt;const a=Math.min(1,u.age/u.life),dr=Math.exp(-u.age*.9);wA[i*4]+=u.vx*dr*dt;wA[i*4+1]+=u.vz*dr*dt;
    wB[i*4]=(.45+2.5*Math.sqrt(a))*u.sc;wB[i*4+1]=a;wB[i*4+2]=u.mx*1.7}
  wAa.needsUpdate=wBa.needsUpdate=true;
}
