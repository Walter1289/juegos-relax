/* Castillo de la Garza Blanca (白鷺城, tipo 10): castillo procedural inspirado en Himeji-jō.
   Todo se acumula en 5 «Batch» con color por vértice (yeso, sólido, oro, emisivo, tela) => ~6 llamadas de dibujo en total.
   Marco local del castillo (grupo h): origen en el centro de la meseta, +z hacia el río, x a lo largo de la orilla, y absoluta (agua = 0). */
import * as THREE from 'three';
import {toonGrad} from '../style.js';
import {hash,sm} from './util.js';
import {CAS,H,cx,hw} from './world.js';
import {Batch,rgb,tint} from './batch.js';
import {gl} from './lm-parts.js';
import {SAKURA} from '../season.js';
import {buildFestival} from './festival.js';
import {scene} from './core.js';
import {env} from './env.js';
import {P as PL,S} from './state.js';
import {A} from '../audio-rio.js';
export const C={plaster:0xf6f3ec,plasterS:0xe6e1d5,tile:0x57616f,tile2:0x66717f,ridge:0xeeece6,black:0x2a2c33,woodD:0x3a2a24,woodM:0x6d4a3a,red:0xb5382c,redD:0x8d2a23,gold:0xe4b852,
  stone:0x9e9d99,stoneD:0x5d5c5a,gravel:0xdad3c0,win:0xffd890,pink:SAKURA.c,pink2:SAKURA.c2,pink3:0xf8c9d6,trunk:0x6f4f43,purple:0x5a3d8c,cream:0xfff1d6,orange:0xf0933a,blue:0x2f5f9a,green:0x4f8f5f};
const {PH}=CAS;
const mulb=a=>()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
/* ---------- tejados ---------- */
/* a cuatro aguas cóncavo (yosemune) desde el alero (A,Bz) hasta el rectángulo superior (a2,b2); vuelo en las esquinas */
export function hipRoof(bt,x,y,z,A,Bz,a2,b2,rise,o={}){
  const N=o.n||5,fl=o.flare??.7,Mx=Math.max(4,Math.ceil(2*A/1.5)),Mz=Math.max(4,Math.ceil(2*Bz/1.5)),rings=[],tc=o.tile||C.tile,tc2=o.tile2||C.tile2;
  const corner=new Set([0,Mx,Mx+Mz,2*Mx+Mz]),Nn=2*Mx+2*Mz;
  for(let j=0;j<=N;j++){const t=j/N,ha=A+(a2-A)*t,hb=Bz+(b2-Bz)*t,yy=y+rise*Math.pow(t,1.55),r=[];
    const add=(px,pz)=>{const cf=Math.pow(Math.abs(px)/Math.max(ha,.01),6)*Math.pow(Math.abs(pz)/Math.max(hb,.01),6);r.push([x+px,yy+fl*Math.pow(1-t,2.2)*Math.min(1,cf*1.1),z+pz])};
    for(let i=0;i<Mx;i++)add(-ha+2*ha*i/Mx,-hb);for(let i=0;i<Mz;i++)add(ha,-hb+2*hb*i/Mz);for(let i=0;i<Mx;i++)add(ha-2*ha*i/Mx,hb);for(let i=0;i<Mz;i++)add(-ha,hb-2*hb*i/Mz);
    rings.push(r)}
  bt.orient([x,y-40,z]).loft(rings,(i,j)=>{const hip=corner.has(i)||corner.has((i+1)%Nn);return hip?C.ridge:(i%2?tc:tc2)});
  /* alero blanco (fascia) */
  const f=rings[0].map(p=>[p[0],p[1]-.55,p[2]]);bt.loft([rings[0],f],C.plaster);bt.free();return rings}
/* irimoya: faldón inferior a cuatro aguas + frontón superior (cumbrera a lo largo de x); devuelve la altura de la cumbrera */
export function irimoya(bt,x,y,z,A,Bz,a1,b1,rise1,gh,o={}){
  hipRoof(bt,x,y,z,A,Bz,a1,b1,rise1,o);const y1=y+rise1,ov=o.ov??.9,L=a1+ov,M=Math.max(4,Math.ceil(2*L/1.5)),NZ=5,tc=o.tile||C.tile,tc2=o.tile2||C.tile2;
  const prof=[];for(let k=0;k<=NZ;k++){const zz=-b1+2*b1*k/NZ,s=1-Math.abs(zz)/b1;prof.push([zz,gh*Math.pow(s,1.35)])}
  bt.orient([x,y1-40,z]);
  for(let k=0;k<NZ;k++)for(let i=0;i<M;i++){const xa=x-L+2*L*i/M,xb=x-L+2*L*(i+1)/M,pa=prof[k],pb=prof[k+1];
    bt.quad([xa,y1+pa[1]+.15,z+pa[0]],[xb,y1+pa[1]+.15,z+pa[0]],[xb,y1+pb[1]+.15,z+pb[0]],[xa,y1+pb[1]+.15,z+pb[0]],(i%2?tc:tc2))}
  /* frontones triangulares con tablón de madera */
  for(const sx of[-1,1]){const xx=x+sx*a1;bt.orient([x,y1,z]);for(let k=0;k<NZ;k++){const pa=prof[k],pb=prof[k+1];bt.quad([xx,y1,z+pa[0]],[xx,y1,z+pb[0]],[xx,y1+pb[1],z+pb[0]],[xx,y1+pa[1],z+pa[0]],C.plaster)}
    const xb=x+sx*(a1+ov);bt.orient([x,y1,z]);for(let k=0;k<NZ;k++){const pa=prof[k],pb=prof[k+1];bt.quad([xb,y1+pa[1]-.1,z+pa[0]],[xb,y1+pb[1]-.1,z+pb[0]],[xb,y1+pb[1]+.3,z+pb[0]],[xb,y1+pa[1]+.3,z+pa[0]],C.woodD)}
    bt.free();bt.box(.3,.9,.9,C.gold,xx+sx*.1,y1+gh*.38,z)}
  bt.free();bt.box(2*L,.5,.7,C.ridge,x,y1+gh+.35,z);for(const sx of[-1,1])bt.box(1.1,1.2,1.2,C.black,x+sx*L,y1+gh+.55,z);
  return y1+gh+.55}
