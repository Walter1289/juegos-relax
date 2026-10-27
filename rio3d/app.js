(()=>{(function(){if(window.UX)return;let i=["es","en","ja"],t={es:"Espa\xF1ol",en:"English",ja:"\u65E5\u672C\u8A9E"},e={get(p,y){try{let S=localStorage.getItem(p);return S===null?y:S}catch{return y}},set(p,y){try{localStorage.setItem(p,y)}catch{}}},n=e.get("rio3d-lang","es");i.includes(n)||(n="es");let s=n==="en"?1:2,r=new Map,o=[],a=window.UX={lang:n,onLang:null,add(p){p.forEach(y=>r.set(y[0],y))},rx(p){p.forEach(y=>o.push(y))},tr(p){if(n==="es"||typeof p!="string")return p;let y=p.trim();if(!y)return p;let S=r.get(y);if(S)return p.replace(y,S[s]);for(let[_,b]of o){let M=y.match(_);if(M)return p.replace(y,b(M,n==="en"?1:2,a.tr))}return p},init(){if(n==="es")return;document.documentElement.lang=n;let p=y=>{if(y.nodeType===3){let b=a.tr(y.nodeValue);b!==y.nodeValue&&(y.nodeValue=b);return}if(y.nodeType!==1||y.tagName==="SCRIPT"||y.tagName==="STYLE")return;let S=y.getAttribute&&y.getAttribute("aria-label");if(S){let b=a.tr(S);b!==S&&y.setAttribute("aria-label",b)}let _=y.getAttribute&&y.getAttribute("title");if(_){let b=a.tr(_);b!==_&&y.setAttribute("title",b)}y.childNodes.forEach(p)};p(document.body),new MutationObserver(y=>{for(let S of y)S.type==="characterData"?p(S.target):S.addedNodes.forEach(p)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0})},hap(p){if(e.get("rio3d-hap","1")!=="0")try{if(navigator.vibrate){navigator.vibrate(p);return}if(!a._sw){let y=document.createElement("label");y.style.cssText="position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";let S=document.createElement("input");S.type="checkbox",S.setAttribute("switch",""),y.appendChild(S),document.body.appendChild(y),a._sw=y}a._sw.click()}catch{}},subsOn:()=>e.get("rio3d-subs","0")==="1",cap(p,y){if(!a.subsOn())return;let S=performance.now(),_=a._cl||(a._cl={});if(_[p]&&S-_[p]<(y||9e3))return;_[p]=S;let b=document.getElementById("uxcap");b||(b=document.createElement("div"),b.id="uxcap",b.setAttribute("aria-live","polite"),b.style.cssText="position:fixed;left:50%;top:max(58px,calc(env(safe-area-inset-top) + 50px));transform:translateX(-50%);background:rgba(20,22,48,.84);color:#fbf1e0;padding:6px 14px;border-radius:8px;font:600 .86rem system-ui,sans-serif;opacity:0;transition:opacity .4s;z-index:20;pointer-events:none;max-width:86%;text-align:center",document.body.appendChild(b)),b.textContent="["+a.tr(p)+"]",b.style.opacity=1,clearTimeout(a._ct),a._ct=setTimeout(()=>b.style.opacity=0,2600)},btns(p,y){y=y||{};let S=(z,$)=>{let B=document.createElement("button");return B.type="button",B.id=z,B.className=p||"",B.onclick=$,B},_=[],b=S("uxLang",()=>{let z=i[(i.indexOf(n)+1)%3];e.set("rio3d-lang",z);try{a.onLang&&a.onLang()}catch{}location.reload()});b.textContent=(n==="en"?"Language: ":n==="ja"?"\u8A00\u8A9E: ":"Idioma: ")+t[n],_.push(b);let M=S("uxSubs",()=>{e.set("rio3d-subs",a.subsOn()?"0":"1"),M.textContent=a.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no"});M.textContent=a.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no",_.push(M);let T=S("uxHap",()=>{let z=e.get("rio3d-hap","1")==="1";e.set("rio3d-hap",z?"0":"1"),T.textContent=z?"Vibraci\xF3n: no":"Vibraci\xF3n: s\xED",z||a.hap(15)});if(T.textContent=e.get("rio3d-hap","1")==="1"?"Vibraci\xF3n: s\xED":"Vibraci\xF3n: no",_.push(T),y.hand){let z={0:"Una mano: no",r:"Una mano: derecha",l:"Una mano: izquierda"},$=["0","r","l"],B=ut=>{document.body.classList.remove("hand-r","hand-l"),ut!=="0"&&document.body.classList.add("hand-"+ut)},k=e.get("rio3d-hand","0");z[k]||(k="0"),B(k);let K=S("uxHand",()=>{k=$[($.indexOf(k)+1)%3],e.set("rio3d-hand",k),B(k),K.textContent=z[k]});K.textContent=z[k],_.push(K)}let v=S("uxVol",()=>{let z=["1",".7",".4"],$=z.indexOf(String(a.api.vol()).replace("0.","."));a.api.setVol(z[($+1)%3]),v.textContent=E()}),E=()=>l("Volumen de este juego: ","Volume (this game): ","\u3053\u306E\u30B2\u30FC\u30E0\u306E\u97F3\u91CF: ")+Math.round(a.api.vol()*100)+" %";v.textContent=E(),_.push(v);let R=S("uxSoft",()=>{a.api.setSoft(!a.api.soft()),R.textContent=I()}),I=()=>a.api.soft()?l("Tono suave: s\xED","Soft tone: on","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30F3"):l("Tono suave: no","Soft tone: off","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30D5");R.textContent=I(),_.push(R);let L=S("uxSleep",()=>{let z=[0,15,30,45];a.api.sleep(z[(z.indexOf(a.api.sleepMin())+1)%4]),L.textContent=P()}),P=()=>a.api.sleepMin()?l("Dormir: ","Sleep: ","\u304A\u3084\u3059\u307F: ")+a.api.sleepMin()+" min":l("Dormir: no","Sleep: off","\u304A\u3084\u3059\u307F: \u30AA\u30D5");if(L.textContent=P(),a._sb=()=>{L.textContent=P()},_.push(L),y.wear){let z=S("uxWear",()=>{e.set("ux-wear",e.get("ux-wear","0")==="1"?"0":"1"),z.textContent=$()}),$=()=>e.get("ux-wear","0")==="1"?l("Desgaste por ausencia: s\xED","Wear while away: on","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30F3"):l("Desgaste por ausencia: no","Wear while away: off","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30D5");z.textContent=$(),_.push(z)}let C=S("uxCalm",()=>{a.setCalm(!a.calm()),C.textContent=F()}),F=()=>a.calm()?l("Menos movimiento y destellos: s\xED","Less motion and flashes: on","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B: \u30AA\u30F3"):l("Menos movimiento y destellos: no","Less motion and flashes: off","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B: \u30AA\u30D5");C.textContent=F(),_.push(C);let V=S("uxAbout",()=>a.about());return V.textContent=l("Acerca de","About","\u3053\u306E\u30B2\u30FC\u30E0\u306B\u3064\u3044\u3066"),_.push(V),_},ask(p,y){let S=document.createElement("div");S.style.cssText="position:fixed;inset:0;z-index:60;display:grid;place-items:center;background:rgba(20,22,48,.6);font:15px/1.4 system-ui,sans-serif";let _=document.createElement("div");_.style.cssText="background:#2b2d52;color:#fbf1e0;border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:20px 22px;max-width:min(86vw,360px);text-align:center";let b=document.createElement("p");b.style.margin="0 0 14px",b.textContent=a.tr(p),_.appendChild(b);let M=(T,v)=>{let E=document.createElement("button");return E.type="button",E.textContent=T,E.style.cssText="margin:0 6px;padding:8px 16px;border-radius:10px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.1);color:inherit;font:inherit;cursor:pointer",E.onclick=()=>{S.remove(),v&&v()},E};_.appendChild(M(l("Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"))),_.appendChild(M(l("S\xED, reiniciar","Yes, restart","\u306F\u3044\u3001\u6700\u521D\u304B\u3089"),y)),S.appendChild(_),document.body.appendChild(S)}},l=(p,y,S)=>n==="en"?y:n==="ja"?S:p,c=(()=>{let p=location.pathname.match(/\/(cabana3d|rio3d|cabana|rio)(\/|$)/);return p?p[1]:/caba/i.test(document.title)?"cabana":"rio"})(),u="ux-vol-"+c,h={vol:e.get(u,e.get("ux-vol","1")),soft:e.get("ux-soft","0")==="1",k:1,nodes:[],end:0,min:0,ov:null};a.quiet=!1;let d=()=>{for(let p of h.nodes)try{let y=p.c.currentTime;p.lp.frequency.setTargetAtTime(h.soft?2800:22e3,y,.1),p.g.gain.setTargetAtTime(+h.vol*h.k,y,.1)}catch{}};a.out=(p,y)=>{let S=p.createBiquadFilter();S.type="lowpass",S.frequency.value=h.soft?2800:22e3,S.Q.value=.5;let _=p.createGain();return _.gain.value=+h.vol*h.k,y.connect(S),S.connect(_),_.connect(p.destination),h.nodes.push({c:p,lp:S,g:_}),_},a.pinkSrc=(p,y)=>{let S=p._pink;if(!S){let M=p.sampleRate,T=Math.floor(M*12),v=Math.floor(M*1.5),E=T+v,R=new Float32Array(E),I=0,L=0,P=0,C=0,F=0,V=0,z=0;for(let B=0;B<E;B++){let k=Math.random()*2-1;I=.99886*I+k*.0555179,L=.99332*L+k*.0750759,P=.969*P+k*.153852,C=.8665*C+k*.3104856,F=.55*F+k*.5329522,V=-.7616*V-k*.016898,R[B]=(I+L+P+C+F+V+z+k*.5362)*.2215*.5,z=k*.115926}S=p.createBuffer(1,T,M);let $=S.getChannelData(0);for(let B=0;B<T;B++)$[B]=R[B];for(let B=0;B<v;B++){let k=B/v*Math.PI/2;$[B]=R[B]*Math.sin(k)+R[T+B]*Math.cos(k)}p._pink=S}let _=p.createBufferSource();_.buffer=S,_.loop=!0;let b=p.createGain();return b.gain.value=y||1,_.connect(b),b.start=(M,T)=>_.start(M||0,T||0),b.stop=M=>_.stop(M),b},a.api={soft:()=>h.soft,setSoft(p){h.soft=!!p,e.set("ux-soft",p?"1":"0"),d()},vol:()=>+h.vol,setVol(p){h.vol=String(p),e.set(u,h.vol),d()},sleepMin:()=>h.min,sleep(p){h.min=p,h.end=p?Date.now()+p*6e4:0,h.k=1,a.quiet=!1,h.ov&&(h.ov.style.opacity=0),d()}},setInterval(()=>{if(!h.end)return;let p=(h.end-Date.now())/1e3;if(!h.ov){let y=document.createElement("div");y.style.cssText="position:fixed;inset:0;z-index:29;pointer-events:none;background:#1a0d00;opacity:0;transition:opacity 1.2s",document.body.appendChild(y),h.ov=y}if(p<=0){h.end=0,h.min=0,h.k=0,d(),h.ov.style.opacity=.6;try{window.PZ&&PZ.set(!0)}catch{}setTimeout(()=>{h.k=1,a.quiet=!1,d(),h.ov.style.opacity=0,a._sb&&a._sb()},1500);return}p<300&&(a.quiet=!0,h.k=Math.pow(p/300,2),h.ov.style.opacity=(1-p/300)*.6,d())},1e3);{let p=0,y=1200;setInterval(()=>{if(!(document.hidden||window.PZ&&(PZ.on||!PZ.started()))&&(p+=5,p>=y)){y+=1800;let S=document.getElementById("uxrest");S||(S=document.createElement("div"),S.id="uxrest",S.setAttribute("aria-live","polite"),S.style.cssText="position:fixed;left:50%;bottom:max(70px,calc(env(safe-area-inset-bottom) + 60px));transform:translateX(-50%);max-width:min(88vw,420px);text-align:center;background:rgba(20,22,48,.88);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:14px/1.4 system-ui,sans-serif;z-index:28;pointer-events:none;transition:opacity .8s;opacity:0",document.body.appendChild(S)),S.textContent=l("Buen momento para soltar los hombros y tomar un poco de agua.","A good moment to relax your shoulders and have some water.","\u80A9\u306E\u529B\u3092\u629C\u3044\u3066\u3001\u6C34\u3092\u4E00\u53E3\u98F2\u3080\u306E\u306B\u3088\u3044\u9803\u5408\u3044\u3067\u3059\u3002"),S.style.opacity=1,clearTimeout(a._rt),a._rt=setTimeout(()=>S.style.opacity=0,7e3)}},5e3)}a.add([["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Respirar","Breathe","\u547C\u5438"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["En pausa","Paused","\u4E00\u6642\u505C\u6B62\u4E2D"],["Respira con calma.","Breathe calmly.","\u3086\u3063\u304F\u308A\u547C\u5438\u3057\u307E\u3057\u3087\u3046\u3002"],["Todo seguir\xE1 aqu\xED cuando vuelvas.","Everything will be here when you return.","\u623B\u3063\u3066\u304F\u308B\u307E\u3067\u3001\u3059\u3079\u3066\u305D\u306E\u307E\u307E\u3067\u3059\u3002"],["Subt\xEDtulos: s\xED","Captions: on","\u5B57\u5E55: \u30AA\u30F3"],["Subt\xEDtulos: no","Captions: off","\u5B57\u5E55: \u30AA\u30D5"],["Vibraci\xF3n: s\xED","Vibration: on","\u632F\u52D5: \u30AA\u30F3"],["Vibraci\xF3n: no","Vibration: off","\u632F\u52D5: \u30AA\u30D5"],["Una mano: no","One hand: off","\u7247\u624B: \u30AA\u30D5"],["Una mano: derecha","One hand: right","\u7247\u624B: \u53F3"],["Una mano: izquierda","One hand: left","\u7247\u624B: \u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"],["Viento","Wind","\u98A8"],["Grillos","Crickets","\u30B3\u30AA\u30ED\u30AE"],["Fregado","Scrubbing","\u3053\u3059\u308B\u97F3"],["Madera que cruje","Creaking wood","\u304D\u3057\u3080\u6728\u306E\u97F3"],["Estrella fugaz","Shooting star","\u6D41\u308C\u661F"]]),a.add([["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"],["Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["Cansado","Tired","\u3064\u304B\u308C\u305F"],["Inquieto","Restless","\u305D\u308F\u305D\u308F"],["Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"],["Es opcional. Solo ajusto el sonido o te ofrezco respirar.","Optional. I only adjust the sound or offer you a breath.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002"],["Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"],["Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"],["Inhala","Breathe in","\u5438\u3063\u3066"],["Exhala","Breathe out","\u5410\u3044\u3066"],["Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"],["Gracias por respirar. Entremos con calma.","Thank you for breathing. Let us go in gently.","\u6DF1\u547C\u5438\u3042\u308A\u304C\u3068\u3046\u3002\u3086\u3063\u304F\u308A\u5165\u308A\u307E\u3057\u3087\u3046\u3002"],["Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"]]);function m(p){let y=document.createElement("div");y.style.cssText="position:fixed;inset:0;z-index:70;display:grid;place-items:center;align-content:center;gap:18px;background:rgba(20,22,48,.92);color:#fbf1e0;font:600 1.1rem system-ui;text-align:center";let S=document.createElement("div");S.style.cssText="width:110px;height:110px;border-radius:50%;background:radial-gradient(circle,#ffe9b8,#ffb86b 70%);box-shadow:0 0 50px rgba(255,200,120,.45);transform:scale(.55);transition:transform 4s ease-in-out";let _=document.createElement("div"),b=document.createElement("div");b.textContent=l("Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"),b.style.cssText="font-weight:400;opacity:.75;font-size:.9rem";let M=document.createElement("button");M.type="button",M.textContent=l("Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"),M.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#363a66;color:#fbf1e0;font:inherit;font-size:.9rem;cursor:pointer",y.append(b,S,_,M),document.body.appendChild(y);let T=0,v=!0,E,R=L=>{v&&(v=!1,clearTimeout(E),y.remove(),p&&p(L))};M.onclick=()=>R(!1);let I=()=>{if(v){if(T>=5)return R(!0);T++,_.textContent=l("Inhala","Breathe in","\u5438\u3063\u3066"),S.style.transition="transform 4s ease-in-out",S.style.transform="scale(1)",a.hap(8),E=setTimeout(()=>{v&&(_.textContent=l("Exhala","Breathe out","\u5410\u3044\u3066"),S.style.transition="transform 6s ease-in-out",S.style.transform="scale(.55)",E=setTimeout(I,6e3))},4e3)}};I()}a.calm=()=>{let p=e.get("ux-calm",null);if(p==="1")return!0;if(p==="0")return!1;try{return!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)}catch{return!1}},a.setCalm=p=>{e.set("ux-calm",p?"1":"0")},a.about=()=>{let p=document.getElementById("uxAboutOv");if(p){p.remove();return}let y=document.createElement("div");y.id="uxAboutOv",y.setAttribute("role","dialog"),y.setAttribute("aria-modal","true"),y.style.cssText="position:fixed;inset:0;z-index:90;display:grid;place-items:center;background:rgba(14,16,36,.88);padding:12px";let S=document.createElement("div");S.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(92vw,440px);max-height:84vh;overflow:auto;font:15px/1.5 system-ui,sans-serif";let _=document.createElement("h2");_.style.cssText="margin:0 0 6px;font:600 1.2rem system-ui",_.textContent="Tomoshibi";let b=document.createElement("div");b.style.cssText="margin:0 0 10px;opacity:.7;font-size:.85em",b.textContent=l("\u3068\u3082\u3057\u3073 \xB7 Luz de l\xE1mpara \xB7 Juegos Sin Prisa","\u3068\u3082\u3057\u3073 \xB7 Lamplight \xB7 No-Rush Games","\u3068\u3082\u3057\u3073 \xB7 \u306E\u3093\u3073\u308A\u904A\u3079\u308B\u30B2\u30FC\u30E0");let M=document.createElement("p");M.style.cssText="margin:0 0 10px;opacity:.85",M.textContent=l("Juegos tranquilos, sin puntaje ni tiempo. Nada que ganar ni perder.","Calm games with no score and no timer. Nothing to win or lose.","\u30B9\u30B3\u30A2\u3082\u6642\u9593\u3082\u306A\u3044\u3001\u304A\u3060\u3084\u304B\u306A\u30B2\u30FC\u30E0\u3002\u52DD\u3061\u8CA0\u3051\u306F\u3042\u308A\u307E\u305B\u3093\u3002");let T=document.createElement("p");T.style.cssText="margin:0 0 10px;opacity:.85;font-size:.9em",T.textContent=l("Es un juego de descanso: no es un producto m\xE9dico ni de terapia y no sustituye la ayuda de un profesional.","This is a game for rest: it is not a medical or therapy product and does not replace professional help.","\u3053\u308C\u306F\u4F11\u606F\u306E\u305F\u3081\u306E\u30B2\u30FC\u30E0\u3067\u3059\u3002\u533B\u7642\u3084\u30BB\u30E9\u30D4\u30FC\u306E\u88FD\u54C1\u3067\u306F\u306A\u304F\u3001\u5C02\u9580\u5BB6\u306E\u52A9\u3051\u306E\u4EE3\u308F\u308A\u306B\u306F\u306A\u308A\u307E\u305B\u3093\u3002");let v=document.createElement("div");v.style.cssText="display:flex;flex-wrap:wrap;gap:8px;margin:6px 0 12px",[["privacidad.html",l("Privacidad","Privacy","\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC")],["datos.html",l("Mis datos","My data","\u30C7\u30FC\u30BF")],["creditos.html",l("Cr\xE9ditos y licencias","Credits and licenses","\u30AF\u30EC\u30B8\u30C3\u30C8\u3068\u30E9\u30A4\u30BB\u30F3\u30B9")]].forEach(R=>{let I=document.createElement("a");I.href="../"+R[0],I.textContent=R[1],I.style.cssText="color:#ffc77a;min-height:44px;display:inline-flex;align-items:center;padding:0 6px",v.appendChild(I)});let E=document.createElement("button");E.type="button",E.textContent=l("Cerrar","Close","\u9589\u3058\u308B"),E.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",E.onclick=()=>y.remove(),S.append(_,b,M,T,v,E),y.appendChild(S),y.onclick=R=>{R.target===y&&y.remove()},document.body.appendChild(y);try{E.focus()}catch{}},a.say=p=>{let y=document.getElementById("uxsay");y||(y=document.createElement("div"),y.id="uxsay",y.setAttribute("role","status"),y.setAttribute("aria-live","polite"),y.style.cssText="position:fixed;left:50%;bottom:max(90px,calc(env(safe-area-inset-bottom) + 80px));transform:translateX(-50%);max-width:min(88vw,420px);background:rgba(20,22,48,.9);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:500 .85rem/1.35 system-ui;text-align:center;z-index:65;pointer-events:none;transition:opacity .5s;opacity:0",document.body.appendChild(y)),y.textContent=p,y.style.opacity=1,clearTimeout(a._st),a._st=setTimeout(()=>y.style.opacity=0,4200)},a.breathe=m,a.mood=()=>x();function x(){let p=document.getElementById("go");if(!p||document.getElementById("uxmood"))return;let y=document.createElement("div");y.id="uxmood",y.style.cssText="display:flex;flex-direction:column;align-items:center;gap:8px;margin:0 0 14px";let S=document.createElement("div");S.textContent=l("\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"),S.style.cssText="font:600 .95rem system-ui;opacity:.9";let _=document.createElement("div");_.style.cssText="display:flex;flex-wrap:wrap;gap:8px;justify-content:center";let b=document.createElement("div");b.textContent=l("Es opcional. Solo ajusto el sonido o te ofrezco respirar. Es un juego de descanso, no sustituye ayuda profesional.","Optional. I only adjust the sound or offer a breath. This is a game for rest, not a substitute for professional help.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002\u4F11\u606F\u306E\u305F\u3081\u306E\u30B2\u30FC\u30E0\u3067\u3001\u5C02\u9580\u5BB6\u306E\u52A9\u3051\u306E\u4EE3\u308F\u308A\u306B\u306F\u306A\u308A\u307E\u305B\u3093\u3002"),b.style.cssText="font:400 .72rem system-ui;opacity:.6";let M=null,T={};[["calm","Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["tired","Cansado","Tired","\u3064\u304B\u308C\u305F"],["rest","Inquieto","Restless","\u305D\u308F\u305D\u308F"],["think","Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"]].forEach(([v,E,R,I])=>{let L=document.createElement("button");L.type="button",L.textContent=l(E,R,I),L.style.cssText="min-height:44px;padding:8px 14px;border-radius:99px;border:1px solid #5a609a;background:rgba(54,58,102,.7);color:#fbf1e0;font:500 .85rem system-ui;cursor:pointer",L.onclick=()=>{M=M===v?null:v;for(let P in T)T[P].style.borderColor=P===M?"#ffc77a":"#5a609a",T[P].style.background=P===M?"rgba(255,199,122,.22)":"rgba(54,58,102,.7)";a.hap(6)},T[v]=L,_.appendChild(L)}),y.append(S,_,b),p.parentNode.insertBefore(y,p),p.addEventListener("click",()=>{e.set("ux-mood",M||""),M==="tired"&&(a.api.setSoft(!0),+a.api.vol()>.7&&a.api.setVol(".7"),setTimeout(()=>{try{a.say(l("Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"))}catch{}},900)),M==="rest"&&setTimeout(()=>m(),600),M==="think"&&setTimeout(()=>{try{a.say(l("Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"))}catch{}},900)},!0)}let g=a.init;a.init=function(){g.apply(this,arguments);try{x()}catch{}}})();var Om=0,Gd=1,zm=2;var Ja=1,Hm=2,Lo=3,ir=0,In=1,Zt=2,os=0,Vi=1,Vn=2,Vd=3,Wd=4,km=5;var Tr=100,Gm=101,Vm=102,Wm=103,Xm=104,qm=200,Ym=201,Zm=202,Jm=203,Xd=204,qd=205,$m=206,Km=207,jm=208,Qm=209,t0=210,e0=211,n0=212,i0=213,s0=214,yc=0,vc=1,_c=2,So=3,Mc=4,bc=5,Sc=6,Ec=7,ru=0,r0=1,o0=2,Wi=0,Yd=1,Zd=2,Jd=3,$d=4,Kd=5,jd=6,Qd=7;var tf=300,sr=301,Ar=302,ou=303,au=304,$a=306,$s=1e3,ts=1001,wc=1002,bn=1003,a0=1004;var Ka=1005;var Rn=1006,lu=1007;var as=1008;var li=1009,ef=1010,nf=1011,No=1012,cu=1013,Xi=1014,Pi=1015,_i=1016,uu=1017,hu=1018,Uo=1020,sf=35902,rf=35899,of=1021,af=1022,ci=1023,es=1026,rr=1027,Fo=1028,du=1029,or=1030,fu=1031;var pu=1033,ja=33776,Qa=33777,tl=33778,el=33779,mu=35840,gu=35841,xu=35842,yu=35843,vu=36196,_u=37492,Mu=37496,bu=37488,Su=37489,nl=37490,Eu=37491,wu=37808,Tu=37809,Au=37810,Ru=37811,Cu=37812,Iu=37813,Pu=37814,Du=37815,Lu=37816,Nu=37817,Uu=37818,Fu=37819,Bu=37820,Ou=37821,zu=36492,Hu=36494,ku=36495,Gu=36283,Vu=36284,il=36285,Wu=36286;var Ea=2300,Tc=2301,gc=2302,Ld=2303,Nd=2400,Ud=2401,Fd=2402;var l0=3200;var sl=0,c0=1,Is="",An="srgb",wa="srgb-linear",Ta="linear",ze="srgb";var xc=7680;var u0=519,h0=512,d0=513,f0=514,Xu=515,p0=516,m0=517,qu=518,g0=519,lf=35044;var cf="300 es",zi=2e3,Eo=2001;function ov(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function av(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function x0(){let i=Aa("canvas");return i.style.display="block",i}var sm={},wo=null;function Ra(...i){let t="THREE."+i.shift();wo?wo("log",t,...i):console.log(t,...i)}function y0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Wt(...i){i=y0(i);let t="THREE."+i.shift();if(wo)wo("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Yt(...i){i=y0(i);let t="THREE."+i.shift();if(wo)wo("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Er(...i){let t=i.join(" ");t in sm||(sm[t]=!0,Wt(...i))}function v0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var _0={[yc]:vc,[_c]:Sc,[Mc]:Ec,[So]:bc,[vc]:yc,[Sc]:_c,[Ec]:Mc,[bc]:So},ns=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rd=Math.PI/180,Ac=180/Math.PI;function Js(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]+"-"+kn[t&255]+kn[t>>8&255]+"-"+kn[t>>16&15|64]+kn[t>>24&255]+"-"+kn[e&63|128]+kn[e>>8&255]+"-"+kn[e>>16&255]+kn[e>>24&255]+kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function lv(i,t){return(i%t+t)%t}function od(i,t,e){return(1-e)*i+e*t}function Qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var mf=class mf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mf.prototype.isVector2=!0;var At=mf,pn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(h!==x||l!==d||c!==f||u!==m){let g=l*d+c*f+u*m+h*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let y=Math.acos(g),S=Math.sin(y);p=Math.sin(p*y)/S,a=Math.sin(a*y)/S,l=l*p+d*a,c=c*p+f*a,u=u*p+m*a,h=h*p+x*a}else{l=l*p+d*a,c=c*p+f*a,u=u*p+m*a,h=h*p+x*a;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+u*h+l*f-c*d,t[e+1]=l*m+u*d+c*h-a*f,t[e+2]=c*m+u*f+a*d-l*h,t[e+3]=u*m-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gf=class gf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ad.copy(this).projectOnVector(t),this.sub(ad)}reflect(t){return this.sub(ad.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gf.prototype.isVector3=!0;var D=gf,ad=new D,rm=new pn,xf=class xf{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],S=s[4],_=s[7],b=s[2],M=s[5],T=s[8];return r[0]=o*x+a*y+l*b,r[3]=o*g+a*S+l*M,r[6]=o*p+a*_+l*T,r[1]=c*x+u*y+h*b,r[4]=c*g+u*S+h*M,r[7]=c*p+u*_+h*T,r[2]=d*x+f*y+m*b,r[5]=d*g+f*S+m*M,r[8]=d*p+f*_+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,m=e*h+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ld.makeScale(t,e)),this}rotate(t){return Er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ld.makeRotation(-t)),this}translate(t,e){return Er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ld.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xf.prototype.isMatrix3=!0;var Qt=xf,ld=new Qt,om=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),am=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cv(){let i={enabled:!0,workingColorSpace:wa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ze&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ze&&(s.r=bo(s.r),s.g=bo(s.g),s.b=bo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Is?Ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wa]:{primaries:t,whitePoint:n,transfer:Ta,toXYZ:om,fromXYZ:am,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:n,transfer:ze,toXYZ:om,fromXYZ:am,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}var Se=cv();function Ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var io,Rc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{io===void 0&&(io=Aa("canvas")),io.width=t.width,io.height=t.height;let s=io.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=io}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Aa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ts(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ts(e[n]/255)*255):e[n]=Ts(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},uv=0,To=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Js(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cd(s[o].image)):r.push(cd(s[o]))}else r=cd(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function cd(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Rc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var hv=0,ud=new D,$n=class i extends ns{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ts,s=ts,r=Rn,o=as,a=ci,l=li,c=i.DEFAULT_ANISOTROPY,u=Is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=Js(),this.name="",this.source=new To(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $s:t.x=t.x-Math.floor(t.x);break;case ts:t.x=t.x<0?0:1;break;case wc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $s:t.y=t.y-Math.floor(t.y);break;case ts:t.y=t.y<0?0:1;break;case wc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=tf;$n.DEFAULT_ANISOTROPY=1;var yf=class yf{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,_=(f+1)/2,b=(p+1)/2,M=(u+d)/4,T=(h+x)/4,v=(m+g)/4;return S>_&&S>b?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=M/n,r=T/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=M/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=T/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yf.prototype.isVector4=!0;var Je=yf,Cc=class extends ns{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new $n(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new To(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends Cc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ca=class extends $n{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ic=class extends $n{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var su=class su{constructor(t,e,n,s,r,o,a,l,c,u,h,d,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,f,m,x,g)}set(t,e,n,s,r,o,a,l,c,u,h,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new su().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/so.setFromMatrixColumn(t,0).length(),r=1/so.setFromMatrixColumn(t,1).length(),o=1/so.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=o*u,f=o*h,m=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,f=l*h,m=c*u,x=c*h;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,f=l*h,m=c*u,x=c*h;e[0]=d-x*a,e[4]=-o*h,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,f=o*h,m=a*u,x=a*h;e[0]=l*u,e[4]=m*c-f,e[8]=d*c+x,e[1]=l*h,e[5]=x*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*u,e[4]=x-d*h,e[8]=m*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+m,e[10]=d-x*h}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+x,e[5]=o*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dv,t,fv)}lookAt(t,e,n){let s=this.elements;return mi.subVectors(t,e),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Ws.crossVectors(n,mi),Ws.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Ws.crossVectors(n,mi)),Ws.normalize(),Vl.crossVectors(mi,Ws),s[0]=Ws.x,s[4]=Vl.x,s[8]=mi.x,s[1]=Ws.y,s[5]=Vl.y,s[9]=mi.y,s[2]=Ws.z,s[6]=Vl.z,s[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],S=n[7],_=n[11],b=n[15],M=s[0],T=s[4],v=s[8],E=s[12],R=s[1],I=s[5],L=s[9],P=s[13],C=s[2],F=s[6],V=s[10],z=s[14],$=s[3],B=s[7],k=s[11],K=s[15];return r[0]=o*M+a*R+l*C+c*$,r[4]=o*T+a*I+l*F+c*B,r[8]=o*v+a*L+l*V+c*k,r[12]=o*E+a*P+l*z+c*K,r[1]=u*M+h*R+d*C+f*$,r[5]=u*T+h*I+d*F+f*B,r[9]=u*v+h*L+d*V+f*k,r[13]=u*E+h*P+d*z+f*K,r[2]=m*M+x*R+g*C+p*$,r[6]=m*T+x*I+g*F+p*B,r[10]=m*v+x*L+g*V+p*k,r[14]=m*E+x*P+g*z+p*K,r[3]=y*M+S*R+_*C+b*$,r[7]=y*T+S*I+_*F+b*B,r[11]=y*v+S*L+_*V+b*k,r[15]=y*E+S*P+_*z+b*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],y=l*f-c*d,S=a*f-c*h,_=a*d-l*h,b=o*f-c*u,M=o*d-l*u,T=o*h-a*u;return e*(x*y-g*S+p*_)-n*(m*y-g*b+p*M)+s*(m*S-x*b+p*T)-r*(m*_-x*M+g*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],y=e*a-n*o,S=e*l-s*o,_=e*c-r*o,b=n*l-s*a,M=n*c-r*a,T=s*c-r*l,v=u*x-h*m,E=u*g-d*m,R=u*p-f*m,I=h*g-d*x,L=h*p-f*x,P=d*p-f*g,C=y*P-S*L+_*I+b*R-M*E+T*v;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/C;return t[0]=(a*P-l*L+c*I)*F,t[1]=(s*L-n*P-r*I)*F,t[2]=(x*T-g*M+p*b)*F,t[3]=(d*M-h*T-f*b)*F,t[4]=(l*R-o*P-c*E)*F,t[5]=(e*P-s*R+r*E)*F,t[6]=(g*_-m*T-p*S)*F,t[7]=(u*T-d*_+f*S)*F,t[8]=(o*L-a*R+c*v)*F,t[9]=(n*R-e*L-r*v)*F,t[10]=(m*M-x*_+p*y)*F,t[11]=(h*_-u*M-f*y)*F,t[12]=(a*E-o*I-l*v)*F,t[13]=(e*I-n*E+s*v)*F,t[14]=(x*S-m*b-g*y)*F,t[15]=(u*b-h*S+d*y)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,m=r*h,x=o*u,g=o*h,p=a*h,y=l*c,S=l*u,_=l*h,b=n.x,M=n.y,T=n.z;return s[0]=(1-(x+p))*b,s[1]=(f+_)*b,s[2]=(m-S)*b,s[3]=0,s[4]=(f-_)*M,s[5]=(1-(d+p))*M,s[6]=(g+y)*M,s[7]=0,s[8]=(m+S)*T,s[9]=(g-y)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=so.set(s[0],s[1],s[2]).length(),a=so.set(s[4],s[5],s[6]).length(),l=so.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ui.copy(this);let c=1/o,u=1/a,h=1/l;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=u,Ui.elements[5]*=u,Ui.elements[6]*=u,Ui.elements[8]*=h,Ui.elements[9]*=h,Ui.elements[10]*=h,e.setFromRotationMatrix(Ui),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=zi,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===zi)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Eo)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=zi,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===zi)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Eo)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};su.prototype.isMatrix4=!0;var me=su,so=new D,Ui=new me,dv=new D(0,0,0),fv=new D(1,1,1),Ws=new D,Vl=new D,mi=new D,lm=new me,cm=new pn,Hi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cm.setFromEuler(this),this.setFromQuaternion(cm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hi.DEFAULT_ORDER="XYZ";var Ia=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pv=0,um=new D,ro=new pn,_s=new me,Wl=new D,da=new D,mv=new D,gv=new pn,hm=new D(1,0,0),dm=new D(0,1,0),fm=new D(0,0,1),pm={type:"added"},xv={type:"removed"},oo={type:"childadded",child:null},hd={type:"childremoved",child:null},Cn=class i extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Hi,n=new pn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Qt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ro.setFromAxisAngle(t,e),this.quaternion.multiply(ro),this}rotateOnWorldAxis(t,e){return ro.setFromAxisAngle(t,e),this.quaternion.premultiply(ro),this}rotateX(t){return this.rotateOnAxis(hm,t)}rotateY(t){return this.rotateOnAxis(dm,t)}rotateZ(t){return this.rotateOnAxis(fm,t)}translateOnAxis(t,e){return um.copy(t).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hm,t)}translateY(t){return this.translateOnAxis(dm,t)}translateZ(t){return this.translateOnAxis(fm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_s.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wl.copy(t):Wl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_s.lookAt(da,Wl,this.up):_s.lookAt(Wl,da,this.up),this.quaternion.setFromRotationMatrix(_s),s&&(_s.extractRotation(s.matrixWorld),ro.setFromRotationMatrix(_s),this.quaternion.premultiply(ro.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pm),oo.child=t,this.dispatchEvent(oo),oo.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xv),hd.child=t,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_s.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_s.multiply(t.parent.matrixWorld)),t.applyMatrix4(_s),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pm),oo.child=t,this.dispatchEvent(oo),oo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,t,mv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,gv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Cn.DEFAULT_UP=new D(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gt=class extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},yv={type:"move"},Ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},M0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xs={h:0,s:0,l:0},Xl={h:0,s:0,l:0};function dd(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ct=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Se.workingColorSpace){if(t=lv(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=dd(o,r,t+1/3),this.g=dd(o,r,t),this.b=dd(o,r,t-1/3)}return Se.colorSpaceToWorking(this,s),this}setStyle(t,e=An){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){let n=M0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}copyLinearToSRGB(t){return this.r=bo(t.r),this.g=bo(t.g),this.b=bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return Se.workingToColorSpace(Gn.copy(this),t),Math.round(_e(Gn.r*255,0,255))*65536+Math.round(_e(Gn.g*255,0,255))*256+Math.round(_e(Gn.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.workingToColorSpace(Gn.copy(this),e);let n=Gn.r,s=Gn.g,r=Gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Se.workingColorSpace){return Se.workingToColorSpace(Gn.copy(this),e),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=An){Se.workingToColorSpace(Gn.copy(this),t);let e=Gn.r,n=Gn.g,s=Gn.b;return t!==An?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xs),this.setHSL(Xs.h+t,Xs.s+e,Xs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xs),t.getHSL(Xl);let n=od(Xs.h,Xl.h,e),s=od(Xs.s,Xl.s,e),r=od(Xs.l,Xl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new ct;ct.NAMES=M0;var Pa=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ct(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},wr=class extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fi=new D,Ms=new D,fd=new D,bs=new D,ao=new D,lo=new D,mm=new D,pd=new D,md=new D,gd=new D,xd=new Je,yd=new Je,vd=new Je,ws=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fi.subVectors(t,e),s.cross(Fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fi.subVectors(s,e),Ms.subVectors(n,e),fd.subVectors(t,e);let o=Fi.dot(Fi),a=Fi.dot(Ms),l=Fi.dot(fd),c=Ms.dot(Ms),u=Ms.dot(fd),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bs)===null?!1:bs.x>=0&&bs.y>=0&&bs.x+bs.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,bs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bs.x),l.addScaledVector(o,bs.y),l.addScaledVector(a,bs.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return xd.setScalar(0),yd.setScalar(0),vd.setScalar(0),xd.fromBufferAttribute(t,e),yd.fromBufferAttribute(t,n),vd.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xd,r.x),o.addScaledVector(yd,r.y),o.addScaledVector(vd,r.z),o}static isFrontFacing(t,e,n,s){return Fi.subVectors(n,e),Ms.subVectors(t,e),Fi.cross(Ms).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ms.subVectors(this.a,this.b),Fi.cross(Ms).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ao.subVectors(s,n),lo.subVectors(r,n),pd.subVectors(t,n);let l=ao.dot(pd),c=lo.dot(pd);if(l<=0&&c<=0)return e.copy(n);md.subVectors(t,s);let u=ao.dot(md),h=lo.dot(md);if(u>=0&&h<=u)return e.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ao,o);gd.subVectors(t,r);let f=ao.dot(gd),m=lo.dot(gd);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(lo,a);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return mm.subVectors(r,s),a=(h-u)/(h-u+(f-m)),e.copy(s).addScaledVector(mm,a);let p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(ao,o).addScaledVector(lo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},is=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Bi):Bi.fromBufferAttribute(r,o),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ql.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ql.copy(n.boundingBox)),ql.applyMatrix4(t.matrixWorld),this.union(ql)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fa),Yl.subVectors(this.max,fa),co.subVectors(t.a,fa),uo.subVectors(t.b,fa),ho.subVectors(t.c,fa),qs.subVectors(uo,co),Ys.subVectors(ho,uo),_r.subVectors(co,ho);let e=[0,-qs.z,qs.y,0,-Ys.z,Ys.y,0,-_r.z,_r.y,qs.z,0,-qs.x,Ys.z,0,-Ys.x,_r.z,0,-_r.x,-qs.y,qs.x,0,-Ys.y,Ys.x,0,-_r.y,_r.x,0];return!_d(e,co,uo,ho,Yl)||(e=[1,0,0,0,1,0,0,0,1],!_d(e,co,uo,ho,Yl))?!1:(Zl.crossVectors(qs,Ys),e=[Zl.x,Zl.y,Zl.z],_d(e,co,uo,ho,Yl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ss),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ss=[new D,new D,new D,new D,new D,new D,new D,new D],Bi=new D,ql=new is,co=new D,uo=new D,ho=new D,qs=new D,Ys=new D,_r=new D,fa=new D,Yl=new D,Zl=new D,Mr=new D;function _d(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Mr.fromArray(i,r);let a=s.x*Math.abs(Mr.x)+s.y*Math.abs(Mr.y)+s.z*Math.abs(Mr.z),l=t.dot(Mr),c=e.dot(Mr),u=n.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Mn=new D,Jl=new At,vv=0,kt=class extends ns{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lf,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jl.fromBufferAttribute(this,e),Jl.applyMatrix3(t),this.setXY(e,Jl.x,Jl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix3(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Da=class extends kt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var La=class extends kt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends kt{constructor(t,e,n){super(new Float32Array(t),e,n)}},_v=new is,pa=new D,Md=new D,ss=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_v.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pa.subVectors(t,this.center);let e=pa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(pa,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Md.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pa.copy(t.center).add(Md)),this.expandByPoint(pa.copy(t.center).sub(Md))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mv=0,Ri=new me,bd=new Cn,fo=new D,gi=new is,ma=new is,Nn=new D,jt=class i extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ov(t)?La:Da)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,e,n){return Ri.makeTranslation(t,e,n),this.applyMatrix4(Ri),this}scale(t,e,n){return Ri.makeScale(t,e,n),this.applyMatrix4(Ri),this}lookAt(t){return bd.lookAt(t),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ma.setFromBufferAttribute(a),this.morphTargetsRelative?(Nn.addVectors(gi.min,ma.min),gi.expandByPoint(Nn),Nn.addVectors(gi.max,ma.max),gi.expandByPoint(Nn)):(gi.expandByPoint(ma.min),gi.expandByPoint(ma.max))}gi.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Nn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Nn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nn.fromBufferAttribute(a,c),l&&(fo.fromBufferAttribute(t,c),Nn.add(fo)),s=Math.max(s,n.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new D,l[v]=new D;let c=new D,u=new D,h=new D,d=new At,f=new At,m=new At,x=new D,g=new D;function p(v,E,R){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,R),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),u.sub(c),h.sub(c),f.sub(d),m.sub(d);let I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(I),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(I),a[v].add(x),a[E].add(x),a[R].add(x),l[v].add(g),l[E].add(g),l[R].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,E=y.length;v<E;++v){let R=y[v],I=R.start,L=R.count;for(let P=I,C=I+L;P<C;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let S=new D,_=new D,b=new D,M=new D;function T(v){b.fromBufferAttribute(s,v),M.copy(b);let E=a[v];S.copy(E),S.sub(b.multiplyScalar(b.dot(E))).normalize(),_.crossVectors(M,E);let I=_.dot(l[v])<0?-1:1;o.setXYZW(v,S.x,S.y,S.z,I)}for(let v=0,E=y.length;v<E;++v){let R=y[v],I=R.start,L=R.count;for(let P=I,C=I+L;P<C;P+=3)T(t.getX(P+0)),T(t.getX(P+1)),T(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new kt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Nn.fromBufferAttribute(t,e),Nn.normalize(),t.setXYZ(e,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new kt(d,u,h)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Na=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lf,this.updateRanges=[],this.version=0,this.uuid=Js()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Js()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Js()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Jn=new D,Ro=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Jn.fromBufferAttribute(this,e),Jn.applyMatrix4(t),this.setXYZ(e,Jn.x,Jn.y,Jn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Jn.fromBufferAttribute(this,e),Jn.applyNormalMatrix(t),this.setXYZ(e,Jn.x,Jn.y,Jn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Jn.fromBufferAttribute(this,e),Jn.transformDirection(t),this.setXYZ(e,Jn.x,Jn.y,Jn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ra("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new kt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ra("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Sd=new D,bv=new D,Sv=new Qt,Oi=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Sd.subVectors(n,e).cross(bv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Sd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sv.getNormalMatrix(t),s=this.coplanarPoint(Sd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ev=0,ai=class extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Vi,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=qd,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xc,this.stencilZFail=xc,this.stencilZPass=xc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Oi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new At().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},rs=class extends ai{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},po,ga=new D,mo=new D,go=new D,xo=new At,xa=new At,b0=new me,$l=new D,ya=new D,Kl=new D,gm=new At,Ed=new At,xm=new At,As=class extends Cn{constructor(t=new rs){if(super(),this.isSprite=!0,this.type="Sprite",po===void 0){po=new jt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Na(e,5);po.setIndex([0,1,2,0,2,3]),po.setAttribute("position",new Ro(n,3,0,!1)),po.setAttribute("uv",new Ro(n,2,3,!1))}this.geometry=po,this.material=t,this.center=new At(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mo.setFromMatrixScale(this.matrixWorld),b0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),go.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mo.multiplyScalar(-go.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;jl($l.set(-.5,-.5,0),go,o,mo,s,r),jl(ya.set(.5,-.5,0),go,o,mo,s,r),jl(Kl.set(.5,.5,0),go,o,mo,s,r),gm.set(0,0),Ed.set(1,0),xm.set(1,1);let a=t.ray.intersectTriangle($l,ya,Kl,!1,ga);if(a===null&&(jl(ya.set(-.5,.5,0),go,o,mo,s,r),Ed.set(0,1),a=t.ray.intersectTriangle($l,Kl,ya,!1,ga),a===null))return;let l=t.ray.origin.distanceTo(ga);l<t.near||l>t.far||e.push({distance:l,point:ga.clone(),uv:ws.getInterpolation(ga,$l,ya,Kl,gm,Ed,xm,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function jl(i,t,e,n,s,r){xo.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(xa.x=r*xo.x-s*xo.y,xa.y=s*xo.x+r*xo.y):xa.copy(xo),i.copy(t),i.x+=xa.x,i.y+=xa.y,i.applyMatrix4(b0)}var Es=new D,wd=new D,Ql=new D,tc=new D,Co=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Es)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Es.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Es.copy(this.origin).addScaledVector(this.direction,e),Es.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){wd.copy(t).add(e).multiplyScalar(.5),Ql.copy(e).sub(t).normalize(),tc.copy(this.origin).sub(wd);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ql),a=tc.dot(this.direction),l=-tc.dot(Ql),c=tc.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=r*u,h>=0)if(d>=-m)if(d<=m){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(wd).addScaledVector(Ql,d),f}intersectSphere(t,e){if(t.radius<0)return null;Es.subVectors(t.center,this.origin);let n=Es.dot(this.direction),s=Es.dot(Es)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Es)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,d=t.y-o.y,f=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=n.x-o.x,y=n.y-o.y,S=n.z-o.z,_=Math.abs(l),b=Math.abs(c),M=Math.abs(u),T,v,E,R,I,L,P,C,F,V,z,$;if(_>=b&&_>=M?(E=l,L=h,F=m,$=p,l>=0?(T=c,v=u,R=d,I=f,P=x,C=g,V=y,z=S):(T=u,v=c,R=f,I=d,P=g,C=x,V=S,z=y)):b>=M?(E=c,L=d,F=x,$=y,c>=0?(T=u,v=l,R=f,I=h,P=g,C=m,V=S,z=p):(T=l,v=u,R=h,I=f,P=m,C=g,V=p,z=S)):(E=u,L=f,F=g,$=S,u>=0?(T=l,v=c,R=h,I=d,P=m,C=x,V=p,z=y):(T=c,v=l,R=d,I=h,P=x,C=m,V=y,z=p)),E===0)return null;let B=T/E,k=v/E,K=1/E,ut=R-B*L,Rt=I-k*L,ue=P-B*F,te=C-k*F,Vt=V-B*$,nt=z-k*$,at=Vt*te-nt*ue,wt=ut*nt-Rt*Vt,zt=ue*Rt-te*ut;if(s){if(at<0||wt<0||zt<0)return null}else if((at<0||wt<0||zt<0)&&(at>0||wt>0||zt>0))return null;let bt=at+wt+zt;if(bt===0)return null;let ne=K*(at*L+wt*F+zt*$);return(bt>0?ne<0:ne>0)?null:this.at(ne/bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ym=new me,br=new Co,ec=new ss,vm=new D,nc=new D,ic=new D,sc=new D,Td=new D,rc=new D,_m=new D,oc=new D,q=class extends Cn{constructor(t=new jt,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){rc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Td.fromBufferAttribute(h,t),o?rc.addScaledVector(Td,u):rc.addScaledVector(Td.sub(e),u))}e.add(rc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ec.copy(n.boundingSphere),ec.applyMatrix4(r),br.copy(t.ray).recast(t.near),!(ec.containsPoint(br.origin)===!1&&(br.intersectSphere(ec,vm)===null||br.origin.distanceToSquared(vm)>(t.far-t.near)**2))&&(ym.copy(r).invert(),br.copy(t.ray).applyMatrix4(ym),!(n.boundingBox!==null&&br.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,br)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,b=S;_<b;_+=3){let M=a.getX(_),T=a.getX(_+1),v=a.getX(_+2);s=ac(this,p,t,n,c,u,h,M,T,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),S=a.getX(g+1),_=a.getX(g+2);s=ac(this,o,t,n,c,u,h,y,S,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,b=S;_<b;_+=3){let M=_,T=_+1,v=_+2;s=ac(this,p,t,n,c,u,h,M,T,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=g,S=g+1,_=g+2;s=ac(this,o,t,n,c,u,h,y,S,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function wv(i,t,e,n,s,r,o,a){let l;if(t.side===In?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ir,a),l===null)return null;oc.copy(a),oc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(oc);return c<e.near||c>e.far?null:{distance:c,point:oc.clone(),object:i}}function ac(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,nc),i.getVertexPosition(l,ic),i.getVertexPosition(c,sc);let u=wv(i,t,e,n,nc,ic,sc,_m);if(u){let h=new D;ws.getBarycoord(_m,nc,ic,sc,h),s&&(u.uv=ws.getInterpolatedAttribute(s,a,l,c,h,new At)),r&&(u.uv1=ws.getInterpolatedAttribute(r,a,l,c,h,new At)),o&&(u.normal=ws.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new D,materialIndex:0};ws.getNormal(nc,ic,sc,d.normal),u.face=d,u.barycoord=h}return u}var Rs=class extends $n{constructor(t=null,e=1,n=1,s,r,o,a,l,c=bn,u=bn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ki=class extends kt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},yo=new me,Mm=new me,lc=[],bm=new is,Tv=new me,va=new q,_a=new ss,Un=class extends q{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ki(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new is),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yo),bm.copy(t.boundingBox).applyMatrix4(yo),this.boundingBox.union(bm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yo),_a.copy(t.boundingSphere).applyMatrix4(yo),this.boundingSphere.union(_a)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(va.geometry=this.geometry,va.material=this.material,va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(n),t.ray.intersectsSphere(_a)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yo),Mm.multiplyMatrices(n,yo),va.matrixWorld=Mm,va.raycast(t,lc);for(let o=0,a=lc.length;o<a;o++){let l=lc[o];l.instanceId=r,l.object=this,e.push(l)}lc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ki(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rs(new Float32Array(s*this.count),s,this.count,Fo,Pi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Sr=new ss,Av=new At(.5,.5),cc=new D,Io=class{constructor(t=new Oi,e=new Oi,n=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],y=r[12],S=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-o,f-u,p-m,b-y).normalize(),s[1].setComponents(c+o,f+u,p+m,b+y).normalize(),s[2].setComponents(c+a,f+h,p+x,b+S).normalize(),s[3].setComponents(c-a,f-h,p-x,b-S).normalize(),n)s[4].setComponents(l,d,g,_).normalize(),s[5].setComponents(c-l,f-d,p-g,b-_).normalize();else if(s[4].setComponents(c-l,f-d,p-g,b-_).normalize(),e===zi)s[5].setComponents(c+l,f+d,p+g,b+_).normalize();else if(e===Eo)s[5].setComponents(l,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(t){Sr.center.set(0,0,0);let e=Av.distanceTo(t.center);return Sr.radius=.7071067811865476+e,Sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(cc.x=s.normal.x>0?t.max.x:t.min.x,cc.y=s.normal.y>0?t.max.y:t.min.y,cc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Po=class extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Pc=new D,Dc=new D,Sm=new me,Ma=new Co,uc=new ss,Ad=new D,Em=new D,Lc=class extends Cn{constructor(t=new jt,e=new Po){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Pc.fromBufferAttribute(e,s-1),Dc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Pc.distanceTo(Dc);t.setAttribute("lineDistance",new se(n,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uc.copy(n.boundingSphere),uc.applyMatrix4(s),uc.radius+=r,t.ray.intersectsSphere(uc)===!1)return;Sm.copy(s).invert(),Ma.copy(t.ray).applyMatrix4(Sm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=u.getX(x),y=u.getX(x+1),S=hc(this,t,Ma,l,p,y,x);S&&e.push(S)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(f),p=hc(this,t,Ma,l,x,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=hc(this,t,Ma,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=hc(this,t,Ma,l,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hc(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Pc.fromBufferAttribute(a,s),Dc.fromBufferAttribute(a,r),e.distanceSqToSegment(Pc,Dc,Ad,Em)>n)return;Ad.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ad);if(!(c<t.near||c>t.far))return{distance:c,point:Em.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var wm=new D,Tm=new D,Ua=class extends Lc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)wm.fromBufferAttribute(e,s),Tm.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wm.distanceTo(Tm);t.setAttribute("lineDistance",new se(n,1))}else Wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Gi=class extends ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Am=new me,Bd=new Co,dc=new ss,fc=new D,Ci=class extends Cn{constructor(t=new jt,e=new Gi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(s),dc.radius+=r,t.ray.intersectsSphere(dc)===!1)return;Am.copy(s).invert(),Bd.copy(t.ray).applyMatrix4(Am);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=c.getX(m);fc.fromBufferAttribute(h,g),Rm(fc,g,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,x=f;m<x;m++)fc.fromBufferAttribute(h,m),Rm(fc,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Rm(i,t,e,n,s,r,o){let a=Bd.distanceSqToPoint(i);if(a<e){let l=new D;Bd.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Fa=class extends $n{constructor(t=[],e=sr,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xi=class extends $n{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ks=class extends $n{constructor(t,e,n=Xi,s,r,o,a=bn,l=bn,c,u=es,h=1){if(u!==es&&u!==rr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new To(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Nc=class extends Ks{constructor(t,e=Xi,n=sr,s,r,o=bn,a=bn,l,c=es){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ba=class extends $n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fn=class i extends jt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(h,2));function m(x,g,p,y,S,_,b,M,T,v,E){let R=_/T,I=b/v,L=_/2,P=b/2,C=M/2,F=T+1,V=v+1,z=0,$=0,B=new D;for(let k=0;k<V;k++){let K=k*I-P;for(let ut=0;ut<F;ut++){let Rt=ut*R-L;B[x]=Rt*y,B[g]=K*S,B[p]=C,c.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[p]=M>0?1:-1,u.push(B.x,B.y,B.z),h.push(ut/T),h.push(1-k/v),z+=1}}for(let k=0;k<v;k++)for(let K=0;K<T;K++){let ut=d+K+F*k,Rt=d+K+F*(k+1),ue=d+(K+1)+F*(k+1),te=d+(K+1)+F*k;l.push(ut,Rt,te),l.push(Rt,ue,te),$+=6}a.addGroup(f,$,E),f+=$,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var yi=class i extends jt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new D,u=new At;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ye=class i extends jt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,x=[],g=n/2,p=0;y(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(f,2));function y(){let _=new D,b=new D,M=0,T=(e-t)/n;for(let v=0;v<=r;v++){let E=[],R=v/r,I=R*(e-t)+t;for(let L=0;L<=s;L++){let P=L/s,C=P*l+a,F=Math.sin(C),V=Math.cos(C);b.x=I*F,b.y=-R*n+g,b.z=I*V,h.push(b.x,b.y,b.z),_.set(F,T,V).normalize(),d.push(_.x,_.y,_.z),f.push(P,1-R),E.push(m++)}x.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){let R=x[E][v],I=x[E+1][v],L=x[E+1][v+1],P=x[E][v+1];(t>0||E!==0)&&(u.push(R,I,P),M+=3),(e>0||E!==r-1)&&(u.push(I,L,P),M+=3)}c.addGroup(p,M,0),p+=M}function S(_){let b=m,M=new At,T=new D,v=0,E=_===!0?t:e,R=_===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),m++;let I=m;for(let L=0;L<=s;L++){let C=L/s*l+a,F=Math.cos(C),V=Math.sin(C);T.x=E*V,T.y=g*R,T.z=E*F,h.push(T.x,T.y,T.z),d.push(0,R,0),M.x=F*.5+.5,M.y=V*.5*R+.5,f.push(M.x,M.y),m++}for(let L=0;L<s;L++){let P=b+L,C=I+L;_===!0?u.push(C,C+1,P):u.push(C+1,C,P),v+=3}c.addGroup(p,v,_===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Le=class i extends ye{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Uc=class i extends jt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new D,_=new D,b=new D;for(let M=0;M<e.length;M+=3)f(e[M+0],S),f(e[M+1],_),f(e[M+2],b),l(S,_,b,y)}function l(y,S,_,b){let M=b+1,T=[];for(let v=0;v<=M;v++){T[v]=[];let E=y.clone().lerp(_,v/M),R=S.clone().lerp(_,v/M),I=M-v;for(let L=0;L<=I;L++)L===0&&v===M?T[v][L]=E:T[v][L]=E.clone().lerp(R,L/I)}for(let v=0;v<M;v++)for(let E=0;E<2*(M-v)-1;E++){let R=Math.floor(E/2);E%2===0?(d(T[v][R+1]),d(T[v+1][R]),d(T[v][R])):(d(T[v][R+1]),d(T[v+1][R+1]),d(T[v+1][R]))}}function c(y){let S=new D;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(y),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function u(){let y=new D;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let _=g(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;o.push(_,1-b)}m(),h()}function h(){for(let y=0;y<o.length;y+=6){let S=o[y+0],_=o[y+2],b=o[y+4],M=Math.max(S,_,b),T=Math.min(S,_,b);M>.9&&T<.1&&(S<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,S){let _=y*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function m(){let y=new D,S=new D,_=new D,b=new D,M=new At,T=new At,v=new At;for(let E=0,R=0;E<r.length;E+=9,R+=6){y.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),M.set(o[R+0],o[R+1]),T.set(o[R+2],o[R+3]),v.set(o[R+4],o[R+5]),b.copy(y).add(S).add(_).divideScalar(3);let I=g(b);x(M,R+0,y,I),x(T,R+2,S,I),x(v,R+4,_,I)}}function x(y,S,_,b){b<0&&y.x===1&&(o[S]=y.x-1),_.x===0&&_.z===0&&(o[S]=b/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new At:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],o=[],a=new D,l=new me;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(_e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(_e(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Oa=class extends Ii{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new At){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Fc=class extends Oa{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function uf(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Cm=new D,Im=new D,Rd=new uf,Cd=new uf,Id=new uf,js=class extends Ii{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Im.subVectors(s[0],s[1]).add(s[0]),c=Im);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Cm.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Cm),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Rd.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,x,g),Cd.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,x,g),Id.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(Rd.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Cd.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Id.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Rd.calc(l),Cd.calc(l),Id.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Pm(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Rv(i,t){let e=1-i;return e*e*t}function Cv(i,t){return 2*(1-i)*i*t}function Iv(i,t){return i*i*t}function ba(i,t,e,n){return Rv(i,t)+Cv(i,e)+Iv(i,n)}function Pv(i,t){let e=1-i;return e*e*e*t}function Dv(i,t){let e=1-i;return 3*e*e*i*t}function Lv(i,t){return 3*(1-i)*i*i*t}function Nv(i,t){return i*i*i*t}function Sa(i,t,e,n,s){return Pv(i,t)+Dv(i,e)+Lv(i,n)+Nv(i,s)}var Bc=class extends Ii{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sa(t,s.x,r.x,o.x,a.x),Sa(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oc=class extends Ii{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sa(t,s.x,r.x,o.x,a.x),Sa(t,s.y,r.y,o.y,a.y),Sa(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zc=class extends Ii{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hc=class extends Ii{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kc=class extends Ii{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ba(t,s.x,r.x,o.x),ba(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},za=class extends Ii{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ba(t,s.x,r.x,o.x),ba(t,s.y,r.y,o.y),ba(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gc=class extends Ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Pm(a,l.x,c.x,u.x,h.x),Pm(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new At().fromArray(s))}return this}},Uv=Object.freeze({__proto__:null,ArcCurve:Fc,CatmullRomCurve3:js,CubicBezierCurve:Bc,CubicBezierCurve3:Oc,EllipseCurve:Oa,LineCurve:zc,LineCurve3:Hc,QuadraticBezierCurve:kc,QuadraticBezierCurve3:za,SplineCurve:Gc});var Sn=class i extends Uc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var un=class i extends jt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let y=p*d-o;for(let S=0;S<c;S++){let _=S*h-r;m.push(_,-y,0),x.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let S=y+c*p,_=y+c*(p+1),b=y+1+c*(p+1),M=y+1+c*p;f.push(S,_,M),f.push(_,b,M)}this.setIndex(f),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Cs=class i extends jt{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=t,d=(e-t)/s,f=new D,m=new At;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,u.push(m.x,m.y)}h+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let y=p+g,S=y,_=y+n+1,b=y+n+2,M=y+1;a.push(S,_,M),a.push(_,b,M)}}this.setIndex(a),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Jt=class i extends jt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new D,d=new D,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],S=p/n,_=o+S*a,b=t*Math.cos(_),M=Math.sqrt(t*t-b*b),T=0;p===0&&o===0?T=.5/e:p===n&&l===Math.PI&&(T=-.5/e);for(let v=0;v<=e;v++){let E=v/e,R=s+E*r;h.x=-M*Math.cos(R),h.y=b,h.z=M*Math.sin(R),m.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(E+T,1-S),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let S=u[p][y+1],_=u[p][y],b=u[p+1][y],M=u[p+1][y+1];(p!==0||o>0)&&f.push(S,_,M),(p!==n-1||l<Math.PI)&&f.push(_,b,M)}this.setIndex(f),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Kn=class i extends jt{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=new D,f=new D,m=new D;for(let x=0;x<=n;x++){let g=o+x/n*a;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(y),f.y=(t+e*Math.cos(g))*Math.sin(y),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),m.subVectors(f,d).normalize(),u.push(m.x,m.y,m.z),h.push(p/s),h.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let p=(s+1)*x+g-1,y=(s+1)*(x-1)+g-1,S=(s+1)*(x-1)+g,_=(s+1)*x+g;l.push(p,y,_),l.push(y,S,_)}this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ha=class i extends jt{constructor(t=new za(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new At,u=new D,h=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(f,2));function x(){for(let S=0;S<e;S++)g(S);g(r===!1?e:0),y(),p()}function g(S){u=t.getPointAt(S/e,u);let _=o.normals[S],b=o.binormals[S];for(let M=0;M<=s;M++){let T=M/s*Math.PI*2,v=Math.sin(T),E=-Math.cos(T);l.x=E*_.x+v*b.x,l.y=E*_.y+v*b.y,l.z=E*_.z+v*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=e;S++)for(let _=1;_<=s;_++){let b=(s+1)*(S-1)+(_-1),M=(s+1)*S+(_-1),T=(s+1)*S+_,v=(s+1)*(S-1)+_;m.push(b,M,v),m.push(M,T,v)}}function y(){for(let S=0;S<=e;S++)for(let _=0;_<=s;_++)c.x=S/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Uv[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Rr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Dm(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Dm(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Wn(i){let t={};for(let e=0;e<i.length;e++){let n=Rr(i[e]);for(let s in n)t[s]=n[s]}return t}function Dm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Fv(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}var S0={clone:Rr,merge:Wn},Bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bv,this.fragmentShader=Ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=Fv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ct().setHex(s.value);break;case"v2":this.uniforms[n].value=new At().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Je().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Vc=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ge=class extends ai{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ka=class extends ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=ru,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Wc=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xc=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function vo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Pd(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Qs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qc=class extends Qs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nd,endingEnd:Nd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ud:r=t,a=2*e-n;break;case Fd:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ud:o=t,l=2*n-e;break;case Fd:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,S=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+y*o[c+b]+S*o[l+b]+_*o[h+b];return r}},Yc=class extends Qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Zc=class extends Qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Jc=class extends Qs{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-e)/(s-e),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let d=a*2,f=t-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=f*d+m*2,y=h[p],S=h[p+1],_=t*d+m*2,b=u[_],M=u[_+1],T=Hv(n,e,y,b,s);r[m]=E0(T,x,S,M,g)}return r}};function E0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function zv(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Hv(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=E0(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=zv(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var vi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vo(e,this.TimeBufferType),this.values=vo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vo(t.times,Array),values:vo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Pd(t.settings)&&(n.settings={inTangents:vo(t.settings.inTangents,Array),outTangents:vo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Jc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ea:e=this.InterpolantFactoryMethodDiscrete;break;case Tc:e=this.InterpolantFactoryMethodLinear;break;case gc:e=this.InterpolantFactoryMethodSmooth;break;case Ld:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return Tc;case this.InterpolantFactoryMethodSmooth:return gc;case this.InterpolantFactoryMethodBezier:return Ld}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Pd(this.settings)&&(Lm(this.settings.inTangents,t),Lm(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Yt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&av(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===gc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let x=e[h+m];if(x!==e[d+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Pd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Lm(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}vi.prototype.ValueTypeName="";vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=Tc;var tr=class extends vi{constructor(t,e,n){super(t,e,n)}};tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Ea;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;var $c=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}};$c.prototype.ValueTypeName="color";var Kc=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}};Kc.prototype.ValueTypeName="number";var jc=class extends Qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)pn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ga=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new jc(this.times,this.values,this.getValueSize(),t)}};Ga.prototype.ValueTypeName="quaternion";Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var er=class extends vi{constructor(t,e,n){super(t,e,n)}};er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Ea;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;var Qc=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}};Qc.prototype.ValueTypeName="vector";var tu=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},w0=new tu,eu=class{constructor(t){this.manager=t!==void 0?t:w0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};eu.DEFAULT_MATERIAL_NAME="__DEFAULT";var Do=class extends Cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Va=class extends Do{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Dd=new me,Nm=new D,Um=new D,Wa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Nm.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nm),Um.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Um),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Dd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Dd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Eo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Dd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},pc=new D,mc=new pn,ji=new D,Xa=class extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(pc,mc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,mc,ji.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(pc,mc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,mc,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zs=new D,Fm=new At,Bm=new At,yn=class extends Xa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ac*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ac*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zs.x,Zs.y).multiplyScalar(-t/Zs.z),Zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zs.x,Zs.y).multiplyScalar(-t/Zs.z)}getViewSize(t,e){return this.getViewBounds(t,Fm,Bm),e.subVectors(Bm,Fm)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rd*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Od=class extends Wa{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}},qa=class extends Do{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Od}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},nr=class extends Xa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zd=class extends Wa{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ya=class extends Do{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new zd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Za=class extends jt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var _o=-90,Mo=1,nu=class extends Cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn(_o,Mo,t,e);s.layers=this.layers,this.add(s);let r=new yn(_o,Mo,t,e);r.layers=this.layers,this.add(r);let o=new yn(_o,Mo,t,e);o.layers=this.layers,this.add(o);let a=new yn(_o,Mo,t,e);a.layers=this.layers,this.add(a);let l=new yn(_o,Mo,t,e);l.layers=this.layers,this.add(l);let c=new yn(_o,Mo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===zi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},iu=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var df="\\[\\]\\.:\\/",kv=new RegExp("["+df+"]","g"),ff="[^"+df+"]",Gv="[^"+df.replace("\\.","")+"]",Vv=/((?:WC+[\/:])*)/.source.replace("WC",ff),Wv=/(WCOD+)?/.source.replace("WCOD",Gv),Xv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ff),qv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ff),Yv=new RegExp("^"+Vv+Wv+Xv+qv+"$"),Zv=["material","materials","bones","map"],Hd=class{constructor(t,e,n){let s=n||nn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},nn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kv,"")}static parseTrackName(t){let e=Yv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nn.Composite=Hd;nn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nn.prototype.GetterByBindingType=[nn.prototype._getValue_direct,nn.prototype._getValue_array,nn.prototype._getValue_arrayElement,nn.prototype._getValue_toArray];nn.prototype.SetterByBindingTypeAndVersioning=[[nn.prototype._setValue_direct,nn.prototype._setValue_direct_setNeedsUpdate,nn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_array,nn.prototype._setValue_array_setNeedsUpdate,nn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_arrayElement,nn.prototype._setValue_arrayElement_setNeedsUpdate,nn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_fromArray,nn.prototype._setValue_fromArray_setNeedsUpdate,nn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _w=new Float32Array(1);var vf=class vf{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};vf.prototype.isMatrix2=!0;var kd=vf;function pf(i,t,e,n){let s=Jv(n);switch(e){case of:return i*t;case Fo:return i*t/s.components*s.byteLength;case du:return i*t/s.components*s.byteLength;case or:return i*t*2/s.components*s.byteLength;case fu:return i*t*2/s.components*s.byteLength;case af:return i*t*3/s.components*s.byteLength;case ci:return i*t*4/s.components*s.byteLength;case pu:return i*t*4/s.components*s.byteLength;case ja:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tl:case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gu:case yu:return Math.max(i,16)*Math.max(t,8)/4;case mu:case xu:return Math.max(i,8)*Math.max(t,8)/2;case vu:case _u:case bu:case Su:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mu:case nl:case Eu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Au:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ru:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Iu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Du:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Lu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Nu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Uu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bu:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ou:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zu:case Hu:case ku:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gu:case Vu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case il:case Wu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jv(i){switch(i){case li:case ef:return{byteLength:1,components:1};case No:case nf:case _i:return{byteLength:2,components:1};case uu:case hu:return{byteLength:2,components:4};case Xi:case cu:case Pi:return{byteLength:4,components:1};case sf:case rf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Y0(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function t1(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],x=h[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var e1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,i1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,l1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,u1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,h1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,p1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,m1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,M1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,b1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,S1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,E1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,w1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,T1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,A1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P1="gl_FragColor = linearToOutputTexel( gl_FragColor );",D1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,U1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,F1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,V1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Y1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Z1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Q1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,t_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,e_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,s_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,h_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,__=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,M_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,E_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,w_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,P_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,O_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,H_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,k_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,V_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,X_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,J_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_M=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:e1,alphahash_pars_fragment:n1,alphamap_fragment:i1,alphamap_pars_fragment:s1,alphatest_fragment:r1,alphatest_pars_fragment:o1,aomap_fragment:a1,aomap_pars_fragment:l1,batching_pars_vertex:c1,batching_vertex:u1,begin_vertex:h1,beginnormal_vertex:d1,bsdfs:f1,iridescence_fragment:p1,bumpmap_pars_fragment:m1,clipping_planes_fragment:g1,clipping_planes_pars_fragment:x1,clipping_planes_pars_vertex:y1,clipping_planes_vertex:v1,color_fragment:_1,color_pars_fragment:M1,color_pars_vertex:b1,color_vertex:S1,common:E1,cube_uv_reflection_fragment:w1,defaultnormal_vertex:T1,displacementmap_pars_vertex:A1,displacementmap_vertex:R1,emissivemap_fragment:C1,emissivemap_pars_fragment:I1,colorspace_fragment:P1,colorspace_pars_fragment:D1,envmap_fragment:L1,envmap_common_pars_fragment:N1,envmap_pars_fragment:U1,envmap_pars_vertex:F1,envmap_physical_pars_fragment:Y1,envmap_vertex:B1,fog_vertex:O1,fog_pars_vertex:z1,fog_fragment:H1,fog_pars_fragment:k1,gradientmap_pars_fragment:G1,lightmap_pars_fragment:V1,lights_lambert_fragment:W1,lights_lambert_pars_fragment:X1,lights_pars_begin:q1,lights_toon_fragment:Z1,lights_toon_pars_fragment:J1,lights_phong_fragment:$1,lights_phong_pars_fragment:K1,lights_physical_fragment:j1,lights_physical_pars_fragment:Q1,lights_fragment_begin:t_,lights_fragment_maps:e_,lights_fragment_end:n_,lightprobes_pars_fragment:i_,logdepthbuf_fragment:s_,logdepthbuf_pars_fragment:r_,logdepthbuf_pars_vertex:o_,logdepthbuf_vertex:a_,map_fragment:l_,map_pars_fragment:c_,map_particle_fragment:u_,map_particle_pars_fragment:h_,metalnessmap_fragment:d_,metalnessmap_pars_fragment:f_,morphinstance_vertex:p_,morphcolor_vertex:m_,morphnormal_vertex:g_,morphtarget_pars_vertex:x_,morphtarget_vertex:y_,normal_fragment_begin:v_,normal_fragment_maps:__,normal_pars_fragment:M_,normal_pars_vertex:b_,normal_vertex:S_,normalmap_pars_fragment:E_,clearcoat_normal_fragment_begin:w_,clearcoat_normal_fragment_maps:T_,clearcoat_pars_fragment:A_,iridescence_pars_fragment:R_,opaque_fragment:C_,packing:I_,premultiplied_alpha_fragment:P_,project_vertex:D_,dithering_fragment:L_,dithering_pars_fragment:N_,roughnessmap_fragment:U_,roughnessmap_pars_fragment:F_,shadowmap_pars_fragment:B_,shadowmap_pars_vertex:O_,shadowmap_vertex:z_,shadowmask_pars_fragment:H_,skinbase_vertex:k_,skinning_pars_vertex:G_,skinning_vertex:V_,skinnormal_vertex:W_,specularmap_fragment:X_,specularmap_pars_fragment:q_,tonemapping_fragment:Y_,tonemapping_pars_fragment:Z_,transmission_fragment:J_,transmission_pars_fragment:$_,uv_pars_fragment:K_,uv_pars_vertex:j_,uv_vertex:Q_,worldpos_vertex:tM,background_vert:eM,background_frag:nM,backgroundCube_vert:iM,backgroundCube_frag:sM,cube_vert:rM,cube_frag:oM,depth_vert:aM,depth_frag:lM,distance_vert:cM,distance_frag:uM,equirect_vert:hM,equirect_frag:dM,linedashed_vert:fM,linedashed_frag:pM,meshbasic_vert:mM,meshbasic_frag:gM,meshlambert_vert:xM,meshlambert_frag:yM,meshmatcap_vert:vM,meshmatcap_frag:_M,meshnormal_vert:MM,meshnormal_frag:bM,meshphong_vert:SM,meshphong_frag:EM,meshphysical_vert:wM,meshphysical_frag:TM,meshtoon_vert:AM,meshtoon_frag:RM,points_vert:CM,points_frag:IM,shadow_vert:PM,shadow_frag:DM,sprite_vert:LM,sprite_frag:NM},_t={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},cs={basic:{uniforms:Wn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Wn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Wn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Wn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Wn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new ct(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Wn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Wn([_t.points,_t.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Wn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Wn([_t.common,_t.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Wn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Wn([_t.sprite,_t.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:Wn([_t.common,_t.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:Wn([_t.lights,_t.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};cs.physical={uniforms:Wn([cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var Yu={r:0,b:0,g:0},UM=new me,Z0=new Qt;Z0.set(-1,0,0,0,1,0,0,0,1);function FM(i,t,e,n,s,r){let o=new ct(0),a=s===!0?0:1,l,c,u=null,h=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let _=y.backgroundBlurriness>0;S=t.get(S,_)}return S}function m(y){let S=!1,_=f(y);_===null?g(o,a):_&&_.isColor&&(g(_,1),S=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,S){let _=f(S);_&&(_.isCubeTexture||_.mapping===$a)?(c===void 0&&(c=new q(new Fn(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:Rr(cs.backgroundCube.uniforms),vertexShader:cs.backgroundCube.vertexShader,fragmentShader:cs.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(UM.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Z0),c.material.toneMapped=Se.getTransfer(_.colorSpace)!==ze,(u!==_||h!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new q(new un(2,2),new $e({name:"BackgroundMaterial",uniforms:Rr(cs.background.uniforms),vertexShader:cs.background.vertexShader,fragmentShader:cs.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Se.getTransfer(_.colorSpace)!==ze,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,S){y.getRGB(Yu,hf(i)),e.buffers.color.setClear(Yu.r,Yu.g,Yu.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:x,dispose:p}}function BM(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(I,L,P,C,F){let V=!1,z=h(I,C,P,L);r!==z&&(r=z,c(r.object)),V=f(I,C,P,F),V&&m(I,C,P,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(I,L,P,C),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function h(I,L,P,C){let F=C.wireframe===!0,V=n[L.id];V===void 0&&(V={},n[L.id]=V);let z=I.isInstancedMesh===!0?I.id:0,$=V[z];$===void 0&&($={},V[z]=$);let B=$[P.id];B===void 0&&(B={},$[P.id]=B);let k=B[F];return k===void 0&&(k=d(l()),B[F]=k),k}function d(I){let L=[],P=[],C=[];for(let F=0;F<e;F++)L[F]=0,P[F]=0,C[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:P,attributeDivisors:C,object:I,attributes:{},index:null}}function f(I,L,P,C){let F=r.attributes,V=L.attributes,z=0,$=P.getAttributes();for(let B in $)if($[B].location>=0){let K=F[B],ut=V[B];if(ut===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(ut=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(ut=I.instanceColor)),K===void 0||K.attribute!==ut||ut&&K.data!==ut.data)return!0;z++}return r.attributesNum!==z||r.index!==C}function m(I,L,P,C){let F={},V=L.attributes,z=0,$=P.getAttributes();for(let B in $)if($[B].location>=0){let K=V[B];K===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));let ut={};ut.attribute=K,K&&K.data&&(ut.data=K.data),F[B]=ut,z++}r.attributes=F,r.attributesNum=z,r.index=C}function x(){let I=r.newAttributes;for(let L=0,P=I.length;L<P;L++)I[L]=0}function g(I){p(I,0)}function p(I,L){let P=r.newAttributes,C=r.enabledAttributes,F=r.attributeDivisors;P[I]=1,C[I]===0&&(i.enableVertexAttribArray(I),C[I]=1),F[I]!==L&&(i.vertexAttribDivisor(I,L),F[I]=L)}function y(){let I=r.newAttributes,L=r.enabledAttributes;for(let P=0,C=L.length;P<C;P++)L[P]!==I[P]&&(i.disableVertexAttribArray(P),L[P]=0)}function S(I,L,P,C,F,V,z){z===!0?i.vertexAttribIPointer(I,L,P,F,V):i.vertexAttribPointer(I,L,P,C,F,V)}function _(I,L,P,C){x();let F=C.attributes,V=P.getAttributes(),z=L.defaultAttributeValues;for(let $ in V){let B=V[$];if(B.location>=0){let k=F[$];if(k===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),k!==void 0){let K=k.normalized,ut=k.itemSize,Rt=t.get(k);if(Rt===void 0)continue;let ue=Rt.buffer,te=Rt.type,Vt=Rt.bytesPerElement,nt=te===i.INT||te===i.UNSIGNED_INT||k.gpuType===cu;if(k.isInterleavedBufferAttribute){let at=k.data,wt=at.stride,zt=k.offset;if(at.isInstancedInterleavedBuffer){for(let bt=0;bt<B.locationSize;bt++)p(B.location+bt,at.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let bt=0;bt<B.locationSize;bt++)g(B.location+bt);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let bt=0;bt<B.locationSize;bt++)S(B.location+bt,ut/B.locationSize,te,K,wt*Vt,(zt+ut/B.locationSize*bt)*Vt,nt)}else{if(k.isInstancedBufferAttribute){for(let at=0;at<B.locationSize;at++)p(B.location+at,k.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let at=0;at<B.locationSize;at++)g(B.location+at);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let at=0;at<B.locationSize;at++)S(B.location+at,ut/B.locationSize,te,K,ut*Vt,ut/B.locationSize*at*Vt,nt)}}else if(z!==void 0){let K=z[$];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(B.location,K);break;case 3:i.vertexAttrib3fv(B.location,K);break;case 4:i.vertexAttrib4fv(B.location,K);break;default:i.vertexAttrib1fv(B.location,K)}}}}y()}function b(){E();for(let I in n){let L=n[I];for(let P in L){let C=L[P];for(let F in C){let V=C[F];for(let z in V)u(V[z].object),delete V[z];delete C[F]}}delete n[I]}}function M(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let P in L){let C=L[P];for(let F in C){let V=C[F];for(let z in V)u(V[z].object),delete V[z];delete C[F]}}delete n[I.id]}function T(I){for(let L in n){let P=n[L];for(let C in P){let F=P[C];if(F[I.id]===void 0)continue;let V=F[I.id];for(let z in V)u(V[z].object),delete V[z];delete F[I.id]}}}function v(I){for(let L in n){let P=n[L],C=I.isInstancedMesh===!0?I.id:0,F=P[C];if(F!==void 0){for(let V in F){let z=F[V];for(let $ in z)u(z[$].object),delete z[$];delete F[V]}delete P[C],Object.keys(P).length===0&&delete n[L]}}}function E(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function OM(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function zM(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==ci&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let v=T===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==li&&T!==Pi&&!v&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Wt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,maxSamples:b,samples:M}}function HM(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Oi,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let y=r?0:n,S=y*4,_=p.clippingState||null;l.value=_,_=u(m,d,S,f);for(let b=0;b!==S;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,_=f;S!==x;++S,_+=4)o.copy(h[S]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Oo=4,kM=6,GM=20,VM=256,rl=new nr,T0=new ct,_f=null,Mf=0,bf=0,Sf=!1,WM=new D,Cr=new D,Ju=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=WM}=r;_f=this._renderer.getRenderTarget(),Mf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(_f,Mf,bf),this._renderer.xr.enabled=Sf,t.scissorTest=!1,Bo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_f=this._renderer.getRenderTarget(),Mf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:_i,format:ci,colorSpace:wa,depthBuffer:!1},s=A0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A0(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=XM(r)),this._blurMaterial=YM(r,t,e),this._ggxMaterial=qM(r,t,e)}return s}_compileMaterial(t){let e=new q(new jt,t);this._renderer.compile(e,rl)}_sceneToCubeUV(t,e,n,s,r){let l=new yn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(T0),h.toneMapping=Wi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new q(new Fn,new Ee({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,p=!0):(g.color.copy(T0),p=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));let b=this._cubeSize;Bo(s,_*b,S>2?b:0,b,b),h.setRenderTarget(s),p&&h.render(x,l),h.render(t,l)}h.toneMapping=f,h.autoClear=d,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===sr||t.mapping===Ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=C0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=R0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Bo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,rl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Oo?n-m+Oo:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Bo(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,rl),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Bo(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(a,rl)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-Oo?s-this._lodMax+Oo:0),d=4*(this._cubeSize-u);Bo(e,h,d,3*u,2*u),o.setRenderTarget(e),o.render(l,rl)}};function XM(i){let t=[],e=[],n=i,s=i-Oo+1+kM;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,m=new Float32Array(f*d*h),x=new Float32Array(f*d*h);for(let p=0;p<h;p++){let y=p%3*2/3-1,S=p>2?0:-1,_=[y,S,0,y+2/3,S,0,y+2/3,S+1,0,y,S,0,y+2/3,S+1,0,y,S+1,0];m.set(_,f*d*p);for(let b=0;b<d;b++){let M=u[b*2]*2-1,T=u[b*2+1]*2-1;p===0?Cr.set(1,T,M):p===1?Cr.set(-M,1,-T):p===2?Cr.set(-M,T,1):p===3?Cr.set(-1,T,-M):p===4?Cr.set(-M,-1,T):Cr.set(M,T,-1),Cr.toArray(x,(p*d+b)*f)}}let g=new jt;g.setAttribute("position",new kt(m,f)),g.setAttribute("outputDirection",new kt(x,f)),e.push(new q(g,null)),n>Oo&&n--}return{lodMeshes:e,sizeLods:t}}function A0(i,t,e){let n=new Bn(i,t,e);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function qM(i,t,e){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ju(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function YM(i,t,e){return new $e({name:"SphericalGaussianBlur",defines:{SAMPLES:GM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ju(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function R0(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function C0(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function ju(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $u=class extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fn(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:os});r.uniforms.tEquirect.value=e;let o=new q(s,r),a=e.minFilter;return e.minFilter===as&&(e.minFilter=Rn),new nu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function ZM(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===ou||f===au)if(t.has(d)){let m=t.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new $u(m.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,m=f===ou||f===au,x=f===sr||f===Ar;if(m||x){let g=e.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Ju(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let y=d.image;return m&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Ju(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d,f){return f===ou?d.mapping=sr:f===au&&(d.mapping=Ar),d}function l(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function JM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Er("WebGLRenderer: "+n+" extension not supported."),s}}}function $M(i,t,e,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let S=0,_=y.length;S<_;S+=3){let b=y[S+0],M=y[S+1],T=y[S+2];d.push(b,M,M,T,T,b)}}else{let y=m.array;x=m.version;for(let S=0,_=y.length/3-1;S<_;S+=3){let b=S+0,M=S+1,T=S+2;d.push(b,M,M,T,T,b)}}let g=new(m.count>=65535?La:Da)(d,1);g.version=x;let p=r.get(h);p&&t.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function KM(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*o,f),e.update(d,n,f))}function u(h,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function jM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Yt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function QM(i,t,e){let n=new WeakMap,s=new Je;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let _=a.attributes.position.count*S,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let M=new Float32Array(_*b*4*h),T=new Ca(M,_,b,h);T.type=Pi,T.needsUpdate=!0;let v=S*4;for(let R=0;R<h;R++){let I=g[R],L=p[R],P=y[R],C=_*b*4*R;for(let F=0;F<I.count;F++){let V=F*v;f===!0&&(s.fromBufferAttribute(I,F),M[C+V+0]=s.x,M[C+V+1]=s.y,M[C+V+2]=s.z,M[C+V+3]=0),m===!0&&(s.fromBufferAttribute(L,F),M[C+V+4]=s.x,M[C+V+5]=s.y,M[C+V+6]=s.z,M[C+V+7]=0),x===!0&&(s.fromBufferAttribute(P,F),M[C+V+8]=s.x,M[C+V+9]=s.y,M[C+V+10]=s.z,M[C+V+11]=P.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new At(_,b)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function tb(i,t,e,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,d=t.get(c,h);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var eb={[Yd]:"LINEAR_TONE_MAPPING",[Zd]:"REINHARD_TONE_MAPPING",[Jd]:"CINEON_TONE_MAPPING",[$d]:"ACES_FILMIC_TONE_MAPPING",[jd]:"AGX_TONE_MAPPING",[Qd]:"NEUTRAL_TONE_MAPPING",[Kd]:"CUSTOM_TONE_MAPPING"};function nb(i,t,e,n,s,r){let o=new Bn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new jt;c.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new se([0,2,0,0,2,0],2));let u=new Vc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new q(c,u),d=new nr(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,y=[],S=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),l!==null&&l.setSize(_,b);for(let M=0;M<y.length;M++){let T=y[M];T.setSize&&T.setSize(_,b)}},this.setEffects=function(_){y=_,S=y.length>0&&y[0].isRenderPass===!0;let b=o.width,M=o.height;y.length>0&&a===null&&(a=new Bn(b,M,{type:_i,depthBuffer:!1,stencilBuffer:!1}),l=new Bn(b,M,{type:_i,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<y.length;T++){let v=y[T];v.setSize&&v.setSize(b,M)}},this.begin=function(_,b){if(x||_.toneMapping===Wi&&y.length===0)return!1;if(p=b,b!==null){let M=b.width,T=b.height;(o.width!==M||o.height!==T)&&this.setSize(M,T)}return S===!1&&_.setRenderTarget(o),g=_.toneMapping,_.toneMapping=Wi,!0},this.hasRenderPass=function(){return S},this.end=function(_,b){_.toneMapping=g,x=!0;let M=o,T=a;for(let v=0;v<y.length;v++){let E=y[v];E.enabled!==!1&&(E.render(_,T,M,b),E.needsSwap!==!1&&(M=T,T=T===a?l:a))}if(f!==_.outputColorSpace||m!==_.toneMapping){f=_.outputColorSpace,m=_.toneMapping,u.defines={},Se.getTransfer(f)===ze&&(u.defines.SRGB_TRANSFER="");let v=eb[m];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(p),_.render(h,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var J0=new $n,Tf=new Ks(1,1),$0=new Ca,K0=new Ic,j0=new Fa,I0=[],P0=[],D0=new Float32Array(16),L0=new Float32Array(9),N0=new Float32Array(4);function Ho(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=I0[s];if(r===void 0&&(r=new Float32Array(s),I0[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Pn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Dn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qu(i,t){let e=P0[t];e===void 0&&(e=new Int32Array(t),P0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ib(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2fv(this.addr,t),Dn(e,t)}}function rb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pn(e,t))return;i.uniform3fv(this.addr,t),Dn(e,t)}}function ob(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4fv(this.addr,t),Dn(e,t)}}function ab(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Dn(e,t)}else{if(Pn(e,n))return;N0.set(n),i.uniformMatrix2fv(this.addr,!1,N0),Dn(e,n)}}function lb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Dn(e,t)}else{if(Pn(e,n))return;L0.set(n),i.uniformMatrix3fv(this.addr,!1,L0),Dn(e,n)}}function cb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Dn(e,t)}else{if(Pn(e,n))return;D0.set(n),i.uniformMatrix4fv(this.addr,!1,D0),Dn(e,n)}}function ub(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2iv(this.addr,t),Dn(e,t)}}function db(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pn(e,t))return;i.uniform3iv(this.addr,t),Dn(e,t)}}function fb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4iv(this.addr,t),Dn(e,t)}}function pb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function mb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2uiv(this.addr,t),Dn(e,t)}}function gb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pn(e,t))return;i.uniform3uiv(this.addr,t),Dn(e,t)}}function xb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4uiv(this.addr,t),Dn(e,t)}}function yb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tf.compareFunction=e.isReversedDepthBuffer()?qu:Xu,r=Tf):r=J0,e.setTexture2D(t||r,s)}function vb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||K0,s)}function _b(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||j0,s)}function Mb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$0,s)}function bb(i){switch(i){case 5126:return ib;case 35664:return sb;case 35665:return rb;case 35666:return ob;case 35674:return ab;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return ub;case 35667:case 35671:return hb;case 35668:case 35672:return db;case 35669:case 35673:return fb;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return Mb}}function Sb(i,t){i.uniform1fv(this.addr,t)}function Eb(i,t){let e=Ho(t,this.size,2);i.uniform2fv(this.addr,e)}function wb(i,t){let e=Ho(t,this.size,3);i.uniform3fv(this.addr,e)}function Tb(i,t){let e=Ho(t,this.size,4);i.uniform4fv(this.addr,e)}function Ab(i,t){let e=Ho(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rb(i,t){let e=Ho(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cb(i,t){let e=Ho(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ib(i,t){i.uniform1iv(this.addr,t)}function Pb(i,t){i.uniform2iv(this.addr,t)}function Db(i,t){i.uniform3iv(this.addr,t)}function Lb(i,t){i.uniform4iv(this.addr,t)}function Nb(i,t){i.uniform1uiv(this.addr,t)}function Ub(i,t){i.uniform2uiv(this.addr,t)}function Fb(i,t){i.uniform3uiv(this.addr,t)}function Bb(i,t){i.uniform4uiv(this.addr,t)}function Ob(i,t,e){let n=this.cache,s=t.length,r=Qu(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Tf:o=J0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function zb(i,t,e){let n=this.cache,s=t.length,r=Qu(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||K0,r[o])}function Hb(i,t,e){let n=this.cache,s=t.length,r=Qu(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||j0,r[o])}function kb(i,t,e){let n=this.cache,s=t.length,r=Qu(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$0,r[o])}function Gb(i){switch(i){case 5126:return Sb;case 35664:return Eb;case 35665:return wb;case 35666:return Tb;case 35674:return Ab;case 35675:return Rb;case 35676:return Cb;case 5124:case 35670:return Ib;case 35667:case 35671:return Pb;case 35668:case 35672:return Db;case 35669:case 35673:return Lb;case 5125:return Nb;case 36294:return Ub;case 36295:return Fb;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ob;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return kb}}var Af=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bb(e.type)}},Rf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gb(e.type)}},Cf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ef=/(\w+)(\])?(\[|\.)?/g;function U0(i,t){i.seq.push(t),i.map[t.id]=t}function Vb(i,t,e){let n=i.name,s=n.length;for(Ef.lastIndex=0;;){let r=Ef.exec(n),o=Ef.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){U0(e,c===void 0?new Af(a,i,t):new Rf(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Cf(a),U0(e,h)),e=h}}}var zo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Vb(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function F0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Wb=37297,Xb=0;function qb(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var B0=new Qt;function Yb(i){Se._getMatrix(B0,Se.workingColorSpace,i);let t=`mat3( ${B0.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(i)){case Ta:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function O0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+qb(i.getShaderSource(t),a)}else return r}function Zb(i,t){let e=Yb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Jb={[Yd]:"Linear",[Zd]:"Reinhard",[Jd]:"Cineon",[$d]:"ACESFilmic",[jd]:"AgX",[Qd]:"Neutral",[Kd]:"Custom"};function $b(i,t){let e=Jb[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zu=new D;function Kb(){Se.getLuminanceCoefficients(Zu);let i=Zu.x.toFixed(4),t=Zu.y.toFixed(4),e=Zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function Qb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tS(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function al(i){return i!==""}function z0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function H0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var eS=/^[ \t]*#include +<([\w\d./]+)>/gm;function If(i){return i.replace(eS,iS)}var nS=new Map;function iS(i,t){let e=oe[t];if(e===void 0){let n=nS.get(t);if(n!==void 0)e=oe[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return If(e)}var sS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k0(i){return i.replace(sS,rS)}function rS(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function G0(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var oS={[Ja]:"SHADOWMAP_TYPE_PCF",[Lo]:"SHADOWMAP_TYPE_VSM"};function aS(i){return oS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var lS={[sr]:"ENVMAP_TYPE_CUBE",[Ar]:"ENVMAP_TYPE_CUBE",[$a]:"ENVMAP_TYPE_CUBE_UV"};function cS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":lS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var uS={[Ar]:"ENVMAP_MODE_REFRACTION"};function hS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":uS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dS={[ru]:"ENVMAP_BLENDING_MULTIPLY",[r0]:"ENVMAP_BLENDING_MIX",[o0]:"ENVMAP_BLENDING_ADD"};function fS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":dS[i.combine]||"ENVMAP_BLENDING_NONE"}function pS(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function mS(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=aS(e),c=cS(e),u=hS(e),h=fS(e),d=pS(e),f=jb(e),m=Qb(r),x=s.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(al).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(al).join(`
`),p.length>0&&(p+=`
`)):(g=[G0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),p=[G0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?oe.tonemapping_pars_fragment:"",e.toneMapping!==Wi?$b("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Zb("linearToOutputTexel",e.outputColorSpace),Kb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(al).join(`
`)),o=If(o),o=z0(o,e),o=H0(o,e),a=If(a),a=z0(a,e),a=H0(a,e),o=k0(o),a=k0(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=y+g+o,_=y+p+a,b=F0(s,s.VERTEX_SHADER,S),M=F0(s,s.FRAGMENT_SHADER,_);s.attachShader(x,b),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(I){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",P=s.getShaderInfoLog(b)||"",C=s.getShaderInfoLog(M)||"",F=L.trim(),V=P.trim(),z=C.trim(),$=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,M);else{let k=O0(s,b,"vertex"),K=O0(s,M,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+k+`
`+K)}else F!==""?Wt("WebGLProgram: Program Info Log:",F):(V===""||z==="")&&(B=!1);B&&(I.diagnostics={runnable:$,programLog:F,vertexShader:{log:V,prefix:g},fragmentShader:{log:z,prefix:p}})}s.deleteShader(b),s.deleteShader(M),v=new zo(s,x),E=tS(s,x)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,Wb)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xb++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=M,this}var gS=0,Pf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Df(t),e.set(t,n)),n}},Df=class{constructor(t){this.id=gS++,this.code=t,this.usedTimes=0}};function xS(i){return i===or||i===nl||i===il}function yS(i,t,e,n,s,r){let o=new Ia,a=new Pf,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,E,R,I,L,P){let C=I.fog,F=L.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,$=t.get(v.envMap||V,z),B=$&&$.mapping===$a?$.image.height:null,k=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Wt("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let K=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ut=K!==void 0?K.length:0,Rt=0;F.morphAttributes.position!==void 0&&(Rt=1),F.morphAttributes.normal!==void 0&&(Rt=2),F.morphAttributes.color!==void 0&&(Rt=3);let ue,te,Vt,nt;if(k){let Be=cs[k];ue=Be.vertexShader,te=Be.fragmentShader}else{ue=v.vertexShader,te=v.fragmentShader;let Be=a.getVertexShaderStage(v),Re=a.getFragmentShaderStage(v);a.update(v,Be,Re),Vt=Be.id,nt=Re.id}let at=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),zt=L.isInstancedMesh===!0,bt=L.isBatchedMesh===!0,ne=!!v.map,cn=!!v.matcap,re=!!$,xe=!!v.aoMap,Ue=!!v.lightMap,ie=!!v.bumpMap&&v.wireframe===!1,Pe=!!v.normalMap,be=!!v.displacementMap,Tn=!!v.emissiveMap,ke=!!v.metalnessMap,tn=!!v.roughnessMap,H=v.anisotropy>0,fn=v.clearcoat>0,De=v.dispersion>0,N=v.retroreflectivity>0,w=v.iridescence>0,X=v.sheen>0,J=v.transmission>0,et=H&&!!v.anisotropyMap,ht=fn&&!!v.clearcoatMap,mt=fn&&!!v.clearcoatNormalMap,it=fn&&!!v.clearcoatRoughnessMap,rt=w&&!!v.iridescenceMap,gt=w&&!!v.iridescenceThicknessMap,Tt=X&&!!v.sheenColorMap,ft=X&&!!v.sheenRoughnessMap,dt=!!v.specularMap,Lt=!!v.specularColorMap,Ht=!!v.specularIntensityMap,ee=J&&!!v.transmissionMap,G=J&&!!v.thicknessMap,pt=!!v.gradientMap,st=!!v.alphaMap,xt=v.alphaTest>0,St=!!v.alphaHash,lt=!!v.extensions,Ft=Wi;v.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ft=i.toneMapping);let Pt={shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:ue,fragmentShader:te,defines:v.defines,customVertexShaderID:Vt,customFragmentShaderID:nt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:bt,batchingColor:bt&&L._colorsTexture!==null,instancing:zt,instancingColor:zt&&L.instanceColor!==null,instancingMorph:zt&&L.morphTexture!==null,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Se.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ne,matcap:cn,envMap:re,envMapMode:re&&$.mapping,envMapCubeUVHeight:B,aoMap:xe,lightMap:Ue,bumpMap:ie,normalMap:Pe,displacementMap:be,emissiveMap:Tn,normalMapObjectSpace:Pe&&v.normalMapType===c0,normalMapTangentSpace:Pe&&v.normalMapType===sl,packedNormalMap:Pe&&v.normalMapType===sl&&xS(v.normalMap.format),metalnessMap:ke,roughnessMap:tn,anisotropy:H,anisotropyMap:et,clearcoat:fn,clearcoatMap:ht,clearcoatNormalMap:mt,clearcoatRoughnessMap:it,dispersion:De,retroreflection:N,iridescence:w,iridescenceMap:rt,iridescenceThicknessMap:gt,sheen:X,sheenColorMap:Tt,sheenRoughnessMap:ft,specularMap:dt,specularColorMap:Lt,specularIntensityMap:Ht,transmission:J,transmissionMap:ee,thicknessMap:G,gradientMap:pt,opaque:v.transparent===!1&&v.blending===Vi&&v.alphaToCoverage===!1,alphaMap:st,alphaTest:xt,alphaHash:St,combine:v.combine,mapUv:ne&&m(v.map.channel),aoMapUv:xe&&m(v.aoMap.channel),lightMapUv:Ue&&m(v.lightMap.channel),bumpMapUv:ie&&m(v.bumpMap.channel),normalMapUv:Pe&&m(v.normalMap.channel),displacementMapUv:be&&m(v.displacementMap.channel),emissiveMapUv:Tn&&m(v.emissiveMap.channel),metalnessMapUv:ke&&m(v.metalnessMap.channel),roughnessMapUv:tn&&m(v.roughnessMap.channel),anisotropyMapUv:et&&m(v.anisotropyMap.channel),clearcoatMapUv:ht&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:mt&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:ft&&m(v.sheenRoughnessMap.channel),specularMapUv:dt&&m(v.specularMap.channel),specularColorMapUv:Lt&&m(v.specularColorMap.channel),specularIntensityMapUv:Ht&&m(v.specularIntensityMap.channel),transmissionMapUv:ee&&m(v.transmissionMap.channel),thicknessMapUv:G&&m(v.thicknessMap.channel),alphaMapUv:st&&m(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Pe||H),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(ne||st),fog:!!C,useFog:v.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&Pe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:wt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Rt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:ne&&v.map.isVideoTexture===!0&&Se.getTransfer(v.map.colorSpace)===ze,decodeVideoTextureEmissive:Tn&&v.emissiveMap.isVideoTexture===!0&&Se.getTransfer(v.emissiveMap.colorSpace)===ze,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Zt,flipSided:v.side===In,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:lt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&v.extensions.multiDraw===!0||bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function g(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)E.push(R),E.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(E,v),y(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function p(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function S(v){let E=f[v.type],R;if(E){let I=cs[E];R=S0.clone(I.uniforms)}else R=v.uniforms;return R}function _(v,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new mS(i,E,v,s),c.push(R),u.set(E,R)),R}function b(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:_,releaseProgram:b,releaseShaderCache:M,programs:c,dispose:T}}function vS(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _S(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function V0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function W0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,x,g,p){let y=i[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},i[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=m,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=g,y.group=p),t++,y}function l(d,f,m,x,g,p,y){y.reversedDepth===!0&&(g=-g);let S=a(d,f,m,x,g,p);m.transmission>0?n.push(S):m.transparent===!0?s.push(S):e.push(S)}function c(d,f,m,x,g,p){let y=a(d,f,m,x,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function u(d,f){e.length>1&&e.sort(d||_S),n.length>1&&n.sort(f||V0),s.length>1&&s.sort(f||V0)}function h(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function MS(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new W0,i.set(n,[o])):s>=r.length?(o=new W0,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function bS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new ct};break;case"SpotLight":e={position:new D,direction:new D,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function SS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ES=0;function wS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function TS(i){let t=new bS,e=SS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new me,o=new me;function a(c){let u=0,h=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,y=0,S=0,_=0,b=0,M=0,T=0,v=0,E=0,R=0;c.sort(wS);for(let L=0,P=c.length;L<P;L++){let C=c[L],F=C.color,V=C.intensity,z=C.distance,$=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===or?$=C.shadow.map.texture:$=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=F.r*V,h+=F.g*V,d+=F.b*V;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],V);R++}else if(C.isSunLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,K=e.get(C);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[m]=K,n.sunShadowMap[m]=$;let ut=k.getViewportCount();for(let Rt=0;Rt<ut;Rt++)n.sunShadowMatrix[x+Rt]=k.getMatrix(Rt),n.sunShadowCascade[x+Rt]=k._cascadeData[Rt];x+=ut,m++}n.sun[f]=B,f++}else if(C.isDirectionalLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,K=e.get(C);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=$,n.directionalShadowMatrix[g]=C.shadow.matrix,b++}n.directional[g]=B,g++}else if(C.isSpotLight){let B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(F).multiplyScalar(V),B.distance=z,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[y]=B;let k=C.shadow;if(C.map&&(n.spotLightMap[v]=C.map,v++,k.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[y]=k.matrix,C.castShadow){let K=e.get(C);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=$,T++}y++}else if(C.isRectAreaLight){let B=t.get(C);B.color.copy(F).multiplyScalar(V),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[S]=B,S++}else if(C.isPointLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let k=C.shadow,K=e.get(C);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,K.shadowCameraNear=k.camera.near,K.shadowCameraFar=k.camera.far,n.pointShadow[p]=K,n.pointShadowMap[p]=$,n.pointShadowMatrix[p]=C.shadow.matrix,M++}n.point[p]=B,p++}else if(C.isHemisphereLight){let B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(V),B.groundColor.copy(C.groundColor).multiplyScalar(V),n.hemi[_]=B,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let I=n.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==S||I.hemiLength!==_||I.numSunShadows!==m||I.numDirectionalShadows!==b||I.numPointShadows!==M||I.numSpotShadows!==T||I.numSpotMaps!==v||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=S,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,I.sunLength=f,I.directionalLength=g,I.pointLength=p,I.spotLength=y,I.rectAreaLength=S,I.hemiLength=_,I.numSunShadows=m,I.numDirectionalShadows=b,I.numPointShadows=M,I.numSpotShadows=T,I.numSpotMaps=v,I.numLightProbes=R,n.version=ES++)}function l(c,u){let h=0,d=0,f=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let _=c[y];if(_.isSunLight){let b=n.sun[h];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),h++}else if(_.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(_.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function X0(i){let t=new TS(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function u(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function AS(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new X0(i),t.set(s,[a])):r>=o.length?(a=new X0(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var RS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IS=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],PS=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],q0=new me,ol=new D,wf=new D;function DS(i,t,e){let n=new Io,s=new At,r=new At,o=new Je,a=new Wc,l=new Xc,c={},u=e.maxTextureSize,h={[ir]:In,[In]:ir,[Zt]:Zt},d=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:RS,fragmentShader:CS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new jt;m.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new q(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ja;let p=this.type;this.render=function(M,T,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Hm&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ja);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(os),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let P=p!==this.type;P&&T.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(F=>F.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,F=M.length;C<F;C++){let V=M[C],z=V.shadow;if(z===void 0){Wt("WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let $=z.getFrameExtents();s.multiply($),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,z.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=B,z.map===null||P===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Lo){if(V.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Bn(s.x,s.y,{format:or,type:_i,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),z.map.texture.name=V.name+".shadowMap",z.map.depthTexture=new Ks(s.x,s.y,Pi),z.map.depthTexture.name=V.name+".shadowMapDepth",z.map.depthTexture.format=es,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=bn,z.map.depthTexture.magFilter=bn}else V.isPointLight?(z.map=new $u(s.x),z.map.depthTexture=new Nc(s.x,Xi)):(z.map=new Bn(s.x,s.y),z.map.depthTexture=new Ks(s.x,s.y,Xi)),z.map.depthTexture.name=V.name+".shadowMap",z.map.depthTexture.format=es,this.type===Ja?(z.map.depthTexture.compareFunction=B?qu:Xu,z.map.depthTexture.minFilter=Rn,z.map.depthTexture.magFilter=Rn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=bn,z.map.depthTexture.magFilter=bn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let k=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();V.isPointLight!==!0&&z.updateMatrices(V,v);for(let K=0;K<k;K++){let ut=z.getCamera(K);if(V.isPointLight){let Rt=z.camera,ue=z.matrix,te=V.distance||Rt.far;te!==Rt.far&&(Rt.far=te,Rt.updateProjectionMatrix()),ol.setFromMatrixPosition(V.matrixWorld),Rt.position.copy(ol),wf.copy(Rt.position),wf.add(IS[K]),Rt.up.copy(PS[K]),Rt.lookAt(wf),Rt.updateMatrixWorld(),ue.makeTranslation(-ol.x,-ol.y,-ol.z),q0.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(q0,Rt.coordinateSystem,Rt.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,K),i.clear();else{K===0&&(i.setRenderTarget(z.map),i.clear());let Rt=z.getViewport(K);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),L.viewport(o)}n=z.getFrustum(K),_(T,v,ut,V,this.type)}z.isPointLightShadow!==!0&&this.type===Lo&&y(z,v),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,R,I)};function y(M,T){let v=t.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Bn(s.x,s.y,{format:or,type:_i}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,v,d,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,v,f,x,null)}function S(M,T,v,E){let R=null,I=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)R=I;else if(R=v.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=R.uuid,P=T.uuid,C=c[L];C===void 0&&(C={},c[L]=C);let F=C[P];F===void 0&&(F=R.clone(),C[P]=F,T.addEventListener("dispose",b)),R=F}if(R.visible=T.visible,R.wireframe=T.wireframe,E===Lo?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:h[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=v}return R}function _(M,T,v,E,R){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Lo)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let P=t.update(M),C=M.material;if(Array.isArray(C)){let F=P.groups;for(let V=0,z=F.length;V<z;V++){let $=F[V],B=C[$.materialIndex];if(B&&B.visible){let k=S(M,B,E,R);M.onBeforeShadow(i,M,T,v,P,k,$),i.renderBufferDirect(v,null,P,k,M,$),M.onAfterShadow(i,M,T,v,P,k,$)}}}else if(C.visible){let F=S(M,C,E,R);M.onBeforeShadow(i,M,T,v,P,F,null),i.renderBufferDirect(v,null,P,F,M,null),M.onAfterShadow(i,M,T,v,P,F,null)}}let L=M.children;for(let P=0,C=L.length;P<C;P++)_(L[P],T,v,E,R)}function b(M){M.target.removeEventListener("dispose",b);for(let v in c){let E=c[v],R=M.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function LS(i,t){function e(){let G=!1,pt=new Je,st=null,xt=new Je(0,0,0,0);return{setMask:function(St){st!==St&&!G&&(i.colorMask(St,St,St,St),st=St)},setLocked:function(St){G=St},setClear:function(St,lt,Ft,Pt,Be){Be===!0&&(St*=Pt,lt*=Pt,Ft*=Pt),pt.set(St,lt,Ft,Pt),xt.equals(pt)===!1&&(i.clearColor(St,lt,Ft,Pt),xt.copy(pt))},reset:function(){G=!1,st=null,xt.set(-1,0,0,0)}}}function n(){let G=!1,pt=!1,st=null,xt=null,St=null;return{setReversed:function(lt){if(pt!==lt){let Ft=t.get("EXT_clip_control");lt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),pt=lt;let Pt=St;St=null,this.setClear(Pt)}},getReversed:function(){return pt},setTest:function(lt){lt?at(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(lt){st!==lt&&!G&&(i.depthMask(lt),st=lt)},setFunc:function(lt){if(pt&&(lt=_0[lt]),xt!==lt){switch(lt){case yc:i.depthFunc(i.NEVER);break;case vc:i.depthFunc(i.ALWAYS);break;case _c:i.depthFunc(i.LESS);break;case So:i.depthFunc(i.LEQUAL);break;case Mc:i.depthFunc(i.EQUAL);break;case bc:i.depthFunc(i.GEQUAL);break;case Sc:i.depthFunc(i.GREATER);break;case Ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=lt}},setLocked:function(lt){G=lt},setClear:function(lt){St!==lt&&(St=lt,pt&&(lt=1-lt),i.clearDepth(lt))},reset:function(){G=!1,st=null,xt=null,St=null,pt=!1}}}function s(){let G=!1,pt=null,st=null,xt=null,St=null,lt=null,Ft=null,Pt=null,Be=null;return{setTest:function(Re){G||(Re?at(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(Re){pt!==Re&&!G&&(i.stencilMask(Re),pt=Re)},setFunc:function(Re,Yn,pi){(st!==Re||xt!==Yn||St!==pi)&&(i.stencilFunc(Re,Yn,pi),st=Re,xt=Yn,St=pi)},setOp:function(Re,Yn,pi){(lt!==Re||Ft!==Yn||Pt!==pi)&&(i.stencilOp(Re,Yn,pi),lt=Re,Ft=Yn,Pt=pi)},setLocked:function(Re){G=Re},setClear:function(Re){Be!==Re&&(i.clearStencil(Re),Be=Re)},reset:function(){G=!1,pt=null,st=null,xt=null,St=null,lt=null,Ft=null,Pt=null,Be=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,y=null,S=null,_=null,b=null,M=null,T=null,v=new ct(0,0,0),E=0,R=!1,I=null,L=null,P=null,C=null,F=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,$=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),z=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),z=$>=2);let k=null,K={},ut=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),ue=new Je().fromArray(ut),te=new Je().fromArray(Rt);function Vt(G,pt,st,xt){let St=new Uint8Array(4),lt=i.createTexture();i.bindTexture(G,lt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<st;Ft++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(pt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return lt}let nt={};nt[i.TEXTURE_2D]=Vt(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(So),ie(!1),Pe(Gd),at(i.CULL_FACE),xe(os);function at(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function wt(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function zt(G,pt){return d[G]!==pt?(i.bindFramebuffer(G,pt),d[G]=pt,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pt),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function bt(G,pt){let st=m,xt=!1;if(G){st=f.get(pt),st===void 0&&(st=[],f.set(pt,st));let St=G.textures;if(st.length!==St.length||st[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ft=St.length;lt<Ft;lt++)st[lt]=i.COLOR_ATTACHMENT0+lt;st.length=St.length,xt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,xt=!0);xt&&i.drawBuffers(st)}function ne(G){return x!==G?(i.useProgram(G),x=G,!0):!1}let cn={[Tr]:i.FUNC_ADD,[Gm]:i.FUNC_SUBTRACT,[Vm]:i.FUNC_REVERSE_SUBTRACT};cn[Wm]=i.MIN,cn[Xm]=i.MAX;let re={[qm]:i.ZERO,[Ym]:i.ONE,[Zm]:i.SRC_COLOR,[Xd]:i.SRC_ALPHA,[t0]:i.SRC_ALPHA_SATURATE,[jm]:i.DST_COLOR,[$m]:i.DST_ALPHA,[Jm]:i.ONE_MINUS_SRC_COLOR,[qd]:i.ONE_MINUS_SRC_ALPHA,[Qm]:i.ONE_MINUS_DST_COLOR,[Km]:i.ONE_MINUS_DST_ALPHA,[e0]:i.CONSTANT_COLOR,[n0]:i.ONE_MINUS_CONSTANT_COLOR,[i0]:i.CONSTANT_ALPHA,[s0]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(G,pt,st,xt,St,lt,Ft,Pt,Be,Re){if(G===os){g===!0&&(wt(i.BLEND),g=!1);return}if(g===!1&&(at(i.BLEND),g=!0),G!==km){if(G!==p||Re!==R){if((y!==Tr||b!==Tr)&&(i.blendEquation(i.FUNC_ADD),y=Tr,b=Tr),Re)switch(G){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vn:i.blendFunc(i.ONE,i.ONE);break;case Vd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Yt("WebGLState: Invalid blending: ",G);break}else switch(G){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vd:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wd:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",G);break}S=null,_=null,M=null,T=null,v.set(0,0,0),E=0,p=G,R=Re}return}St=St||pt,lt=lt||st,Ft=Ft||xt,(pt!==y||St!==b)&&(i.blendEquationSeparate(cn[pt],cn[St]),y=pt,b=St),(st!==S||xt!==_||lt!==M||Ft!==T)&&(i.blendFuncSeparate(re[st],re[xt],re[lt],re[Ft]),S=st,_=xt,M=lt,T=Ft),(Pt.equals(v)===!1||Be!==E)&&(i.blendColor(Pt.r,Pt.g,Pt.b,Be),v.copy(Pt),E=Be),p=G,R=!1}function Ue(G,pt){G.side===Zt?wt(i.CULL_FACE):at(i.CULL_FACE);let st=G.side===In;pt&&(st=!st),ie(st),G.blending===Vi&&G.transparent===!1?xe(os):xe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let xt=G.stencilWrite;a.setTest(xt),xt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Tn(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(G){I!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),I=G)}function Pe(G){G!==Om?(at(i.CULL_FACE),G!==L&&(G===Gd?i.cullFace(i.BACK):G===zm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),L=G}function be(G){G!==P&&(z&&i.lineWidth(G),P=G)}function Tn(G,pt,st){G?(at(i.POLYGON_OFFSET_FILL),(C!==pt||F!==st)&&(C=pt,F=st,o.getReversed()&&(pt=-pt),i.polygonOffset(pt,st))):wt(i.POLYGON_OFFSET_FILL)}function ke(G){G?at(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function tn(G){G===void 0&&(G=i.TEXTURE0+V-1),k!==G&&(i.activeTexture(G),k=G)}function H(G,pt,st){st===void 0&&(k===null?st=i.TEXTURE0+V-1:st=k);let xt=K[st];xt===void 0&&(xt={type:void 0,texture:void 0},K[st]=xt),(xt.type!==G||xt.texture!==pt)&&(k!==st&&(i.activeTexture(st),k=st),i.bindTexture(G,pt||nt[G]),xt.type=G,xt.texture=pt)}function fn(){let G=K[k];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function De(){try{i.compressedTexImage2D(...arguments)}catch(G){Yt("WebGLState:",G)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(G){Yt("WebGLState:",G)}}function w(){try{i.texSubImage2D(...arguments)}catch(G){Yt("WebGLState:",G)}}function X(){try{i.texSubImage3D(...arguments)}catch(G){Yt("WebGLState:",G)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(G){Yt("WebGLState:",G)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(G){Yt("WebGLState:",G)}}function ht(){try{i.texStorage2D(...arguments)}catch(G){Yt("WebGLState:",G)}}function mt(){try{i.texStorage3D(...arguments)}catch(G){Yt("WebGLState:",G)}}function it(){try{i.texImage2D(...arguments)}catch(G){Yt("WebGLState:",G)}}function rt(){try{i.texImage3D(...arguments)}catch(G){Yt("WebGLState:",G)}}function gt(G){return h[G]!==void 0?h[G]:i.getParameter(G)}function Tt(G,pt){h[G]!==pt&&(i.pixelStorei(G,pt),h[G]=pt)}function ft(G){ue.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ue.copy(G))}function dt(G){te.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),te.copy(G))}function Lt(G,pt){let st=c.get(pt);st===void 0&&(st=new WeakMap,c.set(pt,st));let xt=st.get(G);xt===void 0&&(xt=i.getUniformBlockIndex(pt,G.name),st.set(G,xt))}function Ht(G,pt){let xt=c.get(pt).get(G);l.get(pt)!==xt&&(i.uniformBlockBinding(pt,xt,G.__bindingPointIndex),l.set(pt,xt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},k=null,K={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,y=null,S=null,_=null,b=null,M=null,T=null,v=new ct(0,0,0),E=0,R=!1,I=null,L=null,P=null,C=null,F=null,ue.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:wt,bindFramebuffer:zt,drawBuffers:bt,useProgram:ne,setBlending:xe,setMaterial:Ue,setFlipSided:ie,setCullFace:Pe,setLineWidth:be,setPolygonOffset:Tn,setScissorTest:ke,activeTexture:tn,bindTexture:H,unbindTexture:fn,compressedTexImage2D:De,compressedTexImage3D:N,texImage2D:it,texImage3D:rt,pixelStorei:Tt,getParameter:gt,updateUBOMapping:Lt,uniformBlockBinding:Ht,texStorage2D:ht,texStorage3D:mt,texSubImage2D:w,texSubImage3D:X,compressedTexSubImage2D:J,compressedTexSubImage3D:et,scissor:ft,viewport:dt,reset:ee}}function NS(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,u=new WeakMap,h=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,w){return m?new OffscreenCanvas(N,w):Aa("canvas")}function g(N,w,X){let J=1,et=De(N);if((et.width>X||et.height>X)&&(J=X/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&N instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&N instanceof ImageBitmap||typeof VideoFrame!="undefined"&&N instanceof VideoFrame){let ht=Math.floor(J*et.width),mt=Math.floor(J*et.height);d===void 0&&(d=x(ht,mt));let it=w?x(ht,mt):d;return it.width=ht,it.height=mt,it.getContext("2d").drawImage(N,0,0,ht,mt),Wt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+ht+"x"+mt+")."),it}else return"data"in N&&Wt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),N;return N}function p(N){return N.generateMipmaps}function y(N){i.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(N,w,X,J,et,ht=!1){if(N!==null){if(i[N]!==void 0)return i[N];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let mt;J&&(mt=t.get("EXT_texture_norm16"),mt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=w;if(w===i.RED&&(X===i.FLOAT&&(it=i.R32F),X===i.HALF_FLOAT&&(it=i.R16F),X===i.UNSIGNED_BYTE&&(it=i.R8),X===i.UNSIGNED_SHORT&&mt&&(it=mt.R16_EXT),X===i.SHORT&&mt&&(it=mt.R16_SNORM_EXT)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.R8UI),X===i.UNSIGNED_SHORT&&(it=i.R16UI),X===i.UNSIGNED_INT&&(it=i.R32UI),X===i.BYTE&&(it=i.R8I),X===i.SHORT&&(it=i.R16I),X===i.INT&&(it=i.R32I)),w===i.RG&&(X===i.FLOAT&&(it=i.RG32F),X===i.HALF_FLOAT&&(it=i.RG16F),X===i.UNSIGNED_BYTE&&(it=i.RG8),X===i.UNSIGNED_SHORT&&mt&&(it=mt.RG16_EXT),X===i.SHORT&&mt&&(it=mt.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RG8UI),X===i.UNSIGNED_SHORT&&(it=i.RG16UI),X===i.UNSIGNED_INT&&(it=i.RG32UI),X===i.BYTE&&(it=i.RG8I),X===i.SHORT&&(it=i.RG16I),X===i.INT&&(it=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RGB8UI),X===i.UNSIGNED_SHORT&&(it=i.RGB16UI),X===i.UNSIGNED_INT&&(it=i.RGB32UI),X===i.BYTE&&(it=i.RGB8I),X===i.SHORT&&(it=i.RGB16I),X===i.INT&&(it=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),X===i.UNSIGNED_INT&&(it=i.RGBA32UI),X===i.BYTE&&(it=i.RGBA8I),X===i.SHORT&&(it=i.RGBA16I),X===i.INT&&(it=i.RGBA32I)),w===i.RGB&&(X===i.UNSIGNED_SHORT&&mt&&(it=mt.RGB16_EXT),X===i.SHORT&&mt&&(it=mt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),w===i.RGBA){let rt=ht?Ta:Se.getTransfer(et);X===i.FLOAT&&(it=i.RGBA32F),X===i.HALF_FLOAT&&(it=i.RGBA16F),X===i.UNSIGNED_BYTE&&(it=rt===ze?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&mt&&(it=mt.RGBA16_EXT),X===i.SHORT&&mt&&(it=mt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function b(N,w){let X;return N?w===null||w===Xi||w===Uo?X=i.DEPTH24_STENCIL8:w===Pi?X=i.DEPTH32F_STENCIL8:w===No&&(X=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Xi||w===Uo?X=i.DEPTH_COMPONENT24:w===Pi?X=i.DEPTH_COMPONENT32F:w===No&&(X=i.DEPTH_COMPONENT16),X}function M(N,w){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==bn&&N.minFilter!==Rn?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function T(N){let w=N.target;w.removeEventListener("dispose",T),E(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&h.delete(w)}function v(N){let w=N.target;w.removeEventListener("dispose",v),I(w)}function E(N){let w=n.get(N);if(w.__webglInit===void 0)return;let X=N.source,J=f.get(X);if(J){let et=J[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&R(N),Object.keys(J).length===0&&f.delete(X)}n.remove(N)}function R(N){let w=n.get(N);i.deleteTexture(w.__webglTexture);let X=N.source,J=f.get(X);delete J[w.__cacheKey],o.memory.textures--}function I(N){let w=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let et=0;et<w.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(w.__webglFramebuffer[J][et]);else i.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)i.deleteFramebuffer(w.__webglFramebuffer[J]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let X=N.textures;for(let J=0,et=X.length;J<et;J++){let ht=n.get(X[J]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),o.memory.textures--),n.remove(X[J])}n.remove(N)}let L=0;function P(){L=0}function C(){return L}function F(N){L=N}function V(){let N=L;return N>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,N}function z(N){let w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function $(N,w){let X=n.get(N);if(N.isVideoTexture&&H(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&X.__version!==N.version){let J=N.image;if(J===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(X,N,w);return}}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function B(N,w){let X=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){wt(X,N,w);return}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function k(N,w){let X=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){wt(X,N,w);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function K(N,w){let X=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&X.__version!==N.version){zt(X,N,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}let ut={[$s]:i.REPEAT,[ts]:i.CLAMP_TO_EDGE,[wc]:i.MIRRORED_REPEAT},Rt={[bn]:i.NEAREST,[a0]:i.NEAREST_MIPMAP_NEAREST,[Ka]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[lu]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},ue={[h0]:i.NEVER,[g0]:i.ALWAYS,[d0]:i.LESS,[Xu]:i.LEQUAL,[f0]:i.EQUAL,[qu]:i.GEQUAL,[p0]:i.GREATER,[m0]:i.NOTEQUAL};function te(N,w){if(w.type===Pi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Rn||w.magFilter===lu||w.magFilter===Ka||w.magFilter===as||w.minFilter===Rn||w.minFilter===lu||w.minFilter===Ka||w.minFilter===as)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,ut[w.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,ut[w.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,ut[w.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Rt[w.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Rt[w.minFilter]),w.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ue[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===bn||w.minFilter!==Ka&&w.minFilter!==as||w.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Vt(N,w){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",T));let J=w.source,et=f.get(J);et===void 0&&(et={},f.set(J,et));let ht=z(w);if(ht!==N.__cacheKey){et[ht]===void 0&&(et[ht]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),et[ht].usedTimes++;let mt=et[N.__cacheKey];mt!==void 0&&(et[N.__cacheKey].usedTimes--,mt.usedTimes===0&&R(w)),N.__cacheKey=ht,N.__webglTexture=et[ht].texture}return X}function nt(N,w,X){return Math.floor(Math.floor(N/X)/w)}function at(N,w,X,J){let ht=N.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,X,J,w.data);else{ht.sort((Tt,ft)=>Tt.start-ft.start);let mt=0;for(let Tt=1;Tt<ht.length;Tt++){let ft=ht[mt],dt=ht[Tt],Lt=ft.start+ft.count,Ht=nt(dt.start,w.width,4),ee=nt(ft.start,w.width,4);dt.start<=Lt+1&&Ht===ee&&nt(dt.start+dt.count-1,w.width,4)===Ht?ft.count=Math.max(ft.count,dt.start+dt.count-ft.start):(++mt,ht[mt]=dt)}ht.length=mt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Tt=0,ft=ht.length;Tt<ft;Tt++){let dt=ht[Tt],Lt=Math.floor(dt.start/4),Ht=Math.ceil(dt.count/4),ee=Lt%w.width,G=Math.floor(Lt/w.width),pt=Ht,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,ee,G,pt,st,X,J,w.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function wt(N,w,X){let J=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=i.TEXTURE_3D);let et=Vt(N,w),ht=w.source;e.bindTexture(J,N.__webglTexture,i.TEXTURE0+X);let mt=n.get(ht);if(ht.version!==mt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap!="undefined"&&w.image instanceof ImageBitmap)===!1){let st=Se.getPrimaries(Se.workingColorSpace),xt=w.colorSpace===Is?null:Se.getPrimaries(w.colorSpace),St=w.colorSpace===Is||st===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let rt=g(w.image,!1,s.maxTextureSize);rt=fn(w,rt);let gt=r.convert(w.format,w.colorSpace),Tt=r.convert(w.type),ft=_(w.internalFormat,gt,Tt,w.normalized,w.colorSpace,w.isVideoTexture);te(J,w);let dt,Lt=w.mipmaps,Ht=w.isVideoTexture!==!0,ee=mt.__version===void 0||et===!0,G=ht.dataReady,pt=M(w,rt);if(w.isDepthTexture)ft=b(w.format===rr,w.type),ee&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,ft,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,ft,rt.width,rt.height,0,gt,Tt,null));else if(w.isDataTexture)if(Lt.length>0){Ht&&ee&&e.texStorage2D(i.TEXTURE_2D,pt,ft,Lt[0].width,Lt[0].height);for(let st=0,xt=Lt.length;st<xt;st++)dt=Lt[st],Ht?G&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,dt.width,dt.height,gt,Tt,dt.data):e.texImage2D(i.TEXTURE_2D,st,ft,dt.width,dt.height,0,gt,Tt,dt.data);w.generateMipmaps=!1}else Ht?(ee&&e.texStorage2D(i.TEXTURE_2D,pt,ft,rt.width,rt.height),G&&at(w,rt,gt,Tt)):e.texImage2D(i.TEXTURE_2D,0,ft,rt.width,rt.height,0,gt,Tt,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ht&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,ft,Lt[0].width,Lt[0].height,rt.depth);for(let st=0,xt=Lt.length;st<xt;st++)if(dt=Lt[st],w.format!==ci)if(gt!==null)if(Ht){if(G)if(w.layerUpdates.size>0){let St=pf(dt.width,dt.height,w.format,w.type);for(let lt of w.layerUpdates){let Ft=dt.data.subarray(lt*St/dt.data.BYTES_PER_ELEMENT,(lt+1)*St/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,lt,dt.width,dt.height,1,gt,Ft)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,dt.width,dt.height,rt.depth,gt,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,ft,dt.width,dt.height,rt.depth,0,dt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,dt.width,dt.height,rt.depth,gt,Tt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,ft,dt.width,dt.height,rt.depth,0,gt,Tt,dt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ht&&ee&&e.texStorage2D(i.TEXTURE_2D,pt,ft,Lt[0].width,Lt[0].height);for(let st=0,xt=Lt.length;st<xt;st++)dt=Lt[st],w.format!==ci?gt!==null?Ht?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,dt.width,dt.height,gt,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,ft,dt.width,dt.height,0,dt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?G&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,dt.width,dt.height,gt,Tt,dt.data):e.texImage2D(i.TEXTURE_2D,st,ft,dt.width,dt.height,0,gt,Tt,dt.data)}else if(w.isDataArrayTexture)if(Ht){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,ft,rt.width,rt.height,rt.depth),G)if(w.layerUpdates.size>0){let st=pf(rt.width,rt.height,w.format,w.type);for(let xt of w.layerUpdates){let St=rt.data.subarray(xt*st/rt.data.BYTES_PER_ELEMENT,(xt+1)*st/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,rt.width,rt.height,1,gt,Tt,St)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,gt,Tt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,rt.width,rt.height,rt.depth,0,gt,Tt,rt.data);else if(w.isData3DTexture)Ht?(ee&&e.texStorage3D(i.TEXTURE_3D,pt,ft,rt.width,rt.height,rt.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,gt,Tt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,ft,rt.width,rt.height,rt.depth,0,gt,Tt,rt.data);else if(w.isFramebufferTexture){if(ee)if(Ht)e.texStorage2D(i.TEXTURE_2D,pt,ft,rt.width,rt.height);else{let st=rt.width,xt=rt.height;for(let St=0;St<pt;St++)e.texImage2D(i.TEXTURE_2D,St,ft,st,xt,0,gt,Tt,null),st>>=1,xt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),rt.parentNode!==st){st.appendChild(rt),h.add(w),st.onpaint=xt=>{let St=xt.changedElements;for(let lt of h)St.includes(lt.image)&&(lt.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let St=i.RGBA,lt=i.RGBA,Ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,St,lt,Ft,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Ht&&ee){let st=De(Lt[0]);e.texStorage2D(i.TEXTURE_2D,pt,ft,st.width,st.height)}for(let st=0,xt=Lt.length;st<xt;st++)dt=Lt[st],Ht?G&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,gt,Tt,dt):e.texImage2D(i.TEXTURE_2D,st,ft,gt,Tt,dt);w.generateMipmaps=!1}else if(Ht){if(ee){let st=De(rt);e.texStorage2D(i.TEXTURE_2D,pt,ft,st.width,st.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Tt,rt)}else e.texImage2D(i.TEXTURE_2D,0,ft,gt,Tt,rt);p(w)&&y(J),mt.__version=ht.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function zt(N,w,X){if(w.image.length!==6)return;let J=Vt(N,w),et=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+X);let ht=n.get(et);if(et.version!==ht.__version||J===!0){e.activeTexture(i.TEXTURE0+X);let mt=Se.getPrimaries(Se.workingColorSpace),it=w.colorSpace===Is?null:Se.getPrimaries(w.colorSpace),rt=w.colorSpace===Is||mt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let gt=w.isCompressedTexture||w.image[0].isCompressedTexture,Tt=w.image[0]&&w.image[0].isDataTexture,ft=[];for(let lt=0;lt<6;lt++)!gt&&!Tt?ft[lt]=g(w.image[lt],!0,s.maxCubemapSize):ft[lt]=Tt?w.image[lt].image:w.image[lt],ft[lt]=fn(w,ft[lt]);let dt=ft[0],Lt=r.convert(w.format,w.colorSpace),Ht=r.convert(w.type),ee=_(w.internalFormat,Lt,Ht,w.normalized,w.colorSpace),G=w.isVideoTexture!==!0,pt=ht.__version===void 0||J===!0,st=et.dataReady,xt=M(w,dt);te(i.TEXTURE_CUBE_MAP,w);let St;if(gt){G&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,ee,dt.width,dt.height);for(let lt=0;lt<6;lt++){St=ft[lt].mipmaps;for(let Ft=0;Ft<St.length;Ft++){let Pt=St[Ft];w.format!==ci?Lt!==null?G?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,0,0,Pt.width,Pt.height,Lt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,ee,Pt.width,Pt.height,0,Pt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,0,0,Pt.width,Pt.height,Lt,Ht,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,ee,Pt.width,Pt.height,0,Lt,Ht,Pt.data)}}}else{if(St=w.mipmaps,G&&pt){St.length>0&&xt++;let lt=De(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,ee,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Tt){G?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,ft[lt].width,ft[lt].height,Lt,Ht,ft[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ee,ft[lt].width,ft[lt].height,0,Lt,Ht,ft[lt].data);for(let Ft=0;Ft<St.length;Ft++){let Be=St[Ft].image[lt].image;G?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,0,0,Be.width,Be.height,Lt,Ht,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,ee,Be.width,Be.height,0,Lt,Ht,Be.data)}}else{G?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Lt,Ht,ft[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ee,Lt,Ht,ft[lt]);for(let Ft=0;Ft<St.length;Ft++){let Pt=St[Ft];G?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,0,0,Lt,Ht,Pt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,ee,Lt,Ht,Pt.image[lt])}}}p(w)&&y(i.TEXTURE_CUBE_MAP),ht.__version=et.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function bt(N,w,X,J,et,ht){let mt=r.convert(X.format,X.colorSpace),it=r.convert(X.type),rt=_(X.internalFormat,mt,it,X.normalized,X.colorSpace),gt=n.get(w),Tt=n.get(X);if(Tt.__renderTarget=w,!gt.__hasExternalTextures){let ft=Math.max(1,w.width>>ht),dt=Math.max(1,w.height>>ht);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,ht,rt,ft,dt,w.depth,0,mt,it,null):e.texImage2D(et,ht,rt,ft,dt,0,mt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),tn(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,et,Tt.__webglTexture,0,ke(w)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,et,Tt.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(N,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,N),w.depthBuffer){let J=w.depthTexture,et=J&&J.isDepthTexture?J.type:null,ht=b(w.stencilBuffer,et),mt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;tn(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(w),ht,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(w),ht,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ht,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,N)}else{let J=w.textures;for(let et=0;et<J.length;et++){let ht=J[et],mt=r.convert(ht.format,ht.colorSpace),it=r.convert(ht.type),rt=_(ht.internalFormat,mt,it,ht.normalized,ht.colorSpace);tn(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(w),rt,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(w),rt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,rt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function cn(N,w,X){let J=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(w.depthTexture);if(et.__renderTarget=w,(!et.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J){if(et.__webglInit===void 0&&(et.__webglInit=!0,w.depthTexture.addEventListener("dispose",T)),et.__webglTexture===void 0){et.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),te(i.TEXTURE_CUBE_MAP,w.depthTexture);let gt=r.convert(w.depthTexture.format),Tt=r.convert(w.depthTexture.type),ft;w.depthTexture.format===es?ft=i.DEPTH_COMPONENT24:w.depthTexture.format===rr&&(ft=i.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ft,w.width,w.height,0,gt,Tt,null)}}else $(w.depthTexture,0);let ht=et.__webglTexture,mt=ke(w),it=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,rt=w.depthTexture.format===rr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===es)tn(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,it,ht,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,it,ht,0);else if(w.depthTexture.format===rr)tn(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,it,ht,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,it,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(N){let w=n.get(N),X=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){let J=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){let et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),w.__depthDisposeCallback=et}w.__boundDepthTexture=J}if(N.depthTexture&&!w.__autoAllocateDepthBuffer)if(X)for(let J=0;J<6;J++)cn(w.__webglFramebuffer[J],N,J);else{let J=N.texture.mipmaps;J&&J.length>0?cn(w.__webglFramebuffer[0],N,0):cn(w.__webglFramebuffer,N,0)}else if(X){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=i.createRenderbuffer(),ne(w.__webglDepthbuffer[J],N,!1);else{let et=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=w.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ht)}}else{let J=N.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ne(w.__webglDepthbuffer,N,!1);else{let et=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(N,w,X){let J=n.get(N);w!==void 0&&bt(J.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&re(N)}function Ue(N){let w=N.texture,X=n.get(N),J=n.get(w);N.addEventListener("dispose",v);let et=N.textures,ht=N.isWebGLCubeRenderTarget===!0,mt=et.length>1;if(mt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,o.memory.textures++),ht){X.__webglFramebuffer=[];for(let it=0;it<6;it++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[it]=[];for(let rt=0;rt<w.mipmaps.length;rt++)X.__webglFramebuffer[it][rt]=i.createFramebuffer()}else X.__webglFramebuffer[it]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let it=0;it<w.mipmaps.length;it++)X.__webglFramebuffer[it]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(mt)for(let it=0,rt=et.length;it<rt;it++){let gt=n.get(et[it]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&tn(N)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){let rt=et[it];X.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[it]);let gt=r.convert(rt.format,rt.colorSpace),Tt=r.convert(rt.type),ft=_(rt.internalFormat,gt,Tt,rt.normalized,rt.colorSpace,N.isXRRenderTarget===!0),dt=ke(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,ft,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,X.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(X.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),te(i.TEXTURE_CUBE_MAP,w);for(let it=0;it<6;it++)if(w.mipmaps&&w.mipmaps.length>0)for(let rt=0;rt<w.mipmaps.length;rt++)bt(X.__webglFramebuffer[it][rt],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,rt);else bt(X.__webglFramebuffer[it],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(w)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let it=0,rt=et.length;it<rt;it++){let gt=et[it],Tt=n.get(gt),ft=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ft=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Tt.__webglTexture),te(ft,gt),bt(X.__webglFramebuffer,N,gt,i.COLOR_ATTACHMENT0+it,ft,0),p(gt)&&y(ft)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(it=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,J.__webglTexture),te(it,w),w.mipmaps&&w.mipmaps.length>0)for(let rt=0;rt<w.mipmaps.length;rt++)bt(X.__webglFramebuffer[rt],N,w,i.COLOR_ATTACHMENT0,it,rt);else bt(X.__webglFramebuffer,N,w,i.COLOR_ATTACHMENT0,it,0);p(w)&&y(it),e.unbindTexture()}N.depthBuffer&&re(N)}function ie(N){let w=N.textures;for(let X=0,J=w.length;X<J;X++){let et=w[X];if(p(et)){let ht=S(N),mt=n.get(et).__webglTexture;e.bindTexture(ht,mt),y(ht),e.unbindTexture()}}}let Pe=[],be=[];function Tn(N){if(N.samples>0){if(tn(N)===!1){let w=N.textures,X=N.width,J=N.height,et=i.COLOR_BUFFER_BIT,ht=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(N),it=w.length>1;if(it)for(let gt=0;gt<w.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let rt=N.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let gt=0;gt<w.length;gt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let Tt=n.get(w[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,X,J,0,0,X,J,et,i.NEAREST),l===!0&&(Pe.length=0,be.length=0,Pe.push(i.COLOR_ATTACHMENT0+gt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Pe.push(ht),be.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let gt=0;gt<w.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let Tt=n.get(w[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let w=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ke(N){return Math.min(s.maxSamples,N.samples)}function tn(N){let w=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function H(N){let w=o.render.frame;u.get(N)!==w&&(u.set(N,w),N.update())}function fn(N,w){let X=N.colorSpace,J=N.format,et=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==wa&&X!==Is&&(Se.getTransfer(X)===ze?(J!==ci||et!==li)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",X)),w}function De(N){return typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame!="undefined"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=P,this.getTextureUnits=C,this.setTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=K,this.rebindTextures=xe,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function US(i,t){function e(n,s=Is){let r,o=Se.getTransfer(s);if(n===li)return i.UNSIGNED_BYTE;if(n===uu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ef)return i.BYTE;if(n===nf)return i.SHORT;if(n===No)return i.UNSIGNED_SHORT;if(n===cu)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Pi)return i.FLOAT;if(n===_i)return i.HALF_FLOAT;if(n===of)return i.ALPHA;if(n===af)return i.RGB;if(n===ci)return i.RGBA;if(n===es)return i.DEPTH_COMPONENT;if(n===rr)return i.DEPTH_STENCIL;if(n===Fo)return i.RED;if(n===du)return i.RED_INTEGER;if(n===or)return i.RG;if(n===fu)return i.RG_INTEGER;if(n===pu)return i.RGBA_INTEGER;if(n===ja||n===Qa||n===tl||n===el)if(o===ze)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===el)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===el)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mu||n===gu||n===xu||n===yu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vu||n===_u||n===Mu||n===bu||n===Su||n===nl||n===Eu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vu||n===_u)return o===ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mu)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bu)return r.COMPRESSED_R11_EAC;if(n===Su)return r.COMPRESSED_SIGNED_R11_EAC;if(n===nl)return r.COMPRESSED_RG11_EAC;if(n===Eu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wu||n===Tu||n===Au||n===Ru||n===Cu||n===Iu||n===Pu||n===Du||n===Lu||n===Nu||n===Uu||n===Fu||n===Bu||n===Ou)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wu)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tu)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Au)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ru)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cu)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Iu)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pu)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Du)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lu)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nu)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uu)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fu)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bu)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ou)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zu||n===Hu||n===ku)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zu)return o===ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ku)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gu||n===Vu||n===il||n===Wu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Uo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var FS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Lf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ba(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:FS,fragmentShader:BS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new q(new un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nf=class extends ns{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null,x=typeof XRWebGLBinding!="undefined",g=new Lf,p={},y=e.getContextAttributes(),S=null,_=null,b=[],M=[],T=new At,v=null,E=null,R=new yn;R.viewport=new Je;let I=new yn;I.viewport=new Je;let L=[R,I],P=new iu,C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let at=b[nt];return at===void 0&&(at=new Ao,b[nt]=at),at.getTargetRaySpace()},this.getControllerGrip=function(nt){let at=b[nt];return at===void 0&&(at=new Ao,b[nt]=at),at.getGripSpace()},this.getHand=function(nt){let at=b[nt];return at===void 0&&(at=new Ao,b[nt]=at),at.getHandSpace()};function V(nt){let at=M.indexOf(nt.inputSource);if(at===-1)return;let wt=b[at];wt!==void 0&&(wt.update(nt.inputSource,nt.frame,c||o),wt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",$);for(let nt=0;nt<b.length;nt++){let at=M[nt];at!==null&&(M[nt]=null,b[nt].disconnect(at))}C=null,F=null,g.reset();for(let nt in p)delete p[nt];if(t.setRenderTarget(S),f=null,d=null,h=null,s=null,_=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(T.width,T.height,!1),E!==null){let nt=E.camera;nt.fov=E.fov,nt.zoom=E.zoom,nt.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",z),s.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,zt=null,bt=null;y.depth&&(bt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=y.stencil?rr:es,zt=y.stencil?Uo:Xi);let ne={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(ne),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Bn(d.textureWidth,d.textureHeight,{format:ci,type:li,depthTexture:new Ks(d.textureWidth,d.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let wt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Bn(f.framebufferWidth,f.framebufferHeight,{format:ci,type:li,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(nt){for(let at=0;at<nt.removed.length;at++){let wt=nt.removed[at],zt=M.indexOf(wt);zt>=0&&(M[zt]=null,b[zt].disconnect(wt))}for(let at=0;at<nt.added.length;at++){let wt=nt.added[at],zt=M.indexOf(wt);if(zt===-1){for(let ne=0;ne<b.length;ne++)if(ne>=M.length){M.push(wt),zt=ne;break}else if(M[ne]===null){M[ne]=wt,zt=ne;break}if(zt===-1)break}let bt=b[zt];bt&&bt.connect(wt)}}let B=new D,k=new D;function K(nt,at,wt){B.setFromMatrixPosition(at.matrixWorld),k.setFromMatrixPosition(wt.matrixWorld);let zt=B.distanceTo(k),bt=at.projectionMatrix.elements,ne=wt.projectionMatrix.elements,cn=bt[14]/(bt[10]-1),re=bt[14]/(bt[10]+1),xe=(bt[9]+1)/bt[5],Ue=(bt[9]-1)/bt[5],ie=(bt[8]-1)/bt[0],Pe=(ne[8]+1)/ne[0],be=cn*ie,Tn=cn*Pe,ke=zt/(-ie+Pe),tn=ke*-ie;if(at.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(tn),nt.translateZ(ke),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),bt[10]===-1)nt.projectionMatrix.copy(at.projectionMatrix),nt.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let H=cn+ke,fn=re+ke,De=be-tn,N=Tn+(zt-tn),w=xe*re/fn*H,X=Ue*re/fn*H;nt.projectionMatrix.makePerspective(De,N,w,X,H,fn),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function ut(nt,at){at===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(at.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let at=nt.near,wt=nt.far;g.texture!==null&&(g.depthNear>0&&(at=g.depthNear),g.depthFar>0&&(wt=g.depthFar)),P.near=I.near=R.near=at,P.far=I.far=R.far=wt,(C!==P.near||F!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),C=P.near,F=P.far),P.layers.mask=nt.layers.mask|6,R.layers.mask=P.layers.mask&-5,I.layers.mask=P.layers.mask&-3;let zt=nt.parent,bt=P.cameras;ut(P,zt);for(let ne=0;ne<bt.length;ne++)ut(bt[ne],zt);bt.length===2?K(P,R,I):P.projectionMatrix.copy(R.projectionMatrix),E===null&&nt.isPerspectiveCamera&&(E={camera:nt,fov:nt.fov,zoom:nt.zoom}),Rt(nt,P,zt)};function Rt(nt,at,wt){wt===null?nt.matrix.copy(at.matrixWorld):(nt.matrix.copy(wt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(at.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(at.projectionMatrix),nt.projectionMatrixInverse.copy(at.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ac*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(nt){l=nt,d!==null&&(d.fixedFoveation=nt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=nt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(nt){return p[nt]};let ue=null;function te(nt,at){if(u=at.getViewerPose(c||o),m=at,u!==null){let wt=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let zt=!1;wt.length!==P.cameras.length&&(P.cameras.length=0,zt=!0);for(let re=0;re<wt.length;re++){let xe=wt[re],Ue=null;if(f!==null)Ue=f.getViewport(xe);else{let Pe=h.getViewSubImage(d,xe);Ue=Pe.viewport,re===0&&(t.setRenderTargetTextures(_,Pe.colorTexture,Pe.depthStencilTexture),t.setRenderTarget(_))}let ie=L[re];ie===void 0&&(ie=new yn,ie.layers.enable(re),ie.viewport=new Je,L[re]=ie),ie.matrix.fromArray(xe.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(xe.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),re===0&&(P.matrix.copy(ie.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),zt===!0&&P.cameras.push(ie)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let re=h.getDepthInformation(wt[0]);re&&re.isValid&&re.texture&&g.init(re,s.renderState)}if(bt&&bt.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let re=0;re<wt.length;re++){let xe=wt[re].camera;if(xe){let Ue=p[xe];Ue||(Ue=new Ba,p[xe]=Ue);let ie=h.getCameraImage(xe);Ue.sourceTexture=ie}}}}for(let wt=0;wt<b.length;wt++){let zt=M[wt],bt=b[wt];zt!==null&&bt!==void 0&&bt.update(zt,at,c||o)}ue&&ue(nt,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),m=null}let Vt=new Y0;Vt.setAnimationLoop(te),this.setAnimationLoop=function(nt){ue=nt},this.dispose=function(){}}},OS=new me,Q0=new Qt;Q0.set(-1,0,0,0,1,0,0,0,1);function zS(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,hf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,S,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===In&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===In&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),S=y.envMap,_=y.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(OS.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Q0),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===In&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function HS(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let M=b.program;n.uniformBlockBinding(_,M)}function c(_,b){let M=s[_.id];M===void 0&&(g(_),M=u(_),s[_.id]=M,_.addEventListener("dispose",y));let T=b.program;n.updateUBOMapping(_,T);let v=t.render.frame;r[_.id]!==v&&(d(_),r[_.id]=v)}function u(_){let b=h();_.__bindingPointIndex=b;let M=i.createBuffer(),T=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let b=s[_.id],M=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,E=M.length;v<E;v++){let R=M[v];if(Array.isArray(R))for(let I=0,L=R.length;I<L;I++)f(R[I],v,I,T);else f(R,v,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,b,M,T){if(x(_,b,M,T)===!0){let v=_.__offset,E=_.value;if(Array.isArray(E)){let R=0;for(let I=0;I<E.length;I++){let L=E[I],P=p(L);m(L,_.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,_.__data)}}function m(_,b,M){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,M)}function x(_,b,M,T){let v=_.value,E=b+"_"+M;if(T[E]===void 0)return typeof v=="number"||typeof v=="boolean"?T[E]=v:ArrayBuffer.isView(v)?T[E]=v.slice():T[E]=v.clone(),!0;{let R=T[E];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return T[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function g(_){let b=_.uniforms,M=0,T=16;for(let E=0,R=b.length;E<R;E++){let I=Array.isArray(b[E])?b[E]:[b[E]];for(let L=0,P=I.length;L<P;L++){let C=I[L],F=Array.isArray(C.value)?C.value:[C.value];for(let V=0,z=F.length;V<z;V++){let $=F[V],B=p($),k=M%T,K=k%B.boundary,ut=k+K;M+=K,ut!==0&&T-ut<B.storage&&(M+=T-ut),C.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=M,M+=B.storage}}}let v=M%T;return v>0&&(M+=T-v),_.__size=M,_.__cache={},this}function p(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",_),b}function y(_){let b=_.target;b.removeEventListener("dispose",y);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function S(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:S}}var kS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ls=null;function GS(){return ls===null&&(ls=new Rs(kS,16,16,or,_i),ls.name="DFG_LUT",ls.minFilter=Rn,ls.magFilter=Rn,ls.wrapS=ts,ls.wrapT=ts,ls.generateMipmaps=!1,ls.needsUpdate=!0),ls}var Ku=class{constructor(t={}){let{canvas:e=x0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=li}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=f,g=new Set([pu,fu,du]),p=new Set([li,Xi,No,Uo,uu,hu]),y=new Uint32Array(4),S=new Int32Array(4),_=new D,b=null,M=null,T=[],v=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,L=null,P=null,C=null,F=null;this._outputColorSpace=An;let V=0,z=0,$=null,B=-1,k=null,K=new Je,ut=new Je,Rt=null,ue=new ct(0),te=0,Vt=e.width,nt=e.height,at=1,wt=null,zt=null,bt=new Je(0,0,Vt,nt),ne=new Je(0,0,Vt,nt),cn=!1,re=new Io,xe=!1,Ue=!1,ie=new me,Pe=new D,be=new Je,Tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function tn(){return $===null?at:1}let H=n;function fn(A,O){return e.getContext(A,O)}let De,N,w,X,J,et,ht,mt,it,rt,gt,Tt,ft,dt,Lt,Ht,ee,G,pt,st,xt,St,lt;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Be,!1),e.addEventListener("webglcontextrestored",Re,!1),e.addEventListener("webglcontextcreationerror",Yn,!1),H===null){let O="webgl2";if(H=fn(O,A),H===null)throw fn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(A){throw e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",Yn,!1),Yt("WebGLRenderer: "+A.message),A}function Ft(){De=new JM(H),De.init(),xt=new US(H,De),N=new zM(H,De,t,xt),w=new LS(H,De),N.reversedDepthBuffer&&d&&w.buffers.depth.setReversed(!0),P=H.createFramebuffer(),C=H.createFramebuffer(),F=H.createFramebuffer(),X=new jM(H),J=new vS,et=new NS(H,De,w,J,N,xt,X),ht=new ZM(R),mt=new t1(H),St=new BM(H,mt),it=new $M(H,mt,X,St),rt=new tb(H,it,mt,St,X),G=new QM(H,N,et),Lt=new HM(J),gt=new yS(R,ht,De,N,St,Lt),Tt=new zS(R,J),ft=new MS,dt=new AS(De),ee=new FM(R,ht,w,rt,m,l),Ht=new DS(R,rt,N),lt=new HS(H,X,N,w),pt=new OM(H,De,X),st=new KM(H,De,X),X.programs=gt.programs,R.capabilities=N,R.extensions=De,R.properties=J,R.renderLists=ft,R.shadowMap=Ht,R.state=w,R.info=X}x!==li&&(E=new nb(x,e.width,e.height,a,s,r));let Pt=new Nf(R,H);this.xr=Pt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=De.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=De.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(A){A!==void 0&&(at=A,this.setSize(Vt,nt,!1))},this.getSize=function(A){return A.set(Vt,nt)},this.setSize=function(A,O,Q=!0){if(Pt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Vt=A,nt=O,e.width=Math.floor(A*at),e.height=Math.floor(O*at),Q===!0&&(e.style.width=A+"px",e.style.height=O+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(Vt*at,nt*at).floor()},this.setDrawingBufferSize=function(A,O,Q){Vt=A,nt=O,at=Q,e.width=Math.floor(A*Q),e.height=Math.floor(O*Q),this.setViewport(0,0,A,O)},this.setEffects=function(A){if(x===li){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let O=0;O<A.length;O++)if(A[O].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(K)},this.getViewport=function(A){return A.copy(bt)},this.setViewport=function(A,O,Q,Y){A.isVector4?bt.set(A.x,A.y,A.z,A.w):bt.set(A,O,Q,Y),w.viewport(K.copy(bt).multiplyScalar(at).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,O,Q,Y){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,O,Q,Y),w.scissor(ut.copy(ne).multiplyScalar(at).round())},this.getScissorTest=function(){return cn},this.setScissorTest=function(A){w.setScissorTest(cn=A)},this.setOpaqueSort=function(A){wt=A},this.setTransparentSort=function(A){zt=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,Q=!0){let Y=0;if(A){let Z=!1;if($!==null){let Et=$.texture.format;Z=g.has(Et)}if(Z){let Et=$.texture.type,It=p.has(Et),Mt=ee.getClearColor(),Nt=ee.getClearAlpha(),Bt=Mt.r,he=Mt.g,ve=Mt.b;It?(y[0]=Bt,y[1]=he,y[2]=ve,y[3]=Nt,H.clearBufferuiv(H.COLOR,0,y)):(S[0]=Bt,S[1]=he,S[2]=ve,S[3]=Nt,H.clearBufferiv(H.COLOR,0,S))}else Y|=H.COLOR_BUFFER_BIT}O&&(Y|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",Yn,!1),ee.dispose(),ft.dispose(),dt.dispose(),J.dispose(),ht.dispose(),rt.dispose(),St.dispose(),lt.dispose(),gt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",Qr),Pt.removeEventListener("sessionend",Ti),zn.stop()};function Be(A){A.preventDefault(),Ra("WebGLRenderer: Context Lost."),I=!0}function Re(){Ra("WebGLRenderer: Context Restored."),I=!1;let A=X.autoReset,O=Ht.enabled,Q=Ht.autoUpdate,Y=Ht.needsUpdate,Z=Ht.type;Ft(),X.autoReset=A,Ht.enabled=O,Ht.autoUpdate=Q,Ht.needsUpdate=Y,Ht.type=Z}function Yn(A){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pi(A){let O=A.target;O.removeEventListener("dispose",pi),vs(O)}function vs(A){Kr(A),J.remove(A)}function Kr(A){let O=J.get(A).programs;O!==void 0&&(O.forEach(function(Q){gt.releaseProgram(Q)}),A.isShaderMaterial&&gt.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,Q,Y,Z,Et){O===null&&(O=Tn);let It=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Mt=Te(A,O,Q,Y,Z);w.setMaterial(Y,It);let Nt=Q.index,Bt=1;if(Y.wireframe===!0){if(Nt=it.getWireframeAttribute(Q),Nt===void 0)return;Bt=2}let he=Q.drawRange,ve=Q.attributes.position,Ut=he.start*Bt,Oe=(he.start+he.count)*Bt;Et!==null&&(Ut=Math.max(Ut,Et.start*Bt),Oe=Math.min(Oe,(Et.start+Et.count)*Bt)),Nt!==null?(Ut=Math.max(Ut,0),Oe=Math.min(Oe,Nt.count)):ve!=null&&(Ut=Math.max(Ut,0),Oe=Math.min(Oe,ve.count));let _n=Oe-Ut;if(_n<0||_n===1/0)return;St.setup(Z,Y,Mt,Q,Nt);let en,We=pt;if(Nt!==null&&(en=mt.get(Nt),We=st,We.setIndex(en)),Z.isMesh)Y.wireframe===!0?(w.setLineWidth(Y.wireframeLinewidth*tn()),We.setMode(H.LINES)):We.setMode(H.TRIANGLES);else if(Z.isLine){let Hn=Y.linewidth;Hn===void 0&&(Hn=1),w.setLineWidth(Hn*tn()),Z.isLineSegments?We.setMode(H.LINES):Z.isLineLoop?We.setMode(H.LINE_LOOP):We.setMode(H.LINE_STRIP)}else Z.isPoints?We.setMode(H.POINTS):Z.isSprite&&We.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(De.get("WEBGL_multi_draw"))We.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Hn=Z._multiDrawStarts,Ct=Z._multiDrawCounts,Zn=Z._multiDrawCount,Ce=Nt?mt.get(Nt).bytesPerElement:1,Ai=J.get(Y).currentProgram.getUniforms();for(let Ki=0;Ki<Zn;Ki++)Ai.setValue(H,"_gl_DrawID",Ki),We.render(Hn[Ki]/Ce,Ct[Ki])}else if(Z.isInstancedMesh)We.renderInstances(Ut,_n,Z.count);else if(Q.isInstancedBufferGeometry){let Hn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ct=Math.min(Q.instanceCount,Hn);We.renderInstances(Ut,_n,Ct)}else We.render(Ut,_n)};function ha(A,O,Q,Y){L!==null&&A.isNodeMaterial&&L.setObject(Y,A),xe===!0&&Lt.setState(A,Q,!1),A.transparent===!0&&A.side===Zt&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,Ye(A,O,Y),A.side=ir,A.needsUpdate=!0,Ye(A,O,Y),A.side=Zt):Ye(A,O,Y)}this.compile=function(A,O,Q=null){Q===null&&(Q=A),L!==null&&L.renderStart(A,O,Q),M=dt.get(Q),M.init(O),v.push(M),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),A!==Q&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),Ue=this.localClippingEnabled,xe=Lt.init(this.clippingPlanes,Ue),xe===!0&&Lt.setGlobalState(this.clippingPlanes,O),L!==null&&Ht.render(M.state.shadowsArray,Q,O);let Y=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Et=Z.material;if(Et)if(Array.isArray(Et))for(let It=0;It<Et.length;It++){let Mt=Et[It];ha(Mt,Q,O,Z),Y.add(Mt)}else ha(Et,Q,O,Z),Y.add(Et)}),M=v.pop(),L!==null&&L.renderEnd(),Y},this.compileAsync=function(A,O,Q=null){let Y=this.compile(A,O,Q);return new Promise(Z=>{function Et(){if(Y.forEach(function(It){let Nt=J.get(It).currentProgram;(Nt===void 0||Nt.isReady())&&Y.delete(It)}),Y.size===0){Z(A);return}setTimeout(Et,10)}De.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let jr=null;function Hs(A){jr&&jr(A)}function Qr(){zn.stop()}function Ti(){zn.start()}let zn=new Y0;zn.setAnimationLoop(Hs),typeof self!="undefined"&&zn.setContext(self),this.setAnimationLoop=function(A){jr=A,Pt.setAnimationLoop(A),A===null?zn.stop():zn.start()},Pt.addEventListener("sessionstart",Qr),Pt.addEventListener("sessionend",Ti),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(A,O);let Q=Pt.enabled===!0&&Pt.isPresenting===!0,Y=E!==null&&($===null||Q)&&E.begin(R,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(O),O=Pt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,O,$),M=dt.get(A,v.length),M.init(O),M.state.textureUnits=et.getTextureUnits(),v.push(M),ie.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),re.setFromProjectionMatrix(ie,zi,O.reversedDepth),Ue=this.localClippingEnabled,xe=Lt.init(this.clippingPlanes,Ue),b=ft.get(A,T.length),b.init(),T.push(b),Pt.enabled===!0&&Pt.isPresenting===!0){let It=R.xr.getDepthSensingMesh();It!==null&&$i(It,O,-1/0,R.sortObjects)}$i(A,O,0,R.sortObjects),b.finish(),L!==null&&L.updateLights(M.state.lightsArray),R.sortObjects===!0&&b.sort(wt,zt),ke=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,ke&&ee.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&Lt.beginShadows();let Z=M.state.shadowsArray;if(Ht.render(Z,A,O),xe===!0&&Lt.endShadows(),(Y&&E.hasRenderPass())===!1){let It=b.opaque,Mt=b.transmissive;if(M.setupLights(),O.isArrayCamera){let Nt=O.cameras;if(Mt.length>0)for(let Bt=0,he=Nt.length;Bt<he;Bt++){let ve=Nt[Bt];j(It,Mt,A,ve)}ke&&ee.render(A);for(let Bt=0,he=Nt.length;Bt<he;Bt++){let ve=Nt[Bt];Gl(b,A,ve,ve.viewport)}}else Mt.length>0&&j(It,Mt,A,O),ke&&ee.render(A),Gl(b,A,O)}$!==null&&z===0&&(et.updateMultisampleRenderTarget($),et.updateRenderTargetMipmap($)),Y&&E.end(R),A.isScene===!0&&A.onAfterRender(R,A,O),St.resetDefaultState(),B=-1,k=null,v.pop(),v.length>0?(M=v[v.length-1],et.setTextureUnits(M.state.textureUnits),xe===!0&&Lt.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?b=T[T.length-1]:b=null,L!==null&&L.renderEnd()};function $i(A,O,Q,Y){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLightProbeGrid)M.pushLightProbeGrid(A);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(re)){Y&&be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ie);let It=rt.update(A),Mt=A.material;Mt.visible&&b.push(A,It,Mt,Q,be.z,null,O)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(re))){let It=rt.update(A),Mt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),be.copy(A.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),be.copy(It.boundingSphere.center)),be.applyMatrix4(A.matrixWorld).applyMatrix4(ie)),Array.isArray(Mt)){let Nt=It.groups;for(let Bt=0,he=Nt.length;Bt<he;Bt++){let ve=Nt[Bt],Ut=Mt[ve.materialIndex];Ut&&Ut.visible&&b.push(A,It,Ut,Q,be.z,ve,O)}}else Mt.visible&&b.push(A,It,Mt,Q,be.z,null,O)}}let Et=A.children;for(let It=0,Mt=Et.length;It<Mt;It++)$i(Et[It],O,Q,Y)}function Gl(A,O,Q,Y){let{opaque:Z,transmissive:Et,transparent:It}=A;M.setupLightsView(Q),xe===!0&&Lt.setGlobalState(R.clippingPlanes,Q),Y&&w.viewport(K.copy(Y)),Z.length>0&&yt(Z,O,Q),Et.length>0&&yt(Et,O,Q),It.length>0&&yt(It,O,Q),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function j(A,O,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){let Ut=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new Bn(1,1,{generateMipmaps:!0,type:Ut?_i:li,minFilter:as,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Se.workingColorSpace})}let Et=M.state.transmissionRenderTarget[Y.id],It=Y.viewport||K;Et.setSize(It.z*R.transmissionResolutionScale,It.w*R.transmissionResolutionScale);let Mt=R.getRenderTarget(),Nt=R.getActiveCubeFace(),Bt=R.getActiveMipmapLevel();R.setRenderTarget(Et),R.getClearColor(ue),te=R.getClearAlpha(),te<1&&R.setClearColor(16777215,.5),R.clear(),ke&&ee.render(Q);let he=R.toneMapping;R.toneMapping=Wi;let ve=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),xe===!0&&Lt.setGlobalState(R.clippingPlanes,Y),yt(A,Q,Y),et.updateMultisampleRenderTarget(Et),et.updateRenderTargetMipmap(Et),De.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Oe=0,_n=O.length;Oe<_n;Oe++){let en=O[Oe],{object:We,geometry:Hn,material:Ct,group:Zn}=en;if(Ct.side===Zt&&We.layers.test(Y.layers)){let Ce=Ct.side;Ct.side=In,Ct.needsUpdate=!0,ae(We,Q,Y,Hn,Ct,Zn),Ct.side=Ce,Ct.needsUpdate=!0,Ut=!0}}Ut===!0&&(et.updateMultisampleRenderTarget(Et),et.updateRenderTargetMipmap(Et))}R.setRenderTarget(Mt,Nt,Bt),R.setClearColor(ue,te),ve!==void 0&&(Y.viewport=ve),R.toneMapping=he}function yt(A,O,Q){let Y=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,Et=A.length;Z<Et;Z++){let It=A[Z],{object:Mt,geometry:Nt,group:Bt}=It,he=It.material;he.allowOverride===!0&&Y!==null&&(he=Y),Mt.layers.test(Q.layers)&&ae(Mt,O,Q,Nt,he,Bt)}}function ae(A,O,Q,Y,Z,Et){L!==null&&Z.isNodeMaterial&&L.setObject(A,Z),A.onBeforeRender(R,O,Q,Y,Z,Et),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(R,O,Q,Y,A,Et),Z.transparent===!0&&Z.side===Zt&&Z.forceSinglePass===!1?(Z.side=In,Z.needsUpdate=!0,R.renderBufferDirect(Q,O,Y,Z,A,Et),Z.side=ir,Z.needsUpdate=!0,R.renderBufferDirect(Q,O,Y,Z,A,Et),Z.side=Zt):R.renderBufferDirect(Q,O,Y,Z,A,Et),A.onAfterRender(R,O,Q,Y,Z,Et)}function Ye(A,O,Q){O.isScene!==!0&&(O=Tn);let Y=J.get(A),Z=M.state.lights,Et=M.state.shadowsArray,It=Z.state.version,Mt=gt.getParameters(A,Z.state,Et,O,Q,M.state.lightProbeGridArray),Nt=gt.getProgramCacheKey(Mt),Bt=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?O.environment:null,Y.fog=O.fog;let he=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=ht.get(A.envMap||Y.environment,he),Y.envMapRotation=Y.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Bt===void 0&&(A.addEventListener("dispose",pi),Bt=new Map,Y.programs=Bt);let ve=Bt.get(Nt);if(ve!==void 0){if(Y.currentProgram===ve&&Y.lightsStateVersion===It)return pe(A,Mt),ve}else Mt.uniforms=gt.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,Q,Mt),A.onBeforeCompile(Mt,R),ve=gt.acquireProgram(Mt,Nt),Bt.set(Nt,ve),Y.uniforms=Mt.uniforms;let Ut=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ut.clippingPlanes=Lt.uniform),pe(A,Mt),Y.needsLights=vr(A),Y.lightsStateVersion=It,Y.needsLights&&(Ut.ambientLightColor.value=Z.state.ambient,Ut.lightProbe.value=Z.state.probe,Ut.sunLights.value=Z.state.sun,Ut.sunLightShadows.value=Z.state.sunShadow,Ut.directionalLights.value=Z.state.directional,Ut.directionalLightShadows.value=Z.state.directionalShadow,Ut.spotLights.value=Z.state.spot,Ut.spotLightShadows.value=Z.state.spotShadow,Ut.rectAreaLights.value=Z.state.rectArea,Ut.ltc_1.value=Z.state.rectAreaLTC1,Ut.ltc_2.value=Z.state.rectAreaLTC2,Ut.pointLights.value=Z.state.point,Ut.pointLightShadows.value=Z.state.pointShadow,Ut.hemisphereLights.value=Z.state.hemi,Ut.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ut.sunShadowCascade.value=Z.state.sunShadowCascade,Ut.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ut.spotLightMatrix.value=Z.state.spotLightMatrix,Ut.spotLightMap.value=Z.state.spotLightMap,Ut.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=ve,Y.uniformsList=null,ve}function Xt(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=zo.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function pe(A,O){let Q=J.get(A);Q.outputColorSpace=O.outputColorSpace,Q.batching=O.batching,Q.batchingColor=O.batchingColor,Q.instancing=O.instancing,Q.instancingColor=O.instancingColor,Q.instancingMorph=O.instancingMorph,Q.skinning=O.skinning,Q.morphTargets=O.morphTargets,Q.morphNormals=O.morphNormals,Q.morphColors=O.morphColors,Q.morphTargetsCount=O.morphTargetsCount,Q.numClippingPlanes=O.numClippingPlanes,Q.numIntersection=O.numClipIntersection,Q.vertexAlphas=O.vertexAlphas,Q.vertexTangents=O.vertexTangents,Q.toneMapping=O.toneMapping}function le(A,O){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(O.matrixWorld);for(let Q=0,Y=A.length;Q<Y;Q++){let Z=A[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(_))return Z}return null}function Te(A,O,Q,Y,Z){O.isScene!==!0&&(O=Tn),et.resetTextureUnits();let Et=O.fog,It=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?O.environment:null,Mt=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Se.workingColorSpace,Nt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Bt=ht.get(Y.envMap||It,Nt),he=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ve=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ut=!!Q.morphAttributes.position,Oe=!!Q.morphAttributes.normal,_n=!!Q.morphAttributes.color,en=Wi;Y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(en=R.toneMapping);let We=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Hn=We!==void 0?We.length:0,Ct=J.get(Y),Zn=M.state.lights;if(xe===!0&&(Ue===!0||A!==k)){let Ze=A===k&&Y.id===B;Lt.setState(Y,A,Ze)}let Ce=!1;Y.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Zn.state.version||Ct.outputColorSpace!==Mt||Z.isBatchedMesh&&Ct.batching===!1||!Z.isBatchedMesh&&Ct.batching===!0||Z.isBatchedMesh&&Ct.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ct.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ct.instancing===!1||!Z.isInstancedMesh&&Ct.instancing===!0||Z.isSkinnedMesh&&Ct.skinning===!1||!Z.isSkinnedMesh&&Ct.skinning===!0||Z.isInstancedMesh&&Ct.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ct.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ct.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ct.instancingMorph===!1&&Z.morphTexture!==null||Ct.envMap!==Bt||Y.fog===!0&&Ct.fog!==Et||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Lt.numPlanes||Ct.numIntersection!==Lt.numIntersection)||Ct.vertexAlphas!==he||Ct.vertexTangents!==ve||Ct.morphTargets!==Ut||Ct.morphNormals!==Oe||Ct.morphColors!==_n||Ct.toneMapping!==en||Ct.morphTargetsCount!==Hn||!!Ct.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Ce=!0):(Ce=!0,Ct.__version=Y.version);let Ai=Ct.currentProgram;Ce===!0&&(Ai=Ye(Y,O,Z),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,Ai,Ct));let Ki=!1,ks=!1,eo=!1,Ge=Ai.getUniforms(),xn=Ct.uniforms;if(w.useProgram(Ai.program)&&(Ki=!0,ks=!0,eo=!0),Y.id!==B&&(B=Y.id,ks=!0),Ct.needsLights){let Ze=le(M.state.lightProbeGridArray,Z);Ct.lightProbeGrid!==Ze&&(Ct.lightProbeGrid=Ze,ks=!0)}if(Ki||k!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ge.setValue(H,"projectionMatrix",A.projectionMatrix),Ge.setValue(H,"viewMatrix",A.matrixWorldInverse);let Vs=Ge.map.cameraPosition;Vs!==void 0&&Vs.setValue(H,Pe.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&Ge.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ge.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),k!==A&&(k=A,ks=!0,eo=!0)}if(Ct.needsLights&&(Zn.state.sunShadowMap.length>0&&Ge.setValue(H,"sunShadowMap",Zn.state.sunShadowMap,et),Zn.state.directionalShadowMap.length>0&&Ge.setValue(H,"directionalShadowMap",Zn.state.directionalShadowMap,et),Zn.state.spotShadowMap.length>0&&Ge.setValue(H,"spotShadowMap",Zn.state.spotShadowMap,et),Zn.state.pointShadowMap.length>0&&Ge.setValue(H,"pointShadowMap",Zn.state.pointShadowMap,et)),Z.isSkinnedMesh){Ge.setOptional(H,Z,"bindMatrix"),Ge.setOptional(H,Z,"bindMatrixInverse");let Ze=Z.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Ge.setValue(H,"boneTexture",Ze.boneTexture,et))}Z.isBatchedMesh&&(Ge.setOptional(H,Z,"batchingTexture"),Ge.setValue(H,"batchingTexture",Z._matricesTexture,et),Ge.setOptional(H,Z,"batchingIdTexture"),Ge.setValue(H,"batchingIdTexture",Z._indirectTexture,et),Ge.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ge.setValue(H,"batchingColorTexture",Z._colorsTexture,et));let Gs=Q.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&G.update(Z,Q,Ai),(ks||Ct.receiveShadow!==Z.receiveShadow)&&(Ct.receiveShadow=Z.receiveShadow,Ge.setValue(H,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&O.environment!==null&&(xn.envMapIntensity.value=O.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=GS()),ks){if(Ge.setValue(H,"toneMappingExposure",R.toneMappingExposure),Ct.needsLights&&Ni(xn,eo),Et&&Y.fog===!0&&Tt.refreshFogUniforms(xn,Et),Tt.refreshMaterialUniforms(xn,Y,at,nt,M.state.transmissionRenderTarget[A.id]),Ct.needsLights&&Ct.lightProbeGrid){let Ze=Ct.lightProbeGrid;xn.probesSH.value=Ze.texture,xn.probesMin.value.copy(Ze.boundingBox.min),xn.probesMax.value.copy(Ze.boundingBox.max),xn.probesResolution.value.copy(Ze.resolution)}zo.upload(H,Xt(Ct),xn,et)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(zo.upload(H,Xt(Ct),xn,et),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ge.setValue(H,"center",Z.center),Ge.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Ge.setValue(H,"normalMatrix",Z.normalMatrix),Ge.setValue(H,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Ze=Y.uniformsGroups;for(let Vs=0,no=Ze.length;Vs<no;Vs++){let im=Ze[Vs];lt.update(im,Ai),lt.bind(im,Ai)}}return Ai}function Ni(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.sunLights.needsUpdate=O,A.sunLightShadows.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function vr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,O,Q){let Y=J.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),J.get(A.texture).__webglTexture=O,J.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){let Q=J.get(A);Q.__webglFramebuffer=O,Q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,Q=0){$=A,V=O,z=Q;let Y=null,Z=!1,Et=!1;if(A){let Mt=J.get(A);if(Mt.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(H.FRAMEBUFFER,Mt.__webglFramebuffer),K.copy(A.viewport),ut.copy(A.scissor),Rt=A.scissorTest,w.viewport(K),w.scissor(ut),w.setScissorTest(Rt),B=-1;return}else if(Mt.__webglFramebuffer===void 0)et.setupRenderTarget(A);else if(Mt.__hasExternalTextures)et.rebindTextures(A,J.get(A.texture).__webglTexture,J.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let he=A.depthTexture;if(Mt.__boundDepthTexture!==he){if(he!==null&&J.has(he)&&(A.width!==he.image.width||A.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(A)}}let Nt=A.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Et=!0);let Bt=J.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Bt[O])?Y=Bt[O][Q]:Y=Bt[O],Z=!0):A.samples>0&&et.useMultisampledRTT(A)===!1?Y=J.get(A).__webglMultisampledFramebuffer:Array.isArray(Bt)?Y=Bt[Q]:Y=Bt,K.copy(A.viewport),ut.copy(A.scissor),Rt=A.scissorTest}else K.copy(bt).multiplyScalar(at).floor(),ut.copy(ne).multiplyScalar(at).floor(),Rt=cn;if(Q!==0&&(Y=P),w.bindFramebuffer(H.FRAMEBUFFER,Y)&&w.drawBuffers(A,Y),w.viewport(K),w.scissor(ut),w.setScissorTest(Rt),Z){let Mt=J.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,Mt.__webglTexture,Q)}else if(Et){let Mt=O;for(let Nt=0;Nt<A.textures.length;Nt++){let Bt=J.get(A.textures[Nt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Nt,Bt.__webglTexture,Q,Mt)}}else if(A!==null&&Q!==0){let Mt=J.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Mt.__webglTexture,Q)}B=-1};function to(A){let O=J.get(A);return(O.__readFormat!==A.format||O.__readType!==A.type)&&(O.__readFormat=A.format,O.__readType=A.type,O.__formatReadable=N.textureFormatReadable(A.format),O.__typeReadable=N.textureTypeReadable(A.type)),O}this.readRenderTargetPixels=function(A,O,Q,Y,Z,Et,It,Mt=0){if(!(A&&A.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Nt=Nt[It]),Nt){w.bindFramebuffer(H.FRAMEBUFFER,Nt);try{let Bt=A.textures[Mt],he=Bt.format,ve=Bt.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Mt);let Ut=to(Bt);if(Ut.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-Y&&Q>=0&&Q<=A.height-Z&&H.readPixels(O,Q,Y,Z,xt.convert(he),xt.convert(ve),Et)}finally{let Bt=$!==null?J.get($).__webglFramebuffer:null;w.bindFramebuffer(H.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(A,O,Q,Y,Z,Et,It,Mt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Nt=Nt[It]),Nt)if(O>=0&&O<=A.width-Y&&Q>=0&&Q<=A.height-Z){w.bindFramebuffer(H.FRAMEBUFFER,Nt);let Bt=A.textures[Mt],he=Bt.format,ve=Bt.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Mt);let Ut=to(Bt);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Oe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Oe),H.bufferData(H.PIXEL_PACK_BUFFER,Et.byteLength,H.STREAM_READ),H.readPixels(O,Q,Y,Z,xt.convert(he),xt.convert(ve),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let _n=$!==null?J.get($).__webglFramebuffer:null;w.bindFramebuffer(H.FRAMEBUFFER,_n);let en=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await v0(H,en,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Oe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Et),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Oe),H.deleteSync(en),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,Q=0){let Y=Math.pow(2,-Q),Z=Math.floor(A.image.width*Y),Et=Math.floor(A.image.height*Y),It=O!==null?O.x:0,Mt=O!==null?O.y:0;et.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,Q,0,0,It,Mt,Z,Et),w.unbindTexture()},this.copyTextureToTexture=function(A,O,Q=null,Y=null,Z=0,Et=0){let It,Mt,Nt,Bt,he,ve,Ut,Oe,_n,en=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(Q!==null)It=Q.max.x-Q.min.x,Mt=Q.max.y-Q.min.y,Nt=Q.isBox3?Q.max.z-Q.min.z:1,Bt=Q.min.x,he=Q.min.y,ve=Q.isBox3?Q.min.z:0;else{let xn=Math.pow(2,-Z);It=Math.floor(en.width*xn),Mt=Math.floor(en.height*xn),A.isDataArrayTexture?Nt=en.depth:A.isData3DTexture?Nt=Math.floor(en.depth*xn):Nt=1,Bt=0,he=0,ve=0}Y!==null?(Ut=Y.x,Oe=Y.y,_n=Y.z):(Ut=0,Oe=0,_n=0);let We=xt.convert(O.format),Hn=xt.convert(O.type),Ct;O.isData3DTexture?(et.setTexture3D(O,0),Ct=H.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(et.setTexture2DArray(O,0),Ct=H.TEXTURE_2D_ARRAY):(et.setTexture2D(O,0),Ct=H.TEXTURE_2D),w.activeTexture(H.TEXTURE0),w.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,O.flipY),w.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),w.pixelStorei(H.UNPACK_ALIGNMENT,O.unpackAlignment);let Zn=w.getParameter(H.UNPACK_ROW_LENGTH),Ce=w.getParameter(H.UNPACK_IMAGE_HEIGHT),Ai=w.getParameter(H.UNPACK_SKIP_PIXELS),Ki=w.getParameter(H.UNPACK_SKIP_ROWS),ks=w.getParameter(H.UNPACK_SKIP_IMAGES);w.pixelStorei(H.UNPACK_ROW_LENGTH,en.width),w.pixelStorei(H.UNPACK_IMAGE_HEIGHT,en.height),w.pixelStorei(H.UNPACK_SKIP_PIXELS,Bt),w.pixelStorei(H.UNPACK_SKIP_ROWS,he),w.pixelStorei(H.UNPACK_SKIP_IMAGES,ve);let eo=A.isDataArrayTexture||A.isData3DTexture,Ge=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){let xn=J.get(A),Gs=J.get(O),Ze=J.get(xn.__renderTarget),Vs=J.get(Gs.__renderTarget);w.bindFramebuffer(H.READ_FRAMEBUFFER,Ze.__webglFramebuffer),w.bindFramebuffer(H.DRAW_FRAMEBUFFER,Vs.__webglFramebuffer);for(let no=0;no<Nt;no++)eo&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,J.get(A).__webglTexture,Z,ve+no),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,J.get(O).__webglTexture,Et,_n+no)),H.blitFramebuffer(Bt,he,It,Mt,Ut,Oe,It,Mt,H.DEPTH_BUFFER_BIT,H.NEAREST);w.bindFramebuffer(H.READ_FRAMEBUFFER,null),w.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||J.has(A)){let xn=J.get(A),Gs=J.get(O);w.bindFramebuffer(H.READ_FRAMEBUFFER,C),w.bindFramebuffer(H.DRAW_FRAMEBUFFER,F);for(let Ze=0;Ze<Nt;Ze++)eo?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,xn.__webglTexture,Z,ve+Ze):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,xn.__webglTexture,Z),Ge?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gs.__webglTexture,Et,_n+Ze):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Gs.__webglTexture,Et),Z!==0?H.blitFramebuffer(Bt,he,It,Mt,Ut,Oe,It,Mt,H.COLOR_BUFFER_BIT,H.NEAREST):Ge?H.copyTexSubImage3D(Ct,Et,Ut,Oe,_n+Ze,Bt,he,It,Mt):H.copyTexSubImage2D(Ct,Et,Ut,Oe,Bt,he,It,Mt);w.bindFramebuffer(H.READ_FRAMEBUFFER,null),w.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ge?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Ct,Et,Ut,Oe,_n,It,Mt,Nt,We,Hn,en.data):O.isCompressedArrayTexture?H.compressedTexSubImage3D(Ct,Et,Ut,Oe,_n,It,Mt,Nt,We,en.data):H.texSubImage3D(Ct,Et,Ut,Oe,_n,It,Mt,Nt,We,Hn,en):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Et,Ut,Oe,It,Mt,We,Hn,en.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Et,Ut,Oe,en.width,en.height,We,en.data):H.texSubImage2D(H.TEXTURE_2D,Et,Ut,Oe,It,Mt,We,Hn,en);w.pixelStorei(H.UNPACK_ROW_LENGTH,Zn),w.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ce),w.pixelStorei(H.UNPACK_SKIP_PIXELS,Ai),w.pixelStorei(H.UNPACK_SKIP_ROWS,Ki),w.pixelStorei(H.UNPACK_SKIP_IMAGES,ks),Et===0&&O.generateMipmaps&&H.generateMipmap(Ct),w.unbindTexture()},this.initRenderTarget=function(A){J.get(A).__webglFramebuffer===void 0&&et.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?et.setTextureCube(A,0):A.isData3DTexture?et.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?et.setTexture2DArray(A,0):et.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){V=0,z=0,$=null,w.reset(),St.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}};var jn={sunDir:{value:new D(0,1,0)},sunCol:{value:new D(1,.85,.6)},misc:{value:new Je(0,.08,0,0)}},ko="gl_FragColor.rgb+=(fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))))-.5)/255.;",th=oe;th.fog_pars_vertex=`#ifdef USE_FOG
varying float vFogDepth;varying vec3 vFogWP;
#endif`;th.fog_vertex=`#ifdef USE_FOG
vFogDepth=-mvPosition.z;vFogWP=transpose(mat3(viewMatrix))*mvPosition.xyz;
#endif`;th.fog_pars_fragment=`#ifdef USE_FOG
uniform vec3 fogColor;varying float vFogDepth;varying vec3 vFogWP;uniform vec3 fogSunDir;uniform vec3 fogSunCol;uniform vec4 fogMisc;
#ifdef FOG_EXP2
uniform float fogDensity;
#else
uniform float fogNear;uniform float fogFar;
#endif
#endif`;th.fog_fragment=`#ifdef USE_FOG
#ifdef FOG_EXP2
float fogFactor=1.-exp(-fogDensity*fogDensity*vFogDepth*vFogDepth);
#else
float tF=clamp((vFogDepth-fogNear)/(fogFar-fogNear),0.,1.);
float cF=tF*tF*(3.-2.*tF);
float hF=exp(-max(cameraPosition.y+vFogWP.y,0.)*fogMisc.y);
float fogFactor=mix(cF*(.3+.7*hF),1.,smoothstep(.82,1.,tF));
vec2 fwp=cameraPosition.xz+vFogWP.xz;float ftt=fogMisc.w*.06;
float fpn=.5+.3*sin(fwp.x*.021+sin(fwp.y*.017+ftt)*1.7+ftt*.7)+.2*sin(fwp.y*.037-fwp.x*.011-ftt*1.3);
fogFactor=clamp(fogFactor*mix(1.,.5+1.*fpn,fogMisc.z*(1.-smoothstep(.82,1.,tF))),0.,1.);
#endif
float scF=pow(max(dot(normalize(vFogWP),fogSunDir),0.),5.)*fogMisc.x*fogFactor;
gl_FragColor.rgb=mix(gl_FragColor.rgb,mix(fogColor,fogSunCol,clamp(scF,0.,.8)),fogFactor);
${ko}
#endif`;var tg=i=>{i.uniforms.fogSunDir=jn.sunDir,i.uniforms.fogSunCol=jn.sunCol,i.uniforms.fogMisc=jn.misc};Object.defineProperty(ai.prototype,"onBeforeCompile",{configurable:!0,get(){return this._obc||tg},set(i){let t=(e,n)=>{tg(e),i(e,n)};t.toString=()=>i.toString()+"/*fogfx*/",this._obc=t}});var VS=()=>{try{return localStorage.getItem("rio3d-hap")!=="0"}catch{return!0}},Uf=null;function Ir(i){if(VS())try{if(navigator.vibrate){navigator.vibrate(i);return}if(!Uf){let t=document.createElement("label");t.style.cssText="position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";let e=document.createElement("input");e.type="checkbox",e.setAttribute("switch",""),t.appendChild(e),document.body.appendChild(t),Uf=t}Uf.click()}catch{}}var Ff=(i,t,e)=>Math.max(t,Math.min(e,i)),us=[293.66,329.63,349.23,440,466.16,587.33,659.25,698.46,880,932.33],sn=(i,t)=>i+Math.random()*(t-i),$t={on:!0,resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},setOn(i){this.on=i,this.ctx&&this.mute(!i)},rain(i){this.setRain(i?1:0)},update(){},scrub(){},chime(){this.discover()},lantern(i){if(Ir(9),!this.ok())return;this.cap("Nota de linterna");let t=this.ctx.currentTime;this.pluck(us[3+(Math.random()*4|0)],.1,t,(i||0)*3,-2),this.bell(us[6+(Math.random()*3|0)],t+.2,.05,!1,(i||0)*3,-3)},plop(i){if(!this.ok())return;this.cap("Salpicadura");let t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain(),r=this.dest((i||0)*4,-3);n.frequency.setValueAtTime(520,e),n.frequency.exponentialRampToValueAtTime(190,e+.12),s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.03,e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+.22),n.connect(s),s.connect(r),n.start(e),n.stop(e+.25)},vol:1,ctx:null,master:null,bus:null,nbuf:null,muted:!1,idx:3,init(){if(!this.ctx)try{let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let t=new i;this.ctx=t;let e=t.createGain();e.gain.value=this.muted?0:.6*this.vol,window.UX?UX.out(t,e):e.connect(t.destination),this.master=e;let n=t.createGain();n.gain.value=1,n.connect(e),this.bus=n;let s=t.createBuffer(1,t.sampleRate*2,t.sampleRate),r=s.getChannelData(0);for(let E=0;E<r.length;E++)r[E]=Math.random()*2-1;this.nbuf=s;let o=Math.floor(t.sampleRate*2.8),a=t.createBuffer(2,o,t.sampleRate);for(let E=0;E<2;E++){let R=a.getChannelData(E);for(let I=0;I<o;I++)R[I]=(Math.random()*2-1)*Math.pow(1-I/o,2.6)}let l=t.createConvolver();l.buffer=a;let c=t.createGain();c.gain.value=.38,n.connect(l),l.connect(c),c.connect(e);let u=this.noise(0,.37),h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=650;let d=t.createGain();d.gain.value=.07;let f=t.createOscillator();f.frequency.value=.09;let m=t.createGain();m.gain.value=.04,f.connect(m),m.connect(d.gain),f.start(),u.connect(h),h.connect(d),d.connect(e);let x=this.noise(0,1.5),g=t.createBiquadFilter();g.type="bandpass",g.frequency.value=2200,g.Q.value=.7;let p=t.createGain();p.gain.value=.02,x.connect(g),g.connect(p),p.connect(e),this.bk={},this.bkx={"-1":-4,1:4},[-1,1].forEach(E=>{let R=this.panner(E*4,0,0,2,.6);R.connect(e),this.bk[E]=R,[[520,2,.7,.05],[1250,3,1.3,.03],[2600,4,2.1,.014]].forEach(([I,L,P,C],F)=>{let V=this.noise(Math.random()*1.8,I<800?.71:I<1900?1.07:1.52),z=t.createBiquadFilter();z.type="bandpass",z.frequency.value=I,z.Q.value=L;let $=t.createGain();$.gain.value=C;let B=t.createOscillator(),k=t.createGain();B.frequency.value=P*(E>0?1.13:.91),k.gain.value=C*.7,B.connect(k),k.connect($.gain),B.start(),V.connect(z),z.connect($),$.connect(R)})});let y=()=>{if(this.ctx){if(this.ok()&&Math.random()<.75){let E=Math.random()*(Math.abs(this.bkx[-1])+Math.abs(this.bkx[1]))<Math.abs(this.bkx[1])?-1:1,R=t.currentTime,I=t.createOscillator(),L=t.createGain(),P=sn(450,1100),C=this.panner(this.bkx[E],0,sn(-4,2),2,.6,!0);C.connect(e),I.frequency.setValueAtTime(P,R),I.frequency.exponentialRampToValueAtTime(P*sn(1.4,2),R+.07),L.gain.setValueAtTime(0,R),L.gain.linearRampToValueAtTime(sn(.01,.026),R+.012),L.gain.exponentialRampToValueAtTime(1e-4,R+.1),I.connect(L),L.connect(C),I.start(R),I.stop(R+.12)}setTimeout(y,sn(90,260))}};y();let S=this.noise(Math.random()*1.5,1.21),_=t.createBiquadFilter();_.type="highpass",_.frequency.value=380;let b=t.createBiquadFilter();b.type="lowpass",b.frequency.value=4200;let M=t.createGain();M.gain.value=0;let T=this.panner(0,0,-30,2,.5);S.connect(_),_.connect(b),b.connect(M),M.connect(T),T.connect(e),this.wfG=M,this.wfP=T,this.rgs=[],[[-.75,3200],[.75,3600]].forEach(([E,R])=>{let I=t.createStereoPanner();I.pan.value=E,I.connect(e);let L=this.noise(Math.random()*1.8,2.94),P=t.createBiquadFilter();P.type="highpass",P.frequency.value=R;let C=t.createGain();C.gain.value=0,L.connect(P),P.connect(C),C.connect(I),this.rgs.push([C,.07]);let F=this.noise(Math.random()*1.8,1.29),V=t.createBiquadFilter();V.type="bandpass",V.frequency.value=1500,V.Q.value=.6;let z=t.createGain();z.gain.value=0,F.connect(V),V.connect(z),z.connect(I),this.rgs.push([z,.035])}),this.rainLvl=0;let v=()=>{if(this.ctx){if(this.ok()&&this.rainLvl>.2){let E=t.currentTime,R=t.createOscillator(),I=t.createGain(),L=this.panner(sn(-4,4),sn(0,1),sn(-4,1),1.5,.7,!0);L.connect(e),R.frequency.setValueAtTime(sn(1800,3200),E),R.frequency.exponentialRampToValueAtTime(sn(900,1400),E+.05),I.gain.setValueAtTime(0,E),I.gain.linearRampToValueAtTime(.02*this.rainLvl,E+.004),I.gain.exponentialRampToValueAtTime(1e-4,E+.07),R.connect(I),I.connect(L),R.start(E),R.stop(E+.09)}setTimeout(v,sn(70,260))}};v(),this.music(),this.padInit()}catch{this.ctx=null}},setRain(i){if(!this.rgs)return;i>.5&&this.cap("Lluvia suave"),this.rainLvl=i;let t=this.ctx.currentTime;this.rgs.forEach(([e,n])=>e.gain.setTargetAtTime(i*n,t,.6))},ok(){return this.ctx&&this.ctx.state==="running"},breathTone(i,t){if(!this.ok())return;let e=this.ctx,n=e.currentTime;[[1,.05],[1.5,.022]].forEach(([s,r])=>{let o=e.createOscillator(),a=e.createGain();o.type="sine",o.frequency.setValueAtTime((i?196:262)*s,n),o.frequency.linearRampToValueAtTime((i?262:196)*s,n+t),i?(a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(r,n+t)):(a.gain.setValueAtTime(r,n),a.gain.linearRampToValueAtTime(0,n+t)),o.connect(a),a.connect(this.bus),o.start(n),o.stop(n+t+.1)})},noise(i,t){let e=this.ctx;if(window.UX&&UX.pinkSrc){let s=UX.pinkSrc(e,t);return s.start(0,(i||0)*3),s}let n=e.createBufferSource();return n.buffer=this.nbuf,n.loop=!0,n.start(0,i||0),n},panner(i,t,e,n,s,r){let o=this.ctx.createPanner();return o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=n||2,o.rolloffFactor=s==null?.6:s,o.positionX?(o.positionX.value=i,o.positionY.value=t,o.positionZ.value=e):o.setPosition(i,t,e),o},setPos(i,t,e,n){if(i.positionX){let s=this.ctx.currentTime;i.positionX.setTargetAtTime(t,s,.2),i.positionY.setTargetAtTime(e,s,.2),i.positionZ.setTargetAtTime(n,s,.2)}else i.setPosition(t,e,n)},dest(i,t){if(i==null)return this.bus;let e=this.panner(i,0,t==null?-1.5:t,2,.6);return e.connect(this.bus),e},space(i,t,e){if(!this.ctx)return;let n=Math.max(.9,(t+i)/40),s=Math.max(.9,(t-i)/40);if(this.bkx[-1]=-n,this.bkx[1]=s,this.setPos(this.bk[-1],-n,0,0),this.setPos(this.bk[1],s,0,0),e==null||e<-300)this.wfG.gain.setTargetAtTime(0,this.ctx.currentTime,.4);else{let r=Math.max(0,Math.min(1,1-Math.abs(e)/1500));r>.45&&this.cap("Cascada cercana"),this.wfG.gain.setTargetAtTime(.34*Math.pow(r,1.5),this.ctx.currentTime,.4),this.setPos(this.wfP,-i/40,0,-e/40)}},pluck(i,t,e,n,s){if(!this.ok())return;let r=this.ctx,o=e||r.currentTime,a=this.dest(n,s);[[1,1],[2,.25],[3.01,.1]].forEach(([l,c],u)=>{let h=r.createOscillator(),d=r.createGain();h.type=u?"sine":"triangle",h.frequency.value=i*l,d.gain.setValueAtTime(0,o),d.gain.linearRampToValueAtTime(t*c,o+.01),d.gain.exponentialRampToValueAtTime(1e-4,o+(u?1.1:2)),h.connect(d),d.connect(a),h.start(o),h.stop(o+2.1)})},flute(i,t,e,n,s,r){if(!this.ok())return;let o=this.ctx,a=this.dest(s,r),l=o.createOscillator(),c=o.createOscillator(),u=o.createGain(),h=o.createGain();l.type="sine",c.type="triangle",l.frequency.setValueAtTime(i*.96,t),l.frequency.exponentialRampToValueAtTime(i,t+.18),c.frequency.setValueAtTime(i*2*.96,t),c.frequency.exponentialRampToValueAtTime(i*2,t+.18);let d=o.createOscillator(),f=o.createGain();d.frequency.value=4.8,f.gain.setValueAtTime(0,t),f.gain.linearRampToValueAtTime(i*.012,t+e*.6),d.connect(f),f.connect(l.frequency),d.start(t),d.stop(t+e+.5),h.gain.value=.1,c.connect(h),h.connect(u),l.connect(u),u.gain.setValueAtTime(0,t),u.gain.linearRampToValueAtTime(n,t+.35),u.gain.setValueAtTime(n*.85,t+e*.7),u.gain.linearRampToValueAtTime(0,t+e);let m=o.createBufferSource();m.buffer=this.nbuf,m.loop=!0;let x=o.createBiquadFilter();x.type="bandpass",x.frequency.value=i*2,x.Q.value=4;let g=o.createGain();g.gain.setValueAtTime(0,t),g.gain.linearRampToValueAtTime(n*.5,t+.2),g.gain.linearRampToValueAtTime(0,t+e),m.connect(x),x.connect(g),g.connect(a),m.start(t),m.stop(t+e+.1),u.connect(a),l.start(t),c.start(t),l.stop(t+e+.1),c.stop(t+e+.1)},drum(i,t,e){if(!this.ok()||window.UX&&UX.quiet)return;let n=this.ctx,s=n.createOscillator(),r=n.createGain();s.type="sine",t*=.42,s.frequency.setValueAtTime(115*e,i),s.frequency.exponentialRampToValueAtTime(48*e,i+.28);let o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=700,r.gain.setValueAtTime(1e-4,i),r.gain.linearRampToValueAtTime(t,i+.04),r.gain.exponentialRampToValueAtTime(1e-4,i+.9),s.connect(r),r.connect(o),o.connect(this.bus),s.start(i),s.stop(i+1);let a=n.createBufferSource();a.buffer=this.nbuf;let l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=500;let c=n.createGain();c.gain.setValueAtTime(t*.5,i),c.gain.exponentialRampToValueAtTime(1e-4,i+.1),a.connect(l),l.connect(c),c.connect(this.bus),a.start(i,Math.random()),a.stop(i+.15)},bell(i,t,e,n,s,r){if(!this.ok())return;let o=this.ctx,a=this.dest(s,r);[[1,1,1],[2.01,.3,.6],[2.76,.22,.4],[5.4,.08,.2]].forEach(([l,c,u])=>{let h=o.createOscillator(),d=o.createGain();h.type="sine",h.frequency.value=i*l;let f=(n?7:3)*u;d.gain.setValueAtTime(0,t),d.gain.linearRampToValueAtTime(e*c,t+.005),d.gain.exponentialRampToValueAtTime(1e-4,t+f),h.connect(d),d.connect(a),h.start(t),h.stop(t+f+.1)})},next(i,t,e){this.idx=Ff(this.idx+Math.floor(Math.random()*4)-1,3,us.length-1),this.bell(us[this.idx]*(Math.random()<.5?1:2),this.ctx?this.ctx.currentTime:0,i*.9,!1,t,e)},paddle(i){if(!this.ok())return;let t=this.ctx,e=this.panner((i||0)*1.1,-.3,-.4,1.5,.8);e.connect(this.master);let n=t.createBufferSource();n.buffer=this.nbuf;let s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=900+Math.random()*500,s.Q.value=.9;let r=t.createGain(),o=t.currentTime;r.gain.setValueAtTime(0,o),r.gain.linearRampToValueAtTime(.14,o+.05),r.gain.exponentialRampToValueAtTime(1e-4,o+.4),n.connect(s),s.connect(r),r.connect(e),n.start(o,Math.random()),n.stop(o+.45)},bump(i=.6,t=0){if(Ir(i>.5?22:12),!this.ok())return;this.cap("Golpe suave de la canoa");let e=this.ctx,n=e.currentTime,s=this.panner((t||0)*1.3,-.3,0,1.5,.8);s.connect(this.master);let r=e.createOscillator(),o=e.createGain();r.frequency.setValueAtTime(140,n),r.frequency.exponentialRampToValueAtTime(70,n+.2),o.gain.setValueAtTime(.16*i,n),o.gain.exponentialRampToValueAtTime(1e-4,n+.3),r.connect(o),o.connect(s),r.start(n),r.stop(n+.35)},discover(){if(Ir([14,70,14]),!this.ok())return;this.cap("Nota de linterna");let i=this.ctx.currentTime;[0,3,5,6].forEach((t,e)=>this.pluck(us[t],.12,i+e*.2)),this.bell(us[8],i+.9,.07)},music(){let i=this.ctx;[[73.42,.03],[110,.02],[146.83,.012]].forEach(([l,c],u)=>{let h=i.createOscillator(),d=i.createGain(),f=i.createOscillator(),m=i.createGain();h.type="sine",h.frequency.value=l,d.gain.value=c,f.frequency.value=.05+u*.03,m.gain.value=c*.6,f.connect(m),m.connect(d.gain),h.connect(d),d.connect(this.bus),h.start(),f.start()});let t=0,e=()=>{if(this.ctx){if(this.ok()){let l=i.currentTime+.05,c=t%8;(t>>3)%4===3?c===0&&this.drum(l,.12,.9):c===0?(this.drum(l,.34,1),this.cap("Tambor lejano")):c===3?this.drum(l,.12,1.35):c===5?this.drum(l,.16,1.15):c===6&&Math.random()<.4&&this.drum(l,.09,1.45),t++}setTimeout(e,950)}};setTimeout(e,3e3);let n=3,s=()=>{if(!this.ctx)return;let l=i.currentTime+.2,c=0;if(this.ok()){this.cap("Flauta shakuhachi");let u=2+Math.floor(Math.random()*3),h=sn(-3,3);for(let d=0;d<u;d++){n=Ff(n+Math.floor(Math.random()*5)-2,0,7);let f=sn(1.8,3.4);this.flute(us[n],l,f,.06,h+sn(-.3,.3),-2.5),l+=f*.88,c+=f*.88}}setTimeout(s,(c+sn(6,11))*1e3)};setTimeout(s,5e3);let r=()=>{if(this.ctx){if(this.ok()){this.cap("Campanillas");let l=i.currentTime+.05,c=us[5+Math.floor(Math.random()*5)];this.bell(c,l,.045,!1,sn(-5,5),sn(-5,-1)),Math.random()<.5&&this.bell(us[5+Math.floor(Math.random()*5)],l+sn(.18,.4),.035,!1,sn(-5,5),sn(-5,-1))}setTimeout(r,sn(3500,8e3))}};setTimeout(r,2500);let o=()=>{if(this.ctx){if(this.ok()){this.cap("Koto");let l=i.currentTime+.05,c=Math.floor(Math.random()*6),u=sn(-4,4);for(let h=0;h<3;h++)this.pluck(us[Ff(c+[0,2,1][h],0,9)],.06,l+h*.28,u,-2)}setTimeout(o,sn(14e3,24e3))}};setTimeout(o,9e3);let a=()=>{this.ctx&&(this.ok()&&(this.cap("Campana de templo"),this.bell(146.83,i.currentTime+.05,.08,!0,sn(-6,6),-8)),setTimeout(a,sn(35e3,55e3)))};setTimeout(a,16e3)},padInit(){let i=this.ctx,t=i.createBiquadFilter();t.type="lowpass",t.frequency.value=800,t.Q.value=.4;let e=i.createGain();e.gain.value=0,t.connect(e),e.connect(this.bus);let n=[];for(let r=0;r<4;r++){let o=i.createOscillator(),a=i.createOscillator(),l=i.createGain(),c=i.createGain(),u=i.createOscillator(),h=i.createGain();o.type="sine",a.type="triangle",a.detune.value=r%2?7:-7,l.gain.value=.5,c.gain.value=.18,u.frequency.value=.04+r*.017,h.gain.value=.25,u.connect(h),h.connect(l.gain),o.connect(l),a.connect(c),l.connect(t),c.connect(t),o.start(),a.start(),u.start(),n.push([o,a])}this.pad={f:t,pg:e,vs:n,ch:0,t0:0},this.mood={el:.5,lm:-1,sn:0},this.padChord(!0);let s=()=>{this.ctx&&(this.ok()&&this.padChord(),setTimeout(s,15e3+Math.random()*4e3))};setTimeout(s,9e3)},setMood(i,t,e){this.mood={el:i,lm:t,sn:e},this.pad&&this.ok()&&this.padFilter()},padFilter(){let i=this.mood,t=this.pad.f,e=this.ctx.currentTime,n=Math.max(0,Math.min(1,i.el*1.6)),s=420+n*900,r=.045+(1-n)*.012;i.lm===6&&(s+=500),i.lm===5&&(s-=120,r*=1.2),i.lm===2&&(r*=1.1),t.frequency.setTargetAtTime(s,e,2.5),this.pad.pg.gain.setTargetAtTime(this.muted?0:r*this.vol,e,2)},padChord(i){let t=this.ctx,e=this.mood,n=this.pad,s=t.currentTime,r=146.83,o=[[0,7,14,19],[0,7,12,15],[-4,3,7,12],[0,7,14,15]],a=[[0,7,12,15],[-4,3,7,12],[0,3,7,12],[-4,0,7,15]],l=[[-12,-5,0,7],[-12,-4,3,7],[-12,0,7,12],[-12,-5,3,7]],c=e.el>.35?o:e.el>-.05?a:l;n.ch=(n.ch+1+(Math.random()<.3?1:0))%c.length;let u=c[n.ch].slice();(e.lm===3||e.lm===7)&&(u[3]=u[3]+12),e.lm===8&&(u=[u[0],u[0]+7,u[0]+14,u[0]+19]),e.lm===5&&(u=[-12,-5,0,7]),e.lm===6&&(u=u.map((d,f)=>f>1?d+12:d));let h=e.sn===3?-2:e.sn===2?-1:0;n.vs.forEach(([d,f],m)=>{let x=r*Math.pow(2,(u[m]+h)/12);d.frequency.setTargetAtTime(x,s,i?.01:3.2),f.frequency.setTargetAtTime(x*1.002,s,i?.01:3.2)}),this.padFilter()},boom(i){if(!this.ok()||window.UX&&UX.quiet)return;this.cap("Fuegos artificiales");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*5,-9),s=t.createOscillator(),r=t.createGain();s.frequency.setValueAtTime(95,e),s.frequency.exponentialRampToValueAtTime(38,e+.5),r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.07,e+.03),r.gain.exponentialRampToValueAtTime(1e-4,e+.7),s.connect(r),r.connect(n),s.start(e),s.stop(e+.8);let o=t.createBufferSource();o.buffer=this.nbuf;let a=t.createBiquadFilter();a.type="highpass",a.frequency.value=2500;let l=t.createGain();l.gain.setValueAtTime(0,e+.5),l.gain.linearRampToValueAtTime(.035,e+.55),l.gain.exponentialRampToValueAtTime(1e-4,e+1.6),o.connect(a),a.connect(l),l.connect(n),o.start(e+.5,Math.random()),o.stop(e+1.7),Ir(8)},roar(){if(!this.ok()||window.UX&&UX.quiet)return;Ir([30,60,30,90,40]),this.cap("Rugido del drag\xF3n");let i=this.ctx,t=i.currentTime,e=this.dest(0,-12),n=i.createOscillator(),s=i.createOscillator(),r=i.createGain(),o=i.createBiquadFilter();n.type="sawtooth",s.type="square",n.frequency.setValueAtTime(70,t),n.frequency.linearRampToValueAtTime(110,t+.5),n.frequency.exponentialRampToValueAtTime(48,t+2.2),s.frequency.setValueAtTime(35,t),s.frequency.exponentialRampToValueAtTime(24,t+2.2),o.type="lowpass",o.frequency.setValueAtTime(260,t),o.frequency.linearRampToValueAtTime(900,t+.5),o.frequency.exponentialRampToValueAtTime(140,t+2.2),o.Q.value=4,r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.1,t+.3),r.gain.setValueAtTime(.1,t+.9),r.gain.exponentialRampToValueAtTime(1e-4,t+2.4),n.connect(o),s.connect(o),o.connect(r),r.connect(e),n.start(t),s.start(t),n.stop(t+2.5),s.stop(t+2.5);let a=i.createBufferSource();a.buffer=this.nbuf;let l=i.createBiquadFilter();l.type="bandpass",l.frequency.value=420,l.Q.value=1.2;let c=i.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(.05,t+.3),c.gain.exponentialRampToValueAtTime(1e-4,t+1.8),a.connect(l),l.connect(c),c.connect(e),a.start(t,Math.random()),a.stop(t+2)},onCap:null,cap(i){if(!this.onCap)return;let t=performance.now(),e=this._cl||(this._cl={}),n={"Golpe suave de la canoa":1500,"Fuegos artificiales":1500,Salpicadura:9e3,"Lluvia suave":4e4,"Cascada cercana":3e4}[i]||9e3;e[i]&&t-e[i]<n||(e[i]=t,this.onCap(i))},mute(i){this.muted=i,this.master&&this.master.gain.setTargetAtTime(i?0:.6*this.vol,this.ctx.currentTime,.05),this.pad&&this.padFilter()},quack(i){if(!this.ok())return;this.cap("Cuac de pato");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*4,-3);[[0,420,300],[.14,360,250]].forEach(([s,r,o])=>{let a=t.createOscillator(),l=t.createBiquadFilter(),c=t.createGain();a.type="sawtooth",a.frequency.setValueAtTime(r,e+s),a.frequency.exponentialRampToValueAtTime(o,e+s+.1),l.type="bandpass",l.frequency.value=1e3,l.Q.value=2.5,c.gain.setValueAtTime(0,e+s),c.gain.linearRampToValueAtTime(.03,e+s+.015),c.gain.exponentialRampToValueAtTime(1e-4,e+s+.12),a.connect(l),l.connect(c),c.connect(n),a.start(e+s),a.stop(e+s+.14)})},flap(i){if(Ir([6,40,6,40,6]),!this.ok())return;this.cap("Aleteo de garza");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*4,-3),s=t.createBufferSource();s.buffer=this.nbuf;let r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=700,r.Q.value=.8;let o=t.createGain();o.gain.setValueAtTime(0,e);for(let a=0;a<5;a++)o.gain.linearRampToValueAtTime(.05,e+a*.16+.04),o.gain.linearRampToValueAtTime(.006,e+a*.16+.13);o.gain.linearRampToValueAtTime(0,e+.95),s.connect(r),r.connect(o),o.connect(n),s.start(e,Math.random()),s.stop(e+1)},setVol(i){this.vol=i,this.master&&!this.muted&&this.master.gain.setTargetAtTime(.6*i,this.ctx.currentTime,.1),this.pad&&this.padFilter()}};function WS(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var eg={};function XS(i){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),s=WS(i.length*97+i.charCodeAt(0)),r=(a,l)=>`rgba(${a},${a},${a},${l})`;if(n.fillStyle="#e9e4de",n.fillRect(0,0,256,256),i==="wood"||i==="woodV"){let a=i==="woodV";for(let l=0;l<150;l++){let c=s()*256,u=40+s()*160,h=s()*256,d=.6+s()*1.8;n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.05+s()*.12)+")":"rgba(255,248,238,"+(.05+s()*.1)+")",n.lineWidth=d,n.beginPath(),a?(n.moveTo(c,h),n.bezierCurveTo(c+4,h+u*.3,c-4,h+u*.7,c+2,h+u)):(n.moveTo(h,c),n.bezierCurveTo(h+u*.3,c+4,h+u*.7,c-4,h+u,c+2)),n.stroke()}for(let l=0;l<3;l++){let c=s()*256,u=s()*256;n.strokeStyle="rgba(80,55,40,.22)",n.lineWidth=1.2;for(let h=1;h<4;h++)n.beginPath(),n.ellipse(c,u,h*3.5,h*2.2,a?1.57:0,0,7),n.stroke()}n.strokeStyle="rgba(70,50,40,.18)",n.lineWidth=2,n.beginPath(),a?(n.moveTo(0,0),n.lineTo(0,256)):(n.moveTo(0,0),n.lineTo(256,0)),n.stroke()}else if(i==="stone"){n.fillStyle="#8b86a0",n.fillRect(0,0,256,256);let a=4;for(let l=0;l<a;l++){let c=-(s()*40),u=256/a;for(;c<256;){let h=38+s()*50,d=190+s()*55|0;n.fillStyle=`rgb(${d},${d-3},${d+8})`,n.beginPath(),n.roundRect?n.roundRect(c+3,l*u+3,h-6,u-6,10):n.rect(c+3,l*u+3,h-6,u-6),n.fill(),n.fillStyle="rgba(255,255,255,.18)",n.fillRect(c+9,l*u+7,h-24,3);for(let f=0;f<14;f++)n.fillStyle=r(120,.08),n.fillRect(c+6+s()*(h-12),l*u+6+s()*(u-12),2,2);c+=h}}}else if(i==="shingle"){n.fillStyle="#b8aea6",n.fillRect(0,0,256,256);let a=6,l=256/a;for(let c=0;c<a;c++){let u=c%2*22;for(let h=-22;h<278;h+=44){let d=196+s()*50|0;n.fillStyle=`rgb(${d},${d-6},${d-8})`,n.beginPath(),n.moveTo(h+u+2,c*l),n.lineTo(h+u+42,c*l),n.lineTo(h+u+42,c*l+l*.55),n.quadraticCurveTo(h+u+22,c*l+l*1.15,h+u+2,c*l+l*.55),n.closePath(),n.fill(),n.strokeStyle="rgba(60,40,40,.28)",n.lineWidth=1.5,n.stroke(),n.fillStyle="rgba(255,255,255,.2)",n.fillRect(h+u+8,c*l+3,26,3)}}}else if(i==="rock"){n.fillStyle="#d4d0dc",n.fillRect(0,0,256,256);for(let a=0;a<60;a++){let l=s()*256,c=s()*256,u=10+s()*40,h=170+s()*70|0;n.fillStyle=`rgba(${h},${h-4},${h+10},.35)`,n.beginPath(),n.ellipse(l,c,u,u*.6,s()*3,0,7),n.fill()}for(let a=0;a<30;a++){n.strokeStyle="rgba(50,45,80,"+(.12+s()*.2)+")",n.lineWidth=1+s()*2,n.beginPath();let l=s()*256,c=s()*256;n.moveTo(l,c);for(let u=0;u<4;u++)l+=s()*40-20,c+=s()*30,n.lineTo(l,c);n.stroke()}}else if(i==="grass"){n.fillStyle="#e8efe0",n.fillRect(0,0,256,256);for(let a=0;a<900;a++){let l=s()*256,c=s()*256,u=s()>.5?"rgba(120,170,110,":"rgba(255,255,220,";n.strokeStyle=u+(.08+s()*.2)+")",n.lineWidth=1,n.beginPath(),n.moveTo(l,c),n.lineTo(l+s()*4-2,c-3-s()*7),n.stroke()}for(let a=0;a<20;a++)n.fillStyle="rgba(255,255,255,.3)",n.beginPath(),n.arc(s()*256,s()*256,1.5+s()*1.5,0,7),n.fill()}else if(i==="bark"){n.fillStyle="#d9cfc6",n.fillRect(0,0,256,256);for(let a=0;a<70;a++){let l=s()*256;n.strokeStyle="rgba(60,45,40,"+(.12+s()*.25)+")",n.lineWidth=1+s()*3,n.beginPath(),n.moveTo(l,0),n.bezierCurveTo(l+8,256*.3,l-8,256*.6,l+3,256),n.stroke()}}else if(i==="leaf"){n.fillStyle="#ecebe4",n.fillRect(0,0,256,256);for(let a=0;a<640;a++){let l=s()*256,c=s()*256,u=3.5+s()*8,h=s()>.45?215+s()*40|0:120+s()*60|0;for(let d of[-256,0,256])for(let f of[-256,0,256])l+d<-30||l+d>286||c+f<-30||c+f>286||(n.fillStyle=`rgba(${h},${h},${h-6},${.35+s()*.4})`,n.beginPath(),n.ellipse(l+d,c+f,u,u*.62,s()*3.14,0,7),n.fill())}for(let a=0;a<260;a++){let l=s()*256,c=s()*256;n.fillStyle="rgba(70,80,60,.3)",n.beginPath(),n.ellipse(l,c+5,5,2.4,0,0,7),n.fill(),n.fillStyle="rgba(255,255,235,.5)",n.beginPath(),n.ellipse(l-1,c-2,3.6,1.5,-.5,0,7),n.fill()}}else if(i==="cloth"){n.fillStyle="#e6e6e8",n.fillRect(0,0,256,256);for(let a=0;a<256;a+=4)n.fillStyle="rgba(90,95,110,"+(.07+s()*.06)+")",n.fillRect(a,0,1.6,256),n.fillStyle="rgba(255,255,255,"+(.1+s()*.08)+")",n.fillRect(0,a,256,1.6);for(let a=0;a<9;a++){let l=s()*256,c=s()*256;n.strokeStyle="rgba(60,65,85,.2)",n.lineWidth=2.5,n.beginPath(),n.moveTo(l,c),n.bezierCurveTo(l+20,c+30,l-18,c+60,l+6,c+95),n.stroke(),n.strokeStyle="rgba(255,255,255,.22)",n.lineWidth=2,n.beginPath(),n.moveTo(l+4,c),n.bezierCurveTo(l+24,c+30,l-14,c+60,l+10,c+95),n.stroke()}for(let a=0;a<5;a++)n.fillStyle="rgba(70,75,95,.25)",n.fillRect(s()*256,s()*256,10+s()*10,1.5)}else if(i==="straw"){n.fillStyle="#e8e0cc",n.fillRect(0,0,256,256);for(let a=-256;a<256*2;a+=7)n.strokeStyle="rgba(120,90,40,"+(.18+s()*.2)+")",n.lineWidth=2,n.beginPath(),n.moveTo(a,0),n.lineTo(a+256,256),n.stroke(),n.strokeStyle="rgba(255,250,225,"+(.25+s()*.2)+")",n.beginPath(),n.moveTo(a+3,0),n.lineTo(a+3-256,256),n.stroke();for(let a=0;a<256;a+=7)n.strokeStyle="rgba(110,80,35,.22)",n.lineWidth=1.5,n.beginPath(),n.moveTo(a,0),n.lineTo(a,256),n.stroke()}else if(i==="plank"){n.fillStyle="#e9e0d6",n.fillRect(0,0,256,256);let a=5,l=256/a;for(let c=0;c<a;c++){let u=c*l;n.fillStyle="rgba("+(200+s()*40|0)+","+(190+s()*30|0)+",175,.45)",n.fillRect(0,u,256,l);for(let h=0;h<22;h++){let d=u+3+s()*(l-6);n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.1+s()*.14)+")":"rgba(255,248,238,.18)",n.lineWidth=.8+s()*1.5,n.beginPath(),n.moveTo(s()*60,d),n.bezierCurveTo(80,d+3,160,d-3,256,d+1),n.stroke()}n.fillStyle="rgba(60,42,32,.55)",n.fillRect(0,u,256,2.5);for(let h of[18,238])n.fillStyle="rgba(50,40,36,.55)",n.beginPath(),n.arc(h,u+l/2,2.2,0,7),n.fill()}}else if(i==="needle"){n.fillStyle="#d7dbd2",n.fillRect(0,0,256,256);for(let a=0;a<8;a++){let l=a*256/8;for(let c=-10;c<266;c+=14){let u=c+a%2*7+s()*3,h=18+s()*10,d=s()>.5?235:130+s()*50|0;n.strokeStyle=`rgba(${d},${d},${d-10},${.45+s()*.4})`,n.lineWidth=2+s()*2,n.lineCap="round",n.beginPath(),n.moveTo(u,l),n.lineTo(u+s()*8-4,l+h),n.stroke()}n.strokeStyle="rgba(50,70,50,.3)",n.lineWidth=3,n.beginPath(),n.moveTo(0,l+256/8-2),n.lineTo(256,l+256/8-2),n.stroke()}}let o=new xi(e);return o.wrapS=o.wrapT=$s,o.colorSpace=An,o.anisotropy=8,o}var Ie=i=>eg[i]||(eg[i]=XS(i)),we=(()=>{let i=new Uint8Array([104,138,172,206,236,255]),t=new Rs(i,6,1,Fo);return t.minFilter=t.magFilter=bn,t.generateMipmaps=!1,t.needsUpdate=!0,t})();function ng(){let i=document.createElement("div");i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:4;background:radial-gradient(ellipse at 50% 45%,rgba(0,0,0,0) 55%,rgba(24,20,56,.5) 100%)",document.body.appendChild(i)}function ig(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,256,256);for(let n=0;n<5200;n++){let s=200+Math.random()*55|0;t.fillStyle=`rgba(${s-30},${s-34},${s-44},${Math.random()*.35})`,t.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}for(let n=0;n<60;n++){t.strokeStyle="rgba(120,110,100,.06)",t.lineWidth=1,t.beginPath();let s=Math.random()*256,r=Math.random()*256;t.moveTo(s,r),t.lineTo(s+Math.random()*60-30,r+Math.random()*60-30),t.stroke()}let e=document.createElement("div");e.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3;mix-blend-mode:multiply;opacity:.38;background:url("+i.toDataURL()+");background-size:256px",document.body.appendChild(e)}function ar(){let i=null;try{i=localStorage.getItem("rio3d-season")}catch{}if(i!==null&&i!==""&&i!=="auto"&&+i>=0&&+i<4)return+i;let t=new Date().getMonth();return t===11||t<=1?3:t<=4?0:t<=7?1:2}var eh=[{name:"Primavera",pine:["#79b595","#8cc4a0","#6fa98f","#9bcfa9"],blos:["#f7c6d6","#f4b7cb","#fbd6e1","#f2c2e0"],bblos:["#f4b7cb","#f7c6d6","#eea5bf","#fbd6e1"],brd:["#8fbf86","#7aae7e","#d9694a","#e39a4a","#e8c35a","#a8c97a","#c9573f"],gnd:"#b6dca3",gk:0,pet:{c:16762578,size:.42,fall:1,base:.12,gain:.88}},{name:"Verano",pine:["#5fa383","#6fb593","#559a7e","#7cc09d"],blos:["#9aa8e6","#8c9ae0","#b3a2e8","#7f93d8"],bblos:["#9aa8e6","#b3a2e8","#8c9ae0","#a7b6ee"],brd:["#6fae74","#5f9f6a","#7cbc7a","#4f9468","#88c27f","#6aa878","#58a070"],gnd:"#9fd08a",gk:.18,pet:{c:16777215,size:.3,fall:1,base:0,gain:0}},{name:"Oto\xF1o",pine:["#6fa386","#80b496","#659a80","#8cc09d"],blos:["#d94a32","#e8702e","#f2a33a","#c43d2c"],bblos:["#d9573a","#e8803a","#f0b43a","#c9462f"],brd:["#d9533a","#e8802f","#f0b43a","#c9462f","#b8532f","#e39a4a","#cf6a3a"],gnd:"#d3a45f",gk:.32,pet:{c:15237178,size:.55,fall:1.35,base:.3,gain:.7}},{name:"Invierno",pine:["#a9c4b8","#b9d3c6","#9dbaae","#c4dccf"],blos:["#f6e3ea","#f2d3de","#fbeff3","#efc9d8"],bblos:["#f6e3ea","#fbeff3","#efc9d8","#f2d3de"],brd:["#cfd8d6","#b9c4c2","#a8b4b3","#dfe6e4","#9fa9a8","#c4cdcb","#b0bbb9"],gnd:"#eef3f8",gk:.62,pet:{c:16777215,size:.28,fall:1.1,base:.55,gain:.45}}],qi={c:15773373,c2:15044520,blos:["#f7c6d6","#f4b7cb","#fbd6e1","#f2c2e0"],bblos:["#f4b7cb","#f7c6d6","#eea5bf","#fbd6e1"],pet:16762578};var sg="rio-day",Go=[["Hoy no tienes que llegar a ning\xFAn sitio.","You do not have to get anywhere today.","\u4ECA\u65E5\u306F\u3069\u3053\u304B\u3078\u7740\u304B\u306A\u304F\u3066\u5927\u4E08\u592B\u3002"],["El agua tambi\xE9n descansa mientras avanza.","Water also rests while it moves.","\u6C34\u306F\u6D41\u308C\u306A\u304C\u3089\u3082\u4F11\u3093\u3067\u3044\u307E\u3059\u3002"],["Respira hondo. Lo dem\xE1s puede esperar a ma\xF1ana.","Breathe deep. The rest can wait until tomorrow.","\u6DF1\u547C\u5438\u3092\u3002\u3042\u3068\u306F\u660E\u65E5\u3067\u3044\u3044\u3002"],["Algo peque\xF1o hecho con calma ya es suficiente.","One small thing done calmly is enough.","\u5C0F\u3055\u306A\u3053\u3068\u3092\u3086\u3063\u304F\u308A\u3002\u305D\u308C\u3067\u5341\u5206\u3067\u3059\u3002"],["Las nubes no se apuran y aun as\xED llegan.","Clouds never hurry and still they arrive.","\u96F2\u306F\u6025\u304C\u306A\u3044\u306E\u306B\u3001\u3061\u3083\u3093\u3068\u7740\u304D\u307E\u3059\u3002"],["Mara dejar\xEDa una nota: \xABmira hacia arriba un momento\xBB.","Mara would leave a note: \u201Clook up for a moment\u201D.","\u30DE\u30E9\u306A\u3089\u30E1\u30E2\u3092\u6B8B\u3059\u3067\u3057\u3087\u3046\u3002\u300C\u5C11\u3057\u7A7A\u3092\u898B\u4E0A\u3052\u3066\u300D\u3002"],["No hace falta entenderlo todo esta noche.","You do not need to understand everything tonight.","\u4ECA\u591C\u3001\u3059\u3079\u3066\u3092\u5206\u304B\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"],["Una taza caliente y un r\xEDo quieto: buen plan.","A warm cup and a quiet river: a good plan.","\u6E29\u304B\u3044\u304A\u8336\u3068\u9759\u304B\u306A\u5DDD\u3002\u3044\u3044\u8A08\u753B\u3067\u3059\u3002"],["Lo que pesa hoy flota un poco m\xE1s ligero en el agua.","What weighs on you today floats lighter on the water.","\u4ECA\u65E5\u306E\u91CD\u3055\u3082\u3001\u6C34\u306E\u4E0A\u3067\u306F\u5C11\u3057\u8EFD\u304F\u306A\u308A\u307E\u3059\u3002"],["Est\xE1 bien ir despacio. As\xED se ven m\xE1s cosas.","It is fine to go slowly. You see more that way.","\u3086\u3063\u304F\u308A\u3067\u5927\u4E08\u592B\u3002\u305D\u306E\u307B\u3046\u304C\u591A\u304F\u304C\u898B\u3048\u307E\u3059\u3002"],["Cada farolillo es un \xABgracias\xBB que nadie pidi\xF3.","Every lantern is a \u201Cthank you\u201D nobody asked for.","\u3061\u3087\u3046\u3061\u3093\u306F\u3072\u3068\u3064\u305A\u3064\u3001\u983C\u307E\u308C\u306A\u3044\u300C\u3042\u308A\u304C\u3068\u3046\u300D\u3002"],["El r\xEDo no compara tu ritmo con el de nadie.","The river does not compare your pace with anyone\u2019s.","\u5DDD\u306F\u3042\u306A\u305F\u306E\u901F\u3055\u3092\u8AB0\u3068\u3082\u6BD4\u3079\u307E\u305B\u3093\u3002"],["Escucha un rato: siempre hay algo suave sonando.","Listen a while: something gentle is always playing.","\u3057\u3070\u3089\u304F\u8033\u3092\u3059\u307E\u305B\u3066\u3002\u3044\u3064\u3082\u3084\u3055\u3057\u3044\u97F3\u304C\u3057\u3066\u3044\u307E\u3059\u3002"],["Hoy cuenta aunque solo hayas flotado un poco.","Today counts even if you only floated a little.","\u5C11\u3057\u6D6E\u304B\u3093\u3060\u3060\u3051\u3067\u3082\u3001\u4ECA\u65E5\u306F\u3061\u3083\u3093\u3068\u4E00\u65E5\u3067\u3059\u3002"]],nh=()=>{let i=new Date;return i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()},rg=()=>Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5),ih=()=>{try{return JSON.parse(localStorage.getItem(sg)||"{}")||{}}catch{return{}}},og=()=>ih().k!==nh(),ag=()=>ih().n||0,lg=()=>ih().log||[];var Bf=i=>{let t=Math.sin((rg()*131+i)*12.9898)*43758.5453;return t-Math.floor(t)};function cg(){let i=ih();if(i.k===nh())return null;let t=rg()%Go.length;i.k=nh(),i.n=(i.n||0)+1,i.log=(i.log||[]).concat([[nh(),t]]).slice(-12);try{localStorage.setItem(sg,JSON.stringify(i))}catch{}try{window.UX&&UX.say&&UX.say(UX.tr(Go[t][0]))}catch{}try{window.UX&&UX.hap&&UX.hap([12,40,12])}catch{}return Go[t]}function ug(i){i.add(Go.map(t=>[t[0],t[1],t[2]])),i.add([["Farolillos del d\xEDa","Lanterns of the day","\u4ECA\u65E5\u306E\u3061\u3087\u3046\u3061\u3093"],["Hoy ya recogiste el farolillo. Ma\xF1ana habr\xE1 otro.","You already picked up today\u2019s lantern. There will be another tomorrow.","\u4ECA\u65E5\u306E\u3061\u3087\u3046\u3061\u3093\u306F\u3082\u3046\u62FE\u3044\u307E\u3057\u305F\u3002\u660E\u65E5\u307E\u305F\u6D41\u308C\u3066\u304D\u307E\u3059\u3002"],["A\xFAn no recoges ninguno","You have not picked up any yet","\u307E\u3060\u62FE\u3063\u3066\u3044\u307E\u305B\u3093"]])}var hg="rio-album",ll=[["koi","Carpa koi","Koi carp","\u9326\u9BC9","Se acercan despacio y nadan junto a la canoa, como si te conocieran.","They drift close and swim beside the canoe as if they knew you.","\u3086\u3063\u304F\u308A\u8FD1\u3065\u3044\u3066\u3001\u30AB\u30CC\u30FC\u306E\u305D\u3070\u3092\u6CF3\u304E\u307E\u3059\u3002\u307E\u308B\u3067\u77E5\u308A\u5408\u3044\u306E\u3088\u3046\u306B\u3002"],["pato","Pato del r\xEDo","River duck","\u5DDD\u306E\u30AB\u30E2","Decide acompa\xF1arte un rato y luego sigue su camino.","Chooses to keep you company for a while, then goes its own way.","\u3057\u3070\u3089\u304F\u5BC4\u308A\u305D\u3063\u3066\u304F\u308C\u3066\u3001\u3084\u304C\u3066\u81EA\u5206\u306E\u9053\u3078\u3002"],["garza","Garza blanca","White heron","\u30B7\u30E9\u30B5\u30AE","Pesca sin prisa. Alza el vuelo solo cuando pasas muy cerca.","Fishes without hurry. Takes flight only when you pass very close.","\u6025\u304C\u305A\u9B5A\u3092\u5F85\u3061\u307E\u3059\u3002\u3068\u3066\u3082\u8FD1\u304F\u3092\u901A\u308B\u3068\u98DB\u3073\u7ACB\u3061\u307E\u3059\u3002"],["libelula","Lib\xE9lula","Dragonfly","\u30C8\u30F3\u30DC","Se posa un instante en la proa y se va, ligera como un pensamiento.","Lands on the bow for an instant and leaves, light as a thought.","\u8239\u9996\u306B\u305D\u3063\u3068\u6B62\u307E\u3063\u3066\u3001\u8003\u3048\u3054\u3068\u306E\u3088\u3046\u306B\u8EFD\u304F\u53BB\u308A\u307E\u3059\u3002"],["loto","Flor de loto","Lotus flower","\u84EE\u306E\u82B1","Abre al anochecer en los estanques tranquilos.","Opens at dusk in the quiet ponds.","\u9759\u304B\u306A\u6C60\u3067\u5915\u66AE\u308C\u306B\u958B\u304D\u307E\u3059\u3002"],["festival","Festival de linternas","Lantern festival","\u3061\u3087\u3046\u3061\u3093\u796D\u308A","La aldea enciende farolillos para quien llega de noche.","The village lights lanterns for whoever arrives at night.","\u591C\u306B\u7740\u3044\u305F\u4EBA\u306E\u305F\u3081\u306B\u3001\u6751\u304C\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3057\u307E\u3059\u3002"]],Vo=null,dg=()=>{if(Vo)return Vo;try{Vo=JSON.parse(localStorage.getItem(hg)||"{}")||{}}catch{Vo={}}return Vo};function Of(i){try{ug(i)}catch{}i.add(ll.map(t=>[t[1],t[2],t[3]])),i.add(ll.map(t=>[t[4],t[5],t[6]])),i.add([["Cuaderno del r\xEDo","River notebook","\u5DDD\u306E\u30CE\u30FC\u30C8"],["A\xFAn no lo has visto","You have not seen this yet","\u307E\u3060\u898B\u3066\u3044\u307E\u305B\u3093"],["Nueva anotaci\xF3n en el cuaderno del r\xEDo","New entry in the river notebook","\u5DDD\u306E\u30CE\u30FC\u30C8\u306B\u65B0\u3057\u3044\u8A18\u9332"],["Se llena solo, a su ritmo. No hay prisa.","It fills by itself, at its own pace. No rush.","\u3086\u3063\u304F\u308A\u3001\u3072\u3068\u308A\u3067\u306B\u57CB\u307E\u3063\u3066\u3044\u304D\u307E\u3059\u3002"],["Cerrar","Close","\u9589\u3058\u308B"],["Anotado: ","Noted: ","\u8A18\u9332: "],["anotaciones","entries","\u4EF6"]])}function Pr(i){let t=dg();if(t[i])return;t[i]=Date.now(),Vo=t;try{localStorage.setItem(hg,JSON.stringify(t))}catch{}let e=ll.find(n=>n[0]===i);try{window.UX&&UX.say&&UX.say(UX.tr("Anotado: ")+UX.tr(e[1]))}catch{}}function zf(i){i=i||(window.UX?UX.tr:(a=>a));let t=dg(),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;z-index:80;display:grid;place-items:center;background:rgba(14,16,36,.88);padding:12px";let n=document.createElement("div");n.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(92vw,460px);max-height:82vh;overflow:auto;font:15px/1.45 system-ui";let s=document.createElement("h2");s.style.cssText="margin:0 0 4px;font:600 1.15rem system-ui",s.textContent=i("Cuaderno del r\xEDo");let r=document.createElement("div");r.style.cssText="opacity:.65;font-size:.8rem;margin-bottom:12px",r.textContent=i("Se llena solo, a su ritmo. No hay prisa."),n.append(s,r),ll.forEach(a=>{let l=!!t[a[0]],c=document.createElement("div");c.style.cssText="margin:0 0 12px;padding:10px 12px;border-radius:12px;background:"+(l?"rgba(255,233,184,.10)":"rgba(255,255,255,.04)")+";"+(l?"":"opacity:.55");let u=document.createElement("div");u.style.cssText="font-weight:600",u.textContent=(l?"\u2726 ":"\xB7 ")+(l?i(a[1]):"?");let h=document.createElement("div");h.style.cssText="font-size:.88em;opacity:.85",h.textContent=i(l?a[4]:"A\xFAn no lo has visto"),c.append(u,h),n.appendChild(c)});{let a=document.createElement("div");a.style.cssText="font-weight:600;margin:14px 0 6px",a.textContent=i("Farolillos del d\xEDa")+" \xB7 "+ag(),n.appendChild(a);let l=lg().slice().reverse();if(!l.length){let c=document.createElement("div");c.style.cssText="opacity:.55;font-size:.88em;margin-bottom:12px",c.textContent=i("A\xFAn no recoges ninguno"),n.appendChild(c)}l.forEach(c=>{let u=document.createElement("div");u.style.cssText="margin:0 0 8px;padding:8px 12px;border-radius:12px;background:rgba(255,233,184,.08);font-size:.88em",u.textContent="\u{1F3EE} "+i(Go[c[1]][0]),n.appendChild(u)})}let o=document.createElement("button");o.type="button",o.textContent=i("Cerrar"),o.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",o.onclick=()=>e.remove(),n.appendChild(o),e.appendChild(n),e.onclick=a=>{a.target===e&&e.remove()},document.body.appendChild(e)}var fg="ux-pad",pg=()=>{try{return localStorage.getItem(fg)==="1"}catch{return!1}},Hf=(i,t,e)=>{try{return UX.tr(i)}catch{return i}},mg=pg;function gg(i){i.add([["Girar a la izquierda","Turn left","\u5DE6\u3078\u66F2\u304C\u308B"],["Girar a la derecha","Turn right","\u53F3\u3078\u66F2\u304C\u308B"],["Remar","Paddle","\u3053\u3050"],["Direcci\xF3n","Steering","\u64CD\u4F5C"],["Botones de direcci\xF3n: s\xED","Steering buttons: on","\u64CD\u4F5C\u30DC\u30BF\u30F3: \u30AA\u30F3"],["Botones de direcci\xF3n: no","Steering buttons: off","\u64CD\u4F5C\u30DC\u30BF\u30F3: \u30AA\u30D5"],["Botones de direcci\xF3n","Steering buttons","\u64CD\u4F5C\u30DC\u30BF\u30F3"],["Alternativa a arrastrar","An alternative to dragging","\u30C9\u30E9\u30C3\u30B0\u306E\u4EE3\u308F\u308A"]])}var Mi=null,Yi=null,qS=[];function YS(){let i=18;try{if(Yi.anchor){let t=Yi.anchor().getBoundingClientRect();i=Math.max(10,innerHeight-t.bottom+12)}else i=18+(Yi.lift||0)}catch{}Mi.style.bottom="calc("+Math.round(i)+"px + env(safe-area-inset-bottom))"}function kf(){Mi&&(Mi.style.display=pg()&&Yi.started()?"flex":"none",YS())}function xg(i){try{localStorage.setItem(fg,i?"1":"0")}catch{}kf(),qS.forEach(t=>t())}function yg(i){if(Yi=i,Mi)return;Mi=document.createElement("div"),Mi.id="padBox",Mi.setAttribute("role","group"),Mi.setAttribute("aria-label",Hf("Direcci\xF3n")),Mi.style.cssText="position:fixed;right:max(16px,env(safe-area-inset-right));bottom:18px;display:none;gap:14px;z-index:30;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none";let t=new Set,e=(r,o,a,l)=>{let c=document.createElement("button");c.type="button",c.textContent=o,c.setAttribute("aria-label",Hf(a)),c.title=Hf(a),c.style.cssText="width:64px;height:64px;border-radius:50%;border:1px solid #5a609a;background:rgba(43,45,82,.72);color:#fbf1e0;font:600 26px system-ui,sans-serif;padding:0;touch-action:none;-webkit-tap-highlight-color:transparent;cursor:pointer";let u=h=>{[r].concat(l||[]).forEach(d=>Yi.set(d,h)),c.style.background=h?"rgba(255,199,122,.45)":"rgba(43,45,82,.72)",h?t.add(c):t.delete(c)};return c.addEventListener("pointerdown",h=>{h.preventDefault();try{c.setPointerCapture(h.pointerId)}catch{}Yi.onPress&&Yi.onPress(),u(!0)}),["pointerup","pointercancel","lostpointercapture"].forEach(h=>c.addEventListener(h,()=>u(!1))),c.addEventListener("contextmenu",h=>h.preventDefault()),c.addEventListener("keydown",h=>{(h.code==="Space"||h.code==="Enter")&&(h.preventDefault(),u(!0))}),c.addEventListener("keyup",h=>{(h.code==="Space"||h.code==="Enter")&&u(!1)}),c.addEventListener("blur",()=>u(!1)),c._rel=()=>u(!1),c},n=e("l","\u25C0","Girar a la izquierda",Yi.steerPaddles?["p"]:null),s=e("r","\u25B6","Girar a la derecha",Yi.steerPaddles?["p"]:null);if(Yi.paddle){let r=e("p","\u224B","Remar");Mi.append(n,r,s)}else Mi.append(n,s);addEventListener("blur",()=>Mi.querySelectorAll("button").forEach(r=>r._rel&&r._rel())),document.body.appendChild(Mi),setInterval(kf,400),kf()}var ZS=["es","en","ja"],ui="es";try{let i=localStorage.getItem("rio3d-lang");ui=ZS.includes(i)?i:"es"}catch{}var Gf=()=>ui,vg=i=>{try{localStorage.setItem("rio3d-lang",i)}catch{}},JS=[["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["Linternas","Lanterns","\u30E9\u30F3\u30BF\u30F3"],["m \xB7 Lugares","m \xB7 Places","m \xB7 \u5834\u6240"],["Vista 1\xAA","View 1st","\u4E00\u4EBA\u79F0"],["Vista 3\xAA","View 3rd","\u4E09\u4EBA\u79F0"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["Foto","Photo","\u5199\u771F"],["Diario","Journal","\u65E5\u8A18"],["Ajustes","Settings","\u8A2D\u5B9A"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Amanecer","Dawn","\u591C\u660E\u3051"],["D\xEDa","Day","\u663C"],["Atardecer","Dusk","\u5915\u66AE\u308C"],["Noche","Night","\u591C"],["Madrugada","Predawn","\u660E\u3051\u65B9"],["La corriente te lleva \xB7 mant\xE9n presionado y desliza a los lados para dirigir","The current carries you \xB7 press and slide sideways to steer","\u6D41\u308C\u306B\u8EAB\u3092\u307E\u304B\u305B\u3066 \xB7 \u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u64CD\u4F5C"],["Navega por un r\xEDo de niebla, en primera o tercera persona. Sin prisa y sin puntaje: la corriente te lleva y t\xFA solo diriges la canoa.","Drift down a misty river in first or third person. No rush, no score: the current carries you and you just steer the canoe.","\u9727\u306E\u5DDD\u3092\u4E00\u4EBA\u79F0\u307E\u305F\u306F\u4E09\u4EBA\u79F0\u3067\u9032\u307F\u307E\u3059\u3002\u6025\u3050\u5FC5\u8981\u3082\u5F97\u70B9\u3082\u3042\u308A\u307E\u305B\u3093\u3002\u6D41\u308C\u304C\u904B\u3093\u3067\u304F\u308C\u308B\u306E\u3067\u3001\u30AB\u30CC\u30FC\u306E\u5411\u304D\u3060\u3051\u64CD\u4F5C\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],["Dirigir:","Steer:","\u64CD\u4F5C:"],["mant\xE9n presionado y mueve el dedo o el rat\xF3n a los lados (o usa las flechas A / D).","press and move your finger or mouse sideways (or use the A / D arrow keys).","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u6307\u3084\u30DE\u30A6\u30B9\u3092\u5DE6\u53F3\u306B\u52D5\u304B\u3057\u307E\u3059\uFF08A / D \u30AD\u30FC\u3082\u4F7F\u3048\u307E\u3059\uFF09\u3002"],["Mejor con auriculares: el sonido es espacial.","Best with headphones: the sound is spatial.","\u30D8\u30C3\u30C9\u30DB\u30F3\u63A8\u5968\uFF1A\u7ACB\u4F53\u97F3\u97FF\u3067\u3059\u3002"],["Entrar al r\xEDo","Enter the river","\u5DDD\u306B\u5165\u308B"],["Empezar desde el principio","Start from the beginning","\u6700\u521D\u304B\u3089\u59CB\u3081\u308B"],["Tono suave","Soft tone","\u3084\u308F\u3089\u304B\u3044\u97F3"],["Suaviza los sonidos agudos","Softens high-pitched sounds","\u9AD8\u3044\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3059"],["Dormir","Sleep","\u304A\u3084\u3059\u307F"],["Baja el sonido y la luz poco a poco","Gradually lowers sound and light","\u97F3\u3068\u660E\u304B\u308A\u3092\u5C11\u3057\u305A\u3064\u4E0B\u3052\u307E\u3059"],["Castillo de la Garza Blanca","White Heron Castle","\u767D\u9DFA\u57CE"],["Rugido del drag\xF3n","Dragon roar","\u7ADC\u306E\u5486\u54EE"],["El drag\xF3n anuncia el Castillo de la Garza Blanca","The dragon heralds White Heron Castle","\u7ADC\u304C\u767D\u9DFA\u57CE\u306E\u5230\u6765\u3092\u544A\u3052\u307E\u3059"],["Puente de madera","Wooden bridge","\u6728\u306E\u6A4B"],["Torii sobre el agua","Torii over the water","\u6C34\u4E0A\u306E\u9CE5\u5C45"],["Aldea de farolillos","Lantern village","\u3061\u3087\u3046\u3061\u3093\u306E\u6751"],["Jard\xEDn de sakura","Sakura garden","\u685C\u306E\u5EAD"],["Ca\xF1averal de las garzas","Heron reedbed","\u30B5\u30AE\u306E\u8466\u539F"],["Templo de la campana","Bell temple","\u9418\u306E\u5BFA"],["Cascadita de musgo","Mossy waterfall","\u82D4\u306E\u5C0F\u3055\u306A\u6EDD"],["Casa de t\xE9","Tea house","\u8336\u5C4B"],["Bosque de bamb\xFA","Bamboo forest","\u7AF9\u6797"],["Estanque de lotos","Lotus pond","\u84EE\u306E\u6C60"],["Jard\xEDn de hortensias","Hydrangea garden","\u3042\u3058\u3055\u3044\u306E\u5EAD"],["Jard\xEDn de arces","Maple garden","\u3082\u307F\u3058\u306E\u5EAD"],["Jard\xEDn de ciruelos","Plum garden","\u6885\u306E\u5EAD"],["Primavera","Spring","\u6625"],["Verano","Summer","\u590F"],["Oto\xF1o","Autumn","\u79CB"],["Invierno","Winter","\u51AC"],["Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.","Every lantern is a note. Follow the river at your own pace.","\u30E9\u30F3\u30BF\u30F3\u306F\u3072\u3068\u3064\u3072\u3068\u3064\u304C\u97F3\u3067\u3059\u3002\u81EA\u5206\u306E\u30DA\u30FC\u30B9\u3067\u5DDD\u3092\u9032\u307F\u307E\u3057\u3087\u3046\u3002"],["De vuelta al inicio del r\xEDo","Back at the start of the river","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3057\u305F"],["Empieza una llovizna suave","A soft drizzle begins","\u3084\u3055\u3057\u3044\u9727\u96E8\u304C\u964D\u308A\u306F\u3058\u3081\u307E\u3057\u305F"],["Las garzas alzan el vuelo a tu paso","Herons take flight as you pass","\u901A\u308A\u904E\u304E\u308B\u3068\u30B5\u30AE\u304C\u98DB\u3073\u7ACB\u3061\u307E\u3059"],["Llevas un buen rato en el r\xEDo: respira hondo y estira un poco los hombros.","You have been on the river a while: breathe deeply and stretch your shoulders.","\u3057\u3070\u3089\u304F\u5DDD\u306B\u3044\u307E\u3059\u306D\u3002\u6DF1\u547C\u5438\u3057\u3066\u3001\u80A9\u3092\u5C11\u3057\u306E\u3070\u3057\u307E\u3057\u3087\u3046\u3002"],["Los peces se acercan a nadar contigo","Fish swim up to keep you company","\u9B5A\u304C\u5BC4\u3063\u3066\u304D\u3066\u4E00\u7DD2\u306B\u6CF3\u304E\u307E\u3059"],["Un pato decide acompa\xF1arte","A duck decides to join you","\u30AB\u30E2\u304C\u3064\u3044\u3066\u304D\u307E\u3059"],["Una lib\xE9lula se pos\xF3 en la proa de tu canoa","A dragonfly landed on the bow of your canoe","\u30C8\u30F3\u30DC\u304C\u30AB\u30CC\u30FC\u306E\u8239\u9996\u306B\u3068\u307E\u308A\u307E\u3057\u305F"],["Festival de linternas: la aldea celebra esta noche","Lantern festival: the village celebrates tonight","\u30E9\u30F3\u30BF\u30F3\u796D\u308A\uFF1A\u4ECA\u591C\u3001\u6751\u304C\u304A\u795D\u3044\u3057\u3066\u3044\u307E\u3059"],["Arrastra para mirar \xB7 pellizca para acercar","Drag to look \xB7 pinch to zoom","\u30C9\u30E9\u30C3\u30B0\u3067\u898B\u56DE\u3059 \xB7 \u30D4\u30F3\u30C1\u3067\u62E1\u5927"],["A\xFAn por descubrir","Yet to discover","\u672A\u767A\u898B"],["Sigue r\xEDo abajo","Keep going downstream","\u5DDD\u3092\u4E0B\u308A\u307E\u3057\u3087\u3046"],["Vuelve a pasar para fotografiarlo","Pass by again to photograph it","\u3082\u3046\u4E00\u5EA6\u901A\u3063\u3066\u64AE\u5F71\u3057\u307E\u3057\u3087\u3046"],["Las luces sobre el agua son linternas: pasa cerca para recogerlas","The lights on the water are lanterns: pass close to collect them","\u6C34\u9762\u306E\u5149\u306F\u30E9\u30F3\u30BF\u30F3\u3067\u3059\u3002\u8FD1\u3065\u304F\u3068\u96C6\u3081\u3089\u308C\u307E\u3059"],["Mant\xE9n presionado y desliza a los lados para dirigir la canoa","Press and slide sideways to steer the canoe","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u30AB\u30CC\u30FC\u3092\u64CD\u4F5C\u3057\u307E\u3059"],["Con Foto puedes guardar un momento; con Diario ves tus lugares","Use Photo to keep a moment; use Journal to see your places","\u300C\u5199\u771F\u300D\u3067\u77AC\u9593\u3092\u6B8B\u3057\u3001\u300C\u65E5\u8A18\u300D\u3067\u8A2A\u308C\u305F\u5834\u6240\u3092\u898B\u3089\u308C\u307E\u3059"],["Tu linterna se queda aqu\xED. Vuelve otro d\xEDa y la encontrar\xE1s encendida.","Your lantern stays here. Come back another day and you will find it lit.","\u30E9\u30F3\u30BF\u30F3\u306F\u3053\u3053\u306B\u6B8B\u308A\u307E\u3059\u3002\u307E\u305F\u6765\u308C\u3070\u706F\u3063\u305F\u307E\u307E\u3067\u3059\u3002"],["Salir de foto","Exit photo","\u64AE\u5F71\u3092\u7D42\u4E86"],["Sin filtro","No filter","\u30D5\u30A3\u30EB\u30BF\u30FC\u306A\u3057"],["Natural","Natural","\u30CA\u30C1\u30E5\u30E9\u30EB"],["C\xE1lido","Warm","\u6696\u8272"],["Bruma","Mist","\u9727"],["Tinta","Ink","\u6C34\u58A8"],["Noche azul","Blue night","\u9752\u3044\u591C"],["Hora","Time","\u6642\u523B"],["Zoom","Zoom","\u30BA\u30FC\u30E0"],["Vista","View","\u8996\u70B9"],["Marco","Frame","\u30D5\u30EC\u30FC\u30E0"],["Cerrar","Close","\u9589\u3058\u308B"],["Diario del r\xEDo","River journal","\u5DDD\u306E\u65E5\u8A18"],["\xBFVolver al inicio del r\xEDo?","Go back to the start of the river?","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3059\u304B\uFF1F"],["Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.","You return to the wooden bridge. You keep your journal, your photos and the lanterns you released.","\u6728\u306E\u6A4B\u306B\u623B\u308A\u307E\u3059\u3002\u65E5\u8A18\u3001\u5199\u771F\u3001\u6D41\u3057\u305F\u30E9\u30F3\u30BF\u30F3\u306F\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u3002"],["Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"],["Reiniciar recorrido","Restart the trip","\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3059"],["Calidad","Quality","\u753B\u8CEA"],["Autom\xE1tica","Automatic","\u81EA\u52D5"],["Alta","High","\u9AD8"],["Media","Medium","\u4E2D"],["Baja (m\xE1s fluida)","Low (smoother)","\u4F4E\uFF08\u306A\u3081\u3089\u304B\uFF09"],["Volumen","Volume","\u97F3\u91CF"],["Estaci\xF3n","Season","\u5B63\u7BC0"],["Cambiarla recarga el r\xEDo","Changing it reloads the river","\u5909\u66F4\u3059\u308B\u3068\u5DDD\u3092\u8AAD\u307F\u8FBC\u307F\u76F4\u3057\u307E\u3059"],["Seg\xFAn la fecha","By date","\u65E5\u4ED8\u306B\u5408\u308F\u305B\u308B"],["Fija","Fixed","\u56FA\u5B9A"],["Idioma","Language","\u8A00\u8A9E"],["Subt\xEDtulos de ambiente","Ambient captions","\u74B0\u5883\u97F3\u306E\u5B57\u5E55"],["Describe los sonidos con texto","Describes sounds as text","\u97F3\u3092\u6587\u5B57\u3067\u8868\u793A\u3057\u307E\u3059"],["Vibraci\xF3n suave","Gentle vibration","\u3084\u3055\u3057\u3044\u632F\u52D5"],["Si tu dispositivo la permite","If your device supports it","\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u7AEF\u672B\u306E\u307F"],["Modo una mano","One-hand mode","\u7247\u624B\u30E2\u30FC\u30C9"],["Botones al alcance del pulgar","Buttons within thumb reach","\u89AA\u6307\u304C\u5C4A\u304F\u4F4D\u7F6E\u306B\u30DC\u30BF\u30F3\u3092\u914D\u7F6E"],["No","Off","\u30AA\u30D5"],["S\xED","On","\u30AA\u30F3"],["Derecha","Right","\u53F3"],["Izquierda","Left","\u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"],["Menos movimiento y destellos","Less motion and flashes","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B"],["Sin c\xE1maras largas, destellos ni balanceo fuerte","No long camera moves, flashes or strong sway","\u9577\u3044\u30AB\u30E1\u30E9\u79FB\u52D5\u30FB\u5149\u30FB\u5F37\u3044\u63FA\u308C\u3092\u306A\u304F\u3057\u307E\u3059"],["Acerca de","About","\u3053\u306E\u30B2\u30FC\u30E0\u306B\u3064\u3044\u3066"],["Privacidad, datos y cr\xE9ditos","Privacy, data and credits","\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30FB\u30C7\u30FC\u30BF\u30FB\u30AF\u30EC\u30B8\u30C3\u30C8"],["Abrir","Open","\u958B\u304F"],["Botones de direcci\xF3n","Steering buttons","\u64CD\u4F5C\u30DC\u30BF\u30F3"],["Alternativa a arrastrar","An alternative to dragging","\u30C9\u30E9\u30C3\u30B0\u306E\u4EE3\u308F\u308A"],["Girar a la izquierda","Turn left","\u5DE6\u3078\u66F2\u304C\u308B"],["Girar a la derecha","Turn right","\u53F3\u3078\u66F2\u304C\u308B"],["Remar","Paddle","\u3053\u3050"],["Direcci\xF3n","Steering","\u64CD\u4F5C"]],$S=new Map(JS.map(i=>[i[0],i])),KS=ui==="en"?1:2;var jS=[[/^Siguiente: (.+) en (\d+) m$/,i=>ui==="en"?`Next: ${Qn(i[1])} in ${i[2]} m`:`\u6B21: ${Qn(i[1])}\uFF08\u3042\u3068${i[2]} m\uFF09`],[/^Descubriste: (.+)$/,i=>ui==="en"?`You discovered: ${Qn(i[1])}`:`\u767A\u898B\uFF1A${Qn(i[1])}`],[/^Continuar \((\d+) m\)$/,i=>ui==="en"?`Continue (${i[1]} m)`:`\u7D9A\u3051\u308B\uFF08${i[1]} m\uFF09`],[/^Soltar linterna \((\d+)\)$/,i=>ui==="en"?`Release lantern (${i[1]})`:`\u30E9\u30F3\u30BF\u30F3\u3092\u6D41\u3059\uFF08${i[1]}\uFF09`],[/^Auto \(ahora ([\d.]+)×\)$/,i=>ui==="en"?`Auto (now ${i[1]}\xD7)`:`\u81EA\u52D5\uFF08\u73FE\u5728 ${i[1]}\xD7\uFF09`],[/^(\d+)\/(\d+) lugares · (.+) · llegaste hasta (\d+) m · linternas soltadas: (\d+)$/,i=>ui==="en"?`${i[1]}/${i[2]} places \xB7 ${Qn(i[3])} \xB7 you reached ${i[4]} m \xB7 lanterns released: ${i[5]}`:`${i[1]}/${i[2]}\u304B\u6240 \xB7 ${Qn(i[3])} \xB7 \u5230\u9054 ${i[4]} m \xB7 \u6D41\u3057\u305F\u30E9\u30F3\u30BF\u30F3: ${i[5]}`],[/^Linternas dejadas: (\d+)$/,i=>ui==="en"?`Lanterns left here: ${i[1]}`:`\u3053\u3053\u306B\u6B8B\u3057\u305F\u30E9\u30F3\u30BF\u30F3: ${i[1]}`],[/^Tu linterna del (.+)$/,i=>ui==="en"?`Your lantern from ${i[1]}`:`${i[1]}\u306E\u30E9\u30F3\u30BF\u30F3`]];function Qn(i){if(ui==="es"||typeof i!="string")return i;let t=i.trim();if(!t)return i;let e=$S.get(t);if(e)return i.replace(t,e[KS]);for(let[n,s]of jS){let r=t.match(n);if(r)return i.replace(t,s(r))}return i}function sh(i){if(i.nodeType===3){let e=Qn(i.nodeValue);e!==i.nodeValue&&(i.nodeValue=e);return}if(i.nodeType!==1||i.tagName==="SCRIPT"||i.tagName==="STYLE")return;i.placeholder&&(i.placeholder=Qn(i.placeholder));let t=i.getAttribute&&i.getAttribute("aria-label");if(t){let e=Qn(t);e!==t&&i.setAttribute("aria-label",e)}for(let e of i.childNodes)sh(e)}function _g(){ui!=="es"&&(document.documentElement.lang=ui,sh(document.body),new MutationObserver(i=>{for(let t of i)t.type==="characterData"?sh(t.target):t.addedNodes.forEach(sh)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0}))}function Mg(i){let{R:t,scene:e,cam:n,canvas:s,el:r,toast:o,P:a,LM:l,lmFound:c,lmPos:u,LMS:h,mkLantern:d,cx:f,hw:m,A:x,SEAS:g,seasonIdx:p}=i,y={photo:!1,want:null},S={get(j,yt){try{let ae=localStorage.getItem(j);return ae===null?yt:ae}catch{return yt}},set(j,yt){try{return localStorage.setItem(j,yt),!0}catch{return!1}},del(j){try{localStorage.removeItem(j)}catch{}}},_=g[p()],b=document.createElement("style");b.textContent=`
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
  `,document.head.appendChild(b);let M=Math.min(devicePixelRatio||1,2),T=[.7,.85,1,1.25,1.5],v=0;T.forEach((j,yt)=>{j<=M+.001&&(v=yt)});let E=S.get("rio3d-q","auto"),R=Math.min(v,3),I=v,L=1/60,P=0,C=5,F=0,V=0,z=0,$=0,B={hi:1.5,mid:1,lo:.7},k=()=>y.photo?Math.min(M,1.75):Math.min(E==="auto"?T[R]:B[E]||1,M);function K(){let j=k();Math.abs(j-$)>.01&&($=j,t.setPixelRatio(j),t.setSize(innerWidth,innerHeight,!1),bt())}y.tick=function(j){if(!(document.hidden||!i.started()||y.photo)&&(j=Math.min(j,.1),L+=(j-L)*.04,P+=j,!(P<1))){if(P=0,E!=="auto"){K();return}if(C>0){C--,$||K();return}L>.027?(V++,F=0):L<.0185?(F++,V=0):(F=0,V=0),V>=2&&R>0?(R--,V=0,C=6,z&&performance.now()-z<3e4&&(I=Math.min(I,R)),K()):F>=12&&R<Math.min(I,v)&&(R++,F=0,C=10,z=performance.now(),K())}};let ut=()=>E==="auto"?"Auto (ahora "+Math.min(T[R],M).toFixed(2)+"\xD7)":"Fija",Rt={none:{n:"Sin filtro"},nat:{n:"Natural",t:[1,1,1],sat:1.06,con:1.04,lift:0,vig:.35,glow:.2,grain:0},warm:{n:"C\xE1lido",t:[1.1,1,.86],sat:1.12,con:1.05,lift:.02,vig:.4,glow:.3,grain:.02},mist:{n:"Bruma",t:[.97,1,1.04],sat:.92,con:.92,lift:.07,vig:.3,glow:.5,grain:.02},ink:{n:"Tinta",t:[1,.97,.9],sat:0,con:1.28,lift:.05,vig:.55,glow:.2,grain:.05},moon:{n:"Noche azul",t:[.74,.9,1.18],sat:.85,con:1.08,lift:0,vig:.5,glow:.55,grain:.03}},ue=S.get("rio3d-filter","nat");Rt[ue]||(ue="nat");let te=S.get("rio3d-frame","1")==="1",Vt=null,nt=new wr,at=new nr(-1,1,1,-1,0,1),wt=new $e({depthTest:!1,depthWrite:!1,uniforms:{tex:{value:null},px:{value:new At},tint:{value:new D(1,1,1)},sat:{value:1},con:{value:1},lift:{value:0},vig:{value:0},glow:{value:0},grain:{value:0},time:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tex;uniform vec2 px;uniform vec3 tint;uniform float sat,con,lift,vig,glow,grain,time;
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
    }`});nt.add(new q(new un(2,2),wt));let zt=new At;function bt(){Vt&&(t.getDrawingBufferSize(zt),(Vt.width!==zt.x||Vt.height!==zt.y)&&Vt.setSize(zt.x,zt.y))}function ne(){if(Vt){bt();return}t.getDrawingBufferSize(zt);try{Vt=new Bn(zt.x,zt.y,{samples:4,type:_i,depthBuffer:!0})}catch{Vt=new Bn(zt.x,zt.y,{samples:4,depthBuffer:!0})}}y.render=function(){let j=Rt[ue];if(y.photo&&j.t){ne(),t.setRenderTarget(Vt),t.render(e,n),t.setRenderTarget(null);let yt=wt.uniforms;yt.tex.value=Vt.texture,yt.px.value.set(1/Vt.width,1/Vt.height),yt.tint.value.set(j.t[0],j.t[1],j.t[2]),yt.sat.value=j.sat,yt.con.value=j.con,yt.lift.value=j.lift,yt.vig.value=j.vig,yt.glow.value=j.glow,yt.grain.value=j.grain,yt.time.value=a.t%10,t.render(nt,at)}else t.render(e,n);if(y.want){let yt=y.want;y.want=null;try{yt()}catch(ae){console.error("want",ae&&ae.message)}}};let cn=new D(0,1,0),re=new D(1,0,0),xe=new pn,Ue=new pn,ie=0,Pe=0,be=1,Tn=0,ke=0,tn=1;y.camAdjust=function(){Tn+=(ie-Tn)*.25,ke+=(Pe-ke)*.25,tn+=(be-tn)*.25,(Math.abs(Tn)>1e-4||Math.abs(ke)>1e-4)&&(xe.setFromAxisAngle(cn,Tn),Ue.setFromAxisAngle(re,ke),n.quaternion.premultiply(xe).multiply(Ue)),Math.abs(tn-1)>.001&&(n.fov=Math.max(18,Math.min(110,n.fov*tn)),n.updateProjectionMatrix())};let H=new Map,fn=0;s.addEventListener("pointerdown",j=>{if(y.photo&&(s.setPointerCapture(j.pointerId),H.set(j.pointerId,[j.clientX,j.clientY]),H.size===2)){let yt=[...H.values()];fn=Math.hypot(yt[0][0]-yt[1][0],yt[0][1]-yt[1][1])}}),s.addEventListener("pointermove",j=>{if(!y.photo||!H.has(j.pointerId))return;let yt=H.get(j.pointerId),ae=j.clientX-yt[0],Ye=j.clientY-yt[1];if(yt[0]=j.clientX,yt[1]=j.clientY,H.size===1){let Xt=.0045*be;ie-=ae*Xt,Pe=Math.max(-1.05,Math.min(1.05,Pe-Ye*Xt))}else if(H.size===2){let Xt=[...H.values()],pe=Math.hypot(Xt[0][0]-Xt[1][0],Xt[0][1]-Xt[1][1]);fn>0&&(be=Math.max(.35,Math.min(1.35,be*fn/pe))),fn=pe,Lt.value=be}});let De=j=>{H.delete(j.pointerId),fn=0};s.addEventListener("pointerup",De),s.addEventListener("pointercancel",De),s.addEventListener("wheel",j=>{y.photo&&(be=Math.max(.35,Math.min(1.35,be*(1+Math.sign(j.deltaY)*.06))),Lt.value=be,j.preventDefault())},{passive:!1});let N=r("hud"),w=r("hr"),X=r("menu"),J=r("more"),et=(j,yt,ae,Ye)=>{let Xt=document.createElement("button");return Xt.id=j,Xt.type="button",Xt.textContent=yt,ae?X.insertBefore(Xt,Ye||null):w.insertBefore(Xt,Ye||r("cam")),Xt};J.onclick=j=>{j.stopPropagation(),X.hidden=!X.hidden,J.setAttribute("aria-expanded",String(!X.hidden))},document.addEventListener("click",j=>{(!X.hidden&&!w.contains(j.target)||!X.hidden&&X.contains(j.target)&&j.target.tagName==="BUTTON"&&j.target.id!=="snd")&&(X.hidden=!0,J.setAttribute("aria-expanded","false"))});let ht=et("pauseB","Pausa");ht.dataset.pz="1";let mt=et("photoB","Foto"),it=et("diaryB","Diario",!0,r("snd")),rt=et("setB","Ajustes",!0,r("snd")),gt=et("restB","Reiniciar",!0),Tt=document.createElement("div");Tt.id="xph",Tt.className="xp",Tt.hidden=!0,Tt.innerHTML=`<div class="fr" id="xfl"></div>
  <div class="fr"><label>Hora <input id="xhr" type="range" min="0" max="1" step=".002"></label><label>Zoom <input id="xzm" type="range" min=".35" max="1.35" step=".01"></label>
  <button class="chip2" id="xvw">Vista</button><button class="chip2" id="xfm">Marco</button></div>
  <button id="xshut" aria-label="Tomar foto"></button>`,document.body.appendChild(Tt);let ft=document.createElement("button");ft.id="xclose",ft.textContent="Salir de foto",ft.hidden=!0,document.body.appendChild(ft);let dt=document.createElement("div");dt.id="xflash",document.body.appendChild(dt);let Lt=Tt.querySelector("#xzm"),Ht=Tt.querySelector("#xhr"),ee=Tt.querySelector("#xfl"),G=Tt.querySelector("#xfm"),pt={};Object.keys(Rt).forEach(j=>{let yt=document.createElement("button");yt.className="chip2",yt.textContent=Rt[j].n,yt.onclick=()=>{ue=j,S.set("rio3d-filter",j),st()},ee.appendChild(yt),pt[j]=yt});function st(){for(let j in pt)pt[j].classList.toggle("on",j===ue);G.classList.toggle("on",te)}G.onclick=()=>{te=!te,S.set("rio3d-frame",te?"1":"0"),st()},Tt.querySelector("#xvw").onclick=()=>i.setCam(1-i.getCam()),Lt.oninput=()=>{be=+Lt.value},Ht.oninput=()=>i.setTod(+Ht.value);let xt=["hud","next","hint","toast","lantB"],St=()=>[...document.body.children].filter(j=>j.tagName==="DIV"&&/pointer-events:none/.test(j.style.cssText)&&j.id!=="xflash");function lt(j){j!==y.photo&&(j&&!i.started()||(y.photo=j,document.body.classList.toggle("photo",j),xt.forEach(yt=>{let ae=r(yt)||document.getElementById(yt);ae&&(ae.style.visibility=j?"hidden":"")}),St().forEach(yt=>yt.style.visibility=j?"hidden":""),Tt.hidden=!j,ft.hidden=!j,j?(ie=Pe=0,be=1,Lt.value=1,Ht.value=i.getTod(),st(),K(),o("Arrastra para mirar \xB7 pellizca para acercar")):(ie=Pe=0,be=1,H.clear(),K(),Qr())))}mt.onclick=()=>lt(!0),ft.onclick=()=>lt(!1),addEventListener("keydown",j=>{j.code==="KeyP"&&lt(!y.photo),j.code==="Escape"&&y.photo&&lt(!1),j.code==="Enter"&&y.photo&&Ft()});function Ft(){y.want=()=>{let j=performance.now();!UX.calm()&&j-(y._fl||-9999)>1500&&(y._fl=j,dt.style.transition="none",dt.style.opacity=.22,requestAnimationFrame(()=>{dt.style.transition="opacity .6s",dt.style.opacity=0}));let yt=s.width,ae=s.height,Ye=s;if(te){let Xt=Math.round(yt*.03),pe=Math.round(yt*.065),le=document.createElement("canvas");le.width=yt+2*Xt,le.height=ae+Xt+pe;let Te=le.getContext("2d");Te.fillStyle="#f3ead6",Te.fillRect(0,0,le.width,le.height),Te.drawImage(s,Xt,Xt,yt,ae);let Ni=i.nearLM(a.dist||0),vr=Math.round(pe*.4);Te.fillStyle="#5a4a3c",Te.font=vr+"px Georgia,serif",Te.textBaseline="middle",Te.fillText("R\xEDo 3D"+(Ni?"  \xB7  "+Qn(Ni):""),Xt,ae+Xt+pe*.52),Te.textAlign="right",Te.fillStyle="#8a7a68",Te.fillText(Math.round(a.dist||0)+" m  \xB7  "+Qn(_.name)+"  \xB7  "+Qn(i.todName(i.getTod())),le.width-Xt,ae+Xt+pe*.52),Ye=le}Ye.toBlob(Xt=>{if(!Xt)return;let pe=new File([Xt],"rio3d-"+Date.now()+".jpg",{type:"image/jpeg"}),le=()=>{let Te=document.createElement("a");Te.href=URL.createObjectURL(Xt),Te.download=pe.name,document.body.appendChild(Te),Te.click(),setTimeout(()=>{URL.revokeObjectURL(Te.href),Te.remove()},4e3)};navigator.canShare&&navigator.canShare({files:[pe]})?navigator.share({files:[pe],title:"R\xEDo 3D"}).catch(Te=>{Te&&Te.name!=="AbortError"&&le()}):le()},"image/jpeg",.92)}}Tt.querySelector("#xshut").onclick=Ft;let Pt=j=>"rio3d-snap-"+j,Be=new Set;for(let j=0;j<l.length;j++)S.get(Pt(j),null)&&Be.add(j);y.hasSnap=j=>Be.has(j),y.snap=function(j){y.want=()=>{let ae=Math.round(420*s.height/s.width),Ye=document.createElement("canvas");Ye.width=420,Ye.height=ae,Ye.getContext("2d").drawImage(s,0,0,420,ae);let Xt=Ye.toDataURL("image/jpeg",.72);S.set(Pt(j),Xt)&&(Be.add(j),S.set("rio3d-snapd-"+j,new Date().toISOString().slice(0,10)))}},y.found=j=>{S.get("rio3d-snapd-"+j,null)||S.set("rio3d-snapd-"+j,new Date().toISOString().slice(0,10))};let Re=j=>j?new Date(j+"T12:00:00").toLocaleDateString(Gf(),{day:"numeric",month:"short"}):"",Yn=j=>{let yt=document.createElement("div");return yt.className="xp xm",yt.innerHTML='<div><button class="close">Cerrar</button>'+j+"</div>",yt.onclick=ae=>{(ae.target===yt||ae.target.classList.contains("close"))&&yt.remove()},document.body.appendChild(yt),yt};it.onclick=()=>{let j=pi(),yt=new Array(l.length).fill(0);j.forEach(Xt=>{let pe=Math.round((Xt.s-240)/h);yt[i.lmType(pe)]++});let ae=+S.get("rio3d-pos","0"),Ye='<h2>Diario del r\xEDo</h2><p style="margin:0 0 12px;color:var(--muted)">'+c.size+"/"+l.length+" lugares \xB7 "+_.name+" \xB7 llegaste hasta "+ae+" m \xB7 linternas soltadas: "+j.length+'</p><div class="xgrid">';l.forEach((Xt,pe)=>{let le=c.has(pe),Te=le&&S.get(Pt(pe),null);Ye+='<div class="xcard'+(le?"":" no")+'"><div class="im"'+(Te?' style="background-image:url('+Te+')"':"")+">"+(Te?"":le?"?":"\xB7")+'</div><div class="tx"><b>'+(le?Xt:"A\xFAn por descubrir")+"</b>"+(le?Te?Re(S.get("rio3d-snapd-"+pe,"")):"Vuelve a pasar para fotografiarlo":"Sigue r\xEDo abajo")+(yt[pe]?"<br>Linternas dejadas: "+yt[pe]:"")+"</div></div>"}),Yn(Ye+"</div>")};let pi=()=>{try{return JSON.parse(S.get("rio3d-left","[]"))||[]}catch{return[]}},vs=pi(),Kr=new Map,ha=[],jr=new Set,Hs=document.createElement("button");Hs.id="lantB",document.body.appendChild(Hs),Hs.hidden=!0;function Qr(){let j=i.getCount();Hs.hidden=!(i.started()&&j>0&&!y.photo),Hs.textContent="Soltar linterna ("+j+")"}Hs.onclick=()=>{if(i.getCount()<=0||y.photo)return;let j=-a.pz+7,yt=Math.max(-m(j)+4,Math.min(m(j)-4,a.px+Math.sin(a.psi)*7-f(j)));vs.push({s:Math.round(j*10)/10,e:Math.round(yt*10)/10,t:Date.now()}),vs.length>80&&vs.shift(),S.set("rio3d-left",JSON.stringify(vs)),i.setCount(i.getCount()-1);try{x.plop(0)}catch{}i.spawnRipple(f(j)+yt,-j),Qr(),vs.length===1&&o("Tu linterna se queda aqu\xED. Vuelve otro d\xEDa y la encontrar\xE1s encendida.")},y.update=function(j,yt){if(!i.started())return;Gl(j),((y.update.n=(y.update.n||0)+1)&15)===0&&Qr();let ae=a.t,Ye=i.glowK();for(let[Xt,pe]of Kr){let le=vs[Xt];(!le||le.s<yt-70||le.s>yt+280)&&(e.remove(pe),ha.push(pe),Kr.delete(Xt))}vs.forEach((Xt,pe)=>{if(Xt.s<yt-70||Xt.s>yt+280)return;let le=Kr.get(pe);le||(le=ha.pop()||d(),le.scale.setScalar(1.25),le.userData.body.material=le.userData.body.material.clone(),le.userData.body.material.color.set(16773328),e.add(le),Kr.set(pe,le)),le.position.set(f(Xt.s)+Xt.e+Math.sin(ae*.3+pe)*.5,Math.sin(ae*1.1+pe)*.04,-Xt.s),le.rotation.z=Math.sin(ae*.8+pe*2)*.08,le.userData.glow.material.opacity=(.6+.3*Ye)*(.85+.15*Math.sin(ae*3+pe)),le.userData.refl.material.opacity=(.3+.3*Ye)*(.9+.1*Math.sin(ae*2+pe));let Te=le.position.x-a.px,Ni=le.position.z-a.pz;Te*Te+Ni*Ni<196&&!jr.has(pe)&&!y.photo&&(jr.add(pe),o("Tu linterna del "+Re(new Date(Xt.t).toISOString().slice(0,10))))})},gt.onclick=()=>{let j=Yn('<h2>\xBFVolver al inicio del r\xEDo?</h2><p style="color:var(--muted);margin:0 0 14px">Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.</p><div class="row"><button class="q" id="xno">Cancelar</button><button class="q" id="xyes" style="background:#ffc77a;color:#3b2a1a">Reiniciar recorrido</button></div>');j.querySelector("#xno").onclick=()=>j.remove(),j.querySelector("#xyes").onclick=()=>{j.remove(),i.restart()}},rt.onclick=()=>{let j=Yn(`<h2>Ajustes</h2>
    <div class="row"><span>Calidad<br><small style="color:var(--muted)" id="xql"></small></span><select id="xq"><option value="auto">Autom\xE1tica</option><option value="hi">Alta</option><option value="mid">Media</option><option value="lo">Baja (m\xE1s fluida)</option></select></div>
    <div class="row"><span>Volumen</span><input type="range" id="xv" min="0" max="1" step=".05" style="width:55%;accent-color:#ffc77a"></div>
    <div class="row"><span>Estaci\xF3n<br><small style="color:var(--muted)">Cambiarla recarga el r\xEDo</small></span><select id="xs"><option value="auto">Seg\xFAn la fecha</option><option value="0">Primavera</option><option value="1">Verano</option><option value="2">Oto\xF1o</option><option value="3">Invierno</option></select></div>
    <div class="row"><span>Idioma</span><select id="xl"><option value="es">Espa\xF1ol</option><option value="en">English</option><option value="ja">\u65E5\u672C\u8A9E</option></select></div>
    <div class="row"><span>Subt\xEDtulos de ambiente<br><small style="color:var(--muted)">Describe los sonidos con texto</small></span><select id="xsub"><option value="0">No</option><option value="1">S\xED</option></select></div>
    <div class="row"><span>Vibraci\xF3n suave<br><small style="color:var(--muted)">Si tu dispositivo la permite</small></span><select id="xhp"><option value="1">S\xED</option><option value="0">No</option></select></div>
    <div class="row"><span>Modo una mano<br><small style="color:var(--muted)">Botones al alcance del pulgar</small></span><select id="xh"><option value="0">No</option><option value="r">Derecha</option><option value="l">Izquierda</option></select></div>
    <div class="row"><span>Menos movimiento y destellos<br><small style="color:var(--muted)">Sin c\xE1maras largas, destellos ni balanceo fuerte</small></span><select id="xcalm"><option value="0">No</option><option value="1">S\xED</option></select></div>
    <div class="row"><span>Botones de direcci\xF3n<br><small style="color:var(--muted)">Alternativa a arrastrar</small></span><select id="xpad"><option value="0">No</option><option value="1">S\xED</option></select></div>
    <div class="row"><span>Acerca de<br><small style="color:var(--muted)">Privacidad, datos y cr\xE9ditos</small></span><button id="xabout" type="button">Abrir</button></div>
    <div class="row"><span>Cuaderno del r\xEDo<br><small style="color:var(--muted)">Lo que has visto en el camino</small></span><button id="xalb" type="button">Abrir</button></div>
    <div class="row"><span>Tono suave<br><small style="color:var(--muted)">Suaviza los sonidos agudos</small></span><select id="xsoft"><option value="0">No</option><option value="1">S\xED</option></select></div>
    <div class="row"><span>Dormir<br><small style="color:var(--muted)">Baja el sonido y la luz poco a poco</small></span><select id="xsl"><option value="0">No</option><option value="15">15 min</option><option value="30">30 min</option><option value="45">45 min</option></select></div>`),yt=j.querySelector("#xq"),ae=j.querySelector("#xs"),Ye=j.querySelector("#xql"),Xt=j.querySelector("#xv");Xt.value=x.vol,Xt.oninput=()=>{x.setVol(+Xt.value),S.set("rio3d-vol",Xt.value)},yt.value=E,ae.value=S.get("rio3d-season","auto"),Ye.textContent=ut(),yt.onchange=()=>{E=yt.value,S.set("rio3d-q",E),C=3,K(),Ye.textContent=ut()},ae.onchange=()=>{S.set("rio3d-season",ae.value);try{i.savePos()}catch{}location.reload()};let pe=j.querySelector("#xl");pe.value=Gf(),pe.onchange=()=>{vg(pe.value);try{i.savePos()}catch{}location.reload()};let le=j.querySelector("#xsub");le.value=S.get("rio3d-subs","0"),le.onchange=()=>S.set("rio3d-subs",le.value);let Te=j.querySelector("#xhp");Te.value=S.get("rio3d-hap","1"),Te.onchange=()=>S.set("rio3d-hap",Te.value);let Ni=j.querySelector("#xsoft");Ni.value=UX.api.soft()?"1":"0",Ni.onchange=()=>UX.api.setSoft(Ni.value==="1"),j.querySelector("#xalb").onclick=()=>zf(UX.tr),j.querySelector("#xabout").onclick=()=>UX.about();let vr=j.querySelector("#xpad");vr.value=mg()?"1":"0",vr.onchange=()=>xg(vr.value==="1");let to=j.querySelector("#xcalm");to.value=UX.calm()?"1":"0",to.onchange=()=>UX.setCalm(to.value==="1");let A=j.querySelector("#xsl");A.value=String(UX.api.sleepMin()),A.onchange=()=>UX.api.sleep(+A.value);let O=j.querySelector("#xh");O.value=S.get("rio3d-hand","0"),O.onchange=()=>{S.set("rio3d-hand",O.value),document.body.classList.remove("hand-r","hand-l"),O.value!=="0"&&document.body.classList.add("hand-"+O.value)}};{let j=parseFloat(S.get("rio3d-vol","1"));j>=0&&j<=1&&(x.vol=j)}let Ti=S.get("rio3d-ob","0")==="1"?9:0,zn=0,$i=r("hint");function Gl(j){Ti>=9||!i.started()||(zn+=j,Ti===0&&zn>1?($i.hidden=!1,$i.style.opacity=1,$i.textContent="Mant\xE9n presionado y desliza a los lados para dirigir la canoa",Ti=1,zn=0):Ti===1&&(Math.abs(a.steer)>.35||zn>40)?(Ti=2,zn=0,$i.textContent="Las luces sobre el agua son linternas: pasa cerca para recogerlas"):Ti===2&&(i.getCount()>0||zn>60)?(Ti=3,zn=0,$i.textContent="Con Foto puedes guardar un momento; con Diario ves tus lugares"):Ti===3&&zn>10&&($i.style.opacity=0,Ti=9,S.set("rio3d-ob","1")))}return wt.uniforms.time.value=0,K(),st(),addEventListener("resize",()=>setTimeout(bt,50)),y}(function(){if(window.PZ)return;let i=window.PZ={on:!1,ctx:()=>null,started:()=>!0},t=document.createElement("style");t.textContent="#pz{position:fixed;inset:0;z-index:30;display:grid;place-items:center;background:rgba(24,26,56,.64);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);color:#fbf1e0;font-family:system-ui,-apple-system,sans-serif;text-align:center;padding:20px}#pz[hidden]{display:none}#pz .c{display:flex;flex-direction:column;gap:12px;align-items:center}#pz h2{margin:0;font:600 1.7rem system-ui}#pz p{margin:0;color:#cbc8e8;line-height:1.5}#pz button{background:#ffc77a;color:#3b2a1a;border:0;border-radius:99px;padding:13px 32px;font:700 1rem system-ui;cursor:pointer}",document.head.appendChild(t);let e=document.createElement("div");e.id="pz",e.hidden=!0,e.innerHTML='<div class="c"><h2>En pausa</h2><p>Respira con calma.<br>Todo seguir\xE1 aqu\xED cuando vuelvas.</p><button type="button" id="pzGo">Continuar</button></div>';let n=()=>document.body.appendChild(e);document.body?n():addEventListener("DOMContentLoaded",n),i.set=function(s){if(s=!!s,s!==i.on&&!(s&&!i.started())){i.on=s,e.hidden=!s;try{let r=i.ctx();r&&(s?r.suspend():r.resume())}catch{}if(document.querySelectorAll("[data-pz]").forEach(r=>r.textContent=s?"Continuar":"Pausa"),s)try{document.activeElement&&document.activeElement.blur()}catch{}}},i.toggle=()=>i.set(!i.on),i.more=function(s,r,o){if(r=r.filter(Boolean),!s||!r.length)return;let a=document.createElement("style");a.textContent="#pzMore{position:fixed;z-index:25;display:flex;flex-direction:column;gap:6px;padding:8px;min-width:150px;background:rgba(43,45,82,.97);border:1px solid rgba(255,255,255,.22);border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.4)}#pzMore[hidden]{display:none}#pzMore button{display:block;width:100%;text-align:left;background:rgba(255,255,255,.08);color:#fbf1e0;border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:9px 12px;font:600 .88rem system-ui,sans-serif;cursor:pointer}",document.head.appendChild(a);let l=document.createElement("button");l.type="button",l.textContent=o||"M\xE1s",l.className=r[0].className||"",l.id="pzMoreB";let c=document.createElement("div");return c.id="pzMore",c.hidden=!0,r.forEach(u=>{u.removeAttribute("style"),c.appendChild(u)}),s.appendChild(l),document.body.appendChild(c),l.onclick=u=>{if(u.stopPropagation(),c.hidden=!c.hidden,!c.hidden){let h=l.getBoundingClientRect();c.style.top=h.bottom+6+"px",c.style.right=Math.max(8,innerWidth-h.right)+"px"}},document.addEventListener("click",u=>{!c.hidden&&!c.contains(u.target)&&u.target!==l&&(c.hidden=!0)}),addEventListener("resize",()=>{c.hidden=!0}),l},e.querySelector("#pzGo").onclick=()=>i.set(!1),document.addEventListener("keydown",s=>{s.code==="Escape"&&!document.body.classList.contains("photo")&&!document.querySelector(".xm")&&i.toggle()}),document.addEventListener("visibilitychange",()=>{document.hidden&&i.started()&&!i.on&&i.set(!0)}),document.addEventListener("click",s=>{s.target.closest&&s.target.closest("[data-pz]")&&i.toggle()})})();var tt=(i,t=0)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},Ae=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),de=(i,t,e)=>{let n=Ae((e-i)/(t-i));return n*n*(3-2*n)},lr=(i,t,e)=>i+(t-i)*e;function rn(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=tt(e,n),c=tt(e+1,n),u=tt(e,n+1),h=tt(e+1,n+1);return l+(c-l)*o+(u-l)*a+(l-c-u+h)*o*a}var He=i=>document.getElementById(i),Vf=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Dr=(i,t)=>{let e=i-t;for(;e>Math.PI;)e-=6.2832;for(;e<-Math.PI;)e+=6.2832;return e};var cl=11,QS=[0,1,2,4,5,6,7,8,9,3,10],Xe=i=>QS[(i%cl+cl)%cl],tE=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-1;n<=e+1;n++)if(Xe(n)===6){let s=240+n*260+tt(n,5)*50;t+=1*34*Math.exp(-Math.pow((i-s)/70,2))}return t},qt=i=>Math.sin(i*.0045)*55+Math.sin(i*.0017+1.3)*110+Math.sin(i*.011)*12+tE(i),fe=i=>21+4*Math.sin(i*.003+2)+2*Math.sin(i*.013),vn=i=>Math.atan((qt(i+1)-qt(i-1))/2);function ti(i,t){let e=Math.abs(i-qt(t))-fe(t);if(e<0)return-1.5+1.7*de(-5,0,e);let n=rn(i*.018,t*.018)*12+rn(i*.055,t*.055)*4;return eE(i,t,.2+.6*de(0,4,e)+n*de(5,60,e)+Math.min(e,160)*.1*de(30,100,e))}var Kt={PO:66,PH:7,X:66,ZF:44,ZB:-52,MZ0:50,MZ1:60},bg=new Map;function Wf(i){let t=bg.get(i);if(!t){let e=je(i),n=vn(e);t={k:i,s0:e,a:n,x0:qt(e),hw0:fe(e),side:tt(i,9)>.5?1:-1,ca:Math.cos(n),sa:Math.sin(n)},bg.set(i,t)}return t}function ul(i,t,e){let n=t-i.x0,s=i.s0-e,r=n*i.ca+s*i.sa,o=-n*i.sa+s*i.ca;return[i.side*o,-i.side*r+i.hw0+Kt.PO]}function Lr(i){let t=Math.round((i-240)/260);for(let e=t-1;e<=t+1;e++)if(Xe(e)===10)return Wf(e);return null}function eE(i,t,e){let n=Lr(t);if(!n||Math.abs(t-n.s0)>200)return e;let[s,r]=ul(n,i,t);if(r<-130||r>95||Math.abs(s)>150)return e;let o=Math.max(Math.abs(s)-Kt.X,r-Kt.ZF,Kt.ZB-r),a=1-de(4,70,o);a>0&&(e=e*(1-a)+Math.min(e,3.2)*a);let l=1-de(0,2,o+1.5);l>0&&(e=e*(1-l)+Kt.PH*l);let c=Math.min(Math.max(Math.abs(s)-62,Math.abs(r-53)-7),Math.max(Math.abs(s+50)-6,Math.abs(r-65)-10)),u=1-de(-.2,2.2,c);return u>0&&(e=e*(1-u)-1.6*u),e}function Sg(i,t){let e=Lr(t);if(!e||Math.abs(t-e.s0)>130)return 0;let[n,s]=ul(e,i,t);return 1-de(0,2,Math.max(Math.abs(n)-Kt.X,s-Kt.ZF,Kt.ZB-s)+1.5)}function Xf(i,t){let e=Lr(t);if(!e||Math.abs(t-e.s0)>130)return!1;let[n,s]=ul(e,i,t);return Math.abs(n)<80&&s>-66&&s<72}function Wo(i){let t=je(i),e=je(i-1);return e-80>=t-360?e-80:e+80}var ei=150,ni=120,hs=2.6,ii=3,hl=8,On=eh[ar()],Di=260,je=i=>240+i*Di+tt(i,5)*50,Nr=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-2;n<=e+2;n++){let s=Xe(n);s===3?t=Math.max(t,1-de(40,170,Math.abs(je(n)-i))):s===10&&(t=Math.max(t,.9*(1-de(55,230,Math.abs(je(n)-i)))))}return t},Xo=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-2;n<=e+2;n++)Xe(n)===8&&(t=Math.max(t,1-de(70,190,Math.abs(je(n)-i))));return t},qf=(i,t)=>{let e=Math.round((i-240)/260);for(let n=e-1;n<=e+1;n++){let s=Xe(n);if((s===5||s===7)&&Math.abs(je(n)-i)<(s===5?26:12)&&t<(s===5?48:20))return!0}return!1},qo=i=>de(.4,.55,rn(i*.0022+31,5)*.6+rn(i*.0053+8,2)*.4),rh=i=>{let t=0,e=Math.floor(i/650);for(let n=e-1;n<=e+1;n++){let s=n*650+250+tt(n,7)*220,r=120+tt(n,8)*70,o=(i-s)/r;t=Math.max(t,Math.exp(-o*o))}return t};var ot={tod:.5,glowK:.3,started:!1,camMode:0,camK:0,count:0,scareT:0,cine:null,cineW:0,savedS:0,X:null},U={px:qt(0),pz:0,psi:0,v:1.5,steer:0,hold:!1,pitch:0,roll:0,stroke:0,side:0,act:0,bumpT:0,dist:0,t:0,key:{up:!1,l:!1,r:!1}};U.pz=-30;U.px=qt(30);U.psi=vn(30);function oh(i){U.pz=-i,U.px=qt(i),U.psi=vn(i),U.dist=i}function ah(){ot.cine&&ot.cine.t>1.5&&(ot.cine.t=Math.max(ot.cine.t,ot.cine.dur-2.4))}var Ps=document.getElementById("c"),bi=new Ku({canvas:Ps,antialias:!0,powerPreference:"high-performance"});bi.setPixelRatio(Math.min(devicePixelRatio||1,1.5));var vt=new wr;vt.fog=new Pa(13421772,22,250);var mn=new yn(68,1,.05,900);function Yf(){let i=innerWidth,t=innerHeight;bi.setSize(i,t,!1),mn.aspect=i/t,mn.fov=i/t<1?82:68,mn.updateProjectionMatrix()}addEventListener("resize",Yf);addEventListener("orientationchange",()=>setTimeout(Yf,250));Yf();document.addEventListener("visibilitychange",()=>{try{$t.ctx&&(document.hidden?$t.ctx.suspend():$t.on&&!PZ.on&&$t.ctx.resume())}catch{}});var Ur=new Va(16777215,9083528,1.2);vt.add(Ur);var Ds=new Ya(16777215,1);vt.add(Ds);var si=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new xi(i)})(),hi=(i,t)=>{let e=new As(new rs({map:si,color:i,blending:Vn,depthWrite:!1,fog:!1,transparent:!0}));return e.scale.set(t,t,1),e},Ot=(i,t)=>new ge(Object.assign({gradientMap:we,color:i},t||{}));function Eg(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function nE(i,t,e){let n=new Float32Array(t*t);for(let r=0;r<n.length;r++)n[r]=e();let s=new Float32Array(i*i);for(let r=0;r<i;r++){let o=r/i*t,a=Math.floor(o),l=o-a,c=l*l*(3-2*l),u=a%t*t,h=(a+1)%t*t;for(let d=0;d<i;d++){let f=d/i*t,m=Math.floor(f),x=f-m,g=x*x*(3-2*x),p=m%t,y=(m+1)%t,S=n[u+p],_=n[u+y],b=n[h+p],M=n[h+y];s[r*i+d]=(S+(_-S)*g)*(1-c)+(b+(M-b)*g)*c}}return s}function Zf(i,t,e,n){let s=Eg(n),r=new Float32Array(i*i),o=1,a=0;for(let u=0;u<e;u++){let h=nE(i,t<<u,s);for(let d=0;d<r.length;d++)r[d]+=h[d]*o;a+=o,o*=.5}let l=1e9,c=-1e9;for(let u=0;u<r.length;u++)r[u]/=a,r[u]<l&&(l=r[u]),r[u]>c&&(c=r[u]);for(let u=0;u<r.length;u++)r[u]=(r[u]-l)/(c-l);return r}function iE(){let t=Zf(256,4,5,11),e=Zf(256,8,4,23),n=Zf(256,6,4,37),s=new Uint8Array(256*256*4);for(let o=0;o<256*256;o++)s[o*4]=t[o]*255,s[o*4+1]=e[o]*255,s[o*4+2]=n[o]*255,s[o*4+3]=255;let r=new Rs(s,256,256,ci);return r.wrapS=r.wrapT=$s,r.magFilter=Rn,r.minFilter=as,r.generateMipmaps=!0,r.needsUpdate=!0,r}var sE=(()=>{let i=Math.random;Math.random=Eg(7);try{return iE()}finally{Math.random=i}})();var dl=()=>new ct,gn={top:{value:dl()},hor:{value:dl()},hz:{value:dl()},sunDir:{value:new D(0,1,0)},moonDir:{value:new D(0,1,0)},sunCol:{value:dl()},lightDir:{value:new D(0,1,0)},lightCol:{value:dl()},sunI:{value:1},moonI:{value:0},gI:{value:0},night:{value:0},cover:{value:.25},mist:{value:0},skyT:{value:0},cloudTex:{value:sE}},lh=`
uniform vec3 top,hor,hz,sunDir,moonDir,sunCol,lightDir,lightCol;
uniform float sunI,moonI,gI,night,cover,mist,skyT;
uniform sampler2D cloudTex;
float cdens(vec2 uv,float det){float d=texture2D(cloudTex,uv*.35).r*(1.-det);if(det>0.)d+=texture2D(cloudTex,uv*1.1+.37).g*det;return d;}
/* degradado + resplandor del crep\xFAsculo hacia el sol y cintur\xF3n rosado en el lado opuesto */
vec3 skyBase(vec3 d){
  float h=clamp(d.y,0.,1.);
  vec3 c=mix(hor,top,pow(h,.5));
  vec2 sa=normalize(sunDir.xz),da=normalize(d.xz+vec2(1e-5));
  float az=dot(sa,da);
  c+=hz*gI*(pow(max(az,0.),3.)*exp(-h*5.)*1.15+exp(-h*13.)*.22);
  c+=mix(hor,vec3(1.,.72,.86),.5)*gI*pow(max(-az,0.),2.)*exp(-h*8.)*.28;
  return c;
}
/* nubes: rgb = color, a = cobertura. Iluminadas por el sol (o la luna) con borde plateado hacia la luz.
   soft: bordes m\xE1s difusos \xB7 det: peso de la capa de detalle fino (el agua usa bordes suaves y sin detalle) */
vec4 cloudL(vec3 d,float soft,float det){
  float up=smoothstep(.03,.26,d.y);
  if(up<=0.)return vec4(0.);
  vec2 uv=d.xz/(d.y+.32)*.6+vec2(skyT*.0035,skyT*.0014);
  float dn=cdens(uv,det);
  float thr=mix(.60,.30,cover);
  float a=smoothstep(thr,thr+.17+soft,dn)*up;
  if(a<=.002)return vec4(0.);
  float dl=cdens(uv+normalize(lightDir.xz+vec2(1e-5))*.05,det);
  float lit=clamp(.62-(dl-dn)*7.,0.,1.);
  float core=smoothstep(thr+.1,thr+.42+soft,dn);
  vec3 amb=mix(top,hor,.5)*.6+vec3(.30,.30,.34)*(1.-night*.75);
  vec3 col=amb*(1.-core*.25)+lightCol*lit*(1.-core*.35)*.85;
  col+=lightCol*pow(max(dot(d,lightDir),0.),6.)*.38*(1.-core*.6);
  col=mix(col,hor*1.05,mist*.45);
  return vec4(col,a*(1.-mist*.35));
}
/* sol, luna y V\xEDa L\xE1ctea; cl = cobertura de nubes en ese punto (las nubes tapan los discos) */
vec3 celestial(vec3 d,float cl){
  vec3 c=vec3(0.);
  float sd=max(dot(d,sunDir),0.);
  c+=sunCol*(pow(sd,18.)*.40+pow(sd,200.)*.55)*sunI*(1.-cl*.5);
  c+=vec3(1.,.96,.86)*smoothstep(.9986,.9991,sd)*sunI*1.5*(1.-cl);
  float md=dot(d,moonDir);
  if(md>0.){
    vec3 mu=normalize(cross(moonDir,vec3(0.,1.,0.))),mv=cross(mu,moonDir);
    vec2 mp=vec2(dot(d,mu),dot(d,mv))/.052;float mr=length(mp);
    float maria=texture2D(cloudTex,mp*.22+.5).b;
    vec3 mc=mix(vec3(.90,.92,.99),vec3(.62,.68,.88),smoothstep(.42,.62,maria)*.6)*(1.-.22*mr*mr);
    c+=mc*smoothstep(1.,.86,mr)*moonI*(1.-cl)*.95;
    c+=vec3(.55,.62,.95)*(pow(md,40.)*.26+pow(md,400.)*.32)*moonI*(1.-cl*.6);
  }
  if(night>.02){
    vec3 mwN=normalize(vec3(.55,.35,.76));float bw=dot(d,mwN);
    float dust=texture2D(cloudTex,vec2(atan(d.z,d.x)*.4775,bw*1.7)).b;
    c+=vec3(.62,.60,.95)*exp(-bw*bw*14.)*(.35+.9*dust*dust)*.13*night*smoothstep(.04,.35,d.y)*(1.-cl);
  }
  return c;
}
/* lo que ve el agua al reflejar el cielo: degradado, nubes y un camino de luz amplio y suave (sin destellos) */
vec3 skyRefl(vec3 d){
  d.y=max(d.y,.02);
  vec3 c=skyBase(d);
  vec4 cl=cloudL(d,.2,0.);c=mix(c,cl.rgb,cl.a*.7);
  float sd=max(dot(d,sunDir),0.),md=max(dot(d,moonDir),0.);
  c+=sunCol*(pow(sd,60.)*.5+pow(sd,16.)*.18)*sunI*(1.-cl.a*.7);
  c+=vec3(.55,.62,.95)*(pow(md,90.)*.4+pow(md,20.)*.12)*moonI*(1.-cl.a*.6);
  return c;
}`;var cr=new q(new Jt(700,24,16),new $e({side:In,depthWrite:!1,fog:!1,uniforms:{...gn},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;${lh}
  void main(){vec3 d=normalize(vP);
   vec3 c=skyBase(d);
   vec4 cl=cloudL(d,0.,.3);
   c+=celestial(d,cl.a);
   c=mix(c,cl.rgb,cl.a);
   gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
   ${ko}
}`}));cr.renderOrder=-10;vt.add(cr);var Kf=hi(16769712,140),jf=hi(14673663,70);vt.add(Kf,jf);var dh=new jt,Ag=new Float32Array(450*3),Rg=new Float32Array(450*2),Cg=new Float32Array(450*3),Jf=i=>{let t=Math.sin(i*12.9898+78.233)*43758.5453;return t-Math.floor(t)};for(let i=0;i<450;i++){let t=Math.random()*6.283,e=Math.random()*.95+.05,n=Math.sqrt(1-e*e);Ag.set([Math.cos(t)*n*680,e*680,Math.sin(t)*n*680],i*3);let s=Jf(i+.5),r=s>.93?1:0;Rg.set([1.8+s*1.4+r*1.1,.35+.65*Jf(i+101.7)],i*2);let o=Jf(i+203.1);Cg.set([.86+.14*o,.9+.1*(1-o),1],i*3)}dh.setAttribute("position",new kt(Ag,3));dh.setAttribute("ab",new kt(Rg,2));dh.setAttribute("tc",new kt(Cg,3));var hh={...gn,pr:{value:1},time:{value:0},calm:{value:0}},Ig=new Ci(dh,new $e({transparent:!0,depthWrite:!1,fog:!1,uniforms:hh,vertexShader:`attribute vec2 ab;attribute vec3 tc;uniform float pr,time,calm;varying vec3 vC;varying float vA;${lh}
  void main(){vec3 d=normalize(position);
   float h=smoothstep(0.,.22,d.y);
   float tw=1.-(1.-calm)*.18*(.5+.5*sin(time*(.35+ab.y*.5)+ab.x*40.));
   float occ=1.-cloudL(d,0.,.3).a;
   vA=clamp(night*1.1,0.,1.)*h*occ*(.8+.2*ab.y)*tw*(1.-moonI*pow(max(dot(d,moonDir),0.),30.));
   vC=tc;gl_PointSize=ab.x*pr;
   gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 vC;varying float vA;
  void main(){float r=length(gl_PointCoord-.5)*2.;float a=smoothstep(1.,.15,r)*vA;if(a<.004)discard;gl_FragColor=vec4(vC,a);
#include <colorspace_fragment>
}`}));vt.add(Ig);var Zi=(i,t,e,n,s,r,o,a,l,c)=>({t:i,top:new ct(t),hor:new ct(e),fog:new ct(n),sun:new ct(s),hi:r,si:o,night:a,hg:new ct(l),hz:new ct(c)}),ch=[Zi(0,"#1d2358","#4f4a88","#5b5a92","#9db0ff",.6,.25,1,"#4a5a70","#6a5aa8"),Zi(.06,"#2d3a7c","#9a7fb0","#8c80a8","#b9b8ff",.8,.3,.8,"#56627a","#b98ac0"),Zi(.115,"#8fa4d8","#f8c4b8","#efcfcf","#ffd2a8",1.35,.52,.3,"#c4ccc0","#ff9f7a"),Zi(.2,"#86b2e2","#e9dcd6","#e2dcdc","#ffe8c4",1.7,1,.04,"#c8d2c0","#ffcfa0"),Zi(.37,"#80b9e0","#d6edf0","#cfe7ea","#fff3d6",1.9,1.3,0,"#c8d6c0","#fff0d0"),Zi(.52,"#82b0dc","#e8e6d8","#dfe2d6","#fff0cc",1.8,1.15,0,"#c8d0b8","#ffe0b0"),Zi(.595,"#8e88c8","#fbc79e","#ecc3b6","#ffbf8a",1.5,.85,.06,"#c8c4c0","#ffb070"),Zi(.645,"#5f55a8","#f09a96","#c79aa8","#ff9b86",1.15,.5,.3,"#8a8aa0","#ff7f7a"),Zi(.7,"#2c3278","#8a66a6","#6f66a0","#a6b0ff",.85,.34,.7,"#58607e","#a874b8"),Zi(.77,"#1f2552","#4a4c88","#3b3f78","#9db0ff",.62,.28,1,"#4a5a70","#5a56a0"),Zi(1,"#1d2358","#4f4a88","#5b5a92","#9db0ff",.6,.25,1,"#4a5a70","#6a5aa8")],ce={top:new ct,hor:new ct,fog:new ct,sun:new ct,hg:new ct,hz:new ct,hi:1,si:1,night:0};function rE(i){let t=0;for(;t<ch.length-2&&i>ch[t+1].t;)t++;let e=ch[t],n=ch[t+1],s=Ae((i-e.t)/(n.t-e.t));s=s*s*(3-2*s),["top","hor","fog","sun","hg","hz"].forEach(r=>ce[r].copy(e[r]).lerp(n[r],s)),ce.hi=lr(e.hi,n.hi,s),ce.si=lr(e.si,n.si,s),ce.night=lr(e.night,n.night,s)}var Yo=new D,Zo=new D,oE=new D,$f=new ct("#a9b8ff"),wg=U.t,Tg=-9999,uh=!1;function Pg(i,t){let e=performance.now(),n=Math.min(.1,Math.max(0,U.t-wg));if(wg=U.t,e-Tg>1e3){Tg=e;try{uh=!!(window.UX&&UX.calm&&UX.calm())}catch{uh=!1}}rE(ot.tod);let s=Math.sin(Math.PI*2*(ot.tod-.12));Yo.set(.25,s,-.9).normalize(),Zo.set(-.25,-s*.9+.05,-.9).normalize();let r=Yo.y,o=Zo.y;vt.fog.color.copy(ce.fog),gn.skyT.value+=n*(uh?.2:1),gn.top.value.copy(ce.top),gn.hor.value.copy(ce.hor),gn.hz.value.copy(ce.hz),gn.sunDir.value.copy(Yo),gn.moonDir.value.copy(Zo),gn.sunCol.value.copy(ce.sun),gn.sunI.value=de(-.08,.04,r),gn.moonI.value=de(-.03,.1,o)*(1-.8*de(-.05,.15,r)),gn.gI.value=de(-.34,-.02,r)*(1-de(0,.42,r)),gn.night.value=ce.night;{let u=de(-.3,.1,r),h=.3*gn.moonI.value*(1-u);gn.lightDir.value.copy(Yo).multiplyScalar(u).addScaledVector(Zo,h+.001).normalize(),gn.lightCol.value.setRGB(ce.sun.r*u+$f.r*h,ce.sun.g*u+$f.g*h,ce.sun.b*u+$f.b*h)}hh.pr.value=bi.getPixelRatio(),hh.time.value=gn.skyT.value,hh.calm.value=uh?1:0;let a=s>0,l=a?Yo:Zo;Ur.color.copy(ce.hor).lerp(ce.top,.4),Ur.groundColor.copy(ce.hg),Ur.intensity=ce.hi,Ds.color.copy(ce.sun),Ds.intensity=ce.si,Ds.position.copy(l).multiplyScalar(100).add(oE.set(i,0,t)),Ds.target.position.set(i,0,t),Ds.target.updateMatrixWorld(),cr.position.set(i,0,t),Kf.position.set(i,0,t).addScaledVector(Yo,640),jf.position.set(i,0,t).addScaledVector(Zo,640),Kf.material.opacity=Ae(s*4+.2,0,1)*.6,jf.material.opacity=Ae(-s*4,0,1)*.55,Ig.position.set(i,0,t);let c=ur.material.uniforms;c.lDir.value.copy(l),c.lCol.value.copy(ce.sun).multiplyScalar(Ae(a?s*3:-s*1.5,0,1)),ot.glowK=Ae(ce.night*1.2+.25,0,1)}var fh=i=>i<.1?"Madrugada":i<.2?"Amanecer":i<.5?"D\xEDa":i<.68?"Atardecer":i<.92?"Noche":"Madrugada",ur=new q(new un(1e3,1e3),new $e({uniforms:{...gn,t:{value:0},deep:{value:new ct("#5a8f9c")},shallow:{value:new ct("#a3c8c4")},fog:{value:new ct},lDir:{value:new D(0,1,0)},lCol:{value:new ct},fogN:{value:22},fogF:{value:250},fogSunDir:jn.sunDir,fogSunCol:jn.sunCol,fogMisc:jn.misc},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`varying vec3 vW;uniform float t,fogN,fogF;uniform vec3 deep,shallow,fog,lDir,lCol,fogSunDir,fogSunCol;uniform vec4 fogMisc;
  ${lh}
  float hh(vec2 q){return fract(sin(dot(q,vec2(127.1,311.7)))*43758.5453);}
  float wn(vec2 q){vec2 i=floor(q),f=fract(q);f=f*f*(3.-2.*f);return mix(mix(hh(i),hh(i+vec2(1,0)),f.x),mix(hh(i+vec2(0,1)),hh(i+vec2(1,1)),f.x),f.y);}
  void main(){
    vec2 p=vW.xz;
    float dx=cos(p.x*.35+t*.8)*.05+cos(p.x*.9+p.y*.6-t*1.3)*.03+cos(p.y*.25+t*.5)*.03+cos(p.x*2.1+p.y*1.3+t*1.9)*.012;
    float dz=cos(p.y*.4+t*.7)*.05+cos(p.y*.8-p.x*.5+t*1.1)*.03+cos(p.x*.3-t*.6)*.03+cos(p.y*2.3-p.x*1.1+t*1.7)*.012;
    vec3 n=normalize(vec3(-dx*.6,1.,-dz*.6));
    vec3 v=normalize(cameraPosition-vW);float dist=length(cameraPosition-vW);
    float fr=pow(1.-max(dot(n,v),0.),3.);
    vec3 base=mix(deep,shallow,.5+.5*sin(p.x*.05+p.y*.04+t*.1));
    base*=mix(1.,.45,night);
    float lod=1.-smoothstep(8.,70.,dist);   /* detalle fino de superficie: baja amplitud, media cero y desvanecido con la distancia (sin parpadeo) */
    base*=1.+(sin(p.x*3.1+p.y*2.3+t*.9)*sin(p.y*2.7-p.x*1.9-t*.7)*.045+sin(p.x*7.3-p.y*5.1+t*.6)*sin(p.y*6.1+p.x*4.7-t*.5)*.02)*lod;
    vec3 refl=skyRefl(reflect(-v,normalize(vec3(n.x*.3,1.,n.z*.3))))*.86;   /* espejo de lago calmo: el reflejo del cielo sigue solo una fracci\xF3n de las ondas (evita parpadeo al avanzar) */
    float st=wn(vec2(p.x*.07+t*.02,p.y*1.5+t*.25)),st2=wn(vec2(p.x*.16-t*.03,p.y*3.1-t*.4));
    float streak=smoothstep(.62,.9,st)*.55+smoothstep(.66,.92,st2)*.4;
    float dk=smoothstep(.55,.2,wn(vec2(p.x*.05,p.y*.9+t*.15)));
    base=mix(base,base*.78,dk*.6);
    vec3 c=mix(base,refl,clamp(fr*.9+.26,0.,1.));
    c=mix(c,mix(hor,vec3(1.),.55),streak*(1.-night*.7)*.38);
    float sp=smoothstep(.9,1.,wn(p*2.6+vec2(t*.5,-t*.3)));c+=lCol*sp*.38;   /* destellos del agua suaves a prop\xF3sito (WCAG 2.3.1) */
    vec3 h=normalize(lDir+v);c+=lCol*pow(max(dot(n,h),0.),90.)*.6;
    float tF=clamp((dist-fogN)/(fogF-fogN),0.,1.);float cF=tF*tF*(3.-2.*tF);float ffF=mix(cF,1.,smoothstep(.82,1.,tF));
    {vec2 fwp=vW.xz;float ftt=fogMisc.w*.06;float fpn=.5+.3*sin(fwp.x*.021+sin(fwp.y*.017+ftt)*1.7+ftt*.7)+.2*sin(fwp.y*.037-fwp.x*.011-ftt*1.3);
     ffF=clamp(ffF*mix(1.,.5+1.*fpn,fogMisc.z*(1.-smoothstep(.82,1.,tF))),0.,1.);}
    float scF=pow(max(dot(normalize(vW-cameraPosition),fogSunDir),0.),5.)*fogMisc.x*ffF;
    c=mix(c,mix(fog,pow(fogSunCol,vec3(2.2)),clamp(scF,0.,.8)),ffF);
    gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
    ${ko}
}`}));ur.rotation.x=-Math.PI/2;vt.add(ur);function Ls(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new jt,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Dg(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let m=Dg(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function Dg(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new kt(o,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let d=0,f=u.count;d<f;d++)for(let m=0;m<e;m++){let x=u.getComponent(d,m);a.setComponent(d+h,m,x)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var Qf=new Float32Array(ei*ni*3),tp=new Float32Array(ei*ni*3),hr=new jt;hr.setAttribute("position",new kt(Qf,3));hr.setAttribute("color",new kt(tp,3));{let i=new Uint16Array((ei-1)*(ni-1)*6),t=0;for(let e=0;e<ni-1;e++)for(let n=0;n<ei-1;n++){let s=e*ei+n,r=s+1,o=s+ei,a=o+1;i.set([s,r,o,r,a,o],t),t+=6}hr.setIndex(new kt(i,1))}var Lg=new q(hr,new ge({vertexColors:!0,gradientMap:we}));Lg.frustumCulled=!1;vt.add(Lg);var Ng=new ct("#eadcb9"),Ug=new ct("#b6dca3"),Fg=new ct("#8fc79b"),Bg=new ct("#bdd6c8"),Og=new ct("#d3cce9"),zg=new ct("#c8d6c0"),Hg=new ct("#d9b45f"),kg=new ct("#c8964a"),Gg=new ct("#f6c9d8"),Vg=new ct("#d9d2bf"),qe=new ct,fl=1900;function Wg(i,t,e,n){i=i.index?i.toNonIndexed():i;let s=i.attributes.uv;for(let c=0;c<s.count;c++)s.setXY(c,s.getX(c)*t[0],s.getY(c)*t[1]);i.computeBoundingBox();let r=i.boundingBox.min.y,o=i.boundingBox.max.y,a=i.attributes.position,l=new Float32Array(a.count*3);for(let c=0;c<a.count;c++){let u=e+(n-e)*((a.getY(c)-r)/(o-r||1));l[c*3]=l[c*3+1]=l[c*3+2]=u}return i.setAttribute("color",new kt(l,3)),i}var Xg=Ls([[2.1,2.4,.7],[1.8,2.3,1.9],[1.45,2.2,3.1],[1.1,2,4.3],[.7,1.8,5.4]].map(([i,t,e])=>Wg(new Le(i,t,11,2).translate(0,e+t/2,0),[4,2],.64,1.26)).map(i=>(i.deleteAttribute("normal"),i)));Xg.computeVertexNormals();var qg=Ls([[1.9,0,4.3,0],[1.4,1.3,4.9,.5],[1.35,-1.2,4.7,-.6],[1.2,.2,5.7,.3],[1,-.6,5.2,1.2],[1.05,.9,4.2,-1.1],[.8,1.7,4.1,.9]].map(([i,t,e,n])=>{let s=new Sn(i,1);return s.translate(t,e,n),s.deleteAttribute("normal"),Wg(s,[3,3],.7,1.3)}));qg.computeVertexNormals();var aE=()=>new ge({gradientMap:we,color:16777215,vertexColors:!0,map:Ie("leaf")}),pl=new Un(Xg,new ge({gradientMap:we,color:16777215,vertexColors:!0,map:Ie("needle")}),fl),Fr=new Un(qg,aE(),fl),ml=new Un(new ye(.19,.36,4.2,9,3).translate(0,2.1,0),new ge({gradientMap:we,color:9071196,map:Ie("bark")}),fl),gl=new Un(new yi(.7,10).rotateX(-Math.PI/2),new ge({gradientMap:we,color:16777215}),500),xl=new Un(new Sn(.28,0).translate(0,.2,0),new ge({gradientMap:we,color:16777215}),160);[pl,Fr,ml,gl,xl].forEach(i=>{i.frustumCulled=!1,vt.add(i)});var ep={value:0};function lE(i){return i.onBeforeCompile=t=>{t.uniforms.uSw=ep,t.vertexShader=`uniform float uSw;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 wp0=modelMatrix*instanceMatrix*vec4(position,1.);float hh=clamp(position.y/1.8,0.,1.);transformed.x+=sin(uSw*1.6+wp0.x*.7+wp0.z*.5)*.2*hh*hh;transformed.z+=cos(uSw*1.3+wp0.z*.6)*.1*hh*hh;`)},i}var np=(()=>{let i=[];for(let t=0;t<14;t++){let e=t/14*6.28+tt(t,1),n=.8+tt(t,2)*1.7,s=.05,r=Math.cos(e)*.25*tt(t,3),o=Math.sin(e)*.25*tt(t,3),a=(tt(t,4)-.5)*.9,l=new jt,c=new Float32Array([-s,0,0,s,0,0,a*.5-s*.5,n*.6,0,a*.5+s*.5,n*.6,0,a,n,0]);l.setAttribute("position",new kt(c,3)),l.setIndex([0,1,2,1,3,2,2,3,4]),l.computeVertexNormals();let u=new Float32Array(15);[[.28,.2,.12],[.28,.2,.12],[.62,.5,.24],[.62,.5,.24],[.92,.78,.4]].forEach((d,f)=>u.set(d,f*3)),l.setAttribute("color",new kt(u,3)),l.rotateY(e),l.translate(r,0,o),i.push(l)}return Ls(i)})(),Ns=new Un(np,lE(new ge({gradientMap:we,color:16777215,vertexColors:!0,side:Zt})),1400),cE=(()=>{let i=[],t=new ye(.14,.3,4.2,6).translate(0,2.1,0),e=new Float32Array(t.attributes.position.count*3).fill(.3);return t.setAttribute("color",new kt(e,3)),i.push(t),[[0,4.3,0,2.8],[1.6,3.7,.6,1.9],[-1.5,3.3,-.8,1.7]].forEach(([n,s,r,o])=>{let a=new Jt(1,9,5).toNonIndexed();a.scale(o,o*.28,o),a.translate(n,s,r);let l=a.attributes.position,c=new Float32Array(l.count*3);for(let u=0;u<l.count;u++){let h=.62+.4*Ae((l.getY(u)-s)/(o*.28)*.5+.5);c[u*3]=h*.9,c[u*3+1]=h,c[u*3+2]=h*.92}a.setAttribute("color",new kt(c,3)),a.deleteAttribute("uv"),i.push(a)}),i[0]=i[0].toNonIndexed(),i[0].deleteAttribute("uv"),Ls(i)})(),yl=new Un(cE,new ge({gradientMap:we,color:16777215,vertexColors:!0}),400);[Ns,yl].forEach(i=>{i.frustumCulled=!1,vt.add(i)});var Yg=["#5d7a64","#4f6b5c","#6a8a6e","#566f5d"],ph=["#ffffff","#f0e0b0","#e6c98a","#d6b070"],Qe=new me,En=new pn,wn=new D,hn=new D,Us=new D(0,1,0),Zg=new ct(On.gnd),Jg=On.pine,$g=On.blos,Kg=qi.blos,jg=qi.bblos,Jo=new Un(new Sn(1,2).scale(1,.72,1).translate(0,.45,0),new ge({gradientMap:we,color:16777215,map:Ie("leaf")}),1700);Jo.frustumCulled=!1;vt.add(Jo);var Qg=["#6fa383","#7fb592","#5f957a","#8cc09a"],o3=On.bblos,uE=(()=>{let i=new ye(.11,.15,1,5,8,!0).translate(0,.5,0).toNonIndexed(),t=i.attributes.position,e=new Float32Array(t.count*3);for(let n=0;n<t.count;n++){let s=t.getY(n),r=Math.round(s*8)%3===0?.68:1;e[n*3]=r,e[n*3+1]=r,e[n*3+2]=r*.95}return i.setAttribute("color",new kt(e,3)),i.deleteAttribute("uv"),i.computeVertexNormals(),i})(),vl=new Un(uE,new ge({gradientMap:we,color:16777215,vertexColors:!0}),2e3),_l=new Un(new Sn(1,0).scale(1,.5,1),new ge({gradientMap:we,color:16777215}),2e3);[vl,_l].forEach(i=>{i.frustumCulled=!1,vt.add(i)});var tx=["#8fc58a","#9fd194","#7bb87f","#a9d89a"],ex=["#b7e08f","#a4d68a","#c4e89b","#92cc86"],ip=On.brd,nx=new ct("#9ccf8a");var Ml={a:1e9,b:1e9},mh=new Float32Array(ei*ni*3),gh=new Float32Array(ei*ni*3),ix=new Map;function rp(i){let t=ix.get(i);if(!t){let e=i.instanceMatrix.array.length;t={m:new Float32Array(e),c:new Float32Array(e/16*3)},ix.set(i,t)}return t}var Li=(i,t,e)=>{e.toArray(rp(i).m,t*16)},ds=(i,t,e)=>{let n=rp(i);n.hc=1;let s=n.c;s[t*3]=e.r,s[t*3+1]=e.g,s[t*3+2]=e.b};function hE(i,t){let e=rp(i);i.instanceMatrix.array.set(e.m.subarray(0,t*16)),i.instanceMatrix.needsUpdate=!0,e.hc&&(i.instanceColor||i.setColorAt(0,qe),i.instanceColor.array.set(e.c.subarray(0,t*3)),i.instanceColor.needsUpdate=!0),i.count=t}function*dE(i,t){let e=[],n=i-ei/2*hs,s=t-60,r=0,o=0,a=0,l=0,c=0,u=0,h=0,d=0;for(let x=0;x<ni;x++){x%5===0&&(yield);let g=s+x*ii,p=Xo(g),y=Nr(g),S=qo(g);for(let _=0;_<ei;_++){let b=n+_*hs,M=ti(b,g),T=(x*ei+_)*3;mh[T]=b,mh[T+1]=M,mh[T+2]=-g;let v=Math.abs(b-qt(g))-fe(g),E=rn(b*.05,g*.05),R=(tt(_+n,x)-.5)*.05;if(v<0)qe.copy(zg);else{if(qe.copy(Ug).lerp(Fg,E),qe.lerp(Ng,1-de(.5,3.5,v)),qe.lerp(Bg,de(6,13,M)*.8),qe.lerp(Og,de(13,24,M)),p>0&&qe.lerp(nx,p*de(0,5,v)*.65),On.gk&&qe.lerp(Zg,On.gk*de(.4,3,v)*(1-p*.6)),y>.05){let I=rn(b*.11+3,g*.11+7);I>.5&&qe.lerp(Gg,y*de(.5,.8,I)*.42*de(.4,3,v))}{let I=Sg(b,g);I>0&&qe.lerp(Vg,I*.9)}{let I=rn(b*.03+50,g*.03+20),L=de(.5,.72,I)*de(.4,2.5,v)*(1-de(9,26,v));L>0&&qe.lerp(rn(b*.2,g*.2)>.5?Hg:kg,L*.85)}}if(gh[T]=qe.r+R,gh[T+1]=qe.g+R,gh[T+2]=qe.b+R,v>5&&M<17&&o<fl&&!qf(g,v)&&!Xf(b,g)){let I=tt(b*3.1,g*1.7),L=.05*(.5+rn(b*.03+9,g*.03))*(v<34?.75:1)+(v<36?(.05+.09*S)*(1-v/44):0)*(.6+.8*rn(b*.07,g*.07))+(v<60?y*.11*(1-v/70):0);if(I<L*(1-p*.92)){let P=(tt(b,g)-.5)*hs*.9,C=(tt(g,b)-.5)*ii*.9,F=.8+tt(b+4,g+1)*.9;wn.set(b+P,ti(b+P,g+C)-.1,-(g+C)),En.setFromAxisAngle(Us,tt(g,b)*6.28);let V=tt(b*.7,g*.3);v<60&&V<.04+y*.95?(hn.set(F,F,F),Qe.compose(wn,En,hn),Li(Fr,a,Qe),Li(ml,a,Qe),ds(Fr,a,qe.set((V<y*.95?Kg:$g)[tt(b,g+3)*4|0])),a++):tt(b*1.1,g*1.7)<.3?(hn.set(F*1.05,F*(.9+tt(g,5)*.5),F*1.05),Qe.compose(wn,En,hn),Li(Fr,a,Qe),Li(ml,a,Qe),ds(Fr,a,qe.set(ip[tt(b,g+7)*ip.length|0])),a++):tt(b*1.9,g*.8)>.55&&c<400?(hn.set(F*1.2,F*1.2,F*1.2),Qe.compose(wn,En,hn),Li(yl,c,Qe),ds(yl,c,qe.set(Yg[tt(b+5,g)*4|0])),c++):(hn.set(F,F*(.9+tt(g,3)*1.1),F),Qe.compose(wn,En,hn),Li(pl,l,Qe),ds(pl,l,qe.set(Jg[tt(b+2,g)*4|0])),l++),o++}}}}for(let x=0;x<ni;x++){x%5===0&&(yield);let g=s+x*ii,p=Nr(g),y=Xo(g);for(let S=0;S<ei;S+=1){let _=n+S*hs,b=Math.abs(_-qt(g))-fe(g);if(b<2.2||b>55||h>=1700||qf(g,b)||Xf(_,g)||ti(_,g)>15||tt(_*2.3+1,g*1.3)>(.05+p*.2)*(1-y*.8))continue;let v=(tt(_,g+9)-.5)*hs,E=(tt(g,_+9)-.5)*ii,R=.7+tt(_+8,g)*.9+p*.3;wn.set(_+v,ti(_+v,g+E)-.1,-(g+E)),En.setFromAxisAngle(Us,tt(g,_)*6.28),hn.set(R*1.2,R,R*1.1),Qe.compose(wn,En,hn),Li(Jo,h,Qe),ds(Jo,h,qe.set(p>.25&&tt(_,g+5)<.55?jg[tt(_,g)*4|0]:Qg[tt(g,_+2)*4|0])),h++}}for(let x=0;x<ni;x++){x%5===0&&(yield);let g=s+x*ii,p=Xo(g);if(!(p<.02))for(let y=0;y<ei;y++){let S=n+y*hs,_=qt(g),b=Math.abs(S-_)-fe(g);if(!(b<.3||b>26||d>=1990))for(let M=0;M<2;M++){if(tt(S*3.7+M*5,g*2.9+M)>p*(1.05-b*.012))continue;let T=(tt(S+M,g+3)-.5)*hs,v=(tt(g+M,S+3)-.5)*ii,E=S+T,R=g+v,I=11+tt(E,R)*12,L=.8+tt(R,E)*.6,P=.05+tt(E*2,R)*.14,C=E>_?1:-1,F=ti(E,R)-.3;wn.set(E,F,-R),En.setFromAxisAngle(new D(0,0,1),C*P),hn.set(L,I,L),Qe.compose(wn,En,hn),Li(vl,d,Qe),ds(vl,d,qe.set(tx[tt(E,R+1)*4|0]));let V=E-C*Math.sin(P)*I,z=F+Math.cos(P)*I;wn.set(V,z,-R),En.identity();let $=1.5+tt(R,E+4)*1.6;hn.set($,$,$),Qe.compose(wn,En,hn),Li(_l,d,Qe),ds(_l,d,qe.set(ex[tt(E+2,R)*4|0])),d++}}}e.push([vl,d],[_l,d]),e.push([Jo,h]);for(let x=0;x<ni;x++){x%5===0&&(yield);let g=s+x*ii;for(let p=0;p<4;p++){let y=p%2?1:-1;if(tt(g*.53,p+3)>.62||u>=1400)continue;let S=p>1&&tt(g,p+9)>.6,_=fe(g)+y*0+(S?-(1.5+tt(g,p+1)*4):-.3+tt(g,p+2)*3.4),b=qt(g)+y*_,M=-(g+(tt(g,p)-.5)*ii);if(S&&Math.abs(b-qt(g))>fe(g)-1.5)continue;let T=.7+tt(g+p,7)*.9;wn.set(b,Math.max(-.2,ti(b,g)-.15),M),En.setFromAxisAngle(Us,tt(g,p+5)*6.28),hn.set(T,T*(.8+tt(g,p+6)*.7),T),Qe.compose(wn,En,hn),Li(Ns,u,Qe),ds(Ns,u,qe.set(ph[tt(g,p+4)*4|0])),u++}}e.push([Ns,u],[yl,c]),e.push([pl,l],[Fr,a],[ml,a]);let f=0,m=0;for(let x=0;x<ni;x++){x%5===0&&(yield);let g=s+x*ii;for(let p=0;p<3;p++){if(tt(g*.37,p+7)>.5||f>=500)continue;let y=(tt(g+p,5)*2-1)*(fe(g)-2.2),S=qt(g)+y;wn.set(S,.03,-(g+(tt(g,p)-.5)*ii)),En.setFromAxisAngle(Us,tt(g,p+2)*6.28);let _=.7+tt(g+p,9)*.9;hn.set(_,1,_),Qe.compose(wn,En,hn),Li(gl,f,Qe),ds(gl,f,qe.set(tt(g,p)>.5?"#a8dba9":"#96cfa0")),f++,tt(g,p+11)>.72&&m<160&&(Qe.compose(wn.setY(.05),En,hn.set(1,1,1)),Li(xl,m,Qe),ds(xl,m,qe.set(tt(g,p+1)>.4?"#f7b9cf":"#fbe39a")),m++)}}e.push([gl,f],[xl,m]);for(let[x,g]of e)hE(x,g);Qf.set(mh),tp.set(gh),hr.attributes.position.needsUpdate=!0,hr.attributes.color.needsUpdate=!0,hr.computeVertexNormals()}var Br=null,sx=0,sp=!1;function rx(i,t,e){let n=Math.floor(-t/(ii*hl))*ii*hl,s=Math.round(i/(hs*hl))*hs*hl;if(!Br&&(n!==Ml.b||s!==Ml.a)){let r=!sp||Math.abs(n-Ml.b)>150||Math.abs(s-Ml.a)>150;if(Ml={a:s,b:n},Br=dE(s,n),sx=n,r){for(;!Br.next().done;);e(n),Br=null,sp=!0}}if(Br){let r=performance.now(),o;do o=Br.next();while(!o.done&&performance.now()-r<3);o.done&&(e(sx),Br=null,sp=!0)}}var ap=140,ox=[],lp=new jt,xh=new Float32Array(ap*3);for(let i=0;i<ap;i++)ox.push([Math.random()*80-40,Math.random()*3+.4,Math.random()*80-50,Math.random()*6.28]);lp.setAttribute("position",new kt(xh,3));var op=new Gi({color:16773792,size:.35,map:si,transparent:!0,opacity:0,blending:Vn,depthWrite:!1}),yh=new Ci(lp,op);yh.frustumCulled=!1;vt.add(yh);function ax(i){if(op.opacity=Ae(i*1.3-.2,0,.9),yh.visible=op.opacity>.01,yh.visible){for(let t=0;t<ap;t++){let e=ox[t],n=U.t*.4+e[3],s=Math.sin(U.psi),r=-Math.cos(U.psi);xh[t*3]=U.px+e[0]+Math.sin(n*2.1+t)*1.5,xh[t*3+1]=e[1]+Math.sin(n*3+t)*.4,xh[t*3+2]=U.pz+e[2]+Math.cos(n*1.7+t)*1.5}lp.attributes.position.needsUpdate=!0}}var on=Ot,Ne=new Gt;vt.add(Ne);var Ko=1.4,up=-3.4,fx=26,Mh=[[0,0],[.3,.03],[.62,.1],[.88,.3],[1,.62],[1.04,.9],[1.06,1]],lx=Mh.length,El=i=>.9*(i<.3?.62+.14*Math.sin(i/.3*Math.PI/2):Math.max(.03,.76*Math.pow(Math.max(0,1-Math.pow((i-.3)/.7,2.2)),.65))),zr=i=>.46+.14*Math.pow(1-i,3)+.64*Math.pow(Math.max(0,(i-.55)/.45),2.6),hp=i=>-.2+.34*Math.pow(Math.max(0,(i-.6)/.4),2)+.08*Math.pow(1-i,2),$o=i=>Ko+(up-Ko)*i;function bl(i,t){let e=El(i),n=zr(i),s=hp(i),r=[],o=(a,l)=>t?[l*(a[0]*e*.94-(a[0]>0?.045:0)),s+.06+a[1]*(n-s-.06)]:[l*a[0]*e,s+a[1]*(n-s)];for(let a=lx-1;a>=1;a--)r.push(o(Mh[a],-1));r.push(o(Mh[0],1));for(let a=1;a<lx;a++)r.push(o(Mh[a],1));return r}function vh(i,t){let e=i[0].pts.length,n=[],s=[],r=[],o=0;i.forEach((l,c)=>{c&&(o+=Math.abs(l.z-i[c-1].z));let u=0;l.pts.forEach((h,d)=>{if(d){let f=l.pts[d-1];u+=Math.hypot(h[0]-f[0],h[1]-f[1])}n.push(h[0],h[1],l.z),s.push(o*t,u*t)})});for(let l=0;l<i.length-1;l++)for(let c=0;c<e-1;c++){let u=l*e+c,h=u+1,d=u+e,f=d+1;r.push(u,d,h,h,d,f)}let a=new jt;return a.setAttribute("position",new se(n,3)),a.setAttribute("uv",new se(s,2)),a.setIndex(r),a.computeVertexNormals(),a}var Sl=[...Array(fx+1).keys()],Fs=i=>i/fx,cx=new ge({gradientMap:we,color:10250824,emissive:2759184,map:Ie("plank"),side:Zt}),fE=new ge({gradientMap:we,color:12159586,emissive:2759184,map:Ie("plank"),side:Zt}),pE=on(7227956,{map:Ie("wood")}),cp=on(14268812,{map:Ie("woodV")}),ux=on(13146740,{map:Ie("plank"),side:Zt});{Ne.add(new q(vh(Sl.map(n=>({z:$o(Fs(n)),pts:bl(Fs(n),!1)})),.8),cx)),Ne.add(new q(vh(Sl.map(n=>({z:$o(Fs(n)),pts:bl(Fs(n),!0)})),.8),fE)),[-1,1].forEach(n=>{let s=Sl.map(r=>{let o=bl(Fs(r),!1),a=bl(Fs(r),!0),l=n<0?0:o.length-1;return{z:$o(Fs(r)),pts:[o[l],a[l]]}});Ne.add(new q(vh(s,.8),cp))});{let n=bl(0,!1),s=[0,(hp(0)+zr(0))/2,Ko],r=[];n.forEach(a=>s.push(a[0],a[1],Ko));for(let a=1;a<n.length;a++)r.push(0,a,a+1);let o=new jt;o.setAttribute("position",new se(s,3)),o.setIndex(r),o.computeVertexNormals(),Ne.add(new q(o,cx))}[-1,1].forEach(n=>{let s=new js(Sl.map(r=>{let o=Fs(r);return new D(n*El(o)*1.06,zr(o)+.012,$o(o))}));Ne.add(new q(new Ha(s,50,.034,6,!1),cp))});{let n=Sl.map(r=>{let o=Fs(r),a=El(o)*.7,l=hp(o)+.22;return{z:$o(o),pts:[[-a,l],[a,l]]}}),s=vh(n,.8);Ne.add(new q(s,ux))}[[-1.55,.3],[-2.25,.4],[.55,.34],[-.55,.3]].forEach(([n,s])=>{let r=(Ko-n)/(Ko-up),o=El(r)*1.72,a=new q(new Fn(o,.045,.14),n===.55?ux:cp);a.position.set(0,s+.1,n),Ne.add(a)});let i=new q(new Kn(.2,.04,6,14),on(14271378));i.rotation.x=Math.PI/2,i.scale.setScalar(.7),i.position.set(.3,.3,-2.2),Ne.add(i);let t=i.clone();t.scale.setScalar(.6),t.position.set(.3,.34,-2.2),Ne.add(t),[.55,.7,.85].forEach(n=>{let s=$o(n),r=El(n)*1.06,o=zr(n),a=new q(new Kn(r*.55,.012,4,16,Math.PI),on(14271378));a.rotation.set(0,Math.PI/2,0),a.rotation.z=Math.PI,a.position.set(0,o-.2,s),a.scale.set(1,.5,1),Ne.add(a)});let e=new q(new Jt(.06,8,6),pE);e.position.set(0,zr(1)+.03,up+.02),Ne.add(e)}var px=[];{let i=on(9075550,{map:Ie("cloth")}),t=on(11045468,{map:Ie("woodV")});[[-.35,.4,-1.55,.34],[-.05,.38,-1.35,.28],[-.3,.36,-1.1,.26]].forEach(([s,r,o,a])=>{let l=new q(new Sn(a,1),i);l.scale.set(1.1,.65,1),l.position.set(s,r,o),Ne.add(l),px.push(l)});let e=new Gt;e.position.set(-.52,.46,-1.9),e.rotation.set(Math.PI/2,0,0),Ne.add(e);let n=new q(new ye(.025,.035,4.6,8),t);e.add(n);for(let s=-4;s<=4;s++){let r=new q(new Kn(.036-s*7e-4,.007,4,8),on(7297588));r.rotation.x=Math.PI/2,r.position.y=s*.5,e.add(r)}}var dr=new Gt;dr.position.set(0,1.46,-3.28);Ne.add(dr);var hx=on(6044970,{map:Ie("woodV")});{let i=new q(new ye(.028,.04,.95,6),hx);i.position.set(0,zr(.9)+.45,-2.95),Ne.add(i);let t=new q(new Kn(.2,.022,5,12,Math.PI*.55),hx);t.rotation.set(0,Math.PI/2,0),t.rotation.z=-.6,t.position.set(0,zr(.9)+.9,-3.05),Ne.add(t)}var wl=new q(new Jt(.15,16,12),new Ee({color:16769704}));wl.scale.set(1,1.3,1);wl.position.set(0,-.18,0);dr.add(wl);{let i=on(8010276);[-.17,-.09,0,.09,.17].forEach(n=>{let s=.15*Math.sqrt(Math.max(0,1-Math.pow(n/.195,2)))+.004,r=new q(new Kn(s,.0055,4,18),i);r.rotation.x=Math.PI/2,r.position.y=-.18+n,dr.add(r)}),[.215,-.215].forEach(n=>{let s=new q(new ye(.075,.075,.035,10),i);s.position.y=-.18+n,dr.add(s)});let t=new q(new ye(.006,.006,.2,3),i);t.position.y=.02,dr.add(t);let e=new q(new Le(.02,.1,6),on(12075822));e.position.y=-.45,dr.add(e)}var bh=hi(16762746,2.4);bh.position.set(0,-.18,0);dr.add(bh);var Sh=new qa(16763274,0,22,1.6);Sh.position.set(0,1.5,-2.8);Ne.add(Sh);function dx(){let i=new Gt,t=new ge({gradientMap:we,color:15716516,emissive:3811866}),e=new q(new ye(.022,.022,2.1,6),t);e.rotation.x=Math.PI/2,e.position.z=.9,i.add(e);let n=new q(new Fn(.2,.03,.62),new ge({gradientMap:we,color:15047302}));n.position.z=1.55,i.add(n);let s=new q(new Fn(.2,.04,.05),t);s.position.z=-.15,i.add(s);let r=new Gt;return r.add(i),Ne.add(r),r}var mx=[dx(),dx()],mE=[new D(-.7,.5,-.3),new D(.7,.5,-.3)],gE=[new D(-1.05,.55,-.9),new D(1.05,.55,-.9)],Bs=new Gt;Ne.add(Bs);Bs.position.set(0,.42,.55);Bs.scale.setScalar(1.3);var Xn=new Gt;Xn.position.y=.3;Bs.add(Xn);var ps=new Gt;ps.position.y=1;Xn.add(ps);var fs=new Gt;fs.position.y=.2;ps.add(fs);var gx=[];{let i=on(2837122,{map:Ie("cloth")}),t=on(7311300,{map:Ie("cloth")}),e=on(2765128,{map:Ie("cloth")}),n=on(14264706),s=on(14991998,{map:Ie("straw"),side:Zt}),r=on(11831882,{map:Ie("straw"),side:Zt}),o=on(2367786),a=on(12096591,{map:Ie("straw"),side:Zt}),l=on(9400122,{map:Ie("straw"),side:Zt}),c=on(11024940),u=on(14209212,{map:Ie("cloth")}),h=new q(new Jt(.5,16,12),e);h.scale.set(1.2,.42,.85),h.position.y=-.1,Bs.add(h),[-1,1].forEach(P=>{let C=new q(new Jt(.17,10,8),e);C.position.set(P*.5,-.02,-.3),Bs.add(C);let F=new q(new ye(.1,.12,.5,8),e);F.rotation.x=Math.PI/2,F.rotation.z=P*.15,F.position.set(P*.4,-.05,-.1),Bs.add(F);let V=new q(new Jt(.11,8,6),u);V.scale.set(.9,.6,1.4),V.position.set(P*.22,-.12,-.42),Bs.add(V)});let d=new q(new ye(.3,.4,.8,14),i);d.position.y=.42,Xn.add(d);let f=new q(new Kn(.37,.05,6,18),u);f.rotation.x=Math.PI/2,f.position.y=.1,Xn.add(f);let m=new q(new Jt(.06,6,5),u);m.position.set(.1,.1,-.37),Xn.add(m),[-1,1].forEach(P=>{let C=new q(new Fn(.1,.62,.04),t);C.position.set(P*.08,.5,-.33),C.rotation.z=P*.45,Xn.add(C)});let x=new q(new Jt(.44,14,10),i);x.scale.set(1,.45,.7),x.position.y=.78,Xn.add(x);let g=new q(new ye(.09,.1,.16,8),n);g.position.y=.95,Xn.add(g);let p=on(15921126,{side:Zt}),y=new q(new Cs(.07,.15,24),p);y.position.set(0,.55,.352),Xn.add(y);let S=new q(new ye(.385,.405,.07,16,1,!0),p);S.position.y=.07,Xn.add(S);let _=new q(new Kn(.15,.04,6,14),p);_.rotation.x=Math.PI/2,_.position.y=.9,Xn.add(_);let b=new q(new Jt(.21,16,12),n);b.position.y=.2,ps.add(b);let M=new q(new Jt(.22,16,10,0,Math.PI*2,0,Math.PI*.55),o);M.position.set(0,.2,.03),M.rotation.x=.45,ps.add(M);let T=new q(new Kn(.205,.03,6,18),p);T.rotation.x=Math.PI/2,T.position.y=.3,ps.add(T);let v=new q(new Jt(.07,8,6),o);v.position.set(0,.43,0),ps.add(v),[-1,1].forEach(P=>{let C=new q(new Jt(.022,6,4),o);C.position.set(P*.07,.2,-.195),ps.add(C)});let E=new q(new Le(.7,.4,32,1,!0),s);E.position.y=.12,fs.add(E),[.2,.38,.56,.74].forEach(P=>{let C=new q(new Kn(.7*P+.02,.009,4,32),r);C.rotation.x=Math.PI/2,C.position.y=.12+.2-.4*P+.002,fs.add(C)});let R=new q(new Le(.07,.07,8),r);R.position.y=.34,fs.add(R);let I=new q(new Kn(.695,.02,6,32),r);I.rotation.x=Math.PI/2,I.position.y=-.08,fs.add(I),[-1,1].forEach(P=>{let C=new q(new ye(.009,.009,.34,4),c);C.position.set(P*.17,-.2,.05),C.rotation.z=P*.12,fs.add(C)});let L=new q(new Jt(.03,6,5),c);L.position.set(0,-.34,-.16),fs.add(L),[-1,1].forEach(P=>{let C=new Gt;C.position.set(P*.42,.75,0),Xn.add(C);let F=new q(new ye(.1,.075,.6,10),i);F.position.y=-.3,C.add(F);let V=new q(new Jt(.085,10,8),n);V.position.y=-.63,C.add(V);let z=new q(new Kn(.082,.022,5,10),u);z.rotation.x=Math.PI/2,z.position.y=-.53,C.add(z),gx.push(C)})}var Hr=new Gt;Ne.add(Hr);{let i=on(12159574,{map:Ie("woodV")}),t=on(13602164,{map:Ie("plank")}),e=new q(new ye(.03,.03,2.1,6),i);e.rotation.x=Math.PI/2,e.position.z=1.05,Hr.add(e);let n=new q(new Fn(.22,.04,.55),t);n.position.z=2,Hr.add(n);let s=new q(new Fn(.2,.04,.05),i);s.position.z=-.03,Hr.add(s)}var Or=1,_h=0,xx=new D;function yx(){let i=Math.sin(U.t*.9)*.03+Math.sin(U.t*1.7)*.012;return Ne.position.set(U.px,i*.6,U.pz),Ne.rotation.set(0,-U.psi,-U.steer*.025+Math.sin(U.t*.7)*.008),Ne.updateMatrixWorld(!0),i}function vx(){mx.forEach((i,t)=>{let e=t?1:-1,n=Ae(U.steer*e,0,1),s=new D().copy(gE[t]);s.lerp(new D(e*1.25,-.1,-.9+Math.sin(U.t*1.3+t)*.08),n);let r=xx.copy(s).sub(mE[t]).normalize();i.quaternion.setFromUnitVectors(new D(0,0,1),r),i.position.copy(s).addScaledVector(r,-1.55)})}function _x(i){{let t=ot.camK>.45||ot.cineW>.15;if(Bs.visible=t,px.forEach(e=>e.visible=t),Hr.visible=t,mx.forEach(e=>e.visible=!t),t){U.steer>.2?Or=Math.min(1,Or+i*3):U.steer<-.2&&(Or=Math.max(-1,Or-i*3)),_h+=(U.steer-_h)*Math.min(1,i*2.2);let e=Math.sin(U.t*1.4);Xn.rotation.z=-U.steer*.2+Math.sin(U.t*.6)*.02,Xn.rotation.y=-U.steer*.28,Xn.rotation.x=.05+e*.012+Math.abs(U.steer)*.06,ps.rotation.y=-U.steer*.38+Math.sin(U.t*.35)*.08,ps.rotation.x=.04+Math.sin(U.t*.5)*.03,fs.rotation.z=(U.steer-_h)*.45,fs.rotation.x=-Math.abs(U.steer-_h)*.12;let n=xx.set(Or*.5,.8,.5),s=Math.abs(U.steer)>.2?1:0,o=new D(Or*(.7+s*.55),-.2,1.35+Math.sin(U.t*1.2)*.12*(1-s)+s*.1).clone().sub(n).normalize();Hr.quaternion.setFromUnitVectors(new D(0,0,1),o),Hr.position.copy(n);let a=[n.clone().addScaledVector(o,.75),n.clone()];Or<0&&a.reverse(),gx.forEach((l,c)=>{let u=l.getWorldPosition(new D),h=Ne.localToWorld(a[c].clone()),d=h.sub(u),f=d.length();l.parent.worldToLocal(h.copy(u).add(d));let m=h.sub(l.position);l.quaternion.setFromUnitVectors(new D(0,-1,0),m.clone().normalize()),l.scale.y=Ae(m.length()/.66,.7,1.5)})}}}var Eh=[];for(let i=0;i<28;i++){let t=new q(new Cs(.35,.42,28).rotateX(-Math.PI/2),new Ee({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.position.y=.04,t.userData.age=9,vt.add(t),Eh.push(t)}var xE=0,qn=(i,t)=>{let e=Eh[xE++%Eh.length];e.position.set(i,.04,t),e.userData.age=0};function Mx(i){Eh.forEach(t=>{if(t.userData.age<4){t.userData.age+=i;let e=t.userData.age/4;t.scale.setScalar(1+e*6),t.material.opacity=.35*(1-e)}else t.material.opacity=0})}var fr={steer:0,pitch:0};Ps.addEventListener("pointerdown",i=>{!ot.started||ot.X.photo||(ah(),Ps.setPointerCapture(i.pointerId),U.hold=!0,Sx(i),$t.resume())});Ps.addEventListener("pointermove",i=>{U.hold&&!ot.X.photo&&Sx(i)});var bx=()=>{U.hold=!1,fr.steer=0,fr.pitch=0};Ps.addEventListener("pointerup",bx);Ps.addEventListener("pointercancel",bx);function Sx(i){let t=(i.clientX/innerWidth-.5)*2,e=(i.clientY/innerHeight-.5)*2;fr.steer=Math.abs(t)<.1?0:Ae((t-Math.sign(t)*.1)*1.4,-1,1),fr.pitch=e}addEventListener("keydown",i=>{(i.code==="Space"||i.code==="ArrowUp"||i.code==="KeyW")&&(U.key.up=!0,i.preventDefault()),(i.code==="ArrowLeft"||i.code==="KeyA")&&(U.key.l=!0),(i.code==="ArrowRight"||i.code==="KeyD")&&(U.key.r=!0)});addEventListener("keyup",i=>{(i.code==="Space"||i.code==="ArrowUp"||i.code==="KeyW")&&(U.key.up=!1),(i.code==="ArrowLeft"||i.code==="KeyA")&&(U.key.l=!1),(i.code==="ArrowRight"||i.code==="KeyD")&&(U.key.r=!1)});var Ji=["Puente de madera","Torii sobre el agua","Aldea de farolillos","Jard\xEDn de sakura","Ca\xF1averal de las garzas","Templo de la campana","Cascadita de musgo","Casa de t\xE9","Bosque de bamb\xFA","Estanque de lotos","Castillo de la Garza Blanca"],Si=new Set;try{JSON.parse(localStorage.getItem("rio3d-found")||"[]").forEach(i=>Si.add(i))}catch{}function Ex(){try{localStorage.setItem("rio3d-found",JSON.stringify([...Si]))}catch{}}var kr=[],di=new Map,wx=new Set,ms=[],dp=new Set;function fi(i){let t=He("toast");t.textContent=i,t.style.opacity=1,clearTimeout(fi.h),fi.h=setTimeout(()=>t.style.opacity=0,4200)}var yE=Ji.map(i=>{let t=document.createElement("span");return t.className="chip",t.textContent=i,He("chips").appendChild(t),t});function wh(i){He("places").textContent=Si.size+"/"+Ji.length,yE.forEach((e,n)=>e.classList.toggle("on",Si.has(n)));let t=Math.max(0,Math.floor((i-240)/Di)-1);for(;je(t)<i+1;)t++;He("next").textContent="Siguiente: "+Ji[Xe(t)]+" en "+Math.max(0,Math.round((je(t)-i)/10)*10)+" m"}He("snd").onclick=()=>{$t.on=!$t.on,$t.ctx&&$t.setOn($t.on),He("snd").textContent="Sonido: "+($t.on?"s\xED":"no")};try{ot.savedS=+localStorage.getItem("rio3d-pos")||0}catch{}function Tl(){try{ot.started&&U.dist>80&&localStorage.setItem("rio3d-pos",String(Math.round(U.dist)))}catch{}}setInterval(Tl,2500);addEventListener("pagehide",Tl);document.addEventListener("visibilitychange",Tl);ot.savedS>150&&(He("go").textContent="Continuar ("+ot.savedS+" m)",He("go2").hidden=!1,He("go2").onclick=()=>{try{localStorage.removeItem("rio3d-pos")}catch{}ot.savedS=0,He("go").onclick()});He("go").onclick=()=>{ot.savedS>150&&oh(ot.savedS);try{$t.init(),$t.resume()}catch{}He("start").hidden=!0,He("hud").hidden=!1,He("places-row").hidden=!1,wh(0),He("hint").hidden=!1,ot.started=!0,setTimeout(()=>{try{localStorage.getItem("rio3d-ob")==="1"&&(He("hint").style.opacity=0)}catch{He("hint").style.opacity=0}},9e3)};var fp=0;function Tx(i,t){if(fp-=i,fp<=0){fp=.4,wh(U.dist||t);{let e=U.dist||t,n=Math.round((e-240)/Di),s=-1;for(let r of[n-1,n,n+1])r>=0&&Math.abs(je(r)-e)<280&&(s=Xe(r));$t.setMood(Math.sin(Math.PI*2*(ot.tod-.12)),s,ar())}He("m").textContent=Math.round(U.dist/1),He("tod").textContent=fh(ot.tod)}}var mp=46,Gr=new Map,pp=[],Th=new Set;try{JSON.parse(localStorage.getItem("rio3d-coll")||"[]").forEach(i=>Th.add(i))}catch{}try{ot.count=+localStorage.getItem("rio3d-lant")||0}catch{}var Rh=i=>{let t=70+i*mp+tt(i,1)*20,e=(tt(i,2)*2-1)*.6*fe(t);return[qt(t)+e,-t]};function Ch(){let i=new Gt,t=new q(new ye(.3,.3,.55,10),new Ee({color:16767392}));t.position.y=.38;let e=new q(new ye(.34,.34,.06,10),new Ee({color:13204840}));e.position.y=.7;let n=e.clone();n.position.y=.08;let s=hi(16762746,3.2);s.position.y=.45,s.material.depthTest=!1,s.renderOrder=5;let r=new q(new un(1,1).rotateX(-Math.PI/2),new Ee({map:si,color:16762746,transparent:!0,opacity:.4,blending:Vn,depthWrite:!1}));return r.scale.set(5,1,5),r.position.y=.04,i.add(t,e,n,s,r),i.userData={glow:s,refl:r,body:t},i}function Ax(i,t){let e=Math.max(0,Math.floor((t-120)/mp)),n=Math.floor((t+320)/mp);for(let[s,r]of Gr)(s<e||s>n)&&(vt.remove(r),pp.push(r),Gr.delete(s));for(let s=e;s<=n;s++){if(Th.has(s)||Gr.has(s))continue;let r=pp.pop()||Ch();r.userData.fade=1,r.scale.setScalar(1),vt.add(r),Gr.set(s,r)}for(let[s,r]of Gr){let[o,a]=Rh(s);r.position.set(o,Math.sin(i*1.1+s)*.04,a),r.rotation.z=Math.sin(i*.8+s*2)*.08,r.userData.glow.material.opacity=(.5+.25*ot.glowK)*(.8+.2*Math.sin(i*3+s)),r.userData.refl.material.opacity=(.25+.3*ot.glowK)*(.85+.15*Math.sin(i*2+s)),r.userData.collecting&&(r.userData.fade-=.016,r.scale.setScalar(1+(1-r.userData.fade)*.6),r.userData.glow.material.opacity*=Math.max(0,r.userData.fade),r.userData.refl.material.opacity*=Math.max(0,r.userData.fade),r.userData.fade<=0&&(vt.remove(r),Gr.delete(s),pp.push(r),r.userData.collecting=!1))}}function Rx(){for(let[i,t]of Gr){if(t.userData.collecting)continue;let[e,n]=Rh(i),s=e-U.px,r=n-U.pz;if(s*s+r*r<17){Th.add(i),ot.count++;try{localStorage.setItem("rio3d-lant",String(ot.count)),localStorage.setItem("rio3d-coll",JSON.stringify([...Th]))}catch{}t.userData.collecting=!0;let o=Math.atan2(s,-r)-U.psi;$t.lantern(Math.sin(o)),qn(e,n),He("n").textContent=ot.count,ot.count===1&&fi("Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.")}}}var ri,Al=null,Cx=()=>Al;function Ah(i,t){if(ri===void 0||!ri&&Al===null&&!Ah.init)if(Ah.init=1,og()){let a=t+55+Bf(1)*55;Al=[qt(a)+(Bf(2)*2-1)*.25*fe(a),-a],ri=Ch(),ri.scale.setScalar(1.7),ri.userData.glow.material.color.set(16765562),vt.add(ri)}else ri=null;if(!ri)return;let[e,n]=Al;ri.position.set(e,Math.sin(i*1.1)*.06,n),ri.rotation.z=Math.sin(i*.8)*.08;let s=ri.userData;if(ri.userData.fade===void 0&&(s.glow.material.opacity=.75+.2*Math.sin(i*2.2),s.refl.material.opacity=.5+.15*Math.sin(i*2)),s.taken){s.fade-=.012,ri.scale.setScalar(1.7+(1-s.fade)*.9),s.glow.material.opacity*=Math.max(0,s.fade),s.refl.material.opacity*=Math.max(0,s.fade),s.fade<=0&&(vt.remove(ri),ri=null,Al=null);return}let r=e-U.px,o=n-U.pz;if(r*r+o*o<26&&cg()){s.taken=1,s.fade=1;let a=Math.atan2(r,-o)-U.psi;$t.lantern(Math.sin(a)),qn(e,n)}}var Rl=16,Ix=[];for(let i=0;i<Rl;i++){let t=new As(new rs({map:si,transparent:!0,opacity:0,depthWrite:!1,fog:!1,color:16777215}));t.scale.set(70,24,1),t.renderOrder=3,vt.add(t),Ix.push(t)}var gp=800,xp=new jt,Px=new Float32Array(gp*6),Dx=[];for(let i=0;i<gp;i++)Dx.push([Math.random()*40-20,Math.random()*14,Math.random()*40-24]);xp.setAttribute("position",new kt(Px,3));var Lx=new Po({color:14543103,transparent:!0,opacity:0,depthWrite:!1}),Cl=new Ua(xp,Lx);Cl.frustumCulled=!1;Cl.visible=!1;vt.add(Cl);var an={rain:0,target:0,t:50,on:!1},vE=[[480,150,.55,3.1],[545,200,.4,7.7],[610,260,.28,12.9]].map(([i,t,e,n])=>{let r=new Float32Array(1326),o=[];for(let c=0;c<=220;c++){let u=c/220*Math.PI*2,h=Math.cos(u),d=Math.sin(u),f=rn(h*2.2+n,d*2.2+n),m=rn(h*8+n*2,d*8+n),x=Math.pow(Math.max(0,m-.5)/.5,1.4),g=t*(.3+.55*Math.pow(f,1.5)+.9*x);if(r.set([h*i,-40,d*i,h*i,g,d*i],c*6),c<220){let p=c*2;o.push(p,p+1,p+2,p+1,p+3,p+2)}}let a=new jt;a.setAttribute("position",new kt(r,3)),a.setIndex(o);let l=new q(a,new $e({side:Zt,fog:!1,depthWrite:!1,uniforms:{col:{value:new ct},hor:{value:new ct},hm:{value:t*1.3}},vertexShader:"varying float vY;void main(){vY=position.y;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying float vY;uniform vec3 col,hor;uniform float hm;void main(){vec3 c=mix(hor,col,smoothstep(hm*.04,hm*.75,vY));gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
${ko}
}`}));return l.renderOrder=-8,l.frustumCulled=!1,l.userData.t=e,vt.add(l),l}),gs=new ct,Ih=new ct;function Nx(i,t){ot.started&&(an.t-=i,an.t<=0&&(an.target=an.target?0:1,an.t=an.target?60+Math.random()*40:100+Math.random()*70,an.target&&fi("Empieza una llovizna suave"))),an.rain+=(an.target-an.rain)*Math.min(1,i*.25);let e=an.rain>.15;e!==an.on&&(an.on=e,$t.rain(e));let n=1-de(.08,.3,ot.tod),s=Ae(Math.max(rh(t)*.95,an.rain*.4,n*.4,.2));an.fog=s,vt.fog.near=lr(22,5,s),vt.fog.far=lr(250,85,s),gs.set(15131886).multiplyScalar(1-ce.night*.7),vt.fog.color.copy(ce.fog).lerp(gs,s*.55);let r=ur.material.uniforms;r.fogN.value=vt.fog.near,r.fogF.value=vt.fog.far,r.fog.value.copy(vt.fog.color),cr.material.uniforms.hor.value.lerp(vt.fog.color,s*.8),cr.material.uniforms.top.value.lerp(vt.fog.color,s*.35),gn.mist.value=s,gn.cover.value=Ae(.24+.16*Math.sin(U.t*.012)+an.rain*.55+s*.2),Ur.intensity*=1-.22*an.rain,Ds.intensity*=1-.45*an.rain;{let a=cr.material.uniforms.sunDir.value;jn.sunDir.value.copy(a).normalize(),gs.copy(ce.sun).convertLinearToSRGB(),jn.sunCol.value.set(gs.r,gs.g,gs.b),jn.misc.value.x=.55*(1-ce.night)*Ae(1.25-Math.abs(jn.sunDir.value.y)*1.3,.25,1),jn.misc.value.y=lr(.15,.07,s),jn.misc.value.z=.5+.4*s,jn.misc.value.w=U.t}vE.forEach(a=>{a.position.set(U.px,0,U.pz);let l=a.userData.t;gs.copy(ce.hor),Ih.copy(ce.top).multiplyScalar(.55).lerp(gs.set(8095400).multiplyScalar(1-ce.night*.75),.45),a.material.uniforms.col.value.copy(ce.hor).lerp(Ih,1-l).lerp(vt.fog.color,s*.75),a.material.uniforms.hor.value.copy(cr.material.uniforms.hor.value)});let o=Math.floor(t/25)-2;for(let a=0;a<Rl;a++){let l=o+a,c=Ix[(l%Rl+Rl)%Rl],u=l*25,h=qt(u)+(tt(l,3)-.5)*fe(u)*1.5;c.position.set(h+Math.sin(U.t*.05+l)*3,1.2+tt(l,4)*2.2,-u);let d=c.position.x-U.px,f=c.position.z-U.pz,m=Math.hypot(d,f);c.material.opacity=s*.38*de(6,22,m)*(1-de(300,380,m))*(.7+.3*tt(l,5)),c.material.color.copy(vt.fog.color).multiplyScalar(1.05)}if(Cl.visible=an.rain>.03,Lx.opacity=.3*an.rain,Cl.visible){for(let a=0;a<gp;a++){let l=Dx[a];l[1]-=16*i,l[1]<0&&(l[1]=13+Math.random()*2,l[0]=Math.random()*40-20,l[2]=Math.random()*40-24);let c=U.px+l[0],u=U.pz+l[2];Px.set([c,l[1],u,c-.05,l[1]+.65,u],a*6)}xp.attributes.position.needsUpdate=!0,Math.random()<i*9*an.rain&&qn(U.px+(Math.random()-.5)*28,U.pz-Math.random()*22+4)}}var Fx="rio-still",ln={on:!1,k:0,t:0,ev:0,menu:!1},_E='#pzMore:not([hidden]),#menu:not([hidden]),.xm,#pz:not([hidden]),body>div[style*="inset:0"]:not([style*="pointer-events:none"])',yp=0,ME=()=>{try{return!!document.querySelector(_E)}catch{return!1}},vp=[["Un pez sube a respirar y deja c\xEDrculos en el agua.","A fish rises for air and leaves circles on the water.","\u9B5A\u304C\u606F\u3092\u3057\u306B\u4E0A\u304C\u308A\u3001\u6C34\u306B\u8F2A\u3092\u6B8B\u3057\u307E\u3059\u3002"],["El viento mueve las ca\xF1as, y luego vuelve el silencio.","The wind stirs the reeds, then silence returns.","\u98A8\u304C\u8466\u3092\u3086\u3089\u3057\u3001\u307E\u305F\u9759\u3051\u3055\u304C\u623B\u308A\u307E\u3059\u3002"],["Una hoja pasa despacio; t\xFA no.","A leaf drifts by, slowly; you do not.","\u8449\u304C\u3086\u3063\u304F\u308A\u6D41\u308C\u3066\u3044\u304D\u307E\u3059\u3002\u3042\u306A\u305F\u306F\u52D5\u304D\u307E\u305B\u3093\u3002"],["Se oye el agua rozando la canoa. Eso es todo, y alcanza.","You can hear water brushing the canoe. That is all, and it is enough.","\u6C34\u304C\u30AB\u30CC\u30FC\u3092\u306A\u3067\u308B\u97F3\u3060\u3051\u3002\u305D\u308C\u3067\u5341\u5206\u3067\u3059\u3002"],["Las nubes se reflejan en el r\xEDo, tan quietas como t\xFA.","Clouds reflect in the river, as still as you are.","\u96F2\u304C\u5DDD\u306B\u6620\u308A\u3001\u3042\u306A\u305F\u3068\u540C\u3058\u304F\u3089\u3044\u9759\u304B\u3067\u3059\u3002"]];function bE(i){i.add(vp),i.add([["Quedarme quieto","Stay still","\u3058\u3063\u3068\u3059\u308B"],["Seguir el r\xEDo","Follow the river","\u5DDD\u3092\u9032\u3080"],["Una lib\xE9lula se posa en la proa.","A dragonfly lands on the bow.","\u30C8\u30F3\u30DC\u304C\u8239\u9996\u306B\u6B62\u307E\u308A\u307E\u3057\u305F\u3002"],["Quedarte quieto tambi\xE9n cuenta. Un recuerdo para la caba\xF1a.","Staying still counts too. A keepsake for the cabin.","\u3058\u3063\u3068\u3057\u3066\u3044\u308B\u306E\u3082\u5927\u5207\u3002\u5C0F\u5C4B\u306B\u601D\u3044\u51FA\u304C\u3072\u3068\u3064\u3002"]])}var Ux=()=>{let i=new Date;return i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()},SE=()=>{try{return JSON.parse(localStorage.getItem(Fx)||"{}")||{}}catch{return{}}};var Ei=null,_p=!1;function EE(){if(Ei||typeof document=="undefined")return;try{bE(window.UX)}catch{}Ei=document.createElement("button"),Ei.type="button",Ei.id="stillBtn",Ei.style.cssText="position:fixed;left:12px;bottom:max(96px,calc(env(safe-area-inset-bottom) + 88px));z-index:58;min-height:44px;padding:8px 16px;border-radius:99px;border:1px solid #5a609a;background:rgba(32,34,70,.82);color:#fbf1e0;font:600 .85rem system-ui;cursor:pointer;display:none";let i=e=>{try{return UX.tr(e)}catch{return e}},t=()=>{Ei.textContent=i(ln.on?"Seguir el r\xEDo":"Quedarme quieto")};t(),Ei.onclick=()=>{ln.on=!ln.on,ln.t=0,ln.ev=0,_p=!1,t();try{UX.hap(8)}catch{}},document.body.appendChild(Ei)}var wE=i=>{Ei||EE(),Ei&&(Ei.style.display=i?"block":"none")};function Bx(i,t,e){if(t&&(!Ei||Ei.style.display==="none")&&wE(!0),yp-=i,yp<=0&&(yp=.25,ln.menu=ME()),ln.k+=((ln.on||ln.menu?1:0)-ln.k)*Math.min(1,i*(ln.menu?3:1.2)),!!ln.on){if(ln.t+=i,ln.ev===0&&ln.t>=20){ln.ev=1,Pr("libelula");try{UX.say(UX.tr("Una lib\xE9lula se posa en la proa."))}catch{}try{e&&e()}catch{}}else if(ln.ev>=1&&ln.t>=20+ln.ev*50){let n=vp[(ln.ev-1)%vp.length];ln.ev++;try{UX.say(UX.tr(n[0]))}catch{}try{e&&e()}catch{}}if(!_p&&ln.t>=45){_p=!0;let n=SE();if(n.d!==Ux()){n.d=Ux(),n.n=(n.n||0)+1;try{localStorage.setItem(Fx,JSON.stringify(n))}catch{}try{UX.say(UX.tr("Quedarte quieto tambi\xE9n cuenta. Un recuerdo para la caba\xF1a."))}catch{}}}}}var Mp=0;function Ox(i,t){if(ot.started){let e=U.hold||U.key.up,n=Ae(fr.steer+(U.key.r?1:0)-(U.key.l?1:0),-1,1);Bx(i,!0,()=>qn(U.px,U.pz));let s=1-ln.k,r=ot.X.photo?0:2.6*(1-.85*ot.cineW)*s;U.v+=(r-U.v)*(ln.menu?3:.5)*i;let o=vn(t),a=n*(.55+Math.min(U.v,6)/6*.45);U.psi+=a*i,Math.abs(n)<.1&&(U.psi+=(o-U.psi)*.32*i),U.psi=Ae(U.psi,o-1.35,o+1.35),window.__lock!=null&&(U.psi=window.__lock),U.steer+=(n-U.steer)*3*i,U.px+=Math.sin(U.psi)*U.v*i+Math.sin(o)*1.1*s*i,U.pz+=-Math.cos(U.psi)*U.v*i-Math.cos(o)*1.1*s*i;let l=-U.pz,c=qt(l),u=fe(l)-1.7,h=U.px-c;if(Math.abs(h)>u&&(U.px=c+Math.sign(h)*u,U.v>1.2&&U.t-U.bumpT>1.2&&($t.bump(),U.bumpT=U.t),U.v*=.6,U.psi+=(vn(l)-U.psi)*.4),U.dist=Math.max(U.dist,l),Mp-=i,Math.abs(n)>.25&&Mp<=0){Mp=.7;let d=n>0?1:-1,f=new D(d*1.2,0,.3);Ne.localToWorld(f),qn(f.x,f.z)}}}var Dt=(i,t,e,n,s,r,o,a,l)=>{let c=new q(new Fn(t,e,n),Ot(s,l));return c.position.set(r,o,a),i.add(c),c},Fe=(i,t,e,n,s,r,o,a,l=7,c)=>{let u=new q(new ye(t,e,n,l),Ot(s,c));return u.position.set(r,o,a),i.add(u),u},Me=(i,t,e,n,s,r,o=.7)=>{let a=hi(t,e);return a.position.set(n,s,r),a.userData.base=o,i.add(a),kr.push(a),a},bp=new Map;function Ep(i,t,e,n=64,s=256){let r=i+t+n;if(bp.has(r))return bp.get(r);let o=document.createElement("canvas");o.width=n,o.height=s;let a=o.getContext("2d");a.fillStyle=t,a.fillRect(0,0,n,s),a.fillStyle=e,a.fillRect(0,0,n,5),a.fillRect(0,s-5,n,5);let l=Math.min(n*.72,s/Math.max(1,[...i].length)*.8);a.font="bold "+l+'px "Hiragino Mincho ProN","Noto Serif CJK JP","Yu Mincho","MS Mincho",serif',a.textAlign="center",a.textBaseline="middle";let c=[...i].length;[...i].forEach((h,d)=>a.fillText(h,n/2,s/(c*2)+d*s/c));let u=new xi(o);return u.colorSpace=An,bp.set(r,u),u}function zx(i,t,e,n,s,r){let o=t(e,n),a=new Gt;a.position.set(e,o,n),i.add(a),Fe(a,.07,.09,6.4,4864562,0,3.2,0,5),Dt(a,1.3,.09,.09,4864562,.62,6,0);let l=new q(new un(1.15,4.4),new ge({gradientMap:we,map:Ep(s,r,"#f6efe0"),side:Zt}));return l.userData.noMerge=!0,l.position.set(.62,3.75,0),a.add(l),a.userData.sw=1,ms.push({b:l,ph:e}),a}function jo(i,t,e,n,s=1){let r=new Gt;r.position.set(e,t(e,n),n),r.scale.setScalar(s),i.add(r);let o=11052706;Fe(r,.5,.62,.3,o,0,.15,0,8),Fe(r,.17,.2,1.3,o,0,.95,0,6),Fe(r,.45,.3,.2,o,0,1.7,0,8),Dt(r,.62,.55,.62,o,0,2.05,0),Dt(r,.34,.34,.66,16767392,0,2.05,0).material=new Ee({color:16767392}),Dt(r,.66,.34,.34,16767392,0,2.05,0).material=new Ee({color:16767392});let a=new q(new Le(.62,.5,4),Ot(o));a.rotation.y=Math.PI/4,a.position.y=2.6,r.add(a);let l=new q(new Jt(.11,6,5),Ot(o));return l.position.y=2.92,r.add(l),Me(r,16762746,2.6,0,2.05,0,.8),r}function TE(i,t,e,n){for(let o of[-1,1])Fe(i,.22,.3,10,6965818,o*(e+1.6),t(o*(e+1.6),n)+4.6,n,7);let s=e*2+3.2,r=Fe(i,.12,.12,s,15128736,0,8.6,n,6);r.rotation.z=Math.PI/2;for(let o=0;o<12;o++){let a=(o+.5)/12,l=-s/2+a*s,c=new q(new un(.42,1),new ge({gradientMap:we,color:16777215,side:Zt}));c.position.set(l,7.9,n),c.rotation.set(0,0,o%2?.18:-.18),i.add(c)}for(let o of[-1,1]){let a=new q(new Le(.3,1,6),Ot(15128736));a.position.set(o*(e*.5),7.8,n),a.rotation.x=Math.PI,i.add(a)}}function Vr(i,t,e,n,s,r){for(let o of[-1,1])zx(i,t,o*(e+1.6),54,n,r),zx(i,t,o*(e+3.6),49,n,r),jo(i,t,o*(e+2.8),42);s&&TE(i,t,e,37)}function Dh(i,t,e,n,s,r=1){let o=new q(new Le(t,e,4),Ot(s));o.rotation.y=Math.PI/4,o.position.y=n,o.scale.z=r,i.add(o);let a=t*.707;[[1,1],[-1,1],[1,-1],[-1,-1]].forEach(([l,c])=>{let u=new q(new Le(.32,1.3,5),Ot(s));u.position.set(l*a,n-e/2+.55,c*a*r),u.rotation.set(c*.7,0,-l*.7),i.add(u)})}function Hx(i,t,e,n){let s=new Gt;s.position.set(t,e,n),i.add(s),Dt(s,6.4,1.2,6.4,9407624,0,.5,0);let r=1.1;for(let o=0;o<4;o++){let a=4.3-o*.75;Dt(s,a,2.3,a,o%2?15853267:15326664,0,r+1.15,0),Dt(s,a+.12,.18,a+.12,11880250,0,r+.1,0);for(let[l,c]of[[1,1],[-1,1],[1,-1],[-1,-1]])Fe(s,.1,.1,2.3,11880250,l*a/2,r+1.15,c*a/2,6);Dh(s,(a/2+.95)/.707,1.5,r+2.9,5591134);for(let[l,c,u]of[[1,0,1],[-1,0,1],[0,1,0],[0,-1,0]]){let h=Dt(s,u?.12:a*.42,1,u?a*.42:.12,3813164,l*(a/2+.02),r+1.3,c*(a/2+.02));Dt(s,u?.16:a*.5,.1,u?a*.5:.16,11880250,l*(a/2+.03),r+1.88,c*(a/2+.03))}Dt(s,a+.9,.1,a+.9,11880250,0,r+.32,0);for(let l of[-1,1])Dt(s,a+.9,.07,.07,14264410,0,r+.75,l*(a+.9)/2),Dt(s,.07,.07,a+.9,14264410,l*(a+.9)/2,r+.75,0);r+=3.1}Fe(s,.1,.18,4.6,14264410,0,r+1.3,0,6);for(let o=0;o<6;o++)Fe(s,.55-o*.07,.55-o*.07,.12,14264410,0,r+.2+o*.62,0,8);return Me(s,16762746,5,0,3,3.4,.7),s}function kx(i,t,e,n,s,r){let o=new Gt;return o.position.set(t,e,n),o.scale.setScalar(s),i.add(o),[-2.2,2.2].forEach(a=>Fe(o,.3,.36,6,r,a,3,0,8)),Dt(o,6.4,.4,.55,2894382,0,6.4,0),[-1,1].forEach(a=>{let l=Dt(o,1.1,.36,.55,2894382,a*3.55,6.55,0);l.rotation.z=a*.28}),[-2.2,2.2].forEach(a=>Fe(o,.42,.46,.5,12170669,a,.25,0,8)),Dt(o,5.6,.35,.4,r,0,5.4,0),Dt(o,.5,.9,.4,r,0,5.85,0),o}function Lh(i,t){let e=new Gt,n=16184302,s=15328474,r=new q(new Jt(.5,10,8),Ot(n));r.scale.set(1,.8,1.5),r.position.y=1.35,e.add(r);let o=new q(new Le(.2,.7,5),Ot(s));o.rotation.x=-Math.PI/2-.3,o.position.set(0,1.35,-.85),e.add(o),Fe(e,.045,.045,1.1,4012598,-.12,.55,.05,4),Fe(e,.045,.045,1.1,4012598,.12,.55,.05,4);let a=new Gt;a.userData.noMerge=!0,a.position.set(0,1.6,.55),e.add(a);let l=Fe(a,.07,.09,1,n,0,.45,.05,5);l.rotation.x=-.35;let c=Fe(a,.06,.07,.7,n,0,1.05,.3,5);c.rotation.x=.45;let u=new q(new Jt(.14,8,6),Ot(n));u.position.set(0,1.4,.55),a.add(u);let h=new q(new Le(.05,.5,4),Ot(14918218));return h.rotation.x=Math.PI/2,h.position.set(0,1.38,.9),a.add(h),e.scale.setScalar(i),ms.push({nk:a,ph:t}),e}var pr=new $e({transparent:!0,depthWrite:!1,side:Zt,uniforms:{t:{value:0},fogCol:{value:new ct(14542062)}},vertexShader:"varying vec2 vU;varying float vD;void main(){vU=uv;vec4 mv=modelViewMatrix*vec4(position,1.);vD=-mv.z;gl_Position=projectionMatrix*mv;}",fragmentShader:`varying vec2 vU;varying float vD;uniform float t;uniform vec3 fogCol;void main(){float s=sin(vU.x*34.+sin(vU.y*7.)*.9)*.5+.5;float f=fract(vU.y*2.6-t*1.0+s*.35);float a=.62+.3*smoothstep(.25,.9,f)*s;float e=smoothstep(0.,.1,vU.x)*smoothstep(1.,.9,vU.x);vec3 c=mix(vec3(.72,.88,.96),vec3(1.),f*s);float fg=smoothstep(70.,220.,vD);c=mix(c,fogCol,fg*.85);gl_FragColor=vec4(c,a*e*(1.-fg*.45));
#include <colorspace_fragment>
}`}),Nh=new $e({transparent:!0,depthWrite:!1,blending:Vn,uniforms:{map:{value:si},k:{value:1}},vertexShader:"attribute vec3 iC;attribute float iS;attribute vec3 iCol;attribute float iB;uniform float k;varying vec2 vU;varying vec3 vCol;varying float vA;void main(){vU=uv;vCol=iCol;vA=iB*(.3+.7*k);vec4 mv=modelViewMatrix*vec4(iC,1.);mv.xy+=position.xy*iS;gl_Position=projectionMatrix*mv;}",fragmentShader:`uniform sampler2D map;varying vec2 vU;varying vec3 vCol;varying float vA;void main(){vec4 t=texture2D(map,vU);gl_FragColor=vec4(vCol*t.rgb,t.a*vA);
#include <colorspace_fragment>
}`}),Sp=new me,Ph=new D;function Uh(i){i.updateMatrixWorld(!0),Sp.copy(i.matrixWorld).invert();let t=new Map,e=[],n=[];i.traverse(s=>{if(s.isSprite&&s.userData.base!=null){e.push(s);return}if(!s.isMesh||s.isInstancedMesh||s.material.isShaderMaterial||!s.material.isMaterial)return;for(let c=s;c&&c!==i;c=c.parent)if(c.userData.noMerge)return;let r=s.material,o=[r.type,r.color.getHex(),r.emissive?r.emissive.getHex():0,r.side,r.map?r.map.uuid:0,r.transparent,r.opacity,r.depthWrite].join("|"),a=s.geometry;a=a.index?a.toNonIndexed():a.clone();for(let c of Object.keys(a.attributes))c!=="position"&&c!=="normal"&&c!=="uv"&&a.deleteAttribute(c);a.attributes.normal||a.computeVertexNormals(),a.attributes.uv||a.setAttribute("uv",new kt(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(Sp.clone().multiply(s.matrixWorld));let l=t.get(o);l||(l={mat:r,geos:[]},t.set(o,l)),l.geos.push(a),n.push(s)});for(let s of n)s.parent&&s.parent.remove(s),s.geometry.dispose(),s.material.dispose&&![...t.values()].some(r=>r.mat===s.material)&&s.material.dispose();for(let s of t.values()){let r=Ls(s.geos);if(s.geos.forEach(a=>a.dispose()),!r)continue;let o=new q(r,s.mat);i.add(o)}if(e.length){let s=e.length,r=new un(1,1),o=new Za;o.index=r.index,o.setAttribute("position",r.attributes.position),o.setAttribute("uv",r.attributes.uv);let a=new Float32Array(s*3),l=new Float32Array(s),c=new Float32Array(s*3),u=new Float32Array(s);e.forEach((d,f)=>{Ph.setFromMatrixPosition(d.matrixWorld).applyMatrix4(Sp),a.set([Ph.x,Ph.y,Ph.z],f*3),l[f]=d.scale.x,c.set([d.material.color.r,d.material.color.g,d.material.color.b],f*3),u[f]=d.userData.base,d.parent&&d.parent.remove(d),d.material.dispose()}),o.setAttribute("iC",new ki(a,3)),o.setAttribute("iS",new ki(l,1)),o.setAttribute("iCol",new ki(c,3)),o.setAttribute("iB",new ki(u,1)),o.instanceCount=s;let h=new q(o,Nh);h.frustumCulled=!1,h.renderOrder=4,i.add(h)}return i}function wp(i){let t=new Set([Nh,pr,Ns.material]);i.traverse(e=>{if(e.isInstancedMesh&&e.userData.keep){e.dispose();return}e.geometry&&e.geometry.dispose(),(e.material?Array.isArray(e.material)?e.material:[e.material]:[]).forEach(s=>{t.has(s)||s.dispose()})});for(let e=ms.length-1;e>=0;e--){let n=ms[e],r=n.b||n.nk;for(;r&&r!==i;)r=r.parent;r===i&&ms.splice(e,1)}for(let e=kr.length-1;e>=0;e--){let n=kr[e];for(;n&&n!==i;)n=n.parent;n===i&&kr.splice(e,1)}}var Fh=new ct,Gx=new Map,Vx=new me,Wx=new pn,Xx=new Hi,qx=new D,Yx=new D(1,1,1),Wr=i=>{if(Array.isArray(i))return i;let t=Gx.get(i);return t||(Fh.set(i),t=[Fh.r,Fh.g,Fh.b],Gx.set(i,t)),t},Ln=(i,t)=>{let e=Wr(i);return[Math.min(1.4,e[0]*t),Math.min(1.4,e[1]*t),Math.min(1.4,e[2]*t)]},Zx=new Map;function AE(i){let t=Zx.get(i);return t||(t=new Sn(1,i),t=t.index?t.toNonIndexed():t,Zx.set(i,t)),t}var wi=class{constructor(){this.P=new Float32Array(1<<17),this.C=new Float32Array(1<<17),this.n=0,this.m=new me,this.st=[],this.ref=null}_grow(){let t=new Float32Array(this.P.length*2),e=new Float32Array(this.C.length*2);t.set(this.P),e.set(this.C),this.P=t,this.C=e}save(){return this.st.push(this.m.clone()),this}restore(){return this.m=this.st.pop(),this}T(t=0,e=0,n=0,s=0,r=0,o=0,a=1,l=a,c=a){return Xx.set(r,s,o,"YXZ"),Wx.setFromEuler(Xx),qx.set(t,e,n),Yx.set(a,l,c),Vx.compose(qx,Wx,Yx),this.m.multiply(Vx),this}at(t,e,n,s,r,o,a,l){return this.save(),this.T(t,e,n,s||0,o||0,a||0,l||1),r(this),this.restore(),this}tri(t,e,n,s){s=Wr(s);let r=this.m.elements,o=r[0],a=r[1],l=r[2],c=r[4],u=r[5],h=r[6],d=r[8],f=r[9],m=r[10],x=r[12],g=r[13],p=r[14],y=t[0],S=t[1],_=t[2],b=e[0],M=e[1],T=e[2],v=n[0],E=n[1],R=n[2],I=o*y+c*S+d*_+x,L=a*y+u*S+f*_+g,P=l*y+h*S+m*_+p,C=o*b+c*M+d*T+x,F=a*b+u*M+f*T+g,V=l*b+h*M+m*T+p,z=o*v+c*E+d*R+x,$=a*v+u*E+f*R+g,B=l*v+h*E+m*R+p;if(this.ref){let Vt=this.ref,nt=o*Vt[0]+c*Vt[1]+d*Vt[2]+x,at=a*Vt[0]+u*Vt[1]+f*Vt[2]+g,wt=l*Vt[0]+h*Vt[1]+m*Vt[2]+p,zt=C-I,bt=F-L,ne=V-P,cn=z-I,re=$-L,xe=B-P,Ue=bt*xe-ne*re,ie=ne*cn-zt*xe,Pe=zt*re-bt*cn;if(Ue*((I+C+z)/3-nt)+ie*((L+F+$)/3-at)+Pe*((P+V+B)/3-wt)<0){let be=C;C=z,z=be,be=F,F=$,$=be,be=V,V=B,B=be}}this.n+9>this.P.length&&this._grow();let k=this.P,K=this.C,ut=this.n,Rt=s[0],ue=s[1],te=s[2];return k[ut]=I,k[ut+1]=L,k[ut+2]=P,k[ut+3]=C,k[ut+4]=F,k[ut+5]=V,k[ut+6]=z,k[ut+7]=$,k[ut+8]=B,K[ut]=Rt,K[ut+1]=ue,K[ut+2]=te,K[ut+3]=Rt,K[ut+4]=ue,K[ut+5]=te,K[ut+6]=Rt,K[ut+7]=ue,K[ut+8]=te,this.n=ut+9,this}orient(t){return this.ref=t,this.rw=null,this}free(){return this.ref=null,this.rw=null,this}quad(t,e,n,s,r){return this.tri(t,e,n,r),this.tri(t,n,s,r),this}box(t,e,n,s,r=0,o=0,a=0,l=!0){s=Wr(s);let c=r-t/2,u=r+t/2,h=o-e/2,d=o+e/2,f=a-n/2,m=a+n/2,x=this.ref;return this.ref=null,this.quad([u,h,m],[u,h,f],[u,d,f],[u,d,m],s),this.quad([c,h,f],[c,h,m],[c,d,m],[c,d,f],s),this.quad([c,d,m],[u,d,m],[u,d,f],[c,d,f],s),l&&this.quad([c,h,f],[u,h,f],[u,h,m],[c,h,m],s),this.quad([c,h,m],[u,h,m],[u,d,m],[c,d,m],s),this.quad([u,h,f],[c,h,f],[c,d,f],[u,d,f],s),this.ref=x,this}boxB(t,e,n,s,r=0,o=0,a=0,l=!1){return this.box(t,e,n,s,r,o+e/2,a,l)}cyl(t,e,n,s,r,o=0,a=0,l=0,c=!1){r=Wr(r);let u=this.ref;this.ref=null;let h=(m,x)=>{let g=[];for(let p=0;p<s;p++){let y=p/s*6.2832;g.push([o+m*Math.cos(y),a+x,l+m*Math.sin(y)])}return g},d=h(t,0),f=h(e,n);for(let m=0;m<s;m++){let x=(m+1)%s;e<1e-4?this.tri(d[m],[o,a+n,l],d[x],r):this.quad(d[m],f[m],f[x],d[x],r)}if(e>=1e-4)for(let m=0;m<s;m++)this.tri([o,a+n,l],f[(m+1)%s],f[m],r);if(c)for(let m=0;m<s;m++)this.tri([o,a,l],d[m],d[(m+1)%s],r);return this.ref=u,this}ball(t,e,n=0,s=0,r=0,o=1,a=1,l=1,c=1){e=Wr(e);let u=AE(c),h=u.attributes.position,d=this.ref;this.ref=null;for(let f=0;f<h.count;f+=3){let m=[0,1,2].map(x=>[n+h.getX(f+x)*t*o,s+h.getY(f+x)*t*a,r+h.getZ(f+x)*t*l]);this.tri(m[0],m[1],m[2],e)}return this.ref=d,this}geo(t,e){e=Wr(e);let n=t.attributes.position,s=t.index,r=s?s.count:n.count,o=this.ref;this.ref=null;let a=l=>{let c=s?s.getX(l):l;return[n.getX(c),n.getY(c),n.getZ(c)]};for(let l=0;l<r;l+=3)this.tri(a(l),a(l+1),a(l+2),e);return this.ref=o,this}loft(t,e,n=!0){let s=t.length,r=t[0].length;for(let o=0;o<s-1;o++)for(let a=0;a<(n?r:r-1);a++){let l=(a+1)%r;this.quad(t[o][a],t[o+1][a],t[o+1][l],t[o][l],Wr(typeof e=="function"?e(a,o):e))}return this}count(){return this.n/9}mesh(t){let e=this.n,n=this.P.subarray(0,e),s=new jt;s.setAttribute("position",new kt(n,3));let r=new Float32Array(e);for(let a=0;a<e;a+=9){let l=n[a+3]-n[a],c=n[a+4]-n[a+1],u=n[a+5]-n[a+2],h=n[a+6]-n[a],d=n[a+7]-n[a+1],f=n[a+8]-n[a+2],m=c*f-u*d,x=u*h-l*f,g=l*d-c*h,p=Math.sqrt(m*m+x*x+g*g)||1;m/=p,x/=p,g/=p;for(let y=0;y<9;y+=3)r[a+y]=m,r[a+y+1]=x,r[a+y+2]=g}s.setAttribute("normal",new kt(r,3)),s.setAttribute("color",new kt(this.C.subarray(0,e),3)),s.setAttribute("uv",new kt(new Float32Array(e/3*2),2)),s.computeBoundingSphere();let o=new q(s,t);return o.userData.noMerge=!0,o}};var Jx=[12731706,4022170,15253850,5214058,14256806,8014490,15790310,3095130,15043130],RE=[15781806,15253658,15980219],Bh=[];function Qx(i,t,e,n,s,r,o,a){let{S:l,E:c,rnd:u}=i;l.at(t,e,n,s,h=>{h.cyl(.37,.2,1.28,7,r,0,0,0).cyl(.28,.27,.16,7,r===15790310?W.red:Ln(W.woodD,1.2),0,.62,0).ball(.17,RE[u()*3|0],0,1.42,0,1,1.1,1,0).ball(.185,W.black,0,1.48,-.03,1,.8,1,0),o&&h.cyl(.04,.04,.7,4,W.woodD,.38,.7,.28),a&&(h.box(.1,.1,.55,r,.3,1.1,.1),h.box(.1,.1,.55,r,-.3,1.1,.1))}),o&&(c.at(t,e,n,s,h=>h.cyl(.13,.13,.34,6,16767392,.38,.38,.28)),u()<.45&&Me(i.h,16762746,2.6,t+Math.sin(s)*.28+Math.cos(s)*.38,e+.55,n+Math.cos(s)*.28-Math.sin(s)*.38,.85))}function Il(i,t,e,n,s,r){let{fr:o,rnd:a}=i;for(let l=0;l<n;l++){let c=t+(a()-.5)*s*2,u=e+(a()-.5)*s*.9,h=o.ground(c,u);h<.35||Qx(i,c,h,u,r+(a()-.5)*1.2,Jx[a()*Jx.length|0],a()<.5,!1)}}function $x(i,t,e,n){let{S:s,E:r,CL:o,fr:a,rnd:l}=i,c=Math.max(a.ground(t,e),.4),u=[[W.red,W.cream],[W.blue,W.cream],[W.orange,W.cream],[W.green,W.cream]][l()*4|0];s.at(t,c,e,n,f=>{for(let m of[-1,1])for(let x of[-1,1])f.cyl(.08,.1,2.7,5,W.woodD,m*1.65,0,x*.9);f.box(3.5,.95,1.3,W.woodM,0,.48,.5,!1).box(3.7,.12,1.5,Ln(W.woodM,1.25),0,.98,.5);for(let m=0;m<3;m++)f.ball(.17,[W.red,W.cream,15292282,W.orange][l()*4|0],-1.1+m*1.1,1.28,.45,1,1,1,0).cyl(.02,.02,.5,3,W.woodD,-1.1+m*1.1,1,.45);f.box(.7,.5,.5,9071178,1.2,1.3,.6).box(.6,.3,.5,13199183,-.2,1.2,.62)}),o.at(t,c,e,n,f=>{for(let x=0;x<7;x++){let g=-1.9+3.8*x/7,p=-1.9+3.8*(x+1)/7,y=x%2?u[1]:u[0];f.quad([g,3,-1.1],[p,3,-1.1],[p,2.55,1.35],[g,2.55,1.35],y),f.tri([g,2.55,1.35],[p,2.55,1.35],[(g+p)/2,2.15,1.4],y)}f.quad([-1.9,2.55,-1.1],[1.9,2.55,-1.1],[1.9,3,-1.1],[-1.9,3,-1.1],u[0])});let h=Math.cos(n),d=Math.sin(n);for(let f of[-1,1])r.at(t,c,e,n,m=>m.cyl(.28,.28,.55,6,W.red,f*1.7,1.85,1.2)),Me(i.h,16757610,3.3,t+f*1.7*h+1.2*d,c+2.1,e-f*1.7*d+1.2*h,.85)}function Kx(i,t,e){let{S:n,fr:s}=i,r=Math.max(s.ground(t,e),.4),o=r+1.55;n.at(t,o,e,0,l=>{l.at(0,0,0,0,c=>c.cyl(1,1,1.5,14,8014382,0,-.75,0),0,0,Math.PI/2);for(let c of[-1,1])l.at(c*.6,0,0,0,u=>u.cyl(1.05,1.05,.16,14,W.red,0,-.08,0),0,0,Math.PI/2);for(let c of[-1,1])for(let u=0;u<14;u++){let h=u/14*6.283;l.ball(.06,W.gold,c*.78,Math.cos(h)*1,Math.sin(h)*1,1,1,1,0)}for(let c of[-1,1])l.box(.3,1.4,.3,W.woodD,c*.6,-1,.95),l.box(.3,1.4,.3,W.woodD,c*.6,-1,-.95);l.box(1.8,.25,2.4,W.woodD,0,-1.4,0)});let a=new ge({gradientMap:we,color:15324844,side:Zt,fog:!0});for(let l of[-1,1]){let c=new q(new yi(.97,20),a);c.userData.noMerge=!0,c.position.set(t+l*.7,o,e),c.rotation.y=Math.PI/2,i.h.add(c),i.drums.push(c)}for(let l of[-1,1]){let c=t+l*1.95;Qx(i,c,Math.max(s.ground(c,e),.4),e,Math.atan2(-l,0),l>0?15790310:W.red,!1,!0)}}function jx(i,t,e){let{S:n,CL:s,fr:r}=i,o=Math.max(r.ground(t,e),.4),a=12;n.cyl(.1,.14,a,5,W.woodD,t,o,e),n.ball(.28,W.gold,t,o+a+.2,e,1,1,1,1),n.cyl(.12,0,1.3,4,W.gold,t,o+a+.4,e);let l=[W.black,W.red,W.blue,15292282,W.green];s.at(t,o,e,0,c=>{l.forEach((u,h)=>{let d=a-.8-h*1.7,f=3.6-h*.25;c.at(.1,d,0,.2*h,m=>{m.cyl(.62-h*.04,.14,f,8,u,0,0,0)},0,-Math.PI/2+.08*h),c.ball(.12,16777215,.5,d+.25,.45,1,1,1,0),c.ball(.12,16777215,.5,d+.25,-.45,1,1,1,0)}),[16234441,16773792,10146047,10937249,16756838].forEach((u,h)=>c.quad([0,a-.4,.25*h-.5],[0,a-.7,.25*h-.5],[2.8,a-2-h*.12,.25*h-.5],[2.8,a-1.7-h*.12,.25*h-.5],u))})}function CE(i,t){let{S:e,E:n,CL:s,fr:r}=i,o=r.river(t),a=o.zc-o.hw-1.8,l=o.zc+o.hw+1.8,c=12.8,u=3.9;for(let f of[a,l]){let m=Math.max(r.ground(t,f),.2);e.cyl(.14,.2,c-m+.8,6,W.woodM,t,m-.3,f),e.ball(.3,W.gold,t,c+.8,f,1,1,1,0)}let h=f=>[t,c-u*Math.sin(Math.PI*f),a+(l-a)*f],d=Math.max(12,Math.round((l-a)/1.8));for(let f=0;f<d;f++)Os(e,h(f/d),h((f+1)/d),.09,W.woodD);for(let f=1;f<d;f++){let m=h(f/d),x=Bh[(f+Math.abs(t|0))%4];e.box(.04,.35,.04,W.woodD,m[0],m[1]-.17,m[2],!1),n.cyl(.42,.34,.95,6,x,m[0],m[1]-1.3,m[2]),e.cyl(.44,0,.22,6,W.black,m[0],m[1]-.34,m[2]),f%3===0&&Me(i.h,16757610,3.6,m[0],m[1]-.85,m[2],.8)}for(let f=0;f<d;f++){let m=h((f+.1)/d),x=h((f+.9)/d);s.tri([m[0],m[1]-.05,m[2]],[x[0],x[1]-.05,x[2]],[(m[0]+x[0])/2,Math.min(m[1],x[1])-.7,(m[2]+x[2])/2],[W.red,W.cream,W.purple,W.orange][f%4])}}function*ty(i){Bh.length=0,Bh.push(W.red,W.cream,W.orange,15292282);let{S:t,E:e,CL:n,fr:s,rnd:r}=i;for(let l of[-86,-62,-38,38,62,86])CE(i,l),yield;for(let l=0;l<40;l++){let c=-62+l*3.15;Math.abs(c+10)<9||(e.cyl(.36,.3,.8,6,Bh[l%4],c,Kt.PH+1.6,Kt.ZF+.5),t.box(.04,.5,.04,W.woodD,c,Kt.PH+2.5,Kt.ZF+.5,!1),l%3===0&&Me(i.h,16757610,3.2,c,Kt.PH+2,Kt.ZF+.7,.8))}for(let l=0;l<14;l++){let c=-80+l*12+r()*3;if(Math.abs(c+10)<10)continue;let u=Kt.PO-.8,h=Math.max(s.ground(c,u),.3);Tp(i,c,h,u,[W.red,W.purple,W.blue,W.orange,W.green][l%5])}let o=[-76,-60,-36,16,28,40,52,64,76],a=[-52,-30,-12,6,24,44,62];for(let l of o)$x(i,l,Kt.PO-2.8,0),yield;for(let l of a){let c=s.river(l);$x(i,l,c.zc+c.hw+3.2,Math.PI),yield}for(let l of o)Il(i,l,Kt.PO-.4,2,3,0),yield;for(let l of a){let c=s.river(l);Il(i,l,c.zc+c.hw+1.2,2,3,Math.PI),yield}Il(i,-10,Kt.PO+1,2,1.2,0),Il(i,-16,Kt.PO-6,4,3,0),Il(i,-4,Kt.PO-6,4,3,0),Kx(i,-24,Kt.PO-4.5),Kx(i,4,Kt.PO-4.5),jx(i,-17,Kt.PO-1.6),jx(i,-3,Kt.PO-1.6)}var W={plaster:16184300,plasterS:15131093,tile:5726575,tile2:6713727,ridge:15658214,black:2763827,woodD:3811876,woodM:7162426,red:11876396,redD:9251363,gold:14989394,stone:10395033,stoneD:6118490,gravel:14341056,win:16767120,pink:qi.c,pink2:qi.c2,pink3:16304598,trunk:7294787,purple:5913996,cream:16773590,orange:15766330,blue:3104666,green:5214047},{PH:dn}=Kt,IE=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function Gh(i,t,e,n,s,r,o,a,l,c={}){var _;let u=c.n||5,h=(_=c.flare)!=null?_:.7,d=Math.max(4,Math.ceil(2*s/1.5)),f=Math.max(4,Math.ceil(2*r/1.5)),m=[],x=c.tile||W.tile,g=c.tile2||W.tile2,p=new Set([0,d,d+f,2*d+f]),y=2*d+2*f;for(let b=0;b<=u;b++){let M=b/u,T=s+(o-s)*M,v=r+(a-r)*M,E=e+l*Math.pow(M,1.55),R=[],I=(L,P)=>{let C=Math.pow(Math.abs(L)/Math.max(T,.01),6)*Math.pow(Math.abs(P)/Math.max(v,.01),6);R.push([t+L,E+h*Math.pow(1-M,2.2)*Math.min(1,C*1.1),n+P])};for(let L=0;L<d;L++)I(-T+2*T*L/d,-v);for(let L=0;L<f;L++)I(T,-v+2*v*L/f);for(let L=0;L<d;L++)I(T-2*T*L/d,v);for(let L=0;L<f;L++)I(-T,v-2*v*L/f);m.push(R)}i.orient([t,e-40,n]).loft(m,(b,M)=>p.has(b)||p.has((b+1)%y)?W.ridge:b%2?x:g);let S=m[0].map(b=>[b[0],b[1]-.55,b[2]]);return i.loft([m[0],S],W.plaster),i.free(),m}function Cp(i,t,e,n,s,r,o,a,l,c,u={}){var S;Gh(i,t,e,n,s,r,o,a,l,u);let h=e+l,d=(S=u.ov)!=null?S:.9,f=o+d,m=Math.max(4,Math.ceil(2*f/1.5)),x=5,g=u.tile||W.tile,p=u.tile2||W.tile2,y=[];for(let _=0;_<=x;_++){let b=-a+2*a*_/x,M=1-Math.abs(b)/a;y.push([b,c*Math.pow(M,1.35)])}i.orient([t,h-40,n]);for(let _=0;_<x;_++)for(let b=0;b<m;b++){let M=t-f+2*f*b/m,T=t-f+2*f*(b+1)/m,v=y[_],E=y[_+1];i.quad([M,h+v[1]+.15,n+v[0]],[T,h+v[1]+.15,n+v[0]],[T,h+E[1]+.15,n+E[0]],[M,h+E[1]+.15,n+E[0]],b%2?g:p)}for(let _ of[-1,1]){let b=t+_*o;i.orient([t,h,n]);for(let T=0;T<x;T++){let v=y[T],E=y[T+1];i.quad([b,h,n+v[0]],[b,h,n+E[0]],[b,h+E[1],n+E[0]],[b,h+v[1],n+v[0]],W.plaster)}let M=t+_*(o+d);i.orient([t,h,n]);for(let T=0;T<x;T++){let v=y[T],E=y[T+1];i.quad([M,h+v[1]-.1,n+v[0]],[M,h+E[1]-.1,n+E[0]],[M,h+E[1]+.3,n+E[0]],[M,h+v[1]+.3,n+v[0]],W.woodD)}i.free(),i.box(.3,.9,.9,W.gold,b+_*.1,h+c*.38,n)}i.free(),i.box(2*f,.5,.7,W.ridge,t,h+c+.35,n);for(let _ of[-1,1])i.box(1.1,1.2,1.2,W.black,t+_*f,h+c+.55,n);return h+c+.55}function Ip(i,t,e,n,s,r,o,a={}){let l=Math.max(2,Math.ceil(s/1.7)),c=4,u=a.tile||W.tile,h=a.tile2||W.tile2,d=[];for(let m=0;m<=c;m++){let x=-r/2+r*m/c,g=1-Math.abs(x)/(r/2);d.push([x,o*Math.pow(g,1.3)+(m===0||m===c?.18:0)])}i.orient([t,e-30,n]);for(let m=0;m<c;m++)for(let x=0;x<l;x++){let g=t-s/2+s*x/l,p=t-s/2+s*(x+1)/l,y=d[m],S=d[m+1];i.quad([g,e+y[1],n+y[0]],[p,e+y[1],n+y[0]],[p,e+S[1],n+S[0]],[g,e+S[1],n+S[0]],(m===c/2-.5||c/2+.5,x%2?u:h))}if(!a.noCap)for(let m of[-1,1]){let x=t+m*s/2;for(let g=0;g<c;g++){let p=d[g],y=d[g+1];i.quad([x,e,n+p[0]],[x,e,n+y[0]],[x,e+y[1],n+y[0]],[x,e+p[1],n+p[0]],W.plaster)}}i.free(),i.box(s,.38,.7,W.ridge,t,e+o+.2,n);let f=[[t-s/2,e-.5,n-r/2],[t+s/2,e-.5,n-r/2]];i.quad([t-s/2,e,n-r/2],[t+s/2,e,n-r/2],f[1],f[0],W.plaster),i.quad([t+s/2,e,n+r/2],[t-s/2,e,n+r/2],[t-s/2,e-.5,n+r/2],[t+s/2,e-.5,n+r/2],W.plaster)}function sy(i,t,e,n,s){let o=[];for(let a=0;a<=16;a++){let l=-t/2+t*a/16,c=1-Math.abs(l)/(t/2);o.push([l,e*(.5-.5*Math.cos(Math.PI*Math.pow(c,.9)))])}i.save().T(0,0,0,0,s),i.orient([0,-3,-n/2]);for(let a=0;a<16;a++){let l=o[a],c=o[a+1],u=a%2?W.tile:W.tile2;i.quad([l[0],l[1]+.2,.95],[c[0],c[1]+.2,.95],[c[0],c[1]+.2,-n],[l[0],l[1]+.2,-n],u),i.quad([l[0],l[1]-.1,.75],[c[0],c[1]-.1,.75],[c[0],c[1]+.2,.95],[l[0],l[1]+.2,.95],W.plaster),i.quad([l[0],-.7,.5],[c[0],-.7,.5],[c[0],c[1]-.1,.5],[l[0],l[1]-.1,.5],W.plaster),i.quad([l[0],l[1]-.55,.62],[c[0],c[1]-.55,.62],[c[0],c[1]+0,.62],[l[0],l[1]+0,.62],W.woodD),i.quad([l[0],-.7,-n],[c[0],-.7,-n],[c[0],c[1]+.2,-n],[l[0],l[1]+.2,-n],W.plaster)}i.box(.26,e*.5,n,W.ridge,0,e*.5+.3,-n/2+.45,!1),i.free(),i.ball(.5,W.gold,0,e*.55,.75,1,1,.8,1),i.restore()}function PE(i,t,e,n,s){i.save().T(0,0,0,0,s),i.orient([0,-2,-n/2]);for(let r of[-1,1])i.quad([0,e+.2,.5],[0,e+.2,-n],[r*(t/2+.45),-.1,-n],[r*(t/2+.45),-.1,.8],r>0?W.tile:W.tile2);i.tri([-t/2-.2,-.4,.5],[t/2+.2,-.4,.5],[0,e+.1,.5],W.plaster).tri([-t/2-.35,-.4,.58],[t/2+.35,-.4,.58],[0,e+.35,.58],W.woodD).tri([-t/2,-.4,.62],[t/2,-.4,.62],[0,e,.62],W.plaster),i.free().ball(.3,W.gold,0,e*.4,.7,1,1,.7,0),i.restore()}function ry(i,t=1){i.save().T(0,0,0,0,0,0,t);let e=[];for(let s=0;s<=9;s++){let r=s/9;e.push([-.4*Math.sin(r*2.4)*0+(-.1+r*.5-r*r*1.5)*1,.3+r*2.4-r*r*.2,0])}for(let s=0;s<=9;s++){let r=s/9,o=e[s],a=.52*(1-r*.8)+.08;i.ball(a,Ln(W.gold,.88+.2*(s%2)),o[0],o[1],o[2],1,1.05,.9,1),s>1&&s<9&&i.cyl(.13,0,.55,4,W.gold,o[0]-.05,o[1]+a*.85,0)}let n=e[9];i.ball(.3,W.gold,n[0]-.35,n[1]+.2,0,1.6,.5,.9,1).ball(.26,Ln(W.gold,1.1),n[0]-.7,n[1]+.55,0,1.3,.4,1.1,1),i.ball(.62,W.gold,.55,.35,0,1.35,.9,1,1).box(.9,.14,.6,W.gold,.95,.04,0).box(.9,.1,.55,W.gold,.95,.78,0).cyl(.07,0,.5,4,16777215,1.25,.15,.16).cyl(.07,0,.5,4,16777215,1.25,.15,-.16),i.ball(.1,W.black,.78,.62,.3,1,1,1,0).ball(.1,W.black,.78,.62,-.3,1,1,1,0);for(let s of[-1,1])i.cyl(.1,0,.9,4,W.red,.45,.95,s*.28);i.restore()}function ey(i,t,e,n,s,r,o,a,l){let c=[o];for(;c[c.length-1]>r+.05;){let f=c[c.length-1],m=(f-r)/(o-r);c.push(Math.max(r,f-(.85+.5*(1-m)+l()*.35)))}let u=f=>a*Math.pow((o-f)/(o-r),1.6),h=f=>{let m=u(f),x=n+m,g=s+m;return[[t-x,f,e-g],[t+x,f,e-g],[t+x,f,e+g],[t-x,f,e+g]]},d=[[0,0,-1],[1,0,0],[0,0,1],[-1,0,0]];i.orient([t,(r+o)/2,e]);for(let f=0;f<c.length-1;f++){let m=h(c[f]),x=h(c[f+1]),g=.78+.22*((c[f]-r)/(o-r));for(let p=0;p<4;p++){let y=m[p],S=m[(p+1)%4],_=x[p],b=x[(p+1)%4],M=Math.hypot(S[0]-y[0],S[2]-y[2]),T=(E,R)=>{let I=[y[0]+(S[0]-y[0])*E,y[1],y[2]+(S[2]-y[2])*E],L=[_[0]+(b[0]-_[0])*E,_[1],_[2]+(b[2]-_[2])*E];return[I[0]+(L[0]-I[0])*R,I[1]+(L[1]-I[1])*R,I[2]+(L[2]-I[2])*R]};i.quad(T(0,0),T(1,0),T(1,1),T(0,1),W.stoneD);let v=-l()*.5/M*3;for(;v<1;){let E=(1.5+l()*1.5)/M,R=v+E,I=Math.max(0,v)+.05/M*1.3,L=Math.min(1,R)-.05/M*1.3;if(L>I){let P=d[p],C=$=>$,F=.1,V=($,B)=>{let k=T($,B);return[k[0]+P[0]*F,k[1],k[2]+P[2]*F]},z=Ln(W.stone,g*(.8+l()*.34));i.quad(V(I,.06),V(L,.06),V(L,.94),V(I,.94),z)}v=R}}}i.free()}function Hh(i,t,e,n,s,r=1,o=1.4){i.S.at(t,e,n,s,a=>{a.box(r+.3,o+.3,.2,W.woodD,0,0,.1).box(r+.5,.14,.4,W.woodM,0,o/2+.28,.2);for(let l=-1;l<=1;l++)a.box(.07,o,.06,W.woodD,l*r*.3,0,.28);a.box(r,.06,.06,W.woodD,0,0,.28)}),i.E.at(t,e,n,s,a=>{a.box(r,o,.05,W.win,0,0,.2)})}function Pp(i,t,e,n,s,r,o,a,l,c={}){for(let u=0;u<a;u++){let h=(u+.5)/a-.5;for(let d of[1,-1])Hh(i,t+h*(s-3),n,e+d*(r/2),d>0?0:Math.PI,c.w,c.h)}for(let u=0;u<l;u++){let h=(u+.5)/l-.5;for(let d of[1,-1])Hh(i,t+d*(s/2),n,e+h*(r-3),d>0?Math.PI/2:-Math.PI/2,c.w,c.h)}}var DE=[0,Math.PI/2,Math.PI,-Math.PI/2];function ny(i,t,e,n,s,r,o,a,l,c){let u=n+(r-n)*c,h=s+(o-s)*c,d=e+a*Math.pow(c,1.55),f=a*1.55*Math.pow(c,.55),m=l%2?n-r:s-o,x=Math.atan2(f,Math.max(.3,m));return{px:i+(l===1?u:l===3?-u:0),py:d,pz:t+(l===0?h:l===2?-h:0),ry:DE[l],ang:x}}function Oh(i,t,e,n,s){let{P:r,S:o,G:a}=i,l=n,c=0;return s.forEach((u,h)=>{let{w:d,d:f,h:m}=u;r.box(d,m,f,W.plaster,t,l+m/2,e,!1),o.box(d+.26,.7,f+.26,W.woodD,t,l+.35,e,!1),o.box(d+.22,.34,f+.22,W.woodD,t,l+m-.4,e,!1),u.wood&&o.box(d+.2,m*.36,f+.2,W.woodM,t,l+m*.2+.3,e,!1);for(let y of[-1,1])for(let S of[-1,1])o.box(.42,m,.42,W.woodD,t+y*d/2,l+m/2,e+S*f/2,!1);let x=u.nx||3,g=u.nz||2;for(let y=1;y<x;y++)for(let S of[1,-1])o.box(.2,m-1.1,.12,W.woodD,t-d/2+d*y/x,l+m/2,e+S*(f/2+.03),!1);Pp(i,t,e,l+m*.55,d,f,m,x,g,{});let p=s[h+1];if(u.ro){let y=u.ro,S=p?p.w/2:0,_=p?p.d/2:0,b=l+m-.25,M=d/2+y.o,T=f/2+y.o;if(y.irimoya){if(c=Cp(r,t,b,e,M,T,d/2-.4,f/2-.4,y.rise,y.gh,{}),y.shachi)for(let v of[-1,1])a.at(t+v*(d/2-.4+.9+.6),c-.3,e,v>0?0:Math.PI,E=>ry(E,y.shachi))}else Gh(r,t,b,e,M,T,S,_,y.rise,y);if(!y.irimoya){for(let v of y.k||[]){let E=ny(t,e,b,M,T,S,_,y.rise,v,.36);r.at(E.px,E.py,E.pz,E.ry,R=>sy(R,y.kw||8,y.kh||3.4,y.kd||5,E.ang))}for(let v of y.c||[]){let E=ny(t,e,b,M,T,S,_,y.rise,v,.42);r.at(E.px,E.py,E.pz,E.ry,R=>PE(R,y.cw||3.6,y.ch||1.6,y.cd||3,E.ang))}}l=b+y.rise}else l+=m}),{top:l,ridge:c}}function Pl(i,t,e,n,s,r,o={}){let a=o.h||5,l=o.wd||4.4;i.P.at(t,e,n,r,c=>{c.box(s,a,l,W.plaster,0,a/2,0,!1),Ip(c,0,a-.3,0,s,l+2.2,o.rise||2.4,{})}),i.S.at(t,e,n,r,c=>{c.box(s+.1,.55,l+.22,W.woodD,0,.28,0,!1),c.box(s+.1,.3,l+.2,W.woodD,0,a-.2,0,!1);let u=Math.max(1,Math.floor(s/2.6));for(let h=0;h<u;h++){let d=-s/2+s*(h+.5)/u;for(let f of[1,-1])c.at(d,a*.5,f*(l/2+.13),f>0?0:Math.PI,m=>{h%2?m.quad([-.3,-.3,0],[.3,-.3,0],[.3,.3,0],[-.3,.3,0],W.black):m.tri([-.38,-.32,0],[.38,-.32,0],[0,.4,0],W.black)})}})}function Dl(i,t,e,n,s,r,o={}){let a=n-t,l=s-e,c=Math.hypot(a,l),u=Math.atan2(-l,a),h=(t+n)/2,d=(e+s)/2,f=o.h||3,m=o.th||1.3;i.P.at(h,r,d,u,x=>{x.box(c,f,m,W.plaster,0,f/2,0,!1),Ip(x,0,f-.05,0,c,m+1.5,.95,{})}),i.S.at(h,r,d,u,x=>{x.box(c+.05,.3,m+.1,W.woodD,0,.15,0,!1);let g=Math.max(1,Math.floor(c/3));for(let p=0;p<g;p++){let y=-c/2+c*(p+.5)/g;x.at(y,f*.52,m/2+.13,0,S=>{if(p%3===0)S.tri([-.34,-.3,0],[.34,-.3,0],[0,.36,0],W.black);else if(p%3===1)S.quad([-.28,-.28,0],[.28,-.28,0],[.28,.28,0],[-.28,.28,0],W.black);else{let b=[];for(let M=0;M<8;M++)b.push([Math.cos(M/8*6.283)*.3,Math.sin(M/8*6.283)*.3,0]);for(let M=0;M<8;M++)S.tri([0,0,0],b[M],b[(M+1)%8],W.black)}})}})}function LE(i,t,e,n){let{P:s,S:r,G:o,E:a,CL:l}=i;s.box(13,4.8,7,W.plaster,t,n+2.4,e,!1),r.box(13.3,.8,7.3,W.woodD,t,n+.4,e,!1),r.box(13.2,.4,7.2,W.woodD,t,n+4.4,e,!1),r.box(4.2,3.7,.3,W.black,t,n+1.85,e+3.52,!1);for(let u of[-1,1])r.box(.55,4.2,.6,W.woodD,t+u*2.4,n+2.1,e+3.6,!1),r.box(.9,3.2,.15,W.red,t+u*3.2,n+1.7,e+3.75,!1);r.box(5.6,.55,.7,W.woodD,t,n+4.1,e+3.7,!1);for(let u of[-1,1])for(let h=0;h<2;h++)Hh(i,t+u*(4.4+h*1.5),n+2.6,e+3.5,0,.9,1.2);s.box(10,3.4,5,W.plaster,t,n+4.6+1.7,e,!1),r.box(10.26,.5,5.26,W.woodD,t,n+4.6+.25,e,!1),r.box(10.2,.3,5.2,W.woodD,t,n+4.6+3.2,e,!1),Pp(i,t,e,n+6.6,10,5,3.4,3,1,{}),Gh(s,t,n+4.55,e,6.5+1.1,3.5+1.1,5,2.5,2.2,{});let c=Cp(s,t,n+4.6+3.15,e,5+1.8,2.5+1.8,4.4,2.1,1.9,2.6,{});for(let u of[-1,1])o.at(t+u*(4.4+.9+.6),c-.3,e,u>0?0:Math.PI,h=>ry(h,.5));s.at(t,n+4.55+2.2*Math.pow(.45,1.55),e+3.5+1.1-(1.1+1.5)*.45,0,u=>sy(u,6,2.5,3,.5));for(let u=0;u<5;u++){let h=t-5+u*2.5,d=n+3.4;l.box(1.9,2,.05,W.purple,h,d,e+3.62,!1),l.at(h,d,e+3.66,0,f=>{let x=[];for(let g=0;g<10;g++)x.push([Math.cos(g/10*6.283)*.5,Math.sin(g/10*6.283)*.5,0]);for(let g=0;g<10;g++)f.tri([0,0,0],x[g],x[(g+1)%10],W.cream)})}for(let u of[-1,1,0])a.box(.9,1.3,.9,W.red,t+u*6.1,n+3.3,e+4.2),r.box(.12,.9,.12,W.woodD,t+u*6.1,n+4.4,e+4.2),Me(i.h,16757610,5,t+u*6.1,n+3.3,e+4.4,.85)}function NE(i,t,e,n){let{P:s,S:r,G:o,E:a}=i;s.box(8,4.6,6.4,W.plaster,t,n+2.3,e,!1),r.box(8.26,.6,6.66,W.woodD,t,n+.3,e,!1),r.box(8.2,.3,6.6,W.woodD,t,n+4.3,e,!1),r.box(3.2,3.5,.3,W.black,t,n+1.75,e+3.25,!1);for(let c of[-1,1])r.box(.5,3.9,.5,W.woodD,t+c*1.9,n+1.95,e+3.3,!1);r.box(4.6,.5,.6,W.woodD,t,n+3.9,e+3.4,!1),s.box(5.6,3,4.4,W.plaster,t,n+4.45+1.5-.15,e,!1),r.box(5.86,.4,4.66,W.woodD,t,n+4.45+.05,e,!1),Pp(i,t,e,n+6,5.6,4.4,3,2,1,{}),Gh(s,t,n+4.45,e,4+1.5,3.2+1.5,2.8,2.2,1.8,{});let l=Cp(s,t,n+4.45+3,e,2.8+1.6,2.2+1.6,2.4,1.9,1.5,2.2,{});for(let c of[-1,1])a.box(.7,1,.7,W.red,t+c*3,n+3.2,e+3.6)}function iy(i,t,e,n,s,r){let o=i.S;o.cyl(.3*s,.46*s,3.5*s,6,W.trunk,t,e,n);let a=(r()-.5)*.8;o.cyl(.16*s,.24*s,2.2*s,5,W.trunk,t+a*.8,e+2.8*s,n+a*.4);let l=[W.pink,W.pink2,W.pink3,Ln(W.pink,1.06)];for(let[c,u,h,d]of[[0,4.7,0,2.9],[1.9,4.1,.7,2],[-1.7,4.3,-.9,2.2],[.4,5.9,-.4,1.8]])o.ball(d*s*(.9+r()*.25),l[r()*4|0],t+c*s,e+u*s,n+h*s,1,.78,1,1);o.cyl(2.5*s,2.5*s,.04,9,W.pink3,t+(r()-.5)*1.4,e+.06,n+(r()-.5)*1.4,!0)}function kh(i,t,e,n,s=1){let r=i.S,o=W.stone;r.cyl(.5*s,.62*s,.3*s,7,o,t,e,n),r.cyl(.17*s,.2*s,1.3*s,6,o,t,e+.3*s,n),r.cyl(.5*s,.32*s,.2*s,7,o,t,e+1.6*s,n),r.box(.7*s,.6*s,.7*s,o,t,e+2.1*s,n,!1),i.E.box(.46*s,.4*s,.74*s,W.win,t,e+2.1*s,n).box(.74*s,.4*s,.46*s,W.win,t,e+2.1*s,n),r.cyl(.7*s,0,.55*s,4,o,t,e+2.4*s,n),Me(i.h,16762746,2.8*s+.4,t,e+2.1*s,n,.8)}function UE(i){let{side:t,s:e,a:n,hwv:s}=i,r=Math.cos(n),o=Math.sin(n),a=qt(e),l=Kt.PO,c=(d,f)=>{let m=t*(s+l-f),x=t*d;return[a+m*r-x*o,e-(m*o+x*r)]};return{toW:c,ground:(d,f)=>{let[m,x]=c(d,f);return ti(m,x)},river:d=>{let f=t*d,m=0;for(let g=0;g<4;g++){let p=e-(m*o+f*r);m=(qt(p)-a+f*o)/r}let x=e-(m*o+f*r);return{zc:s+l-t*m,hw:fe(x)}},side:t,s0:e,a:n,hw0:s}}function Os(i,t,e,n,s,r){let o=e[0]-t[0],a=e[1]-t[1],l=e[2]-t[2],c=Math.hypot(o,a,l);c<1e-4||i.save().T((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2,Math.atan2(o,l),-Math.atan2(a,Math.hypot(o,l)),0).box(n,r||n,c,s).restore()}function*oy(i,t,e){let n=performance.now(),{side:s,hwv:r}=e,o=IE(t*7919+11),a=new Gt;a.position.set(s*(r+Kt.PO),0,0),a.rotation.y=-s*Math.PI/2,i.add(a);let l={P:new wi,S:new wi,G:new wi,E:new wi,CL:new wi,h:a,rnd:o,fr:UE(e),ctx:e,drums:[]},{P:c,S:u,G:h,E:d,CL:f}=l,m=dn+12,x=-10,g={},p=0,y=performance.now(),S=B=>{let k=c.count()+u.count()+h.count()+d.count()+f.count(),K=performance.now();g[B]=[k-p,Math.round(K-y)],p=k,y=K};u.box(2*Kt.X-1,.3,Kt.ZF-Kt.ZB-1,W.gravel,0,dn-.08,(Kt.ZF+Kt.ZB)/2,!1),ey(u,0,(Kt.ZF+Kt.ZB)/2,Kt.X,(Kt.ZF-Kt.ZB)/2,-1.8,dn,4.8,o),u.box(2*Kt.X+1.4,.5,1.2,W.stone,0,dn+0,Kt.ZF+.3,!1),ey(u,0,-12,30,22,dn-.4,m,6.4,o),u.box(61.6,.3,45.6,W.gravel,0,m-.1,-12,!1),S("piedra"),yield;let _=5.8,b=24;for(let B=0;B<b;B++){let k=m-.5*(B+1),K=10.5+B;u.box(_,k-dn,1,Ln(W.stone,.92+.1*(B*7%3)/2),x,(dn+k)/2,K+.5,!1);for(let ut of[-1,1])u.box(.6,k+.8-dn,1,W.stone,x+ut*(_/2+.3),(dn+k+.8)/2,K+.5,!1);if(B%4===1)for(let ut of[-1,1])kh(l,x+ut*(_/2+1.5),k,K+.5,.8)}S("escalera"),yield;let M=12,T=-17,v=Oh(l,M,T,m,[{w:26,d:22,h:5.4,nx:5,nz:4,wood:!0,ro:{o:2.6,rise:3.3,c:[0,2],cw:4.2,cd:3.2}},{w:23.4,d:19.4,h:4.8,nx:5,nz:4,ro:{o:2.4,rise:3,k:[0,2],kw:9,kh:3.6,kd:5.5}},{w:20.8,d:16.8,h:4.4,nx:4,nz:3,ro:{o:2.2,rise:2.8,c:[1,3],cw:4,cd:3.4}},{w:18.2,d:14.2,h:4,nx:4,nz:3,ro:{o:2,rise:2.6,k:[0,2],kw:7,kh:3,kd:4.5}},{w:15.6,d:11.8,h:3.8,nx:3,nz:2},{w:13.2,d:9.8,h:3.6,nx:3,nz:2,ro:{o:2.7,rise:3,gh:4.4,irimoya:!0,shachi:1}}]);S("keep"),yield;let E=Oh(l,-22,-27,m,[{w:12,d:10,h:4.6,nx:3,nz:2,ro:{o:1.9,rise:2.2,k:[0],kw:5,kh:2.4,kd:3.4}},{w:9.2,d:7.4,h:3.8,nx:2,nz:2,ro:{o:2,rise:2.2,gh:3,irimoya:!0,shachi:.6}}]),R=Oh(l,24,2,m,[{w:10.6,d:9,h:4.2,nx:3,nz:2,ro:{o:1.8,rise:2,k:[0],kw:5,kh:2.2,kd:3}},{w:8,d:6.6,h:3.4,nx:2,nz:2,ro:{o:1.9,rise:2,gh:2.8,irimoya:!0,shachi:.55}}]),I=Oh(l,-24,3,m,[{w:10,d:10,h:4.4,nx:3,nz:3,ro:{o:1.8,rise:2,c:[0],cw:3.4,cd:2.8}},{w:7.4,d:7.4,h:3.4,nx:2,nz:2,ro:{o:1.9,rise:3.6}}]);h.cyl(.14,0,2.2,5,W.gold,-24,I.top+.2,3).ball(.32,W.gold,-24,I.top+.2,3);for(let[B,k,K]of[[v,M,T],[E,-22,-27],[R,24,2]])u.cyl(.07,.09,4.4,4,W.woodD,k,B.ridge+.1,K),l.CL.quad([k,B.ridge+4.2,K],[k+3.4,B.ridge+3.8,K],[k+3.4,B.ridge+2.4,K],[k,B.ridge+2.7,K],W.purple);Pl(l,-8.5,m,-22,15,0),Pl(l,-22,m,-12,20,Math.PI/2),Pl(l,-16.5,m,3,5,0),Pl(l,8.5,m,3,25,0),Pl(l,22,m,-4.1,3.6,Math.PI/2),NE(l,-10,3,m),S("torres"),yield;let L=Kt.ZF-1,P=Kt.X-1,C=Kt.ZB+1;Dl(l,-P,L,-16.5,L,dn),Dl(l,-3.5,L,P,L,dn),Dl(l,-P,C,-P,L,dn),Dl(l,P,L,P,C,dn),Dl(l,P,C,-P,C,dn),LE(l,-10,L-3,dn),S("muros+puerta"),yield;for(let[B,k]of[[-44,-30],[44,-34],[-46,14]]){c.box(16,5.2,8,W.plaster,B,dn+2.6,k,!1),u.box(16.2,.7,8.2,W.woodD,B,dn+.5,k,!1),Ip(c,B,dn+5.1,k,17.5,10.4,3.2);for(let K=0;K<3;K++)Hh(l,B-4.5+K*4.5,dn+3.4,k+4.05,0,.9,1.1)}FE(l),S("kura+puente"),yield;let F=0,V=[];for(let B=0;B<7;B++){let k=15+B*3.6;V.push([x-8.2,k],[x+8.2,k])}for(let B=0;B<13;B++)V.push([-62+o()*50,-46+o()*84],[40+o()*22,-46+o()*84]);for(let B=0;B<6;B++)V.push([-40+o()*80,-49+o()*7]);for(let[B,k]of V)k>12&&k<38&&Math.abs(B-x)<7&&Math.abs(B-x)>1||Math.abs(B)<39&&k>-42&&k<19&&!(k>12&&Math.abs(B-x)>7)||k>37&&Math.abs(B-x)<10||(iy(l,B,dn+.05,k,.8+o()*.5,o),++F%9===0&&(yield));for(let[B,k]of[[-15,-10],[-11,-16],[-16,-4],[-7,-8],[-3,-14]])iy(l,B,m+.05,k,.75+o()*.3,o);for(let B=0;B<12;B++){let k=-61+B*10.4+o()*2;Math.abs(k-x)<10||kh(l,k,dn+.05,36,.9)}S("arboles"),yield,yield*ty(l),S("festival"),yield;let z=BE();a.add(c.mesh(z.plaster)),S("m-pl"),yield,a.add(u.mesh(z.solid)),S("m-s"),yield,a.add(h.mesh(z.gold),d.mesh(z.emis),f.mesh(z.cloth)),S("m-rest"),yield;for(let[B,k,K,ut]of[[M-13.5,m+4,T+11.5,26],[M+13.5,m+5,T+11.5,24],[M,m+13,T+11,26],[M,m+21,T+8,22],[M,m+28,T+6,18],[M,m+34,T+5,14],[-22,m+4,-21,14],[24,m+5,8,14],[-24,m+5,9,14],[-10,dn+5,Kt.ZF+3,18]])Me(a,16766354,ut,B,k,K,.2);S("focos"),i.updateMatrixWorld(!0);let $=new D(M,m+14,T);return a.localToWorld($),i.userData.cas={parts:g,ms:0,tris:c.count()+u.count()+h.count()+d.count()+f.count(),mats:z,keep:{x:M,z:T,top:v.top,ridge:v.ridge},drums:l.drums,h:a,fr:l.fr,cw:$},i.userData.cas.ms=performance.now()-n,i}function FE(i){let{S:t,E:e}=i,n=-10,s=61.5,r=44.4,o=1.2,a=dn+.2,l=16,c=5.4,u=x=>1.1*Math.sin(Math.PI*x)*(1-x),h=(x,g=0,p=0)=>{let y=x/l;return[n+g,o+(a-o)*y+u(y)+p,s+(r-s)*y]};for(let x=0;x<l;x++)Os(t,h(x),h(x+1),c,Ln(W.red,.9+.12*(x%2)),.3);for(let x of[-1,1]){let g=x*(c/2+.1);for(let p=0;p<=l;p++){let y=h(p,g);if(t.box(.22,1.5,.22,W.red,y[0],y[1]+.85,y[2],!1),p%5===0&&(t.ball(.2,W.gold,y[0],y[1]+1.75,y[2],1,1,1,0),e.box(.42,.6,.42,W.red,y[0],y[1]+2.2,y[2]),Me(i.h,16757610,3.4,y[0],y[1]+2.2,y[2],.85)),p<l){let S=h(p+1,g);for(let _ of[1.5,.8])Os(t,[y[0],y[1]+_,y[2]],[S[0],S[1]+_,S[2]],.12,W.red)}}}for(let x of[s-.4,(s+r)/2,r+.4])for(let g of[-1,1])t.cyl(.2,.26,o+2.6,6,W.woodD,n+g*(c/2-.2),-1.5,x);let d=Kt.PO-3,f=Kt.PO+5.2;for(let x=0;x<10;x++)t.box(3.6,.18,.62,Ln(W.woodM,.9+.2*(x%2)),n,.62,d+x*.9,!1);for(let x=0;x<6;x++)for(let g of[-1,1])t.cyl(.12,.15,2.4,5,W.woodD,n+g*1.7,-1.5,d+.6+x*1.6);for(let x of[-1,1])t.cyl(.14,.16,3.2,5,W.woodD,n+x*1.8,.6,f-.4),e.box(.4,.55,.4,W.red,n+x*1.8,3.95,f-.4),Me(i.h,16757610,3.6,n+x*1.8,3.95,f-.4,.9);let m=i.fr;for(let x=0;x<6;x++){let g=d-.8-x*.9,p=m.ground(n,g);t.box(4.6,.22,.82,Ln(W.stone,.9+.1*(x%3)),n,Math.max(p,.5),g,!1)}for(let x of[-1,1])for(let g=0;g<3;g++){let p=58.5-g*1.4,y=n+x*(4.6+g*.9),S=m.ground(y,p);Tp(i,y,Math.max(S,.3),p,[W.red,W.purple,W.blue][g%3])}}function Tp(i,t,e,n,s,r=6.2){i.S.cyl(.07,.09,r,5,W.woodD,t,e,n),i.S.box(1.3,.09,.09,W.woodD,t+.6,e+r-.2,n,!1),i.CL.box(1.1,r*.66,.04,s,t+.62,e+r*.62,n,!1),i.CL.box(1.14,.26,.05,W.cream,t+.62,e+r-.5,n,!1)}function BE(){let i=t=>new ge(Object.assign({gradientMap:we,color:16777215,vertexColors:!0,fog:!1},t||{}));return{plaster:i(),solid:i(),gold:i({emissive:0}),cloth:i({side:Zt}),emis:new Ee({color:16777215,vertexColors:!0,fog:!0})}}var zh=(i,t,e)=>{i.r+=t.r*e,i.g+=t.g*e,i.b+=t.b*e},Ap=new ct,Rp=new ct(1,.8,.5),OE=new ct(1,.72,.3);function ay(i,t,e){let n=i.userData.cas;if(!n||!n.cw)return;let s=n.mats,r=n.cw.x-U.px,o=n.cw.z-U.pz,a=Math.hypot(r,o),l=de(70,640,a)*.8;Ap.copy(vt.fog.color);let c=1-l;for(let f of[s.plaster,s.solid,s.cloth])f.color.setScalar(1-l),f.emissive.copy(Ap).multiplyScalar(l);zh(s.plaster.emissive,Rp,t*.34*c),zh(s.solid.emissive,Rp,t*.1*c),zh(s.cloth.emissive,Rp,t*.22*c),s.gold.color.setScalar(1-l),s.gold.emissive.copy(Ap).multiplyScalar(l),zh(s.gold.emissive,OE,(.14+.35*t)*c);let u=.3+.7*t;s.emis.color.setRGB(u,u*.95,u*.9);let h=performance.now(),d=Math.exp(-Math.max(0,h-($t.hitT||0))/160);for(let f of n.drums){let m=1+.05*d;f.scale.set(m,m,1)}}function ly(i){let t=zE(i);return t.userData.job?t:Uh(t)}function zE(i){let t=je(i),e=vn(t),n=Xe(i),s=new Gt,r=fe(t),o=n===6||tt(i,9)>.5?1:-1;s.position.set(qt(t),0,-t),s.rotation.y=-e;let a=(f,m)=>{let x=-e;return ti(qt(t)+f*Math.cos(x)+m*Math.sin(x),t-(-f*Math.sin(x)+m*Math.cos(x)))},l=13199183,c=11569004,u=8018508,h=qi.c,d=8368266;if(n===0){let f=r*2+12,m=18,x=11880250,g=10329242,p=M=>3.4+1.7*(1-M*M);for(let M=0;M<m;M++){let T=(M+.5)/m*2-1,v=T*f/2,E=p(T),R=Dt(s,f/m+.4,.34,4.2,c,v,E,0,{map:Ie("plank")});R.rotation.z=-T*.4,Dt(s,.07,.34,4.3,u,v-f/m/2,E,0).rotation.z=-T*.4}for(let M of[-1.7,1.7])for(let T=0;T<m;T++){let v=(T+.5)/m*2-1,E=v*f/2,R=Dt(s,f/m+.5,.4,.3,7293498,E,p(v)-.4,M);R.rotation.z=-v*.4}for(let M of[-2,2]){for(let T=0;T<=m;T++){let v=T/m*2-1,E=v*f/2,R=p(v);Dt(s,.18,1.5,.18,x,E,R+.95,M);let I=new q(new Jt(.16,8,6),Ot(14264410));if(I.position.set(E,R+1.8,M),s.add(I),T%3===0){let L=new q(new ye(.22,.22,.45,8),new Ee({color:16767392}));L.position.set(E,R+2.35,M),s.add(L);let P=new q(new Le(.3,.2,8),Ot(x));P.position.set(E,R+2.68,M),s.add(P),Me(s,16762746,3,E,R+2.35,M,.8)}}for(let T=0;T<m;T++){let v=(T+.5)/m*2-1,E=v*f/2,R=p(v),I=Dt(s,f/m+.2,.14,.14,x,E,R+1.5,M);I.rotation.z=-v*.4;let L=Dt(s,f/m+.2,.1,.1,x,E,R+.7,M);L.rotation.z=-v*.4}}let y=p(0);for(let[M,T]of[[-2.6,-1.8],[2.6,-1.8],[-2.6,1.8],[2.6,1.8]])Fe(s,.22,.26,4.2,x,M,y+2.1,T,8);let S=new q(new Le(4.6,2.4,4),Ot(5982799));S.rotation.y=Math.PI/4,S.position.y=y+5.4,S.scale.set(1,1,.8),s.add(S),Dt(s,6.4,.3,.3,14264410,0,y+4.35,-1.8),Dt(s,6.4,.3,.3,14264410,0,y+4.35,1.8);let _=new q(new Jt(.4,10,8),new Ee({color:16764810}));_.position.set(0,y+3.6,0),s.add(_),Me(s,16762746,6,0,y+3.6,0,.9);let b=[15245466,15913098,10274736,10466268];for(let M=0;M<12;M++){let T=(M+.5)/12*2-1,v=T*(f/2-2),E=p(T)+2.7+Math.sin(M*1.7)*.06,R=new q(new un(.5,.7),Ot(b[M%4],{side:Zt}));R.position.set(v,E,0),R.rotation.set(0,0,Math.PI),s.add(R)}Dt(s,f-4,.04,.04,7293498,0,p(0)+3.1,0).scale.y=1,[-1,1].forEach(M=>{let T=M*(f/2+.6);Dt(s,3.4,5.5,5,g,T,.3,0,{map:Ie("stone")}),Dt(s,3.6,.35,5.3,8223610,T,3.2,0);for(let R=0;R<3;R++)Dt(s,1.2,.3,4.2,g,M*(f/2+2.6+R*1.1),.2+R*0,0).position.y=2.2-R*.8;let v=new q(new Jt(.5,8,6),Ot(12039082));v.scale.set(.9,1.1,1),v.position.set(T,3.9,2.2),s.add(v);let E=v.clone();E.position.z=-2.2,s.add(E)}),[-.28,.28].forEach(M=>{Dt(s,1.8,5.2,4,g,M*f,.4,0,{map:Ie("stone")})})}else if(n===1)[-1,1].forEach(f=>{Fe(s,.32,.38,7,l,f*3.6,2,0,10)}),Dt(s,10.5,.5,1,l,0,5.7,0),Dt(s,11.8,.35,1.3,5982794,0,6.15,0),Dt(s,8,.28,.5,l,0,4.8,0),Me(s,16762746,3,0,4.2,0,.6);else if(n===2){let f=(g,p,y,S,_,b,M,T)=>{let v=a(p,y);g.position.set(p,v-.2,y),g.rotation.y=T,s.add(g),Dt(g,S,b,_,15258550,0,b/2,0,{map:Ie("plank")}),Dt(g,S+.3,.35,_+.3,7293498,0,.1,0);let E=new q(new Le(Math.max(S,_)*.82,b*.7,4),Ot(M));E.rotation.y=Math.PI/4,E.position.y=b+b*.3,E.scale.set(S/Math.max(S,_),1,_/Math.max(S,_)),g.add(E);let R=new Ee({color:16769184}),I=Dt(g,.9,.9,.12,16769184,-S*.22,b*.55,_/2+.02);I.material=R;let L=Dt(g,.9,.9,.12,16769184,S*.22,b*.55,_/2+.02);L.material=R,Dt(g,.8,1.5,.14,8014394,0,.85,_/2+.04),Me(g,16762746,4.2,-S*.22,b*.55,_/2+.6,.85),Me(g,16762746,4.2,S*.22,b*.55,_/2+.6,.85);let P=Dt(g,.7,1.6,.7,9075314,S*.25,b+1.1,-_*.2),C=hi(16777215,3);C.material.blending=Vi,C.material.opacity=.3,C.position.set(S*.25,b+2.8,-_*.2),g.add(C);let F=new q(new Jt(.22,8,6),Ot(14245962,{emissive:8006170}));F.position.set(S/2-.2,b*.78,_/2+.5),g.add(F),Me(g,16751210,2.4,S/2-.2,b*.78,_/2+.5,.8)},m=[11759722,9398879,11042906,8219250],x=0;for(let g of[-1,1])for(let p=0;p<7;p++){let y=-26+p*8.5+tt(i,p+g*9)*3,S=r+7+tt(i,p+30+g)*6+p%2*5,_=4+tt(i,p+50)*2.5,b=3.6+tt(i,p+60)*2,M=2.6+tt(i,p+70)*1.6;f(new Gt,g*S,y,_,b,M,m[(p+x)%4],g>0?-Math.PI/2:Math.PI/2),x++}for(let[g,p]of[[-1,-10],[1,6],[-1,18]]){let y=new Gt;y.position.set(g*(r-3.2),.35,p),s.add(y),Dt(y,8,.25,2.2,11569004,g*-0+0,0,0,{map:Ie("plank")}).position.x=g*4;for(let b of[0,3,6.4])for(let M of[-1,1])Fe(y,.1,.12,1.8,7293498,g*b+0,.2,M,5);let S=new q(new Jt(.26,8,6),new Ee({color:16766362}));S.position.set(g*6.4,1.5,1),y.add(S),Me(y,16762746,3.6,g*6.4,1.5,1,.9);let _=new q(new Jt(1,10,6),Ot(6965818));_.scale.set(.6,.3,1.9),_.position.set(g*-3.2,-.15,2.2),y.add(_)}for(let g=0;g<18;g++){let p=g/17,y=-24+p*48,S=g%2?1:-1,_=new q(new Jt(.25,8,6),new Ee({color:g%3?16766362:16751226}));_.position.set(S*(r+4+Math.sin(g)*1.2),4.2+Math.sin(g*1.9)*.5,y),s.add(_),Me(s,g%3?16762746:16751210,3.2,_.position.x,_.position.y,y,.85)}Me(s,16756838,46,o*(r+11),6,0,.28);for(let g of[-1,1])Fe(s,.25,.3,6.5,11880250,g*(r-.5),2.6,-34,8);Dt(s,r*2,.4,.5,11880250,0,5.8,-34),Me(s,16762746,4,-r*.5,5.2,-34,.9),Me(s,16762746,4,r*.5,5.2,-34,.9),Me(s,16762746,4,0,5.2,-34,.9)}else if(n===3){Vr(s,a,r,"\u685C",!1,"#d98aa6");for(let m=0;m<14;m++){let x=o*(r+4.5+tt(i,m)*15),g=(m-6.5)*4.1+tt(i,m+20)*2.4,p=a(x,g),y=new Gt,S=.9+tt(i,m+60)*.5;y.position.set(x,p,g),s.add(y),Fe(y,.26*S,.44*S,3.4*S,7294787,0,1.7*S,0,6);let _=Fe(y,.14*S,.2*S,2.2*S,7294787,.7*S,3.6*S,0,5);_.rotation.z=-.7;for(let[M,T,v,E,R]of[[0,4.5,0,2.7,h],[1.7,4,.6,1.9,qi.c2],[-1.5,4.2,-.8,2.1,h],[.4,5.5,-.4,1.6,16304598]]){let I=new q(new Sn(E*S*(.92+tt(i,m+M*7)*.2),1),Ot(R));I.scale.y=.78,I.position.set(M*S,T*S,v*S),y.add(I)}let b=new q(new yi(2.6*S,9).rotateX(-Math.PI/2),Ot(16173528,{side:Zt}));b.position.set(tt(i,m+9)*1.5-.7,.07,tt(i,m+19)*1.5-.7),y.add(b),m%3===0&&Me(y,16758475,7,0,4.6*S,0,.22)}for(let m of[-1,1]){let x=jo(s,a,o*(r+3.4),m*10+2,1.1);x.position.y=a(o*(r+3.4),m*10+2)}let f=Dt(s,3.2,.28,.9,11880250,o*(r+7.5),a(o*(r+7.5),-3)+.55,-3);Dt(s,3.2,.7,.12,11880250,o*(r+7.5),a(o*(r+7.5),-3)+1,-3.5)}else if(n===4){Vr(s,a,r,"\u9DFA",!1,"#5f8aa8");let f=900,m=new Un(np,Ns.material,f);m.frustumCulled=!1;let x=0;for(let p=0;p<f;p++){let y=p%2?1:-1,S=y*(r-5.5+tt(i,p)*13),_=(tt(i,p+50)-.5)*84;if(Math.abs(S)<r-5.8)continue;let b=1.1+tt(i,p+70)*1.5,M=Math.max(-.25,a(S,_)-.15);wn.set(S,M,_),En.setFromAxisAngle(Us,tt(i,p+90)*6.28),hn.set(b,b*(1+tt(i,p+30)*.9),b),Qe.compose(wn,En,hn),m.setMatrixAt(x,Qe),m.setColorAt(x,qe.set(ph[tt(i,p+4)*4|0])),x++}m.count=x,m.userData.keep=!0,s.add(m),s.userData.hp=[];for(let p=0;p<20;p++){let y=p%2?1:-1,S=p%3!==0,_=y*(r-(S?2.2+tt(i,p)*3.5:-1.5+tt(i,p)*2)),b=(tt(i,p+10)-.5)*70,M=.95+tt(i,p+5)*.5,T=tt(i,p+3)*6.28,v=S?-.12:a(_,b)-.1;if(p>=12){s.userData.hp.push([_,v,b,T,M,{gone:0}]);continue}let E=Lh(M,tt(i,p)*6.28);E.position.set(_,v,b),E.rotation.y=T,s.add(E)}let g=hi(16777215,10);g.material.blending=Vi,g.material.opacity=.25,g.position.set(0,1.2,0),s.add(g)}else if(n===5){Vr(s,a,r,"\u9418",!0,"#9a3a30");let f=o*(r+19),m=a(f,0),x=new Gt;x.position.set(f,m,0),x.rotation.y=-o*Math.PI/2,s.add(x);let g=10131604;Dt(x,17,3,15,g,0,-.5,0),Dt(x,15,.5,13,11841964,0,1.25,0),Dt(x,13,.5,11,12763064,0,1.75,0);for(let b=0;b<7;b++)Dt(x,6,.4,1.1,g,0,1.5-b*.28,7.9+b*.95);for(let[b,M]of[[-4,-3.2],[4,-3.2],[-4,3.2],[4,3.2],[-4,0],[4,0]])Fe(x,.34,.38,5,12730163,b,4.6,M,8);Dt(x,9.4,.5,.7,12730163,0,7.3,3.4),Dt(x,9.4,.5,.7,12730163,0,7.3,-3.4),Dt(x,.7,.5,7.2,12730163,-4.2,7.3,0),Dt(x,.7,.5,7.2,12730163,4.2,7.3,0),Dt(x,9,.35,.6,14264410,0,6.7,3.4),Dt(x,9,.2,7,8018508,0,2.15,0),Dh(x,9.6,2.7,9.1,4999770),Dt(x,5.2,1.5,5.2,15721421,0,8.7,0),Dt(x,5.5,.2,5.5,12730163,0,7.9,0),Dh(x,5.3,2,11.2,4144461),Fe(x,.1,.1,1.6,14264410,0,13,0,6);let p=new q(new Jt(.34,8,6),Ot(14264410,{emissive:5913104}));p.position.y=12.3,x.add(p),Dt(x,.5,.5,5,4864562,0,6.8,0),Fe(x,.05,.05,1.1,3811874,0,6.1,0,4);let y=Fe(x,.75,1.15,2,11831615,0,4.9,0,12,{emissive:4862992});Fe(x,.8,.8,.12,14264410,0,5.6,0,12),Me(x,16762746,5,0,4.6,0,.6);let S=Fe(x,.2,.2,4,6965818,0,3.3,2.6,6);S.rotation.x=Math.PI/2,S.position.set(0,3.5,2.6),Fe(x,.025,.025,1.6,15128736,0,4.6,2.2,4);for(let b of[-4,4])for(let M of[3.4,-3.4]){let T=new q(new Jt(.34,8,6),Ot(14245962,{emissive:9054746}));T.scale.y=1.3,T.position.set(b*1.12,6.2,M*1.05),x.add(T),Me(x,16751210,3,b*1.12,6.2,M*1.05,.85)}for(let b of[-3.4,3.4])for(let M of[10.4,14.5])jo(x,()=>0,b,M,1.15).position.y=-.1;for(let b=0;b<5;b++)Dt(x,2.6,.12,1.6,g,0,-.3,10+b*2.1);kx(x,0,-.4,17.5,1.1,12730163);let _=Hx(x,0,1.5,-3.5);_.position.set(o>0?-11.5:11.5,1.5,-2.5),_.scale.setScalar(1.1)}else if(n===6){let f=o*(r+3.6),m=a(f,0),x=new Gt;x.position.set(f,m,0),s.add(x),Vr(s,a,r,"\u6EDD",!1,"#3f7a8a");let g=M=>Ot(M);for(let M=0;M<22;M++){let T=3+tt(i,M)*3.5,v=o*(7.8+tt(i,M+5)*9),E=tt(i,M+9)*15+(v*o<8?3:0),R=(tt(i,M+13)-.5)*17,I=new q(new Sn(T,1),g(M%3?8030846:7114616));I.position.set(v,E,R),I.scale.y=1.2,x.add(I);let L=new q(new Sn(T*.75,1),g(8369002));L.position.set(v,E+T*.65,R),L.scale.set(1.05,.45,1.05),x.add(L)}for(let M=0;M<10;M++){let T=1+tt(i,M+60)*1.2,v=new q(new Sn(T,0),g(8030846));v.position.set(-o*(.5+tt(i,M+70)*3),T*.4,(tt(i,M+80)-.5)*12),x.add(v)}let p=new q(new un(7,19,1,1),pr);p.position.set(-o*.5,9.6,0),p.rotation.y=Math.PI/2,x.add(p);let y=new q(new un(3,14,1,1),pr);y.position.set(-o*.7,7,-5.6),y.rotation.y=Math.PI/2,y.rotation.z=.04,x.add(y);let S=new q(new yi(6.5,24).rotateX(-Math.PI/2),new Ee({color:13627122,transparent:!0,opacity:.6,depthWrite:!1}));S.position.set(-o*3.6,.1,0),x.add(S);let _=new q(new un(3.4,4.6).rotateX(-Math.PI/2),pr);_.rotation.y=o>0?Math.PI/2:-Math.PI/2,_.position.set(-o*3.4,.12,0),x.add(_);for(let M=0;M<6;M++){let T=hi(16777215,5+tt(i,M)*3);T.material.blending=Vi,T.material.opacity=.5,T.position.set(-o*(1+tt(i,M+3)*4),.5+tt(i,M)*.8,(tt(i,M+9)-.5)*7),x.add(T)}let b=hi(16777215,26);b.material.blending=Vi,b.material.opacity=.5,b.position.set(-o*3,4,0),x.add(b)}else if(n===7){Vr(s,a,r,"\u8336",!0,"#a9453a");let f=o*(r-3),m=new Gt;m.position.set(f,0,0),s.add(m);for(let p of[-2.4,2.4])for(let y of[-2,2])Fe(m,.12,.12,3,u,p,-.2,y,5);Dt(m,6,.3,5,c,0,1.3,0),Dt(m,4.6,2.4,3.6,15258550,0,2.6,0),Dt(m,4.8,.2,3.8,5982794,0,3.9,0),Dt(m,4.7,.15,3.7,5982794,0,1.45,0);let x=new q(new Le(4.6,2,4),Ot(9398879));x.rotation.y=Math.PI/4,x.position.y=4.8,m.add(x),Dt(m,1.2,1.1,.1,16769184,0,2.7,1.85).material=new Ee({color:16769184}),Me(m,16762746,4,0,2.7,2.1,.9);for(let p of[-.55,.55]){let y=new q(new un(1,1.4),new ge({gradientMap:we,map:Ep("\u8336","#2f3f6b","#ffffff",128,160),side:Zt}));y.position.set(p,2.9,1.93),m.add(y)}for(let p of[-2.4,2.4]){let y=new q(new Jt(.3,8,6),Ot(14245962,{emissive:8006170}));y.scale.y=1.3,y.position.set(p,3.2,2.3),m.add(y),Me(m,16751210,2.6,p,3.2,2.3,.8)}Fe(m,.05,.05,2.6,c,3.4,2.2,3.2,5);let g=new q(new Le(1.7,.7,12),Ot(12730163));g.position.set(3.4,3.6,3.2),m.add(g),Dt(m,1.8,.15,.6,c,3.4,1.5,3.2),Dt(m,1.8,.05,.62,12730163,3.4,1.6,3.2);for(let p of[-1,1]){let y=jo(s,a,f+p*6,5,1);y.position.y=a(f+p*6,5)}}else if(n===8){Vr(s,a,r,"\u7AF9\u6797",!1,"#4f8a5a");for(let f of[-1,1])for(let m=0;m<6;m++)jo(s,a,f*(r+3+tt(i,m)*2.5),-45+m*18+tt(i,m+3)*4);for(let f=0;f<12;f++){let m=f%2?1:-1,x=m*(r+4+tt(i,f)*12),g=(tt(i,f+20)-.5)*110,p=new q(new un(3.6,22),new Ee({map:si,color:16773296,transparent:!0,opacity:.14,blending:Vn,depthWrite:!1,side:Zt}));p.position.set(x,a(x,g)+10,g),p.rotation.set(0,tt(i,f+9)*3,m*.25),s.add(p)}}else if(n===10)s.userData.job=oy(s,i,{gy:a,hwv:r,side:o,s:t,a:e});else for(let f=0;f<46;f++){let m=(tt(i,f)-.5)*r*1.5,x=(tt(i,f+40)-.5)*34,g=new q(new yi(.8+tt(i,f+7)*.5,10).rotateX(-Math.PI/2),Ot(8372106,{side:Zt}));if(g.position.set(m,.05,x),s.add(g),f%4===0){let p=new q(new Sn(.34,0),Ot(16098493,{emissive:9058896}));p.scale.y=1.2,p.position.set(m,.3,x),s.add(p),Me(s,16752576,1.8,m,.5,x,.35)}}return s}var mr=new D,Dp=new D,Lp=new yn,HE=matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;function cy(i){if(ot.cine||HE||window.UX&&UX.calm&&UX.calm()||ot.X.photo)return;let t=di.get(i);if(!t)return;let e=je(i),n=fe(e),s=Xe(i),r=s===6||tt(i,9)>.5?1:-1,o=[[0,5,0,0],[0,4,0,0],[0,5,0,0],[r*(n+10),4,0,1],[0,2.5,0,0],[r*(n+19),6,0,1],[r*(n+8),8,0,1],[r*(n-3),3,0,1],[0,8,0,0],[0,0,0,0],[r*(n+80),36,r*12,1]][s],a=o[3]===1,l=a?Math.abs(o[0])+n*.3:[46,30,52,0,40,0,0,0,30,30,0][s];ot.cine={k:i,g:t,t:0,dur:s===10?17:11.5,fx:o[0],fy:o[1],fz:o[2],sd:r,sided:a,R:Math.max(30,l),h:[10,6,12,10,8,13,10,7,6,9,-26][s]}}function uy(i){if(!ot.cine){ot.cineW=0;return}ot.cine.t+=i,!ot.cine.snapped&&ot.cine.t>5.4&&(ot.cine.snapped=!0,ot.X.snap(Xe(ot.cine.k)));let t=ot.cine,e=Vf(0,2.6,t.t)*(1-Vf(t.dur-2.6,t.dur,t.t));if(ot.cineW=e,t.t>=t.dur){ot.cine=null,ot.cineW=0;return}t.g.updateMatrixWorld(!0);let n=-.5+.95*(t.t/t.dur),s=Math.cos(n),r=Math.sin(n),o=t.sided?-t.sd:0,a=t.sided?0:1,l=o*s+a*r,c=-o*r+a*s;mr.set(t.fx+l*t.R,t.fy+t.h,t.fz+c*t.R),t.g.localToWorld(mr);let u=ti(mr.x,-mr.z);mr.y=Math.max(mr.y,u+3),Dp.set(t.fx,t.fy,t.fz),t.g.localToWorld(Dp),Lp.position.copy(mr),Lp.lookAt(Dp),mn.position.lerp(mr,e),mn.quaternion.slerp(Lp.quaternion,e)}var gr=0,hy=new pn,dy=new pn,Np=new yn,Up=new D,Vh=new D,Wh=new D,fy=He("cam");function Xr(i){ot.camMode=i,fy.textContent=i?"Vista 3\xAA":"Vista 1\xAA";try{localStorage.setItem("rio3d-cam",i)}catch{}}fy.onclick=()=>Xr(1-ot.camMode);addEventListener("keydown",i=>{i.code==="KeyC"&&Xr(1-ot.camMode)});try{Xr(+localStorage.getItem("rio3d-cam")||0)}catch{}function py(i,t){let e=window.UX&&UX.calm&&UX.calm()?.25:1;t*=e;let n=Math.sin(U.t*.5)*.01*e;mn.position.set(U.px,1.18+t,U.pz).addScaledVector(new D(Math.sin(U.psi),0,-Math.cos(U.psi)),-.15),U.pitch+=(-fr.pitch*.22-U.pitch)*2*i,mn.rotation.set(U.pitch-.06,-U.psi+n,-U.steer*.02,"YXZ"),ot.camK+=((ot.camMode?1:0)-ot.camK)*Math.min(1,i*2.2),ot.camK<.01&&(gr=U.psi);{let s=innerWidth/innerHeight<1?82:68,r=s*(1-.3*ot.camK*ot.camK*(3-2*ot.camK));Math.abs(mn.fov-r)>.05&&(mn.fov=r,mn.updateProjectionMatrix())}if(ot.camK>.003){let s=ot.camK*ot.camK*(3-2*ot.camK);dy.copy(mn.quaternion),gr+=(U.psi-gr)*Math.min(1,i*1.6);let r=gr+.3;Wh.set(Math.sin(r),0,-Math.cos(r)),Up.set(U.px,6.2+t,U.pz).addScaledVector(Wh,-10.8),Wh.set(Math.sin(gr),0,-Math.cos(gr)),Vh.set(U.px,.3,U.pz).addScaledVector(Wh,6.5),Vh.x+=Math.cos(gr)*1.9,Vh.z+=Math.sin(gr)*1.9,Np.position.copy(Up),Np.lookAt(Vh),hy.copy(Np.quaternion),mn.position.lerp(Up,s),mn.quaternion.copy(dy).slerp(hy,s)}}var Xh=3120762,Fp=4176271,xr=14989394,my=12730163,Ll=15986400;function gy(i){let t=Wo(i),e=vn(t),n=tt(i,9)>.5?1:-1,s=fe(t),r=new Gt;r.position.set(qt(t),0,-t),r.rotation.y=-e;let o=(P,C)=>{let F=-e;return ti(qt(t)+P*Math.cos(F)+C*Math.sin(F),t-(-P*Math.sin(F)+C*Math.cos(F)))},a=n*(s+14),l=Math.max(o(a,0),.4),c=new Gt;c.position.set(a,l,0),c.scale.setScalar(1.5),r.add(c);let u=new wi,h=new wi,d=new wi,f=new wi,m={S:u,E:d,h:c};u.boxB(11,1.1,11,W.stone,0,-1,0).boxB(9,1.2,9,Ln(W.stone,1.08),0,.1,0).boxB(7,1.3,7,Ln(W.stone,.95),0,1.3,0).boxB(6.2,.3,6.2,W.gravel,0,2.6,0),h.boxB(7.4,.2,7.4,xr,0,2.55,0,!1);for(let[P,C]of[[-4.6,-4.6],[4.6,-4.6],[-4.6,4.6],[4.6,4.6]])kh(m,P,.2,C,1);for(let P of[-1,1])for(let C=0;C<4;C++)u.boxB(.5,.5,.5,Ln(W.stone,.9),P*5.7,.1+0,-3.5+C*2.3,!1);let x=2.9,g=new js([[0,.4,-9],[-3.2,1.6,-6.8],[-.8,3.4,-5.4],[3.1,5.4,-4],[1.4,8,-3.1],[-2.2,10.2,-1.6],[-.6,12.2,.4],[0,13,2.4],[0,12.5,4.2]].map(P=>new D(P[0],P[1]+x-.4,P[2]))),p=64,y=g.getPoints(p),S=[],_=new D(0,1,0),b=P=>.2+.98*Math.pow(Math.sin(Math.min(1,P*1.5)*Math.PI/2),.7)*(1-.32*P);for(let P=0;P<=p;P++){let C=P/p,F=y[P],V=g.getTangent(C),z=new D().crossVectors(_,V);z.lengthSq()<1e-4&&z.set(1,0,0),z.normalize();let $=new D().crossVectors(V,z).normalize(),B=b(C),k=[];for(let K=0;K<8;K++){let ut=K/8*6.2832,Rt=Math.cos(ut),ue=Math.sin(ut);k.push([F.x+(z.x*Rt+$.x*ue)*B,F.y+(z.y*Rt+$.y*ue)*B,F.z+(z.z*Rt+$.z*ue)*B])}S.push(k)}u.loft(S,(P,C)=>P>=5&&P<=7?Ln(xr,.95+.1*(C%2)):Ln(C%2?Fp:Xh,.92+.12*((C>>1)%2)));for(let P=3;P<p-4;P+=2){let C=P/p,F=y[P],V=g.getTangent(C),z=b(C),$=.35+z*.9;u.at(F.x,F.y+z*.95,F.z,Math.atan2(V.x,V.z),B=>{B.cyl(.2*$,0,1.5*$,4,P%4?my:xr,0,0,0)},-Math.atan2(V.y,Math.hypot(V.x,V.z))*.6)}for(let[P,C]of[[22,1],[22,-1],[40,1],[40,-1]]){let F=y[P],V=b(P/p),z=[F.x+C*(V+.6),F.y-V*.8,F.z+.2],$=[F.x+C*(V+1.6),Math.max(x,F.y-V*.8-2.2),F.z+.6];Os(u,[F.x+C*V*.7,F.y-V*.4,F.z],z,.38,Xh),Os(u,z,$,.3,Fp);for(let B=-1;B<=1;B++)u.at($[0]+C*.15,$[1],$[2]+B*.22,0,k=>k.cyl(.09,0,.55,4,Ll,0,-.1,0),0,0,C*-1.1)}{let P=y[40],C=b(40/p);d.ball(.55,16762986,P.x+(C+1.7),Math.max(x+.9,P.y-C-1.5)+.6,P.z+.6,1,1,1,1),Me(c,16766354,6,P.x+C+1.7,Math.max(x+.9,P.y-C-1.5)+.6,P.z+.6,.9)}{let P=y[0];for(let C=0;C<5;C++)u.at(P.x,P.y,P.z-.2,(C-2)*.28,F=>F.cyl(.3,0,1.8,4,C%2?my:xr,0,0,0),-1,0,0)}let M=y[p],T=g.getTangent(1);u.at(M.x,M.y,M.z,0,P=>{P.ball(1.15,Fp,0,0,.3,1,.92,1.25,1).boxB(1.15,.62,1.9,Xh,0,-.5,1.1).box(1.3,.3,1.2,xr,0,.45,.9),P.at(0,-.88,1.05,0,C=>C.box(1,.32,1.8,Ln(Xh,.9),0,0,.5),.38);for(let C of[-1,1]){for(let F=0;F<3;F++)P.cyl(.09,0,.45,4,Ll,C*.44,-.45,1.4+F*.5),P.at(C*.44,-.8,1.4+F*.5,0,V=>V.cyl(.08,0,.38,4,Ll,0,0,0),Math.PI);P.ball(.16,W.black,C*.28,.05,2.12,1,1,1,0),P.at(C*.5,.85,-.1,0,F=>{F.cyl(.24,.06,1.5,5,xr,0,0,0)},-.95,0,C*.2),P.at(C*.62,1.65,-1.1,0,F=>{F.cyl(.07,0,1.1,5,xr,0,0,0)},-1.45,0,C*.25);for(let F=0;F<2;F++){let V=[C*.5,-.35,1.9];Os(u,V,[C*(1.5+F*.5),-.5-F*.35,2.8],.06,Ll),Os(u,[C*(1.5+F*.5),-.5-F*.35,2.8],[C*(2.6+F*.4),-1.6-F*.4,2],.05,Ll)}}d.box(.8,.16,1.45,16742954,0,-.62,1.5);for(let C of[-1,1])d.ball(.2,16769658,C*.58,.32,.95,1,1.1,.8,1)});for(let P=0;P<7;P++){let C=(P-3)*.28;f.at(M.x,M.y+.4,M.z-.6,0,F=>F.quad([-.35,0,0],[.35,0,0],[.5+C*.3,-1.2,-3.4-P*.1],[-.5+C*.3,-1.2,-3.4-P*.1],P%2?W.red:xr),0,0,C)}Me(c,16753226,5.5,M.x,M.y-.5,M.z+1.7,.85),Me(c,16769658,2.4,M.x-.6,M.y+.3,M.z+1.1,.8),Me(c,16769658,2.4,M.x+.6,M.y+.3,M.z+1.1,.8);let v=P=>new ge(Object.assign({gradientMap:we,color:16777215,vertexColors:!0,fog:!0},P||{})),E=v(),R=v({emissive:2759680}),I=v({side:Zt}),L=new Ee({color:16777215,vertexColors:!0,fog:!0});return c.add(u.mesh(E),h.mesh(R),f.mesh(I),d.mesh(L)),r.userData.dragon={k:i,s:t,mouth:new D(a,l+(M.y-.5)*1.5,M.z*1.5+2.5),roared:!1},r.updateMatrixWorld(!0),r}var kE="rio-found-types",xy=[["Puente de madera","Dej\xE9 la caba\xF1a al amanecer. El primer puente cruje igual que mi escalera: me dio confianza.","I left the cabin at dawn. The first bridge creaks just like my stairs, and that made me brave.","\u591C\u660E\u3051\u306B\u5C0F\u5C4B\u3092\u51FA\u307E\u3057\u305F\u3002\u6700\u521D\u306E\u6A4B\u306F\u79C1\u306E\u968E\u6BB5\u3068\u540C\u3058\u3088\u3046\u306B\u304D\u3057\u3093\u3067\u3001\u52C7\u6C17\u3092\u304F\u308C\u307E\u3057\u305F\u3002"],["Torii sobre el agua","Pas\xE9 bajo un portal que flota. Ped\xED un deseo en voz baja: que la caba\xF1a nunca se quede sola.","I drifted under a gate that floats. I whispered a wish: that the cabin is never left alone.","\u6C34\u306B\u6D6E\u304B\u3076\u9580\u3092\u304F\u3050\u308A\u3001\u5C0F\u3055\u306A\u58F0\u3067\u9858\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u304C\u3072\u3068\u308A\u307C\u3063\u3061\u306B\u306A\u308A\u307E\u305B\u3093\u3088\u3046\u306B\u3002"],["Aldea de farolillos","Una aldea entera enciende farolillos para recibir a quien llega. Por primera vez no me sent\xED de paso.","A whole village lights lanterns for whoever arrives. For once I did not feel like I was just passing through.","\u6751\u3058\u3085\u3046\u304C\u3001\u8A2A\u308C\u308B\u4EBA\u306E\u305F\u3081\u306B\u63D0\u706F\u3092\u3068\u3082\u3057\u307E\u3059\u3002\u521D\u3081\u3066\u300C\u901A\u308A\u3059\u304C\u308A\u300D\u3068\u611F\u3058\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Jard\xEDn de sakura","Los cerezos sueltan p\xE9talos como si el aire tuviera memoria. Guard\xE9 uno para ti, entre las p\xE1ginas del mapa.","The cherry trees let go of petals as if the air had a memory. I saved one for you between the map pages.","\u685C\u306F\u3001\u7A7A\u6C17\u304C\u8A18\u61B6\u3092\u6301\u3063\u3066\u3044\u308B\u304B\u306E\u3088\u3046\u306B\u82B1\u3073\u3089\u3092\u6563\u3089\u3057\u307E\u3059\u3002\u5730\u56F3\u306E\u9593\u306B\u4E00\u679A\u3001\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u631F\u307F\u307E\u3057\u305F\u3002"],["Ca\xF1averal de las garzas","Las garzas pescan sin prisa. Aprend\xED de ellas que esperar tambi\xE9n es avanzar.","The herons fish without hurry. They taught me that waiting is also a way of moving forward.","\u30B5\u30AE\u306F\u6025\u304C\u305A\u9B5A\u3092\u5F85\u3061\u307E\u3059\u3002\u5F85\u3064\u3053\u3068\u3082\u524D\u306B\u9032\u3080\u3053\u3068\u3060\u3068\u6559\u308F\u308A\u307E\u3057\u305F\u3002"],["Templo de la campana","La campana suena una vez y el r\xEDo entero se acomoda. Quise que la oyeras desde tu balc\xF3n.","The bell rings once and the whole river settles. I wanted you to hear it from your balcony.","\u9418\u304C\u3072\u3068\u3064\u9CF4\u308B\u3068\u3001\u5DDD\u305C\u3093\u305F\u3044\u304C\u9759\u307E\u308A\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u30D0\u30EB\u30B3\u30CB\u30FC\u304B\u3089\u3082\u805E\u3053\u3048\u305F\u3089\u3044\u3044\u306E\u306B\u3002"],["Cascadita de musgo","Una cascada peque\xF1ita, verde de tan callada. Me qued\xE9 una tarde entera y no extra\xF1\xE9 nada.","A tiny waterfall, green with quiet. I stayed a whole afternoon and missed nothing.","\u9759\u3051\u3055\u3067\u7DD1\u306B\u67D3\u307E\u3063\u305F\u5C0F\u3055\u306A\u6EDD\u3002\u5348\u5F8C\u3044\u3063\u3071\u3044\u904E\u3054\u3057\u3066\u3001\u4F55\u3082\u604B\u3057\u304F\u306A\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Casa de t\xE9","Me sirvieron t\xE9 sin preguntar nada. Dej\xE9 encima de la mesa tu receta, por si quieres hacerla en la caba\xF1a.","They served me tea without asking a thing. I left your recipe on the table, in case you want to make it at the cabin.","\u4F55\u3082\u805E\u304B\u305A\u306B\u304A\u8336\u3092\u51FA\u3057\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u3082\u4F5C\u308C\u308B\u3088\u3046\u3001\u30EC\u30B7\u30D4\u3092\u673A\u306B\u6B8B\u3057\u307E\u3057\u305F\u3002"],["Bosque de bamb\xFA","El bamb\xFA canta cuando sopla el viento. Pens\xE9 en tu campanilla y sonre\xED sola.","The bamboo sings when the wind blows. I thought of your wind chime and smiled to myself.","\u98A8\u304C\u5439\u304F\u3068\u7AF9\u304C\u6B4C\u3044\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u98A8\u9234\u3092\u601D\u3044\u51FA\u3057\u3066\u3001\u3072\u3068\u308A\u3067\u5FAE\u7B11\u307F\u307E\u3057\u305F\u3002"],["Estanque de lotos","Un estanque de lotos que se abre de noche. Todo lo que empieza despacio merece su tiempo.","A lotus pond that opens at night. Everything that begins slowly deserves its time.","\u591C\u306B\u958B\u304F\u84EE\u306E\u6C60\u3002\u3086\u3063\u304F\u308A\u59CB\u307E\u308B\u3082\u306E\u306B\u306F\u3001\u305D\u308C\u3060\u3051\u306E\u6642\u9593\u304C\u5FC5\u8981\u3067\u3059\u3002"],["Castillo de la Garza Blanca","Llegu\xE9. El castillo brilla igual que las luces de tu terraza. No hac\xEDa falta llegar tan lejos para entenderlo: mi casa siempre fue la caba\xF1a. Cu\xEDdala a tu gusto; ya es tuya.","I made it. The castle glows just like the lights on your deck. I did not need to come this far to understand it: my home was always the cabin. Keep it your way; it is yours now.","\u305F\u3069\u308A\u7740\u304D\u307E\u3057\u305F\u3002\u57CE\u306F\u3001\u3042\u306A\u305F\u306E\u30C6\u30E9\u30B9\u306E\u706F\u308A\u3068\u540C\u3058\u3088\u3046\u306B\u8F1D\u3044\u3066\u3044\u307E\u3059\u3002\u3053\u3053\u307E\u3067\u6765\u306A\u304F\u3066\u3082\u5206\u304B\u3063\u305F\u306F\u305A\u3067\u3059\u3002\u79C1\u306E\u5BB6\u306F\u3044\u3064\u3082\u5C0F\u5C4B\u3067\u3057\u305F\u3002\u597D\u304D\u306A\u3088\u3046\u306B\u5B88\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u3082\u3046\u3042\u306A\u305F\u306E\u3082\u306E\u3067\u3059\u3002"]],RC=xy.map(i=>i[0]),CC=xy.map(i=>i[1]),yy=()=>{let i=new Set;for(let t of["rio3d-found",kE])try{JSON.parse(localStorage.getItem(t)||"[]").forEach(e=>i.add(e))}catch{}return i};var Sy="rio-tasks",Yh=[["Dejar una linterna en el barandal","Leave a lantern on the railing","\u624B\u3059\u308A\u306B\u30E9\u30F3\u30BF\u30F3\u3092\u7F6E\u304F","Dej\xE9 una linterna en el barandal. Si cruzas de noche, ah\xED estar\xE1 esper\xE1ndote.","I left a lantern on the railing. If you cross at night, it will be waiting for you.","\u624B\u3059\u308A\u306B\u30E9\u30F3\u30BF\u30F3\u3092\u7F6E\u304D\u307E\u3057\u305F\u3002\u591C\u306B\u6E21\u308B\u306A\u3089\u3001\u305D\u3053\u3067\u5F85\u3063\u3066\u3044\u307E\u3059\u3002"],["Pedir un deseo bajo el portal","Make a wish under the gate","\u9CE5\u5C45\u306E\u4E0B\u3067\u9858\u3044\u3054\u3068\u3092\u3059\u308B","Ped\xED otro deseo bajo el portal. Este no es m\xEDo: es para quien lea esto.","I made another wish under the gate. This one is not mine: it is for whoever reads this.","\u9CE5\u5C45\u306E\u4E0B\u3067\u3082\u3046\u3072\u3068\u3064\u9858\u3044\u307E\u3057\u305F\u3002\u79C1\u306E\u3067\u306F\u306A\u304F\u3001\u3053\u308C\u3092\u8AAD\u3080\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u3002"],["Encender un farolillo","Light a lantern","\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3059","Encend\xED un farolillo en la aldea. Dicen que dura hasta que alguien lo recuerda.","I lit a lantern in the village. They say it burns until someone remembers it.","\u6751\u3067\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3057\u307E\u3057\u305F\u3002\u8AB0\u304B\u304C\u601D\u3044\u51FA\u3059\u3042\u3044\u3060\u3001\u6D88\u3048\u306A\u3044\u305D\u3046\u3067\u3059\u3002"],["Guardar un p\xE9talo de sakura","Keep a sakura petal","\u685C\u306E\u82B1\u3073\u3089\u3092\u3057\u307E\u3046","Guard\xE9 otro p\xE9talo. Ya tengo suficientes para forrar una carta entera.","I kept another petal. I now have enough to line a whole letter.","\u3082\u3046\u4E00\u679A\u3001\u82B1\u3073\u3089\u3092\u3057\u307E\u3044\u307E\u3057\u305F\u3002\u624B\u7D19\u3092\u4E00\u901A\u3046\u3081\u3089\u308C\u308B\u307B\u3069\u306B\u306A\u308A\u307E\u3057\u305F\u3002"],["Quedarse quieto con las garzas","Stay still with the herons","\u30B5\u30AE\u3068\u9759\u304B\u306B\u5F85\u3064","Me qued\xE9 quieta con las garzas hasta que me olvidaron. Fue el mejor halago.","I stayed still with the herons until they forgot I was there. Best compliment ever.","\u30B5\u30AE\u306E\u305D\u3070\u3067\u3058\u3063\u3068\u3057\u3066\u3001\u79C1\u306E\u5B58\u5728\u3092\u5FD8\u308C\u3089\u308C\u308B\u307E\u3067\u5F85\u3061\u307E\u3057\u305F\u3002\u6700\u9AD8\u306E\u307B\u3081\u8A00\u8449\u3067\u3059\u3002"],["Tocar la campana","Ring the bell","\u9418\u3092\u9CF4\u3089\u3059","Toqu\xE9 la campana una vez m\xE1s. Si la oyes desde el balc\xF3n, es m\xEDa.","I rang the bell once more. If you hear it from your balcony, it is mine.","\u3082\u3046\u4E00\u5EA6\u9418\u3092\u9CF4\u3089\u3057\u307E\u3057\u305F\u3002\u30D0\u30EB\u30B3\u30CB\u30FC\u3067\u805E\u3053\u3048\u305F\u3089\u3001\u305D\u308C\u306F\u79C1\u3067\u3059\u3002"],["Llenar un frasco con agua de la cascada","Fill a jar with waterfall water","\u6EDD\u306E\u6C34\u3092\u74F6\u306B\u304F\u3080","Llen\xE9 un frasco con agua de la cascada. Ponlo en el estantito: huele a tarde larga.","I filled a jar with waterfall water. Put it on the little shelf: it smells like a long afternoon.","\u6EDD\u306E\u6C34\u3092\u74F6\u306B\u304F\u307F\u307E\u3057\u305F\u3002\u5C0F\u3055\u306A\u68DA\u306B\u7F6E\u3044\u3066\u304F\u3060\u3055\u3044\u3002\u9577\u3044\u5348\u5F8C\u306E\u9999\u308A\u304C\u3057\u307E\u3059\u3002"],["Compartir una taza de t\xE9","Share a cup of tea","\u304A\u8336\u3092\u308F\u304B\u3061\u3042\u3046","Compart\xED una taza de t\xE9. Pens\xE9 en la tuya, en la caba\xF1a, humeando.","I shared a cup of tea. I thought of yours, steaming at the cabin.","\u304A\u8336\u3092\u308F\u304B\u3061\u3042\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u6E6F\u6C17\u3092\u7ACB\u3066\u308B\u3042\u306A\u305F\u306E\u4E00\u676F\u3092\u601D\u3044\u307E\u3057\u305F\u3002"],["Escuchar el bamb\xFA","Listen to the bamboo","\u7AF9\u306E\u97F3\u306B\u8033\u3092\u3059\u307E\u3059","Escuch\xE9 el bamb\xFA un buen rato. Suena a campanilla de viento sin due\xF1o.","I listened to the bamboo a good while. It sounds like a wind chime with no owner.","\u7AF9\u306E\u97F3\u3092\u3057\u3070\u3089\u304F\u805E\u304D\u307E\u3057\u305F\u3002\u6301\u3061\u4E3B\u306E\u3044\u306A\u3044\u98A8\u9234\u306E\u3088\u3046\u3067\u3059\u3002"],["Dejar una flor en el estanque","Leave a flower on the pond","\u6C60\u306B\u82B1\u3092\u6D6E\u304B\u3079\u308B","Dej\xE9 una flor en el estanque. Flota hacia donde t\xFA ya est\xE1s.","I left a flower on the pond. It floats toward wherever you already are.","\u6C60\u306B\u82B1\u3092\u6D6E\u304B\u3079\u307E\u3057\u305F\u3002\u3042\u306A\u305F\u304C\u3044\u308B\u65B9\u3078\u6D41\u308C\u3066\u3044\u304D\u307E\u3059\u3002"],["Encender los fuegos para Mara","Light the fireworks for Mara","\u30DE\u30E9\u306E\u305F\u3081\u306B\u82B1\u706B\u3092\u3042\u3052\u308B","Esta noche los fuegos del castillo son para ti. Gracias por seguirme hasta aqu\xED.","Tonight the castle fireworks are for you. Thank you for following me all the way here.","\u4ECA\u591C\u306E\u57CE\u306E\u82B1\u706B\u306F\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u3002\u3053\u3053\u307E\u3067\u3064\u3044\u3066\u304D\u3066\u304F\u308C\u3066\u3042\u308A\u304C\u3068\u3046\u3002"]],Op=[["Escuchar el crujido del puente","Listen to the bridge creak","\u6A4B\u306E\u304D\u3057\u3080\u97F3\u3092\u805E\u304F","Volv\xED al puente: cruji\xF3 con tu mismo ritmo al cruzar. Ya no suena a madera, suena a casa.","I came back to the bridge: it creaked in your same rhythm. It no longer sounds like wood; it sounds like home.","\u6A4B\u306B\u623B\u308B\u3068\u3001\u3042\u306A\u305F\u3068\u540C\u3058\u6B69\u5E45\u3067\u304D\u3057\u307F\u307E\u3057\u305F\u3002\u3082\u3046\u6728\u306E\u97F3\u3067\u306F\u306A\u304F\u3001\u5BB6\u306E\u97F3\u3067\u3059\u3002"],["Mirar el reflejo del portal","Watch the gate\u2019s reflection","\u9CE5\u5C45\u306E\u6620\u308A\u3092\u773A\u3081\u308B","Esta vez mir\xE9 el reflejo en lugar del portal. Se ve igual de bien, pero m\xE1s tranquilo.","This time I looked at the reflection instead of the gate. It looks just as good, only calmer.","\u4ECA\u56DE\u306F\u9CE5\u5C45\u3067\u306F\u306A\u304F\u6C34\u9762\u306E\u6620\u308A\u3092\u898B\u307E\u3057\u305F\u3002\u540C\u3058\u304F\u3089\u3044\u304D\u308C\u3044\u3067\u3001\u3082\u3063\u3068\u9759\u304B\u3067\u3059\u3002"],["Saludar a quien pasa en la aldea","Greet someone passing in the village","\u6751\u3067\u3059\u308C\u3061\u304C\u3046\u4EBA\u306B\u3042\u3044\u3055\u3064\u3059\u308B","Una se\xF1ora de la aldea me salud\xF3 como si fuera vecina. Le dije que ten\xEDa una caba\xF1a lejos, y sonri\xF3.","A woman in the village greeted me like a neighbor. I told her I had a cabin far away, and she smiled.","\u6751\u306E\u5973\u6027\u304C\u96A3\u4EBA\u306E\u3088\u3046\u306B\u3042\u3044\u3055\u3064\u3057\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u9060\u304F\u306B\u5C0F\u5C4B\u304C\u3042\u308B\u3068\u8A71\u3059\u3068\u3001\u7B11\u3063\u3066\u304F\u308C\u307E\u3057\u305F\u3002"],["Atrapar un p\xE9talo en el aire","Catch a petal in the air","\u821E\u3046\u82B1\u3073\u3089\u3092\u3064\u304B\u3080","Atrap\xE9 un p\xE9talo en el aire sin intentarlo. Dicen que da suerte; te lo mando de regalo.","I caught a petal in mid-air without trying. They say it brings luck; I am sending it to you.","\u4F55\u6C17\u306A\u304F\u7A7A\u4E2D\u3067\u82B1\u3073\u3089\u3092\u3064\u304B\u307F\u307E\u3057\u305F\u3002\u5E78\u904B\u306E\u3057\u308B\u3057\u3060\u305D\u3046\u3067\u3059\u3002\u3042\u306A\u305F\u306B\u8D08\u308A\u307E\u3059\u3002"],["Contar las garzas en silencio","Count the herons in silence","\u9759\u304B\u306B\u30B5\u30AE\u3092\u6570\u3048\u308B","Cont\xE9 las garzas sin mover un dedo: siempre salen una m\xE1s de las que cre\xEDa.","I counted the herons without moving a finger: there is always one more than I thought.","\u6307\u4E00\u672C\u52D5\u304B\u3055\u305A\u30B5\u30AE\u3092\u6570\u3048\u307E\u3057\u305F\u3002\u601D\u3063\u305F\u3088\u308A\u3001\u3044\u3064\u3082\u3072\u3068\u3064\u591A\u3044\u306E\u3067\u3059\u3002"],["Escuchar c\xF3mo se apaga el eco de la campana","Listen to the bell\u2019s echo fade","\u9418\u306E\u4F59\u97FB\u304C\u6D88\u3048\u308B\u306E\u3092\u805E\u304F","Esper\xE9 a que el eco se apagara del todo. Dura m\xE1s de lo que uno imagina, y es lo mejor de la campana.","I waited for the echo to fade completely. It lasts longer than you think, and it is the best part of the bell.","\u4F59\u97FB\u304C\u5B8C\u5168\u306B\u6D88\u3048\u308B\u307E\u3067\u5F85\u3061\u307E\u3057\u305F\u3002\u601D\u3046\u3088\u308A\u9577\u304F\u3001\u305D\u308C\u304C\u9418\u306E\u3044\u3061\u3070\u3093\u597D\u304D\u306A\u3068\u3053\u308D\u3067\u3059\u3002"],["Mojar los dedos en la cascada","Dip your fingers in the waterfall","\u6EDD\u306B\u6307\u3092\u3072\u305F\u3059","Moj\xE9 los dedos en la cascada: estaba fr\xEDa y clara. Te mando un poco de ese fr\xEDo para el verano.","I dipped my fingers in the waterfall: cold and clear. I am sending you a little of that chill for summer.","\u6EDD\u306B\u6307\u3092\u3072\u305F\u3057\u307E\u3057\u305F\u3002\u51B7\u305F\u304F\u3066\u6F84\u3093\u3067\u3044\u307E\u3059\u3002\u590F\u306E\u305F\u3081\u306B\u3001\u5C11\u3057\u305D\u306E\u51B7\u305F\u3055\u3092\u9001\u308A\u307E\u3059\u3002"],["Mirar c\xF3mo suben el vapor y la tarde","Watch the steam and the afternoon rise","\u6E6F\u6C17\u3068\u5915\u65B9\u304C\u7ACB\u3061\u306E\u307C\u308B\u306E\u3092\u898B\u308B","El vapor del t\xE9 sub\xEDa despacio y la tarde con \xE9l. Anot\xE9 la hora: no se me va a olvidar.","The tea steam rose slowly and the afternoon with it. I wrote down the time: I will not forget it.","\u304A\u8336\u306E\u6E6F\u6C17\u304C\u3086\u3063\u304F\u308A\u6607\u308A\u3001\u5915\u65B9\u3082\u3044\u3063\u3057\u3087\u306B\u6607\u308A\u307E\u3057\u305F\u3002\u6642\u523B\u3092\u66F8\u304D\u3068\u3081\u305F\u306E\u3067\u3001\u5FD8\u308C\u307E\u305B\u3093\u3002"],["Dejar que el viento mueva el bamb\xFA","Let the wind move the bamboo","\u98A8\u304C\u7AF9\u3092\u3086\u3089\u3059\u306E\u306B\u307E\u304B\u305B\u308B","No hice nada y el bamb\xFA hizo todo. Aprend\xED que a veces ayudar es apartarse.","I did nothing and the bamboo did everything. I learned that sometimes helping means stepping aside.","\u4F55\u3082\u3057\u306A\u3044\u3068\u3001\u7AF9\u304C\u3059\u3079\u3066\u3092\u3084\u3063\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u3068\u304D\u306B\u306F\u8EAB\u3092\u5F15\u304F\u3053\u3068\u304C\u52A9\u3051\u306B\u306A\u308B\u3068\u77E5\u308A\u307E\u3057\u305F\u3002"],["Ver c\xF3mo se cierra un loto","Watch a lotus close","\u84EE\u304C\u9589\u3058\u308B\u306E\u3092\u898B\u308B","Vi cerrarse un loto al amanecer. No es un final: es el mismo descanso que el tuyo.","I watched a lotus close at dawn. It is not an ending: it is the same rest you take.","\u591C\u660E\u3051\u306B\u84EE\u304C\u9589\u3058\u308B\u306E\u3092\u898B\u307E\u3057\u305F\u3002\u7D42\u308F\u308A\u3067\u306F\u306A\u304F\u3001\u3042\u306A\u305F\u306E\u4F11\u307F\u3068\u540C\u3058\u4F11\u307F\u3067\u3059\u3002"],["Mirar el castillo desde el agua","Look at the castle from the water","\u6C34\u306E\u4E0A\u304B\u3089\u57CE\u3092\u773A\u3081\u308B","Mir\xE9 el castillo desde el agua, como la primera vez. Sigue pareci\xE9ndose a las luces de tu terraza.","I looked at the castle from the water, like the first time. It still looks like the lights of your terrace.","\u6700\u521D\u306E\u3068\u304D\u306E\u3088\u3046\u306B\u3001\u6C34\u306E\u4E0A\u304B\u3089\u57CE\u3092\u773A\u3081\u307E\u3057\u305F\u3002\u3084\u306F\u308A\u3042\u306A\u305F\u306E\u30C6\u30E9\u30B9\u306E\u706F\u308A\u306B\u4F3C\u3066\u3044\u307E\u3059\u3002"]];var Ey="rio-tasks2",My=2,zp=()=>{let i=new Date;return i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()},kp=()=>{try{let i=JSON.parse(localStorage.getItem(Ey)||"{}")||{};return i.d=i.d||{},i}catch{return{d:{}}}},vy=()=>kp().d,GE=()=>{let i=kp();return i.day===zp()?Math.max(0,My-(i.n||0)):My};var wy=()=>{try{return JSON.parse(localStorage.getItem(Sy)||"{}")}catch{return{}}};var VE=()=>yy().has(10);function _y(i){i.add(Yh.map(t=>[t[0],t[1],t[2]])),i.add(Yh.map(t=>[t[3],t[4],t[5]])),i.add(Op.map(t=>[t[0],t[1],t[2]])),i.add(Op.map(t=>[t[3],t[4],t[5]])),i.add([["Carta de vuelta","Letter back","\u8FD4\u4E8B\u306E\u624B\u7D19"],["Hoy ya diste dos vueltas. Ma\xF1ana, m\xE1s.","You have already done two returns today. More tomorrow.","\u4ECA\u65E5\u306F\u3082\u3046\u4E8C\u56DE\u3075\u308A\u8FD4\u308A\u307E\u3057\u305F\u3002\u7D9A\u304D\u306F\u660E\u65E5\u3002"]]),i.add([["Mant\xE9n pulsado para hacerlo","Press and hold to do it","\u9577\u62BC\u3057\u3067\u5B9F\u884C"],["Hecho. Un recuerdo m\xE1s para la caba\xF1a.","Done. One more keepsake for the cabin.","\u3067\u304D\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u306B\u601D\u3044\u51FA\u304C\u3072\u3068\u3064\u5897\u3048\u307E\u3057\u305F\u3002"],["Encargo de Mara","Mara\u2019s errand","\u30DE\u30E9\u306E\u304A\u9858\u3044"],["En el margen","In the margin","\u4F59\u767D\u306B"]])}var oi,Qo,qh,xs=null,Nl=0,Ul=0,Bp=0,Ty=0,by=!1,Hp=null;function WE(){oi=document.createElement("button"),oi.type="button",oi.style.cssText="position:fixed;left:50%;bottom:max(150px,calc(env(safe-area-inset-bottom) + 144px));transform:translateX(-50%);z-index:60;display:none;min-height:50px;max-width:min(90vw,420px);padding:10px 20px;border-radius:99px;border:1px solid #ffc77a;background:rgba(40,40,80,.88);color:#fbf1e0;font:600 .9rem/1.25 system-ui;cursor:pointer;overflow:hidden;touch-action:none",Qo=document.createElement("span"),Qo.style.cssText="position:absolute;left:0;top:0;bottom:0;width:0;background:rgba(255,199,122,.35);pointer-events:none",qh=document.createElement("span"),qh.style.cssText="position:relative",oi.append(Qo,qh),document.body.appendChild(oi);let i=e=>{xs!=null&&(e.preventDefault(),Ul=1,Ty=performance.now(),XE())},t=()=>{Ul=0,Qo.style.width="0"};oi.addEventListener("pointerdown",i),oi.addEventListener("pointerup",t),oi.addEventListener("pointerleave",t),oi.addEventListener("pointercancel",t),oi.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Ay())})}function XE(){cancelAnimationFrame(Bp);let i=()=>{if(!Ul)return;let t=Math.min(1,(performance.now()-Ty)/2200);if(Qo.style.width=t*100+"%",t>=1){Ul=0,Ay();return}Bp=requestAnimationFrame(i)};Bp=requestAnimationFrame(i)}function Ay(){if(xs==null)return;if(Nl){let t=kp();t.d[xs]=1,t.n=(t.day===zp()&&t.n||0)+1,t.day=zp();try{localStorage.setItem(Ey,JSON.stringify(t))}catch{}}else{let t=wy();t[xs]=1;try{localStorage.setItem(Sy,JSON.stringify(t))}catch{}}let i=xs;xs=null,Nl=0,oi.style.display="none",Qo.style.width="0";try{Hp&&Hp(i)}catch{}try{UX.hap([10,50,10])}catch{}try{UX.say(UX.tr("Hecho. Un recuerdo m\xE1s para la caba\xF1a."))}catch{}}function Ry(i,t){if(!by){by=!0;try{_y(window.UX)}catch{}}Hp=t;let e=i!=null&&Yh[i]&&VE(),n=e&&!wy()[i],s=e&&!n&&!vy()[i]&&GE()>0;if(!(n||s)){xs!=null&&!Ul&&(xs=null,Nl=0,oi&&(oi.style.display="none"));return}xs===i&&Nl===(s?1:0)||(oi||WE(),xs=i,Nl=s?1:0,qh.textContent=UX.tr((s?Op:Yh)[i][0])+" \xB7 "+UX.tr("Mant\xE9n pulsado para hacerlo"),oi.style.display="block")}var ta=new Map;try{window.__dragons=ta}catch{}function qE(i,t,e){for(let[n,s]of ta){let r=s.userData.dragon.s;(r<i-140||r>i+380)&&(vt.remove(s),wp(s),ta.delete(n))}for(let n=Math.max(0,t-1);n<=e+2;n++){if(Xe(n)!==10||ta.has(n))continue;let s=Wo(n);if(s<i-140||s>i+380)continue;let r=gy(n);ta.set(n,r),vt.add(r)}for(let[,n]of ta){let s=n.userData.dragon;if(!s.roared&&i>s.s-60&&i<s.s+20){s.roared=!0;try{$t.roar()}catch{}fi("El drag\xF3n anuncia el Castillo de la Garza Blanca")}}}function Cy(i){let t=Math.max(0,Math.floor((i-140)/Di)),e=Math.floor((i+340)/Di);qE(i,t,e);for(let[n,s]of di)(n<t||n>e)&&(s.parent&&vt.remove(s),wp(s),di.delete(n));for(let n=t;n<=e;n++){let s=di.get(n);s||(s=ly(n),di.set(n,s)),s.parent||vt.add(s);{let r=Xe(n);if(je(n)-i<(r===2?70:r===10?130:55)&&i-je(n)<25&&(!Si.has(r)||!ot.X.hasSnap(r)&&!dp.has(r))){let o=!Si.has(r);if(Si.add(r),dp.add(r),wx.add(n),cy(n),r===4&&Pr("garza"),r===9&&Pr("loto"),o){fi("Descubriste: "+Ji[r]);try{$t.chime(0,n%5)}catch{}Ex(),wh(i),ot.X.found(r)}}}}{let n=null;for(let s=t;s<=e;s++)if(Math.abs(je(s)-i)<60){n=Xe(s);break}Ry(n,()=>{try{$t.chime(0,2)}catch{}})}for(let[,n]of di)if(n.userData.job){let s=performance.now(),r;do r=n.userData.job.next();while(!r.done&&performance.now()-s<5);r.done&&(n.userData.job=null,Uh(n))}else n.userData.cas&&ay(n,ce.night,.016);for(let n of kr)n.material.opacity=n.userData.base*(.3+.7*ot.glowK);Nh.uniforms.k.value=ot.glowK,pr.uniforms.t.value=U.t,pr.uniforms.fogCol.value.copy(vt.fog.color);for(let n of ms)n.nk?n.nk.rotation.x=Math.sin(U.t*.5+n.ph)*.08+Math.pow(Math.max(0,Math.sin(U.t*.23+n.ph*3)),6)*.9:n.b.rotation.y=Math.sin(U.t*1.1+n.ph)*.12}var Vp=new Ee({vertexColors:!0,transparent:!0,opacity:.7,depthWrite:!1,side:Zt}),ea=ni,Iy=new Float32Array(ea*4*2*3),Py=new Float32Array(ea*4*2*4),na=new jt;na.setAttribute("position",new kt(Iy,3));na.setAttribute("color",new kt(Py,4));{let i=[];for(let t=0;t<2;t++)for(let e=0;e<ea-1;e++){let n=(t*ea+e)*4;i.push(n,n+1,n+4,n+1,n+5,n+4,n+1,n+2,n+5,n+2,n+6,n+5,n+2,n+3,n+6,n+3,n+7,n+6)}na.setIndex(i)}var Bl=new q(na,Vp);Bl.frustumCulled=!1;Bl.renderOrder=1;vt.add(Bl);function Dy(i){let t=i-60;for(let e=0;e<2;e++){let n=e?1:-1;for(let s=0;s<ea;s++){let r=t+s*ii,o=fe(r)-1+(rn(r*.08,e*9)-.5)*.9,a=.9+rn(r*.2,e)*.9,l=qt(r)+n*o,c=-r,u=.25+.55*rn(r*.11+e*30,5),h=(e*ea+s)*4,d=[l-n*a*1.4,l-n*a*.4,l+n*a*.5,l+n*a*1.5],f=[0,u,u*.6,0];for(let m=0;m<4;m++)Iy.set([d[m],.05,c],(h+m)*3),Py.set([1,1,1,f[m]],(h+m)*4)}}na.attributes.position.needsUpdate=na.attributes.color.needsUpdate=!0}var YE=(()=>{let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,.55)"),e.addColorStop(.55,"rgba(255,255,255,.4)"),e.addColorStop(.85,"rgba(255,255,255,.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let n=new xi(i);return n.colorSpace=An,n})(),Ly=96,Wp=[];for(let i=0;i<Ly;i++){let t=new q(new yi(.5,20).rotateX(-Math.PI/2),new Ee({color:16777215,map:YE,transparent:!0,opacity:0,depthWrite:!1}));t.position.y=.045,t.userData={age:9,vx:0,vz:0},vt.add(t),Wp.push(t)}var ZE=0,Gp=0;function Fl(i,t,e,n,s,r=3.2,o=.38){let a=Wp[ZE++%Ly];a.position.set(i,.045,t),a.userData={age:0,vx:e,vz:n,sc:s,life:r,mx:o},a.scale.setScalar(.4)}var Jh=60,Xp=new jt,Zh=new Float32Array(Jh*3),qp=[];for(let i=0;i<Jh;i++)qp.push({l:0,x:0,y:-9,z:0,vx:0,vy:0,vz:0});Xp.setAttribute("position",new kt(Zh,3));var JE=new Gi({color:15398655,size:.16,transparent:!0,opacity:.9,depthWrite:!1}),Ny=new Ci(Xp,JE);Ny.frustumCulled=!1;vt.add(Ny);var $E=0;function $h(i,t,e,n){for(let s=0;s<n;s++){let r=qp[$E++%Jh];r.l=1,r.x=i,r.y=t,r.z=e;let o=Math.random()*6.28,a=.8+Math.random()*1.4;r.vx=Math.cos(o)*a,r.vz=Math.sin(o)*a,r.vy=2+Math.random()*2.2}qn(i,e)}function Uy(i){for(let t=0;t<Jh;t++){let e=qp[t];e.l>0&&(e.l-=i*1.4,e.vy-=9*i,e.x+=e.vx*i,e.y+=e.vy*i,e.z+=e.vz*i,e.y<0&&(e.l=0)),Zh[t*3]=e.l>0?e.x:0,Zh[t*3+1]=e.l>0?e.y:-50,Zh[t*3+2]=e.z}if(Xp.attributes.position.needsUpdate=!0,Gp-=i,Gp<=0&&ot.started){Gp=.11;let t=Math.min(U.v,5),e=Math.cos(U.psi),n=Math.sin(U.psi),s=U.px-Math.sin(U.psi)*1.5,r=U.pz+Math.cos(U.psi)*1.5;for(let o of[-1,1])Fl(s+e*.5*o,r+n*.5*o,e*o*.5,n*o*.5,.7+t*.12);if(t>.8){let o=U.px+Math.sin(U.psi)*2.9,a=U.pz-Math.cos(U.psi)*2.9,l=Math.min(t/4,1);for(let c of[-1,1])Fl(o+e*.25*c,a+n*.25*c,e*c*(.9+l*.5)-Math.sin(U.psi)*.4,n*c*(.9+l*.5)+Math.cos(U.psi)*.4,.3+l*.3,1.7,.2*l+.08)}}Wp.forEach(t=>{let e=t.userData,n=e.life||3.2;if(e.age>=n){t.material.opacity=0;return}e.age+=i;let s=e.age/n;t.position.x+=(e.vx||0)*i,t.position.z+=(e.vz||0)*i,t.scale.setScalar((.4+s*2.6)*(e.sc||1)),t.material.opacity=(e.mx||.38)*1.5*(1-s)*(1-s)})}var KE=5,qr=[],Fy=[[15763530,16773600],[15245898,16177568],[14835775,16771538],[14272928,15763530]];function jE(i){let t=new Gt,e=Fy[i%Fy.length],n=new q(new Jt(.5,12,8),Ot(e[0]));n.scale.set(.32,.26,1),t.add(n);let s=new q(new Jt(.5,10,6),Ot(e[1]));s.scale.set(.33,.1,.55),s.position.set(0,.12,-.05),t.add(s);let r=new Gt;r.position.z=.45,t.add(r);let o=new q(new Le(.22,.5,4),Ot(e[0],{side:Zt}));o.rotation.x=-Math.PI/2,o.scale.set(1.2,1,.18),o.position.z=.22,r.add(o);let a=new q(new Le(.08,.3,3),Ot(e[0]));return a.position.set(0,.2,.05),a.rotation.x=-.3,t.add(a),t.userData={tail:r,st:0,t:0,ph:Math.random()*6,sp:.7+Math.random()*.6,tx:0,tz:0,jt:0},vt.add(t),t}for(let i=0;i<KE;i++)qr.push(jE(i));function ky(i,t){let e=t+14+Math.random()*70,n=(Math.random()*2-1)*(fe(e)-3);i.position.set(qt(e)+n,-.05,-e),i.userData.st=0,i.userData.rest=0,i.userData.fol=0,i.userData.fmax=0,i.userData.hd=vn(e)+(Math.random()-.5)*1.2,i.userData.jt=2+Math.random()*10,i.rotation.set(0,0,0),i.visible=!0}qr.forEach(i=>ky(i,30+Math.random()*60));function Gy(i,t){for(let e of qr){let n=e.userData;n.t+=i;let s=e.position.z-U.pz,r=-e.position.z;if(r<t-12||r>t+120){ky(e,t);continue}if(n.st===0){n.hd+=Math.sin(n.t*.6+n.ph)*.5*i;let o=e.position.x-qt(r),a=fe(r)-3;Math.abs(o)>a&&(n.hd+=(vn(r)+(o>0?-1:1)*.9-n.hd)*i*1.5),e.position.x+=Math.sin(n.hd)*n.sp*i,e.position.z-=Math.cos(n.hd)*n.sp*i,e.position.y=-.02+Math.sin(n.t*2+n.ph)*.01,e.rotation.set(0,-n.hd,0),n.tail.rotation.y=Math.sin(n.t*7)*.5,Math.random()<i*.03&&s<-6&&s>-45?(e.userData.st=1,n.j=0,n.vx=Math.sin(n.hd)*2.6,n.vz=-Math.cos(n.hd)*2.6,$h(e.position.x,.1,e.position.z,5),$t.plop((e.position.x-U.px)/25)):Math.random()<i*.05&&Math.abs(s)<30&&Math.abs(s)>5&&Fl(e.position.x,e.position.z,0,0,.7)}else{n.j+=i;let o=.95,a=n.j/o,l=Math.sin(Math.PI*a)*1.25;e.position.x+=n.vx*i,e.position.z+=n.vz*i,e.position.y=-.02+l;let c=Math.cos(Math.PI*a)*1.25*Math.PI/o;e.rotation.set(0,-n.hd,0),e.rotateX(Math.atan2(c,2.6)),n.tail.rotation.y=Math.sin(n.t*26)*.6,n.j>=o&&(e.userData.st=0,e.position.y=-.02,e.rotation.set(0,-n.hd,0),$h(e.position.x,.1,e.position.z,9),$t.plop((e.position.x-U.px)/25))}}Uy(i)}var Vy=[],Yr=[];function QE(i){let t=new Gt,e=i%3!==2,n=e?16184302:9279656,s=e?15262424:7305868,r=new q(new Jt(.28,10,8),Ot(n));r.scale.set(.7,.7,1.8),t.add(r);let o=new q(new ye(.045,.06,.5,6),Ot(n));o.rotation.x=1.15,o.position.set(0,.1,-.5),t.add(o);let a=new q(new Jt(.09,8,6),Ot(n));a.position.set(0,.3,-.72),t.add(a);let l=new q(new Le(.035,.3,5),Ot(15245898));l.rotation.x=-Math.PI/2,l.position.set(0,.3,-.95),t.add(l);let c=[-1,1].map(h=>{let d=new Gt;d.position.set(h*.12,.08,-.05),t.add(d);let f=new q(new Fn(1.35,.03,.62),Ot(s));f.position.x=h*.68,d.add(f);let m=new q(new Fn(.5,.03,.4),Ot(e?4934485:5857391));return m.position.set(h*1.5,0,.05),d.add(m),d}),u=new q(new Le(.12,.45,4),Ot(n));return u.rotation.x=Math.PI/2,u.position.z=.65,t.add(u),t.scale.setScalar(1.5),t.userData={wings:c,ph:Math.random()*6,fl:0,sp:5+Math.random()*2.5,hd:0,h:7+Math.random()*7,off:(Math.random()-.5)*20},vt.add(t),t}function tw(i){let t=new Gt,e=[4178377,14701130,5214169,8115818],n=e[i%4],s=new q(new ye(.025,.018,.5,6),Ot(n,{emissive:n,emissiveIntensity:.35}));s.rotation.x=Math.PI/2,t.add(s);let r=new q(new Jt(.055,8,6),Ot(n));r.position.z=-.27,t.add(r);let o=new Ee({color:15398655,transparent:!0,opacity:.5,side:Zt,depthWrite:!1}),a=[];return[[-1,-.1],[-1,.06],[1,-.1],[1,.06]].forEach(([l,c])=>{let u=new Gt;u.position.set(0,.02,c),t.add(u);let h=new q(new un(.38,.1).rotateX(-Math.PI/2),o);h.position.x=l*.2,u.add(h),a.push([u,l])}),t.scale.setScalar(1.8),t.userData={wings:a,tx:0,ty:1,tz:0,t:0,ph:Math.random()*6,sp:4},vt.add(t),t}for(let i=0;i<8;i++)Yr.push(tw(i));var Zr=[];function ew(i){let t=new Gt,e=i%2?7301724:15328472,n=i%2?4868672:13217410,s=new q(new Jt(.3,10,8),Ot(e));s.scale.set(.85,.6,1.35),s.position.y=.12,t.add(s);let r=new q(new Le(.12,.3,5),Ot(e));r.rotation.x=-Math.PI/2*1.1,r.position.set(0,.2,.4),t.add(r);let o=new Gt;o.position.set(0,.3,-.25),t.add(o);let a=new q(new ye(.06,.08,.34,6),Ot(e));a.position.y=.15,o.add(a);let l=new q(new Jt(.1,8,6),Ot(i%2?3486766:e));l.position.set(0,.34,-.03),o.add(l);let c=new q(new Le(.04,.16,5),Ot(15245898));return c.rotation.x=-Math.PI/2,c.position.set(0,.33,-.15),o.add(c),t.scale.setScalar(1.15),t.userData={neck:o,t:Math.random()*6,dip:0,nd:3+Math.random()*5,hd:Math.random()*6.28,tx:0,tz:0},vt.add(t),t}function Yp(i,t){let e=t+14+Math.random()*60,n=(Math.random()*2-1)*(fe(e)-6);i.position.set(qt(e)+n,0,-e),i.userData.hd=vn(e)+(Math.random()-.5)*2}for(let i=0;i<4;i++){let t=ew(i);i>=2&&t.scale.setScalar(.72),Zr.push(t)}Zr.forEach(i=>Yp(i,30));function Wy(i,t){let e=t+8+Math.random()*60,n=(Math.random()*2-1)*(fe(e)+2);i.position.set(qt(e)+n,.6+Math.random()*1.1,-e),i.userData.tx=i.position.x,i.userData.ty=i.position.y,i.userData.tz=i.position.z}Yr.forEach(i=>Wy(i,30));function Xy(i,t){let e=1-Ae(ce.night*1.5,0,1)*1,n=e>.15&&an.rain<.6;for(let s of Zr){s.visible=e>.1;let r=s.userData;r.t+=i;let o=-s.position.z,a=o-t;if(!r.follow&&!(r.flee>0)&&(a<-14||a>110)){Yp(s,t);continue}if(r.follow&&a<-70){r.follow=0,Yp(s,t);continue}if(r.nd-=i,r.nd<=0&&r.dip<=0&&!r.follow&&!(r.flee>0)&&(r.dip=1.3,r.nd=5+Math.random()*7,r.rip=!1),r.dip>0){r.dip-=i;let l=Math.sin(Math.PI*Ae(1-r.dip/1.3));r.neck.rotation.x=1.2*l,s.rotation.x=.9*l*.5,s.position.y=-.05*l,l>.9&&!r.rip&&(r.rip=!0,qn(s.position.x,s.position.z-.4),$t.plop((s.position.x-U.px)/25))}else{r.neck.rotation.x=Math.sin(r.t*1.6)*.12,s.rotation.x=0,s.position.y=Math.sin(r.t*1.3)*.015,r.hd+=Math.sin(r.t*.4)*.3*i;let l=s.position.x-qt(o);Math.abs(l)>fe(o)-5&&(r.hd+=(vn(o)+(l>0?-1:1)*.8-r.hd)*i*1.2),s.position.x+=Math.sin(r.hd)*(r.spd||.35)*i,s.position.z-=Math.cos(r.hd)*(r.spd||.35)*i}s.rotation.y=-r.hd}for(let s of Yr){if(s.visible=n,!n)continue;let r=s.userData;if(r.t-=i,sw(s,r,i))continue;let o=-s.position.z-t;if(o<-12||o>90){Wy(s,t);continue}if(r.t<=0){r.t=.8+Math.random()*2.2;let d=-s.position.z+(Math.random()-.5)*8,f=s.position.x-qt(d);r.tx=s.position.x+(Math.random()-.5)*7,r.tz=s.position.z+(Math.random()-.5)*7-1.5,r.ty=.5+Math.random()*1.4;let m=r.tx-qt(-r.tz);Math.abs(m)>fe(-r.tz)+3&&(r.tx=qt(-r.tz)+Math.sign(m)*(fe(-r.tz)+1))}let a=Math.min(1,i*3.2),l=s.position.x,c=s.position.z;s.position.x+=(r.tx-s.position.x)*a,s.position.z+=(r.tz-s.position.z)*a,s.position.y+=(r.ty-s.position.y)*a+Math.sin(U.t*9+r.ph)*.004;let u=s.position.x-l,h=s.position.z-c;Math.hypot(u,h)>.002&&(s.rotation.y=Math.atan2(-u,-h)),s.rotation.x=-Math.min(.5,Math.hypot(u,h)*20)*.5,r.wings.forEach(([d,f],m)=>{d.rotation.z=f*Math.sin(U.t*70+m*1.7+r.ph)*.45})}}var Ol=(()=>{try{return JSON.parse(localStorage.getItem("rio3d-enc")||"{}")||{}}catch{return{}}})(),By={heron:"garza",koi:"koi",duck:"pato",dragonfly:"libelula",festival:"festival"};function sa(i,t){try{By[i]&&Pr(By[i])}catch{}if(!Ol[i]){Ol[i]=Date.now();try{localStorage.setItem("rio3d-enc",JSON.stringify(Ol))}catch{}fi(t)}}var nw=(()=>{let i=Lh(1,0);ms.pop(),i.updateMatrixWorld(!0);let t=[];return i.traverse(e=>{if(!e.isMesh)return;let n=e.geometry.clone().applyMatrix4(e.matrixWorld);n.deleteAttribute("uv");let s=e.material.color,r=n.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;n.setAttribute("color",new kt(o,3)),t.push(n.index?n.toNonIndexed():n)}),Ls(t)})(),yr=new Un(nw,new ge({gradientMap:we,vertexColors:!0}),24);yr.frustumCulled=!1;yr.count=0;vt.add(yr);var ia=[],qy=[];function iw(i,t,e,n){let s=qy.pop()||QE(0);s.rotation.order="YXZ",s.scale.setScalar(2.1),s.visible=!0,s.position.set(i,t+1.2,e),s.userData.fl2={t:0,hd:n,vy:3.2,sp:2.2,ph:Math.random()*6},vt.add(s),ia.push(s);try{$t.flap((i-U.px)/25)}catch{}sa("heron","Las garzas alzan el vuelo a tu paso")}var ys=new D,Oy=new pn,zy=new D,Hy=new me;function Yy(i,t){if(!ot.started)return;let e=!window.__noScare&&(Math.abs(U.steer)>.8||U.t-U.bumpT<.8);ot.scareT=e?2.5:Math.max(0,ot.scareT-i);let n=Math.sin(U.psi),s=Math.cos(U.psi),r=ot.scareT<=0;for(let a of qr){let l=a.userData;if(l.st!==0)continue;l.sp0==null&&(l.sp0=l.sp);let c=a.position.x-U.px,u=a.position.z-U.pz,h=Math.hypot(c,u);if(!r&&h<11){l.hd+=Dr(Math.atan2(c,-u),l.hd)*Math.min(1,i*6),l.sp=3.4,l.cur=0;continue}if(l.rest>0){l.rest-=i,l.sp=l.sp0,l.cur=0,l.aw>0&&(l.aw-=i,l.hd+=Dr(Math.atan2(c,-u),l.hd)*Math.min(1,i*1.1));continue}if(r&&h<26){if(l.fol=(l.fol||0)+i,l.fmax||(l.fmax=16+Math.random()*22),l.fol>l.fmax){l.rest=60+Math.random()*60,l.aw=4,l.fol=0,l.fmax=0,l.dir=0,l.cur=0;continue}l.dir||(l.dir=Math.random()<.5?-1:1);let d=-.4+Math.sin(U.t*.5+l.ph)*1.3,f=U.px+s*l.dir*2.7+n*d,m=U.pz+n*l.dir*2.7-s*d,x=f-a.position.x,g=m-a.position.z,p=Math.hypot(x,g);if(l.hd+=Dr(Math.atan2(x,-g),l.hd)*Math.min(1,i*3.2),l.sp=Math.max(.7,Math.min(4,U.v+p*.9)),l.cur=1,h<5.5&&(sa("koi","Los peces se acercan a nadar contigo"),Math.random()<i*.35)){Fl(a.position.x+Math.sin(l.hd)*.4,a.position.z-Math.cos(l.hd)*.4,0,0,.55);try{$t.plop((a.position.x-U.px)/25)}catch{}}if(h<6.5&&Math.random()<i*.06){l.st=1,l.j=0,l.vx=Math.sin(l.hd)*2.6,l.vz=-Math.cos(l.hd)*2.6,$h(a.position.x,.1,a.position.z,6);try{$t.plop((a.position.x-U.px)/25)}catch{}}}else l.sp=l.sp0,l.cur=0}Zr.forEach((a,l)=>{let c=a.userData;if(!a.visible)return;let u=a.position.x-U.px,h=a.position.z-U.pz,d=Math.hypot(u,h);if(c.flee>0){c.flee-=i,c.hd+=Dr(Math.atan2(u,-h),c.hd)*Math.min(1,i*4),c.spd=2.6;return}if(!r&&d<16){c.follow=0,c.flee=3;return}if(r&&(c.follow||d<17)){c.follow||(c.follow=1,c.qT=1+Math.random()*3,l<2&&sa("duck","Un pato decide acompa\xF1arte"));let f=3.8+l*1.7,m=Math.sin(U.t*.4+l*2)*1.1+(l%2?1:-1)*.9,x=U.px-n*f+s*m,g=U.pz+s*f+n*m,p=x-a.position.x,y=g-a.position.z,S=Math.hypot(p,y);if(c.hd+=Dr(Math.atan2(p,-y),c.hd)*Math.min(1,i*2.6),c.spd=Math.max(.1,Math.min(3.4,(S>.8?U.v*1.05:U.v*.9)+S*.5)),c.qT-=i,c.qT<=0&&d<12){c.qT=5+Math.random()*9;try{$t.quack((a.position.x-U.px)/25)}catch{}}}else c.spd=0});for(let[a,l]of di){let c=l.userData.hp;if(!(!c||Xe(a)!==4))for(let u of c){let h=u[5];if(h.gone>0&&(h.gone-=i,h.gone>0))continue;ys.set(u[0],u[1],u[2]),l.localToWorld(ys);let d=ys.x-U.px,f=ys.z-U.pz;Math.hypot(d,f)<(ot.scareT>0?22:13)&&U.t>(h.cd||0)&&(h.gone=70,h.cd=U.t+4,iw(ys.x,ys.y,ys.z,Math.atan2(d,-f)+(Math.random()-.5)*.8))}}let o=0;for(let[a,l]of di){let c=l.userData.hp;if(!(!c||Xe(a)!==4))for(let u of c)u[5].gone>0||o>=24||(ys.set(u[0],u[1],u[2]),l.localToWorld(ys),Oy.setFromAxisAngle(Us,l.rotation.y+u[3]),zy.setScalar(u[4]),Hy.compose(ys,Oy,zy),yr.setMatrixAt(o++,Hy))}yr.count=o,yr.instanceMatrix.needsUpdate=!0;for(let a=ia.length-1;a>=0;a--){let l=ia[a],c=l.userData.fl2;c.t+=i,c.vy=Math.max(.6,c.vy-i*.35),l.position.y>11&&(c.vy=Math.min(c.vy,.2)),c.sp=Math.min(6.2,c.sp+i*1.6);let u=-l.position.z;c.hd+=Dr(vn(u)+Math.sin(c.ph)*.3,c.hd)*i*.6,l.position.x+=Math.sin(c.hd)*c.sp*i,l.position.z-=Math.cos(c.hd)*c.sp*i,l.position.y+=c.vy*i,l.rotation.y=-c.hd,l.rotation.x=Math.min(.5,c.vy*.12);let h=Math.sin(c.t*(c.t<4?10:6)+c.ph)*(c.t<8?.8:.3);l.userData.wings.forEach((d,f)=>{d.rotation.z=(f?1:-1)*h}),(c.t>16||Math.hypot(l.position.x-U.px,l.position.z-U.pz)>230)&&(vt.remove(l),qy.push(l),ia.splice(a,1))}}var zs=new D;function sw(i,t,e){if(t.land>0)return t.land-=e,t.land<=0||ot.scareT>0||!i.visible?(t.land=0,t.app=0,t.t=.2,t.ty=2.4,t.tx=i.position.x+(Math.random()-.5)*5,t.tz=i.position.z-4,!1):(Ne.localToWorld(zs.set(t.lx,t.ly,t.lz)),i.position.copy(zs),i.quaternion.copy(Ne.quaternion),t.wings.forEach(([n,s])=>{n.rotation.z=s*.12}),!0);if(!ot.started||!i.visible||ot.scareT>0)return!1;if(t.app)return t.t=3,Ne.localToWorld(zs.set(t.lx,t.ly,t.lz)),t.tx=zs.x,t.ty=zs.y,t.tz=zs.z,!(t.app-=e>0?e:0)||t.app<=0?(t.app=0,!1):(i.position.distanceTo(zs)<.45&&(t.app=0,t.land=14+Math.random()*18,sa("dragonfly","Una lib\xE9lula se pos\xF3 en la proa de tu canoa")),!1);if(Math.random()<e*.18&&(Ne.localToWorld(zs.set(0,.5,-3)),i.position.distanceTo(zs)<7)){let n=0;for(let s of Yr)(s.userData.land>0||s.userData.app>0)&&n++;n<2&&(t.lx=(Math.random()-.5)*.3,t.ly=.62,t.lz=-3.05+Math.random()*.25,t.app=5)}return!1}var Kh=38,Zp=new Map,Zy=[0,1,2].map(i=>{let t=new Sn(1,1).toNonIndexed(),e=t.attributes.position,n=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){let o=e.getX(r),a=e.getY(r),l=e.getZ(r),c=1+(tt(Math.round(o*5)+i*9,Math.round(a*5)+Math.round(l*5))-.5)*.35;e.setXYZ(r,o*c*1.15,a*c*.72,l*c);let u=.7+.4*Ae((a+.7)/1.4);n[r*3]=n[r*3+1]=n[r*3+2]=u}t.setAttribute("color",new kt(n,3));let s=t.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*2,s.getY(r)*2);return t.computeVertexNormals(),t}),rw=new ge({gradientMap:we,color:12039108,vertexColors:!0,map:Ie("rock")}),ow=new ge({gradientMap:we,color:8829066,map:Ie("leaf")}),aw=new Ee({color:16777215,transparent:!0,opacity:.4,depthWrite:!1,side:Zt});function lw(i){let t=tt(i,41);if(i<2||t>.34)return null;let e=i*Kh+tt(i,42)*Kh,n=(tt(i,43)*2-1)*fe(e)*.4;return{s:e,x:qt(e)+n,z:-e,r:.9+tt(i,44)*1.1,v:Math.floor(tt(i,45)*3),a:tt(i,46)*6.28}}function cw(i){let t=new Gt,e=new q(Zy[i.v],rw);e.scale.setScalar(i.r),e.rotation.y=i.a,e.position.y=i.r*.18,t.add(e);let n=new q(Zy[(i.v+1)%3],ow);n.scale.set(i.r*.62,i.r*.3,i.r*.6),n.position.set(i.r*.12,i.r*.62,0),n.rotation.y=i.a+1,t.add(n);let s=new q(new Cs(1.05,1.55,24).rotateX(-Math.PI/2),aw);return s.scale.setScalar(i.r),s.position.y=.05,s.userData.fr=1,t.add(s),t.position.set(i.x,0,i.z),t.userData=i,t}function Jy(i,t){let e=Math.floor((t-25)/Kh),n=Math.floor((t+280)/Kh);for(let[s,r]of Zp)(s<e||s>n)&&r&&vt.remove(r);for(let s=e;s<=n;s++){let r=Zp.get(s);if(r===void 0){let u=lw(s);r=u?cw(u):null,Zp.set(s,r)}if(!r)continue;r.parent||vt.add(r);let o=U.px-r.userData.x,a=U.pz-r.userData.z,l=r.userData.r*1.2+1.5,c=Math.hypot(o,a);c<l&&c>.01&&(U.px+=o/c*(l-c)*.6,U.pz+=a/c*(l-c)*.6,U.v*=.9,U.t-U.bumpT>1.2&&($t.bump(),U.bumpT=U.t,qn(r.userData.x+o/c*-r.userData.r,r.userData.z+a/c*-r.userData.r))),r.children[2].material.opacity=.3+.12*Math.sin(U.t*1.4+s)}}var ra=230,zl=new Map,uw=[0,1,2,3].map(i=>{let n=[],s=[],r=[];for(let a=0;a<=16;a++){let l=a/16;for(let c=0;c<26;c++){let u=c/26*6.283,h=1+(rn(Math.cos(u)*2.2+i*7,Math.sin(u)*2.2+l*3)-.5)*.5+(rn(Math.cos(u)*7+i,l*9)-.5)*.14,d=Math.pow(Math.max(0,1-Math.pow(l,2.2)),.62)*(1+.38*(1-l)*(1-l)),f=l,m=(rn(i*3,l*2)-.5)*.5*l;n.push(Math.cos(u)*d*h+m,f,Math.sin(u)*d*h);let x=rn(Math.cos(u)*5+i,l*14),g=de(.18,.5,rn(Math.cos(u)*9,l*20+i)),p=.45+.2*l+.12*x;s.push(p*(.75+.2*g),p*(.9+.12*g),p*(.82+.1*g))}}for(let a=0;a<16;a++)for(let l=0;l<26;l++){let c=(l+1)%26,u=a*26+l,h=a*26+c,d=(a+1)*26+l,f=(a+1)*26+c;r.push(u,d,h,h,d,f)}let o=new jt;return o.setAttribute("position",new se(n,3)),o.setAttribute("color",new se(s,3)),o.setIndex(r),o.computeVertexNormals(),o}),hw=new ka({vertexColors:!0,color:12175040,fog:!1}),Jp=new rs({map:si,transparent:!0,opacity:.5,depthWrite:!1,fog:!1,color:16777215});function dw(i,t){let e=tt(i,60+t),n=44+e*46,s=95+tt(i,61+t)*120,r=i*ra+tt(i,62+t)*ra*.9,o=fe(r)+150+tt(i,63+t)*170,a=new Gt,l=new q(uw[(i*2+(t>0?1:0)+4)%4],hw.clone());l.scale.set(n,s,n*(.8+tt(i,64)*.4)),l.position.y=-30,l.rotation.y=tt(i,65)*6,a.add(l);for(let c=0;c<2;c++){let u=new As(Jp);u.scale.set(n*4.5,s*.7,1),u.position.set((c?.4:-.3)*n,s*(.18+.2*c),0),u.renderOrder=2,a.add(u)}return a.position.set(qt(r)+t*o,0,-r),a.userData={s:r},a}var fw=(i,t)=>{let e=i*ra+tt(i,62+t)*ra*.9,n=Lr(e);return!!n&&t===n.side&&Math.abs(e-n.s0)<210};function $y(i){let t=Math.floor((i-260)/ra),e=Math.floor((i+720)/ra);for(let n=t;n<=e;n++)for(let s of[-1,1]){let r=n*2+(s>0?1:0),o=zl.get(r);if(o===void 0&&(o=tt(n,70+s)>.18&&!fw(n,s)?dw(n,s):null,zl.set(r,o),o&&(o.userData.c=n)),o){o.userData.c=n,o.parent||vt.add(o);let a=Math.hypot(o.position.x-U.px,o.position.z-U.pz),l=Ae(de(60,520,a)*.88+.08);o.children[0].material.color.set(6130818).lerp(Ih.set(3099218),ce.night*.7).lerp(gs.copy(ce.hor).lerp(vt.fog.color,.5),l)}}for(let[n,s]of zl)s&&s.userData.c!==void 0&&(s.userData.c<t||s.userData.c>e)&&s.parent&&vt.remove(s)}var $p=[];function pw(i){let t=new Gt,e=Ot(3091244),n=Ot(3102307),s=new q(new Jt(1,10,6),e);s.scale.set(.55,.28,2),s.position.y=.05,t.add(s);let r=new q(new ye(.16,.22,.9,7),n);r.position.set(0,.85,.2),t.add(r);let o=new q(new Jt(.12,8,6),Ot(14264706));if(o.position.set(0,1.38,.2),t.add(o),i%2){let l=new q(new Le(.75,.45,10,1,!0),Ot(3158063,{side:Zt}));l.position.set(0,1.95,.2),t.add(l);let c=new q(new ye(.015,.015,1,4),e);c.position.set(0,1.45,.2),t.add(c)}else{let l=new q(new Le(.34,.2,10,1,!0),Ot(14332522,{side:Zt}));l.position.set(0,1.55,.2),t.add(l)}let a=new q(new ye(.02,.02,4,4),Ot(8018502));return a.position.set(.35,1.2,-.9),a.rotation.set(1,0,-.3),t.add(a),t.scale.setScalar(1.6),t.userData={ph:Math.random()*6},vt.add(t),t}for(let i=0;i<3;i++)$p.push(pw(i));function Ky(i,t){let e=t+90+Math.random()*160,n=(Math.random()*2-1)*(fe(e)-9);i.position.set(qt(e)+n,0,-e),i.userData.hd=vn(e)+Math.PI+(Math.random()-.5)*.8,i.userData.s=e}$p.forEach(i=>Ky(i,40+Math.random()*100));function jy(i,t){for(let e of $p){let n=e.userData;if(e.position.z>U.pz+30||-e.position.z>t+300){Ky(e,t);continue}e.position.x+=Math.sin(n.hd+Math.PI)*.25*i,e.position.z-=Math.cos(n.hd+Math.PI)*.25*i,e.position.y=Math.sin(U.t*.8+n.ph)*.03,e.rotation.set(Math.sin(U.t*.6+n.ph)*.02,-n.hd+Math.PI,Math.sin(U.t*.7+n.ph)*.02)}}var sd=8,la=44,td=new Float32Array(sd*la*3),ed=new Float32Array(sd*la*3),Hl=new jt;Hl.setAttribute("position",new kt(td,3));Hl.setAttribute("color",new kt(ed,3));var $r=new Ci(Hl,new Gi({size:2.6,map:si,vertexColors:!0,transparent:!0,blending:Vn,depthWrite:!1,depthTest:!1,fog:!1}));$r.renderOrder=9;$r.frustumCulled=!1;$r.visible=!1;vt.add($r);var Qp=[[1,.62,.75],[1,.84,.4],[.55,.9,1],[1,.5,.4],[.8,.7,1]],kl=[];for(let i=0;i<sd;i++)kl.push({age:9,x:0,y:0,z:0,c:Qp[0],v:new Float32Array(la*3)});var Kp=0,jh=!1;function mw(i){let t=Math.round((i-240)/Di);for(let e of[t-1,t,t+1])if(e>=0&&Xe(e)===2&&Math.abs(je(e)-i)<230)return!0;return!1}function Qy(){let i=kl.find(t=>t.age>=3);if(i){i.age=0,i.x=U.px+(Math.random()-.5)*40,i.y=4+Math.random()*5,i.z=U.pz-(55+Math.random()*40),i.c=Qp[Math.random()*Qp.length|0];for(let t=0;t<la;t++){let e=Math.random()*6.283,n=Math.acos(2*Math.random()-1),s=5+Math.random()*4;i.v[t*3]=Math.sin(n)*Math.cos(e)*s,i.v[t*3+1]=Math.cos(n)*s,i.v[t*3+2]=Math.sin(n)*Math.sin(e)*s}try{$t.boom((i.x-U.px)/30)}catch{}}}function tv(i,t){let e=jh;jh=t>.55&&mw(U.dist||-U.pz),jh&&!e&&sa("festival","Festival de linternas: la aldea celebra esta noche"),jh&&(Kp-=i,Kp<=0&&(Kp=1.4+Math.random()*2,Qy(),Math.random()<.35&&setTimeout(Qy,350)));let n=!1;for(let s=0;s<sd;s++){let r=kl[s];r.age<3&&(r.age+=i);let o=r.age<3?Math.pow(Math.max(0,1-r.age/2.7),1.5):0;o>0&&(n=!0);for(let a=0;a<la;a++){let l=(s*la+a)*3,c=r.age;td[l]=r.x+r.v[a*3]*c*.8,td[l+1]=r.y+r.v[a*3+1]*c*.8-1.9*c*c,td[l+2]=r.z+r.v[a*3+2]*c*.8,ed[l]=r.c[0]*o,ed[l+1]=r.c[1]*o,ed[l+2]=r.c[2]*o}}$r.visible=n,n&&(Hl.attributes.position.needsUpdate=!0,Hl.attributes.color.needsUpdate=!0)}var tm=new $e({transparent:!0,side:In,depthWrite:!1,blending:Vn,fog:!1,uniforms:{t:{value:0},k:{value:0}},vertexShader:"varying vec2 u;void main(){u=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 u;uniform float t,k;void main(){float a=u.x*6.283;float w=sin(a*3.+t*.25+sin(a*7.+t*.4)*1.3)*.5+.5;float band=smoothstep(.15,.55,u.y)*smoothstep(1.,.55,u.y);float f=band*(.3+.7*w)*(.55+.45*sin(a*11.-t*.5));vec3 c=mix(vec3(.2,1.,.6),vec3(.55,.4,1.),smoothstep(.45,.95,u.y));gl_FragColor=vec4(c*f*k*.75,1.);}"}),Jr=new q(new ye(330,330,120,48,1,!0),tm);Jr.frustumCulled=!1;Jr.visible=!1;Jr.renderOrder=-1;vt.add(Jr);function ev(i){let t=ar()===3?Ae(i*1.5-.7,0,1):0;Jr.visible=t>.01,Jr.visible&&(Jr.position.set(U.px,95,U.pz),tm.uniforms.t.value=U.t,tm.uniforms.k.value=t)}var oa=300,aa=new jt,nd=new Float32Array(oa*3),nv=[];for(let i=0;i<oa;i++)nv.push([Math.random()*60-30,Math.random()*12,Math.random()*60-50,Math.random()*6.28]);aa.setAttribute("position",new kt(nd,3));var gw=(()=>{let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d");return t.fillStyle="#fff",t.beginPath(),t.ellipse(16,16,12,7,.6,0,6.3),t.fill(),new xi(i)})(),id=new Float32Array(oa*3),em=new Gi({map:gw,alphaTest:.3,color:16777215,vertexColors:!0,size:On.pet.size,transparent:!0,opacity:.85,depthWrite:!1}),jp=-1,xw=new ct(On.pet.c),yw=new ct(qi.pet),Qh=new ct;aa.setAttribute("color",new kt(id,3));var iv=new Ci(aa,em);iv.frustumCulled=!1;vt.add(iv);function sv(i){for(let t=0;t<oa;t++){let e=nv[t];e[1]-=i*On.pet.fall*(.45+.3*Math.sin(e[3]+U.t)),e[1]<.2&&(e[1]=10+Math.random()*3,e[0]=Math.random()*60-30,e[2]=-Math.random()*60),nd[t*3]=U.px+e[0]+Math.sin(U.t*.7+e[3])*1.5,nd[t*3+1]=e[1],nd[t*3+2]=U.pz+e[2]+10+Math.cos(U.t*.5+e[3])}{let t=Nr(U.dist||-U.pz),e=Math.max(.3*qo(-U.pz),t);if(aa.setDrawRange(0,Math.round(oa*Math.max(On.pet.base+On.pet.gain*e,t*.85))),Math.abs(t-jp)>.02||jp<0){jp=t,Qh.copy(xw).lerp(yw,Ae(t*1.6));for(let n=0;n<oa;n++)id[n*3]=Qh.r,id[n*3+1]=Qh.g,id[n*3+2]=Qh.b;aa.attributes.color.needsUpdate=!0,em.size=On.pet.size+(.42-On.pet.size)*Ae(t*1.6)}}aa.attributes.position.needsUpdate=!0,em.opacity=.85*(1-Ae(ce.night,0,1)*.8)}function rv(i){window.__r3d={R:bi,dayLampAt:Cx,fc:(t,e)=>{window.__fc=t?()=>{mn.position.set(t[0],t[1],t[2]),mn.lookAt(e[0],e[1],e[2]),mn.updateMatrixWorld()}:null},LM:Ji,lmType:Xe,NL:cl,lmFound:Si,lmMade:di,castleNear:Lr,dragonS:Wo,casInfo:Wf,casLocal:ul,fwB:kl,fw:$r,cam:mn,crit:{fish:qr,wbirds:Zr,dfs:Yr,fliers:ia,liveH:yr,ENC:Ol,get scare(){return ot.scareT}},sim:i,cnt:()=>{let t={};return vt.traverse(e=>{if((e.isMesh||e.isSprite||e.isPoints)&&e.visible){let n=e,s=!0;for(;n;){if(!n.visible){s=!1;break}n=n.parent}if(!s)return;let r=(e.isInstancedMesh?"inst":e.isSprite?"sprite":e.isPoints?"pts":"mesh")+":"+(e.material.type||"");t[r]=(t[r]||0)+1}}),t},info:()=>({g:bi.info.memory.geometries,t:bi.info.memory.textures,p:bi.info.programs.length,calls:bi.info.render.calls,tris:bi.info.render.triangles,lm:di.size,ch:vt.children.length}),cineJump:t=>{ot.cine&&(ot.cine.t=t)},cineOn:()=>!!ot.cine,bambooAt:Xo,gardenAt:Nr,forestAt:qo,lmPos:je,wbirds:Zr,massifs:zl,birds:Vy,dfs:Yr,fish:qr,W:an,mistAt:rh,setCam:Xr,P:U,lanternPos:Rh,setTod:t=>{ot.tod=t},scene:vt,tp:(t,e=0,n=0)=>{U.pz=-t,U.px=qt(t)+n,U.psi=vn(t)+e},sideOf:t=>tt(t,9)>.5?1:-1,get tod(){return ot.tod}}}var ua=performance.now();ng();ig();function nm(i,t){if(t||requestAnimationFrame(nm),PZ.on&&!t){ua=i;return}let e=Math.max(0,Math.min(.05,(i-ua)/1e3));ca.tick(Math.max(0,(i-ua)/1e3)),ua=i,U.t+=e;let n=-U.pz;Ox(e,n);let s=yx();sv(e),vx(),_x(e),py(e,s),uy(e),window.__fc&&window.__fc(),ot.started&&!ca.photo&&(ot.tod=(ot.tod+e/900)%1),Pg(U.px,U.pz),Nx(e,n),rx(U.px,U.pz,Dy),ep.value=U.t,ur.position.set(U.px,0,U.pz),ur.material.uniforms.t.value=U.t;let r=ce.night;Sh.intensity=ot.glowK*3.2,bh.material.opacity=.3+.35*ot.glowK,wl.material.color.set(16769704),Jy(e,U.dist||n),jy(e,U.dist||n),$y(U.dist||n),Jp.color.copy(vt.fog.color).multiplyScalar(1.05),Yy(e,U.dist||n),Gy(e,U.dist||n),Xy(e,U.dist||n),Vp.opacity=.55+.15*Math.sin(U.t*.8),Bl.position.y=Math.sin(U.t*.9)*.01,Ax(U.t,U.dist||n),Cy(U.dist||n),Rx(),Ah(U.t,U.dist||n),Mx(e),tv(e,r),ev(r),ax(r),$t.update(U.v+Math.abs(U.steer)*1.5,r,U.t),Tx(e,n),ca.camAdjust(),ca.update(e,U.dist||n),t||ca.render()}var ca=Mg({R:bi,scene:vt,cam:mn,canvas:Ps,el:He,toast:fi,P:U,LM:Ji,lmFound:Si,lmPos:je,LMS:Di,mkLantern:Ch,cx:qt,hw:fe,lmType:Xe,A:$t,hash:tt,spawnRipple:qn,SEAS:eh,seasonIdx:ar,started:()=>ot.started,getTod:()=>ot.tod,setTod:i=>{ot.tod=i},todName:fh,getCount:()=>ot.count,setCount:i=>{ot.count=i;try{localStorage.setItem("rio3d-lant",String(i))}catch{}He("n").textContent=i},glowK:()=>ot.glowK,restart:()=>{ot.cine=null,ot.cineW=0;try{localStorage.removeItem("rio3d-pos")}catch{}oh(0),U.v=2.6,U.dist=0,U.pitch=0,ot.savedS=0,fi("De vuelta al inicio del r\xEDo")},setCam:Xr,getCam:()=>ot.camMode,savePos:Tl,nearLM:i=>{let t=Math.round((i-240)/Di);for(let e of[t,t-1,t+1])if(Math.abs(je(e)-i)<130&&e>=0)return Ji[Xe(e)];return""}});ot.X=ca;He("n").textContent=ot.count;PZ.ctx=()=>$t.ctx;PZ.started=()=>ot.started;requestAnimationFrame(nm);{let i=He("cap"),t=0,e=()=>{try{return localStorage.getItem("rio3d-subs")==="1"}catch{return!1}};$t.onCap=n=>{!e()||!i||(i.textContent="["+Qn(n)+"]",i.style.opacity=1,clearTimeout(t),t=setTimeout(()=>i.style.opacity=0,2600))};try{let n=localStorage.getItem("rio3d-hand");(n==="r"||n==="l")&&document.body.classList.add("hand-"+n)}catch{}_g()}var vw=(i,t,e)=>{window.__lastT=window.__lastT||ua;for(let n=0;n<i;n++)window.__lastT+=t*1e3,e&&e(n),nm(window.__lastT,!0);ua=window.__lastT};rv(vw);yg({set:(i,t)=>{i==="p"?U.key.up=t:U.key[i]=t},started:()=>ot.started&&!ot.X.photo,paddle:!0,steerPaddles:!0,onPress:ah});try{gg(window.UX)}catch{}try{window.UX.mood()}catch{}try{Of(window.UX)}catch{}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
