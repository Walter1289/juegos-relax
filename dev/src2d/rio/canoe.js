/* canoe.js — canoa japonesa con remero de sombrero de paja y su estela */
import {clamp,circ,rr,line} from './util.js';
import {V} from './state.js';

export function drawWake(g,x,y,ang,v){
  const k=clamp((v-30)/80,0,1);if(k<.02)return;
  g.save();g.translate(x,y);g.rotate(ang);
  g.lineCap='round';g.lineWidth=2;
  [-1,1].forEach(sd=>{
    for(let j=0;j<3;j++){
      g.strokeStyle='rgba(255,255,255,'+(.34*k*(1-j*.28))+')';g.setLineDash([14,10+j*6]);g.lineDashOffset=-V.t*40;
      g.beginPath();g.moveTo(sd*9,60);g.quadraticCurveTo(sd*(22+j*13),88,sd*(40+j*24),132+j*18);g.stroke();
    }
  });
  g.setLineDash([]);
  g.fillStyle='rgba(255,255,255,'+(.22*k)+')';g.beginPath();g.ellipse(0,86,7,26,0,0,7);g.fill();
  g.restore();
}
export function drawCanoe(g,x,y,ang,ph,hold,night){
  g.save();g.translate(x,y);g.rotate(ang);
  const hull=k=>{g.beginPath();g.moveTo(0,-64*k);g.bezierCurveTo(22*k,-34*k,23*k,30*k,6*k,62*k);g.lineTo(-6*k,62*k);g.bezierCurveTo(-23*k,30*k,-22*k,-34*k,0,-64*k);g.closePath()};
  g.save();g.translate(4,6);hull(1);g.fillStyle='rgba(8,30,48,.28)';g.fill();g.restore();
  hull(1);g.fillStyle='#b8834f';g.fill();g.lineWidth=2.5;g.strokeStyle='#e0b277';g.stroke();
  hull(.7);g.fillStyle='#74502f';g.fill();
  g.strokeStyle='#92683e';g.lineWidth=3;[-22,8,36].forEach(yy=>line(g,-13,yy,13,yy));
  g.fillStyle='#5a8f55';circ(g,0,-26,10);g.fill();
  [[-4,-30,'#e85a4a'],[3,-31,'#f4846a'],[0,-24,'#f7a1b4'],[-5,-23,'#ef6a58'],[5,-24,'#ffb48a'],[1,-35,'#f26a5a']].forEach(([fx,fy,fc])=>{g.fillStyle=fc;circ(g,fx,fy,3.6);g.fill();g.fillStyle='rgba(255,240,200,.8)';circ(g,fx,fy,1);g.fill()});
  g.fillStyle='#b5473a';g.beginPath();g.ellipse(0,17,12,8,0,0,7);g.fill();
  g.fillStyle='#a03a30';g.beginPath();g.ellipse(0,22,9,5,0,0,7);g.fill();
  g.fillStyle='#f1e6c8';circ(g,0,13,13);g.fill();
  g.strokeStyle='#cdb988';g.lineWidth=1;for(let i=0;i<12;i++){const a=i*.5236;line(g,0,13,Math.cos(a)*12.6,13+Math.sin(a)*12.6)}
  g.fillStyle='#d9c58f';circ(g,0,13,2.6);g.fill();
  const s=Math.sin(ph),side=s>=0?1:-1;
  g.strokeStyle='#d9b27a';g.lineWidth=3;
  if(hold){
    const pp=ph-(side<0?Math.PI:0),tx=side*46,ty=20-14*Math.cos(pp);
    line(g,side*7,18,tx,ty);
    g.fillStyle='#c79a62';g.save();g.translate(tx,ty);g.rotate(Math.atan2(ty-18,tx-side*7));
    g.beginPath();g.ellipse(7,0,9,3.2,0,0,7);g.fill();g.restore();
  }else line(g,-30,24,30,20);
  g.strokeStyle='#5a3c26';g.lineWidth=2;line(g,0,-52,0,-44);
  g.fillStyle=night>.25?'#ffcf7a':'#efe3c6';rr(g,-5,-60,10,12,2);g.fill();
  g.restore();
}
