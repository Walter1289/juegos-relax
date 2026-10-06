/* Datos compartidos de los lugares: nombres, descubiertos, instancias vivas, animaciones y brillos. */
/* 11 lugares por TIPO (el orden a lo largo del río lo da lmType(k) en world.js). El tipo 3 siempre es el jardín de sakura. */
export const LM=['Puente de madera','Torii sobre el agua','Aldea de farolillos','Jardín de sakura','Cañaveral de las garzas','Templo de la campana','Cascadita de musgo','Casa de té','Bosque de bambú','Estanque de lotos','Castillo de la Garza Blanca'];
export const lmFound=new Set();try{(JSON.parse(localStorage.getItem('rio3d-found')||'[]')).forEach(i=>lmFound.add(i))}catch(e){}
export function saveFound(){try{localStorage.setItem('rio3d-found',JSON.stringify([...lmFound]))}catch(e){}}
export const lmG=[];export const lmMade=new Map(),lmSeen=new Set();
export const lmAnim=[];
export const retaken=new Set();
