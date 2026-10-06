/* Escenario lejano y cercano: piedras del río, macizos kársticos con niebla y botes de pescadores. */
import {A} from '../audio-rio.js';
import {toonGrad,tex} from '../style.js';
import * as THREE from 'three';
import {hash,clamp,vn,sm} from './util.js';
import {P} from './state.js';
import {hw,cx,tanAng} from './world.js';
import {scene,glowTex,MT} from './core.js';
import {env} from './env.js';
import {spawnRipple} from './ripples.js';
import {_c2,_c} from './weather.js';
/* ====== piedras del río ====== */
const RCELL=38,rockCells=new Map();
const rockGeos=[0,1,2].map(v=>{const g=new THREE.IcosahedronGeometry(1,1).toNonIndexed();const p=g.attributes.position,c=new Float32Array(p.count*3);
  for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),n=1+(hash(Math.round(x*5)+v*9,Math.round(y*5)+Math.round(z*5))-.5)*.35;p.setXYZ(i,x*n*1.15,y*n*.72,z*n);const k=.7+.4*clamp((y+.7)/1.4);c[i*3]=c[i*3+1]=c[i*3+2]=k}
  g.setAttribute('color',new THREE.BufferAttribute(c,3));const uv=g.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,uv.getX(i)*2,uv.getY(i)*2);g.computeVertexNormals();return g});
const rockMat=new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xb7b3c4,vertexColors:true,map:tex('rock')});
const mossMat=new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0x86b88a,map:tex('leaf')});
const foamRing=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.4,depthWrite:false,side:THREE.DoubleSide});
function rockAt(c){const r=hash(c,41);if(c<2||r>.34)return null;const s=c*RCELL+hash(c,42)*RCELL,e=(hash(c,43)*2-1)*hw(s)*.4;return{s,x:cx(s)+e,z:-s,r:.9+hash(c,44)*1.1,v:Math.floor(hash(c,45)*3),a:hash(c,46)*6.28}}
function mkRock(o){const g=new THREE.Group();const m=new THREE.Mesh(rockGeos[o.v],rockMat);m.scale.setScalar(o.r);m.rotation.y=o.a;m.position.y=o.r*.18;g.add(m);
  const mo=new THREE.Mesh(rockGeos[(o.v+1)%3],mossMat);mo.scale.set(o.r*.62,o.r*.3,o.r*.6);mo.position.set(o.r*.12,o.r*.62,0);mo.rotation.y=o.a+1;g.add(mo);
  const fr=new THREE.Mesh(new THREE.RingGeometry(1.05,1.55,24).rotateX(-Math.PI/2),foamRing);fr.scale.setScalar(o.r);fr.position.y=.05;fr.userData.fr=1;g.add(fr);
  g.position.set(o.x,0,o.z);g.userData=o;return g}
export function updateRocks(dt,ps){
  const c0=Math.floor((ps-25)/RCELL),c1=Math.floor((ps+280)/RCELL);
  for(const [c,g] of rockCells)if((c<c0||c>c1)&&g)scene.remove(g);
  for(let c=c0;c<=c1;c++){let g=rockCells.get(c);if(g===undefined){const o=rockAt(c);g=o?mkRock(o):null;rockCells.set(c,g)}
    if(!g)continue;if(!g.parent)scene.add(g);
    const dx=P.px-g.userData.x,dz=P.pz-g.userData.z,need=g.userData.r*1.2+1.5,d=Math.hypot(dx,dz);
    if(d<need&&d>.01){P.px+=dx/d*(need-d)*.6;P.pz+=dz/d*(need-d)*.6;P.v*=.9;if(P.t-P.bumpT>1.2){A.bump();P.bumpT=P.t;spawnRipple(g.userData.x+dx/d*-g.userData.r,g.userData.z+dz/d*-g.userData.r)}}
    g.children[2].material.opacity=.3+.12*Math.sin(P.t*1.4+c)}
}

/* ====== macizos kársticos cercanos con niebla ====== */
export const MC=230,massifs=new Map();
const massGeos=[0,1,2,3].map(v=>{const NA=26,NR=16,pos=[],col=[],idx=[];
  for(let r=0;r<=NR;r++){const t=r/NR;for(let a=0;a<NA;a++){const th=a/NA*6.283,n=1+(vn(Math.cos(th)*2.2+v*7,Math.sin(th)*2.2+t*3)-.5)*.5+(vn(Math.cos(th)*7+v,t*9)-.5)*.14;
    const prof=Math.pow(Math.max(0,1-Math.pow(t,2.2)),.62)*(1+.38*(1-t)*(1-t)),ry=t;const lean=(vn(v*3,t*2)-.5)*.5*t;
    pos.push(Math.cos(th)*prof*n+lean,ry,Math.sin(th)*prof*n);
    const g=vn(Math.cos(th)*5+v,t*14),veg=sm(.18,.5,vn(Math.cos(th)*9,t*20+v));const base=.45+.2*t+.12*g;
    col.push(base*(.75+.2*veg),base*(.9+.12*veg),base*(.82+.1*veg))}}
  for(let r=0;r<NR;r++)for(let a=0;a<NA;a++){const a2=(a+1)%NA,i0=r*NA+a,i1=r*NA+a2,i2=(r+1)*NA+a,i3=(r+1)*NA+a2;idx.push(i0,i2,i1,i1,i2,i3)}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));g.setIndex(idx);g.computeVertexNormals();return g});
