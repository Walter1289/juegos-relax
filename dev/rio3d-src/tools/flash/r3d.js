const L=require('./lib.js');
const scen=process.argv[2]||'fest',secs=+(process.argv[3]||25),seed=+(process.argv[4]||1),fps=30;
(async()=>{
  const {b,p,errs}=await L.launch(480,270,'http://localhost:8765/rio3d/index.html',seed,"localStorage.setItem('ux-calm','0');window.__SHOT="+(process.env.SHOT||-1));
  await p.waitForTimeout(800);await p.evaluate(()=>document.getElementById('go').click());await p.waitForTimeout(1500);
  const info=await p.evaluate((scen)=>{
    const R=__r3d;let k=-1;const want=scen==='fest'?2:0;
    for(let i=2;i<400;i++){if(R.lmType(i)===want){k=i;break}}
    const s=R.lmPos(k)-(scen==='fest'?120:60);R.tp(s);R.P.dist=s;
    let ok=-1;
    for(let t=0;t<1;t+=.04){R.setTod(t);R.sim(2,.05);if(scen==='fest'){if(R.fwB.some(x=>x.age<3)){ok=t;break}}else{ok=t}if(scen!=='fest'&&t>=.52)break}
    if(scen==='rain'){R.W.target=1;R.W.rain=1}
    return {k,s,ok}
  },scen);
  console.log(JSON.stringify(info));
  const out=await p.evaluate(([n,dt])=>{
    const cv=document.getElementById('c'),res=[];let nb=0,img=null;
    for(let i=0;i<n;i++){__r3d.sim(1,dt);__r3d.R.render(__r3d.scene,__r3d.cam);if(i===+window.__SHOT)img=cv.toDataURL();const o=__GRAB(cv);let bs='';const u=new Uint8Array(o.buffer);for(let q=0;q<u.length;q+=8192)bs+=String.fromCharCode.apply(null,u.subarray(q,q+8192));res.push(btoa(bs));nb=Math.max(nb,__r3d.fwB.filter(x=>x.age<3).length)}
    return {res,nb,img}
  },[fps*secs,1/fps]);
  if(out.img)require('fs').writeFileSync('shot3.png',Buffer.from(out.img.split(',')[1],'base64'));
  const fr=out.res.map(x=>{const u=Buffer.from(x,'base64');return new Uint16Array(u.buffer,u.byteOffset,u.length/2)});
  {const m=f=>{let a=0;for(const v of f)a+=v;return (a/f.length/65535).toFixed(4)};console.log('lum media f0,f300,f599',m(fr[0]),m(fr[Math.floor(fr.length/2)]),m(fr[fr.length-1]))}console.log('ráfagas simultáneas máx',out.nb);
  L.both(fr,fps,'rio3d '+scen+' seed'+seed).forEach(x=>console.log(JSON.stringify(x)));
  if(process.env.MAP)console.log(L.map.join('\n'));if(errs.length)console.log('errores',errs.slice(0,3));
  await b.close();
})();
