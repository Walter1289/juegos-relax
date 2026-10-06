/* Datos de objetos reparables: árbol de reparaciones, recompensas, zonas de toque */
/* Árbol de reparaciones: de lo indispensable a lo decorativo. needs = reparaciones previas. reward = [nombre, efecto]; rects = zona de toque y de medición de limpieza. */
export const TIERS=['Esencial','Funcional','Decoración'];
export const ITEMS=[
  {id:'piso',tier:0,name:'Piso',cost:10,rects:[[215,495,690,72]],reward:['Cepillo ancho','Limpias con un cepillo más grande']},
  {id:'escalera',tier:0,name:'Escalera',cost:14,needs:['piso'],rects:[[0,540,230,185]],reward:['Mochila de herramientas','Ganas 10% más de tablas al limpiar']},
  {id:'barandal',tier:0,name:'Barandal',cost:14,needs:['piso'],rects:[[770,424,145,100]],reward:['Farol de mano','Ilumina el área mientras limpias']},
  {id:'techo',tier:0,name:'Techo',cost:24,needs:['piso'],rects:[[200,160,610,105]],reward:['Cubeta de lluvia','Suena lluvia suave sobre el techo']},
  {id:'panel',tier:1,name:'Panel solar',cost:20,needs:['techo'],rects:[[550,130,140,75]],reward:['Batería solar','Energía guardada para la noche']},
  {id:'ventana',tier:1,name:'Ventana',cost:16,needs:['techo'],rects:[[610,280,145,170]],reward:['Cortinas de lino','Entra la luz de la luna']},
  {id:'librero',tier:1,name:'Librero',cost:14,needs:['piso'],rects:[[262,272,115,250]],reward:['Novela de montaña','Un libro para las noches']},
  {id:'cama',tier:1,name:'Cama',cost:14,needs:['techo'],rects:[[385,415,225,108]],reward:['Manta tejida','Para las noches frías']},
  {id:'lampara',tier:2,name:'Lámpara del techo',cost:10,needs:['panel'],rects:[[480,300,50,50]],reward:['Foco cálido','Una luz amplia sobre la cama']},
  {id:'luces',tier:2,name:'Luces de cuerda',cost:14,needs:['panel','barandal'],rects:[[812,262,100,175]],reward:['Bombillas de colores','Las luces se vuelven de colores']},
  {id:'cuadro',tier:2,name:'Cuadro',cost:10,needs:['librero'],rects:[[395,285,95,75]],reward:['Pincel de acuarela','Un recuerdo de la montaña']},
  {id:'plantas',tier:2,name:'Plantas',cost:8,needs:['barandal'],rects:[[742,440,52,82]],reward:['Semillas de lavanda','Huele a campo']},
  {id:'nichos',tier:2,name:'Nichos de pared',cost:12,needs:['lampara'],rects:[[33,78,124,124],[62,272,116,116],[14,464,112,112]],reward:['Luciérnagas en frasco','Más luciérnagas afuera']},
];
export const area=o=>o.rects.reduce((s,r)=>s+r[2]*r[3],0);
export const HIT_ORDER=ITEMS.slice().sort((a,b)=>area(a)-area(b));
export const inRect=(o,x,y)=>o.rects.some(r=>x>=r[0]&&x<=r[0]+r[2]&&y>=r[1]&&y<=r[1]+r[3]);
export const BOOKS=['#c97d68','#6498b9','#cfb67c','#82ab84','#b0769c','#dad2bc'];
