/* Dibujo de los objetos reparables (roto/reparado) y de las guirnaldas de luces */
import {poly,rr,line,hash,HEX,hexPath} from './util.js';
import {BOOKS} from './items.js';

function drawRoof(g,f){
  /* tejado de kawara: tejas pizarra en hileras, cumbrera redonda con onigawara y aleros que se curvan hacia arriba */
  const body=[[186,266],[196,258],[470,152],[815,234],[826,266],[815,268],[196,268]];
  g.fillStyle=f?'#4a546b':'#6d6a76';poly(g,body);g.fill();
  g.save();poly(g,body);g.clip();
  for(let r=0;r<9;r++){
    const y=160+r*12;
    for(let x=190-(r%2)*11;x<830;x+=22){
      const k=hash(r*50+x);
      g.fillStyle=f?(k>.5?'#56617b':'#515b75'):(k>.5?'#746f7b':'#6a6672');
      rr(g,x,y,20,10,4);g.fill();
      g.fillStyle='rgba(20,24,40,'+(f?.35:.2)+')';g.fillRect(x+1,y+8,18,2);
      g.fillStyle='rgba(255,230,210,'+(f?.14:.05)+')';g.fillRect(x+3,y+1,14,1.4);
    }
  }
  if(!f){
    g.fillStyle='#2c2748';
    [[[300,215],[330,205],[346,226],[320,242]],[[470,190],[500,184],[512,210],[482,216]],[[640,205],[676,212],[670,240],[640,232]],[[400,232],[422,226],[428,248],[406,250]],[[560,176],[582,180],[576,198],[558,196]]].forEach(p=>{poly(g,p);g.fill()});
  }
  g.restore();
  g.lineCap='round';g.lineJoin='round';g.lineWidth=f?9:7;g.strokeStyle=f?'#2f3446':'#4d4a56';
  g.beginPath();g.moveTo(196,258);g.lineTo(470,152);g.lineTo(815,234);g.stroke();
  g.fillStyle=f?'#2f3446':'#4d4a56';
  [[196,258,-1],[815,234,1]].forEach(([x,y,d])=>{g.beginPath();g.moveTo(x,y+8);g.quadraticCurveTo(x+d*8,y-6,x+d*22,y-26);g.quadraticCurveTo(x+d*2,y-8,x-d*10,y-2);g.closePath();g.fill();
    g.fillStyle=f?'#c9a14a':'#8d806a';g.beginPath();g.arc(x+d*20,y-26,4.5,0,7);g.fill();g.fillStyle=f?'#2f3446':'#4d4a56'});
  g.fillStyle=f?'#3b2a24':'#5b4a42';g.fillRect(186,266,640,7);
  g.fillStyle=f?'#5a3d2e':'#7a6a5e';[200,320,440,560,680,800].forEach(x=>g.fillRect(x,266,6,9));
  if(!f){g.save();g.translate(196,266);g.rotate(.5);g.fillStyle='#7a6a5e';g.fillRect(0,0,46,7);g.restore()}
}
function drawPanel(g,f){
  /* lucernario de papel: pequeño tejado elevado sobre el tejado principal */
  g.save();g.translate(560,186);g.rotate(.22);
  if(f){
    g.fillStyle='#4b342a';g.fillRect(2,-42,108,38);
    g.fillStyle='#f6ecd4';g.fillRect(8,-37,96,28);
    g.strokeStyle='#4b342a';g.lineWidth=2;for(let i=1;i<4;i++)line(g,8+i*24,-37,8+i*24,-9);line(g,8,-23,104,-23);
    g.fillStyle='rgba(255,208,130,.35)';g.fillRect(8,-37,96,28);
    g.fillStyle='#3e4659';poly(g,[[-8,-42],[120,-42],[104,-58],[8,-58]]);g.fill();
    g.fillStyle='#c9a14a';g.fillRect(-8,-44,128,3);
  }else{
    g.fillStyle='#2c2748';g.fillRect(4,-34,104,30);
    g.fillStyle='#7a6a5e';g.save();g.rotate(-.4);g.fillRect(20,-30,64,8);g.restore();g.save();g.rotate(.5);g.fillRect(50,-26,52,8);g.restore();
  }
  g.restore();g.restore();
}
function drawWindow(g,f){
  /* shoji: papel translúcido con celosía de madera */
  const x=620,y=292,w=125,h=145;
  g.fillStyle='#4b342a';g.fillRect(x-8,y-8,w+16,h+16);
  if(f){
    let v=g.createLinearGradient(0,y,0,y+h);v.addColorStop(0,'#f8eed6');v.addColorStop(1,'#f1dfb6');g.fillStyle=v;g.fillRect(x,y,w,h);
    g.strokeStyle='#4b342a';g.lineWidth=3;
    for(let i=1;i<4;i++)line(g,x+i*w/4,y,x+i*w/4,y+h);
    for(let j=1;j<5;j++)line(g,x,y+j*h/5,x+w,y+j*h/5);
    g.strokeStyle='rgba(120,90,60,.25)';g.lineWidth=1;for(let i=0;i<5;i++)line(g,x+6+i*24,y+4,x+14+i*24,y+h-4);
  }else{
    g.fillStyle='#2b2644';g.fillRect(x,y,w,h);
    g.fillStyle='#e9dfc4';poly(g,[[x,y],[x+60,y],[x+42,y+50],[x+8,y+40]]);g.fill();poly(g,[[x+w,y+h],[x+w-52,y+h],[x+w-36,y+90],[x+w,y+100]]);g.fill();
    g.strokeStyle='#4b342a';g.lineWidth=3;line(g,x+w/2,y,x+w/2,y+h);line(g,x,y+h/2,x+w,y+h/2);
    g.strokeStyle='#e9dfc4';g.lineWidth=1.4;line(g,x+70,y+30,x+100,y+60);line(g,x+20,y+100,x+50,y+130);
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
  /* futón sobre el tatami */
  const x=400,y=500,w=200;
  g.save();
  if(!f){g.translate(x+w,520);g.rotate(-.03);g.translate(-(x+w),-520)}
  if(f){
    g.fillStyle='#f0e6cf';rr(g,x,y+8,w,12,6);g.fill();
    g.fillStyle='#2f4a74';rr(g,x+52,y-1,w-56,16,7);g.fill();
    g.fillStyle='#f0e6cf';for(let i=0;i<3;i++)g.fillRect(x+70+i*38,y-1,8,16);
    g.fillStyle='#d9c08a';rr(g,x+6,y-4,40,16,8);g.fill();
  }else{
    g.fillStyle='#a7a693';rr(g,x,y+10,w,10,5);g.fill();
    g.fillStyle='#8d86a0';g.beginPath();g.moveTo(x+60,y+10);g.quadraticCurveTo(x+100,y-6,x+150,y+10);g.closePath();g.fill();
    g.fillStyle='rgba(40,50,30,.4)';g.beginPath();g.arc(x+70,y+14,7,0,7);g.arc(x+130,y+14,5,0,7);g.fill();
  }
  g.restore();g.restore();
}
function drawPainting(g,f){
  /* kakejiku: pergamino colgante con rodillos */
  const x=412,y=282,w=54,h=118;
  g.save();
  if(!f){g.translate(x+w/2,y);g.rotate(.2);g.translate(-(x+w/2),-y)}
  g.fillStyle=f?'#2f4a6b':'#8c8472';g.fillRect(x-6,y-4,w+12,h+8);
  if(f){
    let pg=g.createLinearGradient(0,y,0,y+h);pg.addColorStop(0,'#f4e3c4');pg.addColorStop(.6,'#f2c9a4');pg.addColorStop(1,'#e8b49a');g.fillStyle=pg;g.fillRect(x,y,w,h);
    g.fillStyle='#d9473a';g.beginPath();g.arc(x+36,y+26,9,0,7);g.fill();
    g.fillStyle='rgba(120,110,150,.6)';poly(g,[[x,y+70],[x+16,y+50],[x+30,y+66],[x+46,y+46],[x+w,y+68],[x+w,y+86],[x,y+86]]);g.fill();
    g.fillStyle='rgba(60,60,90,.85)';poly(g,[[x,y+h],[x,y+92],[x+24,y+84],[x+w,y+96],[x+w,y+h]]);g.fill();
    g.strokeStyle='#2c2a2e';g.lineWidth=2;g.beginPath();g.moveTo(x+14,y+h);g.bezierCurveTo(x+10,y+100,x+20,y+92,x+16,y+80);g.stroke();
    g.fillStyle='#b8362b';g.fillRect(x+w-14,y+h-16,8,8);
  }else{
    g.fillStyle='#9f998a';g.fillRect(x,y,w,h);g.strokeStyle='#958b75';g.lineWidth=2;line(g,x+6,y,x+24,y+30);line(g,x+24,y+30,x+16,y+h);
  }
  g.fillStyle='#5a3d2e';g.fillRect(x-9,y-8,w+18,6);g.fillRect(x-9,y+h+2,w+18,6);
  g.fillStyle='#c9a14a';g.fillRect(x-11,y-9,3,8);g.fillRect(x+w+8,y-9,3,8);
  g.restore();g.restore();
}
function drawHangLamp(g,f,lit){
  g.strokeStyle='#6b4a35';g.lineWidth=2;
  if(!f){
    line(g,505,264,505,300);
    g.save();g.translate(505,300);g.rotate(.5);line(g,0,0,0,18);g.fillStyle='#b5a888';g.beginPath();g.ellipse(0,32,13,15,0,0,7);g.fill();
    g.strokeStyle='#6d6455';g.lineWidth=1.5;line(g,-8,28,6,40);line(g,4,22,10,34);g.restore();
    return;
  }
  line(g,505,264,505,316);
  g.fillStyle=lit?'#fbe6b4':'#c8b890';g.beginPath();g.ellipse(505,338,17,22,0,0,7);g.fill();
  g.strokeStyle='#8e3d2e';g.lineWidth=1.4;for(let k=-2;k<=2;k++){g.beginPath();g.ellipse(505,338,17*Math.sqrt(1-Math.pow(k/2.6,2)),3,0,0,7);g.save();g.translate(0,k*7);g.stroke();g.restore()}
  g.fillStyle='#2f2a2a';g.fillRect(496,314,18,5);g.fillRect(496,356,18,5);
  g.fillStyle='#b8432e';line(g,505,361,505,372);
}
function drawFloor(g,f){
  if(f){
    /* tatami: esteras de igusa con orilla verde */
    for(let x=232;x<770;x+=90){g.fillStyle='#56633f';g.fillRect(x,512,90,9);g.fillStyle='#d2c58e';g.fillRect(x+3,513,84,6);g.fillStyle='rgba(255,255,230,.25)';g.fillRect(x+3,513,84,1.5)}
    g.fillStyle='rgba(255,230,190,.07)';g.fillRect(215,522,690,6);drawInterior(g);return}
  g.fillStyle='#444e91';
  [[298,44],[520,38],[642,30],[830,46]].forEach(([x,w])=>{g.fillRect(x,520,w,34);poly(g,[[x,520],[x+w,520],[x+w-6,512],[x+8,514]]);g.fill()});
  g.fillStyle='#8c6a44';
  [[290,525,14],[560,528,12],[668,524,16]].forEach(([x,y,w])=>{g.save();g.translate(x,y);g.rotate(.35);g.fillRect(0,0,w,5);g.restore()});
  g.strokeStyle='#7a5a40';g.lineWidth=3;line(g,380,521,430,526);line(g,720,522,770,520);
}
/* mobiliario japonés sobre el tatami: tansu, chabudai con cojines zabuton, té */
function drawInterior(g){
  const Y=514;g.save();g.translate(0,Y);g.scale(1,1);g.translate(0,-Y);
  const Z=(cx,k)=>{g.translate(cx,Y);g.scale(k,k);g.translate(-cx,-Y)};
  /* tansu */
  g.save();Z(386,1.5);g.translate(14,0);
  g.fillStyle='#7a4a30';g.fillRect(372,Y-40,30,40);g.fillStyle='#8f5a3a';g.fillRect(374,Y-38,26,12);g.fillRect(374,Y-24,26,10);g.fillRect(374,Y-12,26,10);
  g.fillStyle='#d9b45a';[[387,-32],[387,-19],[387,-7]].forEach(([x,y])=>g.fillRect(x-3,Y+y,6,2));
  g.fillStyle='#5a3d2e';g.fillRect(372,Y-42,30,3);
  g.restore();g.save();Z(655,1.3);
  /* zabuton */
  g.fillStyle='#3d4f8a';rr(g,610,Y-7,34,7,3);g.fill();g.fillStyle='#c9553a';rr(g,686,Y-7,32,7,3);g.fill();
  /* chabudai */
  g.fillStyle='#6b4a35';g.fillRect(648,Y-22,5,22);g.fillRect(684,Y-22,5,22);
  g.fillStyle='#a47850';rr(g,640,Y-27,58,6,2);g.fill();g.fillStyle='rgba(255,230,190,.25)';g.fillRect(642,Y-27,54,1.5);
  g.fillStyle='#2f2a2a';rr(g,646,Y-32,22,5,2);g.fill();
  g.fillStyle='#3a4a6a';g.beginPath();g.ellipse(657,Y-38,6,6,0,0,7);g.fill();g.fillRect(662,Y-40,5,2);
  g.fillStyle='#f3ead2';[[676,0],[686,0]].forEach(([x])=>{g.beginPath();g.ellipse(x,Y-30,3.5,2.2,0,0,7);g.fill()});
  g.restore();g.restore();
}
function drawStairs(g,f){
  if(f)return;
  g.fillStyle='#5f699d';
  [2,5,7].forEach(i=>{const x=215-i*24,y=556+i*19;g.fillRect(x-45,y-1,50,13)});
  g.fillStyle='#ac845c';g.save();g.translate(215-5*24-30,556+5*19+4);g.rotate(.6);g.fillRect(0,0,22,6);g.restore();
}
function drawRailing(g,f){
  g.fillStyle='#9a3d2e';
  if(f){
    [782,845,903].forEach(x=>g.fillRect(x-4,430,8,90));g.fillRect(776,426,132,8);
    g.strokeStyle='rgba(120,40,30,.5)';g.lineWidth=2;
    for(let x=782;x<=903;x+=12)line(g,x,434,x,520);
    for(let y=442;y<520;y+=12)line(g,782,y,903,y);
  }else{
    g.fillRect(778,430,8,90);g.fillRect(899,450,8,70);
    g.save();g.translate(845,520);g.rotate(.28);g.fillRect(-4,-90,8,90);g.restore();
    g.fillRect(776,426,62,8);
    g.save();g.translate(838,426);g.rotate(.5);g.fillRect(0,0,50,8);g.restore();
    g.strokeStyle='rgba(120,40,30,.45)';g.lineWidth=2;
    for(let x=782;x<=840;x+=12)line(g,x,434,x,520);
    for(let y=442;y<520;y+=12){if(y<490)line(g,782,y,830,y);else line(g,782,y,903,y)}
    line(g,880,470,900,520);line(g,870,520,905,486);
  }
}
function drawNichos(g,f){
  HEX.forEach(([x,y,r],i)=>{
    if(f){
      const gr=g.createRadialGradient(x,y,2,x,y,r-8);gr.addColorStop(0,'#fff0c4');gr.addColorStop(1,'#e6a665');
      g.fillStyle=gr;hexPath(g,x,y,r-8);g.fill();
      g.strokeStyle='#5a3d2e';g.lineWidth=3;line(g,x-r+12,y,x+r-12,y);line(g,x,y-r+12,x,y+r-12);
      g.fillStyle='#cfc9bb';g.beginPath();g.ellipse(x+14,y+22,8,10,0,0,7);g.fill();
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
  [[752,508,0],[781,508,1]].forEach(([x,y,k],j)=>{
    g.fillStyle=f?(k?'#9a6a3c':'#2f4a74'):'#b28a77';poly(g,[[x-11,y-6],[x+11,y-6],[x+8,y+12],[x-8,y+12]]);g.fill();
    if(f){
      g.strokeStyle='#5a3d33';g.lineWidth=4;g.beginPath();g.moveTo(x,y-6);g.quadraticCurveTo(x-7,y-20,x+2,y-34);g.stroke();
      const sw=Math.sin(t*.9+j)*.8;
      (k?[['#f3bccb',-8,-40,9],['#eea9bd',6,-44,10],['#f8d0da',0,-52,8],['#e99fb4',-12,-30,7]]:[['#4f7a58',-10,-38,11],['#5f8f66',8,-44,12],['#44704f',-2,-52,9]]).forEach(([c,dx,dy,r])=>{g.fillStyle=c;g.beginPath();g.ellipse(x+dx+sw,y+dy,r*(k?1:1.5),r*(k?1:.65),0,0,7);g.fill()});
    }else{
      g.strokeStyle='#aa9671';g.lineWidth=2;line(g,x,y-6,x-8,y-26);line(g,x,y-6,x+6,y-22);line(g,x,y-6,x+1,y-30);
    }
  });
}
const STR=[[[205,266],[350,296],[500,270]],[[500,270],[650,296],[808,266]],[[808,266],[880,330],[905,432]]];
const qp=(s,u)=>({x:(1-u)*(1-u)*s[0][0]+2*(1-u)*u*s[1][0]+u*u*s[2][0],y:(1-u)*(1-u)*s[0][1]+2*(1-u)*u*s[1][1]+u*u*s[2][1]});
export const BULBS=[];STR.forEach(s=>{for(let u=.1;u<.95;u+=.16)BULBS.push(qp(s,u))});
function drawStrings(g,f){
  g.strokeStyle='#6b4a35';g.lineWidth=2;
  if(f){
    STR.forEach(s=>{g.beginPath();g.moveTo(s[0][0],s[0][1]);g.quadraticCurveTo(s[1][0],s[1][1],s[2][0],s[2][1]);g.stroke()});
    const pal=['#ff9a62','#fff0d0','#e8604a','#ffd9a0'];
    BULBS.forEach((b,i)=>{g.fillStyle=pal[i%4];g.beginPath();g.ellipse(b.x,b.y+5,4.6,6.4,0,0,7);g.fill();g.fillStyle='#2f2a2a';g.fillRect(b.x-2.5,b.y-1.5,5,2)});
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
