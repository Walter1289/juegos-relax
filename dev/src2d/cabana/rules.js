/* Reglas del juego: tablas disponibles, progreso y estado de cada reparación */
import {ITEMS} from './items.js';
import {state,cur,CLEAN_MIN} from './state.js';

/* ===== Reglas del juego ===== */
export const RATE=200,rate=()=>RATE*(state.repaired.escalera?1.1:1);
export const avail=()=>Math.floor((state.best||0)*rate())-state.spent;
export const doneCount=()=>ITEMS.filter(o=>state.repaired[o.id]).length;
export const progress=()=>.55*Math.min(1,cur.all/.96)+.45*doneCount()/ITEMS.length;
export const nameOf=id=>ITEMS.find(i=>i.id===id).name.toLowerCase();
export const missing=o=>(o.needs||[]).filter(id=>!state.repaired[id]);
export function status(o){
  if(state.repaired[o.id])return {k:'done',t:'Reparado'};
  if(missing(o).length)return {k:'locked',t:'Necesita: '+missing(o).map(nameOf).join(', ')};
  const c=cur.items[o.id]||0;
  if(c<CLEAN_MIN)return {k:'locked',t:'Limpia la zona · '+Math.round(c/CLEAN_MIN*100)+'%'};
  if(avail()<o.cost)return {k:'locked',t:'Faltan '+(o.cost-avail())+' tablas'};
  return {k:'ready',t:'Listo · '+o.cost+' tablas'};
}