/* tejado a dos aguas (corredores y muros) a lo largo de x; W = ancho con vuelo */
export function gableRoof(bt,x,y,z,len,W,rise,o={}){
  const M=Math.max(2,Math.ceil(len/1.7)),NZ=4,tc=o.tile||C.tile,tc2=o.tile2||C.tile2,prof=[];
  for(let k=0;k<=NZ;k++){const zz=-W/2+W*k/NZ,s=1-Math.abs(zz)/(W/2);prof.push([zz,rise*Math.pow(s,1.3)+(k===0||k===NZ?.18:0)])}
  bt.orient([x,y-30,z]);
  for(let k=0;k<NZ;k++)for(let i=0;i<M;i++){const xa=x-len/2+len*i/M,xb=x-len/2+len*(i+1)/M,pa=prof[k],pb=prof[k+1];
    bt.quad([xa,y+pa[1],z+pa[0]],[xb,y+pa[1],z+pa[0]],[xb,y+pb[1],z+pb[0]],[xa,y+pb[1],z+pb[0]],(k===NZ/2-.5||k===NZ/2+.5)&&0?C.ridge:(i%2?tc:tc2))}
  if(!o.noCap)for(const sx of[-1,1]){const xx=x+sx*len/2;for(let k=0;k<NZ;k++){const pa=prof[k],pb=prof[k+1];bt.quad([xx,y,z+pa[0]],[xx,y,z+pb[0]],[xx,y+pb[1],z+pb[0]],[xx,y+pa[1],z+pa[0]],C.plaster)}}
  bt.free();bt.box(len,.38,.7,C.ridge,x,y+rise+.2,z);
  const f=[[x-len/2,y-.5,z-W/2],[x+len/2,y-.5,z-W/2]];bt.quad([x-len/2,y,z-W/2],[x+len/2,y,z-W/2],f[1],f[0],C.plaster);bt.quad([x+len/2,y,z+W/2],[x-len/2,y,z+W/2],[x-len/2,y-.5,z+W/2],[x+len/2,y-.5,z+W/2],C.plaster)}
/* karahafu: frontón curvo en S (ogee) con alero de teja, mirando a +z local; w ancho, hh alto, d fondo; pitch = inclinación del tejado anfitrión */
export function karahafu(bt,w,hh,d,pitch){
  const n=16,pts=[];for(let i=0;i<=n;i++){const xx=-w/2+w*i/n,u=1-Math.abs(xx)/(w/2);pts.push([xx,hh*(.5-.5*Math.cos(Math.PI*Math.pow(u,.9)))])}
  bt.save().T(0,0,0,0,pitch);bt.orient([0,-3,-d/2]);
  for(let i=0;i<n;i++){const a=pts[i],b=pts[i+1],cl=i%2?C.tile:C.tile2;
    bt.quad([a[0],a[1]+.2,.95],[b[0],b[1]+.2,.95],[b[0],b[1]+.2,-d],[a[0],a[1]+.2,-d],cl);            // teja
    bt.quad([a[0],a[1]-.1,.75],[b[0],b[1]-.1,.75],[b[0],b[1]+.2,.95],[a[0],a[1]+.2,.95],C.plaster);   // canto blanco del alero
    bt.quad([a[0],-.7,.5],[b[0],-.7,.5],[b[0],b[1]-.1,.5],[a[0],a[1]-.1,.5],C.plaster);                // frontón de yeso
    bt.quad([a[0],a[1]-.55,.62],[b[0],b[1]-.55,.62],[b[0],b[1]+.0,.62],[a[0],a[1]+.0,.62],C.woodD);   // tablón de madera
    bt.quad([a[0],-.7,-d],[b[0],-.7,-d],[b[0],b[1]+.2,-d],[a[0],a[1]+.2,-d],C.plaster)}              // cierre trasero
  bt.box(.26,hh*.5,d,C.ridge,0,hh*.5+.3,-d/2+.45,false);bt.free();bt.ball(.5,C.gold,0,hh*.55,.75,1,1,.8,1);bt.restore()}
/* frontón triangular pequeño (chidori-hafu) sobre la pendiente, hacia +z */
function chidori(bt,w,hh,d,pitch){
  bt.save().T(0,0,0,0,pitch);bt.orient([0,-2,-d/2]);
  for(const s of[-1,1])bt.quad([0,hh+.2,.5],[0,hh+.2,-d],[s*(w/2+.45),-.1,-d],[s*(w/2+.45),-.1,.8],s>0?C.tile:C.tile2);
  bt.tri([-w/2-.2,-.4,.5],[w/2+.2,-.4,.5],[0,hh+.1,.5],C.plaster).tri([-w/2-.35,-.4,.58],[w/2+.35,-.4,.58],[0,hh+.35,.58],C.woodD).tri([-w/2,-.4,.62],[w/2,-.4,.62],[0,hh,.62],C.plaster);
  bt.free().ball(.3,C.gold,0,hh*.4,.7,1,1,.7,0);bt.restore()}
