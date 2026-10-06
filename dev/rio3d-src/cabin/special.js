/* special.js — momentos únicos: estrella fugaz y celebración final (farolillos que suben + luciérnagas con campanitas) */
import * as THREE from 'three';
import {scene,RT} from './core.js';
import {A} from '../audio.js';
import {Y0,clamp,spr,glowTex} from './util.js';
import {toast} from './ui.js';
/* ---- estrella fugaz: rara, cruza el cielo nocturno con una estela corta ---- */
export const star={on:false,t:0,dur:1.25,p:new THREE.Vector3(),d:new THREE.Vector3(),next:0};
const SSN=9,ssSp=[];
export const fest={on:false,shown:false,armT:Infinity,t:0,len:46,nextB:0,lan:[]};
const FLN=12,fl2P=new Float32Array(40*3),fl2B=[];
let fl2G,fl2M;export let fl2;
// crea sprites y partículas (una sola vez, respetando el orden original de Math.random)
export function initSpecial(){
star.next=30+Math.random()*40;
for(let i=0;i<SSN;i++){const sp=spr(glowTex,i?0xcfe0ff:0xffffff,Math.max(1.6,5.2-i*.45),0,true);sp.material.fog=false;sp.visible=false;scene.add(sp);ssSp.push(sp)}
fl2G=new THREE.BufferGeometry();
for(let i=0;i<40;i++)fl2B.push([-4+Math.random()*13,Y0+.6+Math.random()*3,2+Math.random()*3,Math.random()*6.28]);
fl2G.setAttribute('position',new THREE.BufferAttribute(fl2P,3));
fl2M=new THREE.PointsMaterial({color:0xffe9a8,size:.5,map:glowTex,transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false});
fl2=new THREE.Points(fl2G,fl2M);fl2.frustumCulled=false;fl2.visible=false;scene.add(fl2);
for(let i=0;i<FLN;i++){
  const g=new THREE.Group(),bm=new THREE.MeshBasicMaterial({color:i%3?0xffb86b:0xf7a3b8,transparent:true,opacity:0});
  g.add(new THREE.Mesh(new THREE.CylinderGeometry(.2,.15,.34,8),bm));
  const gl=spr(glowTex,0xffc27a,2.2,0,true);g.add(gl);g.visible=false;scene.add(g);
  fest.lan.push({g,bm,gl,x0:-3+Math.random()*10,z0:3.2+Math.random()*1.6,del:i*1.1+Math.random()*.8,sp:.8+Math.random()*.5,ph:Math.random()*6.28});
}
}
function shootStar(){
  if(star.on)return;const dir=Math.random()<.5?-1:1;
  star.p.set(-110*dir+(Math.random()-.5)*60,95+Math.random()*70,-340);star.d.set(dir*150,-52-Math.random()*20,0);
  star.on=true;star.t=0;ssSp.forEach(s=>s.visible=true);UX.cap('Estrella fugaz',25000);A.sparkle();
}
function starStep(dt){
  if(!star.on)return;star.t+=dt;const e=Math.sin(Math.PI*clamp(star.t/star.dur));
  ssSp.forEach((sp,i)=>{const tt=star.t-i*.03;sp.position.copy(star.p).addScaledVector(star.d,tt);sp.material.opacity=e*(1-i/SSN)*.95});
  if(star.t>=star.dur){star.on=false;ssSp.forEach(s=>s.visible=false)}
}
/* ---- celebración al completar las reparaciones ---- */
function startFest(){
  if(fest.on||fest.shown)return;fest.shown=true;fest.on=true;fest.t=0;fest.nextB=.3;fl2.visible=true;
  toast('Los farolillos suben al cielo');UX.hap([20,80,20,80,40]);
}
function festStep(dt){
  if(!fest.on)return;fest.t+=dt;const t=fest.t;
  fl2M.opacity=.85*clamp(t/4)*clamp((fest.len-t)/8);
  for(let i=0;i<40;i++){const b=fl2B[i],u=RT.T*.35+b[3];fl2P[i*3]=b[0]+Math.sin(u*2+i)*1.6;fl2P[i*3+1]=b[1]+Math.sin(u*1.3+i)*.8+t*.04;fl2P[i*3+2]=b[2]+Math.cos(u*1.7+i)*1.4}
  fl2G.attributes.position.needsUpdate=true;
  fest.lan.forEach(l=>{const a=t-l.del;if(a<0){l.g.visible=false;return}
    l.g.visible=true;const y=Y0+1.2+a*l.sp+a*a*.012;
    l.g.position.set(l.x0+Math.sin(a*.5+l.ph)*1.2+a*.12,y,l.z0+Math.cos(a*.4+l.ph)*.6-a*.1);
    const o=clamp(a/2)*clamp((Y0+24-y)/8);l.bm.opacity=o*.9;l.gl.material.opacity=o*.75*(.85+.15*Math.sin(RT.T*3+l.ph));if(o<=0&&a>3)l.g.visible=false});
  if(t>fest.nextB&&t<34){fest.nextB=t+2.2+Math.random()*2;A.chime(Math.random()*1.6-.8,(Math.random()*5)|0);if(Math.random()<.5)A.lantern(Math.random()-.5)}
  if(t>fest.len){fest.on=false;fl2.visible=false;fest.lan.forEach(l=>l.g.visible=false)}
}
export {shootStar,starStep,startFest,festStep};
