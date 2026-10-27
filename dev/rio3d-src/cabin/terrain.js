/* terrain.js — el suelo de la cabaña: la montaña continúa hacia la izquierda con bosque y, desde la escalera, un espolón de ladera baja en pendiente por un camino hasta el río. */
import * as THREE from 'three';
import {scene} from './core.js';
import {rng,spr,glowTex} from './util.js';
import {mat} from './mats.js';
export const RIV=z=>46+16*Math.sin(z*.021+.6)+8*Math.sin(z*.047),RY=-13.6;
export const riverW=z=>8+Math.max(0,(34-z)/3)*.16;
const sm=(a,b,x)=>{const t=Math.min(1,Math.max(0,(x-a)/(b-a)));return t*t*(3-2*t)};
/* camino: sale del pie de la escalera y serpentea por la ladera hasta la orilla */
export const PX0=17,PX1=44;
export const zc=x=>x<15.7?2.8:2.8+Math.sin((x-15.7)*.12)*5.2*sm(15.7,26,x);
const top=x=>x<8.2?3.7:x<15.7?3.7-(x-8.2)*(5.7/7.5):-2.0-(x-15.7)*.4;
export function ground(x,z){
  let g=-14;
  /* montaña: continúa a la izquierda del acantilado, sube hacia el fondo y se difumina en los bordes */
  {const xl=Math.max(0,-14-x),A=4.2+xl*.22+Math.max(0,-7-z)*.25,fade=(1-sm(-118,-140,x))*(1-sm(-56,-72,z)),t=sm(3,26,z);
    /* a la derecha del acantilado la ladera cae suave por detrás de la cabaña, sin muro */
    const side=x<=-14?1:(1-sm(-12,6,x))*sm(-4,-9,z);
    g=Math.max(g,-14+(Math.min(A,30)+14)*(1-t)*fade*side)}
  /* espolón de la escalera */
  if(x>=6&&x<=PX1+6){const c=zc(x),dz=Math.abs(z-c),hw=x<15.7?3.2:5.5,sl=x<15.7?.9:.65,n=(Math.sin(x*.5+z*.3)+Math.sin(z*.7-x*.2))*.12;
    let h=top(x)-Math.max(0,dz-hw)*sl+(x>16?n:0)-(x>PX1?(x-PX1)*.8:0);
    h=-14+(h+14)*sm(6,8.2,x);g=Math.max(g,h)}
  return g;
}
const PATH=[];for(let x=PX0;x<=PX1;x+=1)PATH.push([x,zc(x)]);
export const nearPath=(x,z,r)=>{for(const p of PATH){if(Math.abs(p[0]-x)<r&&Math.abs(p[1]-z)<r&&Math.hypot(p[0]-x,p[1]-z)<r)return true}return false};
export function buildTerrain(){
  const X0=-140,X1=70,Z0=-72,Z1=50,S=3,nx=Math.round((X1-X0)/S),nz=Math.round((Z1-Z0)/S),pos=[],col=[],idx=[],c=new THREE.Color();
  const cG=[new THREE.Color('#8fae75'),new THREE.Color('#a3b87a'),new THREE.Color('#7fa06a'),new THREE.Color('#9bb26e')],cD=new THREE.Color('#b69a76'),cR=new THREE.Color('#8e7468'),cF=new THREE.Color('#6f8f6a'),cA=new THREE.Color('#d9a35f'),cP=new THREE.Color('#d9a0b3');
  const hh=(x,z)=>{const s=Math.sin(x*12.9898+z*78.233)*43758.5453;return s-Math.floor(s)};
  for(let j=0;j<=nz;j++)for(let i=0;i<=nx;i++){const x=X0+i*S,z=Z0+j*S,y=ground(x,z);pos.push(x,y,z);
    const sx=ground(x+S,z)-ground(x-S,z),sz=ground(x,z+S)-ground(x,z-S),slope=Math.hypot(sx,sz)/(2*S);
    const r=hh(i,j);c.copy(cG[(r*4)|0]);
    if(y>8)c.lerp(cF,Math.min(.8,(y-8)/16));
    if(r>.9&&y>-12)c.lerp(r>.95?cP:cA,.45);
    if(slope>1.25)c.lerp(cR,Math.min(.55,(slope-1.25)*1.2));
    if(y<-13)c.lerp(new THREE.Color('#86906f'),.7);
    if(x>PX0-1&&x<PX1+3&&Math.abs(z-zc(x))<1.6)c.lerp(cD,.55);
    col.push(c.r,c.g,c.b)}
  for(let j=0;j<nz;j++)for(let i=0;i<nx;i++){const a=j*(nx+1)+i,b=a+1,d=a+nx+1,e=d+1;idx.push(a,d,b,b,d,e)}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));g.setIndex(idx);g.computeVertexNormals();
  const m=new THREE.Mesh(g,new THREE.MeshToonMaterial({vertexColors:true,flatShading:true}));m.receiveShadow=true;m.position.y=.02;scene.add(m);
}
/* piedras, faroles de piedra y un muelle con canoa al final del camino */
export function buildPath(){
  const r=rng(41),G=new THREE.Group();scene.add(G);
  const stone=mat('#aaa59d'),dark=mat('#8d8a86'),wood=mat('#a98563'),post=mat('#4b342a');
  for(let x=PX0+1;x<PX1;x+=1.55){const z=zc(x)+Math.sin(x*1.9)*.35;const s=new THREE.Mesh(new THREE.CylinderGeometry(.62+r()*.12,.7,.16,8),stone);s.position.set(x,ground(x,z)+.1,z);s.rotation.y=r()*3;G.add(s)}
  const lamp=(x,z)=>{const y=ground(x,z),g=new THREE.Group();g.position.set(x,y,z);G.add(g);
    const b=new THREE.Mesh(new THREE.CylinderGeometry(.34,.4,.16,8),dark);b.position.y=.08;g.add(b);
    const p=new THREE.Mesh(new THREE.CylinderGeometry(.1,.13,.9,6),stone);p.position.y=.6;g.add(p);
    const l=new THREE.Mesh(new THREE.BoxGeometry(.4,.36,.4),new THREE.MeshBasicMaterial({color:0xffd9a0}));l.position.y=1.2;g.add(l);
    const k=new THREE.Mesh(new THREE.ConeGeometry(.42,.3,4),stone);k.position.y=1.5;k.rotation.y=Math.PI/4;g.add(k);
    const L=spr(glowTex,0xffc27a,2.4,.55,true);L.position.set(0,1.2,0);g.add(L)};
  for(let x=PX0+3,i=0;x<PX1-2;x+=6,i++){const z=zc(x)+(i%2?2.4:-2.4);lamp(x,z)}
  /* matas de hierba, arbustos con flor y piedras con musgo en la ladera */
  {const M=new THREE.Matrix4(),Q=new THREE.Quaternion(),Sc=new THREE.Vector3(),P=new THREE.Vector3(),cc=new THREE.Color(),n=420;
   const gr=new THREE.InstancedMesh(new THREE.ConeGeometry(.3,1.2,4).translate(0,.6,0),mat('#ffffff'),n),bu=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,1),mat('#ffffff'),70),rk=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,0),mat('#ffffff'),40);
   const gc=['#9bb070','#b3b87a','#86a068','#a6c47a'],bc=['#5f8a60','#6e9a68','#7aa86a','#e58aa8','#f3a9c0'],rc=['#7e7a74','#8a8a7c','#6f7d68'];let a=0,b=0,k=0;
   for(let i=0;i<900&&(a<n||b<70||k<40);i++){const x=8+r()*38,c=zc(Math.max(15.7,x)),z=c+(r()-.5)*15;if(Math.abs(z-c)<1.5&&x>PX0)continue;const y=ground(x,z);if(y<-13)continue;
     const q=r();
     if(q<.6&&a<n){P.set(x,y,z);Sc.set(.8+r()*.6,.7+r()*1.1,.8+r()*.6);Q.setFromEuler(new THREE.Euler(0,r()*6,(r()-.5)*.3));M.compose(P,Q,Sc);gr.setMatrixAt(a,M);gr.setColorAt(a,cc.set(gc[(r()*4)|0]));a++}
     else if(q<.85&&b<70){const s=.5+r()*.8;P.set(x,y+.2,z);Sc.set(s*1.3,s*.75,s*1.3);Q.identity();M.compose(P,Q,Sc);bu.setMatrixAt(b,M);bu.setColorAt(b,cc.set(bc[(r()*5)|0]));b++}
     else if(k<40){const s=.3+r()*.5;P.set(x,y+.1,z);Sc.set(s,s*.6,s);Q.setFromEuler(new THREE.Euler(r()*3,r()*3,0));M.compose(P,Q,Sc);rk.setMatrixAt(k,M);rk.setColorAt(k,cc.set(rc[(r()*3)|0]));k++}}
   gr.count=a;bu.count=b;rk.count=k;[gr,bu,rk].forEach(m=>{m.instanceMatrix.needsUpdate=true;if(m.instanceColor)m.instanceColor.needsUpdate=true;G.add(m)})}
  /* muelle */
  {const x=PX1+1,z=zc(PX1),y=-13.0,g=new THREE.Group();g.position.set(x,y,z);G.add(g);
   for(let i=0;i<7;i++){const p=new THREE.Mesh(new THREE.BoxGeometry(.9,.12,2.2),wood);p.position.set(i*.95,.15,0);g.add(p)}
   [[0,1],[0,-1],[5.7,1],[5.7,-1]].forEach(([dx,sd])=>{const q=new THREE.Mesh(new THREE.CylinderGeometry(.12,.14,1.8,6),post);q.position.set(dx,-.3,sd*1.15);g.add(q)});
   const L=spr(glowTex,0xffc27a,2.6,.6,true);L.position.set(5.7,1.2,1.15);g.add(L);
   const can=new THREE.Group();can.position.set(5.2,.0,-3.4);can.rotation.y=.35;g.add(can);
   const hull=new THREE.Mesh(new THREE.CapsuleGeometry(.4,2.8,3,6),mat('#5a3d2e'));hull.rotation.x=Math.PI/2;hull.scale.set(1,1,.6);can.add(hull);
   const lb=new THREE.Mesh(new THREE.SphereGeometry(.24,8,6),new THREE.MeshBasicMaterial({color:0xffd9a0}));lb.position.set(0,.9,-1.3);can.add(lb);const L2=spr(glowTex,0xffb870,3.4,.9,true);L2.position.set(0,1,-1.3);can.add(L2)}
}
