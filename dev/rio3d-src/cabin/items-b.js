/* items-b.js — objetos reparables (parte 2): librero, cama, lámpara, luces de cuerda, cuadro, plantas y nichos */
import * as THREE from 'three';
import {Y0,rng,lerp,spr,glowTex} from './util.js';
import {scene} from './core.js';
import {mat,box} from './mats.js';
import {scatter} from './blobs.js';
import {mk,W,GREY,ASSET} from './kit.js';
import {LT,makeLamp} from './lights.js';
export function buildItemsB(){
// --- librero ---
{const it=mk('librero'),x=-1.4,z=-2.55,BK=['#c97d68','#6498b9','#cfb67c','#82ab84','#b0769c','#dad2bc'];
 const mkB=(broken)=>{const g=new THREE.Group();g.position.set(x,Y0,z);const c=broken?GREY:'#d4a98c';
   box(.1,2.7,.6,c,-.8,1.35,0,g);box(.1,2.7,.6,c,.8,1.35,0,g);box(1.7,2.7,.05,broken?'#8e7f7a':'#c49a7d',0,1.35,-.28,g);
   const sh=broken?[0,.9,1.8]:[0,.68,1.36,2.04,2.7];sh.forEach(y=>box(1.7,.08,.6,c,0,y+.04,0,g));
   const r=rng(broken?4:8);
   if(!broken){for(let s=0;s<4;s++){let bx=-.7;while(bx<.6){const w=.1+r()*.12;box(w,.45+r()*.12,.38,BK[(r()*6)|0],bx+w/2,.68*s+.3,0,g);bx+=w+.01}}}
   else{for(let i=0;i<6;i++){const m=box(.14,.5,.38,BK[i],-.6+i*.18,.34+(i>3?.9:0),0,g);m.rotation.z=(r()-.5)*.9}
     for(let i=0;i<5;i++){const m=box(.14,.38,.28,BK[i],-.5+r()*1.4,.1,.7+r()*.4,g);m.rotation.z=1.4+r()*.4;m.rotation.y=r()*3}}
   if(broken){g.rotation.z=.1}return g};
 it.f.add(mkB(false));it.b.add(mkB(true));
 scatter(it,4,91,r=>[x-.7+r()*1.4,Y0+2.76,z+(r()-.5)*.3],.25,.4)}

// --- futón sobre el tatami ---
{const it=mk('cama'),x=4.5,z=-1.6;
 const mkC=(broken)=>{const g=new THREE.Group();g.position.set(x,Y0,z);
   box(2.0,.16,2.8,broken?'#a9a2b4':'#f0e6cf',0,.14,0,g);
   if(!broken){box(1.9,.15,1.95,'#2f4a74',0,.29,.33,g);[-.55,.15,.85].forEach(dz=>box(1.92,.16,.1,'#f0e6cf',0,.3,.33+dz,g));
     const mk_=new THREE.Mesh(new THREE.CylinderGeometry(.14,.14,.9,8),mat('#d9c08a'));mk_.rotation.z=Math.PI/2;mk_.position.set(0,.34,-1.05);g.add(mk_)}
   else{const m=box(1.5,.12,1.2,'#8d86a0',.2,.26,.3,g);m.rotation.y=.3;const p=box(.9,.1,.3,'#bdb6c9',.2,.24,-1.05,g);p.rotation.y=.2}
   return g};
 it.f.add(mkC(false));it.b.add(mkC(true));
 scatter(it,4,101,r=>[x-.8+r()*1.6,Y0+.4,z-1.1+r()*2.2],.3,.5)}

// --- lámpara ---
makeLamp();
{const it=mk('lampara'),x=1.5,z=-1;
 const shade=(broken)=>{const g=new THREE.Group();g.position.set(x,7.15,z);
   box(.03,broken?.7:1.7,.03,'#6a5058',0,broken?.9:1.35,0,g);
   const sh=new THREE.Mesh(new THREE.SphereGeometry(.46,14,10),new THREE.MeshLambertMaterial({color:broken?'#9a919c':'#f8ebd0',side:THREE.DoubleSide,emissive:broken?'#000':'#ffcf8a',emissiveIntensity:broken?0:.6,flatShading:true}));sh.position.y=.1;sh.scale.set(1,.85,1);g.add(sh);[.4,-.18].forEach(yy=>{const cp=new THREE.Mesh(new THREE.CylinderGeometry(.2,.2,.06,10),mat('#2f2a2a'));cp.position.y=yy;g.add(cp)});
   if(!broken){const b=new THREE.Mesh(new THREE.SphereGeometry(.14,10,8),new THREE.MeshBasicMaterial({color:0xfff0c8}));b.position.y=-.02;g.add(b)}else{g.rotation.z=.35}
   return g};
 it.f.add(shade(false));it.b.add(shade(true));
 scatter(it,1,111,r=>[x,7.45,z],.25,.3)}

// --- luces de cuerda ---
{const it=mk('luces'),r=rng(13),COLS=[0xff9a62,0xfff0d0,0xe8604a,0xffd9a0];
 for(let seg=0;seg<3;seg++){const xa=-3+seg*3.1,xb=xa+3.1;
   for(let k=0;k<=4;k++){const u=k/4,x=lerp(xa,xb,u),y=7.0-.35*Math.sin(Math.PI*u),z=2.55;
     const col=COLS[(seg*5+k)%4];
     const bf=new THREE.Mesh(new THREE.SphereGeometry(.15,10,8),new THREE.MeshBasicMaterial({color:col}));bf.scale.set(1,1.25,1);bf.position.set(x,y-.16,z);it.f.add(bf);
     const g=spr(glowTex,col,1.5,0,true);g.position.copy(bf.position);scene.add(g);LT.bulbs.push(g);
     if(!(seg===1&&k>0&&k<4)){const bb=new THREE.Mesh(new THREE.SphereGeometry(.1,8,6),mat('#8d8398'));bb.position.set(x,y-.1,z);bb.rotation.set(r(),r(),0);it.b.add(bb)}
     if(k<4){const x2=lerp(xa,xb,(k+1)/4),y2=7.0-.35*Math.sin(Math.PI*(k+1)/4),m=box(Math.hypot(x2-x,y2-y),.02,.02,'#6b4a35',(x+x2)/2,(y+y2)/2,z,it.f);m.rotation.z=Math.atan2(y2-y,x2-x);
       if(!(seg===1)){const mb=box(Math.hypot(x2-x,y2-y),.02,.02,'#6a6076',(x+x2)/2,(y+y2)/2,z,it.b);mb.rotation.z=m.rotation.z}}}}
 scatter(it,2,121,r=>[-2+r()*7,7.3,2.4],.2,.3)}

// --- kakejiku (pergamino colgante) ---
{const it=mk('cuadro'),x=.55,y=Y0+2.2,z=-2.7;
 const mkQ=(broken)=>{const g=new THREE.Group();g.position.set(x,y,z);if(broken)g.rotation.z=.28;
   box(.86,1.65,.04,broken?GREY:'#2f4a6b',0,0,0,g);
   const p=new THREE.Mesh(new THREE.PlaneGeometry(.62,1.18),broken?new THREE.MeshLambertMaterial({color:'#bcb5c8'}):new THREE.MeshBasicMaterial({map:ASSET.paint}));p.position.set(0,-.04,.03);g.add(p);
   [.84,-.84].forEach(yy=>{const rl=new THREE.Mesh(new THREE.CylinderGeometry(.045,.045,1.0,8),mat('#5a3d2e'));rl.rotation.z=Math.PI/2;rl.position.set(0,yy,.03);g.add(rl)});
   if(broken){const c=box(.7,.02,.02,'#eee9f7',0,0,.05,g);c.rotation.z=.8}return g};
 it.f.add(mkQ(false));it.b.add(mkQ(true));
 scatter(it,1,131,r=>[x,y+.9,z+.1],.22,.3)}

// --- bonsái de pino y bonsái de sakura ---
{const it=mk('plantas'),r=rng(7);
 [[6.5,'#2f4a74',0],[7.3,'#9a6a3c',1]].forEach(([x,pc,k])=>{
   box(.62,.22,.5,pc,x,Y0+.11,3.0,it.f);box(.62,.22,.5,'#a89b92',x,Y0+.11,3.0,it.b);
   const tr=new THREE.Mesh(new THREE.CylinderGeometry(.05,.09,.7,6),mat('#5a3d33'));tr.position.set(x,Y0+.55,3.0);tr.rotation.z=.25;it.f.add(tr);
   const fol=k?['#f3bccb','#eea9bd','#f8d0da','#e99fb4','#f3bccb']:['#4f7a58','#5f8f66','#44704f'];
   fol.forEach((c,i)=>{const l=new THREE.Mesh(new THREE.IcosahedronGeometry(k?.2:.26,0),mat(c));l.position.set(x+(i-1)*.18+(r()-.5)*.1,Y0+.85+(i%2)*.14,3+(r()-.5)*.25);if(!k)l.scale.set(1.5,.55,1.2);it.f.add(l)});
   for(let q=0;q<3;q++){const s2=box(.03,.45,.03,'#8a7a62',x+(r()-.5)*.4,Y0+.55,3+(r()-.5)*.3,it.b);s2.rotation.z=(r()-.5)*.8}});
 scatter(it,2,141,r=>[6.5+r()*.9,Y0+.5,3.0],.25,.35)}

// --- nichos hexagonales en el acantilado ---
{const it=mk('nichos'),r=rng(17);
 [[-10.9,2.4],[-8.5,-.2],[-11.1,-2.7]].forEach(([x,y])=>{
   const hex=(rad,d,c,zz,parent)=>{const m=new THREE.Mesh(new THREE.CylinderGeometry(rad,rad,d,6),typeof c==='string'?mat(c):c);m.rotation.x=Math.PI/2;m.rotation.y=Math.PI/6;m.position.set(x,y,zz);parent.add(m);return m};
   hex(.95,.7,'#c89479',5.2,W);
   hex(.78,.3,mat('#383254'),5.55,it.b);
   hex(.78,.3,new THREE.MeshBasicMaterial({color:0xffe0a6}),5.55,it.f);
   const jar=new THREE.Mesh(new THREE.SphereGeometry(.3,10,8),new THREE.MeshLambertMaterial({color:0xfff3d0,emissive:0xffd68a,emissiveIntensity:.9,transparent:true,opacity:.9}));jar.position.set(x,y-.25,5.6);it.f.add(jar);
   const gl=spr(glowTex,0xffcf86,3.2,0,true);gl.position.set(x,y,5.9);scene.add(gl);LT.nichoGlow.push(gl);
   const w1=box(.9,.02,.02,'#cfcbe0',x,y+.2,5.6,it.b);w1.rotation.z=.5;const w2=box(.9,.02,.02,'#cfcbe0',x,y-.1,5.6,it.b);w2.rotation.z=-.4});
 scatter(it,3,151,r=>[-11+r()*3,3.7,5.2],.3,.4)}

/* ---- orden de reglas: costos, requisitos y recompensas (igual que el juego 2D) ---- */
}
