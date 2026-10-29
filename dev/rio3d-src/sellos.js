/* Libro de sellos (goshuin-chō): 11 lugares × 3 vueltas = 33 sellos, uno por cada templo de la peregrinación de Kannon.
   Se sella solo, al pasar por cada lugar durante una vuelta. Sin metas ni prisas; todo queda en este dispositivo. */
import {LM} from './rio/lm-data.js';
import {ORDER} from './rio/world.js';
const SK='rio3d-sellos';
const GL=['橋','鳥','里','桜','葦','鐘','滝','茶','竹','蓮','城'];
let cache=null;const get=()=>{if(cache)return cache;try{cache=JSON.parse(localStorage.getItem(SK)||'{}')||{}}catch(e){cache={}}return cache};
export const sellosCount=()=>Object.keys(get()).length;
export const sellado=(lap,t)=>!!get()[lap+'-'+t];
/** lap 1..3, t = tipo de lugar (0..10). Devuelve true si el sello es nuevo. */
export function sellar(lap,t){
  if(lap<1||lap>3)return false;const a=get(),k=lap+'-'+t;if(a[k])return false;a[k]=Date.now();cache=a;try{localStorage.setItem(SK,JSON.stringify(a))}catch(e){}return true}
try{UX.add([['Libro de sellos','Stamp book','御朱印帳'],['Cada lugar deja un sello por vuelta. Sin prisa.','Each place leaves one stamp per lap. No hurry.','各地で一周ごとに一つ、印がもらえます。急がずに。'],['Vuelta','Lap','周'],['Sello','Stamp','印'],['Abrir','Open','開く'],['Lo que te llevas de cada lugar','What you take from each place','それぞれの場所からの持ち物']])}catch(e){}
export function openSellos(tr){
  tr=tr||(window.UX?UX.tr:(s=>s));const a=get();
  const ov=document.createElement('div');ov.setAttribute('role','dialog');ov.style.cssText='position:fixed;inset:0;z-index:80;display:grid;place-items:center;background:rgba(14,16,36,.9);padding:12px';
  const b=document.createElement('div');b.style.cssText='background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:16px 16px 18px;width:min(94vw,470px);max-height:86vh;overflow:auto;font:15px/1.4 system-ui,sans-serif';
  const h=document.createElement('h2');h.style.cssText='margin:0 0 2px;font:600 1.15rem system-ui';h.textContent=tr('Libro de sellos')+' · '+sellosCount()+'/33';
  const s=document.createElement('div');s.style.cssText='opacity:.65;font-size:.8rem;margin-bottom:12px';s.textContent=tr('Cada lugar deja un sello por vuelta. Sin prisa.');
  const g=document.createElement('div');g.style.cssText='display:grid;grid-template-columns:1fr 54px 54px 54px;gap:6px 8px;align-items:center';
  b.append(h,s,g);
  const hd=document.createElement('div');g.appendChild(hd);for(let l=1;l<=3;l++){const c=document.createElement('div');c.style.cssText='text-align:center;font-size:.72rem;opacity:.7';c.textContent=tr('Vuelta')+' '+l;g.appendChild(c)}
  ORDER.forEach(t=>{const n=document.createElement('div');n.style.cssText='font-size:.86rem;opacity:.9';n.textContent=tr(LM[t]);g.appendChild(n);
    for(let l=1;l<=3;l++){const on=!!a[l+'-'+t],c=document.createElement('div');c.setAttribute('aria-label',on?tr('Sello'):'');
      c.style.cssText='width:42px;height:42px;margin:auto;border-radius:6px;display:grid;place-items:center;font:700 22px/1 "Noto Serif JP",serif;'+(on?'color:#d8483a;border:2px solid #d8483a;background:rgba(216,72,58,.10);transform:rotate('+((t*7+l*13)%9-4)+'deg)':'border:1px dashed #5a609a;opacity:.45');
      c.textContent=on?GL[t]:'';g.appendChild(c)}});
  const c=document.createElement('button');c.type='button';c.textContent=tr('Cerrar');c.style.cssText='margin-top:14px;min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer';c.onclick=()=>ov.remove();
  b.appendChild(c);ov.appendChild(b);ov.onclick=e=>{if(e.target===ov)ov.remove()};document.body.appendChild(ov);try{c.focus()}catch(e){}
}

/* botón «Sellos» en el menú Start (junto al Diario) */
function addBtn(){const m=document.getElementById('menu');if(!m||document.getElementById('sellB'))return;const b=document.createElement('button');b.type='button';b.id='sellB';b.textContent=(window.UX?UX.tr('Sellos'):'Sellos');b.onclick=()=>openSellos();const sn=document.getElementById('snd');m.insertBefore(b,sn||null)}
try{UX.add([['Sellos','Stamps','印帳']])}catch(e){}
setInterval(addBtn,1500);
