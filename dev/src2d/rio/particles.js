/* particles.js — partículas ambientales (ondas, gotas, pétalos, luciérnagas, lluvia) y paso de efectos por fotograma */
import {rnd} from './util.js';
import {V,G} from './state.js';
import {center,halfW,lmIndexAt,lmPos,lmType} from './world.js';
import {A} from './audio.js';
import {toast,updateHUD} from './ui.js';
import {fwStep} from './fireworks.js';

export const ripples=[],drops=[],petals=[],flies=[],rain=[];
for(let i=0;i<170;i++)rain.push({x:Math.random()*900,y:Math.random()*900,v:360+Math.random()*160});
for(let i=0;i<26;i++)flies.push({x:Math.random(),y:Math.random(),ph:Math.random()*6.28});
export const ripple=(x,y,r0,max,a)=>ripples.push({x,y,r:r0,max,a});
export const splash=(x,y,warm)=>{for(let i=0;i<(warm?10:6);i++)drops.push({x,y,vx:(Math.random()-.5)*(warm?90:60),vy:-Math.random()*(warm?80:50),l:0,m:.5+Math.random()*.4,warm})};
let hudT=0;
function groveNear(){const k=lmIndexAt(G.s);return lmType(k)===3&&Math.abs(G.s-lmPos(k))<520}
export function fx(dt){
  const sp=G.started?G.v:0;
  for(let i=ripples.length-1;i>=0;i--){const r=ripples[i];r.y+=sp*dt;r.r+=dt*26;if(r.r>=r.max)ripples.splice(i,1)}
  for(let i=drops.length-1;i>=0;i--){const d=drops[i];d.l+=dt;d.vy+=140*dt;d.x+=d.vx*dt;d.y+=d.vy*dt+sp*dt*.5;if(d.l>=d.m)drops.splice(i,1)}
  if(petals.length<90&&Math.random()<dt*(.8+(G.started&&groveNear()?7:0)))petals.push({x:Math.random()*V.VW,y:-10,ph:Math.random()*6.28,sp:8+Math.random()*10,rot:Math.random()*6});
  for(let i=petals.length-1;i>=0;i--){const p=petals[i];p.y+=(sp*.9+p.sp)*dt;p.x+=(Math.sin(G.clock*.9+p.ph)*14+6)*dt;p.rot+=dt;if(p.y>V.VH+20)petals.splice(i,1)}
  if(G.started){
    G.rainT-=dt;
    if(G.rainT<=0){G.rainTarget=G.rainTarget?0:1;G.rainT=G.rainTarget?rnd(40,75):rnd(80,150);if(G.rainTarget)toast('Empieza una llovizna suave')}
    G.rain+=(G.rainTarget-G.rain)*Math.min(1,dt*.25);
  }
  if(G.rain>.03){
    for(const d of rain){d.y+=d.v*dt;d.x-=d.v*.16*dt;if(d.y>V.VH+20){d.y=-20;d.x=Math.random()*(V.VW+80)}}
    if(Math.random()<dt*45*G.rain){const y=rnd(60,V.VH-40),s=V.sc-(y-V.cy);ripples.push({x:V.VW/2+center(s)-V.cs0+rnd(-1,1)*(halfW(s)-14),y,r:1,max:rnd(8,14),a:.4})}
  }
  G.rippleT-=dt;
  if(G.started&&G.rippleT<=0&&G.v>30){G.rippleT=.26;ripple(V.VW/2+G.ox-Math.sin(G.ang)*58,V.cy+Math.cos(G.ang)*58,4,30+G.v*.1,.35)}
  fwStep(dt);
  hudT-=dt;if(hudT<=0){hudT=.25;updateHUD();if(A.ctx){A.setRain(G.rain);const kk=lmIndexAt(G.s);A.space(G.ox,halfW(G.s),lmType(kk)===6?lmPos(kk)-G.s:null)}}
}
