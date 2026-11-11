/* Bajar a tierra a meditar: desde la primera vuelta cerrada, la canoa puede detenerse en la aldea (plaza de la piedra ceremonial),
   el templo (junto a la campana) y la casa de té (sala de tatami o balcón). Nada corre solo ni tiene meta: se entra, se está y se vuelve a la canoa. */
import * as THREE from 'three';
import {S,P} from './state.js';
import {cam} from './core.js';
import {lmPos} from './world.js';
import {lmMade} from './lm-data.js';
import {STILL} from '../still.js';
import {LOOK,IN} from './input.js';
import {A} from '../audio-rio.js';
import {lang} from '../i18n.js';
import {vueltas} from '../lightmsg.js';
const T3=a=>a[lang()]||a.es;
S.visit=false;
/* ---------- textos ---------- */
const ENTER={2:{es:'Bajar a la plaza de la piedra',en:'Step ashore to the stone square',ja:'石の広場に上がる'},5:{es:'Entrar al templo a meditar',en:'Enter the temple to meditate',ja:'寺に入って瞑想する'},7:{es:'Entrar a la casa de té',en:'Enter the tea house',ja:'茶屋に入る'}};
const ACT={2:{es:'Encender un farol',en:'Light a lantern',ja:'灯籠をともす'},5:{es:'Tocar la campana',en:'Ring the bell',ja:'鐘をつく'},7:{es:'Tomar un sorbo de té',en:'Take a sip of tea',ja:'お茶をひと口'}};
const BACK={es:'Volver a la canoa',en:'Back to the canoe',ja:'カヌーに戻る'};
const VIEW=[{es:'Salir al balcón',en:'Go out to the balcony',ja:'縁側に出る'},{es:'Entrar a la sala',en:'Go into the room',ja:'座敷に入る'}];
const INTRO={
 2:{es:'La piedra guarda a la aldea. Cada farol que enciendes aleja una sombra de las que pesan sobre las personas. Mantén presionado para caminar por la plaza.',en:'The stone watches over the village. Each lantern you light drives away one of the shadows that weigh on people. Press and hold to walk around the square.',ja:'この石は村を見守っています。灯籠をひとつともすたび、人にのしかかる影がひとつ遠ざかります。長押しで広場を歩けます。'},
 5:{es:'Siéntate junto a la campana. Aquí no hay nada que hacer.',en:'Sit beside the bell. There is nothing to do here.',ja:'鐘のそばに座りましょう。ここでは、何もしなくていいのです。'},
 7:{es:'El té está caliente. Sostén la taza con las dos manos.',en:'The tea is hot. Hold the cup with both hands.',ja:'お茶は温かい。両手で湯のみを包みましょう。'}};
const SOMBRAS=[
 {es:'Este farol aleja el miedo.',en:'This lantern drives away fear.',ja:'この灯は、恐れを遠ざけます。'},
 {es:'Este farol aleja el enojo.',en:'This lantern drives away anger.',ja:'この灯は、怒りを遠ざけます。'},
 {es:'Este farol aleja la envidia.',en:'This lantern drives away envy.',ja:'この灯は、ねたみを遠ざけます。'},
 {es:'Este farol aleja la tristeza que pesa.',en:'This lantern drives away the sorrow that weighs.',ja:'この灯は、重たい悲しみを遠ざけます。'},
 {es:'Este farol aleja la prisa.',en:'This lantern drives away haste.',ja:'この灯は、焦りを遠ざけます。'},
 {es:'Este farol aleja la culpa.',en:'This lantern drives away guilt.',ja:'この灯は、罪悪感を遠ざけます。'},
 {es:'Este farol aleja el rencor.',en:'This lantern drives away resentment.',ja:'この灯は、恨みを遠ざけます。'},
 {es:'Este farol aleja la soledad.',en:'This lantern drives away loneliness.',ja:'この灯は、さびしさを遠ざけます。'}];
