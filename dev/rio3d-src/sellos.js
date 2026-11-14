/* Libro de sellos (goshuin-chō): 11 lugares × 3 vueltas = 33 sellos, uno por cada templo de la peregrinación de Kannon.
   Se sella solo, al pasar por cada lugar durante una vuelta. Sin metas ni prisas; todo queda en este dispositivo. */
import {LM} from './rio/lm-data.js';
import {ORDER} from './rio/world.js';
const SK='rio3d-sellos';
import {pintaSello,papel,GL} from './sello-art.js';
let cache=null;const get=()=>{if(cache)return cache;try{cache=JSON.parse(localStorage.getItem(SK)||'{}')||{}}catch(e){cache={}}return cache};
export const sellosCount=()=>Object.keys(get()).length;
export const sellado=(lap,t)=>!!get()[lap+'-'+t];
/** lap 1..3, t = tipo de lugar (0..10). Devuelve true si el sello es nuevo. */
export function sellar(lap,t){
  if(lap<1||lap>3)return false;const a=get(),k=lap+'-'+t;if(a[k])return false;a[k]=Date.now();cache=a;try{localStorage.setItem(SK,JSON.stringify(a))}catch(e){}return true}
try{UX.add([['Pergamino de sellos','Stamp scroll','御朱印の巻物'],['Libro de sellos','Stamp scroll','御朱印の巻物'],['Cada lugar deja una estampa. Cada vuelta le añade detalle.','Each place leaves an ink print. Each lap adds detail to it.','各地で墨の印がもらえます。一周ごとに絵が深まります。'],['Aún en blanco','Still blank','まだ白紙'],['Desliza para desenrollar','Swipe to unroll','横にすべらせて広げる'],['Peregrinación del río','River pilgrimage','川の巡礼'],['Vuelta','Lap','周'],['Sello','Stamp','印'],['Abrir','Open','開く'],['Lo que te llevas de cada lugar','What you take from each place','それぞれの場所からの持ち物']])}catch(e){}
const CSS=`#pgOv{position:fixed;inset:0;z-index:80;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:rgba(205,192,162,.95);padding:10px;color:#2a231c;font:15px/1.4 system-ui,sans-serif}
#pgOv h2{margin:0;font:600 1.1rem system-ui;text-align:center}#pgOv .sub{opacity:.7;font-size:.8rem;text-align:center;margin-top:2px}
#pgOv .pg{display:flex;align-items:stretch;max-width:96vw;filter:drop-shadow(0 10px 22px rgba(0,0,0,.45))}
#pgOv .jk{flex:0 0 18px;margin:-10px 0;border-radius:5px;background:linear-gradient(90deg,#3a2416,#8a5a36 38%,#a9764a 52%,#5a3822 86%,#2c1a10);position:relative;z-index:2}
#pgOv .jk:before,#pgOv .jk:after{content:"";position:absolute;left:1px;right:1px;height:12px;border-radius:4px;background:linear-gradient(90deg,#1c1410,#4a3a30 45%,#1c1410)}#pgOv .jk:before{top:-7px}#pgOv .jk:after{bottom:-7px}
#pgOv .pv{overflow-x:auto;overflow-y:hidden;scroll-snap-type:x proximity;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;background-color:#e7dcc4;border-top:9px solid #39406e;border-bottom:9px solid #39406e;box-shadow:inset 0 2px 0 #c9a45a,inset 0 -2px 0 #c9a45a,inset 14px 0 14px -10px rgba(60,40,20,.35),inset -14px 0 14px -10px rgba(60,40,20,.35);max-width:100%;scrollbar-width:thin;scrollbar-color:#b9a47c transparent;transition:max-width .9s cubic-bezier(.3,.7,.2,1)}
#pgOv .pv.roll{max-width:0}
#pgOv .sp{display:flex;align-items:stretch;padding:0 10px}
#pgOv .pp{flex:0 0 auto;scroll-snap-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 14px 10px;color:#2a231c;position:relative}
#pgOv .pp+.pp:before{content:"";position:absolute;left:0;top:14%;bottom:14%;width:1px;background:linear-gradient(#0000,rgba(90,70,40,.28),#0000)}
#pgOv .pp canvas{display:block;position:static;inset:auto;flex:0 0 auto;touch-action:pan-x}
#pgOv .nm{font:600 .86rem/1.2 Georgia,"Hiragino Mincho ProN","Yu Mincho",serif;letter-spacing:.02em;text-align:center;margin-top:2px}
#pgOv .dt{font-size:.66rem;opacity:.55;height:1em;margin-top:1px}
#pgOv .hk{display:flex;gap:8px;margin-top:6px}
#pgOv .hk i{width:25px;height:25px;border-radius:4px;display:grid;place-items:center;font:700 14px/1 "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",serif;font-style:normal;border:1px dashed rgba(90,70,40,.45);color:rgba(90,70,40,.5)}
#pgOv .hk i.on{background:#c5463b;border:1px solid #c5463b;color:#f6efe1;box-shadow:inset 0 0 0 1.5px rgba(246,239,225,.55)}
#pgOv .tt{writing-mode:vertical-rl;font:600 1.5rem/1.5 "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",Georgia,serif;letter-spacing:.3em;color:#2a231c}
#pgOv .tt small{font-size:.72rem;letter-spacing:.1em;opacity:.6;font-weight:400}
#pgOv .cl{min-height:44px;padding:8px 22px;border-radius:99px;border:1px solid #a8926a;background:#e6dabf;color:#2a231c;font:inherit;cursor:pointer}`;
export function openSellos(tr){
  tr=tr||(window.UX?UX.tr:(s=>s));const a=get();if(document.getElementById('pgOv'))return;
  if(!document.getElementById('pgCss')){const st=document.createElement('style');st.id='pgCss';st.textContent=CSS;document.head.appendChild(st)}
  const el=(t,cl,tx)=>{const e=document.createElement(t);if(cl)e.className=cl;if(tx!=null)e.textContent=tx;return e};
  const ov=el('div');ov.id='pgOv';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-label',tr('Pergamino de sellos'));
  const hd=el('div');hd.append(el('h2','',tr('Pergamino de sellos')+' · '+sellosCount()+'/33'),el('div','sub',tr('Cada lugar deja una estampa. Cada vuelta le añade detalle.')));
  const pg=el('div','pg'),pv=el('div','pv'),sp=el('div','sp');pv.tabIndex=0;pv.style.backgroundImage='url('+papel()+')';pv.appendChild(sp);pg.append(el('div','jk'),pv,el('div','jk'));
  /* tamaño de cada estampa según la pantalla (cabe en móvil apaisado y en iPad) */
  const short=innerHeight<520,ch=Math.round(Math.max(140,Math.min(innerHeight-(short?235:290),430,(innerWidth*.66)*340/300))),cw=Math.round(ch*300/340),dpr=Math.min(2,window.devicePixelRatio||1);
  const t0=el('div','pp'),tt=el('div','tt');tt.append(document.createTextNode('川の巡礼 '),el('small','',tr('Peregrinación del río')));t0.style.minHeight=(ch+70)+'px';t0.appendChild(tt);sp.appendChild(t0);
  const todo=[];
  ORDER.forEach(t=>{let n=0,d=0;for(let l=1;l<=3;l++){const v=a[l+'-'+t];if(v){n++;if(!d||v<d)d=v}}
    const p=el('div','pp'),cv=el('canvas');cv.width=Math.round(cw*dpr);cv.height=Math.round(ch*dpr);cv.style.width=cw+'px';cv.style.height=ch+'px';cv.setAttribute('role','img');cv.setAttribute('aria-label',tr(LM[t])+(n?'':' · '+tr('Aún en blanco')));p.appendChild(cv);todo.push([cv,t,n]);
    p.appendChild(el('div','nm',tr(LM[t])));let ds='';if(d){try{ds=new Date(d).toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'})}catch(e){}}p.appendChild(el('div','dt',n?ds:tr('Aún en blanco')));
    const hk=el('div','hk');for(let l=1;l<=3;l++){const on=!!a[l+'-'+t],i=el('i',on?'on':'',on?GL[t]:'一二三'[l-1]);i.title=tr('Vuelta')+' '+l;if(on)i.style.transform='rotate('+((t*7+l*13)%9-4)+'deg)';hk.appendChild(i)}p.appendChild(hk);sp.appendChild(p)});
  const c=el('button','cl',tr('Cerrar'));c.type='button';const close=()=>{removeEventListener('keydown',key,true);ov.remove()};c.onclick=close;
  const key=e=>{if(e.key==='Escape'){e.stopPropagation();close()}else if(e.key==='ArrowRight')pv.scrollBy({left:cw+28,behavior:'smooth'});else if(e.key==='ArrowLeft')pv.scrollBy({left:-cw-28,behavior:'smooth'})};addEventListener('keydown',key,true);
  pv.addEventListener('wheel',e=>{if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){pv.scrollLeft+=e.deltaY;e.preventDefault()}},{passive:false});
  ov.append(hd,pg,el('div','sub',tr('Desliza para desenrollar')),c);ov.onclick=e=>{if(e.target===ov)close()};if(short){ov.style.gap='5px';ov.querySelectorAll('.sub').forEach(e=>e.style.display='none')}
  const calm=(()=>{try{return UX.calm()}catch(e){return false}})();if(!calm)pv.classList.add('roll');
  document.body.appendChild(ov);if(!calm)requestAnimationFrame(()=>requestAnimationFrame(()=>pv.classList.remove('roll')));
  /* pintar una estampa por fotograma para no dar tirones */
  let i=0;const paso=()=>{if(!ov.isConnected||i>=todo.length)return;const q=todo[i++];try{if(q[2])pintaSello(q[0],q[1],q[2]);else enso(q[0])}catch(e){}requestAnimationFrame(paso)};requestAnimationFrame(paso);
  try{c.focus()}catch(e){}
}
/* lugar sin visitar: solo un círculo de pincel muy tenue sobre el papel */
function enso(cv){const x=cv.getContext('2d'),w=cv.width,h=cv.height,R=w*.2;x.strokeStyle='rgba(40,32,24,.16)';x.lineCap='butt';for(let i=0;i<46;i++){const a0=-1.2+i*.118,a1=a0+.119;x.lineWidth=w*(.006+.022*Math.sin(i/46*Math.PI)**.7);x.beginPath();x.arc(w/2,h*.5,R,a0,a1);x.stroke()}}

/* botón «Sellos» en el menú Start (junto al Diario) */
function addBtn(){const m=document.getElementById('menu');if(!m||document.getElementById('sellB'))return;const b=document.createElement('button');b.type='button';b.id='sellB';b.textContent=(window.UX?UX.tr('Sellos'):'Sellos');b.onclick=()=>openSellos();const sn=document.getElementById('snd');m.insertBefore(b,sn||null)}
try{UX.add([['Sellos','Stamps','印帳']])}catch(e){}
setInterval(addBtn,1500);
