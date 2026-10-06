/* Estado compartido: objeto S (variables mutables que antes eran `let` globales) y el jugador P. */
import {cx,tanAng} from './world.js';
/* tod: hora del día · glowK: brillo nocturno · camMode/camK: cámara 1ª/3ª · cine/cineW: cinemática · X: extras (se enlaza en main) */
export const S={tod:.5,glowK:.3,started:false,camMode:0,camK:0,count:0,scareT:0,cine:null,cineW:0,savedS:0,X:null};
/* ---------- estado del jugador ---------- */
export const P={px:cx(0),pz:0,psi:0,v:1.5,steer:0,hold:false,pitch:0,roll:0,stroke:0,side:0,act:0,bumpT:0,dist:0,t:0,key:{up:false,l:false,r:false}};
P.pz=-30;P.px=cx(30);P.psi=tanAng(30);
export function goAt(s){P.pz=-s;P.px=cx(s);P.psi=tanAng(s);P.dist=s}
/* salta la cinemática de descubrimiento (toque del jugador) */
export function skipCine(){if(S.cine&&S.cine.t>1.5)S.cine.t=Math.max(S.cine.t,S.cine.dur-2.4)}
