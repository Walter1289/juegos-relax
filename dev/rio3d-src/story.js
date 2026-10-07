import {addZenTexts} from './zen.js';
import {addAlbumTexts,claimAlbum,albumCount,openAlbum,ALB} from './album.js';
import {TASK_TXT,tasksDone,addTaskTexts} from './tasks.js';
/* Cartas de Mara: una por cada lugar del río. Se abren en el diario de la Cabaña cuando el jugador descubre ese lugar en Río de Linternas (2D o 3D). */
export const LKEY='rio-found-types';
const L=[ // [lugar(es), es, en, ja]
['Puente de madera','Dejé la cabaña al amanecer. El primer puente cruje igual que mi escalera: me dio confianza.','I left the cabin at dawn. The first bridge creaks just like my stairs, and that made me brave.','夜明けに小屋を出ました。最初の橋は私の階段と同じようにきしんで、勇気をくれました。'],
['Torii sobre el agua','Pasé bajo un portal que flota. Pedí un deseo en voz baja: que la cabaña nunca se quede sola.','I drifted under a gate that floats. I whispered a wish: that the cabin is never left alone.','水に浮かぶ門をくぐり、小さな声で願いました。小屋がひとりぼっちになりませんように。'],
['Aldea de farolillos','Una aldea entera enciende farolillos para recibir a quien llega. Por primera vez no me sentí de paso.','A whole village lights lanterns for whoever arrives. For once I did not feel like I was just passing through.','村じゅうが、訪れる人のために提灯をともします。初めて「通りすがり」と感じませんでした。'],
['Jardín de sakura','Los cerezos sueltan pétalos como si el aire tuviera memoria. Guardé uno para ti, entre las páginas del mapa.','The cherry trees let go of petals as if the air had a memory. I saved one for you between the map pages.','桜は、空気が記憶を持っているかのように花びらを散らします。地図の間に一枚、あなたのために挟みました。'],
['Cañaveral de las garzas','Las garzas pescan sin prisa. Aprendí de ellas que esperar también es avanzar.','The herons fish without hurry. They taught me that waiting is also a way of moving forward.','サギは急がず魚を待ちます。待つことも前に進むことだと教わりました。'],
['Templo de la campana','La campana suena una vez y el río entero se acomoda. Quise que la oyeras desde tu balcón.','The bell rings once and the whole river settles. I wanted you to hear it from your balcony.','鐘がひとつ鳴ると、川ぜんたいが静まります。あなたのバルコニーからも聞こえたらいいのに。'],
['Cascadita de musgo','Una cascada pequeñita, verde de tan callada. Me quedé una tarde entera y no extrañé nada.','A tiny waterfall, green with quiet. I stayed a whole afternoon and missed nothing.','静けさで緑に染まった小さな滝。午後いっぱい過ごして、何も恋しくなりませんでした。'],
['Casa de té','Me sirvieron té sin preguntar nada. Dejé encima de la mesa tu receta, por si quieres hacerla en la cabaña.','They served me tea without asking a thing. I left your recipe on the table, in case you want to make it at the cabin.','何も聞かずにお茶を出してくれました。小屋でも作れるよう、レシピを机に残しました。'],
['Bosque de bambú','El bambú canta cuando sopla el viento. Pensé en tu campanilla y sonreí sola.','The bamboo sings when the wind blows. I thought of your wind chime and smiled to myself.','風が吹くと竹が歌います。あなたの風鈴を思い出して、ひとりで微笑みました。'],
['Estanque de lotos','Un estanque de lotos que se abre de noche. Todo lo que empieza despacio merece su tiempo.','A lotus pond that opens at night. Everything that begins slowly deserves its time.','夜に開く蓮の池。ゆっくり始まるものには、それだけの時間が必要です。'],
['Castillo de la Garza Blanca','Llegué. El castillo brilla igual que las luces de tu terraza. No hacía falta llegar tan lejos para entenderlo: mi casa siempre fue la cabaña. Cuídala a tu gusto; ya es tuya.','I made it. The castle glows just like the lights on your deck. I did not need to come this far to understand it: my home was always the cabin. Keep it your way; it is yours now.','たどり着きました。城は、あなたのテラスの灯りと同じように輝いています。ここまで来なくても分かったはずです。私の家はいつも小屋でした。好きなように守ってください。もうあなたのものです。'],
];
export const LM_ES=L.map(x=>x[0]);
export const LETTERS=L.map(x=>x[1]);
export const foundTypes=()=>{const s=new Set();for(const k of ['rio3d-found',LKEY]){try{JSON.parse(localStorage.getItem(k)||'[]').forEach(i=>s.add(i))}catch(e){}}return s};
export function addStoryTexts(ux){addAlbumTexts(ux);addTaskTexts(ux);addMileTexts(ux);addZenTexts(ux);
  ux.add(L.map(x=>[x[1],x[2],x[3]]));
  ux.add([['Puente de madera','Wooden bridge','木の橋'],['Torii sobre el agua','Torii over the water','水上の鳥居'],['Aldea de farolillos','Lantern village','ちょうちんの村'],['Jardín de sakura','Sakura garden','桜の庭'],['Cañaveral de las garzas','Heron reedbed','サギの葦原'],['Templo de la campana','Bell temple','鐘の寺'],['Cascadita de musgo','Mossy waterfall','苔の小さな滝'],['Casa de té','Tea house','茶屋'],['Bosque de bambú','Bamboo forest','竹林'],['Estanque de lotos','Lotus pond','蓮の池'],['Castillo de la Garza Blanca','White Heron Castle','白鷺城'],['Cartas de Mara','Mara’s letters','マラの手紙'],['Carta sin abrir','Unopened letter','未開封の手紙'],['Descúbrelo en el río para leerla','Discover it on the river to read it','川で見つけると読めます'],['Abrir carta','Open letter','手紙を開く'],['Notas de visitantes','Visitor notes','訪問者のメモ'],['Mara te dejó una carta','Mara left you a letter','マラが手紙を残しました'],['Carta de Mara','Letter from Mara','マラの手紙'],['Una carta nueva te espera en el diario','A new letter waits in the diary','日記に新しい手紙が届いています']]);
  ux.rx([[/^Carta sin abrir · (.+)$/,(m,ix,tr)=>tr('Carta sin abrir')+' · '+tr(m[1])]]);
}
/* Cada carta se abre cuando se cumplen dos cosas: el lugar fue descubierto en el río Y la cabaña alcanzó un cambio (el desarrollo de la historia sigue la remodelación). */
const sf=s=>Object.values(s.decor||{}).filter(Boolean).length,oc=s=>Object.keys(s.own||{}).length,nn=s=>(s.notes||[]).length,ct=s=>s.cnt||{};
const MILE=[ // [condición, pista es, en, ja]
[s=>!!(s.repaired&&s.repaired.techo),'Termina de reparar el techo','Finish repairing the roof','屋根の修理をおわらせる'],
[s=>oc(s)>=1,'Coloca tu primer objeto','Place your first object','最初の飾りを置く'],
[s=>nn(s)>=1,'Recibe a tu primer visitante','Welcome your first visitor','最初の訪問者を迎える'],
[s=>(ct(s).te||0)>=1,'Prepara un té','Make a cup of tea','お茶をいれる'],
[s=>sf(s)>=2,'Decora dos lugares de la cabaña','Decorate two spots in the cabin','小屋の2か所を飾る'],
[s=>(ct(s).rg||0)>=1,'Riega las plantas','Water the plants','植物に水をやる'],
[s=>nn(s)>=3,'Escucha las historias de tres visitas','Hear the stories of three visits','3回の訪問者の話を聞く'],
[s=>sf(s)>=4,'Decora cuatro lugares','Decorate four spots','4か所を飾る'],
[s=>oc(s)>=5,'Reúne cinco objetos','Gather five objects','飾りを5つ集める'],
[s=>nn(s)>=6,'Lee seis notas de los visitantes','Read six visitor notes','訪問者のメモを6つ読む'],
[s=>sf(s)>=6,'Deja decorados todos los lugares','Leave every spot decorated','すべての場所を飾る'],
];
export const letterOpen=(s,i)=>!!((s.ltr||{})[i])||(foundTypes().has(i)&&MILE[i][0](s));
export function addMileTexts(ux){ux.add(MILE.map(m=>[m[1],m[2],m[3]]));ux.add([['Descúbrelo en el río','Discover it on the river','川で見つけましょう'],['Pista','Hint','ヒント'],['Se abrió una carta nueva en el diario','A new letter opened in the diary','日記に新しい手紙が開きました']])}
/* Sección de cartas dentro del diario. tr: traductor del juego, addMem: suma recuerdos, save: guarda. Devuelve cuántas cartas hay nuevas. */
export function lettersSection(box,state,tr,addMem,save){
  const f=foundTypes(),td=tasksDone();state.ltr=state.ltr||{};let fresh=0;
  const h=document.createElement('h3');h.style.cssText='margin:12px 0 8px;font:600 .95rem system-ui';h.textContent=tr('Cartas de Mara');box.appendChild(h);
  LETTERS.forEach((t,i)=>{const p=document.createElement('p');p.style.margin='0 0 10px';
    const sp=(x)=>{const e=document.createElement('span');e.textContent=x;p.appendChild(e)};sp('✉ ');
    if(letterOpen(state,i)){if(!state.ltr[i]){state.ltr[i]=1;fresh++}sp(tr(t));p.style.color='#ffe9b8';
      if(td[i]&&TASK_TXT(i)){const m=document.createElement('div');m.style.cssText='margin:6px 0 0 14px;font-size:.88em;color:#cfe8ff';const a=document.createElement('span');a.textContent='✦ ';const b=document.createElement('span');b.textContent=tr(TASK_TXT(i)[3]);m.append(a,b);p.appendChild(m);if(state.ltr[i]<2){state.ltr[i]=2;fresh++}}}
    else{sp(tr('Carta sin abrir'));sp(' · ');sp(tr(LM_ES[i]));p.style.opacity='.6';const hn=document.createElement('div');hn.style.cssText='margin:4px 0 0 14px;font-size:.82em;color:#cfd6ff';const a=document.createElement('span');a.textContent='✧ ';const b=document.createElement('span');b.textContent=tr(f.has(i)?MILE[i][1]:'Descúbrelo en el río');hn.append(a,b);p.appendChild(hn)}
    box.appendChild(p)});
  const na=claimAlbum(state);if(na){addMem(2*na);fresh+=0;save()}
  const ab=document.createElement('button');ab.type='button';ab.textContent=tr('Cuaderno del río')+' · '+albumCount()+'/'+ALB.length;ab.style.cssText='min-height:44px;margin:4px 8px 4px 0;padding:8px 14px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer';ab.onclick=()=>openAlbum(tr);box.appendChild(ab);
  if(fresh){addMem(3*fresh);save()}
  return fresh;
}
export const newLetters=state=>{const f=foundTypes(),td=tasksDone();let n=0;for(let i=0;i<LETTERS.length;i++)if(!(state.ltr||{})[i]&&letterOpen(state,i))n++;Object.keys(td).forEach(i=>{if(f.has(+i)&&((state.ltr||{})[i]||0)<2)n++});return n};
/* Estaciones: solo ambiente (pétalos, motas doradas, hojas, copos). Automática según el mes o fija a elección. */
export const SEAS=['Primavera','Verano','Otoño','Invierno'];
const SK='rio3d-season',MODES=['auto','0','1','2','3'];
export const seasonMode=()=>{try{return localStorage.getItem(SK)||'auto'}catch(e){return'auto'}};
export const seasonNow=()=>{const m=seasonMode();if(m!=='auto')return +m;const mo=new Date().getMonth();return mo>=2&&mo<=4?0:mo>=5&&mo<=7?1:mo>=8&&mo<=10?2:3};
export const cycleSeason=()=>{const n=MODES[(MODES.indexOf(seasonMode())+1)%5];try{localStorage.setItem(SK,n)}catch(e){}return n};
export const seasonLabel=()=>'Estación: '+(seasonMode()==='auto'?'Auto':SEAS[+seasonMode()]);
export const SEAS_COL=[[255,182,200],[255,222,140],[232,140,70],[240,246,255]];
export function addSeasonTexts(ux){ux.add([['Estación: Auto','Season: Auto','季節: おまかせ'],['Estación: Primavera','Season: Spring','季節: 春'],['Estación: Verano','Season: Summer','季節: 夏'],['Estación: Otoño','Season: Autumn','季節: 秋'],['Estación: Invierno','Season: Winter','季節: 冬']])}

/* aviso cuando se abre una carta nueva (se llama de vez en cuando) */
let _seen=-1;export function watchLetters(state,say,tr){const n=newLetters(state);if(_seen<0){_seen=n;return}if(n>_seen)say(tr('Se abrió una carta nueva en el diario'));_seen=n}
