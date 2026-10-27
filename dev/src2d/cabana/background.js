/* Fondo estático: cielo, ciudad lejana, acantilado, muro, terraza y escalera */
import {W,H,DPR,mk,poly,line,rr,HEX,hexPath} from './util.js';

/* Fondo estático: cielo, ciudad lejana, acantilado, muro, terraza, escalera */
export function buildBackground(){
  const c=mk(W*DPR,H*DPR),g=c.getContext('2d');g.scale(DPR,DPR);
  let a=7;const R=()=>{a=(a*16807)%2147483647;return a/2147483647};
  let s=g.createLinearGradient(0,0,0,H);s.addColorStop(0,'#4a4a8c');s.addColorStop(.28,'#b77a9e');s.addColorStop(.55,'#f5a98a');s.addColorStop(.8,'#fbc88e');s.addColorStop(1,'#e6a58a');
  g.fillStyle=s;g.fillRect(0,0,W,H);
  for(let i=0;i<50;i++){g.globalAlpha=.15+R()*.35;g.fillStyle='#fff';g.beginPath();g.arc(R()*W,R()*H*.25,R()*1.2+.3,0,7);g.fill()}
  g.globalAlpha=1;
  let m=g.createRadialGradient(835,215,8,835,215,260);m.addColorStop(0,'rgba(255,236,190,.85)');m.addColorStop(.4,'rgba(255,190,120,.35)');m.addColorStop(1,'rgba(255,190,120,0)');
  g.fillStyle=m;g.fillRect(560,0,400,520);
  g.fillStyle='#fff1cf';g.beginPath();g.arc(835,215,32,0,7);g.fill();
  // nubes alargadas al atardecer
  for(let i=0;i<9;i++){const cx=R()*W,cy=40+R()*230,w=120+R()*180;
    const cg2=g.createRadialGradient(cx,cy,5,cx,cy,w);cg2.addColorStop(0,i%2?'rgba(255,196,170,.5)':'rgba(236,150,170,.45)');cg2.addColorStop(1,'rgba(255,196,170,0)');
    g.save();g.translate(cx,cy);g.scale(1,.18);g.translate(-cx,-cy);g.fillStyle=cg2;g.beginPath();g.arc(cx,cy,w,0,7);g.fill();g.restore()}
  // bosque de pinos nublado en capas
  const pine=(x,y,h,col)=>{g.fillStyle=col;g.beginPath();g.moveTo(x,y-h);for(let k=1;k<=5;k++){const yy=y-h+k*h/5,ww=k*h*.075;g.lineTo(x+ww,yy);g.lineTo(x+ww*.55,yy)}
    g.lineTo(x+h*.04,y);g.lineTo(x-h*.04,y);for(let k=5;k>=1;k--){const yy=y-h+k*h/5,ww=k*h*.075;g.lineTo(x-ww*.55,yy);g.lineTo(x-ww,yy)}g.closePath();g.fill()};
  const sugi=(x,y,h,col)=>{g.fillStyle=col;g.beginPath();g.moveTo(x,y-h*1.1);g.lineTo(x+h*.09,y-h*.3);g.lineTo(x+h*.12,y);g.lineTo(x-h*.12,y);g.lineTo(x-h*.09,y-h*.3);g.closePath();g.fill()};
  const blob=(x,y,h,col,L)=>{g.fillStyle='#5a3d33';g.fillRect(x-1.5,y-h*.7,3,h*.7);g.fillStyle=col;[[0,-1,.5],[-.35,-.8,.38],[.35,-.82,.4]].forEach(([dx,dy,r])=>{g.beginPath();g.ellipse(x+dx*h,y+dy*h,r*h,r*h*.85,0,0,7);g.fill()})};
  const bamboo=(x,y,h,L)=>{g.strokeStyle='#8fb06a';g.lineWidth=2;for(let q=-1;q<=1;q++){const bx=x+q*5;g.beginPath();g.moveTo(bx,y);g.lineTo(bx+q,y-h*(.9+q*.1));g.stroke();g.fillStyle='#9cc17a';g.beginPath();g.ellipse(bx+q,y-h*(.9+q*.1),7,2.4,0,0,7);g.fill()}};
  const shrub=(x,y,h,col)=>{g.fillStyle=col;g.beginPath();g.ellipse(x,y-h*.4,h*1.1,h*.7,0,0,7);g.fill()};
  [[560,'#b78aa8',90,.55],[620,'#9c7a9c',120,.7],[680,'#7d7a84',150,.85]].forEach(([base,col,hh,al],L)=>{
    g.fillStyle=col;g.globalAlpha=al;poly(g,[[300,720],[420,base+60],[540,base+20],[680,base+50],[820,base],[960,base+30],[960,720]]);g.fill();
    for(let x=330+R()*20;x<W+20;x+=16+R()*14){const hh2=hh*(.5+R()*.6),yy0=base+40+L*30+R()*20,k=R();
      if(k<.45)pine(x,yy0,hh2,col);
      else if(k<.62)sugi(x,yy0,hh2,col);
      else if(k<.78)blob(x,yy0,hh2*.6,['#c9553a','#e07a3a','#d9573a','#e8a042'][(R()*4)|0],L);
      else if(k<.86)blob(x,yy0,hh2*.6,['#e9c25a','#f0cf6e'][(R()*2)|0],L);
      else if(k<.94)bamboo(x,yy0,hh2*.8,L);
      else shrub(x,yy0,hh2*.25,['#8aa86a','#e58aa8','#d9708f'][(R()*3)|0])}
    g.globalAlpha=1;
    const mg=g.createLinearGradient(0,base-40,0,base+90);mg.addColorStop(0,'rgba(255,205,190,0)');mg.addColorStop(.5,'rgba(255,205,190,.32)');mg.addColorStop(1,'rgba(255,205,190,0)');
    g.fillStyle=mg;g.fillRect(300,base-40,660,130)});
  // el Río en el fondo del valle: cinta dorada que serpentea, con canoas de farolillo y sakuras en las orillas
  {const rv=g.createLinearGradient(300,0,960,0);rv.addColorStop(0,'#c98fa0');rv.addColorStop(.5,'#ffd3a0');rv.addColorStop(1,'#e8a48e');
   g.fillStyle=rv;g.beginPath();g.moveTo(300,700);g.bezierCurveTo(420,640,560,700,700,650);g.bezierCurveTo(820,606,900,640,960,616);g.lineTo(960,652);g.bezierCurveTo(900,676,820,646,712,690);g.bezierCurveTo(580,740,440,690,300,730);g.closePath();g.fill();
   g.fillStyle='rgba(255,246,220,.35)';g.fillRect(640,664,150,2);g.fillRect(760,650,120,2);
   [[470,688],[640,676],[815,640],[905,628]].forEach(([x,y])=>{g.fillStyle='#4a3326';g.beginPath();g.ellipse(x,y,13,3.2,0,0,7);g.fill();
     const lg=g.createRadialGradient(x,y-9,0,x,y-9,16);lg.addColorStop(0,'rgba(255,214,140,.95)');lg.addColorStop(1,'rgba(255,214,140,0)');g.fillStyle=lg;g.fillRect(x-16,y-26,32,32);
     g.fillStyle='#ffd9a0';g.beginPath();g.arc(x,y-9,3,0,7);g.fill()});
   for(let i=0;i<16;i++){const x=330+R()*620,y=600+R()*70,r=9+R()*9;g.fillStyle=['#f3bccb','#eea9bd','#f8d0da'][i%3];g.globalAlpha=.85;g.beginPath();g.ellipse(x,y,r*1.2,r*.9,0,0,7);g.fill();g.fillStyle='#5a3d33';g.fillRect(x-1.5,y+r*.6,3,8);g.globalAlpha=1}}
  const cliff=[[0,0],[215,0],[240,170],[205,330],[215,540],[790,540],[772,608],[690,662],[610,720],[0,720]];
  let cg=g.createLinearGradient(0,0,300,0);cg.addColorStop(0,'#9a6f5c');cg.addColorStop(1,'#7b5a52');
  g.fillStyle=cg;poly(g,cliff);g.fill();
  g.save();poly(g,cliff);g.clip();
  g.lineWidth=2;
  for(let i=0;i<16;i++){const y=i*46+R()*10;g.strokeStyle='rgba(255,255,255,.05)';g.beginPath();g.moveTo(0,y);for(let x=0;x<=800;x+=40)g.lineTo(x,y+Math.sin(x*.02+i)*6);g.stroke()}
  for(let i=0;i<14;i++){const x=R()*700,y=R()*700;g.strokeStyle='rgba(0,0,0,.25)';line(g,x,y,x+R()*40-20,y+30+R()*50)}
  let sh=g.createLinearGradient(0,400,0,720);sh.addColorStop(0,'rgba(0,0,0,0)');sh.addColorStop(1,'rgba(0,0,0,.45)');g.fillStyle=sh;g.fillRect(0,400,800,320);
  g.restore();
  HEX.forEach(([x,y,r])=>{
    g.fillStyle='#3a3340';hexPath(g,x,y,r-8);g.fill();
    g.lineJoin='round';g.lineWidth=14;g.strokeStyle='#9d948a';hexPath(g,x,y,r);g.stroke();
    g.lineWidth=2;g.strokeStyle='rgba(255,230,190,.14)';hexPath(g,x,y,r-6);g.stroke();
  });
  // muro interior: yeso claro con entramado de madera oscura (estilo minka)
  g.fillStyle='#e8dcc0';g.fillRect(225,250,545,272);
  for(let i=0;i<60;i++){g.fillStyle='rgba(150,120,80,'+(.04+R()*.05)+')';g.fillRect(228+R()*540,254+R()*236,10+R()*30,1.6)}
  g.fillStyle='#5a3d2e';g.fillRect(225,250,545,12);g.fillRect(225,330,545,7);g.fillRect(225,486,545,8);
  [380,545].forEach(x=>g.fillRect(x-4,250,8,240));
  g.fillStyle='#a8a39b';g.fillRect(225,494,545,28);
  for(let r=0;r<2;r++)for(let x=225-(r%2)*17;x<770;x+=34){g.strokeStyle='rgba(60,55,50,.3)';g.lineWidth=1.5;g.strokeRect(Math.max(225,x),494+r*14,Math.min(34,770-Math.max(225,x)),14)}
  g.fillStyle='#4b342a';g.fillRect(225,250,14,272);g.fillRect(756,250,14,272);
  // terraza
  g.fillStyle='#c9a878';g.fillRect(215,520,690,34);
  g.strokeStyle='rgba(0,0,0,.3)';for(let x=275;x<905;x+=60)line(g,x,520,x,554);
  g.fillStyle='rgba(255,230,190,.18)';g.fillRect(215,520,690,3);
  g.fillStyle='#5a3d2e';g.fillRect(215,554,690,12);
  g.strokeStyle='#5a3d2e';g.lineWidth=8;line(g,790,612,884,566);
  // escalera
  for(let i=0;i<9;i++){const x=215-i*24,y=556+i*19;g.fillStyle=i%2?'#b8946c':'#c29d74';g.fillRect(x-44,y,48,9);g.fillStyle='rgba(0,0,0,.35)';g.fillRect(x-44,y+9,48,3)}
  g.strokeStyle='#5a3d2e';g.lineWidth=5;line(g,222,552,6,712);
  g.fillStyle='#9a3d2e';[1,4,7].forEach(i=>{const x=215-i*24,y=556+i*19;g.fillRect(x-2,y-60,4,60)});
  g.strokeStyle='rgba(190,170,140,.5)';g.lineWidth=2;line(g,191,495,119,609);line(g,119,609,47,666);
  // cartel de madera junto a la escalera: un mensaje que se descubrirá más adelante
  {const x=150,y=612;g.fillStyle='#4b342a';g.fillRect(x-24,y-2,5,26);g.fillRect(x+19,y-2,5,26);g.fillStyle='#6b4a36';rr(g,x-30,y-30,60,32,3);g.fill();
   g.strokeStyle='#3b261b';g.lineWidth=2;g.strokeRect(x-28,y-28,56,28);g.fillStyle='#e9d3a3';g.font='700 22px serif';g.textAlign='center';g.fillText('灯',x,y-6);g.textAlign='left';
   g.fillStyle='#3b2a24';g.fillRect(x-34,y-34,68,5)}
  // pilotes de madera oscura bajo la terraza y farol de piedra (tōrō)
  g.fillStyle='#4b342a';[820,895].forEach(x=>g.fillRect(x-5,566,10,150));g.strokeStyle='#4b342a';g.lineWidth=5;line(g,820,640,895,600);line(g,820,600,895,640);
  {const x=862,y=520;g.fillStyle='#aaa59d';g.fillRect(x-16,y-6,32,6);g.fillRect(x-5,y-40,10,34);g.fillRect(x-13,y-48,26,8);
   g.fillStyle='#ffe6b0';g.fillRect(x-8,y-72,16,24);g.fillStyle='#aaa59d';poly(g,[[x-18,y-72],[x+18,y-72],[x+8,y-84],[x-8,y-84]]);g.fill();g.beginPath();g.arc(x,y-87,4,0,7);g.fill()}
  // macetas de colores al frente
  [[300,'#2f4a74','#f4c6d4'],[334,'#9a6a3c','#f7e19a'],[368,'#6a7f58','#fff'],[402,'#c9a14a','#f4c6d4']].forEach(([x,pc,fc])=>{
    g.fillStyle=pc;poly(g,[[x-9,538],[x+9,538],[x+6,552],[x-6,552]]);g.fill();
    g.fillStyle='#6f9a6b';g.beginPath();g.arc(x,533,9,0,7);g.fill();
    g.fillStyle=fc;[[-5,529],[3,527],[7,533],[-2,534]].forEach(([dx,dy])=>{g.beginPath();g.arc(x+dx,dy,2.8,0,7);g.fill()})});
  // faroles de papel a los lados
  [[236,300],[763,300]].forEach(([x,y])=>{g.strokeStyle='#4b342a';g.lineWidth=2;line(g,x,y-22,x,y-12);g.fillStyle='#f3e2c2';g.beginPath();g.ellipse(x,y,9,12,0,0,7);g.fill();
    g.strokeStyle='#8e3d2e';g.lineWidth=1.2;[-5,0,5].forEach(k=>{g.beginPath();g.ellipse(x,y+k,8.5*Math.sqrt(1-k*k/150),2,0,0,7);g.stroke()});g.fillStyle='#2f2a2a';g.fillRect(x-5,y-13,10,3);g.fillRect(x-5,y+10,10,3)});
  return c;
}
