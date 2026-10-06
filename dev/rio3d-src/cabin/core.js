/* core.js — renderizador, escena, cámara y registros compartidos (RT = estado de ejecución, IT = objetos reparables) */
import * as THREE from 'three';
import {el} from './util.js';
// estado mutable compartido entre módulos: started (entró a la cabaña), rainOn (lluvia activa), T (tiempo de animación)
export const RT={started:false,rainOn:false,T:0};
export const IT={};          // objetos reparables por id
export const occl=[];        // mallas estáticas que tapan lo de atrás al tocar
export const canvas=el('c');
export const R=new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance'});
R.setPixelRatio(Math.min(devicePixelRatio||1,1.5));
R.shadowMap.enabled=true;R.shadowMap.type=THREE.PCFSoftShadowMap;
// rendimiento (iPad): la sombra de la luna es casi estática; se recalcula sólo cuando cambian los objetos (reparar/cargar)
R.shadowMap.autoUpdate=false;R.shadowMap.needsUpdate=true;
export const scene=new THREE.Scene();
scene.fog=new THREE.Fog(new THREE.Color('#7f75b4'),45,230);
export const cam=new THREE.PerspectiveCamera(50,1,.1,900);
export function resize(){const w=innerWidth,h=innerHeight;R.setSize(w,h,false);R.shadowMap.needsUpdate=true;cam.aspect=w/h;cam.fov=w/h<1.15?66:50;cam.updateProjectionMatrix()}
addEventListener('resize',resize);resize();
