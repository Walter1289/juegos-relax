/* Constructores de los 10 lugares del río (puente, torii, aldea, cerezos, garzas, templo, cascada, casa de té, bambú, lotos). */
import {tex,toonGrad,lumpy,trunkGeo,tuftGeo} from '../style.js';
import * as THREE from 'three';
import {hash} from './util.js';
import {lmPos,tanAng,hw,cx,H,lmType,bambooPath} from './world.js';
import {SAKURA} from '../season.js';
import {castleJob} from './castle.js';
import {MT,spr,glowTex} from './core.js';
import {bladeGeo,reedM,V3,Q,UP,S3,M4,tmp,REED,padM,lotM} from './props.js';
import {camino} from '../lightmsg.js';
import {optimizeLM,bx,gl,cyl,roof,signs,farCabin,mkHeron,tourou,torii,pagoda,fallMat,kanjiTex,hipRoof,rock,rockGeo,fallGeo} from './lm-parts.js';
/* bandeja con tetera de hierro, dos tazas y un hilo de vapor (para la casa de té) */
function teaSet(h,x,y,z,st){bx(h,.62,.03,.4,0x5a3a2c,x,y+.015,z);
  const tp=new THREE.Mesh(new THREE.SphereGeometry(.11,10,8),MT(0x3a3d44));tp.scale.y=.8;tp.position.set(x-.14,y+.12,z);h.add(tp);cyl(h,.04,.05,.03,0x2c2e34,x-.14,y+.215,z,8);
  const sp=cyl(h,.018,.028,.13,0x3a3d44,x-.03,y+.14,z,5);sp.rotation.z=-1;const hd=new THREE.Mesh(new THREE.TorusGeometry(.09,.012,5,10,Math.PI),MT(0x2c2e34));hd.position.set(x-.14,y+.2,z);h.add(hd);
  for(const dz of[-.09,.1]){cyl(h,.045,.035,.06,0xe9e2d2,x+.17,y+.06,z+dz,8);cyl(h,.038,.038,.01,0x9fb86a,x+.17,y+.085,z+dz,8)}
  for(let i=0;i<2;i++){const s=spr(0xffffff,.22);s.material.blending=THREE.NormalBlending;s.material.opacity=.0;s.position.set(x+(i?.17:-.03),y+.25,z+(i?.1:0));s.userData.y0=y+.2;s.userData.ph=i*2.1;h.add(s);st.push(s)}}
