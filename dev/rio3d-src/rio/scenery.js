/* Escenario lejano y cercano: piedras del río, macizos kársticos con niebla y botes de pescadores. */
import {A} from '../audio-rio.js';
import {toonGrad,tex,bake} from '../style.js';
import * as THREE from 'three';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {hash,clamp,vn,sm} from './util.js';
import {P} from './state.js';
import {hw,cx,tanAng,castleNear} from './world.js';
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
/* el castillo ocupa la ladera de su lado: sin macizos kársticos encima */
const massBlocked=(c,sd)=>{const s=c*MC+hash(c,62+sd)*MC*.9,I=castleNear(s);return !!I&&sd===I.side&&Math.abs(s-I.s0)<210};
export function updateMassifs(ps){const c0=Math.floor((ps-260)/MC),c1=Math.floor((ps+720)/MC);
  for(let c=c0;c<=c1;c++)for(const sd of[-1,1]){const key=c*2+(sd>0?1:0);let rec=massifs.get(key);if(rec===undefined){rec=hash(c,70+sd)>.18&&!massBlocked(c,sd)?mkMassif(c,sd):null;massifs.set(key,rec);if(rec)rec.userData.c=c}
    if(rec){rec.userData.c=c;if(!rec.parent)scene.add(rec);
      const d=Math.hypot(rec.position.x-P.px,rec.position.z-P.pz),k=clamp(sm(60,520,d)*.88+.08),mt=rec.children[0].material;
      mt.color.set(0x5d8c82).lerp(_c2.set(0x2f4a52),env.night*.7).lerp(_c.copy(env.hor).lerp(scene.fog.color,.5),k)}}
  for(const [k,g] of massifs)if(g&&g.userData.c!==undefined&&(g.userData.c<c0||g.userData.c>c1)&&g.parent)scene.remove(g);
}

/* ====== botes de pescadores ======
   Sampán de 5,2 m hecho por secciones (proa y popa levantadas), con piso, bancos, cesta, red y farol de proa que se enciende de noche.
   Dos oficios: el pescador de caña, sentado, que de vez en cuando da un tirón al sedal; y el que boga de pie con el ro (remo largo de popa).
   Cuerpo torneado con kasa y mino de paja, a la misma escala que el lanchero; los brazos siguen de verdad la caña o el remo. */
const farBoats=[],FBM=new THREE.MeshToonMaterial({gradientMap:toonGrad,vertexColors:true,side:THREE.DoubleSide});
const _fa=new THREE.Vector3(),_fb=new THREE.Vector3(),_fq=new THREE.Quaternion(),_fy=new THREE.Vector3(0,1,0),_fe=new THREE.Euler(0,0,0,'YXZ');
const hullGeos=(()=>{const N=12,pos=[],uv=[],idx=[],fp=[],fuv=[],fi=[];
  for(let i=0;i<=N;i++){const u=i/N,z=2.3-5.2*u,e=2*u-1,e4=e*e*e*e,b=.66*Math.pow(Math.sin(Math.PI*(.06+.88*u)),.75),k=-.14+.42*e4*(u>.5?1.25:.8),hh=.3+.5*e4*(u>.5?1.3:.75);
    [[-b,hh],[-b*.72,k+.1],[0,k],[b*.72,k+.1],[b,hh]].forEach(([x,y],j)=>{pos.push(x,y,z);uv.push(z*.45,j*.25)});
    const fy=Math.max(.15,k+.14),fw=b*.86;fp.push(-fw,fy,z,fw,fy,z);fuv.push(z*.6,0,z*.6,fw*1.2)}
  for(let i=0;i<N;i++){for(let j=0;j<4;j++){const a=i*5+j;idx.push(a,a+5,a+1,a+1,a+5,a+6)}const a=i*2;fi.push(a,a+1,a+2,a+1,a+3,a+2)}
  [0,N*5].forEach(o=>idx.push(o,o+1,o+2,o,o+2,o+3,o,o+3,o+4));
  const mk=(p,u,ix)=>{const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(u,2));g.setIndex(ix);g.computeVertexNormals();return g};
  const col=(g,hex)=>{const c=new THREE.Color(hex),n=g.attributes.position.count,a=new Float32Array(n*3);for(let i=0;i<n;i++){a[i*3]=c.r;a[i*3+1]=c.g;a[i*3+2]=c.b}g.setAttribute('color',new THREE.BufferAttribute(a,3));return g.toNonIndexed()};
  return mergeGeometries([col(mk(pos,uv,idx),0x6a5140),col(mk(fp,fuv,fi),0xc4a376)])})();   // casco y piso en una sola malla (color por vértice sobre la textura de tablas)
