/* castle.js — Castillo de la Garza Blanca (lugar 10): castillo al estilo Himeji, dragón monumental que lo anuncia y festival.
   El castillo y el dragón se dibujan en una pasada superior (después del horizonte, para que las torres se recorten contra el cielo).
   Las torres pesadas se pintan una sola vez en lienzos auxiliares (sprites); por fotograma solo se copian y se añaden brillos y animación. */
import {clamp,lerp,hash,circ,rr,line,poly,mk,cap,hap} from './util.js';
import {V,G,view} from './state.js';
import {center,halfW,lmIndexAt,lmPos,lmType,CASTLE,nearCastle} from './world.js';
import {A} from './audio.js';
import {toast} from './ui.js';
import {DPR} from './canvas.js';

export const DRAGON_DS=750;   // el dragón está 750 unidades de río antes del castillo
const C={stone:'#a9abb2',stoneD:'#7c7f8a',stoneL:'#c8c9ce',pl:'#f6f3ea',plS:'#d8d4c6',tile:'#56627d',tileL:'#7b8dae',tileD:'#363f58',gold:'#e8bd4e',goldD:'#b58a24',red:'#c63a30',redD:'#8d2620',wood:'#5a3b2a',jade:'#2fae86'};
const LCOL=['#e24b3c','#f7efdf','#f2b84a','#f19ab7'];

/* ---------- posiciones: se calculan sobre el río real (curva y ancho) en cada punto s ---------- */
const F={s0:0,y0:0,k:0,N:0};
const px=(ds,side,off)=>{const s=F.s0+ds;return V.VW/2+center(s)-V.cs0+(side?side*(halfW(s)+off):off)};
const py=ds=>F.y0-ds;
const light=(x,y,r,a)=>{if(F.N>.03)V.lights.push([x,y,r,a*F.N])};

/* ---------- sprites (lienzos auxiliares) ---------- */
const SPR=new Map();
function sprite(key,w,h,ax,ay,fn){
  const q=Math.max(1,Math.min(2,DPR*view.U));
  let s=SPR.get(key);
  if(!s||s.q!==q){
    const cv=mk(Math.ceil(w*q),Math.ceil(h*q)),c=cv.getContext('2d');c.scale(q,q);c.translate(ax,ay);c.lineJoin='round';c.lineCap='round';
    s={cv,q,w,h,ax,ay,meta:fn(c)};SPR.set(key,s);
  }
  return s;
}
const blit=(g,s,x,y,k)=>g.drawImage(s.cv,x-s.ax*k,y-s.ay*k,s.w*k,s.h*k);
let glowSp=null;
function glowSprites(){
  if(glowSp)return glowSp;
  glowSp=LCOL.concat(['#ffd27a']).map(col=>{
    const cv=mk(48,48),c=cv.getContext('2d'),gr=c.createRadialGradient(24,24,0,24,24,24);
    const rgb=col==='#e24b3c'?'255,110,70':col==='#f7efdf'?'255,236,190':col==='#f2b84a'?'255,200,90':col==='#f19ab7'?'255,150,190':'255,210,120';
    gr.addColorStop(0,'rgba('+rgb+',.85)');gr.addColorStop(.35,'rgba('+rgb+',.32)');gr.addColorStop(1,'rgba('+rgb+',0)');c.fillStyle=gr;c.fillRect(0,0,48,48);return cv;
  });
  return glowSp;
}
function glowAt(g,i,x,y,r,a){if(a<.02)return;g.globalAlpha=a;g.drawImage(glowSprites()[i],x-r,y-r,r*2,r*2)}

