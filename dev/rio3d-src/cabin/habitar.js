/* habitar.js — modo Habitar de la Cabaña 3D: espacios para decorar, rituales, visitantes y diario (catálogo y textos en ../habdata.js) */
import * as THREE from 'three';
import {scene,RT,cam} from './core.js';
import {A} from '../audio.js';
import {Y0,spr,glowTex,el,sT} from './util.js';
import {mat} from './mats.js';
import {state,save} from './state.js';
import {toast} from './ui.js';
import {burst,puff} from './fx.js';
import {DM,VN,addHabTexts} from '../habdata.js';
import {tasksDone} from '../tasks.js';
import {openZen,zenUnlocked} from '../zen.js';
import {lettersSection,newLetters,watchLetters,addStoryTexts,addSeasonTexts,seasonNow,cycleSeason,seasonLabel,SEAS_COL} from '../story.js';

/* ---------- espacios (x, y, z) ---------- */
export const SLOTS=[
  {id:'porcheI',kind:'suelo',p:[-3.6,Y0,2.1],n:'Porche'},
  {id:'interior',kind:'suelo',p:[.9,Y0,-1.7],n:'Junto a la ventana'},
  {id:'porcheD',kind:'suelo',p:[6.0,Y0,2.2],n:'Porche, junto al barandal'},
  {id:'alero',kind:'colgante',p:[-2.4,6.3,3.35],n:'Alero'},
  {id:'pared',kind:'pared',p:[4.6,6.3,-2.7],n:'Pared'},
  {id:'roca',kind:'roca',p:[-7.4,Y0-1.3,2.6],n:'Mirador de roca'},
];
const slotOf=id=>SLOTS.find(s=>s.id===id);
/* ---------- modelos ---------- */
const M=(g,c,o)=>new THREE.Mesh(g,mat(c,o));
const EM=(g,c)=>new THREE.Mesh(g,new THREE.MeshBasicMaterial({color:c}));
const cyl=(r0,r1,h,c,x,y,z,p,sg)=>{const m=M(new THREE.CylinderGeometry(r0,r1,h,sg||8),c);m.position.set(x,y,z);p&&p.add(m);return m};
const sph=(r,c,x,y,z,sx,sy,sz,p)=>{const m=M(new THREE.SphereGeometry(r,10,8),c);m.position.set(x,y,z);m.scale.set(sx||1,sy||1,sz||1);p&&p.add(m);return m};
const bx=(w,h,d,c,x,y,z,p)=>{const m=M(new THREE.BoxGeometry(w,h,d),c);m.position.set(x,y,z);p&&p.add(m);return m};
const glow=(p,col,sz,x,y,z,base)=>{const s=spr(glowTex,col,sz,base||.5,true);s.position.set(x,y,z);s.userData.gl=base||.5;p.add(s);return s};
const BUILD={
  helecho(){const g=new THREE.Group();cyl(.34,.26,.45,'#b06c52',0,.22,0,g);for(let i=0;i<8;i++){const a=i/8*6.283,l=M(new THREE.ConeGeometry(.12,.8,4),'#6fae78');l.position.set(Math.cos(a)*.22,.8,Math.sin(a)*.22);l.rotation.set(Math.sin(a)*.7,0,-Math.cos(a)*.7);g.add(l)}g.userData.anim=t=>{g.rotation.y=Math.sin(t*.4)*.05};return g},
  lavanda(){const g=new THREE.Group();cyl(.28,.22,.4,'#7d6a8f',0,.2,0,g);for(let i=0;i<7;i++){const a=i/7*6.283,x=Math.cos(a)*.14,z=Math.sin(a)*.14;cyl(.012,.012,.7,'#6a9a6e',x,.7,z,g,4);for(let j=0;j<3;j++)sph(.05,j%2?'#b79ae0':'#9e7fd0',x,.95+j*.1,z,1,1.4,1,g)}g.userData.anim=t=>{g.rotation.z=Math.sin(t*.9)*.02};return g},
  farolpapel(){const g=new THREE.Group();cyl(.03,.03,1.05,'#5a4132',0,.52,0,g);const l=sph(.28,'#ffe2aa',0,1.35,0,1,1.35,1,g);l.material=new THREE.MeshBasicMaterial({color:0xffe2aa});cyl(.2,.2,.07,'#5a4132',0,1.78,0,g);glow(g,0xffc07a,3.4,0,1.35,0,.55);return g},
  tetera(){const g=new THREE.Group();bx(1,.08,.7,'#7b5742',0,.7,0,g);for(const sx of[-1,1])for(const sz of[-1,1])cyl(.04,.05,.7,'#6a4a38',sx*.42,.35,sz*.26,g,5);sph(.26,'#4f6f8a',0,.98,0,1.1,.9,1,g);cyl(.1,.1,.08,'#3f5a72',0,1.2,0,g);const sp=cyl(.04,.06,.3,'#4f6f8a',.32,1.04,0,g,5);sp.rotation.z=-.9;const st=[];for(let i=0;i<4;i++){const s=spr(glowTex,0xeee8f6,.5,0,false);s.userData.ph=i/4;g.add(s);st.push(s)}g.userData.anim=t=>{st.forEach(s=>{const ph=(t*.3+s.userData.ph)%1;s.position.set(.38+Math.sin(t*2+s.userData.ph*6)*.08*ph,1.1+ph*1.1,0);s.material.opacity=.4*(1-ph);s.scale.setScalar(.35+ph*.6)})};return g},
  banquito(){const g=new THREE.Group();bx(.9,.14,.7,'#8b6a50',0,.62,0,g);for(const sx of[-1,1])for(const sz of[-1,1])cyl(.04,.05,.62,'#6b4d3a',sx*.35,.31,sz*.25,g,5);bx(.78,.2,.6,'#c0746e',0,.79,0,g);return g},
  libros(){const g=new THREE.Group();bx(.95,.2,.65,'#b0769c',0,.1,0,g);bx(.85,.18,.6,'#6498b9',0,.29,0,g);bx(.8,.17,.55,'#cfb67c',-.03,.47,0,g);cyl(.07,.07,.3,'#f0e6cf',.18,.7,0,g,6);const f=sph(.06,'#ffd27a',.18,.92,0,1,1.6,1,g);f.material=new THREE.MeshBasicMaterial({color:0xffd27a});const gl=glow(g,0xffb45a,2.2,.18,.94,0,.5);g.userData.anim=t=>{f.scale.y=1.6+Math.sin(t*11)*.15;gl.material.opacity=.5+Math.sin(t*9)*.06};return g},
  campanilla(){const g=new THREE.Group();bx(.8,.1,.12,'#7b5742',0,0,0,g);const bells=[];for(let i=-2;i<=2;i++){const b=new THREE.Group();b.position.set(i*.17,-.05,0);const L=.55+((i+2)%2)*.25;cyl(.008,.008,L,'#eadfc4',0,-L/2,0,b,3);cyl(.04,.05,.3,'#e0cd8a',0,-L-.12,0,b,6);g.add(b);bells.push([b,i])}g.userData.anim=t=>{bells.forEach(([b,i])=>{b.rotation.z=Math.sin(t*1.6+i*.8)*.14;b.rotation.x=Math.sin(t*1.3+i)*.08})};return g},
  atrapa(){const g=new THREE.Group(),b=new THREE.Group();g.add(b);const r=M(new THREE.TorusGeometry(.4,.04,6,18),'#d8c19a');r.position.y=-.55;b.add(r);const r2=M(new THREE.TorusGeometry(.2,.012,4,14),'#f0e6d2');r2.position.y=-.55;b.add(r2);[[-.2,'#c97d68'],[0,'#6498b9'],[.2,'#cfb67c']].forEach(([x,c])=>{cyl(.008,.008,.4,'#e8dcc0',x,-1.15,0,b,3);bx(.07,.34,.02,c,x,-1.45,0,b)});cyl(.01,.01,.35,'#e8dcc0',0,-.17,0,b,3);g.userData.anim=t=>{b.rotation.z=Math.sin(t*.9)*.06};return g},
  estrellas(){const g=new THREE.Group();[[-.45,-.5,0],[.4,-.8,1],[0,-1.2,2]].forEach(([x,y,i])=>{const s=EM(new THREE.OctahedronGeometry(.2),0xffe9a0);s.scale.set(1,1,.4);s.position.set(x,y,0);cyl(.006,.006,-y*.9,'#eadfc4',x,y/2+.1,0,g,3);g.add(s);g.userData['s'+i]=s;glow(g,0xffe08a,1.3,x,y,0,.35)});g.userData.anim=t=>{for(let i=0;i<3;i++)g.userData['s'+i].rotation.y=t*.8+i}; return g},
  farolillos(){const g=new THREE.Group();[[-.55,0xe0655a],[0,0xf0a24f],[.55,0xe0655a]].forEach(([x,c],i)=>{cyl(.008,.008,.35,'#4a3a32',x,-.17,0,g,3);const l=sph(.18,c,x,-.55,0,1,1.35,1,g);l.material=new THREE.MeshBasicMaterial({color:c});glow(g,0xff9a64,1.5,x,-.55,0,.4)});const w=bx(1.4,.02,.02,'#3a2e28',0,0,0,g);g.userData.anim=t=>{g.rotation.z=Math.sin(t*1.2)*.03};return g},
  reloj(){const g=new THREE.Group();const d=M(new THREE.CylinderGeometry(.42,.42,.08,20),'#6b4d3a');d.rotation.x=Math.PI/2;g.add(d);const f=M(new THREE.CylinderGeometry(.35,.35,.02,20),'#f1e6cc');f.rotation.x=Math.PI/2;f.position.z=.05;g.add(f);const mh=bx(.03,.3,.015,'#3d2e26',0,.15,.075,null),hh=bx(.04,.2,.015,'#3d2e26',0,.1,.07,null);const pm=new THREE.Group(),ph=new THREE.Group();pm.position.z=.0;ph.position.z=.0;pm.add(mh);ph.add(hh);g.add(pm,ph);g.userData.anim=t=>{const d=new Date();pm.rotation.z=-d.getMinutes()/60*6.283;ph.rotation.z=-((d.getHours()%12)+d.getMinutes()/60)/12*6.283};return g},
  guitarra(){const g=new THREE.Group(),b=new THREE.Group();b.rotation.z=.35;g.add(b);sph(.34,'#b9793f',0,-.35,0,1,1.15,.3,b);sph(.24,'#b9793f',0,.05,0,1,1.1,.3,b);const h=cyl(.1,.1,.05,'#4a3326',0,-.25,.1,b);h.rotation.x=Math.PI/2;bx(.1,1.05,.06,'#6b4d3a',0,.65,0,b);bx(.14,.2,.06,'#4a3326',0,1.25,0,b);return g},
  estantito(){const g=new THREE.Group();bx(1.3,.1,.35,'#7b5742',0,0,.1,g);cyl(.12,.12,.35,'#bee1eb',-.4,.22,.1,g,8).material=new THREE.MeshBasicMaterial({color:0xbee1eb,transparent:true,opacity:.6});cyl(.1,.1,.28,'#e6c896',-.1,.19,.1,g,8);for(let i=0;i<3;i++){const f=sph(.025,0xfff2a0,-.4+(i-1)*.04,.2+i*.03,.1,1,1,1,g);f.material=new THREE.MeshBasicMaterial({color:0xfff2a0})}cyl(.08,.06,.12,'#9a5b44',.4,.11,.1,g);for(let i=0;i<4;i++){const l=M(new THREE.ConeGeometry(.05,.3,4),'#6fae78');l.position.set(.4+(i-1.5)*.05,.34,.1);l.rotation.z=(i-1.5)*.25;g.add(l)}glow(g,0xffe896,1.8,-.4,.25,.2,.3);return g},
  mapa(){const g=new THREE.Group();bx(.9,.7,.03,'#e6d3a6',0,0,0,g);bx(.94,.06,.05,'#6b4d3a',0,.38,0,g);bx(.94,.06,.05,'#6b4d3a',0,-.38,0,g);const pts=[[-.3,-.2],[-.12,.08],[0,-.05],[.14,.2],[.32,-.2]];for(let i=0;i<4;i++){const a=pts[i],b=pts[i+1],l=Math.hypot(b[0]-a[0],b[1]-a[1]),m=bx(l,.015,.01,'#8d6b44',(a[0]+b[0])/2,(a[1]+b[1])/2,.02,g);m.rotation.z=Math.atan2(b[1]-a[1],b[0]-a[0])}sph(.04,'#c0463a',.1,-.26,.03,1,1,.5,g);return g},
  mojon(){const g=new THREE.Group();[[0,.55,.2,'#7d7b86'],[.38,.42,.17,'#8d8b97'],[.7,.3,.14,'#9a98a4'],[.95,.2,.11,'#a8a6b2']].forEach(([y,r,h,c])=>sph(r,c,0,y+.1,0,1,.5,1,g));return g},
  farolpiedra(){const g=new THREE.Group(),c='#8a8896';cyl(.4,.45,.18,c,0,.09,0,g,6);cyl(.1,.12,.9,c,0,.6,0,g,6);cyl(.35,.3,.14,c,0,1.1,0,g,6);bx(.5,.5,.5,c,0,1.4,0,g);bx(.26,.3,.52,'#ffe1a0',0,1.4,0,g).material=new THREE.MeshBasicMaterial({color:0xffe1a0});bx(.52,.3,.26,'#ffe1a0',0,1.4,0,g).material=new THREE.MeshBasicMaterial({color:0xffe1a0});const r=M(new THREE.ConeGeometry(.5,.4,4),c);r.position.y=1.85;r.rotation.y=Math.PI/4;g.add(r);glow(g,0xffbe6e,3.4,0,1.4,0,.5);return g},
  floresroca(){const g=new THREE.Group(),fl=[];for(let i=-4;i<=4;i++){const b=new THREE.Group();b.position.set(i*.17,0,Math.sin(i)*.15);const h=.4+Math.abs(i%3)*.18;cyl(.012,.012,h,'#6a9a6e',0,h/2,0,b,3);sph(.07,['#f2b6c8','#fff0a0','#a6c8ff'][(i+4)%3],0,h,0,1,1,1,b);g.add(b);fl.push([b,i])}g.userData.anim=t=>{fl.forEach(([b,i])=>{b.rotation.z=Math.sin(t*1.1+i*.7)*.06})};return g},
};
BUILD.farolpuente=function(){const g=new THREE.Group(),b=new THREE.Group();g.add(b);cyl(.012,.012,.4,'#4a3a32',0,-.2,0,b,3);cyl(.16,.16,.05,'#5a4132',0,-.45,0,b);const l=sph(.2,0xffd696,0,-.72,0,1,1.4,1,b);l.material=new THREE.MeshBasicMaterial({color:0xffd696});cyl(.16,.16,.05,'#5a4132',0,-1.05,0,b);glow(b,0xffb86b,2.6,0,-.72,0,.5);g.userData.anim=t=>{b.rotation.z=Math.sin(t*1.1)*.06};return g};
BUILD.petalos=function(){const g=new THREE.Group(),br=bx(1.1,.07,.07,'#6b4d3a',0,0,0,g);br.rotation.z=.4;const fl=[];for(let i=0;i<7;i++){const x=-.45+i*.15,y=-.18+i*.13+((i%2)?.1:-.05),p=sph(.09,i%2?'#f6b9cb':'#f9d2de',x,y,.05,1,1,.7,g);fl.push([p,i])}return g};
BUILD.campanatemplo=function(){const g=new THREE.Group(),b=new THREE.Group();g.add(b);cyl(.012,.012,.35,'#4a3a32',0,-.17,0,b,3);bx(.2,.1,.2,'#6b4d3a',0,-.4,0,b);cyl(.2,.34,.6,'#b98a3f',0,-.78,0,b,10);cyl(.35,.35,.04,'#8a6228',0,-1.1,0,b,10);sph(.06,'#6b4d3a',0,-1.1,0,1,1,1,b);g.userData.anim=t=>{b.rotation.z=Math.sin(t*.9)*.08};return g};
BUILD.frasco=function(){const g=new THREE.Group();const j=cyl(.22,.22,.55,'#bee1eb',0,.28,0,g,10);j.material=new THREE.MeshBasicMaterial({color:0xbee1eb,transparent:true,opacity:.5});const w=cyl(.19,.19,.34,'#6eb8e8',0,.2,0,g,10);w.material=new THREE.MeshBasicMaterial({color:0x6eb8e8,transparent:true,opacity:.75});cyl(.12,.12,.1,'#8b6a50',0,.62,0,g,8);glow(g,0xa0dcff,1.6,0,.3,0,.3);return g};
BUILD.lotocuenco=function(){const g=new THREE.Group();const c=cyl(.34,.2,.22,'#5f7f8f',0,.12,0,g,12);const w=cyl(.3,.3,.02,'#78bed7',0,.22,0,g,12);w.material=new THREE.MeshBasicMaterial({color:0x78bed7});const fl=[];for(let i=-2;i<=2;i++){const p=sph(.1,i%2?'#f6b9cb':'#f9d2de',i*.09,.38+(2-Math.abs(i))*.03,0,.8,1.5,.8,g);p.rotation.z=-i*.25;fl.push(p)}sph(.05,'#f2d27a',0,.3,0,1,1,1,g);g.userData.anim=t=>{g.rotation.y=Math.sin(t*.3)*.1};return g};
/* visitantes: gato negro, zorro, búho, mariposa lunar */
const VBUILD={
  gato(){const g=new THREE.Group();sph(.4,'#3a3548',0,.3,0,1.3,.75,.9,g);sph(.25,'#3a3548',.5,.52,0,1,1,1,g);for(const z of[-.12,.12]){const e=M(new THREE.ConeGeometry(.07,.16,4),'#3a3548');e.position.set(.5,.78,z);g.add(e);const ey=sph(.03,'#ffe27a',.72,.55,z*.8,1,1,1,g);ey.material=new THREE.MeshBasicMaterial({color:0xffe27a})}const tl=M(new THREE.TorusGeometry(.3,.06,6,12,4),'#3a3548');tl.position.set(-.42,.18,.2);tl.rotation.x=1.5;g.add(tl);g.userData.anim=t=>{tl.rotation.z=Math.sin(t*2)*.3};return g},
  zorro(){const g=new THREE.Group();sph(.45,'#c7703a',0,.45,0,1.5,.8,.8,g);sph(.28,'#c7703a',.75,.75,0,1.2,.9,.9,g);sph(.12,'#fff2e0',1.0,.7,0,1.2,.7,1,g);for(const z of[-.14,.14]){const e=M(new THREE.ConeGeometry(.09,.25,4),'#c7703a');e.position.set(.72,1.02,z);g.add(e)}const tl=sph(.3,'#c7703a',-.75,.5,0,2,.8,.8,g);sph(.14,'#fff2e0',-1.1,.55,0,1,1,1,g);g.userData.anim=t=>{tl.rotation.z=Math.sin(t*1.5)*.15};return g},
  buho(){const g=new THREE.Group();sph(.34,'#8a7560',0,.5,0,1,1.4,1,g);sph(.22,'#e8dcc4',0,.46,.14,1,1.3,.6,g);for(const x of[-.14,.14]){const e=sph(.1,'#fff1b0',x,.78,.22,1,1,.6,g);const p=sph(.04,'#2a2030',x,.78,.3,1,1,1,g);const t=M(new THREE.ConeGeometry(.06,.18,4),'#8a7560');t.position.set(x*1.5,1.05,0);g.add(t)}return g},
  mariposa(){const g=new THREE.Group(),w=[];for(const s of[-1,1]){const p=new THREE.Group();const m=new THREE.Mesh(new THREE.CircleGeometry(.3,8),new THREE.MeshBasicMaterial({color:0x7fe8a0,side:THREE.DoubleSide,transparent:true,opacity:.9}));m.position.x=s*.28;p.add(m);g.add(p);w.push([p,s])}sph(.05,'#3a3a50',0,0,0,1,1,1,g);glow(g,0xbeebc8,1.6,0,0,0,.35);g.userData.anim=t=>{const f=Math.sin(t*14)*.9;w.forEach(([p,s])=>{p.rotation.y=s*f})};return g},
};
/* ---------- estado y grupos ---------- */
const H={on:false,root:null,markers:{},models:{},vis:null,vcur:null,vnext:25,sel:null,rit:{te:0,riego:0},mem:0};
const decorOf=id=>DM.find(d=>d.id===id);
export const unlocked=()=>!!state.repaired.techo;
const groundAt=(x,z,fb)=>{try{const r=new THREE.Raycaster(new THREE.Vector3(x,30,z),new THREE.Vector3(0,-1,0),0,60);r.camera=cam;const hits=r.intersectObjects(scene.children,true).filter(h=>h.object.isMesh&&!h.object.userData.hab&&h.object.visible);return hits.length?hits[0].point.y:fb}catch(e){return fb}};
export function habGroups(){const a=[];if(!H.root)return a;if(H.on)Object.values(H.markers).forEach(m=>a.push(m));if(H.vcur)a.push(H.vcur.g);return a}
const refreshModels=()=>{
  for(const s of SLOTS){const id=state.decor[s.id],cur=H.models[s.id];
    if(cur&&cur.id!==id){H.root.remove(cur.g);delete H.models[s.id]}
    if(id&&!H.models[s.id]){const g=BUILD[id]();g.userData.hab=true;g.traverse(o=>{o.userData.hab=true});const p=slotPos(s);g.position.set(p[0],p[1],p[2]);H.root.add(g);H.models[s.id]={id,g}}}
};
const slotPos=s=>{if(s.kind==='roca'&&!s._y){s._y=groundAt(s.p[0],s.p[2],s.p[1])}return s.kind==='roca'?[s.p[0],s._y,s.p[2]]:s.p};
export function initHabitar(){
  H.root=new THREE.Group();H.root.userData.hab=true;scene.add(H.root);
  for(const s of SLOTS){
    const m=new THREE.Group(),ring=new THREE.Mesh(new THREE.TorusGeometry(.62,.05,6,28),new THREE.MeshBasicMaterial({color:0xffe9b8,transparent:true,opacity:.7,depthTest:false}));
    ring.rotation.x=Math.PI/2;ring.renderOrder=9;m.add(ring);const hit=new THREE.Mesh(new THREE.SphereGeometry(.95,8,6),new THREE.MeshBasicMaterial({visible:false}));m.add(hit);
    m.userData.itemId='slot:'+s.id;m.userData.hab=true;ring.userData.hab=true;hit.userData.hab=true;m.visible=false;
    const p=slotPos(s),yo=s.kind==='colgante'?-.9:s.kind==='pared'?0:.9;m.position.set(p[0],p[1]+yo,p[2]);if(s.kind==='pared')ring.rotation.x=0;
    H.root.add(m);H.markers[s.id]=m}
  buildUI();refreshModels();refreshPanel();
  window.__habd={H,SLOTS,place,spawn,state,DM,show:on=>{H.on=on;toggleMode()}};
}
/* ---------- visitantes ---------- */
const VPOS={gato:[2.6,Y0+1.12,3.45,.2],zorro:[-5.6,0,.9,.6],buho:[6.7,Y0+1.35,3.75,0],mariposa:[3.4,Y0+2.4,3.4,0]};
function spawn(kk){
  if(H.vcur)return;const ks=Object.keys(VN),k=kk||ks[(Math.random()*ks.length)|0];if(k===H.vlast&&!kk)return;H.vlast=k;
  const g=VBUILD[k]();g.userData.itemId='visitante';g.userData.hab=true;g.traverse(o=>{o.userData.hab=true;if(!o.userData.itemId)o.userData.itemId='visitante'});
  const P=VPOS[k].slice();if(k==='zorro')P[1]=groundAt(P[0],P[2],Y0-1.3);g.position.set(P[0],P[1],P[2]);g.rotation.y=P[3];g.scale.setScalar(.01);H.root.add(g);
  H.vcur={k,g,t:0,life:50,done:false,base:P};try{A.chime((P[0]-1.5)/12,2)}catch(e){}UX.cap('Llega un visitante',30000);
}
function visitorTap(){
  const v=H.vcur;if(!v||v.done)return;const V=VN[v.k],n=state.vis[v.k]||0;state.vis[v.k]=n+1;v.done=true;v.t=Math.max(v.t,v.life-3.5);
  const note=V.notes[n%V.notes.length];if(!state.notes.includes(note))state.notes.push(note);addMem(2);let msg=note;
  if(n===0&&V.gift&&!state.own[V.gift]){state.own[V.gift]=true;msg+=' · Te dejó: '+decorOf(V.gift).name}
  toast(msg);burst([v.g.position.x,v.g.position.y+.5,v.g.position.z]);UX.hap([10,50,10]);try{A.chime((v.g.position.x-1.5)/12,3)}catch(e){}refreshPanel();save();
}
export const addMem=n=>{state.mem=(state.mem||0)+n;refreshPanel()};
/* ---------- rituales ---------- */
const CD=90;
function doTe(){if(H.rit.te>0)return;H.rit.te=CD;H.teaT=7;state.cnt=state.cnt||{};state.cnt.te=(state.cnt.te||0)+1;addMem(1);toast('Preparas té. El vapor sube despacio. Qué calma.');try{A.chime(-.4,1)}catch(e){}UX.hap([8,40,8]);UX.cap('Tetera',20000);
  if(!H.tea){H.tea=BUILD.tetera();H.tea.userData.hab=true;H.tea.traverse(o=>o.userData.hab=true);H.root.add(H.tea)}const p=slotPos(SLOTS[0]);H.tea.position.set(p[0],p[1],p[2]);H.tea.visible=true;save()}
