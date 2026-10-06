/* ui.js — aviso emergente (toast) y HUD: distancia, linternas, lugares, chips del diario y siguiente destino */
import {$} from './util.js';
import {G} from './state.js';
import {LM,LM_OFF,LM_GAP,lmPos,lmType} from './world.js';

let toastT=0;
export function toast(m){const e=$('#toast');e.textContent=m;e.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>e.classList.remove('show'),3200)}
const chipEls=LM.map(n=>{const e=document.createElement('span');e.className='chip';e.textContent=n;$('#chips').appendChild(e);return e});
const fmt=m=>m>=1000?(m/1000).toFixed(2)+' km':Math.floor(m)+' m';
const hudC={};   // evita reescribir el DOM si el texto no cambió (también ahorra trabajo al traductor)
function setT(id,v){if(hudC[id]!==v){hudC[id]=v;$(id).textContent=v}}
export function updateHUD(){
  setT('#dist',fmt(G.s/10));setT('#lamps',String(G.lit.size));
  const found=new Set([...G.found].map(lmType));
  setT('#places',found.size+'/'+LM.length);
  chipEls.forEach((e,i)=>e.classList.toggle('on',found.has(i)));
  const k=Math.ceil((G.s+30-LM_OFF)/LM_GAP),d=Math.max(0,Math.round((lmPos(k)-G.s)/100)*10);
  setT('#next','Siguiente: '+LM[lmType(k)]+' en '+d+' m');
}
