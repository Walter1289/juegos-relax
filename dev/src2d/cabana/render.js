/* Dibujo de cada fotograma: escena, suciedad, iluminación, luciérnagas, partículas y resaltes */
import {W,H,DPR,rr,line,HEX,uTr} from './util.js';
import {ITEMS} from './items.js';
import {state,cur,rt,pointer,g,dirt,lightC,lctx,sctx,sceneC,bgC,DW,DH} from './state.js';
import {drawScene,BULBS} from './scene.js';
import {status,progress} from './rules.js';
import {lit,FF,parts,drawMoments} from './fx.js';

const hintTxt=()=>uTr('Empieza limpiando el piso');
export function render(t){
  if(rt.sceneDirty){sctx.setTransform(DPR,0,0,DPR,0,0);sctx.clearRect(0,0,W,H);sctx.drawImage(bgC,0,0,W,H);drawScene(sctx,0,state.repaired);rt.sceneDirty=false}
  g.setTransform(DPR,0,0,DPR,0,0);g.globalCompositeOperation='source-over';
  g.drawImage(sceneC,0,0,W,H);
  g.drawImage(dirt,0,0,W,H);
  // chimenea
  g.fillStyle='#8f8aa0';g.fillRect(296,150,28,64);g.fillStyle='#7d7892';g.fillRect(292,146,36,8);
  g.strokeStyle='rgba(60,50,80,.3)';g.lineWidth=1.5;for(let y=162;y<214;y+=13)line(g,296,y,324,y);
  if(state.repaired.techo){for(let i=0;i<9;i++){const ph=((t*.09+i/9)%1),x=310+Math.sin(t*.7+i*1.7)*10*ph+ph*34,y=146-ph*120,r=7+ph*20;
    g.globalAlpha=.34*(1-ph);g.fillStyle='#e6e0f2';g.beginPath();g.arc(x,y,r,0,7);g.fill()}g.globalAlpha=1}
  // neblina que deriva
  for(let i=0;i<4;i++){const x=((t*(5+i*2)+i*260)%1300)-200,y=520+i*58;
    const mg=g.createRadialGradient(x,y,0,x,y,170);mg.addColorStop(0,'rgba(215,210,240,.20)');mg.addColorStop(1,'rgba(215,210,240,0)');
    g.save();g.translate(x,y);g.scale(1,.22);g.translate(-x,-y);g.fillStyle=mg;g.fillRect(x-170,y-170,340,340);g.restore()}
  lctx.setTransform(1,0,0,1,0,0);lctx.globalCompositeOperation='source-over';lctx.clearRect(0,0,DW,DH);
  lctx.fillStyle='rgba(54,46,104,.46)';lctx.fillRect(0,0,DW,DH);
  lctx.globalCompositeOperation='destination-out';
  const fl=.92+.05*Math.sin(t*9)+.03*Math.sin(t*23);
  const lg=state.repaired.techo?.8*fl:0;const holes=[[236,300,120,lg],[763,300,120,lg],[849,458,230,fl*lit.tab],[505,340,270,lit.lamp],[690,366,200,.35*lit.moon]];
  BULBS.forEach(b=>holes.push([b.x,b.y,80,.55*lit.str]));
  if(lit.nich>.01)HEX.forEach(([x,y])=>holes.push([x,y,150,.7*lit.nich]));
  if(pointer.drawing&&state.repaired.barandal)holes.push([pointer.lx,pointer.ly,150,.75]);
  holes.forEach(([x,y,r,a])=>{
    if(a<=.01)return;
    const gr=lctx.createRadialGradient(x/2,y/2,0,x/2,y/2,r/2);gr.addColorStop(0,'rgba(0,0,0,'+Math.min(1,a)+')');gr.addColorStop(1,'rgba(0,0,0,0)');
    lctx.fillStyle=gr;lctx.beginPath();lctx.arc(x/2,y/2,r/2,0,7);lctx.fill();
  });
  g.drawImage(lightC,0,0,W,H);
  g.globalCompositeOperation='lighter';
  [[236,300,60,.35*lg,'255,190,100'],[763,300,60,.35*lg,'255,190,100'],[849,458,140,.30*fl*lit.tab,'255,170,70'],[505,340,170,.28*lit.lamp,'255,180,90'],[690,366,120,.12*lit.moon,'130,170,255']].forEach(([x,y,r,a,c])=>{
    if(a<=.005)return;
    const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,'rgba('+c+','+a+')');gr.addColorStop(1,'rgba('+c+',0)');g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2);
  });
  if(lit.str>.02)BULBS.forEach(b=>{const gr=g.createRadialGradient(b.x,b.y,0,b.x,b.y,16);gr.addColorStop(0,'rgba(255,200,110,'+.5*lit.str+')');gr.addColorStop(1,'rgba(255,200,110,0)');g.fillStyle=gr;g.fillRect(b.x-16,b.y-16,32,32)});
  const nf=Math.min(FF.length,Math.floor(progress()*14)+(state.done?3:0)+(state.repaired.nichos?4:0));
  for(let i=0;i<nf;i++){
    const f=FF[i],x=f.x+Math.sin(t*.6+f.p)*30,y=f.y+Math.cos(t*.5+f.p*1.3)*20,a=.35+.55*Math.max(0,Math.sin(t*1.8+f.p));
    const gr=g.createRadialGradient(x,y,0,x,y,9);gr.addColorStop(0,'rgba(255,240,150,'+a+')');gr.addColorStop(1,'rgba(255,240,150,0)');g.fillStyle=gr;g.fillRect(x-9,y-9,18,18);
  }
  g.globalCompositeOperation='source-over';
  parts.forEach(p=>{
    const a=1-p.l/p.m;
    if(p.k===0){g.fillStyle='rgba(200,230,255,'+(.8*a)+')';g.beginPath();g.arc(p.x,p.y,p.r,0,7);g.fill()}
    else{g.globalCompositeOperation='lighter';g.fillStyle='rgba(255,205,120,'+a+')';g.beginPath();g.arc(p.x,p.y,p.r,0,7);g.fill();g.globalCompositeOperation='source-over'}
  });
  drawMoments(t);
  const pulse=.5+.5*Math.sin(t*3);
  if(rt.started&&!state.repaired.piso&&(cur.items.piso||0)<.3){
    g.setLineDash([10,8]);g.lineWidth=3;g.strokeStyle='rgba(255,240,200,'+(.35+.4*pulse)+')';
    rr(g,215,495,690,72,12);g.stroke();g.setLineDash([]);
    g.fillStyle='rgba(255,240,200,.9)';g.font='700 18px Nunito,"Hiragino Sans","Noto Sans JP",sans-serif';g.textAlign='center';
    g.fillText(hintTxt(),560,488);g.textAlign='start';
  }
  ITEMS.forEach(o=>{
    const s=status(o),f2=o.flash||0;
    if(s.k!=='ready'&&f2<=0)return;
    g.lineWidth=3;g.strokeStyle=s.k==='ready'?'rgba(242,180,90,'+(.35+.45*pulse)+')':'rgba(255,255,255,'+f2+')';
    o.rects.forEach(r=>{rr(g,r[0],r[1],r[2],r[3],14);g.stroke()});
  });
}
