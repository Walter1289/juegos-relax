/* Fauna: carpas koi, patos, libélulas, garzas y sus encuentros con la canoa (curiosidad, huida, aterrizaje). */
import {A} from '../audio-rio.js';
import {albumSee} from '../album.js';
import {toonGrad} from '../style.js';
import * as THREE from 'three';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {clamp,angD} from './util.js';
import {P,S} from './state.js';
import {hw,cx,tanAng,lmType} from './world.js';
import {MT,scene} from './core.js';
import {env} from './env.js';
import {UP} from './props.js';
import {boat} from './boat.js';
import {spawnRipple} from './ripples.js';
import {toast} from './hud.js';
import {W} from './weather.js';
import {lmAnim,lmMade} from './lm-data.js';
import {mkHeron} from './lm-parts.js';
import {splash,spawnWake,updateShoreFx} from './shore.js';
export const FISH=5,fish=[];
const fishCols=[[0xf0884a,0xfff1e0],[0xe8a24a,0xf6d9a0],[0xe2603f,0xffe9d2],[0xd9c9a0,0xf0884a]];
function mkFish(i){const g=new THREE.Group(),cs=fishCols[i%fishCols.length];
  const body=new THREE.Mesh(new THREE.SphereGeometry(.5,12,8),MT(cs[0]));body.scale.set(.32,.26,1);g.add(body);
  const patch=new THREE.Mesh(new THREE.SphereGeometry(.5,10,6),MT(cs[1]));patch.scale.set(.33,.1,.55);patch.position.set(0,.12,-.05);g.add(patch);
  const tail=new THREE.Group();tail.position.z=.45;g.add(tail);const tf=new THREE.Mesh(new THREE.ConeGeometry(.22,.5,4),MT(cs[0],{side:THREE.DoubleSide}));tf.rotation.x=-Math.PI/2;tf.scale.set(1.2,1,.18);tf.position.z=.22;tail.add(tf);
  const fin=new THREE.Mesh(new THREE.ConeGeometry(.08,.3,3),MT(cs[0]));fin.position.set(0,.2,.05);fin.rotation.x=-.3;g.add(fin);
  g.userData={tail,st:0,t:0,ph:Math.random()*6,sp:.7+Math.random()*.6,tx:0,tz:0,jt:0};scene.add(g);return g}