/* shachihoko: pez-tigre dorado; mira hacia +x local (hacia fuera del tejado) */
export function shachi(bt,sc=1){
  bt.save().T(0,0,0,0,0,0,sc);
  const sp=[];for(let i=0;i<=9;i++){const t=i/9;sp.push([-.4*Math.sin(t*2.4)*0+(-.1+t*.5-t*t*1.5)*1.0,.3+t*2.4-t*t*.2,0])}
  for(let i=0;i<=9;i++){const t=i/9,p=sp[i],r=.52*(1-t*.8)+.08;bt.ball(r,tint(C.gold,.88+.2*(i%2)),p[0],p[1],p[2],1,1.05,.9,1);
    if(i>1&&i<9)bt.cyl(.13,0,.55,4,C.gold,p[0]-.05,p[1]+r*.85,0)}
  const e=sp[9];/* cola con aleta */
  bt.ball(.3,C.gold,e[0]-.35,e[1]+.2,0,1.6,.5,.9,1).ball(.26,tint(C.gold,1.1),e[0]-.7,e[1]+.55,0,1.3,.4,1.1,1);
  /* cabeza con mandíbula abierta y melena */
  bt.ball(.62,C.gold,.55,.35,0,1.35,.9,1,1).box(.9,.14,.6,C.gold,.95,.04,0).box(.9,.1,.55,C.gold,.95,.78,0).cyl(.07,0,.5,4,0xffffff,1.25,.15,.16).cyl(.07,0,.5,4,0xffffff,1.25,.15,-.16);
  bt.ball(.1,C.black,.78,.62,.3,1,1,1,0).ball(.1,C.black,.78,.62,-.3,1,1,1,0);
  for(const z of[-1,1]){bt.cyl(.1,0,.9,4,C.red,.45,.95,z*.28)}
  bt.restore()}
/* ---------- muro de piedra (ishigaki) con talud cóncavo y sillares ---------- */
function ishigaki(bt,x0,z0,hx,hz,yb,yt,Bo,rnd){
  const ys=[yt];while(ys[ys.length-1]>yb+.05){const l=ys[ys.length-1],f=(l-yb)/(yt-yb);ys.push(Math.max(yb,l-(.85+.5*(1-f)+rnd()*.35)))}
  const off=y=>Bo*Math.pow((yt-y)/(yt-yb),1.6),ring=y=>{const o=off(y),a=hx+o,b=hz+o;return[[x0-a,y,z0-b],[x0+a,y,z0-b],[x0+a,y,z0+b],[x0-a,y,z0+b]]};
  const NR=[[0,0,-1],[1,0,0],[0,0,1],[-1,0,0]];bt.orient([x0,(yb+yt)/2,z0]);
  for(let j=0;j<ys.length-1;j++){const ra=ring(ys[j]),rb=ring(ys[j+1]),shade=.78+.22*((ys[j]-yb)/(yt-yb));
    for(let sd=0;sd<4;sd++){const a0=ra[sd],a1=ra[(sd+1)%4],b0=rb[sd],b1=rb[(sd+1)%4],len=Math.hypot(a1[0]-a0[0],a1[2]-a0[2]);
      const P=(t,u)=>{const A_=[a0[0]+(a1[0]-a0[0])*t,a0[1],a0[2]+(a1[2]-a0[2])*t],B_=[b0[0]+(b1[0]-b0[0])*t,b0[1],b0[2]+(b1[2]-b0[2])*t];return[A_[0]+(B_[0]-A_[0])*u,A_[1]+(B_[1]-A_[1])*u,A_[2]+(B_[2]-A_[2])*u]};
      bt.quad(P(0,0),P(1,0),P(1,1),P(0,1),C.stoneD);
      let t0=-rnd()*.5/len*3;while(t0<1){const w=(1.5+rnd()*1.5)/len,t1=t0+w,ta=Math.max(0,t0)+.05/len*1.3,tb=Math.min(1,t1)-.05/len*1.3;if(tb>ta){
          const n=NR[sd],q=u=>u,bump=.1,pt=(t,u)=>{const p=P(t,u);return[p[0]+n[0]*bump,p[1],p[2]+n[2]*bump]};
          const col=tint(C.stone,shade*(.8+rnd()*.34));bt.quad(pt(ta,.06),pt(tb,.06),pt(tb,.94),pt(ta,.94),col)}t0=t1}}}
  bt.free()}
/* ---------- ventanas con celosía ---------- */
function window_(X,x,y,z,ry,w=1.0,h=1.4){
  X.S.at(x,y,z,ry,b=>{b.box(w+.3,h+.3,.2,C.woodD,0,0,.1).box(w+.5,.14,.4,C.woodM,0,h/2+.28,.2);for(let i=-1;i<=1;i++)b.box(.07,h,.06,C.woodD,i*w*.3,0,.28);b.box(w,.06,.06,C.woodD,0,.0,.28)});
  X.E.at(x,y,z,ry,b=>{b.box(w,h,.05,C.win,0,0,.2)})}
function winRow(X,cx_,cz_,y,W,D,h,nx,nz,o={}){
  for(let i=0;i<nx;i++){const t=(i+.5)/nx-.5;for(const sg of[1,-1]){window_(X,cx_+t*(W-3),y,cz_+sg*(D/2),sg>0?0:Math.PI,o.w,o.h)}}
  for(let i=0;i<nz;i++){const t=(i+.5)/nz-.5;for(const sg of[1,-1]){window_(X,cx_+sg*(W/2),y,cz_+t*(D-3),sg>0?Math.PI/2:-Math.PI/2,o.w,o.h)}}}
/* ---------- torre (tenshu o kotenshu) por niveles ---------- */
/* niveles: {w,d,h,nx,nz,wood,ro:{o,rise,k:[caras karahafu],c:[caras chidori],irimoya,gh,shachi}} (caras: 0=+z 1=+x 2=-z 3=-x) */
const FACE_RY=[0,Math.PI/2,Math.PI,-Math.PI/2];
function onRoof(x,z,ey,ea,eb,a2,b2,rise,face,t){
  const ha=ea+(a2-ea)*t,hb=eb+(b2-eb)*t,py=ey+rise*Math.pow(t,1.55),dyt=rise*1.55*Math.pow(t,.55),run=face%2?ea-a2:eb-b2,ang=Math.atan2(dyt,Math.max(.3,run));
  return{px:x+(face===1?ha:face===3?-ha:0),py,pz:z+(face===0?hb:face===2?-hb:0),ry:FACE_RY[face],ang}}
