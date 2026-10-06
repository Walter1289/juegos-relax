/* fx.js — efectos ambientales: humo, lluvia, luciérnagas y partículas de espuma/destellos */
import * as THREE from 'three';
import {scene,RT} from './core.js';
import {clamp,spr,glowTex,puffTex} from './util.js';
import {lit} from './lights.js';
const smoke=[],RN=260,rp=new Float32Array(RN*6),rv=[];
const FFN=60,ffP=new Float32Array(FFN*3),ffB=[];
let rainG,ffG,rain,ffM,ff;
// crea humo, lluvia y luciérnagas (el orden de creación y de Math.random se conserva)
export function initAmbient(){
  for(let i=0;i<12;i++){const s=spr(puffTex,0xe9e4fa,2,0);s.userData.ph=i/12;scene.add(s);smoke.push(s)}
  rainG=new THREE.BufferGeometry();
  for(let i=0;i<RN;i++){rv.push([Math.random()*30-12,Math.random()*18,Math.random()*18-8])}
  rainG.setAttribute('position',new THREE.BufferAttribute(rp,3));
  rain=new THREE.LineSegments(rainG,new THREE.LineBasicMaterial({color:0xcfd8ff,transparent:true,opacity:.0,fog:true}));rain.frustumCulled=false;scene.add(rain);
  ffG=new THREE.BufferGeometry();
  for(let i=0;i<FFN;i++)ffB.push([Math.random()*30-14,Math.random()*9+1,Math.random()*14-6,Math.random()*6.28]);
  ffG.setAttribute('position',new THREE.BufferAttribute(ffP,3));
  ffM=new THREE.PointsMaterial({color:0xfff2a0,size:.4,map:glowTex,transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false});
  ff=new THREE.Points(ffG,ffM);ff.frustumCulled=false;scene.add(ff);
}
// prog: progreso total (0..1); nichos: ¿reparados? (más luciérnagas)
export function ambientStep(dt,prog,nichos){
  const T=RT.T;
  // humo
  smoke.forEach((s,i)=>{const ph=(T*.07+s.userData.ph)%1;s.position.set(-1.2+ph*3.2+Math.sin(T*.6+i)*.3,11.6+ph*5.5,-1.8+Math.sin(T*.4+i*2)*.2);const sz=1+ph*4.2;s.scale.set(sz,sz,1);s.material.opacity=.38*(1-ph)*Math.min(1,ph*8)*lit.smoke});
  // lluvia
  rain.material.opacity=.28*lit.rain;rain.visible=lit.rain>.02;
  if(rain.visible){for(let i=0;i<RN;i++){const v=rv[i];v[1]-=15*dt;if(v[1]<-2){v[1]=17+Math.random()*3;v[0]=Math.random()*34-14;v[2]=Math.random()*20-9}
    rp.set([v[0],v[1],v[2],v[0]-.12,v[1]+.7,v[2]],i*6)}rainG.attributes.position.needsUpdate=true}
  // luciérnagas
  ffM.opacity=clamp(prog*.9+(nichos?.3:0)-.1,0,.9);ff.visible=ffM.opacity>.02;
  if(ff.visible){for(let i=0;i<FFN;i++){const b=ffB[i],t=T*.4+b[3];ffP[i*3]=b[0]+Math.sin(t*2+i)*1.5;ffP[i*3+1]=b[1]+Math.sin(t*3+i)*.5;ffP[i*3+2]=b[2]+Math.cos(t*1.7+i)*1.5}ffG.attributes.position.needsUpdate=true}
}
/* ---- partículas de espuma / destellos ---- */
const parts=[];let pI=0;
export function initParts(){for(let i=0;i<40;i++){const s=spr(glowTex,0xffffff,.4,0,true);s.visible=false;scene.add(s);parts.push({s,life:0,vx:0,vy:0,vz:0})}}
export function puff(x,y,z,n,col,sp,up){for(let i=0;i<n;i++){const p=parts[pI++%parts.length];p.s.position.set(x,y,z);p.s.material.color.set(col);p.s.visible=true;p.life=1;
  p.vx=(Math.random()-.5)*sp;p.vy=Math.random()*sp*.6+(up||.5);p.vz=(Math.random()-.5)*sp;p.s.scale.setScalar(.25+Math.random()*.3)}}
export const burst=f=>puff(f[0],f[1],f[2]+.5,22,0xffe9b0,5,2);
export function partsStep(dt){
  parts.forEach(p=>{if(!p.s.visible)return;p.life-=dt*.9;if(p.life<=0){p.s.visible=false;return}p.s.position.x+=p.vx*dt;p.s.position.y+=p.vy*dt;p.s.position.z+=p.vz*dt;p.vy-=2.2*dt;p.s.material.opacity=p.life*.9});
}