for(let i=0;i<FISH;i++)fish.push(mkFish(i));
function placeFish(f,ps){const s=ps+14+Math.random()*70,e=(Math.random()*2-1)*(hw(s)-3);f.position.set(cx(s)+e,-.05,-s);f.userData.st=0;f.userData.hd=tanAng(s)+(Math.random()-.5)*1.2;f.userData.jt=2+Math.random()*10;f.rotation.set(0,0,0);f.visible=true}
fish.forEach(f=>placeFish(f,30+Math.random()*60));
export function updateFish(dt,ps){
  for(const f of fish){const u=f.userData;u.t+=dt;
    const dz=f.position.z-P.pz,s=-f.position.z;
    if(s<ps-12||s>ps+120){placeFish(f,ps);continue}
    if(u.st===0){ // nado en superficie
      u.hd+=Math.sin(u.t*.6+u.ph)*.5*dt;
      const e=f.position.x-cx(s),lim=hw(s)-3;if(Math.abs(e)>lim)u.hd+=(tanAng(s)+(e>0?-1:1)*.9-u.hd)*dt*1.5;
      f.position.x+=Math.sin(u.hd)*u.sp*dt;f.position.z-=Math.cos(u.hd)*u.sp*dt;f.position.y=-.02+Math.sin(u.t*2+u.ph)*.01;
      f.rotation.set(0,-u.hd+Math.PI,0);u.tail.rotation.y=Math.sin(u.t*7)*.5;
      if(Math.random()<dt*.03&&dz<-6&&dz>-45){f.userData.st=1;u.j=0;u.vx=Math.sin(u.hd)*2.6;u.vz=-Math.cos(u.hd)*2.6;splash(f.position.x,.1,f.position.z,5);A.plop((f.position.x-P.px)/25)}
      else if(Math.random()<dt*.05&&Math.abs(dz)<30&&Math.abs(dz)>5)spawnWake(f.position.x,f.position.z,0,0,.7);
    }else{ // salto
      u.j+=dt;const T=.95,k=u.j/T,h=Math.sin(Math.PI*k)*1.25;
      f.position.x+=u.vx*dt;f.position.z+=u.vz*dt;f.position.y=-.02+h;
      const slope=Math.cos(Math.PI*k)*1.25*Math.PI/T;f.rotation.set(0,-u.hd+Math.PI,0);f.rotateX(Math.atan2(slope,2.6));
      u.tail.rotation.y=Math.sin(u.t*26)*.6;
      if(u.j>=T){f.userData.st=0;f.position.y=-.02;f.rotation.set(0,-u.hd+Math.PI,0);splash(f.position.x,.1,f.position.z,9);A.plop((f.position.x-P.px)/25)}}
  }
  updateShoreFx(dt)
}
/* ====== aves y libélulas ====== */
export const birds=[],dfs=[];
function mkBird(i){const g=new THREE.Group(),white=i%3!==2,c=white?0xf6f3ee:0x8d98a8,c2=white?0xe8e2d8:0x6f7a8c;
  const body=new THREE.Mesh(new THREE.SphereGeometry(.28,10,8),MT(c));body.scale.set(.7,.7,1.8);g.add(body);
  const nk=new THREE.Mesh(new THREE.CylinderGeometry(.045,.06,.5,6),MT(c));nk.rotation.x=1.15;nk.position.set(0,.1,-.5);g.add(nk);
  const hd=new THREE.Mesh(new THREE.SphereGeometry(.09,8,6),MT(c));hd.position.set(0,.3,-.72);g.add(hd);
  const bk=new THREE.Mesh(new THREE.ConeGeometry(.035,.3,5),MT(0xe8a24a));bk.rotation.x=-Math.PI/2;bk.position.set(0,.3,-.95);g.add(bk);
  const wings=[-1,1].map(sd=>{const p=new THREE.Group();p.position.set(sd*.12,.08,-.05);g.add(p);
    const w=new THREE.Mesh(new THREE.BoxGeometry(1.35,.03,.62),MT(c2));w.position.x=sd*.68;p.add(w);
    const tip=new THREE.Mesh(new THREE.BoxGeometry(.5,.03,.4),MT(white?0x4b4b55:0x59606f));tip.position.set(sd*1.5,0,.05);p.add(tip);return p});
  const tl=new THREE.Mesh(new THREE.ConeGeometry(.12,.45,4),MT(c));tl.rotation.x=Math.PI/2;tl.position.z=.65;g.add(tl);
  g.scale.setScalar(1.5);g.userData={wings,ph:Math.random()*6,fl:0,sp:5+Math.random()*2.5,hd:0,h:7+Math.random()*7,off:(Math.random()-.5)*20};scene.add(g);return g}
function mkDf(i){const g=new THREE.Group(),cols=[0x3fc1c9,0xe0524a,0x4f8fd9,0x7bd66a],c=cols[i%4];
  const bd=new THREE.Mesh(new THREE.CylinderGeometry(.025,.018,.5,6),MT(c,{emissive:c,emissiveIntensity:.35}));bd.rotation.x=Math.PI/2;g.add(bd);
  const hd=new THREE.Mesh(new THREE.SphereGeometry(.055,8,6),MT(c));hd.position.z=-.27;g.add(hd);
  const wm=new THREE.MeshBasicMaterial({color:0xeaf6ff,transparent:true,opacity:.5,side:THREE.DoubleSide,depthWrite:false});
  const wings=[];[[-1,-.1],[-1,.06],[1,-.1],[1,.06]].forEach(([sd,z])=>{const p=new THREE.Group();p.position.set(0,.02,z);g.add(p);const w=new THREE.Mesh(new THREE.PlaneGeometry(.38,.1).rotateX(-Math.PI/2),wm);w.position.x=sd*.2;p.add(w);wings.push([p,sd])});
  g.scale.setScalar(1.8);g.userData={wings,tx:0,ty:1,tz:0,t:0,ph:Math.random()*6,sp:4};scene.add(g);return g}
