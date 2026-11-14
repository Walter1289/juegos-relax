/* Bajar a tierra a meditar: desde la primera vuelta cerrada, la canoa puede detenerse en la aldea (plaza de la piedra ceremonial),
   el templo (junto a la campana) y la casa de té (sala de tatami o balcón). Nada corre solo ni tiene meta: se entra, se está y se vuelve a la canoa. */
import * as THREE from 'three';
import {S,P} from './state.js';
import {cam} from './core.js';
import {lmPos,H} from './world.js';
import {mkLantern} from './lanterns.js';
import {scene} from './core.js';
import {spawnRipple} from './ripples.js';
import {paintTex} from './lm-deco.js';
import {lmMade} from './lm-data.js';
import {STILL} from '../still.js';
import {LOOK,IN} from './input.js';
import {A} from '../audio-rio.js';
import {lang} from '../i18n.js';
import {vueltas} from '../lightmsg.js';
const T3=a=>a[lang()]||a.es;
S.visit=false;
/* ---------- textos ---------- */
const ENTER={2:{es:'Bajar a la plaza de la piedra',en:'Step ashore to the stone square',ja:'石の広場に上がる'},5:{es:'Entrar al templo a meditar',en:'Enter the temple to meditate',ja:'寺に入って瞑想する'},7:{es:'Entrar a la casa de té',en:'Enter the tea house',ja:'茶屋に入る'},8:{es:'Entrar al sendero de bambú',en:'Enter the bamboo path',ja:'竹林の小道に入る'},10:{es:'Subir a la torre del castillo',en:'Climb the castle tower',ja:'天守に登る'}};
const ACT={2:{es:'Encender un farol',en:'Light a lantern',ja:'灯籠をともす'},5:{es:'Tocar la campana',en:'Ring the bell',ja:'鐘をつく'},7:{es:'Tomar un sorbo de té',en:'Take a sip of tea',ja:'お茶をひと口'},8:{es:'Tocar la flauta de bambú',en:'Play the bamboo flute',ja:'竹の笛を吹く'},10:{es:'Soltar una luz desde la torre',en:'Release a light from the tower',ja:'天守から灯を放つ'}};
const BACK={es:'Volver a la canoa',en:'Back to the canoe',ja:'カヌーに戻る'};
const VIEW=[{es:'Salir al balcón',en:'Go out to the balcony',ja:'縁側に出る'},{es:'Entrar a la sala',en:'Go into the room',ja:'座敷に入る'}];
const INTRO={
 2:{es:'La piedra guarda a la aldea. Cada farol que enciendes aleja una sombra de las que pesan sobre las personas. Mantén presionado para caminar por la plaza.',en:'The stone watches over the village. Each lantern you light drives away one of the shadows that weigh on people. Press and hold to walk around the square.',ja:'この石は村を見守っています。灯籠をひとつともすたび、人にのしかかる影がひとつ遠ざかります。長押しで広場を歩けます。'},
 5:{es:'Siéntate junto a la campana. Aquí no hay nada que hacer. Si quieres recorrer el templo, mantén presionado.',en:'Sit beside the bell. There is nothing to do here. To walk around the temple, press and hold.',ja:'鐘のそばに座りましょう。ここでは、何もしなくていいのです。長押しで寺の中を歩けます。'},
 7:{es:'El té está caliente. Sostén la taza con las dos manos. Si quieres moverte por la casa, mantén presionado.',en:'The tea is hot. Hold the cup with both hands. To move around the house, press and hold.',ja:'お茶は温かい。両手で湯のみを包みましょう。長押しで茶屋の中を歩けます。'}};
