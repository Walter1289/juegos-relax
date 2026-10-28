/* Controles estándar: joystick flotante, botones ✕ ○ □ △, Start y soporte de mando (Gamepad API).
   Las acciones reutilizan los botones que ya existen (linterna, quedarme quieto, foto, vista, menú), así que el juego no cambia: solo cómo se alcanzan. */
import {IN,LOOK,CTL,setScheme,relAll} from './input.js';
import {S} from './state.js';
import {clamp} from './util.js';

const $=id=>document.getElementById(id);
const tr=s=>{try{return UX.tr(s)}catch(e){return s}};
try{UX.add([['Soltar','Release','流す'],['Quieto','Still','静止'],['Seguir','Go on','進む'],['Vista','View','視点'],['Start','Start','スタート'],
  ['La corriente te lleva · desliza a la izquierda para dirigir y a la derecha para mirar','The current carries you · slide on the left to steer, on the right to look','流れに身をまかせて · 左側をスライドして操作、右側で見回す'],
  ['desliza el dedo por la mitad izquierda de la pantalla (o usa un mando, o A / D).','slide your finger on the left half of the screen (or use a gamepad, or A / D).','画面の左半分を指でスライド（ゲームパッドや A / D でも操作できます）。'],
  ['Mirar:','Look:','見回す:'],['desliza por la mitad derecha. Botones: ✕ soltar linterna, ○ quedarme quieto, □ foto, △ cambiar vista, Start para el menú.','slide on the right half. Buttons: ✕ release lantern, ○ stay still, □ photo, △ change view, Start for the menu.','右半分をスライド。ボタン: ✕ ランタンを流す、○ じっとする、□ 写真、△ 視点、スタートでメニュー。'],
  ['Controles','Controls','操作方法'],['Controles táctiles','Touch controls','タッチ操作'],['Estándar','Standard','標準'],['Clásico','Classic','クラシック'],
  ['Estándar: izquierda dirige, derecha mira, ✕ ○ □ △ y Start. Clásico: el control anterior','Standard: left steers, right looks, ✕ ○ □ △ and Start. Classic: the previous control','標準: 左で操作、右で見回し、✕ ○ □ △ とスタート。クラシック: 以前の操作']])}catch(e){}

const st=document.createElement('style');
st.textContent=`
#joy{position:fixed;z-index:27;width:104px;height:104px;margin:-52px 0 0 -52px;border-radius:50%;border:2px solid rgba(251,241,224,.35);background:rgba(43,45,82,.28);pointer-events:none;display:none}
#joy i{position:absolute;left:30px;top:30px;width:44px;height:44px;border-radius:50%;background:rgba(255,226,168,.62);border:1px solid rgba(251,241,224,.6)}
#abox{position:fixed;z-index:28;right:max(14px,env(safe-area-inset-right));bottom:calc(22px + env(safe-area-inset-bottom));width:190px;height:190px;display:none;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
#abox button{position:absolute;width:60px;height:60px;border-radius:50%;border:1px solid #5a609a;background:rgba(43,45,82,.74);color:#fbf1e0;padding:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;font:600 24px/1 system-ui,sans-serif;touch-action:manipulation;-webkit-tap-highlight-color:transparent;cursor:pointer}
#abox button small{font:600 9.5px/1.1 system-ui,sans-serif;margin-top:2px;opacity:.85;letter-spacing:.02em}
#abox button.press{background:rgba(255,199,122,.5)}
#abox button.off{opacity:.42}
#abox button.hint{box-shadow:0 0 0 3px rgba(255,199,122,.6)}
#abx{left:65px;top:130px}#abo{left:130px;top:65px}#abs{left:0;top:65px}#abt{left:65px;top:0}
body.ctl-std #look,body.ctl-std #cam,body.ctl-std #lantB,body.ctl-std #stillBtn{display:none!important}
body.photo #abox,body.photo #joy{display:none!important}
#pzMoreB,#more.start{letter-spacing:.04em}
`;
document.head.appendChild(st);

