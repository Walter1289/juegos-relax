/* Datos compartidos de los lugares: nombres, descubiertos, instancias vivas, animaciones y brillos. */
import {SE} from './world.js';
export const LM=['Puente de madera','Torii sobre el agua','Aldea de farolillos',SE.lm3,'Cañaveral de las garzas','Templo de la campana','Cascadita de musgo','Casa de té','Bosque de bambú','Estanque de lotos'];
export const lmFound=new Set();try{(JSON.parse(localStorage.getItem('rio3d-found')||'[]')).forEach(i=>lmFound.add(i))}catch(e){}
export function saveFound(){try{localStorage.setItem('rio3d-found',JSON.stringify([...lmFound]))}catch(e){}}
export const lmG=[];export const lmMade=new Map(),lmSeen=new Set();
export const lmAnim=[];
export const retaken=new Set();
