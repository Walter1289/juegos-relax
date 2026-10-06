/* places.js — los diez lugares del río: elementos bajo la canoa (sombras, muelles, garzas) y sobre ella (puente, torii, casas) */
import {hash,circ,rr,line,poly} from './util.js';
import {V} from './state.js';
import {center,halfW,lmIndexAt,lmPos,lmType} from './world.js';

/* Lugares: se dibujan por debajo (sombras, muelle, garzas) y por encima de la canoa (puente, torii, casas) */
function lmEach(fn){
  const lo=lmIndexAt(V.sc+V.cy-V.VH-300)-1,hi=lmIndexAt(V.sc+V.cy+300)+1;
  for(let k=lo;k<=hi;k++){
    const s0=lmPos(k),y0=V.cy-(s0-V.sc);
    if(y0<-260||y0>V.VH+260)continue;
    fn(k,lmType(k),y0,V.VW/2+center(s0)-V.cs0,halfW(s0),s0);
  }
}
function heron(g,x,y,dir){
  g.strokeStyle='rgba(255,255,255,.45)';g.lineWidth=2;circ(g,x,y+6,9+Math.sin(V.t*2+x)*1);g.stroke();
  g.strokeStyle='#8a7a5a';g.lineWidth=1.5;line(g,x-2,y+2,x-2,y+8);line(g,x+2,y+2,x+2,y+8);
  g.fillStyle='#f2f4f6';g.beginPath();g.ellipse(x,y,9,5.5,0,0,7);g.fill();
  g.strokeStyle='#f2f4f6';g.lineWidth=3;g.beginPath();g.moveTo(x+dir*6,y-1);g.quadraticCurveTo(x+dir*13,y-8,x+dir*9,y-15);g.stroke();
  g.fillStyle='#f2f4f6';circ(g,x+dir*9,y-15,3.2);g.fill();
  g.fillStyle='#e8a54a';poly(g,[[x+dir*11,y-16],[x+dir*18,y-14],[x+dir*11,y-14]]);g.fill();
}
export function drawLandmarksUnder(g){
  lmEach((k,type,y0,X0,hw)=>{
    if(type===0){g.fillStyle='rgba(10,40,60,.28)';g.fillRect(X0-hw,y0-24,2*hw,64)}
    if(type===1){
      g.fillStyle='rgba(10,40,60,.22)';
      [-1,1].forEach(sd=>{circ(g,X0+sd*hw*.62+6,y0+8,14);g.fill()});
      g.fillRect(X0-hw*.62-50,y0+8,hw*1.24+100,14);
    }
    if(type===2){
      const dx=X0-hw-22;
      g.fillStyle='#8a5e3c';g.fillRect(dx,y0-13,74,26);
      g.strokeStyle='rgba(0,0,0,.28)';g.lineWidth=1;for(let i=0;i<74;i+=9)line(g,dx+i,y0-13,dx+i,y0+13);
      g.fillStyle='#4a3020';circ(g,dx+72,y0-12,3.5);g.fill();circ(g,dx+72,y0+12,3.5);g.fill();
    }
    if(type===4){heron(g,X0-hw+32,y0-60,1);heron(g,X0+hw-36,y0+12,-1);heron(g,X0-hw+48,y0+74,1)}
    if(type===5){
      for(let i=0;i<4;i++){g.fillStyle=i%2?'#a9a7b4':'#b9b7c4';g.fillRect(X0-hw-60+i*14,y0-34+i*3,16,68-i*6)}
    }
    if(type===6){
      g.fillStyle='rgba(255,255,255,.3)';g.fillRect(X0-hw,y0-8,2*hw,16);
      for(let r=0;r<3;r++){
        g.strokeStyle='rgba(255,255,255,'+(.55-r*.12)+')';g.lineWidth=2;
        for(let x=X0-hw+8;x<X0+hw-8;x+=18){const o=Math.sin(V.t*2+x*.1+r)*3;g.beginPath();g.arc(x+(r%2)*9,y0-6+r*7+o,6,0,Math.PI);g.stroke()}
      }
      g.fillStyle='#9a9aa6';[-1,1].forEach(sd=>{for(let i=0;i<3;i++){circ(g,X0+sd*(hw-8-i*16),y0+(i-1)*14,12+i*2);g.fill()}});
      g.fillStyle='#8fb078';[-1,1].forEach(sd=>{circ(g,X0+sd*(hw-14),y0-12,8);g.fill()});
    }
    if(type===7){
      const dx=X0+hw-52;
      g.fillStyle='#9a6a44';g.fillRect(dx,y0-12,76,24);
      g.strokeStyle='rgba(0,0,0,.25)';g.lineWidth=1;for(let i=0;i<76;i+=9)line(g,dx+i,y0-12,dx+i,y0+12);
    }
    if(type===9){
      for(let i=-3;i<=3;i++){
        const x=X0+Math.sin(i*2.3)*hw*.55,y=y0+i*36+Math.cos(i*1.7)*10;
        g.fillStyle='rgba(120,160,110,.9)';circ(g,x,y,17);g.fill();
        for(let q=0;q<8;q++){const a=q*Math.PI/4+V.t*.05;g.fillStyle=i%2?(q%2?'#f7c6d6':'#f3b3c8'):(q%2?'#ffe58a':'#f7cf54');g.beginPath();g.ellipse(x+Math.cos(a)*7,y+Math.sin(a)*7,6,3.2,a,0,7);g.fill()}
        g.fillStyle='#ffe08a';circ(g,x,y,3.2);g.fill();
      }
    }
  });
}
export function drawLandmarksOver(g){
  lmEach((k,type,y0,X0,hw)=>{
    if(type===0){
      const x0=X0-hw-80,w=2*hw+160;
      g.fillStyle='#8a5e3c';g.fillRect(x0,y0-26,w,52);
      g.strokeStyle='rgba(0,0,0,.25)';g.lineWidth=1;for(let i=0;i<w;i+=10)line(g,x0+i,y0-26,x0+i,y0+26);
      g.fillStyle='#5a3c26';g.fillRect(x0,y0-31,w,6);g.fillRect(x0,y0+25,w,6);
      g.fillStyle='#3d2818';for(let i=0;i<=w;i+=36){circ(g,x0+i,y0-28,4);g.fill();circ(g,x0+i,y0+28,4);g.fill()}
      [x0+8,x0+w-8].forEach(lx=>{
        g.fillStyle='#ffcf7a';circ(g,lx,y0-28,6);g.fill();circ(g,lx,y0+28,6);g.fill();
        V.lights.push([lx,y0,110,.8]);
      });
    }
    if(type===1){
      const px=hw*.62;
      g.fillStyle='#b83a2e';[-1,1].forEach(sd=>{circ(g,X0+sd*px,y0,11);g.fill()});
      g.fillStyle='#d65a4a';[-1,1].forEach(sd=>{circ(g,X0+sd*px-2,y0-2,5);g.fill()});
      g.fillStyle='#c0443a';g.fillRect(X0-px-28,y0+10,px*2+56,6);
      g.fillStyle='#b83a2e';rr(g,X0-px-54,y0-10,px*2+108,16,3);g.fill();
      g.fillStyle='#1d1717';g.fillRect(X0-px-58,y0-14,px*2+116,6);
    }
    if(type===2){
      [-1,1].forEach(side=>{
        for(let j=0;j<3;j++){
          const sj=lmPos(k)+(j-1)*190+side*35,y=V.cy-(sj-V.sc),X=V.VW/2+center(sj)-V.cs0,hj=halfW(sj);
          const hx=X+side*(hj+70+(j%2)*30),w=78,h=64;
          g.fillStyle='rgba(30,40,30,.22)';rr(g,hx-w/2+6,y-h/2+8,w,h,4);g.fill();
          g.fillStyle='#6b4a3a';rr(g,hx-w/2,y-h/2,w,h,4);g.fill();
          g.strokeStyle='rgba(40,25,18,.5)';g.lineWidth=1.5;for(let i=-w/2+8;i<w/2;i+=8)line(g,hx+i,y-h/2+2,hx+i,y+h/2-2);
          g.strokeStyle='#4b3226';g.lineWidth=3;line(g,hx-w/2,y,hx+w/2,y);
          g.fillStyle='#ffd27a';g.fillRect(hx-26,y-24,10,10);g.fillRect(hx+16,y+12,10,10);
          V.lights.push([hx,y,90,.75]);
        }
      });
    }
    if(type===5){
      const bx=X0-hw-128,w=116,h=96;
      g.fillStyle='rgba(30,40,40,.22)';rr(g,bx-w/2+8,y0-h/2+10,w,h,4);g.fill();
      g.fillStyle='#d8c3a4';rr(g,bx-w/2,y0-h/2,w,h,4);g.fill();
      g.fillStyle='#3f8a78';rr(g,bx-w/2-10,y0-h/2-8,w+20,h*.6,12);g.fill();
      g.fillStyle='#62b19b';rr(g,bx-w/2+4,y0-h/2-3,w-8,h*.5,9);g.fill();
      g.fillStyle='#b8392e';[-1,1].forEach(sd=>g.fillRect(bx+sd*(w/2-9)-3,y0-h/2+h*.5,6,h*.5-4));
      g.strokeStyle='rgba(20,70,60,.5)';g.lineWidth=2;for(let i=-w/2+14;i<w/2;i+=14)line(g,bx+i,y0-h/2-4,bx+i,y0-h/2+h*.5);
      g.fillStyle='#5a4636';rr(g,bx-w/2+6,y0+h*.12,w-12,8,2);g.fill();
      const sw=Math.sin(V.t*.9)*2.5;
      g.strokeStyle='#3d2e24';g.lineWidth=2;line(g,bx,y0+h*.12,bx+sw*.4,y0+h*.12+14);
      g.fillStyle='#e4b765';g.beginPath();g.arc(bx+sw*.4,y0+h*.12+22,9,Math.PI,0);g.lineTo(bx+sw*.4+9,y0+h*.12+26);g.lineTo(bx+sw*.4-9,y0+h*.12+26);g.fill();
      [-1,1].forEach(sd=>{const lx=X0-hw-30,ly=y0+sd*52;g.fillStyle='#b4b2bf';rr(g,lx-7,ly-7,14,14,3);g.fill();g.fillStyle='#ffd48a';circ(g,lx,ly,4.2);g.fill();V.lights.push([lx,ly,95,.8])});
      V.lights.push([bx,y0,130,.7]);
    }
    if(type===7){
      const bx=X0+hw+130,w=110,h=88;
      g.fillStyle='rgba(30,40,30,.22)';rr(g,bx-w/2+8,y0-h/2+10,w,h,5);g.fill();
      g.fillStyle='#e6d4b0';rr(g,bx-w/2,y0-h/2,w,h,5);g.fill();
      g.fillStyle='#c9ad6a';rr(g,bx-w/2-9,y0-h/2-7,w+18,h*.6,12);g.fill();
      g.strokeStyle='rgba(120,90,40,.45)';g.lineWidth=1.5;for(let i=-w/2+6;i<w/2+8;i+=9)line(g,bx+i,y0-h/2-5,bx+i,y0-h/2+h*.5);
      g.fillStyle='#ffd88a';g.fillRect(bx-24,y0+h*.12,18,14);g.fillRect(bx+8,y0+h*.12,18,14);
      const px=bx-74,py=y0+34;
      g.strokeStyle='#6a4a30';g.lineWidth=2;line(g,px,py-4,px,py+12);
      g.fillStyle='#d9534a';circ(g,px,py-4,19);g.fill();g.strokeStyle='#f4b9a8';g.lineWidth=1.5;for(let q=0;q<6;q++){const a=q*Math.PI/3;line(g,px,py-4,px+Math.cos(a)*19,py-4+Math.sin(a)*19)}
      for(let i=0;i<4;i++){const u=((V.t*.35+i/4)%1);g.fillStyle='rgba(255,255,255,'+(.35*(1-u))+')';circ(g,bx+12+Math.sin(u*6+i)*5,y0-h/2-6-u*34,4+u*6);g.fill()}
      V.lights.push([bx,y0,120,.75],[px,py,50,.5]);
    }
    if(type===8){
      for(const side of [-1,1])for(let j=0;j<9;j++){
        const y=y0+(j-4)*30,x=X0+side*(hw-4-hash(k*13+j+side)*34),a=side*(.5+hash(k+j*7)*.5);
        g.fillStyle='rgba(122,168,104,'+(.5+hash(j+k*3)*.2)+')';g.beginPath();g.ellipse(x,y,36,7,a,0,7);g.fill();
        g.fillStyle='rgba(150,190,120,.45)';g.beginPath();g.ellipse(x+side*-14,y+8,28,5,-a,0,7);g.fill();
      }
    }
  });
}
