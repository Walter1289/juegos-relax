(()=>{var Zf=0,lu=1,Jf=2;var Wa=1,Gl=2,Dr=3,ds=0,fn=1,pn=2,Mi=0,fs=1,Vi=2,cu=3,hu=4,$f=5;var Us=100,jf=101,Kf=102,Qf=103,ep=104,tp=200,np=201,ip=202,sp=203,uu=204,du=205,rp=206,ap=207,op=208,lp=209,cp=210,hp=211,up=212,dp=213,fp=214,nl=0,il=1,sl=2,_r=3,rl=4,al=5,ol=6,ll=7,Vl=0,pp=1,mp=2,oi=0,fu=1,pu=2,mu=3,gu=4,xu=5,yu=6,_u=7;var vu=300,ps=301,Fs=302,Wl=303,Xl=304,Xa=306,os=1e3,mi=1001,cl=1002,en=1003,gp=1004;var qa=1005;var dn=1006,ql=1007;var ms=1008;var Ln=1009,bu=1010,Mu=1011,Nr=1012,Yl=1013,li=1014,Yn=1015,ci=1016,Zl=1017,Jl=1018,Ur=1020,Su=35902,Eu=35899,Tu=1021,wu=1022,Zn=1023,xi=1026,gs=1027,Fr=1028,$l=1029,xs=1030,jl=1031;var Kl=1033,Ya=33776,Za=33777,Ja=33778,$a=33779,Ql=35840,ec=35841,tc=35842,nc=35843,ic=36196,sc=37492,rc=37496,ac=37488,oc=37489,ja=37490,lc=37491,cc=37808,hc=37809,uc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,xc=37816,yc=37817,_c=37818,vc=37819,bc=37820,Mc=37821,Sc=36492,Ec=36494,Tc=36495,wc=36283,Ac=36284,Ka=36285,Rc=36286;var da=2300,hl=2301,el=2302,Zh=2303,Jh=2400,$h=2401,jh=2402;var xp=3200;var Qa=0,yp=1,Wi="",rn="srgb",fa="srgb-linear",pa="linear",Rt="srgb";var tl=7680;var _p=519,vp=512,bp=513,Mp=514,Cc=515,Sp=516,Ep=517,Ic=518,Tp=519,Au=35044;var Ru="300 es",ii=2e3,vr=2001;function kg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ma(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wp(){let n=ma("canvas");return n.style.display="block",n}var cf={},br=null;function ga(...n){let e="THREE."+n.shift();br?br("log",e,...n):console.log(e,...n)}function Ap(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function We(...n){n=Ap(n);let e="THREE."+n.shift();if(br)br("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ze(...n){n=Ap(n);let e="THREE."+n.shift();if(br)br("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Rs(...n){let e=n.join(" ");e in cf||(cf[e]=!0,We(...n))}function Rp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Cp={[nl]:il,[sl]:ol,[rl]:ll,[_r]:al,[il]:nl,[ol]:sl,[ll]:rl,[al]:_r},yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var vh=Math.PI/180,ul=180/Math.PI;function Oi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function Vg(n,e){return(n%e+e)%e}function bh(n,e,t){return(1-t)*n+t*e}function pi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Nu=class Nu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nu.prototype.isVector2=!0;var le=Nu,bn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],p=r[a+1],g=r[a+2],S=r[a+3];if(d!==S||l!==u||c!==p||h!==g){let m=l*u+c*p+h*g+d*S;m<0&&(u=-u,p=-p,g=-g,S=-S,m=-m);let f=1-o;if(m<.9995){let y=Math.acos(m),v=Math.sin(y);f=Math.sin(f*y)/v,o=Math.sin(o*y)/v,l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+S*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+S*o;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Uu=class Uu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uu.prototype.isVector3=!0;var L=Uu,Mh=new L,hf=new bn,Fu=class Fu{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],S=s[0],m=s[3],f=s[6],y=s[1],v=s[4],x=s[7],b=s[2],E=s[5],A=s[8];return r[0]=a*S+o*y+l*b,r[3]=a*m+o*v+l*E,r[6]=a*f+o*x+l*A,r[1]=c*S+h*y+d*b,r[4]=c*m+h*v+d*E,r[7]=c*f+h*x+d*A,r[2]=u*S+p*y+g*b,r[5]=u*m+p*v+g*E,r[8]=u*f+p*x+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=t*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return e[0]=d*S,e[1]=(s*c-h*i)*S,e[2]=(o*i-s*a)*S,e[3]=u*S,e[4]=(h*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=p*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sh.makeScale(e,t)),this}rotate(e){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sh.makeRotation(-e)),this}translate(e,t){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fu.prototype.isMatrix3=!0;var nt=Fu,Sh=new nt,uf=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),df=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wg(){let n={enabled:!0,workingColorSpace:fa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Rt&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Rt&&(s.r=yr(s.r),s.g=yr(s.g),s.b=yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?pa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fa]:{primaries:e,whitePoint:i,transfer:pa,toXYZ:uf,fromXYZ:df,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:i,transfer:Rt,toXYZ:uf,fromXYZ:df,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}var dt=Wg();function Bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var er,dl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{er===void 0&&(er=ma("canvas")),er.width=e.width,er.height=e.height;let s=er.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=er}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ma("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bi(t[i]/255)*255):t[i]=Bi(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xg=0,Mr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Eh(s[a].image)):r.push(Eh(s[a]))}else r=Eh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Eh(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?dl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var qg=0,Th=new L,Mn=class n extends yi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=mi,s=mi,r=dn,a=ms,o=Zn,l=Ln,c=n.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Oi(),this.name="",this.source=new Mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=vu;Mn.DEFAULT_ANISOTROPY=1;var Ou=class Ou{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],S=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,x=(p+1)/2,b=(f+1)/2,E=(h+u)/4,A=(d+S)/4,_=(g+m)/4;return v>x&&v>b?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=E/i,r=A/i):x>b?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=E/s,r=_/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=A/r,s=_/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-S)/y,this.z=(u-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ou.prototype.isVector4=!0;var Ht=Ou,fl=class extends yi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Mn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Mr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends fl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},xa=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var pl=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var kl=class kl{constructor(e,t,i,s,r,a,o,l,c,h,d,u,p,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,p,g,S,m)}set(e,t,i,s,r,a,o,l,c,h,d,u,p,g,S,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*d,g=o*h,S=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-S*c,t[9]=-o*l,t[2]=S-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,g=c*h,S=c*d;t[0]=u+S*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=S+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,g=c*h,S=c*d;t[0]=u-S*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=S-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,g=o*h,S=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+S,t[1]=l*d,t[5]=S*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,g=o*l,S=o*c;t[0]=l*h,t[4]=S-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-S*d}else if(e.order==="XZY"){let u=a*l,p=a*c,g=o*l,S=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+S,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=S*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yg,e,Zg)}lookAt(e,t,i){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),ns.crossVectors(i,Un),ns.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),ns.crossVectors(i,Un)),ns.normalize(),To.crossVectors(Un,ns),s[0]=ns.x,s[4]=To.x,s[8]=Un.x,s[1]=ns.y,s[5]=To.y,s[9]=Un.y,s[2]=ns.z,s[6]=To.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],S=i[6],m=i[10],f=i[14],y=i[3],v=i[7],x=i[11],b=i[15],E=s[0],A=s[4],_=s[8],T=s[12],R=s[1],P=s[5],N=s[9],O=s[13],C=s[2],D=s[6],z=s[10],H=s[14],j=s[3],G=s[7],Y=s[11],K=s[15];return r[0]=a*E+o*R+l*C+c*j,r[4]=a*A+o*P+l*D+c*G,r[8]=a*_+o*N+l*z+c*Y,r[12]=a*T+o*O+l*H+c*K,r[1]=h*E+d*R+u*C+p*j,r[5]=h*A+d*P+u*D+p*G,r[9]=h*_+d*N+u*z+p*Y,r[13]=h*T+d*O+u*H+p*K,r[2]=g*E+S*R+m*C+f*j,r[6]=g*A+S*P+m*D+f*G,r[10]=g*_+S*N+m*z+f*Y,r[14]=g*T+S*O+m*H+f*K,r[3]=y*E+v*R+x*C+b*j,r[7]=y*A+v*P+x*D+b*G,r[11]=y*_+v*N+x*z+b*Y,r[15]=y*T+v*O+x*H+b*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],S=e[7],m=e[11],f=e[15],y=l*p-c*u,v=o*p-c*d,x=o*u-l*d,b=a*p-c*h,E=a*u-l*h,A=a*d-o*h;return t*(S*y-m*v+f*x)-i*(g*y-m*b+f*E)+s*(g*v-S*b+f*A)-r*(g*x-S*E+m*A)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],S=e[13],m=e[14],f=e[15],y=t*o-i*a,v=t*l-s*a,x=t*c-r*a,b=i*l-s*o,E=i*c-r*o,A=s*c-r*l,_=h*S-d*g,T=h*m-u*g,R=h*f-p*g,P=d*m-u*S,N=d*f-p*S,O=u*f-p*m,C=y*O-v*N+x*P+b*R-E*T+A*_;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return e[0]=(o*O-l*N+c*P)*D,e[1]=(s*N-i*O-r*P)*D,e[2]=(S*A-m*E+f*b)*D,e[3]=(u*E-d*A-p*b)*D,e[4]=(l*R-a*O-c*T)*D,e[5]=(t*O-s*R+r*T)*D,e[6]=(m*x-g*A-f*v)*D,e[7]=(h*A-u*x+p*v)*D,e[8]=(a*N-o*R+c*_)*D,e[9]=(i*R-t*N-r*_)*D,e[10]=(g*E-S*x+f*y)*D,e[11]=(d*x-h*E-p*y)*D,e[12]=(o*T-a*P-l*_)*D,e[13]=(t*P-i*T+s*_)*D,e[14]=(S*v-g*b-m*y)*D,e[15]=(h*b-d*v+u*y)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,S=a*h,m=a*d,f=o*d,y=l*c,v=l*h,x=l*d,b=i.x,E=i.y,A=i.z;return s[0]=(1-(S+f))*b,s[1]=(p+x)*b,s[2]=(g-v)*b,s[3]=0,s[4]=(p-x)*E,s[5]=(1-(u+f))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+v)*A,s[9]=(m-y)*A,s[10]=(1-(u+S))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=tr.set(s[0],s[1],s[2]).length(),o=tr.set(s[4],s[5],s[6]).length(),l=tr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Qn.copy(this);let c=1/a,h=1/o,d=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=ii,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),p=(i+s)/(i-s),g,S;if(l)g=r/(a-r),S=a*r/(a-r);else if(o===ii)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===vr)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ii,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),p=-(i+s)/(i-s),g,S;if(l)g=1/(a-r),S=a/(a-r);else if(o===ii)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===vr)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};kl.prototype.isMatrix4=!0;var ft=kl,tr=new L,Qn=new ft,Yg=new L(0,0,0),Zg=new L(1,1,1),ns=new L,To=new L,Un=new L,ff=new ft,pf=new bn,Cn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ff.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ff,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pf.setFromEuler(this),this.setFromQuaternion(pf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jg=0,mf=new L,nr=new bn,Pi=new ft,wo=new L,Qr=new L,$g=new L,jg=new bn,gf=new L(1,0,0),xf=new L(0,1,0),yf=new L(0,0,1),_f={type:"added"},Kg={type:"removed"},ir={type:"childadded",child:null},wh={type:"childremoved",child:null},an=class n extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new Cn,i=new bn,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new nt}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(gf,e)}rotateY(e){return this.rotateOnAxis(xf,e)}rotateZ(e){return this.rotateOnAxis(yf,e)}translateOnAxis(e,t){return mf.copy(e).applyQuaternion(this.quaternion),this.position.add(mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gf,e)}translateY(e){return this.translateOnAxis(xf,e)}translateZ(e){return this.translateOnAxis(yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wo.copy(e):wo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Qr,wo,this.up):Pi.lookAt(wo,Qr,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(Pi),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_f),ir.child=e,this.dispatchEvent(ir),ir.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kg),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_f),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,$g),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new L(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var me=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qg={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,i),f=this._getHandJoint(c,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new me;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Ah(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ce=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=Vg(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ah(a,r,e+1/3),this.g=Ah(a,r,e),this.b=Ah(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=rn){function i(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){let i=Ip[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return dt.workingToColorSpace(xn.copy(this),e),Math.round(ut(xn.r*255,0,255))*65536+Math.round(ut(xn.g*255,0,255))*256+Math.round(ut(xn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(xn.copy(this),t);let i=xn.r,s=xn.g,r=xn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=rn){dt.workingToColorSpace(xn.copy(this),e);let t=xn.r,i=xn.g,s=xn.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(Ao);let i=bh(is.h,Ao.h,t),s=bh(is.s,Ao.s,t),r=bh(is.l,Ao.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Ce;Ce.NAMES=Ip;var ya=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},_a=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ei=new L,Li=new L,Rh=new L,Di=new L,sr=new L,rr=new L,vf=new L,Ch=new L,Ih=new L,Ph=new L,Lh=new Ht,Dh=new Ht,Nh=new Ht,Fi=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ei.subVectors(e,t),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ei.subVectors(s,t),Li.subVectors(i,t),Rh.subVectors(e,t);let a=ei.dot(ei),o=ei.dot(Li),l=ei.dot(Rh),c=Li.dot(Li),h=Li.dot(Rh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Lh.setScalar(0),Dh.setScalar(0),Nh.setScalar(0),Lh.fromBufferAttribute(e,t),Dh.fromBufferAttribute(e,i),Nh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Lh,r.x),a.addScaledVector(Dh,r.y),a.addScaledVector(Nh,r.z),a}static isFrontFacing(e,t,i,s){return ei.subVectors(i,t),Li.subVectors(e,t),ei.cross(Li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ei.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;sr.subVectors(s,i),rr.subVectors(r,i),Ch.subVectors(e,i);let l=sr.dot(Ch),c=rr.dot(Ch);if(l<=0&&c<=0)return t.copy(i);Ih.subVectors(e,s);let h=sr.dot(Ih),d=rr.dot(Ih);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(sr,a);Ph.subVectors(e,r);let p=sr.dot(Ph),g=rr.dot(Ph);if(g>=0&&p<=g)return t.copy(r);let S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(rr,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return vf.subVectors(r,s),o=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(vf,o);let f=1/(m+S+u);return a=S*f,o=u*f,t.copy(i).addScaledVector(sr,a).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_i=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),Co.subVectors(this.max,ea),ar.subVectors(e.a,ea),or.subVectors(e.b,ea),lr.subVectors(e.c,ea),ss.subVectors(or,ar),rs.subVectors(lr,or),Es.subVectors(ar,lr);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Es.z,Es.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Es.z,0,-Es.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Es.y,Es.x,0];return!Uh(t,ar,or,lr,Co)||(t=[1,0,0,0,1,0,0,0,1],!Uh(t,ar,or,lr,Co))?!1:(Io.crossVectors(ss,rs),t=[Io.x,Io.y,Io.z],Uh(t,ar,or,lr,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ni=[new L,new L,new L,new L,new L,new L,new L,new L],ti=new L,Ro=new _i,ar=new L,or=new L,lr=new L,ss=new L,rs=new L,Es=new L,ea=new L,Co=new L,Io=new L,Ts=new L;function Uh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ts.fromArray(n,r);let o=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),l=e.dot(Ts),c=t.dot(Ts),h=i.dot(Ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Qt=new L,Po=new le,ex=0,Yt=class extends yi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ex++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Au,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Po.fromBufferAttribute(this,t),Po.applyMatrix3(e),this.setXY(t,Po.x,Po.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var va=class extends Yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ba=class extends Yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ke=class extends Yt{constructor(e,t,i){super(new Float32Array(e),t,i)}},tx=new _i,ta=new L,Fh=new L,vi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):tx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);let t=ta.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ta,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(Fh)),this.expandByPoint(ta.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},nx=0,Xn=new ft,Oh=new an,cr=new L,Fn=new _i,na=new _i,hn=new L,bt=class n extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kg(e)?ba:va)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];na.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Fn.min,na.min),Fn.expandByPoint(hn),hn.addVectors(Fn.max,na.max),Fn.expandByPoint(hn)):(Fn.expandByPoint(na.min),Fn.expandByPoint(na.max))}Fn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(hn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)hn.fromBufferAttribute(o,c),l&&(cr.fromBufferAttribute(e,c),hn.add(cr)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Yt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new L,l[_]=new L;let c=new L,h=new L,d=new L,u=new le,p=new le,g=new le,S=new L,m=new L;function f(_,T,R){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,R),u.fromBufferAttribute(r,_),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[_].add(S),o[T].add(S),o[R].add(S),l[_].add(m),l[T].add(m),l[R].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,T=y.length;_<T;++_){let R=y[_],P=R.start,N=R.count;for(let O=P,C=P+N;O<C;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let v=new L,x=new L,b=new L,E=new L;function A(_){b.fromBufferAttribute(s,_),E.copy(b);let T=o[_];v.copy(T),v.sub(b.multiplyScalar(b.dot(T))).normalize(),x.crossVectors(E,T);let P=x.dot(l[_])<0?-1:1;a.setXYZW(_,v.x,v.y,v.z,P)}for(let _=0,T=y.length;_<T;++_){let R=y[_],P=R.start,N=R.count;for(let O=P,C=P+N;O<C;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Yt(u,h,d)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ml=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Au,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},vn=new L,Ma=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ga("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ga("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bh=new L,ix=new L,sx=new nt,ni=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Bh.subVectors(i,t).cross(ix.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Bh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||sx.getNormalMatrix(e),s=this.coplanarPoint(Bh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rx=0,In=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=fs,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uu,this.blendDst=du,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tl,this.stencilZFail=tl,this.stencilZPass=tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ni().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new le().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Tr=class extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hr,ia=new L,ur=new L,dr=new L,fr=new le,sa=new le,Pp=new ft,Lo=new L,ra=new L,Do=new L,bf=new le,zh=new le,Mf=new le,Sa=class extends an{constructor(e=new Tr){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ml(t,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new Ma(i,3,0,!1)),hr.setAttribute("uv",new Ma(i,2,3,!1))}this.geometry=hr,this.material=e,this.center=new le(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),Pp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-dr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;No(Lo.set(-.5,-.5,0),dr,a,ur,s,r),No(ra.set(.5,-.5,0),dr,a,ur,s,r),No(Do.set(.5,.5,0),dr,a,ur,s,r),bf.set(0,0),zh.set(1,0),Mf.set(1,1);let o=e.ray.intersectTriangle(Lo,ra,Do,!1,ia);if(o===null&&(No(ra.set(-.5,.5,0),dr,a,ur,s,r),zh.set(0,1),o=e.ray.intersectTriangle(Lo,Do,ra,!1,ia),o===null))return;let l=e.ray.origin.distanceTo(ia);l<e.near||l>e.far||t.push({distance:l,point:ia.clone(),uv:Fi.getInterpolation(ia,Lo,ra,Do,bf,zh,Mf,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function No(n,e,t,i,s,r){fr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(sa.x=r*fr.x-s*fr.y,sa.y=s*fr.x+r*fr.y):sa.copy(fr),n.copy(e),n.x+=sa.x,n.y+=sa.y,n.applyMatrix4(Pp)}var Ui=new L,Hh=new L,Uo=new L,Fo=new L,Cs=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Hh.copy(e).add(t).multiplyScalar(.5),Uo.copy(t).sub(e).normalize(),Fo.copy(this.origin).sub(Hh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Uo),o=Fo.dot(this.direction),l=-Fo.dot(Uo),c=Fo.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let S=1/h;d*=S,u*=S,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Hh).addScaledVector(Uo,u),p}intersectSphere(e,t){if(e.radius<0)return null;Ui.subVectors(e.center,this.origin);let i=Ui.dot(this.direction),s=Ui.dot(Ui)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,p=e.z-a.z,g=t.x-a.x,S=t.y-a.y,m=t.z-a.z,f=i.x-a.x,y=i.y-a.y,v=i.z-a.z,x=Math.abs(l),b=Math.abs(c),E=Math.abs(h),A,_,T,R,P,N,O,C,D,z,H,j;if(x>=b&&x>=E?(T=l,N=d,D=g,j=f,l>=0?(A=c,_=h,R=u,P=p,O=S,C=m,z=y,H=v):(A=h,_=c,R=p,P=u,O=m,C=S,z=v,H=y)):b>=E?(T=c,N=u,D=S,j=y,c>=0?(A=h,_=l,R=p,P=d,O=m,C=g,z=v,H=f):(A=l,_=h,R=d,P=p,O=g,C=m,z=f,H=v)):(T=h,N=p,D=m,j=v,h>=0?(A=l,_=c,R=d,P=u,O=g,C=S,z=f,H=y):(A=c,_=l,R=u,P=d,O=S,C=g,z=y,H=f)),T===0)return null;let G=A/T,Y=_/T,K=1/T,De=R-G*N,Ie=P-Y*N,St=O-G*D,lt=C-Y*D,yt=z-G*j,$=H-Y*j,te=yt*lt-$*St,Te=De*$-Ie*yt,Je=St*Ie-lt*De;if(s){if(te<0||Te<0||Je<0)return null}else if((te<0||Te<0||Je<0)&&(te>0||Te>0||Je>0))return null;let Pe=te+Te+Je;if(Pe===0)return null;let $e=K*(te*N+Te*D+Je*j);return(Pe>0?$e<0:$e>0)?null:this.at($e/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xe=class extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sf=new ft,ws=new Cs,Oo=new vi,Ef=new L,Bo=new L,zo=new L,Ho=new L,kh=new L,ko=new L,Tf=new L,Go=new L,ie=class extends an{constructor(e=new bt,t=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(kh.fromBufferAttribute(d,e),a?ko.addScaledVector(kh,h):ko.addScaledVector(kh.sub(t),h))}t.add(ko)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),ws.copy(e.ray).recast(e.near),!(Oo.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Oo,Ef)===null||ws.origin.distanceToSquared(Ef)>(e.far-e.near)**2))&&(Sf.copy(r).invert(),ws.copy(e.ray).applyMatrix4(Sf),!(i.boundingBox!==null&&ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){let m=u[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,b=v;x<b;x+=3){let E=o.getX(x),A=o.getX(x+1),_=o.getX(x+2);s=Vo(this,f,e,i,c,h,d,E,A,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=g,f=S;m<f;m+=3){let y=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);s=Vo(this,a,e,i,c,h,d,y,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){let m=u[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,b=v;x<b;x+=3){let E=x,A=x+1,_=x+2;s=Vo(this,f,e,i,c,h,d,E,A,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=g,f=S;m<f;m+=3){let y=m,v=m+1,x=m+2;s=Vo(this,a,e,i,c,h,d,y,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ax(n,e,t,i,s,r,a,o){let l;if(e.side===fn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ds,o),l===null)return null;Go.copy(o),Go.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Go);return c<t.near||c>t.far?null:{distance:c,point:Go.clone(),object:n}}function Vo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Bo),n.getVertexPosition(l,zo),n.getVertexPosition(c,Ho);let h=ax(n,e,t,i,Bo,zo,Ho,Tf);if(h){let d=new L;Fi.getBarycoord(Tf,Bo,zo,Ho,d),s&&(h.uv=Fi.getInterpolatedAttribute(s,o,l,c,d,new le)),r&&(h.uv1=Fi.getInterpolatedAttribute(r,o,l,c,d,new le)),a&&(h.normal=Fi.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};Fi.getNormal(Bo,zo,Ho,u.normal),h.face=u,h.barycoord=d}return h}var Is=class extends Mn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=en,h=en,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ea=class extends Yt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},pr=new ft,wf=new ft,Wo=[],Af=new _i,ox=new ft,aa=new ie,oa=new vi,si=class extends ie{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ea(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ox)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,pr),Af.copy(e.boundingBox).applyMatrix4(pr),this.boundingBox.union(Af)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,pr),oa.copy(e.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(i),e.ray.intersectsSphere(oa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),wf.multiplyMatrices(i,pr),aa.matrixWorld=wf,aa.raycast(e,Wo);for(let a=0,o=Wo.length;a<o;a++){let l=Wo[a];l.instanceId=r,l.object=this,t.push(l)}Wo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ea(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Is(new Float32Array(s*this.count),s,this.count,Fr,Yn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new vi,lx=new le(.5,.5),Xo=new L,wr=class{constructor(e=new ni,t=new ni,i=new ni,s=new ni,r=new ni,a=new ni){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],S=r[9],m=r[10],f=r[11],y=r[12],v=r[13],x=r[14],b=r[15];if(s[0].setComponents(c-a,p-h,f-g,b-y).normalize(),s[1].setComponents(c+a,p+h,f+g,b+y).normalize(),s[2].setComponents(c+o,p+d,f+S,b+v).normalize(),s[3].setComponents(c-o,p-d,f-S,b-v).normalize(),i)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,p-u,f-m,b-x).normalize();else if(s[4].setComponents(c-l,p-u,f-m,b-x).normalize(),t===ii)s[5].setComponents(c+l,p+u,f+m,b+x).normalize();else if(t===vr)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);let t=lx.distanceTo(e.center);return As.radius=.7071067811865476+t,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Xo.x=s.normal.x>0?e.max.x:e.min.x,Xo.y=s.normal.y>0?e.max.y:e.min.y,Xo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ar=class extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gl=new L,xl=new L,Rf=new ft,la=new Cs,qo=new vi,Gh=new L,Cf=new L,yl=class extends an{constructor(e=new bt,t=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)gl.fromBufferAttribute(t,s-1),xl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=gl.distanceTo(xl);e.setAttribute("lineDistance",new Ke(i,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(s),qo.radius+=r,e.ray.intersectsSphere(qo)===!1)return;Rf.copy(s).invert(),la.copy(e.ray).applyMatrix4(Rf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let S=p,m=g-1;S<m;S+=c){let f=h.getX(S),y=h.getX(S+1),v=Yo(this,e,la,l,f,y,S);v&&t.push(v)}if(this.isLineLoop){let S=h.getX(g-1),m=h.getX(p),f=Yo(this,e,la,l,S,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let S=p,m=g-1;S<m;S+=c){let f=Yo(this,e,la,l,S,S+1,S);f&&t.push(f)}if(this.isLineLoop){let S=Yo(this,e,la,l,g-1,p,g-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yo(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(gl.fromBufferAttribute(o,s),xl.fromBufferAttribute(o,r),t.distanceSqToSegment(gl,xl,Gh,Cf)>i)return;Gh.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Gh);if(!(c<e.near||c>e.far))return{distance:c,point:Cf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var If=new L,Pf=new L,Ta=class extends yl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)If.fromBufferAttribute(t,s),Pf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+If.distanceTo(Pf);e.setAttribute("lineDistance",new Ke(i,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var bi=class extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lf=new ft,Kh=new Cs,Zo=new vi,Jo=new L,zi=class extends an{constructor(e=new bt,t=new bi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;Lf.copy(s).invert(),Kh.copy(e.ray).applyMatrix4(Lf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,S=p;g<S;g++){let m=c.getX(g);Jo.fromBufferAttribute(d,m),Df(Jo,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,S=p;g<S;g++)Jo.fromBufferAttribute(d,g),Df(Jo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Df(n,e,t,i,s,r,a){let o=Kh.distanceSqToPoint(n);if(o<t){let l=new L;Kh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var wa=class extends Mn{constructor(e=[],t=ps,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},On=class extends Mn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ls=class extends Mn{constructor(e,t,i=li,s,r,a,o=en,l=en,c,h=xi,d=1){if(h!==xi&&h!==gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},_l=class extends ls{constructor(e,t=li,i=ps,s,r,a=en,o=en,l,c=xi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Aa=class extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xt=class n extends bt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(d,2));function g(S,m,f,y,v,x,b,E,A,_,T){let R=x/A,P=b/_,N=x/2,O=b/2,C=E/2,D=A+1,z=_+1,H=0,j=0,G=new L;for(let Y=0;Y<z;Y++){let K=Y*P-O;for(let De=0;De<D;De++){let Ie=De*R-N;G[S]=Ie*y,G[m]=K*v,G[f]=C,c.push(G.x,G.y,G.z),G[S]=0,G[m]=0,G[f]=E>0?1:-1,h.push(G.x,G.y,G.z),d.push(De/A),d.push(1-Y/_),H+=1}}for(let Y=0;Y<_;Y++)for(let K=0;K<A;K++){let De=u+K+D*Y,Ie=u+K+D*(Y+1),St=u+(K+1)+D*(Y+1),lt=u+(K+1)+D*Y;l.push(De,Ie,lt),l.push(Ie,St,lt),j+=6}o.addGroup(p,j,T),p+=j,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ps=class n extends bt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,p=2*d+u,g=i*2+r,S=s+1,m=new L,f=new L;for(let y=0;y<=g;y++){let v=0,x=0,b=0,E=0;if(y<=i){let T=y/i,R=T*Math.PI/2;x=-h-e*Math.cos(R),b=e*Math.sin(R),E=-e*Math.cos(R),v=T*d}else if(y<=i+r){let T=(y-i)/r;x=-h+T*t,b=e,E=0,v=d+T*u}else{let T=(y-i-r)/i,R=T*Math.PI/2;x=h+e*Math.sin(R),b=e*Math.cos(R),E=e*Math.sin(R),v=d+u+T*d}let A=Math.max(0,Math.min(1,v/p)),_=0;y===0?_=.5/s:y===g&&(_=-.5/s);for(let T=0;T<=s;T++){let R=T/s,P=R*Math.PI*2,N=Math.sin(P),O=Math.cos(P);f.x=-b*O,f.y=x,f.z=b*N,o.push(f.x,f.y,f.z),m.set(-b*O,E,b*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+_,A)}if(y>0){let T=(y-1)*S;for(let R=0;R<s;R++){let P=T+R,N=T+R+1,O=y*S+R,C=y*S+R+1;a.push(P,N,O),a.push(N,C,O)}}}this.setIndex(a),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},qn=class n extends bt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,h=new le;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qe=class n extends bt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,S=[],m=i/2,f=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(p,2));function y(){let x=new L,b=new L,E=0,A=(t-e)/i;for(let _=0;_<=r;_++){let T=[],R=_/r,P=R*(t-e)+e;for(let N=0;N<=s;N++){let O=N/s,C=O*l+o,D=Math.sin(C),z=Math.cos(C);b.x=P*D,b.y=-R*i+m,b.z=P*z,d.push(b.x,b.y,b.z),x.set(D,A,z).normalize(),u.push(x.x,x.y,x.z),p.push(O,1-R),T.push(g++)}S.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let R=S[T][_],P=S[T+1][_],N=S[T+1][_+1],O=S[T][_+1];(e>0||T!==0)&&(h.push(R,P,O),E+=3),(t>0||T!==r-1)&&(h.push(P,N,O),E+=3)}c.addGroup(f,E,0),f+=E}function v(x){let b=g,E=new le,A=new L,_=0,T=x===!0?e:t,R=x===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*R,0),u.push(0,R,0),p.push(.5,.5),g++;let P=g;for(let N=0;N<=s;N++){let C=N/s*l+o,D=Math.cos(C),z=Math.sin(C);A.x=T*z,A.y=m*R,A.z=T*D,d.push(A.x,A.y,A.z),u.push(0,R,0),E.x=D*.5+.5,E.y=z*.5*R+.5,p.push(E.x,E.y),g++}for(let N=0;N<s;N++){let O=b+N,C=P+N;x===!0?h.push(C,C+1,O):h.push(C+1,C,O),_+=3}c.addGroup(f,_,x===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Et=class n extends Qe{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ra=class n extends bt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new L,x=new L,b=new L;for(let E=0;E<t.length;E+=3)p(t[E+0],v),p(t[E+1],x),p(t[E+2],b),l(v,x,b,y)}function l(y,v,x,b){let E=b+1,A=[];for(let _=0;_<=E;_++){A[_]=[];let T=y.clone().lerp(x,_/E),R=v.clone().lerp(x,_/E),P=E-_;for(let N=0;N<=P;N++)N===0&&_===E?A[_][N]=T:A[_][N]=T.clone().lerp(R,N/P)}for(let _=0;_<E;_++)for(let T=0;T<2*(E-_)-1;T++){let R=Math.floor(T/2);T%2===0?(u(A[_][R+1]),u(A[_+1][R]),u(A[_][R])):(u(A[_][R+1]),u(A[_+1][R+1]),u(A[_+1][R]))}}function c(y){let v=new L;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(y),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){let y=new L;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let x=m(y)/2/Math.PI+.5,b=f(y)/Math.PI+.5;a.push(x,1-b)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){let v=a[y+0],x=a[y+2],b=a[y+4],E=Math.max(v,x,b),A=Math.min(v,x,b);E>.9&&A<.1&&(v<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),b<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function p(y,v){let x=y*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function g(){let y=new L,v=new L,x=new L,b=new L,E=new le,A=new le,_=new le;for(let T=0,R=0;T<r.length;T+=9,R+=6){y.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),E.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),b.copy(y).add(v).add(x).divideScalar(3);let P=m(b);S(E,R+0,y,P),S(A,R+2,v,P),S(_,R+4,x,P)}}function S(y,v,x,b){b<0&&y.x===1&&(a[v]=y.x-1),x.x===0&&x.z===0&&(a[v]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new le:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new L,s=[],r=[],a=[],o=new L,l=new ft;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ut(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(ut(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Rr=class extends Bn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vl=class extends Rr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Cu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Nf=new L,Uf=new L,Vh=new Cu,Wh=new Cu,Xh=new Cu,bl=class extends Bn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Uf.subVectors(s[0],s[1]).add(s[0]),c=Uf);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Nf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Nf),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),S=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),Vh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,S,m),Wh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,S,m),Xh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,S,m)}else this.curveType==="catmullrom"&&(Vh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Wh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Xh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Vh.calc(l),Wh.calc(l),Xh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ff(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function cx(n,e){let t=1-n;return t*t*e}function hx(n,e){return 2*(1-n)*n*e}function ux(n,e){return n*n*e}function ha(n,e,t,i){return cx(n,e)+hx(n,t)+ux(n,i)}function dx(n,e){let t=1-n;return t*t*t*e}function fx(n,e){let t=1-n;return 3*t*t*n*e}function px(n,e){return 3*(1-n)*n*n*e}function mx(n,e){return n*n*n*e}function ua(n,e,t,i,s){return dx(n,e)+fx(n,t)+px(n,i)+mx(n,s)}var Ca=class extends Bn{constructor(e=new le,t=new le,i=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new le){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ua(e,s.x,r.x,a.x,o.x),ua(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ml=class extends Bn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ua(e,s.x,r.x,a.x,o.x),ua(e,s.y,r.y,a.y,o.y),ua(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ia=class extends Bn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sl=class extends Bn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends Bn{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ha(e,s.x,r.x,a.x),ha(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},El=class extends Bn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ha(e,s.x,r.x,a.x),ha(e,s.y,r.y,a.y),ha(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},La=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Ff(o,l.x,c.x,h.x,d.x),Ff(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},Qh=Object.freeze({__proto__:null,ArcCurve:vl,CatmullRomCurve3:bl,CubicBezierCurve:Ca,CubicBezierCurve3:Ml,EllipseCurve:Rr,LineCurve:Ia,LineCurve3:Sl,QuadraticBezierCurve:Pa,QuadraticBezierCurve3:El,SplineCurve:La}),Tl=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Qh[s.type]().fromJSON(s))}return this}},Da=class extends Tl{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ia(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Pa(this.currentPoint.clone(),new le(e,t),new le(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Ca(this.currentPoint.clone(),new le(e,t),new le(i,s),new le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new La(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new Rr(e,t,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Hi=class extends Da{constructor(e){super(e),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Da().fromJSON(s))}return this}};function gx(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Lp(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=bx(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,d=l;for(let u=t;u<s;u+=t){let p=n[u],g=n[u+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Na(r,a,t,o,l,c,0),a}function Lp(n,e,t,i,s){let r;if(s===Lx(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Of(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Of(a/i|0,n[a],n[a+1],r);return r&&Cr(r,r.next)&&(Fa(r),r=r.next),r}function Ls(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Cr(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Fa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Na(n,e,t,i,s,r,a){if(!n)return;!a&&r&&wx(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?yx(n,i,s,r):xx(n)){e.push(l.i,n.i,c.i),Fa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=_x(Ls(n),e),Na(n,e,t,i,s,r,2)):a===2&&vx(n,e,t,i,s,r):Na(Ls(n),e,t,i,s,r,1);break}}}function xx(n){let e=n.prev,t=n,i=n.next;if(Wt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),p=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&ca(s,o,r,l,a,c,g.x,g.y)&&Wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yx(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Wt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,p=Math.min(o,l,c),g=Math.min(h,d,u),S=Math.max(o,l,c),m=Math.max(h,d,u),f=eu(p,g,e,t,i),y=eu(S,m,e,t,i),v=n.prevZ,x=n.nextZ;for(;v&&v.z>=f&&x&&x.z<=y;){if(v.x>=p&&v.x<=S&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&ca(o,h,l,d,c,u,v.x,v.y)&&Wt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=S&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ca(o,h,l,d,c,u,x.x,x.y)&&Wt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=S&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&ca(o,h,l,d,c,u,v.x,v.y)&&Wt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=p&&x.x<=S&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ca(o,h,l,d,c,u,x.x,x.y)&&Wt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function _x(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Cr(i,s)&&Np(i,t,t.next,s)&&Ua(i,s)&&Ua(s,i)&&(e.push(i.i,t.i,s.i),Fa(t),Fa(t.next),t=n=s),t=t.next}while(t!==n);return Ls(t)}function vx(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cx(a,o)){let l=Up(a,o);a=Ls(a,a.next),l=Ls(l,l.next),Na(a,e,t,i,s,r,0),Na(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function bx(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Lp(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Rx(c))}s.sort(Mx);for(let r=0;r<s.length;r++)t=Sx(s[r],t);return t}function Mx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Sx(n,e){let t=Ex(n,e);if(!t)return e;let i=Up(t,n);return Ls(i,i.next),Ls(t,t.next)}function Ex(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(Cr(n,t))return t;do{if(Cr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Dp(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);Ua(t,n)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&Tx(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function Tx(n,e){return Wt(n.prev,n,e.prev)<0&&Wt(e.next,n,n.next)<0}function wx(n,e,t,i){let s=n;do s.z===0&&(s.z=eu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ax(s)}function Ax(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function eu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Rx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Dp(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function ca(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Dp(n,e,t,i,s,r,a,o)}function Cx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Ix(n,e)&&(Ua(n,e)&&Ua(e,n)&&Px(n,e)&&(Wt(n.prev,n,e.prev)||Wt(n,e.prev,e))||Cr(n,e)&&Wt(n.prev,n,n.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Cr(n,e){return n.x===e.x&&n.y===e.y}function Np(n,e,t,i){let s=jo(Wt(n,e,t)),r=jo(Wt(n,e,i)),a=jo(Wt(t,i,n)),o=jo(Wt(t,i,e));return!!(s!==r&&a!==o||s===0&&$o(n,t,e)||r===0&&$o(n,i,e)||a===0&&$o(t,n,i)||o===0&&$o(t,e,i))}function $o(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function jo(n){return n>0?1:n<0?-1:0}function Ix(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Np(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ua(n,e){return Wt(n.prev,n,n.next)<0?Wt(n,e,n.next)>=0&&Wt(n,n.prev,e)>=0:Wt(n,e,n.prev)<0||Wt(n,n.next,e)<0}function Px(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Up(n,e){let t=tu(n.i,n.x,n.y),i=tu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Of(n,e,t,i){let s=tu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Fa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function tu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lx(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var nu=class{static triangulate(e,t,i=2){return gx(e,t,i)}},gi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Bf(e),zf(i,e);let a=e.length;t.forEach(Bf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,zf(i,t[l]);let o=nu.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Bf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function zf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Oa=class n extends bt{constructor(e=new Hi([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ke(s,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Dx,v,x=!1,b,E,A,_;if(f){v=f.getSpacedPoints(h),x=!0,u=!1;let ne=f.isCatmullRomCurve3?f.closed:!1;b=f.computeFrenetFrames(h,ne),E=new L,A=new L,_=new L}u||(m=0,p=0,g=0,S=0);let T=o.extractPoints(c),R=T.shape,P=T.holes;if(!gi.isClockWise(R)){R=R.reverse();for(let ne=0,ce=P.length;ne<ce;ne++){let de=P[ne];gi.isClockWise(de)&&(P[ne]=de.reverse())}}function O(ne){let de=10000000000000001e-36,fe=ne[0];for(let ye=1;ye<=ne.length;ye++){let qe=ye%ne.length,Ve=ne[qe],je=Ve.x-fe.x,st=Ve.y-fe.y,U=je*je+st*st,Tt=Math.max(Math.abs(Ve.x),Math.abs(Ve.y),Math.abs(fe.x),Math.abs(fe.y)),ct=de*Tt*Tt;if(U<=ct){ne.splice(qe,1),ye--;continue}fe=Ve}}O(R),P.forEach(O);let C=P.length,D=R;for(let ne=0;ne<C;ne++){let ce=P[ne];R=R.concat(ce)}function z(ne,ce,de){return ce||Ze("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ce,de)}let H=R.length;function j(ne,ce,de){let fe,ye,qe,Ve=ne.x-ce.x,je=ne.y-ce.y,st=de.x-ne.x,U=de.y-ne.y,Tt=Ve*Ve+je*je,ct=Ve*U-je*st;if(Math.abs(ct)>Number.EPSILON){let I=Math.sqrt(Tt),M=Math.sqrt(st*st+U*U),k=ce.x-je/I,X=ce.y+Ve/I,Z=de.x-U/M,pe=de.y+st/M,xe=((Z-k)*U-(pe-X)*st)/(Ve*U-je*st);fe=k+Ve*xe-ne.x,ye=X+je*xe-ne.y;let J=fe*fe+ye*ye;if(J<=2)return new le(fe,ye);qe=Math.sqrt(J/2)}else{let I=!1;Ve>Number.EPSILON?st>Number.EPSILON&&(I=!0):Ve<-Number.EPSILON?st<-Number.EPSILON&&(I=!0):Math.sign(je)===Math.sign(U)&&(I=!0),I?(fe=-je,ye=Ve,qe=Math.sqrt(Tt)):(fe=Ve,ye=je,qe=Math.sqrt(Tt/2))}return new le(fe/qe,ye/qe)}let G=[];for(let ne=0,ce=D.length,de=ce-1,fe=ne+1;ne<ce;ne++,de++,fe++)de===ce&&(de=0),fe===ce&&(fe=0),G[ne]=j(D[ne],D[de],D[fe]);let Y=[],K,De=G.concat();for(let ne=0,ce=C;ne<ce;ne++){let de=P[ne];K=[];for(let fe=0,ye=de.length,qe=ye-1,Ve=fe+1;fe<ye;fe++,qe++,Ve++)qe===ye&&(qe=0),Ve===ye&&(Ve=0),K[fe]=j(de[fe],de[qe],de[Ve]);Y.push(K),De=De.concat(K)}let Ie;if(m===0)Ie=gi.triangulateShape(D,P);else{let ne=[],ce=[];for(let de=0;de<m;de++){let fe=de/m,ye=p*Math.cos(fe*Math.PI/2),qe=g*Math.sin(fe*Math.PI/2)+S;for(let Ve=0,je=D.length;Ve<je;Ve++){let st=z(D[Ve],G[Ve],qe);Te(st.x,st.y,-ye),fe===0&&ne.push(st)}for(let Ve=0,je=C;Ve<je;Ve++){let st=P[Ve];K=Y[Ve];let U=[];for(let Tt=0,ct=st.length;Tt<ct;Tt++){let I=z(st[Tt],K[Tt],qe);Te(I.x,I.y,-ye),fe===0&&U.push(I)}fe===0&&ce.push(U)}}Ie=gi.triangulateShape(ne,ce)}let St=Ie.length,lt=g+S;for(let ne=0;ne<H;ne++){let ce=u?z(R[ne],De[ne],lt):R[ne];x?(A.copy(b.normals[0]).multiplyScalar(ce.x),E.copy(b.binormals[0]).multiplyScalar(ce.y),_.copy(v[0]).add(A).add(E),Te(_.x,_.y,_.z)):Te(ce.x,ce.y,0)}for(let ne=1;ne<=h;ne++)for(let ce=0;ce<H;ce++){let de=u?z(R[ce],De[ce],lt):R[ce];x?(A.copy(b.normals[ne]).multiplyScalar(de.x),E.copy(b.binormals[ne]).multiplyScalar(de.y),_.copy(v[ne]).add(A).add(E),Te(_.x,_.y,_.z)):Te(de.x,de.y,d/h*ne)}for(let ne=m-1;ne>=0;ne--){let ce=ne/m,de=p*Math.cos(ce*Math.PI/2),fe=g*Math.sin(ce*Math.PI/2)+S;for(let ye=0,qe=D.length;ye<qe;ye++){let Ve=z(D[ye],G[ye],fe);Te(Ve.x,Ve.y,d+de)}for(let ye=0,qe=P.length;ye<qe;ye++){let Ve=P[ye];K=Y[ye];for(let je=0,st=Ve.length;je<st;je++){let U=z(Ve[je],K[je],fe);x?Te(U.x,U.y+v[h-1].y,v[h-1].x+de):Te(U.x,U.y,d+de)}}}yt(),$();function yt(){let ne=s.length/3;if(u){let ce=0,de=H*ce;for(let fe=0;fe<St;fe++){let ye=Ie[fe];Je(ye[2]+de,ye[1]+de,ye[0]+de)}ce=h+m*2,de=H*ce;for(let fe=0;fe<St;fe++){let ye=Ie[fe];Je(ye[0]+de,ye[1]+de,ye[2]+de)}}else{for(let ce=0;ce<St;ce++){let de=Ie[ce];Je(de[2],de[1],de[0])}for(let ce=0;ce<St;ce++){let de=Ie[ce];Je(de[0]+H*h,de[1]+H*h,de[2]+H*h)}}i.addGroup(ne,s.length/3-ne,0)}function $(){let ne=s.length/3,ce=0;te(D,ce),ce+=D.length;for(let de=0,fe=P.length;de<fe;de++){let ye=P[de];te(ye,ce),ce+=ye.length}i.addGroup(ne,s.length/3-ne,1)}function te(ne,ce){let de=ne.length;for(;--de>=0;){let fe=de,ye=de-1;ye<0&&(ye=ne.length-1);for(let qe=0,Ve=h+m*2;qe<Ve;qe++){let je=H*qe,st=H*(qe+1),U=ce+fe+je,Tt=ce+ye+je,ct=ce+ye+st,I=ce+fe+st;Pe(U,Tt,ct,I)}}}function Te(ne,ce,de){l.push(ne),l.push(ce),l.push(de)}function Je(ne,ce,de){$e(ne),$e(ce),$e(de);let fe=s.length/3,ye=y.generateTopUV(i,s,fe-3,fe-2,fe-1);Lt(ye[0]),Lt(ye[1]),Lt(ye[2])}function Pe(ne,ce,de,fe){$e(ne),$e(ce),$e(fe),$e(ce),$e(de),$e(fe);let ye=s.length/3,qe=y.generateSideWallUV(i,s,ye-6,ye-3,ye-2,ye-1);Lt(qe[0]),Lt(qe[1]),Lt(qe[3]),Lt(qe[1]),Lt(qe[2]),Lt(qe[3])}function $e(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function Lt(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Nx(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Qh[s.type]().fromJSON(s)),new n(i,e.options)}},Dx={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new le(r,a),new le(o,l),new le(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],p=e[s*3+1],g=e[s*3+2],S=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-d),new le(u,1-g),new le(S,1-f)]:[new le(o,1-l),new le(h,1-d),new le(p,1-g),new le(m,1-f)]}};function Nx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ct=class n extends Ra{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ba=class n extends Ra{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ri=class n extends bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],S=[],m=[];for(let f=0;f<h;f++){let y=f*u-a;for(let v=0;v<c;v++){let x=v*d-r;g.push(x,-y,0),S.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let v=y+c*f,x=y+c*(f+1),b=y+1+c*(f+1),E=y+1+c*f;p.push(v,x,E),p.push(x,b,E)}this.setIndex(p),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(S,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ds=class n extends bt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/s,p=new L,g=new le;for(let S=0;S<=s;S++){for(let m=0;m<=i;m++){let f=r+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let S=0;S<s;S++){let m=S*(i+1);for(let f=0;f<i;f++){let y=f+m,v=y,x=y+i+1,b=y+i+2,E=y+1;o.push(v,x,E),o.push(x,b,E)}}this.setIndex(o),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},za=class n extends bt{constructor(e=new Hi([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(r,3)),this.setAttribute("uv",new Ke(a,2));function c(h){let d=s.length/3,u=h.extractPoints(t),p=u.shape,g=u.holes;gi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let y=g[m];gi.isClockWise(y)===!0&&(g[m]=y.reverse())}let S=gi.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let y=g[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){let y=p[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,f=S.length;m<f;m++){let y=S[m],v=y[0]+d,x=y[1]+d,b=y[2]+d;i.push(v,x,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ux(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function Ux(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var It=class n extends bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new L,u=new L,p=[],g=[],S=[],m=[];for(let f=0;f<=i;f++){let y=[],v=f/i,x=a+v*o,b=e*Math.cos(x),E=Math.sqrt(e*e-b*b),A=0;f===0&&a===0?A=.5/t:f===i&&l===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){let T=_/t,R=s+T*r;d.x=-E*Math.cos(R),d.y=b,d.z=E*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),S.push(u.x,u.y,u.z),m.push(T+A,1-v),y.push(c++)}h.push(y)}for(let f=0;f<i;f++)for(let y=0;y<t;y++){let v=h[f][y+1],x=h[f][y],b=h[f+1][y],E=h[f+1][y+1];(f!==0||a>0)&&p.push(v,x,E),(f!==i-1||l<Math.PI)&&p.push(x,b,E)}this.setIndex(p),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(S,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Pn=class n extends bt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new L,p=new L,g=new L;for(let S=0;S<=i;S++){let m=a+S/i*o;for(let f=0;f<=s;f++){let y=f/s*r;p.x=(e+t*Math.cos(m))*Math.cos(y),p.y=(e+t*Math.cos(m))*Math.sin(y),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/s),d.push(S/i)}}for(let S=1;S<=i;S++)for(let m=1;m<=s;m++){let f=(s+1)*S+m-1,y=(s+1)*(S-1)+m-1,v=(s+1)*(S-1)+m,x=(s+1)*S+m;l.push(f,y,x),l.push(y,v,x)}this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Os(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Hf(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Hf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function yn(n){let e={};for(let t=0;t<n.length;t++){let i=Os(n[t]);for(let s in i)e[s]=i[s]}return e}function Hf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Fx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Iu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Fp={clone:Os,merge:yn},Ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ox,this.fragmentShader=Bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=Fx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ce().setHex(s.value);break;case"v2":this.uniforms[i].value=new le().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ht().fromArray(s.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ft().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},wl=class extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ki=class extends In{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ns=class extends In{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Vl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Al=class extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rl=class extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function mr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function qh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var cs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Cl=class extends cs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jh,endingEnd:Jh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $h:r=e,o=2*t-i;break;case jh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case $h:a=e,l=2*i-t;break;case jh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),S=g*g,m=S*g,f=-u*m+2*u*S-u*g,y=(1+u)*m+(-1.5-2*u)*S+(-.5+u)*g+1,v=(-1-p)*m+(1.5+p)*S+.5*g,x=p*m-p*S;for(let b=0;b!==o;++b)r[b]=f*a[h+b]+y*a[c+b]+v*a[l+b]+x*a[d+b];return r}},Il=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Pl=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ll=class extends cs{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-t)/(s-t),S=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*S+a[l+m]*g;return r}let u=o*2,p=e-1;for(let g=0;g!==o;++g){let S=a[c+g],m=a[l+g],f=p*u+g*2,y=d[f],v=d[f+1],x=e*u+g*2,b=h[x],E=h[x+1],A=Hx(i,t,y,b,s);r[g]=Op(A,S,v,E,m)}return r}};function Op(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function zx(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Hx(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Op(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=zx(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var zn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mr(t,this.TimeBufferType),this.values=mr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:mr(e.times,Array),values:mr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),qh(e.settings)&&(i.settings={inTangents:mr(e.settings.inTangents,Array),outTangents:mr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ll(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case da:t=this.InterpolantFactoryMethodDiscrete;break;case hl:t=this.InterpolantFactoryMethodLinear;break;case el:t=this.InterpolantFactoryMethodSmooth;break;case Zh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return We("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return el;case this.InterpolantFactoryMethodBezier:return Zh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;qh(this.settings)&&(kf(this.settings.inTangents,e),kf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Gg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===el,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){let S=t[d+g];if(S!==t[u+g]||S!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,qh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function kf(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=hl;var hs=class extends zn{constructor(e,t,i){super(e,t,i)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=da;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};Dl.prototype.ValueTypeName="color";var Nl=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};Nl.prototype.ValueTypeName="number";var Ul=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ha=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ul(this.times,this.values,this.getValueSize(),e)}};Ha.prototype.ValueTypeName="quaternion";Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends zn{constructor(e,t,i){super(e,t,i)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=da;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};Fl.prototype.ValueTypeName="vector";var Ol=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bp=new Ol,Bl=class{constructor(e){this.manager=e!==void 0?e:Bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=class extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ka=class extends Ir{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Yh=new ft,Gf=new L,Vf=new L,Ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gf),Vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Yh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Yh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===vr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ko=new L,Qo=new bn,fi=new L,Va=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ko,Qo,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Qo,fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ko,Qo,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Qo,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},as=new L,Wf=new le,Xf=new le,un=class extends Va{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ul*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(vh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,Wf,Xf),t.subVectors(Xf,Wf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vh*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var iu=class extends Ga{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}},Gi=class extends Ir{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new iu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Pr=class extends Va{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},su=class extends Ga{constructor(){super(new Pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lr=class extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new su}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var gr=-90,xr=1,zl=class extends an{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(gr,xr,e,t);s.layers=this.layers,this.add(s);let r=new un(gr,xr,e,t);r.layers=this.layers,this.add(r);let a=new un(gr,xr,e,t);a.layers=this.layers,this.add(a);let o=new un(gr,xr,e,t);o.layers=this.layers,this.add(o);let l=new un(gr,xr,e,t);l.layers=this.layers,this.add(l);let c=new un(gr,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Hl=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Pu="\\[\\]\\.:\\/",kx=new RegExp("["+Pu+"]","g"),Lu="[^"+Pu+"]",Gx="[^"+Pu.replace("\\.","")+"]",Vx=/((?:WC+[\/:])*)/.source.replace("WC",Lu),Wx=/(WCOD+)?/.source.replace("WCOD",Gx),Xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lu),qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lu),Yx=new RegExp("^"+Vx+Wx+Xx+qx+"$"),Zx=["material","materials","bones","map"],ru=class{constructor(e,t,i){let s=i||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kx,"")}static parseTrackName(e){let t=Yx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Zx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=ru;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var VM=new Float32Array(1);var qf=new ft,ai=class{constructor(e,t,i=0,s=1/0){this.ray=new Cs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qf),this}intersectObject(e,t=!0,i=[]){return au(e,this,i,t),i.sort(Yf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)au(e[s],this,i,t);return i.sort(Yf),i}};function Yf(n,e){return n.distance-e.distance}function au(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)au(r[a],e,t,!0)}}var Bu=class Bu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Bu.prototype.isMatrix2=!0;var ou=Bu;function Du(n,e,t,i){let s=Jx(i);switch(t){case Tu:return n*e;case Fr:return n*e/s.components*s.byteLength;case $l:return n*e/s.components*s.byteLength;case xs:return n*e*2/s.components*s.byteLength;case jl:return n*e*2/s.components*s.byteLength;case wu:return n*e*3/s.components*s.byteLength;case Zn:return n*e*4/s.components*s.byteLength;case Kl:return n*e*4/s.components*s.byteLength;case Ya:case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ja:case $a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ec:case nc:return Math.max(n,16)*Math.max(e,8)/4;case Ql:case tc:return Math.max(n,8)*Math.max(e,8)/2;case ic:case sc:case ac:case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rc:case ja:case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Sc:case Ec:case Tc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wc:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ka:case Rc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jx(n){switch(n){case Ln:case bu:return{byteLength:1,components:1};case Nr:case Mu:case ci:return{byteLength:2,components:1};case Zl:case Jl:return{byteLength:2,components:4};case li:case Yl:case Yn:return{byteLength:4,components:1};case Su:case Eu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function am(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function jx(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],S=d[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++u,d[u]=S)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let S=d[p];n.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qx=`#ifdef USE_ALPHAHASH
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
#endif`,ey=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ty=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ny=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sy=`#ifdef USE_AOMAP
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
#endif`,ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ay=`#ifdef USE_BATCHING
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
#endif`,oy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ly=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uy=`#ifdef USE_IRIDESCENCE
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
#endif`,dy=`#ifdef USE_BUMPMAP
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
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,by=`#define PI 3.141592653589793
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
} // validated`,My=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ey=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ay=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ry="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iy=`#ifdef USE_ENVMAP
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
#endif`,Py=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,By=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zy=`#ifdef USE_GRADIENTMAP
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
}`,Hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ky=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Wy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jy=`PhysicalMaterial material;
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
#endif`,$y=`uniform sampler2D dfgLUT;
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
}`,jy=`
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,t_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l_=`#if defined( USE_POINTS_UV )
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
#endif`,c_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p_=`#ifdef USE_MORPHTARGETS
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
#endif`,m_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,__=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,b_=`#ifdef USE_NORMALMAP
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
#endif`,M_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,R_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,O_=`float getShadowMask() {
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
}`,B_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z_=`#ifdef USE_SKINNING
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
#endif`,H_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k_=`#ifdef USE_SKINNING
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
#endif`,G_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q_=`#ifdef USE_TRANSMISSION
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
#endif`,Y_=`#ifdef USE_TRANSMISSION
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q_=`uniform sampler2D t2D;
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
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`#include <common>
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
}`,rv=`#if DEPTH_PACKING == 3200
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
}`,av=`#define DISTANCE
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
}`,ov=`#define DISTANCE
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
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hv=`uniform float scale;
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
}`,uv=`uniform vec3 diffuse;
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
}`,dv=`#include <common>
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
}`,fv=`uniform vec3 diffuse;
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
}`,pv=`#define LAMBERT
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
}`,mv=`#define LAMBERT
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
}`,gv=`#define MATCAP
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
}`,xv=`#define MATCAP
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
}`,yv=`#define NORMAL
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
}`,_v=`#define NORMAL
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
}`,vv=`#define PHONG
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
}`,bv=`#define PHONG
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
}`,Mv=`#define STANDARD
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
}`,Sv=`#define STANDARD
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
}`,Ev=`#define TOON
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
}`,Tv=`#define TOON
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
}`,wv=`uniform float size;
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
}`,Av=`uniform vec3 diffuse;
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
}`,Rv=`#include <common>
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
}`,Cv=`uniform vec3 color;
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
}`,Iv=`uniform float rotation;
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
}`,Pv=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:Kx,alphahash_pars_fragment:Qx,alphamap_fragment:ey,alphamap_pars_fragment:ty,alphatest_fragment:ny,alphatest_pars_fragment:iy,aomap_fragment:sy,aomap_pars_fragment:ry,batching_pars_vertex:ay,batching_vertex:oy,begin_vertex:ly,beginnormal_vertex:cy,bsdfs:hy,iridescence_fragment:uy,bumpmap_pars_fragment:dy,clipping_planes_fragment:fy,clipping_planes_pars_fragment:py,clipping_planes_pars_vertex:my,clipping_planes_vertex:gy,color_fragment:xy,color_pars_fragment:yy,color_pars_vertex:_y,color_vertex:vy,common:by,cube_uv_reflection_fragment:My,defaultnormal_vertex:Sy,displacementmap_pars_vertex:Ey,displacementmap_vertex:Ty,emissivemap_fragment:wy,emissivemap_pars_fragment:Ay,colorspace_fragment:Ry,colorspace_pars_fragment:Cy,envmap_fragment:Iy,envmap_common_pars_fragment:Py,envmap_pars_fragment:Ly,envmap_pars_vertex:Dy,envmap_physical_pars_fragment:Wy,envmap_vertex:Ny,fog_vertex:Uy,fog_pars_vertex:Fy,fog_fragment:Oy,fog_pars_fragment:By,gradientmap_pars_fragment:zy,lightmap_pars_fragment:Hy,lights_lambert_fragment:ky,lights_lambert_pars_fragment:Gy,lights_pars_begin:Vy,lights_toon_fragment:Xy,lights_toon_pars_fragment:qy,lights_phong_fragment:Yy,lights_phong_pars_fragment:Zy,lights_physical_fragment:Jy,lights_physical_pars_fragment:$y,lights_fragment_begin:jy,lights_fragment_maps:Ky,lights_fragment_end:Qy,lightprobes_pars_fragment:e_,logdepthbuf_fragment:t_,logdepthbuf_pars_fragment:n_,logdepthbuf_pars_vertex:i_,logdepthbuf_vertex:s_,map_fragment:r_,map_pars_fragment:a_,map_particle_fragment:o_,map_particle_pars_fragment:l_,metalnessmap_fragment:c_,metalnessmap_pars_fragment:h_,morphinstance_vertex:u_,morphcolor_vertex:d_,morphnormal_vertex:f_,morphtarget_pars_vertex:p_,morphtarget_vertex:m_,normal_fragment_begin:g_,normal_fragment_maps:x_,normal_pars_fragment:y_,normal_pars_vertex:__,normal_vertex:v_,normalmap_pars_fragment:b_,clearcoat_normal_fragment_begin:M_,clearcoat_normal_fragment_maps:S_,clearcoat_pars_fragment:E_,iridescence_pars_fragment:T_,opaque_fragment:w_,packing:A_,premultiplied_alpha_fragment:R_,project_vertex:C_,dithering_fragment:I_,dithering_pars_fragment:P_,roughnessmap_fragment:L_,roughnessmap_pars_fragment:D_,shadowmap_pars_fragment:N_,shadowmap_pars_vertex:U_,shadowmap_vertex:F_,shadowmask_pars_fragment:O_,skinbase_vertex:B_,skinning_pars_vertex:z_,skinning_vertex:H_,skinnormal_vertex:k_,specularmap_fragment:G_,specularmap_pars_fragment:V_,tonemapping_fragment:W_,tonemapping_pars_fragment:X_,transmission_fragment:q_,transmission_pars_fragment:Y_,uv_pars_fragment:Z_,uv_pars_vertex:J_,uv_vertex:$_,worldpos_vertex:j_,background_vert:K_,background_frag:Q_,backgroundCube_vert:ev,backgroundCube_frag:tv,cube_vert:nv,cube_frag:iv,depth_vert:sv,depth_frag:rv,distance_vert:av,distance_frag:ov,equirect_vert:lv,equirect_frag:cv,linedashed_vert:hv,linedashed_frag:uv,meshbasic_vert:dv,meshbasic_frag:fv,meshlambert_vert:pv,meshlambert_frag:mv,meshmatcap_vert:gv,meshmatcap_frag:xv,meshnormal_vert:yv,meshnormal_frag:_v,meshphong_vert:vv,meshphong_frag:bv,meshphysical_vert:Mv,meshphysical_frag:Sv,meshtoon_vert:Ev,meshtoon_frag:Tv,points_vert:wv,points_frag:Av,shadow_vert:Rv,shadow_frag:Cv,sprite_vert:Iv,sprite_frag:Pv},Ee={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Ei={basic:{uniforms:yn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:yn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:yn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:yn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:yn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ce(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:yn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:yn([Ee.points,Ee.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:yn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:yn([Ee.common,Ee.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:yn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:yn([Ee.sprite,Ee.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:yn([Ee.common,Ee.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:yn([Ee.lights,Ee.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Ei.physical={uniforms:yn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Pc={r:0,b:0,g:0},Lv=new ft,om=new nt;om.set(-1,0,0,0,1,0,0,0,1);function Dv(n,e,t,i,s,r){let a=new Ce(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(y){let v=y.isScene===!0?y.background:null;if(v&&v.isTexture){let x=y.backgroundBlurriness>0;v=e.get(v,x)}return v}function g(y){let v=!1,x=p(y);x===null?m(a,o):x&&x.isColor&&(m(x,1),v=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(y,v){let x=p(v);x&&(x.isCubeTexture||x.mapping===Xa)?(c===void 0&&(c=new ie(new xt(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Os(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Lv.makeRotationFromEuler(v.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(om),c.material.toneMapped=dt.getTransfer(x.colorSpace)!==Rt,(h!==x||d!==x.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ie(new ri(2,2),new Sn({name:"BackgroundMaterial",uniforms:Os(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=dt.getTransfer(x.colorSpace)!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,v){y.getRGB(Pc,Iu(n)),t.buffers.color.setClear(Pc.r,Pc.g,Pc.b,v,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),o=v,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:S,dispose:f}}function Nv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(P,N,O,C,D){let z=!1,H=d(P,C,O,N);r!==H&&(r=H,c(r.object)),z=p(P,C,O,D),z&&g(P,C,O,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,x(P,N,O,C),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function d(P,N,O,C){let D=C.wireframe===!0,z=i[N.id];z===void 0&&(z={},i[N.id]=z);let H=P.isInstancedMesh===!0?P.id:0,j=z[H];j===void 0&&(j={},z[H]=j);let G=j[O.id];G===void 0&&(G={},j[O.id]=G);let Y=G[D];return Y===void 0&&(Y=u(l()),G[D]=Y),Y}function u(P){let N=[],O=[],C=[];for(let D=0;D<t;D++)N[D]=0,O[D]=0,C[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:C,object:P,attributes:{},index:null}}function p(P,N,O,C){let D=r.attributes,z=N.attributes,H=0,j=O.getAttributes();for(let G in j)if(j[G].location>=0){let K=D[G],De=z[G];if(De===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(De=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(De=P.instanceColor)),K===void 0||K.attribute!==De||De&&K.data!==De.data)return!0;H++}return r.attributesNum!==H||r.index!==C}function g(P,N,O,C){let D={},z=N.attributes,H=0,j=O.getAttributes();for(let G in j)if(j[G].location>=0){let K=z[G];K===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));let De={};De.attribute=K,K&&K.data&&(De.data=K.data),D[G]=De,H++}r.attributes=D,r.attributesNum=H,r.index=C}function S(){let P=r.newAttributes;for(let N=0,O=P.length;N<O;N++)P[N]=0}function m(P){f(P,0)}function f(P,N){let O=r.newAttributes,C=r.enabledAttributes,D=r.attributeDivisors;O[P]=1,C[P]===0&&(n.enableVertexAttribArray(P),C[P]=1),D[P]!==N&&(n.vertexAttribDivisor(P,N),D[P]=N)}function y(){let P=r.newAttributes,N=r.enabledAttributes;for(let O=0,C=N.length;O<C;O++)N[O]!==P[O]&&(n.disableVertexAttribArray(O),N[O]=0)}function v(P,N,O,C,D,z,H){H===!0?n.vertexAttribIPointer(P,N,O,D,z):n.vertexAttribPointer(P,N,O,C,D,z)}function x(P,N,O,C){S();let D=C.attributes,z=O.getAttributes(),H=N.defaultAttributeValues;for(let j in z){let G=z[j];if(G.location>=0){let Y=D[j];if(Y===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){let K=Y.normalized,De=Y.itemSize,Ie=e.get(Y);if(Ie===void 0)continue;let St=Ie.buffer,lt=Ie.type,yt=Ie.bytesPerElement,$=lt===n.INT||lt===n.UNSIGNED_INT||Y.gpuType===Yl;if(Y.isInterleavedBufferAttribute){let te=Y.data,Te=te.stride,Je=Y.offset;if(te.isInstancedInterleavedBuffer){for(let Pe=0;Pe<G.locationSize;Pe++)f(G.location+Pe,te.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Pe=0;Pe<G.locationSize;Pe++)m(G.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,St);for(let Pe=0;Pe<G.locationSize;Pe++)v(G.location+Pe,De/G.locationSize,lt,K,Te*yt,(Je+De/G.locationSize*Pe)*yt,$)}else{if(Y.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)f(G.location+te,Y.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let te=0;te<G.locationSize;te++)m(G.location+te);n.bindBuffer(n.ARRAY_BUFFER,St);for(let te=0;te<G.locationSize;te++)v(G.location+te,De/G.locationSize,lt,K,De*yt,De/G.locationSize*te*yt,$)}}else if(H!==void 0){let K=H[j];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(G.location,K);break;case 3:n.vertexAttrib3fv(G.location,K);break;case 4:n.vertexAttrib4fv(G.location,K);break;default:n.vertexAttrib1fv(G.location,K)}}}}y()}function b(){T();for(let P in i){let N=i[P];for(let O in N){let C=N[O];for(let D in C){let z=C[D];for(let H in z)h(z[H].object),delete z[H];delete C[D]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;let N=i[P.id];for(let O in N){let C=N[O];for(let D in C){let z=C[D];for(let H in z)h(z[H].object),delete z[H];delete C[D]}}delete i[P.id]}function A(P){for(let N in i){let O=i[N];for(let C in O){let D=O[C];if(D[P.id]===void 0)continue;let z=D[P.id];for(let H in z)h(z[H].object),delete z[H];delete D[P.id]}}}function _(P){for(let N in i){let O=i[N],C=P.isInstancedMesh===!0?P.id:0,D=O[C];if(D!==void 0){for(let z in D){let H=D[z];for(let j in H)h(H[j].object),delete H[j];delete D[z]}delete O[C],Object.keys(O).length===0&&delete i[N]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:m,disableUnusedAttributes:y}}function Uv(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Fv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Zn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ln&&A!==Yn&&!_&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(We("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,maxSamples:b,samples:E}}function Ov(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ni,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,v=y*4,x=f.clippingState||null;l.value=x,x=h(g,u,v,p);for(let b=0;b!==v;++b)x[b]=t[b];f.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=l.value,g!==!0||m===null){let f=p+S*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,x=p;v!==S;++v,x+=4)a.copy(d[v]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var Br=4,Bv=6,zv=20,Hv=256,eo=new Pr,zp=new Ce,zu=null,Hu=0,ku=0,Gu=!1,kv=new L,Bs=new L,Dc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=kv}=r;zu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zu,Hu,ku),this._renderer.xr.enabled=Gu,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:ci,format:Zn,colorSpace:fa,depthBuffer:!1},s=Hp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hp(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gv(r)),this._blurMaterial=Wv(r,e,t),this._ggxMaterial=Vv(r,e,t)}return s}_compileMaterial(e){let t=new ie(new bt,e);this._renderer.compile(t,eo)}_sceneToCubeUV(e,t,i,s,r){let l=new un(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(zp),d.toneMapping=oi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ie(new xt,new Xe({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,f=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,f=!0):(m.color.copy(zp),f=!0);for(let v=0;v<6;v++){let x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));let b=this._cubeSize;Or(s,x*b,v>2?b:0,b,b),d.setRenderTarget(s),f&&d.render(S,l),d.render(e,l)}d.toneMapping=p,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ps||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Or(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,eo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,p=d*u,{_lodMax:g}=this,S=this._sizeLods[i],m=3*S*(i>g-Br?i-g+Br:0),f=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Or(r,m,f,3*S,2*S),s.setRenderTarget(r),s.render(o,eo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Or(e,m,f,3*S,2*S),s.setRenderTarget(e),s.render(o,eo)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Br?s-this._lodMax+Br:0),u=4*(this._cubeSize-h);Or(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,eo)}};function Gv(n){let e=[],t=[],i=n,s=n-Br+1+Bv;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,g=new Float32Array(p*u*d),S=new Float32Array(p*u*d);for(let f=0;f<d;f++){let y=f%3*2/3-1,v=f>2?0:-1,x=[y,v,0,y+2/3,v,0,y+2/3,v+1,0,y,v,0,y+2/3,v+1,0,y,v+1,0];g.set(x,p*u*f);for(let b=0;b<u;b++){let E=h[b*2]*2-1,A=h[b*2+1]*2-1;f===0?Bs.set(1,A,E):f===1?Bs.set(-E,1,-A):f===2?Bs.set(-E,A,1):f===3?Bs.set(-1,A,-E):f===4?Bs.set(-E,-1,A):Bs.set(E,A,-1),Bs.toArray(S,(f*u+b)*p)}}let m=new bt;m.setAttribute("position",new Yt(g,p)),m.setAttribute("outputDirection",new Yt(S,p)),t.push(new ie(m,null)),i>Br&&i--}return{lodMeshes:t,sizeLods:e}}function Hp(n,e,t){let i=new Rn(n,e,t);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Or(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Vv(n,e,t){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Wv(n,e,t){return new Sn({name:"SphericalGaussianBlur",defines:{SAMPLES:zv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function kp(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Gp(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Fc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nc=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new wa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xt(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Mi});r.uniforms.tEquirect.value=t;let a=new ie(s,r),o=t.minFilter;return t.minFilter===ms&&(t.minFilter=dn),new zl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function Xv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Wl||p===Xl)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let S=new Nc(g.height);return S.fromEquirectangularTexture(n,u),e.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,g=p===Wl||p===Xl,S=p===ps||p===Fs;if(g||S){let m=t.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Dc(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return g&&y&&y.height>0||S&&y&&l(y)?(i===null&&(i=new Dc(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Wl?u.mapping=ps:p===Xl&&(u.mapping=Fs),u}function l(u){let p=0,g=6;for(let S=0;S<g;S++)u[S]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function qv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Rs("WebGLRenderer: "+i+" extension not supported."),s}}}function Yv(n,e,t,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)e.update(u[p],n.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,g=d.attributes.position,S=0;if(g===void 0)return;if(p!==null){let y=p.array;S=p.version;for(let v=0,x=y.length;v<x;v+=3){let b=y[v+0],E=y[v+1],A=y[v+2];u.push(b,E,E,A,A,b)}}else{let y=g.array;S=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){let b=v+0,E=v+1,A=v+2;u.push(b,E,E,A,A,b)}}let m=new(g.count>=65535?ba:va)(u,1);m.version=S;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Zv(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),t.update(u,i,1)}function c(d,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,d*a,p),t.update(u,i,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,p);let S=0;for(let m=0;m<p;m++)S+=u[m];t.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Jv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function $v(n,e,t){let i=new WeakMap,s=new Ht;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),S===!0&&(v=3);let x=o.attributes.position.count*v,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*b*4*d),A=new xa(E,x,b,d);A.type=Yn,A.needsUpdate=!0;let _=v*4;for(let R=0;R<d;R++){let P=m[R],N=f[R],O=y[R],C=x*b*4*R;for(let D=0;D<P.count;D++){let z=D*_;p===!0&&(s.fromBufferAttribute(P,D),E[C+z+0]=s.x,E[C+z+1]=s.y,E[C+z+2]=s.z,E[C+z+3]=0),g===!0&&(s.fromBufferAttribute(N,D),E[C+z+4]=s.x,E[C+z+5]=s.y,E[C+z+6]=s.z,E[C+z+7]=0),S===!0&&(s.fromBufferAttribute(O,D),E[C+z+8]=s.x,E[C+z+9]=s.y,E[C+z+10]=s.z,E[C+z+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new le(x,b)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function jv(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Kv={[fu]:"LINEAR_TONE_MAPPING",[pu]:"REINHARD_TONE_MAPPING",[mu]:"CINEON_TONE_MAPPING",[gu]:"ACES_FILMIC_TONE_MAPPING",[yu]:"AGX_TONE_MAPPING",[_u]:"NEUTRAL_TONE_MAPPING",[xu]:"CUSTOM_TONE_MAPPING"};function Qv(n,e,t,i,s,r){let a=new Rn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new bt;c.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let h=new wl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ie(c,h),u=new Pr(-1,1,1,-1,0,1),p=null,g=null,S=!1,m,f=null,y=[],v=!1;this.setSize=function(x,b){a.setSize(x,b),o!==null&&o.setSize(x,b),l!==null&&l.setSize(x,b);for(let E=0;E<y.length;E++){let A=y[E];A.setSize&&A.setSize(x,b)}},this.setEffects=function(x){y=x,v=y.length>0&&y[0].isRenderPass===!0;let b=a.width,E=a.height;y.length>0&&o===null&&(o=new Rn(b,E,{type:ci,depthBuffer:!1,stencilBuffer:!1}),l=new Rn(b,E,{type:ci,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let _=y[A];_.setSize&&_.setSize(b,E)}},this.begin=function(x,b){if(S||x.toneMapping===oi&&y.length===0)return!1;if(f=b,b!==null){let E=b.width,A=b.height;(a.width!==E||a.height!==A)&&this.setSize(E,A)}return v===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=oi,!0},this.hasRenderPass=function(){return v},this.end=function(x,b){x.toneMapping=m,S=!0;let E=a,A=o;for(let _=0;_<y.length;_++){let T=y[_];T.enabled!==!1&&(T.render(x,A,E,b),T.needsSwap!==!1&&(E=A,A=A===o?l:o))}if(p!==x.outputColorSpace||g!==x.toneMapping){p=x.outputColorSpace,g=x.toneMapping,h.defines={},dt.getTransfer(p)===Rt&&(h.defines.SRGB_TRANSFER="");let _=Kv[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(f),x.render(d,u),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var lm=new Mn,Xu=new ls(1,1),cm=new xa,hm=new pl,um=new wa,Vp=[],Wp=[],Xp=new Float32Array(16),qp=new Float32Array(9),Yp=new Float32Array(4);function Hr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Vp[s];if(r===void 0&&(r=new Float32Array(s),Vp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ln(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oc(n,e){let t=Wp[e];t===void 0&&(t=new Int32Array(e),Wp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function eb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),ln(t,e)}}function nb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),ln(t,e)}}function ib(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),ln(t,e)}}function sb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,i))return;Yp.set(i),n.uniformMatrix2fv(this.addr,!1,Yp),ln(t,i)}}function rb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,i))return;qp.set(i),n.uniformMatrix3fv(this.addr,!1,qp),ln(t,i)}}function ab(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,i))return;Xp.set(i),n.uniformMatrix4fv(this.addr,!1,Xp),ln(t,i)}}function ob(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function lb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),ln(t,e)}}function cb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),ln(t,e)}}function hb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),ln(t,e)}}function ub(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function db(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),ln(t,e)}}function fb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),ln(t,e)}}function pb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),ln(t,e)}}function mb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Xu.compareFunction=t.isReversedDepthBuffer()?Ic:Cc,r=Xu):r=lm,t.setTexture2D(e||r,s)}function gb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||hm,s)}function xb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||um,s)}function yb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||cm,s)}function _b(n){switch(n){case 5126:return eb;case 35664:return tb;case 35665:return nb;case 35666:return ib;case 35674:return sb;case 35675:return rb;case 35676:return ab;case 5124:case 35670:return ob;case 35667:case 35671:return lb;case 35668:case 35672:return cb;case 35669:case 35673:return hb;case 5125:return ub;case 36294:return db;case 36295:return fb;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return gb;case 35680:case 36300:case 36308:case 36293:return xb;case 36289:case 36303:case 36311:case 36292:return yb}}function vb(n,e){n.uniform1fv(this.addr,e)}function bb(n,e){let t=Hr(e,this.size,2);n.uniform2fv(this.addr,t)}function Mb(n,e){let t=Hr(e,this.size,3);n.uniform3fv(this.addr,t)}function Sb(n,e){let t=Hr(e,this.size,4);n.uniform4fv(this.addr,t)}function Eb(n,e){let t=Hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Tb(n,e){let t=Hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wb(n,e){let t=Hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ab(n,e){n.uniform1iv(this.addr,e)}function Rb(n,e){n.uniform2iv(this.addr,e)}function Cb(n,e){n.uniform3iv(this.addr,e)}function Ib(n,e){n.uniform4iv(this.addr,e)}function Pb(n,e){n.uniform1uiv(this.addr,e)}function Lb(n,e){n.uniform2uiv(this.addr,e)}function Db(n,e){n.uniform3uiv(this.addr,e)}function Nb(n,e){n.uniform4uiv(this.addr,e)}function Ub(n,e,t){let i=this.cache,s=e.length,r=Oc(t,s);on(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Xu:a=lm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Fb(n,e,t){let i=this.cache,s=e.length,r=Oc(t,s);on(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hm,r[a])}function Ob(n,e,t){let i=this.cache,s=e.length,r=Oc(t,s);on(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||um,r[a])}function Bb(n,e,t){let i=this.cache,s=e.length,r=Oc(t,s);on(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||cm,r[a])}function zb(n){switch(n){case 5126:return vb;case 35664:return bb;case 35665:return Mb;case 35666:return Sb;case 35674:return Eb;case 35675:return Tb;case 35676:return wb;case 5124:case 35670:return Ab;case 35667:case 35671:return Rb;case 35668:case 35672:return Cb;case 35669:case 35673:return Ib;case 5125:return Pb;case 36294:return Lb;case 36295:return Db;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return Bb}}var qu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_b(t.type)}},Yu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zb(t.type)}},Zu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Vu=/(\w+)(\])?(\[|\.)?/g;function Zp(n,e){n.seq.push(e),n.map[e.id]=e}function Hb(n,e,t){let i=n.name,s=i.length;for(Vu.lastIndex=0;;){let r=Vu.exec(i),a=Vu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Zp(t,c===void 0?new qu(o,n,e):new Yu(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Zu(o),Zp(t,d)),t=d}}}var zr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Hb(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Jp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var kb=37297,Gb=0;function Vb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var $p=new nt;function Wb(n){dt._getMatrix($p,dt.workingColorSpace,n);let e=`mat3( ${$p.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case pa:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Vb(n.getShaderSource(e),o)}else return r}function Xb(n,e){let t=Wb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var qb={[fu]:"Linear",[pu]:"Reinhard",[mu]:"Cineon",[gu]:"ACESFilmic",[yu]:"AgX",[_u]:"Neutral",[xu]:"Custom"};function Yb(n,e){let t=qb[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Lc=new L;function Zb(){dt.getLuminanceCoefficients(Lc);let n=Lc.x.toFixed(4),e=Lc.y.toFixed(4),t=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function $b(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function no(n){return n!==""}function Kp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Kb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(n){return n.replace(Kb,e1)}var Qb=new Map;function e1(n,e){let t=at[e];if(t===void 0){let i=Qb.get(e);if(i!==void 0)t=at[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ju(t)}var t1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function em(n){return n.replace(t1,n1)}function n1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var i1={[Wa]:"SHADOWMAP_TYPE_PCF",[Dr]:"SHADOWMAP_TYPE_VSM"};function s1(n){return i1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var r1={[ps]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[Xa]:"ENVMAP_TYPE_CUBE_UV"};function a1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":r1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var o1={[Fs]:"ENVMAP_MODE_REFRACTION"};function l1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":o1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var c1={[Vl]:"ENVMAP_BLENDING_MULTIPLY",[pp]:"ENVMAP_BLENDING_MIX",[mp]:"ENVMAP_BLENDING_ADD"};function h1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":c1[n.combine]||"ENVMAP_BLENDING_NONE"}function u1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function d1(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=s1(t),c=a1(t),h=l1(t),d=h1(t),u=u1(t),p=Jb(t),g=$b(r),S=s.createProgram(),m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(no).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(no).join(`
`),f.length>0&&(f+=`
`)):(m=[tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),f=[tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?at.tonemapping_pars_fragment:"",t.toneMapping!==oi?Yb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Xb("linearToOutputTexel",t.outputColorSpace),Zb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),a=Ju(a),a=Kp(a,t),a=Qp(a,t),o=Ju(o),o=Kp(o,t),o=Qp(o,t),a=em(a),o=em(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=y+m+a,x=y+f+o,b=Jp(s,s.VERTEX_SHADER,v),E=Jp(s,s.FRAGMENT_SHADER,x);s.attachShader(S,b),s.attachShader(S,E),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function A(P){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(S)||"",O=s.getShaderInfoLog(b)||"",C=s.getShaderInfoLog(E)||"",D=N.trim(),z=O.trim(),H=C.trim(),j=!0,G=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,b,E);else{let Y=jp(s,b,"vertex"),K=jp(s,E,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+Y+`
`+K)}else D!==""?We("WebGLProgram: Program Info Log:",D):(z===""||H==="")&&(G=!1);G&&(P.diagnostics={runnable:j,programLog:D,vertexShader:{log:z,prefix:m},fragmentShader:{log:H,prefix:f}})}s.deleteShader(b),s.deleteShader(E),_=new zr(s,S),T=jb(s,S)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(S,kb)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gb++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=E,this}var f1=0,$u=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ju(e),t.set(e,i)),i}},ju=class{constructor(e){this.id=f1++,this.code=e,this.usedTimes=0}};function p1(n){return n===xs||n===ja||n===Ka}function m1(n,e,t,i,s,r){let a=new Sr,o=new $u,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function S(_,T,R,P,N,O){let C=P.fog,D=N.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=e.get(_.envMap||z,H),G=j&&j.mapping===Xa?j.image.height:null,Y=p[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&We("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let K=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,De=K!==void 0?K.length:0,Ie=0;D.morphAttributes.position!==void 0&&(Ie=1),D.morphAttributes.normal!==void 0&&(Ie=2),D.morphAttributes.color!==void 0&&(Ie=3);let St,lt,yt,$;if(Y){let Bt=Ei[Y];St=Bt.vertexShader,lt=Bt.fragmentShader}else{St=_.vertexShader,lt=_.fragmentShader;let Bt=o.getVertexShaderStage(_),wt=o.getFragmentShaderStage(_);o.update(_,Bt,wt),yt=Bt.id,$=wt.id}let te=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),Je=N.isInstancedMesh===!0,Pe=N.isBatchedMesh===!0,$e=!!_.map,Lt=!!_.matcap,ne=!!j,ce=!!_.aoMap,de=!!_.lightMap,fe=!!_.bumpMap&&_.wireframe===!1,ye=!!_.normalMap,qe=!!_.displacementMap,Ve=!!_.emissiveMap,je=!!_.metalnessMap,st=!!_.roughnessMap,U=_.anisotropy>0,Tt=_.clearcoat>0,ct=_.dispersion>0,I=_.retroreflectivity>0,M=_.iridescence>0,k=_.sheen>0,X=_.transmission>0,Z=U&&!!_.anisotropyMap,pe=Tt&&!!_.clearcoatMap,xe=Tt&&!!_.clearcoatNormalMap,J=Tt&&!!_.clearcoatRoughnessMap,ee=M&&!!_.iridescenceMap,_e=M&&!!_.iridescenceThicknessMap,He=k&&!!_.sheenColorMap,Se=k&&!!_.sheenRoughnessMap,ve=!!_.specularMap,ke=!!_.specularColorMap,Ye=!!_.specularIntensityMap,rt=X&&!!_.transmissionMap,B=X&&!!_.thicknessMap,be=!!_.gradientMap,Q=!!_.alphaMap,Me=_.alphaTest>0,Re=!!_.alphaHash,oe=!!_.extensions,Ge=oi;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ge=n.toneMapping);let Oe={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:St,fragmentShader:lt,defines:_.defines,customVertexShaderID:yt,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Pe,batchingColor:Pe&&N._colorsTexture!==null,instancing:Je,instancingColor:Je&&N.instanceColor!==null,instancingMorph:Je&&N.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:$e,matcap:Lt,envMap:ne,envMapMode:ne&&j.mapping,envMapCubeUVHeight:G,aoMap:ce,lightMap:de,bumpMap:fe,normalMap:ye,displacementMap:qe,emissiveMap:Ve,normalMapObjectSpace:ye&&_.normalMapType===yp,normalMapTangentSpace:ye&&_.normalMapType===Qa,packedNormalMap:ye&&_.normalMapType===Qa&&p1(_.normalMap.format),metalnessMap:je,roughnessMap:st,anisotropy:U,anisotropyMap:Z,clearcoat:Tt,clearcoatMap:pe,clearcoatNormalMap:xe,clearcoatRoughnessMap:J,dispersion:ct,retroreflection:I,iridescence:M,iridescenceMap:ee,iridescenceThicknessMap:_e,sheen:k,sheenColorMap:He,sheenRoughnessMap:Se,specularMap:ve,specularColorMap:ke,specularIntensityMap:Ye,transmission:X,transmissionMap:rt,thicknessMap:B,gradientMap:be,opaque:_.transparent===!1&&_.blending===fs&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:Me,alphaHash:Re,combine:_.combine,mapUv:$e&&g(_.map.channel),aoMapUv:ce&&g(_.aoMap.channel),lightMapUv:de&&g(_.lightMap.channel),bumpMapUv:fe&&g(_.bumpMap.channel),normalMapUv:ye&&g(_.normalMap.channel),displacementMapUv:qe&&g(_.displacementMap.channel),emissiveMapUv:Ve&&g(_.emissiveMap.channel),metalnessMapUv:je&&g(_.metalnessMap.channel),roughnessMapUv:st&&g(_.roughnessMap.channel),anisotropyMapUv:Z&&g(_.anisotropyMap.channel),clearcoatMapUv:pe&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(_.sheenRoughnessMap.channel),specularMapUv:ve&&g(_.specularMap.channel),specularColorMapUv:ke&&g(_.specularColorMap.channel),specularIntensityMapUv:Ye&&g(_.specularIntensityMap.channel),transmissionMapUv:rt&&g(_.transmissionMap.channel),thicknessMapUv:B&&g(_.thicknessMap.channel),alphaMapUv:Q&&g(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ye||U),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&($e||Q),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&ye===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Te,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ie,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:$e&&_.map.isVideoTexture===!0&&dt.getTransfer(_.map.colorSpace)===Rt,decodeVideoTextureEmissive:Ve&&_.emissiveMap.isVideoTexture===!0&&dt.getTransfer(_.emissiveMap.colorSpace)===Rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pn,flipSided:_.side===fn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:oe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&_.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(f(T,_),y(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function f(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function y(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let T=p[_.type],R;if(T){let P=Ei[T];R=Fp.clone(P.uniforms)}else R=_.uniforms;return R}function x(_,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new d1(n,T,_,s),c.push(R),h.set(T,R)),R}function b(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function A(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:v,acquireProgram:x,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:A}}function g1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function x1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function nm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function im(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,S,m,f){let y=n[e];return y===void 0?(y={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:f},n[e]=y):(y.id=u.id,y.object=u,y.geometry=p,y.material=g,y.materialVariant=a(u),y.groupOrder=S,y.renderOrder=u.renderOrder,y.z=m,y.group=f),e++,y}function l(u,p,g,S,m,f,y){y.reversedDepth===!0&&(m=-m);let v=o(u,p,g,S,m,f);g.transmission>0?i.push(v):g.transparent===!0?s.push(v):t.push(v)}function c(u,p,g,S,m,f){let y=o(u,p,g,S,m,f);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,p){t.length>1&&t.sort(u||x1),i.length>1&&i.sort(p||nm),s.length>1&&s.sort(p||nm)}function d(){for(let u=e,p=n.length;u<p;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function y1(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new im,n.set(i,[a])):s>=r.length?(a=new im,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function _1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Ce};break;case"SpotLight":t={position:new L,direction:new L,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function v1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var b1=0;function M1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function S1(n){let e=new _1,t=v1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new ft,a=new ft;function o(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let p=0,g=0,S=0,m=0,f=0,y=0,v=0,x=0,b=0,E=0,A=0,_=0,T=0,R=0;c.sort(M1);for(let N=0,O=c.length;N<O;N++){let C=c[N],D=C.color,z=C.intensity,H=C.distance,j=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===xs?j=C.shadow.map.texture:j=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=D.r*z,d+=D.g*z,u+=D.b*z;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],z);R++}else if(C.isSunLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Y=C.shadow,K=t.get(C);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[g]=K,i.sunShadowMap[g]=j;let De=Y.getViewportCount();for(let Ie=0;Ie<De;Ie++)i.sunShadowMatrix[S+Ie]=Y.getMatrix(Ie),i.sunShadowCascade[S+Ie]=Y._cascadeData[Ie];S+=De,g++}i.sun[p]=G,p++}else if(C.isDirectionalLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Y=C.shadow,K=t.get(C);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,i.directionalShadow[m]=K,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=C.shadow.matrix,b++}i.directional[m]=G,m++}else if(C.isSpotLight){let G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(D).multiplyScalar(z),G.distance=H,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[y]=G;let Y=C.shadow;if(C.map&&(i.spotLightMap[_]=C.map,_++,Y.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[y]=Y.matrix,C.castShadow){let K=t.get(C);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,i.spotShadow[y]=K,i.spotShadowMap[y]=j,A++}y++}else if(C.isRectAreaLight){let G=e.get(C);G.color.copy(D).multiplyScalar(z),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[v]=G,v++}else if(C.isPointLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let Y=C.shadow,K=t.get(C);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,K.shadowCameraNear=Y.camera.near,K.shadowCameraFar=Y.camera.far,i.pointShadow[f]=K,i.pointShadowMap[f]=j,i.pointShadowMatrix[f]=C.shadow.matrix,E++}i.point[f]=G,f++}else if(C.isHemisphereLight){let G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(z),G.groundColor.copy(C.groundColor).multiplyScalar(z),i.hemi[x]=G,x++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let P=i.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==f||P.spotLength!==y||P.rectAreaLength!==v||P.hemiLength!==x||P.numSunShadows!==g||P.numDirectionalShadows!==b||P.numPointShadows!==E||P.numSpotShadows!==A||P.numSpotMaps!==_||P.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=m,i.spot.length=y,i.rectArea.length=v,i.point.length=f,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,P.sunLength=p,P.directionalLength=m,P.pointLength=f,P.spotLength=y,P.rectAreaLength=v,P.hemiLength=x,P.numSunShadows=g,P.numDirectionalShadows=b,P.numPointShadows=E,P.numSpotShadows=A,P.numSpotMaps=_,P.numLightProbes=R,i.version=b1++)}function l(c,h){let d=0,u=0,p=0,g=0,S=0,m=0,f=h.matrixWorldInverse;for(let y=0,v=c.length;y<v;y++){let x=c[y];if(x.isSunLight){let b=i.sun[d];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(f),d++}else if(x.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),u++}else if(x.isSpotLight){let b=i.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),g++}else if(x.isRectAreaLight){let b=i.rectArea[S];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(x.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(x.isPointLight){let b=i.point[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function sm(n){let e=new S1(n),t=[],i=[],s=[];function r(u){d.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function E1(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new sm(n),e.set(s,[o])):r>=a.length?(o=new sm(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var T1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w1=`uniform sampler2D shadow_pass;
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
}`,A1=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],R1=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],rm=new ft,to=new L,Wu=new L;function C1(n,e,t){let i=new wr,s=new le,r=new le,a=new Ht,o=new Al,l=new Rl,c={},h=t.maxTextureSize,d={[ds]:fn,[fn]:ds,[pn]:pn},u=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:T1,fragmentShader:w1}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new bt;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ie(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa;let f=this.type;this.render=function(E,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Gl&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wa);let T=n.getRenderTarget(),R=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Mi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=f!==this.type;O&&A.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(D=>D.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,D=E.length;C<D;C++){let z=E[C],H=z.shadow;if(H===void 0){We("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let j=H.getFrameExtents();s.multiply(j),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,H.mapSize.y=r.y));let G=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=G,H.map===null||O===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Dr){if(z.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Rn(s.x,s.y,{format:xs,type:ci,minFilter:dn,magFilter:dn,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new ls(s.x,s.y,Yn),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=xi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en}else z.isPointLight?(H.map=new Nc(s.x),H.map.depthTexture=new _l(s.x,li)):(H.map=new Rn(s.x,s.y),H.map.depthTexture=new ls(s.x,s.y,li)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=xi,this.type===Wa?(H.map.depthTexture.compareFunction=G?Ic:Cc,H.map.depthTexture.minFilter=dn,H.map.depthTexture.magFilter=dn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let Y=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();z.isPointLight!==!0&&H.updateMatrices(z,_);for(let K=0;K<Y;K++){let De=H.getCamera(K);if(z.isPointLight){let Ie=H.camera,St=H.matrix,lt=z.distance||Ie.far;lt!==Ie.far&&(Ie.far=lt,Ie.updateProjectionMatrix()),to.setFromMatrixPosition(z.matrixWorld),Ie.position.copy(to),Wu.copy(Ie.position),Wu.add(A1[K]),Ie.up.copy(R1[K]),Ie.lookAt(Wu),Ie.updateMatrixWorld(),St.makeTranslation(-to.x,-to.y,-to.z),rm.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse),H._frustum.setFromProjectionMatrix(rm,Ie.coordinateSystem,Ie.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,K),n.clear();else{K===0&&(n.setRenderTarget(H.map),n.clear());let Ie=H.getViewport(K);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),N.viewport(a)}i=H.getFrustum(K),x(A,_,De,z,this.type)}H.isPointLightShadow!==!0&&this.type===Dr&&y(H,_),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(T,R,P)};function y(E,A){let _=e.update(S);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new Rn(s.x,s.y,{format:xs,type:ci}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,_,u,S,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,_,p,S,null)}function v(E,A,_,T){let R=null,P=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)R=P;else if(R=_.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=R.uuid,O=A.uuid,C=c[N];C===void 0&&(C={},c[N]=C);let D=C[O];D===void 0&&(D=R.clone(),C[O]=D,A.addEventListener("dispose",b)),R=D}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Dr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=n.properties.get(R);N.light=_}return R}function x(E,A,_,T,R){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Dr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let O=e.update(E),C=E.material;if(Array.isArray(C)){let D=O.groups;for(let z=0,H=D.length;z<H;z++){let j=D[z],G=C[j.materialIndex];if(G&&G.visible){let Y=v(E,G,T,R);E.onBeforeShadow(n,E,A,_,O,Y,j),n.renderBufferDirect(_,null,O,Y,E,j),E.onAfterShadow(n,E,A,_,O,Y,j)}}}else if(C.visible){let D=v(E,C,T,R);E.onBeforeShadow(n,E,A,_,O,D,null),n.renderBufferDirect(_,null,O,D,E,null),E.onAfterShadow(n,E,A,_,O,D,null)}}let N=E.children;for(let O=0,C=N.length;O<C;O++)x(N[O],A,_,T,R)}function b(E){E.target.removeEventListener("dispose",b);for(let _ in c){let T=c[_],R=E.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function I1(n,e){function t(){let B=!1,be=new Ht,Q=null,Me=new Ht(0,0,0,0);return{setMask:function(Re){Q!==Re&&!B&&(n.colorMask(Re,Re,Re,Re),Q=Re)},setLocked:function(Re){B=Re},setClear:function(Re,oe,Ge,Oe,Bt){Bt===!0&&(Re*=Oe,oe*=Oe,Ge*=Oe),be.set(Re,oe,Ge,Oe),Me.equals(be)===!1&&(n.clearColor(Re,oe,Ge,Oe),Me.copy(be))},reset:function(){B=!1,Q=null,Me.set(-1,0,0,0)}}}function i(){let B=!1,be=!1,Q=null,Me=null,Re=null;return{setReversed:function(oe){if(be!==oe){let Ge=e.get("EXT_clip_control");oe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),be=oe;let Oe=Re;Re=null,this.setClear(Oe)}},getReversed:function(){return be},setTest:function(oe){oe?te(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(oe){Q!==oe&&!B&&(n.depthMask(oe),Q=oe)},setFunc:function(oe){if(be&&(oe=Cp[oe]),Me!==oe){switch(oe){case nl:n.depthFunc(n.NEVER);break;case il:n.depthFunc(n.ALWAYS);break;case sl:n.depthFunc(n.LESS);break;case _r:n.depthFunc(n.LEQUAL);break;case rl:n.depthFunc(n.EQUAL);break;case al:n.depthFunc(n.GEQUAL);break;case ol:n.depthFunc(n.GREATER);break;case ll:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=oe}},setLocked:function(oe){B=oe},setClear:function(oe){Re!==oe&&(Re=oe,be&&(oe=1-oe),n.clearDepth(oe))},reset:function(){B=!1,Q=null,Me=null,Re=null,be=!1}}}function s(){let B=!1,be=null,Q=null,Me=null,Re=null,oe=null,Ge=null,Oe=null,Bt=null;return{setTest:function(wt){B||(wt?te(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(wt){be!==wt&&!B&&(n.stencilMask(wt),be=wt)},setFunc:function(wt,Kn,ui){(Q!==wt||Me!==Kn||Re!==ui)&&(n.stencilFunc(wt,Kn,ui),Q=wt,Me=Kn,Re=ui)},setOp:function(wt,Kn,ui){(oe!==wt||Ge!==Kn||Oe!==ui)&&(n.stencilOp(wt,Kn,ui),oe=wt,Ge=Kn,Oe=ui)},setLocked:function(wt){B=wt},setClear:function(wt){Bt!==wt&&(n.clearStencil(wt),Bt=wt)},reset:function(){B=!1,be=null,Q=null,Me=null,Re=null,oe=null,Ge=null,Oe=null,Bt=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],S=null,m=!1,f=null,y=null,v=null,x=null,b=null,E=null,A=null,_=new Ce(0,0,0),T=0,R=!1,P=null,N=null,O=null,C=null,D=null,z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=j>=2);let Y=null,K={},De=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),St=new Ht().fromArray(De),lt=new Ht().fromArray(Ie);function yt(B,be,Q,Me){let Re=new Uint8Array(4),oe=n.createTexture();n.bindTexture(B,oe),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<Q;Ge++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(be+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return oe}let $={};$[n.TEXTURE_2D]=yt(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(_r),fe(!1),ye(lu),te(n.CULL_FACE),ce(Mi);function te(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function Te(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function Je(B,be){return u[B]!==be?(n.bindFramebuffer(B,be),u[B]=be,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=be),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=be),!0):!1}function Pe(B,be){let Q=g,Me=!1;if(B){Q=p.get(be),Q===void 0&&(Q=[],p.set(be,Q));let Re=B.textures;if(Q.length!==Re.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ge=Re.length;oe<Ge;oe++)Q[oe]=n.COLOR_ATTACHMENT0+oe;Q.length=Re.length,Me=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,Me=!0);Me&&n.drawBuffers(Q)}function $e(B){return S!==B?(n.useProgram(B),S=B,!0):!1}let Lt={[Us]:n.FUNC_ADD,[jf]:n.FUNC_SUBTRACT,[Kf]:n.FUNC_REVERSE_SUBTRACT};Lt[Qf]=n.MIN,Lt[ep]=n.MAX;let ne={[tp]:n.ZERO,[np]:n.ONE,[ip]:n.SRC_COLOR,[uu]:n.SRC_ALPHA,[cp]:n.SRC_ALPHA_SATURATE,[op]:n.DST_COLOR,[rp]:n.DST_ALPHA,[sp]:n.ONE_MINUS_SRC_COLOR,[du]:n.ONE_MINUS_SRC_ALPHA,[lp]:n.ONE_MINUS_DST_COLOR,[ap]:n.ONE_MINUS_DST_ALPHA,[hp]:n.CONSTANT_COLOR,[up]:n.ONE_MINUS_CONSTANT_COLOR,[dp]:n.CONSTANT_ALPHA,[fp]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(B,be,Q,Me,Re,oe,Ge,Oe,Bt,wt){if(B===Mi){m===!0&&(Te(n.BLEND),m=!1);return}if(m===!1&&(te(n.BLEND),m=!0),B!==$f){if(B!==f||wt!==R){if((y!==Us||b!==Us)&&(n.blendEquation(n.FUNC_ADD),y=Us,b=Us),wt)switch(B){case fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vi:n.blendFunc(n.ONE,n.ONE);break;case cu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ze("WebGLState: Invalid blending: ",B);break}else switch(B){case fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case cu:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hu:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",B);break}v=null,x=null,E=null,A=null,_.set(0,0,0),T=0,f=B,R=wt}return}Re=Re||be,oe=oe||Q,Ge=Ge||Me,(be!==y||Re!==b)&&(n.blendEquationSeparate(Lt[be],Lt[Re]),y=be,b=Re),(Q!==v||Me!==x||oe!==E||Ge!==A)&&(n.blendFuncSeparate(ne[Q],ne[Me],ne[oe],ne[Ge]),v=Q,x=Me,E=oe,A=Ge),(Oe.equals(_)===!1||Bt!==T)&&(n.blendColor(Oe.r,Oe.g,Oe.b,Bt),_.copy(Oe),T=Bt),f=B,R=!1}function de(B,be){B.side===pn?Te(n.CULL_FACE):te(n.CULL_FACE);let Q=B.side===fn;be&&(Q=!Q),fe(Q),B.blending===fs&&B.transparent===!1?ce(Mi):ce(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let Me=B.stencilWrite;o.setTest(Me),Me&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ve(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function fe(B){P!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),P=B)}function ye(B){B!==Zf?(te(n.CULL_FACE),B!==N&&(B===lu?n.cullFace(n.BACK):B===Jf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),N=B}function qe(B){B!==O&&(H&&n.lineWidth(B),O=B)}function Ve(B,be,Q){B?(te(n.POLYGON_OFFSET_FILL),(C!==be||D!==Q)&&(C=be,D=Q,a.getReversed()&&(be=-be),n.polygonOffset(be,Q))):Te(n.POLYGON_OFFSET_FILL)}function je(B){B?te(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function st(B){B===void 0&&(B=n.TEXTURE0+z-1),Y!==B&&(n.activeTexture(B),Y=B)}function U(B,be,Q){Q===void 0&&(Y===null?Q=n.TEXTURE0+z-1:Q=Y);let Me=K[Q];Me===void 0&&(Me={type:void 0,texture:void 0},K[Q]=Me),(Me.type!==B||Me.texture!==be)&&(Y!==Q&&(n.activeTexture(Q),Y=Q),n.bindTexture(B,be||$[B]),Me.type=B,Me.texture=be)}function Tt(){let B=K[Y];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ct(){try{n.compressedTexImage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}function M(){try{n.texSubImage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}function k(){try{n.texSubImage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}function pe(){try{n.texStorage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}function xe(){try{n.texStorage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}function J(){try{n.texImage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}function ee(){try{n.texImage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}function _e(B){return d[B]!==void 0?d[B]:n.getParameter(B)}function He(B,be){d[B]!==be&&(n.pixelStorei(B,be),d[B]=be)}function Se(B){St.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),St.copy(B))}function ve(B){lt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),lt.copy(B))}function ke(B,be){let Q=c.get(be);Q===void 0&&(Q=new WeakMap,c.set(be,Q));let Me=Q.get(B);Me===void 0&&(Me=n.getUniformBlockIndex(be,B.name),Q.set(B,Me))}function Ye(B,be){let Me=c.get(be).get(B);l.get(be)!==Me&&(n.uniformBlockBinding(be,Me,B.__bindingPointIndex),l.set(be,Me))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},Y=null,K={},u={},p=new WeakMap,g=[],S=null,m=!1,f=null,y=null,v=null,x=null,b=null,E=null,A=null,_=new Ce(0,0,0),T=0,R=!1,P=null,N=null,O=null,C=null,D=null,St.set(0,0,n.canvas.width,n.canvas.height),lt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:Te,bindFramebuffer:Je,drawBuffers:Pe,useProgram:$e,setBlending:ce,setMaterial:de,setFlipSided:fe,setCullFace:ye,setLineWidth:qe,setPolygonOffset:Ve,setScissorTest:je,activeTexture:st,bindTexture:U,unbindTexture:Tt,compressedTexImage2D:ct,compressedTexImage3D:I,texImage2D:J,texImage3D:ee,pixelStorei:He,getParameter:_e,updateUBOMapping:ke,uniformBlockBinding:Ye,texStorage2D:pe,texStorage3D:xe,texSubImage2D:M,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:Se,viewport:ve,reset:rt}}function P1(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(I,M){return g?new OffscreenCanvas(I,M):ma("canvas")}function m(I,M,k){let X=1,Z=ct(I);if((Z.width>k||Z.height>k)&&(X=k/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let pe=Math.floor(X*Z.width),xe=Math.floor(X*Z.height);u===void 0&&(u=S(pe,xe));let J=M?S(pe,xe):u;return J.width=pe,J.height=xe,J.getContext("2d").drawImage(I,0,0,pe,xe),We("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+pe+"x"+xe+")."),J}else return"data"in I&&We("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),I;return I}function f(I){return I.generateMipmaps}function y(I){n.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(I,M,k,X,Z,pe=!1){if(I!==null){if(n[I]!==void 0)return n[I];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let xe;X&&(xe=e.get("EXT_texture_norm16"),xe||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=M;if(M===n.RED&&(k===n.FLOAT&&(J=n.R32F),k===n.HALF_FLOAT&&(J=n.R16F),k===n.UNSIGNED_BYTE&&(J=n.R8),k===n.UNSIGNED_SHORT&&xe&&(J=xe.R16_EXT),k===n.SHORT&&xe&&(J=xe.R16_SNORM_EXT)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.R8UI),k===n.UNSIGNED_SHORT&&(J=n.R16UI),k===n.UNSIGNED_INT&&(J=n.R32UI),k===n.BYTE&&(J=n.R8I),k===n.SHORT&&(J=n.R16I),k===n.INT&&(J=n.R32I)),M===n.RG&&(k===n.FLOAT&&(J=n.RG32F),k===n.HALF_FLOAT&&(J=n.RG16F),k===n.UNSIGNED_BYTE&&(J=n.RG8),k===n.UNSIGNED_SHORT&&xe&&(J=xe.RG16_EXT),k===n.SHORT&&xe&&(J=xe.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RG8UI),k===n.UNSIGNED_SHORT&&(J=n.RG16UI),k===n.UNSIGNED_INT&&(J=n.RG32UI),k===n.BYTE&&(J=n.RG8I),k===n.SHORT&&(J=n.RG16I),k===n.INT&&(J=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGB8UI),k===n.UNSIGNED_SHORT&&(J=n.RGB16UI),k===n.UNSIGNED_INT&&(J=n.RGB32UI),k===n.BYTE&&(J=n.RGB8I),k===n.SHORT&&(J=n.RGB16I),k===n.INT&&(J=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),k===n.UNSIGNED_INT&&(J=n.RGBA32UI),k===n.BYTE&&(J=n.RGBA8I),k===n.SHORT&&(J=n.RGBA16I),k===n.INT&&(J=n.RGBA32I)),M===n.RGB&&(k===n.UNSIGNED_SHORT&&xe&&(J=xe.RGB16_EXT),k===n.SHORT&&xe&&(J=xe.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),M===n.RGBA){let ee=pe?pa:dt.getTransfer(Z);k===n.FLOAT&&(J=n.RGBA32F),k===n.HALF_FLOAT&&(J=n.RGBA16F),k===n.UNSIGNED_BYTE&&(J=ee===Rt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&xe&&(J=xe.RGBA16_EXT),k===n.SHORT&&xe&&(J=xe.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function b(I,M){let k;return I?M===null||M===li||M===Ur?k=n.DEPTH24_STENCIL8:M===Yn?k=n.DEPTH32F_STENCIL8:M===Nr&&(k=n.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===li||M===Ur?k=n.DEPTH_COMPONENT24:M===Yn?k=n.DEPTH_COMPONENT32F:M===Nr&&(k=n.DEPTH_COMPONENT16),k}function E(I,M){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==en&&I.minFilter!==dn?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function A(I){let M=I.target;M.removeEventListener("dispose",A),T(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function _(I){let M=I.target;M.removeEventListener("dispose",_),P(M)}function T(I){let M=i.get(I);if(M.__webglInit===void 0)return;let k=I.source,X=p.get(k);if(X){let Z=X[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(I),Object.keys(X).length===0&&p.delete(k)}i.remove(I)}function R(I){let M=i.get(I);n.deleteTexture(M.__webglTexture);let k=I.source,X=p.get(k);delete X[M.__cacheKey],a.memory.textures--}function P(I){let M=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let Z=0;Z<M.__webglFramebuffer[X].length;Z++)n.deleteFramebuffer(M.__webglFramebuffer[X][Z]);else n.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)n.deleteFramebuffer(M.__webglFramebuffer[X]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=I.textures;for(let X=0,Z=k.length;X<Z;X++){let pe=i.get(k[X]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(k[X])}i.remove(I)}let N=0;function O(){N=0}function C(){return N}function D(I){N=I}function z(){let I=N;return I>=s.maxTextures&&We("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,I}function H(I){let M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function j(I,M){let k=i.get(I);if(I.isVideoTexture&&U(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&k.__version!==I.version){let X=I.image;if(X===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(k,I,M);return}}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function G(I,M){let k=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){Te(k,I,M);return}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function Y(I,M){let k=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){Te(k,I,M);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function K(I,M){let k=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&k.__version!==I.version){Je(k,I,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}let De={[os]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},Ie={[en]:n.NEAREST,[gp]:n.NEAREST_MIPMAP_NEAREST,[qa]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[ql]:n.LINEAR_MIPMAP_NEAREST,[ms]:n.LINEAR_MIPMAP_LINEAR},St={[vp]:n.NEVER,[Tp]:n.ALWAYS,[bp]:n.LESS,[Cc]:n.LEQUAL,[Mp]:n.EQUAL,[Ic]:n.GEQUAL,[Sp]:n.GREATER,[Ep]:n.NOTEQUAL};function lt(I,M){if(M.type===Yn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===dn||M.magFilter===ql||M.magFilter===qa||M.magFilter===ms||M.minFilter===dn||M.minFilter===ql||M.minFilter===qa||M.minFilter===ms)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,De[M.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,De[M.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,De[M.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Ie[M.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Ie[M.minFilter]),M.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,St[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===en||M.minFilter!==qa&&M.minFilter!==ms||M.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function yt(I,M){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",A));let X=M.source,Z=p.get(X);Z===void 0&&(Z={},p.set(X,Z));let pe=H(M);if(pe!==I.__cacheKey){Z[pe]===void 0&&(Z[pe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[pe].usedTimes++;let xe=Z[I.__cacheKey];xe!==void 0&&(Z[I.__cacheKey].usedTimes--,xe.usedTimes===0&&R(M)),I.__cacheKey=pe,I.__webglTexture=Z[pe].texture}return k}function $(I,M,k){return Math.floor(Math.floor(I/k)/M)}function te(I,M,k,X){let pe=I.updateRanges;if(pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,k,X,M.data);else{pe.sort((He,Se)=>He.start-Se.start);let xe=0;for(let He=1;He<pe.length;He++){let Se=pe[xe],ve=pe[He],ke=Se.start+Se.count,Ye=$(ve.start,M.width,4),rt=$(Se.start,M.width,4);ve.start<=ke+1&&Ye===rt&&$(ve.start+ve.count-1,M.width,4)===Ye?Se.count=Math.max(Se.count,ve.start+ve.count-Se.start):(++xe,pe[xe]=ve)}pe.length=xe+1;let J=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),_e=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let He=0,Se=pe.length;He<Se;He++){let ve=pe[He],ke=Math.floor(ve.start/4),Ye=Math.ceil(ve.count/4),rt=ke%M.width,B=Math.floor(ke/M.width),be=Ye,Q=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,rt,B,be,Q,k,X,M.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function Te(I,M,k){let X=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=n.TEXTURE_3D);let Z=yt(I,M),pe=M.source;t.bindTexture(X,I.__webglTexture,n.TEXTURE0+k);let xe=i.get(pe);if(pe.version!==xe.__version||Z===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap!="undefined"&&M.image instanceof ImageBitmap)===!1){let Q=dt.getPrimaries(dt.workingColorSpace),Me=M.colorSpace===Wi?null:dt.getPrimaries(M.colorSpace),Re=M.colorSpace===Wi||Q===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let ee=m(M.image,!1,s.maxTextureSize);ee=Tt(M,ee);let _e=r.convert(M.format,M.colorSpace),He=r.convert(M.type),Se=x(M.internalFormat,_e,He,M.normalized,M.colorSpace,M.isVideoTexture);lt(X,M);let ve,ke=M.mipmaps,Ye=M.isVideoTexture!==!0,rt=xe.__version===void 0||Z===!0,B=pe.dataReady,be=E(M,ee);if(M.isDepthTexture)Se=b(M.format===gs,M.type),rt&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,Se,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Se,ee.width,ee.height,0,_e,He,null));else if(M.isDataTexture)if(ke.length>0){Ye&&rt&&t.texStorage2D(n.TEXTURE_2D,be,Se,ke[0].width,ke[0].height);for(let Q=0,Me=ke.length;Q<Me;Q++)ve=ke[Q],Ye?B&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ve.width,ve.height,_e,He,ve.data):t.texImage2D(n.TEXTURE_2D,Q,Se,ve.width,ve.height,0,_e,He,ve.data);M.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(n.TEXTURE_2D,be,Se,ee.width,ee.height),B&&te(M,ee,_e,He)):t.texImage2D(n.TEXTURE_2D,0,Se,ee.width,ee.height,0,_e,He,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ye&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Se,ke[0].width,ke[0].height,ee.depth);for(let Q=0,Me=ke.length;Q<Me;Q++)if(ve=ke[Q],M.format!==Zn)if(_e!==null)if(Ye){if(B)if(M.layerUpdates.size>0){let Re=Du(ve.width,ve.height,M.format,M.type);for(let oe of M.layerUpdates){let Ge=ve.data.subarray(oe*Re/ve.data.BYTES_PER_ELEMENT,(oe+1)*Re/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,oe,ve.width,ve.height,1,_e,Ge)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ve.width,ve.height,ee.depth,_e,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Se,ve.width,ve.height,ee.depth,0,ve.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ve.width,ve.height,ee.depth,_e,He,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Se,ve.width,ve.height,ee.depth,0,_e,He,ve.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ye&&rt&&t.texStorage2D(n.TEXTURE_2D,be,Se,ke[0].width,ke[0].height);for(let Q=0,Me=ke.length;Q<Me;Q++)ve=ke[Q],M.format!==Zn?_e!==null?Ye?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ve.width,ve.height,_e,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Se,ve.width,ve.height,0,ve.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?B&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ve.width,ve.height,_e,He,ve.data):t.texImage2D(n.TEXTURE_2D,Q,Se,ve.width,ve.height,0,_e,He,ve.data)}else if(M.isDataArrayTexture)if(Ye){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Se,ee.width,ee.height,ee.depth),B)if(M.layerUpdates.size>0){let Q=Du(ee.width,ee.height,M.format,M.type);for(let Me of M.layerUpdates){let Re=ee.data.subarray(Me*Q/ee.data.BYTES_PER_ELEMENT,(Me+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Me,ee.width,ee.height,1,_e,He,Re)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,_e,He,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,ee.width,ee.height,ee.depth,0,_e,He,ee.data);else if(M.isData3DTexture)Ye?(rt&&t.texStorage3D(n.TEXTURE_3D,be,Se,ee.width,ee.height,ee.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,_e,He,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Se,ee.width,ee.height,ee.depth,0,_e,He,ee.data);else if(M.isFramebufferTexture){if(rt)if(Ye)t.texStorage2D(n.TEXTURE_2D,be,Se,ee.width,ee.height);else{let Q=ee.width,Me=ee.height;for(let Re=0;Re<be;Re++)t.texImage2D(n.TEXTURE_2D,Re,Se,Q,Me,0,_e,He,null),Q>>=1,Me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let Q=n.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),d.add(M),Q.onpaint=Me=>{let Re=Me.changedElements;for(let oe of d)Re.includes(oe.image)&&(oe.needsUpdate=!0)},Q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ee);else{let Re=n.RGBA,oe=n.RGBA,Ge=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Re,oe,Ge,ee)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Ye&&rt){let Q=ct(ke[0]);t.texStorage2D(n.TEXTURE_2D,be,Se,Q.width,Q.height)}for(let Q=0,Me=ke.length;Q<Me;Q++)ve=ke[Q],Ye?B&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,_e,He,ve):t.texImage2D(n.TEXTURE_2D,Q,Se,_e,He,ve);M.generateMipmaps=!1}else if(Ye){if(rt){let Q=ct(ee);t.texStorage2D(n.TEXTURE_2D,be,Se,Q.width,Q.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,He,ee)}else t.texImage2D(n.TEXTURE_2D,0,Se,_e,He,ee);f(M)&&y(X),xe.__version=pe.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Je(I,M,k){if(M.image.length!==6)return;let X=yt(I,M),Z=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+k);let pe=i.get(Z);if(Z.version!==pe.__version||X===!0){t.activeTexture(n.TEXTURE0+k);let xe=dt.getPrimaries(dt.workingColorSpace),J=M.colorSpace===Wi?null:dt.getPrimaries(M.colorSpace),ee=M.colorSpace===Wi||xe===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let _e=M.isCompressedTexture||M.image[0].isCompressedTexture,He=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let oe=0;oe<6;oe++)!_e&&!He?Se[oe]=m(M.image[oe],!0,s.maxCubemapSize):Se[oe]=He?M.image[oe].image:M.image[oe],Se[oe]=Tt(M,Se[oe]);let ve=Se[0],ke=r.convert(M.format,M.colorSpace),Ye=r.convert(M.type),rt=x(M.internalFormat,ke,Ye,M.normalized,M.colorSpace),B=M.isVideoTexture!==!0,be=pe.__version===void 0||X===!0,Q=Z.dataReady,Me=E(M,ve);lt(n.TEXTURE_CUBE_MAP,M);let Re;if(_e){B&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,rt,ve.width,ve.height);for(let oe=0;oe<6;oe++){Re=Se[oe].mipmaps;for(let Ge=0;Ge<Re.length;Ge++){let Oe=Re[Ge];M.format!==Zn?ke!==null?B?Q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge,0,0,Oe.width,Oe.height,ke,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge,rt,Oe.width,Oe.height,0,Oe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge,0,0,Oe.width,Oe.height,ke,Ye,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge,rt,Oe.width,Oe.height,0,ke,Ye,Oe.data)}}}else{if(Re=M.mipmaps,B&&be){Re.length>0&&Me++;let oe=ct(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,rt,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(He){B?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Se[oe].width,Se[oe].height,ke,Ye,Se[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,rt,Se[oe].width,Se[oe].height,0,ke,Ye,Se[oe].data);for(let Ge=0;Ge<Re.length;Ge++){let Bt=Re[Ge].image[oe].image;B?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge+1,0,0,Bt.width,Bt.height,ke,Ye,Bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge+1,rt,Bt.width,Bt.height,0,ke,Ye,Bt.data)}}else{B?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ke,Ye,Se[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,rt,ke,Ye,Se[oe]);for(let Ge=0;Ge<Re.length;Ge++){let Oe=Re[Ge];B?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge+1,0,0,ke,Ye,Oe.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge+1,rt,ke,Ye,Oe.image[oe])}}}f(M)&&y(n.TEXTURE_CUBE_MAP),pe.__version=Z.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Pe(I,M,k,X,Z,pe){let xe=r.convert(k.format,k.colorSpace),J=r.convert(k.type),ee=x(k.internalFormat,xe,J,k.normalized,k.colorSpace),_e=i.get(M),He=i.get(k);if(He.__renderTarget=M,!_e.__hasExternalTextures){let Se=Math.max(1,M.width>>pe),ve=Math.max(1,M.height>>pe);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,pe,ee,Se,ve,M.depth,0,xe,J,null):t.texImage2D(Z,pe,ee,Se,ve,0,xe,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),st(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Z,He.__webglTexture,0,je(M)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Z,He.__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(I,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,I),M.depthBuffer){let X=M.depthTexture,Z=X&&X.isDepthTexture?X.type:null,pe=b(M.stencilBuffer,Z),xe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;st(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je(M),pe,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,je(M),pe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,pe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,I)}else{let X=M.textures;for(let Z=0;Z<X.length;Z++){let pe=X[Z],xe=r.convert(pe.format,pe.colorSpace),J=r.convert(pe.type),ee=x(pe.internalFormat,xe,J,pe.normalized,pe.colorSpace);st(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je(M),ee,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,je(M),ee,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ee,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(I,M,k){let X=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),lt(n.TEXTURE_CUBE_MAP,M.depthTexture);let _e=r.convert(M.depthTexture.format),He=r.convert(M.depthTexture.type),Se;M.depthTexture.format===xi?Se=n.DEPTH_COMPONENT24:M.depthTexture.format===gs&&(Se=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Se,M.width,M.height,0,_e,He,null)}}else j(M.depthTexture,0);let pe=Z.__webglTexture,xe=je(M),J=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,ee=M.depthTexture.format===gs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===xi)st(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,pe,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,pe,0);else if(M.depthTexture.format===gs)st(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,pe,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(I){let M=i.get(I),k=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){let X=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){let Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=X}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)Lt(M.__webglFramebuffer[X],I,X);else{let X=I.texture.mipmaps;X&&X.length>0?Lt(M.__webglFramebuffer[0],I,0):Lt(M.__webglFramebuffer,I,0)}else if(k){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=n.createRenderbuffer(),$e(M.__webglDepthbuffer[X],I,!1);else{let Z=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=M.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,pe)}}else{let X=I.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),$e(M.__webglDepthbuffer,I,!1);else{let Z=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,pe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(I,M,k){let X=i.get(I);M!==void 0&&Pe(X.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&ne(I)}function de(I){let M=I.texture,k=i.get(I),X=i.get(M);I.addEventListener("dispose",_);let Z=I.textures,pe=I.isWebGLCubeRenderTarget===!0,xe=Z.length>1;if(xe||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=M.version,a.memory.textures++),pe){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let ee=0;ee<M.mipmaps.length;ee++)k.__webglFramebuffer[J][ee]=n.createFramebuffer()}else k.__webglFramebuffer[J]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)k.__webglFramebuffer[J]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(xe)for(let J=0,ee=Z.length;J<ee;J++){let _e=i.get(Z[J]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&st(I)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let ee=Z[J];k.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[J]);let _e=r.convert(ee.format,ee.colorSpace),He=r.convert(ee.type),Se=x(ee.internalFormat,_e,He,ee.normalized,ee.colorSpace,I.isXRRenderTarget===!0),ve=je(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,Se,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,k.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),$e(k.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),lt(n.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)Pe(k.__webglFramebuffer[J][ee],I,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else Pe(k.__webglFramebuffer[J],I,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(M)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let J=0,ee=Z.length;J<ee;J++){let _e=Z[J],He=i.get(_e),Se=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Se=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,He.__webglTexture),lt(Se,_e),Pe(k.__webglFramebuffer,I,_e,n.COLOR_ATTACHMENT0+J,Se,0),f(_e)&&y(Se)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(J=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),lt(J,M),M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)Pe(k.__webglFramebuffer[ee],I,M,n.COLOR_ATTACHMENT0,J,ee);else Pe(k.__webglFramebuffer,I,M,n.COLOR_ATTACHMENT0,J,0);f(M)&&y(J),t.unbindTexture()}I.depthBuffer&&ne(I)}function fe(I){let M=I.textures;for(let k=0,X=M.length;k<X;k++){let Z=M[k];if(f(Z)){let pe=v(I),xe=i.get(Z).__webglTexture;t.bindTexture(pe,xe),y(pe),t.unbindTexture()}}}let ye=[],qe=[];function Ve(I){if(I.samples>0){if(st(I)===!1){let M=I.textures,k=I.width,X=I.height,Z=n.COLOR_BUFFER_BIT,pe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(I),J=M.length>1;if(J)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let ee=I.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[_e]);let He=i.get(M[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,k,X,0,0,k,X,Z,n.NEAREST),l===!0&&(ye.length=0,qe.length=0,ye.push(n.COLOR_ATTACHMENT0+_e),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ye.push(pe),qe.push(pe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,qe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,xe.__webglColorRenderbuffer[_e]);let He=i.get(M[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let M=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function je(I){return Math.min(s.maxSamples,I.samples)}function st(I){let M=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function U(I){let M=a.render.frame;h.get(I)!==M&&(h.set(I,M),I.update())}function Tt(I,M){let k=I.colorSpace,X=I.format,Z=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==fa&&k!==Wi&&(dt.getTransfer(k)===Rt?(X!==Zn||Z!==Ln)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",k)),M}function ct(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.getTextureUnits=C,this.setTextureUnits=D,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=K,this.rebindTextures=ce,this.setupRenderTarget=de,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=st,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function L1(n,e){function t(i,s=Wi){let r,a=dt.getTransfer(s);if(i===Ln)return n.UNSIGNED_BYTE;if(i===Zl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Su)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Eu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===bu)return n.BYTE;if(i===Mu)return n.SHORT;if(i===Nr)return n.UNSIGNED_SHORT;if(i===Yl)return n.INT;if(i===li)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===ci)return n.HALF_FLOAT;if(i===Tu)return n.ALPHA;if(i===wu)return n.RGB;if(i===Zn)return n.RGBA;if(i===xi)return n.DEPTH_COMPONENT;if(i===gs)return n.DEPTH_STENCIL;if(i===Fr)return n.RED;if(i===$l)return n.RED_INTEGER;if(i===xs)return n.RG;if(i===jl)return n.RG_INTEGER;if(i===Kl)return n.RGBA_INTEGER;if(i===Ya||i===Za||i===Ja||i===$a)if(a===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ql||i===ec||i===tc||i===nc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ic||i===sc||i===rc||i===ac||i===oc||i===ja||i===lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ic||i===sc)return a===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ac)return r.COMPRESSED_R11_EAC;if(i===oc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ja)return r.COMPRESSED_RG11_EAC;if(i===lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cc||i===hc||i===uc||i===dc||i===fc||i===pc||i===mc||i===gc||i===xc||i===yc||i===_c||i===vc||i===bc||i===Mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_c)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mc)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sc||i===Ec||i===Tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Sc)return a===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wc||i===Ac||i===Ka||i===Rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===wc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var D1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N1=`
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

}`,Ku=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Sn({vertexShader:D1,fragmentShader:N1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ie(new ri(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qu=class extends yi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,S=typeof XRWebGLBinding!="undefined",m=new Ku,f={},y=t.getContextAttributes(),v=null,x=null,b=[],E=[],A=new le,_=null,T=null,R=new un;R.viewport=new Ht;let P=new un;P.viewport=new Ht;let N=[R,P],O=new Hl,C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=b[$];return te===void 0&&(te=new Er,b[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=b[$];return te===void 0&&(te=new Er,b[$]=te),te.getGripSpace()},this.getHand=function($){let te=b[$];return te===void 0&&(te=new Er,b[$]=te),te.getHandSpace()};function z($){let te=E.indexOf($.inputSource);if(te===-1)return;let Te=b[te];Te!==void 0&&(Te.update($.inputSource,$.frame,c||a),Te.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",j);for(let $=0;$<b.length;$++){let te=E[$];te!==null&&(E[$]=null,b[$].disconnect(te))}C=null,D=null,m.reset();for(let $ in f)delete f[$];if(e.setRenderTarget(v),p=null,u=null,d=null,s=null,x=null,yt.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),T!==null){let $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",j),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Je=null,Pe=null;y.depth&&(Pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=y.stencil?gs:xi,Je=y.stencil?Ur:li);let $e={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer($e),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Rn(u.textureWidth,u.textureHeight,{format:Zn,type:Ln,depthTexture:new ls(u.textureWidth,u.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Rn(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),yt.setContext(s),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j($){for(let te=0;te<$.removed.length;te++){let Te=$.removed[te],Je=E.indexOf(Te);Je>=0&&(E[Je]=null,b[Je].disconnect(Te))}for(let te=0;te<$.added.length;te++){let Te=$.added[te],Je=E.indexOf(Te);if(Je===-1){for(let $e=0;$e<b.length;$e++)if($e>=E.length){E.push(Te),Je=$e;break}else if(E[$e]===null){E[$e]=Te,Je=$e;break}if(Je===-1)break}let Pe=b[Je];Pe&&Pe.connect(Te)}}let G=new L,Y=new L;function K($,te,Te){G.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(Te.matrixWorld);let Je=G.distanceTo(Y),Pe=te.projectionMatrix.elements,$e=Te.projectionMatrix.elements,Lt=Pe[14]/(Pe[10]-1),ne=Pe[14]/(Pe[10]+1),ce=(Pe[9]+1)/Pe[5],de=(Pe[9]-1)/Pe[5],fe=(Pe[8]-1)/Pe[0],ye=($e[8]+1)/$e[0],qe=Lt*fe,Ve=Lt*ye,je=Je/(-fe+ye),st=je*-fe;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(st),$.translateZ(je),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pe[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let U=Lt+je,Tt=ne+je,ct=qe-st,I=Ve+(Je-st),M=ce*ne/Tt*U,k=de*ne/Tt*U;$.projectionMatrix.makePerspective(ct,I,M,k,U,Tt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function De($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let te=$.near,Te=$.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),O.near=P.near=R.near=te,O.far=P.far=R.far=Te,(C!==O.near||D!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),C=O.near,D=O.far),O.layers.mask=$.layers.mask|6,R.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;let Je=$.parent,Pe=O.cameras;De(O,Je);for(let $e=0;$e<Pe.length;$e++)De(Pe[$e],Je);Pe.length===2?K(O,R,P):O.projectionMatrix.copy(R.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),Ie($,O,Je)};function Ie($,te,Te){Te===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(Te.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ul*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return f[$]};let St=null;function lt($,te){if(h=te.getViewerPose(c||a),g=te,h!==null){let Te=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Je=!1;Te.length!==O.cameras.length&&(O.cameras.length=0,Je=!0);for(let ne=0;ne<Te.length;ne++){let ce=Te[ne],de=null;if(p!==null)de=p.getViewport(ce);else{let ye=d.getViewSubImage(u,ce);de=ye.viewport,ne===0&&(e.setRenderTargetTextures(x,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(x))}let fe=N[ne];fe===void 0&&(fe=new un,fe.layers.enable(ne),fe.viewport=new Ht,N[ne]=fe),fe.matrix.fromArray(ce.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ce.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(de.x,de.y,de.width,de.height),ne===0&&(O.matrix.copy(fe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Je===!0&&O.cameras.push(fe)}let Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();let ne=d.getDepthInformation(Te[0]);ne&&ne.isValid&&ne.texture&&m.init(ne,s.renderState)}if(Pe&&Pe.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let ne=0;ne<Te.length;ne++){let ce=Te[ne].camera;if(ce){let de=f[ce];de||(de=new Aa,f[ce]=de);let fe=d.getCameraImage(ce);de.sourceTexture=fe}}}}for(let Te=0;Te<b.length;Te++){let Je=E[Te],Pe=b[Te];Je!==null&&Pe!==void 0&&Pe.update(Je,te,c||a)}St&&St($,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let yt=new am;yt.setAnimationLoop(lt),this.setAnimationLoop=function($){St=$},this.dispose=function(){}}},U1=new ft,dm=new nt;dm.set(-1,0,0,0,1,0,0,0,1);function F1(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Iu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,v,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),S(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===fn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===fn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=e.get(f),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(U1.makeRotationFromEuler(x)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(dm),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){let y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function O1(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){let E=b.program;i.uniformBlockBinding(x,E)}function c(x,b){let E=s[x.id];E===void 0&&(m(x),E=h(x),s[x.id]=E,x.addEventListener("dispose",y));let A=b.program;i.updateUBOMapping(x,A);let _=e.render.frame;r[x.id]!==_&&(u(x),r[x.id]=_)}function h(x){let b=d();x.__bindingPointIndex=b;let E=n.createBuffer(),A=x.__size,_=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let b=s[x.id],E=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let _=0,T=E.length;_<T;_++){let R=E[_];if(Array.isArray(R))for(let P=0,N=R.length;P<N;P++)p(R[P],_,P,A);else p(R,_,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,b,E,A){if(S(x,b,E,A)===!0){let _=x.__offset,T=x.value;if(Array.isArray(T)){let R=0;for(let P=0;P<T.length;P++){let N=T[P],O=f(N);g(N,x.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,x.__data)}}function g(x,b,E){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,E)}function S(x,b,E,A){let _=x.value,T=b+"_"+E;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let R=A[T];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(x){let b=x.uniforms,E=0,A=16;for(let T=0,R=b.length;T<R;T++){let P=Array.isArray(b[T])?b[T]:[b[T]];for(let N=0,O=P.length;N<O;N++){let C=P[N],D=Array.isArray(C.value)?C.value:[C.value];for(let z=0,H=D.length;z<H;z++){let j=D[z],G=f(j),Y=E%A,K=Y%G.boundary,De=Y+K;E+=K,De!==0&&A-De<G.storage&&(E+=A-De),C.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=E,E+=G.storage}}}let _=E%A;return _>0&&(E+=A-_),x.__size=E,x.__cache={},this}function f(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):We("WebGLRenderer: Unsupported uniform value type.",x),b}function y(x){let b=x.target;b.removeEventListener("dispose",y);let E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function v(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:v}}var B1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function z1(){return Si===null&&(Si=new Is(B1,16,16,xs,ci),Si.name="DFG_LUT",Si.minFilter=dn,Si.magFilter=dn,Si.wrapS=mi,Si.wrapT=mi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var Uc=class{constructor(e={}){let{canvas:t=wp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Ln}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let S=p,m=new Set([Kl,jl,$l]),f=new Set([Ln,li,Nr,Ur,Zl,Jl]),y=new Uint32Array(4),v=new Int32Array(4),x=new L,b=null,E=null,A=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,N=null,O=null,C=null,D=null;this._outputColorSpace=rn;let z=0,H=0,j=null,G=-1,Y=null,K=new Ht,De=new Ht,Ie=null,St=new Ce(0),lt=0,yt=t.width,$=t.height,te=1,Te=null,Je=null,Pe=new Ht(0,0,yt,$),$e=new Ht(0,0,yt,$),Lt=!1,ne=new wr,ce=!1,de=!1,fe=new ft,ye=new L,qe=new Ht,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function st(){return j===null?te:1}let U=i;function Tt(w,F){return t.getContext(w,F)}let ct,I,M,k,X,Z,pe,xe,J,ee,_e,He,Se,ve,ke,Ye,rt,B,be,Q,Me,Re,oe;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Bt,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",Kn,!1),U===null){let F="webgl2";if(U=Tt(F,w),U===null)throw Tt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(w){throw t.removeEventListener("webglcontextlost",Bt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Kn,!1),Ze("WebGLRenderer: "+w.message),w}function Ge(){ct=new qv(U),ct.init(),Me=new L1(U,ct),I=new Fv(U,ct,e,Me),M=new I1(U,ct),I.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),O=U.createFramebuffer(),C=U.createFramebuffer(),D=U.createFramebuffer(),k=new Jv(U),X=new g1,Z=new P1(U,ct,M,X,I,Me,k),pe=new Xv(R),xe=new jx(U),Re=new Nv(U,xe),J=new Yv(U,xe,k,Re),ee=new jv(U,J,xe,Re,k),B=new $v(U,I,Z),ke=new Ov(X),_e=new m1(R,pe,ct,I,Re,ke),He=new F1(R,X),Se=new y1,ve=new E1(ct),rt=new Dv(R,pe,M,ee,g,l),Ye=new C1(R,ee,I),oe=new O1(U,k,I,M),be=new Uv(U,ct,k),Q=new Zv(U,ct,k),k.programs=_e.programs,R.capabilities=I,R.extensions=ct,R.properties=X,R.renderLists=Se,R.shadowMap=Ye,R.state=M,R.info=k}S!==Ln&&(T=new Qv(S,t.width,t.height,o,s,r));let Oe=new Qu(R,U);this.xr=Oe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=ct.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ct.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(w){w!==void 0&&(te=w,this.setSize(yt,$,!1))},this.getSize=function(w){return w.set(yt,$)},this.setSize=function(w,F,q=!0){if(Oe.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=w,$=F,t.width=Math.floor(w*te),t.height=Math.floor(F*te),q===!0&&(t.style.width=w+"px",t.style.height=F+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(yt*te,$*te).floor()},this.setDrawingBufferSize=function(w,F,q){yt=w,$=F,te=q,t.width=Math.floor(w*q),t.height=Math.floor(F*q),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(S===Ln){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(K)},this.getViewport=function(w){return w.copy(Pe)},this.setViewport=function(w,F,q,V){w.isVector4?Pe.set(w.x,w.y,w.z,w.w):Pe.set(w,F,q,V),M.viewport(K.copy(Pe).multiplyScalar(te).round())},this.getScissor=function(w){return w.copy($e)},this.setScissor=function(w,F,q,V){w.isVector4?$e.set(w.x,w.y,w.z,w.w):$e.set(w,F,q,V),M.scissor(De.copy($e).multiplyScalar(te).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(w){M.setScissorTest(Lt=w)},this.setOpaqueSort=function(w){Te=w},this.setTransparentSort=function(w){Je=w},this.getClearColor=function(w){return w.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,q=!0){let V=0;if(w){let W=!1;if(j!==null){let Ae=j.texture.format;W=m.has(Ae)}if(W){let Ae=j.texture.type,Ne=f.has(Ae),we=rt.getClearColor(),Ue=rt.getClearAlpha(),Be=we.r,ot=we.g,ht=we.b;Ne?(y[0]=Be,y[1]=ot,y[2]=ht,y[3]=Ue,U.clearBufferuiv(U.COLOR,0,y)):(v[0]=Be,v[1]=ot,v[2]=ht,v[3]=Ue,U.clearBufferiv(U.COLOR,0,v))}else V|=U.COLOR_BUFFER_BIT}F&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),N=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Bt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Kn,!1),rt.dispose(),Se.dispose(),ve.dispose(),X.dispose(),pe.dispose(),ee.dispose(),Re.dispose(),oe.dispose(),_e.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Qd),Oe.removeEventListener("sessionend",ef),Ss.stop()};function Bt(w){w.preventDefault(),ga("WebGLRenderer: Context Lost."),P=!0}function wt(){ga("WebGLRenderer: Context Restored."),P=!1;let w=k.autoReset,F=Ye.enabled,q=Ye.autoUpdate,V=Ye.needsUpdate,W=Ye.type;Ge(),k.autoReset=w,Ye.enabled=F,Ye.autoUpdate=q,Ye.needsUpdate=V,Ye.type=W}function Kn(w){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ui(w){let F=w.target;F.removeEventListener("dispose",ui),Ng(F)}function Ng(w){Ug(w),X.remove(w)}function Ug(w){let F=X.get(w).programs;F!==void 0&&(F.forEach(function(q){_e.releaseProgram(q)}),w.isShaderMaterial&&_e.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,q,V,W,Ae){F===null&&(F=Ve);let Ne=W.isMesh&&W.matrixWorld.determinantAffine()<0,we=Bg(w,F,q,V,W);M.setMaterial(V,Ne);let Ue=q.index,Be=1;if(V.wireframe===!0){if(Ue=J.getWireframeAttribute(q),Ue===void 0)return;Be=2}let ot=q.drawRange,ht=q.attributes.position,Fe=ot.start*Be,At=(ot.start+ot.count)*Be;Ae!==null&&(Fe=Math.max(Fe,Ae.start*Be),At=Math.min(At,(Ae.start+Ae.count)*Be)),Ue!==null?(Fe=Math.max(Fe,0),At=Math.min(At,Ue.count)):ht!=null&&(Fe=Math.max(Fe,0),At=Math.min(At,ht.count));let Kt=At-Fe;if(Kt<0||Kt===1/0)return;Re.setup(W,V,we,q,Ue);let Gt,Ft=be;if(Ue!==null&&(Gt=xe.get(Ue),Ft=Q,Ft.setIndex(Gt)),W.isMesh)V.wireframe===!0?(M.setLineWidth(V.wireframeLinewidth*st()),Ft.setMode(U.LINES)):Ft.setMode(U.TRIANGLES);else if(W.isLine){let mn=V.linewidth;mn===void 0&&(mn=1),M.setLineWidth(mn*st()),W.isLineSegments?Ft.setMode(U.LINES):W.isLineLoop?Ft.setMode(U.LINE_LOOP):Ft.setMode(U.LINE_STRIP)}else W.isPoints?Ft.setMode(U.POINTS):W.isSprite&&Ft.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Ft.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let mn=W._multiDrawStarts,Le=W._multiDrawCounts,_n=W._multiDrawCount,_t=Ue?xe.get(Ue).bytesPerElement:1,Wn=X.get(V).currentProgram.getUniforms();for(let di=0;di<_n;di++)Wn.setValue(U,"_gl_DrawID",di),Ft.render(mn[di]/_t,Le[di])}else if(W.isInstancedMesh)Ft.renderInstances(Fe,Kt,W.count);else if(q.isInstancedBufferGeometry){let mn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Le=Math.min(q.instanceCount,mn);Ft.renderInstances(Fe,Kt,Le)}else Ft.render(Fe,Kt)};function Kd(w,F,q,V){N!==null&&w.isNodeMaterial&&N.setObject(V,w),ce===!0&&ke.setState(w,q,!1),w.transparent===!0&&w.side===pn&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,Eo(w,F,V),w.side=ds,w.needsUpdate=!0,Eo(w,F,V),w.side=pn):Eo(w,F,V)}this.compile=function(w,F,q=null){q===null&&(q=w),N!==null&&N.renderStart(w,F,q),E=ve.get(q),E.init(F),_.push(E),q.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),w!==q&&w.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),de=this.localClippingEnabled,ce=ke.init(this.clippingPlanes,de),ce===!0&&ke.setGlobalState(this.clippingPlanes,F),N!==null&&Ye.render(E.state.shadowsArray,q,F);let V=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ae=W.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){let we=Ae[Ne];Kd(we,q,F,W),V.add(we)}else Kd(Ae,q,F,W),V.add(Ae)}),E=_.pop(),N!==null&&N.renderEnd(),V},this.compileAsync=function(w,F,q=null){let V=this.compile(w,F,q);return new Promise(W=>{function Ae(){if(V.forEach(function(Ne){let Ue=X.get(Ne).currentProgram;(Ue===void 0||Ue.isReady())&&V.delete(Ne)}),V.size===0){W(w);return}setTimeout(Ae,10)}ct.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let yh=null;function Fg(w){yh&&yh(w)}function Qd(){Ss.stop()}function ef(){Ss.start()}let Ss=new am;Ss.setAnimationLoop(Fg),typeof self!="undefined"&&Ss.setContext(self),this.setAnimationLoop=function(w){yh=w,Oe.setAnimationLoop(w),w===null?Ss.stop():Ss.start()},Oe.addEventListener("sessionstart",Qd),Oe.addEventListener("sessionend",ef),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(w,F);let q=Oe.enabled===!0&&Oe.isPresenting===!0,V=T!==null&&(j===null||q)&&T.begin(R,j);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(F),F=Oe.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,F,j),E=ve.get(w,_.length),E.init(F),E.state.textureUnits=Z.getTextureUnits(),_.push(E),fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ne.setFromProjectionMatrix(fe,ii,F.reversedDepth),de=this.localClippingEnabled,ce=ke.init(this.clippingPlanes,de),b=Se.get(w,A.length),b.init(),A.push(b),Oe.enabled===!0&&Oe.isPresenting===!0){let Ne=R.xr.getDepthSensingMesh();Ne!==null&&_h(Ne,F,-1/0,R.sortObjects)}_h(w,F,0,R.sortObjects),b.finish(),N!==null&&N.updateLights(E.state.lightsArray),R.sortObjects===!0&&b.sort(Te,Je),je=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,je&&rt.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&ke.beginShadows();let W=E.state.shadowsArray;if(Ye.render(W,w,F),ce===!0&&ke.endShadows(),(V&&T.hasRenderPass())===!1){let Ne=b.opaque,we=b.transmissive;if(E.setupLights(),F.isArrayCamera){let Ue=F.cameras;if(we.length>0)for(let Be=0,ot=Ue.length;Be<ot;Be++){let ht=Ue[Be];nf(Ne,we,w,ht)}je&&rt.render(w);for(let Be=0,ot=Ue.length;Be<ot;Be++){let ht=Ue[Be];tf(b,w,ht,ht.viewport)}}else we.length>0&&nf(Ne,we,w,F),je&&rt.render(w),tf(b,w,F)}j!==null&&H===0&&(Z.updateMultisampleRenderTarget(j),Z.updateRenderTargetMipmap(j)),V&&T.end(R),w.isScene===!0&&w.onAfterRender(R,w,F),Re.resetDefaultState(),G=-1,Y=null,_.pop(),_.length>0?(E=_[_.length-1],Z.setTextureUnits(E.state.textureUnits),ce===!0&&ke.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,N!==null&&N.renderEnd()};function _h(w,F,q,V){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ne)){V&&qe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);let Ne=ee.update(w),we=w.material;we.visible&&b.push(w,Ne,we,q,qe.z,null,F)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(ne))){let Ne=ee.update(w),we=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),qe.copy(w.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),qe.copy(Ne.boundingSphere.center)),qe.applyMatrix4(w.matrixWorld).applyMatrix4(fe)),Array.isArray(we)){let Ue=Ne.groups;for(let Be=0,ot=Ue.length;Be<ot;Be++){let ht=Ue[Be],Fe=we[ht.materialIndex];Fe&&Fe.visible&&b.push(w,Ne,Fe,q,qe.z,ht,F)}}else we.visible&&b.push(w,Ne,we,q,qe.z,null,F)}}let Ae=w.children;for(let Ne=0,we=Ae.length;Ne<we;Ne++)_h(Ae[Ne],F,q,V)}function tf(w,F,q,V){let{opaque:W,transmissive:Ae,transparent:Ne}=w;E.setupLightsView(q),ce===!0&&ke.setGlobalState(R.clippingPlanes,q),V&&M.viewport(K.copy(V)),W.length>0&&So(W,F,q),Ae.length>0&&So(Ae,F,q),Ne.length>0&&So(Ne,F,q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function nf(w,F,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Fe=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new Rn(1,1,{generateMipmaps:!0,type:Fe?ci:Ln,minFilter:ms,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Ae=E.state.transmissionRenderTarget[V.id],Ne=V.viewport||K;Ae.setSize(Ne.z*R.transmissionResolutionScale,Ne.w*R.transmissionResolutionScale);let we=R.getRenderTarget(),Ue=R.getActiveCubeFace(),Be=R.getActiveMipmapLevel();R.setRenderTarget(Ae),R.getClearColor(St),lt=R.getClearAlpha(),lt<1&&R.setClearColor(16777215,.5),R.clear(),je&&rt.render(q);let ot=R.toneMapping;R.toneMapping=oi;let ht=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),ce===!0&&ke.setGlobalState(R.clippingPlanes,V),So(w,q,V),Z.updateMultisampleRenderTarget(Ae),Z.updateRenderTargetMipmap(Ae),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let At=0,Kt=F.length;At<Kt;At++){let Gt=F[At],{object:Ft,geometry:mn,material:Le,group:_n}=Gt;if(Le.side===pn&&Ft.layers.test(V.layers)){let _t=Le.side;Le.side=fn,Le.needsUpdate=!0,sf(Ft,q,V,mn,Le,_n),Le.side=_t,Le.needsUpdate=!0,Fe=!0}}Fe===!0&&(Z.updateMultisampleRenderTarget(Ae),Z.updateRenderTargetMipmap(Ae))}R.setRenderTarget(we,Ue,Be),R.setClearColor(St,lt),ht!==void 0&&(V.viewport=ht),R.toneMapping=ot}function So(w,F,q){let V=F.isScene===!0?F.overrideMaterial:null;for(let W=0,Ae=w.length;W<Ae;W++){let Ne=w[W],{object:we,geometry:Ue,group:Be}=Ne,ot=Ne.material;ot.allowOverride===!0&&V!==null&&(ot=V),we.layers.test(q.layers)&&sf(we,F,q,Ue,ot,Be)}}function sf(w,F,q,V,W,Ae){N!==null&&W.isNodeMaterial&&N.setObject(w,W),w.onBeforeRender(R,F,q,V,W,Ae),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(R,F,q,V,w,Ae),W.transparent===!0&&W.side===pn&&W.forceSinglePass===!1?(W.side=fn,W.needsUpdate=!0,R.renderBufferDirect(q,F,V,W,w,Ae),W.side=ds,W.needsUpdate=!0,R.renderBufferDirect(q,F,V,W,w,Ae),W.side=pn):R.renderBufferDirect(q,F,V,W,w,Ae),w.onAfterRender(R,F,q,V,W,Ae)}function Eo(w,F,q){F.isScene!==!0&&(F=Ve);let V=X.get(w),W=E.state.lights,Ae=E.state.shadowsArray,Ne=W.state.version,we=_e.getParameters(w,W.state,Ae,F,q,E.state.lightProbeGridArray),Ue=_e.getProgramCacheKey(we),Be=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let ot=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=pe.get(w.envMap||V.environment,ot),V.envMapRotation=V.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",ui),Be=new Map,V.programs=Be);let ht=Be.get(Ue);if(ht!==void 0){if(V.currentProgram===ht&&V.lightsStateVersion===Ne)return af(w,we),ht}else we.uniforms=_e.getUniforms(w),N!==null&&w.isNodeMaterial&&N.build(w,q,we),w.onBeforeCompile(we,R),ht=_e.acquireProgram(we,Ue),Be.set(Ue,ht),V.uniforms=we.uniforms;let Fe=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Fe.clippingPlanes=ke.uniform),af(w,we),V.needsLights=Hg(w),V.lightsStateVersion=Ne,V.needsLights&&(Fe.ambientLightColor.value=W.state.ambient,Fe.lightProbe.value=W.state.probe,Fe.sunLights.value=W.state.sun,Fe.sunLightShadows.value=W.state.sunShadow,Fe.directionalLights.value=W.state.directional,Fe.directionalLightShadows.value=W.state.directionalShadow,Fe.spotLights.value=W.state.spot,Fe.spotLightShadows.value=W.state.spotShadow,Fe.rectAreaLights.value=W.state.rectArea,Fe.ltc_1.value=W.state.rectAreaLTC1,Fe.ltc_2.value=W.state.rectAreaLTC2,Fe.pointLights.value=W.state.point,Fe.pointLightShadows.value=W.state.pointShadow,Fe.hemisphereLights.value=W.state.hemi,Fe.sunShadowMatrix.value=W.state.sunShadowMatrix,Fe.sunShadowCascade.value=W.state.sunShadowCascade,Fe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Fe.spotLightMatrix.value=W.state.spotLightMatrix,Fe.spotLightMap.value=W.state.spotLightMap,Fe.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=ht,V.uniformsList=null,ht}function rf(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=zr.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function af(w,F){let q=X.get(w);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Og(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let q=0,V=w.length;q<V;q++){let W=w[q];if(W.texture!==null&&W.boundingBox.containsPoint(x))return W}return null}function Bg(w,F,q,V,W){F.isScene!==!0&&(F=Ve),Z.resetTextureUnits();let Ae=F.fog,Ne=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,we=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:dt.workingColorSpace,Ue=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Be=pe.get(V.envMap||Ne,Ue),ot=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ht=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Fe=!!q.morphAttributes.position,At=!!q.morphAttributes.normal,Kt=!!q.morphAttributes.color,Gt=oi;V.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Gt=R.toneMapping);let Ft=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,mn=Ft!==void 0?Ft.length:0,Le=X.get(V),_n=E.state.lights;if(ce===!0&&(de===!0||w!==Y)){let zt=w===Y&&V.id===G;ke.setState(V,w,zt)}let _t=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==_n.state.version||Le.outputColorSpace!==we||W.isBatchedMesh&&Le.batching===!1||!W.isBatchedMesh&&Le.batching===!0||W.isBatchedMesh&&Le.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Le.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Le.instancing===!1||!W.isInstancedMesh&&Le.instancing===!0||W.isSkinnedMesh&&Le.skinning===!1||!W.isSkinnedMesh&&Le.skinning===!0||W.isInstancedMesh&&Le.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Le.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Le.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Le.instancingMorph===!1&&W.morphTexture!==null||Le.envMap!==Be||V.fog===!0&&Le.fog!==Ae||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ke.numPlanes||Le.numIntersection!==ke.numIntersection)||Le.vertexAlphas!==ot||Le.vertexTangents!==ht||Le.morphTargets!==Fe||Le.morphNormals!==At||Le.morphColors!==Kt||Le.toneMapping!==Gt||Le.morphTargetsCount!==mn||!!Le.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Le.__version=V.version);let Wn=Le.currentProgram;_t===!0&&(Wn=Eo(V,F,W),N&&V.isNodeMaterial&&N.onUpdateProgram(V,Wn,Le));let di=!1,Qi=!1,Ks=!1,Nt=Wn.getUniforms(),$t=Le.uniforms;if(M.useProgram(Wn.program)&&(di=!0,Qi=!0,Ks=!0),V.id!==G&&(G=V.id,Qi=!0),Le.needsLights){let zt=Og(E.state.lightProbeGridArray,W);Le.lightProbeGrid!==zt&&(Le.lightProbeGrid=zt,Qi=!0)}if(di||Y!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Nt.setValue(U,"projectionMatrix",w.projectionMatrix),Nt.setValue(U,"viewMatrix",w.matrixWorldInverse);let ts=Nt.map.cameraPosition;ts!==void 0&&ts.setValue(U,ye.setFromMatrixPosition(w.matrixWorld)),I.logarithmicDepthBuffer&&Nt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Nt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,Qi=!0,Ks=!0)}if(Le.needsLights&&(_n.state.sunShadowMap.length>0&&Nt.setValue(U,"sunShadowMap",_n.state.sunShadowMap,Z),_n.state.directionalShadowMap.length>0&&Nt.setValue(U,"directionalShadowMap",_n.state.directionalShadowMap,Z),_n.state.spotShadowMap.length>0&&Nt.setValue(U,"spotShadowMap",_n.state.spotShadowMap,Z),_n.state.pointShadowMap.length>0&&Nt.setValue(U,"pointShadowMap",_n.state.pointShadowMap,Z)),W.isSkinnedMesh){Nt.setOptional(U,W,"bindMatrix"),Nt.setOptional(U,W,"bindMatrixInverse");let zt=W.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Nt.setValue(U,"boneTexture",zt.boneTexture,Z))}W.isBatchedMesh&&(Nt.setOptional(U,W,"batchingTexture"),Nt.setValue(U,"batchingTexture",W._matricesTexture,Z),Nt.setOptional(U,W,"batchingIdTexture"),Nt.setValue(U,"batchingIdTexture",W._indirectTexture,Z),Nt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&Nt.setValue(U,"batchingColorTexture",W._colorsTexture,Z));let es=q.morphAttributes;if((es.position!==void 0||es.normal!==void 0||es.color!==void 0)&&B.update(W,q,Wn),(Qi||Le.receiveShadow!==W.receiveShadow)&&(Le.receiveShadow=W.receiveShadow,Nt.setValue(U,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&($t.envMapIntensity.value=F.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=z1()),Qi){if(Nt.setValue(U,"toneMappingExposure",R.toneMappingExposure),Le.needsLights&&zg($t,Ks),Ae&&V.fog===!0&&He.refreshFogUniforms($t,Ae),He.refreshMaterialUniforms($t,V,te,$,E.state.transmissionRenderTarget[w.id]),Le.needsLights&&Le.lightProbeGrid){let zt=Le.lightProbeGrid;$t.probesSH.value=zt.texture,$t.probesMin.value.copy(zt.boundingBox.min),$t.probesMax.value.copy(zt.boundingBox.max),$t.probesResolution.value.copy(zt.resolution)}zr.upload(U,rf(Le),$t,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(zr.upload(U,rf(Le),$t,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Nt.setValue(U,"center",W.center),Nt.setValue(U,"modelViewMatrix",W.modelViewMatrix),Nt.setValue(U,"normalMatrix",W.normalMatrix),Nt.setValue(U,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let zt=V.uniformsGroups;for(let ts=0,Qs=zt.length;ts<Qs;ts++){let lf=zt[ts];oe.update(lf,Wn),oe.bind(lf,Wn)}}return Wn}function zg(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Hg(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,F,q){let V=X.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(w.texture).__webglTexture=F,X.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let q=X.get(w);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,q=0){j=w,z=F,H=q;let V=null,W=!1,Ae=!1;if(w){let we=X.get(w);if(we.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(U.FRAMEBUFFER,we.__webglFramebuffer),K.copy(w.viewport),De.copy(w.scissor),Ie=w.scissorTest,M.viewport(K),M.scissor(De),M.setScissorTest(Ie),G=-1;return}else if(we.__webglFramebuffer===void 0)Z.setupRenderTarget(w);else if(we.__hasExternalTextures)Z.rebindTextures(w,X.get(w.texture).__webglTexture,X.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ot=w.depthTexture;if(we.__boundDepthTexture!==ot){if(ot!==null&&X.has(ot)&&(w.width!==ot.image.width||w.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(w)}}let Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ae=!0);let Be=X.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?V=Be[F][q]:V=Be[F],W=!0):w.samples>0&&Z.useMultisampledRTT(w)===!1?V=X.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?V=Be[q]:V=Be,K.copy(w.viewport),De.copy(w.scissor),Ie=w.scissorTest}else K.copy(Pe).multiplyScalar(te).floor(),De.copy($e).multiplyScalar(te).floor(),Ie=Lt;if(q!==0&&(V=O),M.bindFramebuffer(U.FRAMEBUFFER,V)&&M.drawBuffers(w,V),M.viewport(K),M.scissor(De),M.setScissorTest(Ie),W){let we=X.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,q)}else if(Ae){let we=F;for(let Ue=0;Ue<w.textures.length;Ue++){let Be=X.get(w.textures[Ue]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ue,Be.__webglTexture,q,we)}}else if(w!==null&&q!==0){let we=X.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,we.__webglTexture,q)}G=-1};function of(w){let F=X.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=I.textureFormatReadable(w.format),F.__typeReadable=I.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,q,V,W,Ae,Ne,we=0){if(!(w&&w.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ue=Ue[Ne]),Ue){M.bindFramebuffer(U.FRAMEBUFFER,Ue);try{let Be=w.textures[we],ot=Be.format,ht=Be.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+we);let Fe=of(Be);if(Fe.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-V&&q>=0&&q<=w.height-W&&U.readPixels(F,q,V,W,Me.convert(ot),Me.convert(ht),Ae)}finally{let Be=j!==null?X.get(j).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,F,q,V,W,Ae,Ne,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ue=Ue[Ne]),Ue)if(F>=0&&F<=w.width-V&&q>=0&&q<=w.height-W){M.bindFramebuffer(U.FRAMEBUFFER,Ue);let Be=w.textures[we],ot=Be.format,ht=Be.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+we);let Fe=of(Be);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let At=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,At),U.bufferData(U.PIXEL_PACK_BUFFER,Ae.byteLength,U.STREAM_READ),U.readPixels(F,q,V,W,Me.convert(ot),Me.convert(ht),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Kt=j!==null?X.get(j).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,Kt);let Gt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Rp(U,Gt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,At),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ae),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(At),U.deleteSync(Gt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,q=0){let V=Math.pow(2,-q),W=Math.floor(w.image.width*V),Ae=Math.floor(w.image.height*V),Ne=F!==null?F.x:0,we=F!==null?F.y:0;Z.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Ne,we,W,Ae),M.unbindTexture()},this.copyTextureToTexture=function(w,F,q=null,V=null,W=0,Ae=0){let Ne,we,Ue,Be,ot,ht,Fe,At,Kt,Gt=w.isCompressedTexture?w.mipmaps[Ae]:w.image;if(q!==null)Ne=q.max.x-q.min.x,we=q.max.y-q.min.y,Ue=q.isBox3?q.max.z-q.min.z:1,Be=q.min.x,ot=q.min.y,ht=q.isBox3?q.min.z:0;else{let $t=Math.pow(2,-W);Ne=Math.floor(Gt.width*$t),we=Math.floor(Gt.height*$t),w.isDataArrayTexture?Ue=Gt.depth:w.isData3DTexture?Ue=Math.floor(Gt.depth*$t):Ue=1,Be=0,ot=0,ht=0}V!==null?(Fe=V.x,At=V.y,Kt=V.z):(Fe=0,At=0,Kt=0);let Ft=Me.convert(F.format),mn=Me.convert(F.type),Le;F.isData3DTexture?(Z.setTexture3D(F,0),Le=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Z.setTexture2DArray(F,0),Le=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(F,0),Le=U.TEXTURE_2D),M.activeTexture(U.TEXTURE0),M.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let _n=M.getParameter(U.UNPACK_ROW_LENGTH),_t=M.getParameter(U.UNPACK_IMAGE_HEIGHT),Wn=M.getParameter(U.UNPACK_SKIP_PIXELS),di=M.getParameter(U.UNPACK_SKIP_ROWS),Qi=M.getParameter(U.UNPACK_SKIP_IMAGES);M.pixelStorei(U.UNPACK_ROW_LENGTH,Gt.width),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Gt.height),M.pixelStorei(U.UNPACK_SKIP_PIXELS,Be),M.pixelStorei(U.UNPACK_SKIP_ROWS,ot),M.pixelStorei(U.UNPACK_SKIP_IMAGES,ht);let Ks=w.isDataArrayTexture||w.isData3DTexture,Nt=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let $t=X.get(w),es=X.get(F),zt=X.get($t.__renderTarget),ts=X.get(es.__renderTarget);M.bindFramebuffer(U.READ_FRAMEBUFFER,zt.__webglFramebuffer),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let Qs=0;Qs<Ue;Qs++)Ks&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(w).__webglTexture,W,ht+Qs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(F).__webglTexture,Ae,Kt+Qs)),U.blitFramebuffer(Be,ot,Ne,we,Fe,At,Ne,we,U.DEPTH_BUFFER_BIT,U.NEAREST);M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||X.has(w)){let $t=X.get(w),es=X.get(F);M.bindFramebuffer(U.READ_FRAMEBUFFER,C),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,D);for(let zt=0;zt<Ue;zt++)Ks?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$t.__webglTexture,W,ht+zt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,$t.__webglTexture,W),Nt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,es.__webglTexture,Ae,Kt+zt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,es.__webglTexture,Ae),W!==0?U.blitFramebuffer(Be,ot,Ne,we,Fe,At,Ne,we,U.COLOR_BUFFER_BIT,U.NEAREST):Nt?U.copyTexSubImage3D(Le,Ae,Fe,At,Kt+zt,Be,ot,Ne,we):U.copyTexSubImage2D(Le,Ae,Fe,At,Be,ot,Ne,we);M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Nt?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Le,Ae,Fe,At,Kt,Ne,we,Ue,Ft,mn,Gt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Le,Ae,Fe,At,Kt,Ne,we,Ue,Ft,Gt.data):U.texSubImage3D(Le,Ae,Fe,At,Kt,Ne,we,Ue,Ft,mn,Gt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ae,Fe,At,Ne,we,Ft,mn,Gt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ae,Fe,At,Gt.width,Gt.height,Ft,Gt.data):U.texSubImage2D(U.TEXTURE_2D,Ae,Fe,At,Ne,we,Ft,mn,Gt);M.pixelStorei(U.UNPACK_ROW_LENGTH,_n),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t),M.pixelStorei(U.UNPACK_SKIP_PIXELS,Wn),M.pixelStorei(U.UNPACK_SKIP_ROWS,di),M.pixelStorei(U.UNPACK_SKIP_IMAGES,Qi),Ae===0&&F.generateMipmaps&&U.generateMipmap(Le),M.unbindTexture()},this.initRenderTarget=function(w){X.get(w).__webglFramebuffer===void 0&&Z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Z.setTextureCube(w,0):w.isData3DTexture?Z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Z.setTexture2DArray(w,0):Z.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){z=0,H=0,j=null,M.reset(),Re.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var zs={sunDir:{value:new L(0,1,0)},sunCol:{value:new L(1,.85,.6)},misc:{value:new Ht(0,.08,0,0)}},ed="gl_FragColor.rgb+=(fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))))-.5)/255.;",Bc=at;Bc.fog_pars_vertex=`#ifdef USE_FOG
varying float vFogDepth;varying vec3 vFogWP;
#endif`;Bc.fog_vertex=`#ifdef USE_FOG
vFogDepth=-mvPosition.z;vFogWP=transpose(mat3(viewMatrix))*mvPosition.xyz;
#endif`;Bc.fog_pars_fragment=`#ifdef USE_FOG
uniform vec3 fogColor;varying float vFogDepth;varying vec3 vFogWP;uniform vec3 fogSunDir;uniform vec3 fogSunCol;uniform vec4 fogMisc;
#ifdef FOG_EXP2
uniform float fogDensity;
#else
uniform float fogNear;uniform float fogFar;
#endif
#endif`;Bc.fog_fragment=`#ifdef USE_FOG
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
${ed}
#endif`;var fm=n=>{n.uniforms.fogSunDir=zs.sunDir,n.uniforms.fogSunCol=zs.sunCol,n.uniforms.fogMisc=zs.misc};Object.defineProperty(In.prototype,"onBeforeCompile",{configurable:!0,get(){return this._obc||fm},set(n){let e=(t,i)=>{fm(t),n(t,i)};e.toString=()=>n.toString()+"/*fogfx*/",this._obc=e}});(function(){if(window.PZ)return;let n=window.PZ={on:!1,ctx:()=>null,started:()=>!0},e=document.createElement("style");e.textContent="#pz{position:fixed;inset:0;z-index:30;display:grid;place-items:center;background:rgba(24,26,56,.64);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);color:#fbf1e0;font-family:system-ui,-apple-system,sans-serif;text-align:center;padding:20px}#pz[hidden]{display:none}#pz .c{display:flex;flex-direction:column;gap:12px;align-items:center}#pz h2{margin:0;font:600 1.7rem system-ui}#pz p{margin:0;color:#cbc8e8;line-height:1.5}#pz button{background:#ffc77a;color:#3b2a1a;border:0;border-radius:99px;padding:13px 32px;font:700 1rem system-ui;cursor:pointer}",document.head.appendChild(e);let t=document.createElement("div");t.id="pz",t.hidden=!0,t.innerHTML='<div class="c"><h2>En pausa</h2><p>Respira con calma.<br>Todo seguir\xE1 aqu\xED cuando vuelvas.</p><button type="button" id="pzGo">Continuar</button></div>';let i=()=>document.body.appendChild(t);document.body?i():addEventListener("DOMContentLoaded",i),n.set=function(s){if(s=!!s,s!==n.on&&!(s&&!n.started())){n.on=s,t.hidden=!s;try{let r=n.ctx();r&&(s?r.suspend():r.resume())}catch{}if(document.querySelectorAll("[data-pz]").forEach(r=>r.textContent=s?"Continuar":"Pausa"),s)try{document.activeElement&&document.activeElement.blur()}catch{}}},n.toggle=()=>n.set(!n.on),n.more=function(s,r,a){if(r=r.filter(Boolean),!s||!r.length)return;let o=document.createElement("style");o.textContent="#pzMore{position:fixed;z-index:25;display:flex;flex-direction:column;gap:6px;padding:8px;min-width:150px;background:rgba(43,45,82,.97);border:1px solid rgba(255,255,255,.22);border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.4)}#pzMore[hidden]{display:none}#pzMore button{display:block;width:100%;text-align:left;background:rgba(255,255,255,.08);color:#fbf1e0;border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:9px 12px;font:600 .88rem system-ui,sans-serif;cursor:pointer}",document.head.appendChild(o);let l=document.createElement("button");l.type="button",l.textContent=a||"M\xE1s",l.className=r[0].className||"",l.id="pzMoreB";let c=document.createElement("div");return c.id="pzMore",c.hidden=!0,r.forEach(h=>{h.removeAttribute("style"),c.appendChild(h)}),s.appendChild(l),document.body.appendChild(c),l.onclick=h=>{if(h.stopPropagation(),c.hidden=!c.hidden,!c.hidden){let d=l.getBoundingClientRect();c.style.top=d.bottom+6+"px",c.style.right=Math.max(8,innerWidth-d.right)+"px"}},document.addEventListener("click",h=>{!c.hidden&&!c.contains(h.target)&&h.target!==l&&(c.hidden=!0)}),addEventListener("resize",()=>{c.hidden=!0}),l},t.querySelector("#pzGo").onclick=()=>n.set(!1),document.addEventListener("keydown",s=>{s.code==="Escape"&&!document.body.classList.contains("photo")&&!document.querySelector(".xm")&&n.toggle()}),document.addEventListener("visibilitychange",()=>{document.hidden&&n.started()&&!n.on&&n.set(!0)}),document.addEventListener("click",s=>{s.target.closest&&s.target.closest("[data-pz]")&&n.toggle()})})();(function(){if(window.UX)return;let n=["es","en","ja"],e={es:"Espa\xF1ol",en:"English",ja:"\u65E5\u672C\u8A9E"},t={get(f,y){try{let v=localStorage.getItem(f);return v===null?y:v}catch{return y}},set(f,y){try{localStorage.setItem(f,y)}catch{}}},i=t.get("rio3d-lang","es");n.includes(i)||(i="es");let s=i==="en"?1:2,r=new Map,a=[],o=window.UX={lang:i,onLang:null,add(f){f.forEach(y=>r.set(y[0],y))},rx(f){f.forEach(y=>a.push(y))},tr(f){if(i==="es"||typeof f!="string")return f;let y=f.trim();if(!y)return f;let v=r.get(y);if(v)return f.replace(y,v[s]);for(let[x,b]of a){let E=y.match(x);if(E)return f.replace(y,b(E,i==="en"?1:2,o.tr))}return f},init(){if(i==="es")return;document.documentElement.lang=i;let f=y=>{if(y.nodeType===3){let b=o.tr(y.nodeValue);b!==y.nodeValue&&(y.nodeValue=b);return}if(y.nodeType!==1||y.tagName==="SCRIPT"||y.tagName==="STYLE")return;let v=y.getAttribute&&y.getAttribute("aria-label");if(v){let b=o.tr(v);b!==v&&y.setAttribute("aria-label",b)}let x=y.getAttribute&&y.getAttribute("title");if(x){let b=o.tr(x);b!==x&&y.setAttribute("title",b)}y.childNodes.forEach(f)};f(document.body),new MutationObserver(y=>{for(let v of y)v.type==="characterData"?f(v.target):v.addedNodes.forEach(f)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0})},hap(f){if(t.get("rio3d-hap","1")!=="0")try{if(navigator.vibrate){navigator.vibrate(f);return}if(!o._sw){let y=document.createElement("label");y.style.cssText="position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";let v=document.createElement("input");v.type="checkbox",v.setAttribute("switch",""),y.appendChild(v),document.body.appendChild(y),o._sw=y}o._sw.click()}catch{}},subsOn:()=>t.get("rio3d-subs","0")==="1",cap(f,y){if(!o.subsOn())return;let v=performance.now(),x=o._cl||(o._cl={});if(x[f]&&v-x[f]<(y||9e3))return;x[f]=v;let b=document.getElementById("uxcap");b||(b=document.createElement("div"),b.id="uxcap",b.setAttribute("aria-live","polite"),b.style.cssText="position:fixed;left:50%;top:max(58px,calc(env(safe-area-inset-top) + 50px));transform:translateX(-50%);background:rgba(20,22,48,.84);color:#fbf1e0;padding:6px 14px;border-radius:8px;font:600 .86rem system-ui,sans-serif;opacity:0;transition:opacity .4s;z-index:20;pointer-events:none;max-width:86%;text-align:center",document.body.appendChild(b)),b.textContent="["+o.tr(f)+"]",b.style.opacity=1,clearTimeout(o._ct),o._ct=setTimeout(()=>b.style.opacity=0,2600)},btns(f,y){y=y||{};let v=(H,j)=>{let G=document.createElement("button");return G.type="button",G.id=H,G.className=f||"",G.onclick=j,G},x=[],b=v("uxLang",()=>{let H=n[(n.indexOf(i)+1)%3];t.set("rio3d-lang",H);try{o.onLang&&o.onLang()}catch{}location.reload()});b.textContent=(i==="en"?"Language: ":i==="ja"?"\u8A00\u8A9E: ":"Idioma: ")+e[i],x.push(b);let E=v("uxSubs",()=>{t.set("rio3d-subs",o.subsOn()?"0":"1"),E.textContent=o.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no"});E.textContent=o.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no",x.push(E);let A=v("uxHap",()=>{let H=t.get("rio3d-hap","1")==="1";t.set("rio3d-hap",H?"0":"1"),A.textContent=H?"Vibraci\xF3n: no":"Vibraci\xF3n: s\xED",H||o.hap(15)});if(A.textContent=t.get("rio3d-hap","1")==="1"?"Vibraci\xF3n: s\xED":"Vibraci\xF3n: no",x.push(A),y.hand){let H={0:"Una mano: no",r:"Una mano: derecha",l:"Una mano: izquierda"},j=["0","r","l"],G=De=>{document.body.classList.remove("hand-r","hand-l"),De!=="0"&&document.body.classList.add("hand-"+De)},Y=t.get("rio3d-hand","0");H[Y]||(Y="0"),G(Y);let K=v("uxHand",()=>{Y=j[(j.indexOf(Y)+1)%3],t.set("rio3d-hand",Y),G(Y),K.textContent=H[Y]});K.textContent=H[Y],x.push(K)}let _=v("uxVol",()=>{let H=["1",".7",".4"],j=H.indexOf(String(o.api.vol()).replace("0.","."));o.api.setVol(H[(j+1)%3]),_.textContent=T()}),T=()=>l("Volumen de este juego: ","Volume (this game): ","\u3053\u306E\u30B2\u30FC\u30E0\u306E\u97F3\u91CF: ")+Math.round(o.api.vol()*100)+" %";_.textContent=T(),x.push(_);let R=v("uxSoft",()=>{o.api.setSoft(!o.api.soft()),R.textContent=P()}),P=()=>o.api.soft()?l("Tono suave: s\xED","Soft tone: on","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30F3"):l("Tono suave: no","Soft tone: off","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30D5");R.textContent=P(),x.push(R);let N=v("uxSleep",()=>{let H=[0,15,30,45];o.api.sleep(H[(H.indexOf(o.api.sleepMin())+1)%4]),N.textContent=O()}),O=()=>o.api.sleepMin()?l("Dormir: ","Sleep: ","\u304A\u3084\u3059\u307F: ")+o.api.sleepMin()+" min":l("Dormir: no","Sleep: off","\u304A\u3084\u3059\u307F: \u30AA\u30D5");if(N.textContent=O(),o._sb=()=>{N.textContent=O()},x.push(N),y.wear){let H=v("uxWear",()=>{t.set("ux-wear",t.get("ux-wear","0")==="1"?"0":"1"),H.textContent=j()}),j=()=>t.get("ux-wear","0")==="1"?l("Desgaste por ausencia: s\xED","Wear while away: on","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30F3"):l("Desgaste por ausencia: no","Wear while away: off","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30D5");H.textContent=j(),x.push(H)}let C=v("uxCalm",()=>{o.setCalm(!o.calm()),C.textContent=D()}),D=()=>o.calm()?l("Menos movimiento y destellos: s\xED","Less motion and flashes: on","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B: \u30AA\u30F3"):l("Menos movimiento y destellos: no","Less motion and flashes: off","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B: \u30AA\u30D5");C.textContent=D(),x.push(C);let z=v("uxAbout",()=>o.about());return z.textContent=l("Acerca de","About","\u3053\u306E\u30B2\u30FC\u30E0\u306B\u3064\u3044\u3066"),x.push(z),x},ask(f,y){let v=document.createElement("div");v.style.cssText="position:fixed;inset:0;z-index:60;display:grid;place-items:center;background:rgba(20,22,48,.6);font:15px/1.4 system-ui,sans-serif";let x=document.createElement("div");x.style.cssText="background:#2b2d52;color:#fbf1e0;border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:20px 22px;max-width:min(86vw,360px);text-align:center";let b=document.createElement("p");b.style.margin="0 0 14px",b.textContent=o.tr(f),x.appendChild(b);let E=(A,_)=>{let T=document.createElement("button");return T.type="button",T.textContent=A,T.style.cssText="margin:0 6px;padding:8px 16px;border-radius:10px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.1);color:inherit;font:inherit;cursor:pointer",T.onclick=()=>{v.remove(),_&&_()},T};x.appendChild(E(l("Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"))),x.appendChild(E(l("S\xED, reiniciar","Yes, restart","\u306F\u3044\u3001\u6700\u521D\u304B\u3089"),y)),v.appendChild(x),document.body.appendChild(v)}},l=(f,y,v)=>i==="en"?y:i==="ja"?v:f,c=(()=>{let f=location.pathname.match(/\/(cabana3d|rio3d|cabana|rio)(\/|$)/);return f?f[1]:/caba/i.test(document.title)?"cabana":"rio"})(),h="ux-vol-"+c,d={vol:t.get(h,t.get("ux-vol","1")),soft:t.get("ux-soft","0")==="1",k:1,nodes:[],end:0,min:0,ov:null};o.quiet=!1;let u=()=>{for(let f of d.nodes)try{let y=f.c.currentTime;f.lp.frequency.setTargetAtTime(d.soft?2800:22e3,y,.1),f.g.gain.setTargetAtTime(+d.vol*d.k,y,.1)}catch{}};o.out=(f,y)=>{let v=f.createBiquadFilter();v.type="lowpass",v.frequency.value=d.soft?2800:22e3,v.Q.value=.5;let x=f.createGain();return x.gain.value=+d.vol*d.k,y.connect(v),v.connect(x),x.connect(f.destination),d.nodes.push({c:f,lp:v,g:x}),x},o.pinkSrc=(f,y)=>{let v=f._pink;if(!v){let E=f.sampleRate,A=Math.floor(E*12),_=Math.floor(E*1.5),T=A+_,R=new Float32Array(T),P=0,N=0,O=0,C=0,D=0,z=0,H=0;for(let G=0;G<T;G++){let Y=Math.random()*2-1;P=.99886*P+Y*.0555179,N=.99332*N+Y*.0750759,O=.969*O+Y*.153852,C=.8665*C+Y*.3104856,D=.55*D+Y*.5329522,z=-.7616*z-Y*.016898,R[G]=(P+N+O+C+D+z+H+Y*.5362)*.2215*.5,H=Y*.115926}v=f.createBuffer(1,A,E);let j=v.getChannelData(0);for(let G=0;G<A;G++)j[G]=R[G];for(let G=0;G<_;G++){let Y=G/_*Math.PI/2;j[G]=R[G]*Math.sin(Y)+R[A+G]*Math.cos(Y)}f._pink=v}let x=f.createBufferSource();x.buffer=v,x.loop=!0;let b=f.createGain();return b.gain.value=y||1,x.connect(b),b.start=(E,A)=>x.start(E||0,A||0),b.stop=E=>x.stop(E),b},o.api={soft:()=>d.soft,setSoft(f){d.soft=!!f,t.set("ux-soft",f?"1":"0"),u()},vol:()=>+d.vol,setVol(f){d.vol=String(f),t.set(h,d.vol),u()},sleepMin:()=>d.min,sleep(f){d.min=f,d.end=f?Date.now()+f*6e4:0,d.k=1,o.quiet=!1,d.ov&&(d.ov.style.opacity=0),u()}},setInterval(()=>{if(!d.end)return;let f=(d.end-Date.now())/1e3;if(!d.ov){let y=document.createElement("div");y.style.cssText="position:fixed;inset:0;z-index:29;pointer-events:none;background:#1a0d00;opacity:0;transition:opacity 1.2s",document.body.appendChild(y),d.ov=y}if(f<=0){d.end=0,d.min=0,d.k=0,u(),d.ov.style.opacity=.6;try{window.PZ&&PZ.set(!0)}catch{}setTimeout(()=>{d.k=1,o.quiet=!1,u(),d.ov.style.opacity=0,o._sb&&o._sb()},1500);return}f<300&&(o.quiet=!0,d.k=Math.pow(f/300,2),d.ov.style.opacity=(1-f/300)*.6,u())},1e3);{let f=0,y=1200;setInterval(()=>{if(!(document.hidden||window.PZ&&(PZ.on||!PZ.started()))&&(f+=5,f>=y)){y+=1800;let v=document.getElementById("uxrest");v||(v=document.createElement("div"),v.id="uxrest",v.setAttribute("aria-live","polite"),v.style.cssText="position:fixed;left:50%;bottom:max(70px,calc(env(safe-area-inset-bottom) + 60px));transform:translateX(-50%);max-width:min(88vw,420px);text-align:center;background:rgba(20,22,48,.88);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:14px/1.4 system-ui,sans-serif;z-index:28;pointer-events:none;transition:opacity .8s;opacity:0",document.body.appendChild(v)),v.textContent=l("Buen momento para soltar los hombros y tomar un poco de agua.","A good moment to relax your shoulders and have some water.","\u80A9\u306E\u529B\u3092\u629C\u3044\u3066\u3001\u6C34\u3092\u4E00\u53E3\u98F2\u3080\u306E\u306B\u3088\u3044\u9803\u5408\u3044\u3067\u3059\u3002"),v.style.opacity=1,clearTimeout(o._rt),o._rt=setTimeout(()=>v.style.opacity=0,7e3)}},5e3)}o.add([["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Respirar","Breathe","\u547C\u5438"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["En pausa","Paused","\u4E00\u6642\u505C\u6B62\u4E2D"],["Respira con calma.","Breathe calmly.","\u3086\u3063\u304F\u308A\u547C\u5438\u3057\u307E\u3057\u3087\u3046\u3002"],["Todo seguir\xE1 aqu\xED cuando vuelvas.","Everything will be here when you return.","\u623B\u3063\u3066\u304F\u308B\u307E\u3067\u3001\u3059\u3079\u3066\u305D\u306E\u307E\u307E\u3067\u3059\u3002"],["Subt\xEDtulos: s\xED","Captions: on","\u5B57\u5E55: \u30AA\u30F3"],["Subt\xEDtulos: no","Captions: off","\u5B57\u5E55: \u30AA\u30D5"],["Vibraci\xF3n: s\xED","Vibration: on","\u632F\u52D5: \u30AA\u30F3"],["Vibraci\xF3n: no","Vibration: off","\u632F\u52D5: \u30AA\u30D5"],["Una mano: no","One hand: off","\u7247\u624B: \u30AA\u30D5"],["Una mano: derecha","One hand: right","\u7247\u624B: \u53F3"],["Una mano: izquierda","One hand: left","\u7247\u624B: \u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"],["Viento","Wind","\u98A8"],["Grillos","Crickets","\u30B3\u30AA\u30ED\u30AE"],["Fregado","Scrubbing","\u3053\u3059\u308B\u97F3"],["Madera que cruje","Creaking wood","\u304D\u3057\u3080\u6728\u306E\u97F3"],["Estrella fugaz","Shooting star","\u6D41\u308C\u661F"]]),o.add([["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"],["Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["Cansado","Tired","\u3064\u304B\u308C\u305F"],["Inquieto","Restless","\u305D\u308F\u305D\u308F"],["Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"],["Es opcional. Solo ajusto el sonido o te ofrezco respirar.","Optional. I only adjust the sound or offer you a breath.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002"],["Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"],["Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"],["Inhala","Breathe in","\u5438\u3063\u3066"],["Exhala","Breathe out","\u5410\u3044\u3066"],["Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"],["Gracias por respirar. Entremos con calma.","Thank you for breathing. Let us go in gently.","\u6DF1\u547C\u5438\u3042\u308A\u304C\u3068\u3046\u3002\u3086\u3063\u304F\u308A\u5165\u308A\u307E\u3057\u3087\u3046\u3002"],["Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"]]);function g(f){let y=document.createElement("div");y.style.cssText="position:fixed;inset:0;z-index:70;display:grid;place-items:center;align-content:center;gap:18px;background:rgba(20,22,48,.92);color:#fbf1e0;font:600 1.1rem system-ui;text-align:center";let v=document.createElement("div");v.style.cssText="width:110px;height:110px;border-radius:50%;background:radial-gradient(circle,#ffe9b8,#ffb86b 70%);box-shadow:0 0 50px rgba(255,200,120,.45);transform:scale(.55);transition:transform 4s ease-in-out";let x=document.createElement("div"),b=document.createElement("div");b.textContent=l("Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"),b.style.cssText="font-weight:400;opacity:.75;font-size:.9rem";let E=document.createElement("button");E.type="button",E.textContent=l("Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"),E.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#363a66;color:#fbf1e0;font:inherit;font-size:.9rem;cursor:pointer",y.append(b,v,x,E),document.body.appendChild(y);let A=0,_=!0,T,R=N=>{_&&(_=!1,clearTimeout(T),y.remove(),f&&f(N))};E.onclick=()=>R(!1);let P=()=>{if(_){if(A>=5)return R(!0);A++,x.textContent=l("Inhala","Breathe in","\u5438\u3063\u3066"),v.style.transition="transform 4s ease-in-out",v.style.transform="scale(1)",o.hap(8),T=setTimeout(()=>{_&&(x.textContent=l("Exhala","Breathe out","\u5410\u3044\u3066"),v.style.transition="transform 6s ease-in-out",v.style.transform="scale(.55)",T=setTimeout(P,6e3))},4e3)}};P()}o.calm=()=>{let f=t.get("ux-calm",null);if(f==="1")return!0;if(f==="0")return!1;try{return!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)}catch{return!1}},o.setCalm=f=>{t.set("ux-calm",f?"1":"0")},o.about=()=>{let f=document.getElementById("uxAboutOv");if(f){f.remove();return}let y=document.createElement("div");y.id="uxAboutOv",y.setAttribute("role","dialog"),y.setAttribute("aria-modal","true"),y.style.cssText="position:fixed;inset:0;z-index:90;display:grid;place-items:center;background:rgba(14,16,36,.88);padding:12px";let v=document.createElement("div");v.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(92vw,440px);max-height:84vh;overflow:auto;font:15px/1.5 system-ui,sans-serif";let x=document.createElement("h2");x.style.cssText="margin:0 0 6px;font:600 1.2rem system-ui",x.textContent="Tomoshibi";let b=document.createElement("div");b.style.cssText="margin:0 0 10px;opacity:.7;font-size:.85em",b.textContent=l("\u3068\u3082\u3057\u3073 \xB7 Luz de l\xE1mpara \xB7 Juegos Sin Prisa","\u3068\u3082\u3057\u3073 \xB7 Lamplight \xB7 No-Rush Games","\u3068\u3082\u3057\u3073 \xB7 \u306E\u3093\u3073\u308A\u904A\u3079\u308B\u30B2\u30FC\u30E0");let E=document.createElement("p");E.style.cssText="margin:0 0 10px;opacity:.85",E.textContent=l("Juegos tranquilos, sin puntaje ni tiempo. Nada que ganar ni perder.","Calm games with no score and no timer. Nothing to win or lose.","\u30B9\u30B3\u30A2\u3082\u6642\u9593\u3082\u306A\u3044\u3001\u304A\u3060\u3084\u304B\u306A\u30B2\u30FC\u30E0\u3002\u52DD\u3061\u8CA0\u3051\u306F\u3042\u308A\u307E\u305B\u3093\u3002");let A=document.createElement("p");A.style.cssText="margin:0 0 10px;opacity:.85;font-size:.9em",A.textContent=l("Es un juego de descanso: no es un producto m\xE9dico ni de terapia y no sustituye la ayuda de un profesional.","This is a game for rest: it is not a medical or therapy product and does not replace professional help.","\u3053\u308C\u306F\u4F11\u606F\u306E\u305F\u3081\u306E\u30B2\u30FC\u30E0\u3067\u3059\u3002\u533B\u7642\u3084\u30BB\u30E9\u30D4\u30FC\u306E\u88FD\u54C1\u3067\u306F\u306A\u304F\u3001\u5C02\u9580\u5BB6\u306E\u52A9\u3051\u306E\u4EE3\u308F\u308A\u306B\u306F\u306A\u308A\u307E\u305B\u3093\u3002");let _=document.createElement("div");_.style.cssText="display:flex;flex-wrap:wrap;gap:8px;margin:6px 0 12px",[["privacidad.html",l("Privacidad","Privacy","\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC")],["datos.html",l("Mis datos","My data","\u30C7\u30FC\u30BF")],["creditos.html",l("Cr\xE9ditos y licencias","Credits and licenses","\u30AF\u30EC\u30B8\u30C3\u30C8\u3068\u30E9\u30A4\u30BB\u30F3\u30B9")]].forEach(R=>{let P=document.createElement("a");P.href="../"+R[0],P.textContent=R[1],P.style.cssText="color:#ffc77a;min-height:44px;display:inline-flex;align-items:center;padding:0 6px",_.appendChild(P)});let T=document.createElement("button");T.type="button",T.textContent=l("Cerrar","Close","\u9589\u3058\u308B"),T.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",T.onclick=()=>y.remove(),v.append(x,b,E,A,_,T),y.appendChild(v),y.onclick=R=>{R.target===y&&y.remove()},document.body.appendChild(y);try{T.focus()}catch{}},o.say=f=>{let y=document.getElementById("uxsay");y||(y=document.createElement("div"),y.id="uxsay",y.setAttribute("role","status"),y.setAttribute("aria-live","polite"),y.style.cssText="position:fixed;left:50%;bottom:max(90px,calc(env(safe-area-inset-bottom) + 80px));transform:translateX(-50%);max-width:min(88vw,420px);background:rgba(20,22,48,.9);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:500 .85rem/1.35 system-ui;text-align:center;z-index:65;pointer-events:none;transition:opacity .5s;opacity:0",document.body.appendChild(y)),y.textContent=f,y.style.opacity=1,clearTimeout(o._st),o._st=setTimeout(()=>y.style.opacity=0,4200)},o.breathe=g,o.mood=()=>S();function S(){let f=document.getElementById("go");if(!f||document.getElementById("uxmood"))return;let y=document.createElement("div");y.id="uxmood",y.style.cssText="display:flex;flex-direction:column;align-items:center;gap:8px;margin:0 0 14px";let v=document.createElement("div");v.textContent=l("\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"),v.style.cssText="font:600 .95rem system-ui;opacity:.9";let x=document.createElement("div");x.style.cssText="display:flex;flex-wrap:wrap;gap:8px;justify-content:center";let b=document.createElement("div");b.textContent=l("Es opcional. Solo ajusto el sonido o te ofrezco respirar. Es un juego de descanso, no sustituye ayuda profesional.","Optional. I only adjust the sound or offer a breath. This is a game for rest, not a substitute for professional help.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002\u4F11\u606F\u306E\u305F\u3081\u306E\u30B2\u30FC\u30E0\u3067\u3001\u5C02\u9580\u5BB6\u306E\u52A9\u3051\u306E\u4EE3\u308F\u308A\u306B\u306F\u306A\u308A\u307E\u305B\u3093\u3002"),b.style.cssText="font:400 .72rem system-ui;opacity:.6";let E=null,A={};[["calm","Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["tired","Cansado","Tired","\u3064\u304B\u308C\u305F"],["rest","Inquieto","Restless","\u305D\u308F\u305D\u308F"],["think","Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"]].forEach(([_,T,R,P])=>{let N=document.createElement("button");N.type="button",N.textContent=l(T,R,P),N.style.cssText="min-height:44px;padding:8px 14px;border-radius:99px;border:1px solid #5a609a;background:rgba(54,58,102,.7);color:#fbf1e0;font:500 .85rem system-ui;cursor:pointer",N.onclick=()=>{E=E===_?null:_;for(let O in A)A[O].style.borderColor=O===E?"#ffc77a":"#5a609a",A[O].style.background=O===E?"rgba(255,199,122,.22)":"rgba(54,58,102,.7)";o.hap(6)},A[_]=N,x.appendChild(N)}),y.append(v,x,b),f.parentNode.insertBefore(y,f),f.addEventListener("click",()=>{t.set("ux-mood",E||""),E==="tired"&&(o.api.setSoft(!0),+o.api.vol()>.7&&o.api.setVol(".7"),setTimeout(()=>{try{o.say(l("Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"))}catch{}},900)),E==="rest"&&setTimeout(()=>g(),600),E==="think"&&setTimeout(()=>{try{o.say(l("Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"))}catch{}},900)},!0)}let m=o.init;o.init=function(){m.apply(this,arguments);try{S()}catch{}}})();var H1=[0,2,3,7,8],td=(n,e,t)=>Math.min(t,Math.max(e,n)),En=(n,e)=>{try{window.UX&&UX.cap(n,e)}catch{}},ys=(n,e)=>73.42*Math.pow(2,(H1[n%5]+12*(e+Math.floor(n/5)))/12),tt={ctx:null,on:!0,init(){if(this.ctx)return;let n=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.m=n.createGain(),this.m.gain.value=.8,window.UX?UX.out(n,this.m):this.m.connect(n.destination);let e=n.sampleRate*2.6,t=n.createBuffer(2,e,n.sampleRate);for(let C=0;C<2;C++){let D=t.getChannelData(C);for(let z=0;z<e;z++)D[z]=(Math.random()*2-1)*Math.pow(1-z/e,2.4)}this.rv=n.createConvolver(),this.rv.buffer=t;let i=n.createGain();i.gain.value=.7,this.rv.connect(i),i.connect(this.m);let s=n.createBuffer(1,n.sampleRate*3,n.sampleRate),r=s.getChannelData(0);for(let C=0;C<r.length;C++)r[C]=Math.random()*2-1;this.nb=s;let a=C=>{if(C&&window.UX&&UX.pinkSrc){let z=UX.pinkSrc(n,C);return z.start(0,Math.random()*6),z}let D=n.createBufferSource();return D.buffer=s,D.loop=!0,D.start(0,Math.random()*2),D},o=a(.81),l=n.createBiquadFilter();l.type="bandpass",l.frequency.value=520,l.Q.value=.5,this.wg=n.createGain(),this.wg.gain.value=.03,o.connect(l),l.connect(this.wg),this.wg.connect(this.m);let c=a(1.46),h=n.createBiquadFilter();h.type="bandpass",h.frequency.value=2200,h.Q.value=1.2,this.wg2=n.createGain(),this.wg2.gain.value=.008,c.connect(h),h.connect(this.wg2),this.wg2.connect(this.m);let d=a(.9),u=n.createBiquadFilter();u.type="lowpass",u.frequency.value=240,u.Q.value=.4;let p=a(1.2),g=n.createBiquadFilter();g.type="bandpass",g.frequency.value=680,g.Q.value=.7,this.cityG=n.createGain(),this.cityG.gain.value=.026,d.connect(u),u.connect(this.cityG);let S=n.createGain();S.gain.value=.3,p.connect(g),g.connect(S),S.connect(this.cityG),this.cityG.connect(this.m);let m=n.createOscillator(),f=n.createGain();m.frequency.value=.045,f.gain.value=.005,m.connect(f),f.connect(this.cityG.gain),m.start(),this.dg=n.createGain(),this.dg.gain.value=.07,this.dg.connect(this.m),this.dg.connect(this.rv),[1,1.5,2].forEach((C,D)=>{let z=n.createOscillator();z.type="sine",z.frequency.value=73.42*C*(D===2?1.003:1);let H=n.createGain();H.gain.value=D===1?.5:.7,z.connect(H),H.connect(this.dg),z.start()});let y=n.createOscillator(),v=n.createGain();y.frequency.value=.07,v.gain.value=.02,y.connect(v),v.connect(this.dg.gain),y.start();let x=a(1.6),b=n.createBiquadFilter();b.type="bandpass",b.frequency.value=2600,b.Q.value=.8,this.sg=n.createGain(),this.sg.gain.value=0,x.connect(b),b.connect(this.sg),this.sg.connect(this.m),this.sf=b;let E=a(2.69),A=n.createBiquadFilter();A.type="highpass",A.frequency.value=1800,this.rg=n.createGain(),this.rg.gain.value=0,E.connect(A),A.connect(this.rg),this.rg.connect(this.m);let _=a(.71),T=n.createBiquadFilter();T.type="bandpass",T.frequency.value=420,T.Q.value=.6,this.wdg=n.createGain(),this.wdg.gain.value=.012;let R=n.createOscillator(),P=n.createGain();R.frequency.value=.09,P.gain.value=.009,R.connect(P),P.connect(this.wdg.gain),R.start();let N=n.createOscillator(),O=n.createGain();N.frequency.value=.023,O.gain.value=180,N.connect(O),O.connect(T.frequency),N.start(),_.connect(T),T.connect(this.wdg),this.wdg.connect(this.m),this.nextFlute=n.currentTime+6,this.nextKey=n.currentTime+4,this.initPad()},initPad(){let n=this.ctx,e=n.createBiquadFilter();e.type="lowpass",e.frequency.value=500,e.Q.value=.4;let t=n.createGain();t.gain.value=0,e.connect(t),t.connect(this.m);let i=n.createGain();i.gain.value=.5,t.connect(i),i.connect(this.rv);let s=[];for(let r=0;r<4;r++){let a=n.createOscillator(),o=n.createOscillator(),l=n.createGain(),c=n.createGain(),h=n.createOscillator(),d=n.createGain();a.type="sine",o.type="triangle",o.detune.value=r%2?7:-7,l.gain.value=.5,c.gain.value=.18,h.frequency.value=.04+r*.017,d.gain.value=.25,h.connect(d),d.connect(l.gain),a.connect(l),o.connect(c),l.connect(e),c.connect(e),a.start(),o.start(),h.start(),s.push([a,o])}this.pad={f:e,pg:t,vs:s,ch:0},this.mood={prog:0,night:1},this.padChord(!0),this.nextChord=n.currentTime+15,this.padFilter()},setMood(n,e){this.mood={prog:td(n,0,1),night:e==null?1:e},this.pad&&this.ctx&&this.padFilter()},padFilter(){let n=this.mood,e=this.ctx.currentTime,t=n.prog*(1-.35*n.night);this.pad.f.frequency.setTargetAtTime(640+t*1300,e,2.5),this.pad.pg.gain.setTargetAtTime(.078*(1+.15*(1-n.night)),e,2)},padChord(n){let e=this.ctx,t=this.pad,i=e.currentTime,s=146.83,r=this.mood.prog,a=[[-12,-5,0,7],[-12,-4,3,7],[-12,0,7,12],[-12,-5,3,7]],o=[[-12,0,7,15],[-4,3,7,12],[0,7,12,15],[-4,0,7,15]],l=[[0,7,14,19],[0,7,12,15],[-4,3,7,12],[0,7,12,19]],c=r<.5?o:l;t.ch=(t.ch+1+(Math.random()<.3?1:0))%c.length;let h=c[t.ch];t.vs.forEach(([d,u],p)=>{let g=s*Math.pow(2,h[p]/12);d.frequency.setTargetAtTime(g,i,n?.01:3.2),u.frequency.setTargetAtTime(g*1.002,i,n?.01:3.2)}),this.padFilter()},scrub(n){this.ctx&&(n>.2&&this.on&&En("Fregado"),this.sg.gain.setTargetAtTime(Math.min(.12,n*.12),this.ctx.currentTime,.05),this.sf.frequency.setTargetAtTime(1800+n*1800,this.ctx.currentTime,.1))},rain(n){this.ctx&&n&&this.on&&En("Lluvia en el techo",4e4),this.ctx&&this.rg.gain.setTargetAtTime(n?.035:0,this.ctx.currentTime,1.2)},chime(n,e){if(!this.ctx||!this.on)return;En("Campanita",2500);let t=this.ctx.currentTime;[0,2,4].forEach((i,s)=>this.pluck(ys((e||0)+i+5,2),t+s*.15,.09,n))},breathTone(n,e){let t=this.ctx;if(!t||t.state!=="running"||!this.on)return;let i=t.currentTime;[[1,.05],[1.5,.022]].forEach(([s,r])=>{let a=t.createOscillator(),o=t.createGain();a.type="sine",a.frequency.setValueAtTime((n?196:262)*s,i),a.frequency.linearRampToValueAtTime((n?262:196)*s,i+e),n?(o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(r,i+e)):(o.gain.setValueAtTime(r,i),o.gain.linearRampToValueAtTime(0,i+e)),a.connect(o),o.connect(this.m),a.start(i),a.stop(i+e+.1)})},resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},setOn(n){this.on=n,this.m&&this.m.gain.setTargetAtTime(n?.8:0,this.ctx.currentTime,.2)},update(n,e,t){let i=1-e;if(!this.ctx)return;let s=this.ctx.currentTime;if(s>this.nextChord&&(this.nextChord=s+14+Math.random()*3,this.on&&this.padChord()),this.nextAmb||(this.nextAmb=s+6),this.on&&s>this.nextAmb){this.nextAmb=s+18+Math.random()*10;let r=["Viento","Ciudad a lo lejos","Murmullo de agua"][this.ambI=((this.ambI||0)+1)%3];En(r,3e4)}this.wg.gain.setTargetAtTime(.028+Math.min(n,7)*.007,s,.3),this.wg2.gain.setTargetAtTime(.006+Math.min(n,7)*.0016,s,.3),this.nextFrog||(this.nextFrog=s+4),this.on&&s>this.nextFrog&&(this.nextFrog=s+2.5+Math.random()*(i?9:5),this.frog(Math.random()*1.6-.8,i)),this.nextBell||(this.nextBell=s+14),this.on&&s>this.nextBell&&(this.nextBell=s+30+Math.random()*35,this.bell()),s>this.nextFlute&&(this.nextFlute=s+16+Math.random()*16,this.phrase()),this.on&&this.cityStep(s)},key(n,e,t,i,s){let r=this.ctx,a=t,[o]=this.pan(s||0),l=ys(n,e);[[1,1,2.8],[2,.16,1.6],[3.01,.05,.9]].forEach(([c,h,d])=>{let u=r.createOscillator(),p=r.createGain();u.type=c===1?"triangle":"sine",u.frequency.value=l*c,p.gain.setValueAtTime(0,a),p.gain.linearRampToValueAtTime(i*h,a+.03),p.gain.exponentialRampToValueAtTime(1e-4,a+d),u.connect(p),p.connect(o),p.connect(this.rv),u.start(a),u.stop(a+d+.1)})},motif(){let n=this.ctx.currentTime+.1,e=2+(Math.random()*3|0),t=this.kd==null?5+(Math.random()*5|0):this.kd,i=n;for(let s=0;s<e;s++)t=td(t+(Math.random()*5|0)-2,3,11),this.key(t,1+(t>=10?0:1),i,.05,Math.random()*.8-.4),i+=.55+Math.random()*.7;this.kd=t},cityStep(n){this.nCar||(this.nCar=n+7,this.nTrain=n+40,this.nDog=n+55,this.nTram=n+30,this.nCrk=n+2),n>this.nextKey&&(this.nextKey=n+4.5+Math.random()*6,this.motif()),n>this.nCar&&(this.nCar=n+9+Math.random()*14,this.car()),n>this.nTrain&&(this.nTrain=n+75+Math.random()*60,this.train()),n>this.nDog&&(this.nDog=n+45+Math.random()*60,this.dog()),n>this.nTram&&(this.nTram=n+60+Math.random()*60,this.tram());let e=td((this.mood.prog-.2)/.5,0,1);e>0&&n>this.nCrk&&(this.nCrk=n+.12+Math.random()*(1.1-.6*e),this.crackle(e))},car(){let n=this.ctx,e=n.currentTime+.05,t=4+Math.random()*3,i=Math.random()<.5?-1:1;En("Autos a lo lejos",2e4);let s=n.createBufferSource();s.buffer=this.nb,s.loop=!0;let r=n.createBiquadFilter();r.type="bandpass",r.Q.value=1.1,r.frequency.setValueAtTime(380,e),r.frequency.linearRampToValueAtTime(950,e+t*.45),r.frequency.linearRampToValueAtTime(340,e+t);let a=n.createGain(),o=.03*(.6+Math.random()*.6);a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(o,e+t*.45),a.gain.linearRampToValueAtTime(0,e+t);let l=n.createStereoPanner();l.pan.setValueAtTime(-i*.9,e),l.pan.linearRampToValueAtTime(i*.9,e+t),s.connect(r),r.connect(a),a.connect(l),l.connect(this.m),a.connect(this.rv),s.start(e,Math.random()*2),s.stop(e+t+.1)},train(){let n=this.ctx,e=n.currentTime+.1,t=12,i=Math.random()<.5?-1:1,s=34;En("Tren a lo lejos",6e4);let r=n.createStereoPanner();r.pan.setValueAtTime(-i*.85,e),r.pan.linearRampToValueAtTime(i*.85,e+t),r.connect(this.m),[261.6,311.1].forEach(a=>{let o=n.createOscillator(),l=n.createGain(),c=n.createBiquadFilter();o.type="triangle",o.frequency.value=a,c.type="lowpass",c.frequency.value=900,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(.018,e+.25),l.gain.setTargetAtTime(0,e+1.3,.35),o.connect(c),c.connect(l),l.connect(r),l.connect(this.rv),o.start(e),o.stop(e+3.2)});for(let a=0;a<s;a++){let o=a/s,l=.035*Math.pow(Math.sin(Math.PI*(.04+.92*o)),1.4);[0,.1].forEach((c,h)=>{let d=e+.6+a*.3+c,u=n.createBufferSource();u.buffer=this.nb;let p=n.createBiquadFilter();p.type="bandpass",p.frequency.value=h?650:900,p.Q.value=.9;let g=n.createGain();g.gain.setValueAtTime(0,d),g.gain.linearRampToValueAtTime(l*(h?.7:1),d+.004),g.gain.exponentialRampToValueAtTime(1e-4,d+.07),u.connect(p),p.connect(g),g.connect(r),u.start(d,Math.random()*2),u.stop(d+.1)})}{let a=n.createBufferSource();a.buffer=this.nb,a.loop=!0;let o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=170;let l=n.createGain();l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(.05,e+t*.5),l.gain.linearRampToValueAtTime(0,e+t),a.connect(o),o.connect(l),l.connect(r),a.start(e,Math.random()*2),a.stop(e+t+.1)}},dog(){let n=this.ctx,e=n.currentTime+.1,[t]=this.pan(Math.random()*1.4-.7),i=2+(Math.random()*2|0);En("Perro a lo lejos",4e4);for(let s=0;s<i;s++){let r=e+s*(.42+Math.random()*.12),a=n.createOscillator(),o=n.createBiquadFilter(),l=n.createBiquadFilter(),c=n.createGain();a.type="sawtooth",a.frequency.setValueAtTime(330,r),a.frequency.exponentialRampToValueAtTime(210,r+.14),o.type="bandpass",o.frequency.value=800,o.Q.value=2.4,l.type="lowpass",l.frequency.value=1500,c.gain.setValueAtTime(0,r),c.gain.linearRampToValueAtTime(.02,r+.015),c.gain.exponentialRampToValueAtTime(1e-4,r+.17),a.connect(o),o.connect(l),l.connect(c),c.connect(t),c.connect(this.rv),a.start(r),a.stop(r+.2)}},tram(){let n=this.ctx,e=n.currentTime+.1,[t]=this.pan(Math.random()*1.2-.6);En("Tranv\xEDa a lo lejos",6e4),[0,.34].forEach(i=>[[1760,1,1.1],[2637,.3,.6]].forEach(([s,r,a])=>{let o=n.createOscillator(),l=n.createGain(),c=e+i;o.type="sine",o.frequency.value=s,l.gain.setValueAtTime(0,c),l.gain.linearRampToValueAtTime(.012*r,c+.004),l.gain.exponentialRampToValueAtTime(1e-4,c+a),o.connect(l),l.connect(t),l.connect(this.rv),o.start(c),o.stop(c+a+.1)}))},crackle(n){let e=this.ctx,t=e.currentTime,[i]=this.pan(-.35+Math.random()*.2);n>.3&&En("Crepitar del fuego",3e4);let s=1+(Math.random()*3|0);for(let r=0;r<s;r++){let a=t+Math.random()*.2,o=e.createBufferSource();o.buffer=this.nb;let l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=1400+Math.random()*3200,l.Q.value=1.4;let c=e.createGain(),h=(.01+Math.random()*.03)*n;c.gain.setValueAtTime(0,a),c.gain.linearRampToValueAtTime(h,a+.002),c.gain.exponentialRampToValueAtTime(1e-4,a+.02+Math.random()*.05),o.connect(l),l.connect(c),c.connect(i),o.start(a,Math.random()*2),o.stop(a+.12)}},pan(n){let e=this.ctx.createStereoPanner();e.pan.value=Math.max(-1,Math.min(1,n)),e.connect(this.m);let t=this.ctx.createGain();return t.gain.value=.55,t.connect(this.rv),[e]},pluck(n,e,t,i){let s=this.ctx,r=e,[a]=this.pan(i||0);[[1,1],[2.76,.28],[5.4,.1]].forEach(([o,l],c)=>{let h=s.createOscillator();h.type="sine",h.frequency.value=n*o;let d=s.createGain();d.gain.setValueAtTime(0,r),d.gain.linearRampToValueAtTime(t*l,r+.008),d.gain.exponentialRampToValueAtTime(1e-4,r+2.6/(1+c*.6)),h.connect(d),d.connect(a),d.connect(this.rv),h.start(r),h.stop(r+3)})},lantern(n){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime;En("Nota de linterna");let t=Math.floor(Math.random()*5);this.pluck(ys(t+5,2),e,.1,n),this.pluck(ys(t+7,2),e+.16,.07,n)},flute(n,e,t,i,s){let r=this.ctx,a=ys(n,e),o=t,l=r.createOscillator();l.type="sine",l.frequency.value=a;let c=r.createOscillator(),h=r.createGain();c.frequency.value=4.6,h.gain.value=a*.007,c.connect(h),h.connect(l.frequency);let d=r.createBufferSource();d.buffer=this.nb,d.loop=!0;let u=r.createBiquadFilter();u.type="bandpass",u.frequency.value=a*2,u.Q.value=4;let p=r.createGain();p.gain.value=s*.5;let g=r.createGain();g.gain.setValueAtTime(0,o),g.gain.linearRampToValueAtTime(s,o+.35),g.gain.setTargetAtTime(0,o+i,.5),l.connect(g),d.connect(u),u.connect(p),p.connect(g),g.connect(this.m),g.connect(this.rv),l.start(o),c.start(o),d.start(o),l.stop(o+i+2.5),c.stop(o+i+2.5),d.stop(o+i+2.5)},phrase(){if(!this.on)return;En("Flauta shakuhachi");let e=this.ctx.currentTime+.2;[[0,2,2.6],[2,2,1.8],[1,2,1.6],[4,1,3.4]].slice(0,2+Math.floor(Math.random()*3)).forEach(([i,s,r])=>{this.flute(i,s+1,e,r,.05),e+=r*.9})},frog(n,e){En("Croar de ranas",14e3);let t=this.ctx,i=t.currentTime+.05,[s]=this.pan(n),r=Math.random()<.4,a=r?210+Math.random()*40:340+Math.random()*80,o=1+(Math.random()*3|0);for(let l=0;l<o;l++){let c=i+l*(r?.26:.17),h=t.createOscillator(),d=t.createGain(),u=t.createBiquadFilter();h.type="triangle",h.frequency.setValueAtTime(a,c),h.frequency.exponentialRampToValueAtTime(a*1.35,c+.06),h.frequency.exponentialRampToValueAtTime(a*.85,c+.14),u.type="bandpass",u.frequency.value=a*2,u.Q.value=2,d.gain.setValueAtTime(0,c),d.gain.linearRampToValueAtTime((e?.012:.02)*(r?1.2:.8),c+.03),d.gain.exponentialRampToValueAtTime(1e-4,c+.16),h.connect(u),u.connect(d),d.connect(s),d.connect(this.rv),h.start(c),h.stop(c+.2)}},bell(){En("Campana de templo");let n=this.ctx,e=n.currentTime+.1,[t]=this.pan(Math.random()*1.2-.6),i=ys(Math.floor(Math.random()*3),0)*2;[[1,1,7],[2.01,.35,5],[2.76,.28,4],[4.07,.12,2.5],[5.4,.08,2]].forEach(([s,r,a])=>{let o=n.createOscillator(),l=n.createGain();o.type="sine",o.frequency.value=i*s,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(.022*r,e+.01),l.gain.exponentialRampToValueAtTime(1e-4,e+a),o.connect(l),l.connect(t),l.connect(this.rv),o.start(e),o.stop(e+a+.1)})},paddle(n){if(!this.ctx||!this.on)return;let e=this.ctx,t=e.currentTime,[i]=this.pan(n*.7),s=e.createBufferSource();s.buffer=this.nb;let r=e.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1400,t),r.frequency.exponentialRampToValueAtTime(300,t+.5);let a=e.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.09,t+.05),a.gain.exponentialRampToValueAtTime(1e-4,t+.6),s.connect(r),r.connect(a),a.connect(i),s.start(t,Math.random()*2),s.stop(t+.7)},plop(n){if(!this.ctx||!this.on)return;let e=this.ctx,t=e.currentTime,i=e.createOscillator(),s=e.createGain(),r=e.createStereoPanner?e.createStereoPanner():null;i.type="sine",i.frequency.setValueAtTime(520,t),i.frequency.exponentialRampToValueAtTime(190,t+.12),s.gain.setValueAtTime(1e-4,t),s.gain.linearRampToValueAtTime(.05,t+.01),s.gain.exponentialRampToValueAtTime(1e-4,t+.22),i.connect(s),r?(r.pan.value=Math.max(-1,Math.min(1,n||0)),s.connect(r),r.connect(this.m)):s.connect(this.m),i.start(t),i.stop(t+.25)},meow(){if(!this.ctx||!this.on)return;En("Maullido suave",4e3);let n=this.ctx,e=n.currentTime,t=n.createOscillator(),i=n.createBiquadFilter(),s=n.createGain();t.type="triangle",t.frequency.setValueAtTime(520,e),t.frequency.linearRampToValueAtTime(820,e+.14),t.frequency.linearRampToValueAtTime(480,e+.42),i.type="bandpass",i.frequency.value=1500,i.Q.value=1.2,s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.035,e+.07),s.gain.exponentialRampToValueAtTime(1e-4,e+.5),t.connect(i),i.connect(s),s.connect(this.m),s.connect(this.rv),t.start(e),t.stop(e+.55)},creak(){if(!this.ctx||!this.on)return;En("Madera que cruje",4e3);let n=this.ctx,e=n.currentTime,t=n.createOscillator(),i=n.createBiquadFilter(),s=n.createGain();t.type="sawtooth",t.frequency.setValueAtTime(95,e),t.frequency.exponentialRampToValueAtTime(150,e+.18),t.frequency.exponentialRampToValueAtTime(70,e+.4),i.type="lowpass",i.frequency.value=420,s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.03,e+.06),s.gain.exponentialRampToValueAtTime(1e-4,e+.45),t.connect(i),i.connect(s),s.connect(this.m),t.start(e),t.stop(e+.5)},sparkle(){if(!this.ctx||!this.on)return;let n=this.ctx.currentTime;this.pluck(ys(4,4),n,.035,.4),this.pluck(ys(7,4),n+.12,.025,.4)},bump(){if(!this.ctx||!this.on)return;let n=this.ctx,e=n.currentTime,t=n.createOscillator(),i=n.createGain();t.type="sine",t.frequency.setValueAtTime(110,e),t.frequency.exponentialRampToValueAtTime(48,e+.35),i.gain.setValueAtTime(.18,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.45),t.connect(i),i.connect(this.m),t.start(e),t.stop(e+.5)}};function k1(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var pm={},mm={wood:.7,woodV:.7,stone:.55,shingle:.6,rock:.22,grass:.12,bark:.9,sand:.2,leaf:.25,needle:.3,cloth:1.2,straw:1,plank:.8};function G1(n){let t=document.createElement("canvas");t.width=t.height=256;let i=t.getContext("2d"),s=k1(n.length*97+n.charCodeAt(0)),r=(o,l)=>`rgba(${o},${o},${o},${l})`;if(i.fillStyle="#e9e4de",i.fillRect(0,0,256,256),n==="wood"||n==="woodV"){let o=n==="woodV";for(let l=0;l<150;l++){let c=s()*256,h=40+s()*160,d=s()*256,u=.6+s()*1.8;i.strokeStyle=s()>.5?"rgba(95,70,55,"+(.05+s()*.12)+")":"rgba(255,248,238,"+(.05+s()*.1)+")",i.lineWidth=u,i.beginPath(),o?(i.moveTo(c,d),i.bezierCurveTo(c+4,d+h*.3,c-4,d+h*.7,c+2,d+h)):(i.moveTo(d,c),i.bezierCurveTo(d+h*.3,c+4,d+h*.7,c-4,d+h,c+2)),i.stroke()}for(let l=0;l<3;l++){let c=s()*256,h=s()*256;i.strokeStyle="rgba(80,55,40,.22)",i.lineWidth=1.2;for(let d=1;d<4;d++)i.beginPath(),i.ellipse(c,h,d*3.5,d*2.2,o?1.57:0,0,7),i.stroke()}i.strokeStyle="rgba(70,50,40,.18)",i.lineWidth=2,i.beginPath(),o?(i.moveTo(0,0),i.lineTo(0,256)):(i.moveTo(0,0),i.lineTo(256,0)),i.stroke()}else if(n==="stone"){i.fillStyle="#8b86a0",i.fillRect(0,0,256,256);let o=4;for(let l=0;l<o;l++){let c=-(s()*40),h=256/o;for(;c<256;){let d=38+s()*50,u=190+s()*55|0;i.fillStyle=`rgb(${u},${u-3},${u+8})`,i.beginPath(),i.roundRect?i.roundRect(c+3,l*h+3,d-6,h-6,10):i.rect(c+3,l*h+3,d-6,h-6),i.fill(),i.fillStyle="rgba(255,255,255,.18)",i.fillRect(c+9,l*h+7,d-24,3);for(let p=0;p<14;p++)i.fillStyle=r(120,.08),i.fillRect(c+6+s()*(d-12),l*h+6+s()*(h-12),2,2);c+=d}}}else if(n==="shingle"){i.fillStyle="#b8aea6",i.fillRect(0,0,256,256);let o=6,l=256/o;for(let c=0;c<o;c++){let h=c%2*22;for(let d=-22;d<278;d+=44){let u=196+s()*50|0;i.fillStyle=`rgb(${u},${u-6},${u-8})`,i.beginPath(),i.moveTo(d+h+2,c*l),i.lineTo(d+h+42,c*l),i.lineTo(d+h+42,c*l+l*.55),i.quadraticCurveTo(d+h+22,c*l+l*1.15,d+h+2,c*l+l*.55),i.closePath(),i.fill(),i.strokeStyle="rgba(60,40,40,.28)",i.lineWidth=1.5,i.stroke(),i.fillStyle="rgba(255,255,255,.2)",i.fillRect(d+h+8,c*l+3,26,3)}}}else if(n==="rock"){i.fillStyle="#d4d0dc",i.fillRect(0,0,256,256);for(let o=0;o<60;o++){let l=s()*256,c=s()*256,h=10+s()*40,d=170+s()*70|0;i.fillStyle=`rgba(${d},${d-4},${d+10},.35)`,i.beginPath(),i.ellipse(l,c,h,h*.6,s()*3,0,7),i.fill()}for(let o=0;o<30;o++){i.strokeStyle="rgba(50,45,80,"+(.12+s()*.2)+")",i.lineWidth=1+s()*2,i.beginPath();let l=s()*256,c=s()*256;i.moveTo(l,c);for(let h=0;h<4;h++)l+=s()*40-20,c+=s()*30,i.lineTo(l,c);i.stroke()}}else if(n==="grass"){i.fillStyle="#e8efe0",i.fillRect(0,0,256,256);for(let o=0;o<900;o++){let l=s()*256,c=s()*256,h=s()>.5?"rgba(120,170,110,":"rgba(255,255,220,";i.strokeStyle=h+(.08+s()*.2)+")",i.lineWidth=1,i.beginPath(),i.moveTo(l,c),i.lineTo(l+s()*4-2,c-3-s()*7),i.stroke()}for(let o=0;o<20;o++)i.fillStyle="rgba(255,255,255,.3)",i.beginPath(),i.arc(s()*256,s()*256,1.5+s()*1.5,0,7),i.fill()}else if(n==="bark"){i.fillStyle="#d9cfc6",i.fillRect(0,0,256,256);for(let o=0;o<70;o++){let l=s()*256;i.strokeStyle="rgba(60,45,40,"+(.12+s()*.25)+")",i.lineWidth=1+s()*3,i.beginPath(),i.moveTo(l,0),i.bezierCurveTo(l+8,256*.3,l-8,256*.6,l+3,256),i.stroke()}}else if(n==="leaf"){i.fillStyle="#ecebe4",i.fillRect(0,0,256,256);for(let o=0;o<640;o++){let l=s()*256,c=s()*256,h=3.5+s()*8,d=s()>.45?215+s()*40|0:120+s()*60|0;for(let u of[-256,0,256])for(let p of[-256,0,256])l+u<-30||l+u>286||c+p<-30||c+p>286||(i.fillStyle=`rgba(${d},${d},${d-6},${.35+s()*.4})`,i.beginPath(),i.ellipse(l+u,c+p,h,h*.62,s()*3.14,0,7),i.fill())}for(let o=0;o<260;o++){let l=s()*256,c=s()*256;i.fillStyle="rgba(70,80,60,.3)",i.beginPath(),i.ellipse(l,c+5,5,2.4,0,0,7),i.fill(),i.fillStyle="rgba(255,255,235,.5)",i.beginPath(),i.ellipse(l-1,c-2,3.6,1.5,-.5,0,7),i.fill()}}else if(n==="cloth"){i.fillStyle="#e6e6e8",i.fillRect(0,0,256,256);for(let o=0;o<256;o+=4)i.fillStyle="rgba(90,95,110,"+(.07+s()*.06)+")",i.fillRect(o,0,1.6,256),i.fillStyle="rgba(255,255,255,"+(.1+s()*.08)+")",i.fillRect(0,o,256,1.6);for(let o=0;o<9;o++){let l=s()*256,c=s()*256;i.strokeStyle="rgba(60,65,85,.2)",i.lineWidth=2.5,i.beginPath(),i.moveTo(l,c),i.bezierCurveTo(l+20,c+30,l-18,c+60,l+6,c+95),i.stroke(),i.strokeStyle="rgba(255,255,255,.22)",i.lineWidth=2,i.beginPath(),i.moveTo(l+4,c),i.bezierCurveTo(l+24,c+30,l-14,c+60,l+10,c+95),i.stroke()}for(let o=0;o<5;o++)i.fillStyle="rgba(70,75,95,.25)",i.fillRect(s()*256,s()*256,10+s()*10,1.5)}else if(n==="straw"){i.fillStyle="#e8e0cc",i.fillRect(0,0,256,256);for(let o=-256;o<256*2;o+=7)i.strokeStyle="rgba(120,90,40,"+(.18+s()*.2)+")",i.lineWidth=2,i.beginPath(),i.moveTo(o,0),i.lineTo(o+256,256),i.stroke(),i.strokeStyle="rgba(255,250,225,"+(.25+s()*.2)+")",i.beginPath(),i.moveTo(o+3,0),i.lineTo(o+3-256,256),i.stroke();for(let o=0;o<256;o+=7)i.strokeStyle="rgba(110,80,35,.22)",i.lineWidth=1.5,i.beginPath(),i.moveTo(o,0),i.lineTo(o,256),i.stroke()}else if(n==="plank"){i.fillStyle="#e9e0d6",i.fillRect(0,0,256,256);let o=5,l=256/o;for(let c=0;c<o;c++){let h=c*l;i.fillStyle="rgba("+(200+s()*40|0)+","+(190+s()*30|0)+",175,.45)",i.fillRect(0,h,256,l);for(let d=0;d<22;d++){let u=h+3+s()*(l-6);i.strokeStyle=s()>.5?"rgba(95,70,55,"+(.1+s()*.14)+")":"rgba(255,248,238,.18)",i.lineWidth=.8+s()*1.5,i.beginPath(),i.moveTo(s()*60,u),i.bezierCurveTo(80,u+3,160,u-3,256,u+1),i.stroke()}i.fillStyle="rgba(60,42,32,.55)",i.fillRect(0,h,256,2.5);for(let d of[18,238])i.fillStyle="rgba(50,40,36,.55)",i.beginPath(),i.arc(d,h+l/2,2.2,0,7),i.fill()}}else if(n==="needle"){i.fillStyle="#d7dbd2",i.fillRect(0,0,256,256);for(let o=0;o<8;o++){let l=o*256/8;for(let c=-10;c<266;c+=14){let h=c+o%2*7+s()*3,d=18+s()*10,u=s()>.5?235:130+s()*50|0;i.strokeStyle=`rgba(${u},${u},${u-10},${.45+s()*.4})`,i.lineWidth=2+s()*2,i.lineCap="round",i.beginPath(),i.moveTo(h,l),i.lineTo(h+s()*8-4,l+d),i.stroke()}i.strokeStyle="rgba(50,70,50,.3)",i.lineWidth=3,i.beginPath(),i.moveTo(0,l+256/8-2),i.lineTo(256,l+256/8-2),i.stroke()}}let a=new On(t);return a.wrapS=a.wrapT=os,a.colorSpace=rn,a.anisotropy=8,a}var nd=n=>pm[n]||(pm[n]=G1(n)),id=(()=>{let n=new Uint8Array([104,138,172,206,236,255]),e=new Is(n,6,1,Fr);return e.minFilter=e.magFilter=en,e.generateMipmaps=!1,e.needsUpdate=!0,e})();function gm(n,e,t,i,s){let r=n.attributes.uv,a=[[i,t],[i,t],[e,i],[e,i],[e,t],[e,t]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let c=o*4+l;r.setXY(c,r.getX(c)*a[o][0]*s,r.getY(c)*a[o][1]*s)}r.needsUpdate=!0}function xm(n,e,t){let i=Object.assign({color:n,gradientMap:id},t||{});e&&(i.map=nd(e));let s=new ki(i);return s.userData.kind=e||null,s}function ym(){let n=document.createElement("div");n.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:4;background:radial-gradient(ellipse at 50% 45%,rgba(0,0,0,0) 55%,rgba(24,20,56,.5) 100%)",document.body.appendChild(n)}var Mt=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),sd=(n,e,t)=>n+(e-n)*t,vt=n=>document.getElementById(n);function Jt(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var ue=4.2,io=(n,e)=>{n._t!==e&&(n._t=e,n.textContent=e)},zc=(n,e,t)=>{let i=document.createElement("canvas");return i.width=n,i.height=e,t(i.getContext("2d"),n,e),new On(i)},mt,Hs;function _m(){mt=zc(128,128,n=>{let e=n.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,128,128)}),Hs=zc(128,128,n=>{for(let e=0;e<9;e++){let t=40+Math.random()*48,i=44+Math.random()*40,s=18+Math.random()*18,r=n.createRadialGradient(t,i,0,t,i,s);r.addColorStop(0,"rgba(255,255,255,.5)"),r.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=r,n.fillRect(0,0,128,128)}})}var pt=(n,e,t,i,s)=>{let r=new Sa(new Tr({map:n,color:e,transparent:!0,opacity:i==null?1:i,depthWrite:!1,blending:s?Vi:fs}));return r.scale.set(t,t,1),r};var it={started:!1,rainOn:!1,T:0},Xt={},Hc=[],nn=vt("c"),Hn=new Uc({canvas:nn,antialias:!0,powerPreference:"high-performance"});Hn.setPixelRatio(Math.min(devicePixelRatio||1,1.5));Hn.shadowMap.enabled=!0;Hn.shadowMap.type=Gl;Hn.shadowMap.autoUpdate=!1;Hn.shadowMap.needsUpdate=!0;var ze=new _a;ze.fog=new ya(new Ce("#e3a9a0"),40,240);var tn=new un(50,1,.1,900);function kc(){let n=innerWidth,e=innerHeight;Hn.setSize(n,e,!1),Hn.shadowMap.needsUpdate=!0,tn.aspect=n/e,tn.fov=n/e<1.15?66:50,tn.updateProjectionMatrix()}addEventListener("resize",kc);kc();var bm=[["Piso","Floor","\u5E8A"],["Escalera","Stairs","\u968E\u6BB5"],["Barandal laqueado","Lacquered railing","\u6F06\u306E\u624B\u3059\u308A"],["Tejado","Tiled roof","\u74E6\u5C4B\u6839"],["Lucernario","Skylight","\u5929\u7A93"],["Shoji","Shoji screen","\u969C\u5B50"],["Librero","Bookshelf","\u672C\u68DA"],["Fut\xF3n","Futon","\u5E03\u56E3"],["Farol de papel","Paper lantern","\u7D19\u306E\u884C\u706F"],["Farolillos","Paper lanterns","\u63D0\u706F"],["Pergamino","Hanging scroll","\u639B\u3051\u8EF8"],["Bons\xE1is","Bonsai","\u76C6\u683D"],["Nichos de piedra","Stone niches","\u77F3\u306E\u304F\u307C\u307F"]],V1=[["Cepillo ancho","Wide brush","\u5E45\u5E83\u30D6\u30E9\u30B7"],["Limpias con un cepillo m\xE1s grande","You clean with a bigger brush","\u5927\u304D\u306A\u30D6\u30E9\u30B7\u3067\u6383\u9664\u3067\u304D\u307E\u3059"],["Mochila de herramientas","Tool backpack","\u9053\u5177\u30EA\u30E5\u30C3\u30AF"],["Ganas 10% m\xE1s de tablas al limpiar","You earn 10% more planks when cleaning","\u6383\u9664\u3067\u5F97\u3089\u308C\u308B\u677F\u304C10%\u5897\u3048\u307E\u3059"],["Farol de mano","Hand lantern","\u624B\u6301\u3061\u30E9\u30F3\u30BF\u30F3"],["Ilumina el \xE1rea mientras limpias","Lights up the area while you clean","\u6383\u9664\u4E2D\u306B\u5468\u308A\u3092\u7167\u3089\u3057\u307E\u3059"],["Cubeta de lluvia","Rain bucket","\u96E8\u306E\u30D0\u30B1\u30C4"],["Suena lluvia suave sobre el techo","Soft rain plays on the roof","\u5C4B\u6839\u306B\u3084\u3055\u3057\u3044\u96E8\u97F3\u304C\u97FF\u304D\u307E\u3059"],["Brasero de carb\xF3n","Charcoal brazier","\u706B\u9262"],["Calor guardado para la noche","Warmth stored for the night","\u591C\u306E\u305F\u3081\u306B\u84C4\u3048\u305F\u306C\u304F\u3082\u308A"],["Papel washi","Washi paper","\u548C\u7D19"],["Entra la luz del atardecer","Sunset light comes in","\u5915\u66AE\u308C\u306E\u5149\u304C\u5DEE\u3057\u8FBC\u307F\u307E\u3059"],["Novela de monta\xF1a","Mountain novel","\u5C71\u306E\u5C0F\u8AAC"],["Un libro para las noches","A book for the evenings","\u591C\u306E\u305F\u3081\u306E\u4E00\u518A"],["Manta tejida","Woven blanket","\u624B\u7DE8\u307F\u306E\u30D6\u30E9\u30F3\u30B1\u30C3\u30C8"],["Para las noches fr\xEDas","For cold nights","\u5BD2\u3044\u591C\u306E\u305F\u3081\u306B"],["Mecha de aceite","Oil wick","\u6CB9\u306E\u706F\u82AF"],["Una luz amplia sobre la cama","A broad light over the bed","\u30D9\u30C3\u30C9\u3092\u5E83\u304F\u7167\u3089\u3059\u5149"],["Farolillos de colores","Colored lanterns","\u8272\u3068\u308A\u3069\u308A\u306E\u63D0\u706F"],["Las luces se vuelven de colores","The lights turn colorful","\u30E9\u30A4\u30C8\u304C\u8272\u3068\u308A\u3069\u308A\u306B\u306A\u308A\u307E\u3059"],["Pincel de tinta sumi-e","Sumi-e ink brush","\u58A8\u7D75\u306E\u7B46"],["Un recuerdo de la monta\xF1a","A memory of the mountain","\u5C71\u306E\u601D\u3044\u51FA"],["Semillas de lavanda","Lavender seeds","\u30E9\u30D9\u30F3\u30C0\u30FC\u306E\u7A2E"],["Huele a campo","Smells like the countryside","\u91CE\u539F\u306E\u9999\u308A\u304C\u3057\u307E\u3059"],["Luci\xE9rnagas en frasco","Fireflies in a jar","\u74F6\u306E\u4E2D\u306E\u30DB\u30BF\u30EB"],["M\xE1s luci\xE9rnagas afuera","More fireflies outside","\u5916\u306B\u3082\u3063\u3068\u30DB\u30BF\u30EB\u304C\u98DB\u3073\u307E\u3059"]],Mm=[["el piso","the floor","\u5E8A"],["la terraza y la escalera","the terrace and the stairs","\u30C6\u30E9\u30B9\u3068\u968E\u6BB5"],["el interior","the interior","\u5BA4\u5185"],["el techo y los nichos","the roof and the niches","\u5C4B\u6839\u3068\u58C1\u306E\u304F\u307C\u307F"]];UX.add(bm);UX.add(V1);UX.add(Mm);UX.add([["Caba\xF1a 3D","Cabin 3D","\u30AD\u30E3\u30D3\u30F3 3D"],["prototipo","prototype","\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7"],["Caba\xF1a 3D \xB7 prototipo","Cabin 3D \xB7 prototype","\u30AD\u30E3\u30D3\u30F3 3D \xB7 \u30D7\u30ED\u30C8\u30BF\u30A4\u30D7"],["Una caba\xF1a de madera y piedra en lo alto de un acantilado, de noche. L\xEDmpiala y rep\xE1rala poco a poco, sin prisa.","A cabin of wood and stone high on a cliff, at night. Clean and repair it little by little, with no rush.","\u5D16\u306E\u4E0A\u306B\u305F\u305F\u305A\u3080\u3001\u6728\u3068\u77F3\u306E\u5C0F\u3055\u306A\u5C0F\u5C4B\u3002\u591C\u306E\u9759\u3051\u3055\u306E\u4E2D\u3001\u6025\u304C\u305A\u5C11\u3057\u305A\u3064\u6383\u9664\u3057\u3066\u76F4\u3057\u3066\u3044\u304D\u307E\u3057\u3087\u3046\u3002"],["Arrastra sobre la suciedad para fregarla y ganar tablas.","Drag over the grime to scrub it and earn planks.","\u6C5A\u308C\u306E\u4E0A\u3092\u306A\u305E\u3063\u3066\u3053\u3059\u308A\u3001\u677F\u3092\u96C6\u3081\u307E\u3057\u3087\u3046\u3002"],["Toca un objeto limpio (o su bot\xF3n de abajo) para repararlo.","Tap a clean object (or its button below) to repair it.","\u304D\u308C\u3044\u306B\u306A\u3063\u305F\u3082\u306E\u3092\u30BF\u30C3\u30D7\uFF08\u307E\u305F\u306F\u4E0B\u306E\u30DC\u30BF\u30F3\uFF09\u3067\u4FEE\u7406\u3057\u307E\u3059\u3002"],["Arrastra el fondo para girar; pellizca o usa la rueda para acercar.","Drag the background to rotate; pinch or use the wheel to zoom.","\u80CC\u666F\u3092\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u3001\u30D4\u30F3\u30C1\u3084\u30DB\u30A4\u30FC\u30EB\u3067\u30BA\u30FC\u30E0\u3057\u307E\u3059\u3002"],["Mejor con auriculares. Tu avance se guarda en este dispositivo.","Best with headphones. Your progress is saved on this device.","\u30D8\u30C3\u30C9\u30DB\u30F3\u63A8\u5968\u3002\u9032\u307F\u5177\u5408\u306F\u3053\u306E\u7AEF\u672B\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002"],["Entrar a la caba\xF1a","Enter the cabin","\u5C0F\u5C4B\u306B\u5165\u308B"],["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["Arrastra sobre la suciedad para limpiar \xB7 arrastra el fondo para girar \xB7 pellizca para acercar","Drag over the grime to clean \xB7 drag the background to rotate \xB7 pinch to zoom","\u6C5A\u308C\u3092\u306A\u305E\u3063\u3066\u6383\u9664 \xB7 \u80CC\u666F\u3092\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2 \xB7 \u30D4\u30F3\u30C1\u3067\u30BA\u30FC\u30E0"],["Inhala","Inhale","\u5438\u3063\u3066"],["Gracias por respirar","Thank you for breathing","\u547C\u5438\u3057\u3066\u304F\u308C\u3066\u3042\u308A\u304C\u3068\u3046"],["Sost\xE9n","Hold","\u6B62\u3081\u3066"],["Exhala","Exhale","\u5410\u3044\u3066"],["Acercar","Zoom in","\u30BA\u30FC\u30E0\u30A4\u30F3"],["Alejar","Zoom out","\u30BA\u30FC\u30E0\u30A2\u30A6\u30C8"],["Centrar vista","Center view","\u8996\u70B9\u3092\u623B\u3059"],["Esencial","Essential","\u5FC5\u9808"],["Funcional","Functional","\u6A5F\u80FD"],["Decoraci\xF3n","Decoration","\u98FE\u308A"],["Colecci\xF3n","Collection","\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"],["Vac\xEDa. Cada reparaci\xF3n te da un objeto.","Empty. Every repair gives you an item.","\u7A7A\u3063\u307D\u3002\u4FEE\u7406\u3059\u308B\u305F\u3073\u306B\u30A2\u30A4\u30C6\u30E0\u304C\u3082\u3089\u3048\u307E\u3059\u3002"],["Reparado","Repaired","\u4FEE\u7406\u6E08\u307F"],["Tu caba\xF1a est\xE1 lista. Buen trabajo.","Your cabin is ready. Nice work.","\u5C0F\u5C4B\u304C\u5B8C\u6210\u3057\u307E\u3057\u305F\u3002\u3088\u304F\u3067\u304D\u307E\u3057\u305F\u3002"],["Limpia m\xE1s esa zona antes de repararla","Clean that area more before repairing it","\u4FEE\u7406\u3059\u308B\u524D\u306B\u3001\u3082\u3046\u5C11\u3057\u305D\u306E\u5834\u6240\u3092\u6383\u9664\u3057\u307E\u3057\u3087\u3046"],["Ronronea\u2026","Purring\u2026","\u30B4\u30ED\u30B4\u30ED\u2026"],["Caba\xF1a reiniciada","Cabin reset","\u5C0F\u5C4B\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F"],["Llevas un buen rato aqu\xED: respira hondo y estira un poco los hombros.","You have been here a while: take a deep breath and stretch your shoulders a little.","\u3057\u3070\u3089\u304F\u904A\u3093\u3067\u3044\u307E\u3059\u306D\u3002\u6DF1\u547C\u5438\u3057\u3066\u3001\u80A9\u3092\u8EFD\u304F\u4F38\u3070\u3057\u307E\u3057\u3087\u3046\u3002"],["\xBFReiniciar la caba\xF1a desde cero?","Restart the cabin from scratch?","\u5C0F\u5C4B\u3092\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3057\u307E\u3059\u304B\uFF1F"],["Los farolillos suben al cielo","Lanterns drift up into the sky","\u30E9\u30F3\u30BF\u30F3\u304C\u591C\u7A7A\u3078\u6607\u3063\u3066\u3044\u304D\u307E\u3059"],["Ciudad a lo lejos","Distant city","\u9060\u304F\u306E\u8857"],["Autos a lo lejos","Cars far away","\u9060\u304F\u306E\u8ECA"],["Tren a lo lejos","Distant train","\u9060\u304F\u306E\u96FB\u8ECA"],["Perro a lo lejos","Distant dog","\u9060\u304F\u306E\u72AC"],["Tranv\xEDa a lo lejos","Distant tram","\u9060\u304F\u306E\u8DEF\u9762\u96FB\u8ECA"],["Crepitar del fuego","Crackling fire","\u85AA\u306E\u306F\u305C\u308B\u97F3"],["Campanita","Little bell","\u5C0F\u3055\u306A\u9234"],["Lluvia en el techo","Rain on the roof","\u5C4B\u6839\u306E\u96E8\u97F3"],["Croar de ranas","Frogs croaking","\u30AB\u30A8\u30EB\u306E\u9CF4\u304D\u58F0"],["Murmullo de agua","Water murmur","\u6C34\u306E\u305B\u305B\u3089\u304E"],["Maullido suave","Soft meow","\u3084\u3055\u3057\u3044\u9CF4\u304D\u58F0"]]);var rd=(n,e)=>{let t=W1.get(n);return t?t[e]:n},W1=new Map(bm.concat(Mm).map(n=>[n[0].toLowerCase(),[n[0],n[1].toLowerCase(),n[2]]])),vm=(n,e)=>n.split(", ").map(t=>rd(t,e)).join(e===1?", ":"\u3001");UX.rx([[/^Tablas: (\d+)$/,(n,e)=>e===1?"Planks: "+n[1]:"\u677F: "+n[1]],[/^Necesita: (.+)$/,(n,e)=>(e===1?"Needs: ":"\u5FC5\u8981: ")+vm(n[1],e)],[/^Limpia la zona · (\d+)%$/,(n,e)=>(e===1?"Clean the area \xB7 ":"\u30A8\u30EA\u30A2\u3092\u6383\u9664 \xB7 ")+n[1]+"%"],[/^Faltan (\d+) tablas$/,(n,e)=>e===1?n[1]+" more planks needed":"\u3042\u3068\u677F"+n[1]+"\u679A"],[/^Listo · (\d+) tablas$/,(n,e)=>e===1?"Ready \xB7 "+n[1]+" planks":"\u6E96\u5099OK \xB7 \u677F"+n[1]+"\u679A"],[/^Faltan (\d+) tablas\. Sigue limpiando\.$/,(n,e)=>e===1?n[1]+" more planks needed. Keep cleaning.":"\u3042\u3068\u677F"+n[1]+"\u679A\u3002\u6383\u9664\u3092\u7D9A\u3051\u307E\u3057\u3087\u3046\u3002"],[/^Primero repara: (.+)$/,(n,e)=>(e===1?"Repair first: ":"\u5148\u306B\u4FEE\u7406: ")+vm(n[1],e)],[/^(.+) reparado\. Ganaste: (.+)$/,(n,e,t)=>e===1?t(n[1])+" repaired. You got: "+t(n[2]):t(n[1])+"\u3092\u4FEE\u7406\u3057\u307E\u3057\u305F\u3002\u7372\u5F97: "+t(n[2])],[/^(.+) ya está reparado$/,(n,e,t)=>e===1?t(n[1])+" is already repaired":t(n[1])+"\u306F\u3082\u3046\u4FEE\u7406\u6E08\u307F\u3067\u3059"],[/^Siguiente: (repara|limpia) (.+?)( \(toca su botón\))?$/,(n,e)=>{let t=n[1]==="repara",i=rd(n[2],e);return e===1?"Next: "+(t?"repair":"clean")+" the "+i+(n[3]?" (tap its button)":""):"\u6B21: "+i+"\u3092"+(t?"\u4FEE\u7406":"\u6383\u9664")+(n[3]?"\uFF08\u30DC\u30BF\u30F3\u3092\u30BF\u30C3\u30D7\uFF09":"")}],[/^Mientras no estabas, la humedad volvió a ensuciar (.+)$/,(n,e)=>{let t=rd(n[1],e);return e===1?"While you were away, damp dirtied "+t+" again.":"\u7559\u5B88\u306E\u3042\u3044\u3060\u306B\u6E7F\u6C17\u3067\u3001"+t+"\u304C\u307E\u305F\u6C5A\u308C\u3066\u3057\u307E\u3044\u307E\u3057\u305F\u3002"}]]);try{document.title=UX.tr(document.title)}catch{}var Sm=["Esencial","Funcional","Decoraci\xF3n"],sn=[{id:"piso",tier:0,name:"Piso",cost:10,focus:[1.5,ue,1],reward:["Cepillo ancho","Limpias con un cepillo m\xE1s grande"]},{id:"escalera",tier:0,name:"Escalera",cost:14,needs:["piso"],focus:[12,1,2.8],reward:["Mochila de herramientas","Ganas 10% m\xE1s de tablas al limpiar"]},{id:"barandal",tier:0,name:"Barandal laqueado",cost:14,needs:["piso"],focus:[2.5,ue+.6,3.9],reward:["Farol de mano","Ilumina el \xE1rea mientras limpias"]},{id:"techo",tier:0,name:"Tejado",cost:24,needs:["piso"],focus:[1.5,8.2,.5],reward:["Cubeta de lluvia","Suena lluvia suave sobre el techo"]},{id:"panel",tier:1,name:"Lucernario",cost:20,needs:["techo"],focus:[4.4,8.4,.9],reward:["Brasero de carb\xF3n","Calor guardado para la noche"]},{id:"ventana",tier:1,name:"Shoji",cost:16,needs:["techo"],focus:[2.4,6.1,-2.8],reward:["Papel washi","Entra la luz del atardecer"]},{id:"librero",tier:1,name:"Librero",cost:14,needs:["piso"],focus:[-1.4,5.6,-2.5],reward:["Novela de monta\xF1a","Un libro para las noches"]},{id:"cama",tier:1,name:"Fut\xF3n",cost:14,needs:["techo"],focus:[4.5,5,-1.6],reward:["Manta tejida","Para las noches fr\xEDas"]},{id:"lampara",tier:2,name:"Farol de papel",cost:10,needs:["panel"],focus:[1.5,7,-1],reward:["Mecha de aceite","Una luz amplia sobre la cama"]},{id:"luces",tier:2,name:"Farolillos",cost:14,needs:["panel","barandal"],focus:[1.5,7,2.5],reward:["Farolillos de colores","Las luces se vuelven de colores"]},{id:"cuadro",tier:2,name:"Pergamino",cost:10,needs:["librero"],focus:[.55,6.4,-2.8],reward:["Pincel de tinta sumi-e","Un recuerdo de la monta\xF1a"]},{id:"plantas",tier:2,name:"Bons\xE1is",cost:8,needs:["barandal"],focus:[6.9,ue+.6,3],reward:["Semillas de lavanda","Huele a campo"]},{id:"nichos",tier:2,name:"Nichos de piedra",cost:12,needs:["lampara"],focus:[-9.8,1,5.5],reward:["Luci\xE9rnagas en frasco","M\xE1s luci\xE9rnagas afuera"]}];var ad=new Map,Em=new Map,so=(n,e)=>n.forEach(t=>Em.set(t.toLowerCase(),e));so(["#dcae92","#c89479","#d4a98c","#c49a7d","#d2a58a"],"wood");so(["#b0806a","#d9b995","#a1918c","#dcbc98","#d4b290","#e0c19e","#a8978c","#9d8c82","#b0a095","#ecc9ae","#f1d3bb","#e0c2a2","#b3a398","#8f6f66","#9a7a70","#8e7f7a","#f2d6c0","#e7c9ae"],"woodV");so(["#a9a4c6","#8f8ab0","#aaa5c8","#9a95bb","#b4afd2","#8e89b0"],"stone");so(["#e7a293","#9b8b88"],"shingle");so(["#9fb9a0"],"grass");var X1={"#dcae92":"#cfa578","#c89479":"#b98b5f","#d4a98c":"#c79a6e","#c49a7d":"#b2865a","#d2a58a":"#c29868","#b0806a":"#5a3d2e","#8f6f66":"#4b342a","#9a7a70":"#573d31","#d9b995":"#dcc194","#dcbc98":"#dcc194","#d4b290":"#d3b784","#e0c19e":"#e2c99d","#e0c2a2":"#dcc194","#ecc9ae":"#8e3d2e","#f1d3bb":"#a14a38","#e7c9ae":"#d9bf92","#f2d6c0":"#e6d3ae","#f6c3b4":"#707c96","#e7a293":"#4f596f","#9b8b88":"#3e4659","#a9a4c6":"#aaa59d","#8f8ab0":"#8c877f","#aaa5c8":"#b1aca3","#9a95bb":"#9b968d","#b4afd2":"#bdb8ae","#8e89b0":"#837e76","#e6a091":"#2f4a74","#7fc3bd":"#9a6a3c","#d9a9cb":"#6a7f58","#a6cf92":"#c9a14a","#a1918c":"#8d7f74"},ge=(n,e)=>{let t=n+(e?JSON.stringify(e):"");return ad.has(t)||ad.set(t,xm(X1[String(n).toLowerCase()]||n,Em.get(String(n).toLowerCase()),Object.assign({flatShading:!0},e||{}))),ad.get(t)};function ae(n,e,t,i,s,r,a,o,l){let c=typeof i=="string"?ge(i,l):i,h=new xt(n,e,t),d=c.userData&&c.userData.kind;d&&gm(h,n,e,t,mm[d]);let u=new ie(h,c);return u.position.set(s,r,a),o&&o.add(u),u}var q1=["#8cbb78","#7faa70","#9a92b6"],od;function Y1(n,e,t,i,s,r){r=r||{},od||(od=new Ct(1,0));let a=new ie(od,ge(r.c||q1[Math.random()*3|0]));return a.position.set(e,t,i),a.rotation.x=r.rx||0,a.userData={item:n.id,base:r.wall?[s,s,s*.3]:[s,s*.28,s],s:1},a.scale.set(...a.userData.base),n.g.add(a),n.blobs.push(a),a}function Tn(n,e,t,i,s,r,a){let o=Jt(t);for(let l=0;l<e;l++){let c=i(o);Y1(n,c[0],c[1],c[2],s+o()*(r-s),a)}}function Xi(n){let e=n.userData.s,t=n.userData.base;n.scale.set(t[0]*e,t[1]*e,t[2]*e),n.visible=e>.04}var ld="cabana3d-v1",ro=.55,Z1=200,se={repaired:{},spent:0,best:0,done:!1,decor:{},own:{},mem:0,notes:[],vis:{},ltr:{},cnt:{}},cd=n=>sn.find(e=>e.id===n),J1=()=>Z1*(se.repaired.escalera?1.1:1),ks=()=>Math.floor(se.best*J1())-se.spent,Gs=()=>sn.filter(n=>se.repaired[n.id]).length,Gc=n=>cd(n).name.toLowerCase(),_s=n=>(n.needs||[]).filter(e=>!se.repaired[e]);function kr(){sn.forEach(n=>{let e=Xt[n.id],t=!!se.repaired[n.id];e.b.visible=!t,e.f.visible=t}),it.rainOn=!!se.repaired.techo,tt.rain(it.rainOn),Hn.shadowMap.needsUpdate=!0}function kn(){try{let n={};Object.values(Xt).forEach(e=>n[e.id]=e.blobs.map(t=>+t.userData.s.toFixed(2))),localStorage.setItem(ld,JSON.stringify({r:se.repaired,s:se.spent,b:se.best,d:se.done,t:Date.now(),bl:n,dc:se.decor,ow:se.own,me:se.mem,nt:se.notes,vv:se.vis,lt:se.ltr,ct:se.cnt}))}catch{}}var $1=[[["piso"],2,10,"el piso"],[["escalera","barandal","plantas","luces"],10,26,"la terraza y la escalera"],[["librero","cama","ventana","cuadro","lampara"],26,50,"el interior"],[["techo","panel","nichos"],50,80,"el techo y los nichos"]];function Tm(n){let e=null;try{e=JSON.parse(localStorage.getItem(ld)||"null")}catch{}if(!e)return;se.repaired=e.r||{},se.spent=e.s||0,se.best=e.b||0,se.done=!!e.d,se.decor=e.dc||{},se.own=e.ow||{},se.mem=e.me||0,se.notes=e.nt||[],se.vis=e.vv||{},se.ltr=e.lt||{},se.cnt=e.ct||{},Object.values(Xt).forEach(r=>{let a=(e.bl||{})[r.id];a&&r.blobs.forEach((o,l)=>{a[l]!=null&&(o.userData.s=a[l])})});let t=(()=>{try{return localStorage.getItem("ux-wear")==="1"}catch{return!1}})(),i=e.t&&t?(Date.now()-e.t)/36e5:0,s=null;$1.forEach(([r,a,o,l])=>{let c=Mt((i-a)/(o-a));c>0&&(r.forEach(h=>Xt[h].blobs.forEach(d=>{d.userData.s=Math.max(d.userData.s,c*.9)})),s=l)}),Object.values(Xt).forEach(r=>r.blobs.forEach(Xi)),s&&setTimeout(()=>n("Mientras no estabas, la humedad volvi\xF3 a ensuciar "+s),1500)}function wm(){try{localStorage.removeItem(ld)}catch{}se.repaired={},se.spent=0,se.best=0,se.done=!1,se.decor={},se.own={},se.mem=0,se.notes=[],se.vis={},se.ltr={},se.cnt={};try{window.__habReset&&window.__habReset()}catch{}Object.values(Xt).forEach(n=>n.blobs.forEach(e=>{e.userData.s=1,Xi(e)})),kr()}var Ot={porchL:[],bulbs:[],nichoGlow:[],lampL:null,lampGlow:null,winL:null,handL:null},wn={lamp:0,lant:0,str:0,nich:0,moon:0,smoke:0,rain:0};function Am(){let n=new ka(15124172,8020056,1.1);ze.add(n);let e=new Lr(16760972,1.2);e.position.set(-12,18,16),e.target.position.set(4,4,0),ze.add(e,e.target),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),Object.assign(e.shadow.camera,{left:-20,right:22,top:16,bottom:-14,near:1,far:70}),e.shadow.bias=-6e-4,e.shadow.normalBias=.04,e.shadow.radius=3;let t=new Lr(16765616,.3);t.position.set(14,6,14),ze.add(t)}function Rm(){Ot.lampL=new Gi(16763018,0,14,1.4),Ot.lampL.position.set(1.5,7.2,-.6),ze.add(Ot.lampL),Ot.lampGlow=pt(mt,16763018,4.5,0,!0),Ot.lampGlow.position.set(1.5,7.15,-1),ze.add(Ot.lampGlow)}function Cm(){Ot.handL=new Gi(16766880,0,9,1.6),ze.add(Ot.handL)}function Im(){Ot.winL=new Gi(16767400,0,9,1.5),Ot.winL.position.set(2.4,6.2,-1.6),ze.add(Ot.winL)}function Pm(n){let e=it.T,t=se.repaired,i={lamp:t.lampara&&t.panel?1:0,lant:t.techo?1:0,str:t.luces?1:0,nich:t.nichos?1:0,moon:t.ventana?1:0,smoke:t.techo?1:0,rain:t.techo?1:0};for(let r in wn)wn[r]+=(i[r]-wn[r])*Math.min(1,n*1.6);let s=.93+.05*Math.sin(e*9)+.03*Math.sin(e*23);Ot.lampL.intensity=2.6*wn.lamp*s,Ot.lampGlow.material.opacity=.55*wn.lamp*s,Ot.porchL.forEach((r,a)=>{r.L.intensity=1.6*wn.lant*(s+.02*a),r.gl.material.opacity=.7*wn.lant*s,r.body.material.emissiveIntensity=wn.lant}),Ot.bulbs.forEach((r,a)=>{r.material.opacity=wn.str*(.55+.15*Math.sin(e*2+a))}),Ot.nichoGlow.forEach((r,a)=>{r.material.opacity=.7*wn.nich*(.8+.2*Math.sin(e*1.6+a*2))}),Ot.winL.intensity=1.2*wn.moon}var j1=["es","en","ja"],Lm="es";try{let n=localStorage.getItem("rio3d-lang");Lm=j1.includes(n)?n:"es"}catch{}var vs=()=>Lm;var K1=[["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["Linternas","Lanterns","\u30E9\u30F3\u30BF\u30F3"],["m \xB7 Lugares","m \xB7 Places","m \xB7 \u5834\u6240"],["Vista 1\xAA","View 1st","\u4E00\u4EBA\u79F0"],["Vista 3\xAA","View 3rd","\u4E09\u4EBA\u79F0"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["Foto","Photo","\u5199\u771F"],["Diario","Journal","\u65E5\u8A18"],["Ajustes","Settings","\u8A2D\u5B9A"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Amanecer","Dawn","\u591C\u660E\u3051"],["D\xEDa","Day","\u663C"],["Atardecer","Dusk","\u5915\u66AE\u308C"],["Noche","Night","\u591C"],["Madrugada","Predawn","\u660E\u3051\u65B9"],["La corriente te lleva \xB7 mant\xE9n presionado y desliza a los lados para dirigir","The current carries you \xB7 press and slide sideways to steer","\u6D41\u308C\u306B\u8EAB\u3092\u307E\u304B\u305B\u3066 \xB7 \u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u64CD\u4F5C"],["Navega por un r\xEDo de niebla, en primera o tercera persona. Sin prisa y sin puntaje: la corriente te lleva y t\xFA solo diriges la canoa.","Drift down a misty river in first or third person. No rush, no score: the current carries you and you just steer the canoe.","\u9727\u306E\u5DDD\u3092\u4E00\u4EBA\u79F0\u307E\u305F\u306F\u4E09\u4EBA\u79F0\u3067\u9032\u307F\u307E\u3059\u3002\u6025\u3050\u5FC5\u8981\u3082\u5F97\u70B9\u3082\u3042\u308A\u307E\u305B\u3093\u3002\u6D41\u308C\u304C\u904B\u3093\u3067\u304F\u308C\u308B\u306E\u3067\u3001\u30AB\u30CC\u30FC\u306E\u5411\u304D\u3060\u3051\u64CD\u4F5C\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],["Dirigir:","Steer:","\u64CD\u4F5C:"],["mant\xE9n presionado y mueve el dedo o el rat\xF3n a los lados (o usa las flechas A / D).","press and move your finger or mouse sideways (or use the A / D arrow keys).","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u6307\u3084\u30DE\u30A6\u30B9\u3092\u5DE6\u53F3\u306B\u52D5\u304B\u3057\u307E\u3059\uFF08A / D \u30AD\u30FC\u3082\u4F7F\u3048\u307E\u3059\uFF09\u3002"],["Mejor con auriculares: el sonido es espacial.","Best with headphones: the sound is spatial.","\u30D8\u30C3\u30C9\u30DB\u30F3\u63A8\u5968\uFF1A\u7ACB\u4F53\u97F3\u97FF\u3067\u3059\u3002"],["Entrar al r\xEDo","Enter the river","\u5DDD\u306B\u5165\u308B"],["Empezar desde el principio","Start from the beginning","\u6700\u521D\u304B\u3089\u59CB\u3081\u308B"],["Tono suave","Soft tone","\u3084\u308F\u3089\u304B\u3044\u97F3"],["Suaviza los sonidos agudos","Softens high-pitched sounds","\u9AD8\u3044\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3059"],["Dormir","Sleep","\u304A\u3084\u3059\u307F"],["Baja el sonido y la luz poco a poco","Gradually lowers sound and light","\u97F3\u3068\u660E\u304B\u308A\u3092\u5C11\u3057\u305A\u3064\u4E0B\u3052\u307E\u3059"],["Castillo de la Garza Blanca","White Heron Castle","\u767D\u9DFA\u57CE"],["Rugido del drag\xF3n","Dragon roar","\u7ADC\u306E\u5486\u54EE"],["El drag\xF3n anuncia el Castillo de la Garza Blanca","The dragon heralds White Heron Castle","\u7ADC\u304C\u767D\u9DFA\u57CE\u306E\u5230\u6765\u3092\u544A\u3052\u307E\u3059"],["Puente de madera","Wooden bridge","\u6728\u306E\u6A4B"],["Torii sobre el agua","Torii over the water","\u6C34\u4E0A\u306E\u9CE5\u5C45"],["Aldea de farolillos","Lantern village","\u3061\u3087\u3046\u3061\u3093\u306E\u6751"],["Jard\xEDn de sakura","Sakura garden","\u685C\u306E\u5EAD"],["Ca\xF1averal de las garzas","Heron reedbed","\u30B5\u30AE\u306E\u8466\u539F"],["Templo de la campana","Bell temple","\u9418\u306E\u5BFA"],["Cascadita de musgo","Mossy waterfall","\u82D4\u306E\u5C0F\u3055\u306A\u6EDD"],["Casa de t\xE9","Tea house","\u8336\u5C4B"],["Bosque de bamb\xFA","Bamboo forest","\u7AF9\u6797"],["Estanque de lotos","Lotus pond","\u84EE\u306E\u6C60"],["Jard\xEDn de hortensias","Hydrangea garden","\u3042\u3058\u3055\u3044\u306E\u5EAD"],["Jard\xEDn de arces","Maple garden","\u3082\u307F\u3058\u306E\u5EAD"],["Jard\xEDn de ciruelos","Plum garden","\u6885\u306E\u5EAD"],["Primavera","Spring","\u6625"],["Verano","Summer","\u590F"],["Oto\xF1o","Autumn","\u79CB"],["Invierno","Winter","\u51AC"],["Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.","Every lantern is a note. Follow the river at your own pace.","\u30E9\u30F3\u30BF\u30F3\u306F\u3072\u3068\u3064\u3072\u3068\u3064\u304C\u97F3\u3067\u3059\u3002\u81EA\u5206\u306E\u30DA\u30FC\u30B9\u3067\u5DDD\u3092\u9032\u307F\u307E\u3057\u3087\u3046\u3002"],["De vuelta al inicio del r\xEDo","Back at the start of the river","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3057\u305F"],["Empieza una llovizna suave","A soft drizzle begins","\u3084\u3055\u3057\u3044\u9727\u96E8\u304C\u964D\u308A\u306F\u3058\u3081\u307E\u3057\u305F"],["Las garzas alzan el vuelo a tu paso","Herons take flight as you pass","\u901A\u308A\u904E\u304E\u308B\u3068\u30B5\u30AE\u304C\u98DB\u3073\u7ACB\u3061\u307E\u3059"],["Llevas un buen rato en el r\xEDo: respira hondo y estira un poco los hombros.","You have been on the river a while: breathe deeply and stretch your shoulders.","\u3057\u3070\u3089\u304F\u5DDD\u306B\u3044\u307E\u3059\u306D\u3002\u6DF1\u547C\u5438\u3057\u3066\u3001\u80A9\u3092\u5C11\u3057\u306E\u3070\u3057\u307E\u3057\u3087\u3046\u3002"],["Los peces se acercan a nadar contigo","Fish swim up to keep you company","\u9B5A\u304C\u5BC4\u3063\u3066\u304D\u3066\u4E00\u7DD2\u306B\u6CF3\u304E\u307E\u3059"],["Un pato decide acompa\xF1arte","A duck decides to join you","\u30AB\u30E2\u304C\u3064\u3044\u3066\u304D\u307E\u3059"],["Una lib\xE9lula se pos\xF3 en la proa de tu canoa","A dragonfly landed on the bow of your canoe","\u30C8\u30F3\u30DC\u304C\u30AB\u30CC\u30FC\u306E\u8239\u9996\u306B\u3068\u307E\u308A\u307E\u3057\u305F"],["Festival de linternas: la aldea celebra esta noche","Lantern festival: the village celebrates tonight","\u30E9\u30F3\u30BF\u30F3\u796D\u308A\uFF1A\u4ECA\u591C\u3001\u6751\u304C\u304A\u795D\u3044\u3057\u3066\u3044\u307E\u3059"],["Arrastra para mirar \xB7 pellizca para acercar","Drag to look \xB7 pinch to zoom","\u30C9\u30E9\u30C3\u30B0\u3067\u898B\u56DE\u3059 \xB7 \u30D4\u30F3\u30C1\u3067\u62E1\u5927"],["A\xFAn por descubrir","Yet to discover","\u672A\u767A\u898B"],["Sigue r\xEDo abajo","Keep going downstream","\u5DDD\u3092\u4E0B\u308A\u307E\u3057\u3087\u3046"],["Vuelve a pasar para fotografiarlo","Pass by again to photograph it","\u3082\u3046\u4E00\u5EA6\u901A\u3063\u3066\u64AE\u5F71\u3057\u307E\u3057\u3087\u3046"],["Las luces sobre el agua son linternas: pasa cerca para recogerlas","The lights on the water are lanterns: pass close to collect them","\u6C34\u9762\u306E\u5149\u306F\u30E9\u30F3\u30BF\u30F3\u3067\u3059\u3002\u8FD1\u3065\u304F\u3068\u96C6\u3081\u3089\u308C\u307E\u3059"],["Mant\xE9n presionado y desliza a los lados para dirigir la canoa","Press and slide sideways to steer the canoe","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u30AB\u30CC\u30FC\u3092\u64CD\u4F5C\u3057\u307E\u3059"],["Con Foto puedes guardar un momento; con Diario ves tus lugares","Use Photo to keep a moment; use Journal to see your places","\u300C\u5199\u771F\u300D\u3067\u77AC\u9593\u3092\u6B8B\u3057\u3001\u300C\u65E5\u8A18\u300D\u3067\u8A2A\u308C\u305F\u5834\u6240\u3092\u898B\u3089\u308C\u307E\u3059"],["Tu linterna se queda aqu\xED. Vuelve otro d\xEDa y la encontrar\xE1s encendida.","Your lantern stays here. Come back another day and you will find it lit.","\u30E9\u30F3\u30BF\u30F3\u306F\u3053\u3053\u306B\u6B8B\u308A\u307E\u3059\u3002\u307E\u305F\u6765\u308C\u3070\u706F\u3063\u305F\u307E\u307E\u3067\u3059\u3002"],["Salir de foto","Exit photo","\u64AE\u5F71\u3092\u7D42\u4E86"],["Sin filtro","No filter","\u30D5\u30A3\u30EB\u30BF\u30FC\u306A\u3057"],["Natural","Natural","\u30CA\u30C1\u30E5\u30E9\u30EB"],["C\xE1lido","Warm","\u6696\u8272"],["Bruma","Mist","\u9727"],["Tinta","Ink","\u6C34\u58A8"],["Noche azul","Blue night","\u9752\u3044\u591C"],["Hora","Time","\u6642\u523B"],["Zoom","Zoom","\u30BA\u30FC\u30E0"],["Vista","View","\u8996\u70B9"],["Marco","Frame","\u30D5\u30EC\u30FC\u30E0"],["Cerrar","Close","\u9589\u3058\u308B"],["Diario del r\xEDo","River journal","\u5DDD\u306E\u65E5\u8A18"],["\xBFVolver al inicio del r\xEDo?","Go back to the start of the river?","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3059\u304B\uFF1F"],["Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.","You return to the wooden bridge. You keep your journal, your photos and the lanterns you released.","\u6728\u306E\u6A4B\u306B\u623B\u308A\u307E\u3059\u3002\u65E5\u8A18\u3001\u5199\u771F\u3001\u6D41\u3057\u305F\u30E9\u30F3\u30BF\u30F3\u306F\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u3002"],["Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"],["Reiniciar recorrido","Restart the trip","\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3059"],["Calidad","Quality","\u753B\u8CEA"],["Autom\xE1tica","Automatic","\u81EA\u52D5"],["Alta","High","\u9AD8"],["Media","Medium","\u4E2D"],["Baja (m\xE1s fluida)","Low (smoother)","\u4F4E\uFF08\u306A\u3081\u3089\u304B\uFF09"],["Volumen","Volume","\u97F3\u91CF"],["Estaci\xF3n","Season","\u5B63\u7BC0"],["Cambiarla recarga el r\xEDo","Changing it reloads the river","\u5909\u66F4\u3059\u308B\u3068\u5DDD\u3092\u8AAD\u307F\u8FBC\u307F\u76F4\u3057\u307E\u3059"],["Seg\xFAn la fecha","By date","\u65E5\u4ED8\u306B\u5408\u308F\u305B\u308B"],["Fija","Fixed","\u56FA\u5B9A"],["Idioma","Language","\u8A00\u8A9E"],["Subt\xEDtulos de ambiente","Ambient captions","\u74B0\u5883\u97F3\u306E\u5B57\u5E55"],["Describe los sonidos con texto","Describes sounds as text","\u97F3\u3092\u6587\u5B57\u3067\u8868\u793A\u3057\u307E\u3059"],["Vibraci\xF3n suave","Gentle vibration","\u3084\u3055\u3057\u3044\u632F\u52D5"],["Si tu dispositivo la permite","If your device supports it","\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u7AEF\u672B\u306E\u307F"],["Modo una mano","One-hand mode","\u7247\u624B\u30E2\u30FC\u30C9"],["Botones al alcance del pulgar","Buttons within thumb reach","\u89AA\u6307\u304C\u5C4A\u304F\u4F4D\u7F6E\u306B\u30DC\u30BF\u30F3\u3092\u914D\u7F6E"],["No","Off","\u30AA\u30D5"],["S\xED","On","\u30AA\u30F3"],["Derecha","Right","\u53F3"],["Izquierda","Left","\u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"],["Menos movimiento y destellos","Less motion and flashes","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B"],["Sin c\xE1maras largas, destellos ni balanceo fuerte","No long camera moves, flashes or strong sway","\u9577\u3044\u30AB\u30E1\u30E9\u79FB\u52D5\u30FB\u5149\u30FB\u5F37\u3044\u63FA\u308C\u3092\u306A\u304F\u3057\u307E\u3059"],["Acerca de","About","\u3053\u306E\u30B2\u30FC\u30E0\u306B\u3064\u3044\u3066"],["Privacidad, datos y cr\xE9ditos","Privacy, data and credits","\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30FB\u30C7\u30FC\u30BF\u30FB\u30AF\u30EC\u30B8\u30C3\u30C8"],["Abrir","Open","\u958B\u304F"],["Botones de direcci\xF3n","Steering buttons","\u64CD\u4F5C\u30DC\u30BF\u30F3"],["Alternativa a arrastrar","An alternative to dragging","\u30C9\u30E9\u30C3\u30B0\u306E\u4EE3\u308F\u308A"],["Girar a la izquierda","Turn left","\u5DE6\u3078\u66F2\u304C\u308B"],["Girar a la derecha","Turn right","\u53F3\u3078\u66F2\u304C\u308B"],["Remar","Paddle","\u3053\u3050"],["Direcci\xF3n","Steering","\u64CD\u4F5C"]],cw=new Map(K1.map(n=>[n[0],n]));var Dm={es:["Cuando","el r\xEDo","te entregue","su luz,","la caba\xF1a","recordar\xE1","tu","nombre."],en:["When","the river","hands you","its light,","the cabin","will remember","your","name."],ja:["\u5DDD\u304C","\u706F\u3092","\u6388\u3051\u308B","\u3068\u304D\u3001","\u5C0F\u5C4B\u306F","\u3042\u306A\u305F\u306E","\u540D\u3092","\u601D\u3044\u51FA\u3059\u3002"]},Q1=()=>Dm[vs()]||Dm.es,Ti=()=>{try{return Math.max(0,+localStorage.getItem("rio3d-lant")||0)}catch{return 0}},ao=()=>Math.min(8,Math.floor(Ti()/4)),eM=()=>vs()==="ja"?"":" ";function Vc(n=ao()){let e=Q1(),t=eM(),i=[];for(let s=0;s<8;s+=2)i.push((s<n?e[s]:"\xB7\xB7\xB7")+t+(s+1<n?e[s+1]:"\xB7\xB7\xB7"));return i}var Nm=()=>Math.min(8,Math.ceil(Ti()/4)),Um=()=>{try{return+localStorage.getItem("tomo-ofrenda")||0}catch{return 0}},Fm=n=>{try{localStorage.setItem("tomo-ofrenda",String(n))}catch{}},Vs=()=>Ti()>=32,Om=()=>{try{return localStorage.getItem("tomo-secreto")==="1"}catch{return!1}},Bm=()=>{try{localStorage.setItem("tomo-secreto","1")}catch{}};var zm=()=>{try{return JSON.parse(localStorage.getItem("rio3d-found")||"[]")}catch{return[]}};var ud=-8.8,dd=.3,Wm=5,Vr=null,tM=[],Xc=0,Hm=0,hd=null,Wc=[],oo=null;function Xm(){if(!Vs())return;let n=new Set(zm()),e=new me;e.position.set(ud,ue,dd),ze.add(e);let t=(u,p,g,S,m)=>{let f=new ie(u,p);return f.position.set(g,S,m),f};e.add(t(new Qe(4.5,4.6,.34,40),ge("#7d7a86"),0,.1,0));let i=new ie(new Pn(4.45,.2,8,48),ge("#a9a4b0"));i.rotation.x=Math.PI/2,i.position.y=.3,e.add(i);let s=new ie(new Ds(3.25,4.3,40),ge("#7fa06a"));s.rotation.x=-Math.PI/2,s.position.y=.29,e.add(s);let r=document.createElement("canvas");r.width=256,r.height=32;{let u=r.getContext("2d"),p=u.createLinearGradient(0,0,256,0);p.addColorStop(0,"#bfe3ea"),p.addColorStop(.5,"#9ccbd8"),p.addColorStop(1,"#bfe3ea"),u.fillStyle=p,u.fillRect(0,0,256,32),u.fillStyle="rgba(255,255,255,.35)";for(let g=0;g<30;g++)u.fillRect(Math.random()*256,Math.random()*32,10+Math.random()*30,1)}let a=new On(r);a.colorSpace=rn;let o=new ie(new Ds(1.8,3.3,48,1),new Xe({map:a,transparent:!0,opacity:.92}));o.rotation.x=-Math.PI/2,o.position.y=.31,e.add(o),oo=o,e.add(t(new Qe(1.75,1.9,.5,32),ge("#7fa06a"),0,.4,0));let l=(u,p)=>p?u:"#8d8b94",c=(u,p,g,S,m,f=1.1)=>{let y=pt(mt,p,f,.5,!0);y.position.set(g,S,m),u.add(y)};{let u=n.has(10),p=new me;p.position.y=.65,e.add(p),[[1.05,.42,0],[.78,.4,.42],[.55,.36,.8]].forEach(([g,S,m],f)=>{p.add(t(new xt(g,S,g),ge(l("#efe6d2",u)),0,m+S/2,0)),p.add(t(new Et(g*.82,.26,4),ge(l("#4f4a58",u)),0,m+S+.1,0)).rotation.y=Math.PI/4,p.children[p.children.length-1].rotation.y=Math.PI/4}),u&&c(p,16767392,0,.7,.2,1.6)}[0,1,2,3,4,5,6,7,8,9].forEach((u,p)=>{let g=n.has(u),S=-Math.PI/2+p/10*Math.PI*2,m=u===9?2.5:u===0?2.55:3.75,f=Math.cos(S)*m,y=Math.sin(S)*m,v=new me;v.position.set(f,u===9||u===0?.31:.3,y),v.rotation.y=-S-Math.PI/2,e.add(v);let x=b=>ge(l(b,g));if(u===0){v.position.set(Math.cos(S)*2.55,.34,Math.sin(S)*2.55),v.rotation.y=-S;for(let b=-5;b<=5;b++){let E=b/5,A=t(new xt(.26,.07,.55),x("#b0876c"),E*1,.16*(1-E*E),0);A.rotation.z=-E*.5,v.add(A)}[-1,1].forEach(b=>v.add(t(new xt(2.1,.05,.05),x("#b5473a"),0,.28,b*.27)))}else if(u===1)[-.3,.3].forEach(b=>v.add(t(new Qe(.035,.04,.62,6),x("#c23f33"),b,.31,0))),v.add(t(new xt(.9,.07,.12),x("#2c2a2e"),0,.66,0)),v.add(t(new xt(.7,.05,.08),x("#c23f33"),0,.55,0));else if(u===2)[[-.28,.1],[.2,-.12],[.05,.28]].forEach(([b,E],A)=>{v.add(t(new xt(.3,.2,.28),x("#e8d3b6"),b,.1,E)),v.add(t(new Et(.28,.18,4),x("#8f6a5f"),b,.29,E)).rotation.y=Math.PI/4,g&&c(v,16761466,b,.12,E+.16,.4)});else if(u===3)v.add(t(new Qe(.03,.05,.4,5),x("#5a3d33"),0,.2,0)),v.add(t(new Ct(.3,1),x("#f3bccb"),0,.55,0)),v.add(t(new Ct(.2,0),x("#eea9bd"),.18,.45,.08));else if(u===4)v.position.y=.31,v.add(t(new It(.13,8,6),x("#f6f3ee"),0,.2,0)),v.children[v.children.length-1].scale.set(1,.8,1.5),v.add(t(new Qe(.015,.02,.3,5),x("#f6f3ee"),0,.4,.05)),v.add(t(new Et(.02,.1,4),x("#e3a24a"),0,.5,.12)).rotation.x=Math.PI/2;else if(u===5){let b=0;[[.5,.22],[.4,.2],[.3,.18]].forEach(([E,A],_)=>{v.add(t(new xt(E,A,E),x("#efe3cd"),0,b+A/2,0)),v.add(t(new Et(E*.85,.14,4),x("#4c4a5a"),0,b+A+.05,0)).rotation.y=Math.PI/4,b+=A+.1}),g&&c(v,16762746,0,.4,0,.9)}else if(u===6){[[0,.15,0,.3],[.12,.4,0,.22],[-.1,.55,0,.16]].forEach(([E,A,_,T])=>v.add(t(new Ct(T,0),x("#7a8a7e"),E,A,_)));let b=t(new ri(.14,.5),new Xe({color:g?14676986:10132130,transparent:!0,opacity:.85,side:pn}),0,.35,.26);v.add(b)}else if(u===7)v.add(t(new xt(.5,.28,.4),x("#e8d3b6"),0,.2,0)),v.add(t(new Et(.42,.22,4),x("#8f6a5f"),0,.45,0)).rotation.y=Math.PI/4,v.add(t(new Et(.16,.07,10),x("#c23f33"),.38,.38,.14)),v.add(t(new Qe(.008,.008,.32,4),x("#b0876c"),.38,.22,.14)),g&&c(v,16762746,0,.25,.24,.6);else if(u===8)for(let b=0;b<6;b++){let E=.5+b%3*.15;v.add(t(new Qe(.02,.026,E,5),x(b%2?"#8fb06a":"#7fa05f"),(b-2.5)*.08,E/2,b%2*.1))}else u===9&&([[0,0],[.28,.12],[-.2,.2]].forEach(([b,E])=>{v.add(t(new Qe(.14,.14,.02,10),x("#7fbf8a"),b,.03,E))}),v.add(t(new Ct(.07,0),x("#f5a4bd"),.28,.1,.12)));g&&u!==2&&u!==5&&u!==7&&c(v,16767392,0,.4,0,.9)}),Vr=new me,e.add(Vr);for(let u=0;u<5;u++){let p=u/5*Math.PI*2,g=new me;g.position.set(Math.cos(p)*2.45,.36,Math.sin(p)*2.45),g.rotation.y=-p,Vr.add(g),g.add(t(new xt(.3,.06,.1),ge("#6b4a36"),0,0,0)),g.add(t(new It(.07,6,5),new Xe({color:16767392}),0,.12,0));let S=pt(mt,16761466,.7,.6,!0);S.position.y=.14,g.add(S)}tM.push(Vr);let d=new ie(new Qe(.12,.16,.9,6),ge("#a9a4b0"));d.position.set(3.2,.75,-4.3),e.add(d),c(e,16761466,3.2,1.3,-4.3,1.6)}var km=new ai,Gm=new le,Gr=null;function nM(){nn.addEventListener("pointerdown",n=>{Gr={x:n.clientX,y:n.clientY,t:performance.now()}}),nn.addEventListener("pointerup",n=>{if(!Gr||!oo)return;let e=Math.hypot(n.clientX-Gr.x,n.clientY-Gr.y),t=performance.now()-Gr.t;if(Gr=null,e>8||t>450)return;let i=nn.getBoundingClientRect();Gm.set((n.clientX-i.left)/i.width*2-1,-((n.clientY-i.top)/i.height)*2+1),km.setFromCamera(Gm,tn);let s=km.intersectObject(oo,!1)[0];if(!s)return;Xc=Math.min(1.4,Xc+.8);try{tt.chime(0,2)}catch{}try{navigator.vibrate&&navigator.vibrate(12)}catch{}let r=new ie(new Ds(.08,.14,24),new Xe({color:16777215,transparent:!0,opacity:.7,side:pn,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.copy(oo.parent.worldToLocal(s.point.clone())),r.position.y=.33,oo.parent.add(r),Wc.push({g:r,a:0})})}var Vm=!1,qm=n=>{if(!Vr)return;Vm||(Vm=!0,nM());let e=hd==null?.016:Math.min(.05,Math.max(0,n-hd));hd=n,Xc*=Math.exp(-e*.38),Hm+=(.1+Xc*.85)*e,Vr.rotation.y=-Hm;for(let t=Wc.length-1;t>=0;t--){let i=Wc[t];i.a+=e;let s=i.a/1.6;i.g.scale.setScalar(1+s*14),i.g.material.opacity=.7*(1-s),s>=1&&(i.g.parent.remove(i.g),i.g.geometry.dispose(),i.g.material.dispose(),Wc.splice(t,1))}};var Wr=n=>46+16*Math.sin(n*.021+.6)+8*Math.sin(n*.047),qc=-13.6;var Ws=(n,e,t)=>{let i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)},lo=17,qi=44,wi=n=>n<15.7?2.8:2.8+Math.sin((n-15.7)*.12)*5.2*Ws(15.7,26,n),iM=n=>n<8.2?3.7:n<15.7?3.7-(n-8.2)*(5.7/7.5):-2-(n-15.7)*.4;function Dn(n,e){let t=-14;{let i=Math.max(0,-14-n),s=4.2+i*.22+Math.max(0,-7-e)*.25,r=(1-Ws(-118,-140,n))*(1-Ws(-56,-72,e)),a=Ws(3,26,e),o=n<=-14?1:(1-Ws(-12,6,n))*Ws(-4,-9,e);t=Math.max(t,-14+(Math.min(s,30)+14)*(1-a)*r*o)}if(n>=6&&n<=qi+6){let i=wi(n),s=Math.abs(e-i),r=n<15.7?3.2:5.5,a=n<15.7?.9:.65,o=(Math.sin(n*.5+e*.3)+Math.sin(e*.7-n*.2))*.12,l=iM(n)-Math.max(0,s-r)*a+(n>16?o:0)-(n>qi?(n-qi)*.8:0);l=-14+(l+14)*Ws(6,8.2,n),t=Math.max(t,l)}return t}var Ym=[];for(let n=lo;n<=qi;n+=1)Ym.push([n,wi(n)]);var Zm=(n,e,t)=>{for(let i of Ym)if(Math.abs(i[0]-n)<t&&Math.abs(i[1]-e)<t&&Math.hypot(i[0]-n,i[1]-e)<t)return!0;return!1};function Jm(){let r=Math.round(70),a=Math.round(122/3),o=[],l=[],c=[],h=new Ce,d=[new Ce("#8fae75"),new Ce("#a3b87a"),new Ce("#7fa06a"),new Ce("#9bb26e")],u=new Ce("#b69a76"),p=new Ce("#8e7468"),g=new Ce("#6f8f6a"),S=new Ce("#d9a35f"),m=new Ce("#d9a0b3"),f=(x,b)=>{let E=Math.sin(x*12.9898+b*78.233)*43758.5453;return E-Math.floor(E)};for(let x=0;x<=a;x++)for(let b=0;b<=r;b++){let E=-140+b*3,A=-72+x*3,_=Dn(E,A);o.push(E,_,A);let T=Dn(E+3,A)-Dn(E-3,A),R=Dn(E,A+3)-Dn(E,A-3),P=Math.hypot(T,R)/6,N=f(b,x);h.copy(d[N*4|0]),_>8&&h.lerp(g,Math.min(.8,(_-8)/16)),N>.9&&_>-12&&h.lerp(N>.95?m:S,.45),P>1.25&&h.lerp(p,Math.min(.55,(P-1.25)*1.2)),_<-13&&h.lerp(new Ce("#86906f"),.7),E>lo-1&&E<qi+3&&Math.abs(A-wi(E))<1.6&&h.lerp(u,.55),l.push(h.r,h.g,h.b)}for(let x=0;x<a;x++)for(let b=0;b<r;b++){let E=x*(r+1)+b,A=E+1,_=E+r+1,T=_+1;c.push(E,_,A,A,_,T)}let y=new bt;y.setAttribute("position",new Ke(o,3)),y.setAttribute("color",new Ke(l,3)),y.setIndex(c),y.computeVertexNormals();let v=new ie(y,new ki({vertexColors:!0,flatShading:!0}));v.receiveShadow=!0,v.position.y=.02,ze.add(v)}function $m(){let n=Jt(41),e=new me;ze.add(e);let t=ge("#aaa59d"),i=ge("#8d8a86"),s=ge("#a98563"),r=ge("#4b342a");for(let o=lo+1;o<qi;o+=1.55){let l=wi(o)+Math.sin(o*1.9)*.35,c=new ie(new Qe(.62+n()*.12,.7,.16,8),t);c.position.set(o,Dn(o,l)+.1,l),c.rotation.y=n()*3,e.add(c)}let a=(o,l)=>{let c=Dn(o,l),h=new me;h.position.set(o,c,l),e.add(h);let d=new ie(new Qe(.34,.4,.16,8),i);d.position.y=.08,h.add(d);let u=new ie(new Qe(.1,.13,.9,6),t);u.position.y=.6,h.add(u);let p=new ie(new xt(.4,.36,.4),new Xe({color:16767392}));p.position.y=1.2,h.add(p);let g=new ie(new Et(.42,.3,4),t);g.position.y=1.5,g.rotation.y=Math.PI/4,h.add(g);let S=pt(mt,16761466,2.4,.55,!0);S.position.set(0,1.2,0),h.add(S)};for(let o=lo+3,l=0;o<qi-2;o+=6,l++){let c=wi(o)+(l%2?2.4:-2.4);a(o,c)}{let o=new ft,l=new bn,c=new L,h=new L,d=new Ce,u=420,p=new si(new Et(.3,1.2,4).translate(0,.6,0),ge("#ffffff"),u),g=new si(new Ct(1,1),ge("#ffffff"),70),S=new si(new Ct(1,0),ge("#ffffff"),40),m=["#9bb070","#b3b87a","#86a068","#a6c47a"],f=["#5f8a60","#6e9a68","#7aa86a","#e58aa8","#f3a9c0"],y=["#7e7a74","#8a8a7c","#6f7d68"],v=0,x=0,b=0;for(let E=0;E<900&&(v<u||x<70||b<40);E++){let A=8+n()*38,_=wi(Math.max(15.7,A)),T=_+(n()-.5)*15;if(Math.abs(T-_)<1.5&&A>lo)continue;let R=Dn(A,T);if(R<-13)continue;let P=n();if(P<.6&&v<u)h.set(A,R,T),c.set(.8+n()*.6,.7+n()*1.1,.8+n()*.6),l.setFromEuler(new Cn(0,n()*6,(n()-.5)*.3)),o.compose(h,l,c),p.setMatrixAt(v,o),p.setColorAt(v,d.set(m[n()*4|0])),v++;else if(P<.85&&x<70){let N=.5+n()*.8;h.set(A,R+.2,T),c.set(N*1.3,N*.75,N*1.3),l.identity(),o.compose(h,l,c),g.setMatrixAt(x,o),g.setColorAt(x,d.set(f[n()*5|0])),x++}else if(b<40){let N=.3+n()*.5;h.set(A,R+.1,T),c.set(N,N*.6,N),l.setFromEuler(new Cn(n()*3,n()*3,0)),o.compose(h,l,c),S.setMatrixAt(b,o),S.setColorAt(b,d.set(y[n()*3|0])),b++}}p.count=v,g.count=x,S.count=b,[p,g,S].forEach(E=>{E.instanceMatrix.needsUpdate=!0,E.instanceColor&&(E.instanceColor.needsUpdate=!0),e.add(E)})}{let o=qi+1,l=wi(qi),c=-13,h=new me;h.position.set(o,c,l),e.add(h);for(let m=0;m<7;m++){let f=new ie(new xt(.9,.12,2.2),s);f.position.set(m*.95,.15,0),h.add(f)}[[0,1],[0,-1],[5.7,1],[5.7,-1]].forEach(([m,f])=>{let y=new ie(new Qe(.12,.14,1.8,6),r);y.position.set(m,-.3,f*1.15),h.add(y)});let d=pt(mt,16761466,2.6,.6,!0);d.position.set(5.7,1.2,1.15),h.add(d);let u=new me;u.position.set(5.2,0,-3.4),u.rotation.y=.35,h.add(u);let p=new ie(new Ps(.4,2.8,3,6),ge("#5a3d2e"));p.rotation.x=Math.PI/2,p.scale.set(1,1,.6),u.add(p);let g=new ie(new It(.24,8,6),new Xe({color:16767392}));g.position.set(0,.9,-1.3),u.add(g);let S=pt(mt,16758896,3.4,.9,!0);S.position.set(0,1,-1.3),u.add(S)}}var jm=[],Km=[],Qm=[];function Yc(n,e,t,i,s){let r=Jt(i),a=new Hi;a.moveTo(-340,-60);for(let l=-340;l<=340;l+=16)a.lineTo(l,t*(.45+.55*Math.abs(Math.sin(l*.011+i)+.5*Math.sin(l*.027+i*2)))/1.5+r()*t*.08);a.lineTo(340,-60);let o=new ie(new za(a),new Xe({color:e,fog:!0}));o.position.set(0,s,n),ze.add(o)}var Zc=new L(140,100,-420);function sM(){let n=new ie(new It(600,24,16),new Sn({side:fn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ce("#3a3f7c")},mid:{value:new Ce("#c9799d")},hor:{value:new Ce("#fbb67a")},sd:{value:Zc.clone().normalize()}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 top,mid,hor;uniform vec3 sd;void main(){vec3 d=normalize(vP);float h=clamp(d.y,0.,1.);vec3 c=mix(hor,mid,smoothstep(0.,.22,h));c=mix(c,top,smoothstep(.16,.85,h));float s=max(dot(d,sd),0.);c+=vec3(1.,.62,.32)*pow(s,6.)*.55+vec3(1.,.85,.6)*pow(s,40.)*.5;c=mix(c,vec3(.25,.22,.42),smoothstep(0.,-.4,d.y)*.7);gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
`+ed+"}"}));n.renderOrder=-10,ze.add(n);{let i=new Float32Array(480);for(let r=0;r<160;r++){let a=Math.random()*6.283,o=Math.random()*.5+.42,l=Math.sqrt(1-o*o);i.set([Math.cos(a)*l*560,o*560,Math.sin(a)*l*560-0],r*3)}let s=new bt;s.setAttribute("position",new Yt(i,3)),ze.add(new zi(s,new bi({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.5,fog:!1,depthWrite:!1})))}let e=pt(mt,16761466,260,.85,!0);e.material.fog=!1,e.position.copy(Zc),ze.add(e);let t=new ie(new qn(15,32),new Xe({color:16773320,fog:!1}));t.position.copy(Zc).multiplyScalar(.998),t.lookAt(0,0,0),ze.add(t)}function rM(){Yc(-190,"#a38aa8",70,1,-24),Yc(-150,"#9a82a6",60,6,-24),Yc(-110,"#8f7ca4",46,5,-24),Yc(-78,"#82749f",34,9,-22);let n=new ie(new qn(260,32).rotateX(-Math.PI/2),ge("#86906f"));n.position.y=-14.05,ze.add(n);let e=["#6d8466","#7a936f","#5f7a5d","#86a077"];{let t=new ft,i=new bn,s=new L,r=new L,a=new Ce,o=Jt(77),l=(x,b)=>{let E=new si(x,ge("#ffffff"),b);return E.count=0,ze.add(E),E},c=(x,b,E,A,_,T,R,P,N=0)=>{let O=x.count++;i.setFromEuler(new Cn(0,N,0)),r.set(b,E,A),s.set(_,T,R),t.compose(r,i,s),x.setMatrixAt(O,t),x.setColorAt(O,a.set(P))},h=l(new Et(1.15,10,7).translate(0,5,0),520),d=l(new Et(1.9,7.5,6).translate(0,3.8,0),520),u=l(new Qe(.18,.3,3.2,5).translate(0,1.6,0),520),p=l(new Ct(1,1),1500),g=l(new Qe(.07,.09,8,5).translate(0,4,0),220),S=l(new Ct(.9,0),260),m=l(new Ct(1,1),240),f=l(new Et(.35,1.3,4).translate(0,.65,0),420),y={sugi:["#4f6b52","#5c7a5a","#476048"],pine:["#6d8466","#7a936f","#5f7a5d","#86a077"],matsu:["#4f7254","#5b8160","#44654a"],maple:["#d9573a","#e8793a","#c9432f","#f0a042"],gink:["#f0c44a","#e8b53a","#f6d46a"],bam:["#8fb06a","#9cc17a","#7fa05f"],bl:["#a6c47a","#94b56a"],bush:["#5f8a60","#6e9a68","#e58aa8","#d9708f","#f3a9c0"],gr:["#9bb070","#b3b87a","#86a068"]},v=x=>x[o()*x.length|0];for(let x=0;x<12e3;x++){let b,E;if(x%3===0)b=-110+o()*95,E=-62+o()*95;else{let T=o()*6.283,R=14+Math.sqrt(o())*150;b=Math.cos(T)*R+2,E=Math.sin(T)*R-12}if(b>-16&&b<17&&E>-10&&E<9||Math.abs(b-Wr(E))<10+Math.max(0,-E)*.16+6||b>14&&b<50&&Zm(b,E,4.2)||b>-40&&b<-14&&E>6&&E<40&&o()<.9)continue;let A=Dn(b,E)+(Dn(b,E)<-13.9?Math.max(0,-E-30)*.05:0),_=o();if(_<.2&&h.count<520){let T=.8+o()*.8;c(h,b,A,E,T*.8,T*(.9+o()*.7),T*.8,v(y.sugi))}else if(_<.38&&d.count<520){let T=.7+o()*1.1;c(d,b,A,E,T,T*(.8+o()*.8),T,v(y.pine))}else if(_<.5&&u.count<520&&p.count<1490){let T=.9+o()*.8;c(u,b,A,E,T,T,T,"#4b342a");let R=(o()-.5)*1.2;[[0,3.6,0,2.2,.7],[R*1.3,4.5,.7,1.7,.6],[-R,5.3,-.5,1.3,.5]].forEach(([P,N,O,C,D])=>c(p,b+P*T,A+N*T,E+O*T,C*T,D*T,C*T*.9,v(y.matsu)))}else if(_<.64&&u.count<520&&p.count<1495){let T=.9+o()*.9;c(u,b,A,E,T,T,T,"#5a3d33");let R=v(y.maple);[[0,4.2,0,1.9],[1.1,3.6,.5,1.4],[-1,3.7,-.4,1.3]].forEach(([P,N,O,C],D)=>c(p,b+P*T,A+N*T,E+O*T,C*T,C*T*.85,C*T,D?v(y.maple):R))}else if(_<.7&&u.count<520&&p.count<1495){let T=.9+o()*.8;c(u,b,A,E,T,T*1.1,T,"#6b5040"),[[0,4.8,0,1.4,2.2],[.5,6.3,.2,1,1.7]].forEach(([R,P,N,O,C])=>c(p,b+R*T,A+P*T,E+N*T,O*T,C*T,O*T,v(y.gink)))}else if(_<.82&&g.count<200){let T=6+(o()*8|0);for(let R=0;R<T&&g.count<220;R++){let P=b+(o()-.5)*5,N=E+(o()-.5)*5,O=.8+o()*.7;c(g,P,A,N,1,O,1,v(y.bam)),S.count<258&&c(S,P,A+7.6*O,N,1.1,.45,1.1,v(y.bl))}}else if(_<.92&&m.count<240){let T=.7+o()*1.1;c(m,b,A+.4,E,T*1.3,T*.75,T*1.3,v(y.bush))}else if(f.count<420)for(let T=0;T<3;T++)c(f,b+(o()-.5)*1.2,A,E+(o()-.5)*1.2,.8+o()*.6,.8+o()*1.1,.8+o()*.6,v(y.gr),o()*6)}[h,d,u,p,g,S,m,f].forEach(x=>{x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0)})}for(let t=0;t<7;t++){let i=pt(Hs,15978450,60+t*8,.26);i.position.set(-70+t*30,-9+t*1.6,-10-t*6),i.scale.set(70+t*8,18,1),ze.add(i),jm.push(i)}{let t=Jt(31);for(let i=0;i<14;i++){let s=i%2?1:-1,r=-18-t()*85,a=-12+t()*9,o=70+t()*70,l=pt(Hs,i%3?15780048:16309456,60,.1+t()*.12);l.position.set(-140+t()*280,a,r),l.scale.set(o,10+t()*12,1),l.userData.v=s*(.3+t()*.5),l.userData.ph=t()*6,l.userData.o=l.material.opacity,ze.add(l),Qm.push(l)}}for(let t=0;t<6;t++){let i=pt(Hs,16172212,90,.38);i.position.set(-160+t*70,60+t*37%30,-200-t%3*30),i.scale.set(150,40,1),ze.add(i),Km.push(i)}}var e0=[];function aM(){{let e=[],t=[],i=[],s=[],r=new Ce,a=new Ce("#5d8f8c"),o=new Ce("#ffd3a0"),l=new Ce("#d8949e");for(let g=0;g<=90;g++){let S=34-g*3,m=8+g*.16,f=Wr(S);for(let y=0;y<5;y++){let v=y/4,x=f+(v-.5)*2*m;e.push(x,qc,S);let b=1-Math.abs(v-.5)*2;r.copy(a).lerp(l,Math.min(1,b*1.4)).lerp(o,Math.max(0,b-.45)*(g<40?.7:.5)),t.push(r.r,r.g,r.b),s.push(v,g*.35)}}for(let g=0;g<90;g++)for(let S=0;S<4;S++){let m=g*5+S;i.push(m,m+5,m+1,m+1,m+5,m+6)}let c=new bt;c.setAttribute("position",new Ke(e,3)),c.setAttribute("color",new Ke(t,3)),c.setAttribute("uv",new Ke(s,2)),c.setIndex(i),ze.add(new ie(c,new Xe({vertexColors:!0,fog:!1})));let h=document.createElement("canvas");h.width=64,h.height=256;let d=h.getContext("2d");for(let g=0;g<40;g++){let S=Math.random()*64,m=Math.random()*256;d.fillStyle="rgba(255,236,210,"+(.08+Math.random()*.12)+")",d.fillRect(S,m,2+Math.random()*10,1.5)}let u=new On(h);u.wrapS=u.wrapT=os,u.repeat.set(1,3);let p=new ie(c,new Xe({map:u,transparent:!0,depthWrite:!1,fog:!0}));p.position.y=.03,ze.add(p),fd=u}{let n=Jt(52),e=70,t=new si(new Qe(.25,.4,3.2,5).translate(0,1.6,0),ge("#5a3d33"),e),i=new si(new Ct(1,1),ge("#ffffff"),e*3),s=new ft,r=new bn,a=new L,o=new L,l=new Ce,c=["#f3bccb","#eea9bd","#f8d0da","#e99fb4"],h=0,d=0;for(let u=0;u<500&&h<e;u++){let p=30-n()*230,g=n()<.5?-1:1,S=11+n()*28,m=Wr(p)+g*(S+Math.max(0,-p)*.12);if(m>-22&&m<26&&p>-14&&p<16)continue;let f=1+n()*1.1,y=qc+.2;o.set(m,y,p),a.setScalar(f),s.compose(o,r,a),t.setMatrixAt(h,s);for(let v=0;v<3;v++)o.set(m+(n()-.5)*1.8*f,y+3.8*f+(v?n()*.9:0),p+(n()-.5)*1.8*f),a.set(2.3*f*(1-v*.18),1.7*f,2.3*f*(1-v*.18)),s.compose(o,r,a),i.setMatrixAt(d,s),i.setColorAt(d,l.set(n()<.18?"#8aa874":c[n()*4|0])),d++;h++}t.count=h,i.count=d,ze.add(t,i)}{let n=new me,e=new Xe({color:15785176,fog:!0}),t=new Xe({color:7303055,fog:!0}),i=new Xe({color:10392230,fog:!0}),s=(o,l,c,h,d,u,p)=>{let g=new ie(new xt(o,l,c),h);return g.position.set(d,u,p),n.add(g),g};s(34,7,26,i,0,3.5,0);let r=7,a=24;for(let o=0;o<4;o++){s(a,5,a*.75,e,0,r+2.5,0);let l=new ie(new Et(a*.78,3.2,4),t);l.rotation.y=Math.PI/4,l.position.y=r+6.4,l.scale.z=.75,n.add(l),r+=5.2,a-=4.5}n.position.set(-70,-8,-210),n.scale.setScalar(1.3),ze.add(n)}for(let n=0;n<4;n++){let e=new me,t=new ie(new Ps(.35,2.6,3,6),ge("#5a3d2e"));t.rotation.x=Math.PI/2,t.scale.set(1,1,.6),e.add(t);let i=pt(mt,16758896,3.2,.9,!0);i.position.set(0,1,-1.2),e.add(i);let s=new ie(new It(.2,8,6),new Xe({color:16767392}));s.position.set(0,.8,-1.2),e.add(s),e.userData={u:.1+n*.22,sp:.0035+n*6e-4},ze.add(e),e0.push(e)}}var fd=null;function oM(){let n=new xt(10,26,12,12,16,12),e=n.attributes.position,t=Jt(3),i=new Float32Array(e.count*3),s=new Ce,r=new Ce("#d0aa8c"),a=new Ce("#6d5a62"),o=(h,d,u)=>Math.sin(h*1.3+d*.7)*.35+Math.sin(u*1.7+d*1.1)*.3+Math.sin(h*3.1+u*2.3+d*.4)*.15;for(let h=0;h<e.count;h++){let d=e.getX(h),u=e.getY(h),p=e.getZ(h);if(u<13-.01){let m=o(d,u,p)*1.6+(t()-.5)*.25,f=p>5.9,y=Math.abs(d)>4.9;e.setX(h,d+(y?m:m*.3)*(Math.abs(d)<4.9?.3:1)),e.setZ(h,p+(f?m*.35:m*.6))}let g=Mt((u+13)/26);s.copy(a).lerp(r,g);let S=(t()-.5)*.06;i[h*3]=s.r+S,i[h*3+1]=s.g+S,i[h*3+2]=s.b+S}n.setAttribute("color",new Yt(i,3)),n.computeVertexNormals();let l=n.attributes.uv;for(let h=0;h<l.count;h++)l.setXY(h,l.getX(h)*3.2,l.getY(h)*3.2);let c=new ie(n,new ki({vertexColors:!0,flatShading:!0,map:nd("rock"),gradientMap:id}));c.position.set(-9,-9,-1),c.receiveShadow=!0,c.castShadow=!0,ze.add(c);{let h=new ie(new xt(10.4,.5,12.4),ge("#8fa57c"));h.position.set(-9,3.95,-1),ze.add(h)}{let h=Jt(11),d=new me;ze.add(d);let u=(g,S,m)=>{let f=new ie(new Qe(.15*m,.28*m,2.6*m,6),ge("#4b342a"));f.position.set(g,4.2+1.3*m,S),f.rotation.z=.2,d.add(f),[[0,2.9,0,1.5,.5],[.7,2.2,.3,1.1,.4],[-.8,1.7,-.2,.9,.35]].forEach(([y,v,x,b,E],A)=>{let _=new ie(new Ct(1,1),ge(["#4f7254","#5b8160","#44654a"][A]));_.position.set(g+y*m,4.2+v*m,S+x*m),_.scale.set(b*m*1.2,E*m*1.3,b*m),d.add(_)})};u(-6.6,-3.6,1.2),u(-12.4,-1.2,.9);let p=(g,S,m)=>{let f=new ie(new Qe(.12*m,.24*m,2.2*m,6),ge("#5a3d33"));f.position.set(g,4.2+1.1*m,S),d.add(f),[[0,2.6,0,1.2],[.6,2.2,.3,.9],[-.5,2.3,-.3,.8]].forEach(([y,v,x,b],E)=>{let A=new ie(new Ct(b*m,1),ge(["#d9573a","#e8793a","#c9432f"][E]));A.position.set(g+y*m,4.2+v*m,S+x*m),d.add(A)})};p(-7.6,3.4,1),p(-4.4,-4.2,.8);for(let g=0;g<14;g++){let S=-13.2+g%5*.45+h()*.3,m=-4.6+(g/5|0)*.5+h()*.3,f=4.5+h()*2.5,y=new ie(new Qe(.06,.08,f,5),ge(["#8fb06a","#9cc17a","#7fa05f"][g%3]));y.position.set(S,4.2+f/2,m),d.add(y);let v=new ie(new Ct(.6,0),ge("#a6c47a"));v.scale.set(1,.5,1),v.position.set(S,4.2+f,m),d.add(v)}for(let g=0;g<26;g++){let S=-13.6+h()*9,m=-5+h()*9,f=new ie(new Et(.22,.9+h()*.6,4),ge(["#9bb070","#b3b87a","#86a068"][g%3]));f.position.set(S,4.2+.5,m),f.rotation.z=(h()-.5)*.5,d.add(f)}for(let g=0;g<6;g++){let S=new ie(new Ct(.45+h()*.5,0),ge(["#7e7a74","#8a8a7c","#6f7d68"][g%3]));S.position.set(-13+h()*8.5,4.3,-5+h()*9),S.scale.y=.6,d.add(S)}for(let g=0;g<7;g++){let S=new ie(new Ct(.5+h()*.3,1),ge(["#e58aa8","#d9708f","#f3a9c0","#6e9a68"][g%4]));S.position.set(-13.5+h()*9,4.5,-4.5+h()*9),S.scale.y=.7,d.add(S)}Vs()&&d.children.filter(g=>Math.hypot(g.position.x-ud,g.position.z-dd)<Wm).forEach(g=>d.remove(g))}if(!Vs()){let h=new me;h.position.set(-12.2,4.2,1.8),ze.add(h);let d=new ie(new Qe(.22,.38,3,6),ge("#5a3d33"));d.position.y=1.5,d.rotation.z=.08,h.add(d),[[0,3.6,0,1.7],[1.2,3.2,.4,1.3],[-1.1,3.3,-.3,1.2],[.2,4.4,.2,1.1]].forEach(([u,p,g,S],m)=>{let f=new ie(new Ct(S,1),ge(["#f3bccb","#eea9bd","#f8d0da","#e99fb4"][m]));f.position.set(u,p,g),h.add(f)})}{let h=Jt(5);for(let d=0;d<8;d++){let u=1+h()*2,p=new ie(new Ct(u,0),ge("#7b6a70"));p.position.set(-14+h()*12,-13,6+h()*3),p.rotation.set(h()*3,h()*3,0),ze.add(p)}}}function t0(){sM(),rM(),Jm(),$m(),aM(),oM()}var lM=Zc.clone().normalize();function n0(n){{let e=it.T;zs.sunDir.value.copy(lM),zs.sunCol.value.set(1,.72,.5),zs.misc.value.set(.55,.05,.5,e),Qm.forEach(t=>{t.position.x+=n*t.userData.v,t.position.x>160&&(t.position.x=-160),t.position.x<-160&&(t.position.x=160),t.material.opacity=t.userData.o*(.8+.2*Math.sin(e*.12+t.userData.ph))})}e0.forEach(e=>{let t=e.userData;t.u+=t.sp*n,t.u>1&&(t.u-=1);let i=30-t.u*240,s=Wr(i)+Math.sin(it.T*.3+t.u*20)*1.2;e.position.set(s,qc+.1+Math.sin(it.T*.9+t.u*9)*.04,i);let r=i-1,a=Wr(r);e.rotation.y=Math.atan2(-(a-s),-(r-i))+Math.PI,e.scale.setScalar(1+t.u*0)}),fd&&(fd.offset.y=it.T*.004%1),jm.forEach((e,t)=>{e.position.x+=n*(.5+t*.08),e.position.x>110&&(e.position.x=-110)}),Km.forEach((e,t)=>{e.position.x+=n*(.4+t*.05),e.position.x>260&&(e.position.x=-260)})}var i0=[],pd=260,s0=new Float32Array(pd*6),r0=[],md=60,Jc=new Float32Array(md*3),a0=[],$c,jc,Xr,Kc,co;function o0(){for(let n=0;n<12;n++){let e=pt(Hs,15328506,2,0);e.userData.ph=n/12,ze.add(e),i0.push(e)}$c=new bt;for(let n=0;n<pd;n++)r0.push([Math.random()*30-12,Math.random()*18,Math.random()*18-8]);$c.setAttribute("position",new Yt(s0,3)),Xr=new Ta($c,new Ar({color:13621503,transparent:!0,opacity:0,fog:!0})),Xr.frustumCulled=!1,ze.add(Xr),jc=new bt;for(let n=0;n<md;n++)a0.push([Math.random()*30-14,Math.random()*9+1,Math.random()*14-6,Math.random()*6.28]);jc.setAttribute("position",new Yt(Jc,3)),Kc=new bi({color:16773792,size:.4,map:mt,transparent:!0,opacity:0,blending:Vi,depthWrite:!1}),co=new zi(jc,Kc),co.frustumCulled=!1,ze.add(co)}function l0(n,e,t){let i=it.T;if(i0.forEach((s,r)=>{let a=(i*.07+s.userData.ph)%1;s.position.set(4.4+a*3.2+Math.sin(i*.6+r)*.3,9.4+a*5.5,-.2+Math.sin(i*.4+r*2)*.2);let o=1+a*4.2;s.scale.set(o,o,1),s.material.opacity=.38*(1-a)*Math.min(1,a*8)*wn.smoke}),Xr.material.opacity=.28*wn.rain,Xr.visible=wn.rain>.02,Xr.visible){for(let s=0;s<pd;s++){let r=r0[s];r[1]-=15*n,r[1]<-2&&(r[1]=17+Math.random()*3,r[0]=Math.random()*34-14,r[2]=Math.random()*20-9),s0.set([r[0],r[1],r[2],r[0]-.12,r[1]+.7,r[2]],s*6)}$c.attributes.position.needsUpdate=!0}if(Kc.opacity=Mt(e*.9+(t?.3:0)-.1,0,.9),co.visible=Kc.opacity>.02,co.visible){for(let s=0;s<md;s++){let r=a0[s],a=i*.4+r[3];Jc[s*3]=r[0]+Math.sin(a*2+s)*1.5,Jc[s*3+1]=r[1]+Math.sin(a*3+s)*.5,Jc[s*3+2]=r[2]+Math.cos(a*1.7+s)*1.5}jc.attributes.position.needsUpdate=!0}}var Qc=[],cM=0;function c0(){for(let n=0;n<40;n++){let e=pt(mt,16777215,.4,0,!0);e.visible=!1,ze.add(e),Qc.push({s:e,life:0,vx:0,vy:0,vz:0})}}function gd(n,e,t,i,s,r,a){for(let o=0;o<i;o++){let l=Qc[cM++%Qc.length];l.s.position.set(n,e,t),l.s.material.color.set(s),l.s.visible=!0,l.life=1,l.vx=(Math.random()-.5)*r,l.vy=Math.random()*r*.6+(a||.5),l.vz=(Math.random()-.5)*r,l.s.scale.setScalar(.25+Math.random()*.3)}}var Xs=n=>gd(n[0],n[1],n[2]+.5,22,16771504,5,2);function h0(n){Qc.forEach(e=>{if(e.s.visible){if(e.life-=n*.9,e.life<=0){e.s.visible=!1;return}e.s.position.x+=e.vx*n,e.s.position.y+=e.vy*n,e.s.position.z+=e.vz*n,e.vy-=2.2*n,e.s.material.opacity=e.life*.9}})}var u0="#dcae92";var d0="#d9b995",Jn="#b0806a",Ai="#a1918c",f0="#a9a4c6",p0="#e7a293";var et,m0=()=>(et=new me,et),Yi=n=>(Hc.push(n),n),qr=n=>9.4-(n+1)*(2.2/3.4),Zi=Math.atan(2.2/3.4),An=n=>{let e=new me,t=new me,i=new me;return e.userData.itemId=n,e.add(t,i),et.add(e),Xt[n]={id:n,g:e,b:t,f:i,blobs:[]}},eh={paint:null};var he={th:.3,ph:.15,r:16,tx:2.2,ty:5.6,tz:.5,tth:.3,tph:.15,tr:16,gx:2.2,gy:5.6,gz:.5,focusT:0},Yr=[2.2,5.6,.5],hM=()=>{he.gx=Mt(he.gx,-4,9),he.gy=Mt(he.gy,3,9),he.gz=Mt(he.gz,-3,4)};function Jr(){he.gx=Yr[0],he.gy=Yr[1],he.gz=Yr[2],he.tr=16,he.tth=.3,he.tph=.15,he.focusT=0}var Zr=n=>{he.tr=Mt(he.tr*n,9,34)};function ho(n,e){let t=he.r*.0016,i=Math.sin(he.th),s=Math.cos(he.th);he.gx+=-n*s*t,he.gz+=n*i*t,he.gy+=e*t,he.focusT=0,hM()}function xd(n){he.gx=n.focus[0],he.gy=n.focus[1],he.gz=n.focus[2],he.tr=Math.min(he.tr,14),he.focusT=4.5}function g0(){let n=document.createElement("div");n.id="camctl",n.style.cssText="position:fixed;right:max(10px,env(safe-area-inset-right));top:64px;z-index:6;display:flex;flex-direction:column;gap:8px",[["+","Acercar",()=>Zr(.8)],["\u2212","Alejar",()=>Zr(1.25)],["\u2302","Centrar vista",Jr]].forEach(([e,t,i])=>{let s=document.createElement("button");s.textContent=e,s.title=s.ariaLabel=t,s.style.cssText="width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--panel);color:var(--ink);font:600 1.2rem system-ui;cursor:pointer;touch-action:manipulation",s.onclick=r=>{r.stopPropagation(),i()},n.appendChild(s)}),document.body.appendChild(n)}function x0(){addEventListener("keydown",n=>{if(!it.started)return;let e=n.key;e==="+"||e==="="?Zr(.85):e==="-"||e==="_"?Zr(1.18):e==="r"||e==="R"||e==="0"?Jr():e==="ArrowLeft"?he.tth=Mt(he.tth-.08,-.95,.95):e==="ArrowRight"?he.tth=Mt(he.tth+.08,-.95,.95):e==="ArrowUp"?he.tph=Mt(he.tph+.03,.03,.42):e==="ArrowDown"&&(he.tph=Mt(he.tph-.03,.03,.42))})}function y0(n,e){let t=it.T;he.focusT>0&&(he.focusT-=n,he.focusT<=0&&(he.gx=Yr[0],he.gy=Yr[1],he.gz=Yr[2],he.tr=Math.max(he.tr,16)));let i=1-Math.pow(.004,n);he.th+=(he.tth-he.th)*i,he.ph+=(he.tph-he.ph)*i,he.r+=(he.tr-he.r)*i,he.tx+=(he.gx-he.tx)*i*.6,he.ty+=(he.gy-he.ty)*i*.6,he.tz+=(he.gz-he.tz)*i*.6,e&&(he.tth+=Math.sin(t*.12)*3e-4);let s=he.th,r=he.ph;tn.position.set(he.tx+he.r*Math.sin(s)*Math.cos(r),he.ty+he.r*Math.sin(r),he.tz+he.r*Math.cos(s)*Math.cos(r)),tn.lookAt(he.tx,he.ty,he.tz)}var uo={g:null},qs=n=>n[vs()]||n.es,Gn=null,Ri=null,v0="tomo-cartel-n",uM=()=>{try{return+localStorage.getItem(v0)||0}catch{return 0}},dM=n=>{try{localStorage.setItem(v0,String(n))}catch{}},fM=()=>ao()>uM();function pM(){let n=uo.g;n&&(he.gx=n.position.x,he.gy=n.position.y+2,he.gz=n.position.z,he.tr=Math.min(he.tr,12),he.focusT=4.5,he.tth=-.35,he.tph=.12)}function _0(){if(!Gn)return;pM(),dM(ao()),Ri&&(Ri.style.outline="none");let n=ao(),e=Vc(),t=n>=8;Gn.querySelector(".lines").innerHTML=e.map(i=>"<div>"+i+"</div>").join(""),Gn.querySelector(".meta").textContent=qs({es:"Fragmentos descifrados: "+n+" / 8 \xB7 luces del r\xEDo: "+Ti(),en:"Fragments deciphered: "+n+" / 8 \xB7 river lights: "+Ti(),ja:"\u89E3\u8AAD\u3057\u305F\u65AD\u7247\uFF1A"+n+" / 8 \u30FB\u5DDD\u306E\u706F\uFF1A"+Ti()}),Gn.querySelector(".hint").textContent=qs(t?{es:"El cartel est\xE1 completo. Algo despert\xF3 en el jard\xEDn del acantilado.",en:"The sign is complete. Something woke in the cliff garden.",ja:"\u770B\u677F\u304C\u5B8C\u6210\u3057\u307E\u3057\u305F\u3002\u5D16\u306E\u5EAD\u3067\u4F55\u304B\u304C\u76EE\u899A\u3081\u307E\u3057\u305F\u3002"}:{es:"Cada 4 linternas que recoges en el R\xEDo descifran un fragmento. Sigue el agua y deja que te lleve.",en:"Every 4 lanterns you collect in the River deciphers a fragment. Follow the water and let it carry you.",ja:"\u5DDD\u3067\u30E9\u30F3\u30BF\u30F3\u30924\u3064\u96C6\u3081\u308B\u3054\u3068\u306B\u65AD\u7247\u304C\u3072\u3068\u3064\u89E3\u8AAD\u3055\u308C\u307E\u3059\u3002\u6C34\u306E\u6D41\u308C\u306B\u8EAB\u3092\u307E\u304B\u305B\u307E\u3057\u3087\u3046\u3002"}),Gn.style.display="flex"}function b0(n){Ri=document.createElement("button"),Ri.type="button",Ri.textContent=qs({es:"Cartel",en:"Sign",ja:"\u770B\u677F"}),Ri.style.cssText="position:fixed;right:max(10px,env(safe-area-inset-right));top:216px;z-index:6;min-height:44px;padding:8px 14px;border-radius:99px;border:1px solid var(--line);background:var(--panel);color:var(--ink);font:600 .85rem system-ui;cursor:pointer;touch-action:manipulation",Ri.onclick=s=>{s.stopPropagation(),_0()},document.body.appendChild(Ri),Gn=document.createElement("div"),Gn.style.cssText="position:fixed;inset:0;z-index:30;display:none;align-items:center;justify-content:center;background:rgba(30,20,28,.55);padding:20px",Gn.innerHTML='<div style="max-width:420px;width:100%;background:#5a3d2e;border:6px solid #3b261b;border-radius:10px;padding:22px 20px;color:#f6e3b4;text-align:center;box-shadow:0 10px 40px rgba(0,0,0,.45)"><div class="lines" style="font:italic 600 1.45rem/1.5 Georgia,serif;margin-bottom:14px"></div><div class="meta" style="font:600 .78rem system-ui;opacity:.8;margin-bottom:6px"></div><div class="hint" style="font:.82rem/1.4 system-ui;opacity:.85;margin-bottom:14px"></div><button type="button" class="x" style="min-height:44px;padding:8px 22px;border-radius:99px;border:1px solid #b8996a;background:#3b261b;color:#f6e3b4;font:600 .9rem system-ui;cursor:pointer"></button></div>',Gn.querySelector(".x").textContent=qs({es:"Cerrar",en:"Close",ja:"\u9589\u3058\u308B"}),Gn.onclick=s=>{(s.target===Gn||s.target.classList.contains("x"))&&(Gn.style.display="none")},document.body.appendChild(Gn);let e=new ai,t=new le,i=null;return nn.addEventListener("pointerdown",s=>{i={x:s.clientX,y:s.clientY,t:performance.now()}}),nn.addEventListener("pointerup",s=>{if(!i||!uo.g||!it.started)return;let r=Math.hypot(s.clientX-i.x,s.clientY-i.y),a=performance.now()-i.t;if(i=null,r>8||a>450)return;let o=nn.getBoundingClientRect();t.set((s.clientX-o.left)/o.width*2-1,-((s.clientY-o.top)/o.height)*2+1),e.setFromCamera(t,tn),e.intersectObject(uo.g,!0).length&&_0()}),()=>{fM()?(Ri.style.outline="2px solid #ffc27a",Ri.style.outlineOffset="2px",setTimeout(()=>n(qs({es:"El cartel de la entrada descifr\xF3 algo nuevo \xB7 toca \xABCartel\xBB para leerlo",en:"The entrance sign deciphered something new \xB7 tap \u201CSign\u201D to read it",ja:"\u5165\u53E3\u306E\u770B\u677F\u306B\u65B0\u3057\u3044\u8A00\u8449\u304C\u73FE\u308C\u307E\u3057\u305F \u30FB\u300C\u770B\u677F\u300D\u3092\u30BF\u30C3\u30D7\u3057\u3066\u8AAD\u307F\u307E\u3057\u3087\u3046"})),3200)):Ti()===0&&setTimeout(()=>n(qs({es:"Junto a la entrada hay un cartel. Toca \xABCartel\xBB para leerlo",en:"There is a sign by the entrance. Tap \u201CSign\u201D to read it",ja:"\u5165\u53E3\u306E\u305D\u3070\u306B\u770B\u677F\u304C\u3042\u308A\u307E\u3059\u3002\u300C\u770B\u677F\u300D\u3092\u30BF\u30C3\u30D7\u3057\u3066\u8AAD\u307F\u307E\u3057\u3087\u3046"})),3600)}}function M0(){m0(),ze.add(et),ae(12.4,.28,.22,Jn,2,ue-.35,3.9,et),ae(12.4,.28,.22,Jn,2,ue-.35,-2.9,et);for(let e=0;e<8;e++)ae(.2,.26,7.2,"#8f6f66",-3.8+e*1.65,ue-.35,.5,et);[[-3.6,3.7],[-3.6,-2.7],[1,3.7],[1,-2.7],[4.8,3.7],[4.8,-2.7],[7.7,3.7],[7.7,-2.7]].forEach(([e,t])=>Yi(ae(.38,18.4,.38,"#9a7a70",e,ue-9.5,t,et)));for(let e of[1,4.8]){let t=ae(.15,.15,6.6,"#8f6f66",e,ue-5,.5,et);t.rotation.x=0}let n=(e,t,i,s,r)=>{let a=Math.hypot(i-e,s-t),o=ae(a,.16,.16,"#8f6f66",(e+i)/2,(t+s)/2,r,et);o.rotation.z=Math.atan2(s-t,i-e)};n(-3.6,ue-4,1,ue-.5,3.7),n(1,ue-.5,4.8,ue-4,3.7),n(4.8,ue-4,7.7,ue-.5,3.7),n(1,ue-4,4.8,ue-.5,3.7),n(4.8,ue-.5,7.7,ue-4,3.7),ae(12,.1,6.8,"#4a4470",2,ue-.6,.5,et),Yi(ae(8.2,3.9,.2,"#eadfc2",1.5,ue+1.95,-2.95,et)),[-2.55,1.35,3.5,5.55].forEach(e=>ae(.22,3.9,.12,Jn,e,ue+1.95,-2.8,et)),[ue+.95,ue+3.05,ue+3.82].forEach(e=>ae(8.2,.18,.12,Jn,1.5,e,-2.8,et)),Yi(ae(8.1,.9,.1,f0,1.5,ue+.45,-2.8,et));for(let e=0;e<8;e++)ae(.04,.9,.02,"#8f8ab0",-2.1+e*1,ue+.45,-2.74,et);{let e=new Hi;[[3,0],[-1,0],[-1,3.9],[1,5.2],[3,3.9]].forEach(([t,i],s)=>s?e.lineTo(t,i):e.moveTo(t,i));for(let t of[-2.6,5.4]){let i=new Oa(e,{depth:.2,bevelEnabled:!1});i.rotateY(Math.PI/2);let s=new ie(i,ge(u0));s.position.set(t,ue,0),et.add(s),Yi(s)}}Yi(ae(8.4,.8,.22,Jn,1.5,7.8,1,et)),[-2.5,5.5].forEach(e=>Yi(ae(.3,3.5,.3,Jn,e,ue+1.75,1,et)));{let e=new ie(new Qe(.3,.3,10.6,10),ge("#3e4659"));e.rotation.z=Math.PI/2,e.position.set(1.5,9.62,-1),et.add(e),[-1,1].forEach(t=>{let i=new ie(new Et(.42,.95,6),ge("#3e4659"));i.position.set(1.5+t*5.4,9.95,-1),i.rotation.z=-t*.35,et.add(i);let s=new ie(new It(.22,8,6),ge("#c9a14a"));s.position.set(1.5+t*5.55,10.5,-1),et.add(s)})}ae(9.9,.18,.3,Jn,1.5,9.5,-1,et),ae(9.9,.2,.22,Jn,1.5,7.2,2.45,et),ae(9.9,.2,.22,Jn,1.5,7.2,-4.45,et),ae(.2,.2,6.8,Jn,-3.3,7.15,-1,et),ae(.2,.2,6.8,Jn,6.3,7.15,-1,et),[-2.6,5.6].forEach(e=>{let t=new me;t.position.set(e,6.5,2.1),et.add(t),ae(.03,.5,.03,"#6a5058",0,.5,0,t);let i=new ie(new It(.26,12,10),ge("#f3e2c2",{emissive:"#ff9a4a",emissiveIntensity:0}));i.scale.set(1,1.25,1),t.add(i),[.3,-.3].forEach(a=>ae(.24,.06,.24,"#2f2a2a",0,a,0,t)),[-.12,0,.12].forEach(a=>{let o=new ie(new Pn(.255*Math.sqrt(1-Math.pow(a/.33,2)),.008,4,16),ge("#8e3d2e"));o.rotation.x=Math.PI/2,o.position.y=a,t.add(o)});let s=pt(mt,16761466,3.2,0,!0);t.add(s);let r=new Gi(16761466,0,11,1.5);t.add(r),Ot.porchL.push({body:i,gl:s,L:r})}),[[-3.2,"#e6a091","#f5c9d9"],[-2.4,"#7fc3bd","#f8e5a0"],[-1.6,"#d9a9cb","#ffffff"],[-.8,"#a6cf92","#f5c9d9"]].forEach(([e,t,i])=>{ae(.5,.4,.5,t,e,ue+.2,3.3,et);let s=new ie(new Ct(.34,0),ge("#79b08a"));s.position.set(e,ue+.55,3.3),et.add(s),[[.1,.8],[-.12,.72],[.05,.95]].forEach(([r,a])=>{let o=new ie(new Ct(.1,0),ge(i));o.position.set(e+r,ue+a,3.35),et.add(o)})});{let e=new me;e.position.set(7.3,ue,-.2),et.add(e);let t="#aaa59d",i=(u,p,g,S,m=8)=>{let f=new ie(new Qe(u,p,g,m),ge(t));return f.position.y=S,e.add(f),f};i(.5,.55,.2,.1),i(.18,.22,1.1,.75),i(.5,.42,.16,1.38);let s=new ie(new xt(.5,.5,.5),ge("#ffe6b0",{emissive:"#ff9a4a",emissiveIntensity:0}));s.position.y=1.7,e.add(s);let r=new ie(new Et(.62,.42,4),ge(t));r.rotation.y=Math.PI/4,r.position.y=2.17,e.add(r);let a=new ie(new It(.12,8,6),ge(t));a.position.y=2.45,e.add(a);let o=pt(mt,16761466,3,0,!0);o.position.y=1.7,e.add(o),Ot.porchL.push({body:s,gl:o,L:{intensity:0}}),Yi(e.children[1]);let l=new me;l.position.set(6.4,ue,-2.2),et.add(l);let c=new ie(new Qe(.5,.42,.4,10),ge("#b1aca3"));c.position.y=.2,l.add(c);let h=new ie(new qn(.42,10).rotateX(-Math.PI/2),new Xe({color:8366256}));h.position.y=.38,l.add(h);let d=new ie(new Qe(.05,.05,.9,6),ge("#7aa05f"));d.rotation.z=1.2,d.position.set(.35,.75,0),l.add(d)}{let t=ue,i=15.1,s=ue-5.9,r=Math.hypot(i-8.2,s-t),a=Math.atan2(s-t,i-8.2);[2.15,3.45].forEach(o=>{let l=ae(r,.22,.14,"#8f6f66",(8.2+i)/2,(t+s)/2-.3,o,et);l.rotation.z=a,Yi(l)}),ae(2.4,.2,2.4,d0,15.9,ue-6.1,2.8,et)}{let e=new me;e.position.set(22,Dn(22,wi(22)),wi(22)),et.add(e);let t="#a8392b";[-1.7,1.7].forEach(r=>{let a=new ie(new Qe(.18,.22,4.4,8),ge(t));a.position.set(0,2.2,r),e.add(a)});let i=new ie(new xt(.5,.3,4.6),ge("#2f2a2e"));i.position.set(0,4.5,0),e.add(i);let s=new ie(new xt(.3,.24,3.7),ge(t));s.position.set(0,3.8,0),e.add(s)}{let e=Vc(),t=document.createElement("canvas");t.width=512,t.height=320;let i=t.getContext("2d");i.fillStyle="#6b4a36",i.fillRect(0,0,512,320);for(let h=0;h<46;h++)i.fillStyle="rgba(40,22,14,"+(.05+Math.random()*.08)+")",i.fillRect(0,Math.random()*320,512,1+Math.random()*2);i.strokeStyle="#3b261b",i.lineWidth=10,i.strokeRect(5,5,502,310),i.textAlign="center",i.font='italic 600 40px "Noto Serif JP","Georgia",serif',e.forEach((h,d)=>{i.fillStyle=h.includes("\xB7\xB7\xB7")?"#b8996a":"#f6e3b4",i.fillText(h,256,86+d*58)});let s=new On(t);s.colorSpace=rn,s.anisotropy=8;let r=new me;r.position.set(17.6,Dn(17.6,6.6),6.6),r.rotation.y=.3,r.scale.setScalar(1.4),et.add(r),uo.g=r,[-.95,.95].forEach(h=>{let d=new ie(new xt(.16,1.9,.16),ge("#4b342a"));d.position.set(h,.95,0),r.add(d)});let a=new ie(new xt(2.4,1.5,.1),ge("#6b4a36"));a.position.set(0,1.45,0),r.add(a);let o=new ie(new ri(2.3,1.44),new Xe({map:s}));o.position.set(0,1.45,.056),r.add(o);let l=new ie(new xt(2.7,.1,.5),ge("#3b2a24"));l.position.set(0,2.28,0),l.rotation.x=.1,r.add(l);let c=pt(mt,16761466,2.2,.35,!0);c.position.set(0,1.6,.6),r.add(c)}{let e=Nm(),t=8.2,i=ue,s=15.1,r=ue-5.9;for(let a=0;a<8;a++){let o=(a+.7)/8.6,l=t+(s-t)*o,c=i+(r-i)*o,h=a<e;ae(.08,.7,.08,"#4b342a",l,c+.1,3.75,et);let d=new ie(new It(.2,8,6),new Xe({color:h?16767392:6969938}));if(d.scale.y=1.25,d.position.set(l,c+.62,3.75),et.add(d),h){let u=pt(mt,16761466,1.8,.5,!0);u.position.set(l,c+.62,3.75),et.add(u)}}}{let e=pt(mt,16761466,3,.55,!0);e.position.set(16.5,ue-5.2,3.5),et.add(e),ae(.08,1.1,.08,"#6a5058",16.5,ue-5.7,3.5,et)}}function S0(n){let e=ue+.07,t=(s,r,a,o,l,c,h,d=10)=>{let u=new ie(new Qe(s,r,a,d),ge(o));return u.position.set(l,c,h),n.add(u),u},i=(s,r,a,o,l,c=1,h=1,d=1)=>{let u=new ie(new It(s,10,8),ge(r));return u.scale.set(c,h,d),u.position.set(a,o,l),n.add(u),u};ae(1.35,.16,.55,"#4b342a",.55,e+.08,-2.5,n),ae(1.2,.04,.5,"#e8dcc0",.55,e+.18,-2.5,n),t(.09,.14,.34,"#2f4a74",.3,e+.37,-2.5),t(.06,.09,.06,"#e8dcc0",.3,e+.57,-2.5);{let s=ae(.03,.7,.03,"#5a3d33",.32,e+.9,-2.5,n);s.rotation.z=-.35;let r=ae(.03,.45,.03,"#5a3d33",.2,e+.78,-2.5,n);r.rotation.z=.5,[[.18,1.18],[.05,1.02],[.4,1.12],[.12,.88],[.28,1]].forEach(([a,o],l)=>i(.075,["#f3bccb","#eea9bd","#f8d0da"][l%3],.3+a*.6,e+o,-2.5+(l%2?.04:-.04)))}t(.1,.1,.14,"#c9a14a",1.05,e+.25,-2.5);{let a=e+.42;ae(1.7,.07,1.05,"#5a3d2e",1.5,a,-.2,n),ae(1.55,.03,.9,"#8e5a3a",1.5,a+.05,-.2,n),[[-.75,-.45],[.75,-.45],[-.75,.45],[.75,.45]].forEach(([o,l])=>ae(.09,.4,.09,"#4b342a",1.5+o,e+.2,-.2+l,n)),ae(.55,.025,.36,"#2f2a2a",1.5-.15,a+.075,-.2,n),i(.13,"#9a6a3c",1.5-.2,a+.19,-.2,1,.85,1),t(.03,.03,.14,"#9a6a3c",1.5-.04,a+.18,-.2,6).rotation.z=-.9,i(.05,"#9a6a3c",1.5-.2,a+.33,-.2),[.12,.34].forEach(o=>t(.05,.04,.06,"#e8dcc0",1.5+o-.1,a+.1,-.2+.2,8)),t(.1,.1,.03,"#d9c08a",1.5+.55,a+.08,-.2-.15,10),[[1.5,-1.15,"#8e3d2e"],[1.5,.8,"#2f4a74"],[2.85,-.2,"#c9a14a"]].forEach(([o,l,c],h)=>{ae(.78,.1,.78,c,o,e+.06,l,n),ae(.5,.02,.5,"#f0e6cf",o,e+.12,l,n)})}{t(.3,.27,.34,"#2f4a74",0,e+.17,.95,12),t(.24,.24,.03,"#33302f",0,e+.33,.95,12);let s=new ie(new qn(.2,12).rotateX(-Math.PI/2),new Xe({color:16742970}));s.position.set(0,e+.355,.95),n.add(s),i(.14,"#33302f",0,e+.5,.95,1.15,.85,1.15),t(.035,.03,.18,"#33302f",.17,e+.52,.95,6).rotation.z=-.8}ae(.6,1.15,1.1,"#7a4a34",-2.05,e+.57,.65,n),[.25,.57,.9].forEach(s=>{ae(.03,.3,1,"#5a3524",-1.74,e+s,.65,n),[-.2,.2].forEach(r=>ae(.04,.06,.1,"#c9a14a",-1.72,e+s,.65+r,n))}),ae(.36,.06,.36,"#4b342a",3.05,e+.03,-2.3,n),ae(.3,.5,.3,ge("#f6ecd4",{emissive:"#ffcf8a",emissiveIntensity:.5}),3.05,e+.34,-2.3),ae(.4,.05,.4,"#4b342a",3.05,e+.62,-2.3,n)}function E0(){{let n=An("piso"),e=Jt(21);for(let t=0;t<24;t++){let i=-3.76+t*.5;if(ae(.46,.14,7,["#dcbc98","#d4b290","#e0c19e"][t%3],i,ue-.07,.5,n.f),e()>.27){let s=7*(.55+.45*e()),r=ae(.46,.14,s,["#a8978c","#9d8c82","#b0a095"][t%3],i,ue-.07+(e()-.5)*.1,.5+(7-s)*(e()>.5?.5:-.5),n.b);r.rotation.y=(e()-.5)*.06,r.rotation.z=(e()-.5)*.05}}for(let t=0;t<4;t++)for(let i=0;i<5;i++){let s=-1.35+t*1.9,r=-2.25+i*.95;ae(1.9,.05,.95,"#56633f",s,ue+.03,r,n.f),ae(1.78,.06,.83,"#d2c58e",s,ue+.035,r,n.f)}S0(n.f),Tn(n,14,31,t=>[-3.5+t()*11,ue+.04,-1+t()*4.6],.35,.75)}{let n=An("barandal"),e=Jt(5);for(let t=0;t<11;t++){let i=-3.8+t*1.2;if(ae(.13,1.05,.13,"#ecc9ae",i,ue+.52,3.9,n.f),![2,5,8].includes(t)){let s=ae(.13,1.05,.13,Ai,i,ue+.52,3.9,n.b);s.rotation.z=(e()-.5)*.34}}ae(12,.12,.15,"#f1d3bb",2.2,ue+1.06,3.9,n.f),ae(12,.1,.12,"#f1d3bb",2.2,ue+.55,3.9,n.f),[[-2.9,1.6],[2.6,2.4],[6.4,2.8]].forEach(([t,i])=>{let s=ae(i,.12,.14,Ai,t,ue+1.02+(e()-.5)*.06,3.9,n.b);s.rotation.z=(e()-.5)*.1}),[[-1.3,2.1],[4.3,1.6]].forEach(([t,i])=>ae(i,.1,.12,Ai,t,ue+.5,3.9,n.b)),Tn(n,6,41,t=>[-3.5+t()*11,ue+1.1,3.9],.28,.5)}{let n=An("escalera"),e=Jt(9),t=Math.atan2(-5.9,6.9);for(let i=0;i<9;i++){let s=8.9+i*.72,r=ue-.28-i*.63;if(ae(.8,.12,1.5,"#e0c2a2",s,r,2.8,n.f),![2,5].includes(i)){let a=ae(.8,.12,1.5,i%2?Ai:"#b3a398",s,r+(e()-.5)*.06,2.8,n.b);a.rotation.z=(e()-.5)*.28,a.rotation.x=(e()-.5)*.1}}for(let i=0;i<9;i+=2)ae(.09,1,.09,"#f1d3bb",8.9+i*.72,ue+.22-i*.63,3.62,n.f);{let i=ae(Math.hypot(6.9,5.9),.1,.1,"#f1d3bb",12.1,ue-2.7,3.62,n.f);i.rotation.z=t}[1,5].forEach(i=>ae(.09,.7,.09,Ai,8.9+i*.72,ue+.05-i*.63,3.62,n.b)),Tn(n,8,51,i=>{let s=i()*8;return[8.9+s*.72,ue-.2-s*.63,2.8+(i()-.5)*1.1]},.3,.5)}{let n=An("techo"),e=Jt(33),t=(r,a)=>{let o=new me;return[[.7,Zi],[-2.7,-Zi]].forEach(([l,c])=>{let h=ae(9.8,.24,4.1,r,1.5,8.3,l,o);h.rotation.x=c+(a&&l>0,0),h.position.z=l}),o},i=t(p0),s=t("#9b8b88");n.f.add(i),n.b.add(s);for(let r=0;r<11;r++){let a=(r+.5)/11,o=2.3-a*3.3,l=qr(o)+.13,c=ae(9.8,.04,.07,"#f6c3b4",1.5,l,o,n.f);c.rotation.x=Zi;let h=ae(9.8,.04,.07,"#7e706e",1.5,l,o,n.b);h.rotation.x=Zi}[[.5,1.3,1,.7],[3.6,.4,1.2,.8],[-1.8,1.6,.9,.6],[5.6,1.2,.8,.7]].forEach(([r,a,o,l])=>{let c=ae(o,.03,l,"#2d2848",r,qr(a)+.14,a,n.b);c.rotation.x=Zi}),Tn(n,14,61,r=>{let a=-.9+r()*3.1;return[-3+r()*9,qr(a)+.2,a]},.35,.7,{rx:Zi})}{let n=An("panel"),e=t=>{let i=new me;if(i.position.set(4.4,qr(.9)+.28,.9),i.rotation.x=Zi,!t)ae(2.3,.9,1.5,"#4b342a",0,.45,0,i),ae(2,.62,.05,ge("#f6ecd4",{emissive:"#ffcf8a",emissiveIntensity:.55}),0,.5,.78,i),[-.5,0,.5].forEach(s=>ae(.05,.62,.07,"#4b342a",s,.5,.8,i)),ae(2,.05,.07,"#4b342a",0,.5,.8,i),ae(2.7,.13,1.95,"#4f596f",0,1,0,i),ae(2.4,.1,1.7,"#4f596f",0,1.12,0,i),ae(2.7,.06,.1,"#c9a14a",0,.93,1,i);else{ae(2,.1,1.3,"#2d2848",0,.02,0,i);let s=ae(1.7,.07,.3,"#8d7f74",-.2,.18,.2,i);s.rotation.z=.4;let r=ae(1.2,.07,.3,"#8d7f74",.4,.14,-.2,i);r.rotation.z=-.5,r.rotation.y=.4}return i};n.f.add(e(!1)),n.b.add(e(!0)),Tn(n,3,71,t=>[3.3+t()*2.2,qr(.9)+.4,.5+t()*.8],.3,.5,{rx:Zi})}eh.paint=zc(200,340,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#f4e3c4"),i.addColorStop(.55,"#f2c9a4"),i.addColorStop(1,"#e8b49a"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="#d9473a",n.beginPath(),n.arc(140,70,26,0,7),n.fill(),n.fillStyle="rgba(120,110,150,.55)",n.beginPath(),n.moveTo(0,200),n.lineTo(60,130),n.lineTo(110,185),n.lineTo(170,120),n.lineTo(e,190),n.lineTo(e,230),n.lineTo(0,230),n.fill(),n.fillStyle="rgba(70,70,100,.8)",n.beginPath(),n.moveTo(0,260),n.lineTo(50,210),n.lineTo(120,260),n.lineTo(e,230),n.lineTo(e,t),n.lineTo(0,t),n.fill(),n.strokeStyle="#2c2a2e",n.lineWidth=5,n.beginPath(),n.moveTo(40,t),n.bezierCurveTo(30,280,60,250,50,210),n.stroke(),n.fillStyle="#2c2a2e";for(let s=0;s<4;s++)n.beginPath(),n.ellipse(48+s*12,205+s*8,28-s*3,7,0,0,7),n.fill();n.fillStyle="#b8362b",n.fillRect(150,285,22,22)});{let n=An("ventana"),e=-2.84,t=2.4,i=ue+1.95;[[0,.9],[0,-.9]].forEach(([r,a])=>0);let s=(r,a)=>{ae(1.9,.12,.14,r,t,i+.9,e,a),ae(1.9,.12,.14,r,t,i-.9,e,a),ae(.12,1.9,.14,r,t-.9,i,e,a),ae(.12,1.9,.14,r,t+.9,i,e,a)};s("#f2d6c0",n.f),s(Ai,n.b),ae(1.7,1.7,.05,ge("#f6ecd4",{emissive:"#ffd9a8",emissiveIntensity:.6}),t,i,e+.02,n.f),[-.57,0,.57].forEach(r=>ae(.05,1.7,.07,"#4b342a",t+r,i,e+.06,n.f)),[-.57,0,.57].forEach(r=>ae(1.7,.05,.07,"#4b342a",t,i+r,e+.06,n.f)),ae(.07,1.9,.09,"#4b342a",t,i,e+.08,n.f),ae(1.7,1.7,.05,"#2b2644",t,i,e+.02,n.b),[[.8,.04,.5],[.04,.7,-.3],[.5,.04,-.6]].forEach(([r,a,o])=>{let l=ae(r,a,.02,"#e9e6f5",t+o*.3,i+o*.3,e+.06,n.b);l.rotation.z=o*2}),Tn(n,3,81,r=>[t-.7+r()*1.4,i+.95,e+.1],.25,.4,{wall:!1})}}function T0(){{let n=An("librero"),e=-1.4,t=-2.55,i=["#c97d68","#6498b9","#cfb67c","#82ab84","#b0769c","#dad2bc"],s=r=>{let a=new me;a.position.set(e,ue,t);let o=r?Ai:"#d4a98c";ae(.1,2.7,.6,o,-.8,1.35,0,a),ae(.1,2.7,.6,o,.8,1.35,0,a),ae(1.7,2.7,.05,r?"#8e7f7a":"#c49a7d",0,1.35,-.28,a),(r?[0,.9,1.8]:[0,.68,1.36,2.04,2.7]).forEach(h=>ae(1.7,.08,.6,o,0,h+.04,0,a));let c=Jt(r?4:8);if(r){for(let h=0;h<6;h++){let d=ae(.14,.5,.38,i[h],-.6+h*.18,.34+(h>3?.9:0),0,a);d.rotation.z=(c()-.5)*.9}for(let h=0;h<5;h++){let d=ae(.14,.38,.28,i[h],-.5+c()*1.4,.1,.7+c()*.4,a);d.rotation.z=1.4+c()*.4,d.rotation.y=c()*3}}else for(let h=0;h<4;h++){let d=-.7;for(;d<.6;){let u=.1+c()*.12;ae(u,.45+c()*.12,.38,i[c()*6|0],d+u/2,.68*h+.3,0,a),d+=u+.01}}return r&&(a.rotation.z=.1),a};n.f.add(s(!1)),n.b.add(s(!0)),Tn(n,4,91,r=>[e-.7+r()*1.4,ue+2.76,t+(r()-.5)*.3],.25,.4)}{let n=An("cama"),e=4.5,t=-1.6,i=s=>{let r=new me;if(r.position.set(e,ue,t),ae(2,.16,2.8,s?"#a9a2b4":"#f0e6cf",0,.14,0,r),s){let a=ae(1.5,.12,1.2,"#8d86a0",.2,.26,.3,r);a.rotation.y=.3;let o=ae(.9,.1,.3,"#bdb6c9",.2,.24,-1.05,r);o.rotation.y=.2}else{ae(1.9,.15,1.95,"#2f4a74",0,.29,.33,r),[-.55,.15,.85].forEach(o=>ae(1.92,.16,.1,"#f0e6cf",0,.3,.33+o,r));let a=new ie(new Qe(.14,.14,.9,8),ge("#d9c08a"));a.rotation.z=Math.PI/2,a.position.set(0,.34,-1.05),r.add(a)}return r};n.f.add(i(!1)),n.b.add(i(!0)),Tn(n,4,101,s=>[e-.8+s()*1.6,ue+.4,t-1.1+s()*2.2],.3,.5)}Rm();{let n=An("lampara"),e=1.5,t=-1,i=s=>{let r=new me;r.position.set(e,7.15,t),ae(.03,s?.7:1.7,.03,"#6a5058",0,s?.9:1.35,0,r);let a=new ie(new It(.46,14,10),new Ns({color:s?"#9a919c":"#f8ebd0",side:pn,emissive:s?"#000":"#ffcf8a",emissiveIntensity:s?0:.6,flatShading:!0}));if(a.position.y=.1,a.scale.set(1,.85,1),r.add(a),[.4,-.18].forEach(o=>{let l=new ie(new Qe(.2,.2,.06,10),ge("#2f2a2a"));l.position.y=o,r.add(l)}),s)r.rotation.z=.35;else{let o=new ie(new It(.14,10,8),new Xe({color:16773320}));o.position.y=-.02,r.add(o)}return r};n.f.add(i(!1)),n.b.add(i(!0)),Tn(n,1,111,s=>[e,7.45,t],.25,.3)}{let n=An("luces"),e=Jt(13),t=[16751202,16773328,15229002,16767392];for(let i=0;i<3;i++){let s=-3+i*3.1,r=s+3.1;for(let a=0;a<=4;a++){let o=a/4,l=sd(s,r,o),c=7-.35*Math.sin(Math.PI*o),h=2.55,d=t[(i*5+a)%4],u=new ie(new It(.15,10,8),new Xe({color:d}));u.scale.set(1,1.25,1),u.position.set(l,c-.16,h),n.f.add(u);let p=pt(mt,d,1.5,0,!0);if(p.position.copy(u.position),ze.add(p),Ot.bulbs.push(p),!(i===1&&a>0&&a<4)){let g=new ie(new It(.1,8,6),ge("#8d8398"));g.position.set(l,c-.1,h),g.rotation.set(e(),e(),0),n.b.add(g)}if(a<4){let g=sd(s,r,(a+1)/4),S=7-.35*Math.sin(Math.PI*(a+1)/4),m=ae(Math.hypot(g-l,S-c),.02,.02,"#6b4a35",(l+g)/2,(c+S)/2,h,n.f);if(m.rotation.z=Math.atan2(S-c,g-l),i!==1){let f=ae(Math.hypot(g-l,S-c),.02,.02,"#6a6076",(l+g)/2,(c+S)/2,h,n.b);f.rotation.z=m.rotation.z}}}}Tn(n,2,121,i=>[-2+i()*7,7.3,2.4],.2,.3)}{let n=An("cuadro"),e=.55,t=ue+2.2,i=-2.7,s=r=>{let a=new me;a.position.set(e,t,i),r&&(a.rotation.z=.28),ae(.86,1.65,.04,r?Ai:"#2f4a6b",0,0,0,a);let o=new ie(new ri(.62,1.18),r?new Ns({color:"#bcb5c8"}):new Xe({map:eh.paint}));if(o.position.set(0,-.04,.03),a.add(o),[.84,-.84].forEach(l=>{let c=new ie(new Qe(.045,.045,1,8),ge("#5a3d2e"));c.rotation.z=Math.PI/2,c.position.set(0,l,.03),a.add(c)}),r){let l=ae(.7,.02,.02,"#eee9f7",0,0,.05,a);l.rotation.z=.8}return a};n.f.add(s(!1)),n.b.add(s(!0)),Tn(n,1,131,r=>[e,t+.9,i+.1],.22,.3)}{let n=An("plantas"),e=Jt(7);[[6.5,"#2f4a74",0],[7.3,"#9a6a3c",1]].forEach(([t,i,s])=>{ae(.62,.22,.5,i,t,ue+.11,3,n.f),ae(.62,.22,.5,"#a89b92",t,ue+.11,3,n.b);let r=new ie(new Qe(.05,.09,.7,6),ge("#5a3d33"));r.position.set(t,ue+.55,3),r.rotation.z=.25,n.f.add(r),(s?["#f3bccb","#eea9bd","#f8d0da","#e99fb4","#f3bccb"]:["#4f7a58","#5f8f66","#44704f"]).forEach((o,l)=>{let c=new ie(new Ct(s?.2:.26,0),ge(o));c.position.set(t+(l-1)*.18+(e()-.5)*.1,ue+.85+l%2*.14,3+(e()-.5)*.25),s||c.scale.set(1.5,.55,1.2),n.f.add(c)});for(let o=0;o<3;o++){let l=ae(.03,.45,.03,"#8a7a62",t+(e()-.5)*.4,ue+.55,3+(e()-.5)*.3,n.b);l.rotation.z=(e()-.5)*.8}}),Tn(n,2,141,t=>[6.5+t()*.9,ue+.5,3],.25,.35)}{let n=An("nichos"),e=Jt(17);[[-10.9,2.4],[-8.5,-.2],[-11.1,-2.7]].forEach(([t,i])=>{let s=(c,h,d,u,p)=>{let g=new ie(new Qe(c,c,h,6),typeof d=="string"?ge(d):d);return g.rotation.x=Math.PI/2,g.rotation.y=Math.PI/6,g.position.set(t,i,u),p.add(g),g};s(.95,.7,"#c89479",5.2,et),s(.78,.3,ge("#383254"),5.55,n.b),s(.78,.3,new Xe({color:16769190}),5.55,n.f);let r=new ie(new It(.3,10,8),new Ns({color:16774096,emissive:16766602,emissiveIntensity:.9,transparent:!0,opacity:.9}));r.position.set(t,i-.25,5.6),n.f.add(r);let a=pt(mt,16764806,3.2,0,!0);a.position.set(t,i,5.9),ze.add(a),Ot.nichoGlow.push(a);let o=ae(.9,.02,.02,"#cfcbe0",t,i+.2,5.6,n.b);o.rotation.z=.5;let l=ae(.9,.02,.02,"#cfcbe0",t,i-.1,5.6,n.b);l.rotation.z=-.4}),Tn(n,3,151,t=>[-11+t()*3,3.7,5.2],.3,.4)}}var _d=n=>{let e=Xt[n].blobs;return e.length?1-e.reduce((t,i)=>t+i.userData.s,0)/e.length:1},Ys={all:0,items:{}};function th(){let n=0;sn.forEach(e=>{let t=_d(e.id);Ys.items[e.id]=t,n+=t}),Ys.all=n/sn.length,se.best=Math.max(se.best,Ys.all)}var bs=()=>.55*Math.min(1,Ys.all/.96)+.45*Gs()/sn.length;function fo(n){if(se.repaired[n.id])return{k:"done",t:"Reparado"};if(_s(n).length)return{k:"locked",t:"Necesita: "+_s(n).map(Gc).join(", ")};let e=Ys.items[n.id]||0;return e<ro?{k:"locked",t:"Limpia la zona \xB7 "+Math.round(e/ro*100)+"%"}:ks()<n.cost?{k:"locked",t:"Faltan "+(n.cost-ks())+" tablas"}:{k:"ready",t:"Listo \xB7 "+n.cost+" tablas"}}var vd=n=>{for(;n;){if(!n.visible)return!1;n=n.parent}return!0},w0=n=>Xt[n]&&Xt[n].blobs.some(e=>e.visible),Zs=()=>Mt(928/he.r,34,90),yd=new L;function po(n,e,t){let i=nn.getBoundingClientRect(),s=[],r=1e9;return Object.values(Xt).forEach(a=>{vd(a.g)&&a.blobs.forEach(o=>{if(!o.visible)return;o.getWorldPosition(yd);let l=yd.distanceTo(tn.position),c=yd.clone().project(tn);if(c.z>1)return;let h=(c.x+1)/2*i.width+i.left,d=(1-c.y)/2*i.height+i.top,u=Math.hypot(h-n,d-e);u<t&&(s.push({m:o,d:l,dd:u,it:a}),l<r&&(r=l))})}),s.filter(a=>a.d<r+5)}var A0=0;function Pt(n){let e=vt("toast");e.textContent=n,e.classList.add("show"),clearTimeout(A0),A0=setTimeout(()=>e.classList.remove("show"),3200)}var R0={},$r=document.createElement("div");$r.className="grp";function C0(n){Sm.forEach((e,t)=>{let i=document.createElement("div");i.className="grp";let s=document.createElement("span");s.className="lab",s.textContent=e,i.appendChild(s),sn.filter(r=>r.tier===t).forEach(r=>{let a=document.createElement("button");a.type="button",a.className="chip",a.innerHTML="<b></b><small></small>",a.firstChild.textContent=r.name,a.onclick=()=>n(r),i.appendChild(a),R0[r.id]=a}),vt("chips").appendChild(i)}),vt("chips").appendChild($r)}function mo(){$r.textContent="";let n=document.createElement("span");n.className="lab",n.textContent="Colecci\xF3n",$r.appendChild(n);let e=sn.filter(t=>se.repaired[t.id]);if(!e.length){let t=document.createElement("span");t.className="loot",t.textContent="Vac\xEDa. Cada reparaci\xF3n te da un objeto.",$r.appendChild(t)}e.forEach(t=>{let i=document.createElement("span");i.className="loot on",i.textContent=t.reward[0],i.title=t.reward[1],$r.appendChild(i)})}function Ji(){th();let n=bs();vt("fill").style.width=(n*100).toFixed(1)+"%",io(vt("pct"),Math.round(n*100)+"%"),io(vt("mats"),"Tablas: "+Math.max(0,ks())),sn.forEach(e=>{let t=fo(e),i=R0[e.id],s="chip "+t.k;i.className!==s&&(i.className=s),io(i.lastChild,t.t)})}var Ci,bd=null;function I0(n){Ci=document.createElement("button"),Ci.style.cssText="position:fixed;top:104px;left:50%;transform:translateX(-50%);z-index:6;background:var(--panel);border:1px solid var(--line);color:var(--ink);padding:7px 14px;border-radius:99px;font:inherit;font-size:.82rem;cursor:pointer;max-width:80%;opacity:0;transition:opacity .5s;pointer-events:none",Ci.id="nextb",document.body.appendChild(Ci),Ci.onclick=()=>{bd&&n(bd)}}function P0(){let n=sn.find(t=>!se.repaired[t.id]&&!_s(t).length);if(bd=n||null,!n||!it.started){Ci.style.opacity=0,Ci.style.pointerEvents="none";return}let e=fo(n);io(Ci,"Siguiente: "+(e.k==="ready"?"repara ":"limpia ")+n.name.toLowerCase()+(e.k==="ready"?" (toca su bot\xF3n)":"")),Ci.style.opacity=.92,Ci.style.pointerEvents="auto"}var jr=!1,Md=0;function L0(n,e){e=e||0;let t=["Inhala","Sost\xE9n","Exhala"],i=[4e3,1e3,6e3],s=vt("bcircle");if(jr){if(e>=15){vt("btxt").textContent="Gracias por respirar",s.style.transform="scale(.7)",Md=setTimeout(()=>{jr=!1,vt("breath").hidden=!0},2800);return}vt("btxt").textContent=t[n];try{n===0&&tt.breathTone(!0,5),n===2&&tt.breathTone(!1,6)}catch{}s.style.transition="transform "+i[n]/1e3+"s ease-in-out",s.style.transform=n===0?"scale(1.5)":n===2?"scale(.7)":s.style.transform,Md=setTimeout(()=>L0((n+1)%3,e+1),i[n])}}function D0(n){PZ.more(vt("top"),[vt("brt"),vt("snd"),vt("rst")].concat(UX.btns("",{hand:!0,wear:!0}))),vt("snd").onclick=()=>{tt.on=!tt.on,tt.ctx&&tt.setOn(tt.on),vt("snd").textContent="Sonido: "+(tt.on?"s\xED":"no")},vt("rst").onclick=n,vt("brt").onclick=()=>{jr=!jr,vt("breath").hidden=!jr,clearTimeout(Md),jr&&(vt("bcircle").style.transform="scale(.7)",L0(0))}}function N0(){let n=vt("panel"),e=()=>document.documentElement.style.setProperty("--ph",n.offsetHeight+"px");e(),addEventListener("resize",e);try{new ResizeObserver(e).observe(n)}catch{}}var cn,Ii,nh=0;function U0(){cn=new me;{let n=ge("#e8d6c0"),e=new ie(new It(.42,12,10),n);e.scale.set(1.3,.7,.9),e.position.y=.25,cn.add(e);let t=new ie(new It(.26,10,8),n);t.position.set(.5,.3,.05),cn.add(t),[[.58,.54],[.42,.54]].forEach(([s,r],a)=>{let o=new ie(new Et(.08,.16,4),n);o.position.set(s,r,.05+(a?-.1:.1)),cn.add(o)});let i=new ie(new Pn(.3,.06,6,12,4),ge("#d9b995"));i.position.set(-.35,.12,.2),i.rotation.x=1.5,cn.add(i)}cn.position.set(4.3,ue+.05,2.6),cn.rotation.y=-.5,cn.userData.itemId="gato",cn.visible=!1,ze.add(cn),Ii=pt(mt,16752560,.5,0,!0),Ii.visible=!1,ze.add(Ii)}function F0(){Ii.position.set(cn.position.x+.4,cn.position.y+1,cn.position.z),Ii.visible=!0,nh=1.6,tt.meow(),tt.chime(.2,2),Pt("Ronronea\u2026"),UX.hap(25)}function O0(n,e){cn.visible=Object.keys(se.repaired).length>0,Ii.visible&&(nh-=n,Ii.position.y+=n*.6,Ii.material.opacity=Mt(nh,0,1),Ii.scale.setScalar(.7+.2*Math.sin(e*8)),nh<=0&&(Ii.visible=!1)),cn.scale.y=1+.03*Math.sin(e*1.6)}var jt={on:!1,t:0,dur:1.25,p:new L,d:new L,next:0},B0=9,rh=[],kt={on:!1,shown:!1,armT:1/0,t:0,len:46,nextB:0,lan:[]},mM=12,ih=new Float32Array(120),z0=[],sh,Sd,Ms;function H0(){jt.next=30+Math.random()*40;for(let n=0;n<B0;n++){let e=pt(mt,n?13623551:16777215,Math.max(1.6,5.2-n*.45),0,!0);e.material.fog=!1,e.visible=!1,ze.add(e),rh.push(e)}sh=new bt;for(let n=0;n<40;n++)z0.push([-4+Math.random()*13,ue+.6+Math.random()*3,2+Math.random()*3,Math.random()*6.28]);sh.setAttribute("position",new Yt(ih,3)),Sd=new bi({color:16771496,size:.5,map:mt,transparent:!0,opacity:0,blending:Vi,depthWrite:!1}),Ms=new zi(sh,Sd),Ms.frustumCulled=!1,Ms.visible=!1,ze.add(Ms);for(let n=0;n<mM;n++){let e=new me,t=new Xe({color:n%3?16758891:16229304,transparent:!0,opacity:0});e.add(new ie(new Qe(.2,.15,.34,8),t));let i=pt(mt,16761466,2.2,0,!0);e.add(i),e.visible=!1,ze.add(e),kt.lan.push({g:e,bm:t,gl:i,x0:-3+Math.random()*10,z0:3.2+Math.random()*1.6,del:n*1.1+Math.random()*.8,sp:.8+Math.random()*.5,ph:Math.random()*6.28})}}function Ed(){if(jt.on)return;let n=Math.random()<.5?-1:1;jt.p.set(-110*n+(Math.random()-.5)*60,95+Math.random()*70,-340),jt.d.set(n*150,-52-Math.random()*20,0),jt.on=!0,jt.t=0,rh.forEach(e=>e.visible=!0),UX.cap("Estrella fugaz",25e3),tt.sparkle()}function k0(n){if(!jt.on)return;jt.t+=n;let e=Math.sin(Math.PI*Mt(jt.t/jt.dur));rh.forEach((t,i)=>{let s=jt.t-i*.03;t.position.copy(jt.p).addScaledVector(jt.d,s),t.material.opacity=e*(1-i/B0)*.95}),jt.t>=jt.dur&&(jt.on=!1,rh.forEach(t=>t.visible=!1))}function Td(){kt.on||kt.shown||(kt.shown=!0,kt.on=!0,kt.t=0,kt.nextB=.3,Ms.visible=!0,Pt("Los farolillos suben al cielo"),UX.hap([20,80,20,80,40]))}function G0(n){if(!kt.on)return;kt.t+=n;let e=kt.t;Sd.opacity=.85*Mt(e/4)*Mt((kt.len-e)/8);for(let t=0;t<40;t++){let i=z0[t],s=it.T*.35+i[3];ih[t*3]=i[0]+Math.sin(s*2+t)*1.6,ih[t*3+1]=i[1]+Math.sin(s*1.3+t)*.8+e*.04,ih[t*3+2]=i[2]+Math.cos(s*1.7+t)*1.4}sh.attributes.position.needsUpdate=!0,kt.lan.forEach(t=>{let i=e-t.del;if(i<0){t.g.visible=!1;return}t.g.visible=!0;let s=ue+1.2+i*t.sp+i*i*.012;t.g.position.set(t.x0+Math.sin(i*.5+t.ph)*1.2+i*.12,s,t.z0+Math.cos(i*.4+t.ph)*.6-i*.1);let r=Mt(i/2)*Mt((ue+24-s)/8);t.bm.opacity=r*.9,t.gl.material.opacity=r*.75*(.85+.15*Math.sin(it.T*3+t.ph)),r<=0&&i>3&&(t.g.visible=!1)}),e>kt.nextB&&e<34&&(kt.nextB=e+2.2+Math.random()*2,tt.chime(Math.random()*1.6-.8,Math.random()*5|0),Math.random()<.5&&tt.lantern(Math.random()-.5)),e>kt.len&&(kt.on=!1,Ms.visible=!1,kt.lan.forEach(t=>t.g.visible=!1))}function gM(){!se.done&&bs()>=.995&&(se.done=!0,Pt("Tu caba\xF1a est\xE1 lista. Buen trabajo."),UX.hap([20,80,20,80,40]),kn())}function go(n){if(se.repaired[n.id]){Pt(n.name+" ya est\xE1 reparado");return}if(fo(n).k!=="ready"){_s(n).length?Pt("Primero repara: "+_s(n).map(Gc).join(", ")):(Ys.items[n.id]||0)<ro?Pt("Limpia m\xE1s esa zona antes de repararla"):Pt("Faltan "+(n.cost-ks())+" tablas. Sigue limpiando.");return}se.spent+=n.cost,se.repaired[n.id]=!0,Xt[n.id].blobs.forEach(t=>{t.userData.s=Math.min(t.userData.s,0)}),Xt[n.id].blobs.forEach(Xi),kr(),Xs(n.focus),tt.chime((n.focus[0]-1.5)/12,sn.indexOf(n)%5),tt.creak(),UX.hap([12,60,12]),Gs()===sn.length&&(kt.armT=it.T+2.5),Pt(n.name+" reparado. Ganaste: "+n.reward[0]),Ji(),mo(),gM(),kn()}function V0(){UX.ask("\xBFReiniciar la caba\xF1a desde cero?",()=>{wm(),Ji(),mo(),Pt("Caba\xF1a reiniciada")})}var ah=[["helecho","suelo","Helecho en maceta",2],["lavanda","suelo","Lavanda",2],["farolpapel","suelo","Farol de papel",3],["tetera","suelo","Tetera humeante",3],["banquito","suelo","Banquito con manta",4],["libros","suelo","Libros con vela",4],["campanilla","colgante","Campanilla de viento",3],["atrapa","colgante","Atrapasue\xF1os",3],["estrellas","colgante","M\xF3vil de estrellas",4],["farolillos","colgante","Farolillos de papel",3],["reloj","pared","Reloj de pared",3],["guitarra","pared","Guitarra",4],["estantito","pared","Estantito con frascos",3],["mapa","pared","Mapa de la monta\xF1a",2],["mojon","roca","Moj\xF3n de piedras",2],["farolpiedra","roca","Farol de piedra",3],["floresroca","roca","Flores de roca",2],["farolpuente","colgante","Linterna del puente",0,0],["petalos","pared","Rama de sakura",0,3],["campanatemplo","colgante","Campana del templo",0,5],["frasco","suelo","Frasco de agua de cascada",0,6],["lotocuenco","suelo","Cuenco de loto",0,9]].map(([n,e,t,i,s])=>({id:n,kind:e,name:t,cost:i,gate:s})),wd={gato:{name:"Un gato",gift:"banquito",notes:["Este gato no es de nadie, pero se sienta justo donde Mara dejaba su silla.","Ronronea cuando la l\xE1mpara est\xE1 encendida. Dicen que Mara hac\xEDa lo mismo."]},zorro:{name:"Un zorro",gift:"mojon",notes:["Un zorro curioso olfatea tus escalones. Alguien le dejaba pan aqu\xED cada tarde.","Deja una piedra pulida junto a la puerta. Parece un regalo."]},buho:{name:"Un b\xFAho",gift:"reloj",notes:["El b\xFAho vigila el barandal. Mara lo llamaba \xABel capataz\xBB.","Ulula suave. Del otro lado de la monta\xF1a, otro le responde."]},mariposa:{name:"Una mariposa lunar",gift:"lavanda",notes:["Una mariposa lunar descansa en tu caba\xF1a. Solo vuelan de noche, como los mapas de Mara.","Sus alas dibujan l\xEDneas parecidas a un mapa de la monta\xF1a."]}};function Ad(n){let e=[["Habitar","Settle in","\u66AE\u3089\u3059"],["Volver a reparar","Back to repairs","\u4FEE\u7406\u306B\u3082\u3069\u308B"],["Recuerdos","Keepsakes","\u601D\u3044\u51FA"],["Preparar t\xE9","Make tea","\u304A\u8336\u3092\u3044\u308C\u308B"],["Regar plantas","Water plants","\u690D\u7269\u306B\u6C34\u3092\u3084\u308B"],["Diario de la caba\xF1a","Cabin journal","\u5C0F\u5C4B\u306E\u65E5\u8A18"],["Toca un c\xEDrculo de la caba\xF1a para decorar ese lugar.","Tap a circle in the cabin to decorate that spot.","\u5C0F\u5C4B\u306E\u4E38\u3092\u30BF\u30C3\u30D7\u3057\u3066\u3001\u305D\u306E\u5834\u6240\u3092\u98FE\u308A\u307E\u3057\u3087\u3046\u3002"],["Quitar","Remove","\u306F\u305A\u3059"],["Colocar","Place","\u7F6E\u304F"],["Comprar con recuerdos","Buy with keepsakes","\u601D\u3044\u51FA\u3067\u8CB7\u3046"],["Cerrar","Close","\u9589\u3058\u308B"],["A\xFAn vac\xEDo. Los visitantes dejan notas sobre quien vivi\xF3 aqu\xED.","Still empty. Visitors leave notes about whoever lived here.","\u307E\u3060\u7A7A\u3063\u307D\u3067\u3059\u3002\u8A2A\u308C\u305F\u751F\u304D\u7269\u304C\u3001\u3053\u3053\u306B\u4F4F\u3093\u3067\u3044\u305F\u4EBA\u306E\u8A71\u3092\u6B8B\u3057\u3066\u304F\u308C\u307E\u3059\u3002"],["Porche","Porch","\u30DD\u30FC\u30C1"],["Junto a la ventana","By the window","\u7A93\u306E\u305D\u3070"],["Porche, junto al barandal","Porch, by the railing","\u30DD\u30FC\u30C1\u306E\u624B\u3059\u308A\u306E\u305D\u3070"],["Alero","Eaves","\u8ED2\u4E0B"],["Pared","Wall","\u58C1"],["Mirador de roca","Rock lookout","\u5CA9\u306E\u5C55\u671B\u53F0"],["Helecho en maceta","Potted fern","\u9262\u690D\u3048\u306E\u30B7\u30C0"],["Lavanda","Lavender","\u30E9\u30D9\u30F3\u30C0\u30FC"],["Farol de papel","Paper lantern","\u7D19\u3061\u3087\u3046\u3061\u3093"],["Tetera humeante","Steaming teapot","\u6E6F\u6C17\u306E\u7ACB\u3064\u6025\u9808"],["Banquito con manta","Stool with blanket","\u30D6\u30E9\u30F3\u30B1\u30C3\u30C8\u306E\u30B9\u30C4\u30FC\u30EB"],["Libros con vela","Books with a candle","\u308D\u3046\u305D\u304F\u3068\u672C"],["Campanilla de viento","Wind chime","\u98A8\u9234"],["Atrapasue\xF1os","Dreamcatcher","\u30C9\u30EA\u30FC\u30E0\u30AD\u30E3\u30C3\u30C1\u30E3\u30FC"],["M\xF3vil de estrellas","Star mobile","\u661F\u306E\u30E2\u30D3\u30FC\u30EB"],["Farolillos de papel","Paper lanterns","\u7D19\u306E\u30E9\u30F3\u30BF\u30F3"],["Reloj de pared","Wall clock","\u58C1\u639B\u3051\u6642\u8A08"],["Guitarra","Guitar","\u30AE\u30BF\u30FC"],["Estantito con frascos","Little shelf with jars","\u74F6\u3092\u4E26\u3079\u305F\u5C0F\u3055\u306A\u68DA"],["Mapa de la monta\xF1a","Mountain map","\u5C71\u306E\u5730\u56F3"],["Linterna del puente","Bridge lantern","\u6A4B\u306E\u30E9\u30F3\u30BF\u30F3"],["Rama de sakura","Sakura branch","\u685C\u306E\u679D"],["Campana del templo","Temple bell","\u5BFA\u306E\u9418"],["Frasco de agua de cascada","Waterfall water jar","\u6EDD\u306E\u6C34\u306E\u74F6"],["Cuenco de loto","Lotus bowl","\u84EE\u306E\u9262"],["Del r\xEDo","From the river","\u5DDD\u304B\u3089"],["Moj\xF3n de piedras","Stone cairn","\u77F3\u7A4D\u307F"],["Farol de piedra","Stone lantern","\u77F3\u706F\u7C60"],["Flores de roca","Rock flowers","\u5CA9\u306E\u82B1"],["Llega un visitante","A visitor arrives","\u8A2A\u554F\u8005\u304C\u6765\u307E\u3057\u305F"],["Campanilla de viento","Wind chime","\u98A8\u9234"],["Tetera","Teapot","\u6025\u9808"],["Preparas t\xE9. El vapor sube despacio. Qu\xE9 calma.","You make tea. The steam rises slowly. How calming.","\u304A\u8336\u3092\u3044\u308C\u307E\u3059\u3002\u6E6F\u6C17\u304C\u3086\u3063\u304F\u308A\u6607\u308A\u307E\u3059\u3002\u843D\u3061\u7740\u304D\u307E\u3059\u306D\u3002"],["Primero repara las plantas","Repair the plants first","\u5148\u306B\u690D\u7269\u3092\u76F4\u3057\u307E\u3057\u3087\u3046"],["Riegas las plantas. Huelen a campo.","You water the plants. They smell like the countryside.","\u690D\u7269\u306B\u6C34\u3092\u3084\u308A\u307E\u3059\u3002\u91CE\u539F\u306E\u9999\u308A\u304C\u3057\u307E\u3059\u3002"],["Te dej\xF3: ","He left you: ","\u8D08\u308A\u7269: "],["La caba\xF1a ya se puede habitar: toca \xABHabitar\xBB","The cabin is ready to live in: tap \u201CSettle in\u201D","\u5C0F\u5C4B\u306B\u66AE\u3089\u305B\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u300C\u66AE\u3089\u3059\u300D\u3092\u30BF\u30C3\u30D7"],["Este gato no es de nadie, pero se sienta justo donde Mara dejaba su silla.","This cat belongs to no one, but sits right where Mara used to leave her chair.","\u3053\u306E\u732B\u306F\u8AB0\u306E\u3082\u306E\u3067\u3082\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u30DE\u30E9\u304C\u6905\u5B50\u3092\u7F6E\u3044\u3066\u3044\u305F\u5834\u6240\u306B\u3061\u3087\u3053\u3093\u3068\u5EA7\u308A\u307E\u3059\u3002"],["Ronronea cuando la l\xE1mpara est\xE1 encendida. Dicen que Mara hac\xEDa lo mismo.","It purrs when the lamp is on. They say Mara did the same.","\u30E9\u30F3\u30D7\u304C\u3068\u3082\u308B\u3068\u5589\u3092\u9CF4\u3089\u3057\u307E\u3059\u3002\u30DE\u30E9\u3082\u305D\u3046\u3060\u3063\u305F\u305D\u3046\u3067\u3059\u3002"],["Un zorro curioso olfatea tus escalones. Alguien le dejaba pan aqu\xED cada tarde.","A curious fox sniffs at your steps. Someone used to leave it bread here every evening.","\u597D\u5947\u5FC3\u65FA\u76DB\u306A\u30AD\u30C4\u30CD\u304C\u968E\u6BB5\u306E\u306B\u304A\u3044\u3092\u304B\u304E\u307E\u3059\u3002\u6BCE\u5915\u3001\u8AB0\u304B\u304C\u3053\u3053\u306B\u30D1\u30F3\u3092\u7F6E\u3044\u3066\u3044\u307E\u3057\u305F\u3002"],["Deja una piedra pulida junto a la puerta. Parece un regalo.","It leaves a polished stone by the door. It looks like a gift.","\u6238\u53E3\u306B\u307F\u304C\u304B\u308C\u305F\u77F3\u3092\u7F6E\u3044\u3066\u3044\u304D\u307E\u3057\u305F\u3002\u8D08\u308A\u7269\u306E\u3088\u3046\u3067\u3059\u3002"],["El b\xFAho vigila el barandal. Mara lo llamaba \xABel capataz\xBB.","The owl watches over the railing. Mara called him \u201Cthe foreman\u201D.","\u30D5\u30AF\u30ED\u30A6\u304C\u624B\u3059\u308A\u3092\u898B\u5F35\u3063\u3066\u3044\u307E\u3059\u3002\u30DE\u30E9\u306F\u300C\u73FE\u5834\u76E3\u7763\u300D\u3068\u547C\u3093\u3067\u3044\u307E\u3057\u305F\u3002"],["Ulula suave. Del otro lado de la monta\xF1a, otro le responde.","It hoots softly. From the far side of the mountain, another answers.","\u3084\u3055\u3057\u304F\u9CF4\u304F\u3068\u3001\u5C71\u306E\u5411\u3053\u3046\u304B\u3089\u3082\u3046\u4E00\u7FBD\u304C\u7B54\u3048\u307E\u3059\u3002"],["Una mariposa lunar descansa en tu caba\xF1a. Solo vuelan de noche, como los mapas de Mara.","A luna moth rests in your cabin. They only fly at night, like Mara\u2019s maps.","\u30AA\u30CA\u30AC\u30DF\u30BA\u30A2\u30AA\u304C\u5C0F\u5C4B\u3067\u4F11\u3093\u3067\u3044\u307E\u3059\u3002\u591C\u306B\u3057\u304B\u98DB\u3070\u306A\u3044\u3001\u30DE\u30E9\u306E\u5730\u56F3\u306E\u3088\u3046\u306A\u86FE\u3067\u3059\u3002"],["Sus alas dibujan l\xEDneas parecidas a un mapa de la monta\xF1a.","Its wings trace lines like a map of the mountain.","\u305D\u306E\u7FBD\u306E\u6A21\u69D8\u306F\u3001\u5C71\u306E\u5730\u56F3\u306E\u3088\u3046\u3067\u3059\u3002"],["Te faltan ","You are short by ","\u8DB3\u308A\u307E\u305B\u3093: "],["Un visitante deja una nota: ","A visitor leaves a note: ","\u8A2A\u554F\u8005\u304C\u30E1\u30E2\u3092\u6B8B\u3057\u307E\u3057\u305F: "]];n.add(e),n.rx([[/^(.+) · (\d+)$/,(t,i,s)=>s(t[1])+" \xB7 "+t[2]],[/^Recuerdos: (\d+)$/,(t,i)=>(i===1?"Keepsakes: ":"\u601D\u3044\u51FA: ")+t[1]],[/^(.+) · (\d+) s$/,(t,i,s)=>s(t[1])+" \xB7 "+t[2]+" s"],[/^(.+) colocado$/,(t,i,s)=>i===1?s(t[1])+" placed":s(t[1])+"\u3092\u7F6E\u304D\u307E\u3057\u305F"],[/^Te faltan (\d+) recuerdos\. Prepara té o espera visitas\.$/,(t,i)=>i===1?"You need "+t[1]+" more keepsakes. Make tea or wait for visitors.":"\u601D\u3044\u51FA\u304C\u3042\u3068"+t[1]+"\u500B\u5FC5\u8981\u3067\u3059\u3002\u304A\u8336\u3092\u3044\u308C\u308B\u304B\u3001\u8A2A\u554F\u8005\u3092\u5F85\u3061\u307E\u3057\u3087\u3046\u3002"],[/^(.+) · Te dejó: (.+)$/,(t,i,s)=>s(t[1])+" \xB7 "+(i===1?"He left you: ":"\u8D08\u308A\u7269: ")+s(t[2])]])}var W0="zen-sand";var X0=[[170,150,34],[300,235,24],[470,120,30]];function q0(n){n.add([["Jard\xEDn zen","Zen garden","\u7985\u306E\u5EAD"],["Rastrillar la arena con calma","Rake the sand slowly","\u7802\u3092\u3086\u3063\u304F\u308A\u304B\u304D\u5206\u3051\u308B"],["Olas alrededor de las piedras","Ripples around the stones","\u77F3\u306E\u307E\u308F\u308A\u306B\u6CE2\u7D0B"],["Alisar","Smooth","\u306A\u3089\u3059"],["Cerrar","Close","\u9589\u3058\u308B"],["Se abri\xF3 el jard\xEDn zen: ya le\xEDste todas las cartas de Mara","The zen garden is open: you have read all of Mara\u2019s letters","\u7985\u306E\u5EAD\u304C\u958B\u304D\u307E\u3057\u305F\u3002\u30DE\u30E9\u306E\u624B\u7D19\u3092\u3059\u3079\u3066\u8AAD\u307F\u307E\u3057\u305F"],["Arrastra el dedo sobre la arena. No hay prisa ni forma correcta.","Drag your finger over the sand. No rush, no right way.","\u7802\u306E\u4E0A\u3092\u6307\u3067\u306A\u305E\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u6025\u3050\u5FC5\u8981\u3082\u3001\u6B63\u3057\u3044\u5F62\u3082\u3042\u308A\u307E\u305B\u3093\u3002"],["Un momento de calma te dej\xF3 un recuerdo","A calm moment left you a keepsake","\u9759\u304B\u306A\u3072\u3068\u3068\u304D\u304C\u601D\u3044\u51FA\u3092\u3072\u3068\u3064\u6B8B\u3057\u307E\u3057\u305F"],["Mara dej\xF3 escrito: \xABel jard\xEDn no se termina, se acompa\xF1a\xBB","Mara wrote: \u201Ca garden is never finished, only kept company\u201D","\u30DE\u30E9\u306F\u3053\u3046\u66F8\u304D\u307E\u3057\u305F\u3002\u300C\u5EAD\u306F\u5B8C\u6210\u3055\u305B\u308B\u3082\u306E\u3067\u306F\u306A\u304F\u3001\u5BC4\u308A\u305D\u3046\u3082\u306E\u300D"]])}var Rd=(n,e)=>{let t=n.ltr||{};for(let i=0;i<(e||11);i++)if(!t[i])return!1;return!0};function Y0(n){let e=n.tr||(C=>C),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:80;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:rgba(14,16,36,.94);color:#fbf1e0;font:500 .9rem system-ui;padding:12px";let i=document.createElement("div");i.textContent=e("Jard\xEDn zen"),i.style.cssText="font:600 1.15rem system-ui";let s=document.createElement("canvas");s.width=640,s.height=380,s.style.cssText="position:relative;inset:auto;display:block;height:auto;z-index:auto;width:min(94vw,640px);max-height:58vh;aspect-ratio:640/380;border-radius:18px;border:1px solid #5a609a;touch-action:none;box-shadow:0 10px 40px rgba(0,0,0,.45);cursor:crosshair";let r=document.createElement("div");r.textContent=e("Arrastra el dedo sobre la arena. No hay prisa ni forma correcta."),r.style.cssText="opacity:.7;font-size:.8rem;text-align:center;max-width:90vw";let a=document.createElement("div");a.style.cssText="display:flex;gap:8px;flex-wrap:wrap;justify-content:center";let o=(C,D)=>{let z=document.createElement("button");return z.type="button",z.textContent=e(C),z.style.cssText="min-height:44px;padding:8px 16px;border-radius:99px;border:1px solid #5a609a;background:#363a66;color:#fbf1e0;font:inherit;cursor:pointer",z.onclick=D,a.appendChild(z),z};t.append(i,s,r,a),document.body.appendChild(t);let l=s.getContext("2d"),c=document.createElement("canvas");c.width=640,c.height=380;let h=c.getContext("2d"),d=()=>{h.fillStyle="#d9c9a3",h.fillRect(0,0,640,380);for(let C=0;C<2400;C++)h.fillStyle="rgba("+(C%2?"120,100,70":"255,245,215")+",.07)",h.fillRect(Math.random()*640,Math.random()*380,1.4,1.4)};d();let u=!1;try{let C=localStorage.getItem(W0);if(C){let D=new Image;D.onload=()=>{h.drawImage(D,0,0),f()},D.src=C}}catch{}let p=()=>{if(u){u=!1;try{localStorage.setItem(W0,c.toDataURL("image/png"))}catch{}}},g=(C,D,z)=>{l.fillStyle="rgba(0,0,0,.22)",l.beginPath(),l.ellipse(C+5,D+z*.7,z*1.05,z*.45,0,0,7),l.fill();let H=l.createRadialGradient(C-z*.35,D-z*.4,z*.1,C,D,z*1.1);H.addColorStop(0,"#9d9aa6"),H.addColorStop(1,"#4f4d5a"),l.fillStyle=H,l.beginPath(),l.ellipse(C,D,z,z*.78,0,0,7),l.fill(),l.fillStyle="rgba(110,150,100,.5)",l.beginPath(),l.ellipse(C-z*.2,D-z*.5,z*.4,z*.14,0,0,7),l.fill()},S=(C,D)=>{l.fillStyle="#6b4d3a",l.fillRect(C-4,D-34,8,34),l.fillStyle="#8b6a50",l.fillRect(C-28,D-6,56,10);for(let[z,H,j]of[[-14,-42,15],[10,-52,18],[22,-34,12]])l.fillStyle="#5d9a6c",l.beginPath(),l.arc(C+z,D+H,j,0,7),l.fill(),l.fillStyle="rgba(255,255,255,.12)",l.beginPath(),l.arc(C+z-4,D+H-5,j*.5,0,7),l.fill()},m=(C,D)=>{let z="#8a8896";l.fillStyle=z,l.fillRect(C-14,D-8,28,8),l.fillRect(C-5,D-34,10,28),l.fillRect(C-17,D-42,34,8),l.fillRect(C-11,D-62,22,20),l.fillStyle="rgba(255,225,160,.95)",l.fillRect(C-6,D-57,12,11),l.fillStyle=z,l.beginPath(),l.moveTo(C-19,D-62),l.lineTo(C,D-78),l.lineTo(C+19,D-62),l.fill();let H=l.createRadialGradient(C,D-52,2,C,D-52,60);H.addColorStop(0,"rgba(255,200,120,.35)"),H.addColorStop(1,"rgba(255,200,120,0)"),l.fillStyle=H,l.fillRect(C-60,D-112,120,120)};function f(){l.drawImage(c,0,0);for(let[D,z,H]of X0)g(D,z,H);S(560,330),m(70,340);let C=l.createRadialGradient(640/2,380/2,380*.35,640/2,380/2,380*.9);C.addColorStop(0,"rgba(20,20,40,0)"),C.addColorStop(1,"rgba(20,20,40,.35)"),l.fillStyle=C,l.fillRect(0,0,640,380)}f();let y=null,v=null,x=null,b=()=>{try{if(y=n.ctx&&n.ctx(),!y||v)return;let C=y.createBiquadFilter();if(C.type="bandpass",C.frequency.value=1100,C.Q.value=.6,v=y.createGain(),v.gain.value=0,x=window.UX&&UX.pinkSrc?UX.pinkSrc(y,1):null,!x)return;x.connect(C),C.connect(v),window.UX?UX.out(y,v):v.connect(y.destination),x.start(0)}catch{v=null}},E=C=>{try{v&&y&&v.gain.setTargetAtTime(C,y.currentTime,.05)}catch{}},A=null,_=0,T=0,R=0,P=0,N=C=>{let D=s.getBoundingClientRect();return[(C.clientX-D.left)/D.width*640,(C.clientY-D.top)/D.height*380]};s.addEventListener("pointerdown",C=>{s.setPointerCapture(C.pointerId),A=N(C),b(),E(.012)}),s.addEventListener("pointermove",C=>{if(!A)return;let D=N(C),z=D[0]-A[0],H=D[1]-A[1],j=Math.hypot(z,H);if(j<2)return;let G=-H/j,Y=z/j;for(let K=-2;K<=2;K++){let De=G*K*8,Ie=Y*K*8;h.lineCap="round",h.lineWidth=3.2,h.strokeStyle="rgba(95,78,52,.34)",h.beginPath(),h.moveTo(A[0]+De+1,A[1]+Ie+1),h.lineTo(D[0]+De+1,D[1]+Ie+1),h.stroke(),h.lineWidth=2,h.strokeStyle="rgba(255,248,225,.5)",h.beginPath(),h.moveTo(A[0]+De-1,A[1]+Ie-1),h.lineTo(D[0]+De-1,D[1]+Ie-1),h.stroke()}if(A=D,_+=j,u=!0,f(),E(Math.min(.03,.006+j*.0012)),_>1100&&T<3){_=0,T++;try{n.addMem&&n.addMem(1),n.say&&n.say(e("Un momento de calma te dej\xF3 un recuerdo"))}catch{}}});let O=()=>{A=null,E(0),p()};s.addEventListener("pointerup",O),s.addEventListener("pointercancel",O),o("Olas alrededor de las piedras",()=>{for(let[C,D,z]of X0)for(let H=z+14;H<z+112;H+=11)h.lineWidth=3,h.strokeStyle="rgba(95,78,52,.32)",h.beginPath(),h.ellipse(C+1,D+1,H,H*.8,0,0,7),h.stroke(),h.lineWidth=1.8,h.strokeStyle="rgba(255,248,225,.5)",h.beginPath(),h.ellipse(C-1,D-1,H,H*.8,0,0,7),h.stroke();u=!0,f(),p();try{n.chime&&n.chime()}catch{}}),o("Alisar",()=>{d(),u=!0,f(),p()}),o("Cerrar",()=>{O();try{x&&x.stop&&x.stop(),v&&v.disconnect()}catch{}t.remove()}),t.onclick=C=>{C.target===t&&a.lastChild.click()}}var xM="rio-day",Cd=[["Hoy no tienes que llegar a ning\xFAn sitio.","You do not have to get anywhere today.","\u4ECA\u65E5\u306F\u3069\u3053\u304B\u3078\u7740\u304B\u306A\u304F\u3066\u5927\u4E08\u592B\u3002"],["El agua tambi\xE9n descansa mientras avanza.","Water also rests while it moves.","\u6C34\u306F\u6D41\u308C\u306A\u304C\u3089\u3082\u4F11\u3093\u3067\u3044\u307E\u3059\u3002"],["Respira hondo. Lo dem\xE1s puede esperar a ma\xF1ana.","Breathe deep. The rest can wait until tomorrow.","\u6DF1\u547C\u5438\u3092\u3002\u3042\u3068\u306F\u660E\u65E5\u3067\u3044\u3044\u3002"],["Algo peque\xF1o hecho con calma ya es suficiente.","One small thing done calmly is enough.","\u5C0F\u3055\u306A\u3053\u3068\u3092\u3086\u3063\u304F\u308A\u3002\u305D\u308C\u3067\u5341\u5206\u3067\u3059\u3002"],["Las nubes no se apuran y aun as\xED llegan.","Clouds never hurry and still they arrive.","\u96F2\u306F\u6025\u304C\u306A\u3044\u306E\u306B\u3001\u3061\u3083\u3093\u3068\u7740\u304D\u307E\u3059\u3002"],["Mara dejar\xEDa una nota: \xABmira hacia arriba un momento\xBB.","Mara would leave a note: \u201Clook up for a moment\u201D.","\u30DE\u30E9\u306A\u3089\u30E1\u30E2\u3092\u6B8B\u3059\u3067\u3057\u3087\u3046\u3002\u300C\u5C11\u3057\u7A7A\u3092\u898B\u4E0A\u3052\u3066\u300D\u3002"],["No hace falta entenderlo todo esta noche.","You do not need to understand everything tonight.","\u4ECA\u591C\u3001\u3059\u3079\u3066\u3092\u5206\u304B\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"],["Una taza caliente y un r\xEDo quieto: buen plan.","A warm cup and a quiet river: a good plan.","\u6E29\u304B\u3044\u304A\u8336\u3068\u9759\u304B\u306A\u5DDD\u3002\u3044\u3044\u8A08\u753B\u3067\u3059\u3002"],["Lo que pesa hoy flota un poco m\xE1s ligero en el agua.","What weighs on you today floats lighter on the water.","\u4ECA\u65E5\u306E\u91CD\u3055\u3082\u3001\u6C34\u306E\u4E0A\u3067\u306F\u5C11\u3057\u8EFD\u304F\u306A\u308A\u307E\u3059\u3002"],["Est\xE1 bien ir despacio. As\xED se ven m\xE1s cosas.","It is fine to go slowly. You see more that way.","\u3086\u3063\u304F\u308A\u3067\u5927\u4E08\u592B\u3002\u305D\u306E\u307B\u3046\u304C\u591A\u304F\u304C\u898B\u3048\u307E\u3059\u3002"],["Cada farolillo es un \xABgracias\xBB que nadie pidi\xF3.","Every lantern is a \u201Cthank you\u201D nobody asked for.","\u3061\u3087\u3046\u3061\u3093\u306F\u3072\u3068\u3064\u305A\u3064\u3001\u983C\u307E\u308C\u306A\u3044\u300C\u3042\u308A\u304C\u3068\u3046\u300D\u3002"],["El r\xEDo no compara tu ritmo con el de nadie.","The river does not compare your pace with anyone\u2019s.","\u5DDD\u306F\u3042\u306A\u305F\u306E\u901F\u3055\u3092\u8AB0\u3068\u3082\u6BD4\u3079\u307E\u305B\u3093\u3002"],["Escucha un rato: siempre hay algo suave sonando.","Listen a while: something gentle is always playing.","\u3057\u3070\u3089\u304F\u8033\u3092\u3059\u307E\u305B\u3066\u3002\u3044\u3064\u3082\u3084\u3055\u3057\u3044\u97F3\u304C\u3057\u3066\u3044\u307E\u3059\u3002"],["Hoy cuenta aunque solo hayas flotado un poco.","Today counts even if you only floated a little.","\u5C11\u3057\u6D6E\u304B\u3093\u3060\u3060\u3051\u3067\u3082\u3001\u4ECA\u65E5\u306F\u3061\u3083\u3093\u3068\u4E00\u65E5\u3067\u3059\u3002"]];var Z0=()=>{try{return JSON.parse(localStorage.getItem(xM)||"{}")||{}}catch{return{}}};var oh=()=>Z0().n||0,J0=()=>Z0().log||[];var $0=n=>{n.cnt=n.cnt||{};let e=Math.max(0,oh()-(n.cnt.dl||0));return e&&(n.cnt.dl=oh()),e};function j0(n){n.add(Cd.map(e=>[e[0],e[1],e[2]])),n.add([["Farolillos del d\xEDa","Lanterns of the day","\u4ECA\u65E5\u306E\u3061\u3087\u3046\u3061\u3093"],["Hoy ya recogiste el farolillo. Ma\xF1ana habr\xE1 otro.","You already picked up today\u2019s lantern. There will be another tomorrow.","\u4ECA\u65E5\u306E\u3061\u3087\u3046\u3061\u3093\u306F\u3082\u3046\u62FE\u3044\u307E\u3057\u305F\u3002\u660E\u65E5\u307E\u305F\u6D41\u308C\u3066\u304D\u307E\u3059\u3002"],["A\xFAn no recoges ninguno","You have not picked up any yet","\u307E\u3060\u62FE\u3063\u3066\u3044\u307E\u305B\u3093"]])}var yM="rio-album",yo=[["koi","Carpa koi","Koi carp","\u9326\u9BC9","Se acercan despacio y nadan junto a la canoa, como si te conocieran.","They drift close and swim beside the canoe as if they knew you.","\u3086\u3063\u304F\u308A\u8FD1\u3065\u3044\u3066\u3001\u30AB\u30CC\u30FC\u306E\u305D\u3070\u3092\u6CF3\u304E\u307E\u3059\u3002\u307E\u308B\u3067\u77E5\u308A\u5408\u3044\u306E\u3088\u3046\u306B\u3002"],["pato","Pato del r\xEDo","River duck","\u5DDD\u306E\u30AB\u30E2","Decide acompa\xF1arte un rato y luego sigue su camino.","Chooses to keep you company for a while, then goes its own way.","\u3057\u3070\u3089\u304F\u5BC4\u308A\u305D\u3063\u3066\u304F\u308C\u3066\u3001\u3084\u304C\u3066\u81EA\u5206\u306E\u9053\u3078\u3002"],["garza","Garza blanca","White heron","\u30B7\u30E9\u30B5\u30AE","Pesca sin prisa. Alza el vuelo solo cuando pasas muy cerca.","Fishes without hurry. Takes flight only when you pass very close.","\u6025\u304C\u305A\u9B5A\u3092\u5F85\u3061\u307E\u3059\u3002\u3068\u3066\u3082\u8FD1\u304F\u3092\u901A\u308B\u3068\u98DB\u3073\u7ACB\u3061\u307E\u3059\u3002"],["libelula","Lib\xE9lula","Dragonfly","\u30C8\u30F3\u30DC","Se posa un instante en la proa y se va, ligera como un pensamiento.","Lands on the bow for an instant and leaves, light as a thought.","\u8239\u9996\u306B\u305D\u3063\u3068\u6B62\u307E\u3063\u3066\u3001\u8003\u3048\u3054\u3068\u306E\u3088\u3046\u306B\u8EFD\u304F\u53BB\u308A\u307E\u3059\u3002"],["loto","Flor de loto","Lotus flower","\u84EE\u306E\u82B1","Abre al anochecer en los estanques tranquilos.","Opens at dusk in the quiet ponds.","\u9759\u304B\u306A\u6C60\u3067\u5915\u66AE\u308C\u306B\u958B\u304D\u307E\u3059\u3002"],["festival","Festival de linternas","Lantern festival","\u3061\u3087\u3046\u3061\u3093\u796D\u308A","La aldea enciende farolillos para quien llega de noche.","The village lights lanterns for whoever arrives at night.","\u591C\u306B\u7740\u3044\u305F\u4EBA\u306E\u305F\u3081\u306B\u3001\u6751\u304C\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3057\u307E\u3059\u3002"]],xo=null,K0=()=>{if(xo)return xo;try{xo=JSON.parse(localStorage.getItem(yM)||"{}")||{}}catch{xo={}}return xo};function Q0(n){try{j0(n)}catch{}n.add(yo.map(e=>[e[1],e[2],e[3]])),n.add(yo.map(e=>[e[4],e[5],e[6]])),n.add([["Cuaderno del r\xEDo","River notebook","\u5DDD\u306E\u30CE\u30FC\u30C8"],["A\xFAn no lo has visto","You have not seen this yet","\u307E\u3060\u898B\u3066\u3044\u307E\u305B\u3093"],["Nueva anotaci\xF3n en el cuaderno del r\xEDo","New entry in the river notebook","\u5DDD\u306E\u30CE\u30FC\u30C8\u306B\u65B0\u3057\u3044\u8A18\u9332"],["Se llena solo, a su ritmo. No hay prisa.","It fills by itself, at its own pace. No rush.","\u3086\u3063\u304F\u308A\u3001\u3072\u3068\u308A\u3067\u306B\u57CB\u307E\u3063\u3066\u3044\u304D\u307E\u3059\u3002"],["Cerrar","Close","\u9589\u3058\u308B"],["Anotado: ","Noted: ","\u8A18\u9332: "],["anotaciones","entries","\u4EF6"]])}var lh=()=>Object.keys(K0()).length;function eg(n){n.cnt=n.cnt||{};let e=Math.max(0,lh()-(n.cnt.alb||0));return e&&(n.cnt.alb=lh()),e}function tg(n){n=n||(window.UX?UX.tr:(o=>o));let e=K0(),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:80;display:grid;place-items:center;background:rgba(14,16,36,.88);padding:12px";let i=document.createElement("div");i.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(92vw,460px);max-height:82vh;overflow:auto;font:15px/1.45 system-ui";let s=document.createElement("h2");s.style.cssText="margin:0 0 4px;font:600 1.15rem system-ui",s.textContent=n("Cuaderno del r\xEDo");let r=document.createElement("div");r.style.cssText="opacity:.65;font-size:.8rem;margin-bottom:12px",r.textContent=n("Se llena solo, a su ritmo. No hay prisa."),i.append(s,r),yo.forEach(o=>{let l=!!e[o[0]],c=document.createElement("div");c.style.cssText="margin:0 0 12px;padding:10px 12px;border-radius:12px;background:"+(l?"rgba(255,233,184,.10)":"rgba(255,255,255,.04)")+";"+(l?"":"opacity:.55");let h=document.createElement("div");h.style.cssText="font-weight:600",h.textContent=(l?"\u2726 ":"\xB7 ")+(l?n(o[1]):"?");let d=document.createElement("div");d.style.cssText="font-size:.88em;opacity:.85",d.textContent=n(l?o[4]:"A\xFAn no lo has visto"),c.append(h,d),i.appendChild(c)});{let o=document.createElement("div");o.style.cssText="font-weight:600;margin:14px 0 6px",o.textContent=n("Farolillos del d\xEDa")+" \xB7 "+oh(),i.appendChild(o);let l=J0().slice().reverse();if(!l.length){let c=document.createElement("div");c.style.cssText="opacity:.55;font-size:.88em;margin-bottom:12px",c.textContent=n("A\xFAn no recoges ninguno"),i.appendChild(c)}l.forEach(c=>{let h=document.createElement("div");h.style.cssText="margin:0 0 8px;padding:8px 12px;border-radius:12px;background:rgba(255,233,184,.08);font-size:.88em",h.textContent="\u{1F3EE} "+n(Cd[c[1]][0]),i.appendChild(h)})}let a=document.createElement("button");a.type="button",a.textContent=n("Cerrar"),a.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",a.onclick=()=>t.remove(),i.appendChild(a),t.appendChild(i),t.onclick=o=>{o.target===t&&t.remove()},document.body.appendChild(t)}var _M="rio-still";var vM=()=>{try{return JSON.parse(localStorage.getItem(_M)||"{}")||{}}catch{return{}}},ng=()=>vM().n||0,ig=n=>{n.cnt=n.cnt||{};let e=Math.max(0,ng()-(n.cnt.st||0));return e&&(n.cnt.st=ng()),e};var bM="rio-found-types",Ud=[["Puente de madera","Dej\xE9 la caba\xF1a al amanecer. El primer puente cruje igual que mi escalera: me dio confianza.","I left the cabin at dawn. The first bridge creaks just like my stairs, and that made me brave.","\u591C\u660E\u3051\u306B\u5C0F\u5C4B\u3092\u51FA\u307E\u3057\u305F\u3002\u6700\u521D\u306E\u6A4B\u306F\u79C1\u306E\u968E\u6BB5\u3068\u540C\u3058\u3088\u3046\u306B\u304D\u3057\u3093\u3067\u3001\u52C7\u6C17\u3092\u304F\u308C\u307E\u3057\u305F\u3002"],["Torii sobre el agua","Pas\xE9 bajo un portal que flota. Ped\xED un deseo en voz baja: que la caba\xF1a nunca se quede sola.","I drifted under a gate that floats. I whispered a wish: that the cabin is never left alone.","\u6C34\u306B\u6D6E\u304B\u3076\u9580\u3092\u304F\u3050\u308A\u3001\u5C0F\u3055\u306A\u58F0\u3067\u9858\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u304C\u3072\u3068\u308A\u307C\u3063\u3061\u306B\u306A\u308A\u307E\u305B\u3093\u3088\u3046\u306B\u3002"],["Aldea de farolillos","Una aldea entera enciende farolillos para recibir a quien llega. Por primera vez no me sent\xED de paso.","A whole village lights lanterns for whoever arrives. For once I did not feel like I was just passing through.","\u6751\u3058\u3085\u3046\u304C\u3001\u8A2A\u308C\u308B\u4EBA\u306E\u305F\u3081\u306B\u63D0\u706F\u3092\u3068\u3082\u3057\u307E\u3059\u3002\u521D\u3081\u3066\u300C\u901A\u308A\u3059\u304C\u308A\u300D\u3068\u611F\u3058\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Jard\xEDn de sakura","Los cerezos sueltan p\xE9talos como si el aire tuviera memoria. Guard\xE9 uno para ti, entre las p\xE1ginas del mapa.","The cherry trees let go of petals as if the air had a memory. I saved one for you between the map pages.","\u685C\u306F\u3001\u7A7A\u6C17\u304C\u8A18\u61B6\u3092\u6301\u3063\u3066\u3044\u308B\u304B\u306E\u3088\u3046\u306B\u82B1\u3073\u3089\u3092\u6563\u3089\u3057\u307E\u3059\u3002\u5730\u56F3\u306E\u9593\u306B\u4E00\u679A\u3001\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u631F\u307F\u307E\u3057\u305F\u3002"],["Ca\xF1averal de las garzas","Las garzas pescan sin prisa. Aprend\xED de ellas que esperar tambi\xE9n es avanzar.","The herons fish without hurry. They taught me that waiting is also a way of moving forward.","\u30B5\u30AE\u306F\u6025\u304C\u305A\u9B5A\u3092\u5F85\u3061\u307E\u3059\u3002\u5F85\u3064\u3053\u3068\u3082\u524D\u306B\u9032\u3080\u3053\u3068\u3060\u3068\u6559\u308F\u308A\u307E\u3057\u305F\u3002"],["Templo de la campana","La campana suena una vez y el r\xEDo entero se acomoda. Quise que la oyeras desde tu balc\xF3n.","The bell rings once and the whole river settles. I wanted you to hear it from your balcony.","\u9418\u304C\u3072\u3068\u3064\u9CF4\u308B\u3068\u3001\u5DDD\u305C\u3093\u305F\u3044\u304C\u9759\u307E\u308A\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u30D0\u30EB\u30B3\u30CB\u30FC\u304B\u3089\u3082\u805E\u3053\u3048\u305F\u3089\u3044\u3044\u306E\u306B\u3002"],["Cascadita de musgo","Una cascada peque\xF1ita, verde de tan callada. Me qued\xE9 una tarde entera y no extra\xF1\xE9 nada.","A tiny waterfall, green with quiet. I stayed a whole afternoon and missed nothing.","\u9759\u3051\u3055\u3067\u7DD1\u306B\u67D3\u307E\u3063\u305F\u5C0F\u3055\u306A\u6EDD\u3002\u5348\u5F8C\u3044\u3063\u3071\u3044\u904E\u3054\u3057\u3066\u3001\u4F55\u3082\u604B\u3057\u304F\u306A\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Casa de t\xE9","Me sirvieron t\xE9 sin preguntar nada. Dej\xE9 encima de la mesa tu receta, por si quieres hacerla en la caba\xF1a.","They served me tea without asking a thing. I left your recipe on the table, in case you want to make it at the cabin.","\u4F55\u3082\u805E\u304B\u305A\u306B\u304A\u8336\u3092\u51FA\u3057\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u3082\u4F5C\u308C\u308B\u3088\u3046\u3001\u30EC\u30B7\u30D4\u3092\u673A\u306B\u6B8B\u3057\u307E\u3057\u305F\u3002"],["Bosque de bamb\xFA","El bamb\xFA canta cuando sopla el viento. Pens\xE9 en tu campanilla y sonre\xED sola.","The bamboo sings when the wind blows. I thought of your wind chime and smiled to myself.","\u98A8\u304C\u5439\u304F\u3068\u7AF9\u304C\u6B4C\u3044\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u98A8\u9234\u3092\u601D\u3044\u51FA\u3057\u3066\u3001\u3072\u3068\u308A\u3067\u5FAE\u7B11\u307F\u307E\u3057\u305F\u3002"],["Estanque de lotos","Un estanque de lotos que se abre de noche. Todo lo que empieza despacio merece su tiempo.","A lotus pond that opens at night. Everything that begins slowly deserves its time.","\u591C\u306B\u958B\u304F\u84EE\u306E\u6C60\u3002\u3086\u3063\u304F\u308A\u59CB\u307E\u308B\u3082\u306E\u306B\u306F\u3001\u305D\u308C\u3060\u3051\u306E\u6642\u9593\u304C\u5FC5\u8981\u3067\u3059\u3002"],["Castillo de la Garza Blanca","Llegu\xE9. El castillo brilla igual que las luces de tu terraza. No hac\xEDa falta llegar tan lejos para entenderlo: mi casa siempre fue la caba\xF1a. Cu\xEDdala a tu gusto; ya es tuya.","I made it. The castle glows just like the lights on your deck. I did not need to come this far to understand it: my home was always the cabin. Keep it your way; it is yours now.","\u305F\u3069\u308A\u7740\u304D\u307E\u3057\u305F\u3002\u57CE\u306F\u3001\u3042\u306A\u305F\u306E\u30C6\u30E9\u30B9\u306E\u706F\u308A\u3068\u540C\u3058\u3088\u3046\u306B\u8F1D\u3044\u3066\u3044\u307E\u3059\u3002\u3053\u3053\u307E\u3067\u6765\u306A\u304F\u3066\u3082\u5206\u304B\u3063\u305F\u306F\u305A\u3067\u3059\u3002\u79C1\u306E\u5BB6\u306F\u3044\u3064\u3082\u5C0F\u5C4B\u3067\u3057\u305F\u3002\u597D\u304D\u306A\u3088\u3046\u306B\u5B88\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u3082\u3046\u3042\u306A\u305F\u306E\u3082\u306E\u3067\u3059\u3002"]],MM=Ud.map(n=>n[0]),og=Ud.map(n=>n[1]),uh=()=>{let n=new Set;for(let e of["rio3d-found",bM])try{JSON.parse(localStorage.getItem(e)||"[]").forEach(t=>n.add(t))}catch{}return n};function Fd(n){Q0(n),mg(n),SM(n),q0(n),n.add(Ud.map(e=>[e[1],e[2],e[3]])),n.add([["Puente de madera","Wooden bridge","\u6728\u306E\u6A4B"],["Torii sobre el agua","Torii over the water","\u6C34\u4E0A\u306E\u9CE5\u5C45"],["Aldea de farolillos","Lantern village","\u3061\u3087\u3046\u3061\u3093\u306E\u6751"],["Jard\xEDn de sakura","Sakura garden","\u685C\u306E\u5EAD"],["Ca\xF1averal de las garzas","Heron reedbed","\u30B5\u30AE\u306E\u8466\u539F"],["Templo de la campana","Bell temple","\u9418\u306E\u5BFA"],["Cascadita de musgo","Mossy waterfall","\u82D4\u306E\u5C0F\u3055\u306A\u6EDD"],["Casa de t\xE9","Tea house","\u8336\u5C4B"],["Bosque de bamb\xFA","Bamboo forest","\u7AF9\u6797"],["Estanque de lotos","Lotus pond","\u84EE\u306E\u6C60"],["Castillo de la Garza Blanca","White Heron Castle","\u767D\u9DFA\u57CE"],["Cartas de Mara","Mara\u2019s letters","\u30DE\u30E9\u306E\u624B\u7D19"],["Carta sin abrir","Unopened letter","\u672A\u958B\u5C01\u306E\u624B\u7D19"],["Desc\xFAbrelo en el r\xEDo para leerla","Discover it on the river to read it","\u5DDD\u3067\u898B\u3064\u3051\u308B\u3068\u8AAD\u3081\u307E\u3059"],["Abrir carta","Open letter","\u624B\u7D19\u3092\u958B\u304F"],["Notas de visitantes","Visitor notes","\u8A2A\u554F\u8005\u306E\u30E1\u30E2"],["Mara te dej\xF3 una carta","Mara left you a letter","\u30DE\u30E9\u304C\u624B\u7D19\u3092\u6B8B\u3057\u307E\u3057\u305F"],["Carta de Mara","Letter from Mara","\u30DE\u30E9\u306E\u624B\u7D19"],["Una carta nueva te espera en el diario","A new letter waits in the diary","\u65E5\u8A18\u306B\u65B0\u3057\u3044\u624B\u7D19\u304C\u5C4A\u3044\u3066\u3044\u307E\u3059"]]),n.rx([[/^Carta sin abrir · (.+)$/,(e,t,i)=>i("Carta sin abrir")+" \xB7 "+i(e[1])]])}var Id=n=>Object.values(n.decor||{}).filter(Boolean).length,sg=n=>Object.keys(n.own||{}).length,Pd=n=>(n.notes||[]).length,rg=n=>n.cnt||{},Od=[[n=>!!(n.repaired&&n.repaired.techo),"Termina de reparar el techo","Finish repairing the roof","\u5C4B\u6839\u306E\u4FEE\u7406\u3092\u304A\u308F\u3089\u305B\u308B"],[n=>sg(n)>=1,"Coloca tu primer objeto","Place your first object","\u6700\u521D\u306E\u98FE\u308A\u3092\u7F6E\u304F"],[n=>Pd(n)>=1,"Recibe a tu primer visitante","Welcome your first visitor","\u6700\u521D\u306E\u8A2A\u554F\u8005\u3092\u8FCE\u3048\u308B"],[n=>(rg(n).te||0)>=1,"Prepara un t\xE9","Make a cup of tea","\u304A\u8336\u3092\u3044\u308C\u308B"],[n=>Id(n)>=2,"Decora dos lugares de la caba\xF1a","Decorate two spots in the cabin","\u5C0F\u5C4B\u306E2\u304B\u6240\u3092\u98FE\u308B"],[n=>(rg(n).rg||0)>=1,"Riega las plantas","Water the plants","\u690D\u7269\u306B\u6C34\u3092\u3084\u308B"],[n=>Pd(n)>=3,"Escucha las historias de tres visitas","Hear the stories of three visits","3\u56DE\u306E\u8A2A\u554F\u8005\u306E\u8A71\u3092\u805E\u304F"],[n=>Id(n)>=4,"Decora cuatro lugares","Decorate four spots","4\u304B\u6240\u3092\u98FE\u308B"],[n=>sg(n)>=5,"Re\xFAne cinco objetos","Gather five objects","\u98FE\u308A\u30925\u3064\u96C6\u3081\u308B"],[n=>Pd(n)>=6,"Lee seis notas de los visitantes","Read six visitor notes","\u8A2A\u554F\u8005\u306E\u30E1\u30E2\u30926\u3064\u8AAD\u3080"],[n=>Id(n)>=6,"Deja decorados todos los lugares","Leave every spot decorated","\u3059\u3079\u3066\u306E\u5834\u6240\u3092\u98FE\u308B"]],Ld=(n,e)=>!!(n.ltr||{})[e]||uh().has(e)&&Od[e][0](n);function SM(n){n.add(Od.map(e=>[e[1],e[2],e[3]])),n.add([["Desc\xFAbrelo en el r\xEDo","Discover it on the river","\u5DDD\u3067\u898B\u3064\u3051\u307E\u3057\u3087\u3046"],["Pista","Hint","\u30D2\u30F3\u30C8"],["Se abri\xF3 una carta nueva en el diario","A new letter opened in the diary","\u65E5\u8A18\u306B\u65B0\u3057\u3044\u624B\u7D19\u304C\u958B\u304D\u307E\u3057\u305F"]])}function lg(n,e,t,i,s){let r=uh(),a=_o(),o=Hd();e.ltr=e.ltr||{};let l=0,c=0,h=document.createElement("h3");h.style.cssText="margin:12px 0 8px;font:600 .95rem system-ui",h.textContent=t("Cartas de Mara"),n.appendChild(h),og.forEach((S,m)=>{let f=document.createElement("p");f.style.margin="0 0 10px";let y=v=>{let x=document.createElement("span");x.textContent=v,f.appendChild(x)};if(y("\u2709 "),Ld(e,m)){if(e.ltr[m]||(e.ltr[m]=1,l++),y(t(S)),f.style.color="#ffe9b8",a[m]&&Nd(m)){let v=document.createElement("div");v.style.cssText="margin:6px 0 0 14px;font-size:.88em;color:#cfe8ff";let x=document.createElement("span");x.textContent="\u2726 ";let b=document.createElement("span");b.textContent=t(Nd(m)[3]),v.append(x,b),f.appendChild(v),e.ltr[m]<2&&(e.ltr[m]=2,l++)}if(o[m]&&Dd(m)){let v=document.createElement("div");v.style.cssText="margin:6px 0 0 14px;font-size:.88em;color:#e8d3ff";let x=document.createElement("span");x.textContent="\u21A9 ";let b=document.createElement("span");b.textContent=t(Dd(m)[3]),v.append(x,b),f.appendChild(v),c++}}else{y(t("Carta sin abrir")),y(" \xB7 "),y(t(MM[m])),f.style.opacity=".6";let v=document.createElement("div");v.style.cssText="margin:4px 0 0 14px;font-size:.82em;color:#cfd6ff";let x=document.createElement("span");x.textContent="\u2727 ";let b=document.createElement("span");b.textContent=t(r.has(m)?Od[m][1]:"Desc\xFAbrelo en el r\xEDo"),v.append(x,b),f.appendChild(v)}n.appendChild(f)});let d=eg(e)+0,u=$0(e)+ig(e);(d||u)&&(i(2*d+u),s());let p=document.createElement("button");p.type="button",p.textContent=t("Cuaderno del r\xEDo")+" \xB7 "+lh()+"/"+yo.length,p.style.cssText="min-height:44px;margin:4px 8px 4px 0;padding:8px 14px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",p.onclick=()=>tg(t),n.appendChild(p),e.cnt=e.cnt||{};let g=Math.max(0,c-(e.cnt.tv||0));return g&&(e.cnt.tv=c,i(2*g),s()),l&&(i(3*l),s()),l}var Bd=n=>{let e=uh(),t=_o(),i=0;for(let s=0;s<og.length;s++)!(n.ltr||{})[s]&&Ld(n,s)&&i++;return Object.keys(t).forEach(s=>{e.has(+s)&&((n.ltr||{})[s]||0)<2&&i++}),Object.keys(Hd()).filter(r=>Ld(n,+r)).length>((n.cnt||{}).tv||0)&&i++,i},EM=["Primavera","Verano","Oto\xF1o","Invierno"],cg="rio3d-season",ag=["auto","0","1","2","3"],hh=()=>{try{return localStorage.getItem(cg)||"auto"}catch{return"auto"}},hg=()=>{let n=hh();if(n!=="auto")return+n;let e=new Date().getMonth();return e>=2&&e<=4?0:e>=5&&e<=7?1:e>=8&&e<=10?2:3},ug=()=>{let n=ag[(ag.indexOf(hh())+1)%5];try{localStorage.setItem(cg,n)}catch{}return n},dg=()=>"Estaci\xF3n: "+(hh()==="auto"?"Auto":EM[+hh()]),fg=[[255,182,200],[255,222,140],[232,140,70],[240,246,255]];function zd(n){n.add([["Estaci\xF3n: Auto","Season: Auto","\u5B63\u7BC0: \u304A\u307E\u304B\u305B"],["Estaci\xF3n: Primavera","Season: Spring","\u5B63\u7BC0: \u6625"],["Estaci\xF3n: Verano","Season: Summer","\u5B63\u7BC0: \u590F"],["Estaci\xF3n: Oto\xF1o","Season: Autumn","\u5B63\u7BC0: \u79CB"],["Estaci\xF3n: Invierno","Season: Winter","\u5B63\u7BC0: \u51AC"]])}var ch=-1;function pg(n,e,t){let i=Bd(n);if(ch<0){ch=i;return}i>ch&&e(t("Se abri\xF3 una carta nueva en el diario")),ch=i}var TM="rio-tasks",kd=[["Dejar una linterna en el barandal","Leave a lantern on the railing","\u624B\u3059\u308A\u306B\u30E9\u30F3\u30BF\u30F3\u3092\u7F6E\u304F","Dej\xE9 una linterna en el barandal. Si cruzas de noche, ah\xED estar\xE1 esper\xE1ndote.","I left a lantern on the railing. If you cross at night, it will be waiting for you.","\u624B\u3059\u308A\u306B\u30E9\u30F3\u30BF\u30F3\u3092\u7F6E\u304D\u307E\u3057\u305F\u3002\u591C\u306B\u6E21\u308B\u306A\u3089\u3001\u305D\u3053\u3067\u5F85\u3063\u3066\u3044\u307E\u3059\u3002"],["Pedir un deseo bajo el portal","Make a wish under the gate","\u9CE5\u5C45\u306E\u4E0B\u3067\u9858\u3044\u3054\u3068\u3092\u3059\u308B","Ped\xED otro deseo bajo el portal. Este no es m\xEDo: es para quien lea esto.","I made another wish under the gate. This one is not mine: it is for whoever reads this.","\u9CE5\u5C45\u306E\u4E0B\u3067\u3082\u3046\u3072\u3068\u3064\u9858\u3044\u307E\u3057\u305F\u3002\u79C1\u306E\u3067\u306F\u306A\u304F\u3001\u3053\u308C\u3092\u8AAD\u3080\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u3002"],["Encender un farolillo","Light a lantern","\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3059","Encend\xED un farolillo en la aldea. Dicen que dura hasta que alguien lo recuerda.","I lit a lantern in the village. They say it burns until someone remembers it.","\u6751\u3067\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3057\u307E\u3057\u305F\u3002\u8AB0\u304B\u304C\u601D\u3044\u51FA\u3059\u3042\u3044\u3060\u3001\u6D88\u3048\u306A\u3044\u305D\u3046\u3067\u3059\u3002"],["Guardar un p\xE9talo de sakura","Keep a sakura petal","\u685C\u306E\u82B1\u3073\u3089\u3092\u3057\u307E\u3046","Guard\xE9 otro p\xE9talo. Ya tengo suficientes para forrar una carta entera.","I kept another petal. I now have enough to line a whole letter.","\u3082\u3046\u4E00\u679A\u3001\u82B1\u3073\u3089\u3092\u3057\u307E\u3044\u307E\u3057\u305F\u3002\u624B\u7D19\u3092\u4E00\u901A\u3046\u3081\u3089\u308C\u308B\u307B\u3069\u306B\u306A\u308A\u307E\u3057\u305F\u3002"],["Quedarse quieto con las garzas","Stay still with the herons","\u30B5\u30AE\u3068\u9759\u304B\u306B\u5F85\u3064","Me qued\xE9 quieta con las garzas hasta que me olvidaron. Fue el mejor halago.","I stayed still with the herons until they forgot I was there. Best compliment ever.","\u30B5\u30AE\u306E\u305D\u3070\u3067\u3058\u3063\u3068\u3057\u3066\u3001\u79C1\u306E\u5B58\u5728\u3092\u5FD8\u308C\u3089\u308C\u308B\u307E\u3067\u5F85\u3061\u307E\u3057\u305F\u3002\u6700\u9AD8\u306E\u307B\u3081\u8A00\u8449\u3067\u3059\u3002"],["Tocar la campana","Ring the bell","\u9418\u3092\u9CF4\u3089\u3059","Toqu\xE9 la campana una vez m\xE1s. Si la oyes desde el balc\xF3n, es m\xEDa.","I rang the bell once more. If you hear it from your balcony, it is mine.","\u3082\u3046\u4E00\u5EA6\u9418\u3092\u9CF4\u3089\u3057\u307E\u3057\u305F\u3002\u30D0\u30EB\u30B3\u30CB\u30FC\u3067\u805E\u3053\u3048\u305F\u3089\u3001\u305D\u308C\u306F\u79C1\u3067\u3059\u3002"],["Llenar un frasco con agua de la cascada","Fill a jar with waterfall water","\u6EDD\u306E\u6C34\u3092\u74F6\u306B\u304F\u3080","Llen\xE9 un frasco con agua de la cascada. Ponlo en el estantito: huele a tarde larga.","I filled a jar with waterfall water. Put it on the little shelf: it smells like a long afternoon.","\u6EDD\u306E\u6C34\u3092\u74F6\u306B\u304F\u307F\u307E\u3057\u305F\u3002\u5C0F\u3055\u306A\u68DA\u306B\u7F6E\u3044\u3066\u304F\u3060\u3055\u3044\u3002\u9577\u3044\u5348\u5F8C\u306E\u9999\u308A\u304C\u3057\u307E\u3059\u3002"],["Compartir una taza de t\xE9","Share a cup of tea","\u304A\u8336\u3092\u308F\u304B\u3061\u3042\u3046","Compart\xED una taza de t\xE9. Pens\xE9 en la tuya, en la caba\xF1a, humeando.","I shared a cup of tea. I thought of yours, steaming at the cabin.","\u304A\u8336\u3092\u308F\u304B\u3061\u3042\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u6E6F\u6C17\u3092\u7ACB\u3066\u308B\u3042\u306A\u305F\u306E\u4E00\u676F\u3092\u601D\u3044\u307E\u3057\u305F\u3002"],["Escuchar el bamb\xFA","Listen to the bamboo","\u7AF9\u306E\u97F3\u306B\u8033\u3092\u3059\u307E\u3059","Escuch\xE9 el bamb\xFA un buen rato. Suena a campanilla de viento sin due\xF1o.","I listened to the bamboo a good while. It sounds like a wind chime with no owner.","\u7AF9\u306E\u97F3\u3092\u3057\u3070\u3089\u304F\u805E\u304D\u307E\u3057\u305F\u3002\u6301\u3061\u4E3B\u306E\u3044\u306A\u3044\u98A8\u9234\u306E\u3088\u3046\u3067\u3059\u3002"],["Dejar una flor en el estanque","Leave a flower on the pond","\u6C60\u306B\u82B1\u3092\u6D6E\u304B\u3079\u308B","Dej\xE9 una flor en el estanque. Flota hacia donde t\xFA ya est\xE1s.","I left a flower on the pond. It floats toward wherever you already are.","\u6C60\u306B\u82B1\u3092\u6D6E\u304B\u3079\u307E\u3057\u305F\u3002\u3042\u306A\u305F\u304C\u3044\u308B\u65B9\u3078\u6D41\u308C\u3066\u3044\u304D\u307E\u3059\u3002"],["Encender los fuegos para Mara","Light the fireworks for Mara","\u30DE\u30E9\u306E\u305F\u3081\u306B\u82B1\u706B\u3092\u3042\u3052\u308B","Esta noche los fuegos del castillo son para ti. Gracias por seguirme hasta aqu\xED.","Tonight the castle fireworks are for you. Thank you for following me all the way here.","\u4ECA\u591C\u306E\u57CE\u306E\u82B1\u706B\u306F\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u3002\u3053\u3053\u307E\u3067\u3064\u3044\u3066\u304D\u3066\u304F\u308C\u3066\u3042\u308A\u304C\u3068\u3046\u3002"]],Gd=[["Escuchar el crujido del puente","Listen to the bridge creak","\u6A4B\u306E\u304D\u3057\u3080\u97F3\u3092\u805E\u304F","Volv\xED al puente: cruji\xF3 con tu mismo ritmo al cruzar. Ya no suena a madera, suena a casa.","I came back to the bridge: it creaked in your same rhythm. It no longer sounds like wood; it sounds like home.","\u6A4B\u306B\u623B\u308B\u3068\u3001\u3042\u306A\u305F\u3068\u540C\u3058\u6B69\u5E45\u3067\u304D\u3057\u307F\u307E\u3057\u305F\u3002\u3082\u3046\u6728\u306E\u97F3\u3067\u306F\u306A\u304F\u3001\u5BB6\u306E\u97F3\u3067\u3059\u3002"],["Mirar el reflejo del portal","Watch the gate\u2019s reflection","\u9CE5\u5C45\u306E\u6620\u308A\u3092\u773A\u3081\u308B","Esta vez mir\xE9 el reflejo en lugar del portal. Se ve igual de bien, pero m\xE1s tranquilo.","This time I looked at the reflection instead of the gate. It looks just as good, only calmer.","\u4ECA\u56DE\u306F\u9CE5\u5C45\u3067\u306F\u306A\u304F\u6C34\u9762\u306E\u6620\u308A\u3092\u898B\u307E\u3057\u305F\u3002\u540C\u3058\u304F\u3089\u3044\u304D\u308C\u3044\u3067\u3001\u3082\u3063\u3068\u9759\u304B\u3067\u3059\u3002"],["Saludar a quien pasa en la aldea","Greet someone passing in the village","\u6751\u3067\u3059\u308C\u3061\u304C\u3046\u4EBA\u306B\u3042\u3044\u3055\u3064\u3059\u308B","Una se\xF1ora de la aldea me salud\xF3 como si fuera vecina. Le dije que ten\xEDa una caba\xF1a lejos, y sonri\xF3.","A woman in the village greeted me like a neighbor. I told her I had a cabin far away, and she smiled.","\u6751\u306E\u5973\u6027\u304C\u96A3\u4EBA\u306E\u3088\u3046\u306B\u3042\u3044\u3055\u3064\u3057\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u9060\u304F\u306B\u5C0F\u5C4B\u304C\u3042\u308B\u3068\u8A71\u3059\u3068\u3001\u7B11\u3063\u3066\u304F\u308C\u307E\u3057\u305F\u3002"],["Atrapar un p\xE9talo en el aire","Catch a petal in the air","\u821E\u3046\u82B1\u3073\u3089\u3092\u3064\u304B\u3080","Atrap\xE9 un p\xE9talo en el aire sin intentarlo. Dicen que da suerte; te lo mando de regalo.","I caught a petal in mid-air without trying. They say it brings luck; I am sending it to you.","\u4F55\u6C17\u306A\u304F\u7A7A\u4E2D\u3067\u82B1\u3073\u3089\u3092\u3064\u304B\u307F\u307E\u3057\u305F\u3002\u5E78\u904B\u306E\u3057\u308B\u3057\u3060\u305D\u3046\u3067\u3059\u3002\u3042\u306A\u305F\u306B\u8D08\u308A\u307E\u3059\u3002"],["Contar las garzas en silencio","Count the herons in silence","\u9759\u304B\u306B\u30B5\u30AE\u3092\u6570\u3048\u308B","Cont\xE9 las garzas sin mover un dedo: siempre salen una m\xE1s de las que cre\xEDa.","I counted the herons without moving a finger: there is always one more than I thought.","\u6307\u4E00\u672C\u52D5\u304B\u3055\u305A\u30B5\u30AE\u3092\u6570\u3048\u307E\u3057\u305F\u3002\u601D\u3063\u305F\u3088\u308A\u3001\u3044\u3064\u3082\u3072\u3068\u3064\u591A\u3044\u306E\u3067\u3059\u3002"],["Escuchar c\xF3mo se apaga el eco de la campana","Listen to the bell\u2019s echo fade","\u9418\u306E\u4F59\u97FB\u304C\u6D88\u3048\u308B\u306E\u3092\u805E\u304F","Esper\xE9 a que el eco se apagara del todo. Dura m\xE1s de lo que uno imagina, y es lo mejor de la campana.","I waited for the echo to fade completely. It lasts longer than you think, and it is the best part of the bell.","\u4F59\u97FB\u304C\u5B8C\u5168\u306B\u6D88\u3048\u308B\u307E\u3067\u5F85\u3061\u307E\u3057\u305F\u3002\u601D\u3046\u3088\u308A\u9577\u304F\u3001\u305D\u308C\u304C\u9418\u306E\u3044\u3061\u3070\u3093\u597D\u304D\u306A\u3068\u3053\u308D\u3067\u3059\u3002"],["Mojar los dedos en la cascada","Dip your fingers in the waterfall","\u6EDD\u306B\u6307\u3092\u3072\u305F\u3059","Moj\xE9 los dedos en la cascada: estaba fr\xEDa y clara. Te mando un poco de ese fr\xEDo para el verano.","I dipped my fingers in the waterfall: cold and clear. I am sending you a little of that chill for summer.","\u6EDD\u306B\u6307\u3092\u3072\u305F\u3057\u307E\u3057\u305F\u3002\u51B7\u305F\u304F\u3066\u6F84\u3093\u3067\u3044\u307E\u3059\u3002\u590F\u306E\u305F\u3081\u306B\u3001\u5C11\u3057\u305D\u306E\u51B7\u305F\u3055\u3092\u9001\u308A\u307E\u3059\u3002"],["Mirar c\xF3mo suben el vapor y la tarde","Watch the steam and the afternoon rise","\u6E6F\u6C17\u3068\u5915\u65B9\u304C\u7ACB\u3061\u306E\u307C\u308B\u306E\u3092\u898B\u308B","El vapor del t\xE9 sub\xEDa despacio y la tarde con \xE9l. Anot\xE9 la hora: no se me va a olvidar.","The tea steam rose slowly and the afternoon with it. I wrote down the time: I will not forget it.","\u304A\u8336\u306E\u6E6F\u6C17\u304C\u3086\u3063\u304F\u308A\u6607\u308A\u3001\u5915\u65B9\u3082\u3044\u3063\u3057\u3087\u306B\u6607\u308A\u307E\u3057\u305F\u3002\u6642\u523B\u3092\u66F8\u304D\u3068\u3081\u305F\u306E\u3067\u3001\u5FD8\u308C\u307E\u305B\u3093\u3002"],["Dejar que el viento mueva el bamb\xFA","Let the wind move the bamboo","\u98A8\u304C\u7AF9\u3092\u3086\u3089\u3059\u306E\u306B\u307E\u304B\u305B\u308B","No hice nada y el bamb\xFA hizo todo. Aprend\xED que a veces ayudar es apartarse.","I did nothing and the bamboo did everything. I learned that sometimes helping means stepping aside.","\u4F55\u3082\u3057\u306A\u3044\u3068\u3001\u7AF9\u304C\u3059\u3079\u3066\u3092\u3084\u3063\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u3068\u304D\u306B\u306F\u8EAB\u3092\u5F15\u304F\u3053\u3068\u304C\u52A9\u3051\u306B\u306A\u308B\u3068\u77E5\u308A\u307E\u3057\u305F\u3002"],["Ver c\xF3mo se cierra un loto","Watch a lotus close","\u84EE\u304C\u9589\u3058\u308B\u306E\u3092\u898B\u308B","Vi cerrarse un loto al amanecer. No es un final: es el mismo descanso que el tuyo.","I watched a lotus close at dawn. It is not an ending: it is the same rest you take.","\u591C\u660E\u3051\u306B\u84EE\u304C\u9589\u3058\u308B\u306E\u3092\u898B\u307E\u3057\u305F\u3002\u7D42\u308F\u308A\u3067\u306F\u306A\u304F\u3001\u3042\u306A\u305F\u306E\u4F11\u307F\u3068\u540C\u3058\u4F11\u307F\u3067\u3059\u3002"],["Mirar el castillo desde el agua","Look at the castle from the water","\u6C34\u306E\u4E0A\u304B\u3089\u57CE\u3092\u773A\u3081\u308B","Mir\xE9 el castillo desde el agua, como la primera vez. Sigue pareci\xE9ndose a las luces de tu terraza.","I looked at the castle from the water, like the first time. It still looks like the lights of your terrace.","\u6700\u521D\u306E\u3068\u304D\u306E\u3088\u3046\u306B\u3001\u6C34\u306E\u4E0A\u304B\u3089\u57CE\u3092\u773A\u3081\u307E\u3057\u305F\u3002\u3084\u306F\u308A\u3042\u306A\u305F\u306E\u30C6\u30E9\u30B9\u306E\u706F\u308A\u306B\u4F3C\u3066\u3044\u307E\u3059\u3002"]],Dd=n=>Gd[n]||null,wM="rio-tasks2";var AM=()=>{try{let n=JSON.parse(localStorage.getItem(wM)||"{}")||{};return n.d=n.d||{},n}catch{return{d:{}}}},Hd=()=>AM().d;var Nd=n=>kd[n]||null,RM=()=>{try{return JSON.parse(localStorage.getItem(TM)||"{}")}catch{return{}}},_o=RM;function mg(n){n.add(kd.map(e=>[e[0],e[1],e[2]])),n.add(kd.map(e=>[e[3],e[4],e[5]])),n.add(Gd.map(e=>[e[0],e[1],e[2]])),n.add(Gd.map(e=>[e[3],e[4],e[5]])),n.add([["Carta de vuelta","Letter back","\u8FD4\u4E8B\u306E\u624B\u7D19"],["Hoy ya diste dos vueltas. Ma\xF1ana, m\xE1s.","You have already done two returns today. More tomorrow.","\u4ECA\u65E5\u306F\u3082\u3046\u4E8C\u56DE\u3075\u308A\u8FD4\u308A\u307E\u3057\u305F\u3002\u7D9A\u304D\u306F\u660E\u65E5\u3002"]]),n.add([["Mant\xE9n pulsado para hacerlo","Press and hold to do it","\u9577\u62BC\u3057\u3067\u5B9F\u884C"],["Hecho. Un recuerdo m\xE1s para la caba\xF1a.","Done. One more keepsake for the cabin.","\u3067\u304D\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u306B\u601D\u3044\u51FA\u304C\u3072\u3068\u3064\u5897\u3048\u307E\u3057\u305F\u3002"],["Encargo de Mara","Mara\u2019s errand","\u30DE\u30E9\u306E\u304A\u9858\u3044"],["En el margen","In the margin","\u4F59\u767D\u306B"]])}var Kr=[{id:"porcheI",kind:"suelo",p:[-3.6,ue,2.1],n:"Porche"},{id:"interior",kind:"suelo",p:[.9,ue,-1.7],n:"Junto a la ventana"},{id:"porcheD",kind:"suelo",p:[6,ue,2.2],n:"Porche, junto al barandal"},{id:"alero",kind:"colgante",p:[-2.4,6.3,3.35],n:"Alero"},{id:"pared",kind:"pared",p:[4.6,6.3,-2.7],n:"Pared"},{id:"roca",kind:"roca",p:[-7.4,ue-1.3,2.6],n:"Mirador de roca"}],CM=n=>Kr.find(e=>e.id===n),Nn=(n,e,t)=>new ie(n,ge(e,t)),IM=(n,e)=>new ie(n,new Xe({color:e})),gt=(n,e,t,i,s,r,a,o,l)=>{let c=Nn(new Qe(n,e,t,l||8),i);return c.position.set(s,r,a),o&&o.add(c),c},Dt=(n,e,t,i,s,r,a,o,l)=>{let c=Nn(new It(n,10,8),e);return c.position.set(t,i,s),c.scale.set(r||1,a||1,o||1),l&&l.add(c),c},qt=(n,e,t,i,s,r,a,o)=>{let l=Nn(new xt(n,e,t),i);return l.position.set(s,r,a),o&&o.add(l),l},$i=(n,e,t,i,s,r,a)=>{let o=pt(mt,e,t,a||.5,!0);return o.position.set(i,s,r),o.userData.gl=a||.5,n.add(o),o},js={helecho(){let n=new me;gt(.34,.26,.45,"#b06c52",0,.22,0,n);for(let e=0;e<8;e++){let t=e/8*6.283,i=Nn(new Et(.12,.8,4),"#6fae78");i.position.set(Math.cos(t)*.22,.8,Math.sin(t)*.22),i.rotation.set(Math.sin(t)*.7,0,-Math.cos(t)*.7),n.add(i)}return n.userData.anim=e=>{n.rotation.y=Math.sin(e*.4)*.05},n},lavanda(){let n=new me;gt(.28,.22,.4,"#7d6a8f",0,.2,0,n);for(let e=0;e<7;e++){let t=e/7*6.283,i=Math.cos(t)*.14,s=Math.sin(t)*.14;gt(.012,.012,.7,"#6a9a6e",i,.7,s,n,4);for(let r=0;r<3;r++)Dt(.05,r%2?"#b79ae0":"#9e7fd0",i,.95+r*.1,s,1,1.4,1,n)}return n.userData.anim=e=>{n.rotation.z=Math.sin(e*.9)*.02},n},farolpapel(){let n=new me;gt(.03,.03,1.05,"#5a4132",0,.52,0,n);let e=Dt(.28,"#ffe2aa",0,1.35,0,1,1.35,1,n);return e.material=new Xe({color:16769706}),gt(.2,.2,.07,"#5a4132",0,1.78,0,n),$i(n,16760954,3.4,0,1.35,0,.55),n},tetera(){let n=new me;qt(1,.08,.7,"#7b5742",0,.7,0,n);for(let i of[-1,1])for(let s of[-1,1])gt(.04,.05,.7,"#6a4a38",i*.42,.35,s*.26,n,5);Dt(.26,"#4f6f8a",0,.98,0,1.1,.9,1,n),gt(.1,.1,.08,"#3f5a72",0,1.2,0,n);let e=gt(.04,.06,.3,"#4f6f8a",.32,1.04,0,n,5);e.rotation.z=-.9;let t=[];for(let i=0;i<4;i++){let s=pt(mt,15657206,.5,0,!1);s.userData.ph=i/4,n.add(s),t.push(s)}return n.userData.anim=i=>{t.forEach(s=>{let r=(i*.3+s.userData.ph)%1;s.position.set(.38+Math.sin(i*2+s.userData.ph*6)*.08*r,1.1+r*1.1,0),s.material.opacity=.4*(1-r),s.scale.setScalar(.35+r*.6)})},n},banquito(){let n=new me;qt(.9,.14,.7,"#8b6a50",0,.62,0,n);for(let e of[-1,1])for(let t of[-1,1])gt(.04,.05,.62,"#6b4d3a",e*.35,.31,t*.25,n,5);return qt(.78,.2,.6,"#c0746e",0,.79,0,n),n},libros(){let n=new me;qt(.95,.2,.65,"#b0769c",0,.1,0,n),qt(.85,.18,.6,"#6498b9",0,.29,0,n),qt(.8,.17,.55,"#cfb67c",-.03,.47,0,n),gt(.07,.07,.3,"#f0e6cf",.18,.7,0,n,6);let e=Dt(.06,"#ffd27a",.18,.92,0,1,1.6,1,n);e.material=new Xe({color:16765562});let t=$i(n,16757850,2.2,.18,.94,0,.5);return n.userData.anim=i=>{e.scale.y=1.6+Math.sin(i*11)*.15,t.material.opacity=.5+Math.sin(i*9)*.06},n},campanilla(){let n=new me;qt(.8,.1,.12,"#7b5742",0,0,0,n);let e=[];for(let t=-2;t<=2;t++){let i=new me;i.position.set(t*.17,-.05,0);let s=.55+(t+2)%2*.25;gt(.008,.008,s,"#eadfc4",0,-s/2,0,i,3),gt(.04,.05,.3,"#e0cd8a",0,-s-.12,0,i,6),n.add(i),e.push([i,t])}return n.userData.anim=t=>{e.forEach(([i,s])=>{i.rotation.z=Math.sin(t*1.6+s*.8)*.14,i.rotation.x=Math.sin(t*1.3+s)*.08})},n},atrapa(){let n=new me,e=new me;n.add(e);let t=Nn(new Pn(.4,.04,6,18),"#d8c19a");t.position.y=-.55,e.add(t);let i=Nn(new Pn(.2,.012,4,14),"#f0e6d2");return i.position.y=-.55,e.add(i),[[-.2,"#c97d68"],[0,"#6498b9"],[.2,"#cfb67c"]].forEach(([s,r])=>{gt(.008,.008,.4,"#e8dcc0",s,-1.15,0,e,3),qt(.07,.34,.02,r,s,-1.45,0,e)}),gt(.01,.01,.35,"#e8dcc0",0,-.17,0,e,3),n.userData.anim=s=>{e.rotation.z=Math.sin(s*.9)*.06},n},estrellas(){let n=new me;return[[-.45,-.5,0],[.4,-.8,1],[0,-1.2,2]].forEach(([e,t,i])=>{let s=IM(new Ba(.2),16771488);s.scale.set(1,1,.4),s.position.set(e,t,0),gt(.006,.006,-t*.9,"#eadfc4",e,t/2+.1,0,n,3),n.add(s),n.userData["s"+i]=s,$i(n,16769162,1.3,e,t,0,.35)}),n.userData.anim=e=>{for(let t=0;t<3;t++)n.userData["s"+t].rotation.y=e*.8+t},n},farolillos(){let n=new me;[[-.55,14706010],[0,15770191],[.55,14706010]].forEach(([t,i],s)=>{gt(.008,.008,.35,"#4a3a32",t,-.17,0,n,3);let r=Dt(.18,i,t,-.55,0,1,1.35,1,n);r.material=new Xe({color:i}),$i(n,16751204,1.5,t,-.55,0,.4)});let e=qt(1.4,.02,.02,"#3a2e28",0,0,0,n);return n.userData.anim=t=>{n.rotation.z=Math.sin(t*1.2)*.03},n},reloj(){let n=new me,e=Nn(new Qe(.42,.42,.08,20),"#6b4d3a");e.rotation.x=Math.PI/2,n.add(e);let t=Nn(new Qe(.35,.35,.02,20),"#f1e6cc");t.rotation.x=Math.PI/2,t.position.z=.05,n.add(t);let i=qt(.03,.3,.015,"#3d2e26",0,.15,.075,null),s=qt(.04,.2,.015,"#3d2e26",0,.1,.07,null),r=new me,a=new me;return r.position.z=0,a.position.z=0,r.add(i),a.add(s),n.add(r,a),n.userData.anim=o=>{let l=new Date;r.rotation.z=-l.getMinutes()/60*6.283,a.rotation.z=-(l.getHours()%12+l.getMinutes()/60)/12*6.283},n},guitarra(){let n=new me,e=new me;e.rotation.z=.35,n.add(e),Dt(.34,"#b9793f",0,-.35,0,1,1.15,.3,e),Dt(.24,"#b9793f",0,.05,0,1,1.1,.3,e);let t=gt(.1,.1,.05,"#4a3326",0,-.25,.1,e);return t.rotation.x=Math.PI/2,qt(.1,1.05,.06,"#6b4d3a",0,.65,0,e),qt(.14,.2,.06,"#4a3326",0,1.25,0,e),n},estantito(){let n=new me;qt(1.3,.1,.35,"#7b5742",0,0,.1,n),gt(.12,.12,.35,"#bee1eb",-.4,.22,.1,n,8).material=new Xe({color:12509675,transparent:!0,opacity:.6}),gt(.1,.1,.28,"#e6c896",-.1,.19,.1,n,8);for(let e=0;e<3;e++){let t=Dt(.025,16773792,-.4+(e-1)*.04,.2+e*.03,.1,1,1,1,n);t.material=new Xe({color:16773792})}gt(.08,.06,.12,"#9a5b44",.4,.11,.1,n);for(let e=0;e<4;e++){let t=Nn(new Et(.05,.3,4),"#6fae78");t.position.set(.4+(e-1.5)*.05,.34,.1),t.rotation.z=(e-1.5)*.25,n.add(t)}return $i(n,16771222,1.8,-.4,.25,.2,.3),n},mapa(){let n=new me;qt(.9,.7,.03,"#e6d3a6",0,0,0,n),qt(.94,.06,.05,"#6b4d3a",0,.38,0,n),qt(.94,.06,.05,"#6b4d3a",0,-.38,0,n);let e=[[-.3,-.2],[-.12,.08],[0,-.05],[.14,.2],[.32,-.2]];for(let t=0;t<4;t++){let i=e[t],s=e[t+1],r=Math.hypot(s[0]-i[0],s[1]-i[1]),a=qt(r,.015,.01,"#8d6b44",(i[0]+s[0])/2,(i[1]+s[1])/2,.02,n);a.rotation.z=Math.atan2(s[1]-i[1],s[0]-i[0])}return Dt(.04,"#c0463a",.1,-.26,.03,1,1,.5,n),n},mojon(){let n=new me;return[[0,.55,.2,"#7d7b86"],[.38,.42,.17,"#8d8b97"],[.7,.3,.14,"#9a98a4"],[.95,.2,.11,"#a8a6b2"]].forEach(([e,t,i,s])=>Dt(t,s,0,e+.1,0,1,.5,1,n)),n},farolpiedra(){let n=new me,e="#8a8896";gt(.4,.45,.18,e,0,.09,0,n,6),gt(.1,.12,.9,e,0,.6,0,n,6),gt(.35,.3,.14,e,0,1.1,0,n,6),qt(.5,.5,.5,e,0,1.4,0,n),qt(.26,.3,.52,"#ffe1a0",0,1.4,0,n).material=new Xe({color:16769440}),qt(.52,.3,.26,"#ffe1a0",0,1.4,0,n).material=new Xe({color:16769440});let t=Nn(new Et(.5,.4,4),e);return t.position.y=1.85,t.rotation.y=Math.PI/4,n.add(t),$i(n,16760430,3.4,0,1.4,0,.5),n},floresroca(){let n=new me,e=[];for(let t=-4;t<=4;t++){let i=new me;i.position.set(t*.17,0,Math.sin(t)*.15);let s=.4+Math.abs(t%3)*.18;gt(.012,.012,s,"#6a9a6e",0,s/2,0,i,3),Dt(.07,["#f2b6c8","#fff0a0","#a6c8ff"][(t+4)%3],0,s,0,1,1,1,i),n.add(i),e.push([i,t])}return n.userData.anim=t=>{e.forEach(([i,s])=>{i.rotation.z=Math.sin(t*1.1+s*.7)*.06})},n}};js.farolpuente=function(){let n=new me,e=new me;n.add(e),gt(.012,.012,.4,"#4a3a32",0,-.2,0,e,3),gt(.16,.16,.05,"#5a4132",0,-.45,0,e);let t=Dt(.2,16766614,0,-.72,0,1,1.4,1,e);return t.material=new Xe({color:16766614}),gt(.16,.16,.05,"#5a4132",0,-1.05,0,e),$i(e,16758891,2.6,0,-.72,0,.5),n.userData.anim=i=>{e.rotation.z=Math.sin(i*1.1)*.06},n};js.petalos=function(){let n=new me,e=qt(1.1,.07,.07,"#6b4d3a",0,0,0,n);e.rotation.z=.4;let t=[];for(let i=0;i<7;i++){let s=-.45+i*.15,r=-.18+i*.13+(i%2?.1:-.05),a=Dt(.09,i%2?"#f6b9cb":"#f9d2de",s,r,.05,1,1,.7,n);t.push([a,i])}return n};js.campanatemplo=function(){let n=new me,e=new me;return n.add(e),gt(.012,.012,.35,"#4a3a32",0,-.17,0,e,3),qt(.2,.1,.2,"#6b4d3a",0,-.4,0,e),gt(.2,.34,.6,"#b98a3f",0,-.78,0,e,10),gt(.35,.35,.04,"#8a6228",0,-1.1,0,e,10),Dt(.06,"#6b4d3a",0,-1.1,0,1,1,1,e),n.userData.anim=t=>{e.rotation.z=Math.sin(t*.9)*.08},n};js.frasco=function(){let n=new me,e=gt(.22,.22,.55,"#bee1eb",0,.28,0,n,10);e.material=new Xe({color:12509675,transparent:!0,opacity:.5});let t=gt(.19,.19,.34,"#6eb8e8",0,.2,0,n,10);return t.material=new Xe({color:7256296,transparent:!0,opacity:.75}),gt(.12,.12,.1,"#8b6a50",0,.62,0,n,8),$i(n,10542335,1.6,0,.3,0,.3),n};js.lotocuenco=function(){let n=new me,e=gt(.34,.2,.22,"#5f7f8f",0,.12,0,n,12),t=gt(.3,.3,.02,"#78bed7",0,.22,0,n,12);t.material=new Xe({color:7913175});let i=[];for(let s=-2;s<=2;s++){let r=Dt(.1,s%2?"#f6b9cb":"#f9d2de",s*.09,.38+(2-Math.abs(s))*.03,0,.8,1.5,.8,n);r.rotation.z=-s*.25,i.push(r)}return Dt(.05,"#f2d27a",0,.3,0,1,1,1,n),n.userData.anim=s=>{n.rotation.y=Math.sin(s*.3)*.1},n};var PM={gato(){let n=new me;Dt(.4,"#3a3548",0,.3,0,1.3,.75,.9,n),Dt(.25,"#3a3548",.5,.52,0,1,1,1,n);for(let t of[-.12,.12]){let i=Nn(new Et(.07,.16,4),"#3a3548");i.position.set(.5,.78,t),n.add(i);let s=Dt(.03,"#ffe27a",.72,.55,t*.8,1,1,1,n);s.material=new Xe({color:16769658})}let e=Nn(new Pn(.3,.06,6,12,4),"#3a3548");return e.position.set(-.42,.18,.2),e.rotation.x=1.5,n.add(e),n.userData.anim=t=>{e.rotation.z=Math.sin(t*2)*.3},n},zorro(){let n=new me;Dt(.45,"#c7703a",0,.45,0,1.5,.8,.8,n),Dt(.28,"#c7703a",.75,.75,0,1.2,.9,.9,n),Dt(.12,"#fff2e0",1,.7,0,1.2,.7,1,n);for(let t of[-.14,.14]){let i=Nn(new Et(.09,.25,4),"#c7703a");i.position.set(.72,1.02,t),n.add(i)}let e=Dt(.3,"#c7703a",-.75,.5,0,2,.8,.8,n);return Dt(.14,"#fff2e0",-1.1,.55,0,1,1,1,n),n.userData.anim=t=>{e.rotation.z=Math.sin(t*1.5)*.15},n},buho(){let n=new me;Dt(.34,"#8a7560",0,.5,0,1,1.4,1,n),Dt(.22,"#e8dcc4",0,.46,.14,1,1.3,.6,n);for(let e of[-.14,.14]){let t=Dt(.1,"#fff1b0",e,.78,.22,1,1,.6,n),i=Dt(.04,"#2a2030",e,.78,.3,1,1,1,n),s=Nn(new Et(.06,.18,4),"#8a7560");s.position.set(e*1.5,1.05,0),n.add(s)}return n},mariposa(){let n=new me,e=[];for(let t of[-1,1]){let i=new me,s=new ie(new qn(.3,8),new Xe({color:8382624,side:pn,transparent:!0,opacity:.9}));s.position.x=t*.28,i.add(s),n.add(i),e.push([i,t])}return Dt(.05,"#3a3a50",0,0,0,1,1,1,n),$i(n,12512200,1.6,0,0,0,.35),n.userData.anim=t=>{let i=Math.sin(t*14)*.9;e.forEach(([s,r])=>{s.rotation.y=r*i})},n}},re={on:!1,root:null,markers:{},models:{},vis:null,vcur:null,vnext:25,sel:null,rit:{te:0,riego:0},mem:0},LM=n=>ah.find(e=>e.id===n),$s=()=>!!se.repaired.techo,gg=(n,e,t)=>{try{let i=new ai(new L(n,30,e),new L(0,-1,0),0,60);i.camera=tn;let s=i.intersectObjects(ze.children,!0).filter(r=>r.object.isMesh&&!r.object.userData.hab&&r.object.visible);return s.length?s[0].point.y:t}catch{return t}};function Wd(){let n=[];return re.root&&(re.on&&Object.values(re.markers).forEach(e=>n.push(e)),re.vcur&&n.push(re.vcur.g)),n}var fh=()=>{for(let n of Kr){let e=se.decor[n.id],t=re.models[n.id];if(t&&t.id!==e&&(re.root.remove(t.g),delete re.models[n.id]),e&&!re.models[n.id]){let i=js[e]();i.userData.hab=!0,i.traverse(r=>{r.userData.hab=!0});let s=vo(n);i.position.set(s[0],s[1],s[2]),re.root.add(i),re.models[n.id]={id:e,g:i}}}},vo=n=>(n.kind==="roca"&&!n._y&&(n._y=gg(n.p[0],n.p[2],n.p[1])),n.kind==="roca"?[n.p[0],n._y,n.p[2]]:n.p);function xg(){re.root=new me,re.root.userData.hab=!0,ze.add(re.root);for(let n of Kr){let e=new me,t=new ie(new Pn(.62,.05,6,28),new Xe({color:16771512,transparent:!0,opacity:.7,depthTest:!1}));t.rotation.x=Math.PI/2,t.renderOrder=9,e.add(t);let i=new ie(new It(.95,8,6),new Xe({visible:!1}));e.add(i),e.userData.itemId="slot:"+n.id,e.userData.hab=!0,t.userData.hab=!0,i.userData.hab=!0,e.visible=!1;let s=vo(n),r=n.kind==="colgante"?-.9:n.kind==="pared"?0:.9;e.position.set(s[0],s[1]+r,s[2]),n.kind==="pared"&&(t.rotation.x=0),re.root.add(e),re.markers[n.id]=e}BM(),fh(),hi(),window.__habd={H:re,SLOTS:Kr,place:Sg,spawn:yg,state:se,DM:ah,show:n=>{re.on=n,Mg()}}}var DM={gato:[2.6,ue+1.12,3.45,.2],zorro:[-5.6,0,.9,.6],buho:[6.7,ue+1.35,3.75,0],mariposa:[3.4,ue+2.4,3.4,0]};function yg(n){if(re.vcur)return;let e=Object.keys(wd),t=n||e[Math.random()*e.length|0];if(t===re.vlast&&!n)return;re.vlast=t;let i=PM[t]();i.userData.itemId="visitante",i.userData.hab=!0,i.traverse(r=>{r.userData.hab=!0,r.userData.itemId||(r.userData.itemId="visitante")});let s=DM[t].slice();t==="zorro"&&(s[1]=gg(s[0],s[2],ue-1.3)),i.position.set(s[0],s[1],s[2]),i.rotation.y=s[3],i.scale.setScalar(.01),re.root.add(i),re.vcur={k:t,g:i,t:0,life:50,done:!1,base:s};try{tt.chime((s[0]-1.5)/12,2)}catch{}UX.cap("Llega un visitante",3e4)}function NM(){let n=re.vcur;if(!n||n.done)return;let e=wd[n.k],t=se.vis[n.k]||0;se.vis[n.k]=t+1,n.done=!0,n.t=Math.max(n.t,n.life-3.5);let i=e.notes[t%e.notes.length];se.notes.includes(i)||se.notes.push(i),bo(2);let s=i;t===0&&e.gift&&!se.own[e.gift]&&(se.own[e.gift]=!0,s+=" \xB7 Te dej\xF3: "+LM(e.gift).name),Pt(s),Xs([n.g.position.x,n.g.position.y+.5,n.g.position.z]),UX.hap([10,50,10]);try{tt.chime((n.g.position.x-1.5)/12,3)}catch{}hi(),kn()}var bo=n=>{se.mem=(se.mem||0)+n,hi()},_g=90;function UM(){if(re.rit.te>0)return;re.rit.te=_g,re.teaT=7,se.cnt=se.cnt||{},se.cnt.te=(se.cnt.te||0)+1,bo(1),Pt("Preparas t\xE9. El vapor sube despacio. Qu\xE9 calma.");try{tt.chime(-.4,1)}catch{}UX.hap([8,40,8]),UX.cap("Tetera",2e4),re.tea||(re.tea=js.tetera(),re.tea.userData.hab=!0,re.tea.traverse(e=>e.userData.hab=!0),re.root.add(re.tea));let n=vo(Kr[0]);re.tea.position.set(n[0],n[1],n[2]),re.tea.visible=!0,kn()}function FM(){if(!(re.rit.riego>0)){if(!se.repaired.plantas){Pt("Primero repara las plantas");return}re.rit.riego=_g,se.cnt=se.cnt||{},se.cnt.rg=(se.cnt.rg||0)+1,bo(1),Xs([6.9,ue+1.2,3]),Xs([-2.4,ue+1.2,3.3]),Pt("Riegas las plantas. Huelen a campo."),UX.hap([8,40,8]),kn()}}var dh=[];function OM(n,e){if(!it.started||!$s()){dh.forEach(r=>r.visible=!1);return}let t=hg(),i=fg[t];if(!dh.length)for(let r=0;r<46;r++){let a=pt(mt,16777215,.32+Math.random()*.22,0,!1);a.userData.p={x:Math.random()*24-9,y:Math.random()*14,z:Math.random()*14-5,ph:Math.random()*6.3},a.userData.hab=!0,re.root.add(a),dh.push(a)}let s=i[0]<<16|i[1]<<8|i[2];for(let r of dh){let a=r.userData.p,o=t===1?.5:t===3?.9:t===2?1.3:1.1;a.y+=(t===1?o:-o)*n,a.x+=Math.sin(e*.6+a.ph)*.5*n+.25*n,a.y<-1&&(a.y=14),a.y>14&&(a.y=-1),a.x>15&&(a.x=-9),r.position.set(a.x,a.y+ue-1,a.z),r.visible=!0,r.material.color.setHex(s),r.material.opacity=t===1?.4+.25*Math.sin(e*2+a.ph):.75}}var Vd=14;function vg(n,e){if(!re.root)return;re.rit.te=Math.max(0,re.rit.te-n),re.rit.riego=Math.max(0,re.rit.riego-n),re.teaT>0&&(re.teaT-=n,re.teaT<=0&&re.tea&&(re.tea.visible=!1),re.tea&&!re.models.porcheI&&(re.tea.visible=re.teaT>0));let t=1;for(let i in re.models){let s=re.models[i].g;s.userData.anim&&s.userData.anim(e),s.traverse(r=>{r.isSprite&&r.userData.gl!=null&&r.material&&(r.material.opacity=r.userData.gl*(.85+.15*Math.sin(e*3+s.id)))})}if(re.tea&&re.tea.visible&&re.tea.userData.anim(e),re.vcur){let i=re.vcur;i.t+=n;let s=Math.max(.01,Math.min(1,i.t/1.5,(i.life-i.t)/1.5));i.g.scale.setScalar(s*s*(3-2*s)*(i.k==="mariposa"?1.7:1.1)),i.g.userData.anim&&i.g.userData.anim(e),i.k==="mariposa"&&i.g.position.set(i.base[0]+Math.sin(e*.6)*1.6,i.base[1]+Math.sin(e*.9)*.5,i.base[2]+Math.cos(e*.5)*.8),i.t>=i.life&&(re.root.remove(i.g),re.vcur=null)}if(it.started&&$s()&&!re.vcur&&(re.vnext-=n,re.vnext<=0&&(re.vnext=80+Math.random()*70,yg())),Vd-=n,Vd<=0&&(Vd=24+Math.random()*20,Object.values(se.decor).includes("campanilla"))){UX.cap("Campanilla de viento",2e4);try{tt.chime(.5,4)}catch{}}if(re.on){let i=.65+.3*Math.sin(e*2.6);for(let s in re.markers){let r=re.markers[s];r.children[0].material.opacity=re.sel===s.replace("slot:","")?1:i}}if(OM(n,e),re.btn){let i=$s();re.btn.hidden===i&&(re.btn.hidden=!i)}}function bg(n){return n==="visitante"?(NM(),!0):typeof n=="string"&&n.startsWith("slot:")?(re.sel=n.slice(5),hi(),!0):!1}function Js(n,e,t,i){let s=document.createElement("button");return s.type="button",s.className="chip "+(t||""),s.style.cssText="min-width:0;align-self:center;white-space:nowrap;flex-direction:row",s.textContent=n,i&&(s.disabled=!0),s.onclick=e,s}function BM(){let n=vt("top");re.btn=document.createElement("button"),re.btn.id="habBtn",re.btn.type="button",re.btn.textContent="Habitar",re.btn.hidden=!0,vt("mats").after(re.btn),re.btn.onclick=()=>{re.on=!re.on,re.sel=null,Mg()},re.panel=document.createElement("div"),re.panel.id="hab",re.panel.style.cssText="display:none;gap:14px;align-items:flex-start;min-width:max-content",vt("panel").appendChild(re.panel),setTimeout(()=>{$s()&&Bd(se)>0&&Pt("Una carta nueva te espera en el diario")},4e3),setInterval(()=>{$s()&&!document.hidden&&pg(se,Pt,t=>t)},2500);let e=$s();setInterval(()=>{let t=$s();t!==e&&(e=t,t&&Pt("La caba\xF1a ya se puede habitar: toca \xABHabitar\xBB")),re.on&&(re.rit.te>0||re.rit.riego>0)&&hi()},1e3)}function Mg(){if(re.on)for(let n of Kr){let e=re.markers[n.id],t=vo(n),i=n.kind==="colgante"?-.9:n.kind==="pared"?0:.9;e.position.set(t[0],t[1]+i,t[2])}vt("chips").style.display=re.on?"none":"",re.btn.textContent=re.on?"Volver a reparar":"Habitar";for(let n in re.markers)re.markers[n].visible=re.on;hi()}function hi(){if(!re.panel)return;if(!re.on){re.panel.style.display="none";return}re.panel.style.display="flex",re.panel.textContent="";let n=document.createElement("div");n.className="grp";let e=document.createElement("span");e.className="lab",e.textContent="Recuerdos: "+(se.mem||0),n.appendChild(e);let t=(r,a,o)=>n.appendChild(Js(o>0?r+" \xB7 "+Math.ceil(o)+" s":r,a,"",o>0));t("Preparar t\xE9",UM,re.rit.te),t("Regar plantas",FM,re.rit.riego),n.appendChild(Js("Diario de la caba\xF1a",zM,"")),Rd(se)&&n.appendChild(Js("Jard\xEDn zen",()=>Y0({tr:r=>r,ctx:()=>tt.ctx,addMem:bo,say:Pt,chime:()=>{try{tt.chime(0,2)}catch{}}}),"ready")),n.appendChild(Js(dg(),()=>{ug(),hi()},"")),re.panel.appendChild(n);let i=re.sel&&CM(re.sel),s=document.createElement("div");if(s.className="grp",i){let r=document.createElement("span");r.className="lab",r.textContent=i.n,s.appendChild(r),se.decor[i.id]&&s.appendChild(Js("Quitar",()=>{delete se.decor[i.id],fh(),hi(),kn()},"")),ah.filter(a=>a.kind===i.kind&&se.decor[i.id]!==a.id&&(a.gate==null||_o()[a.gate])).forEach(a=>{let o=!!se.own[a.id]||a.gate!=null;s.appendChild(Js(o?a.name:a.name+" \xB7 "+a.cost,()=>Sg(i,a),o?"done":(se.mem||0)>=a.cost?"ready":"locked"))})}else{let r=document.createElement("span");r.className="loot",r.style.alignSelf="center",r.textContent="Toca un c\xEDrculo de la caba\xF1a para decorar ese lugar.",s.appendChild(r)}re.panel.appendChild(s)}function Sg(n,e){if(!se.own[e.id]){if((se.mem||0)<e.cost){Pt("Te faltan "+(e.cost-(se.mem||0))+" recuerdos. Prepara t\xE9 o espera visitas.");return}se.mem-=e.cost,se.own[e.id]=!0}for(let i of Object.keys(se.decor))se.decor[i]===e.id&&delete se.decor[i];se.decor[n.id]=e.id,fh();let t=vo(n);Xs([t[0],t[1]+1,t[2]]);try{tt.chime((t[0]-1.5)/12,2)}catch{}UX.hap([10,40,10]),Pt(e.name+" colocado"),hi(),kn()}function zM(){let n=document.createElement("div");n.style.cssText="position:fixed;inset:0;z-index:50;display:grid;place-items:center;background:rgba(20,22,48,.6)";let e=document.createElement("div");e.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(88vw,420px);max-height:70vh;overflow:auto;font:15px/1.45 system-ui";let t=document.createElement("h2");if(t.style.cssText="margin:0 0 10px;font:600 1.1rem system-ui",t.textContent="Diario de la caba\xF1a",e.appendChild(t),!se.notes.length){let s=document.createElement("p");s.textContent="A\xFAn vac\xEDo. Los visitantes dejan notas sobre quien vivi\xF3 aqu\xED.",e.appendChild(s)}se.notes.forEach(s=>{let r=document.createElement("p");r.style.margin="0 0 10px",r.textContent="\xB7 "+s,e.appendChild(r)}),lg(e,se,s=>s,bo,kn),se.cnt=se.cnt||{},Rd(se)&&!se.cnt.zen&&(se.cnt.zen=1,kn(),setTimeout(()=>{Pt("Se abri\xF3 el jard\xEDn zen: ya le\xEDste todas las cartas de Mara"),hi()},600));let i=Js("Cerrar",()=>n.remove(),"");e.appendChild(i),n.appendChild(e),n.onclick=s=>{s.target===n&&n.remove()},document.body.appendChild(n)}var Eg=()=>{re.root&&(fh(),hi())};var Xd=new ai,Tg=new le,HM=()=>Object.values(Xt).map(n=>n.g).concat([cn],Wd());function ph(n){let e=nn.getBoundingClientRect();Tg.set((n.clientX-e.left)/e.width*2-1,-((n.clientY-e.top)/e.height)*2+1),Xd.setFromCamera(Tg,tn);{let i=Wd();if(i.length){let s=Xd.intersectObjects(i,!0);for(let r of s){let a=r.object;for(;a&&!a.userData.itemId;)a=a.parent;if(a&&String(a.userData.itemId).startsWith("slot:"))return{id:a.userData.itemId,point:r.point}}}}let t=Xd.intersectObjects(HM().concat(Hc),!0);for(let i of t){if(!vd(i.object))continue;let s=i.object;for(;s&&!s.userData.itemId;)s=s.parent;return s?{id:s.userData.itemId,point:i.point}:{id:null,point:i.point}}return{id:null}}var qd=0,Yd=[0,0],kM=(n,e)=>po(n,e,Zs()*.8).length>0,ji=new Map,$n=null,Vn=null,Zd=0,Mo=0,wg=0,Ki=null,Ag=0,Rg=0,jn;function Cg(){jn=document.createElement("div"),jn.style.cssText="position:fixed;pointer-events:none;z-index:4;width:70px;height:70px;margin:-35px 0 0 -35px;border-radius:50%;border:2px solid rgba(255,255,255,.55);box-shadow:0 0 14px rgba(255,255,255,.25);opacity:0;transition:opacity .2s",document.body.appendChild(jn)}var Ig=()=>!$n;function Pg(){nn.addEventListener("pointerdown",e=>{if(!it.started)return;if(nn.setPointerCapture(e.pointerId),ji.set(e.pointerId,{x:e.clientX,y:e.clientY}),tt.resume(),ji.size===2){$n="pinch";let[r,a]=[...ji.values()];Zd=Math.hypot(r.x-a.x,r.y-a.y);return}let t=ph(e);Vn={x:e.clientX,y:e.clientY,t:performance.now(),moved:0,id:t.id};let i=performance.now();i-qd<320&&Math.hypot(e.clientX-Yd[0],e.clientY-Yd[1])<30?(Jr(),qd=0):(qd=i,Yd=[e.clientX,e.clientY]);let s=kM(e.clientX,e.clientY);e.button===2||e.shiftKey?$n="pan":$n=s||t.id&&w0(t.id)?"scrub":"orbit",e.pointerType==="mouse"&&e.button===1&&($n="pan")}),nn.addEventListener("contextmenu",e=>e.preventDefault()),nn.addEventListener("pointermove",e=>{$n==="scrub"&&it.started&&(jn.style.opacity=1,jn.style.width=jn.style.height=Zs()*1.6+"px",jn.style.margin=-Zs()*.8+"px 0 0 "+-Zs()*.8+"px",jn.style.left=e.clientX+"px",jn.style.top=e.clientY+"px");let t=ji.get(e.pointerId);if(!t)return;let i=e.clientX-t.x,s=e.clientY-t.y;if(t.x=e.clientX,t.y=e.clientY,$n==="pinch"&&ji.size===2){let[r,a]=[...ji.values()],o=Math.hypot(r.x-a.x,r.y-a.y);he.tr=Mt(he.tr*Zd/o,9,34),Zd=o,ho(i/2,s/2);return}if(jn.style.left=e.clientX+"px",jn.style.top=e.clientY+"px",!!Vn){if(Vn.moved+=Math.hypot(i,s),$n==="pan"){ho(i,s);return}if($n==="orbit")he.tth=Mt(he.tth-i*.006,-.95,.95),he.tph=Mt(he.tph+s*.004,.03,.42);else if($n==="scrub"){let r=Math.hypot(i,s),a=po(e.clientX,e.clientY,Zs());if(a.length){let o=Mt(r/16,0,1)*.08;a.forEach(c=>{c.m.userData.s=Math.max(0,c.m.userData.s-o*(1-.4*c.dd/Zs())),Xi(c.m)}),Ki=ph(e).point||a[0].m.getWorldPosition(new L),wg=Mt(r/20,0,1),Mo=performance.now(),!Vn.hapd&&Mo-Rg>1200&&(Vn.hapd=!0,Rg=Mo,UX.hap(6)),Math.random()<.5&&gd(Ki.x,Ki.y+.1,Ki.z+.1,1,16777215,1.2,1.2),tt.scrub(wg),clearTimeout(Ag),Ag=setTimeout(()=>{Ji(),kn()},700)}else tt.scrub(0)}}});let n=e=>{if(ji.has(e.pointerId)){if(ji.delete(e.pointerId),tt.scrub(0),Ki=null,jn.style.opacity=0,Vn&&Vn.moved<8&&performance.now()-Vn.t<450&&Vn.id&&$n!=="pinch"){bg(Vn.id)||Vn.id==="gato"&&F0();let t=cd(Vn.id);t&&go(t)}ji.size===0&&(Vn=null,$n=null)}};nn.addEventListener("pointerup",n),nn.addEventListener("pointercancel",n),nn.addEventListener("wheel",e=>{it.started&&(e.preventDefault(),he.tr=Mt(he.tr*(1+e.deltaY*.001),9,34))},{passive:!1})}function Lg(n){let e=Ki&&se.repaired.barandal&&performance.now()-Mo<400;e&&Ot.handL.position.set(Ki.x,Ki.y+1.2,Ki.z+1.2),Ot.handL.intensity+=((e?2.4:0)-Ot.handL.intensity)*Math.min(1,n*6),performance.now()-Mo>200&&tt.scrub(0)}Am();_m();t0();o0();M0();Xm();E0();T0();et.traverse(n=>{n.isMesh&&!n.userData.item&&(n.castShadow=!0,n.receiveShadow=!0)});Object.values(Xt).forEach(n=>n.blobs.forEach(e=>{e.castShadow=!1}));ym();Object.values(Xt).forEach(n=>n.blobs.forEach(Xi));C0(n=>{xd(n),go(n)});c0();Tm(Pt);kr();Ji();mo();g0();Cg();I0(xd);U0();Cm();Pg();PZ.ctx=()=>tt.ctx;PZ.started=()=>it.started;D0(V0);vt("go").onclick=()=>{try{tt.init(),tt.resume(),tt.rain(it.rainOn),tt.setMood(bs(),1)}catch{}vt("start").hidden=!0,it.started=!0;{let n=Ti(),e=Um();if(n>e){Fm(n);let t=n-e;setTimeout(()=>Pt({es:"La caba\xF1a recibi\xF3 "+t+(t>1?" luces":" luz")+" del r\xEDo",en:"The cabin received "+t+(t>1?" lights":" light")+" from the river",ja:"\u5C0F\u5C4B\u306F\u5DDD\u304B\u3089"+t+"\u3064\u306E\u706F\u3092\u53D7\u3051\u53D6\u308A\u307E\u3057\u305F"}[vs()]||""),1800)}}Vs()&&!Om()&&(Bm(),setTimeout(()=>Pt({es:"El cartel se complet\xF3: algo despert\xF3 en el jard\xEDn del acantilado",en:"The sign is complete: something woke in the cliff garden",ja:"\u770B\u677F\u304C\u5B8C\u6210\u3057\u307E\u3057\u305F\uFF1A\u5D16\u306E\u5EAD\u3067\u4F55\u304B\u304C\u76EE\u899A\u3081\u307E\u3057\u305F"}[vs()]||""),4800)),GM(),Gs()===sn.length&&(kt.armT=it.T+3),setTimeout(()=>{vt("hint").style.opacity=0},12e3)};x0();H0();Im();var GM=b0(Pt);Ad(UX);Fd(UX);zd(UX);xg();window.__habReset=Eg;var Jd=performance.now(),$d=0,mh=0,jd=0,gh=0,xh=Math.min(devicePixelRatio||1,1.5);function Dg(n){if(requestAnimationFrame(Dg),PZ.on){Jd=n;return}let e=Math.min(.05,(n-Jd)/1e3);if(Jd=n,it.T+=e,mh+=e,jd++,mh>3){let t=mh/jd;mh=0,jd=0,gh=t>.027?gh+1:0,gh>=2&&xh>1&&(gh=0,xh=Math.max(1,xh-.25),Hn.setPixelRatio(xh),kc())}it.started&&(jt.next-=e,jt.next<=0&&(jt.next=50+Math.random()*80,Ed()),k0(e),!kt.on&&!kt.shown&&it.T>kt.armT&&Gs()===sn.length&&Td(),G0(e)),y0(e,Ig()),Pm(e),Lg(e),l0(e,bs(),!!se.repaired.nichos),n0(e),qm(it.T),h0(e),O0(e,it.T),vg(e,it.T),$d-=e,$d<=0&&($d=.5,Ji(),P0(),tt.setMood(bs(),1)),tt.update(-3,1,it.T),Hn.render(ze,tn)}N0();UX.init();requestAnimationFrame(Dg);window.__cab={A:tt,R:Hn,scene:ze,shoot:Ed,celebrar:()=>{kt.shown=!1,Td()},star:jt,fest:kt,fl2:Ms,get T(){return it.T},cat:cn,dirtyNear:po,resetCam:Jr,panBy:ho,zoomBy:Zr,state:se,IT:Xt,ITEMS:sn,C:he,attempt:go,measure:th,cleanOf:_d,applyVisuals:kr,updateUI:Ji,pick:ph,cam:tn,toast:Pt,get started(){return it.started}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
