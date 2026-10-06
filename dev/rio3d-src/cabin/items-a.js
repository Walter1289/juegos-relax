/* items-a.js — objetos reparables (parte 1): piso, barandal, escalera, techo, panel solar y ventana */
import * as THREE from 'three';
import {Y0,rng,mkTex} from './util.js';
import {mat,box} from './mats.js';
import {scatter} from './blobs.js';
import {mk,ASSET,CORAL,GREY,PITCH,slopeY} from './kit.js';
export function buildItemsA(){
// --- piso ---
{const it=mk('piso'),r=rng(21);
 for(let i=0;i<24;i++){const x=-3.76+i*.5;
   box(.46,.14,7,['#dcbc98','#d4b290','#e0c19e'][i%3],x,Y0-.07,.5,it.f);
   if(r()>.27){const L=7*(.55+.45*r());const m=box(.46,.14,L,['#a8978c','#9d8c82','#b0a095'][i%3],x,Y0-.07+(r()-.5)*.1,.5+(7-L)*(r()>.5?.5:-.5),it.b);m.rotation.y=(r()-.5)*.06;m.rotation.z=(r()-.5)*.05}}
 scatter(it,14,31,r=>[-3.5+r()*11,Y0+.04,-1+r()*4.6],.35,.75)}

// --- barandal ---
{const it=mk('barandal'),r=rng(5);
 for(let i=0;i<11;i++){const x=-3.8+i*1.2;
   box(.13,1.05,.13,'#ecc9ae',x,Y0+.52,3.9,it.f);
   if(![2,5,8].includes(i)){const m=box(.13,1.05,.13,GREY,x,Y0+.52,3.9,it.b);m.rotation.z=(r()-.5)*.34}}
 box(12,.12,.15,'#f1d3bb',2.2,Y0+1.06,3.9,it.f);box(12,.1,.12,'#f1d3bb',2.2,Y0+.55,3.9,it.f);
 [[-2.9,1.6],[2.6,2.4],[6.4,2.8]].forEach(([x,l])=>{const m=box(l,.12,.14,GREY,x,Y0+1.02+(r()-.5)*.06,3.9,it.b);m.rotation.z=(r()-.5)*.1});
 [[-1.3,2.1],[4.3,1.6]].forEach(([x,l])=>box(l,.1,.12,GREY,x,Y0+.5,3.9,it.b));
 scatter(it,6,41,r=>[-3.5+r()*11,Y0+1.1,3.9],.28,.5)}

// --- escalera ---
{const it=mk('escalera'),r=rng(9),a=Math.atan2(-5.9,6.9);
 for(let i=0;i<9;i++){const x=8.9+i*.72,y=Y0-.28-i*.63;
   box(.8,.12,1.5,'#e0c2a2',x,y,2.8,it.f);
   if(![2,5].includes(i)){const m=box(.8,.12,1.5,i%2?GREY:'#b3a398',x,y+(r()-.5)*.06,2.8,it.b);m.rotation.z=(r()-.5)*.28;m.rotation.x=(r()-.5)*.1}}
 for(let i=0;i<9;i+=2)box(.09,1,.09,'#f1d3bb',8.9+i*.72,Y0+.22-i*.63,3.62,it.f);
 {const m=box(Math.hypot(6.9,5.9),.1,.1,'#f1d3bb',12.1,Y0-2.7,3.62,it.f);m.rotation.z=a}
 [1,5].forEach(i=>box(.09,.7,.09,GREY,8.9+i*.72,Y0+.05-i*.63,3.62,it.b));
 scatter(it,8,51,r=>{const i=r()*8;return[8.9+i*.72,Y0-.2-i*.63,2.8+(r()-.5)*1.1]},.3,.5)}

// --- techo ---
{const it=mk('techo'),r=rng(33);
 const slab=(c,sag)=>{const g=new THREE.Group();[[.7,PITCH],[-2.7,-PITCH]].forEach(([z,rx])=>{const m=box(9.8,.24,4.1,c,1.5,8.3,z,g);m.rotation.x=rx+(sag&&z>0?.0:0);m.position.z=z});return g};
 const F=slab(CORAL),B=slab('#9b8b88');it.f.add(F);it.b.add(B);
 for(let i=0;i<11;i++){const t=(i+.5)/11,z=2.3-t*3.3;const y=slopeY(z)+.13;
   const m=box(9.8,.04,.07,'#f6c3b4',1.5,y,z,it.f);m.rotation.x=PITCH;
   const n=box(9.8,.04,.07,'#7e706e',1.5,y,z,it.b);n.rotation.x=PITCH}
 [[0.5,1.3,1.0,.7],[3.6,0.4,1.2,.8],[-1.8,1.6,.9,.6],[5.6,1.2,.8,.7]].forEach(([x,z,w,d])=>{const m=box(w,.03,d,'#2d2848',x,slopeY(z)+.14,z,it.b);m.rotation.x=PITCH});
 scatter(it,14,61,r=>{const z=-.9+r()*3.1;return[-3+r()*9,slopeY(z)+.2,z]},.35,.7,{rx:PITCH})}

// --- panel solar ---
{const it=mk('panel');
 const mkP=(broken)=>{const g=new THREE.Group();g.position.set(4.4,slopeY(.9)+.28,.9);g.rotation.x=PITCH+(broken?-.2:0);g.rotation.z=broken?.17:0;
   box(2.7,.08,1.6,broken?'#9c8a8e':'#efe9f8',0,0,0,g);box(2.5,.06,1.4,broken?'#434a7c':'#6784c8',0,.05,0,g);
   for(let i=1;i<5;i++)box(.025,.02,1.4,broken?'#6b709c':'#a9c0ef',-1.25+i*.5,.09,0,g);for(let j=1;j<3;j++)box(2.5,.02,.025,broken?'#6b709c':'#a9c0ef',0,.09,-.7+j*.47,g);
   if(broken){const c=box(.9,.02,.03,'#e9e6f5',.3,.1,.1,g);c.rotation.y=.7;const d=box(.6,.02,.03,'#e9e6f5',-.5,.1,-.2,g);d.rotation.y=-.5}
   return g};
 it.f.add(mkP(false));it.b.add(mkP(true));
 scatter(it,3,71,r=>[3.3+r()*2.2,slopeY(.9)+.4,.5+r()*.8],.3,.5,{rx:PITCH})}

// --- ventana (pared del fondo) ---
ASSET.paint=mkTex(256,200,(g,w,h)=>{const gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#f7d9c9');gr.addColorStop(.6,'#e8b9c9');gr.addColorStop(1,'#b8a9d9');g.fillStyle=gr;g.fillRect(0,0,w,h);
  g.fillStyle='#fff3d6';g.beginPath();g.arc(190,55,22,0,7);g.fill();
  g.fillStyle='#8f9ccf';g.beginPath();g.moveTo(0,h);g.lineTo(70,90);g.lineTo(130,150);g.lineTo(190,80);g.lineTo(w,150);g.lineTo(w,h);g.fill();
  g.fillStyle='#6f7fb8';g.beginPath();g.moveTo(0,h);g.lineTo(50,140);g.lineTo(110,h);g.fill();
  g.fillStyle='#7aa88f';for(let i=0;i<12;i++){const x=10+i*20;g.beginPath();g.moveTo(x,h);g.lineTo(x+8,h-34-(i%3)*10);g.lineTo(x+16,h);g.fill()}});
{const it=mk('ventana'),z=-2.84,x=2.4,y=Y0+1.95;
 [[0,.9],[0,-.9]].forEach(([dx,dy])=>0);
 const fr=(c,g)=>{box(1.9,.12,.14,c,x,y+.9,z,g);box(1.9,.12,.14,c,x,y-.9,z,g);box(.12,1.9,.14,c,x-.9,y,z,g);box(.12,1.9,.14,c,x+.9,y,z,g)};
 fr('#f2d6c0',it.f);fr(GREY,it.b);
 box(1.7,1.7,.05,mat('#cbd8ff',{emissive:'#90a8ea',emissiveIntensity:.8}),x,y,z+.02,it.f);
 box(.06,1.7,.07,'#f2d6c0',x,y,z+.06,it.f);box(1.7,.06,.07,'#f2d6c0',x,y,z+.06,it.f);
 box(.5,1.9,.1,'#f6e9d8',x-.85,y+.0,z+.12,it.f);box(.5,1.9,.1,'#f6e9d8',x+.85,y,z+.12,it.f);
 box(1.7,1.7,.05,'#2b2644',x,y,z+.02,it.b);
 [[.8,.04,.5],[.04,.7,-.3],[.5,.04,-.6]].forEach(([w,h,a])=>{const m=box(w,h,.02,'#e9e6f5',x+(a*.3),y+a*.3,z+.06,it.b);m.rotation.z=a*2});
 scatter(it,3,81,r=>[x-.7+r()*1.4,y+.95,z+.1],.25,.4,{wall:false})}
}
