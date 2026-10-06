/* controls.js — botones (empezar, sonido, reiniciar), guardado al salir y manejo del audio al cambiar de pestaña */
import {$} from './util.js';
import {G} from './state.js';
import {A} from './audio.js';
import {toast} from './ui.js';
import {save,resetAll} from './save.js';

export function initControls(){
  $('#go').onclick=()=>{G.started=true;G.hintT=0;$('#start').hidden=true;A.init();toast(G.s>0?'Bienvenido de vuelta al río':'Deja que la corriente te lleve')};
  $('#mute').onclick=e=>{A.mute(!A.muted);e.currentTarget.textContent='Sonido: '+(A.muted?'no':'sí')};
  let resetT=0;
  $('#reset').onclick=e=>{
    const b=e.currentTarget;
    if(b.dataset.arm){clearTimeout(resetT);delete b.dataset.arm;b.textContent='Reiniciar';resetAll();return}
    b.dataset.arm='1';b.textContent='¿Seguro? Se borra el avance';
    resetT=setTimeout(()=>{delete b.dataset.arm;b.textContent='Reiniciar'},3500);
  };
  addEventListener('pagehide',save);
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden)save();
    const c=A.ctx;if(c){if(document.hidden)c.suspend();else if(!window.PZ.on)c.resume()}
  });
}
