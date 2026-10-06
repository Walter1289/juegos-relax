/* i18n.js — diccionario es/en/ja de la cabaña: el texto fuente está en español y se traduce al vuelo con UX.add / UX.rx */
const NM=[['Piso','Floor','床'],['Escalera','Stairs','階段'],['Barandal','Railing','手すり'],['Techo','Roof','屋根'],['Panel solar','Solar panel','ソーラーパネル'],['Ventana','Window','窓'],['Librero','Bookshelf','本棚'],['Cama','Bed','ベッド'],['Lámpara del techo','Ceiling lamp','天井ランプ'],['Luces de cuerda','String lights','ライトの飾り'],['Cuadro','Painting','絵'],['Plantas','Plants','植物'],['Nichos de pared','Wall niches','壁のくぼみ']];
const RW=[['Cepillo ancho','Wide brush','幅広ブラシ'],['Limpias con un cepillo más grande','You clean with a bigger brush','大きなブラシで掃除できます'],
 ['Mochila de herramientas','Tool backpack','道具リュック'],['Ganas 10% más de tablas al limpiar','You earn 10% more planks when cleaning','掃除で得られる板が10%増えます'],
 ['Farol de mano','Hand lantern','手持ちランタン'],['Ilumina el área mientras limpias','Lights up the area while you clean','掃除中に周りを照らします'],
 ['Cubeta de lluvia','Rain bucket','雨のバケツ'],['Suena lluvia suave sobre el techo','Soft rain plays on the roof','屋根にやさしい雨音が響きます'],
 ['Batería solar','Solar battery','ソーラーバッテリー'],['Energía guardada para la noche','Energy stored for the night','夜のために蓄えた電力'],
 ['Cortinas de lino','Linen curtains','麻のカーテン'],['Entra la luz de la luna','Moonlight comes in','月の光が差し込みます'],
 ['Novela de montaña','Mountain novel','山の小説'],['Un libro para las noches','A book for the evenings','夜のための一冊'],
 ['Manta tejida','Woven blanket','手編みのブランケット'],['Para las noches frías','For cold nights','寒い夜のために'],
 ['Foco cálido','Warm bulb','あたたかい電球'],['Una luz amplia sobre la cama','A broad light over the bed','ベッドを広く照らす光'],
 ['Bombillas de colores','Colored bulbs','カラフルな電球'],['Las luces se vuelven de colores','The lights turn colorful','ライトが色とりどりになります'],
 ['Pincel de acuarela','Watercolor brush','水彩の筆'],['Un recuerdo de la montaña','A memory of the mountain','山の思い出'],
 ['Semillas de lavanda','Lavender seeds','ラベンダーの種'],['Huele a campo','Smells like the countryside','野原の香りがします'],
 ['Luciérnagas en frasco','Fireflies in a jar','瓶の中のホタル'],['Más luciérnagas afuera','More fireflies outside','外にもっとホタルが飛びます']];
