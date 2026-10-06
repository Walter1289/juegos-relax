/* app.js — orquestador de la Cabaña 3D: construye la escena en orden, enlaza módulos y corre el bucle de animación */
import {R,RT,IT,scene,cam,resize} from './core.js';
import {A} from '../audio.js';
import {addVignette} from '../style.js';
import './i18n.js';
import {el,initTex} from './util.js';
import {ITEMS} from './items.js';
import {initLights,makeHand,makeWin,lightStep} from './lights.js';
import {buildWorld,worldStep} from './world.js';
import {initAmbient,ambientStep,initParts,partsStep} from './fx.js';
import {buildStruct} from './struct.js';
import {W} from './kit.js';
import {buildItemsA} from './items-a.js';
import {buildItemsB} from './items-b.js';
import {state,load,applyVisuals,doneCount} from './state.js';
import {refreshBlob} from './blobs.js';
import {cleanOf,measure,progress,dirtyNear} from './dirt.js';
import {C,resetCam,panBy,zoomBy,focusOn,makeCamUI,bindKeys,camStep} from './camera.js';
import {toast,buildChips,updateLoot,updateUI,makeNext,updateNext,bindHud,trackPanelHeight} from './ui.js';
import {cat,makeCat,catStep} from './cat.js';
import {makeRing,bindInput,isIdle,handStep,pick} from './input.js';
import {attempt,askReset} from './actions.js';
import {star,fest,initSpecial,shootStar,starStep,startFest,festStep,fl2} from './special.js';

/* ---- construcción de la escena (el orden fija la secuencia de Math.random y de materiales) ---- */
initLights();
initTex();
buildWorld();
initAmbient();
buildStruct();
buildItemsA();
buildItemsB();
W.traverse(o=>{if(o.isMesh&&!o.userData.item){o.castShadow=true;o.receiveShadow=true}});
Object.values(IT).forEach(it=>it.blobs.forEach(m=>{m.castShadow=false}));
addVignette();
Object.values(IT).forEach(it=>it.blobs.forEach(refreshBlob));

/* ---- interfaz, estado guardado y entrada ---- */
buildChips(o=>{focusOn(o);attempt(o)});
initParts();
load(toast);applyVisuals();updateUI();updateLoot();
makeCamUI();makeRing();makeNext(focusOn);
makeCat();makeHand();
bindInput();
PZ.ctx=()=>A.ctx;PZ.started=()=>RT.started;
bindHud(askReset);
el('go').onclick=()=>{try{A.init();A.resume();A.rain(RT.rainOn);A.setMood(progress(),1)}catch(e){}el('start').hidden=true;RT.started=true;
  if(doneCount()===ITEMS.length)fest.armT=RT.T+3;
  setTimeout(()=>{el('hint').style.opacity=0},12000);
  setTimeout(()=>toast('Llevas un buen rato aquí: respira hondo y estira un poco los hombros.'),25*60*1000)};
bindKeys();
initSpecial();
makeWin();

/* ================= bucle ================= */
let last=performance.now(),hudT=0,perfAcc=0,perfN=0,slowN=0,pr=Math.min(devicePixelRatio||1,1.5);
function frame(now){
  requestAnimationFrame(frame);
  if(PZ.on){last=now;return}
  const dt=Math.min(.05,(now-last)/1000);last=now;RT.T+=dt;
  // rendimiento: si el dispositivo va lento, baja la resolución de render poco a poco
  perfAcc+=dt;perfN++;if(perfAcc>3){const avg=perfAcc/perfN;perfAcc=0;perfN=0;slowN=avg>.027?slowN+1:0;if(slowN>=2&&pr>1){slowN=0;pr=Math.max(1,pr-.25);R.setPixelRatio(pr);resize()}}
  if(RT.started){star.next-=dt;if(star.next<=0){star.next=50+Math.random()*80;shootStar()}starStep(dt);
    if(!fest.on&&!fest.shown&&RT.T>fest.armT&&doneCount()===ITEMS.length)startFest();festStep(dt)}
  camStep(dt,isIdle());
  lightStep(dt);handStep(dt);
  ambientStep(dt,progress(),!!state.repaired.nichos);
  worldStep(dt);partsStep(dt);catStep(dt,RT.T);
  // refresco periódico de la interfaz y del ánimo del audio
  hudT-=dt;if(hudT<=0){hudT=.5;updateUI();updateNext();A.setMood(progress(),1)}
  A.update(-3,1,RT.T);
  R.render(scene,cam);
}
trackPanelHeight();
UX.init();
requestAnimationFrame(frame);
// ganchos para las pruebas
window.__cab={shoot:shootStar,celebrar:()=>{fest.shown=false;startFest()},star,fest,fl2,get T(){return RT.T},cat,dirtyNear,resetCam,panBy,zoomBy,state,IT,ITEMS,C,attempt,measure,cleanOf,applyVisuals,updateUI,pick,cam,toast,get started(){return RT.started}};
