/* Festival del castillo: guirnaldas de farolillos sobre el río, puestos (yatai), tambores taiko, koinobori, estandartes y gente de fiesta.
   Se dibuja en los Batch del castillo (marco local h), así que cuesta casi nada en llamadas de dibujo. */
import * as THREE from 'three';
import {toonGrad} from '../style.js';
import {CAS} from './world.js';
import {gl} from './lm-parts.js';
import {tint} from './batch.js';
import {C,seg,nobori} from './castle.js';
const KIM=[0xc2453a,0x3d5f9a,0xe8c15a,0x4f8f6a,0xd98aa6,0x7a4a9a,0xf0f0e6,0x2f3a5a,0xe58a3a],SKIN=[0xf0cfae,0xe8c09a,0xf3d6bb],LAN=[];
/* persona de pie (kimono, cabeza, pelo, farol de mano opcional) */
function person(X,x,y,z,ry,col,lan,arms){const{S,E,rnd}=X;
  S.at(x,y,z,ry,b=>{b.cyl(.37,.2,1.28,7,col,0,0,0).cyl(.28,.27,.16,7,col===0xf0f0e6?C.red:tint(C.woodD,1.2),0,.62,0).ball(.17,SKIN[(rnd()*3)|0],0,1.42,0,1,1.1,1,0).ball(.185,C.black,0,1.48,-.03,1,.8,1,0);
    if(lan)b.cyl(.04,.04,.7,4,C.woodD,.38,.7,.28);
    if(arms){b.box(.1,.1,.55,col,.3,1.1,.1);b.box(.1,.1,.55,col,-.3,1.1,.1)}});
  if(lan){E.at(x,y,z,ry,b=>b.cyl(.13,.13,.34,6,0xffd9a0,.38,.38,.28));if(rnd()<.45)gl(X.h,0xffc77a,2.6,x+Math.sin(ry)*.28+Math.cos(ry)*.38,y+.55,z+Math.cos(ry)*.28-Math.sin(ry)*.38,.85)}}
function crowd(X,x,z,n,spread,ry){const{fr,rnd}=X;
  for(let i=0;i<n;i++){const px=x+(rnd()-.5)*spread*2,pz=z+(rnd()-.5)*spread*.9,gy=fr.ground(px,pz);if(gy<.35)continue;person(X,px,gy,pz,ry+(rnd()-.5)*1.2,KIM[(rnd()*KIM.length)|0],rnd()<.5,false)}}
/* puesto de comida (yatai) con toldo a rayas, farolillos, mostrador y mercancía; el frente mira a +z local rotado ry */
function yatai(X,x,z,ry){const{S,E,CL,fr,rnd}=X;const gy=Math.max(fr.ground(x,z),.4);
  const col=[[C.red,C.cream],[C.blue,C.cream],[C.orange,C.cream],[C.green,C.cream]][(rnd()*4)|0];
  S.at(x,gy,z,ry,b=>{
    for(const sx of[-1,1])for(const sz of[-1,1])b.cyl(.08,.1,2.7,5,C.woodD,sx*1.65,0,sz*.9);
    b.box(3.5,.95,1.3,C.woodM,0,.48,.5,false).box(3.7,.12,1.5,tint(C.woodM,1.25),0,.98,.5);
    for(let i=0;i<3;i++)b.ball(.17,[C.red,C.cream,0xe9577a,C.orange][(rnd()*4)|0],-1.1+i*1.1,1.28,.45,1,1,1,0).cyl(.02,.02,.5,3,C.woodD,-1.1+i*1.1,1.0,.45);
    b.box(.7,.5,.5,0x8a6a4a,1.2,1.3,.6).box(.6,.3,.5,0xc9674f,-.2,1.2,.62)});
  CL.at(x,gy,z,ry,b=>{const n=7;for(let i=0;i<n;i++){const xa=-1.9+3.8*i/n,xb=-1.9+3.8*(i+1)/n,c=i%2?col[1]:col[0];b.quad([xa,3.0,-1.1],[xb,3.0,-1.1],[xb,2.55,1.35],[xa,2.55,1.35],c);b.tri([xa,2.55,1.35],[xb,2.55,1.35],[(xa+xb)/2,2.15,1.4],c)}
    b.quad([-1.9,2.55,-1.1],[1.9,2.55,-1.1],[1.9,3.0,-1.1],[-1.9,3.0,-1.1],col[0])});
  const c=Math.cos(ry),s=Math.sin(ry);
  for(const sx of[-1,1]){E.at(x,gy,z,ry,b=>b.cyl(.28,.28,.55,6,C.red,sx*1.7,1.85,1.2));gl(X.h,0xffb36a,3.3,x+sx*1.7*c+1.2*s,gy+2.1,z-sx*1.7*s+1.2*c,.85)}}
