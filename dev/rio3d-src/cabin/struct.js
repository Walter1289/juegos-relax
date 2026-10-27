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
S(box(8.2,3.9,.2,'#eadfc2',1.5,Y0+1.95,-2.95,W));
// entramado de madera oscura (estilo minka): postes, vigas y travesaños
[-2.55,1.35,3.5,5.55].forEach(x=>box(.22,3.9,.12,DARK,x,Y0+1.95,-2.8,W));
[Y0+.95,Y0+3.05,Y0+3.82].forEach(y=>box(8.2,.18,.12,DARK,1.5,y,-2.8,W));
S(box(8.1,.9,.1,STONE,1.5,Y0+.45,-2.8,W));
for(let i=0;i<8;i++)box(.04,.9,.02,'#8f8ab0',-2.1+i*1,Y0+.45,-2.74,W);
{const sh=new THREE.Shape();[[3,0],[-1,0],[-1,3.9],[1,5.2],[3,3.9]].forEach(([x,y],i)=>i?sh.lineTo(x,y):sh.moveTo(x,y));
 for(const x of [-2.6,5.4]){const g=new THREE.ExtrudeGeometry(sh,{depth:.2,bevelEnabled:false});g.rotateY(Math.PI/2);const m=new THREE.Mesh(g,mat(WOOD));m.position.set(x,Y0,0);W.add(m);S(m)}}
S(box(8.4,.8,.22,DARK,1.5,7.8,1,W));
[-2.5,5.5].forEach(x=>S(box(.3,3.5,.3,DARK,x,Y0+1.75,1,W)));
// cumbrera: cilindro de teja redondeada con onigawara (adornos de los extremos)
{const rg=new THREE.Mesh(new THREE.CylinderGeometry(.3,.3,10.6,10),mat('#3e4659'));rg.rotation.z=Math.PI/2;rg.position.set(1.5,9.62,-1);W.add(rg);
 [-1,1].forEach(sd=>{const o=new THREE.Mesh(new THREE.ConeGeometry(.42,.95,6),mat('#3e4659'));o.position.set(1.5+sd*5.4,9.95,-1);o.rotation.z=-sd*.35;W.add(o);
   const ball=new THREE.Mesh(new THREE.SphereGeometry(.22,8,6),mat('#c9a14a'));ball.position.set(1.5+sd*5.55,10.5,-1);W.add(ball)})}
// remates del techo
box(9.9,.18,.3,DARK,1.5,9.5,-1,W);box(9.9,.2,.22,DARK,1.5,7.2,2.45,W);box(9.9,.2,.22,DARK,1.5,7.2,-4.45,W);
box(.2,.2,6.8,DARK,-3.3,7.15,-1,W);box(.2,.2,6.8,DARK,6.3,7.15,-1,W);
// faroles del porche
[-2.6,5.6].forEach(x=>{const g=new THREE.Group();g.position.set(x,6.5,2.1);W.add(g);
  box(.03,.5,.03,'#6a5058',0,.5,0,g);const body=new THREE.Mesh(new THREE.SphereGeometry(.26,12,10),mat('#f3e2c2',{emissive:'#ff9a4a',emissiveIntensity:.0}));body.scale.set(1,1.25,1);g.add(body);[.3,-.3].forEach(y=>box(.24,.06,.24,'#2f2a2a',0,y,0,g));[-.12,0,.12].forEach(y=>{const rb=new THREE.Mesh(new THREE.TorusGeometry(.255*Math.sqrt(1-Math.pow(y/.33,2)),.008,4,16),mat('#8e3d2e'));rb.rotation.x=Math.PI/2;rb.position.y=y;g.add(rb)});
  const gl=spr(glowTex,0xffc27a,3.2,0,true);g.add(gl);const L=new THREE.PointLight(0xffc27a,0,11,1.5);g.add(L);LT.porchL.push({body,gl,L})});
