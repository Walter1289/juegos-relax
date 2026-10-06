/* Estado del juego, lienzos compartidos y banderas de ejecución */
import {W,H,DPR,mk,$} from './util.js';
import {buildBackground} from './background.js';

export const KEY='cabana-acantilado-v2',OLD_KEY='cabana-acantilado-v1',CLEAN_MIN=.55;
export const state={repaired:{},spent:0,done:false,best:0,decor:{},own:{},mem:0,notes:[],vis:{},ltr:{}};
export const DW=W/2,DH=H/2;
export const dirt=mk(DW,DH),dctx=dirt.getContext('2d',{willReadFrequently:true});
export const grimeC=mk(DW,DH);
export const lightC=mk(DW,DH),lctx=lightC.getContext('2d');
export const bgC=buildBackground();
export const sceneC=mk(W*DPR,H*DPR),sctx=sceneC.getContext('2d');
export const canvas=$('#game'),g=canvas.getContext('2d');
canvas.width=W*DPR;canvas.height=H*DPR;
export const base={all:1,items:{}},cur={all:0,items:{}};
export const CELEB_KEY='cabana-acantilado-celebrada';
/* Variables que antes eran `let` compartidas: ahora propiedades de objetos exportados */
export const rt={started:false,dirty:true,sceneDirty:true,pendingMsg:''};
export const pointer={drawing:false,lx:0,ly:0};
