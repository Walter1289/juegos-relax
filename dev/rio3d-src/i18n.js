/* Idiomas: el texto fuente está en español; en inglés/japonés se traduce por diccionario al vuelo (incluye textos dinámicos). */
const K=['es','en','ja'];
let LG='es';
try{const s=localStorage.getItem('rio3d-lang');LG=K.includes(s)?s:'es'}catch(e){}
export const lang=()=>LG;
export const setLang=v=>{try{localStorage.setItem('rio3d-lang',v)}catch(e){}};
// [es, en, ja]
const D=[
['← Menú','← Menu','← メニュー'],['Linternas','Lanterns','ランタン'],['m · Lugares','m · Places','m · 場所'],
['Vista 1ª','View 1st','一人称'],['Vista 3ª','View 3rd','三人称'],['Más','More','その他'],['Pausa','Pause','一時停止'],['Continuar','Resume','再開'],
['Foto','Photo','写真'],['Diario','Journal','日記'],['Ajustes','Settings','設定'],['Reiniciar','Restart','最初から'],['Sonido: sí','Sound: on','音: オン'],['Sonido: no','Sound: off','音: オフ'],
['Amanecer','Dawn','夜明け'],['Día','Day','昼'],['Atardecer','Dusk','夕暮れ'],['Noche','Night','夜'],['Madrugada','Predawn','明け方'],
['La corriente te lleva · mantén presionado y desliza a los lados para dirigir','The current carries you · press and slide sideways to steer','流れに身をまかせて · 長押ししたまま左右にスライドして操作'],
['Navega por un río de niebla, en primera o tercera persona. Sin prisa y sin puntaje: la corriente te lleva y tú solo diriges la canoa.','Drift down a misty river in first or third person. No rush, no score: the current carries you and you just steer the canoe.','霧の川を一人称または三人称で進みます。急ぐ必要も得点もありません。流れが運んでくれるので、カヌーの向きだけ操作してください。'],
['Dirigir:','Steer:','操作:'],['mantén presionado y mueve el dedo o el ratón a los lados (o usa las flechas A / D).','press and move your finger or mouse sideways (or use the A / D arrow keys).','長押ししたまま指やマウスを左右に動かします（A / D キーも使えます）。'],
['Mejor con auriculares: el sonido es espacial.','Best with headphones: the sound is spatial.','ヘッドホン推奨：立体音響です。'],
['Entrar al río','Enter the river','川に入る'],['Empezar desde el principio','Start from the beginning','最初から始める'],
['Tono suave','Soft tone','やわらかい音'],['Suaviza los sonidos agudos','Softens high-pitched sounds','高い音をやわらげます'],['Dormir','Sleep','おやすみ'],['Baja el sonido y la luz poco a poco','Gradually lowers sound and light','音と明かりを少しずつ下げます'],['Castillo de la Garza Blanca','White Heron Castle','白鷺城'],['Rugido del dragón','Dragon roar','竜の咆哮'],['El dragón anuncia el Castillo de la Garza Blanca','The dragon heralds White Heron Castle','竜が白鷺城の到来を告げます'],['Puente de madera','Wooden bridge','木の橋'],['Torii sobre el agua','Torii over the water','水上の鳥居'],['Aldea de farolillos','Lantern village','ちょうちんの村'],['Jardín de sakura','Sakura garden','桜の庭'],['Cañaveral de las garzas','Heron reedbed','サギの葦原'],
['Templo de la campana','Bell temple','鐘の寺'],['Cascadita de musgo','Mossy waterfall','苔の小さな滝'],['Casa de té','Tea house','茶屋'],['Bosque de bambú','Bamboo forest','竹林'],['Estanque de lotos','Lotus pond','蓮の池'],
['Jardín de hortensias','Hydrangea garden','あじさいの庭'],['Jardín de arces','Maple garden','もみじの庭'],['Jardín de ciruelos','Plum garden','梅の庭'],
['Primavera','Spring','春'],['Verano','Summer','夏'],['Otoño','Autumn','秋'],['Invierno','Winter','冬'],
['Cada linterna es una nota. Sigue el río a tu ritmo.','Every lantern is a note. Follow the river at your own pace.','ランタンはひとつひとつが音です。自分のペースで川を進みましょう。'],
['De vuelta al inicio del río','Back at the start of the river','川の始まりに戻りました'],['Empieza una llovizna suave','A soft drizzle begins','やさしい霧雨が降りはじめました'],
['Las garzas alzan el vuelo a tu paso','Herons take flight as you pass','通り過ぎるとサギが飛び立ちます'],['Llevas un buen rato en el río: respira hondo y estira un poco los hombros.','You have been on the river a while: breathe deeply and stretch your shoulders.','しばらく川にいますね。深呼吸して、肩を少しのばしましょう。'],
['Los peces se acercan a nadar contigo','Fish swim up to keep you company','魚が寄ってきて一緒に泳ぎます'],['Un pato decide acompañarte','A duck decides to join you','カモがついてきます'],['Una libélula se posó en la proa de tu canoa','A dragonfly landed on the bow of your canoe','トンボがカヌーの船首にとまりました'],
['Festival de linternas: la aldea celebra esta noche','Lantern festival: the village celebrates tonight','ランタン祭り：今夜、村がお祝いしています'],
['Arrastra para mirar · pellizca para acercar','Drag to look · pinch to zoom','ドラッグで見回す · ピンチで拡大'],
['Aún por descubrir','Yet to discover','未発見'],['Sigue río abajo','Keep going downstream','川を下りましょう'],['Vuelve a pasar para fotografiarlo','Pass by again to photograph it','もう一度通って撮影しましょう'],
['Las luces sobre el agua son linternas: pasa cerca para recogerlas','The lights on the water are lanterns: pass close to collect them','水面の光はランタンです。近づくと集められます'],
['Mantén presionado y desliza a los lados para dirigir la canoa','Press and slide sideways to steer the canoe','長押ししたまま左右にスライドしてカヌーを操作します'],
['Con Foto puedes guardar un momento; con Diario ves tus lugares','Use Photo to keep a moment; use Journal to see your places','「写真」で瞬間を残し、「日記」で訪れた場所を見られます'],
['Tu linterna se queda aquí. Vuelve otro día y la encontrarás encendida.','Your lantern stays here. Come back another day and you will find it lit.','ランタンはここに残ります。また来れば灯ったままです。'],
['Salir de foto','Exit photo','撮影を終了'],['Sin filtro','No filter','フィルターなし'],['Natural','Natural','ナチュラル'],['Cálido','Warm','暖色'],['Bruma','Mist','霧'],['Tinta','Ink','水墨'],['Noche azul','Blue night','青い夜'],
['Hora','Time','時刻'],['Zoom','Zoom','ズーム'],['Vista','View','視点'],['Marco','Frame','フレーム'],['Cerrar','Close','閉じる'],['Diario del río','River journal','川の日記'],
['¿Volver al inicio del río?','Go back to the start of the river?','川の始まりに戻りますか？'],['Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.','You return to the wooden bridge. You keep your journal, your photos and the lanterns you released.','木の橋に戻ります。日記、写真、流したランタンはそのまま残ります。'],
['Cancelar','Cancel','キャンセル'],['Reiniciar recorrido','Restart the trip','最初からやり直す'],
['Calidad','Quality','画質'],['Automática','Automatic','自動'],['Alta','High','高'],['Media','Medium','中'],['Baja (más fluida)','Low (smoother)','低（なめらか）'],['Volumen','Volume','音量'],
['Estación','Season','季節'],['Cambiarla recarga el río','Changing it reloads the river','変更すると川を読み込み直します'],['Según la fecha','By date','日付に合わせる'],['Fija','Fixed','固定'],
['Idioma','Language','言語'],['Subtítulos de ambiente','Ambient captions','環境音の字幕'],['Describe los sonidos con texto','Describes sounds as text','音を文字で表示します'],
['Vibración suave','Gentle vibration','やさしい振動'],['Si tu dispositivo la permite','If your device supports it','対応している端末のみ'],['Modo una mano','One-hand mode','片手モード'],['Botones al alcance del pulgar','Buttons within thumb reach','親指が届く位置にボタンを配置'],
['No','Off','オフ'],['Sí','On','オン'],['Derecha','Right','右'],['Izquierda','Left','左'],
['Flauta shakuhachi','Shakuhachi flute','尺八'],['Campanillas','Wind chimes','鈴の音'],['Koto','Koto','琴'],['Campana de templo','Temple bell','寺の鐘'],['Tambor lejano','Distant drum','遠くの太鼓'],
['Cuac de pato','Duck quack','カモの鳴き声'],['Aleteo de garza','Heron wingbeats','サギの羽ばたき'],['Golpe suave de la canoa','Soft knock on the canoe','カヌーが軽くぶつかる音'],['Salpicadura','Splash','水しぶき'],['Fuegos artificiales','Fireworks','花火'],['Nota de linterna','Lantern note','ランタンの音'],['Cascada cercana','Waterfall nearby','近くの滝の音'],['Lluvia suave','Soft rain','やさしい雨音'],
['Menos movimiento y destellos','Less motion and flashes','動きと光を控える'],['Sin cámaras largas, destellos ni balanceo fuerte','No long camera moves, flashes or strong sway','長いカメラ移動・光・強い揺れをなくします'],['Acerca de','About','このゲームについて'],['Privacidad, datos y créditos','Privacy, data and credits','プライバシー・データ・クレジット'],['Abrir','Open','開く'],
['Botones de dirección','Steering buttons','操作ボタン'],['Alternativa a arrastrar','An alternative to dragging','ドラッグの代わり'],['Girar a la izquierda','Turn left','左へ曲がる'],['Girar a la derecha','Turn right','右へ曲がる'],['Remar','Paddle','こぐ'],['Dirección','Steering','操作'],
];
const MAP=new Map(D.map(r=>[r[0],r]));
const ix=LG==='en'?1:2;
const mon={en:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']};
const RX=[
 [/^Siguiente: (.+) en (\d+) m$/,(m)=>LG==='en'?`Next: ${tr(m[1])} in ${m[2]} m`:`次: ${tr(m[1])}（あと${m[2]} m）`],
 [/^Descubriste: (.+)$/,(m)=>LG==='en'?`You discovered: ${tr(m[1])}`:`発見：${tr(m[1])}`],
 [/^Continuar \((\d+) m\)$/,(m)=>LG==='en'?`Continue (${m[1]} m)`:`続ける（${m[1]} m）`],
 [/^Soltar linterna \((\d+)\)$/,(m)=>LG==='en'?`Release lantern (${m[1]})`:`ランタンを流す（${m[1]}）`],
 [/^Auto \(ahora ([\d.]+)×\)$/,(m)=>LG==='en'?`Auto (now ${m[1]}×)`:`自動（現在 ${m[1]}×）`],
 [/^(\d+)\/(\d+) lugares · (.+) · llegaste hasta (\d+) m · linternas soltadas: (\d+)$/,(m)=>LG==='en'?`${m[1]}/${m[2]} places · ${tr(m[3])} · you reached ${m[4]} m · lanterns released: ${m[5]}`:`${m[1]}/${m[2]}か所 · ${tr(m[3])} · 到達 ${m[4]} m · 流したランタン: ${m[5]}`],
 [/^Linternas dejadas: (\d+)$/,(m)=>LG==='en'?`Lanterns left here: ${m[1]}`:`ここに残したランタン: ${m[1]}`],
 [/^Tu linterna del (.+)$/,(m)=>LG==='en'?`Your lantern from ${m[1]}`:`${m[1]}のランタン`],
];
export function tr(s){
  if(LG==='es'||typeof s!=='string')return s;
  const t=s.trim();if(!t)return s;
  const r=MAP.get(t);if(r){return s.replace(t,r[ix])}
  for(const [re,f] of RX){const m=t.match(re);if(m)return s.replace(t,f(m))}
  return s;
}
function walk(n){
  if(n.nodeType===3){const v=tr(n.nodeValue);if(v!==n.nodeValue)n.nodeValue=v;return}
  if(n.nodeType!==1||n.tagName==='SCRIPT'||n.tagName==='STYLE')return;
  if(n.placeholder)n.placeholder=tr(n.placeholder);
  const al=n.getAttribute&&n.getAttribute('aria-label');if(al){const v=tr(al);if(v!==al)n.setAttribute('aria-label',v)}
  for(const c of n.childNodes)walk(c);
}
export function initI18n(){
  if(LG==='es')return;
  document.documentElement.lang=LG;
  walk(document.body);
  new MutationObserver(ms=>{for(const m of ms){if(m.type==='characterData')walk(m.target);else m.addedNodes.forEach(walk)}}).observe(document.body,{childList:true,subtree:true,characterData:true});
}