const HULLM=MT(0xffffff,{map:tex('plank'),side:THREE.DoubleSide,vertexColors:true});
const FCLOTH=[0x3f6475,0x7a5a46,0x5c7052];
function mkFarBoat(i){const g=new THREE.Group(),row=i%2===1,cl=FCLOTH[i%3],M=c=>MT(c);
  const add=(par,geo,c,x,y,z)=>{const m=new THREE.Mesh(geo,M(c));m.position.set(x,y,z);par.add(m);return m};
  const sg=(par,c,a,b,r0,r1,n)=>{const A=new THREE.Vector3(...a),B=new THREE.Vector3(...b),m=new THREE.Mesh(new THREE.CylinderGeometry(r1,r0,A.distanceTo(B),n||6,1),M(c));m.position.copy(A).add(B).multiplyScalar(.5);m.quaternion.setFromUnitVectors(_fy,B.sub(A).normalize());par.add(m);return m};
  g.add(new THREE.Mesh(hullGeos,HULLM));
  // enseres (una sola malla): bancos, regala, cesta, red amontonada y poste del farol
  const pr=new THREE.Group();g.add(pr);
  add(pr,new THREE.BoxGeometry(1.2,.05,.24),0x8a6a4c,0,.3,.55);add(pr,new THREE.BoxGeometry(1.1,.05,.22),0x8a6a4c,0,.31,-1.1);
  add(pr,new THREE.CylinderGeometry(.2,.16,.26,9),0xd3b06c,-.2,.3,-.45);add(pr,new THREE.TorusGeometry(.2,.02,4,10).rotateX(Math.PI/2),0xa8843e,-.2,.43,-.45);
  {const n=add(pr,new THREE.SphereGeometry(.32,8,6),0x4d6a66,.22,.2,-1.75);n.scale.set(1,.45,1.25)}
  sg(pr,0x4b3a2e,[0,.5,-2.55],[0,1.45,-2.7],.025,.02,5);add(pr,new THREE.BoxGeometry(.2,.03,.2),0x3a2c24,0,1.44,-2.7);add(pr,new THREE.BoxGeometry(.2,.03,.2),0x3a2c24,0,1.16,-2.7);
  // pescador
  const f=new THREE.Group(),ub=new THREE.Group();g.add(f);f.add(ub);
  if(row){f.position.set(0,.2,1.55);[-1,1].forEach(sd=>{sg(pr,0x2f3a4c,[sd*.1,.2,1.55+sd*.08],[sd*.09,1.0,1.55],.06,.09);add(pr,new THREE.BoxGeometry(.1,.05,.22),0xe2dac6,sd*.1,.2,1.5+sd*.08)});sg(pr,0x4b3a2e,[0,.3,2.2],[0,.62,2.2],.03,.025,5);ub.position.y=.8}
  else{f.position.set(-.05,.33,.55);f.rotation.y=-Math.PI/2;const lap=add(pr,new THREE.SphereGeometry(.3,9,6),0x2f3a4c,-.02,.4,.55);lap.scale.set(1.15,.42,1.25);ub.position.y=.08}
  add(pr,new THREE.BoxGeometry(.16,.25,.16),0xf1e2bf,0,1.3,-2.7);
  bake(pr,{vc:true,mat:FBM});
  const prof=[[.205,-.06],[.19,0],[.172,.1],[.185,.26],[.2,.36],[.195,.42],[.155,.482],[.08,.52],[.05,.555]].map(([r,y])=>new THREE.Vector2(r,y));
  const bd=new THREE.Mesh(new THREE.LatheGeometry(prof,12),M(cl));bd.scale.z=.74;ub.add(bd);
  {const o=add(ub,new THREE.TorusGeometry(.176,.02,5,14).rotateX(Math.PI/2),0xe2dac6,0,.12,0);o.scale.z=.76}
  if(i!==1){const mi=add(ub,new THREE.CylinderGeometry(.13,.3,.4,10,1,true),0xcfae66,0,.34,.02);mi.scale.z=.82}       // mino: capa de paja
  sg(ub,0xdcae88,[0,.53,0],[0,.62,0],.05,.045);
  {const hd=add(ub,new THREE.SphereGeometry(.1,10,8),0xdcae88,0,.7,0);hd.scale.set(.95,1.05,1);const hr=add(ub,new THREE.SphereGeometry(.105,10,6,0,Math.PI*2,0,Math.PI*.55),0x24212a,0,.705,.012);hr.rotation.x=.5;
   [-1,1].forEach(sd=>add(ub,new THREE.SphereGeometry(.012,5,4),0x24212a,sd*.037,.705,-.092));add(ub,new THREE.SphereGeometry(.013,5,4),0xc99873,0,.685,-.1)}
  if(row){add(ub,new THREE.ConeGeometry(.3,.26,12,1,true),0x8a7a5a,0,.87,0);add(ub,new THREE.TorusGeometry(.3,.01,4,14).rotateX(Math.PI/2),0x6a5a3e,0,.74,0)}           // amigasa: sombrero hondo de junco
  else{add(ub,new THREE.ConeGeometry(.38,.19,14,1,true),0xe4c27e,0,.865,0);add(ub,new THREE.TorusGeometry(.378,.011,4,16).rotateX(Math.PI/2),0xb48a4a,0,.77,0)}
  bake(ub,{vc:true,mat:FBM});
  const arms=[-1,1].map(sd=>{const m=new THREE.Mesh(new THREE.CylinderGeometry(.04,.055,1,6).translate(0,.5,0),M(cl));ub.add(m);return{m,s:new THREE.Vector3(sd*.19,.44,0)}});
  // herramienta: remo largo de popa o caña con sedal y boya
  const tool=new THREE.Group();g.add(tool);let line=null,flt=null;
  if(row){tool.position.set(0,.62,2.2);tool.rotation.order='YXZ';sg(tool,0x9a7a52,[0,0,-1.05],[0,0,1.2],.022,.026,6);
    {const bl=add(tool,new THREE.BoxGeometry(.13,.025,1.1),0xb08a5c,0,0,1.7)}[0,.24].forEach(z=>add(tool,new THREE.SphereGeometry(.045,6,5),0xdcae88,0,.01,-1+z));
}
  else{tool.position.set(.3,.86,.55);sg(tool,0xb39a58,[0,-.25,0],[0,3.1,0],.02,.007,5);[0,.26].forEach(y=>add(tool,new THREE.SphereGeometry(.045,6,5),0xdcae88,0,y,0));
    line=new THREE.Mesh(new THREE.CylinderGeometry(.004,.004,1,3).translate(0,.5,0),new THREE.MeshBasicMaterial({color:0xf2efe6}));g.add(line);
    flt=new THREE.Group();g.add(flt);add(flt,new THREE.SphereGeometry(.05,7,5),0xd8523c,0,.02,0);add(flt,new THREE.CylinderGeometry(.008,.008,.14,4),0xf2efe6,0,.1,0);bake(flt,{vc:true,mat:FBM})}
  bake(tool,{vc:true,mat:FBM});
  const glow=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,color:0xffc77a,blending:THREE.AdditiveBlending,depthWrite:false,transparent:true,opacity:0}));glow.scale.set(2.6,2.6,1);glow.position.set(0,1.3,-2.7);g.add(glow);
  g.userData={ph:Math.random()*6,row,f,ub,arms,tool,line,flt,glow,tug:6+Math.random()*8,tk:0};scene.add(g);return g}