export function tower(X,x,z,y0,L){
  const {P:Pl,S,G}=X;let y=y0,ridge=0;
  L.forEach((lv,i)=>{
    const{w,d,h}=lv;
    Pl.box(w,h,d,C.plaster,x,y+h/2,z,false);
    S.box(w+.26,.7,d+.26,C.woodD,x,y+.35,z,false);S.box(w+.22,.34,d+.22,C.woodD,x,y+h-.4,z,false);
    if(lv.wood)S.box(w+.2,h*.36,d+.2,C.woodM,x,y+h*.2+.3,z,false);
    for(const sx of[-1,1])for(const sz of[-1,1])S.box(.42,h,.42,C.woodD,x+sx*w/2,y+h/2,z+sz*d/2,false);
    const nx=lv.nx||3,nz=lv.nz||2;
    for(let k=1;k<nx;k++)for(const sg of[1,-1])S.box(.2,h-1.1,.12,C.woodD,x-w/2+w*k/nx,y+h/2,z+sg*(d/2+.03),false);
    winRow(X,x,z,y+h*.55,w,d,h,nx,nz,{});
    const nxt=L[i+1];
    if(lv.ro){const r=lv.ro,a2=nxt?nxt.w/2:0,b2=nxt?nxt.d/2:0,ey=y+h-.25,ea=w/2+r.o,eb=d/2+r.o;
      if(r.irimoya){ridge=irimoya(Pl,x,ey,z,ea,eb,w/2-.4,d/2-.4,r.rise,r.gh,{});if(r.shachi)for(const sx of[-1,1])G.at(x+sx*(w/2-.4+.9+.6),ridge-.3,z,sx>0?0:Math.PI,b=>shachi(b,r.shachi))}
      else hipRoof(Pl,x,ey,z,ea,eb,a2,b2,r.rise,r);
      if(!r.irimoya){
        for(const f of r.k||[]){const q=onRoof(x,z,ey,ea,eb,a2,b2,r.rise,f,.36);Pl.at(q.px,q.py,q.pz,q.ry,b=>karahafu(b,r.kw||8,r.kh||3.4,r.kd||5,q.ang))}
        for(const f of r.c||[]){const q=onRoof(x,z,ey,ea,eb,a2,b2,r.rise,f,.42);Pl.at(q.px,q.py,q.pz,q.ry,b=>chidori(b,r.cw||3.6,r.ch||1.6,r.cd||3,q.ang))}}
      y=ey+r.rise}
    else y+=h});
  return{top:y,ridge}}
/* ---------- corredor con troneras (watari-yagura) a lo largo de x; ry=π/2 para orientarlo a lo largo de z ---------- */
function corridor(X,x,y,z,len,ry,o={}){
  const h=o.h||5,wd=o.wd||4.4;
  X.P.at(x,y,z,ry,b=>{b.box(len,h,wd,C.plaster,0,h/2,0,false);gableRoof(b,0,h-.3,0,len,wd+2.2,o.rise||2.4,{})});
  X.S.at(x,y,z,ry,s=>{s.box(len+.1,.55,wd+.22,C.woodD,0,.28,0,false);s.box(len+.1,.3,wd+.2,C.woodD,0,h-.2,0,false);
    const n=Math.max(1,Math.floor(len/2.6));
    for(let i=0;i<n;i++){const lx=-len/2+len*(i+.5)/n;for(const sg of[1,-1])s.at(lx,h*.5,sg*(wd/2+.13),sg>0?0:Math.PI,t=>{if(i%2)t.quad([-.3,-.3,0],[.3,-.3,0],[.3,.3,0],[-.3,.3,0],C.black);else t.tri([-.38,-.32,0],[.38,-.32,0],[0,.4,0],C.black)})}})}
/* ---------- muralla blanca con troneras (triangulares, cuadradas y redondas) en la cara +z local (la exterior) ---------- */
function wall(X,x1,z1,x2,z2,y,o={}){
  const dx=x2-x1,dz=z2-z1,len=Math.hypot(dx,dz),ry=Math.atan2(-dz,dx),cx_=(x1+x2)/2,cz_=(z1+z2)/2,h=o.h||3,th=o.th||1.3;
  X.P.at(cx_,y,cz_,ry,b=>{b.box(len,h,th,C.plaster,0,h/2,0,false);gableRoof(b,0,h-.05,0,len,th+1.5,.95,{})});
  X.S.at(cx_,y,cz_,ry,s=>{s.box(len+.05,.3,th+.1,C.woodD,0,.15,0,false);
    const n=Math.max(1,Math.floor(len/3));
    for(let i=0;i<n;i++){const lx=-len/2+len*(i+.5)/n;s.at(lx,h*.52,th/2+.13,0,t=>{
      if(i%3===0)t.tri([-.34,-.3,0],[.34,-.3,0],[0,.36,0],C.black);else if(i%3===1)t.quad([-.28,-.28,0],[.28,-.28,0],[.28,.28,0],[-.28,.28,0],C.black);
      else{const r=.3,pp=[];for(let q=0;q<8;q++)pp.push([Math.cos(q/8*6.283)*r,Math.sin(q/8*6.283)*r,0]);for(let q=0;q<8;q++)t.tri([0,0,0],pp[q],pp[(q+1)%8],C.black)}})}})}
