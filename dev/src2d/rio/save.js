/* save.js — guardado local (localStorage), carga y reinicio del avance */
import {KEY,G} from './state.js';
import {toast,updateHUD} from './ui.js';

export function save(){
  if(!G.started)return;
  try{localStorage.setItem(KEY,JSON.stringify({s:Math.round(G.s),ox:Math.round(G.ox),clock:Math.round(G.clock),lit:[...G.lit].slice(-1500),found:[...G.found]}))}catch(e){}
}
let saveT=0;
export const saveSoon=()=>{clearTimeout(saveT);saveT=setTimeout(save,1500)};
export function load(){
  try{
    const o=JSON.parse(localStorage.getItem(KEY)||'null');
    if(o){G.s=o.s||0;G.ox=o.ox||0;G.clock=o.clock||0;(o.lit||[]).forEach(i=>G.lit.add(i));(o.found||[]).forEach(i=>G.found.add(i))}
  }catch(e){}
}
export function resetAll(){
  try{localStorage.removeItem(KEY)}catch(e){}
  G.s=0;G.ox=0;G.vx=0;G.v=36;G.clock=0;G.lit.clear();G.found.clear();updateHUD();toast('El río vuelve a empezar');
}
