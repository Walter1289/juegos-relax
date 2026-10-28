/* Ofrenda: al cerrar cada vuelta el lanchero elige una palabra (siempre opcional, solo en este dispositivo).
   El panel cubre la pantalla con un velo suave, así la canoa queda quieta mientras decide (nada avanza sin su control). */
import {lang} from '../i18n.js';
import {acto,ACTOS,PALABRAS,ofrendas,addOfrenda,setOfrendaPend,cartaUmbral,primeraFrase} from '../lightmsg.js';
import {toast} from './hud.js';
const L=o=>o[lang()]||o.es;
const W=k=>L(PALABRAS[k]||{es:k});
const Q=[
  {es:'¿Qué dejas atrás al empezar?',en:'What do you leave behind as you set out?',ja:'歩き出すにあたり、何を置いていきますか。'},
  {es:'¿Qué quieres guardar?',en:'What do you want to keep?',ja:'何を大切にしまっておきますか。'},
  null,
  {es:'¿Qué llevas a casa?',en:'What do you take home?',ja:'家へ何を持ち帰りますか。'}];
function opciones(cer){
  if(cer===1)return['prisa','ruido','cansancio'];
  if(cer===2)return['calma','compania','curiosidad'];
  if(cer===3)return['si','cambio','yano'];
  const prev=[];ofrendas().forEach(x=>{if(x[0]<=2&&PALABRAS[x[1]]&&!prev.includes(x[1]))prev.push(x[1])});
  for(const d of['calma','compania','curiosidad'])if(prev.length<3&&!prev.includes(d))prev.push(d);
  return prev.slice(0,3)}
let open=false;
export function openOfrenda(cer){
  if(open||cer<1||cer>4)return;open=true;
  const a=ACTOS[Math.min(3,cer-1)];
  let q=Q[cer-1];
  if(cer===3){const w=(ofrendas().find(x=>x[0]===1)||[])[1];
    q=w?{es:'Dejaste «'+W(w)+'» en la primera vuelta. ¿Sigue siendo cierto?',en:'You left “'+PALABRAS[w].en+'” on the first lap. Is it still true?',ja:'最初の一周で「'+PALABRAS[w].ja+'」を置いていきました。今もそうですか。'}
      :{es:'Esto es lo que dejaste atrás al empezar. ¿Sigue siendo cierto?',en:'This is what you left behind when you set out. Is it still true?',ja:'歩き出すときに置いてきたものです。今もそうですか。'}}
  const ov=document.createElement('div');ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');
  ov.style.cssText='position:fixed;inset:0;z-index:60;display:grid;place-items:center;padding:20px;background:rgba(20,22,48,.62);font-family:system-ui,-apple-system,sans-serif;color:#fbf1e0';
  const card=document.createElement('div');card.style.cssText='max-width:440px;width:100%;display:flex;flex-direction:column;gap:14px;align-items:center;text-align:center;padding:22px 20px;border-radius:18px;background:rgba(43,45,82,.93);border:1px solid #5a609a;box-shadow:0 10px 40px rgba(0,0,0,.35)';
  const h=document.createElement('div');h.style.cssText='font:600 .8rem system-ui;letter-spacing:.08em;color:#ffc77a';h.textContent=a.k+' · '+L(a)+' · '+cer+' / 4';
  const t=document.createElement('div');t.style.cssText='font:600 1.12rem/1.4 system-ui';t.textContent=L(q);
  const row=document.createElement('div');row.style.cssText='display:flex;gap:10px;flex-wrap:wrap;justify-content:center';
  const fin=w=>{if(w)addOfrenda(cer,w);setOfrendaPend(0);ov.remove();open=false;
    const c=primeraFrase(cartaUmbral(cer));if(c)setTimeout(()=>toast(L({es:'Mara: «'+c+'»',en:'Mara: “'+c+'”',ja:'マラ：「'+c+'」'})),900)};
  const btn=(txt,f,soft)=>{const b=document.createElement('button');b.type='button';b.textContent=txt;b.style.cssText='min-height:46px;padding:10px 18px;border-radius:99px;border:1px solid '+(soft?'#5a609a':'#ffc77a')+';background:'+(soft?'transparent':'rgba(255,199,122,.16)')+';color:#fbf1e0;font:600 .95rem system-ui;cursor:pointer';b.onclick=f;return b};
  opciones(cer).forEach(k=>row.appendChild(btn(W(k),()=>fin(k))));
  const skip=btn(L({es:'Seguir sin elegir',en:'Continue without choosing',ja:'選ばずに進む'}),()=>fin(null),true);skip.style.fontSize='.85rem';skip.style.opacity='.85';
  const note=document.createElement('div');note.style.cssText='font:500 .74rem system-ui;opacity:.6';note.textContent=L({es:'Se queda solo en este dispositivo.',en:'Stays only on this device.',ja:'この端末にだけ保存されます。'});
  card.append(h,t,row,skip,note);ov.appendChild(card);document.body.appendChild(ov);
  addEventListener('keydown',function esc(e){if(!open){removeEventListener('keydown',esc);return}if(e.code==='Escape'){e.stopImmediatePropagation();fin(null);removeEventListener('keydown',esc)}},true);
  try{row.firstChild.focus()}catch(e){}
}
