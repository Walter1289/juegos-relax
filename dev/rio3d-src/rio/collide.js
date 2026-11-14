/* Desvío suave contra estructuras fijas del río (pilares de torii, muelles y botes amarrados, la casa de té, el embarcadero del castillo).
   Nunca detiene la canoa: al acercarse la empuja de lado y, si llega a tocar, la saca del obstáculo y le quita un poco de velocidad.
   Cada lugar declara g.userData.obs en coordenadas locales del grupo: círculo [x,z,r] o caja [x0,x1,z0,z1] (las cajas van pegadas a una orilla). */
import {A} from '../audio-rio.js';
import {S,P} from './state.js';
import {lmMade} from './lm-data.js';
import {spawnRipple} from './ripples.js';
import {hw} from './world.js';
const RB=1.25,SOFT=1.7;
export function collideLM(dt){
  if(S.visit||S.walk)return;
  for(const [,g] of lmMade){const ob=g.userData.obs;if(!ob)continue;const dx=P.px-g.position.x,dz=P.pz-g.position.z;if(dx*dx+dz*dz>8100)continue;
    const th=g.rotation.y,c=Math.cos(th),sn=Math.sin(th);let lx=dx*c-dz*sn,lz=dx*sn+dz*c,hit=false,mv=false;const near=hw(-g.position.z)*.45;
    for(const o of ob){let qx,qz,r=0,dir;
      if(o.length===3){qx=o[0];qz=o[1];r=o[2];/* junto a una orilla se rodea por el lado del río; en mitad del cauce, por donde ya va la canoa */dir=Math.abs(qx)>near?(qx>0?-1:1):(lx>=qx?1:-1)}
      else{qx=Math.max(o[0],Math.min(o[1],lx));qz=Math.max(o[2],Math.min(o[3],lz));dir=(o[0]+o[1])>0?-1:1;
        if(qx===lx&&qz===lz){/* dentro de la caja: salir por el lado del río */lx=dir<0?o[0]-RB:o[1]+RB;mv=hit=true;continue}}
      const ex=lx-qx,ez=lz-qz,d=Math.hypot(ex,ez),R=r+RB;if(d>=R+SOFT||d<1e-4)continue;
      const k=Math.min(1,1-(d-R)/SOFT);/* 0 lejos … 1 tocando */
      lx+=dir*k*k*2.6*dt;mv=true;
      if(d<R){const p=(R-d)*Math.min(1,dt*10);lx+=ex/d*p;lz+=ez/d*p;hit=true}}
    if(mv){P.px=g.position.x+lx*c+lz*sn;P.pz=g.position.z-lx*sn+lz*c}
    if(hit){P.v*=1-Math.min(.4,dt*1.2);if(P.v>1&&P.t-P.bumpT>1.4){P.bumpT=P.t;try{A.bump();spawnRipple(P.px,P.pz,.7,3,.8)}catch(e){}}}}
}
