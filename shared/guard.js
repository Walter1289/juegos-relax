/* Guardia de arranque: avisa con calma si el dispositivo no soporta WebGL o si el juego falla al iniciar, y pide almacenamiento persistente. */
(function(){
  var t0=Date.now(),shown=false,L='es';
  try{var l=localStorage.getItem('rio3d-lang');if(l==='en'||l==='ja')L=l}catch(e){}
  var X={
    webgl:{es:['Este dispositivo no puede mostrar el juego en 3D','Tu navegador o dispositivo no tiene gráficos 3D disponibles. Prueba otro navegador, actualiza el sistema, o juega la versión 2D, que es más ligera.'],
      en:['This device cannot show the 3D game','Your browser or device has no 3D graphics available. Try another browser, update your system, or play the 2D version, which is lighter.'],
      ja:['この端末では3D版を表示できません','お使いのブラウザや端末で3Dグラフィックスが使えません。別のブラウザを試すか、軽い2D版をお楽しみください。']},
    error:{es:['Algo no salió como esperábamos','El juego tuvo un problema al iniciar. Recargar suele resolverlo. Tu progreso está a salvo.'],
      en:['Something did not go as expected','The game had a problem starting. Reloading usually fixes it. Your progress is safe.'],
      ja:['うまく起動しませんでした','起動中に問題が起きました。再読み込みで直ることが多いです。進行状況は保存されています。']},
    reload:{es:'Recargar',en:'Reload',ja:'再読み込み'},menu:{es:'Volver al menú',en:'Back to menu',ja:'メニューへ'},go:{es:'Seguir de todos modos',en:'Continue anyway',ja:'このまま続ける'}
  };
  function show(kind){
    if(shown||!document.body){if(!shown)document.addEventListener('DOMContentLoaded',function(){show(kind)});return}
    shown=true;
    var o=document.createElement('div');o.setAttribute('role','alertdialog');
    o.style.cssText='position:fixed;inset:0;z-index:999;display:grid;place-items:center;background:rgba(27,29,60,.97);color:#fbf1e0;font:16px/1.5 system-ui,sans-serif;padding:20px;text-align:center';
    var c=document.createElement('div');c.style.cssText='max-width:420px;display:flex;flex-direction:column;gap:14px;align-items:center';
    var h=document.createElement('h2');h.style.cssText='margin:0;font:600 1.3rem system-ui,sans-serif';h.textContent=X[kind][L][0];
    var p=document.createElement('p');p.style.cssText='margin:0;color:#cbc8e8';p.textContent=X[kind][L][1];
    var r=document.createElement('div');r.style.cssText='display:flex;gap:10px;flex-wrap:wrap;justify-content:center';
    function b(t,f,href){var e=document.createElement(href?'a':'button');e.textContent=t;if(href)e.href=href;else e.type='button';e.style.cssText='min-height:44px;padding:10px 18px;border-radius:99px;border:1px solid #5a609a;background:#363a66;color:#fbf1e0;font:700 .9rem system-ui,sans-serif;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center';if(f)e.onclick=f;return e}
    if(kind==='error')r.appendChild(b(X.reload[L],function(){location.reload()}));
    r.appendChild(b(X.menu[L],null,'../'));
    if(kind==='error')r.appendChild(b(X.go[L],function(){o.remove()}));
    c.append(h,p,r);o.appendChild(c);document.body.appendChild(o);
  }
  if(/\/(rio3d|cabana3d)\//.test(location.pathname)){
    try{var cv=document.createElement('canvas');if(!(cv.getContext('webgl2')||cv.getContext('webgl')))show('webgl')}catch(e){show('webgl')}
  }
  addEventListener('error',function(e){if(e.target&&e.target!==window)return;if(Date.now()-t0<8000)show('error')});
  addEventListener('unhandledrejection',function(){});
  addEventListener('pointerdown',function f(){removeEventListener('pointerdown',f);try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist()}catch(e){}},{once:true});
})();