const FIN2={es:'Ocho luces rodean la piedra. Lo que pesaba se queda aquí; tú sigues más ligero.',en:'Eight lights circle the stone. What weighed on you stays here; you go on lighter.',ja:'八つの灯が石を囲みました。重かったものはここに残り、あなたは軽くなって進みます。'};
const LINES={
 2:[{es:'Los malos espíritus no soportan la luz tranquila. Tampoco los malos pensamientos.',en:'Ill spirits cannot bear a quiet light. Neither can ill thoughts.',ja:'悪い霊は、静かな灯に耐えられません。悪い考えも同じです。'},
    {es:'Mira la llama sin pedirle nada.',en:'Watch the flame without asking anything of it.',ja:'何も求めずに、炎を見つめましょう。'}],
 5:[{es:'Inhala despacio… y suelta el aire más despacio todavía.',en:'Breathe in slowly… and breathe out more slowly still.',ja:'ゆっくり吸って… さらにゆっくり吐きましょう。'},
    {es:'Deja que el sonido llegue y se vaya, igual que los pensamientos.',en:'Let the sound arrive and leave, just like thoughts do.',ja:'音が来ては去るにまかせましょう。考えごとも同じです。'},
    {es:'Cada campanada se apaga sola. También lo que te preocupa.',en:'Every bell stroke fades on its own. So does what worries you.',ja:'鐘の音はひとりでに消えていきます。心配ごとも同じです。'},
    {es:'Los hombros bajan. La frente se afloja.',en:'Your shoulders drop. Your brow softens.',ja:'肩が下がり、額がゆるみます。'},
    {es:'Escucha el silencio entre dos campanas.',en:'Listen to the silence between two bells.',ja:'鐘と鐘のあいだの静けさを聴きましょう。'},
    {es:'No hace falta llegar a ningún sitio. Ya estás aquí.',en:'There is nowhere you need to get to. You are already here.',ja:'どこにも行かなくていい。もう、ここにいます。'}],
 7:[{es:'Un sorbo. El calor baja despacio.',en:'One sip. The warmth goes down slowly.',ja:'ひと口。温もりがゆっくり降りていきます。'},
    {es:'Lo que hoy te inquietaba cabe en esta taza, y se enfría.',en:'What troubled you today fits in this cup, and it cools.',ja:'今日の気がかりは、この湯のみに収まり、冷めていきます。'},
    {es:'Las malas energías no se pelean: se dejan ir con el vapor.',en:'You do not fight bad energy: you let it leave with the steam.',ja:'悪い気とは戦いません。湯気といっしょに手放します。'},
    {es:'Mira lejos. Nada de eso te pide prisa.',en:'Look far away. None of it asks you to hurry.',ja:'遠くを眺めましょう。何ひとつ、あなたを急がせません。'},
    {es:'Ichi-go ichi-e: este momento no se repite, y por eso basta.',en:'Ichi-go ichi-e: this moment will not come again, and so it is enough.',ja:'一期一会。この時は二度となく、だからこそ十分です。'},
    {es:'La taza se vacía. Tú también puedes vaciarte un poco.',en:'The cup empties. You can empty yourself a little too.',ja:'湯のみが空になります。あなたも少し、空っぽになっていい。'}]};
const BELL={es:'La campana se lleva lejos lo que ya no necesitas cargar.',en:'The bell carries far away what you no longer need to carry.',ja:'鐘の音が、もう背負わなくていいものを遠くへ運びます。'};
/* ---------- interfaz ---------- */
let box=null,bEnter,bAct,bView,bBack,cap,fade,near=null,V=null,wasStill=false,busy=false;
const _a=new THREE.Vector3(),_b=new THREE.Vector3(),_c=new THREE.Color();
const C0=new THREE.Color(0x6b645c),C1=new THREE.Color(0xffd9a0);
function init(){
  try{UX.add([['Cuencos y campanas zen','Zen bowls and bells','おりんと鐘の音']])}catch(e){}
  const st=document.createElement('style');st.textContent='#visitBox{position:fixed;z-index:58;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;bottom:max(204px,calc(env(safe-area-inset-bottom) + 196px))}#visitBox.in{bottom:max(26px,calc(env(safe-area-inset-bottom) + 18px))}#visitBox button{min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #8a6a40;background:rgba(60,38,26,.86);color:#fbf1e0;font:600 .88rem system-ui,sans-serif;display:none;cursor:pointer;white-space:nowrap}#visitBox button.soft{background:rgba(32,34,70,.82);border-color:#5a609a}#visitCap{position:fixed;z-index:57;left:50%;transform:translateX(-50%);top:max(74px,calc(env(safe-area-inset-top) + 64px));width:min(86vw,560px);text-align:center;color:#fbf1e0;font:500 1.06rem/1.5 Georgia,"Hiragino Mincho ProN",serif;text-shadow:0 1px 6px rgba(10,12,30,.9);background:rgba(20,22,44,.42);border-radius:16px;padding:10px 16px;opacity:0;transition:opacity 1.4s;pointer-events:none}#visitFade{position:fixed;inset:0;z-index:56;background:#0e1024;opacity:0;transition:opacity .6s;pointer-events:none}body.visiting #abox,body.visiting #joy,body.visiting #stillBtn,body.visiting #lantB,body.visiting #places-row,body.visiting #hint,body.visiting #next,body.visiting #taskBox{display:none!important}';
  document.head.appendChild(st);
  box=document.createElement('div');box.id='visitBox';
  const mk=(f,soft)=>{const b=document.createElement('button');b.type='button';if(soft)b.className='soft';b.onclick=f;box.appendChild(b);return b};
  bEnter=mk(()=>enter(near));bAct=mk(act);bView=mk(swap,true);bBack=mk(leave,true);
  cap=document.createElement('div');cap.id='visitCap';cap.setAttribute('aria-live','polite');
  fade=document.createElement('div');fade.id='visitFade';
  document.body.append(fade,cap,box);
}
function say(t,hold=11){cap.style.opacity=0;clearTimeout(say.h);say.h=setTimeout(()=>{cap.textContent=T3(t);cap.style.opacity=1},cap.textContent?900:50);if(V)V.next=V.t+hold}
/* fundido a oscuro, cambia algo a mitad y vuelve */
function through(fn){if(busy)return;busy=true;fade.style.opacity=1;setTimeout(()=>{try{fn()}finally{fade.style.opacity=0;setTimeout(()=>{busy=false},500)}},640)}
function enter(g){if(!g||V||busy)return;const d=g.userData.visit;
  through(()=>{V={g,d,vi:0,t:0,next:0,li:0,lit:0,bell:0,w:null,hd:0,vel:0,bob:0};S.visit=true;wasStill=STILL.on;STILL.on=true;LOOK.yaw=LOOK.pitch=0;document.body.classList.add('visiting');box.classList.add('in');
    if(d.lamps)for(const l of d.lamps){l.on=0;l.k=0}
    try{A.zen(d.kind===5?1:d.kind===2?2:3)}catch(e){}cap.textContent='';say(INTRO[d.kind],12)})}
