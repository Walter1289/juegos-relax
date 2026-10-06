/* Encargos de Mara: después de llegar al castillo, cada lugar del río propone un gesto pequeño (sin tiempo ni castigo).
   Cada encargo cumplido guarda un recuerdo del río: la Cabaña lo muestra como un párrafo extra en la carta de ese lugar y da recuerdos. Mismo módulo en Río 2D y 3D. */
import {foundTypes} from './story.js';
export const TKEY='rio-tasks';
const T=[ // [encargo es,en,ja, margen es,en,ja]
['Dejar una linterna en el barandal','Leave a lantern on the railing','手すりにランタンを置く','Dejé una linterna en el barandal. Si cruzas de noche, ahí estará esperándote.','I left a lantern on the railing. If you cross at night, it will be waiting for you.','手すりにランタンを置きました。夜に渡るなら、そこで待っています。'],
['Pedir un deseo bajo el portal','Make a wish under the gate','鳥居の下で願いごとをする','Pedí otro deseo bajo el portal. Este no es mío: es para quien lea esto.','I made another wish under the gate. This one is not mine: it is for whoever reads this.','鳥居の下でもうひとつ願いました。私のではなく、これを読むあなたのために。'],
['Encender un farolillo','Light a lantern','ちょうちんをともす','Encendí un farolillo en la aldea. Dicen que dura hasta que alguien lo recuerda.','I lit a lantern in the village. They say it burns until someone remembers it.','村でちょうちんをともしました。誰かが思い出すあいだ、消えないそうです。'],
['Guardar un pétalo de sakura','Keep a sakura petal','桜の花びらをしまう','Guardé otro pétalo. Ya tengo suficientes para forrar una carta entera.','I kept another petal. I now have enough to line a whole letter.','もう一枚、花びらをしまいました。手紙を一通うめられるほどになりました。'],
['Quedarse quieto con las garzas','Stay still with the herons','サギと静かに待つ','Me quedé quieta con las garzas hasta que me olvidaron. Fue el mejor halago.','I stayed still with the herons until they forgot I was there. Best compliment ever.','サギのそばでじっとして、私の存在を忘れられるまで待ちました。最高のほめ言葉です。'],
['Tocar la campana','Ring the bell','鐘を鳴らす','Toqué la campana una vez más. Si la oyes desde el balcón, es mía.','I rang the bell once more. If you hear it from your balcony, it is mine.','もう一度鐘を鳴らしました。バルコニーで聞こえたら、それは私です。'],
['Llenar un frasco con agua de la cascada','Fill a jar with waterfall water','滝の水を瓶にくむ','Llené un frasco con agua de la cascada. Ponlo en el estantito: huele a tarde larga.','I filled a jar with waterfall water. Put it on the little shelf: it smells like a long afternoon.','滝の水を瓶にくみました。小さな棚に置いてください。長い午後の香りがします。'],
['Compartir una taza de té','Share a cup of tea','お茶をわかちあう','Compartí una taza de té. Pensé en la tuya, en la cabaña, humeando.','I shared a cup of tea. I thought of yours, steaming at the cabin.','お茶をわかちあいました。小屋で湯気を立てるあなたの一杯を思いました。'],
['Escuchar el bambú','Listen to the bamboo','竹の音に耳をすます','Escuché el bambú un buen rato. Suena a campanilla de viento sin dueño.','I listened to the bamboo a good while. It sounds like a wind chime with no owner.','竹の音をしばらく聞きました。持ち主のいない風鈴のようです。'],
['Dejar una flor en el estanque','Leave a flower on the pond','池に花を浮かべる','Dejé una flor en el estanque. Flota hacia donde tú ya estás.','I left a flower on the pond. It floats toward wherever you already are.','池に花を浮かべました。あなたがいる方へ流れていきます。'],
['Encender los fuegos para Mara','Light the fireworks for Mara','マラのために花火をあげる','Esta noche los fuegos del castillo son para ti. Gracias por seguirme hasta aquí.','Tonight the castle fireworks are for you. Thank you for following me all the way here.','今夜の城の花火はあなたのために。ここまでついてきてくれてありがとう。'],
];
/* Índice = tipo de lugar: 0 puente, 1 torii, 2 aldea, 3 jardín de sakura, 4 garzas, 5 templo, 6 cascada, 7 casa de té, 8 bambú, 9 loto, 10 castillo. */
export const TASK_TXT=type=>T[type]||null;
const get=()=>{try{return JSON.parse(localStorage.getItem(TKEY)||'{}')}catch(e){return{}}};
export const tasksDone=get;
export const tasksActive=()=>foundTypes().has(10);
export function addTaskTexts(ux){ux.add(T.map(x=>[x[0],x[1],x[2]]));ux.add(T.map(x=>[x[3],x[4],x[5]]));ux.add([['Mantén pulsado para hacerlo','Press and hold to do it','長押しで実行'],['Hecho. Un recuerdo más para la cabaña.','Done. One more keepsake for the cabin.','できました。小屋に思い出がひとつ増えました。'],['Encargo de Mara','Mara’s errand','マラのお願い'],['En el margen','In the margin','余白に']])}
let box,bar,txt,cur=null,hold=0,raf=0,t0=0,did=false,chimeFn=null;
function mk(){
  box=document.createElement('button');box.type='button';box.style.cssText='position:fixed;left:50%;bottom:max(150px,calc(env(safe-area-inset-bottom) + 144px));transform:translateX(-50%);z-index:60;display:none;min-height:50px;max-width:min(90vw,420px);padding:10px 20px;border-radius:99px;border:1px solid #ffc77a;background:rgba(40,40,80,.88);color:#fbf1e0;font:600 .9rem/1.25 system-ui;cursor:pointer;overflow:hidden;touch-action:none';
  bar=document.createElement('span');bar.style.cssText='position:absolute;left:0;top:0;bottom:0;width:0;background:rgba(255,199,122,.35);pointer-events:none';
  txt=document.createElement('span');txt.style.cssText='position:relative';box.append(bar,txt);document.body.appendChild(box);
  const start=e=>{if(cur==null)return;e.preventDefault();hold=1;t0=performance.now();loop()},stop=()=>{hold=0;bar.style.width='0'};
  box.addEventListener('pointerdown',start);box.addEventListener('pointerup',stop);box.addEventListener('pointerleave',stop);box.addEventListener('pointercancel',stop);
  box.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();finish()}});
}
function loop(){cancelAnimationFrame(raf);const f=()=>{if(!hold)return;const k=Math.min(1,(performance.now()-t0)/2200);bar.style.width=(k*100)+'%';if(k>=1){hold=0;finish();return}raf=requestAnimationFrame(f)};raf=requestAnimationFrame(f)}
function finish(){
  if(cur==null)return;const d=get();d[cur]=1;try{localStorage.setItem(TKEY,JSON.stringify(d))}catch(e){}
  const tp=cur;cur=null;box.style.display='none';bar.style.width='0';
  try{chimeFn&&chimeFn(tp)}catch(e){}try{UX.hap([10,50,10])}catch(e){}try{UX.say(UX.tr('Hecho. Un recuerdo más para la cabaña.'))}catch(e){}
}
/* type: tipo de lugar cercano o null. chime(type): sonido al cumplir. Llamar en cada cuadro (es barato). */
export function taskTick(type,chime){
  if(!did){did=true;try{addTaskTexts(window.UX)}catch(e){}}
  chimeFn=chime;
  const ok=type!=null&&T[type]&&tasksActive()&&!get()[type];
  if(!ok){if(cur!=null&&!hold){cur=null;if(box)box.style.display='none'}return}
  if(cur===type)return;
  if(!box)mk();cur=type;txt.textContent=UX.tr(T[type][0])+' · '+UX.tr('Mantén pulsado para hacerlo');box.style.display='block';
}