INTRO[8]={es:'Un sendero entra en el bambú hasta un claro. Mantén presionado para caminar; al fondo, el agua marca el paso del tiempo.',en:'A path leads into the bamboo to a clearing. Press and hold to walk; at the end, water keeps the time.',ja:'小道が竹林の奥の空き地へ続きます。長押しで歩きましょう。奥では、水が時を刻んでいます。'};
INTRO[10]={es:'Desde lo alto del castillo se ve el río que has recorrido. Mantén presionado para rodear el mirador.',en:'From the top of the castle you can see the river you have travelled. Press and hold to walk around the gallery.',ja:'天守の上から、たどってきた川が見えます。長押しで回廊を歩けます。'};
const FLAUTA={es:'El bambú está hueco, y por eso canta. Deja también un hueco en ti.',en:'Bamboo is hollow, and that is why it sings. Leave a hollow in yourself too.',ja:'竹は空ろだからこそ歌います。あなたの中にも、空きを残しましょう。'};
const LUZ={es:'Una luz sube desde la torre y se lleva lo que querías demostrar.',en:'A light rises from the tower and takes with it what you wanted to prove.',ja:'灯が天守から昇り、証明したかったものを連れていきます。'};
ENTER[0]={es:'Subir al puente',en:'Go up onto the bridge',ja:'橋に上がる'};ENTER[3]={es:'Visitar la casa del samurái',en:'Visit the samurai house',ja:'武家屋敷を訪ねる'};
ACT[0]={es:'Soltar un barquito de papel',en:'Set a paper boat adrift',ja:'紙の舟を流す'};ACT[3]={es:'Inclinarte ante la armadura',en:'Bow before the armour',ja:'鎧に一礼する'};
INTRO[0]={es:'Desde el puente el río pasa por debajo sin detenerse. Mantén presionado para cruzarlo de orilla a orilla.',en:'From the bridge the river passes beneath without stopping. Press and hold to cross from bank to bank.',ja:'橋の上から見ると、川は止まらず下を流れていきます。長押しで岸から岸へ渡れます。'};
INTRO[3]={es:'La casa de un guerrero, abierta al jardín de cerezos. Su armadura descansa; él ya no la necesita. Mantén presionado para recorrer la sala.',en:'A warrior’s house, open to the cherry garden. His armour rests; he no longer needs it. Press and hold to walk around the room.',ja:'桜の庭にひらいた、武士の家。鎧は休んでいます。もう必要がないのです。長押しで座敷を歩けます。'};
const BARCO={es:'El barquito se va con la corriente. No hace falta seguirlo.',en:'The little boat leaves with the current. There is no need to follow it.',ja:'小さな舟は流れとともに去ります。追いかけなくていいのです。'};
const BUSHIDO=[
 {es:'義 Gi, rectitud: hacer lo correcto aunque nadie mire.',en:'義 Gi, rectitude: doing what is right even when no one is watching.',ja:'義：誰も見ていなくても、正しいことをする。'},
 {es:'勇 Yū, valor: el miedo sigue ahí, y aun así das el paso.',en:'勇 Yū, courage: the fear is still there, and you take the step anyway.',ja:'勇：恐れはあっても、一歩を踏み出す。'},
 {es:'仁 Jin, compasión: la fuerza sirve para cuidar.',en:'仁 Jin, compassion: strength is for taking care of others.',ja:'仁：力は、いたわるためにある。'},
 {es:'礼 Rei, respeto: la cortesía también se ofrece a quien no la devuelve.',en:'礼 Rei, respect: courtesy is offered even to those who do not return it.',ja:'礼：返ってこなくても、礼を尽くす。'},
 {es:'誠 Makoto, sinceridad: decir y hacer son una sola cosa.',en:'誠 Makoto, sincerity: saying and doing are one and the same.',ja:'誠：言うことと行うことは、ひとつ。'},
 {es:'名誉 Meiyo, honor: tú eres el testigo de tus propios actos.',en:'名誉 Meiyo, honour: you are the witness of your own actions.',ja:'名誉：自分の行いの証人は、自分自身。'},
 {es:'忠義 Chūgi, lealtad: cuidar aquello a lo que diste tu palabra.',en:'忠義 Chūgi, loyalty: looking after what you gave your word to.',ja:'忠義：約束したものを、守りつづける。'}];
