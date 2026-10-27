/* Constructores de los 10 lugares del río (puente, torii, aldea, cerezos, garzas, templo, cascada, casa de té, bambú, lotos). */
import {tex,toonGrad} from '../style.js';
import * as THREE from 'three';
import {hash} from './util.js';
import {lmPos,tanAng,hw,cx,H,lmType} from './world.js';
import {SAKURA} from '../season.js';
import {castleJob} from './castle.js';
import {MT,spr,glowTex} from './core.js';
import {bladeGeo,reedM,V3,Q,UP,S3,M4,tmp,REED} from './props.js';
import {camino} from '../lightmsg.js';
import {optimizeLM,bx,gl,cyl,roof,signs,farCabin,mkHeron,tourou,torii,pagoda,fallMat,kanjiTex} from './lm-parts.js';
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
    // pabellón central con techo
    const py=deckY(0);for(const [x,z] of[[-2.6,-1.8],[2.6,-1.8],[-2.6,1.8],[2.6,1.8]])cyl(g,.22,.26,4.2,red2,x,py+2.1,z,8);
    const rf=new THREE.Mesh(new THREE.ConeGeometry(4.6,2.4,4),MT(0x5b4a4f));rf.rotation.y=Math.PI/4;rf.position.y=py+5.4;rf.scale.set(1,1,.8);g.add(rf);
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
    [-.28,.28].forEach(t=>{bx(g,1.8,5.2,4,stone,t*W2,.4,0,{map:tex('stone')})})}
  else if(type===1){[-1,1].forEach(sd=>{cyl(g,.32,.38,7,red,sd*3.6,2,0,10)});
    bx(g,10.5,.5,1,red,0,5.7,0);bx(g,11.8,.35,1.3,0x5b4a4a,0,6.15,0);bx(g,8,.28,.5,red,0,4.8,0);gl(g,0xffc77a,3,0,4.2,0,.6)}
  else if(type===2){
    const house=(h,lx,lz,w,d,ht,roof,rot)=>{const y=gy(lx,lz);h.position.set(lx,y-.2,lz);h.rotation.y=rot;g.add(h);
      bx(h,w,ht,d,0xe8d3b6,0,ht/2,0,{map:tex('plank')});bx(h,w+.3,.35,d+.3,0x6f4a3a,0,.1,0);
      const r=new THREE.Mesh(new THREE.ConeGeometry(Math.max(w,d)*.82,ht*.7,4),MT(roof));r.rotation.y=Math.PI/4;r.position.y=ht+ht*.3;r.scale.set(w/Math.max(w,d),1,d/Math.max(w,d));h.add(r);
      const wm=new THREE.MeshBasicMaterial({color:0xffe0a0});const wn=bx(h,.9,.9,.12,0xffe0a0,-w*.22,ht*.55,d/2+.02);wn.material=wm;const wn2=bx(h,.9,.9,.12,0xffe0a0,w*.22,ht*.55,d/2+.02);wn2.material=wm;bx(h,.8,1.5,.14,0x7a4a3a,0,.85,d/2+.04);
      gl(h,0xffc77a,4.2,-w*.22,ht*.55,d/2+.6,.85);gl(h,0xffc77a,4.2,w*.22,ht*.55,d/2+.6,.85);
      const ch=bx(h,.7,1.6,.7,0x8a7a72,w*.25,ht+1.1,-d*.2);const sm_=spr(0xffffff,3);sm_.material.blending=THREE.NormalBlending;sm_.material.opacity=.3;sm_.position.set(w*.25,ht+2.8,-d*.2);h.add(sm_);
      const lan=new THREE.Mesh(new THREE.SphereGeometry(.22,8,6),MT(0xd9604a,{emissive:0x7a2a1a}));lan.position.set(w/2-.2,ht*.78,d/2+.5);h.add(lan);gl(h,0xff9a6a,2.4,w/2-.2,ht*.78,d/2+.5,.8)};
    const roofs=[0xb3706a,0x8f6a5f,0xa8805a,0x7d6a72];let n=0;
    for(const sd of[-1,1])for(let i=0;i<7;i++){const lz=-26+i*8.5+hash(k,i+sd*9)*3,off=hwv+7+hash(k,i+30+sd)*6+(i%2)*5,w=4+hash(k,i+50)*2.5,d=3.6+hash(k,i+60)*2,ht=2.6+hash(k,i+70)*1.6;
      house(new THREE.Group(),sd*off,lz,w,d,ht,roofs[(i+n)%4],sd>0?-Math.PI/2:Math.PI/2);n++}
    // muelles con botes amarrados y postes con faroles
    for(const [sd,lz] of[[-1,-10],[1,6],[-1,18]]){const dk=new THREE.Group();dk.position.set(sd*(hwv-3.2),.35,lz);g.add(dk);
      bx(dk,8,.25,2.2,0xb0876c,sd*-0+0,0,0,{map:tex('plank')}).position.x=sd*4;for(const px of[0,3,6.4])for(const pz of[-1,1])cyl(dk,.1,.12,1.8,0x6f4a3a,sd*px+0,.2,pz,5);
      const ln=new THREE.Mesh(new THREE.SphereGeometry(.26,8,6),new THREE.MeshBasicMaterial({color:0xffd59a}));ln.position.set(sd*6.4,1.5,1);dk.add(ln);gl(dk,0xffc77a,3.6,sd*6.4,1.5,1,.9);
      const bt=new THREE.Mesh(new THREE.SphereGeometry(1,10,6),MT(0x6a4a3a));bt.scale.set(.6,.3,1.9);bt.position.set(sd*-3.2,-.15,2.2);dk.add(bt)}
    // hilo de faroles entre casas y gran resplandor del pueblo
    for(let i=0;i<18;i++){const t=i/17,lz=-24+t*48,sdd=i%2?1:-1;const ln=new THREE.Mesh(new THREE.SphereGeometry(.25,8,6),new THREE.MeshBasicMaterial({color:i%3?0xffd59a:0xff9a7a}));
      ln.position.set(sdd*(hwv+4+Math.sin(i)*1.2),4.2+Math.sin(i*1.9)*.5,lz);g.add(ln);gl(g,i%3?0xffc77a:0xff9a6a,3.2,ln.position.x,ln.position.y,lz,.85)}
    gl(g,0xffb066,46,side*(hwv+11),6,0,.28);
    // arco de bienvenida con faroles sobre el río
    for(const sd of[-1,1])cyl(g,.25,.3,6.5,0xb5473a,sd*(hwv-.5),2.6,-34,8);
    bx(g,hwv*2,.4,.5,0xb5473a,0,5.8,-34);gl(g,0xffc77a,4,-hwv*.5,5.2,-34,.9);gl(g,0xffc77a,4,hwv*.5,5.2,-34,.9);gl(g,0xffc77a,4,0,5.2,-34,.9)}
  else if(type===3){
    /* Jardín de sakura: cerezos rosados en flor en TODAS las estaciones, alfombra de pétalos, linternas y nobori 桜 */
    signs(g,gy,hwv,'桜',false,'#d98aa6');
    for(let i=0;i<14;i++){const lx=side*(hwv+4.5+hash(k,i)*15),lz=(i-6.5)*4.1+hash(k,i+20)*2.4,y=gy(lx,lz),h=new THREE.Group(),sc=.9+hash(k,i+60)*.5;h.position.set(lx,y,lz);g.add(h);
      cyl(h,.26*sc,.44*sc,3.4*sc,0x6f4f43,0,1.7*sc,0,6);const br=cyl(h,.14*sc,.2*sc,2.2*sc,0x6f4f43,.7*sc,3.6*sc,0,5);br.rotation.z=-.7;
      for(const [px,py,pz,r,c] of[[0,4.5,0,2.7,pink],[1.7,4.0,.6,1.9,SAKURA.c2],[-1.5,4.2,-.8,2.1,pink],[.4,5.5,-.4,1.6,0xf8c9d6]]){const cr=new THREE.Mesh(new THREE.IcosahedronGeometry(r*sc*(.92+hash(k,i+px*7)*.2),1),MT(c));cr.scale.y=.78;cr.position.set(px*sc,py*sc,pz*sc);h.add(cr)}
      const pc=new THREE.Mesh(new THREE.CircleGeometry(2.6*sc,9).rotateX(-Math.PI/2),MT(0xf6c9d8,{side:THREE.DoubleSide}));pc.position.set(hash(k,i+9)*1.5-.7,.07,hash(k,i+19)*1.5-.7);h.add(pc);
      if(i%3===0)gl(h,0xffb6cb,7,0,4.6*sc,0,.22)}
    for(const sd2 of[-1,1]){const t=tourou(g,gy,side*(hwv+3.4),sd2*10+2,1.1);t.position.y=gy(side*(hwv+3.4),sd2*10+2)}
    const bn=bx(g,3.2,.28,.9,0xb5473a,side*(hwv+7.5),gy(side*(hwv+7.5),-3)+.55,-3);bx(g,3.2,.7,.12,0xb5473a,side*(hwv+7.5),gy(side*(hwv+7.5),-3)+1,-3.5);void bn}
  else if(type===4){
    signs(g,gy,hwv,'鷺',false,'#5f8aa8');
    const NR=900,rm=new THREE.InstancedMesh(bladeGeo,reedM.material,NR);rm.frustumCulled=false;let nr2=0;
    for(let i=0;i<NR;i++){const sd=i%2?1:-1,lx=sd*(hwv-5.5+hash(k,i)*13),lz=(hash(k,i+50)-.5)*84;if(Math.abs(lx)<hwv-5.8)continue;
      const sc=1.1+hash(k,i+70)*1.5,y=Math.max(-.25,gy(lx,lz)-.15);V3.set(lx,y,lz);Q.setFromAxisAngle(UP,hash(k,i+90)*6.28);S3.set(sc,sc*(1+hash(k,i+30)*.9),sc);M4.compose(V3,Q,S3);rm.setMatrixAt(nr2,M4);rm.setColorAt(nr2,tmp.set(REED[(hash(k,i+4)*4)|0]));nr2++}
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
    bx(h,.5,.5,5,0x4a3a32,0,6.8,0);cyl(h,.05,.05,1.1,0x3a2a22,0,6.1,0,4);const bell=cyl(h,.75,1.15,2,0xb4893f,0,4.9,0,12,{emissive:0x4a3410});cyl(h,.8,.8,.12,0xd9a85a,0,5.6,0,12);gl(h,0xffc77a,5,0,4.6,0,.6);
    const lg=cyl(h,.2,.2,4,0x6a4a3a,0,3.3,2.6,6);lg.rotation.x=Math.PI/2;lg.position.set(0,3.5,2.6);cyl(h,.025,.025,1.6,0xe6d8a0,0,4.6,2.2,4);
    for(const x of[-4,4])for(const z of[3.4,-3.4]){const ln=new THREE.Mesh(new THREE.SphereGeometry(.34,8,6),MT(0xd9604a,{emissive:0x8a2a1a}));ln.scale.y=1.3;ln.position.set(x*1.12,6.2,z*1.05);h.add(ln);gl(h,0xff9a6a,3,x*1.12,6.2,z*1.05,.85)}
    for(const x of[-3.4,3.4])for(const z of[10.4,14.5])tourou(h,()=>0,x,z,1.15).position.y=-.1;
    for(let i=0;i<5;i++)bx(h,2.6,.12,1.6,stn,0,-.3,10+i*2.1);torii(h,0,-.4,17.5,1.1,0xc23f33);
    const pg=pagoda(h,0,1.5,-3.5);pg.position.set(side>0?-11.5:11.5,1.5,-2.5);pg.scale.setScalar(1.1);
    if(camino()){
      /* camino de piedras y faroles hasta la cabaña de la colina; al inicio, su maqueta */
      const x0=side*(hwv+33),pz=z=>Math.sin(z*.0)*0;
      for(let i=0;i<18;i++){const t=i/17,x=x0+side*t*62,z=Math.sin(t*3.4)*9*t-1.5*(1-t);const st=cyl(g,.95,1.05,.2,0xaaa69d,x,gy(x,z)+.12,z,8);
        if(i%3===1)tourou(g,gy,x,z+(i%2?2.4:-2.4),.8)}
      const mx=side*(hwv+30.5),my=gy(mx,0);bx(g,3.6,.9,3.6,0x9d9c9a,mx,my+.35,0);bx(g,3.2,.2,3.2,0xc2bfb8,mx,my+.9,0);
      const mq=new THREE.Group();mq.scale.setScalar(.3);mq.position.set(mx,my+1+(-8.5*.3),0);mq.rotation.y=-side*Math.PI/2;g.add(mq);farCabin(mq,k+500,false);
      gl(g,0xffc77a,6,mx,my+2.4,0,.8);
      const xe=side*(hwv+96),ze=Math.sin(3.4)*9,hc=new THREE.Group();hc.position.set(xe,gy(xe,ze)-1,ze);hc.rotation.y=-side*Math.PI/2*0;g.add(hc);hc.scale.setScalar(2.6);farCabin(hc,k+700)}}
  else if(type===6){
    const lx=side*(hwv+3.6),y=gy(lx,0),h=new THREE.Group();h.position.set(lx,y,0);g.add(h);signs(g,gy,hwv,'滝',false,'#3f7a8a');
    const rc=(c)=>MT(c);for(let i=0;i<22;i++){const rr=3+hash(k,i)*3.5,rx=side*(7.8+hash(k,i+5)*9),ry=hash(k,i+9)*15+(rx*side<8?3:0),rz=(hash(k,i+13)-.5)*17;const r=new THREE.Mesh(new THREE.IcosahedronGeometry(rr,1),rc(i%3?0x7a8a7e:0x6c8f78));r.position.set(rx,ry,rz);r.scale.y=1.2;h.add(r);
      const mo=new THREE.Mesh(new THREE.IcosahedronGeometry(rr*.75,1),rc(0x7fb36a));mo.position.set(rx,ry+rr*.65,rz);mo.scale.set(1.05,.45,1.05);h.add(mo)}
    for(let i=0;i<10;i++){const rr=1+hash(k,i+60)*1.2,r=new THREE.Mesh(new THREE.IcosahedronGeometry(rr,0),rc(0x7a8a7e));r.position.set(-side*(.5+hash(k,i+70)*3),rr*.4,(hash(k,i+80)-.5)*12);h.add(r)}
    /* caída escalonada en tres repisas de roca, con estratos, helechos y una soga sagrada */
    [[19,13.4,-.2,3.6],[13.4,7,-1.5,5.6],[7,0,-2.9,7.2]].forEach(([ya,yb,xo,wd],i)=>{
      const f=new THREE.Mesh(new THREE.PlaneGeometry(wd,ya-yb,1,1),fallMat);f.position.set(-side*(.5+i*1.35),(ya+yb)/2,0);f.rotation.y=Math.PI/2;h.add(f);
      const lg=bx(h,2.6,.9,wd+1.6,i%2?0x7a8a7e:0x6c8f78,-side*(.5+i*1.35-1.1),yb-.2,0);lg.scale.y=1;
      const mo=bx(h,2.4,.22,wd+1.2,0x7fb36a,-side*(.5+i*1.35-1.1),yb+.32,0)});
    for(let i=0;i<7;i++){const f=new THREE.Mesh(new THREE.ConeGeometry(.28,1.1+hash(k,i+120)*.8,4),MT(i%2?0x6fa86a:0x8cc27a));f.position.set(side*(5.5+hash(k,i+130)*7),3+hash(k,i+140)*12,(hash(k,i+150)-.5)*14);f.rotation.z=(hash(k,i)-.5)*.8;h.add(f)}
    {const br=new THREE.Mesh(new THREE.IcosahedronGeometry(2.2,1),MT(0x77857a));br.position.set(-side*7.2,1.4,3.6);br.scale.y=1.15;h.add(br);
     const rp=new THREE.Mesh(new THREE.TorusGeometry(2.3,.1,5,16),MT(0xe6d8a0));rp.position.set(-side*7.2,1.9,3.6);rp.rotation.x=Math.PI/2;h.add(rp);
     for(let i=0;i<6;i++){const sh=new THREE.Mesh(new THREE.PlaneGeometry(.34,.8),new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xffffff,side:THREE.DoubleSide}));const an=i/6*6.283;sh.position.set(-side*7.2+Math.cos(an)*2.3,1.45,3.6+Math.sin(an)*2.3);h.add(sh)}}
    for(let i=0;i<5;i++){const st=cyl(h,.55+hash(k,i+160)*.25,.6,.22,0x9d9c9a,-side*(2+i*1.7),.12,-3.4+i*.4,8)}
    for(let i=0;i<4;i++){const ft=spr(0xffffff,4);ft.material.blending=THREE.NormalBlending;ft.material.opacity=.55;ft.position.set(-side*(3+i*1.3),.5,(hash(k,i+170)-.5)*6);h.add(ft)}
    const fw2=new THREE.Mesh(new THREE.PlaneGeometry(3,14,1,1),fallMat);fw2.position.set(-side*.7,7,-5.6);fw2.rotation.y=Math.PI/2;fw2.rotation.z=.04;h.add(fw2);
    const pool=new THREE.Mesh(new THREE.CircleGeometry(6.5,24).rotateX(-Math.PI/2),new THREE.MeshBasicMaterial({color:0xcfeef2,transparent:true,opacity:.6,depthWrite:false}));pool.position.set(-side*3.6,.1,0);h.add(pool);
    const st=new THREE.Mesh(new THREE.PlaneGeometry(3.4,4.6).rotateX(-Math.PI/2),fallMat);st.rotation.y=side>0?Math.PI/2:-Math.PI/2;st.position.set(-side*3.4,.12,0);h.add(st);
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
    bx(h,6.1,.14,5.1,0x4b3b3f,0,3.95,-.3);const r1=new THREE.Mesh(new THREE.ConeGeometry(4.9,1.5,4),MT(0x5b4a4f));r1.rotation.y=Math.PI/4;r1.position.y=4.8;r1.scale.z=.88;h.add(r1);
    const r2=new THREE.Mesh(new THREE.ConeGeometry(3.3,1.3,4),MT(0x66545a));r2.rotation.y=Math.PI/4;r2.position.y=5.9;r2.scale.z=.8;h.add(r2);cyl(h,.05,.12,.9,0xd9a85a,0,6.8,0,5);
    /* noren, entrada con luz cálida y farolillos */
    for(const x of[-.55,.55]){const nr=new THREE.Mesh(new THREE.PlaneGeometry(1,1.4),new THREE.MeshToonMaterial({gradientMap:toonGrad,map:kanjiTex('茶','#2f3f6b','#ffffff',128,160),side:THREE.DoubleSide}));nr.position.set(x,2.9,1.93);h.add(nr)}
    bx(h,1.2,1.1,.1,0xffe0a0,0,2.7,1.8).material=new THREE.MeshBasicMaterial({color:0xffe0a0});gl(h,0xffc77a,4,0,2.7,2.3,.9);
    for(const x of[-2.4,2.4]){const ln=new THREE.Mesh(new THREE.SphereGeometry(.3,8,6),MT(0xd9604a,{emissive:0x7a2a1a}));ln.scale.y=1.3;ln.position.set(x,3.3,2.6);h.add(ln);gl(h,0xff9a6a,2.6,x,3.3,2.6,.8)}
    /* sombrilla roja con banco, bonsái y arbustos de té */
    cyl(h,.05,.05,2.6,wood,3.9,2.2,4.2,5);const um=new THREE.Mesh(new THREE.ConeGeometry(1.7,.7,12),MT(0xc23f33));um.position.set(3.9,3.6,4.2);h.add(um);bx(h,1.8,.15,.6,wood,3.9,1.5,4.2);bx(h,1.8,.05,.62,0xc23f33,3.9,1.6,4.2);
    cyl(h,.1,.14,.8,pw,-4.4,.9,2.4,5);for(const [y,r] of[[1.5,.7],[1.9,.5]]){const bn=new THREE.Mesh(new THREE.IcosahedronGeometry(r,1),MT(0x4f7254));bn.position.set(-4.4,y,2.4);bn.scale.y=.6;h.add(bn)}
    for(let i=0;i<7;i++){const t=new THREE.Mesh(new THREE.IcosahedronGeometry(.7,1),MT(i%2?0x6fa86a:0x5f9a62));t.position.set(-3.2+i*1.1,.7,-3.9);t.scale.set(1.2,.8,1);h.add(t)}
    for(let i=0;i<6;i++)cyl(h,.5,.55,.14,0xaaa69d,-.6+Math.sin(i*1.1)*.6,.1,6.2+i*1.25,7);
    for(const sd2 of[-1,1]){const t=tourou(g,gy,lx+sd2*7.5,5,1);t.position.y=gy(lx+sd2*7.5,5)}
    /* mirador hacia el valle: terraza elevada con banco y, a lo lejos, la cabaña del acantilado */
    {const mx=side*10.5,mh=new THREE.Group();mh.position.set(mx,0,-1);h.add(mh);
     bx(mh,5.4,.3,5.4,wood,0,1.15,0,pl);for(const x of[-2.4,2.4])for(const z of[-2.4,2.4])cyl(mh,.13,.16,1.3,pw,x,.5,z,5);
     bx(mh,5.4,.12,.12,0xb5473a,0,1.95,2.6);bx(mh,5.4,.12,.12,0xb5473a,0,1.95,-2.6);bx(mh,.12,.12,5.4,0xb5473a,-side*2.6,1.95,0);bx(mh,.12,.12,5.4,0xb5473a,side*2.6,1.95,0);
     bx(mh,2.2,.14,.7,wood,0,1.75,-1.6);bx(mh,2.2,.5,.1,wood,0,2.1,-1.95);cyl(mh,.08,.08,.5,pw,-.9,1.5,-1.6,4);cyl(mh,.08,.08,.5,pw,.9,1.5,-1.6,4);
     const tl=tourou(mh,gy,2,2,.9);tl.position.set(side*1.8,1.3,1.6);
     for(let i=0;i<3;i++)cyl(h,.5,.55,.14,0xaaa69d,side*(5+i*1.15),.1,-.4,7);
     /* cabaña lejana sobre un risco */
     const fx=side*66,fz=-27,c=new THREE.Group();c.position.set(fx,gy(fx,fz)-1,fz);h.add(c);c.scale.setScalar(2.9);
     farCabin(c,k)}
    }
  else if(type===8){signs(g,gy,hwv,'竹林',false,'#4f8a5a');
    for(const sd of[-1,1])for(let i=0;i<6;i++)tourou(g,gy,sd*(hwv+3+hash(k,i)*2.5),-45+i*18+hash(k,i+3)*4);
    for(let i=0;i<12;i++){const sd=i%2?1:-1,lx=sd*(hwv+4+hash(k,i)*12),lz=(hash(k,i+20)-.5)*110;const m2=new THREE.Mesh(new THREE.PlaneGeometry(3.6,22),new THREE.MeshBasicMaterial({map:glowTex,color:0xfff0b0,transparent:true,opacity:.14,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide}));m2.position.set(lx,gy(lx,lz)+10,lz);m2.rotation.set(0,hash(k,i+9)*3,sd*.25);g.add(m2)}}
  else if(type===10)g.userData.job=castleJob(g,k,{gy,hwv,side,s,a})
  else{for(let i=0;i<46;i++){const lx=(hash(k,i)-.5)*hwv*1.5,lz=(hash(k,i+40)-.5)*34;
      const p=new THREE.Mesh(new THREE.CircleGeometry(.8+hash(k,i+7)*.5,10).rotateX(-Math.PI/2),MT(0x7fbf8a,{side:THREE.DoubleSide}));p.position.set(lx,.05,lz);g.add(p);
      if(i%4===0){const f=new THREE.Mesh(new THREE.IcosahedronGeometry(.34,0),MT(0xf5a4bd,{emissive:0x8a3a50}));f.scale.y=1.2;f.position.set(lx,.3,lz);g.add(f);gl(g,0xff9fc0,1.8,lx,.5,lz,.35)}}}
  return g;
}