/* ---- joystick flotante ---- */
const joy=document.createElement('div');joy.id='joy';joy.innerHTML='<i></i>';document.body.appendChild(joy);
CTL.ui={
  joy(x,y,v){joy.style.display='block';joy.style.left=x+'px';joy.style.top=y+'px';joy.firstChild.style.transform='translateX('+Math.round(v*34)+'px)'},
  joyOff(){joy.style.display='none'}
};

/* ---- botones ✕ ○ □ △ ---- */
const box=document.createElement('div');box.id='abox';box.setAttribute('role','group');box.setAttribute('aria-label','Acciones');
const ACT={
  x:()=>{const b=$('lantB');if(b)b.click()},
  o:()=>{const b=$('stillBtn');if(b)b.click()},
  s:()=>{const b=$('photoB');if(b)b.click()},
  t:()=>{const b=$('cam');if(b)b.click()}
};
const mk=(id,g,lab,act,aria)=>{
  const b=document.createElement('button');b.type='button';b.id=id;b.setAttribute('aria-label',aria);b.title=aria;b.innerHTML=g+'<small></small>';b._lab=lab;
  b.addEventListener('pointerdown',e=>{e.preventDefault();b.classList.add('press');try{UX.hap(8)}catch(x){}if(S.started)act()});
  ['pointerup','pointercancel','pointerleave'].forEach(ev=>b.addEventListener(ev,()=>b.classList.remove('press')));
  b.addEventListener('contextmenu',e=>e.preventDefault());
  b.addEventListener('keydown',e=>{if(e.code==='Enter'||e.code==='Space'){e.preventDefault();if(S.started)act()}});
  box.appendChild(b);return b};
const bx=mk('abx','✕','Soltar',ACT.x,'Soltar linterna'),bo=mk('abo','○','Quieto',ACT.o,'Quedarme quieto'),bs=mk('abs','□','Foto',ACT.s,'Foto'),bt=mk('abt','△','Vista',ACT.t,'Cambiar vista');
document.body.appendChild(box);
const setLab=(b,t)=>{const sm=b.querySelector('small');const v=tr(t);if(sm.textContent!==v)sm.textContent=v};

/* ---- ajuste de interfaz según esquema ---- */
function textFix(){
  const h=$('hint'),how=$('how'),how2=$('how2'),std=CTL.scheme==='std';
  if(h){const t=std?'La corriente te lleva · desliza a la izquierda para dirigir y a la derecha para mirar':'La corriente te lleva · mantén presionado y desliza a los lados para dirigir';if(h.dataset.k!==t){h.dataset.k=t;h.textContent=tr(t)}}
  if(how){if(std){how.innerHTML='<b></b> ';how.firstChild.textContent=tr('Dirigir:');how.appendChild(document.createTextNode(tr('desliza el dedo por la mitad izquierda de la pantalla (o usa un mando, o A / D).')))}
    else{how.innerHTML='<b></b> ';how.firstChild.textContent=tr('Dirigir:');how.appendChild(document.createTextNode(tr('mantén presionado y mueve el dedo o el ratón a los lados (o usa las flechas A / D).')))}}
  if(how2){how2.hidden=!std;if(std){how2.innerHTML='<b></b> ';how2.firstChild.textContent=tr('Mirar:');how2.appendChild(document.createTextNode(tr('desliza por la mitad derecha. Botones: ✕ soltar linterna, ○ quedarme quieto, □ foto, △ cambiar vista, Start para el menú.')))}}
}
function layout(){
  const std=CTL.scheme==='std';document.body.classList.toggle('ctl-std',std);
  const more=$('more'),menu=$('menu'),pz=$('pauseB'),ph=$('photoB'),snd=$('snd');
  if(more){const want=std?'Start':'Más';if(more.dataset.k!==want){more.dataset.k=want;more.textContent=tr(want);more.classList.toggle('start',std)}}
  if(menu&&pz&&ph&&snd){
    if(std){if(pz.parentNode!==menu)menu.insertBefore(pz,menu.firstChild);if(ph.parentNode!==menu)menu.insertBefore(ph,snd)}
    else{const hr=$('hr'),cam=$('cam');if(pz.parentNode===menu&&hr)hr.insertBefore(pz,cam);if(ph.parentNode===menu&&hr)hr.insertBefore(ph,cam)}
  }
  textFix();
}
CTL.onScheme=layout;