const FURIN={es:'Tocar las campanillas',en:'Ring the wind chimes',ja:'風鈴を鳴らす'},FURIN_L={es:'El viento no pide permiso para sonar. Tú tampoco para descansar.',en:'The wind does not ask permission to ring. Neither do you to rest.',ja:'風は鳴るのに許しを求めません。あなたも、休むのに許しはいりません。'};
const VACT={rake:{es:'Rastrillar la arena',en:'Rake the sand',ja:'砂に筋を引く'},lord:{es:'Inclinarte ante el señor ausente',en:'Bow to the absent lord',ja:'不在の殿に一礼する'}};
const RAKE=[{es:'Los surcos nuevos borran los de antes. Nadie echa de menos los viejos.',en:'The new furrows erase the old ones. No one misses the old.',ja:'新しい筋が前の筋を消します。古い筋を惜しむ人はいません。'},
 {es:'Tres piedras y arena: no hace falta más para un mar.',en:'Three stones and sand: nothing more is needed for a sea.',ja:'石が三つと砂。海をつくるのに、それ以上はいりません。'},
 {es:'Rastrillar no termina nunca, y por eso no hay prisa.',en:'Raking is never finished, and so there is no hurry.',ja:'砂を掻く仕事に終わりはなく、だから急ぐこともありません。'},
 {es:'El orden de fuera va ordenando lo de dentro.',en:'The order outside slowly orders what is inside.',ja:'外を整えるうちに、内も整っていきます。'}];
const LORD=[{es:'El señor ya no está, y el salón sigue en calma. El poder también se suelta.',en:'The lord is gone, and the hall is still calm. Power, too, is let go.',ja:'殿はもうおらず、広間は静かなまま。権力もまた、手放されるものです。'},
 {es:'Quien se sentaba aquí también dudaba. Nadie manda sobre su propia inquietud a la fuerza.',en:'The one who sat here also had doubts. No one rules over their own unrest by force.',ja:'ここに座った人にも迷いはありました。心のざわめきは、力では治められません。'},
 {es:'No necesitas ganar hoy. Basta con haber llegado.',en:'You do not need to win today. Having arrived is enough.',ja:'今日は勝たなくていい。ここに来ただけで十分です。'},
 {es:'El oro de las paredes no pesa. Lo que pesa es querer más.',en:'The gold on the walls weighs nothing. What weighs is wanting more.',ja:'壁の金は重くありません。重いのは、もっと欲しいと思う心です。'}];
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
LINES[8]=[{es:'Inhala mientras la caña se llena… suelta el aire cuando cae.',en:'Breathe in while the cane fills… breathe out when it falls.',ja:'竹筒に水が満ちるあいだ吸って… 落ちるときに吐きましょう。'},
 {es:'El bambú se dobla con el viento y no se quiebra.',en:'Bamboo bends with the wind and does not break.',ja:'竹は風にしなり、折れません。'},
 {es:'Entre caña y caña cabe la luz. Entre un pensamiento y otro, también.',en:'Light fits between one cane and the next. Between one thought and the next, too.',ja:'竹と竹のあいだに光が入ります。考えと考えのあいだにも。'},
 {es:'El golpe de la caña no asusta al bosque: lo ordena.',en:'The knock of the cane does not startle the grove: it sets it in order.',ja:'鹿おどしの音は林を驚かせず、整えます。'},
 {es:'Nada aquí crece con prisa, y todo llega alto.',en:'Nothing here grows in a hurry, and everything grows tall.',ja:'ここでは何も急がず、それでも高く伸びます。'}];
LINES[10]=[{es:'Desde arriba, lo que parecía grande cabe en una mirada.',en:'From up here, what seemed large fits in a single glance.',ja:'上から見れば、大きく思えたものもひと目に収まります。'},
 {es:'Aquí no hay nada que ganar. El señor de este castillo también miraba el río.',en:'There is nothing to win here. The lord of this castle watched the river too.',ja:'ここに勝つべきものはありません。この城の主も、川を眺めていました。'},
 {es:'El orgullo pesa como una armadura. Puedes dejarla en este piso.',en:'Pride weighs like armour. You can leave it on this floor.',ja:'誇りは鎧のように重いもの。この階に置いていけます。'},
 {es:'Cada curva del río fue un momento tuyo. Ya pasaron, y están bien donde están.',en:'Every bend of the river was a moment of yours. They have passed, and they are fine where they are.',ja:'川の曲がりひとつひとつが、あなたの時間でした。もう過ぎて、あるべきところにあります。'},
 {es:'Respira con el viento de la altura.',en:'Breathe with the wind of the heights.',ja:'高みの風といっしょに息をしましょう。'}];
