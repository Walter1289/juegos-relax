/* canvas.js — lienzo principal, lienzo auxiliar de luces y ajuste de tamaño */
import {$,mk,clamp} from './util.js';
import {V,view} from './state.js';

export const canvas=$('#game'),g=canvas.getContext('2d');
export const lightC=mk(8,8),lctx=lightC.getContext('2d');
export const DPR=Math.min(window.devicePixelRatio||1,2);
export function resize(){
  const st=$('#stage');view.W=Math.max(200,st.clientWidth);view.H=Math.max(200,st.clientHeight);
  const {W,H}=view;
  view.U=clamp(Math.min(W/760,H/820),.55,1.5);
  const U=view.U;
  V.VW=W/U;V.VH=H/U;V.cy=V.VH*.72;
  canvas.width=Math.round(W*DPR);canvas.height=Math.round(H*DPR);
  lightC.width=Math.ceil(W/4);lightC.height=Math.ceil(H/4);
}
export function initCanvas(){new ResizeObserver(resize).observe($('#stage'));resize()}
