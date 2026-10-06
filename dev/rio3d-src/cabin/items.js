/* items.js — datos de reglas: niveles, costos, requisitos, foco de cámara y recompensas (igual que el juego 2D) */
import {Y0} from './util.js';
export const TIERS=['Esencial','Funcional','Decoración'];
export const ITEMS=[
  {id:'piso',tier:0,name:'Piso',cost:10,focus:[1.5,Y0,1],reward:['Cepillo ancho','Limpias con un cepillo más grande']},
  {id:'escalera',tier:0,name:'Escalera',cost:14,needs:['piso'],focus:[12,1,2.8],reward:['Mochila de herramientas','Ganas 10% más de tablas al limpiar']},
  {id:'barandal',tier:0,name:'Barandal',cost:14,needs:['piso'],focus:[2.5,Y0+.6,3.9],reward:['Farol de mano','Ilumina el área mientras limpias']},
  {id:'techo',tier:0,name:'Techo',cost:24,needs:['piso'],focus:[1.5,8.2,.5],reward:['Cubeta de lluvia','Suena lluvia suave sobre el techo']},
  {id:'panel',tier:1,name:'Panel solar',cost:20,needs:['techo'],focus:[4.4,8.4,.9],reward:['Batería solar','Energía guardada para la noche']},
  {id:'ventana',tier:1,name:'Ventana',cost:16,needs:['techo'],focus:[2.4,6.1,-2.8],reward:['Cortinas de lino','Entra la luz de la luna']},
  {id:'librero',tier:1,name:'Librero',cost:14,needs:['piso'],focus:[-1.4,5.6,-2.5],reward:['Novela de montaña','Un libro para las noches']},
  {id:'cama',tier:1,name:'Cama',cost:14,needs:['techo'],focus:[4.5,5,-1.6],reward:['Manta tejida','Para las noches frías']},
  {id:'lampara',tier:2,name:'Lámpara del techo',cost:10,needs:['panel'],focus:[1.5,7,-1],reward:['Foco cálido','Una luz amplia sobre la cama']},
  {id:'luces',tier:2,name:'Luces de cuerda',cost:14,needs:['panel','barandal'],focus:[1.5,7,2.5],reward:['Bombillas de colores','Las luces se vuelven de colores']},
  {id:'cuadro',tier:2,name:'Cuadro',cost:10,needs:['librero'],focus:[.55,6.4,-2.8],reward:['Pincel de acuarela','Un recuerdo de la montaña']},
  {id:'plantas',tier:2,name:'Plantas',cost:8,needs:['barandal'],focus:[6.9,Y0+.6,3],reward:['Semillas de lavanda','Huele a campo']},
  {id:'nichos',tier:2,name:'Nichos de pared',cost:12,needs:['lampara'],focus:[-9.8,1,5.5],reward:['Luciérnagas en frasco','Más luciérnagas afuera']},
];