LINES[0]=[{es:'El agua que ves ya no es la que viste hace un momento.',en:'The water you see is no longer the water you saw a moment ago.',ja:'いま見ている水は、さっきの水ではありません。'},
 {es:'Un puente no retiene nada: solo une dos orillas.',en:'A bridge holds on to nothing: it only joins two banks.',ja:'橋は何も引きとめません。ふたつの岸をつなぐだけです。'},
 {es:'Lo que sueltas río abajo no se pierde; sigue su camino.',en:'What you let go downstream is not lost; it goes its own way.',ja:'下流へ手放したものは失われません。自分の道を行くのです。'},
 {es:'Apóyate en la baranda. La madera está tibia.',en:'Lean on the railing. The wood is warm.',ja:'欄干にもたれましょう。木は温かい。'},
 {es:'De un lado lo que ya pasó, del otro lo que viene. Tú estás en medio, y aquí se está bien.',en:'On one side what has passed, on the other what is coming. You are in the middle, and it is good here.',ja:'片方には過ぎたもの、もう片方にはこれから来るもの。あなたはその真ん中。ここは心地よい。'}];
LINES[3]=[{es:'La espada mejor cuidada es la que se queda en su funda.',en:'The best-kept sword is the one that stays in its sheath.',ja:'いちばん手入れの行き届いた刀は、鞘に収まったままの刀です。'},
 {es:'El guerrero barría su jardín cada mañana. También eso era disciplina.',en:'The warrior swept his garden every morning. That, too, was discipline.',ja:'武士は毎朝、庭を掃きました。それもまた修行でした。'},
 {es:'Los pétalos caen sin resistirse. Por eso el samurái amaba el cerezo.',en:'The petals fall without resisting. That is why the samurai loved the cherry tree.',ja:'花びらは抗わずに散ります。だから侍は桜を愛しました。'},
 {es:'La calma no es falta de fuerza: es fuerza que no necesita mostrarse.',en:'Calm is not a lack of strength: it is strength that has no need to show itself.',ja:'静けさは力の不足ではなく、見せる必要のない力です。'},
 {es:'Siéntate derecho, sin rigidez. Así se sentaba él a escribir.',en:'Sit upright, without stiffness. That is how he sat to write.',ja:'背すじを伸ばし、力まずに座りましょう。彼もそうして筆をとりました。'}];
const sky=[],boats=[];
const BELL={es:'La campana se lleva lejos lo que ya no necesitas cargar.',en:'The bell carries far away what you no longer need to carry.',ja:'鐘の音が、もう背負わなくていいものを遠くへ運びます。'};
/* ---------- interfaz ---------- */
let box=null,bEnter,bAct,bAct2,bView,bBack,cap,fade,near=null,V=null,wasStill=false,busy=false;
const _a=new THREE.Vector3(),_b=new THREE.Vector3(),_c=new THREE.Color();
const C0=new THREE.Color(0x6b645c),C1=new THREE.Color(0xffd9a0);
function init(){
  try{UX.add([['Cuencos y campanas zen','Zen bowls and bells','おりんと鐘の音'],['Caña de agua','Water cane knock','鹿おどしの音'],['Campanillas de viento','Wind chimes','風鈴の音']])}catch(e){}
  const st=document.createElement('style');st.textContent='#visitBox{position:fixed;z-index:58;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;bottom:max(204px,calc(env(safe-area-inset-bottom) + 196px))}#visitBox.in{bottom:max(26px,calc(env(safe-area-inset-bottom) + 18px))}#visitBox button{min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #a8926a;background:rgba(230,218,191,.92);color:#2a231c;font:600 .88rem system-ui,sans-serif;display:none;cursor:pointer;white-space:nowrap}#visitBox button.soft{background:rgba(230,218,191,.82);border-color:#a8926a}#visitCap{position:fixed;z-index:57;left:50%;transform:translateX(-50%);top:max(74px,calc(env(safe-area-inset-top) + 64px));width:min(86vw,560px);text-align:center;color:#2a231c;font:500 1.06rem/1.5 Georgia,"Hiragino Mincho ProN",serif;background:rgba(230,218,191,.86);border:1px solid rgba(168,146,106,.6);border-radius:16px;padding:10px 16px;opacity:0;transition:opacity 1.4s;pointer-events:none}#visitFade{position:fixed;inset:0;z-index:56;background:#0e1024;opacity:0;transition:opacity .6s;pointer-events:none}body.visiting #abox,body.visiting #joy,body.visiting #stillBtn,body.visiting #lantB,body.visiting #places-row,body.visiting #hint,body.visiting #next,body.visiting #taskBox{display:none!important}';
  document.head.appendChild(st);
  box=document.createElement('div');box.id='visitBox';
  const mk=(f,soft)=>{const b=document.createElement('button');b.type='button';if(soft)b.className='soft';b.onclick=f;box.appendChild(b);return b};
  bEnter=mk(()=>enter(near));bAct=mk(act);bAct2=mk(act2);bView=mk(swap,true);bBack=mk(leave,true);
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
    try{A.zen(d.kind===5||d.kind===10?1:d.kind===7||d.kind===3?3:2)}catch(e){}cap.textContent='';say(INTRO[d.kind],12)})}
