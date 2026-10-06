/* Habitar: tras restaurar el techo, la cabaña se puede vivir: decorar espacios, rituales cortos y visitantes con pequeñas notas.
   Sin rachas ni plazos: los «recuerdos» se ganan con calma y nunca se pierden. */
import {W,H,uTr,uCap,uHap,rr,line,$} from './util.js';
import {state,rt} from './state.js';
import {toast} from './ui.js';
import {burst} from './fx.js';
import {A} from './audio.js';
import {scheduleSave} from './persist.js';
import {VN} from '../../rio3d-src/habdata.js';
export {addHabTexts} from '../../rio3d-src/habdata.js';

/* ---------- espacios ---------- */
export const SLOTS=[
  {id:'porcheI',kind:'suelo',x:251,y:540,n:'Porche'},
  {id:'interior',kind:'suelo',x:648,y:520,n:'Junto a la ventana'},
  {id:'porcheD',kind:'suelo',x:823,y:536,n:'Porche, junto al barandal'},
  {id:'alero',kind:'colgante',x:783,y:282,n:'Alero'},
  {id:'pared',kind:'pared',x:557,y:396,n:'Pared'},
  {id:'roca',kind:'roca',x:130,y:612,n:'Mirador de roca'},
];
const R=(g,x,y,w,h,r,c)=>{g.fillStyle=c;rr(g,x,y,w,h,r);g.fill()};
const C=(g,x,y,r,c)=>{g.fillStyle=c;g.beginPath();g.arc(x,y,r,0,7);g.fill()};
const sw=(t,k,a)=>Math.sin(t*k)*a;
/* ---------- objetos: dibujo (g, x, y, t). suelo/roca: base en (x,y); colgante: se cuelga desde (x,y); pared: centro en (x,y) ---------- */
export const DECOR=[
  {id:'helecho',kind:'suelo',name:'Helecho en maceta',cost:2,draw(g,x,y,t){R(g,x-14,y-22,28,22,4,'#9a5b44');R(g,x-16,y-26,32,7,3,'#b06c52');g.strokeStyle='#6fae78';g.lineWidth=4;g.lineCap='round';for(let i=-3;i<=3;i++){g.beginPath();g.moveTo(x,y-26);g.quadraticCurveTo(x+i*9+sw(t,.8+i*.1,2),y-48-Math.abs(i)*-2,x+i*15+sw(t,.9,3),y-36+Math.abs(i)*5);g.stroke()}g.lineCap='butt'}},
  {id:'lavanda',kind:'suelo',name:'Lavanda',cost:2,draw(g,x,y,t){R(g,x-12,y-18,24,18,4,'#7d6a8f');g.lineWidth=2.4;for(let i=-3;i<=3;i++){const tx=x+i*5+sw(t,.9+i*.13,2),ty=y-54-Math.abs(i)*2;g.strokeStyle='#6a9a6e';g.beginPath();g.moveTo(x+i*3,y-18);g.lineTo(tx,ty);g.stroke();for(let j=0;j<4;j++)C(g,tx+(j%2?1:-1),ty+j*3.5,2.6,j%2?'#b79ae0':'#9e7fd0')}}},
  {id:'farolpapel',kind:'suelo',name:'Farol de papel',cost:3,glow:[0,-34,70,.5,'255,190,110'],draw(g,x,y,t){R(g,x-2,y-24,4,24,1,'#5a4132');R(g,x-12,y-60,24,34,10,'rgba(255,226,170,.95)');g.strokeStyle='rgba(150,90,50,.5)';g.lineWidth=1.4;for(let i=-1;i<=1;i++)line(g,x+i*6,y-58,x+i*6,y-28);R(g,x-9,y-64,18,5,2,'#5a4132');R(g,x-9,y-27,18,4,2,'#5a4132')}},
  {id:'tetera',kind:'suelo',name:'Tetera humeante',cost:3,draw(g,x,y,t){R(g,x-22,y-26,44,5,2,'#7b5742');R(g,x-18,y-21,5,21,1,'#6a4a38');R(g,x+13,y-21,5,21,1,'#6a4a38');g.fillStyle='#4f6f8a';g.beginPath();g.ellipse(x,y-38,13,11,0,0,7);g.fill();R(g,x-5,y-52,10,5,2,'#3f5a72');g.strokeStyle='#4f6f8a';g.lineWidth=3;g.beginPath();g.moveTo(x+11,y-40);g.quadraticCurveTo(x+24,y-48,x+20,y-34);g.stroke();g.beginPath();g.arc(x-17,y-40,7,Math.PI*.5,Math.PI*1.5);g.stroke();for(let i=0;i<4;i++){const ph=(t*.35+i/4)%1;g.globalAlpha=.4*(1-ph);C(g,x+22+sw(t,2+i,3)*ph,y-44-ph*34,3+ph*6,'#eee8f6')}g.globalAlpha=1}},
  {id:'banquito',kind:'suelo',name:'Banquito con manta',cost:4,draw(g,x,y,t){R(g,x-20,y-26,40,8,3,'#8b6a50');for(const s of[-1,1])R(g,x+s*14-2,y-18,4,18,1,'#6b4d3a');R(g,x-18,y-35,36,11,5,'#c0746e');g.strokeStyle='#e7b9a8';g.lineWidth=2;for(let i=-1;i<=1;i++)line(g,x+i*10,y-34,x+i*10,y-25)}},
  {id:'libros',kind:'suelo',name:'Libros con vela',cost:4,glow:[4,-52,64,.45,'255,180,90'],draw(g,x,y,t){R(g,x-20,y-12,40,12,2,'#b0769c');R(g,x-17,y-22,36,10,2,'#6498b9');R(g,x-19,y-32,34,10,2,'#cfb67c');R(g,x+2,y-46,8,14,2,'#f0e6cf');const f=1+sw(t,11,.12)+sw(t,23,.06);g.fillStyle='#ffd27a';g.beginPath();g.ellipse(x+6,y-51,3.2*f,6*f,0,0,7);g.fill()}},
  {id:'campanilla',kind:'colgante',name:'Campanilla de viento',cost:3,draw(g,x,y,t){g.strokeStyle='rgba(235,225,200,.9)';g.lineWidth=1.4;R(g,x-14,y,28,5,2,'#7b5742');for(let i=-2;i<=2;i++){const a=sw(t,1.6+i*.2,.12),L=22+Math.abs(i)*-3+(i%2?8:0),bx=x+i*6+a*L;line(g,x+i*6,y+4,bx,y+4+L);g.fillStyle='#d9c27a';R(g,bx-2,y+L,4,14+(i%2?4:0),2,'#e0cd8a')}}},
  {id:'atrapa',kind:'colgante',name:'Atrapasueños',cost:3,draw(g,x,y,t){const a=sw(t,.9,.05);g.save();g.translate(x,y);g.rotate(a);g.strokeStyle='#d8c19a';g.lineWidth=3;g.beginPath();g.arc(0,22,17,0,7);g.stroke();g.lineWidth=1.2;g.strokeStyle='rgba(240,230,210,.85)';for(let i=0;i<8;i++){const q=i/8*6.283;line(g,Math.cos(q)*16,22+Math.sin(q)*16,Math.cos(q+2.4)*10,22+Math.sin(q+2.4)*10)}for(const [fx,c] of[[-9,'#c97d68'],[0,'#6498b9'],[9,'#cfb67c']]){g.strokeStyle='#e8dcc0';line(g,fx,38,fx,52);R(g,fx-2,50,4,14,2,c)}g.restore();line(g,x,y-6,x,y+5)}},
  {id:'estrellas',kind:'colgante',name:'Móvil de estrellas',cost:4,glow:[0,40,80,.28,'255,230,150'],draw(g,x,y,t){g.strokeStyle='rgba(235,225,200,.8)';g.lineWidth=1.3;line(g,x,y-6,x,y+4);[[-18,18],[16,30],[0,48]].forEach(([dx,dy],i)=>{const sx=x+dx+sw(t,1.1+i*.3,3);line(g,x,y+4,sx,y+dy);g.fillStyle='#ffe9a0';g.beginPath();for(let k=0;k<10;k++){const r=k%2?5:11,a=k/10*6.283-1.57;g.lineTo(sx+Math.cos(a)*r,y+dy+8+Math.sin(a)*r)}g.closePath();g.fill()})}},
  {id:'farolillos',kind:'colgante',name:'Farolillos de papel',cost:3,glow:[0,38,80,.4,'255,150,100'],draw(g,x,y,t){g.strokeStyle='rgba(60,45,40,.8)';g.lineWidth=1.4;line(g,x-24,y,x+24,y+6);[[-18,'#e0655a'],[0,'#f0a24f'],[18,'#e0655a']].forEach(([dx,c],i)=>{const lx=x+dx+sw(t,1.2+i*.4,1.5);line(g,lx,y+3,lx,y+14);g.fillStyle=c;g.beginPath();g.ellipse(lx,y+26,8,12,0,0,7);g.fill();R(g,lx-5,y+13,10,3,1,'#4a3a32')})}},
  {id:'reloj',kind:'pared',name:'Reloj de pared',cost:3,draw(g,x,y,t){C(g,x,y,20,'#6b4d3a');C(g,x,y,16.5,'#f1e6cc');g.strokeStyle='#3d2e26';g.lineWidth=2;const d=new Date(),mh=d.getMinutes()/60*6.283,hh=(d.getHours()%12+d.getMinutes()/60)/12*6.283;line(g,x,y,x+Math.sin(mh)*13,y-Math.cos(mh)*13);g.lineWidth=3;line(g,x,y,x+Math.sin(hh)*8,y-Math.cos(hh)*8);for(let i=0;i<12;i++){const q=i/12*6.283;line(g,x+Math.sin(q)*13.5,y-Math.cos(q)*13.5,x+Math.sin(q)*15.5,y-Math.cos(q)*15.5)}}},
  {id:'guitarra',kind:'pared',name:'Guitarra',cost:4,draw(g,x,y,t){g.save();g.translate(x,y);g.rotate(-.35);g.fillStyle='#b9793f';g.beginPath();g.ellipse(0,14,16,19,0,0,7);g.fill();g.beginPath();g.ellipse(0,-6,11,13,0,0,7);g.fill();C(g,0,12,6,'#4a3326');R(g,-3,-52,6,48,2,'#6b4d3a');R(g,-5,-60,10,10,2,'#4a3326');g.strokeStyle='rgba(240,230,210,.7)';g.lineWidth=1;line(g,0,-48,0,14);g.restore()}},
  {id:'estantito',kind:'pared',name:'Estantito con frascos',cost:3,glow:[0,-8,50,.25,'255,235,150'],draw(g,x,y,t){R(g,x-32,y+8,64,6,2,'#7b5742');R(g,x-24,y-14,14,22,4,'rgba(190,225,235,.7)');R(g,x-8,y-8,13,16,4,'rgba(230,200,150,.8)');for(let i=0;i<3;i++)C(g,x-17+sw(t,.7+i,1),y-3+i*3,2,'#fff2a0');g.strokeStyle='#6fae78';g.lineWidth=3;g.beginPath();g.moveTo(x+18,y+8);g.quadraticCurveTo(x+14,y-6,x+24,y-12);g.moveTo(x+18,y+8);g.quadraticCurveTo(x+26,y-2,x+12,y-16);g.stroke()}},
  {id:'mapa',kind:'pared',name:'Mapa de la montaña',cost:2,draw(g,x,y,t){R(g,x-26,y-20,52,40,3,'#e6d3a6');g.strokeStyle='#8d6b44';g.lineWidth=1.2;g.beginPath();g.moveTo(x-20,y+8);g.lineTo(x-8,y-6);g.lineTo(x,y+2);g.lineTo(x+10,y-12);g.lineTo(x+20,y+8);g.stroke();g.setLineDash([3,3]);line(g,x-18,y+14,x+4,y+10);g.setLineDash([]);C(g,x+4,y+10,2.4,'#c0463a');R(g,x-27,y-22,54,4,2,'#6b4d3a');R(g,x-27,y+18,54,4,2,'#6b4d3a')}},
  {id:'mojon',kind:'roca',name:'Mojón de piedras',cost:2,draw(g,x,y,t){for(const [dy,w,c] of[[0,30,'#7d7b86'],[-14,22,'#8d8b97'],[-26,15,'#9a98a4'],[-35,9,'#a8a6b2']]){g.fillStyle=c;g.beginPath();g.ellipse(x,y+dy-6,w/2,7,0,0,7);g.fill()}}},
  {id:'farolpiedra',kind:'roca',name:'Farol de piedra',cost:3,glow:[0,-38,80,.5,'255,190,110'],draw(g,x,y,t){const c='#8a8896';R(g,x-14,y-6,28,6,2,c);R(g,x-5,y-30,10,24,2,c);R(g,x-16,y-36,32,7,2,c);R(g,x-10,y-54,20,18,2,c);R(g,x-6,y-50,12,10,2,'rgba(255,225,160,.95)');g.fillStyle=c;g.beginPath();g.moveTo(x-18,y-54);g.lineTo(x,y-68);g.lineTo(x+18,y-54);g.closePath();g.fill()}},
  {id:'floresroca',kind:'roca',name:'Flores de roca',cost:2,draw(g,x,y,t){for(let i=-4;i<=4;i++){const fx=x+i*7,a=sw(t,1+i*.2,2),h=14+Math.abs(i%3)*6;g.strokeStyle='#6a9a6e';g.lineWidth=2;line(g,fx,y,fx+a,y-h);C(g,fx+a,y-h,3.6,['#f2b6c8','#fff0a0','#a6c8ff'][(i+4)%3])}}},
];
export const decorOf=id=>DECOR.find(d=>d.id===id);
const slotOf=id=>SLOTS.find(s=>s.id===id);
/* ---------- estado ---------- */
export const unlocked=()=>!!state.repaired.techo;
export const placedAt=sid=>decorOf(state.decor[sid]);
/* ---------- visitantes ---------- */
const POS={gato:[251,540],zorro:[130,612],buho:[872,432],mariposa:[648,470]};
const VIS={};for(const k in VN)VIS[k]={name:VN[k].name,x:POS[k][0],y:POS[k][1],gift:VN[k].gift,notes:VN[k].notes};
const vis={cur:null,next:25,t:0};
function spawn(){
  const ks=Object.keys(VIS),k=ks[(Math.random()*ks.length)|0];
  if(vis.cur||k===vis.last)return;vis.last=k;vis.cur={k,t:0,life:50,state:0,x:VIS[k].x,y:VIS[k].y};
  uCap('Llega un visitante',30000);try{A.chime((VIS[k].x/W-.5)*8)}catch(e){}
}
function drawVisitor(g,t){
  const v=vis.cur;if(!v)return;const k=v.k,a=Math.min(1,v.t/1.5,(v.life-v.t)/1.5);if(a<=0)return;g.save();g.globalAlpha=a;
  const x=v.x,y=v.y;
  if(k==='gato'){g.fillStyle='#3a3548';g.beginPath();g.ellipse(x,y-12,13,11,0,0,7);g.fill();g.beginPath();g.arc(x+9,y-26,8,0,7);g.fill();for(const s of[-1,1]){g.beginPath();g.moveTo(x+9+s*7,y-30);g.lineTo(x+9+s*5,y-40);g.lineTo(x+9+s*1,y-32);g.fill()}g.strokeStyle='#3a3548';g.lineWidth=5;g.lineCap='round';g.beginPath();g.moveTo(x-10,y-6);g.quadraticCurveTo(x-30,y-2+sw(t,2,4),x-26,y-18+sw(t,2,6));g.stroke();g.lineCap='butt';C(g,x+7,y-27,1.6,'#ffe27a');C(g,x+12,y-27,1.6,'#ffe27a')}
  else if(k==='zorro'){g.fillStyle='#c7703a';g.beginPath();g.ellipse(x,y-14,17,11,0,0,7);g.fill();g.beginPath();g.ellipse(x+17,y-22,9,7,0,0,7);g.fill();g.beginPath();g.moveTo(x+14,y-27);g.lineTo(x+13,y-38);g.lineTo(x+20,y-29);g.fill();g.fillStyle='#fff2e0';g.beginPath();g.ellipse(x+23,y-20,4,3,0,0,7);g.fill();g.fillStyle='#c7703a';g.beginPath();g.moveTo(x-14,y-12);g.quadraticCurveTo(x-40,y-4+sw(t,1.5,3),x-34,y-28);g.quadraticCurveTo(x-24,y-18,x-14,y-18);g.fill();C(g,x+20,y-24,1.5,'#2a2030')}
  else if(k==='buho'){g.fillStyle='#8a7560';g.beginPath();g.ellipse(x,y-18,12,18,0,0,7);g.fill();g.fillStyle='#e8dcc4';g.beginPath();g.ellipse(x,y-14,7,11,0,0,7);g.fill();C(g,x-5,y-27,4.4,'#fff1b0');C(g,x+5,y-27,4.4,'#fff1b0');C(g,x-5,y-27,1.8,'#2a2030');C(g,x+5,y-27,1.8,'#2a2030');g.fillStyle='#8a7560';g.beginPath();g.moveTo(x-9,y-34);g.lineTo(x-6,y-42);g.lineTo(x-3,y-34);g.moveTo(x+9,y-34);g.lineTo(x+6,y-42);g.lineTo(x+3,y-34);g.fill()}
  else{const bx=x+sw(t,.6,26),by=y+sw(t,.9,14),fl=Math.abs(Math.sin(t*5));g.fillStyle='rgba(190,235,200,.9)';g.beginPath();g.ellipse(bx-7*fl,by,8*fl+1,10,-.4,0,7);g.fill();g.beginPath();g.ellipse(bx+7*fl,by,8*fl+1,10,.4,0,7);g.fill();C(g,bx,by,2,'#3a3a50')}
  if(v.state===0){const p=.5+.5*Math.sin(t*3);g.globalAlpha=a*(.4+.4*p);g.strokeStyle='rgba(255,230,160,1)';g.lineWidth=2;g.setLineDash([5,5]);g.beginPath();g.arc(x+(k==='mariposa'?sw(t,.6,26):0),y-18+(k==='mariposa'?sw(t,.9,14):0),30,0,7);g.stroke();g.setLineDash([])}
  g.restore();
}
function visitorTap(px,py){
  const v=vis.cur;if(!v||v.state)return false;
  const bx=v.k==='mariposa'?v.x+sw(vis.t,.6,26):v.x,by=(v.k==='mariposa'?v.y+sw(vis.t,.9,14):v.y)-18;
  if(Math.hypot(px-bx,py-by)>40)return false;
  const V=VIS[v.k],n=(state.vis[v.k]||0);state.vis[v.k]=n+1;v.state=1;v.t=Math.max(v.t,v.life-3.5);
  const note=V.notes[n%V.notes.length];
  if(!state.notes.includes(note))state.notes.push(note);
  addMem(2);let msg=note;
  if(n===0&&V.gift&&!state.own[V.gift]){state.own[V.gift]=true;msg+=' · Te dejó: '+decorOf(V.gift).name}
  toast(msg);burst(bx,by);uHap([10,50,10]);try{A.chime((bx/W-.5)*8)}catch(e){}
  refreshPanel();scheduleSave();return true;
}
/* ---------- recuerdos y rituales ---------- */
export function addMem(n){state.mem=(state.mem||0)+n;refreshPanel()}
const rit={te:{cd:0,anim:0},riego:{cd:0}};
const CD=90;
function doTe(){if(rit.te.cd>0)return;rit.te.cd=CD;rit.te.anim=7;addMem(1);toast('Preparas té. El vapor sube despacio. Qué calma.');uCap('Tetera',20000);try{A.chime(-2)}catch(e){}uHap([8,40,8]);scheduleSave()}
function doRiego(){if(rit.riego.cd>0)return;if(!state.repaired.plantas){toast('Primero repara las plantas');return}rit.riego.cd=CD;addMem(1);burst(768,480);burst(420,545);toast('Riegas las plantas. Huelen a campo.');uHap([8,40,8]);scheduleSave()}
/* ---------- bucle ---------- */
let wc=12;
export function updateHab(dt,t){
  vis.t=t;
  if(rit.te.cd>0)rit.te.cd=Math.max(0,rit.te.cd-dt);if(rit.riego.cd>0)rit.riego.cd=Math.max(0,rit.riego.cd-dt);if(rit.te.anim>0)rit.te.anim-=dt;
  if(!rt.started||!unlocked())return;
  if(vis.cur){vis.cur.t+=dt;if(vis.cur.t>=vis.cur.life)vis.cur=null}
  else{vis.next-=dt;if(vis.next<=0){vis.next=80+Math.random()*70;spawn()}}
  wc-=dt;if(wc<=0){wc=24+Math.random()*20;if(Object.values(state.decor).includes('campanilla')){uCap('Campanilla de viento',20000);try{A.chime(2.5)}catch(e){}}}
}
/* ---------- dibujo ---------- */
export function drawDecor(g,t){
  for(const s of SLOTS){const d=placedAt(s.id);if(d)d.draw(g,s.x,s.y,t)}
  if(rit.te.anim>0){const a=Math.min(1,rit.te.anim);g.globalAlpha=a;DECOR[3].draw(g,251,540,t);g.globalAlpha=1}
  drawVisitor(g,t);
}
export const decorGlows=()=>{const o=[];for(const s of SLOTS){const d=placedAt(s.id);if(d&&d.glow){const[dx,dy,r,a,c]=d.glow;o.push([s.x+dx,s.y+dy,r,a,c])}}return o};
let habOn=false;
export const habMode=()=>habOn;
export function drawHabRings(g,t){
  if(!habOn)return;const p=.5+.5*Math.sin(t*2.6);
  for(const s of SLOTS){const sel=sel_===s.id;g.lineWidth=sel?3.5:2.5;g.setLineDash([7,6]);g.strokeStyle='rgba(255,236,190,'+(sel?.95:.35+.35*p)+')';g.beginPath();g.arc(s.x,s.y-(s.kind==='suelo'||s.kind==='roca'?26:s.kind==='colgante'?-26:0),36,0,7);g.stroke();g.setLineDash([])}
}
/* ---------- entrada ---------- */
let sel_=null;
export function habPointer(px,py){
  if(visitorTap(px,py))return true;
  if(!habOn)return false;
  for(const s of SLOTS){const cy=s.y-(s.kind==='suelo'||s.kind==='roca'?26:s.kind==='colgante'?-26:0);if(Math.hypot(px-s.x,py-cy)<42){sel_=s.id;refreshPanel();return true}}
  sel_=null;refreshPanel();return false;
}
/* ---------- panel ---------- */
let panel,btn;
const T=s=>uTr(s);
function mkb(txt,fn,cls,dis){const b=document.createElement('button');b.type='button';b.className='chip '+(cls||'');b.textContent=T(txt);if(dis)b.disabled=true;b.onclick=fn;return b}
export function refreshPanel(){
  if(!panel)return;
  if(btn){btn.hidden=!unlocked();btn.textContent=T(habOn?'Volver a reparar':'Habitar')}
  if(!habOn){panel.style.display='none';return}
  panel.style.display='flex';panel.textContent='';
  const top=document.createElement('div');top.className='grp';
  const lab=document.createElement('span');lab.className='lab';lab.textContent=T('Recuerdos')+': '+(state.mem||0);top.appendChild(lab);
  const rb=(id,txt,fn,r)=>{const b=mkb(txt,fn,'',r.cd>0);if(r.cd>0)b.textContent=T(txt)+' · '+Math.ceil(r.cd)+' s';top.appendChild(b)};
  rb('te','Preparar té',doTe,rit.te);rb('riego','Regar plantas',doRiego,rit.riego);
  top.appendChild(mkb('Diario de la cabaña',()=>showDiary(),''));
  panel.appendChild(top);
  const s=sel_&&slotOf(sel_);
  const g2=document.createElement('div');g2.className='grp';
  if(!s){const e=document.createElement('span');e.className='loot';e.textContent=T('Toca un círculo de la cabaña para decorar ese lugar.');g2.appendChild(e)}
  else{
    const l2=document.createElement('span');l2.className='lab';l2.textContent=T(s.n);g2.appendChild(l2);
    const cur=state.decor[s.id];
    if(cur)g2.appendChild(mkb('Quitar',()=>{delete state.decor[s.id];refreshPanel();scheduleSave()},''));
    DECOR.filter(d=>d.kind===s.kind).forEach(d=>{
      const own=!!state.own[d.id],here=state.decor[s.id]===d.id;
      if(here)return;
      const b=mkb(own?d.name:d.name+' · '+d.cost,()=>place(s,d),own?'done':((state.mem||0)>=d.cost?'ready':'locked'));
      b.title=own?T('Colocar'):T('Comprar con recuerdos');g2.appendChild(b)});
  }
  panel.appendChild(g2);
}
function place(s,d){
  if(!state.own[d.id]){if((state.mem||0)<d.cost){toast('Te faltan '+(d.cost-(state.mem||0))+' recuerdos. Prepara té o espera visitas.');return}state.mem-=d.cost;state.own[d.id]=true}
  for(const k of Object.keys(state.decor))if(state.decor[k]===d.id)delete state.decor[k];
  state.decor[s.id]=d.id;burst(s.x,s.y-30);try{A.chime((s.x/W-.5)*8)}catch(e){}uHap([10,40,10]);toast(d.name+' colocado');refreshPanel();scheduleSave();
}
function showDiary(){
  const m=document.createElement('div');m.style.cssText='position:fixed;inset:0;z-index:50;display:grid;place-items:center;background:rgba(20,22,48,.6)';
  const b=document.createElement('div');b.style.cssText='background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(88vw,420px);max-height:70vh;overflow:auto;font:15px/1.45 var(--f-body,system-ui)';
  const h=document.createElement('h2');h.style.cssText='margin:0 0 10px;font:600 1.1rem var(--f-display,system-ui)';h.textContent=T('Diario de la cabaña');b.appendChild(h);
  if(!state.notes.length){const p=document.createElement('p');p.textContent=T('Aún vacío. Los visitantes dejan notas sobre quien vivió aquí.');b.appendChild(p)}
  state.notes.forEach(n=>{const p=document.createElement('p');p.style.margin='0 0 10px';p.textContent='· '+T(n);b.appendChild(p)});
  const c=mkb('Cerrar',()=>m.remove(),'');b.appendChild(c);m.appendChild(b);m.onclick=e=>{if(e.target===m)m.remove()};document.body.appendChild(m);
}
export function initHabitar(){
  btn=document.createElement('button');btn.type='button';btn.className='btn';btn.id='habBtn';btn.hidden=true;btn.textContent='Habitar';
  $('#mats').after(btn);
  panel=document.createElement('div');panel.id='hab';panel.style.display='none';$('#chips').after(panel);
  btn.onclick=()=>{habOn=!habOn;sel_=null;$('#chips').style.display=habOn?'none':'';refreshPanel()};
  setInterval(()=>{if(habOn&&!document.hidden&&(rit.te.cd>0||rit.riego.cd>0))refreshPanel()},1000);
  let was=unlocked();
  setInterval(()=>{const u=unlocked();if(u!==was){was=u;refreshPanel();if(u)toast('La cabaña ya se puede habitar: toca «Habitar»')}},1500);
  window.__habd={vis,spawn,place,DECOR,SLOTS,state,rit,show:(on)=>{habOn=on;refreshPanel()}};
  refreshPanel();
}
