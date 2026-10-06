/* Orilla y estela: espuma de la orilla, estela de la canoa, gotas y salpicaduras. */
import * as THREE from 'three';
import {vn} from './util.js';
import {S,P} from './state.js';
import {ROWS,DZ,hw,cx} from './world.js';
import {scene} from './core.js';
import {spawnRipple} from './ripples.js';
export const foamMat=new THREE.MeshBasicMaterial({vertexColors:true,transparent:true,opacity:.7,depthWrite:false,side:THREE.DoubleSide});
const FN=ROWS;const fPos=new Float32Array(FN*4*2*3),fCol=new Float32Array(FN*4*2*4),fG=new THREE.BufferGeometry();
fG.setAttribute('position',new THREE.BufferAttribute(fPos,3));fG.setAttribute('color',new THREE.BufferAttribute(fCol,4));
{const idx=[];for(let side=0;side<2;side++)for(let j=0;j<FN-1;j++){const b=(side*FN+j)*4;idx.push(b,b+1,b+4,b+1,b+5,b+4,b+1,b+2,b+5,b+2,b+6,b+5,b+2,b+3,b+6,b+3,b+7,b+6)}fG.setIndex(idx)}
export const foam=new THREE.Mesh(fG,foamMat);foam.frustumCulled=false;foam.renderOrder=1;scene.add(foam);
export function buildFoam(as){const s0=as-60;
  for(let side=0;side<2;side++){const sg=side?1:-1;
    for(let j=0;j<FN;j++){const s=s0+j*DZ,e=hw(s)-1.0+(vn(s*.08,side*9)-.5)*.9,w=.9+vn(s*.2,side)*.9,x=cx(s)+sg*e,z=-s,al=.25+.55*vn(s*.11+side*30,5);
      const b=(side*FN+j)*4;
      const xs=[x-sg*w*1.4,x-sg*w*.4,x+sg*w*.5,x+sg*w*1.5],as_=[0,al,al*.6,0];
      for(let k=0;k<4;k++){fPos.set([xs[k],.05,z],(b+k)*3);fCol.set([1,1,1,as_[k]],(b+k)*4)}}}
  fG.attributes.position.needsUpdate=fG.attributes.color.needsUpdate=true}
// estela: manchas de espuma planas que se abren detrás de la canoa
const WK=36,wake=[];for(let i=0;i<WK;i++){const m=new THREE.Mesh(new THREE.CircleGeometry(.5,20).rotateX(-Math.PI/2),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:0,depthWrite:false}));m.position.y=.045;m.userData={age:9,vx:0,vz:0};scene.add(m);wake.push(m)}
let wkI=0,wkT=0;
export function spawnWake(x,z,vx,vz,sc){const m=wake[wkI++%WK];m.position.set(x,.045,z);m.userData={age:0,vx,vz,sc};m.scale.setScalar(.4)}
// gotas
const DN=60,dropG=new THREE.BufferGeometry(),dropP=new Float32Array(DN*3),drops=[];for(let i=0;i<DN;i++){drops.push({l:0,x:0,y:-9,z:0,vx:0,vy:0,vz:0})}
dropG.setAttribute('position',new THREE.BufferAttribute(dropP,3));
const dropM=new THREE.PointsMaterial({color:0xeaf6ff,size:.16,transparent:true,opacity:.9,depthWrite:false});
const dropPts=new THREE.Points(dropG,dropM);dropPts.frustumCulled=false;scene.add(dropPts);let dI=0;
export function splash(x,y,z,n){for(let i=0;i<n;i++){const d=drops[dI++%DN];d.l=1;d.x=x;d.y=y;d.z=z;const a=Math.random()*6.28,v=.8+Math.random()*1.4;d.vx=Math.cos(a)*v;d.vz=Math.sin(a)*v;d.vy=2+Math.random()*2.2}spawnRipple(x,z)}
/* gotas y estela por fotograma (cola de updateFish) */
export function updateShoreFx(dt){
  // gotas y estela
  for(let i=0;i<DN;i++){const d=drops[i];if(d.l>0){d.l-=dt*1.4;d.vy-=9*dt;d.x+=d.vx*dt;d.y+=d.vy*dt;d.z+=d.vz*dt;if(d.y<0)d.l=0}dropP[i*3]=d.l>0?d.x:0;dropP[i*3+1]=d.l>0?d.y:-50;dropP[i*3+2]=d.z}
  dropG.attributes.position.needsUpdate=true;
  wkT-=dt;if(wkT<=0&&S.started){wkT=.11;const sp=Math.min(P.v,5);const sdx=Math.cos(P.psi),sdz=Math.sin(P.psi),bx_=P.px-Math.sin(P.psi)*1.5,bz_=P.pz+Math.cos(P.psi)*1.5;
    // popa
    for(const sd of[-1,1])spawnWake(bx_+sdx*.5*sd,bz_+sdz*.5*sd,sdx*sd*.5,sdz*sd*.5,1)}
  wake.forEach(m=>{const u=m.userData;if(u.age>=3.2){m.material.opacity=0;return}u.age+=dt;const a=u.age/3.2;m.position.x+=(u.vx||0)*dt;m.position.z+=(u.vz||0)*dt;m.scale.setScalar((.4+a*2.6)*(u.sc||1));m.material.opacity=.38*(1-a)*(1-a)})
}
