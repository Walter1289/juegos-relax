/* Movimiento de la canoa: corriente + dirección, límites de la orilla, rebote y ondas de los remos. */
import {A} from '../audio-rio.js';
import * as THREE from 'three';
import {clamp} from './util.js';
import {S,P} from './state.js';
import {tanAng,cx,hw} from './world.js';
import {boat} from './boat.js';
import {spawnRipple} from './ripples.js';
import {IN} from './input.js';
import {STILL,tickStill} from '../still.js';
let rudT=0;
export function stepPlayer(dt,s){
  if(S.started){
    const hold=P.hold||P.key.up,steerIn=clamp(IN.steer+(P.key.r?1:0)-(P.key.l?1:0),-1,1);
    // velocidad: corriente suave + remada
    tickStill(dt,true,()=>spawnRipple(P.px,P.pz));const sk=1-STILL.k;
    const target=S.X.photo?0:2.6*(1-.85*S.cineW)*sk;P.v+=(target-P.v)*.5*dt;
    const ta=tanAng(s);
    const turn=steerIn*(.55+Math.min(P.v,6)/6*.45);
    P.psi+=turn*dt;
    if(Math.abs(steerIn)<.1)P.psi+=(ta-P.psi)*.32*dt;
    P.psi=clamp(P.psi,ta-1.35,ta+1.35);if(window.__lock!=null)P.psi=window.__lock;
    P.steer+=(steerIn-P.steer)*3*dt;
    P.px+=Math.sin(P.psi)*P.v*dt+Math.sin(ta)*1.1*sk*dt;
    P.pz+=-Math.cos(P.psi)*P.v*dt-Math.cos(ta)*1.1*sk*dt;
    const s2=-P.pz,c=cx(s2),lim=hw(s2)-1.7,e=P.px-c;
    if(Math.abs(e)>lim){P.px=c+Math.sign(e)*lim;if(P.v>1.2&&P.t-P.bumpT>1.2){A.bump();P.bumpT=P.t}P.v*=.6;P.psi+=(tanAng(s2)-P.psi)*.4}
    P.dist=Math.max(P.dist,s2);
    // remos: brazada alternada mientras se mantiene presionado
    rudT-=dt;if(Math.abs(steerIn)>.25&&rudT<=0){rudT=.7;const sd=steerIn>0?1:-1;const w=new THREE.Vector3(sd*1.2,0,.3);boat.localToWorld(w);spawnRipple(w.x,w.z)}
  }
}
