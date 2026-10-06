/* Dibujo de los objetos reparables (roto/reparado) y de las guirnaldas de luces */
import {poly,rr,line,hash,HEX,hexPath} from './util.js';
import {BOOKS} from './items.js';

function drawRoof(g,f){
  const body=[[196,258],[470,152],[815,234],[815,266],[196,266]];
  g.fillStyle=f?'#af7866':'#987e6f';poly(g,body);g.fill();
  g.save();poly(g,body);g.clip();
  for(let r=0;r<9;r++){
    const y=160+r*12;
    for(let x=190-(r%2)*11;x<830;x+=22){
      const k=hash(r*50+x);
      g.fillStyle=f?(k>.5?'#b88777':'#b57f6e'):(k>.5?'#9e877b':'#998376');
      rr(g,x,y,20,10,3);g.fill();
      g.fillStyle='rgba(255,230,200,'+(f?.16:.05)+')';g.fillRect(x+2,y+1,16,1.5);
    }
  }
  if(!f){
    g.fillStyle='#3b4aa2';
    [[[300,215],[330,205],[346,226],[320,242]],[[470,190],[500,184],[512,210],[482,216]],[[640,205],[676,212],[670,240],[640,232]],[[400,232],[422,226],[428,248],[406,250]],[[560,176],[582,180],[576,198],[558,196]]].forEach(p=>{poly(g,p);g.fill()});
  }
  g.restore();
  g.lineWidth=f?4:3;g.strokeStyle=f?'#d8c5a8':'#937463';g.lineJoin='round';
  g.beginPath();g.moveTo(196,258);g.lineTo(470,152);g.lineTo(815,234);g.stroke();
  g.fillStyle=f?'#a66a56':'#886e64';g.fillRect(196,264,619,6);
  if(!f){g.save();g.translate(196,266);g.rotate(.5);g.fillStyle='#937463';g.fillRect(0,0,46,7);g.restore()}
}
function drawPanel(g,f){
  g.save();g.translate(560,186);g.rotate(.22);
  g.fillStyle='#747b9b';g.fillRect(8,-6,5,12);g.fillRect(96,-6,5,12);
  g.fillStyle=f?'#4269c6':'#5265ac';g.fillRect(0,-36,112,32);
  g.strokeStyle=f?'#95afe6':'#828db1';g.lineWidth=1;
  for(let i=1;i<6;i++)line(g,i*112/6,-36,i*112/6,-4);
  line(g,0,-20,112,-20);
  g.strokeStyle='#b1b8ce';g.strokeRect(0,-36,112,32);
  if(f){g.fillStyle='rgba(255,255,255,.14)';poly(g,[[10,-36],[40,-36],[18,-4],[0,-4]]);g.fill()}
  else{g.strokeStyle='rgba(255,255,255,.8)';g.lineWidth=1.4;line(g,30,-34,48,-20);line(g,48,-20,40,-8);line(g,48,-20,80,-30);line(g,70,-6,90,-22);line(g,90,-22,104,-14)}
  g.restore();
}
function drawWindow(g,f){
  const x=620,y=292,w=125,h=145;
  g.fillStyle='#94684f';g.fillRect(x-8,y-8,w+16,h+16);
  let v=g.createLinearGradient(0,y,0,y+h);v.addColorStop(0,'#3c4fad');v.addColorStop(1,'#6d66a8');g.fillStyle=v;g.fillRect(x,y,w,h);
  g.fillStyle='rgba(255,255,255,.7)';for(let i=0;i<9;i++)g.fillRect(x+8+hash(i)*(w-16),y+6+hash(i+9)*60,1.6,1.6);
  g.fillStyle='rgba(255,214,130,.6)';for(let i=0;i<7;i++)g.fillRect(x+10+hash(i+20)*(w-20),y+h-16+hash(i+30)*10,2,2);
  g.fillStyle='#9c7155';g.fillRect(x+w/2-3,y,6,h);g.fillRect(x,y+h/2-3,w,6);
  if(f){
    g.fillStyle='rgba(255,255,255,.10)';poly(g,[[x+10,y],[x+48,y],[x+14,y+h],[x,y+h]]);g.fill();
    g.fillStyle='#daceb3';poly(g,[[x-8,y-8],[x+22,y-8],[x+14,y+h+8],[x-8,y+h+8]]);g.fill();
    poly(g,[[x+w+8,y-8],[x+w-22,y-8],[x+w-14,y+h+8],[x+w+8,y+h+8]]);g.fill();
    g.strokeStyle='rgba(0,0,0,.12)';g.lineWidth=2;line(g,x+6,y-6,x+2,y+h+6);line(g,x+w-6,y-6,x+w-2,y+h+6);
  }else{
    g.strokeStyle='rgba(255,255,255,.6)';g.lineWidth=1.3;
    line(g,x+40,y+50,x+8,y+8);line(g,x+40,y+50,x+90,y+12);line(g,x+40,y+50,x+110,y+70);line(g,x+40,y+50,x+30,y+h-6);line(g,x+40,y+50,x+80,y+h-8);
    g.fillStyle='#a2775c';poly(g,[[x+w,y],[x+w-36,y],[x+w,y+32]]);g.fill();
    g.fillStyle='#ada597';poly(g,[[x-8,y-8],[x+16,y-8],[x+8,y+60],[x+14,y+90],[x-8,y+60]]);g.fill();
    poly(g,[[x+w+8,y-8],[x+w-14,y-8],[x+w-6,y+40],[x+w-12,y+70],[x+w+8,y+50]]);g.fill();
  }
}
function drawShelf(g,f){
  const x=272,y=285,w=96,h=230,sh=h/4;
  g.save();
  if(!f){g.translate(x+w/2,y+h);g.rotate(-.045);g.translate(-(x+w/2),-(y+h))}
  g.fillStyle='#946a54';g.fillRect(x,y,w,h);
  g.fillStyle='#ad876a';g.fillRect(x-5,y-5,5,h+5);g.fillRect(x+w,y-5,5,h+5);g.fillRect(x-5,y-6,w+10,7);
  for(let i=1;i<=4;i++)g.fillRect(x,y+i*sh-5,w,6);
  for(let i=0;i<4;i++){
    let bx=x+4;const by=y+(i+1)*sh-5;
    while(bx<x+w-6){
      const k=hash(i*31+bx),bw=7+k*6,bh=26+hash(bx+i)*18;
      if(f||hash(i*17+bx*3)>.55){
        g.fillStyle=BOOKS[Math.floor(k*6)];
        if(!f&&hash(bx)>.7){g.save();g.translate(bx+bw,by);g.rotate(.35);g.fillRect(-bw,-bh,bw,bh);g.restore()}
        else g.fillRect(bx,by-bh,bw,bh);
      }
      bx+=bw+1;
    }
  }
  g.restore();
  if(!f)for(let i=0;i<4;i++){g.save();g.translate(374+i*15,516);g.rotate(hash(i)*.8-.4);g.fillStyle=BOOKS[i];g.fillRect(-9,-4,18,8);g.fillStyle='#e5dac2';g.fillRect(-9,-1,18,2);g.restore()}
}
function drawBed(g,f){
  const x=400,y=466,w=200;
  g.save();
  if(!f){g.translate(x+w,520);g.rotate(-.05);g.translate(-(x+w),-520)}
  g.fillStyle='#9d7054';g.fillRect(x+8,y+32,8,520-y-32);g.fillRect(x+w-16,y+32,8,520-y-32);
  g.fillStyle='#a97f62';g.fillRect(x+w-6,y-40,10,92);
  g.fillStyle='#ad876a';g.fillRect(x,y+18,w,14);
  if(f){
    g.fillStyle='#d9d2c2';rr(g,x+4,y+2,w-10,18,6);g.fill();
    g.fillStyle='#c9897c';rr(g,x+58,y-6,w-66,24,8);g.fill();
    g.fillStyle='rgba(255,230,200,.25)';for(let i=0;i<5;i++)g.fillRect(x+70+i*26,y-6,6,24);
    g.fillStyle='#e9e0cb';rr(g,x+8,y-8,48,16,8);g.fill();
  }else{
    g.fillStyle='#a7a693';g.beginPath();g.moveTo(x+4,y+4);g.quadraticCurveTo(x+w/2,y+26,x+w-6,y+4);g.lineTo(x+w-6,y+20);g.lineTo(x+4,y+20);g.closePath();g.fill();
    g.fillStyle='rgba(40,50,30,.4)';g.beginPath();g.arc(x+70,y+14,9,0,7);g.arc(x+130,y+12,6,0,7);g.fill();
    g.fillStyle='#b5b4a7';poly(g,[[x+120,y+8],[x+140,y-4],[x+170,y+4],[x+150,y+14]]);g.fill();
    g.strokeStyle='#d4cfbd';g.lineWidth=2;line(g,x+80,y+14,x+92,y+8);line(g,x+84,y+16,x+96,y+11);
  }
  g.restore();
}
function drawPainting(g,f){
  const x=400,y=292,w=80,h=60;
  g.save();
  if(!f){g.translate(x+w/2,y);g.rotate(.2);g.translate(-(x+w/2),-y)}
  g.fillStyle='#ad876a';g.fillRect(x-5,y-5,w+10,h+10);
  if(f){
    let pg=g.createLinearGradient(0,y,0,y+h);pg.addColorStop(0,'#586db8');pg.addColorStop(.7,'#e0ba90');pg.addColorStop(1,'#e0ba90');g.fillStyle=pg;g.fillRect(x,y,w,h);
    g.fillStyle='#f0e6c8';g.beginPath();g.arc(x+58,y+16,7,0,7);g.fill();
    g.fillStyle='#4e5fa9';poly(g,[[x,y+h],[x+22,y+30],[x+40,y+46],[x+58,y+28],[x+w,y+h]]);g.fill();
  }else{
    g.fillStyle='#9f998a';g.fillRect(x,y,w,h);
    g.strokeStyle='#958b75';g.lineWidth=2;line(g,x+10,y,x+30,y+22);line(g,x+30,y+22,x+22,y+h);line(g,x+60,y+8,x+w,y+26);
  }
  g.restore();
}
function drawHangLamp(g,f,lit){
  g.strokeStyle='#826856';g.lineWidth=2;
  if(!f){
    line(g,505,264,505,300);
    g.save();g.translate(505,300);g.rotate(.5);line(g,0,0,0,24);g.fillStyle='#af9b78';poly(g,[[-14,38],[14,38],[8,22],[-8,22]]);g.fill();g.restore();
    return;
  }
  line(g,505,264,505,318);
  g.fillStyle='#c7b087';poly(g,[[490,332],[520,332],[512,316],[498,316]]);g.fill();
  g.fillStyle=lit?'#faeabe':'#a3987f';g.beginPath();g.arc(505,336,6,0,7);g.fill();
}
function drawFloor(g,f){
  if(f){g.fillStyle='rgba(255,230,190,.07)';g.fillRect(215,522,690,6);return}
  g.fillStyle='#444e91';
  [[298,44],[520,38],[642,30],[830,46]].forEach(([x,w])=>{g.fillRect(x,520,w,34);poly(g,[[x,520],[x+w,520],[x+w-6,512],[x+8,514]]);g.fill()});
  g.fillStyle='#ac845c';
  [[290,525,14],[560,528,12],[668,524,16]].forEach(([x,y,w])=>{g.save();g.translate(x,y);g.rotate(.35);g.fillRect(0,0,w,5);g.restore()});
  g.strokeStyle='#9c7155';g.lineWidth=3;line(g,380,521,430,526);line(g,720,522,770,520);
}
function drawStairs(g,f){
  if(f)return;
  g.fillStyle='#5f699d';
  [2,5,7].forEach(i=>{const x=215-i*24,y=556+i*19;g.fillRect(x-45,y-1,50,13)});
  g.fillStyle='#ac845c';g.save();g.translate(215-5*24-30,556+5*19+4);g.rotate(.6);g.fillRect(0,0,22,6);g.restore();
}
function drawRailing(g,f){
  g.fillStyle='#a27b5c';
  if(f){
    [782,845,903].forEach(x=>g.fillRect(x-4,430,8,90));g.fillRect(776,426,132,8);
    g.strokeStyle='rgba(190,170,140,.4)';g.lineWidth=1;
    for(let x=782;x<=903;x+=12)line(g,x,434,x,520);
    for(let y=442;y<520;y+=12)line(g,782,y,903,y);
  }else{
    g.fillRect(778,430,8,90);g.fillRect(899,450,8,70);
    g.save();g.translate(845,520);g.rotate(.28);g.fillRect(-4,-90,8,90);g.restore();
    g.fillRect(776,426,62,8);
    g.save();g.translate(838,426);g.rotate(.5);g.fillRect(0,0,50,8);g.restore();
    g.strokeStyle='rgba(190,170,140,.35)';g.lineWidth=1;
    for(let x=782;x<=840;x+=12)line(g,x,434,x,520);
    for(let y=442;y<520;y+=12){if(y<490)line(g,782,y,830,y);else line(g,782,y,903,y)}
    line(g,880,470,900,520);line(g,870,520,905,486);
  }
}
function drawNichos(g,f){
  HEX.forEach(([x,y,r],i)=>{
    if(f){
      const gr=g.createRadialGradient(x,y,2,x,y,r-8);gr.addColorStop(0,'#d2ac83');gr.addColorStop(1,'#a76e45');
      g.fillStyle=gr;hexPath(g,x,y,r-8);g.fill();
      g.fillStyle=BOOKS[i];g.fillRect(x-14,y+6,10,22);g.fillStyle=BOOKS[i+2];g.fillRect(x-3,y+2,9,26);
      g.fillStyle='#acc59d';g.beginPath();g.ellipse(x+16,y+18,6,11,.4,0,7);g.fill();
      g.fillStyle='#ad806a';g.fillRect(x+10,y+24,12,8);
    }else{
      g.strokeStyle='#3b4492';g.lineWidth=2;
      line(g,x-r+14,y-10,x,y+8);line(g,x,y+8,x+r-18,y-4);line(g,x,y+8,x-6,y+r-12);
    }
  });
}
function drawTable(g){
  g.fillStyle='#b19075';g.fillRect(805,470,86,8);g.fillRect(812,478,7,42);g.fillRect(877,478,7,42);
  g.fillStyle='#dad2bc';rr(g,818,462,12,9,2);g.fill();rr(g,868,462,12,9,2);g.fill();
  g.fillStyle='#90775e';g.fillRect(842,446,14,24);g.fillStyle='#f7d9a2';g.fillRect(845,451,8,14);
  g.strokeStyle='#90775e';g.lineWidth=2;g.beginPath();g.arc(849,446,6,Math.PI,0);g.stroke();
}
function drawPlants(g,f,t){
  [[752,508],[781,508]].forEach(([x,y],j)=>{
    g.fillStyle=f?'#c48d75':'#b28a77';poly(g,[[x-10,y-14],[x+10,y-14],[x+7,y+12],[x-7,y+12]]);g.fill();
    g.fillStyle=f?'#cd9c84':'#ad806a';g.fillRect(x-12,y-18,24,6);
    if(f){
      for(let i=0;i<6;i++){g.save();g.translate(x,y-18);g.rotate(-.9+i*.36+Math.sin(t*.9+i+j)*.05);g.fillStyle=i%2?'#9cb88d':'#acc59d';g.beginPath();g.ellipse(0,-16,5,15,0,0,7);g.fill();g.restore()}
    }else{
      g.strokeStyle='#aa9671';g.lineWidth=2;line(g,x,y-18,x-8,y-36);line(g,x,y-18,x+6,y-32);line(g,x,y-18,x+1,y-40);
    }
  });
}
const STR=[[[205,266],[350,296],[500,270]],[[500,270],[650,296],[808,266]],[[808,266],[880,330],[905,432]]];
const qp=(s,u)=>({x:(1-u)*(1-u)*s[0][0]+2*(1-u)*u*s[1][0]+u*u*s[2][0],y:(1-u)*(1-u)*s[0][1]+2*(1-u)*u*s[1][1]+u*u*s[2][1]});
export const BULBS=[];STR.forEach(s=>{for(let u=.1;u<.95;u+=.16)BULBS.push(qp(s,u))});
function drawStrings(g,f){
  g.strokeStyle='#826856';g.lineWidth=2;
  if(f){
    STR.forEach(s=>{g.beginPath();g.moveTo(s[0][0],s[0][1]);g.quadraticCurveTo(s[1][0],s[1][1],s[2][0],s[2][1]);g.stroke()});
    const pal=['#f8dea7','#f7ae97','#a7d8f8','#bfecae'];
    BULBS.forEach((b,i)=>{g.fillStyle=pal[i%4];g.beginPath();g.arc(b.x,b.y,3.4,0,7);g.fill()});
  }else{
    g.beginPath();g.moveTo(808,266);g.quadraticCurveTo(830,300,822,350);g.stroke();
    g.beginPath();g.moveTo(205,266);g.quadraticCurveTo(250,290,262,300);g.stroke();
    [[825,330],[822,350],[262,300]].forEach(p=>{g.fillStyle='#928776';g.beginPath();g.arc(p[0],p[1],3,0,7);g.fill()});
  }
}
export function drawScene(g,t,S){
  drawNichos(g,!!S.nichos);drawFloor(g,!!S.piso);drawStairs(g,!!S.escalera);drawRailing(g,!!S.barandal);
  drawWindow(g,!!S.ventana);drawPainting(g,!!S.cuadro);drawShelf(g,!!S.librero);drawBed(g,!!S.cama);
  drawHangLamp(g,!!S.lampara,!!S.panel);drawTable(g);drawPlants(g,!!S.plantas,t);
  drawRoof(g,!!S.techo);drawPanel(g,!!S.panel);drawStrings(g,!!S.luces);
}
