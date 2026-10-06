(()=>{var If=0,iu=1,Pf=2;var Wa=1,Lf=2,Dr=3,us=0,bn=1,De=2,Ti=0,ci=1,Vi=2,su=3,ru=4,Df=5;var Fs=100,Nf=101,Uf=102,Ff=103,Bf=104,Of=200,zf=201,Hf=202,Gf=203,au=204,ou=205,kf=206,Vf=207,Wf=208,Xf=209,qf=210,Yf=211,Zf=212,Jf=213,$f=214,jo=0,Qo=1,tl=2,_r=3,el=4,nl=5,il=6,sl=7,Ol=0,Kf=1,jf=2,hi=0,lu=1,cu=2,hu=3,uu=4,du=5,fu=6,pu=7;var mu=300,ds=301,Bs=302,zl=303,Hl=304,Xa=306,vr=1e3,vi=1001,rl=1002,sn=1003,Qf=1004;var qa=1005;var yn=1006,Gl=1007;var fs=1008;var Bn=1009,gu=1010,xu=1011,Nr=1012,kl=1013,ui=1014,$n=1015,Wn=1016,Vl=1017,Wl=1018,Ur=1020,_u=35902,vu=35899,yu=1021,Mu=1022,Kn=1023,Mi=1026,ps=1027,Fr=1028,Xl=1029,ms=1030,ql=1031;var Yl=1033,Ya=33776,Za=33777,Ja=33778,$a=33779,Zl=35840,Jl=35841,$l=35842,Kl=35843,jl=36196,Ql=37492,tc=37496,ec=37488,nc=37489,Ka=37490,ic=37491,sc=37808,rc=37809,ac=37810,oc=37811,lc=37812,cc=37813,hc=37814,uc=37815,dc=37816,fc=37817,pc=37818,mc=37819,gc=37820,xc=37821,_c=36492,vc=36494,yc=36495,Mc=36283,Sc=36284,ja=36285,bc=36286;var pa=2300,al=2301,$o=2302,Wh=2303,Xh=2400,qh=2401,Yh=2402;var tp=3200;var Qa=0,ep=1,Wi="",vn="srgb",ma="srgb-linear",ga="linear",Ae="srgb";var Ko=7680;var np=519,ip=512,sp=513,rp=514,Ec=515,ap=516,op=517,Tc=518,lp=519,Su=35044;var bu="300 es",oi=2e3,yr=2001;function o0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function l0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cp(){let i=xa("canvas");return i.style.display="block",i}var qd={},Mr=null;function _a(...i){let t="THREE."+i.shift();Mr?Mr("log",t,...i):console.log(t,...i)}function hp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Yt(...i){i=hp(i);let t="THREE."+i.shift();if(Mr)Mr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Jt(...i){i=hp(i);let t="THREE."+i.shift();if(Mr)Mr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Is(...i){let t=i.join(" ");t in qd||(qd[t]=!0,Yt(...i))}function up(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var dp={[jo]:Qo,[tl]:il,[el]:sl,[_r]:nl,[Qo]:jo,[il]:tl,[sl]:el,[nl]:_r},Si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gh=Math.PI/180,ol=180/Math.PI;function Bi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function ue(i,t,e){return Math.max(t,Math.min(e,i))}function c0(i,t){return(i%t+t)%t}function xh(i,t,e){return(1-e)*i+e*t}function _i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Cu=class Cu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cu.prototype.isVector2=!0;var ht=Cu,Mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==p||h!==g){let f=l*u+c*p+h*g+d*x;f<0&&(u=-u,p=-p,g=-g,x=-x,f=-f);let m=1-o;if(f<.9995){let M=Math.acos(f),w=Math.sin(M);m=Math.sin(m*M)/w,o=Math.sin(o*M)/w,l=l*m+u*o,c=c*m+p*o,h=h*m+g*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+p*o,h=h*m+g*o,d=d*m+x*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-o*p,t[e+2]=c*g+h*p+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Iu=class Iu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _h.copy(this).projectOnVector(t),this.sub(_h)}reflect(t){return this.sub(_h.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Iu.prototype.isVector3=!0;var I=Iu,_h=new I,Yd=new Mn,Pu=class Pu{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],x=s[0],f=s[3],m=s[6],M=s[1],w=s[4],v=s[7],b=s[2],S=s[5],R=s[8];return r[0]=a*x+o*M+l*b,r[3]=a*f+o*w+l*S,r[6]=a*m+o*v+l*R,r[1]=c*x+h*M+d*b,r[4]=c*f+h*w+d*S,r[7]=c*m+h*v+d*R,r[2]=u*x+p*M+g*b,r[5]=u*f+p*w+g*S,r[8]=u*m+p*v+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vh.makeScale(t,e)),this}rotate(t){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vh.makeRotation(-t)),this}translate(t,e){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Pu.prototype.isMatrix3=!0;var jt=Pu,vh=new jt,Zd=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jd=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function h0(){let i={enabled:!0,workingColorSpace:ma,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ae&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ae&&(s.r=xr(s.r),s.g=xr(s.g),s.b=xr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?ga:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ma]:{primaries:t,whitePoint:n,transfer:ga,toXYZ:Zd,fromXYZ:Jd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:Zd,fromXYZ:Jd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),i}var pe=h0();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qs,ll=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Qs===void 0&&(Qs=xa("canvas")),Qs.width=t.width,Qs.height=t.height;let s=Qs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Qs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=xa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Oi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},u0=0,Sr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yh(s[a].image)):r.push(yh(s[a]))}else r=yh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function yh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}var d0=0,Mh=new I,In=class i extends Si{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=vi,s=vi,r=yn,a=fs,o=Kn,l=Bn,c=i.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Bi(),this.name="",this.source=new Sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mh).x}get height(){return this.source.getSize(Mh).y}get depth(){return this.source.getSize(Mh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vr:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vr:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=mu;In.DEFAULT_ANISOTROPY=1;var Lu=class Lu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],x=l[2],f=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(p+1)/2,b=(m+1)/2,S=(h+u)/4,R=(d+x)/4,_=(g+f)/4;return w>v&&w>b?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=S/n,r=R/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=_/r),this.set(n,s,r,e),this}let M=Math.sqrt((f-g)*(f-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lu.prototype.isVector4=!0;var Ge=Lu,cl=class extends Si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new In(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Sr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends cl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},va=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var hl=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Bl=class Bl{constructor(t,e,n,s,r,a,o,l,c,h,d,u,p,g,x,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,p,g,x,f)}set(t,e,n,s,r,a,o,l,c,h,d,u,p,g,x,f){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=p,m[7]=g,m[11]=x,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/tr.setFromMatrixColumn(t,0).length(),r=1/tr.setFromMatrixColumn(t,1).length(),a=1/tr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,g=c*h,x=c*d;e[0]=u+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,g=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,p=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(f0,t,p0)}lookAt(t,e,n){let s=this.elements;return Hn.subVectors(t,e),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Ki.crossVectors(n,Hn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Ki.crossVectors(n,Hn)),Ki.normalize(),Mo.crossVectors(Hn,Ki),s[0]=Ki.x,s[4]=Mo.x,s[8]=Hn.x,s[1]=Ki.y,s[5]=Mo.y,s[9]=Hn.y,s[2]=Ki.z,s[6]=Mo.z,s[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],x=n[6],f=n[10],m=n[14],M=n[3],w=n[7],v=n[11],b=n[15],S=s[0],R=s[4],_=s[8],T=s[12],A=s[1],P=s[5],N=s[9],z=s[13],L=s[2],B=s[6],X=s[10],W=s[14],at=s[3],Y=s[7],nt=s[11],et=s[15];return r[0]=a*S+o*A+l*L+c*at,r[4]=a*R+o*P+l*B+c*Y,r[8]=a*_+o*N+l*X+c*nt,r[12]=a*T+o*z+l*W+c*et,r[1]=h*S+d*A+u*L+p*at,r[5]=h*R+d*P+u*B+p*Y,r[9]=h*_+d*N+u*X+p*nt,r[13]=h*T+d*z+u*W+p*et,r[2]=g*S+x*A+f*L+m*at,r[6]=g*R+x*P+f*B+m*Y,r[10]=g*_+x*N+f*X+m*nt,r[14]=g*T+x*z+f*W+m*et,r[3]=M*S+w*A+v*L+b*at,r[7]=M*R+w*P+v*B+b*Y,r[11]=M*_+w*N+v*X+b*nt,r[15]=M*T+w*z+v*W+b*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],x=t[7],f=t[11],m=t[15],M=l*p-c*u,w=o*p-c*d,v=o*u-l*d,b=a*p-c*h,S=a*u-l*h,R=a*d-o*h;return e*(x*M-f*w+m*v)-n*(g*M-f*b+m*S)+s*(g*w-x*b+m*R)-r*(g*v-x*S+f*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],x=t[13],f=t[14],m=t[15],M=e*o-n*a,w=e*l-s*a,v=e*c-r*a,b=n*l-s*o,S=n*c-r*o,R=s*c-r*l,_=h*x-d*g,T=h*f-u*g,A=h*m-p*g,P=d*f-u*x,N=d*m-p*x,z=u*m-p*f,L=M*z-w*N+v*P+b*A-S*T+R*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return t[0]=(o*z-l*N+c*P)*B,t[1]=(s*N-n*z-r*P)*B,t[2]=(x*R-f*S+m*b)*B,t[3]=(u*S-d*R-p*b)*B,t[4]=(l*A-a*z-c*T)*B,t[5]=(e*z-s*A+r*T)*B,t[6]=(f*v-g*R-m*w)*B,t[7]=(h*R-u*v+p*w)*B,t[8]=(a*N-o*A+c*_)*B,t[9]=(n*A-e*N-r*_)*B,t[10]=(g*S-x*v+m*M)*B,t[11]=(d*v-h*S-p*M)*B,t[12]=(o*T-a*P-l*_)*B,t[13]=(e*P-n*T+s*_)*B,t[14]=(x*w-g*b-f*M)*B,t[15]=(h*b-d*w+u*M)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,x=a*h,f=a*d,m=o*d,M=l*c,w=l*h,v=l*d,b=n.x,S=n.y,R=n.z;return s[0]=(1-(x+m))*b,s[1]=(p+v)*b,s[2]=(g-w)*b,s[3]=0,s[4]=(p-v)*S,s[5]=(1-(u+m))*S,s[6]=(f+M)*S,s[7]=0,s[8]=(g+w)*R,s[9]=(f-M)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=tr.set(s[0],s[1],s[2]).length(),o=tr.set(s[4],s[5],s[6]).length(),l=tr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ii.copy(this);let c=1/a,h=1/o,d=1/l;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,e.setFromRotationMatrix(ii),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=oi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===oi)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===yr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=oi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===oi)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===yr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Bl.prototype.isMatrix4=!0;var ve=Bl,tr=new I,ii=new ve,f0=new I(0,0,0),p0=new I(1,1,1),Ki=new I,Mo=new I,Hn=new I,$d=new ve,Kd=new Mn,zi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $d.makeRotationFromQuaternion(t),this.setFromRotationMatrix($d,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kd.setFromEuler(this),this.setFromQuaternion(Kd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zi.DEFAULT_ORDER="XYZ";var ya=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},m0=0,jd=new I,er=new Mn,Pi=new ve,So=new I,ea=new I,g0=new I,x0=new Mn,Qd=new I(1,0,0),tf=new I(0,1,0),ef=new I(0,0,1),nf={type:"added"},_0={type:"removed"},nr={type:"childadded",child:null},Sh={type:"childremoved",child:null},cn=class i extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new zi,n=new Mn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new jt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return er.setFromAxisAngle(t,e),this.quaternion.multiply(er),this}rotateOnWorldAxis(t,e){return er.setFromAxisAngle(t,e),this.quaternion.premultiply(er),this}rotateX(t){return this.rotateOnAxis(Qd,t)}rotateY(t){return this.rotateOnAxis(tf,t)}rotateZ(t){return this.rotateOnAxis(ef,t)}translateOnAxis(t,e){return jd.copy(t).applyQuaternion(this.quaternion),this.position.add(jd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qd,t)}translateY(t){return this.translateOnAxis(tf,t)}translateZ(t){return this.translateOnAxis(ef,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?So.copy(t):So.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(ea,So,this.up):Pi.lookAt(So,ea,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),er.setFromRotationMatrix(Pi),this.quaternion.premultiply(er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nf),nr.child=t,this.dispatchEvent(nr),nr.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_0),Sh.child=t,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nf),nr.child=t,this.dispatchEvent(nr),nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,t,g0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,x0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};cn.DEFAULT_UP=new I(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ae=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},v0={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let f=e.getJointPose(x,n),m=this._getHandJoint(c,x);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(v0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},bo={h:0,s:0,l:0};function bh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=c0(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=bh(a,r,t+1/3),this.g=bh(a,r,t),this.b=bh(a,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=vn){function n(r){r!==void 0&&parseFloat(r)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vn){let n=fp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return pe.workingToColorSpace(wn.copy(this),t),Math.round(ue(wn.r*255,0,255))*65536+Math.round(ue(wn.g*255,0,255))*256+Math.round(ue(wn.b*255,0,255))}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(wn.copy(this),e);let n=wn.r,s=wn.g,r=wn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(wn.copy(this),e),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=vn){pe.workingToColorSpace(wn.copy(this),t);let e=wn.r,n=wn.g,s=wn.b;return t!==vn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(bo);let n=xh(ji.h,bo.h,e),s=xh(ji.s,bo.s,e),r=xh(ji.l,bo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new vt;vt.NAMES=fp;var Ma=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new vt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ps=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},si=new I,Li=new I,Eh=new I,Di=new I,ir=new I,sr=new I,sf=new I,Th=new I,wh=new I,Ah=new I,Rh=new Ge,Ch=new Ge,Ih=new Ge,Fi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),si.subVectors(t,e),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){si.subVectors(s,e),Li.subVectors(n,e),Eh.subVectors(t,e);let a=si.dot(si),o=si.dot(Li),l=si.dot(Eh),c=Li.dot(Li),h=Li.dot(Eh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Rh.setScalar(0),Ch.setScalar(0),Ih.setScalar(0),Rh.fromBufferAttribute(t,e),Ch.fromBufferAttribute(t,n),Ih.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Rh,r.x),a.addScaledVector(Ch,r.y),a.addScaledVector(Ih,r.z),a}static isFrontFacing(t,e,n,s){return si.subVectors(n,e),Li.subVectors(t,e),si.cross(Li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),si.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ir.subVectors(s,n),sr.subVectors(r,n),Th.subVectors(t,n);let l=ir.dot(Th),c=sr.dot(Th);if(l<=0&&c<=0)return e.copy(n);wh.subVectors(t,s);let h=ir.dot(wh),d=sr.dot(wh);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ir,a);Ah.subVectors(t,r);let p=ir.dot(Ah),g=sr.dot(Ah);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(sr,o);let f=h*g-p*d;if(f<=0&&d-h>=0&&p-g>=0)return sf.subVectors(r,s),o=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(sf,o);let m=1/(f+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(ir,a).addScaledVector(sr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bi=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ri):ri.fromBufferAttribute(r,a),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(na),To.subVectors(this.max,na),rr.subVectors(t.a,na),ar.subVectors(t.b,na),or.subVectors(t.c,na),Qi.subVectors(ar,rr),ts.subVectors(or,ar),ws.subVectors(rr,or);let e=[0,-Qi.z,Qi.y,0,-ts.z,ts.y,0,-ws.z,ws.y,Qi.z,0,-Qi.x,ts.z,0,-ts.x,ws.z,0,-ws.x,-Qi.y,Qi.x,0,-ts.y,ts.x,0,-ws.y,ws.x,0];return!Ph(e,rr,ar,or,To)||(e=[1,0,0,0,1,0,0,0,1],!Ph(e,rr,ar,or,To))?!1:(wo.crossVectors(Qi,ts),e=[wo.x,wo.y,wo.z],Ph(e,rr,ar,or,To))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ni=[new I,new I,new I,new I,new I,new I,new I,new I],ri=new I,Eo=new bi,rr=new I,ar=new I,or=new I,Qi=new I,ts=new I,ws=new I,na=new I,To=new I,wo=new I,As=new I;function Ph(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){As.fromArray(i,r);let o=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),l=t.dot(As),c=e.dot(As),h=n.dot(As);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var nn=new I,Ao=new ht,y0=0,me=class extends Si{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:y0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Su,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ao.fromBufferAttribute(this,e),Ao.applyMatrix3(t),this.setXY(e,Ao.x,Ao.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Sa=class extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ba=class extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}},M0=new bi,ia=new I,Lh=new I,Ei=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):M0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ia.subVectors(t,this.center);let e=ia.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ia,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ia.copy(t.center).add(Lh)),this.expandByPoint(ia.copy(t.center).sub(Lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},S0=0,Zn=new ve,Dh=new cn,lr=new I,Gn=new bi,sa=new bi,pn=new I,ge=class i extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(o0(t)?ba:Sa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Zn.makeRotationFromQuaternion(t),this.applyMatrix4(Zn),this}rotateX(t){return Zn.makeRotationX(t),this.applyMatrix4(Zn),this}rotateY(t){return Zn.makeRotationY(t),this.applyMatrix4(Zn),this}rotateZ(t){return Zn.makeRotationZ(t),this.applyMatrix4(Zn),this}translate(t,e,n){return Zn.makeTranslation(t,e,n),this.applyMatrix4(Zn),this}scale(t,e,n){return Zn.makeScale(t,e,n),this.applyMatrix4(Zn),this}lookAt(t){return Dh.lookAt(t),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(Gn.min,sa.min),Gn.expandByPoint(pn),pn.addVectors(Gn.max,sa.max),Gn.expandByPoint(pn)):(Gn.expandByPoint(sa.min),Gn.expandByPoint(sa.max))}Gn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)pn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(pn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pn.fromBufferAttribute(o,c),l&&(lr.fromBufferAttribute(t,c),pn.add(lr)),s=Math.max(s,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new me(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new I,l[_]=new I;let c=new I,h=new I,d=new I,u=new ht,p=new ht,g=new ht,x=new I,f=new I;function m(_,T,A){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,A),u.fromBufferAttribute(r,_),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,A),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),f.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[_].add(x),o[T].add(x),o[A].add(x),l[_].add(f),l[T].add(f),l[A].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,T=M.length;_<T;++_){let A=M[_],P=A.start,N=A.count;for(let z=P,L=P+N;z<L;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let w=new I,v=new I,b=new I,S=new I;function R(_){b.fromBufferAttribute(s,_),S.copy(b);let T=o[_];w.copy(T),w.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(S,T);let P=v.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,P)}for(let _=0,T=M.length;_<T;++_){let A=M[_],P=A.start,N=A.count;for(let z=P,L=P+N;z<L;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),x=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,f),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let x=0,f=l.length;x<f;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[p++]}return new me(u,h,d)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ea=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Su,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Cn=new I,Er=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){_a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){_a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nh=new I,b0=new I,E0=new jt,ai=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Nh.subVectors(n,e).cross(b0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Nh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||E0.getNormalMatrix(t),s=this.coplanarPoint(Nh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},T0=0,Jn=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=ci,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=au,this.blendDst=ou,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ai().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ht().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ns=class extends Jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},cr,ra=new I,hr=new I,ur=new I,dr=new ht,aa=new ht,pp=new ve,Ro=new I,oa=new I,Co=new I,rf=new ht,Uh=new ht,af=new ht,Ls=class extends cn{constructor(t=new ns){if(super(),this.isSprite=!0,this.type="Sprite",cr===void 0){cr=new ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ea(e,5);cr.setIndex([0,1,2,0,2,3]),cr.setAttribute("position",new Er(n,3,0,!1)),cr.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=cr,this.material=t,this.center=new ht(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hr.setFromMatrixScale(this.matrixWorld),pp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ur.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hr.multiplyScalar(-ur.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Io(Ro.set(-.5,-.5,0),ur,a,hr,s,r),Io(oa.set(.5,-.5,0),ur,a,hr,s,r),Io(Co.set(.5,.5,0),ur,a,hr,s,r),rf.set(0,0),Uh.set(1,0),af.set(1,1);let o=t.ray.intersectTriangle(Ro,oa,Co,!1,ra);if(o===null&&(Io(oa.set(-.5,.5,0),ur,a,hr,s,r),Uh.set(0,1),o=t.ray.intersectTriangle(Ro,Co,oa,!1,ra),o===null))return;let l=t.ray.origin.distanceTo(ra);l<t.near||l>t.far||e.push({distance:l,point:ra.clone(),uv:Fi.getInterpolation(ra,Ro,oa,Co,rf,Uh,af,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Io(i,t,e,n,s,r){dr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(aa.x=r*dr.x-s*dr.y,aa.y=s*dr.x+r*dr.y):aa.copy(dr),i.copy(t),i.x+=aa.x,i.y+=aa.y,i.applyMatrix4(pp)}var Ui=new I,Fh=new I,Po=new I,Lo=new I,Tr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ui.copy(this.origin).addScaledVector(this.direction,e),Ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fh.copy(t).add(e).multiplyScalar(.5),Po.copy(e).sub(t).normalize(),Lo.copy(this.origin).sub(Fh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Po),o=Lo.dot(this.direction),l=-Lo.dot(Po),c=Lo.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fh).addScaledVector(Po,u),p}intersectSphere(t,e){if(t.radius<0)return null;Ui.subVectors(t.center,this.origin);let n=Ui.dot(this.direction),s=Ui.dot(Ui)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ui)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,p=t.z-a.z,g=e.x-a.x,x=e.y-a.y,f=e.z-a.z,m=n.x-a.x,M=n.y-a.y,w=n.z-a.z,v=Math.abs(l),b=Math.abs(c),S=Math.abs(h),R,_,T,A,P,N,z,L,B,X,W,at;if(v>=b&&v>=S?(T=l,N=d,B=g,at=m,l>=0?(R=c,_=h,A=u,P=p,z=x,L=f,X=M,W=w):(R=h,_=c,A=p,P=u,z=f,L=x,X=w,W=M)):b>=S?(T=c,N=u,B=x,at=M,c>=0?(R=h,_=l,A=p,P=d,z=f,L=g,X=w,W=m):(R=l,_=h,A=d,P=p,z=g,L=f,X=m,W=w)):(T=h,N=p,B=f,at=w,h>=0?(R=l,_=c,A=d,P=u,z=g,L=x,X=m,W=M):(R=c,_=l,A=u,P=d,z=x,L=g,X=M,W=m)),T===0)return null;let Y=R/T,nt=_/T,et=1/T,Ft=A-Y*N,Rt=P-nt*N,le=z-Y*B,ee=L-nt*B,Kt=X-Y*at,$=W-nt*at,st=Kt*ee-$*le,yt=Ft*$-Rt*Kt,Bt=le*Rt-ee*Ft;if(s){if(st<0||yt<0||Bt<0)return null}else if((st<0||yt<0||Bt<0)&&(st>0||yt>0||Bt>0))return null;let At=st+yt+Bt;if(At===0)return null;let Zt=et*(st*N+yt*B+Bt*at);return(At>0?Zt<0:Zt>0)?null:this.at(Zt/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oe=class extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},of=new ve,Rs=new Tr,Do=new Ei,lf=new I,No=new I,Uo=new I,Fo=new I,Bh=new I,Bo=new I,cf=new I,Oo=new I,K=class extends cn{constructor(t=new ge,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Bh.fromBufferAttribute(d,t),a?Bo.addScaledVector(Bh,h):Bo.addScaledVector(Bh.sub(e),h))}e.add(Bo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(r),Rs.copy(t.ray).recast(t.near),!(Do.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Do,lf)===null||Rs.origin.distanceToSquared(lf)>(t.far-t.near)**2))&&(of.copy(r).invert(),Rs.copy(t.ray).applyMatrix4(of),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let f=u[g],m=a[f.materialIndex],M=Math.max(f.start,p.start),w=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let v=M,b=w;v<b;v+=3){let S=o.getX(v),R=o.getX(v+1),_=o.getX(v+2);s=zo(this,m,t,n,c,h,d,S,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){let M=o.getX(f),w=o.getX(f+1),v=o.getX(f+2);s=zo(this,a,t,n,c,h,d,M,w,v),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let f=u[g],m=a[f.materialIndex],M=Math.max(f.start,p.start),w=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let v=M,b=w;v<b;v+=3){let S=v,R=v+1,_=v+2;s=zo(this,m,t,n,c,h,d,S,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){let M=f,w=f+1,v=f+2;s=zo(this,a,t,n,c,h,d,M,w,v),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function w0(i,t,e,n,s,r,a,o){let l;if(t.side===bn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===us,o),l===null)return null;Oo.copy(o),Oo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Oo);return c<e.near||c>e.far?null:{distance:c,point:Oo.clone(),object:i}}function zo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,No),i.getVertexPosition(l,Uo),i.getVertexPosition(c,Fo);let h=w0(i,t,e,n,No,Uo,Fo,cf);if(h){let d=new I;Fi.getBarycoord(cf,No,Uo,Fo,d),s&&(h.uv=Fi.getInterpolatedAttribute(s,o,l,c,d,new ht)),r&&(h.uv1=Fi.getInterpolatedAttribute(r,o,l,c,d,new ht)),a&&(h.normal=Fi.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};Fi.getNormal(No,Uo,Fo,u.normal),h.face=u,h.barycoord=d}return h}var Ds=class extends In{constructor(t=null,e=1,n=1,s,r,a,o,l,c=sn,h=sn,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var li=class extends me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},fr=new ve,hf=new ve,Ho=[],uf=new bi,A0=new ve,la=new K,ca=new Ei,Pn=class extends K{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new li(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,A0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fr),uf.copy(t.boundingBox).applyMatrix4(fr),this.boundingBox.union(uf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fr),ca.copy(t.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(ca)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(n),t.ray.intersectsSphere(ca)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fr),hf.multiplyMatrices(n,fr),la.matrixWorld=hf,la.raycast(t,Ho);for(let a=0,o=Ho.length;a<o;a++){let l=Ho[a];l.instanceId=r,l.object=this,e.push(l)}Ho.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new li(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ds(new Float32Array(s*this.count),s,this.count,Fr,$n));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cs=new Ei,R0=new ht(.5,.5),Go=new I,wr=class{constructor(t=new ai,e=new ai,n=new ai,s=new ai,r=new ai,a=new ai){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],x=r[9],f=r[10],m=r[11],M=r[12],w=r[13],v=r[14],b=r[15];if(s[0].setComponents(c-a,p-h,m-g,b-M).normalize(),s[1].setComponents(c+a,p+h,m+g,b+M).normalize(),s[2].setComponents(c+o,p+d,m+x,b+w).normalize(),s[3].setComponents(c-o,p-d,m-x,b-w).normalize(),n)s[4].setComponents(l,u,f,v).normalize(),s[5].setComponents(c-l,p-u,m-f,b-v).normalize();else if(s[4].setComponents(c-l,p-u,m-f,b-v).normalize(),e===oi)s[5].setComponents(c+l,p+u,m+f,b+v).normalize();else if(e===yr)s[5].setComponents(l,u,f,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){Cs.center.set(0,0,0);let e=R0.distanceTo(t.center);return Cs.radius=.7071067811865476+e,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Go.x=s.normal.x>0?t.max.x:t.min.x,Go.y=s.normal.y>0?t.max.y:t.min.y,Go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ar=class extends Jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ul=new I,dl=new I,df=new ve,ha=new Tr,ko=new Ei,Oh=new I,ff=new I,fl=class extends cn{constructor(t=new ge,e=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ul.fromBufferAttribute(e,s-1),dl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ul.distanceTo(dl);t.setAttribute("lineDistance",new ie(n,1))}else Yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,t.ray.intersectsSphere(ko)===!1)return;df.copy(s).invert(),ha.copy(t.ray).applyMatrix4(df);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=p,f=g-1;x<f;x+=c){let m=h.getX(x),M=h.getX(x+1),w=Vo(this,t,ha,l,m,M,x);w&&e.push(w)}if(this.isLineLoop){let x=h.getX(g-1),f=h.getX(p),m=Vo(this,t,ha,l,x,f,g-1);m&&e.push(m)}}else{let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=p,f=g-1;x<f;x+=c){let m=Vo(this,t,ha,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=Vo(this,t,ha,l,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vo(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(ul.fromBufferAttribute(o,s),dl.fromBufferAttribute(o,r),e.distanceSqToSegment(ul,dl,Oh,ff)>n)return;Oh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Oh);if(!(c<t.near||c>t.far))return{distance:c,point:ff.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var pf=new I,mf=new I,Ta=class extends fl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)pf.fromBufferAttribute(e,s),mf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+pf.distanceTo(mf);t.setAttribute("lineDistance",new ie(n,1))}else Yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hi=class extends Jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gf=new ve,Zh=new Tr,Wo=new Ei,Xo=new I,is=class extends cn{constructor(t=new ge,e=new Hi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,t.ray.intersectsSphere(Wo)===!1)return;gf.copy(s).invert(),Zh.copy(t.ray).applyMatrix4(gf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,x=p;g<x;g++){let f=c.getX(g);Xo.fromBufferAttribute(d,f),xf(Xo,f,l,s,t,e,this)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,x=p;g<x;g++)Xo.fromBufferAttribute(d,g),xf(Xo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xf(i,t,e,n,s,r,a){let o=Zh.distanceSqToPoint(i);if(o<e){let l=new I;Zh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var wa=class extends In{constructor(t=[],e=ds,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gi=class extends In{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ss=class extends In{constructor(t,e,n=ui,s,r,a,o=sn,l=sn,c,h=Mi,d=1){if(h!==Mi&&h!==ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},pl=class extends ss{constructor(t,e=ui,n=ds,s,r,a=sn,o=sn,l,c=Mi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Aa=class extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fn=class i extends ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2));function g(x,f,m,M,w,v,b,S,R,_,T){let A=v/R,P=b/_,N=v/2,z=b/2,L=S/2,B=R+1,X=_+1,W=0,at=0,Y=new I;for(let nt=0;nt<X;nt++){let et=nt*P-z;for(let Ft=0;Ft<B;Ft++){let Rt=Ft*A-N;Y[x]=Rt*M,Y[f]=et*w,Y[m]=L,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[f]=0,Y[m]=S>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Ft/R),d.push(1-nt/_),W+=1}}for(let nt=0;nt<_;nt++)for(let et=0;et<R;et++){let Ft=u+et+B*nt,Rt=u+et+B*(nt+1),le=u+(et+1)+B*(nt+1),ee=u+(et+1)+B*nt;l.push(Ft,Rt,ee),l.push(Rt,le,ee),at+=6}o.addGroup(p,at,T),p+=at,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var rs=class i extends ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,h=new ht;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let p=n+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ue=class i extends ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,x=[],f=n/2,m=0;M(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(p,2));function M(){let v=new I,b=new I,S=0,R=(e-t)/n;for(let _=0;_<=r;_++){let T=[],A=_/r,P=A*(e-t)+t;for(let N=0;N<=s;N++){let z=N/s,L=z*l+o,B=Math.sin(L),X=Math.cos(L);b.x=P*B,b.y=-A*n+f,b.z=P*X,d.push(b.x,b.y,b.z),v.set(B,R,X).normalize(),u.push(v.x,v.y,v.z),p.push(z,1-A),T.push(g++)}x.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let A=x[T][_],P=x[T+1][_],N=x[T+1][_+1],z=x[T][_+1];(t>0||T!==0)&&(h.push(A,P,z),S+=3),(e>0||T!==r-1)&&(h.push(P,N,z),S+=3)}c.addGroup(m,S,0),m+=S}function w(v){let b=g,S=new ht,R=new I,_=0,T=v===!0?t:e,A=v===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,f*A,0),u.push(0,A,0),p.push(.5,.5),g++;let P=g;for(let N=0;N<=s;N++){let L=N/s*l+o,B=Math.cos(L),X=Math.sin(L);R.x=T*X,R.y=f*A,R.z=T*B,d.push(R.x,R.y,R.z),u.push(0,A,0),S.x=B*.5+.5,S.y=X*.5*A+.5,p.push(S.x,S.y),g++}for(let N=0;N<s;N++){let z=b+N,L=P+N;v===!0?h.push(L,L+1,z):h.push(L+1,L,z),_+=3}c.addGroup(m,_,v===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ke=class i extends Ue{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ml=class i extends ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let w=new I,v=new I,b=new I;for(let S=0;S<e.length;S+=3)p(e[S+0],w),p(e[S+1],v),p(e[S+2],b),l(w,v,b,M)}function l(M,w,v,b){let S=b+1,R=[];for(let _=0;_<=S;_++){R[_]=[];let T=M.clone().lerp(v,_/S),A=w.clone().lerp(v,_/S),P=S-_;for(let N=0;N<=P;N++)N===0&&_===S?R[_][N]=T:R[_][N]=T.clone().lerp(A,N/P)}for(let _=0;_<S;_++)for(let T=0;T<2*(S-_)-1;T++){let A=Math.floor(T/2);T%2===0?(u(R[_][A+1]),u(R[_+1][A]),u(R[_][A])):(u(R[_][A+1]),u(R[_+1][A+1]),u(R[_+1][A]))}}function c(M){let w=new I;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(M),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let M=new I;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let v=f(M)/2/Math.PI+.5,b=m(M)/Math.PI+.5;a.push(v,1-b)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){let w=a[M+0],v=a[M+2],b=a[M+4],S=Math.max(w,v,b),R=Math.min(w,v,b);S>.9&&R<.1&&(w<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function p(M,w){let v=M*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function g(){let M=new I,w=new I,v=new I,b=new I,S=new ht,R=new ht,_=new ht;for(let T=0,A=0;T<r.length;T+=9,A+=6){M.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),S.set(a[A+0],a[A+1]),R.set(a[A+2],a[A+3]),_.set(a[A+4],a[A+5]),b.copy(M).add(w).add(v).divideScalar(3);let P=f(b);x(S,A+0,M,P),x(R,A+2,w,P),x(_,A+4,v,P)}}function x(M,w,v,b){b<0&&M.x===1&&(a[w]=M.x-1),v.x===0&&v.z===0&&(a[w]=b/2/Math.PI+.5)}function f(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Yt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ht:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new ve;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ue(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ue(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rr=class extends kn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ht){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},gl=class extends Rr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Eu(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var _f=new I,vf=new I,zh=new Eu,Hh=new Eu,Gh=new Eu,xl=class extends kn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(vf.subVectors(s[0],s[1]).add(s[0]),c=vf);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(_f.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_f),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),f<1e-4&&(f=x),zh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,f),Hh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,f),Gh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,f)}else this.curveType==="catmullrom"&&(zh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Hh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Gh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(zh.calc(l),Hh.calc(l),Gh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function yf(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function C0(i,t){let e=1-i;return e*e*t}function I0(i,t){return 2*(1-i)*i*t}function P0(i,t){return i*i*t}function da(i,t,e,n){return C0(i,t)+I0(i,e)+P0(i,n)}function L0(i,t){let e=1-i;return e*e*e*t}function D0(i,t){let e=1-i;return 3*e*e*i*t}function N0(i,t){return 3*(1-i)*i*i*t}function U0(i,t){return i*i*i*t}function fa(i,t,e,n,s){return L0(i,t)+D0(i,e)+N0(i,n)+U0(i,s)}var Ra=class extends kn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fa(t,s.x,r.x,a.x,o.x),fa(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_l=class extends kn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fa(t,s.x,r.x,a.x,o.x),fa(t,s.y,r.y,a.y,o.y),fa(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ca=class extends kn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vl=class extends kn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ia=class extends kn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(da(t,s.x,r.x,a.x),da(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yl=class extends kn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(da(t,s.x,r.x,a.x),da(t,s.y,r.y,a.y),da(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pa=class extends kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(yf(o,l.x,c.x,h.x,d.x),yf(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},Jh=Object.freeze({__proto__:null,ArcCurve:gl,CatmullRomCurve3:xl,CubicBezierCurve:Ra,CubicBezierCurve3:_l,EllipseCurve:Rr,LineCurve:Ca,LineCurve3:vl,QuadraticBezierCurve:Ia,QuadraticBezierCurve3:yl,SplineCurve:Pa}),Ml=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Jh[s.type]().fromJSON(s))}return this}},Ns=class extends Ml{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ca(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ia(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ra(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Pa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Rr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},as=class extends Ns{constructor(t){super(t),this.uuid=Bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ns().fromJSON(s))}return this}};function F0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=mp(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=G0(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let p=i[u],g=i[u+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return La(r,a,e,o,l,c,0),a}function mp(i,t,e,n,s){let r;if(s===j0(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Mf(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Mf(a/n|0,i[a],i[a+1],r);return r&&Cr(r,r.next)&&(Na(r),r=r.next),r}function Us(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cr(e,e.next)||Ze(e.prev,e,e.next)===0)){if(Na(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function La(i,t,e,n,s,r,a){if(!i)return;!a&&r&&q0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?O0(i,n,s,r):B0(i)){t.push(l.i,i.i,c.i),Na(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=z0(Us(i),t),La(i,t,e,n,s,r,2)):a===2&&H0(i,t,e,n,s,r):La(Us(i),t,e,n,s,r,1);break}}}function B0(i){let t=i.prev,e=i,n=i.next;if(Ze(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),p=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&ua(s,o,r,l,a,c,g.x,g.y)&&Ze(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function O0(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ze(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,p=Math.min(o,l,c),g=Math.min(h,d,u),x=Math.max(o,l,c),f=Math.max(h,d,u),m=$h(p,g,t,e,n),M=$h(x,f,t,e,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=m&&v&&v.z<=M;){if(w.x>=p&&w.x<=x&&w.y>=g&&w.y<=f&&w!==s&&w!==a&&ua(o,h,l,d,c,u,w.x,w.y)&&Ze(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=f&&v!==s&&v!==a&&ua(o,h,l,d,c,u,v.x,v.y)&&Ze(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=m;){if(w.x>=p&&w.x<=x&&w.y>=g&&w.y<=f&&w!==s&&w!==a&&ua(o,h,l,d,c,u,w.x,w.y)&&Ze(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=M;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=f&&v!==s&&v!==a&&ua(o,h,l,d,c,u,v.x,v.y)&&Ze(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function z0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Cr(n,s)&&xp(n,e,e.next,s)&&Da(n,s)&&Da(s,n)&&(t.push(n.i,e.i,s.i),Na(e),Na(e.next),e=i=s),e=e.next}while(e!==i);return Us(e)}function H0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&J0(a,o)){let l=_p(a,o);a=Us(a,a.next),l=Us(l,l.next),La(a,t,e,n,s,r,0),La(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function G0(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=mp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Z0(c))}s.sort(k0);for(let r=0;r<s.length;r++)e=V0(s[r],e);return e}function k0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function V0(i,t){let e=W0(i,t);if(!e)return t;let n=_p(e,i);return Us(n,n.next),Us(e,e.next)}function W0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Cr(i,e))return e;do{if(Cr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&gp(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Da(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&X0(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function X0(i,t){return Ze(i.prev,i,t.prev)<0&&Ze(t.next,i,i.next)<0}function q0(i,t,e,n){let s=i;do s.z===0&&(s.z=$h(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Y0(s)}function Y0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function $h(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Z0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gp(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ua(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&gp(i,t,e,n,s,r,a,o)}function J0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$0(i,t)&&(Da(i,t)&&Da(t,i)&&K0(i,t)&&(Ze(i.prev,i,t.prev)||Ze(i,t.prev,t))||Cr(i,t)&&Ze(i.prev,i,i.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cr(i,t){return i.x===t.x&&i.y===t.y}function xp(i,t,e,n){let s=Yo(Ze(i,t,e)),r=Yo(Ze(i,t,n)),a=Yo(Ze(e,n,i)),o=Yo(Ze(e,n,t));return!!(s!==r&&a!==o||s===0&&qo(i,e,t)||r===0&&qo(i,n,t)||a===0&&qo(e,i,n)||o===0&&qo(e,t,n))}function qo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Yo(i){return i>0?1:i<0?-1:0}function $0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Da(i,t){return Ze(i.prev,i,i.next)<0?Ze(i,t,i.next)>=0&&Ze(i,i.prev,t)>=0:Ze(i,t,i.prev)<0||Ze(i,i.next,t)<0}function K0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _p(i,t){let e=Kh(i.i,i.x,i.y),n=Kh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mf(i,t,e,n){let s=Kh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Na(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function j0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var jh=class{static triangulate(t,e,n=2){return F0(t,e,n)}},yi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Sf(t),bf(n,t);let a=t.length;e.forEach(Sf);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,bf(n,e[l]);let o=jh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Sf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function bf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ir=class i extends ge{constructor(t=new as([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Q0,w,v=!1,b,S,R,_;if(m){w=m.getSpacedPoints(h),v=!0,u=!1;let rt=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,rt),S=new I,R=new I,_=new I}u||(f=0,p=0,g=0,x=0);let T=o.extractPoints(c),A=T.shape,P=T.holes;if(!yi.isClockWise(A)){A=A.reverse();for(let rt=0,lt=P.length;rt<lt;rt++){let dt=P[rt];yi.isClockWise(dt)&&(P[rt]=dt.reverse())}}function z(rt){let dt=10000000000000001e-36,ut=rt[0];for(let pt=1;pt<=rt.length;pt++){let Lt=pt%rt.length,Ot=rt[Lt],Vt=Ot.x-ut.x,$t=Ot.y-ut.y,D=Vt*Vt+$t*$t,de=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(ut.x),Math.abs(ut.y)),se=dt*de*de;if(D<=se){rt.splice(Lt,1),pt--;continue}ut=Ot}}z(A),P.forEach(z);let L=P.length,B=A;for(let rt=0;rt<L;rt++){let lt=P[rt];A=A.concat(lt)}function X(rt,lt,dt){return lt||Jt("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(lt,dt)}let W=A.length;function at(rt,lt,dt){let ut,pt,Lt,Ot=rt.x-lt.x,Vt=rt.y-lt.y,$t=dt.x-rt.x,D=dt.y-rt.y,de=Ot*Ot+Vt*Vt,se=Ot*D-Vt*$t;if(Math.abs(se)>Number.EPSILON){let C=Math.sqrt(de),y=Math.sqrt($t*$t+D*D),H=lt.x-Vt/C,V=lt.y+Ot/C,J=dt.x-D/y,ct=dt.y+$t/y,ft=((J-H)*D-(ct-V)*$t)/(Ot*D-Vt*$t);ut=H+Ot*ft-rt.x,pt=V+Vt*ft-rt.y;let Z=ut*ut+pt*pt;if(Z<=2)return new ht(ut,pt);Lt=Math.sqrt(Z/2)}else{let C=!1;Ot>Number.EPSILON?$t>Number.EPSILON&&(C=!0):Ot<-Number.EPSILON?$t<-Number.EPSILON&&(C=!0):Math.sign(Vt)===Math.sign(D)&&(C=!0),C?(ut=-Vt,pt=Ot,Lt=Math.sqrt(de)):(ut=Ot,pt=Vt,Lt=Math.sqrt(de/2))}return new ht(ut/Lt,pt/Lt)}let Y=[];for(let rt=0,lt=B.length,dt=lt-1,ut=rt+1;rt<lt;rt++,dt++,ut++)dt===lt&&(dt=0),ut===lt&&(ut=0),Y[rt]=at(B[rt],B[dt],B[ut]);let nt=[],et,Ft=Y.concat();for(let rt=0,lt=L;rt<lt;rt++){let dt=P[rt];et=[];for(let ut=0,pt=dt.length,Lt=pt-1,Ot=ut+1;ut<pt;ut++,Lt++,Ot++)Lt===pt&&(Lt=0),Ot===pt&&(Ot=0),et[ut]=at(dt[ut],dt[Lt],dt[Ot]);nt.push(et),Ft=Ft.concat(et)}let Rt;if(f===0)Rt=yi.triangulateShape(B,P);else{let rt=[],lt=[];for(let dt=0;dt<f;dt++){let ut=dt/f,pt=p*Math.cos(ut*Math.PI/2),Lt=g*Math.sin(ut*Math.PI/2)+x;for(let Ot=0,Vt=B.length;Ot<Vt;Ot++){let $t=X(B[Ot],Y[Ot],Lt);yt($t.x,$t.y,-pt),ut===0&&rt.push($t)}for(let Ot=0,Vt=L;Ot<Vt;Ot++){let $t=P[Ot];et=nt[Ot];let D=[];for(let de=0,se=$t.length;de<se;de++){let C=X($t[de],et[de],Lt);yt(C.x,C.y,-pt),ut===0&&D.push(C)}ut===0&&lt.push(D)}}Rt=yi.triangulateShape(rt,lt)}let le=Rt.length,ee=g+x;for(let rt=0;rt<W;rt++){let lt=u?X(A[rt],Ft[rt],ee):A[rt];v?(R.copy(b.normals[0]).multiplyScalar(lt.x),S.copy(b.binormals[0]).multiplyScalar(lt.y),_.copy(w[0]).add(R).add(S),yt(_.x,_.y,_.z)):yt(lt.x,lt.y,0)}for(let rt=1;rt<=h;rt++)for(let lt=0;lt<W;lt++){let dt=u?X(A[lt],Ft[lt],ee):A[lt];v?(R.copy(b.normals[rt]).multiplyScalar(dt.x),S.copy(b.binormals[rt]).multiplyScalar(dt.y),_.copy(w[rt]).add(R).add(S),yt(_.x,_.y,_.z)):yt(dt.x,dt.y,d/h*rt)}for(let rt=f-1;rt>=0;rt--){let lt=rt/f,dt=p*Math.cos(lt*Math.PI/2),ut=g*Math.sin(lt*Math.PI/2)+x;for(let pt=0,Lt=B.length;pt<Lt;pt++){let Ot=X(B[pt],Y[pt],ut);yt(Ot.x,Ot.y,d+dt)}for(let pt=0,Lt=P.length;pt<Lt;pt++){let Ot=P[pt];et=nt[pt];for(let Vt=0,$t=Ot.length;Vt<$t;Vt++){let D=X(Ot[Vt],et[Vt],ut);v?yt(D.x,D.y+w[h-1].y,w[h-1].x+dt):yt(D.x,D.y,d+dt)}}}Kt(),$();function Kt(){let rt=s.length/3;if(u){let lt=0,dt=W*lt;for(let ut=0;ut<le;ut++){let pt=Rt[ut];Bt(pt[2]+dt,pt[1]+dt,pt[0]+dt)}lt=h+f*2,dt=W*lt;for(let ut=0;ut<le;ut++){let pt=Rt[ut];Bt(pt[0]+dt,pt[1]+dt,pt[2]+dt)}}else{for(let lt=0;lt<le;lt++){let dt=Rt[lt];Bt(dt[2],dt[1],dt[0])}for(let lt=0;lt<le;lt++){let dt=Rt[lt];Bt(dt[0]+W*h,dt[1]+W*h,dt[2]+W*h)}}n.addGroup(rt,s.length/3-rt,0)}function $(){let rt=s.length/3,lt=0;st(B,lt),lt+=B.length;for(let dt=0,ut=P.length;dt<ut;dt++){let pt=P[dt];st(pt,lt),lt+=pt.length}n.addGroup(rt,s.length/3-rt,1)}function st(rt,lt){let dt=rt.length;for(;--dt>=0;){let ut=dt,pt=dt-1;pt<0&&(pt=rt.length-1);for(let Lt=0,Ot=h+f*2;Lt<Ot;Lt++){let Vt=W*Lt,$t=W*(Lt+1),D=lt+ut+Vt,de=lt+pt+Vt,se=lt+pt+$t,C=lt+ut+$t;At(D,de,se,C)}}}function yt(rt,lt,dt){l.push(rt),l.push(lt),l.push(dt)}function Bt(rt,lt,dt){Zt(rt),Zt(lt),Zt(dt);let ut=s.length/3,pt=M.generateTopUV(n,s,ut-3,ut-2,ut-1);Se(pt[0]),Se(pt[1]),Se(pt[2])}function At(rt,lt,dt,ut){Zt(rt),Zt(lt),Zt(ut),Zt(lt),Zt(dt),Zt(ut);let pt=s.length/3,Lt=M.generateSideWallUV(n,s,pt-6,pt-3,pt-2,pt-1);Se(Lt[0]),Se(Lt[1]),Se(Lt[3]),Se(Lt[1]),Se(Lt[2]),Se(Lt[3])}function Zt(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function Se(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return tg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Jh[s.type]().fromJSON(s)),new i(n,t.options)}},Q0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ht(r,a),new ht(o,l),new ht(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[r*3],f=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ht(a,1-l),new ht(c,1-d),new ht(u,1-g),new ht(x,1-m)]:[new ht(o,1-l),new ht(h,1-d),new ht(p,1-g),new ht(f,1-m)]}};function tg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ln=class i extends ml{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var rn=class i extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,p=[],g=[],x=[],f=[];for(let m=0;m<h;m++){let M=m*u-a;for(let w=0;w<c;w++){let v=w*d-r;g.push(v,-M,0),x.push(0,0,1),f.push(w/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let w=M+c*m,v=M+c*(m+1),b=M+1+c*(m+1),S=M+1+c*m;p.push(w,v,S),p.push(v,b,S)}this.setIndex(p),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Pr=class i extends ge{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,p=new I,g=new ht;for(let x=0;x<=s;x++){for(let f=0;f<=n;f++){let m=r+f/n*a;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<s;x++){let f=x*(n+1);for(let m=0;m<n;m++){let M=m+f,w=M,v=M+n+1,b=M+n+2,S=M+1;o.push(w,v,S),o.push(v,b,S)}}this.setIndex(o),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ua=class i extends ge{constructor(t=new as([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(r,3)),this.setAttribute("uv",new ie(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),p=u.shape,g=u.holes;yi.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,m=g.length;f<m;f++){let M=g[f];yi.isClockWise(M)===!0&&(g[f]=M.reverse())}let x=yi.triangulateShape(p,g);for(let f=0,m=g.length;f<m;f++){let M=g[f];p=p.concat(M)}for(let f=0,m=p.length;f<m;f++){let M=p[f];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let f=0,m=x.length;f<m;f++){let M=x[f],w=M[0]+d,v=M[1]+d,b=M[2]+d;n.push(w,v,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return eg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function eg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ye=class i extends ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new I,u=new I,p=[],g=[],x=[],f=[];for(let m=0;m<=n;m++){let M=[],w=m/n,v=a+w*o,b=t*Math.cos(v),S=Math.sqrt(t*t-b*b),R=0;m===0&&a===0?R=.5/e:m===n&&l===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){let T=_/e,A=s+T*r;d.x=-S*Math.cos(A),d.y=b,d.z=S*Math.sin(A),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),f.push(T+R,1-w),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let w=h[m][M+1],v=h[m][M],b=h[m+1][M],S=h[m+1][M+1];(m!==0||a>0)&&p.push(w,v,S),(m!==n-1||l<Math.PI)&&p.push(v,b,S)}this.setIndex(p),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ki=class i extends ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new I,p=new I,g=new I;for(let x=0;x<=n;x++){let f=a+x/n*o;for(let m=0;m<=s;m++){let M=m/s*r;p.x=(t+e*Math.cos(f))*Math.cos(M),p.y=(t+e*Math.cos(f))*Math.sin(M),p.z=e*Math.sin(f),c.push(p.x,p.y,p.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let f=1;f<=s;f++){let m=(s+1)*x+f-1,M=(s+1)*(x-1)+f-1,w=(s+1)*(x-1)+f,v=(s+1)*x+f;l.push(m,M,v),l.push(M,w,v)}this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Os(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Ef(s))s.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ef(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function An(i){let t={};for(let e=0;e<i.length;e++){let n=Os(i[e]);for(let s in n)t[s]=n[s]}return t}function Ef(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ng(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var vp={clone:Os,merge:An},ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qe=class extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ig,this.fragmentShader=sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=ng(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new vt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ht().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Sl=class extends Qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ie=class extends Jn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new vt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fa=class extends Jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Ol,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},bl=class extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},El=class extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function pr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function kh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var os=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Tl=class extends os{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xh,endingEnd:Xh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qh:r=t,o=2*e-n;break;case Yh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qh:a=t,l=2*n-e;break;case Yh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,f=x*g,m=-u*f+2*u*x-u*g,M=(1+u)*f+(-1.5-2*u)*x+(-.5+u)*g+1,w=(-1-p)*f+(1.5+p)*x+.5*g,v=p*f-p*x;for(let b=0;b!==o;++b)r[b]=m*a[h+b]+M*a[c+b]+w*a[l+b]+v*a[d+b];return r}},wl=class extends os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Al=class extends os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Rl=class extends os{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),x=1-g;for(let f=0;f!==o;++f)r[f]=a[c+f]*x+a[l+f]*g;return r}let u=o*2,p=t-1;for(let g=0;g!==o;++g){let x=a[c+g],f=a[l+g],m=p*u+g*2,M=d[m],w=d[m+1],v=t*u+g*2,b=h[v],S=h[v+1],R=ag(n,e,M,b,s);r[g]=yp(R,x,w,S,f)}return r}};function yp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function rg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ag(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=yp(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=rg(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pr(e,this.TimeBufferType),this.values=pr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:pr(t.times,Array),values:pr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),kh(t.settings)&&(n.settings={inTangents:pr(t.settings.inTangents,Array),outTangents:pr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Rl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case pa:e=this.InterpolantFactoryMethodDiscrete;break;case al:e=this.InterpolantFactoryMethodLinear;break;case $o:e=this.InterpolantFactoryMethodSmooth;break;case Wh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Yt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return al;case this.InterpolantFactoryMethodSmooth:return $o;case this.InterpolantFactoryMethodBezier:return Wh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;kh(this.settings)&&(Tf(this.settings.inTangents,t),Tf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Jt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Jt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&l0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Jt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$o,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,kh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=al;var ls=class extends Vn{constructor(t,e,n){super(t,e,n)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=pa;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};Cl.prototype.ValueTypeName="color";var Il=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};Il.prototype.ValueTypeName="number";var Pl=class extends os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ba=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Pl(this.times,this.values,this.getValueSize(),t)}};Ba.prototype.ValueTypeName="quaternion";Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends Vn{constructor(t,e,n){super(t,e,n)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=pa;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ll=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};Ll.prototype.ValueTypeName="vector";var Dl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mp=new Dl,Nl=class{constructor(t){this.manager=t!==void 0?t:Mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lr=class extends cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Oa=class extends Lr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Vh=new ve,wf=new I,Af=new I,za=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;wf.setFromMatrixPosition(t.matrixWorld),e.position.copy(wf),Af.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Af),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Vh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Vh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===yr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Vh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Zo=new I,Jo=new Mn,xi=new I,Ha=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zo,Jo,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Zo,Jo,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},es=new I,Rf=new ht,Cf=new ht,ln=class extends Ha{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ol*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(gh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,e){return this.getViewBounds(t,Rf,Cf),e.subVectors(Cf,Rf)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gh*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Qh=class extends za{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}},Ga=class extends Lr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},hs=class extends Ha{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},tu=class extends za{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ka=class extends Lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new tu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Va=class extends ge{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var mr=-90,gr=1,Ul=class extends cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(mr,gr,t,e);s.layers=this.layers,this.add(s);let r=new ln(mr,gr,t,e);r.layers=this.layers,this.add(r);let a=new ln(mr,gr,t,e);a.layers=this.layers,this.add(a);let o=new ln(mr,gr,t,e);o.layers=this.layers,this.add(o);let l=new ln(mr,gr,t,e);l.layers=this.layers,this.add(l);let c=new ln(mr,gr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fl=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var wu="\\[\\]\\.:\\/",og=new RegExp("["+wu+"]","g"),Au="[^"+wu+"]",lg="[^"+wu.replace("\\.","")+"]",cg=/((?:WC+[\/:])*)/.source.replace("WC",Au),hg=/(WCOD+)?/.source.replace("WCOD",lg),ug=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Au),dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Au),fg=new RegExp("^"+cg+hg+ug+dg+"$"),pg=["material","materials","bones","map"],eu=class{constructor(t,e,n){let s=n||Be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(og,"")}static parseTrackName(t){let e=fg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);pg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Be.Composite=eu;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var IS=new Float32Array(1);var Du=class Du{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Du.prototype.isMatrix2=!0;var nu=Du;function Ru(i,t,e,n){let s=mg(n);switch(e){case yu:return i*t;case Fr:return i*t/s.components*s.byteLength;case Xl:return i*t/s.components*s.byteLength;case ms:return i*t*2/s.components*s.byteLength;case ql:return i*t*2/s.components*s.byteLength;case Mu:return i*t*3/s.components*s.byteLength;case Kn:return i*t*4/s.components*s.byteLength;case Yl:return i*t*4/s.components*s.byteLength;case Ya:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ja:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jl:case Kl:return Math.max(i,16)*Math.max(t,8)/4;case Zl:case $l:return Math.max(i,8)*Math.max(t,8)/2;case jl:case Ql:case ec:case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tc:case Ka:case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _c:case vc:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Mc:case Sc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ja:case bc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mg(i){switch(i){case Bn:case gu:return{byteLength:1,components:1};case Nr:case xu:case Wn:return{byteLength:2,components:1};case Vl:case Wl:return{byteLength:2,components:4};case ui:case kl:case $n:return{byteLength:4,components:1};case _u:case vu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Vp(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yg(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sg=`#ifdef USE_ALPHAHASH
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
#endif`,bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ag=`#ifdef USE_AOMAP
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
#endif`,Rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cg=`#ifdef USE_BATCHING
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
#endif`,Ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ng=`#ifdef USE_IRIDESCENCE
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
#endif`,Ug=`#ifdef USE_BUMPMAP
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
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Wg=`#define PI 3.141592653589793
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
} // validated`,Xg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qg=`vec3 transformedNormal = objectNormal;
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
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qg=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lx=`#ifdef USE_GRADIENTMAP
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
}`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fx=`#ifdef USE_ENVMAP
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
#endif`,px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_x=`PhysicalMaterial material;
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
#endif`,vx=`uniform sampler2D dfgLUT;
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
}`,yx=`
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
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Px=`#if defined( USE_POINTS_UV )
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
#endif`,Lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
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
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a_=`float getShadowMask() {
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
}`,o_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l_=`#ifdef USE_SKINNING
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
#endif`,c_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,u_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m_=`#ifdef USE_TRANSMISSION
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
#endif`,g_=`#ifdef USE_TRANSMISSION
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
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S_=`uniform sampler2D t2D;
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
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`#include <common>
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
}`,R_=`#if DEPTH_PACKING == 3200
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
}`,C_=`#define DISTANCE
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
}`,I_=`#define DISTANCE
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`uniform float scale;
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
}`,N_=`uniform vec3 diffuse;
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
}`,U_=`#include <common>
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
}`,F_=`uniform vec3 diffuse;
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
}`,B_=`#define LAMBERT
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
}`,O_=`#define LAMBERT
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
}`,z_=`#define MATCAP
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
}`,H_=`#define MATCAP
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
}`,G_=`#define NORMAL
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
}`,k_=`#define NORMAL
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
}`,V_=`#define PHONG
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
}`,W_=`#define PHONG
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
}`,X_=`#define STANDARD
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
}`,q_=`#define STANDARD
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
}`,Y_=`#define TOON
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
}`,Z_=`#define TOON
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
}`,J_=`uniform float size;
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
}`,$_=`uniform vec3 diffuse;
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
}`,K_=`#include <common>
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
}`,j_=`uniform vec3 color;
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
}`,Q_=`uniform float rotation;
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
}`,tv=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:Mg,alphahash_pars_fragment:Sg,alphamap_fragment:bg,alphamap_pars_fragment:Eg,alphatest_fragment:Tg,alphatest_pars_fragment:wg,aomap_fragment:Ag,aomap_pars_fragment:Rg,batching_pars_vertex:Cg,batching_vertex:Ig,begin_vertex:Pg,beginnormal_vertex:Lg,bsdfs:Dg,iridescence_fragment:Ng,bumpmap_pars_fragment:Ug,clipping_planes_fragment:Fg,clipping_planes_pars_fragment:Bg,clipping_planes_pars_vertex:Og,clipping_planes_vertex:zg,color_fragment:Hg,color_pars_fragment:Gg,color_pars_vertex:kg,color_vertex:Vg,common:Wg,cube_uv_reflection_fragment:Xg,defaultnormal_vertex:qg,displacementmap_pars_vertex:Yg,displacementmap_vertex:Zg,emissivemap_fragment:Jg,emissivemap_pars_fragment:$g,colorspace_fragment:Kg,colorspace_pars_fragment:jg,envmap_fragment:Qg,envmap_common_pars_fragment:tx,envmap_pars_fragment:ex,envmap_pars_vertex:nx,envmap_physical_pars_fragment:fx,envmap_vertex:ix,fog_vertex:sx,fog_pars_vertex:rx,fog_fragment:ax,fog_pars_fragment:ox,gradientmap_pars_fragment:lx,lightmap_pars_fragment:cx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:ux,lights_pars_begin:dx,lights_toon_fragment:px,lights_toon_pars_fragment:mx,lights_phong_fragment:gx,lights_phong_pars_fragment:xx,lights_physical_fragment:_x,lights_physical_pars_fragment:vx,lights_fragment_begin:yx,lights_fragment_maps:Mx,lights_fragment_end:Sx,lightprobes_pars_fragment:bx,logdepthbuf_fragment:Ex,logdepthbuf_pars_fragment:Tx,logdepthbuf_pars_vertex:wx,logdepthbuf_vertex:Ax,map_fragment:Rx,map_pars_fragment:Cx,map_particle_fragment:Ix,map_particle_pars_fragment:Px,metalnessmap_fragment:Lx,metalnessmap_pars_fragment:Dx,morphinstance_vertex:Nx,morphcolor_vertex:Ux,morphnormal_vertex:Fx,morphtarget_pars_vertex:Bx,morphtarget_vertex:Ox,normal_fragment_begin:zx,normal_fragment_maps:Hx,normal_pars_fragment:Gx,normal_pars_vertex:kx,normal_vertex:Vx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:qx,clearcoat_pars_fragment:Yx,iridescence_pars_fragment:Zx,opaque_fragment:Jx,packing:$x,premultiplied_alpha_fragment:Kx,project_vertex:jx,dithering_fragment:Qx,dithering_pars_fragment:t_,roughnessmap_fragment:e_,roughnessmap_pars_fragment:n_,shadowmap_pars_fragment:i_,shadowmap_pars_vertex:s_,shadowmap_vertex:r_,shadowmask_pars_fragment:a_,skinbase_vertex:o_,skinning_pars_vertex:l_,skinning_vertex:c_,skinnormal_vertex:h_,specularmap_fragment:u_,specularmap_pars_fragment:d_,tonemapping_fragment:f_,tonemapping_pars_fragment:p_,transmission_fragment:m_,transmission_pars_fragment:g_,uv_pars_fragment:x_,uv_pars_vertex:__,uv_vertex:v_,worldpos_vertex:y_,background_vert:M_,background_frag:S_,backgroundCube_vert:b_,backgroundCube_frag:E_,cube_vert:T_,cube_frag:w_,depth_vert:A_,depth_frag:R_,distance_vert:C_,distance_frag:I_,equirect_vert:P_,equirect_frag:L_,linedashed_vert:D_,linedashed_frag:N_,meshbasic_vert:U_,meshbasic_frag:F_,meshlambert_vert:B_,meshlambert_frag:O_,meshmatcap_vert:z_,meshmatcap_frag:H_,meshnormal_vert:G_,meshnormal_frag:k_,meshphong_vert:V_,meshphong_frag:W_,meshphysical_vert:X_,meshphysical_frag:q_,meshtoon_vert:Y_,meshtoon_frag:Z_,points_vert:J_,points_frag:$_,shadow_vert:K_,shadow_frag:j_,sprite_vert:Q_,sprite_frag:tv},bt={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Ai={basic:{uniforms:An([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:An([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:An([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:An([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:An([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new vt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:An([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:An([bt.points,bt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:An([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:An([bt.common,bt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:An([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:An([bt.sprite,bt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:An([bt.common,bt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:An([bt.lights,bt.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Ai.physical={uniforms:An([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var wc={r:0,b:0,g:0},ev=new ve,Wp=new jt;Wp.set(-1,0,0,0,1,0,0,0,1);function nv(i,t,e,n,s,r){let a=new vt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let v=M.backgroundBlurriness>0;w=t.get(w,v)}return w}function g(M){let w=!1,v=p(M);v===null?f(a,o):v&&v.isColor&&(f(v,1),w=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,w){let v=p(w);v&&(v.isCubeTexture||v.mapping===Xa)?(c===void 0&&(c=new K(new Fn(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:Os(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ev.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wp),c.material.toneMapped=pe.getTransfer(v.colorSpace)!==Ae,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new K(new rn(2,2),new Qe({name:"BackgroundMaterial",uniforms:Os(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=pe.getTransfer(v.colorSpace)!==Ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,w){M.getRGB(wc,Tu(i)),e.buffers.color.setClear(wc.r,wc.g,wc.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,f(a,o)},render:g,addToRenderList:x,dispose:m}}function iv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(P,N,z,L,B){let X=!1,W=d(P,L,z,N);r!==W&&(r=W,c(r.object)),X=p(P,L,z,B),X&&g(P,L,z,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(P,N,z,L),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,N,z,L){let B=L.wireframe===!0,X=n[N.id];X===void 0&&(X={},n[N.id]=X);let W=P.isInstancedMesh===!0?P.id:0,at=X[W];at===void 0&&(at={},X[W]=at);let Y=at[z.id];Y===void 0&&(Y={},at[z.id]=Y);let nt=Y[B];return nt===void 0&&(nt=u(l()),Y[B]=nt),nt}function u(P){let N=[],z=[],L=[];for(let B=0;B<e;B++)N[B]=0,z[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:L,object:P,attributes:{},index:null}}function p(P,N,z,L){let B=r.attributes,X=N.attributes,W=0,at=z.getAttributes();for(let Y in at)if(at[Y].location>=0){let et=B[Y],Ft=X[Y];if(Ft===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(Ft=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(Ft=P.instanceColor)),et===void 0||et.attribute!==Ft||Ft&&et.data!==Ft.data)return!0;W++}return r.attributesNum!==W||r.index!==L}function g(P,N,z,L){let B={},X=N.attributes,W=0,at=z.getAttributes();for(let Y in at)if(at[Y].location>=0){let et=X[Y];et===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));let Ft={};Ft.attribute=et,et&&et.data&&(Ft.data=et.data),B[Y]=Ft,W++}r.attributes=B,r.attributesNum=W,r.index=L}function x(){let P=r.newAttributes;for(let N=0,z=P.length;N<z;N++)P[N]=0}function f(P){m(P,0)}function m(P,N){let z=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;z[P]=1,L[P]===0&&(i.enableVertexAttribArray(P),L[P]=1),B[P]!==N&&(i.vertexAttribDivisor(P,N),B[P]=N)}function M(){let P=r.newAttributes,N=r.enabledAttributes;for(let z=0,L=N.length;z<L;z++)N[z]!==P[z]&&(i.disableVertexAttribArray(z),N[z]=0)}function w(P,N,z,L,B,X,W){W===!0?i.vertexAttribIPointer(P,N,z,B,X):i.vertexAttribPointer(P,N,z,L,B,X)}function v(P,N,z,L){x();let B=L.attributes,X=z.getAttributes(),W=N.defaultAttributeValues;for(let at in X){let Y=X[at];if(Y.location>=0){let nt=B[at];if(nt===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor)),nt!==void 0){let et=nt.normalized,Ft=nt.itemSize,Rt=t.get(nt);if(Rt===void 0)continue;let le=Rt.buffer,ee=Rt.type,Kt=Rt.bytesPerElement,$=ee===i.INT||ee===i.UNSIGNED_INT||nt.gpuType===kl;if(nt.isInterleavedBufferAttribute){let st=nt.data,yt=st.stride,Bt=nt.offset;if(st.isInstancedInterleavedBuffer){for(let At=0;At<Y.locationSize;At++)m(Y.location+At,st.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let At=0;At<Y.locationSize;At++)f(Y.location+At);i.bindBuffer(i.ARRAY_BUFFER,le);for(let At=0;At<Y.locationSize;At++)w(Y.location+At,Ft/Y.locationSize,ee,et,yt*Kt,(Bt+Ft/Y.locationSize*At)*Kt,$)}else{if(nt.isInstancedBufferAttribute){for(let st=0;st<Y.locationSize;st++)m(Y.location+st,nt.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let st=0;st<Y.locationSize;st++)f(Y.location+st);i.bindBuffer(i.ARRAY_BUFFER,le);for(let st=0;st<Y.locationSize;st++)w(Y.location+st,Ft/Y.locationSize,ee,et,Ft*Kt,Ft/Y.locationSize*st*Kt,$)}}else if(W!==void 0){let et=W[at];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(Y.location,et);break;case 3:i.vertexAttrib3fv(Y.location,et);break;case 4:i.vertexAttrib4fv(Y.location,et);break;default:i.vertexAttrib1fv(Y.location,et)}}}}M()}function b(){T();for(let P in n){let N=n[P];for(let z in N){let L=N[z];for(let B in L){let X=L[B];for(let W in X)h(X[W].object),delete X[W];delete L[B]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let z in N){let L=N[z];for(let B in L){let X=L[B];for(let W in X)h(X[W].object),delete X[W];delete L[B]}}delete n[P.id]}function R(P){for(let N in n){let z=n[N];for(let L in z){let B=z[L];if(B[P.id]===void 0)continue;let X=B[P.id];for(let W in X)h(X[W].object),delete X[W];delete B[P.id]}}}function _(P){for(let N in n){let z=n[N],L=P.isInstancedMesh===!0?P.id:0,B=z[L];if(B!==void 0){for(let X in B){let W=B[X];for(let at in W)h(W[at].object),delete W[at];delete B[X]}delete z[L],Object.keys(z).length===0&&delete n[N]}}}function T(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:f,disableUnusedAttributes:M}}function sv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function rv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Kn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Bn&&R!==$n&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Yt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:v,maxSamples:b,samples:S}}function av(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ai,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,x=d.clipIntersection,f=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{let M=r?0:n,w=M*4,v=m.clippingState||null;l.value=v,v=h(g,u,w,p);for(let b=0;b!==w;++b)v[b]=e[b];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){let x=d!==null?d.length:0,f=null;if(x!==0){if(f=l.value,g!==!0||f===null){let m=p+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<m)&&(f=new Float32Array(m));for(let w=0,v=p;w!==x;++w,v+=4)a.copy(d[w]).applyMatrix4(M,o),a.normal.toArray(f,v),f[v+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}var Or=4,ov=6,lv=20,cv=256,to=new hs,Sp=new vt,Nu=null,Uu=0,Fu=0,Bu=!1,hv=new I,zs=new I,Rc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=hv}=r;Nu=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Nu,Uu,Fu),this._renderer.xr.enabled=Bu,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nu=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Wn,format:Kn,colorSpace:ma,depthBuffer:!1},s=bp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=uv(r)),this._blurMaterial=fv(r,t,e),this._ggxMaterial=dv(r,t,e)}return s}_compileMaterial(t){let e=new K(new ge,t);this._renderer.compile(e,to)}_sceneToCubeUV(t,e,n,s,r){let l=new ln(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Sp),d.toneMapping=hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new K(new Fn,new Oe({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,f=x.material,m=!1,M=t.background;M?M.isColor&&(f.color.copy(M),t.background=null,m=!0):(f.color.copy(Sp),m=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let b=this._cubeSize;Br(s,v*b,w>2?b:0,b,b),d.setRenderTarget(s),m&&d.render(x,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ds||t.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Br(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,to)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,p=d*u,{_lodMax:g}=this,x=this._sizeLods[n],f=3*x*(n>g-Or?n-g+Or:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,Br(r,f,m,3*x,2*x),s.setRenderTarget(r),s.render(o,to),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Br(t,f,m,3*x,2*x),s.setRenderTarget(t),s.render(o,to)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Or?s-this._lodMax+Or:0),u=4*(this._cubeSize-h);Br(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,to)}};function uv(i){let t=[],e=[],n=i,s=i-Or+1+ov;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,g=new Float32Array(p*u*d),x=new Float32Array(p*u*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,w=m>2?0:-1,v=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(v,p*u*m);for(let b=0;b<u;b++){let S=h[b*2]*2-1,R=h[b*2+1]*2-1;m===0?zs.set(1,R,S):m===1?zs.set(-S,1,-R):m===2?zs.set(-S,R,1):m===3?zs.set(-1,R,-S):m===4?zs.set(-S,-1,R):zs.set(S,R,-1),zs.toArray(x,(m*u+b)*p)}}let f=new ge;f.setAttribute("position",new me(g,p)),f.setAttribute("outputDirection",new me(x,p)),e.push(new K(f,null)),n>Or&&n--}return{lodMeshes:e,sizeLods:t}}function bp(i,t,e){let n=new Sn(i,t,e);return n.texture.mapping=Xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dv(i,t,e){return new Qe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function fv(i,t,e){return new Qe({name:"SphericalGaussianBlur",defines:{SAMPLES:lv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ep(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Tp(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cc=class extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new wa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fn(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:Ti});r.uniforms.tEquirect.value=e;let a=new K(s,r),o=e.minFilter;return e.minFilter===fs&&(e.minFilter=yn),new Ul(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function pv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===zl||p===Hl)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new Cc(g.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,g=p===zl||p===Hl,x=p===ds||p===Bs;if(g||x){let f=e.get(u),m=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Rc(i)),f=g?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{let M=u.image;return g&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new Rc(i)),f=g?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,p){return p===zl?u.mapping=ds:p===Hl&&(u.mapping=Bs),u}function l(u){let p=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function mv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Is("WebGLRenderer: "+n+" extension not supported."),s}}}function gv(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(p!==null){let M=p.array;x=p.version;for(let w=0,v=M.length;w<v;w+=3){let b=M[w+0],S=M[w+1],R=M[w+2];u.push(b,S,S,R,R,b)}}else{let M=g.array;x=g.version;for(let w=0,v=M.length/3-1;w<v;w+=3){let b=w+0,S=w+1,R=w+2;u.push(b,S,S,R,R,b)}}let f=new(g.count>=65535?ba:Sa)(u,1);f.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,f)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function xv(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*a,p),e.update(u,n,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let x=0;for(let f=0;f<p;f++)x+=u[f];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function _v(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vv(i,t,e){let n=new WeakMap,s=new Ge;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;p===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let v=o.attributes.position.count*w,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*b*4*d),R=new va(S,v,b,d);R.type=$n,R.needsUpdate=!0;let _=w*4;for(let A=0;A<d;A++){let P=f[A],N=m[A],z=M[A],L=v*b*4*A;for(let B=0;B<P.count;B++){let X=B*_;p===!0&&(s.fromBufferAttribute(P,B),S[L+X+0]=s.x,S[L+X+1]=s.y,S[L+X+2]=s.z,S[L+X+3]=0),g===!0&&(s.fromBufferAttribute(N,B),S[L+X+4]=s.x,S[L+X+5]=s.y,S[L+X+6]=s.z,S[L+X+7]=0),x===!0&&(s.fromBufferAttribute(z,B),S[L+X+8]=s.x,S[L+X+9]=s.y,S[L+X+10]=s.z,S[L+X+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new ht(v,b)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function yv(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Mv={[lu]:"LINEAR_TONE_MAPPING",[cu]:"REINHARD_TONE_MAPPING",[hu]:"CINEON_TONE_MAPPING",[uu]:"ACES_FILMIC_TONE_MAPPING",[fu]:"AGX_TONE_MAPPING",[pu]:"NEUTRAL_TONE_MAPPING",[du]:"CUSTOM_TONE_MAPPING"};function Sv(i,t,e,n,s,r){let a=new Sn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ge;c.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ie([0,2,0,0,2,0],2));let h=new Sl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new K(c,h),u=new hs(-1,1,1,-1,0,1),p=null,g=null,x=!1,f,m=null,M=[],w=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),l!==null&&l.setSize(v,b);for(let S=0;S<M.length;S++){let R=M[S];R.setSize&&R.setSize(v,b)}},this.setEffects=function(v){M=v,w=M.length>0&&M[0].isRenderPass===!0;let b=a.width,S=a.height;M.length>0&&o===null&&(o=new Sn(b,S,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),l=new Sn(b,S,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let _=M[R];_.setSize&&_.setSize(b,S)}},this.begin=function(v,b){if(x||v.toneMapping===hi&&M.length===0)return!1;if(m=b,b!==null){let S=b.width,R=b.height;(a.width!==S||a.height!==R)&&this.setSize(S,R)}return w===!1&&v.setRenderTarget(a),f=v.toneMapping,v.toneMapping=hi,!0},this.hasRenderPass=function(){return w},this.end=function(v,b){v.toneMapping=f,x=!0;let S=a,R=o;for(let _=0;_<M.length;_++){let T=M[_];T.enabled!==!1&&(T.render(v,R,S,b),T.needsSwap!==!1&&(S=R,R=R===o?l:o))}if(p!==v.outputColorSpace||g!==v.toneMapping){p=v.outputColorSpace,g=v.toneMapping,h.defines={},pe.getTransfer(p)===Ae&&(h.defines.SRGB_TRANSFER="");let _=Mv[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(m),v.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Xp=new In,Hu=new ss(1,1),qp=new va,Yp=new hl,Zp=new wa,wp=[],Ap=[],Rp=new Float32Array(16),Cp=new Float32Array(9),Ip=new Float32Array(4);function Hr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=wp[s];if(r===void 0&&(r=new Float32Array(s),wp[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function hn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function un(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Lc(i,t){let e=Ap[t];e===void 0&&(e=new Int32Array(t),Ap[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ev(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2fv(this.addr,t),un(e,t)}}function Tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hn(e,t))return;i.uniform3fv(this.addr,t),un(e,t)}}function wv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4fv(this.addr,t),un(e,t)}}function Av(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;Ip.set(n),i.uniformMatrix2fv(this.addr,!1,Ip),un(e,n)}}function Rv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;Cp.set(n),i.uniformMatrix3fv(this.addr,!1,Cp),un(e,n)}}function Cv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;Rp.set(n),i.uniformMatrix4fv(this.addr,!1,Rp),un(e,n)}}function Iv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2iv(this.addr,t),un(e,t)}}function Lv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;i.uniform3iv(this.addr,t),un(e,t)}}function Dv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4iv(this.addr,t),un(e,t)}}function Nv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Uv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2uiv(this.addr,t),un(e,t)}}function Fv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;i.uniform3uiv(this.addr,t),un(e,t)}}function Bv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4uiv(this.addr,t),un(e,t)}}function Ov(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hu.compareFunction=e.isReversedDepthBuffer()?Tc:Ec,r=Hu):r=Xp,e.setTexture2D(t||r,s)}function zv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yp,s)}function Hv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zp,s)}function Gv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qp,s)}function kv(i){switch(i){case 5126:return bv;case 35664:return Ev;case 35665:return Tv;case 35666:return wv;case 35674:return Av;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Iv;case 35667:case 35671:return Pv;case 35668:case 35672:return Lv;case 35669:case 35673:return Dv;case 5125:return Nv;case 36294:return Uv;case 36295:return Fv;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Gv}}function Vv(i,t){i.uniform1fv(this.addr,t)}function Wv(i,t){let e=Hr(t,this.size,2);i.uniform2fv(this.addr,e)}function Xv(i,t){let e=Hr(t,this.size,3);i.uniform3fv(this.addr,e)}function qv(i,t){let e=Hr(t,this.size,4);i.uniform4fv(this.addr,e)}function Yv(i,t){let e=Hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zv(i,t){let e=Hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jv(i,t){let e=Hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $v(i,t){i.uniform1iv(this.addr,t)}function Kv(i,t){i.uniform2iv(this.addr,t)}function jv(i,t){i.uniform3iv(this.addr,t)}function Qv(i,t){i.uniform4iv(this.addr,t)}function ty(i,t){i.uniform1uiv(this.addr,t)}function ey(i,t){i.uniform2uiv(this.addr,t)}function ny(i,t){i.uniform3uiv(this.addr,t)}function iy(i,t){i.uniform4uiv(this.addr,t)}function sy(i,t,e){let n=this.cache,s=t.length,r=Lc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Hu:a=Xp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function ry(i,t,e){let n=this.cache,s=t.length,r=Lc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Yp,r[a])}function ay(i,t,e){let n=this.cache,s=t.length,r=Lc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Zp,r[a])}function oy(i,t,e){let n=this.cache,s=t.length,r=Lc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qp,r[a])}function ly(i){switch(i){case 5126:return Vv;case 35664:return Wv;case 35665:return Xv;case 35666:return qv;case 35674:return Yv;case 35675:return Zv;case 35676:return Jv;case 5124:case 35670:return $v;case 35667:case 35671:return Kv;case 35668:case 35672:return jv;case 35669:case 35673:return Qv;case 5125:return ty;case 36294:return ey;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return ry;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return oy}}var Gu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=kv(e.type)}},ku=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ly(e.type)}},Vu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ou=/(\w+)(\])?(\[|\.)?/g;function Pp(i,t){i.seq.push(t),i.map[t.id]=t}function cy(i,t,e){let n=i.name,s=n.length;for(Ou.lastIndex=0;;){let r=Ou.exec(n),a=Ou.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pp(e,c===void 0?new Gu(o,i,t):new ku(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Vu(o),Pp(e,d)),e=d}}}var zr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);cy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Lp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var hy=37297,uy=0;function dy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Dp=new jt;function fy(i){pe._getMatrix(Dp,pe.workingColorSpace,i);let t=`mat3( ${Dp.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case ga:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Np(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+dy(i.getShaderSource(t),o)}else return r}function py(i,t){let e=fy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var my={[lu]:"Linear",[cu]:"Reinhard",[hu]:"Cineon",[uu]:"ACESFilmic",[fu]:"AgX",[pu]:"Neutral",[du]:"Custom"};function gy(i,t){let e=my[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ac=new I;function xy(){pe.getLuminanceCoefficients(Ac);let i=Ac.x.toFixed(4),t=Ac.y.toFixed(4),e=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _y(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function vy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function no(i){return i!==""}function Up(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var My=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(i){return i.replace(My,by)}var Sy=new Map;function by(i,t){let e=oe[t];if(e===void 0){let n=Sy.get(t);if(n!==void 0)e=oe[n],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Wu(e)}var Ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(i){return i.replace(Ey,Ty)}function Ty(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Op(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var wy={[Wa]:"SHADOWMAP_TYPE_PCF",[Dr]:"SHADOWMAP_TYPE_VSM"};function Ay(i){return wy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ry={[ds]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[Xa]:"ENVMAP_TYPE_CUBE_UV"};function Cy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ry[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Iy={[Bs]:"ENVMAP_MODE_REFRACTION"};function Py(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Iy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ly={[Ol]:"ENVMAP_BLENDING_MULTIPLY",[Kf]:"ENVMAP_BLENDING_MIX",[jf]:"ENVMAP_BLENDING_ADD"};function Dy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ly[i.combine]||"ENVMAP_BLENDING_NONE"}function Ny(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Uy(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ay(e),c=Cy(e),h=Py(e),d=Dy(e),u=Ny(e),p=_y(e),g=vy(r),x=s.createProgram(),f,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(no).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(no).join(`
`),m.length>0&&(m+=`
`)):(f=[Op(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),m=[Op(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?oe.tonemapping_pars_fragment:"",e.toneMapping!==hi?gy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,py("linearToOutputTexel",e.outputColorSpace),xy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(no).join(`
`)),a=Wu(a),a=Up(a,e),a=Fp(a,e),o=Wu(o),o=Up(o,e),o=Fp(o,e),a=Bp(a),o=Bp(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=M+f+a,v=M+m+o,b=Lp(s,s.VERTEX_SHADER,w),S=Lp(s,s.FRAGMENT_SHADER,v);s.attachShader(x,b),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(S)||"",B=N.trim(),X=z.trim(),W=L.trim(),at=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,S);else{let nt=Np(s,b,"vertex"),et=Np(s,S,"fragment");Jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+nt+`
`+et)}else B!==""?Yt("WebGLProgram: Program Info Log:",B):(X===""||W==="")&&(Y=!1);Y&&(P.diagnostics={runnable:at,programLog:B,vertexShader:{log:X,prefix:f},fragmentShader:{log:W,prefix:m}})}s.deleteShader(b),s.deleteShader(S),_=new zr(s,x),T=yy(s,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,hy)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uy++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=S,this}var Fy=0,Xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new qu(t),e.set(t,n)),n}},qu=class{constructor(t){this.id=Fy++,this.code=t,this.usedTimes=0}};function By(i){return i===ms||i===Ka||i===ja}function Oy(i,t,e,n,s,r){let a=new ya,o=new Xu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,A,P,N,z){let L=P.fog,B=N.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,at=t.get(_.envMap||X,W),Y=at&&at.mapping===Xa?at.image.height:null,nt=p[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Yt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let et=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ft=et!==void 0?et.length:0,Rt=0;B.morphAttributes.position!==void 0&&(Rt=1),B.morphAttributes.normal!==void 0&&(Rt=2),B.morphAttributes.color!==void 0&&(Rt=3);let le,ee,Kt,$;if(nt){let be=Ai[nt];le=be.vertexShader,ee=be.fragmentShader}else{le=_.vertexShader,ee=_.fragmentShader;let be=o.getVertexShaderStage(_),xe=o.getFragmentShaderStage(_);o.update(_,be,xe),Kt=be.id,$=xe.id}let st=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Bt=N.isInstancedMesh===!0,At=N.isBatchedMesh===!0,Zt=!!_.map,Se=!!_.matcap,rt=!!at,lt=!!_.aoMap,dt=!!_.lightMap,ut=!!_.bumpMap&&_.wireframe===!1,pt=!!_.normalMap,Lt=!!_.displacementMap,Ot=!!_.emissiveMap,Vt=!!_.metalnessMap,$t=!!_.roughnessMap,D=_.anisotropy>0,de=_.clearcoat>0,se=_.dispersion>0,C=_.retroreflectivity>0,y=_.iridescence>0,H=_.sheen>0,V=_.transmission>0,J=D&&!!_.anisotropyMap,ct=de&&!!_.clearcoatMap,ft=de&&!!_.clearcoatNormalMap,Z=de&&!!_.clearcoatRoughnessMap,tt=y&&!!_.iridescenceMap,mt=y&&!!_.iridescenceThicknessMap,zt=H&&!!_.sheenColorMap,Mt=H&&!!_.sheenRoughnessMap,gt=!!_.specularMap,Dt=!!_.specularColorMap,Wt=!!_.specularIntensityMap,te=V&&!!_.transmissionMap,U=V&&!!_.thicknessMap,_t=!!_.gradientMap,j=!!_.alphaMap,xt=_.alphaTest>0,Et=!!_.alphaHash,ot=!!_.extensions,Ht=hi;_.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ht=i.toneMapping);let Ct={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:le,fragmentShader:ee,defines:_.defines,customVertexShaderID:Kt,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:At,batchingColor:At&&N._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&N.instanceColor!==null,instancingMorph:Bt&&N.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Zt,matcap:Se,envMap:rt,envMapMode:rt&&at.mapping,envMapCubeUVHeight:Y,aoMap:lt,lightMap:dt,bumpMap:ut,normalMap:pt,displacementMap:Lt,emissiveMap:Ot,normalMapObjectSpace:pt&&_.normalMapType===ep,normalMapTangentSpace:pt&&_.normalMapType===Qa,packedNormalMap:pt&&_.normalMapType===Qa&&By(_.normalMap.format),metalnessMap:Vt,roughnessMap:$t,anisotropy:D,anisotropyMap:J,clearcoat:de,clearcoatMap:ct,clearcoatNormalMap:ft,clearcoatRoughnessMap:Z,dispersion:se,retroreflection:C,iridescence:y,iridescenceMap:tt,iridescenceThicknessMap:mt,sheen:H,sheenColorMap:zt,sheenRoughnessMap:Mt,specularMap:gt,specularColorMap:Dt,specularIntensityMap:Wt,transmission:V,transmissionMap:te,thicknessMap:U,gradientMap:_t,opaque:_.transparent===!1&&_.blending===ci&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:xt,alphaHash:Et,combine:_.combine,mapUv:Zt&&g(_.map.channel),aoMapUv:lt&&g(_.aoMap.channel),lightMapUv:dt&&g(_.lightMap.channel),bumpMapUv:ut&&g(_.bumpMap.channel),normalMapUv:pt&&g(_.normalMap.channel),displacementMapUv:Lt&&g(_.displacementMap.channel),emissiveMapUv:Ot&&g(_.emissiveMap.channel),metalnessMapUv:Vt&&g(_.metalnessMap.channel),roughnessMapUv:$t&&g(_.roughnessMap.channel),anisotropyMapUv:J&&g(_.anisotropyMap.channel),clearcoatMapUv:ct&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&g(_.sheenRoughnessMap.channel),specularMapUv:gt&&g(_.specularMap.channel),specularColorMapUv:Dt&&g(_.specularColorMap.channel),specularIntensityMapUv:Wt&&g(_.specularIntensityMap.channel),transmissionMapUv:te&&g(_.transmissionMap.channel),thicknessMapUv:U&&g(_.thicknessMap.channel),alphaMapUv:j&&g(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pt||D),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Zt||j),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&pt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Rt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Zt&&_.map.isVideoTexture===!0&&pe.getTransfer(_.map.colorSpace)===Ae,decodeVideoTextureEmissive:Ot&&_.emissiveMap.isVideoTexture===!0&&pe.getTransfer(_.emissiveMap.colorSpace)===Ae,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===De,flipSided:_.side===bn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ot&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&_.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function f(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)T.push(A),T.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(m(T,_),M(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function m(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function M(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let T=p[_.type],A;if(T){let P=Ai[T];A=vp.clone(P.uniforms)}else A=_.uniforms;return A}function v(_,T){let A=h.get(T);return A!==void 0?++A.usedTimes:(A=new Uy(i,T,_,s),c.push(A),h.set(T,A)),A}function b(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:f,getUniforms:w,acquireProgram:v,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:R}}function zy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Hy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function zp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,x,f,m){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:f,group:m},i[t]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=g,M.materialVariant=a(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=f,M.group=m),t++,M}function l(u,p,g,x,f,m,M){M.reversedDepth===!0&&(f=-f);let w=o(u,p,g,x,f,m);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(u,p,g,x,f,m){let M=o(u,p,g,x,f,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,p){e.length>1&&e.sort(u||Hy),n.length>1&&n.sort(p||zp),s.length>1&&s.sort(p||zp)}function d(){for(let u=t,p=i.length;u<p;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Gy(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Hp,i.set(n,[a])):s>=r.length?(a=new Hp,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ky(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new vt};break;case"SpotLight":e={position:new I,direction:new I,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Vy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Wy=0;function Xy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qy(i){let t=new ky,e=Vy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new ve,a=new ve;function o(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,g=0,x=0,f=0,m=0,M=0,w=0,v=0,b=0,S=0,R=0,_=0,T=0,A=0;c.sort(Xy);for(let N=0,z=c.length;N<z;N++){let L=c[N],B=L.color,X=L.intensity,W=L.distance,at=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ms?at=L.shadow.map.texture:at=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*X,d+=B.g*X,u+=B.b*X;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],X);A++}else if(L.isSunLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let nt=L.shadow,et=e.get(L);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=at;let Ft=nt.getViewportCount();for(let Rt=0;Rt<Ft;Rt++)n.sunShadowMatrix[x+Rt]=nt.getMatrix(Rt),n.sunShadowCascade[x+Rt]=nt._cascadeData[Rt];x+=Ft,g++}n.sun[p]=Y,p++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let nt=L.shadow,et=e.get(L);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize=nt.mapSize,n.directionalShadow[f]=et,n.directionalShadowMap[f]=at,n.directionalShadowMatrix[f]=L.shadow.matrix,b++}n.directional[f]=Y,f++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(B).multiplyScalar(X),Y.distance=W,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[M]=Y;let nt=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,nt.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[M]=nt.matrix,L.castShadow){let et=e.get(L);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize=nt.mapSize,n.spotShadow[M]=et,n.spotShadowMap[M]=at,R++}M++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(B).multiplyScalar(X),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=Y,w++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let nt=L.shadow,et=e.get(L);et.shadowIntensity=nt.intensity,et.shadowBias=nt.bias,et.shadowNormalBias=nt.normalBias,et.shadowRadius=nt.radius,et.shadowMapSize=nt.mapSize,et.shadowCameraNear=nt.camera.near,et.shadowCameraFar=nt.camera.far,n.pointShadow[m]=et,n.pointShadowMap[m]=at,n.pointShadowMatrix[m]=L.shadow.matrix,S++}n.point[m]=Y,m++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(X),Y.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[v]=Y,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.sunLength!==p||P.directionalLength!==f||P.pointLength!==m||P.spotLength!==M||P.rectAreaLength!==w||P.hemiLength!==v||P.numSunShadows!==g||P.numDirectionalShadows!==b||P.numPointShadows!==S||P.numSpotShadows!==R||P.numSpotMaps!==_||P.numLightProbes!==A)&&(n.sun.length=p,n.directional.length=f,n.spot.length=M,n.rectArea.length=w,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.sunLength=p,P.directionalLength=f,P.pointLength=m,P.spotLength=M,P.rectAreaLength=w,P.hemiLength=v,P.numSunShadows=g,P.numDirectionalShadows=b,P.numPointShadows=S,P.numSpotShadows=R,P.numSpotMaps=_,P.numLightProbes=A,n.version=Wy++)}function l(c,h){let d=0,u=0,p=0,g=0,x=0,f=0,m=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let v=c[M];if(v.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(v.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let b=n.point[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){let b=n.hemi[f];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),f++}}}return{setup:o,setupView:l,state:n}}function Gp(i){let t=new qy(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Yy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Gp(i),t.set(s,[o])):r>=a.length?(o=new Gp(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jy=`uniform sampler2D shadow_pass;
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
}`,$y=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Ky=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],kp=new ve,eo=new I,zu=new I;function jy(i,t,e){let n=new wr,s=new ht,r=new ht,a=new Ge,o=new bl,l=new El,c={},h=e.maxTextureSize,d={[us]:bn,[bn]:us,[De]:De},u=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Zy,fragmentShader:Jy}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new ge;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new K(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa;let m=this.type;this.render=function(S,R,_){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;this.type===Lf&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wa);let T=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ti),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=m!==this.type;z&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=S.length;L<B;L++){let X=S[L],W=X.shadow;if(W===void 0){Yt("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let at=W.getFrameExtents();s.multiply(at),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,W.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Y,W.map===null||z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Dr){if(X.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Sn(s.x,s.y,{format:ms,type:Wn,minFilter:yn,magFilter:yn,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new ss(s.x,s.y,$n),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=Mi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=sn,W.map.depthTexture.magFilter=sn}else X.isPointLight?(W.map=new Cc(s.x),W.map.depthTexture=new pl(s.x,ui)):(W.map=new Sn(s.x,s.y),W.map.depthTexture=new ss(s.x,s.y,ui)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=Mi,this.type===Wa?(W.map.depthTexture.compareFunction=Y?Tc:Ec,W.map.depthTexture.minFilter=yn,W.map.depthTexture.magFilter=yn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=sn,W.map.depthTexture.magFilter=sn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let nt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,_);for(let et=0;et<nt;et++){let Ft=W.getCamera(et);if(X.isPointLight){let Rt=W.camera,le=W.matrix,ee=X.distance||Rt.far;ee!==Rt.far&&(Rt.far=ee,Rt.updateProjectionMatrix()),eo.setFromMatrixPosition(X.matrixWorld),Rt.position.copy(eo),zu.copy(Rt.position),zu.add($y[et]),Rt.up.copy(Ky[et]),Rt.lookAt(zu),Rt.updateMatrixWorld(),le.makeTranslation(-eo.x,-eo.y,-eo.z),kp.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(kp,Rt.coordinateSystem,Rt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,et),i.clear();else{et===0&&(i.setRenderTarget(W.map),i.clear());let Rt=W.getViewport(et);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),N.viewport(a)}n=W.getFrustum(et),v(R,_,Ft,X,this.type)}W.isPointLightShadow!==!0&&this.type===Dr&&M(W,_),W.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(T,A,P)};function M(S,R){let _=t.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Sn(s.x,s.y,{format:ms,type:Wn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,_,p,x,null)}function w(S,R,_,T){let A=null,P=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)A=P;else if(A=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let N=A.uuid,z=R.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let B=L[z];B===void 0&&(B=A.clone(),L[z]=B,R.addEventListener("dispose",b)),A=B}if(A.visible=R.visible,A.wireframe=R.wireframe,T===Dr?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:d[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=i.properties.get(A);N.light=_}return A}function v(S,R,_,T,A){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===Dr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let z=t.update(S),L=S.material;if(Array.isArray(L)){let B=z.groups;for(let X=0,W=B.length;X<W;X++){let at=B[X],Y=L[at.materialIndex];if(Y&&Y.visible){let nt=w(S,Y,T,A);S.onBeforeShadow(i,S,R,_,z,nt,at),i.renderBufferDirect(_,null,z,nt,S,at),S.onAfterShadow(i,S,R,_,z,nt,at)}}}else if(L.visible){let B=w(S,L,T,A);S.onBeforeShadow(i,S,R,_,z,B,null),i.renderBufferDirect(_,null,z,B,S,null),S.onAfterShadow(i,S,R,_,z,B,null)}}let N=S.children;for(let z=0,L=N.length;z<L;z++)v(N[z],R,_,T,A)}function b(S){S.target.removeEventListener("dispose",b);for(let _ in c){let T=c[_],A=S.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function Qy(i,t){function e(){let U=!1,_t=new Ge,j=null,xt=new Ge(0,0,0,0);return{setMask:function(Et){j!==Et&&!U&&(i.colorMask(Et,Et,Et,Et),j=Et)},setLocked:function(Et){U=Et},setClear:function(Et,ot,Ht,Ct,be){be===!0&&(Et*=Ct,ot*=Ct,Ht*=Ct),_t.set(Et,ot,Ht,Ct),xt.equals(_t)===!1&&(i.clearColor(Et,ot,Ht,Ct),xt.copy(_t))},reset:function(){U=!1,j=null,xt.set(-1,0,0,0)}}}function n(){let U=!1,_t=!1,j=null,xt=null,Et=null;return{setReversed:function(ot){if(_t!==ot){let Ht=t.get("EXT_clip_control");ot?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),_t=ot;let Ct=Et;Et=null,this.setClear(Ct)}},getReversed:function(){return _t},setTest:function(ot){ot?st(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(ot){j!==ot&&!U&&(i.depthMask(ot),j=ot)},setFunc:function(ot){if(_t&&(ot=dp[ot]),xt!==ot){switch(ot){case jo:i.depthFunc(i.NEVER);break;case Qo:i.depthFunc(i.ALWAYS);break;case tl:i.depthFunc(i.LESS);break;case _r:i.depthFunc(i.LEQUAL);break;case el:i.depthFunc(i.EQUAL);break;case nl:i.depthFunc(i.GEQUAL);break;case il:i.depthFunc(i.GREATER);break;case sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=ot}},setLocked:function(ot){U=ot},setClear:function(ot){Et!==ot&&(Et=ot,_t&&(ot=1-ot),i.clearDepth(ot))},reset:function(){U=!1,j=null,xt=null,Et=null,_t=!1}}}function s(){let U=!1,_t=null,j=null,xt=null,Et=null,ot=null,Ht=null,Ct=null,be=null;return{setTest:function(xe){U||(xe?st(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(xe){_t!==xe&&!U&&(i.stencilMask(xe),_t=xe)},setFunc:function(xe,Nn,_n){(j!==xe||xt!==Nn||Et!==_n)&&(i.stencilFunc(xe,Nn,_n),j=xe,xt=Nn,Et=_n)},setOp:function(xe,Nn,_n){(ot!==xe||Ht!==Nn||Ct!==_n)&&(i.stencilOp(xe,Nn,_n),ot=xe,Ht=Nn,Ct=_n)},setLocked:function(xe){U=xe},setClear:function(xe){be!==xe&&(i.clearStencil(xe),be=xe)},reset:function(){U=!1,_t=null,j=null,xt=null,Et=null,ot=null,Ht=null,Ct=null,be=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],x=null,f=!1,m=null,M=null,w=null,v=null,b=null,S=null,R=null,_=new vt(0,0,0),T=0,A=!1,P=null,N=null,z=null,L=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,at=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=at>=1):Y.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=at>=2);let nt=null,et={},Ft=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),le=new Ge().fromArray(Ft),ee=new Ge().fromArray(Rt);function Kt(U,_t,j,xt){let Et=new Uint8Array(4),ot=i.createTexture();i.bindTexture(U,ot),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<j;Ht++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(_t+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return ot}let $={};$[i.TEXTURE_2D]=Kt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(_r),ut(!1),pt(iu),st(i.CULL_FACE),lt(Ti);function st(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function yt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Bt(U,_t){return u[U]!==_t?(i.bindFramebuffer(U,_t),u[U]=_t,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function At(U,_t){let j=g,xt=!1;if(U){j=p.get(_t),j===void 0&&(j=[],p.set(_t,j));let Et=U.textures;if(j.length!==Et.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Ht=Et.length;ot<Ht;ot++)j[ot]=i.COLOR_ATTACHMENT0+ot;j.length=Et.length,xt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,xt=!0);xt&&i.drawBuffers(j)}function Zt(U){return x!==U?(i.useProgram(U),x=U,!0):!1}let Se={[Fs]:i.FUNC_ADD,[Nf]:i.FUNC_SUBTRACT,[Uf]:i.FUNC_REVERSE_SUBTRACT};Se[Ff]=i.MIN,Se[Bf]=i.MAX;let rt={[Of]:i.ZERO,[zf]:i.ONE,[Hf]:i.SRC_COLOR,[au]:i.SRC_ALPHA,[qf]:i.SRC_ALPHA_SATURATE,[Wf]:i.DST_COLOR,[kf]:i.DST_ALPHA,[Gf]:i.ONE_MINUS_SRC_COLOR,[ou]:i.ONE_MINUS_SRC_ALPHA,[Xf]:i.ONE_MINUS_DST_COLOR,[Vf]:i.ONE_MINUS_DST_ALPHA,[Yf]:i.CONSTANT_COLOR,[Zf]:i.ONE_MINUS_CONSTANT_COLOR,[Jf]:i.CONSTANT_ALPHA,[$f]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(U,_t,j,xt,Et,ot,Ht,Ct,be,xe){if(U===Ti){f===!0&&(yt(i.BLEND),f=!1);return}if(f===!1&&(st(i.BLEND),f=!0),U!==Df){if(U!==m||xe!==A){if((M!==Fs||b!==Fs)&&(i.blendEquation(i.FUNC_ADD),M=Fs,b=Fs),xe)switch(U){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vi:i.blendFunc(i.ONE,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Jt("WebGLState: Invalid blending: ",U);break}else switch(U){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case su:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ru:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",U);break}w=null,v=null,S=null,R=null,_.set(0,0,0),T=0,m=U,A=xe}return}Et=Et||_t,ot=ot||j,Ht=Ht||xt,(_t!==M||Et!==b)&&(i.blendEquationSeparate(Se[_t],Se[Et]),M=_t,b=Et),(j!==w||xt!==v||ot!==S||Ht!==R)&&(i.blendFuncSeparate(rt[j],rt[xt],rt[ot],rt[Ht]),w=j,v=xt,S=ot,R=Ht),(Ct.equals(_)===!1||be!==T)&&(i.blendColor(Ct.r,Ct.g,Ct.b,be),_.copy(Ct),T=be),m=U,A=!1}function dt(U,_t){U.side===De?yt(i.CULL_FACE):st(i.CULL_FACE);let j=U.side===bn;_t&&(j=!j),ut(j),U.blending===ci&&U.transparent===!1?lt(Ti):lt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let xt=U.stencilWrite;o.setTest(xt),xt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ot(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(U){P!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),P=U)}function pt(U){U!==If?(st(i.CULL_FACE),U!==N&&(U===iu?i.cullFace(i.BACK):U===Pf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),N=U}function Lt(U){U!==z&&(W&&i.lineWidth(U),z=U)}function Ot(U,_t,j){U?(st(i.POLYGON_OFFSET_FILL),(L!==_t||B!==j)&&(L=_t,B=j,a.getReversed()&&(_t=-_t),i.polygonOffset(_t,j))):yt(i.POLYGON_OFFSET_FILL)}function Vt(U){U?st(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function $t(U){U===void 0&&(U=i.TEXTURE0+X-1),nt!==U&&(i.activeTexture(U),nt=U)}function D(U,_t,j){j===void 0&&(nt===null?j=i.TEXTURE0+X-1:j=nt);let xt=et[j];xt===void 0&&(xt={type:void 0,texture:void 0},et[j]=xt),(xt.type!==U||xt.texture!==_t)&&(nt!==j&&(i.activeTexture(j),nt=j),i.bindTexture(U,_t||$[U]),xt.type=U,xt.texture=_t)}function de(){let U=et[nt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(U){Jt("WebGLState:",U)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(U){Jt("WebGLState:",U)}}function y(){try{i.texSubImage2D(...arguments)}catch(U){Jt("WebGLState:",U)}}function H(){try{i.texSubImage3D(...arguments)}catch(U){Jt("WebGLState:",U)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Jt("WebGLState:",U)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Jt("WebGLState:",U)}}function ct(){try{i.texStorage2D(...arguments)}catch(U){Jt("WebGLState:",U)}}function ft(){try{i.texStorage3D(...arguments)}catch(U){Jt("WebGLState:",U)}}function Z(){try{i.texImage2D(...arguments)}catch(U){Jt("WebGLState:",U)}}function tt(){try{i.texImage3D(...arguments)}catch(U){Jt("WebGLState:",U)}}function mt(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function zt(U,_t){d[U]!==_t&&(i.pixelStorei(U,_t),d[U]=_t)}function Mt(U){le.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),le.copy(U))}function gt(U){ee.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function Dt(U,_t){let j=c.get(_t);j===void 0&&(j=new WeakMap,c.set(_t,j));let xt=j.get(U);xt===void 0&&(xt=i.getUniformBlockIndex(_t,U.name),j.set(U,xt))}function Wt(U,_t){let xt=c.get(_t).get(U);l.get(_t)!==xt&&(i.uniformBlockBinding(_t,xt,U.__bindingPointIndex),l.set(_t,xt))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},nt=null,et={},u={},p=new WeakMap,g=[],x=null,f=!1,m=null,M=null,w=null,v=null,b=null,S=null,R=null,_=new vt(0,0,0),T=0,A=!1,P=null,N=null,z=null,L=null,B=null,le.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:yt,bindFramebuffer:Bt,drawBuffers:At,useProgram:Zt,setBlending:lt,setMaterial:dt,setFlipSided:ut,setCullFace:pt,setLineWidth:Lt,setPolygonOffset:Ot,setScissorTest:Vt,activeTexture:$t,bindTexture:D,unbindTexture:de,compressedTexImage2D:se,compressedTexImage3D:C,texImage2D:Z,texImage3D:tt,pixelStorei:zt,getParameter:mt,updateUBOMapping:Dt,uniformBlockBinding:Wt,texStorage2D:ct,texStorage3D:ft,texSubImage2D:y,texSubImage3D:H,compressedTexSubImage2D:V,compressedTexSubImage3D:J,scissor:Mt,viewport:gt,reset:te}}function tM(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,y){return g?new OffscreenCanvas(C,y):xa("canvas")}function f(C,y,H){let V=1,J=se(C);if((J.width>H||J.height>H)&&(V=H/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let ct=Math.floor(V*J.width),ft=Math.floor(V*J.height);u===void 0&&(u=x(ct,ft));let Z=y?x(ct,ft):u;return Z.width=ct,Z.height=ft,Z.getContext("2d").drawImage(C,0,0,ct,ft),Yt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ct+"x"+ft+")."),Z}else return"data"in C&&Yt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,y,H,V,J,ct=!1){if(C!==null){if(i[C]!==void 0)return i[C];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ft;V&&(ft=t.get("EXT_texture_norm16"),ft||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8),H===i.UNSIGNED_SHORT&&ft&&(Z=ft.R16_EXT),H===i.SHORT&&ft&&(Z=ft.R16_SNORM_EXT)),y===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),y===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8),H===i.UNSIGNED_SHORT&&ft&&(Z=ft.RG16_EXT),H===i.SHORT&&ft&&(Z=ft.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&(H===i.UNSIGNED_SHORT&&ft&&(Z=ft.RGB16_EXT),H===i.SHORT&&ft&&(Z=ft.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),y===i.RGBA){let tt=ct?ga:pe.getTransfer(J);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=tt===Ae?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&ft&&(Z=ft.RGBA16_EXT),H===i.SHORT&&ft&&(Z=ft.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function b(C,y){let H;return C?y===null||y===ui||y===Ur?H=i.DEPTH24_STENCIL8:y===$n?H=i.DEPTH32F_STENCIL8:y===Nr&&(H=i.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ui||y===Ur?H=i.DEPTH_COMPONENT24:y===$n?H=i.DEPTH_COMPONENT32F:y===Nr&&(H=i.DEPTH_COMPONENT16),H}function S(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==sn&&C.minFilter!==yn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function R(C){let y=C.target;y.removeEventListener("dispose",R),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function _(C){let y=C.target;y.removeEventListener("dispose",_),P(y)}function T(C){let y=n.get(C);if(y.__webglInit===void 0)return;let H=C.source,V=p.get(H);if(V){let J=V[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&A(C),Object.keys(V).length===0&&p.delete(H)}n.remove(C)}function A(C){let y=n.get(C);i.deleteTexture(y.__webglTexture);let H=C.source,V=p.get(H);delete V[y.__cacheKey],a.memory.textures--}function P(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(y.__webglFramebuffer[V]))for(let J=0;J<y.__webglFramebuffer[V].length;J++)i.deleteFramebuffer(y.__webglFramebuffer[V][J]);else i.deleteFramebuffer(y.__webglFramebuffer[V]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[V])}else{if(Array.isArray(y.__webglFramebuffer))for(let V=0;V<y.__webglFramebuffer.length;V++)i.deleteFramebuffer(y.__webglFramebuffer[V]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let V=0;V<y.__webglColorRenderbuffer.length;V++)y.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[V]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let H=C.textures;for(let V=0,J=H.length;V<J;V++){let ct=n.get(H[V]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(H[V])}n.remove(C)}let N=0;function z(){N=0}function L(){return N}function B(C){N=C}function X(){let C=N;return C>=s.maxTextures&&Yt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function W(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function at(C,y){let H=n.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let V=C.image;if(V===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(H,C,y);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+y)}function Y(C,y){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){yt(H,C,y);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+y)}function nt(C,y){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){yt(H,C,y);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+y)}function et(C,y){let H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){Bt(H,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+y)}let Ft={[vr]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[rl]:i.MIRRORED_REPEAT},Rt={[sn]:i.NEAREST,[Qf]:i.NEAREST_MIPMAP_NEAREST,[qa]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Gl]:i.LINEAR_MIPMAP_NEAREST,[fs]:i.LINEAR_MIPMAP_LINEAR},le={[ip]:i.NEVER,[lp]:i.ALWAYS,[sp]:i.LESS,[Ec]:i.LEQUAL,[rp]:i.EQUAL,[Tc]:i.GEQUAL,[ap]:i.GREATER,[op]:i.NOTEQUAL};function ee(C,y){if(y.type===$n&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===yn||y.magFilter===Gl||y.magFilter===qa||y.magFilter===fs||y.minFilter===yn||y.minFilter===Gl||y.minFilter===qa||y.minFilter===fs)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ft[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ft[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ft[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Rt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Rt[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,le[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===sn||y.minFilter!==qa&&y.minFilter!==fs||y.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Kt(C,y){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",R));let V=y.source,J=p.get(V);J===void 0&&(J={},p.set(V,J));let ct=W(y);if(ct!==C.__cacheKey){J[ct]===void 0&&(J[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),J[ct].usedTimes++;let ft=J[C.__cacheKey];ft!==void 0&&(J[C.__cacheKey].usedTimes--,ft.usedTimes===0&&A(y)),C.__cacheKey=ct,C.__webglTexture=J[ct].texture}return H}function $(C,y,H){return Math.floor(Math.floor(C/H)/y)}function st(C,y,H,V){let ct=C.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,H,V,y.data);else{ct.sort((zt,Mt)=>zt.start-Mt.start);let ft=0;for(let zt=1;zt<ct.length;zt++){let Mt=ct[ft],gt=ct[zt],Dt=Mt.start+Mt.count,Wt=$(gt.start,y.width,4),te=$(Mt.start,y.width,4);gt.start<=Dt+1&&Wt===te&&$(gt.start+gt.count-1,y.width,4)===Wt?Mt.count=Math.max(Mt.count,gt.start+gt.count-Mt.start):(++ft,ct[ft]=gt)}ct.length=ft+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let zt=0,Mt=ct.length;zt<Mt;zt++){let gt=ct[zt],Dt=Math.floor(gt.start/4),Wt=Math.ceil(gt.count/4),te=Dt%y.width,U=Math.floor(Dt/y.width),_t=Wt,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,te),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,te,U,_t,j,H,V,y.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function yt(C,y,H){let V=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=i.TEXTURE_3D);let J=Kt(C,y),ct=y.source;e.bindTexture(V,C.__webglTexture,i.TEXTURE0+H);let ft=n.get(ct);if(ct.version!==ft.__version||J===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap!="undefined"&&y.image instanceof ImageBitmap)===!1){let j=pe.getPrimaries(pe.workingColorSpace),xt=y.colorSpace===Wi?null:pe.getPrimaries(y.colorSpace),Et=y.colorSpace===Wi||j===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let tt=f(y.image,!1,s.maxTextureSize);tt=de(y,tt);let mt=r.convert(y.format,y.colorSpace),zt=r.convert(y.type),Mt=v(y.internalFormat,mt,zt,y.normalized,y.colorSpace,y.isVideoTexture);ee(V,y);let gt,Dt=y.mipmaps,Wt=y.isVideoTexture!==!0,te=ft.__version===void 0||J===!0,U=ct.dataReady,_t=S(y,tt);if(y.isDepthTexture)Mt=b(y.format===ps,y.type),te&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Mt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Mt,tt.width,tt.height,0,mt,zt,null));else if(y.isDataTexture)if(Dt.length>0){Wt&&te&&e.texStorage2D(i.TEXTURE_2D,_t,Mt,Dt[0].width,Dt[0].height);for(let j=0,xt=Dt.length;j<xt;j++)gt=Dt[j],Wt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,gt.width,gt.height,mt,zt,gt.data):e.texImage2D(i.TEXTURE_2D,j,Mt,gt.width,gt.height,0,mt,zt,gt.data);y.generateMipmaps=!1}else Wt?(te&&e.texStorage2D(i.TEXTURE_2D,_t,Mt,tt.width,tt.height),U&&st(y,tt,mt,zt)):e.texImage2D(i.TEXTURE_2D,0,Mt,tt.width,tt.height,0,mt,zt,tt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Wt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Mt,Dt[0].width,Dt[0].height,tt.depth);for(let j=0,xt=Dt.length;j<xt;j++)if(gt=Dt[j],y.format!==Kn)if(mt!==null)if(Wt){if(U)if(y.layerUpdates.size>0){let Et=Ru(gt.width,gt.height,y.format,y.type);for(let ot of y.layerUpdates){let Ht=gt.data.subarray(ot*Et/gt.data.BYTES_PER_ELEMENT,(ot+1)*Et/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ot,gt.width,gt.height,1,mt,Ht)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,gt.width,gt.height,tt.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Mt,gt.width,gt.height,tt.depth,0,gt.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,gt.width,gt.height,tt.depth,mt,zt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Mt,gt.width,gt.height,tt.depth,0,mt,zt,gt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Wt&&te&&e.texStorage2D(i.TEXTURE_2D,_t,Mt,Dt[0].width,Dt[0].height);for(let j=0,xt=Dt.length;j<xt;j++)gt=Dt[j],y.format!==Kn?mt!==null?Wt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Mt,gt.width,gt.height,0,gt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,gt.width,gt.height,mt,zt,gt.data):e.texImage2D(i.TEXTURE_2D,j,Mt,gt.width,gt.height,0,mt,zt,gt.data)}else if(y.isDataArrayTexture)if(Wt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Mt,tt.width,tt.height,tt.depth),U)if(y.layerUpdates.size>0){let j=Ru(tt.width,tt.height,y.format,y.type);for(let xt of y.layerUpdates){let Et=tt.data.subarray(xt*j/tt.data.BYTES_PER_ELEMENT,(xt+1)*j/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,tt.width,tt.height,1,mt,zt,Et)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,zt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,tt.width,tt.height,tt.depth,0,mt,zt,tt.data);else if(y.isData3DTexture)Wt?(te&&e.texStorage3D(i.TEXTURE_3D,_t,Mt,tt.width,tt.height,tt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,zt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,tt.width,tt.height,tt.depth,0,mt,zt,tt.data);else if(y.isFramebufferTexture){if(te)if(Wt)e.texStorage2D(i.TEXTURE_2D,_t,Mt,tt.width,tt.height);else{let j=tt.width,xt=tt.height;for(let Et=0;Et<_t;Et++)e.texImage2D(i.TEXTURE_2D,Et,Mt,j,xt,0,mt,zt,null),j>>=1,xt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),tt.parentNode!==j){j.appendChild(tt),d.add(y),j.onpaint=xt=>{let Et=xt.changedElements;for(let ot of d)Et.includes(ot.image)&&(ot.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{let Et=i.RGBA,ot=i.RGBA,Ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,ot,Ht,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Wt&&te){let j=se(Dt[0]);e.texStorage2D(i.TEXTURE_2D,_t,Mt,j.width,j.height)}for(let j=0,xt=Dt.length;j<xt;j++)gt=Dt[j],Wt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,mt,zt,gt):e.texImage2D(i.TEXTURE_2D,j,Mt,mt,zt,gt);y.generateMipmaps=!1}else if(Wt){if(te){let j=se(tt);e.texStorage2D(i.TEXTURE_2D,_t,Mt,j.width,j.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,zt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Mt,mt,zt,tt);m(y)&&M(V),ft.__version=ct.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Bt(C,y,H){if(y.image.length!==6)return;let V=Kt(C,y),J=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let ct=n.get(J);if(J.version!==ct.__version||V===!0){e.activeTexture(i.TEXTURE0+H);let ft=pe.getPrimaries(pe.workingColorSpace),Z=y.colorSpace===Wi?null:pe.getPrimaries(y.colorSpace),tt=y.colorSpace===Wi||ft===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let mt=y.isCompressedTexture||y.image[0].isCompressedTexture,zt=y.image[0]&&y.image[0].isDataTexture,Mt=[];for(let ot=0;ot<6;ot++)!mt&&!zt?Mt[ot]=f(y.image[ot],!0,s.maxCubemapSize):Mt[ot]=zt?y.image[ot].image:y.image[ot],Mt[ot]=de(y,Mt[ot]);let gt=Mt[0],Dt=r.convert(y.format,y.colorSpace),Wt=r.convert(y.type),te=v(y.internalFormat,Dt,Wt,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,_t=ct.__version===void 0||V===!0,j=J.dataReady,xt=S(y,gt);ee(i.TEXTURE_CUBE_MAP,y);let Et;if(mt){U&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,te,gt.width,gt.height);for(let ot=0;ot<6;ot++){Et=Mt[ot].mipmaps;for(let Ht=0;Ht<Et.length;Ht++){let Ct=Et[Ht];y.format!==Kn?Dt!==null?U?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht,0,0,Ct.width,Ct.height,Dt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht,te,Ct.width,Ct.height,0,Ct.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht,0,0,Ct.width,Ct.height,Dt,Wt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht,te,Ct.width,Ct.height,0,Dt,Wt,Ct.data)}}}else{if(Et=y.mipmaps,U&&_t){Et.length>0&&xt++;let ot=se(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,te,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(zt){U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Mt[ot].width,Mt[ot].height,Dt,Wt,Mt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,te,Mt[ot].width,Mt[ot].height,0,Dt,Wt,Mt[ot].data);for(let Ht=0;Ht<Et.length;Ht++){let be=Et[Ht].image[ot].image;U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht+1,0,0,be.width,be.height,Dt,Wt,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht+1,te,be.width,be.height,0,Dt,Wt,be.data)}}else{U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Dt,Wt,Mt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,te,Dt,Wt,Mt[ot]);for(let Ht=0;Ht<Et.length;Ht++){let Ct=Et[Ht];U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht+1,0,0,Dt,Wt,Ct.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht+1,te,Dt,Wt,Ct.image[ot])}}}m(y)&&M(i.TEXTURE_CUBE_MAP),ct.__version=J.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function At(C,y,H,V,J,ct){let ft=r.convert(H.format,H.colorSpace),Z=r.convert(H.type),tt=v(H.internalFormat,ft,Z,H.normalized,H.colorSpace),mt=n.get(y),zt=n.get(H);if(zt.__renderTarget=y,!mt.__hasExternalTextures){let Mt=Math.max(1,y.width>>ct),gt=Math.max(1,y.height>>ct);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,ct,tt,Mt,gt,y.depth,0,ft,Z,null):e.texImage2D(J,ct,tt,Mt,gt,0,ft,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),$t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,J,zt.__webglTexture,0,Vt(y)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,J,zt.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(C,y,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){let V=y.depthTexture,J=V&&V.isDepthTexture?V.type:null,ct=b(y.stencilBuffer,J),ft=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;$t(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(y),ct,y.width,y.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(y),ct,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ct,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,C)}else{let V=y.textures;for(let J=0;J<V.length;J++){let ct=V[J],ft=r.convert(ct.format,ct.colorSpace),Z=r.convert(ct.type),tt=v(ct.internalFormat,ft,Z,ct.normalized,ct.colorSpace);$t(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(y),tt,y.width,y.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(y),tt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,tt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(C,y,H){let V=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ee(i.TEXTURE_CUBE_MAP,y.depthTexture);let mt=r.convert(y.depthTexture.format),zt=r.convert(y.depthTexture.type),Mt;y.depthTexture.format===Mi?Mt=i.DEPTH_COMPONENT24:y.depthTexture.format===ps&&(Mt=i.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Mt,y.width,y.height,0,mt,zt,null)}}else at(y.depthTexture,0);let ct=J.__webglTexture,ft=Vt(y),Z=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,tt=y.depthTexture.format===ps?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Mi)$t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,Z,ct,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,tt,Z,ct,0);else if(y.depthTexture.format===ps)$t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,Z,ct,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,tt,Z,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(C){let y=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let V=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),V){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=V}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let V=0;V<6;V++)Se(y.__webglFramebuffer[V],C,V);else{let V=C.texture.mipmaps;V&&V.length>0?Se(y.__webglFramebuffer[0],C,0):Se(y.__webglFramebuffer,C,0)}else if(H){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]===void 0)y.__webglDepthbuffer[V]=i.createRenderbuffer(),Zt(y.__webglDepthbuffer[V],C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ct)}}else{let V=C.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Zt(y.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(C,y,H){let V=n.get(C);y!==void 0&&At(V.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&rt(C)}function dt(C){let y=C.texture,H=n.get(C),V=n.get(y);C.addEventListener("dispose",_);let J=C.textures,ct=C.isWebGLCubeRenderTarget===!0,ft=J.length>1;if(ft||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=y.version,a.memory.textures++),ct){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let tt=0;tt<y.mipmaps.length;tt++)H.__webglFramebuffer[Z][tt]=i.createFramebuffer()}else H.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)H.__webglFramebuffer[Z]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ft)for(let Z=0,tt=J.length;Z<tt;Z++){let mt=n.get(J[Z]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&$t(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<J.length;Z++){let tt=J[Z];H.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);let mt=r.convert(tt.format,tt.colorSpace),zt=r.convert(tt.type),Mt=v(tt.internalFormat,mt,zt,tt.normalized,tt.colorSpace,C.isXRRenderTarget===!0),gt=Vt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,Mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Zt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),ee(i.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let tt=0;tt<y.mipmaps.length;tt++)At(H.__webglFramebuffer[Z][tt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,tt);else At(H.__webglFramebuffer[Z],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(y)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let Z=0,tt=J.length;Z<tt;Z++){let mt=J[Z],zt=n.get(mt),Mt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,zt.__webglTexture),ee(Mt,mt),At(H.__webglFramebuffer,C,mt,i.COLOR_ATTACHMENT0+Z,Mt,0),m(mt)&&M(Mt)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,V.__webglTexture),ee(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let tt=0;tt<y.mipmaps.length;tt++)At(H.__webglFramebuffer[tt],C,y,i.COLOR_ATTACHMENT0,Z,tt);else At(H.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,Z,0);m(y)&&M(Z),e.unbindTexture()}C.depthBuffer&&rt(C)}function ut(C){let y=C.textures;for(let H=0,V=y.length;H<V;H++){let J=y[H];if(m(J)){let ct=w(C),ft=n.get(J).__webglTexture;e.bindTexture(ct,ft),M(ct),e.unbindTexture()}}}let pt=[],Lt=[];function Ot(C){if(C.samples>0){if($t(C)===!1){let y=C.textures,H=C.width,V=C.height,J=i.COLOR_BUFFER_BIT,ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(C),Z=y.length>1;if(Z)for(let mt=0;mt<y.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let tt=C.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let mt=0;mt<y.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let zt=n.get(y[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,H,V,0,0,H,V,J,i.NEAREST),l===!0&&(pt.length=0,Lt.length=0,pt.push(i.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(pt.push(ct),Lt.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let mt=0;mt<y.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let zt=n.get(y[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Vt(C){return Math.min(s.maxSamples,C.samples)}function $t(C){let y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function D(C){let y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function de(C,y){let H=C.colorSpace,V=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==ma&&H!==Wi&&(pe.getTransfer(H)===Ae?(V!==Kn||J!==Bn)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",H)),y}function se(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=at,this.setTexture2DArray=Y,this.setTexture3D=nt,this.setTextureCube=et,this.rebindTextures=lt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function eM(i,t){function e(n,s=Wi){let r,a=pe.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===Vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gu)return i.BYTE;if(n===xu)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===kl)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Wn)return i.HALF_FLOAT;if(n===yu)return i.ALPHA;if(n===Mu)return i.RGB;if(n===Kn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===Fr)return i.RED;if(n===Xl)return i.RED_INTEGER;if(n===ms)return i.RG;if(n===ql)return i.RG_INTEGER;if(n===Yl)return i.RGBA_INTEGER;if(n===Ya||n===Za||n===Ja||n===$a)if(a===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zl||n===Jl||n===$l||n===Kl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jl||n===Ql||n===tc||n===ec||n===nc||n===Ka||n===ic)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jl||n===Ql)return a===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ec)return r.COMPRESSED_R11_EAC;if(n===nc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ka)return r.COMPRESSED_RG11_EAC;if(n===ic)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_c||n===vc||n===yc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_c)return a===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mc||n===Sc||n===ja||n===bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var nM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iM=`
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

}`,Yu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Aa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Qe({vertexShader:nM,fragmentShader:iM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new K(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zu=class extends Si{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,x=typeof XRWebGLBinding!="undefined",f=new Yu,m={},M=e.getContextAttributes(),w=null,v=null,b=[],S=[],R=new ht,_=null,T=null,A=new ln;A.viewport=new Ge;let P=new ln;P.viewport=new Ge;let N=[A,P],z=new Fl,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=b[$];return st===void 0&&(st=new br,b[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=b[$];return st===void 0&&(st=new br,b[$]=st),st.getGripSpace()},this.getHand=function($){let st=b[$];return st===void 0&&(st=new br,b[$]=st),st.getHandSpace()};function X($){let st=S.indexOf($.inputSource);if(st===-1)return;let yt=b[st];yt!==void 0&&(yt.update($.inputSource,$.frame,c||a),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",at);for(let $=0;$<b.length;$++){let st=S[$];st!==null&&(S[$]=null,b[$].disconnect(st))}L=null,B=null,f.reset();for(let $ in m)delete m[$];if(t.setRenderTarget(w),p=null,u=null,d=null,s=null,v=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),T!==null){let $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",at),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Bt=null,At=null;M.depth&&(At=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=M.stencil?ps:Mi,Bt=M.stencil?Ur:ui);let Zt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Sn(u.textureWidth,u.textureHeight,{format:Kn,type:Bn,depthTexture:new ss(u.textureWidth,u.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Sn(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function at($){for(let st=0;st<$.removed.length;st++){let yt=$.removed[st],Bt=S.indexOf(yt);Bt>=0&&(S[Bt]=null,b[Bt].disconnect(yt))}for(let st=0;st<$.added.length;st++){let yt=$.added[st],Bt=S.indexOf(yt);if(Bt===-1){for(let Zt=0;Zt<b.length;Zt++)if(Zt>=S.length){S.push(yt),Bt=Zt;break}else if(S[Zt]===null){S[Zt]=yt,Bt=Zt;break}if(Bt===-1)break}let At=b[Bt];At&&At.connect(yt)}}let Y=new I,nt=new I;function et($,st,yt){Y.setFromMatrixPosition(st.matrixWorld),nt.setFromMatrixPosition(yt.matrixWorld);let Bt=Y.distanceTo(nt),At=st.projectionMatrix.elements,Zt=yt.projectionMatrix.elements,Se=At[14]/(At[10]-1),rt=At[14]/(At[10]+1),lt=(At[9]+1)/At[5],dt=(At[9]-1)/At[5],ut=(At[8]-1)/At[0],pt=(Zt[8]+1)/Zt[0],Lt=Se*ut,Ot=Se*pt,Vt=Bt/(-ut+pt),$t=Vt*-ut;if(st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX($t),$.translateZ(Vt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let D=Se+Vt,de=rt+Vt,se=Lt-$t,C=Ot+(Bt-$t),y=lt*rt/de*D,H=dt*rt/de*D;$.projectionMatrix.makePerspective(se,C,y,H,D,de),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ft($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let st=$.near,yt=$.far;f.texture!==null&&(f.depthNear>0&&(st=f.depthNear),f.depthFar>0&&(yt=f.depthFar)),z.near=P.near=A.near=st,z.far=P.far=A.far=yt,(L!==z.near||B!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,B=z.far),z.layers.mask=$.layers.mask|6,A.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;let Bt=$.parent,At=z.cameras;Ft(z,Bt);for(let Zt=0;Zt<At.length;Zt++)Ft(At[Zt],Bt);At.length===2?et(z,A,P):z.projectionMatrix.copy(A.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),Rt($,z,Bt)};function Rt($,st,yt){yt===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ol*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(z)},this.getCameraTexture=function($){return m[$]};let le=null;function ee($,st){if(h=st.getViewerPose(c||a),g=st,h!==null){let yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Bt=!1;yt.length!==z.cameras.length&&(z.cameras.length=0,Bt=!0);for(let rt=0;rt<yt.length;rt++){let lt=yt[rt],dt=null;if(p!==null)dt=p.getViewport(lt);else{let pt=d.getViewSubImage(u,lt);dt=pt.viewport,rt===0&&(t.setRenderTargetTextures(v,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(v))}let ut=N[rt];ut===void 0&&(ut=new ln,ut.layers.enable(rt),ut.viewport=new Ge,N[rt]=ut),ut.matrix.fromArray(lt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(lt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(dt.x,dt.y,dt.width,dt.height),rt===0&&(z.matrix.copy(ut.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Bt===!0&&z.cameras.push(ut)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let rt=d.getDepthInformation(yt[0]);rt&&rt.isValid&&rt.texture&&f.init(rt,s.renderState)}if(At&&At.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let rt=0;rt<yt.length;rt++){let lt=yt[rt].camera;if(lt){let dt=m[lt];dt||(dt=new Aa,m[lt]=dt);let ut=d.getCameraImage(lt);dt.sourceTexture=ut}}}}for(let yt=0;yt<b.length;yt++){let Bt=S[yt],At=b[yt];Bt!==null&&At!==void 0&&At.update(Bt,st,c||a)}le&&le($,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let Kt=new Vp;Kt.setAnimationLoop(ee),this.setAnimationLoop=function($){le=$},this.dispose=function(){}}},sM=new ve,Jp=new jt;Jp.set(-1,0,0,0,1,0,0,0,1);function rM(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Tu(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,M,w,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(f,m):m.isMeshLambertMaterial?(r(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(f,m),d(f,m)):m.isMeshPhongMaterial?(r(f,m),h(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(f,m),u(f,m),m.isMeshPhysicalMaterial&&p(f,m,v)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),x(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,M,w):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===bn&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===bn&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let M=t.get(m),w=M.envMap,v=M.envMapRotation;w&&(f.envMap.value=w,f.envMapRotation.value.setFromMatrix4(sM.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Jp),f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,M,w){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*M,f.scale.value=w*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function d(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function u(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,M){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===bn&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.retroreflectivity>0&&(f.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function x(f,m){let M=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function aM(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let S=b.program;n.uniformBlockBinding(v,S)}function c(v,b){let S=s[v.id];S===void 0&&(f(v),S=h(v),s[v.id]=S,v.addEventListener("dispose",M));let R=b.program;n.updateUBOMapping(v,R);let _=t.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function h(v){let b=d();v.__bindingPointIndex=b;let S=i.createBuffer(),R=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let b=s[v.id],S=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,T=S.length;_<T;_++){let A=S[_];if(Array.isArray(A))for(let P=0,N=A.length;P<N;P++)p(A[P],_,P,R);else p(A,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,b,S,R){if(x(v,b,S,R)===!0){let _=v.__offset,T=v.value;if(Array.isArray(T)){let A=0;for(let P=0;P<T.length;P++){let N=T[P],z=m(N);g(N,v.__data,A),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(A+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function g(v,b,S){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,S)}function x(v,b,S,R){let _=v.value,T=b+"_"+S;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{let A=R[T];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function f(v){let b=v.uniforms,S=0,R=16;for(let T=0,A=b.length;T<A;T++){let P=Array.isArray(b[T])?b[T]:[b[T]];for(let N=0,z=P.length;N<z;N++){let L=P[N],B=Array.isArray(L.value)?L.value:[L.value];for(let X=0,W=B.length;X<W;X++){let at=B[X],Y=m(at),nt=S%R,et=nt%Y.boundary,Ft=nt+et;S+=et,Ft!==0&&R-Ft<Y.storage&&(S+=R-Ft),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=Y.storage}}}let _=S%R;return _>0&&(S+=R-_),v.__size=S,v.__cache={},this}function m(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",v),b}function M(v){let b=v.target;b.removeEventListener("dispose",M);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var oM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wi=null;function lM(){return wi===null&&(wi=new Ds(oM,16,16,ms,Wn),wi.name="DFG_LUT",wi.minFilter=yn,wi.magFilter=yn,wi.wrapS=vi,wi.wrapT=vi,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var Ic=class{constructor(t={}){let{canvas:e=cp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Bn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=p,f=new Set([Yl,ql,Xl]),m=new Set([Bn,ui,Nr,Ur,Vl,Wl]),M=new Uint32Array(4),w=new Int32Array(4),v=new I,b=null,S=null,R=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,N=null,z=null,L=null,B=null;this._outputColorSpace=vn;let X=0,W=0,at=null,Y=-1,nt=null,et=new Ge,Ft=new Ge,Rt=null,le=new vt(0),ee=0,Kt=e.width,$=e.height,st=1,yt=null,Bt=null,At=new Ge(0,0,Kt,$),Zt=new Ge(0,0,Kt,$),Se=!1,rt=new wr,lt=!1,dt=!1,ut=new ve,pt=new I,Lt=new Ge,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function $t(){return at===null?st:1}let D=n;function de(E,F){return e.getContext(E,F)}let se,C,y,H,V,J,ct,ft,Z,tt,mt,zt,Mt,gt,Dt,Wt,te,U,_t,j,xt,Et,ot;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Nn,!1),D===null){let F="webgl2";if(D=de(F,E),D===null)throw de(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(E){throw e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),Jt("WebGLRenderer: "+E.message),E}function Ht(){se=new mv(D),se.init(),xt=new eM(D,se),C=new rv(D,se,t,xt),y=new Qy(D,se),C.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),z=D.createFramebuffer(),L=D.createFramebuffer(),B=D.createFramebuffer(),H=new _v(D),V=new zy,J=new tM(D,se,y,V,C,xt,H),ct=new pv(A),ft=new yg(D),Et=new iv(D,ft),Z=new gv(D,ft,H,Et),tt=new yv(D,Z,ft,Et,H),U=new vv(D,C,J),Dt=new av(V),mt=new Oy(A,ct,se,C,Et,Dt),zt=new rM(A,V),Mt=new Gy,gt=new Yy(se),te=new nv(A,ct,y,tt,g,l),Wt=new jy(A,tt,C),ot=new aM(D,H,C,y),_t=new sv(D,se,H),j=new xv(D,se,H),H.programs=mt.programs,A.capabilities=C,A.extensions=se,A.properties=V,A.renderLists=Mt,A.shadowMap=Wt,A.state=y,A.info=H}x!==Bn&&(T=new Sv(x,e.width,e.height,o,s,r));let Ct=new Zu(A,D);this.xr=Ct,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(E){E!==void 0&&(st=E,this.setSize(Kt,$,!1))},this.getSize=function(E){return E.set(Kt,$)},this.setSize=function(E,F,q=!0){if(Ct.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Kt=E,$=F,e.width=Math.floor(E*st),e.height=Math.floor(F*st),q===!0&&(e.style.width=E+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Kt*st,$*st).floor()},this.setDrawingBufferSize=function(E,F,q){Kt=E,$=F,st=q,e.width=Math.floor(E*q),e.height=Math.floor(F*q),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(x===Bn){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(et)},this.getViewport=function(E){return E.copy(At)},this.setViewport=function(E,F,q,G){E.isVector4?At.set(E.x,E.y,E.z,E.w):At.set(E,F,q,G),y.viewport(et.copy(At).multiplyScalar(st).round())},this.getScissor=function(E){return E.copy(Zt)},this.setScissor=function(E,F,q,G){E.isVector4?Zt.set(E.x,E.y,E.z,E.w):Zt.set(E,F,q,G),y.scissor(Ft.copy(Zt).multiplyScalar(st).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(E){y.setScissorTest(Se=E)},this.setOpaqueSort=function(E){yt=E},this.setTransparentSort=function(E){Bt=E},this.getClearColor=function(E){return E.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,q=!0){let G=0;if(E){let k=!1;if(at!==null){let wt=at.texture.format;k=f.has(wt)}if(k){let wt=at.texture.type,Pt=m.has(wt),Tt=te.getClearColor(),Nt=te.getClearAlpha(),Gt=Tt.r,re=Tt.g,he=Tt.b;Pt?(M[0]=Gt,M[1]=re,M[2]=he,M[3]=Nt,D.clearBufferuiv(D.COLOR,0,M)):(w[0]=Gt,w[1]=re,w[2]=he,w[3]=Nt,D.clearBufferiv(D.COLOR,0,w))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),te.dispose(),Mt.dispose(),gt.dispose(),V.dispose(),ct.dispose(),tt.dispose(),Et.dispose(),ot.dispose(),mt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",fe),Ct.removeEventListener("sessionend",ce),Xt.stop()};function be(E){E.preventDefault(),_a("WebGLRenderer: Context Lost."),P=!0}function xe(){_a("WebGLRenderer: Context Restored."),P=!1;let E=H.autoReset,F=Wt.enabled,q=Wt.autoUpdate,G=Wt.needsUpdate,k=Wt.type;Ht(),H.autoReset=E,Wt.enabled=F,Wt.autoUpdate=q,Wt.needsUpdate=G,Wt.type=k}function Nn(E){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function _n(E){let F=E.target;F.removeEventListener("dispose",_n),ta(F)}function ta(E){it(E),V.remove(E)}function it(E){let F=V.get(E).programs;F!==void 0&&(F.forEach(function(q){mt.releaseProgram(q)}),E.isShaderMaterial&&mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,q,G,k,wt){F===null&&(F=Ot);let Pt=k.isMesh&&k.matrixWorld.determinantAffine()<0,Tt=s0(E,F,q,G,k);y.setMaterial(G,Pt);let Nt=q.index,Gt=1;if(G.wireframe===!0){if(Nt=Z.getWireframeAttribute(q),Nt===void 0)return;Gt=2}let re=q.drawRange,he=q.attributes.position,Ut=re.start*Gt,we=(re.start+re.count)*Gt;wt!==null&&(Ut=Math.max(Ut,wt.start*Gt),we=Math.min(we,(wt.start+wt.count)*Gt)),Nt!==null?(Ut=Math.max(Ut,0),we=Math.min(we,Nt.count)):he!=null&&(Ut=Math.max(Ut,0),we=Math.min(we,he.count));let en=we-Ut;if(en<0||en===1/0)return;Et.setup(k,G,Tt,q,Nt);let Fe,Le=_t;if(Nt!==null&&(Fe=ft.get(Nt),Le=j,Le.setIndex(Fe)),k.isMesh)G.wireframe===!0?(y.setLineWidth(G.wireframeLinewidth*$t()),Le.setMode(D.LINES)):Le.setMode(D.TRIANGLES);else if(k.isLine){let En=G.linewidth;En===void 0&&(En=1),y.setLineWidth(En*$t()),k.isLineSegments?Le.setMode(D.LINES):k.isLineLoop?Le.setMode(D.LINE_LOOP):Le.setMode(D.LINE_STRIP)}else k.isPoints?Le.setMode(D.POINTS):k.isSprite&&Le.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(se.get("WEBGL_multi_draw"))Le.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let En=k._multiDrawStarts,It=k._multiDrawCounts,Rn=k._multiDrawCount,_e=Nt?ft.get(Nt).bytesPerElement:1,Yn=V.get(G).currentProgram.getUniforms();for(let gi=0;gi<Rn;gi++)Yn.setValue(D,"_gl_DrawID",gi),Le.render(En[gi]/_e,It[gi])}else if(k.isInstancedMesh)Le.renderInstances(Ut,en,k.count);else if(q.isInstancedBufferGeometry){let En=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,It=Math.min(q.instanceCount,En);Le.renderInstances(Ut,en,It)}else Le.render(Ut,en)};function St(E,F,q,G){N!==null&&E.isNodeMaterial&&N.setObject(G,E),lt===!0&&Dt.setState(E,q,!1),E.transparent===!0&&E.side===De&&E.forceSinglePass===!1?(E.side=bn,E.needsUpdate=!0,yo(E,F,G),E.side=us,E.needsUpdate=!0,yo(E,F,G),E.side=De):yo(E,F,G)}this.compile=function(E,F,q=null){q===null&&(q=E),N!==null&&N.renderStart(E,F,q),S=gt.get(q),S.init(F),_.push(S),q.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),E!==q&&E.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights(),N!==null&&N.updateLights(S.state.lightsArray),dt=this.localClippingEnabled,lt=Dt.init(this.clippingPlanes,dt),lt===!0&&Dt.setGlobalState(this.clippingPlanes,F),N!==null&&Wt.render(S.state.shadowsArray,q,F);let G=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let wt=k.material;if(wt)if(Array.isArray(wt))for(let Pt=0;Pt<wt.length;Pt++){let Tt=wt[Pt];St(Tt,q,F,k),G.add(Tt)}else St(wt,q,F,k),G.add(wt)}),S=_.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(E,F,q=null){let G=this.compile(E,F,q);return new Promise(k=>{function wt(){if(G.forEach(function(Pt){let Nt=V.get(Pt).currentProgram;(Nt===void 0||Nt.isReady())&&G.delete(Pt)}),G.size===0){k(E);return}setTimeout(wt,10)}se.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let ne=null;function Te(E){ne&&ne(E)}function fe(){Xt.stop()}function ce(){Xt.start()}let Xt=new Vp;Xt.setAnimationLoop(Te),typeof self!="undefined"&&Xt.setContext(self),this.setAnimationLoop=function(E){ne=E,Ct.setAnimationLoop(E),E===null?Xt.stop():Xt.start()},Ct.addEventListener("sessionstart",fe),Ct.addEventListener("sessionend",ce),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(E,F);let q=Ct.enabled===!0&&Ct.isPresenting===!0,G=T!==null&&(at===null||q)&&T.begin(A,at);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(F),F=Ct.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,F,at),S=gt.get(E,_.length),S.init(F),S.state.textureUnits=J.getTextureUnits(),_.push(S),ut.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),rt.setFromProjectionMatrix(ut,oi,F.reversedDepth),dt=this.localClippingEnabled,lt=Dt.init(this.clippingPlanes,dt),b=Mt.get(E,R.length),b.init(),R.push(b),Ct.enabled===!0&&Ct.isPresenting===!0){let Pt=A.xr.getDepthSensingMesh();Pt!==null&&Un(Pt,F,-1/0,A.sortObjects)}Un(E,F,0,A.sortObjects),b.finish(),N!==null&&N.updateLights(S.state.lightsArray),A.sortObjects===!0&&b.sort(yt,Bt),Vt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Vt&&te.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Dt.beginShadows();let k=S.state.shadowsArray;if(Wt.render(k,E,F),lt===!0&&Dt.endShadows(),(G&&T.hasRenderPass())===!1){let Pt=b.opaque,Tt=b.transmissive;if(S.setupLights(),F.isArrayCamera){let Nt=F.cameras;if(Tt.length>0)for(let Gt=0,re=Nt.length;Gt<re;Gt++){let he=Nt[Gt];Hd(Pt,Tt,E,he)}Vt&&te.render(E);for(let Gt=0,re=Nt.length;Gt<re;Gt++){let he=Nt[Gt];Ts(b,E,he,he.viewport)}}else Tt.length>0&&Hd(Pt,Tt,E,F),Vt&&te.render(E),Ts(b,E,F)}at!==null&&W===0&&(J.updateMultisampleRenderTarget(at),J.updateRenderTargetMipmap(at)),G&&T.end(A),E.isScene===!0&&E.onAfterRender(A,E,F),Et.resetDefaultState(),Y=-1,nt=null,_.pop(),_.length>0?(S=_[_.length-1],J.setTextureUnits(S.state.textureUnits),lt===!0&&Dt.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,N!==null&&N.renderEnd()};function Un(E,F,q,G){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(rt)){G&&Lt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ut);let Pt=tt.update(E),Tt=E.material;Tt.visible&&b.push(E,Pt,Tt,q,Lt.z,null,F)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(rt))){let Pt=tt.update(E),Tt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Lt.copy(E.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Lt.copy(Pt.boundingSphere.center)),Lt.applyMatrix4(E.matrixWorld).applyMatrix4(ut)),Array.isArray(Tt)){let Nt=Pt.groups;for(let Gt=0,re=Nt.length;Gt<re;Gt++){let he=Nt[Gt],Ut=Tt[he.materialIndex];Ut&&Ut.visible&&b.push(E,Pt,Ut,q,Lt.z,he,F)}}else Tt.visible&&b.push(E,Pt,Tt,q,Lt.z,null,F)}}let wt=E.children;for(let Pt=0,Tt=wt.length;Pt<Tt;Pt++)Un(wt[Pt],F,q,G)}function Ts(E,F,q,G){let{opaque:k,transmissive:wt,transparent:Pt}=E;S.setupLightsView(q),lt===!0&&Dt.setGlobalState(A.clippingPlanes,q),G&&y.viewport(et.copy(G)),k.length>0&&vo(k,F,q),wt.length>0&&vo(wt,F,q),Pt.length>0&&vo(Pt,F,q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Hd(E,F,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[G.id]===void 0){let Ut=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[G.id]=new Sn(1,1,{generateMipmaps:!0,type:Ut?Wn:Bn,minFilter:fs,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let wt=S.state.transmissionRenderTarget[G.id],Pt=G.viewport||et;wt.setSize(Pt.z*A.transmissionResolutionScale,Pt.w*A.transmissionResolutionScale);let Tt=A.getRenderTarget(),Nt=A.getActiveCubeFace(),Gt=A.getActiveMipmapLevel();A.setRenderTarget(wt),A.getClearColor(le),ee=A.getClearAlpha(),ee<1&&A.setClearColor(16777215,.5),A.clear(),Vt&&te.render(q);let re=A.toneMapping;A.toneMapping=hi;let he=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),S.setupLightsView(G),lt===!0&&Dt.setGlobalState(A.clippingPlanes,G),vo(E,q,G),J.updateMultisampleRenderTarget(wt),J.updateRenderTargetMipmap(wt),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let we=0,en=F.length;we<en;we++){let Fe=F[we],{object:Le,geometry:En,material:It,group:Rn}=Fe;if(It.side===De&&Le.layers.test(G.layers)){let _e=It.side;It.side=bn,It.needsUpdate=!0,Gd(Le,q,G,En,It,Rn),It.side=_e,It.needsUpdate=!0,Ut=!0}}Ut===!0&&(J.updateMultisampleRenderTarget(wt),J.updateRenderTargetMipmap(wt))}A.setRenderTarget(Tt,Nt,Gt),A.setClearColor(le,ee),he!==void 0&&(G.viewport=he),A.toneMapping=re}function vo(E,F,q){let G=F.isScene===!0?F.overrideMaterial:null;for(let k=0,wt=E.length;k<wt;k++){let Pt=E[k],{object:Tt,geometry:Nt,group:Gt}=Pt,re=Pt.material;re.allowOverride===!0&&G!==null&&(re=G),Tt.layers.test(q.layers)&&Gd(Tt,F,q,Nt,re,Gt)}}function Gd(E,F,q,G,k,wt){N!==null&&k.isNodeMaterial&&N.setObject(E,k),E.onBeforeRender(A,F,q,G,k,wt),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(A,F,q,G,E,wt),k.transparent===!0&&k.side===De&&k.forceSinglePass===!1?(k.side=bn,k.needsUpdate=!0,A.renderBufferDirect(q,F,G,k,E,wt),k.side=us,k.needsUpdate=!0,A.renderBufferDirect(q,F,G,k,E,wt),k.side=De):A.renderBufferDirect(q,F,G,k,E,wt),E.onAfterRender(A,F,q,G,k,wt)}function yo(E,F,q){F.isScene!==!0&&(F=Ot);let G=V.get(E),k=S.state.lights,wt=S.state.shadowsArray,Pt=k.state.version,Tt=mt.getParameters(E,k.state,wt,F,q,S.state.lightProbeGridArray),Nt=mt.getProgramCacheKey(Tt),Gt=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let re=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=ct.get(E.envMap||G.environment,re),G.envMapRotation=G.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",_n),Gt=new Map,G.programs=Gt);let he=Gt.get(Nt);if(he!==void 0){if(G.currentProgram===he&&G.lightsStateVersion===Pt)return Vd(E,Tt),he}else Tt.uniforms=mt.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,q,Tt),E.onBeforeCompile(Tt,A),he=mt.acquireProgram(Tt,Nt),Gt.set(Nt,he),G.uniforms=Tt.uniforms;let Ut=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=Dt.uniform),Vd(E,Tt),G.needsLights=a0(E),G.lightsStateVersion=Pt,G.needsLights&&(Ut.ambientLightColor.value=k.state.ambient,Ut.lightProbe.value=k.state.probe,Ut.sunLights.value=k.state.sun,Ut.sunLightShadows.value=k.state.sunShadow,Ut.directionalLights.value=k.state.directional,Ut.directionalLightShadows.value=k.state.directionalShadow,Ut.spotLights.value=k.state.spot,Ut.spotLightShadows.value=k.state.spotShadow,Ut.rectAreaLights.value=k.state.rectArea,Ut.ltc_1.value=k.state.rectAreaLTC1,Ut.ltc_2.value=k.state.rectAreaLTC2,Ut.pointLights.value=k.state.point,Ut.pointLightShadows.value=k.state.pointShadow,Ut.hemisphereLights.value=k.state.hemi,Ut.sunShadowMatrix.value=k.state.sunShadowMatrix,Ut.sunShadowCascade.value=k.state.sunShadowCascade,Ut.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ut.spotLightMatrix.value=k.state.spotLightMatrix,Ut.spotLightMap.value=k.state.spotLightMap,Ut.pointShadowMatrix.value=k.state.pointShadowMatrix),G.lightProbeGrid=S.state.lightProbeGridArray.length>0,G.currentProgram=he,G.uniformsList=null,he}function kd(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=zr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Vd(E,F){let q=V.get(E);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function i0(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let q=0,G=E.length;q<G;q++){let k=E[q];if(k.texture!==null&&k.boundingBox.containsPoint(v))return k}return null}function s0(E,F,q,G,k){F.isScene!==!0&&(F=Ot),J.resetTextureUnits();let wt=F.fog,Pt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,Tt=at===null?A.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:pe.workingColorSpace,Nt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Gt=ct.get(G.envMap||Pt,Nt),re=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,he=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ut=!!q.morphAttributes.position,we=!!q.morphAttributes.normal,en=!!q.morphAttributes.color,Fe=hi;G.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Fe=A.toneMapping);let Le=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,En=Le!==void 0?Le.length:0,It=V.get(G),Rn=S.state.lights;if(lt===!0&&(dt===!0||E!==nt)){let Ne=E===nt&&G.id===Y;Dt.setState(G,E,Ne)}let _e=!1;G.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Rn.state.version||It.outputColorSpace!==Tt||k.isBatchedMesh&&It.batching===!1||!k.isBatchedMesh&&It.batching===!0||k.isBatchedMesh&&It.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&It.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&It.instancing===!1||!k.isInstancedMesh&&It.instancing===!0||k.isSkinnedMesh&&It.skinning===!1||!k.isSkinnedMesh&&It.skinning===!0||k.isInstancedMesh&&It.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&It.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&It.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&It.instancingMorph===!1&&k.morphTexture!==null||It.envMap!==Gt||G.fog===!0&&It.fog!==wt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Dt.numPlanes||It.numIntersection!==Dt.numIntersection)||It.vertexAlphas!==re||It.vertexTangents!==he||It.morphTargets!==Ut||It.morphNormals!==we||It.morphColors!==en||It.toneMapping!==Fe||It.morphTargetsCount!==En||!!It.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,It.__version=G.version);let Yn=It.currentProgram;_e===!0&&(Yn=yo(G,F,k),N&&G.isNodeMaterial&&N.onUpdateProgram(G,Yn,It));let gi=!1,Zi=!1,Ks=!1,Re=Yn.getUniforms(),je=It.uniforms;if(y.useProgram(Yn.program)&&(gi=!0,Zi=!0,Ks=!0),G.id!==Y&&(Y=G.id,Zi=!0),It.needsLights){let Ne=i0(S.state.lightProbeGridArray,k);It.lightProbeGrid!==Ne&&(It.lightProbeGrid=Ne,Zi=!0)}if(gi||nt!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Re.setValue(D,"projectionMatrix",E.projectionMatrix),Re.setValue(D,"viewMatrix",E.matrixWorldInverse);let $i=Re.map.cameraPosition;$i!==void 0&&$i.setValue(D,pt.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&Re.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Re.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),nt!==E&&(nt=E,Zi=!0,Ks=!0)}if(It.needsLights&&(Rn.state.sunShadowMap.length>0&&Re.setValue(D,"sunShadowMap",Rn.state.sunShadowMap,J),Rn.state.directionalShadowMap.length>0&&Re.setValue(D,"directionalShadowMap",Rn.state.directionalShadowMap,J),Rn.state.spotShadowMap.length>0&&Re.setValue(D,"spotShadowMap",Rn.state.spotShadowMap,J),Rn.state.pointShadowMap.length>0&&Re.setValue(D,"pointShadowMap",Rn.state.pointShadowMap,J)),k.isSkinnedMesh){Re.setOptional(D,k,"bindMatrix"),Re.setOptional(D,k,"bindMatrixInverse");let Ne=k.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Re.setValue(D,"boneTexture",Ne.boneTexture,J))}k.isBatchedMesh&&(Re.setOptional(D,k,"batchingTexture"),Re.setValue(D,"batchingTexture",k._matricesTexture,J),Re.setOptional(D,k,"batchingIdTexture"),Re.setValue(D,"batchingIdTexture",k._indirectTexture,J),Re.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Re.setValue(D,"batchingColorTexture",k._colorsTexture,J));let Ji=q.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&U.update(k,q,Yn),(Zi||It.receiveShadow!==k.receiveShadow)&&(It.receiveShadow=k.receiveShadow,Re.setValue(D,"receiveShadow",k.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(je.envMapIntensity.value=F.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=lM()),Zi){if(Re.setValue(D,"toneMappingExposure",A.toneMappingExposure),It.needsLights&&r0(je,Ks),wt&&G.fog===!0&&zt.refreshFogUniforms(je,wt),zt.refreshMaterialUniforms(je,G,st,$,S.state.transmissionRenderTarget[E.id]),It.needsLights&&It.lightProbeGrid){let Ne=It.lightProbeGrid;je.probesSH.value=Ne.texture,je.probesMin.value.copy(Ne.boundingBox.min),je.probesMax.value.copy(Ne.boundingBox.max),je.probesResolution.value.copy(Ne.resolution)}zr.upload(D,kd(It),je,J)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(zr.upload(D,kd(It),je,J),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Re.setValue(D,"center",k.center),Re.setValue(D,"modelViewMatrix",k.modelViewMatrix),Re.setValue(D,"normalMatrix",k.normalMatrix),Re.setValue(D,"modelMatrix",k.matrixWorld),G.uniformsGroups!==void 0){let Ne=G.uniformsGroups;for(let $i=0,js=Ne.length;$i<js;$i++){let Xd=Ne[$i];ot.update(Xd,Yn),ot.bind(Xd,Yn)}}return Yn}function r0(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function a0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(E,F,q){let G=V.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),V.get(E.texture).__webglTexture=F,V.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let q=V.get(E);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,q=0){at=E,X=F,W=q;let G=null,k=!1,wt=!1;if(E){let Tt=V.get(E);if(Tt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(D.FRAMEBUFFER,Tt.__webglFramebuffer),et.copy(E.viewport),Ft.copy(E.scissor),Rt=E.scissorTest,y.viewport(et),y.scissor(Ft),y.setScissorTest(Rt),Y=-1;return}else if(Tt.__webglFramebuffer===void 0)J.setupRenderTarget(E);else if(Tt.__hasExternalTextures)J.rebindTextures(E,V.get(E.texture).__webglTexture,V.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let re=E.depthTexture;if(Tt.__boundDepthTexture!==re){if(re!==null&&V.has(re)&&(E.width!==re.image.width||E.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(E)}}let Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(wt=!0);let Gt=V.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[F])?G=Gt[F][q]:G=Gt[F],k=!0):E.samples>0&&J.useMultisampledRTT(E)===!1?G=V.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?G=Gt[q]:G=Gt,et.copy(E.viewport),Ft.copy(E.scissor),Rt=E.scissorTest}else et.copy(At).multiplyScalar(st).floor(),Ft.copy(Zt).multiplyScalar(st).floor(),Rt=Se;if(q!==0&&(G=z),y.bindFramebuffer(D.FRAMEBUFFER,G)&&y.drawBuffers(E,G),y.viewport(et),y.scissor(Ft),y.setScissorTest(Rt),k){let Tt=V.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Tt.__webglTexture,q)}else if(wt){let Tt=F;for(let Nt=0;Nt<E.textures.length;Nt++){let Gt=V.get(E.textures[Nt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Nt,Gt.__webglTexture,q,Tt)}}else if(E!==null&&q!==0){let Tt=V.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Tt.__webglTexture,q)}Y=-1};function Wd(E){let F=V.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=C.textureFormatReadable(E.format),F.__typeReadable=C.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,q,G,k,wt,Pt,Tt=0){if(!(E&&E.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){y.bindFramebuffer(D.FRAMEBUFFER,Nt);try{let Gt=E.textures[Tt],re=Gt.format,he=Gt.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Tt);let Ut=Wd(Gt);if(Ut.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-G&&q>=0&&q<=E.height-k&&D.readPixels(F,q,G,k,xt.convert(re),xt.convert(he),wt)}finally{let Gt=at!==null?V.get(at).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(E,F,q,G,k,wt,Pt,Tt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt)if(F>=0&&F<=E.width-G&&q>=0&&q<=E.height-k){y.bindFramebuffer(D.FRAMEBUFFER,Nt);let Gt=E.textures[Tt],re=Gt.format,he=Gt.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Tt);let Ut=Wd(Gt);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let we=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.bufferData(D.PIXEL_PACK_BUFFER,wt.byteLength,D.STREAM_READ),D.readPixels(F,q,G,k,xt.convert(re),xt.convert(he),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let en=at!==null?V.get(at).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,en);let Fe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await up(D,Fe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,wt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(we),D.deleteSync(Fe),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,q=0){let G=Math.pow(2,-q),k=Math.floor(E.image.width*G),wt=Math.floor(E.image.height*G),Pt=F!==null?F.x:0,Tt=F!==null?F.y:0;J.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Pt,Tt,k,wt),y.unbindTexture()},this.copyTextureToTexture=function(E,F,q=null,G=null,k=0,wt=0){let Pt,Tt,Nt,Gt,re,he,Ut,we,en,Fe=E.isCompressedTexture?E.mipmaps[wt]:E.image;if(q!==null)Pt=q.max.x-q.min.x,Tt=q.max.y-q.min.y,Nt=q.isBox3?q.max.z-q.min.z:1,Gt=q.min.x,re=q.min.y,he=q.isBox3?q.min.z:0;else{let je=Math.pow(2,-k);Pt=Math.floor(Fe.width*je),Tt=Math.floor(Fe.height*je),E.isDataArrayTexture?Nt=Fe.depth:E.isData3DTexture?Nt=Math.floor(Fe.depth*je):Nt=1,Gt=0,re=0,he=0}G!==null?(Ut=G.x,we=G.y,en=G.z):(Ut=0,we=0,en=0);let Le=xt.convert(F.format),En=xt.convert(F.type),It;F.isData3DTexture?(J.setTexture3D(F,0),It=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(J.setTexture2DArray(F,0),It=D.TEXTURE_2D_ARRAY):(J.setTexture2D(F,0),It=D.TEXTURE_2D),y.activeTexture(D.TEXTURE0),y.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),y.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),y.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let Rn=y.getParameter(D.UNPACK_ROW_LENGTH),_e=y.getParameter(D.UNPACK_IMAGE_HEIGHT),Yn=y.getParameter(D.UNPACK_SKIP_PIXELS),gi=y.getParameter(D.UNPACK_SKIP_ROWS),Zi=y.getParameter(D.UNPACK_SKIP_IMAGES);y.pixelStorei(D.UNPACK_ROW_LENGTH,Fe.width),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Fe.height),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Gt),y.pixelStorei(D.UNPACK_SKIP_ROWS,re),y.pixelStorei(D.UNPACK_SKIP_IMAGES,he);let Ks=E.isDataArrayTexture||E.isData3DTexture,Re=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let je=V.get(E),Ji=V.get(F),Ne=V.get(je.__renderTarget),$i=V.get(Ji.__renderTarget);y.bindFramebuffer(D.READ_FRAMEBUFFER,Ne.__webglFramebuffer),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let js=0;js<Nt;js++)Ks&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(E).__webglTexture,k,he+js),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(F).__webglTexture,wt,en+js)),D.blitFramebuffer(Gt,re,Pt,Tt,Ut,we,Pt,Tt,D.DEPTH_BUFFER_BIT,D.NEAREST);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||V.has(E)){let je=V.get(E),Ji=V.get(F);y.bindFramebuffer(D.READ_FRAMEBUFFER,L),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let Ne=0;Ne<Nt;Ne++)Ks?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,je.__webglTexture,k,he+Ne):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,je.__webglTexture,k),Re?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ji.__webglTexture,wt,en+Ne):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ji.__webglTexture,wt),k!==0?D.blitFramebuffer(Gt,re,Pt,Tt,Ut,we,Pt,Tt,D.COLOR_BUFFER_BIT,D.NEAREST):Re?D.copyTexSubImage3D(It,wt,Ut,we,en+Ne,Gt,re,Pt,Tt):D.copyTexSubImage2D(It,wt,Ut,we,Gt,re,Pt,Tt);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Re?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(It,wt,Ut,we,en,Pt,Tt,Nt,Le,En,Fe.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(It,wt,Ut,we,en,Pt,Tt,Nt,Le,Fe.data):D.texSubImage3D(It,wt,Ut,we,en,Pt,Tt,Nt,Le,En,Fe):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,wt,Ut,we,Pt,Tt,Le,En,Fe.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,wt,Ut,we,Fe.width,Fe.height,Le,Fe.data):D.texSubImage2D(D.TEXTURE_2D,wt,Ut,we,Pt,Tt,Le,En,Fe);y.pixelStorei(D.UNPACK_ROW_LENGTH,Rn),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Yn),y.pixelStorei(D.UNPACK_SKIP_ROWS,gi),y.pixelStorei(D.UNPACK_SKIP_IMAGES,Zi),wt===0&&F.generateMipmaps&&D.generateMipmap(It),y.unbindTexture()},this.initRenderTarget=function(E){V.get(E).__webglFramebuffer===void 0&&J.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?J.setTextureCube(E,0):E.isData3DTexture?J.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?J.setTexture2DArray(E,0):J.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){X=0,W=0,at=null,y.reset(),Et.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var $u=(i,t,e)=>Math.max(t,Math.min(e,i)),Ri=[293.66,329.63,349.23,440,466.16,587.33,659.25,698.46,880,932.33],ze=(i,t)=>i+Math.random()*(t-i),Ve={on:!0,resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},setOn(i){this.on=i,this.ctx&&this.mute(!i)},rain(i){this.setRain(i?1:0)},update(){},scrub(){},chime(){this.discover()},lantern(i){if(!this.ok())return;let t=this.ctx.currentTime;this.pluck(Ri[3+(Math.random()*4|0)],.1,t,(i||0)*3,-2),this.bell(Ri[6+(Math.random()*3|0)],t+.2,.05,!1,(i||0)*3,-3)},plop(i){if(!this.ok())return;let t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain(),r=this.dest((i||0)*4,-3);n.frequency.setValueAtTime(520,e),n.frequency.exponentialRampToValueAtTime(190,e+.12),s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.03,e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+.22),n.connect(s),s.connect(r),n.start(e),n.stop(e+.25)},ctx:null,master:null,bus:null,nbuf:null,muted:!1,idx:3,init(){if(!this.ctx)try{let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let t=new i;this.ctx=t;let e=t.createGain();e.gain.value=this.muted?0:.6,e.connect(t.destination),this.master=e;let n=t.createGain();n.gain.value=1,n.connect(e),this.bus=n;let s=t.createBuffer(1,t.sampleRate*2,t.sampleRate),r=s.getChannelData(0);for(let T=0;T<r.length;T++)r[T]=Math.random()*2-1;this.nbuf=s;let a=Math.floor(t.sampleRate*2.8),o=t.createBuffer(2,a,t.sampleRate);for(let T=0;T<2;T++){let A=o.getChannelData(T);for(let P=0;P<a;P++)A[P]=(Math.random()*2-1)*Math.pow(1-P/a,2.6)}let l=t.createConvolver();l.buffer=o;let c=t.createGain();c.gain.value=.38,n.connect(l),l.connect(c),c.connect(e);let h=this.noise(),d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=650;let u=t.createGain();u.gain.value=.07;let p=t.createOscillator();p.frequency.value=.09;let g=t.createGain();g.gain.value=.04,p.connect(g),g.connect(u.gain),p.start(),h.connect(d),d.connect(u),u.connect(e);let x=this.noise(),f=t.createBiquadFilter();f.type="bandpass",f.frequency.value=2200,f.Q.value=.7;let m=t.createGain();m.gain.value=.02,x.connect(f),f.connect(m),m.connect(e),this.bk={},this.bkx={"-1":-4,1:4},[-1,1].forEach(T=>{let A=this.panner(T*4,0,0,2,.6);A.connect(e),this.bk[T]=A,[[520,2,.7,.05],[1250,3,1.3,.03],[2600,4,2.1,.014]].forEach(([P,N,z,L],B)=>{let X=this.noise(Math.random()*1.8),W=t.createBiquadFilter();W.type="bandpass",W.frequency.value=P,W.Q.value=N;let at=t.createGain();at.gain.value=L;let Y=t.createOscillator(),nt=t.createGain();Y.frequency.value=z*(T>0?1.13:.91),nt.gain.value=L*.7,Y.connect(nt),nt.connect(at.gain),Y.start(),X.connect(W),W.connect(at),at.connect(A)})});let M=()=>{if(this.ctx){if(this.ok()&&Math.random()<.75){let T=Math.random()*(Math.abs(this.bkx[-1])+Math.abs(this.bkx[1]))<Math.abs(this.bkx[1])?-1:1,A=t.currentTime,P=t.createOscillator(),N=t.createGain(),z=ze(450,1100),L=this.panner(this.bkx[T],0,ze(-4,2),2,.6,!0);L.connect(e),P.frequency.setValueAtTime(z,A),P.frequency.exponentialRampToValueAtTime(z*ze(1.4,2),A+.07),N.gain.setValueAtTime(0,A),N.gain.linearRampToValueAtTime(ze(.01,.026),A+.012),N.gain.exponentialRampToValueAtTime(1e-4,A+.1),P.connect(N),N.connect(L),P.start(A),P.stop(A+.12)}setTimeout(M,ze(90,260))}};M();let w=this.noise(Math.random()*1.5),v=t.createBiquadFilter();v.type="highpass",v.frequency.value=380;let b=t.createBiquadFilter();b.type="lowpass",b.frequency.value=4200;let S=t.createGain();S.gain.value=0;let R=this.panner(0,0,-30,2,.5);w.connect(v),v.connect(b),b.connect(S),S.connect(R),R.connect(e),this.wfG=S,this.wfP=R,this.rgs=[],[[-.75,3200],[.75,3600]].forEach(([T,A])=>{let P=t.createStereoPanner();P.pan.value=T,P.connect(e);let N=this.noise(Math.random()*1.8),z=t.createBiquadFilter();z.type="highpass",z.frequency.value=A;let L=t.createGain();L.gain.value=0,N.connect(z),z.connect(L),L.connect(P),this.rgs.push([L,.07]);let B=this.noise(Math.random()*1.8),X=t.createBiquadFilter();X.type="bandpass",X.frequency.value=1500,X.Q.value=.6;let W=t.createGain();W.gain.value=0,B.connect(X),X.connect(W),W.connect(P),this.rgs.push([W,.035])}),this.rainLvl=0;let _=()=>{if(this.ctx){if(this.ok()&&this.rainLvl>.2){let T=t.currentTime,A=t.createOscillator(),P=t.createGain(),N=this.panner(ze(-4,4),ze(0,1),ze(-4,1),1.5,.7,!0);N.connect(e),A.frequency.setValueAtTime(ze(1800,3200),T),A.frequency.exponentialRampToValueAtTime(ze(900,1400),T+.05),P.gain.setValueAtTime(0,T),P.gain.linearRampToValueAtTime(.02*this.rainLvl,T+.004),P.gain.exponentialRampToValueAtTime(1e-4,T+.07),A.connect(P),P.connect(N),A.start(T),A.stop(T+.09)}setTimeout(_,ze(70,260))}};_(),this.music()}catch{this.ctx=null}},setRain(i){if(!this.rgs)return;this.rainLvl=i;let t=this.ctx.currentTime;this.rgs.forEach(([e,n])=>e.gain.setTargetAtTime(i*n,t,.6))},ok(){return this.ctx&&this.ctx.state==="running"},breathTone(i,t){if(!this.ok())return;let e=this.ctx,n=e.currentTime;[[1,.05],[1.5,.022]].forEach(([s,r])=>{let a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.setValueAtTime((i?196:262)*s,n),a.frequency.linearRampToValueAtTime((i?262:196)*s,n+t),i?(o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(r,n+t)):(o.gain.setValueAtTime(r,n),o.gain.linearRampToValueAtTime(0,n+t)),a.connect(o),o.connect(this.bus),a.start(n),a.stop(n+t+.1)})},noise(i){let t=this.ctx,e=t.createBufferSource();return e.buffer=this.nbuf,e.loop=!0,e.start(0,i||0),e},panner(i,t,e,n,s,r){let a=this.ctx.createPanner();return a.panningModel="HRTF",a.distanceModel="inverse",a.refDistance=n||2,a.rolloffFactor=s==null?.6:s,a.positionX?(a.positionX.value=i,a.positionY.value=t,a.positionZ.value=e):a.setPosition(i,t,e),a},setPos(i,t,e,n){if(i.positionX){let s=this.ctx.currentTime;i.positionX.setTargetAtTime(t,s,.2),i.positionY.setTargetAtTime(e,s,.2),i.positionZ.setTargetAtTime(n,s,.2)}else i.setPosition(t,e,n)},dest(i,t){if(i==null)return this.bus;let e=this.panner(i,0,t==null?-1.5:t,2,.6);return e.connect(this.bus),e},space(i,t,e){if(!this.ctx)return;let n=Math.max(.9,(t+i)/40),s=Math.max(.9,(t-i)/40);if(this.bkx[-1]=-n,this.bkx[1]=s,this.setPos(this.bk[-1],-n,0,0),this.setPos(this.bk[1],s,0,0),e==null||e<-300)this.wfG.gain.setTargetAtTime(0,this.ctx.currentTime,.4);else{let r=Math.max(0,Math.min(1,1-Math.abs(e)/1500));this.wfG.gain.setTargetAtTime(.34*Math.pow(r,1.5),this.ctx.currentTime,.4),this.setPos(this.wfP,-i/40,0,-e/40)}},pluck(i,t,e,n,s){if(!this.ok())return;let r=this.ctx,a=e||r.currentTime,o=this.dest(n,s);[[1,1],[2,.25],[3.01,.1]].forEach(([l,c],h)=>{let d=r.createOscillator(),u=r.createGain();d.type=h?"sine":"triangle",d.frequency.value=i*l,u.gain.setValueAtTime(0,a),u.gain.linearRampToValueAtTime(t*c,a+.01),u.gain.exponentialRampToValueAtTime(1e-4,a+(h?1.1:2)),d.connect(u),u.connect(o),d.start(a),d.stop(a+2.1)})},flute(i,t,e,n,s,r){if(!this.ok())return;let a=this.ctx,o=this.dest(s,r),l=a.createOscillator(),c=a.createOscillator(),h=a.createGain(),d=a.createGain();l.type="sine",c.type="triangle",l.frequency.setValueAtTime(i*.96,t),l.frequency.exponentialRampToValueAtTime(i,t+.18),c.frequency.setValueAtTime(i*2*.96,t),c.frequency.exponentialRampToValueAtTime(i*2,t+.18);let u=a.createOscillator(),p=a.createGain();u.frequency.value=4.8,p.gain.setValueAtTime(0,t),p.gain.linearRampToValueAtTime(i*.012,t+e*.6),u.connect(p),p.connect(l.frequency),u.start(t),u.stop(t+e+.5),d.gain.value=.1,c.connect(d),d.connect(h),l.connect(h),h.gain.setValueAtTime(0,t),h.gain.linearRampToValueAtTime(n,t+.35),h.gain.setValueAtTime(n*.85,t+e*.7),h.gain.linearRampToValueAtTime(0,t+e);let g=a.createBufferSource();g.buffer=this.nbuf,g.loop=!0;let x=a.createBiquadFilter();x.type="bandpass",x.frequency.value=i*2,x.Q.value=4;let f=a.createGain();f.gain.setValueAtTime(0,t),f.gain.linearRampToValueAtTime(n*.5,t+.2),f.gain.linearRampToValueAtTime(0,t+e),g.connect(x),x.connect(f),f.connect(o),g.start(t),g.stop(t+e+.1),h.connect(o),l.start(t),c.start(t),l.stop(t+e+.1),c.stop(t+e+.1)},drum(i,t,e){if(!this.ok())return;let n=this.ctx,s=n.createOscillator(),r=n.createGain();s.type="sine",s.frequency.setValueAtTime(115*e,i),s.frequency.exponentialRampToValueAtTime(48*e,i+.28),r.gain.setValueAtTime(t,i),r.gain.exponentialRampToValueAtTime(1e-4,i+.9),s.connect(r),r.connect(this.bus),s.start(i),s.stop(i+1);let a=n.createBufferSource();a.buffer=this.nbuf;let o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=500;let l=n.createGain();l.gain.setValueAtTime(t*.5,i),l.gain.exponentialRampToValueAtTime(1e-4,i+.1),a.connect(o),o.connect(l),l.connect(this.bus),a.start(i,Math.random()),a.stop(i+.15)},bell(i,t,e,n,s,r){if(!this.ok())return;let a=this.ctx,o=this.dest(s,r);[[1,1,1],[2.01,.3,.6],[2.76,.22,.4],[5.4,.08,.2]].forEach(([l,c,h])=>{let d=a.createOscillator(),u=a.createGain();d.type="sine",d.frequency.value=i*l;let p=(n?7:3)*h;u.gain.setValueAtTime(0,t),u.gain.linearRampToValueAtTime(e*c,t+.005),u.gain.exponentialRampToValueAtTime(1e-4,t+p),d.connect(u),u.connect(o),d.start(t),d.stop(t+p+.1)})},next(i,t,e){this.idx=$u(this.idx+Math.floor(Math.random()*4)-1,3,Ri.length-1),this.bell(Ri[this.idx]*(Math.random()<.5?1:2),this.ctx?this.ctx.currentTime:0,i*.9,!1,t,e)},paddle(i){if(!this.ok())return;let t=this.ctx,e=this.panner((i||0)*1.1,-.3,-.4,1.5,.8);e.connect(this.master);let n=t.createBufferSource();n.buffer=this.nbuf;let s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=900+Math.random()*500,s.Q.value=.9;let r=t.createGain(),a=t.currentTime;r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.14,a+.05),r.gain.exponentialRampToValueAtTime(1e-4,a+.4),n.connect(s),s.connect(r),r.connect(e),n.start(a,Math.random()),n.stop(a+.45)},bump(i=.6,t=0){if(!this.ok())return;let e=this.ctx,n=e.currentTime,s=this.panner((t||0)*1.3,-.3,0,1.5,.8);s.connect(this.master);let r=e.createOscillator(),a=e.createGain();r.frequency.setValueAtTime(140,n),r.frequency.exponentialRampToValueAtTime(70,n+.2),a.gain.setValueAtTime(.16*i,n),a.gain.exponentialRampToValueAtTime(1e-4,n+.3),r.connect(a),a.connect(s),r.start(n),r.stop(n+.35)},discover(){if(!this.ok())return;let i=this.ctx.currentTime;[0,3,5,6].forEach((t,e)=>this.pluck(Ri[t],.12,i+e*.2)),this.bell(Ri[8],i+.9,.07)},music(){let i=this.ctx;[[73.42,.03],[110,.02],[146.83,.012]].forEach(([l,c],h)=>{let d=i.createOscillator(),u=i.createGain(),p=i.createOscillator(),g=i.createGain();d.type="sine",d.frequency.value=l,u.gain.value=c,p.frequency.value=.05+h*.03,g.gain.value=c*.6,p.connect(g),g.connect(u.gain),d.connect(u),u.connect(this.bus),d.start(),p.start()});let t=0,e=()=>{if(this.ctx){if(this.ok()){let l=i.currentTime+.05,c=t%8;(t>>3)%4===3?c===0&&this.drum(l,.12,.9):c===0?this.drum(l,.34,1):c===3?this.drum(l,.12,1.35):c===5?this.drum(l,.16,1.15):c===6&&Math.random()<.4&&this.drum(l,.09,1.45),t++}setTimeout(e,950)}};setTimeout(e,3e3);let n=3,s=()=>{if(!this.ctx)return;let l=i.currentTime+.2,c=0;if(this.ok()){let h=2+Math.floor(Math.random()*3),d=ze(-3,3);for(let u=0;u<h;u++){n=$u(n+Math.floor(Math.random()*5)-2,0,7);let p=ze(1.8,3.4);this.flute(Ri[n],l,p,.06,d+ze(-.3,.3),-2.5),l+=p*.88,c+=p*.88}}setTimeout(s,(c+ze(6,11))*1e3)};setTimeout(s,5e3);let r=()=>{if(this.ctx){if(this.ok()){let l=i.currentTime+.05,c=Ri[5+Math.floor(Math.random()*5)];this.bell(c,l,.045,!1,ze(-5,5),ze(-5,-1)),Math.random()<.5&&this.bell(Ri[5+Math.floor(Math.random()*5)],l+ze(.18,.4),.035,!1,ze(-5,5),ze(-5,-1))}setTimeout(r,ze(3500,8e3))}};setTimeout(r,2500);let a=()=>{if(this.ctx){if(this.ok()){let l=i.currentTime+.05,c=Math.floor(Math.random()*6),h=ze(-4,4);for(let d=0;d<3;d++)this.pluck(Ri[$u(c+[0,2,1][d],0,9)],.06,l+d*.28,h,-2)}setTimeout(a,ze(14e3,24e3))}};setTimeout(a,9e3);let o=()=>{this.ctx&&(this.ok()&&this.bell(146.83,i.currentTime+.05,.08,!0,ze(-6,6),-8),setTimeout(o,ze(35e3,55e3)))};setTimeout(o,16e3)},mute(i){this.muted=i,this.master&&this.master.gain.setTargetAtTime(i?0:.6,this.ctx.currentTime,.05)}};function cM(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var $p={};function hM(i){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),s=cM(i.length*97+i.charCodeAt(0)),r=(o,l)=>`rgba(${o},${o},${o},${l})`;if(n.fillStyle="#e9e4de",n.fillRect(0,0,256,256),i==="wood"||i==="woodV"){let o=i==="woodV";for(let l=0;l<150;l++){let c=s()*256,h=40+s()*160,d=s()*256,u=.6+s()*1.8;n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.05+s()*.12)+")":"rgba(255,248,238,"+(.05+s()*.1)+")",n.lineWidth=u,n.beginPath(),o?(n.moveTo(c,d),n.bezierCurveTo(c+4,d+h*.3,c-4,d+h*.7,c+2,d+h)):(n.moveTo(d,c),n.bezierCurveTo(d+h*.3,c+4,d+h*.7,c-4,d+h,c+2)),n.stroke()}for(let l=0;l<3;l++){let c=s()*256,h=s()*256;n.strokeStyle="rgba(80,55,40,.22)",n.lineWidth=1.2;for(let d=1;d<4;d++)n.beginPath(),n.ellipse(c,h,d*3.5,d*2.2,o?1.57:0,0,7),n.stroke()}n.strokeStyle="rgba(70,50,40,.18)",n.lineWidth=2,n.beginPath(),o?(n.moveTo(0,0),n.lineTo(0,256)):(n.moveTo(0,0),n.lineTo(256,0)),n.stroke()}else if(i==="stone"){n.fillStyle="#8b86a0",n.fillRect(0,0,256,256);let o=4;for(let l=0;l<o;l++){let c=-(s()*40),h=256/o;for(;c<256;){let d=38+s()*50,u=190+s()*55|0;n.fillStyle=`rgb(${u},${u-3},${u+8})`,n.beginPath(),n.roundRect?n.roundRect(c+3,l*h+3,d-6,h-6,10):n.rect(c+3,l*h+3,d-6,h-6),n.fill(),n.fillStyle="rgba(255,255,255,.18)",n.fillRect(c+9,l*h+7,d-24,3);for(let p=0;p<14;p++)n.fillStyle=r(120,.08),n.fillRect(c+6+s()*(d-12),l*h+6+s()*(h-12),2,2);c+=d}}}else if(i==="shingle"){n.fillStyle="#b8aea6",n.fillRect(0,0,256,256);let o=6,l=256/o;for(let c=0;c<o;c++){let h=c%2*22;for(let d=-22;d<278;d+=44){let u=196+s()*50|0;n.fillStyle=`rgb(${u},${u-6},${u-8})`,n.beginPath(),n.moveTo(d+h+2,c*l),n.lineTo(d+h+42,c*l),n.lineTo(d+h+42,c*l+l*.55),n.quadraticCurveTo(d+h+22,c*l+l*1.15,d+h+2,c*l+l*.55),n.closePath(),n.fill(),n.strokeStyle="rgba(60,40,40,.28)",n.lineWidth=1.5,n.stroke(),n.fillStyle="rgba(255,255,255,.2)",n.fillRect(d+h+8,c*l+3,26,3)}}}else if(i==="rock"){n.fillStyle="#d4d0dc",n.fillRect(0,0,256,256);for(let o=0;o<60;o++){let l=s()*256,c=s()*256,h=10+s()*40,d=170+s()*70|0;n.fillStyle=`rgba(${d},${d-4},${d+10},.35)`,n.beginPath(),n.ellipse(l,c,h,h*.6,s()*3,0,7),n.fill()}for(let o=0;o<30;o++){n.strokeStyle="rgba(50,45,80,"+(.12+s()*.2)+")",n.lineWidth=1+s()*2,n.beginPath();let l=s()*256,c=s()*256;n.moveTo(l,c);for(let h=0;h<4;h++)l+=s()*40-20,c+=s()*30,n.lineTo(l,c);n.stroke()}}else if(i==="grass"){n.fillStyle="#e8efe0",n.fillRect(0,0,256,256);for(let o=0;o<900;o++){let l=s()*256,c=s()*256,h=s()>.5?"rgba(120,170,110,":"rgba(255,255,220,";n.strokeStyle=h+(.08+s()*.2)+")",n.lineWidth=1,n.beginPath(),n.moveTo(l,c),n.lineTo(l+s()*4-2,c-3-s()*7),n.stroke()}for(let o=0;o<20;o++)n.fillStyle="rgba(255,255,255,.3)",n.beginPath(),n.arc(s()*256,s()*256,1.5+s()*1.5,0,7),n.fill()}else if(i==="bark"){n.fillStyle="#d9cfc6",n.fillRect(0,0,256,256);for(let o=0;o<70;o++){let l=s()*256;n.strokeStyle="rgba(60,45,40,"+(.12+s()*.25)+")",n.lineWidth=1+s()*3,n.beginPath(),n.moveTo(l,0),n.bezierCurveTo(l+8,256*.3,l-8,256*.6,l+3,256),n.stroke()}}else if(i==="leaf"){n.fillStyle="#ecebe4",n.fillRect(0,0,256,256);for(let o=0;o<260;o++){let l=s()*256,c=s()*256,h=6+s()*14,d=s()>.45?215+s()*40|0:120+s()*60|0;for(let u of[-256,0,256])for(let p of[-256,0,256])l+u<-30||l+u>286||c+p<-30||c+p>286||(n.fillStyle=`rgba(${d},${d},${d-6},${.35+s()*.4})`,n.beginPath(),n.ellipse(l+u,c+p,h,h*.62,s()*3.14,0,7),n.fill())}for(let o=0;o<120;o++){let l=s()*256,c=s()*256;n.fillStyle="rgba(70,80,60,.28)",n.beginPath(),n.ellipse(l,c+9,9,4,0,0,7),n.fill(),n.fillStyle="rgba(255,255,235,.5)",n.beginPath(),n.ellipse(l-1,c-3,6,2.4,-.5,0,7),n.fill()}}else if(i==="cloth"){n.fillStyle="#e6e6e8",n.fillRect(0,0,256,256);for(let o=0;o<256;o+=4)n.fillStyle="rgba(90,95,110,"+(.07+s()*.06)+")",n.fillRect(o,0,1.6,256),n.fillStyle="rgba(255,255,255,"+(.1+s()*.08)+")",n.fillRect(0,o,256,1.6);for(let o=0;o<9;o++){let l=s()*256,c=s()*256;n.strokeStyle="rgba(60,65,85,.2)",n.lineWidth=2.5,n.beginPath(),n.moveTo(l,c),n.bezierCurveTo(l+20,c+30,l-18,c+60,l+6,c+95),n.stroke(),n.strokeStyle="rgba(255,255,255,.22)",n.lineWidth=2,n.beginPath(),n.moveTo(l+4,c),n.bezierCurveTo(l+24,c+30,l-14,c+60,l+10,c+95),n.stroke()}for(let o=0;o<5;o++)n.fillStyle="rgba(70,75,95,.25)",n.fillRect(s()*256,s()*256,10+s()*10,1.5)}else if(i==="straw"){n.fillStyle="#e8e0cc",n.fillRect(0,0,256,256);for(let o=-256;o<256*2;o+=7)n.strokeStyle="rgba(120,90,40,"+(.18+s()*.2)+")",n.lineWidth=2,n.beginPath(),n.moveTo(o,0),n.lineTo(o+256,256),n.stroke(),n.strokeStyle="rgba(255,250,225,"+(.25+s()*.2)+")",n.beginPath(),n.moveTo(o+3,0),n.lineTo(o+3-256,256),n.stroke();for(let o=0;o<256;o+=7)n.strokeStyle="rgba(110,80,35,.22)",n.lineWidth=1.5,n.beginPath(),n.moveTo(o,0),n.lineTo(o,256),n.stroke()}else if(i==="plank"){n.fillStyle="#e9e0d6",n.fillRect(0,0,256,256);let o=5,l=256/o;for(let c=0;c<o;c++){let h=c*l;n.fillStyle="rgba("+(200+s()*40|0)+","+(190+s()*30|0)+",175,.45)",n.fillRect(0,h,256,l);for(let d=0;d<22;d++){let u=h+3+s()*(l-6);n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.1+s()*.14)+")":"rgba(255,248,238,.18)",n.lineWidth=.8+s()*1.5,n.beginPath(),n.moveTo(s()*60,u),n.bezierCurveTo(80,u+3,160,u-3,256,u+1),n.stroke()}n.fillStyle="rgba(60,42,32,.55)",n.fillRect(0,h,256,2.5);for(let d of[18,238])n.fillStyle="rgba(50,40,36,.55)",n.beginPath(),n.arc(d,h+l/2,2.2,0,7),n.fill()}}else if(i==="needle"){n.fillStyle="#d7dbd2",n.fillRect(0,0,256,256);for(let o=0;o<8;o++){let l=o*256/8;for(let c=-10;c<266;c+=14){let h=c+o%2*7+s()*3,d=18+s()*10,u=s()>.5?235:130+s()*50|0;n.strokeStyle=`rgba(${u},${u},${u-10},${.45+s()*.4})`,n.lineWidth=2+s()*2,n.lineCap="round",n.beginPath(),n.moveTo(h,l),n.lineTo(h+s()*8-4,l+d),n.stroke()}n.strokeStyle="rgba(50,70,50,.3)",n.lineWidth=3,n.beginPath(),n.moveTo(0,l+256/8-2),n.lineTo(256,l+256/8-2),n.stroke()}}let a=new Gi(e);return a.wrapS=a.wrapT=vr,a.colorSpace=vn,a.anisotropy=4,a}var He=i=>$p[i]||($p[i]=hM(i)),We=(()=>{let i=new Uint8Array([112,160,208,255]),t=new Ds(i,4,1,Fr);return t.minFilter=t.magFilter=sn,t.generateMipmaps=!1,t.needsUpdate=!0,t})();function Kp(){let i=document.createElement("div");i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:4;background:radial-gradient(ellipse at 50% 45%,rgba(0,0,0,0) 55%,rgba(24,20,56,.5) 100%)",document.body.appendChild(i)}function jp(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,256,256);for(let n=0;n<5200;n++){let s=200+Math.random()*55|0;t.fillStyle=`rgba(${s-30},${s-34},${s-44},${Math.random()*.35})`,t.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}for(let n=0;n<60;n++){t.strokeStyle="rgba(120,110,100,.06)",t.lineWidth=1,t.beginPath();let s=Math.random()*256,r=Math.random()*256;t.moveTo(s,r),t.lineTo(s+Math.random()*60-30,r+Math.random()*60-30),t.stroke()}let e=document.createElement("div");e.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3;mix-blend-mode:multiply;opacity:.38;background:url("+i.toDataURL()+");background-size:256px",document.body.appendChild(e)}function Ku(){let i=null;try{i=localStorage.getItem("rio3d-season")}catch{}if(i!==null&&i!==""&&i!=="auto"&&+i>=0&&+i<4)return+i;let t=new Date().getMonth();return t===11||t<=1?3:t<=4?0:t<=7?1:2}var ju=[{name:"Primavera",lm3:"Jard\xEDn de sakura",lm3c:15773373,pine:["#79b595","#8cc4a0","#6fa98f","#9bcfa9"],blos:["#f7c6d6","#f4b7cb","#fbd6e1","#f2c2e0"],bblos:["#f4b7cb","#f7c6d6","#eea5bf","#fbd6e1"],brd:["#8fbf86","#7aae7e","#d9694a","#e39a4a","#e8c35a","#a8c97a","#c9573f"],gnd:"#b6dca3",gk:0,pet:{c:16762578,size:.42,fall:1,base:.12,gain:.88}},{name:"Verano",lm3:"Jard\xEDn de hortensias",lm3c:10135782,pine:["#5fa383","#6fb593","#559a7e","#7cc09d"],blos:["#9aa8e6","#8c9ae0","#b3a2e8","#7f93d8"],bblos:["#9aa8e6","#b3a2e8","#8c9ae0","#a7b6ee"],brd:["#6fae74","#5f9f6a","#7cbc7a","#4f9468","#88c27f","#6aa878","#58a070"],gnd:"#9fd08a",gk:.18,pet:{c:16777215,size:.3,fall:1,base:0,gain:0}},{name:"Oto\xF1o",lm3:"Jard\xEDn de arces",lm3c:14243642,pine:["#6fa386","#80b496","#659a80","#8cc09d"],blos:["#d94a32","#e8702e","#f2a33a","#c43d2c"],bblos:["#d9573a","#e8803a","#f0b43a","#c9462f"],brd:["#d9533a","#e8802f","#f0b43a","#c9462f","#b8532f","#e39a4a","#cf6a3a"],gnd:"#d3a45f",gk:.32,pet:{c:15237178,size:.55,fall:1.35,base:.3,gain:.7}},{name:"Invierno",lm3:"Jard\xEDn de ciruelos",lm3c:15913950,pine:["#a9c4b8","#b9d3c6","#9dbaae","#c4dccf"],blos:["#f6e3ea","#f2d3de","#fbeff3","#efc9d8"],bblos:["#f6e3ea","#fbeff3","#efc9d8","#f2d3de"],brd:["#cfd8d6","#b9c4c2","#a8b4b3","#dfe6e4","#9fa9a8","#c4cdcb","#b0bbb9"],gnd:"#eef3f8",gk:.62,pet:{c:16777215,size:.28,fall:1.1,base:.55,gain:.45}}];function Qp(i){let{R:t,scene:e,cam:n,canvas:s,el:r,toast:a,P:o,LM:l,lmFound:c,lmPos:h,LMS:d,mkLantern:u,cx:p,hw:g,A:x,SEAS:f,seasonIdx:m}=i,M={photo:!1,want:null},w={get(it,St){try{let ne=localStorage.getItem(it);return ne===null?St:ne}catch{return St}},set(it,St){try{return localStorage.setItem(it,St),!0}catch{return!1}},del(it){try{localStorage.removeItem(it)}catch{}}},v=f[m()],b=document.createElement("style");b.textContent=`
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
  #lantB{position:fixed;right:max(14px,env(safe-area-inset-right));bottom:calc(58px + env(safe-area-inset-bottom));z-index:6;background:var(--panel);border:1px solid var(--lamp);color:var(--lamp);border-radius:99px;padding:9px 16px;font:700 .85rem system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(6px)}
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
  `,document.head.appendChild(b);let S=Math.min(devicePixelRatio||1,2),R=[.7,.85,1,1.25,1.5],_=0;R.forEach((it,St)=>{it<=S+.001&&(_=St)});let T=w.get("rio3d-q","auto"),A=Math.min(_,3),P=_,N=1/60,z=0,L=5,B=0,X=0,W=0,at=0,Y={hi:1.5,mid:1,lo:.7},nt=()=>M.photo?Math.min(S,1.75):Math.min(T==="auto"?R[A]:Y[T]||1,S);function et(){let it=nt();Math.abs(it-at)>.01&&(at=it,t.setPixelRatio(it),t.setSize(innerWidth,innerHeight,!1),At())}M.tick=function(it){if(!(document.hidden||!i.started()||M.photo)&&(it=Math.min(it,.1),N+=(it-N)*.04,z+=it,!(z<1))){if(z=0,T!=="auto"){et();return}if(L>0){L--,at||et();return}N>.027?(X++,B=0):N<.0185?(B++,X=0):(B=0,X=0),X>=2&&A>0?(A--,X=0,L=6,W&&performance.now()-W<3e4&&(P=Math.min(P,A)),et()):B>=12&&A<Math.min(P,_)&&(A++,B=0,L=10,W=performance.now(),et())}};let Ft=()=>T==="auto"?"Auto (ahora "+Math.min(R[A],S).toFixed(2)+"\xD7)":"Fija",Rt={none:{n:"Sin filtro"},nat:{n:"Natural",t:[1,1,1],sat:1.06,con:1.04,lift:0,vig:.35,glow:.2,grain:0},warm:{n:"C\xE1lido",t:[1.1,1,.86],sat:1.12,con:1.05,lift:.02,vig:.4,glow:.3,grain:.02},mist:{n:"Bruma",t:[.97,1,1.04],sat:.92,con:.92,lift:.07,vig:.3,glow:.5,grain:.02},ink:{n:"Tinta",t:[1,.97,.9],sat:0,con:1.28,lift:.05,vig:.55,glow:.2,grain:.05},moon:{n:"Noche azul",t:[.74,.9,1.18],sat:.85,con:1.08,lift:0,vig:.5,glow:.55,grain:.03}},le=w.get("rio3d-filter","nat");Rt[le]||(le="nat");let ee=w.get("rio3d-frame","1")==="1",Kt=null,$=new Ps,st=new hs(-1,1,1,-1,0,1),yt=new Qe({depthTest:!1,depthWrite:!1,uniforms:{tex:{value:null},px:{value:new ht},tint:{value:new I(1,1,1)},sat:{value:1},con:{value:1},lift:{value:0},vig:{value:0},glow:{value:0},grain:{value:0},time:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tex;uniform vec2 px;uniform vec3 tint;uniform float sat,con,lift,vig,glow,grain,time;
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
    }`});$.add(new K(new rn(2,2),yt));let Bt=new ht;function At(){Kt&&(t.getDrawingBufferSize(Bt),(Kt.width!==Bt.x||Kt.height!==Bt.y)&&Kt.setSize(Bt.x,Bt.y))}function Zt(){if(Kt){At();return}t.getDrawingBufferSize(Bt);try{Kt=new Sn(Bt.x,Bt.y,{samples:4,type:Wn,depthBuffer:!0})}catch{Kt=new Sn(Bt.x,Bt.y,{samples:4,depthBuffer:!0})}}M.render=function(){let it=Rt[le];if(M.photo&&it.t){Zt(),t.setRenderTarget(Kt),t.render(e,n),t.setRenderTarget(null);let St=yt.uniforms;St.tex.value=Kt.texture,St.px.value.set(1/Kt.width,1/Kt.height),St.tint.value.set(it.t[0],it.t[1],it.t[2]),St.sat.value=it.sat,St.con.value=it.con,St.lift.value=it.lift,St.vig.value=it.vig,St.glow.value=it.glow,St.grain.value=it.grain,St.time.value=o.t%10,t.render($,st)}else t.render(e,n);if(M.want){let St=M.want;M.want=null;try{St()}catch(ne){console.error("want",ne&&ne.message)}}};let Se=new I(0,1,0),rt=new I(1,0,0),lt=new Mn,dt=new Mn,ut=0,pt=0,Lt=1,Ot=0,Vt=0,$t=1;M.camAdjust=function(){Ot+=(ut-Ot)*.25,Vt+=(pt-Vt)*.25,$t+=(Lt-$t)*.25,(Math.abs(Ot)>1e-4||Math.abs(Vt)>1e-4)&&(lt.setFromAxisAngle(Se,Ot),dt.setFromAxisAngle(rt,Vt),n.quaternion.premultiply(lt).multiply(dt)),Math.abs($t-1)>.001&&(n.fov=Math.max(18,Math.min(110,n.fov*$t)),n.updateProjectionMatrix())};let D=new Map,de=0;s.addEventListener("pointerdown",it=>{if(M.photo&&(s.setPointerCapture(it.pointerId),D.set(it.pointerId,[it.clientX,it.clientY]),D.size===2)){let St=[...D.values()];de=Math.hypot(St[0][0]-St[1][0],St[0][1]-St[1][1])}}),s.addEventListener("pointermove",it=>{if(!M.photo||!D.has(it.pointerId))return;let St=D.get(it.pointerId),ne=it.clientX-St[0],Te=it.clientY-St[1];if(St[0]=it.clientX,St[1]=it.clientY,D.size===1){let fe=.0045*Lt;ut-=ne*fe,pt=Math.max(-1.05,Math.min(1.05,pt-Te*fe))}else if(D.size===2){let fe=[...D.values()],ce=Math.hypot(fe[0][0]-fe[1][0],fe[0][1]-fe[1][1]);de>0&&(Lt=Math.max(.35,Math.min(1.35,Lt*de/ce))),de=ce,tt.value=Lt}});let se=it=>{D.delete(it.pointerId),de=0};s.addEventListener("pointerup",se),s.addEventListener("pointercancel",se),s.addEventListener("wheel",it=>{M.photo&&(Lt=Math.max(.35,Math.min(1.35,Lt*(1+Math.sign(it.deltaY)*.06))),tt.value=Lt,it.preventDefault())},{passive:!1});let C=r("hud"),y=(it,St)=>{let ne=document.createElement("button");return ne.id=it,ne.textContent=St,C.appendChild(ne),ne},H=y("photoB","Foto"),V=y("diaryB","Diario"),J=y("setB","Ajustes"),ct=document.createElement("div");ct.id="xph",ct.className="xp",ct.hidden=!0,ct.innerHTML=`<div class="fr" id="xfl"></div>
  <div class="fr"><label>Hora <input id="xhr" type="range" min="0" max="1" step=".002"></label><label>Zoom <input id="xzm" type="range" min=".35" max="1.35" step=".01"></label>
  <button class="chip2" id="xvw">Vista</button><button class="chip2" id="xfm">Marco</button></div>
  <button id="xshut" aria-label="Tomar foto"></button>`,document.body.appendChild(ct);let ft=document.createElement("button");ft.id="xclose",ft.textContent="Salir de foto",ft.hidden=!0,document.body.appendChild(ft);let Z=document.createElement("div");Z.id="xflash",document.body.appendChild(Z);let tt=ct.querySelector("#xzm"),mt=ct.querySelector("#xhr"),zt=ct.querySelector("#xfl"),Mt=ct.querySelector("#xfm"),gt={};Object.keys(Rt).forEach(it=>{let St=document.createElement("button");St.className="chip2",St.textContent=Rt[it].n,St.onclick=()=>{le=it,w.set("rio3d-filter",it),Dt()},zt.appendChild(St),gt[it]=St});function Dt(){for(let it in gt)gt[it].classList.toggle("on",it===le);Mt.classList.toggle("on",ee)}Mt.onclick=()=>{ee=!ee,w.set("rio3d-frame",ee?"1":"0"),Dt()},ct.querySelector("#xvw").onclick=()=>i.setCam(1-i.getCam()),tt.oninput=()=>{Lt=+tt.value},mt.oninput=()=>i.setTod(+mt.value);let Wt=["hud","places-row","hint","toast","lantB"],te=()=>[...document.body.children].filter(it=>it.tagName==="DIV"&&/pointer-events:none/.test(it.style.cssText)&&it.id!=="xflash");function U(it){it!==M.photo&&(it&&!i.started()||(M.photo=it,document.body.classList.toggle("photo",it),Wt.forEach(St=>{let ne=r(St)||document.getElementById(St);ne&&(ne.style.visibility=it?"hidden":"")}),te().forEach(St=>St.style.visibility=it?"hidden":""),ct.hidden=!it,ft.hidden=!it,it?(ut=pt=0,Lt=1,tt.value=1,mt.value=i.getTod(),Dt(),et(),a("Arrastra para mirar \xB7 pellizca para acercar")):(ut=pt=0,Lt=1,D.clear(),et(),ta())))}H.onclick=()=>U(!0),ft.onclick=()=>U(!1),addEventListener("keydown",it=>{it.code==="KeyP"&&U(!M.photo),it.code==="Escape"&&M.photo&&U(!1),it.code==="Enter"&&M.photo&&_t()});function _t(){M.want=()=>{Z.style.transition="none",Z.style.opacity=.9,requestAnimationFrame(()=>{Z.style.transition="opacity .5s",Z.style.opacity=0});let it=s.width,St=s.height,ne=s;if(ee){let Te=Math.round(it*.03),fe=Math.round(it*.065),ce=document.createElement("canvas");ce.width=it+2*Te,ce.height=St+Te+fe;let Xt=ce.getContext("2d");Xt.fillStyle="#f3ead6",Xt.fillRect(0,0,ce.width,ce.height),Xt.drawImage(s,Te,Te,it,St);let Un=i.nearLM(o.dist||0),Ts=Math.round(fe*.4);Xt.fillStyle="#5a4a3c",Xt.font=Ts+"px Georgia,serif",Xt.textBaseline="middle",Xt.fillText("R\xEDo 3D"+(Un?"  \xB7  "+Un:""),Te,St+Te+fe*.52),Xt.textAlign="right",Xt.fillStyle="#8a7a68",Xt.fillText(Math.round(o.dist||0)+" m  \xB7  "+v.name+"  \xB7  "+i.todName(i.getTod()),ce.width-Te,St+Te+fe*.52),ne=ce}ne.toBlob(Te=>{if(!Te)return;let fe=new File([Te],"rio3d-"+Date.now()+".jpg",{type:"image/jpeg"}),ce=()=>{let Xt=document.createElement("a");Xt.href=URL.createObjectURL(Te),Xt.download=fe.name,document.body.appendChild(Xt),Xt.click(),setTimeout(()=>{URL.revokeObjectURL(Xt.href),Xt.remove()},4e3)};navigator.canShare&&navigator.canShare({files:[fe]})?navigator.share({files:[fe],title:"R\xEDo 3D"}).catch(Xt=>{Xt&&Xt.name!=="AbortError"&&ce()}):ce()},"image/jpeg",.92)}}ct.querySelector("#xshut").onclick=_t;let j=it=>"rio3d-snap-"+it,xt=new Set;for(let it=0;it<10;it++)w.get(j(it),null)&&xt.add(it);M.hasSnap=it=>xt.has(it),M.snap=function(it){M.want=()=>{let ne=Math.round(420*s.height/s.width),Te=document.createElement("canvas");Te.width=420,Te.height=ne,Te.getContext("2d").drawImage(s,0,0,420,ne);let fe=Te.toDataURL("image/jpeg",.72);w.set(j(it),fe)&&(xt.add(it),w.set("rio3d-snapd-"+it,new Date().toISOString().slice(0,10)))}},M.found=it=>{w.get("rio3d-snapd-"+it,null)||w.set("rio3d-snapd-"+it,new Date().toISOString().slice(0,10))};let Et=it=>it?new Date(it+"T12:00:00").toLocaleDateString("es",{day:"numeric",month:"short"}):"",ot=it=>{let St=document.createElement("div");return St.className="xp xm",St.innerHTML='<div><button class="close">Cerrar</button>'+it+"</div>",St.onclick=ne=>{(ne.target===St||ne.target.classList.contains("close"))&&St.remove()},document.body.appendChild(St),St};V.onclick=()=>{let it=Ht(),St=new Array(10).fill(0);it.forEach(fe=>{let ce=Math.round((fe.s-240)/d);St[(ce%10+10)%10]++});let ne=+w.get("rio3d-pos","0"),Te='<h2>Diario del r\xEDo</h2><p style="margin:0 0 12px;color:var(--muted)">'+c.size+"/"+l.length+" lugares \xB7 "+v.name+" \xB7 llegaste hasta "+ne+" m \xB7 linternas soltadas: "+it.length+'</p><div class="xgrid">';l.forEach((fe,ce)=>{let Xt=c.has(ce),Un=Xt&&w.get(j(ce),null);Te+='<div class="xcard'+(Xt?"":" no")+'"><div class="im"'+(Un?' style="background-image:url('+Un+')"':"")+">"+(Un?"":Xt?"?":"\xB7")+'</div><div class="tx"><b>'+(Xt?fe:"A\xFAn por descubrir")+"</b>"+(Xt?Un?Et(w.get("rio3d-snapd-"+ce,"")):"Vuelve a pasar para fotografiarlo":"Sigue r\xEDo abajo")+(St[ce]?"<br>Linternas dejadas: "+St[ce]:"")+"</div></div>"}),ot(Te+"</div>")};let Ht=()=>{try{return JSON.parse(w.get("rio3d-left","[]"))||[]}catch{return[]}},Ct=Ht(),be=new Map,xe=[],Nn=new Set,_n=document.createElement("button");_n.id="lantB",document.body.appendChild(_n),_n.hidden=!0;function ta(){let it=i.getCount();_n.hidden=!(i.started()&&it>0&&!M.photo),_n.textContent="Soltar linterna ("+it+")"}return _n.onclick=()=>{if(i.getCount()<=0||M.photo)return;let it=-o.pz+7,St=Math.max(-g(it)+4,Math.min(g(it)-4,o.px+Math.sin(o.psi)*7-p(it)));Ct.push({s:Math.round(it*10)/10,e:Math.round(St*10)/10,t:Date.now()}),Ct.length>80&&Ct.shift(),w.set("rio3d-left",JSON.stringify(Ct)),i.setCount(i.getCount()-1);try{x.plop(0)}catch{}i.spawnRipple(p(it)+St,-it),ta(),Ct.length===1&&a("Tu linterna se queda aqu\xED. Vuelve otro d\xEDa y la encontrar\xE1s encendida.")},M.update=function(it,St){if(!i.started())return;((M.update.n=(M.update.n||0)+1)&15)===0&&ta();let ne=o.t,Te=i.glowK();for(let[fe,ce]of be){let Xt=Ct[fe];(!Xt||Xt.s<St-70||Xt.s>St+280)&&(e.remove(ce),xe.push(ce),be.delete(fe))}Ct.forEach((fe,ce)=>{if(fe.s<St-70||fe.s>St+280)return;let Xt=be.get(ce);Xt||(Xt=xe.pop()||u(),Xt.scale.setScalar(1.25),Xt.userData.body.material=Xt.userData.body.material.clone(),Xt.userData.body.material.color.set(16773328),e.add(Xt),be.set(ce,Xt)),Xt.position.set(p(fe.s)+fe.e+Math.sin(ne*.3+ce)*.5,Math.sin(ne*1.1+ce)*.04,-fe.s),Xt.rotation.z=Math.sin(ne*.8+ce*2)*.08,Xt.userData.glow.material.opacity=(.6+.3*Te)*(.85+.15*Math.sin(ne*3+ce)),Xt.userData.refl.material.opacity=(.3+.3*Te)*(.9+.1*Math.sin(ne*2+ce));let Un=Xt.position.x-o.px,Ts=Xt.position.z-o.pz;Un*Un+Ts*Ts<196&&!Nn.has(ce)&&!M.photo&&(Nn.add(ce),a("Tu linterna del "+Et(new Date(fe.t).toISOString().slice(0,10))))})},J.onclick=()=>{let it=ot(`<h2>Ajustes</h2>
    <div class="row"><span>Calidad<br><small style="color:var(--muted)" id="xql"></small></span><select id="xq"><option value="auto">Autom\xE1tica</option><option value="hi">Alta</option><option value="mid">Media</option><option value="lo">Baja (m\xE1s fluida)</option></select></div>
    <div class="row"><span>Estaci\xF3n<br><small style="color:var(--muted)">Cambiarla recarga el r\xEDo</small></span><select id="xs"><option value="auto">Seg\xFAn la fecha</option><option value="0">Primavera</option><option value="1">Verano</option><option value="2">Oto\xF1o</option><option value="3">Invierno</option></select></div>`),St=it.querySelector("#xq"),ne=it.querySelector("#xs"),Te=it.querySelector("#xql");St.value=T,ne.value=w.get("rio3d-season","auto"),Te.textContent=Ft(),St.onchange=()=>{T=St.value,w.set("rio3d-q",T),L=3,et(),Te.textContent=Ft()},ne.onchange=()=>{w.set("rio3d-season",ne.value);try{i.savePos()}catch{}location.reload()}},yt.uniforms.time.value=0,et(),Dt(),addEventListener("resize",()=>setTimeout(At,50)),M}function Gr(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ge,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let p=i[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=tm(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let p=[];for(let x=0;x<a[h].length;++x)p.push(a[h][x][u]);let g=tm(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function tm(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new me(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<e;g++){let x=h.getComponent(u,g);o.setComponent(u+d,g,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Q=(i,t=0)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},on=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),an=(i,t,e)=>{let n=on((e-i)/(t-i));return n*n*(3-2*n)},lo=(i,t,e)=>i+(t-i)*e;function fn(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,a=s*s*(3-2*s),o=r*r*(3-2*r),l=Q(e,n),c=Q(e+1,n),h=Q(e,n+1),d=Q(e+1,n+1);return l+(c-l)*a+(h-l)*o+(l-c-h+d)*a*o}var uM=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-1;n<=e+1;n++)if((n%10+10)%10===6){let s=240+n*260+Q(n,5)*50;t+=1*34*Math.exp(-Math.pow((i-s)/70,2))}return t},Ee=i=>Math.sin(i*.0045)*55+Math.sin(i*.0017+1.3)*110+Math.sin(i*.011)*12+uM(i),qe=i=>21+4*Math.sin(i*.003+2)+2*Math.sin(i*.013),mi=i=>Math.atan((Ee(i+1)-Ee(i-1))/2);function _s(i,t){let e=Math.abs(i-Ee(t))-qe(t);if(e<0)return-1.5+1.7*an(-5,0,e);let n=fn(i*.018,t*.018)*12+fn(i*.055,t*.055)*4;return .2+.6*an(0,4,e)+n*an(5,60,e)+Math.min(e,160)*.1*an(30,100,e)}var qs=document.getElementById("c"),vs=new Ic({canvas:qs,antialias:!0,powerPreference:"high-performance"});vs.setPixelRatio(Math.min(devicePixelRatio||1,1.5));var qt=new Ps;qt.fog=new Ma(13421772,22,250);var On=new ln(68,1,.05,900);function yd(){let i=innerWidth,t=innerHeight;vs.setSize(i,t,!1),On.aspect=i/t,On.fov=i/t<1?82:68,On.updateProjectionMatrix()}addEventListener("resize",yd);addEventListener("orientationchange",()=>setTimeout(yd,250));yd();document.addEventListener("visibilitychange",()=>{try{Ve.ctx&&(document.hidden?Ve.ctx.suspend():Ve.on&&Ve.ctx.resume())}catch{}});var co=new Oa(16777215,9083528,1.2);qt.add(co);var Vs=new ka(16777215,1);qt.add(Vs);var $s=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Gi(i)})(),fi=new K(new ye(700,24,16),new Qe({side:bn,depthWrite:!1,fog:!1,uniforms:{top:{value:new vt},hor:{value:new vt},sunDir:{value:new I(0,1,0)},sunCol:{value:new vt},glow:{value:1}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 top,hor,sunDir,sunCol;uniform float glow;
  void main(){vec3 d=normalize(vP);float h=d.y;vec3 c=mix(hor,top,pow(clamp(h,0.,1.),.5));
   float s=max(dot(d,normalize(sunDir)),0.);c+=sunCol*(pow(s,18.)*.45+pow(s,200.)*.6)*glow;
   gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));fi.renderOrder=-10;qt.add(fi);var qi=(i,t)=>{let e=new Ls(new ns({map:$s,color:i,blending:Vi,depthWrite:!1,fog:!1,transparent:!0}));return e.scale.set(t,t,1),e},fd=qi(16769712,140),pd=qi(14673663,70);qt.add(fd,pd);var _m=new ge,vm=new Float32Array(450*3);for(let i=0;i<450;i++){let t=Math.random()*6.283,e=Math.random()*.95+.05,n=Math.sqrt(1-e*e);vm.set([Math.cos(t)*n*680,e*680,Math.sin(t)*n*680],i*3)}_m.setAttribute("position",new me(vm,3));var md=new is(_m,new Hi({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));qt.add(md);var kr=(i,t,e,n,s,r,a,o,l)=>({t:i,top:new vt(t),hor:new vt(e),fog:new vt(n),sun:new vt(s),hi:r,si:a,night:o,hg:new vt(l)}),Dc=[kr(0,"#242a5c","#6a5c9a","#5b5a92","#9db0ff",.6,.25,1,"#4a5a70"),kr(.12,"#8fa4d8","#f6c7c0","#efcfcf","#ffd2a8",1.4,.5,.2,"#c4ccc0"),kr(.35,"#80b9e0","#d6edf0","#cfe7ea","#fff3d6",1.9,1.3,0,"#c8d6c0"),kr(.6,"#7e79c2","#f9bd9c","#e8b9b3","#ffb98a",1.5,.8,.1,"#c8c4c0"),kr(.75,"#1f2552","#4a4c88","#3b3f78","#9db0ff",.62,.28,1,"#4a5a70"),kr(1,"#242a5c","#6a5c9a","#5b5a92","#9db0ff",.6,.25,1,"#4a5a70")],Me={top:new vt,hor:new vt,fog:new vt,sun:new vt,hg:new vt,hi:1,si:1,night:0};function dM(i){let t=0;for(;t<Dc.length-2&&i>Dc[t+1].t;)t++;let e=Dc[t],n=Dc[t+1],s=on((i-e.t)/(n.t-e.t));["top","hor","fog","sun","hg"].forEach(r=>Me[r].copy(e[r]).lerp(n[r],s)),Me.hi=lo(e.hi,n.hi,s),Me.si=lo(e.si,n.si,s),Me.night=lo(e.night,n.night,s)}var Qu=new I,td=new I,Ii=.5;function fM(i,t){dM(Ii);let e=Math.sin(Math.PI*2*(Ii-.12));Qu.set(.25,e,-.9).normalize(),td.set(-.25,-e*.9+.05,-.9).normalize(),qt.fog.color.copy(Me.fog),fi.material.uniforms.top.value.copy(Me.top),fi.material.uniforms.hor.value.copy(Me.hor);let n=e>0,s=n?Qu:td;fi.material.uniforms.sunDir.value.copy(s),fi.material.uniforms.sunCol.value.copy(Me.sun),fi.material.uniforms.glow.value=n?1:.5,co.color.copy(Me.hor).lerp(Me.top,.4),co.groundColor.copy(Me.hg),co.intensity=Me.hi,Vs.color.copy(Me.sun),Vs.intensity=Me.si,Vs.position.copy(s).multiplyScalar(100).add(new I(i,0,t)),Vs.target.position.set(i,0,t),Vs.target.updateMatrixWorld(),fi.position.set(i,0,t),fd.position.set(i,0,t).addScaledVector(Qu,640),pd.position.set(i,0,t).addScaledVector(td,640),fd.material.opacity=on(e*4+.2,0,1),pd.material.opacity=on(-e*4,0,1)*.9,md.position.set(i,0,t),md.material.opacity=on(Me.night*1.1,0,1),pi.material.uniforms.sunDir.value.copy(s),pi.material.uniforms.sunCol.value.copy(Me.sun).multiplyScalar(on(n?e*3:-e*1.5,0,1)),pi.material.uniforms.hor.value.copy(Me.hor),pi.material.uniforms.top.value.copy(Me.top),pi.material.uniforms.fog.value.copy(Me.fog),pi.material.uniforms.night.value=Me.night,bs=on(Me.night*1.2+.25,0,1)}var bs=.3,ym=i=>i<.1?"Madrugada":i<.2?"Amanecer":i<.5?"D\xEDa":i<.68?"Atardecer":i<.92?"Noche":"Madrugada",pi=new K(new rn(1e3,1e3),new Qe({uniforms:{t:{value:0},deep:{value:new vt("#5a8f9c")},shallow:{value:new vt("#a3c8c4")},hor:{value:new vt},top:{value:new vt},fog:{value:new vt},sunDir:{value:new I(0,1,0)},sunCol:{value:new vt},night:{value:0},fogN:{value:22},fogF:{value:250}},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`varying vec3 vW;uniform float t,night,fogN,fogF;uniform vec3 deep,shallow,hor,top,fog,sunDir,sunCol;
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
}`}));pi.rotation.x=-Math.PI/2;qt.add(pi);var qn=150,ei=120,Xi=2.6,Xn=3,Nc=8,Mm=new Float32Array(qn*ei*3),Sm=new Float32Array(qn*ei*3),Ws=new ge;Ws.setAttribute("position",new me(Mm,3));Ws.setAttribute("color",new me(Sm,3));{let i=new Uint16Array((qn-1)*(ei-1)*6),t=0;for(let e=0;e<ei-1;e++)for(let n=0;n<qn-1;n++){let s=e*qn+n,r=s+1,a=s+qn,o=a+1;i.set([s,r,a,r,o,a],t),t+=6}Ws.setIndex(new me(i,1))}var bm=new K(Ws,new Ie({vertexColors:!0,gradientMap:We}));bm.frustumCulled=!1;qt.add(bm);var pM=new vt("#eadcb9"),mM=new vt("#b6dca3"),gM=new vt("#8fc79b"),xM=new vt("#bdd6c8"),_M=new vt("#d3cce9"),vM=new vt("#c8d6c0"),yM=new vt("#d9b45f"),MM=new vt("#c8964a"),Je=new vt,lh=1900;function Em(i,t,e,n){i=i.index?i.toNonIndexed():i;let s=i.attributes.uv;for(let c=0;c<s.count;c++)s.setXY(c,s.getX(c)*t[0],s.getY(c)*t[1]);i.computeBoundingBox();let r=i.boundingBox.min.y,a=i.boundingBox.max.y,o=i.attributes.position,l=new Float32Array(o.count*3);for(let c=0;c<o.count;c++){let h=e+(n-e)*((o.getY(c)-r)/(a-r||1));l[c*3]=l[c*3+1]=l[c*3+2]=h}return i.setAttribute("color",new me(l,3)),i}var Tm=Gr([[2,2.6,.8],[1.6,2.5,2.4],[1.2,2.3,3.9],[.75,2,5.3]].map(([i,t,e])=>Em(new ke(i,t,8,1).translate(0,e+t/2,0),[4,2],.72,1.18)).map(i=>(i.deleteAttribute("normal"),i)));Tm.computeVertexNormals();var wm=Gr([[1.9,0,4.3,0],[1.4,1.3,4.9,.5],[1.35,-1.2,4.7,-.6],[1.2,.2,5.7,.3]].map(([i,t,e,n])=>{let s=new Ln(i,1);return s.translate(t,e,n),s.deleteAttribute("normal"),Em(s,[3,3],.82,1.22)}));wm.computeVertexNormals();var SM=()=>new Ie({gradientMap:We,color:16777215,vertexColors:!0,map:He("leaf")}),Gc=new Pn(Tm,new Ie({gradientMap:We,color:16777215,vertexColors:!0,map:He("needle")}),lh),Vr=new Pn(wm,SM(),lh),kc=new Pn(new Ue(.2,.34,4.2,6).translate(0,2.1,0),new Ie({gradientMap:We,color:9071196,map:He("bark")}),lh),Vc=new Pn(new rs(.7,10).rotateX(-Math.PI/2),new Ie({gradientMap:We,color:16777215}),500),Wc=new Pn(new Ln(.28,0).translate(0,.2,0),new Ie({gradientMap:We,color:16777215}),160);[Gc,Vr,kc,Vc,Wc].forEach(i=>{i.frustumCulled=!1,qt.add(i)});var Am={value:0};function bM(i){return i.onBeforeCompile=t=>{t.uniforms.uSw=Am,t.vertexShader=`uniform float uSw;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 wp0=modelMatrix*instanceMatrix*vec4(position,1.);float hh=clamp(position.y/1.8,0.,1.);transformed.x+=sin(uSw*1.6+wp0.x*.7+wp0.z*.5)*.2*hh*hh;transformed.z+=cos(uSw*1.3+wp0.z*.6)*.1*hh*hh;`)},i}var Rm=(()=>{let i=[];for(let t=0;t<9;t++){let e=t/9*6.28+Q(t,1),n=.9+Q(t,2)*1.3,s=.07,r=Math.cos(e)*.25*Q(t,3),a=Math.sin(e)*.25*Q(t,3),o=(Q(t,4)-.5)*.9,l=new ge,c=new Float32Array([-s,0,0,s,0,0,o*.5-s*.5,n*.6,0,o*.5+s*.5,n*.6,0,o,n,0]);l.setAttribute("position",new me(c,3)),l.setIndex([0,1,2,1,3,2,2,3,4]),l.computeVertexNormals();let h=new Float32Array(15);[[.28,.2,.12],[.28,.2,.12],[.62,.5,.24],[.62,.5,.24],[.92,.78,.4]].forEach((u,p)=>h.set(u,p*3)),l.setAttribute("color",new me(h,3)),l.rotateY(e),l.translate(r,0,a),i.push(l)}return Gr(i)})(),Xr=new Pn(Rm,bM(new Ie({gradientMap:We,color:16777215,vertexColors:!0,side:De})),1400),EM=(()=>{let i=[],t=new Ue(.14,.3,4.2,6).translate(0,2.1,0),e=new Float32Array(t.attributes.position.count*3).fill(.3);return t.setAttribute("color",new me(e,3)),i.push(t),[[0,4.3,0,2.8],[1.6,3.7,.6,1.9],[-1.5,3.3,-.8,1.7]].forEach(([n,s,r,a])=>{let o=new ye(1,9,5).toNonIndexed();o.scale(a,a*.28,a),o.translate(n,s,r);let l=o.attributes.position,c=new Float32Array(l.count*3);for(let h=0;h<l.count;h++){let d=.62+.4*on((l.getY(h)-s)/(a*.28)*.5+.5);c[h*3]=d*.9,c[h*3+1]=d,c[h*3+2]=d*.92}o.setAttribute("color",new me(c,3)),o.deleteAttribute("uv"),i.push(o)}),i[0]=i[0].toNonIndexed(),i[0].deleteAttribute("uv"),Gr(i)})(),Xc=new Pn(EM,new Ie({gradientMap:We,color:16777215,vertexColors:!0}),400);[Xr,Xc].forEach(i=>{i.frustumCulled=!1,qt.add(i)});var TM=["#5d7a64","#4f6b5c","#6a8a6e","#566f5d"],Cm=["#ffffff","#f0e0b0","#e6c98a","#d6b070"],Xe=new ve,mn=new Mn,gn=new I,tn=new I,ro=new I(0,1,0),zn=ju[Ku()],wM=new vt(zn.gnd),AM=zn.pine,RM=zn.blos,io={a:1e9,b:1e9},th=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-2;n<=e+2;n++)(n%10+10)%10===3&&(t=Math.max(t,1-an(40,170,Math.abs(ni(n)-i))));return t},ho=new Pn(new Ln(1,1).scale(1,.72,1).translate(0,.45,0),new Ie({gradientMap:We,color:16777215,map:He("leaf")}),1700);ho.frustumCulled=!1;qt.add(ho);var CM=["#6fa383","#7fb592","#5f957a","#8cc09a"],IM=zn.bblos,qc=i=>{let t=0,e=Math.round((i-240)/260);for(let n=e-2;n<=e+2;n++)(n%10+10)%10===8&&(t=Math.max(t,1-an(70,190,Math.abs(ni(n)-i))));return t},PM=(()=>{let i=new Ue(.11,.15,1,5,8,!0).translate(0,.5,0).toNonIndexed(),t=i.attributes.position,e=new Float32Array(t.count*3);for(let n=0;n<t.count;n++){let s=t.getY(n),r=Math.round(s*8)%3===0?.68:1;e[n*3]=r,e[n*3+1]=r,e[n*3+2]=r*.95}return i.setAttribute("color",new me(e,3)),i.deleteAttribute("uv"),i.computeVertexNormals(),i})(),Yc=new Pn(PM,new Ie({gradientMap:We,color:16777215,vertexColors:!0}),2e3),Zc=new Pn(new Ln(1,0).scale(1,.5,1),new Ie({gradientMap:We,color:16777215}),2e3);[Yc,Zc].forEach(i=>{i.frustumCulled=!1,qt.add(i)});var LM=["#8fc58a","#9fd194","#7bb87f","#a9d89a"],DM=["#b7e08f","#a4d68a","#c4e89b","#92cc86"],em=zn.brd,NM=new vt("#9ccf8a"),nm=(i,t)=>{let e=Math.round((i-240)/260);for(let n=e-1;n<=e+1;n++){let s=(n%10+10)%10;if((s===5||s===7)&&Math.abs(ni(n)-i)<(s===5?26:12)&&t<(s===5?48:20))return!0}return!1},Md=i=>an(.4,.55,fn(i*.0022+31,5)*.6+fn(i*.0053+8,2)*.4),Uc=new Float32Array(qn*ei*3),Fc=new Float32Array(qn*ei*3),im=new Map;function Sd(i){let t=im.get(i);if(!t){let e=i.instanceMatrix.array.length;t={m:new Float32Array(e),c:new Float32Array(e/16*3)},im.set(i,t)}return t}var jn=(i,t,e)=>{e.toArray(Sd(i).m,t*16)},Ci=(i,t,e)=>{let n=Sd(i);n.hc=1;let s=n.c;s[t*3]=e.r,s[t*3+1]=e.g,s[t*3+2]=e.b};function UM(i,t){let e=Sd(i);i.instanceMatrix.array.set(e.m.subarray(0,t*16)),i.instanceMatrix.needsUpdate=!0,e.hc&&(i.instanceColor||i.setColorAt(0,Je),i.instanceColor.array.set(e.c.subarray(0,t*3)),i.instanceColor.needsUpdate=!0),i.count=t}function*FM(i,t){let e=[],n=i-qn/2*Xi,s=t-60,r=0,a=0,o=0,l=0,c=0,h=0,d=0,u=0;for(let x=0;x<ei;x++){x%5===0&&(yield);let f=s+x*Xn,m=qc(f),M=th(f),w=Md(f);for(let v=0;v<qn;v++){let b=n+v*Xi,S=_s(b,f),R=(x*qn+v)*3;Uc[R]=b,Uc[R+1]=S,Uc[R+2]=-f;let _=Math.abs(b-Ee(f))-qe(f),T=fn(b*.05,f*.05),A=(Q(v+n,x)-.5)*.05;if(_<0)Je.copy(vM);else{Je.copy(mM).lerp(gM,T),Je.lerp(pM,1-an(.5,3.5,_)),Je.lerp(xM,an(6,13,S)*.8),Je.lerp(_M,an(13,24,S)),m>0&&Je.lerp(NM,m*an(0,5,_)*.65),zn.gk&&Je.lerp(wM,zn.gk*an(.4,3,_)*(1-m*.6));{let P=fn(b*.03+50,f*.03+20),N=an(.5,.72,P)*an(.4,2.5,_)*(1-an(9,26,_));N>0&&Je.lerp(fn(b*.2,f*.2)>.5?yM:MM,N*.85)}}if(Fc[R]=Je.r+A,Fc[R+1]=Je.g+A,Fc[R+2]=Je.b+A,_>5&&S<17&&a<lh&&!nm(f,_)){let P=Q(b*3.1,f*1.7),N=.05*(.5+fn(b*.03+9,f*.03))*(_<34?.75:1)+(_<36?(.05+.09*w)*(1-_/44):0)*(.6+.8*fn(b*.07,f*.07))+(_<60?M*.11*(1-_/70):0);if(P<N*(1-m*.92)){let z=(Q(b,f)-.5)*Xi*.9,L=(Q(f,b)-.5)*Xn*.9,B=.8+Q(b+4,f+1)*.9;gn.set(b+z,_s(b+z,f+L)-.1,-(f+L)),mn.setFromAxisAngle(ro,Q(f,b)*6.28),_<60&&Q(b*.7,f*.3)<.04+M*.95?(tn.set(B,B,B),Xe.compose(gn,mn,tn),jn(Vr,o,Xe),jn(kc,o,Xe),Ci(Vr,o,Je.set(RM[Q(b,f+3)*4|0])),o++):Q(b*1.1,f*1.7)<.3?(tn.set(B*1.05,B*(.9+Q(f,5)*.5),B*1.05),Xe.compose(gn,mn,tn),jn(Vr,o,Xe),jn(kc,o,Xe),Ci(Vr,o,Je.set(em[Q(b,f+7)*em.length|0])),o++):Q(b*1.9,f*.8)>.55&&c<400?(tn.set(B*1.2,B*1.2,B*1.2),Xe.compose(gn,mn,tn),jn(Xc,c,Xe),Ci(Xc,c,Je.set(TM[Q(b+5,f)*4|0])),c++):(tn.set(B,B*(.9+Q(f,3)*1.1),B),Xe.compose(gn,mn,tn),jn(Gc,l,Xe),Ci(Gc,l,Je.set(AM[Q(b+2,f)*4|0])),l++),a++}}}}for(let x=0;x<ei;x++){x%5===0&&(yield);let f=s+x*Xn,m=th(f),M=qc(f);for(let w=0;w<qn;w+=1){let v=n+w*Xi,b=Math.abs(v-Ee(f))-qe(f);if(b<2.2||b>55||d>=1700||nm(f,b)||_s(v,f)>15||Q(v*2.3+1,f*1.3)>(.05+m*.2)*(1-M*.8))continue;let _=(Q(v,f+9)-.5)*Xi,T=(Q(f,v+9)-.5)*Xn,A=.7+Q(v+8,f)*.9+m*.3;gn.set(v+_,_s(v+_,f+T)-.1,-(f+T)),mn.setFromAxisAngle(ro,Q(f,v)*6.28),tn.set(A*1.2,A,A*1.1),Xe.compose(gn,mn,tn),jn(ho,d,Xe),Ci(ho,d,Je.set(m>.25&&Q(v,f+5)<.55?IM[Q(v,f)*4|0]:CM[Q(f,v+2)*4|0])),d++}}for(let x=0;x<ei;x++){x%5===0&&(yield);let f=s+x*Xn,m=qc(f);if(!(m<.02))for(let M=0;M<qn;M++){let w=n+M*Xi,v=Ee(f),b=Math.abs(w-v)-qe(f);if(!(b<.3||b>26||u>=1990))for(let S=0;S<2;S++){if(Q(w*3.7+S*5,f*2.9+S)>m*(1.05-b*.012))continue;let R=(Q(w+S,f+3)-.5)*Xi,_=(Q(f+S,w+3)-.5)*Xn,T=w+R,A=f+_,P=11+Q(T,A)*12,N=.8+Q(A,T)*.6,z=.05+Q(T*2,A)*.14,L=T>v?1:-1,B=_s(T,A)-.3;gn.set(T,B,-A),mn.setFromAxisAngle(new I(0,0,1),L*z),tn.set(N,P,N),Xe.compose(gn,mn,tn),jn(Yc,u,Xe),Ci(Yc,u,Je.set(LM[Q(T,A+1)*4|0]));let X=T-L*Math.sin(z)*P,W=B+Math.cos(z)*P;gn.set(X,W,-A),mn.identity();let at=1.5+Q(A,T+4)*1.6;tn.set(at,at,at),Xe.compose(gn,mn,tn),jn(Zc,u,Xe),Ci(Zc,u,Je.set(DM[Q(T+2,A)*4|0])),u++}}}e.push([Yc,u],[Zc,u]),e.push([ho,d]);for(let x=0;x<ei;x++){x%5===0&&(yield);let f=s+x*Xn;for(let m=0;m<4;m++){let M=m%2?1:-1;if(Q(f*.53,m+3)>.62||h>=1400)continue;let w=m>1&&Q(f,m+9)>.6,v=qe(f)+M*0+(w?-(1.5+Q(f,m+1)*4):-.3+Q(f,m+2)*3.4),b=Ee(f)+M*v,S=-(f+(Q(f,m)-.5)*Xn);if(w&&Math.abs(b-Ee(f))>qe(f)-1.5)continue;let R=.7+Q(f+m,7)*.9;gn.set(b,Math.max(-.2,_s(b,f)-.15),S),mn.setFromAxisAngle(ro,Q(f,m+5)*6.28),tn.set(R,R*(.8+Q(f,m+6)*.7),R),Xe.compose(gn,mn,tn),jn(Xr,h,Xe),Ci(Xr,h,Je.set(Cm[Q(f,m+4)*4|0])),h++}}e.push([Xr,h],[Xc,c]),e.push([Gc,l],[Vr,o],[kc,o]);let p=0,g=0;for(let x=0;x<ei;x++){x%5===0&&(yield);let f=s+x*Xn;for(let m=0;m<3;m++){if(Q(f*.37,m+7)>.5||p>=500)continue;let M=(Q(f+m,5)*2-1)*(qe(f)-2.2),w=Ee(f)+M;gn.set(w,.03,-(f+(Q(f,m)-.5)*Xn)),mn.setFromAxisAngle(ro,Q(f,m+2)*6.28);let v=.7+Q(f+m,9)*.9;tn.set(v,1,v),Xe.compose(gn,mn,tn),jn(Vc,p,Xe),Ci(Vc,p,Je.set(Q(f,m)>.5?"#a8dba9":"#96cfa0")),p++,Q(f,m+11)>.72&&g<160&&(Xe.compose(gn.setY(.05),mn,tn.set(1,1,1)),jn(Wc,g,Xe),Ci(Wc,g,Je.set(Q(f,m+1)>.4?"#f7b9cf":"#fbe39a")),g++)}}e.push([Vc,p],[Wc,g]);for(let[x,f]of e)UM(x,f);Mm.set(Uc),Sm.set(Fc),Ws.attributes.position.needsUpdate=!0,Ws.attributes.color.needsUpdate=!0,Ws.computeVertexNormals()}var Hs=null,sm=0,ed=!1;function BM(i,t){let e=Math.floor(-t/(Xn*Nc))*Xn*Nc,n=Math.round(i/(Xi*Nc))*Xi*Nc;if(!Hs&&(e!==io.b||n!==io.a)){let s=!ed||Math.abs(e-io.b)>150||Math.abs(n-io.a)>150;if(io={a:n,b:e},Hs=FM(n,e),sm=e,s){for(;!Hs.next().done;);dm(e),Hs=null,ed=!0}}if(Hs){let s=performance.now(),r;do r=Hs.next();while(!r.done&&performance.now()-s<3);r.done&&(dm(sm),Hs=null,ed=!0)}}var bd=140,Im=[],Ed=new ge,Jc=new Float32Array(bd*3);for(let i=0;i<bd;i++)Im.push([Math.random()*80-40,Math.random()*3+.4,Math.random()*80-50,Math.random()*6.28]);Ed.setAttribute("position",new me(Jc,3));var gd=new Hi({color:16773792,size:.35,map:$s,transparent:!0,opacity:0,blending:Vi,depthWrite:!1}),eh=new is(Ed,gd);eh.frustumCulled=!1;qt.add(eh);var xd=46,ks=new Map,nd=[],nh=new Set,ys=0;try{JSON.parse(localStorage.getItem("rio3d-coll")||"[]").forEach(i=>nh.add(i))}catch{}try{ys=+localStorage.getItem("rio3d-lant")||0}catch{}var Td=i=>{let t=70+i*xd+Q(i,1)*20,e=(Q(i,2)*2-1)*.6*qe(t);return[Ee(t)+e,-t]};function Pm(){let i=new ae,t=new K(new Ue(.3,.3,.55,10),new Oe({color:16767392}));t.position.y=.38;let e=new K(new Ue(.34,.34,.06,10),new Oe({color:13204840}));e.position.y=.7;let n=e.clone();n.position.y=.08;let s=qi(16762746,3.2);s.position.y=.45,s.material.depthTest=!1,s.renderOrder=5;let r=new K(new rn(1,1).rotateX(-Math.PI/2),new Oe({map:$s,color:16762746,transparent:!0,opacity:.4,blending:Vi,depthWrite:!1}));return r.scale.set(5,1,5),r.position.y=.04,i.add(t,e,n,s,r),i.userData={glow:s,refl:r,body:t},i}function OM(i,t){let e=Math.max(0,Math.floor((t-120)/xd)),n=Math.floor((t+320)/xd);for(let[s,r]of ks)(s<e||s>n)&&(qt.remove(r),nd.push(r),ks.delete(s));for(let s=e;s<=n;s++){if(nh.has(s)||ks.has(s))continue;let r=nd.pop()||Pm();r.userData.fade=1,r.scale.setScalar(1),qt.add(r),ks.set(s,r)}for(let[s,r]of ks){let[a,o]=Td(s);r.position.set(a,Math.sin(i*1.1+s)*.04,o),r.rotation.z=Math.sin(i*.8+s*2)*.08,r.userData.glow.material.opacity=(.5+.25*bs)*(.8+.2*Math.sin(i*3+s)),r.userData.refl.material.opacity=(.25+.3*bs)*(.85+.15*Math.sin(i*2+s)),r.userData.collecting&&(r.userData.fade-=.016,r.scale.setScalar(1+(1-r.userData.fade)*.6),r.userData.glow.material.opacity*=Math.max(0,r.userData.fade),r.userData.refl.material.opacity*=Math.max(0,r.userData.fade),r.userData.fade<=0&&(qt.remove(r),ks.delete(s),nd.push(r),r.userData.collecting=!1))}}var Ye=new ae;qt.add(Ye);var Yi=new as;Yi.moveTo(0,3.4);Yi.quadraticCurveTo(.5,2.4,.7,1);Yi.lineTo(.7,-1.3);Yi.lineTo(-.7,-1.3);Yi.lineTo(-.7,1);Yi.quadraticCurveTo(-.5,2.4,0,3.4);var wd=new K(new Ir(Yi,{depth:.24,bevelEnabled:!1}),new Ie({gradientMap:We,color:14722684,emissive:4204570,map:He("wood")}));wd.rotation.x=-Math.PI/2;wd.position.y=-.04;Ye.add(wd);var go=new K(new Ua(Yi),new Ie({gradientMap:We,color:11568232,emissive:2759186,map:He("plank")}));go.geometry.scale(.8,.86,1);go.geometry.translate(0,.2,0);go.rotation.x=-Math.PI/2;go.position.y=.21;Ye.add(go);{let i=Dn(9068357,{map:He("wood")}),t=Dn(13146740,{map:He("plank")}),e=Yi,n=new as(e.getPoints(24)),s=new Ns(n.getPoints(24).map(d=>new ht(d.x*.86,d.y*.9+.1)).reverse());n.holes.push(s);let r=new Ir(n,{depth:.07,bevelEnabled:!1}),a=new K(r,i);a.rotation.x=-Math.PI/2,a.position.y=.2,Ye.add(a);for(let d=0;d<6;d++){let u=-2.3+d*.72,p=d<2?1-d*.1:1.28,g=new K(new Fn(p,.07,.08),i);g.position.set(0,.23,u),Ye.add(g)}let o=new K(new Fn(1.35,.07,.34),t);o.position.set(0,.5,.55),Ye.add(o);let l=new K(new ki(.2,.045,6,14),Dn(14271378));l.rotation.x=Math.PI/2,l.position.set(.25,.27,-1.7),Ye.add(l);let c=l.clone();c.scale.setScalar(.8),c.position.set(.25,.32,-1.7),Ye.add(c);let h=new K(new ye(.13,8,6),i);h.position.set(0,.22,-3.35),Ye.add(h)}var Lm=[];{let i=Dn(9075550,{map:He("cloth")}),t=Dn(11045468,{map:He("woodV")});[[-.35,.34,-1.55,.34],[-.05,.32,-1.35,.28],[-.3,.3,-1.1,.26]].forEach(([s,r,a,o])=>{let l=new K(new Ln(o,1),i);l.scale.set(1.1,.65,1),l.position.set(s,r,a),Ye.add(l),Lm.push(l)});let e=new K(new Ue(.025,.035,4.6,6),t);e.position.set(-.55,.9,-2.6),e.rotation.set(1.28,0,.14),Ye.add(e);let n=new K(new Ue(.006,.006,2.3,3),Dn(14209216));n.position.set(-.95,.35,-4.7),Ye.add(n)}var Dm=new K(new Ue(.03,.04,.9,6),new Ie({gradientMap:We,color:8018508}));Dm.position.set(0,.55,-3.05);Ye.add(Dm);var ch=new K(new ye(.12,10,8),new Oe({color:16769704}));ch.position.set(0,1.05,-3.05);Ye.add(ch);var Ad=qi(16762746,2.4);Ad.position.copy(ch.position);Ye.add(Ad);var Rd=new Ga(16763274,0,22,1.6);Rd.position.set(0,1.5,-2.8);Ye.add(Rd);function rm(){let i=new ae,t=new Ie({gradientMap:We,color:15716516,emissive:3811866}),e=new K(new Ue(.022,.022,2.1,6),t);e.rotation.x=Math.PI/2,e.position.z=.9,i.add(e);let n=new K(new Fn(.2,.03,.62),new Ie({gradientMap:We,color:15047302}));n.position.z=1.55,i.add(n);let s=new K(new Fn(.2,.04,.05),t);s.position.z=-.15,i.add(s);let r=new ae;return r.add(i),Ye.add(r),r}var am=[rm(),rm()],zM=[new I(-.7,.5,-.3),new I(.7,.5,-.3)],HM=[new I(-1.05,.55,-.9),new I(1.05,.55,-.9)],ih=[];for(let i=0;i<28;i++){let t=new K(new Pr(.35,.42,28).rotateX(-Math.PI/2),new Oe({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!0}));t.position.y=.04,t.userData.age=9,qt.add(t),ih.push(t)}var GM=0,Ys=(i,t)=>{let e=ih[GM++%ih.length];e.position.set(i,.04,t),e.userData.age=0};function Dn(i,t){return new Ie(Object.assign({gradientMap:We,color:i},t||{}))}var Zs=new ae;Ye.add(Zs);Zs.position.set(0,.42,.55);Zs.scale.setScalar(1.3);var Qn=new ae;Qn.position.y=.3;Zs.add(Qn);var Jr=new ae;Jr.position.y=1;Qn.add(Jr);var Ms=new ae;Ms.position.y=.2;Jr.add(Ms);var Nm=[];{let i=Dn(9279656,{map:He("cloth")}),t=Dn(7305868,{map:He("cloth")}),e=Dn(4540762,{map:He("cloth")}),n=Dn(14264706),s=Dn(14727535,{map:He("straw"),side:De}),r=Dn(12159562,{map:He("straw")}),a=Dn(2959918),o=new K(new ye(.5,14,10),e);o.scale.set(1.2,.42,.85),o.position.y=-.1,Zs.add(o),[-1,1].forEach(m=>{let M=new K(new ye(.17,8,6),e);M.position.set(m*.5,-.02,-.3),Zs.add(M)});let l=new K(new Ue(.3,.4,.8,12),i);l.position.y=.42,Qn.add(l);let c=new K(new ki(.35,.03,6,14),t);c.rotation.x=Math.PI/2,c.position.y=.12,Qn.add(c);let h=new K(new ye(.44,12,8),i);h.scale.set(1,.45,.7),h.position.y=.78,Qn.add(h);let d=new K(new ki(.14,.045,6,10),t);d.rotation.x=Math.PI/2,d.position.y=.9,Qn.add(d);let u=new K(new Ue(.09,.1,.16,6),n);u.position.y=.95,Qn.add(u);let p=new K(new ye(.21,14,10),a);p.position.y=.2,Jr.add(p);let g=new K(new ke(.66,.36,24,1,!0),s);g.position.y=.1,Ms.add(g);let x=new K(new ke(.1,.08,8),r);x.position.y=.22,Ms.add(x);let f=new K(new ki(.655,.018,6,28),r);f.rotation.x=Math.PI/2,f.position.y=-.075,Ms.add(f),[-1,1].forEach(m=>{let M=new K(new Ue(.008,.008,.3,4),a);M.position.set(m*.18,-.12,.05),Ms.add(M)}),[-1,1].forEach(m=>{let M=new ae;M.position.set(m*.42,.75,0),Qn.add(M);let w=new K(new Ue(.095,.08,.6,8),i);w.position.y=-.3,M.add(w);let v=new K(new ye(.085,8,6),n);v.position.y=-.62,M.add(v);let b=new K(new ki(.085,.025,5,8),t);b.rotation.x=Math.PI/2,b.position.y=-.52,M.add(b),Nm.push(M)})}var Xs=new ae;Ye.add(Xs);{let i=Dn(12159574,{map:He("woodV")}),t=Dn(13602164,{map:He("plank")}),e=new K(new Ue(.03,.03,2.1,6),i);e.rotation.x=Math.PI/2,e.position.z=1.05,Xs.add(e);let n=new K(new Fn(.22,.04,.55),t);n.position.z=2,Xs.add(n);let s=new K(new Fn(.2,.04,.05),i);s.position.z=-.03,Xs.add(s)}var Gs=1,Bc=0,O={px:Ee(0),pz:0,psi:0,v:1.5,steer:0,hold:!1,pitch:0,roll:0,stroke:0,side:0,act:0,bumpT:0,dist:0,t:0,key:{up:!1,l:!1,r:!1}};O.pz=-30;O.px=Ee(30);O.psi=mi(30);var id=0,Es=!1,Cd=0,Id=0,$e=i=>document.getElementById(i);function Js(i){let t=$e("toast");t.textContent=i,t.style.opacity=1,clearTimeout(Js.h),Js.h=setTimeout(()=>t.style.opacity=0,4200)}qs.addEventListener("pointerdown",i=>{!Es||ti.photo||(sS(),qs.setPointerCapture(i.pointerId),O.hold=!0,Fm(i),Ve.resume())});qs.addEventListener("pointermove",i=>{O.hold&&!ti.photo&&Fm(i)});var Um=()=>{O.hold=!1,Cd=0,Id=0};qs.addEventListener("pointerup",Um);qs.addEventListener("pointercancel",Um);function Fm(i){let t=(i.clientX/innerWidth-.5)*2,e=(i.clientY/innerHeight-.5)*2;Cd=Math.abs(t)<.1?0:on((t-Math.sign(t)*.1)*1.4,-1,1),Id=e}addEventListener("keydown",i=>{(i.code==="Space"||i.code==="ArrowUp"||i.code==="KeyW")&&(O.key.up=!0,i.preventDefault()),(i.code==="ArrowLeft"||i.code==="KeyA")&&(O.key.l=!0),(i.code==="ArrowRight"||i.code==="KeyD")&&(O.key.r=!0)});addEventListener("keyup",i=>{(i.code==="Space"||i.code==="ArrowUp"||i.code==="KeyW")&&(O.key.up=!1),(i.code==="ArrowLeft"||i.code==="KeyA")&&(O.key.l=!1),(i.code==="ArrowRight"||i.code==="KeyD")&&(O.key.r=!1)});$e("snd").onclick=()=>{Ve.on=!Ve.on,Ve.ctx&&Ve.setOn(Ve.on),$e("snd").textContent="Sonido: "+(Ve.on?"s\xED":"no")};var qr=0;try{qr=+localStorage.getItem("rio3d-pos")||0}catch{}function hh(){try{Es&&O.dist>80&&localStorage.setItem("rio3d-pos",String(Math.round(O.dist)))}catch{}}setInterval(hh,2500);addEventListener("pagehide",hh);document.addEventListener("visibilitychange",hh);function kM(i){O.pz=-i,O.px=Ee(i),O.psi=mi(i),O.dist=i}qr>150&&($e("go").textContent="Continuar ("+qr+" m)",$e("go2").hidden=!1,$e("go2").onclick=()=>{try{localStorage.removeItem("rio3d-pos")}catch{}qr=0,$e("go").onclick()});$e("go").onclick=()=>{qr>150&&kM(qr);try{Ve.init(),Ve.resume()}catch{}$e("start").hidden=!0,$e("hud").hidden=!1,$e("places-row").hidden=!1,Dd(0),$e("hint").hidden=!1,Es=!0,setTimeout(()=>$e("hint").style.opacity=0,9e3),setTimeout(()=>Js("Llevas un buen rato en el r\xEDo: respira hondo y estira un poco los hombros."),1500*1e3)};var Bm=i=>{let t=0,e=Math.floor(i/650);for(let n=e-1;n<=e+1;n++){let s=n*650+250+Q(n,7)*220,r=120+Q(n,8)*70,a=(i-s)/r;t=Math.max(t,Math.exp(-a*a))}return t},ao=16,Om=[];for(let i=0;i<ao;i++){let t=new Ls(new ns({map:$s,transparent:!0,opacity:0,depthWrite:!1,fog:!1,color:16777215}));t.scale.set(70,24,1),t.renderOrder=3,qt.add(t),Om.push(t)}var Pd=800,Ld=new ge,zm=new Float32Array(Pd*6),Hm=[];for(let i=0;i<Pd;i++)Hm.push([Math.random()*40-20,Math.random()*14,Math.random()*40-24]);Ld.setAttribute("position",new me(zm,3));var Gm=new Ar({color:14543103,transparent:!0,opacity:0,depthWrite:!1}),mo=new Ta(Ld,Gm);mo.frustumCulled=!1;mo.visible=!1;qt.add(mo);var Ke={rain:0,target:0,t:50,on:!1},VM=[[480,150,.55,3.1],[545,200,.4,7.7],[610,260,.28,12.9]].map(([i,t,e,n])=>{let r=new Float32Array(1326),a=[];for(let c=0;c<=220;c++){let h=c/220*Math.PI*2,d=Math.cos(h),u=Math.sin(h),p=fn(d*2.2+n,u*2.2+n),g=fn(d*8+n*2,u*8+n),x=Math.pow(Math.max(0,g-.5)/.5,1.4),f=t*(.3+.55*Math.pow(p,1.5)+.9*x);if(r.set([d*i,-40,u*i,d*i,f,u*i],c*6),c<220){let m=c*2;a.push(m,m+1,m+2,m+1,m+3,m+2)}}let o=new ge;o.setAttribute("position",new me(r,3)),o.setIndex(a);let l=new K(o,new Qe({side:De,fog:!1,depthWrite:!1,uniforms:{col:{value:new vt},hor:{value:new vt},hm:{value:t*1.3}},vertexShader:"varying float vY;void main(){vY=position.y;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying float vY;uniform vec3 col,hor;uniform float hm;void main(){vec3 c=mix(hor,col,smoothstep(hm*.04,hm*.75,vY));gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));return l.renderOrder=-8,l.frustumCulled=!1,l.userData.t=e,qt.add(l),l}),oo=new vt,_d=new vt;function WM(i,t){Es&&(Ke.t-=i,Ke.t<=0&&(Ke.target=Ke.target?0:1,Ke.t=Ke.target?60+Math.random()*40:100+Math.random()*70,Ke.target&&Js("Empieza una llovizna suave"))),Ke.rain+=(Ke.target-Ke.rain)*Math.min(1,i*.25);let e=Ke.rain>.15;e!==Ke.on&&(Ke.on=e,Ve.rain(e));let n=1-an(.08,.3,Ii),s=on(Math.max(Bm(t)*.95,Ke.rain*.4,n*.4,.2));Ke.fog=s,qt.fog.near=lo(22,5,s),qt.fog.far=lo(250,85,s),oo.set(15131886).multiplyScalar(1-Me.night*.7),qt.fog.color.copy(Me.fog).lerp(oo,s*.55);let r=pi.material.uniforms;r.fogN.value=qt.fog.near,r.fogF.value=qt.fog.far,r.fog.value.copy(qt.fog.color),fi.material.uniforms.hor.value.lerp(qt.fog.color,s*.8),fi.material.uniforms.top.value.lerp(qt.fog.color,s*.35),co.intensity*=1-.22*Ke.rain,Vs.intensity*=1-.45*Ke.rain,VM.forEach(o=>{o.position.set(O.px,0,O.pz);let l=o.userData.t;oo.copy(Me.hor),_d.copy(Me.top).multiplyScalar(.55).lerp(oo.set(8095400).multiplyScalar(1-Me.night*.75),.45),o.material.uniforms.col.value.copy(Me.hor).lerp(_d,1-l).lerp(qt.fog.color,s*.75),o.material.uniforms.hor.value.copy(fi.material.uniforms.hor.value)});let a=Math.floor(t/25)-2;for(let o=0;o<ao;o++){let l=a+o,c=Om[(l%ao+ao)%ao],h=l*25,d=Ee(h)+(Q(l,3)-.5)*qe(h)*1.5;c.position.set(d+Math.sin(O.t*.05+l)*3,1.2+Q(l,4)*2.2,-h);let u=c.position.x-O.px,p=c.position.z-O.pz,g=Math.hypot(u,p);c.material.opacity=s*.5*an(6,22,g)*(1-an(300,380,g))*(.7+.3*Q(l,5)),c.material.color.copy(qt.fog.color).multiplyScalar(1.05)}if(mo.visible=Ke.rain>.03,Gm.opacity=.42*Ke.rain,mo.visible){for(let o=0;o<Pd;o++){let l=Hm[o];l[1]-=16*i,l[1]<0&&(l[1]=13+Math.random()*2,l[0]=Math.random()*40-20,l[2]=Math.random()*40-24);let c=O.px+l[0],h=O.pz+l[2];zm.set([c,l[1],h,c-.05,l[1]+.65,h],o*6)}Ld.attributes.position.needsUpdate=!0,Math.random()<i*9*Ke.rain&&Ys(O.px+(Math.random()-.5)*28,O.pz-Math.random()*22+4)}}var $r=["Puente de madera","Torii sobre el agua","Aldea de farolillos",zn.lm3,"Ca\xF1averal de las garzas","Templo de la campana","Cascadita de musgo","Casa de t\xE9","Bosque de bamb\xFA","Estanque de lotos"],Ss=new Set;try{JSON.parse(localStorage.getItem("rio3d-found")||"[]").forEach(i=>Ss.add(i))}catch{}function XM(){try{localStorage.setItem("rio3d-found",JSON.stringify([...Ss]))}catch{}}var qM=$r.map(i=>{let t=document.createElement("span");return t.className="chip",t.textContent=i,$e("chips").appendChild(t),t});function Dd(i){$e("places").textContent=Ss.size+"/"+$r.length,qM.forEach((e,n)=>e.classList.toggle("on",Ss.has(n)));let t=Math.max(0,Math.floor((i-240)/Kr)-1);for(;ni(t)<i+1;)t++;$e("next").textContent="Siguiente: "+$r[t%10]+" en "+Math.max(0,Math.round((ni(t)-i)/10)*10)+" m"}var Kr=260,ni=i=>240+i*Kr+Q(i,5)*50,Qt=(i,t)=>new Ie(Object.assign({gradientMap:We,color:i},t||{})),uo=[],Wr=new Map,YM=new Set,kt=(i,t,e,n,s,r,a,o,l)=>{let c=new K(new Fn(t,e,n),Qt(s,l));return c.position.set(r,a,o),i.add(c),c},Pe=(i,t,e,n,s,r,a,o,l=7,c)=>{let h=new K(new Ue(t,e,n,l),Qt(s,c));return h.position.set(r,a,o),i.add(h),h},dn=(i,t,e,n,s,r,a=.7)=>{let o=qi(t,e);return o.position.set(n,s,r),o.userData.base=a,i.add(o),uo.push(o),o},Yr=[],sd=new Map;function km(i,t,e,n=64,s=256){let r=i+t+n;if(sd.has(r))return sd.get(r);let a=document.createElement("canvas");a.width=n,a.height=s;let o=a.getContext("2d");o.fillStyle=t,o.fillRect(0,0,n,s),o.fillStyle=e,o.fillRect(0,0,n,5),o.fillRect(0,s-5,n,5);let l=Math.min(n*.72,s/Math.max(1,[...i].length)*.8);o.font="bold "+l+'px "Hiragino Mincho ProN","Noto Serif CJK JP","Yu Mincho","MS Mincho",serif',o.textAlign="center",o.textBaseline="middle";let c=[...i].length;[...i].forEach((d,u)=>o.fillText(d,n/2,s/(c*2)+u*s/c));let h=new Gi(a);return h.colorSpace=vn,sd.set(r,h),h}function om(i,t,e,n,s,r){let a=t(e,n),o=new ae;o.position.set(e,a,n),i.add(o),Pe(o,.07,.09,6.4,4864562,0,3.2,0,5),kt(o,1.3,.09,.09,4864562,.62,6,0);let l=new K(new rn(1.15,4.4),new Ie({gradientMap:We,map:km(s,r,"#f6efe0"),side:De}));return l.userData.noMerge=!0,l.position.set(.62,3.75,0),o.add(l),o.userData.sw=1,Yr.push({b:l,ph:e}),o}function $c(i,t,e,n,s=1){let r=new ae;r.position.set(e,t(e,n),n),r.scale.setScalar(s),i.add(r);let a=11052706;Pe(r,.5,.62,.3,a,0,.15,0,8),Pe(r,.17,.2,1.3,a,0,.95,0,6),Pe(r,.45,.3,.2,a,0,1.7,0,8),kt(r,.62,.55,.62,a,0,2.05,0),kt(r,.34,.34,.66,16767392,0,2.05,0).material=new Oe({color:16767392}),kt(r,.66,.34,.34,16767392,0,2.05,0).material=new Oe({color:16767392});let o=new K(new ke(.62,.5,4),Qt(a));o.rotation.y=Math.PI/4,o.position.y=2.6,r.add(o);let l=new K(new ye(.11,6,5),Qt(a));return l.position.y=2.92,r.add(l),dn(r,16762746,2.6,0,2.05,0,.8),r}function ZM(i,t,e,n){for(let a of[-1,1])Pe(i,.22,.3,10,6965818,a*(e+1.6),t(a*(e+1.6),n)+4.6,n,7);let s=e*2+3.2,r=Pe(i,.12,.12,s,15128736,0,8.6,n,6);r.rotation.z=Math.PI/2;for(let a=0;a<12;a++){let o=(a+.5)/12,l=-s/2+o*s,c=new K(new rn(.42,1),new Ie({gradientMap:We,color:16777215,side:De}));c.position.set(l,7.9,n),c.rotation.set(0,0,a%2?.18:-.18),i.add(c)}for(let a of[-1,1]){let o=new K(new ke(.3,1,6),Qt(15128736));o.position.set(a*(e*.5),7.8,n),o.rotation.x=Math.PI,i.add(o)}}function so(i,t,e,n,s,r){for(let a of[-1,1])om(i,t,a*(e+1.6),54,n,r),om(i,t,a*(e+3.6),49,n,r),$c(i,t,a*(e+2.8),42);s&&ZM(i,t,e,37)}function vd(i,t,e,n,s,r=1){let a=new K(new ke(t,e,4),Qt(s));a.rotation.y=Math.PI/4,a.position.y=n,a.scale.z=r,i.add(a);let o=t*.707;[[1,1],[-1,1],[1,-1],[-1,-1]].forEach(([l,c])=>{let h=new K(new ke(.32,1.3,5),Qt(s));h.position.set(l*o,n-e/2+.55,c*o*r),h.rotation.set(c*.7,0,-l*.7),i.add(h)})}function JM(i,t,e,n){let s=new ae;s.position.set(t,e,n),i.add(s),kt(s,6.4,1.2,6.4,9407624,0,.5,0);let r=1.1;for(let a=0;a<4;a++){let o=4.3-a*.75;kt(s,o,2.3,o,a%2?15853267:15326664,0,r+1.15,0),kt(s,o+.12,.18,o+.12,11880250,0,r+.1,0);for(let[l,c]of[[1,1],[-1,1],[1,-1],[-1,-1]])Pe(s,.1,.1,2.3,11880250,l*o/2,r+1.15,c*o/2,6);vd(s,(o/2+.95)/.707,1.5,r+2.9,5591134),r+=3.1}Pe(s,.1,.18,4.6,14264410,0,r+1.3,0,6);for(let a=0;a<6;a++)Pe(s,.55-a*.07,.55-a*.07,.12,14264410,0,r+.2+a*.62,0,8);return dn(s,16762746,5,0,3,3.4,.7),s}function $M(i,t,e,n,s,r){let a=new ae;return a.position.set(t,e,n),a.scale.setScalar(s),i.add(a),[-2.2,2.2].forEach(o=>Pe(a,.3,.36,6,r,o,3,0,8)),kt(a,6.8,.4,.55,2894382,0,6.4,0),kt(a,5.6,.35,.4,r,0,5.4,0),kt(a,.5,.9,.4,r,0,5.85,0),a}function KM(i,t){let e=new ae,n=16184302,s=15328474,r=new K(new ye(.5,10,8),Qt(n));r.scale.set(1,.8,1.5),r.position.y=1.35,e.add(r);let a=new K(new ke(.2,.7,5),Qt(s));a.rotation.x=-Math.PI/2-.3,a.position.set(0,1.35,-.85),e.add(a),Pe(e,.045,.045,1.1,4012598,-.12,.55,.05,4),Pe(e,.045,.045,1.1,4012598,.12,.55,.05,4);let o=new ae;o.userData.noMerge=!0,o.position.set(0,1.6,.55),e.add(o);let l=Pe(o,.07,.09,1,n,0,.45,.05,5);l.rotation.x=-.35;let c=Pe(o,.06,.07,.7,n,0,1.05,.3,5);c.rotation.x=.45;let h=new K(new ye(.14,8,6),Qt(n));h.position.set(0,1.4,.55),o.add(h);let d=new K(new ke(.05,.5,4),Qt(14918218));return d.rotation.x=Math.PI/2,d.position.set(0,1.38,.9),o.add(d),e.scale.setScalar(i),Yr.push({nk:o,ph:t}),e}var Zr=new Qe({transparent:!0,depthWrite:!1,side:De,uniforms:{t:{value:0},fogCol:{value:new vt(14542062)}},vertexShader:"varying vec2 vU;varying float vD;void main(){vU=uv;vec4 mv=modelViewMatrix*vec4(position,1.);vD=-mv.z;gl_Position=projectionMatrix*mv;}",fragmentShader:`varying vec2 vU;varying float vD;uniform float t;uniform vec3 fogCol;void main(){float s=sin(vU.x*34.+sin(vU.y*7.)*.9)*.5+.5;float f=fract(vU.y*2.6-t*1.0+s*.35);float a=.62+.3*smoothstep(.25,.9,f)*s;float e=smoothstep(0.,.1,vU.x)*smoothstep(1.,.9,vU.x);vec3 c=mix(vec3(.72,.88,.96),vec3(1.),f*s);float fg=smoothstep(70.,220.,vD);c=mix(c,fogCol,fg*.85);gl_FragColor=vec4(c,a*e*(1.-fg*.45));
#include <colorspace_fragment>
}`}),Nd=new Qe({transparent:!0,depthWrite:!1,blending:Vi,uniforms:{map:{value:$s},k:{value:1}},vertexShader:"attribute vec3 iC;attribute float iS;attribute vec3 iCol;attribute float iB;uniform float k;varying vec2 vU;varying vec3 vCol;varying float vA;void main(){vU=uv;vCol=iCol;vA=iB*(.3+.7*k);vec4 mv=modelViewMatrix*vec4(iC,1.);mv.xy+=position.xy*iS;gl_Position=projectionMatrix*mv;}",fragmentShader:`uniform sampler2D map;varying vec2 vU;varying vec3 vCol;varying float vA;void main(){vec4 t=texture2D(map,vU);gl_FragColor=vec4(vCol*t.rgb,t.a*vA);
#include <colorspace_fragment>
}`}),rd=new ve,Oc=new I;function jM(i){i.updateMatrixWorld(!0),rd.copy(i.matrixWorld).invert();let t=new Map,e=[],n=[];i.traverse(s=>{if(s.isSprite&&s.userData.base!=null){e.push(s);return}if(!s.isMesh||s.isInstancedMesh||s.material.isShaderMaterial||!s.material.isMaterial)return;for(let c=s;c&&c!==i;c=c.parent)if(c.userData.noMerge)return;let r=s.material,a=[r.type,r.color.getHex(),r.emissive?r.emissive.getHex():0,r.side,r.map?r.map.uuid:0,r.transparent,r.opacity,r.depthWrite].join("|"),o=s.geometry;o=o.index?o.toNonIndexed():o.clone();for(let c of Object.keys(o.attributes))c!=="position"&&c!=="normal"&&c!=="uv"&&o.deleteAttribute(c);o.attributes.normal||o.computeVertexNormals(),o.attributes.uv||o.setAttribute("uv",new me(new Float32Array(o.attributes.position.count*2),2)),o.applyMatrix4(rd.clone().multiply(s.matrixWorld));let l=t.get(a);l||(l={mat:r,geos:[]},t.set(a,l)),l.geos.push(o),n.push(s)});for(let s of n)s.parent&&s.parent.remove(s),s.geometry.dispose(),s.material.dispose&&![...t.values()].some(r=>r.mat===s.material)&&s.material.dispose();for(let s of t.values()){let r=Gr(s.geos);if(s.geos.forEach(o=>o.dispose()),!r)continue;let a=new K(r,s.mat);i.add(a)}if(e.length){let s=e.length,r=new rn(1,1),a=new Va;a.index=r.index,a.setAttribute("position",r.attributes.position),a.setAttribute("uv",r.attributes.uv);let o=new Float32Array(s*3),l=new Float32Array(s),c=new Float32Array(s*3),h=new Float32Array(s);e.forEach((u,p)=>{Oc.setFromMatrixPosition(u.matrixWorld).applyMatrix4(rd),o.set([Oc.x,Oc.y,Oc.z],p*3),l[p]=u.scale.x,c.set([u.material.color.r,u.material.color.g,u.material.color.b],p*3),h[p]=u.userData.base,u.parent&&u.parent.remove(u),u.material.dispose()}),a.setAttribute("iC",new li(o,3)),a.setAttribute("iS",new li(l,1)),a.setAttribute("iCol",new li(c,3)),a.setAttribute("iB",new li(h,1)),a.instanceCount=s;let d=new K(a,Nd);d.frustumCulled=!1,d.renderOrder=4,i.add(d)}return i}function QM(i){let t=new Set([Nd,Zr,Xr.material]);i.traverse(e=>{if(e.isInstancedMesh&&e.userData.keep){e.dispose();return}e.geometry&&e.geometry.dispose(),(e.material?Array.isArray(e.material)?e.material:[e.material]:[]).forEach(s=>{t.has(s)||s.dispose()})});for(let e=Yr.length-1;e>=0;e--){let n=Yr[e],r=n.b||n.nk;for(;r&&r!==i;)r=r.parent;r===i&&Yr.splice(e,1)}for(let e=uo.length-1;e>=0;e--){let n=uo[e];for(;n&&n!==i;)n=n.parent;n===i&&uo.splice(e,1)}}function tS(i){return jM(eS(i))}function eS(i){let t=ni(i),e=mi(t),n=i%10,s=new ae,r=qe(t),a=n===6||Q(i,9)>.5?1:-1;s.position.set(Ee(t),0,-t),s.rotation.y=-e;let o=(p,g)=>{let x=-e;return _s(Ee(t)+p*Math.cos(x)+g*Math.sin(x),t-(-p*Math.sin(x)+g*Math.cos(x)))},l=13199183,c=11569004,h=8018508,d=zn.lm3c,u=8368266;if(n===0){let p=r*2+12,g=18,x=11880250,f=10329242,m=S=>3.4+1.7*(1-S*S);for(let S=0;S<g;S++){let R=(S+.5)/g*2-1,_=R*p/2,T=m(R),A=kt(s,p/g+.4,.34,4.2,c,_,T,0,{map:He("plank")});A.rotation.z=-R*.4,kt(s,.07,.34,4.3,h,_-p/g/2,T,0).rotation.z=-R*.4}for(let S of[-1.7,1.7])for(let R=0;R<g;R++){let _=(R+.5)/g*2-1,T=_*p/2,A=kt(s,p/g+.5,.4,.3,7293498,T,m(_)-.4,S);A.rotation.z=-_*.4}for(let S of[-2,2]){for(let R=0;R<=g;R++){let _=R/g*2-1,T=_*p/2,A=m(_);kt(s,.18,1.5,.18,x,T,A+.95,S);let P=new K(new ye(.16,8,6),Qt(14264410));if(P.position.set(T,A+1.8,S),s.add(P),R%3===0){let N=new K(new Ue(.22,.22,.45,8),new Oe({color:16767392}));N.position.set(T,A+2.35,S),s.add(N);let z=new K(new ke(.3,.2,8),Qt(x));z.position.set(T,A+2.68,S),s.add(z),dn(s,16762746,3,T,A+2.35,S,.8)}}for(let R=0;R<g;R++){let _=(R+.5)/g*2-1,T=_*p/2,A=m(_),P=kt(s,p/g+.2,.14,.14,x,T,A+1.5,S);P.rotation.z=-_*.4;let N=kt(s,p/g+.2,.1,.1,x,T,A+.7,S);N.rotation.z=-_*.4}}let M=m(0);for(let[S,R]of[[-2.6,-1.8],[2.6,-1.8],[-2.6,1.8],[2.6,1.8]])Pe(s,.22,.26,4.2,x,S,M+2.1,R,8);let w=new K(new ke(4.6,2.4,4),Qt(5982799));w.rotation.y=Math.PI/4,w.position.y=M+5.4,w.scale.set(1,1,.8),s.add(w),kt(s,6.4,.3,.3,14264410,0,M+4.35,-1.8),kt(s,6.4,.3,.3,14264410,0,M+4.35,1.8);let v=new K(new ye(.4,10,8),new Oe({color:16764810}));v.position.set(0,M+3.6,0),s.add(v),dn(s,16762746,6,0,M+3.6,0,.9);let b=[15245466,15913098,10274736,10466268];for(let S=0;S<12;S++){let R=(S+.5)/12*2-1,_=R*(p/2-2),T=m(R)+2.7+Math.sin(S*1.7)*.06,A=new K(new rn(.5,.7),Qt(b[S%4],{side:De}));A.position.set(_,T,0),A.rotation.set(0,0,Math.PI),s.add(A)}kt(s,p-4,.04,.04,7293498,0,m(0)+3.1,0).scale.y=1,[-1,1].forEach(S=>{let R=S*(p/2+.6);kt(s,3.4,5.5,5,f,R,.3,0,{map:He("stone")}),kt(s,3.6,.35,5.3,8223610,R,3.2,0);for(let A=0;A<3;A++)kt(s,1.2,.3,4.2,f,S*(p/2+2.6+A*1.1),.2+A*0,0).position.y=2.2-A*.8;let _=new K(new ye(.5,8,6),Qt(12039082));_.scale.set(.9,1.1,1),_.position.set(R,3.9,2.2),s.add(_);let T=_.clone();T.position.z=-2.2,s.add(T)}),[-.28,.28].forEach(S=>{kt(s,1.8,5.2,4,f,S*p,.4,0,{map:He("stone")})})}else if(n===1)[-1,1].forEach(p=>{Pe(s,.32,.38,7,l,p*3.6,2,0,10)}),kt(s,10.5,.5,1,l,0,5.7,0),kt(s,11.8,.35,1.3,5982794,0,6.15,0),kt(s,8,.28,.5,l,0,4.8,0),dn(s,16762746,3,0,4.2,0,.6);else if(n===2){let p=(f,m,M,w,v,b,S,R)=>{let _=o(m,M);f.position.set(m,_-.2,M),f.rotation.y=R,s.add(f),kt(f,w,b,v,15258550,0,b/2,0,{map:He("plank")}),kt(f,w+.3,.35,v+.3,7293498,0,.1,0);let T=new K(new ke(Math.max(w,v)*.82,b*.7,4),Qt(S));T.rotation.y=Math.PI/4,T.position.y=b+b*.3,T.scale.set(w/Math.max(w,v),1,v/Math.max(w,v)),f.add(T);let A=new Oe({color:16769184}),P=kt(f,.9,.9,.12,16769184,-w*.22,b*.55,v/2+.02);P.material=A;let N=kt(f,.9,.9,.12,16769184,w*.22,b*.55,v/2+.02);N.material=A,kt(f,.8,1.5,.14,8014394,0,.85,v/2+.04),dn(f,16762746,4.2,-w*.22,b*.55,v/2+.6,.85),dn(f,16762746,4.2,w*.22,b*.55,v/2+.6,.85);let z=kt(f,.7,1.6,.7,9075314,w*.25,b+1.1,-v*.2),L=qi(16777215,3);L.material.blending=ci,L.material.opacity=.3,L.position.set(w*.25,b+2.8,-v*.2),f.add(L);let B=new K(new ye(.22,8,6),Qt(14245962,{emissive:8006170}));B.position.set(w/2-.2,b*.78,v/2+.5),f.add(B),dn(f,16751210,2.4,w/2-.2,b*.78,v/2+.5,.8)},g=[11759722,9398879,11042906,8219250],x=0;for(let f of[-1,1])for(let m=0;m<7;m++){let M=-26+m*8.5+Q(i,m+f*9)*3,w=r+7+Q(i,m+30+f)*6+m%2*5,v=4+Q(i,m+50)*2.5,b=3.6+Q(i,m+60)*2,S=2.6+Q(i,m+70)*1.6;p(new ae,f*w,M,v,b,S,g[(m+x)%4],f>0?-Math.PI/2:Math.PI/2),x++}for(let[f,m]of[[-1,-10],[1,6],[-1,18]]){let M=new ae;M.position.set(f*(r-3.2),.35,m),s.add(M),kt(M,8,.25,2.2,11569004,f*-0+0,0,0,{map:He("plank")}).position.x=f*4;for(let b of[0,3,6.4])for(let S of[-1,1])Pe(M,.1,.12,1.8,7293498,f*b+0,.2,S,5);let w=new K(new ye(.26,8,6),new Oe({color:16766362}));w.position.set(f*6.4,1.5,1),M.add(w),dn(M,16762746,3.6,f*6.4,1.5,1,.9);let v=new K(new ye(1,10,6),Qt(6965818));v.scale.set(.6,.3,1.9),v.position.set(f*-3.2,-.15,2.2),M.add(v)}for(let f=0;f<18;f++){let m=f/17,M=-24+m*48,w=f%2?1:-1,v=new K(new ye(.25,8,6),new Oe({color:f%3?16766362:16751226}));v.position.set(w*(r+4+Math.sin(f)*1.2),4.2+Math.sin(f*1.9)*.5,M),s.add(v),dn(s,f%3?16762746:16751210,3.2,v.position.x,v.position.y,M,.85)}dn(s,16756838,46,a*(r+11),6,0,.28);for(let f of[-1,1])Pe(s,.25,.3,6.5,11880250,f*(r-.5),2.6,-34,8);kt(s,r*2,.4,.5,11880250,0,5.8,-34),dn(s,16762746,4,-r*.5,5.2,-34,.9),dn(s,16762746,4,r*.5,5.2,-34,.9),dn(s,16762746,4,0,5.2,-34,.9)}else if(n===3)for(let p=0;p<9;p++){let g=a*(r+5+Q(i,p)*10),x=(p-4)*4.5+Q(i,p+20)*2,f=o(g,x),m=new ae;m.position.set(g,f,x),s.add(m),Pe(m,.25,.4,3.4,8018508,0,1.7,0,6);let M=new K(new Ln(2.6+Q(i,p+40),1),Qt(d));M.scale.y=.8,M.position.y=4.4,m.add(M)}else if(n===4){so(s,o,r,"\u9DFA",!1,"#5f8aa8");let p=900,g=new Pn(Rm,Xr.material,p);g.frustumCulled=!1;let x=0;for(let m=0;m<p;m++){let M=m%2?1:-1,w=M*(r-5.5+Q(i,m)*13),v=(Q(i,m+50)-.5)*84;if(Math.abs(w)<r-5.8)continue;let b=1.1+Q(i,m+70)*1.5,S=Math.max(-.25,o(w,v)-.15);gn.set(w,S,v),mn.setFromAxisAngle(ro,Q(i,m+90)*6.28),tn.set(b,b*(1+Q(i,m+30)*.9),b),Xe.compose(gn,mn,tn),g.setMatrixAt(x,Xe),g.setColorAt(x,Je.set(Cm[Q(i,m+4)*4|0])),x++}g.count=x,g.userData.keep=!0,s.add(g);for(let m=0;m<20;m++){let M=m%2?1:-1,w=m%3!==0,v=M*(r-(w?2.2+Q(i,m)*3.5:-1.5+Q(i,m)*2)),b=(Q(i,m+10)-.5)*70,S=KM(.95+Q(i,m+5)*.5,Q(i,m)*6.28);S.position.set(v,w?-.12:o(v,b)-.1,b),S.rotation.y=Q(i,m+3)*6.28,s.add(S)}let f=qi(16777215,10);f.material.blending=ci,f.material.opacity=.25,f.position.set(0,1.2,0),s.add(f)}else if(n===5){so(s,o,r,"\u9418",!0,"#9a3a30");let p=a*(r+19),g=o(p,0),x=new ae;x.position.set(p,g,0),x.rotation.y=-a*Math.PI/2,s.add(x);let f=10131604;kt(x,17,3,15,f,0,-.5,0),kt(x,15,.5,13,11841964,0,1.25,0),kt(x,13,.5,11,12763064,0,1.75,0);for(let b=0;b<7;b++)kt(x,6,.4,1.1,f,0,1.5-b*.28,7.9+b*.95);for(let[b,S]of[[-4,-3.2],[4,-3.2],[-4,3.2],[4,3.2],[-4,0],[4,0]])Pe(x,.34,.38,5,12730163,b,4.6,S,8);kt(x,9.4,.5,.7,12730163,0,7.3,3.4),kt(x,9.4,.5,.7,12730163,0,7.3,-3.4),kt(x,.7,.5,7.2,12730163,-4.2,7.3,0),kt(x,.7,.5,7.2,12730163,4.2,7.3,0),kt(x,9,.35,.6,14264410,0,6.7,3.4),kt(x,9,.2,7,8018508,0,2.15,0),vd(x,9.6,2.7,9.1,4999770),kt(x,5.2,1.5,5.2,15721421,0,8.7,0),kt(x,5.5,.2,5.5,12730163,0,7.9,0),vd(x,5.3,2,11.2,4144461),Pe(x,.1,.1,1.6,14264410,0,13,0,6);let m=new K(new ye(.34,8,6),Qt(14264410,{emissive:5913104}));m.position.y=12.3,x.add(m),kt(x,.5,.5,5,4864562,0,6.8,0),Pe(x,.05,.05,1.1,3811874,0,6.1,0,4);let M=Pe(x,.75,1.15,2,11831615,0,4.9,0,12,{emissive:4862992});Pe(x,.8,.8,.12,14264410,0,5.6,0,12),dn(x,16762746,5,0,4.6,0,.6);let w=Pe(x,.2,.2,4,6965818,0,3.3,2.6,6);w.rotation.x=Math.PI/2,w.position.set(0,3.5,2.6),Pe(x,.025,.025,1.6,15128736,0,4.6,2.2,4);for(let b of[-4,4])for(let S of[3.4,-3.4]){let R=new K(new ye(.34,8,6),Qt(14245962,{emissive:9054746}));R.scale.y=1.3,R.position.set(b*1.12,6.2,S*1.05),x.add(R),dn(x,16751210,3,b*1.12,6.2,S*1.05,.85)}for(let b of[-3.4,3.4])for(let S of[10.4,14.5])$c(x,()=>0,b,S,1.15).position.y=-.1;for(let b=0;b<5;b++)kt(x,2.6,.12,1.6,f,0,-.3,10+b*2.1);$M(x,0,-.4,17.5,1.1,12730163);let v=JM(x,0,1.5,-3.5);v.position.set(a>0?-11.5:11.5,1.5,-2.5),v.scale.setScalar(1.1)}else if(n===6){let p=a*(r+3.6),g=o(p,0),x=new ae;x.position.set(p,g,0),s.add(x),so(s,o,r,"\u6EDD",!1,"#3f7a8a");let f=S=>Qt(S);for(let S=0;S<22;S++){let R=3+Q(i,S)*3.5,_=a*(7.8+Q(i,S+5)*9),T=Q(i,S+9)*15+(_*a<8?3:0),A=(Q(i,S+13)-.5)*17,P=new K(new Ln(R,1),f(S%3?8030846:7114616));P.position.set(_,T,A),P.scale.y=1.2,x.add(P);let N=new K(new Ln(R*.75,1),f(8369002));N.position.set(_,T+R*.65,A),N.scale.set(1.05,.45,1.05),x.add(N)}for(let S=0;S<10;S++){let R=1+Q(i,S+60)*1.2,_=new K(new Ln(R,0),f(8030846));_.position.set(-a*(.5+Q(i,S+70)*3),R*.4,(Q(i,S+80)-.5)*12),x.add(_)}let m=new K(new rn(7,19,1,1),Zr);m.position.set(-a*.5,9.6,0),m.rotation.y=Math.PI/2,x.add(m);let M=new K(new rn(3,14,1,1),Zr);M.position.set(-a*.7,7,-5.6),M.rotation.y=Math.PI/2,M.rotation.z=.04,x.add(M);let w=new K(new rs(6.5,24).rotateX(-Math.PI/2),new Oe({color:13627122,transparent:!0,opacity:.6,depthWrite:!1}));w.position.set(-a*3.6,.1,0),x.add(w);let v=new K(new rn(3.4,4.6).rotateX(-Math.PI/2),Zr);v.rotation.y=a>0?Math.PI/2:-Math.PI/2,v.position.set(-a*3.4,.12,0),x.add(v);for(let S=0;S<6;S++){let R=qi(16777215,5+Q(i,S)*3);R.material.blending=ci,R.material.opacity=.5,R.position.set(-a*(1+Q(i,S+3)*4),.5+Q(i,S)*.8,(Q(i,S+9)-.5)*7),x.add(R)}let b=qi(16777215,26);b.material.blending=ci,b.material.opacity=.5,b.position.set(-a*3,4,0),x.add(b)}else if(n===7){so(s,o,r,"\u8336",!0,"#a9453a");let p=a*(r-3),g=new ae;g.position.set(p,0,0),s.add(g);for(let m of[-2.4,2.4])for(let M of[-2,2])Pe(g,.12,.12,3,h,m,-.2,M,5);kt(g,6,.3,5,c,0,1.3,0),kt(g,4.6,2.4,3.6,15258550,0,2.6,0),kt(g,4.8,.2,3.8,5982794,0,3.9,0),kt(g,4.7,.15,3.7,5982794,0,1.45,0);let x=new K(new ke(4.6,2,4),Qt(9398879));x.rotation.y=Math.PI/4,x.position.y=4.8,g.add(x),kt(g,1.2,1.1,.1,16769184,0,2.7,1.85).material=new Oe({color:16769184}),dn(g,16762746,4,0,2.7,2.1,.9);for(let m of[-.55,.55]){let M=new K(new rn(1,1.4),new Ie({gradientMap:We,map:km("\u8336","#2f3f6b","#ffffff",128,160),side:De}));M.position.set(m,2.9,1.93),g.add(M)}for(let m of[-2.4,2.4]){let M=new K(new ye(.3,8,6),Qt(14245962,{emissive:8006170}));M.scale.y=1.3,M.position.set(m,3.2,2.3),g.add(M),dn(g,16751210,2.6,m,3.2,2.3,.8)}Pe(g,.05,.05,2.6,c,3.4,2.2,3.2,5);let f=new K(new ke(1.7,.7,12),Qt(12730163));f.position.set(3.4,3.6,3.2),g.add(f),kt(g,1.8,.15,.6,c,3.4,1.5,3.2),kt(g,1.8,.05,.62,12730163,3.4,1.6,3.2);for(let m of[-1,1]){let M=$c(s,o,p+m*6,5,1);M.position.y=o(p+m*6,5)}}else if(n===8){so(s,o,r,"\u7AF9\u6797",!1,"#4f8a5a");for(let p of[-1,1])for(let g=0;g<6;g++)$c(s,o,p*(r+3+Q(i,g)*2.5),-45+g*18+Q(i,g+3)*4);for(let p=0;p<12;p++){let g=p%2?1:-1,x=g*(r+4+Q(i,p)*12),f=(Q(i,p+20)-.5)*110,m=new K(new rn(3.6,22),new Oe({map:$s,color:16773296,transparent:!0,opacity:.14,blending:Vi,depthWrite:!1,side:De}));m.position.set(x,o(x,f)+10,f),m.rotation.set(0,Q(i,p+9)*3,g*.25),s.add(m)}}else for(let p=0;p<46;p++){let g=(Q(i,p)-.5)*r*1.5,x=(Q(i,p+40)-.5)*34,f=new K(new rs(.8+Q(i,p+7)*.5,10).rotateX(-Math.PI/2),Qt(8372106,{side:De}));if(f.position.set(g,.05,x),s.add(f),p%4===0){let m=new K(new Ln(.34,0),Qt(16098493,{emissive:9058896}));m.scale.y=1.2,m.position.set(g,.3,x),s.add(m),dn(s,16752576,1.8,g,.5,x,.35)}}return s}var xn=null,fo=0,gs=new I,ad=new I,od=new ln,lm=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},nS=matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;function iS(i){if(xn||nS||ti.photo)return;let t=Wr.get(i);if(!t)return;let e=ni(i),n=qe(e),s=i%10,r=s===6||Q(i,9)>.5?1:-1,a=[[0,5,0,0],[0,4,0,0],[0,5,0,0],[r*(n+10),4,0,1],[0,2.5,0,0],[r*(n+19),6,0,1],[r*(n+8),8,0,1],[r*(n-3),3,0,1],[0,8,0,0],[0,0,0,0]][s],o=a[3]===1,l=o?Math.abs(a[0])+n*.3:[46,30,52,0,40,0,0,0,30,30][s];xn={k:i,g:t,t:0,dur:11.5,fx:a[0],fy:a[1],fz:a[2],sd:r,sided:o,R:Math.max(30,l),h:[10,6,12,10,8,13,10,7,6,9][s]}}function sS(){xn&&xn.t>1.5&&(xn.t=Math.max(xn.t,xn.dur-2.4))}function rS(i){if(!xn){fo=0;return}xn.t+=i,!xn.snapped&&xn.t>5.4&&(xn.snapped=!0,ti.snap(xn.k%10));let t=xn,e=lm(0,2.6,t.t)*(1-lm(t.dur-2.6,t.dur,t.t));if(fo=e,t.t>=t.dur){xn=null,fo=0;return}t.g.updateMatrixWorld(!0);let n=-.5+.95*(t.t/t.dur),s=Math.cos(n),r=Math.sin(n),a=t.sided?-t.sd:0,o=t.sided?0:1,l=a*s+o*r,c=-a*r+o*s;gs.set(t.fx+l*t.R,t.fy+t.h,t.fz+c*t.R),t.g.localToWorld(gs);let h=_s(gs.x,-gs.z);gs.y=Math.max(gs.y,h+3),ad.set(t.fx,t.fy,t.fz),t.g.localToWorld(ad),od.position.copy(gs),od.lookAt(ad),On.position.lerp(gs,e),On.quaternion.slerp(od.quaternion,e)}var cm=new Set;function aS(i){let t=Math.max(0,Math.floor((i-140)/Kr)),e=Math.floor((i+340)/Kr);for(let[n,s]of Wr)(n<t||n>e)&&(s.parent&&qt.remove(s),QM(s),Wr.delete(n));for(let n=t;n<=e;n++){let s=Wr.get(n);s||(s=tS(n),Wr.set(n,s)),s.parent||qt.add(s);{let r=n%10;if(ni(n)-i<(r===2?70:55)&&i-ni(n)<25&&(!Ss.has(r)||!ti.hasSnap(r)&&!cm.has(r))){let a=!Ss.has(r);if(Ss.add(r),cm.add(r),YM.add(n),iS(n),a){Js("Descubriste: "+$r[r]);try{Ve.chime(0,n%5)}catch{}XM(),Dd(i),ti.found(r)}}}}for(let n of uo)n.material.opacity=n.userData.base*(.3+.7*bs);Nd.uniforms.k.value=bs,Zr.uniforms.t.value=O.t,Zr.uniforms.fogCol.value.copy(qt.fog.color);for(let n of Yr)n.nk?n.nk.rotation.x=Math.sin(O.t*.5+n.ph)*.08+Math.pow(Math.max(0,Math.sin(O.t*.23+n.ph*3)),6)*.9:n.b.rotation.y=Math.sin(O.t*1.1+n.ph)*.12}var xo=0,di=0,xs=0,hm=new Mn,um=new Mn,ld=new ln,cd=new I,zc=new I,Hc=new I,Vm=$e("cam");function _o(i){xo=i,Vm.textContent=i?"Vista: 3\xAA persona":"Vista: 1\xAA persona";try{localStorage.setItem("rio3d-cam",i)}catch{}}Vm.onclick=()=>_o(1-xo);addEventListener("keydown",i=>{i.code==="KeyC"&&_o(1-xo)});try{_o(+localStorage.getItem("rio3d-cam")||0)}catch{}var Wm=new Oe({vertexColors:!0,transparent:!0,opacity:.7,depthWrite:!1,side:De}),jr=ei,Xm=new Float32Array(jr*4*2*3),qm=new Float32Array(jr*4*2*4),Qr=new ge;Qr.setAttribute("position",new me(Xm,3));Qr.setAttribute("color",new me(qm,4));{let i=[];for(let t=0;t<2;t++)for(let e=0;e<jr-1;e++){let n=(t*jr+e)*4;i.push(n,n+1,n+4,n+1,n+5,n+4,n+1,n+2,n+5,n+2,n+6,n+5,n+2,n+3,n+6,n+3,n+7,n+6)}Qr.setIndex(i)}var uh=new K(Qr,Wm);uh.frustumCulled=!1;uh.renderOrder=1;qt.add(uh);function dm(i){let t=i-60;for(let e=0;e<2;e++){let n=e?1:-1;for(let s=0;s<jr;s++){let r=t+s*Xn,a=qe(r)-1+(fn(r*.08,e*9)-.5)*.9,o=.9+fn(r*.2,e)*.9,l=Ee(r)+n*a,c=-r,h=.25+.55*fn(r*.11+e*30,5),d=(e*jr+s)*4,u=[l-n*o*1.4,l-n*o*.4,l+n*o*.5,l+n*o*1.5],p=[0,h,h*.6,0];for(let g=0;g<4;g++)Xm.set([u[g],.05,c],(d+g)*3),qm.set([1,1,1,p[g]],(d+g)*4)}}Qr.attributes.position.needsUpdate=Qr.attributes.color.needsUpdate=!0}var Ym=36,Ud=[];for(let i=0;i<Ym;i++){let t=new K(new rs(.5,20).rotateX(-Math.PI/2),new Oe({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));t.position.y=.045,t.userData={age:9,vx:0,vz:0},qt.add(t),Ud.push(t)}var oS=0,hd=0;function fm(i,t,e,n,s){let r=Ud[oS++%Ym];r.position.set(i,.045,t),r.userData={age:0,vx:e,vz:n,sc:s},r.scale.setScalar(.4)}var dh=60,Fd=new ge,Kc=new Float32Array(dh*3),Bd=[];for(let i=0;i<dh;i++)Bd.push({l:0,x:0,y:-9,z:0,vx:0,vy:0,vz:0});Fd.setAttribute("position",new me(Kc,3));var lS=new Hi({color:15398655,size:.16,transparent:!0,opacity:.9,depthWrite:!1}),Zm=new is(Fd,lS);Zm.frustumCulled=!1;qt.add(Zm);var cS=0;function pm(i,t,e,n){for(let s=0;s<n;s++){let r=Bd[cS++%dh];r.l=1,r.x=i,r.y=t,r.z=e;let a=Math.random()*6.28,o=.8+Math.random()*1.4;r.vx=Math.cos(a)*o,r.vz=Math.sin(a)*o,r.vy=2+Math.random()*2.2}Ys(i,e)}var hS=5,fh=[],mm=[[15763530,16773600],[15245898,16177568],[14835775,16771538],[14272928,15763530]];function uS(i){let t=new ae,e=mm[i%mm.length],n=new K(new ye(.5,12,8),Qt(e[0]));n.scale.set(.32,.26,1),t.add(n);let s=new K(new ye(.5,10,6),Qt(e[1]));s.scale.set(.33,.1,.55),s.position.set(0,.12,-.05),t.add(s);let r=new ae;r.position.z=.45,t.add(r);let a=new K(new ke(.22,.5,4),Qt(e[0],{side:De}));a.rotation.x=-Math.PI/2,a.scale.set(1.2,1,.18),a.position.z=.22,r.add(a);let o=new K(new ke(.08,.3,3),Qt(e[0]));return o.position.set(0,.2,.05),o.rotation.x=-.3,t.add(o),t.userData={tail:r,st:0,t:0,ph:Math.random()*6,sp:.7+Math.random()*.6,tx:0,tz:0,jt:0},qt.add(t),t}for(let i=0;i<hS;i++)fh.push(uS(i));function Jm(i,t){let e=t+14+Math.random()*70,n=(Math.random()*2-1)*(qe(e)-3);i.position.set(Ee(e)+n,-.05,-e),i.userData.st=0,i.userData.hd=mi(e)+(Math.random()-.5)*1.2,i.userData.jt=2+Math.random()*10,i.rotation.set(0,0,0),i.visible=!0}fh.forEach(i=>Jm(i,30+Math.random()*60));function dS(i,t){for(let e of fh){let n=e.userData;n.t+=i;let s=e.position.z-O.pz,r=-e.position.z;if(r<t-12||r>t+120){Jm(e,t);continue}if(n.st===0){n.hd+=Math.sin(n.t*.6+n.ph)*.5*i;let a=e.position.x-Ee(r),o=qe(r)-3;Math.abs(a)>o&&(n.hd+=(mi(r)+(a>0?-1:1)*.9-n.hd)*i*1.5),e.position.x+=Math.sin(n.hd)*n.sp*i,e.position.z-=Math.cos(n.hd)*n.sp*i,e.position.y=-.02+Math.sin(n.t*2+n.ph)*.01,e.rotation.set(0,-n.hd+Math.PI,0),n.tail.rotation.y=Math.sin(n.t*7)*.5,Math.random()<i*.03&&s<-6&&s>-45?(e.userData.st=1,n.j=0,n.vx=Math.sin(n.hd)*2.6,n.vz=-Math.cos(n.hd)*2.6,pm(e.position.x,.1,e.position.z,5),Ve.plop((e.position.x-O.px)/25)):Math.random()<i*.05&&Math.abs(s)<30&&Math.abs(s)>5&&fm(e.position.x,e.position.z,0,0,.7)}else{n.j+=i;let a=.95,o=n.j/a,l=Math.sin(Math.PI*o)*1.25;e.position.x+=n.vx*i,e.position.z+=n.vz*i,e.position.y=-.02+l;let c=Math.cos(Math.PI*o)*1.25*Math.PI/a;e.rotation.set(0,-n.hd+Math.PI,0),e.rotateX(Math.atan2(c,2.6)),n.tail.rotation.y=Math.sin(n.t*26)*.6,n.j>=a&&(e.userData.st=0,e.position.y=-.02,e.rotation.set(0,-n.hd+Math.PI,0),pm(e.position.x,.1,e.position.z,9),Ve.plop((e.position.x-O.px)/25))}}for(let e=0;e<dh;e++){let n=Bd[e];n.l>0&&(n.l-=i*1.4,n.vy-=9*i,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i,n.y<0&&(n.l=0)),Kc[e*3]=n.l>0?n.x:0,Kc[e*3+1]=n.l>0?n.y:-50,Kc[e*3+2]=n.z}if(Fd.attributes.position.needsUpdate=!0,hd-=i,hd<=0&&Es){hd=.11;let e=Math.min(O.v,5),n=Math.cos(O.psi),s=Math.sin(O.psi),r=O.px-Math.sin(O.psi)*1.5,a=O.pz+Math.cos(O.psi)*1.5;for(let o of[-1,1])fm(r+n*.5*o,a+s*.5*o,n*o*.5,s*o*.5,1)}Ud.forEach(e=>{let n=e.userData;if(n.age>=3.2){e.material.opacity=0;return}n.age+=i;let s=n.age/3.2;e.position.x+=(n.vx||0)*i,e.position.z+=(n.vz||0)*i,e.scale.setScalar((.4+s*2.6)*(n.sc||1)),e.material.opacity=.38*(1-s)*(1-s)})}var fS=[],ph=[];function pS(i){let t=new ae,e=[4178377,14701130,5214169,8115818],n=e[i%4],s=new K(new Ue(.025,.018,.5,6),Qt(n,{emissive:n,emissiveIntensity:.35}));s.rotation.x=Math.PI/2,t.add(s);let r=new K(new ye(.055,8,6),Qt(n));r.position.z=-.27,t.add(r);let a=new Oe({color:15398655,transparent:!0,opacity:.5,side:De,depthWrite:!1}),o=[];return[[-1,-.1],[-1,.06],[1,-.1],[1,.06]].forEach(([l,c])=>{let h=new ae;h.position.set(0,.02,c),t.add(h);let d=new K(new rn(.38,.1).rotateX(-Math.PI/2),a);d.position.x=l*.2,h.add(d),o.push([h,l])}),t.scale.setScalar(1.8),t.userData={wings:o,tx:0,ty:1,tz:0,t:0,ph:Math.random()*6,sp:4},qt.add(t),t}for(let i=0;i<8;i++)ph.push(pS(i));var mh=[];function mS(i){let t=new ae,e=i%2?7301724:15328472,n=i%2?4868672:13217410,s=new K(new ye(.3,10,8),Qt(e));s.scale.set(.85,.6,1.35),s.position.y=.12,t.add(s);let r=new K(new ke(.12,.3,5),Qt(e));r.rotation.x=-Math.PI/2*1.1,r.position.set(0,.2,.4),t.add(r);let a=new ae;a.position.set(0,.3,-.25),t.add(a);let o=new K(new Ue(.06,.08,.34,6),Qt(e));o.position.y=.15,a.add(o);let l=new K(new ye(.1,8,6),Qt(i%2?3486766:e));l.position.set(0,.34,-.03),a.add(l);let c=new K(new ke(.04,.16,5),Qt(15245898));return c.rotation.x=-Math.PI/2,c.position.set(0,.33,-.15),a.add(c),t.scale.setScalar(1.15),t.userData={neck:a,t:Math.random()*6,dip:0,nd:3+Math.random()*5,hd:Math.random()*6.28,tx:0,tz:0},qt.add(t),t}function $m(i,t){let e=t+14+Math.random()*60,n=(Math.random()*2-1)*(qe(e)-6);i.position.set(Ee(e)+n,0,-e),i.userData.hd=mi(e)+(Math.random()-.5)*2}for(let i=0;i<2;i++)mh.push(mS(i));mh.forEach(i=>$m(i,30));function Km(i,t){let e=t+8+Math.random()*60,n=(Math.random()*2-1)*(qe(e)+2);i.position.set(Ee(e)+n,.6+Math.random()*1.1,-e),i.userData.tx=i.position.x,i.userData.ty=i.position.y,i.userData.tz=i.position.z}ph.forEach(i=>Km(i,30));function gS(i,t){let e=1-on(Me.night*1.5,0,1)*1,n=e>.15&&Ke.rain<.6;for(let s of mh){s.visible=e>.1;let r=s.userData;r.t+=i;let a=-s.position.z,o=a-t;if(o<-14||o>110){$m(s,t);continue}if(r.nd-=i,r.nd<=0&&r.dip<=0&&(r.dip=1.3,r.nd=5+Math.random()*7,r.rip=!1),r.dip>0){r.dip-=i;let l=Math.sin(Math.PI*on(1-r.dip/1.3));r.neck.rotation.x=1.2*l,s.rotation.x=.9*l*.5,s.position.y=-.05*l,l>.9&&!r.rip&&(r.rip=!0,Ys(s.position.x,s.position.z-.4),Ve.plop((s.position.x-O.px)/25))}else{r.neck.rotation.x=Math.sin(r.t*1.6)*.12,s.rotation.x=0,s.position.y=Math.sin(r.t*1.3)*.015,r.hd+=Math.sin(r.t*.4)*.3*i;let l=s.position.x-Ee(a);Math.abs(l)>qe(a)-5&&(r.hd+=(mi(a)+(l>0?-1:1)*.8-r.hd)*i*1.2),s.position.x+=Math.sin(r.hd)*.35*i,s.position.z-=Math.cos(r.hd)*.35*i}s.rotation.y=-r.hd+Math.PI}for(let s of ph){if(s.visible=n,!n)continue;let r=s.userData;r.t-=i;let a=-s.position.z-t;if(a<-12||a>90){Km(s,t);continue}if(r.t<=0){r.t=.8+Math.random()*2.2;let u=-s.position.z+(Math.random()-.5)*8,p=s.position.x-Ee(u);r.tx=s.position.x+(Math.random()-.5)*7,r.tz=s.position.z+(Math.random()-.5)*7-1.5,r.ty=.5+Math.random()*1.4;let g=r.tx-Ee(-r.tz);Math.abs(g)>qe(-r.tz)+3&&(r.tx=Ee(-r.tz)+Math.sign(g)*(qe(-r.tz)+1))}let o=Math.min(1,i*3.2),l=s.position.x,c=s.position.z;s.position.x+=(r.tx-s.position.x)*o,s.position.z+=(r.tz-s.position.z)*o,s.position.y+=(r.ty-s.position.y)*o+Math.sin(O.t*9+r.ph)*.004;let h=s.position.x-l,d=s.position.z-c;Math.hypot(h,d)>.002&&(s.rotation.y=Math.atan2(-h,-d)),s.rotation.x=-Math.min(.5,Math.hypot(h,d)*20)*.5,r.wings.forEach(([u,p],g)=>{u.rotation.z=p*Math.sin(O.t*70+g*1.7+r.ph)*.45})}}var sh=38,ud=new Map,gm=[0,1,2].map(i=>{let t=new Ln(1,1).toNonIndexed(),e=t.attributes.position,n=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){let a=e.getX(r),o=e.getY(r),l=e.getZ(r),c=1+(Q(Math.round(a*5)+i*9,Math.round(o*5)+Math.round(l*5))-.5)*.35;e.setXYZ(r,a*c*1.15,o*c*.72,l*c);let h=.7+.4*on((o+.7)/1.4);n[r*3]=n[r*3+1]=n[r*3+2]=h}t.setAttribute("color",new me(n,3));let s=t.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*2,s.getY(r)*2);return t.computeVertexNormals(),t}),xS=new Ie({gradientMap:We,color:12039108,vertexColors:!0,map:He("rock")}),_S=new Ie({gradientMap:We,color:8829066,map:He("leaf")}),vS=new Oe({color:16777215,transparent:!0,opacity:.4,depthWrite:!1,side:De});function yS(i){let t=Q(i,41);if(i<2||t>.34)return null;let e=i*sh+Q(i,42)*sh,n=(Q(i,43)*2-1)*qe(e)*.4;return{s:e,x:Ee(e)+n,z:-e,r:.9+Q(i,44)*1.1,v:Math.floor(Q(i,45)*3),a:Q(i,46)*6.28}}function MS(i){let t=new ae,e=new K(gm[i.v],xS);e.scale.setScalar(i.r),e.rotation.y=i.a,e.position.y=i.r*.18,t.add(e);let n=new K(gm[(i.v+1)%3],_S);n.scale.set(i.r*.62,i.r*.3,i.r*.6),n.position.set(i.r*.12,i.r*.62,0),n.rotation.y=i.a+1,t.add(n);let s=new K(new Pr(1.05,1.55,24).rotateX(-Math.PI/2),vS);return s.scale.setScalar(i.r),s.position.y=.05,s.userData.fr=1,t.add(s),t.position.set(i.x,0,i.z),t.userData=i,t}function SS(i,t){let e=Math.floor((t-25)/sh),n=Math.floor((t+280)/sh);for(let[s,r]of ud)(s<e||s>n)&&r&&qt.remove(r);for(let s=e;s<=n;s++){let r=ud.get(s);if(r===void 0){let h=yS(s);r=h?MS(h):null,ud.set(s,r)}if(!r)continue;r.parent||qt.add(r);let a=O.px-r.userData.x,o=O.pz-r.userData.z,l=r.userData.r*1.2+1.5,c=Math.hypot(a,o);c<l&&c>.01&&(O.px+=a/c*(l-c)*.6,O.pz+=o/c*(l-c)*.6,O.v*=.9,O.t-O.bumpT>1.2&&(Ve.bump(),O.bumpT=O.t,Ys(r.userData.x+a/c*-r.userData.r,r.userData.z+o/c*-r.userData.r))),r.children[2].material.opacity=.3+.12*Math.sin(O.t*1.4+s)}}var rh=230,jc=new Map,bS=[0,1,2,3].map(i=>{let n=[],s=[],r=[];for(let o=0;o<=16;o++){let l=o/16;for(let c=0;c<26;c++){let h=c/26*6.283,d=1+(fn(Math.cos(h)*2.2+i*7,Math.sin(h)*2.2+l*3)-.5)*.5+(fn(Math.cos(h)*7+i,l*9)-.5)*.14,u=Math.pow(Math.max(0,1-Math.pow(l,2.2)),.62)*(1+.38*(1-l)*(1-l)),p=l,g=(fn(i*3,l*2)-.5)*.5*l;n.push(Math.cos(h)*u*d+g,p,Math.sin(h)*u*d);let x=fn(Math.cos(h)*5+i,l*14),f=an(.18,.5,fn(Math.cos(h)*9,l*20+i)),m=.45+.2*l+.12*x;s.push(m*(.75+.2*f),m*(.9+.12*f),m*(.82+.1*f))}}for(let o=0;o<16;o++)for(let l=0;l<26;l++){let c=(l+1)%26,h=o*26+l,d=o*26+c,u=(o+1)*26+l,p=(o+1)*26+c;r.push(h,u,d,d,u,p)}let a=new ge;return a.setAttribute("position",new ie(n,3)),a.setAttribute("color",new ie(s,3)),a.setIndex(r),a.computeVertexNormals(),a}),ES=new Fa({vertexColors:!0,color:12175040,fog:!1}),jm=new ns({map:$s,transparent:!0,opacity:.5,depthWrite:!1,fog:!1,color:16777215});function TS(i,t){let e=Q(i,60+t),n=44+e*46,s=95+Q(i,61+t)*120,r=i*rh+Q(i,62+t)*rh*.9,a=qe(r)+150+Q(i,63+t)*170,o=new ae,l=new K(bS[(i*2+(t>0?1:0)+4)%4],ES.clone());l.scale.set(n,s,n*(.8+Q(i,64)*.4)),l.position.y=-30,l.rotation.y=Q(i,65)*6,o.add(l);for(let c=0;c<2;c++){let h=new Ls(jm);h.scale.set(n*4.5,s*.7,1),h.position.set((c?.4:-.3)*n,s*(.18+.2*c),0),h.renderOrder=2,o.add(h)}return o.position.set(Ee(r)+t*a,0,-r),o.userData={s:r},o}function wS(i){let t=Math.floor((i-260)/rh),e=Math.floor((i+720)/rh);for(let n=t;n<=e;n++)for(let s of[-1,1]){let r=n*2+(s>0?1:0),a=jc.get(r);if(a===void 0&&(a=Q(n,70+s)>.18?TS(n,s):null,jc.set(r,a),a&&(a.userData.c=n)),a){a.userData.c=n,a.parent||qt.add(a);let o=Math.hypot(a.position.x-O.px,a.position.z-O.pz),l=on(an(60,520,o)*.88+.08);a.children[0].material.color.set(6130818).lerp(_d.set(3099218),Me.night*.7).lerp(oo.copy(Me.hor).lerp(qt.fog.color,.5),l)}}for(let[n,s]of jc)s&&s.userData.c!==void 0&&(s.userData.c<t||s.userData.c>e)&&s.parent&&qt.remove(s)}var Od=[];function AS(i){let t=new ae,e=Qt(3091244),n=Qt(3102307),s=new K(new ye(1,10,6),e);s.scale.set(.55,.28,2),s.position.y=.05,t.add(s);let r=new K(new Ue(.16,.22,.9,7),n);r.position.set(0,.85,.2),t.add(r);let a=new K(new ye(.12,8,6),Qt(14264706));if(a.position.set(0,1.38,.2),t.add(a),i%2){let l=new K(new ke(.75,.45,10,1,!0),Qt(3158063,{side:De}));l.position.set(0,1.95,.2),t.add(l);let c=new K(new Ue(.015,.015,1,4),e);c.position.set(0,1.45,.2),t.add(c)}else{let l=new K(new ke(.34,.2,10,1,!0),Qt(14332522,{side:De}));l.position.set(0,1.55,.2),t.add(l)}let o=new K(new Ue(.02,.02,4,4),Qt(8018502));return o.position.set(.35,1.2,-.9),o.rotation.set(1,0,-.3),t.add(o),t.scale.setScalar(1.6),t.userData={ph:Math.random()*6},qt.add(t),t}for(let i=0;i<3;i++)Od.push(AS(i));function Qm(i,t){let e=t+90+Math.random()*160,n=(Math.random()*2-1)*(qe(e)-9);i.position.set(Ee(e)+n,0,-e),i.userData.hd=mi(e)+Math.PI+(Math.random()-.5)*.8,i.userData.s=e}Od.forEach(i=>Qm(i,40+Math.random()*100));function RS(i,t){for(let e of Od){let n=e.userData;if(e.position.z>O.pz+30||-e.position.z>t+300){Qm(e,t);continue}e.position.x+=Math.sin(n.hd+Math.PI)*.25*i,e.position.z-=Math.cos(n.hd+Math.PI)*.25*i,e.position.y=Math.sin(O.t*.8+n.ph)*.03,e.rotation.set(Math.sin(O.t*.6+n.ph)*.02,-n.hd+Math.PI,Math.sin(O.t*.7+n.ph)*.02)}}var xm=new I,po=performance.now(),dd=0,ah=300,oh=new ge,Qc=new Float32Array(ah*3),t0=[];for(let i=0;i<ah;i++)t0.push([Math.random()*60-30,Math.random()*12,Math.random()*60-50,Math.random()*6.28]);oh.setAttribute("position",new me(Qc,3));var CS=(()=>{let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d");return t.fillStyle="#fff",t.beginPath(),t.ellipse(16,16,12,7,.6,0,6.3),t.fill(),new Gi(i)})(),e0=new Hi({map:CS,alphaTest:.3,color:zn.pet.c,size:zn.pet.size,transparent:!0,opacity:.85,depthWrite:!1}),n0=new is(oh,e0);n0.frustumCulled=!1;qt.add(n0);Kp();jp();function zd(i,t){t||requestAnimationFrame(zd);let e=Math.min(.05,(i-po)/1e3);ti.tick((i-po)/1e3),po=i,O.t+=e;let n=-O.pz;if(Es){let o=O.hold||O.key.up,l=on(Cd+(O.key.r?1:0)-(O.key.l?1:0),-1,1),c=ti.photo?0:2.6*(1-.85*fo);O.v+=(c-O.v)*.5*e;let h=mi(n),d=l*(.55+Math.min(O.v,6)/6*.45);O.psi+=d*e,Math.abs(l)<.1&&(O.psi+=(h-O.psi)*.32*e),O.psi=on(O.psi,h-1.35,h+1.35),window.__lock!=null&&(O.psi=window.__lock),O.steer+=(l-O.steer)*3*e,O.px+=Math.sin(O.psi)*O.v*e+Math.sin(h)*1.1*e,O.pz+=-Math.cos(O.psi)*O.v*e-Math.cos(h)*1.1*e;let u=-O.pz,p=Ee(u),g=qe(u)-1.7,x=O.px-p;if(Math.abs(x)>g&&(O.px=p+Math.sign(x)*g,O.v>1.2&&O.t-O.bumpT>1.2&&(Ve.bump(),O.bumpT=O.t),O.v*=.6,O.psi+=(mi(u)-O.psi)*.4),O.dist=Math.max(O.dist,u),id-=e,Math.abs(l)>.25&&id<=0){id=.7;let f=l>0?1:-1,m=new I(f*1.2,0,.3);Ye.localToWorld(m),Ys(m.x,m.z)}}let s=Math.sin(O.t*.9)*.03+Math.sin(O.t*1.7)*.012;Ye.position.set(O.px,s*.6,O.pz),Ye.rotation.set(0,-O.psi,-O.steer*.025+Math.sin(O.t*.7)*.008),Ye.updateMatrixWorld(!0);for(let o=0;o<ah;o++){let l=t0[o];l[1]-=e*zn.pet.fall*(.45+.3*Math.sin(l[3]+O.t)),l[1]<.2&&(l[1]=10+Math.random()*3,l[0]=Math.random()*60-30,l[2]=-Math.random()*60),Qc[o*3]=O.px+l[0]+Math.sin(O.t*.7+l[3])*1.5,Qc[o*3+1]=l[1],Qc[o*3+2]=O.pz+l[2]+10+Math.cos(O.t*.5+l[3])}{let o=Math.max(.3*Md(-O.pz),th(-O.pz));oh.setDrawRange(0,Math.round(ah*(zn.pet.base+zn.pet.gain*o)))}oh.attributes.position.needsUpdate=!0,e0.opacity=.85*(1-on(Me.night,0,1)*.8),am.forEach((o,l)=>{let c=l?1:-1,h=on(O.steer*c,0,1),d=new I().copy(HM[l]);d.lerp(new I(c*1.25,-.1,-.9+Math.sin(O.t*1.3+l)*.08),h);let u=xm.copy(d).sub(zM[l]).normalize();o.quaternion.setFromUnitVectors(new I(0,0,1),u),o.position.copy(d).addScaledVector(u,-1.55)});{let o=di>.45||fo>.15;if(Zs.visible=o,Lm.forEach(l=>l.visible=o),Xs.visible=o,am.forEach(l=>l.visible=!o),o){O.steer>.2?Gs=Math.min(1,Gs+e*3):O.steer<-.2&&(Gs=Math.max(-1,Gs-e*3)),Bc+=(O.steer-Bc)*Math.min(1,e*2.2);let l=Math.sin(O.t*1.4);Qn.rotation.z=-O.steer*.2+Math.sin(O.t*.6)*.02,Qn.rotation.y=-O.steer*.28,Qn.rotation.x=.05+l*.012+Math.abs(O.steer)*.06,Jr.rotation.y=-O.steer*.38+Math.sin(O.t*.35)*.08,Jr.rotation.x=.04+Math.sin(O.t*.5)*.03,Ms.rotation.z=(O.steer-Bc)*.45,Ms.rotation.x=-Math.abs(O.steer-Bc)*.12;let c=xm.set(Gs*.5,.8,.5),h=Math.abs(O.steer)>.2?1:0,u=new I(Gs*(.7+h*.55),-.2,1.35+Math.sin(O.t*1.2)*.12*(1-h)+h*.1).clone().sub(c).normalize();Xs.quaternion.setFromUnitVectors(new I(0,0,1),u),Xs.position.copy(c);let p=[c.clone().addScaledVector(u,.75),c.clone()];Gs<0&&p.reverse(),Nm.forEach((g,x)=>{let f=g.getWorldPosition(new I),m=Ye.localToWorld(p[x].clone()),M=m.sub(f),w=M.length();g.parent.worldToLocal(m.copy(f).add(M));let v=m.sub(g.position);g.quaternion.setFromUnitVectors(new I(0,-1,0),v.clone().normalize()),g.scale.y=on(v.length()/.66,.7,1.5)})}}let r=Math.sin(O.t*.5)*.01;On.position.set(O.px,1.18+s,O.pz).addScaledVector(new I(Math.sin(O.psi),0,-Math.cos(O.psi)),-.15),O.pitch+=(-Id*.22-O.pitch)*2*e,On.rotation.set(O.pitch-.06,-O.psi+r,-O.steer*.02,"YXZ"),di+=((xo?1:0)-di)*Math.min(1,e*2.2),di<.01&&(xs=O.psi);{let o=innerWidth/innerHeight<1?82:68,l=o*(1-.3*di*di*(3-2*di));Math.abs(On.fov-l)>.05&&(On.fov=l,On.updateProjectionMatrix())}if(di>.003){let o=di*di*(3-2*di);um.copy(On.quaternion),xs+=(O.psi-xs)*Math.min(1,e*1.6);let l=xs+.3;Hc.set(Math.sin(l),0,-Math.cos(l)),cd.set(O.px,6.2+s,O.pz).addScaledVector(Hc,-10.8),Hc.set(Math.sin(xs),0,-Math.cos(xs)),zc.set(O.px,.3,O.pz).addScaledVector(Hc,6.5),zc.x+=Math.cos(xs)*1.9,zc.z+=Math.sin(xs)*1.9,ld.position.copy(cd),ld.lookAt(zc),hm.copy(ld.quaternion),On.position.lerp(cd,o),On.quaternion.copy(um).slerp(hm,o)}rS(e),Es&&!ti.photo&&(Ii=(Ii+e/900)%1),fM(O.px,O.pz),WM(e,n),BM(O.px,O.pz),Am.value=O.t,pi.position.set(O.px,0,O.pz),pi.material.uniforms.t.value=O.t;let a=Me.night;Rd.intensity=bs*3.2,Ad.material.opacity=.3+.35*bs,ch.material.color.set(16769704),SS(e,O.dist||n),RS(e,O.dist||n),wS(O.dist||n),jm.color.copy(qt.fog.color).multiplyScalar(1.05),dS(e,O.dist||n),gS(e,O.dist||n),Wm.opacity=.55+.15*Math.sin(O.t*.8),uh.position.y=Math.sin(O.t*.9)*.01,OM(O.t,O.dist||n),aS(O.dist||n);for(let[o,l]of ks){if(l.userData.collecting)continue;let[c,h]=Td(o),d=c-O.px,u=h-O.pz;if(d*d+u*u<17){nh.add(o),ys++;try{localStorage.setItem("rio3d-lant",String(ys)),localStorage.setItem("rio3d-coll",JSON.stringify([...nh]))}catch{}l.userData.collecting=!0;let p=Math.atan2(d,-u)-O.psi;Ve.lantern(Math.sin(p)),Ys(c,h),$e("n").textContent=ys,ys===1&&Js("Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.")}}if(ih.forEach(o=>{if(o.userData.age<4){o.userData.age+=e;let l=o.userData.age/4;o.scale.setScalar(1+l*6),o.material.opacity=.35*(1-l)}else o.material.opacity=0}),gd.opacity=on(a*1.3-.2,0,.9),eh.visible=gd.opacity>.01,eh.visible){for(let o=0;o<bd;o++){let l=Im[o],c=O.t*.4+l[3],h=Math.sin(O.psi),d=-Math.cos(O.psi);Jc[o*3]=O.px+l[0]+Math.sin(c*2.1+o)*1.5,Jc[o*3+1]=l[1]+Math.sin(c*3+o)*.4,Jc[o*3+2]=O.pz+l[2]+Math.cos(c*1.7+o)*1.5}Ed.attributes.position.needsUpdate=!0}Ve.update(O.v+Math.abs(O.steer)*1.5,a,O.t),dd-=e,dd<=0&&(dd=.4,Dd(O.dist||n),$e("m").textContent=Math.round(O.dist/1),$e("tod").textContent=ym(Ii)),ti.camAdjust(),ti.update(e,O.dist||n),t||ti.render()}var ti=Qp({R:vs,scene:qt,cam:On,canvas:qs,el:$e,toast:Js,P:O,LM:$r,lmFound:Ss,lmPos:ni,LMS:Kr,mkLantern:Pm,cx:Ee,hw:qe,A:Ve,hash:Q,spawnRipple:Ys,SEAS:ju,seasonIdx:Ku,started:()=>Es,getTod:()=>Ii,setTod:i=>{Ii=i},todName:ym,getCount:()=>ys,setCount:i=>{ys=i;try{localStorage.setItem("rio3d-lant",String(i))}catch{}$e("n").textContent=i},glowK:()=>bs,setCam:_o,getCam:()=>xo,savePos:hh,nearLM:i=>{let t=Math.round((i-240)/Kr);for(let e of[t,t-1,t+1])if(Math.abs(ni(e)-i)<130&&e>=0)return $r[e%10];return""}});$e("n").textContent=ys;requestAnimationFrame(zd);window.__r3d={sim:(i,t,e)=>{window.__lastT=window.__lastT||po;for(let n=0;n<i;n++)window.__lastT+=t*1e3,e&&e(n),zd(window.__lastT,!0);po=window.__lastT},cnt:()=>{let i={};return qt.traverse(t=>{if((t.isMesh||t.isSprite||t.isPoints)&&t.visible){let e=t,n=!0;for(;e;){if(!e.visible){n=!1;break}e=e.parent}if(!n)return;let s=(t.isInstancedMesh?"inst":t.isSprite?"sprite":t.isPoints?"pts":"mesh")+":"+(t.material.type||"");i[s]=(i[s]||0)+1}}),i},info:()=>({g:vs.info.memory.geometries,t:vs.info.memory.textures,p:vs.info.programs.length,calls:vs.info.render.calls,tris:vs.info.render.triangles,lm:Wr.size,ch:qt.children.length}),cineJump:i=>{xn&&(xn.t=i)},cineOn:()=>!!xn,bambooAt:qc,gardenAt:th,forestAt:Md,lmPos:ni,wbirds:mh,massifs:jc,birds:fS,dfs:ph,fish:fh,W:Ke,mistAt:Bm,setCam:_o,P:O,lanternPos:Td,setTod:i=>{Ii=i},scene:qt,tp:(i,t=0,e=0)=>{O.pz=-i,O.px=Ee(i)+e,O.psi=mi(i)+t},sideOf:i=>Q(i,9)>.5?1:-1,get tod(){return Ii}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
