/* Linternas flotantes: colocación a lo largo del río, brillo, recogida y contador. */
import {A} from '../audio-rio.js';
import * as THREE from 'three';
import {hash,el} from './util.js';
import {S,P} from './state.js';
import {hw,cx} from './world.js';
import {spr,glowTex,scene} from './core.js';
import {spawnRipple} from './ripples.js';
import {toast} from './hud.js';
import {dayPending,dayTake,dayRand} from '../daylamp.js';
/* ---------- linternas flotantes ---------- */
const LSP=46;const lanterns=new Map(),pool=[];let collected=new Set();try{JSON.parse(localStorage.getItem('rio3d-coll')||'[]').forEach(i=>collected.add(i))}catch(e){}try{S.count=+localStorage.getItem('rio3d-lant')||0}catch(e){}
export const lanternPos=k=>{const s=70+k*LSP+hash(k,1)*20,e=(hash(k,2)*2-1)*.6*hw(s);return[cx(s)+e,-s]};
export function mkLantern(){
  const g=new THREE.Group();
  const body=new THREE.Mesh(new THREE.CylinderGeometry(.3,.3,.55,10),new THREE.MeshBasicMaterial({color:0xffd9a0}));body.position.y=.38;
  const cap=new THREE.Mesh(new THREE.CylinderGeometry(.34,.34,.06,10),new THREE.MeshBasicMaterial({color:0xc97d68}));cap.position.y=.7;
  const base=cap.clone();base.position.y=.08;
  const glow=spr(0xffc77a,3.2);glow.position.y=.45;glow.material.depthTest=false;glow.renderOrder=5;
  const refl=new THREE.Mesh(new THREE.PlaneGeometry(1,1).rotateX(-Math.PI/2),new THREE.MeshBasicMaterial({map:glowTex,color:0xffc77a,transparent:true,opacity:.4,blending:THREE.AdditiveBlending,depthWrite:false}));
  refl.scale.set(5,1,5);refl.position.y=.04;
  g.add(body,cap,base,glow,refl);g.userData={glow,refl,body};return g;
}
export function updateLanterns(t,ps){
  const k0=Math.max(0,Math.floor((ps-120)/LSP)),k1=Math.floor((ps+320)/LSP);
  for(const [k,o] of lanterns)if(k<k0||k>k1){scene.remove(o);pool.push(o);lanterns.delete(k)}
  for(let k=k0;k<=k1;k++){
    if(collected.has(k)||lanterns.has(k))continue;
    const o=pool.pop()||mkLantern();o.userData.fade=1;o.scale.setScalar(1);scene.add(o);lanterns.set(k,o);
  }
  for(const [k,o] of lanterns){
    const [x,z]=lanternPos(k);o.position.set(x,Math.sin(t*1.1+k)*.04,z);o.rotation.z=Math.sin(t*.8+k*2)*.08;
    o.userData.glow.material.opacity=(.5+.25*S.glowK)*(.8+.2*Math.sin(t*3+k));o.userData.refl.material.opacity=(.25+.3*S.glowK)*(.85+.15*Math.sin(t*2+k));
    if(o.userData.collecting){o.userData.fade-=.016;o.scale.setScalar(1+(1-o.userData.fade)*.6);o.userData.glow.material.opacity*=Math.max(0,o.userData.fade);o.userData.refl.material.opacity*=Math.max(0,o.userData.fade);
      if(o.userData.fade<=0){scene.remove(o);lanterns.delete(k);pool.push(o);o.userData.collecting=false}}
  }
}

/* recoge las linternas cercanas (antes dentro del bucle de fotogramas) */
export function collectLanterns(){
  for(const [k,o] of lanterns){if(o.userData.collecting)continue;const [x,z]=lanternPos(k);const dx=x-P.px,dz=z-P.pz;
    if(dx*dx+dz*dz<17){collected.add(k);S.count++;try{localStorage.setItem('rio3d-lant',String(S.count));localStorage.setItem('rio3d-coll',JSON.stringify([...collected]))}catch(e){}o.userData.collecting=true;
      const ang=Math.atan2(dx,-dz)-P.psi;A.lantern(Math.sin(ang));spawnRipple(x,z);el('n').textContent=S.count;
      if(S.count===1)toast('Cada linterna es una nota. Sigue el río a tu ritmo.')}}
}

/* Farolillo del día: uno dorado y más grande, una vez por día real (aparece delante de ti al empezar) */
let dl,dlPos=null;export const dayLampAt=()=>dlPos;
export function updateDayLamp(t,ps){
  if(dl===undefined||!dl&&dlPos===null&&!updateDayLamp.init){updateDayLamp.init=1;if(dayPending()){const s=ps+55+dayRand(1)*55;dlPos=[cx(s)+(dayRand(2)*2-1)*.25*hw(s),-s];dl=mkLantern();dl.scale.setScalar(1.7);dl.userData.glow.material.color.set(0xffd27a);scene.add(dl)}else dl=null}
  if(!dl)return;const [x,z]=dlPos;dl.position.set(x,Math.sin(t*1.1)*.06,z);dl.rotation.z=Math.sin(t*.8)*.08;
  const u=dl.userData;if(dl.userData.fade===undefined){u.glow.material.opacity=.75+.2*Math.sin(t*2.2);u.refl.material.opacity=.5+.15*Math.sin(t*2)}
  if(u.taken){u.fade-=.012;dl.scale.setScalar(1.7+(1-u.fade)*.9);u.glow.material.opacity*=Math.max(0,u.fade);u.refl.material.opacity*=Math.max(0,u.fade);if(u.fade<=0){scene.remove(dl);dl=null;dlPos=null}return}
  const dx=x-P.px,dz=z-P.pz;if(dx*dx+dz*dz<26&&dayTake()){u.taken=1;u.fade=1;const ang=Math.atan2(dx,-dz)-P.psi;A.lantern(Math.sin(ang));spawnRipple(x,z)}
}