/* ---------- puerta principal (yaguramon) ---------- */
function mainGate(X,x,z,y){
  const{P:Pl,S,G,E,CL}=X;
  Pl.box(13,4.8,7,C.plaster,x,y+2.4,z,false);S.box(13.3,.8,7.3,C.woodD,x,y+.4,z,false);S.box(13.2,.4,7.2,C.woodD,x,y+4.4,z,false);
  /* pasaje oscuro con puertas abiertas y pilares */
  S.box(4.2,3.7,.3,C.black,x,y+1.85,z+3.52,false);for(const sx of[-1,1]){S.box(.55,4.2,.6,C.woodD,x+sx*2.4,y+2.1,z+3.6,false);S.box(.9,3.2,.15,C.red,x+sx*3.2,y+1.7,z+3.75,false)}
  S.box(5.6,.55,.7,C.woodD,x,y+4.1,z+3.7,false);
  for(const sx of[-1,1])for(let k=0;k<2;k++)window_(X,x+sx*(4.4+k*1.5),y+2.6,z+3.5,0,.9,1.2);
  Pl.box(10,3.4,5,C.plaster,x,y+4.6+1.7,z,false);S.box(10.26,.5,5.26,C.woodD,x,y+4.6+.25,z,false);S.box(10.2,.3,5.2,C.woodD,x,y+4.6+3.2,z,false);
  winRow(X,x,z,y+6.6,10,5,3.4,3,1,{});
  hipRoof(Pl,x,y+4.55,z,6.5+1.1,3.5+1.1,5,2.5,2.2,{});
  const rg=irimoya(Pl,x,y+4.6+3.15,z,5+1.8,2.5+1.8,4.4,2.1,1.9,2.6,{});
  for(const sx of[-1,1])G.at(x+sx*(4.4+.9+.6),rg-.3,z,sx>0?0:Math.PI,b=>shachi(b,.5));
  Pl.at(x,y+4.55+2.2*Math.pow(.45,1.55),z+3.5+1.1-(1.1+1.5)*.45,0,b=>karahafu(b,6,2.5,3,.5));
  /* cortinas maku moradas con mon blanco */
  for(let i=0;i<5;i++){const xx=x-5+i*2.5,yy=y+3.4;CL.box(1.9,2.0,.05,C.purple,xx,yy,z+3.62,false);CL.at(xx,yy,z+3.66,0,b=>{const r=.5,pp=[];for(let q=0;q<10;q++)pp.push([Math.cos(q/10*6.283)*r,Math.sin(q/10*6.283)*r,0]);for(let q=0;q<10;q++)b.tri([0,0,0],pp[q],pp[(q+1)%10],C.cream)})}
  /* faroles de papel colgando del alero */
  for(const sx of[-1,1,0]){E.box(.9,1.3,.9,C.red,x+sx*6.1,y+3.3,z+4.2);S.box(.12,.9,.12,C.woodD,x+sx*6.1,y+4.4,z+4.2);gl(X.h,0xffb36a,5,x+sx*6.1,y+3.3,z+4.4,.85)}
}
/* ---------- puerta interior (hishi-no-mon) en el corredor frontal ---------- */
function innerGate(X,x,z,y){
  const{P:Pl,S,G,E}=X;
  Pl.box(8,4.6,6.4,C.plaster,x,y+2.3,z,false);S.box(8.26,.6,6.66,C.woodD,x,y+.3,z,false);S.box(8.2,.3,6.6,C.woodD,x,y+4.3,z,false);
  S.box(3.2,3.5,.3,C.black,x,y+1.75,z+3.25,false);for(const sx of[-1,1])S.box(.5,3.9,.5,C.woodD,x+sx*1.9,y+1.95,z+3.3,false);S.box(4.6,.5,.6,C.woodD,x,y+3.9,z+3.4,false);
  Pl.box(5.6,3,4.4,C.plaster,x,y+4.45+1.5-.15,z,false);S.box(5.86,.4,4.66,C.woodD,x,y+4.45+.05,z,false);winRow(X,x,z,y+6,5.6,4.4,3,2,1,{});
  hipRoof(Pl,x,y+4.45,z,4+1.5,3.2+1.5,2.8,2.2,1.8,{});const rg=irimoya(Pl,x,y+4.45+3,z,2.8+1.6,2.2+1.6,2.4,1.9,1.5,2.2,{});void rg;
  for(const sx of[-1,1])E.box(.7,1.0,.7,C.red,x+sx*3.0,y+3.2,z+3.6);}
/* ---------- cerezo (siempre en flor) ---------- */
function cherry(X,x,y,z,sc,rnd){const S=X.S;
  S.cyl(.3*sc,.46*sc,3.5*sc,6,C.trunk,x,y,z);const lean=(rnd()-.5)*.8;S.cyl(.16*sc,.24*sc,2.2*sc,5,C.trunk,x+lean*.8,y+2.8*sc,z+lean*.4);
  const cols=[C.pink,C.pink2,C.pink3,tint(C.pink,1.06)];
  for(const [px,py,pz,r] of[[0,4.7,0,2.9],[1.9,4.1,.7,2.0],[-1.7,4.3,-.9,2.2],[.4,5.9,-.4,1.8]])S.ball(r*sc*(.9+rnd()*.25),cols[(rnd()*4)|0],x+px*sc,y+py*sc,z+pz*sc,1,.78,1,1);
  S.cyl(2.5*sc,2.5*sc,.04,9,C.pink3,x+(rnd()-.5)*1.4,y+.06,z+(rnd()-.5)*1.4,true)}
/* linterna de piedra con luz */
export function tourouB(X,x,y,z,sc=1){const S=X.S,st=C.stone;
  S.cyl(.5*sc,.62*sc,.3*sc,7,st,x,y,z);S.cyl(.17*sc,.2*sc,1.3*sc,6,st,x,y+.3*sc,z);S.cyl(.5*sc,.32*sc,.2*sc,7,st,x,y+1.6*sc,z);S.box(.7*sc,.6*sc,.7*sc,st,x,y+2.1*sc,z,false);X.E.box(.46*sc,.4*sc,.74*sc,C.win,x,y+2.1*sc,z).box(.74*sc,.4*sc,.46*sc,C.win,x,y+2.1*sc,z);
  S.cyl(.7*sc,0,.55*sc,4,st,x,y+2.4*sc,z);gl(X.h,0xffc77a,2.8*sc+.4,x,y+2.1*sc,z,.8)}