const massMat=new THREE.MeshLambertMaterial({vertexColors:true,color:0xb9c6c0,fog:false});
export const massMistMat=new THREE.SpriteMaterial({map:glowTex,transparent:true,opacity:.5,depthWrite:false,fog:false,color:0xffffff});
function mkMassif(c,sd){const hv=hash(c,60+sd),R=44+hv*46,Hh=95+hash(c,61+sd)*120,s=c*MC+hash(c,62+sd)*MC*.9,lat=hw(s)+150+hash(c,63+sd)*170;
  const g=new THREE.Group(),mesh=new THREE.Mesh(massGeos[(c*2+(sd>0?1:0)+4)%4],massMat.clone());mesh.scale.set(R,Hh,R*(.8+hash(c,64)*.4));mesh.position.y=-30;mesh.rotation.y=hash(c,65)*6;g.add(mesh);
  for(let i=0;i<2;i++){const sp=new THREE.Sprite(massMistMat);sp.scale.set(R*4.5,Hh*.7,1);sp.position.set((i?.4:-.3)*R,Hh*(.18+.2*i),0);sp.renderOrder=2;g.add(sp)}
  g.position.set(cx(s)+sd*lat,0,-s);g.userData={s};return g}
export function updateMassifs(ps){const c0=Math.floor((ps-260)/MC),c1=Math.floor((ps+720)/MC);
  for(let c=c0;c<=c1;c++)for(const sd of[-1,1]){const key=c*2+(sd>0?1:0);let rec=massifs.get(key);if(rec===undefined){rec=hash(c,70+sd)>.18?mkMassif(c,sd):null;massifs.set(key,rec);if(rec)rec.userData.c=c}
    if(rec){rec.userData.c=c;if(!rec.parent)scene.add(rec);
      const d=Math.hypot(rec.position.x-P.px,rec.position.z-P.pz),k=clamp(sm(60,520,d)*.88+.08),mt=rec.children[0].material;
      mt.color.set(0x5d8c82).lerp(_c2.set(0x2f4a52),env.night*.7).lerp(_c.copy(env.hor).lerp(scene.fog.color,.5),k)}}
  for(const [k,g] of massifs)if(g&&g.userData.c!==undefined&&(g.userData.c<c0||g.userData.c>c1)&&g.parent)scene.remove(g);
}

/* ====== botes de pescadores lejanos ====== */
const farBoats=[];
function mkFarBoat(i){const g=new THREE.Group(),dark=MT(0x2f2b2c),cloth=MT(0x2f5663);
  const hull=new THREE.Mesh(new THREE.SphereGeometry(1,10,6),dark);hull.scale.set(.55,.28,2.0);hull.position.y=.05;g.add(hull);
  const bd=new THREE.Mesh(new THREE.CylinderGeometry(.16,.22,.9,7),cloth);bd.position.set(0,.85,.2);g.add(bd);
  const hd=new THREE.Mesh(new THREE.SphereGeometry(.12,8,6),MT(0xd9a982));hd.position.set(0,1.38,.2);g.add(hd);
  if(i%2){const cn=new THREE.Mesh(new THREE.ConeGeometry(.75,.45,10,1,true),MT(0x30302f,{side:THREE.DoubleSide}));cn.position.set(0,1.95,.2);g.add(cn);const st=new THREE.Mesh(new THREE.CylinderGeometry(.015,.015,1.0,4),dark);st.position.set(0,1.45,.2);g.add(st)}
  else{const ht=new THREE.Mesh(new THREE.ConeGeometry(.34,.2,10,1,true),MT(0xdab26a,{side:THREE.DoubleSide}));ht.position.set(0,1.55,.2);g.add(ht)}
  const pl=new THREE.Mesh(new THREE.CylinderGeometry(.02,.02,4,4),MT(0x7a5a46));pl.position.set(.35,1.2,-.9);pl.rotation.set(1.0,0,-.3);g.add(pl);
  g.scale.setScalar(1.6);g.userData={ph:Math.random()*6};scene.add(g);return g}
for(let i=0;i<3;i++)farBoats.push(mkFarBoat(i));
function placeFarBoat(b,ps){const s=ps+90+Math.random()*160,e=(Math.random()*2-1)*(hw(s)-9);b.position.set(cx(s)+e,0,-s);b.userData.hd=tanAng(s)+Math.PI+(Math.random()-.5)*.8;b.userData.s=s}
farBoats.forEach(b=>placeFarBoat(b,40+Math.random()*100));
export function updateFarBoats(dt,ps){for(const b of farBoats){const u=b.userData;if(b.position.z>P.pz+30||-b.position.z>ps+300){placeFarBoat(b,ps);continue}
  b.position.x+=Math.sin(u.hd+Math.PI)*.25*dt;b.position.z-=Math.cos(u.hd+Math.PI)*.25*dt;b.position.y=Math.sin(P.t*.8+u.ph)*.03;b.rotation.set(Math.sin(P.t*.6+u.ph)*.02,-u.hd+Math.PI,Math.sin(P.t*.7+u.ph)*.02)}}
