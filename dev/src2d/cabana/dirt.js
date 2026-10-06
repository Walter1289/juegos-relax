/* Suciedad: generación, limpieza con arrastre, medición y envejecimiento por abandono */
import {W,H,mk,rnd,lerp,poly,HEX} from './util.js';
import {ITEMS} from './items.js';
import {state,DW,DH,dirt,dctx,grimeC,base,cur,rt} from './state.js';

export function makeGrime(){
  dctx.setTransform(1,0,0,1,0,0);dctx.globalCompositeOperation='source-over';dctx.clearRect(0,0,DW,DH);
  dctx.save();dctx.scale(.5,.5);
  dctx.fillStyle='rgba(112,98,108,.8)';dctx.fillRect(0,0,W,H);
  const cols=['30,24,16','60,92,48','110,60,30','90,80,60'];
  for(let i=0;i<700;i++){dctx.fillStyle='rgba('+cols[i%4]+','+rnd(.08,.3)+')';dctx.beginPath();dctx.arc(rnd(0,W),rnd(0,H),rnd(6,46),0,7);dctx.fill()}
  for(let i=0;i<90;i++){dctx.fillStyle='rgba(78,64,72,.4)';dctx.fillRect(rnd(215,905),rnd(250,520),rnd(2,6),rnd(20,110))}
  const edges=[[196,258,470,152],[470,152,815,234],[215,520,905,520],[776,426,908,426]];
  for(let i=0;i<150;i++){
    const e=edges[i%4],u=Math.random();
    dctx.fillStyle='rgba(78,120,54,.85)';dctx.beginPath();dctx.arc(lerp(e[0],e[2],u),lerp(e[1],e[3],u)+rnd(-4,10),rnd(8,22),0,7);dctx.fill();
  }
  dctx.restore();
  const gx=grimeC.getContext('2d');gx.clearRect(0,0,DW,DH);gx.drawImage(dirt,0,0);
  const mc=mk(DW,DH),m=mc.getContext('2d');m.scale(.5,.5);m.fillStyle='#fff';
  [[[196,258],[470,152],[815,234],[815,270],[196,270]],[[225,545],[225,572],[70,722],[8,722],[8,690]]].forEach(p=>{poly(m,p);m.fill()});
  [[540,120,150,95],[225,250,545,272],[215,520,692,48],[742,428,170,95],[808,262,105,170]].forEach(r=>m.fillRect(r[0],r[1],r[2],r[3]));
  HEX.forEach(([x,y,r])=>{m.beginPath();m.arc(x,y,r+4,0,7);m.fill()});
  dctx.globalCompositeOperation='destination-in';dctx.drawImage(mc,0,0);dctx.globalCompositeOperation='source-over';
}
export function countDirty(){
  const d=dctx.getImageData(0,0,DW,DH).data;let n=0;
  for(let i=3;i<d.length;i+=4)if(d[i]>40)n++;
  const it={};
  ITEMS.forEach(o=>{
    let c=0;
    o.rects.forEach(r=>{
      const x0=Math.max(0,r[0]>>1),y0=Math.max(0,r[1]>>1),x1=Math.min(DW,(r[0]+r[2])>>1),y1=Math.min(DH,(r[1]+r[3])>>1);
      for(let y=y0;y<y1;y++){let p=(y*DW+x0)*4+3;for(let x=x0;x<x1;x++,p+=4)if(d[p]>40)c++}
    });
    it[o.id]=c;
  });
  return {all:n,items:it};
}
export function measure(){
  const c=countDirty();
  cur.all=Math.min(1,Math.max(0,1-c.all/base.all));
  state.best=Math.max(state.best||0,cur.all);
  ITEMS.forEach(o=>{const b=base.items[o.id];cur.items[o.id]=b>0?Math.min(1,Math.max(0,1-c.items[o.id]/b)):1});
}
export function stamp(x,y){
  const r=state.repaired.piso?19:15,cx=x/2,cy=y/2,gr=dctx.createRadialGradient(cx,cy,0,cx,cy,r);
  gr.addColorStop(0,'rgba(0,0,0,1)');gr.addColorStop(.7,'rgba(0,0,0,.9)');gr.addColorStop(1,'rgba(0,0,0,0)');
  dctx.globalCompositeOperation='destination-out';dctx.fillStyle=gr;dctx.beginPath();dctx.arc(cx,cy,r,0,7);dctx.fill();
  dctx.globalCompositeOperation='source-over';
}
export function stampLine(x0,y0,x1,y1){const n=Math.max(1,Math.ceil(Math.hypot(x1-x0,y1-y0)/8));for(let i=1;i<=n;i++)stamp(lerp(x0,x1,i/n),lerp(y0,y1,i/n))}

/* ===== Deterioro por abandono: la suciedad vuelve por zonas, empezando por el piso ===== */
const ZONES=[
  {n:'el piso',from:2,to:10,rects:[[215,495,690,72]],polys:[]},
  {n:'la terraza y la escalera',from:10,to:26,rects:[[742,428,170,95],[808,262,105,170]],polys:[[[225,545],[225,572],[70,722],[8,722],[8,690]]]},
  {n:'el interior',from:26,to:50,rects:[[225,250,545,245]],polys:[]},
  {n:'el techo y los nichos',from:50,to:80,rects:[[540,120,150,95]],polys:[[[196,258],[470,152],[815,234],[815,270],[196,270]]],hex:true},
];
function zoneMask(z){
  const c=mk(DW,DH),m=c.getContext('2d');m.scale(.5,.5);m.fillStyle='#fff';
  z.rects.forEach(r=>m.fillRect(r[0],r[1],r[2],r[3]));
  z.polys.forEach(p=>{poly(m,p);m.fill()});
  if(z.hex)HEX.forEach(([x,y,r])=>{m.beginPath();m.arc(x,y,r+4,0,7);m.fill()});
  return c;
}
function regrow(z,k){
  const t=mk(DW,DH),c=t.getContext('2d');
  c.drawImage(grimeC,0,0);c.globalCompositeOperation='destination-in';c.drawImage(zoneMask(z),0,0);
  dctx.globalAlpha=k;dctx.drawImage(t,0,0);dctx.globalAlpha=1;
}
export function age(h){
  let reached='';
  ZONES.forEach(z=>{
    const k=Math.min(1,Math.max(0,(h-z.from)/(z.to-z.from)));
    if(k>0){regrow(z,k*.9);reached=z.n}
  });
  if(reached){
    rt.dirty=true;
    const t=h<48?Math.round(h)+' h':Math.round(h/24)+' días';
    rt.pendingMsg='La cabaña estuvo sola '+t+' y se ensució, empezando por el piso'+(reached==='el piso'?'.':' hasta '+reached+'.');
  }
}