function leave(){if(!V||busy)return;through(()=>{V=null;S.visit=false;S.indoor=false;STILL.on=wasStill;LOOK.yaw=LOOK.pitch=0;document.body.classList.remove('visiting');box.classList.remove('in');cap.style.opacity=0;cap.textContent='';try{A.zen(0)}catch(e){}})}
function swap(){if(!V||busy||V.d.views.length<2)return;through(()=>{V.vi=(V.vi+1)%V.d.views.length;V.w=null;V.hd=0;V.vel=0;LOOK.yaw=LOOK.pitch=0})}
function act2(){if(!V||!V.d.furin||(V.f2&&V.t-V.f2<2))return;V.f2=V.t;for(const f of V.d.furin)f.userData.hit=P.t+Math.random()*.5;
  try{A.cap('Campanillas de viento');const t=A.ctx.currentTime;[1568,1760,2093,2349,1976].forEach((f,i)=>{A.bell(f,t+.05+i*.16+Math.random()*.1,.035,false,(i-2)*1.2,-2);if(i%2)A.bell(f*1.5,t+.9+i*.2,.02,false,(i-2)*1.2,-2)});UX.hap(8)}catch(e){}say(FURIN_L,11)}
function act(){if(!V)return;const d=V.d,va=d.views[V.vi].act;
  if(va==='rake'){if(V.bell&&V.t-V.bell<2.5)return;V.bell=V.t;const G=d.garden;G.n=G.n%6+1;through(()=>{G.sand.material.map=paintTex('sand',G.n);G.sand.material.needsUpdate=true});try{A.bowl(174.61,.05,0,-2)}catch(e){}say(RAKE[(V.ri=(V.ri||0)+1)%RAKE.length],13);return}
  if(va==='lord'){if(V.bell&&V.t-V.bell<3)return;V.bell=V.t;V.sip=V.t;try{A.bowl(146.83,.08,0,-2)}catch(e){}say(LORD[(V.lo=(V.lo||0)+1)%LORD.length],13);return}
  if(d.kind===2){if(V.lit>=d.lamps.length)return;d.lamps[V.lit].on=1;say(SOMBRAS[V.lit%SOMBRAS.length],9);V.lit++;try{A.bowl([293.66,329.63,392,440,523.25,587.33,659.25,783.99][V.lit-1],.07,0,-2);UX.hap(10)}catch(e){}
    if(V.lit>=d.lamps.length)setTimeout(()=>{if(V&&V.d===d)say(FIN2,16)},9500)}
  else if(d.kind===5){if(V.bell&&V.t-V.bell<3.2)return;V.bell=V.t;try{A.gong()}catch(e){}say(BELL,10)}
  else if(d.kind===0){if((V.bell&&V.t-V.bell<2.5)||boats.length>5)return;V.bell=V.t;const ref=d.views[0].ref,lx=V.w?Math.max(-12,Math.min(12,V.w[0])):0,p0=new THREE.Vector3(lx,.06,-6.5),p1=new THREE.Vector3(lx,.06,-7.5);ref.localToWorld(p0);ref.localToWorld(p1);
    const b=new THREE.Group(),m=new THREE.MeshBasicMaterial({color:0xfbf6ea}),hl=new THREE.Mesh(new THREE.ConeGeometry(.2,.6,4),m),sl=new THREE.Mesh(new THREE.ConeGeometry(.1,.22,3),m);hl.rotation.x=Math.PI/2;hl.scale.set(1,1,.45);sl.position.y=.14;b.add(hl,sl);b.position.copy(p0);b.rotation.y=Math.atan2(p1.x-p0.x,p1.z-p0.z);scene.add(b);
    boats.push({g:b,t:0,x:p0.x,z:p0.z,dx:p1.x-p0.x,dz:p1.z-p0.z,r:0});try{spawnRipple(p0.x,p0.z,.7,3,.7);A.plop(0);UX.hap(8)}catch(e){}say(BARCO,11)}
  else if(d.kind===3){if(V.bell&&V.t-V.bell<3)return;V.bell=V.t;V.sip=V.t;try{A.bowl(196,.07,0,-2)}catch(e){}V.bi=V.bi||0;say(BUSHIDO[V.bi++%BUSHIDO.length],13)}
  else if(d.kind===8){if(V.bell&&V.t-V.bell<5)return;V.bell=V.t;try{const t=A.ctx.currentTime+.05,b=[293.66,349.23,440,466.16][(Math.random()*4)|0];A.cap('Flauta shakuhachi');A.flute(b,t,2.2,.05,0,-2);A.flute(b*1.335,t+2.3,1.6,.045,0,-2);A.flute(b*1.189,t+4,3,.05,0,-2)}catch(e){}say(FLAUTA,12)}
  else if(d.kind===10){if((V.bell&&V.t-V.bell<2.5)||sky.length>7)return;V.bell=V.t;const g=mkLantern();if(g.userData.refl)g.userData.refl.visible=false;g.scale.setScalar(1.5);
    const yw=-cam.rotation.y;g.position.set(cam.position.x+Math.sin(yw)*3.2,cam.position.y-.9,cam.position.z-Math.cos(yw)*3.2);scene.add(g);sky.push({g,t:0,x:g.position.x,y:g.position.y,z:g.position.z,ph:Math.random()*6,dx:Math.sin(yw),dz:-Math.cos(yw)});
    try{A.bowl(440,.06,0,-2);UX.hap(10)}catch(e){}say(LUZ,11)}
  else{try{A.pluck(349.23,.06);A.bowl(392,.035,0,-1)}catch(e){}V.sip=V.t;say(LINES[7][V.li++%LINES[7].length],12)}}