function leave(){if(!V||busy)return;through(()=>{V=null;S.visit=false;S.indoor=false;STILL.on=wasStill;LOOK.yaw=LOOK.pitch=0;document.body.classList.remove('visiting');box.classList.remove('in');cap.style.opacity=0;cap.textContent='';try{A.zen(0)}catch(e){}})}
function swap(){if(!V||busy||V.d.views.length<2)return;through(()=>{V.vi=1-V.vi;LOOK.yaw=LOOK.pitch=0})}
function act(){if(!V)return;const d=V.d;
  if(d.kind===2){if(V.lit>=d.lamps.length)return;d.lamps[V.lit].on=1;say(SOMBRAS[V.lit%SOMBRAS.length],9);V.lit++;try{A.bowl([293.66,329.63,392,440,523.25,587.33,659.25,783.99][V.lit-1],.07,0,-2);UX.hap(10)}catch(e){}
    if(V.lit>=d.lamps.length)setTimeout(()=>{if(V&&V.d===d)say(FIN2,16)},9500)}
  else if(d.kind===5){if(V.t-V.bell<3.2)return;V.bell=V.t;try{A.gong()}catch(e){}say(BELL,10)}
  else{try{A.pluck(349.23,.06);A.bowl(392,.035,0,-1)}catch(e){}V.sip=V.t;say(LINES[7][V.li++%LINES[7].length],12)}}
