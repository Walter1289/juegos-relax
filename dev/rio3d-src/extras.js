import * as THREE from 'three';
import {openAlbum} from './album.js';
import {tr,lang,setLang} from './i18n.js';

/* Extras de Río 3D: calidad adaptativa, modo foto, diario con fotos propias,
   linternas que se sueltan y ajustes. Se mantiene aparte de main.js para no inflarlo. */
export function initExtras(C){
  const {R,scene,cam,canvas,el,toast,P,LM,lmFound,lmPos,LMS,mkLantern,cx,hw,A,SEAS,seasonIdx}=C;
  const X={photo:false,want:null};
  const ls={get(k,d){try{const v=localStorage.getItem(k);return v===null?d:v}catch(e){return d}},set(k,v){try{localStorage.setItem(k,v);return true}catch(e){return false}},del(k){try{localStorage.removeItem(k)}catch(e){}}};
  const SE=SEAS[seasonIdx()];

  /* ---------- estilos ---------- */
  const st=document.createElement('style');
  st.textContent=`
  .xp{position:fixed;z-index:9;background:var(--panel);border:1px solid var(--line);backdrop-filter:blur(8px);color:var(--ink);font:500 .85rem system-ui,sans-serif}
  .xm{inset:0;display:grid;place-items:center;background:rgba(20,22,46,.62);padding:16px;border:0;border-radius:0}
  .xm>div{width:min(640px,100%);max-height:88vh;overflow:auto;background:rgba(43,45,82,.97);border:1px solid var(--line);border-radius:18px;padding:16px 18px}
  .xm h2{margin:0 0 10px;font:600 1.15rem system-ui,sans-serif}
  .xm .row{display:flex;justify-content:space-between;align-items:center;gap:10px;margin:10px 0}
  .xm select,.xm button.q{background:rgba(255,255,255,.08);color:var(--ink);border:1px solid var(--line);border-radius:10px;padding:8px 10px;font:600 .85rem system-ui,sans-serif}
  .xm .close{position:sticky;top:0;float:right;background:transparent;border:1px solid var(--line);color:var(--ink);border-radius:99px;padding:5px 12px;cursor:pointer}
  .xgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:10px}
  .xcard{border:1px solid var(--line);border-radius:12px;overflow:hidden;background:rgba(255,255,255,.04)}
  .xcard .im{aspect-ratio:16/10;background:#3a3d70 center/cover;display:grid;place-items:center;font-size:2rem;color:#7d82b8}
  .xcard .tx{padding:7px 9px;font-size:.78rem;line-height:1.35;color:var(--muted)}
  .xcard b{display:block;color:var(--ink);font-size:.85rem}
  .xcard.no{opacity:.55}
  #lantB{position:fixed;right:max(14px,env(safe-area-inset-right));bottom:calc(16px + env(safe-area-inset-bottom));z-index:6;background:var(--panel);border:1px solid var(--lamp);color:var(--lamp);border-radius:99px;padding:9px 16px;font:700 .85rem system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(6px)}
  #xph{background:rgba(54,58,102,.55);left:0;right:0;bottom:0;padding:10px max(12px,env(safe-area-inset-right)) calc(12px + env(safe-area-inset-bottom)) max(12px,env(safe-area-inset-left));border-radius:18px 18px 0 0;display:flex;flex-direction:column;gap:9px;align-items:center}
  #xph .fr{display:flex;gap:7px;flex-wrap:wrap;justify-content:center}
  #xph .chip2{padding:6px 12px;border-radius:99px;border:1px solid var(--line);background:rgba(255,255,255,.06);color:var(--muted);font:600 .8rem system-ui,sans-serif;cursor:pointer}
  #xph .chip2.on{color:#3b2a1a;background:var(--lamp);border-color:var(--lamp)}
  #xph label{display:flex;gap:8px;align-items:center;font-size:.78rem;color:var(--muted)}
  #xph input[type=range]{width:min(34vw,200px);accent-color:#ffc77a}
  #xshut{width:64px;height:64px;border-radius:50%;border:4px solid #fff;background:rgba(255,255,255,.28);cursor:pointer;flex:none}
  #xshut:active{background:#fff}
  #xclose{position:fixed;top:max(12px,env(safe-area-inset-top));right:max(14px,env(safe-area-inset-right));z-index:9;background:var(--panel);border:1px solid var(--line);color:var(--ink);border-radius:99px;padding:8px 16px;font:700 .85rem system-ui,sans-serif;cursor:pointer}
  #xflash{position:fixed;inset:0;background:#fff;opacity:0;pointer-events:none;z-index:12;transition:opacity .45s}
  body.photo canvas{cursor:grab}
  `;
  document.head.appendChild(st);

  /* ---------- 1. calidad adaptativa ---------- */
  const dpr=Math.min(devicePixelRatio||1,2),LV=[.7,.85,1,1.25,1.5];
  let maxL=0;LV.forEach((v,i)=>{if(v<=dpr+.001)maxL=i});
  let qmode=ls.get('rio3d-q','auto'),lvl=Math.min(maxL,3),ceil=maxL,ema=1/60,tAcc=0,cool=5,good=0,bad=0,lastUp=0,curRatio=0;
  const FIX={hi:1.5,mid:1,lo:.7};
  const ratioFor=()=>X.photo?Math.min(dpr,1.75):qmode==='auto'?Math.min(LV[lvl],dpr):Math.min(FIX[qmode]||1,dpr);
  function applyRatio(){const r=ratioFor();if(Math.abs(r-curRatio)>.01){curRatio=r;R.setPixelRatio(r);R.setSize(innerWidth,innerHeight,false);rtSize()}}
  X.tick=function(d){
    if(document.hidden||!C.started()||X.photo)return;
    d=Math.min(d,.1);ema+=(d-ema)*.04;tAcc+=d;if(tAcc<1)return;tAcc=0;
    if(qmode!=='auto'){applyRatio();return}
    if(cool>0){cool--;if(!curRatio)applyRatio();return}
    if(ema>.027){bad++;good=0}else if(ema<.0185){good++;bad=0}else{good=0;bad=0}
    if(bad>=2&&lvl>0){lvl--;bad=0;cool=6;if(lastUp&&performance.now()-lastUp<30000)ceil=Math.min(ceil,lvl);applyRatio()}
    else if(good>=12&&lvl<Math.min(ceil,maxL)){lvl++;good=0;cool=10;lastUp=performance.now();applyRatio()}
  };
  const qLabel=()=>qmode==='auto'?'Auto (ahora '+Math.min(LV[lvl],dpr).toFixed(2)+'×)':'Fija';

  /* ---------- 2. modo foto ---------- */
  const filters={
    none:{n:'Sin filtro'},
    nat:{n:'Natural',t:[1,1,1],sat:1.06,con:1.04,lift:0,vig:.35,glow:.2,grain:0},
    warm:{n:'Cálido',t:[1.1,1,.86],sat:1.12,con:1.05,lift:.02,vig:.4,glow:.3,grain:.02},
    mist:{n:'Bruma',t:[.97,1,1.04],sat:.92,con:.92,lift:.07,vig:.3,glow:.5,grain:.02},
    ink:{n:'Tinta',t:[1,.97,.9],sat:0,con:1.28,lift:.05,vig:.55,glow:.2,grain:.05},
    moon:{n:'Noche azul',t:[.74,.9,1.18],sat:.85,con:1.08,lift:0,vig:.5,glow:.55,grain:.03}
  };
  let fk=ls.get('rio3d-filter','nat');if(!filters[fk])fk='nat';
  let frameOn=ls.get('rio3d-frame','1')==='1';
  let rt=null;const qScene=new THREE.Scene(),qCam=new THREE.OrthographicCamera(-1,1,1,-1,0,1);
  const qMat=new THREE.ShaderMaterial({depthTest:false,depthWrite:false,
    uniforms:{tex:{value:null},px:{value:new THREE.Vector2()},tint:{value:new THREE.Vector3(1,1,1)},sat:{value:1},con:{value:1},lift:{value:0},vig:{value:0},glow:{value:0},grain:{value:0},time:{value:0}},
    vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
    fragmentShader:`varying vec2 vUv;uniform sampler2D tex;uniform vec2 px;uniform vec3 tint;uniform float sat,con,lift,vig,glow,grain,time;
    vec3 g(vec3 c){return pow(max(c,0.),vec3(.4545));}
    void main(){
      vec3 c=g(texture2D(tex,vUv).rgb),b=vec3(0.);
      for(int i=0;i<8;i++){float a=float(i)*.7854;vec2 o=vec2(cos(a),sin(a))*px;b+=g(texture2D(tex,vUv+o*7.).rgb)+g(texture2D(tex,vUv+o*16.).rgb);}
      b/=16.;c+=max(b-.5,0.)*glow;
      c*=tint;float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,sat);
      c=(c-.5)*con+.5;c=mix(c,vec3(.86,.88,.95),lift);
      vec2 q=vUv-.5;c*=1.-vig*smoothstep(.22,.82,length(q*vec2(1.,.9)));
      float n=fract(sin(dot(vUv*vec2(1243.,987.)+time,vec2(12.9898,78.233)))*43758.5453);c+=(n-.5)*grain;
      c=pow(max(c,0.),vec3(2.2));gl_FragColor=vec4(c,1.);
      #include <colorspace_fragment>
    }`});
  qScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),qMat));
  const _v=new THREE.Vector2();
  function rtSize(){if(!rt)return;R.getDrawingBufferSize(_v);if(rt.width!==_v.x||rt.height!==_v.y)rt.setSize(_v.x,_v.y)}
  function ensureRT(){
    if(rt){rtSize();return}
    R.getDrawingBufferSize(_v);
    try{rt=new THREE.WebGLRenderTarget(_v.x,_v.y,{samples:4,type:THREE.HalfFloatType,depthBuffer:true})}
    catch(e){rt=new THREE.WebGLRenderTarget(_v.x,_v.y,{samples:4,depthBuffer:true})}
  }
  X.render=function(){
    const f=filters[fk];
    if(X.photo&&f.t){
      ensureRT();R.setRenderTarget(rt);R.render(scene,cam);R.setRenderTarget(null);
      const u=qMat.uniforms;u.tex.value=rt.texture;u.px.value.set(1/rt.width,1/rt.height);u.tint.value.set(f.t[0],f.t[1],f.t[2]);
      u.sat.value=f.sat;u.con.value=f.con;u.lift.value=f.lift;u.vig.value=f.vig;u.glow.value=f.glow;u.grain.value=f.grain;u.time.value=P.t%10;
      R.render(qScene,qCam);
    }else R.render(scene,cam);
    if(X.want){const w=X.want;X.want=null;try{w()}catch(e){console.error('want',e&&e.message)}}
  };

  // cámara libre
  const UPV=new THREE.Vector3(0,1,0),RV=new THREE.Vector3(1,0,0),qa=new THREE.Quaternion(),qb=new THREE.Quaternion();
  let yaw=0,pitch=0,zoom=1,yS=0,pS=0,zS=1;
  X.camAdjust=function(){
    yS+=(yaw-yS)*.25;pS+=(pitch-pS)*.25;zS+=(zoom-zS)*.25;
    if(Math.abs(yS)>1e-4||Math.abs(pS)>1e-4){qa.setFromAxisAngle(UPV,yS);qb.setFromAxisAngle(RV,pS);cam.quaternion.premultiply(qa).multiply(qb)}
    if(Math.abs(zS-1)>1e-3){cam.fov=Math.max(18,Math.min(110,cam.fov*zS));cam.updateProjectionMatrix()}
  };
  const ptrs=new Map();let pd=0;
  canvas.addEventListener('pointerdown',e=>{if(!X.photo)return;canvas.setPointerCapture(e.pointerId);ptrs.set(e.pointerId,[e.clientX,e.clientY]);if(ptrs.size===2){const a=[...ptrs.values()];pd=Math.hypot(a[0][0]-a[1][0],a[0][1]-a[1][1])}});
  canvas.addEventListener('pointermove',e=>{
    if(!X.photo||!ptrs.has(e.pointerId))return;const p=ptrs.get(e.pointerId),dx=e.clientX-p[0],dy=e.clientY-p[1];p[0]=e.clientX;p[1]=e.clientY;
    if(ptrs.size===1){const k=.0045*zoom;yaw-=dx*k;pitch=Math.max(-1.05,Math.min(1.05,pitch-dy*k))}
    else if(ptrs.size===2){const a=[...ptrs.values()],d=Math.hypot(a[0][0]-a[1][0],a[0][1]-a[1][1]);if(pd>0)zoom=Math.max(.35,Math.min(1.35,zoom*pd/d));pd=d;zSl.value=zoom}
  });
  const pup=e=>{ptrs.delete(e.pointerId);pd=0};canvas.addEventListener('pointerup',pup);canvas.addEventListener('pointercancel',pup);
  canvas.addEventListener('wheel',e=>{if(!X.photo)return;zoom=Math.max(.35,Math.min(1.35,zoom*(1+Math.sign(e.deltaY)*.06)));zSl.value=zoom;e.preventDefault()},{passive:false});

  // interfaz del modo foto
  const hud=el('hud');
  const hr=el('hr'),menu=el('menu'),more=el('more');
  const mkBtn=(id,txt,toMenu,before)=>{const b=document.createElement('button');b.id=id;b.type='button';b.textContent=txt;if(toMenu){menu.insertBefore(b,before||null)}else hr.insertBefore(b,before||el('cam'))
    return b};
  more.onclick=e=>{e.stopPropagation();menu.hidden=!menu.hidden;more.setAttribute('aria-expanded',String(!menu.hidden))};
  document.addEventListener('click',e=>{if(!menu.hidden&&!hr.contains(e.target)){menu.hidden=true;more.setAttribute('aria-expanded','false')}else if(!menu.hidden&&menu.contains(e.target)&&e.target.tagName==='BUTTON'&&e.target.id!=='snd'){menu.hidden=true;more.setAttribute('aria-expanded','false')}});
  const pauseB=mkBtn('pauseB','Pausa');pauseB.dataset.pz='1';
  const photoB=mkBtn('photoB','Foto'),diaryB=mkBtn('diaryB','Diario',true,el('snd')),setB=mkBtn('setB','Ajustes',true,el('snd')),restB=mkBtn('restB','Reiniciar',true);
  const ph=document.createElement('div');ph.id='xph';ph.className='xp';ph.hidden=true;
  ph.innerHTML=`<div class="fr" id="xfl"></div>
  <div class="fr"><label>Hora <input id="xhr" type="range" min="0" max="1" step=".002"></label><label>Zoom <input id="xzm" type="range" min=".35" max="1.35" step=".01"></label>
  <button class="chip2" id="xvw">Vista</button><button class="chip2" id="xfm">Marco</button></div>
  <button id="xshut" aria-label="Tomar foto"></button>`;
  document.body.appendChild(ph);
  const xclose=document.createElement('button');xclose.id='xclose';xclose.textContent='Salir de foto';xclose.hidden=true;document.body.appendChild(xclose);
  const flash=document.createElement('div');flash.id='xflash';document.body.appendChild(flash);
  const zSl=ph.querySelector('#xzm'),hSl=ph.querySelector('#xhr'),flRow=ph.querySelector('#xfl'),fmB=ph.querySelector('#xfm');
  const fchips={};
  Object.keys(filters).forEach(k=>{const b=document.createElement('button');b.className='chip2';b.textContent=filters[k].n;b.onclick=()=>{fk=k;ls.set('rio3d-filter',k);markF()};flRow.appendChild(b);fchips[k]=b});
  function markF(){for(const k in fchips)fchips[k].classList.toggle('on',k===fk);fmB.classList.toggle('on',frameOn)}
  fmB.onclick=()=>{frameOn=!frameOn;ls.set('rio3d-frame',frameOn?'1':'0');markF()};
  ph.querySelector('#xvw').onclick=()=>C.setCam(1-C.getCam());
  zSl.oninput=()=>{zoom=+zSl.value};hSl.oninput=()=>C.setTod(+hSl.value);
  const hideIds=['hud','next','hint','toast','lantB'],vigEls=()=>[...document.body.children].filter(e=>e.tagName==='DIV'&&/pointer-events:none/.test(e.style.cssText)&&e.id!=='xflash');
  function setPhoto(on){
    if(on===X.photo)return;
    if(on&&!C.started())return;
    X.photo=on;document.body.classList.toggle('photo',on);
    hideIds.forEach(id=>{const e=el(id)||document.getElementById(id);if(e)e.style.visibility=on?'hidden':''});
    vigEls().forEach(e=>e.style.visibility=on?'hidden':'');
    ph.hidden=!on;xclose.hidden=!on;
    if(on){yaw=pitch=0;zoom=1;zSl.value=1;hSl.value=C.getTod();markF();applyRatio();toast('Arrastra para mirar · pellizca para acercar')}
    else{yaw=pitch=0;zoom=1;ptrs.clear();applyRatio();lantVis()}
  }
  photoB.onclick=()=>setPhoto(true);xclose.onclick=()=>setPhoto(false);
  addEventListener('keydown',e=>{if(e.code==='KeyP')setPhoto(!X.photo);if(e.code==='Escape'&&X.photo)setPhoto(false);if(e.code==='Enter'&&X.photo)shoot()});
  function shoot(){
    X.want=()=>{
      flash.style.transition='none';flash.style.opacity=.35;requestAnimationFrame(()=>{flash.style.transition='opacity .5s';flash.style.opacity=0});
      const w=canvas.width,h=canvas.height;let out=canvas;
      if(frameOn){
        const m=Math.round(w*.03),band=Math.round(w*.065),c2=document.createElement('canvas');c2.width=w+2*m;c2.height=h+m+band;
        const g=c2.getContext('2d');g.fillStyle='#f3ead6';g.fillRect(0,0,c2.width,c2.height);g.drawImage(canvas,m,m,w,h);
        const place=C.nearLM(P.dist||0),fs=Math.round(band*.4);g.fillStyle='#5a4a3c';g.font=fs+'px Georgia,serif';g.textBaseline='middle';
        g.fillText('Río 3D'+(place?'  ·  '+tr(place):''),m,h+m+band*.52);
        g.textAlign='right';g.fillStyle='#8a7a68';g.fillText(Math.round(P.dist||0)+' m  ·  '+tr(SE.name)+'  ·  '+tr(C.todName(C.getTod())),c2.width-m,h+m+band*.52);out=c2;
      }
      out.toBlob(b=>{if(!b)return;const f=new File([b],'rio3d-'+Date.now()+'.jpg',{type:'image/jpeg'});
        const dl=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=f.name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},4000)};
        if(navigator.canShare&&navigator.canShare({files:[f]}))navigator.share({files:[f],title:'Río 3D'}).catch(e=>{if(e&&e.name!=='AbortError')dl()});else dl();
      },'image/jpeg',.92);
    };
  }
  ph.querySelector('#xshut').onclick=shoot;

  /* ---------- 3. diario con fotos propias ---------- */
  const snapKey=t=>'rio3d-snap-'+t,haveSnap=new Set();
  for(let t=0;t<LM.length;t++)if(ls.get(snapKey(t),null))haveSnap.add(t);
  X.hasSnap=t=>haveSnap.has(t);
  X.snap=function(t){
    X.want=()=>{const w=420,h=Math.round(w*canvas.height/canvas.width),c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(canvas,0,0,w,h);
      const u=c.toDataURL('image/jpeg',.72);if(ls.set(snapKey(t),u)){haveSnap.add(t);ls.set('rio3d-snapd-'+t,new Date().toISOString().slice(0,10))}};
  };
  X.found=t=>{if(!ls.get('rio3d-snapd-'+t,null))ls.set('rio3d-snapd-'+t,new Date().toISOString().slice(0,10))};
  const fmtD=s=>{if(!s)return '';const d=new Date(s+'T12:00:00');return d.toLocaleDateString(lang(),{day:'numeric',month:'short'})};
  const modal=(html)=>{const m=document.createElement('div');m.className='xp xm';m.innerHTML='<div><button class="close">Cerrar</button>'+html+'</div>';m.onclick=e=>{if(e.target===m||e.target.classList.contains('close'))m.remove()};document.body.appendChild(m);return m};
  diaryB.onclick=()=>{
    const left=readLeft(),per=new Array(LM.length).fill(0);left.forEach(l=>{const k=Math.round((l.s-240)/LMS);per[C.lmType(k)]++});
    const best=+ls.get('rio3d-pos','0');
    let h='<h2>Diario del río</h2><p style="margin:0 0 12px;color:var(--muted)">'+lmFound.size+'/'+LM.length+' lugares · '+SE.name+' · llegaste hasta '+best+' m · linternas soltadas: '+left.length+'</p><div class="xgrid">';
    LM.forEach((n,i)=>{const f=lmFound.has(i),img=f&&ls.get(snapKey(i),null);
      h+='<div class="xcard'+(f?'':' no')+'"><div class="im"'+(img?' style="background-image:url('+img+')"':'')+'>'+(img?'':f?'?':'·')+'</div><div class="tx"><b>'+(f?n:'Aún por descubrir')+'</b>'+(f?(img?fmtD(ls.get('rio3d-snapd-'+i,'')):'Vuelve a pasar para fotografiarlo'):'Sigue río abajo')+(per[i]?'<br>Linternas dejadas: '+per[i]:'')+'</div></div>'});
    modal(h+'</div>');
  };

  /* ---------- linternas que sueltas ---------- */
  const readLeft=()=>{try{return JSON.parse(ls.get('rio3d-left','[]'))||[]}catch(e){return[]}};
  let left=readLeft();const meshes=new Map(),lpool=[],greeted=new Set();
  const lantB=document.createElement('button');lantB.id='lantB';document.body.appendChild(lantB);lantB.hidden=true;
  function lantVis(){const n=C.getCount();lantB.hidden=!(C.started()&&n>0&&!X.photo);lantB.textContent='Soltar linterna ('+n+')'}
  lantB.onclick=()=>{
    if(C.getCount()<=0||X.photo)return;
    const s=(-P.pz)+7,e=Math.max(-hw(s)+4,Math.min(hw(s)-4,(P.px+Math.sin(P.psi)*7)-cx(s)));
    left.push({s:Math.round(s*10)/10,e:Math.round(e*10)/10,t:Date.now()});if(left.length>80)left.shift();ls.set('rio3d-left',JSON.stringify(left));
    C.setCount(C.getCount()-1);try{A.plop(0)}catch(err){}C.spawnRipple(cx(s)+e,-s);lantVis();
    if(left.length===1)toast('Tu linterna se queda aquí. Vuelve otro día y la encontrarás encendida.');
  };
  X.update=function(dt,ps){
    if(!C.started())return;
    onboard(dt);
    if(((X.update.n=(X.update.n||0)+1)&15)===0)lantVis();
    const t=P.t,gk=C.glowK();
    for(const [i,o] of meshes){const l=left[i];if(!l||l.s<ps-70||l.s>ps+280){scene.remove(o);lpool.push(o);meshes.delete(i)}}
    left.forEach((l,i)=>{
      if(l.s<ps-70||l.s>ps+280)return;
      let o=meshes.get(i);
      if(!o){o=lpool.pop()||mkLantern();o.scale.setScalar(1.25);o.userData.body.material=o.userData.body.material.clone();o.userData.body.material.color.set(0xfff0d0);scene.add(o);meshes.set(i,o)}
      o.position.set(cx(l.s)+l.e+Math.sin(t*.3+i)*.5,Math.sin(t*1.1+i)*.04,-l.s);o.rotation.z=Math.sin(t*.8+i*2)*.08;
      o.userData.glow.material.opacity=(.6+.3*gk)*(.85+.15*Math.sin(t*3+i));o.userData.refl.material.opacity=(.3+.3*gk)*(.9+.1*Math.sin(t*2+i));
      const dx=o.position.x-P.px,dz=o.position.z-P.pz;
      if(dx*dx+dz*dz<196&&!greeted.has(i)&&!X.photo){greeted.add(i);toast('Tu linterna del '+fmtD(new Date(l.t).toISOString().slice(0,10)))}
    });
  };

  restB.onclick=()=>{
    const m=modal('<h2>¿Volver al inicio del río?</h2><p style="color:var(--muted);margin:0 0 14px">Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.</p><div class="row"><button class="q" id="xno">Cancelar</button><button class="q" id="xyes" style="background:#ffc77a;color:#3b2a1a">Reiniciar recorrido</button></div>');
    m.querySelector('#xno').onclick=()=>m.remove();m.querySelector('#xyes').onclick=()=>{m.remove();C.restart()};
  };
  /* ---------- ajustes ---------- */
  setB.onclick=()=>{
    const m=modal(`<h2>Ajustes</h2>
    <div class="row"><span>Calidad<br><small style="color:var(--muted)" id="xql"></small></span><select id="xq"><option value="auto">Automática</option><option value="hi">Alta</option><option value="mid">Media</option><option value="lo">Baja (más fluida)</option></select></div>
    <div class="row"><span>Volumen</span><input type="range" id="xv" min="0" max="1" step=".05" style="width:55%;accent-color:#ffc77a"></div>
    <div class="row"><span>Estación<br><small style="color:var(--muted)">Cambiarla recarga el río</small></span><select id="xs"><option value="auto">Según la fecha</option><option value="0">Primavera</option><option value="1">Verano</option><option value="2">Otoño</option><option value="3">Invierno</option></select></div>
    <div class="row"><span>Idioma</span><select id="xl"><option value="es">Español</option><option value="en">English</option><option value="ja">日本語</option></select></div>
    <div class="row"><span>Subtítulos de ambiente<br><small style="color:var(--muted)">Describe los sonidos con texto</small></span><select id="xsub"><option value="0">No</option><option value="1">Sí</option></select></div>
    <div class="row"><span>Vibración suave<br><small style="color:var(--muted)">Si tu dispositivo la permite</small></span><select id="xhp"><option value="1">Sí</option><option value="0">No</option></select></div>
    <div class="row"><span>Modo una mano<br><small style="color:var(--muted)">Botones al alcance del pulgar</small></span><select id="xh"><option value="0">No</option><option value="r">Derecha</option><option value="l">Izquierda</option></select></div>
    <div class="row"><span>Cuaderno del río<br><small style="color:var(--muted)">Lo que has visto en el camino</small></span><button id="xalb" type="button">Abrir</button></div>
    <div class="row"><span>Tono suave<br><small style="color:var(--muted)">Suaviza los sonidos agudos</small></span><select id="xsoft"><option value="0">No</option><option value="1">Sí</option></select></div>
    <div class="row"><span>Dormir<br><small style="color:var(--muted)">Baja el sonido y la luz poco a poco</small></span><select id="xsl"><option value="0">No</option><option value="15">15 min</option><option value="30">30 min</option><option value="45">45 min</option></select></div>`);
    const q=m.querySelector('#xq'),s=m.querySelector('#xs'),ql=m.querySelector('#xql');
    const xv=m.querySelector('#xv');xv.value=A.vol;xv.oninput=()=>{A.setVol(+xv.value);ls.set('rio3d-vol',xv.value)};
    q.value=qmode;s.value=ls.get('rio3d-season','auto');ql.textContent=qLabel();
    q.onchange=()=>{qmode=q.value;ls.set('rio3d-q',qmode);cool=3;applyRatio();ql.textContent=qLabel()};
    s.onchange=()=>{ls.set('rio3d-season',s.value);try{C.savePos()}catch(e){}location.reload()};
    const xl=m.querySelector('#xl');xl.value=lang();xl.onchange=()=>{setLang(xl.value);try{C.savePos()}catch(e){}location.reload()};
    const xs=m.querySelector('#xsub');xs.value=ls.get('rio3d-subs','0');xs.onchange=()=>ls.set('rio3d-subs',xs.value);
    const xp=m.querySelector('#xhp');xp.value=ls.get('rio3d-hap','1');xp.onchange=()=>ls.set('rio3d-hap',xp.value);
    const xso=m.querySelector('#xsoft');xso.value=UX.api.soft()?'1':'0';xso.onchange=()=>UX.api.setSoft(xso.value==='1');
    m.querySelector('#xalb').onclick=()=>openAlbum(UX.tr);const xsl=m.querySelector('#xsl');xsl.value=String(UX.api.sleepMin());xsl.onchange=()=>UX.api.sleep(+xsl.value);
    const xh=m.querySelector('#xh');xh.value=ls.get('rio3d-hand','0');xh.onchange=()=>{ls.set('rio3d-hand',xh.value);document.body.classList.remove('hand-r','hand-l');if(xh.value!=='0')document.body.classList.add('hand-'+xh.value)};
  };

  {const v=parseFloat(ls.get('rio3d-vol','1'));if(v>=0&&v<=1)A.vol=v}
  /* primeros pasos: pistas suaves, una a la vez */
  let ob=ls.get('rio3d-ob','0')==='1'?9:0,obT=0;
  const hint=el('hint');
  function onboard(dt){
    if(ob>=9||!C.started())return;obT+=dt;
    if(ob===0&&obT>1){hint.hidden=false;hint.style.opacity=1;hint.textContent='Mantén presionado y desliza a los lados para dirigir la canoa';ob=1;obT=0}
    else if(ob===1&&(Math.abs(P.steer)>.35||obT>40)){ob=2;obT=0;hint.textContent='Las luces sobre el agua son linternas: pasa cerca para recogerlas';}
    else if(ob===2&&(C.getCount()>0||obT>60)){ob=3;obT=0;hint.textContent='Con Foto puedes guardar un momento; con Diario ves tus lugares';}
    else if(ob===3&&obT>10){hint.style.opacity=0;ob=9;ls.set('rio3d-ob','1')}
  }
  qMat.uniforms.time.value=0;
  applyRatio();markF();
  addEventListener('resize',()=>setTimeout(rtSize,50));
  return X;
}
