/* steerpad.js — botones en pantalla para dirigir la canoa (alternativa a arrastrar; útil con un solo dedo, interruptor o poca precisión).
   Opcional y apagado por defecto: clave 'ux-pad'. El juego aporta set(nombre,bool) con nombre 'l' | 'r' | 'p' (remar) y started(). */
const K='ux-pad';
const g=()=>{try{return localStorage.getItem(K)==='1'}catch(e){return false}};
const T=(es,en,ja)=>{try{return UX.tr(es)}catch(e){return es}};
export const padOn=g;
export function addPadTexts(ux){ux.add([['Girar a la izquierda','Turn left','左へ曲がる'],['Girar a la derecha','Turn right','右へ曲がる'],['Remar','Paddle','こぐ'],['Dirección','Steering','操作'],
  ['Botones de dirección: sí','Steering buttons: on','操作ボタン: オン'],['Botones de dirección: no','Steering buttons: off','操作ボタン: オフ'],['Botones de dirección','Steering buttons','操作ボタン'],['Alternativa a arrastrar','An alternative to dragging','ドラッグの代わり']])}
let box=null,cfg=null;const subs=[];
function place(){
  let b=18;try{if(cfg.anchor){const r=cfg.anchor().getBoundingClientRect();b=Math.max(10,innerHeight-r.bottom+12)}else b=18+(cfg.lift||0)}catch(e){}
  box.style.bottom='calc('+Math.round(b)+'px + env(safe-area-inset-bottom))';
}
function show(){if(box){box.style.display=(g()&&cfg.started())?'flex':'none';place()}}
export function setPad(on){try{localStorage.setItem(K,on?'1':'0')}catch(e){}show();subs.forEach(f=>f())}
export function onPadChange(f){subs.push(f)}
export function padButton(cls){
  const b=document.createElement('button');b.type='button';if(cls)b.className=cls;
  const t=()=>{b.textContent=T(g()?'Botones de dirección: sí':'Botones de dirección: no')};t();
  b.onclick=()=>{setPad(!g());t()};onPadChange(t);return b;
}
export function initPad(c){
  cfg=c;if(box)return;
  box=document.createElement('div');box.id='padBox';box.setAttribute('role','group');box.setAttribute('aria-label',T('Dirección'));
  box.style.cssText='position:fixed;right:max(16px,env(safe-area-inset-right));bottom:18px;display:none;gap:14px;z-index:30;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none';
  const down=new Set();
  const mk=(name,sym,label,extra)=>{
    const b=document.createElement('button');b.type='button';b.textContent=sym;b.setAttribute('aria-label',T(label));b.title=T(label);
    b.style.cssText='width:64px;height:64px;border-radius:50%;border:1px solid #5a609a;background:rgba(43,45,82,.72);color:#fbf1e0;font:600 26px system-ui,sans-serif;padding:0;touch-action:none;-webkit-tap-highlight-color:transparent;cursor:pointer';
    const on=v=>{[name].concat(extra||[]).forEach(n=>cfg.set(n,v));b.style.background=v?'rgba(255,199,122,.45)':'rgba(43,45,82,.72)';if(v)down.add(b);else down.delete(b)};
    b.addEventListener('pointerdown',e=>{e.preventDefault();try{b.setPointerCapture(e.pointerId)}catch(x){}if(cfg.onPress)cfg.onPress();on(true)});
    ['pointerup','pointercancel','lostpointercapture'].forEach(ev=>b.addEventListener(ev,()=>on(false)));
    b.addEventListener('contextmenu',e=>e.preventDefault());
    b.addEventListener('keydown',e=>{if(e.code==='Space'||e.code==='Enter'){e.preventDefault();on(true)}});
    b.addEventListener('keyup',e=>{if(e.code==='Space'||e.code==='Enter')on(false)});
    b.addEventListener('blur',()=>on(false));
    b._rel=()=>on(false);return b;
  };
  const l=mk('l','◀','Girar a la izquierda',cfg.steerPaddles?['p']:null),r=mk('r','▶','Girar a la derecha',cfg.steerPaddles?['p']:null);
  if(cfg.paddle){const p=mk('p','≋','Remar');box.append(l,p,r)}else box.append(l,r);
  addEventListener('blur',()=>box.querySelectorAll('button').forEach(b=>b._rel&&b._rel()));
  document.body.appendChild(box);setInterval(show,400);show();
}
