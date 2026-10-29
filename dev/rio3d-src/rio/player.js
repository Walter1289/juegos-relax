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
let rudT=0,sw=0,swv=0,pv=0,ph=0;
export function stepPlayer(dt,s){
  if(S.started){
    const hold=P.hold||P.key.up||Math.abs(IN.pad)>.12,steerIn=S.walk?0:clamp(IN.steer+IN.pad+(P.key.r?1:0)-(P.key.l?1:0),-1,1);
    // velocidad: corriente suave + remada
    tickStill(dt,true,()=>spawnRipple(P.px,P.pz));const sk=1-STILL.k;
    const target=S.X.photo?0:2.6*(1-.85*S.cineW)*sk*(1-.3*Math.min(1,Math.abs(pv)/.45));P.v+=(target-P.v)*(STILL.menu?3:.5)*dt;
    const ta=tanAng(s);
    const turn=steerIn*(.5+Math.min(P.v,6)/6*.4);
    /* giro con inercia y resistencia del agua: el rumbo gira con retraso, hay un leve vaivén lateral y empujones suaves al remar */
    ph+=dt*(1.7+Math.abs(P.steer)*.9);
    pv+=(turn-pv)*Math.min(1,dt*.95);P.yawr=pv;
    const puls=1+.14*Math.sin(ph*2.3)*Math.min(1,Math.abs(steerIn)*1.6);
    P.psi+=pv*puls*dt;
    swv+=((-pv*P.v*.5)-swv)*Math.min(1,dt*1.1);sw+=(swv-sw)*Math.min(1,dt*1.2);
    if(Math.abs(steerIn)<.1)P.psi+=(ta-P.psi)*.32*dt;
    P.psi=clamp(P.psi,ta-1.35,ta+1.35);if(window.__lock!=null)P.psi=window.__lock;
    P.steer+=(steerIn-P.steer)*1.25*dt;
    P.px+=Math.sin(P.psi)*P.v*dt+Math.sin(ta)*1.1*sk*dt+Math.cos(P.psi)*sw*dt;
    P.pz+=-Math.cos(P.psi)*P.v*dt-Math.cos(ta)*1.1*sk*dt+Math.sin(P.psi)*sw*dt;
    const s2=-P.pz,c=cx(s2),lim=hw(s2)-1.7,e=P.px-c;
    if(Math.abs(e)>lim){P.px=c+Math.sign(e)*lim;if(P.v>1.2&&P.t-P.bumpT>1.2){A.bump();P.bumpT=P.t}P.v*=.6;P.psi+=(tanAng(s2)-P.psi)*.4}
    P.dist=Math.max(P.dist,s2);
    // remos: brazada alternada mientras se mantiene presionado
    rudT-=dt;if(Math.abs(steerIn)>.25&&rudT<=0){rudT=.7;const sd=steerIn>0?1:-1;const w=new THREE.Vector3(sd*1.2,0,.3);boat.localToWorld(w);spawnRipple(w.x,w.z)}
  }
}
