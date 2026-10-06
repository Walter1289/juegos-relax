/* Pausa compartida: botón + Esc, pausa automática al salir de la pestaña, silencia el audio.
   Cada juego define PZ.ctx() y PZ.started() y se detiene mientras PZ.on sea true. */
(function(){
  if(window.PZ)return;
  const PZ=window.PZ={on:false,ctx:()=>null,started:()=>true};
  const st=document.createElement('style');
  st.textContent='#pz{position:fixed;inset:0;z-index:30;display:grid;place-items:center;background:rgba(24,26,56,.64);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);color:#fbf1e0;font-family:system-ui,-apple-system,sans-serif;text-align:center;padding:20px}#pz[hidden]{display:none}#pz .c{display:flex;flex-direction:column;gap:12px;align-items:center}#pz h2{margin:0;font:600 1.7rem system-ui}#pz p{margin:0;color:#cbc8e8;line-height:1.5}#pz button{background:#ffc77a;color:#3b2a1a;border:0;border-radius:99px;padding:13px 32px;font:700 1rem system-ui;cursor:pointer}';
  document.head.appendChild(st);
  const d=document.createElement('div');d.id='pz';d.hidden=true;
  d.innerHTML='<div class="c"><h2>En pausa</h2><p>Respira con calma.<br>Todo seguirá aquí cuando vuelvas.</p><button type="button" id="pzGo">Continuar</button></div>';
  const mount=()=>document.body.appendChild(d);document.body?mount():addEventListener('DOMContentLoaded',mount);
  PZ.set=function(on){
    on=!!on;if(on===PZ.on)return;if(on&&!PZ.started())return;
    PZ.on=on;d.hidden=!on;
    try{const c=PZ.ctx();if(c)on?c.suspend():c.resume()}catch(e){}
    document.querySelectorAll('[data-pz]').forEach(b=>b.textContent=on?'Continuar':'Pausa');
    if(on)try{document.activeElement&&document.activeElement.blur()}catch(e){}
  };
  PZ.toggle=()=>PZ.set(!PZ.on);
  /* Agrupa botones poco usados en un menú «Más» para despejar la barra superior */
  PZ.more=function(host,btns,label){
    btns=btns.filter(Boolean);if(!host||!btns.length)return;
    const s2=document.createElement('style');
    s2.textContent='#pzMore{position:fixed;z-index:25;display:flex;flex-direction:column;gap:6px;padding:8px;min-width:150px;background:rgba(43,45,82,.97);border:1px solid rgba(255,255,255,.22);border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.4)}#pzMore[hidden]{display:none}#pzMore button{display:block;width:100%;text-align:left;background:rgba(255,255,255,.08);color:#fbf1e0;border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:9px 12px;font:600 .88rem system-ui,sans-serif;cursor:pointer}';
    document.head.appendChild(s2);
    const b=document.createElement('button');b.type='button';b.textContent=label||'Más';b.className=btns[0].className||'';b.id='pzMoreB';
    const p=document.createElement('div');p.id='pzMore';p.hidden=true;btns.forEach(x=>{x.removeAttribute('style');p.appendChild(x)});
    host.appendChild(b);document.body.appendChild(p);
    b.onclick=e=>{e.stopPropagation();p.hidden=!p.hidden;if(!p.hidden){const r=b.getBoundingClientRect();p.style.top=(r.bottom+6)+'px';p.style.right=Math.max(8,innerWidth-r.right)+'px'}};
    document.addEventListener('click',e=>{if(!p.hidden&&!p.contains(e.target)&&e.target!==b)p.hidden=true});
    addEventListener('resize',()=>{p.hidden=true});
    return b;
  };
  d.querySelector('#pzGo').onclick=()=>PZ.set(false);
  document.addEventListener('keydown',e=>{if(e.code==='Escape'&&!document.body.classList.contains('photo')&&!document.querySelector('.xm'))PZ.toggle()});
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&PZ.started()&&!PZ.on)PZ.set(true)});
  document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-pz]');if(b)PZ.toggle()});
})();