/* ---------- piezas del castillo (se dibujan en un contexto c con el origen en el centro de la base) ---------- */
function stoneBase(c,w,wt,h){
  const p=()=>{c.beginPath();c.moveTo(-w/2,0);c.quadraticCurveTo(-wt/2-3,-h*.62,-wt/2,-h);c.lineTo(wt/2,-h);c.quadraticCurveTo(wt/2+3,-h*.62,w/2,0);c.closePath()};
  c.fillStyle='rgba(20,25,35,.26)';c.beginPath();c.ellipse(8,3,w/2+12,11,0,0,7);c.fill();
  p();const gr=c.createLinearGradient(-w/2,0,w/2,0);gr.addColorStop(0,'#c3c5ca');gr.addColorStop(.6,C.stone);gr.addColorStop(1,'#858894');c.fillStyle=gr;c.fill();
  c.save();p();c.clip();
  c.strokeStyle='rgba(55,58,72,.4)';c.lineWidth=1;
  for(let r=0,y=0;y>-h;r++,y-=8){line(c,-w/2,y,w/2,y);for(let x=-w/2+((r%2)*9);x<w/2;x+=17+((r*7)%5))line(c,x,y,x,y-8)}
  const sg=c.createLinearGradient(0,-h,0,0);sg.addColorStop(0,'rgba(255,255,255,.2)');sg.addColorStop(.35,'rgba(255,255,255,0)');sg.addColorStop(1,'rgba(30,30,45,.3)');c.fillStyle=sg;c.fillRect(-w/2,-h,w,h);
  c.restore();
  p();c.strokeStyle=C.stoneD;c.lineWidth=1.5;c.stroke();
  c.fillStyle=C.stoneL;c.fillRect(-wt/2-2,-h-3,wt+4,4);
}
function wall(c,yb,tw,th,nw,win){
  c.fillStyle=C.pl;c.fillRect(-tw/2,yb-th,tw,th);
  c.fillStyle=C.plS;c.fillRect(tw/2-tw*.15,yb-th,tw*.15,th);
  const sh=c.createLinearGradient(0,yb-th,0,yb);sh.addColorStop(0,'rgba(60,55,75,.32)');sh.addColorStop(.3,'rgba(60,55,75,0)');c.fillStyle=sh;c.fillRect(-tw/2,yb-th,tw,th);
  c.fillStyle='rgba(120,112,100,.45)';c.fillRect(-tw/2,yb-3,tw,3);
  c.fillStyle='rgba(90,70,55,.55)';c.fillRect(-tw/2,yb-th,tw,1.5);
  const ww=Math.max(6,Math.min(15,tw/(nw*2.3))),wh=th*.42,gap=tw/nw;
  for(let i=0;i<nw;i++){
    const cx=-tw/2+gap*(i+.5),cy=yb-th*.56;
    c.fillStyle='#2e3550';c.fillRect(cx-ww/2,cy-wh/2,ww,wh);
    c.strokeStyle='#6a4a36';c.lineWidth=1;c.strokeRect(cx-ww/2-.5,cy-wh/2-.5,ww+1,wh+1);
    c.strokeStyle='#505a82';for(let q=1;q<4;q++)line(c,cx-ww/2+ww*q/4,cy-wh/2,cx-ww/2+ww*q/4,cy+wh/2);
    win.push([cx-ww/2,cy-wh/2,ww,wh]);
  }
}
function roofTier(c,yTop,rw,rw2,rh){
  const yb=yTop+4,yt=yb-rh;
  const path=()=>{c.beginPath();c.moveTo(-rw/2,yb-4);c.quadraticCurveTo(0,yb+5,rw/2,yb-4);c.lineTo(rw2/2,yt);c.lineTo(-rw2/2,yt);c.closePath()};
  const gr=c.createLinearGradient(0,yt,0,yb);gr.addColorStop(0,C.tileL);gr.addColorStop(1,C.tile);
  path();c.fillStyle=gr;c.fill();
  c.save();path();c.clip();
  c.strokeStyle='rgba(25,32,55,.4)';c.lineWidth=1;
  const m=Math.round(rw/7);
  for(let i=0;i<=m;i++){const u=i/m;line(c,-rw/2+rw*u,yb,-rw2/2+rw2*u,yt)}
  c.strokeStyle='rgba(25,32,55,.22)';
  for(let r=1;r<4;r++){const u=r/4,yy=lerp(yb,yt,u),hw2=lerp(rw,rw2,u)/2;line(c,-hw2,yy,hw2,yy)}
  c.restore();
  c.strokeStyle=C.pl;c.lineWidth=3;c.beginPath();c.moveTo(-rw/2,yb-4);c.quadraticCurveTo(0,yb+5,rw/2,yb-4);c.stroke();
  c.strokeStyle=C.tileD;c.lineWidth=2;c.setLineDash([3,2]);c.beginPath();c.moveTo(-rw/2+1,yb-1.2);c.quadraticCurveTo(0,yb+7.8,rw/2-1,yb-1.2);c.stroke();c.setLineDash([]);
  c.strokeStyle=C.pl;c.lineWidth=2.2;line(c,-rw/2,yb-4,-rw2/2,yt);line(c,rw/2,yb-4,rw2/2,yt);
  c.fillStyle=C.gold;circ(c,-rw/2+1,yb-5,3);c.fill();circ(c,rw/2-1,yb-5,3);c.fill();
}
function gableKara(c,cx,yb,gw,gh){
  const y0=yb-3;
  const P=()=>{c.beginPath();c.moveTo(cx-gw,y0);c.bezierCurveTo(cx-gw*.9,y0-gh*.25,cx-gw*.32,y0-gh*.5,cx-gw*.14,y0-gh*.88);c.quadraticCurveTo(cx,y0-gh*1.12,cx+gw*.14,y0-gh*.88);c.bezierCurveTo(cx+gw*.32,y0-gh*.5,cx+gw*.9,y0-gh*.25,cx+gw,y0);c.closePath()};
  P();c.fillStyle=C.pl;c.fill();
  P();c.strokeStyle=C.tileD;c.lineWidth=4.4;c.stroke();
  P();c.strokeStyle=C.tileL;c.lineWidth=2;c.stroke();
  c.fillStyle='#463838';c.beginPath();c.ellipse(cx,y0-gh*.34,gw*.15,gh*.13,0,0,7);c.fill();
  c.fillStyle=C.gold;circ(c,cx,y0-gh*1.08,2.6);c.fill();circ(c,cx,y0-gh*.55,1.8);c.fill();
}
function gableChi(c,cx,yb,gw,gh){
  const y0=yb-3;
  const P=()=>{c.beginPath();c.moveTo(cx-gw,y0);c.lineTo(cx,y0-gh);c.lineTo(cx+gw,y0);c.closePath()};
  P();c.fillStyle=C.pl;c.fill();
  P();c.strokeStyle=C.tileD;c.lineWidth=4;c.stroke();
  P();c.strokeStyle=C.tileL;c.lineWidth=1.8;c.stroke();
  c.strokeStyle='#6a4a36';c.lineWidth=1;line(c,cx,y0-gh*.9,cx,y0-1);line(c,cx-gw*.45,y0-gh*.5,cx-gw*.45,y0-1);line(c,cx+gw*.45,y0-gh*.5,cx+gw*.45,y0-1);
  c.fillStyle=C.gold;circ(c,cx,y0-gh-1,2.4);c.fill();
}
/* shachihoko: pez-tigre dorado de los remates del tejado */
function shachi(c,x,y,d){
  c.strokeStyle=C.goldD;c.lineWidth=6.4;c.beginPath();c.moveTo(x,y);c.bezierCurveTo(x+d*2,y-7,x-d*2,y-12,x+d*2,y-18);c.bezierCurveTo(x+d*4,y-22,x+d*9,y-22,x+d*10,y-29);c.stroke();
  c.strokeStyle=C.gold;c.lineWidth=4.4;c.beginPath();c.moveTo(x,y);c.bezierCurveTo(x+d*2,y-7,x-d*2,y-12,x+d*2,y-18);c.bezierCurveTo(x+d*4,y-22,x+d*9,y-22,x+d*10,y-29);c.stroke();
  c.strokeStyle=C.gold;c.lineWidth=1.6;for(let i=-1;i<=1;i++)line(c,x+d*10,y-29,x+d*(10+i*4),y-35-Math.abs(i)*-1);
  c.fillStyle=C.gold;circ(c,x,y-2,4.6);c.fill();c.fillStyle='#3a2a18';circ(c,x+d*1.5,y-3,1);c.fill();
  c.fillStyle=C.red;poly(c,[[x-d*3,y-9],[x-d*7,y-12],[x-d*3,y-13]]);c.fill();
}
function topRoof(c,yTop,rw,rh,withGable){
  const rw2=rw*.70;roofTier(c,yTop,rw,rw2,rh);
  const yb=yTop+4,yt=yb-rh;
  c.fillStyle=C.tileD;rr(c,-rw2/2-7,yt-7,rw2+14,9,3);c.fill();
  c.fillStyle=C.tileL;c.fillRect(-rw2/2-5,yt-6,rw2+10,3);
  c.fillStyle=C.pl;c.fillRect(-rw2/2-5,yt+1,rw2+10,1.8);
  c.fillStyle=C.gold;circ(c,-rw2/2-7,yt-2,3.6);c.fill();circ(c,rw2/2+7,yt-2,3.6);c.fill();
  shachi(c,-rw2/2-4,yt-4,-1);shachi(c,rw2/2+4,yt-4,1);
  if(withGable)gableChi(c,0,yb,rw*.12,rh*.74);
}
/* Torre completa: base de piedra con talud curvo + pisos de yeso blanco con techos escalonados */
function towerH(S){return S.sh+S.tiers.reduce((a,T,i)=>a+T.th+(i<S.tiers.length-1?T.rh*.78:T.rh+8),0)+42}
function tower(c,S){
  const win=[],ty=[],eaves=[];
  stoneBase(c,S.w,S.wt,S.sh);
  if(S.door){
    c.fillStyle='#d4d5da';c.beginPath();c.moveTo(-22,0);c.lineTo(-22,-20);c.quadraticCurveTo(0,-38,22,-20);c.lineTo(22,0);c.closePath();c.fill();
    c.fillStyle='#2a1f1a';c.beginPath();c.moveTo(-17,0);c.lineTo(-17,-19);c.quadraticCurveTo(0,-32,17,-19);c.lineTo(17,0);c.closePath();c.fill();
    c.fillStyle='#8a2e22';c.fillRect(-15,-19,14,19);c.fillRect(1,-19,14,19);
    c.fillStyle=C.gold;for(let i=0;i<3;i++)for(let j=0;j<4;j++){circ(c,-12+i*4.5,-16+j*4.2,.9);c.fill();circ(c,3.5+i*4.5,-16+j*4.2,.9);c.fill()}
  }
  let y=-S.sh;
  S.tiers.forEach((T,i)=>{
    const last=i===S.tiers.length-1;
    wall(c,y,T.tw,T.th,T.nw,win);ty.push(y-T.th/2);
    const yTop=y-T.th;
    if(i<2)eaves.push([yTop+6,T.rw]);
    if(last)topRoof(c,yTop,T.rw,T.rh,true);
    else{
      roofTier(c,yTop,T.rw,S.tiers[i+1].tw+6,T.rh);
      if(T.g==='kara')gableKara(c,0,yTop+4,T.gw,T.gh);
      else if(T.g==='chi2'){gableChi(c,-T.rw*.2,yTop+4,T.gw,T.gh);gableChi(c,T.rw*.2,yTop+4,T.gw,T.gh)}
      else if(T.g==='kara+chi'){gableKara(c,0,yTop+4,T.gw,T.gh);gableChi(c,-T.rw*.3,yTop+4,T.gw*.62,T.gh*.7);gableChi(c,T.rw*.3,yTop+4,T.gw*.62,T.gh*.7)}
    }
    y=yTop-T.rh*.78;
  });
  return {win,ty,eaves,top:y};
}
const SPEC={
  T:{w:196,wt:144,sh:88,tiers:[{tw:126,th:40,nw:5,rw:200,rh:34,g:'kara+chi',gw:30,gh:25},{tw:106,th:36,nw:4,rw:166,rh:30,g:'kara',gw:28,gh:22},{tw:90,th:32,nw:3,rw:140,rh:28,g:'chi2',gw:20,gh:18},{tw:76,th:30,nw:3,rw:118,rh:26,g:'kara',gw:22,gh:18},{tw:64,th:28,nw:3,rw:130,rh:34}]},
  K:{w:100,wt:76,sh:44,tiers:[{tw:62,th:30,nw:2,rw:96,rh:26,g:'kara',gw:20,gh:17},{tw:50,th:24,nw:2,rw:90,rh:30}]},
  G:{w:140,wt:112,sh:36,door:true,tiers:[{tw:90,th:28,nw:3,rw:136,rh:30}]},
};
function towerSprite(name){
  const S=SPEC[name],H=towerH(S),W=S.w+36;
  return sprite('tw'+name,W,H+14,W/2,H+8,c=>tower(c,S));
}
/* brillo de las ventanas y luces de cada piso (de noche las ventanas se encienden) */
function drawTower(g,name,x,y,k,hasLights){
  const s=towerSprite(name);blit(g,s,x,y,k);
  const N=F.N;if(N<.04)return;
  g.fillStyle='rgba(255,208,120,'+(.92*N)+')';g.beginPath();
  for(const w of s.meta.win)g.rect(x+w[0]*k,y+w[1]*k,w[2]*k,w[3]*k);
  g.fill();
  if(hasLights)s.meta.ty.forEach(t=>light(x,y+t*k,name==='T'?78:56,.8));
}
/* farolillos colgados bajo los aleros del festival */
function eaveLanterns(g,name,x,y,k,ph){
  const s=towerSprite(name);
  s.meta.eaves.forEach(([ey,rw],r)=>{
    const n=Math.round(rw/26),cols=r?[0,2]:[0,1,0,3];
    for(let i=0;i<n;i++){
      const u=(i+.5)/n,ex=(u-.5)*(rw-14),dy=4*(1-Math.pow(2*u-1,2)),sw=Math.sin(V.t*1.5+i+ph+r)*1.1;
      const lx=x+ex*k+sw,ly=y+(ey+dy+8)*k,ci=cols[i%cols.length];
      if(F.N>.04)glowAt(g,ci,lx,ly,18*k,.65*F.N);
      g.globalAlpha=1;paperLantern(g,lx,ly,ci,.56*k);
    }
  });
  g.globalAlpha=1;
}
/* garzas blancas que sobrevuelan el castillo */
function herons(g,x,y,N){
  for(let i=0;i<5;i++){
    const a=V.t*.22+i*1.26,hx=x+Math.cos(a)*(150+i*18),hy=y+Math.sin(a)*(34+i*4)+i*16,dir=-Math.sin(a)>0?1:-1,fl=Math.sin(V.t*4.2+i*2)*7;
    g.fillStyle='rgba(20,30,40,.14)';g.beginPath();g.ellipse(hx+10,hy+46,9,2.6,0,0,7);g.fill();
    g.fillStyle='#f6f6f2';g.strokeStyle='#e4e6e8';
    g.beginPath();g.ellipse(hx-dir*1,hy,9,3.6,0,0,7);g.fill();
    g.beginPath();g.moveTo(hx-3,hy-1);g.quadraticCurveTo(hx-3,hy-16+fl,hx-14,hy-12-fl*.5);g.quadraticCurveTo(hx-8,hy-4,hx-3,hy+1);g.fill();
    g.beginPath();g.moveTo(hx+3,hy-1);g.quadraticCurveTo(hx+3,hy-16+fl,hx+14,hy-12-fl*.5);g.quadraticCurveTo(hx+8,hy-4,hx+3,hy+1);g.fill();
    g.lineWidth=2;g.beginPath();g.moveTo(hx+dir*7,hy-1);g.quadraticCurveTo(hx+dir*11,hy-5,hx+dir*13,hy-6);g.stroke();
    g.fillStyle='#e8a54a';poly(g,[[hx+dir*13,hy-7],[hx+dir*19,hy-5.5],[hx+dir*13,hy-5]]);g.fill();
    g.strokeStyle='#9a9a9a';g.lineWidth=1;line(g,hx-dir*8,hy+1,hx-dir*17,hy+4);
  }
}

