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
/* Cartas de vuelta: cuando ya hiciste el primer encargo de un lugar, al volver (pasada otra vez) Mara te propone otro gesto; hasta 2 por día real, sin prisa.
   Se guarda como una segunda carta debajo de la primera en el diario de la cabaña. */
const V=[ // [encargo es,en,ja, carta es,en,ja]
['Escuchar el crujido del puente','Listen to the bridge creak','橋のきしむ音を聞く','Volví al puente: crujió con tu mismo ritmo al cruzar. Ya no suena a madera, suena a casa.','I came back to the bridge: it creaked in your same rhythm. It no longer sounds like wood; it sounds like home.','橋に戻ると、あなたと同じ歩幅できしみました。もう木の音ではなく、家の音です。'],
['Mirar el reflejo del portal','Watch the gate’s reflection','鳥居の映りを眺める','Esta vez miré el reflejo en lugar del portal. Se ve igual de bien, pero más tranquilo.','This time I looked at the reflection instead of the gate. It looks just as good, only calmer.','今回は鳥居ではなく水面の映りを見ました。同じくらいきれいで、もっと静かです。'],
['Saludar a quien pasa en la aldea','Greet someone passing in the village','村ですれちがう人にあいさつする','Una señora de la aldea me saludó como si fuera vecina. Le dije que tenía una cabaña lejos, y sonrió.','A woman in the village greeted me like a neighbor. I told her I had a cabin far away, and she smiled.','村の女性が隣人のようにあいさつしてくれました。遠くに小屋があると話すと、笑ってくれました。'],
['Atrapar un pétalo en el aire','Catch a petal in the air','舞う花びらをつかむ','Atrapé un pétalo en el aire sin intentarlo. Dicen que da suerte; te lo mando de regalo.','I caught a petal in mid-air without trying. They say it brings luck; I am sending it to you.','何気なく空中で花びらをつかみました。幸運のしるしだそうです。あなたに贈ります。'],
['Contar las garzas en silencio','Count the herons in silence','静かにサギを数える','Conté las garzas sin mover un dedo: siempre salen una más de las que creía.','I counted the herons without moving a finger: there is always one more than I thought.','指一本動かさずサギを数えました。思ったより、いつもひとつ多いのです。'],
['Escuchar cómo se apaga el eco de la campana','Listen to the bell’s echo fade','鐘の余韻が消えるのを聞く','Esperé a que el eco se apagara del todo. Dura más de lo que uno imagina, y es lo mejor de la campana.','I waited for the echo to fade completely. It lasts longer than you think, and it is the best part of the bell.','余韻が完全に消えるまで待ちました。思うより長く、それが鐘のいちばん好きなところです。'],
['Mojar los dedos en la cascada','Dip your fingers in the waterfall','滝に指をひたす','Mojé los dedos en la cascada: estaba fría y clara. Te mando un poco de ese frío para el verano.','I dipped my fingers in the waterfall: cold and clear. I am sending you a little of that chill for summer.','滝に指をひたしました。冷たくて澄んでいます。夏のために、少しその冷たさを送ります。'],
['Mirar cómo suben el vapor y la tarde','Watch the steam and the afternoon rise','湯気と夕方が立ちのぼるのを見る','El vapor del té subía despacio y la tarde con él. Anoté la hora: no se me va a olvidar.','The tea steam rose slowly and the afternoon with it. I wrote down the time: I will not forget it.','お茶の湯気がゆっくり昇り、夕方もいっしょに昇りました。時刻を書きとめたので、忘れません。'],
['Dejar que el viento mueva el bambú','Let the wind move the bamboo','風が竹をゆらすのにまかせる','No hice nada y el bambú hizo todo. Aprendí que a veces ayudar es apartarse.','I did nothing and the bamboo did everything. I learned that sometimes helping means stepping aside.','何もしないと、竹がすべてをやってくれました。ときには身を引くことが助けになると知りました。'],
['Ver cómo se cierra un loto','Watch a lotus close','蓮が閉じるのを見る','Vi cerrarse un loto al amanecer. No es un final: es el mismo descanso que el tuyo.','I watched a lotus close at dawn. It is not an ending: it is the same rest you take.','夜明けに蓮が閉じるのを見ました。終わりではなく、あなたの休みと同じ休みです。'],
['Mirar el castillo desde el agua','Look at the castle from the water','水の上から城を眺める','Miré el castillo desde el agua, como la primera vez. Sigue pareciéndose a las luces de tu terraza.','I looked at the castle from the water, like the first time. It still looks like the lights of your terrace.','最初のときのように、水の上から城を眺めました。やはりあなたのテラスの灯りに似ています。'],
];
export const VTXT=type=>V[type]||null;
export const V_KEY='rio-tasks2',V_PER_DAY=2;
const dayK=()=>{const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()};
const g2=()=>{try{const o=JSON.parse(localStorage.getItem(V_KEY)||'{}')||{};o.d=o.d||{};return o}catch(e){return{d:{}}}};
export const tasks2Done=()=>g2().d;
export const tasks2Left=()=>{const o=g2();return o.day===dayK()?Math.max(0,V_PER_DAY-(o.n||0)):V_PER_DAY};
/* Índice = tipo de lugar: 0 puente, 1 torii, 2 aldea, 3 jardín de sakura, 4 garzas, 5 templo, 6 cascada, 7 casa de té, 8 bambú, 9 loto, 10 castillo. */
export const TASK_TXT=type=>T[type]||null;
const get=()=>{try{return JSON.parse(localStorage.getItem(TKEY)||'{}')}catch(e){return{}}};
export const tasksDone=get;
export const tasksActive=()=>foundTypes().has(10);
export function addTaskTexts(ux){ux.add(T.map(x=>[x[0],x[1],x[2]]));ux.add(T.map(x=>[x[3],x[4],x[5]]));ux.add(V.map(x=>[x[0],x[1],x[2]]));ux.add(V.map(x=>[x[3],x[4],x[5]]));ux.add([['Carta de vuelta','Letter back','返事の手紙'],['Hoy ya diste dos vueltas. Mañana, más.','You have already done two returns today. More tomorrow.','今日はもう二回ふり返りました。続きは明日。']]);ux.add([['Mantén pulsado para hacerlo','Press and hold to do it','長押しで実行'],['Hecho. Un recuerdo más para la cabaña.','Done. One more keepsake for the cabin.','できました。小屋に思い出がひとつ増えました。'],['Encargo de Mara','Mara’s errand','マラのお願い'],['En el margen','In the margin','余白に']])}
let box,bar,txt,cur=null,curV=0,hold=0,raf=0,t0=0,did=false,chimeFn=null;
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
  if(cur==null)return;
  if(curV){const o=g2();o.d[cur]=1;o.n=(o.day===dayK()?(o.n||0):0)+1;o.day=dayK();try{localStorage.setItem(V_KEY,JSON.stringify(o))}catch(e){}}
  else{const d=get();d[cur]=1;try{localStorage.setItem(TKEY,JSON.stringify(d))}catch(e){}}
  const tp=cur;cur=null;curV=0;box.style.display='none';bar.style.width='0';
  try{chimeFn&&chimeFn(tp)}catch(e){}try{UX.hap([10,50,10])}catch(e){}try{UX.say(UX.tr('Hecho. Un recuerdo más para la cabaña.'))}catch(e){}
}
/* type: tipo de lugar cercano o null. chime(type): sonido al cumplir. Llamar en cada cuadro (es barato). */
export function taskTick(type,chime){
  if(!did){did=true;try{addTaskTexts(window.UX)}catch(e){}}
  chimeFn=chime;
  const act=type!=null&&T[type]&&tasksActive();
  const v1=act&&!get()[type],v2=act&&!v1&&!tasks2Done()[type]&&tasks2Left()>0;
  const ok=v1||v2;
  if(!ok){if(cur!=null&&!hold){cur=null;curV=0;if(box)box.style.display='none'}return}
  if(cur===type&&curV===(v2?1:0))return;
  if(!box)mk();cur=type;curV=v2?1:0;txt.textContent=UX.tr((v2?V:T)[type][0])+' · '+UX.tr('Mantén pulsado para hacerlo');box.style.display='block';
}
