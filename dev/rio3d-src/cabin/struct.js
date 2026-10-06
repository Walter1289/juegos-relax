/* struct.js — estructura fija de la cabaña: pilotes, muros, chimenea, techo-remates, faroles, macetas, kayaks y escalera */
import * as THREE from 'three';
import {scene} from './core.js';
import {Y0,spr,glowTex} from './util.js';
import {mat,box} from './mats.js';
import {W,makeRoot,S,WOOD,WOOD2,DECK,DARK,STONE,TEAL} from './kit.js';
import {LT} from './lights.js';
export function buildStruct(){
makeRoot();scene.add(W);
/* ---- estructura fija ---- */
// pilotes y vigas bajo la terraza
box(12.4,.28,.22,DARK,2,Y0-.35,3.9,W);box(12.4,.28,.22,DARK,2,Y0-.35,-2.9,W);
for(let i=0;i<8;i++)box(.2,.26,7.2,'#8f6f66',-3.8+i*1.65,Y0-.35,.5,W);
[[-3.6,3.7],[-3.6,-2.7],[1,3.7],[1,-2.7],[4.8,3.7],[4.8,-2.7],[7.7,3.7],[7.7,-2.7]].forEach(([x,z])=>S(box(.38,18.4,.38,'#9a7a70',x,Y0-9.5,z,W)));
for(const x of [1,4.8]){const b=box(.15,.15,6.6,'#8f6f66',x,Y0-5,.5,W);b.rotation.x=0}
const brace=(x0,y0,x1,y1,z)=>{const L=Math.hypot(x1-x0,y1-y0),b=box(L,.16,.16,'#8f6f66',(x0+x1)/2,(y0+y1)/2,z,W);b.rotation.z=Math.atan2(y1-y0,x1-x0)};
brace(-3.6,Y0-4,1,Y0-.5,3.7);brace(1,Y0-.5,4.8,Y0-4,3.7);brace(4.8,Y0-4,7.7,Y0-.5,3.7);brace(1,Y0-4,4.8,Y0-.5,3.7);brace(4.8,Y0-.5,7.7,Y0-4,3.7);
box(12,.1,6.8,'#4a4470',2,Y0-.6,.5,W);                       // oscuridad bajo la terraza (se ve por los huecos)
// muros
S(box(8.2,3.9,.2,WOOD,1.5,Y0+1.95,-2.95,W));
for(let i=0;i<14;i++)box(.05,3.9,.04,WOOD2,-2.4+i*.6,Y0+1.95,-2.83,W);
S(box(8.1,.9,.1,STONE,1.5,Y0+.45,-2.8,W));
for(let i=0;i<8;i++)box(.04,.9,.02,'#8f8ab0',-2.1+i*1,Y0+.45,-2.74,W);
{const sh=new THREE.Shape();[[3,0],[-1,0],[-1,3.9],[1,5.2],[3,3.9]].forEach(([x,y],i)=>i?sh.lineTo(x,y):sh.moveTo(x,y));
 for(const x of [-2.6,5.4]){const g=new THREE.ExtrudeGeometry(sh,{depth:.2,bevelEnabled:false});g.rotateY(Math.PI/2);const m=new THREE.Mesh(g,mat(WOOD));m.position.set(x,Y0,0);W.add(m);S(m)}}
S(box(8.4,.8,.22,DARK,1.5,7.8,1,W));
[-2.5,5.5].forEach(x=>S(box(.3,3.5,.3,DARK,x,Y0+1.75,1,W)));
// piedra y chimenea
{const ch=new THREE.Group();W.add(ch);
 for(let i=0;i<9;i++)box(.9+(i%2)*.05,.5,.9,['#aaa5c8','#9a95bb','#b4afd2'][i%3],-1.2+(i%2)*.04,7.4+i*.44,-1.8,ch);
 box(1.1,.15,1.1,'#8e89b0',-1.2,11.4,-1.8,ch);S(ch.children[0])}
// remates del techo
box(9.9,.18,.3,DARK,1.5,9.5,-1,W);box(9.9,.2,.22,DARK,1.5,7.2,2.45,W);box(9.9,.2,.22,DARK,1.5,7.2,-4.45,W);
box(.2,.2,6.8,DARK,-3.3,7.15,-1,W);box(.2,.2,6.8,DARK,6.3,7.15,-1,W);
// faroles del porche
[-2.6,5.6].forEach(x=>{const g=new THREE.Group();g.position.set(x,6.5,2.1);W.add(g);
  box(.03,.5,.03,'#6a5058',0,.5,0,g);const body=box(.3,.42,.3,mat('#ffe0a8',{emissive:'#ffb860',emissiveIntensity:.0}),0,0,0,g);box(.38,.07,.38,'#a86a5c',0,.24,0,g);box(.38,.07,.38,'#a86a5c',0,-.24,0,g);
  const gl=spr(glowTex,0xffc27a,3.2,0,true);g.add(gl);const L=new THREE.PointLight(0xffc27a,0,11,1.5);g.add(L);LT.porchL.push({body,gl,L})});
// macetas fijas de colores
[[-3.2,'#e6a091','#f5c9d9'],[-2.4,'#7fc3bd','#f8e5a0'],[-1.6,'#d9a9cb','#ffffff'],[-.8,'#a6cf92','#f5c9d9']].forEach(([x,pc,fc])=>{
  box(.5,.4,.5,pc,x,Y0+.2,3.3,W);const s=new THREE.Mesh(new THREE.IcosahedronGeometry(.34,0),mat('#79b08a'));s.position.set(x,Y0+.55,3.3);W.add(s);
  [[.1,.8],[-.12,.72],[.05,.95]].forEach(([dx,dy])=>{const f=new THREE.Mesh(new THREE.IcosahedronGeometry(.1,0),mat(fc));f.position.set(x+dx,Y0+dy,3.35);W.add(f)})});
// kayaks
for(const [i,c] of [[0,'#e6a091'],[1,TEAL]]){
  const k=new THREE.Mesh(new THREE.CapsuleGeometry(.3,3.2,4,8),mat(c));k.rotation.x=Math.PI/2;k.scale.set(1,1,.7);k.position.set(7.1+i*.0,Y0+.75+i*.6,-.6);W.add(k);
  const cp=box(.45,.12,.8,'#4a4470',7.1,Y0+.9+i*.6,-.5,W);cp.visible=true}
[-1.9,.7].forEach(z=>{box(.14,1.9,.14,'#8f6f66',7.1,Y0+.95,z,W)});
// escalera: largueros siempre visibles
{const x0=8.2,y0=Y0,x1=15.1,y1=Y0-5.9,L=Math.hypot(x1-x0,y1-y0),a=Math.atan2(y1-y0,x1-x0);
 [2.15,3.45].forEach(z=>{const b=box(L,.22,.14,'#8f6f66',(x0+x1)/2,(y0+y1)/2-.3,z,W);b.rotation.z=a;S(b)});
 box(2,.2,2.2,DECK,15.7,Y0-6.1,2.8,W);[[15.1,2],[16.4,3.6]].forEach(([x,z])=>box(.3,12,.3,'#9a7a70',x,Y0-12,z,W))}
// peldaños de piedra al pie y farol
{const L=spr(glowTex,0xffc27a,3,.55,true);L.position.set(16.5,Y0-5.2,3.5);W.add(L);box(.08,1.1,.08,'#6a5058',16.5,Y0-5.7,3.5,W)}
}