/* ---------- elementos dinámicos (baratos) ---------- */
function bankPath(g,side,ds0,ds1,off0,off1,step){
  g.beginPath();
  for(let ds=ds0;ds<=ds1+.1;ds+=step)g[ds===ds0?'moveTo':'lineTo'](px(ds,side,off0),py(ds));
  for(let ds=ds1;ds>=ds0-.1;ds-=step)g.lineTo(px(ds,side,off1),py(ds));
  g.closePath();
}
function platform(g,side){
  bankPath(g,side,-6,314,34,900,48);g.fillStyle='#d3ccb6';g.fill();
  g.strokeStyle='rgba(120,108,84,.1)';g.lineWidth=1;g.beginPath();
  for(let ds=10;ds<314;ds+=14){g.moveTo(px(ds,side,40),py(ds));g.lineTo(px(ds,side,900),py(ds))}
  g.stroke();
  bankPath(g,side,-6,314,34,40,48);g.fillStyle='#e9e4d2';g.fill();
}
function wallStrip(g,side){   // muro blanco con talud de piedra a lo largo de la orilla
  const a=-34,b=316;
  bankPath(g,side,a,b,-3,7,24);g.fillStyle='#6e717c';g.fill();
  bankPath(g,side,a,b,7,27,24);g.fillStyle='#a8aab2';g.fill();
  g.strokeStyle='rgba(55,58,72,.35)';g.lineWidth=1;g.beginPath();
  for(let ds=a;ds<=b;ds+=13){g.moveTo(px(ds,side,7),py(ds));g.lineTo(px(ds,side,27),py(ds))}g.stroke();
  bankPath(g,side,a,b,27,41,24);g.fillStyle=C.pl;g.fill();
  bankPath(g,side,a,b,38,41,24);g.fillStyle=C.plS;g.fill();
  g.fillStyle='#2e3550';
  for(let ds=a+10,i=0;ds<=b;ds+=20,i++){
    const x=px(ds,side,33),y=py(ds);
    if(i%3===0){g.beginPath();g.arc(x,y,2.6,0,7);g.fill()}else if(i%3===1)g.fillRect(x-2.4,y-2.4,4.8,4.8);else{poly(g,[[x-3,y+2.6],[x+3,y+2.6],[x,y-3]]);g.fill()}
  }
  bankPath(g,side,a,b,41,55,24);g.fillStyle=C.tile;g.fill();
  bankPath(g,side,a,b,41,48,24);g.fillStyle=C.tileL;g.fill();
  bankPath(g,side,a,b,47.5,49.5,24);g.fillStyle=C.pl;g.fill();
}
function wallH(g,x0,x1,y,rev){   // muro frontal con troneras, de x0 a x1
  const w=x1-x0;if(w<=0)return;
  g.fillStyle='#8f929c';g.fillRect(x0,y-14,w,14);
  g.strokeStyle='rgba(55,58,72,.4)';g.lineWidth=1;g.beginPath();for(let x=x0;x<x1;x+=16){g.moveTo(x,y-14);g.lineTo(x,y)}g.moveTo(x0,y-7);g.lineTo(x1,y-7);g.stroke();
  g.fillStyle=C.pl;g.fillRect(x0,y-32,w,18);g.fillStyle='rgba(60,55,75,.25)';g.fillRect(x0,y-32,w,3);
  g.fillStyle='#2e3550';
  for(let x=x0+10,i=0;x<x1;x+=20,i++){
    if(i%3===0){g.beginPath();g.arc(x,y-23,2.8,0,7);g.fill()}else if(i%3===1)g.fillRect(x-2.6,y-25.6,5.2,5.2);else{poly(g,[[x-3.2,y-20.4],[x+3.2,y-20.4],[x,y-26]]);g.fill()}
  }
  g.fillStyle=C.tile;g.fillRect(x0,y-42,w,10);g.fillStyle=C.tileL;g.fillRect(x0,y-42,w,3);g.fillStyle=C.pl;g.fillRect(x0,y-33.5,w,2);
}
function corridorH(g,x0,x1,y){   // corredor cubierto entre torres (vista frontal)
  const w=x1-x0;
  g.fillStyle='rgba(20,25,35,.22)';g.fillRect(x0+4,y-2,w,6);
  g.fillStyle='#9a9ca4';g.fillRect(x0,y-8,w,8);
  g.fillStyle=C.pl;g.fillRect(x0,y-30,w,22);g.fillStyle=C.plS;g.fillRect(x0,y-30,w,2);
  g.fillStyle='#2e3550';for(let x=x0+9;x<x1-9;x+=17)g.fillRect(x-4,y-24,8,9);
  poly(g,[[x0-6,y-29],[x1+6,y-29],[x1-2,y-48],[x0+2,y-48]]);g.fillStyle=C.tile;g.fill();
  g.strokeStyle='rgba(25,32,55,.35)';g.lineWidth=1;g.beginPath();for(let x=x0;x<=x1;x+=8){g.moveTo(x-6+(x-x0)*12/w,y-29);g.lineTo(x+2+(x-x0)*-4/w,y-48)}g.stroke();
  g.strokeStyle=C.pl;g.lineWidth=2;line(g,x0-6,y-29,x1+6,y-29);
  g.fillStyle=C.gold;circ(g,x0-5,y-30,2.6);g.fill();circ(g,x1+5,y-30,2.6);g.fill();
}
function corridorV(g,x,y0,y1){   // corredor visto desde arriba: techo a dos aguas
  g.fillStyle='rgba(20,25,35,.2)';g.fillRect(x-14,y1+4,32,y0-y1);
  g.fillStyle=C.tileL;g.fillRect(x-17,y1,17,y0-y1);g.fillStyle=C.tile;g.fillRect(x,y1,17,y0-y1);
  g.fillStyle=C.pl;g.fillRect(x-1.2,y1,2.4,y0-y1);g.fillRect(x-17,y1,2,y0-y1);g.fillRect(x+15,y1,2,y0-y1);
  g.strokeStyle='rgba(25,32,55,.3)';g.lineWidth=1;g.beginPath();for(let y=y1+4;y<y0;y+=6){g.moveTo(x-16,y);g.lineTo(x-1,y);g.moveTo(x+1,y);g.lineTo(x+16,y)}g.stroke();
}
function cherry(g,x,y,r,sd,sway){
  g.fillStyle='rgba(70,40,60,.2)';g.beginPath();g.ellipse(x+9,y+r*.2,r*1.0,r*.38,0,0,7);g.fill();
  g.fillStyle='#6a4a3c';g.fillRect(x-3,y-r*.55,6,r*.6);
  const cy=y-r*.95+sway;
  g.fillStyle='#ee9fb8';circ(g,x,cy,r);g.fill();g.fillStyle='#f4b6c8';circ(g,x-r*.2,cy-r*.2,r*.8);g.fill();g.fillStyle='#fbd6e1';circ(g,x-r*.35,cy-r*.35,r*.5);g.fill();
  g.fillStyle='rgba(255,240,245,.9)';for(let i=0;i<6;i++){const a=i*2.1+sd*9;circ(g,x+Math.cos(a)*r*.6,cy+Math.sin(a)*r*.6,2.1);g.fill()}
}
function pine(g,x,y,i){   // pino recortado (niwaki): nubes verdes sobre un tronco
  g.fillStyle='rgba(30,50,35,.25)';g.beginPath();g.ellipse(x+8,y+3,24,8,0,0,7);g.fill();
  g.strokeStyle='#5a3b2a';g.lineWidth=4;line(g,x,y,x+(i%2?3:-3),y-24);
  [[0,-26,15],[-13,-17,11],[13,-19,11],[1,-37,10]].forEach(([dx,dy,r],j)=>{g.fillStyle=j%2?'#3f7a4a':'#356b40';g.beginPath();g.ellipse(x+dx,y+dy,r*1.3,r*.7,0,0,7);g.fill();g.fillStyle='rgba(150,210,140,.28)';g.beginPath();g.ellipse(x+dx-2,y+dy-3,r*.9,r*.35,0,0,7);g.fill()});
}
function paperLantern(g,x,y,ci,s){
  g.fillStyle=LCOL[ci];g.beginPath();g.ellipse(x,y,5.6*s,6.6*s,0,0,7);g.fill();
  g.strokeStyle='rgba(90,40,30,.45)';g.lineWidth=.8;for(let i=-1;i<=1;i++){g.beginPath();g.ellipse(x,y,5.6*s*Math.abs(i||.01)*.9+.2,6.6*s,0,0,7);g.stroke()}
  g.fillStyle='#3a2a20';g.fillRect(x-3*s,y-7.4*s,6*s,2);g.fillRect(x-3*s,y+5.6*s,6*s,2);
  g.fillStyle='rgba(255,255,255,.5)';g.beginPath();g.ellipse(x-1.6*s,y-1.8*s,1.5*s,2.4*s,0,0,7);g.fill();
}
function stoneLantern(g,x,y){
  g.fillStyle='rgba(20,30,30,.22)';g.beginPath();g.ellipse(x+5,y+2,10,4,0,0,7);g.fill();
  g.fillStyle='#9d9fa6';g.fillRect(x-5,y-4,10,5);g.fillRect(x-2.2,y-16,4.4,13);
  g.fillStyle='#b9bac1';g.fillRect(x-7,y-24,14,9);
  g.fillStyle='#ffd48a';g.fillRect(x-3.4,y-22.6,6.8,6);
  g.fillStyle='#8c8e96';poly(g,[[x-10,y-24],[x+10,y-24],[x+3,y-31],[x-3,y-31]]);g.fill();circ(g,x,y-32,2);g.fill();
  light(x,y-19,62,.7);
}
function person(g,x,y,col,ph,lant){
  const sw=Math.sin(V.t*1.3+ph)*1.2;
  g.fillStyle='rgba(15,25,30,.28)';g.beginPath();g.ellipse(x+3,y+3,7,3,0,0,7);g.fill();
  g.fillStyle=col;g.beginPath();g.ellipse(x,y-5,5.4,7.6,0,0,7);g.fill();
  g.fillStyle='#f3d8a8';g.fillRect(x-5.4,y-7.2,10.8,2.4);
  g.fillStyle='#d44b6a';g.fillRect(x-5.2,y-3.4,10.4,2.6);
  g.fillStyle='#f2d2b0';circ(g,x+sw*.3,y-14,3.6);g.fill();
  g.fillStyle='#2a2028';g.beginPath();g.arc(x+sw*.3,y-14.4,3.7,Math.PI*1.05,Math.PI*1.95);g.fill();circ(g,x+sw*.3,y-17.4,1.8);g.fill();
  if(lant){
    g.strokeStyle='#4a3828';g.lineWidth=1;line(g,x+5,y-8,x+9+sw,y-12);
    glowAt(g,0,x+9+sw,y-8,15,.55*F.N);g.globalAlpha=1;
    paperLantern(g,x+9+sw,y-6,0,.62);
    light(x+9,y-8,46,.55);
  }
}
function yatai(g,x,y,ci,t){   // puesto de comida con toldo rayado y farolillos
  g.fillStyle='rgba(15,25,30,.25)';g.fillRect(x-31,y-2,70,8);
  g.fillStyle='#7a5238';g.fillRect(x-30,y-22,60,22);g.fillStyle='#8f6444';g.fillRect(x-30,y-22,60,4);
  g.fillStyle=['#e9a04a','#d8d6c8','#e97a6a'][ci%3];for(let i=0;i<5;i++)circ(g,x-22+i*11,y-26,3.4),g.fill();
  const cols=ci%2?['#2f5a99','#f4efe2']:['#c63a30','#f4efe2'];
  for(let i=0;i<7;i++){g.fillStyle=cols[i%2];poly(g,[[x-35+i*10,y-24],[x-25+i*10,y-24],[x-26+i*10,y-48],[x-34+i*10,y-48]]);g.fill()}
  g.fillStyle='rgba(30,20,20,.25)';g.fillRect(x-36,y-26,72,3);
  g.fillStyle=cols[0];g.beginPath();g.moveTo(x-36,y-24);for(let i=0;i<=7;i++)g.lineTo(x-36+i*10,y-24+(i%2?0:4));g.lineTo(x+36,y-24);g.closePath();g.fill();
  g.strokeStyle='#4a3828';g.lineWidth=2;line(g,x-34,y-48,x-34,y);line(g,x+34,y-48,x+34,y);
  paperLantern(g,x-30,y-34,ci%4,.9);paperLantern(g,x+30,y-34,(ci+2)%4,.9);
  if(F.N>.04){glowAt(g,ci%4,x-30,y-34,26,.7*F.N);glowAt(g,(ci+2)%4,x+30,y-34,26,.7*F.N);g.globalAlpha=1}
  light(x,y-24,88,.8);
}
function nobori(g,x,y,col,ph){   // estandarte vertical con mástil y ondulación
  g.strokeStyle='#4a3828';g.lineWidth=2.2;line(g,x,y,x,y-92);line(g,x,y-90,x+17,y-90);
  const w=Math.sin(V.t*2.1+ph)*2.6,w2=Math.sin(V.t*2.1+ph+1.4)*2.6;
  g.fillStyle=col[0];g.beginPath();g.moveTo(x+1,y-88);g.lineTo(x+16,y-88);g.lineTo(x+16+w2,y-60);g.lineTo(x+14+w,y-32);g.lineTo(x+1+w*.4,y-32);g.closePath();g.fill();
  g.fillStyle=col[1];g.beginPath();g.ellipse(x+8.5+w*.5,y-70,4.2,4.2,0,0,7);g.fill();g.fillRect(x+7+w*.4,y-62,3,18);
  g.fillStyle='rgba(0,0,0,.14)';g.fillRect(x+13+w2*.5,y-86,3,52);
  g.fillStyle=C.gold;circ(g,x,y-93,2.4);g.fill();
}
function pennants(g,x0,y0,x1,y1,ph){
  g.strokeStyle='#5a4638';g.lineWidth=1.2;line(g,x0,y0,x1,y1);
  const n=Math.max(2,Math.round(Math.hypot(x1-x0,y1-y0)/13));
  for(let i=1;i<n;i++){
    const u=i/n,x=lerp(x0,x1,u),y=lerp(y0,y1,u),w=Math.sin(V.t*3+ph+i)*1.6;
    g.fillStyle=['#e24b3c','#f2b84a','#f7efdf','#4ea6a0','#f19ab7'][i%5];poly(g,[[x-4,y],[x+4,y],[x+w,y+11]]);g.fill();
  }
}
function streamers(g,x,y,ph){
  g.strokeStyle='#4a3828';g.lineWidth=2;line(g,x,y,x,y-80);
  const cols=['#e24b3c','#f2b84a','#4ea6a0','#f19ab7','#7a7ad8'];
  for(let i=0;i<5;i++){
    g.strokeStyle=cols[i];g.lineWidth=2.2;g.beginPath();g.moveTo(x,y-78+i*2);
    const dx=(i-2)*7,w=Math.sin(V.t*2.4+ph+i*.9)*5;
    g.bezierCurveTo(x+dx*.5+w,y-66,x+dx+w*1.3,y-52,x+dx*1.2+w*.6,y-30-i*4);g.stroke();
  }
  g.fillStyle=C.gold;circ(g,x,y-81,2.6);g.fill();
}
function garland(g,ds,gi){   // guirnalda de farolillos de orilla a orilla
  const y=py(ds),xl=px(ds,-1,8),xr=px(ds,1,8),H=48,sag=26+Math.sin(V.t*.9+gi)*1.5,y1=y-H;
  g.strokeStyle='#4a3828';g.lineWidth=2.4;line(g,xl,y,xl,y1);line(g,xr,y,xr,y1);
  g.fillStyle=C.gold;circ(g,xl,y1-1,2.6);g.fill();circ(g,xr,y1-1,2.6);g.fill();
  g.strokeStyle='#3c2c22';g.lineWidth=1.3;g.beginPath();g.moveTo(xl,y1);g.quadraticCurveTo((xl+xr)/2,y1+sag*2,xr,y1);g.stroke();
  const n=Math.max(7,Math.round((xr-xl)/36));
  for(let i=1;i<n;i++){
    const u=i/n,yy=y1+4*sag*u*(1-u),x=lerp(xl,xr,u),bob=Math.sin(V.t*1.6+gi+i)*1.2;   // la curva cuadrática cuelga sag en el centro
    const ci=(i+gi)%4;
    g.strokeStyle='#3c2c22';g.lineWidth=.9;line(g,x,yy,x,yy+5);
    if(F.N>.04)glowAt(g,ci,x+bob,yy+12,20,.72*F.N);
    paperLantern(g,x+bob,yy+12,ci,1);
    if(i%2===0){g.fillStyle=['#e24b3c','#f2b84a','#4ea6a0'][i%3];poly(g,[[x-3,yy+20],[x+3,yy+20],[x,yy+32]]);g.fill()}
  }
  g.globalAlpha=1;
  light((xl+xr)/2,y1+sag+10,120,.7);light(lerp(xl,xr,.2),y1+sag*.7+10,70,.55);light(lerp(xl,xr,.8),y1+sag*.7+10,70,.55);
}
function bridge(g){
  const y=py(-40),xl=px(-40,-1,0)-52,xr=px(-40,1,0)+52,w=xr-xl;
  g.fillStyle='#b6392d';rr(g,xl,y-24,w,48,5);g.fill();
  g.fillStyle='#c9473a';g.fillRect(xl+6,y-17,w-12,34);
  g.strokeStyle='#7d2a22';g.lineWidth=1.1;g.beginPath();for(let x=xl+10;x<xr-4;x+=11){g.moveTo(x,y-17);g.lineTo(x,y+17)}g.stroke();
  g.fillStyle='rgba(255,255,255,.1)';g.fillRect(xl+6,y-17,w-12,6);
  for(const ry of [-26,23]){g.fillStyle='#d9483a';g.fillRect(xl,y+ry,w,5);g.fillStyle='#8d2620';g.fillRect(xl,y+ry+(ry<0?4:0),w,1.5)}
  for(let x=xl+6;x<=xr-4;x+=38)for(const ry of [-24,25]){g.fillStyle='#a53126';g.fillRect(x-2,y+ry-4,4,8);g.fillStyle=C.gold;circ(g,x,y+ry-5,3.2);g.fill()}
  [[xl+10,y-25],[xr-10,y-25],[xl+10,y+27],[xr-10,y+27]].forEach(([lx,ly],i)=>{paperLantern(g,lx,ly-15,0,.8);if(F.N>.04){glowAt(g,0,lx,ly-15,24,.7*F.N);g.globalAlpha=1}light(lx,ly-15,70,.8)});
}
function stairs(g,side,ds0,ds1,off0,off1){
  const n=Math.round((ds1-ds0)/6);
  for(let i=0;i<n;i++){const d=ds0+i*6;bankPath(g,side,d,d+6,off0,off1,6);g.fillStyle=i%2?'#c8c9ce':'#b3b5bb';g.fill()}
  g.strokeStyle='rgba(60,60,75,.4)';g.lineWidth=1;bankPath(g,side,ds0,ds1,off0,off1,6);g.stroke();
}
function taikoStage(g,x,y){
  const now=performance.now(),dt=now-(A.beatAt||0),live=A.beatAt&&now-A.beatAt<1200;
  const hit=live?(dt>=0&&dt<150?1-dt/150:0):(((V.t%.42)/.42)<.2?1-((V.t%.42)/.42)/.2:0);
  g.fillStyle='rgba(15,25,30,.26)';g.fillRect(x-50,y+4,108,8);
  g.fillStyle='#8d2620';rr(g,x-52,y-14,104,22,4);g.fill();g.fillStyle='#b83a2e';rr(g,x-52,y-14,104,14,4);g.fill();
  g.fillStyle=C.gold;g.fillRect(x-52,y-1,104,2.4);
  // tambor grande (odaiko)
  const dy=y-34;
  g.fillStyle='#3d1b14';g.beginPath();g.ellipse(x,dy+12,24,10,0,0,Math.PI);g.fill();
  g.fillStyle='#7c2a1e';g.fillRect(x-24,dy-12,48,24);g.fillStyle='#9b3a28';g.fillRect(x-24,dy-12,16,24);
  g.strokeStyle='#d9a84a';g.lineWidth=1.2;for(let i=-3;i<=3;i++)line(g,x+i*7,dy-11,x+i*7+(i%2?3:-3),dy+11);
  g.fillStyle=C.gold;for(let i=-3;i<=3;i++){circ(g,x+i*7,dy-9,1.3);g.fill();circ(g,x+i*7,dy+9,1.3);g.fill()}
  g.fillStyle='#f0e2c0';g.beginPath();g.ellipse(x,dy-12,24,8.5,0,0,7);g.fill();
  g.fillStyle='#d8c294';g.beginPath();g.ellipse(x,dy-12,17,5.6,0,0,7);g.fill();
  g.strokeStyle='#6a4a30';g.lineWidth=1;g.beginPath();g.ellipse(x,dy-12,24,8.5,0,0,7);g.stroke();
  if(hit>0){g.strokeStyle='rgba(255,240,200,'+hit*.8+')';g.lineWidth=2;g.beginPath();g.ellipse(x,dy-12,24+hit*14,8.5+hit*5,0,0,7);g.stroke()}
  [-1,1].forEach(sd=>{const sx=x+sd*40;g.fillStyle='#8d2620';g.fillRect(sx-8,dy+4,16,12);g.fillStyle='#f0e2c0';g.beginPath();g.ellipse(sx,dy+4,8,3.2,0,0,7);g.fill();});
  // tamborileros (siluetas con hachimaki blanco y bachi)
  [-1,1].forEach((sd,i)=>{
    const bx=x+sd*34,by=y-14,ph=i*.5,sw=hit*(i?1:-1);
    g.fillStyle='#2a2f4a';g.beginPath();g.ellipse(bx,by-6,6,8,0,0,7);g.fill();
    g.fillStyle='#f2d2b0';circ(g,bx,by-17,3.6);g.fill();g.fillStyle='#f7efdf';g.fillRect(bx-4,by-19.4,8,2);
    g.strokeStyle='#2a2f4a';g.lineWidth=2.4;
    const up=(i?Math.sin(V.t*8):Math.sin(V.t*8+1.6))*.15+(hit>0?hit:0);
    line(g,bx,by-9,bx-sd*10,by-14-up*10);
    g.strokeStyle='#e6d2a8';g.lineWidth=1.8;line(g,bx-sd*10,by-14-up*10,bx-sd*21,by-22-up*14);
  });
  paperLantern(g,x-50,y-26,0,.8);paperLantern(g,x+50,y-26,2,.8);
  if(F.N>.04){glowAt(g,0,x-50,y-26,22,.7*F.N);glowAt(g,2,x+50,y-26,22,.7*F.N);g.globalAlpha=1}
  light(x,y-26,100,.8);
}

