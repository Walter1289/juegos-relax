/* sign.js — el cartel de la entrada: botón y toque para acercarse y leerlo; avisa cuando el Río descifró una frase nueva. */
import * as THREE from 'three';
import {canvas,cam,RT} from './core.js';
import {C} from './camera.js';
import {lang} from '../i18n.js';
import {lines,found,luces} from '../lightmsg.js';
export const SIGN={g:null};
const T=a=>a[lang()]||a.es;
let panel=null,btn=null;
const SEEN='tomo-cartel-n';
const seen=()=>{try{return +localStorage.getItem(SEEN)||0}catch(e){return 0}};
const setSeen=n=>{try{localStorage.setItem(SEEN,String(n))}catch(e){}};
export const signNew=()=>found()>seen();
function focus(){const g=SIGN.g;if(!g)return;C.gx=g.position.x;C.gy=g.position.y+2;C.gz=g.position.z;C.tr=Math.min(C.tr,12);C.focusT=4.5;C.tth=-.35;C.tph=.12}
function open(){
  if(!panel)return;focus();setSeen(found());if(btn)btn.style.outline='none';
  const n=found(),L=lines(),done=n>=8;
  panel.querySelector('.lines').innerHTML=L.map(t=>'<div>'+t+'</div>').join('');
  panel.querySelector('.meta').textContent=T({es:'Fragmentos descifrados: '+n+' / 8 · luces del río: '+luces(),en:'Fragments deciphered: '+n+' / 8 · river lights: '+luces(),ja:'解読した断片：'+n+' / 8 ・川の灯：'+luces()});
  panel.querySelector('.hint').textContent=done?T({es:'El cartel está completo. Algo despertó en el jardín del acantilado.',en:'The sign is complete. Something woke in the cliff garden.',ja:'看板が完成しました。崖の庭で何かが目覚めました。'}):T({es:'Cada 4 linternas que recoges en el Río descifran un fragmento. Sigue el agua y deja que te lleve.',en:'Every 4 lanterns you collect in the River deciphers a fragment. Follow the water and let it carry you.',ja:'川でランタンを4つ集めるごとに断片がひとつ解読されます。水の流れに身をまかせましょう。'});
  panel.style.display='flex';
}
export function initSign(toast){
  btn=document.createElement('button');btn.type='button';btn.textContent=T({es:'Cartel',en:'Sign',ja:'看板'});
  btn.style.cssText='position:fixed;right:max(10px,env(safe-area-inset-right));top:216px;z-index:6;min-height:44px;padding:8px 14px;border-radius:99px;border:1px solid var(--line);background:var(--panel);color:var(--ink);font:600 .85rem system-ui;cursor:pointer;touch-action:manipulation';
  btn.onclick=e=>{e.stopPropagation();open()};document.body.appendChild(btn);
  panel=document.createElement('div');panel.style.cssText='position:fixed;inset:0;z-index:30;display:none;align-items:center;justify-content:center;background:rgba(30,20,28,.55);padding:20px';
  panel.innerHTML='<div style="max-width:420px;width:100%;background:#5a3d2e;border:6px solid #3b261b;border-radius:10px;padding:22px 20px;color:#f6e3b4;text-align:center;box-shadow:0 10px 40px rgba(0,0,0,.45)"><div class="lines" style="font:italic 600 1.45rem/1.5 Georgia,serif;margin-bottom:14px"></div><div class="meta" style="font:600 .78rem system-ui;opacity:.8;margin-bottom:6px"></div><div class="hint" style="font:.82rem/1.4 system-ui;opacity:.85;margin-bottom:14px"></div><button type="button" class="x" style="min-height:44px;padding:8px 22px;border-radius:99px;border:1px solid #b8996a;background:#3b261b;color:#f6e3b4;font:600 .9rem system-ui;cursor:pointer"></button></div>';
  panel.querySelector('.x').textContent=T({es:'Cerrar',en:'Close',ja:'閉じる'});
  panel.onclick=e=>{if(e.target===panel||e.target.classList.contains('x'))panel.style.display='none'};
  document.body.appendChild(panel);
  /* un toque sobre el cartel en la escena también lo abre */
  const ray=new THREE.Raycaster(),ndc=new THREE.Vector2();let dn=null;
  canvas.addEventListener('pointerdown',e=>{dn={x:e.clientX,y:e.clientY,t:performance.now()}});
  canvas.addEventListener('pointerup',e=>{if(!dn||!SIGN.g||!RT.started)return;const mv=Math.hypot(e.clientX-dn.x,e.clientY-dn.y),dt=performance.now()-dn.t;dn=null;if(mv>8||dt>450)return;
    const r=canvas.getBoundingClientRect();ndc.set((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1);ray.setFromCamera(ndc,cam);
    if(ray.intersectObject(SIGN.g,true).length)open()});
  /* al empezar: avisa si hay frases nuevas (sin mover la cámara); resalta el botón con un contorno fijo */
  return ()=>{if(signNew()){btn.style.outline='2px solid #ffc27a';btn.style.outlineOffset='2px';setTimeout(()=>toast(T({es:'El cartel de la entrada descifró algo nuevo · toca «Cartel» para leerlo',en:'The entrance sign deciphered something new · tap “Sign” to read it',ja:'入口の看板に新しい言葉が現れました ・「看板」をタップして読みましょう'})),3200)}
    else if(luces()===0)setTimeout(()=>toast(T({es:'Junto a la entrada hay un cartel. Toca «Cartel» para leerlo',en:'There is a sign by the entrance. Tap “Sign” to read it',ja:'入口のそばに看板があります。「看板」をタップして読みましょう'})),3600)}
}