for(let i=0;i<8;i++)dfs.push(mkDf(i));
/* aves pequeñas nadando: flotan, picotean la superficie buscando peces */
export const wbirds=[];
function mkWB(i){const g=new THREE.Group(),c=i%2?0x6f6a5c:0xe9e4d8,c2=i%2?0x4a4a40:0xc9ae82;
  const body=new THREE.Mesh(new THREE.SphereGeometry(.3,10,8),MT(c));body.scale.set(.85,.6,1.35);body.position.y=.12;g.add(body);
  const tail=new THREE.Mesh(new THREE.ConeGeometry(.12,.3,5),MT(c));tail.rotation.x=-Math.PI/2*1.1;tail.position.set(0,.2,.4);g.add(tail);
  const neck=new THREE.Group();neck.position.set(0,.3,-.25);g.add(neck);
  const nk=new THREE.Mesh(new THREE.CylinderGeometry(.06,.08,.34,6),MT(c));nk.position.y=.15;neck.add(nk);
  const hd=new THREE.Mesh(new THREE.SphereGeometry(.1,8,6),MT(i%2?0x35342e:c));hd.position.set(0,.34,-.03);neck.add(hd);
  const bk=new THREE.Mesh(new THREE.ConeGeometry(.04,.16,5),MT(0xe8a24a));bk.rotation.x=-Math.PI/2;bk.position.set(0,.33,-.15);neck.add(bk);
  g.scale.setScalar(1.15);g.userData={neck,t:Math.random()*6,dip:0,nd:3+Math.random()*5,hd:Math.random()*6.28,tx:0,tz:0};scene.add(g);return g}
function placeWB(b,ps){const s=ps+14+Math.random()*60,e=(Math.random()*2-1)*(hw(s)-6);b.position.set(cx(s)+e,0,-s);b.userData.hd=tanAng(s)+(Math.random()-.5)*2}
for(let i=0;i<4;i++){const b=mkWB(i);if(i>=2)b.scale.setScalar(.72);wbirds.push(b)}wbirds.forEach(b=>placeWB(b,30));
function placeBird(b,ps){const s=ps+30+Math.random()*130;b.position.set(cx(s)+b.userData.off,b.userData.h,-s);b.userData.hd=tanAng(s)+(Math.random()-.5)*.5;b.userData.fl=Math.random()*3}
function placeDf(d,ps){const s=ps+8+Math.random()*60,e=(Math.random()*2-1)*(hw(s)+2);d.position.set(cx(s)+e,.6+Math.random()*1.1,-s);d.userData.tx=d.position.x;d.userData.ty=d.position.y;d.userData.tz=d.position.z}
dfs.forEach(d=>placeDf(d,30));
export function updateFauna(dt,ps){
  const day=1-clamp(env.night*1.5,0,1)*1,vis=day>.15&&W.rain<.6;
  for(const b of wbirds){b.visible=day>.1;const u=b.userData;u.t+=dt;const s=-b.position.z,dz=s-ps;
    if(!u.follow&&!(u.flee>0)&&(dz<-14||dz>110)){placeWB(b,ps);continue}
    if(u.follow&&dz<-70){u.follow=0;placeWB(b,ps);continue}
    u.nd-=dt;if(u.nd<=0&&u.dip<=0&&!u.follow&&!(u.flee>0)){u.dip=1.3;u.nd=5+Math.random()*7;u.rip=false}
    if(u.dip>0){u.dip-=dt;const k=Math.sin(Math.PI*clamp(1-u.dip/1.3));u.neck.rotation.x=1.2*k;b.rotation.x=.9*k*.5;b.position.y=-.05*k;if(k>.9&&!u.rip){u.rip=true;spawnRipple(b.position.x,b.position.z-.4);A.plop((b.position.x-P.px)/25)}}
    else{u.neck.rotation.x=Math.sin(u.t*1.6)*.12;b.rotation.x=0;b.position.y=Math.sin(u.t*1.3)*.015;
      u.hd+=Math.sin(u.t*.4)*.3*dt;const e=b.position.x-cx(s);if(Math.abs(e)>hw(s)-5)u.hd+=(tanAng(s)+(e>0?-1:1)*.8-u.hd)*dt*1.2;
      b.position.x+=Math.sin(u.hd)*(u.spd||.35)*dt;b.position.z-=Math.cos(u.hd)*(u.spd||.35)*dt}
    b.rotation.y=-u.hd+Math.PI}
  for(const d of dfs){d.visible=vis;if(!vis)continue;const u=d.userData;u.t-=dt;if(dfLand(d,u,dt))continue;
    const dz=-d.position.z-ps;if(dz<-12||dz>90){placeDf(d,ps);continue}
    if(u.t<=0){u.t=.8+Math.random()*2.2;const s=-d.position.z+(Math.random()-.5)*8,e=d.position.x-cx(s);
      u.tx=d.position.x+(Math.random()-.5)*7;u.tz=d.position.z+(Math.random()-.5)*7-1.5;u.ty=.5+Math.random()*1.4;
      const ee=u.tx-cx(-u.tz);if(Math.abs(ee)>hw(-u.tz)+3)u.tx=cx(-u.tz)+Math.sign(ee)*(hw(-u.tz)+1)}
    const k=Math.min(1,dt*3.2);const ox=d.position.x,oz=d.position.z;
    d.position.x+=(u.tx-d.position.x)*k;d.position.z+=(u.tz-d.position.z)*k;d.position.y+=(u.ty-d.position.y)*k+Math.sin(P.t*9+u.ph)*.004;
    const vx=d.position.x-ox,vz=d.position.z-oz;if(Math.hypot(vx,vz)>.002)d.rotation.y=Math.atan2(-vx,-vz);
    d.rotation.x=-Math.min(.5,Math.hypot(vx,vz)*20)*.5;
    u.wings.forEach(([p,sd],i)=>{p.rotation.z=sd*Math.sin(P.t*70+i*1.7+u.ph)*.45})}
}

