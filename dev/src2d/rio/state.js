/* state.js — estado compartido: vista (V), partida (G), teclas y tamaño del lienzo (los `let` reasignados viven aquí como propiedades) */
export const KEY='rio-de-linternas-v1';
export const V={VW:800,VH:900,cy:650,sc:0,cs0:0,t:0,dark:0,L:[],R:[],lights:[],lit:new Set()};
export const G={s:0,ox:0,vx:0,v:36,ang:0,phase:0,hold:false,px:null,clock:0,lit:V.lit,found:new Set(),started:false,rain:0,rainTarget:0,rainT:40,bumpT:0,rippleT:0,hintT:0};
export const keys={l:false,r:false,p:false};
/* Tamaño lógico del escenario: W/H en px de CSS y U = escala de dibujo (antes variables sueltas) */
export const view={W:800,H:600,U:1};
