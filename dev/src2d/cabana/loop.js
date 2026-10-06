/* Bucle principal: actualización por fotograma (luces, partículas, medición) y dibujo */
import {ITEMS} from './items.js';
import {rt} from './state.js';
import {updateLights,updateParts,updateMoments} from './fx.js';
import {measure} from './dirt.js';
import {updateUI} from './ui.js';
import {checkDone} from './actions.js';
import {render} from './render.js';
import {updateHab} from './habitar.js';

let lastMeasure=0;
export function update(dt,t){
  updateLights(dt);
  updateParts(dt);
  ITEMS.forEach(o=>{if(o.flash>0)o.flash=Math.max(0,o.flash-dt*1.2)});
  updateMoments(dt,t);
  updateHab(dt,t);
  if(rt.dirty&&t-lastMeasure>.35){lastMeasure=t;rt.dirty=false;measure();updateUI();if(rt.started)checkDone()}
}
let last=0;
export function frame(ms){if(window.PZ&&window.PZ.on){last=ms/1000;requestAnimationFrame(frame);return}const t=ms/1000,dt=Math.min(.05,t-last);last=t;update(dt,t);render(t);requestAnimationFrame(frame)}
