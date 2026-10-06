/* fireworks.js — festival de linternas: fuegos artificiales nocturnos junto a la aldea y estrella fugaz */
import {clamp,lerp,circ,cap,hap} from './util.js';
import {V,G} from './state.js';
import {lmIndexAt,lmPos,lmType} from './world.js';
import {A} from './audio.js';
import {toast} from './ui.js';

const FW={bursts:[],t:2,star:null,starT:25,seen:false};
try{FW.seen=localStorage.getItem('rio-de-linternas-fw')==='1'}catch(e){}
const FW_COLS=[[255,150,190],[255,205,110],[120,235,215]];   // rosa, dorado, aguamarina
const FW_MAX=7;                                              // ráfagas simultáneas máximas
function festivalOn(){const k=lmIndexAt(G.s);return G.started&&V.dark>.4&&lmType(k)===2&&Math.abs(G.s-lmPos(k))<650}
function fwLaunch(){
  const col=FW_COLS[Math.floor(Math.random()*3)],hh=Math.max(96,V.VH*.15),n=44,p=new Float32Array(n*4);
  for(let i=0;i<n;i++){const a=i/n*6.283+(Math.random()-.5)*.12,v=(95+Math.random()*100)*(i%2?1:.6);p[i*4+2]=Math.cos(a)*v;p[i*4+3]=Math.sin(a)*v}
  const x=V.VW*(.12+Math.random()*.76);
  FW.bursts.push({x,y:hh*.35+Math.random()*(V.VH*.42-hh*.35),x0:x+(Math.random()-.5)*60,y0:V.VH*.62,t:0,rise:.55+Math.random()*.3,life:2.3,fill:'rgb('+col+')',p,boom:false});
}
export function fwStep(dt){
  const B=FW.bursts;
  if(festivalOn()){
    if(!FW.seen){FW.seen=true;try{localStorage.setItem('rio-de-linternas-fw','1')}catch(e){}toast('Festival de linternas: la aldea celebra esta noche')}
    FW.t-=dt;
    if(FW.t<=0){FW.t=.6+Math.random()*1.3;const n=Math.random()<.4?2:1;for(let i=0;i<n&&B.length<FW_MAX;i++)fwLaunch()}
  }
  for(let i=B.length-1;i>=0;i--){
    const b=B[i];b.t+=dt;
    if(!b.boom&&b.t>=b.rise){b.boom=true;A.firework((b.x/V.VW-.5)*8);cap('Fuegos artificiales',12000);hap(8)}
    if(!b.boom)continue;
    if(b.t-b.rise>b.life){B.splice(i,1);continue}
    const dr=Math.exp(-1.7*dt),p=b.p;
    for(let j=0;j<p.length;j+=4){p[j+2]*=dr;p[j+3]=p[j+3]*dr+55*dt;p[j]+=p[j+2]*dt;p[j+1]+=p[j+3]*dt}
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
    const e=b.t-b.rise,fade=clamp(1-e/b.life,0,1),p=b.p;
    if(e<.25){g.globalAlpha=(1-e/.25)*.45;circ(g,b.x,b.y,24+e*90);g.fill()}
    for(let j=0;j<p.length;j+=4){
      const tw=.7+.3*Math.sin(e*14+j),a=Math.pow(fade,1.3)*tw;
      g.globalAlpha=a*.28;g.fillRect(b.x+p[j]-4,b.y+p[j+1]-4,8,8);
      g.globalAlpha=a;g.fillRect(b.x+p[j]-1.7,b.y+p[j+1]-1.7,3.4,3.4);
      g.globalAlpha=a*.35;g.fillRect(b.x+p[j]-p[j+2]*.04-1,b.y+p[j+1]-p[j+3]*.04-1,2,2);
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