/* ---- estado visible de los botones (se actualiza 4 veces por segundo) ---- */
setInterval(()=>{
  layout();
  const std=CTL.scheme==='std';
  box.style.display=(std&&S.started&&!document.body.classList.contains('photo'))?'block':'none';
  if(!std)return;
  const lb=$('lantB'),n=lb?+(/\((\d+)\)/.exec(lb.textContent)||[0,0])[1]:0;
  bx.classList.toggle('off',n<=0);setLab(bx,n>0?tr('Soltar')+' '+n:'Soltar');
  setLab(bs,'Foto');setLab(bt,'Vista');
  const sb=$('stillBtn'),on=sb&&sb.textContent.trim()===tr('Seguir el río');setLab(bo,on?'Seguir':'Quieto');
  const pb=$('padBox');let lift=22;if(pb&&pb.style.display!=='none'&&pb.offsetHeight)lift=pb.offsetHeight+34;box.style.bottom='calc('+lift+'px + env(safe-area-inset-bottom))';
},250);

/* ---- teclado ---- */
addEventListener('keydown',e=>{
  if(!S.started||e.repeat||e.ctrlKey||e.metaKey||e.altKey)return;
  const t=e.target&&e.target.tagName;if(t==='INPUT'||t==='SELECT'||t==='TEXTAREA')return;
  if(e.code==='KeyX')ACT.x();else if(e.code==='KeyQ')ACT.o();else if(e.code==='KeyF')ACT.s();else if(e.code==='Enter'&&t!=='BUTTON'){const m=$('more');if(m)m.click()}
});

/* ---- mando (Gamepad API, mapa estándar): sticks, ✕ ○ □ △, Start/Select ---- */
let prev=[];
const dz=v=>Math.abs(v)<.18?0:(v-Math.sign(v)*.18)/.82;
export function pollPad(dt){
  const gl=navigator.getGamepads?navigator.getGamepads():[];let g=null;
  for(const x of gl){if(x&&x.connected){g=x;break}}
  if(!g){if(IN.pad)IN.pad=0;prev=[];return}
  const b=i=>!!(g.buttons[i]&&g.buttons[i].pressed);
  const edge=(i,fn)=>{const n=b(i);if(n&&!prev[i])fn();prev[i]=n};
  if(!S.started){IN.pad=0;edge(0,()=>{const go=$('go');if(go&&!$('start').hidden)go.click()});edge(9,()=>{const go=$('go');if(go&&!$('start').hidden)go.click()});return}
  if(window.PZ&&PZ.on){IN.pad=0;edge(9,()=>PZ.set(false));edge(1,()=>PZ.set(false));return}
  let st=dz(g.axes[0]||0);if(b(14))st=-1;else if(b(15))st=1;IN.pad=S.X&&S.X.photo?0:st;
  const ax=dz(g.axes[2]||0),ay=dz(g.axes[3]||0);
  if(ax||ay){LOOK.yaw-=ax*2.4*dt;LOOK.pitch=clamp(LOOK.pitch-ay*1.5*dt,-1.15,1.15);LOOK.t=0;LOOK.vy=0}
  edge(0,ACT.x);edge(1,ACT.o);edge(2,ACT.s);edge(3,ACT.t);
  edge(9,()=>{const m=$('more');if(m)m.click()});edge(8,()=>{const p=$('pauseB');if(p)p.click()});
}
window.__ctl={CTL,setScheme};
layout();
