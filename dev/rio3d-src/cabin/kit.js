/* kit.js — kit de construcción de la cabaña: paleta, grupo raíz W, pendiente del techo y fábrica de objetos reparables */
import * as THREE from 'three';
import {IT,occl} from './core.js';
export const WOOD='#dcae92',WOOD2='#c89479',DECK='#d9b995',DARK='#b0806a',GREY='#a1918c',STONE='#a9a4c6',CORAL='#e7a293',TEAL='#7fc3bd';
export let W;                                   // grupo raíz de la cabaña (se crea en makeRoot, al empezar la estructura)
export const makeRoot=()=>{W=new THREE.Group();return W};
export const S=(m)=>{occl.push(m);return m};   // marca una malla estática que tapa lo de atrás al tocar
export const slopeY=z=>9.4-(z+1)*(2.2/3.4);   // altura de la pendiente frontal del techo
export const PITCH=Math.atan(2.2/3.4);
// crea un objeto reparable: g (grupo) con b (versión dañada) y f (versión reparada)
export const mk=id=>{const g=new THREE.Group(),b=new THREE.Group(),f=new THREE.Group();g.userData.itemId=id;g.add(b,f);W.add(g);return IT[id]={id,g,b,f,blobs:[]}};
export const ASSET={paint:null};            // textura del cuadro (se crea entre el panel y la ventana, como en el original)
