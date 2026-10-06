/* fireworks.js — festival de linternas: fuegos artificiales nocturnos junto a la aldea y estrella fugaz */
import {clamp,lerp,circ,cap,hap} from './util.js';
import {V,G} from './state.js';
import {lmIndexAt,lmPos,lmType} from './world.js';
import {A} from './audio.js';
import {toast} from './ui.js';

const FW={bursts:[],t:2,star:null,starT:25,seen:false,fin:5,qn:0,qt:0,sndT:0,hapT:0};
try{FW.seen=localStorage.getItem('rio-de-linternas-fw')==='1'}catch(e){}
const FW_COLS=[[255,150,190],[255,205,110],[120,235,215]];   // aldea: rosa, dorado, aguamarina
const PAL=[[255,120,170],[255,205,110],[120,235,215],[150,185,255],[255,150,90],[190,140,255],[255,95,95],[160,255,150],[255,240,200]];
const FW_MAX=7,FW_MAX_C=16;                                    // ráfagas simultáneas máximas (aldea / castillo)
const SPK=new Map();   // chispas: un sprite de brillo suave por color (un drawImage por partícula)
function spark(col){
  let c=SPK.get(col);if(c)return c;
  c=document.createElement('canvas');c.width=c.height=20;const x=c.getContext('2d'),gr=x.createRadialGradient(10,10,0,10,10,10);
  gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(.22,col.replace('rgb','rgba').replace(')',',.95)'));gr.addColorStop(.55,col.replace('rgb','rgba').replace(')',',.35)'));gr.addColorStop(1,col.replace('rgb','rgba').replace(')',',0)'));
  x.fillStyle=gr;x.fillRect(0,0,20,20);SPK.set(col,c);return c;
}
const rgb=c=>'rgb('+c[0]+','+c[1]+','+c[2]+')';
/* 0 = sin fuegos, 1 = festival de la aldea, 2 = espectáculo del castillo (atardecer y noche, a menos de ~900 de distancia) */
function festivalMode(){
  if(!G.started)return 0;
  const k=lmIndexAt(G.s),ty=lmType(k),d=Math.abs(G.s-lmPos(k));
  if(ty===10&&d<900&&V.dark>.2)return 2;
  if(ty===2&&d<650&&V.dark>.4)return 1;
  return 0;
}
function fwLaunch(mode,kind){
  const hh=Math.max(96,V.VH*.15),big=mode===2,sc=big?clamp(V.VW/760,.9,1.3)*1.12*(.72+Math.random()*.5):1;
  let col,col2=null,n,p;
  if(!big){
    col=FW_COLS[Math.floor(Math.random()*3)];kind=0;n=44;p=new Float32Array(n*4);
    for(let i=0;i<n;i++){const a=i/n*6.283+(Math.random()-.5)*.12,v=(95+Math.random()*100)*(i%2?1:.6);p[i*4+2]=Math.cos(a)*v;p[i*4+3]=Math.sin(a)*v}
  }else{
    if(kind==null){const r=Math.random();kind=r<.3?0:r<.55?1:r<.75?2:3}
    col=PAL[Math.floor(Math.random()*PAL.length)];col2=PAL[Math.floor(Math.random()*PAL.length)];
    if(kind===1)col=[255,200,90];
    let split=0;
    if(kind===0){n=72;p=new Float32Array(n*4);for(let i=0;i<n;i++){const a=i/n*6.283+Math.random()*.1,v=(120+Math.random()*80)*sc;p[i*4+2]=Math.cos(a)*v;p[i*4+3]=Math.sin(a)*v}}
    else if(kind===1){n=48;p=new Float32Array(n*4);for(let i=0;i<n;i++){const a=i/n*6.283+Math.random()*.15,v=(70+Math.random()*95)*sc;p[i*4+2]=Math.cos(a)*v;p[i*4+3]=Math.sin(a)*v-25}}
    else if(kind===2){n=52;p=new Float32Array(n*4);const tilt=.45+Math.random()*.55;split=36;
      for(let i=0;i<36;i++){const a=i/36*6.283,v=150*sc;p[i*4+2]=Math.cos(a)*v;p[i*4+3]=Math.sin(a)*v*tilt}
      for(let i=36;i<n;i++){const a=(i-36)/16*6.283,v=72*sc;p[i*4+2]=Math.cos(a)*v;p[i*4+3]=Math.sin(a)*v*tilt}}
    else{n=60;p=new Float32Array(n*4);split=38;
      for(let i=0;i<38;i++){const a=i/38*6.283+Math.random()*.08,v=(150+Math.random()*40)*sc;p[i*4+2]=Math.cos(a)*v;p[i*4+3]=Math.sin(a)*v}
      for(let i=38;i<n;i++){const a=(i-38)/22*6.283,v=(70+Math.random()*30)*sc;p[i*4+2]=Math.cos(a)*v;p[i*4+3]=Math.sin(a)*v}}
    FW.bursts.push(mkBurst(p,kind,col,col2,split));return;
  }
  FW.bursts.push(mkBurst(p,0,col,null,0));
}
function mkBurst(p,kind,col,col2,split){
  const x=V.VW*(.1+Math.random()*.8),hh=Math.max(96,V.VH*.15);
  return {x,y:hh*.3+Math.random()*(V.VH*.46-hh*.3),x0:x+(Math.random()-.5)*60,y0:V.VH*.62,t:0,rise:.5+Math.random()*.35,life:kind===1?3.6:kind===2?2.3:2.1,fill:rgb(col),fill2:col2?rgb(col2):'',split,kind,p,boom:false};
}
export const fwInfo=()=>({n:FW.bursts.length,mode:festivalMode(),booms:FW.bursts.filter(b=>b.boom).length,kinds:FW.bursts.map(b=>b.kind).join('')});
export function fwStep(dt){
  const B=FW.bursts,mode=festivalMode();
  FW.sndT-=dt;FW.hapT-=dt;
  if(mode===1){
    if(!FW.seen){FW.seen=true;try{localStorage.setItem('rio-de-linternas-fw','1')}catch(e){}toast('Festival de linternas: la aldea celebra esta noche')}
    FW.t-=dt;
    if(FW.t<=0){FW.t=.6+Math.random()*1.3;const n=Math.random()<.4?2:1;for(let i=0;i<n&&B.length<FW_MAX;i++)fwLaunch(1)}
  }else if(mode===2){
    FW.t-=dt;
    if(FW.t<=0){FW.t=.16+Math.random()*.3;const n=1+Math.floor(Math.random()*3);for(let i=0;i<n&&B.length<FW_MAX_C;i++)fwLaunch(2)}
    FW.fin-=dt;
    if(FW.fin<=0){FW.fin=11+Math.random()*5;FW.qn=9;FW.qt=0}
    if(FW.qn>0){FW.qt-=dt;if(FW.qt<=0){FW.qt=.09;FW.qn--;if(B.length<FW_MAX_C+4)fwLaunch(2,[0,1,2,3][FW.qn%4]);if(FW.qn===0)hap([14,30,14,30,20])}}
  }
  for(let i=B.length-1;i>=0;i--){
    const b=B[i];b.t+=dt;
    if(!b.boom&&b.t>=b.rise){
      b.boom=true;
      if(FW.sndT<=0){FW.sndT=.1;A.firework((b.x/V.VW-.5)*8,b.kind?1:.9,b.kind===1?1:0)}
      cap('Fuegos artificiales',12000);
      if(FW.hapT<=0){FW.hapT=.35;hap(8)}
    }
    if(!b.boom)continue;
    if(b.t-b.rise>b.life){B.splice(i,1);continue}
    const dr=Math.exp((b.kind===1?-1.1:-1.9)*dt),gv=b.kind===1?75:38,p=b.p;
    for(let j=0;j<p.length;j+=4){p[j+2]*=dr;p[j+3]=p[j+3]*dr+gv*dt;p[j]+=p[j+2]*dt;p[j+1]+=p[j+3]*dt}
  }
  // estrella fugaz ocasional en el horizonte nocturno
  if(FW.star){FW.star.t+=dt;if(FW.star.t>.9)FW.star=null}
  else if(G.started){
    FW.starT-=dt;
    if(FW.starT<=0&&V.dark>.4){FW.starT=30+Math.random()*40;FW.star={x:V.VW*(.5+Math.random()*.45),y:Math.max(96,V.VH*.15)*(.12+Math.random()*.4),t:0};cap('Estrella fugaz',20000);A.shoot()}
  }
}
export function drawFW(g){
  const B=FW.bursts,st=FW.star;if(!B.length&&!st)return;
  g.save();g.globalCompositeOperation='lighter';
  for(const b of B){
    g.fillStyle=b.fill;
    if(!b.boom){
      const u=b.t/b.rise,x=lerp(b.x0,b.x,u),y=lerp(b.y0,b.y,1-(1-u)*(1-u));
      g.globalAlpha=.85;g.fillRect(x-1.2,y-1.2,2.4,2.4);g.globalAlpha=.3;g.fillRect(x-.7,y,1.4,16);continue;
    }
    const e=b.t-b.rise,fade=clamp(1-e/b.life,0,1),p=b.p,willow=b.kind===1;
    if(e<.3){g.globalAlpha=(1-e/.3)*.3;circ(g,b.x,b.y,26+e*110);g.fill()}
    // estelas cortas siguiendo la velocidad (en el sauce, largas y doradas)
    g.globalAlpha=Math.pow(fade,1.1)*(willow?.85:.55);g.strokeStyle=b.fill;g.lineWidth=willow?1.8:1.3;g.beginPath();
    const tl=willow?.2:.07;
    for(let j=0;j<p.length;j+=4){if(b.split&&j>=b.split*4)continue;const x=b.x+p[j],y=b.y+p[j+1];g.moveTo(x,y);g.lineTo(x-p[j+2]*tl,y-p[j+3]*tl)}
    g.stroke();
    if(b.split){g.strokeStyle=b.fill2;g.beginPath();for(let j=b.split*4;j<p.length;j+=4){const x=b.x+p[j],y=b.y+p[j+1];g.moveTo(x,y);g.lineTo(x-p[j+2]*.07,y-p[j+3]*.07)}g.stroke()}
    let sp=spark(b.fill);
    for(let j=0;j<p.length;j+=4){
      if(b.split&&j===b.split*4)sp=spark(b.fill2);
      const tw=.75+.25*Math.sin(e*14+j);
      g.globalAlpha=Math.min(1,Math.pow(fade,1.1)*tw*1.1);g.drawImage(sp,b.x+p[j]-9,b.y+p[j+1]-9,18,18);
    }
  }
  if(st){
    const u=st.t/.9,x=st.x-340*st.t,y=st.y+90*st.t,a=Math.sin(Math.PI*u);
    g.globalAlpha=a*.8;g.strokeStyle='rgb(255,250,230)';g.lineWidth=1.6;g.lineCap='round';
    g.beginPath();g.moveTo(x,y);g.lineTo(x+60,y-16);g.stroke();
    g.globalAlpha=a;g.fillStyle='rgb(255,252,240)';circ(g,x,y,1.8);g.fill();
  }
  g.restore();
}
