/* Calma: respiración guiada 4-1-6 y recordatorio suave de descanso */
import {A} from './audio.js';
import {toast} from './ui.js';
import {rt} from './state.js';

export function initCalm(){
  const el=document.getElementById('breath'),orb=el.querySelector('.orb'),lab=el.querySelector('span'),btn=document.getElementById('breath-btn');
  let run=false,t0=0,raf=0,lastKey=-1;
  const IN=4,HOLD=1,OUT=6,CYC=IN+HOLD+OUT,N=5;
  function stop(msg){
    run=false;cancelAnimationFrame(raf);btn.textContent='Respirar';
    if(msg){lab.textContent=msg;orb.style.transform='scale(.7)';setTimeout(()=>{if(!run)el.hidden=true},2800)}else el.hidden=true;
  }
  function tick(now){
    if(!run)return;
    const t=(now-t0)/1000;
    if(t>=CYC*N){stop('Gracias por respirar');return}
    const c=t%CYC;let ph,sc;
    if(c<IN){ph=0;sc=.5+.5*(.5-.5*Math.cos(Math.PI*c/IN))}
    else if(c<IN+HOLD){ph=1;sc=1}
    else{ph=2;sc=.5+.5*(.5+.5*Math.cos(Math.PI*(c-IN-HOLD)/OUT))}
    orb.style.transform='scale('+sc.toFixed(3)+')';
    const key=Math.floor(t/CYC)*3+ph;
    if(key!==lastKey){
      lastKey=key;lab.textContent=['Inhala por la nariz','Sostén un momento','Exhala despacio'][ph];
      if(A.breathTone){if(ph===0)A.breathTone(true,IN+HOLD);if(ph===2)A.breathTone(false,OUT)}
    }
    raf=requestAnimationFrame(tick);
  }
  btn.onclick=()=>{
    if(run){stop();return}
    run=true;lastKey=-1;el.hidden=false;lab.textContent='Prepárate…';btn.textContent='Detener';
    if(A.ctx&&A.ctx.state==='suspended')A.ctx.resume();
    t0=performance.now();raf=requestAnimationFrame(tick);
  };
  let played=0,next=20*60;
  setInterval(()=>{
    if(document.hidden||!rt.started)return;
    played+=5;
    
  },5000);
}
