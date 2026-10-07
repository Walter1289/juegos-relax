/* Ganchos de depuración window.__r3d (las pruebas dependen de ellos): estado, simulación por pasos, recuento y teletransporte. */
import {hash} from './util.js';
import {S,P} from './state.js';
import {bambooAt,gardenAt,forestAt,lmPos,mistAt,cx,tanAng,lmType,NL,castleNear,dragonS,casInfo,casLocal} from './world.js';
import {cam,scene,R} from './core.js';
import {lanternPos,dayLampAt} from './lanterns.js';
import {W} from './weather.js';
import {lmMade,LM,lmFound} from './lm-data.js';
import {setCam} from './camera.js';
import {fish,wbirds,dfs,fliers,liveH,ENC,birds} from './fauna.js';
import {massifs} from './scenery.js';
import {fwB,fw} from './moments.js';
export function installDebug(sim){
window.__r3d={dayLampAt,fc:(pos,look)=>{window.__fc=pos?()=>{cam.position.set(pos[0],pos[1],pos[2]);cam.lookAt(look[0],look[1],look[2]);cam.updateMatrixWorld()}:null},LM,lmType,NL,lmFound,lmMade,castleNear,dragonS,casInfo,casLocal,fwB,fw,cam,crit:{fish,wbirds,dfs,fliers,liveH,ENC,get scare(){return S.scareT}},sim,cnt:()=>{const r={};scene.traverse(o=>{if((o.isMesh||o.isSprite||o.isPoints)&&o.visible){let p=o,v=true;while(p){if(!p.visible){v=false;break}p=p.parent}if(!v)return;const k=(o.isInstancedMesh?"inst":o.isSprite?"sprite":o.isPoints?"pts":"mesh")+":"+(o.material.type||"");r[k]=(r[k]||0)+1}});return r},info:()=>({g:R.info.memory.geometries,t:R.info.memory.textures,p:R.info.programs.length,calls:R.info.render.calls,tris:R.info.render.triangles,lm:lmMade.size,ch:scene.children.length}),cineJump:t=>{if(S.cine)S.cine.t=t},cineOn:()=>!!S.cine,bambooAt,gardenAt,forestAt,lmPos,wbirds,massifs,birds,dfs,fish,W,mistAt,setCam,P,lanternPos,setTod:v=>{S.tod=v},scene,tp:(s,dpsi=0,dx=0)=>{P.pz=-s;P.px=cx(s)+dx;P.psi=tanAng(s)+dpsi},sideOf:k=>hash(k,9)>.5?1:-1,get tod(){return S.tod}};
}
