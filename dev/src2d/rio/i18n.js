/* i18n.js — idiomas es/en/ja: carga ux.js (window.UX), registra el diccionario del juego y arranca la traducción del DOM */
import '../../rio3d-src/ux.js';

const UX=window.UX;   // definido por el efecto lateral de ux.js

/* El texto fuente es español y se traduce al vuelo por diccionario (UX.add / UX.rx) */
export function setupI18n(){
  UX.add([
    ['Río de Linternas','River of Lanterns','ランタンの川'],['Distancia','Distance','距離'],['Linternas','Lanterns','ランタン'],['Lugares','Places','場所'],['Diario','Journal','日記'],['Detener','Stop','やめる'],
    ['Una canoa baja por un río tranquilo al atardecer','A canoe drifts down a quiet river at dusk','夕暮れの静かな川をカヌーが下っていきます'],
    ['La corriente te lleva. Mantén presionado y mueve el dedo o el mouse para guiar.','The current carries you. Press and hold, then move your finger or mouse to steer.','流れが運んでくれます。長押ししたまま指かマウスを動かして操作します。'],
    ['Una canoa, un río tranquilo y la noche que se acerca. No hay prisa ni final: deja que el agua te lleve.','A canoe, a quiet river and the night drawing near. There is no rush and no end: let the water carry you.','カヌーと静かな川、そして近づいてくる夜。急ぐ必要も終わりもありません。水の流れに身をまかせましょう。'],
    ['La corriente te lleva sola. Mantén presionado y mueve el dedo hacia donde quieras ir.','The current carries you on its own. Press and hold, then move your finger where you want to go.','流れが自然に運んでくれます。長押しして、行きたい方向へ指を動かしてください。'],
    ['Toca las linternas flotantes con la canoa para encenderlas.','Touch the floating lanterns with your canoe to light them.','浮かんでいるランタンにカヌーで触れると、火が灯ります。'],
    ['Con auriculares el sonido es envolvente: el agua, las campanas y la lluvia suenan desde su lugar.','With headphones the sound is immersive: the water, the bells and the rain come from where they are.','ヘッドホンなら立体音響で楽しめます。水、鐘、雨の音がそれぞれの場所から聞こえます。'],
    ['En teclado: flechas o A y D para guiar.','On a keyboard: arrow keys or A and D to steer.','キーボードでは、矢印キーまたは A と D で操作します。'],
    ['Tocar para empezar','Tap to start','タップして始める'],
    ['El río vuelve a empezar','The river begins again','川が最初から始まります'],['Bienvenido de vuelta al río','Welcome back to the river','おかえりなさい、川へ'],['Deja que la corriente te lleve','Let the current carry you','流れに身をまかせましょう'],
    ['Llevas un buen rato. Toma agua, suelta los hombros y respira hondo. El juego te espera.','You have been playing for a while. Drink some water, relax your shoulders and take a deep breath. The game will wait for you.','しばらく遊んでいますね。水を飲んで、肩の力を抜いて、深呼吸しましょう。ゲームは待っています。'],
    ['Empieza una llovizna suave','A soft drizzle begins','やさしい霧雨が降りはじめました'],
    ['Festival de linternas: la aldea celebra esta noche','Lantern festival: the village celebrates tonight','ランタン祭り：今夜、村がお祝いしています'],
    ['¿Seguro? Se borra el avance','Sure? Your progress will be erased','本当によいですか？進行状況が消えます'],
    ['Prepárate…','Get ready…','準備して…'],['Inhala por la nariz','Breathe in through your nose','鼻からゆっくり吸って'],['Sostén un momento','Hold for a moment','少し止めて'],['Exhala despacio','Breathe out slowly','ゆっくり吐いて'],['Gracias por respirar','Thank you for breathing','呼吸にお付き合いありがとう'],
    ['Melodía de descubrimiento','Discovery melody','発見のメロディ'],
    ['Puente de madera','Wooden bridge','木の橋'],['Torii sobre el agua','Torii over the water','水上の鳥居'],['Aldea de farolillos','Lantern village','ちょうちんの村'],['Jardín de sakura','Sakura garden','桜の庭'],['Cañaveral de las garzas','Heron reedbed','サギの葦原'],
    ['Templo de la campana','Bell temple','鐘の寺'],['Cascadita de musgo','Mossy waterfall','苔の小さな滝'],['Casa de té','Tea house','茶屋'],['Bosque de bambú','Bamboo forest','竹林'],['Estanque de lotos','Lotus pond','蓮の池'],
  ]);
  UX.rx([
    [/^Siguiente: (.+) en (\d+) m$/,(m,i,tr)=>i===1?'Next: '+tr(m[1])+' in '+m[2]+' m':'次：'+tr(m[1])+'（あと'+m[2]+' m）'],
    [/^Descubriste: (.+)$/,(m,i,tr)=>i===1?'You discovered: '+tr(m[1]):'発見：'+tr(m[1])],
  ]);
  document.title=UX.tr(document.title);
}
/* Al final del arranque: traduce el DOM actual (incluido el menú «Más» y la pausa) y observa los cambios */
export function startI18n(){UX.init()}
