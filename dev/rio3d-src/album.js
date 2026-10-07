/* Cuaderno del río: anotaciones de lo que se ve por primera vez (fauna, flores, momentos). Se llena solo, sin metas; vale igual en Río 2D y 3D.
   Cada anotación nueva da un recuerdo para la cabaña (se cobra al abrir el diario de la cabaña). */
import {dayLog,dayTotal,DAYS,addDayTexts} from './daylamp.js';
const AK='rio-album';
export const ALB=[ // [id, nombre es, en, ja, descripción es, en, ja]
['koi','Carpa koi','Koi carp','錦鯉','Se acercan despacio y nadan junto a la canoa, como si te conocieran.','They drift close and swim beside the canoe as if they knew you.','ゆっくり近づいて、カヌーのそばを泳ぎます。まるで知り合いのように。'],
['pato','Pato del río','River duck','川のカモ','Decide acompañarte un rato y luego sigue su camino.','Chooses to keep you company for a while, then goes its own way.','しばらく寄りそってくれて、やがて自分の道へ。'],
['garza','Garza blanca','White heron','シラサギ','Pesca sin prisa. Alza el vuelo solo cuando pasas muy cerca.','Fishes without hurry. Takes flight only when you pass very close.','急がず魚を待ちます。とても近くを通ると飛び立ちます。'],
['libelula','Libélula','Dragonfly','トンボ','Se posa un instante en la proa y se va, ligera como un pensamiento.','Lands on the bow for an instant and leaves, light as a thought.','船首にそっと止まって、考えごとのように軽く去ります。'],
['loto','Flor de loto','Lotus flower','蓮の花','Abre al anochecer en los estanques tranquilos.','Opens at dusk in the quiet ponds.','静かな池で夕暮れに開きます。'],
['festival','Festival de linternas','Lantern festival','ちょうちん祭り','La aldea enciende farolillos para quien llega de noche.','The village lights lanterns for whoever arrives at night.','夜に着いた人のために、村がちょうちんをともします。'],
];
let cache=null;const get=()=>{if(cache)return cache;try{cache=JSON.parse(localStorage.getItem(AK)||'{}')||{}}catch(e){cache={}}return cache};
export const albumSeen=get;
export function addAlbumTexts(ux){try{addDayTexts(ux)}catch(e){}ux.add(ALB.map(a=>[a[1],a[2],a[3]]));ux.add(ALB.map(a=>[a[4],a[5],a[6]]));ux.add([['Cuaderno del río','River notebook','川のノート'],['Aún no lo has visto','You have not seen this yet','まだ見ていません'],['Nueva anotación en el cuaderno del río','New entry in the river notebook','川のノートに新しい記録'],['Se llena solo, a su ritmo. No hay prisa.','It fills by itself, at its own pace. No rush.','ゆっくり、ひとりでに埋まっていきます。'],['Cerrar','Close','閉じる'],['Anotado: ','Noted: ','記録: '],['anotaciones','entries','件']])}
export function albumSee(id){
  const a=get();if(a[id])return;a[id]=Date.now();cache=a;try{localStorage.setItem(AK,JSON.stringify(a))}catch(e){}
  const e=ALB.find(x=>x[0]===id);try{window.UX&&UX.say&&UX.say(UX.tr('Anotado: ')+UX.tr(e[1]))}catch(x){}
}
export const albumCount=()=>Object.keys(get()).length;
/* recuerdos pendientes de cobrar en la cabaña: state.cnt.alb = cuántas ya se cobraron */
export function claimAlbum(state){state.cnt=state.cnt||{};const n=Math.max(0,albumCount()-(state.cnt.alb||0));if(n)state.cnt.alb=albumCount();return n}
export function openAlbum(tr){
  tr=tr||(window.UX?UX.tr:(s=>s));const seen=get();
  const ov=document.createElement('div');ov.style.cssText='position:fixed;inset:0;z-index:80;display:grid;place-items:center;background:rgba(14,16,36,.88);padding:12px';
  const b=document.createElement('div');b.style.cssText='background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(92vw,460px);max-height:82vh;overflow:auto;font:15px/1.45 system-ui';
  const h=document.createElement('h2');h.style.cssText='margin:0 0 4px;font:600 1.15rem system-ui';h.textContent=tr('Cuaderno del río');
  const s=document.createElement('div');s.style.cssText='opacity:.65;font-size:.8rem;margin-bottom:12px';s.textContent=tr('Se llena solo, a su ritmo. No hay prisa.');
  b.append(h,s);
  ALB.forEach(a=>{const k=!!seen[a[0]],p=document.createElement('div');p.style.cssText='margin:0 0 12px;padding:10px 12px;border-radius:12px;background:'+(k?'rgba(255,233,184,.10)':'rgba(255,255,255,.04)')+';'+(k?'':'opacity:.55');
    const n=document.createElement('div');n.style.cssText='font-weight:600';n.textContent=(k?'✦ ':'· ')+(k?tr(a[1]):'?');const d=document.createElement('div');d.style.cssText='font-size:.88em;opacity:.85';d.textContent=k?tr(a[4]):tr('Aún no lo has visto');p.append(n,d);b.appendChild(p)});
  {const h2=document.createElement('div');h2.style.cssText='font-weight:600;margin:14px 0 6px';h2.textContent=tr('Farolillos del día')+' · '+dayTotal();b.appendChild(h2);const lg=dayLog().slice().reverse();
    if(!lg.length){const e=document.createElement('div');e.style.cssText='opacity:.55;font-size:.88em;margin-bottom:12px';e.textContent=tr('Aún no recoges ninguno');b.appendChild(e)}
    lg.forEach(x=>{const p=document.createElement('div');p.style.cssText='margin:0 0 8px;padding:8px 12px;border-radius:12px;background:rgba(255,233,184,.08);font-size:.88em';p.textContent='🏮 '+tr(DAYS[x[1]][0]);b.appendChild(p)})}
  const c=document.createElement('button');c.type='button';c.textContent=tr('Cerrar');c.style.cssText='min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer';c.onclick=()=>ov.remove();b.appendChild(c);ov.appendChild(b);ov.onclick=e=>{if(e.target===ov)ov.remove()};document.body.appendChild(ov);
}