/* brazo como cilindro unidad que se estira del hombro a la mano (en coordenadas del torso) */
function aimArm(a,ub,f,T){_fb.copy(T).sub(f.position).applyQuaternion(_fq.copy(f.quaternion).invert()).sub(ub.position).applyQuaternion(_fq.copy(ub.quaternion).invert()).sub(a.s);
  const L=Math.min(.62,_fb.length());a.m.position.copy(a.s);a.m.scale.y=L;a.m.quaternion.setFromUnitVectors(_fy,_fb.normalize())}
function animFarBoat(b,dt){const u=b.userData,t=P.t+u.ph*3,br=Math.sin(t*1.2),ub=u.ub;
  ub.scale.set(1+br*.012,1+br*.006,1+br*.02);
  if(u.row){/* bogar: el remo barre de lado a lado girando la pala; el cuerpo entero acompaña con el peso */
    const w=t*1.45,sw=Math.sin(w),tool=u.tool;tool.rotation.set(.5+Math.cos(w*2)*.03,sw*.3,Math.cos(w)*.5);
    _fa.set(0,0,-1).applyEuler(tool.rotation).add(tool.position);const hx=_fa.x;
    u.f.position.x=hx*.22;ub.rotation.set(-.1-Math.abs(sw)*.03,-hx*.9,-hx*.25);
    aimArm(u.arms[0],ub,u.f,_fa);_fa.set(0,0,-.76).applyEuler(tool.rotation).add(tool.position);aimArm(u.arms[1],ub,u.f,_fa);
    b.rotation.z+=sw*.012}
  else{/* caña: espera quieto, respira, mira la boya; cada tanto da un tirón, el cuerpo se echa atrás y la boya se hunde */
    u.tug-=dt;if(u.tug<=0){u.tug=9+Math.random()*10;u.tk=1.5;try{b.updateMatrixWorld();_fa.copy(u.flt.position);b.localToWorld(_fa);spawnRipple(_fa.x,_fa.z)}catch(e){}}
    let k=0;if(u.tk>0){u.tk-=dt;const q=clamp(1-u.tk/1.5);k=Math.sin(Math.PI*Math.pow(q,.6))}
    const el=1.02-k*.4+Math.sin(t*.5)*.025,tool=u.tool;tool.rotation.set(Math.sin(t*.33)*.05,0,-el);
    ub.rotation.set(.06+k*.16,Math.sin(t*.21)*.12,0);
    _fa.set(0,3.1,0).applyEuler(tool.rotation).add(tool.position);const tx=_fa.x,ty=_fa.y,tz=_fa.z;
    u.flt.position.set(tx+.25-k*.5,Math.sin(t*1.7)*.012-(u.tk>1.2?.06:0)+k*.05,tz+Math.sin(t*.4)*.12);
    _fb.copy(u.flt.position).sub(_fa);u.line.position.copy(_fa);u.line.scale.y=_fb.length();u.line.quaternion.setFromUnitVectors(_fy,_fb.normalize());
    _fa.set(0,0,0).applyEuler(tool.rotation).add(tool.position);aimArm(u.arms[1],ub,u.f,_fa);_fa.set(0,.26,0).applyEuler(tool.rotation).add(tool.position);aimArm(u.arms[0],ub,u.f,_fa)}
  const n=clamp((env.night-.25)*2.2);u.glow.material.opacity=n*.85}
for(let i=0;i<3;i++)farBoats.push(mkFarBoat(i));
function placeFarBoat(b,ps){const s=ps+90+Math.random()*160,e=(Math.random()*2-1)*(hw(s)-9);b.position.set(cx(s)+e,0,-s);b.userData.hd=tanAng(s)+Math.PI+(Math.random()-.5)*.8;b.userData.s=s}
farBoats.forEach(b=>placeFarBoat(b,40+Math.random()*100));
export function updateFarBoats(dt,ps){for(const b of farBoats){const u=b.userData;if(b.position.z>P.pz+30||-b.position.z>ps+300){placeFarBoat(b,ps);continue}
  const sp=u.row?.42:.12;b.position.x+=Math.sin(u.hd+Math.PI)*sp*dt;b.position.z-=Math.cos(u.hd+Math.PI)*sp*dt;b.position.y=Math.sin(P.t*.8+u.ph)*.03+Math.sin(P.t*.47+u.ph*2)*.012;b.rotation.set(Math.sin(P.t*.6+u.ph)*.02,-u.hd+Math.PI,Math.sin(P.t*.7+u.ph)*.02+Math.sin(P.t*.31+u.ph)*.012);
  animFarBoat(b,dt)}}
