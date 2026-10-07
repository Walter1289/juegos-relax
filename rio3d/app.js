(()=>{(function(){if(window.UX)return;let i=["es","en","ja"],t={es:"Espa\xF1ol",en:"English",ja:"\u65E5\u672C\u8A9E"},e={get(p,y){try{let M=localStorage.getItem(p);return M===null?y:M}catch{return y}},set(p,y){try{localStorage.setItem(p,y)}catch{}}},n=e.get("rio3d-lang","es");i.includes(n)||(n="es");let s=n==="en"?1:2,r=new Map,o=[],a=window.UX={lang:n,onLang:null,add(p){p.forEach(y=>r.set(y[0],y))},rx(p){p.forEach(y=>o.push(y))},tr(p){if(n==="es"||typeof p!="string")return p;let y=p.trim();if(!y)return p;let M=r.get(y);if(M)return p.replace(y,M[s]);for(let[v,S]of o){let b=y.match(v);if(b)return p.replace(y,S(b,n==="en"?1:2,a.tr))}return p},init(){if(n==="es")return;document.documentElement.lang=n;let p=y=>{if(y.nodeType===3){let S=a.tr(y.nodeValue);S!==y.nodeValue&&(y.nodeValue=S);return}if(y.nodeType!==1||y.tagName==="SCRIPT"||y.tagName==="STYLE")return;let M=y.getAttribute&&y.getAttribute("aria-label");if(M){let S=a.tr(M);S!==M&&y.setAttribute("aria-label",S)}let v=y.getAttribute&&y.getAttribute("title");if(v){let S=a.tr(v);S!==v&&y.setAttribute("title",S)}y.childNodes.forEach(p)};p(document.body),new MutationObserver(y=>{for(let M of y)M.type==="characterData"?p(M.target):M.addedNodes.forEach(p)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0})},hap(p){if(e.get("rio3d-hap","1")!=="0")try{if(navigator.vibrate){navigator.vibrate(p);return}if(!a._sw){let y=document.createElement("label");y.style.cssText="position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";let M=document.createElement("input");M.type="checkbox",M.setAttribute("switch",""),y.appendChild(M),document.body.appendChild(y),a._sw=y}a._sw.click()}catch{}},subsOn:()=>e.get("rio3d-subs","0")==="1",cap(p,y){if(!a.subsOn())return;let M=performance.now(),v=a._cl||(a._cl={});if(v[p]&&M-v[p]<(y||9e3))return;v[p]=M;let S=document.getElementById("uxcap");S||(S=document.createElement("div"),S.id="uxcap",S.setAttribute("aria-live","polite"),S.style.cssText="position:fixed;left:50%;top:max(58px,calc(env(safe-area-inset-top) + 50px));transform:translateX(-50%);background:rgba(20,22,48,.84);color:#fbf1e0;padding:6px 14px;border-radius:8px;font:600 .86rem system-ui,sans-serif;opacity:0;transition:opacity .4s;z-index:20;pointer-events:none;max-width:86%;text-align:center",document.body.appendChild(S)),S.textContent="["+a.tr(p)+"]",S.style.opacity=1,clearTimeout(a._ct),a._ct=setTimeout(()=>S.style.opacity=0,2600)},btns(p,y){y=y||{};let M=(C,U)=>{let z=document.createElement("button");return z.type="button",z.id=C,z.className=p||"",z.onclick=U,z},v=[],S=M("uxLang",()=>{let C=i[(i.indexOf(n)+1)%3];e.set("rio3d-lang",C);try{a.onLang&&a.onLang()}catch{}location.reload()});S.textContent=(n==="en"?"Language: ":n==="ja"?"\u8A00\u8A9E: ":"Idioma: ")+t[n],v.push(S);let b=M("uxSubs",()=>{e.set("rio3d-subs",a.subsOn()?"0":"1"),b.textContent=a.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no"});b.textContent=a.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no",v.push(b);let T=M("uxHap",()=>{let C=e.get("rio3d-hap","1")==="1";e.set("rio3d-hap",C?"0":"1"),T.textContent=C?"Vibraci\xF3n: no":"Vibraci\xF3n: s\xED",C||a.hap(15)});if(T.textContent=e.get("rio3d-hap","1")==="1"?"Vibraci\xF3n: s\xED":"Vibraci\xF3n: no",v.push(T),y.hand){let C={0:"Una mano: no",r:"Una mano: derecha",l:"Una mano: izquierda"},U=["0","r","l"],z=B=>{document.body.classList.remove("hand-r","hand-l"),B!=="0"&&document.body.classList.add("hand-"+B)},k=e.get("rio3d-hand","0");C[k]||(k="0"),z(k);let j=M("uxHand",()=>{k=U[(U.indexOf(k)+1)%3],e.set("rio3d-hand",k),z(k),j.textContent=C[k]});j.textContent=C[k],v.push(j)}let _=M("uxVol",()=>{let C=["1",".7",".4"],U=C.indexOf(String(a.api.vol()).replace("0.","."));a.api.setVol(C[(U+1)%3]),_.textContent=w()}),w=()=>l("Volumen de este juego: ","Volume (this game): ","\u3053\u306E\u30B2\u30FC\u30E0\u306E\u97F3\u91CF: ")+Math.round(a.api.vol()*100)+" %";_.textContent=w(),v.push(_);let R=M("uxSoft",()=>{a.api.setSoft(!a.api.soft()),R.textContent=I()}),I=()=>a.api.soft()?l("Tono suave: s\xED","Soft tone: on","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30F3"):l("Tono suave: no","Soft tone: off","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30D5");R.textContent=I(),v.push(R);let L=M("uxSleep",()=>{let C=[0,15,30,45];a.api.sleep(C[(C.indexOf(a.api.sleepMin())+1)%4]),L.textContent=D()}),D=()=>a.api.sleepMin()?l("Dormir: ","Sleep: ","\u304A\u3084\u3059\u307F: ")+a.api.sleepMin()+" min":l("Dormir: no","Sleep: off","\u304A\u3084\u3059\u307F: \u30AA\u30D5");if(L.textContent=D(),a._sb=()=>{L.textContent=D()},v.push(L),y.wear){let C=M("uxWear",()=>{e.set("ux-wear",e.get("ux-wear","0")==="1"?"0":"1"),C.textContent=U()}),U=()=>e.get("ux-wear","0")==="1"?l("Desgaste por ausencia: s\xED","Wear while away: on","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30F3"):l("Desgaste por ausencia: no","Wear while away: off","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30D5");C.textContent=U(),v.push(C)}return v},ask(p,y){let M=document.createElement("div");M.style.cssText="position:fixed;inset:0;z-index:60;display:grid;place-items:center;background:rgba(20,22,48,.6);font:15px/1.4 system-ui,sans-serif";let v=document.createElement("div");v.style.cssText="background:#2b2d52;color:#fbf1e0;border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:20px 22px;max-width:min(86vw,360px);text-align:center";let S=document.createElement("p");S.style.margin="0 0 14px",S.textContent=a.tr(p),v.appendChild(S);let b=(T,_)=>{let w=document.createElement("button");return w.type="button",w.textContent=T,w.style.cssText="margin:0 6px;padding:8px 16px;border-radius:10px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.1);color:inherit;font:inherit;cursor:pointer",w.onclick=()=>{M.remove(),_&&_()},w};v.appendChild(b(l("Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"))),v.appendChild(b(l("S\xED, reiniciar","Yes, restart","\u306F\u3044\u3001\u6700\u521D\u304B\u3089"),y)),M.appendChild(v),document.body.appendChild(M)}},l=(p,y,M)=>n==="en"?y:n==="ja"?M:p,c=(()=>{let p=location.pathname.match(/\/(cabana3d|rio3d|cabana|rio)(\/|$)/);return p?p[1]:/caba/i.test(document.title)?"cabana":"rio"})(),h="ux-vol-"+c,u={vol:e.get(h,e.get("ux-vol","1")),soft:e.get("ux-soft","0")==="1",k:1,nodes:[],end:0,min:0,ov:null};a.quiet=!1;let d=()=>{for(let p of u.nodes)try{let y=p.c.currentTime;p.lp.frequency.setTargetAtTime(u.soft?2800:22e3,y,.1),p.g.gain.setTargetAtTime(+u.vol*u.k,y,.1)}catch{}};a.out=(p,y)=>{let M=p.createBiquadFilter();M.type="lowpass",M.frequency.value=u.soft?2800:22e3,M.Q.value=.5;let v=p.createGain();return v.gain.value=+u.vol*u.k,y.connect(M),M.connect(v),v.connect(p.destination),u.nodes.push({c:p,lp:M,g:v}),v},a.pinkSrc=(p,y)=>{let M=p._pink;if(!M){let b=p.sampleRate,T=Math.floor(b*12),_=Math.floor(b*1.5),w=T+_,R=new Float32Array(w),I=0,L=0,D=0,C=0,U=0,z=0,k=0;for(let B=0;B<w;B++){let V=Math.random()*2-1;I=.99886*I+V*.0555179,L=.99332*L+V*.0750759,D=.969*D+V*.153852,C=.8665*C+V*.3104856,U=.55*U+V*.5329522,z=-.7616*z-V*.016898,R[B]=(I+L+D+C+U+z+k+V*.5362)*.2215*.5,k=V*.115926}M=p.createBuffer(1,T,b);let j=M.getChannelData(0);for(let B=0;B<T;B++)j[B]=R[B];for(let B=0;B<_;B++){let V=B/_*Math.PI/2;j[B]=R[B]*Math.sin(V)+R[T+B]*Math.cos(V)}p._pink=M}let v=p.createBufferSource();v.buffer=M,v.loop=!0;let S=p.createGain();return S.gain.value=y||1,v.connect(S),S.start=(b,T)=>v.start(b||0,T||0),S.stop=b=>v.stop(b),S},a.api={soft:()=>u.soft,setSoft(p){u.soft=!!p,e.set("ux-soft",p?"1":"0"),d()},vol:()=>+u.vol,setVol(p){u.vol=String(p),e.set(h,u.vol),d()},sleepMin:()=>u.min,sleep(p){u.min=p,u.end=p?Date.now()+p*6e4:0,u.k=1,a.quiet=!1,u.ov&&(u.ov.style.opacity=0),d()}},setInterval(()=>{if(!u.end)return;let p=(u.end-Date.now())/1e3;if(!u.ov){let y=document.createElement("div");y.style.cssText="position:fixed;inset:0;z-index:29;pointer-events:none;background:#1a0d00;opacity:0;transition:opacity 1.2s",document.body.appendChild(y),u.ov=y}if(p<=0){u.end=0,u.min=0,u.k=0,d(),u.ov.style.opacity=.6;try{window.PZ&&PZ.set(!0)}catch{}setTimeout(()=>{u.k=1,a.quiet=!1,d(),u.ov.style.opacity=0,a._sb&&a._sb()},1500);return}p<300&&(a.quiet=!0,u.k=Math.pow(p/300,2),u.ov.style.opacity=(1-p/300)*.6,d())},1e3);{let p=0,y=1200;setInterval(()=>{if(!(document.hidden||window.PZ&&(PZ.on||!PZ.started()))&&(p+=5,p>=y)){y+=1800;let M=document.getElementById("uxrest");M||(M=document.createElement("div"),M.id="uxrest",M.setAttribute("aria-live","polite"),M.style.cssText="position:fixed;left:50%;bottom:max(70px,calc(env(safe-area-inset-bottom) + 60px));transform:translateX(-50%);max-width:min(88vw,420px);text-align:center;background:rgba(20,22,48,.88);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:14px/1.4 system-ui,sans-serif;z-index:28;pointer-events:none;transition:opacity .8s;opacity:0",document.body.appendChild(M)),M.textContent=l("Buen momento para soltar los hombros y tomar un poco de agua.","A good moment to relax your shoulders and have some water.","\u80A9\u306E\u529B\u3092\u629C\u3044\u3066\u3001\u6C34\u3092\u4E00\u53E3\u98F2\u3080\u306E\u306B\u3088\u3044\u9803\u5408\u3044\u3067\u3059\u3002"),M.style.opacity=1,clearTimeout(a._rt),a._rt=setTimeout(()=>M.style.opacity=0,7e3)}},5e3)}a.add([["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Respirar","Breathe","\u547C\u5438"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["En pausa","Paused","\u4E00\u6642\u505C\u6B62\u4E2D"],["Respira con calma.","Breathe calmly.","\u3086\u3063\u304F\u308A\u547C\u5438\u3057\u307E\u3057\u3087\u3046\u3002"],["Todo seguir\xE1 aqu\xED cuando vuelvas.","Everything will be here when you return.","\u623B\u3063\u3066\u304F\u308B\u307E\u3067\u3001\u3059\u3079\u3066\u305D\u306E\u307E\u307E\u3067\u3059\u3002"],["Subt\xEDtulos: s\xED","Captions: on","\u5B57\u5E55: \u30AA\u30F3"],["Subt\xEDtulos: no","Captions: off","\u5B57\u5E55: \u30AA\u30D5"],["Vibraci\xF3n: s\xED","Vibration: on","\u632F\u52D5: \u30AA\u30F3"],["Vibraci\xF3n: no","Vibration: off","\u632F\u52D5: \u30AA\u30D5"],["Una mano: no","One hand: off","\u7247\u624B: \u30AA\u30D5"],["Una mano: derecha","One hand: right","\u7247\u624B: \u53F3"],["Una mano: izquierda","One hand: left","\u7247\u624B: \u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"],["Viento","Wind","\u98A8"],["Grillos","Crickets","\u30B3\u30AA\u30ED\u30AE"],["Fregado","Scrubbing","\u3053\u3059\u308B\u97F3"],["Madera que cruje","Creaking wood","\u304D\u3057\u3080\u6728\u306E\u97F3"],["Estrella fugaz","Shooting star","\u6D41\u308C\u661F"]]),a.add([["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"],["Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["Cansado","Tired","\u3064\u304B\u308C\u305F"],["Inquieto","Restless","\u305D\u308F\u305D\u308F"],["Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"],["Es opcional. Solo ajusto el sonido o te ofrezco respirar.","Optional. I only adjust the sound or offer you a breath.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002"],["Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"],["Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"],["Inhala","Breathe in","\u5438\u3063\u3066"],["Exhala","Breathe out","\u5410\u3044\u3066"],["Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"],["Gracias por respirar. Entremos con calma.","Thank you for breathing. Let us go in gently.","\u6DF1\u547C\u5438\u3042\u308A\u304C\u3068\u3046\u3002\u3086\u3063\u304F\u308A\u5165\u308A\u307E\u3057\u3087\u3046\u3002"],["Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"]]);function m(p){let y=document.createElement("div");y.style.cssText="position:fixed;inset:0;z-index:70;display:grid;place-items:center;align-content:center;gap:18px;background:rgba(20,22,48,.92);color:#fbf1e0;font:600 1.1rem system-ui;text-align:center";let M=document.createElement("div");M.style.cssText="width:110px;height:110px;border-radius:50%;background:radial-gradient(circle,#ffe9b8,#ffb86b 70%);box-shadow:0 0 50px rgba(255,200,120,.45);transform:scale(.55);transition:transform 4s ease-in-out";let v=document.createElement("div"),S=document.createElement("div");S.textContent=l("Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"),S.style.cssText="font-weight:400;opacity:.75;font-size:.9rem";let b=document.createElement("button");b.type="button",b.textContent=l("Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"),b.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#363a66;color:#fbf1e0;font:inherit;font-size:.9rem;cursor:pointer",y.append(S,M,v,b),document.body.appendChild(y);let T=0,_=!0,w,R=L=>{_&&(_=!1,clearTimeout(w),y.remove(),p&&p(L))};b.onclick=()=>R(!1);let I=()=>{if(_){if(T>=5)return R(!0);T++,v.textContent=l("Inhala","Breathe in","\u5438\u3063\u3066"),M.style.transition="transform 4s ease-in-out",M.style.transform="scale(1)",a.hap(8),w=setTimeout(()=>{_&&(v.textContent=l("Exhala","Breathe out","\u5410\u3044\u3066"),M.style.transition="transform 6s ease-in-out",M.style.transform="scale(.55)",w=setTimeout(I,6e3))},4e3)}};I()}a.say=p=>{let y=document.getElementById("uxsay");y||(y=document.createElement("div"),y.id="uxsay",y.style.cssText="position:fixed;left:50%;bottom:max(90px,calc(env(safe-area-inset-bottom) + 80px));transform:translateX(-50%);max-width:min(88vw,420px);background:rgba(20,22,48,.9);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:500 .85rem/1.35 system-ui;text-align:center;z-index:65;pointer-events:none;transition:opacity .5s;opacity:0",document.body.appendChild(y)),y.textContent=p,y.style.opacity=1,clearTimeout(a._st),a._st=setTimeout(()=>y.style.opacity=0,4200)},a.breathe=m,a.mood=()=>x();function x(){let p=document.getElementById("go");if(!p||document.getElementById("uxmood"))return;let y=document.createElement("div");y.id="uxmood",y.style.cssText="display:flex;flex-direction:column;align-items:center;gap:8px;margin:0 0 14px";let M=document.createElement("div");M.textContent=l("\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"),M.style.cssText="font:600 .95rem system-ui;opacity:.9";let v=document.createElement("div");v.style.cssText="display:flex;flex-wrap:wrap;gap:8px;justify-content:center";let S=document.createElement("div");S.textContent=l("Es opcional. Solo ajusto el sonido o te ofrezco respirar.","Optional. I only adjust the sound or offer you a breath.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002"),S.style.cssText="font:400 .72rem system-ui;opacity:.6";let b=null,T={};[["calm","Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["tired","Cansado","Tired","\u3064\u304B\u308C\u305F"],["rest","Inquieto","Restless","\u305D\u308F\u305D\u308F"],["think","Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"]].forEach(([_,w,R,I])=>{let L=document.createElement("button");L.type="button",L.textContent=l(w,R,I),L.style.cssText="min-height:44px;padding:8px 14px;border-radius:99px;border:1px solid #5a609a;background:rgba(54,58,102,.7);color:#fbf1e0;font:500 .85rem system-ui;cursor:pointer",L.onclick=()=>{b=b===_?null:_;for(let D in T)T[D].style.borderColor=D===b?"#ffc77a":"#5a609a",T[D].style.background=D===b?"rgba(255,199,122,.22)":"rgba(54,58,102,.7)";a.hap(6)},T[_]=L,v.appendChild(L)}),y.append(M,v,S),p.parentNode.insertBefore(y,p),p.addEventListener("click",()=>{e.set("ux-mood",b||""),b==="tired"&&(a.api.setSoft(!0),+a.api.vol()>.7&&a.api.setVol(".7"),setTimeout(()=>{try{a.say(l("Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"))}catch{}},900)),b==="rest"&&setTimeout(()=>m(),600),b==="think"&&setTimeout(()=>{try{a.say(l("Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"))}catch{}},900)},!0)}let g=a.init;a.init=function(){g.apply(this,arguments);try{x()}catch{}}})();var Vy=()=>{try{return localStorage.getItem("rio3d-hap")!=="0"}catch{return!0}},Ku=null;function cr(i){if(Vy())try{if(navigator.vibrate){navigator.vibrate(i);return}if(!Ku){let t=document.createElement("label");t.style.cssText="position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";let e=document.createElement("input");e.type="checkbox",e.setAttribute("switch",""),t.appendChild(e),document.body.appendChild(t),Ku=t}Ku.click()}catch{}}var ju=(i,t,e)=>Math.max(t,Math.min(e,i)),Zi=[293.66,329.63,349.23,440,466.16,587.33,659.25,698.46,880,932.33],en=(i,t)=>i+Math.random()*(t-i),oe={on:!0,resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},setOn(i){this.on=i,this.ctx&&this.mute(!i)},rain(i){this.setRain(i?1:0)},update(){},scrub(){},chime(){this.discover()},lantern(i){if(cr(9),!this.ok())return;this.cap("Nota de linterna");let t=this.ctx.currentTime;this.pluck(Zi[3+(Math.random()*4|0)],.1,t,(i||0)*3,-2),this.bell(Zi[6+(Math.random()*3|0)],t+.2,.05,!1,(i||0)*3,-3)},plop(i){if(!this.ok())return;this.cap("Salpicadura");let t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain(),r=this.dest((i||0)*4,-3);n.frequency.setValueAtTime(520,e),n.frequency.exponentialRampToValueAtTime(190,e+.12),s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.03,e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+.22),n.connect(s),s.connect(r),n.start(e),n.stop(e+.25)},vol:1,ctx:null,master:null,bus:null,nbuf:null,muted:!1,idx:3,init(){if(!this.ctx)try{let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let t=new i;this.ctx=t;let e=t.createGain();e.gain.value=this.muted?0:.6*this.vol,window.UX?UX.out(t,e):e.connect(t.destination),this.master=e;let n=t.createGain();n.gain.value=1,n.connect(e),this.bus=n;let s=t.createBuffer(1,t.sampleRate*2,t.sampleRate),r=s.getChannelData(0);for(let w=0;w<r.length;w++)r[w]=Math.random()*2-1;this.nbuf=s;let o=Math.floor(t.sampleRate*2.8),a=t.createBuffer(2,o,t.sampleRate);for(let w=0;w<2;w++){let R=a.getChannelData(w);for(let I=0;I<o;I++)R[I]=(Math.random()*2-1)*Math.pow(1-I/o,2.6)}let l=t.createConvolver();l.buffer=a;let c=t.createGain();c.gain.value=.38,n.connect(l),l.connect(c),c.connect(e);let h=this.noise(0,.37),u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=650;let d=t.createGain();d.gain.value=.07;let f=t.createOscillator();f.frequency.value=.09;let m=t.createGain();m.gain.value=.04,f.connect(m),m.connect(d.gain),f.start(),h.connect(u),u.connect(d),d.connect(e);let x=this.noise(0,1.5),g=t.createBiquadFilter();g.type="bandpass",g.frequency.value=2200,g.Q.value=.7;let p=t.createGain();p.gain.value=.02,x.connect(g),g.connect(p),p.connect(e),this.bk={},this.bkx={"-1":-4,1:4},[-1,1].forEach(w=>{let R=this.panner(w*4,0,0,2,.6);R.connect(e),this.bk[w]=R,[[520,2,.7,.05],[1250,3,1.3,.03],[2600,4,2.1,.014]].forEach(([I,L,D,C],U)=>{let z=this.noise(Math.random()*1.8,I<800?.71:I<1900?1.07:1.52),k=t.createBiquadFilter();k.type="bandpass",k.frequency.value=I,k.Q.value=L;let j=t.createGain();j.gain.value=C;let B=t.createOscillator(),V=t.createGain();B.frequency.value=D*(w>0?1.13:.91),V.gain.value=C*.7,B.connect(V),V.connect(j.gain),B.start(),z.connect(k),k.connect(j),j.connect(R)})});let y=()=>{if(this.ctx){if(this.ok()&&Math.random()<.75){let w=Math.random()*(Math.abs(this.bkx[-1])+Math.abs(this.bkx[1]))<Math.abs(this.bkx[1])?-1:1,R=t.currentTime,I=t.createOscillator(),L=t.createGain(),D=en(450,1100),C=this.panner(this.bkx[w],0,en(-4,2),2,.6,!0);C.connect(e),I.frequency.setValueAtTime(D,R),I.frequency.exponentialRampToValueAtTime(D*en(1.4,2),R+.07),L.gain.setValueAtTime(0,R),L.gain.linearRampToValueAtTime(en(.01,.026),R+.012),L.gain.exponentialRampToValueAtTime(1e-4,R+.1),I.connect(L),L.connect(C),I.start(R),I.stop(R+.12)}setTimeout(y,en(90,260))}};y();let M=this.noise(Math.random()*1.5,1.21),v=t.createBiquadFilter();v.type="highpass",v.frequency.value=380;let S=t.createBiquadFilter();S.type="lowpass",S.frequency.value=4200;let b=t.createGain();b.gain.value=0;let T=this.panner(0,0,-30,2,.5);M.connect(v),v.connect(S),S.connect(b),b.connect(T),T.connect(e),this.wfG=b,this.wfP=T,this.rgs=[],[[-.75,3200],[.75,3600]].forEach(([w,R])=>{let I=t.createStereoPanner();I.pan.value=w,I.connect(e);let L=this.noise(Math.random()*1.8,2.94),D=t.createBiquadFilter();D.type="highpass",D.frequency.value=R;let C=t.createGain();C.gain.value=0,L.connect(D),D.connect(C),C.connect(I),this.rgs.push([C,.07]);let U=this.noise(Math.random()*1.8,1.29),z=t.createBiquadFilter();z.type="bandpass",z.frequency.value=1500,z.Q.value=.6;let k=t.createGain();k.gain.value=0,U.connect(z),z.connect(k),k.connect(I),this.rgs.push([k,.035])}),this.rainLvl=0;let _=()=>{if(this.ctx){if(this.ok()&&this.rainLvl>.2){let w=t.currentTime,R=t.createOscillator(),I=t.createGain(),L=this.panner(en(-4,4),en(0,1),en(-4,1),1.5,.7,!0);L.connect(e),R.frequency.setValueAtTime(en(1800,3200),w),R.frequency.exponentialRampToValueAtTime(en(900,1400),w+.05),I.gain.setValueAtTime(0,w),I.gain.linearRampToValueAtTime(.02*this.rainLvl,w+.004),I.gain.exponentialRampToValueAtTime(1e-4,w+.07),R.connect(I),I.connect(L),R.start(w),R.stop(w+.09)}setTimeout(_,en(70,260))}};_(),this.music(),this.padInit()}catch{this.ctx=null}},setRain(i){if(!this.rgs)return;i>.5&&this.cap("Lluvia suave"),this.rainLvl=i;let t=this.ctx.currentTime;this.rgs.forEach(([e,n])=>e.gain.setTargetAtTime(i*n,t,.6))},ok(){return this.ctx&&this.ctx.state==="running"},breathTone(i,t){if(!this.ok())return;let e=this.ctx,n=e.currentTime;[[1,.05],[1.5,.022]].forEach(([s,r])=>{let o=e.createOscillator(),a=e.createGain();o.type="sine",o.frequency.setValueAtTime((i?196:262)*s,n),o.frequency.linearRampToValueAtTime((i?262:196)*s,n+t),i?(a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(r,n+t)):(a.gain.setValueAtTime(r,n),a.gain.linearRampToValueAtTime(0,n+t)),o.connect(a),a.connect(this.bus),o.start(n),o.stop(n+t+.1)})},noise(i,t){let e=this.ctx;if(window.UX&&UX.pinkSrc){let s=UX.pinkSrc(e,t);return s.start(0,(i||0)*3),s}let n=e.createBufferSource();return n.buffer=this.nbuf,n.loop=!0,n.start(0,i||0),n},panner(i,t,e,n,s,r){let o=this.ctx.createPanner();return o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=n||2,o.rolloffFactor=s==null?.6:s,o.positionX?(o.positionX.value=i,o.positionY.value=t,o.positionZ.value=e):o.setPosition(i,t,e),o},setPos(i,t,e,n){if(i.positionX){let s=this.ctx.currentTime;i.positionX.setTargetAtTime(t,s,.2),i.positionY.setTargetAtTime(e,s,.2),i.positionZ.setTargetAtTime(n,s,.2)}else i.setPosition(t,e,n)},dest(i,t){if(i==null)return this.bus;let e=this.panner(i,0,t==null?-1.5:t,2,.6);return e.connect(this.bus),e},space(i,t,e){if(!this.ctx)return;let n=Math.max(.9,(t+i)/40),s=Math.max(.9,(t-i)/40);if(this.bkx[-1]=-n,this.bkx[1]=s,this.setPos(this.bk[-1],-n,0,0),this.setPos(this.bk[1],s,0,0),e==null||e<-300)this.wfG.gain.setTargetAtTime(0,this.ctx.currentTime,.4);else{let r=Math.max(0,Math.min(1,1-Math.abs(e)/1500));r>.45&&this.cap("Cascada cercana"),this.wfG.gain.setTargetAtTime(.34*Math.pow(r,1.5),this.ctx.currentTime,.4),this.setPos(this.wfP,-i/40,0,-e/40)}},pluck(i,t,e,n,s){if(!this.ok())return;let r=this.ctx,o=e||r.currentTime,a=this.dest(n,s);[[1,1],[2,.25],[3.01,.1]].forEach(([l,c],h)=>{let u=r.createOscillator(),d=r.createGain();u.type=h?"sine":"triangle",u.frequency.value=i*l,d.gain.setValueAtTime(0,o),d.gain.linearRampToValueAtTime(t*c,o+.01),d.gain.exponentialRampToValueAtTime(1e-4,o+(h?1.1:2)),u.connect(d),d.connect(a),u.start(o),u.stop(o+2.1)})},flute(i,t,e,n,s,r){if(!this.ok())return;let o=this.ctx,a=this.dest(s,r),l=o.createOscillator(),c=o.createOscillator(),h=o.createGain(),u=o.createGain();l.type="sine",c.type="triangle",l.frequency.setValueAtTime(i*.96,t),l.frequency.exponentialRampToValueAtTime(i,t+.18),c.frequency.setValueAtTime(i*2*.96,t),c.frequency.exponentialRampToValueAtTime(i*2,t+.18);let d=o.createOscillator(),f=o.createGain();d.frequency.value=4.8,f.gain.setValueAtTime(0,t),f.gain.linearRampToValueAtTime(i*.012,t+e*.6),d.connect(f),f.connect(l.frequency),d.start(t),d.stop(t+e+.5),u.gain.value=.1,c.connect(u),u.connect(h),l.connect(h),h.gain.setValueAtTime(0,t),h.gain.linearRampToValueAtTime(n,t+.35),h.gain.setValueAtTime(n*.85,t+e*.7),h.gain.linearRampToValueAtTime(0,t+e);let m=o.createBufferSource();m.buffer=this.nbuf,m.loop=!0;let x=o.createBiquadFilter();x.type="bandpass",x.frequency.value=i*2,x.Q.value=4;let g=o.createGain();g.gain.setValueAtTime(0,t),g.gain.linearRampToValueAtTime(n*.5,t+.2),g.gain.linearRampToValueAtTime(0,t+e),m.connect(x),x.connect(g),g.connect(a),m.start(t),m.stop(t+e+.1),h.connect(a),l.start(t),c.start(t),l.stop(t+e+.1),c.stop(t+e+.1)},drum(i,t,e){if(!this.ok()||window.UX&&UX.quiet)return;let n=this.ctx,s=n.createOscillator(),r=n.createGain();s.type="sine",t*=.42,s.frequency.setValueAtTime(115*e,i),s.frequency.exponentialRampToValueAtTime(48*e,i+.28);let o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=700,r.gain.setValueAtTime(1e-4,i),r.gain.linearRampToValueAtTime(t,i+.04),r.gain.exponentialRampToValueAtTime(1e-4,i+.9),s.connect(r),r.connect(o),o.connect(this.bus),s.start(i),s.stop(i+1);let a=n.createBufferSource();a.buffer=this.nbuf;let l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=500;let c=n.createGain();c.gain.setValueAtTime(t*.5,i),c.gain.exponentialRampToValueAtTime(1e-4,i+.1),a.connect(l),l.connect(c),c.connect(this.bus),a.start(i,Math.random()),a.stop(i+.15)},bell(i,t,e,n,s,r){if(!this.ok())return;let o=this.ctx,a=this.dest(s,r);[[1,1,1],[2.01,.3,.6],[2.76,.22,.4],[5.4,.08,.2]].forEach(([l,c,h])=>{let u=o.createOscillator(),d=o.createGain();u.type="sine",u.frequency.value=i*l;let f=(n?7:3)*h;d.gain.setValueAtTime(0,t),d.gain.linearRampToValueAtTime(e*c,t+.005),d.gain.exponentialRampToValueAtTime(1e-4,t+f),u.connect(d),d.connect(a),u.start(t),u.stop(t+f+.1)})},next(i,t,e){this.idx=ju(this.idx+Math.floor(Math.random()*4)-1,3,Zi.length-1),this.bell(Zi[this.idx]*(Math.random()<.5?1:2),this.ctx?this.ctx.currentTime:0,i*.9,!1,t,e)},paddle(i){if(!this.ok())return;let t=this.ctx,e=this.panner((i||0)*1.1,-.3,-.4,1.5,.8);e.connect(this.master);let n=t.createBufferSource();n.buffer=this.nbuf;let s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=900+Math.random()*500,s.Q.value=.9;let r=t.createGain(),o=t.currentTime;r.gain.setValueAtTime(0,o),r.gain.linearRampToValueAtTime(.14,o+.05),r.gain.exponentialRampToValueAtTime(1e-4,o+.4),n.connect(s),s.connect(r),r.connect(e),n.start(o,Math.random()),n.stop(o+.45)},bump(i=.6,t=0){if(cr(i>.5?22:12),!this.ok())return;this.cap("Golpe suave de la canoa");let e=this.ctx,n=e.currentTime,s=this.panner((t||0)*1.3,-.3,0,1.5,.8);s.connect(this.master);let r=e.createOscillator(),o=e.createGain();r.frequency.setValueAtTime(140,n),r.frequency.exponentialRampToValueAtTime(70,n+.2),o.gain.setValueAtTime(.16*i,n),o.gain.exponentialRampToValueAtTime(1e-4,n+.3),r.connect(o),o.connect(s),r.start(n),r.stop(n+.35)},discover(){if(cr([14,70,14]),!this.ok())return;this.cap("Nota de linterna");let i=this.ctx.currentTime;[0,3,5,6].forEach((t,e)=>this.pluck(Zi[t],.12,i+e*.2)),this.bell(Zi[8],i+.9,.07)},music(){let i=this.ctx;[[73.42,.03],[110,.02],[146.83,.012]].forEach(([l,c],h)=>{let u=i.createOscillator(),d=i.createGain(),f=i.createOscillator(),m=i.createGain();u.type="sine",u.frequency.value=l,d.gain.value=c,f.frequency.value=.05+h*.03,m.gain.value=c*.6,f.connect(m),m.connect(d.gain),u.connect(d),d.connect(this.bus),u.start(),f.start()});let t=0,e=()=>{if(this.ctx){if(this.ok()){let l=i.currentTime+.05,c=t%8;(t>>3)%4===3?c===0&&this.drum(l,.12,.9):c===0?(this.drum(l,.34,1),this.cap("Tambor lejano")):c===3?this.drum(l,.12,1.35):c===5?this.drum(l,.16,1.15):c===6&&Math.random()<.4&&this.drum(l,.09,1.45),t++}setTimeout(e,950)}};setTimeout(e,3e3);let n=3,s=()=>{if(!this.ctx)return;let l=i.currentTime+.2,c=0;if(this.ok()){this.cap("Flauta shakuhachi");let h=2+Math.floor(Math.random()*3),u=en(-3,3);for(let d=0;d<h;d++){n=ju(n+Math.floor(Math.random()*5)-2,0,7);let f=en(1.8,3.4);this.flute(Zi[n],l,f,.06,u+en(-.3,.3),-2.5),l+=f*.88,c+=f*.88}}setTimeout(s,(c+en(6,11))*1e3)};setTimeout(s,5e3);let r=()=>{if(this.ctx){if(this.ok()){this.cap("Campanillas");let l=i.currentTime+.05,c=Zi[5+Math.floor(Math.random()*5)];this.bell(c,l,.045,!1,en(-5,5),en(-5,-1)),Math.random()<.5&&this.bell(Zi[5+Math.floor(Math.random()*5)],l+en(.18,.4),.035,!1,en(-5,5),en(-5,-1))}setTimeout(r,en(3500,8e3))}};setTimeout(r,2500);let o=()=>{if(this.ctx){if(this.ok()){this.cap("Koto");let l=i.currentTime+.05,c=Math.floor(Math.random()*6),h=en(-4,4);for(let u=0;u<3;u++)this.pluck(Zi[ju(c+[0,2,1][u],0,9)],.06,l+u*.28,h,-2)}setTimeout(o,en(14e3,24e3))}};setTimeout(o,9e3);let a=()=>{this.ctx&&(this.ok()&&(this.cap("Campana de templo"),this.bell(146.83,i.currentTime+.05,.08,!0,en(-6,6),-8)),setTimeout(a,en(35e3,55e3)))};setTimeout(a,16e3)},padInit(){let i=this.ctx,t=i.createBiquadFilter();t.type="lowpass",t.frequency.value=800,t.Q.value=.4;let e=i.createGain();e.gain.value=0,t.connect(e),e.connect(this.bus);let n=[];for(let r=0;r<4;r++){let o=i.createOscillator(),a=i.createOscillator(),l=i.createGain(),c=i.createGain(),h=i.createOscillator(),u=i.createGain();o.type="sine",a.type="triangle",a.detune.value=r%2?7:-7,l.gain.value=.5,c.gain.value=.18,h.frequency.value=.04+r*.017,u.gain.value=.25,h.connect(u),u.connect(l.gain),o.connect(l),a.connect(c),l.connect(t),c.connect(t),o.start(),a.start(),h.start(),n.push([o,a])}this.pad={f:t,pg:e,vs:n,ch:0,t0:0},this.mood={el:.5,lm:-1,sn:0},this.padChord(!0);let s=()=>{this.ctx&&(this.ok()&&this.padChord(),setTimeout(s,15e3+Math.random()*4e3))};setTimeout(s,9e3)},setMood(i,t,e){this.mood={el:i,lm:t,sn:e},this.pad&&this.ok()&&this.padFilter()},padFilter(){let i=this.mood,t=this.pad.f,e=this.ctx.currentTime,n=Math.max(0,Math.min(1,i.el*1.6)),s=420+n*900,r=.045+(1-n)*.012;i.lm===6&&(s+=500),i.lm===5&&(s-=120,r*=1.2),i.lm===2&&(r*=1.1),t.frequency.setTargetAtTime(s,e,2.5),this.pad.pg.gain.setTargetAtTime(this.muted?0:r*this.vol,e,2)},padChord(i){let t=this.ctx,e=this.mood,n=this.pad,s=t.currentTime,r=146.83,o=[[0,7,14,19],[0,7,12,15],[-4,3,7,12],[0,7,14,15]],a=[[0,7,12,15],[-4,3,7,12],[0,3,7,12],[-4,0,7,15]],l=[[-12,-5,0,7],[-12,-4,3,7],[-12,0,7,12],[-12,-5,3,7]],c=e.el>.35?o:e.el>-.05?a:l;n.ch=(n.ch+1+(Math.random()<.3?1:0))%c.length;let h=c[n.ch].slice();(e.lm===3||e.lm===7)&&(h[3]=h[3]+12),e.lm===8&&(h=[h[0],h[0]+7,h[0]+14,h[0]+19]),e.lm===5&&(h=[-12,-5,0,7]),e.lm===6&&(h=h.map((d,f)=>f>1?d+12:d));let u=e.sn===3?-2:e.sn===2?-1:0;n.vs.forEach(([d,f],m)=>{let x=r*Math.pow(2,(h[m]+u)/12);d.frequency.setTargetAtTime(x,s,i?.01:3.2),f.frequency.setTargetAtTime(x*1.002,s,i?.01:3.2)}),this.padFilter()},boom(i){if(!this.ok()||window.UX&&UX.quiet)return;this.cap("Fuegos artificiales");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*5,-9),s=t.createOscillator(),r=t.createGain();s.frequency.setValueAtTime(95,e),s.frequency.exponentialRampToValueAtTime(38,e+.5),r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.07,e+.03),r.gain.exponentialRampToValueAtTime(1e-4,e+.7),s.connect(r),r.connect(n),s.start(e),s.stop(e+.8);let o=t.createBufferSource();o.buffer=this.nbuf;let a=t.createBiquadFilter();a.type="highpass",a.frequency.value=2500;let l=t.createGain();l.gain.setValueAtTime(0,e+.5),l.gain.linearRampToValueAtTime(.035,e+.55),l.gain.exponentialRampToValueAtTime(1e-4,e+1.6),o.connect(a),a.connect(l),l.connect(n),o.start(e+.5,Math.random()),o.stop(e+1.7),cr(8)},roar(){if(!this.ok()||window.UX&&UX.quiet)return;cr([30,60,30,90,40]),this.cap("Rugido del drag\xF3n");let i=this.ctx,t=i.currentTime,e=this.dest(0,-12),n=i.createOscillator(),s=i.createOscillator(),r=i.createGain(),o=i.createBiquadFilter();n.type="sawtooth",s.type="square",n.frequency.setValueAtTime(70,t),n.frequency.linearRampToValueAtTime(110,t+.5),n.frequency.exponentialRampToValueAtTime(48,t+2.2),s.frequency.setValueAtTime(35,t),s.frequency.exponentialRampToValueAtTime(24,t+2.2),o.type="lowpass",o.frequency.setValueAtTime(260,t),o.frequency.linearRampToValueAtTime(900,t+.5),o.frequency.exponentialRampToValueAtTime(140,t+2.2),o.Q.value=4,r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.1,t+.3),r.gain.setValueAtTime(.1,t+.9),r.gain.exponentialRampToValueAtTime(1e-4,t+2.4),n.connect(o),s.connect(o),o.connect(r),r.connect(e),n.start(t),s.start(t),n.stop(t+2.5),s.stop(t+2.5);let a=i.createBufferSource();a.buffer=this.nbuf;let l=i.createBiquadFilter();l.type="bandpass",l.frequency.value=420,l.Q.value=1.2;let c=i.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(.05,t+.3),c.gain.exponentialRampToValueAtTime(1e-4,t+1.8),a.connect(l),l.connect(c),c.connect(e),a.start(t,Math.random()),a.stop(t+2)},onCap:null,cap(i){if(!this.onCap)return;let t=performance.now(),e=this._cl||(this._cl={}),n={"Golpe suave de la canoa":1500,"Fuegos artificiales":1500,Salpicadura:9e3,"Lluvia suave":4e4,"Cascada cercana":3e4}[i]||9e3;e[i]&&t-e[i]<n||(e[i]=t,this.onCap(i))},mute(i){this.muted=i,this.master&&this.master.gain.setTargetAtTime(i?0:.6*this.vol,this.ctx.currentTime,.05),this.pad&&this.padFilter()},quack(i){if(!this.ok())return;this.cap("Cuac de pato");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*4,-3);[[0,420,300],[.14,360,250]].forEach(([s,r,o])=>{let a=t.createOscillator(),l=t.createBiquadFilter(),c=t.createGain();a.type="sawtooth",a.frequency.setValueAtTime(r,e+s),a.frequency.exponentialRampToValueAtTime(o,e+s+.1),l.type="bandpass",l.frequency.value=1e3,l.Q.value=2.5,c.gain.setValueAtTime(0,e+s),c.gain.linearRampToValueAtTime(.03,e+s+.015),c.gain.exponentialRampToValueAtTime(1e-4,e+s+.12),a.connect(l),l.connect(c),c.connect(n),a.start(e+s),a.stop(e+s+.14)})},flap(i){if(cr([6,40,6,40,6]),!this.ok())return;this.cap("Aleteo de garza");let t=this.ctx,e=t.currentTime,n=this.dest((i||0)*4,-3),s=t.createBufferSource();s.buffer=this.nbuf;let r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=700,r.Q.value=.8;let o=t.createGain();o.gain.setValueAtTime(0,e);for(let a=0;a<5;a++)o.gain.linearRampToValueAtTime(.05,e+a*.16+.04),o.gain.linearRampToValueAtTime(.006,e+a*.16+.13);o.gain.linearRampToValueAtTime(0,e+.95),s.connect(r),r.connect(o),o.connect(n),s.start(e,Math.random()),s.stop(e+1)},setVol(i){this.vol=i,this.master&&!this.muted&&this.master.gain.setTargetAtTime(.6*i,this.ctx.currentTime,.1),this.pad&&this.padFilter()}};var Lm=0,Hd=1,Dm=2;var ja=1,Nm=2,Io=3,Js=0,Tn=1,me=2,ss=0,Hi=1,Gn=2,kd=3,Gd=4,Um=5;var _r=100,Fm=101,Bm=102,Om=103,zm=104,Hm=200,km=201,Gm=202,Vm=203,Vd=204,Wd=205,Wm=206,qm=207,Xm=208,Ym=209,Zm=210,Jm=211,$m=212,Km=213,jm=214,vc=0,_c=1,Mc=2,mo=3,bc=4,Sc=5,Ec=6,wc=7,sh=0,Qm=1,t0=2,ki=0,qd=1,Xd=2,Yd=3,Zd=4,Jd=5,$d=6,Kd=7;var jd=300,$s=301,Mr=302,rh=303,oh=304,Qa=306,go=1e3,Ki=1001,Tc=1002,Mn=1003,e0=1004;var tl=1005;var Nn=1006,ah=1007;var Ks=1008;var si=1009,Qd=1010,tf=1011,Po=1012,lh=1013,Gi=1014,Ti=1015,gi=1016,ch=1017,hh=1018,Lo=1020,ef=35902,nf=35899,sf=1021,rf=1022,Ai=1023,Qi=1026,js=1027,Do=1028,uh=1029,Qs=1030,dh=1031;var fh=1033,el=33776,nl=33777,il=33778,sl=33779,ph=35840,mh=35841,gh=35842,xh=35843,yh=36196,vh=37492,_h=37496,Mh=37488,bh=37489,rl=37490,Sh=37491,Eh=37808,wh=37809,Th=37810,Ah=37811,Rh=37812,Ch=37813,Ih=37814,Ph=37815,Lh=37816,Dh=37817,Nh=37818,Uh=37819,Fh=37820,Bh=37821,Oh=36492,zh=36494,Hh=36495,kh=36283,Gh=36284,ol=36285,Vh=36286;var ba=2300,Ac=2301,xc=2302,Ad=2303,Rd=2400,Cd=2401,Id=2402;var n0=3200;var al=0,i0=1,Es="",Dn="srgb",Sa="srgb-linear",Ea="linear",ke="srgb";var yc=7680;var s0=519,r0=512,o0=513,a0=514,Wh=515,l0=516,c0=517,qh=518,h0=519,of=35044;var af="300 es",Fi=2e3,xo=2001;function Wy(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function u0(){let i=wa("canvas");return i.style.display="block",i}var Jp={},yo=null;function Ta(...i){let t="THREE."+i.shift();yo?yo("log",t,...i):console.log(t,...i)}function d0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=d0(i);let t="THREE."+i.shift();if(yo)yo("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=d0(i);let t="THREE."+i.shift();if(yo)yo("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function pr(...i){let t=i.join(" ");t in Jp||(Jp[t]=!0,jt(...i))}function f0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var p0={[vc]:_c,[Mc]:Ec,[bc]:wc,[mo]:Sc,[_c]:vc,[Ec]:Mc,[wc]:bc,[Sc]:mo},ts=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qu=Math.PI/180,Rc=180/Math.PI;function _s(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[e&63|128]+Hn[e>>8&255]+"-"+Hn[e>>16&255]+Hn[e>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function Xy(i,t){return(i%t+t)%t}function td(i,t,e){return(1-e)*i+e*t}function $i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ff=class ff{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(we(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ff.prototype.isVector2=!0;var ut=ff,fn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==m){let g=l*d+c*f+h*m+u*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let y=Math.acos(g),M=Math.sin(y);p=Math.sin(p*y)/M,a=Math.sin(a*y)/M,l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+x*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},pf=class pf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($p.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($p.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this.z=we(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this.z=we(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(we(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ed.copy(this).projectOnVector(t),this.sub(ed)}reflect(t){return this.sub(ed.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pf.prototype.isVector3=!0;var N=pf,ed=new N,$p=new fn,mf=class mf{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],M=s[4],v=s[7],S=s[2],b=s[5],T=s[8];return r[0]=o*x+a*y+l*S,r[3]=o*g+a*M+l*b,r[6]=o*p+a*v+l*T,r[1]=c*x+h*y+u*S,r[4]=c*g+h*M+u*b,r[7]=c*p+h*v+u*T,r[2]=d*x+f*y+m*S,r[5]=d*g+f*M+m*b,r[8]=d*p+f*v+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nd.makeScale(t,e)),this}rotate(t){return pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nd.makeRotation(-t)),this}translate(t,e){return pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};mf.prototype.isMatrix3=!0;var ce=mf,nd=new ce,Kp=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jp=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yy(){let i={enabled:!0,workingColorSpace:Sa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ke&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ke&&(s.r=po(s.r),s.g=po(s.g),s.b=po(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Es?Ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sa]:{primaries:t,whitePoint:n,transfer:Ea,toXYZ:Kp,fromXYZ:jp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:t,whitePoint:n,transfer:ke,toXYZ:Kp,fromXYZ:jp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),i}var Ce=Yy();function Ms(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function po(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Jr,Cc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Jr===void 0&&(Jr=wa("canvas")),Jr.width=t.width,Jr.height=t.height;let s=Jr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Jr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=wa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ms(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ms(e[n]/255)*255):e[n]=Ms(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zy=0,vo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=_s(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(id(s[o].image)):r.push(id(s[o]))}else r=id(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function id(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Cc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var Jy=0,sd=new N,Zn=class i extends ts{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ki,s=Ki,r=Nn,o=Ks,a=Ai,l=si,c=i.DEFAULT_ANISOTROPY,h=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=_s(),this.name="",this.source=new vo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case go:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case Tc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case go:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case Tc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=jd;Zn.DEFAULT_ANISOTROPY=1;var gf=class gf{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(f+1)/2,S=(p+1)/2,b=(h+d)/4,T=(u+x)/4,_=(m+g)/4;return M>v&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=T/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=T/r,s=_/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this.z=we(this.z,t.z,e.z),this.w=we(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this.z=we(this.z,t,e),this.w=we(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(we(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gf.prototype.isVector4=!0;var on=gf,Ic=class extends ts{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new on(0,0,t,e),this.scissorTest=!1,this.viewport=new on(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Zn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends Ic{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Aa=class extends Zn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pc=class extends Zn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ih=class ih{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,m,x,g)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ih().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/$r.setFromMatrixColumn(t,0).length(),r=1/$r.setFromMatrixColumn(t,1).length(),o=1/$r.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($y,t,Ky)}lookAt(t,e,n){let s=this.elements;return hi.subVectors(t,e),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),Os.crossVectors(n,hi),Os.lengthSq()===0&&(Math.abs(n.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),Os.crossVectors(n,hi)),Os.normalize(),Gl.crossVectors(hi,Os),s[0]=Os.x,s[4]=Gl.x,s[8]=hi.x,s[1]=Os.y,s[5]=Gl.y,s[9]=hi.y,s[2]=Os.z,s[6]=Gl.z,s[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],M=n[7],v=n[11],S=n[15],b=s[0],T=s[4],_=s[8],w=s[12],R=s[1],I=s[5],L=s[9],D=s[13],C=s[2],U=s[6],z=s[10],k=s[14],j=s[3],B=s[7],V=s[11],J=s[15];return r[0]=o*b+a*R+l*C+c*j,r[4]=o*T+a*I+l*U+c*B,r[8]=o*_+a*L+l*z+c*V,r[12]=o*w+a*D+l*k+c*J,r[1]=h*b+u*R+d*C+f*j,r[5]=h*T+u*I+d*U+f*B,r[9]=h*_+u*L+d*z+f*V,r[13]=h*w+u*D+d*k+f*J,r[2]=m*b+x*R+g*C+p*j,r[6]=m*T+x*I+g*U+p*B,r[10]=m*_+x*L+g*z+p*V,r[14]=m*w+x*D+g*k+p*J,r[3]=y*b+M*R+v*C+S*j,r[7]=y*T+M*I+v*U+S*B,r[11]=y*_+M*L+v*z+S*V,r[15]=y*w+M*D+v*k+S*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],y=l*f-c*d,M=a*f-c*u,v=a*d-l*u,S=o*f-c*h,b=o*d-l*h,T=o*u-a*h;return e*(x*y-g*M+p*v)-n*(m*y-g*S+p*b)+s*(m*M-x*S+p*T)-r*(m*v-x*b+g*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],y=e*a-n*o,M=e*l-s*o,v=e*c-r*o,S=n*l-s*a,b=n*c-r*a,T=s*c-r*l,_=h*x-u*m,w=h*g-d*m,R=h*p-f*m,I=u*g-d*x,L=u*p-f*x,D=d*p-f*g,C=y*D-M*L+v*I+S*R-b*w+T*_;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return t[0]=(a*D-l*L+c*I)*U,t[1]=(s*L-n*D-r*I)*U,t[2]=(x*T-g*b+p*S)*U,t[3]=(d*b-u*T-f*S)*U,t[4]=(l*R-o*D-c*w)*U,t[5]=(e*D-s*R+r*w)*U,t[6]=(g*v-m*T-p*M)*U,t[7]=(h*T-d*v+f*M)*U,t[8]=(o*L-a*R+c*_)*U,t[9]=(n*R-e*L-r*_)*U,t[10]=(m*b-x*v+p*y)*U,t[11]=(u*v-h*b-f*y)*U,t[12]=(a*w-o*I-l*_)*U,t[13]=(e*I-n*w+s*_)*U,t[14]=(x*M-m*S-g*y)*U,t[15]=(h*S-u*M+d*y)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,y=l*c,M=l*h,v=l*u,S=n.x,b=n.y,T=n.z;return s[0]=(1-(x+p))*S,s[1]=(f+v)*S,s[2]=(m-M)*S,s[3]=0,s[4]=(f-v)*b,s[5]=(1-(d+p))*b,s[6]=(g+y)*b,s[7]=0,s[8]=(m+M)*T,s[9]=(g-y)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=$r.set(s[0],s[1],s[2]).length(),a=$r.set(s[4],s[5],s[6]).length(),l=$r.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Li.copy(this);let c=1/o,h=1/a,u=1/l;return Li.elements[0]*=c,Li.elements[1]*=c,Li.elements[2]*=c,Li.elements[4]*=h,Li.elements[5]*=h,Li.elements[6]*=h,Li.elements[8]*=u,Li.elements[9]*=u,Li.elements[10]*=u,e.setFromRotationMatrix(Li),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Fi,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Fi)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===xo)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Fi,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Fi)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===xo)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ih.prototype.isMatrix4=!0;var be=ih,$r=new N,Li=new be,$y=new N(0,0,0),Ky=new N(1,1,1),Os=new N,Gl=new N,hi=new N,Qp=new be,tm=new fn,Bi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tm.setFromEuler(this),this.setFromQuaternion(tm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var Ra=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jy=0,em=new N,Kr=new fn,ps=new be,Vl=new N,ca=new N,Qy=new N,tv=new fn,nm=new N(1,0,0),im=new N(0,1,0),sm=new N(0,0,1),rm={type:"added"},ev={type:"removed"},jr={type:"childadded",child:null},rd={type:"childremoved",child:null},wn=class i extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new Bi,n=new fn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new ce}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kr.setFromAxisAngle(t,e),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(t,e){return Kr.setFromAxisAngle(t,e),this.quaternion.premultiply(Kr),this}rotateX(t){return this.rotateOnAxis(nm,t)}rotateY(t){return this.rotateOnAxis(im,t)}rotateZ(t){return this.rotateOnAxis(sm,t)}translateOnAxis(t,e){return em.copy(t).applyQuaternion(this.quaternion),this.position.add(em.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nm,t)}translateY(t){return this.translateOnAxis(im,t)}translateZ(t){return this.translateOnAxis(sm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ps.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vl.copy(t):Vl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ps.lookAt(ca,Vl,this.up):ps.lookAt(Vl,ca,this.up),this.quaternion.setFromRotationMatrix(ps),s&&(ps.extractRotation(s.matrixWorld),Kr.setFromRotationMatrix(ps),this.quaternion.premultiply(Kr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rm),jr.child=t,this.dispatchEvent(jr),jr.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ev),rd.child=t,this.dispatchEvent(rd),rd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ps.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ps.multiply(t.parent.matrixWorld)),t.applyMatrix4(ps),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rm),jr.child=t,this.dispatchEvent(jr),jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,t,Qy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,tv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};wn.DEFAULT_UP=new N(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=class extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}},nv={type:"move"},_o=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},m0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zs={h:0,s:0,l:0},Wl={h:0,s:0,l:0};function od(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ce.workingColorSpace){if(t=Xy(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=od(o,r,t+1/3),this.g=od(o,r,t),this.b=od(o,r,t-1/3)}return Ce.colorSpaceToWorking(this,s),this}setStyle(t,e=Dn){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dn){let n=m0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}copyLinearToSRGB(t){return this.r=po(t.r),this.g=po(t.g),this.b=po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dn){return Ce.workingToColorSpace(kn.copy(this),t),Math.round(we(kn.r*255,0,255))*65536+Math.round(we(kn.g*255,0,255))*256+Math.round(we(kn.b*255,0,255))}getHexString(t=Dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.workingToColorSpace(kn.copy(this),e);let n=kn.r,s=kn.g,r=kn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ce.workingColorSpace){return Ce.workingToColorSpace(kn.copy(this),e),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=Dn){Ce.workingToColorSpace(kn.copy(this),t);let e=kn.r,n=kn.g,s=kn.b;return t!==Dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zs),this.setHSL(zs.h+t,zs.s+e,zs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zs),t.getHSL(Wl);let n=td(zs.h,Wl.h,e),s=td(zs.s,Wl.s,e),r=td(zs.l,Wl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kn=new pt;pt.NAMES=m0;var Ca=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new pt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mr=class extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Di=new N,ms=new N,ad=new N,gs=new N,Qr=new N,to=new N,om=new N,ld=new N,cd=new N,hd=new N,ud=new on,dd=new on,fd=new on,vs=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Di.subVectors(t,e),s.cross(Di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Di.subVectors(s,e),ms.subVectors(n,e),ad.subVectors(t,e);let o=Di.dot(Di),a=Di.dot(ms),l=Di.dot(ad),c=ms.dot(ms),h=ms.dot(ad),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gs)===null?!1:gs.x>=0&&gs.y>=0&&gs.x+gs.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,gs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gs.x),l.addScaledVector(o,gs.y),l.addScaledVector(a,gs.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ud.setScalar(0),dd.setScalar(0),fd.setScalar(0),ud.fromBufferAttribute(t,e),dd.fromBufferAttribute(t,n),fd.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ud,r.x),o.addScaledVector(dd,r.y),o.addScaledVector(fd,r.z),o}static isFrontFacing(t,e,n,s){return Di.subVectors(n,e),ms.subVectors(t,e),Di.cross(ms).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),ms.subVectors(this.a,this.b),Di.cross(ms).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Qr.subVectors(s,n),to.subVectors(r,n),ld.subVectors(t,n);let l=Qr.dot(ld),c=to.dot(ld);if(l<=0&&c<=0)return e.copy(n);cd.subVectors(t,s);let h=Qr.dot(cd),u=to.dot(cd);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Qr,o);hd.subVectors(t,r);let f=Qr.dot(hd),m=to.dot(hd);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(to,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return om.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(om,a);let p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Qr,o).addScaledVector(to,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},es=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ni):Ni.fromBufferAttribute(r,o),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ql.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ql.copy(n.boundingBox)),ql.applyMatrix4(t.matrixWorld),this.union(ql)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ha),Xl.subVectors(this.max,ha),eo.subVectors(t.a,ha),no.subVectors(t.b,ha),io.subVectors(t.c,ha),Hs.subVectors(no,eo),ks.subVectors(io,no),hr.subVectors(eo,io);let e=[0,-Hs.z,Hs.y,0,-ks.z,ks.y,0,-hr.z,hr.y,Hs.z,0,-Hs.x,ks.z,0,-ks.x,hr.z,0,-hr.x,-Hs.y,Hs.x,0,-ks.y,ks.x,0,-hr.y,hr.x,0];return!pd(e,eo,no,io,Xl)||(e=[1,0,0,0,1,0,0,0,1],!pd(e,eo,no,io,Xl))?!1:(Yl.crossVectors(Hs,ks),e=[Yl.x,Yl.y,Yl.z],pd(e,eo,no,io,Xl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xs=[new N,new N,new N,new N,new N,new N,new N,new N],Ni=new N,ql=new es,eo=new N,no=new N,io=new N,Hs=new N,ks=new N,hr=new N,ha=new N,Xl=new N,Yl=new N,ur=new N;function pd(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ur.fromArray(i,r);let a=s.x*Math.abs(ur.x)+s.y*Math.abs(ur.y)+s.z*Math.abs(ur.z),l=t.dot(ur),c=e.dot(ur),h=n.dot(ur);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var _n=new N,Zl=new ut,iv=0,Kt=class extends ts{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=of,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zl.fromBufferAttribute(this,e),Zl.applyMatrix3(t),this.setXY(e,Zl.x,Zl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix3(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix4(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyNormalMatrix(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.transformDirection(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ia=class extends Kt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Pa=class extends Kt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends Kt{constructor(t,e,n){super(new Float32Array(t),e,n)}},sv=new es,ua=new N,md=new N,ns=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):sv.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ua.subVectors(t,this.center);let e=ua.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ua,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(md.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ua.copy(t.center).add(md)),this.expandByPoint(ua.copy(t.center).sub(md))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},rv=0,Si=new be,gd=new wn,so=new N,ui=new es,da=new es,In=new N,ue=class i extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wy(t)?Pa:Ia)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,e,n){return Si.makeTranslation(t,e,n),this.applyMatrix4(Si),this}scale(t,e,n){return Si.makeScale(t,e,n),this.applyMatrix4(Si),this}lookAt(t){return gd.lookAt(t),gd.updateMatrix(),this.applyMatrix4(gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ui.setFromBufferAttribute(r),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];da.setFromBufferAttribute(a),this.morphTargetsRelative?(In.addVectors(ui.min,da.min),ui.expandByPoint(In),In.addVectors(ui.max,da.max),ui.expandByPoint(In)):(ui.expandByPoint(da.min),ui.expandByPoint(da.max))}ui.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)In.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(In));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)In.fromBufferAttribute(a,c),l&&(so.fromBufferAttribute(t,c),In.add(so)),s=Math.max(s,n.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new N,l[_]=new N;let c=new N,h=new N,u=new N,d=new ut,f=new ut,m=new ut,x=new N,g=new N;function p(_,w,R){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,R),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),a[_].add(x),a[w].add(x),a[R].add(x),l[_].add(g),l[w].add(g),l[R].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,w=y.length;_<w;++_){let R=y[_],I=R.start,L=R.count;for(let D=I,C=I+L;D<C;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let M=new N,v=new N,S=new N,b=new N;function T(_){S.fromBufferAttribute(s,_),b.copy(S);let w=a[_];M.copy(w),M.sub(S.multiplyScalar(S.dot(w))).normalize(),v.crossVectors(b,w);let I=v.dot(l[_])<0?-1:1;o.setXYZW(_,M.x,M.y,M.z,I)}for(let _=0,w=y.length;_<w;++_){let R=y[_],I=R.start,L=R.count;for(let D=I,C=I+L;D<C;D+=3)T(t.getX(D+0)),T(t.getX(D+1)),T(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Kt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)In.fromBufferAttribute(t,e),In.normalize(),t.setXYZ(e,In.x,In.y,In.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Kt(d,h,u)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},La=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=of,this.updateRanges=[],this.version=0,this.uuid=_s()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_s()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_s()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Yn=new N,Mo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Yn.fromBufferAttribute(this,e),Yn.applyMatrix4(t),this.setXYZ(e,Yn.x,Yn.y,Yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Yn.fromBufferAttribute(this,e),Yn.applyNormalMatrix(t),this.setXYZ(e,Yn.x,Yn.y,Yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Yn.fromBufferAttribute(this,e),Yn.transformDirection(t),this.setXYZ(e,Yn.x,Yn.y,Yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$i(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Kt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xd=new N,ov=new N,av=new ce,Ui=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=xd.subVectors(n,e).cross(ov.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(xd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||av.getNormalMatrix(t),s=this.coplanarPoint(xd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},lv=0,Ei=class extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=Hi,this.side=Js,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vd,this.blendDst=Wd,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yc,this.stencilZFail=yc,this.stencilZPass=yc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ui().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},is=class extends Ei{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ro,fa=new N,oo=new N,ao=new N,lo=new ut,pa=new ut,g0=new be,Jl=new N,ma=new N,$l=new N,am=new ut,yd=new ut,lm=new ut,bs=class extends wn{constructor(t=new is){if(super(),this.isSprite=!0,this.type="Sprite",ro===void 0){ro=new ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new La(e,5);ro.setIndex([0,1,2,0,2,3]),ro.setAttribute("position",new Mo(n,3,0,!1)),ro.setAttribute("uv",new Mo(n,2,3,!1))}this.geometry=ro,this.material=t,this.center=new ut(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oo.setFromMatrixScale(this.matrixWorld),g0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ao.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oo.multiplyScalar(-ao.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Kl(Jl.set(-.5,-.5,0),ao,o,oo,s,r),Kl(ma.set(.5,-.5,0),ao,o,oo,s,r),Kl($l.set(.5,.5,0),ao,o,oo,s,r),am.set(0,0),yd.set(1,0),lm.set(1,1);let a=t.ray.intersectTriangle(Jl,ma,$l,!1,fa);if(a===null&&(Kl(ma.set(-.5,.5,0),ao,o,oo,s,r),yd.set(0,1),a=t.ray.intersectTriangle(Jl,$l,ma,!1,fa),a===null))return;let l=t.ray.origin.distanceTo(fa);l<t.near||l>t.far||e.push({distance:l,point:fa.clone(),uv:vs.getInterpolation(fa,Jl,ma,$l,am,yd,lm,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Kl(i,t,e,n,s,r){lo.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(pa.x=r*lo.x-s*lo.y,pa.y=s*lo.x+r*lo.y):pa.copy(lo),i.copy(t),i.x+=pa.x,i.y+=pa.y,i.applyMatrix4(g0)}var ys=new N,vd=new N,jl=new N,Ql=new N,bo=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ys)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ys.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ys.copy(this.origin).addScaledVector(this.direction,e),ys.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vd.copy(t).add(e).multiplyScalar(.5),jl.copy(e).sub(t).normalize(),Ql.copy(this.origin).sub(vd);let r=t.distanceTo(e)*.5,o=-this.direction.dot(jl),a=Ql.dot(this.direction),l=-Ql.dot(jl),c=Ql.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vd).addScaledVector(jl,d),f}intersectSphere(t,e){if(t.radius<0)return null;ys.subVectors(t.center,this.origin);let n=ys.dot(this.direction),s=ys.dot(ys)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ys)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=n.x-o.x,y=n.y-o.y,M=n.z-o.z,v=Math.abs(l),S=Math.abs(c),b=Math.abs(h),T,_,w,R,I,L,D,C,U,z,k,j;if(v>=S&&v>=b?(w=l,L=u,U=m,j=p,l>=0?(T=c,_=h,R=d,I=f,D=x,C=g,z=y,k=M):(T=h,_=c,R=f,I=d,D=g,C=x,z=M,k=y)):S>=b?(w=c,L=d,U=x,j=y,c>=0?(T=h,_=l,R=f,I=u,D=g,C=m,z=M,k=p):(T=l,_=h,R=u,I=f,D=m,C=g,z=p,k=M)):(w=h,L=f,U=g,j=M,h>=0?(T=l,_=c,R=u,I=d,D=m,C=x,z=p,k=y):(T=c,_=l,R=d,I=u,D=x,C=m,z=y,k=p)),w===0)return null;let B=T/w,V=_/w,J=1/w,mt=R-B*L,At=I-V*L,le=D-B*U,se=C-V*U,Yt=z-B*j,nt=k-V*j,ot=Yt*se-nt*le,bt=mt*nt-At*Yt,Ot=le*At-se*mt;if(s){if(ot<0||bt<0||Ot<0)return null}else if((ot<0||bt<0||Ot<0)&&(ot>0||bt>0||Ot>0))return null;let Rt=ot+bt+Ot;if(Rt===0)return null;let Jt=J*(ot*L+bt*U+Ot*j);return(Rt>0?Jt<0:Jt>0)?null:this.at(Jt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},cm=new be,dr=new bo,tc=new ns,hm=new N,ec=new N,nc=new N,ic=new N,_d=new N,sc=new N,um=new N,rc=new N,$=class extends wn{constructor(t=new ue,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){sc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(_d.fromBufferAttribute(u,t),o?sc.addScaledVector(_d,h):sc.addScaledVector(_d.sub(e),h))}e.add(sc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(r),dr.copy(t.ray).recast(t.near),!(tc.containsPoint(dr.origin)===!1&&(dr.intersectSphere(tc,hm)===null||dr.origin.distanceToSquared(hm)>(t.far-t.near)**2))&&(cm.copy(r).invert(),dr.copy(t.ray).applyMatrix4(cm),!(n.boundingBox!==null&&dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,dr)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,S=M;v<S;v+=3){let b=a.getX(v),T=a.getX(v+1),_=a.getX(v+2);s=oc(this,p,t,n,c,h,u,b,T,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);s=oc(this,o,t,n,c,h,u,y,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,S=M;v<S;v+=3){let b=v,T=v+1,_=v+2;s=oc(this,p,t,n,c,h,u,b,T,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=g,M=g+1,v=g+2;s=oc(this,o,t,n,c,h,u,y,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function cv(i,t,e,n,s,r,o,a){let l;if(t.side===Tn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Js,a),l===null)return null;rc.copy(a),rc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(rc);return c<e.near||c>e.far?null:{distance:c,point:rc.clone(),object:i}}function oc(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ec),i.getVertexPosition(l,nc),i.getVertexPosition(c,ic);let h=cv(i,t,e,n,ec,nc,ic,um);if(h){let u=new N;vs.getBarycoord(um,ec,nc,ic,u),s&&(h.uv=vs.getInterpolatedAttribute(s,a,l,c,u,new ut)),r&&(h.uv1=vs.getInterpolatedAttribute(r,a,l,c,u,new ut)),o&&(h.normal=vs.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};vs.getNormal(ec,nc,ic,d.normal),h.face=d,h.barycoord=u}return h}var gr=class extends Zn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Mn,h=Mn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oi=class extends Kt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},co=new be,dm=new be,ac=[],fm=new es,hv=new be,ga=new $,xa=new ns,Pn=class extends ${constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new es),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,co),fm.copy(t.boundingBox).applyMatrix4(co),this.boundingBox.union(fm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,co),xa.copy(t.boundingSphere).applyMatrix4(co),this.boundingSphere.union(xa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ga.geometry=this.geometry,ga.material=this.material,ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(n),t.ray.intersectsSphere(xa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,co),dm.multiplyMatrices(n,co),ga.matrixWorld=dm,ga.raycast(t,ac);for(let o=0,a=ac.length;o<a;o++){let l=ac[o];l.instanceId=r,l.object=this,e.push(l)}ac.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gr(new Float32Array(s*this.count),s,this.count,Do,Ti));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fr=new ns,uv=new ut(.5,.5),lc=new N,So=class{constructor(t=new Ui,e=new Ui,n=new Ui,s=new Ui,r=new Ui,o=new Ui){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],y=r[12],M=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,p-m,S-y).normalize(),s[1].setComponents(c+o,f+h,p+m,S+y).normalize(),s[2].setComponents(c+a,f+u,p+x,S+M).normalize(),s[3].setComponents(c-a,f-u,p-x,S-M).normalize(),n)s[4].setComponents(l,d,g,v).normalize(),s[5].setComponents(c-l,f-d,p-g,S-v).normalize();else if(s[4].setComponents(c-l,f-d,p-g,S-v).normalize(),e===Fi)s[5].setComponents(c+l,f+d,p+g,S+v).normalize();else if(e===xo)s[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){fr.center.set(0,0,0);let e=uv.distanceTo(t.center);return fr.radius=.7071067811865476+e,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(lc.x=s.normal.x>0?t.max.x:t.min.x,lc.y=s.normal.y>0?t.max.y:t.min.y,lc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Eo=class extends Ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Lc=new N,Dc=new N,pm=new be,ya=new bo,cc=new ns,Md=new N,mm=new N,Nc=class extends wn{constructor(t=new ue,e=new Eo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Lc.fromBufferAttribute(e,s-1),Dc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Lc.distanceTo(Dc);t.setAttribute("lineDistance",new fe(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(s),cc.radius+=r,t.ray.intersectsSphere(cc)===!1)return;pm.copy(s).invert(),ya.copy(t.ray).applyMatrix4(pm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),y=h.getX(x+1),M=hc(this,t,ya,l,p,y,x);M&&e.push(M)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=hc(this,t,ya,l,x,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=hc(this,t,ya,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=hc(this,t,ya,l,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hc(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Lc.fromBufferAttribute(a,s),Dc.fromBufferAttribute(a,r),e.distanceSqToSegment(Lc,Dc,Md,mm)>n)return;Md.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Md);if(!(c<t.near||c>t.far))return{distance:c,point:mm.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var gm=new N,xm=new N,Da=class extends Nc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)gm.fromBufferAttribute(e,s),xm.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gm.distanceTo(xm);t.setAttribute("lineDistance",new fe(n,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var di=class extends Ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ym=new be,Pd=new bo,uc=new ns,dc=new N,wi=class extends wn{constructor(t=new ue,e=new di){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uc.copy(n.boundingSphere),uc.applyMatrix4(s),uc.radius+=r,t.ray.intersectsSphere(uc)===!1)return;ym.copy(s).invert(),Pd.copy(t.ray).applyMatrix4(ym);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=c.getX(m);dc.fromBufferAttribute(u,g),vm(dc,g,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)dc.fromBufferAttribute(u,m),vm(dc,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function vm(i,t,e,n,s,r,o){let a=Pd.distanceSqToPoint(i);if(a<e){let l=new N;Pd.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Na=class extends Zn{constructor(t=[],e=$s,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zi=class extends Zn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vs=class extends Zn{constructor(t,e,n=Gi,s,r,o,a=Mn,l=Mn,c,h=Qi,u=1){if(h!==Qi&&h!==js)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Uc=class extends Vs{constructor(t,e=Gi,n=$s,s,r,o=Mn,a=Mn,l,c=Qi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ua=class extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ln=class i extends ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function m(x,g,p,y,M,v,S,b,T,_,w){let R=v/T,I=S/_,L=v/2,D=S/2,C=b/2,U=T+1,z=_+1,k=0,j=0,B=new N;for(let V=0;V<z;V++){let J=V*I-D;for(let mt=0;mt<U;mt++){let At=mt*R-L;B[x]=At*y,B[g]=J*M,B[p]=C,c.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[p]=b>0?1:-1,h.push(B.x,B.y,B.z),u.push(mt/T),u.push(1-V/_),k+=1}}for(let V=0;V<_;V++)for(let J=0;J<T;J++){let mt=d+J+U*V,At=d+J+U*(V+1),le=d+(J+1)+U*(V+1),se=d+(J+1)+U*V;l.push(mt,At,se),l.push(At,le,se),j+=6}a.addGroup(f,j,w),f+=j,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fi=class i extends ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Le=class i extends ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function y(){let v=new N,S=new N,b=0,T=(e-t)/n;for(let _=0;_<=r;_++){let w=[],R=_/r,I=R*(e-t)+t;for(let L=0;L<=s;L++){let D=L/s,C=D*l+a,U=Math.sin(C),z=Math.cos(C);S.x=I*U,S.y=-R*n+g,S.z=I*z,u.push(S.x,S.y,S.z),v.set(U,T,z).normalize(),d.push(v.x,v.y,v.z),f.push(D,1-R),w.push(m++)}x.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){let R=x[w][_],I=x[w+1][_],L=x[w+1][_+1],D=x[w][_+1];(t>0||w!==0)&&(h.push(R,I,D),b+=3),(e>0||w!==r-1)&&(h.push(I,L,D),b+=3)}c.addGroup(p,b,0),p+=b}function M(v){let S=m,b=new ut,T=new N,_=0,w=v===!0?t:e,R=v===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),m++;let I=m;for(let L=0;L<=s;L++){let C=L/s*l+a,U=Math.cos(C),z=Math.sin(C);T.x=w*z,T.y=g*R,T.z=w*U,u.push(T.x,T.y,T.z),d.push(0,R,0),b.x=U*.5+.5,b.y=z*.5*R+.5,f.push(b.x,b.y),m++}for(let L=0;L<s;L++){let D=S+L,C=I+L;v===!0?h.push(C,C+1,D):h.push(C+1,C,D),_+=3}c.addGroup(p,_,v===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oe=class i extends Le{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fc=class i extends ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new N,v=new N,S=new N;for(let b=0;b<e.length;b+=3)f(e[b+0],M),f(e[b+1],v),f(e[b+2],S),l(M,v,S,y)}function l(y,M,v,S){let b=S+1,T=[];for(let _=0;_<=b;_++){T[_]=[];let w=y.clone().lerp(v,_/b),R=M.clone().lerp(v,_/b),I=b-_;for(let L=0;L<=I;L++)L===0&&_===b?T[_][L]=w:T[_][L]=w.clone().lerp(R,L/I)}for(let _=0;_<b;_++)for(let w=0;w<2*(b-_)-1;w++){let R=Math.floor(w/2);w%2===0?(d(T[_][R+1]),d(T[_+1][R]),d(T[_][R])):(d(T[_][R+1]),d(T[_+1][R+1]),d(T[_+1][R]))}}function c(y){let M=new N;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(y),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let y=new N;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let v=g(y)/2/Math.PI+.5,S=p(y)/Math.PI+.5;o.push(v,1-S)}m(),u()}function u(){for(let y=0;y<o.length;y+=6){let M=o[y+0],v=o[y+2],S=o[y+4],b=Math.max(M,v,S),T=Math.min(M,v,S);b>.9&&T<.1&&(M<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,M){let v=y*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function m(){let y=new N,M=new N,v=new N,S=new N,b=new ut,T=new ut,_=new ut;for(let w=0,R=0;w<r.length;w+=9,R+=6){y.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),b.set(o[R+0],o[R+1]),T.set(o[R+2],o[R+3]),_.set(o[R+4],o[R+5]),S.copy(y).add(M).add(v).divideScalar(3);let I=g(S);x(b,R+0,y,I),x(T,R+2,M,I),x(_,R+4,v,I)}}function x(y,M,v,S){S<0&&y.x===1&&(o[M]=y.x-1),v.x===0&&v.z===0&&(o[M]=S/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new be;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(we(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(we(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},wo=class extends pi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bc=class extends wo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lf(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var _m=new N,Mm=new N,bd=new lf,Sd=new lf,Ed=new lf,To=class extends pi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Mm.subVectors(s[0],s[1]).add(s[0]),c=Mm);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(_m.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_m),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),bd.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,g),Sd.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,g),Ed.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(bd.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Sd.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ed.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(bd.calc(l),Sd.calc(l),Ed.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function bm(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function dv(i,t){let e=1-i;return e*e*t}function fv(i,t){return 2*(1-i)*i*t}function pv(i,t){return i*i*t}function _a(i,t,e,n){return dv(i,t)+fv(i,e)+pv(i,n)}function mv(i,t){let e=1-i;return e*e*e*t}function gv(i,t){let e=1-i;return 3*e*e*i*t}function xv(i,t){return 3*(1-i)*i*i*t}function yv(i,t){return i*i*i*t}function Ma(i,t,e,n,s){return mv(i,t)+gv(i,e)+xv(i,n)+yv(i,s)}var Fa=class extends pi{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ma(t,s.x,r.x,o.x,a.x),Ma(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oc=class extends pi{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ma(t,s.x,r.x,o.x,a.x),Ma(t,s.y,r.y,o.y,a.y),Ma(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ba=class extends pi{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zc=class extends pi{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oa=class extends pi{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_a(t,s.x,r.x,o.x),_a(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hc=class extends pi{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_a(t,s.x,r.x,o.x),_a(t,s.y,r.y,o.y),_a(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},za=class extends pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(bm(a,l.x,c.x,h.x,u.x),bm(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ut().fromArray(s))}return this}},Ld=Object.freeze({__proto__:null,ArcCurve:Bc,CatmullRomCurve3:To,CubicBezierCurve:Fa,CubicBezierCurve3:Oc,EllipseCurve:wo,LineCurve:Ba,LineCurve3:zc,QuadraticBezierCurve:Oa,QuadraticBezierCurve3:Hc,SplineCurve:za}),kc=class extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ld[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ld[s.type]().fromJSON(s))}return this}},xr=class extends kc{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ba(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Oa(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Fa(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new za(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new wo(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ws=class extends xr{constructor(t){super(t),this.uuid=_s(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new xr().fromJSON(s))}return this}};function vv(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=x0(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ev(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let d=e;d<s;d+=e){let f=i[d],m=i[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ha(r,o,e,a,l,c,0),o}function x0(i,t,e,n,s){let r;if(s===Uv(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Sm(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Sm(o/n|0,i[o],i[o+1],r);return r&&Ao(r,r.next)&&(Ga(r),r=r.next),r}function yr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ao(e,e.next)||hn(e.prev,e,e.next)===0)){if(Ga(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ha(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Cv(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Mv(i,n,s,r):_v(i)){t.push(l.i,i.i,c.i),Ga(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=bv(yr(i),t),Ha(i,t,e,n,s,r,2)):o===2&&Sv(i,t,e,n,s,r):Ha(yr(i),t,e,n,s,r,1);break}}}function _v(i){let t=i.prev,e=i,n=i.next;if(hn(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&va(s,a,r,l,o,c,m.x,m.y)&&hn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Mv(i,t,e,n){let s=i.prev,r=i,o=i.next;if(hn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),x=Math.max(a,l,c),g=Math.max(h,u,d),p=Dd(f,m,t,e,n),y=Dd(x,g,t,e,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&va(a,h,l,u,c,d,M.x,M.y)&&hn(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&va(a,h,l,u,c,d,v.x,v.y)&&hn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&va(a,h,l,u,c,d,M.x,M.y)&&hn(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&va(a,h,l,u,c,d,v.x,v.y)&&hn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function bv(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ao(n,s)&&v0(n,e,e.next,s)&&ka(n,s)&&ka(s,n)&&(t.push(n.i,e.i,s.i),Ga(e),Ga(e.next),e=i=s),e=e.next}while(e!==i);return yr(e)}function Sv(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Lv(o,a)){let l=_0(o,a);o=yr(o,o.next),l=yr(l,l.next),Ha(o,t,e,n,s,r,0),Ha(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ev(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=x0(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Pv(c))}s.sort(wv);for(let r=0;r<s.length;r++)e=Tv(s[r],e);return e}function wv(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Tv(i,t){let e=Av(i,t);if(!e)return t;let n=_0(e,i);return yr(n,n.next),yr(e,e.next)}function Av(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ao(i,e))return e;do{if(Ao(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&y0(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);ka(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Rv(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Rv(i,t){return hn(i.prev,i,t.prev)<0&&hn(t.next,i,i.next)<0}function Cv(i,t,e,n){let s=i;do s.z===0&&(s.z=Dd(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Iv(s)}function Iv(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Dd(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Pv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function y0(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function va(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&y0(i,t,e,n,s,r,o,a)}function Lv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Dv(i,t)&&(ka(i,t)&&ka(t,i)&&Nv(i,t)&&(hn(i.prev,i,t.prev)||hn(i,t.prev,t))||Ao(i,t)&&hn(i.prev,i,i.next)>0&&hn(t.prev,t,t.next)>0)}function hn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ao(i,t){return i.x===t.x&&i.y===t.y}function v0(i,t,e,n){let s=pc(hn(i,t,e)),r=pc(hn(i,t,n)),o=pc(hn(e,n,i)),a=pc(hn(e,n,t));return!!(s!==r&&o!==a||s===0&&fc(i,e,t)||r===0&&fc(i,n,t)||o===0&&fc(e,i,n)||a===0&&fc(e,t,n))}function fc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function pc(i){return i>0?1:i<0?-1:0}function Dv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&v0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ka(i,t){return hn(i.prev,i,i.next)<0?hn(i,t,i.next)>=0&&hn(i,i.prev,t)>=0:hn(i,t,i.prev)<0||hn(i,i.next,t)<0}function Nv(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _0(i,t){let e=Nd(i.i,i.x,i.y),n=Nd(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Sm(i,t,e,n){let s=Nd(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ga(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nd(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Uv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ud=class{static triangulate(t,e,n=2){return vv(t,e,n)}},ji=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Em(t),wm(n,t);let o=t.length;e.forEach(Em);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,wm(n,e[l]);let a=Ud.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Em(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wm(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ro=class i extends ue{constructor(t=new Ws([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Fv,M,v=!1,S,b,T,_;if(p){M=p.getSpacedPoints(h),v=!0,d=!1;let rt=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,rt),b=new N,T=new N,_=new N}d||(g=0,f=0,m=0,x=0);let w=a.extractPoints(c),R=w.shape,I=w.holes;if(!ji.isClockWise(R)){R=R.reverse();for(let rt=0,ht=I.length;rt<ht;rt++){let ft=I[rt];ji.isClockWise(ft)&&(I[rt]=ft.reverse())}}function D(rt){let ft=10000000000000001e-36,dt=rt[0];for(let xt=1;xt<=rt.length;xt++){let Nt=xt%rt.length,Gt=rt[Nt],$t=Gt.x-dt.x,ie=Gt.y-dt.y,O=$t*$t+ie*ie,Ae=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(dt.x),Math.abs(dt.y)),ge=ft*Ae*Ae;if(O<=ge){rt.splice(Nt,1),xt--;continue}dt=Gt}}D(R),I.forEach(D);let C=I.length,U=R;for(let rt=0;rt<C;rt++){let ht=I[rt];R=R.concat(ht)}function z(rt,ht,ft){return ht||ee("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(ht,ft)}let k=R.length;function j(rt,ht,ft){let dt,xt,Nt,Gt=rt.x-ht.x,$t=rt.y-ht.y,ie=ft.x-rt.x,O=ft.y-rt.y,Ae=Gt*Gt+$t*$t,ge=Gt*O-$t*ie;if(Math.abs(ge)>Number.EPSILON){let P=Math.sqrt(Ae),E=Math.sqrt(ie*ie+O*O),q=ht.x-$t/P,X=ht.y+Gt/P,et=ft.x-O/E,gt=ft.y+ie/E,vt=((et-q)*O-(gt-X)*ie)/(Gt*O-$t*ie);dt=q+Gt*vt-rt.x,xt=X+$t*vt-rt.y;let it=dt*dt+xt*xt;if(it<=2)return new ut(dt,xt);Nt=Math.sqrt(it/2)}else{let P=!1;Gt>Number.EPSILON?ie>Number.EPSILON&&(P=!0):Gt<-Number.EPSILON?ie<-Number.EPSILON&&(P=!0):Math.sign($t)===Math.sign(O)&&(P=!0),P?(dt=-$t,xt=Gt,Nt=Math.sqrt(Ae)):(dt=Gt,xt=$t,Nt=Math.sqrt(Ae/2))}return new ut(dt/Nt,xt/Nt)}let B=[];for(let rt=0,ht=U.length,ft=ht-1,dt=rt+1;rt<ht;rt++,ft++,dt++)ft===ht&&(ft=0),dt===ht&&(dt=0),B[rt]=j(U[rt],U[ft],U[dt]);let V=[],J,mt=B.concat();for(let rt=0,ht=C;rt<ht;rt++){let ft=I[rt];J=[];for(let dt=0,xt=ft.length,Nt=xt-1,Gt=dt+1;dt<xt;dt++,Nt++,Gt++)Nt===xt&&(Nt=0),Gt===xt&&(Gt=0),J[dt]=j(ft[dt],ft[Nt],ft[Gt]);V.push(J),mt=mt.concat(J)}let At;if(g===0)At=ji.triangulateShape(U,I);else{let rt=[],ht=[];for(let ft=0;ft<g;ft++){let dt=ft/g,xt=f*Math.cos(dt*Math.PI/2),Nt=m*Math.sin(dt*Math.PI/2)+x;for(let Gt=0,$t=U.length;Gt<$t;Gt++){let ie=z(U[Gt],B[Gt],Nt);bt(ie.x,ie.y,-xt),dt===0&&rt.push(ie)}for(let Gt=0,$t=C;Gt<$t;Gt++){let ie=I[Gt];J=V[Gt];let O=[];for(let Ae=0,ge=ie.length;Ae<ge;Ae++){let P=z(ie[Ae],J[Ae],Nt);bt(P.x,P.y,-xt),dt===0&&O.push(P)}dt===0&&ht.push(O)}}At=ji.triangulateShape(rt,ht)}let le=At.length,se=m+x;for(let rt=0;rt<k;rt++){let ht=d?z(R[rt],mt[rt],se):R[rt];v?(T.copy(S.normals[0]).multiplyScalar(ht.x),b.copy(S.binormals[0]).multiplyScalar(ht.y),_.copy(M[0]).add(T).add(b),bt(_.x,_.y,_.z)):bt(ht.x,ht.y,0)}for(let rt=1;rt<=h;rt++)for(let ht=0;ht<k;ht++){let ft=d?z(R[ht],mt[ht],se):R[ht];v?(T.copy(S.normals[rt]).multiplyScalar(ft.x),b.copy(S.binormals[rt]).multiplyScalar(ft.y),_.copy(M[rt]).add(T).add(b),bt(_.x,_.y,_.z)):bt(ft.x,ft.y,u/h*rt)}for(let rt=g-1;rt>=0;rt--){let ht=rt/g,ft=f*Math.cos(ht*Math.PI/2),dt=m*Math.sin(ht*Math.PI/2)+x;for(let xt=0,Nt=U.length;xt<Nt;xt++){let Gt=z(U[xt],B[xt],dt);bt(Gt.x,Gt.y,u+ft)}for(let xt=0,Nt=I.length;xt<Nt;xt++){let Gt=I[xt];J=V[xt];for(let $t=0,ie=Gt.length;$t<ie;$t++){let O=z(Gt[$t],J[$t],dt);v?bt(O.x,O.y+M[h-1].y,M[h-1].x+ft):bt(O.x,O.y,u+ft)}}}Yt(),nt();function Yt(){let rt=s.length/3;if(d){let ht=0,ft=k*ht;for(let dt=0;dt<le;dt++){let xt=At[dt];Ot(xt[2]+ft,xt[1]+ft,xt[0]+ft)}ht=h+g*2,ft=k*ht;for(let dt=0;dt<le;dt++){let xt=At[dt];Ot(xt[0]+ft,xt[1]+ft,xt[2]+ft)}}else{for(let ht=0;ht<le;ht++){let ft=At[ht];Ot(ft[2],ft[1],ft[0])}for(let ht=0;ht<le;ht++){let ft=At[ht];Ot(ft[0]+k*h,ft[1]+k*h,ft[2]+k*h)}}n.addGroup(rt,s.length/3-rt,0)}function nt(){let rt=s.length/3,ht=0;ot(U,ht),ht+=U.length;for(let ft=0,dt=I.length;ft<dt;ft++){let xt=I[ft];ot(xt,ht),ht+=xt.length}n.addGroup(rt,s.length/3-rt,1)}function ot(rt,ht){let ft=rt.length;for(;--ft>=0;){let dt=ft,xt=ft-1;xt<0&&(xt=rt.length-1);for(let Nt=0,Gt=h+g*2;Nt<Gt;Nt++){let $t=k*Nt,ie=k*(Nt+1),O=ht+dt+$t,Ae=ht+xt+$t,ge=ht+xt+ie,P=ht+dt+ie;Rt(O,Ae,ge,P)}}}function bt(rt,ht,ft){l.push(rt),l.push(ht),l.push(ft)}function Ot(rt,ht,ft){Jt(rt),Jt(ht),Jt(ft);let dt=s.length/3,xt=y.generateTopUV(n,s,dt-3,dt-2,dt-1);De(xt[0]),De(xt[1]),De(xt[2])}function Rt(rt,ht,ft,dt){Jt(rt),Jt(ht),Jt(dt),Jt(ht),Jt(ft),Jt(dt);let xt=s.length/3,Nt=y.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);De(Nt[0]),De(Nt[1]),De(Nt[3]),De(Nt[1]),De(Nt[2]),De(Nt[3])}function Jt(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function De(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Bv(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ld[s.type]().fromJSON(s)),new i(n,t.options)}},Fv={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ut(r,o),new ut(a,l),new ut(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ut(o,1-l),new ut(c,1-u),new ut(d,1-m),new ut(x,1-p)]:[new ut(a,1-l),new ut(h,1-u),new ut(f,1-m),new ut(g,1-p)]}};function Bv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var bn=class i extends Fc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var an=class i extends ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let y=p*d-o;for(let M=0;M<c;M++){let v=M*u-r;m.push(v,-y,0),x.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let M=y+c*p,v=y+c*(p+1),S=y+1+c*(p+1),b=y+1+c*p;f.push(M,v,b),f.push(v,S,b)}this.setIndex(f),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},vr=class i extends ue{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new N,m=new ut;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let y=p+g,M=y,v=y+n+1,S=y+n+2,b=y+1;a.push(M,v,b),a.push(v,S,b)}}this.setIndex(a),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Va=class i extends ue{constructor(t=new Ws([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(r,3)),this.setAttribute("uv",new fe(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,m=d.holes;ji.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let y=m[g];ji.isClockWise(y)===!0&&(m[g]=y.reverse())}let x=ji.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let y=m[g];f=f.concat(y)}for(let g=0,p=f.length;g<p;g++){let y=f[g];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,p=x.length;g<p;g++){let y=x[g],M=y[0]+u,v=y[1]+u,S=y[2]+u;n.push(M,v,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ov(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Ov(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var pe=class i extends ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,d=new N,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],M=p/n,v=o+M*a,S=t*Math.cos(v),b=Math.sqrt(t*t-S*S),T=0;p===0&&o===0?T=.5/e:p===n&&l===Math.PI&&(T=-.5/e);for(let _=0;_<=e;_++){let w=_/e,R=s+w*r;u.x=-b*Math.cos(R),u.y=S,u.z=b*Math.sin(R),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(w+T,1-M),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let M=h[p][y+1],v=h[p][y],S=h[p+1][y],b=h[p+1][y+1];(p!==0||o>0)&&f.push(M,v,b),(p!==n-1||l<Math.PI)&&f.push(v,S,b)}this.setIndex(f),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ss=class i extends ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new N,f=new N,m=new N;for(let x=0;x<=n;x++){let g=o+x/n*a;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(y),f.y=(t+e*Math.cos(g))*Math.sin(y),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let p=(s+1)*x+g-1,y=(s+1)*(x-1)+g-1,M=(s+1)*(x-1)+g,v=(s+1)*x+g;l.push(p,y,v),l.push(y,M,v)}this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function br(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Tm(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Tm(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Vn(i){let t={};for(let e=0;e<i.length;e++){let n=br(i[e]);for(let s in n)t[s]=n[s]}return t}function Tm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zv(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}var M0={clone:br,merge:Vn},Hv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hv,this.fragmentShader=kv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=zv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new pt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new on().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ce().fromArray(s.value);break;case"m4":this.uniforms[n].value=new be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Gc=class extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ye=class extends Ei{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=al,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Wa=class extends Ei{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=al,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=sh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vc=class extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wc=class extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ho(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function wd(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var qs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qc=class extends qs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rd,endingEnd:Rd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cd:r=t,a=2*e-n;break;case Id:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cd:o=t,l=2*n-e;break;case Id:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,M=(-1-f)*g+(1.5+f)*x+.5*m,v=f*g-f*x;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+y*o[c+S]+M*o[l+S]+v*o[u+S];return r}},Xc=class extends qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Yc=class extends qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zc=class extends qs{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(s-e),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let d=a*2,f=t-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=f*d+m*2,y=u[p],M=u[p+1],v=t*d+m*2,S=h[v],b=h[v+1],T=Vv(n,e,y,S,s);r[m]=b0(T,x,M,b,g)}return r}};function b0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Gv(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Vv(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=b0(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Gv(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var mi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ho(e,this.TimeBufferType),this.values=ho(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ho(t.times,Array),values:ho(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),wd(t.settings)&&(n.settings={inTangents:ho(t.settings.inTangents,Array),outTangents:ho(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Zc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ba:e=this.InterpolantFactoryMethodDiscrete;break;case Ac:e=this.InterpolantFactoryMethodLinear;break;case xc:e=this.InterpolantFactoryMethodSmooth;break;case Ad:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return Ac;case this.InterpolantFactoryMethodSmooth:return xc;case this.InterpolantFactoryMethodBezier:return Ad}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;wd(this.settings)&&(Am(this.settings.inTangents,t),Am(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&qy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,wd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Am(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Ac;var Xs=class extends mi{constructor(t,e,n){super(t,e,n)}};Xs.prototype.ValueTypeName="bool";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=ba;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}};Jc.prototype.ValueTypeName="color";var $c=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}};$c.prototype.ValueTypeName="number";var Kc=class extends qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},qa=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Kc(this.times,this.values,this.getValueSize(),t)}};qa.prototype.ValueTypeName="quaternion";qa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ys=class extends mi{constructor(t,e,n){super(t,e,n)}};Ys.prototype.ValueTypeName="string";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=ba;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}};jc.prototype.ValueTypeName="vector";var Qc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},S0=new Qc,th=class{constructor(t){this.manager=t!==void 0?t:S0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};th.DEFAULT_MATERIAL_NAME="__DEFAULT";var Co=class extends wn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Xa=class extends Co{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Td=new be,Rm=new N,Cm=new N,Ya=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Rm.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rm),Cm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Td.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Td,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===xo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Td)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},mc=new N,gc=new fn,Ji=new N,Za=class extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(mc,gc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,Ji.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(mc,gc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gs=new N,Im=new ut,Pm=new ut,gn=class extends Za{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Rc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rc*2*Math.atan(Math.tan(Qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gs.x,Gs.y).multiplyScalar(-t/Gs.z),Gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gs.x,Gs.y).multiplyScalar(-t/Gs.z)}getViewSize(t,e){return this.getViewBounds(t,Im,Pm),e.subVectors(Pm,Im)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qu*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Fd=class extends Ya{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},Ja=class extends Co{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Zs=class extends Za{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bd=class extends Ya{constructor(){super(new Zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$a=class extends Co{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new Bd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ka=class extends ue{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var uo=-90,fo=1,eh=class extends wn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(uo,fo,t,e);s.layers=this.layers,this.add(s);let r=new gn(uo,fo,t,e);r.layers=this.layers,this.add(r);let o=new gn(uo,fo,t,e);o.layers=this.layers,this.add(o);let a=new gn(uo,fo,t,e);a.layers=this.layers,this.add(a);let l=new gn(uo,fo,t,e);l.layers=this.layers,this.add(l);let c=new gn(uo,fo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},nh=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var hf="\\[\\]\\.:\\/",Wv=new RegExp("["+hf+"]","g"),uf="[^"+hf+"]",qv="[^"+hf.replace("\\.","")+"]",Xv=/((?:WC+[\/:])*)/.source.replace("WC",uf),Yv=/(WCOD+)?/.source.replace("WCOD",qv),Zv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uf),Jv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uf),$v=new RegExp("^"+Xv+Yv+Zv+Jv+"$"),Kv=["material","materials","bones","map"],Od=class{constructor(t,e,n){let s=n||nn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},nn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wv,"")}static parseTrackName(t){let e=$v.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Kv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nn.Composite=Od;nn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nn.prototype.GetterByBindingType=[nn.prototype._getValue_direct,nn.prototype._getValue_array,nn.prototype._getValue_arrayElement,nn.prototype._getValue_toArray];nn.prototype.SetterByBindingTypeAndVersioning=[[nn.prototype._setValue_direct,nn.prototype._setValue_direct_setNeedsUpdate,nn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_array,nn.prototype._setValue_array_setNeedsUpdate,nn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_arrayElement,nn.prototype._setValue_arrayElement_setNeedsUpdate,nn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_fromArray,nn.prototype._setValue_fromArray_setNeedsUpdate,nn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pw=new Float32Array(1);var xf=class xf{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};xf.prototype.isMatrix2=!0;var zd=xf;function df(i,t,e,n){let s=jv(n);switch(e){case sf:return i*t;case Do:return i*t/s.components*s.byteLength;case uh:return i*t/s.components*s.byteLength;case Qs:return i*t*2/s.components*s.byteLength;case dh:return i*t*2/s.components*s.byteLength;case rf:return i*t*3/s.components*s.byteLength;case Ai:return i*t*4/s.components*s.byteLength;case fh:return i*t*4/s.components*s.byteLength;case el:case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case il:case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mh:case xh:return Math.max(i,16)*Math.max(t,8)/4;case ph:case gh:return Math.max(i,8)*Math.max(t,8)/2;case yh:case vh:case Mh:case bh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _h:case rl:case Sh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Th:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ch:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Lh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Uh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Oh:case zh:case Hh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kh:case Gh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ol:case Vh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jv(i){switch(i){case si:case Qd:return{byteLength:1,components:1};case Po:case tf:case gi:return{byteLength:2,components:1};case ch:case hh:return{byteLength:2,components:4};case Gi:case lh:case Ti:return{byteLength:4,components:1};case ef:case nf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function q0(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function i_(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var s_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r_=`#ifdef USE_ALPHAHASH
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
#endif`,o_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h_=`#ifdef USE_AOMAP
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
#endif`,u_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d_=`#ifdef USE_BATCHING
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
#endif`,f_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,x_=`#ifdef USE_IRIDESCENCE
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
#endif`,y_=`#ifdef USE_BUMPMAP
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
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,E_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,w_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,T_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,A_=`#define PI 3.141592653589793
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
} // validated`,R_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C_=`vec3 transformedNormal = objectNormal;
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
#endif`,I_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N_="gl_FragColor = linearToOutputTexel( gl_FragColor );",U_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F_=`#ifdef USE_ENVMAP
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
#endif`,B_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,O_=`#ifdef USE_ENVMAP
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
#endif`,z_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H_=`#ifdef USE_ENVMAP
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
#endif`,k_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q_=`#ifdef USE_GRADIENTMAP
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
}`,X_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$_=`#ifdef USE_ENVMAP
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
#endif`,K_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e1=`PhysicalMaterial material;
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
#endif`,n1=`uniform sampler2D dfgLUT;
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
}`,i1=`
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
#endif`,s1=`#if defined( RE_IndirectDiffuse )
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
#endif`,r1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,a1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p1=`#if defined( USE_POINTS_UV )
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
#endif`,m1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`#ifdef USE_MORPHTARGETS
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
#endif`,M1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A1=`#ifdef USE_NORMALMAP
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
#endif`,R1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V1=`float getShadowMask() {
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
}`,W1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q1=`#ifdef USE_SKINNING
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
#endif`,X1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y1=`#ifdef USE_SKINNING
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
#endif`,Z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j1=`#ifdef USE_TRANSMISSION
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
#endif`,Q1=`#ifdef USE_TRANSMISSION
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rM=`uniform sampler2D t2D;
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`#include <common>
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
}`,uM=`#if DEPTH_PACKING == 3200
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
}`,dM=`#define DISTANCE
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
}`,fM=`#define DISTANCE
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`uniform float scale;
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
}`,xM=`uniform vec3 diffuse;
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
}`,yM=`#include <common>
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
}`,vM=`uniform vec3 diffuse;
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
}`,_M=`#define LAMBERT
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
}`,MM=`#define LAMBERT
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
}`,bM=`#define MATCAP
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
}`,SM=`#define MATCAP
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
}`,EM=`#define NORMAL
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
}`,wM=`#define NORMAL
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
}`,TM=`#define PHONG
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
}`,AM=`#define PHONG
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
}`,RM=`#define STANDARD
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
}`,CM=`#define STANDARD
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
}`,IM=`#define TOON
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
}`,PM=`#define TOON
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
}`,LM=`uniform float size;
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
}`,DM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,UM=`uniform vec3 color;
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
}`,FM=`uniform float rotation;
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
}`,BM=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:s_,alphahash_pars_fragment:r_,alphamap_fragment:o_,alphamap_pars_fragment:a_,alphatest_fragment:l_,alphatest_pars_fragment:c_,aomap_fragment:h_,aomap_pars_fragment:u_,batching_pars_vertex:d_,batching_vertex:f_,begin_vertex:p_,beginnormal_vertex:m_,bsdfs:g_,iridescence_fragment:x_,bumpmap_pars_fragment:y_,clipping_planes_fragment:v_,clipping_planes_pars_fragment:__,clipping_planes_pars_vertex:M_,clipping_planes_vertex:b_,color_fragment:S_,color_pars_fragment:E_,color_pars_vertex:w_,color_vertex:T_,common:A_,cube_uv_reflection_fragment:R_,defaultnormal_vertex:C_,displacementmap_pars_vertex:I_,displacementmap_vertex:P_,emissivemap_fragment:L_,emissivemap_pars_fragment:D_,colorspace_fragment:N_,colorspace_pars_fragment:U_,envmap_fragment:F_,envmap_common_pars_fragment:B_,envmap_pars_fragment:O_,envmap_pars_vertex:z_,envmap_physical_pars_fragment:$_,envmap_vertex:H_,fog_vertex:k_,fog_pars_vertex:G_,fog_fragment:V_,fog_pars_fragment:W_,gradientmap_pars_fragment:q_,lightmap_pars_fragment:X_,lights_lambert_fragment:Y_,lights_lambert_pars_fragment:Z_,lights_pars_begin:J_,lights_toon_fragment:K_,lights_toon_pars_fragment:j_,lights_phong_fragment:Q_,lights_phong_pars_fragment:t1,lights_physical_fragment:e1,lights_physical_pars_fragment:n1,lights_fragment_begin:i1,lights_fragment_maps:s1,lights_fragment_end:r1,lightprobes_pars_fragment:o1,logdepthbuf_fragment:a1,logdepthbuf_pars_fragment:l1,logdepthbuf_pars_vertex:c1,logdepthbuf_vertex:h1,map_fragment:u1,map_pars_fragment:d1,map_particle_fragment:f1,map_particle_pars_fragment:p1,metalnessmap_fragment:m1,metalnessmap_pars_fragment:g1,morphinstance_vertex:x1,morphcolor_vertex:y1,morphnormal_vertex:v1,morphtarget_pars_vertex:_1,morphtarget_vertex:M1,normal_fragment_begin:b1,normal_fragment_maps:S1,normal_pars_fragment:E1,normal_pars_vertex:w1,normal_vertex:T1,normalmap_pars_fragment:A1,clearcoat_normal_fragment_begin:R1,clearcoat_normal_fragment_maps:C1,clearcoat_pars_fragment:I1,iridescence_pars_fragment:P1,opaque_fragment:L1,packing:D1,premultiplied_alpha_fragment:N1,project_vertex:U1,dithering_fragment:F1,dithering_pars_fragment:B1,roughnessmap_fragment:O1,roughnessmap_pars_fragment:z1,shadowmap_pars_fragment:H1,shadowmap_pars_vertex:k1,shadowmap_vertex:G1,shadowmask_pars_fragment:V1,skinbase_vertex:W1,skinning_pars_vertex:q1,skinning_vertex:X1,skinnormal_vertex:Y1,specularmap_fragment:Z1,specularmap_pars_fragment:J1,tonemapping_fragment:$1,tonemapping_pars_fragment:K1,transmission_fragment:j1,transmission_pars_fragment:Q1,uv_pars_fragment:tM,uv_pars_vertex:eM,uv_vertex:nM,worldpos_vertex:iM,background_vert:sM,background_frag:rM,backgroundCube_vert:oM,backgroundCube_frag:aM,cube_vert:lM,cube_frag:cM,depth_vert:hM,depth_frag:uM,distance_vert:dM,distance_frag:fM,equirect_vert:pM,equirect_frag:mM,linedashed_vert:gM,linedashed_frag:xM,meshbasic_vert:yM,meshbasic_frag:vM,meshlambert_vert:_M,meshlambert_frag:MM,meshmatcap_vert:bM,meshmatcap_frag:SM,meshnormal_vert:EM,meshnormal_frag:wM,meshphong_vert:TM,meshphong_frag:AM,meshphysical_vert:RM,meshphysical_frag:CM,meshtoon_vert:IM,meshtoon_frag:PM,points_vert:LM,points_frag:DM,shadow_vert:NM,shadow_frag:UM,sprite_vert:FM,sprite_frag:BM},Ct={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},os={basic:{uniforms:Vn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Vn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Vn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Vn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Vn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Vn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Vn([Ct.points,Ct.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Vn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Vn([Ct.common,Ct.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Vn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Vn([Ct.sprite,Ct.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Vn([Ct.common,Ct.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Vn([Ct.lights,Ct.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};os.physical={uniforms:Vn([os.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};var Xh={r:0,b:0,g:0},OM=new be,X0=new ce;X0.set(-1,0,0,0,1,0,0,0,1);function zM(i,t,e,n,s,r){let o=new pt(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=t.get(M,v)}return M}function m(y){let M=!1,v=f(y);v===null?g(o,a):v&&v.isColor&&(g(v,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,M){let v=f(M);v&&(v.isCubeTexture||v.mapping===Qa)?(c===void 0&&(c=new $(new Ln(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:br(os.backgroundCube.uniforms),vertexShader:os.backgroundCube.vertexShader,fragmentShader:os.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(OM.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(X0),c.material.toneMapped=Ce.getTransfer(v.colorSpace)!==ke,(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new $(new an(2,2),new sn({name:"BackgroundMaterial",uniforms:br(os.background.uniforms),vertexShader:os.background.vertexShader,fragmentShader:os.background.fragmentShader,side:Js,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ce.getTransfer(v.colorSpace)!==ke,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,M){y.getRGB(Xh,cf(i)),e.buffers.color.setClear(Xh.r,Xh.g,Xh.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:x,dispose:p}}function HM(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(I,L,D,C,U){let z=!1,k=u(I,C,D,L);r!==k&&(r=k,c(r.object)),z=f(I,C,D,U),z&&m(I,C,D,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(I,L,D,C),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,L,D,C){let U=C.wireframe===!0,z=n[L.id];z===void 0&&(z={},n[L.id]=z);let k=I.isInstancedMesh===!0?I.id:0,j=z[k];j===void 0&&(j={},z[k]=j);let B=j[D.id];B===void 0&&(B={},j[D.id]=B);let V=B[U];return V===void 0&&(V=d(l()),B[U]=V),V}function d(I){let L=[],D=[],C=[];for(let U=0;U<e;U++)L[U]=0,D[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:C,object:I,attributes:{},index:null}}function f(I,L,D,C){let U=r.attributes,z=L.attributes,k=0,j=D.getAttributes();for(let B in j)if(j[B].location>=0){let J=U[B],mt=z[B];if(mt===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(mt=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(mt=I.instanceColor)),J===void 0||J.attribute!==mt||mt&&J.data!==mt.data)return!0;k++}return r.attributesNum!==k||r.index!==C}function m(I,L,D,C){let U={},z=L.attributes,k=0,j=D.getAttributes();for(let B in j)if(j[B].location>=0){let J=z[B];J===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));let mt={};mt.attribute=J,J&&J.data&&(mt.data=J.data),U[B]=mt,k++}r.attributes=U,r.attributesNum=k,r.index=C}function x(){let I=r.newAttributes;for(let L=0,D=I.length;L<D;L++)I[L]=0}function g(I){p(I,0)}function p(I,L){let D=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;D[I]=1,C[I]===0&&(i.enableVertexAttribArray(I),C[I]=1),U[I]!==L&&(i.vertexAttribDivisor(I,L),U[I]=L)}function y(){let I=r.newAttributes,L=r.enabledAttributes;for(let D=0,C=L.length;D<C;D++)L[D]!==I[D]&&(i.disableVertexAttribArray(D),L[D]=0)}function M(I,L,D,C,U,z,k){k===!0?i.vertexAttribIPointer(I,L,D,U,z):i.vertexAttribPointer(I,L,D,C,U,z)}function v(I,L,D,C){x();let U=C.attributes,z=D.getAttributes(),k=L.defaultAttributeValues;for(let j in z){let B=z[j];if(B.location>=0){let V=U[j];if(V===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(V=I.instanceColor)),V!==void 0){let J=V.normalized,mt=V.itemSize,At=t.get(V);if(At===void 0)continue;let le=At.buffer,se=At.type,Yt=At.bytesPerElement,nt=se===i.INT||se===i.UNSIGNED_INT||V.gpuType===lh;if(V.isInterleavedBufferAttribute){let ot=V.data,bt=ot.stride,Ot=V.offset;if(ot.isInstancedInterleavedBuffer){for(let Rt=0;Rt<B.locationSize;Rt++)p(B.location+Rt,ot.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Rt=0;Rt<B.locationSize;Rt++)g(B.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Rt=0;Rt<B.locationSize;Rt++)M(B.location+Rt,mt/B.locationSize,se,J,bt*Yt,(Ot+mt/B.locationSize*Rt)*Yt,nt)}else{if(V.isInstancedBufferAttribute){for(let ot=0;ot<B.locationSize;ot++)p(B.location+ot,V.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ot=0;ot<B.locationSize;ot++)g(B.location+ot);i.bindBuffer(i.ARRAY_BUFFER,le);for(let ot=0;ot<B.locationSize;ot++)M(B.location+ot,mt/B.locationSize,se,J,mt*Yt,mt/B.locationSize*ot*Yt,nt)}}else if(k!==void 0){let J=k[j];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(B.location,J);break;case 3:i.vertexAttrib3fv(B.location,J);break;case 4:i.vertexAttrib4fv(B.location,J);break;default:i.vertexAttrib1fv(B.location,J)}}}}y()}function S(){w();for(let I in n){let L=n[I];for(let D in L){let C=L[D];for(let U in C){let z=C[U];for(let k in z)h(z[k].object),delete z[k];delete C[U]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let D in L){let C=L[D];for(let U in C){let z=C[U];for(let k in z)h(z[k].object),delete z[k];delete C[U]}}delete n[I.id]}function T(I){for(let L in n){let D=n[L];for(let C in D){let U=D[C];if(U[I.id]===void 0)continue;let z=U[I.id];for(let k in z)h(z[k].object),delete z[k];delete U[I.id]}}}function _(I){for(let L in n){let D=n[L],C=I.isInstancedMesh===!0?I.id:0,U=D[C];if(U!==void 0){for(let z in U){let k=U[z];for(let j in k)h(k[j].object),delete k[j];delete U[z]}delete D[C],Object.keys(D).length===0&&delete n[L]}}}function w(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function kM(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function GM(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Ai&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let _=T===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==si&&T!==Ti&&!_&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:S,samples:b}}function VM(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ui,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,M=y*4,v=p.clippingState||null;l.value=v,v=h(m,d,M,f);for(let S=0;S!==M;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=f;M!==x;++M,v+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Uo=4,WM=6,qM=20,XM=256,ll=new Zs,E0=new pt,yf=null,vf=0,_f=0,Mf=!1,YM=new N,Sr=new N,Zh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=YM}=r;yf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=A0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yf,vf,_f),this._renderer.xr.enabled=Mf,t.scissorTest=!1,No(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$s||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:gi,format:Ai,colorSpace:Sa,depthBuffer:!1},s=w0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=w0(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ZM(r)),this._blurMaterial=$M(r,t,e),this._ggxMaterial=JM(r,t,e)}return s}_compileMaterial(t){let e=new $(new ue,t);this._renderer.compile(e,ll)}_sceneToCubeUV(t,e,n,s,r){let l=new gn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(E0),u.toneMapping=ki,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $(new Ln,new Ie({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,p=!0):(g.color.copy(E0),p=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let S=this._cubeSize;No(s,v*S,M>2?S:0,S,S),u.setRenderTarget(s),p&&u.render(x,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===$s||t.mapping===Mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=A0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;No(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ll)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Uo?n-m+Uo:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,No(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,ll),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,No(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(a,ll)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Uo?s-this._lodMax+Uo:0),d=4*(this._cubeSize-h);No(e,u,d,3*h,2*h),o.setRenderTarget(e),o.render(l,ll)}};function ZM(i){let t=[],e=[],n=i,s=i-Uo+1+WM;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,m=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let p=0;p<u;p++){let y=p%3*2/3-1,M=p>2?0:-1,v=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];m.set(v,f*d*p);for(let S=0;S<d;S++){let b=h[S*2]*2-1,T=h[S*2+1]*2-1;p===0?Sr.set(1,T,b):p===1?Sr.set(-b,1,-T):p===2?Sr.set(-b,T,1):p===3?Sr.set(-1,T,-b):p===4?Sr.set(-b,-1,T):Sr.set(b,T,-1),Sr.toArray(x,(p*d+S)*f)}}let g=new ue;g.setAttribute("position",new Kt(m,f)),g.setAttribute("outputDirection",new Kt(x,f)),e.push(new $(g,null)),n>Uo&&n--}return{lodMeshes:e,sizeLods:t}}function w0(i,t,e){let n=new Un(i,t,e);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function No(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function JM(i,t,e){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function $M(i,t,e){return new sn({name:"SphericalGaussianBlur",defines:{SAMPLES:qM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function T0(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function A0(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Kh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Jh=class extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Na(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ln(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:ss});r.uniforms.tEquirect.value=e;let o=new $(s,r),a=e.minFilter;return e.minFilter===Ks&&(e.minFilter=Nn),new eh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function KM(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===rh||f===oh)if(t.has(d)){let m=t.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new Jh(m.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,m=f===rh||f===oh,x=f===$s||f===Mr;if(m||x){let g=e.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Zh(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let y=d.image;return m&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Zh(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function a(d,f){return f===rh?d.mapping=$s:f===oh&&(d.mapping=Mr),d}function l(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function jM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&pr("WebGLRenderer: "+n+" extension not supported."),s}}}function QM(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(m===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let M=0,v=y.length;M<v;M+=3){let S=y[M+0],b=y[M+1],T=y[M+2];d.push(S,b,b,T,T,S)}}else{let y=m.array;x=m.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let S=M+0,b=M+1,T=M+2;d.push(S,b,b,T,T,S)}}let g=new(m.count>=65535?Pa:Ia)(d,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function tb(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function eb(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function nb(i,t,e){let n=new WeakMap,s=new on;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*S*4*u),T=new Aa(b,v,S,u);T.type=Ti,T.needsUpdate=!0;let _=M*4;for(let R=0;R<u;R++){let I=g[R],L=p[R],D=y[R],C=v*S*4*R;for(let U=0;U<I.count;U++){let z=U*_;f===!0&&(s.fromBufferAttribute(I,U),b[C+z+0]=s.x,b[C+z+1]=s.y,b[C+z+2]=s.z,b[C+z+3]=0),m===!0&&(s.fromBufferAttribute(L,U),b[C+z+4]=s.x,b[C+z+5]=s.y,b[C+z+6]=s.z,b[C+z+7]=0),x===!0&&(s.fromBufferAttribute(D,U),b[C+z+8]=s.x,b[C+z+9]=s.y,b[C+z+10]=s.z,b[C+z+11]=D.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new ut(v,S)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ib(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var sb={[qd]:"LINEAR_TONE_MAPPING",[Xd]:"REINHARD_TONE_MAPPING",[Yd]:"CINEON_TONE_MAPPING",[Zd]:"ACES_FILMIC_TONE_MAPPING",[$d]:"AGX_TONE_MAPPING",[Kd]:"NEUTRAL_TONE_MAPPING",[Jd]:"CUSTOM_TONE_MAPPING"};function rb(i,t,e,n,s,r){let o=new Un(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ue;c.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new fe([0,2,0,0,2,0],2));let h=new Gc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new $(c,h),d=new Zs(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,y=[],M=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let b=0;b<y.length;b++){let T=y[b];T.setSize&&T.setSize(v,S)}},this.setEffects=function(v){y=v,M=y.length>0&&y[0].isRenderPass===!0;let S=o.width,b=o.height;y.length>0&&a===null&&(a=new Un(S,b,{type:gi,depthBuffer:!1,stencilBuffer:!1}),l=new Un(S,b,{type:gi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<y.length;T++){let _=y[T];_.setSize&&_.setSize(S,b)}},this.begin=function(v,S){if(x||v.toneMapping===ki&&y.length===0)return!1;if(p=S,S!==null){let b=S.width,T=S.height;(o.width!==b||o.height!==T)&&this.setSize(b,T)}return M===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=ki,!0},this.hasRenderPass=function(){return M},this.end=function(v,S){v.toneMapping=g,x=!0;let b=o,T=a;for(let _=0;_<y.length;_++){let w=y[_];w.enabled!==!1&&(w.render(v,T,b,S),w.needsSwap!==!1&&(b=T,T=T===a?l:a))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,h.defines={},Ce.getTransfer(f)===ke&&(h.defines.SRGB_TRANSFER="");let _=sb[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(p),v.render(u,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Y0=new Zn,Ef=new Vs(1,1),Z0=new Aa,J0=new Pc,$0=new Na,R0=[],C0=[],I0=new Float32Array(16),P0=new Float32Array(9),L0=new Float32Array(4);function Bo(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=R0[s];if(r===void 0&&(r=new Float32Array(s),R0[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function An(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Rn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jh(i,t){let e=C0[t];e===void 0&&(e=new Int32Array(t),C0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ob(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ab(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(An(e,t))return;i.uniform2fv(this.addr,t),Rn(e,t)}}function lb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(An(e,t))return;i.uniform3fv(this.addr,t),Rn(e,t)}}function cb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(An(e,t))return;i.uniform4fv(this.addr,t),Rn(e,t)}}function hb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(An(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Rn(e,t)}else{if(An(e,n))return;L0.set(n),i.uniformMatrix2fv(this.addr,!1,L0),Rn(e,n)}}function ub(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(An(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Rn(e,t)}else{if(An(e,n))return;P0.set(n),i.uniformMatrix3fv(this.addr,!1,P0),Rn(e,n)}}function db(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(An(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Rn(e,t)}else{if(An(e,n))return;I0.set(n),i.uniformMatrix4fv(this.addr,!1,I0),Rn(e,n)}}function fb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(An(e,t))return;i.uniform2iv(this.addr,t),Rn(e,t)}}function mb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(An(e,t))return;i.uniform3iv(this.addr,t),Rn(e,t)}}function gb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(An(e,t))return;i.uniform4iv(this.addr,t),Rn(e,t)}}function xb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(An(e,t))return;i.uniform2uiv(this.addr,t),Rn(e,t)}}function vb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(An(e,t))return;i.uniform3uiv(this.addr,t),Rn(e,t)}}function _b(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(An(e,t))return;i.uniform4uiv(this.addr,t),Rn(e,t)}}function Mb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ef.compareFunction=e.isReversedDepthBuffer()?qh:Wh,r=Ef):r=Y0,e.setTexture2D(t||r,s)}function bb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||J0,s)}function Sb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$0,s)}function Eb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Z0,s)}function wb(i){switch(i){case 5126:return ob;case 35664:return ab;case 35665:return lb;case 35666:return cb;case 35674:return hb;case 35675:return ub;case 35676:return db;case 5124:case 35670:return fb;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return xb;case 36294:return yb;case 36295:return vb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return Mb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Eb}}function Tb(i,t){i.uniform1fv(this.addr,t)}function Ab(i,t){let e=Bo(t,this.size,2);i.uniform2fv(this.addr,e)}function Rb(i,t){let e=Bo(t,this.size,3);i.uniform3fv(this.addr,e)}function Cb(i,t){let e=Bo(t,this.size,4);i.uniform4fv(this.addr,e)}function Ib(i,t){let e=Bo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Pb(i,t){let e=Bo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lb(i,t){let e=Bo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Db(i,t){i.uniform1iv(this.addr,t)}function Nb(i,t){i.uniform2iv(this.addr,t)}function Ub(i,t){i.uniform3iv(this.addr,t)}function Fb(i,t){i.uniform4iv(this.addr,t)}function Bb(i,t){i.uniform1uiv(this.addr,t)}function Ob(i,t){i.uniform2uiv(this.addr,t)}function zb(i,t){i.uniform3uiv(this.addr,t)}function Hb(i,t){i.uniform4uiv(this.addr,t)}function kb(i,t,e){let n=this.cache,s=t.length,r=jh(e,s);An(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ef:o=Y0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Gb(i,t,e){let n=this.cache,s=t.length,r=jh(e,s);An(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||J0,r[o])}function Vb(i,t,e){let n=this.cache,s=t.length,r=jh(e,s);An(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$0,r[o])}function Wb(i,t,e){let n=this.cache,s=t.length,r=jh(e,s);An(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Z0,r[o])}function qb(i){switch(i){case 5126:return Tb;case 35664:return Ab;case 35665:return Rb;case 35666:return Cb;case 35674:return Ib;case 35675:return Pb;case 35676:return Lb;case 5124:case 35670:return Db;case 35667:case 35671:return Nb;case 35668:case 35672:return Ub;case 35669:case 35673:return Fb;case 5125:return Bb;case 36294:return Ob;case 36295:return zb;case 36296:return Hb;case 35678:case 36198:case 36298:case 36306:case 35682:return kb;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Wb}}var wf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wb(e.type)}},Tf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qb(e.type)}},Af=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},bf=/(\w+)(\])?(\[|\.)?/g;function D0(i,t){i.seq.push(t),i.map[t.id]=t}function Xb(i,t,e){let n=i.name,s=n.length;for(bf.lastIndex=0;;){let r=bf.exec(n),o=bf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){D0(e,c===void 0?new wf(a,i,t):new Tf(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Af(a),D0(e,u)),e=u}}}var Fo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Xb(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function N0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Yb=37297,Zb=0;function Jb(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var U0=new ce;function $b(i){Ce._getMatrix(U0,Ce.workingColorSpace,i);let t=`mat3( ${U0.elements.map(e=>e.toFixed(4))} )`;switch(Ce.getTransfer(i)){case Ea:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function F0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Jb(i.getShaderSource(t),a)}else return r}function Kb(i,t){let e=$b(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var jb={[qd]:"Linear",[Xd]:"Reinhard",[Yd]:"Cineon",[Zd]:"ACESFilmic",[$d]:"AgX",[Kd]:"Neutral",[Jd]:"Custom"};function Qb(i,t){let e=jb[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Yh=new N;function tS(){Ce.getLuminanceCoefficients(Yh);let i=Yh.x.toFixed(4),t=Yh.y.toFixed(4),e=Yh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function nS(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function iS(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function hl(i){return i!==""}function B0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function O0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(i){return i.replace(sS,oS)}var rS=new Map;function oS(i,t){let e=ve[t];if(e===void 0){let n=rS.get(t);if(n!==void 0)e=ve[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Rf(e)}var aS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z0(i){return i.replace(aS,lS)}function lS(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function H0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var cS={[ja]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function hS(i){return cS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var uS={[$s]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE",[Qa]:"ENVMAP_TYPE_CUBE_UV"};function dS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":uS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var fS={[Mr]:"ENVMAP_MODE_REFRACTION"};function pS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mS={[sh]:"ENVMAP_BLENDING_MULTIPLY",[Qm]:"ENVMAP_BLENDING_MIX",[t0]:"ENVMAP_BLENDING_ADD"};function gS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mS[i.combine]||"ENVMAP_BLENDING_NONE"}function xS(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function yS(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=hS(e),c=dS(e),h=pS(e),u=gS(e),d=xS(e),f=eS(e),m=nS(r),x=s.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(hl).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(hl).join(`
`),p.length>0&&(p+=`
`)):(g=[H0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),p=[H0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?ve.tonemapping_pars_fragment:"",e.toneMapping!==ki?Qb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,Kb("linearToOutputTexel",e.outputColorSpace),tS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hl).join(`
`)),o=Rf(o),o=B0(o,e),o=O0(o,e),a=Rf(a),a=B0(a,e),a=O0(a,e),o=z0(o),a=z0(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===af?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===af?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=y+g+o,v=y+p+a,S=N0(s,s.VERTEX_SHADER,M),b=N0(s,s.FRAGMENT_SHADER,v);s.attachShader(x,S),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(I){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(S)||"",C=s.getShaderInfoLog(b)||"",U=L.trim(),z=D.trim(),k=C.trim(),j=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,b);else{let V=F0(s,S,"vertex"),J=F0(s,b,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+V+`
`+J)}else U!==""?jt("WebGLProgram: Program Info Log:",U):(z===""||k==="")&&(B=!1);B&&(I.diagnostics={runnable:j,programLog:U,vertexShader:{log:z,prefix:g},fragmentShader:{log:k,prefix:p}})}s.deleteShader(S),s.deleteShader(b),_=new Fo(s,x),w=iS(s,x)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,Yb)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zb++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}var vS=0,Cf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new If(t),e.set(t,n)),n}},If=class{constructor(t){this.id=vS++,this.code=t,this.usedTimes=0}};function _S(i){return i===Qs||i===rl||i===ol}function MS(i,t,e,n,s,r){let o=new Ra,a=new Cf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,w,R,I,L,D){let C=I.fog,U=L.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=t.get(_.envMap||z,k),B=j&&j.mapping===Qa?j.image.height:null,V=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&jt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let J=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,mt=J!==void 0?J.length:0,At=0;U.morphAttributes.position!==void 0&&(At=1),U.morphAttributes.normal!==void 0&&(At=2),U.morphAttributes.color!==void 0&&(At=3);let le,se,Yt,nt;if(V){let ze=os[V];le=ze.vertexShader,se=ze.fragmentShader}else{le=_.vertexShader,se=_.fragmentShader;let ze=a.getVertexShaderStage(_),Ne=a.getFragmentShaderStage(_);a.update(_,ze,Ne),Yt=ze.id,nt=Ne.id}let ot=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Ot=L.isInstancedMesh===!0,Rt=L.isBatchedMesh===!0,Jt=!!_.map,De=!!_.matcap,rt=!!j,ht=!!_.aoMap,ft=!!_.lightMap,dt=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,Nt=!!_.displacementMap,Gt=!!_.emissiveMap,$t=!!_.metalnessMap,ie=!!_.roughnessMap,O=_.anisotropy>0,Ae=_.clearcoat>0,ge=_.dispersion>0,P=_.retroreflectivity>0,E=_.iridescence>0,q=_.sheen>0,X=_.transmission>0,et=O&&!!_.anisotropyMap,gt=Ae&&!!_.clearcoatMap,vt=Ae&&!!_.clearcoatNormalMap,it=Ae&&!!_.clearcoatRoughnessMap,at=E&&!!_.iridescenceMap,St=E&&!!_.iridescenceThicknessMap,Dt=q&&!!_.sheenColorMap,_t=q&&!!_.sheenRoughnessMap,yt=!!_.specularMap,zt=!!_.specularColorMap,Zt=!!_.specularIntensityMap,he=X&&!!_.transmissionMap,G=X&&!!_.thicknessMap,Mt=!!_.gradientMap,st=!!_.alphaMap,Et=_.alphaTest>0,Pt=!!_.alphaHash,ct=!!_.extensions,Vt=ki;_.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let Bt={shaderID:V,shaderType:_.type,shaderName:_.name,vertexShader:le,fragmentShader:se,defines:_.defines,customVertexShaderID:Yt,customFragmentShaderID:nt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Rt,batchingColor:Rt&&L._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&L.instanceColor!==null,instancingMorph:Ot&&L.morphTexture!==null,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ce.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Jt,matcap:De,envMap:rt,envMapMode:rt&&j.mapping,envMapCubeUVHeight:B,aoMap:ht,lightMap:ft,bumpMap:dt,normalMap:xt,displacementMap:Nt,emissiveMap:Gt,normalMapObjectSpace:xt&&_.normalMapType===i0,normalMapTangentSpace:xt&&_.normalMapType===al,packedNormalMap:xt&&_.normalMapType===al&&_S(_.normalMap.format),metalnessMap:$t,roughnessMap:ie,anisotropy:O,anisotropyMap:et,clearcoat:Ae,clearcoatMap:gt,clearcoatNormalMap:vt,clearcoatRoughnessMap:it,dispersion:ge,retroreflection:P,iridescence:E,iridescenceMap:at,iridescenceThicknessMap:St,sheen:q,sheenColorMap:Dt,sheenRoughnessMap:_t,specularMap:yt,specularColorMap:zt,specularIntensityMap:Zt,transmission:X,transmissionMap:he,thicknessMap:G,gradientMap:Mt,opaque:_.transparent===!1&&_.blending===Hi&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:Et,alphaHash:Pt,combine:_.combine,mapUv:Jt&&m(_.map.channel),aoMapUv:ht&&m(_.aoMap.channel),lightMapUv:ft&&m(_.lightMap.channel),bumpMapUv:dt&&m(_.bumpMap.channel),normalMapUv:xt&&m(_.normalMap.channel),displacementMapUv:Nt&&m(_.displacementMap.channel),emissiveMapUv:Gt&&m(_.emissiveMap.channel),metalnessMapUv:$t&&m(_.metalnessMap.channel),roughnessMapUv:ie&&m(_.roughnessMap.channel),anisotropyMapUv:et&&m(_.anisotropyMap.channel),clearcoatMapUv:gt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:vt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:St&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:_t&&m(_.sheenRoughnessMap.channel),specularMapUv:yt&&m(_.specularMap.channel),specularColorMapUv:zt&&m(_.specularColorMap.channel),specularIntensityMapUv:Zt&&m(_.specularIntensityMap.channel),transmissionMapUv:he&&m(_.transmissionMap.channel),thicknessMapUv:G&&m(_.thicknessMap.channel),alphaMapUv:st&&m(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(xt||O),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(Jt||st),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:bt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:At,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Jt&&_.map.isVideoTexture===!0&&Ce.getTransfer(_.map.colorSpace)===ke,decodeVideoTextureEmissive:Gt&&_.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(_.emissiveMap.colorSpace)===ke,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===me,flipSided:_.side===Tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ct&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&_.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function g(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)w.push(R),w.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(w,_),y(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function y(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){let w=f[_.type],R;if(w){let I=os[w];R=M0.clone(I.uniforms)}else R=_.uniforms;return R}function v(_,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new yS(i,w,_,s),c.push(R),h.set(w,R)),R}function S(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:M,acquireProgram:v,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:T}}function bS(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function SS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function k0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function G0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,x,g,p){let y=i[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},i[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=m,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=g,y.group=p),t++,y}function l(d,f,m,x,g,p,y){y.reversedDepth===!0&&(g=-g);let M=a(d,f,m,x,g,p);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):e.push(M)}function c(d,f,m,x,g,p){let y=a(d,f,m,x,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function h(d,f){e.length>1&&e.sort(d||SS),n.length>1&&n.sort(f||k0),s.length>1&&s.sort(f||k0)}function u(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function ES(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new G0,i.set(n,[o])):s>=r.length?(o=new G0,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function wS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new pt};break;case"SpotLight":e={position:new N,direction:new N,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function TS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var AS=0;function RS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function CS(i){let t=new wS,e=TS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new be,o=new be;function a(c){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,y=0,M=0,v=0,S=0,b=0,T=0,_=0,w=0,R=0;c.sort(RS);for(let L=0,D=c.length;L<D;L++){let C=c[L],U=C.color,z=C.intensity,k=C.distance,j=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Qs?j=C.shadow.map.texture:j=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=U.r*z,u+=U.g*z,d+=U.b*z;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],z);R++}else if(C.isSunLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let V=C.shadow,J=e.get(C);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[m]=J,n.sunShadowMap[m]=j;let mt=V.getViewportCount();for(let At=0;At<mt;At++)n.sunShadowMatrix[x+At]=V.getMatrix(At),n.sunShadowCascade[x+At]=V._cascadeData[At];x+=mt,m++}n.sun[f]=B,f++}else if(C.isDirectionalLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let V=C.shadow,J=e.get(C);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=C.shadow.matrix,S++}n.directional[g]=B,g++}else if(C.isSpotLight){let B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(U).multiplyScalar(z),B.distance=k,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[y]=B;let V=C.shadow;if(C.map&&(n.spotLightMap[_]=C.map,_++,V.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[y]=V.matrix,C.castShadow){let J=e.get(C);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=j,T++}y++}else if(C.isRectAreaLight){let B=t.get(C);B.color.copy(U).multiplyScalar(z),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[M]=B,M++}else if(C.isPointLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let V=C.shadow,J=e.get(C);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,J.shadowCameraNear=V.camera.near,J.shadowCameraFar=V.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=C.shadow.matrix,b++}n.point[p]=B,p++}else if(C.isHemisphereLight){let B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(z),B.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[v]=B,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==M||I.hemiLength!==v||I.numSunShadows!==m||I.numDirectionalShadows!==S||I.numPointShadows!==b||I.numSpotShadows!==T||I.numSpotMaps!==_||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=M,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,I.sunLength=f,I.directionalLength=g,I.pointLength=p,I.spotLength=y,I.rectAreaLength=M,I.hemiLength=v,I.numSunShadows=m,I.numDirectionalShadows=S,I.numPointShadows=b,I.numSpotShadows=T,I.numSpotMaps=_,I.numLightProbes=R,n.version=AS++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let v=c[y];if(v.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(v.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function V0(i){let t=new CS(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function IS(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new V0(i),t.set(s,[a])):r>=o.length?(a=new V0(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var PS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LS=`uniform sampler2D shadow_pass;
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
}`,DS=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],NS=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],W0=new be,cl=new N,Sf=new N;function US(i,t,e){let n=new So,s=new ut,r=new ut,o=new on,a=new Vc,l=new Wc,c={},h=e.maxTextureSize,u={[Js]:Tn,[Tn]:Js,[me]:me},d=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:PS,fragmentShader:LS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ue;m.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new $(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let p=this.type;this.render=function(b,T,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Nm&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ja);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ss),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let D=p!==this.type;D&&T.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(U=>U.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,U=b.length;C<U;C++){let z=b[C],k=z.shadow;if(k===void 0){jt("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let j=k.getFrameExtents();s.multiply(j),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,k.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=B,k.map===null||D===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Io){if(z.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Un(s.x,s.y,{format:Qs,type:gi,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new Vs(s.x,s.y,Ti),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=Qi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Mn,k.map.depthTexture.magFilter=Mn}else z.isPointLight?(k.map=new Jh(s.x),k.map.depthTexture=new Uc(s.x,Gi)):(k.map=new Un(s.x,s.y),k.map.depthTexture=new Vs(s.x,s.y,Gi)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=Qi,this.type===ja?(k.map.depthTexture.compareFunction=B?qh:Wh,k.map.depthTexture.minFilter=Nn,k.map.depthTexture.magFilter=Nn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Mn,k.map.depthTexture.magFilter=Mn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let V=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();z.isPointLight!==!0&&k.updateMatrices(z,_);for(let J=0;J<V;J++){let mt=k.getCamera(J);if(z.isPointLight){let At=k.camera,le=k.matrix,se=z.distance||At.far;se!==At.far&&(At.far=se,At.updateProjectionMatrix()),cl.setFromMatrixPosition(z.matrixWorld),At.position.copy(cl),Sf.copy(At.position),Sf.add(DS[J]),At.up.copy(NS[J]),At.lookAt(Sf),At.updateMatrixWorld(),le.makeTranslation(-cl.x,-cl.y,-cl.z),W0.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),k._frustum.setFromProjectionMatrix(W0,At.coordinateSystem,At.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,J),i.clear();else{J===0&&(i.setRenderTarget(k.map),i.clear());let At=k.getViewport(J);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),L.viewport(o)}n=k.getFrustum(J),v(T,_,mt,z,this.type)}k.isPointLightShadow!==!0&&this.type===Io&&y(k,_),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,R,I)};function y(b,T){let _=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Un(s.x,s.y,{format:Qs,type:gi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,_,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,_,f,x,null)}function M(b,T,_,w){let R=null,I=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)R=I;else if(R=_.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=R.uuid,D=T.uuid,C=c[L];C===void 0&&(C={},c[L]=C);let U=C[D];U===void 0&&(U=R.clone(),C[D]=U,T.addEventListener("dispose",S)),R=U}if(R.visible=T.visible,R.wireframe=T.wireframe,w===Io?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:u[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=_}return R}function v(b,T,_,w,R){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===Io)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let D=t.update(b),C=b.material;if(Array.isArray(C)){let U=D.groups;for(let z=0,k=U.length;z<k;z++){let j=U[z],B=C[j.materialIndex];if(B&&B.visible){let V=M(b,B,w,R);b.onBeforeShadow(i,b,T,_,D,V,j),i.renderBufferDirect(_,null,D,V,b,j),b.onAfterShadow(i,b,T,_,D,V,j)}}}else if(C.visible){let U=M(b,C,w,R);b.onBeforeShadow(i,b,T,_,D,U,null),i.renderBufferDirect(_,null,D,U,b,null),b.onAfterShadow(i,b,T,_,D,U,null)}}let L=b.children;for(let D=0,C=L.length;D<C;D++)v(L[D],T,_,w,R)}function S(b){b.target.removeEventListener("dispose",S);for(let _ in c){let w=c[_],R=b.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function FS(i,t){function e(){let G=!1,Mt=new on,st=null,Et=new on(0,0,0,0);return{setMask:function(Pt){st!==Pt&&!G&&(i.colorMask(Pt,Pt,Pt,Pt),st=Pt)},setLocked:function(Pt){G=Pt},setClear:function(Pt,ct,Vt,Bt,ze){ze===!0&&(Pt*=Bt,ct*=Bt,Vt*=Bt),Mt.set(Pt,ct,Vt,Bt),Et.equals(Mt)===!1&&(i.clearColor(Pt,ct,Vt,Bt),Et.copy(Mt))},reset:function(){G=!1,st=null,Et.set(-1,0,0,0)}}}function n(){let G=!1,Mt=!1,st=null,Et=null,Pt=null;return{setReversed:function(ct){if(Mt!==ct){let Vt=t.get("EXT_clip_control");ct?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Mt=ct;let Bt=Pt;Pt=null,this.setClear(Bt)}},getReversed:function(){return Mt},setTest:function(ct){ct?ot(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(ct){st!==ct&&!G&&(i.depthMask(ct),st=ct)},setFunc:function(ct){if(Mt&&(ct=p0[ct]),Et!==ct){switch(ct){case vc:i.depthFunc(i.NEVER);break;case _c:i.depthFunc(i.ALWAYS);break;case Mc:i.depthFunc(i.LESS);break;case mo:i.depthFunc(i.LEQUAL);break;case bc:i.depthFunc(i.EQUAL);break;case Sc:i.depthFunc(i.GEQUAL);break;case Ec:i.depthFunc(i.GREATER);break;case wc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=ct}},setLocked:function(ct){G=ct},setClear:function(ct){Pt!==ct&&(Pt=ct,Mt&&(ct=1-ct),i.clearDepth(ct))},reset:function(){G=!1,st=null,Et=null,Pt=null,Mt=!1}}}function s(){let G=!1,Mt=null,st=null,Et=null,Pt=null,ct=null,Vt=null,Bt=null,ze=null;return{setTest:function(Ne){G||(Ne?ot(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Ne){Mt!==Ne&&!G&&(i.stencilMask(Ne),Mt=Ne)},setFunc:function(Ne,qn,ci){(st!==Ne||Et!==qn||Pt!==ci)&&(i.stencilFunc(Ne,qn,ci),st=Ne,Et=qn,Pt=ci)},setOp:function(Ne,qn,ci){(ct!==Ne||Vt!==qn||Bt!==ci)&&(i.stencilOp(Ne,qn,ci),ct=Ne,Vt=qn,Bt=ci)},setLocked:function(Ne){G=Ne},setClear:function(Ne){ze!==Ne&&(i.clearStencil(Ne),ze=Ne)},reset:function(){G=!1,Mt=null,st=null,Et=null,Pt=null,ct=null,Vt=null,Bt=null,ze=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,y=null,M=null,v=null,S=null,b=null,T=null,_=new pt(0,0,0),w=0,R=!1,I=null,L=null,D=null,C=null,U=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,j=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(B)[1]),k=j>=1):B.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),k=j>=2);let V=null,J={},mt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),le=new on().fromArray(mt),se=new on().fromArray(At);function Yt(G,Mt,st,Et){let Pt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(G,ct),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<st;Vt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(Mt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return ct}let nt={};nt[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(mo),dt(!1),xt(Hd),ot(i.CULL_FACE),ht(ss);function ot(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function bt(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function Ot(G,Mt){return d[G]!==Mt?(i.bindFramebuffer(G,Mt),d[G]=Mt,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Mt),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Rt(G,Mt){let st=m,Et=!1;if(G){st=f.get(Mt),st===void 0&&(st=[],f.set(Mt,st));let Pt=G.textures;if(st.length!==Pt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Vt=Pt.length;ct<Vt;ct++)st[ct]=i.COLOR_ATTACHMENT0+ct;st.length=Pt.length,Et=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,Et=!0);Et&&i.drawBuffers(st)}function Jt(G){return x!==G?(i.useProgram(G),x=G,!0):!1}let De={[_r]:i.FUNC_ADD,[Fm]:i.FUNC_SUBTRACT,[Bm]:i.FUNC_REVERSE_SUBTRACT};De[Om]=i.MIN,De[zm]=i.MAX;let rt={[Hm]:i.ZERO,[km]:i.ONE,[Gm]:i.SRC_COLOR,[Vd]:i.SRC_ALPHA,[Zm]:i.SRC_ALPHA_SATURATE,[Xm]:i.DST_COLOR,[Wm]:i.DST_ALPHA,[Vm]:i.ONE_MINUS_SRC_COLOR,[Wd]:i.ONE_MINUS_SRC_ALPHA,[Ym]:i.ONE_MINUS_DST_COLOR,[qm]:i.ONE_MINUS_DST_ALPHA,[Jm]:i.CONSTANT_COLOR,[$m]:i.ONE_MINUS_CONSTANT_COLOR,[Km]:i.CONSTANT_ALPHA,[jm]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(G,Mt,st,Et,Pt,ct,Vt,Bt,ze,Ne){if(G===ss){g===!0&&(bt(i.BLEND),g=!1);return}if(g===!1&&(ot(i.BLEND),g=!0),G!==Um){if(G!==p||Ne!==R){if((y!==_r||S!==_r)&&(i.blendEquation(i.FUNC_ADD),y=_r,S=_r),Ne)switch(G){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFunc(i.ONE,i.ONE);break;case kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",G);break}else switch(G){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case kd:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gd:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",G);break}M=null,v=null,b=null,T=null,_.set(0,0,0),w=0,p=G,R=Ne}return}Pt=Pt||Mt,ct=ct||st,Vt=Vt||Et,(Mt!==y||Pt!==S)&&(i.blendEquationSeparate(De[Mt],De[Pt]),y=Mt,S=Pt),(st!==M||Et!==v||ct!==b||Vt!==T)&&(i.blendFuncSeparate(rt[st],rt[Et],rt[ct],rt[Vt]),M=st,v=Et,b=ct,T=Vt),(Bt.equals(_)===!1||ze!==w)&&(i.blendColor(Bt.r,Bt.g,Bt.b,ze),_.copy(Bt),w=ze),p=G,R=!1}function ft(G,Mt){G.side===me?bt(i.CULL_FACE):ot(i.CULL_FACE);let st=G.side===Tn;Mt&&(st=!st),dt(st),G.blending===Hi&&G.transparent===!1?ht(ss):ht(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Et=G.stencilWrite;a.setTest(Et),Et&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Gt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(G){I!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),I=G)}function xt(G){G!==Lm?(ot(i.CULL_FACE),G!==L&&(G===Hd?i.cullFace(i.BACK):G===Dm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),L=G}function Nt(G){G!==D&&(k&&i.lineWidth(G),D=G)}function Gt(G,Mt,st){G?(ot(i.POLYGON_OFFSET_FILL),(C!==Mt||U!==st)&&(C=Mt,U=st,o.getReversed()&&(Mt=-Mt),i.polygonOffset(Mt,st))):bt(i.POLYGON_OFFSET_FILL)}function $t(G){G?ot(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function ie(G){G===void 0&&(G=i.TEXTURE0+z-1),V!==G&&(i.activeTexture(G),V=G)}function O(G,Mt,st){st===void 0&&(V===null?st=i.TEXTURE0+z-1:st=V);let Et=J[st];Et===void 0&&(Et={type:void 0,texture:void 0},J[st]=Et),(Et.type!==G||Et.texture!==Mt)&&(V!==st&&(i.activeTexture(st),V=st),i.bindTexture(G,Mt||nt[G]),Et.type=G,Et.texture=Mt)}function Ae(){let G=J[V];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(G){ee("WebGLState:",G)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(G){ee("WebGLState:",G)}}function E(){try{i.texSubImage2D(...arguments)}catch(G){ee("WebGLState:",G)}}function q(){try{i.texSubImage3D(...arguments)}catch(G){ee("WebGLState:",G)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(G){ee("WebGLState:",G)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(G){ee("WebGLState:",G)}}function gt(){try{i.texStorage2D(...arguments)}catch(G){ee("WebGLState:",G)}}function vt(){try{i.texStorage3D(...arguments)}catch(G){ee("WebGLState:",G)}}function it(){try{i.texImage2D(...arguments)}catch(G){ee("WebGLState:",G)}}function at(){try{i.texImage3D(...arguments)}catch(G){ee("WebGLState:",G)}}function St(G){return u[G]!==void 0?u[G]:i.getParameter(G)}function Dt(G,Mt){u[G]!==Mt&&(i.pixelStorei(G,Mt),u[G]=Mt)}function _t(G){le.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),le.copy(G))}function yt(G){se.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),se.copy(G))}function zt(G,Mt){let st=c.get(Mt);st===void 0&&(st=new WeakMap,c.set(Mt,st));let Et=st.get(G);Et===void 0&&(Et=i.getUniformBlockIndex(Mt,G.name),st.set(G,Et))}function Zt(G,Mt){let Et=c.get(Mt).get(G);l.get(Mt)!==Et&&(i.uniformBlockBinding(Mt,Et,G.__bindingPointIndex),l.set(Mt,Et))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},V=null,J={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,y=null,M=null,v=null,S=null,b=null,T=null,_=new pt(0,0,0),w=0,R=!1,I=null,L=null,D=null,C=null,U=null,le.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:bt,bindFramebuffer:Ot,drawBuffers:Rt,useProgram:Jt,setBlending:ht,setMaterial:ft,setFlipSided:dt,setCullFace:xt,setLineWidth:Nt,setPolygonOffset:Gt,setScissorTest:$t,activeTexture:ie,bindTexture:O,unbindTexture:Ae,compressedTexImage2D:ge,compressedTexImage3D:P,texImage2D:it,texImage3D:at,pixelStorei:Dt,getParameter:St,updateUBOMapping:zt,uniformBlockBinding:Zt,texStorage2D:gt,texStorage3D:vt,texSubImage2D:E,texSubImage3D:q,compressedTexSubImage2D:X,compressedTexSubImage3D:et,scissor:_t,viewport:yt,reset:he}}function BS(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,E){return m?new OffscreenCanvas(P,E):wa("canvas")}function g(P,E,q){let X=1,et=ge(P);if((et.width>q||et.height>q)&&(X=q/Math.max(et.width,et.height)),X<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let gt=Math.floor(X*et.width),vt=Math.floor(X*et.height);d===void 0&&(d=x(gt,vt));let it=E?x(gt,vt):d;return it.width=gt,it.height=vt,it.getContext("2d").drawImage(P,0,0,gt,vt),jt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+gt+"x"+vt+")."),it}else return"data"in P&&jt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function p(P){return P.generateMipmaps}function y(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,E,q,X,et,gt=!1){if(P!==null){if(i[P]!==void 0)return i[P];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let vt;X&&(vt=t.get("EXT_texture_norm16"),vt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=E;if(E===i.RED&&(q===i.FLOAT&&(it=i.R32F),q===i.HALF_FLOAT&&(it=i.R16F),q===i.UNSIGNED_BYTE&&(it=i.R8),q===i.UNSIGNED_SHORT&&vt&&(it=vt.R16_EXT),q===i.SHORT&&vt&&(it=vt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.R8UI),q===i.UNSIGNED_SHORT&&(it=i.R16UI),q===i.UNSIGNED_INT&&(it=i.R32UI),q===i.BYTE&&(it=i.R8I),q===i.SHORT&&(it=i.R16I),q===i.INT&&(it=i.R32I)),E===i.RG&&(q===i.FLOAT&&(it=i.RG32F),q===i.HALF_FLOAT&&(it=i.RG16F),q===i.UNSIGNED_BYTE&&(it=i.RG8),q===i.UNSIGNED_SHORT&&vt&&(it=vt.RG16_EXT),q===i.SHORT&&vt&&(it=vt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RG8UI),q===i.UNSIGNED_SHORT&&(it=i.RG16UI),q===i.UNSIGNED_INT&&(it=i.RG32UI),q===i.BYTE&&(it=i.RG8I),q===i.SHORT&&(it=i.RG16I),q===i.INT&&(it=i.RG32I)),E===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RGB8UI),q===i.UNSIGNED_SHORT&&(it=i.RGB16UI),q===i.UNSIGNED_INT&&(it=i.RGB32UI),q===i.BYTE&&(it=i.RGB8I),q===i.SHORT&&(it=i.RGB16I),q===i.INT&&(it=i.RGB32I)),E===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),q===i.UNSIGNED_INT&&(it=i.RGBA32UI),q===i.BYTE&&(it=i.RGBA8I),q===i.SHORT&&(it=i.RGBA16I),q===i.INT&&(it=i.RGBA32I)),E===i.RGB&&(q===i.UNSIGNED_SHORT&&vt&&(it=vt.RGB16_EXT),q===i.SHORT&&vt&&(it=vt.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),E===i.RGBA){let at=gt?Ea:Ce.getTransfer(et);q===i.FLOAT&&(it=i.RGBA32F),q===i.HALF_FLOAT&&(it=i.RGBA16F),q===i.UNSIGNED_BYTE&&(it=at===ke?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&vt&&(it=vt.RGBA16_EXT),q===i.SHORT&&vt&&(it=vt.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function S(P,E){let q;return P?E===null||E===Gi||E===Lo?q=i.DEPTH24_STENCIL8:E===Ti?q=i.DEPTH32F_STENCIL8:E===Po&&(q=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gi||E===Lo?q=i.DEPTH_COMPONENT24:E===Ti?q=i.DEPTH_COMPONENT32F:E===Po&&(q=i.DEPTH_COMPONENT16),q}function b(P,E){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Mn&&P.minFilter!==Nn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function T(P){let E=P.target;E.removeEventListener("dispose",T),w(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function _(P){let E=P.target;E.removeEventListener("dispose",_),I(E)}function w(P){let E=n.get(P);if(E.__webglInit===void 0)return;let q=P.source,X=f.get(q);if(X){let et=X[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&R(P),Object.keys(X).length===0&&f.delete(q)}n.remove(P)}function R(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let q=P.source,X=f.get(q);delete X[E.__cacheKey],o.memory.textures--}function I(P){let E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(E.__webglFramebuffer[X]))for(let et=0;et<E.__webglFramebuffer[X].length;et++)i.deleteFramebuffer(E.__webglFramebuffer[X][et]);else i.deleteFramebuffer(E.__webglFramebuffer[X]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[X])}else{if(Array.isArray(E.__webglFramebuffer))for(let X=0;X<E.__webglFramebuffer.length;X++)i.deleteFramebuffer(E.__webglFramebuffer[X]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let X=0;X<E.__webglColorRenderbuffer.length;X++)E.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[X]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let q=P.textures;for(let X=0,et=q.length;X<et;X++){let gt=n.get(q[X]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(q[X])}n.remove(P)}let L=0;function D(){L=0}function C(){return L}function U(P){L=P}function z(){let P=L;return P>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function k(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function j(P,E){let q=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){let X=P.image;if(X===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(q,P,E);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}function B(P,E){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){bt(q,P,E);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}function V(P,E){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){bt(q,P,E);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}function J(P,E){let q=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&q.__version!==P.version){Ot(q,P,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}let mt={[go]:i.REPEAT,[Ki]:i.CLAMP_TO_EDGE,[Tc]:i.MIRRORED_REPEAT},At={[Mn]:i.NEAREST,[e0]:i.NEAREST_MIPMAP_NEAREST,[tl]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[ah]:i.LINEAR_MIPMAP_NEAREST,[Ks]:i.LINEAR_MIPMAP_LINEAR},le={[r0]:i.NEVER,[h0]:i.ALWAYS,[o0]:i.LESS,[Wh]:i.LEQUAL,[a0]:i.EQUAL,[qh]:i.GEQUAL,[l0]:i.GREATER,[c0]:i.NOTEQUAL};function se(P,E){if(E.type===Ti&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Nn||E.magFilter===ah||E.magFilter===tl||E.magFilter===Ks||E.minFilter===Nn||E.minFilter===ah||E.minFilter===tl||E.minFilter===Ks)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,mt[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,mt[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,mt[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,At[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,At[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,le[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mn||E.minFilter!==tl&&E.minFilter!==Ks||E.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Yt(P,E){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",T));let X=E.source,et=f.get(X);et===void 0&&(et={},f.set(X,et));let gt=k(E);if(gt!==P.__cacheKey){et[gt]===void 0&&(et[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),et[gt].usedTimes++;let vt=et[P.__cacheKey];vt!==void 0&&(et[P.__cacheKey].usedTimes--,vt.usedTimes===0&&R(E)),P.__cacheKey=gt,P.__webglTexture=et[gt].texture}return q}function nt(P,E,q){return Math.floor(Math.floor(P/q)/E)}function ot(P,E,q,X){let gt=P.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,q,X,E.data);else{gt.sort((Dt,_t)=>Dt.start-_t.start);let vt=0;for(let Dt=1;Dt<gt.length;Dt++){let _t=gt[vt],yt=gt[Dt],zt=_t.start+_t.count,Zt=nt(yt.start,E.width,4),he=nt(_t.start,E.width,4);yt.start<=zt+1&&Zt===he&&nt(yt.start+yt.count-1,E.width,4)===Zt?_t.count=Math.max(_t.count,yt.start+yt.count-_t.start):(++vt,gt[vt]=yt)}gt.length=vt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),St=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Dt=0,_t=gt.length;Dt<_t;Dt++){let yt=gt[Dt],zt=Math.floor(yt.start/4),Zt=Math.ceil(yt.count/4),he=zt%E.width,G=Math.floor(zt/E.width),Mt=Zt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,he),e.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,he,G,Mt,st,q,X,E.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function bt(P,E,q){let X=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(X=i.TEXTURE_3D);let et=Yt(P,E),gt=E.source;e.bindTexture(X,P.__webglTexture,i.TEXTURE0+q);let vt=n.get(gt);if(gt.version!==vt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap!="undefined"&&E.image instanceof ImageBitmap)===!1){let st=Ce.getPrimaries(Ce.workingColorSpace),Et=E.colorSpace===Es?null:Ce.getPrimaries(E.colorSpace),Pt=E.colorSpace===Es||st===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let at=g(E.image,!1,s.maxTextureSize);at=Ae(E,at);let St=r.convert(E.format,E.colorSpace),Dt=r.convert(E.type),_t=v(E.internalFormat,St,Dt,E.normalized,E.colorSpace,E.isVideoTexture);se(X,E);let yt,zt=E.mipmaps,Zt=E.isVideoTexture!==!0,he=vt.__version===void 0||et===!0,G=gt.dataReady,Mt=b(E,at);if(E.isDepthTexture)_t=S(E.format===js,E.type),he&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,_t,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,_t,at.width,at.height,0,St,Dt,null));else if(E.isDataTexture)if(zt.length>0){Zt&&he&&e.texStorage2D(i.TEXTURE_2D,Mt,_t,zt[0].width,zt[0].height);for(let st=0,Et=zt.length;st<Et;st++)yt=zt[st],Zt?G&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,yt.width,yt.height,St,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,st,_t,yt.width,yt.height,0,St,Dt,yt.data);E.generateMipmaps=!1}else Zt?(he&&e.texStorage2D(i.TEXTURE_2D,Mt,_t,at.width,at.height),G&&ot(E,at,St,Dt)):e.texImage2D(i.TEXTURE_2D,0,_t,at.width,at.height,0,St,Dt,at.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Zt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,_t,zt[0].width,zt[0].height,at.depth);for(let st=0,Et=zt.length;st<Et;st++)if(yt=zt[st],E.format!==Ai)if(St!==null)if(Zt){if(G)if(E.layerUpdates.size>0){let Pt=df(yt.width,yt.height,E.format,E.type);for(let ct of E.layerUpdates){let Vt=yt.data.subarray(ct*Pt/yt.data.BYTES_PER_ELEMENT,(ct+1)*Pt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,ct,yt.width,yt.height,1,St,Vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,yt.width,yt.height,at.depth,St,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,_t,yt.width,yt.height,at.depth,0,yt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,yt.width,yt.height,at.depth,St,Dt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,_t,yt.width,yt.height,at.depth,0,St,Dt,yt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Zt&&he&&e.texStorage2D(i.TEXTURE_2D,Mt,_t,zt[0].width,zt[0].height);for(let st=0,Et=zt.length;st<Et;st++)yt=zt[st],E.format!==Ai?St!==null?Zt?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,yt.width,yt.height,St,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,_t,yt.width,yt.height,0,yt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?G&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,yt.width,yt.height,St,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,st,_t,yt.width,yt.height,0,St,Dt,yt.data)}else if(E.isDataArrayTexture)if(Zt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,_t,at.width,at.height,at.depth),G)if(E.layerUpdates.size>0){let st=df(at.width,at.height,E.format,E.type);for(let Et of E.layerUpdates){let Pt=at.data.subarray(Et*st/at.data.BYTES_PER_ELEMENT,(Et+1)*st/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,at.width,at.height,1,St,Dt,Pt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,St,Dt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,at.width,at.height,at.depth,0,St,Dt,at.data);else if(E.isData3DTexture)Zt?(he&&e.texStorage3D(i.TEXTURE_3D,Mt,_t,at.width,at.height,at.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,St,Dt,at.data)):e.texImage3D(i.TEXTURE_3D,0,_t,at.width,at.height,at.depth,0,St,Dt,at.data);else if(E.isFramebufferTexture){if(he)if(Zt)e.texStorage2D(i.TEXTURE_2D,Mt,_t,at.width,at.height);else{let st=at.width,Et=at.height;for(let Pt=0;Pt<Mt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,_t,st,Et,0,St,Dt,null),st>>=1,Et>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),at.parentNode!==st){st.appendChild(at),u.add(E),st.onpaint=Et=>{let Pt=Et.changedElements;for(let ct of u)Pt.includes(ct.image)&&(ct.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let Pt=i.RGBA,ct=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pt,ct,Vt,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Zt&&he){let st=ge(zt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,_t,st.width,st.height)}for(let st=0,Et=zt.length;st<Et;st++)yt=zt[st],Zt?G&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,St,Dt,yt):e.texImage2D(i.TEXTURE_2D,st,_t,St,Dt,yt);E.generateMipmaps=!1}else if(Zt){if(he){let st=ge(at);e.texStorage2D(i.TEXTURE_2D,Mt,_t,st.width,st.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Dt,at)}else e.texImage2D(i.TEXTURE_2D,0,_t,St,Dt,at);p(E)&&y(X),vt.__version=gt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ot(P,E,q){if(E.image.length!==6)return;let X=Yt(P,E),et=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);let gt=n.get(et);if(et.version!==gt.__version||X===!0){e.activeTexture(i.TEXTURE0+q);let vt=Ce.getPrimaries(Ce.workingColorSpace),it=E.colorSpace===Es?null:Ce.getPrimaries(E.colorSpace),at=E.colorSpace===Es||vt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let St=E.isCompressedTexture||E.image[0].isCompressedTexture,Dt=E.image[0]&&E.image[0].isDataTexture,_t=[];for(let ct=0;ct<6;ct++)!St&&!Dt?_t[ct]=g(E.image[ct],!0,s.maxCubemapSize):_t[ct]=Dt?E.image[ct].image:E.image[ct],_t[ct]=Ae(E,_t[ct]);let yt=_t[0],zt=r.convert(E.format,E.colorSpace),Zt=r.convert(E.type),he=v(E.internalFormat,zt,Zt,E.normalized,E.colorSpace),G=E.isVideoTexture!==!0,Mt=gt.__version===void 0||X===!0,st=et.dataReady,Et=b(E,yt);se(i.TEXTURE_CUBE_MAP,E);let Pt;if(St){G&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,he,yt.width,yt.height);for(let ct=0;ct<6;ct++){Pt=_t[ct].mipmaps;for(let Vt=0;Vt<Pt.length;Vt++){let Bt=Pt[Vt];E.format!==Ai?zt!==null?G?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,0,0,Bt.width,Bt.height,zt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,he,Bt.width,Bt.height,0,Bt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,0,0,Bt.width,Bt.height,zt,Zt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,he,Bt.width,Bt.height,0,zt,Zt,Bt.data)}}}else{if(Pt=E.mipmaps,G&&Mt){Pt.length>0&&Et++;let ct=ge(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,he,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Dt){G?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,_t[ct].width,_t[ct].height,zt,Zt,_t[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,he,_t[ct].width,_t[ct].height,0,zt,Zt,_t[ct].data);for(let Vt=0;Vt<Pt.length;Vt++){let ze=Pt[Vt].image[ct].image;G?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,0,0,ze.width,ze.height,zt,Zt,ze.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,he,ze.width,ze.height,0,zt,Zt,ze.data)}}else{G?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,zt,Zt,_t[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,he,zt,Zt,_t[ct]);for(let Vt=0;Vt<Pt.length;Vt++){let Bt=Pt[Vt];G?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,0,0,zt,Zt,Bt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,he,zt,Zt,Bt.image[ct])}}}p(E)&&y(i.TEXTURE_CUBE_MAP),gt.__version=et.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Rt(P,E,q,X,et,gt){let vt=r.convert(q.format,q.colorSpace),it=r.convert(q.type),at=v(q.internalFormat,vt,it,q.normalized,q.colorSpace),St=n.get(E),Dt=n.get(q);if(Dt.__renderTarget=E,!St.__hasExternalTextures){let _t=Math.max(1,E.width>>gt),yt=Math.max(1,E.height>>gt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,gt,at,_t,yt,E.depth,0,vt,it,null):e.texImage2D(et,gt,at,_t,yt,0,vt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),ie(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,et,Dt.__webglTexture,0,$t(E)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,et,Dt.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(P,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){let X=E.depthTexture,et=X&&X.isDepthTexture?X.type:null,gt=S(E.stencilBuffer,et),vt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ie(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(E),gt,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(E),gt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,gt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,P)}else{let X=E.textures;for(let et=0;et<X.length;et++){let gt=X[et],vt=r.convert(gt.format,gt.colorSpace),it=r.convert(gt.type),at=v(gt.internalFormat,vt,it,gt.normalized,gt.colorSpace);ie(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(E),at,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(E),at,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,at,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(P,E,q){let X=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(E.depthTexture);if(et.__renderTarget=E,(!et.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X){if(et.__webglInit===void 0&&(et.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),et.__webglTexture===void 0){et.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),se(i.TEXTURE_CUBE_MAP,E.depthTexture);let St=r.convert(E.depthTexture.format),Dt=r.convert(E.depthTexture.type),_t;E.depthTexture.format===Qi?_t=i.DEPTH_COMPONENT24:E.depthTexture.format===js&&(_t=i.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,_t,E.width,E.height,0,St,Dt,null)}}else j(E.depthTexture,0);let gt=et.__webglTexture,vt=$t(E),it=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,at=E.depthTexture.format===js?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Qi)ie(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,gt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,gt,0);else if(E.depthTexture.format===js)ie(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,gt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(P){let E=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let X=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),X){let et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,X.removeEventListener("dispose",et)};X.addEventListener("dispose",et),E.__depthDisposeCallback=et}E.__boundDepthTexture=X}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let X=0;X<6;X++)De(E.__webglFramebuffer[X],P,X);else{let X=P.texture.mipmaps;X&&X.length>0?De(E.__webglFramebuffer[0],P,0):De(E.__webglFramebuffer,P,0)}else if(q){E.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[X]),E.__webglDepthbuffer[X]===void 0)E.__webglDepthbuffer[X]=i.createRenderbuffer(),Jt(E.__webglDepthbuffer[X],P,!1);else{let et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,gt)}}else{let X=P.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Jt(E.__webglDepthbuffer,P,!1);else{let et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(P,E,q){let X=n.get(P);E!==void 0&&Rt(X.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&rt(P)}function ft(P){let E=P.texture,q=n.get(P),X=n.get(E);P.addEventListener("dispose",_);let et=P.textures,gt=P.isWebGLCubeRenderTarget===!0,vt=et.length>1;if(vt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=E.version,o.memory.textures++),gt){q.__webglFramebuffer=[];for(let it=0;it<6;it++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[it]=[];for(let at=0;at<E.mipmaps.length;at++)q.__webglFramebuffer[it][at]=i.createFramebuffer()}else q.__webglFramebuffer[it]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let it=0;it<E.mipmaps.length;it++)q.__webglFramebuffer[it]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(vt)for(let it=0,at=et.length;it<at;it++){let St=n.get(et[it]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&ie(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){let at=et[it];q.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[it]);let St=r.convert(at.format,at.colorSpace),Dt=r.convert(at.type),_t=v(at.internalFormat,St,Dt,at.normalized,at.colorSpace,P.isXRRenderTarget===!0),yt=$t(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,_t,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,q.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Jt(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),se(i.TEXTURE_CUBE_MAP,E);for(let it=0;it<6;it++)if(E.mipmaps&&E.mipmaps.length>0)for(let at=0;at<E.mipmaps.length;at++)Rt(q.__webglFramebuffer[it][at],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,at);else Rt(q.__webglFramebuffer[it],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(E)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let it=0,at=et.length;it<at;it++){let St=et[it],Dt=n.get(St),_t=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Dt.__webglTexture),se(_t,St),Rt(q.__webglFramebuffer,P,St,i.COLOR_ATTACHMENT0+it,_t,0),p(St)&&y(_t)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(it=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,X.__webglTexture),se(it,E),E.mipmaps&&E.mipmaps.length>0)for(let at=0;at<E.mipmaps.length;at++)Rt(q.__webglFramebuffer[at],P,E,i.COLOR_ATTACHMENT0,it,at);else Rt(q.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,it,0);p(E)&&y(it),e.unbindTexture()}P.depthBuffer&&rt(P)}function dt(P){let E=P.textures;for(let q=0,X=E.length;q<X;q++){let et=E[q];if(p(et)){let gt=M(P),vt=n.get(et).__webglTexture;e.bindTexture(gt,vt),y(gt),e.unbindTexture()}}}let xt=[],Nt=[];function Gt(P){if(P.samples>0){if(ie(P)===!1){let E=P.textures,q=P.width,X=P.height,et=i.COLOR_BUFFER_BIT,gt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(P),it=E.length>1;if(it)for(let St=0;St<E.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);let at=P.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let St=0;St<E.length;St++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[St]);let Dt=n.get(E[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,q,X,0,0,q,X,et,i.NEAREST),l===!0&&(xt.length=0,Nt.length=0,xt.push(i.COLOR_ATTACHMENT0+St),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(xt.push(gt),Nt.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let St=0;St<E.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,vt.__webglColorRenderbuffer[St]);let Dt=n.get(E[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function $t(P){return Math.min(s.maxSamples,P.samples)}function ie(P){let E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function O(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Ae(P,E){let q=P.colorSpace,X=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==Sa&&q!==Es&&(Ce.getTransfer(q)===ke?(X!==Ai||et!==si)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",q)),E}function ge(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=D,this.getTextureUnits=C,this.setTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=J,this.rebindTextures=ht,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function OS(i,t){function e(n,s=Es){let r,o=Ce.getTransfer(s);if(n===si)return i.UNSIGNED_BYTE;if(n===ch)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ef)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qd)return i.BYTE;if(n===tf)return i.SHORT;if(n===Po)return i.UNSIGNED_SHORT;if(n===lh)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Ti)return i.FLOAT;if(n===gi)return i.HALF_FLOAT;if(n===sf)return i.ALPHA;if(n===rf)return i.RGB;if(n===Ai)return i.RGBA;if(n===Qi)return i.DEPTH_COMPONENT;if(n===js)return i.DEPTH_STENCIL;if(n===Do)return i.RED;if(n===uh)return i.RED_INTEGER;if(n===Qs)return i.RG;if(n===dh)return i.RG_INTEGER;if(n===fh)return i.RGBA_INTEGER;if(n===el||n===nl||n===il||n===sl)if(o===ke)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===el)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===el)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===il)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ph||n===mh||n===gh||n===xh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ph)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yh||n===vh||n===_h||n===Mh||n===bh||n===rl||n===Sh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yh||n===vh)return o===ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_h)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Mh)return r.COMPRESSED_R11_EAC;if(n===bh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===rl)return r.COMPRESSED_RG11_EAC;if(n===Sh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Eh||n===wh||n===Th||n===Ah||n===Rh||n===Ch||n===Ih||n===Ph||n===Lh||n===Dh||n===Nh||n===Uh||n===Fh||n===Bh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Th)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ah)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ch)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ih)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ph)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bh)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oh||n===zh||n===Hh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Oh)return o===ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kh||n===Gh||n===ol||n===Vh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===kh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var zS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HS=`
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

}`,Pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ua(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new sn({vertexShader:zS,fragmentShader:HS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lf=class extends ts{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding!="undefined",g=new Pf,p={},y=e.getContextAttributes(),M=null,v=null,S=[],b=[],T=new ut,_=null,w=null,R=new gn;R.viewport=new on;let I=new gn;I.viewport=new on;let L=[R,I],D=new nh,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ot=S[nt];return ot===void 0&&(ot=new _o,S[nt]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(nt){let ot=S[nt];return ot===void 0&&(ot=new _o,S[nt]=ot),ot.getGripSpace()},this.getHand=function(nt){let ot=S[nt];return ot===void 0&&(ot=new _o,S[nt]=ot),ot.getHandSpace()};function z(nt){let ot=b.indexOf(nt.inputSource);if(ot===-1)return;let bt=S[ot];bt!==void 0&&(bt.update(nt.inputSource,nt.frame,c||o),bt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function k(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",j);for(let nt=0;nt<S.length;nt++){let ot=b[nt];ot!==null&&(b[nt]=null,S[nt].disconnect(ot))}C=null,U=null,g.reset();for(let nt in p)delete p[nt];if(t.setRenderTarget(M),f=null,d=null,u=null,s=null,v=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(T.width,T.height,!1),w!==null){let nt=w.camera;nt.fov=w.fov,nt.zoom=w.zoom,nt.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",k),s.addEventListener("inputsourceschange",j),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ot=null,Rt=null;y.depth&&(Rt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=y.stencil?js:Qi,Ot=y.stencil?Lo:Gi);let Jt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Jt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Un(d.textureWidth,d.textureHeight,{format:Ai,type:si,depthTexture:new Vs(d.textureWidth,d.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let bt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Un(f.framebufferWidth,f.framebufferHeight,{format:Ai,type:si,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(nt){for(let ot=0;ot<nt.removed.length;ot++){let bt=nt.removed[ot],Ot=b.indexOf(bt);Ot>=0&&(b[Ot]=null,S[Ot].disconnect(bt))}for(let ot=0;ot<nt.added.length;ot++){let bt=nt.added[ot],Ot=b.indexOf(bt);if(Ot===-1){for(let Jt=0;Jt<S.length;Jt++)if(Jt>=b.length){b.push(bt),Ot=Jt;break}else if(b[Jt]===null){b[Jt]=bt,Ot=Jt;break}if(Ot===-1)break}let Rt=S[Ot];Rt&&Rt.connect(bt)}}let B=new N,V=new N;function J(nt,ot,bt){B.setFromMatrixPosition(ot.matrixWorld),V.setFromMatrixPosition(bt.matrixWorld);let Ot=B.distanceTo(V),Rt=ot.projectionMatrix.elements,Jt=bt.projectionMatrix.elements,De=Rt[14]/(Rt[10]-1),rt=Rt[14]/(Rt[10]+1),ht=(Rt[9]+1)/Rt[5],ft=(Rt[9]-1)/Rt[5],dt=(Rt[8]-1)/Rt[0],xt=(Jt[8]+1)/Jt[0],Nt=De*dt,Gt=De*xt,$t=Ot/(-dt+xt),ie=$t*-dt;if(ot.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ie),nt.translateZ($t),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Rt[10]===-1)nt.projectionMatrix.copy(ot.projectionMatrix),nt.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let O=De+$t,Ae=rt+$t,ge=Nt-ie,P=Gt+(Ot-ie),E=ht*rt/Ae*O,q=ft*rt/Ae*O;nt.projectionMatrix.makePerspective(ge,P,E,q,O,Ae),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function mt(nt,ot){ot===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ot.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ot=nt.near,bt=nt.far;g.texture!==null&&(g.depthNear>0&&(ot=g.depthNear),g.depthFar>0&&(bt=g.depthFar)),D.near=I.near=R.near=ot,D.far=I.far=R.far=bt,(C!==D.near||U!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),C=D.near,U=D.far),D.layers.mask=nt.layers.mask|6,R.layers.mask=D.layers.mask&-5,I.layers.mask=D.layers.mask&-3;let Ot=nt.parent,Rt=D.cameras;mt(D,Ot);for(let Jt=0;Jt<Rt.length;Jt++)mt(Rt[Jt],Ot);Rt.length===2?J(D,R,I):D.projectionMatrix.copy(R.projectionMatrix),w===null&&nt.isPerspectiveCamera&&(w={camera:nt,fov:nt.fov,zoom:nt.zoom}),At(nt,D,Ot)};function At(nt,ot,bt){bt===null?nt.matrix.copy(ot.matrixWorld):(nt.matrix.copy(bt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ot.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ot.projectionMatrix),nt.projectionMatrixInverse.copy(ot.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Rc*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(nt){l=nt,d!==null&&(d.fixedFoveation=nt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=nt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(nt){return p[nt]};let le=null;function se(nt,ot){if(h=ot.getViewerPose(c||o),m=ot,h!==null){let bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ot=!1;bt.length!==D.cameras.length&&(D.cameras.length=0,Ot=!0);for(let rt=0;rt<bt.length;rt++){let ht=bt[rt],ft=null;if(f!==null)ft=f.getViewport(ht);else{let xt=u.getViewSubImage(d,ht);ft=xt.viewport,rt===0&&(t.setRenderTargetTextures(v,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(v))}let dt=L[rt];dt===void 0&&(dt=new gn,dt.layers.enable(rt),dt.viewport=new on,L[rt]=dt),dt.matrix.fromArray(ht.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ht.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(ft.x,ft.y,ft.width,ft.height),rt===0&&(D.matrix.copy(dt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ot===!0&&D.cameras.push(dt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let rt=u.getDepthInformation(bt[0]);rt&&rt.isValid&&rt.texture&&g.init(rt,s.renderState)}if(Rt&&Rt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let rt=0;rt<bt.length;rt++){let ht=bt[rt].camera;if(ht){let ft=p[ht];ft||(ft=new Ua,p[ht]=ft);let dt=u.getCameraImage(ht);ft.sourceTexture=dt}}}}for(let bt=0;bt<S.length;bt++){let Ot=b[bt],Rt=S[bt];Ot!==null&&Rt!==void 0&&Rt.update(Ot,ot,c||o)}le&&le(nt,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),m=null}let Yt=new q0;Yt.setAnimationLoop(se),this.setAnimationLoop=function(nt){le=nt},this.dispose=function(){}}},kS=new be,K0=new ce;K0.set(-1,0,0,0,1,0,0,0,1);function GS(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,cf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,M,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),M=y.envMap,v=y.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(kS.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(K0),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function VS(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let b=S.program;n.uniformBlockBinding(v,b)}function c(v,S){let b=s[v.id];b===void 0&&(g(v),b=h(v),s[v.id]=b,v.addEventListener("dispose",y));let T=S.program;n.updateUBOMapping(v,T);let _=t.render.frame;r[v.id]!==_&&(d(v),r[v.id]=_)}function h(v){let S=u();v.__bindingPointIndex=S;let b=i.createBuffer(),T=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,T,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let S=s[v.id],b=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,w=b.length;_<w;_++){let R=b[_];if(Array.isArray(R))for(let I=0,L=R.length;I<L;I++)f(R[I],_,I,T);else f(R,_,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,S,b,T){if(x(v,S,b,T)===!0){let _=v.__offset,w=v.value;if(Array.isArray(w)){let R=0;for(let I=0;I<w.length;I++){let L=w[I],D=p(L);m(L,v.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function m(v,S,b){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,b)}function x(v,S,b,T){let _=v.value,w=S+"_"+b;if(T[w]===void 0)return typeof _=="number"||typeof _=="boolean"?T[w]=_:ArrayBuffer.isView(_)?T[w]=_.slice():T[w]=_.clone(),!0;{let R=T[w];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return T[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(v){let S=v.uniforms,b=0,T=16;for(let w=0,R=S.length;w<R;w++){let I=Array.isArray(S[w])?S[w]:[S[w]];for(let L=0,D=I.length;L<D;L++){let C=I[L],U=Array.isArray(C.value)?C.value:[C.value];for(let z=0,k=U.length;z<k;z++){let j=U[z],B=p(j),V=b%T,J=V%B.boundary,mt=V+J;b+=J,mt!==0&&T-mt<B.storage&&(b+=T-mt),C.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,b+=B.storage}}}let _=b%T;return _>0&&(b+=T-_),v.__size=b,v.__cache={},this}function p(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",v),S}function y(v){let S=v.target;S.removeEventListener("dispose",y);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function M(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:M}}var WS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),rs=null;function qS(){return rs===null&&(rs=new gr(WS,16,16,Qs,gi),rs.name="DFG_LUT",rs.minFilter=Nn,rs.magFilter=Nn,rs.wrapS=Ki,rs.wrapT=Ki,rs.generateMipmaps=!1,rs.needsUpdate=!0),rs}var $h=class{constructor(t={}){let{canvas:e=u0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=si}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=f,g=new Set([fh,dh,uh]),p=new Set([si,Gi,Po,Lo,ch,hh]),y=new Uint32Array(4),M=new Int32Array(4),v=new N,S=null,b=null,T=[],_=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,L=null,D=null,C=null,U=null;this._outputColorSpace=Dn;let z=0,k=0,j=null,B=-1,V=null,J=new on,mt=new on,At=null,le=new pt(0),se=0,Yt=e.width,nt=e.height,ot=1,bt=null,Ot=null,Rt=new on(0,0,Yt,nt),Jt=new on(0,0,Yt,nt),De=!1,rt=new So,ht=!1,ft=!1,dt=new be,xt=new N,Nt=new on,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function ie(){return j===null?ot:1}let O=n;function Ae(A,H){return e.getContext(A,H)}let ge,P,E,q,X,et,gt,vt,it,at,St,Dt,_t,yt,zt,Zt,he,G,Mt,st,Et,Pt,ct;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ze,!1),e.addEventListener("webglcontextrestored",Ne,!1),e.addEventListener("webglcontextcreationerror",qn,!1),O===null){let H="webgl2";if(O=Ae(H,A),O===null)throw Ae(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(A){throw e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",qn,!1),ee("WebGLRenderer: "+A.message),A}function Vt(){ge=new jM(O),ge.init(),Et=new OS(O,ge),P=new GM(O,ge,t,Et),E=new FS(O,ge),P.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),D=O.createFramebuffer(),C=O.createFramebuffer(),U=O.createFramebuffer(),q=new eb(O),X=new bS,et=new BS(O,ge,E,X,P,Et,q),gt=new KM(R),vt=new i_(O),Pt=new HM(O,vt),it=new QM(O,vt,q,Pt),at=new ib(O,it,vt,Pt,q),G=new nb(O,P,et),zt=new VM(X),St=new MS(R,gt,ge,P,Pt,zt),Dt=new GS(R,X),_t=new ES,yt=new IS(ge),he=new zM(R,gt,E,at,m,l),Zt=new US(R,at,P),ct=new VS(O,q,P,E),Mt=new kM(O,ge,q),st=new tb(O,ge,q),q.programs=St.programs,R.capabilities=P,R.extensions=ge,R.properties=X,R.renderLists=_t,R.shadowMap=Zt,R.state=E,R.info=q}x!==si&&(w=new rb(x,e.width,e.height,a,s,r));let Bt=new Lf(R,O);this.xr=Bt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(A){A!==void 0&&(ot=A,this.setSize(Yt,nt,!1))},this.getSize=function(A){return A.set(Yt,nt)},this.setSize=function(A,H,Q=!0){if(Bt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=A,nt=H,e.width=Math.floor(A*ot),e.height=Math.floor(H*ot),Q===!0&&(e.style.width=A+"px",e.style.height=H+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(Yt*ot,nt*ot).floor()},this.setDrawingBufferSize=function(A,H,Q){Yt=A,nt=H,ot=Q,e.width=Math.floor(A*Q),e.height=Math.floor(H*Q),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(x===si){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(J)},this.getViewport=function(A){return A.copy(Rt)},this.setViewport=function(A,H,Q,Y){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,H,Q,Y),E.viewport(J.copy(Rt).multiplyScalar(ot).round())},this.getScissor=function(A){return A.copy(Jt)},this.setScissor=function(A,H,Q,Y){A.isVector4?Jt.set(A.x,A.y,A.z,A.w):Jt.set(A,H,Q,Y),E.scissor(mt.copy(Jt).multiplyScalar(ot).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(A){E.setScissorTest(De=A)},this.setOpaqueSort=function(A){bt=A},this.setTransparentSort=function(A){Ot=A},this.getClearColor=function(A){return A.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,Q=!0){let Y=0;if(A){let Z=!1;if(j!==null){let Lt=j.texture.format;Z=g.has(Lt)}if(Z){let Lt=j.texture.type,Ft=p.has(Lt),It=he.getClearColor(),Ht=he.getClearAlpha(),Wt=It.r,xe=It.g,Ee=It.b;Ft?(y[0]=Wt,y[1]=xe,y[2]=Ee,y[3]=Ht,O.clearBufferuiv(O.COLOR,0,y)):(M[0]=Wt,M[1]=xe,M[2]=Ee,M[3]=Ht,O.clearBufferiv(O.COLOR,0,M))}else Y|=O.COLOR_BUFFER_BIT}H&&(Y|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",qn,!1),he.dispose(),_t.dispose(),yt.dispose(),X.dispose(),gt.dispose(),at.dispose(),Pt.dispose(),ct.dispose(),St.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Xr),Bt.removeEventListener("sessionend",Mi),Bn.stop()};function ze(A){A.preventDefault(),Ta("WebGLRenderer: Context Lost."),I=!0}function Ne(){Ta("WebGLRenderer: Context Restored."),I=!1;let A=q.autoReset,H=Zt.enabled,Q=Zt.autoUpdate,Y=Zt.needsUpdate,Z=Zt.type;Vt(),q.autoReset=A,Zt.enabled=H,Zt.autoUpdate=Q,Zt.needsUpdate=Y,Zt.type=Z}function qn(A){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ci(A){let H=A.target;H.removeEventListener("dispose",ci),fs(H)}function fs(A){Wr(A),X.remove(A)}function Wr(A){let H=X.get(A).programs;H!==void 0&&(H.forEach(function(Q){St.releaseProgram(Q)}),A.isShaderMaterial&&St.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,Q,Y,Z,Lt){H===null&&(H=Gt);let Ft=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,It=On(A,H,Q,Y,Z);E.setMaterial(Y,Ft);let Ht=Q.index,Wt=1;if(Y.wireframe===!0){if(Ht=it.getWireframeAttribute(Q),Ht===void 0)return;Wt=2}let xe=Q.drawRange,Ee=Q.attributes.position,kt=xe.start*Wt,He=(xe.start+xe.count)*Wt;Lt!==null&&(kt=Math.max(kt,Lt.start*Wt),He=Math.min(He,(Lt.start+Lt.count)*Wt)),Ht!==null?(kt=Math.max(kt,0),He=Math.min(He,Ht.count)):Ee!=null&&(kt=Math.max(kt,0),He=Math.min(He,Ee.count));let vn=He-kt;if(vn<0||vn===1/0)return;Pt.setup(Z,Y,It,Q,Ht);let tn,Ze=Mt;if(Ht!==null&&(tn=vt.get(Ht),Ze=st,Ze.setIndex(tn)),Z.isMesh)Y.wireframe===!0?(E.setLineWidth(Y.wireframeLinewidth*ie()),Ze.setMode(O.LINES)):Ze.setMode(O.TRIANGLES);else if(Z.isLine){let zn=Y.linewidth;zn===void 0&&(zn=1),E.setLineWidth(zn*ie()),Z.isLineSegments?Ze.setMode(O.LINES):Z.isLineLoop?Ze.setMode(O.LINE_LOOP):Ze.setMode(O.LINE_STRIP)}else Z.isPoints?Ze.setMode(O.POINTS):Z.isSprite&&Ze.setMode(O.TRIANGLES);if(Z.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))Ze.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let zn=Z._multiDrawStarts,Ut=Z._multiDrawCounts,Xn=Z._multiDrawCount,Ue=Ht?vt.get(Ht).bytesPerElement:1,bi=X.get(Y).currentProgram.getUniforms();for(let Yi=0;Yi<Xn;Yi++)bi.setValue(O,"_gl_DrawID",Yi),Ze.render(zn[Yi]/Ue,Ut[Yi])}else if(Z.isInstancedMesh)Ze.renderInstances(kt,vn,Z.count);else if(Q.isInstancedBufferGeometry){let zn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ut=Math.min(Q.instanceCount,zn);Ze.renderInstances(kt,vn,Ut)}else Ze.render(kt,vn)};function aa(A,H,Q,Y){L!==null&&A.isNodeMaterial&&L.setObject(Y,A),ht===!0&&zt.setState(A,Q,!1),A.transparent===!0&&A.side===me&&A.forceSinglePass===!1?(A.side=Tn,A.needsUpdate=!0,Re(A,H,Y),A.side=Js,A.needsUpdate=!0,Re(A,H,Y),A.side=me):Re(A,H,Y)}this.compile=function(A,H,Q=null){Q===null&&(Q=A),L!==null&&L.renderStart(A,H,Q),b=yt.get(Q),b.init(H),_.push(b),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),A!==Q&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),ft=this.localClippingEnabled,ht=zt.init(this.clippingPlanes,ft),ht===!0&&zt.setGlobalState(this.clippingPlanes,H),L!==null&&Zt.render(b.state.shadowsArray,Q,H);let Y=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Lt=Z.material;if(Lt)if(Array.isArray(Lt))for(let Ft=0;Ft<Lt.length;Ft++){let It=Lt[Ft];aa(It,Q,H,Z),Y.add(It)}else aa(Lt,Q,H,Z),Y.add(Lt)}),b=_.pop(),L!==null&&L.renderEnd(),Y},this.compileAsync=function(A,H,Q=null){let Y=this.compile(A,H,Q);return new Promise(Z=>{function Lt(){if(Y.forEach(function(Ft){let Ht=X.get(Ft).currentProgram;(Ht===void 0||Ht.isReady())&&Y.delete(Ft)}),Y.size===0){Z(A);return}setTimeout(Lt,10)}ge.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let qr=null;function Ds(A){qr&&qr(A)}function Xr(){Bn.stop()}function Mi(){Bn.start()}let Bn=new q0;Bn.setAnimationLoop(Ds),typeof self!="undefined"&&Bn.setContext(self),this.setAnimationLoop=function(A){qr=A,Bt.setAnimationLoop(A),A===null?Bn.stop():Bn.start()},Bt.addEventListener("sessionstart",Xr),Bt.addEventListener("sessionend",Mi),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(A,H);let Q=Bt.enabled===!0&&Bt.isPresenting===!0,Y=w!==null&&(j===null||Q)&&w.begin(R,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(H),H=Bt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,H,j),b=yt.get(A,_.length),b.init(H),b.state.textureUnits=et.getTextureUnits(),_.push(b),dt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),rt.setFromProjectionMatrix(dt,Fi,H.reversedDepth),ft=this.localClippingEnabled,ht=zt.init(this.clippingPlanes,ft),S=_t.get(A,T.length),S.init(),T.push(S),Bt.enabled===!0&&Bt.isPresenting===!0){let Ft=R.xr.getDepthSensingMesh();Ft!==null&&qi(Ft,H,-1/0,R.sortObjects)}qi(A,H,0,R.sortObjects),S.finish(),L!==null&&L.updateLights(b.state.lightsArray),R.sortObjects===!0&&S.sort(bt,Ot),$t=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,$t&&he.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&zt.beginShadows();let Z=b.state.shadowsArray;if(Zt.render(Z,A,H),ht===!0&&zt.endShadows(),(Y&&w.hasRenderPass())===!1){let Ft=S.opaque,It=S.transmissive;if(b.setupLights(),H.isArrayCamera){let Ht=H.cameras;if(It.length>0)for(let Wt=0,xe=Ht.length;Wt<xe;Wt++){let Ee=Ht[Wt];K(Ft,It,A,Ee)}$t&&he.render(A);for(let Wt=0,xe=Ht.length;Wt<xe;Wt++){let Ee=Ht[Wt];kl(S,A,Ee,Ee.viewport)}}else It.length>0&&K(Ft,It,A,H),$t&&he.render(A),kl(S,A,H)}j!==null&&k===0&&(et.updateMultisampleRenderTarget(j),et.updateRenderTargetMipmap(j)),Y&&w.end(R),A.isScene===!0&&A.onAfterRender(R,A,H),Pt.resetDefaultState(),B=-1,V=null,_.pop(),_.length>0?(b=_[_.length-1],et.setTextureUnits(b.state.textureUnits),ht===!0&&zt.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,L!==null&&L.renderEnd()};function qi(A,H,Q,Y){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(rt)){Y&&Nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(dt);let Ft=at.update(A),It=A.material;It.visible&&S.push(A,Ft,It,Q,Nt.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(rt))){let Ft=at.update(A),It=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Nt.copy(A.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Nt.copy(Ft.boundingSphere.center)),Nt.applyMatrix4(A.matrixWorld).applyMatrix4(dt)),Array.isArray(It)){let Ht=Ft.groups;for(let Wt=0,xe=Ht.length;Wt<xe;Wt++){let Ee=Ht[Wt],kt=It[Ee.materialIndex];kt&&kt.visible&&S.push(A,Ft,kt,Q,Nt.z,Ee,H)}}else It.visible&&S.push(A,Ft,It,Q,Nt.z,null,H)}}let Lt=A.children;for(let Ft=0,It=Lt.length;Ft<It;Ft++)qi(Lt[Ft],H,Q,Y)}function kl(A,H,Q,Y){let{opaque:Z,transmissive:Lt,transparent:Ft}=A;b.setupLightsView(Q),ht===!0&&zt.setGlobalState(R.clippingPlanes,Q),Y&&E.viewport(J.copy(Y)),Z.length>0&&wt(Z,H,Q),Lt.length>0&&wt(Lt,H,Q),Ft.length>0&&wt(Ft,H,Q),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function K(A,H,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){let kt=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new Un(1,1,{generateMipmaps:!0,type:kt?gi:si,minFilter:Ks,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}let Lt=b.state.transmissionRenderTarget[Y.id],Ft=Y.viewport||J;Lt.setSize(Ft.z*R.transmissionResolutionScale,Ft.w*R.transmissionResolutionScale);let It=R.getRenderTarget(),Ht=R.getActiveCubeFace(),Wt=R.getActiveMipmapLevel();R.setRenderTarget(Lt),R.getClearColor(le),se=R.getClearAlpha(),se<1&&R.setClearColor(16777215,.5),R.clear(),$t&&he.render(Q);let xe=R.toneMapping;R.toneMapping=ki;let Ee=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),ht===!0&&zt.setGlobalState(R.clippingPlanes,Y),wt(A,Q,Y),et.updateMultisampleRenderTarget(Lt),et.updateRenderTargetMipmap(Lt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let He=0,vn=H.length;He<vn;He++){let tn=H[He],{object:Ze,geometry:zn,material:Ut,group:Xn}=tn;if(Ut.side===me&&Ze.layers.test(Y.layers)){let Ue=Ut.side;Ut.side=Tn,Ut.needsUpdate=!0,Me(Ze,Q,Y,zn,Ut,Xn),Ut.side=Ue,Ut.needsUpdate=!0,kt=!0}}kt===!0&&(et.updateMultisampleRenderTarget(Lt),et.updateRenderTargetMipmap(Lt))}R.setRenderTarget(It,Ht,Wt),R.setClearColor(le,se),Ee!==void 0&&(Y.viewport=Ee),R.toneMapping=xe}function wt(A,H,Q){let Y=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Lt=A.length;Z<Lt;Z++){let Ft=A[Z],{object:It,geometry:Ht,group:Wt}=Ft,xe=Ft.material;xe.allowOverride===!0&&Y!==null&&(xe=Y),It.layers.test(Q.layers)&&Me(It,H,Q,Ht,xe,Wt)}}function Me(A,H,Q,Y,Z,Lt){L!==null&&Z.isNodeMaterial&&L.setObject(A,Z),A.onBeforeRender(R,H,Q,Y,Z,Lt),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(R,H,Q,Y,A,Lt),Z.transparent===!0&&Z.side===me&&Z.forceSinglePass===!1?(Z.side=Tn,Z.needsUpdate=!0,R.renderBufferDirect(Q,H,Y,Z,A,Lt),Z.side=Js,Z.needsUpdate=!0,R.renderBufferDirect(Q,H,Y,Z,A,Lt),Z.side=me):R.renderBufferDirect(Q,H,Y,Z,A,Lt),A.onAfterRender(R,H,Q,Y,Z,Lt)}function Re(A,H,Q){H.isScene!==!0&&(H=Gt);let Y=X.get(A),Z=b.state.lights,Lt=b.state.shadowsArray,Ft=Z.state.version,It=St.getParameters(A,Z.state,Lt,H,Q,b.state.lightProbeGridArray),Ht=St.getProgramCacheKey(It),Wt=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;let xe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=gt.get(A.envMap||Y.environment,xe),Y.envMapRotation=Y.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",ci),Wt=new Map,Y.programs=Wt);let Ee=Wt.get(Ht);if(Ee!==void 0){if(Y.currentProgram===Ee&&Y.lightsStateVersion===Ft)return de(A,It),Ee}else It.uniforms=St.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,Q,It),A.onBeforeCompile(It,R),Ee=St.acquireProgram(It,Ht),Wt.set(Ht,Ee),Y.uniforms=It.uniforms;let kt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=zt.uniform),de(A,It),Y.needsLights=la(A),Y.lightsStateVersion=Ft,Y.needsLights&&(kt.ambientLightColor.value=Z.state.ambient,kt.lightProbe.value=Z.state.probe,kt.sunLights.value=Z.state.sun,kt.sunLightShadows.value=Z.state.sunShadow,kt.directionalLights.value=Z.state.directional,kt.directionalLightShadows.value=Z.state.directionalShadow,kt.spotLights.value=Z.state.spot,kt.spotLightShadows.value=Z.state.spotShadow,kt.rectAreaLights.value=Z.state.rectArea,kt.ltc_1.value=Z.state.rectAreaLTC1,kt.ltc_2.value=Z.state.rectAreaLTC2,kt.pointLights.value=Z.state.point,kt.pointLightShadows.value=Z.state.pointShadow,kt.hemisphereLights.value=Z.state.hemi,kt.sunShadowMatrix.value=Z.state.sunShadowMatrix,kt.sunShadowCascade.value=Z.state.sunShadowCascade,kt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,kt.spotLightMatrix.value=Z.state.spotLightMatrix,kt.spotLightMap.value=Z.state.spotLightMap,kt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=b.state.lightProbeGridArray.length>0,Y.currentProgram=Ee,Y.uniformsList=null,Ee}function re(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=Fo.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function de(A,H){let Q=X.get(A);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function te(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(H.matrixWorld);for(let Q=0,Y=A.length;Q<Y;Q++){let Z=A[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(v))return Z}return null}function On(A,H,Q,Y,Z){H.isScene!==!0&&(H=Gt),et.resetTextureUnits();let Lt=H.fog,Ft=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,It=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ce.workingColorSpace,Ht=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Wt=gt.get(Y.envMap||Ft,Ht),xe=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ee=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),kt=!!Q.morphAttributes.position,He=!!Q.morphAttributes.normal,vn=!!Q.morphAttributes.color,tn=ki;Y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(tn=R.toneMapping);let Ze=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,zn=Ze!==void 0?Ze.length:0,Ut=X.get(Y),Xn=b.state.lights;if(ht===!0&&(ft===!0||A!==V)){let Ke=A===V&&Y.id===B;zt.setState(Y,A,Ke)}let Ue=!1;Y.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Xn.state.version||Ut.outputColorSpace!==It||Z.isBatchedMesh&&Ut.batching===!1||!Z.isBatchedMesh&&Ut.batching===!0||Z.isBatchedMesh&&Ut.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ut.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ut.instancing===!1||!Z.isInstancedMesh&&Ut.instancing===!0||Z.isSkinnedMesh&&Ut.skinning===!1||!Z.isSkinnedMesh&&Ut.skinning===!0||Z.isInstancedMesh&&Ut.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ut.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ut.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ut.instancingMorph===!1&&Z.morphTexture!==null||Ut.envMap!==Wt||Y.fog===!0&&Ut.fog!==Lt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==zt.numPlanes||Ut.numIntersection!==zt.numIntersection)||Ut.vertexAlphas!==xe||Ut.vertexTangents!==Ee||Ut.morphTargets!==kt||Ut.morphNormals!==He||Ut.morphColors!==vn||Ut.toneMapping!==tn||Ut.morphTargetsCount!==zn||!!Ut.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Ue=!0):(Ue=!0,Ut.__version=Y.version);let bi=Ut.currentProgram;Ue===!0&&(bi=Re(Y,H,Z),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,bi,Ut));let Yi=!1,Us=!1,Yr=!1,qe=bi.getUniforms(),mn=Ut.uniforms;if(E.useProgram(bi.program)&&(Yi=!0,Us=!0,Yr=!0),Y.id!==B&&(B=Y.id,Us=!0),Ut.needsLights){let Ke=te(b.state.lightProbeGridArray,Z);Ut.lightProbeGrid!==Ke&&(Ut.lightProbeGrid=Ke,Us=!0)}if(Yi||V!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),qe.setValue(O,"projectionMatrix",A.projectionMatrix),qe.setValue(O,"viewMatrix",A.matrixWorldInverse);let Bs=qe.map.cameraPosition;Bs!==void 0&&Bs.setValue(O,xt.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&qe.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&qe.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,Us=!0,Yr=!0)}if(Ut.needsLights&&(Xn.state.sunShadowMap.length>0&&qe.setValue(O,"sunShadowMap",Xn.state.sunShadowMap,et),Xn.state.directionalShadowMap.length>0&&qe.setValue(O,"directionalShadowMap",Xn.state.directionalShadowMap,et),Xn.state.spotShadowMap.length>0&&qe.setValue(O,"spotShadowMap",Xn.state.spotShadowMap,et),Xn.state.pointShadowMap.length>0&&qe.setValue(O,"pointShadowMap",Xn.state.pointShadowMap,et)),Z.isSkinnedMesh){qe.setOptional(O,Z,"bindMatrix"),qe.setOptional(O,Z,"bindMatrixInverse");let Ke=Z.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),qe.setValue(O,"boneTexture",Ke.boneTexture,et))}Z.isBatchedMesh&&(qe.setOptional(O,Z,"batchingTexture"),qe.setValue(O,"batchingTexture",Z._matricesTexture,et),qe.setOptional(O,Z,"batchingIdTexture"),qe.setValue(O,"batchingIdTexture",Z._indirectTexture,et),qe.setOptional(O,Z,"batchingColorTexture"),Z._colorsTexture!==null&&qe.setValue(O,"batchingColorTexture",Z._colorsTexture,et));let Fs=Q.morphAttributes;if((Fs.position!==void 0||Fs.normal!==void 0||Fs.color!==void 0)&&G.update(Z,Q,bi),(Us||Ut.receiveShadow!==Z.receiveShadow)&&(Ut.receiveShadow=Z.receiveShadow,qe.setValue(O,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(mn.envMapIntensity.value=H.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=qS()),Us){if(qe.setValue(O,"toneMappingExposure",R.toneMappingExposure),Ut.needsLights&&Xi(mn,Yr),Lt&&Y.fog===!0&&Dt.refreshFogUniforms(mn,Lt),Dt.refreshMaterialUniforms(mn,Y,ot,nt,b.state.transmissionRenderTarget[A.id]),Ut.needsLights&&Ut.lightProbeGrid){let Ke=Ut.lightProbeGrid;mn.probesSH.value=Ke.texture,mn.probesMin.value.copy(Ke.boundingBox.min),mn.probesMax.value.copy(Ke.boundingBox.max),mn.probesResolution.value.copy(Ke.resolution)}Fo.upload(O,re(Ut),mn,et)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Fo.upload(O,re(Ut),mn,et),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&qe.setValue(O,"center",Z.center),qe.setValue(O,"modelViewMatrix",Z.modelViewMatrix),qe.setValue(O,"normalMatrix",Z.normalMatrix),qe.setValue(O,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Ke=Y.uniformsGroups;for(let Bs=0,Zr=Ke.length;Bs<Zr;Bs++){let Zp=Ke[Bs];ct.update(Zp,bi),ct.bind(Zp,bi)}}return bi}function Xi(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function la(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,H,Q){let Y=X.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),X.get(A.texture).__webglTexture=H,X.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){let Q=X.get(A);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,Q=0){j=A,z=H,k=Q;let Y=null,Z=!1,Lt=!1;if(A){let It=X.get(A);if(It.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(O.FRAMEBUFFER,It.__webglFramebuffer),J.copy(A.viewport),mt.copy(A.scissor),At=A.scissorTest,E.viewport(J),E.scissor(mt),E.setScissorTest(At),B=-1;return}else if(It.__webglFramebuffer===void 0)et.setupRenderTarget(A);else if(It.__hasExternalTextures)et.rebindTextures(A,X.get(A.texture).__webglTexture,X.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let xe=A.depthTexture;if(It.__boundDepthTexture!==xe){if(xe!==null&&X.has(xe)&&(A.width!==xe.image.width||A.height!==xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(A)}}let Ht=A.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Lt=!0);let Wt=X.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[H])?Y=Wt[H][Q]:Y=Wt[H],Z=!0):A.samples>0&&et.useMultisampledRTT(A)===!1?Y=X.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?Y=Wt[Q]:Y=Wt,J.copy(A.viewport),mt.copy(A.scissor),At=A.scissorTest}else J.copy(Rt).multiplyScalar(ot).floor(),mt.copy(Jt).multiplyScalar(ot).floor(),At=De;if(Q!==0&&(Y=D),E.bindFramebuffer(O.FRAMEBUFFER,Y)&&E.drawBuffers(A,Y),E.viewport(J),E.scissor(mt),E.setScissorTest(At),Z){let It=X.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,It.__webglTexture,Q)}else if(Lt){let It=H;for(let Ht=0;Ht<A.textures.length;Ht++){let Wt=X.get(A.textures[Ht]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ht,Wt.__webglTexture,Q,It)}}else if(A!==null&&Q!==0){let It=X.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,It.__webglTexture,Q)}B=-1};function Ns(A){let H=X.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=P.textureFormatReadable(A.format),H.__typeReadable=P.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,Q,Y,Z,Lt,Ft,It=0){if(!(A&&A.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht){E.bindFramebuffer(O.FRAMEBUFFER,Ht);try{let Wt=A.textures[It],xe=Wt.format,Ee=Wt.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+It);let kt=Ns(Wt);if(kt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Y&&Q>=0&&Q<=A.height-Z&&O.readPixels(H,Q,Y,Z,Et.convert(xe),Et.convert(Ee),Lt)}finally{let Wt=j!==null?X.get(j).__webglFramebuffer:null;E.bindFramebuffer(O.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,H,Q,Y,Z,Lt,Ft,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht)if(H>=0&&H<=A.width-Y&&Q>=0&&Q<=A.height-Z){E.bindFramebuffer(O.FRAMEBUFFER,Ht);let Wt=A.textures[It],xe=Wt.format,Ee=Wt.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+It);let kt=Ns(Wt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let He=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,He),O.bufferData(O.PIXEL_PACK_BUFFER,Lt.byteLength,O.STREAM_READ),O.readPixels(H,Q,Y,Z,Et.convert(xe),Et.convert(Ee),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let vn=j!==null?X.get(j).__webglFramebuffer:null;E.bindFramebuffer(O.FRAMEBUFFER,vn);let tn=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await f0(O,tn,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,He),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Lt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(He),O.deleteSync(tn),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,Q=0){let Y=Math.pow(2,-Q),Z=Math.floor(A.image.width*Y),Lt=Math.floor(A.image.height*Y),Ft=H!==null?H.x:0,It=H!==null?H.y:0;et.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Ft,It,Z,Lt),E.unbindTexture()},this.copyTextureToTexture=function(A,H,Q=null,Y=null,Z=0,Lt=0){let Ft,It,Ht,Wt,xe,Ee,kt,He,vn,tn=A.isCompressedTexture?A.mipmaps[Lt]:A.image;if(Q!==null)Ft=Q.max.x-Q.min.x,It=Q.max.y-Q.min.y,Ht=Q.isBox3?Q.max.z-Q.min.z:1,Wt=Q.min.x,xe=Q.min.y,Ee=Q.isBox3?Q.min.z:0;else{let mn=Math.pow(2,-Z);Ft=Math.floor(tn.width*mn),It=Math.floor(tn.height*mn),A.isDataArrayTexture?Ht=tn.depth:A.isData3DTexture?Ht=Math.floor(tn.depth*mn):Ht=1,Wt=0,xe=0,Ee=0}Y!==null?(kt=Y.x,He=Y.y,vn=Y.z):(kt=0,He=0,vn=0);let Ze=Et.convert(H.format),zn=Et.convert(H.type),Ut;H.isData3DTexture?(et.setTexture3D(H,0),Ut=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(et.setTexture2DArray(H,0),Ut=O.TEXTURE_2D_ARRAY):(et.setTexture2D(H,0),Ut=O.TEXTURE_2D),E.activeTexture(O.TEXTURE0),E.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),E.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),E.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let Xn=E.getParameter(O.UNPACK_ROW_LENGTH),Ue=E.getParameter(O.UNPACK_IMAGE_HEIGHT),bi=E.getParameter(O.UNPACK_SKIP_PIXELS),Yi=E.getParameter(O.UNPACK_SKIP_ROWS),Us=E.getParameter(O.UNPACK_SKIP_IMAGES);E.pixelStorei(O.UNPACK_ROW_LENGTH,tn.width),E.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tn.height),E.pixelStorei(O.UNPACK_SKIP_PIXELS,Wt),E.pixelStorei(O.UNPACK_SKIP_ROWS,xe),E.pixelStorei(O.UNPACK_SKIP_IMAGES,Ee);let Yr=A.isDataArrayTexture||A.isData3DTexture,qe=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){let mn=X.get(A),Fs=X.get(H),Ke=X.get(mn.__renderTarget),Bs=X.get(Fs.__renderTarget);E.bindFramebuffer(O.READ_FRAMEBUFFER,Ke.__webglFramebuffer),E.bindFramebuffer(O.DRAW_FRAMEBUFFER,Bs.__webglFramebuffer);for(let Zr=0;Zr<Ht;Zr++)Yr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(A).__webglTexture,Z,Ee+Zr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(H).__webglTexture,Lt,vn+Zr)),O.blitFramebuffer(Wt,xe,Ft,It,kt,He,Ft,It,O.DEPTH_BUFFER_BIT,O.NEAREST);E.bindFramebuffer(O.READ_FRAMEBUFFER,null),E.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||X.has(A)){let mn=X.get(A),Fs=X.get(H);E.bindFramebuffer(O.READ_FRAMEBUFFER,C),E.bindFramebuffer(O.DRAW_FRAMEBUFFER,U);for(let Ke=0;Ke<Ht;Ke++)Yr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,mn.__webglTexture,Z,Ee+Ke):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mn.__webglTexture,Z),qe?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fs.__webglTexture,Lt,vn+Ke):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Fs.__webglTexture,Lt),Z!==0?O.blitFramebuffer(Wt,xe,Ft,It,kt,He,Ft,It,O.COLOR_BUFFER_BIT,O.NEAREST):qe?O.copyTexSubImage3D(Ut,Lt,kt,He,vn+Ke,Wt,xe,Ft,It):O.copyTexSubImage2D(Ut,Lt,kt,He,Wt,xe,Ft,It);E.bindFramebuffer(O.READ_FRAMEBUFFER,null),E.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else qe?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Ut,Lt,kt,He,vn,Ft,It,Ht,Ze,zn,tn.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Ut,Lt,kt,He,vn,Ft,It,Ht,Ze,tn.data):O.texSubImage3D(Ut,Lt,kt,He,vn,Ft,It,Ht,Ze,zn,tn):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Lt,kt,He,Ft,It,Ze,zn,tn.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Lt,kt,He,tn.width,tn.height,Ze,tn.data):O.texSubImage2D(O.TEXTURE_2D,Lt,kt,He,Ft,It,Ze,zn,tn);E.pixelStorei(O.UNPACK_ROW_LENGTH,Xn),E.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ue),E.pixelStorei(O.UNPACK_SKIP_PIXELS,bi),E.pixelStorei(O.UNPACK_SKIP_ROWS,Yi),E.pixelStorei(O.UNPACK_SKIP_IMAGES,Us),Lt===0&&H.generateMipmaps&&O.generateMipmap(Ut),E.unbindTexture()},this.initRenderTarget=function(A){X.get(A).__webglFramebuffer===void 0&&et.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?et.setTextureCube(A,0):A.isData3DTexture?et.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?et.setTexture2DArray(A,0):et.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){z=0,k=0,j=null,E.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ce._getUnpackColorSpace()}};function XS(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var j0={};function YS(i){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),s=XS(i.length*97+i.charCodeAt(0)),r=(a,l)=>`rgba(${a},${a},${a},${l})`;if(n.fillStyle="#e9e4de",n.fillRect(0,0,256,256),i==="wood"||i==="woodV"){let a=i==="woodV";for(let l=0;l<150;l++){let c=s()*256,h=40+s()*160,u=s()*256,d=.6+s()*1.8;n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.05+s()*.12)+")":"rgba(255,248,238,"+(.05+s()*.1)+")",n.lineWidth=d,n.beginPath(),a?(n.moveTo(c,u),n.bezierCurveTo(c+4,u+h*.3,c-4,u+h*.7,c+2,u+h)):(n.moveTo(u,c),n.bezierCurveTo(u+h*.3,c+4,u+h*.7,c-4,u+h,c+2)),n.stroke()}for(let l=0;l<3;l++){let c=s()*256,h=s()*256;n.strokeStyle="rgba(80,55,40,.22)",n.lineWidth=1.2;for(let u=1;u<4;u++)n.beginPath(),n.ellipse(c,h,u*3.5,u*2.2,a?1.57:0,0,7),n.stroke()}n.strokeStyle="rgba(70,50,40,.18)",n.lineWidth=2,n.beginPath(),a?(n.moveTo(0,0),n.lineTo(0,256)):(n.moveTo(0,0),n.lineTo(256,0)),n.stroke()}else if(i==="stone"){n.fillStyle="#8b86a0",n.fillRect(0,0,256,256);let a=4;for(let l=0;l<a;l++){let c=-(s()*40),h=256/a;for(;c<256;){let u=38+s()*50,d=190+s()*55|0;n.fillStyle=`rgb(${d},${d-3},${d+8})`,n.beginPath(),n.roundRect?n.roundRect(c+3,l*h+3,u-6,h-6,10):n.rect(c+3,l*h+3,u-6,h-6),n.fill(),n.fillStyle="rgba(255,255,255,.18)",n.fillRect(c+9,l*h+7,u-24,3);for(let f=0;f<14;f++)n.fillStyle=r(120,.08),n.fillRect(c+6+s()*(u-12),l*h+6+s()*(h-12),2,2);c+=u}}}else if(i==="shingle"){n.fillStyle="#b8aea6",n.fillRect(0,0,256,256);let a=6,l=256/a;for(let c=0;c<a;c++){let h=c%2*22;for(let u=-22;u<278;u+=44){let d=196+s()*50|0;n.fillStyle=`rgb(${d},${d-6},${d-8})`,n.beginPath(),n.moveTo(u+h+2,c*l),n.lineTo(u+h+42,c*l),n.lineTo(u+h+42,c*l+l*.55),n.quadraticCurveTo(u+h+22,c*l+l*1.15,u+h+2,c*l+l*.55),n.closePath(),n.fill(),n.strokeStyle="rgba(60,40,40,.28)",n.lineWidth=1.5,n.stroke(),n.fillStyle="rgba(255,255,255,.2)",n.fillRect(u+h+8,c*l+3,26,3)}}}else if(i==="rock"){n.fillStyle="#d4d0dc",n.fillRect(0,0,256,256);for(let a=0;a<60;a++){let l=s()*256,c=s()*256,h=10+s()*40,u=170+s()*70|0;n.fillStyle=`rgba(${u},${u-4},${u+10},.35)`,n.beginPath(),n.ellipse(l,c,h,h*.6,s()*3,0,7),n.fill()}for(let a=0;a<30;a++){n.strokeStyle="rgba(50,45,80,"+(.12+s()*.2)+")",n.lineWidth=1+s()*2,n.beginPath();let l=s()*256,c=s()*256;n.moveTo(l,c);for(let h=0;h<4;h++)l+=s()*40-20,c+=s()*30,n.lineTo(l,c);n.stroke()}}else if(i==="grass"){n.fillStyle="#e8efe0",n.fillRect(0,0,256,256);for(let a=0;a<900;a++){let l=s()*256,c=s()*256,h=s()>.5?"rgba(120,170,110,":"rgba(255,255,220,";n.strokeStyle=h+(.08+s()*.2)+")",n.lineWidth=1,n.beginPath(),n.moveTo(l,c),n.lineTo(l+s()*4-2,c-3-s()*7),n.stroke()}for(let a=0;a<20;a++)n.fillStyle="rgba(255,255,255,.3)",n.beginPath(),n.arc(s()*256,s()*256,1.5+s()*1.5,0,7),n.fill()}else if(i==="bark"){n.fillStyle="#d9cfc6",n.fillRect(0,0,256,256);for(let a=0;a<70;a++){let l=s()*256;n.strokeStyle="rgba(60,45,40,"+(.12+s()*.25)+")",n.lineWidth=1+s()*3,n.beginPath(),n.moveTo(l,0),n.bezierCurveTo(l+8,256*.3,l-8,256*.6,l+3,256),n.stroke()}}else if(i==="leaf"){n.fillStyle="#ecebe4",n.fillRect(0,0,256,256);for(let a=0;a<260;a++){let l=s()*256,c=s()*256,h=6+s()*14,u=s()>.45?215+s()*40|0:120+s()*60|0;for(let d of[-256,0,256])for(let f of[-256,0,256])l+d<-30||l+d>286||c+f<-30||c+f>286||(n.fillStyle=`rgba(${u},${u},${u-6},${.35+s()*.4})`,n.beginPath(),n.ellipse(l+d,c+f,h,h*.62,s()*3.14,0,7),n.fill())}for(let a=0;a<120;a++){let l=s()*256,c=s()*256;n.fillStyle="rgba(70,80,60,.28)",n.beginPath(),n.ellipse(l,c+9,9,4,0,0,7),n.fill(),n.fillStyle="rgba(255,255,235,.5)",n.beginPath(),n.ellipse(l-1,c-3,6,2.4,-.5,0,7),n.fill()}}else if(i==="cloth"){n.fillStyle="#e6e6e8",n.fillRect(0,0,256,256);for(let a=0;a<256;a+=4)n.fillStyle="rgba(90,95,110,"+(.07+s()*.06)+")",n.fillRect(a,0,1.6,256),n.fillStyle="rgba(255,255,255,"+(.1+s()*.08)+")",n.fillRect(0,a,256,1.6);for(let a=0;a<9;a++){let l=s()*256,c=s()*256;n.strokeStyle="rgba(60,65,85,.2)",n.lineWidth=2.5,n.beginPath(),n.moveTo(l,c),n.bezierCurveTo(l+20,c+30,l-18,c+60,l+6,c+95),n.stroke(),n.strokeStyle="rgba(255,255,255,.22)",n.lineWidth=2,n.beginPath(),n.moveTo(l+4,c),n.bezierCurveTo(l+24,c+30,l-14,c+60,l+10,c+95),n.stroke()}for(let a=0;a<5;a++)n.fillStyle="rgba(70,75,95,.25)",n.fillRect(s()*256,s()*256,10+s()*10,1.5)}else if(i==="straw"){n.fillStyle="#e8e0cc",n.fillRect(0,0,256,256);for(let a=-256;a<256*2;a+=7)n.strokeStyle="rgba(120,90,40,"+(.18+s()*.2)+")",n.lineWidth=2,n.beginPath(),n.moveTo(a,0),n.lineTo(a+256,256),n.stroke(),n.strokeStyle="rgba(255,250,225,"+(.25+s()*.2)+")",n.beginPath(),n.moveTo(a+3,0),n.lineTo(a+3-256,256),n.stroke();for(let a=0;a<256;a+=7)n.strokeStyle="rgba(110,80,35,.22)",n.lineWidth=1.5,n.beginPath(),n.moveTo(a,0),n.lineTo(a,256),n.stroke()}else if(i==="plank"){n.fillStyle="#e9e0d6",n.fillRect(0,0,256,256);let a=5,l=256/a;for(let c=0;c<a;c++){let h=c*l;n.fillStyle="rgba("+(200+s()*40|0)+","+(190+s()*30|0)+",175,.45)",n.fillRect(0,h,256,l);for(let u=0;u<22;u++){let d=h+3+s()*(l-6);n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.1+s()*.14)+")":"rgba(255,248,238,.18)",n.lineWidth=.8+s()*1.5,n.beginPath(),n.moveTo(s()*60,d),n.bezierCurveTo(80,d+3,160,d-3,256,d+1),n.stroke()}n.fillStyle="rgba(60,42,32,.55)",n.fillRect(0,h,256,2.5);for(let u of[18,238])n.fillStyle="rgba(50,40,36,.55)",n.beginPath(),n.arc(u,h+l/2,2.2,0,7),n.fill()}}else if(i==="needle"){n.fillStyle="#d7dbd2",n.fillRect(0,0,256,256);for(let a=0;a<8;a++){let l=a*256/8;for(let c=-10;c<266;c+=14){let h=c+a%2*7+s()*3,u=18+s()*10,d=s()>.5?235:130+s()*50|0;n.strokeStyle=`rgba(${d},${d},${d-10},${.45+s()*.4})`,n.lineWidth=2+s()*2,n.lineCap="round",n.beginPath(),n.moveTo(h,l),n.lineTo(h+s()*8-4,l+u),n.stroke()}n.strokeStyle="rgba(50,70,50,.3)",n.lineWidth=3,n.beginPath(),n.moveTo(0,l+256/8-2),n.lineTo(256,l+256/8-2),n.stroke()}}let o=new zi(e);return o.wrapS=o.wrapT=go,o.colorSpace=Dn,o.anisotropy=4,o}var Ye=i=>j0[i]||(j0[i]=YS(i)),Pe=(()=>{let i=new Uint8Array([112,160,208,255]),t=new gr(i,4,1,Do);return t.minFilter=t.magFilter=Mn,t.generateMipmaps=!1,t.needsUpdate=!0,t})();function Q0(){let i=document.createElement("div");i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:4;background:radial-gradient(ellipse at 50% 45%,rgba(0,0,0,0) 55%,rgba(24,20,56,.5) 100%)",document.body.appendChild(i)}function tg(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,256,256);for(let n=0;n<5200;n++){let s=200+Math.random()*55|0;t.fillStyle=`rgba(${s-30},${s-34},${s-44},${Math.random()*.35})`,t.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}for(let n=0;n<60;n++){t.strokeStyle="rgba(120,110,100,.06)",t.lineWidth=1,t.beginPath();let s=Math.random()*256,r=Math.random()*256;t.moveTo(s,r),t.lineTo(s+Math.random()*60-30,r+Math.random()*60-30),t.stroke()}let e=document.createElement("div");e.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3;mix-blend-mode:multiply;opacity:.38;background:url("+i.toDataURL()+");background-size:256px",document.body.appendChild(e)}function tr(){let i=null;try{i=localStorage.getItem("rio3d-season")}catch{}if(i!==null&&i!==""&&i!=="auto"&&+i>=0&&+i<4)return+i;let t=new Date().getMonth();return t===11||t<=1?3:t<=4?0:t<=7?1:2}var Qh=[{name:"Primavera",pine:["#79b595","#8cc4a0","#6fa98f","#9bcfa9"],blos:["#f7c6d6","#f4b7cb","#fbd6e1","#f2c2e0"],bblos:["#f4b7cb","#f7c6d6","#eea5bf","#fbd6e1"],brd:["#8fbf86","#7aae7e","#d9694a","#e39a4a","#e8c35a","#a8c97a","#c9573f"],gnd:"#b6dca3",gk:0,pet:{c:16762578,size:.42,fall:1,base:.12,gain:.88}},{name:"Verano",pine:["#5fa383","#6fb593","#559a7e","#7cc09d"],blos:["#9aa8e6","#8c9ae0","#b3a2e8","#7f93d8"],bblos:["#9aa8e6","#b3a2e8","#8c9ae0","#a7b6ee"],brd:["#6fae74","#5f9f6a","#7cbc7a","#4f9468","#88c27f","#6aa878","#58a070"],gnd:"#9fd08a",gk:.18,pet:{c:16777215,size:.3,fall:1,base:0,gain:0}},{name:"Oto\xF1o",pine:["#6fa386","#80b496","#659a80","#8cc09d"],blos:["#d94a32","#e8702e","#f2a33a","#c43d2c"],bblos:["#d9573a","#e8803a","#f0b43a","#c9462f"],brd:["#d9533a","#e8802f","#f0b43a","#c9462f","#b8532f","#e39a4a","#cf6a3a"],gnd:"#d3a45f",gk:.32,pet:{c:15237178,size:.55,fall:1.35,base:.3,gain:.7}},{name:"Invierno",pine:["#a9c4b8","#b9d3c6","#9dbaae","#c4dccf"],blos:["#f6e3ea","#f2d3de","#fbeff3","#efc9d8"],bblos:["#f6e3ea","#fbeff3","#efc9d8","#f2d3de"],brd:["#cfd8d6","#b9c4c2","#a8b4b3","#dfe6e4","#9fa9a8","#c4cdcb","#b0bbb9"],gnd:"#eef3f8",gk:.62,pet:{c:16777215,size:.28,fall:1.1,base:.55,gain:.45}}],Vi={c:15773373,c2:15044520,blos:["#f7c6d6","#f4b7cb","#fbd6e1","#f2c2e0"],bblos:["#f4b7cb","#f7c6d6","#eea5bf","#fbd6e1"],pet:16762578};var eg="rio-day",Oo=[["Hoy no tienes que llegar a ning\xFAn sitio.","You do not have to get anywhere today.","\u4ECA\u65E5\u306F\u3069\u3053\u304B\u3078\u7740\u304B\u306A\u304F\u3066\u5927\u4E08\u592B\u3002"],["El agua tambi\xE9n descansa mientras avanza.","Water also rests while it moves.","\u6C34\u306F\u6D41\u308C\u306A\u304C\u3089\u3082\u4F11\u3093\u3067\u3044\u307E\u3059\u3002"],["Respira hondo. Lo dem\xE1s puede esperar a ma\xF1ana.","Breathe deep. The rest can wait until tomorrow.","\u6DF1\u547C\u5438\u3092\u3002\u3042\u3068\u306F\u660E\u65E5\u3067\u3044\u3044\u3002"],["Algo peque\xF1o hecho con calma ya es suficiente.","One small thing done calmly is enough.","\u5C0F\u3055\u306A\u3053\u3068\u3092\u3086\u3063\u304F\u308A\u3002\u305D\u308C\u3067\u5341\u5206\u3067\u3059\u3002"],["Las nubes no se apuran y aun as\xED llegan.","Clouds never hurry and still they arrive.","\u96F2\u306F\u6025\u304C\u306A\u3044\u306E\u306B\u3001\u3061\u3083\u3093\u3068\u7740\u304D\u307E\u3059\u3002"],["Mara dejar\xEDa una nota: \xABmira hacia arriba un momento\xBB.","Mara would leave a note: \u201Clook up for a moment\u201D.","\u30DE\u30E9\u306A\u3089\u30E1\u30E2\u3092\u6B8B\u3059\u3067\u3057\u3087\u3046\u3002\u300C\u5C11\u3057\u7A7A\u3092\u898B\u4E0A\u3052\u3066\u300D\u3002"],["No hace falta entenderlo todo esta noche.","You do not need to understand everything tonight.","\u4ECA\u591C\u3001\u3059\u3079\u3066\u3092\u5206\u304B\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"],["Una taza caliente y un r\xEDo quieto: buen plan.","A warm cup and a quiet river: a good plan.","\u6E29\u304B\u3044\u304A\u8336\u3068\u9759\u304B\u306A\u5DDD\u3002\u3044\u3044\u8A08\u753B\u3067\u3059\u3002"],["Lo que pesa hoy flota un poco m\xE1s ligero en el agua.","What weighs on you today floats lighter on the water.","\u4ECA\u65E5\u306E\u91CD\u3055\u3082\u3001\u6C34\u306E\u4E0A\u3067\u306F\u5C11\u3057\u8EFD\u304F\u306A\u308A\u307E\u3059\u3002"],["Est\xE1 bien ir despacio. As\xED se ven m\xE1s cosas.","It is fine to go slowly. You see more that way.","\u3086\u3063\u304F\u308A\u3067\u5927\u4E08\u592B\u3002\u305D\u306E\u307B\u3046\u304C\u591A\u304F\u304C\u898B\u3048\u307E\u3059\u3002"],["Cada farolillo es un \xABgracias\xBB que nadie pidi\xF3.","Every lantern is a \u201Cthank you\u201D nobody asked for.","\u3061\u3087\u3046\u3061\u3093\u306F\u3072\u3068\u3064\u305A\u3064\u3001\u983C\u307E\u308C\u306A\u3044\u300C\u3042\u308A\u304C\u3068\u3046\u300D\u3002"],["El r\xEDo no compara tu ritmo con el de nadie.","The river does not compare your pace with anyone\u2019s.","\u5DDD\u306F\u3042\u306A\u305F\u306E\u901F\u3055\u3092\u8AB0\u3068\u3082\u6BD4\u3079\u307E\u305B\u3093\u3002"],["Escucha un rato: siempre hay algo suave sonando.","Listen a while: something gentle is always playing.","\u3057\u3070\u3089\u304F\u8033\u3092\u3059\u307E\u305B\u3066\u3002\u3044\u3064\u3082\u3084\u3055\u3057\u3044\u97F3\u304C\u3057\u3066\u3044\u307E\u3059\u3002"],["Hoy cuenta aunque solo hayas flotado un poco.","Today counts even if you only floated a little.","\u5C11\u3057\u6D6E\u304B\u3093\u3060\u3060\u3051\u3067\u3082\u3001\u4ECA\u65E5\u306F\u3061\u3083\u3093\u3068\u4E00\u65E5\u3067\u3059\u3002"]],tu=()=>{let i=new Date;return i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()},ng=()=>Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5),eu=()=>{try{return JSON.parse(localStorage.getItem(eg)||"{}")||{}}catch{return{}}},ig=()=>eu().k!==tu(),sg=()=>eu().n||0,rg=()=>eu().log||[];var Df=i=>{let t=Math.sin((ng()*131+i)*12.9898)*43758.5453;return t-Math.floor(t)};function og(){let i=eu();if(i.k===tu())return null;let t=ng()%Oo.length;i.k=tu(),i.n=(i.n||0)+1,i.log=(i.log||[]).concat([[tu(),t]]).slice(-12);try{localStorage.setItem(eg,JSON.stringify(i))}catch{}try{window.UX&&UX.say&&UX.say(UX.tr(Oo[t][0]))}catch{}try{window.UX&&UX.hap&&UX.hap([12,40,12])}catch{}return Oo[t]}function ag(i){i.add(Oo.map(t=>[t[0],t[1],t[2]])),i.add([["Farolillos del d\xEDa","Lanterns of the day","\u4ECA\u65E5\u306E\u3061\u3087\u3046\u3061\u3093"],["Hoy ya recogiste el farolillo. Ma\xF1ana habr\xE1 otro.","You already picked up today\u2019s lantern. There will be another tomorrow.","\u4ECA\u65E5\u306E\u3061\u3087\u3046\u3061\u3093\u306F\u3082\u3046\u62FE\u3044\u307E\u3057\u305F\u3002\u660E\u65E5\u307E\u305F\u6D41\u308C\u3066\u304D\u307E\u3059\u3002"],["A\xFAn no recoges ninguno","You have not picked up any yet","\u307E\u3060\u62FE\u3063\u3066\u3044\u307E\u305B\u3093"]])}var lg="rio-album",ul=[["koi","Carpa koi","Koi carp","\u9326\u9BC9","Se acercan despacio y nadan junto a la canoa, como si te conocieran.","They drift close and swim beside the canoe as if they knew you.","\u3086\u3063\u304F\u308A\u8FD1\u3065\u3044\u3066\u3001\u30AB\u30CC\u30FC\u306E\u305D\u3070\u3092\u6CF3\u304E\u307E\u3059\u3002\u307E\u308B\u3067\u77E5\u308A\u5408\u3044\u306E\u3088\u3046\u306B\u3002"],["pato","Pato del r\xEDo","River duck","\u5DDD\u306E\u30AB\u30E2","Decide acompa\xF1arte un rato y luego sigue su camino.","Chooses to keep you company for a while, then goes its own way.","\u3057\u3070\u3089\u304F\u5BC4\u308A\u305D\u3063\u3066\u304F\u308C\u3066\u3001\u3084\u304C\u3066\u81EA\u5206\u306E\u9053\u3078\u3002"],["garza","Garza blanca","White heron","\u30B7\u30E9\u30B5\u30AE","Pesca sin prisa. Alza el vuelo solo cuando pasas muy cerca.","Fishes without hurry. Takes flight only when you pass very close.","\u6025\u304C\u305A\u9B5A\u3092\u5F85\u3061\u307E\u3059\u3002\u3068\u3066\u3082\u8FD1\u304F\u3092\u901A\u308B\u3068\u98DB\u3073\u7ACB\u3061\u307E\u3059\u3002"],["libelula","Lib\xE9lula","Dragonfly","\u30C8\u30F3\u30DC","Se posa un instante en la proa y se va, ligera como un pensamiento.","Lands on the bow for an instant and leaves, light as a thought.","\u8239\u9996\u306B\u305D\u3063\u3068\u6B62\u307E\u3063\u3066\u3001\u8003\u3048\u3054\u3068\u306E\u3088\u3046\u306B\u8EFD\u304F\u53BB\u308A\u307E\u3059\u3002"],["loto","Flor de loto","Lotus flower","\u84EE\u306E\u82B1","Abre al anochecer en los estanques tranquilos.","Opens at dusk in the quiet ponds.","\u9759\u304B\u306A\u6C60\u3067\u5915\u66AE\u308C\u306B\u958B\u304D\u307E\u3059\u3002"],["festival","Festival de linternas","Lantern festival","\u3061\u3087\u3046\u3061\u3093\u796D\u308A","La aldea enciende farolillos para quien llega de noche.","The village lights lanterns for whoever arrives at night.","\u591C\u306B\u7740\u3044\u305F\u4EBA\u306E\u305F\u3081\u306B\u3001\u6751\u304C\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3057\u307E\u3059\u3002"]],zo=null,cg=()=>{if(zo)return zo;try{zo=JSON.parse(localStorage.getItem(lg)||"{}")||{}}catch{zo={}}return zo};function Nf(i){try{ag(i)}catch{}i.add(ul.map(t=>[t[1],t[2],t[3]])),i.add(ul.map(t=>[t[4],t[5],t[6]])),i.add([["Cuaderno del r\xEDo","River notebook","\u5DDD\u306E\u30CE\u30FC\u30C8"],["A\xFAn no lo has visto","You have not seen this yet","\u307E\u3060\u898B\u3066\u3044\u307E\u305B\u3093"],["Nueva anotaci\xF3n en el cuaderno del r\xEDo","New entry in the river notebook","\u5DDD\u306E\u30CE\u30FC\u30C8\u306B\u65B0\u3057\u3044\u8A18\u9332"],["Se llena solo, a su ritmo. No hay prisa.","It fills by itself, at its own pace. No rush.","\u3086\u3063\u304F\u308A\u3001\u3072\u3068\u308A\u3067\u306B\u57CB\u307E\u3063\u3066\u3044\u304D\u307E\u3059\u3002"],["Cerrar","Close","\u9589\u3058\u308B"],["Anotado: ","Noted: ","\u8A18\u9332: "],["anotaciones","entries","\u4EF6"]])}function Er(i){let t=cg();if(t[i])return;t[i]=Date.now(),zo=t;try{localStorage.setItem(lg,JSON.stringify(t))}catch{}let e=ul.find(n=>n[0]===i);try{window.UX&&UX.say&&UX.say(UX.tr("Anotado: ")+UX.tr(e[1]))}catch{}}function Uf(i){i=i||(window.UX?UX.tr:(a=>a));let t=cg(),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;z-index:80;display:grid;place-items:center;background:rgba(14,16,36,.88);padding:12px";let n=document.createElement("div");n.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(92vw,460px);max-height:82vh;overflow:auto;font:15px/1.45 system-ui";let s=document.createElement("h2");s.style.cssText="margin:0 0 4px;font:600 1.15rem system-ui",s.textContent=i("Cuaderno del r\xEDo");let r=document.createElement("div");r.style.cssText="opacity:.65;font-size:.8rem;margin-bottom:12px",r.textContent=i("Se llena solo, a su ritmo. No hay prisa."),n.append(s,r),ul.forEach(a=>{let l=!!t[a[0]],c=document.createElement("div");c.style.cssText="margin:0 0 12px;padding:10px 12px;border-radius:12px;background:"+(l?"rgba(255,233,184,.10)":"rgba(255,255,255,.04)")+";"+(l?"":"opacity:.55");let h=document.createElement("div");h.style.cssText="font-weight:600",h.textContent=(l?"\u2726 ":"\xB7 ")+(l?i(a[1]):"?");let u=document.createElement("div");u.style.cssText="font-size:.88em;opacity:.85",u.textContent=i(l?a[4]:"A\xFAn no lo has visto"),c.append(h,u),n.appendChild(c)});{let a=document.createElement("div");a.style.cssText="font-weight:600;margin:14px 0 6px",a.textContent=i("Farolillos del d\xEDa")+" \xB7 "+sg(),n.appendChild(a);let l=rg().slice().reverse();if(!l.length){let c=document.createElement("div");c.style.cssText="opacity:.55;font-size:.88em;margin-bottom:12px",c.textContent=i("A\xFAn no recoges ninguno"),n.appendChild(c)}l.forEach(c=>{let h=document.createElement("div");h.style.cssText="margin:0 0 8px;padding:8px 12px;border-radius:12px;background:rgba(255,233,184,.08);font-size:.88em",h.textContent="\u{1F3EE} "+i(Oo[c[1]][0]),n.appendChild(h)})}let o=document.createElement("button");o.type="button",o.textContent=i("Cerrar"),o.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",o.onclick=()=>e.remove(),n.appendChild(o),e.appendChild(n),e.onclick=a=>{a.target===e&&e.remove()},document.body.appendChild(e)}var ZS=["es","en","ja"],ri="es";try{let i=localStorage.getItem("rio3d-lang");ri=ZS.includes(i)?i:"es"}catch{}var Ff=()=>ri,hg=i=>{try{localStorage.setItem("rio3d-lang",i)}catch{}},JS=[["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["Linternas","Lanterns","\u30E9\u30F3\u30BF\u30F3"],["m \xB7 Lugares","m \xB7 Places","m \xB7 \u5834\u6240"],["Vista 1\xAA","View 1st","\u4E00\u4EBA\u79F0"],["Vista 3\xAA","View 3rd","\u4E09\u4EBA\u79F0"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["Foto","Photo","\u5199\u771F"],["Diario","Journal","\u65E5\u8A18"],["Ajustes","Settings","\u8A2D\u5B9A"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Amanecer","Dawn","\u591C\u660E\u3051"],["D\xEDa","Day","\u663C"],["Atardecer","Dusk","\u5915\u66AE\u308C"],["Noche","Night","\u591C"],["Madrugada","Predawn","\u660E\u3051\u65B9"],["La corriente te lleva \xB7 mant\xE9n presionado y desliza a los lados para dirigir","The current carries you \xB7 press and slide sideways to steer","\u6D41\u308C\u306B\u8EAB\u3092\u307E\u304B\u305B\u3066 \xB7 \u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u64CD\u4F5C"],["Navega por un r\xEDo de niebla, en primera o tercera persona. Sin prisa y sin puntaje: la corriente te lleva y t\xFA solo diriges la canoa.","Drift down a misty river in first or third person. No rush, no score: the current carries you and you just steer the canoe.","\u9727\u306E\u5DDD\u3092\u4E00\u4EBA\u79F0\u307E\u305F\u306F\u4E09\u4EBA\u79F0\u3067\u9032\u307F\u307E\u3059\u3002\u6025\u3050\u5FC5\u8981\u3082\u5F97\u70B9\u3082\u3042\u308A\u307E\u305B\u3093\u3002\u6D41\u308C\u304C\u904B\u3093\u3067\u304F\u308C\u308B\u306E\u3067\u3001\u30AB\u30CC\u30FC\u306E\u5411\u304D\u3060\u3051\u64CD\u4F5C\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],["Dirigir:","Steer:","\u64CD\u4F5C:"],["mant\xE9n presionado y mueve el dedo o el rat\xF3n a los lados (o usa las flechas A / D).","press and move your finger or mouse sideways (or use the A / D arrow keys).","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u6307\u3084\u30DE\u30A6\u30B9\u3092\u5DE6\u53F3\u306B\u52D5\u304B\u3057\u307E\u3059\uFF08A / D \u30AD\u30FC\u3082\u4F7F\u3048\u307E\u3059\uFF09\u3002"],["Mejor con auriculares: el sonido es espacial.","Best with headphones: the sound is spatial.","\u30D8\u30C3\u30C9\u30DB\u30F3\u63A8\u5968\uFF1A\u7ACB\u4F53\u97F3\u97FF\u3067\u3059\u3002"],["Entrar al r\xEDo","Enter the river","\u5DDD\u306B\u5165\u308B"],["Empezar desde el principio","Start from the beginning","\u6700\u521D\u304B\u3089\u59CB\u3081\u308B"],["Tono suave","Soft tone","\u3084\u308F\u3089\u304B\u3044\u97F3"],["Suaviza los sonidos agudos","Softens high-pitched sounds","\u9AD8\u3044\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3059"],["Dormir","Sleep","\u304A\u3084\u3059\u307F"],["Baja el sonido y la luz poco a poco","Gradually lowers sound and light","\u97F3\u3068\u660E\u304B\u308A\u3092\u5C11\u3057\u305A\u3064\u4E0B\u3052\u307E\u3059"],["Castillo de la Garza Blanca","White Heron Castle","\u767D\u9DFA\u57CE"],["Rugido del drag\xF3n","Dragon roar","\u7ADC\u306E\u5486\u54EE"],["El drag\xF3n anuncia el Castillo de la Garza Blanca","The dragon heralds White Heron Castle","\u7ADC\u304C\u767D\u9DFA\u57CE\u306E\u5230\u6765\u3092\u544A\u3052\u307E\u3059"],["Puente de madera","Wooden bridge","\u6728\u306E\u6A4B"],["Torii sobre el agua","Torii over the water","\u6C34\u4E0A\u306E\u9CE5\u5C45"],["Aldea de farolillos","Lantern village","\u3061\u3087\u3046\u3061\u3093\u306E\u6751"],["Jard\xEDn de sakura","Sakura garden","\u685C\u306E\u5EAD"],["Ca\xF1averal de las garzas","Heron reedbed","\u30B5\u30AE\u306E\u8466\u539F"],["Templo de la campana","Bell temple","\u9418\u306E\u5BFA"],["Cascadita de musgo","Mossy waterfall","\u82D4\u306E\u5C0F\u3055\u306A\u6EDD"],["Casa de t\xE9","Tea house","\u8336\u5C4B"],["Bosque de bamb\xFA","Bamboo forest","\u7AF9\u6797"],["Estanque de lotos","Lotus pond","\u84EE\u306E\u6C60"],["Jard\xEDn de hortensias","Hydrangea garden","\u3042\u3058\u3055\u3044\u306E\u5EAD"],["Jard\xEDn de arces","Maple garden","\u3082\u307F\u3058\u306E\u5EAD"],["Jard\xEDn de ciruelos","Plum garden","\u6885\u306E\u5EAD"],["Primavera","Spring","\u6625"],["Verano","Summer","\u590F"],["Oto\xF1o","Autumn","\u79CB"],["Invierno","Winter","\u51AC"],["Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.","Every lantern is a note. Follow the river at your own pace.","\u30E9\u30F3\u30BF\u30F3\u306F\u3072\u3068\u3064\u3072\u3068\u3064\u304C\u97F3\u3067\u3059\u3002\u81EA\u5206\u306E\u30DA\u30FC\u30B9\u3067\u5DDD\u3092\u9032\u307F\u307E\u3057\u3087\u3046\u3002"],["De vuelta al inicio del r\xEDo","Back at the start of the river","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3057\u305F"],["Empieza una llovizna suave","A soft drizzle begins","\u3084\u3055\u3057\u3044\u9727\u96E8\u304C\u964D\u308A\u306F\u3058\u3081\u307E\u3057\u305F"],["Las garzas alzan el vuelo a tu paso","Herons take flight as you pass","\u901A\u308A\u904E\u304E\u308B\u3068\u30B5\u30AE\u304C\u98DB\u3073\u7ACB\u3061\u307E\u3059"],["Llevas un buen rato en el r\xEDo: respira hondo y estira un poco los hombros.","You have been on the river a while: breathe deeply and stretch your shoulders.","\u3057\u3070\u3089\u304F\u5DDD\u306B\u3044\u307E\u3059\u306D\u3002\u6DF1\u547C\u5438\u3057\u3066\u3001\u80A9\u3092\u5C11\u3057\u306E\u3070\u3057\u307E\u3057\u3087\u3046\u3002"],["Los peces se acercan a nadar contigo","Fish swim up to keep you company","\u9B5A\u304C\u5BC4\u3063\u3066\u304D\u3066\u4E00\u7DD2\u306B\u6CF3\u304E\u307E\u3059"],["Un pato decide acompa\xF1arte","A duck decides to join you","\u30AB\u30E2\u304C\u3064\u3044\u3066\u304D\u307E\u3059"],["Una lib\xE9lula se pos\xF3 en la proa de tu canoa","A dragonfly landed on the bow of your canoe","\u30C8\u30F3\u30DC\u304C\u30AB\u30CC\u30FC\u306E\u8239\u9996\u306B\u3068\u307E\u308A\u307E\u3057\u305F"],["Festival de linternas: la aldea celebra esta noche","Lantern festival: the village celebrates tonight","\u30E9\u30F3\u30BF\u30F3\u796D\u308A\uFF1A\u4ECA\u591C\u3001\u6751\u304C\u304A\u795D\u3044\u3057\u3066\u3044\u307E\u3059"],["Arrastra para mirar \xB7 pellizca para acercar","Drag to look \xB7 pinch to zoom","\u30C9\u30E9\u30C3\u30B0\u3067\u898B\u56DE\u3059 \xB7 \u30D4\u30F3\u30C1\u3067\u62E1\u5927"],["A\xFAn por descubrir","Yet to discover","\u672A\u767A\u898B"],["Sigue r\xEDo abajo","Keep going downstream","\u5DDD\u3092\u4E0B\u308A\u307E\u3057\u3087\u3046"],["Vuelve a pasar para fotografiarlo","Pass by again to photograph it","\u3082\u3046\u4E00\u5EA6\u901A\u3063\u3066\u64AE\u5F71\u3057\u307E\u3057\u3087\u3046"],["Las luces sobre el agua son linternas: pasa cerca para recogerlas","The lights on the water are lanterns: pass close to collect them","\u6C34\u9762\u306E\u5149\u306F\u30E9\u30F3\u30BF\u30F3\u3067\u3059\u3002\u8FD1\u3065\u304F\u3068\u96C6\u3081\u3089\u308C\u307E\u3059"],["Mant\xE9n presionado y desliza a los lados para dirigir la canoa","Press and slide sideways to steer the canoe","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u30AB\u30CC\u30FC\u3092\u64CD\u4F5C\u3057\u307E\u3059"],["Con Foto puedes guardar un momento; con Diario ves tus lugares","Use Photo to keep a moment; use Journal to see your places","\u300C\u5199\u771F\u300D\u3067\u77AC\u9593\u3092\u6B8B\u3057\u3001\u300C\u65E5\u8A18\u300D\u3067\u8A2A\u308C\u305F\u5834\u6240\u3092\u898B\u3089\u308C\u307E\u3059"],["Tu linterna se queda aqu\xED. Vuelve otro d\xEDa y la encontrar\xE1s encendida.","Your lantern stays here. Come back another day and you will find it lit.","\u30E9\u30F3\u30BF\u30F3\u306F\u3053\u3053\u306B\u6B8B\u308A\u307E\u3059\u3002\u307E\u305F\u6765\u308C\u3070\u706F\u3063\u305F\u307E\u307E\u3067\u3059\u3002"],["Salir de foto","Exit photo","\u64AE\u5F71\u3092\u7D42\u4E86"],["Sin filtro","No filter","\u30D5\u30A3\u30EB\u30BF\u30FC\u306A\u3057"],["Natural","Natural","\u30CA\u30C1\u30E5\u30E9\u30EB"],["C\xE1lido","Warm","\u6696\u8272"],["Bruma","Mist","\u9727"],["Tinta","Ink","\u6C34\u58A8"],["Noche azul","Blue night","\u9752\u3044\u591C"],["Hora","Time","\u6642\u523B"],["Zoom","Zoom","\u30BA\u30FC\u30E0"],["Vista","View","\u8996\u70B9"],["Marco","Frame","\u30D5\u30EC\u30FC\u30E0"],["Cerrar","Close","\u9589\u3058\u308B"],["Diario del r\xEDo","River journal","\u5DDD\u306E\u65E5\u8A18"],["\xBFVolver al inicio del r\xEDo?","Go back to the start of the river?","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3059\u304B\uFF1F"],["Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.","You return to the wooden bridge. You keep your journal, your photos and the lanterns you released.","\u6728\u306E\u6A4B\u306B\u623B\u308A\u307E\u3059\u3002\u65E5\u8A18\u3001\u5199\u771F\u3001\u6D41\u3057\u305F\u30E9\u30F3\u30BF\u30F3\u306F\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u3002"],["Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"],["Reiniciar recorrido","Restart the trip","\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3059"],["Calidad","Quality","\u753B\u8CEA"],["Autom\xE1tica","Automatic","\u81EA\u52D5"],["Alta","High","\u9AD8"],["Media","Medium","\u4E2D"],["Baja (m\xE1s fluida)","Low (smoother)","\u4F4E\uFF08\u306A\u3081\u3089\u304B\uFF09"],["Volumen","Volume","\u97F3\u91CF"],["Estaci\xF3n","Season","\u5B63\u7BC0"],["Cambiarla recarga el r\xEDo","Changing it reloads the river","\u5909\u66F4\u3059\u308B\u3068\u5DDD\u3092\u8AAD\u307F\u8FBC\u307F\u76F4\u3057\u307E\u3059"],["Seg\xFAn la fecha","By date","\u65E5\u4ED8\u306B\u5408\u308F\u305B\u308B"],["Fija","Fixed","\u56FA\u5B9A"],["Idioma","Language","\u8A00\u8A9E"],["Subt\xEDtulos de ambiente","Ambient captions","\u74B0\u5883\u97F3\u306E\u5B57\u5E55"],["Describe los sonidos con texto","Describes sounds as text","\u97F3\u3092\u6587\u5B57\u3067\u8868\u793A\u3057\u307E\u3059"],["Vibraci\xF3n suave","Gentle vibration","\u3084\u3055\u3057\u3044\u632F\u52D5"],["Si tu dispositivo la permite","If your device supports it","\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u7AEF\u672B\u306E\u307F"],["Modo una mano","One-hand mode","\u7247\u624B\u30E2\u30FC\u30C9"],["Botones al alcance del pulgar","Buttons within thumb reach","\u89AA\u6307\u304C\u5C4A\u304F\u4F4D\u7F6E\u306B\u30DC\u30BF\u30F3\u3092\u914D\u7F6E"],["No","Off","\u30AA\u30D5"],["S\xED","On","\u30AA\u30F3"],["Derecha","Right","\u53F3"],["Izquierda","Left","\u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"]],$S=new Map(JS.map(i=>[i[0],i])),KS=ri==="en"?1:2;var jS=[[/^Siguiente: (.+) en (\d+) m$/,i=>ri==="en"?`Next: ${Jn(i[1])} in ${i[2]} m`:`\u6B21: ${Jn(i[1])}\uFF08\u3042\u3068${i[2]} m\uFF09`],[/^Descubriste: (.+)$/,i=>ri==="en"?`You discovered: ${Jn(i[1])}`:`\u767A\u898B\uFF1A${Jn(i[1])}`],[/^Continuar \((\d+) m\)$/,i=>ri==="en"?`Continue (${i[1]} m)`:`\u7D9A\u3051\u308B\uFF08${i[1]} m\uFF09`],[/^Soltar linterna \((\d+)\)$/,i=>ri==="en"?`Release lantern (${i[1]})`:`\u30E9\u30F3\u30BF\u30F3\u3092\u6D41\u3059\uFF08${i[1]}\uFF09`],[/^Auto \(ahora ([\d.]+)×\)$/,i=>ri==="en"?`Auto (now ${i[1]}\xD7)`:`\u81EA\u52D5\uFF08\u73FE\u5728 ${i[1]}\xD7\uFF09`],[/^(\d+)\/(\d+) lugares · (.+) · llegaste hasta (\d+) m · linternas soltadas: (\d+)$/,i=>ri==="en"?`${i[1]}/${i[2]} places \xB7 ${Jn(i[3])} \xB7 you reached ${i[4]} m \xB7 lanterns released: ${i[5]}`:`${i[1]}/${i[2]}\u304B\u6240 \xB7 ${Jn(i[3])} \xB7 \u5230\u9054 ${i[4]} m \xB7 \u6D41\u3057\u305F\u30E9\u30F3\u30BF\u30F3: ${i[5]}`],[/^Linternas dejadas: (\d+)$/,i=>ri==="en"?`Lanterns left here: ${i[1]}`:`\u3053\u3053\u306B\u6B8B\u3057\u305F\u30E9\u30F3\u30BF\u30F3: ${i[1]}`],[/^Tu linterna del (.+)$/,i=>ri==="en"?`Your lantern from ${i[1]}`:`${i[1]}\u306E\u30E9\u30F3\u30BF\u30F3`]];function Jn(i){if(ri==="es"||typeof i!="string")return i;let t=i.trim();if(!t)return i;let e=$S.get(t);if(e)return i.replace(t,e[KS]);for(let[n,s]of jS){let r=t.match(n);if(r)return i.replace(t,s(r))}return i}function nu(i){if(i.nodeType===3){let e=Jn(i.nodeValue);e!==i.nodeValue&&(i.nodeValue=e);return}if(i.nodeType!==1||i.tagName==="SCRIPT"||i.tagName==="STYLE")return;i.placeholder&&(i.placeholder=Jn(i.placeholder));let t=i.getAttribute&&i.getAttribute("aria-label");if(t){let e=Jn(t);e!==t&&i.setAttribute("aria-label",e)}for(let e of i.childNodes)nu(e)}function ug(){ri!=="es"&&(document.documentElement.lang=ri,nu(document.body),new MutationObserver(i=>{for(let t of i)t.type==="characterData"?nu(t.target):t.addedNodes.forEach(nu)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0}))}function dg(i){let{R:t,scene:e,cam:n,canvas:s,el:r,toast:o,P:a,LM:l,lmFound:c,lmPos:h,LMS:u,mkLantern:d,cx:f,hw:m,A:x,SEAS:g,seasonIdx:p}=i,y={photo:!1,want:null},M={get(K,wt){try{let Me=localStorage.getItem(K);return Me===null?wt:Me}catch{return wt}},set(K,wt){try{return localStorage.setItem(K,wt),!0}catch{return!1}},del(K){try{localStorage.removeItem(K)}catch{}}},v=g[p()],S=document.createElement("style");S.textContent=`
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
  `,document.head.appendChild(S);let b=Math.min(devicePixelRatio||1,2),T=[.7,.85,1,1.25,1.5],_=0;T.forEach((K,wt)=>{K<=b+.001&&(_=wt)});let w=M.get("rio3d-q","auto"),R=Math.min(_,3),I=_,L=1/60,D=0,C=5,U=0,z=0,k=0,j=0,B={hi:1.5,mid:1,lo:.7},V=()=>y.photo?Math.min(b,1.75):Math.min(w==="auto"?T[R]:B[w]||1,b);function J(){let K=V();Math.abs(K-j)>.01&&(j=K,t.setPixelRatio(K),t.setSize(innerWidth,innerHeight,!1),Rt())}y.tick=function(K){if(!(document.hidden||!i.started()||y.photo)&&(K=Math.min(K,.1),L+=(K-L)*.04,D+=K,!(D<1))){if(D=0,w!=="auto"){J();return}if(C>0){C--,j||J();return}L>.027?(z++,U=0):L<.0185?(U++,z=0):(U=0,z=0),z>=2&&R>0?(R--,z=0,C=6,k&&performance.now()-k<3e4&&(I=Math.min(I,R)),J()):U>=12&&R<Math.min(I,_)&&(R++,U=0,C=10,k=performance.now(),J())}};let mt=()=>w==="auto"?"Auto (ahora "+Math.min(T[R],b).toFixed(2)+"\xD7)":"Fija",At={none:{n:"Sin filtro"},nat:{n:"Natural",t:[1,1,1],sat:1.06,con:1.04,lift:0,vig:.35,glow:.2,grain:0},warm:{n:"C\xE1lido",t:[1.1,1,.86],sat:1.12,con:1.05,lift:.02,vig:.4,glow:.3,grain:.02},mist:{n:"Bruma",t:[.97,1,1.04],sat:.92,con:.92,lift:.07,vig:.3,glow:.5,grain:.02},ink:{n:"Tinta",t:[1,.97,.9],sat:0,con:1.28,lift:.05,vig:.55,glow:.2,grain:.05},moon:{n:"Noche azul",t:[.74,.9,1.18],sat:.85,con:1.08,lift:0,vig:.5,glow:.55,grain:.03}},le=M.get("rio3d-filter","nat");At[le]||(le="nat");let se=M.get("rio3d-frame","1")==="1",Yt=null,nt=new mr,ot=new Zs(-1,1,1,-1,0,1),bt=new sn({depthTest:!1,depthWrite:!1,uniforms:{tex:{value:null},px:{value:new ut},tint:{value:new N(1,1,1)},sat:{value:1},con:{value:1},lift:{value:0},vig:{value:0},glow:{value:0},grain:{value:0},time:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tex;uniform vec2 px;uniform vec3 tint;uniform float sat,con,lift,vig,glow,grain,time;
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
    }`});nt.add(new $(new an(2,2),bt));let Ot=new ut;function Rt(){Yt&&(t.getDrawingBufferSize(Ot),(Yt.width!==Ot.x||Yt.height!==Ot.y)&&Yt.setSize(Ot.x,Ot.y))}function Jt(){if(Yt){Rt();return}t.getDrawingBufferSize(Ot);try{Yt=new Un(Ot.x,Ot.y,{samples:4,type:gi,depthBuffer:!0})}catch{Yt=new Un(Ot.x,Ot.y,{samples:4,depthBuffer:!0})}}y.render=function(){let K=At[le];if(y.photo&&K.t){Jt(),t.setRenderTarget(Yt),t.render(e,n),t.setRenderTarget(null);let wt=bt.uniforms;wt.tex.value=Yt.texture,wt.px.value.set(1/Yt.width,1/Yt.height),wt.tint.value.set(K.t[0],K.t[1],K.t[2]),wt.sat.value=K.sat,wt.con.value=K.con,wt.lift.value=K.lift,wt.vig.value=K.vig,wt.glow.value=K.glow,wt.grain.value=K.grain,wt.time.value=a.t%10,t.render(nt,ot)}else t.render(e,n);if(y.want){let wt=y.want;y.want=null;try{wt()}catch(Me){console.error("want",Me&&Me.message)}}};let De=new N(0,1,0),rt=new N(1,0,0),ht=new fn,ft=new fn,dt=0,xt=0,Nt=1,Gt=0,$t=0,ie=1;y.camAdjust=function(){Gt+=(dt-Gt)*.25,$t+=(xt-$t)*.25,ie+=(Nt-ie)*.25,(Math.abs(Gt)>1e-4||Math.abs($t)>1e-4)&&(ht.setFromAxisAngle(De,Gt),ft.setFromAxisAngle(rt,$t),n.quaternion.premultiply(ht).multiply(ft)),Math.abs(ie-1)>.001&&(n.fov=Math.max(18,Math.min(110,n.fov*ie)),n.updateProjectionMatrix())};let O=new Map,Ae=0;s.addEventListener("pointerdown",K=>{if(y.photo&&(s.setPointerCapture(K.pointerId),O.set(K.pointerId,[K.clientX,K.clientY]),O.size===2)){let wt=[...O.values()];Ae=Math.hypot(wt[0][0]-wt[1][0],wt[0][1]-wt[1][1])}}),s.addEventListener("pointermove",K=>{if(!y.photo||!O.has(K.pointerId))return;let wt=O.get(K.pointerId),Me=K.clientX-wt[0],Re=K.clientY-wt[1];if(wt[0]=K.clientX,wt[1]=K.clientY,O.size===1){let re=.0045*Nt;dt-=Me*re,xt=Math.max(-1.05,Math.min(1.05,xt-Re*re))}else if(O.size===2){let re=[...O.values()],de=Math.hypot(re[0][0]-re[1][0],re[0][1]-re[1][1]);Ae>0&&(Nt=Math.max(.35,Math.min(1.35,Nt*Ae/de))),Ae=de,zt.value=Nt}});let ge=K=>{O.delete(K.pointerId),Ae=0};s.addEventListener("pointerup",ge),s.addEventListener("pointercancel",ge),s.addEventListener("wheel",K=>{y.photo&&(Nt=Math.max(.35,Math.min(1.35,Nt*(1+Math.sign(K.deltaY)*.06))),zt.value=Nt,K.preventDefault())},{passive:!1});let P=r("hud"),E=r("hr"),q=r("menu"),X=r("more"),et=(K,wt,Me,Re)=>{let re=document.createElement("button");return re.id=K,re.type="button",re.textContent=wt,Me?q.insertBefore(re,Re||null):E.insertBefore(re,Re||r("cam")),re};X.onclick=K=>{K.stopPropagation(),q.hidden=!q.hidden,X.setAttribute("aria-expanded",String(!q.hidden))},document.addEventListener("click",K=>{(!q.hidden&&!E.contains(K.target)||!q.hidden&&q.contains(K.target)&&K.target.tagName==="BUTTON"&&K.target.id!=="snd")&&(q.hidden=!0,X.setAttribute("aria-expanded","false"))});let gt=et("pauseB","Pausa");gt.dataset.pz="1";let vt=et("photoB","Foto"),it=et("diaryB","Diario",!0,r("snd")),at=et("setB","Ajustes",!0,r("snd")),St=et("restB","Reiniciar",!0),Dt=document.createElement("div");Dt.id="xph",Dt.className="xp",Dt.hidden=!0,Dt.innerHTML=`<div class="fr" id="xfl"></div>
  <div class="fr"><label>Hora <input id="xhr" type="range" min="0" max="1" step=".002"></label><label>Zoom <input id="xzm" type="range" min=".35" max="1.35" step=".01"></label>
  <button class="chip2" id="xvw">Vista</button><button class="chip2" id="xfm">Marco</button></div>
  <button id="xshut" aria-label="Tomar foto"></button>`,document.body.appendChild(Dt);let _t=document.createElement("button");_t.id="xclose",_t.textContent="Salir de foto",_t.hidden=!0,document.body.appendChild(_t);let yt=document.createElement("div");yt.id="xflash",document.body.appendChild(yt);let zt=Dt.querySelector("#xzm"),Zt=Dt.querySelector("#xhr"),he=Dt.querySelector("#xfl"),G=Dt.querySelector("#xfm"),Mt={};Object.keys(At).forEach(K=>{let wt=document.createElement("button");wt.className="chip2",wt.textContent=At[K].n,wt.onclick=()=>{le=K,M.set("rio3d-filter",K),st()},he.appendChild(wt),Mt[K]=wt});function st(){for(let K in Mt)Mt[K].classList.toggle("on",K===le);G.classList.toggle("on",se)}G.onclick=()=>{se=!se,M.set("rio3d-frame",se?"1":"0"),st()},Dt.querySelector("#xvw").onclick=()=>i.setCam(1-i.getCam()),zt.oninput=()=>{Nt=+zt.value},Zt.oninput=()=>i.setTod(+Zt.value);let Et=["hud","next","hint","toast","lantB"],Pt=()=>[...document.body.children].filter(K=>K.tagName==="DIV"&&/pointer-events:none/.test(K.style.cssText)&&K.id!=="xflash");function ct(K){K!==y.photo&&(K&&!i.started()||(y.photo=K,document.body.classList.toggle("photo",K),Et.forEach(wt=>{let Me=r(wt)||document.getElementById(wt);Me&&(Me.style.visibility=K?"hidden":"")}),Pt().forEach(wt=>wt.style.visibility=K?"hidden":""),Dt.hidden=!K,_t.hidden=!K,K?(dt=xt=0,Nt=1,zt.value=1,Zt.value=i.getTod(),st(),J(),o("Arrastra para mirar \xB7 pellizca para acercar")):(dt=xt=0,Nt=1,O.clear(),J(),Xr())))}vt.onclick=()=>ct(!0),_t.onclick=()=>ct(!1),addEventListener("keydown",K=>{K.code==="KeyP"&&ct(!y.photo),K.code==="Escape"&&y.photo&&ct(!1),K.code==="Enter"&&y.photo&&Vt()});function Vt(){y.want=()=>{yt.style.transition="none",yt.style.opacity=.35,requestAnimationFrame(()=>{yt.style.transition="opacity .5s",yt.style.opacity=0});let K=s.width,wt=s.height,Me=s;if(se){let Re=Math.round(K*.03),re=Math.round(K*.065),de=document.createElement("canvas");de.width=K+2*Re,de.height=wt+Re+re;let te=de.getContext("2d");te.fillStyle="#f3ead6",te.fillRect(0,0,de.width,de.height),te.drawImage(s,Re,Re,K,wt);let On=i.nearLM(a.dist||0),Xi=Math.round(re*.4);te.fillStyle="#5a4a3c",te.font=Xi+"px Georgia,serif",te.textBaseline="middle",te.fillText("R\xEDo 3D"+(On?"  \xB7  "+Jn(On):""),Re,wt+Re+re*.52),te.textAlign="right",te.fillStyle="#8a7a68",te.fillText(Math.round(a.dist||0)+" m  \xB7  "+Jn(v.name)+"  \xB7  "+Jn(i.todName(i.getTod())),de.width-Re,wt+Re+re*.52),Me=de}Me.toBlob(Re=>{if(!Re)return;let re=new File([Re],"rio3d-"+Date.now()+".jpg",{type:"image/jpeg"}),de=()=>{let te=document.createElement("a");te.href=URL.createObjectURL(Re),te.download=re.name,document.body.appendChild(te),te.click(),setTimeout(()=>{URL.revokeObjectURL(te.href),te.remove()},4e3)};navigator.canShare&&navigator.canShare({files:[re]})?navigator.share({files:[re],title:"R\xEDo 3D"}).catch(te=>{te&&te.name!=="AbortError"&&de()}):de()},"image/jpeg",.92)}}Dt.querySelector("#xshut").onclick=Vt;let Bt=K=>"rio3d-snap-"+K,ze=new Set;for(let K=0;K<l.length;K++)M.get(Bt(K),null)&&ze.add(K);y.hasSnap=K=>ze.has(K),y.snap=function(K){y.want=()=>{let Me=Math.round(420*s.height/s.width),Re=document.createElement("canvas");Re.width=420,Re.height=Me,Re.getContext("2d").drawImage(s,0,0,420,Me);let re=Re.toDataURL("image/jpeg",.72);M.set(Bt(K),re)&&(ze.add(K),M.set("rio3d-snapd-"+K,new Date().toISOString().slice(0,10)))}},y.found=K=>{M.get("rio3d-snapd-"+K,null)||M.set("rio3d-snapd-"+K,new Date().toISOString().slice(0,10))};let Ne=K=>K?new Date(K+"T12:00:00").toLocaleDateString(Ff(),{day:"numeric",month:"short"}):"",qn=K=>{let wt=document.createElement("div");return wt.className="xp xm",wt.innerHTML='<div><button class="close">Cerrar</button>'+K+"</div>",wt.onclick=Me=>{(Me.target===wt||Me.target.classList.contains("close"))&&wt.remove()},document.body.appendChild(wt),wt};it.onclick=()=>{let K=ci(),wt=new Array(l.length).fill(0);K.forEach(re=>{let de=Math.round((re.s-240)/u);wt[i.lmType(de)]++});let Me=+M.get("rio3d-pos","0"),Re='<h2>Diario del r\xEDo</h2><p style="margin:0 0 12px;color:var(--muted)">'+c.size+"/"+l.length+" lugares \xB7 "+v.name+" \xB7 llegaste hasta "+Me+" m \xB7 linternas soltadas: "+K.length+'</p><div class="xgrid">';l.forEach((re,de)=>{let te=c.has(de),On=te&&M.get(Bt(de),null);Re+='<div class="xcard'+(te?"":" no")+'"><div class="im"'+(On?' style="background-image:url('+On+')"':"")+">"+(On?"":te?"?":"\xB7")+'</div><div class="tx"><b>'+(te?re:"A\xFAn por descubrir")+"</b>"+(te?On?Ne(M.get("rio3d-snapd-"+de,"")):"Vuelve a pasar para fotografiarlo":"Sigue r\xEDo abajo")+(wt[de]?"<br>Linternas dejadas: "+wt[de]:"")+"</div></div>"}),qn(Re+"</div>")};let ci=()=>{try{return JSON.parse(M.get("rio3d-left","[]"))||[]}catch{return[]}},fs=ci(),Wr=new Map,aa=[],qr=new Set,Ds=document.createElement("button");Ds.id="lantB",document.body.appendChild(Ds),Ds.hidden=!0;function Xr(){let K=i.getCount();Ds.hidden=!(i.started()&&K>0&&!y.photo),Ds.textContent="Soltar linterna ("+K+")"}Ds.onclick=()=>{if(i.getCount()<=0||y.photo)return;let K=-a.pz+7,wt=Math.max(-m(K)+4,Math.min(m(K)-4,a.px+Math.sin(a.psi)*7-f(K)));fs.push({s:Math.round(K*10)/10,e:Math.round(wt*10)/10,t:Date.now()}),fs.length>80&&fs.shift(),M.set("rio3d-left",JSON.stringify(fs)),i.setCount(i.getCount()-1);try{x.plop(0)}catch{}i.spawnRipple(f(K)+wt,-K),Xr(),fs.length===1&&o("Tu linterna se queda aqu\xED. Vuelve otro d\xEDa y la encontrar\xE1s encendida.")},y.update=function(K,wt){if(!i.started())return;kl(K),((y.update.n=(y.update.n||0)+1)&15)===0&&Xr();let Me=a.t,Re=i.glowK();for(let[re,de]of Wr){let te=fs[re];(!te||te.s<wt-70||te.s>wt+280)&&(e.remove(de),aa.push(de),Wr.delete(re))}fs.forEach((re,de)=>{if(re.s<wt-70||re.s>wt+280)return;let te=Wr.get(de);te||(te=aa.pop()||d(),te.scale.setScalar(1.25),te.userData.body.material=te.userData.body.material.clone(),te.userData.body.material.color.set(16773328),e.add(te),Wr.set(de,te)),te.position.set(f(re.s)+re.e+Math.sin(Me*.3+de)*.5,Math.sin(Me*1.1+de)*.04,-re.s),te.rotation.z=Math.sin(Me*.8+de*2)*.08,te.userData.glow.material.opacity=(.6+.3*Re)*(.85+.15*Math.sin(Me*3+de)),te.userData.refl.material.opacity=(.3+.3*Re)*(.9+.1*Math.sin(Me*2+de));let On=te.position.x-a.px,Xi=te.position.z-a.pz;On*On+Xi*Xi<196&&!qr.has(de)&&!y.photo&&(qr.add(de),o("Tu linterna del "+Ne(new Date(re.t).toISOString().slice(0,10))))})},St.onclick=()=>{let K=qn('<h2>\xBFVolver al inicio del r\xEDo?</h2><p style="color:var(--muted);margin:0 0 14px">Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.</p><div class="row"><button class="q" id="xno">Cancelar</button><button class="q" id="xyes" style="background:#ffc77a;color:#3b2a1a">Reiniciar recorrido</button></div>');K.querySelector("#xno").onclick=()=>K.remove(),K.querySelector("#xyes").onclick=()=>{K.remove(),i.restart()}},at.onclick=()=>{let K=qn(`<h2>Ajustes</h2>
    <div class="row"><span>Calidad<br><small style="color:var(--muted)" id="xql"></small></span><select id="xq"><option value="auto">Autom\xE1tica</option><option value="hi">Alta</option><option value="mid">Media</option><option value="lo">Baja (m\xE1s fluida)</option></select></div>
    <div class="row"><span>Volumen</span><input type="range" id="xv" min="0" max="1" step=".05" style="width:55%;accent-color:#ffc77a"></div>
    <div class="row"><span>Estaci\xF3n<br><small style="color:var(--muted)">Cambiarla recarga el r\xEDo</small></span><select id="xs"><option value="auto">Seg\xFAn la fecha</option><option value="0">Primavera</option><option value="1">Verano</option><option value="2">Oto\xF1o</option><option value="3">Invierno</option></select></div>
    <div class="row"><span>Idioma</span><select id="xl"><option value="es">Espa\xF1ol</option><option value="en">English</option><option value="ja">\u65E5\u672C\u8A9E</option></select></div>
    <div class="row"><span>Subt\xEDtulos de ambiente<br><small style="color:var(--muted)">Describe los sonidos con texto</small></span><select id="xsub"><option value="0">No</option><option value="1">S\xED</option></select></div>
    <div class="row"><span>Vibraci\xF3n suave<br><small style="color:var(--muted)">Si tu dispositivo la permite</small></span><select id="xhp"><option value="1">S\xED</option><option value="0">No</option></select></div>
    <div class="row"><span>Modo una mano<br><small style="color:var(--muted)">Botones al alcance del pulgar</small></span><select id="xh"><option value="0">No</option><option value="r">Derecha</option><option value="l">Izquierda</option></select></div>
    <div class="row"><span>Cuaderno del r\xEDo<br><small style="color:var(--muted)">Lo que has visto en el camino</small></span><button id="xalb" type="button">Abrir</button></div>
    <div class="row"><span>Tono suave<br><small style="color:var(--muted)">Suaviza los sonidos agudos</small></span><select id="xsoft"><option value="0">No</option><option value="1">S\xED</option></select></div>
    <div class="row"><span>Dormir<br><small style="color:var(--muted)">Baja el sonido y la luz poco a poco</small></span><select id="xsl"><option value="0">No</option><option value="15">15 min</option><option value="30">30 min</option><option value="45">45 min</option></select></div>`),wt=K.querySelector("#xq"),Me=K.querySelector("#xs"),Re=K.querySelector("#xql"),re=K.querySelector("#xv");re.value=x.vol,re.oninput=()=>{x.setVol(+re.value),M.set("rio3d-vol",re.value)},wt.value=w,Me.value=M.get("rio3d-season","auto"),Re.textContent=mt(),wt.onchange=()=>{w=wt.value,M.set("rio3d-q",w),C=3,J(),Re.textContent=mt()},Me.onchange=()=>{M.set("rio3d-season",Me.value);try{i.savePos()}catch{}location.reload()};let de=K.querySelector("#xl");de.value=Ff(),de.onchange=()=>{hg(de.value);try{i.savePos()}catch{}location.reload()};let te=K.querySelector("#xsub");te.value=M.get("rio3d-subs","0"),te.onchange=()=>M.set("rio3d-subs",te.value);let On=K.querySelector("#xhp");On.value=M.get("rio3d-hap","1"),On.onchange=()=>M.set("rio3d-hap",On.value);let Xi=K.querySelector("#xsoft");Xi.value=UX.api.soft()?"1":"0",Xi.onchange=()=>UX.api.setSoft(Xi.value==="1"),K.querySelector("#xalb").onclick=()=>Uf(UX.tr);let la=K.querySelector("#xsl");la.value=String(UX.api.sleepMin()),la.onchange=()=>UX.api.sleep(+la.value);let Ns=K.querySelector("#xh");Ns.value=M.get("rio3d-hand","0"),Ns.onchange=()=>{M.set("rio3d-hand",Ns.value),document.body.classList.remove("hand-r","hand-l"),Ns.value!=="0"&&document.body.classList.add("hand-"+Ns.value)}};{let K=parseFloat(M.get("rio3d-vol","1"));K>=0&&K<=1&&(x.vol=K)}let Mi=M.get("rio3d-ob","0")==="1"?9:0,Bn=0,qi=r("hint");function kl(K){Mi>=9||!i.started()||(Bn+=K,Mi===0&&Bn>1?(qi.hidden=!1,qi.style.opacity=1,qi.textContent="Mant\xE9n presionado y desliza a los lados para dirigir la canoa",Mi=1,Bn=0):Mi===1&&(Math.abs(a.steer)>.35||Bn>40)?(Mi=2,Bn=0,qi.textContent="Las luces sobre el agua son linternas: pasa cerca para recogerlas"):Mi===2&&(i.getCount()>0||Bn>60)?(Mi=3,Bn=0,qi.textContent="Con Foto puedes guardar un momento; con Diario ves tus lugares"):Mi===3&&Bn>10&&(qi.style.opacity=0,Mi=9,M.set("rio3d-ob","1")))}return bt.uniforms.time.value=0,J(),st(),addEventListener("resize",()=>setTimeout(Rt,50)),y}(function(){if(window.PZ)return;let i=window.PZ={on:!1,ctx:()=>null,started:()=>!0},t=document.createElement("style");t.textContent="#pz{position:fixed;inset:0;z-index:30;display:grid;place-items:center;background:rgba(24,26,56,.64);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);color:#fbf1e0;font-family:system-ui,-apple-system,sans-serif;text-align:center;padding:20px}#pz[hidden]{display:none}#pz .c{display:flex;flex-direction:column;gap:12px;align-items:center}#pz h2{margin:0;font:600 1.7rem system-ui}#pz p{margin:0;color:#cbc8e8;line-height:1.5}#pz button{background:#ffc77a;color:#3b2a1a;border:0;border-radius:99px;padding:13px 32px;font:700 1rem system-ui;cursor:pointer}",document.head.appendChild(t);let e=document.createElement("div");e.id="pz",e.hidden=!0,e.innerHTML='<div class="c"><h2>En pausa</h2><p>Respira con calma.<br>Todo seguir\xE1 aqu\xED cuando vuelvas.</p><button type="button" id="pzGo">Continuar</button></div>';let n=()=>document.body.appendChild(e);document.body?n():addEventListener("DOMContentLoaded",n),i.set=function(s){if(s=!!s,s!==i.on&&!(s&&!i.started())){i.on=s,e.hidden=!s;try{let r=i.ctx();r&&(s?r.suspend():r.resume())}catch{}if(document.querySelectorAll("[data-pz]").forEach(r=>r.textContent=s?"Continuar":"Pausa"),s)try{document.activeElement&&document.activeElement.blur()}catch{}}},i.toggle=()=>i.set(!i.on),i.more=function(s,r,o){if(r=r.filter(Boolean),!s||!r.length)return;let a=document.createElement("style");a.textContent="#pzMore{position:fixed;z-index:25;display:flex;flex-direction:column;gap:6px;padding:8px;min-width:150px;background:rgba(43,45,82,.97);border:1px solid rgba(255,255,255,.22);border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.4)}#pzMore[hidden]{display:none}#pzMore button{display:block;width:100%;text-align:left;background:rgba(255,255,255,.08);color:#fbf1e0;border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:9px 12px;font:600 .88rem system-ui,sans-serif;cursor:pointer}",document.head.appendChild(a);let l=document.createElement("button");l.type="button",l.textContent=o||"M\xE1s",l.className=r[0].className||"",l.id="pzMoreB";let c=document.createElement("div");return c.id="pzMore",c.hidden=!0,r.forEach(h=>{h.removeAttribute("style"),c.appendChild(h)}),s.appendChild(l),document.body.appendChild(c),l.onclick=h=>{if(h.stopPropagation(),c.hidden=!c.hidden,!c.hidden){let u=l.getBoundingClientRect();c.style.top=u.bottom+6+"px",c.style.right=Math.max(8,innerWidth-u.right)+"px"}},document.addEventListener("click",h=>{!c.hidden&&!c.contains(h.target)&&h.target!==l&&(c.hidden=!0)}),addEventListener("resize",()=>{c.hidden=!0}),l},e.querySelector("#pzGo").onclick=()=>i.set(!1),document.addEventListener("keydown",s=>{s.code==="Escape"&&!document.body.classList.contains("photo")&&!document.querySelector(".xm")&&i.toggle()}),document.addEventListener("visibilitychange",()=>{document.hidden&&i.started()&&!i.on&&i.set(!0)}),document.addEventListener("click",s=>{s.target.closest&&s.target.closest("[data-pz]")&&i.toggle()})})();var tt=(i,t=0)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},Fe=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Be=(i,t,e)=>{let n=Fe((e-i)/(t-i));return n*n*(3-2*n)},wr=(i,t,e)=>i+(t-i)*e;function rn(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=tt(e,n),c=tt(e+1,n),h=tt(e,n+1),u=tt(e+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+u)*o*a}var We=i=>document.getElementById(i),Bf=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Ho=(i,t)=>{let e=i-t;for(;e>Math.PI;)e-=6.2832;for(;e<-Math.PI;)e+=6.2832;return e};var dl=11,QS=[0,1,2,4,5,6,7,8,9,3,10],Je=i=>QS[(i%dl+dl)%dl],tE=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-1;n<=e+1;n++)if(Je(n)===6){let s=240+n*260+tt(n,5)*50;t+=1*34*Math.exp(-Math.pow((i-s)/70,2))}return t},ne=i=>Math.sin(i*.0045)*55+Math.sin(i*.0017+1.3)*110+Math.sin(i*.011)*12+tE(i),_e=i=>21+4*Math.sin(i*.003+2)+2*Math.sin(i*.013),xn=i=>Math.atan((ne(i+1)-ne(i-1))/2);function $n(i,t){let e=Math.abs(i-ne(t))-_e(t);if(e<0)return-1.5+1.7*Be(-5,0,e);let n=rn(i*.018,t*.018)*12+rn(i*.055,t*.055)*4;return eE(i,t,.2+.6*Be(0,4,e)+n*Be(5,60,e)+Math.min(e,160)*.1*Be(30,100,e))}var ae={PO:66,PH:7,X:66,ZF:44,ZB:-52,MZ0:50,MZ1:60},fg=new Map;function Of(i){let t=fg.get(i);if(!t){let e=je(i),n=xn(e);t={k:i,s0:e,a:n,x0:ne(e),hw0:_e(e),side:tt(i,9)>.5?1:-1,ca:Math.cos(n),sa:Math.sin(n)},fg.set(i,t)}return t}function fl(i,t,e){let n=t-i.x0,s=i.s0-e,r=n*i.ca+s*i.sa,o=-n*i.sa+s*i.ca;return[i.side*o,-i.side*r+i.hw0+ae.PO]}function Tr(i){let t=Math.round((i-240)/260);for(let e=t-1;e<=t+1;e++)if(Je(e)===10)return Of(e);return null}function eE(i,t,e){let n=Tr(t);if(!n||Math.abs(t-n.s0)>200)return e;let[s,r]=fl(n,i,t);if(r<-130||r>95||Math.abs(s)>150)return e;let o=Math.max(Math.abs(s)-ae.X,r-ae.ZF,ae.ZB-r),a=1-Be(4,70,o);a>0&&(e=e*(1-a)+Math.min(e,3.2)*a);let l=1-Be(0,2,o+1.5);l>0&&(e=e*(1-l)+ae.PH*l);let c=Math.min(Math.max(Math.abs(s)-62,Math.abs(r-53)-7),Math.max(Math.abs(s+50)-6,Math.abs(r-65)-10)),h=1-Be(-.2,2.2,c);return h>0&&(e=e*(1-h)-1.6*h),e}function pg(i,t){let e=Tr(t);if(!e||Math.abs(t-e.s0)>130)return 0;let[n,s]=fl(e,i,t);return 1-Be(0,2,Math.max(Math.abs(n)-ae.X,s-ae.ZF,ae.ZB-s)+1.5)}function zf(i,t){let e=Tr(t);if(!e||Math.abs(t-e.s0)>130)return!1;let[n,s]=fl(e,i,t);return Math.abs(n)<80&&s>-66&&s<72}function ko(i){let t=je(i),e=je(i-1);return e-80>=t-360?e-80:e+80}var Kn=150,jn=120,as=2.6,Qn=3,pl=8,Fn=Qh[tr()],Ri=260,je=i=>240+i*Ri+tt(i,5)*50,Ar=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-2;n<=e+2;n++){let s=Je(n);s===3?t=Math.max(t,1-Be(40,170,Math.abs(je(n)-i))):s===10&&(t=Math.max(t,.9*(1-Be(55,230,Math.abs(je(n)-i)))))}return t},Go=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-2;n<=e+2;n++)Je(n)===8&&(t=Math.max(t,1-Be(70,190,Math.abs(je(n)-i))));return t},Hf=(i,t)=>{let e=Math.round((i-240)/260);for(let n=e-1;n<=e+1;n++){let s=Je(n);if((s===5||s===7)&&Math.abs(je(n)-i)<(s===5?26:12)&&t<(s===5?48:20))return!0}return!1},Vo=i=>Be(.4,.55,rn(i*.0022+31,5)*.6+rn(i*.0053+8,2)*.4),iu=i=>{let t=0,e=Math.floor(i/650);for(let n=e-1;n<=e+1;n++){let s=n*650+250+tt(n,7)*220,r=120+tt(n,8)*70,o=(i-s)/r;t=Math.max(t,Math.exp(-o*o))}return t};var lt={tod:.5,glowK:.3,started:!1,camMode:0,camK:0,count:0,scareT:0,cine:null,cineW:0,savedS:0,X:null},F={px:ne(0),pz:0,psi:0,v:1.5,steer:0,hold:!1,pitch:0,roll:0,stroke:0,side:0,act:0,bumpT:0,dist:0,t:0,key:{up:!1,l:!1,r:!1}};F.pz=-30;F.px=ne(30);F.psi=xn(30);function su(i){F.pz=-i,F.px=ne(i),F.psi=xn(i),F.dist=i}function mg(){lt.cine&&lt.cine.t>1.5&&(lt.cine.t=Math.max(lt.cine.t,lt.cine.dur-2.4))}var ws=document.getElementById("c"),ls=new $h({canvas:ws,antialias:!0,powerPreference:"high-performance"});ls.setPixelRatio(Math.min(devicePixelRatio||1,1.5));var Tt=new mr;Tt.fog=new Ca(13421772,22,250);var pn=new gn(68,1,.05,900);function kf(){let i=innerWidth,t=innerHeight;ls.setSize(i,t,!1),pn.aspect=i/t,pn.fov=i/t<1?82:68,pn.updateProjectionMatrix()}addEventListener("resize",kf);addEventListener("orientationchange",()=>setTimeout(kf,250));kf();document.addEventListener("visibilitychange",()=>{try{oe.ctx&&(document.hidden?oe.ctx.suspend():oe.on&&!PZ.on&&oe.ctx.resume())}catch{}});var Rr=new Xa(16777215,9083528,1.2);Tt.add(Rr);var Ts=new $a(16777215,1);Tt.add(Ts);var ti=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new zi(i)})(),oi=(i,t)=>{let e=new bs(new is({map:ti,color:i,blending:Gn,depthWrite:!1,fog:!1,transparent:!0}));return e.scale.set(t,t,1),e},qt=(i,t)=>new ye(Object.assign({gradientMap:Pe,color:i},t||{}));var Ci=new $(new pe(700,24,16),new sn({side:Tn,depthWrite:!1,fog:!1,uniforms:{top:{value:new pt},hor:{value:new pt},sunDir:{value:new N(0,1,0)},sunCol:{value:new pt},glow:{value:1}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 top,hor,sunDir,sunCol;uniform float glow;
  void main(){vec3 d=normalize(vP);float h=d.y;vec3 c=mix(hor,top,pow(clamp(h,0.,1.),.5));
   float s=max(dot(d,normalize(sunDir)),0.);c+=sunCol*(pow(s,18.)*.45+pow(s,200.)*.6)*glow;
   gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));Ci.renderOrder=-10;Tt.add(Ci);var Wf=oi(16769712,140),qf=oi(14673663,70);Tt.add(Wf,qf);var gg=new ue,xg=new Float32Array(450*3);for(let i=0;i<450;i++){let t=Math.random()*6.283,e=Math.random()*.95+.05,n=Math.sqrt(1-e*e);xg.set([Math.cos(t)*n*680,e*680,Math.sin(t)*n*680],i*3)}gg.setAttribute("position",new Kt(xg,3));var Xf=new wi(gg,new di({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));Tt.add(Xf);var Wo=(i,t,e,n,s,r,o,a,l)=>({t:i,top:new pt(t),hor:new pt(e),fog:new pt(n),sun:new pt(s),hi:r,si:o,night:a,hg:new pt(l)}),ru=[Wo(0,"#242a5c","#6a5c9a","#5b5a92","#9db0ff",.6,.25,1,"#4a5a70"),Wo(.12,"#8fa4d8","#f6c7c0","#efcfcf","#ffd2a8",1.4,.5,.2,"#c4ccc0"),Wo(.35,"#80b9e0","#d6edf0","#cfe7ea","#fff3d6",1.9,1.3,0,"#c8d6c0"),Wo(.6,"#7e79c2","#f9bd9c","#e8b9b3","#ffb98a",1.5,.8,.1,"#c8c4c0"),Wo(.75,"#1f2552","#4a4c88","#3b3f78","#9db0ff",.62,.28,1,"#4a5a70"),Wo(1,"#242a5c","#6a5c9a","#5b5a92","#9db0ff",.6,.25,1,"#4a5a70")],Se={top:new pt,hor:new pt,fog:new pt,sun:new pt,hg:new pt,hi:1,si:1,night:0};function nE(i){let t=0;for(;t<ru.length-2&&i>ru[t+1].t;)t++;let e=ru[t],n=ru[t+1],s=Fe((i-e.t)/(n.t-e.t));["top","hor","fog","sun","hg"].forEach(r=>Se[r].copy(e[r]).lerp(n[r],s)),Se.hi=wr(e.hi,n.hi,s),Se.si=wr(e.si,n.si,s),Se.night=wr(e.night,n.night,s)}var Gf=new N,Vf=new N;function yg(i,t){nE(lt.tod);let e=Math.sin(Math.PI*2*(lt.tod-.12));Gf.set(.25,e,-.9).normalize(),Vf.set(-.25,-e*.9+.05,-.9).normalize(),Tt.fog.color.copy(Se.fog),Ci.material.uniforms.top.value.copy(Se.top),Ci.material.uniforms.hor.value.copy(Se.hor);let n=e>0,s=n?Gf:Vf;Ci.material.uniforms.sunDir.value.copy(s),Ci.material.uniforms.sunCol.value.copy(Se.sun),Ci.material.uniforms.glow.value=n?1:.5,Rr.color.copy(Se.hor).lerp(Se.top,.4),Rr.groundColor.copy(Se.hg),Rr.intensity=Se.hi,Ts.color.copy(Se.sun),Ts.intensity=Se.si,Ts.position.copy(s).multiplyScalar(100).add(new N(i,0,t)),Ts.target.position.set(i,0,t),Ts.target.updateMatrixWorld(),Ci.position.set(i,0,t),Wf.position.set(i,0,t).addScaledVector(Gf,640),qf.position.set(i,0,t).addScaledVector(Vf,640),Wf.material.opacity=Fe(e*4+.2,0,1),qf.material.opacity=Fe(-e*4,0,1)*.9,Xf.position.set(i,0,t),Xf.material.opacity=Fe(Se.night*1.1,0,1),xi.material.uniforms.sunDir.value.copy(s),xi.material.uniforms.sunCol.value.copy(Se.sun).multiplyScalar(Fe(n?e*3:-e*1.5,0,1)),xi.material.uniforms.hor.value.copy(Se.hor),xi.material.uniforms.top.value.copy(Se.top),xi.material.uniforms.fog.value.copy(Se.fog),xi.material.uniforms.night.value=Se.night,lt.glowK=Fe(Se.night*1.2+.25,0,1)}var ou=i=>i<.1?"Madrugada":i<.2?"Amanecer":i<.5?"D\xEDa":i<.68?"Atardecer":i<.92?"Noche":"Madrugada",xi=new $(new an(1e3,1e3),new sn({uniforms:{t:{value:0},deep:{value:new pt("#5a8f9c")},shallow:{value:new pt("#a3c8c4")},hor:{value:new pt},top:{value:new pt},fog:{value:new pt},sunDir:{value:new N(0,1,0)},sunCol:{value:new pt},night:{value:0},fogN:{value:22},fogF:{value:250}},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`varying vec3 vW;uniform float t,night,fogN,fogF;uniform vec3 deep,shallow,hor,top,fog,sunDir,sunCol;
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
    vec3 refl=mix(hor,top,.35);
    float st=wn(vec2(p.x*.07+t*.02,p.y*1.5+t*.25)),st2=wn(vec2(p.x*.16-t*.03,p.y*3.1-t*.4));
    float streak=smoothstep(.62,.9,st)*.55+smoothstep(.66,.92,st2)*.4;
    float dk=smoothstep(.55,.2,wn(vec2(p.x*.05,p.y*.9+t*.15)));
    base=mix(base,base*.78,dk*.6);
    vec3 c=mix(base,refl,clamp(fr*.9+.26,0.,1.));
    c=mix(c,mix(hor,vec3(1.),.55),streak*(1.-night*.7)*.38);
    float sp=smoothstep(.93,1.,wn(p*2.6+vec2(t*.5,-t*.3)));c+=sunCol*sp*.9;
    vec3 h=normalize(sunDir+v);c+=sunCol*pow(max(dot(n,h),0.),90.)*1.4;
    c=mix(c,fog,smoothstep(fogN,fogF,dist));
    gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));xi.rotation.x=-Math.PI/2;Tt.add(xi);function As(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ue,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=vg(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let m=vg(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function vg(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Kt(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let x=h.getComponent(d,m);a.setComponent(d+u,m,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Yf=new Float32Array(Kn*jn*3),Zf=new Float32Array(Kn*jn*3),er=new ue;er.setAttribute("position",new Kt(Yf,3));er.setAttribute("color",new Kt(Zf,3));{let i=new Uint16Array((Kn-1)*(jn-1)*6),t=0;for(let e=0;e<jn-1;e++)for(let n=0;n<Kn-1;n++){let s=e*Kn+n,r=s+1,o=s+Kn,a=o+1;i.set([s,r,o,r,a,o],t),t+=6}er.setIndex(new Kt(i,1))}var _g=new $(er,new ye({vertexColors:!0,gradientMap:Pe}));_g.frustumCulled=!1;Tt.add(_g);var Mg=new pt("#eadcb9"),bg=new pt("#b6dca3"),Sg=new pt("#8fc79b"),Eg=new pt("#bdd6c8"),wg=new pt("#d3cce9"),Tg=new pt("#c8d6c0"),Ag=new pt("#d9b45f"),Rg=new pt("#c8964a"),Cg=new pt("#f6c9d8"),Ig=new pt("#d9d2bf"),$e=new pt,ml=1900;function Pg(i,t,e,n){i=i.index?i.toNonIndexed():i;let s=i.attributes.uv;for(let c=0;c<s.count;c++)s.setXY(c,s.getX(c)*t[0],s.getY(c)*t[1]);i.computeBoundingBox();let r=i.boundingBox.min.y,o=i.boundingBox.max.y,a=i.attributes.position,l=new Float32Array(a.count*3);for(let c=0;c<a.count;c++){let h=e+(n-e)*((a.getY(c)-r)/(o-r||1));l[c*3]=l[c*3+1]=l[c*3+2]=h}return i.setAttribute("color",new Kt(l,3)),i}var Lg=As([[2,2.6,.8],[1.6,2.5,2.4],[1.2,2.3,3.9],[.75,2,5.3]].map(([i,t,e])=>Pg(new Oe(i,t,8,1).translate(0,e+t/2,0),[4,2],.72,1.18)).map(i=>(i.deleteAttribute("normal"),i)));Lg.computeVertexNormals();var Dg=As([[1.9,0,4.3,0],[1.4,1.3,4.9,.5],[1.35,-1.2,4.7,-.6],[1.2,.2,5.7,.3]].map(([i,t,e,n])=>{let s=new bn(i,1);return s.translate(t,e,n),s.deleteAttribute("normal"),Pg(s,[3,3],.82,1.22)}));Dg.computeVertexNormals();var iE=()=>new ye({gradientMap:Pe,color:16777215,vertexColors:!0,map:Ye("leaf")}),gl=new Pn(Lg,new ye({gradientMap:Pe,color:16777215,vertexColors:!0,map:Ye("needle")}),ml),Cr=new Pn(Dg,iE(),ml),xl=new Pn(new Le(.2,.34,4.2,6).translate(0,2.1,0),new ye({gradientMap:Pe,color:9071196,map:Ye("bark")}),ml),yl=new Pn(new fi(.7,10).rotateX(-Math.PI/2),new ye({gradientMap:Pe,color:16777215}),500),vl=new Pn(new bn(.28,0).translate(0,.2,0),new ye({gradientMap:Pe,color:16777215}),160);[gl,Cr,xl,yl,vl].forEach(i=>{i.frustumCulled=!1,Tt.add(i)});var Jf={value:0};function sE(i){return i.onBeforeCompile=t=>{t.uniforms.uSw=Jf,t.vertexShader=`uniform float uSw;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 wp0=modelMatrix*instanceMatrix*vec4(position,1.);float hh=clamp(position.y/1.8,0.,1.);transformed.x+=sin(uSw*1.6+wp0.x*.7+wp0.z*.5)*.2*hh*hh;transformed.z+=cos(uSw*1.3+wp0.z*.6)*.1*hh*hh;`)},i}var $f=(()=>{let i=[];for(let t=0;t<9;t++){let e=t/9*6.28+tt(t,1),n=.9+tt(t,2)*1.3,s=.07,r=Math.cos(e)*.25*tt(t,3),o=Math.sin(e)*.25*tt(t,3),a=(tt(t,4)-.5)*.9,l=new ue,c=new Float32Array([-s,0,0,s,0,0,a*.5-s*.5,n*.6,0,a*.5+s*.5,n*.6,0,a,n,0]);l.setAttribute("position",new Kt(c,3)),l.setIndex([0,1,2,1,3,2,2,3,4]),l.computeVertexNormals();let h=new Float32Array(15);[[.28,.2,.12],[.28,.2,.12],[.62,.5,.24],[.62,.5,.24],[.92,.78,.4]].forEach((d,f)=>h.set(d,f*3)),l.setAttribute("color",new Kt(h,3)),l.rotateY(e),l.translate(r,0,o),i.push(l)}return As(i)})(),Rs=new Pn($f,sE(new ye({gradientMap:Pe,color:16777215,vertexColors:!0,side:me})),1400),rE=(()=>{let i=[],t=new Le(.14,.3,4.2,6).translate(0,2.1,0),e=new Float32Array(t.attributes.position.count*3).fill(.3);return t.setAttribute("color",new Kt(e,3)),i.push(t),[[0,4.3,0,2.8],[1.6,3.7,.6,1.9],[-1.5,3.3,-.8,1.7]].forEach(([n,s,r,o])=>{let a=new pe(1,9,5).toNonIndexed();a.scale(o,o*.28,o),a.translate(n,s,r);let l=a.attributes.position,c=new Float32Array(l.count*3);for(let h=0;h<l.count;h++){let u=.62+.4*Fe((l.getY(h)-s)/(o*.28)*.5+.5);c[h*3]=u*.9,c[h*3+1]=u,c[h*3+2]=u*.92}a.setAttribute("color",new Kt(c,3)),a.deleteAttribute("uv"),i.push(a)}),i[0]=i[0].toNonIndexed(),i[0].deleteAttribute("uv"),As(i)})(),_l=new Pn(rE,new ye({gradientMap:Pe,color:16777215,vertexColors:!0}),400);[Rs,_l].forEach(i=>{i.frustumCulled=!1,Tt.add(i)});var Ng=["#5d7a64","#4f6b5c","#6a8a6e","#566f5d"],au=["#ffffff","#f0e0b0","#e6c98a","#d6b070"],Qe=new be,Sn=new fn,En=new N,un=new N,Cs=new N(0,1,0),Ug=new pt(Fn.gnd),Fg=Fn.pine,Bg=Fn.blos,Og=Vi.blos,zg=Vi.bblos,qo=new Pn(new bn(1,1).scale(1,.72,1).translate(0,.45,0),new ye({gradientMap:Pe,color:16777215,map:Ye("leaf")}),1700);qo.frustumCulled=!1;Tt.add(qo);var Hg=["#6fa383","#7fb592","#5f957a","#8cc09a"],HA=Fn.bblos,oE=(()=>{let i=new Le(.11,.15,1,5,8,!0).translate(0,.5,0).toNonIndexed(),t=i.attributes.position,e=new Float32Array(t.count*3);for(let n=0;n<t.count;n++){let s=t.getY(n),r=Math.round(s*8)%3===0?.68:1;e[n*3]=r,e[n*3+1]=r,e[n*3+2]=r*.95}return i.setAttribute("color",new Kt(e,3)),i.deleteAttribute("uv"),i.computeVertexNormals(),i})(),Ml=new Pn(oE,new ye({gradientMap:Pe,color:16777215,vertexColors:!0}),2e3),bl=new Pn(new bn(1,0).scale(1,.5,1),new ye({gradientMap:Pe,color:16777215}),2e3);[Ml,bl].forEach(i=>{i.frustumCulled=!1,Tt.add(i)});var kg=["#8fc58a","#9fd194","#7bb87f","#a9d89a"],Gg=["#b7e08f","#a4d68a","#c4e89b","#92cc86"],Kf=Fn.brd,Vg=new pt("#9ccf8a");var Sl={a:1e9,b:1e9},lu=new Float32Array(Kn*jn*3),cu=new Float32Array(Kn*jn*3),Wg=new Map;function Qf(i){let t=Wg.get(i);if(!t){let e=i.instanceMatrix.array.length;t={m:new Float32Array(e),c:new Float32Array(e/16*3)},Wg.set(i,t)}return t}var Ii=(i,t,e)=>{e.toArray(Qf(i).m,t*16)},cs=(i,t,e)=>{let n=Qf(i);n.hc=1;let s=n.c;s[t*3]=e.r,s[t*3+1]=e.g,s[t*3+2]=e.b};function aE(i,t){let e=Qf(i);i.instanceMatrix.array.set(e.m.subarray(0,t*16)),i.instanceMatrix.needsUpdate=!0,e.hc&&(i.instanceColor||i.setColorAt(0,$e),i.instanceColor.array.set(e.c.subarray(0,t*3)),i.instanceColor.needsUpdate=!0),i.count=t}function*lE(i,t){let e=[],n=i-Kn/2*as,s=t-60,r=0,o=0,a=0,l=0,c=0,h=0,u=0,d=0;for(let x=0;x<jn;x++){x%5===0&&(yield);let g=s+x*Qn,p=Go(g),y=Ar(g),M=Vo(g);for(let v=0;v<Kn;v++){let S=n+v*as,b=$n(S,g),T=(x*Kn+v)*3;lu[T]=S,lu[T+1]=b,lu[T+2]=-g;let _=Math.abs(S-ne(g))-_e(g),w=rn(S*.05,g*.05),R=(tt(v+n,x)-.5)*.05;if(_<0)$e.copy(Tg);else{if($e.copy(bg).lerp(Sg,w),$e.lerp(Mg,1-Be(.5,3.5,_)),$e.lerp(Eg,Be(6,13,b)*.8),$e.lerp(wg,Be(13,24,b)),p>0&&$e.lerp(Vg,p*Be(0,5,_)*.65),Fn.gk&&$e.lerp(Ug,Fn.gk*Be(.4,3,_)*(1-p*.6)),y>.05){let I=rn(S*.11+3,g*.11+7);I>.5&&$e.lerp(Cg,y*Be(.5,.8,I)*.42*Be(.4,3,_))}{let I=pg(S,g);I>0&&$e.lerp(Ig,I*.9)}{let I=rn(S*.03+50,g*.03+20),L=Be(.5,.72,I)*Be(.4,2.5,_)*(1-Be(9,26,_));L>0&&$e.lerp(rn(S*.2,g*.2)>.5?Ag:Rg,L*.85)}}if(cu[T]=$e.r+R,cu[T+1]=$e.g+R,cu[T+2]=$e.b+R,_>5&&b<17&&o<ml&&!Hf(g,_)&&!zf(S,g)){let I=tt(S*3.1,g*1.7),L=.05*(.5+rn(S*.03+9,g*.03))*(_<34?.75:1)+(_<36?(.05+.09*M)*(1-_/44):0)*(.6+.8*rn(S*.07,g*.07))+(_<60?y*.11*(1-_/70):0);if(I<L*(1-p*.92)){let D=(tt(S,g)-.5)*as*.9,C=(tt(g,S)-.5)*Qn*.9,U=.8+tt(S+4,g+1)*.9;En.set(S+D,$n(S+D,g+C)-.1,-(g+C)),Sn.setFromAxisAngle(Cs,tt(g,S)*6.28);let z=tt(S*.7,g*.3);_<60&&z<.04+y*.95?(un.set(U,U,U),Qe.compose(En,Sn,un),Ii(Cr,a,Qe),Ii(xl,a,Qe),cs(Cr,a,$e.set((z<y*.95?Og:Bg)[tt(S,g+3)*4|0])),a++):tt(S*1.1,g*1.7)<.3?(un.set(U*1.05,U*(.9+tt(g,5)*.5),U*1.05),Qe.compose(En,Sn,un),Ii(Cr,a,Qe),Ii(xl,a,Qe),cs(Cr,a,$e.set(Kf[tt(S,g+7)*Kf.length|0])),a++):tt(S*1.9,g*.8)>.55&&c<400?(un.set(U*1.2,U*1.2,U*1.2),Qe.compose(En,Sn,un),Ii(_l,c,Qe),cs(_l,c,$e.set(Ng[tt(S+5,g)*4|0])),c++):(un.set(U,U*(.9+tt(g,3)*1.1),U),Qe.compose(En,Sn,un),Ii(gl,l,Qe),cs(gl,l,$e.set(Fg[tt(S+2,g)*4|0])),l++),o++}}}}for(let x=0;x<jn;x++){x%5===0&&(yield);let g=s+x*Qn,p=Ar(g),y=Go(g);for(let M=0;M<Kn;M+=1){let v=n+M*as,S=Math.abs(v-ne(g))-_e(g);if(S<2.2||S>55||u>=1700||Hf(g,S)||zf(v,g)||$n(v,g)>15||tt(v*2.3+1,g*1.3)>(.05+p*.2)*(1-y*.8))continue;let _=(tt(v,g+9)-.5)*as,w=(tt(g,v+9)-.5)*Qn,R=.7+tt(v+8,g)*.9+p*.3;En.set(v+_,$n(v+_,g+w)-.1,-(g+w)),Sn.setFromAxisAngle(Cs,tt(g,v)*6.28),un.set(R*1.2,R,R*1.1),Qe.compose(En,Sn,un),Ii(qo,u,Qe),cs(qo,u,$e.set(p>.25&&tt(v,g+5)<.55?zg[tt(v,g)*4|0]:Hg[tt(g,v+2)*4|0])),u++}}for(let x=0;x<jn;x++){x%5===0&&(yield);let g=s+x*Qn,p=Go(g);if(!(p<.02))for(let y=0;y<Kn;y++){let M=n+y*as,v=ne(g),S=Math.abs(M-v)-_e(g);if(!(S<.3||S>26||d>=1990))for(let b=0;b<2;b++){if(tt(M*3.7+b*5,g*2.9+b)>p*(1.05-S*.012))continue;let T=(tt(M+b,g+3)-.5)*as,_=(tt(g+b,M+3)-.5)*Qn,w=M+T,R=g+_,I=11+tt(w,R)*12,L=.8+tt(R,w)*.6,D=.05+tt(w*2,R)*.14,C=w>v?1:-1,U=$n(w,R)-.3;En.set(w,U,-R),Sn.setFromAxisAngle(new N(0,0,1),C*D),un.set(L,I,L),Qe.compose(En,Sn,un),Ii(Ml,d,Qe),cs(Ml,d,$e.set(kg[tt(w,R+1)*4|0]));let z=w-C*Math.sin(D)*I,k=U+Math.cos(D)*I;En.set(z,k,-R),Sn.identity();let j=1.5+tt(R,w+4)*1.6;un.set(j,j,j),Qe.compose(En,Sn,un),Ii(bl,d,Qe),cs(bl,d,$e.set(Gg[tt(w+2,R)*4|0])),d++}}}e.push([Ml,d],[bl,d]),e.push([qo,u]);for(let x=0;x<jn;x++){x%5===0&&(yield);let g=s+x*Qn;for(let p=0;p<4;p++){let y=p%2?1:-1;if(tt(g*.53,p+3)>.62||h>=1400)continue;let M=p>1&&tt(g,p+9)>.6,v=_e(g)+y*0+(M?-(1.5+tt(g,p+1)*4):-.3+tt(g,p+2)*3.4),S=ne(g)+y*v,b=-(g+(tt(g,p)-.5)*Qn);if(M&&Math.abs(S-ne(g))>_e(g)-1.5)continue;let T=.7+tt(g+p,7)*.9;En.set(S,Math.max(-.2,$n(S,g)-.15),b),Sn.setFromAxisAngle(Cs,tt(g,p+5)*6.28),un.set(T,T*(.8+tt(g,p+6)*.7),T),Qe.compose(En,Sn,un),Ii(Rs,h,Qe),cs(Rs,h,$e.set(au[tt(g,p+4)*4|0])),h++}}e.push([Rs,h],[_l,c]),e.push([gl,l],[Cr,a],[xl,a]);let f=0,m=0;for(let x=0;x<jn;x++){x%5===0&&(yield);let g=s+x*Qn;for(let p=0;p<3;p++){if(tt(g*.37,p+7)>.5||f>=500)continue;let y=(tt(g+p,5)*2-1)*(_e(g)-2.2),M=ne(g)+y;En.set(M,.03,-(g+(tt(g,p)-.5)*Qn)),Sn.setFromAxisAngle(Cs,tt(g,p+2)*6.28);let v=.7+tt(g+p,9)*.9;un.set(v,1,v),Qe.compose(En,Sn,un),Ii(yl,f,Qe),cs(yl,f,$e.set(tt(g,p)>.5?"#a8dba9":"#96cfa0")),f++,tt(g,p+11)>.72&&m<160&&(Qe.compose(En.setY(.05),Sn,un.set(1,1,1)),Ii(vl,m,Qe),cs(vl,m,$e.set(tt(g,p+1)>.4?"#f7b9cf":"#fbe39a")),m++)}}e.push([yl,f],[vl,m]);for(let[x,g]of e)aE(x,g);Yf.set(lu),Zf.set(cu),er.attributes.position.needsUpdate=!0,er.attributes.color.needsUpdate=!0,er.computeVertexNormals()}var Ir=null,qg=0,jf=!1;function Xg(i,t,e){let n=Math.floor(-t/(Qn*pl))*Qn*pl,s=Math.round(i/(as*pl))*as*pl;if(!Ir&&(n!==Sl.b||s!==Sl.a)){let r=!jf||Math.abs(n-Sl.b)>150||Math.abs(s-Sl.a)>150;if(Sl={a:s,b:n},Ir=lE(s,n),qg=n,r){for(;!Ir.next().done;);e(n),Ir=null,jf=!0}}if(Ir){let r=performance.now(),o;do o=Ir.next();while(!o.done&&performance.now()-r<3);o.done&&(e(qg),Ir=null,jf=!0)}}var ep=140,Yg=[],np=new ue,hu=new Float32Array(ep*3);for(let i=0;i<ep;i++)Yg.push([Math.random()*80-40,Math.random()*3+.4,Math.random()*80-50,Math.random()*6.28]);np.setAttribute("position",new Kt(hu,3));var tp=new di({color:16773792,size:.35,map:ti,transparent:!0,opacity:0,blending:Gn,depthWrite:!1}),uu=new wi(np,tp);uu.frustumCulled=!1;Tt.add(uu);function Zg(i){if(tp.opacity=Fe(i*1.3-.2,0,.9),uu.visible=tp.opacity>.01,uu.visible){for(let t=0;t<ep;t++){let e=Yg[t],n=F.t*.4+e[3],s=Math.sin(F.psi),r=-Math.cos(F.psi);hu[t*3]=F.px+e[0]+Math.sin(n*2.1+t)*1.5,hu[t*3+1]=e[1]+Math.sin(n*3+t)*.4,hu[t*3+2]=F.pz+e[2]+Math.cos(n*1.7+t)*1.5}np.attributes.position.needsUpdate=!0}}var ei=qt,Ge=new Qt;Tt.add(Ge);var Is=new Ws;Is.moveTo(0,3.4);Is.quadraticCurveTo(.5,2.4,.7,1);Is.lineTo(.7,-1.3);Is.lineTo(-.7,-1.3);Is.lineTo(-.7,1);Is.quadraticCurveTo(-.5,2.4,0,3.4);var ip=new $(new Ro(Is,{depth:.24,bevelEnabled:!1}),new ye({gradientMap:Pe,color:14722684,emissive:4204570,map:Ye("wood")}));ip.rotation.x=-Math.PI/2;ip.position.y=-.04;Ge.add(ip);var El=new $(new Va(Is),new ye({gradientMap:Pe,color:11568232,emissive:2759186,map:Ye("plank")}));El.geometry.scale(.8,.86,1);El.geometry.translate(0,.2,0);El.rotation.x=-Math.PI/2;El.position.y=.21;Ge.add(El);{let i=ei(9068357,{map:Ye("wood")}),t=ei(13146740,{map:Ye("plank")}),e=Is,n=new Ws(e.getPoints(24)),s=new xr(n.getPoints(24).map(u=>new ut(u.x*.86,u.y*.9+.1)).reverse());n.holes.push(s);let r=new Ro(n,{depth:.07,bevelEnabled:!1}),o=new $(r,i);o.rotation.x=-Math.PI/2,o.position.y=.2,Ge.add(o);for(let u=0;u<6;u++){let d=-2.3+u*.72,f=u<2?1-u*.1:1.28,m=new $(new Ln(f,.07,.08),i);m.position.set(0,.23,d),Ge.add(m)}let a=new $(new Ln(1.35,.07,.34),t);a.position.set(0,.5,.55),Ge.add(a);let l=new $(new Ss(.2,.045,6,14),ei(14271378));l.rotation.x=Math.PI/2,l.position.set(.25,.27,-1.7),Ge.add(l);let c=l.clone();c.scale.setScalar(.8),c.position.set(.25,.32,-1.7),Ge.add(c);let h=new $(new pe(.13,8,6),i);h.position.set(0,.22,-3.35),Ge.add(h)}var $g=[];{let i=ei(9075550,{map:Ye("cloth")}),t=ei(11045468,{map:Ye("woodV")});[[-.35,.34,-1.55,.34],[-.05,.32,-1.35,.28],[-.3,.3,-1.1,.26]].forEach(([s,r,o,a])=>{let l=new $(new bn(a,1),i);l.scale.set(1.1,.65,1),l.position.set(s,r,o),Ge.add(l),$g.push(l)});let e=new $(new Le(.025,.035,4.6,6),t);e.position.set(-.55,.9,-2.6),e.rotation.set(1.28,0,.14),Ge.add(e);let n=new $(new Le(.006,.006,2.3,3),ei(14209216));n.position.set(-.95,.35,-4.7),Ge.add(n)}var Kg=new $(new Le(.03,.04,.9,6),new ye({gradientMap:Pe,color:8018508}));Kg.position.set(0,.55,-3.05);Ge.add(Kg);var wl=new $(new pe(.12,10,8),new Ie({color:16769704}));wl.position.set(0,1.05,-3.05);Ge.add(wl);var fu=oi(16762746,2.4);fu.position.copy(wl.position);Ge.add(fu);var pu=new Ja(16763274,0,22,1.6);pu.position.set(0,1.5,-2.8);Ge.add(pu);function Jg(){let i=new Qt,t=new ye({gradientMap:Pe,color:15716516,emissive:3811866}),e=new $(new Le(.022,.022,2.1,6),t);e.rotation.x=Math.PI/2,e.position.z=.9,i.add(e);let n=new $(new Ln(.2,.03,.62),new ye({gradientMap:Pe,color:15047302}));n.position.z=1.55,i.add(n);let s=new $(new Ln(.2,.04,.05),t);s.position.z=-.15,i.add(s);let r=new Qt;return r.add(i),Ge.add(r),r}var jg=[Jg(),Jg()],cE=[new N(-.7,.5,-.3),new N(.7,.5,-.3)],hE=[new N(-1.05,.55,-.9),new N(1.05,.55,-.9)],Dr=new Qt;Ge.add(Dr);Dr.position.set(0,.42,.55);Dr.scale.setScalar(1.3);var Pi=new Qt;Pi.position.y=.3;Dr.add(Pi);var Xo=new Qt;Xo.position.y=1;Pi.add(Xo);var nr=new Qt;nr.position.y=.2;Xo.add(nr);var Qg=[];{let i=ei(9279656,{map:Ye("cloth")}),t=ei(7305868,{map:Ye("cloth")}),e=ei(4540762,{map:Ye("cloth")}),n=ei(14264706),s=ei(14727535,{map:Ye("straw"),side:me}),r=ei(12159562,{map:Ye("straw")}),o=ei(2959918),a=new $(new pe(.5,14,10),e);a.scale.set(1.2,.42,.85),a.position.y=-.1,Dr.add(a),[-1,1].forEach(p=>{let y=new $(new pe(.17,8,6),e);y.position.set(p*.5,-.02,-.3),Dr.add(y)});let l=new $(new Le(.3,.4,.8,12),i);l.position.y=.42,Pi.add(l);let c=new $(new Ss(.35,.03,6,14),t);c.rotation.x=Math.PI/2,c.position.y=.12,Pi.add(c);let h=new $(new pe(.44,12,8),i);h.scale.set(1,.45,.7),h.position.y=.78,Pi.add(h);let u=new $(new Ss(.14,.045,6,10),t);u.rotation.x=Math.PI/2,u.position.y=.9,Pi.add(u);let d=new $(new Le(.09,.1,.16,6),n);d.position.y=.95,Pi.add(d);let f=new $(new pe(.21,14,10),o);f.position.y=.2,Xo.add(f);let m=new $(new Oe(.66,.36,24,1,!0),s);m.position.y=.1,nr.add(m);let x=new $(new Oe(.1,.08,8),r);x.position.y=.22,nr.add(x);let g=new $(new Ss(.655,.018,6,28),r);g.rotation.x=Math.PI/2,g.position.y=-.075,nr.add(g),[-1,1].forEach(p=>{let y=new $(new Le(.008,.008,.3,4),o);y.position.set(p*.18,-.12,.05),nr.add(y)}),[-1,1].forEach(p=>{let y=new Qt;y.position.set(p*.42,.75,0),Pi.add(y);let M=new $(new Le(.095,.08,.6,8),i);M.position.y=-.3,y.add(M);let v=new $(new pe(.085,8,6),n);v.position.y=-.62,y.add(v);let S=new $(new Ss(.085,.025,5,8),t);S.rotation.x=Math.PI/2,S.position.y=-.52,y.add(S),Qg.push(y)})}var Lr=new Qt;Ge.add(Lr);{let i=ei(12159574,{map:Ye("woodV")}),t=ei(13602164,{map:Ye("plank")}),e=new $(new Le(.03,.03,2.1,6),i);e.rotation.x=Math.PI/2,e.position.z=1.05,Lr.add(e);let n=new $(new Ln(.22,.04,.55),t);n.position.z=2,Lr.add(n);let s=new $(new Ln(.2,.04,.05),i);s.position.z=-.03,Lr.add(s)}var Pr=1,du=0,tx=new N;function ex(){let i=Math.sin(F.t*.9)*.03+Math.sin(F.t*1.7)*.012;return Ge.position.set(F.px,i*.6,F.pz),Ge.rotation.set(0,-F.psi,-F.steer*.025+Math.sin(F.t*.7)*.008),Ge.updateMatrixWorld(!0),i}function nx(){jg.forEach((i,t)=>{let e=t?1:-1,n=Fe(F.steer*e,0,1),s=new N().copy(hE[t]);s.lerp(new N(e*1.25,-.1,-.9+Math.sin(F.t*1.3+t)*.08),n);let r=tx.copy(s).sub(cE[t]).normalize();i.quaternion.setFromUnitVectors(new N(0,0,1),r),i.position.copy(s).addScaledVector(r,-1.55)})}function ix(i){{let t=lt.camK>.45||lt.cineW>.15;if(Dr.visible=t,$g.forEach(e=>e.visible=t),Lr.visible=t,jg.forEach(e=>e.visible=!t),t){F.steer>.2?Pr=Math.min(1,Pr+i*3):F.steer<-.2&&(Pr=Math.max(-1,Pr-i*3)),du+=(F.steer-du)*Math.min(1,i*2.2);let e=Math.sin(F.t*1.4);Pi.rotation.z=-F.steer*.2+Math.sin(F.t*.6)*.02,Pi.rotation.y=-F.steer*.28,Pi.rotation.x=.05+e*.012+Math.abs(F.steer)*.06,Xo.rotation.y=-F.steer*.38+Math.sin(F.t*.35)*.08,Xo.rotation.x=.04+Math.sin(F.t*.5)*.03,nr.rotation.z=(F.steer-du)*.45,nr.rotation.x=-Math.abs(F.steer-du)*.12;let n=tx.set(Pr*.5,.8,.5),s=Math.abs(F.steer)>.2?1:0,o=new N(Pr*(.7+s*.55),-.2,1.35+Math.sin(F.t*1.2)*.12*(1-s)+s*.1).clone().sub(n).normalize();Lr.quaternion.setFromUnitVectors(new N(0,0,1),o),Lr.position.copy(n);let a=[n.clone().addScaledVector(o,.75),n.clone()];Pr<0&&a.reverse(),Qg.forEach((l,c)=>{let h=l.getWorldPosition(new N),u=Ge.localToWorld(a[c].clone()),d=u.sub(h),f=d.length();l.parent.worldToLocal(u.copy(h).add(d));let m=u.sub(l.position);l.quaternion.setFromUnitVectors(new N(0,-1,0),m.clone().normalize()),l.scale.y=Fe(m.length()/.66,.7,1.5)})}}}var mu=[];for(let i=0;i<28;i++){let t=new $(new vr(.35,.42,28).rotateX(-Math.PI/2),new Ie({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.position.y=.04,t.userData.age=9,Tt.add(t),mu.push(t)}var uE=0,Wn=(i,t)=>{let e=mu[uE++%mu.length];e.position.set(i,.04,t),e.userData.age=0};function sx(i){mu.forEach(t=>{if(t.userData.age<4){t.userData.age+=i;let e=t.userData.age/4;t.scale.setScalar(1+e*6),t.material.opacity=.35*(1-e)}else t.material.opacity=0})}var ir={steer:0,pitch:0};ws.addEventListener("pointerdown",i=>{!lt.started||lt.X.photo||(mg(),ws.setPointerCapture(i.pointerId),F.hold=!0,ox(i),oe.resume())});ws.addEventListener("pointermove",i=>{F.hold&&!lt.X.photo&&ox(i)});var rx=()=>{F.hold=!1,ir.steer=0,ir.pitch=0};ws.addEventListener("pointerup",rx);ws.addEventListener("pointercancel",rx);function ox(i){let t=(i.clientX/innerWidth-.5)*2,e=(i.clientY/innerHeight-.5)*2;ir.steer=Math.abs(t)<.1?0:Fe((t-Math.sign(t)*.1)*1.4,-1,1),ir.pitch=e}addEventListener("keydown",i=>{(i.code==="Space"||i.code==="ArrowUp"||i.code==="KeyW")&&(F.key.up=!0,i.preventDefault()),(i.code==="ArrowLeft"||i.code==="KeyA")&&(F.key.l=!0),(i.code==="ArrowRight"||i.code==="KeyD")&&(F.key.r=!0)});addEventListener("keyup",i=>{(i.code==="Space"||i.code==="ArrowUp"||i.code==="KeyW")&&(F.key.up=!1),(i.code==="ArrowLeft"||i.code==="KeyA")&&(F.key.l=!1),(i.code==="ArrowRight"||i.code==="KeyD")&&(F.key.r=!1)});var Wi=["Puente de madera","Torii sobre el agua","Aldea de farolillos","Jard\xEDn de sakura","Ca\xF1averal de las garzas","Templo de la campana","Cascadita de musgo","Casa de t\xE9","Bosque de bamb\xFA","Estanque de lotos","Castillo de la Garza Blanca"],yi=new Set;try{JSON.parse(localStorage.getItem("rio3d-found")||"[]").forEach(i=>yi.add(i))}catch{}function ax(){try{localStorage.setItem("rio3d-found",JSON.stringify([...yi]))}catch{}}var Nr=[],ai=new Map,lx=new Set,hs=[],sp=new Set;function li(i){let t=We("toast");t.textContent=i,t.style.opacity=1,clearTimeout(li.h),li.h=setTimeout(()=>t.style.opacity=0,4200)}var dE=Wi.map(i=>{let t=document.createElement("span");return t.className="chip",t.textContent=i,We("chips").appendChild(t),t});function gu(i){We("places").textContent=yi.size+"/"+Wi.length,dE.forEach((e,n)=>e.classList.toggle("on",yi.has(n)));let t=Math.max(0,Math.floor((i-240)/Ri)-1);for(;je(t)<i+1;)t++;We("next").textContent="Siguiente: "+Wi[Je(t)]+" en "+Math.max(0,Math.round((je(t)-i)/10)*10)+" m"}We("snd").onclick=()=>{oe.on=!oe.on,oe.ctx&&oe.setOn(oe.on),We("snd").textContent="Sonido: "+(oe.on?"s\xED":"no")};try{lt.savedS=+localStorage.getItem("rio3d-pos")||0}catch{}function Tl(){try{lt.started&&F.dist>80&&localStorage.setItem("rio3d-pos",String(Math.round(F.dist)))}catch{}}setInterval(Tl,2500);addEventListener("pagehide",Tl);document.addEventListener("visibilitychange",Tl);lt.savedS>150&&(We("go").textContent="Continuar ("+lt.savedS+" m)",We("go2").hidden=!1,We("go2").onclick=()=>{try{localStorage.removeItem("rio3d-pos")}catch{}lt.savedS=0,We("go").onclick()});We("go").onclick=()=>{lt.savedS>150&&su(lt.savedS);try{oe.init(),oe.resume()}catch{}We("start").hidden=!0,We("hud").hidden=!1,We("places-row").hidden=!1,gu(0),We("hint").hidden=!1,lt.started=!0,setTimeout(()=>{try{localStorage.getItem("rio3d-ob")==="1"&&(We("hint").style.opacity=0)}catch{We("hint").style.opacity=0}},9e3)};var rp=0;function cx(i,t){if(rp-=i,rp<=0){rp=.4,gu(F.dist||t);{let e=F.dist||t,n=Math.round((e-240)/Ri),s=-1;for(let r of[n-1,n,n+1])r>=0&&Math.abs(je(r)-e)<280&&(s=Je(r));oe.setMood(Math.sin(Math.PI*2*(lt.tod-.12)),s,tr())}We("m").textContent=Math.round(F.dist/1),We("tod").textContent=ou(lt.tod)}}var ap=46,Ur=new Map,op=[],xu=new Set;try{JSON.parse(localStorage.getItem("rio3d-coll")||"[]").forEach(i=>xu.add(i))}catch{}try{lt.count=+localStorage.getItem("rio3d-lant")||0}catch{}var vu=i=>{let t=70+i*ap+tt(i,1)*20,e=(tt(i,2)*2-1)*.6*_e(t);return[ne(t)+e,-t]};function _u(){let i=new Qt,t=new $(new Le(.3,.3,.55,10),new Ie({color:16767392}));t.position.y=.38;let e=new $(new Le(.34,.34,.06,10),new Ie({color:13204840}));e.position.y=.7;let n=e.clone();n.position.y=.08;let s=oi(16762746,3.2);s.position.y=.45,s.material.depthTest=!1,s.renderOrder=5;let r=new $(new an(1,1).rotateX(-Math.PI/2),new Ie({map:ti,color:16762746,transparent:!0,opacity:.4,blending:Gn,depthWrite:!1}));return r.scale.set(5,1,5),r.position.y=.04,i.add(t,e,n,s,r),i.userData={glow:s,refl:r,body:t},i}function hx(i,t){let e=Math.max(0,Math.floor((t-120)/ap)),n=Math.floor((t+320)/ap);for(let[s,r]of Ur)(s<e||s>n)&&(Tt.remove(r),op.push(r),Ur.delete(s));for(let s=e;s<=n;s++){if(xu.has(s)||Ur.has(s))continue;let r=op.pop()||_u();r.userData.fade=1,r.scale.setScalar(1),Tt.add(r),Ur.set(s,r)}for(let[s,r]of Ur){let[o,a]=vu(s);r.position.set(o,Math.sin(i*1.1+s)*.04,a),r.rotation.z=Math.sin(i*.8+s*2)*.08,r.userData.glow.material.opacity=(.5+.25*lt.glowK)*(.8+.2*Math.sin(i*3+s)),r.userData.refl.material.opacity=(.25+.3*lt.glowK)*(.85+.15*Math.sin(i*2+s)),r.userData.collecting&&(r.userData.fade-=.016,r.scale.setScalar(1+(1-r.userData.fade)*.6),r.userData.glow.material.opacity*=Math.max(0,r.userData.fade),r.userData.refl.material.opacity*=Math.max(0,r.userData.fade),r.userData.fade<=0&&(Tt.remove(r),Ur.delete(s),op.push(r),r.userData.collecting=!1))}}function ux(){for(let[i,t]of Ur){if(t.userData.collecting)continue;let[e,n]=vu(i),s=e-F.px,r=n-F.pz;if(s*s+r*r<17){xu.add(i),lt.count++;try{localStorage.setItem("rio3d-lant",String(lt.count)),localStorage.setItem("rio3d-coll",JSON.stringify([...xu]))}catch{}t.userData.collecting=!0;let o=Math.atan2(s,-r)-F.psi;oe.lantern(Math.sin(o)),Wn(e,n),We("n").textContent=lt.count,lt.count===1&&li("Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.")}}}var ni,Al=null,dx=()=>Al;function yu(i,t){if(ni===void 0||!ni&&Al===null&&!yu.init)if(yu.init=1,ig()){let a=t+55+Df(1)*55;Al=[ne(a)+(Df(2)*2-1)*.25*_e(a),-a],ni=_u(),ni.scale.setScalar(1.7),ni.userData.glow.material.color.set(16765562),Tt.add(ni)}else ni=null;if(!ni)return;let[e,n]=Al;ni.position.set(e,Math.sin(i*1.1)*.06,n),ni.rotation.z=Math.sin(i*.8)*.08;let s=ni.userData;if(ni.userData.fade===void 0&&(s.glow.material.opacity=.75+.2*Math.sin(i*2.2),s.refl.material.opacity=.5+.15*Math.sin(i*2)),s.taken){s.fade-=.012,ni.scale.setScalar(1.7+(1-s.fade)*.9),s.glow.material.opacity*=Math.max(0,s.fade),s.refl.material.opacity*=Math.max(0,s.fade),s.fade<=0&&(Tt.remove(ni),ni=null,Al=null);return}let r=e-F.px,o=n-F.pz;if(r*r+o*o<26&&og()){s.taken=1,s.fade=1;let a=Math.atan2(r,-o)-F.psi;oe.lantern(Math.sin(a)),Wn(e,n)}}var Rl=16,fx=[];for(let i=0;i<Rl;i++){let t=new bs(new is({map:ti,transparent:!0,opacity:0,depthWrite:!1,fog:!1,color:16777215}));t.scale.set(70,24,1),t.renderOrder=3,Tt.add(t),fx.push(t)}var lp=800,cp=new ue,px=new Float32Array(lp*6),mx=[];for(let i=0;i<lp;i++)mx.push([Math.random()*40-20,Math.random()*14,Math.random()*40-24]);cp.setAttribute("position",new Kt(px,3));var gx=new Eo({color:14543103,transparent:!0,opacity:0,depthWrite:!1}),Cl=new Da(cp,gx);Cl.frustumCulled=!1;Cl.visible=!1;Tt.add(Cl);var cn={rain:0,target:0,t:50,on:!1},fE=[[480,150,.55,3.1],[545,200,.4,7.7],[610,260,.28,12.9]].map(([i,t,e,n])=>{let r=new Float32Array(1326),o=[];for(let c=0;c<=220;c++){let h=c/220*Math.PI*2,u=Math.cos(h),d=Math.sin(h),f=rn(u*2.2+n,d*2.2+n),m=rn(u*8+n*2,d*8+n),x=Math.pow(Math.max(0,m-.5)/.5,1.4),g=t*(.3+.55*Math.pow(f,1.5)+.9*x);if(r.set([u*i,-40,d*i,u*i,g,d*i],c*6),c<220){let p=c*2;o.push(p,p+1,p+2,p+1,p+3,p+2)}}let a=new ue;a.setAttribute("position",new Kt(r,3)),a.setIndex(o);let l=new $(a,new sn({side:me,fog:!1,depthWrite:!1,uniforms:{col:{value:new pt},hor:{value:new pt},hm:{value:t*1.3}},vertexShader:"varying float vY;void main(){vY=position.y;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying float vY;uniform vec3 col,hor;uniform float hm;void main(){vec3 c=mix(hor,col,smoothstep(hm*.04,hm*.75,vY));gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));return l.renderOrder=-8,l.frustumCulled=!1,l.userData.t=e,Tt.add(l),l}),Yo=new pt,Mu=new pt;function xx(i,t){lt.started&&(cn.t-=i,cn.t<=0&&(cn.target=cn.target?0:1,cn.t=cn.target?60+Math.random()*40:100+Math.random()*70,cn.target&&li("Empieza una llovizna suave"))),cn.rain+=(cn.target-cn.rain)*Math.min(1,i*.25);let e=cn.rain>.15;e!==cn.on&&(cn.on=e,oe.rain(e));let n=1-Be(.08,.3,lt.tod),s=Fe(Math.max(iu(t)*.95,cn.rain*.4,n*.4,.2));cn.fog=s,Tt.fog.near=wr(22,5,s),Tt.fog.far=wr(250,85,s),Yo.set(15131886).multiplyScalar(1-Se.night*.7),Tt.fog.color.copy(Se.fog).lerp(Yo,s*.55);let r=xi.material.uniforms;r.fogN.value=Tt.fog.near,r.fogF.value=Tt.fog.far,r.fog.value.copy(Tt.fog.color),Ci.material.uniforms.hor.value.lerp(Tt.fog.color,s*.8),Ci.material.uniforms.top.value.lerp(Tt.fog.color,s*.35),Rr.intensity*=1-.22*cn.rain,Ts.intensity*=1-.45*cn.rain,fE.forEach(a=>{a.position.set(F.px,0,F.pz);let l=a.userData.t;Yo.copy(Se.hor),Mu.copy(Se.top).multiplyScalar(.55).lerp(Yo.set(8095400).multiplyScalar(1-Se.night*.75),.45),a.material.uniforms.col.value.copy(Se.hor).lerp(Mu,1-l).lerp(Tt.fog.color,s*.75),a.material.uniforms.hor.value.copy(Ci.material.uniforms.hor.value)});let o=Math.floor(t/25)-2;for(let a=0;a<Rl;a++){let l=o+a,c=fx[(l%Rl+Rl)%Rl],h=l*25,u=ne(h)+(tt(l,3)-.5)*_e(h)*1.5;c.position.set(u+Math.sin(F.t*.05+l)*3,1.2+tt(l,4)*2.2,-h);let d=c.position.x-F.px,f=c.position.z-F.pz,m=Math.hypot(d,f);c.material.opacity=s*.5*Be(6,22,m)*(1-Be(300,380,m))*(.7+.3*tt(l,5)),c.material.color.copy(Tt.fog.color).multiplyScalar(1.05)}if(Cl.visible=cn.rain>.03,gx.opacity=.42*cn.rain,Cl.visible){for(let a=0;a<lp;a++){let l=mx[a];l[1]-=16*i,l[1]<0&&(l[1]=13+Math.random()*2,l[0]=Math.random()*40-20,l[2]=Math.random()*40-24);let c=F.px+l[0],h=F.pz+l[2];px.set([c,l[1],h,c-.05,l[1]+.65,h],a*6)}cp.attributes.position.needsUpdate=!0,Math.random()<i*9*cn.rain&&Wn(F.px+(Math.random()-.5)*28,F.pz-Math.random()*22+4)}}var vx="rio-still",yn={on:!1,k:0,t:0,ev:0},hp=[["Un pez sube a respirar y deja c\xEDrculos en el agua.","A fish rises for air and leaves circles on the water.","\u9B5A\u304C\u606F\u3092\u3057\u306B\u4E0A\u304C\u308A\u3001\u6C34\u306B\u8F2A\u3092\u6B8B\u3057\u307E\u3059\u3002"],["El viento mueve las ca\xF1as, y luego vuelve el silencio.","The wind stirs the reeds, then silence returns.","\u98A8\u304C\u8466\u3092\u3086\u3089\u3057\u3001\u307E\u305F\u9759\u3051\u3055\u304C\u623B\u308A\u307E\u3059\u3002"],["Una hoja pasa despacio; t\xFA no.","A leaf drifts by, slowly; you do not.","\u8449\u304C\u3086\u3063\u304F\u308A\u6D41\u308C\u3066\u3044\u304D\u307E\u3059\u3002\u3042\u306A\u305F\u306F\u52D5\u304D\u307E\u305B\u3093\u3002"],["Se oye el agua rozando la canoa. Eso es todo, y alcanza.","You can hear water brushing the canoe. That is all, and it is enough.","\u6C34\u304C\u30AB\u30CC\u30FC\u3092\u306A\u3067\u308B\u97F3\u3060\u3051\u3002\u305D\u308C\u3067\u5341\u5206\u3067\u3059\u3002"],["Las nubes se reflejan en el r\xEDo, tan quietas como t\xFA.","Clouds reflect in the river, as still as you are.","\u96F2\u304C\u5DDD\u306B\u6620\u308A\u3001\u3042\u306A\u305F\u3068\u540C\u3058\u304F\u3089\u3044\u9759\u304B\u3067\u3059\u3002"]];function pE(i){i.add(hp),i.add([["Quedarme quieto","Stay still","\u3058\u3063\u3068\u3059\u308B"],["Seguir el r\xEDo","Follow the river","\u5DDD\u3092\u9032\u3080"],["Una lib\xE9lula se posa en la proa.","A dragonfly lands on the bow.","\u30C8\u30F3\u30DC\u304C\u8239\u9996\u306B\u6B62\u307E\u308A\u307E\u3057\u305F\u3002"],["Quedarte quieto tambi\xE9n cuenta. Un recuerdo para la caba\xF1a.","Staying still counts too. A keepsake for the cabin.","\u3058\u3063\u3068\u3057\u3066\u3044\u308B\u306E\u3082\u5927\u5207\u3002\u5C0F\u5C4B\u306B\u601D\u3044\u51FA\u304C\u3072\u3068\u3064\u3002"]])}var yx=()=>{let i=new Date;return i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()},mE=()=>{try{return JSON.parse(localStorage.getItem(vx)||"{}")||{}}catch{return{}}};var vi=null,up=!1;function gE(){if(vi||typeof document=="undefined")return;try{pE(window.UX)}catch{}vi=document.createElement("button"),vi.type="button",vi.id="stillBtn",vi.style.cssText="position:fixed;left:12px;bottom:max(96px,calc(env(safe-area-inset-bottom) + 88px));z-index:58;min-height:44px;padding:8px 16px;border-radius:99px;border:1px solid #5a609a;background:rgba(32,34,70,.82);color:#fbf1e0;font:600 .85rem system-ui;cursor:pointer;display:none";let i=e=>{try{return UX.tr(e)}catch{return e}},t=()=>{vi.textContent=i(yn.on?"Seguir el r\xEDo":"Quedarme quieto")};t(),vi.onclick=()=>{yn.on=!yn.on,yn.t=0,yn.ev=0,up=!1,t();try{UX.hap(8)}catch{}},document.body.appendChild(vi)}var xE=i=>{vi||gE(),vi&&(vi.style.display=i?"block":"none")};function _x(i,t,e){if(t&&(!vi||vi.style.display==="none")&&xE(!0),yn.k+=((yn.on?1:0)-yn.k)*Math.min(1,i*1.2),!!yn.on){if(yn.t+=i,yn.ev===0&&yn.t>=20){yn.ev=1,Er("libelula");try{UX.say(UX.tr("Una lib\xE9lula se posa en la proa."))}catch{}try{e&&e()}catch{}}else if(yn.ev>=1&&yn.t>=20+yn.ev*50){let n=hp[(yn.ev-1)%hp.length];yn.ev++;try{UX.say(UX.tr(n[0]))}catch{}try{e&&e()}catch{}}if(!up&&yn.t>=45){up=!0;let n=mE();if(n.d!==yx()){n.d=yx(),n.n=(n.n||0)+1;try{localStorage.setItem(vx,JSON.stringify(n))}catch{}try{UX.say(UX.tr("Quedarte quieto tambi\xE9n cuenta. Un recuerdo para la caba\xF1a."))}catch{}}}}}var dp=0;function Mx(i,t){if(lt.started){let e=F.hold||F.key.up,n=Fe(ir.steer+(F.key.r?1:0)-(F.key.l?1:0),-1,1);_x(i,!0,()=>Wn(F.px,F.pz));let s=1-yn.k,r=lt.X.photo?0:2.6*(1-.85*lt.cineW)*s;F.v+=(r-F.v)*.5*i;let o=xn(t),a=n*(.55+Math.min(F.v,6)/6*.45);F.psi+=a*i,Math.abs(n)<.1&&(F.psi+=(o-F.psi)*.32*i),F.psi=Fe(F.psi,o-1.35,o+1.35),window.__lock!=null&&(F.psi=window.__lock),F.steer+=(n-F.steer)*3*i,F.px+=Math.sin(F.psi)*F.v*i+Math.sin(o)*1.1*s*i,F.pz+=-Math.cos(F.psi)*F.v*i-Math.cos(o)*1.1*s*i;let l=-F.pz,c=ne(l),h=_e(l)-1.7,u=F.px-c;if(Math.abs(u)>h&&(F.px=c+Math.sign(u)*h,F.v>1.2&&F.t-F.bumpT>1.2&&(oe.bump(),F.bumpT=F.t),F.v*=.6,F.psi+=(xn(l)-F.psi)*.4),F.dist=Math.max(F.dist,l),dp-=i,Math.abs(n)>.25&&dp<=0){dp=.7;let d=n>0?1:-1,f=new N(d*1.2,0,.3);Ge.localToWorld(f),Wn(f.x,f.z)}}}var Xt=(i,t,e,n,s,r,o,a,l)=>{let c=new $(new Ln(t,e,n),qt(s,l));return c.position.set(r,o,a),i.add(c),c},Ve=(i,t,e,n,s,r,o,a,l=7,c)=>{let h=new $(new Le(t,e,n,l),qt(s,c));return h.position.set(r,o,a),i.add(h),h},Te=(i,t,e,n,s,r,o=.7)=>{let a=oi(t,e);return a.position.set(n,s,r),a.userData.base=o,i.add(a),Nr.push(a),a},fp=new Map;function mp(i,t,e,n=64,s=256){let r=i+t+n;if(fp.has(r))return fp.get(r);let o=document.createElement("canvas");o.width=n,o.height=s;let a=o.getContext("2d");a.fillStyle=t,a.fillRect(0,0,n,s),a.fillStyle=e,a.fillRect(0,0,n,5),a.fillRect(0,s-5,n,5);let l=Math.min(n*.72,s/Math.max(1,[...i].length)*.8);a.font="bold "+l+'px "Hiragino Mincho ProN","Noto Serif CJK JP","Yu Mincho","MS Mincho",serif',a.textAlign="center",a.textBaseline="middle";let c=[...i].length;[...i].forEach((u,d)=>a.fillText(u,n/2,s/(c*2)+d*s/c));let h=new zi(o);return h.colorSpace=Dn,fp.set(r,h),h}function bx(i,t,e,n,s,r){let o=t(e,n),a=new Qt;a.position.set(e,o,n),i.add(a),Ve(a,.07,.09,6.4,4864562,0,3.2,0,5),Xt(a,1.3,.09,.09,4864562,.62,6,0);let l=new $(new an(1.15,4.4),new ye({gradientMap:Pe,map:mp(s,r,"#f6efe0"),side:me}));return l.userData.noMerge=!0,l.position.set(.62,3.75,0),a.add(l),a.userData.sw=1,hs.push({b:l,ph:e}),a}function Zo(i,t,e,n,s=1){let r=new Qt;r.position.set(e,t(e,n),n),r.scale.setScalar(s),i.add(r);let o=11052706;Ve(r,.5,.62,.3,o,0,.15,0,8),Ve(r,.17,.2,1.3,o,0,.95,0,6),Ve(r,.45,.3,.2,o,0,1.7,0,8),Xt(r,.62,.55,.62,o,0,2.05,0),Xt(r,.34,.34,.66,16767392,0,2.05,0).material=new Ie({color:16767392}),Xt(r,.66,.34,.34,16767392,0,2.05,0).material=new Ie({color:16767392});let a=new $(new Oe(.62,.5,4),qt(o));a.rotation.y=Math.PI/4,a.position.y=2.6,r.add(a);let l=new $(new pe(.11,6,5),qt(o));return l.position.y=2.92,r.add(l),Te(r,16762746,2.6,0,2.05,0,.8),r}function yE(i,t,e,n){for(let o of[-1,1])Ve(i,.22,.3,10,6965818,o*(e+1.6),t(o*(e+1.6),n)+4.6,n,7);let s=e*2+3.2,r=Ve(i,.12,.12,s,15128736,0,8.6,n,6);r.rotation.z=Math.PI/2;for(let o=0;o<12;o++){let a=(o+.5)/12,l=-s/2+a*s,c=new $(new an(.42,1),new ye({gradientMap:Pe,color:16777215,side:me}));c.position.set(l,7.9,n),c.rotation.set(0,0,o%2?.18:-.18),i.add(c)}for(let o of[-1,1]){let a=new $(new Oe(.3,1,6),qt(15128736));a.position.set(o*(e*.5),7.8,n),a.rotation.x=Math.PI,i.add(a)}}function Fr(i,t,e,n,s,r){for(let o of[-1,1])bx(i,t,o*(e+1.6),54,n,r),bx(i,t,o*(e+3.6),49,n,r),Zo(i,t,o*(e+2.8),42);s&&yE(i,t,e,37)}function Su(i,t,e,n,s,r=1){let o=new $(new Oe(t,e,4),qt(s));o.rotation.y=Math.PI/4,o.position.y=n,o.scale.z=r,i.add(o);let a=t*.707;[[1,1],[-1,1],[1,-1],[-1,-1]].forEach(([l,c])=>{let h=new $(new Oe(.32,1.3,5),qt(s));h.position.set(l*a,n-e/2+.55,c*a*r),h.rotation.set(c*.7,0,-l*.7),i.add(h)})}function Sx(i,t,e,n){let s=new Qt;s.position.set(t,e,n),i.add(s),Xt(s,6.4,1.2,6.4,9407624,0,.5,0);let r=1.1;for(let o=0;o<4;o++){let a=4.3-o*.75;Xt(s,a,2.3,a,o%2?15853267:15326664,0,r+1.15,0),Xt(s,a+.12,.18,a+.12,11880250,0,r+.1,0);for(let[l,c]of[[1,1],[-1,1],[1,-1],[-1,-1]])Ve(s,.1,.1,2.3,11880250,l*a/2,r+1.15,c*a/2,6);Su(s,(a/2+.95)/.707,1.5,r+2.9,5591134),r+=3.1}Ve(s,.1,.18,4.6,14264410,0,r+1.3,0,6);for(let o=0;o<6;o++)Ve(s,.55-o*.07,.55-o*.07,.12,14264410,0,r+.2+o*.62,0,8);return Te(s,16762746,5,0,3,3.4,.7),s}function Ex(i,t,e,n,s,r){let o=new Qt;return o.position.set(t,e,n),o.scale.setScalar(s),i.add(o),[-2.2,2.2].forEach(a=>Ve(o,.3,.36,6,r,a,3,0,8)),Xt(o,6.8,.4,.55,2894382,0,6.4,0),Xt(o,5.6,.35,.4,r,0,5.4,0),Xt(o,.5,.9,.4,r,0,5.85,0),o}function Eu(i,t){let e=new Qt,n=16184302,s=15328474,r=new $(new pe(.5,10,8),qt(n));r.scale.set(1,.8,1.5),r.position.y=1.35,e.add(r);let o=new $(new Oe(.2,.7,5),qt(s));o.rotation.x=-Math.PI/2-.3,o.position.set(0,1.35,-.85),e.add(o),Ve(e,.045,.045,1.1,4012598,-.12,.55,.05,4),Ve(e,.045,.045,1.1,4012598,.12,.55,.05,4);let a=new Qt;a.userData.noMerge=!0,a.position.set(0,1.6,.55),e.add(a);let l=Ve(a,.07,.09,1,n,0,.45,.05,5);l.rotation.x=-.35;let c=Ve(a,.06,.07,.7,n,0,1.05,.3,5);c.rotation.x=.45;let h=new $(new pe(.14,8,6),qt(n));h.position.set(0,1.4,.55),a.add(h);let u=new $(new Oe(.05,.5,4),qt(14918218));return u.rotation.x=Math.PI/2,u.position.set(0,1.38,.9),a.add(u),e.scale.setScalar(i),hs.push({nk:a,ph:t}),e}var sr=new sn({transparent:!0,depthWrite:!1,side:me,uniforms:{t:{value:0},fogCol:{value:new pt(14542062)}},vertexShader:"varying vec2 vU;varying float vD;void main(){vU=uv;vec4 mv=modelViewMatrix*vec4(position,1.);vD=-mv.z;gl_Position=projectionMatrix*mv;}",fragmentShader:`varying vec2 vU;varying float vD;uniform float t;uniform vec3 fogCol;void main(){float s=sin(vU.x*34.+sin(vU.y*7.)*.9)*.5+.5;float f=fract(vU.y*2.6-t*1.0+s*.35);float a=.62+.3*smoothstep(.25,.9,f)*s;float e=smoothstep(0.,.1,vU.x)*smoothstep(1.,.9,vU.x);vec3 c=mix(vec3(.72,.88,.96),vec3(1.),f*s);float fg=smoothstep(70.,220.,vD);c=mix(c,fogCol,fg*.85);gl_FragColor=vec4(c,a*e*(1.-fg*.45));
#include <colorspace_fragment>
}`}),wu=new sn({transparent:!0,depthWrite:!1,blending:Gn,uniforms:{map:{value:ti},k:{value:1}},vertexShader:"attribute vec3 iC;attribute float iS;attribute vec3 iCol;attribute float iB;uniform float k;varying vec2 vU;varying vec3 vCol;varying float vA;void main(){vU=uv;vCol=iCol;vA=iB*(.3+.7*k);vec4 mv=modelViewMatrix*vec4(iC,1.);mv.xy+=position.xy*iS;gl_Position=projectionMatrix*mv;}",fragmentShader:`uniform sampler2D map;varying vec2 vU;varying vec3 vCol;varying float vA;void main(){vec4 t=texture2D(map,vU);gl_FragColor=vec4(vCol*t.rgb,t.a*vA);
#include <colorspace_fragment>
}`}),pp=new be,bu=new N;function Tu(i){i.updateMatrixWorld(!0),pp.copy(i.matrixWorld).invert();let t=new Map,e=[],n=[];i.traverse(s=>{if(s.isSprite&&s.userData.base!=null){e.push(s);return}if(!s.isMesh||s.isInstancedMesh||s.material.isShaderMaterial||!s.material.isMaterial)return;for(let c=s;c&&c!==i;c=c.parent)if(c.userData.noMerge)return;let r=s.material,o=[r.type,r.color.getHex(),r.emissive?r.emissive.getHex():0,r.side,r.map?r.map.uuid:0,r.transparent,r.opacity,r.depthWrite].join("|"),a=s.geometry;a=a.index?a.toNonIndexed():a.clone();for(let c of Object.keys(a.attributes))c!=="position"&&c!=="normal"&&c!=="uv"&&a.deleteAttribute(c);a.attributes.normal||a.computeVertexNormals(),a.attributes.uv||a.setAttribute("uv",new Kt(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(pp.clone().multiply(s.matrixWorld));let l=t.get(o);l||(l={mat:r,geos:[]},t.set(o,l)),l.geos.push(a),n.push(s)});for(let s of n)s.parent&&s.parent.remove(s),s.geometry.dispose(),s.material.dispose&&![...t.values()].some(r=>r.mat===s.material)&&s.material.dispose();for(let s of t.values()){let r=As(s.geos);if(s.geos.forEach(a=>a.dispose()),!r)continue;let o=new $(r,s.mat);i.add(o)}if(e.length){let s=e.length,r=new an(1,1),o=new Ka;o.index=r.index,o.setAttribute("position",r.attributes.position),o.setAttribute("uv",r.attributes.uv);let a=new Float32Array(s*3),l=new Float32Array(s),c=new Float32Array(s*3),h=new Float32Array(s);e.forEach((d,f)=>{bu.setFromMatrixPosition(d.matrixWorld).applyMatrix4(pp),a.set([bu.x,bu.y,bu.z],f*3),l[f]=d.scale.x,c.set([d.material.color.r,d.material.color.g,d.material.color.b],f*3),h[f]=d.userData.base,d.parent&&d.parent.remove(d),d.material.dispose()}),o.setAttribute("iC",new Oi(a,3)),o.setAttribute("iS",new Oi(l,1)),o.setAttribute("iCol",new Oi(c,3)),o.setAttribute("iB",new Oi(h,1)),o.instanceCount=s;let u=new $(o,wu);u.frustumCulled=!1,u.renderOrder=4,i.add(u)}return i}function gp(i){let t=new Set([wu,sr,Rs.material]);i.traverse(e=>{if(e.isInstancedMesh&&e.userData.keep){e.dispose();return}e.geometry&&e.geometry.dispose(),(e.material?Array.isArray(e.material)?e.material:[e.material]:[]).forEach(s=>{t.has(s)||s.dispose()})});for(let e=hs.length-1;e>=0;e--){let n=hs[e],r=n.b||n.nk;for(;r&&r!==i;)r=r.parent;r===i&&hs.splice(e,1)}for(let e=Nr.length-1;e>=0;e--){let n=Nr[e];for(;n&&n!==i;)n=n.parent;n===i&&Nr.splice(e,1)}}var Au=new pt,wx=new Map,Tx=new be,Ax=new fn,Rx=new Bi,Cx=new N,Ix=new N(1,1,1),Br=i=>{if(Array.isArray(i))return i;let t=wx.get(i);return t||(Au.set(i),t=[Au.r,Au.g,Au.b],wx.set(i,t)),t},Cn=(i,t)=>{let e=Br(i);return[Math.min(1.4,e[0]*t),Math.min(1.4,e[1]*t),Math.min(1.4,e[2]*t)]},Px=new Map;function vE(i){let t=Px.get(i);return t||(t=new bn(1,i),t=t.index?t.toNonIndexed():t,Px.set(i,t)),t}var _i=class{constructor(){this.P=new Float32Array(1<<17),this.C=new Float32Array(1<<17),this.n=0,this.m=new be,this.st=[],this.ref=null}_grow(){let t=new Float32Array(this.P.length*2),e=new Float32Array(this.C.length*2);t.set(this.P),e.set(this.C),this.P=t,this.C=e}save(){return this.st.push(this.m.clone()),this}restore(){return this.m=this.st.pop(),this}T(t=0,e=0,n=0,s=0,r=0,o=0,a=1,l=a,c=a){return Rx.set(r,s,o,"YXZ"),Ax.setFromEuler(Rx),Cx.set(t,e,n),Ix.set(a,l,c),Tx.compose(Cx,Ax,Ix),this.m.multiply(Tx),this}at(t,e,n,s,r,o,a,l){return this.save(),this.T(t,e,n,s||0,o||0,a||0,l||1),r(this),this.restore(),this}tri(t,e,n,s){s=Br(s);let r=this.m.elements,o=r[0],a=r[1],l=r[2],c=r[4],h=r[5],u=r[6],d=r[8],f=r[9],m=r[10],x=r[12],g=r[13],p=r[14],y=t[0],M=t[1],v=t[2],S=e[0],b=e[1],T=e[2],_=n[0],w=n[1],R=n[2],I=o*y+c*M+d*v+x,L=a*y+h*M+f*v+g,D=l*y+u*M+m*v+p,C=o*S+c*b+d*T+x,U=a*S+h*b+f*T+g,z=l*S+u*b+m*T+p,k=o*_+c*w+d*R+x,j=a*_+h*w+f*R+g,B=l*_+u*w+m*R+p;if(this.ref){let Yt=this.ref,nt=o*Yt[0]+c*Yt[1]+d*Yt[2]+x,ot=a*Yt[0]+h*Yt[1]+f*Yt[2]+g,bt=l*Yt[0]+u*Yt[1]+m*Yt[2]+p,Ot=C-I,Rt=U-L,Jt=z-D,De=k-I,rt=j-L,ht=B-D,ft=Rt*ht-Jt*rt,dt=Jt*De-Ot*ht,xt=Ot*rt-Rt*De;if(ft*((I+C+k)/3-nt)+dt*((L+U+j)/3-ot)+xt*((D+z+B)/3-bt)<0){let Nt=C;C=k,k=Nt,Nt=U,U=j,j=Nt,Nt=z,z=B,B=Nt}}this.n+9>this.P.length&&this._grow();let V=this.P,J=this.C,mt=this.n,At=s[0],le=s[1],se=s[2];return V[mt]=I,V[mt+1]=L,V[mt+2]=D,V[mt+3]=C,V[mt+4]=U,V[mt+5]=z,V[mt+6]=k,V[mt+7]=j,V[mt+8]=B,J[mt]=At,J[mt+1]=le,J[mt+2]=se,J[mt+3]=At,J[mt+4]=le,J[mt+5]=se,J[mt+6]=At,J[mt+7]=le,J[mt+8]=se,this.n=mt+9,this}orient(t){return this.ref=t,this.rw=null,this}free(){return this.ref=null,this.rw=null,this}quad(t,e,n,s,r){return this.tri(t,e,n,r),this.tri(t,n,s,r),this}box(t,e,n,s,r=0,o=0,a=0,l=!0){s=Br(s);let c=r-t/2,h=r+t/2,u=o-e/2,d=o+e/2,f=a-n/2,m=a+n/2,x=this.ref;return this.ref=null,this.quad([h,u,m],[h,u,f],[h,d,f],[h,d,m],s),this.quad([c,u,f],[c,u,m],[c,d,m],[c,d,f],s),this.quad([c,d,m],[h,d,m],[h,d,f],[c,d,f],s),l&&this.quad([c,u,f],[h,u,f],[h,u,m],[c,u,m],s),this.quad([c,u,m],[h,u,m],[h,d,m],[c,d,m],s),this.quad([h,u,f],[c,u,f],[c,d,f],[h,d,f],s),this.ref=x,this}boxB(t,e,n,s,r=0,o=0,a=0,l=!1){return this.box(t,e,n,s,r,o+e/2,a,l)}cyl(t,e,n,s,r,o=0,a=0,l=0,c=!1){r=Br(r);let h=this.ref;this.ref=null;let u=(m,x)=>{let g=[];for(let p=0;p<s;p++){let y=p/s*6.2832;g.push([o+m*Math.cos(y),a+x,l+m*Math.sin(y)])}return g},d=u(t,0),f=u(e,n);for(let m=0;m<s;m++){let x=(m+1)%s;e<1e-4?this.tri(d[m],[o,a+n,l],d[x],r):this.quad(d[m],f[m],f[x],d[x],r)}if(e>=1e-4)for(let m=0;m<s;m++)this.tri([o,a+n,l],f[(m+1)%s],f[m],r);if(c)for(let m=0;m<s;m++)this.tri([o,a,l],d[m],d[(m+1)%s],r);return this.ref=h,this}ball(t,e,n=0,s=0,r=0,o=1,a=1,l=1,c=1){e=Br(e);let h=vE(c),u=h.attributes.position,d=this.ref;this.ref=null;for(let f=0;f<u.count;f+=3){let m=[0,1,2].map(x=>[n+u.getX(f+x)*t*o,s+u.getY(f+x)*t*a,r+u.getZ(f+x)*t*l]);this.tri(m[0],m[1],m[2],e)}return this.ref=d,this}geo(t,e){e=Br(e);let n=t.attributes.position,s=t.index,r=s?s.count:n.count,o=this.ref;this.ref=null;let a=l=>{let c=s?s.getX(l):l;return[n.getX(c),n.getY(c),n.getZ(c)]};for(let l=0;l<r;l+=3)this.tri(a(l),a(l+1),a(l+2),e);return this.ref=o,this}loft(t,e,n=!0){let s=t.length,r=t[0].length;for(let o=0;o<s-1;o++)for(let a=0;a<(n?r:r-1);a++){let l=(a+1)%r;this.quad(t[o][a],t[o+1][a],t[o+1][l],t[o][l],Br(typeof e=="function"?e(a,o):e))}return this}count(){return this.n/9}mesh(t){let e=this.n,n=this.P.subarray(0,e),s=new ue;s.setAttribute("position",new Kt(n,3));let r=new Float32Array(e);for(let a=0;a<e;a+=9){let l=n[a+3]-n[a],c=n[a+4]-n[a+1],h=n[a+5]-n[a+2],u=n[a+6]-n[a],d=n[a+7]-n[a+1],f=n[a+8]-n[a+2],m=c*f-h*d,x=h*u-l*f,g=l*d-c*u,p=Math.sqrt(m*m+x*x+g*g)||1;m/=p,x/=p,g/=p;for(let y=0;y<9;y+=3)r[a+y]=m,r[a+y+1]=x,r[a+y+2]=g}s.setAttribute("normal",new Kt(r,3)),s.setAttribute("color",new Kt(this.C.subarray(0,e),3)),s.setAttribute("uv",new Kt(new Float32Array(e/3*2),2)),s.computeBoundingSphere();let o=new $(s,t);return o.userData.noMerge=!0,o}};var Lx=[12731706,4022170,15253850,5214058,14256806,8014490,15790310,3095130,15043130],_E=[15781806,15253658,15980219],Ru=[];function Fx(i,t,e,n,s,r,o,a){let{S:l,E:c,rnd:h}=i;l.at(t,e,n,s,u=>{u.cyl(.37,.2,1.28,7,r,0,0,0).cyl(.28,.27,.16,7,r===15790310?W.red:Cn(W.woodD,1.2),0,.62,0).ball(.17,_E[h()*3|0],0,1.42,0,1,1.1,1,0).ball(.185,W.black,0,1.48,-.03,1,.8,1,0),o&&u.cyl(.04,.04,.7,4,W.woodD,.38,.7,.28),a&&(u.box(.1,.1,.55,r,.3,1.1,.1),u.box(.1,.1,.55,r,-.3,1.1,.1))}),o&&(c.at(t,e,n,s,u=>u.cyl(.13,.13,.34,6,16767392,.38,.38,.28)),h()<.45&&Te(i.h,16762746,2.6,t+Math.sin(s)*.28+Math.cos(s)*.38,e+.55,n+Math.cos(s)*.28-Math.sin(s)*.38,.85))}function Il(i,t,e,n,s,r){let{fr:o,rnd:a}=i;for(let l=0;l<n;l++){let c=t+(a()-.5)*s*2,h=e+(a()-.5)*s*.9,u=o.ground(c,h);u<.35||Fx(i,c,u,h,r+(a()-.5)*1.2,Lx[a()*Lx.length|0],a()<.5,!1)}}function Dx(i,t,e,n){let{S:s,E:r,CL:o,fr:a,rnd:l}=i,c=Math.max(a.ground(t,e),.4),h=[[W.red,W.cream],[W.blue,W.cream],[W.orange,W.cream],[W.green,W.cream]][l()*4|0];s.at(t,c,e,n,f=>{for(let m of[-1,1])for(let x of[-1,1])f.cyl(.08,.1,2.7,5,W.woodD,m*1.65,0,x*.9);f.box(3.5,.95,1.3,W.woodM,0,.48,.5,!1).box(3.7,.12,1.5,Cn(W.woodM,1.25),0,.98,.5);for(let m=0;m<3;m++)f.ball(.17,[W.red,W.cream,15292282,W.orange][l()*4|0],-1.1+m*1.1,1.28,.45,1,1,1,0).cyl(.02,.02,.5,3,W.woodD,-1.1+m*1.1,1,.45);f.box(.7,.5,.5,9071178,1.2,1.3,.6).box(.6,.3,.5,13199183,-.2,1.2,.62)}),o.at(t,c,e,n,f=>{for(let x=0;x<7;x++){let g=-1.9+3.8*x/7,p=-1.9+3.8*(x+1)/7,y=x%2?h[1]:h[0];f.quad([g,3,-1.1],[p,3,-1.1],[p,2.55,1.35],[g,2.55,1.35],y),f.tri([g,2.55,1.35],[p,2.55,1.35],[(g+p)/2,2.15,1.4],y)}f.quad([-1.9,2.55,-1.1],[1.9,2.55,-1.1],[1.9,3,-1.1],[-1.9,3,-1.1],h[0])});let u=Math.cos(n),d=Math.sin(n);for(let f of[-1,1])r.at(t,c,e,n,m=>m.cyl(.28,.28,.55,6,W.red,f*1.7,1.85,1.2)),Te(i.h,16757610,3.3,t+f*1.7*u+1.2*d,c+2.1,e-f*1.7*d+1.2*u,.85)}function Nx(i,t,e){let{S:n,fr:s}=i,r=Math.max(s.ground(t,e),.4),o=r+1.55;n.at(t,o,e,0,l=>{l.at(0,0,0,0,c=>c.cyl(1,1,1.5,14,8014382,0,-.75,0),0,0,Math.PI/2);for(let c of[-1,1])l.at(c*.6,0,0,0,h=>h.cyl(1.05,1.05,.16,14,W.red,0,-.08,0),0,0,Math.PI/2);for(let c of[-1,1])for(let h=0;h<14;h++){let u=h/14*6.283;l.ball(.06,W.gold,c*.78,Math.cos(u)*1,Math.sin(u)*1,1,1,1,0)}for(let c of[-1,1])l.box(.3,1.4,.3,W.woodD,c*.6,-1,.95),l.box(.3,1.4,.3,W.woodD,c*.6,-1,-.95);l.box(1.8,.25,2.4,W.woodD,0,-1.4,0)});let a=new ye({gradientMap:Pe,color:15324844,side:me,fog:!0});for(let l of[-1,1]){let c=new $(new fi(.97,20),a);c.userData.noMerge=!0,c.position.set(t+l*.7,o,e),c.rotation.y=Math.PI/2,i.h.add(c),i.drums.push(c)}for(let l of[-1,1]){let c=t+l*1.95;Fx(i,c,Math.max(s.ground(c,e),.4),e,Math.atan2(-l,0),l>0?15790310:W.red,!1,!0)}}function Ux(i,t,e){let{S:n,CL:s,fr:r}=i,o=Math.max(r.ground(t,e),.4),a=12;n.cyl(.1,.14,a,5,W.woodD,t,o,e),n.ball(.28,W.gold,t,o+a+.2,e,1,1,1,1),n.cyl(.12,0,1.3,4,W.gold,t,o+a+.4,e);let l=[W.black,W.red,W.blue,15292282,W.green];s.at(t,o,e,0,c=>{l.forEach((h,u)=>{let d=a-.8-u*1.7,f=3.6-u*.25;c.at(.1,d,0,.2*u,m=>{m.cyl(.62-u*.04,.14,f,8,h,0,0,0)},0,-Math.PI/2+.08*u),c.ball(.12,16777215,.5,d+.25,.45,1,1,1,0),c.ball(.12,16777215,.5,d+.25,-.45,1,1,1,0)}),[16234441,16773792,10146047,10937249,16756838].forEach((h,u)=>c.quad([0,a-.4,.25*u-.5],[0,a-.7,.25*u-.5],[2.8,a-2-u*.12,.25*u-.5],[2.8,a-1.7-u*.12,.25*u-.5],h))})}function ME(i,t){let{S:e,E:n,CL:s,fr:r}=i,o=r.river(t),a=o.zc-o.hw-1.8,l=o.zc+o.hw+1.8,c=12.8,h=3.9;for(let f of[a,l]){let m=Math.max(r.ground(t,f),.2);e.cyl(.14,.2,c-m+.8,6,W.woodM,t,m-.3,f),e.ball(.3,W.gold,t,c+.8,f,1,1,1,0)}let u=f=>[t,c-h*Math.sin(Math.PI*f),a+(l-a)*f],d=Math.max(12,Math.round((l-a)/1.8));for(let f=0;f<d;f++)Ps(e,u(f/d),u((f+1)/d),.09,W.woodD);for(let f=1;f<d;f++){let m=u(f/d),x=Ru[(f+Math.abs(t|0))%4];e.box(.04,.35,.04,W.woodD,m[0],m[1]-.17,m[2],!1),n.cyl(.42,.34,.95,6,x,m[0],m[1]-1.3,m[2]),e.cyl(.44,0,.22,6,W.black,m[0],m[1]-.34,m[2]),f%3===0&&Te(i.h,16757610,3.6,m[0],m[1]-.85,m[2],.8)}for(let f=0;f<d;f++){let m=u((f+.1)/d),x=u((f+.9)/d);s.tri([m[0],m[1]-.05,m[2]],[x[0],x[1]-.05,x[2]],[(m[0]+x[0])/2,Math.min(m[1],x[1])-.7,(m[2]+x[2])/2],[W.red,W.cream,W.purple,W.orange][f%4])}}function*Bx(i){Ru.length=0,Ru.push(W.red,W.cream,W.orange,15292282);let{S:t,E:e,CL:n,fr:s,rnd:r}=i;for(let l of[-86,-62,-38,38,62,86])ME(i,l),yield;for(let l=0;l<40;l++){let c=-62+l*3.15;Math.abs(c+10)<9||(e.cyl(.36,.3,.8,6,Ru[l%4],c,ae.PH+1.6,ae.ZF+.5),t.box(.04,.5,.04,W.woodD,c,ae.PH+2.5,ae.ZF+.5,!1),l%3===0&&Te(i.h,16757610,3.2,c,ae.PH+2,ae.ZF+.7,.8))}for(let l=0;l<14;l++){let c=-80+l*12+r()*3;if(Math.abs(c+10)<10)continue;let h=ae.PO-.8,u=Math.max(s.ground(c,h),.3);xp(i,c,u,h,[W.red,W.purple,W.blue,W.orange,W.green][l%5])}let o=[-76,-60,-36,16,28,40,52,64,76],a=[-52,-30,-12,6,24,44,62];for(let l of o)Dx(i,l,ae.PO-2.8,0),yield;for(let l of a){let c=s.river(l);Dx(i,l,c.zc+c.hw+3.2,Math.PI),yield}for(let l of o)Il(i,l,ae.PO-.4,2,3,0),yield;for(let l of a){let c=s.river(l);Il(i,l,c.zc+c.hw+1.2,2,3,Math.PI),yield}Il(i,-10,ae.PO+1,2,1.2,0),Il(i,-16,ae.PO-6,4,3,0),Il(i,-4,ae.PO-6,4,3,0),Nx(i,-24,ae.PO-4.5),Nx(i,4,ae.PO-4.5),Ux(i,-17,ae.PO-1.6),Ux(i,-3,ae.PO-1.6)}var W={plaster:16184300,plasterS:15131093,tile:5726575,tile2:6713727,ridge:15658214,black:2763827,woodD:3811876,woodM:7162426,red:11876396,redD:9251363,gold:14989394,stone:10395033,stoneD:6118490,gravel:14341056,win:16767120,pink:Vi.c,pink2:Vi.c2,pink3:16304598,trunk:7294787,purple:5913996,cream:16773590,orange:15766330,blue:3104666,green:5214047},{PH:dn}=ae,bE=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function Du(i,t,e,n,s,r,o,a,l,c={}){var v;let h=c.n||5,u=(v=c.flare)!=null?v:.7,d=Math.max(4,Math.ceil(2*s/1.5)),f=Math.max(4,Math.ceil(2*r/1.5)),m=[],x=c.tile||W.tile,g=c.tile2||W.tile2,p=new Set([0,d,d+f,2*d+f]),y=2*d+2*f;for(let S=0;S<=h;S++){let b=S/h,T=s+(o-s)*b,_=r+(a-r)*b,w=e+l*Math.pow(b,1.55),R=[],I=(L,D)=>{let C=Math.pow(Math.abs(L)/Math.max(T,.01),6)*Math.pow(Math.abs(D)/Math.max(_,.01),6);R.push([t+L,w+u*Math.pow(1-b,2.2)*Math.min(1,C*1.1),n+D])};for(let L=0;L<d;L++)I(-T+2*T*L/d,-_);for(let L=0;L<f;L++)I(T,-_+2*_*L/f);for(let L=0;L<d;L++)I(T-2*T*L/d,_);for(let L=0;L<f;L++)I(-T,_-2*_*L/f);m.push(R)}i.orient([t,e-40,n]).loft(m,(S,b)=>p.has(S)||p.has((S+1)%y)?W.ridge:S%2?x:g);let M=m[0].map(S=>[S[0],S[1]-.55,S[2]]);return i.loft([m[0],M],W.plaster),i.free(),m}function _p(i,t,e,n,s,r,o,a,l,c,h={}){var M;Du(i,t,e,n,s,r,o,a,l,h);let u=e+l,d=(M=h.ov)!=null?M:.9,f=o+d,m=Math.max(4,Math.ceil(2*f/1.5)),x=5,g=h.tile||W.tile,p=h.tile2||W.tile2,y=[];for(let v=0;v<=x;v++){let S=-a+2*a*v/x,b=1-Math.abs(S)/a;y.push([S,c*Math.pow(b,1.35)])}i.orient([t,u-40,n]);for(let v=0;v<x;v++)for(let S=0;S<m;S++){let b=t-f+2*f*S/m,T=t-f+2*f*(S+1)/m,_=y[v],w=y[v+1];i.quad([b,u+_[1]+.15,n+_[0]],[T,u+_[1]+.15,n+_[0]],[T,u+w[1]+.15,n+w[0]],[b,u+w[1]+.15,n+w[0]],S%2?g:p)}for(let v of[-1,1]){let S=t+v*o;i.orient([t,u,n]);for(let T=0;T<x;T++){let _=y[T],w=y[T+1];i.quad([S,u,n+_[0]],[S,u,n+w[0]],[S,u+w[1],n+w[0]],[S,u+_[1],n+_[0]],W.plaster)}let b=t+v*(o+d);i.orient([t,u,n]);for(let T=0;T<x;T++){let _=y[T],w=y[T+1];i.quad([b,u+_[1]-.1,n+_[0]],[b,u+w[1]-.1,n+w[0]],[b,u+w[1]+.3,n+w[0]],[b,u+_[1]+.3,n+_[0]],W.woodD)}i.free(),i.box(.3,.9,.9,W.gold,S+v*.1,u+c*.38,n)}i.free(),i.box(2*f,.5,.7,W.ridge,t,u+c+.35,n);for(let v of[-1,1])i.box(1.1,1.2,1.2,W.black,t+v*f,u+c+.55,n);return u+c+.55}function Mp(i,t,e,n,s,r,o,a={}){let l=Math.max(2,Math.ceil(s/1.7)),c=4,h=a.tile||W.tile,u=a.tile2||W.tile2,d=[];for(let m=0;m<=c;m++){let x=-r/2+r*m/c,g=1-Math.abs(x)/(r/2);d.push([x,o*Math.pow(g,1.3)+(m===0||m===c?.18:0)])}i.orient([t,e-30,n]);for(let m=0;m<c;m++)for(let x=0;x<l;x++){let g=t-s/2+s*x/l,p=t-s/2+s*(x+1)/l,y=d[m],M=d[m+1];i.quad([g,e+y[1],n+y[0]],[p,e+y[1],n+y[0]],[p,e+M[1],n+M[0]],[g,e+M[1],n+M[0]],(m===c/2-.5||c/2+.5,x%2?h:u))}if(!a.noCap)for(let m of[-1,1]){let x=t+m*s/2;for(let g=0;g<c;g++){let p=d[g],y=d[g+1];i.quad([x,e,n+p[0]],[x,e,n+y[0]],[x,e+y[1],n+y[0]],[x,e+p[1],n+p[0]],W.plaster)}}i.free(),i.box(s,.38,.7,W.ridge,t,e+o+.2,n);let f=[[t-s/2,e-.5,n-r/2],[t+s/2,e-.5,n-r/2]];i.quad([t-s/2,e,n-r/2],[t+s/2,e,n-r/2],f[1],f[0],W.plaster),i.quad([t+s/2,e,n+r/2],[t-s/2,e,n+r/2],[t-s/2,e-.5,n+r/2],[t+s/2,e-.5,n+r/2],W.plaster)}function kx(i,t,e,n,s){let o=[];for(let a=0;a<=16;a++){let l=-t/2+t*a/16,c=1-Math.abs(l)/(t/2);o.push([l,e*(.5-.5*Math.cos(Math.PI*Math.pow(c,.9)))])}i.save().T(0,0,0,0,s),i.orient([0,-3,-n/2]);for(let a=0;a<16;a++){let l=o[a],c=o[a+1],h=a%2?W.tile:W.tile2;i.quad([l[0],l[1]+.2,.95],[c[0],c[1]+.2,.95],[c[0],c[1]+.2,-n],[l[0],l[1]+.2,-n],h),i.quad([l[0],l[1]-.1,.75],[c[0],c[1]-.1,.75],[c[0],c[1]+.2,.95],[l[0],l[1]+.2,.95],W.plaster),i.quad([l[0],-.7,.5],[c[0],-.7,.5],[c[0],c[1]-.1,.5],[l[0],l[1]-.1,.5],W.plaster),i.quad([l[0],l[1]-.55,.62],[c[0],c[1]-.55,.62],[c[0],c[1]+0,.62],[l[0],l[1]+0,.62],W.woodD),i.quad([l[0],-.7,-n],[c[0],-.7,-n],[c[0],c[1]+.2,-n],[l[0],l[1]+.2,-n],W.plaster)}i.box(.26,e*.5,n,W.ridge,0,e*.5+.3,-n/2+.45,!1),i.free(),i.ball(.5,W.gold,0,e*.55,.75,1,1,.8,1),i.restore()}function SE(i,t,e,n,s){i.save().T(0,0,0,0,s),i.orient([0,-2,-n/2]);for(let r of[-1,1])i.quad([0,e+.2,.5],[0,e+.2,-n],[r*(t/2+.45),-.1,-n],[r*(t/2+.45),-.1,.8],r>0?W.tile:W.tile2);i.tri([-t/2-.2,-.4,.5],[t/2+.2,-.4,.5],[0,e+.1,.5],W.plaster).tri([-t/2-.35,-.4,.58],[t/2+.35,-.4,.58],[0,e+.35,.58],W.woodD).tri([-t/2,-.4,.62],[t/2,-.4,.62],[0,e,.62],W.plaster),i.free().ball(.3,W.gold,0,e*.4,.7,1,1,.7,0),i.restore()}function Gx(i,t=1){i.save().T(0,0,0,0,0,0,t);let e=[];for(let s=0;s<=9;s++){let r=s/9;e.push([-.4*Math.sin(r*2.4)*0+(-.1+r*.5-r*r*1.5)*1,.3+r*2.4-r*r*.2,0])}for(let s=0;s<=9;s++){let r=s/9,o=e[s],a=.52*(1-r*.8)+.08;i.ball(a,Cn(W.gold,.88+.2*(s%2)),o[0],o[1],o[2],1,1.05,.9,1),s>1&&s<9&&i.cyl(.13,0,.55,4,W.gold,o[0]-.05,o[1]+a*.85,0)}let n=e[9];i.ball(.3,W.gold,n[0]-.35,n[1]+.2,0,1.6,.5,.9,1).ball(.26,Cn(W.gold,1.1),n[0]-.7,n[1]+.55,0,1.3,.4,1.1,1),i.ball(.62,W.gold,.55,.35,0,1.35,.9,1,1).box(.9,.14,.6,W.gold,.95,.04,0).box(.9,.1,.55,W.gold,.95,.78,0).cyl(.07,0,.5,4,16777215,1.25,.15,.16).cyl(.07,0,.5,4,16777215,1.25,.15,-.16),i.ball(.1,W.black,.78,.62,.3,1,1,1,0).ball(.1,W.black,.78,.62,-.3,1,1,1,0);for(let s of[-1,1])i.cyl(.1,0,.9,4,W.red,.45,.95,s*.28);i.restore()}function Ox(i,t,e,n,s,r,o,a,l){let c=[o];for(;c[c.length-1]>r+.05;){let f=c[c.length-1],m=(f-r)/(o-r);c.push(Math.max(r,f-(.85+.5*(1-m)+l()*.35)))}let h=f=>a*Math.pow((o-f)/(o-r),1.6),u=f=>{let m=h(f),x=n+m,g=s+m;return[[t-x,f,e-g],[t+x,f,e-g],[t+x,f,e+g],[t-x,f,e+g]]},d=[[0,0,-1],[1,0,0],[0,0,1],[-1,0,0]];i.orient([t,(r+o)/2,e]);for(let f=0;f<c.length-1;f++){let m=u(c[f]),x=u(c[f+1]),g=.78+.22*((c[f]-r)/(o-r));for(let p=0;p<4;p++){let y=m[p],M=m[(p+1)%4],v=x[p],S=x[(p+1)%4],b=Math.hypot(M[0]-y[0],M[2]-y[2]),T=(w,R)=>{let I=[y[0]+(M[0]-y[0])*w,y[1],y[2]+(M[2]-y[2])*w],L=[v[0]+(S[0]-v[0])*w,v[1],v[2]+(S[2]-v[2])*w];return[I[0]+(L[0]-I[0])*R,I[1]+(L[1]-I[1])*R,I[2]+(L[2]-I[2])*R]};i.quad(T(0,0),T(1,0),T(1,1),T(0,1),W.stoneD);let _=-l()*.5/b*3;for(;_<1;){let w=(1.5+l()*1.5)/b,R=_+w,I=Math.max(0,_)+.05/b*1.3,L=Math.min(1,R)-.05/b*1.3;if(L>I){let D=d[p],C=j=>j,U=.1,z=(j,B)=>{let V=T(j,B);return[V[0]+D[0]*U,V[1],V[2]+D[2]*U]},k=Cn(W.stone,g*(.8+l()*.34));i.quad(z(I,.06),z(L,.06),z(L,.94),z(I,.94),k)}_=R}}}i.free()}function Pu(i,t,e,n,s,r=1,o=1.4){i.S.at(t,e,n,s,a=>{a.box(r+.3,o+.3,.2,W.woodD,0,0,.1).box(r+.5,.14,.4,W.woodM,0,o/2+.28,.2);for(let l=-1;l<=1;l++)a.box(.07,o,.06,W.woodD,l*r*.3,0,.28);a.box(r,.06,.06,W.woodD,0,0,.28)}),i.E.at(t,e,n,s,a=>{a.box(r,o,.05,W.win,0,0,.2)})}function bp(i,t,e,n,s,r,o,a,l,c={}){for(let h=0;h<a;h++){let u=(h+.5)/a-.5;for(let d of[1,-1])Pu(i,t+u*(s-3),n,e+d*(r/2),d>0?0:Math.PI,c.w,c.h)}for(let h=0;h<l;h++){let u=(h+.5)/l-.5;for(let d of[1,-1])Pu(i,t+d*(s/2),n,e+u*(r-3),d>0?Math.PI/2:-Math.PI/2,c.w,c.h)}}var EE=[0,Math.PI/2,Math.PI,-Math.PI/2];function zx(i,t,e,n,s,r,o,a,l,c){let h=n+(r-n)*c,u=s+(o-s)*c,d=e+a*Math.pow(c,1.55),f=a*1.55*Math.pow(c,.55),m=l%2?n-r:s-o,x=Math.atan2(f,Math.max(.3,m));return{px:i+(l===1?h:l===3?-h:0),py:d,pz:t+(l===0?u:l===2?-u:0),ry:EE[l],ang:x}}function Cu(i,t,e,n,s){let{P:r,S:o,G:a}=i,l=n,c=0;return s.forEach((h,u)=>{let{w:d,d:f,h:m}=h;r.box(d,m,f,W.plaster,t,l+m/2,e,!1),o.box(d+.26,.7,f+.26,W.woodD,t,l+.35,e,!1),o.box(d+.22,.34,f+.22,W.woodD,t,l+m-.4,e,!1),h.wood&&o.box(d+.2,m*.36,f+.2,W.woodM,t,l+m*.2+.3,e,!1);for(let y of[-1,1])for(let M of[-1,1])o.box(.42,m,.42,W.woodD,t+y*d/2,l+m/2,e+M*f/2,!1);let x=h.nx||3,g=h.nz||2;for(let y=1;y<x;y++)for(let M of[1,-1])o.box(.2,m-1.1,.12,W.woodD,t-d/2+d*y/x,l+m/2,e+M*(f/2+.03),!1);bp(i,t,e,l+m*.55,d,f,m,x,g,{});let p=s[u+1];if(h.ro){let y=h.ro,M=p?p.w/2:0,v=p?p.d/2:0,S=l+m-.25,b=d/2+y.o,T=f/2+y.o;if(y.irimoya){if(c=_p(r,t,S,e,b,T,d/2-.4,f/2-.4,y.rise,y.gh,{}),y.shachi)for(let _ of[-1,1])a.at(t+_*(d/2-.4+.9+.6),c-.3,e,_>0?0:Math.PI,w=>Gx(w,y.shachi))}else Du(r,t,S,e,b,T,M,v,y.rise,y);if(!y.irimoya){for(let _ of y.k||[]){let w=zx(t,e,S,b,T,M,v,y.rise,_,.36);r.at(w.px,w.py,w.pz,w.ry,R=>kx(R,y.kw||8,y.kh||3.4,y.kd||5,w.ang))}for(let _ of y.c||[]){let w=zx(t,e,S,b,T,M,v,y.rise,_,.42);r.at(w.px,w.py,w.pz,w.ry,R=>SE(R,y.cw||3.6,y.ch||1.6,y.cd||3,w.ang))}}l=S+y.rise}else l+=m}),{top:l,ridge:c}}function Pl(i,t,e,n,s,r,o={}){let a=o.h||5,l=o.wd||4.4;i.P.at(t,e,n,r,c=>{c.box(s,a,l,W.plaster,0,a/2,0,!1),Mp(c,0,a-.3,0,s,l+2.2,o.rise||2.4,{})}),i.S.at(t,e,n,r,c=>{c.box(s+.1,.55,l+.22,W.woodD,0,.28,0,!1),c.box(s+.1,.3,l+.2,W.woodD,0,a-.2,0,!1);let h=Math.max(1,Math.floor(s/2.6));for(let u=0;u<h;u++){let d=-s/2+s*(u+.5)/h;for(let f of[1,-1])c.at(d,a*.5,f*(l/2+.13),f>0?0:Math.PI,m=>{u%2?m.quad([-.3,-.3,0],[.3,-.3,0],[.3,.3,0],[-.3,.3,0],W.black):m.tri([-.38,-.32,0],[.38,-.32,0],[0,.4,0],W.black)})}})}function Ll(i,t,e,n,s,r,o={}){let a=n-t,l=s-e,c=Math.hypot(a,l),h=Math.atan2(-l,a),u=(t+n)/2,d=(e+s)/2,f=o.h||3,m=o.th||1.3;i.P.at(u,r,d,h,x=>{x.box(c,f,m,W.plaster,0,f/2,0,!1),Mp(x,0,f-.05,0,c,m+1.5,.95,{})}),i.S.at(u,r,d,h,x=>{x.box(c+.05,.3,m+.1,W.woodD,0,.15,0,!1);let g=Math.max(1,Math.floor(c/3));for(let p=0;p<g;p++){let y=-c/2+c*(p+.5)/g;x.at(y,f*.52,m/2+.13,0,M=>{if(p%3===0)M.tri([-.34,-.3,0],[.34,-.3,0],[0,.36,0],W.black);else if(p%3===1)M.quad([-.28,-.28,0],[.28,-.28,0],[.28,.28,0],[-.28,.28,0],W.black);else{let S=[];for(let b=0;b<8;b++)S.push([Math.cos(b/8*6.283)*.3,Math.sin(b/8*6.283)*.3,0]);for(let b=0;b<8;b++)M.tri([0,0,0],S[b],S[(b+1)%8],W.black)}})}})}function wE(i,t,e,n){let{P:s,S:r,G:o,E:a,CL:l}=i;s.box(13,4.8,7,W.plaster,t,n+2.4,e,!1),r.box(13.3,.8,7.3,W.woodD,t,n+.4,e,!1),r.box(13.2,.4,7.2,W.woodD,t,n+4.4,e,!1),r.box(4.2,3.7,.3,W.black,t,n+1.85,e+3.52,!1);for(let h of[-1,1])r.box(.55,4.2,.6,W.woodD,t+h*2.4,n+2.1,e+3.6,!1),r.box(.9,3.2,.15,W.red,t+h*3.2,n+1.7,e+3.75,!1);r.box(5.6,.55,.7,W.woodD,t,n+4.1,e+3.7,!1);for(let h of[-1,1])for(let u=0;u<2;u++)Pu(i,t+h*(4.4+u*1.5),n+2.6,e+3.5,0,.9,1.2);s.box(10,3.4,5,W.plaster,t,n+4.6+1.7,e,!1),r.box(10.26,.5,5.26,W.woodD,t,n+4.6+.25,e,!1),r.box(10.2,.3,5.2,W.woodD,t,n+4.6+3.2,e,!1),bp(i,t,e,n+6.6,10,5,3.4,3,1,{}),Du(s,t,n+4.55,e,6.5+1.1,3.5+1.1,5,2.5,2.2,{});let c=_p(s,t,n+4.6+3.15,e,5+1.8,2.5+1.8,4.4,2.1,1.9,2.6,{});for(let h of[-1,1])o.at(t+h*(4.4+.9+.6),c-.3,e,h>0?0:Math.PI,u=>Gx(u,.5));s.at(t,n+4.55+2.2*Math.pow(.45,1.55),e+3.5+1.1-(1.1+1.5)*.45,0,h=>kx(h,6,2.5,3,.5));for(let h=0;h<5;h++){let u=t-5+h*2.5,d=n+3.4;l.box(1.9,2,.05,W.purple,u,d,e+3.62,!1),l.at(u,d,e+3.66,0,f=>{let x=[];for(let g=0;g<10;g++)x.push([Math.cos(g/10*6.283)*.5,Math.sin(g/10*6.283)*.5,0]);for(let g=0;g<10;g++)f.tri([0,0,0],x[g],x[(g+1)%10],W.cream)})}for(let h of[-1,1,0])a.box(.9,1.3,.9,W.red,t+h*6.1,n+3.3,e+4.2),r.box(.12,.9,.12,W.woodD,t+h*6.1,n+4.4,e+4.2),Te(i.h,16757610,5,t+h*6.1,n+3.3,e+4.4,.85)}function TE(i,t,e,n){let{P:s,S:r,G:o,E:a}=i;s.box(8,4.6,6.4,W.plaster,t,n+2.3,e,!1),r.box(8.26,.6,6.66,W.woodD,t,n+.3,e,!1),r.box(8.2,.3,6.6,W.woodD,t,n+4.3,e,!1),r.box(3.2,3.5,.3,W.black,t,n+1.75,e+3.25,!1);for(let c of[-1,1])r.box(.5,3.9,.5,W.woodD,t+c*1.9,n+1.95,e+3.3,!1);r.box(4.6,.5,.6,W.woodD,t,n+3.9,e+3.4,!1),s.box(5.6,3,4.4,W.plaster,t,n+4.45+1.5-.15,e,!1),r.box(5.86,.4,4.66,W.woodD,t,n+4.45+.05,e,!1),bp(i,t,e,n+6,5.6,4.4,3,2,1,{}),Du(s,t,n+4.45,e,4+1.5,3.2+1.5,2.8,2.2,1.8,{});let l=_p(s,t,n+4.45+3,e,2.8+1.6,2.2+1.6,2.4,1.9,1.5,2.2,{});for(let c of[-1,1])a.box(.7,1,.7,W.red,t+c*3,n+3.2,e+3.6)}function Hx(i,t,e,n,s,r){let o=i.S;o.cyl(.3*s,.46*s,3.5*s,6,W.trunk,t,e,n);let a=(r()-.5)*.8;o.cyl(.16*s,.24*s,2.2*s,5,W.trunk,t+a*.8,e+2.8*s,n+a*.4);let l=[W.pink,W.pink2,W.pink3,Cn(W.pink,1.06)];for(let[c,h,u,d]of[[0,4.7,0,2.9],[1.9,4.1,.7,2],[-1.7,4.3,-.9,2.2],[.4,5.9,-.4,1.8]])o.ball(d*s*(.9+r()*.25),l[r()*4|0],t+c*s,e+h*s,n+u*s,1,.78,1,1);o.cyl(2.5*s,2.5*s,.04,9,W.pink3,t+(r()-.5)*1.4,e+.06,n+(r()-.5)*1.4,!0)}function Lu(i,t,e,n,s=1){let r=i.S,o=W.stone;r.cyl(.5*s,.62*s,.3*s,7,o,t,e,n),r.cyl(.17*s,.2*s,1.3*s,6,o,t,e+.3*s,n),r.cyl(.5*s,.32*s,.2*s,7,o,t,e+1.6*s,n),r.box(.7*s,.6*s,.7*s,o,t,e+2.1*s,n,!1),i.E.box(.46*s,.4*s,.74*s,W.win,t,e+2.1*s,n).box(.74*s,.4*s,.46*s,W.win,t,e+2.1*s,n),r.cyl(.7*s,0,.55*s,4,o,t,e+2.4*s,n),Te(i.h,16762746,2.8*s+.4,t,e+2.1*s,n,.8)}function AE(i){let{side:t,s:e,a:n,hwv:s}=i,r=Math.cos(n),o=Math.sin(n),a=ne(e),l=ae.PO,c=(d,f)=>{let m=t*(s+l-f),x=t*d;return[a+m*r-x*o,e-(m*o+x*r)]};return{toW:c,ground:(d,f)=>{let[m,x]=c(d,f);return $n(m,x)},river:d=>{let f=t*d,m=0;for(let g=0;g<4;g++){let p=e-(m*o+f*r);m=(ne(p)-a+f*o)/r}let x=e-(m*o+f*r);return{zc:s+l-t*m,hw:_e(x)}},side:t,s0:e,a:n,hw0:s}}function Ps(i,t,e,n,s,r){let o=e[0]-t[0],a=e[1]-t[1],l=e[2]-t[2],c=Math.hypot(o,a,l);c<1e-4||i.save().T((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2,Math.atan2(o,l),-Math.atan2(a,Math.hypot(o,l)),0).box(n,r||n,c,s).restore()}function*Vx(i,t,e){let n=performance.now(),{side:s,hwv:r}=e,o=bE(t*7919+11),a=new Qt;a.position.set(s*(r+ae.PO),0,0),a.rotation.y=-s*Math.PI/2,i.add(a);let l={P:new _i,S:new _i,G:new _i,E:new _i,CL:new _i,h:a,rnd:o,fr:AE(e),ctx:e,drums:[]},{P:c,S:h,G:u,E:d,CL:f}=l,m=dn+12,x=-10,g={},p=0,y=performance.now(),M=B=>{let V=c.count()+h.count()+u.count()+d.count()+f.count(),J=performance.now();g[B]=[V-p,Math.round(J-y)],p=V,y=J};h.box(2*ae.X-1,.3,ae.ZF-ae.ZB-1,W.gravel,0,dn-.08,(ae.ZF+ae.ZB)/2,!1),Ox(h,0,(ae.ZF+ae.ZB)/2,ae.X,(ae.ZF-ae.ZB)/2,-1.8,dn,4.8,o),h.box(2*ae.X+1.4,.5,1.2,W.stone,0,dn+0,ae.ZF+.3,!1),Ox(h,0,-12,30,22,dn-.4,m,6.4,o),h.box(61.6,.3,45.6,W.gravel,0,m-.1,-12,!1),M("piedra"),yield;let v=5.8,S=24;for(let B=0;B<S;B++){let V=m-.5*(B+1),J=10.5+B;h.box(v,V-dn,1,Cn(W.stone,.92+.1*(B*7%3)/2),x,(dn+V)/2,J+.5,!1);for(let mt of[-1,1])h.box(.6,V+.8-dn,1,W.stone,x+mt*(v/2+.3),(dn+V+.8)/2,J+.5,!1);if(B%4===1)for(let mt of[-1,1])Lu(l,x+mt*(v/2+1.5),V,J+.5,.8)}M("escalera"),yield;let b=12,T=-17,_=Cu(l,b,T,m,[{w:26,d:22,h:5.4,nx:5,nz:4,wood:!0,ro:{o:2.6,rise:3.3,c:[0,2],cw:4.2,cd:3.2}},{w:23.4,d:19.4,h:4.8,nx:5,nz:4,ro:{o:2.4,rise:3,k:[0,2],kw:9,kh:3.6,kd:5.5}},{w:20.8,d:16.8,h:4.4,nx:4,nz:3,ro:{o:2.2,rise:2.8,c:[1,3],cw:4,cd:3.4}},{w:18.2,d:14.2,h:4,nx:4,nz:3,ro:{o:2,rise:2.6,k:[0,2],kw:7,kh:3,kd:4.5}},{w:15.6,d:11.8,h:3.8,nx:3,nz:2},{w:13.2,d:9.8,h:3.6,nx:3,nz:2,ro:{o:2.7,rise:3,gh:4.4,irimoya:!0,shachi:1}}]);M("keep"),yield;let w=Cu(l,-22,-27,m,[{w:12,d:10,h:4.6,nx:3,nz:2,ro:{o:1.9,rise:2.2,k:[0],kw:5,kh:2.4,kd:3.4}},{w:9.2,d:7.4,h:3.8,nx:2,nz:2,ro:{o:2,rise:2.2,gh:3,irimoya:!0,shachi:.6}}]),R=Cu(l,24,2,m,[{w:10.6,d:9,h:4.2,nx:3,nz:2,ro:{o:1.8,rise:2,k:[0],kw:5,kh:2.2,kd:3}},{w:8,d:6.6,h:3.4,nx:2,nz:2,ro:{o:1.9,rise:2,gh:2.8,irimoya:!0,shachi:.55}}]),I=Cu(l,-24,3,m,[{w:10,d:10,h:4.4,nx:3,nz:3,ro:{o:1.8,rise:2,c:[0],cw:3.4,cd:2.8}},{w:7.4,d:7.4,h:3.4,nx:2,nz:2,ro:{o:1.9,rise:3.6}}]);u.cyl(.14,0,2.2,5,W.gold,-24,I.top+.2,3).ball(.32,W.gold,-24,I.top+.2,3);for(let[B,V,J]of[[_,b,T],[w,-22,-27],[R,24,2]])h.cyl(.07,.09,4.4,4,W.woodD,V,B.ridge+.1,J),l.CL.quad([V,B.ridge+4.2,J],[V+3.4,B.ridge+3.8,J],[V+3.4,B.ridge+2.4,J],[V,B.ridge+2.7,J],W.purple);Pl(l,-8.5,m,-22,15,0),Pl(l,-22,m,-12,20,Math.PI/2),Pl(l,-16.5,m,3,5,0),Pl(l,8.5,m,3,25,0),Pl(l,22,m,-4.1,3.6,Math.PI/2),TE(l,-10,3,m),M("torres"),yield;let L=ae.ZF-1,D=ae.X-1,C=ae.ZB+1;Ll(l,-D,L,-16.5,L,dn),Ll(l,-3.5,L,D,L,dn),Ll(l,-D,C,-D,L,dn),Ll(l,D,L,D,C,dn),Ll(l,D,C,-D,C,dn),wE(l,-10,L-3,dn),M("muros+puerta"),yield;for(let[B,V]of[[-44,-30],[44,-34],[-46,14]]){c.box(16,5.2,8,W.plaster,B,dn+2.6,V,!1),h.box(16.2,.7,8.2,W.woodD,B,dn+.5,V,!1),Mp(c,B,dn+5.1,V,17.5,10.4,3.2);for(let J=0;J<3;J++)Pu(l,B-4.5+J*4.5,dn+3.4,V+4.05,0,.9,1.1)}RE(l),M("kura+puente"),yield;let U=0,z=[];for(let B=0;B<7;B++){let V=15+B*3.6;z.push([x-8.2,V],[x+8.2,V])}for(let B=0;B<13;B++)z.push([-62+o()*50,-46+o()*84],[40+o()*22,-46+o()*84]);for(let B=0;B<6;B++)z.push([-40+o()*80,-49+o()*7]);for(let[B,V]of z)V>12&&V<38&&Math.abs(B-x)<7&&Math.abs(B-x)>1||Math.abs(B)<39&&V>-42&&V<19&&!(V>12&&Math.abs(B-x)>7)||V>37&&Math.abs(B-x)<10||(Hx(l,B,dn+.05,V,.8+o()*.5,o),++U%9===0&&(yield));for(let[B,V]of[[-15,-10],[-11,-16],[-16,-4],[-7,-8],[-3,-14]])Hx(l,B,m+.05,V,.75+o()*.3,o);for(let B=0;B<12;B++){let V=-61+B*10.4+o()*2;Math.abs(V-x)<10||Lu(l,V,dn+.05,36,.9)}M("arboles"),yield,yield*Bx(l),M("festival"),yield;let k=CE();a.add(c.mesh(k.plaster)),M("m-pl"),yield,a.add(h.mesh(k.solid)),M("m-s"),yield,a.add(u.mesh(k.gold),d.mesh(k.emis),f.mesh(k.cloth)),M("m-rest"),yield;for(let[B,V,J,mt]of[[b-13.5,m+4,T+11.5,26],[b+13.5,m+5,T+11.5,24],[b,m+13,T+11,26],[b,m+21,T+8,22],[b,m+28,T+6,18],[b,m+34,T+5,14],[-22,m+4,-21,14],[24,m+5,8,14],[-24,m+5,9,14],[-10,dn+5,ae.ZF+3,18]])Te(a,16766354,mt,B,V,J,.2);M("focos"),i.updateMatrixWorld(!0);let j=new N(b,m+14,T);return a.localToWorld(j),i.userData.cas={parts:g,ms:0,tris:c.count()+h.count()+u.count()+d.count()+f.count(),mats:k,keep:{x:b,z:T,top:_.top,ridge:_.ridge},drums:l.drums,h:a,fr:l.fr,cw:j},i.userData.cas.ms=performance.now()-n,i}function RE(i){let{S:t,E:e}=i,n=-10,s=61.5,r=44.4,o=1.2,a=dn+.2,l=16,c=5.4,h=x=>1.1*Math.sin(Math.PI*x)*(1-x),u=(x,g=0,p=0)=>{let y=x/l;return[n+g,o+(a-o)*y+h(y)+p,s+(r-s)*y]};for(let x=0;x<l;x++)Ps(t,u(x),u(x+1),c,Cn(W.red,.9+.12*(x%2)),.3);for(let x of[-1,1]){let g=x*(c/2+.1);for(let p=0;p<=l;p++){let y=u(p,g);if(t.box(.22,1.5,.22,W.red,y[0],y[1]+.85,y[2],!1),p%5===0&&(t.ball(.2,W.gold,y[0],y[1]+1.75,y[2],1,1,1,0),e.box(.42,.6,.42,W.red,y[0],y[1]+2.2,y[2]),Te(i.h,16757610,3.4,y[0],y[1]+2.2,y[2],.85)),p<l){let M=u(p+1,g);for(let v of[1.5,.8])Ps(t,[y[0],y[1]+v,y[2]],[M[0],M[1]+v,M[2]],.12,W.red)}}}for(let x of[s-.4,(s+r)/2,r+.4])for(let g of[-1,1])t.cyl(.2,.26,o+2.6,6,W.woodD,n+g*(c/2-.2),-1.5,x);let d=ae.PO-3,f=ae.PO+5.2;for(let x=0;x<10;x++)t.box(3.6,.18,.62,Cn(W.woodM,.9+.2*(x%2)),n,.62,d+x*.9,!1);for(let x=0;x<6;x++)for(let g of[-1,1])t.cyl(.12,.15,2.4,5,W.woodD,n+g*1.7,-1.5,d+.6+x*1.6);for(let x of[-1,1])t.cyl(.14,.16,3.2,5,W.woodD,n+x*1.8,.6,f-.4),e.box(.4,.55,.4,W.red,n+x*1.8,3.95,f-.4),Te(i.h,16757610,3.6,n+x*1.8,3.95,f-.4,.9);let m=i.fr;for(let x=0;x<6;x++){let g=d-.8-x*.9,p=m.ground(n,g);t.box(4.6,.22,.82,Cn(W.stone,.9+.1*(x%3)),n,Math.max(p,.5),g,!1)}for(let x of[-1,1])for(let g=0;g<3;g++){let p=58.5-g*1.4,y=n+x*(4.6+g*.9),M=m.ground(y,p);xp(i,y,Math.max(M,.3),p,[W.red,W.purple,W.blue][g%3])}}function xp(i,t,e,n,s,r=6.2){i.S.cyl(.07,.09,r,5,W.woodD,t,e,n),i.S.box(1.3,.09,.09,W.woodD,t+.6,e+r-.2,n,!1),i.CL.box(1.1,r*.66,.04,s,t+.62,e+r*.62,n,!1),i.CL.box(1.14,.26,.05,W.cream,t+.62,e+r-.5,n,!1)}function CE(){let i=t=>new ye(Object.assign({gradientMap:Pe,color:16777215,vertexColors:!0,fog:!1},t||{}));return{plaster:i(),solid:i(),gold:i({emissive:0}),cloth:i({side:me}),emis:new Ie({color:16777215,vertexColors:!0,fog:!0})}}var Iu=(i,t,e)=>{i.r+=t.r*e,i.g+=t.g*e,i.b+=t.b*e},yp=new pt,vp=new pt(1,.8,.5),IE=new pt(1,.72,.3);function Wx(i,t,e){let n=i.userData.cas;if(!n||!n.cw)return;let s=n.mats,r=n.cw.x-F.px,o=n.cw.z-F.pz,a=Math.hypot(r,o),l=Be(70,640,a)*.8;yp.copy(Tt.fog.color);let c=1-l;for(let f of[s.plaster,s.solid,s.cloth])f.color.setScalar(1-l),f.emissive.copy(yp).multiplyScalar(l);Iu(s.plaster.emissive,vp,t*.34*c),Iu(s.solid.emissive,vp,t*.1*c),Iu(s.cloth.emissive,vp,t*.22*c),s.gold.color.setScalar(1-l),s.gold.emissive.copy(yp).multiplyScalar(l),Iu(s.gold.emissive,IE,(.14+.35*t)*c);let h=.3+.7*t;s.emis.color.setRGB(h,h*.95,h*.9);let u=performance.now(),d=Math.exp(-Math.max(0,u-(oe.hitT||0))/160);for(let f of n.drums){let m=1+.05*d;f.scale.set(m,m,1)}}function qx(i){let t=PE(i);return t.userData.job?t:Tu(t)}function PE(i){let t=je(i),e=xn(t),n=Je(i),s=new Qt,r=_e(t),o=n===6||tt(i,9)>.5?1:-1;s.position.set(ne(t),0,-t),s.rotation.y=-e;let a=(f,m)=>{let x=-e;return $n(ne(t)+f*Math.cos(x)+m*Math.sin(x),t-(-f*Math.sin(x)+m*Math.cos(x)))},l=13199183,c=11569004,h=8018508,u=Vi.c,d=8368266;if(n===0){let f=r*2+12,m=18,x=11880250,g=10329242,p=b=>3.4+1.7*(1-b*b);for(let b=0;b<m;b++){let T=(b+.5)/m*2-1,_=T*f/2,w=p(T),R=Xt(s,f/m+.4,.34,4.2,c,_,w,0,{map:Ye("plank")});R.rotation.z=-T*.4,Xt(s,.07,.34,4.3,h,_-f/m/2,w,0).rotation.z=-T*.4}for(let b of[-1.7,1.7])for(let T=0;T<m;T++){let _=(T+.5)/m*2-1,w=_*f/2,R=Xt(s,f/m+.5,.4,.3,7293498,w,p(_)-.4,b);R.rotation.z=-_*.4}for(let b of[-2,2]){for(let T=0;T<=m;T++){let _=T/m*2-1,w=_*f/2,R=p(_);Xt(s,.18,1.5,.18,x,w,R+.95,b);let I=new $(new pe(.16,8,6),qt(14264410));if(I.position.set(w,R+1.8,b),s.add(I),T%3===0){let L=new $(new Le(.22,.22,.45,8),new Ie({color:16767392}));L.position.set(w,R+2.35,b),s.add(L);let D=new $(new Oe(.3,.2,8),qt(x));D.position.set(w,R+2.68,b),s.add(D),Te(s,16762746,3,w,R+2.35,b,.8)}}for(let T=0;T<m;T++){let _=(T+.5)/m*2-1,w=_*f/2,R=p(_),I=Xt(s,f/m+.2,.14,.14,x,w,R+1.5,b);I.rotation.z=-_*.4;let L=Xt(s,f/m+.2,.1,.1,x,w,R+.7,b);L.rotation.z=-_*.4}}let y=p(0);for(let[b,T]of[[-2.6,-1.8],[2.6,-1.8],[-2.6,1.8],[2.6,1.8]])Ve(s,.22,.26,4.2,x,b,y+2.1,T,8);let M=new $(new Oe(4.6,2.4,4),qt(5982799));M.rotation.y=Math.PI/4,M.position.y=y+5.4,M.scale.set(1,1,.8),s.add(M),Xt(s,6.4,.3,.3,14264410,0,y+4.35,-1.8),Xt(s,6.4,.3,.3,14264410,0,y+4.35,1.8);let v=new $(new pe(.4,10,8),new Ie({color:16764810}));v.position.set(0,y+3.6,0),s.add(v),Te(s,16762746,6,0,y+3.6,0,.9);let S=[15245466,15913098,10274736,10466268];for(let b=0;b<12;b++){let T=(b+.5)/12*2-1,_=T*(f/2-2),w=p(T)+2.7+Math.sin(b*1.7)*.06,R=new $(new an(.5,.7),qt(S[b%4],{side:me}));R.position.set(_,w,0),R.rotation.set(0,0,Math.PI),s.add(R)}Xt(s,f-4,.04,.04,7293498,0,p(0)+3.1,0).scale.y=1,[-1,1].forEach(b=>{let T=b*(f/2+.6);Xt(s,3.4,5.5,5,g,T,.3,0,{map:Ye("stone")}),Xt(s,3.6,.35,5.3,8223610,T,3.2,0);for(let R=0;R<3;R++)Xt(s,1.2,.3,4.2,g,b*(f/2+2.6+R*1.1),.2+R*0,0).position.y=2.2-R*.8;let _=new $(new pe(.5,8,6),qt(12039082));_.scale.set(.9,1.1,1),_.position.set(T,3.9,2.2),s.add(_);let w=_.clone();w.position.z=-2.2,s.add(w)}),[-.28,.28].forEach(b=>{Xt(s,1.8,5.2,4,g,b*f,.4,0,{map:Ye("stone")})})}else if(n===1)[-1,1].forEach(f=>{Ve(s,.32,.38,7,l,f*3.6,2,0,10)}),Xt(s,10.5,.5,1,l,0,5.7,0),Xt(s,11.8,.35,1.3,5982794,0,6.15,0),Xt(s,8,.28,.5,l,0,4.8,0),Te(s,16762746,3,0,4.2,0,.6);else if(n===2){let f=(g,p,y,M,v,S,b,T)=>{let _=a(p,y);g.position.set(p,_-.2,y),g.rotation.y=T,s.add(g),Xt(g,M,S,v,15258550,0,S/2,0,{map:Ye("plank")}),Xt(g,M+.3,.35,v+.3,7293498,0,.1,0);let w=new $(new Oe(Math.max(M,v)*.82,S*.7,4),qt(b));w.rotation.y=Math.PI/4,w.position.y=S+S*.3,w.scale.set(M/Math.max(M,v),1,v/Math.max(M,v)),g.add(w);let R=new Ie({color:16769184}),I=Xt(g,.9,.9,.12,16769184,-M*.22,S*.55,v/2+.02);I.material=R;let L=Xt(g,.9,.9,.12,16769184,M*.22,S*.55,v/2+.02);L.material=R,Xt(g,.8,1.5,.14,8014394,0,.85,v/2+.04),Te(g,16762746,4.2,-M*.22,S*.55,v/2+.6,.85),Te(g,16762746,4.2,M*.22,S*.55,v/2+.6,.85);let D=Xt(g,.7,1.6,.7,9075314,M*.25,S+1.1,-v*.2),C=oi(16777215,3);C.material.blending=Hi,C.material.opacity=.3,C.position.set(M*.25,S+2.8,-v*.2),g.add(C);let U=new $(new pe(.22,8,6),qt(14245962,{emissive:8006170}));U.position.set(M/2-.2,S*.78,v/2+.5),g.add(U),Te(g,16751210,2.4,M/2-.2,S*.78,v/2+.5,.8)},m=[11759722,9398879,11042906,8219250],x=0;for(let g of[-1,1])for(let p=0;p<7;p++){let y=-26+p*8.5+tt(i,p+g*9)*3,M=r+7+tt(i,p+30+g)*6+p%2*5,v=4+tt(i,p+50)*2.5,S=3.6+tt(i,p+60)*2,b=2.6+tt(i,p+70)*1.6;f(new Qt,g*M,y,v,S,b,m[(p+x)%4],g>0?-Math.PI/2:Math.PI/2),x++}for(let[g,p]of[[-1,-10],[1,6],[-1,18]]){let y=new Qt;y.position.set(g*(r-3.2),.35,p),s.add(y),Xt(y,8,.25,2.2,11569004,g*-0+0,0,0,{map:Ye("plank")}).position.x=g*4;for(let S of[0,3,6.4])for(let b of[-1,1])Ve(y,.1,.12,1.8,7293498,g*S+0,.2,b,5);let M=new $(new pe(.26,8,6),new Ie({color:16766362}));M.position.set(g*6.4,1.5,1),y.add(M),Te(y,16762746,3.6,g*6.4,1.5,1,.9);let v=new $(new pe(1,10,6),qt(6965818));v.scale.set(.6,.3,1.9),v.position.set(g*-3.2,-.15,2.2),y.add(v)}for(let g=0;g<18;g++){let p=g/17,y=-24+p*48,M=g%2?1:-1,v=new $(new pe(.25,8,6),new Ie({color:g%3?16766362:16751226}));v.position.set(M*(r+4+Math.sin(g)*1.2),4.2+Math.sin(g*1.9)*.5,y),s.add(v),Te(s,g%3?16762746:16751210,3.2,v.position.x,v.position.y,y,.85)}Te(s,16756838,46,o*(r+11),6,0,.28);for(let g of[-1,1])Ve(s,.25,.3,6.5,11880250,g*(r-.5),2.6,-34,8);Xt(s,r*2,.4,.5,11880250,0,5.8,-34),Te(s,16762746,4,-r*.5,5.2,-34,.9),Te(s,16762746,4,r*.5,5.2,-34,.9),Te(s,16762746,4,0,5.2,-34,.9)}else if(n===3){Fr(s,a,r,"\u685C",!1,"#d98aa6");for(let m=0;m<14;m++){let x=o*(r+4.5+tt(i,m)*15),g=(m-6.5)*4.1+tt(i,m+20)*2.4,p=a(x,g),y=new Qt,M=.9+tt(i,m+60)*.5;y.position.set(x,p,g),s.add(y),Ve(y,.26*M,.44*M,3.4*M,7294787,0,1.7*M,0,6);let v=Ve(y,.14*M,.2*M,2.2*M,7294787,.7*M,3.6*M,0,5);v.rotation.z=-.7;for(let[b,T,_,w,R]of[[0,4.5,0,2.7,u],[1.7,4,.6,1.9,Vi.c2],[-1.5,4.2,-.8,2.1,u],[.4,5.5,-.4,1.6,16304598]]){let I=new $(new bn(w*M*(.92+tt(i,m+b*7)*.2),1),qt(R));I.scale.y=.78,I.position.set(b*M,T*M,_*M),y.add(I)}let S=new $(new fi(2.6*M,9).rotateX(-Math.PI/2),qt(16173528,{side:me}));S.position.set(tt(i,m+9)*1.5-.7,.07,tt(i,m+19)*1.5-.7),y.add(S),m%3===0&&Te(y,16758475,7,0,4.6*M,0,.22)}for(let m of[-1,1]){let x=Zo(s,a,o*(r+3.4),m*10+2,1.1);x.position.y=a(o*(r+3.4),m*10+2)}let f=Xt(s,3.2,.28,.9,11880250,o*(r+7.5),a(o*(r+7.5),-3)+.55,-3);Xt(s,3.2,.7,.12,11880250,o*(r+7.5),a(o*(r+7.5),-3)+1,-3.5)}else if(n===4){Fr(s,a,r,"\u9DFA",!1,"#5f8aa8");let f=900,m=new Pn($f,Rs.material,f);m.frustumCulled=!1;let x=0;for(let p=0;p<f;p++){let y=p%2?1:-1,M=y*(r-5.5+tt(i,p)*13),v=(tt(i,p+50)-.5)*84;if(Math.abs(M)<r-5.8)continue;let S=1.1+tt(i,p+70)*1.5,b=Math.max(-.25,a(M,v)-.15);En.set(M,b,v),Sn.setFromAxisAngle(Cs,tt(i,p+90)*6.28),un.set(S,S*(1+tt(i,p+30)*.9),S),Qe.compose(En,Sn,un),m.setMatrixAt(x,Qe),m.setColorAt(x,$e.set(au[tt(i,p+4)*4|0])),x++}m.count=x,m.userData.keep=!0,s.add(m),s.userData.hp=[];for(let p=0;p<20;p++){let y=p%2?1:-1,M=p%3!==0,v=y*(r-(M?2.2+tt(i,p)*3.5:-1.5+tt(i,p)*2)),S=(tt(i,p+10)-.5)*70,b=.95+tt(i,p+5)*.5,T=tt(i,p+3)*6.28,_=M?-.12:a(v,S)-.1;if(p>=12){s.userData.hp.push([v,_,S,T,b,{gone:0}]);continue}let w=Eu(b,tt(i,p)*6.28);w.position.set(v,_,S),w.rotation.y=T,s.add(w)}let g=oi(16777215,10);g.material.blending=Hi,g.material.opacity=.25,g.position.set(0,1.2,0),s.add(g)}else if(n===5){Fr(s,a,r,"\u9418",!0,"#9a3a30");let f=o*(r+19),m=a(f,0),x=new Qt;x.position.set(f,m,0),x.rotation.y=-o*Math.PI/2,s.add(x);let g=10131604;Xt(x,17,3,15,g,0,-.5,0),Xt(x,15,.5,13,11841964,0,1.25,0),Xt(x,13,.5,11,12763064,0,1.75,0);for(let S=0;S<7;S++)Xt(x,6,.4,1.1,g,0,1.5-S*.28,7.9+S*.95);for(let[S,b]of[[-4,-3.2],[4,-3.2],[-4,3.2],[4,3.2],[-4,0],[4,0]])Ve(x,.34,.38,5,12730163,S,4.6,b,8);Xt(x,9.4,.5,.7,12730163,0,7.3,3.4),Xt(x,9.4,.5,.7,12730163,0,7.3,-3.4),Xt(x,.7,.5,7.2,12730163,-4.2,7.3,0),Xt(x,.7,.5,7.2,12730163,4.2,7.3,0),Xt(x,9,.35,.6,14264410,0,6.7,3.4),Xt(x,9,.2,7,8018508,0,2.15,0),Su(x,9.6,2.7,9.1,4999770),Xt(x,5.2,1.5,5.2,15721421,0,8.7,0),Xt(x,5.5,.2,5.5,12730163,0,7.9,0),Su(x,5.3,2,11.2,4144461),Ve(x,.1,.1,1.6,14264410,0,13,0,6);let p=new $(new pe(.34,8,6),qt(14264410,{emissive:5913104}));p.position.y=12.3,x.add(p),Xt(x,.5,.5,5,4864562,0,6.8,0),Ve(x,.05,.05,1.1,3811874,0,6.1,0,4);let y=Ve(x,.75,1.15,2,11831615,0,4.9,0,12,{emissive:4862992});Ve(x,.8,.8,.12,14264410,0,5.6,0,12),Te(x,16762746,5,0,4.6,0,.6);let M=Ve(x,.2,.2,4,6965818,0,3.3,2.6,6);M.rotation.x=Math.PI/2,M.position.set(0,3.5,2.6),Ve(x,.025,.025,1.6,15128736,0,4.6,2.2,4);for(let S of[-4,4])for(let b of[3.4,-3.4]){let T=new $(new pe(.34,8,6),qt(14245962,{emissive:9054746}));T.scale.y=1.3,T.position.set(S*1.12,6.2,b*1.05),x.add(T),Te(x,16751210,3,S*1.12,6.2,b*1.05,.85)}for(let S of[-3.4,3.4])for(let b of[10.4,14.5])Zo(x,()=>0,S,b,1.15).position.y=-.1;for(let S=0;S<5;S++)Xt(x,2.6,.12,1.6,g,0,-.3,10+S*2.1);Ex(x,0,-.4,17.5,1.1,12730163);let v=Sx(x,0,1.5,-3.5);v.position.set(o>0?-11.5:11.5,1.5,-2.5),v.scale.setScalar(1.1)}else if(n===6){let f=o*(r+3.6),m=a(f,0),x=new Qt;x.position.set(f,m,0),s.add(x),Fr(s,a,r,"\u6EDD",!1,"#3f7a8a");let g=b=>qt(b);for(let b=0;b<22;b++){let T=3+tt(i,b)*3.5,_=o*(7.8+tt(i,b+5)*9),w=tt(i,b+9)*15+(_*o<8?3:0),R=(tt(i,b+13)-.5)*17,I=new $(new bn(T,1),g(b%3?8030846:7114616));I.position.set(_,w,R),I.scale.y=1.2,x.add(I);let L=new $(new bn(T*.75,1),g(8369002));L.position.set(_,w+T*.65,R),L.scale.set(1.05,.45,1.05),x.add(L)}for(let b=0;b<10;b++){let T=1+tt(i,b+60)*1.2,_=new $(new bn(T,0),g(8030846));_.position.set(-o*(.5+tt(i,b+70)*3),T*.4,(tt(i,b+80)-.5)*12),x.add(_)}let p=new $(new an(7,19,1,1),sr);p.position.set(-o*.5,9.6,0),p.rotation.y=Math.PI/2,x.add(p);let y=new $(new an(3,14,1,1),sr);y.position.set(-o*.7,7,-5.6),y.rotation.y=Math.PI/2,y.rotation.z=.04,x.add(y);let M=new $(new fi(6.5,24).rotateX(-Math.PI/2),new Ie({color:13627122,transparent:!0,opacity:.6,depthWrite:!1}));M.position.set(-o*3.6,.1,0),x.add(M);let v=new $(new an(3.4,4.6).rotateX(-Math.PI/2),sr);v.rotation.y=o>0?Math.PI/2:-Math.PI/2,v.position.set(-o*3.4,.12,0),x.add(v);for(let b=0;b<6;b++){let T=oi(16777215,5+tt(i,b)*3);T.material.blending=Hi,T.material.opacity=.5,T.position.set(-o*(1+tt(i,b+3)*4),.5+tt(i,b)*.8,(tt(i,b+9)-.5)*7),x.add(T)}let S=oi(16777215,26);S.material.blending=Hi,S.material.opacity=.5,S.position.set(-o*3,4,0),x.add(S)}else if(n===7){Fr(s,a,r,"\u8336",!0,"#a9453a");let f=o*(r-3),m=new Qt;m.position.set(f,0,0),s.add(m);for(let p of[-2.4,2.4])for(let y of[-2,2])Ve(m,.12,.12,3,h,p,-.2,y,5);Xt(m,6,.3,5,c,0,1.3,0),Xt(m,4.6,2.4,3.6,15258550,0,2.6,0),Xt(m,4.8,.2,3.8,5982794,0,3.9,0),Xt(m,4.7,.15,3.7,5982794,0,1.45,0);let x=new $(new Oe(4.6,2,4),qt(9398879));x.rotation.y=Math.PI/4,x.position.y=4.8,m.add(x),Xt(m,1.2,1.1,.1,16769184,0,2.7,1.85).material=new Ie({color:16769184}),Te(m,16762746,4,0,2.7,2.1,.9);for(let p of[-.55,.55]){let y=new $(new an(1,1.4),new ye({gradientMap:Pe,map:mp("\u8336","#2f3f6b","#ffffff",128,160),side:me}));y.position.set(p,2.9,1.93),m.add(y)}for(let p of[-2.4,2.4]){let y=new $(new pe(.3,8,6),qt(14245962,{emissive:8006170}));y.scale.y=1.3,y.position.set(p,3.2,2.3),m.add(y),Te(m,16751210,2.6,p,3.2,2.3,.8)}Ve(m,.05,.05,2.6,c,3.4,2.2,3.2,5);let g=new $(new Oe(1.7,.7,12),qt(12730163));g.position.set(3.4,3.6,3.2),m.add(g),Xt(m,1.8,.15,.6,c,3.4,1.5,3.2),Xt(m,1.8,.05,.62,12730163,3.4,1.6,3.2);for(let p of[-1,1]){let y=Zo(s,a,f+p*6,5,1);y.position.y=a(f+p*6,5)}}else if(n===8){Fr(s,a,r,"\u7AF9\u6797",!1,"#4f8a5a");for(let f of[-1,1])for(let m=0;m<6;m++)Zo(s,a,f*(r+3+tt(i,m)*2.5),-45+m*18+tt(i,m+3)*4);for(let f=0;f<12;f++){let m=f%2?1:-1,x=m*(r+4+tt(i,f)*12),g=(tt(i,f+20)-.5)*110,p=new $(new an(3.6,22),new Ie({map:ti,color:16773296,transparent:!0,opacity:.14,blending:Gn,depthWrite:!1,side:me}));p.position.set(x,a(x,g)+10,g),p.rotation.set(0,tt(i,f+9)*3,m*.25),s.add(p)}}else if(n===10)s.userData.job=Vx(s,i,{gy:a,hwv:r,side:o,s:t,a:e});else for(let f=0;f<46;f++){let m=(tt(i,f)-.5)*r*1.5,x=(tt(i,f+40)-.5)*34,g=new $(new fi(.8+tt(i,f+7)*.5,10).rotateX(-Math.PI/2),qt(8372106,{side:me}));if(g.position.set(m,.05,x),s.add(g),f%4===0){let p=new $(new bn(.34,0),qt(16098493,{emissive:9058896}));p.scale.y=1.2,p.position.set(m,.3,x),s.add(p),Te(s,16752576,1.8,m,.5,x,.35)}}return s}var rr=new N,Sp=new N,Ep=new gn,LE=matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;function Xx(i){if(lt.cine||LE||lt.X.photo)return;let t=ai.get(i);if(!t)return;let e=je(i),n=_e(e),s=Je(i),r=s===6||tt(i,9)>.5?1:-1,o=[[0,5,0,0],[0,4,0,0],[0,5,0,0],[r*(n+10),4,0,1],[0,2.5,0,0],[r*(n+19),6,0,1],[r*(n+8),8,0,1],[r*(n-3),3,0,1],[0,8,0,0],[0,0,0,0],[r*(n+80),36,r*12,1]][s],a=o[3]===1,l=a?Math.abs(o[0])+n*.3:[46,30,52,0,40,0,0,0,30,30,0][s];lt.cine={k:i,g:t,t:0,dur:s===10?17:11.5,fx:o[0],fy:o[1],fz:o[2],sd:r,sided:a,R:Math.max(30,l),h:[10,6,12,10,8,13,10,7,6,9,-26][s]}}function Yx(i){if(!lt.cine){lt.cineW=0;return}lt.cine.t+=i,!lt.cine.snapped&&lt.cine.t>5.4&&(lt.cine.snapped=!0,lt.X.snap(Je(lt.cine.k)));let t=lt.cine,e=Bf(0,2.6,t.t)*(1-Bf(t.dur-2.6,t.dur,t.t));if(lt.cineW=e,t.t>=t.dur){lt.cine=null,lt.cineW=0;return}t.g.updateMatrixWorld(!0);let n=-.5+.95*(t.t/t.dur),s=Math.cos(n),r=Math.sin(n),o=t.sided?-t.sd:0,a=t.sided?0:1,l=o*s+a*r,c=-o*r+a*s;rr.set(t.fx+l*t.R,t.fy+t.h,t.fz+c*t.R),t.g.localToWorld(rr);let h=$n(rr.x,-rr.z);rr.y=Math.max(rr.y,h+3),Sp.set(t.fx,t.fy,t.fz),t.g.localToWorld(Sp),Ep.position.copy(rr),Ep.lookAt(Sp),pn.position.lerp(rr,e),pn.quaternion.slerp(Ep.quaternion,e)}var or=0,Zx=new fn,Jx=new fn,wp=new gn,Tp=new N,Nu=new N,Uu=new N,$x=We("cam");function Or(i){lt.camMode=i,$x.textContent=i?"Vista 3\xAA":"Vista 1\xAA";try{localStorage.setItem("rio3d-cam",i)}catch{}}$x.onclick=()=>Or(1-lt.camMode);addEventListener("keydown",i=>{i.code==="KeyC"&&Or(1-lt.camMode)});try{Or(+localStorage.getItem("rio3d-cam")||0)}catch{}function Kx(i,t){let e=Math.sin(F.t*.5)*.01;pn.position.set(F.px,1.18+t,F.pz).addScaledVector(new N(Math.sin(F.psi),0,-Math.cos(F.psi)),-.15),F.pitch+=(-ir.pitch*.22-F.pitch)*2*i,pn.rotation.set(F.pitch-.06,-F.psi+e,-F.steer*.02,"YXZ"),lt.camK+=((lt.camMode?1:0)-lt.camK)*Math.min(1,i*2.2),lt.camK<.01&&(or=F.psi);{let n=innerWidth/innerHeight<1?82:68,s=n*(1-.3*lt.camK*lt.camK*(3-2*lt.camK));Math.abs(pn.fov-s)>.05&&(pn.fov=s,pn.updateProjectionMatrix())}if(lt.camK>.003){let n=lt.camK*lt.camK*(3-2*lt.camK);Jx.copy(pn.quaternion),or+=(F.psi-or)*Math.min(1,i*1.6);let s=or+.3;Uu.set(Math.sin(s),0,-Math.cos(s)),Tp.set(F.px,6.2+t,F.pz).addScaledVector(Uu,-10.8),Uu.set(Math.sin(or),0,-Math.cos(or)),Nu.set(F.px,.3,F.pz).addScaledVector(Uu,6.5),Nu.x+=Math.cos(or)*1.9,Nu.z+=Math.sin(or)*1.9,wp.position.copy(Tp),wp.lookAt(Nu),Zx.copy(wp.quaternion),pn.position.lerp(Tp,n),pn.quaternion.copy(Jx).slerp(Zx,n)}}var Fu=3120762,Ap=4176271,ar=14989394,jx=12730163,Dl=15986400;function Qx(i){let t=ko(i),e=xn(t),n=tt(i,9)>.5?1:-1,s=_e(t),r=new Qt;r.position.set(ne(t),0,-t),r.rotation.y=-e;let o=(D,C)=>{let U=-e;return $n(ne(t)+D*Math.cos(U)+C*Math.sin(U),t-(-D*Math.sin(U)+C*Math.cos(U)))},a=n*(s+14),l=Math.max(o(a,0),.4),c=new Qt;c.position.set(a,l,0),c.scale.setScalar(1.5),r.add(c);let h=new _i,u=new _i,d=new _i,f=new _i,m={S:h,E:d,h:c};h.boxB(11,1.1,11,W.stone,0,-1,0).boxB(9,1.2,9,Cn(W.stone,1.08),0,.1,0).boxB(7,1.3,7,Cn(W.stone,.95),0,1.3,0).boxB(6.2,.3,6.2,W.gravel,0,2.6,0),u.boxB(7.4,.2,7.4,ar,0,2.55,0,!1);for(let[D,C]of[[-4.6,-4.6],[4.6,-4.6],[-4.6,4.6],[4.6,4.6]])Lu(m,D,.2,C,1);for(let D of[-1,1])for(let C=0;C<4;C++)h.boxB(.5,.5,.5,Cn(W.stone,.9),D*5.7,.1+0,-3.5+C*2.3,!1);let x=2.9,g=new To([[0,.4,-9],[-3.2,1.6,-6.8],[-.8,3.4,-5.4],[3.1,5.4,-4],[1.4,8,-3.1],[-2.2,10.2,-1.6],[-.6,12.2,.4],[0,13,2.4],[0,12.5,4.2]].map(D=>new N(D[0],D[1]+x-.4,D[2]))),p=64,y=g.getPoints(p),M=[],v=new N(0,1,0),S=D=>.2+.98*Math.pow(Math.sin(Math.min(1,D*1.5)*Math.PI/2),.7)*(1-.32*D);for(let D=0;D<=p;D++){let C=D/p,U=y[D],z=g.getTangent(C),k=new N().crossVectors(v,z);k.lengthSq()<1e-4&&k.set(1,0,0),k.normalize();let j=new N().crossVectors(z,k).normalize(),B=S(C),V=[];for(let J=0;J<8;J++){let mt=J/8*6.2832,At=Math.cos(mt),le=Math.sin(mt);V.push([U.x+(k.x*At+j.x*le)*B,U.y+(k.y*At+j.y*le)*B,U.z+(k.z*At+j.z*le)*B])}M.push(V)}h.loft(M,(D,C)=>D>=5&&D<=7?Cn(ar,.95+.1*(C%2)):Cn(C%2?Ap:Fu,.92+.12*((C>>1)%2)));for(let D=3;D<p-4;D+=2){let C=D/p,U=y[D],z=g.getTangent(C),k=S(C),j=.35+k*.9;h.at(U.x,U.y+k*.95,U.z,Math.atan2(z.x,z.z),B=>{B.cyl(.2*j,0,1.5*j,4,D%4?jx:ar,0,0,0)},-Math.atan2(z.y,Math.hypot(z.x,z.z))*.6)}for(let[D,C]of[[22,1],[22,-1],[40,1],[40,-1]]){let U=y[D],z=S(D/p),k=[U.x+C*(z+.6),U.y-z*.8,U.z+.2],j=[U.x+C*(z+1.6),Math.max(x,U.y-z*.8-2.2),U.z+.6];Ps(h,[U.x+C*z*.7,U.y-z*.4,U.z],k,.38,Fu),Ps(h,k,j,.3,Ap);for(let B=-1;B<=1;B++)h.at(j[0]+C*.15,j[1],j[2]+B*.22,0,V=>V.cyl(.09,0,.55,4,Dl,0,-.1,0),0,0,C*-1.1)}{let D=y[40],C=S(40/p);d.ball(.55,16762986,D.x+(C+1.7),Math.max(x+.9,D.y-C-1.5)+.6,D.z+.6,1,1,1,1),Te(c,16766354,6,D.x+C+1.7,Math.max(x+.9,D.y-C-1.5)+.6,D.z+.6,.9)}{let D=y[0];for(let C=0;C<5;C++)h.at(D.x,D.y,D.z-.2,(C-2)*.28,U=>U.cyl(.3,0,1.8,4,C%2?jx:ar,0,0,0),-1,0,0)}let b=y[p],T=g.getTangent(1);h.at(b.x,b.y,b.z,0,D=>{D.ball(1.15,Ap,0,0,.3,1,.92,1.25,1).boxB(1.15,.62,1.9,Fu,0,-.5,1.1).box(1.3,.3,1.2,ar,0,.45,.9),D.at(0,-.88,1.05,0,C=>C.box(1,.32,1.8,Cn(Fu,.9),0,0,.5),.38);for(let C of[-1,1]){for(let U=0;U<3;U++)D.cyl(.09,0,.45,4,Dl,C*.44,-.45,1.4+U*.5),D.at(C*.44,-.8,1.4+U*.5,0,z=>z.cyl(.08,0,.38,4,Dl,0,0,0),Math.PI);D.ball(.16,W.black,C*.28,.05,2.12,1,1,1,0),D.at(C*.5,.85,-.1,0,U=>{U.cyl(.24,.06,1.5,5,ar,0,0,0)},-.95,0,C*.2),D.at(C*.62,1.65,-1.1,0,U=>{U.cyl(.07,0,1.1,5,ar,0,0,0)},-1.45,0,C*.25);for(let U=0;U<2;U++){let z=[C*.5,-.35,1.9];Ps(h,z,[C*(1.5+U*.5),-.5-U*.35,2.8],.06,Dl),Ps(h,[C*(1.5+U*.5),-.5-U*.35,2.8],[C*(2.6+U*.4),-1.6-U*.4,2],.05,Dl)}}d.box(.8,.16,1.45,16742954,0,-.62,1.5);for(let C of[-1,1])d.ball(.2,16769658,C*.58,.32,.95,1,1.1,.8,1)});for(let D=0;D<7;D++){let C=(D-3)*.28;f.at(b.x,b.y+.4,b.z-.6,0,U=>U.quad([-.35,0,0],[.35,0,0],[.5+C*.3,-1.2,-3.4-D*.1],[-.5+C*.3,-1.2,-3.4-D*.1],D%2?W.red:ar),0,0,C)}Te(c,16753226,5.5,b.x,b.y-.5,b.z+1.7,.85),Te(c,16769658,2.4,b.x-.6,b.y+.3,b.z+1.1,.8),Te(c,16769658,2.4,b.x+.6,b.y+.3,b.z+1.1,.8);let _=D=>new ye(Object.assign({gradientMap:Pe,color:16777215,vertexColors:!0,fog:!0},D||{})),w=_(),R=_({emissive:2759680}),I=_({side:me}),L=new Ie({color:16777215,vertexColors:!0,fog:!0});return c.add(h.mesh(w),u.mesh(R),f.mesh(I),d.mesh(L)),r.userData.dragon={k:i,s:t,mouth:new N(a,l+(b.y-.5)*1.5,b.z*1.5+2.5),roared:!1},r.updateMatrixWorld(!0),r}var DE="rio-found-types",ty=[["Puente de madera","Dej\xE9 la caba\xF1a al amanecer. El primer puente cruje igual que mi escalera: me dio confianza.","I left the cabin at dawn. The first bridge creaks just like my stairs, and that made me brave.","\u591C\u660E\u3051\u306B\u5C0F\u5C4B\u3092\u51FA\u307E\u3057\u305F\u3002\u6700\u521D\u306E\u6A4B\u306F\u79C1\u306E\u968E\u6BB5\u3068\u540C\u3058\u3088\u3046\u306B\u304D\u3057\u3093\u3067\u3001\u52C7\u6C17\u3092\u304F\u308C\u307E\u3057\u305F\u3002"],["Torii sobre el agua","Pas\xE9 bajo un portal que flota. Ped\xED un deseo en voz baja: que la caba\xF1a nunca se quede sola.","I drifted under a gate that floats. I whispered a wish: that the cabin is never left alone.","\u6C34\u306B\u6D6E\u304B\u3076\u9580\u3092\u304F\u3050\u308A\u3001\u5C0F\u3055\u306A\u58F0\u3067\u9858\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u304C\u3072\u3068\u308A\u307C\u3063\u3061\u306B\u306A\u308A\u307E\u305B\u3093\u3088\u3046\u306B\u3002"],["Aldea de farolillos","Una aldea entera enciende farolillos para recibir a quien llega. Por primera vez no me sent\xED de paso.","A whole village lights lanterns for whoever arrives. For once I did not feel like I was just passing through.","\u6751\u3058\u3085\u3046\u304C\u3001\u8A2A\u308C\u308B\u4EBA\u306E\u305F\u3081\u306B\u63D0\u706F\u3092\u3068\u3082\u3057\u307E\u3059\u3002\u521D\u3081\u3066\u300C\u901A\u308A\u3059\u304C\u308A\u300D\u3068\u611F\u3058\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Jard\xEDn de sakura","Los cerezos sueltan p\xE9talos como si el aire tuviera memoria. Guard\xE9 uno para ti, entre las p\xE1ginas del mapa.","The cherry trees let go of petals as if the air had a memory. I saved one for you between the map pages.","\u685C\u306F\u3001\u7A7A\u6C17\u304C\u8A18\u61B6\u3092\u6301\u3063\u3066\u3044\u308B\u304B\u306E\u3088\u3046\u306B\u82B1\u3073\u3089\u3092\u6563\u3089\u3057\u307E\u3059\u3002\u5730\u56F3\u306E\u9593\u306B\u4E00\u679A\u3001\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u631F\u307F\u307E\u3057\u305F\u3002"],["Ca\xF1averal de las garzas","Las garzas pescan sin prisa. Aprend\xED de ellas que esperar tambi\xE9n es avanzar.","The herons fish without hurry. They taught me that waiting is also a way of moving forward.","\u30B5\u30AE\u306F\u6025\u304C\u305A\u9B5A\u3092\u5F85\u3061\u307E\u3059\u3002\u5F85\u3064\u3053\u3068\u3082\u524D\u306B\u9032\u3080\u3053\u3068\u3060\u3068\u6559\u308F\u308A\u307E\u3057\u305F\u3002"],["Templo de la campana","La campana suena una vez y el r\xEDo entero se acomoda. Quise que la oyeras desde tu balc\xF3n.","The bell rings once and the whole river settles. I wanted you to hear it from your balcony.","\u9418\u304C\u3072\u3068\u3064\u9CF4\u308B\u3068\u3001\u5DDD\u305C\u3093\u305F\u3044\u304C\u9759\u307E\u308A\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u30D0\u30EB\u30B3\u30CB\u30FC\u304B\u3089\u3082\u805E\u3053\u3048\u305F\u3089\u3044\u3044\u306E\u306B\u3002"],["Cascadita de musgo","Una cascada peque\xF1ita, verde de tan callada. Me qued\xE9 una tarde entera y no extra\xF1\xE9 nada.","A tiny waterfall, green with quiet. I stayed a whole afternoon and missed nothing.","\u9759\u3051\u3055\u3067\u7DD1\u306B\u67D3\u307E\u3063\u305F\u5C0F\u3055\u306A\u6EDD\u3002\u5348\u5F8C\u3044\u3063\u3071\u3044\u904E\u3054\u3057\u3066\u3001\u4F55\u3082\u604B\u3057\u304F\u306A\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Casa de t\xE9","Me sirvieron t\xE9 sin preguntar nada. Dej\xE9 encima de la mesa tu receta, por si quieres hacerla en la caba\xF1a.","They served me tea without asking a thing. I left your recipe on the table, in case you want to make it at the cabin.","\u4F55\u3082\u805E\u304B\u305A\u306B\u304A\u8336\u3092\u51FA\u3057\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u3082\u4F5C\u308C\u308B\u3088\u3046\u3001\u30EC\u30B7\u30D4\u3092\u673A\u306B\u6B8B\u3057\u307E\u3057\u305F\u3002"],["Bosque de bamb\xFA","El bamb\xFA canta cuando sopla el viento. Pens\xE9 en tu campanilla y sonre\xED sola.","The bamboo sings when the wind blows. I thought of your wind chime and smiled to myself.","\u98A8\u304C\u5439\u304F\u3068\u7AF9\u304C\u6B4C\u3044\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u98A8\u9234\u3092\u601D\u3044\u51FA\u3057\u3066\u3001\u3072\u3068\u308A\u3067\u5FAE\u7B11\u307F\u307E\u3057\u305F\u3002"],["Estanque de lotos","Un estanque de lotos que se abre de noche. Todo lo que empieza despacio merece su tiempo.","A lotus pond that opens at night. Everything that begins slowly deserves its time.","\u591C\u306B\u958B\u304F\u84EE\u306E\u6C60\u3002\u3086\u3063\u304F\u308A\u59CB\u307E\u308B\u3082\u306E\u306B\u306F\u3001\u305D\u308C\u3060\u3051\u306E\u6642\u9593\u304C\u5FC5\u8981\u3067\u3059\u3002"],["Castillo de la Garza Blanca","Llegu\xE9. El castillo brilla igual que las luces de tu terraza. No hac\xEDa falta llegar tan lejos para entenderlo: mi casa siempre fue la caba\xF1a. Cu\xEDdala a tu gusto; ya es tuya.","I made it. The castle glows just like the lights on your deck. I did not need to come this far to understand it: my home was always the cabin. Keep it your way; it is yours now.","\u305F\u3069\u308A\u7740\u304D\u307E\u3057\u305F\u3002\u57CE\u306F\u3001\u3042\u306A\u305F\u306E\u30C6\u30E9\u30B9\u306E\u706F\u308A\u3068\u540C\u3058\u3088\u3046\u306B\u8F1D\u3044\u3066\u3044\u307E\u3059\u3002\u3053\u3053\u307E\u3067\u6765\u306A\u304F\u3066\u3082\u5206\u304B\u3063\u305F\u306F\u305A\u3067\u3059\u3002\u79C1\u306E\u5BB6\u306F\u3044\u3064\u3082\u5C0F\u5C4B\u3067\u3057\u305F\u3002\u597D\u304D\u306A\u3088\u3046\u306B\u5B88\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u3082\u3046\u3042\u306A\u305F\u306E\u3082\u306E\u3067\u3059\u3002"]],oC=ty.map(i=>i[0]),aC=ty.map(i=>i[1]),ey=()=>{let i=new Set;for(let t of["rio3d-found",DE])try{JSON.parse(localStorage.getItem(t)||"[]").forEach(e=>i.add(e))}catch{}return i};var oy="rio-tasks",Ou=[["Dejar una linterna en el barandal","Leave a lantern on the railing","\u624B\u3059\u308A\u306B\u30E9\u30F3\u30BF\u30F3\u3092\u7F6E\u304F","Dej\xE9 una linterna en el barandal. Si cruzas de noche, ah\xED estar\xE1 esper\xE1ndote.","I left a lantern on the railing. If you cross at night, it will be waiting for you.","\u624B\u3059\u308A\u306B\u30E9\u30F3\u30BF\u30F3\u3092\u7F6E\u304D\u307E\u3057\u305F\u3002\u591C\u306B\u6E21\u308B\u306A\u3089\u3001\u305D\u3053\u3067\u5F85\u3063\u3066\u3044\u307E\u3059\u3002"],["Pedir un deseo bajo el portal","Make a wish under the gate","\u9CE5\u5C45\u306E\u4E0B\u3067\u9858\u3044\u3054\u3068\u3092\u3059\u308B","Ped\xED otro deseo bajo el portal. Este no es m\xEDo: es para quien lea esto.","I made another wish under the gate. This one is not mine: it is for whoever reads this.","\u9CE5\u5C45\u306E\u4E0B\u3067\u3082\u3046\u3072\u3068\u3064\u9858\u3044\u307E\u3057\u305F\u3002\u79C1\u306E\u3067\u306F\u306A\u304F\u3001\u3053\u308C\u3092\u8AAD\u3080\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u3002"],["Encender un farolillo","Light a lantern","\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3059","Encend\xED un farolillo en la aldea. Dicen que dura hasta que alguien lo recuerda.","I lit a lantern in the village. They say it burns until someone remembers it.","\u6751\u3067\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3057\u307E\u3057\u305F\u3002\u8AB0\u304B\u304C\u601D\u3044\u51FA\u3059\u3042\u3044\u3060\u3001\u6D88\u3048\u306A\u3044\u305D\u3046\u3067\u3059\u3002"],["Guardar un p\xE9talo de sakura","Keep a sakura petal","\u685C\u306E\u82B1\u3073\u3089\u3092\u3057\u307E\u3046","Guard\xE9 otro p\xE9talo. Ya tengo suficientes para forrar una carta entera.","I kept another petal. I now have enough to line a whole letter.","\u3082\u3046\u4E00\u679A\u3001\u82B1\u3073\u3089\u3092\u3057\u307E\u3044\u307E\u3057\u305F\u3002\u624B\u7D19\u3092\u4E00\u901A\u3046\u3081\u3089\u308C\u308B\u307B\u3069\u306B\u306A\u308A\u307E\u3057\u305F\u3002"],["Quedarse quieto con las garzas","Stay still with the herons","\u30B5\u30AE\u3068\u9759\u304B\u306B\u5F85\u3064","Me qued\xE9 quieta con las garzas hasta que me olvidaron. Fue el mejor halago.","I stayed still with the herons until they forgot I was there. Best compliment ever.","\u30B5\u30AE\u306E\u305D\u3070\u3067\u3058\u3063\u3068\u3057\u3066\u3001\u79C1\u306E\u5B58\u5728\u3092\u5FD8\u308C\u3089\u308C\u308B\u307E\u3067\u5F85\u3061\u307E\u3057\u305F\u3002\u6700\u9AD8\u306E\u307B\u3081\u8A00\u8449\u3067\u3059\u3002"],["Tocar la campana","Ring the bell","\u9418\u3092\u9CF4\u3089\u3059","Toqu\xE9 la campana una vez m\xE1s. Si la oyes desde el balc\xF3n, es m\xEDa.","I rang the bell once more. If you hear it from your balcony, it is mine.","\u3082\u3046\u4E00\u5EA6\u9418\u3092\u9CF4\u3089\u3057\u307E\u3057\u305F\u3002\u30D0\u30EB\u30B3\u30CB\u30FC\u3067\u805E\u3053\u3048\u305F\u3089\u3001\u305D\u308C\u306F\u79C1\u3067\u3059\u3002"],["Llenar un frasco con agua de la cascada","Fill a jar with waterfall water","\u6EDD\u306E\u6C34\u3092\u74F6\u306B\u304F\u3080","Llen\xE9 un frasco con agua de la cascada. Ponlo en el estantito: huele a tarde larga.","I filled a jar with waterfall water. Put it on the little shelf: it smells like a long afternoon.","\u6EDD\u306E\u6C34\u3092\u74F6\u306B\u304F\u307F\u307E\u3057\u305F\u3002\u5C0F\u3055\u306A\u68DA\u306B\u7F6E\u3044\u3066\u304F\u3060\u3055\u3044\u3002\u9577\u3044\u5348\u5F8C\u306E\u9999\u308A\u304C\u3057\u307E\u3059\u3002"],["Compartir una taza de t\xE9","Share a cup of tea","\u304A\u8336\u3092\u308F\u304B\u3061\u3042\u3046","Compart\xED una taza de t\xE9. Pens\xE9 en la tuya, en la caba\xF1a, humeando.","I shared a cup of tea. I thought of yours, steaming at the cabin.","\u304A\u8336\u3092\u308F\u304B\u3061\u3042\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u6E6F\u6C17\u3092\u7ACB\u3066\u308B\u3042\u306A\u305F\u306E\u4E00\u676F\u3092\u601D\u3044\u307E\u3057\u305F\u3002"],["Escuchar el bamb\xFA","Listen to the bamboo","\u7AF9\u306E\u97F3\u306B\u8033\u3092\u3059\u307E\u3059","Escuch\xE9 el bamb\xFA un buen rato. Suena a campanilla de viento sin due\xF1o.","I listened to the bamboo a good while. It sounds like a wind chime with no owner.","\u7AF9\u306E\u97F3\u3092\u3057\u3070\u3089\u304F\u805E\u304D\u307E\u3057\u305F\u3002\u6301\u3061\u4E3B\u306E\u3044\u306A\u3044\u98A8\u9234\u306E\u3088\u3046\u3067\u3059\u3002"],["Dejar una flor en el estanque","Leave a flower on the pond","\u6C60\u306B\u82B1\u3092\u6D6E\u304B\u3079\u308B","Dej\xE9 una flor en el estanque. Flota hacia donde t\xFA ya est\xE1s.","I left a flower on the pond. It floats toward wherever you already are.","\u6C60\u306B\u82B1\u3092\u6D6E\u304B\u3079\u307E\u3057\u305F\u3002\u3042\u306A\u305F\u304C\u3044\u308B\u65B9\u3078\u6D41\u308C\u3066\u3044\u304D\u307E\u3059\u3002"],["Encender los fuegos para Mara","Light the fireworks for Mara","\u30DE\u30E9\u306E\u305F\u3081\u306B\u82B1\u706B\u3092\u3042\u3052\u308B","Esta noche los fuegos del castillo son para ti. Gracias por seguirme hasta aqu\xED.","Tonight the castle fireworks are for you. Thank you for following me all the way here.","\u4ECA\u591C\u306E\u57CE\u306E\u82B1\u706B\u306F\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u3002\u3053\u3053\u307E\u3067\u3064\u3044\u3066\u304D\u3066\u304F\u308C\u3066\u3042\u308A\u304C\u3068\u3046\u3002"]],Cp=[["Escuchar el crujido del puente","Listen to the bridge creak","\u6A4B\u306E\u304D\u3057\u3080\u97F3\u3092\u805E\u304F","Volv\xED al puente: cruji\xF3 con tu mismo ritmo al cruzar. Ya no suena a madera, suena a casa.","I came back to the bridge: it creaked in your same rhythm. It no longer sounds like wood; it sounds like home.","\u6A4B\u306B\u623B\u308B\u3068\u3001\u3042\u306A\u305F\u3068\u540C\u3058\u6B69\u5E45\u3067\u304D\u3057\u307F\u307E\u3057\u305F\u3002\u3082\u3046\u6728\u306E\u97F3\u3067\u306F\u306A\u304F\u3001\u5BB6\u306E\u97F3\u3067\u3059\u3002"],["Mirar el reflejo del portal","Watch the gate\u2019s reflection","\u9CE5\u5C45\u306E\u6620\u308A\u3092\u773A\u3081\u308B","Esta vez mir\xE9 el reflejo en lugar del portal. Se ve igual de bien, pero m\xE1s tranquilo.","This time I looked at the reflection instead of the gate. It looks just as good, only calmer.","\u4ECA\u56DE\u306F\u9CE5\u5C45\u3067\u306F\u306A\u304F\u6C34\u9762\u306E\u6620\u308A\u3092\u898B\u307E\u3057\u305F\u3002\u540C\u3058\u304F\u3089\u3044\u304D\u308C\u3044\u3067\u3001\u3082\u3063\u3068\u9759\u304B\u3067\u3059\u3002"],["Saludar a quien pasa en la aldea","Greet someone passing in the village","\u6751\u3067\u3059\u308C\u3061\u304C\u3046\u4EBA\u306B\u3042\u3044\u3055\u3064\u3059\u308B","Una se\xF1ora de la aldea me salud\xF3 como si fuera vecina. Le dije que ten\xEDa una caba\xF1a lejos, y sonri\xF3.","A woman in the village greeted me like a neighbor. I told her I had a cabin far away, and she smiled.","\u6751\u306E\u5973\u6027\u304C\u96A3\u4EBA\u306E\u3088\u3046\u306B\u3042\u3044\u3055\u3064\u3057\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u9060\u304F\u306B\u5C0F\u5C4B\u304C\u3042\u308B\u3068\u8A71\u3059\u3068\u3001\u7B11\u3063\u3066\u304F\u308C\u307E\u3057\u305F\u3002"],["Atrapar un p\xE9talo en el aire","Catch a petal in the air","\u821E\u3046\u82B1\u3073\u3089\u3092\u3064\u304B\u3080","Atrap\xE9 un p\xE9talo en el aire sin intentarlo. Dicen que da suerte; te lo mando de regalo.","I caught a petal in mid-air without trying. They say it brings luck; I am sending it to you.","\u4F55\u6C17\u306A\u304F\u7A7A\u4E2D\u3067\u82B1\u3073\u3089\u3092\u3064\u304B\u307F\u307E\u3057\u305F\u3002\u5E78\u904B\u306E\u3057\u308B\u3057\u3060\u305D\u3046\u3067\u3059\u3002\u3042\u306A\u305F\u306B\u8D08\u308A\u307E\u3059\u3002"],["Contar las garzas en silencio","Count the herons in silence","\u9759\u304B\u306B\u30B5\u30AE\u3092\u6570\u3048\u308B","Cont\xE9 las garzas sin mover un dedo: siempre salen una m\xE1s de las que cre\xEDa.","I counted the herons without moving a finger: there is always one more than I thought.","\u6307\u4E00\u672C\u52D5\u304B\u3055\u305A\u30B5\u30AE\u3092\u6570\u3048\u307E\u3057\u305F\u3002\u601D\u3063\u305F\u3088\u308A\u3001\u3044\u3064\u3082\u3072\u3068\u3064\u591A\u3044\u306E\u3067\u3059\u3002"],["Escuchar c\xF3mo se apaga el eco de la campana","Listen to the bell\u2019s echo fade","\u9418\u306E\u4F59\u97FB\u304C\u6D88\u3048\u308B\u306E\u3092\u805E\u304F","Esper\xE9 a que el eco se apagara del todo. Dura m\xE1s de lo que uno imagina, y es lo mejor de la campana.","I waited for the echo to fade completely. It lasts longer than you think, and it is the best part of the bell.","\u4F59\u97FB\u304C\u5B8C\u5168\u306B\u6D88\u3048\u308B\u307E\u3067\u5F85\u3061\u307E\u3057\u305F\u3002\u601D\u3046\u3088\u308A\u9577\u304F\u3001\u305D\u308C\u304C\u9418\u306E\u3044\u3061\u3070\u3093\u597D\u304D\u306A\u3068\u3053\u308D\u3067\u3059\u3002"],["Mojar los dedos en la cascada","Dip your fingers in the waterfall","\u6EDD\u306B\u6307\u3092\u3072\u305F\u3059","Moj\xE9 los dedos en la cascada: estaba fr\xEDa y clara. Te mando un poco de ese fr\xEDo para el verano.","I dipped my fingers in the waterfall: cold and clear. I am sending you a little of that chill for summer.","\u6EDD\u306B\u6307\u3092\u3072\u305F\u3057\u307E\u3057\u305F\u3002\u51B7\u305F\u304F\u3066\u6F84\u3093\u3067\u3044\u307E\u3059\u3002\u590F\u306E\u305F\u3081\u306B\u3001\u5C11\u3057\u305D\u306E\u51B7\u305F\u3055\u3092\u9001\u308A\u307E\u3059\u3002"],["Mirar c\xF3mo suben el vapor y la tarde","Watch the steam and the afternoon rise","\u6E6F\u6C17\u3068\u5915\u65B9\u304C\u7ACB\u3061\u306E\u307C\u308B\u306E\u3092\u898B\u308B","El vapor del t\xE9 sub\xEDa despacio y la tarde con \xE9l. Anot\xE9 la hora: no se me va a olvidar.","The tea steam rose slowly and the afternoon with it. I wrote down the time: I will not forget it.","\u304A\u8336\u306E\u6E6F\u6C17\u304C\u3086\u3063\u304F\u308A\u6607\u308A\u3001\u5915\u65B9\u3082\u3044\u3063\u3057\u3087\u306B\u6607\u308A\u307E\u3057\u305F\u3002\u6642\u523B\u3092\u66F8\u304D\u3068\u3081\u305F\u306E\u3067\u3001\u5FD8\u308C\u307E\u305B\u3093\u3002"],["Dejar que el viento mueva el bamb\xFA","Let the wind move the bamboo","\u98A8\u304C\u7AF9\u3092\u3086\u3089\u3059\u306E\u306B\u307E\u304B\u305B\u308B","No hice nada y el bamb\xFA hizo todo. Aprend\xED que a veces ayudar es apartarse.","I did nothing and the bamboo did everything. I learned that sometimes helping means stepping aside.","\u4F55\u3082\u3057\u306A\u3044\u3068\u3001\u7AF9\u304C\u3059\u3079\u3066\u3092\u3084\u3063\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u3068\u304D\u306B\u306F\u8EAB\u3092\u5F15\u304F\u3053\u3068\u304C\u52A9\u3051\u306B\u306A\u308B\u3068\u77E5\u308A\u307E\u3057\u305F\u3002"],["Ver c\xF3mo se cierra un loto","Watch a lotus close","\u84EE\u304C\u9589\u3058\u308B\u306E\u3092\u898B\u308B","Vi cerrarse un loto al amanecer. No es un final: es el mismo descanso que el tuyo.","I watched a lotus close at dawn. It is not an ending: it is the same rest you take.","\u591C\u660E\u3051\u306B\u84EE\u304C\u9589\u3058\u308B\u306E\u3092\u898B\u307E\u3057\u305F\u3002\u7D42\u308F\u308A\u3067\u306F\u306A\u304F\u3001\u3042\u306A\u305F\u306E\u4F11\u307F\u3068\u540C\u3058\u4F11\u307F\u3067\u3059\u3002"],["Mirar el castillo desde el agua","Look at the castle from the water","\u6C34\u306E\u4E0A\u304B\u3089\u57CE\u3092\u773A\u3081\u308B","Mir\xE9 el castillo desde el agua, como la primera vez. Sigue pareci\xE9ndose a las luces de tu terraza.","I looked at the castle from the water, like the first time. It still looks like the lights of your terrace.","\u6700\u521D\u306E\u3068\u304D\u306E\u3088\u3046\u306B\u3001\u6C34\u306E\u4E0A\u304B\u3089\u57CE\u3092\u773A\u3081\u307E\u3057\u305F\u3002\u3084\u306F\u308A\u3042\u306A\u305F\u306E\u30C6\u30E9\u30B9\u306E\u706F\u308A\u306B\u4F3C\u3066\u3044\u307E\u3059\u3002"]];var ay="rio-tasks2",sy=2,Ip=()=>{let i=new Date;return i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()},Lp=()=>{try{let i=JSON.parse(localStorage.getItem(ay)||"{}")||{};return i.d=i.d||{},i}catch{return{d:{}}}},ny=()=>Lp().d,NE=()=>{let i=Lp();return i.day===Ip()?Math.max(0,sy-(i.n||0)):sy};var ly=()=>{try{return JSON.parse(localStorage.getItem(oy)||"{}")}catch{return{}}};var UE=()=>ey().has(10);function iy(i){i.add(Ou.map(t=>[t[0],t[1],t[2]])),i.add(Ou.map(t=>[t[3],t[4],t[5]])),i.add(Cp.map(t=>[t[0],t[1],t[2]])),i.add(Cp.map(t=>[t[3],t[4],t[5]])),i.add([["Carta de vuelta","Letter back","\u8FD4\u4E8B\u306E\u624B\u7D19"],["Hoy ya diste dos vueltas. Ma\xF1ana, m\xE1s.","You have already done two returns today. More tomorrow.","\u4ECA\u65E5\u306F\u3082\u3046\u4E8C\u56DE\u3075\u308A\u8FD4\u308A\u307E\u3057\u305F\u3002\u7D9A\u304D\u306F\u660E\u65E5\u3002"]]),i.add([["Mant\xE9n pulsado para hacerlo","Press and hold to do it","\u9577\u62BC\u3057\u3067\u5B9F\u884C"],["Hecho. Un recuerdo m\xE1s para la caba\xF1a.","Done. One more keepsake for the cabin.","\u3067\u304D\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u306B\u601D\u3044\u51FA\u304C\u3072\u3068\u3064\u5897\u3048\u307E\u3057\u305F\u3002"],["Encargo de Mara","Mara\u2019s errand","\u30DE\u30E9\u306E\u304A\u9858\u3044"],["En el margen","In the margin","\u4F59\u767D\u306B"]])}var ii,Jo,Bu,us=null,Nl=0,Ul=0,Rp=0,cy=0,ry=!1,Pp=null;function FE(){ii=document.createElement("button"),ii.type="button",ii.style.cssText="position:fixed;left:50%;bottom:max(150px,calc(env(safe-area-inset-bottom) + 144px));transform:translateX(-50%);z-index:60;display:none;min-height:50px;max-width:min(90vw,420px);padding:10px 20px;border-radius:99px;border:1px solid #ffc77a;background:rgba(40,40,80,.88);color:#fbf1e0;font:600 .9rem/1.25 system-ui;cursor:pointer;overflow:hidden;touch-action:none",Jo=document.createElement("span"),Jo.style.cssText="position:absolute;left:0;top:0;bottom:0;width:0;background:rgba(255,199,122,.35);pointer-events:none",Bu=document.createElement("span"),Bu.style.cssText="position:relative",ii.append(Jo,Bu),document.body.appendChild(ii);let i=e=>{us!=null&&(e.preventDefault(),Ul=1,cy=performance.now(),BE())},t=()=>{Ul=0,Jo.style.width="0"};ii.addEventListener("pointerdown",i),ii.addEventListener("pointerup",t),ii.addEventListener("pointerleave",t),ii.addEventListener("pointercancel",t),ii.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),hy())})}function BE(){cancelAnimationFrame(Rp);let i=()=>{if(!Ul)return;let t=Math.min(1,(performance.now()-cy)/2200);if(Jo.style.width=t*100+"%",t>=1){Ul=0,hy();return}Rp=requestAnimationFrame(i)};Rp=requestAnimationFrame(i)}function hy(){if(us==null)return;if(Nl){let t=Lp();t.d[us]=1,t.n=(t.day===Ip()&&t.n||0)+1,t.day=Ip();try{localStorage.setItem(ay,JSON.stringify(t))}catch{}}else{let t=ly();t[us]=1;try{localStorage.setItem(oy,JSON.stringify(t))}catch{}}let i=us;us=null,Nl=0,ii.style.display="none",Jo.style.width="0";try{Pp&&Pp(i)}catch{}try{UX.hap([10,50,10])}catch{}try{UX.say(UX.tr("Hecho. Un recuerdo m\xE1s para la caba\xF1a."))}catch{}}function uy(i,t){if(!ry){ry=!0;try{iy(window.UX)}catch{}}Pp=t;let e=i!=null&&Ou[i]&&UE(),n=e&&!ly()[i],s=e&&!n&&!ny()[i]&&NE()>0;if(!(n||s)){us!=null&&!Ul&&(us=null,Nl=0,ii&&(ii.style.display="none"));return}us===i&&Nl===(s?1:0)||(ii||FE(),us=i,Nl=s?1:0,Bu.textContent=UX.tr((s?Cp:Ou)[i][0])+" \xB7 "+UX.tr("Mant\xE9n pulsado para hacerlo"),ii.style.display="block")}var $o=new Map;try{window.__dragons=$o}catch{}function OE(i,t,e){for(let[n,s]of $o){let r=s.userData.dragon.s;(r<i-140||r>i+380)&&(Tt.remove(s),gp(s),$o.delete(n))}for(let n=Math.max(0,t-1);n<=e+2;n++){if(Je(n)!==10||$o.has(n))continue;let s=ko(n);if(s<i-140||s>i+380)continue;let r=Qx(n);$o.set(n,r),Tt.add(r)}for(let[,n]of $o){let s=n.userData.dragon;if(!s.roared&&i>s.s-60&&i<s.s+20){s.roared=!0;try{oe.roar()}catch{}li("El drag\xF3n anuncia el Castillo de la Garza Blanca")}}}function dy(i){let t=Math.max(0,Math.floor((i-140)/Ri)),e=Math.floor((i+340)/Ri);OE(i,t,e);for(let[n,s]of ai)(n<t||n>e)&&(s.parent&&Tt.remove(s),gp(s),ai.delete(n));for(let n=t;n<=e;n++){let s=ai.get(n);s||(s=qx(n),ai.set(n,s)),s.parent||Tt.add(s);{let r=Je(n);if(je(n)-i<(r===2?70:r===10?130:55)&&i-je(n)<25&&(!yi.has(r)||!lt.X.hasSnap(r)&&!sp.has(r))){let o=!yi.has(r);if(yi.add(r),sp.add(r),lx.add(n),Xx(n),r===4&&Er("garza"),r===9&&Er("loto"),o){li("Descubriste: "+Wi[r]);try{oe.chime(0,n%5)}catch{}ax(),gu(i),lt.X.found(r)}}}}{let n=null;for(let s=t;s<=e;s++)if(Math.abs(je(s)-i)<60){n=Je(s);break}uy(n,()=>{try{oe.chime(0,2)}catch{}})}for(let[,n]of ai)if(n.userData.job){let s=performance.now(),r;do r=n.userData.job.next();while(!r.done&&performance.now()-s<5);r.done&&(n.userData.job=null,Tu(n))}else n.userData.cas&&Wx(n,Se.night,.016);for(let n of Nr)n.material.opacity=n.userData.base*(.3+.7*lt.glowK);wu.uniforms.k.value=lt.glowK,sr.uniforms.t.value=F.t,sr.uniforms.fogCol.value.copy(Tt.fog.color);for(let n of hs)n.nk?n.nk.rotation.x=Math.sin(F.t*.5+n.ph)*.08+Math.pow(Math.max(0,Math.sin(F.t*.23+n.ph*3)),6)*.9:n.b.rotation.y=Math.sin(F.t*1.1+n.ph)*.12}var Np=new Ie({vertexColors:!0,transparent:!0,opacity:.7,depthWrite:!1,side:me}),Ko=jn,fy=new Float32Array(Ko*4*2*3),py=new Float32Array(Ko*4*2*4),jo=new ue;jo.setAttribute("position",new Kt(fy,3));jo.setAttribute("color",new Kt(py,4));{let i=[];for(let t=0;t<2;t++)for(let e=0;e<Ko-1;e++){let n=(t*Ko+e)*4;i.push(n,n+1,n+4,n+1,n+5,n+4,n+1,n+2,n+5,n+2,n+6,n+5,n+2,n+3,n+6,n+3,n+7,n+6)}jo.setIndex(i)}var Fl=new $(jo,Np);Fl.frustumCulled=!1;Fl.renderOrder=1;Tt.add(Fl);function my(i){let t=i-60;for(let e=0;e<2;e++){let n=e?1:-1;for(let s=0;s<Ko;s++){let r=t+s*Qn,o=_e(r)-1+(rn(r*.08,e*9)-.5)*.9,a=.9+rn(r*.2,e)*.9,l=ne(r)+n*o,c=-r,h=.25+.55*rn(r*.11+e*30,5),u=(e*Ko+s)*4,d=[l-n*a*1.4,l-n*a*.4,l+n*a*.5,l+n*a*1.5],f=[0,h,h*.6,0];for(let m=0;m<4;m++)fy.set([d[m],.05,c],(u+m)*3),py.set([1,1,1,f[m]],(u+m)*4)}}jo.attributes.position.needsUpdate=jo.attributes.color.needsUpdate=!0}var gy=36,Up=[];for(let i=0;i<gy;i++){let t=new $(new fi(.5,20).rotateX(-Math.PI/2),new Ie({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));t.position.y=.045,t.userData={age:9,vx:0,vz:0},Tt.add(t),Up.push(t)}var zE=0,Dp=0;function Hu(i,t,e,n,s){let r=Up[zE++%gy];r.position.set(i,.045,t),r.userData={age:0,vx:e,vz:n,sc:s},r.scale.setScalar(.4)}var ku=60,Fp=new ue,zu=new Float32Array(ku*3),Bp=[];for(let i=0;i<ku;i++)Bp.push({l:0,x:0,y:-9,z:0,vx:0,vy:0,vz:0});Fp.setAttribute("position",new Kt(zu,3));var HE=new di({color:15398655,size:.16,transparent:!0,opacity:.9,depthWrite:!1}),xy=new wi(Fp,HE);xy.frustumCulled=!1;Tt.add(xy);var kE=0;function Gu(i,t,e,n){for(let s=0;s<n;s++){let r=Bp[kE++%ku];r.l=1,r.x=i,r.y=t,r.z=e;let o=Math.random()*6.28,a=.8+Math.random()*1.4;r.vx=Math.cos(o)*a,r.vz=Math.sin(o)*a,r.vy=2+Math.random()*2.2}Wn(i,e)}function yy(i){for(let t=0;t<ku;t++){let e=Bp[t];e.l>0&&(e.l-=i*1.4,e.vy-=9*i,e.x+=e.vx*i,e.y+=e.vy*i,e.z+=e.vz*i,e.y<0&&(e.l=0)),zu[t*3]=e.l>0?e.x:0,zu[t*3+1]=e.l>0?e.y:-50,zu[t*3+2]=e.z}if(Fp.attributes.position.needsUpdate=!0,Dp-=i,Dp<=0&&lt.started){Dp=.11;let t=Math.min(F.v,5),e=Math.cos(F.psi),n=Math.sin(F.psi),s=F.px-Math.sin(F.psi)*1.5,r=F.pz+Math.cos(F.psi)*1.5;for(let o of[-1,1])Hu(s+e*.5*o,r+n*.5*o,e*o*.5,n*o*.5,1)}Up.forEach(t=>{let e=t.userData;if(e.age>=3.2){t.material.opacity=0;return}e.age+=i;let n=e.age/3.2;t.position.x+=(e.vx||0)*i,t.position.z+=(e.vz||0)*i,t.scale.setScalar((.4+n*2.6)*(e.sc||1)),t.material.opacity=.38*(1-n)*(1-n)})}var GE=5,zr=[],vy=[[15763530,16773600],[15245898,16177568],[14835775,16771538],[14272928,15763530]];function VE(i){let t=new Qt,e=vy[i%vy.length],n=new $(new pe(.5,12,8),qt(e[0]));n.scale.set(.32,.26,1),t.add(n);let s=new $(new pe(.5,10,6),qt(e[1]));s.scale.set(.33,.1,.55),s.position.set(0,.12,-.05),t.add(s);let r=new Qt;r.position.z=.45,t.add(r);let o=new $(new Oe(.22,.5,4),qt(e[0],{side:me}));o.rotation.x=-Math.PI/2,o.scale.set(1.2,1,.18),o.position.z=.22,r.add(o);let a=new $(new Oe(.08,.3,3),qt(e[0]));return a.position.set(0,.2,.05),a.rotation.x=-.3,t.add(a),t.userData={tail:r,st:0,t:0,ph:Math.random()*6,sp:.7+Math.random()*.6,tx:0,tz:0,jt:0},Tt.add(t),t}for(let i=0;i<GE;i++)zr.push(VE(i));function Ey(i,t){let e=t+14+Math.random()*70,n=(Math.random()*2-1)*(_e(e)-3);i.position.set(ne(e)+n,-.05,-e),i.userData.st=0,i.userData.hd=xn(e)+(Math.random()-.5)*1.2,i.userData.jt=2+Math.random()*10,i.rotation.set(0,0,0),i.visible=!0}zr.forEach(i=>Ey(i,30+Math.random()*60));function wy(i,t){for(let e of zr){let n=e.userData;n.t+=i;let s=e.position.z-F.pz,r=-e.position.z;if(r<t-12||r>t+120){Ey(e,t);continue}if(n.st===0){n.hd+=Math.sin(n.t*.6+n.ph)*.5*i;let o=e.position.x-ne(r),a=_e(r)-3;Math.abs(o)>a&&(n.hd+=(xn(r)+(o>0?-1:1)*.9-n.hd)*i*1.5),e.position.x+=Math.sin(n.hd)*n.sp*i,e.position.z-=Math.cos(n.hd)*n.sp*i,e.position.y=-.02+Math.sin(n.t*2+n.ph)*.01,e.rotation.set(0,-n.hd+Math.PI,0),n.tail.rotation.y=Math.sin(n.t*7)*.5,Math.random()<i*.03&&s<-6&&s>-45?(e.userData.st=1,n.j=0,n.vx=Math.sin(n.hd)*2.6,n.vz=-Math.cos(n.hd)*2.6,Gu(e.position.x,.1,e.position.z,5),oe.plop((e.position.x-F.px)/25)):Math.random()<i*.05&&Math.abs(s)<30&&Math.abs(s)>5&&Hu(e.position.x,e.position.z,0,0,.7)}else{n.j+=i;let o=.95,a=n.j/o,l=Math.sin(Math.PI*a)*1.25;e.position.x+=n.vx*i,e.position.z+=n.vz*i,e.position.y=-.02+l;let c=Math.cos(Math.PI*a)*1.25*Math.PI/o;e.rotation.set(0,-n.hd+Math.PI,0),e.rotateX(Math.atan2(c,2.6)),n.tail.rotation.y=Math.sin(n.t*26)*.6,n.j>=o&&(e.userData.st=0,e.position.y=-.02,e.rotation.set(0,-n.hd+Math.PI,0),Gu(e.position.x,.1,e.position.z,9),oe.plop((e.position.x-F.px)/25))}}yy(i)}var Ty=[],Hr=[];function WE(i){let t=new Qt,e=i%3!==2,n=e?16184302:9279656,s=e?15262424:7305868,r=new $(new pe(.28,10,8),qt(n));r.scale.set(.7,.7,1.8),t.add(r);let o=new $(new Le(.045,.06,.5,6),qt(n));o.rotation.x=1.15,o.position.set(0,.1,-.5),t.add(o);let a=new $(new pe(.09,8,6),qt(n));a.position.set(0,.3,-.72),t.add(a);let l=new $(new Oe(.035,.3,5),qt(15245898));l.rotation.x=-Math.PI/2,l.position.set(0,.3,-.95),t.add(l);let c=[-1,1].map(u=>{let d=new Qt;d.position.set(u*.12,.08,-.05),t.add(d);let f=new $(new Ln(1.35,.03,.62),qt(s));f.position.x=u*.68,d.add(f);let m=new $(new Ln(.5,.03,.4),qt(e?4934485:5857391));return m.position.set(u*1.5,0,.05),d.add(m),d}),h=new $(new Oe(.12,.45,4),qt(n));return h.rotation.x=Math.PI/2,h.position.z=.65,t.add(h),t.scale.setScalar(1.5),t.userData={wings:c,ph:Math.random()*6,fl:0,sp:5+Math.random()*2.5,hd:0,h:7+Math.random()*7,off:(Math.random()-.5)*20},Tt.add(t),t}function qE(i){let t=new Qt,e=[4178377,14701130,5214169,8115818],n=e[i%4],s=new $(new Le(.025,.018,.5,6),qt(n,{emissive:n,emissiveIntensity:.35}));s.rotation.x=Math.PI/2,t.add(s);let r=new $(new pe(.055,8,6),qt(n));r.position.z=-.27,t.add(r);let o=new Ie({color:15398655,transparent:!0,opacity:.5,side:me,depthWrite:!1}),a=[];return[[-1,-.1],[-1,.06],[1,-.1],[1,.06]].forEach(([l,c])=>{let h=new Qt;h.position.set(0,.02,c),t.add(h);let u=new $(new an(.38,.1).rotateX(-Math.PI/2),o);u.position.x=l*.2,h.add(u),a.push([h,l])}),t.scale.setScalar(1.8),t.userData={wings:a,tx:0,ty:1,tz:0,t:0,ph:Math.random()*6,sp:4},Tt.add(t),t}for(let i=0;i<8;i++)Hr.push(qE(i));var kr=[];function XE(i){let t=new Qt,e=i%2?7301724:15328472,n=i%2?4868672:13217410,s=new $(new pe(.3,10,8),qt(e));s.scale.set(.85,.6,1.35),s.position.y=.12,t.add(s);let r=new $(new Oe(.12,.3,5),qt(e));r.rotation.x=-Math.PI/2*1.1,r.position.set(0,.2,.4),t.add(r);let o=new Qt;o.position.set(0,.3,-.25),t.add(o);let a=new $(new Le(.06,.08,.34,6),qt(e));a.position.y=.15,o.add(a);let l=new $(new pe(.1,8,6),qt(i%2?3486766:e));l.position.set(0,.34,-.03),o.add(l);let c=new $(new Oe(.04,.16,5),qt(15245898));return c.rotation.x=-Math.PI/2,c.position.set(0,.33,-.15),o.add(c),t.scale.setScalar(1.15),t.userData={neck:o,t:Math.random()*6,dip:0,nd:3+Math.random()*5,hd:Math.random()*6.28,tx:0,tz:0},Tt.add(t),t}function Op(i,t){let e=t+14+Math.random()*60,n=(Math.random()*2-1)*(_e(e)-6);i.position.set(ne(e)+n,0,-e),i.userData.hd=xn(e)+(Math.random()-.5)*2}for(let i=0;i<4;i++){let t=XE(i);i>=2&&t.scale.setScalar(.72),kr.push(t)}kr.forEach(i=>Op(i,30));function Ay(i,t){let e=t+8+Math.random()*60,n=(Math.random()*2-1)*(_e(e)+2);i.position.set(ne(e)+n,.6+Math.random()*1.1,-e),i.userData.tx=i.position.x,i.userData.ty=i.position.y,i.userData.tz=i.position.z}Hr.forEach(i=>Ay(i,30));function Ry(i,t){let e=1-Fe(Se.night*1.5,0,1)*1,n=e>.15&&cn.rain<.6;for(let s of kr){s.visible=e>.1;let r=s.userData;r.t+=i;let o=-s.position.z,a=o-t;if(!r.follow&&!(r.flee>0)&&(a<-14||a>110)){Op(s,t);continue}if(r.follow&&a<-70){r.follow=0,Op(s,t);continue}if(r.nd-=i,r.nd<=0&&r.dip<=0&&!r.follow&&!(r.flee>0)&&(r.dip=1.3,r.nd=5+Math.random()*7,r.rip=!1),r.dip>0){r.dip-=i;let l=Math.sin(Math.PI*Fe(1-r.dip/1.3));r.neck.rotation.x=1.2*l,s.rotation.x=.9*l*.5,s.position.y=-.05*l,l>.9&&!r.rip&&(r.rip=!0,Wn(s.position.x,s.position.z-.4),oe.plop((s.position.x-F.px)/25))}else{r.neck.rotation.x=Math.sin(r.t*1.6)*.12,s.rotation.x=0,s.position.y=Math.sin(r.t*1.3)*.015,r.hd+=Math.sin(r.t*.4)*.3*i;let l=s.position.x-ne(o);Math.abs(l)>_e(o)-5&&(r.hd+=(xn(o)+(l>0?-1:1)*.8-r.hd)*i*1.2),s.position.x+=Math.sin(r.hd)*(r.spd||.35)*i,s.position.z-=Math.cos(r.hd)*(r.spd||.35)*i}s.rotation.y=-r.hd+Math.PI}for(let s of Hr){if(s.visible=n,!n)continue;let r=s.userData;if(r.t-=i,JE(s,r,i))continue;let o=-s.position.z-t;if(o<-12||o>90){Ay(s,t);continue}if(r.t<=0){r.t=.8+Math.random()*2.2;let d=-s.position.z+(Math.random()-.5)*8,f=s.position.x-ne(d);r.tx=s.position.x+(Math.random()-.5)*7,r.tz=s.position.z+(Math.random()-.5)*7-1.5,r.ty=.5+Math.random()*1.4;let m=r.tx-ne(-r.tz);Math.abs(m)>_e(-r.tz)+3&&(r.tx=ne(-r.tz)+Math.sign(m)*(_e(-r.tz)+1))}let a=Math.min(1,i*3.2),l=s.position.x,c=s.position.z;s.position.x+=(r.tx-s.position.x)*a,s.position.z+=(r.tz-s.position.z)*a,s.position.y+=(r.ty-s.position.y)*a+Math.sin(F.t*9+r.ph)*.004;let h=s.position.x-l,u=s.position.z-c;Math.hypot(h,u)>.002&&(s.rotation.y=Math.atan2(-h,-u)),s.rotation.x=-Math.min(.5,Math.hypot(h,u)*20)*.5,r.wings.forEach(([d,f],m)=>{d.rotation.z=f*Math.sin(F.t*70+m*1.7+r.ph)*.45})}}var Bl=(()=>{try{return JSON.parse(localStorage.getItem("rio3d-enc")||"{}")||{}}catch{return{}}})(),_y={heron:"garza",koi:"koi",duck:"pato",dragonfly:"libelula",festival:"festival"};function ta(i,t){try{_y[i]&&Er(_y[i])}catch{}if(!Bl[i]){Bl[i]=Date.now();try{localStorage.setItem("rio3d-enc",JSON.stringify(Bl))}catch{}li(t)}}var YE=(()=>{let i=Eu(1,0);hs.pop(),i.updateMatrixWorld(!0);let t=[];return i.traverse(e=>{if(!e.isMesh)return;let n=e.geometry.clone().applyMatrix4(e.matrixWorld);n.deleteAttribute("uv");let s=e.material.color,r=n.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;n.setAttribute("color",new Kt(o,3)),t.push(n.index?n.toNonIndexed():n)}),As(t)})(),lr=new Pn(YE,new ye({gradientMap:Pe,vertexColors:!0}),24);lr.frustumCulled=!1;lr.count=0;Tt.add(lr);var Qo=[],Cy=[];function ZE(i,t,e,n){let s=Cy.pop()||WE(0);s.rotation.order="YXZ",s.scale.setScalar(2.1),s.visible=!0,s.position.set(i,t+1.2,e),s.userData.fl2={t:0,hd:n,vy:3.2,sp:2.2,ph:Math.random()*6},Tt.add(s),Qo.push(s);try{oe.flap((i-F.px)/25)}catch{}ta("heron","Las garzas alzan el vuelo a tu paso")}var ds=new N,My=new fn,by=new N,Sy=new be;function Iy(i,t){if(!lt.started)return;let e=!window.__noScare&&(Math.abs(F.steer)>.8||F.t-F.bumpT<.8);lt.scareT=e?2.5:Math.max(0,lt.scareT-i);let n=Math.sin(F.psi),s=Math.cos(F.psi),r=lt.scareT<=0;for(let a of zr){let l=a.userData;if(l.st!==0)continue;l.sp0==null&&(l.sp0=l.sp);let c=a.position.x-F.px,h=a.position.z-F.pz,u=Math.hypot(c,h);if(!r&&u<11){l.hd+=Ho(Math.atan2(c,-h),l.hd)*Math.min(1,i*6),l.sp=3.4,l.cur=0;continue}if(r&&u<26){l.dir||(l.dir=Math.random()<.5?-1:1);let d=-.4+Math.sin(F.t*.5+l.ph)*1.3,f=F.px+s*l.dir*2.7+n*d,m=F.pz+n*l.dir*2.7-s*d,x=f-a.position.x,g=m-a.position.z,p=Math.hypot(x,g);if(l.hd+=Ho(Math.atan2(x,-g),l.hd)*Math.min(1,i*3.2),l.sp=Math.max(.7,Math.min(4,F.v+p*.9)),l.cur=1,u<5.5&&(ta("koi","Los peces se acercan a nadar contigo"),Math.random()<i*.35)){Hu(a.position.x+Math.sin(l.hd)*.4,a.position.z-Math.cos(l.hd)*.4,0,0,.55);try{oe.plop((a.position.x-F.px)/25)}catch{}}if(u<6.5&&Math.random()<i*.06){l.st=1,l.j=0,l.vx=Math.sin(l.hd)*2.6,l.vz=-Math.cos(l.hd)*2.6,Gu(a.position.x,.1,a.position.z,6);try{oe.plop((a.position.x-F.px)/25)}catch{}}}else l.sp=l.sp0,l.cur=0}kr.forEach((a,l)=>{let c=a.userData;if(!a.visible)return;let h=a.position.x-F.px,u=a.position.z-F.pz,d=Math.hypot(h,u);if(c.flee>0){c.flee-=i,c.hd+=Ho(Math.atan2(h,-u),c.hd)*Math.min(1,i*4),c.spd=2.6;return}if(!r&&d<16){c.follow=0,c.flee=3;return}if(r&&(c.follow||d<17)){c.follow||(c.follow=1,c.qT=1+Math.random()*3,l<2&&ta("duck","Un pato decide acompa\xF1arte"));let f=3.8+l*1.7,m=Math.sin(F.t*.4+l*2)*1.1+(l%2?1:-1)*.9,x=F.px-n*f+s*m,g=F.pz+s*f+n*m,p=x-a.position.x,y=g-a.position.z,M=Math.hypot(p,y);if(c.hd+=Ho(Math.atan2(p,-y),c.hd)*Math.min(1,i*2.6),c.spd=Math.max(.1,Math.min(3.4,(M>.8?F.v*1.05:F.v*.9)+M*.5)),c.qT-=i,c.qT<=0&&d<12){c.qT=5+Math.random()*9;try{oe.quack((a.position.x-F.px)/25)}catch{}}}else c.spd=0});for(let[a,l]of ai){let c=l.userData.hp;if(!(!c||Je(a)!==4))for(let h of c){let u=h[5];if(u.gone>0&&(u.gone-=i,u.gone>0))continue;ds.set(h[0],h[1],h[2]),l.localToWorld(ds);let d=ds.x-F.px,f=ds.z-F.pz;Math.hypot(d,f)<(lt.scareT>0?22:13)&&F.t>(u.cd||0)&&(u.gone=70,u.cd=F.t+4,ZE(ds.x,ds.y,ds.z,Math.atan2(d,-f)+(Math.random()-.5)*.8))}}let o=0;for(let[a,l]of ai){let c=l.userData.hp;if(!(!c||Je(a)!==4))for(let h of c)h[5].gone>0||o>=24||(ds.set(h[0],h[1],h[2]),l.localToWorld(ds),My.setFromAxisAngle(Cs,l.rotation.y+h[3]),by.setScalar(h[4]),Sy.compose(ds,My,by),lr.setMatrixAt(o++,Sy))}lr.count=o,lr.instanceMatrix.needsUpdate=!0;for(let a=Qo.length-1;a>=0;a--){let l=Qo[a],c=l.userData.fl2;c.t+=i,c.vy=Math.max(.6,c.vy-i*.35),l.position.y>11&&(c.vy=Math.min(c.vy,.2)),c.sp=Math.min(6.2,c.sp+i*1.6);let h=-l.position.z;c.hd+=Ho(xn(h)+Math.sin(c.ph)*.3,c.hd)*i*.6,l.position.x+=Math.sin(c.hd)*c.sp*i,l.position.z-=Math.cos(c.hd)*c.sp*i,l.position.y+=c.vy*i,l.rotation.y=-c.hd,l.rotation.x=Math.min(.5,c.vy*.12);let u=Math.sin(c.t*(c.t<4?10:6)+c.ph)*(c.t<8?.8:.3);l.userData.wings.forEach((d,f)=>{d.rotation.z=(f?1:-1)*u}),(c.t>16||Math.hypot(l.position.x-F.px,l.position.z-F.pz)>230)&&(Tt.remove(l),Cy.push(l),Qo.splice(a,1))}}var Ls=new N;function JE(i,t,e){if(t.land>0)return t.land-=e,t.land<=0||lt.scareT>0||!i.visible?(t.land=0,t.app=0,t.t=.2,t.ty=2.4,t.tx=i.position.x+(Math.random()-.5)*5,t.tz=i.position.z-4,!1):(Ge.localToWorld(Ls.set(t.lx,t.ly,t.lz)),i.position.copy(Ls),i.quaternion.copy(Ge.quaternion),t.wings.forEach(([n,s])=>{n.rotation.z=s*.12}),!0);if(!lt.started||!i.visible||lt.scareT>0)return!1;if(t.app)return t.t=3,Ge.localToWorld(Ls.set(t.lx,t.ly,t.lz)),t.tx=Ls.x,t.ty=Ls.y,t.tz=Ls.z,!(t.app-=e>0?e:0)||t.app<=0?(t.app=0,!1):(i.position.distanceTo(Ls)<.45&&(t.app=0,t.land=14+Math.random()*18,ta("dragonfly","Una lib\xE9lula se pos\xF3 en la proa de tu canoa")),!1);if(Math.random()<e*.18&&(Ge.localToWorld(Ls.set(0,.5,-3)),i.position.distanceTo(Ls)<7)){let n=0;for(let s of Hr)(s.userData.land>0||s.userData.app>0)&&n++;n<2&&(t.lx=(Math.random()-.5)*.3,t.ly=.62,t.lz=-3.05+Math.random()*.25,t.app=5)}return!1}var Vu=38,zp=new Map,Py=[0,1,2].map(i=>{let t=new bn(1,1).toNonIndexed(),e=t.attributes.position,n=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){let o=e.getX(r),a=e.getY(r),l=e.getZ(r),c=1+(tt(Math.round(o*5)+i*9,Math.round(a*5)+Math.round(l*5))-.5)*.35;e.setXYZ(r,o*c*1.15,a*c*.72,l*c);let h=.7+.4*Fe((a+.7)/1.4);n[r*3]=n[r*3+1]=n[r*3+2]=h}t.setAttribute("color",new Kt(n,3));let s=t.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*2,s.getY(r)*2);return t.computeVertexNormals(),t}),$E=new ye({gradientMap:Pe,color:12039108,vertexColors:!0,map:Ye("rock")}),KE=new ye({gradientMap:Pe,color:8829066,map:Ye("leaf")}),jE=new Ie({color:16777215,transparent:!0,opacity:.4,depthWrite:!1,side:me});function QE(i){let t=tt(i,41);if(i<2||t>.34)return null;let e=i*Vu+tt(i,42)*Vu,n=(tt(i,43)*2-1)*_e(e)*.4;return{s:e,x:ne(e)+n,z:-e,r:.9+tt(i,44)*1.1,v:Math.floor(tt(i,45)*3),a:tt(i,46)*6.28}}function tw(i){let t=new Qt,e=new $(Py[i.v],$E);e.scale.setScalar(i.r),e.rotation.y=i.a,e.position.y=i.r*.18,t.add(e);let n=new $(Py[(i.v+1)%3],KE);n.scale.set(i.r*.62,i.r*.3,i.r*.6),n.position.set(i.r*.12,i.r*.62,0),n.rotation.y=i.a+1,t.add(n);let s=new $(new vr(1.05,1.55,24).rotateX(-Math.PI/2),jE);return s.scale.setScalar(i.r),s.position.y=.05,s.userData.fr=1,t.add(s),t.position.set(i.x,0,i.z),t.userData=i,t}function Ly(i,t){let e=Math.floor((t-25)/Vu),n=Math.floor((t+280)/Vu);for(let[s,r]of zp)(s<e||s>n)&&r&&Tt.remove(r);for(let s=e;s<=n;s++){let r=zp.get(s);if(r===void 0){let h=QE(s);r=h?tw(h):null,zp.set(s,r)}if(!r)continue;r.parent||Tt.add(r);let o=F.px-r.userData.x,a=F.pz-r.userData.z,l=r.userData.r*1.2+1.5,c=Math.hypot(o,a);c<l&&c>.01&&(F.px+=o/c*(l-c)*.6,F.pz+=a/c*(l-c)*.6,F.v*=.9,F.t-F.bumpT>1.2&&(oe.bump(),F.bumpT=F.t,Wn(r.userData.x+o/c*-r.userData.r,r.userData.z+a/c*-r.userData.r))),r.children[2].material.opacity=.3+.12*Math.sin(F.t*1.4+s)}}var ea=230,Ol=new Map,ew=[0,1,2,3].map(i=>{let n=[],s=[],r=[];for(let a=0;a<=16;a++){let l=a/16;for(let c=0;c<26;c++){let h=c/26*6.283,u=1+(rn(Math.cos(h)*2.2+i*7,Math.sin(h)*2.2+l*3)-.5)*.5+(rn(Math.cos(h)*7+i,l*9)-.5)*.14,d=Math.pow(Math.max(0,1-Math.pow(l,2.2)),.62)*(1+.38*(1-l)*(1-l)),f=l,m=(rn(i*3,l*2)-.5)*.5*l;n.push(Math.cos(h)*d*u+m,f,Math.sin(h)*d*u);let x=rn(Math.cos(h)*5+i,l*14),g=Be(.18,.5,rn(Math.cos(h)*9,l*20+i)),p=.45+.2*l+.12*x;s.push(p*(.75+.2*g),p*(.9+.12*g),p*(.82+.1*g))}}for(let a=0;a<16;a++)for(let l=0;l<26;l++){let c=(l+1)%26,h=a*26+l,u=a*26+c,d=(a+1)*26+l,f=(a+1)*26+c;r.push(h,d,u,u,d,f)}let o=new ue;return o.setAttribute("position",new fe(n,3)),o.setAttribute("color",new fe(s,3)),o.setIndex(r),o.computeVertexNormals(),o}),nw=new Wa({vertexColors:!0,color:12175040,fog:!1}),Hp=new is({map:ti,transparent:!0,opacity:.5,depthWrite:!1,fog:!1,color:16777215});function iw(i,t){let e=tt(i,60+t),n=44+e*46,s=95+tt(i,61+t)*120,r=i*ea+tt(i,62+t)*ea*.9,o=_e(r)+150+tt(i,63+t)*170,a=new Qt,l=new $(ew[(i*2+(t>0?1:0)+4)%4],nw.clone());l.scale.set(n,s,n*(.8+tt(i,64)*.4)),l.position.y=-30,l.rotation.y=tt(i,65)*6,a.add(l);for(let c=0;c<2;c++){let h=new bs(Hp);h.scale.set(n*4.5,s*.7,1),h.position.set((c?.4:-.3)*n,s*(.18+.2*c),0),h.renderOrder=2,a.add(h)}return a.position.set(ne(r)+t*o,0,-r),a.userData={s:r},a}var sw=(i,t)=>{let e=i*ea+tt(i,62+t)*ea*.9,n=Tr(e);return!!n&&t===n.side&&Math.abs(e-n.s0)<210};function Dy(i){let t=Math.floor((i-260)/ea),e=Math.floor((i+720)/ea);for(let n=t;n<=e;n++)for(let s of[-1,1]){let r=n*2+(s>0?1:0),o=Ol.get(r);if(o===void 0&&(o=tt(n,70+s)>.18&&!sw(n,s)?iw(n,s):null,Ol.set(r,o),o&&(o.userData.c=n)),o){o.userData.c=n,o.parent||Tt.add(o);let a=Math.hypot(o.position.x-F.px,o.position.z-F.pz),l=Fe(Be(60,520,a)*.88+.08);o.children[0].material.color.set(6130818).lerp(Mu.set(3099218),Se.night*.7).lerp(Yo.copy(Se.hor).lerp(Tt.fog.color,.5),l)}}for(let[n,s]of Ol)s&&s.userData.c!==void 0&&(s.userData.c<t||s.userData.c>e)&&s.parent&&Tt.remove(s)}var kp=[];function rw(i){let t=new Qt,e=qt(3091244),n=qt(3102307),s=new $(new pe(1,10,6),e);s.scale.set(.55,.28,2),s.position.y=.05,t.add(s);let r=new $(new Le(.16,.22,.9,7),n);r.position.set(0,.85,.2),t.add(r);let o=new $(new pe(.12,8,6),qt(14264706));if(o.position.set(0,1.38,.2),t.add(o),i%2){let l=new $(new Oe(.75,.45,10,1,!0),qt(3158063,{side:me}));l.position.set(0,1.95,.2),t.add(l);let c=new $(new Le(.015,.015,1,4),e);c.position.set(0,1.45,.2),t.add(c)}else{let l=new $(new Oe(.34,.2,10,1,!0),qt(14332522,{side:me}));l.position.set(0,1.55,.2),t.add(l)}let a=new $(new Le(.02,.02,4,4),qt(8018502));return a.position.set(.35,1.2,-.9),a.rotation.set(1,0,-.3),t.add(a),t.scale.setScalar(1.6),t.userData={ph:Math.random()*6},Tt.add(t),t}for(let i=0;i<3;i++)kp.push(rw(i));function Ny(i,t){let e=t+90+Math.random()*160,n=(Math.random()*2-1)*(_e(e)-9);i.position.set(ne(e)+n,0,-e),i.userData.hd=xn(e)+Math.PI+(Math.random()-.5)*.8,i.userData.s=e}kp.forEach(i=>Ny(i,40+Math.random()*100));function Uy(i,t){for(let e of kp){let n=e.userData;if(e.position.z>F.pz+30||-e.position.z>t+300){Ny(e,t);continue}e.position.x+=Math.sin(n.hd+Math.PI)*.25*i,e.position.z-=Math.cos(n.hd+Math.PI)*.25*i,e.position.y=Math.sin(F.t*.8+n.ph)*.03,e.rotation.set(Math.sin(F.t*.6+n.ph)*.02,-n.hd+Math.PI,Math.sin(F.t*.7+n.ph)*.02)}}var $u=8,sa=44,Xu=new Float32Array($u*sa*3),Yu=new Float32Array($u*sa*3),zl=new ue;zl.setAttribute("position",new Kt(Xu,3));zl.setAttribute("color",new Kt(Yu,3));var Vr=new wi(zl,new di({size:2.6,map:ti,vertexColors:!0,transparent:!0,blending:Gn,depthWrite:!1,depthTest:!1,fog:!1}));Vr.renderOrder=9;Vr.frustumCulled=!1;Vr.visible=!1;Tt.add(Vr);var Wp=[[1,.62,.75],[1,.84,.4],[.55,.9,1],[1,.5,.4],[.8,.7,1]],Hl=[];for(let i=0;i<$u;i++)Hl.push({age:9,x:0,y:0,z:0,c:Wp[0],v:new Float32Array(sa*3)});var Gp=0,Wu=!1;function ow(i){let t=Math.round((i-240)/Ri);for(let e of[t-1,t,t+1])if(e>=0&&Je(e)===2&&Math.abs(je(e)-i)<230)return!0;return!1}function Fy(){let i=Hl.find(t=>t.age>=3);if(i){i.age=0,i.x=F.px+(Math.random()-.5)*40,i.y=4+Math.random()*5,i.z=F.pz-(55+Math.random()*40),i.c=Wp[Math.random()*Wp.length|0];for(let t=0;t<sa;t++){let e=Math.random()*6.283,n=Math.acos(2*Math.random()-1),s=5+Math.random()*4;i.v[t*3]=Math.sin(n)*Math.cos(e)*s,i.v[t*3+1]=Math.cos(n)*s,i.v[t*3+2]=Math.sin(n)*Math.sin(e)*s}try{oe.boom((i.x-F.px)/30)}catch{}}}function By(i,t){let e=Wu;Wu=t>.55&&ow(F.dist||-F.pz),Wu&&!e&&ta("festival","Festival de linternas: la aldea celebra esta noche"),Wu&&(Gp-=i,Gp<=0&&(Gp=1.4+Math.random()*2,Fy(),Math.random()<.35&&setTimeout(Fy,350)));let n=!1;for(let s=0;s<$u;s++){let r=Hl[s];r.age<3&&(r.age+=i);let o=r.age<3?Math.pow(Math.max(0,1-r.age/2.7),1.5):0;o>0&&(n=!0);for(let a=0;a<sa;a++){let l=(s*sa+a)*3,c=r.age;Xu[l]=r.x+r.v[a*3]*c*.8,Xu[l+1]=r.y+r.v[a*3+1]*c*.8-1.9*c*c,Xu[l+2]=r.z+r.v[a*3+2]*c*.8,Yu[l]=r.c[0]*o,Yu[l+1]=r.c[1]*o,Yu[l+2]=r.c[2]*o}}Vr.visible=n,n&&(zl.attributes.position.needsUpdate=!0,zl.attributes.color.needsUpdate=!0)}var qp=new sn({transparent:!0,side:Tn,depthWrite:!1,blending:Gn,fog:!1,uniforms:{t:{value:0},k:{value:0}},vertexShader:"varying vec2 u;void main(){u=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 u;uniform float t,k;void main(){float a=u.x*6.283;float w=sin(a*3.+t*.25+sin(a*7.+t*.4)*1.3)*.5+.5;float band=smoothstep(.15,.55,u.y)*smoothstep(1.,.55,u.y);float f=band*(.3+.7*w)*(.55+.45*sin(a*11.-t*.5));vec3 c=mix(vec3(.2,1.,.6),vec3(.55,.4,1.),smoothstep(.45,.95,u.y));gl_FragColor=vec4(c*f*k*.75,1.);}"}),Gr=new $(new Le(330,330,120,48,1,!0),qp);Gr.frustumCulled=!1;Gr.visible=!1;Gr.renderOrder=-1;Tt.add(Gr);function Oy(i){let t=tr()===3?Fe(i*1.5-.7,0,1):0;Gr.visible=t>.01,Gr.visible&&(Gr.position.set(F.px,95,F.pz),qp.uniforms.t.value=F.t,qp.uniforms.k.value=t)}var na=300,ia=new ue,Zu=new Float32Array(na*3),zy=[];for(let i=0;i<na;i++)zy.push([Math.random()*60-30,Math.random()*12,Math.random()*60-50,Math.random()*6.28]);ia.setAttribute("position",new Kt(Zu,3));var aw=(()=>{let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d");return t.fillStyle="#fff",t.beginPath(),t.ellipse(16,16,12,7,.6,0,6.3),t.fill(),new zi(i)})(),Ju=new Float32Array(na*3),Xp=new di({map:aw,alphaTest:.3,color:16777215,vertexColors:!0,size:Fn.pet.size,transparent:!0,opacity:.85,depthWrite:!1}),Vp=-1,lw=new pt(Fn.pet.c),cw=new pt(Vi.pet),qu=new pt;ia.setAttribute("color",new Kt(Ju,3));var Hy=new wi(ia,Xp);Hy.frustumCulled=!1;Tt.add(Hy);function ky(i){for(let t=0;t<na;t++){let e=zy[t];e[1]-=i*Fn.pet.fall*(.45+.3*Math.sin(e[3]+F.t)),e[1]<.2&&(e[1]=10+Math.random()*3,e[0]=Math.random()*60-30,e[2]=-Math.random()*60),Zu[t*3]=F.px+e[0]+Math.sin(F.t*.7+e[3])*1.5,Zu[t*3+1]=e[1],Zu[t*3+2]=F.pz+e[2]+10+Math.cos(F.t*.5+e[3])}{let t=Ar(F.dist||-F.pz),e=Math.max(.3*Vo(-F.pz),t);if(ia.setDrawRange(0,Math.round(na*Math.max(Fn.pet.base+Fn.pet.gain*e,t*.85))),Math.abs(t-Vp)>.02||Vp<0){Vp=t,qu.copy(lw).lerp(cw,Fe(t*1.6));for(let n=0;n<na;n++)Ju[n*3]=qu.r,Ju[n*3+1]=qu.g,Ju[n*3+2]=qu.b;ia.attributes.color.needsUpdate=!0,Xp.size=Fn.pet.size+(.42-Fn.pet.size)*Fe(t*1.6)}}ia.attributes.position.needsUpdate=!0,Xp.opacity=.85*(1-Fe(Se.night,0,1)*.8)}function Gy(i){window.__r3d={dayLampAt:dx,fc:(t,e)=>{window.__fc=t?()=>{pn.position.set(t[0],t[1],t[2]),pn.lookAt(e[0],e[1],e[2]),pn.updateMatrixWorld()}:null},LM:Wi,lmType:Je,NL:dl,lmFound:yi,lmMade:ai,castleNear:Tr,dragonS:ko,casInfo:Of,casLocal:fl,fwB:Hl,fw:Vr,cam:pn,crit:{fish:zr,wbirds:kr,dfs:Hr,fliers:Qo,liveH:lr,ENC:Bl,get scare(){return lt.scareT}},sim:i,cnt:()=>{let t={};return Tt.traverse(e=>{if((e.isMesh||e.isSprite||e.isPoints)&&e.visible){let n=e,s=!0;for(;n;){if(!n.visible){s=!1;break}n=n.parent}if(!s)return;let r=(e.isInstancedMesh?"inst":e.isSprite?"sprite":e.isPoints?"pts":"mesh")+":"+(e.material.type||"");t[r]=(t[r]||0)+1}}),t},info:()=>({g:ls.info.memory.geometries,t:ls.info.memory.textures,p:ls.info.programs.length,calls:ls.info.render.calls,tris:ls.info.render.triangles,lm:ai.size,ch:Tt.children.length}),cineJump:t=>{lt.cine&&(lt.cine.t=t)},cineOn:()=>!!lt.cine,bambooAt:Go,gardenAt:Ar,forestAt:Vo,lmPos:je,wbirds:kr,massifs:Ol,birds:Ty,dfs:Hr,fish:zr,W:cn,mistAt:iu,setCam:Or,P:F,lanternPos:vu,setTod:t=>{lt.tod=t},scene:Tt,tp:(t,e=0,n=0)=>{F.pz=-t,F.px=ne(t)+n,F.psi=xn(t)+e},sideOf:t=>tt(t,9)>.5?1:-1,get tod(){return lt.tod}}}var oa=performance.now();Q0();tg();function Yp(i,t){if(t||requestAnimationFrame(Yp),PZ.on&&!t){oa=i;return}let e=Math.max(0,Math.min(.05,(i-oa)/1e3));ra.tick(Math.max(0,(i-oa)/1e3)),oa=i,F.t+=e;let n=-F.pz;Mx(e,n);let s=ex();ky(e),nx(),ix(e),Kx(e,s),Yx(e),window.__fc&&window.__fc(),lt.started&&!ra.photo&&(lt.tod=(lt.tod+e/900)%1),yg(F.px,F.pz),xx(e,n),Xg(F.px,F.pz,my),Jf.value=F.t,xi.position.set(F.px,0,F.pz),xi.material.uniforms.t.value=F.t;let r=Se.night;pu.intensity=lt.glowK*3.2,fu.material.opacity=.3+.35*lt.glowK,wl.material.color.set(16769704),Ly(e,F.dist||n),Uy(e,F.dist||n),Dy(F.dist||n),Hp.color.copy(Tt.fog.color).multiplyScalar(1.05),Iy(e,F.dist||n),wy(e,F.dist||n),Ry(e,F.dist||n),Np.opacity=.55+.15*Math.sin(F.t*.8),Fl.position.y=Math.sin(F.t*.9)*.01,hx(F.t,F.dist||n),dy(F.dist||n),ux(),yu(F.t,F.dist||n),sx(e),By(e,r),Oy(r),Zg(r),oe.update(F.v+Math.abs(F.steer)*1.5,r,F.t),cx(e,n),ra.camAdjust(),ra.update(e,F.dist||n),t||ra.render()}var ra=dg({R:ls,scene:Tt,cam:pn,canvas:ws,el:We,toast:li,P:F,LM:Wi,lmFound:yi,lmPos:je,LMS:Ri,mkLantern:_u,cx:ne,hw:_e,lmType:Je,A:oe,hash:tt,spawnRipple:Wn,SEAS:Qh,seasonIdx:tr,started:()=>lt.started,getTod:()=>lt.tod,setTod:i=>{lt.tod=i},todName:ou,getCount:()=>lt.count,setCount:i=>{lt.count=i;try{localStorage.setItem("rio3d-lant",String(i))}catch{}We("n").textContent=i},glowK:()=>lt.glowK,restart:()=>{lt.cine=null,lt.cineW=0;try{localStorage.removeItem("rio3d-pos")}catch{}su(0),F.v=2.6,F.dist=0,F.pitch=0,lt.savedS=0,li("De vuelta al inicio del r\xEDo")},setCam:Or,getCam:()=>lt.camMode,savePos:Tl,nearLM:i=>{let t=Math.round((i-240)/Ri);for(let e of[t,t-1,t+1])if(Math.abs(je(e)-i)<130&&e>=0)return Wi[Je(e)];return""}});lt.X=ra;We("n").textContent=lt.count;PZ.ctx=()=>oe.ctx;PZ.started=()=>lt.started;requestAnimationFrame(Yp);{let i=We("cap"),t=0,e=()=>{try{return localStorage.getItem("rio3d-subs")==="1"}catch{return!1}};oe.onCap=n=>{!e()||!i||(i.textContent="["+Jn(n)+"]",i.style.opacity=1,clearTimeout(t),t=setTimeout(()=>i.style.opacity=0,2600))};try{let n=localStorage.getItem("rio3d-hand");(n==="r"||n==="l")&&document.body.classList.add("hand-"+n)}catch{}ug()}var hw=(i,t,e)=>{window.__lastT=window.__lastT||oa;for(let n=0;n<i;n++)window.__lastT+=t*1e3,e&&e(n),Yp(window.__lastT,!0);oa=window.__lastT};Gy(hw);try{window.UX.mood()}catch{}try{Nf(window.UX)}catch{}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
