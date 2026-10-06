/* Estaciones: paleta de árboles, suelo y partículas que caen. Se elige por fecha o a mano (Ajustes). */
export const SEAS_NAMES=['Primavera','Verano','Otoño','Invierno'];
export function seasonIdx(){
  let m=null;try{m=localStorage.getItem('rio3d-season')}catch(e){}
  if(m!==null&&m!==''&&m!=='auto'&&+m>=0&&+m<4)return +m;
  const mo=new Date().getMonth();
  return mo===11||mo<=1?3:mo<=4?0:mo<=7?1:2;
}
export const SEAS=[
  {name:'Primavera',lm3:'Jardín de sakura',lm3c:0xf0aebd,
    pine:['#79b595','#8cc4a0','#6fa98f','#9bcfa9'],blos:['#f7c6d6','#f4b7cb','#fbd6e1','#f2c2e0'],bblos:['#f4b7cb','#f7c6d6','#eea5bf','#fbd6e1'],
    brd:['#8fbf86','#7aae7e','#d9694a','#e39a4a','#e8c35a','#a8c97a','#c9573f'],gnd:'#b6dca3',gk:0,
    pet:{c:0xffc6d2,size:.42,fall:1,base:.12,gain:.88}},
  {name:'Verano',lm3:'Jardín de hortensias',lm3c:0x9aa8e6,
    pine:['#5fa383','#6fb593','#559a7e','#7cc09d'],blos:['#9aa8e6','#8c9ae0','#b3a2e8','#7f93d8'],bblos:['#9aa8e6','#b3a2e8','#8c9ae0','#a7b6ee'],
    brd:['#6fae74','#5f9f6a','#7cbc7a','#4f9468','#88c27f','#6aa878','#58a070'],gnd:'#9fd08a',gk:.18,
    pet:{c:0xffffff,size:.3,fall:1,base:0,gain:0}},
  {name:'Otoño',lm3:'Jardín de arces',lm3c:0xd9573a,
    pine:['#6fa386','#80b496','#659a80','#8cc09d'],blos:['#d94a32','#e8702e','#f2a33a','#c43d2c'],bblos:['#d9573a','#e8803a','#f0b43a','#c9462f'],
    brd:['#d9533a','#e8802f','#f0b43a','#c9462f','#b8532f','#e39a4a','#cf6a3a'],gnd:'#d3a45f',gk:.32,
    pet:{c:0xe8803a,size:.55,fall:1.35,base:.3,gain:.7}},
  {name:'Invierno',lm3:'Jardín de ciruelos',lm3c:0xf2d3de,
    pine:['#a9c4b8','#b9d3c6','#9dbaae','#c4dccf'],blos:['#f6e3ea','#f2d3de','#fbeff3','#efc9d8'],bblos:['#f6e3ea','#fbeff3','#efc9d8','#f2d3de'],
    brd:['#cfd8d6','#b9c4c2','#a8b4b3','#dfe6e4','#9fa9a8','#c4cdcb','#b0bbb9'],gnd:'#eef3f8',gk:.62,
    pet:{c:0xffffff,size:.28,fall:1.1,base:.55,gain:.45}}
];
