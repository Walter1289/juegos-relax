/* Lugares: crea/descarta lugares según la distancia, detecta el descubrimiento y anima brillos, cascada y garzas. */
import {A} from '../audio-rio.js';
import {S,P} from './state.js';
import {LMS,lmPos} from './world.js';
import {scene} from './core.js';
import {toast,updateDiary} from './hud.js';
import {lmMade,lmFound,retaken,lmSeen,LM,saveFound,lmG,lmAnim} from './lm-data.js';
import {disposeLM,glowMat,fallMat} from './lm-parts.js';
import {buildLM} from './lm-build.js';
import {startCine} from './cine.js';
export function updateLandmarks(ps){
  const k0=Math.max(0,Math.floor((ps-140)/LMS)),k1=Math.floor((ps+340)/LMS);
  for(const [k,g] of lmMade)if(k<k0||k>k1){if(g.parent)scene.remove(g);disposeLM(g);lmMade.delete(k)}
  for(let k=k0;k<=k1;k++){let g=lmMade.get(k);if(!g){g=buildLM(k);lmMade.set(k,g)}if(!g.parent)scene.add(g);
    {const t=k%10;if(lmPos(k)-ps<(t===2?70:55)&&ps-lmPos(k)<25&&(!lmFound.has(t)||(!S.X.hasSnap(t)&&!retaken.has(t)))){const first=!lmFound.has(t);lmFound.add(t);retaken.add(t);lmSeen.add(k);startCine(k);if(first){toast('Descubriste: '+LM[t]);try{A.chime(0,k%5)}catch(e){}saveFound();updateDiary(ps);S.X.found(t)}}}}
  for(const s of lmG){s.material.opacity=s.userData.base*(.3+.7*S.glowK)}glowMat.uniforms.k.value=S.glowK;
  fallMat.uniforms.t.value=P.t;fallMat.uniforms.fogCol.value.copy(scene.fog.color);
  for(const q of lmAnim){if(q.nk)q.nk.rotation.x=Math.sin(P.t*.5+q.ph)*.08+Math.pow(Math.max(0,Math.sin(P.t*.23+q.ph*3)),6)*.9;else q.b.rotation.y=Math.sin(P.t*1.1+q.ph)*.12}
}
