/* Entrada: arrastrar limpia, tocar repara; ajuste del lienzo al contenedor */
import {W,H,$,uCap,uHap} from './util.js';
import {HIT_ORDER,inRect} from './items.js';
import {rt,pointer,canvas} from './state.js';
import {stamp,stampLine} from './dirt.js';
import {spray,parts} from './fx.js';
import {A} from './audio.js';
import {attempt} from './actions.js';
import {scheduleSave} from './persist.js';

export function initInput(){
  let scrubHap=0,sx=0,sy=0,st=0,moved=0;
  function pt(e){const r=canvas.getBoundingClientRect();return [(e.clientX-r.left)/r.width*W,(e.clientY-r.top)/r.height*H]}
  canvas.addEventListener('pointerdown',e=>{
    if(!rt.started)return;e.preventDefault();canvas.setPointerCapture(e.pointerId);
    pointer.drawing=true;[pointer.lx,pointer.ly]=pt(e);sx=pointer.lx;sy=pointer.ly;st=performance.now();moved=0;
    stamp(pointer.lx,pointer.ly);spray(pointer.lx,pointer.ly,0,0);rt.dirty=true;A.level(.05);A.scrubPos(pointer.lx/W,pointer.ly/H);
    uCap('Fregado',7000);{const n=performance.now();if(n-scrubHap>2500){scrubHap=n;uHap(5)}}
  });
  canvas.addEventListener('pointermove',e=>{
    if(!pointer.drawing)return;e.preventDefault();
    const [x,y]=pt(e),d=Math.hypot(x-pointer.lx,y-pointer.ly);moved+=d;
    stampLine(pointer.lx,pointer.ly,x,y);if(parts.length<400)spray(x,y,x-pointer.lx,y-pointer.ly);
    pointer.lx=x;pointer.ly=y;rt.dirty=true;A.level(Math.min(.12,.04+d*.004));A.scrubPos(pointer.lx/W,pointer.ly/H);uCap('Fregado',7000);
  });
  function endDraw(cancel){
    if(!pointer.drawing)return;pointer.drawing=false;A.level(0);
    if(!cancel&&moved<10&&performance.now()-st<400){
      const o=HIT_ORDER.find(o=>inRect(o,sx,sy));
      if(o)attempt(o);
    }
    scheduleSave();
  }
  canvas.addEventListener('pointerup',()=>endDraw(false));
  canvas.addEventListener('pointercancel',()=>endDraw(true));
  function layout(){const s=$('#stage'),sc=Math.min(s.clientWidth/W,s.clientHeight/H);if(sc>0){canvas.style.width=Math.floor(W*sc)+'px';canvas.style.height=Math.floor(H*sc)+'px'}}
  new ResizeObserver(layout).observe($('#stage'));layout();
}
