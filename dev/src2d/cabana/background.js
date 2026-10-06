/* Fondo estático: cielo, ciudad lejana, acantilado, muro, terraza y escalera */
import {W,H,DPR,mk,poly,line,rr,HEX,hexPath} from './util.js';

/* Fondo estático: cielo, ciudad lejana, acantilado, muro, terraza, escalera */
export function buildBackground(){
  const c=mk(W*DPR,H*DPR),g=c.getContext('2d');g.scale(DPR,DPR);
  let a=7;const R=()=>{a=(a*16807)%2147483647;return a/2147483647};
  let s=g.createLinearGradient(0,0,0,H);s.addColorStop(0,'#39479e');s.addColorStop(.55,'#4c59aa');s.addColorStop(1,'#736ba9');
  g.fillStyle=s;g.fillRect(0,0,W,H);
  for(let i=0;i<170;i++){g.globalAlpha=.3+R()*.7;g.fillStyle='#fff';g.beginPath();g.arc(R()*W,R()*H*.62,R()*1.4+.3,0,7);g.fill()}
  g.globalAlpha=1;
  let m=g.createRadialGradient(830,105,8,830,105,120);m.addColorStop(0,'rgba(255,244,214,.55)');m.addColorStop(1,'rgba(255,244,214,0)');
  g.fillStyle=m;g.fillRect(690,0,270,240);
  g.fillStyle='#f0e6c8';g.beginPath();g.arc(830,105,30,0,7);g.fill();
  // nubes suaves
  for(let i=0;i<7;i++){const cx=R()*W,cy=60+R()*220,w=120+R()*160;
    const cg2=g.createRadialGradient(cx,cy,5,cx,cy,w);cg2.addColorStop(0,'rgba(190,180,225,.34)');cg2.addColorStop(1,'rgba(190,180,225,0)');
    g.save();g.translate(cx,cy);g.scale(1,.28);g.translate(-cx,-cy);g.fillStyle=cg2;g.beginPath();g.arc(cx,cy,w,0,7);g.fill();g.restore()}
  // bosque de pinos nublado en capas
  const pine=(x,y,h,col)=>{g.fillStyle=col;g.beginPath();g.moveTo(x,y-h);for(let k=1;k<=5;k++){const yy=y-h+k*h/5,ww=k*h*.075;g.lineTo(x+ww,yy);g.lineTo(x+ww*.55,yy)}
    g.lineTo(x+h*.04,y);g.lineTo(x-h*.04,y);for(let k=5;k>=1;k--){const yy=y-h+k*h/5,ww=k*h*.075;g.lineTo(x-ww*.55,yy);g.lineTo(x-ww,yy)}g.closePath();g.fill()};
  [[560,'#6a6fb0',90,.55],[620,'#5c63a8',120,.7],[680,'#4f579f',150,.85]].forEach(([base,col,hh,al],L)=>{
    g.fillStyle=col;g.globalAlpha=al;poly(g,[[300,720],[420,base+60],[540,base+20],[680,base+50],[820,base],[960,base+30],[960,720]]);g.fill();
    for(let x=330+R()*20;x<W+20;x+=16+R()*14){const hh2=hh*(.5+R()*.6);pine(x,base+40+L*30+R()*20,hh2,col)}
    g.globalAlpha=1;
    const mg=g.createLinearGradient(0,base-40,0,base+90);mg.addColorStop(0,'rgba(205,200,235,0)');mg.addColorStop(.5,'rgba(205,200,235,.30)');mg.addColorStop(1,'rgba(205,200,235,0)');
    g.fillStyle=mg;g.fillRect(300,base-40,660,130)});
  const cliff=[[0,0],[215,0],[240,170],[205,330],[215,540],[790,540],[772,608],[690,662],[610,720],[0,720]];
  let cg=g.createLinearGradient(0,0,300,0);cg.addColorStop(0,'#6a73a1');cg.addColorStop(1,'#576398');
  g.fillStyle=cg;poly(g,cliff);g.fill();
  g.save();poly(g,cliff);g.clip();
  g.lineWidth=2;
  for(let i=0;i<16;i++){const y=i*46+R()*10;g.strokeStyle='rgba(255,255,255,.05)';g.beginPath();g.moveTo(0,y);for(let x=0;x<=800;x+=40)g.lineTo(x,y+Math.sin(x*.02+i)*6);g.stroke()}
  for(let i=0;i<14;i++){const x=R()*700,y=R()*700;g.strokeStyle='rgba(0,0,0,.25)';line(g,x,y,x+R()*40-20,y+30+R()*50)}
  let sh=g.createLinearGradient(0,400,0,720);sh.addColorStop(0,'rgba(0,0,0,0)');sh.addColorStop(1,'rgba(0,0,0,.45)');g.fillStyle=sh;g.fillRect(0,400,800,320);
  g.restore();
  HEX.forEach(([x,y,r])=>{
    g.fillStyle='#495192';hexPath(g,x,y,r-8);g.fill();
    g.lineJoin='round';g.lineWidth=14;g.strokeStyle='#a3856b';hexPath(g,x,y,r);g.stroke();
    g.lineWidth=2;g.strokeStyle='rgba(255,230,190,.14)';hexPath(g,x,y,r-6);g.stroke();
  });
  // muro interior
  let wg=g.createLinearGradient(0,250,0,520);wg.addColorStop(0,'#a1775e');wg.addColorStop(1,'#a7836a');
  g.fillStyle=wg;g.fillRect(225,250,545,272);
  g.strokeStyle='rgba(0,0,0,.28)';g.lineWidth=2;for(let x=251;x<770;x+=26)line(g,x,250,x,520);
  g.fillStyle='#946c53';g.fillRect(225,250,545,12);
  g.fillStyle='#8f8aa0';g.fillRect(225,490,545,30);
  for(let r=0;r<2;r++)for(let x=225-(r%2)*17;x<770;x+=34){g.strokeStyle='rgba(60,50,80,.28)';g.lineWidth=1.5;g.strokeRect(Math.max(225,x),490+r*15,Math.min(34,770-Math.max(225,x)),15);g.fillStyle='rgba(255,255,255,.07)';g.fillRect(Math.max(225,x)+2,490+r*15+2,20,3)}
  g.fillStyle='#7d7892';g.fillRect(225,486,545,5);
  g.fillStyle='#9c7155';g.fillRect(225,250,14,272);g.fillRect(756,250,14,272);
  // terraza
  g.fillStyle='#b19174';g.fillRect(215,520,690,34);
  g.strokeStyle='rgba(0,0,0,.3)';for(let x=275;x<905;x+=60)line(g,x,520,x,554);
  g.fillStyle='rgba(255,230,190,.18)';g.fillRect(215,520,690,3);
  g.fillStyle='#9c7155';g.fillRect(215,554,690,12);
  g.strokeStyle='#9c7155';g.lineWidth=8;line(g,790,612,884,566);
  // escalera
  for(let i=0;i<9;i++){const x=215-i*24,y=556+i*19;g.fillStyle=i%2?'#ad876a':'#b08d6e';g.fillRect(x-44,y,48,9);g.fillStyle='rgba(0,0,0,.35)';g.fillRect(x-44,y+9,48,3)}
  g.strokeStyle='#9c7155';g.lineWidth=5;line(g,222,552,6,712);
  g.fillStyle='#a27b5c';[1,4,7].forEach(i=>{const x=215-i*24,y=556+i*19;g.fillRect(x-2,y-60,4,60)});
  g.strokeStyle='rgba(190,170,140,.5)';g.lineWidth=2;line(g,191,495,119,609);line(g,119,609,47,666);
  // pilotes y kayaks bajo la terraza
  g.fillStyle='#8e6a55';[820,895].forEach(x=>g.fillRect(x-4,566,8,150));g.strokeStyle='#8e6a55';g.lineWidth=4;line(g,820,640,895,600);line(g,820,600,895,640);
  [[600,'#e59a86'],[624,'#7fc3bd']].forEach(([y,c])=>{g.fillStyle=c;g.beginPath();g.ellipse(858,y,56,8,-.04,0,7);g.fill();g.fillStyle='rgba(255,255,255,.3)';g.beginPath();g.ellipse(850,y-2,30,2.5,-.04,0,7);g.fill();g.fillStyle='rgba(60,50,90,.5)';g.beginPath();g.ellipse(862,y-1,12,3,0,0,7);g.fill()});
  // macetas de colores al frente
  [[300,'#e59a86','#f4c6d4'],[334,'#7fc3bd','#f7e19a'],[368,'#d9a5c6','#fff'],[402,'#9fc98a','#f4c6d4']].forEach(([x,pc,fc])=>{
    g.fillStyle=pc;poly(g,[[x-9,538],[x+9,538],[x+6,552],[x-6,552]]);g.fill();
    g.fillStyle='#6f9a6b';g.beginPath();g.arc(x,533,9,0,7);g.fill();
    g.fillStyle=fc;[[-5,529],[3,527],[7,533],[-2,534]].forEach(([dx,dy])=>{g.beginPath();g.arc(x+dx,dy,2.8,0,7);g.fill()})});
  // faroles de pared
  [[236,300],[763,300]].forEach(([x,y])=>{g.strokeStyle='#5c4a4a';g.lineWidth=2;line(g,x,y-18,x,y-8);g.fillStyle='#d9b57a';rr(g,x-6,y-8,12,16,3);g.fill();g.fillStyle='#ffe3a0';rr(g,x-3.5,y-5,7,10,2);g.fill();g.fillStyle='#5c4a4a';g.fillRect(x-7,y+7,14,3)});
  return c;
}
