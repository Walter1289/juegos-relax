/* struct.js — estructura fija de la cabaña: pilotes, muros, chimenea, techo-remates, faroles, macetas, kayaks y escalera */
import * as THREE from 'three';
import {scene} from './core.js';
import {Y0,spr,glowTex} from './util.js';
import {mat,box,cyl} from './mats.js';
import {toonGrad,windify,bake} from '../style.js';
import {W,makeRoot,S,WOOD,WOOD2,DECK,DARK,STONE,TEAL,PITCH} from './kit.js';
import {LT} from './lights.js';
import {lang} from '../i18n.js';
import {lines,stairLit} from '../lightmsg.js';
import {ground,zc} from './terrain.js';
import {SIGN} from './sign.js';
export function buildStruct(){
makeRoot();scene.add(W);
/* ---- estructura fija ---- */
// pilotes y vigas bajo la terraza
box(12.4,.28,.22,DARK,2,Y0-.35,3.9,W);box(12.4,.28,.22,DARK,2,Y0-.35,-2.9,W);
for(let i=0;i<8;i++)box(.2,.26,7.2,'#8f6f66',-3.8+i*1.65,Y0-.35,.5,W);
[[-3.6,3.7],[-3.6,-2.7],[1,3.7],[1,-2.7],[4.8,3.7],[4.8,-2.7],[7.7,3.7],[7.7,-2.7]].forEach(([x,z])=>S(cyl(.19,.24,18.4,'#9a7a70',x,Y0-9.5,z,W,8)));   // pilotes: troncos redondos (antes vigas cuadradas)
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
// pilares del frente: troncos redondos sobre basa de piedra (soseki) y ménsulas escalonadas bajo la viga
[-2.5,5.5].forEach(x=>{S(cyl(.16,.185,3.3,DARK,x,Y0+1.7,1,W,10));cyl(.27,.31,.16,'#b1aca3',x,Y0+.08,1,W,10);box(.56,.13,.3,DARK,x,Y0+3.0,1,W);box(.98,.13,.26,DARK,x,Y0+3.13,1,W)});
// aleros: cabios vistos bajo el tejado, tablas de hastial (hafu) y colgante (gegyo) en cada hastial
[[.7,PITCH],[-2.7,-PITCH]].forEach(([z,rx])=>{const g=new THREE.Group();g.position.set(1.5,8.3,z);g.rotation.x=rx;W.add(g);const sg=rx>0?1:-1;
  for(let i=0;i<21;i++)box(.09,.1,1.0,DARK,-4.7+i*.47,-.17,sg*1.55,g);
  [-4.97,4.97].forEach(x=>{box(.1,.34,4.3,DARK,x,-.06,0,g);box(.12,.07,4.34,'#e6d3ae',x,.13,0,g)})});
[-1,1].forEach(sd=>{const x=1.5+sd*5.0;const gy=new THREE.Mesh(new THREE.CylinderGeometry(.27,.27,.08,6),mat(DARK));gy.rotation.z=Math.PI/2;gy.position.set(x,9.0,-1);W.add(gy);
  const st=new THREE.Mesh(new THREE.SphereGeometry(.07,8,6),mat('#c9a14a'));st.position.set(x+sd*.05,9.0,-1);W.add(st);box(.08,.3,.12,DARK,x,8.72,-1,W)});
// cumbrera: cilindro de teja redondeada con onigawara (adornos de los extremos)
{const rg=new THREE.Mesh(new THREE.CylinderGeometry(.3,.3,10.6,10),mat('#3e4659'));rg.rotation.z=Math.PI/2;rg.position.set(1.5,9.62,-1);W.add(rg);
 [-1,1].forEach(sd=>{const o=new THREE.Mesh(new THREE.ConeGeometry(.42,.95,6),mat('#3e4659'));o.position.set(1.5+sd*5.4,9.95,-1);o.rotation.z=-sd*.35;W.add(o);
   const ball=new THREE.Mesh(new THREE.SphereGeometry(.22,8,6),mat('#c9a14a'));ball.position.set(1.5+sd*5.55,10.5,-1);W.add(ball)})}
// remates del techo
box(9.9,.18,.3,DARK,1.5,9.5,-1,W);box(9.9,.2,.22,DARK,1.5,7.2,2.45,W);box(9.9,.2,.22,DARK,1.5,7.2,-4.45,W);
box(.2,.2,6.8,DARK,-3.3,7.15,-1,W);box(.2,.2,6.8,DARK,6.3,7.15,-1,W);
// faroles del porche
[-2.6,5.6].forEach(x=>{const g=new THREE.Group();g.position.set(x,6.5,2.1);W.add(g);
  box(.03,.5,.03,'#6a5058',0,.5,0,g);const body=new THREE.Mesh(new THREE.SphereGeometry(.26,12,10),mat('#f3e2c2',{emissive:'#ff9a4a',emissiveIntensity:.0}));body.scale.set(1,1.25,1);body.userData.dyn=true;g.add(body);[.3,-.3].forEach(y=>box(.24,.06,.24,'#2f2a2a',0,y,0,g));[-.12,0,.12].forEach(y=>{const rb=new THREE.Mesh(new THREE.TorusGeometry(.255*Math.sqrt(1-Math.pow(y/.33,2)),.008,4,16),mat('#8e3d2e'));rb.rotation.x=Math.PI/2;rb.position.y=y;g.add(rb)});
  const gl=spr(glowTex,0xffc27a,3.2,0,true);g.add(gl);const L=new THREE.PointLight(0xffc27a,0,11,1.5);g.add(L);LT.porchL.push({body,gl,L,g,b:g.position.clone(),a:0,av:0})});
// macetas fijas de colores
[[-3.2,'#e6a091','#f5c9d9'],[-2.4,'#7fc3bd','#f8e5a0'],[-1.6,'#d9a9cb','#ffffff'],[-.8,'#a6cf92','#f5c9d9']].forEach(([x,pc,fc])=>{
  cyl(.27,.2,.4,pc,x,Y0+.2,3.3,W,12);cyl(.295,.295,.05,pc,x,Y0+.4,3.3,W,12);const s=new THREE.Mesh(new THREE.IcosahedronGeometry(.34,1),mat('#79b08a'));s.position.set(x,Y0+.55,3.3);W.add(s);
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
 box(2.4,.2,2.4,DECK,15.9,Y0-6.1,2.8,W)}
// torii bermellón al pie de la escalera
{const tr=new THREE.Group();tr.position.set(22,ground(22,zc(22)),zc(22));W.add(tr);const rd='#a8392b';
 [-1.7,1.7].forEach(z=>{const p=new THREE.Mesh(new THREE.CylinderGeometry(.18,.22,4.4,8),mat(rd));p.position.set(0,2.2,z);tr.add(p)});
 const kb=new THREE.Mesh(new THREE.BoxGeometry(.5,.3,4.6),mat('#2f2a2e'));kb.position.set(0,4.5,0);tr.add(kb);
 const nk=new THREE.Mesh(new THREE.BoxGeometry(.3,.24,3.7),mat(rd));nk.position.set(0,3.8,0);tr.add(nk)}
/* cartel de madera a la entrada: un mensaje enigmático que se descubrirá más adelante */
{const MSG=lines();
 const c=document.createElement('canvas');c.width=512;c.height=320;const g=c.getContext('2d');
 g.fillStyle='#6b4a36';g.fillRect(0,0,512,320);
 for(let i=0;i<46;i++){g.fillStyle='rgba(40,22,14,'+(.05+Math.random()*.08)+')';g.fillRect(0,Math.random()*320,512,1+Math.random()*2)}
 g.strokeStyle='#3b261b';g.lineWidth=10;g.strokeRect(5,5,502,310);
 g.textAlign='center';g.font='italic 600 40px "Noto Serif JP","Georgia",serif';
 MSG.forEach((t,i)=>{g.fillStyle=t.includes('···')?'#b8996a':'#f6e3b4';g.fillText(t,256,86+i*58)});
 
 const tx=new THREE.CanvasTexture(c);tx.colorSpace=THREE.SRGBColorSpace;tx.anisotropy=8;
 const sg=new THREE.Group();sg.position.set(17.6,ground(17.6,6.6),6.6);sg.rotation.y=.3;sg.scale.setScalar(1.4);W.add(sg);SIGN.g=sg;
 [-.95,.95].forEach(x=>{const p=new THREE.Mesh(new THREE.BoxGeometry(.16,1.9,.16),mat('#4b342a'));p.position.set(x,.95,0);sg.add(p)});
 const bd=new THREE.Mesh(new THREE.BoxGeometry(2.4,1.5,.1),mat('#6b4a36'));bd.position.set(0,1.45,0);sg.add(bd);
 const fc=new THREE.Mesh(new THREE.PlaneGeometry(2.3,1.44),new THREE.MeshBasicMaterial({map:tx}));fc.position.set(0,1.45,.056);sg.add(fc);
 const rf=new THREE.Mesh(new THREE.BoxGeometry(2.7,.1,.5),mat('#3b2a24'));rf.position.set(0,2.28,0);rf.rotation.x=.1;sg.add(rf);
 const lt=spr(glowTex,0xffc27a,2.2,.35,true);lt.position.set(0,1.6,.6);sg.add(lt)}
/* farolillos de ofrenda en la escalera: se encienden con las luces que traes del Río */
{const n=stairLit(),x0=8.2,y0=Y0,x1=15.1,y1=Y0-5.9;
 for(let i=0;i<8;i++){const u=(i+.7)/8.6,x=x0+(x1-x0)*u,y=y0+(y1-y0)*u,on=i<n;
  box(.08,.7,.08,'#4b342a',x,y+.1,3.75,W);
  const ln=new THREE.Mesh(new THREE.SphereGeometry(.2,8,6),new THREE.MeshBasicMaterial({color:on?0xffd9a0:0x6a5a52}));ln.scale.y=1.25;ln.position.set(x,y+.62,3.75);W.add(ln);
  if(on){const L=spr(glowTex,0xffc27a,1.8,.5,true);L.position.set(x,y+.62,3.75);W.add(L)}}}
// peldaños de piedra al pie y farol
{const L=spr(glowTex,0xffc27a,3,.55,true);L.position.set(16.5,Y0-5.2,3.5);W.add(L);box(.08,1.1,.08,'#6a5058',16.5,Y0-5.7,3.5,W)}
/* noren corto (mizuhiki) bajo la viga del frente: paños añil con mon blanco, como el hanten del lanchero, que ondean con el viento */
{const c=document.createElement('canvas');c.width=c.height=64;const q=c.getContext('2d');q.fillStyle='#2b4a82';q.fillRect(0,0,64,64);q.fillStyle='rgba(255,255,255,.07)';for(let i=0;i<64;i+=3)q.fillRect(i,0,1,64);
 q.strokeStyle='#f2efe6';q.lineWidth=5;q.beginPath();q.arc(32,34,13,0,7);q.stroke();q.fillStyle='#f2efe6';q.beginPath();q.arc(32,34,4,0,7);q.fill();q.fillStyle='#1f3866';q.fillRect(0,0,64,5);
 const tx=new THREE.CanvasTexture(c);tx.colorSpace=THREE.SRGBColorSpace;
 const N=10,nm=new THREE.InstancedMesh(new THREE.PlaneGeometry(.72,.34,3,3).translate(0,.17,0),windify(new THREE.MeshToonMaterial({gradientMap:toonGrad,map:tx,side:THREE.DoubleSide}),{H:.34,amp:.15,pow:1.3,fl:.018}),N),M=new THREE.Matrix4();
 for(let i=0;i<N;i++){M.makeScale(1,-1,1);M.setPosition(-1.92+i*.76,7.4,1.15);nm.setMatrixAt(i,M)}nm.frustumCulled=false;nm.userData.dyn=true;W.add(nm);
 const rod=cyl(.02,.02,7.8,'#9a6a3c',1.5,7.4,1.15,W,6);rod.rotation.z=Math.PI/2}
/* estructura fija fundida por material: decenas de cajas pasan a ser unas pocas mallas (las que tapan toques o cambian de brillo quedan sueltas) */
W.children.forEach(c=>{if(c.isGroup&&c!==SIGN.g)bake(c)});bake(W);
}
