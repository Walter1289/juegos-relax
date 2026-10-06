/* terrain.js — terreno: hierba, orillas de arena y agua del río */
import {V} from './state.js';
import {center,halfW} from './world.js';

function edgePath(g,E){g.beginPath();E.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]))}
export function drawTerrain(g){
  const {VW,VH,cy,sc,cs0}=V,N=Math.ceil(VH/8)+6,L=[],Rr=[];
  for(let i=0;i<N;i++){const y=-24+i*8,s=sc+cy-y,X=VW/2+center(s)-cs0,h=halfW(s);L.push([X-h,y]);Rr.push([X+h,y])}
  V.L=L;V.R=Rr;
  let gr=g.createLinearGradient(0,0,0,VH);gr.addColorStop(0,'#7fb263');gr.addColorStop(1,'#92c46e');
  g.fillStyle=gr;g.fillRect(0,0,VW,VH);
  g.lineJoin='round';g.lineCap='round';g.lineWidth=20;g.strokeStyle='#e6d8a8';
  edgePath(g,L);g.stroke();edgePath(g,Rr);g.stroke();
  edgePath(g,L);for(let i=N-1;i>=0;i--)g.lineTo(Rr[i][0],Rr[i][1]);g.closePath();
  let wg=g.createLinearGradient(0,0,0,VH);wg.addColorStop(0,'#98cfc6');wg.addColorStop(1,'#5aa4b0');
  g.fillStyle=wg;g.fill();
  g.lineWidth=3;g.strokeStyle='rgba(255,255,255,.35)';
  edgePath(g,L);g.stroke();edgePath(g,Rr);g.stroke();
}
