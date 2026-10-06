/* Diccionario es/en/ja por texto exacto (el texto fuente sigue en español) vía UX.add / UX.rx */
export function initI18n(){
  const ux=window.UX;
  ux.add([
    ['Cabaña del Acantilado','Cliffside Cabin','崖の上の小屋'],
    ['Una cabaña olvidada en lo alto de la montaña. Límpiala, repárala y enciende sus luces, sin prisa.','A forgotten cabin high up the mountain. Clean it, repair it and light its lamps, with no rush.','山の高みに忘れられた小屋。急がず、掃除して、直して、明かりをともしましょう。'],
    ['Arrastra el dedo o el mouse para lavar la suciedad.','Drag your finger or mouse to wash away the grime.','指やマウスをなぞって、汚れを洗い流しましょう。'],
    ['Al limpiar ganas tablas. Toca un objeto ya limpio para repararlo.','Cleaning earns you planks. Tap a clean object to repair it.','掃除すると板材が手に入ります。きれいになった物をタップして修理しましょう。'],
    ['Con auriculares el sonido es envolvente: el agua, las campanas y la lluvia suenan desde su lugar.','With headphones the sound is immersive: water, bells and rain come from where they are.','ヘッドホンなら立体的な音響です。水や鐘、雨の音がそれぞれの場所から聞こえます。'],
    ['El avance se guarda en este dispositivo.','Your progress is saved on this device.','進行状況はこの端末に保存されます。'],
    ['Tocar para empezar','Tap to start','タップしてはじめる'],
    ['Progreso de la cabaña','Cabin progress','小屋の進み具合'],
    ['Cabaña en un acantilado, de noche','A cabin on a cliff, at night','夜の崖の上の小屋'],
    ['Empieza limpiando el piso. Arrastra para lavar.','Start by cleaning the floor. Drag to wash.','まず床を掃除しましょう。なぞって洗います。'],
    ['Empieza limpiando el piso','Start by cleaning the floor','まず床を掃除しましょう'],
    ['Esencial','Essential','必須'],['Funcional','Functional','機能'],['Decoración','Decoration','飾り'],
    ['Colección','Collection','コレクション'],
    ['Vacía. Cada reparación te da un objeto.','Empty. Every repair gives you an item.','空っぽです。修理するたびにアイテムが手に入ります。'],
    ['Reparado','Repaired','修理済み'],
    ['Limpia más esa zona antes de repararla','Clean that area some more before repairing it','修理する前に、その場所をもう少し掃除しましょう'],
    ['Tu cabaña está lista. Buen trabajo.','Your cabin is ready. Nice work.','小屋が完成しました。よくできました。'],
    ['Cabaña reiniciada','Cabin restarted','小屋をリセットしました'],
    ['Menos de 2 h: aún no se ensucia','Less than 2 h: it does not get dirty yet','2時間未満: まだ汚れません'],
    ['Llevas un buen rato. Toma agua, suelta los hombros y respira hondo. El juego te espera.','You have been playing a while. Drink some water, relax your shoulders and breathe deeply. The game will wait.','ずいぶん遊びましたね。水を飲んで、肩の力を抜いて、深呼吸しましょう。ゲームは待っていてくれます。'],
    ['Detener','Stop','止める'],['Prepárate…','Get ready…','準備して…'],['Gracias por respirar','Thanks for breathing','呼吸してくれてありがとう'],
    ['Inhala por la nariz','Breathe in through your nose','鼻から息を吸って'],['Sostén un momento','Hold for a moment','少し止めて'],['Exhala despacio','Breathe out slowly','ゆっくり息を吐いて'],
    ['¿Seguro? Se borra el avance','Sure? Your progress will be erased','本当に？進行状況が消えます'],
    // subtítulos de ambiente
    ['Campanita de reparación','Repair chime','修理の鈴の音'],['Acorde suave','Soft chord','やわらかな和音'],['Farolillos al cielo','Lanterns rising','ランタンが空へ'],
    // zonas del deterioro por abandono
    ['el piso','the floor','床'],['la terraza y la escalera','the terrace and the stairs','テラスと階段'],['el interior','the interior','室内'],['el techo y los nichos','the roof and the niches','屋根と壁のくぼみ'],
  ]);
  /* Objetos reparables (nombre, y minúsculas porque nameOf() las usa dentro de frases) y recompensas con su efecto */
  [
    ['Piso','Floor','床'],['Escalera','Stairs','階段'],['Barandal','Railing','手すり'],['Techo','Roof','屋根'],['Panel solar','Solar panel','ソーラーパネル'],['Ventana','Window','窓'],
    ['Librero','Bookcase','本棚'],['Cama','Bed','ベッド'],['Lámpara del techo','Ceiling lamp','天井ランプ'],['Luces de cuerda','String lights','ストリングライト'],['Cuadro','Picture','絵'],['Plantas','Plants','観葉植物'],['Nichos de pared','Wall niches','壁のくぼみ'],
  ].forEach(r=>ux.add([r,[r[0].toLowerCase(),r[1].toLowerCase(),r[2]]]));
  ux.add([
    ['Cepillo ancho','Wide brush','幅広ブラシ'],['Limpias con un cepillo más grande','You scrub with a bigger brush','より大きなブラシで掃除できます'],
    ['Mochila de herramientas','Tool backpack','道具リュック'],['Ganas 10% más de tablas al limpiar','You earn 10% more planks when cleaning','掃除で板材が10%多く手に入ります'],
    ['Farol de mano','Hand lantern','手持ちランタン'],['Ilumina el área mientras limpias','Lights the area while you clean','掃除中にまわりを照らします'],
    ['Cubeta de lluvia','Rain bucket','雨水バケツ'],['Suena lluvia suave sobre el techo','Soft rain sounds on the roof','屋根にやさしい雨音が響きます'],
    ['Batería solar','Solar battery','ソーラーバッテリー'],['Energía guardada para la noche','Energy stored for the night','夜のために電力をためておきます'],
    ['Cortinas de lino','Linen curtains','麻のカーテン'],['Entra la luz de la luna','Moonlight comes in','月明かりが差し込みます'],
    ['Novela de montaña','Mountain novel','山の小説'],['Un libro para las noches','A book for the nights','夜のための一冊'],
    ['Manta tejida','Woven blanket','編みの毛布'],['Para las noches frías','For cold nights','寒い夜のために'],
    ['Foco cálido','Warm bulb','あたたかい電球'],['Una luz amplia sobre la cama','A wide light over the bed','ベッドの上を広く照らす光'],
    ['Bombillas de colores','Colored bulbs','カラー電球'],['Las luces se vuelven de colores','The lights turn colorful','明かりがカラフルになります'],
    ['Pincel de acuarela','Watercolor brush','水彩筆'],['Un recuerdo de la montaña','A memory of the mountain','山の思い出'],
    ['Semillas de lavanda','Lavender seeds','ラベンダーの種'],['Huele a campo','Smells like the countryside','野原の香りがします'],
    ['Luciérnagas en frasco','Fireflies in a jar','瓶の中のホタル'],['Más luciérnagas afuera','More fireflies outside','外のホタルが増えます'],
  ]);
  /* Textos con números o nombres interpolados */
  {
    const lst=(a,ix,tr)=>a.split(', ').map(tr).join(ix===1?', ':'、');
    ux.rx([
      [/^Tablas: (\d+)$/,(m,ix)=>ix===1?'Planks: '+m[1]:'板材: '+m[1]],
      [/^Listo · (\d+) tablas$/,(m,ix)=>ix===1?'Ready · '+m[1]+' planks':'準備OK · 板材'+m[1]+'枚'],
      [/^Limpia la zona · (\d+)%$/,(m,ix)=>(ix===1?'Clean the area · ':'場所を掃除 · ')+m[1]+'%'],
      [/^Faltan (\d+) tablas$/,(m,ix)=>ix===1?'Need '+m[1]+' more planks':'あと板材'+m[1]+'枚'],
      [/^Faltan (\d+) tablas\. Sigue limpiando\.$/,(m,ix)=>ix===1?'Need '+m[1]+' more planks. Keep cleaning.':'あと板材'+m[1]+'枚。掃除を続けましょう。'],
      [/^Necesita: (.+)$/,(m,ix,tr)=>(ix===1?'Needs: ':'必要: ')+lst(m[1],ix,tr)],
      [/^Primero repara: (.+)$/,(m,ix,tr)=>(ix===1?'Repair first: ':'先に修理: ')+lst(m[1],ix,tr)],
      [/^(.+) ya está reparado$/,(m,ix,tr)=>ix===1?'Already repaired: '+tr(m[1]):tr(m[1])+'はすでに修理済みです'],
      [/^(.+) reparado\. Ganaste: (.+)$/,(m,ix,tr)=>ix===1?tr(m[1])+' repaired. You got: '+tr(m[2]):tr(m[1])+'を修理しました。入手: '+tr(m[2])],
      [/^La cabaña estuvo sola (\d+) (h|días) y se ensució, empezando por el piso(?:\.| hasta (.+)\.)$/,(m,ix,tr)=>{
        const u=ix===1?(m[2]==='h'?' h':' days'):(m[2]==='h'?'時間':'日間'),z=m[3]?tr(m[3]):'';
        return ix===1?'The cabin was alone for '+m[1]+u+' and got dirty, starting with the floor'+(z?' and spreading to '+z:'')+'.'
          :'小屋は'+m[1]+u+'のあいだ留守になり、床から汚れはじめました'+(z?'。'+z+'まで広がっています':'')+'。';
      }],
    ]);
  }
}
