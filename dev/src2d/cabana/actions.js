/* Acciones del jugador: reparar un objeto, detectar el final y reiniciar el avance */
import {W,uHap,uCap} from './util.js';
import {ITEMS} from './items.js';
import {state,cur,rt,KEY,OLD_KEY,CLEAN_MIN,CELEB_KEY} from './state.js';
import {status,missing,nameOf,avail,progress} from './rules.js';
import {toast,updateUI,updateLoot} from './ui.js';
import {burst,celebrate,clearCeleb} from './fx.js';
import {A} from './audio.js';
import {save} from './persist.js';
import {makeGrime,measure} from './dirt.js';

export function checkDone(){if(!state.done&&progress()>=.995){state.done=true;toast('Tu cabaña está lista. Buen trabajo.');uHap([20,80,20,80,40]);save();celebrate()}}
export function attempt(o){
  if(state.repaired[o.id]){toast(o.name+' ya está reparado');return}
  const s=status(o);
  if(s.k!=='ready'){
    if(missing(o).length)toast('Primero repara: '+missing(o).map(nameOf).join(', '));
    else if((cur.items[o.id]||0)<CLEAN_MIN)toast('Limpia más esa zona antes de repararla');
    else toast('Faltan '+(o.cost-avail())+' tablas. Sigue limpiando.');
    return;
  }
  state.spent+=o.cost;state.repaired[o.id]=true;rt.sceneDirty=true;
  const r0=o.rects[0];burst(r0[0]+r0[2]/2,r0[1]+r0[3]/2);
  A.chime(((o.rects[0][0]+o.rects[0][2]/2)/W-.5)*8);A.rain(!!state.repaired.techo);uHap([12,60,12]);uCap('Campanita de reparación',1500);toast(o.name+' reparado. Ganaste: '+o.reward[0]);
  updateUI();updateLoot();checkDone();save();
}
export function resetAll(){
  try{localStorage.removeItem(KEY);localStorage.removeItem(OLD_KEY)}catch(e){}
  state.repaired={};state.spent=0;state.done=false;state.best=0;rt.sceneDirty=true;
  makeGrime();ITEMS.forEach(o=>o.flash=0);measure();updateUI();updateLoot();A.rain(false);try{localStorage.removeItem(CELEB_KEY)}catch(e){}clearCeleb();toast('Cabaña reiniciada');
}
