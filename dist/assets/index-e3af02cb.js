var im=Object.defineProperty;var sm=(t,e,n)=>e in t?im(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ue=(t,e,n)=>(sm(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Kl(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ft={},Ns=[],In=()=>{},rm=()=>!1,om=/^on[^a-z]/,$o=t=>om.test(t),ql=t=>t.startsWith("onUpdate:"),Pt=Object.assign,Yl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},am=Object.prototype.hasOwnProperty,st=(t,e)=>am.call(t,e),Ve=Array.isArray,Os=t=>Xo(t)==="[object Map]",Ld=t=>Xo(t)==="[object Set]",We=t=>typeof t=="function",bt=t=>typeof t=="string",Zl=t=>typeof t=="symbol",dt=t=>t!==null&&typeof t=="object",Dd=t=>dt(t)&&We(t.then)&&We(t.catch),Ud=Object.prototype.toString,Xo=t=>Ud.call(t),lm=t=>Xo(t).slice(8,-1),Nd=t=>Xo(t)==="[object Object]",Jl=t=>bt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Co=Kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cm=/-(\w)/g,Gn=jo(t=>t.replace(cm,(e,n)=>n?n.toUpperCase():"")),um=/\B([A-Z])/g,Zs=jo(t=>t.replace(um,"-$1").toLowerCase()),Ko=jo(t=>t.charAt(0).toUpperCase()+t.slice(1)),_a=jo(t=>t?`on${Ko(t)}`:""),Cr=(t,e)=>!Object.is(t,e),xa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Uo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hm=t=>{const e=parseFloat(t);return isNaN(e)?t:e},dm=t=>{const e=bt(t)?Number(t):NaN;return isNaN(e)?t:e};let qc;const pl=()=>qc||(qc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qo(t){if(Ve(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=bt(i)?gm(i):qo(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(bt(t))return t;if(dt(t))return t}}const fm=/;(?![^(]*\))/g,pm=/:([^]+)/,mm=/\/\*[^]*?\*\//g;function gm(t){const e={};return t.replace(mm,"").split(fm).forEach(n=>{if(n){const i=n.split(pm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function At(t){let e="";if(bt(t))e=t;else if(Ve(t))for(let n=0;n<t.length;n++){const i=At(t[n]);i&&(e+=i+" ")}else if(dt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_m=Kl(vm);function Od(t){return!!t||t===""}const Nt=t=>bt(t)?t:t==null?"":Ve(t)||dt(t)&&(t.toString===Ud||!We(t.toString))?JSON.stringify(t,Fd,2):String(t),Fd=(t,e)=>e&&e.__v_isRef?Fd(t,e.value):Os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Ld(e)?{[`Set(${e.size})`]:[...e.values()]}:dt(e)&&!Ve(e)&&!Nd(e)?String(e):e;let hn;class kd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=hn,!e&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=hn;try{return hn=this,e()}finally{hn=n}}}on(){hn=this}off(){hn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Bd(t){return new kd(t)}function xm(t,e=hn){e&&e.active&&e.effects.push(t)}function zd(){return hn}function bm(t){hn&&hn.cleanups.push(t)}const Ql=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Hd=t=>(t.w&Ci)>0,Vd=t=>(t.n&Ci)>0,ym=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ci},Sm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Hd(s)&&!Vd(s)?s.delete(t):e[n++]=s,s.w&=~Ci,s.n&=~Ci}e.length=n}},No=new WeakMap;let pr=0,Ci=1;const ml=30;let An;const Ji=Symbol(""),gl=Symbol("");class ec{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xm(this,i)}run(){if(!this.active)return this.fn();let e=An,n=Mi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=An,An=this,Mi=!0,Ci=1<<++pr,pr<=ml?ym(this):Yc(this),this.fn()}finally{pr<=ml&&Sm(this),Ci=1<<--pr,An=this.parent,Mi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){An===this?this.deferStop=!0:this.active&&(Yc(this),this.onStop&&this.onStop(),this.active=!1)}}function Yc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Mi=!0;const Gd=[];function Js(){Gd.push(Mi),Mi=!1}function Qs(){const t=Gd.pop();Mi=t===void 0?!0:t}function rn(t,e,n){if(Mi&&An){let i=No.get(t);i||No.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Ql()),Wd(s)}}function Wd(t,e){let n=!1;pr<=ml?Vd(t)||(t.n|=Ci,n=!Hd(t)):n=!t.has(An),n&&(t.add(An),An.deps.push(t))}function li(t,e,n,i,s,r){const o=No.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Ve(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Ve(t)?Jl(n)&&a.push(o.get("length")):(a.push(o.get(Ji)),Os(t)&&a.push(o.get(gl)));break;case"delete":Ve(t)||(a.push(o.get(Ji)),Os(t)&&a.push(o.get(gl)));break;case"set":Os(t)&&a.push(o.get(Ji));break}if(a.length===1)a[0]&&vl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);vl(Ql(l))}}function vl(t,e){const n=Ve(t)?t:[...t];for(const i of n)i.computed&&Zc(i);for(const i of n)i.computed||Zc(i)}function Zc(t,e){(t!==An||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Em(t,e){var n;return(n=No.get(t))==null?void 0:n.get(e)}const Mm=Kl("__proto__,__v_isRef,__isVue"),$d=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zl)),wm=tc(),Tm=tc(!1,!0),Am=tc(!0),Jc=Cm();function Cm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=it(this);for(let r=0,o=this.length;r<o;r++)rn(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(it)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Js();const i=it(this)[e].apply(this,n);return Qs(),i}}),t}function Pm(t){const e=it(this);return rn(e,"has",t),e.hasOwnProperty(t)}function tc(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?$m:Yd:e?qd:Kd).get(i))return i;const o=Ve(i);if(!t){if(o&&st(Jc,s))return Reflect.get(Jc,s,r);if(s==="hasOwnProperty")return Pm}const a=Reflect.get(i,s,r);return(Zl(s)?$d.has(s):Mm(s))||(t||rn(i,"get",s),e)?a:xt(a)?o&&Jl(s)?a:a.value:dt(a)?t?Zd(a):ls(a):a}}const Rm=Xd(),Im=Xd(!0);function Xd(t=!1){return function(n,i,s,r){let o=n[i];if(Vs(o)&&xt(o)&&!xt(s))return!1;if(!t&&(!Oo(s)&&!Vs(s)&&(o=it(o),s=it(s)),!Ve(n)&&xt(o)&&!xt(s)))return o.value=s,!0;const a=Ve(n)&&Jl(i)?Number(i)<n.length:st(n,i),l=Reflect.set(n,i,s,r);return n===it(r)&&(a?Cr(s,o)&&li(n,"set",i,s):li(n,"add",i,s)),l}}function Lm(t,e){const n=st(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&li(t,"delete",e,void 0),i}function Dm(t,e){const n=Reflect.has(t,e);return(!Zl(e)||!$d.has(e))&&rn(t,"has",e),n}function Um(t){return rn(t,"iterate",Ve(t)?"length":Ji),Reflect.ownKeys(t)}const jd={get:wm,set:Rm,deleteProperty:Lm,has:Dm,ownKeys:Um},Nm={get:Am,set(t,e){return!0},deleteProperty(t,e){return!0}},Om=Pt({},jd,{get:Tm,set:Im}),nc=t=>t,Yo=t=>Reflect.getPrototypeOf(t);function qr(t,e,n=!1,i=!1){t=t.__v_raw;const s=it(t),r=it(e);n||(e!==r&&rn(s,"get",e),rn(s,"get",r));const{has:o}=Yo(s),a=i?nc:n?rc:Pr;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Yr(t,e=!1){const n=this.__v_raw,i=it(n),s=it(t);return e||(t!==s&&rn(i,"has",t),rn(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Zr(t,e=!1){return t=t.__v_raw,!e&&rn(it(t),"iterate",Ji),Reflect.get(t,"size",t)}function Qc(t){t=it(t);const e=it(this);return Yo(e).has.call(e,t)||(e.add(t),li(e,"add",t,t)),this}function eu(t,e){e=it(e);const n=it(this),{has:i,get:s}=Yo(n);let r=i.call(n,t);r||(t=it(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Cr(e,o)&&li(n,"set",t,e):li(n,"add",t,e),this}function tu(t){const e=it(this),{has:n,get:i}=Yo(e);let s=n.call(e,t);s||(t=it(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&li(e,"delete",t,void 0),r}function nu(){const t=it(this),e=t.size!==0,n=t.clear();return e&&li(t,"clear",void 0,void 0),n}function Jr(t,e){return function(i,s){const r=this,o=r.__v_raw,a=it(o),l=e?nc:t?rc:Pr;return!t&&rn(a,"iterate",Ji),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Qr(t,e,n){return function(...i){const s=this.__v_raw,r=it(s),o=Os(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?nc:e?rc:Pr;return!e&&rn(r,"iterate",l?gl:Ji),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function hi(t){return function(...e){return t==="delete"?!1:this}}function Fm(){const t={get(r){return qr(this,r)},get size(){return Zr(this)},has:Yr,add:Qc,set:eu,delete:tu,clear:nu,forEach:Jr(!1,!1)},e={get(r){return qr(this,r,!1,!0)},get size(){return Zr(this)},has:Yr,add:Qc,set:eu,delete:tu,clear:nu,forEach:Jr(!1,!0)},n={get(r){return qr(this,r,!0)},get size(){return Zr(this,!0)},has(r){return Yr.call(this,r,!0)},add:hi("add"),set:hi("set"),delete:hi("delete"),clear:hi("clear"),forEach:Jr(!0,!1)},i={get(r){return qr(this,r,!0,!0)},get size(){return Zr(this,!0)},has(r){return Yr.call(this,r,!0)},add:hi("add"),set:hi("set"),delete:hi("delete"),clear:hi("clear"),forEach:Jr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Qr(r,!1,!1),n[r]=Qr(r,!0,!1),e[r]=Qr(r,!1,!0),i[r]=Qr(r,!0,!0)}),[t,n,e,i]}const[km,Bm,zm,Hm]=Fm();function ic(t,e){const n=e?t?Hm:zm:t?Bm:km;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(st(n,s)&&s in i?n:i,s,r)}const Vm={get:ic(!1,!1)},Gm={get:ic(!1,!0)},Wm={get:ic(!0,!1)},Kd=new WeakMap,qd=new WeakMap,Yd=new WeakMap,$m=new WeakMap;function Xm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jm(t){return t.__v_skip||!Object.isExtensible(t)?0:Xm(lm(t))}function ls(t){return Vs(t)?t:sc(t,!1,jd,Vm,Kd)}function Km(t){return sc(t,!1,Om,Gm,qd)}function Zd(t){return sc(t,!0,Nm,Wm,Yd)}function sc(t,e,n,i,s){if(!dt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=jm(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function wi(t){return Vs(t)?wi(t.__v_raw):!!(t&&t.__v_isReactive)}function Vs(t){return!!(t&&t.__v_isReadonly)}function Oo(t){return!!(t&&t.__v_isShallow)}function Jd(t){return wi(t)||Vs(t)}function it(t){const e=t&&t.__v_raw;return e?it(e):t}function Zo(t){return Uo(t,"__v_skip",!0),t}const Pr=t=>dt(t)?ls(t):t,rc=t=>dt(t)?Zd(t):t;function Qd(t){Mi&&An&&(t=it(t),Wd(t.dep||(t.dep=Ql())))}function ef(t,e){t=it(t);const n=t.dep;n&&vl(n)}function xt(t){return!!(t&&t.__v_isRef===!0)}function _t(t){return tf(t,!1)}function qm(t){return tf(t,!0)}function tf(t,e){return xt(t)?t:new Ym(t,e)}class Ym{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:it(e),this._value=n?e:Pr(e)}get value(){return Qd(this),this._value}set value(e){const n=this.__v_isShallow||Oo(e)||Vs(e);e=n?e:it(e),Cr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Pr(e),ef(this))}}function oi(t){return xt(t)?t.value:t}const Zm={get:(t,e,n)=>oi(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return xt(s)&&!xt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function nf(t){return wi(t)?t:new Proxy(t,Zm)}function Jm(t){const e=Ve(t)?new Array(t.length):{};for(const n in t)e[n]=sf(t,n);return e}class Qm{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Em(it(this._object),this._key)}}class eg{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function tg(t,e,n){return xt(t)?t:We(t)?new eg(t):dt(t)&&arguments.length>1?sf(t,e,n):_t(t)}function sf(t,e,n){const i=t[e];return xt(i)?i:new Qm(t,e,n)}class ng{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ec(e,()=>{this._dirty||(this._dirty=!0,ef(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=it(this);return Qd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ig(t,e,n=!1){let i,s;const r=We(t);return r?(i=t,s=In):(i=t.get,s=t.set),new ng(i,s,r||!s,n)}function Ti(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Jo(r,e,n)}return s}function _n(t,e,n,i){if(We(t)){const r=Ti(t,e,n,i);return r&&Dd(r)&&r.catch(o=>{Jo(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(_n(t[r],e,n,i));return s}function Jo(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Ti(l,null,10,[t,o,a]);return}}sg(t,n,s,i)}function sg(t,e,n,i=!0){console.error(t)}let Rr=!1,_l=!1;const Gt=[];let zn=0;const Fs=[];let si=null,$i=0;const rf=Promise.resolve();let oc=null;function ac(t){const e=oc||rf;return t?e.then(this?t.bind(this):t):e}function rg(t){let e=zn+1,n=Gt.length;for(;e<n;){const i=e+n>>>1;Ir(Gt[i])<t?e=i+1:n=i}return e}function lc(t){(!Gt.length||!Gt.includes(t,Rr&&t.allowRecurse?zn+1:zn))&&(t.id==null?Gt.push(t):Gt.splice(rg(t.id),0,t),of())}function of(){!Rr&&!_l&&(_l=!0,oc=rf.then(lf))}function og(t){const e=Gt.indexOf(t);e>zn&&Gt.splice(e,1)}function ag(t){Ve(t)?Fs.push(...t):(!si||!si.includes(t,t.allowRecurse?$i+1:$i))&&Fs.push(t),of()}function iu(t,e=Rr?zn+1:0){for(;e<Gt.length;e++){const n=Gt[e];n&&n.pre&&(Gt.splice(e,1),e--,n())}}function af(t){if(Fs.length){const e=[...new Set(Fs)];if(Fs.length=0,si){si.push(...e);return}for(si=e,si.sort((n,i)=>Ir(n)-Ir(i)),$i=0;$i<si.length;$i++)si[$i]();si=null,$i=0}}const Ir=t=>t.id==null?1/0:t.id,lg=(t,e)=>{const n=Ir(t)-Ir(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function lf(t){_l=!1,Rr=!0,Gt.sort(lg);const e=In;try{for(zn=0;zn<Gt.length;zn++){const n=Gt[zn];n&&n.active!==!1&&Ti(n,null,14)}}finally{zn=0,Gt.length=0,af(),Rr=!1,oc=null,(Gt.length||Fs.length)&&lf()}}function cg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ft;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||ft;d&&(s=n.map(p=>bt(p)?p.trim():p)),h&&(s=n.map(hm))}let a,l=i[a=_a(e)]||i[a=_a(Gn(e))];!l&&r&&(l=i[a=_a(Zs(e))]),l&&_n(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_n(c,t,6,s)}}function cf(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!We(t)){const l=c=>{const u=cf(c,e,!0);u&&(a=!0,Pt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(dt(t)&&i.set(t,null),null):(Ve(r)?r.forEach(l=>o[l]=null):Pt(o,r),dt(t)&&i.set(t,o),o)}function Qo(t,e){return!t||!$o(e)?!1:(e=e.slice(2).replace(/Once$/,""),st(t,e[0].toLowerCase()+e.slice(1))||st(t,Zs(e))||st(t,e))}let Ot=null,ea=null;function Fo(t){const e=Ot;return Ot=t,ea=t&&t.type.__scopeId||null,e}function Vr(t){ea=t}function Gr(){ea=null}function ht(t,e=Ot,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&gu(-1);const r=Fo(e);let o;try{o=t(...s)}finally{Fo(r),i._d&&gu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ba(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:v}=t;let m,f;const M=Fo(t);try{if(n.shapeFlag&4){const y=s||i;m=kn(u.call(y,y,h,r,p,d,g)),f=l}else{const y=e;m=kn(y.length>1?y(r,{attrs:l,slots:a,emit:c}):y(r,null)),f=e.props?l:ug(l)}}catch(y){yr.length=0,Jo(y,t,1),m=Xe(xn)}let x=m;if(f&&v!==!1){const y=Object.keys(f),{shapeFlag:w}=x;y.length&&w&7&&(o&&y.some(ql)&&(f=hg(f,o)),x=Pi(x,f))}return n.dirs&&(x=Pi(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),m=x,Fo(M),m}const ug=t=>{let e;for(const n in t)(n==="class"||n==="style"||$o(n))&&((e||(e={}))[n]=t[n]);return e},hg=(t,e)=>{const n={};for(const i in t)(!ql(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function dg(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?su(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!Qo(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?su(i,o,c):!0:!!o;return!1}function su(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Qo(n,r))return!0}return!1}function fg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const pg=t=>t.__isSuspense;function mg(t,e){e&&e.pendingBranch?Ve(t)?e.effects.push(...t):e.effects.push(t):ag(t)}function gg(t,e){return cc(t,null,{flush:"post"})}const eo={};function vr(t,e,n){return cc(t,e,n)}function cc(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=ft){var a;const l=zd()===((a=Rt)==null?void 0:a.scope)?Rt:null;let c,u=!1,h=!1;if(xt(t)?(c=()=>t.value,u=Oo(t)):wi(t)?(c=()=>t,i=!0):Ve(t)?(h=!0,u=t.some(y=>wi(y)||Oo(y)),c=()=>t.map(y=>{if(xt(y))return y.value;if(wi(y))return qi(y);if(We(y))return Ti(y,l,2)})):We(t)?e?c=()=>Ti(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),_n(t,l,3,[p])}:c=In,e&&i){const y=c;c=()=>qi(y())}let d,p=y=>{d=M.onStop=()=>{Ti(y,l,4)}},g;if(Ur)if(p=In,e?n&&_n(e,l,3,[c(),h?[]:void 0,p]):c(),s==="sync"){const y=dv();g=y.__watcherHandles||(y.__watcherHandles=[])}else return In;let v=h?new Array(t.length).fill(eo):eo;const m=()=>{if(M.active)if(e){const y=M.run();(i||u||(h?y.some((w,I)=>Cr(w,v[I])):Cr(y,v)))&&(d&&d(),_n(e,l,3,[y,v===eo?void 0:h&&v[0]===eo?[]:v,p]),v=y)}else M.run()};m.allowRecurse=!!e;let f;s==="sync"?f=m:s==="post"?f=()=>en(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),f=()=>lc(m));const M=new ec(c,f);e?n?m():v=M.run():s==="post"?en(M.run.bind(M),l&&l.suspense):M.run();const x=()=>{M.stop(),l&&l.scope&&Yl(l.scope.effects,M)};return g&&g.push(x),x}function vg(t,e,n){const i=this.proxy,s=bt(t)?t.includes(".")?uf(i,t):()=>i[t]:t.bind(i,i);let r;We(e)?r=e:(r=e.handler,n=e);const o=Rt;Gs(this);const a=cc(s,r.bind(i),n);return o?Gs(o):Qi(),a}function uf(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function qi(t,e){if(!dt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),xt(t))qi(t.value,e);else if(Ve(t))for(let n=0;n<t.length;n++)qi(t[n],e);else if(Ld(t)||Os(t))t.forEach(n=>{qi(n,e)});else if(Nd(t))for(const n in t)qi(t[n],e);return t}function Ft(t,e){const n=Ot;if(n===null)return t;const i=ra(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ft]=e[r];o&&(We(o)&&(o={mounted:o,updated:o}),o.deep&&qi(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Oi(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Js(),_n(l,n,8,[t.el,a,t,e]),Qs())}}function _g(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return cs(()=>{t.isMounted=!0}),mf(()=>{t.isUnmounting=!0}),t}const mn=[Function,Array],hf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mn,onEnter:mn,onAfterEnter:mn,onEnterCancelled:mn,onBeforeLeave:mn,onLeave:mn,onAfterLeave:mn,onLeaveCancelled:mn,onBeforeAppear:mn,onAppear:mn,onAfterAppear:mn,onAppearCancelled:mn},xg={name:"BaseTransition",props:hf,setup(t,{slots:e}){const n=Cf(),i=_g();let s;return()=>{const r=e.default&&ff(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const v of r)if(v.type!==xn){o=v;break}}const a=it(t),{mode:l}=a;if(i.isLeaving)return ya(o);const c=ru(o);if(!c)return ya(o);const u=xl(c,a,i,n);bl(c,u);const h=n.subTree,d=h&&ru(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const v=g();s===void 0?s=v:v!==s&&(s=v,p=!0)}if(d&&d.type!==xn&&(!Xi(c,d)||p)){const v=xl(d,a,i,n);if(bl(d,v),l==="out-in")return i.isLeaving=!0,v.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},ya(o);l==="in-out"&&c.type!==xn&&(v.delayLeave=(m,f,M)=>{const x=df(i,d);x[String(d.key)]=d,m._leaveCb=()=>{f(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return o}}},bg=xg;function df(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function xl(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:v,onAppear:m,onAfterAppear:f,onAppearCancelled:M}=e,x=String(t.key),y=df(n,t),w=(U,_)=>{U&&_n(U,i,9,_)},I=(U,_)=>{const C=_[1];w(U,_),Ve(U)?U.every(X=>X.length<=1)&&C():U.length<=1&&C()},D={mode:r,persisted:o,beforeEnter(U){let _=a;if(!n.isMounted)if(s)_=v||a;else return;U._leaveCb&&U._leaveCb(!0);const C=y[x];C&&Xi(t,C)&&C.el._leaveCb&&C.el._leaveCb(),w(_,[U])},enter(U){let _=l,C=c,X=u;if(!n.isMounted)if(s)_=m||l,C=f||c,X=M||u;else return;let z=!1;const N=U._enterCb=V=>{z||(z=!0,V?w(X,[U]):w(C,[U]),D.delayedLeave&&D.delayedLeave(),U._enterCb=void 0)};_?I(_,[U,N]):N()},leave(U,_){const C=String(t.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return _();w(h,[U]);let X=!1;const z=U._leaveCb=N=>{X||(X=!0,_(),N?w(g,[U]):w(p,[U]),U._leaveCb=void 0,y[C]===t&&delete y[C])};y[C]=t,d?I(d,[U,z]):z()},clone(U){return xl(U,e,n,i)}};return D}function ya(t){if(ta(t))return t=Pi(t),t.children=null,t}function ru(t){return ta(t)?t.children?t.children[0]:void 0:t}function bl(t,e){t.shapeFlag&6&&t.component?bl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ff(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===tt?(o.patchFlag&128&&s++,i=i.concat(ff(o.children,e,a))):(e||o.type!==xn)&&i.push(a!=null?Pi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Xn(t,e){return We(t)?(()=>Pt({name:t.name},e,{setup:t}))():t}const _r=t=>!!t.type.__asyncLoader,ta=t=>t.type.__isKeepAlive;function yg(t,e){pf(t,"a",e)}function Sg(t,e){pf(t,"da",e)}function pf(t,e,n=Rt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(na(e,i,n),n){let s=n.parent;for(;s&&s.parent;)ta(s.parent.vnode)&&Eg(i,e,n,s),s=s.parent}}function Eg(t,e,n,i){const s=na(e,t,i,!0);uc(()=>{Yl(i[e],s)},n)}function na(t,e,n=Rt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Js(),Gs(n);const a=_n(e,n,t,o);return Qi(),Qs(),a});return i?s.unshift(r):s.push(r),r}}const ci=t=>(e,n=Rt)=>(!Ur||t==="sp")&&na(t,(...i)=>e(...i),n),Mg=ci("bm"),cs=ci("m"),wg=ci("bu"),Tg=ci("u"),mf=ci("bum"),uc=ci("um"),Ag=ci("sp"),Cg=ci("rtg"),Pg=ci("rtc");function Rg(t,e=Rt){na("ec",t,e)}const hc="components",Ig="directives";function gt(t,e){return dc(hc,t,!0,e)||t}const gf=Symbol.for("v-ndc");function Qe(t){return bt(t)?dc(hc,t,!1)||t:t||gf}function Wn(t){return dc(Ig,t)}function dc(t,e,n=!0,i=!1){const s=Ot||Rt;if(s){const r=s.type;if(t===hc){const a=cv(r,!1);if(a&&(a===e||a===Gn(e)||a===Ko(Gn(e))))return r}const o=ou(s[t]||r[t],e)||ou(s.appContext[t],e);return!o&&i?r:o}}function ou(t,e){return t&&(t[e]||t[Gn(e)]||t[Ko(Gn(e))])}function Wt(t,e,n,i){let s;const r=n&&n[i];if(Ve(t)||bt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(dt(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function Ct(t,e,n={},i,s){if(Ot.isCE||Ot.parent&&_r(Ot.parent)&&Ot.parent.isCE)return e!=="default"&&(n.name=e),Xe("slot",n,i&&i());let r=t[e];r&&r._c&&(r._d=!1),G();const o=r&&vf(r(n)),a=ke(tt,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function vf(t){return t.some(e=>Bo(e)?!(e.type===xn||e.type===tt&&!vf(e.children)):!0)?t:null}const yl=t=>t?Pf(t)?ra(t)||t.proxy:yl(t.parent):null,xr=Pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yl(t.parent),$root:t=>yl(t.root),$emit:t=>t.emit,$options:t=>fc(t),$forceUpdate:t=>t.f||(t.f=()=>lc(t.update)),$nextTick:t=>t.n||(t.n=ac.bind(t.proxy)),$watch:t=>vg.bind(t)}),Sa=(t,e)=>t!==ft&&!t.__isScriptSetup&&st(t,e),Lg={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Sa(i,e))return o[e]=1,i[e];if(s!==ft&&st(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&st(c,e))return o[e]=3,r[e];if(n!==ft&&st(n,e))return o[e]=4,n[e];Sl&&(o[e]=0)}}const u=xr[e];let h,d;if(u)return e==="$attrs"&&rn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ft&&st(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,st(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Sa(s,e)?(s[e]=n,!0):i!==ft&&st(i,e)?(i[e]=n,!0):st(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==ft&&st(t,o)||Sa(e,o)||(a=r[0])&&st(a,o)||st(i,o)||st(xr,o)||st(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:st(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function au(t){return Ve(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Sl=!0;function Dg(t){const e=fc(t),n=t.proxy,i=t.ctx;Sl=!1,e.beforeCreate&&lu(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:f,beforeUnmount:M,destroyed:x,unmounted:y,render:w,renderTracked:I,renderTriggered:D,errorCaptured:U,serverPrefetch:_,expose:C,inheritAttrs:X,components:z,directives:N,filters:V}=e;if(c&&Ug(c,i,null),o)for(const te in o){const J=o[te];We(J)&&(i[te]=J.bind(n))}if(s){const te=s.call(n,n);dt(te)&&(t.data=ls(te))}if(Sl=!0,r)for(const te in r){const J=r[te],xe=We(J)?J.bind(n,n):We(J.get)?J.get.bind(n,n):In,ge=!We(J)&&We(J.set)?J.set.bind(n):In,Re=tn({get:xe,set:ge});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Re.value,set:be=>Re.value=be})}if(a)for(const te in a)_f(a[te],i,n,te);if(l){const te=We(l)?l.call(n):l;Reflect.ownKeys(te).forEach(J=>{Po(J,te[J])})}u&&lu(u,t,"c");function Z(te,J){Ve(J)?J.forEach(xe=>te(xe.bind(n))):J&&te(J.bind(n))}if(Z(Mg,h),Z(cs,d),Z(wg,p),Z(Tg,g),Z(yg,v),Z(Sg,m),Z(Rg,U),Z(Pg,I),Z(Cg,D),Z(mf,M),Z(uc,y),Z(Ag,_),Ve(C))if(C.length){const te=t.exposed||(t.exposed={});C.forEach(J=>{Object.defineProperty(te,J,{get:()=>n[J],set:xe=>n[J]=xe})})}else t.exposed||(t.exposed={});w&&t.render===In&&(t.render=w),X!=null&&(t.inheritAttrs=X),z&&(t.components=z),N&&(t.directives=N)}function Ug(t,e,n=In){Ve(t)&&(t=El(t));for(const i in t){const s=t[i];let r;dt(s)?"default"in s?r=Ln(s.from||i,s.default,!0):r=Ln(s.from||i):r=Ln(s),xt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function lu(t,e,n){_n(Ve(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function _f(t,e,n,i){const s=i.includes(".")?uf(n,i):()=>n[i];if(bt(t)){const r=e[t];We(r)&&vr(s,r)}else if(We(t))vr(s,t.bind(n));else if(dt(t))if(Ve(t))t.forEach(r=>_f(r,e,n,i));else{const r=We(t.handler)?t.handler.bind(n):e[t.handler];We(r)&&vr(s,r,t)}}function fc(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ko(l,c,o,!0)),ko(l,e,o)),dt(e)&&r.set(e,l),l}function ko(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ko(t,r,n,!0),s&&s.forEach(o=>ko(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ng[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ng={data:cu,props:uu,emits:uu,methods:mr,computed:mr,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:mr,directives:mr,watch:Fg,provide:cu,inject:Og};function cu(t,e){return e?t?function(){return Pt(We(t)?t.call(this,this):t,We(e)?e.call(this,this):e)}:e:t}function Og(t,e){return mr(El(t),El(e))}function El(t){if(Ve(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Kt(t,e){return t?[...new Set([].concat(t,e))]:e}function mr(t,e){return t?Pt(Object.create(null),t,e):e}function uu(t,e){return t?Ve(t)&&Ve(e)?[...new Set([...t,...e])]:Pt(Object.create(null),au(t),au(e??{})):e}function Fg(t,e){if(!t)return e;if(!e)return t;const n=Pt(Object.create(null),t);for(const i in e)n[i]=Kt(t[i],e[i]);return n}function xf(){return{app:null,config:{isNativeTag:rm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kg=0;function Bg(t,e){return function(i,s=null){We(i)||(i=Pt({},i)),s!=null&&!dt(s)&&(s=null);const r=xf(),o=new Set;let a=!1;const l=r.app={_uid:kg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:fv,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&We(c.install)?(o.add(c),c.install(l,...u)):We(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Xe(i,s);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,ra(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Lr=l;try{return c()}finally{Lr=null}}};return l}}let Lr=null;function Po(t,e){if(Rt){let n=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===n&&(n=Rt.provides=Object.create(i)),n[t]=e}}function Ln(t,e,n=!1){const i=Rt||Ot;if(i||Lr){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Lr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&We(e)?e.call(i&&i.proxy):e}}function zg(){return!!(Rt||Ot||Lr)}function Hg(t,e,n,i=!1){const s={},r={};Uo(r,sa,1),t.propsDefaults=Object.create(null),bf(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Km(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Vg(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=it(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Qo(t.emitsOptions,d))continue;const p=e[d];if(l)if(st(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=Gn(d);s[g]=Ml(l,a,g,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{bf(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!st(e,h)&&((u=Zs(h))===h||!st(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ml(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!st(e,h))&&(delete r[h],c=!0)}c&&li(t,"set","$attrs")}function bf(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Co(l))continue;const c=e[l];let u;s&&st(s,u=Gn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Qo(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=it(n),c=a||ft;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Ml(s,l,h,c[h],t,!st(c,h))}}return o}function Ml(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=st(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(Gs(s),i=c[n]=l.call(null,e),Qi())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Zs(n))&&(i=!0))}return i}function yf(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!We(t)){const u=h=>{l=!0;const[d,p]=yf(h,e,!0);Pt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return dt(t)&&i.set(t,Ns),Ns;if(Ve(r))for(let u=0;u<r.length;u++){const h=Gn(r[u]);hu(h)&&(o[h]=ft)}else if(r)for(const u in r){const h=Gn(u);if(hu(h)){const d=r[u],p=o[h]=Ve(d)||We(d)?{type:d}:Pt({},d);if(p){const g=pu(Boolean,p.type),v=pu(String,p.type);p[0]=g>-1,p[1]=v<0||g<v,(g>-1||st(p,"default"))&&a.push(h)}}}const c=[o,a];return dt(t)&&i.set(t,c),c}function hu(t){return t[0]!=="$"}function du(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function fu(t,e){return du(t)===du(e)}function pu(t,e){return Ve(e)?e.findIndex(n=>fu(n,t)):We(e)&&fu(e,t)?0:-1}const Sf=t=>t[0]==="_"||t==="$stable",pc=t=>Ve(t)?t.map(kn):[kn(t)],Gg=(t,e,n)=>{if(e._n)return e;const i=ht((...s)=>pc(e(...s)),n);return i._c=!1,i},Ef=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Sf(s))continue;const r=t[s];if(We(r))e[s]=Gg(s,r,i);else if(r!=null){const o=pc(r);e[s]=()=>o}}},Mf=(t,e)=>{const n=pc(e);t.slots.default=()=>n},Wg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=it(e),Uo(e,"_",n)):Ef(e,t.slots={})}else t.slots={},e&&Mf(t,e);Uo(t.slots,sa,1)},$g=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Pt(s,e),!n&&a===1&&delete s._):(r=!e.$stable,Ef(e,s)),o=e}else e&&(Mf(t,e),o={default:1});if(r)for(const a in s)!Sf(a)&&!(a in o)&&delete s[a]};function wl(t,e,n,i,s=!1){if(Ve(t)){t.forEach((d,p)=>wl(d,e&&(Ve(e)?e[p]:e),n,i,s));return}if(_r(i)&&!s)return;const r=i.shapeFlag&4?ra(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(bt(c)?(u[c]=null,st(h,c)&&(h[c]=null)):xt(c)&&(c.value=null)),We(l))Ti(l,a,12,[o,u]);else{const d=bt(l),p=xt(l);if(d||p){const g=()=>{if(t.f){const v=d?st(h,l)?h[l]:u[l]:l.value;s?Ve(v)&&Yl(v,r):Ve(v)?v.includes(r)||v.push(r):d?(u[l]=[r],st(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,st(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,en(g,n)):g()}}}const en=mg;function Xg(t){return jg(t)}function jg(t,e){const n=pl();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=In,insertStaticContent:g}=t,v=(S,E,R,B=null,k=null,K=null,le=!1,ne=null,de=!!E.dynamicChildren)=>{if(S===E)return;S&&!Xi(S,E)&&(B=A(S),be(S,k,K,!0),S=null),E.patchFlag===-2&&(de=!1,E.dynamicChildren=null);const{type:oe,ref:T,shapeFlag:b}=E;switch(oe){case ia:m(S,E,R,B);break;case xn:f(S,E,R,B);break;case Ro:S==null&&M(E,R,B,le);break;case tt:z(S,E,R,B,k,K,le,ne,de);break;default:b&1?w(S,E,R,B,k,K,le,ne,de):b&6?N(S,E,R,B,k,K,le,ne,de):(b&64||b&128)&&oe.process(S,E,R,B,k,K,le,ne,de,ae)}T!=null&&k&&wl(T,S&&S.ref,K,E||S,!E)},m=(S,E,R,B)=>{if(S==null)i(E.el=a(E.children),R,B);else{const k=E.el=S.el;E.children!==S.children&&c(k,E.children)}},f=(S,E,R,B)=>{S==null?i(E.el=l(E.children||""),R,B):E.el=S.el},M=(S,E,R,B)=>{[S.el,S.anchor]=g(S.children,E,R,B,S.el,S.anchor)},x=({el:S,anchor:E},R,B)=>{let k;for(;S&&S!==E;)k=d(S),i(S,R,B),S=k;i(E,R,B)},y=({el:S,anchor:E})=>{let R;for(;S&&S!==E;)R=d(S),s(S),S=R;s(E)},w=(S,E,R,B,k,K,le,ne,de)=>{le=le||E.type==="svg",S==null?I(E,R,B,k,K,le,ne,de):_(S,E,k,K,le,ne,de)},I=(S,E,R,B,k,K,le,ne)=>{let de,oe;const{type:T,props:b,shapeFlag:F,transition:ee,dirs:re}=S;if(de=S.el=o(S.type,K,b&&b.is,b),F&8?u(de,S.children):F&16&&U(S.children,de,null,B,k,K&&T!=="foreignObject",le,ne),re&&Oi(S,null,B,"created"),D(de,S,S.scopeId,le,B),b){for(const L in b)L!=="value"&&!Co(L)&&r(de,L,null,b[L],K,S.children,B,k,Ee);"value"in b&&r(de,"value",null,b.value),(oe=b.onVnodeBeforeMount)&&On(oe,B,S)}re&&Oi(S,null,B,"beforeMount");const _e=(!k||k&&!k.pendingBranch)&&ee&&!ee.persisted;_e&&ee.beforeEnter(de),i(de,E,R),((oe=b&&b.onVnodeMounted)||_e||re)&&en(()=>{oe&&On(oe,B,S),_e&&ee.enter(de),re&&Oi(S,null,B,"mounted")},k)},D=(S,E,R,B,k)=>{if(R&&p(S,R),B)for(let K=0;K<B.length;K++)p(S,B[K]);if(k){let K=k.subTree;if(E===K){const le=k.vnode;D(S,le,le.scopeId,le.slotScopeIds,k.parent)}}},U=(S,E,R,B,k,K,le,ne,de=0)=>{for(let oe=de;oe<S.length;oe++){const T=S[oe]=ne?bi(S[oe]):kn(S[oe]);v(null,T,E,R,B,k,K,le,ne)}},_=(S,E,R,B,k,K,le)=>{const ne=E.el=S.el;let{patchFlag:de,dynamicChildren:oe,dirs:T}=E;de|=S.patchFlag&16;const b=S.props||ft,F=E.props||ft;let ee;R&&Fi(R,!1),(ee=F.onVnodeBeforeUpdate)&&On(ee,R,E,S),T&&Oi(E,S,R,"beforeUpdate"),R&&Fi(R,!0);const re=k&&E.type!=="foreignObject";if(oe?C(S.dynamicChildren,oe,ne,R,B,re,K):le||J(S,E,ne,null,R,B,re,K,!1),de>0){if(de&16)X(ne,E,b,F,R,B,k);else if(de&2&&b.class!==F.class&&r(ne,"class",null,F.class,k),de&4&&r(ne,"style",b.style,F.style,k),de&8){const _e=E.dynamicProps;for(let L=0;L<_e.length;L++){const se=_e[L],j=b[se],Ae=F[se];(Ae!==j||se==="value")&&r(ne,se,j,Ae,k,S.children,R,B,Ee)}}de&1&&S.children!==E.children&&u(ne,E.children)}else!le&&oe==null&&X(ne,E,b,F,R,B,k);((ee=F.onVnodeUpdated)||T)&&en(()=>{ee&&On(ee,R,E,S),T&&Oi(E,S,R,"updated")},B)},C=(S,E,R,B,k,K,le)=>{for(let ne=0;ne<E.length;ne++){const de=S[ne],oe=E[ne],T=de.el&&(de.type===tt||!Xi(de,oe)||de.shapeFlag&70)?h(de.el):R;v(de,oe,T,null,B,k,K,le,!0)}},X=(S,E,R,B,k,K,le)=>{if(R!==B){if(R!==ft)for(const ne in R)!Co(ne)&&!(ne in B)&&r(S,ne,R[ne],null,le,E.children,k,K,Ee);for(const ne in B){if(Co(ne))continue;const de=B[ne],oe=R[ne];de!==oe&&ne!=="value"&&r(S,ne,oe,de,le,E.children,k,K,Ee)}"value"in B&&r(S,"value",R.value,B.value)}},z=(S,E,R,B,k,K,le,ne,de)=>{const oe=E.el=S?S.el:a(""),T=E.anchor=S?S.anchor:a("");let{patchFlag:b,dynamicChildren:F,slotScopeIds:ee}=E;ee&&(ne=ne?ne.concat(ee):ee),S==null?(i(oe,R,B),i(T,R,B),U(E.children,R,T,k,K,le,ne,de)):b>0&&b&64&&F&&S.dynamicChildren?(C(S.dynamicChildren,F,R,k,K,le,ne),(E.key!=null||k&&E===k.subTree)&&mc(S,E,!0)):J(S,E,R,T,k,K,le,ne,de)},N=(S,E,R,B,k,K,le,ne,de)=>{E.slotScopeIds=ne,S==null?E.shapeFlag&512?k.ctx.activate(E,R,B,le,de):V(E,R,B,k,K,le,de):Y(S,E,de)},V=(S,E,R,B,k,K,le)=>{const ne=S.component=sv(S,B,k);if(ta(S)&&(ne.ctx.renderer=ae),rv(ne),ne.asyncDep){if(k&&k.registerDep(ne,Z),!S.el){const de=ne.subTree=Xe(xn);f(null,de,E,R)}return}Z(ne,S,E,R,k,K,le)},Y=(S,E,R)=>{const B=E.component=S.component;if(dg(S,E,R))if(B.asyncDep&&!B.asyncResolved){te(B,E,R);return}else B.next=E,og(B.update),B.update();else E.el=S.el,B.vnode=E},Z=(S,E,R,B,k,K,le)=>{const ne=()=>{if(S.isMounted){let{next:T,bu:b,u:F,parent:ee,vnode:re}=S,_e=T,L;Fi(S,!1),T?(T.el=re.el,te(S,T,le)):T=re,b&&xa(b),(L=T.props&&T.props.onVnodeBeforeUpdate)&&On(L,ee,T,re),Fi(S,!0);const se=ba(S),j=S.subTree;S.subTree=se,v(j,se,h(j.el),A(j),S,k,K),T.el=se.el,_e===null&&fg(S,se.el),F&&en(F,k),(L=T.props&&T.props.onVnodeUpdated)&&en(()=>On(L,ee,T,re),k)}else{let T;const{el:b,props:F}=E,{bm:ee,m:re,parent:_e}=S,L=_r(E);if(Fi(S,!1),ee&&xa(ee),!L&&(T=F&&F.onVnodeBeforeMount)&&On(T,_e,E),Fi(S,!0),b&&Me){const se=()=>{S.subTree=ba(S),Me(b,S.subTree,S,k,null)};L?E.type.__asyncLoader().then(()=>!S.isUnmounted&&se()):se()}else{const se=S.subTree=ba(S);v(null,se,R,B,S,k,K),E.el=se.el}if(re&&en(re,k),!L&&(T=F&&F.onVnodeMounted)){const se=E;en(()=>On(T,_e,se),k)}(E.shapeFlag&256||_e&&_r(_e.vnode)&&_e.vnode.shapeFlag&256)&&S.a&&en(S.a,k),S.isMounted=!0,E=R=B=null}},de=S.effect=new ec(ne,()=>lc(oe),S.scope),oe=S.update=()=>de.run();oe.id=S.uid,Fi(S,!0),oe()},te=(S,E,R)=>{E.component=S;const B=S.vnode.props;S.vnode=E,S.next=null,Vg(S,E.props,B,R),$g(S,E.children,R),Js(),iu(),Qs()},J=(S,E,R,B,k,K,le,ne,de=!1)=>{const oe=S&&S.children,T=S?S.shapeFlag:0,b=E.children,{patchFlag:F,shapeFlag:ee}=E;if(F>0){if(F&128){ge(oe,b,R,B,k,K,le,ne,de);return}else if(F&256){xe(oe,b,R,B,k,K,le,ne,de);return}}ee&8?(T&16&&Ee(oe,k,K),b!==oe&&u(R,b)):T&16?ee&16?ge(oe,b,R,B,k,K,le,ne,de):Ee(oe,k,K,!0):(T&8&&u(R,""),ee&16&&U(b,R,B,k,K,le,ne,de))},xe=(S,E,R,B,k,K,le,ne,de)=>{S=S||Ns,E=E||Ns;const oe=S.length,T=E.length,b=Math.min(oe,T);let F;for(F=0;F<b;F++){const ee=E[F]=de?bi(E[F]):kn(E[F]);v(S[F],ee,R,null,k,K,le,ne,de)}oe>T?Ee(S,k,K,!0,!1,b):U(E,R,B,k,K,le,ne,de,b)},ge=(S,E,R,B,k,K,le,ne,de)=>{let oe=0;const T=E.length;let b=S.length-1,F=T-1;for(;oe<=b&&oe<=F;){const ee=S[oe],re=E[oe]=de?bi(E[oe]):kn(E[oe]);if(Xi(ee,re))v(ee,re,R,null,k,K,le,ne,de);else break;oe++}for(;oe<=b&&oe<=F;){const ee=S[b],re=E[F]=de?bi(E[F]):kn(E[F]);if(Xi(ee,re))v(ee,re,R,null,k,K,le,ne,de);else break;b--,F--}if(oe>b){if(oe<=F){const ee=F+1,re=ee<T?E[ee].el:B;for(;oe<=F;)v(null,E[oe]=de?bi(E[oe]):kn(E[oe]),R,re,k,K,le,ne,de),oe++}}else if(oe>F)for(;oe<=b;)be(S[oe],k,K,!0),oe++;else{const ee=oe,re=oe,_e=new Map;for(oe=re;oe<=F;oe++){const Pe=E[oe]=de?bi(E[oe]):kn(E[oe]);Pe.key!=null&&_e.set(Pe.key,oe)}let L,se=0;const j=F-re+1;let Ae=!1,Le=0;const Ne=new Array(j);for(oe=0;oe<j;oe++)Ne[oe]=0;for(oe=ee;oe<=b;oe++){const Pe=S[oe];if(se>=j){be(Pe,k,K,!0);continue}let Be;if(Pe.key!=null)Be=_e.get(Pe.key);else for(L=re;L<=F;L++)if(Ne[L-re]===0&&Xi(Pe,E[L])){Be=L;break}Be===void 0?be(Pe,k,K,!0):(Ne[Be-re]=oe+1,Be>=Le?Le=Be:Ae=!0,v(Pe,E[Be],R,null,k,K,le,ne,de),se++)}const Ie=Ae?Kg(Ne):Ns;for(L=Ie.length-1,oe=j-1;oe>=0;oe--){const Pe=re+oe,Be=E[Pe],$e=Pe+1<T?E[Pe+1].el:B;Ne[oe]===0?v(null,Be,R,$e,k,K,le,ne,de):Ae&&(L<0||oe!==Ie[L]?Re(Be,R,$e,2):L--)}}},Re=(S,E,R,B,k=null)=>{const{el:K,type:le,transition:ne,children:de,shapeFlag:oe}=S;if(oe&6){Re(S.component.subTree,E,R,B);return}if(oe&128){S.suspense.move(E,R,B);return}if(oe&64){le.move(S,E,R,ae);return}if(le===tt){i(K,E,R);for(let b=0;b<de.length;b++)Re(de[b],E,R,B);i(S.anchor,E,R);return}if(le===Ro){x(S,E,R);return}if(B!==2&&oe&1&&ne)if(B===0)ne.beforeEnter(K),i(K,E,R),en(()=>ne.enter(K),k);else{const{leave:b,delayLeave:F,afterLeave:ee}=ne,re=()=>i(K,E,R),_e=()=>{b(K,()=>{re(),ee&&ee()})};F?F(K,re,_e):_e()}else i(K,E,R)},be=(S,E,R,B=!1,k=!1)=>{const{type:K,props:le,ref:ne,children:de,dynamicChildren:oe,shapeFlag:T,patchFlag:b,dirs:F}=S;if(ne!=null&&wl(ne,null,R,S,!0),T&256){E.ctx.deactivate(S);return}const ee=T&1&&F,re=!_r(S);let _e;if(re&&(_e=le&&le.onVnodeBeforeUnmount)&&On(_e,E,S),T&6)Te(S.component,R,B);else{if(T&128){S.suspense.unmount(R,B);return}ee&&Oi(S,null,E,"beforeUnmount"),T&64?S.type.remove(S,E,R,k,ae,B):oe&&(K!==tt||b>0&&b&64)?Ee(oe,E,R,!1,!0):(K===tt&&b&384||!k&&T&16)&&Ee(de,E,R),B&&ie(S)}(re&&(_e=le&&le.onVnodeUnmounted)||ee)&&en(()=>{_e&&On(_e,E,S),ee&&Oi(S,null,E,"unmounted")},R)},ie=S=>{const{type:E,el:R,anchor:B,transition:k}=S;if(E===tt){me(R,B);return}if(E===Ro){y(S);return}const K=()=>{s(R),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(S.shapeFlag&1&&k&&!k.persisted){const{leave:le,delayLeave:ne}=k,de=()=>le(R,K);ne?ne(S.el,K,de):de()}else K()},me=(S,E)=>{let R;for(;S!==E;)R=d(S),s(S),S=R;s(E)},Te=(S,E,R)=>{const{bum:B,scope:k,update:K,subTree:le,um:ne}=S;B&&xa(B),k.stop(),K&&(K.active=!1,be(le,S,E,R)),ne&&en(ne,E),en(()=>{S.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Ee=(S,E,R,B=!1,k=!1,K=0)=>{for(let le=K;le<S.length;le++)be(S[le],E,R,B,k)},A=S=>S.shapeFlag&6?A(S.component.subTree):S.shapeFlag&128?S.suspense.next():d(S.anchor||S.el),fe=(S,E,R)=>{S==null?E._vnode&&be(E._vnode,null,null,!0):v(E._vnode||null,S,E,null,null,null,R),iu(),af(),E._vnode=S},ae={p:v,um:be,m:Re,r:ie,mt:V,mc:U,pc:J,pbc:C,n:A,o:t};let Q,Me;return e&&([Q,Me]=e(ae)),{render:fe,hydrate:Q,createApp:Bg(fe,Q)}}function Fi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function mc(t,e,n=!1){const i=t.children,s=e.children;if(Ve(i)&&Ve(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=bi(s[r]),a.el=o.el),n||mc(o,a)),a.type===ia&&(a.el=o.el)}}function Kg(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const qg=t=>t.__isTeleport,br=t=>t&&(t.disabled||t.disabled===""),mu=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Tl=(t,e)=>{const n=t&&t.to;return bt(n)?e?e(n):null:n},Yg={__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:p,querySelector:g,createText:v,createComment:m}}=c,f=br(e.props);let{shapeFlag:M,children:x,dynamicChildren:y}=e;if(t==null){const w=e.el=v(""),I=e.anchor=v("");p(w,n,i),p(I,n,i);const D=e.target=Tl(e.props,g),U=e.targetAnchor=v("");D&&(p(U,D),o=o||mu(D));const _=(C,X)=>{M&16&&u(x,C,X,s,r,o,a,l)};f?_(n,I):D&&_(D,U)}else{e.el=t.el;const w=e.anchor=t.anchor,I=e.target=t.target,D=e.targetAnchor=t.targetAnchor,U=br(t.props),_=U?n:I,C=U?w:D;if(o=o||mu(I),y?(d(t.dynamicChildren,y,_,s,r,o,a),mc(t,e,!0)):l||h(t,e,_,C,s,r,o,a,!1),f)U||to(e,n,w,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const X=e.target=Tl(e.props,g);X&&to(e,X,null,c,0)}else U&&to(e,I,D,c,1)}wf(e)},remove(t,e,n,i,{um:s,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&r(u),(o||!br(d))&&(r(c),a&16))for(let p=0;p<l.length;p++){const g=l[p];s(g,e,n,!0,!!g.dynamicChildren)}},move:to,hydrate:Zg};function to(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=r===2;if(h&&i(o,e,n),(!h||br(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,n,2);h&&i(a,e,n)}function Zg(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Tl(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(br(e.props))e.anchor=c(o(t),e,a(t),n,i,s,r),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,i,s,r)}wf(e)}return e.anchor&&o(e.anchor)}const Jg=Yg;function wf(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const tt=Symbol.for("v-fgt"),ia=Symbol.for("v-txt"),xn=Symbol.for("v-cmt"),Ro=Symbol.for("v-stc"),yr=[];let Rn=null;function G(t=!1){yr.push(Rn=t?null:[])}function Qg(){yr.pop(),Rn=yr[yr.length-1]||null}let Dr=1;function gu(t){Dr+=t}function Tf(t){return t.dynamicChildren=Dr>0?Rn||Ns:null,Qg(),Dr>0&&Rn&&Rn.push(t),t}function ve(t,e,n,i,s,r){return Tf(W(t,e,n,i,s,r,!0))}function ke(t,e,n,i,s){return Tf(Xe(t,e,n,i,s,!0))}function Bo(t){return t?t.__v_isVNode===!0:!1}function Xi(t,e){return t.type===e.type&&t.key===e.key}const sa="__vInternal",Af=({key:t})=>t??null,Io=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?bt(t)||xt(t)||We(t)?{i:Ot,r:t,k:e,f:!!n}:t:null);function W(t,e=null,n=null,i=0,s=null,r=t===tt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Af(e),ref:e&&Io(e),scopeId:ea,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ot};return a?(gc(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=bt(n)?8:16),Dr>0&&!o&&Rn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Rn.push(l),l}const Xe=ev;function ev(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===gf)&&(t=xn),Bo(t)){const a=Pi(t,e,!0);return n&&gc(a,n),Dr>0&&!r&&Rn&&(a.shapeFlag&6?Rn[Rn.indexOf(t)]=a:Rn.push(a)),a.patchFlag|=-2,a}if(uv(t)&&(t=t.__vccOpts),e){e=tv(e);let{class:a,style:l}=e;a&&!bt(a)&&(e.class=At(a)),dt(l)&&(Jd(l)&&!Ve(l)&&(l=Pt({},l)),e.style=qo(l))}const o=bt(t)?1:pg(t)?128:qg(t)?64:dt(t)?4:We(t)?2:0;return W(t,e,n,i,s,o,r,!0)}function tv(t){return t?Jd(t)||sa in t?Pt({},t):t:null}function Pi(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?he(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Af(a),ref:e&&e.ref?n&&s?Ve(s)?s.concat(Io(e)):[s,Io(e)]:Io(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pi(t.ssContent),ssFallback:t.ssFallback&&Pi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Si(t=" ",e=0){return Xe(ia,null,t,e)}function Oe(t="",e=!1){return e?(G(),ke(xn,null,t)):Xe(xn,null,t)}function kn(t){return t==null||typeof t=="boolean"?Xe(xn):Ve(t)?Xe(tt,null,t.slice()):typeof t=="object"?bi(t):Xe(ia,null,String(t))}function bi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pi(t)}function gc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ve(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),gc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(sa in e)?e._ctx=Ot:s===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),i&64?(n=16,e=[Si(e)]):n=8);t.children=e,t.shapeFlag|=n}function he(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=At([e.class,i.class]));else if(s==="style")e.style=qo([e.style,i.style]);else if($o(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ve(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function On(t,e,n,i=null){_n(t,e,7,[n,i])}const nv=xf();let iv=0;function sv(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||nv,r={uid:iv++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new kd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yf(i,s),emitsOptions:cf(i,s),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=cg.bind(null,r),t.ce&&t.ce(r),r}let Rt=null;const Cf=()=>Rt||Ot;let vc,hs,vu="__VUE_INSTANCE_SETTERS__";(hs=pl()[vu])||(hs=pl()[vu]=[]),hs.push(t=>Rt=t),vc=t=>{hs.length>1?hs.forEach(e=>e(t)):hs[0](t)};const Gs=t=>{vc(t),t.scope.on()},Qi=()=>{Rt&&Rt.scope.off(),vc(null)};function Pf(t){return t.vnode.shapeFlag&4}let Ur=!1;function rv(t,e=!1){Ur=e;const{props:n,children:i}=t.vnode,s=Pf(t);Hg(t,n,s,e),Wg(t,i);const r=s?ov(t,e):void 0;return Ur=!1,r}function ov(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Zo(new Proxy(t.ctx,Lg));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?lv(t):null;Gs(t),Js();const r=Ti(i,t,0,[t.props,s]);if(Qs(),Qi(),Dd(r)){if(r.then(Qi,Qi),e)return r.then(o=>{_u(t,o,e)}).catch(o=>{Jo(o,t,0)});t.asyncDep=r}else _u(t,r,e)}else Rf(t,e)}function _u(t,e,n){We(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:dt(e)&&(t.setupState=nf(e)),Rf(t,n)}let xu;function Rf(t,e,n){const i=t.type;if(!t.render){if(!e&&xu&&!i.render){const s=i.template||fc(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Pt(Pt({isCustomElement:r,delimiters:a},o),l);i.render=xu(s,c)}}t.render=i.render||In}Gs(t),Js(),Dg(t),Qs(),Qi()}function av(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return rn(t,"get","$attrs"),e[n]}}))}function lv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return av(t)},slots:t.slots,emit:t.emit,expose:e}}function ra(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(nf(Zo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xr)return xr[n](t)},has(e,n){return n in e||n in xr}}))}function cv(t,e=!0){return We(t)?t.displayName||t.name:t.name||e&&t.__name}function uv(t){return We(t)&&"__vccOpts"in t}const tn=(t,e)=>ig(t,e,Ur);function _c(t,e,n){const i=arguments.length;return i===2?dt(e)&&!Ve(e)?Bo(e)?Xe(t,null,[e]):Xe(t,e):Xe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Bo(n)&&(n=[n]),Xe(t,e,n))}const hv=Symbol.for("v-scx"),dv=()=>Ln(hv),fv="3.3.4",pv="http://www.w3.org/2000/svg",ji=typeof document<"u"?document:null,bu=ji&&ji.createElement("template"),mv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?ji.createElementNS(pv,t):ji.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>ji.createTextNode(t),createComment:t=>ji.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ji.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{bu.innerHTML=i?`<svg>${t}</svg>`:t;const a=bu.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function gv(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function vv(t,e,n){const i=t.style,s=bt(n);if(n&&!s){if(e&&!bt(e))for(const r in e)n[r]==null&&Al(i,r,"");for(const r in n)Al(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const yu=/\s*!important$/;function Al(t,e,n){if(Ve(n))n.forEach(i=>Al(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=_v(t,e);yu.test(n)?t.setProperty(Zs(i),n.replace(yu,""),"important"):t[i]=n}}const Su=["Webkit","Moz","ms"],Ea={};function _v(t,e){const n=Ea[e];if(n)return n;let i=Gn(e);if(i!=="filter"&&i in t)return Ea[e]=i;i=Ko(i);for(let s=0;s<Su.length;s++){const r=Su[s]+i;if(r in t)return Ea[e]=r}return e}const Eu="http://www.w3.org/1999/xlink";function xv(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Eu,e.slice(6,e.length)):t.setAttributeNS(Eu,e,n);else{const r=_m(e);n==null||r&&!Od(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function bv(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Od(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function yv(t,e,n,i){t.addEventListener(e,n,i)}function Sv(t,e,n,i){t.removeEventListener(e,n,i)}function Ev(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Mv(e);if(i){const c=r[e]=Av(i,s);yv(t,a,c,l)}else o&&(Sv(t,a,o,l),r[e]=void 0)}}const Mu=/(?:Once|Passive|Capture)$/;function Mv(t){let e;if(Mu.test(t)){e={};let i;for(;i=t.match(Mu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zs(t.slice(2)),e]}let Ma=0;const wv=Promise.resolve(),Tv=()=>Ma||(wv.then(()=>Ma=0),Ma=Date.now());function Av(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;_n(Cv(i,n.value),e,5,[i])};return n.value=t,n.attached=Tv(),n}function Cv(t,e){if(Ve(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const wu=/^on[a-z]/,Pv=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?gv(t,i,s):e==="style"?vv(t,n,i):$o(e)?ql(e)||Ev(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rv(t,e,i,s))?bv(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),xv(t,e,i,s))};function Rv(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&wu.test(e)&&We(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wu.test(e)&&bt(n)?!1:e in t}function Iv(t){const e=Cf();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Pl(r,s))},i=()=>{const s=t(e.proxy);Cl(e.subTree,s),n(s)};gg(i),cs(()=>{const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),uc(()=>s.disconnect())})}function Cl(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Cl(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Pl(t.el,e);else if(t.type===tt)t.children.forEach(n=>Cl(n,e));else if(t.type===Ro){let{el:n,anchor:i}=t;for(;n&&(Pl(n,e),n!==i);)n=n.nextSibling}}function Pl(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const di="transition",or="animation",jn=(t,{slots:e})=>_c(bg,Lv(t),e);jn.displayName="Transition";const If={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};jn.props=Pt({},hf,If);const ki=(t,e=[])=>{Ve(t)?t.forEach(n=>n(...e)):t&&t(...e)},Tu=t=>t?Ve(t)?t.some(e=>e.length>1):t.length>1:!1;function Lv(t){const e={};for(const z in t)z in If||(e[z]=t[z]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=Dv(s),v=g&&g[0],m=g&&g[1],{onBeforeEnter:f,onEnter:M,onEnterCancelled:x,onLeave:y,onLeaveCancelled:w,onBeforeAppear:I=f,onAppear:D=M,onAppearCancelled:U=x}=e,_=(z,N,V)=>{Bi(z,N?u:a),Bi(z,N?c:o),V&&V()},C=(z,N)=>{z._isLeaving=!1,Bi(z,h),Bi(z,p),Bi(z,d),N&&N()},X=z=>(N,V)=>{const Y=z?D:M,Z=()=>_(N,z,V);ki(Y,[N,Z]),Au(()=>{Bi(N,z?l:r),fi(N,z?u:a),Tu(Y)||Cu(N,i,v,Z)})};return Pt(e,{onBeforeEnter(z){ki(f,[z]),fi(z,r),fi(z,o)},onBeforeAppear(z){ki(I,[z]),fi(z,l),fi(z,c)},onEnter:X(!1),onAppear:X(!0),onLeave(z,N){z._isLeaving=!0;const V=()=>C(z,N);fi(z,h),Ov(),fi(z,d),Au(()=>{z._isLeaving&&(Bi(z,h),fi(z,p),Tu(y)||Cu(z,i,m,V))}),ki(y,[z,V])},onEnterCancelled(z){_(z,!1),ki(x,[z])},onAppearCancelled(z){_(z,!0),ki(U,[z])},onLeaveCancelled(z){C(z),ki(w,[z])}})}function Dv(t){if(t==null)return null;if(dt(t))return[wa(t.enter),wa(t.leave)];{const e=wa(t);return[e,e]}}function wa(t){return dm(t)}function fi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Bi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Au(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Uv=0;function Cu(t,e,n,i){const s=t._endId=++Uv,r=()=>{s===t._endId&&i()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Nv(t,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=p=>{p.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function Nv(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),s=i(`${di}Delay`),r=i(`${di}Duration`),o=Pu(s,r),a=i(`${or}Delay`),l=i(`${or}Duration`),c=Pu(a,l);let u=null,h=0,d=0;e===di?o>0&&(u=di,h=o,d=r.length):e===or?c>0&&(u=or,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?di:or:null,d=u?u===di?r.length:l.length:0);const p=u===di&&/\b(transform|all)(,|$)/.test(i(`${di}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:p}}function Pu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Ru(n)+Ru(t[i])))}function Ru(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Ov(){return document.body.offsetHeight}const xc={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ar(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),ar(t,!0),i.enter(t)):i.leave(t,()=>{ar(t,!1)}):ar(t,e))},beforeUnmount(t,{value:e}){ar(t,e)}};function ar(t,e){t.style.display=e?t._vod:"none"}const Fv=Pt({patchProp:Pv},mv);let Iu;function kv(){return Iu||(Iu=Xg(Fv))}const Bv=(...t)=>{const e=kv().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=zv(i);if(!s)return;const r=e._component;!We(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function zv(t){return bt(t)?document.querySelector(t):t}const er=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},Hv={};function Vv(t,e){const n=gt("router-view");return G(),ke(n,null,{default:ht(({Component:i})=>[Xe(jn,null,{default:ht(()=>[(G(),ke(Qe(i)))]),_:2},1024)]),_:1})}const Gv=er(Hv,[["render",Vv]]);/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Is=typeof window<"u";function Wv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const at=Object.assign;function Ta(t,e){const n={};for(const i in e){const s=e[i];n[i]=Un(s)?s.map(t):t(s)}return n}const Sr=()=>{},Un=Array.isArray,$v=/\/$/,Xv=t=>t.replace($v,"");function Aa(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Yv(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function jv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Lu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Kv(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Ws(e.matched[i],n.matched[s])&&Lf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Lf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!qv(t[n],e[n]))return!1;return!0}function qv(t,e){return Un(t)?Du(t,e):Un(e)?Du(e,t):t===e}function Du(t,e){return Un(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Yv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Nr;(function(t){t.pop="pop",t.push="push"})(Nr||(Nr={}));var Er;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Er||(Er={}));function Zv(t){if(!t)if(Is){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Xv(t)}const Jv=/^[^#]+#/;function Qv(t,e){return t.replace(Jv,"#")+e}function e_(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const oa=()=>({left:window.pageXOffset,top:window.pageYOffset});function t_(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=e_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Uu(t,e){return(history.state?history.state.position-e:-1)+t}const Rl=new Map;function n_(t,e){Rl.set(t,e)}function i_(t){const e=Rl.get(t);return Rl.delete(t),e}let s_=()=>location.protocol+"//"+location.host;function Df(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Lu(l,"")}return Lu(n,t)+i+s}function r_(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const p=Df(t,location),g=n.value,v=e.value;let m=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}m=v?d.position-v.position:0}else i(p);s.forEach(f=>{f(n.value,g,{delta:m,type:Nr.pop,direction:m?m>0?Er.forward:Er.back:Er.unknown})})};function l(){o=n.value}function c(d){s.push(d);const p=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(at({},d.state,{scroll:oa()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Nu(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?oa():null}}function o_(t){const{history:e,location:n}=window,i={value:Df(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:s_()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=at({},e.state,Nu(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=at({},s.value,e.state,{forward:l,scroll:oa()});r(u.current,u,!0);const h=at({},Nu(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function a_(t){t=Zv(t);const e=o_(t),n=r_(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=at({location:"",base:t,go:i,createHref:Qv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function l_(t){return typeof t=="string"||t&&typeof t=="object"}function Uf(t){return typeof t=="string"||typeof t=="symbol"}const pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Nf=Symbol("");var Ou;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ou||(Ou={}));function $s(t,e){return at(new Error,{type:t,[Nf]:!0},e)}function qn(t,e){return t instanceof Error&&Nf in t&&(e==null||!!(t.type&e))}const Fu="[^/]+?",c_={sensitive:!1,strict:!1,start:!0,end:!0},u_=/[.+*?^${}()[\]/\\]/g;function h_(t,e){const n=at({},c_,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(u_,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:v,optional:m,regexp:f}=d;r.push({name:g,repeatable:v,optional:m});const M=f||Fu;if(M!==Fu){p+=10;try{new RegExp(`(${M})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+y.message)}}let x=v?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),s+=x,p+=20,m&&(p+=-8),v&&(p+=-20),M===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=r[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:v,optional:m}=p,f=g in c?c[g]:"";if(Un(f)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=Un(f)?f.join("/"):f;if(!M)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function d_(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function f_(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=d_(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(ku(i))return 1;if(ku(s))return-1}return s.length-i.length}function ku(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const p_={type:0,value:""},m_=/[a-zA-Z0-9_]/;function g_(t){if(!t)return[[]];if(t==="/")return[[p_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:m_.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function v_(t,e,n){const i=h_(g_(t.path),n),s=at(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function __(t,e){const n=[],i=new Map;e=Hu({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const p=!d,g=x_(u);g.aliasOf=d&&d.record;const v=Hu(e,u),m=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of x)m.push(at({},g,{components:d?d.record.components:g.components,path:y,aliasOf:d?d.record:g}))}let f,M;for(const x of m){const{path:y}=x;if(h&&y[0]!=="/"){const w=h.record.path,I=w[w.length-1]==="/"?"":"/";x.path=h.record.path+(y&&I+y)}if(f=v_(x,h,v),d?d.alias.push(f):(M=M||f,M!==f&&M.alias.push(f),p&&u.name&&!zu(f)&&o(u.name)),g.children){const w=g.children;for(let I=0;I<w.length;I++)r(w[I],f,d&&d.children[I])}d=d||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return M?()=>{o(M)}:Sr}function o(u){if(Uf(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&f_(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Of(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!zu(u)&&i.set(u.record.name,u)}function c(u,h){let d,p={},g,v;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw $s(1,{location:u});v=d.record.name,p=at(Bu(h.params,d.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&Bu(u.params,d.keys.map(M=>M.name))),g=d.stringify(p)}else if("path"in u)g=u.path,d=n.find(M=>M.re.test(g)),d&&(p=d.parse(g),v=d.record.name);else{if(d=h.name?i.get(h.name):n.find(M=>M.re.test(h.path)),!d)throw $s(1,{location:u,currentLocation:h});v=d.record.name,p=at({},h.params,u.params),g=d.stringify(p)}const m=[];let f=d;for(;f;)m.unshift(f.record),f=f.parent;return{name:v,path:g,params:p,matched:m,meta:y_(m)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Bu(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function x_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:b_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function b_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function zu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function y_(t){return t.reduce((e,n)=>at(e,n.meta),{})}function Hu(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Of(t,e){return e.children.some(n=>n===t||Of(t,n))}const Ff=/#/g,S_=/&/g,E_=/\//g,M_=/=/g,w_=/\?/g,kf=/\+/g,T_=/%5B/g,A_=/%5D/g,Bf=/%5E/g,C_=/%60/g,zf=/%7B/g,P_=/%7C/g,Hf=/%7D/g,R_=/%20/g;function bc(t){return encodeURI(""+t).replace(P_,"|").replace(T_,"[").replace(A_,"]")}function I_(t){return bc(t).replace(zf,"{").replace(Hf,"}").replace(Bf,"^")}function Il(t){return bc(t).replace(kf,"%2B").replace(R_,"+").replace(Ff,"%23").replace(S_,"%26").replace(C_,"`").replace(zf,"{").replace(Hf,"}").replace(Bf,"^")}function L_(t){return Il(t).replace(M_,"%3D")}function D_(t){return bc(t).replace(Ff,"%23").replace(w_,"%3F")}function U_(t){return t==null?"":D_(t).replace(E_,"%2F")}function zo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function N_(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(kf," "),o=r.indexOf("="),a=zo(o<0?r:r.slice(0,o)),l=o<0?null:zo(r.slice(o+1));if(a in e){let c=e[a];Un(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Vu(t){let e="";for(let n in t){const i=t[n];if(n=L_(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Un(i)?i.map(r=>r&&Il(r)):[i&&Il(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function O_(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Un(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const F_=Symbol(""),Gu=Symbol(""),yc=Symbol(""),Sc=Symbol(""),Ll=Symbol("");function lr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function yi(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a($s(4,{from:n,to:e})):h instanceof Error?a(h):l_(h)?a($s(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Ca(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(k_(a)){const c=(a.__vccOpts||a)[e];c&&s.push(yi(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Wv(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&yi(d,n,i,r,o)()}))}}return s}function k_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Wu(t){const e=Ln(yc),n=Ln(Sc),i=tn(()=>e.resolve(oi(t.to))),s=tn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ws.bind(null,u));if(d>-1)return d;const p=$u(l[c-2]);return c>1&&$u(u)===p&&h[h.length-1].path!==p?h.findIndex(Ws.bind(null,l[c-2])):d}),r=tn(()=>s.value>-1&&V_(n.params,i.value.params)),o=tn(()=>s.value>-1&&s.value===n.matched.length-1&&Lf(n.params,i.value.params));function a(l={}){return H_(l)?e[oi(t.replace)?"replace":"push"](oi(t.to)).catch(Sr):Promise.resolve()}return{route:i,href:tn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const B_=Xn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wu,setup(t,{slots:e}){const n=ls(Wu(t)),{options:i}=Ln(yc),s=tn(()=>({[Xu(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Xu(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:_c("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),z_=B_;function H_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function V_(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Un(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function $u(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xu=(t,e,n)=>t??e??n,G_=Xn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Ln(Ll),s=tn(()=>t.route||i.value),r=Ln(Gu,0),o=tn(()=>{let c=oi(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=tn(()=>s.value.matched[o.value]);Po(Gu,tn(()=>o.value+1)),Po(F_,a),Po(Ll,s);const l=_t();return vr(()=>[l.value,a.value,t.name],([c,u,h],[d,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Ws(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return ju(n.default,{Component:d,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=_c(d,at({},g,e,{onVnodeUnmounted:f=>{f.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return ju(n.default,{Component:m,route:c})||m}}});function ju(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const W_=G_;function $_(t){const e=__(t.routes,t),n=t.parseQuery||N_,i=t.stringifyQuery||Vu,s=t.history,r=lr(),o=lr(),a=lr(),l=qm(pi);let c=pi;Is&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ta.bind(null,A=>""+A),h=Ta.bind(null,U_),d=Ta.bind(null,zo);function p(A,fe){let ae,Q;return Uf(A)?(ae=e.getRecordMatcher(A),Q=fe):Q=A,e.addRoute(Q,ae)}function g(A){const fe=e.getRecordMatcher(A);fe&&e.removeRoute(fe)}function v(){return e.getRoutes().map(A=>A.record)}function m(A){return!!e.getRecordMatcher(A)}function f(A,fe){if(fe=at({},fe||l.value),typeof A=="string"){const R=Aa(n,A,fe.path),B=e.resolve({path:R.path},fe),k=s.createHref(R.fullPath);return at(R,B,{params:d(B.params),hash:zo(R.hash),redirectedFrom:void 0,href:k})}let ae;if("path"in A)ae=at({},A,{path:Aa(n,A.path,fe.path).path});else{const R=at({},A.params);for(const B in R)R[B]==null&&delete R[B];ae=at({},A,{params:h(R)}),fe.params=h(fe.params)}const Q=e.resolve(ae,fe),Me=A.hash||"";Q.params=u(d(Q.params));const S=jv(i,at({},A,{hash:I_(Me),path:Q.path})),E=s.createHref(S);return at({fullPath:S,hash:Me,query:i===Vu?O_(A.query):A.query||{}},Q,{redirectedFrom:void 0,href:E})}function M(A){return typeof A=="string"?Aa(n,A,l.value.path):at({},A)}function x(A,fe){if(c!==A)return $s(8,{from:fe,to:A})}function y(A){return D(A)}function w(A){return y(at(M(A),{replace:!0}))}function I(A){const fe=A.matched[A.matched.length-1];if(fe&&fe.redirect){const{redirect:ae}=fe;let Q=typeof ae=="function"?ae(A):ae;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=M(Q):{path:Q},Q.params={}),at({query:A.query,hash:A.hash,params:"path"in Q?{}:A.params},Q)}}function D(A,fe){const ae=c=f(A),Q=l.value,Me=A.state,S=A.force,E=A.replace===!0,R=I(ae);if(R)return D(at(M(R),{state:typeof R=="object"?at({},Me,R.state):Me,force:S,replace:E}),fe||ae);const B=ae;B.redirectedFrom=fe;let k;return!S&&Kv(i,Q,ae)&&(k=$s(16,{to:B,from:Q}),Re(Q,Q,!0,!1)),(k?Promise.resolve(k):C(B,Q)).catch(K=>qn(K)?qn(K,2)?K:ge(K):J(K,B,Q)).then(K=>{if(K){if(qn(K,2))return D(at({replace:E},M(K.to),{state:typeof K.to=="object"?at({},Me,K.to.state):Me,force:S}),fe||B)}else K=z(B,Q,!0,E,Me);return X(B,Q,K),K})}function U(A,fe){const ae=x(A,fe);return ae?Promise.reject(ae):Promise.resolve()}function _(A){const fe=me.values().next().value;return fe&&typeof fe.runWithContext=="function"?fe.runWithContext(A):A()}function C(A,fe){let ae;const[Q,Me,S]=X_(A,fe);ae=Ca(Q.reverse(),"beforeRouteLeave",A,fe);for(const R of Q)R.leaveGuards.forEach(B=>{ae.push(yi(B,A,fe))});const E=U.bind(null,A,fe);return ae.push(E),Ee(ae).then(()=>{ae=[];for(const R of r.list())ae.push(yi(R,A,fe));return ae.push(E),Ee(ae)}).then(()=>{ae=Ca(Me,"beforeRouteUpdate",A,fe);for(const R of Me)R.updateGuards.forEach(B=>{ae.push(yi(B,A,fe))});return ae.push(E),Ee(ae)}).then(()=>{ae=[];for(const R of A.matched)if(R.beforeEnter&&!fe.matched.includes(R))if(Un(R.beforeEnter))for(const B of R.beforeEnter)ae.push(yi(B,A,fe));else ae.push(yi(R.beforeEnter,A,fe));return ae.push(E),Ee(ae)}).then(()=>(A.matched.forEach(R=>R.enterCallbacks={}),ae=Ca(S,"beforeRouteEnter",A,fe),ae.push(E),Ee(ae))).then(()=>{ae=[];for(const R of o.list())ae.push(yi(R,A,fe));return ae.push(E),Ee(ae)}).catch(R=>qn(R,8)?R:Promise.reject(R))}function X(A,fe,ae){for(const Q of a.list())_(()=>Q(A,fe,ae))}function z(A,fe,ae,Q,Me){const S=x(A,fe);if(S)return S;const E=fe===pi,R=Is?history.state:{};ae&&(Q||E?s.replace(A.fullPath,at({scroll:E&&R&&R.scroll},Me)):s.push(A.fullPath,Me)),l.value=A,Re(A,fe,ae,E),ge()}let N;function V(){N||(N=s.listen((A,fe,ae)=>{if(!Te.listening)return;const Q=f(A),Me=I(Q);if(Me){D(at(Me,{replace:!0}),Q).catch(Sr);return}c=Q;const S=l.value;Is&&n_(Uu(S.fullPath,ae.delta),oa()),C(Q,S).catch(E=>qn(E,12)?E:qn(E,2)?(D(E.to,Q).then(R=>{qn(R,20)&&!ae.delta&&ae.type===Nr.pop&&s.go(-1,!1)}).catch(Sr),Promise.reject()):(ae.delta&&s.go(-ae.delta,!1),J(E,Q,S))).then(E=>{E=E||z(Q,S,!1),E&&(ae.delta&&!qn(E,8)?s.go(-ae.delta,!1):ae.type===Nr.pop&&qn(E,20)&&s.go(-1,!1)),X(Q,S,E)}).catch(Sr)}))}let Y=lr(),Z=lr(),te;function J(A,fe,ae){ge(A);const Q=Z.list();return Q.length?Q.forEach(Me=>Me(A,fe,ae)):console.error(A),Promise.reject(A)}function xe(){return te&&l.value!==pi?Promise.resolve():new Promise((A,fe)=>{Y.add([A,fe])})}function ge(A){return te||(te=!A,V(),Y.list().forEach(([fe,ae])=>A?ae(A):fe()),Y.reset()),A}function Re(A,fe,ae,Q){const{scrollBehavior:Me}=t;if(!Is||!Me)return Promise.resolve();const S=!ae&&i_(Uu(A.fullPath,0))||(Q||!ae)&&history.state&&history.state.scroll||null;return ac().then(()=>Me(A,fe,S)).then(E=>E&&t_(E)).catch(E=>J(E,A,fe))}const be=A=>s.go(A);let ie;const me=new Set,Te={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:m,getRoutes:v,resolve:f,options:t,push:y,replace:w,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:xe,install(A){const fe=this;A.component("RouterLink",z_),A.component("RouterView",W_),A.config.globalProperties.$router=fe,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>oi(l)}),Is&&!ie&&l.value===pi&&(ie=!0,y(s.location).catch(Me=>{}));const ae={};for(const Me in pi)ae[Me]=tn(()=>l.value[Me]);A.provide(yc,fe),A.provide(Sc,ls(ae)),A.provide(Ll,l);const Q=A.unmount;me.add(A),A.unmount=function(){me.delete(A),me.size<1&&(c=pi,N&&N(),N=null,l.value=pi,ie=!1,te=!1),Q()}}};function Ee(A){return A.reduce((fe,ae)=>fe.then(()=>_(ae)),Promise.resolve())}return Te}function X_(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ws(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ws(c,l))||s.push(l))}return[n,i,s]}function j_(){return Ln(Sc)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ec="152",ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},K_=0,Ku=1,q_=2,Vf=1,Y_=2,ii=3,Ri=0,sn=1,ri=2,Ai=0,ks=1,Dl=2,qu=3,Yu=4,Z_=5,Ls=100,J_=101,Q_=102,Zu=103,Ju=104,e0=200,t0=201,n0=202,i0=203,Gf=204,Wf=205,s0=206,r0=207,o0=208,a0=209,l0=210,c0=0,u0=1,h0=2,Ul=3,d0=4,f0=5,p0=6,m0=7,Mc=0,g0=1,v0=2,ai=0,_0=1,x0=2,b0=3,y0=4,S0=5,$f=300,Xs=301,js=302,Nl=303,Ol=304,aa=306,Fl=1e3,Cn=1001,kl=1002,Zt=1003,Qu=1004,Pa=1005,vn=1006,E0=1007,Or=1008,is=1009,M0=1010,w0=1011,Xf=1012,T0=1013,Yi=1014,Zi=1015,Fr=1016,A0=1017,C0=1018,Bs=1020,P0=1021,Pn=1023,R0=1024,I0=1025,es=1026,Ks=1027,L0=1028,D0=1029,U0=1030,N0=1031,O0=1033,Ra=33776,Ia=33777,La=33778,Da=33779,eh=35840,th=35841,nh=35842,ih=35843,F0=36196,sh=37492,rh=37496,oh=37808,ah=37809,lh=37810,ch=37811,uh=37812,hh=37813,dh=37814,fh=37815,ph=37816,mh=37817,gh=37818,vh=37819,_h=37820,xh=37821,Ua=36492,k0=36283,bh=36284,yh=36285,Sh=36286,jf=3e3,ts=3001,B0=3200,z0=3201,Kf=0,H0=1,ns="",je="srgb",$n="srgb-linear",qf="display-p3",Na=7680,V0=519,Eh=35044,Mh="300 es",Bl=1035;class us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oa=Math.PI/180,Ho=180/Math.PI;function tr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function kt(t,e,n){return Math.max(e,Math.min(n,t))}function G0(t,e){return(t%e+e)%e}function Fa(t,e,n){return(1-n)*t+n*e}function wh(t){return(t&t-1)===0&&t!==0}function W0(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function no(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Se{constructor(e=0,n=0){Se.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],f=s[6],M=s[1],x=s[4],y=s[7],w=s[2],I=s[5],D=s[8];return r[0]=o*v+a*M+l*w,r[3]=o*m+a*x+l*I,r[6]=o*f+a*y+l*D,r[1]=c*v+u*M+h*w,r[4]=c*m+u*x+h*I,r[7]=c*f+u*y+h*D,r[2]=d*v+p*M+g*w,r[5]=d*m+p*x+g*I,r[8]=d*f+p*y+g*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=n*h+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*n-s*l)*v,e[5]=(s*r-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ka.makeScale(e,n)),this}rotate(e){return this.premultiply(ka.makeRotation(-e)),this}translate(e,n){return this.premultiply(ka.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ka=new et;function Yf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Th={};function Mr(t){t in Th||(Th[t]=!0,console.warn(t))}function zs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ba(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const $0=new et().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),X0=new et().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function j0(t){return t.convertSRGBToLinear().applyMatrix3(X0)}function K0(t){return t.applyMatrix3($0).convertLinearToSRGB()}const q0={[$n]:t=>t,[je]:t=>t.convertSRGBToLinear(),[qf]:j0},Y0={[$n]:t=>t,[je]:t=>t.convertLinearToSRGB(),[qf]:K0},Sn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return $n},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=q0[e],s=Y0[n];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let ps;class Zf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=Vo("canvas")),ps.width=e.width,ps.height=e.height;const i=ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ps}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zs(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zs(n[i]/255)*255):n[i]=zs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Jf{constructor(e=null){this.isSource=!0,this.uuid=tr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(za(s[o].image)):r.push(za(s[o]))}else r=za(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function za(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Zf.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Z0=0;class dn extends us{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Cn,s=Cn,r=vn,o=Or,a=Pn,l=is,c=dn.DEFAULT_ANISOTROPY,u=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=tr(),this.name="",this.source=new Jf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ts?je:ns),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$f)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fl:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fl:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===je?ts:jf}set encoding(e){Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ts?je:ns}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=$f;dn.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,n=0,i=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(p+1)/2,w=(f+1)/2,I=(u+d)/4,D=(h+v)/4,U=(g+m)/4;return x>y&&x>w?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=I/i,r=D/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=I/s,r=U/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=D/r,s=U/r),this.set(i,s,r,n),this}let M=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-v)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dn extends us{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new pt(0,0,e,n),this.scissorTest=!1,this.viewport=new pt(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(Mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ts?je:ns),this.texture=new dn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:vn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Jf(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qf extends dn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class J0 extends dn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(h!==v||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*v,M=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const w=Math.sqrt(x),I=Math.atan2(w,f*M);m=Math.sin(m*I)/w,a=Math.sin(a*I)/w}const y=a*M;if(l=l*m+d*y,c=c*m+p*y,u=u*m+g*y,h=h*m+v*y,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[n]=a*g+u*h+l*p-c*d,e[n+1]=l*g+u*d+c*h-a*p,e[n+2]=c*g+u*p+a*d-l*h,e[n+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ah.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ah.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*s-a*i,u=l*i+a*n-r*s,h=l*s+r*i-o*n,d=-r*n-o*i-a*s;return this.x=c*l+d*-r+u*-a-h*-o,this.y=u*l+d*-o+h*-r-c*-a,this.z=h*l+d*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new O,Ah=new ss;class rs{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ms.copy(e.boundingBox),ms.applyMatrix4(e.matrixWorld),this.union(ms);else{const s=e.geometry;if(s!==void 0)if(n&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)Zn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Zn)}else s.boundingBox===null&&s.computeBoundingBox(),ms.copy(s.boundingBox),ms.applyMatrix4(e.matrixWorld),this.union(ms)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),io.subVectors(this.max,cr),gs.subVectors(e.a,cr),vs.subVectors(e.b,cr),_s.subVectors(e.c,cr),mi.subVectors(vs,gs),gi.subVectors(_s,vs),zi.subVectors(gs,_s);let n=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-zi.z,zi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,zi.z,0,-zi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-zi.y,zi.x,0];return!Va(n,gs,vs,_s,io)||(n=[1,0,0,0,1,0,0,0,1],!Va(n,gs,vs,_s,io))?!1:(so.crossVectors(mi,gi),n=[so.x,so.y,so.z],Va(n,gs,vs,_s,io))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new O,new O,new O,new O,new O,new O,new O,new O],Zn=new O,ms=new rs,gs=new O,vs=new O,_s=new O,mi=new O,gi=new O,zi=new O,cr=new O,io=new O,so=new O,Hi=new O;function Va(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Hi.fromArray(t,r);const a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=e.dot(Hi),c=n.dot(Hi),u=i.dot(Hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Q0=new rs,ur=new O,Ga=new O;class wc{constructor(e=new O,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Q0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const n=ur.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Ga)),this.expandByPoint(ur.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new O,Wa=new O,ro=new O,vi=new O,$a=new O,oo=new O,Xa=new O;class ex{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Wa.copy(e).add(n).multiplyScalar(.5),ro.copy(n).sub(e).normalize(),vi.copy(this.origin).sub(Wa);const r=e.distanceTo(n)*.5,o=-this.direction.dot(ro),a=vi.dot(this.direction),l=-vi.dot(ro),c=vi.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Wa).addScaledVector(ro,d),p}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,s,r){$a.subVectors(n,e),oo.subVectors(i,e),Xa.crossVectors($a,oo);let o=this.direction.dot(Xa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(oo.crossVectors(vi,oo));if(l<0)return null;const c=a*this.direction.dot($a.cross(vi));if(c<0||l+c>o)return null;const u=-a*vi.dot(Xa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,s,r,o,a,l,c,u,h,d,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,v=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,v=c*h;n[0]=d+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,v=c*h;n[0]=d-v*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,v=a*h;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+v,n[1]=l*h,n[5]=v*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-d*h,n[8]=g*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+g,n[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+v,n[5]=o*u,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*u,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tx,e,nx)}lookAt(e,n,i){const s=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),_i.crossVectors(i,cn),_i.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),_i.crossVectors(i,cn)),_i.normalize(),ao.crossVectors(cn,_i),s[0]=_i.x,s[4]=ao.x,s[8]=cn.x,s[1]=_i.y,s[5]=ao.y,s[9]=cn.y,s[2]=_i.z,s[6]=ao.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],M=i[3],x=i[7],y=i[11],w=i[15],I=s[0],D=s[4],U=s[8],_=s[12],C=s[1],X=s[5],z=s[9],N=s[13],V=s[2],Y=s[6],Z=s[10],te=s[14],J=s[3],xe=s[7],ge=s[11],Re=s[15];return r[0]=o*I+a*C+l*V+c*J,r[4]=o*D+a*X+l*Y+c*xe,r[8]=o*U+a*z+l*Z+c*ge,r[12]=o*_+a*N+l*te+c*Re,r[1]=u*I+h*C+d*V+p*J,r[5]=u*D+h*X+d*Y+p*xe,r[9]=u*U+h*z+d*Z+p*ge,r[13]=u*_+h*N+d*te+p*Re,r[2]=g*I+v*C+m*V+f*J,r[6]=g*D+v*X+m*Y+f*xe,r[10]=g*U+v*z+m*Z+f*ge,r[14]=g*_+v*N+m*te+f*Re,r[3]=M*I+x*C+y*V+w*J,r[7]=M*D+x*X+y*Y+w*xe,r[11]=M*U+x*z+y*Z+w*ge,r[15]=M*_+x*N+y*te+w*Re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*p-i*l*p)+v*(+n*l*p-n*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+n*c*h-n*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+f*(-s*a*u-n*l*h+n*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],M=h*m*c-v*d*c+v*l*p-a*m*p-h*l*f+a*d*f,x=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,y=u*v*c-g*h*c+g*a*p-o*v*p-u*a*f+o*h*f,w=g*h*l-u*v*l-g*a*d+o*v*d+u*a*m-o*h*m,I=n*M+i*x+s*y+r*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=M*D,e[1]=(v*d*r-h*m*r-v*s*p+i*m*p+h*s*f-i*d*f)*D,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*f+i*l*f)*D,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*p-i*l*p)*D,e[4]=x*D,e[5]=(u*m*r-g*d*r+g*s*p-n*m*p-u*s*f+n*d*f)*D,e[6]=(g*l*r-o*m*r-g*s*c+n*m*c+o*s*f-n*l*f)*D,e[7]=(o*d*r-u*l*r+u*s*c-n*d*c-o*s*p+n*l*p)*D,e[8]=y*D,e[9]=(g*h*r-u*v*r-g*i*p+n*v*p+u*i*f-n*h*f)*D,e[10]=(o*v*r-g*a*r+g*i*c-n*v*c-o*i*f+n*a*f)*D,e[11]=(u*a*r-o*h*r-u*i*c+n*h*c+o*i*p-n*a*p)*D,e[12]=w*D,e[13]=(u*v*s-g*h*s+g*i*d-n*v*d-u*i*m+n*h*m)*D,e[14]=(g*a*s-o*v*s-g*i*l+n*v*l+o*i*m-n*a*m)*D,e[15]=(o*h*s-u*a*s+u*i*l-n*h*l-o*i*d+n*a*d)*D,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,v=o*u,m=o*h,f=a*h,M=l*c,x=l*u,y=l*h,w=i.x,I=i.y,D=i.z;return s[0]=(1-(v+f))*w,s[1]=(p+y)*w,s[2]=(g-x)*w,s[3]=0,s[4]=(p-y)*I,s[5]=(1-(d+f))*I,s[6]=(m+M)*I,s[7]=0,s[8]=(g+x)*D,s[9]=(m-M)*D,s[10]=(1-(d+v))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=xs.set(s[0],s[1],s[2]).length();const o=xs.set(s[4],s[5],s[6]).length(),a=xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);const c=1/r,u=1/o,h=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,n.setFromRotationMatrix(En),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o){const a=this.elements,l=2*r/(n-e),c=2*r/(i-s),u=(n+e)/(n-e),h=(i+s)/(i-s),d=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,s,r,o){const a=this.elements,l=1/(n-e),c=1/(i-s),u=1/(o-r),h=(n+e)*l,d=(i+s)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xs=new O,En=new Et,tx=new O(0,0,0),nx=new O(1,1,1),_i=new O,ao=new O,cn=new O,Ch=new Et,Ph=new ss;class la{constructor(e=0,n=0,i=0,s=la.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ch,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}la.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ix=0;const Rh=new O,bs=new ss,Qn=new Et,lo=new O,hr=new O,sx=new O,rx=new ss,Ih=new O(1,0,0),Lh=new O(0,1,0),Dh=new O(0,0,1),ox={type:"added"},Uh={type:"removed"};class $t extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new O,n=new la,i=new ss,s=new O(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new et}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Ih,e)}rotateY(e){return this.rotateOnAxis(Lh,e)}rotateZ(e){return this.rotateOnAxis(Dh,e)}translateOnAxis(e,n){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ih,e)}translateY(e){return this.translateOnAxis(Lh,e)}translateZ(e){return this.translateOnAxis(Dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?lo.copy(e):lo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(hr,lo,this.up):Qn.lookAt(lo,hr,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(Qn),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ox)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Uh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Uh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,sx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const r=n[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}$t.DEFAULT_UP=new O(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new O,ei=new O,ja=new O,ti=new O,ys=new O,Ss=new O,Nh=new O,Ka=new O,qa=new O,Ya=new O;let co=!1;class Tn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Mn.subVectors(e,n),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Mn.subVectors(s,n),ei.subVectors(i,n),ja.subVectors(e,n);const o=Mn.dot(Mn),a=Mn.dot(ei),l=Mn.dot(ja),c=ei.dot(ei),u=ei.dot(ja),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,n,i,s,r,o,a,l){return co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),co=!0),this.getInterpolation(e,n,i,s,r,o,a,l)}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,ti),l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l}static isFrontFacing(e,n,i,s){return Mn.subVectors(i,n),ei.subVectors(e,n),Mn.cross(ei).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Mn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Tn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,r){return co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),co=!0),Tn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}getInterpolation(e,n,i,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;ys.subVectors(s,i),Ss.subVectors(r,i),Ka.subVectors(e,i);const l=ys.dot(Ka),c=Ss.dot(Ka);if(l<=0&&c<=0)return n.copy(i);qa.subVectors(e,s);const u=ys.dot(qa),h=Ss.dot(qa);if(u>=0&&h<=u)return n.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ys,o);Ya.subVectors(e,r);const p=ys.dot(Ya),g=Ss.dot(Ya);if(g>=0&&p<=g)return n.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Ss,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Nh.subVectors(r,s),a=(h-u)/(h-u+(p-g)),n.copy(s).addScaledVector(Nh,a);const f=1/(m+v+d);return o=v*f,a=d*f,n.copy(i).addScaledVector(ys,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ax=0;class Wr extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=ks,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Gf,this.blendDst=Wf,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},uo={h:0,s:0,l:0};function Za(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Sn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=Sn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Sn.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=Sn.workingColorSpace){if(e=G0(e,1),n=kt(n,0,1),i=kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Za(o,r,e+1/3),this.g=Za(o,r,e),this.b=Za(o,r,e-1/3)}return Sn.toWorkingColorSpace(this,s),this}setStyle(e,n=je){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=je){const i=ep[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=Ba(e.r),this.g=Ba(e.g),this.b=Ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=je){return Sn.fromWorkingColorSpace(Ht.copy(this),e),Math.round(kt(Ht.r*255,0,255))*65536+Math.round(kt(Ht.g*255,0,255))*256+Math.round(kt(Ht.b*255,0,255))}getHexString(e=je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Sn.workingColorSpace){Sn.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,s=Ht.g,r=Ht.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Sn.workingColorSpace){return Sn.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=je){Sn.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,s=Ht.b;return e!==je?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(wn),wn.h+=e,wn.s+=n,wn.l+=i,this.setHSL(wn.h,wn.s,wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(wn),e.getHSL(uo);const i=Fa(wn.h,uo.h,n),s=Fa(wn.s,uo.s,n),r=Fa(wn.l,uo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new rt;rt.NAMES=ep;class Ei extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new O,ho=new Se;class Hn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Eh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ho.fromBufferAttribute(this,n),ho.applyMatrix3(e),this.setXY(n,ho.x,ho.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=no(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=no(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=no(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=no(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class tp extends Hn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class np extends Hn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class vt extends Hn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let lx=0;const gn=new Et,Ja=new $t,Es=new O,un=new rs,dr=new rs,Ut=new O;class fn extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yf(e)?np:tp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return Ja.lookAt(e),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(un.min,dr.min),un.expandByPoint(Ut),Ut.addVectors(un.max,dr.max),un.expandByPoint(Ut)):(un.expandByPoint(dr.min),un.expandByPoint(dr.max))}un.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(e,c),Ut.add(Es)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=n.position.array,r=n.normal.array,o=n.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<a;C++)c[C]=new O,u[C]=new O;const h=new O,d=new O,p=new O,g=new Se,v=new Se,m=new Se,f=new O,M=new O;function x(C,X,z){h.fromArray(s,C*3),d.fromArray(s,X*3),p.fromArray(s,z*3),g.fromArray(o,C*2),v.fromArray(o,X*2),m.fromArray(o,z*2),d.sub(h),p.sub(h),v.sub(g),m.sub(g);const N=1/(v.x*m.y-m.x*v.y);isFinite(N)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(N),M.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(N),c[C].add(f),c[X].add(f),c[z].add(f),u[C].add(M),u[X].add(M),u[z].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let C=0,X=y.length;C<X;++C){const z=y[C],N=z.start,V=z.count;for(let Y=N,Z=N+V;Y<Z;Y+=3)x(i[Y+0],i[Y+1],i[Y+2])}const w=new O,I=new O,D=new O,U=new O;function _(C){D.fromArray(r,C*3),U.copy(D);const X=c[C];w.copy(X),w.sub(D.multiplyScalar(D.dot(X))).normalize(),I.crossVectors(U,X);const N=I.dot(u[C])<0?-1:1;l[C*4]=w.x,l[C*4+1]=w.y,l[C*4+2]=w.z,l[C*4+3]=N}for(let C=0,X=y.length;C<X;++C){const z=y[C],N=z.start,V=z.count;for(let Y=N,Z=N+V;Y<Z;Y+=3)_(i[Y+0]),_(i[Y+1]),_(i[Y+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Hn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oh=new Et,Fn=new ex,fo=new wc,Fh=new O,Ms=new O,ws=new O,Ts=new O,Qa=new O,po=new O,mo=new Se,go=new Se,vo=new Se,kh=new O,Bh=new O,zh=new O,_o=new O,xo=new O;class Tt extends $t{constructor(e=new fn,n=new Ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Qa.fromBufferAttribute(h,e),o?po.addScaledVector(Qa,u):po.addScaledVector(Qa.sub(n),u))}n.add(po)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(r),Fn.copy(e.ray).recast(e.near),!(fo.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(fo,Fh)===null||Fn.origin.distanceToSquared(Fh)>(e.far-e.near)**2))&&(Oh.copy(r).invert(),Fn.copy(e.ray).applyMatrix4(Oh),!(i.boundingBox!==null&&Fn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const s=this.geometry,r=this.material,o=s.index,a=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const v=h[p],m=r[v.materialIndex],f=Math.max(v.start,d.start),M=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));for(let x=f,y=M;x<y;x+=3){const w=o.getX(x),I=o.getX(x+1),D=o.getX(x+2);i=bo(this,m,e,Fn,l,c,u,w,I,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=v.materialIndex,n.push(i))}}else{const p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let v=p,m=g;v<m;v+=3){const f=o.getX(v),M=o.getX(v+1),x=o.getX(v+2);i=bo(this,r,e,Fn,l,c,u,f,M,x),i&&(i.faceIndex=Math.floor(v/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const v=h[p],m=r[v.materialIndex],f=Math.max(v.start,d.start),M=Math.min(a.count,Math.min(v.start+v.count,d.start+d.count));for(let x=f,y=M;x<y;x+=3){const w=x,I=x+1,D=x+2;i=bo(this,m,e,Fn,l,c,u,w,I,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=v.materialIndex,n.push(i))}}else{const p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let v=p,m=g;v<m;v+=3){const f=v,M=v+1,x=v+2;i=bo(this,r,e,Fn,l,c,u,f,M,x),i&&(i.faceIndex=Math.floor(v/3),n.push(i))}}}}function cx(t,e,n,i,s,r,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ri,a),l===null)return null;xo.copy(a),xo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(xo);return c<n.near||c>n.far?null:{distance:c,point:xo.clone(),object:t}}function bo(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Ms),t.getVertexPosition(l,ws),t.getVertexPosition(c,Ts);const u=cx(t,e,n,i,Ms,ws,Ts,_o);if(u){s&&(mo.fromBufferAttribute(s,a),go.fromBufferAttribute(s,l),vo.fromBufferAttribute(s,c),u.uv=Tn.getInterpolation(_o,Ms,ws,Ts,mo,go,vo,new Se)),r&&(mo.fromBufferAttribute(r,a),go.fromBufferAttribute(r,l),vo.fromBufferAttribute(r,c),u.uv1=Tn.getInterpolation(_o,Ms,ws,Ts,mo,go,vo,new Se),u.uv2=u.uv1),o&&(kh.fromBufferAttribute(o,a),Bh.fromBufferAttribute(o,l),zh.fromBufferAttribute(o,c),u.normal=Tn.getInterpolation(_o,Ms,ws,Ts,kh,Bh,zh,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};Tn.getNormal(Ms,ws,Ts,h.normal),u.face=h}return u}class $r extends fn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(h,2));function g(v,m,f,M,x,y,w,I,D,U,_){const C=y/D,X=w/U,z=y/2,N=w/2,V=I/2,Y=D+1,Z=U+1;let te=0,J=0;const xe=new O;for(let ge=0;ge<Z;ge++){const Re=ge*X-N;for(let be=0;be<Y;be++){const ie=be*C-z;xe[v]=ie*M,xe[m]=Re*x,xe[f]=V,c.push(xe.x,xe.y,xe.z),xe[v]=0,xe[m]=0,xe[f]=I>0?1:-1,u.push(xe.x,xe.y,xe.z),h.push(be/D),h.push(1-ge/U),te+=1}}for(let ge=0;ge<U;ge++)for(let Re=0;Re<D;Re++){const be=d+Re+Y*ge,ie=d+Re+Y*(ge+1),me=d+(Re+1)+Y*(ge+1),Te=d+(Re+1)+Y*ge;l.push(be,ie,Te),l.push(ie,me,Te),J+=6}a.addGroup(p,J,_),p+=J,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const s in i)e[s]=i[s]}return e}function ux(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ip(t){return t.getRenderTarget()===null?t.outputColorSpace:$n}const Go={clone:qs,merge:qt};var hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hx,this.fragmentShader=dx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=ux(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class sp extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jt extends sp{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ho*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const As=-90,Cs=1;class fx extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new Jt(As,Cs,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new Jt(As,Cs,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Jt(As,Cs,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Jt(As,Cs,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Jt(As,Cs,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Jt(As,Cs,e,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=ai,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,s),e.setRenderTarget(i,1),e.render(n,r),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class rp extends dn{constructor(e,n,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class px extends Dn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ts?je:ns),this.texture=new rp(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $r(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Ai});r.uniforms.tEquirect.value=n;const o=new Tt(s,r),a=n.minFilter;return n.minFilter===Or&&(n.minFilter=vn),new fx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}const el=new O,mx=new O,gx=new et;class Gi{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=el.subVectors(i,n).cross(mx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(el),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gx.getNormalMatrix(e),s=this.coplanarPoint(el).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new wc,yo=new O;class Ac{constructor(e=new Gi,n=new Gi,i=new Gi,s=new Gi,r=new Gi,o=new Gi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7],d=i[8],p=i[9],g=i[10],v=i[11],m=i[12],f=i[13],M=i[14],x=i[15];return n[0].setComponents(a-s,h-l,v-d,x-m).normalize(),n[1].setComponents(a+s,h+l,v+d,x+m).normalize(),n[2].setComponents(a+r,h+c,v+p,x+f).normalize(),n[3].setComponents(a-r,h-c,v-p,x-f).normalize(),n[4].setComponents(a-o,h-u,v-g,x-M).normalize(),n[5].setComponents(a+o,h+u,v+g,x+M).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(yo.x=s.normal.x>0?e.max.x:e.min.x,yo.y=s.normal.y>0?e.max.y:e.min.y,yo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function op(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function vx(t,e){const n=e.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,d=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)g=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=t.SHORT;else if(h instanceof Uint32Array)g=t.UNSIGNED_INT;else if(h instanceof Int32Array)g=t.INT;else if(h instanceof Int8Array)g=t.BYTE;else if(h instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,p=u.updateRange;t.bindBuffer(h,c),p.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Cc extends fn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=n/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const M=f*d-o;for(let x=0;x<c;x++){const y=x*h-r;g.push(y,-M,0),v.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const x=M+c*f,y=M+c*(f+1),w=M+1+c*(f+1),I=M+1+c*f;p.push(x,y,I),p.push(y,w,I)}this.setIndex(p),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.width,e.height,e.widthSegments,e.heightSegments)}}var _x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mx="vec3 transformed = vec3( position );",wx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ax=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Cx=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fx=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,kx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Bx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",$x=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tb=`#ifdef USE_GRADIENTMAP
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
}`,nb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ib=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ob=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,ab=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,lb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,db=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,fb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	vec3 f0 = material.specularColor;
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pb=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,vb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_b=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yb=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Eb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mb=`#if defined( USE_POINTS_UV )
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
#endif`,wb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ab=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Pb=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ib=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ob=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,Fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$b=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Yb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Jb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ey=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ny=`#ifdef USE_SKINNING
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
#endif`,iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ry=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ay=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ly=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,cy=`#ifdef USE_UV
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
#endif`,uy=`#ifdef USE_UV
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
#endif`,hy=`#ifdef USE_UV
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
#endif`,dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,py=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xy=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,by=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Sy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,My=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wy=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ay=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Cy=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Ry=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Ly=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ny=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Oy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,ky=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,zy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`uniform float size;
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
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Wy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,$y=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Xy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qe={alphamap_fragment:_x,alphamap_pars_fragment:xx,alphatest_fragment:bx,alphatest_pars_fragment:yx,aomap_fragment:Sx,aomap_pars_fragment:Ex,begin_vertex:Mx,beginnormal_vertex:wx,bsdfs:Tx,iridescence_fragment:Ax,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Rx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Lx,color_fragment:Dx,color_pars_fragment:Ux,color_pars_vertex:Nx,color_vertex:Ox,common:Fx,cube_uv_reflection_fragment:kx,defaultnormal_vertex:Bx,displacementmap_pars_vertex:zx,displacementmap_vertex:Hx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Gx,encodings_fragment:Wx,encodings_pars_fragment:$x,envmap_fragment:Xx,envmap_common_pars_fragment:jx,envmap_pars_fragment:Kx,envmap_pars_vertex:qx,envmap_physical_pars_fragment:ab,envmap_vertex:Yx,fog_vertex:Zx,fog_pars_vertex:Jx,fog_fragment:Qx,fog_pars_fragment:eb,gradientmap_pars_fragment:tb,lightmap_fragment:nb,lightmap_pars_fragment:ib,lights_lambert_fragment:sb,lights_lambert_pars_fragment:rb,lights_pars_begin:ob,lights_toon_fragment:lb,lights_toon_pars_fragment:cb,lights_phong_fragment:ub,lights_phong_pars_fragment:hb,lights_physical_fragment:db,lights_physical_pars_fragment:fb,lights_fragment_begin:pb,lights_fragment_maps:mb,lights_fragment_end:gb,logdepthbuf_fragment:vb,logdepthbuf_pars_fragment:_b,logdepthbuf_pars_vertex:xb,logdepthbuf_vertex:bb,map_fragment:yb,map_pars_fragment:Sb,map_particle_fragment:Eb,map_particle_pars_fragment:Mb,metalnessmap_fragment:wb,metalnessmap_pars_fragment:Tb,morphcolor_vertex:Ab,morphnormal_vertex:Cb,morphtarget_pars_vertex:Pb,morphtarget_vertex:Rb,normal_fragment_begin:Ib,normal_fragment_maps:Lb,normal_pars_fragment:Db,normal_pars_vertex:Ub,normal_vertex:Nb,normalmap_pars_fragment:Ob,clearcoat_normal_fragment_begin:Fb,clearcoat_normal_fragment_maps:kb,clearcoat_pars_fragment:Bb,iridescence_pars_fragment:zb,output_fragment:Hb,packing:Vb,premultiplied_alpha_fragment:Gb,project_vertex:Wb,dithering_fragment:$b,dithering_pars_fragment:Xb,roughnessmap_fragment:jb,roughnessmap_pars_fragment:Kb,shadowmap_pars_fragment:qb,shadowmap_pars_vertex:Yb,shadowmap_vertex:Zb,shadowmask_pars_fragment:Jb,skinbase_vertex:Qb,skinning_pars_vertex:ey,skinning_vertex:ty,skinnormal_vertex:ny,specularmap_fragment:iy,specularmap_pars_fragment:sy,tonemapping_fragment:ry,tonemapping_pars_fragment:oy,transmission_fragment:ay,transmission_pars_fragment:ly,uv_pars_fragment:cy,uv_pars_vertex:uy,uv_vertex:hy,worldpos_vertex:dy,background_vert:fy,background_frag:py,backgroundCube_vert:my,backgroundCube_frag:gy,cube_vert:vy,cube_frag:_y,depth_vert:xy,depth_frag:by,distanceRGBA_vert:yy,distanceRGBA_frag:Sy,equirect_vert:Ey,equirect_frag:My,linedashed_vert:wy,linedashed_frag:Ty,meshbasic_vert:Ay,meshbasic_frag:Cy,meshlambert_vert:Py,meshlambert_frag:Ry,meshmatcap_vert:Iy,meshmatcap_frag:Ly,meshnormal_vert:Dy,meshnormal_frag:Uy,meshphong_vert:Ny,meshphong_frag:Oy,meshphysical_vert:Fy,meshphysical_frag:ky,meshtoon_vert:By,meshtoon_frag:zy,points_vert:Hy,points_frag:Vy,shadow_vert:Gy,shadow_frag:Wy,sprite_vert:$y,sprite_frag:Xy},Ce={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaTest:{value:0}}},Bn={basic:{uniforms:qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:qt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:qt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:qt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:qt([Ce.points,Ce.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:qt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:qt([Ce.common,Ce.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:qt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:qt([Ce.sprite,Ce.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:qt([Ce.common,Ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:qt([Ce.lights,Ce.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Bn.physical={uniforms:qt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const So={r:0,b:0,g:0};function jy(t,e,n,i,s,r,o){const a=new rt(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(m,f){let M=!1,x=f.isScene===!0?f.background:null;switch(x&&x.isTexture&&(x=(f.backgroundBlurriness>0?n:e).get(x)),x===null?v(a,l):x&&x.isColor&&(v(x,1),M=!0),t.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),M=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),M=!0;break}(t.autoClear||M)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===aa)?(u===void 0&&(u=new Tt(new $r(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:qs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=x.colorSpace!==je,(h!==x||d!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Tt(new Cc(2,2),new nn({name:"BackgroundMaterial",uniforms:qs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=x.colorSpace!==je,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(So,ip(t)),i.buffers.color.setClear(So.r,So.g,So.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function Ky(t,e,n,i){const s=t.getParameter(t.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(V,Y,Z,te,J){let xe=!1;if(o){const ge=v(te,Z,Y);c!==ge&&(c=ge,p(c.object)),xe=f(V,te,Z,J),xe&&M(V,te,Z,J)}else{const ge=Y.wireframe===!0;(c.geometry!==te.id||c.program!==Z.id||c.wireframe!==ge)&&(c.geometry=te.id,c.program=Z.id,c.wireframe=ge,xe=!0)}J!==null&&n.update(J,t.ELEMENT_ARRAY_BUFFER),(xe||u)&&(u=!1,U(V,Y,Z,te),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(J).buffer))}function d(){return i.isWebGL2?t.createVertexArray():r.createVertexArrayOES()}function p(V){return i.isWebGL2?t.bindVertexArray(V):r.bindVertexArrayOES(V)}function g(V){return i.isWebGL2?t.deleteVertexArray(V):r.deleteVertexArrayOES(V)}function v(V,Y,Z){const te=Z.wireframe===!0;let J=a[V.id];J===void 0&&(J={},a[V.id]=J);let xe=J[Y.id];xe===void 0&&(xe={},J[Y.id]=xe);let ge=xe[te];return ge===void 0&&(ge=m(d()),xe[te]=ge),ge}function m(V){const Y=[],Z=[],te=[];for(let J=0;J<s;J++)Y[J]=0,Z[J]=0,te[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:Z,attributeDivisors:te,object:V,attributes:{},index:null}}function f(V,Y,Z,te){const J=c.attributes,xe=Y.attributes;let ge=0;const Re=Z.getAttributes();for(const be in Re)if(Re[be].location>=0){const me=J[be];let Te=xe[be];if(Te===void 0&&(be==="instanceMatrix"&&V.instanceMatrix&&(Te=V.instanceMatrix),be==="instanceColor"&&V.instanceColor&&(Te=V.instanceColor)),me===void 0||me.attribute!==Te||Te&&me.data!==Te.data)return!0;ge++}return c.attributesNum!==ge||c.index!==te}function M(V,Y,Z,te){const J={},xe=Y.attributes;let ge=0;const Re=Z.getAttributes();for(const be in Re)if(Re[be].location>=0){let me=xe[be];me===void 0&&(be==="instanceMatrix"&&V.instanceMatrix&&(me=V.instanceMatrix),be==="instanceColor"&&V.instanceColor&&(me=V.instanceColor));const Te={};Te.attribute=me,me&&me.data&&(Te.data=me.data),J[be]=Te,ge++}c.attributes=J,c.attributesNum=ge,c.index=te}function x(){const V=c.newAttributes;for(let Y=0,Z=V.length;Y<Z;Y++)V[Y]=0}function y(V){w(V,0)}function w(V,Y){const Z=c.newAttributes,te=c.enabledAttributes,J=c.attributeDivisors;Z[V]=1,te[V]===0&&(t.enableVertexAttribArray(V),te[V]=1),J[V]!==Y&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,Y),J[V]=Y)}function I(){const V=c.newAttributes,Y=c.enabledAttributes;for(let Z=0,te=Y.length;Z<te;Z++)Y[Z]!==V[Z]&&(t.disableVertexAttribArray(Z),Y[Z]=0)}function D(V,Y,Z,te,J,xe){i.isWebGL2===!0&&(Z===t.INT||Z===t.UNSIGNED_INT)?t.vertexAttribIPointer(V,Y,Z,J,xe):t.vertexAttribPointer(V,Y,Z,te,J,xe)}function U(V,Y,Z,te){if(i.isWebGL2===!1&&(V.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const J=te.attributes,xe=Z.getAttributes(),ge=Y.defaultAttributeValues;for(const Re in xe){const be=xe[Re];if(be.location>=0){let ie=J[Re];if(ie===void 0&&(Re==="instanceMatrix"&&V.instanceMatrix&&(ie=V.instanceMatrix),Re==="instanceColor"&&V.instanceColor&&(ie=V.instanceColor)),ie!==void 0){const me=ie.normalized,Te=ie.itemSize,Ee=n.get(ie);if(Ee===void 0)continue;const A=Ee.buffer,fe=Ee.type,ae=Ee.bytesPerElement;if(ie.isInterleavedBufferAttribute){const Q=ie.data,Me=Q.stride,S=ie.offset;if(Q.isInstancedInterleavedBuffer){for(let E=0;E<be.locationSize;E++)w(be.location+E,Q.meshPerAttribute);V.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let E=0;E<be.locationSize;E++)y(be.location+E);t.bindBuffer(t.ARRAY_BUFFER,A);for(let E=0;E<be.locationSize;E++)D(be.location+E,Te/be.locationSize,fe,me,Me*ae,(S+Te/be.locationSize*E)*ae)}else{if(ie.isInstancedBufferAttribute){for(let Q=0;Q<be.locationSize;Q++)w(be.location+Q,ie.meshPerAttribute);V.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Q=0;Q<be.locationSize;Q++)y(be.location+Q);t.bindBuffer(t.ARRAY_BUFFER,A);for(let Q=0;Q<be.locationSize;Q++)D(be.location+Q,Te/be.locationSize,fe,me,Te*ae,Te/be.locationSize*Q*ae)}}else if(ge!==void 0){const me=ge[Re];if(me!==void 0)switch(me.length){case 2:t.vertexAttrib2fv(be.location,me);break;case 3:t.vertexAttrib3fv(be.location,me);break;case 4:t.vertexAttrib4fv(be.location,me);break;default:t.vertexAttrib1fv(be.location,me)}}}}I()}function _(){z();for(const V in a){const Y=a[V];for(const Z in Y){const te=Y[Z];for(const J in te)g(te[J].object),delete te[J];delete Y[Z]}delete a[V]}}function C(V){if(a[V.id]===void 0)return;const Y=a[V.id];for(const Z in Y){const te=Y[Z];for(const J in te)g(te[J].object),delete te[J];delete Y[Z]}delete a[V.id]}function X(V){for(const Y in a){const Z=a[Y];if(Z[V.id]===void 0)continue;const te=Z[V.id];for(const J in te)g(te[J].object),delete te[J];delete Z[V.id]}}function z(){N(),u=!0,c!==l&&(c=l,p(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:N,dispose:_,releaseStatesOfGeometry:C,releaseStatesOfProgram:X,initAttributes:x,enableAttribute:y,disableUnusedAttributes:I}}function qy(t,e,n,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,u){t.drawArrays(r,c,u),n.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,p;if(s)d=t,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,u,h),n.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Yy(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=o||e.has("OES_texture_float"),w=x&&y,I=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:I}}function Zy(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Gi,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,x=M*4;let y=f.clippingState||null;l.value=y,y=u(g,d,x,p);for(let w=0;w!==x;++w)y[w]=n[w];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==v;++x,y+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Jy(t){let e=new WeakMap;function n(o,a){return a===Nl?o.mapping=Xs:a===Ol&&(o.mapping=js),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Nl||a===Ol)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new px(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class ap extends sp{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=4,Hh=[.125,.215,.35,.446,.526,.582],Ki=20,tl=new ap,Vh=new rt;let nl=null;const Wi=(1+Math.sqrt(5))/2,Ps=1/Wi,Gh=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Wi,Ps),new O(0,Wi,-Ps),new O(Ps,0,Wi),new O(-Ps,0,Wi),new O(Wi,Ps,0),new O(-Wi,Ps,0)];class Wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){nl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nl),e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nl=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Fr,format:Pn,colorSpace:$n,depthBuffer:!1},s=$h(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qy(r)),this._blurMaterial=e1(r,e,n)}return s}_compileMaterial(e){const n=new Tt(this._lodPlanes[0],e);this._renderer.compile(n,tl)}_sceneToCubeUV(e,n,i,s){const a=new Jt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Vh),u.toneMapping=ai,u.autoClear=!1;const p=new Ei({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new Tt(new $r,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Vh),v=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;Eo(s,M*x,f>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Xs||e.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Eo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,tl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gh[(s-1)%Gh.length];this._blur(e,s-1,s,r,o)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Tt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ki-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const f=[];let M=0;for(let D=0;D<Ki;++D){const U=D/v,_=Math.exp(-U*U/2);f.push(_),D===0?M+=_:D<m&&(M+=2*_)}for(let D=0;D<f.length;D++)f[D]=f[D]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const y=this._sizeLods[s],w=3*y*(s>x-Ds?s-x+Ds:0),I=4*(this._cubeSize-y);Eo(n,w,I,3*y,2*y),l.setRenderTarget(n),l.render(h,tl)}}function Qy(t){const e=[],n=[],i=[];let s=t;const r=t-Ds+1+Hh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-Ds?l=Hh[o-t+Ds-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,f=1,M=new Float32Array(v*g*p),x=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let I=0;I<p;I++){const D=I%3*2/3-1,U=I>2?0:-1,_=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];M.set(_,v*g*I),x.set(d,m*g*I);const C=[I,I,I,I,I,I];y.set(C,f*g*I)}const w=new fn;w.setAttribute("position",new Hn(M,v)),w.setAttribute("uv",new Hn(x,m)),w.setAttribute("faceIndex",new Hn(y,f)),e.push(w),s>Ds&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function $h(t,e,n){const i=new Dn(t,e,n);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Eo(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function e1(t,e,n){const i=new Float32Array(Ki),s=new O(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Xh(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function jh(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nl||l===Ol,u=l===Xs||l===js;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Wh(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){n===null&&(n=new Wh(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function n1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function i1(t,e,n,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const M=p.array;v=p.version;for(let x=0,y=M.length;x<y;x+=3){const w=M[x+0],I=M[x+1],D=M[x+2];d.push(w,I,I,D,D,w)}}else{const M=g.array;v=g.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const w=x+0,I=x+1,D=x+2;d.push(w,I,I,D,D,w)}}const m=new(Yf(d)?np:tp)(d,1);m.version=v;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function s1(t,e,n,i){const s=i.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){t.drawElements(r,p,a,d*l),n.update(p,r,1)}function h(d,p,g){if(g===0)return;let v,m;if(s)v=t,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](r,p,a,d*l,g),n.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function r1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function o1(t,e){return t[0]-e[0]}function a1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function l1(t,e,n){const i={},s=new Float32Array(8),r=new WeakMap,o=new pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==v){let Y=function(){N.dispose(),r.delete(u),u.removeEventListener("dispose",Y)};var p=Y;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let _=0;x===!0&&(_=1),y===!0&&(_=2),w===!0&&(_=3);let C=u.attributes.position.count*_,X=1;C>e.maxTextureSize&&(X=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const z=new Float32Array(C*X*4*v),N=new Qf(z,C,X,v);N.type=Zi,N.needsUpdate=!0;const V=_*4;for(let Z=0;Z<v;Z++){const te=I[Z],J=D[Z],xe=U[Z],ge=C*X*4*Z;for(let Re=0;Re<te.count;Re++){const be=Re*V;x===!0&&(o.fromBufferAttribute(te,Re),z[ge+be+0]=o.x,z[ge+be+1]=o.y,z[ge+be+2]=o.z,z[ge+be+3]=0),y===!0&&(o.fromBufferAttribute(J,Re),z[ge+be+4]=o.x,z[ge+be+5]=o.y,z[ge+be+6]=o.z,z[ge+be+7]=0),w===!0&&(o.fromBufferAttribute(xe,Re),z[ge+be+8]=o.x,z[ge+be+9]=o.y,z[ge+be+10]=o.z,z[ge+be+11]=xe.itemSize===4?o.w:1)}}m={count:v,texture:N,size:new Se(C,X)},r.set(u,m),u.addEventListener("dispose",Y)}let f=0;for(let x=0;x<d.length;x++)f+=d[x];const M=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(t,"morphTargetBaseInfluence",M),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==g){v=[];for(let y=0;y<g;y++)v[y]=[y,0];i[u.id]=v}for(let y=0;y<g;y++){const w=v[y];w[0]=y,w[1]=d[y]}v.sort(a1);for(let y=0;y<8;y++)y<g&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(o1);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const w=a[y],I=w[0],D=w[1];I!==Number.MAX_SAFE_INTEGER&&D?(m&&u.getAttribute("morphTarget"+y)!==m[I]&&u.setAttribute("morphTarget"+y,m[I]),f&&u.getAttribute("morphNormal"+y)!==f[I]&&u.setAttribute("morphNormal"+y,f[I]),s[y]=D,M+=D):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),f&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),s[y]=0)}const x=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(t,"morphTargetBaseInfluence",x),h.getUniforms().setValue(t,"morphTargetInfluences",s)}}return{update:l}}function c1(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);return s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const lp=new dn,cp=new Qf,up=new J0,hp=new rp,Kh=[],qh=[],Yh=new Float32Array(16),Zh=new Float32Array(9),Jh=new Float32Array(4);function nr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Kh[s];if(r===void 0&&(r=new Float32Array(s),Kh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ca(t,e){let n=qh[e];n===void 0&&(n=new Int32Array(e),qh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function u1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function h1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function d1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function f1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function p1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(It(n,i))return;Jh.set(i),t.uniformMatrix2fv(this.addr,!1,Jh),Lt(n,i)}}function m1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(It(n,i))return;Zh.set(i),t.uniformMatrix3fv(this.addr,!1,Zh),Lt(n,i)}}function g1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(It(n,i))return;Yh.set(i),t.uniformMatrix4fv(this.addr,!1,Yh),Lt(n,i)}}function v1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function x1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function b1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function y1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function E1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function w1(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2D(e||lp,s)}function T1(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||up,s)}function A1(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||hp,s)}function C1(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||cp,s)}function P1(t){switch(t){case 5126:return u1;case 35664:return h1;case 35665:return d1;case 35666:return f1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return v1;case 35667:case 35671:return _1;case 35668:case 35672:return x1;case 35669:case 35673:return b1;case 5125:return y1;case 36294:return S1;case 36295:return E1;case 36296:return M1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return C1}}function R1(t,e){t.uniform1fv(this.addr,e)}function I1(t,e){const n=nr(e,this.size,2);t.uniform2fv(this.addr,n)}function L1(t,e){const n=nr(e,this.size,3);t.uniform3fv(this.addr,n)}function D1(t,e){const n=nr(e,this.size,4);t.uniform4fv(this.addr,n)}function U1(t,e){const n=nr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function N1(t,e){const n=nr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function O1(t,e){const n=nr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function F1(t,e){t.uniform1iv(this.addr,e)}function k1(t,e){t.uniform2iv(this.addr,e)}function B1(t,e){t.uniform3iv(this.addr,e)}function z1(t,e){t.uniform4iv(this.addr,e)}function H1(t,e){t.uniform1uiv(this.addr,e)}function V1(t,e){t.uniform2uiv(this.addr,e)}function G1(t,e){t.uniform3uiv(this.addr,e)}function W1(t,e){t.uniform4uiv(this.addr,e)}function $1(t,e,n){const i=this.cache,s=e.length,r=ca(n,s);It(i,r)||(t.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||lp,r[o])}function X1(t,e,n){const i=this.cache,s=e.length,r=ca(n,s);It(i,r)||(t.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||up,r[o])}function j1(t,e,n){const i=this.cache,s=e.length,r=ca(n,s);It(i,r)||(t.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||hp,r[o])}function K1(t,e,n){const i=this.cache,s=e.length,r=ca(n,s);It(i,r)||(t.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||cp,r[o])}function q1(t){switch(t){case 5126:return R1;case 35664:return I1;case 35665:return L1;case 35666:return D1;case 35674:return U1;case 35675:return N1;case 35676:return O1;case 5124:case 35670:return F1;case 35667:case 35671:return k1;case 35668:case 35672:return B1;case 35669:case 35673:return z1;case 5125:return H1;case 36294:return V1;case 36295:return G1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return K1}}class Y1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=P1(n.type)}}class Z1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=q1(n.type)}}class J1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const il=/(\w+)(\])?(\[|\.)?/g;function Qh(t,e){t.seq.push(e),t.map[e.id]=e}function Q1(t,e,n){const i=t.name,s=i.length;for(il.lastIndex=0;;){const r=il.exec(i),o=il.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Qh(n,c===void 0?new Y1(a,t,e):new Z1(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new J1(a),Qh(n,h)),n=h}}}class Lo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);Q1(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function ed(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let eS=0;function tS(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function nS(t){switch(t){case $n:return["Linear","( value )"];case je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function td(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+tS(t.getShaderSource(e),o)}else return s}function iS(t,e){const n=nS(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function sS(t,e){let n;switch(e){case _0:n="Linear";break;case x0:n="Reinhard";break;case b0:n="OptimizedCineon";break;case y0:n="ACESFilmic";break;case S0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function rS(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gr).join(`
`)}function oS(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function aS(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function gr(t){return t!==""}function nd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function id(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lS=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(t){return t.replace(lS,cS)}function cS(t,e){const n=qe[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return zl(n)}const uS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(t){return t.replace(uS,hS)}function hS(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rd(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dS(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Vf?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Y_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function fS(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xs:case js:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pS(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function mS(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Mc:e="ENVMAP_BLENDING_MULTIPLY";break;case g0:e="ENVMAP_BLENDING_MIX";break;case v0:e="ENVMAP_BLENDING_ADD";break}return e}function gS(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vS(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=dS(n),c=fS(n),u=pS(n),h=mS(n),d=gS(n),p=n.isWebGL2?"":rS(n),g=oS(r),v=s.createProgram();let m,f,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[g].filter(gr).join(`
`),m.length>0&&(m+=`
`),f=[p,g].filter(gr).join(`
`),f.length>0&&(f+=`
`)):(m=[rd(n),"#define SHADER_NAME "+n.shaderName,g,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),f=[p,rd(n),"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ai?"#define TONE_MAPPING":"",n.toneMapping!==ai?qe.tonemapping_pars_fragment:"",n.toneMapping!==ai?sS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.encodings_pars_fragment,iS("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gr).join(`
`)),o=zl(o),o=nd(o,n),o=id(o,n),a=zl(a),a=nd(a,n),a=id(a,n),o=sd(o),a=sd(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=M+m+o,y=M+f+a,w=ed(s,s.VERTEX_SHADER,x),I=ed(s,s.FRAGMENT_SHADER,y);if(s.attachShader(v,w),s.attachShader(v,I),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v),t.debug.checkShaderErrors){const _=s.getProgramInfoLog(v).trim(),C=s.getShaderInfoLog(w).trim(),X=s.getShaderInfoLog(I).trim();let z=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,w,I);else{const V=td(s,w,"vertex"),Y=td(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Program Info Log: `+_+`
`+V+`
`+Y)}else _!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_):(C===""||X==="")&&(N=!1);N&&(this.diagnostics={runnable:z,programLog:_,vertexShader:{log:C,prefix:m},fragmentShader:{log:X,prefix:f}})}s.deleteShader(w),s.deleteShader(I);let D;this.getUniforms=function(){return D===void 0&&(D=new Lo(s,v)),D};let U;return this.getAttributes=function(){return U===void 0&&(U=aS(s,v)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.name=n.shaderName,this.id=eS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=I,this}let _S=0;class xS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bS(e),n.set(e,i)),i}}class bS{constructor(e){this.id=_S++,this.code=e,this.usedTimes=0}}function yS(t,e,n,i,s,r,o){const a=new Tc,l=new xS,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return _===1?"uv1":_===2?"uv2":_===3?"uv3":"uv"}function m(_,C,X,z,N){const V=z.fog,Y=N.geometry,Z=_.isMeshStandardMaterial?z.environment:null,te=(_.isMeshStandardMaterial?n:e).get(_.envMap||Z),J=te&&te.mapping===aa?te.image.height:null,xe=g[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const ge=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Re=ge!==void 0?ge.length:0;let be=0;Y.morphAttributes.position!==void 0&&(be=1),Y.morphAttributes.normal!==void 0&&(be=2),Y.morphAttributes.color!==void 0&&(be=3);let ie,me,Te,Ee;if(xe){const ct=Bn[xe];ie=ct.vertexShader,me=ct.fragmentShader}else ie=_.vertexShader,me=_.fragmentShader,l.update(_),Te=l.getVertexShaderID(_),Ee=l.getFragmentShaderID(_);const A=t.getRenderTarget(),fe=N.isInstancedMesh===!0,ae=!!_.map,Q=!!_.matcap,Me=!!te,S=!!_.aoMap,E=!!_.lightMap,R=!!_.bumpMap,B=!!_.normalMap,k=!!_.displacementMap,K=!!_.emissiveMap,le=!!_.metalnessMap,ne=!!_.roughnessMap,de=_.clearcoat>0,oe=_.iridescence>0,T=_.sheen>0,b=_.transmission>0,F=de&&!!_.clearcoatMap,ee=de&&!!_.clearcoatNormalMap,re=de&&!!_.clearcoatRoughnessMap,_e=oe&&!!_.iridescenceMap,L=oe&&!!_.iridescenceThicknessMap,se=T&&!!_.sheenColorMap,j=T&&!!_.sheenRoughnessMap,Ae=!!_.specularMap,Le=!!_.specularColorMap,Ne=!!_.specularIntensityMap,Ie=b&&!!_.transmissionMap,Pe=b&&!!_.thicknessMap,Be=!!_.gradientMap,$e=!!_.alphaMap,yt=_.alphaTest>0,H=!!_.extensions,ce=!!Y.attributes.uv1,ye=!!Y.attributes.uv2,De=!!Y.attributes.uv3;return{isWebGL2:u,shaderID:xe,shaderName:_.type,vertexShader:ie,fragmentShader:me,defines:_.defines,customVertexShaderID:Te,customFragmentShaderID:Ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,instancing:fe,instancingColor:fe&&N.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:A===null?t.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:$n,map:ae,matcap:Q,envMap:Me,envMapMode:Me&&te.mapping,envMapCubeUVHeight:J,aoMap:S,lightMap:E,bumpMap:R,normalMap:B,displacementMap:d&&k,emissiveMap:K,normalMapObjectSpace:B&&_.normalMapType===H0,normalMapTangentSpace:B&&_.normalMapType===Kf,metalnessMap:le,roughnessMap:ne,clearcoat:de,clearcoatMap:F,clearcoatNormalMap:ee,clearcoatRoughnessMap:re,iridescence:oe,iridescenceMap:_e,iridescenceThicknessMap:L,sheen:T,sheenColorMap:se,sheenRoughnessMap:j,specularMap:Ae,specularColorMap:Le,specularIntensityMap:Ne,transmission:b,transmissionMap:Ie,thicknessMap:Pe,gradientMap:Be,opaque:_.transparent===!1&&_.blending===ks,alphaMap:$e,alphaTest:yt,combine:_.combine,mapUv:ae&&v(_.map.channel),aoMapUv:S&&v(_.aoMap.channel),lightMapUv:E&&v(_.lightMap.channel),bumpMapUv:R&&v(_.bumpMap.channel),normalMapUv:B&&v(_.normalMap.channel),displacementMapUv:k&&v(_.displacementMap.channel),emissiveMapUv:K&&v(_.emissiveMap.channel),metalnessMapUv:le&&v(_.metalnessMap.channel),roughnessMapUv:ne&&v(_.roughnessMap.channel),clearcoatMapUv:F&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ee&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:L&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:se&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:j&&v(_.sheenRoughnessMap.channel),specularMapUv:Ae&&v(_.specularMap.channel),specularColorMapUv:Le&&v(_.specularColorMap.channel),specularIntensityMapUv:Ne&&v(_.specularIntensityMap.channel),transmissionMapUv:Ie&&v(_.transmissionMap.channel),thicknessMapUv:Pe&&v(_.thicknessMap.channel),alphaMapUv:$e&&v(_.alphaMap.channel),vertexTangents:B&&!!Y.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:ye,vertexUv3s:De,pointsUvs:N.isPoints===!0&&!!Y.attributes.uv&&(ae||$e),fog:!!V,useFog:_.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:be,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:_.toneMapped?t.toneMapping:ai,useLegacyLights:t.useLegacyLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ri,flipSided:_.side===sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:H&&_.extensions.derivatives===!0,extensionFragDepth:H&&_.extensions.fragDepth===!0,extensionDrawBuffers:H&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:H&&_.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function f(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const X in _.defines)C.push(X),C.push(_.defines[X]);return _.isRawShaderMaterial===!1&&(M(C,_),x(C,_),C.push(t.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function M(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function x(_,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),_.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),_.push(a.mask)}function y(_){const C=g[_.type];let X;if(C){const z=Bn[C];X=Go.clone(z.uniforms)}else X=_.uniforms;return X}function w(_,C){let X;for(let z=0,N=c.length;z<N;z++){const V=c[z];if(V.cacheKey===C){X=V,++X.usedTimes;break}}return X===void 0&&(X=new vS(t,C,_,r),c.push(X)),X}function I(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),_.destroy()}}function D(_){l.remove(_)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:w,releaseProgram:I,releaseShaderCache:D,programs:c,dispose:U}}function SS(){let t=new WeakMap;function e(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,a){t.get(r)[o]=a}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function ES(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function od(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ad(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(h,d,p,g,v,m){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function a(h,d,p,g,v,m){const f=o(h,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):n.push(f)}function l(h,d,p,g,v,m){const f=o(h,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||ES),i.length>1&&i.sort(d||od),s.length>1&&s.sort(d||od)}function u(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function MS(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new ad,t.set(i,[o])):s>=r.length?(o=new ad,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function wS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new rt};break;case"SpotLight":n={position:new O,direction:new O,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function TS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let AS=0;function CS(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function PS(t,e){const n=new wS,i=TS(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new O);const r=new O,o=new Et,a=new Et;function l(u,h){let d=0,p=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let v=0,m=0,f=0,M=0,x=0,y=0,w=0,I=0,D=0,U=0;u.sort(CS);const _=h===!0?Math.PI:1;for(let X=0,z=u.length;X<z;X++){const N=u[X],V=N.color,Y=N.intensity,Z=N.distance,te=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=V.r*Y*_,p+=V.g*Y*_,g+=V.b*Y*_;else if(N.isLightProbe)for(let J=0;J<9;J++)s.probe[J].addScaledVector(N.sh.coefficients[J],Y);else if(N.isDirectionalLight){const J=n.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity*_),N.castShadow){const xe=N.shadow,ge=i.get(N);ge.shadowBias=xe.bias,ge.shadowNormalBias=xe.normalBias,ge.shadowRadius=xe.radius,ge.shadowMapSize=xe.mapSize,s.directionalShadow[v]=ge,s.directionalShadowMap[v]=te,s.directionalShadowMatrix[v]=N.shadow.matrix,y++}s.directional[v]=J,v++}else if(N.isSpotLight){const J=n.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(V).multiplyScalar(Y*_),J.distance=Z,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,s.spot[f]=J;const xe=N.shadow;if(N.map&&(s.spotLightMap[D]=N.map,D++,xe.updateMatrices(N),N.castShadow&&U++),s.spotLightMatrix[f]=xe.matrix,N.castShadow){const ge=i.get(N);ge.shadowBias=xe.bias,ge.shadowNormalBias=xe.normalBias,ge.shadowRadius=xe.radius,ge.shadowMapSize=xe.mapSize,s.spotShadow[f]=ge,s.spotShadowMap[f]=te,I++}f++}else if(N.isRectAreaLight){const J=n.get(N);J.color.copy(V).multiplyScalar(Y),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),s.rectArea[M]=J,M++}else if(N.isPointLight){const J=n.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity*_),J.distance=N.distance,J.decay=N.decay,N.castShadow){const xe=N.shadow,ge=i.get(N);ge.shadowBias=xe.bias,ge.shadowNormalBias=xe.normalBias,ge.shadowRadius=xe.radius,ge.shadowMapSize=xe.mapSize,ge.shadowCameraNear=xe.camera.near,ge.shadowCameraFar=xe.camera.far,s.pointShadow[m]=ge,s.pointShadowMap[m]=te,s.pointShadowMatrix[m]=N.shadow.matrix,w++}s.point[m]=J,m++}else if(N.isHemisphereLight){const J=n.get(N);J.skyColor.copy(N.color).multiplyScalar(Y*_),J.groundColor.copy(N.groundColor).multiplyScalar(Y*_),s.hemi[x]=J,x++}}M>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;const C=s.hash;(C.directionalLength!==v||C.pointLength!==m||C.spotLength!==f||C.rectAreaLength!==M||C.hemiLength!==x||C.numDirectionalShadows!==y||C.numPointShadows!==w||C.numSpotShadows!==I||C.numSpotMaps!==D)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=M,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=I+D-U,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=U,C.directionalLength=v,C.pointLength=m,C.spotLength=f,C.rectAreaLength=M,C.hemiLength=x,C.numDirectionalShadows=y,C.numPointShadows=w,C.numSpotShadows=I,C.numSpotMaps=D,s.version=AS++)}function c(u,h){let d=0,p=0,g=0,v=0,m=0;const f=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const y=u[M];if(y.isDirectionalLight){const w=s.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),d++}else if(y.isSpotLight){const w=s.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const w=s.rectArea[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const w=s.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const w=s.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function ld(t,e){const n=new PS(t,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function RS(t,e){let n=new WeakMap;function i(r,o=0){const a=n.get(r);let l;return a===void 0?(l=new ld(t,e),n.set(r,[l])):o>=a.length?(l=new ld(t,e),a.push(l)):l=a[o],l}function s(){n=new WeakMap}return{get:i,dispose:s}}class IS extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LS extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const DS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,US=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NS(t,e,n){let i=new Ac;const s=new Se,r=new Se,o=new pt,a=new IS({depthPacking:z0}),l=new LS,c={},u=n.maxTextureSize,h={[Ri]:sn,[sn]:Ri,[ri]:ri},d=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:DS,fragmentShader:US}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new fn;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Tt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vf;let f=this.type;this.render=function(w,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const U=t.getRenderTarget(),_=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),X=t.state;X.setBlending(Ai),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const z=f!==ii&&this.type===ii,N=f===ii&&this.type!==ii;for(let V=0,Y=w.length;V<Y;V++){const Z=w[V],te=Z.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;s.copy(te.mapSize);const J=te.getFrameExtents();if(s.multiply(J),r.copy(te.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,te.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,te.mapSize.y=r.y)),te.map===null||z===!0||N===!0){const ge=this.type!==ii?{minFilter:Zt,magFilter:Zt}:{};te.map!==null&&te.map.dispose(),te.map=new Dn(s.x,s.y,ge),te.map.texture.name=Z.name+".shadowMap",te.camera.updateProjectionMatrix()}t.setRenderTarget(te.map),t.clear();const xe=te.getViewportCount();for(let ge=0;ge<xe;ge++){const Re=te.getViewport(ge);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),X.viewport(o),te.updateMatrices(Z,ge),i=te.getFrustum(),y(I,D,te.camera,Z,this.type)}te.isPointLightShadow!==!0&&this.type===ii&&M(te,D),te.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(U,_,C)};function M(w,I){const D=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Dn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(I,null,D,d,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(I,null,D,p,v,null)}function x(w,I,D,U){let _=null;const C=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)_=C;else if(_=D.isPointLight===!0?l:a,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const X=_.uuid,z=I.uuid;let N=c[X];N===void 0&&(N={},c[X]=N);let V=N[z];V===void 0&&(V=_.clone(),N[z]=V),_=V}if(_.visible=I.visible,_.wireframe=I.wireframe,U===ii?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:h[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const X=t.properties.get(_);X.light=D}return _}function y(w,I,D,U,_){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===ii)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const z=e.update(w),N=w.material;if(Array.isArray(N)){const V=z.groups;for(let Y=0,Z=V.length;Y<Z;Y++){const te=V[Y],J=N[te.materialIndex];if(J&&J.visible){const xe=x(w,J,U,_);t.renderBufferDirect(D,null,z,xe,w,te)}}}else if(N.visible){const V=x(w,N,U,_);t.renderBufferDirect(D,null,z,V,w,null)}}const X=w.children;for(let z=0,N=X.length;z<N;z++)y(X[z],I,D,U,_)}}function OS(t,e,n){const i=n.isWebGL2;function s(){let H=!1;const ce=new pt;let ye=null;const De=new pt(0,0,0,0);return{setMask:function(Fe){ye!==Fe&&!H&&(t.colorMask(Fe,Fe,Fe,Fe),ye=Fe)},setLocked:function(Fe){H=Fe},setClear:function(Fe,ct,ut,Bt,ui){ui===!0&&(Fe*=Bt,ct*=Bt,ut*=Bt),ce.set(Fe,ct,ut,Bt),De.equals(ce)===!1&&(t.clearColor(Fe,ct,ut,Bt),De.copy(ce))},reset:function(){H=!1,ye=null,De.set(-1,0,0,0)}}}function r(){let H=!1,ce=null,ye=null,De=null;return{setTest:function(Fe){Fe?A(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(Fe){ce!==Fe&&!H&&(t.depthMask(Fe),ce=Fe)},setFunc:function(Fe){if(ye!==Fe){switch(Fe){case c0:t.depthFunc(t.NEVER);break;case u0:t.depthFunc(t.ALWAYS);break;case h0:t.depthFunc(t.LESS);break;case Ul:t.depthFunc(t.LEQUAL);break;case d0:t.depthFunc(t.EQUAL);break;case f0:t.depthFunc(t.GEQUAL);break;case p0:t.depthFunc(t.GREATER);break;case m0:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=Fe}},setLocked:function(Fe){H=Fe},setClear:function(Fe){De!==Fe&&(t.clearDepth(Fe),De=Fe)},reset:function(){H=!1,ce=null,ye=null,De=null}}}function o(){let H=!1,ce=null,ye=null,De=null,Fe=null,ct=null,ut=null,Bt=null,ui=null;return{setTest:function(St){H||(St?A(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(St){ce!==St&&!H&&(t.stencilMask(St),ce=St)},setFunc:function(St,pn,Nn){(ye!==St||De!==pn||Fe!==Nn)&&(t.stencilFunc(St,pn,Nn),ye=St,De=pn,Fe=Nn)},setOp:function(St,pn,Nn){(ct!==St||ut!==pn||Bt!==Nn)&&(t.stencilOp(St,pn,Nn),ct=St,ut=pn,Bt=Nn)},setLocked:function(St){H=St},setClear:function(St){ui!==St&&(t.clearStencil(St),ui=St)},reset:function(){H=!1,ce=null,ye=null,De=null,Fe=null,ct=null,ut=null,Bt=null,ui=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,v=[],m=null,f=!1,M=null,x=null,y=null,w=null,I=null,D=null,U=null,_=!1,C=null,X=null,z=null,N=null,V=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,te=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=te>=1):J.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=te>=2);let xe=null,ge={};const Re=t.getParameter(t.SCISSOR_BOX),be=t.getParameter(t.VIEWPORT),ie=new pt().fromArray(Re),me=new pt().fromArray(be);function Te(H,ce,ye,De){const Fe=new Uint8Array(4),ct=t.createTexture();t.bindTexture(H,ct),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ut=0;ut<ye;ut++)i&&(H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,Fe):t.texImage2D(ce+ut,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Fe);return ct}const Ee={};Ee[t.TEXTURE_2D]=Te(t.TEXTURE_2D,t.TEXTURE_2D,1),Ee[t.TEXTURE_CUBE_MAP]=Te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ee[t.TEXTURE_2D_ARRAY]=Te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ee[t.TEXTURE_3D]=Te(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),A(t.DEPTH_TEST),l.setFunc(Ul),k(!1),K(Ku),A(t.CULL_FACE),R(Ai);function A(H){d[H]!==!0&&(t.enable(H),d[H]=!0)}function fe(H){d[H]!==!1&&(t.disable(H),d[H]=!1)}function ae(H,ce){return p[H]!==ce?(t.bindFramebuffer(H,ce),p[H]=ce,i&&(H===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ce),H===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function Q(H,ce){let ye=v,De=!1;if(H)if(ye=g.get(ce),ye===void 0&&(ye=[],g.set(ce,ye)),H.isWebGLMultipleRenderTargets){const Fe=H.texture;if(ye.length!==Fe.length||ye[0]!==t.COLOR_ATTACHMENT0){for(let ct=0,ut=Fe.length;ct<ut;ct++)ye[ct]=t.COLOR_ATTACHMENT0+ct;ye.length=Fe.length,De=!0}}else ye[0]!==t.COLOR_ATTACHMENT0&&(ye[0]=t.COLOR_ATTACHMENT0,De=!0);else ye[0]!==t.BACK&&(ye[0]=t.BACK,De=!0);De&&(n.isWebGL2?t.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function Me(H){return m!==H?(t.useProgram(H),m=H,!0):!1}const S={[Ls]:t.FUNC_ADD,[J_]:t.FUNC_SUBTRACT,[Q_]:t.FUNC_REVERSE_SUBTRACT};if(i)S[Zu]=t.MIN,S[Ju]=t.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(S[Zu]=H.MIN_EXT,S[Ju]=H.MAX_EXT)}const E={[e0]:t.ZERO,[t0]:t.ONE,[n0]:t.SRC_COLOR,[Gf]:t.SRC_ALPHA,[l0]:t.SRC_ALPHA_SATURATE,[o0]:t.DST_COLOR,[s0]:t.DST_ALPHA,[i0]:t.ONE_MINUS_SRC_COLOR,[Wf]:t.ONE_MINUS_SRC_ALPHA,[a0]:t.ONE_MINUS_DST_COLOR,[r0]:t.ONE_MINUS_DST_ALPHA};function R(H,ce,ye,De,Fe,ct,ut,Bt){if(H===Ai){f===!0&&(fe(t.BLEND),f=!1);return}if(f===!1&&(A(t.BLEND),f=!0),H!==Z_){if(H!==M||Bt!==_){if((x!==Ls||I!==Ls)&&(t.blendEquation(t.FUNC_ADD),x=Ls,I=Ls),Bt)switch(H){case ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dl:t.blendFunc(t.ONE,t.ONE);break;case qu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case qu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}y=null,w=null,D=null,U=null,M=H,_=Bt}return}Fe=Fe||ce,ct=ct||ye,ut=ut||De,(ce!==x||Fe!==I)&&(t.blendEquationSeparate(S[ce],S[Fe]),x=ce,I=Fe),(ye!==y||De!==w||ct!==D||ut!==U)&&(t.blendFuncSeparate(E[ye],E[De],E[ct],E[ut]),y=ye,w=De,D=ct,U=ut),M=H,_=!1}function B(H,ce){H.side===ri?fe(t.CULL_FACE):A(t.CULL_FACE);let ye=H.side===sn;ce&&(ye=!ye),k(ye),H.blending===ks&&H.transparent===!1?R(Ai):R(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);const De=H.stencilWrite;c.setTest(De),De&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ne(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?A(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function k(H){C!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),C=H)}function K(H){H!==K_?(A(t.CULL_FACE),H!==X&&(H===Ku?t.cullFace(t.BACK):H===q_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),X=H}function le(H){H!==z&&(Z&&t.lineWidth(H),z=H)}function ne(H,ce,ye){H?(A(t.POLYGON_OFFSET_FILL),(N!==ce||V!==ye)&&(t.polygonOffset(ce,ye),N=ce,V=ye)):fe(t.POLYGON_OFFSET_FILL)}function de(H){H?A(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function oe(H){H===void 0&&(H=t.TEXTURE0+Y-1),xe!==H&&(t.activeTexture(H),xe=H)}function T(H,ce,ye){ye===void 0&&(xe===null?ye=t.TEXTURE0+Y-1:ye=xe);let De=ge[ye];De===void 0&&(De={type:void 0,texture:void 0},ge[ye]=De),(De.type!==H||De.texture!==ce)&&(xe!==ye&&(t.activeTexture(ye),xe=ye),t.bindTexture(H,ce||Ee[H]),De.type=H,De.texture=ce)}function b(){const H=ge[xe];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function F(){try{t.compressedTexImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{t.texSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function L(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function j(){try{t.texStorage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{t.texStorage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{t.texImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{t.texImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(H){ie.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),ie.copy(H))}function Pe(H){me.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),me.copy(H))}function Be(H,ce){let ye=h.get(ce);ye===void 0&&(ye=new WeakMap,h.set(ce,ye));let De=ye.get(H);De===void 0&&(De=t.getUniformBlockIndex(ce,H.name),ye.set(H,De))}function $e(H,ce){const De=h.get(ce).get(H);u.get(ce)!==De&&(t.uniformBlockBinding(ce,De,H.__bindingPointIndex),u.set(ce,De))}function yt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},xe=null,ge={},p={},g=new WeakMap,v=[],m=null,f=!1,M=null,x=null,y=null,w=null,I=null,D=null,U=null,_=!1,C=null,X=null,z=null,N=null,V=null,ie.set(0,0,t.canvas.width,t.canvas.height),me.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:A,disable:fe,bindFramebuffer:ae,drawBuffers:Q,useProgram:Me,setBlending:R,setMaterial:B,setFlipSided:k,setCullFace:K,setLineWidth:le,setPolygonOffset:ne,setScissorTest:de,activeTexture:oe,bindTexture:T,unbindTexture:b,compressedTexImage2D:F,compressedTexImage3D:ee,texImage2D:Le,texImage3D:Ne,updateUBOMapping:Be,uniformBlockBinding:$e,texStorage2D:j,texStorage3D:Ae,texSubImage2D:re,texSubImage3D:_e,compressedTexSubImage2D:L,compressedTexSubImage3D:se,scissor:Ie,viewport:Pe,reset:yt}}function FS(t,e,n,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,b){return f?new OffscreenCanvas(T,b):Vo("canvas")}function x(T,b,F,ee){let re=1;if((T.width>ee||T.height>ee)&&(re=ee/Math.max(T.width,T.height)),re<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const _e=b?W0:Math.floor,L=_e(re*T.width),se=_e(re*T.height);v===void 0&&(v=M(L,se));const j=F?M(L,se):v;return j.width=L,j.height=se,j.getContext("2d").drawImage(T,0,0,L,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+L+"x"+se+")."),j}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return wh(T.width)&&wh(T.height)}function w(T){return a?!1:T.wrapS!==Cn||T.wrapT!==Cn||T.minFilter!==Zt&&T.minFilter!==vn}function I(T,b){return T.generateMipmaps&&b&&T.minFilter!==Zt&&T.minFilter!==vn}function D(T){t.generateMipmap(T)}function U(T,b,F,ee,re=!1){if(a===!1)return b;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let _e=b;return b===t.RED&&(F===t.FLOAT&&(_e=t.R32F),F===t.HALF_FLOAT&&(_e=t.R16F),F===t.UNSIGNED_BYTE&&(_e=t.R8)),b===t.RG&&(F===t.FLOAT&&(_e=t.RG32F),F===t.HALF_FLOAT&&(_e=t.RG16F),F===t.UNSIGNED_BYTE&&(_e=t.RG8)),b===t.RGBA&&(F===t.FLOAT&&(_e=t.RGBA32F),F===t.HALF_FLOAT&&(_e=t.RGBA16F),F===t.UNSIGNED_BYTE&&(_e=ee===je&&re===!1?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(_e=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(_e=t.RGB5_A1)),(_e===t.R16F||_e===t.R32F||_e===t.RG16F||_e===t.RG32F||_e===t.RGBA16F||_e===t.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function _(T,b,F){return I(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==Zt&&T.minFilter!==vn?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function C(T){return T===Zt||T===Qu||T===Pa?t.NEAREST:t.LINEAR}function X(T){const b=T.target;b.removeEventListener("dispose",X),N(b),b.isVideoTexture&&g.delete(b)}function z(T){const b=T.target;b.removeEventListener("dispose",z),Y(b)}function N(T){const b=i.get(T);if(b.__webglInit===void 0)return;const F=T.source,ee=m.get(F);if(ee){const re=ee[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&V(T),Object.keys(ee).length===0&&m.delete(F)}i.remove(T)}function V(T){const b=i.get(T);t.deleteTexture(b.__webglTexture);const F=T.source,ee=m.get(F);delete ee[b.__cacheKey],o.memory.textures--}function Y(T){const b=T.texture,F=i.get(T),ee=i.get(b);if(ee.__webglTexture!==void 0&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)t.deleteFramebuffer(F.__webglFramebuffer[re]),F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[re]);else{if(t.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let re=0;re<F.__webglColorRenderbuffer.length;re++)F.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(F.__webglColorRenderbuffer[re]);F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let re=0,_e=b.length;re<_e;re++){const L=i.get(b[re]);L.__webglTexture&&(t.deleteTexture(L.__webglTexture),o.memory.textures--),i.remove(b[re])}i.remove(b),i.remove(T)}let Z=0;function te(){Z=0}function J(){const T=Z;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Z+=1,T}function xe(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function ge(T,b){const F=i.get(T);if(T.isVideoTexture&&de(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(F,T,b);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+b)}function Re(T,b){const F=i.get(T);if(T.version>0&&F.__version!==T.version){fe(F,T,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+b)}function be(T,b){const F=i.get(T);if(T.version>0&&F.__version!==T.version){fe(F,T,b);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+b)}function ie(T,b){const F=i.get(T);if(T.version>0&&F.__version!==T.version){ae(F,T,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+b)}const me={[Fl]:t.REPEAT,[Cn]:t.CLAMP_TO_EDGE,[kl]:t.MIRRORED_REPEAT},Te={[Zt]:t.NEAREST,[Qu]:t.NEAREST_MIPMAP_NEAREST,[Pa]:t.NEAREST_MIPMAP_LINEAR,[vn]:t.LINEAR,[E0]:t.LINEAR_MIPMAP_NEAREST,[Or]:t.LINEAR_MIPMAP_LINEAR};function Ee(T,b,F){if(F?(t.texParameteri(T,t.TEXTURE_WRAP_S,me[b.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,me[b.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,me[b.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,Te[b.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,Te[b.minFilter])):(t.texParameteri(T,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(T,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(b.wrapS!==Cn||b.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,t.TEXTURE_MAG_FILTER,C(b.magFilter)),t.texParameteri(T,t.TEXTURE_MIN_FILTER,C(b.minFilter)),b.minFilter!==Zt&&b.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Zt||b.minFilter!==Pa&&b.minFilter!==Or||b.type===Zi&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Fr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(t.texParameterf(T,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function A(T,b){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",X));const ee=b.source;let re=m.get(ee);re===void 0&&(re={},m.set(ee,re));const _e=xe(b);if(_e!==T.__cacheKey){re[_e]===void 0&&(re[_e]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),re[_e].usedTimes++;const L=re[T.__cacheKey];L!==void 0&&(re[T.__cacheKey].usedTimes--,L.usedTimes===0&&V(b)),T.__cacheKey=_e,T.__webglTexture=re[_e].texture}return F}function fe(T,b,F){let ee=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=t.TEXTURE_3D);const re=A(T,b),_e=b.source;n.bindTexture(ee,T.__webglTexture,t.TEXTURE0+F);const L=i.get(_e);if(_e.version!==L.__version||re===!0){n.activeTexture(t.TEXTURE0+F),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const se=w(b)&&y(b.image)===!1;let j=x(b.image,se,!1,u);j=oe(b,j);const Ae=y(j)||a,Le=r.convert(b.format,b.colorSpace);let Ne=r.convert(b.type),Ie=U(b.internalFormat,Le,Ne,b.colorSpace);Ee(ee,b,Ae);let Pe;const Be=b.mipmaps,$e=a&&b.isVideoTexture!==!0,yt=L.__version===void 0||re===!0,H=_(b,j,Ae);if(b.isDepthTexture)Ie=t.DEPTH_COMPONENT,a?b.type===Zi?Ie=t.DEPTH_COMPONENT32F:b.type===Yi?Ie=t.DEPTH_COMPONENT24:b.type===Bs?Ie=t.DEPTH24_STENCIL8:Ie=t.DEPTH_COMPONENT16:b.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===es&&Ie===t.DEPTH_COMPONENT&&b.type!==Xf&&b.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Yi,Ne=r.convert(b.type)),b.format===Ks&&Ie===t.DEPTH_COMPONENT&&(Ie=t.DEPTH_STENCIL,b.type!==Bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Bs,Ne=r.convert(b.type))),yt&&($e?n.texStorage2D(t.TEXTURE_2D,1,Ie,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,Ie,j.width,j.height,0,Le,Ne,null));else if(b.isDataTexture)if(Be.length>0&&Ae){$e&&yt&&n.texStorage2D(t.TEXTURE_2D,H,Ie,Be[0].width,Be[0].height);for(let ce=0,ye=Be.length;ce<ye;ce++)Pe=Be[ce],$e?n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Le,Ne,Pe.data):n.texImage2D(t.TEXTURE_2D,ce,Ie,Pe.width,Pe.height,0,Le,Ne,Pe.data);b.generateMipmaps=!1}else $e?(yt&&n.texStorage2D(t.TEXTURE_2D,H,Ie,j.width,j.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,j.width,j.height,Le,Ne,j.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,j.width,j.height,0,Le,Ne,j.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$e&&yt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,H,Ie,Be[0].width,Be[0].height,j.depth);for(let ce=0,ye=Be.length;ce<ye;ce++)Pe=Be[ce],b.format!==Pn?Le!==null?$e?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,j.depth,Le,Pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,Ie,Pe.width,Pe.height,j.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,j.depth,Le,Ne,Pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,Ie,Pe.width,Pe.height,j.depth,0,Le,Ne,Pe.data)}else{$e&&yt&&n.texStorage2D(t.TEXTURE_2D,H,Ie,Be[0].width,Be[0].height);for(let ce=0,ye=Be.length;ce<ye;ce++)Pe=Be[ce],b.format!==Pn?Le!==null?$e?n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Le,Pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,Ie,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Le,Ne,Pe.data):n.texImage2D(t.TEXTURE_2D,ce,Ie,Pe.width,Pe.height,0,Le,Ne,Pe.data)}else if(b.isDataArrayTexture)$e?(yt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,H,Ie,j.width,j.height,j.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Le,Ne,j.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,j.width,j.height,j.depth,0,Le,Ne,j.data);else if(b.isData3DTexture)$e?(yt&&n.texStorage3D(t.TEXTURE_3D,H,Ie,j.width,j.height,j.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Le,Ne,j.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,j.width,j.height,j.depth,0,Le,Ne,j.data);else if(b.isFramebufferTexture){if(yt)if($e)n.texStorage2D(t.TEXTURE_2D,H,Ie,j.width,j.height);else{let ce=j.width,ye=j.height;for(let De=0;De<H;De++)n.texImage2D(t.TEXTURE_2D,De,Ie,ce,ye,0,Le,Ne,null),ce>>=1,ye>>=1}}else if(Be.length>0&&Ae){$e&&yt&&n.texStorage2D(t.TEXTURE_2D,H,Ie,Be[0].width,Be[0].height);for(let ce=0,ye=Be.length;ce<ye;ce++)Pe=Be[ce],$e?n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Le,Ne,Pe):n.texImage2D(t.TEXTURE_2D,ce,Ie,Le,Ne,Pe);b.generateMipmaps=!1}else $e?(yt&&n.texStorage2D(t.TEXTURE_2D,H,Ie,j.width,j.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Le,Ne,j)):n.texImage2D(t.TEXTURE_2D,0,Ie,Le,Ne,j);I(b,Ae)&&D(ee),L.__version=_e.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ae(T,b,F){if(b.image.length!==6)return;const ee=A(T,b),re=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+F);const _e=i.get(re);if(re.version!==_e.__version||ee===!0){n.activeTexture(t.TEXTURE0+F),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const L=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,j=[];for(let ce=0;ce<6;ce++)!L&&!se?j[ce]=x(b.image[ce],!1,!0,c):j[ce]=se?b.image[ce].image:b.image[ce],j[ce]=oe(b,j[ce]);const Ae=j[0],Le=y(Ae)||a,Ne=r.convert(b.format,b.colorSpace),Ie=r.convert(b.type),Pe=U(b.internalFormat,Ne,Ie,b.colorSpace),Be=a&&b.isVideoTexture!==!0,$e=_e.__version===void 0||ee===!0;let yt=_(b,Ae,Le);Ee(t.TEXTURE_CUBE_MAP,b,Le);let H;if(L){Be&&$e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,yt,Pe,Ae.width,Ae.height);for(let ce=0;ce<6;ce++){H=j[ce].mipmaps;for(let ye=0;ye<H.length;ye++){const De=H[ye];b.format!==Pn?Ne!==null?Be?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye,0,0,De.width,De.height,Ne,De.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye,Pe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye,0,0,De.width,De.height,Ne,Ie,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye,Pe,De.width,De.height,0,Ne,Ie,De.data)}}}else{H=b.mipmaps,Be&&$e&&(H.length>0&&yt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,yt,Pe,j[0].width,j[0].height));for(let ce=0;ce<6;ce++)if(se){Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,j[ce].width,j[ce].height,Ne,Ie,j[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Pe,j[ce].width,j[ce].height,0,Ne,Ie,j[ce].data);for(let ye=0;ye<H.length;ye++){const Fe=H[ye].image[ce].image;Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye+1,0,0,Fe.width,Fe.height,Ne,Ie,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye+1,Pe,Fe.width,Fe.height,0,Ne,Ie,Fe.data)}}else{Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ne,Ie,j[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Pe,Ne,Ie,j[ce]);for(let ye=0;ye<H.length;ye++){const De=H[ye];Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye+1,0,0,Ne,Ie,De.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye+1,Pe,Ne,Ie,De.image[ce])}}}I(b,Le)&&D(t.TEXTURE_CUBE_MAP),_e.__version=re.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Q(T,b,F,ee,re){const _e=r.convert(F.format,F.colorSpace),L=r.convert(F.type),se=U(F.internalFormat,_e,L,F.colorSpace);i.get(b).__hasExternalTextures||(re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,0,se,b.width,b.height,b.depth,0,_e,L,null):n.texImage2D(re,0,se,b.width,b.height,0,_e,L,null)),n.bindFramebuffer(t.FRAMEBUFFER,T),ne(b)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,re,i.get(F).__webglTexture,0,le(b)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,re,i.get(F).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(T,b,F){if(t.bindRenderbuffer(t.RENDERBUFFER,T),b.depthBuffer&&!b.stencilBuffer){let ee=t.DEPTH_COMPONENT16;if(F||ne(b)){const re=b.depthTexture;re&&re.isDepthTexture&&(re.type===Zi?ee=t.DEPTH_COMPONENT32F:re.type===Yi&&(ee=t.DEPTH_COMPONENT24));const _e=le(b);ne(b)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,ee,b.width,b.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,ee,b.width,b.height)}else t.renderbufferStorage(t.RENDERBUFFER,ee,b.width,b.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,T)}else if(b.depthBuffer&&b.stencilBuffer){const ee=le(b);F&&ne(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,b.width,b.height):ne(b)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,T)}else{const ee=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let re=0;re<ee.length;re++){const _e=ee[re],L=r.convert(_e.format,_e.colorSpace),se=r.convert(_e.type),j=U(_e.internalFormat,L,se,_e.colorSpace),Ae=le(b);F&&ne(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,j,b.width,b.height):ne(b)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,j,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,j,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function S(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ge(b.depthTexture,0);const ee=i.get(b.depthTexture).__webglTexture,re=le(b);if(b.depthTexture.format===es)ne(b)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(b.depthTexture.format===Ks)ne(b)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function E(T){const b=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");S(b.__webglFramebuffer,T)}else if(F){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]=t.createRenderbuffer(),Me(b.__webglDepthbuffer[ee],T,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),Me(b.__webglDepthbuffer,T,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function R(T,b,F){const ee=i.get(T);b!==void 0&&Q(ee.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),F!==void 0&&E(T)}function B(T){const b=T.texture,F=i.get(T),ee=i.get(b);T.addEventListener("dispose",z),T.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=b.version,o.memory.textures++);const re=T.isWebGLCubeRenderTarget===!0,_e=T.isWebGLMultipleRenderTargets===!0,L=y(T)||a;if(re){F.__webglFramebuffer=[];for(let se=0;se<6;se++)F.__webglFramebuffer[se]=t.createFramebuffer()}else{if(F.__webglFramebuffer=t.createFramebuffer(),_e)if(s.drawBuffers){const se=T.texture;for(let j=0,Ae=se.length;j<Ae;j++){const Le=i.get(se[j]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ne(T)===!1){const se=_e?b:[b];F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let j=0;j<se.length;j++){const Ae=se[j];F.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[j]);const Le=r.convert(Ae.format,Ae.colorSpace),Ne=r.convert(Ae.type),Ie=U(Ae.internalFormat,Le,Ne,Ae.colorSpace,T.isXRRenderTarget===!0),Pe=le(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,Ie,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,F.__webglColorRenderbuffer[j])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),Me(F.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,b,L);for(let se=0;se<6;se++)Q(F.__webglFramebuffer[se],T,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se);I(b,L)&&D(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){const se=T.texture;for(let j=0,Ae=se.length;j<Ae;j++){const Le=se[j],Ne=i.get(Le);n.bindTexture(t.TEXTURE_2D,Ne.__webglTexture),Ee(t.TEXTURE_2D,Le,L),Q(F.__webglFramebuffer,T,Le,t.COLOR_ATTACHMENT0+j,t.TEXTURE_2D),I(Le,L)&&D(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?se=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(se,ee.__webglTexture),Ee(se,b,L),Q(F.__webglFramebuffer,T,b,t.COLOR_ATTACHMENT0,se),I(b,L)&&D(se),n.unbindTexture()}T.depthBuffer&&E(T)}function k(T){const b=y(T)||a,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0,re=F.length;ee<re;ee++){const _e=F[ee];if(I(_e,b)){const L=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,se=i.get(_e).__webglTexture;n.bindTexture(L,se),D(L),n.unbindTexture()}}}function K(T){if(a&&T.samples>0&&ne(T)===!1){const b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,ee=T.height;let re=t.COLOR_BUFFER_BIT;const _e=[],L=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=i.get(T),j=T.isWebGLMultipleRenderTargets===!0;if(j)for(let Ae=0;Ae<b.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Ae=0;Ae<b.length;Ae++){_e.push(t.COLOR_ATTACHMENT0+Ae),T.depthBuffer&&_e.push(L);const Le=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Le===!1&&(T.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),j&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,se.__webglColorRenderbuffer[Ae]),Le===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[L]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[L])),j){const Ne=i.get(b[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ne,0)}t.blitFramebuffer(0,0,F,ee,0,0,F,ee,re,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,_e)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),j)for(let Ae=0;Ae<b.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,se.__webglColorRenderbuffer[Ae]);const Le=i.get(b[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function le(T){return Math.min(h,T.samples)}function ne(T){const b=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function de(T){const b=o.render.frame;g.get(T)!==b&&(g.set(T,b),T.update())}function oe(T,b){const F=T.colorSpace,ee=T.format,re=T.type;return T.isCompressedTexture===!0||T.format===Bl||F!==$n&&F!==ns&&(F===je?a===!1?e.has("EXT_sRGB")===!0&&ee===Pn?(T.format=Bl,T.minFilter=vn,T.generateMipmaps=!1):b=Zf.sRGBToLinear(b):(ee!==Pn||re!==is)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),b}this.allocateTextureUnit=J,this.resetTextureUnits=te,this.setTexture2D=ge,this.setTexture2DArray=Re,this.setTexture3D=be,this.setTextureCube=ie,this.rebindTextures=R,this.setupRenderTarget=B,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=E,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ne}function kS(t,e,n){const i=n.isWebGL2;function s(r,o=ns){let a;if(r===is)return t.UNSIGNED_BYTE;if(r===A0)return t.UNSIGNED_SHORT_4_4_4_4;if(r===C0)return t.UNSIGNED_SHORT_5_5_5_1;if(r===M0)return t.BYTE;if(r===w0)return t.SHORT;if(r===Xf)return t.UNSIGNED_SHORT;if(r===T0)return t.INT;if(r===Yi)return t.UNSIGNED_INT;if(r===Zi)return t.FLOAT;if(r===Fr)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===P0)return t.ALPHA;if(r===Pn)return t.RGBA;if(r===R0)return t.LUMINANCE;if(r===I0)return t.LUMINANCE_ALPHA;if(r===es)return t.DEPTH_COMPONENT;if(r===Ks)return t.DEPTH_STENCIL;if(r===Bl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===L0)return t.RED;if(r===D0)return t.RED_INTEGER;if(r===U0)return t.RG;if(r===N0)return t.RG_INTEGER;if(r===O0)return t.RGBA_INTEGER;if(r===Ra||r===Ia||r===La||r===Da)if(o===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ra)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ra)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ia)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Da)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eh||r===th||r===nh||r===ih)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===eh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===th)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ih)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===F0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===sh||r===rh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===sh)return o===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===rh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===oh||r===ah||r===lh||r===ch||r===uh||r===hh||r===dh||r===fh||r===ph||r===mh||r===gh||r===vh||r===_h||r===xh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===oh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ah)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ch)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===uh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ph)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_h)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ua)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ua)return o===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===k0||r===bh||r===yh||r===Sh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ua)return a.COMPRESSED_RED_RGTC1_EXT;if(r===bh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bs?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[r]!==void 0?t[r]:null}return{convert:s}}class BS extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yt extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zS={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class HS extends dn{constructor(e,n,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:es,u!==es&&u!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===es&&(i=Yi),i===void 0&&u===Ks&&(i=Bs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1}}class VS extends us{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const v=n.getContextAttributes();let m=null,f=null;const M=[],x=[],y=new Set,w=new Map,I=new Jt;I.layers.enable(1),I.viewport=new pt;const D=new Jt;D.layers.enable(2),D.viewport=new pt;const U=[I,D],_=new BS;_.layers.enable(1),_.layers.enable(2);let C=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let me=M[ie];return me===void 0&&(me=new sl,M[ie]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ie){let me=M[ie];return me===void 0&&(me=new sl,M[ie]=me),me.getGripSpace()},this.getHand=function(ie){let me=M[ie];return me===void 0&&(me=new sl,M[ie]=me),me.getHandSpace()};function z(ie){const me=x.indexOf(ie.inputSource);if(me===-1)return;const Te=M[me];Te!==void 0&&(Te.update(ie.inputSource,ie.frame,c||o),Te.dispatchEvent({type:ie.type,data:ie.inputSource}))}function N(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",V);for(let ie=0;ie<M.length;ie++){const me=x[ie];me!==null&&(x[ie]=null,M[ie].disconnect(me))}C=null,X=null,e.setRenderTarget(m),p=null,d=null,h=null,s=null,f=null,be.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",N),s.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await n.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const me={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,me),s.updateRenderState({baseLayer:p}),f=new Dn(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:is,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let me=null,Te=null,Ee=null;v.depth&&(Ee=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=v.stencil?Ks:es,Te=v.stencil?Bs:Yi);const A={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:r};h=new XRWebGLBinding(s,n),d=h.createProjectionLayer(A),s.updateRenderState({layers:[d]}),f=new Dn(d.textureWidth,d.textureHeight,{format:Pn,type:is,depthTexture:new HS(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const fe=e.properties.get(f);fe.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),be.setContext(s),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function V(ie){for(let me=0;me<ie.removed.length;me++){const Te=ie.removed[me],Ee=x.indexOf(Te);Ee>=0&&(x[Ee]=null,M[Ee].disconnect(Te))}for(let me=0;me<ie.added.length;me++){const Te=ie.added[me];let Ee=x.indexOf(Te);if(Ee===-1){for(let fe=0;fe<M.length;fe++)if(fe>=x.length){x.push(Te),Ee=fe;break}else if(x[fe]===null){x[fe]=Te,Ee=fe;break}if(Ee===-1)break}const A=M[Ee];A&&A.connect(Te)}}const Y=new O,Z=new O;function te(ie,me,Te){Y.setFromMatrixPosition(me.matrixWorld),Z.setFromMatrixPosition(Te.matrixWorld);const Ee=Y.distanceTo(Z),A=me.projectionMatrix.elements,fe=Te.projectionMatrix.elements,ae=A[14]/(A[10]-1),Q=A[14]/(A[10]+1),Me=(A[9]+1)/A[5],S=(A[9]-1)/A[5],E=(A[8]-1)/A[0],R=(fe[8]+1)/fe[0],B=ae*E,k=ae*R,K=Ee/(-E+R),le=K*-E;me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(le),ie.translateZ(K),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert();const ne=ae+K,de=Q+K,oe=B-le,T=k+(Ee-le),b=Me*Q/de*ne,F=S*Q/de*ne;ie.projectionMatrix.makePerspective(oe,T,b,F,ne,de),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}function J(ie,me){me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;_.near=D.near=I.near=ie.near,_.far=D.far=I.far=ie.far,(C!==_.near||X!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,X=_.far);const me=ie.parent,Te=_.cameras;J(_,me);for(let Ee=0;Ee<Te.length;Ee++)J(Te[Ee],me);Te.length===2?te(_,I,D):_.projectionMatrix.copy(I.projectionMatrix),xe(ie,_,me)};function xe(ie,me,Te){Te===null?ie.matrix.copy(me.matrixWorld):(ie.matrix.copy(Te.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0);const Ee=ie.children;for(let A=0,fe=Ee.length;A<fe;A++)Ee[A].updateMatrixWorld(!0);ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ho*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.getPlanes=function(){return y};let ge=null;function Re(ie,me){if(u=me.getViewerPose(c||o),g=me,u!==null){const Te=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Ee=!1;Te.length!==_.cameras.length&&(_.cameras.length=0,Ee=!0);for(let A=0;A<Te.length;A++){const fe=Te[A];let ae=null;if(p!==null)ae=p.getViewport(fe);else{const Me=h.getViewSubImage(d,fe);ae=Me.viewport,A===0&&(e.setRenderTargetTextures(f,Me.colorTexture,d.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(f))}let Q=U[A];Q===void 0&&(Q=new Jt,Q.layers.enable(A),Q.viewport=new pt,U[A]=Q),Q.matrix.fromArray(fe.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(fe.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ae.x,ae.y,ae.width,ae.height),A===0&&(_.matrix.copy(Q.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Ee===!0&&_.cameras.push(Q)}}for(let Te=0;Te<M.length;Te++){const Ee=x[Te],A=M[Te];Ee!==null&&A!==void 0&&A.update(Ee,me,c||o)}if(ge&&ge(ie,me),me.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:me.detectedPlanes});let Te=null;for(const Ee of y)me.detectedPlanes.has(Ee)||(Te===null&&(Te=[]),Te.push(Ee));if(Te!==null)for(const Ee of Te)y.delete(Ee),w.delete(Ee),i.dispatchEvent({type:"planeremoved",data:Ee});for(const Ee of me.detectedPlanes)if(!y.has(Ee))y.add(Ee),w.set(Ee,me.lastChangedTime),i.dispatchEvent({type:"planeadded",data:Ee});else{const A=w.get(Ee);Ee.lastChangedTime>A&&(w.set(Ee,Ee.lastChangedTime),i.dispatchEvent({type:"planechanged",data:Ee}))}}g=null}const be=new op;be.setAnimationLoop(Re),this.setAnimationLoop=function(ie){ge=ie},this.dispose=function(){}}}function GS(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,ip(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===sn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===sn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=x*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===sn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function WS(t,e,n,i){let s={},r={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const y=x.program;i.uniformBlockBinding(M,y)}function c(M,x){let y=s[M.id];y===void 0&&(g(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",m));const w=x.program;i.updateUBOMapping(M,w);const I=e.render.frame;r[M.id]!==I&&(d(M),r[M.id]=I)}function u(M){const x=h();M.__bindingPointIndex=x;const y=t.createBuffer(),w=M.__size,I=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,w,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],y=M.uniforms,w=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let I=0,D=y.length;I<D;I++){const U=y[I];if(p(U,I,w)===!0){const _=U.__offset,C=Array.isArray(U.value)?U.value:[U.value];let X=0;for(let z=0;z<C.length;z++){const N=C[z],V=v(N);typeof N=="number"?(U.__data[0]=N,t.bufferSubData(t.UNIFORM_BUFFER,_+X,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=N.elements[0],U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=N.elements[0],U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=N.elements[0]):(N.toArray(U.__data,X),X+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,_,U.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(M,x,y){const w=M.value;if(y[x]===void 0){if(typeof w=="number")y[x]=w;else{const I=Array.isArray(w)?w:[w],D=[];for(let U=0;U<I.length;U++)D.push(I[U].clone());y[x]=D}return!0}else if(typeof w=="number"){if(y[x]!==w)return y[x]=w,!0}else{const I=Array.isArray(y[x])?y[x]:[y[x]],D=Array.isArray(w)?w:[w];for(let U=0;U<I.length;U++){const _=I[U];if(_.equals(D[U])===!1)return _.copy(D[U]),!0}}return!1}function g(M){const x=M.uniforms;let y=0;const w=16;let I=0;for(let D=0,U=x.length;D<U;D++){const _=x[D],C={boundary:0,storage:0},X=Array.isArray(_.value)?_.value:[_.value];for(let z=0,N=X.length;z<N;z++){const V=X[z],Y=v(V);C.boundary+=Y.boundary,C.storage+=Y.storage}if(_.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),_.__offset=y,D>0){I=y%w;const z=w-I;I!==0&&z-C.boundary<0&&(y+=w-I,_.__offset=y)}y+=C.storage}return I=y%w,I>0&&(y+=w-I),M.__size=y,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const M in s)t.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}function $S(){const t=Vo("canvas");return t.style.display="block",t}class Rc{constructor(e={}){const{canvas:n=$S(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=null,g=null;const v=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=je,this.useLegacyLights=!0,this.toneMapping=ai,this.toneMappingExposure=1;const f=this;let M=!1,x=0,y=0,w=null,I=-1,D=null;const U=new pt,_=new pt;let C=null,X=n.width,z=n.height,N=1,V=null,Y=null;const Z=new pt(0,0,X,z),te=new pt(0,0,X,z);let J=!1;const xe=new Ac;let ge=!1,Re=!1,be=null;const ie=new Et,me=new O,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return w===null?N:1}let A=i;function fe(P,q){for(let ue=0;ue<P.length;ue++){const $=P[ue],pe=n.getContext($,q);if(pe!==null)return pe}return null}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ec}`),n.addEventListener("webglcontextlost",Pe,!1),n.addEventListener("webglcontextrestored",Be,!1),n.addEventListener("webglcontextcreationerror",$e,!1),A===null){const q=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&q.shift(),A=fe(q,P),A===null)throw fe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ae,Q,Me,S,E,R,B,k,K,le,ne,de,oe,T,b,F,ee,re,_e,L,se,j,Ae,Le;function Ne(){ae=new n1(A),Q=new Yy(A,ae,e),ae.init(Q),j=new kS(A,ae,Q),Me=new OS(A,ae,Q),S=new r1(A),E=new SS,R=new FS(A,ae,Me,E,Q,j,S),B=new Jy(f),k=new t1(f),K=new vx(A,Q),Ae=new Ky(A,ae,K,Q),le=new i1(A,K,S,Ae),ne=new c1(A,le,K,S),_e=new l1(A,Q,R),F=new Zy(E),de=new yS(f,B,k,ae,Q,Ae,F),oe=new GS(f,E),T=new MS,b=new RS(ae,Q),re=new jy(f,B,k,Me,ne,d,l),ee=new NS(f,ne,Q),Le=new WS(A,S,Q,Me),L=new qy(A,ae,S,Q),se=new s1(A,ae,S,Q),S.programs=de.programs,f.capabilities=Q,f.extensions=ae,f.properties=E,f.renderLists=T,f.shadowMap=ee,f.state=Me,f.info=S}Ne();const Ie=new VS(f,A);this.xr=Ie,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const P=ae.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ae.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(P){P!==void 0&&(N=P,this.setSize(X,z,!1))},this.getSize=function(P){return P.set(X,z)},this.setSize=function(P,q,ue=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=P,z=q,n.width=Math.floor(P*N),n.height=Math.floor(q*N),ue===!0&&(n.style.width=P+"px",n.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(X*N,z*N).floor()},this.setDrawingBufferSize=function(P,q,ue){X=P,z=q,N=ue,n.width=Math.floor(P*ue),n.height=Math.floor(q*ue),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(U)},this.getViewport=function(P){return P.copy(Z)},this.setViewport=function(P,q,ue,$){P.isVector4?Z.set(P.x,P.y,P.z,P.w):Z.set(P,q,ue,$),Me.viewport(U.copy(Z).multiplyScalar(N).floor())},this.getScissor=function(P){return P.copy(te)},this.setScissor=function(P,q,ue,$){P.isVector4?te.set(P.x,P.y,P.z,P.w):te.set(P,q,ue,$),Me.scissor(_.copy(te).multiplyScalar(N).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(P){Me.setScissorTest(J=P)},this.setOpaqueSort=function(P){V=P},this.setTransparentSort=function(P){Y=P},this.getClearColor=function(P){return P.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(P=!0,q=!0,ue=!0){let $=0;P&&($|=A.COLOR_BUFFER_BIT),q&&($|=A.DEPTH_BUFFER_BIT),ue&&($|=A.STENCIL_BUFFER_BIT),A.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Pe,!1),n.removeEventListener("webglcontextrestored",Be,!1),n.removeEventListener("webglcontextcreationerror",$e,!1),T.dispose(),b.dispose(),E.dispose(),B.dispose(),k.dispose(),ne.dispose(),Ae.dispose(),Le.dispose(),de.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Fe),Ie.removeEventListener("sessionend",ct),be&&(be.dispose(),be=null),ut.stop()};function Pe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const P=S.autoReset,q=ee.enabled,ue=ee.autoUpdate,$=ee.needsUpdate,pe=ee.type;Ne(),S.autoReset=P,ee.enabled=q,ee.autoUpdate=ue,ee.needsUpdate=$,ee.type=pe}function $e(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function yt(P){const q=P.target;q.removeEventListener("dispose",yt),H(q)}function H(P){ce(P),E.remove(P)}function ce(P){const q=E.get(P).programs;q!==void 0&&(q.forEach(function(ue){de.releaseProgram(ue)}),P.isShaderMaterial&&de.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,ue,$,pe,ze){q===null&&(q=Te);const He=pe.isMesh&&pe.matrixWorld.determinant()<0,Ge=Qp(P,q,ue,$,pe);Me.setMaterial($,He);let Ke=ue.index,Ye=1;$.wireframe===!0&&(Ke=le.getWireframeAttribute(ue),Ye=2);const Ze=ue.drawRange,Je=ue.attributes.position;let lt=Ze.start*Ye,Xt=(Ze.start+Ze.count)*Ye;ze!==null&&(lt=Math.max(lt,ze.start*Ye),Xt=Math.min(Xt,(ze.start+ze.count)*Ye)),Ke!==null?(lt=Math.max(lt,0),Xt=Math.min(Xt,Ke.count)):Je!=null&&(lt=Math.max(lt,0),Xt=Math.min(Xt,Je.count));const yn=Xt-lt;if(yn<0||yn===1/0)return;Ae.setup(pe,$,Ge,ue,Ke);let Di,Mt=L;if(Ke!==null&&(Di=K.get(Ke),Mt=se,Mt.setIndex(Di)),pe.isMesh)$.wireframe===!0?(Me.setLineWidth($.wireframeLinewidth*Ee()),Mt.setMode(A.LINES)):Mt.setMode(A.TRIANGLES);else if(pe.isLine){let nt=$.linewidth;nt===void 0&&(nt=1),Me.setLineWidth(nt*Ee()),pe.isLineSegments?Mt.setMode(A.LINES):pe.isLineLoop?Mt.setMode(A.LINE_LOOP):Mt.setMode(A.LINE_STRIP)}else pe.isPoints?Mt.setMode(A.POINTS):pe.isSprite&&Mt.setMode(A.TRIANGLES);if(pe.isInstancedMesh)Mt.renderInstances(lt,yn,pe.count);else if(ue.isInstancedBufferGeometry){const nt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,pa=Math.min(ue.instanceCount,nt);Mt.renderInstances(lt,yn,pa)}else Mt.render(lt,yn)},this.compile=function(P,q){function ue($,pe,ze){$.transparent===!0&&$.side===ri&&$.forceSinglePass===!1?($.side=sn,$.needsUpdate=!0,Kr($,pe,ze),$.side=Ri,$.needsUpdate=!0,Kr($,pe,ze),$.side=ri):Kr($,pe,ze)}g=b.get(P),g.init(),m.push(g),P.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),g.setupLights(f.useLegacyLights),P.traverse(function($){const pe=$.material;if(pe)if(Array.isArray(pe))for(let ze=0;ze<pe.length;ze++){const He=pe[ze];ue(He,P,$)}else ue(pe,P,$)}),m.pop(),g=null};let ye=null;function De(P){ye&&ye(P)}function Fe(){ut.stop()}function ct(){ut.start()}const ut=new op;ut.setAnimationLoop(De),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(P){ye=P,Ie.setAnimationLoop(P),P===null?ut.stop():ut.start()},Ie.addEventListener("sessionstart",Fe),Ie.addEventListener("sessionend",ct),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(q),q=Ie.getCamera()),P.isScene===!0&&P.onBeforeRender(f,P,q,w),g=b.get(P,m.length),g.init(),m.push(g),ie.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),xe.setFromProjectionMatrix(ie),Re=this.localClippingEnabled,ge=F.init(this.clippingPlanes,Re),p=T.get(P,v.length),p.init(),v.push(p),Bt(P,q,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(V,Y),ge===!0&&F.beginShadows();const ue=g.state.shadowsArray;if(ee.render(ue,P,q),ge===!0&&F.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(p,P),g.setupLights(f.useLegacyLights),q.isArrayCamera){const $=q.cameras;for(let pe=0,ze=$.length;pe<ze;pe++){const He=$[pe];ui(p,P,He,He.viewport)}}else ui(p,P,q);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),P.isScene===!0&&P.onAfterRender(f,P,q),Ae.resetDefaultState(),I=-1,D=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Bt(P,q,ue,$){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)ue=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||xe.intersectsSprite(P)){$&&me.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ie);const He=ne.update(P),Ge=P.material;Ge.visible&&p.push(P,He,Ge,ue,me.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||xe.intersectsObject(P))){P.isSkinnedMesh&&P.skeleton.frame!==S.render.frame&&(P.skeleton.update(),P.skeleton.frame=S.render.frame);const He=ne.update(P),Ge=P.material;if($&&(He.boundingSphere===null&&He.computeBoundingSphere(),me.copy(He.boundingSphere.center).applyMatrix4(P.matrixWorld).applyMatrix4(ie)),Array.isArray(Ge)){const Ke=He.groups;for(let Ye=0,Ze=Ke.length;Ye<Ze;Ye++){const Je=Ke[Ye],lt=Ge[Je.materialIndex];lt&&lt.visible&&p.push(P,He,lt,ue,me.z,Je)}}else Ge.visible&&p.push(P,He,Ge,ue,me.z,null)}}const ze=P.children;for(let He=0,Ge=ze.length;He<Ge;He++)Bt(ze[He],q,ue,$)}function ui(P,q,ue,$){const pe=P.opaque,ze=P.transmissive,He=P.transparent;g.setupLightsView(ue),ge===!0&&F.setGlobalState(f.clippingPlanes,ue),ze.length>0&&St(pe,ze,q,ue),$&&Me.viewport(U.copy($)),pe.length>0&&pn(pe,q,ue),ze.length>0&&pn(ze,q,ue),He.length>0&&pn(He,q,ue),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function St(P,q,ue,$){if(be===null){const Ge=Q.isWebGL2;be=new Dn(1024,1024,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?Fr:is,minFilter:Or,samples:Ge&&a===!0?4:0})}const pe=f.getRenderTarget();f.setRenderTarget(be),f.clear();const ze=f.toneMapping;f.toneMapping=ai,pn(P,ue,$),R.updateMultisampleRenderTarget(be),R.updateRenderTargetMipmap(be);let He=!1;for(let Ge=0,Ke=q.length;Ge<Ke;Ge++){const Ye=q[Ge],Ze=Ye.object,Je=Ye.geometry,lt=Ye.material,Xt=Ye.group;if(lt.side===ri&&Ze.layers.test($.layers)){const yn=lt.side;lt.side=sn,lt.needsUpdate=!0,Nn(Ze,ue,$,Je,lt,Xt),lt.side=yn,lt.needsUpdate=!0,He=!0}}He===!0&&(R.updateMultisampleRenderTarget(be),R.updateRenderTargetMipmap(be)),f.setRenderTarget(pe),f.toneMapping=ze}function pn(P,q,ue){const $=q.isScene===!0?q.overrideMaterial:null;for(let pe=0,ze=P.length;pe<ze;pe++){const He=P[pe],Ge=He.object,Ke=He.geometry,Ye=$===null?He.material:$,Ze=He.group;Ge.layers.test(ue.layers)&&Nn(Ge,q,ue,Ke,Ye,Ze)}}function Nn(P,q,ue,$,pe,ze){P.onBeforeRender(f,q,ue,$,pe,ze),P.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),pe.onBeforeRender(f,q,ue,$,P,ze),pe.transparent===!0&&pe.side===ri&&pe.forceSinglePass===!1?(pe.side=sn,pe.needsUpdate=!0,f.renderBufferDirect(ue,q,$,pe,P,ze),pe.side=Ri,pe.needsUpdate=!0,f.renderBufferDirect(ue,q,$,pe,P,ze),pe.side=ri):f.renderBufferDirect(ue,q,$,pe,P,ze),P.onAfterRender(f,q,ue,$,pe,ze)}function Kr(P,q,ue){q.isScene!==!0&&(q=Te);const $=E.get(P),pe=g.state.lights,ze=g.state.shadowsArray,He=pe.state.version,Ge=de.getParameters(P,pe.state,ze,q,ue),Ke=de.getProgramCacheKey(Ge);let Ye=$.programs;$.environment=P.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(P.isMeshStandardMaterial?k:B).get(P.envMap||$.environment),Ye===void 0&&(P.addEventListener("dispose",yt),Ye=new Map,$.programs=Ye);let Ze=Ye.get(Ke);if(Ze!==void 0){if($.currentProgram===Ze&&$.lightsStateVersion===He)return Xc(P,Ge),Ze}else Ge.uniforms=de.getUniforms(P),P.onBuild(ue,Ge,f),P.onBeforeCompile(Ge,f),Ze=de.acquireProgram(Ge,Ke),Ye.set(Ke,Ze),$.uniforms=Ge.uniforms;const Je=$.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Je.clippingPlanes=F.uniform),Xc(P,Ge),$.needsLights=tm(P),$.lightsStateVersion=He,$.needsLights&&(Je.ambientLightColor.value=pe.state.ambient,Je.lightProbe.value=pe.state.probe,Je.directionalLights.value=pe.state.directional,Je.directionalLightShadows.value=pe.state.directionalShadow,Je.spotLights.value=pe.state.spot,Je.spotLightShadows.value=pe.state.spotShadow,Je.rectAreaLights.value=pe.state.rectArea,Je.ltc_1.value=pe.state.rectAreaLTC1,Je.ltc_2.value=pe.state.rectAreaLTC2,Je.pointLights.value=pe.state.point,Je.pointLightShadows.value=pe.state.pointShadow,Je.hemisphereLights.value=pe.state.hemi,Je.directionalShadowMap.value=pe.state.directionalShadowMap,Je.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,Je.spotShadowMap.value=pe.state.spotShadowMap,Je.spotLightMatrix.value=pe.state.spotLightMatrix,Je.spotLightMap.value=pe.state.spotLightMap,Je.pointShadowMap.value=pe.state.pointShadowMap,Je.pointShadowMatrix.value=pe.state.pointShadowMatrix);const lt=Ze.getUniforms(),Xt=Lo.seqWithValue(lt.seq,Je);return $.currentProgram=Ze,$.uniformsList=Xt,Ze}function Xc(P,q){const ue=E.get(P);ue.outputColorSpace=q.outputColorSpace,ue.instancing=q.instancing,ue.skinning=q.skinning,ue.morphTargets=q.morphTargets,ue.morphNormals=q.morphNormals,ue.morphColors=q.morphColors,ue.morphTargetsCount=q.morphTargetsCount,ue.numClippingPlanes=q.numClippingPlanes,ue.numIntersection=q.numClipIntersection,ue.vertexAlphas=q.vertexAlphas,ue.vertexTangents=q.vertexTangents,ue.toneMapping=q.toneMapping}function Qp(P,q,ue,$,pe){q.isScene!==!0&&(q=Te),R.resetTextureUnits();const ze=q.fog,He=$.isMeshStandardMaterial?q.environment:null,Ge=w===null?f.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:$n,Ke=($.isMeshStandardMaterial?k:B).get($.envMap||He),Ye=$.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Ze=!!$.normalMap&&!!ue.attributes.tangent,Je=!!ue.morphAttributes.position,lt=!!ue.morphAttributes.normal,Xt=!!ue.morphAttributes.color,yn=$.toneMapped?f.toneMapping:ai,Di=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Mt=Di!==void 0?Di.length:0,nt=E.get($),pa=g.state.lights;if(ge===!0&&(Re===!0||P!==D)){const an=P===D&&$.id===I;F.setState($,P,an)}let Dt=!1;$.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==pa.state.version||nt.outputColorSpace!==Ge||pe.isInstancedMesh&&nt.instancing===!1||!pe.isInstancedMesh&&nt.instancing===!0||pe.isSkinnedMesh&&nt.skinning===!1||!pe.isSkinnedMesh&&nt.skinning===!0||nt.envMap!==Ke||$.fog===!0&&nt.fog!==ze||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==F.numPlanes||nt.numIntersection!==F.numIntersection)||nt.vertexAlphas!==Ye||nt.vertexTangents!==Ze||nt.morphTargets!==Je||nt.morphNormals!==lt||nt.morphColors!==Xt||nt.toneMapping!==yn||Q.isWebGL2===!0&&nt.morphTargetsCount!==Mt)&&(Dt=!0):(Dt=!0,nt.__version=$.version);let Ui=nt.currentProgram;Dt===!0&&(Ui=Kr($,q,pe));let jc=!1,rr=!1,ma=!1;const jt=Ui.getUniforms(),Ni=nt.uniforms;if(Me.useProgram(Ui.program)&&(jc=!0,rr=!0,ma=!0),$.id!==I&&(I=$.id,rr=!0),jc||D!==P){if(jt.setValue(A,"projectionMatrix",P.projectionMatrix),Q.logarithmicDepthBuffer&&jt.setValue(A,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),D!==P&&(D=P,rr=!0,ma=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const an=jt.map.cameraPosition;an!==void 0&&an.setValue(A,me.setFromMatrixPosition(P.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&jt.setValue(A,"isOrthographic",P.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||pe.isSkinnedMesh)&&jt.setValue(A,"viewMatrix",P.matrixWorldInverse)}if(pe.isSkinnedMesh){jt.setOptional(A,pe,"bindMatrix"),jt.setOptional(A,pe,"bindMatrixInverse");const an=pe.skeleton;an&&(Q.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),jt.setValue(A,"boneTexture",an.boneTexture,R),jt.setValue(A,"boneTextureSize",an.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ga=ue.morphAttributes;if((ga.position!==void 0||ga.normal!==void 0||ga.color!==void 0&&Q.isWebGL2===!0)&&_e.update(pe,ue,Ui),(rr||nt.receiveShadow!==pe.receiveShadow)&&(nt.receiveShadow=pe.receiveShadow,jt.setValue(A,"receiveShadow",pe.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Ni.envMap.value=Ke,Ni.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),rr&&(jt.setValue(A,"toneMappingExposure",f.toneMappingExposure),nt.needsLights&&em(Ni,ma),ze&&$.fog===!0&&oe.refreshFogUniforms(Ni,ze),oe.refreshMaterialUniforms(Ni,$,N,z,be),Lo.upload(A,nt.uniformsList,Ni,R)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Lo.upload(A,nt.uniformsList,Ni,R),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&jt.setValue(A,"center",pe.center),jt.setValue(A,"modelViewMatrix",pe.modelViewMatrix),jt.setValue(A,"normalMatrix",pe.normalMatrix),jt.setValue(A,"modelMatrix",pe.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const an=$.uniformsGroups;for(let va=0,nm=an.length;va<nm;va++)if(Q.isWebGL2){const Kc=an[va];Le.update(Kc,Ui),Le.bind(Kc,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function em(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function tm(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(P,q,ue){E.get(P.texture).__webglTexture=q,E.get(P.depthTexture).__webglTexture=ue;const $=E.get(P);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=ue===void 0,$.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,q){const ue=E.get(P);ue.__webglFramebuffer=q,ue.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,ue=0){w=P,x=q,y=ue;let $=!0,pe=null,ze=!1,He=!1;if(P){const Ke=E.get(P);Ke.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(A.FRAMEBUFFER,null),$=!1):Ke.__webglFramebuffer===void 0?R.setupRenderTarget(P):Ke.__hasExternalTextures&&R.rebindTextures(P,E.get(P.texture).__webglTexture,E.get(P.depthTexture).__webglTexture);const Ye=P.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(He=!0);const Ze=E.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(pe=Ze[q],ze=!0):Q.isWebGL2&&P.samples>0&&R.useMultisampledRTT(P)===!1?pe=E.get(P).__webglMultisampledFramebuffer:pe=Ze,U.copy(P.viewport),_.copy(P.scissor),C=P.scissorTest}else U.copy(Z).multiplyScalar(N).floor(),_.copy(te).multiplyScalar(N).floor(),C=J;if(Me.bindFramebuffer(A.FRAMEBUFFER,pe)&&Q.drawBuffers&&$&&Me.drawBuffers(P,pe),Me.viewport(U),Me.scissor(_),Me.setScissorTest(C),ze){const Ke=E.get(P.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ke.__webglTexture,ue)}else if(He){const Ke=E.get(P.texture),Ye=q||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ke.__webglTexture,ue||0,Ye)}I=-1},this.readRenderTargetPixels=function(P,q,ue,$,pe,ze,He){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=E.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&He!==void 0&&(Ge=Ge[He]),Ge){Me.bindFramebuffer(A.FRAMEBUFFER,Ge);try{const Ke=P.texture,Ye=Ke.format,Ze=Ke.type;if(Ye!==Pn&&j.convert(Ye)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=Ze===Fr&&(ae.has("EXT_color_buffer_half_float")||Q.isWebGL2&&ae.has("EXT_color_buffer_float"));if(Ze!==is&&j.convert(Ze)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===Zi&&(Q.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-$&&ue>=0&&ue<=P.height-pe&&A.readPixels(q,ue,$,pe,j.convert(Ye),j.convert(Ze),ze)}finally{const Ke=w!==null?E.get(w).__webglFramebuffer:null;Me.bindFramebuffer(A.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(P,q,ue=0){const $=Math.pow(2,-ue),pe=Math.floor(q.image.width*$),ze=Math.floor(q.image.height*$);R.setTexture2D(q,0),A.copyTexSubImage2D(A.TEXTURE_2D,ue,0,0,P.x,P.y,pe,ze),Me.unbindTexture()},this.copyTextureToTexture=function(P,q,ue,$=0){const pe=q.image.width,ze=q.image.height,He=j.convert(ue.format),Ge=j.convert(ue.type);R.setTexture2D(ue,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,ue.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,ue.unpackAlignment),q.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,$,P.x,P.y,pe,ze,He,Ge,q.image.data):q.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,$,P.x,P.y,q.mipmaps[0].width,q.mipmaps[0].height,He,q.mipmaps[0].data):A.texSubImage2D(A.TEXTURE_2D,$,P.x,P.y,He,Ge,q.image),$===0&&ue.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(P,q,ue,$,pe=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ze=P.max.x-P.min.x+1,He=P.max.y-P.min.y+1,Ge=P.max.z-P.min.z+1,Ke=j.convert($.format),Ye=j.convert($.type);let Ze;if($.isData3DTexture)R.setTexture3D($,0),Ze=A.TEXTURE_3D;else if($.isDataArrayTexture)R.setTexture2DArray($,0),Ze=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,$.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,$.unpackAlignment);const Je=A.getParameter(A.UNPACK_ROW_LENGTH),lt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Xt=A.getParameter(A.UNPACK_SKIP_PIXELS),yn=A.getParameter(A.UNPACK_SKIP_ROWS),Di=A.getParameter(A.UNPACK_SKIP_IMAGES),Mt=ue.isCompressedTexture?ue.mipmaps[0]:ue.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,Mt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Mt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,P.min.x),A.pixelStorei(A.UNPACK_SKIP_ROWS,P.min.y),A.pixelStorei(A.UNPACK_SKIP_IMAGES,P.min.z),ue.isDataTexture||ue.isData3DTexture?A.texSubImage3D(Ze,pe,q.x,q.y,q.z,ze,He,Ge,Ke,Ye,Mt.data):ue.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(Ze,pe,q.x,q.y,q.z,ze,He,Ge,Ke,Mt.data)):A.texSubImage3D(Ze,pe,q.x,q.y,q.z,ze,He,Ge,Ke,Ye,Mt),A.pixelStorei(A.UNPACK_ROW_LENGTH,Je),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,lt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Xt),A.pixelStorei(A.UNPACK_SKIP_ROWS,yn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Di),pe===0&&$.generateMipmaps&&A.generateMipmap(Ze),Me.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),Me.unbindTexture()},this.resetState=function(){x=0,y=0,w=null,Me.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===je?ts:jf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ts?je:$n}}class XS extends Rc{}XS.prototype.isWebGL1Renderer=!0;class dp extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let s=0;const r=i.length;let o;n?o=n:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=n||(o.isVector2?new Se:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new O,s=[],r=[],o=[],a=new O,l=new Et;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(kt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(n===!0){let p=Math.acos(kt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ic extends Kn{constructor(e=0,n=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new Se,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jS extends Ic{constructor(e,n,i,s,r,o){super(e,n,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Lc(){let t=0,e=0,n=0,i=0;function s(r,o,a,l){t=r,e=a,n=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return t+e*r+n*o+i*a}}}const Mo=new O,rl=new Lc,ol=new Lc,al=new Lc;class KS extends Kn{constructor(e=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=s}getPoint(e,n=new O){const i=n,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Mo.subVectors(s[0],s[1]).add(s[0]),c=Mo);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Mo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Mo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),rl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,m),ol.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,m),al.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(rl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ol.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),al.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(rl.calc(l),ol.calc(l),al.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function cd(t,e,n,i,s){const r=(i-e)*.5,o=(s-n)*.5,a=t*t,l=t*a;return(2*n-2*i+r+o)*l+(-3*n+3*i-2*r-o)*a+r*t+n}function qS(t,e){const n=1-t;return n*n*e}function YS(t,e){return 2*(1-t)*t*e}function ZS(t,e){return t*t*e}function wr(t,e,n,i){return qS(t,e)+YS(t,n)+ZS(t,i)}function JS(t,e){const n=1-t;return n*n*n*e}function QS(t,e){const n=1-t;return 3*n*n*t*e}function eE(t,e){return 3*(1-t)*t*t*e}function tE(t,e){return t*t*t*e}function Tr(t,e,n,i,s){return JS(t,e)+QS(t,n)+eE(t,i)+tE(t,s)}class fp extends Kn{constructor(e=new Se,n=new Se,i=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new Se){const i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Tr(e,s.x,r.x,o.x,a.x),Tr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nE extends Kn{constructor(e=new O,n=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new O){const i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Tr(e,s.x,r.x,o.x,a.x),Tr(e,s.y,r.y,o.y,a.y),Tr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dc extends Kn{constructor(e=new Se,n=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Se){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Se){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iE extends Kn{constructor(e=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new O){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pp extends Kn{constructor(e=new Se,n=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Se){const i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(wr(e,s.x,r.x,o.x),wr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sE extends Kn{constructor(e=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new O){const i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(wr(e,s.x,r.x,o.x),wr(e,s.y,r.y,o.y),wr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mp extends Kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Se){const i=n,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(cd(a,l.x,c.x,u.x,h.x),cd(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(new Se().fromArray(s))}return this}}var gp=Object.freeze({__proto__:null,ArcCurve:jS,CatmullRomCurve3:KS,CubicBezierCurve:fp,CubicBezierCurve3:nE,EllipseCurve:Ic,LineCurve:Dc,LineCurve3:iE,QuadraticBezierCurve:pp,QuadraticBezierCurve3:sE,SplineCurve:mp});class rE extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);e.equals(n)||this.curves.push(new Dc(n,e))}getPoint(e,n){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const s=e.curves[n];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const s=this.curves[n];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const s=e.curves[n];this.curves.push(new gp[s.type]().fromJSON(s))}return this}}class Hl extends rE{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Dc(this.currentPoint.clone(),new Se(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,s){const r=new pp(this.currentPoint.clone(),new Se(e,n),new Se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,n,i,s,r,o){const a=new fp(this.currentPoint.clone(),new Se(e,n),new Se(i,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new mp(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,s,r,o),this}absarc(e,n,i,s,r,o){return this.absellipse(e,n,i,i,s,r,o),this}ellipse(e,n,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,s,r,o,a,l),this}absellipse(e,n,i,s,r,o,a,l){const c=new Ic(e,n,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Uc extends fn{constructor(e=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);const r=[],o=[],a=[],l=[],c=new O,u=new Se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=n;h++,d+=3){const p=i+h/n*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=n;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(a,3)),this.setAttribute("uv",new vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wo extends fn{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const v=[],m=i/2;let f=0;M(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(p,2));function M(){const y=new O,w=new O;let I=0;const D=(n-e)/i;for(let U=0;U<=r;U++){const _=[],C=U/r,X=C*(n-e)+e;for(let z=0;z<=s;z++){const N=z/s,V=N*l+a,Y=Math.sin(V),Z=Math.cos(V);w.x=X*Y,w.y=-C*i+m,w.z=X*Z,h.push(w.x,w.y,w.z),y.set(Y,D,Z).normalize(),d.push(y.x,y.y,y.z),p.push(N,1-C),_.push(g++)}v.push(_)}for(let U=0;U<s;U++)for(let _=0;_<r;_++){const C=v[_][U],X=v[_+1][U],z=v[_+1][U+1],N=v[_][U+1];u.push(C,X,N),u.push(X,z,N),I+=6}c.addGroup(f,I,0),f+=I}function x(y){const w=g,I=new Se,D=new O;let U=0;const _=y===!0?e:n,C=y===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,m*C,0),d.push(0,C,0),p.push(.5,.5),g++;const X=g;for(let z=0;z<=s;z++){const V=z/s*l+a,Y=Math.cos(V),Z=Math.sin(V);D.x=_*Z,D.y=m*C,D.z=_*Y,h.push(D.x,D.y,D.z),d.push(0,C,0),I.x=Y*.5+.5,I.y=Z*.5*C+.5,p.push(I.x,I.y),g++}for(let z=0;z<s;z++){const N=w+z,V=X+z;y===!0?u.push(V,V+1,N):u.push(V+1,V,N),U+=3}c.addGroup(f,U,y===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Do extends Hl{constructor(e){super(e),this.uuid=tr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const s=e.holes[n];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const s=this.holes[n];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const s=e.holes[n];this.holes.push(new Hl().fromJSON(s))}return this}}const oE={triangulate:function(t,e,n=2){const i=e&&e.length,s=i?e[0]*n:t.length;let r=vp(t,0,s,n,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,p;if(i&&(r=hE(t,e,r,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let g=n;g<s;g+=n)h=t[g],d=t[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return kr(r,o,n,a,l,p,0),o}};function vp(t,e,n,i,s){let r,o;if(s===SE(t,e,n,i)>0)for(r=e;r<n;r+=i)o=ud(r,t[r],t[r+1],o);else for(r=n-i;r>=e;r-=i)o=ud(r,t[r],t[r+1],o);return o&&ua(o,o.next)&&(zr(o),o=o.next),o}function os(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(ua(n,n.next)||mt(n.prev,n,n.next)===0)){if(zr(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function kr(t,e,n,i,s,r,o){if(!t)return;!o&&r&&gE(t,i,s,r);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,r?lE(t,i,s,r):aE(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),zr(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=cE(os(t),e,n),kr(t,e,n,i,s,r,2)):o===2&&uE(t,e,n,i,s,r):kr(os(t),e,n,i,s,r,1);break}}}function aE(t){const e=t.prev,n=t,i=t.next;if(mt(e,n,i)>=0)return!1;const s=e.x,r=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Us(s,a,r,l,o,c,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function lE(t,e,n,i){const s=t.prev,r=t,o=t.next;if(mt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,v=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=Vl(p,g,e,n,i),M=Vl(v,m,e,n,i);let x=t.prevZ,y=t.nextZ;for(;x&&x.z>=f&&y&&y.z<=M;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Us(a,u,l,h,c,d,x.x,x.y)&&mt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Us(a,u,l,h,c,d,y.x,y.y)&&mt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Us(a,u,l,h,c,d,x.x,x.y)&&mt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=M;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Us(a,u,l,h,c,d,y.x,y.y)&&mt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function cE(t,e,n){let i=t;do{const s=i.prev,r=i.next.next;!ua(s,r)&&_p(s,i,i.next,r)&&Br(s,r)&&Br(r,s)&&(e.push(s.i/n|0),e.push(i.i/n|0),e.push(r.i/n|0),zr(i),zr(i.next),i=t=r),i=i.next}while(i!==t);return os(i)}function uE(t,e,n,i,s,r){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xE(o,a)){let l=xp(o,a);o=os(o,o.next),l=os(l,l.next),kr(o,e,n,i,s,r,0),kr(l,e,n,i,s,r,0);return}a=a.next}o=o.next}while(o!==t)}function hE(t,e,n,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:t.length,c=vp(t,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(_E(c));for(s.sort(dE),r=0;r<s.length;r++)n=fE(s[r],n);return n}function dE(t,e){return t.x-e.x}function fE(t,e){const n=pE(t,e);if(!n)return e;const i=xp(n,t);return os(i,i.next),os(n,n.next)}function pE(t,e){let n=e,i=-1/0,s;const r=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=r&&d>i&&(i=d,s=n.x<n.next.x?n:n.next,d===r))return s}n=n.next}while(n!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;n=s;do r>=n.x&&n.x>=l&&r!==n.x&&Us(o<c?r:i,o,l,c,o<c?i:r,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(r-n.x),Br(n,t)&&(h<u||h===u&&(n.x>s.x||n.x===s.x&&mE(s,n)))&&(s=n,u=h)),n=n.next;while(n!==a);return s}function mE(t,e){return mt(t.prev,t,e.prev)<0&&mt(e.next,t,t.next)<0}function gE(t,e,n,i){let s=t;do s.z===0&&(s.z=Vl(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,vE(s)}function vE(t){let e,n,i,s,r,o,a,l,c=1;do{for(n=t,t=null,r=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(s=n,n=n.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:t=s,s.prevZ=r,r=s;n=i}r.nextZ=null,c*=2}while(o>1);return t}function Vl(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function _E(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Us(t,e,n,i,s,r,o,a){return(s-o)*(e-a)>=(t-o)*(r-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(r-a)>=(s-o)*(i-a)}function xE(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!bE(t,e)&&(Br(t,e)&&Br(e,t)&&yE(t,e)&&(mt(t.prev,t,e.prev)||mt(t,e.prev,e))||ua(t,e)&&mt(t.prev,t,t.next)>0&&mt(e.prev,e,e.next)>0)}function mt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function ua(t,e){return t.x===e.x&&t.y===e.y}function _p(t,e,n,i){const s=To(mt(t,e,n)),r=To(mt(t,e,i)),o=To(mt(n,i,t)),a=To(mt(n,i,e));return!!(s!==r&&o!==a||s===0&&wo(t,n,e)||r===0&&wo(t,i,e)||o===0&&wo(n,t,i)||a===0&&wo(n,e,i))}function wo(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function To(t){return t>0?1:t<0?-1:0}function bE(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&_p(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Br(t,e){return mt(t.prev,t,t.next)<0?mt(t,e,t.next)>=0&&mt(t,t.prev,e)>=0:mt(t,e,t.prev)<0||mt(t,t.next,e)<0}function yE(t,e){let n=t,i=!1;const s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function xp(t,e){const n=new Gl(t.i,t.x,t.y),i=new Gl(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function ud(t,e,n,i){const s=new Gl(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function zr(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Gl(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function SE(t,e,n,i){let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s}class Hs{static area(e){const n=e.length;let i=0;for(let s=n-1,r=0;r<n;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Hs.area(e)<0}static triangulateShape(e,n){const i=[],s=[],r=[];hd(e),dd(i,e);let o=e.length;n.forEach(hd);for(let l=0;l<n.length;l++)s.push(o),o+=n[l].length,dd(i,n[l]);const a=oE.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function hd(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function dd(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Nc extends fn{constructor(e=new Do([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new vt(s,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,v=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,M=n.UVGenerator!==void 0?n.UVGenerator:EE;let x,y=!1,w,I,D,U;f&&(x=f.getSpacedPoints(u),y=!0,d=!1,w=f.computeFrenetFrames(u,!1),I=new O,D=new O,U=new O),d||(m=0,p=0,g=0,v=0);const _=a.extractPoints(c);let C=_.shape;const X=_.holes;if(!Hs.isClockWise(C)){C=C.reverse();for(let S=0,E=X.length;S<E;S++){const R=X[S];Hs.isClockWise(R)&&(X[S]=R.reverse())}}const N=Hs.triangulateShape(C,X),V=C;for(let S=0,E=X.length;S<E;S++){const R=X[S];C=C.concat(R)}function Y(S,E,R){return E||console.error("THREE.ExtrudeGeometry: vec does not exist"),S.clone().addScaledVector(E,R)}const Z=C.length,te=N.length;function J(S,E,R){let B,k,K;const le=S.x-E.x,ne=S.y-E.y,de=R.x-S.x,oe=R.y-S.y,T=le*le+ne*ne,b=le*oe-ne*de;if(Math.abs(b)>Number.EPSILON){const F=Math.sqrt(T),ee=Math.sqrt(de*de+oe*oe),re=E.x-ne/F,_e=E.y+le/F,L=R.x-oe/ee,se=R.y+de/ee,j=((L-re)*oe-(se-_e)*de)/(le*oe-ne*de);B=re+le*j-S.x,k=_e+ne*j-S.y;const Ae=B*B+k*k;if(Ae<=2)return new Se(B,k);K=Math.sqrt(Ae/2)}else{let F=!1;le>Number.EPSILON?de>Number.EPSILON&&(F=!0):le<-Number.EPSILON?de<-Number.EPSILON&&(F=!0):Math.sign(ne)===Math.sign(oe)&&(F=!0),F?(B=-ne,k=le,K=Math.sqrt(T)):(B=le,k=ne,K=Math.sqrt(T/2))}return new Se(B/K,k/K)}const xe=[];for(let S=0,E=V.length,R=E-1,B=S+1;S<E;S++,R++,B++)R===E&&(R=0),B===E&&(B=0),xe[S]=J(V[S],V[R],V[B]);const ge=[];let Re,be=xe.concat();for(let S=0,E=X.length;S<E;S++){const R=X[S];Re=[];for(let B=0,k=R.length,K=k-1,le=B+1;B<k;B++,K++,le++)K===k&&(K=0),le===k&&(le=0),Re[B]=J(R[B],R[K],R[le]);ge.push(Re),be=be.concat(Re)}for(let S=0;S<m;S++){const E=S/m,R=p*Math.cos(E*Math.PI/2),B=g*Math.sin(E*Math.PI/2)+v;for(let k=0,K=V.length;k<K;k++){const le=Y(V[k],xe[k],B);A(le.x,le.y,-R)}for(let k=0,K=X.length;k<K;k++){const le=X[k];Re=ge[k];for(let ne=0,de=le.length;ne<de;ne++){const oe=Y(le[ne],Re[ne],B);A(oe.x,oe.y,-R)}}}const ie=g+v;for(let S=0;S<Z;S++){const E=d?Y(C[S],be[S],ie):C[S];y?(D.copy(w.normals[0]).multiplyScalar(E.x),I.copy(w.binormals[0]).multiplyScalar(E.y),U.copy(x[0]).add(D).add(I),A(U.x,U.y,U.z)):A(E.x,E.y,0)}for(let S=1;S<=u;S++)for(let E=0;E<Z;E++){const R=d?Y(C[E],be[E],ie):C[E];y?(D.copy(w.normals[S]).multiplyScalar(R.x),I.copy(w.binormals[S]).multiplyScalar(R.y),U.copy(x[S]).add(D).add(I),A(U.x,U.y,U.z)):A(R.x,R.y,h/u*S)}for(let S=m-1;S>=0;S--){const E=S/m,R=p*Math.cos(E*Math.PI/2),B=g*Math.sin(E*Math.PI/2)+v;for(let k=0,K=V.length;k<K;k++){const le=Y(V[k],xe[k],B);A(le.x,le.y,h+R)}for(let k=0,K=X.length;k<K;k++){const le=X[k];Re=ge[k];for(let ne=0,de=le.length;ne<de;ne++){const oe=Y(le[ne],Re[ne],B);y?A(oe.x,oe.y+x[u-1].y,x[u-1].x+R):A(oe.x,oe.y,h+R)}}}me(),Te();function me(){const S=s.length/3;if(d){let E=0,R=Z*E;for(let B=0;B<te;B++){const k=N[B];fe(k[2]+R,k[1]+R,k[0]+R)}E=u+m*2,R=Z*E;for(let B=0;B<te;B++){const k=N[B];fe(k[0]+R,k[1]+R,k[2]+R)}}else{for(let E=0;E<te;E++){const R=N[E];fe(R[2],R[1],R[0])}for(let E=0;E<te;E++){const R=N[E];fe(R[0]+Z*u,R[1]+Z*u,R[2]+Z*u)}}i.addGroup(S,s.length/3-S,0)}function Te(){const S=s.length/3;let E=0;Ee(V,E),E+=V.length;for(let R=0,B=X.length;R<B;R++){const k=X[R];Ee(k,E),E+=k.length}i.addGroup(S,s.length/3-S,1)}function Ee(S,E){let R=S.length;for(;--R>=0;){const B=R;let k=R-1;k<0&&(k=S.length-1);for(let K=0,le=u+m*2;K<le;K++){const ne=Z*K,de=Z*(K+1),oe=E+B+ne,T=E+k+ne,b=E+k+de,F=E+B+de;ae(oe,T,b,F)}}}function A(S,E,R){l.push(S),l.push(E),l.push(R)}function fe(S,E,R){Q(S),Q(E),Q(R);const B=s.length/3,k=M.generateTopUV(i,s,B-3,B-2,B-1);Me(k[0]),Me(k[1]),Me(k[2])}function ae(S,E,R,B){Q(S),Q(E),Q(B),Q(E),Q(R),Q(B);const k=s.length/3,K=M.generateSideWallUV(i,s,k-6,k-3,k-2,k-1);Me(K[0]),Me(K[1]),Me(K[3]),Me(K[1]),Me(K[2]),Me(K[3])}function Q(S){s.push(l[S*3+0]),s.push(l[S*3+1]),s.push(l[S*3+2])}function Me(S){r.push(S.x),r.push(S.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return ME(n,i,e)}static fromJSON(e,n){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=n[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new gp[s.type]().fromJSON(s)),new Nc(i,e.options)}}const EE={generateTopUV:function(t,e,n,i,s){const r=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Se(r,o),new Se(a,l),new Se(c,u)]},generateSideWallUV:function(t,e,n,i,s,r){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-h),new Se(d,1-g),new Se(v,1-f)]:[new Se(a,1-l),new Se(u,1-h),new Se(p,1-g),new Se(m,1-f)]}};function ME(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){const r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Oc extends fn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new O,d=new O,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const M=[],x=f/i;let y=0;f===0&&o===0?y=.5/n:f===i&&l===Math.PI&&(y=-.5/n);for(let w=0;w<=n;w++){const I=w/n;h.x=-e*Math.cos(s+I*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+I*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(I+y,1-x),M.push(c++)}u.push(M)}for(let f=0;f<i;f++)for(let M=0;M<n;M++){const x=u[f][M+1],y=u[f][M],w=u[f+1][M],I=u[f+1][M+1];(f!==0||o>0)&&p.push(x,y,I),(f!==i-1||l<Math.PI)&&p.push(y,w,I)}this.setIndex(p),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fc extends fn{constructor(e=1,n=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new O,h=new O,d=new O;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(v),h.y=(e+n*Math.cos(m))*Math.sin(v),h.z=n*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,M=(s+1)*p+g;o.push(v,m,M),o.push(m,f,M)}this.setIndex(o),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class wE extends Wr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kf,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const fd={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class TE{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const AE=new TE;class bp{constructor(e){this.manager=e!==void 0?e:AE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ni={};class CE extends Error{constructor(e,n){super(e),this.response=n}}class PE extends bp{constructor(e){super(e)}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=fd.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:n,onProgress:i,onError:s});return}ni[e]=[],ni[e].push({onLoad:n,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ni[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let v=0;const m=new ReadableStream({start(f){M();function M(){h.read().then(({done:x,value:y})=>{if(x)f.close();else{v+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let I=0,D=u.length;I<D;I++){const U=u[I];U.onProgress&&U.onProgress(w)}f.enqueue(y),M()}})}}});return new Response(m)}else throw new CE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{fd.add(e,c);const u=ni[e];delete ni[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=ni[e];if(u===void 0)throw this.manager.itemError(e),c;delete ni[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class kc extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const ll=new Et,pd=new O,md=new O;class yp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ac,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;pd.setFromMatrixPosition(e.matrixWorld),n.position.copy(pd),md.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(md),n.updateMatrixWorld(),ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class RE extends yp{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=Ho*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||n.far;(i!==n.fov||s!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=s,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class IE extends kc{constructor(e,n,i=0,s=Math.PI/3,r=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new RE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gd=new Et,fr=new O,cl=new O;class LE extends yp{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),fr.setFromMatrixPosition(e.matrixWorld),i.position.copy(fr),cl.copy(i.position),cl.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(cl),i.updateMatrixWorld(),s.makeTranslation(-fr.x,-fr.y,-fr.z),gd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gd)}}class DE extends kc{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new LE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class UE extends kc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=vd();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function vd(){return(typeof performance>"u"?Date:performance).now()}class _d{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(kt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class NE{constructor(){this.type="ShapePath",this.color=new rt,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new Hl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,s){return this.currentPath.quadraticCurveTo(e,n,i,s),this}bezierCurveTo(e,n,i,s,r,o){return this.currentPath.bezierCurveTo(e,n,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(f){const M=[];for(let x=0,y=f.length;x<y;x++){const w=f[x],I=new Do;I.curves=w.curves,M.push(I)}return M}function i(f,M){const x=M.length;let y=!1;for(let w=x-1,I=0;I<x;w=I++){let D=M[w],U=M[I],_=U.x-D.x,C=U.y-D.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(D=M[I],_=-_,U=M[w],C=-C),f.y<D.y||f.y>U.y)continue;if(f.y===D.y){if(f.x===D.x)return!0}else{const X=C*(f.x-D.x)-_*(f.y-D.y);if(X===0)return!0;if(X<0)continue;y=!y}}else{if(f.y!==D.y)continue;if(U.x<=f.x&&f.x<=D.x||D.x<=f.x&&f.x<=U.x)return!0}}return y}const s=Hs.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Do,l.curves=a.curves,c.push(l),c;let u=!s(r[0].getPoints());u=e?!u:u;const h=[],d=[];let p=[],g=0,v;d[g]=void 0,p[g]=[];for(let f=0,M=r.length;f<M;f++)a=r[f],v=a.getPoints(),o=s(v),o=e?!o:o,o?(!u&&d[g]&&g++,d[g]={s:new Do,p:v},d[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:v[0]});if(!d[0])return n(r);if(d.length>1){let f=!1,M=0;for(let x=0,y=d.length;x<y;x++)h[x]=[];for(let x=0,y=d.length;x<y;x++){const w=p[x];for(let I=0;I<w.length;I++){const D=w[I];let U=!0;for(let _=0;_<d.length;_++)i(D.p,d[_].p)&&(x!==_&&M++,U?(U=!1,h[_].push(D)):f=!0);U&&h[x].push(D)}}M>0&&f===!1&&(p=h)}let m;for(let f=0,M=d.length;f<M;f++){l=d[f].s,c.push(l),m=p[f];for(let x=0,y=m.length;x<y;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);class zc{constructor(){Ue(this,"cam_pos_x_tolerance");Ue(this,"cam_pos_y_tolerance");Ue(this,"cam_pos_z_tolerance");Ue(this,"cam_pos_x");Ue(this,"cam_pos_y");Ue(this,"cam_pos_z");Ue(this,"cam_rot_x_tolerance");Ue(this,"cam_rot_y_tolerance");Ue(this,"cam_rot_z_tolerance");Ue(this,"obj_pos_x_tolerance");Ue(this,"obj_pos_y_tolerance");Ue(this,"obj_pos_z_tolerance");Ue(this,"obj_pos_x");Ue(this,"obj_pos_y");Ue(this,"obj_pos_z");Ue(this,"cam_rot_x");Ue(this,"cam_rot_y");Ue(this,"cam_rot_z");Ue(this,"textVisibility");Ue(this,"subtextVisibility");Ue(this,"textBorderVisibility");Ue(this,"flickerTolerance");this.cam_pos_x_tolerance=0,this.cam_pos_y_tolerance=0,this.cam_pos_z_tolerance=0,this.cam_pos_x=0,this.cam_pos_y=0,this.cam_pos_z=0,this.cam_rot_x_tolerance=0,this.cam_rot_y_tolerance=0,this.cam_rot_z_tolerance=0,this.cam_rot_x=0,this.cam_rot_y=0,this.cam_rot_z=0,this.obj_pos_x_tolerance=0,this.obj_pos_y_tolerance=0,this.obj_pos_z_tolerance=0,this.obj_pos_x=0,this.obj_pos_y=0,this.obj_pos_z=0,this.textVisibility=!0,this.subtextVisibility=!0,this.textBorderVisibility=!0,this.flickerTolerance=.005}setCameraPosTolerance(e,n,i){return this.cam_pos_x_tolerance=e,this.cam_pos_y_tolerance=n,this.cam_pos_z_tolerance=i,this}setCameraPos(e,n,i){return this.cam_pos_x=e,this.cam_pos_y=n,this.cam_pos_z=i,this}setCameraRot(e,n,i){return this.cam_rot_x=e,this.cam_rot_y=n,this.cam_rot_z=i,this}setCameraRotTolerance(e,n,i){return this.cam_rot_x_tolerance=e,this.cam_rot_y_tolerance=n,this.cam_rot_z_tolerance=i,this}setObjPosition(e,n,i){return this.obj_pos_x=e,this.obj_pos_y=n,this.obj_pos_z=i,this}setObjPositionTolerance(e,n,i){return this.obj_pos_x_tolerance=e,this.obj_pos_y_tolerance=n,this.obj_pos_z_tolerance=i,this}setTextVisibility(e){return this.textVisibility=e,this}setSubtextVisibility(e){return this.subtextVisibility=e,this}setTextBorderVisibility(e){return this.textBorderVisibility=e,this}setFlickerTolerance(e){return this.flickerTolerance=e,this}}const OE=new zc().setCameraPos(0,0,2).setCameraPosTolerance(0,0,2).setObjPosition(0,0,-1.1),FE=new zc().setCameraPos(0,2,5).setCameraPosTolerance(.6,0,3).setCameraRot(0,-.5,0).setCameraRotTolerance(0,.3,0).setSubtextVisibility(!1).setObjPosition(0,2,-.5),kE=new zc().setCameraPos(0,-9,5).setCameraPosTolerance(0,0,2).setCameraRot(0,-.5,0).setCameraRotTolerance(0,.25,0).setObjPosition(0,0,-1.1).setSubtextVisibility(!1).setFlickerTolerance(.002);class BE extends Nc{constructor(e,n={}){const i=n.font;if(i===void 0)super();else{const s=i.generateShapes(e,n.size);n.depth=n.height!==void 0?n.height:50,n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(s,n)}this.type="TextGeometry"}}class xd extends bp{constructor(e){super(e)}load(e,n,i,s){const r=this,o=new PE(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));n&&n(l)},i,s)}parse(e){return new zE(e)}}class zE{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,n=100){const i=[],s=HE(e,n,this.data);for(let r=0,o=s.length;r<o;r++)i.push(...s[r].toShapes());return i}}function HE(t,e,n){const i=Array.from(t),s=e/n.resolution,r=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*s,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=r;else{const h=VE(u,s,a,l,n);a+=h.offsetX,o.push(h.path)}}return o}function VE(t,e,n,i,s){const r=s.glyphs[t]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+t+'" does not exists in font family '+s.familyName+".");return}const o=new NE;let a,l,c,u,h,d,p,g;if(r.o){const v=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,f=v.length;m<f;)switch(v[m++]){case"m":a=v[m++]*e+n,l=v[m++]*e+i,o.moveTo(a,l);break;case"l":a=v[m++]*e+n,l=v[m++]*e+i,o.lineTo(a,l);break;case"q":c=v[m++]*e+n,u=v[m++]*e+i,h=v[m++]*e+n,d=v[m++]*e+i,o.quadraticCurveTo(h,d,c,u);break;case"b":c=v[m++]*e+n,u=v[m++]*e+i,h=v[m++]*e+n,d=v[m++]*e+i,p=v[m++]*e+n,g=v[m++]*e+i,o.bezierCurveTo(h,d,p,g,c,u);break}}return{offsetX:r.ha*e,path:o}}const Sp={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Xr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const GE=new ap(-1,1,1,-1,0,1),Hc=new fn;Hc.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3));Hc.setAttribute("uv",new vt([0,2,0,0,2,0],2));class Ep{constructor(e){this._mesh=new Tt(Hc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,GE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Mp extends Xr{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Go.clone(e.uniforms),this.material=new nn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ep(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class bd extends Xr{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class WE extends Xr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class yd{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Se);this._width=i.width,this._height=i.height,n=new Dn(this._width*this._pixelRatio,this._height*this._pixelRatio),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mp(Sp),this.clock=new Bc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}bd!==void 0&&(o instanceof bd?i=!0:o instanceof WE&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $E extends Xr{constructor(e,n,i,s,r){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,n,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=s}}const XE={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new rt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ys extends Xr{constructor(e,n,i,s){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Se(e.x,e.y):new Se(256,256),this.clearColor=new rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Dn(r,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Dn(r,o);d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Dn(r,o);p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=XE;this.highPassUniforms=Go.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new Se(r,o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Sp;this.copyUniforms=Go.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new nn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Dl,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new rt,this.oldClearAlpha=1,this.basic=new Ei,this.fsQuad=new Ep(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),s=Math.round(n/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.texSize.value=new Se(i,s),i=Math.round(i/2),s=Math.round(s/2)}render(e,n,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ys.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ys.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new nn({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Se(.5,.5)},direction:{value:new Se(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new nn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ys.BlurDirectionX=new Se(1,0);Ys.BlurDirectionY=new Se(0,1);class ul{constructor(e,n=.3){Ue(this,"obj");Ue(this,"flickerTime");Ue(this,"flickerEnabled");Ue(this,"max_flicker_time");this.obj=e,this.flickerTime=Number.MAX_SAFE_INTEGER,this.flickerEnabled=!0,this.max_flicker_time=n}performFlicker(e,n){this.flickerEnabled&&(this.obj.visible&&Math.random()<e?(this.obj.visible=!1,this.flickerTime=n+this.max_flicker_time*Math.random()):n>this.flickerTime&&(this.obj.visible=!0))}setFlickerEnabled(e,n=!1){this.flickerEnabled=e,n&&(this.obj.visible=e)}}class jE{constructor(e,n,i){Ue(this,"scene",new dp);Ue(this,"camera");Ue(this,"renderer");Ue(this,"config");Ue(this,"clk",new Bc);Ue(this,"layers",this.initLayers(2));Ue(this,"BLOOM_LAYER",1);Ue(this,"text",new Yt);Ue(this,"subtext",new Yt);Ue(this,"textBorder",new Yt);Ue(this,"centralObject",new Yt);Ue(this,"lights",{ambientLight:new Yt,mouseLight:new Yt});Ue(this,"props");Ue(this,"flickerStates",{text:new ul(this.text),subtext:new ul(this.subtext),textBorder:new ul(this.textBorder)});Ue(this,"scrollStates",{home:OE,about:FE,portfolio:kE});Ue(this,"bloomComposer");Ue(this,"finalComposer");Ue(this,"materials",new Map);Ue(this,"createPointLight",(e,n,i,s,r)=>{const o=new DE(s,r);return o.position.set(e,n,i),o});Ue(this,"onMouseMove",e=>{this.lights.mouseLight.position.x=e.clientX/window.innerWidth*4-2,this.lights.mouseLight.position.y=-(e.clientY/window.innerHeight)*4+6,this.centralObject.rotation.x=-(e.clientY/window.innerHeight)*.1-.1,this.centralObject.rotation.y=-(e.clientX/window.innerWidth)*.1-.1});Ue(this,"onWindowResize",()=>{const e=this.getSizes(),n=e.width/e.height;this.camera.aspect=n,this.camera.updateProjectionMatrix(),this.bloomComposer.setSize(e.width,e.height),this.finalComposer.setSize(e.width,e.height),this.renderer.setSize(e.width,e.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.onScroll()});Ue(this,"onScroll",()=>{const e=window.scrollY;e<=this.props.homeY?this.transitSceneState(this.scrollStates.home,this.scrollStates.home,e,0,this.props.homeY+1):e<=this.props.aboutY?this.transitSceneState(this.scrollStates.home,this.scrollStates.about,e,this.props.homeY,this.props.aboutY):this.transitSceneState(this.scrollStates.about,this.scrollStates.portfolio,e,this.props.aboutY,this.props.portfolioY)});Ue(this,"darkenNonBloomed",e=>{const n=new Ei({color:"black"});e.isMesh&&this.layers[this.BLOOM_LAYER].test(e.layers)===!1&&(e.material=n)});Ue(this,"restoreMaterial",e=>{this.materials.get(e.uuid)&&(e.material=this.materials.get(e.uuid))});this.props=i,this.config=n,this.camera=this.createCamera(),this.renderer=this.createRenderer(e),this.buildTextandTextBorderObject(),this.buildSubtextObject(),this.buildCentralObject(),this.buildAmbientLight(),this.buildMouseLight();let s=this.getComposers();this.bloomComposer=s.bloomComposer,this.finalComposer=s.finalComposer,this.onWindowResize(),this.onScroll(),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("resize",this.onWindowResize),window.addEventListener("scroll",this.onScroll)}initLayers(e=2){const n=[];for(let i=0;i<2;i++){const s=new Tc;s.set(i),n.push(s)}return n}getSizes(){return{width:window.innerWidth,height:window.innerHeight}}createRenderer(e){const n=new Rc({canvas:e}),i=this.getSizes();return n.setSize(i.width,i.height),n.setClearColor(this.config.bg_color),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.shadowMap.enabled=!0,n.render(this.scene,this.camera),n}createCamera(){const e=this.getSizes();e.width/e.height;const n=new Jt(75,e.width/e.height,1,100);return this.scene.add(n),n}buildSubtextObject(){const e=new xd,n=new Ei({color:this.config.subtextColor});e.load(this.config.subtextFontPath,i=>{const s=this.createTextMesh(i,n,this.config.subtext,.2);s.position.y=-.8,s.layers.toggle(this.BLOOM_LAYER),this.subtext.add(s),this.subtext.add(this.createSubtextLight()),this.scene.add(this.subtext)})}buildTextandTextBorderObject(){const e=new xd,n=new Ei({color:this.config.textColor});e.load(this.config.textFontPath,i=>{const s=this.createTextMesh(i,n,this.config.text,.5);s.layers.toggle(this.BLOOM_LAYER),this.text.add(s),this.text.add(this.creaeteTextLight()),this.scene.add(this.text);const r=new rs().setFromObject(s);this.textBorder.add(this.createBorderMesh(r)),this.textBorder.add(this.createTextBorderLight(r)),this.scene.add(this.textBorder)})}createTextMesh(e,n,i,s){const r=new BE(i,{font:e,size:s,height:.05,curveSegments:5,bevelEnabled:!1});return r.center(),new Tt(r,n)}createBorderMesh(e=new rs().setFromObject(this.text)){const n=new Ei({color:this.config.borderColor}),i=this.config.borderPosOffset,s=this.config.thickness,r=i,o=e.max.x-e.min.x,a=e.max.y-e.min.y,l=o/2+i,c=a/2+i,u=l-r,h=c-r,d=new Fc(r,s,12,12,Math.PI/2),p=new Wo(s,s,a),g=new Wo(s,s,o).rotateZ(Math.PI/2),v={t:new Tt(g,n),b:new Tt(g,n),l:new Tt(p,n),r:new Tt(p,n),tr:new Tt(d,n),tl:new Tt(d,n),br:new Tt(d,n),bl:new Tt(d,n)};v.t.position.set(0,c,0),v.b.position.set(0,-c,0),v.l.position.set(l,0,0),v.r.position.set(-l,0,0),v.tr.position.set(u,h,0),v.tl.position.set(-u,h,0),v.br.position.set(u,-h,0),v.bl.position.set(-u,-h,0),v.tl.rotation.z=Math.PI/2,v.bl.rotation.z=Math.PI,v.br.rotation.z=3*Math.PI/2;const m=new Yt;for(let f of this.keys(v))v[f].layers.toggle(this.BLOOM_LAYER),m.add(v[f]);return m}buildCentralObject(){const e=new Oc(1,5,5),n=new wE({color:"white",wireframe:!1}),i=new Tt(e,n);i.receiveShadow=!0,i.layers.disable(this.BLOOM_LAYER),this.centralObject.add(i),this.scene.add(this.centralObject)}buildAmbientLight(){const e=new UE(this.config.ambientColor);this.lights.ambientLight.add(e),this.scene.add(this.lights.ambientLight)}buildMouseLight(){const e=new IE(10354614,.3,10,Math.PI/8,.5,2);e.lookAt(this.centralObject.position),e.position.set(0,0,2),this.lights.mouseLight.add(e),this.scene.add(this.lights.mouseLight)}creaeteTextLight(){const e=new Yt;return e.add(this.createPointLight(0,0,0,this.config.textColor,this.config.textIntensity)),e.add(this.createPointLight(-1,0,0,this.config.textColor,this.config.textIntensity)),e.add(this.createPointLight(1,0,0,this.config.textColor,this.config.textIntensity)),e}createSubtextLight(){const e=new Yt;return e.add(this.createPointLight(0,-.8,0,this.config.subtextColor,this.config.subtextIntensity)),e}createTextBorderLight(e){const n=new Yt,i=e.max.x-e.min.x,s=e.max.y-e.min.y,r=i/2,o=s/2,a=this.config.borderColor,l=this.config.textBorderIntensity;return n.add(this.createPointLight(r,o,0,a,l)),n.add(this.createPointLight(-r,o,0,a,l)),n}transitSceneState(e,n,i,s,r){const o=p=>(.5*(-Math.cos(p*Math.PI)+1))**1.5,a=r-s,l=(i-s)/a;let c=l>1?1:o(l);const u=(p,g)=>{const v=this.getSizes(),m=v.width/v.height;return g/m+p},h=(p,g,v,m)=>{const f=m+"_tolerance",M=u(e[m],e[f]),x=u(n[m],n[f]);p[g][v]=c*(x-M)+M},d=(p,g,v)=>{h(p,g,"x",v+"_x"),h(p,g,"y",v+"_y"),h(p,g,"z",v+"_z")};d(this.camera,"position","cam_pos"),d(this.camera,"rotation","cam_rot"),d(this.centralObject,"position","obj_pos"),this.config.flickerTolerance=n.flickerTolerance,this.flickerStates.text.setFlickerEnabled(n.textVisibility,!0),this.flickerStates.subtext.setFlickerEnabled(n.subtextVisibility,!0),this.flickerStates.textBorder.setFlickerEnabled(n.textBorderVisibility,!0)}update(){const e=this.clk.getElapsedTime();this.flicker(e),this.renderPostProcessing()}flicker(e){if(this.text)for(let n of this.keys(this.flickerStates))this.flickerStates[n].performFlicker(this.config.flickerTolerance,e)}renderPostProcessing(){this.renderBloom(),this.finalComposer.render()}renderBloom(){this.scene.traverse(this.darkenNonBloomed),this.bloomComposer.render(),this.scene.traverse(this.restoreMaterial)}getComposers(){this.recordMaterials();const e=new $E(this.scene,this.camera),n=new Ys(new Se(window.innerWidth,window.innerHeight),1.5,.4,.85);n.threshold=this.config.bloomThreshold,n.strength=this.config.bloomStrength,n.radius=this.config.bloomRadius;const i=new yd(this.renderer);i.renderToScreen=!1,i.addPass(e),i.addPass(n);const s=new Mp(new nn({uniforms:{baseTexture:{value:null},bloomTexture:{value:i.renderTarget2.texture}},vertexShader:`
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,fragmentShader:`
                    uniform sampler2D baseTexture;
                    uniform sampler2D bloomTexture;
                    varying vec2 vUv;
                    void main() {
                        gl_FragColor = (texture2D(baseTexture, vUv) + texture2D(bloomTexture, vUv));
                    }
                `}),"baseTexture");s.needsSwap=!0;const r=new yd(this.renderer);return r.addPass(e),r.addPass(s),{bloomComposer:i,finalComposer:r}}recordMaterials(){this.scene.traverse(e=>{e.material&&this.materials.set(e.uuid,e.material)})}keys(e){return Object.keys(e)}}const KE={bg_color:0,ambientColor:1118515,ambientIntensity:.1,modelPath:"public/scene.gltf",text:"Jia Jun's",subtext:"Portfolio",textFontPath:"fonts/beon_medium.typeface.json",subtextFontPath:"fonts/bettina_signature_regular.typeface.json",textColor:16746598,subtextColor:16746666,borderColor:65280,textIntensity:.3,subtextIntensity:.3,textBorderIntensity:.2,borderPosOffset:.15,thickness:.025,flickerTolerance:.005,bloomThreshold:0,bloomStrength:2.5,bloomRadius:1},qE=Xn({__name:"BGScene",props:{homeY:{type:Number,required:!0},aboutY:{type:Number,required:!0},portfolioY:{type:Number,required:!0}},setup(t){const e=t,n=_t(null);return cs(()=>{let i=n.value;if(!i)throw new Error("No canvas found");const s=new jE(i,KE,e);function r(){s.update(),setTimeout(function(){requestAnimationFrame(r)},1e3/60)}r()}),(i,s)=>(G(),ve("main",null,[W("div",null,[W("canvas",{ref_key:"bgscene",ref:n,class:"webgl"},null,512)])]))}});const wp=t=>(Vr("data-v-fb41088e"),t=t(),Gr(),t),YE={key:0,class:"app-topbar"},ZE={class:"topbar-start"},JE=wp(()=>W("a",{class:"topbar-title neon-text-primary",href:"#home"},"Jj",-1)),QE=["href"],eM={class:"topbar-text"},tM={class:"topbar-end"},nM=["href"],iM={class:"topbar-text"},sM=["href"],rM={key:1,class:"app-topbar"},oM=wp(()=>W("div",{class:"topbar-start"},[W("a",{class:"topbar-title neon-text-primary",href:"/#home"},"Jj")],-1)),aM={class:"topbar-end"},lM={class:"sidebar-links"},cM=["href"],uM={class:"topbar-text"},hM={class:"sidebar-socials"},dM=["href"],fM=767,pM=Xn({__name:"Topbar",props:{active:{type:String,required:!0}},setup(t){const e=t,n=_t(["about","portfolio"]),i=_t([]),s=_t([{name:"github",link:"https://github.com/keee99"},{name:"linkedin",link:"https://www.linkedin.com/in/jayjaykoh/"},{name:"instagram",link:"https://www.instagram.com/jayjay_koh/"},{name:"envelope",link:"mailto:kohjim99@gmail.com"}]),r=_t(window.innerWidth),o=tg(e,"active"),a=_t(!1),l=u=>u.charAt(0).toUpperCase()+u.slice(1),c=()=>r.value=window.innerWidth;return window.addEventListener("resize",c),(u,h)=>{const d=gt("Sidebar");return G(),ve("main",null,[r.value>fM?(G(),ve("div",YE,[W("div",ZE,[JE,(G(!0),ve(tt,null,Wt(n.value,p=>(G(),ve("a",{class:At(["topbar-link",{"topbar-link-active":o.value===p,"topbar-link-inactive":o.value!==p}]),href:"#"+p},[W("div",eM,Nt(l(p)),1)],10,QE))),256))]),W("div",tM,[(G(!0),ve(tt,null,Wt(i.value,p=>(G(),ve("a",{class:At(["topbar-link",{"topbar-link-active":o.value===p,"topbar-link-inactive":o.value!==p}]),href:"#"+p},[W("div",iM,Nt(l(p)),1)],10,nM))),256)),(G(!0),ve(tt,null,Wt(s.value,p=>(G(),ve("a",{class:"topbar-link",href:p.link,target:"_blank"},[W("i",{class:At(["social-i pi","pi-"+p.name])},null,2)],8,sM))),256))])])):Oe("",!0),r.value<=768?(G(),ve("div",rM,[oM,W("div",aM,[Xe(d,{visible:a.value,"onUpdate:visible":h[1]||(h[1]=p=>a.value=p),position:"full",id:"app-sidebar",class:"neon-border"},{default:ht(()=>[W("div",lM,[(G(!0),ve(tt,null,Wt(n.value,p=>(G(),ve("a",{class:At(["topbar-link sidebar-col",{"topbar-link-active":o.value===p,"topbar-link-inactive":o.value!==p}]),href:"#"+p,onClick:h[0]||(h[0]=g=>a.value=!1)},[W("div",uM,Nt(l(p)),1)],10,cM))),256))]),W("div",hM,[(G(!0),ve(tt,null,Wt(s.value,p=>(G(),ve("a",{class:"topbar-link sidebar-col",href:p.link,target:"_blank"},[W("i",{class:At(["social-i pi","pi-"+p.name])},null,2)],8,dM))),256))])]),_:1},8,["visible"]),W("i",{class:"pi pi-bars topbar-hamburger neon-text-secondary",onClick:h[2]||(h[2]=p=>a.value=!0)})])])):Oe("",!0)])}}});const mM=er(pM,[["__scopeId","data-v-fb41088e"]]);var gM=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Tp;const ha=t=>Tp=t,Ap=Symbol();function Wl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ar;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ar||(Ar={}));function vM(){const t=Bd(!0),e=t.run(()=>_t({}));let n=[],i=[];const s=Zo({install(r){ha(s),s._a=r,r.provide(Ap,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!gM?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Cp=()=>{};function Sd(t,e,n,i=Cp){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&zd()&&bm(s),s}function Rs(t,...e){t.slice().forEach(n=>{n(...e)})}const _M=t=>t();function $l(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];Wl(s)&&Wl(i)&&t.hasOwnProperty(n)&&!xt(i)&&!wi(i)?t[n]=$l(s,i):t[n]=i}return t}const xM=Symbol();function bM(t){return!Wl(t)||!t.hasOwnProperty(xM)}const{assign:xi}=Object;function yM(t){return!!(xt(t)&&t.effect)}function SM(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=Jm(n.state.value[t]);return xi(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Zo(tn(()=>{ha(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return l=Pp(t,c,e,n,i,!0),l}function Pp(t,e,n={},i,s,r){let o;const a=xi({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],p;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={}),_t({});let v;function m(U){let _;c=u=!1,typeof U=="function"?(U(i.state.value[t]),_={type:Ar.patchFunction,storeId:t,events:p}):($l(i.state.value[t],U),_={type:Ar.patchObject,payload:U,storeId:t,events:p});const C=v=Symbol();ac().then(()=>{v===C&&(c=!0)}),u=!0,Rs(h,_,i.state.value[t])}const f=r?function(){const{state:_}=n,C=_?_():{};this.$patch(X=>{xi(X,C)})}:Cp;function M(){o.stop(),h=[],d=[],i._s.delete(t)}function x(U,_){return function(){ha(i);const C=Array.from(arguments),X=[],z=[];function N(Z){X.push(Z)}function V(Z){z.push(Z)}Rs(d,{args:C,name:U,store:w,after:N,onError:V});let Y;try{Y=_.apply(this&&this.$id===t?this:w,C)}catch(Z){throw Rs(z,Z),Z}return Y instanceof Promise?Y.then(Z=>(Rs(X,Z),Z)).catch(Z=>(Rs(z,Z),Promise.reject(Z))):(Rs(X,Y),Y)}}const y={_p:i,$id:t,$onAction:Sd.bind(null,d),$patch:m,$reset:f,$subscribe(U,_={}){const C=Sd(h,U,_.detached,()=>X()),X=o.run(()=>vr(()=>i.state.value[t],z=>{(_.flush==="sync"?u:c)&&U({storeId:t,type:Ar.direct,events:p},z)},xi({},l,_)));return C},$dispose:M},w=ls(y);i._s.set(t,w);const I=i._a&&i._a.runWithContext||_M,D=i._e.run(()=>(o=Bd(),I(()=>o.run(e))));for(const U in D){const _=D[U];if(xt(_)&&!yM(_)||wi(_))r||(g&&bM(_)&&(xt(_)?_.value=g[U]:$l(_,g[U])),i.state.value[t][U]=_);else if(typeof _=="function"){const C=x(U,_);D[U]=C,a.actions[U]=_}}return xi(w,D),xi(it(w),D),Object.defineProperty(w,"$state",{get:()=>i.state.value[t],set:U=>{m(_=>{xi(_,U)})}}),i._p.forEach(U=>{xi(w,o.run(()=>U({store:w,app:i._a,pinia:i,options:a})))}),g&&r&&n.hydrate&&n.hydrate(w.$state,g),c=!0,u=!0,w}function EM(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,l){const c=zg();return a=a||(c?Ln(Ap,null):null),a&&ha(a),a=Tp,a._s.has(i)||(r?Pp(i,e,s,a):SM(i,s,a)),a._s.get(i)}return o.$id=i,o}const MM=EM("counter",{state:()=>({count:0,name:"Eduardo"}),getters:{doubleCount:t=>t.count*2},actions:{increment(){this.count++}},persist:{storage:sessionStorage}});/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */class Vn{constructor(e,n,i,s,r="div"){this.parent=e,this.object=n,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),Vn.nextNameID=Vn.nextNameID||0,this.$name.id=`lil-gui-name-${++Vn.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const n=this.parent.add(this.object,this.property,e);return n.name(this._name),this.destroy(),n}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class wM extends Vn{constructor(e,n,i){super(e,n,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Xl(t){let e,n;return(e=t.match(/(#|0x)?([a-f0-9]{6})/i))?n=e[2]:(e=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),n?"#"+n:!1}const TM={isPrimitive:!0,match:t=>typeof t=="string",fromHexString:Xl,toHexString:Xl},Hr={isPrimitive:!0,match:t=>typeof t=="number",fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},AM={isPrimitive:!1,match:t=>Array.isArray(t),fromHexString(t,e,n=1){const i=Hr.fromHexString(t);e[0]=(i>>16&255)/255*n,e[1]=(i>>8&255)/255*n,e[2]=(i&255)/255*n},toHexString([t,e,n],i=1){i=255/i;const s=t*i<<16^e*i<<8^n*i<<0;return Hr.toHexString(s)}},CM={isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,e,n=1){const i=Hr.fromHexString(t);e.r=(i>>16&255)/255*n,e.g=(i>>8&255)/255*n,e.b=(i&255)/255*n},toHexString({r:t,g:e,b:n},i=1){i=255/i;const s=t*i<<16^e*i<<8^n*i<<0;return Hr.toHexString(s)}},PM=[TM,Hr,AM,CM];function RM(t){return PM.find(e=>e.match(t))}class IM extends Vn{constructor(e,n,i,s){super(e,n,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=RM(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Xl(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const n=this._format.fromHexString(e);this.setValue(n)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class hl extends Vn{constructor(e,n,i){super(e,n,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class LM extends Vn{constructor(e,n,i,s,r,o){super(e,n,i,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,n=!0){return this._step=e,this._stepExplicit=n,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let n=(e-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=n*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let f=parseFloat(this.$input.value);isNaN(f)||(this._stepExplicit&&(f=this._snap(f)),this.setValue(this._clamp(f)))},n=f=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+f),this.$input.value=this.getValue())},i=f=>{f.code==="Enter"&&this.$input.blur(),f.code==="ArrowUp"&&(f.preventDefault(),n(this._step*this._arrowKeyMultiplier(f))),f.code==="ArrowDown"&&(f.preventDefault(),n(this._step*this._arrowKeyMultiplier(f)*-1))},s=f=>{this._inputFocused&&(f.preventDefault(),n(this._step*this._normalizeMouseWheel(f)))};let r=!1,o,a,l,c,u;const h=5,d=f=>{o=f.clientX,a=l=f.clientY,r=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",g)},p=f=>{if(r){const M=f.clientX-o,x=f.clientY-a;Math.abs(x)>h?(f.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>h&&g()}if(!r){const M=f.clientY-l;u-=M*this._step*this._arrowKeyMultiplier(f),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}l=f.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",g)},v=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",v),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,M,x,y,w)=>(f-M)/(x-M)*(w-y)+y,n=f=>{const M=this.$slider.getBoundingClientRect();let x=e(f,M.left,M.right,this._min,this._max);this._snapClampSetValue(x)},i=f=>{this._setDraggingStyle(!0),n(f.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=f=>{n(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),n(f.touches[0].clientX),o=!1},u=f=>{f.touches.length>1||(this._hasScrollBar?(a=f.touches[0].clientX,l=f.touches[0].clientY,o=!0):c(f),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=f=>{if(o){const M=f.touches[0].clientX-a,x=f.touches[0].clientY-l;Math.abs(M)>Math.abs(x)?c(f):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else f.preventDefault(),n(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),g=400;let v;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const x=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(p,g)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,n="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${n}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:n,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(n=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),n+-i}_arrowKeyMultiplier(e){let n=this._stepExplicit?1:10;return e.shiftKey?n*=10:e.altKey&&(n/=10),n}_snap(e){const n=Math.round(e/this._step)*this._step;return parseFloat(n.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class DM extends Vn{constructor(e,n,i,s){super(e,n,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(r=>{const o=document.createElement("option");o.innerHTML=r,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),n=this._values.indexOf(e);return this.$select.selectedIndex=n,this.$display.innerHTML=n===-1?e:this._names[n],this}}class UM extends Vn{constructor(e,n,i){super(e,n,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const NM=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function OM(t){const e=document.createElement("style");e.innerHTML=t;const n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(e,n):document.head.appendChild(e)}let Ed=!1;class Vc{constructor({parent:e,autoPlace:n=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),l&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Ed&&a&&(OM(NM),Ed=!0),i?i.appendChild(this.domElement):n&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o,this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(e,n,i,s,r){if(Object(i)===i)return new DM(this,e,n,i);const o=e[n];switch(typeof o){case"number":return new LM(this,e,n,i,s,r);case"boolean":return new wM(this,e,n);case"string":return new UM(this,e,n);case"function":return new hl(this,e,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,e,`
	value:`,o)}addColor(e,n,i=1){return new IM(this,e,n,i)}addFolder(e){const n=new Vc({parent:this,title:e});return this.root._closeFolders&&n.close(),n}load(e,n=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof hl||i._name in e.controllers&&i.load(e.controllers[i._name])}),n&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const n={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof hl)){if(i._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);n.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);n.folders[i._title]=i.save()}),n}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(n=>{e=e.concat(n.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(n=>{e=e.concat(n.foldersRecursive())}),e}}const Md={type:"change"},dl={type:"start"},wd={type:"end"};class FM extends us{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:fs.ROTATE,TWO:fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",de),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",de),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Md),i.update(),r=s.NONE},this.update=function(){const L=new O,se=new ss().setFromUnitVectors(e.up,new O(0,1,0)),j=se.clone().invert(),Ae=new O,Le=new ss,Ne=2*Math.PI;return function(){const Pe=i.object.position;L.copy(Pe).sub(i.target),L.applyQuaternion(se),a.setFromVector3(L),i.autoRotate&&r===s.NONE&&_(D()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Be=i.minAzimuthAngle,$e=i.maxAzimuthAngle;return isFinite(Be)&&isFinite($e)&&(Be<-Math.PI?Be+=Ne:Be>Math.PI&&(Be-=Ne),$e<-Math.PI?$e+=Ne:$e>Math.PI&&($e-=Ne),Be<=$e?a.theta=Math.max(Be,Math.min($e,a.theta)):a.theta=a.theta>(Be+$e)/2?Math.max(Be,a.theta):Math.min($e,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),L.setFromSpherical(a),L.applyQuaternion(j),Pe.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||Ae.distanceToSquared(i.object.position)>o||8*(1-Le.dot(i.object.quaternion))>o?(i.dispatchEvent(Md),Ae.copy(i.object.position),Le.copy(i.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",b),i.domElement.removeEventListener("pointerdown",R),i.domElement.removeEventListener("pointercancel",k),i.domElement.removeEventListener("wheel",ne),i.domElement.removeEventListener("pointermove",B),i.domElement.removeEventListener("pointerup",k),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",de),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new _d,l=new _d;let c=1;const u=new O;let h=!1;const d=new Se,p=new Se,g=new Se,v=new Se,m=new Se,f=new Se,M=new Se,x=new Se,y=new Se,w=[],I={};function D(){return 2*Math.PI/60/60*i.autoRotateSpeed}function U(){return Math.pow(.95,i.zoomSpeed)}function _(L){l.theta-=L}function C(L){l.phi-=L}const X=function(){const L=new O;return function(j,Ae){L.setFromMatrixColumn(Ae,0),L.multiplyScalar(-j),u.add(L)}}(),z=function(){const L=new O;return function(j,Ae){i.screenSpacePanning===!0?L.setFromMatrixColumn(Ae,1):(L.setFromMatrixColumn(Ae,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(j),u.add(L)}}(),N=function(){const L=new O;return function(j,Ae){const Le=i.domElement;if(i.object.isPerspectiveCamera){const Ne=i.object.position;L.copy(Ne).sub(i.target);let Ie=L.length();Ie*=Math.tan(i.object.fov/2*Math.PI/180),X(2*j*Ie/Le.clientHeight,i.object.matrix),z(2*Ae*Ie/Le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(X(j*(i.object.right-i.object.left)/i.object.zoom/Le.clientWidth,i.object.matrix),z(Ae*(i.object.top-i.object.bottom)/i.object.zoom/Le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function V(L){i.object.isPerspectiveCamera?c/=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*L)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(L){i.object.isPerspectiveCamera?c*=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/L)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(L){d.set(L.clientX,L.clientY)}function te(L){M.set(L.clientX,L.clientY)}function J(L){v.set(L.clientX,L.clientY)}function xe(L){p.set(L.clientX,L.clientY),g.subVectors(p,d).multiplyScalar(i.rotateSpeed);const se=i.domElement;_(2*Math.PI*g.x/se.clientHeight),C(2*Math.PI*g.y/se.clientHeight),d.copy(p),i.update()}function ge(L){x.set(L.clientX,L.clientY),y.subVectors(x,M),y.y>0?V(U()):y.y<0&&Y(U()),M.copy(x),i.update()}function Re(L){m.set(L.clientX,L.clientY),f.subVectors(m,v).multiplyScalar(i.panSpeed),N(f.x,f.y),v.copy(m),i.update()}function be(L){L.deltaY<0?Y(U()):L.deltaY>0&&V(U()),i.update()}function ie(L){let se=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?C(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),se=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?C(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),se=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?_(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),se=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?_(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),se=!0;break}se&&(L.preventDefault(),i.update())}function me(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{const L=.5*(w[0].pageX+w[1].pageX),se=.5*(w[0].pageY+w[1].pageY);d.set(L,se)}}function Te(){if(w.length===1)v.set(w[0].pageX,w[0].pageY);else{const L=.5*(w[0].pageX+w[1].pageX),se=.5*(w[0].pageY+w[1].pageY);v.set(L,se)}}function Ee(){const L=w[0].pageX-w[1].pageX,se=w[0].pageY-w[1].pageY,j=Math.sqrt(L*L+se*se);M.set(0,j)}function A(){i.enableZoom&&Ee(),i.enablePan&&Te()}function fe(){i.enableZoom&&Ee(),i.enableRotate&&me()}function ae(L){if(w.length==1)p.set(L.pageX,L.pageY);else{const j=_e(L),Ae=.5*(L.pageX+j.x),Le=.5*(L.pageY+j.y);p.set(Ae,Le)}g.subVectors(p,d).multiplyScalar(i.rotateSpeed);const se=i.domElement;_(2*Math.PI*g.x/se.clientHeight),C(2*Math.PI*g.y/se.clientHeight),d.copy(p)}function Q(L){if(w.length===1)m.set(L.pageX,L.pageY);else{const se=_e(L),j=.5*(L.pageX+se.x),Ae=.5*(L.pageY+se.y);m.set(j,Ae)}f.subVectors(m,v).multiplyScalar(i.panSpeed),N(f.x,f.y),v.copy(m)}function Me(L){const se=_e(L),j=L.pageX-se.x,Ae=L.pageY-se.y,Le=Math.sqrt(j*j+Ae*Ae);x.set(0,Le),y.set(0,Math.pow(x.y/M.y,i.zoomSpeed)),V(y.y),M.copy(x)}function S(L){i.enableZoom&&Me(L),i.enablePan&&Q(L)}function E(L){i.enableZoom&&Me(L),i.enableRotate&&ae(L)}function R(L){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",B),i.domElement.addEventListener("pointerup",k)),F(L),L.pointerType==="touch"?oe(L):K(L))}function B(L){i.enabled!==!1&&(L.pointerType==="touch"?T(L):le(L))}function k(L){ee(L),w.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",B),i.domElement.removeEventListener("pointerup",k)),i.dispatchEvent(wd),r=s.NONE}function K(L){let se;switch(L.button){case 0:se=i.mouseButtons.LEFT;break;case 1:se=i.mouseButtons.MIDDLE;break;case 2:se=i.mouseButtons.RIGHT;break;default:se=-1}switch(se){case ds.DOLLY:if(i.enableZoom===!1)return;te(L),r=s.DOLLY;break;case ds.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;J(L),r=s.PAN}else{if(i.enableRotate===!1)return;Z(L),r=s.ROTATE}break;case ds.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;Z(L),r=s.ROTATE}else{if(i.enablePan===!1)return;J(L),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(dl)}function le(L){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;xe(L);break;case s.DOLLY:if(i.enableZoom===!1)return;ge(L);break;case s.PAN:if(i.enablePan===!1)return;Re(L);break}}function ne(L){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(L.preventDefault(),i.dispatchEvent(dl),be(L),i.dispatchEvent(wd))}function de(L){i.enabled===!1||i.enablePan===!1||ie(L)}function oe(L){switch(re(L),w.length){case 1:switch(i.touches.ONE){case fs.ROTATE:if(i.enableRotate===!1)return;me(),r=s.TOUCH_ROTATE;break;case fs.PAN:if(i.enablePan===!1)return;Te(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case fs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;A(),r=s.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;fe(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(dl)}function T(L){switch(re(L),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;ae(L),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;Q(L),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;S(L),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;E(L),i.update();break;default:r=s.NONE}}function b(L){i.enabled!==!1&&L.preventDefault()}function F(L){w.push(L)}function ee(L){delete I[L.pointerId];for(let se=0;se<w.length;se++)if(w[se].pointerId==L.pointerId){w.splice(se,1);return}}function re(L){let se=I[L.pointerId];se===void 0&&(se=new Se,I[L.pointerId]=se),se.set(L.pageX,L.pageY)}function _e(L){const se=L.pointerId===w[0].pointerId?w[1]:w[0];return I[se.pointerId]}i.domElement.addEventListener("contextmenu",b),i.domElement.addEventListener("pointerdown",R),i.domElement.addEventListener("pointercancel",k),i.domElement.addEventListener("wheel",ne,{passive:!1}),this.update()}}class kM{constructor(e,n){Ue(this,"mesh_info",{spirals:[],spiral_rotation_rads:[],circle_heights:[]});Ue(this,"config");Ue(this,"canvas");Ue(this,"scene",new dp);Ue(this,"renderer");Ue(this,"camera");Ue(this,"clock",new Bc);Ue(this,"controls");Ue(this,"parameters",{rotation_rad:0,playback:!0});Ue(this,"sizes",{width:window.innerWidth,height:window.innerHeight});Ue(this,"resizeCallback",()=>{this.sizes.width=window.innerWidth,this.sizes.height=window.innerHeight,this.camera.aspect=this.sizes.width/this.sizes.height,this.camera.position.x=this.config.cam_pos_x/this.camera.aspect+this.config.cam_pos_x_min,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))});Ue(this,"get_r",e=>(this.config.r_range[0]+(this.config.r_range[1]-this.config.r_range[0])*e/this.config.n_circles)/255);Ue(this,"get_g",e=>(this.config.g_range[0]+(this.config.g_range[1]-this.config.g_range[0])*e/this.config.n_circles)/255);Ue(this,"get_b",e=>(this.config.b_range[0]+(this.config.b_range[1]-this.config.b_range[0])*e/this.config.n_circles)/255);this.canvas=e,this.config=n,this.buildMesh(),this.addDebugUI(),this.camera=this.buildCamera(),this.renderer=this.buildRenderer(e),this.controls=this.buildControls(),window.addEventListener("resize",this.resizeCallback),this.resizeCallback()}buildMesh(){for(let e=0;e<this.config.n_spirals;e++)this.mesh_info.spirals.push(new Yt),this.mesh_info.spiral_rotation_rads.push(2*Math.PI/this.config.n_spirals*e);for(let e=0;e<this.config.n_circles;e++){const n=new rt(this.get_r(e),this.get_g(e),this.get_b(e)),i=this.config.radius*this.config.radius_falloff**e,s=new Tt(new Uc(i,this.config.circleSegments),new Ei({color:n,wireframe:!0}));s.rotation.x=Math.PI/2,s.position.y=-this.config.height_total/this.config.n_circles*e,this.mesh_info.circle_heights.push(s.position.y);for(let r=0;r<this.config.n_spirals;r++)this.mesh_info.spirals[r].add(s.clone())}this.rotateSpirals(this.mesh_info,this.parameters.rotation_rad),this.addSpirals(this.mesh_info.spirals,this.scene)}buildCamera(){const e=new Jt(75,this.sizes.width/this.sizes.height,1,100);return e.position.x=this.config.cam_pos_x/(this.sizes.width/this.sizes.height)+this.config.cam_pos_x_min,e.position.y=this.config.cam_pos_y,e.lookAt(0,0,0),e}buildRenderer(e){const n=new Rc({canvas:e});return n.setSize(this.sizes.width,this.sizes.height),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setClearColor(this.config.bg_color),n.render(this.scene,this.camera),n}buildControls(){const e=new FM(this.camera,this.canvas);return e.enableDamping=!0,e}getAnimationSpeedMultiplier(e,n=.5,i=1.3,s=.5){return-n*Math.cos(e/s)+i}rotateSpirals(e,n){const i=e.spirals.length,s=e.spirals,r=e.spiral_rotation_rads,o=e.circle_heights;for(let a=0;a<i;a++){const l=s[a],c=l.children;for(let u=0;u<c.length;u++){const h=o[u],d=c[u];d.position.y=h*Math.sin(n*u/this.config.n_circles),d.position.z=h*Math.cos(n*u/this.config.n_circles),d.lookAt(0,0,0)}l.rotation.y=r[a]}}addSpirals(e,n){e.forEach(i=>{n.add(i)})}addDebugUI(){const e=new Vc;e.add(this.parameters,"rotation_rad").min(0).max(100*Math.PI).step(Math.PI/2),e.add(this.parameters,"playback")}update(){if(this.parameters.playback){const e=Math.PI*this.getAnimationSpeedMultiplier(this.parameters.rotation_rad)/1.25;this.parameters.rotation_rad+=e*this.clock.getDelta()}this.rotateSpirals(this.mesh_info,this.parameters.rotation_rad),this.renderer.render(this.scene,this.camera)}}const BM={n_circles:70,n_spirals:70,height_total:7,radius:2,radius_falloff:.93,circleSegments:30,cam_pos_x:15,cam_pos_x_min:10,cam_pos_y:1,bg_color:0,r_range:[255,255],g_range:[255,70],b_range:[255,0]},zM=t=>(Vr("data-v-de47b0e0"),t=t(),Gr(),t),HM={class:"main-container"},VM=zM(()=>W("div",{class:"canvas-header"},[W("div",null,[W("h1",null,"CTD Generative Design Project"),W("h2",null,"Koh Jia Jun, 2023"),W("p",null,"Click and drag to orbit, scroll to zoom.")])],-1)),GM=Xn({__name:"CtdProject",setup(t){const e=_t(null);return cs(()=>{let n=e.value;if(!n)throw new Error("No canvas found");const i=new kM(n,BM),s=()=>{i.update(),window.requestAnimationFrame(s)};s()}),(n,i)=>(G(),ve("main",null,[W("div",HM,[VM,W("canvas",{ref_key:"ctdProject",ref:e,class:"webgl"},null,512)])]))}});const WM=er(GM,[["__scopeId","data-v-de47b0e0"]]),$M=W("div",{class:"flex-left"},[W("div",{class:"col-2"})],-1),XM=[$M],jM=Xn({__name:"HomeView",setup(t){return MM(),(e,n)=>(G(),ve("main",null,XM))}});const KM=["Java","Python","C","Javascript","Typescript","Ruby","HTML","CSS","SQL"],qM=["Vue.js","React.js","Three.js"],YM=["Spring Boot","Node.js","Express.js","Ruby on Rails","Android Studio","Firebase","SQLite","MongoDB"],ZM=["Docker","Kubernetes","Jenkins","Ansible"],JM=["Adobe Illustrator","Adobe Photoshop","Rhino3D","Krita","MS Office"],ir=t=>(Vr("data-v-cd2f9422"),t=t(),Gr(),t),QM={class:"main-container"},ew={id:"about-tabs-container",class:"flex-right"},tw={class:"col-2"},nw=ir(()=>W("h1",{class:"section-title neon-text-primary"},"About Me.",-1)),iw=ir(()=>W("div",{class:"tab-content"},[W("p",{class:"tab-text"}," I'm Jia Jun, JJ, a final year undergrad at SUTD, pursuing a Bachelor's in Computer Science and Design. I'm interested in fullstack software dev roles. I'm also looking to explore interactive applications, XR/VR/AR, and 3D libraries, such as three.js used to make this site! I dabble in different forms of artistic hobbies in my free time, including digital art, music, and dance. ")],-1)),sw=ir(()=>W("div",{class:"tab-content"},[W("div",{class:"tab-title"},"Undergraduate, Computer Science & Design"),W("div",null,"Singapore University of Techology and Design"),W("div",null,"Grade: 4.90/5"),W("div",{class:"tab-date"},"Sep 2020 - May 2024"),W("div",{class:"tab-text"},[W("strong",null,"Achievements:"),W("ul",null,[W("li",null,"Honour's List (AY20/21, AY21/22)"),W("li",null,"SUTD Global Merit Scholarship"),W("li",null,"President, Modern Visual Media Circle, AY 21/22"),W("li",null,"Secretary, FUNKtion Dance Club, AY 21/22")])])],-1)),rw={class:"tab-content"},ow=ir(()=>W("div",{class:"tab-content"},[W("div",{class:"tab-title"},"SHINE Software Development Intern"),W("div",null,"Singtel, 5G Platform & Product Dept."),W("div",{class:"tab-date"},"June 2021 - Aug 2021"),W("div",{class:"tab-text"},[W("strong",null,"Tools:"),W("ul",null,[W("li",null,[W("strong",null,"Backend:"),Si(" Spring Boot, Keycloak")]),W("li",null,[W("strong",null,"Frontend:"),Si(" Vue.js")]),W("li",null,[W("strong",null,"DB:"),Si(" MongoDB ")]),W("li",null,[W("strong",null,"DevOps:"),Si(" Docker, Kubernetes, Jenkins, Ansible")])])]),W("br"),W("p",{class:"tab-text"}," Resumed the development of an internal Credential Management tool. Managed to successfully debug, deploy and develop new features. Development work primarily focused on backend programming, but also involved frontend work for integration. ")],-1)),aw=ir(()=>W("div",{class:"tab-content"},[W("div",{class:"tab-title"},"Research Project Backend Lead"),W("div",null,"Singapore University of Technology and Design"),W("div",{class:"tab-date"},"June 2021 - Aug 2021"),W("div",{class:"tab-text"},[W("strong",null,"Tools:"),W("ul",null,[W("li",null,[W("strong",null,"Backend:"),Si(" Node.js, Express.js")]),W("li",null,[W("strong",null,"DB:"),Si(" MongoDB Atlas")])])]),W("br"),W("p",{class:"tab-text"}," Worked in a small team to build a Web platform for enterprise evaluation and training of employee EQ. Developed the backend server, including RESTful API and user authentication system. Presented the working prototype to the stakeholder and project supervisor. ")],-1)),lw=ir(()=>W("div",{class:"tab-content"},[W("p",{class:"quote-text"}," I had the pleasure to supervise JJ during his internship at SingTel 5G Enterprise Product Architecture team. JJ was one of hardest software developed that I have worked with. His professionalism, motivation, can do attitude and aptitude to pick up complex technologies are off the charts. During his internship, he managed to successfully delivery a complex system based on kubernetes, Jenkins, ansible, Java spring, vueJS and MongoDB successfully. The system was merged to our internal code base and now used by multiple stakeholders. "),W("div",{class:"quote-author"},[W("div",{class:"quote-author-name"},"Sonny Pyie Sone"),W("div",null,"Software Engineer, Direct Supervisor"),W("div",null,"Singtel")])],-1)),cw=Xn({__name:"AboutView",setup(t){const e=(i,s)=>i.map((r,o)=>({key:s+"_"+o,label:r})),n=_t([{key:"0",label:"Programming Languages",items:e(KM,0)},{key:"1",label:"Backend",items:e(YM,1)},{key:"2",label:"Frontend",items:e(qM,2)},{key:"3",label:"DevOps",items:e(ZM,3)},{key:"4",label:"Design/Others",items:e(JM,4)}]);return(i,s)=>{const r=gt("AccordionTab"),o=gt("PanelMenu"),a=gt("Accordion");return G(),ve("main",QM,[W("div",ew,[W("div",tw,[nw,Xe(a,{activeIndex:0},{default:ht(()=>[Xe(r,{header:"Background"},{default:ht(()=>[iw]),_:1}),Xe(r,{header:"Education"},{default:ht(()=>[sw]),_:1}),Xe(r,{header:"Skills"},{default:ht(()=>[W("div",rw,[Xe(o,{model:n.value},null,8,["model"])])]),_:1}),Xe(r,{header:"Experience"},{default:ht(()=>[ow,aw]),_:1}),Xe(r,{header:"Testimonials"},{default:ht(()=>[lw]),_:1})]),_:1})])])])}}});const uw=er(cw,[["__scopeId","data-v-cd2f9422"]]),hw=t=>(Vr("data-v-62f10705"),t=t(),Gr(),t),dw={class:"main-container"},fw={class:"hover-overlay-title"},pw=hw(()=>W("i",{class:"pi pi-angle-right hover-overlay-arrow"},null,-1)),mw={class:"flex-center"},gw={class:"col-1 flex-center"},vw={class:"flex-div"},_w=["src","alt"],xw={class:"text-white"},bw=["href"],yw={class:"date"},Sw={class:"dialog-chips-container"},Ew=Xn({__name:"PortfolioCard",props:{title:{type:String,required:!0},date:{type:Date,required:!0},subtitle:String,desc:String,imgs:{type:Array,required:!0},tags:{type:Array,required:!0},link:Array},setup(t){const e=t,n=_t(!1),i=_t(!1),s=_t(!1),r=()=>i.value=!i.value,o=()=>n.value=!0,a=()=>n.value=!1,l=()=>s.value=!0,c=()=>s.value=!1,u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],h=()=>u[e.date.getMonth()]+" "+e.date.getFullYear(),d=p=>p.url.startsWith("http")?p.desc+" (External Link)":p.desc;return(p,g)=>{const v=gt("Galleria"),m=gt("Chip"),f=gt("Dialog"),M=gt("Card");return G(),ve("div",dw,[W("div",{class:At([{"card-active":n.value,"card-inactive":!n.value},"hover-overlay flex-center"]),onClick:r,onMouseover:o,onMouseleave:a},[W("h1",fw,Nt(e.title),1),pw],34),Xe(M,{style:qo({backgroundImage:"url("+e.imgs[0].i+")",backgroundSize:"cover",backgroundPosition:"center"}),class:"card-main"},{content:ht(()=>[Xe(f,{visible:i.value,"onUpdate:visible":g[0]||(g[0]=x=>i.value=x),modal:"",maximizable:"",onMaximize:l,onUnmaximize:c,header:e.title,class:"neon-border"},{default:ht(()=>[W("div",mw,[W("div",gw,[Xe(v,{value:e.imgs,var:"img",numVisible:5,showThumbnails:!1,showItemNavigators:!1,showIndicators:!0,changeItemOnIndicatorHover:!0},{item:ht(x=>[W("div",vw,[W("img",{class:At({"dialog-img-maximized":s.value,"dialog-img":!s.value}),src:x.item.i,alt:x.item.alt},null,10,_w)])]),caption:ht(x=>[W("p",xw,Nt(x.item.alt),1)]),_:1},8,["value"])]),W("div",{class:At(["col-1",{"dialog-text-maximized":s.value,"dialog-text":!s.value}])},[e.link?(G(!0),ve(tt,{key:0},Wt(e.link,x=>(G(),ve("p",null,[W("a",{href:x.url,target:"_blank"},Nt(d(x)),9,bw)]))),256)):Oe("",!0),W("p",yw,Nt(h()),1),W("p",null,Nt(e.desc),1)],2),W("div",Sw,[(G(!0),ve(tt,null,Wt(e.tags,x=>(G(),ke(m,{label:x,class:"",style:{margin:"0.2rem"}},null,8,["label"]))),256))])])]),_:1},8,["visible","header"])]),_:1},8,["style"])])}}});const fl=er(Ew,[["__scopeId","data-v-62f10705"]]),Mw="/images/portfolio/design/feeling_funky_back.png",ww="/images/portfolio/design/feeling_funky_front.png",Tw="/images/portfolio/design/feeling_funky_draft.png",Aw="/images/portfolio/design/feeling_funky_final.png",Cw="/images/portfolio/design/feeling_funky_front_draft.png",Pw="/images/portfolio/design/manners.png",Rw="/images/portfolio/design/help_logo.png",Iw="/images/portfolio/design/help_feed.png",Lw="/images/portfolio/design/help_sys_arch.png",Dw="/images/portfolio/design/ctd_closeup.png",Uw="/images/portfolio/design/ctd_cross.png",Nw="/images/portfolio/design/ctd_inside.png",Ow="/images/portfolio/design/ctd_star.png",Fw="/images/portfolio/design/rainyday_logo.png",kw="/images/portfolio/design/rainyday_child.png",Bw="/images/portfolio/design/rainyday_parent.png",zw="/images/portfolio/design/rainyday_uml.png",Hw="/images/portfolio/design/rainyday_userflow.png",Vw="/images/portfolio/design/UROP.png",Gw="/images/portfolio/design/UROP_logo.png",Ww="/images/portfolio/design/sutdopoly_logo.png",$w="/images/portfolio/design/sutdopoly_board.png",Xw="/images/portfolio/design/sutdopoly_go.png",jw="/images/portfolio/design/bitop_logo.png",Kw="/images/portfolio/design/bitop_brochure.png",qw="/images/portfolio/design/bitop_datapath.png",Yw={title:"FUNKtion Club Shirt Design",date:new Date(2023,1),desc:`Shirt design for my University funkstyle dance club.
            Used Illustrator for vector design, and Procreate for drafting. 
            Design was an iterative process with input from the club members, including colour scheme and text elements.`,imgs:[{i:Aw,alt:"Back shirt design: an anthropomorphic dancing disco ball"},{i:Mw,alt:"Design on a physical shirt"},{i:ww,alt:"Front shirt design, with the FUNKtion logo and japanese characters"},{i:Tw,alt:"Draft of the shirt design, sketched out in Procreate"},{i:Cw,alt:"Initial design of shirt front"}],tags:["Illustrator","Design","Procreate","Graphic","Vector"],link:[]},Zw={title:"MAN-Ners Band Logo",date:new Date(2022,11),desc:`Logo design for my University band.
            Inspired by the Kingsman franchise, parodied the Johnny Walker logo to achieve a "gentleman-ly" design. 
            All rights of the original Johnny Walker logo to JOHN WALKER & SONS.`,imgs:[{i:Pw,alt:"Man singing into a mic with a top hat, parodying the Johnny Walker logo"}],tags:["Illustrator","Design","Graphic","Vector"],link:[]},Jw={title:"Gebirah HELP",date:new Date(2022,6),desc:`A humanitarian web app that supports users in crisis regions by providing a platform for them to seek help from nearby volunteers.
            This app is a collaboration between SUTD and Gebirah, a humanitarian non-profit organisation, with support from Google, and it allows users to offer help, or request for help, supported via Google Maps API and Google Cloud for deployment.
            I was in charge of backend development of the main feed server using Ruby on Rails, as well as unit and system testing with RSpec, Capybara, and Cucumber.`,imgs:[{i:Rw,alt:"Logo of the HELP app"},{i:Iw,alt:"Screenshot of the main feed of the app"},{i:Lw,alt:"Microservice system architecture of the app"}],tags:["Ruby on Rails","SQLite","Ruby","Cucumber","React","Javascript","Google Maps","Google Cloud","Software","Programming"],link:[{desc:"Project Website",url:"https://sites.google.com/mymail.sutd.edu.sg/pelican/home"}]},Qw={title:"Cradle To Dust",date:new Date(2023,4),desc:`A generative design project, viewable at the link above.
            The design comprises of towers of wireframe circles rotating around the center, where this simple rotation results in various interesting patterns at various rotation "phases".
            The design eventually rotates back to its original position, depicting a sense of inevitability and circularity.
            Originally done in Sep 2020 with Rhino3D, Grasshopper and Python3, and ported to Three.js in May 2023.`,imgs:[{i:Ow,alt:"Star pattern"},{i:Uw,alt:"Cross pattern"},{i:Dw,alt:"A closeup of the design"},{i:Nw,alt:"Internal view"}],tags:["Javascript","Three.js","Rhino3D","Design","Programming"],link:[{desc:"Demo Link",url:"./ctd"},{desc:"File Repo",url:"https://github.com/keee99/portfolio-app-1/blob/main/src/threejs/CTDSceneManager.ts"}]},eT={title:"Rainy Day",date:new Date(2022,4),desc:`An Android Application that helps kids understand the value of money and encourages them to save up for a "Rainy Day".
            It helps the child to track their expenses, set a savings goal, and tracks their progress towards it. 
            It also helps parents log and track their children's expenditures to facilitate accountability.
            I was in charge of the Android application backend, including integration with Frontend, and Firebase for storage and authentication.`,imgs:[{i:Fw,alt:"Logo of the Rainy Day app"},{i:Bw,alt:"Parent Dashboard"},{i:kw,alt:"Child Dashboard"},{i:zw,alt:"(Partial) UML diagram of the app"},{i:Hw,alt:"Userflow diagram of the app (red boxed: unimplemented)"}],tags:["Java","Android Studio","Firebase","Programming"],link:[{desc:"Project Website",url:"https://istd.sutd.edu.sg/term4-design-exhibition/50001/rainy-day"},{desc:"Project Repo",url:"https://github.com/keee99/RainyDayApp"}]},tT={title:"EQ App Research Project",date:new Date(2021,5),desc:`Worked in a small team to build a Web platform for enterprise evaluation and training of employee EQ, as part of a University Research Project.
            Developed a simple backend server, including RESTful API and authentication, and integrated with the frontend.
            Presented the working prototype to the stakeholder and project supervisor.
            (Image shown is a prototype. I am unable to share the actual project.)`,imgs:[{i:Gw,alt:"Main logo of the app prototype"},{i:Vw,alt:"Prototype of the EQ Training app"}],tags:["Javascript","Express.js","HTML","CSS","Programming","MongoDB"],link:[]},nT={title:"SUTDopoly",date:new Date(2020,10),desc:`SUTDopoly is a text-based boardgame that is run straight from the command line. 
            A variation of Monopoly, SUTDopoly is structured around the setting of SUTD whereby the properties names are the names of Fifth Rows and the Chance and Chest cards are relatable to SUTD students. 
            This version of SUTDopoly plays wholely on the CLI, and supports various features such as animated board movement, offline play with multiple users on a single computer, or online play across CLIs and computers!`,imgs:[{i:Ww,alt:"SUTDopoly logo at startup screen"},{i:$w,alt:"SUTDopoly animated board"},{i:Xw,alt:"Passing GO!"}],tags:["Python","Firebase","Programming"],link:[{desc:"Project Repo",url:"https://github.com/keee99/SUTDopoly"}]},iT={title:"Bit Op!",date:new Date(2022,3),desc:`Bit Op! is a modified version of the original Bop it! by Hasbro Gaming, made with the Alchitry Au Field Programmable Gate Array (FPGA) using the Lucid Hardware Description Language.
            Buzzers and LED signal lights correspond to each input (Push, Twist, Pull), and the LED signals also show the player’s current score in binary encoding. 
            There are a total of 3 levels, with progressive difficulty and varying scoring systems.
            To allow more focus to be put towards designing a robust and efficient datapath, the hardware and exterior for the Bit Op! Game unit, including the 3 inputs (Push, Twist, Pull) were modified and repurposed from an existing Bop it! unit.`,imgs:[{i:jw,alt:"Bit Op! logo"},{i:Kw,alt:"Brochure created for presentation to mock a Bop It! toy"},{i:qw,alt:"Internal Bit Op! Datapath"}],tags:["Programming"],link:[{desc:"Project Website",url:"https://istd.sutd.edu.sg/term4-design-exhibition/50002/bit-op"}]},Ao=[Yw,Zw,Jw,Qw,eT,tT,nT,iT],Rp=t=>(Vr("data-v-d3f4b9f2"),t=t(),Gr(),t),sT=Rp(()=>W("h1",{class:"section-title neon-text-primary"},"Portfolio.",-1)),rT={class:"main-container"},oT=Rp(()=>W("div",{class:"height-container"},null,-1)),aT=Xn({__name:"PortfolioView",setup(t){Iv(u=>({"2290a37a":a.value}));const e=(u,h)=>u.filter(d=>d.tags.includes(h)),n=u=>u.sort((h,d)=>d.date.getTime()-h.date.getTime()),i=e(Ao,"Design"),s=e(Ao,"Programming");n(i),n(s),n(Ao);const r=_t(0),o=_t([{label:"Programming"},{label:"Design"},{label:"All"}]),a=_t("100px"),l=[],c=()=>{a.value=l[r.value]};return cs(()=>{document.querySelectorAll(".sub-container").forEach(h=>{l.push(h.clientHeight+"px")}),c()}),(u,h)=>{const d=gt("TabMenu");return G(),ve("main",null,[sT,Xe(d,{activeIndex:r.value,"onUpdate:activeIndex":h[0]||(h[0]=p=>r.value=p),model:o.value,onTabChange:c},null,8,["activeIndex","model"]),W("div",rT,[oT,W("div",{class:At(["sub-container flex-left shift-right",{"active-container":r.value===0,"inactive-container":r.value!==0}])},[(G(!0),ve(tt,null,Wt(oi(s),p=>(G(),ke(fl,he({class:".col-4 portfolio-card"},p),null,16))),256))],2),W("div",{class:At(["sub-container flex-left shift-right",{"active-container":r.value===1,"inactive-container":r.value!==1}])},[(G(!0),ve(tt,null,Wt(oi(i),p=>(G(),ke(fl,he({class:".col-4 portfolio-card"},p),null,16))),256))],2),W("div",{class:At(["sub-container flex-left shift-right",{"active-container":r.value===2,"inactive-container":r.value!==2}])},[(G(!0),ve(tt,null,Wt(oi(Ao),p=>(G(),ke(fl,he({class:".col-4 portfolio-card"},p),null,16))),256))],2)])])}}});const lT=er(aT,[["__scopeId","data-v-d3f4b9f2"]]),cT={class:"app-body"},uT={class:"app-section",id:"home"},hT=W("div",{class:"app-section-break"},null,-1),dT={class:"app-section",id:"about"},fT=W("div",{class:"app-section-break"},null,-1),pT={class:"app-section",id:"portfolio"},mT=W("div",{class:"app-section-break"},null,-1),gT=W("footer",null,null,-1),vT=Xn({__name:"RootView",setup(t){let e;const n=j_(),i=_t("");function s(u){for(const h of u)if(h.isIntersecting){const d=h.target.id;if(n.name===null)return;i.value=d}}function r(){if(e)try{e.disconnect()}catch{}const u={rootMargin:"0px 0px",threshold:0};e=new IntersectionObserver(s,u),document.querySelectorAll(".app-section").forEach(d=>e.observe(d))}const o=_t(0),a=_t(0),l=_t(0),c=()=>{var p,g,v;const u=(p=document.getElementById("home"))==null?void 0:p.offsetTop,h=(g=document.getElementById("about"))==null?void 0:g.offsetTop,d=(v=document.getElementById("portfolio"))==null?void 0:v.offsetTop;o.value=u||0,a.value=h||0,l.value=d||0};return cs(()=>{c(),r(),window.addEventListener("resize",c)}),(u,h)=>{const d=gt("ScrollTop");return G(),ve("main",null,[W("header",null,[Xe(mM,{active:i.value},null,8,["active"])]),W("body",null,[W("div",cT,[W("div",uT,[Xe(jM)]),hT,W("div",dT,[Xe(uw)]),fT,W("div",pT,[Xe(lT)]),mT]),gT]),Xe(qE,{class:"bg",homeY:o.value,aboutY:a.value,portfolioY:l.value},null,8,["homeY","aboutY","portfolioY"]),Xe(d)])}}}),_T=$_({history:a_("/"),routes:[{path:"/",name:"JJ's Portfolio",component:vT},{path:"/ctd",name:"CTD Project",component:WM}]});function xT(t){return typeof t=="object"&&t!==null}function Td(t,e){return t=xT(t)?t:Object.create(null),new Proxy(t,{get(n,i,s){return i==="key"?Reflect.get(n,i,s):Reflect.get(n,i,s)||Reflect.get(e,i,s)}})}function bT(t,e){return e.reduce((n,i)=>n==null?void 0:n[i],t)}function yT(t,e,n){return e.slice(0,-1).reduce((i,s)=>/^(__proto__)$/.test(s)?{}:i[s]=i[s]||{},t)[e[e.length-1]]=n,t}function ST(t,e){return e.reduce((n,i)=>{const s=i.split(".");return yT(n,s,bT(t,s))},{})}function Ad(t,{storage:e,serializer:n,key:i,debug:s}){try{const r=e==null?void 0:e.getItem(i);r&&t.$patch(n==null?void 0:n.deserialize(r))}catch(r){s&&console.error(r)}}function Cd(t,{storage:e,serializer:n,key:i,paths:s,debug:r}){try{const o=Array.isArray(s)?ST(t,s):t;e.setItem(i,n.serialize(o))}catch(o){r&&console.error(o)}}function ET(t={}){return e=>{const{auto:n=!1}=t,{options:{persist:i=n},store:s}=e;if(!i)return;const r=(Array.isArray(i)?i.map(o=>Td(o,t)):[Td(i,t)]).map(({storage:o=localStorage,beforeRestore:a=null,afterRestore:l=null,serializer:c={serialize:JSON.stringify,deserialize:JSON.parse},key:u=s.$id,paths:h=null,debug:d=!1})=>{var p;return{storage:o,beforeRestore:a,afterRestore:l,serializer:c,key:((p=t.key)!=null?p:g=>g)(u),paths:h,debug:d}});s.$persist=()=>{r.forEach(o=>{Cd(s.$state,o)})},s.$hydrate=({runHooks:o=!0}={})=>{r.forEach(a=>{const{beforeRestore:l,afterRestore:c}=a;o&&(l==null||l(e)),Ad(s,a),o&&(c==null||c(e))})},r.forEach(o=>{const{beforeRestore:a,afterRestore:l}=o;a==null||a(e),Ad(s,o),l==null||l(e),s.$subscribe((c,u)=>{Cd(u,o)},{detached:!0})})}}var MT=ET();const Ip=vM();Ip.use(MT);var we={innerWidth(t){if(t){let e=t.offsetWidth,n=getComputedStyle(t);return e+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}return 0},width(t){if(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}return 0},getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)},getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)},getOuterWidth(t,e){if(t){let n=t.offsetWidth;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}return 0},getOuterHeight(t,e){if(t){let n=t.offsetHeight;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}return 0},getClientHeight(t,e){if(t){let n=t.clientHeight;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}return 0},getViewport(){let t=window,e=document,n=e.documentElement,i=e.getElementsByTagName("body")[0],s=t.innerWidth||n.clientWidth||i.clientWidth,r=t.innerHeight||n.clientHeight||i.clientHeight;return{width:s,height:r}},getOffset(t){if(t){let e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index(t){if(t){let e=t.parentNode.childNodes,n=0;for(let i=0;i<e.length;i++){if(e[i]===t)return n;e[i].nodeType===1&&n++}}return-1},addMultipleClasses(t,e){if(t&&e)if(t.classList){let n=e.split(" ");for(let i=0;i<n.length;i++)t.classList.add(n[i])}else{let n=e.split(" ");for(let i=0;i<n.length;i++)t.className+=" "+n[i]}},addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=" "+e)},removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass(t,e){return t?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1},find(t,e){return this.isElement(t)?t.querySelectorAll(e):[]},findSingle(t,e){return this.isElement(t)?t.querySelector(e):null},getHeight(t){if(t){let e=t.offsetHeight,n=getComputedStyle(t);return e-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),e}return 0},getWidth(t){if(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),e}return 0},absolutePosition(t,e){if(t){let n=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),i=n.height,s=n.width,r=e.offsetHeight,o=e.offsetWidth,a=e.getBoundingClientRect(),l=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),u=this.getViewport(),h,d;a.top+r+i>u.height?(h=a.top+l-i,t.style.transformOrigin="bottom",h<0&&(h=l)):(h=r+a.top+l,t.style.transformOrigin="top"),a.left+s>u.width?d=Math.max(0,a.left+c+o-s):d=a.left+c,t.style.top=h+"px",t.style.left=d+"px"}},relativePosition(t,e){if(t){let n=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t);const i=e.offsetHeight,s=e.getBoundingClientRect(),r=this.getViewport();let o,a;s.top+i+n.height>r.height?(o=-1*n.height,t.style.transformOrigin="bottom",s.top+o<0&&(o=-1*s.top)):(o=i,t.style.transformOrigin="top"),n.width>r.width?a=s.left*-1:s.left+n.width>r.width?a=(s.left+n.width-r.width)*-1:a=0,t.style.top=o+"px",t.style.left=a+"px"}},getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))},getScrollableParents(t){let e=[];if(t){let n=this.getParents(t);const i=/(auto|scroll)/,s=r=>{let o=window.getComputedStyle(r,null);return i.test(o.getPropertyValue("overflow"))||i.test(o.getPropertyValue("overflowX"))||i.test(o.getPropertyValue("overflowY"))};for(let r of n){let o=r.nodeType===1&&r.dataset.scrollselectors;if(o){let a=o.split(",");for(let l of a){let c=this.findSingle(r,l);c&&s(c)&&e.push(c)}}r.nodeType!==9&&s(r)&&e.push(r)}}return e},getHiddenElementOuterHeight(t){if(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}return 0},getHiddenElementOuterWidth(t){if(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}return 0},getHiddenElementDimensions(t){if(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}return 0},fadeIn(t,e){if(t){t.style.opacity=0;let n=+new Date,i=0,s=function(){i=+t.style.opacity+(new Date().getTime()-n)/e,t.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}},fadeOut(t,e){if(t){let n=1,i=50,s=e,r=i/s,o=setInterval(()=>{n-=r,n<=0&&(n=0,clearInterval(o)),t.style.opacity=n},i)}},getUserAgent(){return navigator.userAgent},appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e.el&&e.elElement)e.elElement.appendChild(t);else throw new Error("Cannot append "+e+" to "+t)},isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"},scrollInView(t,e){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=n?parseFloat(n):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),r=s?parseFloat(s):0,o=t.getBoundingClientRect(),l=e.getBoundingClientRect().top+document.body.scrollTop-(o.top+document.body.scrollTop)-i-r,c=t.scrollTop,u=t.clientHeight,h=this.getOuterHeight(e);l<0?t.scrollTop=c+l:l+h>u&&(t.scrollTop=c+l-u+h)},clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null},calculateScrollbarWidth(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e},getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ ]([\w.]+)/.exec(t)||/(webkit)[ ]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}},isVisible(t){return t&&t.offsetParent!=null},invokeElementMethod(t,e,n){t[e].apply(t,n)},isExist(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode)},isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},focus(t,e){t&&document.activeElement!==t&&t.focus(e)},isFocusableElement(t,e=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1},getFocusableElements(t,e=""){let n=this.find(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`),i=[];for(let s of n)getComputedStyle(s).display!="none"&&getComputedStyle(s).visibility!="hidden"&&i.push(s);return i},getFirstFocusableElement(t,e){const n=this.getFocusableElements(t,e);return n.length>0?n[0]:null},getLastFocusableElement(t,e){const n=this.getFocusableElements(t,e);return n.length>0?n[n.length-1]:null},getNextFocusableElement(t,e,n){const i=this.getFocusableElements(t,n),s=i.length>0?i.findIndex(o=>o===e):-1,r=s>-1&&i.length>=s+1?s+1:-1;return r>-1?i[r]:null},isClickable(t){if(t){const e=t.nodeName,n=t.parentElement&&t.parentElement.nodeName;return e==="INPUT"||e==="TEXTAREA"||e==="BUTTON"||e==="A"||n==="INPUT"||n==="TEXTAREA"||n==="BUTTON"||n==="A"||!!t.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1},applyStyle(t,e){if(typeof e=="string")t.style.cssText=e;else for(let n in e)t.style[n]=e[n]},isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid(){return/(android)/i.test(navigator.userAgent)},isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},exportCSV(t,e){let n=new Blob([t],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(n,e+".csv");else{let i=document.createElement("a");i.download!==void 0?(i.setAttribute("href",URL.createObjectURL(n)),i.setAttribute("download",e+".csv"),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)):(t="data:text/csv;charset=utf-8,"+t,window.open(encodeURI(t)))}}},ot={equals(t,e,n){return n?this.resolveFieldData(t,n)===this.resolveFieldData(e,n):this.deepEquals(t,e)},deepEquals(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),i=Array.isArray(e),s,r,o;if(n&&i){if(r=t.length,r!=e.length)return!1;for(s=r;s--!==0;)if(!this.deepEquals(t[s],e[s]))return!1;return!0}if(n!=i)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var c=t instanceof RegExp,u=e instanceof RegExp;if(c!=u)return!1;if(c&&u)return t.toString()==e.toString();var h=Object.keys(t);if(r=h.length,r!==Object.keys(e).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,h[s]))return!1;for(s=r;s--!==0;)if(o=h[s],!this.deepEquals(t[o],e[o]))return!1;return!0}return t!==t&&e!==e},resolveFieldData(t,e){if(t&&Object.keys(t).length&&e){if(this.isFunction(e))return e(t);if(e.indexOf(".")===-1)return t[e];{let s=e.split("."),r=t;for(var n=0,i=s.length;n<i;++n){if(r==null)return null;r=r[s[n]]}return r}}else return null},isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)},getItemValue(t,...e){return this.isFunction(t)?t(...e):t},filter(t,e,n){var i=[];if(t){for(let s of t)for(let r of e)if(String(this.resolveFieldData(s,r)).toLowerCase().indexOf(n.toLowerCase())>-1){i.push(s);break}}return i},reorderArray(t,e,n){t&&e!==n&&(n>=t.length&&(n%=t.length,e%=t.length),t.splice(n,0,t.splice(e,1)[0]))},findIndexInList(t,e){let n=-1;if(e){for(let i=0;i<e.length;i++)if(e[i]===t){n=i;break}}return n},contains(t,e){if(t!=null&&e&&e.length){for(let n of e)if(this.equals(t,n))return!0}return!1},insertIntoOrderedArray(t,e,n,i){if(n.length>0){let s=!1;for(let r=0;r<n.length;r++)if(this.findIndexInList(n[r],i)>e){n.splice(r,0,t),s=!0;break}s||n.push(t)}else n.push(t)},removeAccents(t){return t&&t.search(/[\xC0-\xFF]/g)>-1&&(t=t.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),t},getVNodeProp(t,e){let n=t.props;if(n){let i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),s=Object.prototype.hasOwnProperty.call(n,i)?i:e;return t.type.props[e].type===Boolean&&n[s]===""?!0:n[s]}return null},convertToFlatCase(t){return this.isNotEmpty(t)?t.replace(/(-|_)/g,"").toLowerCase():t},isEmpty(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0},isNotEmpty(t){return!this.isEmpty(t)},isPrintableCharacter(t=""){return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)},findLast(t,e){let n;if(this.isNotEmpty(t))try{n=t.findLast(e)}catch{n=[...t].reverse().find(e)}return n},findLastIndex(t,e){let n=-1;if(this.isNotEmpty(t))try{n=t.findLastIndex(e)}catch{n=t.lastIndexOf([...t].reverse().find(e))}return n}},Pd=0;function as(t="pv_id_"){return Pd++,`${t}${Pd}`}function wT(){let t=[];const e=(o,a,l=999)=>{const c=s(o,a,l),u=c.value+(c.key===o?0:l)+1;return t.push({key:o,value:u}),u},n=o=>{t=t.filter(a=>a.value!==o)},i=(o,a)=>s(o,a).value,s=(o,a,l=0)=>[...t].reverse().find(c=>a?!0:c.key===o)||{key:o,value:l},r=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:r,set:(o,a,l)=>{a&&(a.style.zIndex=String(e(o,!0,l)))},clear:o=>{o&&(n(r(o)),o.style.zIndex="")},getCurrent:o=>i(o,!0)}}var bn=wT();const Vt={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},Rd={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left"}},filterMatchModeOptions:{text:[Vt.STARTS_WITH,Vt.CONTAINS,Vt.NOT_CONTAINS,Vt.ENDS_WITH,Vt.EQUALS,Vt.NOT_EQUALS],numeric:[Vt.EQUALS,Vt.NOT_EQUALS,Vt.LESS_THAN,Vt.LESS_THAN_OR_EQUAL_TO,Vt.GREATER_THAN,Vt.GREATER_THAN_OR_EQUAL_TO],date:[Vt.DATE_IS,Vt.DATE_IS_NOT,Vt.DATE_BEFORE,Vt.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},pt:void 0},TT=Symbol();function AT(t,e,n,i){const s=document.getElementById(n),r=s.cloneNode(!0),o=s.getAttribute("href").replace(t,e);r.setAttribute("id",n+"-clone"),r.setAttribute("href",o),r.addEventListener("load",()=>{s.remove(),r.setAttribute("id",n),i&&i()}),s.parentNode&&s.parentNode.insertBefore(r,s.nextSibling)}var CT={install:(t,e)=>{let n=e?{...Rd,...e}:{...Rd};const i={config:ls(n),changeTheme:AT};t.config.globalProperties.$primevue=i,t.provide(TT,i)}};var Qt={name:"BaseComponent",props:{pt:{type:Object,default:void 0}},methods:{getOption(t={},e=""){const n=ot.convertToFlatCase(e);return t[Object.keys(t).find(i=>ot.convertToFlatCase(i)===n)||""]},getPTValue(t={},e="",n={}){const i=ot.getItemValue(this.getOption(t,e),n),s=ot.getItemValue(this.getOption(this.defaultPT,e),n);return he(i,s)},ptm(t="",e={}){return this.getPTValue(this.pt,t,{props:this.$props,state:this.$data,...e})},ptmo(t={},e="",n={}){return this.getPTValue(t,e,n)}},computed:{defaultPT(){return ot.getItemValue(this.getOption(this.$primevue.config.pt,this.$.type.name),this.defaultsParams)},defaultsParams(){return{instance:this.$}}}},Ii={name:"BaseIcon",props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},methods:{pti(){const t=ot.isEmpty(this.label);return{class:["p-icon",{"p-icon-spin":this.spin}],role:t?void 0:"img","aria-label":t?void 0:this.label,"aria-hidden":t}}}};function PT(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var RT=`
.p-icon {
    display: inline-block;
}
.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}
@-webkit-keyframes p-icon-spin {
0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
}
100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
}
}
@keyframes p-icon-spin {
0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
}
100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
}
}
`;PT(RT);var jr={name:"ChevronDownIcon",extends:Ii};const IT=W("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1),LT=[IT];function DT(t,e,n,i,s,r){return G(),ve("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),LT,16)}jr.render=DT;var sr={name:"ChevronRightIcon",extends:Ii};const UT=W("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1),NT=[UT];function OT(t,e,n,i,s,r){return G(),ve("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),NT,16)}sr.render=OT;let jl;function FT(t){t.addEventListener("mousedown",Lp)}function kT(t){t.removeEventListener("mousedown",Lp)}function BT(t){let e=document.createElement("span");e.className="p-ink",e.setAttribute("role","presentation"),e.setAttribute("aria-hidden","true"),t.appendChild(e),e.addEventListener("animationend",Dp)}function zT(t){let e=Up(t);e&&(kT(t),e.removeEventListener("animationend",Dp),e.remove())}function Lp(t){let e=t.currentTarget,n=Up(e);if(!n||getComputedStyle(n,null).display==="none")return;if(we.removeClass(n,"p-ink-active"),!we.getHeight(n)&&!we.getWidth(n)){let o=Math.max(we.getOuterWidth(e),we.getOuterHeight(e));n.style.height=o+"px",n.style.width=o+"px"}let i=we.getOffset(e),s=t.pageX-i.left+document.body.scrollTop-we.getWidth(n)/2,r=t.pageY-i.top+document.body.scrollLeft-we.getHeight(n)/2;n.style.top=r+"px",n.style.left=s+"px",we.addClass(n,"p-ink-active"),jl=setTimeout(()=>{n&&we.removeClass(n,"p-ink-active")},401)}function Dp(t){jl&&clearTimeout(jl),we.removeClass(t.currentTarget,"p-ink-active")}function Up(t){for(let e=0;e<t.children.length;e++)if(typeof t.children[e].className=="string"&&t.children[e].className.indexOf("p-ink")!==-1)return t.children[e];return null}const Li={mounted(t,e){e.instance.$primevue&&e.instance.$primevue.config&&e.instance.$primevue.config.ripple&&(BT(t),FT(t))},unmounted(t){zT(t)}};var Np={name:"Accordion",extends:Qt,emits:["update:activeIndex","tab-open","tab-close","tab-click"],props:{multiple:{type:Boolean,default:!1},activeIndex:{type:[Number,Array],default:null},lazy:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},data(){return{id:this.$attrs.id,d_activeIndex:this.activeIndex}},watch:{"$attrs.id":function(t){this.id=t||as()},activeIndex(t){this.d_activeIndex=t}},mounted(){this.id=this.id||as()},methods:{isAccordionTab(t){return t.type.name==="AccordionTab"},isTabActive(t){return this.multiple?this.d_activeIndex&&this.d_activeIndex.includes(t):this.d_activeIndex===t},getTabProp(t,e){return t.props?t.props[e]:void 0},getKey(t,e){return this.getTabProp(t,"header")||e},getTabHeaderActionId(t){return`${this.id}_${t}_header_action`},getTabContentId(t){return`${this.id}_${t}_content`},getTabPT(t,e){return this.ptmo(this.getTabProp(t,"pt"),e,{props:t.props,parent:{props:this.$props,state:this.$data}})},onTabClick(t,e,n){this.changeActiveIndex(t,e,n),this.$emit("tab-click",{originalEvent:t,index:n})},onTabKeyDown(t,e,n){switch(t.code){case"ArrowDown":this.onTabArrowDownKey(t);break;case"ArrowUp":this.onTabArrowUpKey(t);break;case"Home":this.onTabHomeKey(t);break;case"End":this.onTabEndKey(t);break;case"Enter":case"Space":this.onTabEnterKey(t,e,n);break}},onTabArrowDownKey(t){const e=this.findNextHeaderAction(t.target.parentElement.parentElement);e?this.changeFocusedTab(t,e):this.onTabHomeKey(t),t.preventDefault()},onTabArrowUpKey(t){const e=this.findPrevHeaderAction(t.target.parentElement.parentElement);e?this.changeFocusedTab(t,e):this.onTabEndKey(t),t.preventDefault()},onTabHomeKey(t){const e=this.findFirstHeaderAction();this.changeFocusedTab(t,e),t.preventDefault()},onTabEndKey(t){const e=this.findLastHeaderAction();this.changeFocusedTab(t,e),t.preventDefault()},onTabEnterKey(t,e,n){this.changeActiveIndex(t,e,n),t.preventDefault()},findNextHeaderAction(t,e=!1){const n=e?t:t.nextElementSibling,i=we.findSingle(n,".p-accordion-header");return i?we.hasClass(i,"p-disabled")?this.findNextHeaderAction(i.parentElement):we.findSingle(i,".p-accordion-header-action"):null},findPrevHeaderAction(t,e=!1){const n=e?t:t.previousElementSibling,i=we.findSingle(n,".p-accordion-header");return i?we.hasClass(i,"p-disabled")?this.findPrevHeaderAction(i.parentElement):we.findSingle(i,".p-accordion-header-action"):null},findFirstHeaderAction(){return this.findNextHeaderAction(this.$el.firstElementChild,!0)},findLastHeaderAction(){return this.findPrevHeaderAction(this.$el.lastElementChild,!0)},changeActiveIndex(t,e,n){if(!this.getTabProp(e,"disabled")){const i=this.isTabActive(n),s=i?"tab-close":"tab-open";this.multiple?i?this.d_activeIndex=this.d_activeIndex.filter(r=>r!==n):this.d_activeIndex?this.d_activeIndex.push(n):this.d_activeIndex=[n]:this.d_activeIndex=this.d_activeIndex===n?null:n,this.$emit("update:activeIndex",this.d_activeIndex),this.$emit(s,{originalEvent:t,index:n})}},changeFocusedTab(t,e){if(e&&(we.focus(e),this.selectOnFocus)){const n=parseInt(e.parentElement.parentElement.dataset.index,10),i=this.tabs[n];this.changeActiveIndex(t,i,n)}},getTabClass(t){return["p-accordion-tab",{"p-accordion-tab-active":this.isTabActive(t)}]},getTabHeaderClass(t,e){return["p-accordion-header",this.getTabProp(t,"headerClass"),{"p-highlight":this.isTabActive(e),"p-disabled":this.getTabProp(t,"disabled")}]},getTabContentClass(t){return["p-toggleable-content",this.getTabProp(t,"contentClass")]}},computed:{tabs(){return this.$slots.default().reduce((t,e)=>(this.isAccordionTab(e)?t.push(e):e.children&&e.children instanceof Array&&e.children.forEach(n=>{this.isAccordionTab(n)&&t.push(n)}),t),[])}},components:{ChevronDownIcon:jr,ChevronRightIcon:sr},directives:{ripple:Li}};const HT=["data-index"],VT=["id","tabindex","aria-disabled","aria-expanded","aria-controls","onClick","onKeydown"],GT=["id","aria-labelledby"];function WT(t,e,n,i,s,r){return G(),ve("div",he({class:"p-accordion p-component"},t.ptm("root")),[(G(!0),ve(tt,null,Wt(r.tabs,(o,a)=>(G(),ve("div",he({key:r.getKey(o,a),class:r.getTabClass(a),"data-index":a},r.getTabPT(o,"root")),[W("div",he({style:r.getTabProp(o,"headerStyle"),class:r.getTabHeaderClass(o,a)},{...r.getTabProp(o,"headerProps"),...r.getTabPT(o,"header")}),[W("a",he({id:r.getTabHeaderActionId(a),class:"p-accordion-header-link p-accordion-header-action",tabindex:r.getTabProp(o,"disabled")?-1:n.tabindex,role:"button","aria-disabled":r.getTabProp(o,"disabled"),"aria-expanded":r.isTabActive(a),"aria-controls":r.getTabContentId(a),onClick:l=>r.onTabClick(l,o,a),onKeydown:l=>r.onTabKeyDown(l,o,a)},{...r.getTabProp(o,"headeractionprops"),...r.getTabPT(o,"headeraction")}),[o.children&&o.children.headericon?(G(),ke(Qe(o.children.headericon),{key:0,isTabActive:r.isTabActive(a),index:a},null,8,["isTabActive","index"])):r.isTabActive(a)?(G(),ke(Qe(n.collapseIcon?"span":"ChevronDownIcon"),he({key:1,class:["p-accordion-toggle-icon",n.collapseIcon],"aria-hidden":"true"},r.getTabPT(o,"headericon")),null,16,["class"])):(G(),ke(Qe(n.expandIcon?"span":"ChevronRightIcon"),he({key:2,class:["p-accordion-toggle-icon",n.expandIcon],"aria-hidden":"true"},r.getTabPT(o,"headericon")),null,16,["class"])),o.props&&o.props.header?(G(),ve("span",he({key:3,class:"p-accordion-header-text"},r.getTabPT(o,"headertitle")),Nt(o.props.header),17)):Oe("",!0),o.children&&o.children.header?(G(),ke(Qe(o.children.header),{key:4})):Oe("",!0)],16,VT)],16),Xe(jn,{name:"p-toggleable-content"},{default:ht(()=>[!n.lazy||r.isTabActive(a)?Ft((G(),ve("div",he({key:0,id:r.getTabContentId(a),style:r.getTabProp(o,"contentStyle"),class:r.getTabContentClass(o),role:"region","aria-labelledby":r.getTabHeaderActionId(a)},{...r.getTabProp(o,"contentProps"),...r.getTabPT(o,"toggleablecontent")}),[W("div",he({class:"p-accordion-content"},r.getTabPT(o,"content")),[(G(),ke(Qe(o)))],16)],16,GT)),[[xc,n.lazy?!0:r.isTabActive(a)]]):Oe("",!0)]),_:2},1024)],16,HT))),128))],16)}function $T(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var XT=`
.p-accordion-header-action {
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
    position: relative;
    text-decoration: none;
}
.p-accordion-header-action:focus {
    z-index: 1;
}
.p-accordion-header-text {
    line-height: 1;
}
`;$T(XT);Np.render=WT;var Op={name:"AccordionTab",extends:Qt,props:{header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean}};function jT(t,e,n,i,s,r){return Ct(t.$slots,"default")}Op.render=jT;var Fp={name:"Card",extends:Qt};function KT(t,e,n,i,s,r){return G(),ve("div",he({class:"p-card p-component"},t.ptm("root")),[t.$slots.header?(G(),ve("div",he({key:0,class:"p-card-header"},t.ptm("header")),[Ct(t.$slots,"header")],16)):Oe("",!0),W("div",he({class:"p-card-body"},t.ptm("body")),[t.$slots.title?(G(),ve("div",he({key:0,class:"p-card-title"},t.ptm("title")),[Ct(t.$slots,"title")],16)):Oe("",!0),t.$slots.subtitle?(G(),ve("div",he({key:1,class:"p-card-subtitle"},t.ptm("subtitle")),[Ct(t.$slots,"subtitle")],16)):Oe("",!0),W("div",he({class:"p-card-content"},t.ptm("content")),[Ct(t.$slots,"content")],16),t.$slots.footer?(G(),ve("div",he({key:2,class:"p-card-footer"},t.ptm("footer")),[Ct(t.$slots,"footer")],16)):Oe("",!0)],16)],16)}Fp.render=KT;var kp={name:"TimesCircleIcon",extends:Ii};const qT=W("g",{"clip-path":"url(#clip0_334_13179)"},[W("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"})],-1),YT=W("defs",null,[W("clipPath",{id:"clip0_334_13179"},[W("rect",{width:"14",height:"14",fill:"white"})])],-1),ZT=[qT,YT];function JT(t,e,n,i,s,r){return G(),ve("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),ZT,16)}kp.render=JT;var Bp={name:"Chip",extends:Qt,emits:["remove"],props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},data(){return{visible:!0}},methods:{onKeydown(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)},close(t){this.visible=!1,this.$emit("remove",t)}},computed:{containerClass(){return["p-chip p-component",{"p-chip-image":this.image!=null}]}},components:{TimesCircleIcon:kp}};const QT=["aria-label"],eA=["src"];function tA(t,e,n,i,s,r){return s.visible?(G(),ve("div",he({key:0,class:r.containerClass,"aria-label":n.label},t.ptm("root")),[Ct(t.$slots,"default",{},()=>[n.image?(G(),ve("img",he({key:0,src:n.image},t.ptm("image")),null,16,eA)):t.$slots.icon?(G(),ke(Qe(t.$slots.icon),he({key:1,class:"p-chip-icon"},t.ptm("icon")),null,16)):n.icon?(G(),ve("span",he({key:2,class:["p-chip-icon",n.icon]},t.ptm("icon")),null,16)):Oe("",!0),n.label?(G(),ve("div",he({key:3,class:"p-chip-text"},t.ptm("label")),Nt(n.label),17)):Oe("",!0)]),n.removable?Ct(t.$slots,"removeicon",{key:0,onClick:r.close,onKeydown:r.onKeydown},()=>[(G(),ke(Qe(n.removeIcon?"span":"TimesCircleIcon"),he({tabindex:"0",class:["p-chip-remove-icon",n.removeIcon],onClick:r.close,onKeydown:r.onKeydown},t.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]):Oe("",!0)],16,QT)):Oe("",!0)}function nA(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var iA=`
.p-chip {
    display: inline-flex;
    align-items: center;
}
.p-chip-text {
    line-height: 1.5;
}
.p-chip-icon.pi {
    line-height: 1.5;
}
.p-chip-remove-icon {
    line-height: 1.5;
    cursor: pointer;
}
.p-chip img {
    border-radius: 50%;
}
`;nA(iA);Bp.render=tA;function sA(t,e){const{onFocusIn:n,onFocusOut:i}=e.value||{};t.$_pfocustrap_mutationobserver=new MutationObserver(s=>{s.forEach(r=>{if(r.type==="childList"&&!t.contains(document.activeElement)){const o=a=>{const l=we.isFocusableElement(a)?a:we.getFirstFocusableElement(a);return ot.isNotEmpty(l)?l:o(a.nextSibling)};we.focus(o(r.nextSibling))}})}),t.$_pfocustrap_mutationobserver.disconnect(),t.$_pfocustrap_mutationobserver.observe(t,{childList:!0}),t.$_pfocustrap_focusinlistener=s=>n&&n(s),t.$_pfocustrap_focusoutlistener=s=>i&&i(s),t.addEventListener("focusin",t.$_pfocustrap_focusinlistener),t.addEventListener("focusout",t.$_pfocustrap_focusoutlistener)}function Id(t){t.$_pfocustrap_mutationobserver&&t.$_pfocustrap_mutationobserver.disconnect(),t.$_pfocustrap_focusinlistener&&t.removeEventListener("focusin",t.$_pfocustrap_focusinlistener)&&(t.$_pfocustrap_focusinlistener=null),t.$_pfocustrap_focusoutlistener&&t.removeEventListener("focusout",t.$_pfocustrap_focusoutlistener)&&(t.$_pfocustrap_focusoutlistener=null)}function rA(t,e){const{autoFocusSelector:n="",firstFocusableSelector:i="",autoFocus:s=!1}=e.value||{};let r=we.getFirstFocusableElement(t,`[autofocus]:not(.p-hidden-focusable)${n}`);s&&!r&&(r=we.getFirstFocusableElement(t,`:not(.p-hidden-focusable)${i}`)),we.focus(r)}function oA(t){const{currentTarget:e,relatedTarget:n}=t,i=n===e.$_pfocustrap_lasthiddenfocusableelement?we.getFirstFocusableElement(e.parentElement,`:not(.p-hidden-focusable)${e.$_pfocustrap_focusableselector}`):e.$_pfocustrap_lasthiddenfocusableelement;we.focus(i)}function aA(t){const{currentTarget:e,relatedTarget:n}=t,i=n===e.$_pfocustrap_firsthiddenfocusableelement?we.getLastFocusableElement(e.parentElement,`:not(.p-hidden-focusable)${e.$_pfocustrap_focusableselector}`):e.$_pfocustrap_firsthiddenfocusableelement;we.focus(i)}function lA(t,e){const{tabIndex:n=0,firstFocusableSelector:i="",lastFocusableSelector:s=""}=e.value||{},r=l=>{const c=document.createElement("span");return c.classList="p-hidden-accessible p-hidden-focusable",c.tabIndex=n,c.setAttribute("aria-hidden","true"),c.setAttribute("role","presentation"),c.addEventListener("focus",l),c},o=r(oA),a=r(aA);o.$_pfocustrap_lasthiddenfocusableelement=a,o.$_pfocustrap_focusableselector=i,a.$_pfocustrap_firsthiddenfocusableelement=o,a.$_pfocustrap_focusableselector=s,t.prepend(o),t.append(a)}const Gc={mounted(t,e){const{disabled:n}=e.value||{};n||(lA(t,e),sA(t,e),rA(t,e))},updated(t,e){const{disabled:n}=e.value||{};n&&Id(t)},unmounted(t){Id(t)}};var da={name:"TimesIcon",extends:Ii};const cA=W("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1),uA=[cA];function hA(t,e,n,i,s,r){return G(),ve("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),uA,16)}da.render=hA;var zp={name:"WindowMaximizeIcon",extends:Ii};const dA=W("g",{"clip-path":"url(#clip0_414_20927)"},[W("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"})],-1),fA=W("defs",null,[W("clipPath",{id:"clip0_414_20927"},[W("rect",{width:"14",height:"14",fill:"white"})])],-1),pA=[dA,fA];function mA(t,e,n,i,s,r){return G(),ve("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),pA,16)}zp.render=mA;var Hp={name:"WindowMinimizeIcon",extends:Ii};const gA=W("g",{"clip-path":"url(#clip0_414_20939)"},[W("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"})],-1),vA=W("defs",null,[W("clipPath",{id:"clip0_414_20939"},[W("rect",{width:"14",height:"14",fill:"white"})])],-1),_A=[gA,vA];function xA(t,e,n,i,s,r){return G(),ve("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),_A,16)}Hp.render=xA;var fa={name:"Portal",props:{appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data(){return{mounted:!1}},mounted(){this.mounted=we.isClient()},computed:{inline(){return this.disabled||this.appendTo==="self"}}};function bA(t,e,n,i,s,r){return r.inline?Ct(t.$slots,"default",{key:0}):s.mounted?(G(),ke(Jg,{key:1,to:n.appendTo},[Ct(t.$slots,"default")],8,["to"])):Oe("",!0)}fa.render=bA;var Vp={name:"Dialog",extends:Qt,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragend"],props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},rtl:{type:Boolean,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},_instance:null},provide(){return{dialogRef:tn(()=>this._instance)}},data(){return{containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&bn.clear(this.mask),this.container=null,this.mask=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(t){t.setAttribute(this.attributeSelector,"")},onEnter(){this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&bn.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onBeforeLeave(){this.modal&&we.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide"),this.focusableClose=null,this.focusableMax=null},onAfterLeave(){this.autoZIndex&&bn.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskClick(t){this.dismissableMask&&this.modal&&this.mask===t.target&&this.close()},focus(){const t=n=>n.querySelector("[autofocus]");let e=this.$slots.footer&&t(this.footerContainer);e||(e=this.$slots.header&&t(this.headerContainer),e||(e=this.$slots.default&&t(this.content),e||(this.maximizable?(this.focusableMax=!0,e=this.maximizableButton):(this.focusableClose=!0,e=this.closeButton)))),e&&we.focus(e)},maximize(t){this.maximized?(this.maximized=!1,this.$emit("unmaximize",t)):(this.maximized=!0,this.$emit("maximize",t)),this.modal||(this.maximized?we.addClass(document.body,"p-overflow-hidden"):we.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&we.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&we.removeClass(document.body,"p-overflow-hidden")},onKeyDown(t){t.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const e=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return e?`p-dialog-${e}`:""},containerRef(t){this.container=t},maskRef(t){this.mask=t},contentRef(t){this.content=t},headerContainerRef(t){this.headerContainer=t},footerContainerRef(t){this.footerContainer=t},maximizableRef(t){this.maximizableButton=t},closeButtonRef(t){this.closeButton=t},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let t="";for(let e in this.breakpoints)t+=`
                        @media screen and (max-width: ${e}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[e]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=t}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(t){we.hasClass(t.target,"p-dialog-header-icon")||we.hasClass(t.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",we.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=t=>{if(this.dragging){let e=we.getOuterWidth(this.container),n=we.getOuterHeight(this.container),i=t.pageX-this.lastPageX,s=t.pageY-this.lastPageY,r=this.container.getBoundingClientRect(),o=r.left+i,a=r.top+s,l=we.getViewport();this.container.style.position="fixed",this.keepInViewport?(o>=this.minX&&o+e<l.width&&(this.lastPageX=t.pageX,this.container.style.left=o+"px"),a>=this.minY&&a+n<l.height&&(this.lastPageY=t.pageY,this.container.style.top=a+"px")):(this.lastPageX=t.pageX,this.container.style.left=o+"px",this.lastPageY=t.pageY,this.container.style.top=a+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=t=>{this.dragging&&(this.dragging=!1,we.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",t))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconComponent(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},maximizeIconClass(){return`p-dialog-header-maximize-icon ${this.maximized?this.minimizeIcon:this.maximizeIcon}`},ariaId(){return as()},ariaLabelledById(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.ariaId+"_header":null},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},attributeSelector(){return as()},contentStyleClass(){return["p-dialog-content",this.contentClass]}},directives:{ripple:Li,focustrap:Gc},components:{Portal:fa,WindowMinimizeIcon:Hp,WindowMaximizeIcon:zp,TimesIcon:da}};const yA=["aria-labelledby","aria-modal"],SA=["id"],EA=["autofocus","tabindex"],MA=["autofocus","aria-label"];function wA(t,e,n,i,s,r){const o=gt("Portal"),a=Wn("ripple"),l=Wn("focustrap");return G(),ke(o,{appendTo:n.appendTo},{default:ht(()=>[s.containerVisible?(G(),ve("div",he({key:0,ref:r.maskRef,class:r.maskClass,onClick:e[3]||(e[3]=(...c)=>r.onMaskClick&&r.onMaskClick(...c))},t.ptm("mask")),[Xe(jn,{name:"p-dialog",onBeforeEnter:r.onBeforeEnter,onEnter:r.onEnter,onBeforeLeave:r.onBeforeLeave,onLeave:r.onLeave,onAfterLeave:r.onAfterLeave,appear:""},{default:ht(()=>[n.visible?Ft((G(),ve("div",he({key:0,ref:r.containerRef,class:r.dialogClass,role:"dialog","aria-labelledby":r.ariaLabelledById,"aria-modal":n.modal},{...t.$attrs,...t.ptm("root")}),[n.showHeader?(G(),ve("div",he({key:0,ref:r.headerContainerRef,class:"p-dialog-header",onMousedown:e[2]||(e[2]=(...c)=>r.initDrag&&r.initDrag(...c))},t.ptm("header")),[Ct(t.$slots,"header",{},()=>[n.header?(G(),ve("span",he({key:0,id:r.ariaLabelledById,class:"p-dialog-title"},t.ptm("headerTitle")),Nt(n.header),17,SA)):Oe("",!0)]),W("div",he({class:"p-dialog-header-icons"},t.ptm("headerIcons")),[n.maximizable?Ft((G(),ve("button",he({key:0,ref:r.maximizableRef,autofocus:s.focusableMax,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:e[0]||(e[0]=(...c)=>r.maximize&&r.maximize(...c)),type:"button",tabindex:n.maximizable?"0":"-1"},t.ptm("maximizableButton")),[Ct(t.$slots,"maximizeicon",{maximized:s.maximized},()=>[(G(),ke(Qe(r.maximizeIconComponent),he({class:r.maximizeIconClass},t.ptm("maximizableIcon")),null,16,["class"]))])],16,EA)),[[a]]):Oe("",!0),n.closable?Ft((G(),ve("button",he({key:1,ref:r.closeButtonRef,autofocus:s.focusableClose,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:e[1]||(e[1]=(...c)=>r.close&&r.close(...c)),"aria-label":r.closeAriaLabel,type:"button"},{...n.closeButtonProps,...t.ptm("closeButton")}),[Ct(t.$slots,"closeicon",{},()=>[(G(),ke(Qe(n.closeIcon?"span":"TimesIcon"),he({class:["p-dialog-header-close-icon",n.closeIcon]},t.ptm("closeButtonIcon")),null,16,["class"]))])],16,MA)),[[a]]):Oe("",!0)],16)],16)):Oe("",!0),W("div",he({ref:r.contentRef,class:r.contentStyleClass,style:n.contentStyle},{...n.contentProps,...t.ptm("content")}),[Ct(t.$slots,"default")],16),n.footer||t.$slots.footer?(G(),ve("div",he({key:1,ref:r.footerContainerRef,class:"p-dialog-footer"},t.ptm("footer")),[Ct(t.$slots,"footer",{},()=>[Si(Nt(n.footer),1)])],16)):Oe("",!0)],16,yA)),[[l,{disabled:!n.modal}]]):Oe("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):Oe("",!0)]),_:3},8,["appendTo"])}function TA(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var AA=`
.p-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}
.p-dialog-mask.p-component-overlay {
    pointer-events: auto;
}
.p-dialog {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    max-height: 90%;
    transform: scale(1);
}
.p-dialog-content {
    overflow-y: auto;
}
.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
}
.p-dialog-footer {
    flex-shrink: 0;
}
.p-dialog .p-dialog-header-icons {
    display: flex;
    align-items: center;
}
.p-dialog .p-dialog-header-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Fluid */
.p-fluid .p-dialog-footer .p-button {
    width: auto;
}

/* Animation */
/* Center */
.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

/* Top, Bottom, Left, Right, Top* and Bottom* */
.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}
.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}
.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}
.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}
.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}
.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
}
.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}

/* Position */
.p-dialog-left {
    justify-content: flex-start;
}
.p-dialog-right {
    justify-content: flex-end;
}
.p-dialog-top {
    align-items: flex-start;
}
.p-dialog-topleft {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-dialog-topright {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-dialog-bottom {
    align-items: flex-end;
}
.p-dialog-bottomleft {
    justify-content: flex-start;
    align-items: flex-end;
}
.p-dialog-bottomright {
    justify-content: flex-end;
    align-items: flex-end;
}
.p-confirm-dialog .p-dialog-content {
    display: flex;
    align-items: center;
}
`;TA(AA);Vp.render=wA;var Wc={name:"ChevronLeftIcon",extends:Ii};const CA=W("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1),PA=[CA];function RA(t,e,n,i,s,r){return G(),ve("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),PA,16)}Wc.render=RA;var $c={name:"ChevronUpIcon",extends:Ii};const IA=W("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"},null,-1),LA=[IA];function DA(t,e,n,i,s,r){return G(),ve("svg",he({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),LA,16)}$c.render=DA;var Gp={name:"GalleriaItem",extends:Qt,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted(){this.autoPlay&&this.$emit("start-slideshow")},methods:{next(){let t=this.activeIndex+1,e=this.circular&&this.value.length-1===this.activeIndex?0:t;this.$emit("update:activeIndex",e)},prev(){let t=this.activeIndex!==0?this.activeIndex-1:0,e=this.circular&&this.activeIndex===0?this.value.length-1:t;this.$emit("update:activeIndex",e)},stopSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward(t){this.stopSlideShow(),this.prev(),t&&t.cancelable&&t.preventDefault()},navForward(t){this.stopSlideShow(),this.next(),t&&t.cancelable&&t.preventDefault()},onIndicatorClick(t){this.stopSlideShow(),this.$emit("update:activeIndex",t)},onIndicatorMouseEnter(t){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",t))},onIndicatorKeyDown(t,e){switch(t.code){case"Enter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",e),t.preventDefault();break;case"ArrowDown":case"ArrowUp":t.preventDefault();break}},isIndicatorItemActive(t){return this.activeIndex===t},isNavBackwardDisabled(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled(){return!this.circular&&this.activeIndex===this.value.length-1},ariaSlideNumber(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{activeItem(){return this.value[this.activeIndex]},navBackwardClass(){return["p-galleria-item-prev p-galleria-item-nav p-link",{"p-disabled":this.isNavBackwardDisabled()}]},navForwardClass(){return["p-galleria-item-next p-galleria-item-nav p-link",{"p-disabled":this.isNavForwardDisabled()}]},ariaSlideLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0}},components:{ChevronLeftIcon:Wc,ChevronRightIcon:sr},directives:{ripple:Li}};const UA=["disabled"],NA=["id","aria-label","aria-roledescription"],OA=["disabled"],FA=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown"],kA={key:0,type:"button",tabindex:"-1",class:"p-link"};function BA(t,e,n,i,s,r){const o=Wn("ripple");return G(),ve("div",he({class:"p-galleria-item-wrapper"},t.ptm("itemWrapper")),[W("div",he({class:"p-galleria-item-container"},t.ptm("itemContainer")),[n.showItemNavigators?Ft((G(),ve("button",he({key:0,type:"button",class:r.navBackwardClass,onClick:e[0]||(e[0]=a=>r.navBackward(a)),disabled:r.isNavBackwardDisabled()},t.ptm("previousItemButton")),[(G(),ke(Qe(n.templates.previousitemicon||"ChevronLeftIcon"),he({class:"p-galleria-item-prev-icon"},t.ptm("previousItemIcon")),null,16))],16,UA)),[[o]]):Oe("",!0),W("div",he({id:n.id+"_item_"+n.activeIndex,class:"p-galleria-item",role:"group","aria-label":r.ariaSlideNumber(n.activeIndex+1),"aria-roledescription":r.ariaSlideLabel},t.ptm("item")),[n.templates.item?(G(),ke(Qe(n.templates.item),{key:0,item:r.activeItem},null,8,["item"])):Oe("",!0)],16,NA),n.showItemNavigators?Ft((G(),ve("button",he({key:1,type:"button",class:r.navForwardClass,onClick:e[1]||(e[1]=a=>r.navForward(a)),disabled:r.isNavForwardDisabled()},t.ptm("nextItemButton")),[(G(),ke(Qe(n.templates.nextitemicon||"ChevronRightIcon"),he({class:"p-galleria-item-next-icon"},t.ptm("nextItemIcon")),null,16))],16,OA)),[[o]]):Oe("",!0),n.templates.caption?(G(),ve("div",he({key:2,class:"p-galleria-caption"},t.ptm("caption")),[n.templates.caption?(G(),ke(Qe(n.templates.caption),{key:0,item:r.activeItem},null,8,["item"])):Oe("",!0)],16)):Oe("",!0)],16),n.showIndicators?(G(),ve("ul",he({key:0,class:"p-galleria-indicators p-reset"},t.ptm("indicators")),[(G(!0),ve(tt,null,Wt(n.value,(a,l)=>(G(),ve("li",he({key:`p-galleria-indicator-${l}`,class:["p-galleria-indicator",{"p-highlight":r.isIndicatorItemActive(l)}],tabindex:"0","aria-label":r.ariaPageLabel(l+1),"aria-selected":n.activeIndex===l,"aria-controls":n.id+"_item_"+l,onClick:c=>r.onIndicatorClick(l),onMouseenter:c=>r.onIndicatorMouseEnter(l),onKeydown:c=>r.onIndicatorKeyDown(c,l)},t.ptm("indicator")),[n.templates.indicator?Oe("",!0):(G(),ve("button",kA)),n.templates.indicator?(G(),ke(Qe(n.templates.indicator),{key:1,index:l},null,8,["index"])):Oe("",!0)],16,FA))),128))],16)):Oe("",!0)],16)}Gp.render=BA;var Wp={name:"GalleriaThumbnails",extends:Qt,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible(t,e){this.d_numVisible=t,this.d_oldNumVisible=e},activeIndex(t,e){this.d_activeIndex=t,this.d_oldActiveItemIndex=e}},mounted(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated(){let t=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?t=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?t=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?t=this.d_activeIndex*-1+this.getMedianItemIndex()+1:t=this.d_activeIndex*-1+this.getMedianItemIndex(),t!==this.totalShiftedItems&&(this.totalShiftedItems=t),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${t*(100/this.d_numVisible)}%, 0)`:`translate3d(${t*(100/this.d_numVisible)}%, 0, 0)`,this.d_oldActiveItemIndex!==this.d_activeIndex&&(we.removeClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step(t){let e=this.totalShiftedItems+t;t<0&&-1*e+this.d_numVisible>this.value.length-1?e=this.d_numVisible-this.value.length:t>0&&e>0&&(e=0),this.circular&&(t<0&&this.value.length-1===this.d_activeIndex?e=0:t>0&&this.d_activeIndex===0&&(e=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(we.removeClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`,this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=e},stopSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex(){let t=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?t:t-1},navBackward(t){this.stopSlideShow();let e=this.d_activeIndex!==0?this.d_activeIndex-1:0,n=e+this.totalShiftedItems;this.d_numVisible-n-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);let i=this.circular&&this.d_activeIndex===0?this.value.length-1:e;this.$emit("update:activeIndex",i),t.cancelable&&t.preventDefault()},navForward(t){this.stopSlideShow();let e=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;e+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);let n=this.circular&&this.value.length-1===this.d_activeIndex?0:e;this.$emit("update:activeIndex",n),t.cancelable&&t.preventDefault()},onItemClick(t){this.stopSlideShow();let e=t;if(e!==this.d_activeIndex){const n=e+this.totalShiftedItems;let i=0;e<this.d_activeIndex?(i=this.d_numVisible-n-1-this.getMedianItemIndex(),i>0&&-1*this.totalShiftedItems!==0&&this.step(i)):(i=this.getMedianItemIndex()-n,i<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(i)),this.$emit("update:activeIndex",e)}},onThumbnailKeydown(t,e){switch((t.code==="Enter"||t.code==="Space")&&(this.onItemClick(e),t.preventDefault()),t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey(){const t=we.find(this.$refs.itemsContainer,".p-galleria-thumbnail-item"),e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e+1===t.length?t.length-1:e+1)},onLeftKey(){const t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey(){const t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey(){const t=we.find(this.$refs.itemsContainer,".p-galleria-thumbnail-item"),e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,t.length-1)},onTabKey(){const t=[...we.find(this.$refs.itemsContainer,".p-galleria-thumbnail-item")],e=t.findIndex(s=>we.hasClass(s,"p-galleria-thumbnail-item-current")),n=we.findSingle(this.$refs.itemsContainer,'.p-galleria-thumbnail-item > [tabindex="0"'),i=t.findIndex(s=>s===n.parentElement);t[i].children[0].tabIndex="-1",t[e].children[0].tabIndex="0"},findFocusedIndicatorIndex(){const t=[...we.find(this.$refs.itemsContainer,".p-galleria-thumbnail-item")],e=we.findSingle(this.$refs.itemsContainer,'.p-galleria-thumbnail-item > [tabindex="0"]');return t.findIndex(n=>n===e.parentElement)},changedFocusedIndicator(t,e){const n=we.find(this.$refs.itemsContainer,".p-galleria-thumbnail-item");n[t].children[0].tabIndex="-1",n[e].children[0].tabIndex="0",n[e].children[0].focus()},onTransitionEnd(){this.$refs.itemsContainer&&(we.addClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart(t){let e=t.changedTouches[0];this.startPos={x:e.pageX,y:e.pageY}},onTouchMove(t){t.cancelable&&t.preventDefault()},onTouchEnd(t){let e=t.changedTouches[0];this.isVertical?this.changePageOnTouch(t,e.pageY-this.startPos.y):this.changePageOnTouch(t,e.pageX-this.startPos.x)},changePageOnTouch(t,e){e<0?this.navForward(t):this.navBackward(t)},getTotalPageNumber(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle(){this.thumbnailsStyle||(this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",document.body.appendChild(this.thumbnailsStyle));let t=`
                #${this.containerId} .p-galleria-thumbnail-item {
                    flex: 1 0 ${100/this.d_numVisible}%
                }
            `;if(this.responsiveOptions){this.sortedResponsiveOptions=[...this.responsiveOptions],this.sortedResponsiveOptions.sort((e,n)=>{const i=e.breakpoint,s=n.breakpoint;let r=null;return i==null&&s!=null?r=-1:i!=null&&s==null?r=1:i==null&&s==null?r=0:typeof i=="string"&&typeof s=="string"?r=i.localeCompare(s,void 0,{numeric:!0}):r=i<s?-1:i>s?1:0,-1*r});for(let e=0;e<this.sortedResponsiveOptions.length;e++){let n=this.sortedResponsiveOptions[e];t+=`
                        @media screen and (max-width: ${n.breakpoint}) {
                            #${this.containerId} .p-galleria-thumbnail-item {
                                flex: 1 0 ${100/n.numVisible}%
                            }
                        }
                    `}}this.thumbnailsStyle.innerHTML=t},calculatePosition(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){let t=window.innerWidth,e={numVisible:this.numVisible};for(let n=0;n<this.sortedResponsiveOptions.length;n++){let i=this.sortedResponsiveOptions[n];parseInt(i.breakpoint,10)>=t&&(e=i)}this.d_numVisible!==e.numVisible&&(this.d_numVisible=e.numVisible)}},bindDocumentListeners(){this.documentResizeListener||(this.documentResizeListener=()=>{this.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},isNavBackwardDisabled(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible},firstItemAciveIndex(){return this.totalShiftedItems*-1},lastItemActiveIndex(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive(t){return this.firstItemAciveIndex()<=t&&this.lastItemActiveIndex()>=t},ariaPageLabel(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{navBackwardClass(){return["p-galleria-thumbnail-prev p-link",{"p-disabled":this.isNavBackwardDisabled()}]},navForwardClass(){return["p-galleria-thumbnail-next p-link",{"p-disabled":this.isNavForwardDisabled()}]},ariaPrevButtonLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0}},components:{ChevronLeftIcon:Wc,ChevronRightIcon:sr,ChevronUpIcon:$c,ChevronDownIcon:jr},directives:{ripple:Li}};const zA=["disabled","aria-label"],HA=["aria-selected","aria-controls","onKeydown"],VA=["tabindex","aria-label","aria-current","onClick"],GA=["disabled","aria-label"];function WA(t,e,n,i,s,r){const o=Wn("ripple");return G(),ve("div",he({class:"p-galleria-thumbnail-wrapper"},t.ptm("thumbnailWrapper")),[W("div",he({class:"p-galleria-thumbnail-container"},t.ptm("thumbnailContainer")),[n.showThumbnailNavigators?Ft((G(),ve("button",he({key:0,class:r.navBackwardClass,disabled:r.isNavBackwardDisabled(),type:"button","aria-label":r.ariaPrevButtonLabel,onClick:e[0]||(e[0]=a=>r.navBackward(a))},{...n.prevButtonProps,...t.ptm("previousThumbnailButton")}),[(G(),ke(Qe(n.templates.previousthumbnailicon||(n.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),he({class:"p-galleria-thumbnail-prev-icon"},t.ptm("previousThumbnailIcon")),null,16))],16,zA)),[[o]]):Oe("",!0),W("div",he({class:"p-galleria-thumbnail-items-container",style:{height:n.isVertical?n.contentHeight:""}},t.ptm("thumbnailItemsContainer")),[W("div",he({ref:"itemsContainer",class:"p-galleria-thumbnail-items",role:"tablist",onTransitionend:e[1]||(e[1]=(...a)=>r.onTransitionEnd&&r.onTransitionEnd(...a)),onTouchstart:e[2]||(e[2]=a=>r.onTouchStart(a)),onTouchmove:e[3]||(e[3]=a=>r.onTouchMove(a)),onTouchend:e[4]||(e[4]=a=>r.onTouchEnd(a))},t.ptm("thumbnailItems")),[(G(!0),ve(tt,null,Wt(n.value,(a,l)=>(G(),ve("div",he({key:`p-galleria-thumbnail-item-${l}`,class:["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":n.activeIndex===l,"p-galleria-thumbnail-item-active":r.isItemActive(l),"p-galleria-thumbnail-item-start":r.firstItemAciveIndex()===l,"p-galleria-thumbnail-item-end":r.lastItemActiveIndex()===l}],role:"tab","aria-selected":n.activeIndex===l,"aria-controls":n.containerId+"_item_"+l,onKeydown:c=>r.onThumbnailKeydown(c,l)},t.ptm("thumbnailItem")),[W("div",he({class:"p-galleria-thumbnail-item-content",tabindex:n.activeIndex===l?"0":"-1","aria-label":r.ariaPageLabel(l+1),"aria-current":n.activeIndex===l?"page":void 0,onClick:c=>r.onItemClick(l)},t.ptm("thumbnailItemContent")),[n.templates.thumbnail?(G(),ke(Qe(n.templates.thumbnail),{key:0,item:a},null,8,["item"])):Oe("",!0)],16,VA)],16,HA))),128))],16)],16),n.showThumbnailNavigators?Ft((G(),ve("button",he({key:1,class:r.navForwardClass,disabled:r.isNavForwardDisabled(),type:"button","aria-label":r.ariaNextButtonLabel,onClick:e[5]||(e[5]=a=>r.navForward(a))},{...n.nextButtonProps,...t.ptm("nextThumbnailButton")}),[(G(),ke(Qe(n.templates.nextthumbnailicon||(n.isVertical?"ChevronDownIcon":"ChevronRightIcon")),he({class:"p-galleria-thumbnail-next-icon"},t.ptm("nextThumbnailIcon")),null,16))],16,GA)),[[o]]):Oe("",!0)],16)],16)}Wp.render=WA;var $p={name:"GalleriaContent",extends:Qt,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data(){return{id:this.$attrs.id||as(),activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.value":function(t){t&&t.length<this.numVisible&&(this.numVisible=t.length)},"$attrs.activeIndex":function(t){this.activeIndex=t},"$attrs.numVisible":function(t){this.numVisible=t},"$attrs.autoPlay":function(t){t?this.startSlideShow():this.stopSlideShow()}},updated(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount(){this.slideShowActive&&this.stopSlideShow()},methods:{isAutoPlayActive(){return this.slideShowActive},startSlideShow(){this.interval=setInterval(()=>{let t=this.$attrs.circular&&this.$attrs.value.length-1===this.activeIndex?0:this.activeIndex+1;this.activeIndex=t},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass(t,e){const i=["top","left","bottom","right"].find(s=>s===e);return i?`${t}-${i}`:""},isVertical(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{galleriaClass(){const t=this.$attrs.showThumbnails&&this.getPositionClass("p-galleria-thumbnails",this.$attrs.thumbnailsPosition),e=this.$attrs.showIndicators&&this.getPositionClass("p-galleria-indicators",this.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":this.$attrs.fullScreen,"p-galleria-indicator-onitem":this.$attrs.showIndicatorsOnItem,"p-galleria-item-nav-onhover":this.$attrs.showItemNavigatorsOnHover&&!this.$attrs.fullScreen},t,e,this.$attrs.containerClass]},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:Gp,GalleriaThumbnails:Wp,TimesIcon:da},directives:{ripple:Li}};const $A=["id"],XA=["aria-label"],jA=["aria-live"];function KA(t,e,n,i,s,r){const o=gt("GalleriaItem"),a=gt("GalleriaThumbnails"),l=Wn("ripple");return t.$attrs.value&&t.$attrs.value.length>0?(G(),ve("div",he({key:0,id:s.id,class:r.galleriaClass,style:t.$attrs.containerStyle},{...t.$attrs.containerProps,...t.ptm("root")}),[t.$attrs.fullScreen?Ft((G(),ve("button",he({key:0,autofocus:"",type:"button",class:"p-galleria-close p-link","aria-label":r.closeAriaLabel,onClick:e[0]||(e[0]=c=>t.$emit("mask-hide"))},t.ptm("closeButton")),[(G(),ke(Qe(t.$attrs.templates.closeicon||"TimesIcon"),he({class:"p-galleria-close-icon"},t.ptm("closeIcon")),null,16))],16,XA)),[[l]]):Oe("",!0),t.$attrs.templates&&t.$attrs.templates.header?(G(),ve("div",he({key:1,class:"p-galleria-header"},t.ptm("header")),[(G(),ke(Qe(t.$attrs.templates.header)))],16)):Oe("",!0),W("div",he({class:"p-galleria-content","aria-live":t.$attrs.autoPlay?"polite":"off"},t.ptm("content")),[Xe(o,{id:s.id,activeIndex:s.activeIndex,"onUpdate:activeIndex":e[1]||(e[1]=c=>s.activeIndex=c),slideShowActive:s.slideShowActive,"onUpdate:slideShowActive":e[2]||(e[2]=c=>s.slideShowActive=c),value:t.$attrs.value,circular:t.$attrs.circular,templates:t.$attrs.templates,showIndicators:t.$attrs.showIndicators,changeItemOnIndicatorHover:t.$attrs.changeItemOnIndicatorHover,showItemNavigators:t.$attrs.showItemNavigators,autoPlay:t.$attrs.autoPlay,onStartSlideshow:r.startSlideShow,onStopSlideshow:r.stopSlideShow,pt:t.pt},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt"]),t.$attrs.showThumbnails?(G(),ke(a,{key:0,activeIndex:s.activeIndex,"onUpdate:activeIndex":e[3]||(e[3]=c=>s.activeIndex=c),slideShowActive:s.slideShowActive,"onUpdate:slideShowActive":e[4]||(e[4]=c=>s.slideShowActive=c),containerId:s.id,value:t.$attrs.value,templates:t.$attrs.templates,numVisible:s.numVisible,responsiveOptions:t.$attrs.responsiveOptions,circular:t.$attrs.circular,isVertical:r.isVertical(),contentHeight:t.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:t.$attrs.showThumbnailNavigators,prevButtonProps:t.$attrs.prevButtonProps,nextButtonProps:t.$attrs.nextButtonProps,onStopSlideshow:r.stopSlideShow,pt:t.pt},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt"])):Oe("",!0)],16,jA),t.$attrs.templates&&t.$attrs.templates.footer?(G(),ve("div",he({key:2,class:"p-galleria-footer"},t.ptm("footer")),[(G(),ke(Qe(t.$attrs.templates.footer)))],16)):Oe("",!0)],16,$A)):Oe("",!0)}$p.render=KA;var Xp={name:"Galleria",extends:Qt,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},container:null,mask:null,data(){return{containerVisible:this.visible}},updated(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.fullScreen&&we.removeClass(document.body,"p-overflow-hidden"),this.mask=null,this.container&&(bn.clear(this.container),this.container=null)},methods:{onBeforeEnter(t){bn.set("modal",t,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter(t){this.mask.style.zIndex=String(parseInt(t.style.zIndex,10)-1),we.addClass(document.body,"p-overflow-hidden"),this.focus()},onBeforeLeave(){we.addClass(this.mask,"p-component-overlay-leave")},onAfterLeave(t){bn.clear(t),this.containerVisible=!1,we.removeClass(document.body,"p-overflow-hidden")},onActiveItemChange(t){this.activeIndex!==t&&this.$emit("update:activeIndex",t)},maskHide(){this.$emit("update:visible",!1)},containerRef(t){this.container=t},maskRef(t){this.mask=t},focus(){let t=this.container.$el.querySelector("[autofocus]");t&&t.focus()}},computed:{maskContentClass(){return["p-galleria-mask p-component-overlay p-component-overlay-enter",this.maskClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]}},components:{GalleriaContent:$p,Portal:fa},directives:{focustrap:Gc}};const qA=["role","aria-modal"];function YA(t,e,n,i,s,r){const o=gt("GalleriaContent"),a=gt("Portal"),l=Wn("focustrap");return n.fullScreen?(G(),ke(a,{key:0},{default:ht(()=>[s.containerVisible?(G(),ve("div",he({key:0,ref:r.maskRef,class:r.maskContentClass,role:n.fullScreen?"dialog":"region","aria-modal":n.fullScreen?"true":void 0},t.ptm("mask")),[Xe(jn,{name:"p-galleria",onBeforeEnter:r.onBeforeEnter,onEnter:r.onEnter,onBeforeLeave:r.onBeforeLeave,onAfterLeave:r.onAfterLeave,appear:""},{default:ht(()=>[n.visible?Ft((G(),ke(o,he({key:0,ref:r.containerRef,onMaskHide:r.maskHide,templates:t.$slots,onActiveitemChange:r.onActiveItemChange,pt:t.pt},t.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt"])),[[l]]):Oe("",!0)]),_:1},8,["onBeforeEnter","onEnter","onBeforeLeave","onAfterLeave"])],16,qA)):Oe("",!0)]),_:1})):(G(),ke(o,he({key:1,templates:t.$slots,onActiveitemChange:r.onActiveItemChange,pt:t.pt},t.$props),null,16,["templates","onActiveitemChange","pt"]))}function ZA(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var JA=`
.p-galleria-content {
    display: flex;
    flex-direction: column;
}
.p-galleria-item-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
}
.p-galleria-item-container {
    position: relative;
    display: flex;
    height: 100%;
}
.p-galleria-item-nav {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.p-galleria-item-prev {
    left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.p-galleria-item-next {
    right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.p-galleria-item-nav-onhover .p-galleria-item-nav {
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
}
.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav {
    pointer-events: all;
    opacity: 1;
}
.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled {
    pointer-events: none;
}
.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}

/* Thumbnails */
.p-galleria-thumbnail-wrapper {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}
.p-galleria-thumbnail-prev,
.p-galleria-thumbnail-next {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}
.p-galleria-thumbnail-prev span,
.p-galleria-thumbnail-next span {
    display: flex;
    justify-content: center;
    align-items: center;
}
.p-galleria-thumbnail-container {
    display: flex;
    flex-direction: row;
}
.p-galleria-thumbnail-items-container {
    overflow: hidden;
    width: 100%;
}
.p-galleria-thumbnail-items {
    display: flex;
}
.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}
.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}
.p-galleria-thumbnail-item-current {
    opacity: 1;
}

/* Positions */
/* Thumbnails */
.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}
.p-galleria-thumbnails-left .p-galleria-item-wrapper,
.p-galleria-thumbnails-right .p-galleria-item-wrapper {
    flex-direction: row;
}
.p-galleria-thumbnails-left .p-galleria-item-wrapper,
.p-galleria-thumbnails-top .p-galleria-item-wrapper {
    order: 2;
}
.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,
.p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper {
    order: 1;
}
.p-galleria-thumbnails-left .p-galleria-thumbnail-container,
.p-galleria-thumbnails-right .p-galleria-thumbnail-container {
    flex-direction: column;
    flex-grow: 1;
}
.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

/* Indicators */
.p-galleria-indicators {
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-galleria-indicator > button {
    display: inline-flex;
    align-items: center;
}
.p-galleria-indicators-left .p-galleria-item-wrapper,
.p-galleria-indicators-right .p-galleria-item-wrapper {
    flex-direction: row;
    align-items: center;
}
.p-galleria-indicators-left .p-galleria-item-container,
.p-galleria-indicators-top .p-galleria-item-container {
    order: 2;
}
.p-galleria-indicators-left .p-galleria-indicators,
.p-galleria-indicators-top .p-galleria-indicators {
    order: 1;
}
.p-galleria-indicators-left .p-galleria-indicators,
.p-galleria-indicators-right .p-galleria-indicators {
    flex-direction: column;
}
.p-galleria-indicator-onitem .p-galleria-indicators {
    position: absolute;
    display: flex;
}
.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}
.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}
.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}
.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

/* FullScreen */
.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-galleria-close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.p-galleria-mask .p-galleria-item-nav {
    position: fixed;
    top: 50%;
    margin-top: -0.5rem;
}

/* Animation */
.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
.p-galleria-enter-active .p-galleria-item-nav {
    opacity: 0;
}

/* Keyboard Support */
.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}
.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`;ZA(JA);Xp.render=YA;var jp={name:"PanelMenuSub",extends:Qt,emits:["item-toggle"],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},exact:{type:Boolean,default:!0}},methods:{getItemId(t){return`${this.panelId}_${t.key}`},getItemKey(t){return this.getItemId(t)},getItemProp(t,e,n){return t&&t.item?ot.getItemValue(t.item[e],n):void 0},getItemLabel(t){return this.getItemProp(t,"label")},getPTOptions(t,e){return this.ptm(e,{context:{active:this.isItemActive(t),focused:this.isItemFocused(t)}})},isItemActive(t){return this.activeItemPath.some(e=>e.key===t.key)},isItemVisible(t){return this.getItemProp(t,"visible")!==!1},isItemDisabled(t){return this.getItemProp(t,"disabled")},isItemFocused(t){return this.focusedItemId===this.getItemId(t)},isItemGroup(t){return ot.isNotEmpty(t.items)},onItemClick(t,e){this.getItemProp(e,"command",{originalEvent:t,item:e.item}),this.$emit("item-toggle",{processedItem:e,expanded:!this.isItemActive(e)})},onItemToggle(t){this.$emit("item-toggle",t)},onItemActionClick(t,e){e&&e(t)},getAriaSetSize(){return this.items.filter(t=>this.isItemVisible(t)&&!this.getItemProp(t,"separator")).length},getAriaPosInset(t){return t-this.items.slice(0,t).filter(e=>this.isItemVisible(e)&&this.getItemProp(e,"separator")).length+1},getItemClass(t){return["p-menuitem",this.getItemProp(t,"class"),{"p-focus":this.isItemFocused(t),"p-disabled":this.isItemDisabled(t)}]},getItemActionClass(t,e){return["p-menuitem-link",{"router-link-active":e&&e.isActive,"router-link-active-exact":this.exact&&e&&e.isExactActive}]},getItemIconClass(t){return["p-menuitem-icon",this.getItemProp(t,"icon")]},getSeparatorItemClass(t){return["p-menuitem-separator",this.getItemProp(t,"class")]}},components:{ChevronRightIcon:sr,ChevronDownIcon:jr},directives:{ripple:Li}};const QA=["id","aria-label","aria-expanded","aria-level","aria-setsize","aria-posinset"],eC=["onClick"],tC=["href","onClick"],nC=["href","target"];function iC(t,e,n,i,s,r){const o=gt("router-link"),a=gt("PanelMenuSub",!0),l=Wn("ripple");return G(),ve("ul",he({class:"p-submenu-list"},t.ptm("menu")),[(G(!0),ve(tt,null,Wt(n.items,(c,u)=>(G(),ve(tt,{key:r.getItemKey(c)},[r.isItemVisible(c)&&!r.getItemProp(c,"separator")?(G(),ve("li",he({key:0,id:r.getItemId(c),style:r.getItemProp(c,"style"),class:r.getItemClass(c),role:"treeitem","aria-label":r.getItemLabel(c),"aria-expanded":r.isItemGroup(c)?r.isItemActive(c):void 0,"aria-level":n.level+1,"aria-setsize":r.getAriaSetSize(),"aria-posinset":r.getAriaPosInset(u)},r.getPTOptions(c,"menuitem")),[W("div",he({class:"p-menuitem-content",onClick:h=>r.onItemClick(h,c)},r.getPTOptions(c,"content")),[n.templates.item?(G(),ke(Qe(n.templates.item),{key:1,item:c.item},null,8,["item"])):(G(),ve(tt,{key:0},[r.getItemProp(c,"to")&&!r.isItemDisabled(c)?(G(),ke(o,{key:0,to:r.getItemProp(c,"to"),custom:""},{default:ht(({navigate:h,href:d,isActive:p,isExactActive:g})=>[Ft((G(),ve("a",he({href:d,class:r.getItemActionClass(c,{isActive:p,isExactActive:g}),tabindex:"-1","aria-hidden":"true",onClick:v=>r.onItemActionClick(v,h)},r.getPTOptions(c,"action")),[n.templates.itemicon?(G(),ke(Qe(n.templates.itemicon),{key:0,item:c.item,class:At(r.getItemIconClass(c))},null,8,["item","class"])):r.getItemProp(c,"icon")?(G(),ve("span",he({key:1,class:r.getItemIconClass(c)},r.getPTOptions(c,"icon")),null,16)):Oe("",!0),W("span",he({class:"p-menuitem-text"},r.getPTOptions(c,"label")),Nt(r.getItemLabel(c)),17)],16,tC)),[[l]])]),_:2},1032,["to"])):Ft((G(),ve("a",he({key:1,href:r.getItemProp(c,"url"),class:r.getItemActionClass(c),target:r.getItemProp(c,"target"),tabindex:"-1","aria-hidden":"true"},r.getPTOptions(c,"action")),[r.isItemGroup(c)?(G(),ve(tt,{key:0},[n.templates.submenuicon?(G(),ke(Qe(n.templates.submenuicon),he({key:0,class:"p-submenu-icon",active:r.isItemActive(c)},r.getPTOptions(c,"submenuIcon")),null,16,["active"])):(G(),ke(Qe(r.isItemActive(c)?"ChevronDownIcon":"ChevronRightIcon"),he({key:1,class:"p-submenu-icon"},r.getPTOptions(c,"submenuIcon")),null,16))],64)):Oe("",!0),n.templates.itemicon?(G(),ke(Qe(n.templates.itemicon),{key:1,item:c.item,class:At(r.getItemIconClass(c))},null,8,["item","class"])):r.getItemProp(c,"icon")?(G(),ve("span",he({key:2,class:r.getItemIconClass(c)},r.getPTOptions(c,"icon")),null,16)):Oe("",!0),W("span",he({class:"p-menuitem-text"},r.getPTOptions(c,"label")),Nt(r.getItemLabel(c)),17)],16,nC)),[[l]])],64))],16,eC),Xe(jn,{name:"p-toggleable-content"},{default:ht(()=>[Ft(W("div",he({class:"p-toggleable-content"},t.ptm("toggleableContent")),[r.isItemVisible(c)&&r.isItemGroup(c)?(G(),ke(a,{key:0,id:r.getItemId(c)+"_list",role:"group",panelId:n.panelId,focusedItemId:n.focusedItemId,items:c.items,level:n.level+1,templates:n.templates,activeItemPath:n.activeItemPath,exact:n.exact,onItemToggle:r.onItemToggle,pt:t.pt},null,8,["id","panelId","focusedItemId","items","level","templates","activeItemPath","exact","onItemToggle","pt"])):Oe("",!0)],16),[[xc,r.isItemActive(c)]])]),_:2},1024)],16,QA)):Oe("",!0),r.isItemVisible(c)&&r.getItemProp(c,"separator")?(G(),ve("li",he({key:1,style:r.getItemProp(c,"style"),class:r.getSeparatorItemClass(c),role:"separator"},t.ptm("separator")),null,16)):Oe("",!0)],64))),128))],16)}jp.render=iC;var Kp={name:"PanelMenuList",extends:Qt,emits:["item-toggle","header-focus"],props:{panelId:{type:String,default:null},items:{type:Array,default:null},templates:{type:Object,default:null},expandedKeys:{type:Object,default:null},exact:{type:Boolean,default:!0}},searchTimeout:null,searchValue:null,data(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys(t){this.autoUpdateActiveItemPath(t)}},mounted(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp(t,e){return t&&t.item?ot.getItemValue(t.item[e]):void 0},getItemLabel(t){return this.getItemProp(t,"label")},isItemVisible(t){return this.getItemProp(t,"visible")!==!1},isItemDisabled(t){return this.getItemProp(t,"disabled")},isItemActive(t){return this.activeItemPath.some(e=>e.key===t.parentKey)},isItemGroup(t){return ot.isNotEmpty(t.items)},onFocus(t){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(t,t.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur(){this.focused=!1,this.focusedItem=null,this.searchValue=""},onKeyDown(t){const e=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":this.onEnterKey(t);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!e&&ot.isPrintableCharacter(t.key)&&this.searchItems(t,t.key);break}},onArrowDownKey(t){const e=ot.isNotEmpty(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:t,processedItem:e,focusOnNext:!0}),t.preventDefault()},onArrowUpKey(t){const e=ot.isNotEmpty(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:t,processedItem:e,selfCheck:!0}),t.preventDefault()},onArrowLeftKey(t){ot.isNotEmpty(this.focusedItem)&&(this.activeItemPath.some(n=>n.key===this.focusedItem.key)?this.activeItemPath=this.activeItemPath.filter(n=>n.key!==this.focusedItem.key):this.focusedItem=ot.isNotEmpty(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,t.preventDefault())},onArrowRightKey(t){ot.isNotEmpty(this.focusedItem)&&(this.isItemGroup(this.focusedItem)&&(this.activeItemPath.some(i=>i.key===this.focusedItem.key)?this.onArrowDownKey(t):(this.activeItemPath=this.activeItemPath.filter(i=>i.parentKey!==this.focusedItem.parentKey),this.activeItemPath.push(this.focusedItem))),t.preventDefault())},onHomeKey(t){this.changeFocusedItem({originalEvent:t,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),t.preventDefault()},onEndKey(t){this.changeFocusedItem({originalEvent:t,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),t.preventDefault()},onEnterKey(t){if(ot.isNotEmpty(this.focusedItem)){const e=we.findSingle(this.$el,`li[id="${`${this.focusedItemId}`}"]`),n=e&&(we.findSingle(e,".p-menuitem-link")||we.findSingle(e,"a,button"));n?n.click():e&&e.click()}t.preventDefault()},onSpaceKey(t){this.onEnterKey(t)},onItemToggle(t){const{processedItem:e,expanded:n}=t;this.expandedKeys?this.$emit("item-toggle",{item:e.item,expanded:n}):(this.activeItemPath=this.activeItemPath.filter(i=>i.parentKey!==e.parentKey),n&&this.activeItemPath.push(e)),this.focusedItem=e,we.focus(this.$el)},isElementInPanel(t,e){const n=t.currentTarget.closest(".p-panelmenu-panel");return n&&n.contains(e)},isItemMatched(t){return this.isValidItem(t)&&this.getItemLabel(t).toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale))},isVisibleItem(t){return!!t&&(t.level===0||this.isItemActive(t))&&this.isItemVisible(t)},isValidItem(t){return!!t&&!this.isItemDisabled(t)},findFirstItem(){return this.visibleItems.find(t=>this.isValidItem(t))},findLastItem(){return ot.findLast(this.visibleItems,t=>this.isValidItem(t))},findNextItem(t){const e=this.visibleItems.findIndex(i=>i.key===t.key);return(e<this.visibleItems.length-1?this.visibleItems.slice(e+1).find(i=>this.isValidItem(i)):void 0)||t},findPrevItem(t){const e=this.visibleItems.findIndex(i=>i.key===t.key);return(e>0?ot.findLast(this.visibleItems.slice(0,e),i=>this.isValidItem(i)):void 0)||t},searchItems(t,e){this.searchValue=(this.searchValue||"")+e;let n=null,i=!1;if(ot.isNotEmpty(this.focusedItem)){const s=this.visibleItems.findIndex(r=>r.key===this.focusedItem.key);n=this.visibleItems.slice(s).find(r=>this.isItemMatched(r)),n=ot.isEmpty(n)?this.visibleItems.slice(0,s).find(r=>this.isItemMatched(r)):n}else n=this.visibleItems.find(s=>this.isItemMatched(s));return ot.isNotEmpty(n)&&(i=!0),ot.isEmpty(n)&&ot.isEmpty(this.focusedItem)&&(n=this.findFirstItem()),ot.isNotEmpty(n)&&this.changeFocusedItem({originalEvent:t,processedItem:n,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),i},changeFocusedItem(t){const{originalEvent:e,processedItem:n,focusOnNext:i,selfCheck:s,allowHeaderFocus:r=!0}=t;ot.isNotEmpty(this.focusedItem)&&this.focusedItem.key!==n.key?(this.focusedItem=n,this.scrollInView()):r&&this.$emit("header-focus",{originalEvent:e,focusOnNext:i,selfCheck:s})},scrollInView(){const t=we.findSingle(this.$el,`li[id="${`${this.focusedItemId}`}"]`);t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest",inline:"start"})},autoUpdateActiveItemPath(t){this.activeItemPath=Object.entries(t||{}).reduce((e,[n,i])=>{if(i){const s=this.findProcessedItemByItemKey(n);s&&e.push(s)}return e},[])},findProcessedItemByItemKey(t,e,n=0){if(e=e||n===0&&this.processedItems,!e)return null;for(let i=0;i<e.length;i++){const s=e[i];if(this.getItemProp(s,"key")===t)return s;const r=this.findProcessedItemByItemKey(t,s.items,n+1);if(r)return r}},createProcessedItems(t,e=0,n={},i=""){const s=[];return t&&t.forEach((r,o)=>{const a=(i!==""?i+"_":"")+o,l={item:r,index:o,level:e,key:a,parent:n,parentKey:i};l.items=this.createProcessedItems(r.items,e+1,l,a),s.push(l)}),s},flatItems(t,e=[]){return t&&t.forEach(n=>{this.isVisibleItem(n)&&(e.push(n),this.flatItems(n.items,e))}),e}},computed:{processedItems(){return this.createProcessedItems(this.items||[])},visibleItems(){return this.flatItems(this.processedItems)},focusedItemId(){return ot.isNotEmpty(this.focusedItem)?`${this.panelId}_${this.focusedItem.key}`:null}},components:{PanelMenuSub:jp}};function sC(t,e,n,i,s,r){const o=gt("PanelMenuSub");return G(),ke(o,{id:n.panelId+"_list",class:"p-panelmenu-root-list",role:"tree",tabindex:-1,"aria-activedescendant":s.focused?r.focusedItemId:void 0,panelId:n.panelId,focusedItemId:s.focused?r.focusedItemId:void 0,items:r.processedItems,templates:n.templates,activeItemPath:s.activeItemPath,exact:n.exact,onFocus:r.onFocus,onBlur:r.onBlur,onKeydown:r.onKeyDown,onItemToggle:r.onItemToggle,pt:t.pt},null,8,["id","aria-activedescendant","panelId","focusedItemId","items","templates","activeItemPath","exact","onFocus","onBlur","onKeydown","onItemToggle","pt"])}Kp.render=sC;var qp={name:"PanelMenu",extends:Qt,emits:["update:expandedKeys","panel-open","panel-close"],props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},exact:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},data(){return{id:this.$attrs.id,activeItem:null}},watch:{"$attrs.id":function(t){this.id=t||as()}},mounted(){this.id=this.id||as()},methods:{getItemProp(t,e){return t?ot.getItemValue(t[e]):void 0},getItemLabel(t){return this.getItemProp(t,"label")},getPTOptions(t,e){return this.ptm(e,{options:{active:this.isItemActive(t),focused:this.isItemFocused(t)}})},isItemActive(t){return this.expandedKeys?this.expandedKeys[this.getItemProp(t,"key")]:ot.equals(t,this.activeItem)},isItemVisible(t){return this.getItemProp(t,"visible")!==!1},isItemDisabled(t){return this.getItemProp(t,"disabled")},isItemFocused(t){return ot.equals(t,this.activeItem)},getPanelId(t){return`${this.id}_${t}`},getPanelKey(t){return this.getPanelId(t)},getHeaderId(t){return`${this.getPanelId(t)}_header`},getContentId(t){return`${this.getPanelId(t)}_content`},onHeaderClick(t,e){if(this.isItemDisabled(e)){t.preventDefault();return}e.command&&e.command({originalEvent:t,item:e}),this.changeActiveItem(t,e),we.focus(t.currentTarget)},onHeaderKeyDown(t,e){switch(t.code){case"ArrowDown":this.onHeaderArrowDownKey(t);break;case"ArrowUp":this.onHeaderArrowUpKey(t);break;case"Home":this.onHeaderHomeKey(t);break;case"End":this.onHeaderEndKey(t);break;case"Enter":case"Space":this.onHeaderEnterKey(t,e);break}},onHeaderArrowDownKey(t){const e=we.hasClass(t.currentTarget,"p-highlight")?we.findSingle(t.currentTarget.nextElementSibling,".p-panelmenu-root-list"):null;e?we.focus(e):this.updateFocusedHeader({originalEvent:t,focusOnNext:!0}),t.preventDefault()},onHeaderArrowUpKey(t){const e=this.findPrevHeader(t.currentTarget.parentElement)||this.findLastHeader(),n=we.hasClass(e,"p-highlight")?we.findSingle(e.nextElementSibling,".p-panelmenu-root-list"):null;n?we.focus(n):this.updateFocusedHeader({originalEvent:t,focusOnNext:!1}),t.preventDefault()},onHeaderHomeKey(t){this.changeFocusedHeader(t,this.findFirstHeader()),t.preventDefault()},onHeaderEndKey(t){this.changeFocusedHeader(t,this.findLastHeader()),t.preventDefault()},onHeaderEnterKey(t,e){const n=we.findSingle(t.currentTarget,".p-panelmenu-header-action");n?n.click():this.onHeaderClick(t,e),t.preventDefault()},onHeaderActionClick(t,e){e&&e(t)},findNextHeader(t,e=!1){const n=e?t:t.nextElementSibling,i=we.findSingle(n,".p-panelmenu-header");return i?we.hasClass(i,"p-disabled")?this.findNextHeader(i.parentElement):i:null},findPrevHeader(t,e=!1){const n=e?t:t.previousElementSibling,i=we.findSingle(n,".p-panelmenu-header");return i?we.hasClass(i,"p-disabled")?this.findPrevHeader(i.parentElement):i:null},findFirstHeader(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader(t){const{originalEvent:e,focusOnNext:n,selfCheck:i}=t,s=e.currentTarget.closest(".p-panelmenu-panel"),r=i?we.findSingle(s,".p-panelmenu-header"):n?this.findNextHeader(s):this.findPrevHeader(s);r?this.changeFocusedHeader(e,r):n?this.onHeaderHomeKey(e):this.onHeaderEndKey(e)},changeActiveItem(t,e,n=!1){if(!this.isItemDisabled(e)){const i=this.isItemActive(e),s=i?"panel-close":"panel-open";this.activeItem=n?e:this.activeItem&&ot.equals(e,this.activeItem)?null:e,this.changeExpandedKeys({item:e,expanded:!i}),this.$emit(s,{originalEvent:t,item:e})}},changeExpandedKeys({item:t,expanded:e=!1}){if(this.expandedKeys){let n={...this.expandedKeys};e?n[t.key]=!0:delete n[t.key],this.$emit("update:expandedKeys",n)}},changeFocusedHeader(t,e){e&&we.focus(e)},getPanelClass(t){return["p-panelmenu-panel",this.getItemProp(t,"class")]},getHeaderClass(t){return["p-panelmenu-header",this.getItemProp(t,"headerClass"),{"p-highlight":this.isItemActive(t),"p-disabled":this.isItemDisabled(t)}]},getHeaderActionClass(t,e){return["p-panelmenu-header-action",{"router-link-active":e&&e.isActive,"router-link-active-exact":this.exact&&e&&e.isExactActive}]},getHeaderIconClass(t){return["p-menuitem-icon",this.getItemProp(t,"icon")]}},components:{PanelMenuList:Kp,ChevronRightIcon:sr,ChevronDownIcon:jr}};const rC=["id"],oC=["id","tabindex","aria-label","aria-expanded","aria-controls","aria-disabled","onClick","onKeydown"],aC=["href","onClick"],lC=["href"],cC=["id","aria-labelledby"];function uC(t,e,n,i,s,r){const o=gt("router-link"),a=gt("PanelMenuList");return G(),ve("div",he({id:s.id,class:"p-panelmenu p-component"},t.ptm("root")),[(G(!0),ve(tt,null,Wt(n.model,(l,c)=>(G(),ve(tt,{key:r.getPanelKey(c)},[r.isItemVisible(l)?(G(),ve("div",he({key:0,style:r.getItemProp(l,"style"),class:r.getPanelClass(l)},t.ptm("panel")),[W("div",he({id:r.getHeaderId(c),class:r.getHeaderClass(l),tabindex:r.isItemDisabled(l)?-1:n.tabindex,role:"button","aria-label":r.getItemLabel(l),"aria-expanded":r.isItemActive(l),"aria-controls":r.getContentId(c),"aria-disabled":r.isItemDisabled(l),onClick:u=>r.onHeaderClick(u,l),onKeydown:u=>r.onHeaderKeyDown(u,l)},r.getPTOptions(l,"header")),[W("div",he({class:"p-panelmenu-header-content"},r.getPTOptions(l,"headerContent")),[t.$slots.item?(G(),ke(Qe(t.$slots.item),{key:1,item:l},null,8,["item"])):(G(),ve(tt,{key:0},[r.getItemProp(l,"to")&&!r.isItemDisabled(l)?(G(),ke(o,{key:0,to:r.getItemProp(l,"to"),custom:""},{default:ht(({navigate:u,href:h,isActive:d,isExactActive:p})=>[W("a",he({href:h,class:r.getHeaderActionClass(l,{isActive:d,isExactActive:p}),tabindex:-1,onClick:g=>r.onHeaderActionClick(g,u)},r.getPTOptions(l,"headerAction")),[t.$slots.headericon?(G(),ke(Qe(t.$slots.headericon),{key:0,item:l,class:At(r.getHeaderIconClass(l))},null,8,["item","class"])):r.getItemProp(l,"icon")?(G(),ve("span",he({key:1,class:r.getHeaderIconClass(l)},r.getPTOptions(l,"headerIcon")),null,16)):Oe("",!0),W("span",he({class:"p-menuitem-text"},r.getPTOptions(l,"headerLabel")),Nt(r.getItemLabel(l)),17)],16,aC)]),_:2},1032,["to"])):(G(),ve("a",he({key:1,href:r.getItemProp(l,"url"),class:r.getHeaderActionClass(l),tabindex:-1},r.getPTOptions(l,"headerAction")),[r.getItemProp(l,"items")?Ct(t.$slots,"submenuicon",{key:0,active:r.isItemActive(l)},()=>[(G(),ke(Qe(r.isItemActive(l)?"ChevronDownIcon":"ChevronRightIcon"),he({class:"p-submenu-icon"},r.getPTOptions(l,"submenuIcon")),null,16))]):Oe("",!0),t.$slots.headericon?(G(),ke(Qe(t.$slots.headericon),{key:1,item:l,class:At(r.getHeaderIconClass(l))},null,8,["item","class"])):r.getItemProp(l,"icon")?(G(),ve("span",he({key:2,class:r.getHeaderIconClass(l)},r.getPTOptions(l,"headerIcon")),null,16)):Oe("",!0),W("span",he({class:"p-menuitem-text"},r.getPTOptions(l,"headerLabel")),Nt(r.getItemLabel(l)),17)],16,lC))],64))],16)],16,oC),Xe(jn,{name:"p-toggleable-content"},{default:ht(()=>[Ft(W("div",he({id:r.getContentId(c),class:"p-toggleable-content",role:"region","aria-labelledby":r.getHeaderId(c)},t.ptm("toggleableContent")),[r.getItemProp(l,"items")?(G(),ve("div",he({key:0,class:"p-panelmenu-content"},t.ptm("menuContent")),[Xe(a,{panelId:r.getPanelId(c),items:r.getItemProp(l,"items"),templates:t.$slots,expandedKeys:n.expandedKeys,onItemToggle:r.changeExpandedKeys,onHeaderFocus:r.updateFocusedHeader,exact:n.exact,pt:t.pt},null,8,["panelId","items","templates","expandedKeys","onItemToggle","onHeaderFocus","exact","pt"])],16)):Oe("",!0)],16,cC),[[xc,r.isItemActive(l)]])]),_:2},1024)],16)):Oe("",!0)],64))),128))],16,rC)}function hC(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var dC=`
.p-panelmenu .p-panelmenu-header-action {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
}
.p-panelmenu .p-panelmenu-header-action:focus {
    z-index: 1;
}
.p-panelmenu .p-submenu-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-panelmenu .p-menuitem-link {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    overflow: hidden;
}
.p-panelmenu .p-menuitem-text {
    line-height: 1;
}
`;hC(dC);qp.render=uC;var Yp={name:"ScrollTop",extends:Qt,scrollListener:null,container:null,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"}},data(){return{visible:!1}},mounted(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(bn.clear(this.container),this.overlay=null)},methods:{onClick(){(this.target==="window"?window:this.$el.parentElement).scroll({top:0,behavior:this.behavior})},checkVisibility(t){t>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener(){this.scrollListener=()=>{this.checkVisibility(this.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener(){this.scrollListener=()=>{this.checkVisibility(we.getWindowScrollTop())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter(t){bn.set("overlay",t,this.$primevue.config.zIndex.overlay)},onAfterLeave(t){bn.clear(t)},containerRef(t){this.container=t}},computed:{containerClass(){return["p-scrolltop p-link p-component",{"p-scrolltop-sticky":this.target!=="window"}]},scrollTopAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:$c}};const fC=["aria-label"];function pC(t,e,n,i,s,r){return G(),ke(jn,{name:"p-scrolltop",appear:"",onEnter:r.onEnter,onAfterLeave:r.onAfterLeave},{default:ht(()=>[s.visible?(G(),ve("button",he({key:0,ref:r.containerRef,class:r.containerClass,onClick:e[0]||(e[0]=(...o)=>r.onClick&&r.onClick(...o)),type:"button","aria-label":r.scrollTopAriaLabel},t.ptm("root")),[Ct(t.$slots,"icon",{},()=>[(G(),ke(Qe(n.icon?"span":"ChevronUpIcon"),he({class:["p-scrolltop-icon",n.icon]},t.ptm("icon")),null,16,["class"]))])],16,fC)):Oe("",!0)]),_:3},8,["onEnter","onAfterLeave"])}function mC(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var gC=`
.p-scrolltop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-scrolltop-sticky {
    position: sticky;
}
.p-scrolltop-sticky.p-link {
    margin-left: auto;
}
.p-scrolltop-enter-from {
    opacity: 0;
}
.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}
.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}
.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}
`;mC(gC);Yp.render=pC;var Zp={name:"Sidebar",extends:Qt,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},data(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&bn.clear(this.mask),this.container=null,this.mask=null},methods:{hide(){this.$emit("update:visible",!1)},onEnter(){this.$emit("show"),this.focus(),this.autoZIndex&&bn.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter(){this.enableDocumentSettings()},onBeforeLeave(){this.modal&&we.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(){this.autoZIndex&&bn.clear(this.mask),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus(){const t=n=>n.querySelector("[autofocus]");let e=this.$slots.default&&t(this.content);e||(e=this.$slots.header&&t(this.headerContainer),e||(e=t(this.container))),e&&e.focus()},enableDocumentSettings(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&we.addClass(document.body,"p-overflow-hidden")},disableDocumentSettings(){this.unbindOutsideClickListener(),this.blockScroll&&we.removeClass(document.body,"p-overflow-hidden")},onKeydown(t){t.code==="Escape"&&this.hide()},containerRef(t){this.container=t},maskRef(t){this.mask=t},contentRef(t){this.content=t},headerContainerRef(t){this.headerContainer=t},closeButtonRef(t){this.closeButton=t},getPositionClass(){const e=["left","right","top","bottom"].find(n=>n===this.position);return e?`p-sidebar-${e}`:""},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=t=>{this.isOutsideClicked(t)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked(t){return this.container&&!this.container.contains(t.target)}},computed:{containerClass(){return["p-sidebar p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1,"p-sidebar-full":this.fullScreen}]},fullScreen(){return this.position==="full"},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},maskClass(){return["p-sidebar-mask",this.getPositionClass(),{"p-component-overlay p-component-overlay-enter":this.modal,"p-sidebar-mask-scrollblocker":this.blockScroll,"p-sidebar-visible":this.containerVisible,"p-sidebar-full":this.fullScreen}]}},directives:{focustrap:Gc,ripple:Li},components:{Portal:fa,TimesIcon:da}};const vC=["aria-modal"],_C=["aria-label"];function xC(t,e,n,i,s,r){const o=gt("Portal"),a=Wn("ripple"),l=Wn("focustrap");return G(),ke(o,null,{default:ht(()=>[s.containerVisible?(G(),ve("div",he({key:0,ref:r.maskRef,class:r.maskClass,onMousedown:e[2]||(e[2]=(...c)=>r.onMaskClick&&r.onMaskClick(...c))},t.ptm("mask")),[Xe(jn,{name:"p-sidebar",onEnter:r.onEnter,onAfterEnter:r.onAfterEnter,onBeforeLeave:r.onBeforeLeave,onLeave:r.onLeave,onAfterLeave:r.onAfterLeave,appear:""},{default:ht(()=>[n.visible?Ft((G(),ve("div",he({key:0,ref:r.containerRef,class:r.containerClass,role:"complementary","aria-modal":n.modal,onKeydown:e[1]||(e[1]=(...c)=>r.onKeydown&&r.onKeydown(...c))},{...t.$attrs,...t.ptm("root")}),[W("div",he({ref:r.headerContainerRef,class:"p-sidebar-header"},t.ptm("header")),[t.$slots.header?(G(),ve("div",he({key:0,class:"p-sidebar-header-content"},t.ptm("headerContent")),[Ct(t.$slots,"header")],16)):Oe("",!0),n.showCloseIcon?Ft((G(),ve("button",he({key:1,ref:r.closeButtonRef,autofocus:"",type:"button",class:"p-sidebar-close p-sidebar-icon p-link","aria-label":r.closeAriaLabel,onClick:e[0]||(e[0]=(...c)=>r.hide&&r.hide(...c))},t.ptm("closeButton")),[Ct(t.$slots,"closeicon",{},()=>[(G(),ke(Qe(n.closeIcon?"span":"TimesIcon"),he({class:["p-sidebar-close-icon ",n.closeIcon]},t.ptm("closeIcon")),null,16,["class"]))])],16,_C)),[[a]]):Oe("",!0)],16),W("div",he({ref:r.contentRef,class:"p-sidebar-content"},t.ptm("content")),[Ct(t.$slots,"default")],16)],16,vC)),[[l]]):Oe("",!0)]),_:3},8,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):Oe("",!0)]),_:3})}function bC(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var yC=`
.p-sidebar-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    background-color: transparent;
    transition-property: background-color;
}
.p-sidebar-mask.p-component-overlay {
    pointer-events: auto;
}
.p-sidebar-visible {
    display: flex;
}
.p-sidebar {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
}
.p-sidebar-content {
    overflow-y: auto;
    flex-grow: 1;
}
.p-sidebar-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-shrink: 0;
}
.p-sidebar-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}
.p-sidebar-full .p-sidebar {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
}

/* Animation */
/* Center */
.p-sidebar-left .p-sidebar-enter-from,
.p-sidebar-left .p-sidebar-leave-to {
    transform: translateX(-100%);
}
.p-sidebar-right .p-sidebar-enter-from,
.p-sidebar-right .p-sidebar-leave-to {
    transform: translateX(100%);
}
.p-sidebar-top .p-sidebar-enter-from,
.p-sidebar-top .p-sidebar-leave-to {
    transform: translateY(-100%);
}
.p-sidebar-bottom .p-sidebar-enter-from,
.p-sidebar-bottom .p-sidebar-leave-to {
    transform: translateY(100%);
}
.p-sidebar-full .p-sidebar-enter-from,
.p-sidebar-full .p-sidebar-leave-to {
    opacity: 0;
}
.p-sidebar-full .p-sidebar-enter-active,
.p-sidebar-full .p-sidebar-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Position */
.p-sidebar-left {
    justify-content: flex-start;
}
.p-sidebar-right {
    justify-content: flex-end;
}
.p-sidebar-top {
    align-items: flex-start;
}
.p-sidebar-bottom {
    align-items: flex-end;
}

/* Size */
.p-sidebar-left .p-sidebar {
    width: 20rem;
    height: 100%;
}
.p-sidebar-right .p-sidebar {
    width: 20rem;
    height: 100%;
}
.p-sidebar-top .p-sidebar {
    height: 10rem;
    width: 100%;
}
.p-sidebar-bottom .p-sidebar {
    height: 10rem;
    width: 100%;
}
.p-sidebar-left .p-sidebar-sm,
.p-sidebar-right .p-sidebar-sm {
    width: 20rem;
}
.p-sidebar-left .p-sidebar-md,
.p-sidebar-right .p-sidebar-md {
    width: 40rem;
}
.p-sidebar-left .p-sidebar-lg,
.p-sidebar-right .p-sidebar-lg {
    width: 60rem;
}
.p-sidebar-top .p-sidebar-sm,
.p-sidebar-bottom .p-sidebar-sm {
    height: 10rem;
}
.p-sidebar-top .p-sidebar-md,
.p-sidebar-bottom .p-sidebar-md {
    height: 20rem;
}
.p-sidebar-top .p-sidebar-lg,
.p-sidebar-bottom .p-sidebar-lg {
    height: 30rem;
}
.p-sidebar-left .p-sidebar-content,
.p-sidebar-right .p-sidebar-content,
.p-sidebar-top .p-sidebar-content,
.p-sidebar-bottom .p-sidebar-content {
    width: 100%;
    height: 100%;
}
@media screen and (max-width: 64em) {
.p-sidebar-left .p-sidebar-lg,
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-md {
        width: 20rem;
}
}
`;bC(yC);Zp.render=xC;var Jp={name:"TabMenu",extends:Qt,emits:["update:activeIndex","tab-change"],props:{model:{type:Array,default:null},exact:{type:Boolean,default:!0},activeIndex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},timeout:null,data(){return{d_activeIndex:this.activeIndex}},watch:{$route(){this.timeout=setTimeout(()=>this.updateInkBar(),50)},activeIndex(t){this.d_activeIndex=t}},mounted(){this.updateInkBar()},updated(){this.updateInkBar()},beforeUnmount(){clearTimeout(this.timeout)},methods:{getPTOptions(t,e){return this.ptm(t,{context:{order:e}})},onItemClick(t,e,n,i){if(this.disabled(e)){t.preventDefault();return}e.command&&e.command({originalEvent:t,item:e}),e.to&&i&&i(t),n!==this.d_activeIndex&&(this.d_activeIndex=n,this.$emit("update:activeIndex",this.d_activeIndex)),this.$emit("tab-change",{originalEvent:t,index:n})},onKeydownItem(t,e){let n=e,i={};const s=this.$refs.tabLink;switch(t.code){case"ArrowRight":{i=this.findNextItem(this.$refs.tab,n),n=i.i;break}case"ArrowLeft":{i=this.findPrevItem(this.$refs.tab,n),n=i.i;break}case"End":{i=this.findPrevItem(this.$refs.tab,this.model.length),n=i.i,t.preventDefault();break}case"Home":{i=this.findNextItem(this.$refs.tab,-1),n=i.i,t.preventDefault();break}case"Space":case"Enter":{t.currentTarget&&t.currentTarget.click(),t.preventDefault();break}case"Tab":{this.setDefaultTabIndexes(s);break}}s[n]&&s[e]&&(s[e].tabIndex="-1",s[n].tabIndex="0",s[n].focus())},findNextItem(t,e){let n=e+1;if(n>=t.length)return{nextItem:t[t.length],i:t.length};let i=t[n];return i?we.hasClass(i,"p-disabled")?this.findNextItem(t,n):{nextItem:i,i:n}:null},findPrevItem(t,e){let n=e-1;if(n<0)return{nextItem:t[0],i:0};let i=t[n];return i?we.hasClass(i,"p-disabled")?this.findPrevItem(t,n):{prevItem:i,i:n}:null},getItemClass(t,e){return["p-tabmenuitem",t.class,{"p-highlight":this.d_activeIndex===e,"p-disabled":this.disabled(t)}]},getRouteItemClass(t,e,n){return["p-tabmenuitem",t.class,{"p-highlight":this.exact?n:e,"p-disabled":this.disabled(t)}]},getItemIcon(t){return["p-menuitem-icon",t.icon]},visible(t){return typeof t.visible=="function"?t.visible():t.visible!==!1},disabled(t){return typeof t.disabled=="function"?t.disabled():t.disabled},label(t){return typeof t.label=="function"?t.label():t.label},setDefaultTabIndexes(t){setTimeout(()=>{t.forEach(e=>{e.tabIndex=we.hasClass(e.parentElement,"p-highlight")?"0":"-1"})},300)},setTabIndex(t){return this.d_activeIndex===t?"0":"-1"},updateInkBar(){let t=this.$refs.nav.children,e=!1;for(let n=0;n<t.length;n++){let i=t[n];we.hasClass(i,"p-highlight")&&(this.$refs.inkbar.style.width=we.getWidth(i)+"px",this.$refs.inkbar.style.left=we.getOffset(i).left-we.getOffset(this.$refs.nav).left+"px",e=!0)}e||(this.$refs.inkbar.style.width="0px",this.$refs.inkbar.style.left="0px")}},computed:{focusableItems(){return(this.model||[]).reduce((t,e)=>(this.visible(e)&&!we.hasClass(e,"p-disabled")&&t.push(e),t),[])}},directives:{ripple:Li}};const SC=["aria-labelledby","aria-label"],EC=["href","aria-label","aria-disabled","tabindex","onClick","onKeydown"],MC=["onClick","onKeydown"],wC=["href","target","aria-label","aria-disabled","tabindex"];function TC(t,e,n,i,s,r){const o=gt("router-link"),a=Wn("ripple");return G(),ve("div",he({class:"p-tabmenu p-component"},t.ptm("root")),[W("ul",he({ref:"nav",class:"p-tabmenu-nav p-reset",role:"menubar","aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptm("menu")),[(G(!0),ve(tt,null,Wt(r.focusableItems,(l,c)=>(G(),ve(tt,{key:r.label(l)+"_"+c.toString()},[l.to&&!r.disabled(l)?(G(),ke(o,{key:0,to:l.to,custom:""},{default:ht(({navigate:u,href:h,isActive:d,isExactActive:p})=>[r.visible(l)?(G(),ve("li",he({key:0,ref_for:!0,ref:"tab",class:r.getRouteItemClass(l,d,p),style:l.style,role:"presentation"},r.getPTOptions("menuitem",c)),[t.$slots.item?(G(),ke(Qe(t.$slots.item),{key:1,item:l,index:c},null,8,["item","index"])):Ft((G(),ve("a",he({key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:h,class:"p-menuitem-link","aria-label":r.label(l),"aria-disabled":r.disabled(l),tabindex:p?"0":"-1",onClick:g=>r.onItemClick(g,l,c,u),onKeydown:g=>r.onKeydownItem(g,c,u)},r.getPTOptions("action",c)),[t.$slots.itemicon?(G(),ke(Qe(t.$slots.itemicon),{key:0,item:l,class:At(r.getItemIcon(l))},null,8,["item","class"])):l.icon?(G(),ve("span",he({key:1,class:r.getItemIcon(l)},r.getPTOptions("icon",c)),null,16)):Oe("",!0),W("span",he({class:"p-menuitem-text"},r.getPTOptions("label",c)),Nt(r.label(l)),17)],16,EC)),[[a]])],16)):Oe("",!0)]),_:2},1032,["to"])):r.visible(l)?(G(),ve("li",he({key:1,ref_for:!0,ref:"tab",class:r.getItemClass(l,c),role:"presentation",onClick:u=>r.onItemClick(u,l,c),onKeydown:u=>r.onKeydownItem(u,c)},r.getPTOptions("menuitem",c)),[t.$slots.item?(G(),ke(Qe(t.$slots.item),{key:1,item:l,index:c},null,8,["item","index"])):Ft((G(),ve("a",he({key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:l.url,class:"p-menuitem-link",target:l.target,"aria-label":r.label(l),"aria-disabled":r.disabled(l),tabindex:r.setTabIndex(c)},r.getPTOptions("action",c)),[t.$slots.itemicon?(G(),ke(Qe(t.$slots.itemicon),{key:0,item:l,class:At(r.getItemIcon(l))},null,8,["item","class"])):l.icon?(G(),ve("span",he({key:1,class:r.getItemIcon(l)},r.getPTOptions("icon",c)),null,16)):Oe("",!0),W("span",he({class:"p-menuitem-text"},r.getPTOptions("label",c)),Nt(r.label(l)),17)],16,wC)),[[a]])],16,MC)):Oe("",!0)],64))),128)),W("li",he({ref:"inkbar",role:"none",class:"p-tabmenu-ink-bar"},t.ptm("inkbar")),null,16)],16,SC)],16)}function AC(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var CC=`
.p-tabmenu {
    overflow-x: auto;
}
.p-tabmenu-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex-wrap: nowrap;
}
.p-tabmenu-nav a {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    text-decoration: none;
    overflow: hidden;
}
.p-tabmenu-nav a:focus {
    z-index: 1;
}
.p-tabmenu-nav .p-menuitem-text {
    line-height: 1;
}
.p-tabmenu-ink-bar {
    display: none;
    z-index: 1;
}
.p-tabmenu::-webkit-scrollbar {
    display: none;
}
`;AC(CC);Jp.render=TC;const on=Bv(Gv);on.use(_T);on.use(Ip);on.use(CT);on.component("Accordion",Np);on.component("AccordionTab",Op);on.component("Card",Fp);on.component("Chip",Bp);on.component("Dialog",Vp);on.component("Galleria",Xp);on.component("PanelMenu",qp);on.component("ScrollTop",Yp);on.component("Sidebar",Zp);on.component("TabMenu",Jp);on.mount("#app");