/* ====== interacción de los animales con la canoa ====== */
export const ENC=(()=>{try{return JSON.parse(localStorage.getItem('rio3d-enc')||'{}')||{}}catch(e){return{}}})();
const ALB_MAP={heron:'garza',koi:'koi',duck:'pato',dragonfly:'libelula',festival:'festival'};
export function encounter(k,msg){try{ALB_MAP[k]&&albumSee(ALB_MAP[k])}catch(e){}if(ENC[k])return;ENC[k]=Date.now();try{localStorage.setItem('rio3d-enc',JSON.stringify(ENC))}catch(e){}toast(msg)}
// garza en vuelo: geometría fusionada de una garza, usada para las garzas «vivas» de la reserva
const heronGeo=(()=>{const h=mkHeron(1,0);lmAnim.pop();h.updateMatrixWorld(true);const gs=[];
  h.traverse(o=>{if(!o.isMesh)return;const g=o.geometry.clone().applyMatrix4(o.matrixWorld);g.deleteAttribute('uv');const c=o.material.color,n=g.attributes.position.count,a=new Float32Array(n*3);for(let i=0;i<n;i++){a[i*3]=c.r;a[i*3+1]=c.g;a[i*3+2]=c.b}g.setAttribute('color',new THREE.BufferAttribute(a,3));gs.push(g.index?g.toNonIndexed():g)});
  return mergeGeometries(gs)})();
export const liveH=new THREE.InstancedMesh(heronGeo,new THREE.MeshToonMaterial({gradientMap:toonGrad,vertexColors:true}),24);liveH.frustumCulled=false;liveH.count=0;scene.add(liveH);
export const fliers=[],flierPool=[];
function launchHeron(x,y,z,hdAway){
  const b=flierPool.pop()||mkBird(0);b.rotation.order='YXZ';b.scale.setScalar(2.1);b.visible=true;b.position.set(x,y+1.2,z);
  b.userData.fl2={t:0,hd:hdAway,vy:3.2,sp:2.2,ph:Math.random()*6};scene.add(b);fliers.push(b);
  try{A.flap((x-P.px)/25)}catch(e){}
  encounter('heron','Las garzas alzan el vuelo a tu paso')}
