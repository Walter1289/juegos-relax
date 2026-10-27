/* Lugares: crea/descarta lugares según la distancia, detecta el descubrimiento y anima brillos, cascada y garzas. */
import {A} from '../audio-rio.js';
import {S,P} from './state.js';
import {LMS,lmPos,lmType,dragonS,setCaminoOn} from './world.js';
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
import {albumSee} from '../album.js';
import {disponibles,camino,UMBRAL,GRAN,ceremonia,ceremonias,lapK,setLapK,parts,joiner} from '../lightmsg.js';
import {lang} from '../i18n.js';
import {startCeremony} from './ceremony.js';
import {NL} from './world.js';
import {el} from './util.js';
const T3=a=>a[lang()]||a.es;
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
    {const t=lmType(k);if(lmPos(k)-ps<(t===2?70:t===10?130:55)&&ps-lmPos(k)<25&&(!lmFound.has(t)||(!S.X.hasSnap(t)&&!retaken.has(t)))){const first=!lmFound.has(t);lmFound.add(t);retaken.add(t);lmSeen.add(k);startCine(k);if(t===4)albumSee('garza');if(t===9)albumSee('loto');if(first){toast('Descubriste: '+LM[t]);try{A.chime(0,k%5)}catch(e){}saveFound();updateDiary(ps);S.X.found(t)}}}}
  /* vuelta al río: la primera vez que llegas al templo empieza tu vuelta; al regresar a un templo once lugares después, se celebra la ceremonia */
  for(let k=k0;k<=k1;k++){if(lmType(k)!==5||lmPos(k)-ps>30||ps-lmPos(k)>20||window.__cerK===k)continue;
    const lk=lapK();
    if(lk<0){window.__cerK=k;setLapK(k);toast(T3({es:'Aquí empieza tu vuelta al río. Vuelve a este templo tras recorrerlo entero y tus linternas se liberarán en una ceremonia',en:'Your lap of the river begins here. Return to this temple after travelling it all and your lanterns will be released in a ceremony',ja:'ここから川の一周が始まります。一周して寺に戻ると、ランタンは儀式で放たれます'}));continue}
    if(k<lk+NL)continue;
    window.__cerK=k;setLapK(k);const n=disponibles();
    if(n<1){toast(T3({es:'Vuelta completa. Sin linternas que liberar: la próxima vuelta llevará más luz',en:'Lap complete. No lanterns to release: the next lap will carry more light',ja:'一周しました。放つランタンがありません。次の一周は、もっと灯を運びましょう'}));continue}
    const abre=n>=UMBRAL&&!camino();ceremonia(n,abre);S.count=0;try{el('n').textContent=0}catch(e){}
    const gran=n>=GRAN;startCeremony(n,gran);
    const cer=ceremonias(),p=parts(),fr=cer<=4?p[(cer-1)*2]+joiner()+p[(cer-1)*2+1]:'';
    let msg=T3({es:'Ceremonia de liberación: '+n+' linternas suben al cielo',en:'Release ceremony: '+n+' lanterns rise into the sky',ja:'放灯の儀式：'+n+'のランタンが空へのぼります'});
    if(fr&&(abre||camino()))msg+=T3({es:' · el cartel de la cabaña descifra: «'+fr+'»',en:' · the cabin sign deciphers: “'+fr+'”',ja:' · 小屋の看板が読み解いた言葉：「'+fr+'」'});
    toast(msg);
    if(gran)setTimeout(()=>toast(T3({es:'¡Gran ceremonia! '+n+' luces, 108 o más, como las campanadas del templo en Año Nuevo',en:'Great ceremony! '+n+' lights, one for each of the 108 bell strokes',ja:'大放灯！'+n+'の灯。除夜の鐘と同じ百八つ以上'})),4500);
    if(cer===2)setTimeout(()=>toast(T3({es:'Recompensa: la luz de tu proa ahora es dorada',en:'Reward: your bow light is now golden',ja:'褒美：舳先の灯が金色になりました'})),9500);
    if(cer===3)setTimeout(()=>toast(T3({es:'Recompensa: las linternas se acercan a ti desde más lejos',en:'Reward: lanterns are drawn to you from farther away',ja:'褒美：ランタンが遠くから寄ってきます'})),9500);
    if(abre){setCaminoOn(true);const g0=lmMade.get(k);if(g0){if(g0.parent)scene.remove(g0);disposeLM(g0);lmMade.delete(k)}
      setTimeout(()=>toast(T3({es:'33 luces, como los 33 templos del peregrinaje de Kannon: se abrió un camino hacia la colina',en:'33 lights, like the 33 temples of the Kannon pilgrimage: a path opened toward the hill',ja:'33の灯。観音霊場三十三所にちなみ、丘へ続く道が開きました'})),7500)}
    else if(!camino())setTimeout(()=>toast(T3({es:'Algo despertará si llegas con 33 luces en una misma vuelta, como los 33 templos de Kannon',en:'Something will awaken if you arrive with 33 lights in one lap, like the 33 temples of Kannon',ja:'一周で33の灯を携えて戻ると、何かが目覚めます。観音霊場三十三所にちなんで'})),7500)
    break}
  {let nt=null;for(let k=k0;k<=k1;k++){if(Math.abs(lmPos(k)-ps)<60){nt=lmType(k);break}}taskTick(nt,()=>{try{A.chime(0,2)}catch(e){}})}
  for(const [,g] of lmMade){if(g.userData.job){const t0=performance.now();let r;do{r=g.userData.job.next()}while(!r.done&&performance.now()-t0<5);if(r.done){g.userData.job=null;optimizeLM(g)}}else if(g.userData.cas)castleStep(g,env.night,.016)}
  for(const s of lmG){s.material.opacity=s.userData.base*(.3+.7*S.glowK)}glowMat.uniforms.k.value=S.glowK;
  fallMat.uniforms.t.value=P.t;fallMat.uniforms.fogCol.value.copy(scene.fog.color);
  for(const q of lmAnim){if(q.nk)q.nk.rotation.x=Math.sin(P.t*.5+q.ph)*.08+Math.pow(Math.max(0,Math.sin(P.t*.23+q.ph*3)),6)*.9;else q.b.rotation.y=Math.sin(P.t*1.1+q.ph)*.12}
}
