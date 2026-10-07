/* Río 3D: entrada fina — arranque, bucle de fotogramas y enlace entre módulos y extras. */
/* OJO: el orden de estos imports es el orden de creación del escenario (afecta al orden de la escena y a la secuencia de Math.random/UUID); no reordenar. */
import {A} from '../audio-rio.js';
import {addVignette,addPaper} from '../style.js';
import {SEAS,seasonIdx} from '../season.js';
import {initExtras} from '../extras.js';
import '../pause.js';
import {tr,initI18n} from '../i18n.js';
import {el,hash} from './util.js';
import {P,S,goAt} from './state.js';
import {lmPos,LMS,cx,hw,lmType} from './world.js';
import {scene,R,cam,canvas} from './core.js';
import {applyEnv,water,env,todName} from './env.js';
import {swayU} from './props.js';
import {ensureTerrain} from './terrain.js';
import {updateFireflies} from './fireflies.js';
import {placeBoat,updatePaddles,updateCharacter,bowLight,blGlow,bl} from './boat.js';
import {updateRipples,spawnRipple} from './ripples.js';
import './input.js';
import {updateHud,toast,savePos} from './hud.js';
import {updateLanterns,collectLanterns,mkLantern,updateDayLamp} from './lanterns.js';
import {weather} from './weather.js';
import {stepPlayer} from './player.js';
import {LM,lmFound} from './lm-data.js';
import './lm-parts.js';
import './lm-build.js';
import {cineStep} from './cine.js';
import {updateCamera,setCam} from './camera.js';
import {updateLandmarks} from './landmarks.js';
import {buildFoam,foamMat,foam} from './shore.js';
import {updateCritters,updateFish,updateFauna} from './fauna.js';
import {updateRocks,updateFarBoats,updateMassifs,massMistMat} from './scenery.js';
import {updatePetals,updateFW,updateAur} from './moments.js';
import {installDebug} from './debug.js';
let last=performance.now();
addVignette();addPaper();
/* ---------- bucle ---------- */
function frame(now,manual){
  if(!manual)requestAnimationFrame(frame);
  if(PZ.on&&!manual){last=now;return}
  const dt=Math.max(0,Math.min(.05,(now-last)/1000));X.tick(Math.max(0,(now-last)/1000));last=now;P.t+=dt;
  const s=-P.pz;
  stepPlayer(dt,s);
  // canoa, pétalos, remos, personaje y cámara
  const bob=placeBoat();
  updatePetals(dt);
  updatePaddles();
  updateCharacter(dt);
  updateCamera(dt,bob);
  cineStep(dt);if(window.__fc)window.__fc();
  // mundo
  if(S.started&&!X.photo)S.tod=(S.tod+dt/900)%1;
  applyEnv(P.px,P.pz);weather(dt,s);
  ensureTerrain(P.px,P.pz,buildFoam);
  swayU.value=P.t;water.position.set(P.px,0,P.pz);water.material.uniforms.t.value=P.t;
  const night=env.night;
  bowLight.intensity=S.glowK*3.2;blGlow.material.opacity=.3+.35*S.glowK;
  bl.material.color.set(0xffe2a8);
  updateRocks(dt,P.dist||s);updateFarBoats(dt,P.dist||s);updateMassifs(P.dist||s);massMistMat.color.copy(scene.fog.color).multiplyScalar(1.05);updateCritters(dt,P.dist||s);updateFish(dt,P.dist||s);updateFauna(dt,P.dist||s);foamMat.opacity=.55+.15*Math.sin(P.t*.8);foam.position.y=Math.sin(P.t*.9)*.01;
  updateLanterns(P.t,P.dist||s);updateLandmarks(P.dist||s);
  collectLanterns();updateDayLamp(P.t,P.dist||s);
  updateRipples(dt);
  updateFW(dt,night);updateAur(night);
  updateFireflies(night);
  A.update(P.v+Math.abs(P.steer)*1.5,night,P.t);
  updateHud(dt,s);
  X.camAdjust();X.update(dt,P.dist||s);
  if(!manual)X.render();
}
/* ---------- enlace con los extras (calidad, modo foto, diario con fotos, ajustes) ---------- */
const X=initExtras({R,scene,cam,canvas,el,toast,P,LM,lmFound,lmPos,LMS,mkLantern,cx,hw,lmType,A,hash,spawnRipple,SEAS,seasonIdx,
  started:()=>S.started,getTod:()=>S.tod,setTod:v=>{S.tod=v},todName,getCount:()=>S.count,setCount:v=>{S.count=v;try{localStorage.setItem('rio3d-lant',String(v))}catch(e){}el('n').textContent=v},
  glowK:()=>S.glowK,restart:()=>{S.cine=null;S.cineW=0;try{localStorage.removeItem('rio3d-pos')}catch(e){}goAt(0);P.v=2.6;P.dist=0;P.pitch=0;S.savedS=0;toast('De vuelta al inicio del río')},setCam,getCam:()=>S.camMode,savePos,nearLM:ps=>{const k=Math.round((ps-240)/LMS);for(const kk of[k,k-1,k+1])if(Math.abs(lmPos(kk)-ps)<130&&kk>=0)return LM[lmType(kk)];return ''}});
S.X=X;
el('n').textContent=S.count;
PZ.ctx=()=>A.ctx;PZ.started=()=>S.started;
requestAnimationFrame(frame);
{const capEl=el('cap');let capT=0;
  const subsOn=()=>{try{return localStorage.getItem('rio3d-subs')==='1'}catch(e){return false}};
  A.onCap=k=>{if(!subsOn()||!capEl)return;capEl.textContent='['+tr(k)+']';capEl.style.opacity=1;clearTimeout(capT);capT=setTimeout(()=>capEl.style.opacity=0,2600)};
  try{const h=localStorage.getItem('rio3d-hand');if(h==='r'||h==='l')document.body.classList.add('hand-'+h)}catch(e){}
  initI18n()}
/* simulación por pasos para las pruebas */
const sim=(n,dt,fn)=>{window.__lastT=window.__lastT||last;for(let i=0;i<n;i++){window.__lastT+=dt*1000;if(fn)fn(i);frame(window.__lastT,true)}last=window.__lastT};
installDebug(sim);