/* ---------- marco de coordenadas ---------- */
export function frameOf(ctx){
  const{side,s:s0,a,hwv:hw0}=ctx,ca=Math.cos(a),sa=Math.sin(a),x0=cx(s0),PO=CAS.PO;
  const toW=(hx,hz)=>{const gx=side*(hw0+PO-hz),gz=side*hx;return[x0+gx*ca-gz*sa,s0-(gx*sa+gz*ca)]};
  const ground=(hx,hz)=>{const[wx,ws]=toW(hx,hz);return H(wx,ws)};
  const river=hx=>{const gz=side*hx;let gx=0;for(let it=0;it<4;it++){const s=s0-(gx*sa+gz*ca);gx=((cx(s)-x0)+gz*sa)/ca}const s=s0-(gx*sa+gz*ca);return{zc:hw0+PO-side*gx,hw:hw(s)}};
  return{toW,ground,river,side,s0,a,hw0}}
/* barra (caja) entre dos puntos, para rieles, cuerdas y vigas inclinadas */
export function seg(bt,a,b,t,col,t2){const dx=b[0]-a[0],dy=b[1]-a[1],dz=b[2]-a[2],L=Math.hypot(dx,dy,dz);if(L<1e-4)return;
  bt.save().T((a[0]+b[0])/2,(a[1]+b[1])/2,(a[2]+b[2])/2,Math.atan2(dx,dz),-Math.atan2(dy,Math.hypot(dx,dz)),0).box(t,t2||t,L,col).restore()}
