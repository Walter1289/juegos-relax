const L=require('./lib.js');
const url='http://localhost:8765/rio/index.html';
const scen=process.argv[2]||'castle',seed=+(process.argv[3]||1),fps=60,secs=+(process.argv[4]||40);
(async()=>{
  const {b,p,errs}=await L.launch(640,360,url,seed,"localStorage.setItem('ux-calm','0')");
  await p.waitForTimeout(600);await p.click('#go');await p.waitForTimeout(800);
  const info=await p.evaluate((scen)=>{
    const J=__jr;let k=-1,want=scen==='castle'?10:(scen==='base'||scen==='rain')?5:2;
    for(let i=1;i<400;i++){if(J.lmType(i)===want){k=i;break}}
    J.tp(J.lmPos(k)-(want===10?250:200));if(scen==='rain'){J.G.rainTarget=1;J.G.rain=1;J.G.rainT=9999}if(scen==='base'||scen==='rain'){J.setClock(100);J.render();return {k,ok:100,mode:J.fw().mode}}
    let ok=-1;for(let c=0;c<360;c+=5){J.setClock(c);J.render();J.step(1,.01);J.render();const m=J.fw().mode;if(m>0&&(scen==='castle'?m===2:m===1)){ok=c;break}}
    return {k,ok,clock:J.G.clock,mode:J.fw().mode,type:J.lmType(k)}
  },scen);
  console.log(JSON.stringify(info));
  const frames=[];
  const out=await p.evaluate(async(args)=>{
    const [n,dt,shot]=args,cv=document.getElementById('game'),res=[];let maxB=0,img=null;
    for(let i=0;i<n;i++){__jr.step(1,dt);__jr.render();const o=__GRAB(cv);{let b='';const u=new Uint8Array(o.buffer);for(let q=0;q<u.length;q+=8192)b+=String.fromCharCode.apply(null,u.subarray(q,q+8192));res.push(btoa(b))}if(i===shot)img=cv.toDataURL();const b=__jr.fw().n;if(b>maxB)maxB=b}
    return {res,maxB,img}
  },[fps*secs,1/fps,+(process.env.SHOT||-1)]);
  const fr=out.res.map(b=>{const u=Buffer.from(b,'base64');return new Uint16Array(u.buffer,u.byteOffset,u.length/2)});
  console.log('max ráfagas simultáneas',out.maxB);
  L.both(fr,fps,scen+' seed'+seed).forEach(x=>console.log(JSON.stringify(x)));
  if(out.img)require('fs').writeFileSync('shot.png',Buffer.from(out.img.split(',')[1],'base64'));if(process.env.MAP)console.log(L.map.join('\n'));if(errs.length)console.log('errores',errs.slice(0,3));
  await b.close();
})();