/* tambor odaiko: cuerpo fusionado + parches (mallas aparte) que laten con el taiko */
function odaiko(X,x,z){const{S,fr}=X;const gy=Math.max(fr.ground(x,z),.4),yc=gy+1.55;
  S.at(x,yc,z,0,b=>{
    b.at(0,0,0,0,t=>t.cyl(1.0,1.0,1.5,14,0x7a4a2e,0,-.75,0),0,0,Math.PI/2);
    for(const sx of[-1,1])b.at(sx*.6,0,0,0,t=>t.cyl(1.05,1.05,.16,14,C.red,0,-.08,0),0,0,Math.PI/2);
    for(const sx of[-1,1])for(let i=0;i<14;i++){const a=i/14*6.283;b.ball(.06,C.gold,sx*.78,Math.cos(a)*1.0,Math.sin(a)*1.0,1,1,1,0)}
    for(const sx of[-1,1]){b.box(.3,1.4,.3,C.woodD,sx*.6,-1.0,.95);b.box(.3,1.4,.3,C.woodD,sx*.6,-1.0,-.95)}
    b.box(1.8,.25,2.4,C.woodD,0,-1.4,0)});
  const mat=new THREE.MeshToonMaterial({gradientMap:toonGrad,color:0xe9d6ac,side:THREE.DoubleSide,fog:true});
  for(const sx of[-1,1]){const m=new THREE.Mesh(new THREE.CircleGeometry(.97,20),mat);m.userData.noMerge=true;m.position.set(x+sx*.7,yc,z);m.rotation.y=Math.PI/2;X.h.add(m);X.drums.push(m)}
  for(const sd of[-1,1]){const px=x+sd*1.95;person(X,px,Math.max(fr.ground(px,z),.4),z,Math.atan2(-sd,0),sd>0?0xf0f0e6:C.red,false,true)}}
/* koinobori: carpas de viento colgadas de un mástil */
function koinobori(X,x,z){const{S,CL,fr}=X,gy=Math.max(fr.ground(x,z),.4),H=12;
  S.cyl(.1,.14,H,5,C.woodD,x,gy,z);S.ball(.28,C.gold,x,gy+H+.2,z,1,1,1,1);S.cyl(.12,0,1.3,4,C.gold,x,gy+H+.4,z);
  const cols=[C.black,C.red,C.blue,0xe9577a,C.green];
  CL.at(x,gy,z,0,b=>{cols.forEach((c,i)=>{const yy=H-.8-i*1.7,L=3.6-i*.25;b.at(.1,yy,0,.2*i,t=>{t.cyl(.62-i*.04,.14,L,8,c,0,0,0)},0,-Math.PI/2+.08*i);
      b.ball(.12,0xffffff,.5,yy+.25,.45,1,1,1,0);b.ball(.12,0xffffff,.5,yy+.25,-.45,1,1,1,0)});
    [0xf7b7c9,0xfff2a0,0x9ad0ff,0xa6e3a1,0xffb066].forEach((c,i)=>b.quad([0,H-.4,.25*i-.5],[0,H-.7,.25*i-.5],[2.8,H-2.0-i*.12,.25*i-.5],[2.8,H-1.7-i*.12,.25*i-.5],c))})}