/* ---------- por fotograma ---------- */
export function visitStep(dt){
  if(!box){if(typeof document==='undefined')return;init()}
  const ps=P.dist||-P.pz;near=null;
  if(S.started&&!V&&!S.walk&&!S.cine&&!S.X.photo&&vueltas()>=1)for(const [k,g] of lmMade){if(g.userData.visit&&!g.userData.job&&Math.abs(lmPos(k)-ps)<(g.userData.visit.range||46)){near=g;break}}
  bEnter.style.display=near&&!busy?'block':'none';if(near)bEnter.textContent=T3(ENTER[near.userData.visit.kind]);
  const on=!!V;bBack.style.display=on?'block':'none';bAct.style.display=on&&!(V.d.kind===2&&V.lit>=V.d.lamps.length)?'block':'none';bView.style.display=on&&V.d.views.length>1?'block':'none';bAct2.style.display=on&&V.d.furin&&(V.d.act2||V.d.kind===3||V.d.kind===7)&&!V.d.views[V.vi].indoor?'block':'none';
  /* faroles, campana y vapor siguen animándose aunque ya no estés dentro (se apagan solos al salir) */
  for(const [,g] of lmMade){const d=g.userData.visit;if(!d)continue;const here=V&&V.d===d;
    if(d.lamps)for(const l of d.lamps){const tg=here?l.on:0;if(Math.abs(tg-l.k)>.002||l.k>0){l.k+=(tg-l.k)*Math.min(1,dt*1.6);l.b.material.color.copy(_c.copy(C0).lerp(C1,l.k));l.s.material.opacity=l.k*(.62+.08*Math.sin(P.t*5.3+l.d))}}
    if(d.stone){let n=0;for(const l of d.lamps)n+=l.k;d.stone.material.emissive.setRGB(.085*n/8,.055*n/8,.025*n/8)}
    if(d.steam)for(const s of d.steam){const u=(P.t*.22+s.userData.ph)%1;s.position.y=s.userData.y0+u*.5;s.material.opacity=here?.3*Math.sin(u*Math.PI):0;s.scale.setScalar((d.kind===5?.3:.14)+u*(d.kind===5?.5:.2))}
    if(d.arm){/* shishi-odoshi: se llena despacio, cae, golpea y vuelve */const u=(P.t%9)/9,a=u<.86?-.3+u/.86*.55:u<.9?.25-(u-.86)/.04*.8:-.55+(u-.9)/.1*.25;d.arm.rotation.z=a;
      if(here&&u>=.9&&!d.tk){d.tk=1;try{A.tock()}catch(e){}}else if(u<.5)d.tk=0}
    if(d.furin)for(const f of d.furin){const e=P.t-(f.userData.hit||-99),a=(e>0&&e<9?Math.exp(-e*.5)*.5:0)+.05;f.rotation.z=Math.sin(P.t*3.1+f.userData.ph)*a;f.rotation.x=Math.sin(P.t*2.3+(f.userData.ph||0)*2)*a*.7}
    if(d.bell){const e=here?V.t-V.bell:99,a=e<12&&here&&V.bell>0?Math.exp(-e*.35)*Math.sin(e*2.6):0;d.bell.rotation.x=a*.07;d.log.position.z=2.6-(e<.5&&here&&V.bell>0?Math.sin(e*6.283)*.9:0)}}
  /* luces soltadas desde la torre: suben despacio, se alejan y se apagan */
  for(let i=sky.length-1;i>=0;i--){const q=sky[i];q.t+=dt;const t=q.t;q.g.position.set(q.x+q.dx*t*.9+Math.sin(t*.45+q.ph)*.8,q.y+t*(.7+t*.06),q.z+q.dz*t*.9+Math.cos(t*.37+q.ph)*.6);
    const o=Math.min(1,t/.9)*Math.min(1,(24-t)/5);if(q.g.userData.glow)q.g.userData.glow.material.opacity=.75*Math.max(0,o);
    if(t>=24){scene.remove(q.g);q.g.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material)o.material.dispose()});sky.splice(i,1)}}
  /* barquitos de papel: se van río abajo dejando ondas */
  for(let i=boats.length-1;i>=0;i--){const q=boats[i];q.t+=dt;const t=q.t;q.g.position.set(q.x+q.dx*t*.75+Math.sin(t*.5)*.3,.06+Math.sin(t*2.1)*.015,q.z+q.dz*t*.75);q.g.rotation.z=Math.sin(t*1.7)*.06;
    if(t>q.r){q.r=t+1.6;try{spawnRipple(q.g.position.x,q.g.position.z,.45,2.6,.5)}catch(e){}}
    if(t>44)q.g.scale.setScalar(Math.max(.01,(50-t)/6));if(t>=50){scene.remove(q.g);q.g.traverse(o=>{if(o.geometry)o.geometry.dispose()});q.g.children[0].material.dispose();boats.splice(i,1)}}
  if(!V)return;
  if(!V.g.parent){V=null;S.visit=false;S.indoor=false;STILL.on=wasStill;document.body.classList.remove('visiting');box.classList.remove('in');cap.style.opacity=0;return}
  V.t+=dt;STILL.t=0;{const cv=V.d.views[V.vi];bAct.textContent=T3(cv.act?VACT[cv.act]:ACT[V.d.kind]);bAct2.textContent=T3(FURIN);bBack.textContent=T3(BACK);if(V.d.views.length>1)bView.textContent=T3(cv.label||VIEW[V.vi])}
  /* frases sin prisa: llegan solas cada cierto tiempo */
  if(V.t>V.next){const va=V.d.views[V.vi].act,L=va==='rake'?RAKE:va==='lord'?LORD:LINES[V.d.kind];say(L[V.li++%L.length],V.d.kind===2?14:13)}
  /* cámara sentada: respira apenas, y se puede mirar alrededor */
  const v=V.d.views[V.vi];v.ref.updateWorldMatrix(true,false);_a.fromArray(v.eye);_b.fromArray(v.look);v.ref.localToWorld(_a);v.ref.localToWorld(_b);
  const dx=_b.x-_a.x,dy=_b.y-_a.y,dz=_b.z-_a.z,yaw=Math.atan2(dx,-dz),pit=Math.atan2(dy,Math.hypot(dx,dz)),cm=(window.UX&&UX.calm&&UX.calm())?.3:1;
  const ly=Math.max(-1.9,Math.min(1.9,LOOK.yaw)),sipK=V.sip!=null?Math.max(0,1-Math.abs((V.t-V.sip)-.9)/.9):0;
  S.indoor=!!v.indoor;
  if(v.walk){
    /* se puede caminar: mantén presionado para avanzar hacia donde miras; el joystick o deslizar gira. Al quedarte quieto vuelves a sentarte.
       Todo en coordenadas locales del lugar: límite (círculo r o rectángulo), y obstáculos redondos (holes) y rectangulares (boxes) */
    const w=v.walk;if(!V.w){V.w=[v.eye[0],v.eye[2]];V.up=w.up?0:1;V.idle=9}
    const hold=P.hold||P.key.up;V.vel+=((hold?(w.up?1.15:1.5):0)-V.vel)*Math.min(1,dt*3);V.hd+=((hold?IN.steer:0)+(P.key.r?1:0)-(P.key.l?1:0))*1.1*dt;
    const hy=yaw+V.hd-ly;_b.set(V.w[0],0,V.w[1]);v.ref.localToWorld(_b);_b.x+=Math.sin(hy)*V.vel*dt;_b.z-=Math.cos(hy)*V.vel*dt;v.ref.worldToLocal(_b);let x=_b.x,z=_b.z;
    for(let it=0;it<2;it++){
      if(w.r){const r=Math.hypot(x,z);if(r>w.r){x*=w.r/r;z*=w.r/r}}
      if(w.rect){x=Math.max(w.rect[0],Math.min(w.rect[1],x));z=Math.max(w.rect[2],Math.min(w.rect[3],z))}
      if(w.boxes)for(const [x0,x1,z0,z1] of w.boxes)if(x>x0&&x<x1&&z>z0&&z<z1){const d=[x-x0,x1-x,z-z0,z1-z],m=Math.min(...d);if(m===d[0])x=x0;else if(m===d[1])x=x1;else if(m===d[2])z=z0;else z=z1}
      if(w.path){const e=w.end;if(!(e&&Math.hypot(x-e[0],z-e[1])<=e[2])){let bd=1e9,bx=x,bz=z;for(let i=1;i<w.path.length;i++){const a=w.path[i-1],b=w.path[i],dx=b[0]-a[0],dz=b[1]-a[1],t=Math.max(0,Math.min(1,((x-a[0])*dx+(z-a[1])*dz)/(dx*dx+dz*dz))),qx=a[0]+dx*t,qz=a[1]+dz*t,dd=Math.hypot(x-qx,z-qz);if(dd<bd){bd=dd;bx=qx;bz=qz}}
        if(bd>w.pw){x=bx+(x-bx)/bd*w.pw;z=bz+(z-bz)/bd*w.pw}}}
      for(const [hx,hz,hr] of w.holes||[]){const ex=x-hx,ez=z-hz,r=Math.hypot(ex,ez)||1e-3;if(r<hr){x=hx+ex/r*hr;z=hz+ez/r*hr}}}
    V.w[0]=x;V.w[1]=z;V.idle=V.vel>.12?0:V.idle+dt;
    if(w.up)V.up+=((V.idle<2.5?1:0)-V.up)*Math.min(1,dt*1.8);
    V.bob+=V.vel*dt*2.4;_b.set(x,(w.yf?w.yf(x):v.eye[1])+(w.up||0)*V.up,z);v.ref.localToWorld(_b);if(w.ground)_b.y=H(_b.x,-_b.z)+w.ground;
    cam.position.set(_b.x,_b.y+(Math.sin(V.bob)*.045*Math.min(1,V.vel)+Math.sin(V.t*.8)*.01)*cm,_b.z);
    cam.rotation.set(pit*(w.up?1-.6*V.up:.6)+LOOK.pitch*.8-sipK*.14*(1-V.up*.3),-(yaw+V.hd)+ly,0,'YXZ');
  }else{
  cam.position.set(_a.x,_a.y+Math.sin(V.t*.8)*.012*cm,_a.z);
  cam.rotation.set(pit+LOOK.pitch*.8-sipK*.12,-yaw+ly,0,'YXZ');}
  if(Math.abs(cam.fov-66)>.05&&innerWidth/innerHeight>=1){cam.fov=66;cam.updateProjectionMatrix()}
}
try{window.__visit={enter:()=>enter(near),leave,act,swap,get v(){return V},get near(){return near}}}catch(e){}
