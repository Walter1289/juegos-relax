/* rules.js — reglas del juego: avance, dirección, choques con orillas y rocas, linternas y descubrimiento de lugares */
import {$,clamp,hap,cap} from './util.js';
import {V,G,keys} from './state.js';
import {center,halfW,CELL,genCell,LM,lmIndexAt,lmPos,lmType} from './world.js';
import {sx,sy} from './objects.js';
import {A} from './audio.js';
import {ripple,splash} from './particles.js';
import {toast,updateHUD} from './ui.js';
import {saveSoon} from './save.js';
import {taskTick} from '../../rio3d-src/tasks.js';
import {dayPending,dayTake,dayRand} from '../../rio3d-src/daylamp.js';
import {albumSee} from '../../rio3d-src/album.js';

function bump(dir,vol){G.bumpT=.7;hap(vol&&vol<1?10:16);ripple(V.VW/2+G.ox+dir*20,V.cy,6,40,.5);A.bump(vol||1,dir)}
function paddleStroke(){
  const side=Math.sin(G.phase+.01)>=0?1:-1;
  const x=V.VW/2+G.ox+Math.cos(G.ang)*side*46,y=V.cy+Math.sin(G.ang)*side*46+20;
  splash(x,y,false);ripple(x,y,3,28,.55);A.paddle(side);
}
function lightLantern(o){
  G.lit.add(o.id);const x=sx(o),y=sy(o);
  ripple(x,y,6,50,.6);splash(x,y,true);A.next(.15,(x-(V.VW/2+G.ox))/40,(y-V.cy)/40);hap([10,40,14]);cap('Nota de linterna');updateHUD();saveSoon();
}
export function update(dt){
  G.clock+=dt;G.hintT+=dt;
  const holding=G.hold||keys.l||keys.r;   // solo se mueve el remo al guiar; la corriente hace el avance
  let steer=0;
  if(G.px!=null)steer=clamp((G.px-(V.VW/2+G.ox))/90,-1,1);
  if(keys.l)steer-=1;if(keys.r)steer+=1;steer=clamp(steer,-1,1);
  G.v+=(40-G.v)*Math.min(1,dt*.9);
  G.vx+=(steer*125-G.vx)*Math.min(1,dt*2.2);
  G.ox+=G.vx*dt;
  const lim=halfW(G.s)-36;
  G.bumpT-=dt;
  if(Math.abs(G.ox)>lim){
    G.ox=clamp(G.ox,-lim,lim);
    if(Math.abs(G.vx)>28&&G.bumpT<=0)bump(Math.sign(G.ox));
    G.vx*=-.25;
  }
  G.s+=G.v*dt;
  const dc=(center(G.s+25)-center(G.s-25))/50;
  G.ang+=((Math.atan(dc)+Math.atan2(G.vx,G.v)*.7)-G.ang)*Math.min(1,dt*3);
  if(holding){
    const b=Math.floor(G.phase/Math.PI);G.phase+=dt*1.1;
    if(Math.floor(G.phase/Math.PI)!==b)paddleStroke();
  }
  const lo=Math.floor((G.s-90)/CELL),hi=Math.floor((G.s+90)/CELL);
  for(let c=lo;c<=hi;c++)for(const o of genCell(c)){
    if(o.t==='rock'){
      for(const d of [-42,0,42]){
        const dx=G.ox-o.off,ds=G.s+d-o.s,dist=Math.hypot(dx,ds),need=o.r+17;
        if(dist<need&&dist>.01){G.ox+=dx/dist*(need-dist)*.6;G.vx+=dx/dist*40;if(G.bumpT<=0)bump(Math.sign(dx),.5)}
      }
    }else if((o.t==='duck'||o.t==='koi')&&Math.abs(G.s-o.s)<70&&Math.abs(G.ox-o.off)<150){albumSee(o.t==='duck'?'pato':'koi')
    }else if(o.t==='lantern'&&!G.lit.has(o.id)){
      if(Math.abs(G.ox-o.off)<30&&Math.abs(G.s-o.s)<56)lightLantern(o);
    }
  }
  if(G.dl===undefined)G.dl=dayPending()?{s:G.s+230+dayRand(1)*240,off:(dayRand(2)*2-1)*.25*halfW(G.s+300),t:'daylamp',id:'day'}:null;
  if(G.dl&&!G.dl.fade&&Math.abs(G.ox-G.dl.off)<48&&Math.abs(G.s-G.dl.s)<56&&dayTake()){G.dl.fade=1;const x=sx(G.dl),y=sy(G.dl);ripple(x,y,8,60,.7);splash(x,y,true);A.next(.2,0,0);hap([10,40,14,40,10])}
  if(G.dl&&G.dl.fade){G.dl.fade-=dt*.8;if(G.dl.fade<=0)G.dl=null}
  const k=lmIndexAt(G.s);
  if(Math.abs(G.s-lmPos(k))<(lmType(k)===10?240:130)&&!G.found.has(k)){G.found.add(k);try{if(lmType(k)===4)albumSee('garza');if(lmType(k)===9)albumSee('loto')}catch(e){}try{const ky='rio-found-types',a=JSON.parse(localStorage.getItem(ky)||'[]'),t=lmType(k);if(!a.includes(t)){a.push(t);localStorage.setItem(ky,JSON.stringify(a))}}catch(e){}toast('Descubriste: '+LM[lmType(k)]);A.discover();hap([20,50,20,50,30]);if(lmType(k)===5&&A.ctx){cap('Campana de templo',15000);A.bell(196,A.ctx.currentTime+.3,.1,true,-(halfW(G.s)+128+G.ox)/40,-1)}updateHUD();saveSoon()}
  taskTick(Math.abs(G.s-lmPos(k))<110?lmType(k):null,()=>{try{A.discover()}catch(e){}});
  if(G.hintT>14)$('#hint').style.opacity=0;
}