/* ======================= CONSTRUCCIÓN ======================= */
/* construcción incremental (generador): se reparte en varios fotogramas para no producir tirones */
export function* castleJob(g,k,ctx){
  const t0=performance.now(),{side,hwv}=ctx,rnd=mulb(k*7919+11),h=new THREE.Group();h.position.set(side*(hwv+CAS.PO),0,0);h.rotation.y=-side*Math.PI/2;g.add(h);
  const X={P:new Batch(),S:new Batch(),G:new Batch(),E:new Batch(),CL:new Batch(),h,rnd,fr:frameOf(ctx),ctx,drums:[]};
  const{P:Pl,S,G,E,CL}=X,Y0=PH+12,SX=-10,parts={};let last=0,lt=performance.now();const mark=n=>{const c=Pl.count()+S.count()+G.count()+E.count()+CL.count(),t=performance.now();parts[n]=[c-last,Math.round(t-lt)];last=c;lt=t};
  /* terrazas de piedra: meseta (muro bajo) y base de la torre (tenshu-dai) */
  S.box(2*CAS.X-1,.3,CAS.ZF-CAS.ZB-1,C.gravel,0,PH-.08,(CAS.ZF+CAS.ZB)/2,false);
  ishigaki(S,0,(CAS.ZF+CAS.ZB)/2,CAS.X,(CAS.ZF-CAS.ZB)/2,-1.8,PH,4.8,rnd);
  S.box(2*CAS.X+1.4,.5,1.2,C.stone,0,PH+.0,CAS.ZF+.3,false);
  ishigaki(S,0,-12,30,22,PH-.4,Y0,6.4,rnd);
  S.box(61.6,.3,45.6,C.gravel,0,Y0-.1,-12,false);
  mark('piedra');yield;
  /* escalera de piedra desde la meseta a la terraza alta (eje x=-10) */
  const SW=5.8,nSt=24;
  for(let i=0;i<nSt;i++){const yi=Y0-.5*(i+1),zz=10.5+i;
    S.box(SW,yi-PH,1.0,tint(C.stone,.92+.1*((i*7)%3)/2),SX,(PH+yi)/2,zz+.5,false);
    for(const sx of[-1,1])S.box(.6,yi+.8-PH,1.0,C.stone,SX+sx*(SW/2+.3),(PH+yi+.8)/2,zz+.5,false);
    if(i%4===1)for(const sx of[-1,1])tourouB(X,SX+sx*(SW/2+1.5),yi,zz+.5,.8)}
  mark('escalera');yield;
  /* torre principal (daitenshu): 6 pisos, 5 tejados, frontones karahafu e irimoya, shachihoko dorados */
  const KX=12,KZ=-17,kt=tower(X,KX,KZ,Y0,[
    {w:26,d:22,h:5.4,nx:5,nz:4,wood:true,ro:{o:2.6,rise:3.3,c:[0,2],cw:4.2,cd:3.2}},
    {w:23.4,d:19.4,h:4.8,nx:5,nz:4,ro:{o:2.4,rise:3.0,k:[0,2],kw:9,kh:3.6,kd:5.5}},
    {w:20.8,d:16.8,h:4.4,nx:4,nz:3,ro:{o:2.2,rise:2.8,c:[1,3],cw:4,cd:3.4}},
    {w:18.2,d:14.2,h:4.0,nx:4,nz:3,ro:{o:2.0,rise:2.6,k:[0,2],kw:7,kh:3,kd:4.5}},
    {w:15.6,d:11.8,h:3.8,nx:3,nz:2},
    {w:13.2,d:9.8,h:3.6,nx:3,nz:2,ro:{o:2.7,rise:3.0,gh:4.4,irimoya:true,shachi:1}}]);
  mark('keep');yield;
  /* torres menores y corredores: anillo cerrado alrededor del patio */
  const k1=tower(X,-22,-27,Y0,[{w:12,d:10,h:4.6,nx:3,nz:2,ro:{o:1.9,rise:2.2,k:[0],kw:5,kh:2.4,kd:3.4}},{w:9.2,d:7.4,h:3.8,nx:2,nz:2,ro:{o:2.0,rise:2.2,gh:3,irimoya:true,shachi:.6}}]);
  const k2=tower(X,24,2,Y0,[{w:10.6,d:9,h:4.2,nx:3,nz:2,ro:{o:1.8,rise:2.0,k:[0],kw:5,kh:2.2,kd:3}},{w:8,d:6.6,h:3.4,nx:2,nz:2,ro:{o:1.9,rise:2.0,gh:2.8,irimoya:true,shachi:.55}}]);
  const k3=tower(X,-24,3,Y0,[{w:10,d:10,h:4.4,nx:3,nz:3,ro:{o:1.8,rise:2.0,c:[0],cw:3.4,cd:2.8}},{w:7.4,d:7.4,h:3.4,nx:2,nz:2,ro:{o:1.9,rise:3.6}}]);
  G.cyl(.14,0,2.2,5,C.gold,-24,k3.top+.2,3).ball(.32,C.gold,-24,k3.top+.2,3);
  for(const [t,tx,tz] of[[kt,KX,KZ],[k1,-22,-27],[k2,24,2]]){S.cyl(.07,.09,4.4,4,C.woodD,tx,t.ridge+.1,tz);X.CL.quad([tx,t.ridge+4.2,tz],[tx+3.4,t.ridge+3.8,tz],[tx+3.4,t.ridge+2.4,tz],[tx,t.ridge+2.7,tz],C.purple)}
  corridor(X,-8.5,Y0,-22,15,0);corridor(X,-22,Y0,-12,20,Math.PI/2);corridor(X,-16.5,Y0,3,5,0);corridor(X,8.5,Y0,3,25,0);corridor(X,22,Y0,-4.1,3.6,Math.PI/2);
  innerGate(X,-10,3,Y0);
  mark('torres');yield;
  /* murallas perimetrales blancas de la meseta (troneras hacia fuera) + puerta principal */
  const WZ=CAS.ZF-1,WX=CAS.X-1,WB=CAS.ZB+1;
  wall(X,-WX,WZ,-16.5,WZ,PH);wall(X,-3.5,WZ,WX,WZ,PH);wall(X,-WX,WB,-WX,WZ,PH);wall(X,WX,WZ,WX,WB,PH);wall(X,WX,WB,-WX,WB,PH);
  mainGate(X,-10,WZ-3,PH);
  mark('muros+puerta');yield;
  /* depósitos (kura) en la meseta */
  for(const [kx,kz] of[[-44,-30],[44,-34],[-46,14]]){Pl.box(16,5.2,8,C.plaster,kx,PH+2.6,kz,false);S.box(16.2,.7,8.2,C.woodD,kx,PH+.5,kz,false);gableRoof(Pl,kx,PH+5.1,kz,17.5,10.4,3.2);for(let i=0;i<3;i++)window_(X,kx-4.5+i*4.5,PH+3.4,kz+4.05,0,.9,1.1)}
  bridge(X);mark('kura+puente');yield;
  /* cerezos en flor: a ambos lados de la escalera, por toda la meseta y en el patio alto */
  let nt=0;const cs=[];for(let i=0;i<7;i++){const zz=15+i*3.6;cs.push([SX-8.2,zz],[SX+8.2,zz])}
  for(let i=0;i<13;i++){cs.push([-62+rnd()*50,-46+rnd()*84],[40+rnd()*22,-46+rnd()*84])}
  for(let i=0;i<6;i++)cs.push([-40+rnd()*80,-49+rnd()*7]);
  for(const [tx,tz] of cs){if(tz>12&&tz<38&&Math.abs(tx-SX)<7&&Math.abs(tx-SX)>1)continue;if(Math.abs(tx)<39&&tz>-42&&tz<19&&!(tz>12&&Math.abs(tx-SX)>7))continue;if(tz>37&&Math.abs(tx-SX)<10)continue;cherry(X,tx,PH+.05,tz,.8+rnd()*.5,rnd);if((++nt)%9===0)yield}
  for(const [tx,tz] of[[-15,-10],[-11,-16],[-16,-4],[-7,-8],[-3,-14]])cherry(X,tx,Y0+.05,tz,.75+rnd()*.3,rnd);
  for(let i=0;i<12;i++){const tx=-61+i*10.4+rnd()*2;if(Math.abs(tx-SX)<10)continue;tourouB(X,tx,PH+.05,36,.9)}
  mark('arboles');yield;yield* buildFestival(X);mark('festival');yield;
  /* mallas finales */
  const M=makeMats();h.add(Pl.mesh(M.plaster));mark('m-pl');yield;h.add(S.mesh(M.solid));mark('m-s');yield;h.add(G.mesh(M.gold),E.mesh(M.emis),CL.mesh(M.cloth));mark('m-rest');yield;
  /* focos dorados que bañan los muros (aditivos; casi invisibles de día) */
  for(const [wx,wy,wz,sz] of[[KX-13.5,Y0+4,KZ+11.5,26],[KX+13.5,Y0+5,KZ+11.5,24],[KX,Y0+13,KZ+11,26],[KX,Y0+21,KZ+8,22],[KX,Y0+28,KZ+6,18],[KX,Y0+34,KZ+5,14],[-22,Y0+4,-21,14],[24,Y0+5,8,14],[-24,Y0+5,9,14],[-10,PH+5,CAS.ZF+3,18]])gl(h,0xffd592,sz,wx,wy,wz,.2);
  mark('focos');g.updateMatrixWorld(true);const v=new THREE.Vector3(KX,Y0+14,KZ);h.localToWorld(v);
  g.userData.cas={parts,ms:0,tris:Pl.count()+S.count()+G.count()+E.count()+CL.count(),mats:M,keep:{x:KX,z:KZ,top:kt.top,ridge:kt.ridge},drums:X.drums,h,fr:X.fr,cw:v};
  g.userData.cas.ms=performance.now()-t0;return g}
