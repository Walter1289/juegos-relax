/* Arranque de la Cabaña del Acantilado: cablea módulos, controles, ganchos de prueba, idiomas y pausa */
import '../../rio3d-src/pause.js'; // define window.PZ (pausa, menú «Más»)
import '../../rio3d-src/ux.js'; // define window.UX (idioma, subtítulos, háptica)
import {$} from './util.js';
import {state,base,rt,CELEB_KEY} from './state.js';
import {progress} from './rules.js';
import {toast,updateUI,updateLoot,buildChips} from './ui.js';
import {makeGrime,countDirty,measure,age} from './dirt.js';
import {save,load} from './persist.js';
import {attempt,resetAll} from './actions.js';
import {A} from './audio.js';
import {celebrate} from './fx.js';
import {frame} from './loop.js';
import {initInput} from './input.js';
import {initCalm} from './calm.js';
import {initI18n} from './i18n.js';
import {initHabitar,addHabTexts,addStoryTexts,addSeasonTexts} from './habitar.js';

/* ===== Controles y arranque ===== */
buildChips(attempt);
initInput();
$('#go').onclick=()=>{rt.started=true;$('#start').hidden=true;A.init();if(state.done)celebrate();toast(rt.pendingMsg||'Empieza limpiando el piso. Arrastra para lavar.');rt.pendingMsg=''};
$('#mute').onclick=e=>{A.mute(!A.muted);e.currentTarget.textContent='Sonido: '+(A.muted?'no':'sí')};
let resetT=0;
$('#reset').onclick=e=>{
  const b=e.currentTarget;
  if(b.dataset.arm){clearTimeout(resetT);delete b.dataset.arm;b.textContent='Reiniciar';resetAll();return}
  b.dataset.arm='1';b.textContent='¿Seguro? Se borra el avance';
  resetT=setTimeout(()=>{delete b.dataset.arm;b.textContent='Reiniciar'},3500);
};
makeGrime();
{const c0=countDirty();base.all=Math.max(1,c0.all);base.items=c0.items}
requestAnimationFrame(frame);
load(()=>{rt.dirty=true;measure();updateUI();updateLoot()});
addEventListener('pagehide',()=>{if(rt.started)save()});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&rt.started)save()});
initCalm();

/* Pausa compartida: audio y estado de arranque que consulta PZ */
const PZ=window.PZ;
PZ.ctx=()=>A.ctx;PZ.started=()=>rt.started;

/* Ganchos de prueba (tests/boot.js y comprobaciones manuales) */
window.__jr={state:()=>({started:rt.started,repaired:Object.keys(state.repaired).length,progress:+progress().toFixed(3)})};
window.__celebrar=()=>{try{localStorage.removeItem(CELEB_KEY)}catch(e){}celebrate()};
window.__envejecer=h=>{age(h);measure();updateUI();toast(rt.pendingMsg||'Menos de 2 h: aún no se ensucia')};

/* Idiomas es/en/ja, título y menú «Más» (breath, sonido, reiniciar y ajustes de UX) */
initI18n();
const UX=window.UX;
addHabTexts(UX);addStoryTexts(UX);addSeasonTexts(UX);
document.title=UX.tr('Cabaña del Acantilado');
PZ.more(document.querySelector('header'),[$('#breath-btn'),$('#mute'),$('#reset'),...UX.btns('btn',{wear:true})]);
initHabitar();
UX.init();
