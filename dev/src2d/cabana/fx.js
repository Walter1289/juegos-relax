/* Efectos: partículas, luces, luciérnagas, estrella fugaz y celebración final */
import {W,rnd,lerp,mk,rr,line,uCap} from './util.js';
import {state,rt,g,CELEB_KEY} from './state.js';
import {A} from './audio.js';

export const parts=[];
export function spray(x,y,dx,dy){for(let i=0;i<2;i++)parts.push({k:0,x:x+rnd(-8,8),y:y+rnd(-8,8),vx:dx*.02+rnd(-30,30),vy:dy*.02-rnd(20,70),l:0,m:rnd(.5,.9),r:rnd(1.5,3.2)})}
export function burst(x,y){for(let i=0;i<26;i++){const a=rnd(0,6.28),s=rnd(40,150);parts.push({k:1,x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-40,l:0,m:rnd(.7,1.3),r:rnd(1.5,3.5)})}}
export const FF=Array.from({length:20},()=>({x:rnd(600,950),y:rnd(240,520),p:rnd(0,6.28)}));
export const lit={tab:1,lamp:0,moon:0,str:0,nich:0};
/* ===== Momentos únicos: estrella fugaz ocasional y celebración al terminar la cabaña ===== */
let celeb=null,star=null,nextStar=0,glowSpr=null,lantSpr=null;
/* Sprites pequeños prerenderizados: así la celebración sólo hace drawImage por fotograma */
function sprites(){
  if(glowSpr)return;
  glowSpr=mk(40,40);let c=glowSpr.getContext('2d'),gr=c.createRadialGradient(20,20,0,20,20,20);
  gr.addColorStop(0,'rgba(255,240,150,1)');gr.addColorStop(1,'rgba(255,240,150,0)');c.fillStyle=gr;c.fillRect(0,0,40,40);
  lantSpr=mk(64,80);c=lantSpr.getContext('2d');
  gr=c.createRadialGradient(32,38,2,32,38,32);gr.addColorStop(0,'rgba(255,190,100,.75)');gr.addColorStop(1,'rgba(255,170,70,0)');c.fillStyle=gr;c.fillRect(0,0,64,80);
  c.fillStyle='#ffd48a';rr(c,24,24,16,24,5);c.fill();
  c.fillStyle='#fff3cf';rr(c,28,29,8,14,3);c.fill();
  c.fillStyle='#b9805a';c.fillRect(25,22,14,3);c.fillRect(25,47,14,3);
}
/* Celebra una sola vez por cabaña terminada (se guarda en localStorage; «Reiniciar» lo borra) */
export function celebrate(){
  try{if(localStorage.getItem(CELEB_KEY)==='1')return}catch(e){}
  try{localStorage.setItem(CELEB_KEY,'1')}catch(e){}
  sprites();
  celeb={t:0,spawn:0,n:0,ls:[],ff:Array.from({length:12},()=>({x:rnd(640,940),y:rnd(300,520),p:rnd(0,6.28)}))};
  uCap('Farolillos al cielo',1000);
  if(A.ctx&&A.ctx.state==='running')[0,2,3,7].forEach((st,i)=>A.bell(293.66*Math.pow(2,st/12),A.ctx.currentTime+.1+i*.45,.045,i%2?2:-1,-2));
}
export function updateMoments(dt,t){
  if(rt.started){
    if(!nextStar)nextStar=t+rnd(25,50);
    if(!star&&t>nextStar){
      nextStar=t+rnd(45,100);
      star={t:0,x:rnd(560,920),y:rnd(14,50),vx:-rnd(260,340),vy:rnd(40,70)};
      uCap('Estrella fugaz');
      if(A.ctx&&A.ctx.state==='running')A.note(2349.3,A.ctx.currentTime+.02,1.2,.012,'sine',star.x/W*6-3,-3);
    }
  }
  if(star){star.t+=dt;if(star.t>1.1)star=null}
  if(celeb){
    celeb.t+=dt;
    if(celeb.n<14){
      celeb.spawn-=dt;
      if(celeb.spawn<=0){
        celeb.spawn=rnd(.7,1.1);celeb.n++;
        celeb.ls.push({x:rnd(780,900),y:rnd(430,470),vy:-rnd(28,40),ph:rnd(0,6.28),s:rnd(.7,1.1),l:0});
        if(celeb.n%3===1&&A.ctx&&A.ctx.state==='running')A.bell([587.33,659.25,698.46,880][celeb.n%4],A.ctx.currentTime+.05,.03,2,-2);
      }
    }
    for(let i=celeb.ls.length-1;i>=0;i--){const q=celeb.ls[i];q.l+=dt;q.y+=q.vy*dt;if(q.y<-60)celeb.ls.splice(i,1)}
    if(celeb.t>50&&!celeb.ls.length)celeb=null;
  }
}
export function drawMoments(t){
  g.globalCompositeOperation='lighter';
  if(star){
    const u=star.t/1.1,a=Math.sin(Math.PI*u)*.9,hx=star.x+star.vx*star.t,hy=star.y+star.vy*star.t,tx=hx-star.vx*.14,ty=hy-star.vy*.14;
    const gr=g.createLinearGradient(tx,ty,hx,hy);gr.addColorStop(0,'rgba(255,255,255,0)');gr.addColorStop(1,'rgba(255,255,255,'+a+')');
    g.strokeStyle=gr;g.lineWidth=2;g.lineCap='round';line(g,tx,ty,hx,hy);g.lineCap='butt';
    g.fillStyle='rgba(255,250,230,'+a+')';g.beginPath();g.arc(hx,hy,2,0,7);g.fill();
  }
  if(celeb&&glowSpr){
    const fa=Math.min(1,celeb.t/3)*Math.max(0,1-(celeb.t-20)/30);
    if(fa>.01)celeb.ff.forEach(f=>{
      const x=f.x+Math.sin(t*.6+f.p)*30,y=f.y+Math.cos(t*.5+f.p*1.3)*20;
      g.globalAlpha=fa*(.35+.55*Math.max(0,Math.sin(t*1.8+f.p)));g.drawImage(glowSpr,x-9,y-9,18,18);
    });
    celeb.ls.forEach(q=>{
      const x=q.x+Math.sin(q.l*.7+q.ph)*14,fl=.9+.1*Math.sin(t*5+q.ph);
      g.globalAlpha=Math.min(1,q.l/1.2)*Math.min(1,(q.y+60)/160)*fl;
      g.drawImage(lantSpr,x-32*q.s,q.y-40*q.s,64*q.s,80*q.s);
    });
    g.globalAlpha=1;
  }
  g.globalCompositeOperation='source-over';
}
/* Anula la celebración en curso («Reiniciar») */
export function clearCeleb(){celeb=null}
/* Las luces suben o bajan hacia su objetivo según las reparaciones */
export function updateLights(dt){
  const T={tab:1,lamp:state.repaired.lampara&&state.repaired.panel?1:0,moon:state.repaired.ventana?1:0,str:state.repaired.luces?1:0,nich:state.repaired.nichos?1:0};
  for(const k in T)lit[k]=lerp(lit[k],T[k],Math.min(1,dt*2.2));
}
/* Física de las partículas (salpicaduras y chispas) */
export function updateParts(dt){
  for(let i=parts.length-1;i>=0;i--){const p=parts[i];p.l+=dt;if(p.l>=p.m){parts.splice(i,1);continue}p.vy+=(p.k?60:260)*dt;p.x+=p.vx*dt;p.y+=p.vy*dt}
}
