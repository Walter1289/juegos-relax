/* UX compartido (juegos 2D y Cabaña 3D): idioma es/en/ja, subtítulos de ambiente, háptica y modo una mano.
   Comparte las claves de almacenamiento con Río 3D: rio3d-lang, rio3d-subs, rio3d-hap, rio3d-hand. */
(function(){
  if(window.UX)return;
  const K=['es','en','ja'],NM={es:'Español',en:'English',ja:'日本語'};
  const ls={get(k,d){try{const v=localStorage.getItem(k);return v===null?d:v}catch(e){return d}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
  let LG=ls.get('rio3d-lang','es');if(!K.includes(LG))LG='es';
  const ix=LG==='en'?1:2,MAP=new Map(),RX=[];
  const UX=window.UX={lang:LG,onLang:null,
    add(rows){rows.forEach(r=>MAP.set(r[0],r))},
    rx(list){list.forEach(r=>RX.push(r))},
    tr(s){
      if(LG==='es'||typeof s!=='string')return s;
      const t=s.trim();if(!t)return s;
      const r=MAP.get(t);if(r)return s.replace(t,r[ix]);
      for(const [re,f] of RX){const m=t.match(re);if(m)return s.replace(t,f(m,LG==='en'?1:2,UX.tr))}
      return s;
    },
    init(){
      if(LG==='es')return;
      document.documentElement.lang=LG;
      const walk=n=>{
        if(n.nodeType===3){const v=UX.tr(n.nodeValue);if(v!==n.nodeValue)n.nodeValue=v;return}
        if(n.nodeType!==1||n.tagName==='SCRIPT'||n.tagName==='STYLE')return;
        const al=n.getAttribute&&n.getAttribute('aria-label');if(al){const v=UX.tr(al);if(v!==al)n.setAttribute('aria-label',v)}
        const tt=n.getAttribute&&n.getAttribute('title');if(tt){const v=UX.tr(tt);if(v!==tt)n.setAttribute('title',v)}
        n.childNodes.forEach(walk);
      };
      walk(document.body);
      new MutationObserver(ms=>{for(const m of ms){if(m.type==='characterData')walk(m.target);else m.addedNodes.forEach(walk)}}).observe(document.body,{childList:true,subtree:true,characterData:true});
    },
    /* háptica suave: vibración del navegador donde exista (iPadOS no la expone a las webs) */
    hap(p){
      if(ls.get('rio3d-hap','1')==='0')return;
      try{
        if(navigator.vibrate){navigator.vibrate(p);return}
        if(!UX._sw){const l=document.createElement('label');l.style.cssText='position:fixed;left:-99px;top:0;opacity:0;pointer-events:none';const i=document.createElement('input');i.type='checkbox';i.setAttribute('switch','');l.appendChild(i);document.body.appendChild(l);UX._sw=l}
        UX._sw.click();
      }catch(e){}
    },
    subsOn:()=>ls.get('rio3d-subs','0')==='1',
    /* subtítulo de ambiente: UX.cap('Campanillas'); gap = ms mínimos entre repeticiones de la misma clave */
    cap(k,gap){
      if(!UX.subsOn())return;
      const n=performance.now(),l=UX._cl||(UX._cl={});if(l[k]&&n-l[k]<(gap||9000))return;l[k]=n;
      let e=document.getElementById('uxcap');
      if(!e){e=document.createElement('div');e.id='uxcap';e.setAttribute('aria-live','polite');e.style.cssText='position:fixed;left:50%;top:max(58px,calc(env(safe-area-inset-top) + 50px));transform:translateX(-50%);background:rgba(20,22,48,.84);color:#fbf1e0;padding:6px 14px;border-radius:8px;font:600 .86rem system-ui,sans-serif;opacity:0;transition:opacity .4s;z-index:20;pointer-events:none;max-width:86%;text-align:center';document.body.appendChild(e)}
      e.textContent='['+UX.tr(k)+']';e.style.opacity=1;clearTimeout(UX._ct);UX._ct=setTimeout(()=>e.style.opacity=0,2600);
    },
    /* botones de ajustes para el menú «Más». opts.hand=true añade el modo una mano (clases hand-r / hand-l en body). */
    btns(cls,opts){
      opts=opts||{};const mk=(id,f)=>{const b=document.createElement('button');b.type='button';b.id=id;b.className=cls||'';b.onclick=f;return b};
      const out=[];
      const lb=mk('uxLang',()=>{const n=K[(K.indexOf(LG)+1)%3];ls.set('rio3d-lang',n);try{UX.onLang&&UX.onLang()}catch(e){}location.reload()});
      lb.textContent=(LG==='en'?'Language: ':LG==='ja'?'言語: ':'Idioma: ')+NM[LG];out.push(lb);
      const sb=mk('uxSubs',()=>{ls.set('rio3d-subs',UX.subsOn()?'0':'1');sb.textContent=UX.subsOn()?'Subtítulos: sí':'Subtítulos: no'});
      sb.textContent=UX.subsOn()?'Subtítulos: sí':'Subtítulos: no';out.push(sb);
      const hb=mk('uxHap',()=>{const on=ls.get('rio3d-hap','1')==='1';ls.set('rio3d-hap',on?'0':'1');hb.textContent=on?'Vibración: no':'Vibración: sí';if(!on)UX.hap(15)});
      hb.textContent=ls.get('rio3d-hap','1')==='1'?'Vibración: sí':'Vibración: no';out.push(hb);
      if(opts.hand){
        const names={'0':'Una mano: no',r:'Una mano: derecha',l:'Una mano: izquierda'},seq=['0','r','l'];
        const apply=v=>{document.body.classList.remove('hand-r','hand-l');if(v!=='0')document.body.classList.add('hand-'+v)};
        let cur=ls.get('rio3d-hand','0');if(!names[cur])cur='0';apply(cur);
        const hd=mk('uxHand',()=>{cur=seq[(seq.indexOf(cur)+1)%3];ls.set('rio3d-hand',cur);apply(cur);hd.textContent=names[cur]});
        hd.textContent=names[cur];out.push(hd);
      }
      return out;
    }
  };
  UX.add([
    ['Pausa','Pause','一時停止'],['Continuar','Resume','再開'],['Más','More','その他'],['Respirar','Breathe','呼吸'],['Sonido: sí','Sound: on','音: オン'],['Sonido: no','Sound: off','音: オフ'],['Reiniciar','Restart','最初から'],
    ['En pausa','Paused','一時停止中'],['Respira con calma.','Breathe calmly.','ゆっくり呼吸しましょう。'],['Todo seguirá aquí cuando vuelvas.','Everything will be here when you return.','戻ってくるまで、すべてそのままです。'],
    ['Subtítulos: sí','Captions: on','字幕: オン'],['Subtítulos: no','Captions: off','字幕: オフ'],['Vibración: sí','Vibration: on','振動: オン'],['Vibración: no','Vibration: off','振動: オフ'],
    ['Una mano: no','One hand: off','片手: オフ'],['Una mano: derecha','One hand: right','片手: 右'],['Una mano: izquierda','One hand: left','片手: 左'],
    ['Flauta shakuhachi','Shakuhachi flute','尺八'],['Campanillas','Wind chimes','鈴の音'],['Koto','Koto','琴'],['Campana de templo','Temple bell','寺の鐘'],['Tambor lejano','Distant drum','遠くの太鼓'],
    ['Cuac de pato','Duck quack','カモの鳴き声'],['Aleteo de garza','Heron wingbeats','サギの羽ばたき'],['Golpe suave de la canoa','Soft knock on the canoe','カヌーが軽くぶつかる音'],['Salpicadura','Splash','水しぶき'],['Fuegos artificiales','Fireworks','花火'],['Nota de linterna','Lantern note','ランタンの音'],['Cascada cercana','Waterfall nearby','近くの滝の音'],['Lluvia suave','Soft rain','やさしい雨音'],
    ['Viento','Wind','風'],['Grillos','Crickets','コオロギ'],['Fregado','Scrubbing','こする音'],['Madera que cruje','Creaking wood','きしむ木の音'],['Estrella fugaz','Shooting star','流れ星'],
  ]);
})();