/* guirnalda de farolillos entre dos mástiles de bambú a ambas orillas del río */
function garland(X,hx){const{S,E,CL,fr}=X,r=fr.river(hx),za=r.zc-r.hw-1.8,zb=r.zc+r.hw+1.8,Hp=12.8,sag=3.9;
  for(const zz of[za,zb]){const gy=Math.max(fr.ground(hx,zz),.2);S.cyl(.14,.2,Hp-gy+.8,6,C.woodM,hx,gy-.3,zz);S.ball(.3,C.gold,hx,Hp+.8,zz,1,1,1,0)}
  const pt=t=>[hx,Hp-sag*Math.sin(Math.PI*t),za+(zb-za)*t],n=Math.max(12,Math.round((zb-za)/1.8));
  for(let i=0;i<n;i++)seg(S,pt(i/n),pt((i+1)/n),.09,C.woodD);
  for(let i=1;i<n;i++){const p=pt(i/n),c=LAN[(i+Math.abs(hx|0))%4];S.box(.04,.35,.04,C.woodD,p[0],p[1]-.17,p[2],false);E.cyl(.42,.34,.95,6,c,p[0],p[1]-1.3,p[2]);S.cyl(.44,0,.22,6,C.black,p[0],p[1]-.34,p[2]);if(i%3===0)gl(X.h,0xffb36a,3.6,p[0],p[1]-.85,p[2],.8)}
  for(let i=0;i<n;i++){const a=pt((i+.1)/n),b=pt((i+.9)/n);CL.tri([a[0],a[1]-.05,a[2]],[b[0],b[1]-.05,b[2]],[(a[0]+b[0])/2,Math.min(a[1],b[1])-.7,(a[2]+b[2])/2],[C.red,C.cream,C.purple,C.orange][i%4])}}
export function* buildFestival(X){
  LAN.length=0;LAN.push(C.red,C.cream,C.orange,0xe9577a);
  const{S,E,CL,fr,rnd}=X;
  for(const hx of[-86,-62,-38,38,62,86]){garland(X,hx);yield}
  /* faroles bajo el alero del muro frontal */
  for(let i=0;i<40;i++){const lx=-62+i*3.15;if(Math.abs(lx+10)<9)continue;E.cyl(.36,.3,.8,6,LAN[i%4],lx,CAS.PH+1.6,CAS.ZF+.5);S.box(.04,.5,.04,C.woodD,lx,CAS.PH+2.5,CAS.ZF+.5,false);if(i%3===0)gl(X.h,0xffb36a,3.2,lx,CAS.PH+2.0,CAS.ZF+.7,.8)}
  /* estandartes (nobori) a lo largo de la orilla del castillo */
  for(let i=0;i<14;i++){const hx=-80+i*12+rnd()*3;if(Math.abs(hx+10)<10)continue;const z=CAS.PO-.8,gy=Math.max(fr.ground(hx,z),.3);nobori(X,hx,gy,z,[C.red,C.purple,C.blue,C.orange,C.green][i%5])}
  /* puestos en ambas orillas */
  const SA=[-76,-60,-36,16,28,40,52,64,76],SB=[-52,-30,-12,6,24,44,62];
  for(const hx of SA){yatai(X,hx,CAS.PO-2.8,0);yield}
  for(const hx of SB){const r=fr.river(hx);yatai(X,hx,r.zc+r.hw+3.2,Math.PI);yield}
  /* gente de fiesta: grupos frente a los puestos, junto al embarcadero y al puente */
  for(const hx of SA){crowd(X,hx,CAS.PO-.4,2,3,0);yield}
  for(const hx of SB){const r=fr.river(hx);crowd(X,hx,r.zc+r.hw+1.2,2,3,Math.PI);yield}
  crowd(X,-10,CAS.PO+1.0,2,1.2,0);crowd(X,-16,CAS.PO-6,4,3,0);crowd(X,-4,CAS.PO-6,4,3,0);
  /* taiko junto al puente + koinobori */
  odaiko(X,-24,CAS.PO-4.5);odaiko(X,4,CAS.PO-4.5);koinobori(X,-17,CAS.PO-1.6);koinobori(X,-3,CAS.PO-1.6);
}