// macetas fijas de colores
[[-3.2,'#e6a091','#f5c9d9'],[-2.4,'#7fc3bd','#f8e5a0'],[-1.6,'#d9a9cb','#ffffff'],[-.8,'#a6cf92','#f5c9d9']].forEach(([x,pc,fc])=>{
  box(.5,.4,.5,pc,x,Y0+.2,3.3,W);const s=new THREE.Mesh(new THREE.IcosahedronGeometry(.34,0),mat('#79b08a'));s.position.set(x,Y0+.55,3.3);W.add(s);
  [[.1,.8],[-.12,.72],[.05,.95]].forEach(([dx,dy])=>{const f=new THREE.Mesh(new THREE.IcosahedronGeometry(.1,0),mat(fc));f.position.set(x+dx,Y0+dy,3.35);W.add(f)})});
// farol de piedra (tōrō) y cuenco de agua con caño de bambú
{const tg=new THREE.Group();tg.position.set(7.3,Y0,-.2);W.add(tg);const sm='#aaa59d';
 const cy=(r1,r2,h,y,seg=8)=>{const m=new THREE.Mesh(new THREE.CylinderGeometry(r1,r2,h,seg),mat(sm));m.position.y=y;tg.add(m);return m};
 cy(.5,.55,.2,.1);cy(.18,.22,1.1,.75);cy(.5,.42,.16,1.38);
 const lb=new THREE.Mesh(new THREE.BoxGeometry(.5,.5,.5),mat('#ffe6b0',{emissive:'#ff9a4a',emissiveIntensity:0}));lb.position.y=1.7;tg.add(lb);
 const rf=new THREE.Mesh(new THREE.ConeGeometry(.62,.42,4),mat(sm));rf.rotation.y=Math.PI/4;rf.position.y=2.17;tg.add(rf);const kb=new THREE.Mesh(new THREE.SphereGeometry(.12,8,6),mat(sm));kb.position.y=2.45;tg.add(kb);
 const gl=spr(glowTex,0xffc27a,3,0,true);gl.position.y=1.7;tg.add(gl);LT.porchL.push({body:lb,gl,L:{intensity:0}});S(tg.children[1]);
 const bg=new THREE.Group();bg.position.set(6.4,Y0,-2.2);W.add(bg);const bs=new THREE.Mesh(new THREE.CylinderGeometry(.5,.42,.4,10),mat('#b1aca3'));bs.position.y=.2;bg.add(bs);
 const wt=new THREE.Mesh(new THREE.CircleGeometry(.42,10).rotateX(-Math.PI/2),new THREE.MeshBasicMaterial({color:0x7fa8b0}));wt.position.y=.38;bg.add(wt);
 const bam=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,.9,6),mat('#7aa05f'));bam.rotation.z=1.2;bam.position.set(.35,.75,0);bg.add(bam)}
// escalera: largueros siempre visibles
{const x0=8.2,y0=Y0,x1=15.1,y1=Y0-5.9,L=Math.hypot(x1-x0,y1-y0),a=Math.atan2(y1-y0,x1-x0);
 [2.15,3.45].forEach(z=>{const b=box(L,.22,.14,'#8f6f66',(x0+x1)/2,(y0+y1)/2-.3,z,W);b.rotation.z=a;S(b)});
 box(2,.2,2.2,DECK,15.7,Y0-6.1,2.8,W);[[15.1,2],[16.4,3.6]].forEach(([x,z])=>box(.3,12,.3,'#9a7a70',x,Y0-12,z,W))}
// torii bermellón al pie de la escalera
{const tr=new THREE.Group();tr.position.set(16.6,Y0-6.2,2.8);W.add(tr);const rd='#a8392b';
 [-1.7,1.7].forEach(z=>{const p=new THREE.Mesh(new THREE.CylinderGeometry(.18,.22,4.4,8),mat(rd));p.position.set(0,2.2,z);tr.add(p)});
 const kb=new THREE.Mesh(new THREE.BoxGeometry(.5,.3,4.6),mat('#2f2a2e'));kb.position.set(0,4.5,0);tr.add(kb);
 const nk=new THREE.Mesh(new THREE.BoxGeometry(.3,.24,3.7),mat(rd));nk.position.set(0,3.8,0);tr.add(nk)}
// peldaños de piedra al pie y farol
{const L=spr(glowTex,0xffc27a,3,.55,true);L.position.set(16.5,Y0-5.2,3.5);W.add(L);box(.08,1.1,.08,'#6a5058',16.5,Y0-5.7,3.5,W)}
}
