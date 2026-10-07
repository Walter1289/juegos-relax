/* Farolillo del día: cada día real aparece un farolillo dorado en el río con un pensamiento breve.
   Sin prisa ni castigo: si hoy no lo recoges, mañana hay otro. Guarda los últimos pensamientos. Vale en Río 2D y 3D.
   Cada uno da un recuerdo para la cabaña (se cobra al abrir el diario). */
const DK='rio-day';
export const DAYS=[ // [es,en,ja]
['Hoy no tienes que llegar a ningún sitio.','You do not have to get anywhere today.','今日はどこかへ着かなくて大丈夫。'],
['El agua también descansa mientras avanza.','Water also rests while it moves.','水は流れながらも休んでいます。'],
['Respira hondo. Lo demás puede esperar a mañana.','Breathe deep. The rest can wait until tomorrow.','深呼吸を。あとは明日でいい。'],
['Algo pequeño hecho con calma ya es suficiente.','One small thing done calmly is enough.','小さなことをゆっくり。それで十分です。'],
['Las nubes no se apuran y aun así llegan.','Clouds never hurry and still they arrive.','雲は急がないのに、ちゃんと着きます。'],
['Mara dejaría una nota: «mira hacia arriba un momento».','Mara would leave a note: “look up for a moment”.','マラならメモを残すでしょう。「少し空を見上げて」。'],
['No hace falta entenderlo todo esta noche.','You do not need to understand everything tonight.','今夜、すべてを分かる必要はありません。'],
['Una taza caliente y un río quieto: buen plan.','A warm cup and a quiet river: a good plan.','温かいお茶と静かな川。いい計画です。'],
['Lo que pesa hoy flota un poco más ligero en el agua.','What weighs on you today floats lighter on the water.','今日の重さも、水の上では少し軽くなります。'],
['Está bien ir despacio. Así se ven más cosas.','It is fine to go slowly. You see more that way.','ゆっくりで大丈夫。そのほうが多くが見えます。'],
['Cada farolillo es un «gracias» que nadie pidió.','Every lantern is a “thank you” nobody asked for.','ちょうちんはひとつずつ、頼まれない「ありがとう」。'],
['El río no compara tu ritmo con el de nadie.','The river does not compare your pace with anyone’s.','川はあなたの速さを誰とも比べません。'],
['Escucha un rato: siempre hay algo suave sonando.','Listen a while: something gentle is always playing.','しばらく耳をすませて。いつもやさしい音がしています。'],
['Hoy cuenta aunque solo hayas flotado un poco.','Today counts even if you only floated a little.','少し浮かんだだけでも、今日はちゃんと一日です。'],
];
const day=()=>{const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()};
const idx=()=>Math.floor((Date.now()-new Date().getTimezoneOffset()*60000)/864e5);
const st=()=>{try{return JSON.parse(localStorage.getItem(DK)||'{}')||{}}catch(e){return {}}};
export const dayPending=()=>st().k!==day();
export const dayTotal=()=>(st().n||0);
export const dayLog=()=>st().log||[];
export const dayPhrase=()=>DAYS[idx()%DAYS.length];
/* reparte posición: s = actual + 230..470, lateral -0.5..0.5 del medio ancho; hash determinista por día */
export const dayRand=n=>{const x=Math.sin((idx()*131+n)*12.9898)*43758.5453;return x-Math.floor(x)};
export function dayTake(){
  const s=st();if(s.k===day())return null;const p=idx()%DAYS.length;
  s.k=day();s.n=(s.n||0)+1;s.log=(s.log||[]).concat([[day(),p]]).slice(-12);try{localStorage.setItem(DK,JSON.stringify(s))}catch(e){}
  try{window.UX&&UX.say&&UX.say(UX.tr(DAYS[p][0]))}catch(e){}
  try{window.UX&&UX.hap&&UX.hap([12,40,12])}catch(e){}
  return DAYS[p];
}
export const claimDay=state=>{state.cnt=state.cnt||{};const n=Math.max(0,dayTotal()-(state.cnt.dl||0));if(n)state.cnt.dl=dayTotal();return n};
export function addDayTexts(ux){ux.add(DAYS.map(d=>[d[0],d[1],d[2]]));ux.add([['Farolillos del día','Lanterns of the day','今日のちょうちん'],['Hoy ya recogiste el farolillo. Mañana habrá otro.','You already picked up today’s lantern. There will be another tomorrow.','今日のちょうちんはもう拾いました。明日また流れてきます。'],['Aún no recoges ninguno','You have not picked up any yet','まだ拾っていません']])}
