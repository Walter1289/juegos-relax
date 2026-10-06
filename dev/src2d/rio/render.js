/* render.js — composición del cuadro completo: capas del mundo, luces nocturnas, luciérnagas, fuegos y tinte del cielo */
import {clamp,circ} from './util.js';
import {V,G,keys,view} from './state.js';
import {g,lctx,lightC,DPR} from './canvas.js';
import {sky,center} from './world.js';
import {drawTerrain} from './terrain.js';
import {drawObjs,PASS_LOW,PASS_WATER,PASS_HIGH} from './objects.js';
import {drawLandmarksUnder,drawLandmarksOver,drawLandmarksTop} from './places.js';
import {drawWake,drawCanoe} from './canoe.js';
import {drawHorizon} from './horizon.js';
import {ripples,drops,petals,flies,rain} from './particles.js';
import {drawFW} from './fireworks.js';

export function render(){
  const sk=sky((G.clock/360)%1),dark=sk.dark;
  V.dark=dark;V.t=G.clock;V.sc=G.s;V.cs0=center(G.s);V.lights=[];
  g.setTransform(DPR*view.U,0,0,DPR*view.U,0,0);
  drawTerrain(g);
  drawObjs(g,PASS_LOW);
  drawObjs(g,PASS_WATER);
  drawLandmarksUnder(g);
  for(const r of ripples){g.strokeStyle='rgba(255,255,255,'+(r.a*(1-r.r/r.max))+')';g.lineWidth=2;g.beginPath();g.ellipse(r.x,r.y,r.r,r.r*.55,0,0,7);g.stroke()}
  const cx=V.VW/2+G.ox,cy=V.cy;
  drawWake(g,cx,cy,G.ang,G.v);
  drawCanoe(g,cx,cy,G.ang,G.phase,G.hold||keys.l||keys.r,dark/.64);
  V.lights.push([cx+Math.sin(G.ang)*56,cy-Math.cos(G.ang)*56,150,.9]);
  drawObjs(g,PASS_HIGH);
  drawLandmarksOver(g);
  drawHorizon(g,sk);
  drawLandmarksTop(g);
  for(const p of petals){g.save();g.translate(p.x,p.y);g.rotate(p.rot);g.fillStyle='rgba(250,200,215,.85)';g.beginPath();g.ellipse(0,0,4,2.2,0,0,7);g.fill();g.restore()}
  if(G.rain>.03){
    g.strokeStyle='rgba(205,222,250,'+(.4*G.rain)+')';g.lineWidth=1.1;g.beginPath();
    const n=Math.floor(rain.length*G.rain);
    for(let i=0;i<n;i++){const d=rain[i];g.moveTo(d.x,d.y);g.lineTo(d.x+2.3,d.y-14)}
    g.stroke();
  }
  for(const d of drops){const a=1-d.l/d.m;g.fillStyle=d.warm?'rgba(255,214,140,'+a+')':'rgba(230,248,255,'+a*.9+')';circ(g,d.x,d.y,d.warm?2.2:1.8);g.fill()}
  if(dark>.02){
    lctx.setTransform(1,0,0,1,0,0);lctx.globalCompositeOperation='source-over';lctx.clearRect(0,0,lightC.width,lightC.height);
    lctx.fillStyle='rgba(8,10,36,'+dark+')';lctx.fillRect(0,0,lightC.width,lightC.height);
    lctx.setTransform(view.U/4,0,0,view.U/4,0,0);lctx.globalCompositeOperation='destination-out';
    for(const [x,y,r,a] of V.lights){
      const gr=lctx.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,'rgba(0,0,0,'+Math.min(1,a)+')');gr.addColorStop(1,'rgba(0,0,0,0)');
      lctx.fillStyle=gr;lctx.fillRect(x-r,y-r,r*2,r*2);
    }
    g.drawImage(lightC,0,0,V.VW,V.VH);
    if(dark>.15){
      g.save();g.globalCompositeOperation='lighter';
      const k=.18*clamp(dark/.5,0,1);
      for(const [x,y,r,a] of V.lights){
        const gr=g.createRadialGradient(x,y,0,x,y,r*.7);gr.addColorStop(0,'rgba(255,170,80,'+(k*a)+')');gr.addColorStop(1,'rgba(255,170,80,0)');
        g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2);
      }
      g.restore();
    }
  }
  const fa=clamp((dark-.25)/.3,0,1);
  if(fa>0){
    g.save();g.globalCompositeOperation='lighter';
    for(const f of flies){
      const x=f.x*V.VW+Math.sin(G.clock*.4+f.ph)*22,y=f.y*V.VH+Math.cos(G.clock*.33+f.ph*1.7)*16;
      const a=fa*(.3+.7*Math.max(0,Math.sin(G.clock*1.6+f.ph)));
      const gr=g.createRadialGradient(x,y,0,x,y,9);gr.addColorStop(0,'rgba(255,240,150,'+a+')');gr.addColorStop(1,'rgba(255,240,150,0)');
      g.fillStyle=gr;g.fillRect(x-9,y-9,18,18);
    }
    g.restore();
  }
  drawFW(g);
  const t=sk.tint;
  g.fillStyle='rgba('+(t[0]|0)+','+(t[1]|0)+','+(t[2]|0)+','+t[3]+')';g.fillRect(0,0,V.VW,V.VH);
  if(G.rain>.03){g.fillStyle='rgba(70,88,120,'+(.16*G.rain)+')';g.fillRect(0,0,V.VW,V.VH)}
}
