/* Estatua del dragón anunciador: un dragón de jade y oro enroscado sobre un pedestal de piedra, a la orilla del río, unos 200–360 m antes del castillo.
   Una sola malla fusionada (+ ojos/boca emisivos y unos pocos brillos), así que casi no cuesta llamadas de dibujo. */
import * as THREE from 'three';
import {toonGrad} from '../style.js';
import {hash} from './util.js';
import {H,cx,hw,tanAng,dragonS} from './world.js';
import {Batch,tint} from './batch.js';
import {gl} from './lm-parts.js';
import {C,seg,tourouB} from './castle.js';
const JADE=0xb98a2e,JADE2=0xdcb04a,GOLD=0xffd774,RED=0xc23f33,IVORY=0xf3eee0;
/* el dragón respira: el cuello y la cabeza se mecen despacio (más cuanto más alto), con las patas y la cola quietas */
export const dragonU={value:0};
const alive=m=>{m.onBeforeCompile=sh=>{sh.uniforms.uDT=dragonU;sh.vertexShader='uniform float uDT;\n'+sh.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
 float dk=smoothstep(1.2,6.5,position.y);transformed.x+=sin(uDT*.7+position.z*.35)*.4*dk;transformed.y+=sin(uDT*.9+position.z*.5)*.15*dk;transformed.z+=sin(uDT*.5)*.22*dk;`)};m.customProgramCacheKey=()=>'drg';return m};
export function buildDragon(k){
  const s=dragonS(k),a=tanAng(s),side=hash(k,9)>.5?1:-1,hwv=hw(s),g=new THREE.Group();
  g.position.set(cx(s),0,-s);g.rotation.y=-a;
  const gyf=(lx,lz)=>{const th=-a;return H(cx(s)+lx*Math.cos(th)+lz*Math.sin(th),s-(-lx*Math.sin(th)+lz*Math.cos(th)))};
  const lx=side*(hwv+5),gy0=Math.max(gyf(lx,0)-.5,-.15),h=new THREE.Group();h.position.set(lx,gy0,0);h.scale.setScalar(1.4);g.add(h);
  const S=new Batch(),G=new Batch(),E=new Batch(),CL=new Batch(),X={S,E,h};
  /* sale del agua: rocas mojadas en la orilla en vez de pedestal */
  for(const [rx,rz,rr,ry] of[[-4.2,-7.6,1.5,.5],[4.6,-6.2,1.2,.45],[-5.2,-1.2,1.0,.4],[5.0,2.2,1.3,.5],[-3.6,4.8,.9,.35],[1.8,-9.6,1.4,.6]])S.ball(rr,tint(C.stone,.92),rx,ry-.5,rz,1,.62,1,0);
  /* cuerpo: curva serpenteante, anillos de sección redonda */
  const BASE=.6,cv=new THREE.CatmullRomCurve3([[0,.4,-9],[-3.2,1.6,-6.8],[-.8,3.4,-5.4],[3.1,5.4,-4],[1.4,8,-3.1],[-2.2,10.2,-1.6],[-.6,12.2,.4],[0,13.0,2.4],[0,12.5,4.2]].map(q=>[q[0]*1.35,q[1]*.42+.2,q[2]*1.15]).map(p=>new THREE.Vector3(p[0],p[1]+BASE-.4,p[2])));
  const N=64,pts=cv.getPoints(N),rings=[],up=new THREE.Vector3(0,1,0),rad=t=>.2+.98*Math.pow(Math.sin(Math.min(1,t*1.5)*Math.PI/2),.7)*(1-.32*t);
  /* sección: 10 lados, algo más alta que ancha; lomo oscuro, flancos con escamas en damero suave y vientre de placas claras */
  const NR=10,frames=[];
  for(let j=0;j<=N;j++){const t=j/N,p=pts[j],tg=cv.getTangent(t),u=new THREE.Vector3().crossVectors(up,tg);if(u.lengthSq()<1e-4)u.set(1,0,0);u.normalize();const v=new THREE.Vector3().crossVectors(tg,u).normalize(),r=rad(t)*(1+.05*Math.sin(j*1.3)),ring=[];
    frames.push({p,tg,u,v,r});
    for(let i=0;i<NR;i++){const q=i/NR*6.2832,c=Math.cos(q),sn=Math.sin(q),ry=r*(sn>0?1.12:1.0);ring.push([p.x+u.x*c*r+v.x*sn*ry,p.y+u.y*c*r+v.y*sn*ry,p.z+u.z*c*r+v.z*sn*ry])}rings.push(ring)}
  S.loft(rings,(i,j)=>{const sn=Math.sin((i+.5)/NR*6.2832);return sn<-.55?tint(IVORY,.86+.12*(j%2)):sn>.6?tint(JADE,.9+.06*((i+j)%2)):tint(JADE2,.93+.1*((i+j)%2))});
  /* cresta dorsal: aletas en llama, inclinadas hacia la cola, de alturas alternas (antes eran pinchos rectos) */
  for(let j=2;j<N-2;j++){const f=frames[j],sc=.3+f.r*.85,hg=(j%3===0?1.15:.7)*sc,w=.42*sc,b=[f.p.x+f.v.x*f.r*1.08,f.p.y+f.v.y*f.r*1.08,f.p.z+f.v.z*f.r*1.08];
    CL.tri([b[0]-f.tg.x*w,b[1]-f.tg.y*w,b[2]-f.tg.z*w],[b[0]+f.tg.x*w,b[1]+f.tg.y*w,b[2]+f.tg.z*w],[b[0]+f.v.x*hg-f.tg.x*w*1.6,b[1]+f.v.y*hg-f.tg.y*w*1.6,b[2]+f.v.z*hg-f.tg.z*w*1.6],j%3===0?GOLD:tint(RED,.95+.1*(j%2)))}
  /* extremidad redonda entre dos puntos (cilindro orientado) */
  const limb=(bt,a,b,r0,r1,col)=>{const dx=b[0]-a[0],dy=b[1]-a[1],dz=b[2]-a[2],L=Math.hypot(dx,dy,dz);bt.at(a[0],a[1],a[2],Math.atan2(dx,dz),t=>t.cyl(r0,r1,L,6,col,0,0,0),Math.acos(Math.max(-1,Math.min(1,dy/L))))};
  /* patas: hombro, muslo, antebrazo y cuatro garras abiertas sobre la roca */
  for(const [jn,sd] of[[22,1],[22,-1],[40,1],[40,-1]]){const p=pts[jn],r=rad(jn/N);
    const sh=[p.x+sd*r*.75,p.y-r*.35,p.z],kn=[p.x+sd*(r+.75),p.y-r*.2+.25,p.z+.25],ft=[p.x+sd*(r+1.5),Math.max(BASE+.12,p.y-r*.8-2.2),p.z+.75];
    S.ball(.52,JADE2,sh[0],sh[1],sh[2],1,1,1,1);limb(S,sh,kn,.4,.3,JADE);S.ball(.32,JADE,kn[0],kn[1],kn[2],1,1,1,1);limb(S,kn,ft,.28,.2,JADE2);S.ball(.3,JADE,ft[0],ft[1],ft[2],1.2,.6,1.3,1);
    for(let c=-1.5;c<=1.5;c++)limb(S,[ft[0]+sd*.1,ft[1],ft[2]+.1],[ft[0]+sd*(.2+Math.abs(c)*.05)+c*.2,ft[1]-.12,ft[2]+.62-Math.abs(c)*.1],.085,0,IVORY)}
  /* perla de fuego entre las garras de la primera pata */
  {const p=pts[40],r=rad(40/N);E.ball(.55,0xffc86a,p.x+(r+1.7),Math.max(BASE+.9,p.y-r-1.5)+.6,p.z+.6,1,1,1,1);gl(h,0xffd592,6,p.x+r+1.7,Math.max(BASE+.9,p.y-r-1.5)+.6,p.z+.6,.9)}
  /* cola: penacho de llamas de tela */
  {const f=frames[0];for(let i=0;i<7;i++){const sw=(i-3)*.3,L=1.6+.7*Math.cos(sw*1.6);CL.at(f.p.x,f.p.y,f.p.z,Math.atan2(-f.tg.x,-f.tg.z)+sw,b=>b.quad([-.2,0,0],[.2,0,0],[.04,.25+Math.abs(sw)*.5,L],[-.04,.25+Math.abs(sw)*.5,L],i%2?RED:GOLD),0,0,sw*.6)}}
  /* cabeza (marco local: mira a +z, hacia quien llega por el río): cráneo, hocico largo, cejas, mandíbula entreabierta, astas y bigotes */
  const hp=pts[N];
  S.at(hp.x,hp.y,hp.z,0,b=>{
    b.ball(1.1,JADE2,0,0,.2,1,.9,1.15,1).ball(.72,JADE2,0,-.14,1.5,.92,.56,1.75,1).ball(.34,JADE,0,-.02,2.78,1.35,.8,.95,1);
    b.ball(.5,tint(JADE2,1.06),0,.34,.1,1.5,.5,1.2,1);                                                     // frente
    b.at(0,-.62,.45,0,t=>{t.ball(.6,tint(JADE,.9),0,0,.95,.9,.34,1.5,1);for(const sx of[-1,1])for(let i=0;i<3;i++)t.cyl(.07,0,.3,4,IVORY,sx*.36,.08,1.1+i*.42)},.3);
    for(const sx of[-1,1]){
      b.ball(.36,GOLD,sx*.52,.66,.75,1.1,.34,1.5,1);b.ball(.09,C.black,sx*.2,.1,3.02,1,1,1,0);
      for(let i=0;i<3;i++)b.at(sx*.42,-.42,1.5+i*.45,0,t=>t.cyl(i?.07:.1,0,i?.34:.5,4,IVORY,0,0,0),Math.PI);
      /* astas doradas con una punta que se bifurca */
      b.at(sx*.5,.8,-.1,0,t=>t.cyl(.22,.1,1.7,6,GOLD,0,0,0),-1.0,sx*.22);b.at(sx*.62,1.72,-1.5,0,t=>t.cyl(.1,0,1.2,5,GOLD,0,0,0),-1.38,sx*.3);b.at(sx*.56,1.28,-.8,0,t=>t.cyl(.09,0,.9,5,GOLD,0,0,0),-.25,sx*.35);
      /* bigotes largos en tres tramos que caen en curva */
      limb(S,[sx*.42,-.2,2.55],[sx*1.5,0,3.05],.075,.06,IVORY);limb(S,[sx*1.5,0,3.05],[sx*2.5,-.5,2.7],.06,.045,IVORY);limb(S,[sx*2.5,-.5,2.7],[sx*3.1,-1.5,1.9],.045,.01,IVORY);
      b.ball(.1,C.black,sx*.8,.32,1.16,.5,1.1,.6,1)}
    E.box(.7,.12,1.25,0xff7a2a,0,-.56,1.45);
    for(const sx of[-1,1]){E.ball(.27,0xffe9a0,sx*.62,.3,1.02,.9,1.05,.9,1)}});
  /* aletas de las mejillas, barba y melena: tiras de tela que acaban en punta */
  for(const sx of[-1,1])for(let i=0;i<3;i++)CL.at(hp.x+sx*.9,hp.y+.1-i*.25,hp.z+.1,0,b=>b.quad([0,.22,0],[0,-.22,0],[sx*(1.3-i*.2),-.1-i*.2,-1.3],[sx*(1.3-i*.2),.05-i*.2,-1.3],i%2?GOLD:C.red),0,0,0);
  for(let i=0;i<4;i++){const sw=(i-1.5)*.3;CL.at(hp.x,hp.y-.95,hp.z+1+i*.05,0,b=>b.quad([-.16,0,0],[.16,0,0],[.03+sw*.4,-1.2,-.5],[-.03+sw*.4,-1.2,-.5],i%2?GOLD:IVORY),0,0,sw)}
  for(let i=0;i<11;i++){const sw=(i-5)*.2;CL.at(hp.x,hp.y+.45,hp.z-.6,0,b=>b.quad([-.3,0,0],[.3,0,0],[.06+sw*.4,-1.1-Math.abs(sw)*.3,-3.3-(i%3)*.5],[-.06+sw*.4,-1.1-Math.abs(sw)*.3,-3.3-(i%3)*.5],i%2?C.red:GOLD),0,0,sw)}
  gl(h,0xffa24a,5.5,hp.x,hp.y-.5,hp.z+1.7,.85);gl(h,0xffe27a,2.4,hp.x-.6,hp.y+.3,hp.z+1.1,.8);gl(h,0xffe27a,2.4,hp.x+.6,hp.y+.3,hp.z+1.1,.8);
  /* faroles-estandarte a los lados del camino */
  const T=o=>new THREE.MeshToonMaterial(Object.assign({gradientMap:toonGrad,color:0xffffff,vertexColors:true,fog:true},o||{}));
  const mS=T(),mG=T({emissive:0x2a1c00}),mC=T({side:THREE.DoubleSide}),mE=new THREE.MeshBasicMaterial({color:0xffffff,vertexColors:true,fog:true});
  [mS,mG,mC,mE].forEach(alive);
  h.add(S.mesh(mS),G.mesh(mG),CL.mesh(mC),E.mesh(mE));
  g.userData.dragon={k,s,mouth:new THREE.Vector3(lx,gy0+(hp.y-.5)*1.5,hp.z*1.5+2.5),roared:false};
  g.updateMatrixWorld(true);return g}