/* ---------- dragón monumental ---------- */
const DR={roar:99,armed:null,mx:0,my:0,vis:0,sp:new Float32Array(72*7),spi:0};
const SD=.95;      // escala del dragón
const SPINE=[[-78,-14,4],[-86,2,7],[-66,14,12],[-26,22,16],[26,18,19],[62,2,20],[68,-28,20],[44,-54,20],[-6,-58,20],[-46,-80,19],[-44,-112,18],[-8,-136,18],[34,-156,17],[48,-186,16],[32,-212,15],[6,-226,14]];
function catmull(P,steps){
  const out=[];
  for(let i=0;i<P.length-1;i++){
    const p0=P[Math.max(0,i-1)],p1=P[i],p2=P[i+1],p3=P[Math.min(P.length-1,i+2)];
    for(let s=0;s<steps;s++){
      const t=s/steps,t2=t*t,t3=t2*t,f=(a,b,c,d)=>.5*((2*b)+(-a+c)*t+(2*a-5*b+4*c-d)*t2+(-a+3*b-3*c+d)*t3);
      out.push([f(p0[0],p1[0],p2[0],p3[0]),f(p0[1],p1[1],p2[1],p3[1]),f(p0[2],p1[2],p2[2],p3[2])]);
    }
  }
  out.push(P[P.length-1].slice());
  return out;
}
function dragonBody(c){
  const pts=catmull(SPINE,16);
  pts.forEach((p,i)=>{
    const [x,y,r]=p,pr=pts[Math.max(0,i-2)],nx=pts[Math.min(pts.length-1,i+2)];
    let tx=nx[0]-pr[0],ty=nx[1]-pr[1];const tl=Math.hypot(tx,ty)||1;tx/=tl;ty/=tl;
    let nxn=-ty,nyn=tx;if(nyn>0){nxn=-nxn;nyn=-nyn}   // normal hacia arriba
    // espinas dorsales rojas y doradas
    if(i%5===0&&i>8){c.fillStyle=(i/5)%2?C.red:C.gold;const bx=x+nxn*r*.85,by=y+nyn*r*.85;poly(c,[[bx-tx*5,by-ty*5],[bx+tx*5,by+ty*5],[bx+nxn*11+tx*4,by+nyn*11+ty*4]]);c.fill()}
    c.fillStyle='#0d4538';circ(c,x,y,r+1.6);c.fill();
    const gr=c.createLinearGradient(x+nxn*r,y+nyn*r,x-nxn*r,y-nyn*r);gr.addColorStop(0,'#46d9a8');gr.addColorStop(.5,'#26ab80');gr.addColorStop(.74,'#d4ac4c');gr.addColorStop(1,'#f2d27a');
    c.fillStyle=gr;circ(c,x,y,r);c.fill();   // lomo de jade que pasa al vientre dorado
    if(i%4===0){   // escamas en filas: media luna dorada o roja
      c.strokeStyle=(i/4)%3===0?'#e8554a':C.gold;c.lineWidth=2.2;
      const ang=Math.atan2(nyn,nxn);
      for(const o of [-.55,0,.55]){c.beginPath();c.arc(x+Math.cos(ang+o)*r*.2,y+Math.sin(ang+o)*r*.2,r*.62,ang+o-.9,ang+o+.9);c.stroke()}
    }
    c.fillStyle='rgba(190,255,225,.28)';circ(c,x+nxn*r*.42,y+nyn*r*.42,r*.42);c.fill();
    if(i%3===0){c.fillStyle=C.gold;circ(c,x+nxn*r*.9,y+nyn*r*.9,1.6);c.fill()}
  });
  // garras doradas sujetando la perla
  c.strokeStyle=C.gold;c.lineWidth=2.6;for(let i=0;i<3;i++){c.beginPath();c.moveTo(58+i*2,-14-i*4);c.quadraticCurveTo(78+i*3,-20-i*4,78,-34-i*4);c.stroke()}
}
function dragonPedestal(c){
  c.fillStyle='rgba(15,25,30,.3)';c.beginPath();c.ellipse(8,14,86,26,0,0,7);c.fill();
  const tier=(rx,ry,y,h,col,col2)=>{c.fillStyle=col2;c.fillRect(-rx,y,rx*2,h);c.beginPath();c.ellipse(0,y+h,rx,ry,0,0,Math.PI);c.fill();c.fillStyle=col;c.beginPath();c.ellipse(0,y,rx,ry,0,0,7);c.fill();c.strokeStyle='rgba(50,52,65,.5)';c.lineWidth=1.2;c.beginPath();c.ellipse(0,y,rx,ry,0,0,7);c.stroke()};
  tier(86,26,0,20,'#b7b9c0','#8f929c');tier(66,20,-20,20,'#c4c5cb','#9a9da6');
  c.strokeStyle='rgba(60,70,90,.45)';c.lineWidth=1;for(let i=-5;i<=5;i++){line(c,i*13,-18,i*13+(i<0?-2:2),0)}
  c.strokeStyle='#4ea6a0';c.lineWidth=1.2;for(let i=0;i<8;i++){c.beginPath();c.arc(-70+i*20,8,6,Math.PI,0);c.stroke()}
  c.strokeStyle=C.gold;c.lineWidth=2.4;c.beginPath();c.ellipse(0,-20,66,20,0,0,Math.PI);c.stroke();
  c.strokeStyle=C.gold;c.lineWidth=1.6;c.beginPath();c.ellipse(0,0,86,26,0,0,Math.PI);c.stroke();
}
function dragonPearl(g,x,y,r,e){
  glowAt(g,2,x,y,r*3.2,.7+e*.3);g.globalAlpha=1;
  const gr=g.createRadialGradient(x-r*.3,y-r*.3,1,x,y,r);gr.addColorStop(0,'#fffbe6');gr.addColorStop(.5,'#ffd86a');gr.addColorStop(1,'#d9962a');
  g.fillStyle=gr;circ(g,x,y,r);g.fill();
  g.strokeStyle='rgba(255,255,255,.7)';g.lineWidth=1.2;g.beginPath();g.arc(x,y,r*.7,3.6,5.2);g.stroke();
}
function dragonHead(g,x,y,m,e,look){   // m: apertura de la boca 0..1, e: brillo de los ojos 0..1
  g.save();g.translate(x,y);g.scale(SD*1.4,SD*1.4);
  const t=V.t;
  if(e>.05){g.globalCompositeOperation='lighter';glowAt(g,2,0,-4,50+m*40,.5*e);g.globalAlpha=1;g.globalCompositeOperation='source-over'}
  // melena de fuego detrás de la cabeza
  for(let i=0;i<7;i++){
    const a=-Math.PI/2+(i-3)*.42,L=34+(i%2)*10+m*10,w=Math.sin(t*3+i)*3;
    g.fillStyle=i%2?C.red:'#f08a3a';g.beginPath();g.moveTo(Math.cos(a-.2)*14,Math.sin(a-.2)*14-4);
    g.quadraticCurveTo(Math.cos(a)*L*.8+w,Math.sin(a)*L*.8-4,Math.cos(a+.1)*L+w*1.4,Math.sin(a+.1)*L-4);
    g.quadraticCurveTo(Math.cos(a+.15)*L*.5,Math.sin(a+.15)*L*.5-4,Math.cos(a+.2)*14,Math.sin(a+.2)*14-4);g.fill();
  }
  // cuernos con ramas
  g.lineCap='round';
  [-1,1].forEach(sd=>{
    g.strokeStyle='#f1e2b4';g.lineWidth=5;g.beginPath();g.moveTo(sd*9,-16);g.bezierCurveTo(sd*20,-34,sd*26,-48,sd*40,-52);g.stroke();
    g.strokeStyle=C.gold;g.lineWidth=2;g.beginPath();g.moveTo(sd*9,-16);g.bezierCurveTo(sd*20,-34,sd*26,-48,sd*40,-52);g.stroke();
    g.strokeStyle='#f1e2b4';g.lineWidth=3;g.beginPath();g.moveTo(sd*22,-40);g.lineTo(sd*20,-54);g.stroke();
  });
  // bigotes largos que ondean
  [-1,1].forEach(sd=>{
    for(let i=0;i<2;i++){
      const w=Math.sin(t*2.2+i+sd)*8;
      g.strokeStyle=i?C.gold:'#f1e2b4';g.lineWidth=i?1.6:2;g.beginPath();g.moveTo(sd*14,10+i*4);
      g.bezierCurveTo(sd*40+w,6+i*6,sd*50+w*1.4,34+i*8,sd*34+w,60+i*10);g.stroke();
    }
  });
  // cabeza (frente y hocico)
  g.fillStyle='#0f4a3b';g.beginPath();g.ellipse(0,-3,25,22,0,0,7);g.fill();
  g.fillStyle=C.jade;g.beginPath();g.ellipse(0,-3,23,20,0,0,7);g.fill();
  g.fillStyle='rgba(120,230,180,.4)';g.beginPath();g.ellipse(-5,-10,13,9,0,0,7);g.fill();
  g.strokeStyle=C.gold;g.lineWidth=2;[-1,1].forEach(sd=>{g.beginPath();g.arc(sd*12,-10,8,Math.PI*1.1,Math.PI*1.9);g.stroke()});   // cejas doradas
  // mandíbula inferior y boca
  const jy=18+m*15;
  g.fillStyle='#0f4a3b';g.beginPath();g.ellipse(0,jy+3,19,10,0,0,7);g.fill();
  g.fillStyle='#24906e';g.beginPath();g.ellipse(0,jy+2,17,8.5,0,0,7);g.fill();
  if(m>.04){
    g.fillStyle='#5a1218';g.beginPath();g.ellipse(0,14+m*7,15,3+m*9,0,0,7);g.fill();
    g.fillStyle='#e0505a';g.beginPath();g.ellipse(0,jy-2,8,2.5+m*3,0,0,7);g.fill();   // lengua
    g.fillStyle='#fff6e0';for(let i=-2;i<=2;i+=2){poly(g,[[i*5-2.4,12],[i*5+2.4,12],[i*5,12+4+m*5]]);g.fill();poly(g,[[i*5-2.2,jy-2],[i*5+2.2,jy-2],[i*5,jy-6-m*3]]);g.fill()}
  }
  g.fillStyle='#34b890';g.beginPath();g.ellipse(0,10,18,9,0,0,7);g.fill();   // hocico superior
  g.fillStyle='#17604b';circ(g,-6,8,1.8);g.fill();circ(g,6,8,1.8);g.fill();   // fosas nasales
  g.strokeStyle=C.gold;g.lineWidth=1.4;g.beginPath();g.arc(0,10,17,.2,2.9);g.stroke();
  // ojos: se encienden al rugir
  [-1,1].forEach(sd=>{
    const ex=sd*12+look*1.5,ey=-6;
    if(e>.05){g.globalCompositeOperation='lighter';glowAt(g,0,ex,ey,12+e*8,e*.8);g.globalAlpha=1;g.globalCompositeOperation='source-over'}
    g.fillStyle='#fff3c4';g.beginPath();g.ellipse(ex,ey,5.4,4.6,0,0,7);g.fill();
    g.fillStyle=e>.3?'#ff5a1f':'#e7a21e';circ(g,ex+look*.8,ey,3);g.fill();
    g.fillStyle='#1a0e08';g.beginPath();g.ellipse(ex+look*.8,ey,.9,2.6,0,0,7);g.fill();
  });
  // barba dorada
  g.fillStyle=C.gold;poly(g,[[-6,jy+8],[6,jy+8],[2+Math.sin(t*3)*2,jy+24+m*6],[-2+Math.sin(t*3)*2,jy+22]]);g.fill();
  g.restore();
}
function sparkSpawn(x,y,vx,vy,max,type){
  const a=DR.sp,i=DR.spi;DR.spi=(i+1)%72;const o=i*7;
  a[o]=x;a[o+1]=y;a[o+2]=vx;a[o+3]=vy;a[o+4]=0;a[o+5]=max;a[o+6]=type;
}
function sparkStep(dt){
  const a=DR.sp,sp=G.started?G.v:0;
  for(let i=0;i<72;i++){
    const o=i*7;if(a[o+4]>=a[o+5])continue;
    a[o+4]+=dt;
    if(a[o+6]===1){a[o+3]-=6*dt;a[o]+=(a[o+2]+Math.sin(V.t*2+i)*8)*dt}else{a[o+3]+=90*dt;a[o]+=a[o+2]*dt}
    a[o+1]+=a[o+3]*dt+sp*dt;
  }
}
function dragonSparks(g){
  const a=DR.sp;let any=false;
  for(let i=0;i<72;i++)if(a[i*7+4]<a[i*7+5]){any=true;break}
  if(!any)return;
  g.save();g.globalCompositeOperation='lighter';
  for(let i=0;i<72;i++){
    const o=i*7;if(a[o+4]>=a[o+5])continue;
    const u=a[o+4]/a[o+5],x=a[o],y=a[o+1];
    if(a[o+6]===1){   // linterna flotante que sube
      g.globalAlpha=Math.min(1,(1-u)*2)*.95;g.fillStyle='#ffb347';g.fillRect(x-4,y-5,8,10);g.fillStyle='#ffe2a0';g.fillRect(x-2.4,y-3,4.8,6);
      glowAt(g,3,x,y,22,.5*(1-u));
    }else{
      g.globalAlpha=(1-u)*.9;g.fillStyle=i%3?'#ffd36a':'#ff7a3a';g.fillRect(x-1.6,y-1.6,3.2,3.2);g.globalAlpha=(1-u)*.3;g.fillRect(x-4,y-4,8,8);
    }
  }
  g.restore();
}
function dragonDraw(g){
  const x=px(-DRAGON_DS,-1,70),y=py(-DRAGON_DS);
  // pedestal, cuerpo, cabeza y perla
  const pw=190,sp=sprite('drp',pw,110,pw/2,58,c=>dragonPedestal(c));blit(g,sp,x,y,1);
  const bs=sprite('drb',230,290,115,252,c=>dragonBody(c)),by=y-22;
  blit(g,bs,x,by,SD);
  const r=DR.roar,m=r<.25?r/.25:r<1.7?1:Math.max(0,1-(r-1.7)/1.1),e=Math.max(m,.22*F.N);
  const look=clamp(((V.VW/2+G.ox)-x)/220,-1,1);
  const hx=x+6*SD,hy=by-236*SD+Math.sin(V.t*.9)*1.5;
  dragonHead(g,hx,hy,m,e,look);
  dragonPearl(g,x+78*SD,by-42*SD,10,Math.max(m,.3*F.N));
  DR.mx=hx;DR.my=hy+34*SD;DR.vis=1;
  light(hx,hy-6,70+m*120,.5+m*.5);light(x,by-60,110,.55);
  dragonSparks(g);
}
const FEST_T={k:null};
export function castleStep(dt){
  if(!G.started)return;
  const dk=lmIndexAt(G.s+DRAGON_DS);
  if(lmType(dk)===CASTLE){
    const d=lmPos(dk)-DRAGON_DS-G.s;
    if(DR.armed!==dk&&d<340&&d>-260){
      DR.armed=dk;DR.roar=0;A.roar();hap([50,40,90,50,40]);cap('Rugido del dragón',6000);toast('El dragón anuncia el Castillo de la Garza Blanca');
    }
  }
  const k=lmIndexAt(G.s);
  if(nearCastle(G.s,900)&&FEST_T.k!==k&&DR.roar>3.4){
    FEST_T.k=k;toast(V.dark>.25?'Festival del castillo: fuegos artificiales sobre la Garza Blanca':'Festival del castillo: los tambores resuenan');
  }
  if(DR.roar<20)DR.roar+=dt;
  sparkStep(dt);
  // chispas y linternas que suelta al rugir
  if(DR.roar<2.4&&DR.vis){
    const m=DR.roar<.25?DR.roar/.25:DR.roar<1.7?1:Math.max(0,1-(DR.roar-1.7)/.7);
    DR.acc=(DR.acc||0)+dt*60*m;
    while(DR.acc>=1){DR.acc--;const a=-Math.PI/2+(Math.random()-.5)*1.7,v=60+Math.random()*130;sparkSpawn(DR.mx+(Math.random()-.5)*14,DR.my,Math.cos(a)*v,Math.sin(a)*v,.7+Math.random()*.9,0)}
    DR.lac=(DR.lac||0)+dt*3*m;
    while(DR.lac>=1){DR.lac--;sparkSpawn(DR.mx+(Math.random()-.5)*50,DR.my-20,(Math.random()-.5)*30,-30-Math.random()*30,4+Math.random()*2.5,1)}
  }
  DR.vis=0;
}

