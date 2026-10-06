/* Lugares: crea/descarta lugares según la distancia, detecta el descubrimiento y anima brillos, cascada y garzas. */
import {A} from '../audio-rio.js';
import {S,P} from './state.js';
import {LMS,lmPos,lmType,dragonS} from './world.js';
import {buildDragon} from './dragon.js';
import {scene} from './core.js';
import {toast,updateDiary} from './hud.js';
import {lmMade,lmFound,retaken,lmSeen,LM,saveFound,lmG,lmAnim} from './lm-data.js';
import {disposeLM,glowMat,fallMat} from './lm-parts.js';
import {buildLM} from './lm-build.js';
import {optimizeLM} from './lm-parts.js';
import {startCine} from './cine.js';
import {castleStep} from './castle.js';
import {env} from './env.js';
import {taskTick} from '../tasks.js';
const dragons=new Map();try{window.__dragons=dragons}catch(e){}
function updateDragons(ps,k0,k1){
  for(const [k,g] of dragons){const s=g.userData.dragon.s;if(s<ps-140||s>ps+380){scene.remove(g);disposeLM(g);dragons.delete(k)}}
  for(let k=Math.max(0,k0-1);k<=k1+2;k++){if(lmType(k)!==10||dragons.has(k))continue;const s=dragonS(k);if(s<ps-140||s>ps+380)continue;const g=buildDragon(k);dragons.set(k,g);scene.add(g)}
  for(const [,g] of dragons){const d=g.userData.dragon;if(!d.roared&&ps>d.s-60&&ps<d.s+20){d.roared=true;try{A.roar()}catch(e){}toast('El dragón anuncia el Castillo de la Garza Blanca')}}}
export function updateLandmarks(ps){
  const k0=Math.max(0,Math.floor((ps-140)/LMS)),k1=Math.floor((ps+340)/LMS);
  updateDragons(ps,k0,k1);
  for(const [k,g] of lmMade)if(k<k0||k>k1){if(g.parent)scene.remove(g);disposeLM(g);lmMade.delete(k)}
  for(let k=k0;k<=k1;k++){let g=lmMade.get(k);if(!g){g=buildLM(k);lmMade.set(k,g)}if(!g.parent)scene.add(g);
    {const t=lmType(k);if(lmPos(k)-ps<(t===2?70:t===10?130:55)&&ps-lmPos(k)<25&&(!lmFound.has(t)||(!S.X.hasSnap(t)&&!retaken.has(t)))){const first=!lmFound.has(t);lmFound.add(t);retaken.add(t);lmSeen.add(k);startCine(k);if(first){toast('Descubriste: '+LM[t]);try{A.chime(0,k%5)}catch(e){}saveFound();updateDiary(ps);S.X.found(t)}}}}
  {let nt=null;for(let k=k0;k<=k1;k++){if(Math.abs(lmPos(k)-ps)<60){nt=lmType(k);break}}taskTick(nt,()=>{try{A.chime(0,2)}catch(e){}})}
  for(const [,g] of lmMade){if(g.userData.job){const t0=performance.now();let r;do{r=g.userData.job.next()}while(!r.done&&performance.now()-t0<5);if(r.done){g.userData.job=null;optimizeLM(g)}}else if(g.userData.cas)castleStep(g,env.night,.016)}
  for(const s of lmG){s.material.opacity=s.userData.base*(.3+.7*S.glowK)}glowMat.uniforms.k.value=S.glowK;
  fallMat.uniforms.t.value=P.t;fallMat.uniforms.fogCol.value.copy(scene.fog.color);
  for(const q of lmAnim){if(q.nk)q.nk.rotation.x=Math.sin(P.t*.5+q.ph)*.08+Math.pow(Math.max(0,Math.sin(P.t*.23+q.ph*3)),6)*.9;else q.b.rotation.y=Math.sin(P.t*1.1+q.ph)*.12}
}
