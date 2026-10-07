/* objects.js — objetos del paisaje (plantas, rocas, patos, carpas, linternas, árboles) y sus pasadas de dibujo */
import {clamp,circ,rr,line,poly} from './util.js';
import {V,G} from './state.js';
import {center,CELL,genCell} from './world.js';

export const sx=o=>V.VW/2+center(o.s)-V.cs0+o.off;
export const sy=o=>V.cy-(o.s-V.sc);
function eachObj(fn){
  const lo=Math.floor((V.sc+V.cy-V.VH-160)/CELL),hi=Math.floor((V.sc+V.cy+160)/CELL);
  for(let c=lo;c<=hi;c++){const a=genCell(c);for(let i=0;i<a.length;i++)fn(a[i])}
}
function koiFish(g,x,y,ang,col,spot){
  g.save();g.translate(x,y);g.rotate(ang);
  g.fillStyle=col;g.beginPath();g.ellipse(0,0,11,4.6,0,0,7);g.fill();
  g.beginPath();g.moveTo(-9,0);g.lineTo(-17,-4);g.lineTo(-17,4);g.closePath();g.fill();
  g.fillStyle=spot;g.beginPath();g.ellipse(2,0,4,3,0,0,7);g.fill();
  g.restore();
}
const DRAW={
  patch:(g,o,x,y)=>{g.fillStyle=o.sd>.5?'rgba(110,170,80,.28)':'rgba(70,130,70,.22)';circ(g,x,y,o.r);g.fill()},
  tuft:(g,o,x,y)=>{g.strokeStyle='#4f8a47';g.lineWidth=2;line(g,x,y,x-3,y-7);line(g,x,y,x,y-9);line(g,x,y,x+3,y-7)},
  reed:(g,o,x,y)=>{
    g.lineWidth=2;
    for(let i=0;i<5;i++){
      const sw=Math.sin(V.t*1.2+o.sd*9+i)*2,bx=x+i*3-6,tx=bx+sw,ty=y-16-(i%2)*6;
      g.strokeStyle='#6a8f3e';line(g,bx,y+8,tx,ty);
      if(i%2){g.fillStyle='#7a4f2c';g.beginPath();g.ellipse(tx,ty-3,1.8,4.5,0,0,7);g.fill()}
    }
  },
  post:(g,o,x,y)=>{
    const n=clamp(V.dark/.64,0,1);
    g.fillStyle='#9a9aa0';rr(g,x-8,y-8,16,16,3);g.fill();
    g.fillStyle='#b9b9c2';circ(g,x,y,5);g.fill();
    g.fillStyle='rgba(255,200,110,'+(.25+.7*n)+')';circ(g,x,y,3.4);g.fill();
    if(n>.1)V.lights.push([x,y,90,.8*n]);
  },
  bamboo:(g,o,x,y)=>{
    for(let i=0;i<4;i++){
      const cx=x+(i%2)*8-4+(i>1?3:0),cy=y+(i>>1)*8-4;
      g.fillStyle='#4c9a5a';circ(g,cx,cy,6);g.fill();
      g.strokeStyle='rgba(170,230,160,.6)';g.lineWidth=1.2;circ(g,cx,cy,3.4);g.stroke();
    }
    g.strokeStyle='#5aa860';g.lineWidth=2;line(g,x,y,x-14,y-6);line(g,x,y,x+13,y-8);line(g,x,y,x+4,y+13);
  },
  streak:(g,o,x,y)=>{g.strokeStyle='rgba(255,255,255,.2)';g.lineWidth=2;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+3,y+o.len/2,x,y+o.len);g.stroke()},
  pad:(g,o,x,y)=>{
    const r=o.r*(1+.03*Math.sin(V.t*1.4+o.sd*20)),a0=.4+o.sd*5,warm=V.dark<.5;
    g.fillStyle=o.sd<.5?'#4f9a58':'#5aa862';g.beginPath();g.moveTo(x,y);g.arc(x,y,r,a0,a0+5.6);g.closePath();g.fill();
    g.fillStyle='rgba(190,230,150,.32)';g.beginPath();g.arc(x-r*.12,y-r*.12,r*.72,0,7);g.fill();
    g.strokeStyle='rgba(235,255,210,.24)';g.lineWidth=1;
    for(let i=0;i<8;i++){const a=a0+.4+i*.7;line(g,x,y,x+Math.cos(a)*r*.92,y+Math.sin(a)*r*.92)}
    g.strokeStyle=warm?'rgba(255,226,140,.5)':'rgba(30,80,50,.4)';g.lineWidth=1.3;g.beginPath();g.arc(x,y,r,a0,a0+5.6);g.stroke();
    if(o.sd>.55){
      const pink=o.sd>.78;
      for(let ring=0;ring<2;ring++){
        const n=ring?6:8,len=ring?5:7;
        for(let i=0;i<n;i++){
          g.save();g.translate(x,y);g.rotate(i*6.283/n+ring*.4);
          g.fillStyle=pink?(ring?'#f8c7d6':'#f2a9c0'):(ring?'#ffe58a':'#f7cf54');
          g.beginPath();g.ellipse(0,-len*.7-ring,2.7-ring*.4,len,0,0,7);g.fill();g.restore();
        }
      }
      g.fillStyle='#ffd878';circ(g,x,y,2.2);g.fill();
    }
  },

  rock:(g,o,x,y)=>{
    g.strokeStyle='rgba(255,255,255,.4)';g.lineWidth=2;circ(g,x,y,o.r+5+Math.sin(V.t*2+o.sd*9));g.stroke();
    g.fillStyle='#8c8f97';circ(g,x,y,o.r);g.fill();
    g.fillStyle='#a9acb4';circ(g,x-o.r*.25,y-o.r*.25,o.r*.6);g.fill();
    g.fillStyle='rgba(90,140,70,.6)';circ(g,x+o.r*.3,y+o.r*.3,o.r*.35);g.fill();
  },
  koi:(g,o,x,y)=>{
    const a=V.t*.7+o.sd*30,b=V.t*.5+o.sd*20,kx=x+Math.sin(a)*18,ky=y+Math.cos(b)*12;
    const ang=Math.atan2(-Math.sin(b)*12*.5,Math.cos(a)*18*.7),w=o.sd>.5;
    koiFish(g,kx,ky,ang,w?'#ff8a4d':'#fff3e4',w?'#fff3e4':'#ff6a3d');
    koiFish(g,kx-Math.cos(ang)*16+4,ky-Math.sin(ang)*16+9,ang+.2,w?'#fff3e4':'#ff8a4d',w?'#ff6a3d':'#fff3e4');
  },
  duck:(g,o,x,y)=>{
    const ph=V.t*.3+o.sd*40,dx=Math.sin(ph)*30,dir=Math.cos(ph)>0?1:-1;
    [[0,0,1],[dir*-16,7,.75]].forEach(([ox,oy,k])=>{
      const px=x+dx+ox,py=y+oy;
      g.fillStyle='rgba(255,255,255,.3)';g.beginPath();g.ellipse(px,py+2,9*k,6*k,0,0,7);g.fill();
      g.fillStyle='#f4efe0';g.beginPath();g.ellipse(px,py,8*k,5*k,0,0,7);g.fill();
      g.fillStyle='#8a6b45';circ(g,px+dir*7*k,py-1,3.3*k);g.fill();
      g.fillStyle='#e8963a';poly(g,[[px+dir*9.5*k,py-2],[px+dir*13*k,py-1],[px+dir*9.5*k,py]]);g.fill();
    });
  },
  lantern:(g,o,x,y0)=>{
    const lit=V.lit.has(o.id),y=y0+Math.sin(V.t*1.6+o.s*.01)*1.5;
    g.strokeStyle='rgba(255,255,255,.35)';g.lineWidth=2;circ(g,x,y,13+Math.sin(V.t*1.3+o.s)*1.2);g.stroke();
    if(!lit){g.strokeStyle='rgba(255,240,200,'+(.2+.18*Math.sin(V.t*2+o.s))+')';g.lineWidth=2;circ(g,x,y,19);g.stroke()}
    g.fillStyle='#8a6a45';rr(g,x-9,y-9,18,18,3);g.fill();
    g.fillStyle=lit?'#ffcf7a':'#efe3c6';rr(g,x-6.5,y-6.5,13,13,2);g.fill();
    g.strokeStyle='rgba(120,80,40,.5)';g.lineWidth=1;line(g,x-6.5,y,x+6.5,y);line(g,x,y-6.5,x,y+6.5);
    if(lit){
      g.save();g.globalCompositeOperation='lighter';
      const gr=g.createRadialGradient(x,y,0,x,y,38);gr.addColorStop(0,'rgba(255,190,100,.6)');gr.addColorStop(1,'rgba(255,190,100,0)');
      g.fillStyle=gr;g.fillRect(x-38,y-38,76,76);g.restore();
      V.lights.push([x,y,80,.85]);
    }
  },
  tree:(g,o,x,y)=>{
    const r=o.r;
    g.fillStyle='rgba(20,50,30,.2)';g.beginPath();g.ellipse(x+10,y+12,r*1.05,r*.85,0,0,7);g.fill();
    g.fillStyle='#3f7d4a';circ(g,x,y,r);g.fill();
    g.fillStyle='#4f9a58';circ(g,x-r*.2,y-r*.2,r*.78);g.fill();
    g.fillStyle='#6bb06a';circ(g,x-r*.35,y-r*.35,r*.45);g.fill();
  },
  sakura:(g,o,x,y)=>{
    const r=o.r;
    g.fillStyle='rgba(70,40,60,.18)';g.beginPath();g.ellipse(x+10,y+12,r*1.05,r*.85,0,0,7);g.fill();
    // de noche el rosa se vuelve más vivo para que el jardín siga leyéndose rosado bajo la oscuridad
    const n=clamp(V.dark/.64,0,1),mx=(a,b)=>Math.round(a+(b-a)*n);
    g.fillStyle='rgb('+mx(238,255)+','+mx(159,128)+','+mx(184,182)+')';circ(g,x,y,r);g.fill();
    g.fillStyle='rgb('+mx(244,255)+','+mx(182,160)+','+mx(200,200)+')';circ(g,x-r*.2,y-r*.2,r*.8);g.fill();
    g.fillStyle='rgb('+mx(251,255)+','+mx(214,196)+','+mx(225,220)+')';circ(g,x-r*.35,y-r*.35,r*.5);g.fill();
    g.fillStyle='rgba(255,240,245,.85)';
    for(let i=0;i<6;i++){const a=i*2.1+o.sd*9;circ(g,x+Math.cos(a)*r*.6,y+Math.sin(a)*r*.6,2.2);g.fill()}
  },
};
export const PASS_LOW=new Set(['patch','tuft','reed','post','bamboo']);
export const PASS_WATER=new Set(['streak','pad','rock','koi','duck','lantern']);
export const PASS_HIGH=new Set(['tree','sakura']);
function drawDay(g){
  const o=G.dl;if(!o)return;const x=sx(o),y0=sy(o);if(y0<-130||y0>V.VH+130||x<-130||x>V.VW+130)return;
  const f=o.fade||0,y=y0+Math.sin(V.t*1.4)*1.8,pu=.5+.5*Math.sin(V.t*2.2);
  g.save();g.globalAlpha=1-f;
  g.save();g.globalCompositeOperation='lighter';const gr=g.createRadialGradient(x,y,0,x,y,58+f*30);gr.addColorStop(0,'rgba(255,205,110,'+(.55+.2*pu)+')');gr.addColorStop(1,'rgba(255,205,110,0)');g.fillStyle=gr;g.fillRect(x-90,y-90,180,180);g.restore();
  g.strokeStyle='rgba(255,226,150,'+(.35+.3*pu)+')';g.lineWidth=2;circ(g,x,y,21+pu*4);g.stroke();
  g.fillStyle='#b8863f';rr(g,x-11,y-11,22,22,4);g.fill();g.fillStyle='#ffd37a';rr(g,x-8,y-8,16,16,3);g.fill();
  g.strokeStyle='rgba(140,90,30,.55)';g.lineWidth=1;line(g,x-8,y,x+8,y);line(g,x,y-8,x,y+8);
  g.restore();V.lights.push([x,y,90,.9*(1-f)]);
}
export function drawObjs(g,set){
  if(set===PASS_WATER)drawDay(g);
  eachObj(o=>{
    if(!set.has(o.t))return;
    const x=sx(o),y=sy(o);
    if(y<-130||y>V.VH+130||x<-130||x>V.VW+130)return;
    DRAW[o.t](g,o,x,y);
  });
}
