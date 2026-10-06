/* Datos compartidos del modo Habitar (Cabaña 2D y 3D): catálogo, visitantes y traducciones es/en/ja. */
export const DM=[
  ['helecho','suelo','Helecho en maceta',2],['lavanda','suelo','Lavanda',2],['farolpapel','suelo','Farol de papel',3],['tetera','suelo','Tetera humeante',3],['banquito','suelo','Banquito con manta',4],['libros','suelo','Libros con vela',4],
  ['campanilla','colgante','Campanilla de viento',3],['atrapa','colgante','Atrapasueños',3],['estrellas','colgante','Móvil de estrellas',4],['farolillos','colgante','Farolillos de papel',3],
  ['reloj','pared','Reloj de pared',3],['guitarra','pared','Guitarra',4],['estantito','pared','Estantito con frascos',3],['mapa','pared','Mapa de la montaña',2],
  ['mojon','roca','Mojón de piedras',2],['farolpiedra','roca','Farol de piedra',3],['floresroca','roca','Flores de roca',2],
].map(([id,kind,name,cost])=>({id,kind,name,cost}));
export const VN={
  gato:{name:'Un gato',gift:'banquito',notes:['Este gato no es de nadie, pero se sienta justo donde Mara dejaba su silla.','Ronronea cuando la lámpara está encendida. Dicen que Mara hacía lo mismo.']},
  zorro:{name:'Un zorro',gift:'mojon',notes:['Un zorro curioso olfatea tus escalones. Alguien le dejaba pan aquí cada tarde.','Deja una piedra pulida junto a la puerta. Parece un regalo.']},
  buho:{name:'Un búho',gift:'reloj',notes:['El búho vigila el barandal. Mara lo llamaba «el capataz».','Ulula suave. Del otro lado de la montaña, otro le responde.']},
  mariposa:{name:'Una mariposa lunar',gift:'lavanda',notes:['Una mariposa lunar descansa en tu cabaña. Solo vuelan de noche, como los mapas de Mara.','Sus alas dibujan líneas parecidas a un mapa de la montaña.']},
};
export function addHabTexts(ux){
  const P=[
    ['Habitar','Settle in','暮らす'],['Volver a reparar','Back to repairs','修理にもどる'],['Recuerdos','Keepsakes','思い出'],['Preparar té','Make tea','お茶をいれる'],['Regar plantas','Water plants','植物に水をやる'],['Diario de la cabaña','Cabin journal','小屋の日記'],
    ['Toca un círculo de la cabaña para decorar ese lugar.','Tap a circle in the cabin to decorate that spot.','小屋の丸をタップして、その場所を飾りましょう。'],['Quitar','Remove','はずす'],['Colocar','Place','置く'],['Comprar con recuerdos','Buy with keepsakes','思い出で買う'],['Cerrar','Close','閉じる'],
    ['Aún vacío. Los visitantes dejan notas sobre quien vivió aquí.','Still empty. Visitors leave notes about whoever lived here.','まだ空っぽです。訪れた生き物が、ここに住んでいた人の話を残してくれます。'],
    ['Porche','Porch','ポーチ'],['Junto a la ventana','By the window','窓のそば'],['Porche, junto al barandal','Porch, by the railing','ポーチの手すりのそば'],['Alero','Eaves','軒下'],['Pared','Wall','壁'],['Mirador de roca','Rock lookout','岩の展望台'],
    ['Helecho en maceta','Potted fern','鉢植えのシダ'],['Lavanda','Lavender','ラベンダー'],['Farol de papel','Paper lantern','紙ちょうちん'],['Tetera humeante','Steaming teapot','湯気の立つ急須'],['Banquito con manta','Stool with blanket','ブランケットのスツール'],['Libros con vela','Books with a candle','ろうそくと本'],
    ['Campanilla de viento','Wind chime','風鈴'],['Atrapasueños','Dreamcatcher','ドリームキャッチャー'],['Móvil de estrellas','Star mobile','星のモビール'],['Farolillos de papel','Paper lanterns','紙のランタン'],
    ['Reloj de pared','Wall clock','壁掛け時計'],['Guitarra','Guitar','ギター'],['Estantito con frascos','Little shelf with jars','瓶を並べた小さな棚'],['Mapa de la montaña','Mountain map','山の地図'],
    ['Mojón de piedras','Stone cairn','石積み'],['Farol de piedra','Stone lantern','石灯籠'],['Flores de roca','Rock flowers','岩の花'],
    ['Llega un visitante','A visitor arrives','訪問者が来ました'],['Campanilla de viento','Wind chime','風鈴'],['Tetera','Teapot','急須'],
    ['Preparas té. El vapor sube despacio. Qué calma.','You make tea. The steam rises slowly. How calming.','お茶をいれます。湯気がゆっくり昇ります。落ち着きますね。'],
    ['Primero repara las plantas','Repair the plants first','先に植物を直しましょう'],['Riegas las plantas. Huelen a campo.','You water the plants. They smell like the countryside.','植物に水をやります。野原の香りがします。'],
    ['Te dejó: ','He left you: ','贈り物: '],
    ['La cabaña ya se puede habitar: toca «Habitar»','The cabin is ready to live in: tap “Settle in”','小屋に暮らせるようになりました。「暮らす」をタップ'],
    ['Este gato no es de nadie, pero se sienta justo donde Mara dejaba su silla.','This cat belongs to no one, but sits right where Mara used to leave her chair.','この猫は誰のものでもありませんが、マラが椅子を置いていた場所にちょこんと座ります。'],
    ['Ronronea cuando la lámpara está encendida. Dicen que Mara hacía lo mismo.','It purrs when the lamp is on. They say Mara did the same.','ランプがともると喉を鳴らします。マラもそうだったそうです。'],
    ['Un zorro curioso olfatea tus escalones. Alguien le dejaba pan aquí cada tarde.','A curious fox sniffs at your steps. Someone used to leave it bread here every evening.','好奇心旺盛なキツネが階段のにおいをかぎます。毎夕、誰かがここにパンを置いていました。'],
    ['Deja una piedra pulida junto a la puerta. Parece un regalo.','It leaves a polished stone by the door. It looks like a gift.','戸口にみがかれた石を置いていきました。贈り物のようです。'],
    ['El búho vigila el barandal. Mara lo llamaba «el capataz».','The owl watches over the railing. Mara called him “the foreman”.','フクロウが手すりを見張っています。マラは「現場監督」と呼んでいました。'],
    ['Ulula suave. Del otro lado de la montaña, otro le responde.','It hoots softly. From the far side of the mountain, another answers.','やさしく鳴くと、山の向こうからもう一羽が答えます。'],
    ['Una mariposa lunar descansa en tu cabaña. Solo vuelan de noche, como los mapas de Mara.','A luna moth rests in your cabin. They only fly at night, like Mara’s maps.','オナガミズアオが小屋で休んでいます。夜にしか飛ばない、マラの地図のような蛾です。'],
    ['Sus alas dibujan líneas parecidas a un mapa de la montaña.','Its wings trace lines like a map of the mountain.','その羽の模様は、山の地図のようです。'],
    ['Te faltan ','You are short by ','足りません: '],
    ['Un visitante deja una nota: ','A visitor leaves a note: ','訪問者がメモを残しました: '],
  ];
  ux.add(P);
  ux.rx([
    [/^(.+) · (\d+)$/,(m,ix,tr)=>tr(m[1])+' · '+m[2]],
    [/^Recuerdos: (\d+)$/,(m,ix)=>(ix===1?'Keepsakes: ':'思い出: ')+m[1]],
    [/^(.+) · (\d+) s$/,(m,ix,tr)=>tr(m[1])+' · '+m[2]+' s'],
    [/^(.+) colocado$/,(m,ix,tr)=>ix===1?tr(m[1])+' placed':tr(m[1])+'を置きました'],
    [/^Te faltan (\d+) recuerdos\. Prepara té o espera visitas\.$/,(m,ix)=>ix===1?'You need '+m[1]+' more keepsakes. Make tea or wait for visitors.':'思い出があと'+m[1]+'個必要です。お茶をいれるか、訪問者を待ちましょう。'],
    [/^(.+) · Te dejó: (.+)$/,(m,ix,tr)=>tr(m[1])+' · '+(ix===1?'He left you: ':'贈り物: ')+tr(m[2])],
  ]);
}
