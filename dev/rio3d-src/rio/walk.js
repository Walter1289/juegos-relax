/* Caminar el camino: tras liberar las luces en el templo, un botón deja bajar de la canoa y recorrer a pie el camino hasta la cabaña de la colina.
   Nada avanza solo: mantén presionado para caminar, desliza a los lados para mirar, suelta para detenerte. */
import * as THREE from 'three';
import {S,P} from './state.js';
import {cam} from './core.js';
import {H,lmType} from './world.js';
import {lmMade} from './lm-data.js';
import {STILL} from '../still.js';
import {IN} from './input.js';
import {toast} from './hud.js';
import {lang} from '../i18n.js';
import {camino} from '../lightmsg.js';
const T3=(a)=>a[lang()]||a.es;
let btn=null,back=null,W=null,wasStill=false,pt=[],cum=[],len=0,tempG=null,vel=0,yawOff=0,arrived=false,bobT=0,arrP=0;
const V=new THREE.Vector3();
S.walk=false;
const mkBtn=(id,css)=>{const b=document.createElement('button');b.type='button';b.id=id;b.style.cssText='position:fixed;z-index:58;min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #8a6a40;background:rgba(60,38,26,.86);color:#fbf1e0;font:600 .88rem system-u'+'i,sans-serif;display:none;'+css;document.body.appendChild(b);return b};
function init(){
  btn=mkBtn('walkBtn','left:50%;transform:translateX(-50%);bottom:max(150px,calc(env(safe-area-inset-bottom) + 142px));');
  back=mkBtn('walkBack','left:50%;transform:translateX(-50%);bottom:max(96px,calc(env(safe-area-inset-bottom) + 88px));');
  btn.onclick=start;back.onclick=stop;
}
/* temple con camino cercano (en coordenadas del río) */
function templeNear(ps){for(const [k,g] of lmMade){if(lmType(k)===5&&g.userData.path&&Math.abs(-g.position.z-ps)<90)return g}return null}
function start(){
  const g=tempG;if(!g)return;g.updateMatrixWorld(true);
  pt=g.userData.path.map(([x,z])=>{const v=g.localToWorld(new THREE.Vector3(x,0,z));return[v.x,v.z]});
  cum=[0];for(let i=1;i<pt.length;i++)cum.push(cum[i-1]+Math.hypot(pt[i][0]-pt[i-1][0],pt[i][1]-pt[i-1][1]));len=cum[cum.length-1];
  const h=g.userData.hill;const hv=g.localToWorld(new THREE.Vector3(h[0],0,h[1]));
  W={u:0,hill:[hv.x,hv.z]};wasStill=STILL.on;STILL.on=true;S.walk=true;arrived=false;vel=0;yawOff=0;arrP=0;
  toast(T3({es:'Mantén presionado para caminar · desliza a los lados para mirar · suelta para detenerte',en:'Press and hold to walk · slide sideways to look around · release to stop',ja:'長押しで歩く · 横にスライドで見回す · 離すと止まります'}));
}
function stop(){S.walk=false;W=null;STILL.on=wasStill}
function pos(u){const d=u*len;let i=1;while(i<cum.length-1&&cum[i]<d)i++;const t=(d-cum[i-1])/Math.max(1e-6,cum[i]-cum[i-1]),a=pt[i-1],b=pt[i];return[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,Math.atan2(b[0]-a[0],-(b[1]-a[1]))]}
const wrap=a=>Math.atan2(Math.sin(a),Math.cos(a));
export function walkStep(dt){
  if(!btn&&typeof document!=='undefined')init();if(!btn)return;
  const show=S.started&&camino()&&!S.walk&&!S.X.photo;
  tempG=show?templeNear(P.dist||-P.pz):null;
  btn.style.display=tempG?'block':'none';if(tempG)btn.textContent=T3({es:'Caminar hacia la colina',en:'Walk to the hill',ja:'丘へ歩く'});
  back.style.display=S.walk?'block':'none';if(S.walk)back.textContent=T3({es:'Volver a la canoa',en:'Back to the canoe',ja:'カヌーに戻る'});
  if(!S.walk||!W)return;
  const hold=P.hold||P.key.up,go=hold&&!arrived;
  vel+=((go?2.3:0)-vel)*Math.min(1,dt*3);W.u=Math.min(1,W.u+vel*dt/len);
  const [x,z,yaw0]=pos(W.u);
  /* al llegar: la cabaña queda de frente */
  if(W.u>=.999&&!arrived){arrived=true;toast(T3({es:'Llegaste a la cabaña de la colina. Aquí el camino descansa.',en:'You reached the hill cabin. The path rests here.',ja:'丘の小屋に着きました。道はここで休みます。'}))}
  let yaw=yaw0;if(arrived){const dx=W.hill[0]-x,dz=W.hill[1]-z;yaw=Math.atan2(dx,-dz)}
  yawOff+=((hold&&!arrived?IN.steer:0)*1.1)*dt;yawOff*=Math.exp(-dt*(hold?.15:.6));yawOff=Math.max(-1.2,Math.min(1.2,yawOff));
  bobT+=vel*dt*2.4;const cm=(window.UX&&UX.calm&&UX.calm())?.25:1;
  const y=H(x,-z)+1.7+Math.sin(bobT)*.05*Math.min(1,vel/2)*cm;
  arrP+=((arrived?.34:0)-arrP)*Math.min(1,dt*1.2);
  cam.position.set(x,y,z);cam.rotation.set(-IN.pitch*.2+arrP,-(yaw+yawOff),0,'YXZ');
}
