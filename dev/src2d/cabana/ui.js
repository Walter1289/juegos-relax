/* Interfaz: aviso (toast), chips de reparación, colección y barra de progreso */
import {$} from './util.js';
import {ITEMS,TIERS} from './items.js';
import {state} from './state.js';
import {progress,avail,status} from './rules.js';

let toastT=0;
export function toast(m){const e=$('#toast');e.textContent=m;e.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>e.classList.remove('show'),2800)}
export const chipEls={};
const lootBox=document.createElement('div');lootBox.className='grp';
export function buildChips(onAttempt){
  TIERS.forEach((tn,ti)=>{
    const grp=document.createElement('div');grp.className='grp';
    const lab=document.createElement('span');lab.className='lab';lab.textContent=tn;grp.appendChild(lab);
    ITEMS.filter(o=>o.tier===ti).forEach(o=>{
      const b=document.createElement('button');
      b.type='button';b.className='chip';b.innerHTML='<b></b><small></small>';b.firstChild.textContent=o.name;
      b.onclick=()=>{o.flash=1;onAttempt(o)};grp.appendChild(b);chipEls[o.id]=b;
    });
    $('#chips').appendChild(grp);
  });
  $('#chips').appendChild(lootBox);
}
export function updateLoot(){
  lootBox.textContent='';
  const lab=document.createElement('span');lab.className='lab';lab.textContent='Colección';lootBox.appendChild(lab);
  const got=ITEMS.filter(o=>state.repaired[o.id]);
  if(!got.length){const e=document.createElement('span');e.className='loot';e.textContent='Vacía. Cada reparación te da un objeto.';lootBox.appendChild(e)}
  got.forEach(o=>{const e=document.createElement('span');e.className='loot on';e.textContent=o.reward[0];e.title=o.reward[1];lootBox.appendChild(e)});
}
export function updateUI(){
  const p=progress();
  $('#fill').style.width=(p*100).toFixed(1)+'%';$('#pct').textContent=Math.round(p*100)+'%';
  $('.bar').setAttribute('aria-valuenow',Math.round(p*100));
  $('#mats').textContent='Tablas: '+Math.max(0,avail());
  ITEMS.forEach(o=>{const s=status(o),b=chipEls[o.id];b.className='chip '+s.k;b.lastChild.textContent=s.t});
}