const _hv=new THREE.Vector3(),_hq=new THREE.Quaternion(),_hs=new THREE.Vector3(),_hm=new THREE.Matrix4();
export function updateCritters(dt,ps){
  if(!S.started){return}
  const abrupt=!window.__noScare&&(Math.abs(P.steer)>.8||P.t-P.bumpT<.8);S.scareT=abrupt?2.5:Math.max(0,S.scareT-dt);
  const sp=Math.sin(P.psi),cp=Math.cos(P.psi),calm=S.scareT<=0;
  // carpas: se acercan con curiosidad y nadan a tu lado; se espantan con maniobras bruscas
  for(const f of fish){const u=f.userData;if(u.st!==0)continue;if(u.sp0==null)u.sp0=u.sp;
    const dx=f.position.x-P.px,dz=f.position.z-P.pz,dist=Math.hypot(dx,dz);
    if(!calm&&dist<11){u.hd+=angD(Math.atan2(dx,-dz),u.hd)*Math.min(1,dt*6);u.sp=3.4;u.cur=0;continue}
    if(calm&&dist<26){
      if(!u.dir)u.dir=Math.random()<.5?-1:1;
      const lon=-.4+Math.sin(P.t*.5+u.ph)*1.3,tx=P.px+cp*u.dir*2.7+sp*lon,tz=P.pz+sp*u.dir*2.7-cp*lon,ex=tx-f.position.x,ez=tz-f.position.z,d2=Math.hypot(ex,ez);
      u.hd+=angD(Math.atan2(ex,-ez),u.hd)*Math.min(1,dt*3.2);u.sp=Math.max(.7,Math.min(4,P.v+d2*.9));u.cur=1;
      if(dist<5.5){encounter('koi','Los peces se acercan a nadar contigo');
        if(Math.random()<dt*.35){spawnWake(f.position.x+Math.sin(u.hd)*.4,f.position.z-Math.cos(u.hd)*.4,0,0,.55);try{A.plop((f.position.x-P.px)/25)}catch(e){}}}
      if(dist<6.5&&Math.random()<dt*.06){u.st=1;u.j=0;u.vx=Math.sin(u.hd)*2.6;u.vz=-Math.cos(u.hd)*2.6;splash(f.position.x,.1,f.position.z,6);try{A.plop((f.position.x-P.px)/25)}catch(e){}}
    }else{u.sp=u.sp0;u.cur=0}}
  // patos: te siguen en fila (los patitos al final); huyen si los asustas
  wbirds.forEach((b,i)=>{const u=b.userData;if(!b.visible)return;
    const dx=b.position.x-P.px,dz=b.position.z-P.pz,dist=Math.hypot(dx,dz);
    if(u.flee>0){u.flee-=dt;u.hd+=angD(Math.atan2(dx,-dz),u.hd)*Math.min(1,dt*4);u.spd=2.6;return}
    if(!calm&&dist<16){u.follow=0;u.flee=3;return}
    if(calm&&(u.follow||dist<17)){
      if(!u.follow){u.follow=1;u.qT=1+Math.random()*3;if(i<2)encounter('duck','Un pato decide acompañarte')}
      const back=3.8+i*1.7,lat=Math.sin(P.t*.4+i*2)*1.1+(i%2?1:-1)*.9,tx=P.px-sp*back+cp*lat,tz=P.pz+cp*back+sp*lat,ex=tx-b.position.x,ez=tz-b.position.z,d2=Math.hypot(ex,ez);
      u.hd+=angD(Math.atan2(ex,-ez),u.hd)*Math.min(1,dt*2.6);u.spd=Math.max(.1,Math.min(3.4,(d2>.8?P.v*1.05:P.v*.9)+d2*.5));
      u.qT-=dt;if(u.qT<=0&&dist<12){u.qT=5+Math.random()*9;try{A.quack((b.position.x-P.px)/25)}catch(e){}}
    }else u.spd=0})
  // garzas de la reserva: se espantan y salen volando
  for(const [k,g] of lmMade){const hp=g.userData.hp;if(!hp||lmType(k)!==4)continue;
    for(const h of hp){const st=h[5];
      if(st.gone>0){st.gone-=dt;if(st.gone>0)continue}
      _hv.set(h[0],h[1],h[2]);g.localToWorld(_hv);const dx=_hv.x-P.px,dz=_hv.z-P.pz,d=Math.hypot(dx,dz);
      if(d<(S.scareT>0?22:13)&&P.t>(st.cd||0)){st.gone=70;st.cd=P.t+4;launchHeron(_hv.x,_hv.y,_hv.z,Math.atan2(dx,-dz)+(Math.random()-.5)*.8)}}}
  // instancias vivas (solo las garzas posadas)
  let n=0;
  for(const [k,g] of lmMade){const hp=g.userData.hp;if(!hp||lmType(k)!==4)continue;
    for(const h of hp){if(h[5].gone>0||n>=24)continue;_hv.set(h[0],h[1],h[2]);g.localToWorld(_hv);
      _hq.setFromAxisAngle(UP,g.rotation.y+h[3]);_hs.setScalar(h[4]);_hm.compose(_hv,_hq,_hs);liveH.setMatrixAt(n++,_hm)}}
  liveH.count=n;liveH.instanceMatrix.needsUpdate=true;
  // garzas en vuelo
  for(let i=fliers.length-1;i>=0;i--){const b=fliers[i],f=b.userData.fl2;f.t+=dt;
    f.vy=Math.max(.6,f.vy-dt*.35);if(b.position.y>11)f.vy=Math.min(f.vy,.2);f.sp=Math.min(6.2,f.sp+dt*1.6);
    const s=-b.position.z;f.hd+=angD(tanAng(s)+(Math.sin(f.ph)*.3),f.hd)*dt*.6;
    b.position.x+=Math.sin(f.hd)*f.sp*dt;b.position.z-=Math.cos(f.hd)*f.sp*dt;b.position.y+=f.vy*dt;
    b.rotation.y=-f.hd;b.rotation.x=Math.min(.5,f.vy*.12);
    const a=Math.sin(f.t*(f.t<4?10:6)+f.ph)*(f.t<8?.8:.3);b.userData.wings.forEach((p,j)=>{p.rotation.z=(j?1:-1)*a});
    if(f.t>16||Math.hypot(b.position.x-P.px,b.position.z-P.pz)>230){scene.remove(b);flierPool.push(b);fliers.splice(i,1)}}
}
const _bw=new THREE.Vector3();
function dfLand(d,u,dt){
  if(u.land>0){u.land-=dt;
    if(u.land<=0||S.scareT>0||!d.visible){u.land=0;u.app=0;u.t=.2;u.ty=2.4;u.tx=d.position.x+(Math.random()-.5)*5;u.tz=d.position.z-4;return false}
    boat.localToWorld(_bw.set(u.lx,u.ly,u.lz));d.position.copy(_bw);d.quaternion.copy(boat.quaternion);
    u.wings.forEach(([p,sd])=>{p.rotation.z=sd*.12});return true}
  if(!S.started||!d.visible||S.scareT>0)return false;
  if(u.app){u.t=3;boat.localToWorld(_bw.set(u.lx,u.ly,u.lz));u.tx=_bw.x;u.ty=_bw.y;u.tz=_bw.z;
    if(!(u.app-=dt>0?dt:0)||u.app<=0){u.app=0;return false}
    if(d.position.distanceTo(_bw)<.45){u.app=0;u.land=14+Math.random()*18;encounter('dragonfly','Una libélula se posó en la proa de tu canoa')}
    return false}
  if(Math.random()<dt*.18){boat.localToWorld(_bw.set(0,.5,-3));if(d.position.distanceTo(_bw)<7){let n=0;for(const q of dfs)if(q.userData.land>0||q.userData.app>0)n++;
    if(n<2){u.lx=(Math.random()-.5)*.3;u.ly=.62;u.lz=-3.05+Math.random()*.25;u.app=5}}}
  return false}

