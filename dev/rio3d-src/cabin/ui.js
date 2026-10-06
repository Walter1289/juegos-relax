/* ui.js — interfaz: avisos (toast), chips de objetos, colección, HUD de progreso, guía "siguiente", sonido y respiración guiada */
import {RT} from './core.js';
import {A} from '../audio.js';
import {el,sT} from './util.js';
import {ITEMS,TIERS} from './items.js';
import {state,avail,missing} from './state.js';
import {measure,progress,status} from './dirt.js';
let toastT=0;
export function toast(m){const e=el('toast');e.textContent=m;e.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>e.classList.remove('show'),3200)}
const chipEls={};
const lootBox=document.createElement('div');lootBox.className='grp';
// onPick(o): lo que ocurre al tocar el chip de un objeto (inyectado: enfocar + intentar reparar)
export function buildChips(onPick){
  TIERS.forEach((tn,ti)=>{
    const grp=document.createElement('div');grp.className='grp';
    const lab=document.createElement('span');lab.className='lab';lab.textContent=tn;grp.appendChild(lab);
    ITEMS.filter(o=>o.tier===ti).forEach(o=>{
      const b=document.createElement('button');b.type='button';b.className='chip';b.innerHTML='<b></b><small></small>';b.firstChild.textContent=o.name;
      b.onclick=()=>onPick(o);grp.appendChild(b);chipEls[o.id]=b});
    el('chips').appendChild(grp)});
  el('chips').appendChild(lootBox);
}
export function updateLoot(){
  lootBox.textContent='';const lab=document.createElement('span');lab.className='lab';lab.textContent='Colección';lootBox.appendChild(lab);
  const got=ITEMS.filter(o=>state.repaired[o.id]);
  if(!got.length){const e=document.createElement('span');e.className='loot';e.textContent='Vacía. Cada reparación te da un objeto.';lootBox.appendChild(e)}
  got.forEach(o=>{const e=document.createElement('span');e.className='loot on';e.textContent=o.reward[0];e.title=o.reward[1];lootBox.appendChild(e)})}
export function updateUI(){
  measure();const p=progress();
  el('fill').style.width=(p*100).toFixed(1)+'%';sT(el('pct'),Math.round(p*100)+'%');
  sT(el('mats'),'Tablas: '+Math.max(0,avail()));
  ITEMS.forEach(o=>{const s=status(o),b=chipEls[o.id],c='chip '+s.k;if(b.className!==c)b.className=c;sT(b.lastChild,s.t)});
}
// guía del siguiente paso
let nextB,nextO=null;
export function makeNext(onFocus){
  nextB=document.createElement('button');nextB.style.cssText='position:fixed;top:104px;left:50%;transform:translateX(-50%);z-index:6;background:var(--panel);border:1px solid var(--line);color:var(--ink);padding:7px 14px;border-radius:99px;font:inherit;font-size:.82rem;cursor:pointer;max-width:80%;opacity:0;transition:opacity .5s;pointer-events:none';nextB.id='nextb';document.body.appendChild(nextB);
  nextB.onclick=()=>{if(nextO)onFocus(nextO)};
}
export function updateNext(){
  const o=ITEMS.find(o=>!state.repaired[o.id]&&!missing(o).length);
  nextO=o||null;
  if(!o||!RT.started){nextB.style.opacity=0;nextB.style.pointerEvents='none';return}
  const st=status(o);
  sT(nextB,'Siguiente: '+(st.k==='ready'?'repara ':'limpia ')+o.name.toLowerCase()+(st.k==='ready'?' (toca su botón)':''));
  nextB.style.opacity=.92;nextB.style.pointerEvents='auto'}
/* respiración guiada */
let breathOn=false,breathTm=0;
function breathStep(i,n){n=n||0;const t=['Inhala','Sostén','Exhala'],d=[4000,1000,6000],c=el('bcircle');if(!breathOn)return;
  if(n>=15){el('btxt').textContent='Gracias por respirar';c.style.transform='scale(.7)';breathTm=setTimeout(()=>{breathOn=false;el('breath').hidden=true},2800);return}
  el('btxt').textContent=t[i];try{if(i===0)A.breathTone(true,5);if(i===2)A.breathTone(false,6)}catch(e){}
  c.style.transition='transform '+d[i]/1000+'s ease-in-out';c.style.transform=i===0?'scale(1.5)':i===2?'scale(.7)':c.style.transform;breathTm=setTimeout(()=>breathStep((i+1)%3,n+1),d[i])}
// enlaza botones del HUD superior: menú "más", sonido, reinicio (onReset) y respiración
export function bindHud(onReset){
  PZ.more(el('top'),[el('brt'),el('snd'),el('rst')].concat(UX.btns('',{hand:true,wear:true})));
  el('snd').onclick=()=>{A.on=!A.on;if(A.ctx)A.setOn(A.on);el('snd').textContent='Sonido: '+(A.on?'sí':'no')};
  el('rst').onclick=onReset;
  el('brt').onclick=()=>{breathOn=!breathOn;el('breath').hidden=!breathOn;clearTimeout(breathTm);if(breathOn){el('bcircle').style.transform='scale(.7)';breathStep(0)}};
}
// altura del panel inferior para el modo una mano (CSS --ph)
export function trackPanelHeight(){const pn=el('panel'),setPH=()=>document.documentElement.style.setProperty('--ph',pn.offsetHeight+'px');setPH();addEventListener('resize',setPH);try{new ResizeObserver(setPH).observe(pn)}catch(e){}}
