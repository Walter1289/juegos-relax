/* actions.js — acciones del jugador: reparar un objeto (attempt), comprobar el final y reiniciar la cabaña */
import {IT,RT} from './core.js';
import {A} from '../audio.js';
import {ITEMS} from './items.js';
import {state,save,avail,doneCount,missing,nameOf,applyVisuals,resetState,CLEAN_MIN} from './state.js';
import {cur,progress,status} from './dirt.js';
import {refreshBlob} from './blobs.js';
import {burst} from './fx.js';
import {fest} from './special.js';
import {toast,updateUI,updateLoot} from './ui.js';
function checkDone(){if(!state.done&&progress()>=.995){state.done=true;toast('Tu cabaña está lista. Buen trabajo.');UX.hap([20,80,20,80,40]);save()}}
export function attempt(o){
  if(state.repaired[o.id]){toast(o.name+' ya está reparado');return}
  const s=status(o);
  if(s.k!=='ready'){
    if(missing(o).length)toast('Primero repara: '+missing(o).map(nameOf).join(', '));
    else if((cur.items[o.id]||0)<CLEAN_MIN)toast('Limpia más esa zona antes de repararla');
    else toast('Faltan '+(o.cost-avail())+' tablas. Sigue limpiando.');
    return}
  state.spent+=o.cost;state.repaired[o.id]=true;
  IT[o.id].blobs.forEach(m=>{m.userData.s=Math.min(m.userData.s,.0)});IT[o.id].blobs.forEach(refreshBlob);
  applyVisuals();burst(o.focus);A.chime((o.focus[0]-1.5)/12,ITEMS.indexOf(o)%5);A.creak();UX.hap([12,60,12]);if(doneCount()===ITEMS.length)fest.armT=RT.T+2.5;
  toast(o.name+' reparado. Ganaste: '+o.reward[0]);updateUI();updateLoot();checkDone();save();
}
// botón de reinicio: confirma, borra el guardado y repone la suciedad
export function askReset(){
  UX.ask('¿Reiniciar la cabaña desde cero?',()=>{resetState();updateUI();updateLoot();toast('Cabaña reiniciada')});
}