/* puente arqueado rojo sobre el foso, embarcadero con linternas y losas de piedra */
function bridge(X){
  const{S,E}=X,BX=-10,z0=61.5,z1=44.4,y0=1.2,y1=PH+.2,n=16,W=5.4,arch=t=>1.1*Math.sin(Math.PI*t)*(1-t),pt=(i,dx=0,dy=0)=>{const t=i/n;return[BX+dx,y0+(y1-y0)*t+arch(t)+dy,z0+(z1-z0)*t]};
  for(let i=0;i<n;i++)seg(S,pt(i),pt(i+1),W,tint(C.red,.9+.12*(i%2)),.3);
  for(const sx of[-1,1]){const px=sx*(W/2+.1);
    for(let i=0;i<=n;i++){const p=pt(i,px);S.box(.22,1.5,.22,C.red,p[0],p[1]+.85,p[2],false);
      if(i%5===0){S.ball(.2,C.gold,p[0],p[1]+1.75,p[2],1,1,1,0);E.box(.42,.6,.42,C.red,p[0],p[1]+2.2,p[2]);gl(X.h,0xffb36a,3.4,p[0],p[1]+2.2,p[2],.85)}
      if(i<n){const q=pt(i+1,px);for(const hh of[1.5,.8])seg(S,[p[0],p[1]+hh,p[2]],[q[0],q[1]+hh,q[2]],.12,C.red)}}}
  for(const zz of[z0-.4,(z0+z1)/2,z1+.4])for(const sx of[-1,1])S.cyl(.2,.26,y0+2.6,6,C.woodD,BX+sx*(W/2-.2),-1.5,zz);
  /* embarcadero */
  const pz0=CAS.PO-3,pz1=CAS.PO+5.2;
  for(let i=0;i<10;i++)S.box(3.6,.18,.62,tint(C.woodM,.9+.2*(i%2)),BX,.62,pz0+i*.9,false);
  for(let i=0;i<6;i++)for(const sx of[-1,1])S.cyl(.12,.15,2.4,5,C.woodD,BX+sx*1.7,-1.5,pz0+.6+i*1.6);
  for(const sx of[-1,1]){S.cyl(.14,.16,3.2,5,C.woodD,BX+sx*1.8,.6,pz1-.4);E.box(.4,.55,.4,C.red,BX+sx*1.8,3.95,pz1-.4);gl(X.h,0xffb36a,3.6,BX+sx*1.8,3.95,pz1-.4,.9)}
  /* losas de piedra entre embarcadero y puente */
  const fr=X.fr;for(let i=0;i<6;i++){const zz=pz0-.8-i*.9,gy=fr.ground(BX,zz);S.box(4.6,.22,.82,tint(C.stone,.9+.1*(i%3)),BX,Math.max(gy,.5),zz,false)}
  for(const sx of[-1,1])for(let i=0;i<3;i++){const zz=58.5-i*1.4,xx=BX+sx*(4.6+i*.9),gy=fr.ground(xx,zz);nobori(X,xx,Math.max(gy,.3),zz,[C.red,C.purple,C.blue][i%3])}
}
export function nobori(X,x,y,z,col,hgt=6.2){X.S.cyl(.07,.09,hgt,5,C.woodD,x,y,z);X.S.box(1.3,.09,.09,C.woodD,x+.6,y+hgt-.2,z,false);X.CL.box(1.1,hgt*.66,.04,col,x+.62,y+hgt*.62,z,false);X.CL.box(1.14,.26,.05,C.cream,x+.62,y+hgt-.5,z,false)}
/* ---------- materiales (compartidos por todo el castillo; la niebla y la luz nocturna se animan en castleStep) ---------- */
function makeMats(){
  const T=(o)=>new THREE.MeshToonMaterial(Object.assign({gradientMap:toonGrad,color:0xffffff,vertexColors:true,fog:false},o||{}));
  return{plaster:T(),solid:T(),gold:T({emissive:0x000000}),cloth:T({side:THREE.DoubleSide}),emis:new THREE.MeshBasicMaterial({color:0xffffff,vertexColors:true,fog:true})}}
/* ---------- animación por fotograma: bruma de distancia, iluminación nocturna, ventanas y tambores ---------- */
const addC=(c,o,k)=>{c.r+=o.r*k;c.g+=o.g*k;c.b+=o.b*k};const _f=new THREE.Color(),_w=new THREE.Color(1,.8,.5),_g=new THREE.Color(1,.72,.3);
export function castleStep(g,night,dt){
  const c=g.userData.cas;if(!c||!c.cw)return;const m=c.mats,dx=c.cw.x-PL.px,dz=c.cw.z-PL.pz,dist=Math.hypot(dx,dz),f=sm(70,640,dist)*.8;
  _f.copy(scene.fog.color);const warm=(1-f);
  for(const mt of[m.plaster,m.solid,m.cloth]){mt.color.setScalar(1-f);mt.emissive.copy(_f).multiplyScalar(f)}
  addC(m.plaster.emissive,_w,night*.34*warm);addC(m.solid.emissive,_w,night*.1*warm);addC(m.cloth.emissive,_w,night*.22*warm);
  m.gold.color.setScalar(1-f);m.gold.emissive.copy(_f).multiplyScalar(f);addC(m.gold.emissive,_g,(.14+.35*night)*warm);
  const wl=.3+.7*night;m.emis.color.setRGB(wl,wl*.95,wl*.9);
  /* tambores: pulso al ritmo del taiko */
  const t=performance.now(),pu=Math.exp(-Math.max(0,t-(A.hitT||0))/160);for(const d of c.drums){const s=1+.05*pu;d.scale.set(s,s,1)}}