const ZN=[['el piso','the floor','床'],['la terraza y la escalera','the terrace and the stairs','テラスと階段'],['el interior','the interior','室内'],['el techo y los nichos','the roof and the niches','屋根と壁のくぼみ']];
UX.add(NM);UX.add(RW);UX.add(ZN);
UX.add([
 ['Cabaña 3D','Cabin 3D','キャビン 3D'],['prototipo','prototype','プロトタイプ'],['Cabaña 3D · prototipo','Cabin 3D · prototype','キャビン 3D · プロトタイプ'],
 ['Una cabaña de madera y piedra en lo alto de un acantilado, de noche. Límpiala y repárala poco a poco, sin prisa.','A cabin of wood and stone high on a cliff, at night. Clean and repair it little by little, with no rush.','崖の上にたたずむ、木と石の小さな小屋。夜の静けさの中、急がず少しずつ掃除して直していきましょう。'],
 ['Arrastra sobre la suciedad para fregarla y ganar tablas.','Drag over the grime to scrub it and earn planks.','汚れの上をなぞってこすり、板を集めましょう。'],
 ['Toca un objeto limpio (o su botón de abajo) para repararlo.','Tap a clean object (or its button below) to repair it.','きれいになったものをタップ（または下のボタン）で修理します。'],
 ['Arrastra el fondo para girar; pellizca o usa la rueda para acercar.','Drag the background to rotate; pinch or use the wheel to zoom.','背景をドラッグで回転、ピンチやホイールでズームします。'],
 ['Mejor con auriculares. Tu avance se guarda en este dispositivo.','Best with headphones. Your progress is saved on this device.','ヘッドホン推奨。進み具合はこの端末に保存されます。'],
 ['Entrar a la cabaña','Enter the cabin','小屋に入る'],['← Menú','← Menu','← メニュー'],
 ['Arrastra sobre la suciedad para limpiar · arrastra el fondo para girar · pellizca para acercar','Drag over the grime to clean · drag the background to rotate · pinch to zoom','汚れをなぞって掃除 · 背景をドラッグで回転 · ピンチでズーム'],
 ['Inhala','Inhale','吸って'],['Gracias por respirar','Thank you for breathing','呼吸してくれてありがとう'],['Sostén','Hold','止めて'],['Exhala','Exhale','吐いて'],
 ['Acercar','Zoom in','ズームイン'],['Alejar','Zoom out','ズームアウト'],['Centrar vista','Center view','視点を戻す'],
 ['Esencial','Essential','必須'],['Funcional','Functional','機能'],['Decoración','Decoration','飾り'],['Colección','Collection','コレクション'],
 ['Vacía. Cada reparación te da un objeto.','Empty. Every repair gives you an item.','空っぽ。修理するたびにアイテムがもらえます。'],
 ['Reparado','Repaired','修理済み'],
 ['Tu cabaña está lista. Buen trabajo.','Your cabin is ready. Nice work.','小屋が完成しました。よくできました。'],
 ['Limpia más esa zona antes de repararla','Clean that area more before repairing it','修理する前に、もう少しその場所を掃除しましょう'],
 ['Ronronea…','Purring…','ゴロゴロ…'],['Cabaña reiniciada','Cabin reset','小屋をリセットしました'],
 ['Llevas un buen rato aquí: respira hondo y estira un poco los hombros.','You have been here a while: take a deep breath and stretch your shoulders a little.','しばらく遊んでいますね。深呼吸して、肩を軽く伸ばしましょう。'],
 ['¿Reiniciar la cabaña desde cero?','Restart the cabin from scratch?','小屋を最初からやり直しますか？'],
 ['Los farolillos suben al cielo','Lanterns drift up into the sky','ランタンが夜空へ昇っていきます'],
 // subtítulos de ambiente propios de la cabaña
 ['Campanita','Little bell','小さな鈴'],['Lluvia en el techo','Rain on the roof','屋根の雨音'],['Croar de ranas','Frogs croaking','カエルの鳴き声'],['Murmullo de agua','Water murmur','水のせせらぎ'],['Maullido suave','Soft meow','やさしい鳴き声'],
]);
const lcn=(x,i)=>{const r=LCN.get(x);return r?r[i]:x};
const LCN=new Map(NM.concat(ZN).map(r=>[r[0].toLowerCase(),[r[0],r[1].toLowerCase(),r[2]]]));
const lst=(m,i)=>m.split(', ').map(x=>lcn(x,i)).join(i===1?', ':'、');
UX.rx([
 [/^Tablas: (\d+)$/,(m,i)=>i===1?'Planks: '+m[1]:'板: '+m[1]],
 [/^Necesita: (.+)$/,(m,i)=>(i===1?'Needs: ':'必要: ')+lst(m[1],i)],
 [/^Limpia la zona · (\d+)%$/,(m,i)=>(i===1?'Clean the area · ':'エリアを掃除 · ')+m[1]+'%'],
 [/^Faltan (\d+) tablas$/,(m,i)=>i===1?m[1]+' more planks needed':'あと板'+m[1]+'枚'],
 [/^Listo · (\d+) tablas$/,(m,i)=>i===1?'Ready · '+m[1]+' planks':'準備OK · 板'+m[1]+'枚'],
 [/^Faltan (\d+) tablas\. Sigue limpiando\.$/,(m,i)=>i===1?m[1]+' more planks needed. Keep cleaning.':'あと板'+m[1]+'枚。掃除を続けましょう。'],
 [/^Primero repara: (.+)$/,(m,i)=>(i===1?'Repair first: ':'先に修理: ')+lst(m[1],i)],
 [/^(.+) reparado\. Ganaste: (.+)$/,(m,i,tr)=>i===1?tr(m[1])+' repaired. You got: '+tr(m[2]):tr(m[1])+'を修理しました。獲得: '+tr(m[2])],
 [/^(.+) ya está reparado$/,(m,i,tr)=>i===1?tr(m[1])+' is already repaired':tr(m[1])+'はもう修理済みです'],
 [/^Siguiente: (repara|limpia) (.+?)( \(toca su botón\))?$/,(m,i)=>{const rp=m[1]==='repara',n=lcn(m[2],i);
   return i===1?'Next: '+(rp?'repair':'clean')+' the '+n+(m[3]?' (tap its button)':''):'次: '+n+'を'+(rp?'修理':'掃除')+(m[3]?'（ボタンをタップ）':'')}],
 [/^Mientras no estabas, la humedad volvió a ensuciar (.+)$/,(m,i)=>{const z=lcn(m[1],i);return i===1?'While you were away, damp dirtied '+z+' again.':'留守のあいだに湿気で、'+z+'がまた汚れてしまいました。'}],
]);
try{document.title=UX.tr(document.title)}catch(e){}
