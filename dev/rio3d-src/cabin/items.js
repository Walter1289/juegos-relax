/* items.js — datos de reglas: niveles, costos, requisitos, foco de cámara y recompensas (igual que el juego 2D) */
import {Y0} from './util.js';
export const TIERS=['Esencial','Funcional','Decoración'];
export const ITEMS=[
  {id:'piso',tier:0,name:'Piso',cost:10,focus:[1.5,Y0,1],reward:['Cepillo ancho','Limpias con un cepillo más grande']},
  {id:'escalera',tier:0,name:'Escalera',cost:14,needs:['piso'],focus:[12,1,2.8],reward:['Mochila de herramientas','Ganas 10% más de tablas al limpiar']},
  {id:'barandal',tier:0,name:'Barandal laqueado',cost:14,needs:['piso'],focus:[2.5,Y0+.6,3.9],reward:['Farol de mano','Ilumina el área mientras limpias']},
  {id:'techo',tier:0,name:'Tejado',cost:24,needs:['piso'],focus:[1.5,8.2,.5],reward:['Cubeta de lluvia','Suena lluvia suave sobre el techo']},
  {id:'panel',tier:1,name:'Lucernario',cost:20,needs:['techo'],focus:[4.4,8.4,.9],reward:['Brasero de carbón','Calor guardado para la noche']},
  {id:'ventana',tier:1,name:'Shoji',cost:16,needs:['techo'],focus:[2.4,6.1,-2.8],reward:['Papel washi','Entra la luz del atardecer']},
  {id:'librero',tier:1,name:'Librero',cost:14,needs:['piso'],focus:[-1.4,5.6,-2.5],reward:['Novela de montaña','Un libro para las noches']},
  {id:'cama',tier:1,name:'Futón',cost:14,needs:['techo'],focus:[4.5,5,-1.6],reward:['Manta tejida','Para las noches frías']},
  {id:'lampara',tier:2,name:'Farol de papel',cost:10,needs:['panel'],focus:[1.5,7,-1],reward:['Mecha de aceite','Una luz amplia sobre la cama']},
  {id:'luces',tier:2,name:'Farolillos',cost:14,needs:['panel','barandal'],focus:[1.5,7,2.5],reward:['Farolillos de colores','Las luces se vuelven de colores']},
  {id:'cuadro',tier:2,name:'Pergamino',cost:10,needs:['librero'],focus:[.55,6.4,-2.8],reward:['Pincel de tinta sumi-e','Un recuerdo de la montaña']},
  {id:'plantas',tier:2,name:'Bonsáis',cost:8,needs:['barandal'],focus:[6.9,Y0+.6,3],reward:['Semillas de lavanda','Huele a campo']},
  {id:'nichos',tier:2,name:'Nichos de piedra',cost:12,needs:['lampara'],focus:[-9.8,1,5.5],reward:['Luciérnagas en frasco','Más luciérnagas afuera']},
];
