/* items-a.js — objetos reparables (parte 1): piso, barandal, escalera, techo, panel solar y ventana */
import * as THREE from 'three';
import {Y0,rng,mkTex} from './util.js';
import {mat,box} from './mats.js';
import {scatter} from './blobs.js';
import {mk,ASSET,CORAL,GREY,PITCH,slopeY} from './kit.js';
import {buildInterior} from './interior.js';
export function buildItemsA(){
// --- piso ---
{const it=mk('piso'),r=rng(21);
 for(let i=0;i<24;i++){const x=-3.76+i*.5;
   box(.46,.14,7,['#dcbc98','#d4b290','#e0c19e'][i%3],x,Y0-.07,.5,it.f);
   if(r()>.27){const L=7*(.55+.45*r());const m=box(.46,.14,L,['#a8978c','#9d8c82','#b0a095'][i%3],x,Y0-.07+(r()-.5)*.1,.5+(7-L)*(r()>.5?.5:-.5),it.b);m.rotation.y=(r()-.5)*.06;m.rotation.z=(r()-.5)*.05}}
 // tatami: esteras de igusa con orilla verde oscuro en el interior
 for(let ix=0;ix<4;ix++)for(let iz=0;iz<5;iz++){const x=-1.35+ix*1.9,z=-2.25+iz*.95;box(1.9,.05,.95,'#56633f',x,Y0+.03,z,it.f);box(1.78,.06,.83,'#d2c58e',x,Y0+.035,z,it.f)}
 buildInterior(it.f);
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

// --- lucernario del tejado (ventila el humo; de papel shoji) ---
{const it=mk('panel');
 const mkP=(broken)=>{const g=new THREE.Group();g.position.set(4.4,slopeY(.9)+.28,.9);g.rotation.x=PITCH;
   if(!broken){box(2.3,.9,1.5,'#4b342a',0,.45,0,g);box(2.0,.62,.05,mat('#f6ecd4',{emissive:'#ffcf8a',emissiveIntensity:.55}),0,.5,.78,g);
     [-.5,0,.5].forEach(x=>box(.05,.62,.07,'#4b342a',x,.5,.8,g));box(2.0,.05,.07,'#4b342a',0,.5,.8,g);
     box(2.7,.13,1.95,'#4f596f',0,1.0,0,g);box(2.4,.1,1.7,'#4f596f',0,1.12,0,g);box(2.7,.06,.1,'#c9a14a',0,.93,1.0,g)}
   else{box(2.0,.1,1.3,'#2d2848',0,.02,0,g);const p1=box(1.7,.07,.3,'#8d7f74',-.2,.18,.2,g);p1.rotation.z=.4;const p2=box(1.2,.07,.3,'#8d7f74',.4,.14,-.2,g);p2.rotation.z=-.5;p2.rotation.y=.4}
   return g};
 it.f.add(mkP(false));it.b.add(mkP(true));
 scatter(it,3,71,r=>[3.3+r()*2.2,slopeY(.9)+.4,.5+r()*.8],.3,.5,{rx:PITCH})}

// --- ventana (pared del fondo) ---
ASSET.paint=mkTex(200,340,(g,w,h)=>{const gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#f4e3c4');gr.addColorStop(.55,'#f2c9a4');gr.addColorStop(1,'#e8b49a');g.fillStyle=gr;g.fillRect(0,0,w,h);
  g.fillStyle='#d9473a';g.beginPath();g.arc(140,70,26,0,7);g.fill();
  g.fillStyle='rgba(120,110,150,.55)';g.beginPath();g.moveTo(0,200);g.lineTo(60,130);g.lineTo(110,185);g.lineTo(170,120);g.lineTo(w,190);g.lineTo(w,230);g.lineTo(0,230);g.fill();
  g.fillStyle='rgba(70,70,100,.8)';g.beginPath();g.moveTo(0,260);g.lineTo(50,210);g.lineTo(120,260);g.lineTo(w,230);g.lineTo(w,h);g.lineTo(0,h);g.fill();
  g.strokeStyle='#2c2a2e';g.lineWidth=5;g.beginPath();g.moveTo(40,h);g.bezierCurveTo(30,280,60,250,50,210);g.stroke();
  g.fillStyle='#2c2a2e';for(let i=0;i<4;i++){g.beginPath();g.ellipse(48+i*12,205+i*8,28-i*3,7,0,0,7);g.fill()}
  g.fillStyle='#b8362b';g.fillRect(150,285,22,22)});
{const it=mk('ventana'),z=-2.84,x=2.4,y=Y0+1.95;
 [[0,.9],[0,-.9]].forEach(([dx,dy])=>0);
 const fr=(c,g)=>{box(1.9,.12,.14,c,x,y+.9,z,g);box(1.9,.12,.14,c,x,y-.9,z,g);box(.12,1.9,.14,c,x-.9,y,z,g);box(.12,1.9,.14,c,x+.9,y,z,g)};
 fr('#f2d6c0',it.f);fr(GREY,it.b);
 box(1.7,1.7,.05,mat('#f6ecd4',{emissive:'#ffd9a8',emissiveIntensity:.6}),x,y,z+.02,it.f);
 [-.57,0,.57].forEach(dx=>box(.05,1.7,.07,'#4b342a',x+dx,y,z+.06,it.f));[-.57,0,.57].forEach(dy=>box(1.7,.05,.07,'#4b342a',x,y+dy,z+.06,it.f));box(.07,1.9,.09,'#4b342a',x,y,z+.08,it.f);
 box(1.7,1.7,.05,'#2b2644',x,y,z+.02,it.b);
 [[.8,.04,.5],[.04,.7,-.3],[.5,.04,-.6]].forEach(([w,h,a])=>{const m=box(w,h,.02,'#e9e6f5',x+(a*.3),y+a*.3,z+.06,it.b);m.rotation.z=a*2});
 scatter(it,3,81,r=>[x-.7+r()*1.4,y+.95,z+.1],.25,.4,{wall:false})}
}