/* ---------- distribución del castillo (se ordena una sola vez de más lejos a más cerca) ---------- */
const IT=[];
const add=(k,h,f)=>IT.push({k,h,f});
const KIM=['#c0504d','#3f6aa6','#e0a040','#7a52a0','#3f9a80','#d9738a'];
const ROW_DS=58,T_DS=138;
const ts=()=>Math.min(1,V.VW/780);   // en pantallas estrechas las torres se reducen para caber junto al río
function layout(){
  [-1,1].forEach(sd=>{
    add(620,0,g=>platform(g,sd));
    add(610,60,g=>{if(sd>0)wallH(g,px(318,1,40),V.VW+60,py(318));else wallH(g,-60,px(318,-1,40),py(318))});
    add(600,0,g=>wallStrip(g,sd));
    add(590,50,g=>{if(sd>0)wallH(g,px(-6,1,96),V.VW+60,py(-6));else wallH(g,-60,px(-6,-1,150),py(-6))});   // muro exterior con puertas junto al puente
  });
  // torre principal (tenshu) a la derecha, tres torres menores y corredores
  add(T_DS,430,g=>{const S=.88*ts(),x=Math.min(px(T_DS,1,128),V.VW-100*S),y=py(T_DS);drawTower(g,'T',x,y,S,true);eaveLanterns(g,'T',x,y,S,0);herons(g,x,y-300*S,F.N)});
  add(ROW_DS,230,g=>{const S=.95*ts(),x=px(ROW_DS,1,62),y=py(ROW_DS);drawTower(g,'K',x,y,S,true);eaveLanterns(g,'K',x,y,S,1)});
  add(ROW_DS,230,g=>{const S=.95*ts(),x=px(ROW_DS,1,278),y=py(ROW_DS);drawTower(g,'K',x,y,S,true);eaveLanterns(g,'K',x,y,S,2)});
  add(112,230,g=>{const S=.95*ts(),x=px(112,-1,100),y=py(112);drawTower(g,'K',x,y,S,true);eaveLanterns(g,'K',x,y,S,3)});
  add(ROW_DS+2,60,g=>corridorH(g,px(ROW_DS,1,110),px(ROW_DS,1,240),py(ROW_DS)));
  add(150,0,g=>corridorV(g,px(120,1,128),py(ROW_DS+14),py(T_DS-6)));
  add(120,0,g=>corridorV(g,px(50,-1,100),py(-2),py(104)));
  add(-40,130,g=>{const S=.88*ts(),x=px(-40,-1,66),y=py(-40);drawTower(g,'G',x,y,S,true);eaveLanterns(g,'G',x,y,S,4)});
  add(-40,60,g=>bridge(g));
  add(-18,30,g=>{stairs(g,1,-34,40,2,76);stoneLantern(g,px(-34,1,84),py(-34));stoneLantern(g,px(40,1,84),py(40))});
  [[50,-1,170],[130,-1,200],[330,-1,130],[40,1,200],[170,1,330],[300,1,215],[340,1,330],[310,-1,260]].forEach(([ds,sd,off],i)=>add(ds,70,g=>cherry(g,px(ds,sd,off),py(ds),40+hash(i*3+1)*12,i,Math.sin(V.t*.7+i)*1.2)));
  [[22,1,190],[30,1,360],[220,1,60],[250,1,300],[16,-1,300],[190,-1,200],[250,-1,60],[270,-1,330]].forEach(([ds,sd,off],i)=>add(ds,60,g=>pine(g,px(ds,sd,off),py(ds),i)));
  [[-85,1,40],[-85,-1,40],[260,1,300],[210,-1,40],[110,1,300]].forEach(([ds,sd,off])=>add(ds,40,g=>stoneLantern(g,px(ds,sd,off),py(ds))));
  // ---- festival, antes del castillo ----
  [-150,-250,-350,-450,-550,-650].forEach((ds,i)=>add(ds,70,g=>garland(g,ds,i)));
  [[-190,1,0],[-300,-1,1],[-420,1,2],[-480,-1,3],[-560,1,4],[-130,-1,5]].forEach(([ds,sd,ci])=>add(ds,70,g=>yatai(g,px(ds,sd,sd>0?72:74),py(ds),ci,V.t)));
  add(-310,100,g=>taikoStage(g,px(-310,1,76),py(-310)));
  [-110,-210,-330,-440,-540,-640,-720].forEach((ds,i)=>[-1,1].forEach(sd=>add(ds+(sd>0?12:-8),110,g=>nobori(g,px(ds+(sd>0?12:-8),sd,16),py(ds+(sd>0?12:-8)),(i+(sd>0?1:0))%2?['#c63a30','#f7efdf']:['#f7efdf','#c63a30'],i+sd))));
  for(let i=0;i<6;i++)[-1,1].forEach(sd=>{const a=-110-i*105-(i>0?0:0),b=a-100;add(a-50,30,g=>pennants(g,px(a,sd,26),py(a)-52,px(b,sd,26),py(b)-52,i+sd))});
  [-70,-400,-600].forEach((ds,i)=>[-1,1].forEach(sd=>add(ds-20,100,g=>streamers(g,px(ds-20,sd,10),py(ds-20),i+sd))));
  // gente con farolillos
  [[-120,1,60],[-130,1,95],[-200,-1,100],[-230,1,100],[-270,-1,60],[-290,1,52],[-345,1,112],[-380,-1,88],[-400,1,70],[-445,-1,102],[-470,1,62],[-520,-1,80],[-580,1,90],[-610,-1,66],[-690,1,60],[-60,1,100],[-20,-1,100]].forEach(([ds,sd,off],i)=>add(ds,40,g=>person(g,px(ds,sd,off),py(ds),KIM[i%6],i*1.7,i%2===0)));
  // cerezos que rodean el camino hasta el castillo
  [[-100,1,110],[-170,-1,130],[-260,1,170],[-390,-1,150],[-500,1,150],[-380,1,190],[-600,-1,140],[-660,1,130]].forEach(([ds,sd,off],i)=>add(ds,70,g=>cherry(g,px(ds,sd,off),py(ds),38+hash(i*5+2)*14,i+9,Math.sin(V.t*.6+i)*1.2)));
  // dragón y embarcadero
  add(-DRAGON_DS,330,dragonDraw);
  IT.sort((a,b)=>b.k-a.k);
}
layout();