/* ---------- por fotograma ---------- */
export function visitStep(dt){
  if(!box){if(typeof document==='undefined')return;init()}
  const ps=P.dist||-P.pz;near=null;
  if(S.started&&!V&&!S.walk&&!S.cine&&!S.X.photo&&vueltas()>=1)for(const [k,g] of lmMade){if(g.userData.visit&&!g.userData.job&&Math.abs(lmPos(k)-ps)<46){near=g;break}}
  bEnter.style.display=near&&!busy?'block':'none';if(near)bEnter.textContent=T3(ENTER[near.userData.visit.kind]);
  const on=!!V;bBack.style.display=on?'block':'none';bAct.style.display=on&&!(V.d.kind===2&&V.lit>=V.d.lamps.length)?'block':'none';bView.style.display=on&&V.d.views.length>1?'block':'none';
  /* faroles, campana y vapor siguen animándose aunque ya no estés dentro (se apagan solos al salir) */
  for(const [,g] of lmMade){const d=g.userData.visit;if(!d)continue;const here=V&&V.d===d;
    if(d.lamps)for(const l of d.lamps){const tg=here?l.on:0;if(Math.abs(tg-l.k)>.002||l.k>0){l.k+=(tg-l.k)*Math.min(1,dt*1.6);l.b.material.color.copy(_c.copy(C0).lerp(C1,l.k));l.s.material.opacity=l.k*(.62+.08*Math.sin(P.t*5.3+l.d))}}
    if(d.stone){let n=0;for(const l of d.lamps)n+=l.k;d.stone.material.emissive.setRGB(.085*n/8,.055*n/8,.025*n/8)}
    if(d.steam)for(const s of d.steam){const u=(P.t*.22+s.userData.ph)%1;s.position.y=s.userData.y0+u*.5;s.material.opacity=here?.3*Math.sin(u*Math.PI):0;s.scale.setScalar((d.kind===5?.3:.14)+u*(d.kind===5?.5:.2))}
    if(d.bell){const e=here?V.t-V.bell:99,a=e<12&&here&&V.bell>0?Math.exp(-e*.35)*Math.sin(e*2.6):0;d.bell.rotation.x=a*.07;d.log.position.z=2.6-(e<.5&&here&&V.bell>0?Math.sin(e*6.283)*.9:0)}}
  if(!V)return;
  if(!V.g.parent){V=null;S.visit=false;S.indoor=false;STILL.on=wasStill;document.body.classList.remove('visiting');box.classList.remove('in');cap.style.opacity=0;return}
  V.t+=dt;STILL.t=0;bAct.textContent=T3(ACT[V.d.kind]);bBack.textContent=T3(BACK);if(V.d.views.length>1)bView.textContent=T3(VIEW[V.vi]);
  /* frases sin prisa: llegan solas cada cierto tiempo */
  if(V.t>V.next){const L=LINES[V.d.kind];say(L[V.li++%L.length],V.d.kind===2?14:13)}
  /* cámara sentada: respira apenas, y se puede mirar alrededor */
  const v=V.d.views[V.vi];v.ref.updateWorldMatrix(true,false);_a.fromArray(v.eye);_b.fromArray(v.look);v.ref.localToWorld(_a);v.ref.localToWorld(_b);
  const dx=_b.x-_a.x,dy=_b.y-_a.y,dz=_b.z-_a.z,yaw=Math.atan2(dx,-dz),pit=Math.atan2(dy,Math.hypot(dx,dz)),cm=(window.UX&&UX.calm&&UX.calm())?.3:1;
  const ly=Math.max(-1.9,Math.min(1.9,LOOK.yaw)),sipK=V.sip!=null?Math.max(0,1-Math.abs((V.t-V.sip)-.9)/.9):0;
  S.indoor=!!v.indoor;
  if(v.walk){
    /* plaza caminable: mantén presionado para avanzar hacia donde miras; el joystick o deslizar gira. Te quedas dentro del círculo y rodeas la piedra */
    const w=v.walk;if(!V.w)V.w=[_a.x,_a.z];
    const hold=P.hold||P.key.up;V.vel+=((hold?1.5:0)-V.vel)*Math.min(1,dt*3);V.hd+=((hold?IN.steer:0)+(P.key.r?1:0)-(P.key.l?1:0))*1.1*dt;
    const hy=yaw+V.hd-ly;V.w[0]+=Math.sin(hy)*V.vel*dt;V.w[1]-=Math.cos(hy)*V.vel*dt;
    _b.set(0,0,0);v.ref.localToWorld(_b);{const ex=V.w[0]-_b.x,ez=V.w[1]-_b.z,r=Math.hypot(ex,ez);if(r>w.r){V.w[0]=_b.x+ex/r*w.r;V.w[1]=_b.z+ez/r*w.r}}
    for(const [hx,hz,hr] of w.holes){_b.set(hx,0,hz);v.ref.localToWorld(_b);const ex=V.w[0]-_b.x,ez=V.w[1]-_b.z,r=Math.hypot(ex,ez)||1e-3;if(r<hr){V.w[0]=_b.x+ex/r*hr;V.w[1]=_b.z+ez/r*hr}}
    V.bob+=V.vel*dt*2.4;
    cam.position.set(V.w[0],_a.y+Math.sin(V.bob)*.045*Math.min(1,V.vel)*cm,V.w[1]);
    cam.rotation.set(pit*.6+LOOK.pitch*.8,-(yaw+V.hd)+ly,0,'YXZ');
  }else{
  cam.position.set(_a.x,_a.y+Math.sin(V.t*.8)*.012*cm,_a.z);
  cam.rotation.set(pit+LOOK.pitch*.8-sipK*.12,-yaw+ly,0,'YXZ');}
  if(Math.abs(cam.fov-66)>.05&&innerWidth/innerHeight>=1){cam.fov=66;cam.updateProjectionMatrix()}
}
try{window.__visit={enter:()=>enter(near),leave,act,swap,get v(){return V},get near(){return near}}}catch(e){}
