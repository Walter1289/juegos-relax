/* interior.js — distribución del cuarto japonés (washitsu): tokonoma con ikebana, mesa baja con zabutones, brasero, tansu y andon.
   Se añade al grupo "reparado" del piso: el cuarto se ordena cuando el piso vuelve a estar firme. */
import * as THREE from 'three';
import {Y0} from './util.js';
import {mat,box} from './mats.js';
export function buildInterior(g){
  const F=Y0+.07;                                         // altura del tatami
  const cyl=(r1,r2,h,c,x,y,z,seg=10)=>{const m=new THREE.Mesh(new THREE.CylinderGeometry(r1,r2,h,seg),mat(c));m.position.set(x,y,z);g.add(m);return m};
  const ball=(r,c,x,y,z,sx=1,sy=1,sz=1)=>{const m=new THREE.Mesh(new THREE.SphereGeometry(r,10,8),mat(c));m.scale.set(sx,sy,sz);m.position.set(x,y,z);g.add(m);return m};
  // --- tokonoma: alcoba elevada bajo el pergamino, con florero de ikebana (rama de sakura) ---
  box(1.35,.16,.55,'#4b342a',.55,F+.08,-2.5,g);box(1.2,.04,.5,'#e8dcc0',.55,F+.18,-2.5,g);
  cyl(.09,.14,.34,'#2f4a74',.3,F+.37,-2.5);cyl(.06,.09,.06,'#e8dcc0',.3,F+.57,-2.5);
  {const br=box(.03,.7,.03,'#5a3d33',.32,F+.9,-2.5,g);br.rotation.z=-.35;const br2=box(.03,.45,.03,'#5a3d33',.2,F+.78,-2.5,g);br2.rotation.z=.5;
   [[.18,1.18],[.05,1.02],[.4,1.12],[.12,.88],[.28,1.0]].forEach(([dx,dy],i)=>ball(.075,['#f3bccb','#eea9bd','#f8d0da'][i%3],.3+dx*.6,F+dy,-2.5+(i%2?.04:-.04)))}
  cyl(.1,.1,.14,'#c9a14a',1.05,F+.25,-2.5);                // incensario
  // --- mesa baja (chabudai) con juego de té y zabutones ---
  {const tx=1.5,tz=-.2,TH=F+.42;box(1.7,.07,1.05,'#5a3d2e',tx,TH,tz,g);box(1.55,.03,.9,'#8e5a3a',tx,TH+.05,tz,g);
   [[-.75,-.45],[.75,-.45],[-.75,.45],[.75,.45]].forEach(([dx,dz])=>box(.09,.4,.09,'#4b342a',tx+dx,F+.2,tz+dz,g));
   box(.55,.025,.36,'#2f2a2a',tx-.15,TH+.075,tz,g);                      // bandeja
   ball(.13,'#9a6a3c',tx-.2,TH+.19,tz,1,.85,1);cyl(.03,.03,.14,'#9a6a3c',tx-.04,TH+.18,tz,6).rotation.z=-.9;ball(.05,'#9a6a3c',tx-.2,TH+.33,tz); // tetera
   [.12,.34].forEach(d=>cyl(.05,.04,.06,'#e8dcc0',tx+d-.1,TH+.1,tz+.2,8));                               // tazas
   cyl(.1,.1,.03,'#d9c08a',tx+.55,TH+.08,tz-.15,10);                                                         // plato con dulces
   [[1.5,-1.15,'#8e3d2e'],[1.5,.8,'#2f4a74'],[2.85,-.2,'#c9a14a']].forEach(([x,z,c],i)=>{box(.78,.1,.78,c,x,F+.06,z,g);box(.5,.02,.5,'#f0e6cf',x,F+.12,z,g)})}
  // --- brasero (hibachi) con carbón al rojo y tetera de hierro ---
  {cyl(.3,.27,.34,'#2f4a74',.0,F+.17,.95,12);cyl(.24,.24,.03,'#33302f',0,F+.33,.95,12);
   const co=new THREE.Mesh(new THREE.CircleGeometry(.2,12).rotateX(-Math.PI/2),new THREE.MeshBasicMaterial({color:0xff7a3a}));co.position.set(0,F+.355,.95);g.add(co);
   ball(.14,'#33302f',0,F+.5,.95,1.15,.85,1.15);cyl(.035,.03,.18,'#33302f',.17,F+.52,.95,6).rotation.z=-.8}
  // --- tansu (cómoda) de madera con herrajes dorados, junto a la pared izquierda ---
  {box(.6,1.15,1.1,'#7a4a34',-2.05,F+.57,.65,g);[.25,.57,.9].forEach(y=>{box(.03,.3,1.0,'#5a3524',-1.74,F+y,.65,g);[-.2,.2].forEach(dz=>box(.04,.06,.1,'#c9a14a',-1.72,F+y,.65+dz,g))})}
  // --- andon (farol de pie con papel) junto al futón ---
  {box(.36,.06,.36,'#4b342a',3.05,F+.03,-2.3,g);box(.3,.5,.3,mat('#f6ecd4',{emissive:'#ffcf8a',emissiveIntensity:.5}),3.05,F+.34,-2.3);box(.4,.05,.4,'#4b342a',3.05,F+.62,-2.3,g)}
}