export function drawCastleTop(g,k,s0,y0){
  F.s0=s0;F.y0=y0;F.k=k;F.N=clamp((V.dark-.1)/.4,0,1);
  const H=V.VH;
  g.save();
  for(const it of IT){
    const y=y0-it.k;
    if(it.k>=600){}else if(y<-90||y>H+it.h+60)continue;
    g.globalAlpha=1;
    it.f(g);
  }
  g.restore();
}
/* Bajo la canoa: reflejos del castillo en el agua, sombra del puente, embarcadero del dragón y pétalos flotando */
export function drawCastleUnder(g,k,s0,y0){
  F.s0=s0;F.y0=y0;F.k=k;F.N=clamp((V.dark-.1)/.4,0,1);
  const N=F.N,t=V.t;
  // reflejo de muros blancos y farolillos de las orillas
  g.save();
  [-1,1].forEach(sd=>{
    g.fillStyle='rgba(250,246,236,.22)';
    for(let ds=-30;ds<316;ds+=26){const w=Math.sin(t*1.3+ds*.07)*2;g.fillRect(px(ds,sd,0)-sd*(14+w)-(sd>0?0:0),py(ds)-8,sd*(14+w),10)}
  });
  // sombra y reflejo del puente
  const yb=py(-40),xl=px(-40,-1,0),xr=px(-40,1,0);
  g.fillStyle='rgba(8,28,44,.3)';g.fillRect(xl,yb-18,xr-xl,48);
  g.fillStyle='rgba(200,60,50,.2)';for(let i=0;i<6;i++){const x=xl+(xr-xl)*(i/6),w=Math.sin(t*1.7+i)*3;g.fillRect(x+w,yb+22,(xr-xl)/6-4,7)}
  // reflejos de los farolillos de las guirnaldas (de noche brillan)
  if(N>.04){
    [-150,-250,-350,-450,-550,-650].forEach((ds,gi)=>{
      const y=py(ds);if(y<-30||y>V.VH+30)return;
      const xa=px(ds,-1,0),xb=px(ds,1,0),n=Math.max(7,Math.round((xb-xa+16)/36));
      for(let i=1;i<n;i++){const x=lerp(xa-8,xb+8,i/n),w=Math.sin(t*2+i+gi)*3;glowAt(g,(i+gi)%4,x+w,y+6+Math.sin(t*1.4+i)*2,17,.34*N)}
    });
    g.globalAlpha=1;
  }
  // embarcadero de madera del dragón (a un lado del cauce, sin bloquear)
  const dy=py(-DRAGON_DS);
  if(dy>-60&&dy<V.VH+60){
    const xe=px(-DRAGON_DS,-1,0);
    g.fillStyle='rgba(8,28,44,.25)';g.fillRect(xe-6,dy-22,40,50);
    g.fillStyle='#8a5e3c';g.fillRect(xe-4,dy-24,46,48);g.fillStyle='#6a4630';for(let i=-4;i<44;i+=8)g.fillRect(xe+i,dy-24,1.5,48);
    g.fillStyle='#4a3020';g.fillRect(xe-6,dy-26,50,3);g.fillRect(xe-6,dy+23,50,3);
    g.fillStyle='#3d2818';for(let q=0;q<3;q++){circ(g,xe-4,dy-24+q*24,3.4);g.fill()}
    paperLanternEmb(g,xe-4,dy-24);paperLanternEmb(g,xe-4,dy+24);
    // reflejo del dragón en el agua (verde y dorado, ondulante)
    for(let i=0;i<7;i++){const w=Math.sin(t*1.6+i)*3;g.fillStyle=i%2?'rgba(240,200,90,.14)':'rgba(47,174,134,.16)';g.fillRect(xe-26+w,dy-26+i*8,20,6)}
  }
  // pétalos de sakura que flotan por el río en el tramo del castillo
  for(let i=0;i<26;i++){
    const ds=-690+i*43+hash(i)*20,s=s0+ds,y=py(ds);if(y<-10||y>V.VH+10)continue;
    const hw=halfW(s)-24,x=V.VW/2+center(s)-V.cs0+Math.sin(i*2.7+t*.35)*hw*.85;
    g.fillStyle=i%3?'rgba(250,200,215,.8)':'rgba(255,236,242,.85)';g.beginPath();g.ellipse(x,y,4.2,2.2,i+t*.2,0,7);g.fill();
  }
  g.restore();
}
function paperLanternEmb(g,x,y){g.fillStyle='#e24b3c';circ(g,x,y-9,5.4);g.fill();g.fillStyle='#3a2a20';g.fillRect(x-3,y-15,6,2);glowAt(g,0,x,y-9,22,.7*F.N);g.globalAlpha=1;light(x,y-9,60,.7)}

/* para pruebas */
export const castleDbg={DR,FEST_T,F};
