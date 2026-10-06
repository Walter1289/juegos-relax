/* Estatua del dragón anunciador: un dragón de jade y oro enroscado sobre un pedestal de piedra, a la orilla del río, unos 200–360 m antes del castillo.
   Una sola malla fusionada (+ ojos/boca emisivos y unos pocos brillos), así que casi no cuesta llamadas de dibujo. */
import * as THREE from 'three';
import {toonGrad} from '../style.js';
import {hash} from './util.js';
import {H,cx,hw,tanAng,dragonS} from './world.js';
import {Batch,tint} from './batch.js';
import {gl} from './lm-parts.js';
import {C,seg,tourouB} from './castle.js';
const JADE=0x2f9e7a,JADE2=0x3fb98f,GOLD=0xe4b852,RED=0xc23f33,IVORY=0xf3eee0;
export function buildDragon(k){
  const s=dragonS(k),a=tanAng(s),side=hash(k,9)>.5?1:-1,hwv=hw(s),g=new THREE.Group();
  g.position.set(cx(s),0,-s);g.rotation.y=-a;
  const gyf=(lx,lz)=>{const th=-a;return H(cx(s)+lx*Math.cos(th)+lz*Math.sin(th),s-(-lx*Math.sin(th)+lz*Math.cos(th)))};
  const lx=side*(hwv+14),gy0=Math.max(gyf(lx,0),.4),h=new THREE.Group();h.position.set(lx,gy0,0);h.scale.setScalar(1.5);g.add(h);
  const S=new Batch(),G=new Batch(),E=new Batch(),CL=new Batch(),X={S,E,h};
  /* pedestal escalonado de piedra con farolillos */
  S.boxB(11,1.1,11,C.stone,0,-1,0).boxB(9,1.2,9,tint(C.stone,1.08),0,.1,0).boxB(7,1.3,7,tint(C.stone,.95),0,1.3,0).boxB(6.2,.3,6.2,C.gravel,0,2.6,0);
  G.boxB(7.4,.2,7.4,GOLD,0,2.55,0,false);
  for(const [px,pz] of[[-4.6,-4.6],[4.6,-4.6],[-4.6,4.6],[4.6,4.6]])tourouB(X,px,.2,pz,1);
  for(const sx of[-1,1])for(let i=0;i<4;i++)S.boxB(.5,.5,.5,tint(C.stone,.9),sx*5.7,.1+1.0*0,-3.5+i*2.3,false);
  /* cuerpo: curva serpenteante, anillos de sección redonda */
  const BASE=2.9,cv=new THREE.CatmullRomCurve3([[0,.4,-9],[-3.2,1.6,-6.8],[-.8,3.4,-5.4],[3.1,5.4,-4],[1.4,8,-3.1],[-2.2,10.2,-1.6],[-.6,12.2,.4],[0,13.0,2.4],[0,12.5,4.2]].map(p=>new THREE.Vector3(p[0],p[1]+BASE-.4,p[2])));
  const N=64,pts=cv.getPoints(N),rings=[],up=new THREE.Vector3(0,1,0),rad=t=>.2+.98*Math.pow(Math.sin(Math.min(1,t*1.5)*Math.PI/2),.7)*(1-.32*t);
  for(let j=0;j<=N;j++){const t=j/N,p=pts[j],tg=cv.getTangent(t),u=new THREE.Vector3().crossVectors(up,tg);if(u.lengthSq()<1e-4)u.set(1,0,0);u.normalize();const v=new THREE.Vector3().crossVectors(tg,u).normalize(),r=rad(t),ring=[];
    for(let i=0;i<8;i++){const q=i/8*6.2832,c=Math.cos(q),sn=Math.sin(q);ring.push([p.x+(u.x*c+v.x*sn)*r,p.y+(u.y*c+v.y*sn)*r,p.z+(u.z*c+v.z*sn)*r])}rings.push(ring)}
  S.loft(rings,(i,j)=>(i>=5&&i<=7)?tint(GOLD,.95+.1*(j%2)):tint(j%2?JADE2:JADE,.92+.12*((j>>1)%2)));
  /* espinas dorsales (una sí, otra no) y garras */
  for(let j=3;j<N-4;j+=2){const t=j/N,p=pts[j],tg=cv.getTangent(t),r=rad(t),sc=.35+r*.9;
    S.at(p.x,p.y+r*.95,p.z,Math.atan2(tg.x,tg.z),b=>{b.cyl(.2*sc,0,1.5*sc,4,j%4?RED:GOLD,0,0,0)},-Math.atan2(tg.y,Math.hypot(tg.x,tg.z))*.6)}
  for(const [jn,sd] of[[22,1],[22,-1],[40,1],[40,-1]]){const p=pts[jn],r=rad(jn/N);
    const kn=[p.x+sd*(r+.6),p.y-r*.8,p.z+.2],ft=[p.x+sd*(r+1.6),Math.max(BASE,p.y-r*.8-2.2),p.z+.6];
    seg(S,[p.x+sd*r*.7,p.y-r*.4,p.z],kn,.38,JADE);seg(S,kn,ft,.3,JADE2);
    for(let c=-1;c<=1;c++)S.at(ft[0]+sd*.15,ft[1],ft[2]+c*.22,0,b=>b.cyl(.09,0,.55,4,IVORY,0,-.1,0),0,0,sd*-1.1)}
  /* perla de fuego entre las garras de la primera pata */
  {const p=pts[40],r=rad(40/N);E.ball(.55,0xffc86a,p.x+(r+1.7),Math.max(BASE+.9,p.y-r-1.5)+.6,p.z+.6,1,1,1,1);gl(h,0xffd592,6,p.x+r+1.7,Math.max(BASE+.9,p.y-r-1.5)+.6,p.z+.6,.9)}
  /* cola con penacho */
  {const p=pts[0];for(let i=0;i<5;i++)S.at(p.x,p.y,p.z-.2,(i-2)*.28,b=>b.cyl(.3,0,1.8,4,i%2?RED:GOLD,0,0,0),-1.0,0,0)}
  /* cabeza (marco local: mira a +z, hacia quien llega por el río) */
  const hp=pts[N],ht=cv.getTangent(1);
  S.at(hp.x,hp.y,hp.z,0,b=>{
    b.ball(1.15,JADE2,0,0,.3,1,.92,1.25,1).boxB(1.15,.62,1.9,JADE,0,-.5,1.1).box(1.3,.3,1.2,GOLD,0,.45,.9);
    b.at(0,-.88,1.05,0,t=>t.box(1.0,.32,1.8,tint(JADE,.9),0,0,.5),.38);
    for(const sx of[-1,1]){for(let i=0;i<3;i++){b.cyl(.09,0,.45,4,IVORY,sx*.44,-.45,1.4+i*.5);b.at(sx*.44,-.8,1.4+i*.5,0,t=>t.cyl(.08,0,.38,4,IVORY,0,0,0),Math.PI)}
      b.ball(.16,C.black,sx*.28,.05,2.12,1,1,1,0);
      /* cuernos de oro curvados hacia atrás */
      b.at(sx*.5,.85,-.1,0,t=>{t.cyl(.24,.06,1.5,5,GOLD,0,0,0)},-.95,0,sx*.2);b.at(sx*.62,1.65,-1.1,0,t=>{t.cyl(.07,0,1.1,5,GOLD,0,0,0)},-1.45,0,sx*.25);
      /* bigotes largos */
      for(let i=0;i<2;i++){const m=[sx*.5,-.35,1.9];seg(S,m,[sx*(1.5+i*.5),-.5-i*.35,2.8],.06,IVORY);seg(S,[sx*(1.5+i*.5),-.5-i*.35,2.8],[sx*(2.6+i*.4),-1.6-i*.4,2.0],.05,IVORY)}}
    E.box(.8,.16,1.45,0xff7a2a,0,-.62,1.5);
    for(const sx of[-1,1]){E.ball(.2,0xffe27a,sx*.58,.32,.95,1,1.1,.8,1)}});
  /* melena: tiras de tela roja y dorada detrás de la cabeza */
  for(let i=0;i<7;i++){const sw=(i-3)*.28;CL.at(hp.x,hp.y+.4,hp.z-.6,0,b=>b.quad([-.35,0,0],[.35,0,0],[.5+sw*.3,-1.2,-3.4-i*.1],[-.5+sw*.3,-1.2,-3.4-i*.1],i%2?C.red:GOLD),0,0,sw)}
  gl(h,0xffa24a,5.5,hp.x,hp.y-.5,hp.z+1.7,.85);gl(h,0xffe27a,2.4,hp.x-.6,hp.y+.3,hp.z+1.1,.8);gl(h,0xffe27a,2.4,hp.x+.6,hp.y+.3,hp.z+1.1,.8);
  /* faroles-estandarte a los lados del camino */
  const T=o=>new THREE.MeshToonMaterial(Object.assign({gradientMap:toonGrad,color:0xffffff,vertexColors:true,fog:true},o||{}));
  const mS=T(),mG=T({emissive:0x2a1c00}),mC=T({side:THREE.DoubleSide}),mE=new THREE.MeshBasicMaterial({color:0xffffff,vertexColors:true,fog:true});
  h.add(S.mesh(mS),G.mesh(mG),CL.mesh(mC),E.mesh(mE));
  g.userData.dragon={k,s,mouth:new THREE.Vector3(lx,gy0+(hp.y-.5)*1.5,hp.z*1.5+2.5),roared:false};
  g.updateMatrixWorld(true);return g}