function doRiego(){if(H.rit.riego>0)return;if(!state.repaired.plantas){toast('Primero repara las plantas');return}H.rit.riego=CD;state.cnt=state.cnt||{};state.cnt.rg=(state.cnt.rg||0)+1;addMem(1);burst([6.9,Y0+1.2,3]);burst([-2.4,Y0+1.2,3.3]);toast('Riegas las plantas. Huelen a campo.');UX.hap([8,40,8]);save()}
/* ---------- estaciones ---------- */
const SPS=[];
function seasonStep(dt,T){
  if(!RT.started||!unlocked()){SPS.forEach(s=>s.visible=false);return}
  const se=seasonNow(),c=SEAS_COL[se];
  if(!SPS.length)for(let i=0;i<46;i++){const s=spr(glowTex,0xffffff,.32+Math.random()*.22,0,false);s.userData.p={x:Math.random()*24-9,y:Math.random()*14,z:Math.random()*14-5,ph:Math.random()*6.3};s.userData.hab=true;H.root.add(s);SPS.push(s)}
  const col=(c[0]<<16)|(c[1]<<8)|c[2];
  for(const s of SPS){const p=s.userData.p,vy=se===1?.5:se===3?.9:se===2?1.3:1.1;p.y+=(se===1?vy:-vy)*dt;p.x+=Math.sin(T*.6+p.ph)*.5*dt+.25*dt;
    if(p.y<-1)p.y=14;if(p.y>14)p.y=-1;if(p.x>15)p.x=-9;
    s.position.set(p.x,p.y+Y0-1,p.z);s.visible=true;s.material.color.setHex(col);s.material.opacity=se===1?.4+.25*Math.sin(T*2+p.ph):.75}
}
/* ---------- bucle ---------- */
let wc=14;
export function habStep(dt,T){
  if(!H.root)return;
  H.rit.te=Math.max(0,H.rit.te-dt);H.rit.riego=Math.max(0,H.rit.riego-dt);
  if(H.teaT>0){H.teaT-=dt;if(H.teaT<=0&&H.tea)H.tea.visible=false;if(H.tea&&!H.models.porcheI)H.tea.visible=H.teaT>0}
  const day=1;for(const k in H.models){const g=H.models[k].g;g.userData.anim&&g.userData.anim(T);g.traverse(o=>{if(o.isSprite&&o.userData.gl!=null&&o.material)o.material.opacity=o.userData.gl*(.85+.15*Math.sin(T*3+g.id))})}
  if(H.tea&&H.tea.visible)H.tea.userData.anim(T);
  if(H.vcur){const v=H.vcur;v.t+=dt;const a=Math.max(0.01,Math.min(1,v.t/1.5,(v.life-v.t)/1.5));v.g.scale.setScalar((a*a*(3-2*a))*(v.k==='mariposa'?1.7:1.1));v.g.userData.anim&&v.g.userData.anim(T);
    if(v.k==='mariposa'){v.g.position.set(v.base[0]+Math.sin(T*.6)*1.6,v.base[1]+Math.sin(T*.9)*.5,v.base[2]+Math.cos(T*.5)*.8)}
    if(v.t>=v.life){H.root.remove(v.g);H.vcur=null}}
  if(RT.started&&unlocked()&&!H.vcur){H.vnext-=dt;if(H.vnext<=0){H.vnext=80+Math.random()*70;spawn()}}
  wc-=dt;if(wc<=0){wc=24+Math.random()*20;if(Object.values(state.decor).includes('campanilla')){UX.cap('Campanilla de viento',20000);try{A.chime(.5,4)}catch(e){}}}
  if(H.on){const p=.65+.3*Math.sin(T*2.6);for(const id in H.markers){const m=H.markers[id];m.children[0].material.opacity=H.sel===id.replace('slot:','')?1:p}}
  seasonStep(dt,T);
  if(H.btn){const u=unlocked();if(H.btn.hidden===u)H.btn.hidden=!u}
}
/* ---------- selección por toque ---------- */
export function habTap(id){
  if(id==='visitante'){visitorTap();return true}
  if(typeof id==='string'&&id.startsWith('slot:')){H.sel=id.slice(5);refreshPanel();return true}
  return false;
}
/* ---------- interfaz ---------- */
function mkb(txt,fn,cls,dis){const b=document.createElement('button');b.type='button';b.className='chip '+(cls||'');b.style.cssText='min-width:0;align-self:center;white-space:nowrap;flex-direction:row';b.textContent=txt;if(dis)b.disabled=true;b.onclick=fn;return b}
function buildUI(){
  const top=el('top');H.btn=document.createElement('button');H.btn.id='habBtn';H.btn.type='button';H.btn.textContent='Habitar';H.btn.hidden=true;el('mats').after(H.btn);
  H.btn.onclick=()=>{H.on=!H.on;H.sel=null;toggleMode()};
  H.panel=document.createElement('div');H.panel.id='hab';H.panel.style.cssText='display:none;gap:14px;align-items:flex-start;min-width:max-content';el('panel').appendChild(H.panel);
  setTimeout(()=>{if(unlocked()&&newLetters(state)>0)toast('Una carta nueva te espera en el diario')},4000);
  setInterval(()=>{if(unlocked()&&!document.hidden)watchLetters(state,toast,s=>s)},2500);
  let was=unlocked();setInterval(()=>{const u=unlocked();if(u!==was){was=u;if(u)toast('La cabaña ya se puede habitar: toca «Habitar»')}if(H.on&&(H.rit.te>0||H.rit.riego>0))refreshPanel()},1000);
}
function toggleMode(){if(H.on){for(const s of SLOTS){const m=H.markers[s.id],p=slotPos(s),yo=s.kind==='colgante'?-.9:s.kind==='pared'?0:.9;m.position.set(p[0],p[1]+yo,p[2])}}el('chips').style.display=H.on?'none':'';H.btn.textContent=H.on?'Volver a reparar':'Habitar';for(const id in H.markers)H.markers[id].visible=H.on;refreshPanel()}
function refreshPanel(){
  if(!H.panel)return;if(!H.on){H.panel.style.display='none';return}
  H.panel.style.display='flex';H.panel.textContent='';
  const g1=document.createElement('div');g1.className='grp';const l1=document.createElement('span');l1.className='lab';l1.textContent='Recuerdos: '+(state.mem||0);g1.appendChild(l1);
  const rb=(t,fn,cd)=>g1.appendChild(mkb(cd>0?t+' · '+Math.ceil(cd)+' s':t,fn,'',cd>0));
  rb('Preparar té',doTe,H.rit.te);rb('Regar plantas',doRiego,H.rit.riego);g1.appendChild(mkb('Diario de la cabaña',showDiary,''));if(zenUnlocked(state))g1.appendChild(mkb('Jardín zen',()=>openZen({tr:s=>s,ctx:()=>A.ctx,addMem,say:toast,chime:()=>{try{A.chime(0,2)}catch(e){}}}),'ready'));g1.appendChild(mkb(seasonLabel(),()=>{cycleSeason();refreshPanel()},''));H.panel.appendChild(g1);
  const s=H.sel&&slotOf(H.sel),g2=document.createElement('div');g2.className='grp';
  if(!s){const e=document.createElement('span');e.className='loot';e.style.alignSelf='center';e.textContent='Toca un círculo de la cabaña para decorar ese lugar.';g2.appendChild(e)}
  else{const l=document.createElement('span');l.className='lab';l.textContent=s.n;g2.appendChild(l);
    if(state.decor[s.id])g2.appendChild(mkb('Quitar',()=>{delete state.decor[s.id];refreshModels();refreshPanel();save()},''));
    DM.filter(d=>d.kind===s.kind&&state.decor[s.id]!==d.id&&(d.gate==null||tasksDone()[d.gate])).forEach(d=>{const own=!!state.own[d.id]||d.gate!=null;
      g2.appendChild(mkb(own?d.name:d.name+' · '+d.cost,()=>place(s,d),own?'done':((state.mem||0)>=d.cost?'ready':'locked')))})}
  H.panel.appendChild(g2);
}
function place(s,d){
  if(!state.own[d.id]){if((state.mem||0)<d.cost){toast('Te faltan '+(d.cost-(state.mem||0))+' recuerdos. Prepara té o espera visitas.');return}state.mem-=d.cost;state.own[d.id]=true}
  for(const k of Object.keys(state.decor))if(state.decor[k]===d.id)delete state.decor[k];
  state.decor[s.id]=d.id;refreshModels();const p=slotPos(s);burst([p[0],p[1]+1,p[2]]);try{A.chime((p[0]-1.5)/12,2)}catch(e){}UX.hap([10,40,10]);toast(d.name+' colocado');refreshPanel();save();
}
function showDiary(){
  const m=document.createElement('div');m.style.cssText='position:fixed;inset:0;z-index:50;display:grid;place-items:center;background:rgba(20,22,48,.6)';
  const b=document.createElement('div');b.style.cssText='background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(88vw,420px);max-height:70vh;overflow:auto;font:15px/1.45 system-ui';
  const h=document.createElement('h2');h.style.cssText='margin:0 0 10px;font:600 1.1rem system-ui';h.textContent='Diario de la cabaña';b.appendChild(h);
  if(!state.notes.length){const p=document.createElement('p');p.textContent='Aún vacío. Los visitantes dejan notas sobre quien vivió aquí.';b.appendChild(p)}
  state.notes.forEach(n=>{const p=document.createElement('p');p.style.margin='0 0 10px';p.textContent='· '+n;b.appendChild(p)});
  lettersSection(b,state,s=>s,addMem,save);
  state.cnt=state.cnt||{};if(zenUnlocked(state)&&!state.cnt.zen){state.cnt.zen=1;save();setTimeout(()=>{toast('Se abrió el jardín zen: ya leíste todas las cartas de Mara');refreshPanel()},600)}
  const c=mkb('Cerrar',()=>m.remove(),'');b.appendChild(c);m.appendChild(b);m.onclick=e=>{if(e.target===m)m.remove()};document.body.appendChild(m);
}
export const resetHab=()=>{if(!H.root)return;refreshModels();refreshPanel()};
export {addHabTexts,addStoryTexts,addSeasonTexts};