/* el castillo se construye por trozos (g.userData.job); landmarks.js lo termina y lo optimiza */
export function buildLM(k){const g=buildLM0(k);return g.userData.job?g:optimizeLM(g)}
function buildLM0(k){
  const s=lmPos(k),a=tanAng(s),type=lmType(k),g=new THREE.Group(),hwv=hw(s),side=type===6?1:(hash(k,9)>.5?1:-1);
  g.position.set(cx(s),0,-s);g.rotation.y=-a;
  const gy=(lx,lz)=>{const th=-a;return H(cx(s)+lx*Math.cos(th)+lz*Math.sin(th),s-(-lx*Math.sin(th)+lz*Math.cos(th)))};
  const red=0xc9674f,wood=0xb0876c,dark=0x7a5a4c,pink=SAKURA.c,green=0x7fb08a;
  if(type===0){const W2=hwv*2+12,n=18,red2=0xb5473a,stone=0x9d9c9a;
    const deckY=t=>3.4+1.7*(1-t*t);
    for(let i=0;i<n;i++){const t=(i+.5)/n*2-1,x=t*W2/2,y=deckY(t);const d=bx(g,W2/n+.4,.34,4.2,wood,x,y,0,{map:tex('plank')});d.rotation.z=-t*.4;
      bx(g,.07,.34,4.3,dark,x-W2/n/2,y,0).rotation.z=-t*.4}
    // vigas curvas bajo el tablero
    for(const z of[-1.7,1.7])for(let i=0;i<n;i++){const t=(i+.5)/n*2-1,x=t*W2/2;const bm=bx(g,W2/n+.5,.4,.3,0x6f4a3a,x,deckY(t)-.4,z);bm.rotation.z=-t*.4}
    // barandales rojos, postes con remate y linternas
    for(const z of[-2,2]){for(let i=0;i<=n;i++){const t=i/n*2-1,x=t*W2/2,y=deckY(t);bx(g,.18,1.5,.18,red2,x,y+.95,z);const cap=new THREE.Mesh(new THREE.SphereGeometry(.16,8,6),MT(0xd9a85a));cap.position.set(x,y+1.8,z);g.add(cap);
        if(i%3===0){const ln=new THREE.Mesh(new THREE.CylinderGeometry(.22,.22,.45,8),new THREE.MeshBasicMaterial({color:0xffd9a0}));ln.position.set(x,y+2.35,z);g.add(ln);const cp=new THREE.Mesh(new THREE.ConeGeometry(.3,.2,8),MT(red2));cp.position.set(x,y+2.68,z);g.add(cp);gl(g,0xffc77a,3,x,y+2.35,z,.8)}}
      for(let i=0;i<n;i++){const t=(i+.5)/n*2-1,x=t*W2/2,y=deckY(t);const r1=bx(g,W2/n+.2,.14,.14,red2,x,y+1.5,z);r1.rotation.z=-t*.4;const r2=bx(g,W2/n+.2,.1,.1,red2,x,y+.7,z);r2.rotation.z=-t*.4}}
    g.userData.visit={kind:0,views:[{ref:g,eye:[0,deckY(0)+1.77,0],look:[0,deckY(0)-3,-70],walk:{rect:[-W2/2+2.5,W2/2-2.5,-1.45,1.45],yf:x=>deckY(x/(W2/2))+1.77}}]};
    // pabellón central con techo
    const py=deckY(0);for(const [x,z] of[[-2.6,-1.8],[2.6,-1.8],[-2.6,1.8],[2.6,1.8]])cyl(g,.22,.26,4.2,red2,x,py+2.1,z,8);
    hipRoof(g,8,6.2,2.1,py+4.45,0x5b4a4f,{lift:.7});cyl(g,.05,.14,.9,0xd9a85a,0,py+7,0,6);
    bx(g,6.4,.3,.3,0xd9a85a,0,py+4.35,-1.8);bx(g,6.4,.3,.3,0xd9a85a,0,py+4.35,1.8);
    const lb=new THREE.Mesh(new THREE.SphereGeometry(.4,10,8),new THREE.MeshBasicMaterial({color:0xffcf8a}));lb.position.set(0,py+3.6,0);g.add(lb);gl(g,0xffc77a,6,0,py+3.6,0,.9);
    // banderines de colores
    const fc=[0xe8a09a,0xf2d08a,0x9cc7b0,0x9fb3dc];for(let i=0;i<12;i++){const t=(i+.5)/12*2-1,x=t*(W2/2-2),y=deckY(t)+2.7+Math.sin(i*1.7)*.06;const fl=new THREE.Mesh(new THREE.PlaneGeometry(.5,.7),MT(fc[i%4],{side:THREE.DoubleSide}));fl.position.set(x,y,0);fl.rotation.set(0,0,Math.PI);g.add(fl)}
    bx(g,W2-4,.04,.04,0x6f4a3a,0,deckY(0)+3.1,0).scale.y=1;
    // pilares de piedra con escalones y estatuas-leon
    [-1,1].forEach(sd=>{const px=sd*(W2/2+.6);bx(g,3.4,5.5,5,stone,px,.3,0,{map:tex('stone')});bx(g,3.6,.35,5.3,0x7d7b7a,px,3.2,0);
      for(let k=0;k<3;k++)bx(g,1.2,.3,4.2,stone,sd*(W2/2+2.6+k*1.1),.2+k*.0,0).position.y=2.2-k*.8;
      const li=new THREE.Mesh(new THREE.SphereGeometry(.5,8,6),MT(0xb7b3aa));li.scale.set(.9,1.1,1);li.position.set(px,3.9,2.2);g.add(li);const li2=li.clone();li2.position.z=-2.2;g.add(li2)});
    // pilas en el agua
    /* pilas con tajamar: prisma de seis lados más ancho abajo, que llega hasta las vigas, con losa de coronación */
    [-.28,.28].forEach(t=>{const y1=deckY(t)-.62,pr=cyl(g,1.0,1.3,y1+1.6,stone,t*W2,(y1-1.6)/2,0,6,{map:tex('stone')});pr.scale.z=2.1;const cp=cyl(g,1.15,1.1,.3,0x7d7b7a,t*W2,y1-.1,0,6);cp.scale.z=2.1})}
  else if(type===1){torii(g,0,-.7,0,1.45,red,{w:2.5,water:true,rope:true});gl(g,0xffc77a,3,0,6,0,.6)}
  else if(type===2){
    const house=(h,lx,lz,w,d,ht,roof,rot,thatch)=>{const y=gy(lx,lz);h.position.set(lx,y-.2,lz);h.rotation.y=rot;g.add(h);
      bx(h,w,ht,d,0xe8d3b6,0,ht/2,0,{map:tex('plank')});bx(h,w+.3,.35,d+.3,0x6f4a3a,0,.1,0);
      /* tejado a cuatro aguas con alero ancho (paja o teja), postes vistos en las esquinas, engawa y celosía en las ventanas */
      hipRoof(h,w+1.7,d+1.6,ht*.66,ht-.03,roof,{lift:.45,kind:thatch?'straw':'shingle',ridgeCol:thatch?0x6f5a40:0x3a3640});
      for(const sx of[-1,1])for(const sz of[-1,1])bx(h,.2,ht,.2,0x5a3f33,sx*w/2,ht/2,sz*d/2);bx(h,w+.1,.16,.16,0x5a3f33,0,ht*.86,d/2);bx(h,w+.7,.14,1.1,0xb0876c,0,.3,d/2+.55,{map:tex('plank')});
      for(const sx of[-1,1]){bx(h,.05,.9,.05,0x5a3f33,sx*w*.22,ht*.55,d/2+.09);bx(h,.9,.05,.05,0x5a3f33,sx*w*.22,ht*.55,d/2+.09)}
      const wm=new THREE.MeshBasicMaterial({color:0xffe0a0});const wn=bx(h,.9,.9,.12,0xffe0a0,-w*.22,ht*.55,d/2+.02);wn.material=wm;const wn2=bx(h,.9,.9,.12,0xffe0a0,w*.22,ht*.55,d/2+.02);wn2.material=wm;bx(h,.8,1.5,.14,0x7a4a3a,0,.85,d/2+.04);
      gl(h,0xffc77a,4.2,-w*.22,ht*.55,d/2+.6,.85);gl(h,0xffc77a,4.2,w*.22,ht*.55,d/2+.6,.85);
      const ch=bx(h,.7,1.6,.7,0x8a7a72,w*.25,ht+1.1,-d*.2);const sm_=spr(0xffffff,3);sm_.material.blending=THREE.NormalBlending;sm_.material.opacity=.3;sm_.position.set(w*.25,ht+2.8,-d*.2);h.add(sm_);
      const lan=new THREE.Mesh(new THREE.SphereGeometry(.22,8,6),MT(0xd9604a,{emissive:0x7a2a1a}));lan.position.set(w/2-.2,ht*.78,d/2+.5);h.add(lan);gl(h,0xff9a6a,2.4,w/2-.2,ht*.78,d/2+.5,.8)};
    const roofs=[0xb3706a,0x8f6a5f,0xa8805a,0x7d6a72];let n=0;
    for(const sd of[-1,1])for(let i=0;i<7;i++){if(sd===side&&i===3)continue;const lz=-26+i*8.5+hash(k,i+sd*9)*3+(sd===side?(i===2?-1.5:i===4?1.5:0):0),off=hwv+7+hash(k,i+30+sd)*6+(i%2)*5,w=4+hash(k,i+50)*2.5,d=3.6+hash(k,i+60)*2,ht=2.6+hash(k,i+70)*1.6,thatch=hash(k,i+90+sd)>.45;
      house(new THREE.Group(),sd*off,lz,w,d,ht,thatch?[0xb59a6a,0xa48a5e][i%2]:roofs[(i+n)%4],(sd>0?-Math.PI/2:Math.PI/2)+(hash(k,i+80+sd)-.5)*.35,thatch);n++}
    // muelles con botes amarrados y postes con faroles
    for(const [sd,lz] of[[-1,-10],[1,6],[-1,18]]){const dk=new THREE.Group();dk.position.set(sd*(hwv-3.2),.35,lz);g.add(dk);
      bx(dk,8,.25,2.2,0xb0876c,sd*-0+0,0,0,{map:tex('plank')}).position.x=sd*4;for(const px of[0,3,6.4])for(const pz of[-1,1])cyl(dk,.1,.12,1.8,0x6f4a3a,sd*px+0,.2,pz,5);
      const ln=new THREE.Mesh(new THREE.SphereGeometry(.26,8,6),new THREE.MeshBasicMaterial({color:0xffd59a}));ln.position.set(sd*6.4,1.5,1);dk.add(ln);gl(dk,0xffc77a,3.6,sd*6.4,1.5,1,.9);
      const bt=new THREE.Mesh(new THREE.SphereGeometry(1,10,6),MT(0x6a4a3a));bt.scale.set(.6,.3,1.9);bt.position.set(sd*-3.2,-.15,2.2);dk.add(bt)}
    // hilo de faroles entre casas y gran resplandor del pueblo
    for(let i=0;i<18;i++){const t=i/17,lz=-24+t*48,sdd=i%2?1:-1;const ln=new THREE.Mesh(new THREE.SphereGeometry(.25,8,6),new THREE.MeshBasicMaterial({color:i%3?0xffd59a:0xff9a7a}));
      ln.position.set(sdd*(hwv+4+Math.sin(i)*1.2),4.2+Math.sin(i*1.9)*.5,lz);g.add(ln);gl(g,i%3?0xffc77a:0xff9a6a,3.2,ln.position.x,ln.position.y,lz,.85)}
    gl(g,0xffb066,46,side*(hwv+11),6,0,.28);
    /* plaza de la piedra ceremonial: terraza de piedra entre las casas, monolito con soga sagrada y ocho faroles que se encienden al meditar */
    {const pxc=side*(hwv+12.5),pzc=1,yt=Math.max(gy(pxc,pzc),gy(pxc-4,pzc),gy(pxc+4,pzc),gy(pxc,pzc+4),gy(pxc,pzc-4))+.3,pz=new THREE.Group();pz.position.set(pxc,yt,pzc);g.add(pz);
      cyl(pz,5,5.5,5,0x9d9c9a,0,-2.5,0,16,{map:tex('stone')});cyl(pz,3.4,3.4,.08,0xbcb8ae,0,.03,0,16);cyl(pz,5.05,5.05,.12,0x8a8884,0,-.02,0,16);
      for(let i=0;i<4;i++)bx(pz,.9,.3,3.2-i*.15,0xaaa69d,-side*(5.3+i*.8),-.25-i*.42,0);
      const st=new THREE.Mesh(rockGeo(1.5,k+3,2,1.6),MT(0x8f918c,{map:tex('rock')}));st.scale.set(.85,1,.8);st.position.y=2.05;st.rotation.y=k;st.userData.noMerge=true;pz.add(st);
      const mo=new THREE.Mesh(lumpy(new THREE.IcosahedronGeometry(.95,1),.22,1.6,k,.5),MT(0x7fb36a));mo.scale.set(1,.34,.9);mo.position.y=4.25;pz.add(mo);
      const rp=new THREE.Mesh(new THREE.TorusGeometry(1.36,.12,6,20),MT(0xe6d8a0));rp.rotation.x=Math.PI/2;rp.scale.y=.94;rp.position.y=1.75;pz.add(rp);
      for(let i=0;i<8;i++){const an=i/8*6.283+.3,sh=new THREE.Mesh(new THREE.PlaneGeometry(.26,.62),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xffffff,side:THREE.DoubleSide}));sh.position.set(Math.cos(an)*1.42,1.38,Math.sin(an)*1.34);sh.rotation.y=-an+Math.PI/2;pz.add(sh)}
      /* piedra de ofrendas con cuenco de incienso, y dos bancos */
      bx(pz,.7,.5,1.3,0xa8a6a2,-side*2.2,.25,0);cyl(pz,.17,.12,.14,0x5a5048,-side*2.2,.57,0,8);
      for(const sz of[-1,1]){bx(pz,1.8,.12,.5,0xb0876c,-side*2.6,.5,sz*3.95,{map:tex('plank')}).rotation.y=-sz*side*.5;bx(pz,.3,.44,.3,0x7a5a4c,-side*2.6,.22,sz*3.95)}
      const lamps=[];for(let i=0;i<8;i++){const an=(side>0?0:Math.PI)+(i%2?1:-1)*(.52+(i>>1)*.52),x=Math.cos(an)*3.7,z=Math.sin(an)*3.7;cyl(pz,.05,.07,1.05,0x4a3a32,x,.52,z,5);cyl(pz,.2,.26,.1,0x8a8884,x,.05,z,7);
        const b=new THREE.Mesh(new THREE.CylinderGeometry(.24,.2,.5,8),new THREE.MeshBasicMaterial({color:0x6b645c}));b.userData.noMerge=true;b.position.set(x,1.3,z);pz.add(b);
        const cp=new THREE.Mesh(new THREE.ConeGeometry(.33,.2,8),MT(0xb5473a));cp.position.set(x,1.65,z);pz.add(cp);
        const s=spr(0xffc77a,2.6);s.material.opacity=0;s.position.set(x,1.3,z);pz.add(s);lamps.push({b,s,k:0,on:0,d:x*side})}
      lamps.sort((p,q)=>q.d-p.d);
      g.userData.visit={kind:2,lamps,stone:st,views:[{ref:pz,eye:[-side*4.4,1.55,1.2],look:[0,2.1,-.1],walk:{r:4.45,holes:[[0,0,2.15],[-side*2.2,0,1],[-side*2.6,3.95,.85],[-side*2.6,-3.95,.85],...lamps.map(l=>[l.b.position.x,l.b.position.z,.38])]}}]}}
    // arco de bienvenida con faroles sobre el río
    torii(g,0,-.5,-34,1.08,0xb5473a,{w:(hwv-.5)/1.08,water:true});gl(g,0xffc77a,4,-hwv*.5,5.2,-34,.9);gl(g,0xffc77a,4,hwv*.5,5.2,-34,.9);gl(g,0xffc77a,4,0,5.2,-34,.9)}
  else if(type===3){
    /* Jardín de sakura: cerezos rosados en flor en TODAS las estaciones, alfombra de pétalos, linternas y nobori 桜 */
    signs(g,gy,hwv,'桜',false,'#d98aa6');
    for(let i=0;i<14;i++){const lx=side*(hwv+4.5+hash(k,i)*15),lz=(i-6.5)*4.1+hash(k,i+20)*2.4,y=gy(lx,lz),h=new THREE.Group(),sc=.9+hash(k,i+60)*.5;h.position.set(lx,y,lz);g.add(h);
      h.rotation.y=hash(k,i+33)*6.28;h.add(new THREE.Mesh(trunkGeo(.2*sc,.42*sc,3.7*sc,6,4,{bend:.34*sc,seed:i,branches:[[2.1*sc,1.6*sc,3.9*sc,.5*sc,.13*sc],[2.6*sc,-1.4*sc,4.1*sc,-.7*sc,.12*sc],[3*sc,.3*sc,5.2*sc,-.3*sc,.1*sc]]}),MT(0x6f4f43,{map:tex('bark')})));
      for(const [px,py,pz,r,c] of[[0,4.5,0,2.7,pink],[1.7,4.0,.6,1.9,SAKURA.c2],[-1.5,4.2,-.8,2.1,pink],[.4,5.5,-.4,1.6,0xf8c9d6]]){const rr=r*sc*(.92+hash(k,i+px*7)*.2),cr=new THREE.Mesh(lumpy(new THREE.IcosahedronGeometry(rr,1),.2,1.9/rr,i+px,.7),MT(c));cr.scale.y=.78;cr.position.set(px*sc,py*sc,pz*sc);h.add(cr)}
      const pc=new THREE.Mesh(new THREE.CircleGeometry(2.6*sc,9).rotateX(-Math.PI/2),MT(0xf6c9d8,{side:THREE.DoubleSide}));pc.position.set(hash(k,i+9)*1.5-.7,.07,hash(k,i+19)*1.5-.7);pc.scale.set(1+hash(k,i+41)*.4,1,.6+hash(k,i+42)*.3);h.add(pc);
      if(i%3===0)gl(h,0xffb6cb,7,0,4.6*sc,0,.22)}
    /* casa del samurái (buke-yashiki) tras los cerezos: sala de tatami abierta al jardín, con la armadura, las espadas y el arco */
    {const lx=side*(hwv+30),h=new THREE.Group(),pw=0x3a2a24,em={emissive:0x4a3a26};h.position.set(lx,Math.max(gy(lx,0),gy(lx-side*4,0),gy(lx,4),gy(lx,-4))-.1,0);h.rotation.y=-side*Math.PI/2;g.add(h);
      bx(h,9.6,.9,7.6,0x9d9c9a,0,.1,0,{map:tex('stone')});bx(h,9,.2,7,0x6d4a3a,0,.6,0);bx(h,9.2,.16,1.5,0xb0876c,0,.6,4.1,{map:tex('plank')});for(let i=0;i<2;i++)bx(h,2.4-i*.3,.26,.7,0xaaa69d,0,.38-i*.26,5.1+i*.6);
      bx(h,8.4,.04,6.4,0xcdc490,0,.72,0,{map:tex('straw'),emissive:0x4a3c20});for(const x of[-2.1,0,2.1])bx(h,.06,.045,6.4,0x4f6a4a,x,.722,0);bx(h,8.4,.045,.06,0x4f6a4a,0,.722,0);
      bx(h,8.6,2.7,.15,0xe9dcc2,0,2.05,-3.27,em);for(const sx of[-1,1]){bx(h,.15,2.7,6.6,0xe9dcc2,sx*4.27,2.05,0,em);const sh=bx(h,2.4,2.3,.08,0xffe8b8,sx*3,1.85,3.2);sh.material=new THREE.MeshBasicMaterial({color:0xffe8b8});for(const q of[-.8,0,.8])bx(h,.04,2.3,.1,pw,sx*3+q,1.85,3.2);for(const q of[-.6,.2])bx(h,2.4,.04,.1,pw,sx*3,1.85+q,3.2)}
      bx(h,8.7,.4,.18,pw,0,3.2,3.2);bx(h,8.9,.14,6.9,0x4a3428,0,3.45,0);for(const x of[-4.27,-1.8,1.8,4.27])bx(h,.2,2.7,.2,pw,x,2.05,3.2);for(const x of[-4.27,4.27])bx(h,.2,2.7,.2,pw,x,2.05,-3.27);for(const x of[-4.3,0,4.3])cyl(h,.1,.1,2.7,pw,x,2.05,4.75,6);
      hipRoof(h,12.4,11,2.5,3.5,0x4c4a5a,{lift:.65,z:.6});
      /* tokonoma: tarima, rollo 誠 (sinceridad) y la armadura sobre su arcón */
      bx(h,2.8,.2,1,0x6a4a3a,-1.9,.84,-2.65);const kk=new THREE.Mesh(new THREE.PlaneGeometry(.6,1.5),new THREE.MeshBasicMaterial({map:kanjiTex('誠','#f3ead6','#2b2b2b',64,160)}));kk.position.set(-2.75,2.2,-3.18);h.add(kk);
      {const x=-1.6,y=.94,z=-2.65,rd=0x8d2a23,gd=0xd9a85a,bk=0x2a2c33;bx(h,.62,.5,.46,0x3a2a24,x,y+.25,z);bx(h,.66,.05,.5,gd,x,y+.5,z);
        for(const sx of[-1,0,1])bx(h,.24,.36,.08,rd,x+sx*.25,y+.72,z+.2).rotation.x=-.18;for(const sx of[-1,1])bx(h,.08,.36,.3,rd,x+sx*.36,y+.72,z).rotation.z=sx*.18;
        bx(h,.56,.56,.34,0x7a1f1c,x,y+1.2,z);for(const q of[.98,1.16,1.34])bx(h,.58,.03,.36,gd,x,y+q,z);for(const sx of[-1,1]){bx(h,.24,.4,.34,rd,x+sx*.42,y+1.28,z).rotation.z=sx*.3;bx(h,.25,.03,.35,gd,x+sx*.45,y+1.14,z).rotation.z=sx*.3}
        bx(h,.24,.2,.2,bk,x,y+1.6,z+.04);cyl(h,.3,.37,.14,rd,x,y+1.68,z-.03,10);const kb=new THREE.Mesh(new THREE.SphereGeometry(.23,10,8,0,6.283,0,1.7),MT(bk));kb.position.set(x,y+1.72,z);h.add(kb);bx(h,.34,.03,.14,bk,x,y+1.74,z+.22);
        const cr=new THREE.Mesh(new THREE.TorusGeometry(.2,.022,4,12,Math.PI),MT(gd,{emissive:0x5a3a10}));cr.position.set(x,y+1.86,z+.2);h.add(cr);gl(h,0xffc77a,2.2,x,y+1.3,z+.6,.25)}
      /* katana-kake con katana y wakizashi, arco en la pared, escritorio bajo y farol andon */
      {const x=1.7,y=.74,z=-2.6;bx(h,1.2,.06,.3,pw,x,y+.03,z);for(const sx of[-1,1])bx(h,.07,.6,.22,pw,x+sx*.48,y+.33,z);
        for(const [yy,L] of[[.52,1.05],[.3,.7]]){const sa=cyl(h,.024,.02,L,0x1e2028,x+.08,y+yy,z,6);sa.rotation.z=Math.PI/2;const ts=cyl(h,.026,.026,.28,0x3a3d6b,x-L/2-.06,y+yy,z,6);ts.rotation.z=Math.PI/2;const tb=cyl(h,.06,.06,.02,0xd9a85a,x-L/2+.085,y+yy,z,8);tb.rotation.z=Math.PI/2}}
      {const bw=new THREE.Mesh(new THREE.TorusGeometry(1.5,.025,4,18,1.5),MT(0x5a3a2c));bw.position.set(3.1+1.38,2,-3.15);bw.rotation.z=Math.PI-.75;h.add(bw);bx(h,.012,2.05,.012,0xe6d8a0,3.39,2,-3.15)}
      bx(h,1.1,.06,.55,0x6a4634,2.9,1.06,1,{emissive:0x2c1c12});for(const sx of[-1,1])bx(h,.06,.32,.5,0x5a3a2c,2.9+sx*.48,.88,1);bx(h,.34,.01,.44,0xf3ead6,2.8,1.095,1);bx(h,.14,.04,.2,0x2a2c33,3.25,1.11,.9);cyl(h,.012,.012,.24,0x6a4634,3.2,1.1,1.15,4).rotation.x=Math.PI/2;
      bx(h,.34,.6,.34,0xffe0a0,-3.6,1.22,1.6).material=new THREE.MeshBasicMaterial({color:0xffd9a0});const as=spr(0xffc77a,2.4);as.material.opacity=.5;as.position.set(-3.6,1.22,1.6);h.add(as);
      bx(h,.75,.09,.75,0x3f4a6b,0,.78,.9,{emissive:0x141a2a});bx(h,.75,.09,.75,0x7a3b3b,0,.74,4.1);
      for(let i=0;i<5;i++)rock(g,.6+hash(k,i+400)*.2,0xaaa69d,lx-side*(6.5+i*1.5),gy(lx-side*(6.5+i*1.5),(i%2?.4:-.4))+.03,(i%2?.4:-.4),i,.2);
      for(const sz of[-1,1])tourou(g,gy,lx-side*6.4,sz*2.6,.9);
      g.userData.visit={kind:3,range:55,views:[{ref:h,eye:[0,1.6,.9],look:[-1.5,1.75,-2.65],indoor:1,walk:{rect:[-3.65,3.65,-2.65,2.6],up:.7,boxes:[[-3.6,-.2,-9,-1.75]],holes:[[1.7,-2.6,.95],[2.9,1,.85],[-3.6,1.6,.5]]}},{ref:h,eye:[0,1.62,4.1],look:[0,1.3,40],walk:{rect:[-4,4,3.85,4.4],up:.65}}]}}
    for(const sd2 of[-1,1]){const t=tourou(g,gy,side*(hwv+3.4),sd2*10+2,1.1);t.position.y=gy(side*(hwv+3.4),sd2*10+2)}
    const bn=bx(g,3.2,.28,.9,0xb5473a,side*(hwv+7.5),gy(side*(hwv+7.5),-3)+.55,-3);bx(g,3.2,.7,.12,0xb5473a,side*(hwv+7.5),gy(side*(hwv+7.5),-3)+1,-3.5);void bn}
  else if(type===4){
    signs(g,gy,hwv,'鷺',false,'#5f8aa8');
    const NR=900,rm=new THREE.InstancedMesh(bladeGeo,reedM.material,NR);rm.frustumCulled=false;let nr2=0;
    for(let i=0;i<NR;i++){const sd=i%2?1:-1,lx=sd*(hwv-5.5+hash(k,i)*13),lz=(hash(k,i+50)-.5)*84;if(Math.abs(lx)<hwv-5.8)continue;
      const sc=.7+hash(k,i+70)*.6,y=Math.max(-.25,gy(lx,lz)-.15);V3.set(lx,y,lz);Q.setFromAxisAngle(UP,hash(k,i+90)*6.28);S3.set(sc,sc*(1+hash(k,i+30)*.5),sc);/* cañas de 1,5 a 4 m: antes llegaban a 10 m y tapaban a las garzas */M4.compose(V3,Q,S3);rm.setMatrixAt(nr2,M4);rm.setColorAt(nr2,tmp.set(REED[(hash(k,i+4)*4)|0]));nr2++}
    rm.count=nr2;rm.userData.keep=true;g.add(rm);
    g.userData.hp=[];
    for(let i=0;i<20;i++){const sd=i%2?1:-1,wade=i%3!==0,lx=sd*(hwv-(wade?2.2+hash(k,i)*3.5:-1.5+hash(k,i)*2)),lz=(hash(k,i+10)-.5)*70,sc=.95+hash(k,i+5)*.5,ry=hash(k,i+3)*6.28,py=wade?-.12:gy(lx,lz)-.1;
      if(i>=12){g.userData.hp.push([lx,py,lz,ry,sc,{gone:0}]);continue}
      const he=mkHeron(sc,hash(k,i)*6.28);he.position.set(lx,py,lz);he.rotation.y=ry;g.add(he)}
    const mist=spr(0xffffff,10);mist.material.blending=THREE.NormalBlending;mist.material.opacity=.25;mist.position.set(0,1.2,0);g.add(mist)}
  else if(type===5){signs(g,gy,hwv,'鐘',true,'#9a3a30');
    const lx=side*(hwv+19),y=gy(lx,0),h=new THREE.Group();h.position.set(lx,y,0);h.rotation.y=-side*Math.PI/2;g.add(h);const stn=0x9a9894;
    bx(h,17,3,15,stn,0,-.5,0);bx(h,15,.5,13,0xb4b1ac,0,1.25,0);bx(h,13,.5,11,0xc2bfb8,0,1.75,0);
    for(let i=0;i<7;i++)bx(h,6,.4,1.1,stn,0,1.5-i*.28,7.9+i*.95);
    for(const [x,z]of[[-4,-3.2],[4,-3.2],[-4,3.2],[4,3.2],[-4,0],[4,0]])cyl(h,.34,.38,5,0xc23f33,x,4.6,z,8);
    bx(h,9.4,.5,.7,0xc23f33,0,7.3,3.4);bx(h,9.4,.5,.7,0xc23f33,0,7.3,-3.4);bx(h,.7,.5,7.2,0xc23f33,-4.2,7.3,0);bx(h,.7,.5,7.2,0xc23f33,4.2,7.3,0);bx(h,9,.35,.6,0xd9a85a,0,6.7,3.4);
    bx(h,9,.2,7,0x7a5a4c,0,2.15,0);roof(h,9.6,2.7,9.1,0x4c4a5a);bx(h,5.2,1.5,5.2,0xefe3cd,0,8.7,0);bx(h,5.5,.2,5.5,0xc23f33,0,7.9,0);roof(h,5.3,2,11.2,0x3f3d4d);
    cyl(h,.1,.1,1.6,0xd9a85a,0,13,0,6);const orb=new THREE.Mesh(new THREE.SphereGeometry(.34,8,6),MT(0xd9a85a,{emissive:0x5a3a10}));orb.position.y=12.3;h.add(orb);
    bx(h,.5,.5,5,0x4a3a32,0,6.8,0);cyl(h,.05,.05,1.1,0x3a2a22,0,6.1,0,4);const bell=cyl(h,.75,1.15,2,0xb4893f,0,4.9,0,12,{emissive:0x4a3410});bell.userData.noMerge=true;cyl(h,.8,.8,.12,0xd9a85a,0,5.6,0,12);gl(h,0xffc77a,5,0,4.6,0,.6);
    const lg=cyl(h,.2,.2,4,0x6a4a3a,0,3.3,2.6,6);lg.rotation.x=Math.PI/2;lg.position.set(0,3.5,2.6);lg.userData.noMerge=true;
    /* sitio de meditación junto a la campana: cojines e incienso */
    {const st=[];bx(h,.95,.12,.95,0x7a3b3b,3.15,2.31,-2.55);bx(h,.95,.12,.95,0x3f4a6b,-2.6,2.31,-1.7);cyl(h,.18,.13,.16,0x5a5048,1.3,2.33,1.1,8);cyl(h,.012,.012,.3,0x7a4a3a,1.3,2.52,1.1,4);
      const s=spr(0xffffff,.5);s.material.blending=THREE.NormalBlending;s.material.opacity=0;s.position.set(1.3,2.9,1.1);s.userData.y0=2.75;s.userData.ph=1;h.add(s);st.push(s);
      g.userData.visit={kind:5,bell,log:lg,steam:st,views:[{ref:h,eye:[3.15,3.3,-2.55],look:[-1.7,4.05,5],walk:{rect:[-3.55,3.55,-2.85,2.85],up:.55,holes:[[0,0,1.5],[0,1.5,.6],[0,2.4,.6],[0,3.2,.6],[1.3,1.1,.4],[-2.6,-1.7,.5],[4,-3.2,.8],[-4,-3.2,.8],[4,0,.8],[-4,0,.8],[4,3.2,.8],[-4,3.2,.8]]}}]}}cyl(h,.025,.025,1.6,0xe6d8a0,0,4.6,2.2,4);
    for(const x of[-4,4])for(const z of[3.4,-3.4]){const ln=new THREE.Mesh(new THREE.SphereGeometry(.34,8,6),MT(0xd9604a,{emissive:0x8a2a1a}));ln.scale.y=1.3;ln.position.set(x*1.12,6.2,z*1.05);h.add(ln);gl(h,0xff9a6a,3,x*1.12,6.2,z*1.05,.85)}
    for(const x of[-3.4,3.4])for(const z of[10.4,14.5])tourou(h,()=>0,x,z,1.15).position.y=-.1;
    for(let i=0;i<5;i++)bx(h,2.6,.12,1.6,stn,0,-.3,10+i*2.1);torii(h,0,-.4,17.5,1.1,0xc23f33);
    const pg=pagoda(h,0,1.5,-3.5);pg.position.set(side>0?-11.5:11.5,1.5,-2.5);pg.scale.setScalar(1.1);
    if(camino()){
      /* camino de piedras y faroles hasta la cabaña de la colina; al inicio, su maqueta */
      const x0=side*(hwv+33),pts=[];
      for(let i=0;i<24;i++){const t=i/23,x=x0+side*t*40,z=Math.sin(t*5.2)*20*Math.min(1,t*3);pts.push([x,z]);/* losas irregulares en pasos alternos, con matas de hierba y helechos al borde */
        rock(g,.95+hash(k,i+300)*.25,i%3?0xaaa69d:0x9c9a94,x,gy(x,z)+.02,z,i,.2);{const ox=x+side*.9,oz=z+(i%2?1.1:-1.1);rock(g,.55+hash(k,i+310)*.2,0xb4b0a6,ox,gy(ox,oz)+.02,oz,i+7,.2)}
        for(let q=0;q<2;q++){const tx=x+(hash(k,i*3+q+320)-.5)*5,tz=z+(q?2.2:-2.2)+(hash(k,i*3+q+330)-.5)*1.5,tf=new THREE.Mesh(tuftGeo(5,.38+hash(k,i+q+340)*.3,.3,i+q),MT(q?0x8fb878:0x9cc27a,{side:THREE.DoubleSide}));tf.position.set(tx,gy(tx,tz),tz);g.add(tf)}
        if(i%3===1)tourou(g,gy,x,z+(i%2?2.4:-2.4),.8)}
      g.userData.path=pts;
      /* portal del sendero: un torii pequeño y dos farolillos marcan dónde empieza el camino */
      {const tx=x0-side*2.2,tg=torii(g,tx,gy(tx,0)-.1,0,.62,0xc23f33,{rope:true});tg.rotation.y=Math.PI/2}
      const mx=side*(hwv+30.5),my=gy(mx,0);bx(g,3.6,.9,3.6,0x9d9c9a,mx,my+.35,0);bx(g,3.2,.2,3.2,0xc2bfb8,mx,my+.9,0);
      const mq=new THREE.Group();mq.scale.setScalar(.3);mq.position.set(mx,my+1+(-8.5*.3),0);mq.rotation.y=-side*Math.PI/2;g.add(mq);farCabin(mq,k+500,false);
      gl(g,0xffc77a,6,mx,my+2.4,0,.8);
      const pe=pts[23],pq=pts[22],tl=Math.hypot(pe[0]-pq[0],pe[1]-pq[1]),xe=pe[0]+(pe[0]-pq[0])/tl*66,ze=pe[1]+(pe[1]-pq[1])/tl*66,hc=new THREE.Group();hc.position.set(xe,gy(xe,ze)-1,ze);hc.rotation.y=Math.atan2(pq[0]-pe[0],pq[1]-pe[1])+Math.PI*0;g.add(hc);hc.scale.setScalar(2.6);g.userData.hill=[xe,ze];
      farCabin(hc,k+700)}}
  else if(type===6){
    const lx=side*(hwv+3.6),y=gy(lx,0),h=new THREE.Group();h.position.set(lx,y,0);g.add(h);signs(g,gy,hwv,'滝',false,'#3f7a8a');
    const rc=(c)=>MT(c);for(let i=0;i<22;i++){const rr=3+hash(k,i)*3.5,rx=side*(7.8+hash(k,i+5)*9),ry=hash(k,i+9)*15+(rx*side<8?3:0),rz=(hash(k,i+13)-.5)*17;const r=new THREE.Mesh(rockGeo(rr,i*1.3,1,1.2),MT(i%3?0x7a8a7e:0x6c8f78,{map:tex('rock')}));r.position.set(rx,ry,rz);r.rotation.y=i*1.9;h.add(r);
      const mo=new THREE.Mesh(lumpy(new THREE.IcosahedronGeometry(rr*.78,1),.22,1.6/rr,i,.5),rc(i%2?0x7fb36a:0x8cbf74));mo.position.set(rx,ry+rr*.7,rz);mo.scale.set(1.05,.42,1.05);h.add(mo)}
    for(let i=0;i<10;i++){const rr=1+hash(k,i+60)*1.2,r=new THREE.Mesh(rockGeo(rr,i*2.1,1,.8),rc(0x7a8a7e));r.position.set(-side*(.5+hash(k,i+70)*3),rr*.4,(hash(k,i+80)-.5)*12);h.add(r)}
    /* caída escalonada en tres repisas de roca, con estratos, helechos y una soga sagrada */
    [[19,13.4,-.2,3.6],[13.4,7,-1.5,5.6],[7,0,-2.9,7.2]].forEach(([ya,yb,xo,wd],i)=>{
      const f=new THREE.Mesh(fallGeo(wd,ya-yb+.5,-side*.55,.14),fallMat);f.position.set(-side*(.5+i*1.35),(ya+yb)/2-.25,0);f.rotation.y=Math.PI/2;h.add(f);
      /* repisa: losas de roca irregulares con musgo, en vez de una caja */
      for(let q=0;q<3;q++){const lz=(q-1)*(wd*.42),lg=new THREE.Mesh(rockGeo(1.9,i*3+q,1,.45),MT(i%2?0x7a8a7e:0x6c8f78,{map:tex('rock')}));lg.position.set(-side*(.5+i*1.35-1.2)+hash(k,i*3+q+200)*.5,yb-.25,lz);lg.scale.set(1,1,wd*.26);h.add(lg);
        const mo=new THREE.Mesh(lumpy(new THREE.IcosahedronGeometry(1.3,1),.25,1.2,q+i,.4),MT(0x7fb36a));mo.position.set(lg.position.x+side*.5,yb+.2,lz);mo.scale.set(1,.3,wd*.24);h.add(mo)}});
    for(let i=0;i<12;i++){const f=new THREE.Mesh(tuftGeo(6,1.3+hash(k,i+120)*.9,.5,i),MT(i%2?0x6fa86a:0x8cc27a,{side:THREE.DoubleSide}));f.position.set(side*(5.5+hash(k,i+130)*7),3+hash(k,i+140)*12,(hash(k,i+150)-.5)*14);f.rotation.z=(hash(k,i)-.5)*.8;h.add(f)}
    {const br=new THREE.Mesh(rockGeo(2.2,5,1,1.15),MT(0x77857a,{map:tex('rock')}));br.position.set(-side*7.2,1.4,3.6);h.add(br);
     const rp=new THREE.Mesh(new THREE.TorusGeometry(2.3,.1,5,16),MT(0xe6d8a0));rp.position.set(-side*7.2,1.9,3.6);rp.rotation.x=Math.PI/2;h.add(rp);
     for(let i=0;i<6;i++){const sh=new THREE.Mesh(new THREE.PlaneGeometry(.34,.8),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xffffff,side:THREE.DoubleSide}));const an=i/6*6.283;sh.position.set(-side*7.2+Math.cos(an)*2.3,1.45,3.6+Math.sin(an)*2.3);h.add(sh)}}
    for(let i=0;i<5;i++){rock(h,.6+hash(k,i+160)*.25,0x9d9c9a,-side*(2+i*1.7),.08,-3.4+i*.4,i,.22)}
    for(let i=0;i<4;i++){const ft=spr(0xffffff,4);ft.material.blending=THREE.NormalBlending;ft.material.opacity=.55;ft.position.set(-side*(3+i*1.3),.5,(hash(k,i+170)-.5)*6);h.add(ft)}
    const fw2=new THREE.Mesh(fallGeo(3,14,-side*.4,.1),fallMat);fw2.position.set(-side*.7,7,-5.6);fw2.rotation.y=Math.PI/2;fw2.rotation.z=.04;h.add(fw2);
    const pool=new THREE.Mesh(new THREE.CircleGeometry(6.5,24).rotateX(-Math.PI/2),new THREE.MeshBasicMaterial({color:0xcfeef2,transparent:true,opacity:.6,depthWrite:false}));pool.position.set(-side*3.6,.1,0);h.add(pool);
    g.userData.fall=[lx-side*4.2,0];
    for(let i=0;i<6;i++){const f=spr(0xffffff,5+hash(k,i)*3);f.material.blending=THREE.NormalBlending;f.material.opacity=.5;f.position.set(-side*(1+hash(k,i+3)*4),.5+hash(k,i)*.8,(hash(k,i+9)-.5)*7);h.add(f)}
    const mist=spr(0xffffff,26);mist.material.blending=THREE.NormalBlending;mist.material.opacity=.5;mist.position.set(-side*3,4,0);h.add(mist)}
  else if(type===7){signs(g,gy,hwv,'茶',true,'#a9453a');
    const lx=side*(hwv-3),h=new THREE.Group();h.position.set(lx,0,0);g.add(h);g.userData.lx=lx;
    const pl={map:tex('plank')},pw=0x4b342a;
    /* cimiento de piedra, pilotes y engawa (terraza) con barandilla y escalones */
    bx(h,7.4,.6,6.4,0x9d9c9a,0,.1,0);for(const x of[-3.2,0,3.2])for(const z of[-2.7,2.7])cyl(h,.14,.16,1.2,pw,x,.4,z,6);
    bx(h,7.2,.26,6.2,wood,0,1.15,0,pl);
    for(const sd of[-1,1]){bx(h,.14,.12,6,0xb5473a,sd*3.5,1.95,0);bx(h,7,.12,.14,0xb5473a,0,1.95,sd*3);for(let i=-3;i<=3;i+=1.5){bx(h,.1,.8,.1,0xb5473a,sd*3.5,1.55,i);}}
    for(let i=0;i<3;i++)bx(h,2.6-i*.1,.28,.7,0xaaa69d,0,.85-i*.38,3.9+i*.62);
    /* edificio: base de yeso, entramado oscuro y shoji con celosía */
    bx(h,5.2,2.5,4.2,0xe8d3b6,0,2.65,-.3);for(const x of[-2.6,-1.3,0,1.3,2.6])bx(h,.18,2.5,.18,pw,x,2.65,1.85);
    bx(h,5.3,.2,.2,pw,0,3.85,1.85);bx(h,5.3,.14,.2,pw,0,1.5,1.85);
    for(const x of[-1.95,1.95]){bx(h,1.0,1.5,.08,0xfff0d0,x,2.5,1.93).material=new THREE.MeshBasicMaterial({color:0xffe8b8});for(const q of[-.25,.25]){bx(h,1.0,.05,.1,pw,x,2.5+q*2,1.97);bx(h,.05,1.5,.1,pw,x+q*2,2.5,1.97)}}
    for(const z of[-1.1,.5])for(const sd of[-1,1])bx(h,.08,1.2,1.0,0xfff0d0,sd*2.62,2.6,z).material=new THREE.MeshBasicMaterial({color:0xffe8b8});
    /* tejado de dos aleros */
    bx(h,6.1,.14,5.1,0x4b3b3f,0,3.95,-.3);hipRoof(h,7.8,6.8,1.35,4.02,0x5b4a4f,{z:-.3,lift:.55});bx(h,3.4,.9,2.6,0xe8d3b6,0,5.3,-.3);hipRoof(h,5,4,1.35,5.7,0x66545a,{z:-.3,lift:.45});cyl(h,.05,.12,.8,0xd9a85a,0,7.4,-.3,5);
    /* noren, entrada con luz cálida y farolillos */
    for(const x of[-.55,.55]){const nr=new THREE.Mesh(new THREE.PlaneGeometry(1,1.4),new THREE.MeshToonMaterial({gradientMap:toonGrad,map:kanjiTex('茶','#2f3f6b','#ffffff',128,160),side:THREE.DoubleSide}));nr.position.set(x,2.9,1.93);h.add(nr)}
    bx(h,1.2,1.1,.1,0xffe0a0,0,2.7,1.8).material=new THREE.MeshBasicMaterial({color:0xffe0a0});gl(h,0xffc77a,4,0,2.7,2.3,.9);
    for(const x of[-2.4,2.4]){const ln=new THREE.Mesh(new THREE.SphereGeometry(.3,8,6),MT(0xd9604a,{emissive:0x7a2a1a}));ln.scale.y=1.3;ln.position.set(x,3.3,2.6);h.add(ln);gl(h,0xff9a6a,2.6,x,3.3,2.6,.8)}
    /* sombrilla roja con banco, bonsái y arbustos de té */
    cyl(h,.05,.05,2.6,wood,3.9,2.2,4.2,5);const um=new THREE.Mesh(new THREE.ConeGeometry(1.7,.7,12),MT(0xc23f33));um.position.set(3.9,3.6,4.2);h.add(um);bx(h,1.8,.15,.6,wood,3.9,1.5,4.2);bx(h,1.8,.05,.62,0xc23f33,3.9,1.6,4.2);
    cyl(h,.1,.14,.8,pw,-4.4,.9,2.4,5);for(const [y,r] of[[1.5,.7],[1.9,.5]]){const bn=new THREE.Mesh(lumpy(new THREE.IcosahedronGeometry(r,1),.22,2.4,y,.6),MT(0x4f7254));bn.position.set(-4.4,y,2.4);bn.scale.y=.6;h.add(bn)}
    for(let i=0;i<7;i++){const t=new THREE.Mesh(lumpy(new THREE.IcosahedronGeometry(.7,1),.22,2.6,i,.7),MT(i%2?0x6fa86a:0x5f9a62));t.position.set(-3.2+i*1.1,.7,-3.9);t.scale.set(1.2,.8,1);h.add(t)}
    for(let i=0;i<6;i++)cyl(h,.5,.55,.14,0xaaa69d,-.6+Math.sin(i*1.1)*.6,.1,6.2+i*1.25,7);
    for(const sd2 of[-1,1]){const t=tourou(g,gy,lx+sd2*7.5,5,1);t.position.y=gy(lx+sd2*7.5,5)}
    /* interior: sala de tatami con mesa baja, té, tokonoma con rollo y farol de papel (se ve al entrar a meditar) */
    const steam=[];{const R=new THREE.Mesh(new THREE.BoxGeometry(5,2.4,4),MT(0xe9dcc2,{side:THREE.BackSide,emissive:0x5a452c}));R.position.set(0,2.62,-.3);h.add(R);
      bx(h,4.98,.04,3.98,0xcdc490,0,1.45,-.3,{map:tex('straw'),emissive:0x4a3c20});for(const x of[-1.25,1.25])bx(h,.06,.045,3.98,0x4f6a4a,x,1.452,-.3);bx(h,2.5,.045,.06,0x4f6a4a,0,1.452,-.3);
      for(const x of[-2.48,2.48])for(const z of[-2.28,1.68])bx(h,.14,2.4,.14,pw,x,2.62,z);bx(h,4.98,.12,.1,pw,0,3.3,-2.27);bx(h,4.98,.12,.1,pw,0,3.3,1.67);
      /* tokonoma al fondo: tarima, rollo 和 y un arreglo de flores */
      bx(h,1.7,.16,.55,0x6a4a3a,-1.3,1.55,-2);const kk=new THREE.Mesh(new THREE.PlaneGeometry(.52,1.3),new THREE.MeshBasicMaterial({map:kanjiTex('和','#f3ead6','#2b2b2b',64,160)}));kk.position.set(-1.3,2.65,-2.27);h.add(kk);
      cyl(h,.07,.09,.2,0x3f5a6b,-.85,1.73,-2,7);const fl=new THREE.Mesh(tuftGeo(5,.5,.14,3),MT(0x6fa86a,{side:THREE.DoubleSide}));fl.position.set(-.85,1.8,-2);h.add(fl);const bl=new THREE.Mesh(new THREE.SphereGeometry(.07,6,5),MT(0xf5a4bd));bl.position.set(-.8,2.22,-1.97);h.add(bl);
      /* ventana redonda y shoji iluminados */
      const wm=new THREE.MeshBasicMaterial({color:0xffe8b8});const rw=new THREE.Mesh(new THREE.CircleGeometry(.62,20),wm);rw.position.set(1.15,2.7,-2.28);h.add(rw);for(const q of[-.2,.2]){bx(h,1.24,.03,.02,pw,1.15,2.7+q,-2.27);bx(h,.03,1.24,.02,pw,1.15+q,2.7,-2.27)}
      for(const sd of[-1,1])for(const z of[-1.2,.6]){const sh=bx(h,.02,1.5,1.3,0xffe8b8,sd*2.48,2.5,z);sh.material=wm;for(const q of[-.35,0,.35])bx(h,.03,1.5,.03,pw,sd*2.46,2.5,z+q);bx(h,.03,.03,1.3,pw,sd*2.46,2.5,z)}
      /* mesa baja, té, cojines y farol andon */
      cyl(h,.62,.62,.05,0x6a4634,0,1.8,-.5,14,{emissive:0x2c1c12});cyl(h,.3,.36,.3,0x5a3a2c,0,1.62,-.5,8,{emissive:0x22160e});teaSet(h,0,1.825,-.5,steam);
      bx(h,.7,.09,.7,0x7a3b3b,.95,1.5,.5,{emissive:0x2a1212});bx(h,.7,.09,.7,0x3f4a6b,-.95,1.5,.3,{emissive:0x141a2a});
      bx(h,.34,.6,.34,0xffe0a0,2.05,1.95,-1.9).material=new THREE.MeshBasicMaterial({color:0xffd9a0});for(const [a,b] of[[1,1],[-1,1],[1,-1],[-1,-1]])bx(h,.03,.72,.03,pw,2.05+a*.17,1.86,-1.9+b*.17);
      const as=spr(0xffc77a,2.4);as.material.opacity=.5;as.position.set(2.05,1.95,-1.9);h.add(as)}
    /* mirador hacia el valle: terraza elevada con banco y, a lo lejos, la cabaña del acantilado */
    {const mx=side*10.5,mh=new THREE.Group();mh.position.set(mx,0,-1);h.add(mh);
     bx(mh,5.4,.3,5.4,wood,0,1.15,0,pl);for(const x of[-2.4,2.4])for(const z of[-2.4,2.4])cyl(mh,.13,.16,1.3,pw,x,.5,z,5);
     bx(mh,5.4,.12,.12,0xb5473a,0,1.95,2.6);bx(mh,5.4,.12,.12,0xb5473a,0,1.95,-2.6);bx(mh,.12,.12,5.4,0xb5473a,-side*2.6,1.95,0);bx(mh,.12,.12,5.4,0xb5473a,side*2.6,1.95,0);
     bx(mh,2.2,.14,.7,wood,0,1.75,-1.6);bx(mh,2.2,.5,.1,wood,0,2.1,-1.95);cyl(mh,.08,.08,.5,pw,-.9,1.5,-1.6,4);cyl(mh,.08,.08,.5,pw,.9,1.5,-1.6,4);
     const tl=tourou(mh,gy,2,2,.9);tl.position.set(side*1.8,1.3,1.6);
     /* mesita de té en el balcón */
     bx(mh,.8,.05,.5,0x6a4634,side*.9,1.72,.1);for(const a of[-1,1])bx(mh,.05,.42,.44,0x5a3a2c,side*.9+a*.33,1.5,.1);teaSet(mh,side*.9,1.745,.1,steam);bx(mh,.75,.09,.75,0x7a3b3b,-side*.5,1.35,.9);
     g.userData.visit={kind:7,steam,views:[{ref:h,eye:[.95,2.32,.75],look:[-.6,1.95,-1.8],name:0,indoor:1,walk:{rect:[-1.95,1.95,-1.75,1.15],up:.6,holes:[[0,-.5,.9],[-1.3,-2.05,.75],[2.05,-1.9,.45],[-.95,.3,.3]]}},{ref:h,eye:[-side*3.02,2.28,.9],look:[-side*30,1.2,-24],name:1,walk:{rect:[-3.2,3.2,-2.3,2.8],up:.5,boxes:[[-2.95,2.95,-9,2.45]],holes:[[-side*3.05,-.15,.3]]}}]};
     /* té en la galería que da al río */
     teaSet(h,-side*3.05,1.29,-.15,steam);bx(h,.7,.09,.7,0x3f4a6b,-side*3.02,1.33,.9);
     for(let i=0;i<3;i++)cyl(h,.5,.55,.14,0xaaa69d,side*(5+i*1.15),.1,-.4,7);
     /* cabaña lejana sobre un risco */
     const fx=side*66,fz=-27,c=new THREE.Group();c.position.set(fx,gy(fx,fz)-1,fz);h.add(c);c.scale.setScalar(2.9);
     farCabin(c,k)}
    }
  else if(type===8){signs(g,gy,hwv,'竹林',false,'#4f8a5a');
    for(const sd of[-1,1])for(let i=0;i<6;i++)tourou(g,gy,sd*(hwv+3+hash(k,i)*2.5),-45+i*18+hash(k,i+3)*4);
    for(let i=0;i<12;i++){const sd=i%2?1:-1,lx=sd*(hwv+4+hash(k,i)*12),lz=(hash(k,i+20)-.5)*110;const m2=new THREE.Mesh(new THREE.PlaneGeometry(3.6,22),new THREE.MeshBasicMaterial({map:glowTex,color:0xfff0b0,transparent:true,opacity:.14,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide}));m2.position.set(lx,gy(lx,lz)+10,lz);m2.rotation.set(0,hash(k,i+9)*3,sd*.25);g.add(m2)}
    /* sendero de losas hasta un claro con shishi-odoshi (la caña que se llena de agua y golpea la piedra), roca para sentarse y farolillos */
    {const B=bambooPath(k),pts=B.pts,[ex,ez]=B.end,ey=gy(ex,ez),sd=Math.sign(ex);
      for(let i=1;i<=pts.length;i++){const p=pts[i-1],q=i<pts.length?pts[i]:[ex,ez],L=Math.hypot(q[0]-p[0],q[1]-p[1]),n=Math.round(L/1.25);for(let j=0;j<n;j++){const t=j/n,x=p[0]+(q[0]-p[0])*t+(hash(k,i*9+j)-.5)*.5,z=p[1]+(q[1]-p[1])*t+(hash(k,i*9+j+40)-.5)*.5;rock(g,.5+hash(k,i*7+j)*.18,j%2?0xaaa69d:0x9c9a94,x,gy(x,z)+.03,z,i*5+j,.18)}}
      tourou(g,gy,pts[0][0]+sd*.3,pts[0][1]+1.8,.8);tourou(g,gy,ex-sd*3.2,ez+3.4,.8);tourou(g,gy,ex+sd*2.6,ez-3.3,.8);
      const c=new THREE.Group();c.position.set(ex+sd*1.9,ey,ez+.6);g.add(c);
      const bs=new THREE.Mesh(rockGeo(.75,k,1,.6),MT(0x8f918c,{map:tex('rock')}));bs.position.y=.2;c.add(bs);const wt=new THREE.Mesh(new THREE.CircleGeometry(.42,12).rotateX(-Math.PI/2),new THREE.MeshBasicMaterial({color:0xbfe6ea}));wt.position.y=.5;c.add(wt);
      for(const z of[-.16,.16])cyl(c,.04,.05,1.1,0x7a9a5a,.75,.55,z,6);cyl(c,.035,.035,.9,0x8fb06a,1.25,1.25,0,6).rotation.z=1.1;
      const arm=new THREE.Group();arm.position.set(.75,.95,0);arm.userData.noMerge=true;c.add(arm);const tb=cyl(arm,.075,.085,1.5,0x8fb06a,-.25,0,0,7);tb.rotation.z=Math.PI/2;cyl(arm,.09,.09,.06,0x6f8a4a,.2,0,0,7).rotation.z=Math.PI/2;
      rock(g,1.0,0x9a9c96,ex-sd*1.6,ey+.12,ez-1.2,k+2,.42);
      for(let i=0;i<10;i++){const an=i*.63,tf=new THREE.Mesh(tuftGeo(5,.4+hash(k,i+70)*.3,.3,i),MT(i%2?0x8fb878:0x7aa868,{side:THREE.DoubleSide})),x=ex+Math.cos(an)*(3.6+hash(k,i+80)),z=ez+Math.sin(an)*(3.6+hash(k,i+90));tf.position.set(x,gy(x,z),z);g.add(tf)}
      g.userData.visit={kind:8,arm,views:[{ref:g,eye:[pts[0][0],1.6,pts[0][1]],look:[pts[1][0],1.3,pts[1][1]],walk:{ground:1.6,path:[...pts,[ex,ez]],pw:1.0,end:[ex,ez,3.3],holes:[[ex+sd*1.9,ez+.6,1.25],[ex+sd*2.9,ez+.6,.8],[ex-sd*1.6,ez-1.2,1.15],[ex-sd*3.2,ez+3.4,.6],[ex+sd*2.6,ez-3.3,.6]]}}]}}}
  else if(type===10)g.userData.job=castleJob(g,k,{gy,hwv,side,s,a})
  else{/* estanque de lotos: las mismas hojas con muesca y flores de pétalos del resto del río, en dos mallas instanciadas */
    const NP=54,pm=new THREE.InstancedMesh(padM.geometry,padM.material,NP),fm=new THREE.InstancedMesh(lotM.geometry,lotM.material,16);pm.frustumCulled=fm.frustumCulled=false;pm.userData.keep=fm.userData.keep=true;let nf=0;
    const PC=['#8fcf9a','#7fbf8a','#9ad6a0','#74b486'],FC=['#f5a4bd','#f9c2d2','#fff1f4','#f08fb0'];
    for(let i=0;i<NP;i++){const lx=(hash(k,i)-.5)*hwv*1.5,lz=(hash(k,i+40)-.5)*36,sc=1.2+hash(k,i+7)*1.5;
      V3.set(lx,.05,lz);Q.setFromAxisAngle(UP,hash(k,i+11)*6.28);S3.set(sc,1,sc);M4.compose(V3,Q,S3);pm.setMatrixAt(i,M4);pm.setColorAt(i,tmp.set(PC[i%4]));
      if(i%4===0&&nf<16){const fs=1.5+hash(k,i+17)*.9;V3.set(lx+.2,.06,lz+.1);S3.set(fs,fs,fs);M4.compose(V3,Q,S3);fm.setMatrixAt(nf,M4);fm.setColorAt(nf,tmp.set(FC[nf%4]));nf++;gl(g,0xff9fc0,1.8,lx,.5,lz,.35)}}
    fm.count=nf;g.add(pm,fm)}
  return g;
}
