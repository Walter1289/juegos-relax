/* Jardín zen: se abre cuando se han leído las 11 cartas de Mara. Arena que se rastrilla arrastrando el dedo; sin metas ni puntaje.
   Compartido por la Cabaña 2D y 3D (ventana propia, un solo código). La arena se conserva en este dispositivo. */
const SK='zen-sand',W=640,H=380,STONES=[[170,150,34],[300,235,24],[470,120,30]];
export function addZenTexts(ux){ux.add([['Jardín zen','Zen garden','禅の庭'],['Rastrillar la arena con calma','Rake the sand slowly','砂をゆっくりかき分ける'],['Olas alrededor de las piedras','Ripples around the stones','石のまわりに波紋'],['Alisar','Smooth','ならす'],['Cerrar','Close','閉じる'],['Se abrió el jardín zen: ya leíste todas las cartas de Mara','The zen garden is open: you have read all of Mara’s letters','禅の庭が開きました。マラの手紙をすべて読みました'],['Arrastra el dedo sobre la arena. No hay prisa ni forma correcta.','Drag your finger over the sand. No rush, no right way.','砂の上を指でなぞってください。急ぐ必要も、正しい形もありません。'],['Un momento de calma te dejó un recuerdo','A calm moment left you a keepsake','静かなひとときが思い出をひとつ残しました'],['Mara dejó escrito: «el jardín no se termina, se acompaña»','Mara wrote: “a garden is never finished, only kept company”','マラはこう書きました。「庭は完成させるものではなく、寄りそうもの」']])}
export const zenUnlocked=(state,n)=>{const l=state.ltr||{};for(let i=0;i<(n||11);i++)if(!l[i])return false;return true};
export function openZen(o){
  const tr=o.tr||(s=>s),ov=document.createElement('div');
  ov.style.cssText='position:fixed;inset:0;z-index:80;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:rgba(14,16,36,.94);color:#fbf1e0;font:500 .9rem system-ui;padding:12px';
  const tt=document.createElement('div');tt.textContent=tr('Jardín zen');tt.style.cssText='font:600 1.15rem system-ui';
  const cv=document.createElement('canvas');cv.width=W;cv.height=H;cv.style.cssText='position:relative;inset:auto;display:block;height:auto;z-index:auto;width:min(94vw,640px);max-height:58vh;aspect-ratio:640/380;border-radius:18px;border:1px solid #5a609a;touch-action:none;box-shadow:0 10px 40px rgba(0,0,0,.45);cursor:crosshair';
  const hint=document.createElement('div');hint.textContent=tr('Arrastra el dedo sobre la arena. No hay prisa ni forma correcta.');hint.style.cssText='opacity:.7;font-size:.8rem;text-align:center;max-width:90vw';
  const row=document.createElement('div');row.style.cssText='display:flex;gap:8px;flex-wrap:wrap;justify-content:center';
  const mk=(t,f)=>{const b=document.createElement('button');b.type='button';b.textContent=tr(t);b.style.cssText='min-height:44px;padding:8px 16px;border-radius:99px;border:1px solid #5a609a;background:#363a66;color:#fbf1e0;font:inherit;cursor:pointer';b.onclick=f;row.appendChild(b);return b};
  ov.append(tt,cv,hint,row);document.body.appendChild(ov);
  const g=cv.getContext('2d'),sand=document.createElement('canvas');sand.width=W;sand.height=H;const sg=sand.getContext('2d');
  const base=()=>{sg.fillStyle='#d9c9a3';sg.fillRect(0,0,W,H);for(let i=0;i<2400;i++){sg.fillStyle='rgba('+(i%2?'120,100,70':'255,245,215')+',.07)';sg.fillRect(Math.random()*W,Math.random()*H,1.4,1.4)}};
  base();let dirty=false;
  try{const s=localStorage.getItem(SK);if(s){const im=new Image();im.onload=()=>{sg.drawImage(im,0,0);draw()};im.src=s}}catch(e){}
  const save=()=>{if(!dirty)return;dirty=false;try{localStorage.setItem(SK,sand.toDataURL('image/png'))}catch(e){}};
  const stone=(x,y,r)=>{g.fillStyle='rgba(0,0,0,.22)';g.beginPath();g.ellipse(x+5,y+r*.7,r*1.05,r*.45,0,0,7);g.fill();const gr=g.createRadialGradient(x-r*.35,y-r*.4,r*.1,x,y,r*1.1);gr.addColorStop(0,'#9d9aa6');gr.addColorStop(1,'#4f4d5a');g.fillStyle=gr;g.beginPath();g.ellipse(x,y,r,r*.78,0,0,7);g.fill();g.fillStyle='rgba(110,150,100,.5)';g.beginPath();g.ellipse(x-r*.2,y-r*.5,r*.4,r*.14,0,0,7);g.fill()};
  const bonsai=(x,y)=>{g.fillStyle='#6b4d3a';g.fillRect(x-4,y-34,8,34);g.fillStyle='#8b6a50';g.fillRect(x-28,y-6,56,10);for(const [dx,dy,r] of[[-14,-42,15],[10,-52,18],[22,-34,12]]){g.fillStyle='#5d9a6c';g.beginPath();g.arc(x+dx,y+dy,r,0,7);g.fill();g.fillStyle='rgba(255,255,255,.12)';g.beginPath();g.arc(x+dx-4,y+dy-5,r*.5,0,7);g.fill()}};
  const lantern=(x,y)=>{const c='#8a8896';g.fillStyle=c;g.fillRect(x-14,y-8,28,8);g.fillRect(x-5,y-34,10,28);g.fillRect(x-17,y-42,34,8);g.fillRect(x-11,y-62,22,20);g.fillStyle='rgba(255,225,160,.95)';g.fillRect(x-6,y-57,12,11);g.fillStyle=c;g.beginPath();g.moveTo(x-19,y-62);g.lineTo(x,y-78);g.lineTo(x+19,y-62);g.fill();const gl=g.createRadialGradient(x,y-52,2,x,y-52,60);gl.addColorStop(0,'rgba(255,200,120,.35)');gl.addColorStop(1,'rgba(255,200,120,0)');g.fillStyle=gl;g.fillRect(x-60,y-112,120,120)};
  function draw(){g.drawImage(sand,0,0);for(const [x,y,r] of STONES)stone(x,y,r);bonsai(560,330);lantern(70,340);const v=g.createRadialGradient(W/2,H/2,H*.35,W/2,H/2,H*.9);v.addColorStop(0,'rgba(20,20,40,0)');v.addColorStop(1,'rgba(20,20,40,.35)');g.fillStyle=v;g.fillRect(0,0,W,H)}
  draw();
  /* sonido suave de arena (ruido rosa filtrado, solo mientras se arrastra) */
  let ctx=null,gain=null,src=null;
  const snd=()=>{try{ctx=o.ctx&&o.ctx();if(!ctx||gain)return;const f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=1100;f.Q.value=.6;gain=ctx.createGain();gain.gain.value=0;src=window.UX&&UX.pinkSrc?UX.pinkSrc(ctx,1):null;if(!src)return;src.connect(f);f.connect(gain);window.UX?UX.out(ctx,gain):gain.connect(ctx.destination);src.start(0)}catch(e){gain=null}};
  const vol=v=>{try{gain&&ctx&&gain.gain.setTargetAtTime(v,ctx.currentTime,.05)}catch(e){}};
  let last=null,dist=0,got=0,px=0,py=0;
  const pt=e=>{const r=cv.getBoundingClientRect();return[(e.clientX-r.left)/r.width*W,(e.clientY-r.top)/r.height*H]};
  cv.addEventListener('pointerdown',e=>{cv.setPointerCapture(e.pointerId);last=pt(e);snd();vol(.012)});
  cv.addEventListener('pointermove',e=>{if(!last)return;const p=pt(e),dx=p[0]-last[0],dy=p[1]-last[1],d=Math.hypot(dx,dy);if(d<2)return;
    const nx=-dy/d,ny=dx/d;
    for(let k=-2;k<=2;k++){const ox=nx*k*8,oy=ny*k*8;sg.lineCap='round';sg.lineWidth=3.2;sg.strokeStyle='rgba(95,78,52,.34)';sg.beginPath();sg.moveTo(last[0]+ox+1,last[1]+oy+1);sg.lineTo(p[0]+ox+1,p[1]+oy+1);sg.stroke();sg.lineWidth=2;sg.strokeStyle='rgba(255,248,225,.5)';sg.beginPath();sg.moveTo(last[0]+ox-1,last[1]+oy-1);sg.lineTo(p[0]+ox-1,p[1]+oy-1);sg.stroke()}
    last=p;dist+=d;dirty=true;draw();vol(Math.min(.03,.006+d*.0012));
    if(dist>1100&&got<3){dist=0;got++;try{o.addMem&&o.addMem(1);o.say&&o.say(tr('Un momento de calma te dejó un recuerdo'))}catch(e){}}});
  const end=()=>{last=null;vol(0);save()};cv.addEventListener('pointerup',end);cv.addEventListener('pointercancel',end);
  mk('Olas alrededor de las piedras',()=>{for(const [x,y,r] of STONES)for(let rad=r+14;rad<r+112;rad+=11){sg.lineWidth=3;sg.strokeStyle='rgba(95,78,52,.32)';sg.beginPath();sg.ellipse(x+1,y+1,rad,rad*.8,0,0,7);sg.stroke();sg.lineWidth=1.8;sg.strokeStyle='rgba(255,248,225,.5)';sg.beginPath();sg.ellipse(x-1,y-1,rad,rad*.8,0,0,7);sg.stroke()}dirty=true;draw();save();try{o.chime&&o.chime()}catch(e){}});
  mk('Alisar',()=>{base();dirty=true;draw();save()});
  mk('Cerrar',()=>{end();try{src&&src.stop&&src.stop();gain&&gain.disconnect()}catch(e){}ov.remove()});
  ov.onclick=e=>{if(e.target===ov)row.lastChild.click()};
}
