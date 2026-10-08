const L=require('./lib.js');
const scen=process.argv[2]||'fest',secs=+(process.argv[3]||25),seed=+(process.argv[4]||1),fps=30;
const INIT=`localStorage.setItem('ux-calm','0');window.__q=[];window.__t=0;window.requestAnimationFrame=cb=>{window.__q.push(cb);return window.__q.length};window.__tick=dt=>{if(!window.__t)window.__t=performance.now();window.__t+=dt*1000;const q=window.__q;window.__q=[];q.forEach(f=>{try{f(window.__t)}catch(e){console.error(e)}})};`;
(async()=>{
  const {b,p,errs}=await L.launch(480,270,'http://localhost:8765/cabana3d/index.html',seed,INIT);
  await p.waitForTimeout(800);
  await p.evaluate(()=>{for(let i=0;i<5;i++)__tick(1/30)});
  await p.evaluate(()=>document.getElementById('go').click());
  await p.evaluate(()=>{for(let i=0;i<60;i++)__tick(1/30)});
  await p.evaluate((s)=>{if(s==='fest'){__cab.celebrar()}else if(s==='star'){__cab.shoot()}else if(s==='rain'){try{document.querySelector('[data-rain],#rainB')&&document.querySelector('[data-rain],#rainB').click()}catch(e){}}},scen);
  const out=await p.evaluate(([n,dt])=>{
    const cv=document.getElementById('c'),res=[];
    for(let i=0;i<n;i++){__tick(dt);const o=__GRAB(cv);let bs='';const u=new Uint8Array(o.buffer);for(let q=0;q<u.length;q+=8192)bs+=String.fromCharCode.apply(null,u.subarray(q,q+8192));res.push(btoa(bs))}
    return {res,fest:__cab.fest.on,t:__cab.fest.t}
  },[fps*secs,1/fps]);
  const fr=out.res.map(x=>{const u=Buffer.from(x,'base64');return new Uint16Array(u.buffer,u.byteOffset,u.length/2)});
  const m=f=>{let a=0;for(const v of f)a+=v;return (a/f.length/65535).toFixed(4)};
  console.log('lum',m(fr[0]),m(fr[fr.length>>1]),'fest.on',out.fest,out.t.toFixed(1));
  L.both(fr,fps,'cabana3d '+scen+' seed'+seed).forEach(x=>console.log(JSON.stringify(x)));
  if(errs.length)console.log('errores',errs.slice(0,3));
  await b.close();
})();
