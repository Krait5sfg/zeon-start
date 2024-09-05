const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/browserAll-0-MME_8n.js","assets/webworkerAll-BcsV3zlc.js","assets/colorToUniform-BewGbLL2.js","assets/CanvasPool-qgtd5onz.js","assets/getBatchSamplersUniformGroup-NgWJMR8Y.js","assets/WebGPURenderer-CFtntYgz.js","assets/SharedSystems-DZ76crRu.js","assets/WebGLRenderer-Ck3QXbb3.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
* @vue/shared v3.4.36
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ms(n,e){const t=new Set(n.split(","));return r=>t.has(r)}const ge={},dn=[],$e=()=>{},Fc=()=>!1,Vr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Is=n=>n.startsWith("onUpdate:"),ze=Object.assign,zs=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Mc=Object.prototype.hasOwnProperty,se=(n,e)=>Mc.call(n,e),K=Array.isArray,Dn=n=>Xr(n)==="[object Map]",Ic=n=>Xr(n)==="[object Set]",Q=n=>typeof n=="function",Te=n=>typeof n=="string",Sn=n=>typeof n=="symbol",ye=n=>n!==null&&typeof n=="object",Il=n=>(ye(n)||Q(n))&&Q(n.then)&&Q(n.catch),zc=Object.prototype.toString,Xr=n=>zc.call(n),Oc=n=>Xr(n).slice(8,-1),Ec=n=>Xr(n)==="[object Object]",Os=n=>Te(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Bn=Ms(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hr=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Rc=/-(\w)/g,Kt=Hr(n=>n.replace(Rc,(e,t)=>t?t.toUpperCase():"")),Uc=/\B([A-Z])/g,Jt=Hr(n=>n.replace(Uc,"-$1").toLowerCase()),zl=Hr(n=>n.charAt(0).toUpperCase()+n.slice(1)),si=Hr(n=>n?`on${zl(n)}`:""),At=(n,e)=>!Object.is(n,e),oi=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ol=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Lc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let co;const El=()=>co||(co=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Es(n){if(K(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=Te(r)?kc(r):Es(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Te(n)||ye(n))return n}const Dc=/;(?![^(]*\))/g,Bc=/:([^]+)/,Gc=/\/\*[^]*?\*\//g;function kc(n){const e={};return n.replace(Gc,"").split(Dc).forEach(t=>{if(t){const r=t.split(Bc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Rs(n){let e="";if(Te(n))e=n;else if(K(n))for(let t=0;t<n.length;t++){const r=Rs(n[t]);r&&(e+=r+" ")}else if(ye(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Nc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$c=Ms(Nc);function Rl(n){return!!n||n===""}/**
* @vue/reactivity v3.4.36
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class Vc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=je;try{return je=this,e()}finally{je=t}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Xc(n,e=je){e&&e.active&&e.effects.push(n)}function Hc(){return je}let Wt;class Us{constructor(e,t,r,i){this.fn=e,this.trigger=t,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Xc(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Mt();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(Yc(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),It()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=wt,t=Wt;try{return wt=!0,Wt=this,this._runnings++,fo(this),this.fn()}finally{ho(this),this._runnings--,Wt=t,wt=e}}stop(){this.active&&(fo(this),ho(this),this.onStop&&this.onStop(),this.active=!1)}}function Yc(n){return n.value}function fo(n){n._trackId++,n._depsLength=0}function ho(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)Ul(n.deps[e],n);n.deps.length=n._depsLength}}function Ul(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let wt=!0,$i=0;const Ll=[];function Mt(){Ll.push(wt),wt=!1}function It(){const n=Ll.pop();wt=n===void 0?!0:n}function Ls(){$i++}function Ds(){for($i--;!$i&&Vi.length;)Vi.shift()()}function Dl(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const r=n.deps[n._depsLength];r!==e?(r&&Ul(r,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Vi=[];function Bl(n,e,t){Ls();for(const r of n.keys()){let i;r._dirtyLevel<e&&(i??(i=n.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(i??(i=n.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Vi.push(r.scheduler)))}Ds()}const Gl=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},Xi=new WeakMap,jt=Symbol(""),Hi=Symbol("");function Le(n,e,t){if(wt&&Wt){let r=Xi.get(n);r||Xi.set(n,r=new Map);let i=r.get(t);i||r.set(t,i=Gl(()=>r.delete(t))),Dl(Wt,i)}}function ht(n,e,t,r,i,s){const o=Xi.get(n);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(t==="length"&&K(n)){const a=Number(r);o.forEach((c,u)=>{(u==="length"||!Sn(u)&&u>=a)&&l.push(c)})}else switch(t!==void 0&&l.push(o.get(t)),e){case"add":K(n)?Os(t)&&l.push(o.get("length")):(l.push(o.get(jt)),Dn(n)&&l.push(o.get(Hi)));break;case"delete":K(n)||(l.push(o.get(jt)),Dn(n)&&l.push(o.get(Hi)));break;case"set":Dn(n)&&l.push(o.get(jt));break}Ls();for(const a of l)a&&Bl(a,4);Ds()}const Wc=Ms("__proto__,__v_isRef,__isVue"),kl=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Sn)),mo=jc();function jc(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=ce(this);for(let s=0,o=this.length;s<o;s++)Le(r,"get",s+"");const i=r[e](...t);return i===-1||i===!1?r[e](...t.map(ce)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Mt(),Ls();const r=ce(this)[e].apply(this,t);return Ds(),It(),r}}),n}function qc(n){Sn(n)||(n=String(n));const e=ce(this);return Le(e,"has",n),e.hasOwnProperty(n)}class Nl{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){const i=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return s;if(t==="__v_raw")return r===(i?s?uf:Hl:s?Xl:Vl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=K(e);if(!i){if(o&&se(mo,t))return Reflect.get(mo,t,r);if(t==="hasOwnProperty")return qc}const l=Reflect.get(e,t,r);return(Sn(t)?kl.has(t):Wc(t))||(i||Le(e,"get",t),s)?l:De(l)?o&&Os(t)?l:l.value:ye(l)?i?Yl(l):ks(l):l}}class $l extends Nl{constructor(e=!1){super(!1,e)}set(e,t,r,i){let s=e[t];if(!this._isShallow){const a=Zt(s);if(!pn(r)&&!Zt(r)&&(s=ce(s),r=ce(r)),!K(e)&&De(s)&&!De(r))return a?!1:(s.value=r,!0)}const o=K(e)&&Os(t)?Number(t)<e.length:se(e,t),l=Reflect.set(e,t,r,i);return e===ce(i)&&(o?At(r,s)&&ht(e,"set",t,r):ht(e,"add",t,r)),l}deleteProperty(e,t){const r=se(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&r&&ht(e,"delete",t,void 0),i}has(e,t){const r=Reflect.has(e,t);return(!Sn(t)||!kl.has(t))&&Le(e,"has",t),r}ownKeys(e){return Le(e,"iterate",K(e)?"length":jt),Reflect.ownKeys(e)}}class Kc extends Nl{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Zc=new $l,Qc=new Kc,Jc=new $l(!0);const Bs=n=>n,Yr=n=>Reflect.getPrototypeOf(n);function lr(n,e,t=!1,r=!1){n=n.__v_raw;const i=ce(n),s=ce(e);t||(At(e,s)&&Le(i,"get",e),Le(i,"get",s));const{has:o}=Yr(i),l=r?Bs:t?$s:Wn;if(o.call(i,e))return l(n.get(e));if(o.call(i,s))return l(n.get(s));n!==i&&n.get(e)}function ar(n,e=!1){const t=this.__v_raw,r=ce(t),i=ce(n);return e||(At(n,i)&&Le(r,"has",n),Le(r,"has",i)),n===i?t.has(n):t.has(n)||t.has(i)}function ur(n,e=!1){return n=n.__v_raw,!e&&Le(ce(n),"iterate",jt),Reflect.get(n,"size",n)}function po(n,e=!1){!e&&!pn(n)&&!Zt(n)&&(n=ce(n));const t=ce(this);return Yr(t).has.call(t,n)||(t.add(n),ht(t,"add",n,n)),this}function go(n,e,t=!1){!t&&!pn(e)&&!Zt(e)&&(e=ce(e));const r=ce(this),{has:i,get:s}=Yr(r);let o=i.call(r,n);o||(n=ce(n),o=i.call(r,n));const l=s.call(r,n);return r.set(n,e),o?At(e,l)&&ht(r,"set",n,e):ht(r,"add",n,e),this}function xo(n){const e=ce(this),{has:t,get:r}=Yr(e);let i=t.call(e,n);i||(n=ce(n),i=t.call(e,n)),r&&r.call(e,n);const s=e.delete(n);return i&&ht(e,"delete",n,void 0),s}function vo(){const n=ce(this),e=n.size!==0,t=n.clear();return e&&ht(n,"clear",void 0,void 0),t}function cr(n,e){return function(r,i){const s=this,o=s.__v_raw,l=ce(o),a=e?Bs:n?$s:Wn;return!n&&Le(l,"iterate",jt),o.forEach((c,u)=>r.call(i,a(c),a(u),s))}}function fr(n,e,t){return function(...r){const i=this.__v_raw,s=ce(i),o=Dn(s),l=n==="entries"||n===Symbol.iterator&&o,a=n==="keys"&&o,c=i[n](...r),u=t?Bs:e?$s:Wn;return!e&&Le(s,"iterate",a?Hi:jt),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:l?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function bt(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ef(){const n={get(s){return lr(this,s)},get size(){return ur(this)},has:ar,add:po,set:go,delete:xo,clear:vo,forEach:cr(!1,!1)},e={get(s){return lr(this,s,!1,!0)},get size(){return ur(this)},has:ar,add(s){return po.call(this,s,!0)},set(s,o){return go.call(this,s,o,!0)},delete:xo,clear:vo,forEach:cr(!1,!0)},t={get(s){return lr(this,s,!0)},get size(){return ur(this,!0)},has(s){return ar.call(this,s,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:cr(!0,!1)},r={get(s){return lr(this,s,!0,!0)},get size(){return ur(this,!0)},has(s){return ar.call(this,s,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:cr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=fr(s,!1,!1),t[s]=fr(s,!0,!1),e[s]=fr(s,!1,!0),r[s]=fr(s,!0,!0)}),[n,t,e,r]}const[tf,nf,rf,sf]=ef();function Gs(n,e){const t=e?n?sf:rf:n?nf:tf;return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(se(t,i)&&i in r?t:r,i,s)}const of={get:Gs(!1,!1)},lf={get:Gs(!1,!0)},af={get:Gs(!0,!1)};const Vl=new WeakMap,Xl=new WeakMap,Hl=new WeakMap,uf=new WeakMap;function cf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ff(n){return n.__v_skip||!Object.isExtensible(n)?0:cf(Oc(n))}function ks(n){return Zt(n)?n:Ns(n,!1,Zc,of,Vl)}function hf(n){return Ns(n,!1,Jc,lf,Xl)}function Yl(n){return Ns(n,!0,Qc,af,Hl)}function Ns(n,e,t,r,i){if(!ye(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=i.get(n);if(s)return s;const o=ff(n);if(o===0)return n;const l=new Proxy(n,o===2?r:t);return i.set(n,l),l}function Gn(n){return Zt(n)?Gn(n.__v_raw):!!(n&&n.__v_isReactive)}function Zt(n){return!!(n&&n.__v_isReadonly)}function pn(n){return!!(n&&n.__v_isShallow)}function Wl(n){return n?!!n.__v_raw:!1}function ce(n){const e=n&&n.__v_raw;return e?ce(e):n}function df(n){return Object.isExtensible(n)&&Ol(n,"__v_skip",!0),n}const Wn=n=>ye(n)?ks(n):n,$s=n=>ye(n)?Yl(n):n;class jl{constructor(e,t,r,i){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Us(()=>e(this._value),()=>wr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=ce(this);return(!e._cacheable||e.effect.dirty)&&At(e._value,e._value=e.effect.run())&&wr(e,4),ql(e),e.effect._dirtyLevel>=2&&wr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function mf(n,e,t=!1){let r,i;const s=Q(n);return s?(r=n,i=$e):(r=n.get,i=n.set),new jl(r,i,s||!i,t)}function ql(n){var e;wt&&Wt&&(n=ce(n),Dl(Wt,(e=n.dep)!=null?e:n.dep=Gl(()=>n.dep=void 0,n instanceof jl?n:void 0)))}function wr(n,e=4,t,r){n=ce(n);const i=n.dep;i&&Bl(i,e)}function De(n){return!!(n&&n.__v_isRef===!0)}function pf(n){return gf(n,!1)}function gf(n,e){return De(n)?n:new xf(n,e)}class xf{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ce(e),this._value=t?e:Wn(e)}get value(){return ql(this),this._value}set value(e){const t=this.__v_isShallow||pn(e)||Zt(e);e=t?e:ce(e),At(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=t?e:Wn(e),wr(this,4))}}function vf(n){return De(n)?n.value:n}const yf={get:(n,e,t)=>vf(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return De(i)&&!De(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function Kl(n){return Gn(n)?n:new Proxy(n,yf)}/**
* @vue/runtime-core v3.4.36
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tt(n,e,t,r){try{return r?n(...r):n()}catch(i){Wr(i,e,t)}}function qe(n,e,t,r){if(Q(n)){const i=Tt(n,e,t,r);return i&&Il(i)&&i.catch(s=>{Wr(s,e,t)}),i}if(K(n)){const i=[];for(let s=0;s<n.length;s++)i.push(qe(n[s],e,t,r));return i}}function Wr(n,e,t,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,l)===!1)return}s=s.parent}const a=e.appContext.config.errorHandler;if(a){Mt(),Tt(a,null,10,[n,o,l]),It();return}}_f(n,t,i,r)}function _f(n,e,t,r=!0){console.error(n)}let jn=!1,Yi=!1;const Pe=[];let rt=0;const mn=[];let St=null,Xt=0;const Zl=Promise.resolve();let Vs=null;function bf(n){const e=Vs||Zl;return n?e.then(this?n.bind(this):n):e}function Sf(n){let e=rt+1,t=Pe.length;for(;e<t;){const r=e+t>>>1,i=Pe[r],s=qn(i);s<n||s===n&&i.pre?e=r+1:t=r}return e}function Xs(n){(!Pe.length||!Pe.includes(n,jn&&n.allowRecurse?rt+1:rt))&&(n.id==null?Pe.push(n):Pe.splice(Sf(n.id),0,n),Ql())}function Ql(){!jn&&!Yi&&(Yi=!0,Vs=Zl.then(ea))}function Cf(n){const e=Pe.indexOf(n);e>rt&&Pe.splice(e,1)}function wf(n){K(n)?mn.push(...n):(!St||!St.includes(n,n.allowRecurse?Xt+1:Xt))&&mn.push(n),Ql()}function yo(n,e,t=jn?rt+1:0){for(;t<Pe.length;t++){const r=Pe[t];if(r&&r.pre){if(n&&r.id!==n.uid)continue;Pe.splice(t,1),t--,r()}}}function Jl(n){if(mn.length){const e=[...new Set(mn)].sort((t,r)=>qn(t)-qn(r));if(mn.length=0,St){St.push(...e);return}for(St=e,Xt=0;Xt<St.length;Xt++){const t=St[Xt];t.active!==!1&&t()}St=null,Xt=0}}const qn=n=>n.id==null?1/0:n.id,Tf=(n,e)=>{const t=qn(n)-qn(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function ea(n){Yi=!1,jn=!0,Pe.sort(Tf);try{for(rt=0;rt<Pe.length;rt++){const e=Pe[rt];e&&e.active!==!1&&Tt(e,e.i,e.i?15:14)}}finally{rt=0,Pe.length=0,Jl(),jn=!1,Vs=null,(Pe.length||mn.length)&&ea()}}let it=null,jr=null;function Br(n){const e=it;return it=n,jr=n&&n.type.__scopeId||null,e}function Pf(n){jr=n}function Af(){jr=null}function Ff(n,e=it,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&Ao(-1);const s=Br(e);let o;try{o=n(...i)}finally{Br(s),r._d&&Ao(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ut(n,e,t,r){const i=n.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];s&&(l.oldValue=s[o].value);let a=l.dir[r];a&&(Mt(),qe(a,t,8,[n.el,l,n,e]),It())}}function ta(n,e){n.shapeFlag&6&&n.component?ta(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}const Tr=n=>!!n.type.__asyncLoader,na=n=>n.type.__isKeepAlive;function Mf(n,e){ra(n,"a",e)}function If(n,e){ra(n,"da",e)}function ra(n,e,t=Ie){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(qr(e,r,t),t){let i=t.parent;for(;i&&i.parent;)na(i.parent.vnode)&&zf(r,e,t,i),i=i.parent}}function zf(n,e,t,r){const i=qr(e,n,r,!0);sa(()=>{zs(r[e],i)},t)}function qr(n,e,t=Ie,r=!1){if(t){const i=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Mt();const l=or(t),a=qe(e,t,n,o);return l(),It(),a});return r?i.unshift(s):i.push(s),s}}const gt=n=>(e,t=Ie)=>{(!Jr||n==="sp")&&qr(n,(...r)=>e(...r),t)},Of=gt("bm"),ia=gt("m"),Ef=gt("bu"),Rf=gt("u"),Uf=gt("bum"),sa=gt("um"),Lf=gt("sp"),Df=gt("rtg"),Bf=gt("rtc");function Gf(n,e=Ie){qr("ec",n,e)}const kf=Symbol.for("v-ndc"),Wi=n=>n?Ta(n)?js(n):Wi(n.parent):null,kn=ze(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Wi(n.parent),$root:n=>Wi(n.root),$emit:n=>n.emit,$options:n=>Hs(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,Xs(n.update)}),$nextTick:n=>n.n||(n.n=bf.bind(n.proxy)),$watch:n=>ch.bind(n)}),li=(n,e)=>n!==ge&&!n.__isScriptSetup&&se(n,e),Nf={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:l,appContext:a}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(li(r,e))return o[e]=1,r[e];if(i!==ge&&se(i,e))return o[e]=2,i[e];if((c=n.propsOptions[0])&&se(c,e))return o[e]=3,s[e];if(t!==ge&&se(t,e))return o[e]=4,t[e];ji&&(o[e]=0)}}const u=kn[e];let f,h;if(u)return e==="$attrs"&&Le(n.attrs,"get",""),u(n);if((f=l.__cssModules)&&(f=f[e]))return f;if(t!==ge&&se(t,e))return o[e]=4,t[e];if(h=a.config.globalProperties,se(h,e))return h[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:s}=n;return li(i,e)?(i[e]=t,!0):r!==ge&&se(r,e)?(r[e]=t,!0):se(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let l;return!!t[o]||n!==ge&&se(n,o)||li(e,o)||(l=s[0])&&se(l,o)||se(r,o)||se(kn,o)||se(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:se(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function _o(n){return K(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ji=!0;function $f(n){const e=Hs(n),t=n.proxy,r=n.ctx;ji=!1,e.beforeCreate&&bo(e.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:m,activated:x,deactivated:p,beforeDestroy:b,beforeUnmount:_,destroyed:y,unmounted:w,render:$,renderTracked:R,renderTriggered:N,errorCaptured:k,serverPrefetch:O,expose:I,inheritAttrs:ee,components:Z,directives:B,filters:L}=e;if(c&&Vf(c,r,null),o)for(const S in o){const H=o[S];Q(H)&&(r[S]=H.bind(t))}if(i){const S=i.call(t,t);ye(S)&&(n.data=ks(S))}if(ji=!0,s)for(const S in s){const H=s[S],E=Q(H)?H.bind(t,t):Q(H.get)?H.get.bind(t,t):$e,X=!Q(H)&&Q(H.set)?H.set.bind(t):$e,Fe=Uh({get:E,set:X});Object.defineProperty(r,S,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:ne=>Fe.value=ne})}if(l)for(const S in l)oa(l[S],r,t,S);if(a){const S=Q(a)?a.call(t):a;Reflect.ownKeys(S).forEach(H=>{qf(H,S[H])})}u&&bo(u,n,"c");function z(S,H){K(H)?H.forEach(E=>S(E.bind(t))):H&&S(H.bind(t))}if(z(Of,f),z(ia,h),z(Ef,d),z(Rf,m),z(Mf,x),z(If,p),z(Gf,k),z(Bf,R),z(Df,N),z(Uf,_),z(sa,w),z(Lf,O),K(I))if(I.length){const S=n.exposed||(n.exposed={});I.forEach(H=>{Object.defineProperty(S,H,{get:()=>t[H],set:E=>t[H]=E})})}else n.exposed||(n.exposed={});$&&n.render===$e&&(n.render=$),ee!=null&&(n.inheritAttrs=ee),Z&&(n.components=Z),B&&(n.directives=B)}function Vf(n,e,t=$e){K(n)&&(n=qi(n));for(const r in n){const i=n[r];let s;ye(i)?"default"in i?s=Pr(i.from||r,i.default,!0):s=Pr(i.from||r):s=Pr(i),De(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function bo(n,e,t){qe(K(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function oa(n,e,t,r){const i=r.includes(".")?_a(t,r):()=>t[r];if(Te(n)){const s=e[n];Q(s)&&ui(i,s)}else if(Q(n))ui(i,n.bind(t));else if(ye(n))if(K(n))n.forEach(s=>oa(s,e,t,r));else{const s=Q(n.handler)?n.handler.bind(t):e[n.handler];Q(s)&&ui(i,s,n)}}function Hs(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,l=s.get(e);let a;return l?a=l:!i.length&&!t&&!r?a=e:(a={},i.length&&i.forEach(c=>Gr(a,c,o,!0)),Gr(a,e,o)),ye(e)&&s.set(e,a),a}function Gr(n,e,t,r=!1){const{mixins:i,extends:s}=e;s&&Gr(n,s,t,!0),i&&i.forEach(o=>Gr(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const l=Xf[o]||t&&t[o];n[o]=l?l(n[o],e[o]):e[o]}return n}const Xf={data:So,props:Co,emits:Co,methods:zn,computed:zn,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:zn,directives:zn,watch:Yf,provide:So,inject:Hf};function So(n,e){return e?n?function(){return ze(Q(n)?n.call(this,this):n,Q(e)?e.call(this,this):e)}:e:n}function Hf(n,e){return zn(qi(n),qi(e))}function qi(n){if(K(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Me(n,e){return n?[...new Set([].concat(n,e))]:e}function zn(n,e){return n?ze(Object.create(null),n,e):e}function Co(n,e){return n?K(n)&&K(e)?[...new Set([...n,...e])]:ze(Object.create(null),_o(n),_o(e??{})):e}function Yf(n,e){if(!n)return e;if(!e)return n;const t=ze(Object.create(null),n);for(const r in e)t[r]=Me(n[r],e[r]);return t}function la(){return{app:null,config:{isNativeTag:Fc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wf=0;function jf(n,e){return function(r,i=null){Q(r)||(r=ze({},r)),i!=null&&!ye(i)&&(i=null);const s=la(),o=new WeakSet;let l=!1;const a=s.app={_uid:Wf++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Lh,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Q(c.install)?(o.add(c),c.install(a,...u)):Q(c)&&(o.add(c),c(a,...u))),a},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),a},component(c,u){return u?(s.components[c]=u,a):s.components[c]},directive(c,u){return u?(s.directives[c]=u,a):s.directives[c]},mount(c,u,f){if(!l){const h=Pt(r,i);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,c):n(h,c,f),l=!0,a._container=c,c.__vue_app__=a,js(h.component)}},unmount(){l&&(n(null,a._container),delete a._container.__vue_app__)},provide(c,u){return s.provides[c]=u,a},runWithContext(c){const u=Nn;Nn=a;try{return c()}finally{Nn=u}}};return a}}let Nn=null;function qf(n,e){if(Ie){let t=Ie.provides;const r=Ie.parent&&Ie.parent.provides;r===t&&(t=Ie.provides=Object.create(r)),t[n]=e}}function Pr(n,e,t=!1){const r=Ie||it;if(r||Nn){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Nn._context.provides;if(i&&n in i)return i[n];if(arguments.length>1)return t&&Q(e)?e.call(r&&r.proxy):e}}const aa={},ua=()=>Object.create(aa),ca=n=>Object.getPrototypeOf(n)===aa;function Kf(n,e,t,r=!1){const i={},s=ua();n.propsDefaults=Object.create(null),fa(n,e,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=r?i:hf(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function Zf(n,e,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,l=ce(i),[a]=n.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Kr(n.emitsOptions,h))continue;const d=e[h];if(a)if(se(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const m=Kt(h);i[m]=Ki(a,l,m,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{fa(n,e,i,s)&&(c=!0);let u;for(const f in l)(!e||!se(e,f)&&((u=Jt(f))===f||!se(e,u)))&&(a?t&&(t[f]!==void 0||t[u]!==void 0)&&(i[f]=Ki(a,l,f,void 0,n,!0)):delete i[f]);if(s!==l)for(const f in s)(!e||!se(e,f))&&(delete s[f],c=!0)}c&&ht(n.attrs,"set","")}function fa(n,e,t,r){const[i,s]=n.propsOptions;let o=!1,l;if(e)for(let a in e){if(Bn(a))continue;const c=e[a];let u;i&&se(i,u=Kt(a))?!s||!s.includes(u)?t[u]=c:(l||(l={}))[u]=c:Kr(n.emitsOptions,a)||(!(a in r)||c!==r[a])&&(r[a]=c,o=!0)}if(s){const a=ce(t),c=l||ge;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ki(i,a,f,c[f],n,!se(c,f))}}return o}function Ki(n,e,t,r,i,s){const o=n[t];if(o!=null){const l=se(o,"default");if(l&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&Q(a)){const{propsDefaults:c}=i;if(t in c)r=c[t];else{const u=or(i);r=c[t]=a.call(null,e),u()}}else r=a}o[0]&&(s&&!l?r=!1:o[1]&&(r===""||r===Jt(t))&&(r=!0))}return r}const Qf=new WeakMap;function ha(n,e,t=!1){const r=t?Qf:e.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},l=[];let a=!1;if(!Q(n)){const u=f=>{a=!0;const[h,d]=ha(f,e,!0);ze(o,h),d&&l.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!a)return ye(n)&&r.set(n,dn),dn;if(K(s))for(let u=0;u<s.length;u++){const f=Kt(s[u]);wo(f)&&(o[f]=ge)}else if(s)for(const u in s){const f=Kt(u);if(wo(f)){const h=s[u],d=o[f]=K(h)||Q(h)?{type:h}:ze({},h),m=d.type;let x=!1,p=!0;if(K(m))for(let b=0;b<m.length;++b){const _=m[b],y=Q(_)&&_.name;if(y==="Boolean"){x=!0;break}else y==="String"&&(p=!1)}else x=Q(m)&&m.name==="Boolean";d[0]=x,d[1]=p,(x||se(d,"default"))&&l.push(f)}}const c=[o,l];return ye(n)&&r.set(n,c),c}function wo(n){return n[0]!=="$"&&!Bn(n)}const da=n=>n[0]==="_"||n==="$stable",Ys=n=>K(n)?n.map(nt):[nt(n)],Jf=(n,e,t)=>{if(e._n)return e;const r=Ff((...i)=>Ys(e(...i)),t);return r._c=!1,r},ma=(n,e,t)=>{const r=n._ctx;for(const i in n){if(da(i))continue;const s=n[i];if(Q(s))e[i]=Jf(i,s,r);else if(s!=null){const o=Ys(s);e[i]=()=>o}}},pa=(n,e)=>{const t=Ys(e);n.slots.default=()=>t},ga=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},eh=(n,e,t)=>{const r=n.slots=ua();if(n.vnode.shapeFlag&32){const i=e._;i?(ga(r,e,t),t&&Ol(r,"_",i,!0)):ma(e,r)}else e&&pa(n,e)},th=(n,e,t)=>{const{vnode:r,slots:i}=n;let s=!0,o=ge;if(r.shapeFlag&32){const l=e._;l?t&&l===1?s=!1:ga(i,e,t):(s=!e.$stable,ma(e,i)),o=e}else e&&(pa(n,e),o={default:1});if(s)for(const l in i)!da(l)&&o[l]==null&&delete i[l]};function Zi(n,e,t,r,i=!1){if(K(n)){n.forEach((h,d)=>Zi(h,e&&(K(e)?e[d]:e),t,r,i));return}if(Tr(r)&&!i)return;const s=r.shapeFlag&4?js(r.component):r.el,o=i?null:s,{i:l,r:a}=n,c=e&&e.r,u=l.refs===ge?l.refs={}:l.refs,f=l.setupState;if(c!=null&&c!==a&&(Te(c)?(u[c]=null,se(f,c)&&(f[c]=null)):De(c)&&(c.value=null)),Q(a))Tt(a,l,12,[o,u]);else{const h=Te(a),d=De(a);if(h||d){const m=()=>{if(n.f){const x=h?se(f,a)?f[a]:u[a]:a.value;i?K(x)&&zs(x,s):K(x)?x.includes(s)||x.push(s):h?(u[a]=[s],se(f,a)&&(f[a]=u[a])):(a.value=[s],n.k&&(u[n.k]=a.value))}else h?(u[a]=o,se(f,a)&&(f[a]=o)):d&&(a.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Oe(m,t)):m()}}}const nh=Symbol("_vte"),rh=n=>n.__isTeleport,Oe=vh;function ih(n){return sh(n)}function sh(n,e){const t=El();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=$e,insertStaticContent:m}=n,x=(g,v,C,A=null,P=null,F=null,G=void 0,U=null,D=!!v.dynamicChildren)=>{if(g===v)return;g&&!Tn(g,v)&&(A=Et(g),ne(g,P,F,!0),g=null),v.patchFlag===-2&&(D=!1,v.dynamicChildren=null);const{type:M,ref:V,shapeFlag:W}=v;switch(M){case Zr:p(g,v,C,A);break;case Kn:b(g,v,C,A);break;case fi:g==null&&_(v,C,A,G);break;case ct:Z(g,v,C,A,P,F,G,U,D);break;default:W&1?$(g,v,C,A,P,F,G,U,D):W&6?B(g,v,C,A,P,F,G,U,D):(W&64||W&128)&&M.process(g,v,C,A,P,F,G,U,D,_t)}V!=null&&P&&Zi(V,g&&g.ref,F,v||g,!v)},p=(g,v,C,A)=>{if(g==null)r(v.el=l(v.children),C,A);else{const P=v.el=g.el;v.children!==g.children&&c(P,v.children)}},b=(g,v,C,A)=>{g==null?r(v.el=a(v.children||""),C,A):v.el=g.el},_=(g,v,C,A)=>{[g.el,g.anchor]=m(g.children,v,C,A,g.el,g.anchor)},y=({el:g,anchor:v},C,A)=>{let P;for(;g&&g!==v;)P=h(g),r(g,C,A),g=P;r(v,C,A)},w=({el:g,anchor:v})=>{let C;for(;g&&g!==v;)C=h(g),i(g),g=C;i(v)},$=(g,v,C,A,P,F,G,U,D)=>{v.type==="svg"?G="svg":v.type==="math"&&(G="mathml"),g==null?R(v,C,A,P,F,G,U,D):O(g,v,P,F,G,U,D)},R=(g,v,C,A,P,F,G,U)=>{let D,M;const{props:V,shapeFlag:W,transition:Y,dirs:q}=g;if(D=g.el=o(g.type,F,V&&V.is,V),W&8?u(D,g.children):W&16&&k(g.children,D,null,A,P,ai(g,F),G,U),q&&Ut(g,null,A,"created"),N(D,g,g.scopeId,G,A),V){for(const me in V)me!=="value"&&!Bn(me)&&s(D,me,null,V[me],F,A);"value"in V&&s(D,"value",null,V.value,F),(M=V.onVnodeBeforeMount)&&Qe(M,A,g)}q&&Ut(g,null,A,"beforeMount");const te=oh(P,Y);te&&Y.beforeEnter(D),r(D,v,C),((M=V&&V.onVnodeMounted)||te||q)&&Oe(()=>{M&&Qe(M,A,g),te&&Y.enter(D),q&&Ut(g,null,A,"mounted")},P)},N=(g,v,C,A,P)=>{if(C&&d(g,C),A)for(let F=0;F<A.length;F++)d(g,A[F]);if(P){let F=P.subTree;if(v===F){const G=P.vnode;N(g,G,G.scopeId,G.slotScopeIds,P.parent)}}},k=(g,v,C,A,P,F,G,U,D=0)=>{for(let M=D;M<g.length;M++){const V=g[M]=U?Ct(g[M]):nt(g[M]);x(null,V,v,C,A,P,F,G,U)}},O=(g,v,C,A,P,F,G)=>{const U=v.el=g.el;let{patchFlag:D,dynamicChildren:M,dirs:V}=v;D|=g.patchFlag&16;const W=g.props||ge,Y=v.props||ge;let q;if(C&&Lt(C,!1),(q=Y.onVnodeBeforeUpdate)&&Qe(q,C,v,g),V&&Ut(v,g,C,"beforeUpdate"),C&&Lt(C,!0),(W.innerHTML&&Y.innerHTML==null||W.textContent&&Y.textContent==null)&&u(U,""),M?I(g.dynamicChildren,M,U,C,A,ai(v,P),F):G||H(g,v,U,null,C,A,ai(v,P),F,!1),D>0){if(D&16)ee(U,W,Y,C,P);else if(D&2&&W.class!==Y.class&&s(U,"class",null,Y.class,P),D&4&&s(U,"style",W.style,Y.style,P),D&8){const te=v.dynamicProps;for(let me=0;me<te.length;me++){const ue=te[me],be=W[ue],Ye=Y[ue];(Ye!==be||ue==="value")&&s(U,ue,be,Ye,P,C)}}D&1&&g.children!==v.children&&u(U,v.children)}else!G&&M==null&&ee(U,W,Y,C,P);((q=Y.onVnodeUpdated)||V)&&Oe(()=>{q&&Qe(q,C,v,g),V&&Ut(v,g,C,"updated")},A)},I=(g,v,C,A,P,F,G)=>{for(let U=0;U<v.length;U++){const D=g[U],M=v[U],V=D.el&&(D.type===ct||!Tn(D,M)||D.shapeFlag&70)?f(D.el):C;x(D,M,V,null,A,P,F,G,!0)}},ee=(g,v,C,A,P)=>{if(v!==C){if(v!==ge)for(const F in v)!Bn(F)&&!(F in C)&&s(g,F,v[F],null,P,A);for(const F in C){if(Bn(F))continue;const G=C[F],U=v[F];G!==U&&F!=="value"&&s(g,F,U,G,P,A)}"value"in C&&s(g,"value",v.value,C.value,P)}},Z=(g,v,C,A,P,F,G,U,D)=>{const M=v.el=g?g.el:l(""),V=v.anchor=g?g.anchor:l("");let{patchFlag:W,dynamicChildren:Y,slotScopeIds:q}=v;q&&(U=U?U.concat(q):q),g==null?(r(M,C,A),r(V,C,A),k(v.children||[],C,V,P,F,G,U,D)):W>0&&W&64&&Y&&g.dynamicChildren?(I(g.dynamicChildren,Y,C,P,F,G,U),(v.key!=null||P&&v===P.subTree)&&xa(g,v,!0)):H(g,v,C,V,P,F,G,U,D)},B=(g,v,C,A,P,F,G,U,D)=>{v.slotScopeIds=U,g==null?v.shapeFlag&512?P.ctx.activate(v,C,A,G,D):L(v,C,A,P,F,G,D):T(g,v,D)},L=(g,v,C,A,P,F,G)=>{const U=g.component=Mh(g,A,P);if(na(g)&&(U.ctx.renderer=_t),Ih(U,!1,G),U.asyncDep){if(P&&P.registerDep(U,z,G),!g.el){const D=U.subTree=Pt(Kn);b(null,D,v,C)}}else z(U,g,v,C,P,F,G)},T=(g,v,C)=>{const A=v.component=g.component;if(ph(g,v,C))if(A.asyncDep&&!A.asyncResolved){S(A,v,C);return}else A.next=v,Cf(A.update),A.effect.dirty=!0,A.update();else v.el=g.el,A.vnode=v},z=(g,v,C,A,P,F,G)=>{const U=()=>{if(g.isMounted){let{next:V,bu:W,u:Y,parent:q,vnode:te}=g;{const tn=va(g);if(tn){V&&(V.el=te.el,S(g,V,G)),tn.asyncDep.then(()=>{g.isUnmounted||U()});return}}let me=V,ue;Lt(g,!1),V?(V.el=te.el,S(g,V,G)):V=te,W&&oi(W),(ue=V.props&&V.props.onVnodeBeforeUpdate)&&Qe(ue,q,V,te),Lt(g,!0);const be=ci(g),Ye=g.subTree;g.subTree=be,x(Ye,be,f(Ye.el),Et(Ye),g,P,F),V.el=be.el,me===null&&gh(g,be.el),Y&&Oe(Y,P),(ue=V.props&&V.props.onVnodeUpdated)&&Oe(()=>Qe(ue,q,V,te),P)}else{let V;const{el:W,props:Y}=v,{bm:q,m:te,parent:me}=g,ue=Tr(v);if(Lt(g,!1),q&&oi(q),!ue&&(V=Y&&Y.onVnodeBeforeMount)&&Qe(V,me,v),Lt(g,!0),W&&Rt){const be=()=>{g.subTree=ci(g),Rt(W,g.subTree,g,P,null)};ue?v.type.__asyncLoader().then(()=>!g.isUnmounted&&be()):be()}else{const be=g.subTree=ci(g);x(null,be,C,A,g,P,F),v.el=be.el}if(te&&Oe(te,P),!ue&&(V=Y&&Y.onVnodeMounted)){const be=v;Oe(()=>Qe(V,me,be),P)}(v.shapeFlag&256||me&&Tr(me.vnode)&&me.vnode.shapeFlag&256)&&g.a&&Oe(g.a,P),g.isMounted=!0,v=C=A=null}},D=g.effect=new Us(U,$e,()=>Xs(M),g.scope),M=g.update=()=>{D.dirty&&D.run()};M.i=g,M.id=g.uid,Lt(g,!0),M()},S=(g,v,C)=>{v.component=g;const A=g.vnode.props;g.vnode=v,g.next=null,Zf(g,v.props,A,C),th(g,v.children,C),Mt(),yo(g),It()},H=(g,v,C,A,P,F,G,U,D=!1)=>{const M=g&&g.children,V=g?g.shapeFlag:0,W=v.children,{patchFlag:Y,shapeFlag:q}=v;if(Y>0){if(Y&128){X(M,W,C,A,P,F,G,U,D);return}else if(Y&256){E(M,W,C,A,P,F,G,U,D);return}}q&8?(V&16&&He(M,P,F),W!==M&&u(C,W)):V&16?q&16?X(M,W,C,A,P,F,G,U,D):He(M,P,F,!0):(V&8&&u(C,""),q&16&&k(W,C,A,P,F,G,U,D))},E=(g,v,C,A,P,F,G,U,D)=>{g=g||dn,v=v||dn;const M=g.length,V=v.length,W=Math.min(M,V);let Y;for(Y=0;Y<W;Y++){const q=v[Y]=D?Ct(v[Y]):nt(v[Y]);x(g[Y],q,C,null,P,F,G,U,D)}M>V?He(g,P,F,!0,!1,W):k(v,C,A,P,F,G,U,D,W)},X=(g,v,C,A,P,F,G,U,D)=>{let M=0;const V=v.length;let W=g.length-1,Y=V-1;for(;M<=W&&M<=Y;){const q=g[M],te=v[M]=D?Ct(v[M]):nt(v[M]);if(Tn(q,te))x(q,te,C,null,P,F,G,U,D);else break;M++}for(;M<=W&&M<=Y;){const q=g[W],te=v[Y]=D?Ct(v[Y]):nt(v[Y]);if(Tn(q,te))x(q,te,C,null,P,F,G,U,D);else break;W--,Y--}if(M>W){if(M<=Y){const q=Y+1,te=q<V?v[q].el:A;for(;M<=Y;)x(null,v[M]=D?Ct(v[M]):nt(v[M]),C,te,P,F,G,U,D),M++}}else if(M>Y)for(;M<=W;)ne(g[M],P,F,!0),M++;else{const q=M,te=M,me=new Map;for(M=te;M<=Y;M++){const Ge=v[M]=D?Ct(v[M]):nt(v[M]);Ge.key!=null&&me.set(Ge.key,M)}let ue,be=0;const Ye=Y-te+1;let tn=!1,lo=0;const wn=new Array(Ye);for(M=0;M<Ye;M++)wn[M]=0;for(M=q;M<=W;M++){const Ge=g[M];if(be>=Ye){ne(Ge,P,F,!0);continue}let Ze;if(Ge.key!=null)Ze=me.get(Ge.key);else for(ue=te;ue<=Y;ue++)if(wn[ue-te]===0&&Tn(Ge,v[ue])){Ze=ue;break}Ze===void 0?ne(Ge,P,F,!0):(wn[Ze-te]=M+1,Ze>=lo?lo=Ze:tn=!0,x(Ge,v[Ze],C,null,P,F,G,U,D),be++)}const ao=tn?lh(wn):dn;for(ue=ao.length-1,M=Ye-1;M>=0;M--){const Ge=te+M,Ze=v[Ge],uo=Ge+1<V?v[Ge+1].el:A;wn[M]===0?x(null,Ze,C,uo,P,F,G,U,D):tn&&(ue<0||M!==ao[ue]?Fe(Ze,C,uo,2):ue--)}}},Fe=(g,v,C,A,P=null)=>{const{el:F,type:G,transition:U,children:D,shapeFlag:M}=g;if(M&6){Fe(g.component.subTree,v,C,A);return}if(M&128){g.suspense.move(v,C,A);return}if(M&64){G.move(g,v,C,_t);return}if(G===ct){r(F,v,C);for(let W=0;W<D.length;W++)Fe(D[W],v,C,A);r(g.anchor,v,C);return}if(G===fi){y(g,v,C);return}if(A!==2&&M&1&&U)if(A===0)U.beforeEnter(F),r(F,v,C),Oe(()=>U.enter(F),P);else{const{leave:W,delayLeave:Y,afterLeave:q}=U,te=()=>r(F,v,C),me=()=>{W(F,()=>{te(),q&&q()})};Y?Y(F,te,me):me()}else r(F,v,C)},ne=(g,v,C,A=!1,P=!1)=>{const{type:F,props:G,ref:U,children:D,dynamicChildren:M,shapeFlag:V,patchFlag:W,dirs:Y,cacheIndex:q}=g;if(W===-2&&(P=!1),U!=null&&Zi(U,null,C,g,!0),q!=null&&(v.renderCache[q]=void 0),V&256){v.ctx.deactivate(g);return}const te=V&1&&Y,me=!Tr(g);let ue;if(me&&(ue=G&&G.onVnodeBeforeUnmount)&&Qe(ue,v,g),V&6)Ot(g.component,C,A);else{if(V&128){g.suspense.unmount(C,A);return}te&&Ut(g,null,v,"beforeUnmount"),V&64?g.type.remove(g,v,C,_t,A):M&&!M.hasOnce&&(F!==ct||W>0&&W&64)?He(M,v,C,!1,!0):(F===ct&&W&384||!P&&V&16)&&He(D,v,C),A&&Xe(g)}(me&&(ue=G&&G.onVnodeUnmounted)||te)&&Oe(()=>{ue&&Qe(ue,v,g),te&&Ut(g,null,v,"unmounted")},C)},Xe=g=>{const{type:v,el:C,anchor:A,transition:P}=g;if(v===ct){zt(C,A);return}if(v===fi){w(g);return}const F=()=>{i(C),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(g.shapeFlag&1&&P&&!P.persisted){const{leave:G,delayLeave:U}=P,D=()=>G(C,F);U?U(g.el,F,D):D()}else F()},zt=(g,v)=>{let C;for(;g!==v;)C=h(g),i(g),g=C;i(v)},Ot=(g,v,C)=>{const{bum:A,scope:P,update:F,subTree:G,um:U,m:D,a:M}=g;To(D),To(M),A&&oi(A),P.stop(),F&&(F.active=!1,ne(G,g,v,C)),U&&Oe(U,v),Oe(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},He=(g,v,C,A=!1,P=!1,F=0)=>{for(let G=F;G<g.length;G++)ne(g[G],v,C,A,P)},Et=g=>{if(g.shapeFlag&6)return Et(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const v=h(g.anchor||g.el),C=v&&v[nh];return C?h(C):v};let vt=!1;const yt=(g,v,C)=>{g==null?v._vnode&&ne(v._vnode,null,null,!0):x(v._vnode||null,g,v,null,null,null,C),vt||(vt=!0,yo(),Jl(),vt=!1),v._vnode=g},_t={p:x,um:ne,m:Fe,r:Xe,mt:L,mc:k,pc:H,pbc:I,n:Et,o:n};let Cn,Rt;return{render:yt,hydrate:Cn,createApp:jf(yt,Cn)}}function ai({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Lt({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function oh(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function xa(n,e,t=!1){const r=n.children,i=e.children;if(K(r)&&K(i))for(let s=0;s<r.length;s++){const o=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=Ct(i[s]),l.el=o.el),!t&&l.patchFlag!==-2&&xa(o,l)),l.type===Zr&&(l.el=o.el)}}function lh(n){const e=n.slice(),t=[0];let r,i,s,o,l;const a=n.length;for(r=0;r<a;r++){const c=n[r];if(c!==0){if(i=t[t.length-1],n[i]<c){e[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)l=s+o>>1,n[t[l]]<c?s=l+1:o=l;c<n[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function va(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:va(e)}function To(n){if(n)for(let e=0;e<n.length;e++)n[e].active=!1}const ah=Symbol.for("v-scx"),uh=()=>Pr(ah),hr={};function ui(n,e,t){return ya(n,e,t)}function ya(n,e,{immediate:t,deep:r,flush:i,once:s,onTrack:o,onTrigger:l}=ge){if(e&&s){const R=e;e=(...N)=>{R(...N),$()}}const a=Ie,c=R=>r===!0?R:Ht(R,r===!1?1:void 0);let u,f=!1,h=!1;if(De(n)?(u=()=>n.value,f=pn(n)):Gn(n)?(u=()=>c(n),f=!0):K(n)?(h=!0,f=n.some(R=>Gn(R)||pn(R)),u=()=>n.map(R=>{if(De(R))return R.value;if(Gn(R))return c(R);if(Q(R))return Tt(R,a,2)})):Q(n)?e?u=()=>Tt(n,a,2):u=()=>(d&&d(),qe(n,a,3,[m])):u=$e,e&&r){const R=u;u=()=>Ht(R())}let d,m=R=>{d=y.onStop=()=>{Tt(R,a,4),d=y.onStop=void 0}},x;if(Jr)if(m=$e,e?t&&qe(e,a,3,[u(),h?[]:void 0,m]):u(),i==="sync"){const R=uh();x=R.__watcherHandles||(R.__watcherHandles=[])}else return $e;let p=h?new Array(n.length).fill(hr):hr;const b=()=>{if(!(!y.active||!y.dirty))if(e){const R=y.run();(r||f||(h?R.some((N,k)=>At(N,p[k])):At(R,p)))&&(d&&d(),qe(e,a,3,[R,p===hr?void 0:h&&p[0]===hr?[]:p,m]),p=R)}else y.run()};b.allowRecurse=!!e;let _;i==="sync"?_=b:i==="post"?_=()=>Oe(b,a&&a.suspense):(b.pre=!0,a&&(b.id=a.uid),_=()=>Xs(b));const y=new Us(u,$e,_),w=Hc(),$=()=>{y.stop(),w&&zs(w.effects,y)};return e?t?b():p=y.run():i==="post"?Oe(y.run.bind(y),a&&a.suspense):y.run(),x&&x.push($),$}function ch(n,e,t){const r=this.proxy,i=Te(n)?n.includes(".")?_a(r,n):()=>r[n]:n.bind(r,r);let s;Q(e)?s=e:(s=e.handler,t=e);const o=or(this),l=ya(i,s.bind(r),t);return o(),l}function _a(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function Ht(n,e=1/0,t){if(e<=0||!ye(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,De(n))Ht(n.value,e,t);else if(K(n))for(let r=0;r<n.length;r++)Ht(n[r],e,t);else if(Ic(n)||Dn(n))n.forEach(r=>{Ht(r,e,t)});else if(Ec(n)){for(const r in n)Ht(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Ht(n[r],e,t)}return n}const fh=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Kt(e)}Modifiers`]||n[`${Jt(e)}Modifiers`];function hh(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||ge;let i=t;const s=e.startsWith("update:"),o=s&&fh(r,e.slice(7));o&&(o.trim&&(i=t.map(u=>Te(u)?u.trim():u)),o.number&&(i=t.map(Lc)));let l,a=r[l=si(e)]||r[l=si(Kt(e))];!a&&s&&(a=r[l=si(Jt(e))]),a&&qe(a,n,6,i);const c=r[l+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,qe(c,n,6,i)}}function ba(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},l=!1;if(!Q(n)){const a=c=>{const u=ba(c,e,!0);u&&(l=!0,ze(o,u))};!t&&e.mixins.length&&e.mixins.forEach(a),n.extends&&a(n.extends),n.mixins&&n.mixins.forEach(a)}return!s&&!l?(ye(n)&&r.set(n,null),null):(K(s)?s.forEach(a=>o[a]=null):ze(o,s),ye(n)&&r.set(n,o),o)}function Kr(n,e){return!n||!Vr(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(n,e[0].toLowerCase()+e.slice(1))||se(n,Jt(e))||se(n,e))}function ci(n){const{type:e,vnode:t,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:m,inheritAttrs:x}=n,p=Br(n);let b,_;try{if(t.shapeFlag&4){const w=i||r,$=w;b=nt(c.call($,w,u,f,d,h,m)),_=l}else{const w=e;b=nt(w.length>1?w(f,{attrs:l,slots:o,emit:a}):w(f,null)),_=e.props?l:dh(l)}}catch(w){$n.length=0,Wr(w,n,1),b=Pt(Kn)}let y=b;if(_&&x!==!1){const w=Object.keys(_),{shapeFlag:$}=y;w.length&&$&7&&(s&&w.some(Is)&&(_=mh(_,s)),y=gn(y,_,!1,!0))}return t.dirs&&(y=gn(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),b=y,Br(p),b}const dh=n=>{let e;for(const t in n)(t==="class"||t==="style"||Vr(t))&&((e||(e={}))[t]=n[t]);return e},mh=(n,e)=>{const t={};for(const r in n)(!Is(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function ph(n,e,t){const{props:r,children:i,component:s}=n,{props:o,children:l,patchFlag:a}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&a>=0){if(a&1024)return!0;if(a&16)return r?Po(r,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!Kr(c,h))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Po(r,o,c):!0:!!o;return!1}function Po(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==n[s]&&!Kr(t,s))return!0}return!1}function gh({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const xh=n=>n.__isSuspense;function vh(n,e){e&&e.pendingBranch?K(n)?e.effects.push(...n):e.effects.push(n):wf(n)}const ct=Symbol.for("v-fgt"),Zr=Symbol.for("v-txt"),Kn=Symbol.for("v-cmt"),fi=Symbol.for("v-stc"),$n=[];let Ne=null;function Sa(n=!1){$n.push(Ne=n?null:[])}function yh(){$n.pop(),Ne=$n[$n.length-1]||null}let Zn=1;function Ao(n){Zn+=n,n<0&&Ne&&(Ne.hasOnce=!0)}function Ca(n){return n.dynamicChildren=Zn>0?Ne||dn:null,yh(),Zn>0&&Ne&&Ne.push(n),n}function _h(n,e,t,r,i,s){return Ca(Qr(n,e,t,r,i,s,!0))}function bh(n,e,t,r,i){return Ca(Pt(n,e,t,r,i,!0))}function Sh(n){return n?n.__v_isVNode===!0:!1}function Tn(n,e){return n.type===e.type&&n.key===e.key}const wa=({key:n})=>n??null,Ar=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Te(n)||De(n)||Q(n)?{i:it,r:n,k:e,f:!!t}:n:null);function Qr(n,e=null,t=null,r=0,i=null,s=n===ct?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&wa(e),ref:e&&Ar(e),scopeId:jr,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:it};return l?(Ws(a,t),s&128&&n.normalize(a)):t&&(a.shapeFlag|=Te(t)?8:16),Zn>0&&!o&&Ne&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&Ne.push(a),a}const Pt=Ch;function Ch(n,e=null,t=null,r=0,i=null,s=!1){if((!n||n===kf)&&(n=Kn),Sh(n)){const l=gn(n,e,!0);return t&&Ws(l,t),Zn>0&&!s&&Ne&&(l.shapeFlag&6?Ne[Ne.indexOf(n)]=l:Ne.push(l)),l.patchFlag=-2,l}if(Rh(n)&&(n=n.__vccOpts),e){e=wh(e);let{class:l,style:a}=e;l&&!Te(l)&&(e.class=Rs(l)),ye(a)&&(Wl(a)&&!K(a)&&(a=ze({},a)),e.style=Es(a))}const o=Te(n)?1:xh(n)?128:rh(n)?64:ye(n)?4:Q(n)?2:0;return Qr(n,e,t,r,i,o,s,!0)}function wh(n){return n?Wl(n)||ca(n)?ze({},n):n:null}function gn(n,e,t=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:l,transition:a}=n,c=e?Ph(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&wa(c),ref:e&&e.ref?t&&s?K(s)?s.concat(Ar(e)):[s,Ar(e)]:Ar(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ct?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:a,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&gn(n.ssContent),ssFallback:n.ssFallback&&gn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return a&&r&&ta(u,a.clone(u)),u}function Th(n=" ",e=0){return Pt(Zr,null,n,e)}function nt(n){return n==null||typeof n=="boolean"?Pt(Kn):K(n)?Pt(ct,null,n.slice()):typeof n=="object"?Ct(n):Pt(Zr,null,String(n))}function Ct(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:gn(n)}function Ws(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(K(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Ws(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!ca(e)?e._ctx=it:i===3&&it&&(it.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:it},t=32):(e=String(e),r&64?(t=16,e=[Th(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ph(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Rs([e.class,r.class]));else if(i==="style")e.style=Es([e.style,r.style]);else if(Vr(i)){const s=e[i],o=r[i];o&&s!==o&&!(K(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Qe(n,e,t,r=null){qe(n,e,7,[t,r])}const Ah=la();let Fh=0;function Mh(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||Ah,s={uid:Fh++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ha(r,i),emitsOptions:ba(r,i),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:r.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=hh.bind(null,s),n.ce&&n.ce(s),s}let Ie=null,kr,Qi;{const n=El(),e=(t,r)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};kr=e("__VUE_INSTANCE_SETTERS__",t=>Ie=t),Qi=e("__VUE_SSR_SETTERS__",t=>Jr=t)}const or=n=>{const e=Ie;return kr(n),n.scope.on(),()=>{n.scope.off(),kr(e)}},Fo=()=>{Ie&&Ie.scope.off(),kr(null)};function Ta(n){return n.vnode.shapeFlag&4}let Jr=!1;function Ih(n,e=!1,t=!1){e&&Qi(e);const{props:r,children:i}=n.vnode,s=Ta(n);Kf(n,r,s,e),eh(n,i,t);const o=s?zh(n,e):void 0;return e&&Qi(!1),o}function zh(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Nf);const{setup:r}=t;if(r){const i=n.setupContext=r.length>1?Eh(n):null,s=or(n);Mt();const o=Tt(r,n,0,[n.props,i]);if(It(),s(),Il(o)){if(o.then(Fo,Fo),e)return o.then(l=>{Mo(n,l,e)}).catch(l=>{Wr(l,n,0)});n.asyncDep=o}else Mo(n,o,e)}else Pa(n,e)}function Mo(n,e,t){Q(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ye(e)&&(n.setupState=Kl(e)),Pa(n,t)}let Io;function Pa(n,e,t){const r=n.type;if(!n.render){if(!e&&Io&&!r.render){const i=r.template||Hs(n).template;if(i){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:l,compilerOptions:a}=r,c=ze(ze({isCustomElement:s,delimiters:l},o),a);r.render=Io(i,c)}}n.render=r.render||$e}{const i=or(n);Mt();try{$f(n)}finally{It(),i()}}}const Oh={get(n,e){return Le(n,"get",""),n[e]}};function Eh(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Oh),slots:n.slots,emit:n.emit,expose:e}}function js(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Kl(df(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in kn)return kn[t](n)},has(e,t){return t in e||t in kn}})):n.proxy}function Rh(n){return Q(n)&&"__vccOpts"in n}const Uh=(n,e)=>mf(n,e,Jr),Lh="3.4.36";/**
* @vue/runtime-dom v3.4.36
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Dh="http://www.w3.org/2000/svg",Bh="http://www.w3.org/1998/Math/MathML",ut=typeof document<"u"?document:null,zo=ut&&ut.createElement("template"),Gh={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e==="svg"?ut.createElementNS(Dh,n):e==="mathml"?ut.createElementNS(Bh,n):t?ut.createElement(n,{is:t}):ut.createElement(n);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>ut.createTextNode(n),createComment:n=>ut.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ut.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{zo.innerHTML=r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n;const l=zo.content;if(r==="svg"||r==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},kh=Symbol("_vtc");function Nh(n,e,t){const r=n[kh];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Oo=Symbol("_vod"),$h=Symbol("_vsh"),Vh=Symbol(""),Xh=/(^|;)\s*display\s*:/;function Hh(n,e,t){const r=n.style,i=Te(t);let s=!1;if(t&&!i){if(e)if(Te(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&Fr(r,l,"")}else for(const o in e)t[o]==null&&Fr(r,o,"");for(const o in t)o==="display"&&(s=!0),Fr(r,o,t[o])}else if(i){if(e!==t){const o=r[Vh];o&&(t+=";"+o),r.cssText=t,s=Xh.test(t)}}else e&&n.removeAttribute("style");Oo in n&&(n[Oo]=s?r.display:"",n[$h]&&(r.display="none"))}const Eo=/\s*!important$/;function Fr(n,e,t){if(K(t))t.forEach(r=>Fr(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Yh(n,e);Eo.test(t)?n.setProperty(Jt(r),t.replace(Eo,""),"important"):n[r]=t}}const Ro=["Webkit","Moz","ms"],hi={};function Yh(n,e){const t=hi[e];if(t)return t;let r=Kt(e);if(r!=="filter"&&r in n)return hi[e]=r;r=zl(r);for(let i=0;i<Ro.length;i++){const s=Ro[i]+r;if(s in n)return hi[e]=s}return e}const Uo="http://www.w3.org/1999/xlink";function Lo(n,e,t,r,i,s=$c(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Uo,e.slice(6,e.length)):n.setAttributeNS(Uo,e,t):t==null||s&&!Rl(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Sn(t)?String(t):t)}function Wh(n,e,t,r){if(e==="innerHTML"||e==="textContent"){if(t==null)return;n[e]=t;return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Rl(t):t==null&&o==="string"?(t="",s=!0):o==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(e)}function jh(n,e,t,r){n.addEventListener(e,t,r)}function qh(n,e,t,r){n.removeEventListener(e,t,r)}const Do=Symbol("_vei");function Kh(n,e,t,r,i=null){const s=n[Do]||(n[Do]={}),o=s[e];if(r&&o)o.value=r;else{const[l,a]=Zh(e);if(r){const c=s[e]=ed(r,i);jh(n,l,c,a)}else o&&(qh(n,l,o,a),s[e]=void 0)}}const Bo=/(?:Once|Passive|Capture)$/;function Zh(n){let e;if(Bo.test(n)){e={};let r;for(;r=n.match(Bo);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Jt(n.slice(2)),e]}let di=0;const Qh=Promise.resolve(),Jh=()=>di||(Qh.then(()=>di=0),di=Date.now());function ed(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;qe(td(r,t.value),e,5,[r])};return t.value=n,t.attached=Jh(),t}function td(n,e){if(K(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Go=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,nd=(n,e,t,r,i,s)=>{const o=i==="svg";e==="class"?Nh(n,r,o):e==="style"?Hh(n,t,r):Vr(e)?Is(e)||Kh(n,e,t,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rd(n,e,r,o))?(Wh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Lo(n,e,r,o,s,e!=="value")):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Lo(n,e,r,o))};function rd(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Go(e)&&Q(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Go(e)&&Te(t)?!1:e in n}const id=ze({patchProp:nd},Gh);let ko;function sd(){return ko||(ko=ih(id))}const od=(...n)=>{const e=sd().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=ad(r);if(!i)return;const s=e._component;!Q(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,ld(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function ld(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ad(n){return Te(n)?document.querySelector(n):n}const ud="modulepreload",cd=function(n){return"/zeon-start/"+n},No={},Nr=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(t.map(l=>{if(l=cd(l),l in No)return;No[l]=!0;const a=l.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":ud,a||(u.as="script",u.crossOrigin=""),u.href=l,o&&u.setAttribute("nonce",o),document.head.appendChild(u),a)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var he=(n=>(n.Application="application",n.WebGLPipes="webgl-pipes",n.WebGLPipesAdaptor="webgl-pipes-adaptor",n.WebGLSystem="webgl-system",n.WebGPUPipes="webgpu-pipes",n.WebGPUPipesAdaptor="webgpu-pipes-adaptor",n.WebGPUSystem="webgpu-system",n.CanvasSystem="canvas-system",n.CanvasPipesAdaptor="canvas-pipes-adaptor",n.CanvasPipes="canvas-pipes",n.Asset="asset",n.LoadParser="load-parser",n.ResolveParser="resolve-parser",n.CacheParser="cache-parser",n.DetectionParser="detection-parser",n.MaskEffect="mask-effect",n.BlendMode="blend-mode",n.TextureSource="texture-source",n.Environment="environment",n.ShapeBuilder="shape-builder",n))(he||{});const Ji=n=>{if(typeof n=="function"||typeof n=="object"&&n.extension){if(!n.extension)throw new Error("Extension class must have an extension object");n={...typeof n.extension!="object"?{type:n.extension}:n.extension,ref:n}}if(typeof n=="object")n={...n};else throw new Error("Invalid extension type");return typeof n.type=="string"&&(n.type=[n.type]),n},dr=(n,e)=>Ji(n).priority??e,ot={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...n){return n.map(Ji).forEach(e=>{e.type.forEach(t=>{var r,i;return(i=(r=this._removeHandlers)[t])==null?void 0:i.call(r,e)})}),this},add(...n){return n.map(Ji).forEach(e=>{e.type.forEach(t=>{var s,o;const r=this._addHandlers,i=this._queue;r[t]?(o=r[t])==null||o.call(r,e):(i[t]=i[t]||[],(s=i[t])==null||s.push(e))})}),this},handle(n,e,t){var o;const r=this._addHandlers,i=this._removeHandlers;if(r[n]||i[n])throw new Error(`Extension type ${n} already has a handler`);r[n]=e,i[n]=t;const s=this._queue;return s[n]&&((o=s[n])==null||o.forEach(l=>e(l)),delete s[n]),this},handleByMap(n,e){return this.handle(n,t=>{t.name&&(e[t.name]=t.ref)},t=>{t.name&&delete e[t.name]})},handleByNamedList(n,e,t=-1){return this.handle(n,r=>{e.findIndex(s=>s.name===r.name)>=0||(e.push({name:r.name,value:r.ref}),e.sort((s,o)=>dr(o.value,t)-dr(s.value,t)))},r=>{const i=e.findIndex(s=>s.name===r.name);i!==-1&&e.splice(i,1)})},handleByList(n,e,t=-1){return this.handle(n,r=>{e.includes(r.ref)||(e.push(r.ref),e.sort((i,s)=>dr(s,t)-dr(i,t)))},r=>{const i=e.indexOf(r.ref);i!==-1&&e.splice(i,1)})}},fd={extension:{type:he.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await Nr(()=>import("./browserAll-0-MME_8n.js"),__vite__mapDeps([0,1,2,3,4]))}},hd={extension:{type:he.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await Nr(()=>import("./webworkerAll-BcsV3zlc.js"),__vite__mapDeps([1,2,3,4]))}};class Ee{constructor(e,t,r){this._x=t||0,this._y=r||0,this._observer=e}clone(e){return new Ee(e??this._observer,this._x,this._y)}set(e=0,t=e){return(this._x!==e||this._y!==t)&&(this._x=e,this._y=t,this._observer._onUpdate(this)),this}copyFrom(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this._observer._onUpdate(this)),this}copyTo(e){return e.set(this._x,this._y),e}equals(e){return e.x===this._x&&e.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(e){this._x!==e&&(this._x=e,this._observer._onUpdate(this))}get y(){return this._y}set y(e){this._y!==e&&(this._y=e,this._observer._onUpdate(this))}}function qs(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Aa={exports:{}};(function(n){var e=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function i(a,c,u){this.fn=a,this.context=c,this.once=u||!1}function s(a,c,u,f,h){if(typeof u!="function")throw new TypeError("The listener must be a function");var d=new i(u,f||a,h),m=t?t+c:c;return a._events[m]?a._events[m].fn?a._events[m]=[a._events[m],d]:a._events[m].push(d):(a._events[m]=d,a._eventsCount++),a}function o(a,c){--a._eventsCount===0?a._events=new r:delete a._events[c]}function l(){this._events=new r,this._eventsCount=0}l.prototype.eventNames=function(){var c=[],u,f;if(this._eventsCount===0)return c;for(f in u=this._events)e.call(u,f)&&c.push(t?f.slice(1):f);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},l.prototype.listeners=function(c){var u=t?t+c:c,f=this._events[u];if(!f)return[];if(f.fn)return[f.fn];for(var h=0,d=f.length,m=new Array(d);h<d;h++)m[h]=f[h].fn;return m},l.prototype.listenerCount=function(c){var u=t?t+c:c,f=this._events[u];return f?f.fn?1:f.length:0},l.prototype.emit=function(c,u,f,h,d,m){var x=t?t+c:c;if(!this._events[x])return!1;var p=this._events[x],b=arguments.length,_,y;if(p.fn){switch(p.once&&this.removeListener(c,p.fn,void 0,!0),b){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,u),!0;case 3:return p.fn.call(p.context,u,f),!0;case 4:return p.fn.call(p.context,u,f,h),!0;case 5:return p.fn.call(p.context,u,f,h,d),!0;case 6:return p.fn.call(p.context,u,f,h,d,m),!0}for(y=1,_=new Array(b-1);y<b;y++)_[y-1]=arguments[y];p.fn.apply(p.context,_)}else{var w=p.length,$;for(y=0;y<w;y++)switch(p[y].once&&this.removeListener(c,p[y].fn,void 0,!0),b){case 1:p[y].fn.call(p[y].context);break;case 2:p[y].fn.call(p[y].context,u);break;case 3:p[y].fn.call(p[y].context,u,f);break;case 4:p[y].fn.call(p[y].context,u,f,h);break;default:if(!_)for($=1,_=new Array(b-1);$<b;$++)_[$-1]=arguments[$];p[y].fn.apply(p[y].context,_)}}return!0},l.prototype.on=function(c,u,f){return s(this,c,u,f,!1)},l.prototype.once=function(c,u,f){return s(this,c,u,f,!0)},l.prototype.removeListener=function(c,u,f,h){var d=t?t+c:c;if(!this._events[d])return this;if(!u)return o(this,d),this;var m=this._events[d];if(m.fn)m.fn===u&&(!h||m.once)&&(!f||m.context===f)&&o(this,d);else{for(var x=0,p=[],b=m.length;x<b;x++)(m[x].fn!==u||h&&!m[x].once||f&&m[x].context!==f)&&p.push(m[x]);p.length?this._events[d]=p.length===1?p[0]:p:o(this,d)}return this},l.prototype.removeAllListeners=function(c){var u;return c?(u=t?t+c:c,this._events[u]&&o(this,u)):(this._events=new r,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=t,l.EventEmitter=l,n.exports=l})(Aa);var dd=Aa.exports;const xt=qs(dd),md=Math.PI*2,pd=180/Math.PI,xn=Math.PI/180;class Ae{constructor(e=0,t=0){this.x=0,this.y=0,this.x=e,this.y=t}clone(){return new Ae(this.x,this.y)}copyFrom(e){return this.set(e.x,e.y),this}copyTo(e){return e.set(this.x,this.y),e}equals(e){return e.x===this.x&&e.y===this.y}set(e=0,t=e){return this.x=e,this.y=t,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return mi.x=0,mi.y=0,mi}}const mi=new Ae;class fe{constructor(e=1,t=0,r=0,i=1,s=0,o=0){this.array=null,this.a=e,this.b=t,this.c=r,this.d=i,this.tx=s,this.ty=o}fromArray(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]}set(e,t,r,i,s,o){return this.a=e,this.b=t,this.c=r,this.d=i,this.tx=s,this.ty=o,this}toArray(e,t){this.array||(this.array=new Float32Array(9));const r=t||this.array;return e?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(e,t){t=t||new Ae;const r=e.x,i=e.y;return t.x=this.a*r+this.c*i+this.tx,t.y=this.b*r+this.d*i+this.ty,t}applyInverse(e,t){t=t||new Ae;const r=this.a,i=this.b,s=this.c,o=this.d,l=this.tx,a=this.ty,c=1/(r*o+s*-i),u=e.x,f=e.y;return t.x=o*c*u+-s*c*f+(a*s-l*o)*c,t.y=r*c*f+-i*c*u+(-a*r+l*i)*c,t}translate(e,t){return this.tx+=e,this.ty+=t,this}scale(e,t){return this.a*=e,this.d*=t,this.c*=e,this.b*=t,this.tx*=e,this.ty*=t,this}rotate(e){const t=Math.cos(e),r=Math.sin(e),i=this.a,s=this.c,o=this.tx;return this.a=i*t-this.b*r,this.b=i*r+this.b*t,this.c=s*t-this.d*r,this.d=s*r+this.d*t,this.tx=o*t-this.ty*r,this.ty=o*r+this.ty*t,this}append(e){const t=this.a,r=this.b,i=this.c,s=this.d;return this.a=e.a*t+e.b*i,this.b=e.a*r+e.b*s,this.c=e.c*t+e.d*i,this.d=e.c*r+e.d*s,this.tx=e.tx*t+e.ty*i+this.tx,this.ty=e.tx*r+e.ty*s+this.ty,this}appendFrom(e,t){const r=e.a,i=e.b,s=e.c,o=e.d,l=e.tx,a=e.ty,c=t.a,u=t.b,f=t.c,h=t.d;return this.a=r*c+i*f,this.b=r*u+i*h,this.c=s*c+o*f,this.d=s*u+o*h,this.tx=l*c+a*f+t.tx,this.ty=l*u+a*h+t.ty,this}setTransform(e,t,r,i,s,o,l,a,c){return this.a=Math.cos(l+c)*s,this.b=Math.sin(l+c)*s,this.c=-Math.sin(l-a)*o,this.d=Math.cos(l-a)*o,this.tx=e-(r*this.a+i*this.c),this.ty=t-(r*this.b+i*this.d),this}prepend(e){const t=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){const r=this.a,i=this.c;this.a=r*e.a+this.b*e.c,this.b=r*e.b+this.b*e.d,this.c=i*e.a+this.d*e.c,this.d=i*e.b+this.d*e.d}return this.tx=t*e.a+this.ty*e.c+e.tx,this.ty=t*e.b+this.ty*e.d+e.ty,this}decompose(e){const t=this.a,r=this.b,i=this.c,s=this.d,o=e.pivot,l=-Math.atan2(-i,s),a=Math.atan2(r,t),c=Math.abs(l+a);return c<1e-5||Math.abs(md-c)<1e-5?(e.rotation=a,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=l,e.skew.y=a),e.scale.x=Math.sqrt(t*t+r*r),e.scale.y=Math.sqrt(i*i+s*s),e.position.x=this.tx+(o.x*t+o.y*i),e.position.y=this.ty+(o.x*r+o.y*s),e}invert(){const e=this.a,t=this.b,r=this.c,i=this.d,s=this.tx,o=e*i-t*r;return this.a=i/o,this.b=-t/o,this.c=-r/o,this.d=e/o,this.tx=(r*this.ty-i*s)/o,this.ty=-(e*this.ty-t*s)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const e=new fe;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyTo(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyFrom(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this}equals(e){return e.a===this.a&&e.b===this.b&&e.c===this.c&&e.d===this.d&&e.tx===this.tx&&e.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return xd.identity()}static get shared(){return gd.identity()}}const gd=new fe,xd=new fe,Bt=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],Gt=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],kt=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Nt=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],es=[],Fa=[],mr=Math.sign;function vd(){for(let n=0;n<16;n++){const e=[];es.push(e);for(let t=0;t<16;t++){const r=mr(Bt[n]*Bt[t]+kt[n]*Gt[t]),i=mr(Gt[n]*Bt[t]+Nt[n]*Gt[t]),s=mr(Bt[n]*kt[t]+kt[n]*Nt[t]),o=mr(Gt[n]*kt[t]+Nt[n]*Nt[t]);for(let l=0;l<16;l++)if(Bt[l]===r&&Gt[l]===i&&kt[l]===s&&Nt[l]===o){e.push(l);break}}}for(let n=0;n<16;n++){const e=new fe;e.set(Bt[n],Gt[n],kt[n],Nt[n],0,0),Fa.push(e)}}vd();const pe={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:n=>Bt[n],uY:n=>Gt[n],vX:n=>kt[n],vY:n=>Nt[n],inv:n=>n&8?n&15:-n&7,add:(n,e)=>es[n][e],sub:(n,e)=>es[n][pe.inv(e)],rotate180:n=>n^4,isVertical:n=>(n&3)===2,byDirection:(n,e)=>Math.abs(n)*2<=Math.abs(e)?e>=0?pe.S:pe.N:Math.abs(e)*2<=Math.abs(n)?n>0?pe.E:pe.W:e>0?n>0?pe.SE:pe.SW:n>0?pe.NE:pe.NW,matrixAppendRotationInv:(n,e,t=0,r=0)=>{const i=Fa[pe.inv(e)];i.tx=t,i.ty=r,n.append(i)}},pr=[new Ae,new Ae,new Ae,new Ae];class we{constructor(e=0,t=0,r=0,i=0){this.type="rectangle",this.x=Number(e),this.y=Number(t),this.width=Number(r),this.height=Number(i)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new we(0,0,0,0)}clone(){return new we(this.x,this.y,this.width,this.height)}copyFromBounds(e){return this.x=e.minX,this.y=e.minY,this.width=e.maxX-e.minX,this.height=e.maxY-e.minY,this}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.copyFrom(this),e}contains(e,t){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&t>=this.y&&t<this.y+this.height}strokeContains(e,t,r){const{width:i,height:s}=this;if(i<=0||s<=0)return!1;const o=this.x,l=this.y,a=o-r/2,c=o+i+r/2,u=l-r/2,f=l+s+r/2,h=o+r/2,d=o+i-r/2,m=l+r/2,x=l+s-r/2;return e>=a&&e<=c&&t>=u&&t<=f&&!(e>h&&e<d&&t>m&&t<x)}intersects(e,t){if(!t){const k=this.x<e.x?e.x:this.x;if((this.right>e.right?e.right:this.right)<=k)return!1;const I=this.y<e.y?e.y:this.y;return(this.bottom>e.bottom?e.bottom:this.bottom)>I}const r=this.left,i=this.right,s=this.top,o=this.bottom;if(i<=r||o<=s)return!1;const l=pr[0].set(e.left,e.top),a=pr[1].set(e.left,e.bottom),c=pr[2].set(e.right,e.top),u=pr[3].set(e.right,e.bottom);if(c.x<=l.x||a.y<=l.y)return!1;const f=Math.sign(t.a*t.d-t.b*t.c);if(f===0||(t.apply(l,l),t.apply(a,a),t.apply(c,c),t.apply(u,u),Math.max(l.x,a.x,c.x,u.x)<=r||Math.min(l.x,a.x,c.x,u.x)>=i||Math.max(l.y,a.y,c.y,u.y)<=s||Math.min(l.y,a.y,c.y,u.y)>=o))return!1;const h=f*(a.y-l.y),d=f*(l.x-a.x),m=h*r+d*s,x=h*i+d*s,p=h*r+d*o,b=h*i+d*o;if(Math.max(m,x,p,b)<=h*l.x+d*l.y||Math.min(m,x,p,b)>=h*u.x+d*u.y)return!1;const _=f*(l.y-c.y),y=f*(c.x-l.x),w=_*r+y*s,$=_*i+y*s,R=_*r+y*o,N=_*i+y*o;return!(Math.max(w,$,R,N)<=_*l.x+y*l.y||Math.min(w,$,R,N)>=_*u.x+y*u.y)}pad(e=0,t=e){return this.x-=e,this.y-=t,this.width+=e*2,this.height+=t*2,this}fit(e){const t=Math.max(this.x,e.x),r=Math.min(this.x+this.width,e.x+e.width),i=Math.max(this.y,e.y),s=Math.min(this.y+this.height,e.y+e.height);return this.x=t,this.width=Math.max(r-t,0),this.y=i,this.height=Math.max(s-i,0),this}ceil(e=1,t=.001){const r=Math.ceil((this.x+this.width-t)*e)/e,i=Math.ceil((this.y+this.height-t)*e)/e;return this.x=Math.floor((this.x+t)*e)/e,this.y=Math.floor((this.y+t)*e)/e,this.width=r-this.x,this.height=i-this.y,this}enlarge(e){const t=Math.min(this.x,e.x),r=Math.max(this.x+this.width,e.x+e.width),i=Math.min(this.y,e.y),s=Math.max(this.y+this.height,e.y+e.height);return this.x=t,this.width=r-t,this.y=i,this.height=s-i,this}getBounds(e){return e=e||new we,e.copyFrom(this),e}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const pi={default:-1};function _e(n="default"){return pi[n]===void 0&&(pi[n]=-1),++pi[n]}const $o={},ve="8.0.0";function j(n,e,t=3){if($o[e])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${n}`):(r=r.split(`
`).splice(t).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${e}
Deprecated since v${n}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${n}`),console.warn(r))),$o[e]=!0}const Ma=()=>{};function Vo(n){return n+=n===0?1:0,--n,n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n+1}function Xo(n){return!(n&n-1)&&!!n}function yd(n){const e={};for(const t in n)n[t]!==void 0&&(e[t]=n[t]);return e}const Ho=Object.create(null);function _d(n){const e=Ho[n];return e===void 0&&(Ho[n]=_e("resource")),e}const Ia=class za extends xt{constructor(e={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,e={...za.defaultOptions,...e},this.addressMode=e.addressMode,this.addressModeU=e.addressModeU??this.addressModeU,this.addressModeV=e.addressModeV??this.addressModeV,this.addressModeW=e.addressModeW??this.addressModeW,this.scaleMode=e.scaleMode,this.magFilter=e.magFilter??this.magFilter,this.minFilter=e.minFilter??this.minFilter,this.mipmapFilter=e.mipmapFilter??this.mipmapFilter,this.lodMinClamp=e.lodMinClamp,this.lodMaxClamp=e.lodMaxClamp,this.compare=e.compare,this.maxAnisotropy=e.maxAnisotropy??1}set addressMode(e){this.addressModeU=e,this.addressModeV=e,this.addressModeW=e}get addressMode(){return this.addressModeU}set wrapMode(e){j(ve,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=e}get wrapMode(){return this.addressMode}set scaleMode(e){this.magFilter=e,this.minFilter=e,this.mipmapFilter=e}get scaleMode(){return this.magFilter}set maxAnisotropy(e){this._maxAnisotropy=Math.min(e,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const e=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=_d(e),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};Ia.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let bd=Ia;const Oa=class Ea extends xt{constructor(e={}){super(),this.options=e,this.uid=_e("textureSource"),this._resourceType="textureSource",this._resourceId=_e("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,e={...Ea.defaultOptions,...e},this.label=e.label??"",this.resource=e.resource,this.autoGarbageCollect=e.autoGarbageCollect,this._resolution=e.resolution,e.width?this.pixelWidth=e.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,e.height?this.pixelHeight=e.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=e.format,this.dimension=e.dimensions,this.mipLevelCount=e.mipLevelCount,this.autoGenerateMipmaps=e.autoGenerateMipmaps,this.sampleCount=e.sampleCount,this.antialias=e.antialias,this.alphaMode=e.alphaMode,this.style=new bd(yd(e)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(e){var t,r;this.style!==e&&((t=this._style)==null||t.off("change",this._onStyleChange,this),this._style=e,(r=this._style)==null||r.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(e){this._style.addressMode=e}get repeatMode(){return this._style.addressMode}set repeatMode(e){this._style.addressMode=e}get magFilter(){return this._style.magFilter}set magFilter(e){this._style.magFilter=e}get minFilter(){return this._style.minFilter}set minFilter(e){this._style.minFilter=e}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(e){this._style.mipmapFilter=e}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(e){this._style.lodMinClamp=e}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(e){this._style.lodMaxClamp=e}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const e=this._resolution;if(this.resize(this.resourceWidth/e,this.resourceHeight/e))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=_e("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:e}=this;return e.naturalWidth||e.videoWidth||e.displayWidth||e.width}get resourceHeight(){const{resource:e}=this;return e.naturalHeight||e.videoHeight||e.displayHeight||e.height}get resolution(){return this._resolution}set resolution(e){this._resolution!==e&&(this._resolution=e,this.width=this.pixelWidth/e,this.height=this.pixelHeight/e)}resize(e,t,r){r=r||this._resolution,e=e||this.width,t=t||this.height;const i=Math.round(e*r),s=Math.round(t*r);return this.width=i/r,this.height=s/r,this._resolution=r,this.pixelWidth===i&&this.pixelHeight===s?!1:(this._refreshPOT(),this.pixelWidth=i,this.pixelHeight=s,this.emit("resize",this),this._resourceId=_e("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(e){this._style.wrapMode=e}get wrapMode(){return this._style.wrapMode}set scaleMode(e){this._style.scaleMode=e}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Xo(this.pixelWidth)&&Xo(this.pixelHeight)}static test(e){throw new Error("Unimplemented")}};Oa.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let Ke=Oa;class Ks extends Ke{constructor(e){const t=e.resource||new Float32Array(e.width*e.height*4);let r=e.format;r||(t instanceof Float32Array?r="rgba32float":t instanceof Int32Array||t instanceof Uint32Array?r="rgba32uint":t instanceof Int16Array||t instanceof Uint16Array?r="rgba16uint":(t instanceof Int8Array,r="bgra8unorm")),super({...e,resource:t,format:r}),this.uploadMethodId="buffer"}static test(e){return e instanceof Int8Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array}}Ks.extension=he.TextureSource;const Yo=new fe;class Sd{constructor(e,t){this.mapCoord=new fe,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof t>"u"?this.clampMargin=e.width<10?0:.5:this.clampMargin=t,this.isSimple=!1,this.texture=e}get texture(){return this._texture}set texture(e){var t;this.texture!==e&&((t=this._texture)==null||t.removeListener("update",this.update,this),this._texture=e,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(e,t){t===void 0&&(t=e);const r=this.mapCoord;for(let i=0;i<e.length;i+=2){const s=e[i],o=e[i+1];t[i]=s*r.a+o*r.c+r.tx,t[i+1]=s*r.b+o*r.d+r.ty}return t}update(){const e=this._texture;this._updateID++;const t=e.uvs;this.mapCoord.set(t.x1-t.x0,t.y1-t.y0,t.x3-t.x0,t.y3-t.y0,t.x0,t.y0);const r=e.orig,i=e.trim;i&&(Yo.set(r.width/i.width,0,0,r.height/i.height,-i.x/i.width,-i.y/i.height),this.mapCoord.append(Yo));const s=e.source,o=this.uClampFrame,l=this.clampMargin/s._resolution,a=this.clampOffset/s._resolution;return o[0]=(e.frame.x+l+a)/s.width,o[1]=(e.frame.y+l+a)/s.height,o[2]=(e.frame.x+e.frame.width-l+a)/s.width,o[3]=(e.frame.y+e.frame.height-l+a)/s.height,this.uClampOffset[0]=this.clampOffset/s.pixelWidth,this.uClampOffset[1]=this.clampOffset/s.pixelHeight,this.isSimple=e.frame.width===s.width&&e.frame.height===s.height&&e.rotate===0,!0}}class oe extends xt{constructor({source:e,label:t,frame:r,orig:i,trim:s,defaultAnchor:o,defaultBorders:l,rotate:a,dynamic:c}={}){if(super(),this.uid=_e("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new we,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=t,this.source=(e==null?void 0:e.source)??new Ke,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:u,height:f}=this._source;this.frame.width=u,this.frame.height=f}this.orig=i||this.frame,this.trim=s,this.rotate=a??0,this.defaultAnchor=o,this.defaultBorders=l,this.destroyed=!1,this.dynamic=c||!1,this.updateUvs()}set source(e){this._source&&this._source.off("resize",this.update,this),this._source=e,e.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new Sd(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:e,frame:t}=this,{width:r,height:i}=this._source,s=t.x/r,o=t.y/i,l=t.width/r,a=t.height/i;let c=this.rotate;if(c){const u=l/2,f=a/2,h=s+u,d=o+f;c=pe.add(c,pe.NW),e.x0=h+u*pe.uX(c),e.y0=d+f*pe.uY(c),c=pe.add(c,2),e.x1=h+u*pe.uX(c),e.y1=d+f*pe.uY(c),c=pe.add(c,2),e.x2=h+u*pe.uX(c),e.y2=d+f*pe.uY(c),c=pe.add(c,2),e.x3=h+u*pe.uX(c),e.y3=d+f*pe.uY(c)}else e.x0=s,e.y0=o,e.x1=s+l,e.y1=o,e.x2=s+l,e.y2=o+a,e.x3=s,e.y3=o+a}destroy(e=!1){this._source&&e&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return j(ve,"Texture.baseTexture is now Texture.source"),this._source}}oe.EMPTY=new oe({label:"EMPTY",source:new Ke({label:"EMPTY"})});oe.EMPTY.destroy=Ma;oe.WHITE=new oe({source:new Ks({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});oe.WHITE.destroy=Ma;function Cd(n,e,t,r){const{width:i,height:s}=t.orig,o=t.trim;if(o){const l=o.width,a=o.height;n.minX=o.x-e._x*i-r,n.maxX=n.minX+l,n.minY=o.y-e._y*s-r,n.maxY=n.minY+a}else n.minX=-e._x*i-r,n.maxX=n.minX+i,n.minY=-e._y*s-r,n.maxY=n.minY+s}const Wo=new fe;class st{constructor(e=1/0,t=1/0,r=-1/0,i=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Wo,this.minX=e,this.minY=t,this.maxX=r,this.maxY=i}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new we);const e=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(e.x=0,e.y=0,e.width=0,e.height=0):e.copyFromBounds(this),e}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Wo,this}set(e,t,r,i){this.minX=e,this.minY=t,this.maxX=r,this.maxY=i}addFrame(e,t,r,i,s){s||(s=this.matrix);const o=s.a,l=s.b,a=s.c,c=s.d,u=s.tx,f=s.ty;let h=this.minX,d=this.minY,m=this.maxX,x=this.maxY,p=o*e+a*t+u,b=l*e+c*t+f;p<h&&(h=p),b<d&&(d=b),p>m&&(m=p),b>x&&(x=b),p=o*r+a*t+u,b=l*r+c*t+f,p<h&&(h=p),b<d&&(d=b),p>m&&(m=p),b>x&&(x=b),p=o*e+a*i+u,b=l*e+c*i+f,p<h&&(h=p),b<d&&(d=b),p>m&&(m=p),b>x&&(x=b),p=o*r+a*i+u,b=l*r+c*i+f,p<h&&(h=p),b<d&&(d=b),p>m&&(m=p),b>x&&(x=b),this.minX=h,this.minY=d,this.maxX=m,this.maxY=x}addRect(e,t){this.addFrame(e.x,e.y,e.x+e.width,e.y+e.height,t)}addBounds(e,t){this.addFrame(e.minX,e.minY,e.maxX,e.maxY,t)}addBoundsMask(e){this.minX=this.minX>e.minX?this.minX:e.minX,this.minY=this.minY>e.minY?this.minY:e.minY,this.maxX=this.maxX<e.maxX?this.maxX:e.maxX,this.maxY=this.maxY<e.maxY?this.maxY:e.maxY}applyMatrix(e){const t=this.minX,r=this.minY,i=this.maxX,s=this.maxY,{a:o,b:l,c:a,d:c,tx:u,ty:f}=e;let h=o*t+a*r+u,d=l*t+c*r+f;this.minX=h,this.minY=d,this.maxX=h,this.maxY=d,h=o*i+a*r+u,d=l*i+c*r+f,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=o*t+a*s+u,d=l*t+c*s+f,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=o*i+a*s+u,d=l*i+c*s+f,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(e){return this.minX<e.left&&(this.minX=e.left),this.maxX>e.right&&(this.maxX=e.right),this.minY<e.top&&(this.minY=e.top),this.maxY>e.bottom&&(this.maxY=e.bottom),this}fitBounds(e,t,r,i){return this.minX<e&&(this.minX=e),this.maxX>t&&(this.maxX=t),this.minY<r&&(this.minY=r),this.maxY>i&&(this.maxY=i),this}pad(e,t=e){return this.minX-=e,this.maxX+=e,this.minY-=t,this.maxY+=t,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new st(this.minX,this.minY,this.maxX,this.maxY)}scale(e,t=e){return this.minX*=e,this.minY*=t,this.maxX*=e,this.maxY*=t,this}get x(){return this.minX}set x(e){const t=this.maxX-this.minX;this.minX=e,this.maxX=e+t}get y(){return this.minY}set y(e){const t=this.maxY-this.minY;this.minY=e,this.maxY=e+t}get width(){return this.maxX-this.minX}set width(e){this.maxX=this.minX+e}get height(){return this.maxY-this.minY}set height(e){this.maxY=this.minY+e}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(e,t,r,i){let s=this.minX,o=this.minY,l=this.maxX,a=this.maxY;i||(i=this.matrix);const c=i.a,u=i.b,f=i.c,h=i.d,d=i.tx,m=i.ty;for(let x=t;x<r;x+=2){const p=e[x],b=e[x+1],_=c*p+f*b+d,y=u*p+h*b+m;s=_<s?_:s,o=y<o?y:o,l=_>l?_:l,a=y>a?y:a}this.minX=s,this.minY=o,this.maxX=l,this.maxY=a}containsPoint(e,t){return this.minX<=e&&this.minY<=t&&this.maxX>=e&&this.maxY>=t}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}}var wd={grad:.9,turn:360,rad:360/(2*Math.PI)},lt=function(n){return typeof n=="string"?n.length>0:typeof n=="number"},Ce=function(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=Math.pow(10,e)),Math.round(t*n)/t+0},Ve=function(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),n>t?t:n>e?n:e},Ra=function(n){return(n=isFinite(n)?n%360:0)>0?n:n+360},jo=function(n){return{r:Ve(n.r,0,255),g:Ve(n.g,0,255),b:Ve(n.b,0,255),a:Ve(n.a)}},gi=function(n){return{r:Ce(n.r),g:Ce(n.g),b:Ce(n.b),a:Ce(n.a,3)}},Td=/^#([0-9a-f]{3,8})$/i,gr=function(n){var e=n.toString(16);return e.length<2?"0"+e:e},Ua=function(n){var e=n.r,t=n.g,r=n.b,i=n.a,s=Math.max(e,t,r),o=s-Math.min(e,t,r),l=o?s===e?(t-r)/o:s===t?2+(r-e)/o:4+(e-t)/o:0;return{h:60*(l<0?l+6:l),s:s?o/s*100:0,v:s/255*100,a:i}},La=function(n){var e=n.h,t=n.s,r=n.v,i=n.a;e=e/360*6,t/=100,r/=100;var s=Math.floor(e),o=r*(1-t),l=r*(1-(e-s)*t),a=r*(1-(1-e+s)*t),c=s%6;return{r:255*[r,l,o,o,a,r][c],g:255*[a,r,r,l,o,o][c],b:255*[o,o,a,r,r,l][c],a:i}},qo=function(n){return{h:Ra(n.h),s:Ve(n.s,0,100),l:Ve(n.l,0,100),a:Ve(n.a)}},Ko=function(n){return{h:Ce(n.h),s:Ce(n.s),l:Ce(n.l),a:Ce(n.a,3)}},Zo=function(n){return La((t=(e=n).s,{h:e.h,s:(t*=((r=e.l)<50?r:100-r)/100)>0?2*t/(r+t)*100:0,v:r+t,a:e.a}));var e,t,r},Vn=function(n){return{h:(e=Ua(n)).h,s:(i=(200-(t=e.s))*(r=e.v)/100)>0&&i<200?t*r/100/(i<=100?i:200-i)*100:0,l:i/2,a:e.a};var e,t,r,i},Pd=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ad=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Fd=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Md=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ts={string:[[function(n){var e=Td.exec(n);return e?(n=e[1]).length<=4?{r:parseInt(n[0]+n[0],16),g:parseInt(n[1]+n[1],16),b:parseInt(n[2]+n[2],16),a:n.length===4?Ce(parseInt(n[3]+n[3],16)/255,2):1}:n.length===6||n.length===8?{r:parseInt(n.substr(0,2),16),g:parseInt(n.substr(2,2),16),b:parseInt(n.substr(4,2),16),a:n.length===8?Ce(parseInt(n.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(n){var e=Fd.exec(n)||Md.exec(n);return e?e[2]!==e[4]||e[4]!==e[6]?null:jo({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(n){var e=Pd.exec(n)||Ad.exec(n);if(!e)return null;var t,r,i=qo({h:(t=e[1],r=e[2],r===void 0&&(r="deg"),Number(t)*(wd[r]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return Zo(i)},"hsl"]],object:[[function(n){var e=n.r,t=n.g,r=n.b,i=n.a,s=i===void 0?1:i;return lt(e)&&lt(t)&&lt(r)?jo({r:Number(e),g:Number(t),b:Number(r),a:Number(s)}):null},"rgb"],[function(n){var e=n.h,t=n.s,r=n.l,i=n.a,s=i===void 0?1:i;if(!lt(e)||!lt(t)||!lt(r))return null;var o=qo({h:Number(e),s:Number(t),l:Number(r),a:Number(s)});return Zo(o)},"hsl"],[function(n){var e=n.h,t=n.s,r=n.v,i=n.a,s=i===void 0?1:i;if(!lt(e)||!lt(t)||!lt(r))return null;var o=function(l){return{h:Ra(l.h),s:Ve(l.s,0,100),v:Ve(l.v,0,100),a:Ve(l.a)}}({h:Number(e),s:Number(t),v:Number(r),a:Number(s)});return La(o)},"hsv"]]},Qo=function(n,e){for(var t=0;t<e.length;t++){var r=e[t][0](n);if(r)return[r,e[t][1]]}return[null,void 0]},Id=function(n){return typeof n=="string"?Qo(n.trim(),ts.string):typeof n=="object"&&n!==null?Qo(n,ts.object):[null,void 0]},xi=function(n,e){var t=Vn(n);return{h:t.h,s:Ve(t.s+100*e,0,100),l:t.l,a:t.a}},vi=function(n){return(299*n.r+587*n.g+114*n.b)/1e3/255},Jo=function(n,e){var t=Vn(n);return{h:t.h,s:t.s,l:Ve(t.l+100*e,0,100),a:t.a}},ns=function(){function n(e){this.parsed=Id(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return n.prototype.isValid=function(){return this.parsed!==null},n.prototype.brightness=function(){return Ce(vi(this.rgba),2)},n.prototype.isDark=function(){return vi(this.rgba)<.5},n.prototype.isLight=function(){return vi(this.rgba)>=.5},n.prototype.toHex=function(){return e=gi(this.rgba),t=e.r,r=e.g,i=e.b,o=(s=e.a)<1?gr(Ce(255*s)):"","#"+gr(t)+gr(r)+gr(i)+o;var e,t,r,i,s,o},n.prototype.toRgb=function(){return gi(this.rgba)},n.prototype.toRgbString=function(){return e=gi(this.rgba),t=e.r,r=e.g,i=e.b,(s=e.a)<1?"rgba("+t+", "+r+", "+i+", "+s+")":"rgb("+t+", "+r+", "+i+")";var e,t,r,i,s},n.prototype.toHsl=function(){return Ko(Vn(this.rgba))},n.prototype.toHslString=function(){return e=Ko(Vn(this.rgba)),t=e.h,r=e.s,i=e.l,(s=e.a)<1?"hsla("+t+", "+r+"%, "+i+"%, "+s+")":"hsl("+t+", "+r+"%, "+i+"%)";var e,t,r,i,s},n.prototype.toHsv=function(){return e=Ua(this.rgba),{h:Ce(e.h),s:Ce(e.s),v:Ce(e.v),a:Ce(e.a,3)};var e},n.prototype.invert=function(){return Je({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},n.prototype.saturate=function(e){return e===void 0&&(e=.1),Je(xi(this.rgba,e))},n.prototype.desaturate=function(e){return e===void 0&&(e=.1),Je(xi(this.rgba,-e))},n.prototype.grayscale=function(){return Je(xi(this.rgba,-1))},n.prototype.lighten=function(e){return e===void 0&&(e=.1),Je(Jo(this.rgba,e))},n.prototype.darken=function(e){return e===void 0&&(e=.1),Je(Jo(this.rgba,-e))},n.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},n.prototype.alpha=function(e){return typeof e=="number"?Je({r:(t=this.rgba).r,g:t.g,b:t.b,a:e}):Ce(this.rgba.a,3);var t},n.prototype.hue=function(e){var t=Vn(this.rgba);return typeof e=="number"?Je({h:e,s:t.s,l:t.l,a:t.a}):Ce(t.h)},n.prototype.isEqual=function(e){return this.toHex()===Je(e).toHex()},n}(),Je=function(n){return n instanceof ns?n:new ns(n)},el=[],zd=function(n){n.forEach(function(e){el.indexOf(e)<0&&(e(ns,ts),el.push(e))})};function Od(n,e){var t={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var i in t)r[t[i]]=i;var s={};n.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var l,a,c=r[this.toHex()];if(c)return c;if(o!=null&&o.closest){var u=this.toRgb(),f=1/0,h="black";if(!s.length)for(var d in t)s[d]=new n(t[d]).toRgb();for(var m in t){var x=(l=u,a=s[m],Math.pow(l.r-a.r,2)+Math.pow(l.g-a.g,2)+Math.pow(l.b-a.b,2));x<f&&(f=x,h=m)}return h}},e.string.push([function(o){var l=o.toLowerCase(),a=l==="transparent"?"#0000":t[l];return a?new n(a).toRgb():null},"name"])}zd([Od]);const vn=class On{constructor(e=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=e}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(e){return this.value=e,this}set value(e){if(e instanceof On)this._value=this._cloneSource(e._value),this._int=e._int,this._components.set(e._components);else{if(e===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,e))&&(this._normalize(e),this._value=this._cloneSource(e))}}get value(){return this._value}_cloneSource(e){return typeof e=="string"||typeof e=="number"||e instanceof Number||e===null?e:Array.isArray(e)||ArrayBuffer.isView(e)?e.slice(0):typeof e=="object"&&e!==null?{...e}:e}_isSourceEqual(e,t){const r=typeof e;if(r!==typeof t)return!1;if(r==="number"||r==="string"||e instanceof Number)return e===t;if(Array.isArray(e)&&Array.isArray(t)||ArrayBuffer.isView(e)&&ArrayBuffer.isView(t))return e.length!==t.length?!1:e.every((s,o)=>s===t[o]);if(e!==null&&t!==null){const s=Object.keys(e),o=Object.keys(t);return s.length!==o.length?!1:s.every(l=>e[l]===t[l])}return e===t}toRgba(){const[e,t,r,i]=this._components;return{r:e,g:t,b:r,a:i}}toRgb(){const[e,t,r]=this._components;return{r:e,g:t,b:r}}toRgbaString(){const[e,t,r]=this.toUint8RgbArray();return`rgba(${e},${t},${r},${this.alpha})`}toUint8RgbArray(e){const[t,r,i]=this._components;return this._arrayRgb||(this._arrayRgb=[]),e=e||this._arrayRgb,e[0]=Math.round(t*255),e[1]=Math.round(r*255),e[2]=Math.round(i*255),e}toArray(e){this._arrayRgba||(this._arrayRgba=[]),e=e||this._arrayRgba;const[t,r,i,s]=this._components;return e[0]=t,e[1]=r,e[2]=i,e[3]=s,e}toRgbArray(e){this._arrayRgb||(this._arrayRgb=[]),e=e||this._arrayRgb;const[t,r,i]=this._components;return e[0]=t,e[1]=r,e[2]=i,e}toNumber(){return this._int}toBgrNumber(){const[e,t,r]=this.toUint8RgbArray();return(r<<16)+(t<<8)+e}toLittleEndianNumber(){const e=this._int;return(e>>16)+(e&65280)+((e&255)<<16)}multiply(e){const[t,r,i,s]=On._temp.setValue(e)._components;return this._components[0]*=t,this._components[1]*=r,this._components[2]*=i,this._components[3]*=s,this._refreshInt(),this._value=null,this}premultiply(e,t=!0){return t&&(this._components[0]*=e,this._components[1]*=e,this._components[2]*=e),this._components[3]=e,this._refreshInt(),this._value=null,this}toPremultiplied(e,t=!0){if(e===1)return(255<<24)+this._int;if(e===0)return t?0:this._int;let r=this._int>>16&255,i=this._int>>8&255,s=this._int&255;return t&&(r=r*e+.5|0,i=i*e+.5|0,s=s*e+.5|0),(e*255<<24)+(r<<16)+(i<<8)+s}toHex(){const e=this._int.toString(16);return`#${"000000".substring(0,6-e.length)+e}`}toHexa(){const t=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-t.length)+t}setAlpha(e){return this._components[3]=this._clamp(e),this}_normalize(e){let t,r,i,s;if((typeof e=="number"||e instanceof Number)&&e>=0&&e<=16777215){const o=e;t=(o>>16&255)/255,r=(o>>8&255)/255,i=(o&255)/255,s=1}else if((Array.isArray(e)||e instanceof Float32Array)&&e.length>=3&&e.length<=4)e=this._clamp(e),[t,r,i,s=1]=e;else if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&e.length>=3&&e.length<=4)e=this._clamp(e,0,255),[t,r,i,s=255]=e,t/=255,r/=255,i/=255,s/=255;else if(typeof e=="string"||typeof e=="object"){if(typeof e=="string"){const l=On.HEX_PATTERN.exec(e);l&&(e=`#${l[2]}`)}const o=Je(e);o.isValid()&&({r:t,g:r,b:i,a:s}=o.rgba,t/=255,r/=255,i/=255)}if(t!==void 0)this._components[0]=t,this._components[1]=r,this._components[2]=i,this._components[3]=s,this._refreshInt();else throw new Error(`Unable to convert color ${e}`)}_refreshInt(){this._clamp(this._components);const[e,t,r]=this._components;this._int=(e*255<<16)+(t*255<<8)+(r*255|0)}_clamp(e,t=0,r=1){return typeof e=="number"?Math.min(Math.max(e,t),r):(e.forEach((i,s)=>{e[s]=Math.min(Math.max(i,t),r)}),e)}static isColorLike(e){return typeof e=="number"||typeof e=="string"||e instanceof Number||e instanceof On||Array.isArray(e)||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Float32Array||e.r!==void 0&&e.g!==void 0&&e.b!==void 0||e.r!==void 0&&e.g!==void 0&&e.b!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0&&e.a!==void 0}};vn.shared=new vn;vn._temp=new vn;vn.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let de=vn;const Ed={cullArea:null,cullable:!1,cullableChildren:!0};class Zs{constructor(e,t){this._pool=[],this._count=0,this._index=0,this._classType=e,t&&this.prepopulate(t)}prepopulate(e){for(let t=0;t<e;t++)this._pool[this._index++]=new this._classType;this._count+=e}get(e){var r;let t;return this._index>0?t=this._pool[--this._index]:t=new this._classType,(r=t.init)==null||r.call(t,e),t}return(e){var t;(t=e.reset)==null||t.call(e),this._pool[this._index++]=e}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class Rd{constructor(){this._poolsByClass=new Map}prepopulate(e,t){this.getPool(e).prepopulate(t)}get(e,t){return this.getPool(e).get(t)}return(e){this.getPool(e.constructor).return(e)}getPool(e){return this._poolsByClass.has(e)||this._poolsByClass.set(e,new Zs(e)),this._poolsByClass.get(e)}stats(){const e={};return this._poolsByClass.forEach(t=>{const r=e[t._classType.name]?t._classType.name+t._classType.ID:t._classType.name;e[r]={free:t.totalFree,used:t.totalUsed,size:t.totalSize}}),e}}const dt=new Rd;function Ud(n,e,t){const r=n.length;let i;if(e>=r||t===0)return;t=e+t>r?r-e:t;const s=r-t;for(i=e;i<s;++i)n[i]=n[i+t];n.length=s}const Ld={allowChildren:!0,removeChildren(n=0,e){const t=e??this.children.length,r=t-n,i=[];if(r>0&&r<=t){for(let o=t-1;o>=n;o--){const l=this.children[o];l&&(i.push(l),l.parent=null)}Ud(this.children,n,t);const s=this.renderGroup||this.parentRenderGroup;s&&s.removeChildren(i);for(let o=0;o<i.length;++o)this.emit("childRemoved",i[o],this,o),i[o].emit("removed",this);return i}else if(r===0&&this.children.length===0)return i;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(n){const e=this.getChildAt(n);return this.removeChild(e)},getChildAt(n){if(n<0||n>=this.children.length)throw new Error(`getChildAt: Index (${n}) does not exist.`);return this.children[n]},setChildIndex(n,e){if(e<0||e>=this.children.length)throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);this.getChildIndex(n),this.addChildAt(n,e)},getChildIndex(n){const e=this.children.indexOf(n);if(e===-1)throw new Error("The supplied Container must be a child of the caller");return e},addChildAt(n,e){this.allowChildren||j(ve,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:t}=this;if(e<0||e>t.length)throw new Error(`${n}addChildAt: The index ${e} supplied is out of bounds ${t.length}`);if(n.parent){const i=n.parent.children.indexOf(n);if(n.parent===this&&i===e)return n;i!==-1&&n.parent.children.splice(i,1)}e===t.length?t.push(n):t.splice(e,0,n),n.parent=this,n.didChange=!0,n.didViewUpdate=!1,n._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(n),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",n,this,e),n.emit("added",this),n},swapChildren(n,e){if(n===e)return;const t=this.getChildIndex(n),r=this.getChildIndex(e);this.children[t]=e,this.children[r]=n;const i=this.renderGroup||this.parentRenderGroup;i&&(i.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){var n;(n=this.parent)==null||n.removeChild(this)},reparentChild(...n){return n.length===1?this.reparentChildAt(n[0],this.children.length):(n.forEach(e=>this.reparentChildAt(e,this.children.length)),n[0])},reparentChildAt(n,e){if(n.parent===this)return this.setChildIndex(n,e),n;const t=n.worldTransform.clone();n.removeFromParent(),this.addChildAt(n,e);const r=this.worldTransform.clone();return r.invert(),t.prepend(r),n.setFromMatrix(t),n}};class tl{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let e=0;e<this.filters.length;e++)this.filters[e].destroy();this.filters=null,this.filterArea=null}}class Dd{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(e=>{this.add({test:e.test,maskClass:e})}))}add(e){this._tests.push(e)}getMaskEffect(e){this._initialized||this.init();for(let t=0;t<this._tests.length;t++){const r=this._tests[t];if(r.test(e))return dt.get(r.maskClass,e)}return e}returnMaskEffect(e){dt.return(e)}}const rs=new Dd;ot.handleByList(he.MaskEffect,rs._effectClasses);const Bd={_maskEffect:null,_filterEffect:null,effects:[],addEffect(n){if(this.effects.indexOf(n)!==-1)return;this.effects.push(n),this.effects.sort((r,i)=>r.priority-i.priority);const t=this.renderGroup||this.parentRenderGroup;t&&(t.structureDidChange=!0),this._updateIsSimple()},removeEffect(n){const e=this.effects.indexOf(n);e!==-1&&(this.effects.splice(e,1),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateIsSimple())},set mask(n){const e=this._maskEffect;(e==null?void 0:e.mask)!==n&&(e&&(this.removeEffect(e),rs.returnMaskEffect(e),this._maskEffect=null),n!=null&&(this._maskEffect=rs.getMaskEffect(n),this.addEffect(this._maskEffect)))},get mask(){var n;return(n=this._maskEffect)==null?void 0:n.mask},set filters(n){var s;!Array.isArray(n)&&n&&(n=[n]);const e=this._filterEffect||(this._filterEffect=new tl);n=n;const t=(n==null?void 0:n.length)>0,r=((s=e.filters)==null?void 0:s.length)>0,i=t!==r;n=Array.isArray(n)?n.slice(0):n,e.filters=Object.freeze(n),i&&(t?this.addEffect(e):(this.removeEffect(e),e.filters=n??null))},get filters(){var n;return(n=this._filterEffect)==null?void 0:n.filters},set filterArea(n){this._filterEffect||(this._filterEffect=new tl),this._filterEffect.filterArea=n},get filterArea(){var n;return(n=this._filterEffect)==null?void 0:n.filterArea}},Gd={label:null,get name(){return j(ve,"Container.name property has been removed, use Container.label instead"),this.label},set name(n){j(ve,"Container.name property has been removed, use Container.label instead"),this.label=n},getChildByName(n,e=!1){return this.getChildByLabel(n,e)},getChildByLabel(n,e=!1){const t=this.children;for(let r=0;r<t.length;r++){const i=t[r];if(i.label===n||n instanceof RegExp&&n.test(i.label))return i}if(e)for(let r=0;r<t.length;r++){const s=t[r].getChildByLabel(n,!0);if(s)return s}return null},getChildrenByLabel(n,e=!1,t=[]){const r=this.children;for(let i=0;i<r.length;i++){const s=r[i];(s.label===n||n instanceof RegExp&&n.test(s.label))&&t.push(s)}if(e)for(let i=0;i<r.length;i++)r[i].getChildrenByLabel(n,!0,t);return t}},mt=new Zs(fe),yn=new Zs(st);function Da(n,e,t){t.clear();let r,i;return n.parent?e?r=n.parent.worldTransform:(i=mt.get().identity(),r=$r(n,i)):r=fe.IDENTITY,Ba(n,t,r,e),i&&mt.return(i),t.isValid||t.set(0,0,0,0),t}function Ba(n,e,t,r){var l,a;if(!n.visible||!n.measurable)return;let i;r?i=n.worldTransform:(n.updateLocalTransform(),i=mt.get(),i.appendFrom(n.localTransform,t));const s=e,o=!!n.effects.length;if(o&&(e=yn.get().clear()),n.boundsArea)e.addRect(n.boundsArea,i);else{n.addBounds&&(e.matrix=i,n.addBounds(e));for(let c=0;c<n.children.length;c++)Ba(n.children[c],e,i,r)}if(o){for(let c=0;c<n.effects.length;c++)(a=(l=n.effects[c]).addBounds)==null||a.call(l,e);s.addBounds(e,fe.IDENTITY),yn.return(e)}r||mt.return(i)}function $r(n,e){const t=n.parent;return t&&($r(t,e),t.updateLocalTransform(),e.append(t.localTransform)),e}let yi=0;const nl=500;function pt(...n){yi!==nl&&(yi++,yi===nl?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...n))}function Ga(n,e,t){return e.clear(),t||(t=fe.IDENTITY),ka(n,e,t,n,!0),e.isValid||e.set(0,0,0,0),e}function ka(n,e,t,r,i){var a,c;let s;if(i)s=mt.get(),s=t.copyTo(s);else{if(!n.visible||!n.measurable)return;n.updateLocalTransform();const u=n.localTransform;s=mt.get(),s.appendFrom(u,t)}const o=e,l=!!n.effects.length;if(l&&(e=yn.get().clear()),n.boundsArea)e.addRect(n.boundsArea,s);else{n.renderPipeId&&(e.matrix=s,n.addBounds(e));const u=n.children;for(let f=0;f<u.length;f++)ka(u[f],e,s,r,!1)}if(l){for(let u=0;u<n.effects.length;u++)(c=(a=n.effects[u]).addLocalBounds)==null||c.call(a,e,r);o.addBounds(e,fe.IDENTITY),yn.return(e)}mt.return(s)}function Na(n,e){const t=n.children;for(let r=0;r<t.length;r++){const i=t[r],s=i.uid,o=(i._didViewChangeTick&65535)<<16|i._didContainerChangeTick&65535,l=e.index;(e.data[l]!==s||e.data[l+1]!==o)&&(e.data[e.index]=s,e.data[e.index+1]=o,e.didChange=!0),e.index=l+2,i.children.length&&Na(i,e)}return e.didChange}const kd=new fe,Nd={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(n,e){const t=Math.sign(this.scale.x)||1;e!==0?this.scale.x=n/e*t:this.scale.x=t},_setHeight(n,e){const t=Math.sign(this.scale.y)||1;e!==0?this.scale.y=n/e*t:this.scale.y=t},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new st});const n=this._localBoundsCacheData;return n.index=1,n.didChange=!1,n.data[0]!==this._didViewChangeTick&&(n.didChange=!0,n.data[0]=this._didViewChangeTick),Na(this,n),n.didChange&&Ga(this,n.localBounds,kd),n.localBounds},getBounds(n,e){return Da(this,n,e||new st)}},$d={_onRender:null,set onRender(n){const e=this.renderGroup||this.parentRenderGroup;if(!n){this._onRender&&(e==null||e.removeOnRender(this)),this._onRender=null;return}this._onRender||e==null||e.addOnRender(this),this._onRender=n},get onRender(){return this._onRender}},Vd={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(n){this._zIndex!==n&&(this._zIndex=n,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(Xd))}};function Xd(n,e){return n._zIndex-e._zIndex}const Hd={getGlobalPosition(n=new Ae,e=!1){return this.parent?this.parent.toGlobal(this._position,n,e):(n.x=this._position.x,n.y=this._position.y),n},toGlobal(n,e,t=!1){if(!t){this.updateLocalTransform();const r=$r(this,new fe);return r.append(this.localTransform),r.apply(n,e)}return this.worldTransform.apply(n,e)},toLocal(n,e,t,r){if(e&&(n=e.toGlobal(n,t,r)),!r){this.updateLocalTransform();const i=$r(this,new fe);return i.append(this.localTransform),i.applyInverse(n,t)}return this.worldTransform.applyInverse(n,t)}};let Yd=0;class $a{constructor(){this.uid=_e("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.tick=0}reset(){this.instructionSize=0,this.tick=Yd++}add(e){this.instructions[this.instructionSize++]=e}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}class Wd{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new fe,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new $a,this._onRenderContainers=[]}init(e){this.root=e,e._onRender&&this.addOnRender(e),e.didChange=!0;const t=e.children;for(let r=0;r<t.length;r++)this.addChild(t[r])}reset(){this.renderGroupChildren.length=0;for(const e in this.childrenToUpdate){const t=this.childrenToUpdate[e];t.list.fill(null),t.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null}get localTransform(){return this.root.localTransform}addRenderGroupChild(e){e.renderGroupParent&&e.renderGroupParent._removeRenderGroupChild(e),e.renderGroupParent=this,this.renderGroupChildren.push(e)}_removeRenderGroupChild(e){const t=this.renderGroupChildren.indexOf(e);t>-1&&this.renderGroupChildren.splice(t,1),e.renderGroupParent=null}addChild(e){if(this.structureDidChange=!0,e.parentRenderGroup=this,e.updateTick=-1,e.parent===this.root?e.relativeRenderGroupDepth=1:e.relativeRenderGroupDepth=e.parent.relativeRenderGroupDepth+1,e.didChange=!0,this.onChildUpdate(e),e.renderGroup){this.addRenderGroupChild(e.renderGroup);return}e._onRender&&this.addOnRender(e);const t=e.children;for(let r=0;r<t.length;r++)this.addChild(t[r])}removeChild(e){if(this.structureDidChange=!0,e._onRender&&(e.renderGroup||this.removeOnRender(e)),e.parentRenderGroup=null,e.renderGroup){this._removeRenderGroupChild(e.renderGroup);return}const t=e.children;for(let r=0;r<t.length;r++)this.removeChild(t[r])}removeChildren(e){for(let t=0;t<e.length;t++)this.removeChild(e[t])}onChildUpdate(e){let t=this.childrenToUpdate[e.relativeRenderGroupDepth];t||(t=this.childrenToUpdate[e.relativeRenderGroupDepth]={index:0,list:[]}),t.list[t.index++]=e}updateRenderable(e){e.globalDisplayStatus<7||(e.didViewUpdate=!1,this.instructionSet.renderPipes[e.renderPipeId].updateRenderable(e))}onChildViewUpdate(e){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=e}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(e){this._onRenderContainers.push(e)}removeOnRender(e){this._onRenderContainers.splice(this._onRenderContainers.indexOf(e),1)}runOnRender(){for(let e=0;e<this._onRenderContainers.length;e++)this._onRenderContainers[e]._onRender()}destroy(){this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(e=[]){const t=this.root.children;for(let r=0;r<t.length;r++)this._getChildren(t[r],e);return e}_getChildren(e,t=[]){if(t.push(e),e.renderGroup)return t;const r=e.children;for(let i=0;i<r.length;i++)this._getChildren(r[i],t);return t}}function jd(n,e,t={}){for(const r in e)!t[r]&&e[r]!==void 0&&(n[r]=e[r])}const _i=new Ee(null),bi=new Ee(null),Si=new Ee(null,1,1),rl=1,qd=2,Ci=4;class Be extends xt{constructor(e={}){var t,r;super(),this.uid=_e("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new fe,this.relativeGroupTransform=new fe,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new Ee(this,0,0),this._scale=Si,this._pivot=bi,this._skew=_i,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],jd(this,e,{children:!0,parent:!0,effects:!0}),(t=e.children)==null||t.forEach(i=>this.addChild(i)),(r=e.parent)==null||r.addChild(this)}static mixin(e){Object.defineProperties(Be.prototype,Object.getOwnPropertyDescriptors(e))}set _didChangeId(e){this._didViewChangeTick=e>>12&4095,this._didContainerChangeTick=e&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...e){if(this.allowChildren||j(ve,"addChild: Only Containers will be allowed to add children in v8.0.0"),e.length>1){for(let i=0;i<e.length;i++)this.addChild(e[i]);return e[0]}const t=e[0];if(t.parent===this)return this.children.splice(this.children.indexOf(t),1),this.children.push(t),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),t;t.parent&&t.parent.removeChild(t),this.children.push(t),this.sortableChildren&&(this.sortDirty=!0),t.parent=this,t.didChange=!0,t.didViewUpdate=!1,t._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(t),this.emit("childAdded",t,this,this.children.length-1),t.emit("added",this),this._didViewChangeTick++,t._zIndex!==0&&t.depthOfChildModified(),t}removeChild(...e){if(e.length>1){for(let i=0;i<e.length;i++)this.removeChild(e[i]);return e[0]}const t=e[0],r=this.children.indexOf(t);return r>-1&&(this._didViewChangeTick++,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(t):this.parentRenderGroup&&this.parentRenderGroup.removeChild(t),t.parent=null,this.emit("childRemoved",t,this,r),t.emit("removed",this)),t}_onUpdate(e){e&&e===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(e){!!this.renderGroup!==e&&(e?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const e=this.parentRenderGroup;e==null||e.removeChild(this),this.renderGroup=dt.get(Wd,this),this.groupTransform=fe.IDENTITY,e==null||e.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const e=this.parentRenderGroup;e==null||e.removeChild(this),dt.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,e==null||e.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new fe),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(e){this._position.x=e}get y(){return this._position.y}set y(e){this._position.y=e}get position(){return this._position}set position(e){this._position.copyFrom(e)}get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this._onUpdate(this._skew))}get angle(){return this.rotation*pd}set angle(e){this.rotation=e*xn}get pivot(){return this._pivot===bi&&(this._pivot=new Ee(this,0,0)),this._pivot}set pivot(e){this._pivot===bi&&(this._pivot=new Ee(this,0,0)),typeof e=="number"?this._pivot.set(e):this._pivot.copyFrom(e)}get skew(){return this._skew===_i&&(this._skew=new Ee(this,0,0)),this._skew}set skew(e){this._skew===_i&&(this._skew=new Ee(this,0,0)),this._skew.copyFrom(e)}get scale(){return this._scale===Si&&(this._scale=new Ee(this,1,1)),this._scale}set scale(e){this._scale===Si&&(this._scale=new Ee(this,0,0)),typeof e=="number"?this._scale.set(e):this._scale.copyFrom(e)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(e){const t=this.getLocalBounds().width;this._setWidth(e,t)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(e){const t=this.getLocalBounds().height;this._setHeight(e,t)}getSize(e){e||(e={});const t=this.getLocalBounds();return e.width=Math.abs(this.scale.x*t.width),e.height=Math.abs(this.scale.y*t.height),e}setSize(e,t){const r=this.getLocalBounds();let i,s;typeof e!="object"?(i=e,s=t??e):(i=e.width,s=e.height??e.width),i!==void 0&&this._setWidth(i,r.width),s!==void 0&&this._setHeight(s,r.height)}_updateSkew(){const e=this._rotation,t=this._skew;this._cx=Math.cos(e+t._y),this._sx=Math.sin(e+t._y),this._cy=-Math.sin(e-t._x),this._sy=Math.cos(e-t._x)}updateTransform(e){return this.position.set(typeof e.x=="number"?e.x:this.position.x,typeof e.y=="number"?e.y:this.position.y),this.scale.set(typeof e.scaleX=="number"?e.scaleX||1:this.scale.x,typeof e.scaleY=="number"?e.scaleY||1:this.scale.y),this.rotation=typeof e.rotation=="number"?e.rotation:this.rotation,this.skew.set(typeof e.skewX=="number"?e.skewX:this.skew.x,typeof e.skewY=="number"?e.skewY:this.skew.y),this.pivot.set(typeof e.pivotX=="number"?e.pivotX:this.pivot.x,typeof e.pivotY=="number"?e.pivotY:this.pivot.y),this}setFromMatrix(e){e.decompose(this)}updateLocalTransform(){const e=this._didContainerChangeTick;if(this._didLocalTransformChangeId===e)return;this._didLocalTransformChangeId=e;const t=this.localTransform,r=this._scale,i=this._pivot,s=this._position,o=r._x,l=r._y,a=i._x,c=i._y;t.a=this._cx*o,t.b=this._sx*o,t.c=this._cy*l,t.d=this._sy*l,t.tx=s._x-(a*t.a+c*t.c),t.ty=s._y-(a*t.b+c*t.d)}set alpha(e){e!==this.localAlpha&&(this.localAlpha=e,this._updateFlags|=rl,this._onUpdate())}get alpha(){return this.localAlpha}set tint(e){const r=de.shared.setValue(e??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=rl,this._onUpdate())}get tint(){const e=this.localColor;return((e&255)<<16)+(e&65280)+(e>>16&255)}set blendMode(e){this.localBlendMode!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=qd,this.localBlendMode=e,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(e){const t=e?2:0;(this.localDisplayStatus&2)!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Ci,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(e){const t=e?0:4;(this.localDisplayStatus&4)!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Ci,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(e){const t=e?1:0;(this.localDisplayStatus&1)!==t&&(this._updateFlags|=Ci,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(e=!1){var i;if(this.destroyed)return;this.destroyed=!0;const t=this.removeChildren(0,this.children.length);if(this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),typeof e=="boolean"?e:e==null?void 0:e.children)for(let s=0;s<t.length;++s)t[s].destroy(e);(i=this.renderGroup)==null||i.destroy(),this.renderGroup=null}}Be.mixin(Ld);Be.mixin(Hd);Be.mixin($d);Be.mixin(Nd);Be.mixin(Bd);Be.mixin(Gd);Be.mixin(Vd);Be.mixin(Ed);class Va extends Be{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=0,this._lastInstructionTick=-1,this._bounds=new st(0,1,0,0),this._boundsDirty=!0}_updateBounds(){}get roundPixels(){return!!this._roundPixels}set roundPixels(e){this._roundPixels=e?1:0}containsPoint(e){const t=this.bounds,{x:r,y:i}=e;return r>=t.minX&&r<=t.maxX&&i>=t.minY&&i<=t.maxY}destroy(e){super.destroy(e),this._bounds=null}}class Qn extends Va{constructor(e=oe.EMPTY){e instanceof oe&&(e={texture:e});const{texture:t=oe.EMPTY,anchor:r,roundPixels:i,width:s,height:o,...l}=e;super({label:"Sprite",...l}),this.renderPipeId="sprite",this.batched=!0,this._didSpriteUpdate=!1,this._sourceBounds={minX:0,maxX:1,minY:0,maxY:0},this._sourceBoundsDirty=!0,this._anchor=new Ee({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:t.defaultAnchor&&(this.anchor=t.defaultAnchor),this.texture=t,this.allowChildren=!1,this.roundPixels=i??!1,s!==void 0&&(this.width=s),o!==void 0&&(this.height=o)}static from(e,t=!1){return e instanceof oe?new Qn(e):new Qn(oe.from(e,t))}set texture(e){e||(e=oe.EMPTY);const t=this._texture;t!==e&&(t&&t.dynamic&&t.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this._texture=e,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get sourceBounds(){return this._sourceBoundsDirty&&(this._updateSourceBounds(),this._sourceBoundsDirty=!1),this._sourceBounds}containsPoint(e){const t=this.sourceBounds;return e.x>=t.maxX&&e.x<=t.minX&&e.y>=t.maxY&&e.y<=t.minY}addBounds(e){const t=this._texture.trim?this.sourceBounds:this.bounds;e.addFrame(t.minX,t.minY,t.maxX,t.maxY)}onViewUpdate(){if(this._didViewChangeTick++,this._didSpriteUpdate=!0,this._sourceBoundsDirty=this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}_updateBounds(){Cd(this._bounds,this._anchor,this._texture,0)}_updateSourceBounds(){const e=this._anchor,t=this._texture,r=this._sourceBounds,{width:i,height:s}=t.orig;r.maxX=-e._x*i,r.minX=r.maxX+i,r.maxY=-e._y*s,r.minY=r.maxY+s}destroy(e=!1){if(super.destroy(e),typeof e=="boolean"?e:e==null?void 0:e.texture){const r=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._texture.destroy(r)}this._texture=null,this._bounds=null,this._sourceBounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(e){this._setWidth(e,this._texture.orig.width),this._width=e}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(e){this._setHeight(e,this._texture.orig.height),this._height=e}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this._texture.orig.width,e.height=Math.abs(this.scale.y)*this._texture.orig.height,e}setSize(e,t){let r,i;typeof e!="object"?(r=e,i=t??e):(r=e.width,i=e.height??e.width),r!==void 0&&this._setWidth(r,this._texture.orig.width),i!==void 0&&this._setHeight(i,this._texture.orig.height)}}const Kd=new st;function Xa(n,e,t){const r=Kd;n.measurable=!0,Da(n,t,r),e.addBoundsMask(r),n.measurable=!1}function Ha(n,e,t){const r=yn.get();n.measurable=!0;const i=mt.get().identity(),s=Ya(n,t,i);Ga(n,r,s),n.measurable=!1,e.addBoundsMask(r),mt.return(i),yn.return(r)}function Ya(n,e,t){return n?(n!==e&&(Ya(n.parent,e,t),n.updateLocalTransform(),t.append(n.localTransform)),t):(pt("Mask bounds, renderable is not inside the root container"),t)}class Wa{constructor(e){this.priority=0,this.pipe="alphaMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e,this.renderMaskToTexture=!(e instanceof Qn),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(e,t){Xa(this.mask,e,t)}addLocalBounds(e,t){Ha(this.mask,e,t)}containsPoint(e,t){const r=this.mask;return t(r,e)}destroy(){this.reset()}static test(e){return e instanceof Qn}}Wa.extension=he.MaskEffect;class ja{constructor(e){this.priority=0,this.pipe="colorMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e}destroy(){}static test(e){return typeof e=="number"}}ja.extension=he.MaskEffect;class qa{constructor(e){this.priority=0,this.pipe="stencilMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(e,t){Xa(this.mask,e,t)}addLocalBounds(e,t){Ha(this.mask,e,t)}containsPoint(e,t){const r=this.mask;return t(r,e)}destroy(){this.reset()}static test(e){return e instanceof Be}}qa.extension=he.MaskEffect;const Zd={createCanvas:(n,e)=>{const t=document.createElement("canvas");return t.width=n,t.height=e,t},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(n,e)=>fetch(n,e),parseXML:n=>new DOMParser().parseFromString(n,"text/xml")};let il=Zd;const Ft={get(){return il},set(n){il=n}};class Ka extends Ke{constructor(e){e.resource||(e.resource=Ft.get().createCanvas()),e.width||(e.width=e.resource.width,e.autoDensity||(e.width/=e.resolution)),e.height||(e.height=e.resource.height,e.autoDensity||(e.height/=e.resolution)),super(e),this.uploadMethodId="image",this.autoDensity=e.autoDensity;const t=e.resource;(this.pixelWidth!==t.width||this.pixelWidth!==t.height)&&this.resizeCanvas(),this.transparent=!!e.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(e=this.width,t=this.height,r=this._resolution){const i=super.resize(e,t,r);return i&&this.resizeCanvas(),i}static test(e){return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&e instanceof OffscreenCanvas}}Ka.extension=he.TextureSource;class ei extends Ke{constructor(e){if(e.resource&&globalThis.HTMLImageElement&&e.resource instanceof HTMLImageElement){const t=Ft.get().createCanvas(e.resource.width,e.resource.height);t.getContext("2d").drawImage(e.resource,0,0,e.resource.width,e.resource.height),e.resource=t,pt("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(e),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(e){return globalThis.HTMLImageElement&&e instanceof HTMLImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||globalThis.VideoFrame&&e instanceof VideoFrame}}ei.extension=he.TextureSource;var is=(n=>(n[n.INTERACTION=50]="INTERACTION",n[n.HIGH=25]="HIGH",n[n.NORMAL=0]="NORMAL",n[n.LOW=-25]="LOW",n[n.UTILITY=-50]="UTILITY",n))(is||{});class wi{constructor(e,t=null,r=0,i=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=e,this._context=t,this.priority=r,this._once=i}match(e,t=null){return this._fn===e&&this._context===t}emit(e){this._fn&&(this._context?this._fn.call(this._context,e):this._fn(e));const t=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),t}connect(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this}destroy(e=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const t=this.next;return this.next=e?null:t,this.previous=null,t}}const Za=class ke{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new wi(null,null,1/0),this.deltaMS=1/ke.targetFPMS,this.elapsedMS=1/ke.targetFPMS,this._tick=e=>{this._requestId=null,this.started&&(this.update(e),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(e,t,r=is.NORMAL){return this._addListener(new wi(e,t,r))}addOnce(e,t,r=is.NORMAL){return this._addListener(new wi(e,t,r,!0))}_addListener(e){let t=this._head.next,r=this._head;if(!t)e.connect(r);else{for(;t;){if(e.priority>t.priority){e.connect(r);break}r=t,t=t.next}e.previous||e.connect(r)}return this._startIfPossible(),this}remove(e,t){let r=this._head.next;for(;r;)r.match(e,t)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let e=0,t=this._head;for(;t=t.next;)e++;return e}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let e=this._head.next;for(;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}}update(e=performance.now()){let t;if(e>this.lastTime){if(t=this.elapsedMS=e-this.lastTime,t>this._maxElapsedMS&&(t=this._maxElapsedMS),t*=this.speed,this._minElapsedMS){const s=e-this._lastFrame|0;if(s<this._minElapsedMS)return;this._lastFrame=e-s%this._minElapsedMS}this.deltaMS=t,this.deltaTime=this.deltaMS*ke.targetFPMS;const r=this._head;let i=r.next;for(;i;)i=i.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=e}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(e){const t=Math.min(this.maxFPS,e),r=Math.min(Math.max(0,t)/1e3,ke.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(e){if(e===0)this._minElapsedMS=0;else{const t=Math.max(this.minFPS,e);this._minElapsedMS=1/(t/1e3)}}static get shared(){if(!ke._shared){const e=ke._shared=new ke;e.autoStart=!0,e._protected=!0}return ke._shared}static get system(){if(!ke._system){const e=ke._system=new ke;e.autoStart=!0,e._protected=!0}return ke._system}};Za.targetFPMS=.06;let En=Za,Ti;async function Qd(){return Ti??(Ti=(async()=>{var o;const e=document.createElement("canvas").getContext("webgl");if(!e)return"premultiply-alpha-on-upload";const t=await new Promise(l=>{const a=document.createElement("video");a.onloadeddata=()=>l(a),a.onerror=()=>l(null),a.autoplay=!1,a.crossOrigin="anonymous",a.preload="auto",a.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",a.load()});if(!t)return"premultiply-alpha-on-upload";const r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);const i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t);const s=new Uint8Array(4);return e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,s),e.deleteFramebuffer(i),e.deleteTexture(r),(o=e.getExtension("WEBGL_lose_context"))==null||o.loseContext(),s[0]<=s[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),Ti}const ti=class Qa extends Ke{constructor(e){super(e),this.isReady=!1,this.uploadMethodId="video",e={...Qa.defaultOptions,...e},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=e.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=e.autoPlay!==!1,this.alphaMode=e.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),e.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const e=En.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-e)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const e=this.resource,t=this.options;return(e.readyState===e.HAVE_ENOUGH_DATA||e.readyState===e.HAVE_FUTURE_DATA)&&e.width&&e.height&&(e.complete=!0),e.addEventListener("play",this._onPlayStart),e.addEventListener("pause",this._onPlayStop),e.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(t.preload||e.addEventListener("canplay",this._onCanPlay),e.addEventListener("canplaythrough",this._onCanPlayThrough),e.addEventListener("error",this._onError,!0)),this.alphaMode=await Qd(),this._load=new Promise((r,i)=>{this.isValid?r(this):(this._resolve=r,this._reject=i,t.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${t.preloadTimeoutMs}ms`))})),e.load())}),this._load}_onError(e){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",e),this._reject&&(this._reject(e),this._reject=null,this._resolve=null)}_isSourcePlaying(){const e=this.resource;return!e.paused&&!e.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const e=this.resource;this.isValid&&(this.isReady=!0,this.resize(e.videoWidth,e.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const e=this.resource;e&&(e.removeEventListener("play",this._onPlayStart),e.removeEventListener("pause",this._onPlayStop),e.removeEventListener("seeked",this._onSeeked),e.removeEventListener("canplay",this._onCanPlay),e.removeEventListener("canplaythrough",this._onCanPlayThrough),e.removeEventListener("error",this._onError,!0),e.pause(),e.src="",e.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(e){e!==this._updateFPS&&(this._updateFPS=e,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(En.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(En.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(En.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(e){return globalThis.HTMLVideoElement&&e instanceof HTMLVideoElement}};ti.extension=he.TextureSource;ti.defaultOptions={...Ke.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};ti.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let Jd=ti;const on=(n,e,t=!1)=>(Array.isArray(n)||(n=[n]),e?n.map(r=>typeof r=="string"||t?e(r):r):n);class em{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(e){return this._cache.has(e)}get(e){const t=this._cache.get(e);return t||pt(`[Assets] Asset id ${e} was not found in the Cache`),t}set(e,t){const r=on(e);let i;for(let a=0;a<this.parsers.length;a++){const c=this.parsers[a];if(c.test(t)){i=c.getCacheableAssets(r,t);break}}const s=new Map(Object.entries(i||{}));i||r.forEach(a=>{s.set(a,t)});const o=[...s.keys()],l={cacheKeys:o,keys:r};r.forEach(a=>{this._cacheMap.set(a,l)}),o.forEach(a=>{const c=i?i[a]:t;this._cache.has(a)&&this._cache.get(a)!==c&&pt("[Cache] already has key:",a),this._cache.set(a,s.get(a))})}remove(e){if(!this._cacheMap.has(e)){pt(`[Assets] Asset id ${e} was not found in the Cache`);return}const t=this._cacheMap.get(e);t.cacheKeys.forEach(i=>{this._cache.delete(i)}),t.keys.forEach(i=>{this._cacheMap.delete(i)})}get parsers(){return this._parsers}}const ln=new em,ss=[];ot.handleByList(he.TextureSource,ss);function Ja(n={}){const e=n&&n.resource,t=e?n.resource:n,r=e?n:{resource:n};for(let i=0;i<ss.length;i++){const s=ss[i];if(s.test(t))return new s(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function tm(n={},e=!1){const t=n&&n.resource,r=t?n.resource:n,i=t?n:{resource:n};if(!e&&ln.has(r))return ln.get(r);const s=new oe({source:Ja(i)});return s.on("destroy",()=>{ln.has(r)&&ln.remove(r)}),e||ln.set(r,s),s}function nm(n,e=!1){return typeof n=="string"?ln.get(n):n instanceof Ke?new oe({source:n}):tm(n,e)}oe.from=nm;Ke.from=Ja;ot.add(Wa,ja,qa,Jd,ei,Ka,Ks);var eu=(n=>(n[n.Low=0]="Low",n[n.Normal=1]="Normal",n[n.High=2]="High",n))(eu||{});function We(n){if(typeof n!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(n)}`)}function Pn(n){return n.split("?")[0].split("#")[0]}function rm(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function im(n,e,t){return n.replace(new RegExp(rm(e),"g"),t)}function sm(n,e){let t="",r=0,i=-1,s=0,o=-1;for(let l=0;l<=n.length;++l){if(l<n.length)o=n.charCodeAt(l);else{if(o===47)break;o=47}if(o===47){if(!(i===l-1||s===1))if(i!==l-1&&s===2){if(t.length<2||r!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){const a=t.lastIndexOf("/");if(a!==t.length-1){a===-1?(t="",r=0):(t=t.slice(0,a),r=t.length-1-t.lastIndexOf("/")),i=l,s=0;continue}}else if(t.length===2||t.length===1){t="",r=0,i=l,s=0;continue}}}else t.length>0?t+=`/${n.slice(i+1,l)}`:t=n.slice(i+1,l),r=l-i-1;i=l,s=0}else o===46&&s!==-1?++s:s=-1}return t}const Jn={toPosix(n){return im(n,"\\","/")},isUrl(n){return/^https?:/.test(this.toPosix(n))},isDataUrl(n){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(n)},isBlobUrl(n){return n.startsWith("blob:")},hasProtocol(n){return/^[^/:]+:/.test(this.toPosix(n))},getProtocol(n){We(n),n=this.toPosix(n);const e=/^file:\/\/\//.exec(n);if(e)return e[0];const t=/^[^/:]+:\/{0,2}/.exec(n);return t?t[0]:""},toAbsolute(n,e,t){if(We(n),this.isDataUrl(n)||this.isBlobUrl(n))return n;const r=Pn(this.toPosix(e??Ft.get().getBaseUrl())),i=Pn(this.toPosix(t??this.rootname(r)));return n=this.toPosix(n),n.startsWith("/")?Jn.join(i,n.slice(1)):this.isAbsolute(n)?n:this.join(r,n)},normalize(n){if(We(n),n.length===0)return".";if(this.isDataUrl(n)||this.isBlobUrl(n))return n;n=this.toPosix(n);let e="";const t=n.startsWith("/");this.hasProtocol(n)&&(e=this.rootname(n),n=n.slice(e.length));const r=n.endsWith("/");return n=sm(n),n.length>0&&r&&(n+="/"),t?`/${n}`:e+n},isAbsolute(n){return We(n),n=this.toPosix(n),this.hasProtocol(n)?!0:n.startsWith("/")},join(...n){if(n.length===0)return".";let e;for(let t=0;t<n.length;++t){const r=n[t];if(We(r),r.length>0)if(e===void 0)e=r;else{const i=n[t-1]??"";this.joinExtensions.includes(this.extname(i).toLowerCase())?e+=`/../${r}`:e+=`/${r}`}}return e===void 0?".":this.normalize(e)},dirname(n){if(We(n),n.length===0)return".";n=this.toPosix(n);let e=n.charCodeAt(0);const t=e===47;let r=-1,i=!0;const s=this.getProtocol(n),o=n;n=n.slice(s.length);for(let l=n.length-1;l>=1;--l)if(e=n.charCodeAt(l),e===47){if(!i){r=l;break}}else i=!1;return r===-1?t?"/":this.isUrl(o)?s+n:s:t&&r===1?"//":s+n.slice(0,r)},rootname(n){We(n),n=this.toPosix(n);let e="";if(n.startsWith("/")?e="/":e=this.getProtocol(n),this.isUrl(n)){const t=n.indexOf("/",e.length);t!==-1?e=n.slice(0,t):e=n,e.endsWith("/")||(e+="/")}return e},basename(n,e){We(n),e&&We(e),n=Pn(this.toPosix(n));let t=0,r=-1,i=!0,s;if(e!==void 0&&e.length>0&&e.length<=n.length){if(e.length===n.length&&e===n)return"";let o=e.length-1,l=-1;for(s=n.length-1;s>=0;--s){const a=n.charCodeAt(s);if(a===47){if(!i){t=s+1;break}}else l===-1&&(i=!1,l=s+1),o>=0&&(a===e.charCodeAt(o)?--o===-1&&(r=s):(o=-1,r=l))}return t===r?r=l:r===-1&&(r=n.length),n.slice(t,r)}for(s=n.length-1;s>=0;--s)if(n.charCodeAt(s)===47){if(!i){t=s+1;break}}else r===-1&&(i=!1,r=s+1);return r===-1?"":n.slice(t,r)},extname(n){We(n),n=Pn(this.toPosix(n));let e=-1,t=0,r=-1,i=!0,s=0;for(let o=n.length-1;o>=0;--o){const l=n.charCodeAt(o);if(l===47){if(!i){t=o+1;break}continue}r===-1&&(i=!1,r=o+1),l===46?e===-1?e=o:s!==1&&(s=1):e!==-1&&(s=-1)}return e===-1||r===-1||s===0||s===1&&e===r-1&&e===t+1?"":n.slice(e,r)},parse(n){We(n);const e={root:"",dir:"",base:"",ext:"",name:""};if(n.length===0)return e;n=Pn(this.toPosix(n));let t=n.charCodeAt(0);const r=this.isAbsolute(n);let i;e.root=this.rootname(n),r||this.hasProtocol(n)?i=1:i=0;let s=-1,o=0,l=-1,a=!0,c=n.length-1,u=0;for(;c>=i;--c){if(t=n.charCodeAt(c),t===47){if(!a){o=c+1;break}continue}l===-1&&(a=!1,l=c+1),t===46?s===-1?s=c:u!==1&&(u=1):s!==-1&&(u=-1)}return s===-1||l===-1||u===0||u===1&&s===l-1&&s===o+1?l!==-1&&(o===0&&r?e.base=e.name=n.slice(1,l):e.base=e.name=n.slice(o,l)):(o===0&&r?(e.name=n.slice(1,s),e.base=n.slice(1,l)):(e.name=n.slice(o,s),e.base=n.slice(o,l)),e.ext=n.slice(s,l)),e.dir=this.dirname(n),e},sep:"/",delimiter:":",joinExtensions:[".html"]};function tu(n,e,t,r,i){const s=e[t];for(let o=0;o<s.length;o++){const l=s[o];t<e.length-1?tu(n.replace(r[t],l),e,t+1,r,i):i.push(n.replace(r[t],l))}}function om(n){const e=/\{(.*?)\}/g,t=n.match(e),r=[];if(t){const i=[];t.forEach(s=>{const o=s.substring(1,s.length-1).split(",");i.push(o)}),tu(n,i,0,t,r)}else r.push(n);return r}const sl=n=>!Array.isArray(n);class nu{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(e,t)=>`${e}${this._bundleIdConnector}${t}`,extractAssetIdFromBundle:(e,t)=>t.replace(`${e}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(e){if(this._bundleIdConnector=e.connector??this._bundleIdConnector,this._createBundleAssetId=e.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=e.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...e){e.forEach(t=>{this._preferredOrder.push(t),t.priority||(t.priority=Object.keys(t.params))}),this._resolverHash={}}set basePath(e){this._basePath=e}get basePath(){return this._basePath}set rootPath(e){this._rootPath=e}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(e){if(typeof e=="string")this._defaultSearchParams=e;else{const t=e;this._defaultSearchParams=Object.keys(t).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`).join("&")}}getAlias(e){const{alias:t,src:r}=e;return on(t||r,s=>typeof s=="string"?s:Array.isArray(s)?s.map(o=>(o==null?void 0:o.src)??o):s!=null&&s.src?s.src:s,!0)}addManifest(e){this._manifest&&pt("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=e,e.bundles.forEach(t=>{this.addBundle(t.name,t.assets)})}addBundle(e,t){const r=[];let i=t;Array.isArray(t)||(i=Object.entries(t).map(([s,o])=>typeof o=="string"||Array.isArray(o)?{alias:s,src:o}:{alias:s,...o})),i.forEach(s=>{const o=s.src,l=s.alias;let a;if(typeof l=="string"){const c=this._createBundleAssetId(e,l);r.push(c),a=[l,c]}else{const c=l.map(u=>this._createBundleAssetId(e,u));r.push(...c),a=[...l,...c]}this.add({...s,alias:a,src:o})}),this._bundles[e]=r}add(e){const t=[];Array.isArray(e)?t.push(...e):t.push(e);let r;r=s=>{this.hasKey(s)&&pt(`[Resolver] already has key: ${s} overwriting`)},on(t).forEach(s=>{const{src:o}=s;let{data:l,format:a,loadParser:c}=s;const u=on(o).map(d=>typeof d=="string"?om(d):Array.isArray(d)?d:[d]),f=this.getAlias(s);Array.isArray(f)?f.forEach(r):r(f);const h=[];u.forEach(d=>{d.forEach(m=>{let x={};if(typeof m!="object"){x.src=m;for(let p=0;p<this._parsers.length;p++){const b=this._parsers[p];if(b.test(m)){x=b.parse(m);break}}}else l=m.data??l,a=m.format??a,c=m.loadParser??c,x={...x,...m};if(!f)throw new Error(`[Resolver] alias is undefined for this asset: ${x.src}`);x=this._buildResolvedAsset(x,{aliases:f,data:l,format:a,loadParser:c}),h.push(x)})}),f.forEach(d=>{this._assetMap[d]=h})})}resolveBundle(e){const t=sl(e);e=on(e);const r={};return e.forEach(i=>{const s=this._bundles[i];if(s){const o=this.resolve(s),l={};for(const a in o){const c=o[a];l[this._extractAssetIdFromBundle(i,a)]=c}r[i]=l}}),t?r[e[0]]:r}resolveUrl(e){const t=this.resolve(e);if(typeof e!="string"){const r={};for(const i in t)r[i]=t[i].src;return r}return t.src}resolve(e){const t=sl(e);e=on(e);const r={};return e.forEach(i=>{if(!this._resolverHash[i])if(this._assetMap[i]){let s=this._assetMap[i];const o=this._getPreferredOrder(s);o==null||o.priority.forEach(l=>{o.params[l].forEach(a=>{const c=s.filter(u=>u[l]?u[l]===a:!1);c.length&&(s=c)})}),this._resolverHash[i]=s[0]}else this._resolverHash[i]=this._buildResolvedAsset({alias:[i],src:i},{});r[i]=this._resolverHash[i]}),t?r[e[0]]:r}hasKey(e){return!!this._assetMap[e]}hasBundle(e){return!!this._bundles[e]}_getPreferredOrder(e){for(let t=0;t<e.length;t++){const r=e[0],i=this._preferredOrder.find(s=>s.params.format.includes(r.format));if(i)return i}return this._preferredOrder[0]}_appendDefaultSearchParams(e){if(!this._defaultSearchParams)return e;const t=/\?/.test(e)?"&":"?";return`${e}${t}${this._defaultSearchParams}`}_buildResolvedAsset(e,t){const{aliases:r,data:i,loadParser:s,format:o}=t;return(this._basePath||this._rootPath)&&(e.src=Jn.toAbsolute(e.src,this._basePath,this._rootPath)),e.alias=r??e.alias??[e.src],e.src=this._appendDefaultSearchParams(e.src),e.data={...i||{},...e.data},e.loadParser=s??e.loadParser,e.format=o??e.format??lm(e.src),e}}nu.RETINA_PREFIX=/@([0-9\.]+)x/;function lm(n){return n.split(".").pop().split("?").shift().split("#").shift()}const ol=(n,e)=>{const t=e.split("?")[1];return t&&(n+=`?${t}`),n},ru=class Rn{constructor(e,t){this.linkedSheets=[],this._texture=e instanceof oe?e:null,this.textureSource=e.source,this.textures={},this.animations={},this.data=t;const r=parseFloat(t.meta.scale);r?(this.resolution=r,e.source.resolution=this.resolution):this.resolution=e.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(e=>{this._callback=e,this._batchIndex=0,this._frameKeys.length<=Rn.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(e){let t=e;const r=Rn.BATCH_SIZE;for(;t-e<r&&t<this._frameKeys.length;){const i=this._frameKeys[t],s=this._frames[i],o=s.frame;if(o){let l=null,a=null;const c=s.trimmed!==!1&&s.sourceSize?s.sourceSize:s.frame,u=new we(0,0,Math.floor(c.w)/this.resolution,Math.floor(c.h)/this.resolution);s.rotated?l=new we(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):l=new we(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),s.trimmed!==!1&&s.spriteSourceSize&&(a=new we(Math.floor(s.spriteSourceSize.x)/this.resolution,Math.floor(s.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[i]=new oe({source:this.textureSource,frame:l,orig:u,trim:a,rotate:s.rotated?2:0,defaultAnchor:s.anchor,defaultBorders:s.borders,label:i.toString()})}t++}}_processAnimations(){const e=this.data.animations||{};for(const t in e){this.animations[t]=[];for(let r=0;r<e[t].length;r++){const i=e[t][r];this.animations[t].push(this.textures[i])}}}_parseComplete(){const e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Rn.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Rn.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(e=!1){var t;for(const r in this.textures)this.textures[r].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&((t=this._texture)==null||t.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};ru.BATCH_SIZE=1e3;let ll=ru;const am=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function iu(n,e,t){const r={};if(n.forEach(i=>{r[i]=e}),Object.keys(e.textures).forEach(i=>{r[i]=e.textures[i]}),!t){const i=Jn.dirname(n[0]);e.linkedSheets.forEach((s,o)=>{const l=iu([`${i}/${e.data.meta.related_multi_packs[o]}`],s,!0);Object.assign(r,l)})}return r}const um={extension:he.Asset,cache:{test:n=>n instanceof ll,getCacheableAssets:(n,e)=>iu(n,e,!1)},resolver:{extension:{type:he.ResolveParser,name:"resolveSpritesheet"},test:n=>{const t=n.split("?")[0].split("."),r=t.pop(),i=t.pop();return r==="json"&&am.includes(i)},parse:n=>{var t;const e=n.split(".");return{resolution:parseFloat(((t=nu.RETINA_PREFIX.exec(n))==null?void 0:t[1])??"1"),format:e[e.length-2],src:n}}},loader:{name:"spritesheetLoader",extension:{type:he.LoadParser,priority:eu.Normal,name:"spritesheetLoader"},async testParse(n,e){return Jn.extname(e.src).toLowerCase()===".json"&&!!n.frames},async parse(n,e,t){var c,u;const{texture:r,imageFilename:i}=(e==null?void 0:e.data)??{};let s=Jn.dirname(e.src);s&&s.lastIndexOf("/")!==s.length-1&&(s+="/");let o;if(r instanceof oe)o=r;else{const f=ol(s+(i??n.meta.image),e.src);o=(await t.load([f]))[f]}const l=new ll(o.source,n);await l.parse();const a=(c=n==null?void 0:n.meta)==null?void 0:c.related_multi_packs;if(Array.isArray(a)){const f=[];for(const d of a){if(typeof d!="string")continue;let m=s+d;(u=e.data)!=null&&u.ignoreMultiPack||(m=ol(m,e.src),f.push(t.load({src:m,data:{ignoreMultiPack:!0}})))}const h=await Promise.all(f);l.linkedSheets=h,h.forEach(d=>{d.linkedSheets=[l].concat(l.linkedSheets.filter(m=>m!==d))})}return l},async unload(n,e,t){await t.unload(n.textureSource._sourceOrigin),n.destroy(!1)}}};ot.add(um);const Pi=Object.create(null),al=Object.create(null);function Qs(n,e){let t=al[n];return t===void 0&&(Pi[e]===void 0&&(Pi[e]=1),al[n]=t=Pi[e]++),t}let nn;function su(){return(!nn||nn!=null&&nn.isContextLost())&&(nn=Ft.get().createCanvas().getContext("webgl",{})),nn}let xr;function cm(){if(!xr){xr="mediump";const n=su();n&&n.getShaderPrecisionFormat&&(xr=n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision?"highp":"mediump")}return xr}function fm(n,e,t){return e?n:t?(n=n.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${n}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${n}
        `}function hm(n,e,t){const r=t?e.maxSupportedFragmentPrecision:e.maxSupportedVertexPrecision;if(n.substring(0,9)!=="precision"){let i=t?e.requestedFragmentPrecision:e.requestedVertexPrecision;return i==="highp"&&r!=="highp"&&(i="mediump"),`precision ${i} float;
${n}`}else if(r!=="highp"&&n.substring(0,15)==="precision highp")return n.replace("precision highp","precision mediump");return n}function dm(n,e){return e?`#version 300 es
${n}`:n}const mm={},pm={};function gm(n,{name:e="pixi-program"},t=!0){e=e.replace(/\s+/g,"-"),e+=t?"-fragment":"-vertex";const r=t?mm:pm;return r[e]?(r[e]++,e+=`-${r[e]}`):r[e]=1,n.indexOf("#define SHADER_NAME")!==-1?n:`${`#define SHADER_NAME ${e}`}
${n}`}function xm(n,e){return e?n.replace("#version 300 es",""):n}const Ai={stripVersion:xm,ensurePrecision:hm,addProgramDefines:fm,setProgramName:gm,insertVersion:dm},Fi=Object.create(null),ou=class os{constructor(e){e={...os.defaultOptions,...e};const t=e.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:t,ensurePrecision:{requestedFragmentPrecision:e.preferredFragmentPrecision,requestedVertexPrecision:e.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:cm()},setProgramName:{name:e.name},addProgramDefines:t,insertVersion:t};let i=e.fragment,s=e.vertex;Object.keys(Ai).forEach(o=>{const l=r[o];i=Ai[o](i,l,!0),s=Ai[o](s,l,!1)}),this.fragment=i,this.vertex=s,this._key=Qs(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(e){const t=`${e.vertex}:${e.fragment}`;return Fi[t]||(Fi[t]=new os(e)),Fi[t]}};ou.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let re=ou;const ul={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function vm(n){return ul[n]??ul.float32}const ym={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function _m({source:n,entryPoint:e}){const t={},r=n.indexOf(`fn ${e}`);if(r!==-1){const i=n.indexOf("->",r);if(i!==-1){const s=n.substring(r,i),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let l;for(;(l=o.exec(s))!==null;){const a=ym[l[3]]??"float32";t[l[2]]={location:parseInt(l[1],10),format:a,stride:vm(a).stride,offset:0,instance:!1,start:0}}}}return t}function Mi(n){var f,h;const e=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,t=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,i=/var(<[^>]+>)? (\w+)/,s=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,l=/(\w+)\s*:\s*([\w\<\>]+)/g,a=/struct\s+(\w+)/,c=(f=n.match(e))==null?void 0:f.map(d=>({group:parseInt(d.match(t)[1],10),binding:parseInt(d.match(r)[1],10),name:d.match(i)[2],isUniform:d.match(i)[1]==="<uniform>",type:d.match(s)[1]}));if(!c)return{groups:[],structs:[]};const u=((h=n.match(o))==null?void 0:h.map(d=>{const m=d.match(a)[1],x=d.match(l).reduce((p,b)=>{const[_,y]=b.split(":");return p[_.trim()]=y.trim(),p},{});return x?{name:m,members:x}:null}).filter(({name:d})=>c.some(m=>m.type===d)))??[];return{groups:c,structs:u}}var Un=(n=>(n[n.VERTEX=1]="VERTEX",n[n.FRAGMENT=2]="FRAGMENT",n[n.COMPUTE=4]="COMPUTE",n))(Un||{});function bm({groups:n}){const e=[];for(let t=0;t<n.length;t++){const r=n[t];e[r.group]||(e[r.group]=[]),r.isUniform?e[r.group].push({binding:r.binding,visibility:Un.VERTEX|Un.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?e[r.group].push({binding:r.binding,visibility:Un.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&e[r.group].push({binding:r.binding,visibility:Un.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return e}function Sm({groups:n}){const e=[];for(let t=0;t<n.length;t++){const r=n[t];e[r.group]||(e[r.group]={}),e[r.group][r.name]=r.binding}return e}function Cm(n,e){const t=new Set,r=new Set,i=[...n.structs,...e.structs].filter(o=>t.has(o.name)?!1:(t.add(o.name),!0)),s=[...n.groups,...e.groups].filter(o=>{const l=`${o.name}-${o.binding}`;return r.has(l)?!1:(r.add(l),!0)});return{structs:i,groups:s}}const Ii=Object.create(null);class J{constructor(e){var l,a;this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:t,vertex:r,layout:i,gpuLayout:s,name:o}=e;if(this.name=o,this.fragment=t,this.vertex=r,t.source===r.source){const c=Mi(t.source);this.structsAndGroups=c}else{const c=Mi(r.source),u=Mi(t.source);this.structsAndGroups=Cm(c,u)}this.layout=i??Sm(this.structsAndGroups),this.gpuLayout=s??bm(this.structsAndGroups),this.autoAssignGlobalUniforms=((l=this.layout[0])==null?void 0:l.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((a=this.layout[1])==null?void 0:a.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:e,fragment:t}=this,r=e.source+t.source+e.entryPoint+t.entryPoint;this._layoutKey=Qs(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=_m(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(e){const t=`${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`;return Ii[t]||(Ii[t]=new J(e)),Ii[t]}}const lu=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],wm=lu.reduce((n,e)=>(n[e]=!0,n),{});function Tm(n,e){switch(n){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*e);case"vec3<f32>":return new Float32Array(3*e);case"vec4<f32>":return new Float32Array(4*e);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const au=class uu{constructor(e,t){this._touched=0,this.uid=_e("uniform"),this._resourceType="uniformGroup",this._resourceId=_e("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,t={...uu.defaultOptions,...t},this.uniformStructures=e;const r={};for(const i in e){const s=e[i];if(s.name=i,s.size=s.size??1,!wm[s.type])throw new Error(`Uniform type ${s.type} is not supported. Supported uniform types are: ${lu.join(", ")}`);s.value??(s.value=Tm(s.type,s.size)),r[i]=s.value}this.uniforms=r,this._dirtyId=1,this.ubo=t.ubo,this.isStatic=t.isStatic,this._signature=Qs(Object.keys(r).map(i=>`${i}-${e[i].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};au.defaultOptions={ubo:!1,isStatic:!1};let cu=au;class Mr{constructor(e){this.resources=Object.create(null),this._dirty=!0;let t=0;for(const r in e){const i=e[r];this.setResource(i,t++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const e=[];let t=0;for(const r in this.resources)e[t++]=this.resources[r]._resourceId;this._key=e.join("|")}setResource(e,t){var i,s;const r=this.resources[t];e!==r&&(r&&((i=e.off)==null||i.call(e,"change",this.onResourceChange,this)),(s=e.on)==null||s.call(e,"change",this.onResourceChange,this),this.resources[t]=e,this._dirty=!0)}getResource(e){return this.resources[e]}_touch(e){const t=this.resources;for(const r in t)t[r]._touched=e}destroy(){var t;const e=this.resources;for(const r in e){const i=e[r];(t=i.off)==null||t.call(i,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(e){if(this._dirty=!0,e.destroyed){const t=this.resources;for(const r in t)t[r]===e&&(t[r]=null)}else this._updateKey()}}var er=(n=>(n[n.WEBGL=1]="WEBGL",n[n.WEBGPU=2]="WEBGPU",n[n.BOTH=3]="BOTH",n))(er||{});class Js extends xt{constructor(e){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:t,glProgram:r,groups:i,resources:s,compatibleRenderers:o,groupMap:l}=e;this.gpuProgram=t,this.glProgram=r,o===void 0&&(o=0,t&&(o|=er.WEBGPU),r&&(o|=er.WEBGL)),this.compatibleRenderers=o;const a={};if(!s&&!i&&(s={}),s&&i)throw new Error("[Shader] Cannot have both resources and groups");if(!t&&i&&!l)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!t&&i&&l)for(const c in l)for(const u in l[c]){const f=l[c][u];a[f]={group:c,binding:u,name:f}}else if(t&&i&&!l){const c=t.structsAndGroups.groups;l={},c.forEach(u=>{l[u.group]=l[u.group]||{},l[u.group][u.binding]=u.name,a[u.name]=u})}else if(s){i={},l={},t&&t.structsAndGroups.groups.forEach(f=>{l[f.group]=l[f.group]||{},l[f.group][f.binding]=f.name,a[f.name]=f});let c=0;for(const u in s)a[u]||(i[99]||(i[99]=new Mr,this._ownedBindGroups.push(i[99])),a[u]={group:99,binding:c,name:u},l[99]=l[99]||{},l[99][c]=u,c++);for(const u in s){const f=u;let h=s[u];!h.source&&!h._resourceType&&(h=new cu(h));const d=a[f];d&&(i[d.group]||(i[d.group]=new Mr,this._ownedBindGroups.push(i[d.group])),i[d.group].setResource(h,d.binding))}}this.groups=i,this._uniformBindMap=l,this.resources=this._buildResourceAccessor(i,a)}addResource(e,t,r){var i,s;(i=this._uniformBindMap)[t]||(i[t]={}),(s=this._uniformBindMap[t])[r]||(s[r]=e),this.groups[t]||(this.groups[t]=new Mr,this._ownedBindGroups.push(this.groups[t]))}_buildResourceAccessor(e,t){const r={};for(const i in t){const s=t[i];Object.defineProperty(r,s.name,{get(){return e[s.group].getResource(s.binding)},set(o){e[s.group].setResource(o,s.binding)}})}return r}destroy(e=!1){var t,r;this.emit("destroy",this),e&&((t=this.gpuProgram)==null||t.destroy(),(r=this.glProgram)==null||r.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(i=>{i.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(e){const{gpu:t,gl:r,...i}=e;let s,o;return t&&(s=J.from(t)),r&&(o=re.from(r)),new Js({gpuProgram:s,glProgram:o,...i})}}const Pm={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},zi=0,Oi=1,Ei=2,Ri=3,Ui=4,Li=5,ls=class fu{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<zi)}set blend(e){!!(this.data&1<<zi)!==e&&(this.data^=1<<zi)}get offsets(){return!!(this.data&1<<Oi)}set offsets(e){!!(this.data&1<<Oi)!==e&&(this.data^=1<<Oi)}set cullMode(e){if(e==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=e==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Ei)}set culling(e){!!(this.data&1<<Ei)!==e&&(this.data^=1<<Ei)}get depthTest(){return!!(this.data&1<<Ri)}set depthTest(e){!!(this.data&1<<Ri)!==e&&(this.data^=1<<Ri)}get depthMask(){return!!(this.data&1<<Li)}set depthMask(e){!!(this.data&1<<Li)!==e&&(this.data^=1<<Li)}get clockwiseFrontFace(){return!!(this.data&1<<Ui)}set clockwiseFrontFace(e){!!(this.data&1<<Ui)!==e&&(this.data^=1<<Ui)}get blendMode(){return this._blendMode}set blendMode(e){this.blend=e!=="none",this._blendMode=e,this._blendModeId=Pm[e]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const e=new fu;return e.depthTest=!1,e.blend=!0,e}};ls.default2d=ls.for2d();let Am=ls;const hu=class as extends Js{constructor(e){e={...as.defaultOptions,...e},super(e),this.enabled=!0,this._state=Am.for2d(),this.blendMode=e.blendMode,this.padding=e.padding,typeof e.antialias=="boolean"?this.antialias=e.antialias?"on":"off":this.antialias=e.antialias,this.resolution=e.resolution,this.blendRequired=e.blendRequired,this.addResource("uTexture",0,1)}apply(e,t,r,i){e.applyFilter(this,t,r,i)}get blendMode(){return this._state.blendMode}set blendMode(e){this._state.blendMode=e}static from(e){const{gpu:t,gl:r,...i}=e;let s,o;return t&&(s=J.from(t)),r&&(o=re.from(r)),new as({gpuProgram:s,glProgram:o,...i})}};hu.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1};let ie=hu;const us=[];ot.handleByNamedList(he.Environment,us);async function Fm(n){if(!n)for(let e=0;e<us.length;e++){const t=us[e];if(t.value.test()){await t.value.load();return}}}let An;function Mm(){if(typeof An=="boolean")return An;try{An=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{An=!1}return An}var eo={exports:{}};eo.exports=ni;eo.exports.default=ni;function ni(n,e,t){t=t||2;var r=e&&e.length,i=r?e[0]*t:n.length,s=du(n,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;var l,a,c,u,f,h,d;if(r&&(s=Rm(n,e,s,t)),n.length>80*t){l=c=n[0],a=u=n[1];for(var m=t;m<i;m+=t)f=n[m],h=n[m+1],f<l&&(l=f),h<a&&(a=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-l,u-a),d=d!==0?32767/d:0}return tr(s,o,t,l,a,d,0),o}function du(n,e,t,r,i){var s,o;if(i===hs(n,e,t,r)>0)for(s=e;s<t;s+=r)o=cl(s,n[s],n[s+1],o);else for(s=t-r;s>=e;s-=r)o=cl(s,n[s],n[s+1],o);return o&&ri(o,o.next)&&(rr(o),o=o.next),o}function Qt(n,e){if(!n)return n;e||(e=n);var t=n,r;do if(r=!1,!t.steiner&&(ri(t,t.next)||xe(t.prev,t,t.next)===0)){if(rr(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function tr(n,e,t,r,i,s,o){if(n){!o&&s&&Gm(n,r,i,s);for(var l=n,a,c;n.prev!==n.next;){if(a=n.prev,c=n.next,s?zm(n,r,i,s):Im(n)){e.push(a.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),rr(n),n=c.next,l=c.next;continue}if(n=c,n===l){o?o===1?(n=Om(Qt(n),e,t),tr(n,e,t,r,i,s,2)):o===2&&Em(n,e,t,r,i,s):tr(Qt(n),e,t,r,i,s,1);break}}}}function Im(n){var e=n.prev,t=n,r=n.next;if(xe(e,t,r)>=0)return!1;for(var i=e.x,s=t.x,o=r.x,l=e.y,a=t.y,c=r.y,u=i<s?i<o?i:o:s<o?s:o,f=l<a?l<c?l:c:a<c?a:c,h=i>s?i>o?i:o:s>o?s:o,d=l>a?l>c?l:c:a>c?a:c,m=r.next;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&hn(i,l,s,a,o,c,m.x,m.y)&&xe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function zm(n,e,t,r){var i=n.prev,s=n,o=n.next;if(xe(i,s,o)>=0)return!1;for(var l=i.x,a=s.x,c=o.x,u=i.y,f=s.y,h=o.y,d=l<a?l<c?l:c:a<c?a:c,m=u<f?u<h?u:h:f<h?f:h,x=l>a?l>c?l:c:a>c?a:c,p=u>f?u>h?u:h:f>h?f:h,b=cs(d,m,e,t,r),_=cs(x,p,e,t,r),y=n.prevZ,w=n.nextZ;y&&y.z>=b&&w&&w.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&hn(l,u,a,f,c,h,y.x,y.y)&&xe(y.prev,y,y.next)>=0||(y=y.prevZ,w.x>=d&&w.x<=x&&w.y>=m&&w.y<=p&&w!==i&&w!==o&&hn(l,u,a,f,c,h,w.x,w.y)&&xe(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;y&&y.z>=b;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&hn(l,u,a,f,c,h,y.x,y.y)&&xe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;w&&w.z<=_;){if(w.x>=d&&w.x<=x&&w.y>=m&&w.y<=p&&w!==i&&w!==o&&hn(l,u,a,f,c,h,w.x,w.y)&&xe(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Om(n,e,t){var r=n;do{var i=r.prev,s=r.next.next;!ri(i,s)&&mu(i,r,r.next,s)&&nr(i,s)&&nr(s,i)&&(e.push(i.i/t|0),e.push(r.i/t|0),e.push(s.i/t|0),rr(r),rr(r.next),r=n=s),r=r.next}while(r!==n);return Qt(r)}function Em(n,e,t,r,i,s){var o=n;do{for(var l=o.next.next;l!==o.prev;){if(o.i!==l.i&&$m(o,l)){var a=pu(o,l);o=Qt(o,o.next),a=Qt(a,a.next),tr(o,e,t,r,i,s,0),tr(a,e,t,r,i,s,0);return}l=l.next}o=o.next}while(o!==n)}function Rm(n,e,t,r){var i=[],s,o,l,a,c;for(s=0,o=e.length;s<o;s++)l=e[s]*r,a=s<o-1?e[s+1]*r:n.length,c=du(n,l,a,r,!1),c===c.next&&(c.steiner=!0),i.push(Nm(c));for(i.sort(Um),s=0;s<i.length;s++)t=Lm(i[s],t);return t}function Um(n,e){return n.x-e.x}function Lm(n,e){var t=Dm(n,e);if(!t)return e;var r=pu(t,n);return Qt(r,r.next),Qt(t,t.next)}function Dm(n,e){var t=e,r=n.x,i=n.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var l=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(l<=r&&l>s&&(s=l,o=t.x<t.next.x?t:t.next,l===r))return o}t=t.next}while(t!==e);if(!o)return null;var a=o,c=o.x,u=o.y,f=1/0,h;t=o;do r>=t.x&&t.x>=c&&r!==t.x&&hn(i<u?r:s,i,c,u,i<u?s:r,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(r-t.x),nr(t,n)&&(h<f||h===f&&(t.x>o.x||t.x===o.x&&Bm(o,t)))&&(o=t,f=h)),t=t.next;while(t!==a);return o}function Bm(n,e){return xe(n.prev,n,e.prev)<0&&xe(e.next,n,n.next)<0}function Gm(n,e,t,r){var i=n;do i.z===0&&(i.z=cs(i.x,i.y,e,t,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==n);i.prevZ.nextZ=null,i.prevZ=null,km(i)}function km(n){var e,t,r,i,s,o,l,a,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,r=t,l=0,e=0;e<c&&(l++,r=r.nextZ,!!r);e++);for(a=c;l>0||a>0&&r;)l!==0&&(a===0||!r||t.z<=r.z)?(i=t,t=t.nextZ,l--):(i=r,r=r.nextZ,a--),s?s.nextZ=i:n=i,i.prevZ=s,s=i;t=r}s.nextZ=null,c*=2}while(o>1);return n}function cs(n,e,t,r,i){return n=(n-t)*i|0,e=(e-r)*i|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Nm(n){var e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function hn(n,e,t,r,i,s,o,l){return(i-o)*(e-l)>=(n-o)*(s-l)&&(n-o)*(r-l)>=(t-o)*(e-l)&&(t-o)*(s-l)>=(i-o)*(r-l)}function $m(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Vm(n,e)&&(nr(n,e)&&nr(e,n)&&Xm(n,e)&&(xe(n.prev,n,e.prev)||xe(n,e.prev,e))||ri(n,e)&&xe(n.prev,n,n.next)>0&&xe(e.prev,e,e.next)>0)}function xe(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ri(n,e){return n.x===e.x&&n.y===e.y}function mu(n,e,t,r){var i=yr(xe(n,e,t)),s=yr(xe(n,e,r)),o=yr(xe(t,r,n)),l=yr(xe(t,r,e));return!!(i!==s&&o!==l||i===0&&vr(n,t,e)||s===0&&vr(n,r,e)||o===0&&vr(t,n,r)||l===0&&vr(t,e,r))}function vr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function yr(n){return n>0?1:n<0?-1:0}function Vm(n,e){var t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&mu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function nr(n,e){return xe(n.prev,n,n.next)<0?xe(n,e,n.next)>=0&&xe(n,n.prev,e)>=0:xe(n,e,n.prev)<0||xe(n,n.next,e)<0}function Xm(n,e){var t=n,r=!1,i=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==n);return r}function pu(n,e){var t=new fs(n.i,n.x,n.y),r=new fs(e.i,e.x,e.y),i=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=i,i.prev=t,r.next=t,t.prev=r,s.next=r,r.prev=s,r}function cl(n,e,t,r){var i=new fs(n,e,t);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function rr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function fs(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}ni.deviation=function(n,e,t,r){var i=e&&e.length,s=i?e[0]*t:n.length,o=Math.abs(hs(n,0,s,t));if(i)for(var l=0,a=e.length;l<a;l++){var c=e[l]*t,u=l<a-1?e[l+1]*t:n.length;o-=Math.abs(hs(n,c,u,t))}var f=0;for(l=0;l<r.length;l+=3){var h=r[l]*t,d=r[l+1]*t,m=r[l+2]*t;f+=Math.abs((n[h]-n[m])*(n[d+1]-n[h+1])-(n[h]-n[d])*(n[m+1]-n[h+1]))}return o===0&&f===0?0:Math.abs((f-o)/o)};function hs(n,e,t,r){for(var i=0,s=e,o=t-r;s<t;s+=r)i+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return i}ni.flatten=function(n){for(var e=n[0][0].length,t={vertices:[],holes:[],dimensions:e},r=0,i=0;i<n.length;i++){for(var s=0;s<n[i].length;s++)for(var o=0;o<e;o++)t.vertices.push(n[i][s][o]);i>0&&(r+=n[i-1].length,t.holes.push(r))}return t};var Hm=eo.exports;const Ym=qs(Hm);var gu=(n=>(n[n.NONE=0]="NONE",n[n.COLOR=16384]="COLOR",n[n.STENCIL=1024]="STENCIL",n[n.DEPTH=256]="DEPTH",n[n.COLOR_DEPTH=16640]="COLOR_DEPTH",n[n.COLOR_STENCIL=17408]="COLOR_STENCIL",n[n.DEPTH_STENCIL=1280]="DEPTH_STENCIL",n[n.ALL=17664]="ALL",n))(gu||{});class Wm{constructor(e){this.items=[],this._name=e}emit(e,t,r,i,s,o,l,a){const{name:c,items:u}=this;for(let f=0,h=u.length;f<h;f++)u[f][c](e,t,r,i,s,o,l,a);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const t=this.items.indexOf(e);return t!==-1&&this.items.splice(t,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const jm=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],xu=class vu extends xt{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const t=[...jm,...this.config.runners??[]];this._addRunners(...t),this._unsafeEvalCheck()}async init(e={}){const t=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Fm(t),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)e={...this._systemsHash[r].constructor.defaultOptions,...e};e={...vu.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(e);this._initOptions=e}render(e,t){let r=e;if(r instanceof Be&&(r={container:r},t&&(j(ve,"passing a second argument is deprecated, please use render options instead"),r.target=t.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const i=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=i?r.clearColor:de.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(e,t,r){this.view.resize(e,t,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution)}clear(e={}){const t=this;e.target||(e.target=t.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=gu.ALL);const{clear:r,clearColor:i,target:s}=e;de.shared.setValue(i??this.background.colorRgba),t.renderTarget.clear(s,r,de.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(t=>{this.runners[t]=new Wm(t)})}_addSystems(e){let t;for(t in e){const r=e[t];this._addSystem(r.value,r.name)}}_addSystem(e,t){const r=new e(this);if(this[t])throw new Error(`Whoops! The name "${t}" is already in use`);this[t]=r,this._systemsHash[t]=r;for(const i in this.runners)this.runners[i].add(r);return this}_addPipes(e,t){const r=t.reduce((i,s)=>(i[s.name]=s.value,i),{});e.forEach(i=>{const s=i.value,o=i.name,l=r[o];this.renderPipes[o]=new s(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(t=>{t.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Mm())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};xu.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let yu=xu,_r;function qm(n){return _r!==void 0||(_r=(()=>{var t;const e={stencil:!0,failIfMajorPerformanceCaveat:n??yu.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Ft.get().getWebGLRenderingContext())return!1;let i=Ft.get().createCanvas().getContext("webgl",e);const s=!!((t=i==null?void 0:i.getContextAttributes())!=null&&t.stencil);if(i){const o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,s}catch{return!1}})()),_r}let br;async function Km(n={}){return br!==void 0||(br=await(async()=>{const e=Ft.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(n)).requestDevice(),!0}catch{return!1}})()),br}const fl=["webgl","webgpu","canvas"];async function Zm(n){let e=[];n.preference?(e.push(n.preference),fl.forEach(s=>{s!==n.preference&&e.push(s)})):e=fl.slice();let t,r={};for(let s=0;s<e.length;s++){const o=e[s];if(o==="webgpu"&&await Km()){const{WebGPURenderer:l}=await Nr(async()=>{const{WebGPURenderer:a}=await import("./WebGPURenderer-CFtntYgz.js");return{WebGPURenderer:a}},__vite__mapDeps([5,2,6,3]));t=l,r={...n,...n.webgpu};break}else if(o==="webgl"&&qm(n.failIfMajorPerformanceCaveat??yu.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await Nr(async()=>{const{WebGLRenderer:a}=await import("./WebGLRenderer-Ck3QXbb3.js");return{WebGLRenderer:a}},__vite__mapDeps([7,2,4,6]));t=l,r={...n,...n.webgl};break}else if(o==="canvas")throw r={...n},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!t)throw new Error("No available renderer for the current environment");const i=new t;return await i.init(r),i}class _u{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this)}static destroy(){}}_u.extension=he.Application;class Qm{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer)}destroy(){this._renderer=null}}Qm.extension={type:[he.WebGLSystem,he.WebGPUSystem],name:"initHook",priority:-10};const bu=class ds{constructor(...e){this.stage=new Be,e[0]!==void 0&&j(ve,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Zm(e),ds._plugins.forEach(t=>{t.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return j(ve,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,t=!1){const r=ds._plugins.slice(0);r.reverse(),r.forEach(i=>{i.destroy.call(this)}),this.stage.destroy(t),this.stage=null,this.renderer.destroy(e),this.renderer=null}};bu._plugins=[];let Su=bu;ot.handleByList(he.Application,Su._plugins);ot.add(_u);const Cu=class ms{constructor(e,t,r,i){this.uid=_e("fillGradient"),this.type="linear",this.gradientStops=[],this._styleKey=null,this.x0=e,this.y0=t,this.x1=r,this.y1=i}addColorStop(e,t){return this.gradientStops.push({offset:e,color:de.shared.setValue(t).toHexa()}),this._styleKey=null,this}buildLinearGradient(){const e=ms.defaultTextureSize,{gradientStops:t}=this,r=Ft.get().createCanvas();r.width=e,r.height=e;const i=r.getContext("2d"),s=i.createLinearGradient(0,0,ms.defaultTextureSize,1);for(let x=0;x<t.length;x++){const p=t[x];s.addColorStop(p.offset,p.color)}i.fillStyle=s,i.fillRect(0,0,e,e),this.texture=new oe({source:new ei({resource:r,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:l,x1:a,y1:c}=this,u=new fe,f=a-o,h=c-l,d=Math.sqrt(f*f+h*h),m=Math.atan2(h,f);u.translate(-o,-l),u.scale(1/e,1/e),u.rotate(-m),u.scale(256/d,1),this.transform=u,this._styleKey=null}get styleKey(){if(this._styleKey)return this._styleKey;const e=this.gradientStops.map(i=>`${i.offset}-${i.color}`).join("-"),t=this.texture.uid,r=this.transform.toArray().join("-");return`fill-gradient-${this.uid}-${e}-${t}-${r}-${this.x0}-${this.y0}-${this.x1}-${this.y1}`}};Cu.defaultTextureSize=256;let Jm=Cu;const hl={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class ep{constructor(e,t){this.uid=_e("fillPattern"),this.transform=new fe,this._styleKey=null,this.texture=e,this.transform.scale(1/e.frame.width,1/e.frame.height),t&&(e.source.style.addressModeU=hl[t].addressModeU,e.source.style.addressModeV=hl[t].addressModeV)}setTransform(e){const t=this.texture;this.transform.copyFrom(e),this.transform.invert(),this.transform.scale(1/t.frame.width,1/t.frame.height),this._styleKey=null}get styleKey(){return this._styleKey?this._styleKey:(this._styleKey=`fill-pattern-${this.uid}-${this.texture.uid}-${this.transform.toArray().join("-")}`,this._styleKey)}}var tp=rp,Di={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},np=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function rp(n){var e=[];return n.replace(np,function(t,r,i){var s=r.toLowerCase();for(i=sp(i),s=="m"&&i.length>2&&(e.push([r].concat(i.splice(0,2))),s="l",r=r=="m"?"l":"L");;){if(i.length==Di[s])return i.unshift(r),e.push(i);if(i.length<Di[s])throw new Error("malformed path data");e.push([r].concat(i.splice(0,Di[s])))}}),e}var ip=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function sp(n){var e=n.match(ip);return e?e.map(Number):[]}const op=qs(tp);function lp(n,e){const t=op(n),r=[];let i=null,s=0,o=0;for(let l=0;l<t.length;l++){const a=t[l],c=a[0],u=a;switch(c){case"M":s=u[1],o=u[2],e.moveTo(s,o);break;case"m":s+=u[1],o+=u[2],e.moveTo(s,o);break;case"H":s=u[1],e.lineTo(s,o);break;case"h":s+=u[1],e.lineTo(s,o);break;case"V":o=u[1],e.lineTo(s,o);break;case"v":o+=u[1],e.lineTo(s,o);break;case"L":s=u[1],o=u[2],e.lineTo(s,o);break;case"l":s+=u[1],o+=u[2],e.lineTo(s,o);break;case"C":s=u[5],o=u[6],e.bezierCurveTo(u[1],u[2],u[3],u[4],s,o);break;case"c":e.bezierCurveTo(s+u[1],o+u[2],s+u[3],o+u[4],s+u[5],o+u[6]),s+=u[5],o+=u[6];break;case"S":s=u[3],o=u[4],e.bezierCurveToShort(u[1],u[2],s,o);break;case"s":e.bezierCurveToShort(s+u[1],o+u[2],s+u[3],o+u[4]),s+=u[3],o+=u[4];break;case"Q":s=u[3],o=u[4],e.quadraticCurveTo(u[1],u[2],s,o);break;case"q":e.quadraticCurveTo(s+u[1],o+u[2],s+u[3],o+u[4]),s+=u[3],o+=u[4];break;case"T":s=u[1],o=u[2],e.quadraticCurveToShort(s,o);break;case"t":s+=u[1],o+=u[2],e.quadraticCurveToShort(s,o);break;case"A":s=u[6],o=u[7],e.arcToSvg(u[1],u[2],u[3],u[4],u[5],s,o);break;case"a":s+=u[6],o+=u[7],e.arcToSvg(u[1],u[2],u[3],u[4],u[5],s,o);break;case"Z":case"z":e.closePath(),r.length>0&&(i=r.pop(),i?(s=i.startX,o=i.startY):(s=0,o=0)),i=null;break;default:pt(`Unknown SVG path command: ${c}`)}c!=="Z"&&c!=="z"&&i===null&&(i={startX:s,startY:o},r.push(i))}return e}class to{constructor(e=0,t=0,r=0){this.type="circle",this.x=e,this.y=t,this.radius=r}clone(){return new to(this.x,this.y,this.radius)}contains(e,t){if(this.radius<=0)return!1;const r=this.radius*this.radius;let i=this.x-e,s=this.y-t;return i*=i,s*=s,i+s<=r}strokeContains(e,t,r){if(this.radius===0)return!1;const i=this.x-e,s=this.y-t,o=this.radius,l=r/2,a=Math.sqrt(i*i+s*s);return a<o+l&&a>o-l}getBounds(e){return e=e||new we,e.x=this.x-this.radius,e.y=this.y-this.radius,e.width=this.radius*2,e.height=this.radius*2,e}copyFrom(e){return this.x=e.x,this.y=e.y,this.radius=e.radius,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class no{constructor(e=0,t=0,r=0,i=0){this.type="ellipse",this.x=e,this.y=t,this.halfWidth=r,this.halfHeight=i}clone(){return new no(this.x,this.y,this.halfWidth,this.halfHeight)}contains(e,t){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let r=(e-this.x)/this.halfWidth,i=(t-this.y)/this.halfHeight;return r*=r,i*=i,r+i<=1}strokeContains(e,t,r){const{halfWidth:i,halfHeight:s}=this;if(i<=0||s<=0)return!1;const o=r/2,l=i-o,a=s-o,c=i+o,u=s+o,f=e-this.x,h=t-this.y,d=f*f/(l*l)+h*h/(a*a),m=f*f/(c*c)+h*h/(u*u);return d>1&&m<=1}getBounds(e){return e=e||new we,e.x=this.x-this.halfWidth,e.y=this.y-this.halfHeight,e.width=this.halfWidth*2,e.height=this.halfHeight*2,e}copyFrom(e){return this.x=e.x,this.y=e.y,this.halfWidth=e.halfWidth,this.halfHeight=e.halfHeight,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function ap(n,e,t,r,i,s){const o=n-t,l=e-r,a=i-t,c=s-r,u=o*a+l*c,f=a*a+c*c;let h=-1;f!==0&&(h=u/f);let d,m;h<0?(d=t,m=r):h>1?(d=i,m=s):(d=t+h*a,m=r+h*c);const x=n-d,p=e-m;return x*x+p*p}class Xn{constructor(...e){this.type="polygon";let t=Array.isArray(e[0])?e[0]:e;if(typeof t[0]!="number"){const r=[];for(let i=0,s=t.length;i<s;i++)r.push(t[i].x,t[i].y);t=r}this.points=t,this.closePath=!0}clone(){const e=this.points.slice(),t=new Xn(e);return t.closePath=this.closePath,t}contains(e,t){let r=!1;const i=this.points.length/2;for(let s=0,o=i-1;s<i;o=s++){const l=this.points[s*2],a=this.points[s*2+1],c=this.points[o*2],u=this.points[o*2+1];a>t!=u>t&&e<(c-l)*((t-a)/(u-a))+l&&(r=!r)}return r}strokeContains(e,t,r){const i=r/2,s=i*i,{points:o}=this,l=o.length-(this.closePath?0:2);for(let a=0;a<l;a+=2){const c=o[a],u=o[a+1],f=o[(a+2)%o.length],h=o[(a+3)%o.length];if(ap(e,t,c,u,f,h)<=s)return!0}return!1}getBounds(e){e=e||new we;const t=this.points;let r=1/0,i=-1/0,s=1/0,o=-1/0;for(let l=0,a=t.length;l<a;l+=2){const c=t[l],u=t[l+1];r=c<r?c:r,i=c>i?c:i,s=u<s?u:s,o=u>o?u:o}return e.x=r,e.width=i-r,e.y=s,e.height=o-s,e}copyFrom(e){return this.points=e.points.slice(),this.closePath=e.closePath,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((e,t)=>`${e}, ${t}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const Sr=(n,e,t,r,i,s)=>{const o=n-t,l=e-r,a=Math.sqrt(o*o+l*l);return a>=i-s&&a<=i+s};class ro{constructor(e=0,t=0,r=0,i=0,s=20){this.type="roundedRectangle",this.x=e,this.y=t,this.width=r,this.height=i,this.radius=s}getBounds(e){return e=e||new we,e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e}clone(){return new ro(this.x,this.y,this.width,this.height,this.radius)}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.copyFrom(this),e}contains(e,t){if(this.width<=0||this.height<=0)return!1;if(e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height){const r=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(t>=this.y+r&&t<=this.y+this.height-r||e>=this.x+r&&e<=this.x+this.width-r)return!0;let i=e-(this.x+r),s=t-(this.y+r);const o=r*r;if(i*i+s*s<=o||(i=e-(this.x+this.width-r),i*i+s*s<=o)||(s=t-(this.y+this.height-r),i*i+s*s<=o)||(i=e-(this.x+r),i*i+s*s<=o))return!0}return!1}strokeContains(e,t,r){const{x:i,y:s,width:o,height:l,radius:a}=this,c=r/2,u=i+a,f=s+a,h=o-a*2,d=l-a*2,m=i+o,x=s+l;return(e>=i-c&&e<=i+c||e>=m-c&&e<=m+c)&&t>=f&&t<=f+d||(t>=s-c&&t<=s+c||t>=x-c&&t<=x+c)&&e>=u&&e<=u+h?!0:e<u&&t<f&&Sr(e,t,u,f,a,c)||e>m-a&&t<f&&Sr(e,t,m-a,f,a,c)||e>m-a&&t>x-a&&Sr(e,t,m-a,x-a,a,c)||e<u&&t>x-a&&Sr(e,t,u,x-a,a,c)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}const up=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function cp(n){let e="";for(let t=0;t<n;++t)t>0&&(e+=`
else `),t<n-1&&(e+=`if(test == ${t}.0){}`);return e}function fp(n,e){if(n===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const t=e.createShader(e.FRAGMENT_SHADER);try{for(;;){const r=up.replace(/%forloop%/gi,cp(n));if(e.shaderSource(t,r),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))n=n/2|0;else break}}finally{e.deleteShader(t)}return n}let rn=null;function wu(){var e;if(rn)return rn;const n=su();return rn=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),rn=fp(rn,n),(e=n.getExtension("WEBGL_lose_context"))==null||e.loseContext(),rn}const Tu={};function hp(n,e){let t=2166136261;for(let r=0;r<e;r++)t^=n[r].uid,t=Math.imul(t,16777619),t>>>=0;return Tu[t]||dp(n,e,t)}let Bi=0;function dp(n,e,t){const r={};let i=0;Bi||(Bi=wu());for(let o=0;o<Bi;o++){const l=o<e?n[o]:oe.EMPTY.source;r[i++]=l.source,r[i++]=l.style}const s=new Mr(r);return Tu[t]=s,s}class dl{constructor(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${e} isn't a valid view type`)}}}function ml(n,e){const t=n.byteLength/8|0,r=new Float64Array(n,0,t);new Float64Array(e,0,t).set(r);const s=n.byteLength-t*8;if(s>0){const o=new Uint8Array(n,t*8,s);new Uint8Array(e,t*8,s).set(o)}}const mp={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var pp=(n=>(n[n.DISABLED=0]="DISABLED",n[n.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",n[n.MASK_ACTIVE=2]="MASK_ACTIVE",n[n.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",n[n.NONE=4]="NONE",n))(pp||{});function pl(n,e){return e.alphaMode==="no-premultiply-alpha"&&mp[n]||n}class gp{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let e=0;e<this.count;e++){const t=this.textures[e];this.textures[e]=null,this.ids[t.uid]=null}this.count=0}}class xp{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new gp,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}const Pu=[];let ps=0;function gl(){return ps>0?Pu[--ps]:new xp}function xl(n){Pu[ps++]=n}let Fn=0;const Au=class Ir{constructor(e={}){this.uid=_e("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],Ir.defaultOptions.maxTextures=Ir.defaultOptions.maxTextures??wu(),e={...Ir.defaultOptions,...e};const{vertexSize:t,indexSize:r,maxTextures:i}=e;this.attributeBuffer=new dl(t*this._vertexSize*4),this.indexBuffer=new Uint16Array(r),this.maxTextures=i}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let e=0;e<this.batchIndex;e++)xl(this.batches[e]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(e){this._elements[this.elementSize++]=e,e.indexStart=this.indexSize,e.location=this.attributeSize,e.batcher=this,this.indexSize+=e.indexSize,this.attributeSize+=e.vertexSize*this._vertexSize}checkAndUpdateTexture(e,t){const r=e.batch.textures.ids[t._source.uid];return!r&&r!==0?!1:(e.textureId=r,e.texture=t,!0)}updateElement(e){this.dirty=!0,e.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,e.location,e.textureId)}break(e){const t=this._elements;if(!t[this.elementStart])return;let r=gl(),i=r.textures;i.clear();const s=t[this.elementStart];let o=pl(s.blendMode,s.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const l=this.attributeBuffer.float32View,a=this.attributeBuffer.uint32View,c=this.indexBuffer;let u=this._batchIndexSize,f=this._batchIndexStart,h="startBatch";const d=this.maxTextures;for(let m=this.elementStart;m<this.elementSize;++m){const x=t[m];t[m]=null;const b=x.texture._source,_=pl(x.blendMode,b),y=o!==_;if(b._batchTick===Fn&&!y){x.textureId=b._textureBindLocation,u+=x.indexSize,x.packAttributes(l,a,x.location,x.textureId),x.packIndex(c,x.indexStart,x.location/this._vertexSize),x.batch=r;continue}b._batchTick=Fn,(i.count>=d||y)&&(this._finishBatch(r,f,u-f,i,o,e,h),h="renderBatch",f=u,o=_,r=gl(),i=r.textures,i.clear(),++Fn),x.textureId=b._textureBindLocation=i.count,i.ids[b.uid]=i.count,i.textures[i.count++]=b,x.batch=r,u+=x.indexSize,x.packAttributes(l,a,x.location,x.textureId),x.packIndex(c,x.indexStart,x.location/this._vertexSize)}i.count>0&&(this._finishBatch(r,f,u-f,i,o,e,h),f=u,++Fn),this.elementStart=this.elementSize,this._batchIndexStart=f,this._batchIndexSize=u}_finishBatch(e,t,r,i,s,o,l){e.gpuBindGroup=null,e.bindGroup=null,e.action=l,e.batcher=this,e.textures=i,e.blendMode=s,e.start=t,e.size=r,++Fn,this.batches[this.batchIndex++]=e,o.add(e)}finish(e){this.break(e)}ensureAttributeBuffer(e){e*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(e*4)}ensureIndexBuffer(e){e<=this.indexBuffer.length||this._resizeIndexBuffer(e)}_resizeAttributeBuffer(e){const t=Math.max(e,this.attributeBuffer.size*2),r=new dl(t);ml(this.attributeBuffer.rawBinaryData,r.rawBinaryData),this.attributeBuffer=r}_resizeIndexBuffer(e){const t=this.indexBuffer;let r=Math.max(e,t.length*1.5);r+=r%2;const i=r>65535?new Uint32Array(r):new Uint16Array(r);if(i.BYTES_PER_ELEMENT!==t.BYTES_PER_ELEMENT)for(let s=0;s<t.length;s++)i[s]=t[s];else ml(t.buffer,i.buffer);this.indexBuffer=i}destroy(){for(let e=0;e<this.batches.length;e++)xl(this.batches[e]);this.batches=null;for(let e=0;e<this._elements.length;e++)this._elements[e].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};Au.defaultOptions={vertexSize:4,indexSize:6,maxTextures:null};let vp=Au;var Re=(n=>(n[n.MAP_READ=1]="MAP_READ",n[n.MAP_WRITE=2]="MAP_WRITE",n[n.COPY_SRC=4]="COPY_SRC",n[n.COPY_DST=8]="COPY_DST",n[n.INDEX=16]="INDEX",n[n.VERTEX=32]="VERTEX",n[n.UNIFORM=64]="UNIFORM",n[n.STORAGE=128]="STORAGE",n[n.INDIRECT=256]="INDIRECT",n[n.QUERY_RESOLVE=512]="QUERY_RESOLVE",n[n.STATIC=1024]="STATIC",n))(Re||{});class ir extends xt{constructor(e){let{data:t,size:r}=e;const{usage:i,label:s,shrinkToFit:o}=e;super(),this.uid=_e("buffer"),this._resourceType="buffer",this._resourceId=_e("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,t instanceof Array&&(t=new Float32Array(t)),this._data=t,r=r??(t==null?void 0:t.byteLength);const l=!!t;this.descriptor={size:r,usage:i,mappedAtCreation:l,label:s},this.shrinkToFit=o??!0}get data(){return this._data}set data(e){this.setDataWithSize(e,e.length,!0)}get static(){return!!(this.descriptor.usage&Re.STATIC)}set static(e){e?this.descriptor.usage|=Re.STATIC:this.descriptor.usage&=~Re.STATIC}setDataWithSize(e,t,r){if(this._updateID++,this._updateSize=t*e.BYTES_PER_ELEMENT,this._data===e){r&&this.emit("update",this);return}const i=this._data;if(this._data=e,i.length!==e.length){!this.shrinkToFit&&e.byteLength<i.byteLength?r&&this.emit("update",this):(this.descriptor.size=e.byteLength,this._resourceId=_e("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(e){this._updateSize=e??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function Fu(n,e){if(!(n instanceof ir)){let t=e?Re.INDEX:Re.VERTEX;n instanceof Array&&(e?(n=new Uint32Array(n),t=Re.INDEX|Re.COPY_DST):(n=new Float32Array(n),t=Re.VERTEX|Re.COPY_DST)),n=new ir({data:n,label:e?"index-mesh-buffer":"vertex-mesh-buffer",usage:t})}return n}function yp(n,e,t){const r=n.getAttribute(e);if(!r)return t.minX=0,t.minY=0,t.maxX=0,t.maxY=0,t;const i=r.buffer.data;let s=1/0,o=1/0,l=-1/0,a=-1/0;const c=i.BYTES_PER_ELEMENT,u=(r.offset||0)/c,f=(r.stride||2*4)/c;for(let h=u;h<i.length;h+=f){const d=i[h],m=i[h+1];d>l&&(l=d),m>a&&(a=m),d<s&&(s=d),m<o&&(o=m)}return t.minX=s,t.minY=o,t.maxX=l,t.maxY=a,t}function _p(n){return(n instanceof ir||Array.isArray(n)||n.BYTES_PER_ELEMENT)&&(n={buffer:n}),n.buffer=Fu(n.buffer,!1),n}class bp extends xt{constructor(e){const{attributes:t,indexBuffer:r,topology:i}=e;super(),this.uid=_e("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new st,this._boundsDirty=!0,this.attributes=t,this.buffers=[],this.instanceCount=e.instanceCount||1;for(const s in t){const o=t[s]=_p(t[s]);this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this),o.buffer.on("change",this.onBufferUpdate,this))}r&&(this.indexBuffer=Fu(r,!0),this.buffers.push(this.indexBuffer)),this.topology=i||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(e){return this.attributes[e]}getIndex(){return this.indexBuffer}getBuffer(e){return this.getAttribute(e).buffer}getSize(){for(const e in this.attributes){const t=this.attributes[e];return t.buffer.data.length/(t.stride/4||t.size)}return 0}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,yp(this,"aPosition",this._bounds)):this._bounds}destroy(e=!1){this.emit("destroy",this),this.removeAllListeners(),e&&this.buffers.forEach(t=>t.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const Sp=new Float32Array(1),Cp=new Uint32Array(1);class wp extends bp{constructor(){const t=new ir({data:Sp,label:"attribute-batch-buffer",usage:Re.VERTEX|Re.COPY_DST,shrinkToFit:!1}),r=new ir({data:Cp,label:"index-batch-buffer",usage:Re.INDEX|Re.COPY_DST,shrinkToFit:!1}),i=6*4;super({attributes:{aPosition:{buffer:t,format:"float32x2",stride:i,offset:0},aUV:{buffer:t,format:"float32x2",stride:i,offset:2*4},aColor:{buffer:t,format:"unorm8x4",stride:i,offset:4*4},aTextureIdAndRound:{buffer:t,format:"uint16x2",stride:i,offset:5*4}},indexBuffer:r})}}function Tp(n,e,t,r,i,s,o,l=null){let a=0;t*=e,i*=s;const c=l.a,u=l.b,f=l.c,h=l.d,d=l.tx,m=l.ty;for(;a<o;){const x=n[t],p=n[t+1];r[i]=c*x+f*p+d,r[i+1]=u*x+h*p+m,i+=s,t+=e,a++}}function Pp(n,e,t,r){let i=0;for(e*=t;i<r;)n[e]=0,n[e+1]=0,e+=t,i++}function Mu(n,e,t,r,i){const s=e.a,o=e.b,l=e.c,a=e.d,c=e.tx,u=e.ty;t=t||0,r=r||2,i=i||n.length/r-t;let f=t*r;for(let h=0;h<i;h++){const d=n[f],m=n[f+1];n[f]=s*d+l*m+c,n[f+1]=o*d+a*m+u,f+=r}}function Ap(n,e){if(n===16777215||!e)return e;if(e===16777215||!n)return n;const t=n>>16&255,r=n>>8&255,i=n&255,s=e>>16&255,o=e>>8&255,l=e&255,a=t*s/255,c=r*o/255,u=i*l/255;return(a<<16)+(c<<8)+u}class Iu{constructor(){this.batcher=null,this.batch=null,this.applyTransform=!0,this.roundPixels=0}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}packIndex(e,t,r){const i=this.geometryData.indices;for(let s=0;s<this.indexSize;s++)e[t++]=i[s+this.indexOffset]+r-this.vertexOffset}packAttributes(e,t,r,i){const s=this.geometryData,o=this.renderable,l=s.vertices,a=s.uvs,c=this.vertexOffset*2,u=(this.vertexOffset+this.vertexSize)*2,f=this.color,h=f>>16|f&65280|(f&255)<<16;if(this.applyTransform){const d=Ap(h,o.groupColor)+(this.alpha*o.groupAlpha*255<<24),m=o.groupTransform,x=i<<16|this.roundPixels&65535,p=m.a,b=m.b,_=m.c,y=m.d,w=m.tx,$=m.ty;for(let R=c;R<u;R+=2){const N=l[R],k=l[R+1];e[r]=p*N+_*k+w,e[r+1]=b*N+y*k+$,e[r+2]=a[R],e[r+3]=a[R+1],t[r+4]=d,t[r+5]=x,r+=6}}else{const d=h+(this.alpha*255<<24);for(let m=c;m<u;m+=2)e[r]=l[m],e[r+1]=l[m+1],e[r+2]=a[m],e[r+3]=a[m+1],t[r+4]=d,t[r+5]=i<<16,r+=6}}get vertSize(){return this.vertexSize}copyTo(e){e.indexOffset=this.indexOffset,e.indexSize=this.indexSize,e.vertexOffset=this.vertexOffset,e.vertexSize=this.vertexSize,e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.geometryData=this.geometryData}reset(){this.applyTransform=!0}}const sr={extension:{type:he.ShapeBuilder,name:"circle"},build(n,e){let t,r,i,s,o,l;if(n.type==="circle"){const w=n;t=w.x,r=w.y,o=l=w.radius,i=s=0}else if(n.type==="ellipse"){const w=n;t=w.x,r=w.y,o=w.halfWidth,l=w.halfHeight,i=s=0}else{const w=n,$=w.width/2,R=w.height/2;t=w.x+$,r=w.y+R,o=l=Math.max(0,Math.min(w.radius,Math.min($,R))),i=$-o,s=R-l}if(!(o>=0&&l>=0&&i>=0&&s>=0))return e;const a=Math.ceil(2.3*Math.sqrt(o+l)),c=a*8+(i?4:0)+(s?4:0);if(c===0)return e;if(a===0)return e[0]=e[6]=t+i,e[1]=e[3]=r+s,e[2]=e[4]=t-i,e[5]=e[7]=r-s,e;let u=0,f=a*4+(i?2:0)+2,h=f,d=c,m=i+o,x=s,p=t+m,b=t-m,_=r+x;if(e[u++]=p,e[u++]=_,e[--f]=_,e[--f]=b,s){const w=r-x;e[h++]=b,e[h++]=w,e[--d]=w,e[--d]=p}for(let w=1;w<a;w++){const $=Math.PI/2*(w/a),R=i+Math.cos($)*o,N=s+Math.sin($)*l,k=t+R,O=t-R,I=r+N,ee=r-N;e[u++]=k,e[u++]=I,e[--f]=I,e[--f]=O,e[h++]=O,e[h++]=ee,e[--d]=ee,e[--d]=k}m=i,x=s+l,p=t+m,b=t-m,_=r+x;const y=r-x;return e[u++]=p,e[u++]=_,e[--d]=y,e[--d]=p,i&&(e[u++]=b,e[u++]=_,e[--d]=y,e[--d]=b),e},triangulate(n,e,t,r,i,s){if(n.length===0)return;let o=0,l=0;for(let u=0;u<n.length;u+=2)o+=n[u],l+=n[u+1];o/=n.length/2,l/=n.length/2;let a=r;e[a*t]=o,e[a*t+1]=l;const c=a++;for(let u=0;u<n.length;u+=2)e[a*t]=n[u],e[a*t+1]=n[u+1],u>0&&(i[s++]=a,i[s++]=c,i[s++]=a-1),a++;i[s++]=c+1,i[s++]=c,i[s++]=a-1}},Fp={...sr,extension:{...sr.extension,name:"ellipse"}},Mp={...sr,extension:{...sr.extension,name:"roundedRectangle"}},Ip=1e-4,vl=1e-4;function zp(n){const e=n.length;if(e<6)return 1;let t=0;for(let r=0,i=n[e-2],s=n[e-1];r<e;r+=2){const o=n[r],l=n[r+1];t+=(o-i)*(l+s),i=o,s=l}return t<0?-1:1}function yl(n,e,t,r,i,s,o,l){const a=n-t*i,c=e-r*i,u=n+t*s,f=e+r*s;let h,d;o?(h=r,d=-t):(h=-r,d=t);const m=a+h,x=c+d,p=u+h,b=f+d;return l.push(m,x),l.push(p,b),2}function Dt(n,e,t,r,i,s,o,l){const a=t-n,c=r-e;let u=Math.atan2(a,c),f=Math.atan2(i-n,s-e);l&&u<f?u+=Math.PI*2:!l&&u>f&&(f+=Math.PI*2);let h=u;const d=f-u,m=Math.abs(d),x=Math.sqrt(a*a+c*c),p=(15*m*Math.sqrt(x)/Math.PI>>0)+1,b=d/p;if(h+=b,l){o.push(n,e),o.push(t,r);for(let _=1,y=h;_<p;_++,y+=b)o.push(n,e),o.push(n+Math.sin(y)*x,e+Math.cos(y)*x);o.push(n,e),o.push(i,s)}else{o.push(t,r),o.push(n,e);for(let _=1,y=h;_<p;_++,y+=b)o.push(n+Math.sin(y)*x,e+Math.cos(y)*x),o.push(n,e);o.push(i,s),o.push(n,e)}return p*2}function Op(n,e,t,r,i,s,o,l,a){const c=Ip;if(n.length===0)return;const u=e;let f=u.alignment;if(e.alignment!==.5){let ne=zp(n);f=(f-.5)*ne+.5}const h=new Ae(n[0],n[1]),d=new Ae(n[n.length-2],n[n.length-1]),m=r,x=Math.abs(h.x-d.x)<c&&Math.abs(h.y-d.y)<c;if(m){n=n.slice(),x&&(n.pop(),n.pop(),d.set(n[n.length-2],n[n.length-1]));const ne=(h.x+d.x)*.5,Xe=(d.y+h.y)*.5;n.unshift(ne,Xe),n.push(ne,Xe)}const p=i,b=n.length/2;let _=n.length;const y=p.length/2,w=u.width/2,$=w*w,R=u.miterLimit*u.miterLimit;let N=n[0],k=n[1],O=n[2],I=n[3],ee=0,Z=0,B=-(k-I),L=N-O,T=0,z=0,S=Math.sqrt(B*B+L*L);B/=S,L/=S,B*=w,L*=w;const H=f,E=(1-H)*2,X=H*2;m||(u.cap==="round"?_+=Dt(N-B*(E-X)*.5,k-L*(E-X)*.5,N-B*E,k-L*E,N+B*X,k+L*X,p,!0)+2:u.cap==="square"&&(_+=yl(N,k,B,L,E,X,!0,p))),p.push(N-B*E,k-L*E),p.push(N+B*X,k+L*X);for(let ne=1;ne<b-1;++ne){N=n[(ne-1)*2],k=n[(ne-1)*2+1],O=n[ne*2],I=n[ne*2+1],ee=n[(ne+1)*2],Z=n[(ne+1)*2+1],B=-(k-I),L=N-O,S=Math.sqrt(B*B+L*L),B/=S,L/=S,B*=w,L*=w,T=-(I-Z),z=O-ee,S=Math.sqrt(T*T+z*z),T/=S,z/=S,T*=w,z*=w;const Xe=O-N,zt=k-I,Ot=O-ee,He=Z-I,Et=Xe*Ot+zt*He,vt=zt*Ot-He*Xe,yt=vt<0;if(Math.abs(vt)<.001*Math.abs(Et)){p.push(O-B*E,I-L*E),p.push(O+B*X,I+L*X),Et>=0&&(u.join==="round"?_+=Dt(O,I,O-B*E,I-L*E,O-T*E,I-z*E,p,!1)+4:_+=2,p.push(O-T*X,I-z*X),p.push(O+T*E,I+z*E));continue}const _t=(-B+N)*(-L+I)-(-B+O)*(-L+k),Cn=(-T+ee)*(-z+I)-(-T+O)*(-z+Z),Rt=(Xe*Cn-Ot*_t)/vt,g=(He*_t-zt*Cn)/vt,v=(Rt-O)*(Rt-O)+(g-I)*(g-I),C=O+(Rt-O)*E,A=I+(g-I)*E,P=O-(Rt-O)*X,F=I-(g-I)*X,G=Math.min(Xe*Xe+zt*zt,Ot*Ot+He*He),U=yt?E:X,D=G+U*U*$;v<=D?u.join==="bevel"||v/$>R?(yt?(p.push(C,A),p.push(O+B*X,I+L*X),p.push(C,A),p.push(O+T*X,I+z*X)):(p.push(O-B*E,I-L*E),p.push(P,F),p.push(O-T*E,I-z*E),p.push(P,F)),_+=2):u.join==="round"?yt?(p.push(C,A),p.push(O+B*X,I+L*X),_+=Dt(O,I,O+B*X,I+L*X,O+T*X,I+z*X,p,!0)+4,p.push(C,A),p.push(O+T*X,I+z*X)):(p.push(O-B*E,I-L*E),p.push(P,F),_+=Dt(O,I,O-B*E,I-L*E,O-T*E,I-z*E,p,!1)+4,p.push(O-T*E,I-z*E),p.push(P,F)):(p.push(C,A),p.push(P,F)):(p.push(O-B*E,I-L*E),p.push(O+B*X,I+L*X),u.join==="round"?yt?_+=Dt(O,I,O+B*X,I+L*X,O+T*X,I+z*X,p,!0)+2:_+=Dt(O,I,O-B*E,I-L*E,O-T*E,I-z*E,p,!1)+2:u.join==="miter"&&v/$<=R&&(yt?(p.push(P,F),p.push(P,F)):(p.push(C,A),p.push(C,A)),_+=2),p.push(O-T*E,I-z*E),p.push(O+T*X,I+z*X),_+=2)}N=n[(b-2)*2],k=n[(b-2)*2+1],O=n[(b-1)*2],I=n[(b-1)*2+1],B=-(k-I),L=N-O,S=Math.sqrt(B*B+L*L),B/=S,L/=S,B*=w,L*=w,p.push(O-B*E,I-L*E),p.push(O+B*X,I+L*X),m||(u.cap==="round"?_+=Dt(O-B*(E-X)*.5,I-L*(E-X)*.5,O-B*E,I-L*E,O+B*X,I+L*X,p,!1)+2:u.cap==="square"&&(_+=yl(O,I,B,L,E,X,!1,p)));const Fe=vl*vl;for(let ne=y;ne<_+y-2;++ne)N=p[ne*2],k=p[ne*2+1],O=p[(ne+1)*2],I=p[(ne+1)*2+1],ee=p[(ne+2)*2],Z=p[(ne+2)*2+1],!(Math.abs(N*(I-Z)+O*(Z-k)+ee*(k-I))<Fe)&&l.push(ne,ne+1,ne+2)}function zu(n,e,t,r,i,s,o){const l=Ym(n,e,2);if(!l)return;for(let c=0;c<l.length;c+=3)s[o++]=l[c]+i,s[o++]=l[c+1]+i,s[o++]=l[c+2]+i;let a=i*r;for(let c=0;c<n.length;c+=2)t[a]=n[c],t[a+1]=n[c+1],a+=r}const Ep=[],Rp={extension:{type:he.ShapeBuilder,name:"polygon"},build(n,e){for(let t=0;t<n.points.length;t++)e[t]=n.points[t];return e},triangulate(n,e,t,r,i,s){zu(n,Ep,e,t,r,i,s)}},Up={extension:{type:he.ShapeBuilder,name:"rectangle"},build(n,e){const t=n,r=t.x,i=t.y,s=t.width,o=t.height;return s>=0&&o>=0&&(e[0]=r,e[1]=i,e[2]=r+s,e[3]=i,e[4]=r+s,e[5]=i+o,e[6]=r,e[7]=i+o),e},triangulate(n,e,t,r,i,s){let o=0;r*=t,e[r+o]=n[0],e[r+o+1]=n[1],o+=t,e[r+o]=n[2],e[r+o+1]=n[3],o+=t,e[r+o]=n[6],e[r+o+1]=n[7],o+=t,e[r+o]=n[4],e[r+o+1]=n[5],o+=t;const l=r/t;i[s++]=l,i[s++]=l+1,i[s++]=l+2,i[s++]=l+1,i[s++]=l+3,i[s++]=l+2}},Lp={extension:{type:he.ShapeBuilder,name:"triangle"},build(n,e){return e[0]=n.x,e[1]=n.y,e[2]=n.x2,e[3]=n.y2,e[4]=n.x3,e[5]=n.y3,e},triangulate(n,e,t,r,i,s){let o=0;r*=t,e[r+o]=n[0],e[r+o+1]=n[1],o+=t,e[r+o]=n[2],e[r+o+1]=n[3],o+=t,e[r+o]=n[4],e[r+o+1]=n[5];const l=r/t;i[s++]=l,i[s++]=l+1,i[s++]=l+2}},ii={};ot.handleByMap(he.ShapeBuilder,ii);ot.add(Up,Rp,Lp,sr,Fp,Mp);const Dp=new we;function Bp(n,e){const{geometryData:t,batches:r}=e;r.length=0,t.indices.length=0,t.vertices.length=0,t.uvs.length=0;for(let i=0;i<n.instructions.length;i++){const s=n.instructions[i];if(s.action==="texture")Gp(s.data,r,t);else if(s.action==="fill"||s.action==="stroke"){const o=s.action==="stroke",l=s.data.path.shapePath,a=s.data.style,c=s.data.hole;o&&c&&_l(c.shapePath,a,null,!0,r,t),_l(l,a,c,o,r,t)}}}function Gp(n,e,t){const{vertices:r,uvs:i,indices:s}=t,o=s.length,l=r.length/2,a=[],c=ii.rectangle,u=Dp,f=n.image;u.x=n.dx,u.y=n.dy,u.width=n.dw,u.height=n.dh;const h=n.transform;c.build(u,a),h&&Mu(a,h),c.triangulate(a,r,2,l,s,o);const d=f.uvs;i.push(d.x0,d.y0,d.x1,d.y1,d.x3,d.y3,d.x2,d.y2);const m=dt.get(Iu);m.indexOffset=o,m.indexSize=s.length-o,m.vertexOffset=l,m.vertexSize=r.length/2-l,m.color=n.style,m.alpha=n.alpha,m.texture=f,m.geometryData=t,e.push(m)}function _l(n,e,t,r,i,s){const{vertices:o,uvs:l,indices:a}=s,c=n.shapePrimitives.length-1;n.shapePrimitives.forEach(({shape:u,transform:f},h)=>{const d=a.length,m=o.length/2,x=[],p=ii[u.type];if(p.build(u,x),f&&Mu(x,f),r){const w=u.closePath??!0;Op(x,e,!1,w,o,2,m,a)}else if(t&&c===h){c!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const w=[],$=x.slice();kp(t.shapePath).forEach(N=>{w.push($.length/2),$.push(...N)}),zu($,w,o,2,m,a,d)}else p.triangulate(x,o,2,m,a,d);const b=l.length/2,_=e.texture;if(_!==oe.WHITE){const w=e.matrix;w&&(f&&w.append(f.clone().invert()),Tp(o,2,m,l,b,2,o.length/2-m,w))}else Pp(l,b,2,o.length/2-m);const y=dt.get(Iu);y.indexOffset=d,y.indexSize=a.length-d,y.vertexOffset=m,y.vertexSize=o.length/2-m,y.color=e.color,y.alpha=e.alpha,y.texture=_,y.geometryData=s,i.push(y)})}function kp(n){if(!n)return[];const e=n.shapePrimitives,t=[];for(let r=0;r<e.length;r++){const i=e[r].shape,s=[];ii[i.type].build(i,s),t.push(s)}return t}class Np{constructor(){this.batcher=new vp,this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class $p{constructor(){this.geometry=new wp,this.instructions=new $a}init(){this.instructions.reset()}}const io=class gs{constructor(){this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null)}init(e){gs.defaultOptions.bezierSmoothness=(e==null?void 0:e.bezierSmoothness)??gs.defaultOptions.bezierSmoothness}getContextRenderData(e){return this._graphicsDataContextHash[e.uid]||this._initContextRenderData(e)}updateGpuContext(e){let t=this._gpuContextHash[e.uid]||this._initContext(e);if(e.dirty){t?this._cleanGraphicsContextData(e):t=this._initContext(e),Bp(e,t);const r=e.batchMode;e.customShader||r==="no-batch"?t.isBatchable=!1:r==="auto"&&(t.isBatchable=t.geometryData.vertices.length<400),e.dirty=!1}return t}getGpuContext(e){return this._gpuContextHash[e.uid]||this._initContext(e)}_initContextRenderData(e){const t=dt.get($p),{batches:r,geometryData:i,batcher:s}=this._gpuContextHash[e.uid],o=i.vertices.length,l=i.indices.length;for(let u=0;u<r.length;u++)r[u].applyTransform=!1;s.ensureAttributeBuffer(o),s.ensureIndexBuffer(l),s.begin();for(let u=0;u<r.length;u++){const f=r[u];s.add(f)}s.finish(t.instructions);const a=t.geometry;a.indexBuffer.setDataWithSize(s.indexBuffer,s.indexSize,!0),a.buffers[0].setDataWithSize(s.attributeBuffer.float32View,s.attributeSize,!0);const c=s.batches;for(let u=0;u<c.length;u++){const f=c[u];f.bindGroup=hp(f.textures.textures,f.textures.count)}return this._graphicsDataContextHash[e.uid]=t,t}_initContext(e){const t=new Np;return t.context=e,this._gpuContextHash[e.uid]=t,e.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[e.uid]}onGraphicsContextDestroy(e){this._cleanGraphicsContextData(e),e.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[e.uid]=null}_cleanGraphicsContextData(e){const t=this._gpuContextHash[e.uid];t.isBatchable||this._graphicsDataContextHash[e.uid]&&(dt.return(this.getContextRenderData(e)),this._graphicsDataContextHash[e.uid]=null),t.batches&&t.batches.forEach(r=>{dt.return(r)})}destroy(){for(const e in this._gpuContextHash)this._gpuContextHash[e]&&this.onGraphicsContextDestroy(this._gpuContextHash[e].context)}};io.extension={type:[he.WebGLSystem,he.WebGPUSystem,he.CanvasSystem],name:"graphicsContext"};io.defaultOptions={bezierSmoothness:.5};let Ou=io;const Vp=8,Cr=11920929e-14,Xp=1;function Eu(n,e,t,r,i,s,o,l,a,c){const f=Math.min(.99,Math.max(0,c??Ou.defaultOptions.bezierSmoothness));let h=(Xp-f)/1;return h*=h,Hp(e,t,r,i,s,o,l,a,n,h),n}function Hp(n,e,t,r,i,s,o,l,a,c){xs(n,e,t,r,i,s,o,l,a,c,0),a.push(o,l)}function xs(n,e,t,r,i,s,o,l,a,c,u){if(u>Vp)return;const f=(n+t)/2,h=(e+r)/2,d=(t+i)/2,m=(r+s)/2,x=(i+o)/2,p=(s+l)/2,b=(f+d)/2,_=(h+m)/2,y=(d+x)/2,w=(m+p)/2,$=(b+y)/2,R=(_+w)/2;if(u>0){let N=o-n,k=l-e;const O=Math.abs((t-o)*k-(r-l)*N),I=Math.abs((i-o)*k-(s-l)*N);if(O>Cr&&I>Cr){if((O+I)*(O+I)<=c*(N*N+k*k)){a.push($,R);return}}else if(O>Cr){if(O*O<=c*(N*N+k*k)){a.push($,R);return}}else if(I>Cr){if(I*I<=c*(N*N+k*k)){a.push($,R);return}}else if(N=$-(n+o)/2,k=R-(e+l)/2,N*N+k*k<=c){a.push($,R);return}}xs(n,e,f,h,b,_,$,R,a,c,u+1),xs($,R,y,w,x,p,o,l,a,c,u+1)}const Yp=8,Wp=11920929e-14,jp=1;function qp(n,e,t,r,i,s,o,l){const c=Math.min(.99,Math.max(0,l??Ou.defaultOptions.bezierSmoothness));let u=(jp-c)/1;return u*=u,Kp(e,t,r,i,s,o,n,u),n}function Kp(n,e,t,r,i,s,o,l){vs(o,n,e,t,r,i,s,l,0),o.push(i,s)}function vs(n,e,t,r,i,s,o,l,a){if(a>Yp)return;const c=(e+r)/2,u=(t+i)/2,f=(r+s)/2,h=(i+o)/2,d=(c+f)/2,m=(u+h)/2;let x=s-e,p=o-t;const b=Math.abs((r-s)*p-(i-o)*x);if(b>Wp){if(b*b<=l*(x*x+p*p)){n.push(d,m);return}}else if(x=d-(e+s)/2,p=m-(t+o)/2,x*x+p*p<=l){n.push(d,m);return}vs(n,e,t,c,u,d,m,l,a+1),vs(n,d,m,f,h,s,o,l,a+1)}function Ru(n,e,t,r,i,s,o,l){let a=Math.abs(i-s);(!o&&i>s||o&&s>i)&&(a=2*Math.PI-a),l=l||Math.max(6,Math.floor(6*Math.pow(r,1/3)*(a/Math.PI))),l=Math.max(l,3);let c=a/l,u=i;c*=o?-1:1;for(let f=0;f<l+1;f++){const h=Math.cos(u),d=Math.sin(u),m=e+h*r,x=t+d*r;n.push(m,x),u+=c}}function Zp(n,e,t,r,i,s){const o=n[n.length-2],a=n[n.length-1]-t,c=o-e,u=i-t,f=r-e,h=Math.abs(a*f-c*u);if(h<1e-8||s===0){(n[n.length-2]!==e||n[n.length-1]!==t)&&n.push(e,t);return}const d=a*a+c*c,m=u*u+f*f,x=a*u+c*f,p=s*Math.sqrt(d)/h,b=s*Math.sqrt(m)/h,_=p*x/d,y=b*x/m,w=p*f+b*c,$=p*u+b*a,R=c*(b+_),N=a*(b+_),k=f*(p+y),O=u*(p+y),I=Math.atan2(N-$,R-w),ee=Math.atan2(O-$,k-w);Ru(n,w+e,$+t,s,I,ee,c*u>f*a)}const Hn=Math.PI*2,Gi={centerX:0,centerY:0,ang1:0,ang2:0},ki=({x:n,y:e},t,r,i,s,o,l,a)=>{n*=t,e*=r;const c=i*n-s*e,u=s*n+i*e;return a.x=c+o,a.y=u+l,a};function Qp(n,e){const t=e===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(e/4),r=e===1.5707963267948966?.551915024494:t,i=Math.cos(n),s=Math.sin(n),o=Math.cos(n+e),l=Math.sin(n+e);return[{x:i-s*r,y:s+i*r},{x:o+l*r,y:l-o*r},{x:o,y:l}]}const bl=(n,e,t,r)=>{const i=n*r-e*t<0?-1:1;let s=n*t+e*r;return s>1&&(s=1),s<-1&&(s=-1),i*Math.acos(s)},Jp=(n,e,t,r,i,s,o,l,a,c,u,f,h)=>{const d=Math.pow(i,2),m=Math.pow(s,2),x=Math.pow(u,2),p=Math.pow(f,2);let b=d*m-d*p-m*x;b<0&&(b=0),b/=d*p+m*x,b=Math.sqrt(b)*(o===l?-1:1);const _=b*i/s*f,y=b*-s/i*u,w=c*_-a*y+(n+t)/2,$=a*_+c*y+(e+r)/2,R=(u-_)/i,N=(f-y)/s,k=(-u-_)/i,O=(-f-y)/s,I=bl(1,0,R,N);let ee=bl(R,N,k,O);l===0&&ee>0&&(ee-=Hn),l===1&&ee<0&&(ee+=Hn),h.centerX=w,h.centerY=$,h.ang1=I,h.ang2=ee};function eg(n,e,t,r,i,s,o,l=0,a=0,c=0){if(s===0||o===0)return;const u=Math.sin(l*Hn/360),f=Math.cos(l*Hn/360),h=f*(e-r)/2+u*(t-i)/2,d=-u*(e-r)/2+f*(t-i)/2;if(h===0&&d===0)return;s=Math.abs(s),o=Math.abs(o);const m=Math.pow(h,2)/Math.pow(s,2)+Math.pow(d,2)/Math.pow(o,2);m>1&&(s*=Math.sqrt(m),o*=Math.sqrt(m)),Jp(e,t,r,i,s,o,a,c,u,f,h,d,Gi);let{ang1:x,ang2:p}=Gi;const{centerX:b,centerY:_}=Gi;let y=Math.abs(p)/(Hn/4);Math.abs(1-y)<1e-7&&(y=1);const w=Math.max(Math.ceil(y),1);p/=w;let $=n[n.length-2],R=n[n.length-1];const N={x:0,y:0};for(let k=0;k<w;k++){const O=Qp(x,p),{x:I,y:ee}=ki(O[0],s,o,f,u,b,_,N),{x:Z,y:B}=ki(O[1],s,o,f,u,b,_,N),{x:L,y:T}=ki(O[2],s,o,f,u,b,_,N);Eu(n,$,R,I,ee,Z,B,L,T),$=L,R=T,x+=p}}function tg(n,e,t){const r=(o,l)=>{const a=l.x-o.x,c=l.y-o.y,u=Math.sqrt(a*a+c*c),f=a/u,h=c/u;return{len:u,nx:f,ny:h}},i=(o,l)=>{o===0?n.moveTo(l.x,l.y):n.lineTo(l.x,l.y)};let s=e[e.length-1];for(let o=0;o<e.length;o++){const l=e[o%e.length],a=l.radius??t;if(a<=0){i(o,l),s=l;continue}const c=e[(o+1)%e.length],u=r(l,s),f=r(l,c);if(u.len<1e-4||f.len<1e-4){i(o,l),s=l;continue}let h=Math.asin(u.nx*f.ny-u.ny*f.nx),d=1,m=!1;u.nx*f.nx-u.ny*-f.ny<0?h<0?h=Math.PI+h:(h=Math.PI-h,d=-1,m=!0):h>0&&(d=-1,m=!0);const x=h/2;let p,b=Math.abs(Math.cos(x)*a/Math.sin(x));b>Math.min(u.len/2,f.len/2)?(b=Math.min(u.len/2,f.len/2),p=Math.abs(b*Math.sin(x)/Math.cos(x))):p=a;const _=l.x+f.nx*b+-f.ny*p*d,y=l.y+f.ny*b+f.nx*p*d,w=Math.atan2(u.ny,u.nx)+Math.PI/2*d,$=Math.atan2(f.ny,f.nx)-Math.PI/2*d;o===0&&n.moveTo(_+Math.cos(w)*p,y+Math.sin(w)*p),n.arc(_,y,p,w,$,m),s=l}}function ng(n,e,t,r){const i=(l,a)=>Math.sqrt((l.x-a.x)**2+(l.y-a.y)**2),s=(l,a,c)=>({x:l.x+(a.x-l.x)*c,y:l.y+(a.y-l.y)*c}),o=e.length;for(let l=0;l<o;l++){const a=e[(l+1)%o],c=a.radius??t;if(c<=0){l===0?n.moveTo(a.x,a.y):n.lineTo(a.x,a.y);continue}const u=e[l],f=e[(l+2)%o],h=i(u,a);let d;if(h<1e-4)d=a;else{const p=Math.min(h/2,c);d=s(a,u,p/h)}const m=i(f,a);let x;if(m<1e-4)x=a;else{const p=Math.min(m/2,c);x=s(a,f,p/m)}l===0?n.moveTo(d.x,d.y):n.lineTo(d.x,d.y),n.quadraticCurveTo(a.x,a.y,x.x,x.y,r)}}const rg=new we;class ig{constructor(e){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new st,this._graphicsPath2D=e}moveTo(e,t){return this.startPoly(e,t),this}lineTo(e,t){this._ensurePoly();const r=this._currentPoly.points,i=r[r.length-2],s=r[r.length-1];return(i!==e||s!==t)&&r.push(e,t),this}arc(e,t,r,i,s,o){this._ensurePoly(!1);const l=this._currentPoly.points;return Ru(l,e,t,r,i,s,o),this}arcTo(e,t,r,i,s){this._ensurePoly();const o=this._currentPoly.points;return Zp(o,e,t,r,i,s),this}arcToSvg(e,t,r,i,s,o,l){const a=this._currentPoly.points;return eg(a,this._currentPoly.lastX,this._currentPoly.lastY,o,l,e,t,r,i,s),this}bezierCurveTo(e,t,r,i,s,o,l){this._ensurePoly();const a=this._currentPoly;return Eu(this._currentPoly.points,a.lastX,a.lastY,e,t,r,i,s,o,l),this}quadraticCurveTo(e,t,r,i,s){this._ensurePoly();const o=this._currentPoly;return qp(this._currentPoly.points,o.lastX,o.lastY,e,t,r,i,s),this}closePath(){return this.endPoly(!0),this}addPath(e,t){this.endPoly(),t&&!t.isIdentity()&&(e=e.clone(!0),e.transform(t));for(let r=0;r<e.instructions.length;r++){const i=e.instructions[r];this[i.action](...i.data)}return this}finish(e=!1){this.endPoly(e)}rect(e,t,r,i,s){return this.drawShape(new we(e,t,r,i),s),this}circle(e,t,r,i){return this.drawShape(new to(e,t,r),i),this}poly(e,t,r){const i=new Xn(e);return i.closePath=t,this.drawShape(i,r),this}regularPoly(e,t,r,i,s=0,o){i=Math.max(i|0,3);const l=-1*Math.PI/2+s,a=Math.PI*2/i,c=[];for(let u=0;u<i;u++){const f=u*a+l;c.push(e+r*Math.cos(f),t+r*Math.sin(f))}return this.poly(c,!0,o),this}roundPoly(e,t,r,i,s,o=0,l){if(i=Math.max(i|0,3),s<=0)return this.regularPoly(e,t,r,i,o);const a=r*Math.sin(Math.PI/i)-.001;s=Math.min(s,a);const c=-1*Math.PI/2+o,u=Math.PI*2/i,f=(i-2)*Math.PI/i/2;for(let h=0;h<i;h++){const d=h*u+c,m=e+r*Math.cos(d),x=t+r*Math.sin(d),p=d+Math.PI+f,b=d-Math.PI-f,_=m+s*Math.cos(p),y=x+s*Math.sin(p),w=m+s*Math.cos(b),$=x+s*Math.sin(b);h===0?this.moveTo(_,y):this.lineTo(_,y),this.quadraticCurveTo(m,x,w,$,l)}return this.closePath()}roundShape(e,t,r=!1,i){return e.length<3?this:(r?ng(this,e,t,i):tg(this,e,t),this.closePath())}filletRect(e,t,r,i,s){if(s===0)return this.rect(e,t,r,i);const o=Math.min(r,i)/2,l=Math.min(o,Math.max(-o,s)),a=e+r,c=t+i,u=l<0?-l:0,f=Math.abs(l);return this.moveTo(e,t+f).arcTo(e+u,t+u,e+f,t,f).lineTo(a-f,t).arcTo(a-u,t+u,a,t+f,f).lineTo(a,c-f).arcTo(a-u,c-u,e+r-f,c,f).lineTo(e+f,c).arcTo(e+u,c-u,e,c-f,f).closePath()}chamferRect(e,t,r,i,s,o){if(s<=0)return this.rect(e,t,r,i);const l=Math.min(s,Math.min(r,i)/2),a=e+r,c=t+i,u=[e+l,t,a-l,t,a,t+l,a,c-l,a-l,c,e+l,c,e,c-l,e,t+l];for(let f=u.length-1;f>=2;f-=2)u[f]===u[f-2]&&u[f-1]===u[f-3]&&u.splice(f-1,2);return this.poly(u,!0,o)}ellipse(e,t,r,i,s){return this.drawShape(new no(e,t,r,i),s),this}roundRect(e,t,r,i,s,o){return this.drawShape(new ro(e,t,r,i,s),o),this}drawShape(e,t){return this.endPoly(),this.shapePrimitives.push({shape:e,transform:t}),this}startPoly(e,t){let r=this._currentPoly;return r&&this.endPoly(),r=new Xn,r.points.push(e,t),this._currentPoly=r,this}endPoly(e=!1){const t=this._currentPoly;return t&&t.points.length>2&&(t.closePath=e,this.shapePrimitives.push({shape:t})),this._currentPoly=null,this}_ensurePoly(e=!0){if(!this._currentPoly&&(this._currentPoly=new Xn,e)){const t=this.shapePrimitives[this.shapePrimitives.length-1];if(t){let r=t.shape.x,i=t.shape.y;if(t.transform&&!t.transform.isIdentity()){const s=t.transform,o=r;r=s.a*r+s.c*i+s.tx,i=s.b*o+s.d*i+s.ty}this._currentPoly.points.push(r,i)}else this._currentPoly.points.push(0,0)}}buildPath(){const e=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let t=0;t<e.instructions.length;t++){const r=e.instructions[t];this[r.action](...r.data)}this.finish()}get bounds(){const e=this._bounds;e.clear();const t=this.shapePrimitives;for(let r=0;r<t.length;r++){const i=t[r],s=i.shape.getBounds(rg);i.transform?e.addRect(s,i.transform):e.addRect(s)}return e}}class _n{constructor(e){this.instructions=[],this.uid=_e("graphicsPath"),this._dirty=!0,typeof e=="string"?lp(e,this):this.instructions=(e==null?void 0:e.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new ig(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(e,t){return e=e.clone(),this.instructions.push({action:"addPath",data:[e,t]}),this._dirty=!0,this}arc(...e){return this.instructions.push({action:"arc",data:e}),this._dirty=!0,this}arcTo(...e){return this.instructions.push({action:"arcTo",data:e}),this._dirty=!0,this}arcToSvg(...e){return this.instructions.push({action:"arcToSvg",data:e}),this._dirty=!0,this}bezierCurveTo(...e){return this.instructions.push({action:"bezierCurveTo",data:e}),this._dirty=!0,this}bezierCurveToShort(e,t,r,i,s){const o=this.instructions[this.instructions.length-1],l=this.getLastPoint(Ae.shared);let a=0,c=0;if(!o||o.action!=="bezierCurveTo")a=l.x,c=l.y;else{a=o.data[2],c=o.data[3];const u=l.x,f=l.y;a=u+(u-a),c=f+(f-c)}return this.instructions.push({action:"bezierCurveTo",data:[a,c,e,t,r,i,s]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...e){return this.instructions.push({action:"ellipse",data:e}),this._dirty=!0,this}lineTo(...e){return this.instructions.push({action:"lineTo",data:e}),this._dirty=!0,this}moveTo(...e){return this.instructions.push({action:"moveTo",data:e}),this}quadraticCurveTo(...e){return this.instructions.push({action:"quadraticCurveTo",data:e}),this._dirty=!0,this}quadraticCurveToShort(e,t,r){const i=this.instructions[this.instructions.length-1],s=this.getLastPoint(Ae.shared);let o=0,l=0;if(!i||i.action!=="quadraticCurveTo")o=s.x,l=s.y;else{o=i.data[0],l=i.data[1];const a=s.x,c=s.y;o=a+(a-o),l=c+(c-l)}return this.instructions.push({action:"quadraticCurveTo",data:[o,l,e,t,r]}),this._dirty=!0,this}rect(e,t,r,i,s){return this.instructions.push({action:"rect",data:[e,t,r,i,s]}),this._dirty=!0,this}circle(e,t,r,i){return this.instructions.push({action:"circle",data:[e,t,r,i]}),this._dirty=!0,this}roundRect(...e){return this.instructions.push({action:"roundRect",data:e}),this._dirty=!0,this}poly(...e){return this.instructions.push({action:"poly",data:e}),this._dirty=!0,this}regularPoly(...e){return this.instructions.push({action:"regularPoly",data:e}),this._dirty=!0,this}roundPoly(...e){return this.instructions.push({action:"roundPoly",data:e}),this._dirty=!0,this}roundShape(...e){return this.instructions.push({action:"roundShape",data:e}),this._dirty=!0,this}filletRect(...e){return this.instructions.push({action:"filletRect",data:e}),this._dirty=!0,this}chamferRect(...e){return this.instructions.push({action:"chamferRect",data:e}),this._dirty=!0,this}star(e,t,r,i,s,o,l){s=s||i/2;const a=-1*Math.PI/2+o,c=r*2,u=Math.PI*2/c,f=[];for(let h=0;h<c;h++){const d=h%2?s:i,m=h*u+a;f.push(e+d*Math.cos(m),t+d*Math.sin(m))}return this.poly(f,!0,l),this}clone(e=!1){const t=new _n;if(!e)t.instructions=this.instructions.slice();else for(let r=0;r<this.instructions.length;r++){const i=this.instructions[r];t.instructions.push({action:i.action,data:i.data.slice()})}return t}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(e){if(e.isIdentity())return this;const t=e.a,r=e.b,i=e.c,s=e.d,o=e.tx,l=e.ty;let a=0,c=0,u=0,f=0,h=0,d=0,m=0,x=0;for(let p=0;p<this.instructions.length;p++){const b=this.instructions[p],_=b.data;switch(b.action){case"moveTo":case"lineTo":a=_[0],c=_[1],_[0]=t*a+i*c+o,_[1]=r*a+s*c+l;break;case"bezierCurveTo":u=_[0],f=_[1],h=_[2],d=_[3],a=_[4],c=_[5],_[0]=t*u+i*f+o,_[1]=r*u+s*f+l,_[2]=t*h+i*d+o,_[3]=r*h+s*d+l,_[4]=t*a+i*c+o,_[5]=r*a+s*c+l;break;case"quadraticCurveTo":u=_[0],f=_[1],a=_[2],c=_[3],_[0]=t*u+i*f+o,_[1]=r*u+s*f+l,_[2]=t*a+i*c+o,_[3]=r*a+s*c+l;break;case"arcToSvg":a=_[5],c=_[6],m=_[0],x=_[1],_[0]=t*m+i*x,_[1]=r*m+s*x,_[5]=t*a+i*c+o,_[6]=r*a+s*c+l;break;case"circle":_[4]=Mn(_[3],e);break;case"rect":_[4]=Mn(_[4],e);break;case"ellipse":_[8]=Mn(_[8],e);break;case"roundRect":_[5]=Mn(_[5],e);break;case"addPath":_[0].transform(e);break;case"poly":_[2]=Mn(_[2],e);break;default:pt("unknown transform action",b.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(e){let t=this.instructions.length-1,r=this.instructions[t];if(!r)return e.x=0,e.y=0,e;for(;r.action==="closePath";){if(t--,t<0)return e.x=0,e.y=0,e;r=this.instructions[t]}switch(r.action){case"moveTo":case"lineTo":e.x=r.data[0],e.y=r.data[1];break;case"quadraticCurveTo":e.x=r.data[2],e.y=r.data[3];break;case"bezierCurveTo":e.x=r.data[4],e.y=r.data[5];break;case"arc":case"arcToSvg":e.x=r.data[5],e.y=r.data[6];break;case"addPath":r.data[0].getLastPoint(e);break}return e}}function Mn(n,e){return n?n.prepend(e):e.clone()}function sg(n,e){if(typeof n=="string"){const r=document.createElement("div");r.innerHTML=n.trim(),n=r.querySelector("svg")}const t={context:e,path:new _n};return Uu(n,t,null,null),e}function Uu(n,e,t,r){const i=n.children,{fillStyle:s,strokeStyle:o}=og(n);s&&t?t={...t,...s}:s&&(t=s),o&&r?r={...r,...o}:o&&(r=o),e.context.fillStyle=t,e.context.strokeStyle=r;let l,a,c,u,f,h,d,m,x,p,b,_,y,w,$,R,N;switch(n.nodeName.toLowerCase()){case"path":w=n.getAttribute("d"),$=new _n(w),e.context.path($),t&&e.context.fill(),r&&e.context.stroke();break;case"circle":d=Se(n,"cx",0),m=Se(n,"cy",0),x=Se(n,"r",0),e.context.ellipse(d,m,x,x),t&&e.context.fill(),r&&e.context.stroke();break;case"rect":l=Se(n,"x",0),a=Se(n,"y",0),R=Se(n,"width",0),N=Se(n,"height",0),p=Se(n,"rx",0),b=Se(n,"ry",0),p||b?e.context.roundRect(l,a,R,N,p||b):e.context.rect(l,a,R,N),t&&e.context.fill(),r&&e.context.stroke();break;case"ellipse":d=Se(n,"cx",0),m=Se(n,"cy",0),p=Se(n,"rx",0),b=Se(n,"ry",0),e.context.beginPath(),e.context.ellipse(d,m,p,b),t&&e.context.fill(),r&&e.context.stroke();break;case"line":c=Se(n,"x1",0),u=Se(n,"y1",0),f=Se(n,"x2",0),h=Se(n,"y2",0),e.context.beginPath(),e.context.moveTo(c,u),e.context.lineTo(f,h),r&&e.context.stroke();break;case"polygon":y=n.getAttribute("points"),_=y.match(/\d+/g).map(k=>parseInt(k,10)),e.context.poly(_,!0),t&&e.context.fill(),r&&e.context.stroke();break;case"polyline":y=n.getAttribute("points"),_=y.match(/\d+/g).map(k=>parseInt(k,10)),e.context.poly(_,!1),r&&e.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${n.nodeName}> elements unsupported`);break}}for(let k=0;k<i.length;k++)Uu(i[k],e,t,r)}function Se(n,e,t){const r=n.getAttribute(e);return r?Number(r):t}function og(n){const e=n.getAttribute("style"),t={},r={};let i=!1,s=!1;if(e){const o=e.split(";");for(let l=0;l<o.length;l++){const a=o[l],[c,u]=a.split(":");switch(c){case"stroke":u!=="none"&&(t.color=de.shared.setValue(u).toNumber(),s=!0);break;case"stroke-width":t.width=Number(u);break;case"fill":u!=="none"&&(i=!0,r.color=de.shared.setValue(u).toNumber());break;case"fill-opacity":r.alpha=Number(u);break;case"stroke-opacity":t.alpha=Number(u);break;case"opacity":r.alpha=Number(u),t.alpha=Number(u);break}}}else{const o=n.getAttribute("stroke");o&&o!=="none"&&(s=!0,t.color=de.shared.setValue(o).toNumber(),t.width=Se(n,"stroke-width",1));const l=n.getAttribute("fill");l&&l!=="none"&&(i=!0,r.color=de.shared.setValue(l).toNumber())}return{strokeStyle:s?t:null,fillStyle:i?r:null}}function lg(n){return de.isColorLike(n)}function Sl(n){return n instanceof ep}function Cl(n){return n instanceof Jm}function ag(n,e,t){const r=de.shared.setValue(e??0);return n.color=r.toNumber(),n.alpha=r.alpha===1?t.alpha:r.alpha,n.texture=oe.WHITE,{...t,...n}}function wl(n,e,t){return n.fill=e,n.color=16777215,n.texture=e.texture,n.matrix=e.transform,{...t,...n}}function Tl(n,e,t){return e.buildLinearGradient(),n.fill=e,n.color=16777215,n.texture=e.texture,n.matrix=e.transform,{...t,...n}}function ug(n,e){var i;const t={...e,...n};if(t.texture){if(t.texture!==oe.WHITE){const o=((i=t.matrix)==null?void 0:i.invert())||new fe;o.translate(t.texture.frame.x,t.texture.frame.y),o.scale(1/t.texture.source.width,1/t.texture.source.height),t.matrix=o}const s=t.texture.source.style;s.addressMode==="clamp-to-edge"&&(s.addressMode="repeat",s.update())}const r=de.shared.setValue(t.color);return t.alpha*=r.alpha,t.color=r.toNumber(),t.matrix=t.matrix?t.matrix.clone():null,t}function Ln(n,e){if(n==null)return null;const t={},r=n;return lg(n)?ag(t,n,e):Sl(n)?wl(t,n,e):Cl(n)?Tl(t,n,e):r.fill&&Sl(r.fill)?wl(r,r.fill,e):r.fill&&Cl(r.fill)?Tl(r,r.fill,e):ug(r,e)}function Pl(n,e){const{width:t,alignment:r,miterLimit:i,cap:s,join:o,...l}=e,a=Ln(n,l);return a?{width:t,alignment:r,miterLimit:i,cap:s,join:o,...a}:null}const cg=new Ae,Al=new fe,so=class et extends xt{constructor(){super(...arguments),this.uid=_e("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new _n,this._transform=new fe,this._fillStyle={...et.defaultFillStyle},this._strokeStyle={...et.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new st,this._boundsDirty=!0}clone(){const e=new et;return e.batchMode=this.batchMode,e.instructions=this.instructions.slice(),e._activePath=this._activePath.clone(),e._transform=this._transform.clone(),e._fillStyle={...this._fillStyle},e._strokeStyle={...this._strokeStyle},e._stateStack=this._stateStack.slice(),e._bounds=this._bounds.clone(),e._boundsDirty=!0,e}get fillStyle(){return this._fillStyle}set fillStyle(e){this._fillStyle=Ln(e,et.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(e){this._strokeStyle=Pl(e,et.defaultStrokeStyle)}setFillStyle(e){return this._fillStyle=Ln(e,et.defaultFillStyle),this}setStrokeStyle(e){return this._strokeStyle=Ln(e,et.defaultStrokeStyle),this}texture(e,t,r,i,s,o){return this.instructions.push({action:"texture",data:{image:e,dx:r||0,dy:i||0,dw:s||e.frame.width,dh:o||e.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:t?de.shared.setValue(t).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new _n,this}fill(e,t){let r;const i=this.instructions[this.instructions.length-1];return this._tick===0&&i&&i.action==="stroke"?r=i.data.path:r=this._activePath.clone(),r?(e!=null&&(t!==void 0&&typeof e=="number"&&(j(ve,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),e={color:e,alpha:t}),this._fillStyle=Ln(e,et.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:r}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:e,y:t}=this._activePath.getLastPoint(Ae.shared);this._activePath.clear(),this._activePath.moveTo(e,t)}stroke(e){let t;const r=this.instructions[this.instructions.length-1];return this._tick===0&&r&&r.action==="fill"?t=r.data.path:t=this._activePath.clone(),t?(e!=null&&(this._strokeStyle=Pl(e,et.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:t}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let e=0;e<2;e++){const t=this.instructions[this.instructions.length-1-e],r=this._activePath.clone();if(t&&(t.action==="stroke"||t.action==="fill"))if(t.data.hole)t.data.hole.addPath(r);else{t.data.hole=r;break}}return this._initNextPathLocation(),this}arc(e,t,r,i,s,o){this._tick++;const l=this._transform;return this._activePath.arc(l.a*e+l.c*t+l.tx,l.b*e+l.d*t+l.ty,r,i,s,o),this}arcTo(e,t,r,i,s){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*e+o.c*t+o.tx,o.b*e+o.d*t+o.ty,o.a*r+o.c*i+o.tx,o.b*r+o.d*i+o.ty,s),this}arcToSvg(e,t,r,i,s,o,l){this._tick++;const a=this._transform;return this._activePath.arcToSvg(e,t,r,i,s,a.a*o+a.c*l+a.tx,a.b*o+a.d*l+a.ty),this}bezierCurveTo(e,t,r,i,s,o,l){this._tick++;const a=this._transform;return this._activePath.bezierCurveTo(a.a*e+a.c*t+a.tx,a.b*e+a.d*t+a.ty,a.a*r+a.c*i+a.tx,a.b*r+a.d*i+a.ty,a.a*s+a.c*o+a.tx,a.b*s+a.d*o+a.ty,l),this}closePath(){var e;return this._tick++,(e=this._activePath)==null||e.closePath(),this}ellipse(e,t,r,i){return this._tick++,this._activePath.ellipse(e,t,r,i,this._transform.clone()),this}circle(e,t,r){return this._tick++,this._activePath.circle(e,t,r,this._transform.clone()),this}path(e){return this._tick++,this._activePath.addPath(e,this._transform.clone()),this}lineTo(e,t){this._tick++;const r=this._transform;return this._activePath.lineTo(r.a*e+r.c*t+r.tx,r.b*e+r.d*t+r.ty),this}moveTo(e,t){this._tick++;const r=this._transform,i=this._activePath.instructions,s=r.a*e+r.c*t+r.tx,o=r.b*e+r.d*t+r.ty;return i.length===1&&i[0].action==="moveTo"?(i[0].data[0]=s,i[0].data[1]=o,this):(this._activePath.moveTo(s,o),this)}quadraticCurveTo(e,t,r,i,s){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*e+o.c*t+o.tx,o.b*e+o.d*t+o.ty,o.a*r+o.c*i+o.tx,o.b*r+o.d*i+o.ty,s),this}rect(e,t,r,i){return this._tick++,this._activePath.rect(e,t,r,i,this._transform.clone()),this}roundRect(e,t,r,i,s){return this._tick++,this._activePath.roundRect(e,t,r,i,s,this._transform.clone()),this}poly(e,t){return this._tick++,this._activePath.poly(e,t,this._transform.clone()),this}regularPoly(e,t,r,i,s=0,o){return this._tick++,this._activePath.regularPoly(e,t,r,i,s,o),this}roundPoly(e,t,r,i,s,o){return this._tick++,this._activePath.roundPoly(e,t,r,i,s,o),this}roundShape(e,t,r,i){return this._tick++,this._activePath.roundShape(e,t,r,i),this}filletRect(e,t,r,i,s){return this._tick++,this._activePath.filletRect(e,t,r,i,s),this}chamferRect(e,t,r,i,s,o){return this._tick++,this._activePath.chamferRect(e,t,r,i,s,o),this}star(e,t,r,i,s=0,o=0){return this._tick++,this._activePath.star(e,t,r,i,s,o,this._transform.clone()),this}svg(e){return this._tick++,sg(e,this),this}restore(){const e=this._stateStack.pop();return e&&(this._transform=e.transform,this._fillStyle=e.fillStyle,this._strokeStyle=e.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(e){return this._transform.rotate(e),this}scale(e,t=e){return this._transform.scale(e,t),this}setTransform(e,t,r,i,s,o){return e instanceof fe?(this._transform.set(e.a,e.b,e.c,e.d,e.tx,e.ty),this):(this._transform.set(e,t,r,i,s,o),this)}transform(e,t,r,i,s,o){return e instanceof fe?(this._transform.append(e),this):(Al.set(e,t,r,i,s,o),this._transform.append(Al),this)}translate(e,t=e){return this._transform.translate(e,t),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const e=this._bounds;e.clear();for(let t=0;t<this.instructions.length;t++){const r=this.instructions[t],i=r.action;if(i==="fill"){const s=r.data;e.addBounds(s.path.bounds)}else if(i==="texture"){const s=r.data;e.addFrame(s.dx,s.dy,s.dx+s.dw,s.dy+s.dh,s.transform)}if(i==="stroke"){const s=r.data,o=s.style.width/2,l=s.path.bounds;e.addFrame(l.minX-o,l.minY-o,l.maxX+o,l.maxY+o)}}return e}containsPoint(e){var i;if(!this.bounds.containsPoint(e.x,e.y))return!1;const t=this.instructions;let r=!1;for(let s=0;s<t.length;s++){const o=t[s],l=o.data,a=l.path;if(!o.action||!a)continue;const c=l.style,u=a.shapePath.shapePrimitives;for(let f=0;f<u.length;f++){const h=u[f].shape;if(!c||!h)continue;const d=u[f].transform,m=d?d.applyInverse(e,cg):e;o.action==="fill"?r=h.contains(m.x,m.y):r=h.strokeContains(m.x,m.y,c.width);const x=l.hole;if(x){const p=(i=x.shapePath)==null?void 0:i.shapePrimitives;if(p)for(let b=0;b<p.length;b++)p[b].shape.contains(m.x,m.y)&&(r=!1)}if(r)return!0}}return r}destroy(e=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof e=="boolean"?e:e==null?void 0:e.texture){const r=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(r),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(r)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};so.defaultFillStyle={color:16777215,alpha:1,texture:oe.WHITE,matrix:null,fill:null};so.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:oe.WHITE,matrix:null,fill:null};let In=so;var fg=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,hg=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,Fl=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;const Lu=class Du extends ie{constructor(e){e={...Du.defaultOptions,...e};const t=J.from({vertex:{source:Fl,entryPoint:"mainVertex"},fragment:{source:Fl,entryPoint:"mainFragment"}}),r=re.from({vertex:fg,fragment:hg,name:"alpha-filter"}),{alpha:i,...s}=e,o=new cu({uAlpha:{value:i,type:"f32"}});super({...s,gpuProgram:t,glProgram:r,resources:{alphaUniforms:o}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(e){this.resources.alphaUniforms.uniforms.uAlpha=e}};Lu.defaultOptions={alpha:1};let dg=Lu,mg=0;class pg{constructor(e){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1}createTexture(e,t,r){const i=new Ke({...this.textureOptions,width:e,height:t,resolution:1,antialias:r,autoGarbageCollect:!0});return new oe({source:i,label:`texturePool_${mg++}`})}getOptimalTexture(e,t,r=1,i){let s=Math.ceil(e*r-1e-6),o=Math.ceil(t*r-1e-6);s=Vo(s),o=Vo(o);const l=(s<<17)+(o<<1)+(i?1:0);this._texturePool[l]||(this._texturePool[l]=[]);let a=this._texturePool[l].pop();return a||(a=this.createTexture(s,o,i)),a.source._resolution=r,a.source.width=s/r,a.source.height=o/r,a.source.pixelWidth=s,a.source.pixelHeight=o,a.frame.x=0,a.frame.y=0,a.frame.width=e,a.frame.height=t,a.updateUvs(),this._poolKeyHash[a.uid]=l,a}getSameSizeTexture(e,t=!1){const r=e.source;return this.getOptimalTexture(e.width,e.height,r._resolution,t)}returnTexture(e){const t=this._poolKeyHash[e.uid];this._texturePool[t].push(e)}clear(e){if(e=e!==!1,e)for(const t in this._texturePool){const r=this._texturePool[t];if(r)for(let i=0;i<r.length;i++)r[i].destroy(!0)}this._texturePool={}}}const Ue=new pg,Bu={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},gg=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function xg(n){const e=Bu[n],t=e.length;let r=gg,i="";const s="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let o;for(let l=0;l<n;l++){let a=s.replace("%index%",l.toString());o=l,l>=t&&(o=n-l-1),a=a.replace("%value%",e[o].toString()),i+=a,i+=`
`}return r=r.replace("%blur%",i),r=r.replace("%size%",n.toString()),r}const vg=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function yg(n,e){const t=Math.ceil(n/2);let r=vg,i="",s;e?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let o=0;o<n;o++){let l=s.replace("%index%",o.toString());l=l.replace("%sampleIndex%",`${o-(t-1)}.0`),i+=l,i+=`
`}return r=r.replace("%blur%",i),r=r.replace("%size%",n.toString()),r=r.replace("%dimension%",e?"z":"w"),r}function _g(n,e){const t=yg(e,n),r=xg(e);return re.from({vertex:t,fragment:r,name:`blur-${n?"horizontal":"vertical"}-pass-filter`})}var bg=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let strength = gfu.uInputSize.w * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function Sg(n,e){const t=Bu[e],r=t.length,i=[],s=[],o=[];for(let f=0;f<e;f++){i[f]=`@location(${f}) offset${f}: vec2<f32>,`,n?s[f]=`filteredCord + vec2(${f-r+1} * strength, 0.0),`:s[f]=`filteredCord + vec2(0.0, ${f-r+1} * strength),`;const h=f<r?f:e-f-1,d=t[h].toString();o[f]=`finalColor += textureSample(uTexture, uSampler, offset${f}) * ${d};`}const l=i.join(`
`),a=s.join(`
`),c=o.join(`
`),u=bg.replace("%blur-struct%",l).replace("%blur-vertex-out%",a).replace("%blur-fragment-in%",l).replace("%blur-sampling%",c);return J.from({vertex:{source:u,entryPoint:"mainVertex"},fragment:{source:u,entryPoint:"mainFragment"}})}const Gu=class ku extends ie{constructor(e){e={...ku.defaultOptions,...e};const t=_g(e.horizontal,e.kernelSize),r=Sg(e.horizontal,e.kernelSize);super({glProgram:t,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...e}),this.horizontal=e.horizontal,this._quality=0,this.quality=e.quality,this.blur=e.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(e,t,r,i){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)e.applyFilter(this,t,r,i);else{const s=Ue.getSameSizeTexture(t);let o=t,l=s;this._state.blend=!1;for(let a=0;a<this.passes-1;a++){e.applyFilter(this,o,l,e.renderer.type===er.WEBGPU);const c=l;l=o,o=c}this._state.blend=!0,e.applyFilter(this,o,r,i),Ue.returnTexture(s)}}get blur(){return this.strength}set blur(e){this.padding=1+Math.abs(e)*2,this.strength=e}get quality(){return this._quality}set quality(e){this._quality=e,this.passes=e}};Gu.defaultOptions={strength:8,quality:4,kernelSize:5};let Yn=Gu;class ys extends ie{constructor(...e){let t=e[0]??{};typeof t=="number"&&(j(ve,"BlurFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }"),t={strength:t},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.resolution=e[2]||"inherit"),e[3]!==void 0&&(t.kernelSize=e[3])),t={...Yn.defaultOptions,...t};const{strength:r,strengthX:i,strengthY:s,quality:o,...l}=t;super({...l,compatibleRenderers:er.BOTH,resources:{}}),this._repeatEdgePixels=!1,this.blurXFilter=new Yn({horizontal:!0,...t}),this.blurYFilter=new Yn({horizontal:!1,...t}),this.quality=o,this.strengthX=i??r,this.strengthY=s??r,this.repeatEdgePixels=!1}apply(e,t,r,i){const s=Math.abs(this.blurXFilter.strength),o=Math.abs(this.blurYFilter.strength);if(s&&o){const l=Ue.getSameSizeTexture(t);this.blurXFilter.blendMode="normal",this.blurXFilter.apply(e,t,l,!0),this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(e,l,r,i),Ue.returnTexture(l)}else o?(this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(e,t,r,i)):(this.blurXFilter.blendMode=this.blendMode,this.blurXFilter.apply(e,t,r,i))}updatePadding(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.blur),Math.abs(this.blurYFilter.blur))*2}get strength(){if(this.strengthX!==this.strengthY)throw new Error("BlurFilter's strengthX and strengthY are different");return this.strengthX}set strength(e){this.blurXFilter.blur=this.blurYFilter.blur=e,this.updatePadding()}get quality(){return this.blurXFilter.quality}set quality(e){this.blurXFilter.quality=this.blurYFilter.quality=e}get strengthX(){return this.blurXFilter.blur}set strengthX(e){this.blurXFilter.blur=e,this.updatePadding()}get strengthY(){return this.blurYFilter.blur}set strengthY(e){this.blurYFilter.blur=e,this.updatePadding()}get blur(){return j("8.3.0","BlurFilter.blur is deprecated, please use BlurFilter.strength instead."),this.strength}set blur(e){j("8.3.0","BlurFilter.blur is deprecated, please use BlurFilter.strength instead."),this.strength=e}get blurX(){return j("8.3.0","BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead."),this.strengthX}set blurX(e){j("8.3.0","BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead."),this.strengthX=e}get blurY(){return j("8.3.0","BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead."),this.strengthY}set blurY(e){j("8.3.0","BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead."),this.strengthY=e}get repeatEdgePixels(){return this._repeatEdgePixels}set repeatEdgePixels(e){this._repeatEdgePixels=e,this.updatePadding()}}ys.defaultOptions={strength:8,quality:4,kernelSize:5};class ft extends Va{constructor(e){e instanceof In&&(e={context:e});const{context:t,roundPixels:r,...i}=e||{};super({label:"Graphics",...i}),this.renderPipeId="graphics",t?this._context=t:this._context=this._ownedContext=new In,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=r??!1}set context(e){e!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=e,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}addBounds(e){e.addBounds(this._context.bounds)}containsPoint(e){return this._context.containsPoint(e)}onViewUpdate(){if(this._didViewChangeTick++,this._didGraphicsUpdate=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}destroy(e){this._ownedContext&&!e?this._ownedContext.destroy(e):(e===!0||(e==null?void 0:e.context)===!0)&&this._context.destroy(e),this._ownedContext=null,this._context=null,super.destroy(e)}_callContextMethod(e,t){return this.context[e](...t),this}setFillStyle(...e){return this._callContextMethod("setFillStyle",e)}setStrokeStyle(...e){return this._callContextMethod("setStrokeStyle",e)}fill(...e){return this._callContextMethod("fill",e)}stroke(...e){return this._callContextMethod("stroke",e)}texture(...e){return this._callContextMethod("texture",e)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...e){return this._callContextMethod("arc",e)}arcTo(...e){return this._callContextMethod("arcTo",e)}arcToSvg(...e){return this._callContextMethod("arcToSvg",e)}bezierCurveTo(...e){return this._callContextMethod("bezierCurveTo",e)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...e){return this._callContextMethod("ellipse",e)}circle(...e){return this._callContextMethod("circle",e)}path(...e){return this._callContextMethod("path",e)}lineTo(...e){return this._callContextMethod("lineTo",e)}moveTo(...e){return this._callContextMethod("moveTo",e)}quadraticCurveTo(...e){return this._callContextMethod("quadraticCurveTo",e)}rect(...e){return this._callContextMethod("rect",e)}roundRect(...e){return this._callContextMethod("roundRect",e)}poly(...e){return this._callContextMethod("poly",e)}regularPoly(...e){return this._callContextMethod("regularPoly",e)}roundPoly(...e){return this._callContextMethod("roundPoly",e)}roundShape(...e){return this._callContextMethod("roundShape",e)}filletRect(...e){return this._callContextMethod("filletRect",e)}chamferRect(...e){return this._callContextMethod("chamferRect",e)}star(...e){return this._callContextMethod("star",e)}svg(...e){return this._callContextMethod("svg",e)}restore(...e){return this._callContextMethod("restore",e)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...e){return this._callContextMethod("rotate",e)}scaleTransform(...e){return this._callContextMethod("scale",e)}setTransform(...e){return this._callContextMethod("setTransform",e)}transform(...e){return this._callContextMethod("transform",e)}translateTransform(...e){return this._callContextMethod("translate",e)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(e){this._context.fillStyle=e}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(e){this._context.strokeStyle=e}clone(e=!1){return e?new ft(this._context.clone()):(this._ownedContext=null,new ft(this._context))}lineStyle(e,t,r){j(ve,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const i={};return e&&(i.width=e),t&&(i.color=t),r&&(i.alpha=r),this.context.strokeStyle=i,this}beginFill(e,t){j(ve,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const r={};return e&&(r.color=e),t&&(r.alpha=t),this.context.fillStyle=r,this}endFill(){j(ve,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const e=this.context.strokeStyle;return(e.width!==In.defaultStrokeStyle.width||e.color!==In.defaultStrokeStyle.color||e.alpha!==In.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...e){return j(ve,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",e)}drawEllipse(...e){return j(ve,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",e)}drawPolygon(...e){return j(ve,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",e)}drawRect(...e){return j(ve,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",e)}drawRoundedRect(...e){return j(ve,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",e)}drawStar(...e){return j(ve,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",e)}}ot.add(fd,hd);var le=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,ae=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,Cg=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uGamma;
uniform float uContrast;
uniform float uSaturation;
uniform float uBrightness;
uniform vec4 uColor;

void main()
{
    vec4 c = texture(uTexture, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / uGamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, uSaturation), uContrast);
        rgb.r *= uColor.r;
        rgb.g *= uColor.g;
        rgb.b *= uColor.b;
        c.rgb = rgb * uBrightness;

        c.rgb *= c.a;
    }

    finalColor = c * uColor.a;
}
`,wg=`struct AdjustmentUniforms {
  uGamma: f32,
  uContrast: f32,
  uSaturation: f32,
  uBrightness: f32,
  uColor: vec4<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> adjustmentUniforms : AdjustmentUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  var sample = textureSample(uTexture, uSampler, uv);
  let color = adjustmentUniforms.uColor;

  if (sample.a > 0.0) 
  {
    sample = vec4<f32>(sample.rgb / sample.a, sample.a);
    var rgb: vec3<f32> = pow(sample.rgb, vec3<f32>(1. / adjustmentUniforms.uGamma));
    rgb = mix(vec3<f32>(.5), mix(vec3<f32>(dot(vec3<f32>(.2125, .7154, .0721), rgb)), rgb, adjustmentUniforms.uSaturation), adjustmentUniforms.uContrast);
    rgb.r *= color.r;
    rgb.g *= color.g;
    rgb.b *= color.b;
    sample = vec4<f32>(rgb.rgb * adjustmentUniforms.uBrightness, sample.a);
    sample = vec4<f32>(sample.rgb * sample.a, sample.a);
  }

  return sample * color.a;
}`,Tg=Object.defineProperty,Pg=(n,e,t)=>e in n?Tg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Nu=(n,e,t)=>(Pg(n,typeof e!="symbol"?e+"":e,t),t);const Ag=class $u extends ie{constructor(e){e={...$u.DEFAULT_OPTIONS,...e};const t=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:wg,entryPoint:"mainFragment"}}),r=re.from({vertex:le,fragment:Cg,name:"adjustment-filter"});super({gpuProgram:t,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:e.gamma,type:"f32"},uContrast:{value:e.contrast,type:"f32"},uSaturation:{value:e.saturation,type:"f32"},uBrightness:{value:e.brightness,type:"f32"},uColor:{value:[e.red,e.green,e.blue,e.alpha],type:"vec4<f32>"}}}}),Nu(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(e){this.uniforms.uGamma=e}get contrast(){return this.uniforms.uContrast}set contrast(e){this.uniforms.uContrast=e}get saturation(){return this.uniforms.uSaturation}set saturation(e){this.uniforms.uSaturation=e}get brightness(){return this.uniforms.uBrightness}set brightness(e){this.uniforms.uBrightness=e}get red(){return this.uniforms.uColor[0]}set red(e){this.uniforms.uColor[0]=e}get green(){return this.uniforms.uColor[1]}set green(e){this.uniforms.uColor[1]=e}get blue(){return this.uniforms.uColor[2]}set blue(e){this.uniforms.uColor[2]=e}get alpha(){return this.uniforms.uColor[3]}set alpha(e){this.uniforms.uColor[3]=e}};Nu(Ag,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var Fg=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`,Mg=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`,Ig=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`,zg=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`,Og=Object.defineProperty,Eg=(n,e,t)=>e in n?Og(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,$t=(n,e,t)=>(Eg(n,typeof e!="symbol"?e+"":e,t),t);const Vu=class Xu extends ie{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t))&&(j("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),t={strength:t},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.clamp=e[2])),t={...Xu.DEFAULT_OPTIONS,...t};const r=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:t!=null&&t.clamp?zg:Mg,entryPoint:"mainFragment"}}),i=re.from({vertex:le,fragment:t!=null&&t.clamp?Ig:Fg,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),$t(this,"uniforms"),$t(this,"_pixelSize",{x:0,y:0}),$t(this,"_clamp"),$t(this,"_kernels",[]),$t(this,"_blur"),$t(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=t.pixelSize??{x:1,y:1},Array.isArray(t.strength)?this.kernels=t.strength:typeof t.strength=="number"&&(this._blur=t.strength,this.quality=t.quality??3),this._clamp=!!t.clamp}apply(e,t,r,i){const s=this.pixelSizeX/t.source.width,o=this.pixelSizeY/t.source.height;let l;if(this._quality===1||this._blur===0)l=this._kernels[0]+.5,this.uniforms.uOffset[0]=l*s,this.uniforms.uOffset[1]=l*o,e.applyFilter(this,t,r,i);else{const a=Ue.getSameSizeTexture(t);let c=t,u=a,f;const h=this._quality-1;for(let d=0;d<h;d++)l=this._kernels[d]+.5,this.uniforms.uOffset[0]=l*s,this.uniforms.uOffset[1]=l*o,e.applyFilter(this,c,u,!0),f=c,c=u,u=f;l=this._kernels[h]+.5,this.uniforms.uOffset[0]=l*s,this.uniforms.uOffset[1]=l*o,e.applyFilter(this,c,r,i),Ue.returnTexture(a)}}get strength(){return this._blur}set strength(e){this._blur=e,this._generateKernels()}get quality(){return this._quality}set quality(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()}get kernels(){return this._kernels}set kernels(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max(...e)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(e){if(typeof e=="number"){this.pixelSizeX=this.pixelSizeY=e;return}if(Array.isArray(e)){this.pixelSizeX=e[0],this.pixelSizeY=e[1];return}this._pixelSize=e}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(e){this.pixelSize.x=e}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(e){this.pixelSize.y=e}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((e,t)=>e+t+.5,0))}_generateKernels(){const e=this._blur,t=this._quality,r=[e];if(e>0){let i=e;const s=e/t;for(let o=1;o<t;o++)i-=s,r.push(i)}this._kernels=r,this._updatePadding()}};$t(Vu,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let Hu=Vu;var Rg=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uBloomScale;
uniform float uBrightness;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.rgb *= uBrightness;
    vec4 bloomColor = vec4(texture(uMapTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= uBloomScale;
    finalColor = color + bloomColor;
}
`,Ug=`struct AdvancedBloomUniforms {
  uBloomScale: f32,
  uBrightness: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> advancedBloomUniforms : AdvancedBloomUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color = textureSample(uTexture, uSampler, uv);
  color = vec4<f32>(color.rgb * advancedBloomUniforms.uBrightness, color.a);

  var bloomColor = vec4<f32>(textureSample(uMapTexture, uSampler, uv).rgb, 0.0);
  bloomColor = vec4<f32>(bloomColor.rgb * advancedBloomUniforms.uBloomScale, bloomColor.a);
  
  return color + bloomColor;
}
`,Lg=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uThreshold;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > uThreshold) {
        finalColor = color;
    } else {
        finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,Dg=`struct ExtractBrightnessUniforms {
  uThreshold: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> extractBrightnessUniforms : ExtractBrightnessUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // A simple & fast algorithm for getting brightness.
  // It's inaccurate, but good enough for this feature.
  let max: f32 = max(max(color.r, color.g), color.b);
  let min: f32 = min(min(color.r, color.g), color.b);
  let brightness: f32 = (max + min) * 0.5;

  return select(vec4<f32>(0.), color, brightness > extractBrightnessUniforms.uThreshold);
}
`,Bg=Object.defineProperty,Gg=(n,e,t)=>e in n?Bg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Yu=(n,e,t)=>(Gg(n,typeof e!="symbol"?e+"":e,t),t);const Wu=class ju extends ie{constructor(e){e={...ju.DEFAULT_OPTIONS,...e};const t=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:Dg,entryPoint:"mainFragment"}}),r=re.from({vertex:le,fragment:Lg,name:"extract-brightness-filter"});super({gpuProgram:t,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:e.threshold,type:"f32"}}}}),Yu(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(e){this.uniforms.uThreshold=e}};Yu(Wu,"DEFAULT_OPTIONS",{threshold:.5});let kg=Wu;var Ng=Object.defineProperty,$g=(n,e,t)=>e in n?Ng(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,an=(n,e,t)=>($g(n,typeof e!="symbol"?e+"":e,t),t);const Vg=class qu extends ie{constructor(e){e={...qu.DEFAULT_OPTIONS,...e};const t=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:Ug,entryPoint:"mainFragment"}}),r=re.from({vertex:le,fragment:Rg,name:"advanced-bloom-filter"});super({gpuProgram:t,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:e.bloomScale,type:"f32"},uBrightness:{value:e.brightness,type:"f32"}},uMapTexture:oe.WHITE}}),an(this,"uniforms"),an(this,"bloomScale",1),an(this,"brightness",1),an(this,"_extractFilter"),an(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new kg({threshold:e.threshold}),this._blurFilter=new Hu({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),Object.assign(this,e)}apply(e,t,r,i){const s=Ue.getSameSizeTexture(t);this._extractFilter.apply(e,t,s,!0);const o=Ue.getSameSizeTexture(t);this._blurFilter.apply(e,s,o,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=o.source,e.applyFilter(this,t,r,i),Ue.returnTexture(o),Ue.returnTexture(s)}get threshold(){return this._extractFilter.threshold}set threshold(e){this._extractFilter.threshold=e}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}};an(Vg,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});var Xg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSize;
uniform vec3 uColor;
uniform float uReplaceColor;

uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(uSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture(uTexture, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(uSize));

    finalColor = (uReplaceColor > 0.5 ? vec4(uColor, 1.) : color) * character( n, vec2(-1.0) + modd * 2.0);
}
`,Hg=`struct AsciiUniforms {
    uSize: f32,
    uColor: vec3<f32>,
    uReplaceColor: f32,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> asciiUniforms : AsciiUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let pixelSize: f32 = asciiUniforms.uSize;
    let coord: vec2<f32> = mapCoord(uv);

    // get the rounded color..
    var pixCoord: vec2<f32> = pixelate(coord, vec2<f32>(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    var color = textureSample(uTexture, uSampler, pixCoord);

    // determine the character to use
    let gray: f32 = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    
    var n: f32 = 65536.0; // .
    if (gray > 0.2) {
        n = 65600.0;    // :
    }
    if (gray > 0.3) {
        n = 332772.0;   // *
    }
    if (gray > 0.4) {
        n = 15255086.0; // o
    }
    if (gray > 0.5) {
        n = 23385164.0; // &
    }
    if (gray > 0.6) {
        n = 15252014.0; // 8
    }
    if (gray > 0.7) {
        n = 13199452.0; // @
    }
    if (gray > 0.8) {
        n = 11512810.0; // #
    }

    // get the mod..
    let modd: vec2<f32> = getMod(coord, vec2<f32>(pixelSize));
    return select(color, vec4<f32>(asciiUniforms.uColor, 1.), asciiUniforms.uReplaceColor > 0.5) * character(n, vec2<f32>(-1.0) + modd * 2.0);
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return floor( coord / size ) * size;
}

fn getMod(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return moduloVec2( coord , size) / size;
}

fn character(n: f32, p: vec2<f32>) -> f32
{
    var q: vec2<f32> = floor(p*vec2<f32>(4.0, 4.0) + 2.5);

    if (clamp(q.x, 0.0, 4.0) == q.x)
    {
        if (clamp(q.y, 0.0, 4.0) == q.y)
        {
        if (i32(modulo(n/exp2(q.x + 5.0*q.y), 2.0)) == 1)
        {
            return 1.0;
        }
        }
    }

    return 0.0;
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn moduloVec2(x: vec2<f32>, y: vec2<f32>) -> vec2<f32>
{
  return x - y * floor(x/y);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord *= gfu.uInputSize.xy;
    mappedCoord += gfu.uOutputFrame.xy;
    return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord -= gfu.uOutputFrame.xy;
    mappedCoord /= gfu.uInputSize.xy;
    return mappedCoord;
}`,Yg=Object.defineProperty,Wg=(n,e,t)=>e in n?Yg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,_s=(n,e,t)=>(Wg(n,typeof e!="symbol"?e+"":e,t),t);const jg=class Ku extends ie{constructor(...e){let t=e[0]??{};typeof t=="number"&&(j("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),t={size:t});const r=(t==null?void 0:t.color)&&t.replaceColor!==!1;t={...Ku.DEFAULT_OPTIONS,...t};const i=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:Hg,entryPoint:"mainFragment"}}),s=re.from({vertex:le,fragment:Xg,name:"ascii-filter"});super({gpuProgram:i,glProgram:s,resources:{asciiUniforms:{uSize:{value:t.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),_s(this,"uniforms"),_s(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new de,this.color=t.color??16777215}get size(){return this.uniforms.uSize}set size(e){this.uniforms.uSize=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(e){this.uniforms.uReplaceColor=e?1:0}};_s(jg,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var qg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTransform;
uniform vec3 uLightColor;
uniform float uLightAlpha;
uniform vec3 uShadowColor;
uniform float uShadowAlpha;

uniform vec4 uInputSize;

void main(void) {
    vec2 transform = vec2(1.0 / uInputSize) * vec2(uTransform.x, uTransform.y);
    vec4 color = texture(uTexture, vTextureCoord);
    float light = texture(uTexture, vTextureCoord - transform).a;
    float shadow = texture(uTexture, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, uLightColor, clamp((color.a - light) * uLightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, uShadowColor, clamp((color.a - shadow) * uShadowAlpha, 0.0, 1.0));
    finalColor = vec4(color.rgb * color.a, color.a);
}
`,Kg=`struct BevelUniforms {
  uLightColor: vec3<f32>,
  uLightAlpha: f32,
  uShadowColor: vec3<f32>,
  uShadowAlpha: f32,
  uTransform: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bevelUniforms : BevelUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let transform = vec2<f32>(1.0 / gfu.uInputSize.xy) * vec2<f32>(bevelUniforms.uTransform.x, bevelUniforms.uTransform.y);
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightSample: f32 = textureSample(uTexture, uSampler, uv - transform).a;
  let shadowSample: f32 = textureSample(uTexture, uSampler, uv + transform).a;

  let light = vec4<f32>(bevelUniforms.uLightColor, bevelUniforms.uLightAlpha);
  let shadow = vec4<f32>(bevelUniforms.uShadowColor, bevelUniforms.uShadowAlpha);

  color = vec4<f32>(mix(color.rgb, light.rgb, clamp((color.a - lightSample) * light.a, 0.0, 1.0)), color.a);
  color = vec4<f32>(mix(color.rgb, shadow.rgb, clamp((color.a - shadowSample) * shadow.a, 0.0, 1.0)), color.a);
  
  return vec4<f32>(color.rgb * color.a, color.a);
}`,Zg=Object.defineProperty,Qg=(n,e,t)=>e in n?Zg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,un=(n,e,t)=>(Qg(n,typeof e!="symbol"?e+"":e,t),t);const Jg=class Zu extends ie{constructor(e){e={...Zu.DEFAULT_OPTIONS,...e};const t=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:Kg,entryPoint:"mainFragment"}}),r=re.from({vertex:le,fragment:qg,name:"bevel-filter"});super({gpuProgram:t,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:e.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:e.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),un(this,"uniforms"),un(this,"_thickness"),un(this,"_rotation"),un(this,"_lightColor"),un(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new de,this._shadowColor=new de,this.lightColor=e.lightColor??16777215,this.shadowColor=e.shadowColor??0,Object.assign(this,e)}get rotation(){return this._rotation/xn}set rotation(e){this._rotation=e*xn,this._updateTransform()}get thickness(){return this._thickness}set thickness(e){this._thickness=e,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(e){this._lightColor.setValue(e);const[t,r,i]=this._lightColor.toArray();this.uniforms.uLightColor[0]=t,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=i}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(e){this.uniforms.uLightAlpha=e}get shadowColor(){return this._shadowColor.value}set shadowColor(e){this._shadowColor.setValue(e);const[t,r,i]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=t,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=i}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(e){this.uniforms.uShadowAlpha=e}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};un(Jg,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var ex=Object.defineProperty,tx=(n,e,t)=>e in n?ex(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,zr=(n,e,t)=>(tx(n,typeof e!="symbol"?e+"":e,t),t);const nx=class Qu extends dg{constructor(...e){let t=e[0]??{};if(typeof t=="number"||Array.isArray(t)||"x"in t&&"y"in t){j("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=t;Array.isArray(r)&&(r={x:r[0],y:r[1]}),t={strength:r},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.resolution=e[2]),e[3]!==void 0&&(t.kernelSize=e[3])}t={...Qu.DEFAULT_OPTIONS,...t},super(),zr(this,"_blurXFilter"),zr(this,"_blurYFilter"),zr(this,"_strength"),this._strength={x:2,y:2},t.strength&&(typeof t.strength=="number"?(this._strength.x=t.strength,this._strength.y=t.strength):(this._strength.x=t.strength.x,this._strength.y=t.strength.y)),this._blurXFilter=new Yn({...t,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new Yn({...t,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,t)}apply(e,t,r,i){const s=Ue.getSameSizeTexture(t);e.applyFilter(this,t,r,i),this._blurXFilter.apply(e,t,s,!0),this._blurYFilter.apply(e,s,r,!1),Ue.returnTexture(s)}get strength(){return this._strength}set strength(e){this._strength=typeof e=="number"?{x:e,y:e}:e,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(e){this.strength.x=e,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(e){this.strength.y=e,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return j("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(e){j("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=e}get blurX(){return j("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(e){j("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=e}get blurY(){return j("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(e){j("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=e}};zr(nx,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var rx=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

void main()
{
    vec2 coord = vTextureCoord * uInputSize.xy;
    coord -= uCenter * uDimensions.xy;
    float distance = length(coord);

    if (distance < uRadius) {
        float percent = distance / uRadius;
        if (uStrength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uStrength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + uStrength * 0.75) * uRadius / distance, 1.0 - percent);
        }
    }

    coord += uCenter * uDimensions.xy;
    coord /= uInputSize.xy;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);

    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    finalColor = color;
}
`,ix=`struct BulgePinchUniforms {
  uDimensions: vec2<f32>,
  uCenter: vec2<f32>,
  uRadius: f32,
  uStrength: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bulgePinchUniforms : BulgePinchUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let dimensions: vec2<f32> = bulgePinchUniforms.uDimensions;
  let center: vec2<f32> = bulgePinchUniforms.uCenter;
  let radius: f32 = bulgePinchUniforms.uRadius;
  let strength: f32 = bulgePinchUniforms.uStrength;
  var coord: vec2<f32> = (uv * gfu.uInputSize.xy) - center * dimensions.xy;

  let distance: f32 = length(coord);

  if (distance < radius) {
      let percent: f32 = distance / radius;
      if (strength > 0.0) {
          coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
      } else {
          coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
      }
  }
    coord += (center * dimensions.xy);
    coord /= gfu.uInputSize.xy;

    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);
    var color: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    if (coord.x != clampedCoord.x && coord.y != clampedCoord.y) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    return color;
}

fn compareVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
  if (x.x == y.x && x.y == y.y)
  {
    return true;
  }

  return false;
}`,sx=Object.defineProperty,ox=(n,e,t)=>e in n?sx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ju=(n,e,t)=>(ox(n,typeof e!="symbol"?e+"":e,t),t);const lx=class ec extends ie{constructor(e){e={...ec.DEFAULT_OPTIONS,...e};const t=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:ix,entryPoint:"mainFragment"}}),r=re.from({vertex:le,fragment:rx,name:"bulge-pinch-filter"});super({gpuProgram:t,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:e.center,type:"vec2<f32>"},uRadius:{value:e.radius,type:"f32"},uStrength:{value:e.strength,type:"f32"}}}}),Ju(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,e.applyFilter(this,t,r,i)}get center(){return this.uniforms.uCenter}set center(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}};Ju(lx,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var ax=`precision highp float;
in vec2 vTextureCoord;
in vec2 vFilterCoord;
out vec4 finalColor;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform sampler2D uTexture;
uniform vec4 uOptions;
uniform vec2 uCounts;
uniform vec3 uColors[MAX_STOPS];
uniform vec4 uStops[MAX_STOPS];

const float PI = 3.1415926538;
const float PI_2 = PI*2.;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(pos, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    int uType = int(uOptions[0]);
    float uAngle = uOptions[1];
    float uAlpha = uOptions[2];
    float uReplace = uOptions[3];

    int uNumStops = int(uCounts[0]);
    float uMaxColors = uCounts[1];

    // current/original color
    vec4 currentColor = texture(uTexture, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        finalColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, int(uType), radians(uAngle));

    // check gradient bounds
    float offsetMin = uStops[0][0];
    float offsetMax = 0.0;

    int numStops = int(uNumStops);

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == numStops-1){ // last index
            offsetMax = uStops[i][0];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        finalColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0.) {
        float stepSize = 1./uMaxColors;
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uStops[i][0]) {
            from = ColorStop(uStops[i][0], uColors[i], uStops[i][1]);
            to = ColorStop(uStops[i+1][0], uColors[i+1], uStops[i+1][1]);
        }

        if (i == numStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace < 0.5) {
        // mix resulting color with current color
        finalColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        finalColor = gradientColor;
    }
}
`,ux=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterCoord = vTextureCoord * uInputSize.xy / uOutputFrame.zw;
}
`,Ml=`struct BaseUniforms {
  uOptions: vec4<f32>,
  uCounts: vec2<f32>,
};

struct StopsUniforms {
  uColors: array<vec3<f32>, MAX_STOPS>,
  uStops: array<vec4<f32>, MAX_STOPS>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> baseUniforms : BaseUniforms;
@group(1) @binding(1) var<uniform> stopsUniforms : StopsUniforms;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn filterCoord( vTextureCoord:vec2<f32> ) -> vec2<f32>
{
    return vTextureCoord * gfu.uInputSize.xy / gfu.uOutputFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  let vTextureCoord: vec2<f32> = filterTextureCoord(aPosition);
  return VSOutput(
   filterVertexPosition(aPosition),
   vTextureCoord,
   filterCoord(vTextureCoord),
  );
}

struct ColorStop {
  offset: f32,
  color: vec3<f32>,
  alpha: f32,
};

fn rotate2d(angle: f32) -> mat2x2<f32>{
  return mat2x2(cos(angle), -sin(angle),
  sin(angle), cos(angle));
}

fn projectLinearPosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = vec2<f32>(0.5);
  var result: vec2<f32> = pos - center;
  result = rotate2d(angle) * result;
  result = result + center;
  return clamp(result.x, 0.0, 1.0);
}

fn projectRadialPosition(pos: vec2<f32>) -> f32 {
  var r: f32 = distance(pos, vec2<f32>(0.5));
  return clamp(2.0 * r, 0.0, 1.0);
}

fn projectAnglePosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = pos - vec2<f32>(0.5, 0.5);
  var polarAngle: f32 = atan2(-center.y, center.x);
  return ((polarAngle + angle) % PI_2) / PI_2;
}

fn projectPosition(pos: vec2<f32>, gradientType: i32, angle: f32) -> f32 {
  if (gradientType == TYPE_LINEAR) {
      return projectLinearPosition(pos, angle);
  } else if (gradientType == TYPE_RADIAL) {
      return projectRadialPosition(pos);
  } else if (gradientType == TYPE_CONIC) {
      return projectAnglePosition(pos, angle);
  }

  return pos.y;
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
) -> @location(0) vec4<f32> {
  let uType: i32 = i32(baseUniforms.uOptions[0]);
  let uAngle: f32 = baseUniforms.uOptions[1];
  let uAlpha: f32 = baseUniforms.uOptions[2];
  let uReplace: f32 = baseUniforms.uOptions[3];

  let uNumStops: i32 = i32(baseUniforms.uCounts[0]);
  let uMaxColors: f32 = baseUniforms.uCounts[1];

  // current/original color
  var currentColor: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // skip calculations if gradient alpha is 0
  if (uAlpha == 0.0) { return currentColor; }

  // project position
  var y: f32 = projectPosition(coord, uType, radians(uAngle));

  // check gradient bounds
  var offsetMin: f32 = stopsUniforms.uStops[0][0];
  var offsetMax: f32 = 0.0;

  let numStops: i32 = uNumStops;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (i == numStops - 1) { // last index
          offsetMax = stopsUniforms.uStops[i][0];
      }
  }

  if (y  < offsetMin || y > offsetMax) { return currentColor; }

  // limit colors
  if (uMaxColors > 0.0) {
      var stepSize: f32 = 1.0 / uMaxColors;
      var stepNumber: f32 = floor(y / stepSize);
      y = stepSize * (stepNumber + 0.5); // offset by 0.5 to use color from middle of segment
  }

  // find color stops
  var stopFrom: ColorStop;
  var stopTo: ColorStop;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (y >= stopsUniforms.uStops[i][0]) {
          stopFrom = ColorStop(stopsUniforms.uStops[i][0], stopsUniforms.uColors[i], stopsUniforms.uStops[i][1]);
          stopTo = ColorStop(stopsUniforms.uStops[i + 1][0], stopsUniforms.uColors[i + 1], stopsUniforms.uStops[i + 1][1]);
      }

      if (i == numStops - 1) { // last index
          break;
      }
  }

  // mix colors from stops
  var colorFrom: vec4<f32> = vec4<f32>(stopFrom.color * stopFrom.alpha, stopFrom.alpha);
  var colorTo: vec4<f32> = vec4<f32>(stopTo.color * stopTo.alpha, stopTo.alpha);

  var segmentHeight: f32 = stopTo.offset - stopFrom.offset;
  var relativePos: f32 = y - stopFrom.offset; // position from 0 to [segmentHeight]
  var relativePercent: f32 = relativePos / segmentHeight; // position in percent between [from.offset] and [to.offset].

  var gradientAlpha: f32 = uAlpha * currentColor.a;
  var gradientColor: vec4<f32> = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

  if (uReplace < 0.5) {
      // mix resulting color with current color
      return gradientColor + currentColor * (1.0 - gradientColor.a);
  } else {
      // replace with gradient color
      return gradientColor;
  }
}

const PI: f32 = 3.14159265358979323846264;
const PI_2: f32 = PI * 2.0;

const TYPE_LINEAR: i32 = 0;
const TYPE_RADIAL: i32 = 1;
const TYPE_CONIC: i32 = 2;
const MAX_STOPS: i32 = 32;`,en=en||{};en.stringify=function(){var n={"visit_linear-gradient":function(e){return n.visit_gradient(e)},"visit_repeating-linear-gradient":function(e){return n.visit_gradient(e)},"visit_radial-gradient":function(e){return n.visit_gradient(e)},"visit_repeating-radial-gradient":function(e){return n.visit_gradient(e)},visit_gradient:function(e){var t=n.visit(e.orientation);return t&&(t+=", "),e.type+"("+t+n.visit(e.colorStops)+")"},visit_shape:function(e){var t=e.value,r=n.visit(e.at),i=n.visit(e.style);return i&&(t+=" "+i),r&&(t+=" at "+r),t},"visit_default-radial":function(e){var t="",r=n.visit(e.at);return r&&(t+=r),t},"visit_extent-keyword":function(e){var t=e.value,r=n.visit(e.at);return r&&(t+=" at "+r),t},"visit_position-keyword":function(e){return e.value},visit_position:function(e){return n.visit(e.value.x)+" "+n.visit(e.value.y)},"visit_%":function(e){return e.value+"%"},visit_em:function(e){return e.value+"em"},visit_px:function(e){return e.value+"px"},visit_literal:function(e){return n.visit_color(e.value,e)},visit_hex:function(e){return n.visit_color("#"+e.value,e)},visit_rgb:function(e){return n.visit_color("rgb("+e.value.join(", ")+")",e)},visit_rgba:function(e){return n.visit_color("rgba("+e.value.join(", ")+")",e)},visit_color:function(e,t){var r=e,i=n.visit(t.length);return i&&(r+=" "+i),r},visit_angular:function(e){return e.value+"deg"},visit_directional:function(e){return"to "+e.value},visit_array:function(e){var t="",r=e.length;return e.forEach(function(i,s){t+=n.visit(i),s<r-1&&(t+=", ")}),t},visit:function(e){if(!e)return"";var t="";if(e instanceof Array)return n.visit_array(e,t);if(e.type){var r=n["visit_"+e.type];if(r)return r(e);throw Error("Missing visitor visit_"+e.type)}else throw Error("Invalid node.")}};return function(e){return n.visit(e)}}();var en=en||{};en.parse=function(){var n={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},e="";function t(S){var H=new Error(e+": "+S);throw H.source=e,H}function r(){var S=i();return e.length>0&&t("Invalid input not EOF"),S}function i(){return y(s)}function s(){return o("linear-gradient",n.linearGradient,a)||o("repeating-linear-gradient",n.repeatingLinearGradient,a)||o("radial-gradient",n.radialGradient,f)||o("repeating-radial-gradient",n.repeatingRadialGradient,f)}function o(S,H,E){return l(H,function(X){var Fe=E();return Fe&&(T(n.comma)||t("Missing comma before color stops")),{type:S,orientation:Fe,colorStops:y(w)}})}function l(S,H){var E=T(S);if(E){T(n.startCall)||t("Missing (");var X=H(E);return T(n.endCall)||t("Missing )"),X}}function a(){return c()||u()}function c(){return L("directional",n.sideOrCorner,1)}function u(){return L("angular",n.angleValue,1)}function f(){var S,H=h(),E;return H&&(S=[],S.push(H),E=e,T(n.comma)&&(H=h(),H?S.push(H):e=E)),S}function h(){var S=d()||m();if(S)S.at=p();else{var H=x();if(H){S=H;var E=p();E&&(S.at=E)}else{var X=b();X&&(S={type:"default-radial",at:X})}}return S}function d(){var S=L("shape",/^(circle)/i,0);return S&&(S.style=B()||x()),S}function m(){var S=L("shape",/^(ellipse)/i,0);return S&&(S.style=ee()||x()),S}function x(){return L("extent-keyword",n.extentKeywords,1)}function p(){if(L("position",/^at/,0)){var S=b();return S||t("Missing positioning value"),S}}function b(){var S=_();if(S.x||S.y)return{type:"position",value:S}}function _(){return{x:ee(),y:ee()}}function y(S){var H=S(),E=[];if(H)for(E.push(H);T(n.comma);)H=S(),H?E.push(H):t("One extra comma");return E}function w(){var S=$();return S||t("Expected color definition"),S.length=ee(),S}function $(){return N()||O()||k()||R()}function R(){return L("literal",n.literalColor,0)}function N(){return L("hex",n.hexColor,1)}function k(){return l(n.rgbColor,function(){return{type:"rgb",value:y(I)}})}function O(){return l(n.rgbaColor,function(){return{type:"rgba",value:y(I)}})}function I(){return T(n.number)[1]}function ee(){return L("%",n.percentageValue,1)||Z()||B()}function Z(){return L("position-keyword",n.positionKeywords,1)}function B(){return L("px",n.pixelValue,1)||L("em",n.emValue,1)}function L(S,H,E){var X=T(H);if(X)return{type:S,value:X[E]}}function T(S){var H,E;return E=/^[\n\r\t\s]+/.exec(e),E&&z(E[0].length),H=S.exec(e),H&&z(H[0].length),H}function z(S){e=e.substr(S)}return function(S){return e=S.toString(),r()}}();var cx=en.parse;en.stringify;function fx(n){const e=cx(yx(n));if(e.length===0)throw new Error("Invalid CSS gradient.");if(e.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const t=e[0],r=hx(t.type),i=dx(t.colorStops),s=xx(t.orientation);return{type:r,stops:i,angle:s}}function hx(n){const e={"linear-gradient":0,"radial-gradient":1};if(!(n in e))throw new Error(`Unsupported gradient type "${n}"`);return e[n]}function dx(n){const e=px(n),t=[],r=new de;for(let i=0;i<n.length;i++){const s=mx(n[i]),o=r.setValue(s).toArray();t.push({offset:e[i],color:o.slice(0,3),alpha:o[3]})}return t}function mx(n){switch(n.type){case"hex":return`#${n.value}`;case"literal":return n.value;default:return`${n.type}(${n.value.join(",")})`}}function px(n){const e=[];for(let s=0;s<n.length;s++){const o=n[s];let l=-1;o.type==="literal"&&o.length&&"type"in o.length&&o.length.type==="%"&&"value"in o.length&&(l=parseFloat(o.length.value)/100),e.push(l)}const r=s=>{for(let o=s;o<e.length;o++)if(e[o]!==-1)return{indexDelta:o-s,offset:e[o]};return{indexDelta:e.length-1-s,offset:1}};let i=0;for(let s=0;s<e.length;s++){const o=e[s];if(o!==-1)i=o;else if(s===0)e[s]=0;else if(s+1===e.length)e[s]=1;else{const l=r(s),c=(l.offset-i)/(1+l.indexDelta);for(let u=0;u<=l.indexDelta;u++)e[s+u]=i+(u+1)*c;s+=l.indexDelta,i=e[s]}}return e.map(gx)}function gx(n){return n.toString().length>6?parseFloat(n.toString().substring(0,6)):n}function xx(n){if(typeof n>"u")return 0;if("type"in n&&"value"in n)switch(n.type){case"angular":return parseFloat(n.value);case"directional":return vx(n.value)}return 0}function vx(n){const e={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(n in e))throw new Error(`Unsupported directional value "${n}"`);return e[n]}function yx(n){let e=n.replace(/\s{2,}/gu," ");return e=e.replace(/;/g,""),e=e.replace(/ ,/g,","),e=e.replace(/\( /g,"("),e=e.replace(/ \)/g,")"),e.trim()}var _x=Object.defineProperty,bx=(n,e,t)=>e in n?_x(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,qt=(n,e,t)=>(bx(n,typeof e!="symbol"?e+"":e,t),t);const Ni=90;function Sx(n){return[...n].sort((e,t)=>e.offset-t.offset)}const bn=class Or extends ie{constructor(e){if(e&&"css"in e?e={...fx(e.css||""),alpha:e.alpha??Or.defaults.alpha,maxColors:e.maxColors??Or.defaults.maxColors}:e={...Or.defaults,...e},!e.stops||e.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const t=J.from({vertex:{source:Ml,entryPoint:"mainVertex"},fragment:{source:Ml,entryPoint:"mainFragment"}}),r=re.from({vertex:ux,fragment:ax,name:"color-gradient-filter"}),i=32;super({gpuProgram:t,glProgram:r,resources:{baseUniforms:{uOptions:{value:[e.type,e.angle??Ni,e.alpha,e.replace?1:0],type:"vec4<f32>"},uCounts:{value:[e.stops.length,e.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(i*3),type:"vec3<f32>",size:i},uStops:{value:new Float32Array(i*4),type:"vec4<f32>",size:i}}}}),qt(this,"baseUniforms"),qt(this,"stopsUniforms"),qt(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,e)}get stops(){return this._stops}set stops(e){const t=Sx(e),r=new de;let i,s,o;for(let l=0;l<t.length;l++){r.setValue(t[l].color);const a=l*3;[i,s,o]=r.toArray(),this.stopsUniforms.uColors[a]=i,this.stopsUniforms.uColors[a+1]=s,this.stopsUniforms.uColors[a+2]=o,this.stopsUniforms.uStops[l*4]=t[l].offset,this.stopsUniforms.uStops[l*4+1]=t[l].alpha}this.baseUniforms.uCounts[0]=t.length,this._stops=t}get type(){return this.baseUniforms.uOptions[0]}set type(e){this.baseUniforms.uOptions[0]=e}get angle(){return this.baseUniforms.uOptions[1]+Ni}set angle(e){this.baseUniforms.uOptions[1]=e-Ni}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(e){this.baseUniforms.uOptions[2]=e}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(e){this.baseUniforms.uCounts[1]=e}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(e){this.baseUniforms.uOptions[3]=e?1:0}};qt(bn,"LINEAR",0);qt(bn,"RADIAL",1);qt(bn,"CONIC",2);qt(bn,"defaults",{type:bn.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});let Cx=bn;var wx=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uMix;
uniform float uSize;
uniform float uSliceSize;
uniform float uSlicePixelSize;
uniform float uSliceInnerSize;

void main() {
    vec4 color = texture(uTexture, vTextureCoord.xy);
    vec4 adjusted;

    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = uSize - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = uSlicePixelSize * 0.5 + color.r * uSliceInnerSize;
        float s0 = xOffset + (zSlice0 * uSliceSize);
        float s1 = xOffset + (zSlice1 * uSliceSize);
        float yOffset = uSliceSize * 0.5 + color.g * (1.0 - uSliceSize);
        vec4 slice0Color = texture(uMapTexture, vec2(s0,yOffset));
        vec4 slice1Color = texture(uMapTexture, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }

    finalColor = vec4(mix(color, adjusted, uMix).rgb, color.a);

}`,Tx=`struct ColorMapUniforms {
  uMix: f32,
  uSize: f32,
  uSliceSize: f32,
  uSlicePixelSize: f32,
  uSliceInnerSize: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : ColorMapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color:vec4<f32> = textureSample(uTexture, uSampler, uv);

  var adjusted: vec4<f32>;

  var altColor: vec4<f32> = vec4<f32>(color.rgb / color.a, color.a);
  let innerWidth: f32 = colorMapUniforms.uSize - 1.0;
  let zSlice0: f32 = min(floor(color.b * innerWidth), innerWidth);
  let zSlice1: f32 = min(zSlice0 + 1.0, innerWidth);
  let xOffset: f32 = colorMapUniforms.uSlicePixelSize * 0.5 + color.r * colorMapUniforms.uSliceInnerSize;
  let s0: f32 = xOffset + (zSlice0 * colorMapUniforms.uSliceSize);
  let s1: f32 = xOffset + (zSlice1 * colorMapUniforms.uSliceSize);
  let yOffset: f32 = colorMapUniforms.uSliceSize * 0.5 + color.g * (1.0 - colorMapUniforms.uSliceSize);
  let slice0Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s0,yOffset));
  let slice1Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s1,yOffset));
  let zOffset: f32 = fract(color.b * innerWidth);
  adjusted = mix(slice0Color, slice1Color, zOffset);
  altColor = vec4<f32>(color.rgb * color.a, color.a);

  let realColor: vec4<f32> = select(color, altColor, color.a > 0.0);

  return vec4<f32>(mix(realColor, adjusted, colorMapUniforms.uMix).rgb, realColor.a);
}`,Px=Object.defineProperty,Ax=(n,e,t)=>e in n?Px(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,at=(n,e,t)=>(Ax(n,typeof e!="symbol"?e+"":e,t),t);const Fx=class tc extends ie{constructor(...e){let t=e[0]??{};if((t instanceof oe||t instanceof Ke)&&(j("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),t={colorMap:t},e[1]!==void 0&&(t.nearest=e[1]),e[2]!==void 0&&(t.mix=e[2])),t={...tc.DEFAULT_OPTIONS,...t},!t.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:Tx,entryPoint:"mainFragment"}}),i=re.from({vertex:le,fragment:wx,name:"color-map-filter"});super({gpuProgram:r,glProgram:i,resources:{colorMapUniforms:{uMix:{value:t.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:t.colorMap.source,uMapSampler:t.colorMap.source.style}}),at(this,"uniforms"),at(this,"_size",0),at(this,"_sliceSize",0),at(this,"_slicePixelSize",0),at(this,"_sliceInnerSize",0),at(this,"_nearest",!1),at(this,"_scaleMode","linear"),at(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,t)}get mix(){return this.uniforms.uMix}set mix(e){this.uniforms.uMix=e}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(e){if(!e||e===this.colorMap)return;const t=e instanceof oe?e.source:e;t.style.scaleMode=this._scaleMode,t.autoGenerateMipmaps=!1,this._size=t.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=t,this._colorMap=e}get nearest(){return this._nearest}set nearest(e){this._nearest=e,this._scaleMode=e?"nearest":"linear";const t=this._colorMap;t&&t.source&&(t.source.scaleMode=this._scaleMode,t.source.autoGenerateMipmaps=!1,t.source.style.update(),t.source.update())}updateColorMap(){const e=this._colorMap;e!=null&&e.source&&(e.source.update(),this.colorMap=e)}destroy(){var e;(e=this._colorMap)==null||e.destroy(),super.destroy()}};at(Fx,"DEFAULT_OPTIONS",{colorMap:oe.WHITE,nearest:!1,mix:1});var Mx=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,Ix=`struct ColorOverlayUniforms {
    uColor: vec3<f32>,
    uAlpha: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorOverlayUniforms : ColorOverlayUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let c = textureSample(uTexture, uSampler, uv);
    return vec4<f32>(mix(c.rgb, colorOverlayUniforms.uColor.rgb, c.a * colorOverlayUniforms.uAlpha), c.a);
}
`,zx=Object.defineProperty,Ox=(n,e,t)=>e in n?zx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,bs=(n,e,t)=>(Ox(n,typeof e!="symbol"?e+"":e,t),t);const Ex=class nc extends ie{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t)||t instanceof Float32Array)&&(j("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),t={color:t},e[1]!==void 0&&(t.alpha=e[1])),t={...nc.DEFAULT_OPTIONS,...t};const r=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:Ix,entryPoint:"mainFragment"}}),i=re.from({vertex:le,fragment:Mx,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:i,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"}}}}),bs(this,"uniforms"),bs(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new de,this.color=t.color??0}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};bs(Ex,"DEFAULT_OPTIONS",{color:0,alpha:1});var Rx=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uOriginalColor;
uniform vec3 uTargetColor;
uniform float uTolerance;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    vec3 colorDiff = uOriginalColor - (c.rgb / max(c.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, uTolerance);
    finalColor = vec4(mix(c.rgb, (uTargetColor + colorDiff) * c.a, doReplace), c.a);
}
`,Ux=`struct ColorReplaceUniforms {
  uOriginalColor: vec3<f32>,
  uTargetColor: vec3<f32>,
  uTolerance: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorReplaceUniforms : ColorReplaceUniforms;

@fragment
fn mainFragment(
   @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sample: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let colorDiff: vec3<f32> = colorReplaceUniforms.uOriginalColor - (sample.rgb / max(sample.a, 0.0000000001));
  let colorDistance: f32 = length(colorDiff);
  let doReplace: f32 = step(colorDistance, colorReplaceUniforms.uTolerance);

  return vec4<f32>(mix(sample.rgb, (colorReplaceUniforms.uTargetColor + colorDiff) * sample.a, doReplace), sample.a);
}`,Lx=Object.defineProperty,Dx=(n,e,t)=>e in n?Lx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Er=(n,e,t)=>(Dx(n,typeof e!="symbol"?e+"":e,t),t);const Bx=class rc extends ie{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t)||t instanceof Float32Array)&&(j("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),t={originalColor:t},e[1]!==void 0&&(t.targetColor=e[1]),e[2]!==void 0&&(t.tolerance=e[2])),t={...rc.DEFAULT_OPTIONS,...t};const r=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:Ux,entryPoint:"mainFragment"}}),i=re.from({vertex:le,fragment:Rx,name:"color-replace-filter"});super({gpuProgram:r,glProgram:i,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:t.tolerance,type:"f32"}}}}),Er(this,"uniforms"),Er(this,"_originalColor"),Er(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new de,this._targetColor=new de,this.originalColor=t.originalColor??16711680,this.targetColor=t.targetColor??0,Object.assign(this,t)}get originalColor(){return this._originalColor.value}set originalColor(e){this._originalColor.setValue(e);const[t,r,i]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=t,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=i}get targetColor(){return this._targetColor.value}set targetColor(e){this._targetColor.setValue(e);const[t,r,i]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=t,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=i}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set newColor(e){j("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=e}get newColor(){return j("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(e){j("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=e}get epsilon(){return j("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};Er(Bx,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var Gx=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
uniform mat3 uMatrix;

void main(void)
{
    vec4 c11 = texture(uTexture, vTextureCoord - uTexelSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uTexelSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y - uTexelSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y)); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y)); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y + uTexelSize.y)); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uTexelSize.y)); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uTexelSize); // bottom right

    finalColor =
        c11 * uMatrix[0][0] + c12 * uMatrix[0][1] + c13 * uMatrix[0][2] +
        c21 * uMatrix[1][0] + c22 * uMatrix[1][1] + c23 * uMatrix[1][2] +
        c31 * uMatrix[2][0] + c32 * uMatrix[2][1] + c33 * uMatrix[2][2];

    finalColor.a = c22.a;
}`,kx=`struct ConvolutionUniforms {
    uMatrix: mat3x3<f32>,
    uTexelSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> convolutionUniforms : ConvolutionUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let texelSize = convolutionUniforms.uTexelSize;
    let matrix = convolutionUniforms.uMatrix;

    let c11: vec4<f32> = textureSample(uTexture, uSampler, uv - texelSize); // top left
    let c12: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y - texelSize.y)); // top center
    let c13: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y - texelSize.y)); // top right

    let c21: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y)); // mid left
    let c22: vec4<f32> = textureSample(uTexture, uSampler, uv); // mid center
    let c23: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y)); // mid right

    let c31: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y + texelSize.y)); // bottom left
    let c32: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y + texelSize.y)); // bottom center
    let c33: vec4<f32> = textureSample(uTexture, uSampler, uv + texelSize); // bottom right

    var finalColor: vec4<f32> = vec4<f32>(
        c11 * matrix[0][0] + c12 * matrix[0][1] + c13 * matrix[0][2] +
        c21 * matrix[1][0] + c22 * matrix[1][1] + c23 * matrix[1][2] +
        c31 * matrix[2][0] + c32 * matrix[2][1] + c33 * matrix[2][2]
    );

    finalColor.a = c22.a;

    return finalColor;
}`,Nx=Object.defineProperty,$x=(n,e,t)=>e in n?Nx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ic=(n,e,t)=>($x(n,typeof e!="symbol"?e+"":e,t),t);const Vx=class sc extends ie{constructor(...e){let t=e[0]??{};Array.isArray(t)&&(j("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),t={matrix:t},e[1]!==void 0&&(t.width=e[1]),e[2]!==void 0&&(t.height=e[2])),t={...sc.DEFAULT_OPTIONS,...t};const r=t.width??200,i=t.height??200,s=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:kx,entryPoint:"mainFragment"}}),o=re.from({vertex:le,fragment:Gx,name:"convolution-filter"});super({gpuProgram:s,glProgram:o,resources:{convolutionUniforms:{uMatrix:{value:t.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/i},type:"vec2<f32>"}}}}),ic(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=i}get matrix(){return this.uniforms.uMatrix}set matrix(e){e.forEach((t,r)=>{this.uniforms.uMatrix[r]=t})}get width(){return 1/this.uniforms.uTexelSize.x}set width(e){this.uniforms.uTexelSize.x=1/e}get height(){return 1/this.uniforms.uTexelSize.y}set height(e){this.uniforms.uTexelSize.y=1/e}};ic(Vx,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var Xx=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`,Hx=`struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`,Yx=Object.defineProperty,Wx=(n,e,t)=>e in n?Yx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Rr=(n,e,t)=>(Wx(n,typeof e!="symbol"?e+"":e,t),t);const jx=class oc extends ie{constructor(e){e={...oc.DEFAULT_OPTIONS,...e};const t=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:Hx,entryPoint:"mainFragment"}}),r=re.from({vertex:le,fragment:Xx,name:"crt-filter"});super({gpuProgram:t,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:e.seed,type:"f32"},uTime:{value:e.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Rr(this,"uniforms"),Rr(this,"seed"),Rr(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,e.applyFilter(this,t,r,i)}get curvature(){return this.uniforms.uLine[0]}set curvature(e){this.uniforms.uLine[0]=e}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(e){this.uniforms.uLine[1]=e}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(e){this.uniforms.uLine[2]=e}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(e){this.uniforms.uLine[3]=e?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(e){this.uniforms.uVignette[0]=e}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(e){this.uniforms.uVignette[1]=e}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(e){this.uniforms.uVignette[2]=e}};Rr(jx,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var qx=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAngle;
uniform float uScale;
uniform bool uGrayScale;

uniform vec4 uInputSize;

float pattern()
{
    float s = sin(uAngle), c = cos(uAngle);
    vec2 tex = vTextureCoord * uInputSize.xy;
    vec2 point = vec2(
        c * tex.x - s * tex.y,
        s * tex.x + c * tex.y
    ) * uScale;
    return (sin(point.x) * sin(point.y)) * 4.0;
    }

    void main()
    {
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 colorRGB = vec3(color);

    if (uGrayScale)
    {
        colorRGB = vec3(color.r + color.g + color.b) / 3.0;
    }

    finalColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`,Kx=`struct DotUniforms {
  uScale:f32,
  uAngle:f32,
  uGrayScale:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dotUniforms : DotUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let gray: vec3<f32> = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)));
  // dotUniforms.uGrayScale == 1 doesn't ever pass so it is converted to a float and compared to 0.5 instead 
  let finalColor: vec3<f32> = select(color.rgb, gray, f32(dotUniforms.uGrayScale) >= 0.5);

  return vec4<f32>(finalColor * 10.0 - 5.0 + pattern(uv), color.a);
}

fn pattern(uv: vec2<f32>) -> f32
{
  let s: f32 = sin(dotUniforms.uAngle);
  let c: f32 = cos(dotUniforms.uAngle);
  
  let tex: vec2<f32> = uv * gfu.uInputSize.xy;
  
  let p: vec2<f32> = vec2<f32>(
      c * tex.x - s * tex.y,
      s * tex.x + c * tex.y
  ) * dotUniforms.uScale;

  return (sin(p.x) * sin(p.y)) * 4.0;
}`,Zx=Object.defineProperty,Qx=(n,e,t)=>e in n?Zx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Jx=(n,e,t)=>(Qx(n,e+"",t),t);const e0=class lc extends ie{constructor(...e){let t=e[0]??{};typeof t=="number"&&(j("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),t={scale:t},e[1]!==void 0&&(t.angle=e[1]),e[2]!==void 0&&(t.grayscale=e[2])),t={...lc.DEFAULT_OPTIONS,...t};const r={uScale:{value:t.scale,type:"f32"},uAngle:{value:t.angle,type:"f32"},uGrayScale:{value:t.grayscale?1:0,type:"f32"}},i=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:Kx,entryPoint:"mainFragment"}}),s=re.from({vertex:le,fragment:qx,name:"dot-filter"});super({gpuProgram:i,glProgram:s,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(e){this.resources.dotUniforms.uniforms.uScale=e}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(e){this.resources.dotUniforms.uniforms.uAngle=e}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(e){this.resources.dotUniforms.uniforms.uGrayScale=e?1:0}};Jx(e0,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var t0=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`,n0=`struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`,r0=Object.defineProperty,i0=(n,e,t)=>e in n?r0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,cn=(n,e,t)=>(i0(n,typeof e!="symbol"?e+"":e,t),t);const ac=class uc extends ie{constructor(e){e={...uc.DEFAULT_OPTIONS,...e};const t=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:n0,entryPoint:"mainFragment"}}),r=re.from({vertex:le,fragment:t0,name:"drop-shadow-filter"});super({gpuProgram:t,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:e.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},resolution:e.resolution}),cn(this,"uniforms"),cn(this,"shadowOnly",!1),cn(this,"_color"),cn(this,"_blurFilter"),cn(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new de,this.color=e.color??0,this._blurFilter=new Hu({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),this._basePass=new ie({gpuProgram:J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:re.from({vertex:le,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,e)}apply(e,t,r,i){const s=Ue.getSameSizeTexture(t);e.applyFilter(this,t,s,!0),this._blurFilter.apply(e,s,r,i),this.shadowOnly||e.applyFilter(this._basePass,t,r,!1),Ue.returnTexture(s)}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e,this._updatePadding()}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}_updatePadding(){const e=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=e+this.blur*2+this.quality*4}};cn(ac,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});let sn=ac;var s0=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uSeed;
uniform vec2 uDimensions;
uniform float uAspect;
uniform float uFillMode;
uniform float uOffset;
uniform float uDirection;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float sinDir = sin(uDirection);
    float cosDir = cos(uDirection);

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * uAspect;
    float ny = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture(uDisplacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * uAspect);

    int fillMode = int(uFillMode);

    if (fillMode == CLAMP) {
        coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
        if( coord.x > uInputClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = uInputClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < uInputClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -uInputClamp.z;
            }
        }

        if( coord.y > uInputClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = uInputClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < uInputClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -uInputClamp.w;
            }
        }
    }

    finalColor.r = texture(uTexture, coord + uRed * (1.0 - uSeed * 0.4) / uInputSize.xy).r;
    finalColor.g = texture(uTexture, coord + uGreen * (1.0 - uSeed * 0.3) / uInputSize.xy).g;
    finalColor.b = texture(uTexture, coord + uBlue * (1.0 - uSeed * 0.2) / uInputSize.xy).b;
    finalColor.a = texture(uTexture, coord).a;
}
`,o0=`struct GlitchUniforms {
  uSeed: f32,
  uDimensions: vec2<f32>,
  uAspect: f32,
  uFillMode: f32,
  uOffset: f32,
  uDirection: f32,
  uRed: vec2<f32>,
  uGreen: vec2<f32>,
  uBlue: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glitchUniforms : GlitchUniforms;
@group(1) @binding(1) var uDisplacementMap: texture_2d<f32>; 
@group(1) @binding(2) var uDisplacementSampler: sampler; 

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uSeed: f32 = glitchUniforms.uSeed;
  let uDimensions: vec2<f32> = glitchUniforms.uDimensions;
  let uAspect: f32 = glitchUniforms.uAspect;
  let uOffset: f32 = glitchUniforms.uOffset;
  let uDirection: f32 = glitchUniforms.uDirection;
  let uRed: vec2<f32> = glitchUniforms.uRed;
  let uGreen: vec2<f32> = glitchUniforms.uGreen;
  let uBlue: vec2<f32> = glitchUniforms.uBlue;

  let uInputSize: vec4<f32> = gfu.uInputSize;
  let uInputClamp: vec4<f32> = gfu.uInputClamp;

  var discarded: bool = false;
  var coord: vec2<f32> = (uv * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
      discarded = true;
    }

    let sinDir: f32 = sin(uDirection);
    let cosDir: f32 = cos(uDirection);

    let cx: f32 = coord.x - 0.5;
    let cy: f32 = (coord.y - 0.5) * uAspect;
    var ny: f32 = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    ny = select(select(ny, -ny, ny < 0.0), 2.0 - ny, ny > 1.0);

    let dc: vec4<f32> = textureSample(uDisplacementMap, uDisplacementSampler, vec2<f32>(0.5, ny));

    let displacement: f32 = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = uv + vec2<f32>(cosDir * displacement, sinDir * displacement * uAspect);

    let fillMode: i32 = i32(glitchUniforms.uFillMode);

    if (fillMode == CLAMP) {
      coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
      if (coord.x > uInputClamp.z) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x - uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = uInputClamp.z * 2.0 - coord.x;
        }
      } else if (coord.x < uInputClamp.x) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x + uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = coord.x * -uInputClamp.z;
        }
      }

      if (coord.y > uInputClamp.w) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y - uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = uInputClamp.w * 2.0 - coord.y;
        }
      } else if (coord.y < uInputClamp.y) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y + uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = coord.y * -uInputClamp.w;
        }
      }
    }

    let seedR: f32 = 1.0 - uSeed * 0.4;
    let seedG: f32 = 1.0 - uSeed * 0.3;
    let seedB: f32 = 1.0 - uSeed * 0.2;

    let offsetR: vec2<f32> = vec2(uRed.x * seedR / uInputSize.x, uRed.y * seedR / uInputSize.y);
    let offsetG: vec2<f32> = vec2(uGreen.x * seedG / uInputSize.x, uGreen.y * seedG / uInputSize.y);
    let offsetB: vec2<f32> = vec2(uBlue.x * seedB / uInputSize.x, uBlue.y * seedB / uInputSize.y);

    let r = textureSample(uTexture, uSampler, coord + offsetR).r;
    let g = textureSample(uTexture, uSampler, coord + offsetG).g;
    let b = textureSample(uTexture, uSampler, coord + offsetB).b;
    let a = textureSample(uTexture, uSampler, coord).a;

    return select(vec4<f32>(r, g, b, a), vec4<f32>(0.0,0.0,0.0,0.0), discarded);
}

const TRANSPARENT: i32 = 0;
const ORIGINAL: i32 = 1;
const LOOP: i32 = 2;
const CLAMP: i32 = 3;
const MIRROR: i32 = 4;`,l0=Object.defineProperty,a0=(n,e,t)=>e in n?l0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,tt=(n,e,t)=>(a0(n,typeof e!="symbol"?e+"":e,t),t);const u0=class cc extends ie{constructor(e){e={...cc.defaults,...e};const t=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:o0,entryPoint:"mainFragment"}}),r=re.from({vertex:le,fragment:s0,name:"glitch-filter"}),i=document.createElement("canvas");i.width=4,i.height=e.sampleSize??512;const s=new oe({source:new ei({resource:i})});super({gpuProgram:t,glProgram:r,resources:{glitchUniforms:{uSeed:{value:(e==null?void 0:e.seed)??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:(e==null?void 0:e.fillMode)??0,type:"f32"},uOffset:{value:(e==null?void 0:e.offset)??100,type:"f32"},uDirection:{value:(e==null?void 0:e.direction)??0,type:"f32"},uRed:{value:e.red,type:"vec2<f32>"},uGreen:{value:e.green,type:"vec2<f32>"},uBlue:{value:e.blue,type:"vec2<f32>"}},uDisplacementMap:s.source,uDisplacementSampler:s.source.style}}),tt(this,"uniforms"),tt(this,"average",!1),tt(this,"minSize",8),tt(this,"sampleSize",512),tt(this,"_canvas"),tt(this,"texture"),tt(this,"_slices",0),tt(this,"_sizes",new Float32Array(1)),tt(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=i,this.texture=s,Object.assign(this,e)}apply(e,t,r,i){const{width:s,height:o}=t.frame;this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,e.applyFilter(this,t,r,i)}_randomizeSizes(){const e=this._sizes,t=this._slices-1,r=this.sampleSize,i=Math.min(this.minSize/r,.9/this._slices);if(this.average){const s=this._slices;let o=1;for(let l=0;l<t;l++){const a=o/(s-l),c=Math.max(a*(1-Math.random()*.6),i);e[l]=c,o-=c}e[t]=o}else{let s=1;const o=Math.sqrt(1/this._slices);for(let l=0;l<t;l++){const a=Math.max(o*s*Math.random(),i);e[l]=a,s-=a}e[t]=s}this.shuffle()}shuffle(){const e=this._sizes,t=this._slices-1;for(let r=t;r>0;r--){const i=Math.random()*r>>0,s=e[r];e[r]=e[i],e[i]=s}}_randomizeOffsets(){for(let e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const e=this.sampleSize,t=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,e);let i,s=0;for(let o=0;o<this._slices;o++){i=Math.floor(this._offsets[o]*256);const l=this._sizes[o]*e,a=i>0?i:0,c=i<0?-i:0;r.fillStyle=`rgba(${a}, ${c}, 0, 1)`,r.fillRect(0,s>>0,e,l+1>>0),s+=l}t.source.update()}set sizes(e){const t=Math.min(this._slices,e.length);for(let r=0;r<t;r++)this._sizes[r]=e[r]}get sizes(){return this._sizes}set offsets(e){const t=Math.min(this._slices,e.length);for(let r=0;r<t;r++)this._offsets[r]=e[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(e){this._slices!==e&&(this._slices=e,this._sizes=new Float32Array(e),this._offsets=new Float32Array(e),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get seed(){return this.uniforms.uSeed}set seed(e){this.uniforms.uSeed=e}get fillMode(){return this.uniforms.uFillMode}set fillMode(e){this.uniforms.uFillMode=e}get direction(){return this.uniforms.uDirection/xn}set direction(e){this.uniforms.uDirection=e*xn}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}destroy(){var e;(e=this.texture)==null||e.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};tt(u0,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var c0=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,f0=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,h0=Object.defineProperty,d0=(n,e,t)=>e in n?h0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ss=(n,e,t)=>(d0(n,typeof e!="symbol"?e+"":e,t),t);const m0=class fc extends ie{constructor(e){e={...fc.DEFAULT_OPTIONS,...e};const t=e.distance??10,r=e.quality??.1,i=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:f0,entryPoint:"mainFragment"}}),s=re.from({vertex:le,fragment:c0.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/t).toFixed(7)}`).replace(/__DIST__/gi,`${t.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:i,glProgram:s,resources:{glowUniforms:{uDistance:{value:t,type:"f32"},uStrength:{value:[e.innerStrength,e.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:(e==null?void 0:e.knockout)??!1?1:0,type:"f32"}}},padding:t}),Ss(this,"uniforms"),Ss(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new de,this.color=e.color??16777215}get distance(){return this.uniforms.uDistance}set distance(e){this.uniforms.uDistance=this.padding=e}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(e){this.uniforms.uStrength[0]=e}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(e){this.uniforms.uStrength[1]=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this.uniforms.uQuality}set quality(e){this.uniforms.uQuality=e}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=e?1:0}};Ss(m0,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var p0=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform float uParallel;
uniform vec2 uLight;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRay;

uniform vec4 uInputSize;

\${PERLIN}

void main(void) {
    vec2 uDimensions = uDimensions;
    bool uParallel = uParallel > 0.5;
    vec2 uLight = uLight;
    float uAspect = uAspect;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    float d;

    if (uParallel) {
        float _cos = uLight.x;
        float _sin = uLight.y;
        d = (_cos * coord.x) + (_sin * coord.y * uAspect);
    } else {
        float dx = coord.x - uLight.x / uDimensions.x;
        float dy = (coord.y - uLight.y / uDimensions.y) * uAspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    float uTime = uTime;
    vec3 uRay = uRay;

    float gain = uRay[0];
    float lacunarity = uRay[1];
    float alpha = uRay[2];

    vec3 dir = vec3(d, d, 0.0);
    float noise = turb(dir + vec3(uTime, 0.0, 62.1 + uTime) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(vec3(noise), 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    finalColor = texture(uTexture, vTextureCoord) + mist;
}
`,g0=`struct GodrayUniforms {
  uLight: vec2<f32>,
  uParallel: f32,
  uAspect: f32,
  uTime: f32,
  uRay: vec3<f32>,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> godrayUniforms : GodrayUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = godrayUniforms.uDimensions;
  let uParallel: bool = godrayUniforms.uParallel > 0.5;
  let uLight: vec2<f32> = godrayUniforms.uLight;
  let uAspect: f32 = godrayUniforms.uAspect;

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / uDimensions;

  var d: f32;

  if (uParallel) {
    let _cos: f32 = uLight.x;
    let _sin: f32 = uLight.y;
    d = (_cos * coord.x) + (_sin * coord.y * uAspect);
  } else {
    let dx: f32 = coord.x - uLight.x / uDimensions.x;
    let dy: f32 = (coord.y - uLight.y / uDimensions.y) * uAspect;
    let dis: f32 = sqrt(dx * dx + dy * dy) + 0.00001;
    d = dy / dis;
  }

  let uTime: f32 = godrayUniforms.uTime;
  let uRay: vec3<f32> = godrayUniforms.uRay;
  
  let gain = uRay[0];
  let lacunarity = uRay[1];
  let alpha = uRay[2];

  let dir: vec3<f32> = vec3<f32>(d, d, 0.0);
  var noise: f32 = turb(dir + vec3<f32>(uTime, 0.0, 62.1 + uTime) * 0.05, vec3<f32>(480.0, 320.0, 480.0), lacunarity, gain);
  noise = mix(noise, 0.0, 0.3);
  //fade vertically.
  var mist: vec4<f32> = vec4<f32>(vec3<f32>(noise), 1.0) * (1.0 - coord.y);
  mist.a = 1.0;
  // apply user alpha
  mist *= alpha;
  return textureSample(uTexture, uSampler, uv) + mist;
}

\${PERLIN}`,x0=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,v0=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

fn moduloVec3(x: vec3<f32>, y: vec3<f32>) -> vec3<f32>
{
  return x - y * floor(x/y);
}
fn mod289Vec3(x: vec3<f32>) -> vec3<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn mod289Vec4(x: vec4<f32>) -> vec4<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn permute4(x: vec4<f32>) -> vec4<f32>
{
    return mod289Vec4(((x * 34.0) + 1.0) * x);
}
fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32>
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
fn fade3(t: vec3<f32>) -> vec3<f32>
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

// Classic Perlin noise, periodic variant
fn perlinNoise3(P: vec3<f32>, rep: vec3<f32>) -> f32
{
    var Pi0: vec3<f32> = moduloVec3(floor(P), rep); // Integer part, modulo period
    var Pi1: vec3<f32> = moduloVec3(Pi0 + vec3<f32>(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289Vec3(Pi0);
    Pi1 = mod289Vec3(Pi1);
    let Pf0: vec3<f32> = fract(P); // Fractional part for interpolation
    let Pf1: vec3<f32> = Pf0 - vec3<f32>(1.0); // Fractional part - 1.0
    let ix: vec4<f32> = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    let iy: vec4<f32> = vec4<f32>(Pi0.yy, Pi1.yy);
    let iz0: vec4<f32> = Pi0.zzzz;
    let iz1: vec4<f32> = Pi1.zzzz;
    let ixy: vec4<f32> = permute4(permute4(ix) + iy);
    let ixy0: vec4<f32> = permute4(ixy + iz0);
    let ixy1: vec4<f32> = permute4(ixy + iz1);
    var gx0: vec4<f32> = ixy0 * (1.0 / 7.0);
    var gy0: vec4<f32> = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    let gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);
    let sz0: vec4<f32> = step(gz0, vec4<f32>(0.0));
    gx0 -= sz0 * (step(vec4<f32>(0.0), gx0) - 0.5);
    gy0 -= sz0 * (step(vec4<f32>(0.0), gy0) - 0.5);
    var gx1: vec4<f32> = ixy1 * (1.0 / 7.0);
    var gy1: vec4<f32> = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    let gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);
    let sz1: vec4<f32> = step(gz1, vec4<f32>(0.0));
    gx1 -= sz1 * (step(vec4<f32>(0.0), gx1) - 0.5);
    gy1 -= sz1 * (step(vec4<f32>(0.0), gy1) - 0.5);
    var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);
    var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);
    var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);
    var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);
    var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);
    var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);
    var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);
    var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);
    let norm0: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    let norm1: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    let n000: f32 = dot(g000, Pf0);
    let n100: f32 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));
    let n010: f32 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));
    let n110: f32 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));
    let n001: f32 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));
    let n101: f32 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));
    let n011: f32 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));
    let n111: f32 = dot(g111, Pf1);
    let fade_xyz: vec3<f32> = fade3(Pf0);
    let n_z: vec4<f32> = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), fade_xyz.z);
    let n_yz: vec2<f32> = mix(n_z.xy, n_z.zw, fade_xyz.y);
    let n_xyz: f32 = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
fn turb(P: vec3<f32>, rep: vec3<f32>, lacunarity: f32, gain: f32) -> f32
{
    var sum: f32 = 0.0;
    var sc: f32 = 1.0;
    var totalgain: f32 = 1.0;
    for (var i = 0.0; i < 6.0; i += 1)
    {
        sum += totalgain * perlinNoise3(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}`,y0=Object.defineProperty,_0=(n,e,t)=>e in n?y0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,fn=(n,e,t)=>(_0(n,typeof e!="symbol"?e+"":e,t),t);const b0=class hc extends ie{constructor(e){e={...hc.DEFAULT_OPTIONS,...e};const t=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:g0.replace("${PERLIN}",v0),entryPoint:"mainFragment"}}),r=re.from({vertex:le,fragment:p0.replace("${PERLIN}",x0),name:"god-ray-filter"});super({gpuProgram:t,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:e.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),fn(this,"uniforms"),fn(this,"time",0),fn(this,"_angleLight",[0,0]),fn(this,"_angle",0),fn(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){const s=t.frame.width,o=t.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,this.uniforms.uTime=this.time,e.applyFilter(this,t,r,i)}get angle(){return this._angle}set angle(e){this._angle=e;const t=e*xn;this._angleLight[0]=Math.cos(t),this._angleLight[1]=Math.sin(t)}get parallel(){return this.uniforms.uParallel>.5}set parallel(e){this.uniforms.uParallel=e?1:0}get center(){return this._center}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._center=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get gain(){return this.uniforms.uRay[0]}set gain(e){this.uniforms.uRay[0]=e}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(e){this.uniforms.uRay[1]=e}get alpha(){return this.uniforms.uRay[2]}set alpha(e){this.uniforms.uRay[2]=e}};fn(b0,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var S0=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uHsl;
uniform float uAlpha;
uniform float uColorize;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 resultRGB = color.rgb;

    float hue = uHsl[0];
    float saturation = uHsl[1];
    float lightness = uHsl[2];

    // colorize
    if (uColorize > 0.5) {
        resultRGB = vec3(getWeightedAverage(resultRGB), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    finalColor = mix(color, vec4(resultRGB, color.a), uAlpha);
}
`,C0=`struct HslUniforms {
  uHsl:vec3<f32>,
  uColorize:f32,
  uAlpha:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> hslUniforms : HslUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
    var resultRGB: vec3<f32> = color.rgb;

    let hue: f32 = hslUniforms.uHsl[0];
    let saturation: f32 = hslUniforms.uHsl[1];
    let lightness: f32 = hslUniforms.uHsl[2];

    // colorize
    if (hslUniforms.uColorize > 0.5) {
        resultRGB = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    let average: f32 = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3<f32>(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    return mix(color, vec4<f32>(resultRGB, color.a), hslUniforms.uAlpha);
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const k: vec3<f32> = vec3(0.57735, 0.57735, 0.57735);

fn hueShift(color: vec3<f32>, angle: f32) -> vec3<f32> 
{
    let cosAngle: f32 = cos(angle);
    return vec3<f32>(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}`,w0=Object.defineProperty,T0=(n,e,t)=>e in n?w0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Cs=(n,e,t)=>(T0(n,typeof e!="symbol"?e+"":e,t),t);const P0=class dc extends ie{constructor(e){e={...dc.DEFAULT_OPTIONS,...e};const t=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:C0,entryPoint:"mainFragment"}}),r=re.from({vertex:le,fragment:S0,name:"hsl-adjustment-filter"});super({gpuProgram:t,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:e.colorize?1:0,type:"f32"},uAlpha:{value:e.alpha,type:"f32"}}}}),Cs(this,"uniforms"),Cs(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,this.hue=e.hue}get hue(){return this._hue}set hue(e){this._hue=e,this.resources.hslUniforms.uniforms.uHsl[0]=e*(Math.PI/180)}get saturation(){return this.resources.hslUniforms.uniforms.uHsl[1]}set saturation(e){this.resources.hslUniforms.uniforms.uHsl[1]=e}get lightness(){return this.resources.hslUniforms.uniforms.uHsl[2]}set lightness(e){this.resources.hslUniforms.uniforms.uHsl[2]=e}get colorize(){return this.resources.hslUniforms.uniforms.uColorize===1}set colorize(e){this.resources.hslUniforms.uniforms.uColorize=e?1:0}get alpha(){return this.resources.hslUniforms.uniforms.uAlpha}set alpha(e){this.resources.hslUniforms.uniforms.uAlpha=e}};Cs(P0,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var A0=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    vec2 velocity = uVelocity / uInputSize.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture(uTexture, vTextureCoord + bias);
    }
    finalColor = color / float(uKernelSize);
}
`,F0=`struct MotionBlurUniforms {
  uVelocity: vec2<f32>,
  uKernelSize: f32,
  uOffset: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> motionBlurUniforms : MotionBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uVelocity = motionBlurUniforms.uVelocity;
  let uKernelSize = motionBlurUniforms.uKernelSize;
  let uOffset = motionBlurUniforms.uOffset;

  let velocity: vec2<f32> = uVelocity / gfu.uInputSize.xy;
  let offset: f32 = -uOffset / length(uVelocity) - 0.5;
  let k: i32 = i32(min(uKernelSize - 1, MAX_KERNEL_SIZE - 1));

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  for(var i: i32 = 0; i < k; i += 1) {
    let bias: vec2<f32> = velocity * (f32(i) / f32(k) + offset);
    color += textureSample(uTexture, uSampler, uv + bias);
  }
  
  return select(color / f32(uKernelSize), textureSample(uTexture, uSampler, uv), uKernelSize == 0);
}

const MAX_KERNEL_SIZE: f32 = 2048;`,M0=Object.defineProperty,I0=(n,e,t)=>e in n?M0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ws=(n,e,t)=>(I0(n,typeof e!="symbol"?e+"":e,t),t);const z0=class mc extends ie{constructor(...e){let t=e[0]??{};if(Array.isArray(t)||"x"in t&&"y"in t||t instanceof Ee){j("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const s="x"in t?t.x:t[0],o="y"in t?t.y:t[1];t={velocity:{x:s,y:o}},e[1]!==void 0&&(t.kernelSize=e[1]),e[2]!==void 0&&(t.offset=e[2])}t={...mc.DEFAULT_OPTIONS,...t};const r=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:F0,entryPoint:"mainFragment"}}),i=re.from({vertex:le,fragment:A0,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{motionBlurUniforms:{uVelocity:{value:t.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(t.kernelSize??5),type:"i32"},uOffset:{value:t.offset,type:"f32"}}}}),ws(this,"uniforms"),ws(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,t)}get velocity(){return this.uniforms.uVelocity}set velocity(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uVelocity=e,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(e){this.velocity.x=e,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(e){this.velocity.y=e,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};ws(z0,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var O0=`in vec2 vTextureCoord;
out vec4 finalColor;

const int MAX_COLORS = \${MAX_COLORS};

uniform sampler2D uTexture;
uniform vec3 uOriginalColors[MAX_COLORS];
uniform vec3 uTargetColors[MAX_COLORS];
uniform float uTolerance;

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);

    float alpha = finalColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = finalColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < uTolerance)
      {
        vec3 targetColor = uTargetColors[i];
        finalColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`,E0=`struct MultiColorReplaceUniforms {
  uOriginalColors: array<vec3<f32>, MAX_COLORS>,
  uTargetColors: array<vec3<f32>, MAX_COLORS>,
  uTolerance:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> multiColorReplaceUniforms : MultiColorReplaceUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOriginalColors = multiColorReplaceUniforms.uOriginalColors;
  let uTargetColors = multiColorReplaceUniforms.uTargetColors;
  let uTolerance = multiColorReplaceUniforms.uTolerance;

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let alpha: f32 = color.a;

  if (alpha > 0.0001)
  {
    var modColor: vec3<f32> = vec3<f32>(color.rgb) / alpha;

    for(var i: i32 = 0; i < MAX_COLORS; i += 1)
    {
      let origColor: vec3<f32> = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      let colorDiff: vec3<f32> = origColor - modColor;
      
      if (length(colorDiff) < uTolerance)
      {
        let targetColor: vec3<f32> = uTargetColors[i];
        color = vec4((targetColor + colorDiff) * alpha, alpha);
        return color;
      }
    }
  }

  return color;
}

const MAX_COLORS: i32 = \${MAX_COLORS};`,R0=Object.defineProperty,U0=(n,e,t)=>e in n?R0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ur=(n,e,t)=>(U0(n,typeof e!="symbol"?e+"":e,t),t);const L0=class pc extends ie{constructor(...e){let t=e[0]??{};Array.isArray(t)&&(j("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),t={replacements:t},e[1]&&(t.tolerance=e[1]),e[2]&&(t.maxColors=e[2])),t={...pc.DEFAULT_OPTIONS,...t};const r=t.maxColors??t.replacements.length,i=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:E0.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),s=re.from({vertex:le,fragment:O0.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:i,glProgram:s,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:t.tolerance,type:"f32"}}}}),Ur(this,"uniforms"),Ur(this,"_replacements",[]),Ur(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=t.replacements}set replacements(e){const t=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,i=e.length,s=new de;if(i>this._maxColors)throw new Error(`Length of replacements (${i}) exceeds the maximum colors length (${this._maxColors})`);t[i*3]=-1;let o,l,a;for(let c=0;c<i;c++){const u=e[c];s.setValue(u[0]),[o,l,a]=s.toArray(),t[c*3]=o,t[c*3+1]=l,t[c*3+2]=a,s.setValue(u[1]),[o,l,a]=s.toArray(),r[c*3]=o,r[c*3+1]=l,r[c*3+2]=a}this._replacements=e}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set epsilon(e){j("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=e}get epsilon(){return j("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};Ur(L0,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var D0=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSepia;
uniform vec2 uNoise;
uniform vec3 uScratch;
uniform vec3 uVignetting;
uniform float uSeed;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    if (uSepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + uSepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignette = uVignetting[0];
    float vignetteAlpha = uVignetting[1];
    float vignetteBlur = uVignetting[2];

    if (vignette > 0.0)
    {
        float outter = SQRT_2 - vignette * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= uDimensions.y / uDimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignetteBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignetteAlpha);
    }

    float scratch = uScratch[0];
    float scratchDensity = uScratch[1];
    float scratchWidth = uScratch[2];

    if (scratchDensity > uSeed && scratch != 0.0)
    {
        float phase = uSeed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(uSeed * dist, abs(s - uSeed * dist)));
        if (d < uSeed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / uDimensions.x * (0.75 + uSeed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    float noise = uNoise[0];
    float noiseSize = uNoise[1];

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + uSeed * 512.0, 1024.0 - uSeed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * uSeed) - 0.5;
        color += _noise * noise;
    }

    finalColor.rgb = color;
}`,B0=`struct OldFilmUniforms {
    uSepia: f32,
    uNoise: vec2<f32>,
    uScratch: vec3<f32>,
    uVignetting: vec3<f32>,
    uSeed: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> oldFilmUniforms : OldFilmUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  if (oldFilmUniforms.uSepia > 0.)
  {
    color = vec4<f32>(sepia(color.rgb), color.a);
  }

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / oldFilmUniforms.uDimensions;

  if (oldFilmUniforms.uVignetting[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  let uScratch = oldFilmUniforms.uScratch; 

  if (uScratch[1] > oldFilmUniforms.uSeed && uScratch[0] != 0.)
  {
    color = vec4<f32>(scratch(color.rgb, coord), color.a);
  }

  let uNoise = oldFilmUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  return color;
}

const SQRT_2: f32 = 1.414213;
const SEPIA_RGB: vec3<f32> = vec3<f32>(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn overlay(src: vec3<f32>, dst: vec3<f32>) -> vec3<f32>
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)

    return vec3<f32>(
      select((1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (2.0 * src.x * dst.x), (dst.x <= 0.5)), 
      select((1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (2.0 * src.y * dst.y), (dst.y <= 0.5)),
      select((1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)), (2.0 * src.z * dst.z), (dst.z <= 0.5))
    );
}

fn sepia(co: vec3<f32>) -> vec3<f32>
{
  let gray: f32 = (co.x + co.y + co.z) / 3.0;
  let grayscale: vec3<f32> = vec3<f32>(gray);
  let color = overlay(SEPIA_RGB, grayscale);
  return grayscale + oldFilmUniforms.uSepia * (color - grayscale);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignetting = oldFilmUniforms.uVignetting;
  let uDimensions = oldFilmUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignetting[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(vec2<f32>(0.5) - coord);
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetting[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignetting[1]);
}

fn scratch(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;
  let uScratch = oldFilmUniforms.uScratch;
  let uSeed = oldFilmUniforms.uSeed;
  let uDimensions = oldFilmUniforms.uDimensions;

  let phase: f32 = uSeed * 256.0;
  let s: f32 = modulo(floor(phase), 2.0);
  let dist: f32 = 1.0 / uScratch[1];
  let d: f32 = distance(coord, vec2<f32>(uSeed * dist, abs(s - uSeed * dist)));

  if (d < uSeed * 0.6 + 0.4)
  {
    let period: f32 = uScratch[1] * 10.0;

    let xx: f32 = coord.x * period + phase;
    let aa: f32 = abs(modulo(xx, 0.5) * 4.0);
    let bb: f32 = modulo(floor(xx / 0.5), 2.0);
    let yy: f32 = (1.0 - bb) * aa + bb * (2.0 - aa);

    let kk: f32 = 2.0 * period;
    let dw: f32 = uScratch[2] / uDimensions.x * (0.75 + uSeed);
    let dh: f32 = dw * kk;

    var tine: f32 = (yy - (2.0 - dh));

    if (tine > 0.0) {
        let _sign: f32 = sign(uScratch[0]);

        tine = s * tine / period + uScratch[0] + 0.1;
        tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

        color *= tine;
    }
  }

  return color;
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = oldFilmUniforms.uNoise;
  let uSeed = oldFilmUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}`,G0=Object.defineProperty,k0=(n,e,t)=>e in n?G0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ts=(n,e,t)=>(k0(n,typeof e!="symbol"?e+"":e,t),t);const N0=class gc extends ie{constructor(e){e={...gc.DEFAULT_OPTIONS,...e};const t=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:B0,entryPoint:"mainFragment"}}),r=re.from({vertex:le,fragment:D0,name:"old-film-filter"});super({gpuProgram:t,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:e.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:e.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Ts(this,"uniforms"),Ts(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uSeed=this.seed,e.applyFilter(this,t,r,i)}get sepia(){return this.uniforms.uSepia}set sepia(e){this.uniforms.uSepia=e}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get scratch(){return this.uniforms.uScratch[0]}set scratch(e){this.uniforms.uScratch[0]=e}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(e){this.uniforms.uScratch[1]=e}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(e){this.uniforms.uScratch[2]=e}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(e){this.uniforms.uVignetting[0]=e}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(e){this.uniforms.uVignetting[1]=e}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(e){this.uniforms.uVignetting[2]=e}};Ts(N0,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var $0=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`,V0=`struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,X0=Object.defineProperty,H0=(n,e,t)=>e in n?X0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Yt=(n,e,t)=>(H0(n,typeof e!="symbol"?e+"":e,t),t);const oo=class Vt extends ie{constructor(...e){let t=e[0]??{};typeof t=="number"&&(j("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),t={thickness:t},e[1]!==void 0&&(t.color=e[1]),e[2]!==void 0&&(t.quality=e[2]),e[3]!==void 0&&(t.alpha=e[3]),e[4]!==void 0&&(t.knockout=e[4])),t={...Vt.DEFAULT_OPTIONS,...t};const r=t.quality??.1,i=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:V0,entryPoint:"mainFragment"}}),s=re.from({vertex:le,fragment:$0.replace(/\$\{ANGLE_STEP\}/,Vt.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:i,glProgram:s,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:t.knockout?1:0,type:"f32"}}}}),Yt(this,"uniforms"),Yt(this,"_thickness"),Yt(this,"_quality"),Yt(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=Vt.getAngleStep(r),this._color=new de,this.color=t.color??0,Object.assign(this,t)}apply(e,t,r,i){this.uniforms.uThickness[0]=this.thickness/t.source.width,this.uniforms.uThickness[1]=this.thickness/t.source.height,e.applyFilter(this,t,r,i)}static getAngleStep(e){return parseFloat((Math.PI*2/Math.max(e*Vt.MAX_SAMPLES,Vt.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(e){this._thickness=this.padding=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this._quality}set quality(e){this._quality=e,this.uniforms.uAngleStep=Vt.getAngleStep(e)}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=e?1:0}};Yt(oo,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});Yt(oo,"MIN_SAMPLES",1);Yt(oo,"MAX_SAMPLES",100);var Y0=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    float aspect = uInputSize.y / uInputSize.x;
    vec2 center = uCenter.xy / uInputSize.xy;
    float gradient = uRadius / uInputSize.x * 0.3;
    float radius = uRadius / uInputSize.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            finalColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture(uTexture, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    finalColor = color / float(uKernelSize);
}
`,W0=`struct RadialBlurUniforms {
  uRadian: f32,
  uCenter: vec2<f32>,
  uKernelSize: f32,
  uRadius: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> radialBlurUniforms : RadialBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uRadian = radialBlurUniforms.uRadian;
  let uCenter = radialBlurUniforms.uCenter;
  let uKernelSize = radialBlurUniforms.uKernelSize;
  let uRadius = radialBlurUniforms.uRadius;
  
  var returnColorOnly = false;

  if (uKernelSize == 0)
  {
    returnColorOnly = true;
  }

  let aspect: f32 = gfu.uInputSize.y / gfu.uInputSize.x;
  let center: vec2<f32> = uCenter.xy / gfu.uInputSize.xy;
  let gradient: f32 = uRadius / gfu.uInputSize.x * 0.3;
  let radius: f32 = uRadius / gfu.uInputSize.x - gradient * 0.5;
  let k: i32 = i32(uKernelSize - 1);

  var coord: vec2<f32> = uv;
  let dir: vec2<f32> = vec2<f32>(center - coord);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * aspect));

  var radianStep: f32 = uRadian;
  
  if (radius >= 0.0 && dist > radius)
  {
    let delta: f32 = dist - radius;
    let gap: f32 = gradient;
    let scale: f32 = 1.0 - abs(delta / gap);
    if (scale <= 0.0) {
      returnColorOnly = true;
    }
    radianStep *= scale;
  }

  radianStep /= f32(k);

  let s: f32 = sin(radianStep);
  let c: f32 = cos(radianStep);
  let rotationMatrix: mat2x2<f32> = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let baseColor = vec4<f32>(color);

  let minK: i32 = min(i32(uKernelSize) - 1, MAX_KERNEL_SIZE - 1);

  for(var i: i32 = 0; i < minK; i += 1) 
  {
    coord -= center;
    coord.y *= aspect;
    coord = rotationMatrix * coord;
    coord.y /= aspect;
    coord += center;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, coord);
    // switch to pre-multiplied alpha to correctly blur transparent images
    // sample.rgb *= sample.a;
    color += sample;
  }

  return select(color / f32(uKernelSize), baseColor, returnColorOnly);
}

const MAX_KERNEL_SIZE: i32 = 2048;`,j0=Object.defineProperty,q0=(n,e,t)=>e in n?j0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Lr=(n,e,t)=>(q0(n,typeof e!="symbol"?e+"":e,t),t);const K0=class xc extends ie{constructor(...e){let t=e[0]??{};if(typeof t=="number"){if(j("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),t={angle:t},e[1]){const s="x"in e[1]?e[1].x:e[1][0],o="y"in e[1]?e[1].y:e[1][1];t.center={x:s,y:o}}e[2]&&(t.kernelSize=e[2]),e[3]&&(t.radius=e[3])}t={...xc.DEFAULT_OPTIONS,...t};const r=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:W0,entryPoint:"mainFragment"}}),i=re.from({vertex:le,fragment:Y0,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uKernelSize:{value:t.kernelSize,type:"i32"},uRadius:{value:t.radius,type:"f32"}}}}),Lr(this,"uniforms"),Lr(this,"_angle"),Lr(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,t)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e<0||e===1/0?-1:e}};Lr(K0,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var Z0=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uMirror;
uniform float uBoundary;
uniform vec2 uAmplitude;
uniform vec2 uWavelength;
uniform vec2 uAlpha;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
    vec2 coord = pixelCoord / uDimensions;

    if (coord.y < uBoundary) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    float k = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
    float areaY = uBoundary * uDimensions.y / uInputSize.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = uMirror > 0.5 ? v : vTextureCoord.y;

    float _amplitude = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / uInputSize.x;
    float _waveLength = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / uInputSize.y;
    float _alpha = (uAlpha.y - uAlpha.x) * k + uAlpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - uTime) * _amplitude;
    x = clamp(x, uInputClamp.x, uInputClamp.z);

    vec4 color = texture(uTexture, vec2(x, y));

    finalColor = color * _alpha;
}
`,Q0=`struct ReflectionUniforms {
  uMirror: f32,
  uBoundary: f32,
  uAmplitude: vec2<f32>,
  uWavelength: vec2<f32>,
  uAlpha: vec2<f32>,
  uTime: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> reflectionUniforms : ReflectionUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = reflectionUniforms.uDimensions;
  let uBoundary: f32 = reflectionUniforms.uBoundary;
  let uMirror: bool = reflectionUniforms.uMirror > 0.5;
  let uAmplitude: vec2<f32> = reflectionUniforms.uAmplitude;
  let uWavelength: vec2<f32> = reflectionUniforms.uWavelength;
  let uAlpha: vec2<f32> = reflectionUniforms.uAlpha;
  let uTime: f32 = reflectionUniforms.uTime;

  let pixelCoord: vec2<f32> = uv * gfu.uInputSize.xy;
  let coord: vec2<f32> = pixelCoord /uDimensions;
  var returnColorOnly: bool = false;

  if (coord.y < uBoundary) {
    returnColorOnly = true;
  }

  let k: f32 = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
  let areaY: f32 = uBoundary * uDimensions.y / gfu.uInputSize.y;
  let v: f32 = areaY + areaY - uv.y;
  let y: f32 = select(uv.y, v, uMirror);

  let amplitude: f32 = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / gfu.uInputSize.x;
  let waveLength: f32 = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / gfu.uInputSize.y;
  let alpha: f32 = select((uAlpha.y - uAlpha.x) * k + uAlpha.x, 1., returnColorOnly);

  var x: f32 = uv.x + cos(v * 6.28 / waveLength - uTime) * amplitude;
  x = clamp(x, gfu.uInputClamp.x, gfu.uInputClamp.z);
  
  return textureSample(uTexture, uSampler, select(vec2<f32>(x, y), uv, returnColorOnly)) * alpha;
}

fn rand(co: vec2<f32>) -> f32 
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}`,J0=Object.defineProperty,ev=(n,e,t)=>e in n?J0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ps=(n,e,t)=>(ev(n,typeof e!="symbol"?e+"":e,t),t);const tv=class vc extends ie{constructor(e){e={...vc.DEFAULT_OPTIONS,...e};const t=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:Q0,entryPoint:"mainFragment"}}),r=re.from({vertex:le,fragment:Z0,name:"reflection-filter"});super({gpuProgram:t,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:e.mirror?1:0,type:"f32"},uBoundary:{value:e.boundary,type:"f32"},uAmplitude:{value:e.amplitude,type:"vec2<f32>"},uWavelength:{value:e.waveLength,type:"vec2<f32>"},uAlpha:{value:e.alpha,type:"vec2<f32>"},uTime:{value:e.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Ps(this,"uniforms"),Ps(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uTime=this.time,e.applyFilter(this,t,r,i)}get mirror(){return this.uniforms.uMirror>.5}set mirror(e){this.uniforms.uMirror=e?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(e){this.uniforms.uBoundary=e}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(e){this.uniforms.uAmplitude[0]=e[0],this.uniforms.uAmplitude[1]=e[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(e){this.uniforms.uAmplitude[0]=e}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(e){this.uniforms.uAmplitude[1]=e}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(e){this.uniforms.uWavelength[0]=e[0],this.uniforms.uWavelength[1]=e[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(e){this.uniforms.uWavelength[0]=e}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(e){this.uniforms.uWavelength[1]=e}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(e){this.uniforms.uAlpha[0]=e[0],this.uniforms.uAlpha[1]=e[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(e){this.uniforms.uAlpha[0]=e}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(e){this.uniforms.uAlpha[1]=e}};Ps(tv,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var nv=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`,rv=`struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`,iv=Object.defineProperty,sv=(n,e,t)=>e in n?iv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,yc=(n,e,t)=>(sv(n,typeof e!="symbol"?e+"":e,t),t);const ov=class _c extends ie{constructor(...e){let t=e[0]??{};(Array.isArray(t)||"x"in t&&"y"in t)&&(j("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),t={red:t},e[1]!==void 0&&(t.green=e[1]),e[2]!==void 0&&(t.blue=e[2])),t={..._c.DEFAULT_OPTIONS,...t};const r=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:rv,entryPoint:"mainFragment"}}),i=re.from({vertex:le,fragment:nv,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:i,resources:{rgbSplitUniforms:{uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}}}}),yc(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,t)}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get redX(){return this.red.x}set redX(e){this.red.x=e}get redY(){return this.red.y}set redY(e){this.red.y=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get greenX(){return this.green.x}set greenX(e){this.green.x=e}get greenY(){return this.green.y}set greenY(e){this.green.y=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}get blueX(){return this.blue.x}set blueX(e){this.blue.x=e}get blueY(){return this.blue.y}set blueY(e){this.blue.y=e}};yc(ov,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var lv=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uCenter;
uniform float uTime;
uniform float uSpeed;
uniform vec4 uWave;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159;

void main()
{
    float uAmplitude = uWave[0];
    float uWavelength = uWave[1];
    float uBrightness = uWave[2];
    float uRadius = uWave[3];

    float halfWavelength = uWavelength * 0.5 / uInputSize.x;
    float maxRadius = uRadius / uInputSize.x;
    float currentRadius = uTime * uSpeed / uInputSize.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            finalColor = texture(uTexture, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - uCenter / uInputSize.xy);
    dir.y *= uInputSize.y / uInputSize.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );

    vec2 offset = diffUV * powDiff / uInputSize.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // finalColor = texture(uTexture, vTextureCoord + offset);

    color.rgb *= 1.0 + (uBrightness - 1.0) * p * fade;

    finalColor = color;
}
`,av=`
struct ShockWaveUniforms {
    uTime: f32,
    uOffset: vec2<f32>,
    uSpeed: f32,
    uWave: vec4<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> shockwaveUniforms : ShockWaveUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {

    let uTime = shockwaveUniforms.uTime;
    let uOffset = shockwaveUniforms.uOffset;
    let uSpeed = shockwaveUniforms.uSpeed;
    let uAmplitude = shockwaveUniforms.uWave[0];
    let uWavelength = shockwaveUniforms.uWave[1];
    let uBrightness = shockwaveUniforms.uWave[2];
    let uRadius = shockwaveUniforms.uWave[3];
    let halfWavelength: f32 = uWavelength * 0.5 / gfu.uInputSize.x;
    let maxRadius: f32 = uRadius / gfu.uInputSize.x;
    let currentRadius: f32 = uTime * uSpeed / gfu.uInputSize.x;
    var fade: f32 = 1.0;
    var returnColorOnly: bool = false;
    
    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            returnColorOnly = true;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }
    var dir: vec2<f32> = vec2<f32>(uv - uOffset / gfu.uInputSize.xy);
    dir.y *= gfu.uInputSize.y / gfu.uInputSize.x;

    let dist:f32 = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        returnColorOnly = true;
    }

    let diffUV: vec2<f32> = normalize(dir);
    let diff: f32 = (dist - currentRadius) / halfWavelength;
    let p: f32 = 1.0 - pow(abs(diff), 2.0);
    let powDiff: f32 = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );
    let offset: vec2<f32> = diffUV * powDiff / gfu.uInputSize.xy;
    // Do clamp :
    let coord: vec2<f32> = uv + offset;
    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);

    var clampedColor: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    
    if (boolVec2(coord, clampedCoord)) 
    {
        clampedColor *= max(0.0, 1.0 - length(coord - clampedCoord));
    }
    // No clamp :
    var finalColor = clampedColor;

    return select(finalColor, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn boolVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
    if (x.x == y.x && x.y == y.y)
    {
        return true;
    }
    
    return false;
}

const PI: f32 = 3.14159265358979323846264;
`,uv=Object.defineProperty,cv=(n,e,t)=>e in n?uv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,As=(n,e,t)=>(cv(n,typeof e!="symbol"?e+"":e,t),t);const fv=class bc extends ie{constructor(...e){let t=e[0]??{};(Array.isArray(t)||"x"in t&&"y"in t)&&(j("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),t={center:t,...e[1]},e[2]!==void 0&&(t.time=e[2])),t={...bc.DEFAULT_OPTIONS,...t};const r=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:av,entryPoint:"mainFragment"}}),i=re.from({vertex:le,fragment:lv,name:"shockwave-filter"});super({gpuProgram:r,glProgram:i,resources:{shockwaveUniforms:{uTime:{value:t.time,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uSpeed:{value:t.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),As(this,"uniforms"),As(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,t)}apply(e,t,r,i){this.uniforms.uTime=this.time,e.applyFilter(this,t,r,i)}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get speed(){return this.uniforms.uSpeed}set speed(e){this.uniforms.uSpeed=e}get amplitude(){return this.uniforms.uWave[0]}set amplitude(e){this.uniforms.uWave[0]=e}get wavelength(){return this.uniforms.uWave[1]}set wavelength(e){this.uniforms.uWave[1]=e}get brightness(){return this.uniforms.uWave[2]}set brightness(e){this.uniforms.uWave[2]=e}get radius(){return this.uniforms.uWave[3]}set radius(e){this.uniforms.uWave[3]=e}};As(fv,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var hv=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

void main() {
    vec4 diffuseColor = texture(uTexture, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * uInputSize.xy) / uDimensions;
    vec4 light = texture(uMapTexture, lightCoord);
    vec3 ambient = uColor.rgb * uAlpha;
    vec3 intensity = ambient + light.rgb;
    vec3 color = diffuseColor.rgb * intensity;
    finalColor = vec4(color, diffuseColor.a);
}
`,dv=`struct SimpleLightmapUniforms {
  uColor: vec3<f32>,
  uAlpha: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> simpleLightmapUniforms : SimpleLightmapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
) -> @location(0) vec4<f32> {
  let uColor = simpleLightmapUniforms.uColor;
  let uAlpha = simpleLightmapUniforms.uAlpha;
  let uDimensions = simpleLightmapUniforms.uDimensions;

  let diffuseColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightCoord: vec2<f32> = (uv * gfu.uInputSize.xy) / simpleLightmapUniforms.uDimensions;
  let light: vec4<f32> = textureSample(uMapTexture, uMapSampler, lightCoord);
  let ambient: vec3<f32> = uColor * uAlpha;
  let intensity: vec3<f32> = ambient + light.rgb;
  let finalColor: vec3<f32> = diffuseColor.rgb * intensity;
  return vec4<f32>(finalColor, diffuseColor.a);
}`,mv=Object.defineProperty,pv=(n,e,t)=>e in n?mv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Dr=(n,e,t)=>(pv(n,typeof e!="symbol"?e+"":e,t),t);const gv=class Sc extends ie{constructor(...e){let t=e[0]??{};if(t instanceof oe&&(j("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),t={lightMap:t},e[1]!==void 0&&(t.color=e[1]),e[2]!==void 0&&(t.alpha=e[2])),t={...Sc.DEFAULT_OPTIONS,...t},!t.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:dv,entryPoint:"mainFragment"}}),i=re.from({vertex:le,fragment:hv,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:i,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:t.lightMap.source,uMapSampler:t.lightMap.source.style}}),Dr(this,"uniforms"),Dr(this,"_color"),Dr(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new de,this.color=t.color??0,Object.assign(this,t)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,e.applyFilter(this,t,r,i)}get lightMap(){return this._lightMap}set lightMap(e){this._lightMap=e,this.resources.uMapTexture=e.source,this.resources.uMapSampler=e.source.style}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};Dr(gv,"DEFAULT_OPTIONS",{lightMap:oe.WHITE,color:0,alpha:1});var xv=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uBlur;
uniform vec2 uStart;
uniform vec2 uEnd;
uniform vec2 uDelta;
uniform vec2 uTexSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float blur = uBlur[0];
    float gradientBlur = uBlur[1];

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(uStart.y - uEnd.y, uEnd.x - uStart.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * uTexSize - uStart, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture(uTexture, vTextureCoord + uDelta / uTexSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    finalColor = color;
}
`,vv=`struct TiltShiftUniforms {
  uBlur: vec2<f32>,
  uStart: vec2<f32>,
  uEnd: vec2<f32>,
  uDelta: vec2<f32>,
  uTexSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> tiltShiftUniforms : TiltShiftUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uBlur = tiltShiftUniforms.uBlur[0];
  let uBlurGradient = tiltShiftUniforms.uBlur[1];
  let uStart = tiltShiftUniforms.uStart;
  let uEnd = tiltShiftUniforms.uEnd;
  let uDelta = tiltShiftUniforms.uDelta;
  let uTexSize = tiltShiftUniforms.uTexSize;

  var color: vec4<f32> = vec4<f32>(0.0);
  var total: f32 = 0.0;

  let offset: f32 = random(position, vec3<f32>(12.9898, 78.233, 151.7182), 0.0);
  let normal: vec2<f32> = normalize(vec2<f32>(uStart.y - uEnd.y, uEnd.x - uStart.x));
  let radius: f32 = smoothstep(0.0, 1.0, abs(dot(uv * uTexSize - uStart, normal)) / uBlurGradient) * uBlur;

  for (var t: f32 = -30.0; t <= 30.0; t += 1.0)
  {
    var percent: f32 = (t + offset - 0.5) / 30.0;
    var weight: f32 = 1.0 - abs(percent);
    var sample: vec4<f32> = textureSample(uTexture, uSampler, uv + uDelta / uTexSize * percent * radius);
    sample = vec4<f32>(sample.xyz * sample.a, sample.a); // multiply sample.rgb with sample.a
    color += sample * weight;
    total += weight;
  }

  color /= total;
  color = vec4<f32>(color.xyz / (color.a + 0.00001), color.a); // divide color.rgb by color.a + 0.00001

  return color;
}


fn random(position: vec4<f32>, scale: vec3<f32>, seed: f32) -> f32
{
  return fract(sin(dot(position.xyz + seed, scale)) * 43758.5453 + seed);
}`,yv=Object.defineProperty,_v=(n,e,t)=>e in n?yv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Fs=(n,e,t)=>(_v(n,typeof e!="symbol"?e+"":e,t),t);const bv=class Cc extends ie{constructor(e){e={...Cc.DEFAULT_OPTIONS,...e};const t=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:vv,entryPoint:"mainFragment"}}),r=re.from({vertex:le,fragment:xv,name:"tilt-shift-axis-filter"});super({gpuProgram:t,glProgram:r,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([e.blur??100,e.gradientBlur??600]),type:"vec2<f32>"},uStart:{value:e.start,type:"vec2<f32>"},uEnd:{value:e.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([30,30]),type:"vec2<f32>"},uTexSize:{value:new Float32Array([window.innerWidth,window.innerHeight]),type:"vec2<f32>"}}}}),Fs(this,"uniforms"),Fs(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=e.axis,this.updateDelta()}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const e=this.uniforms.uEnd,t=this.uniforms.uStart,r=e.x-t.x,i=e.y-t.y,s=Math.sqrt(r*r+i*i),o=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=o?-i/s:r/s,this.uniforms.uDelta[1]=o?r/s:i/s}};Fs(bv,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600,start:{x:0,y:window.innerHeight/2},end:{x:600,y:window.innerHeight/2}});var Sv=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTwist;
uniform vec2 uOffset;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= uOffset;

    float dist = length(coord);
    float uRadius = uTwist[0];
    float uAngle = uTwist[1];

    if (dist < uRadius)
    {
        float ratioDist = (uRadius - dist) / uRadius;
        float angleMod = ratioDist * ratioDist * uAngle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += uOffset;

    return coord;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = twist(coord);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`,Cv=`struct TwistUniforms {
  uTwist:vec2<f32>,
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> twistUniforms : TwistUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  return textureSample(uTexture, uSampler, unmapCoord(twist(mapCoord(uv))));
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn twist(coord: vec2<f32>) -> vec2<f32>
{
  var twistedCoord: vec2<f32> = coord;
  let uRadius = twistUniforms.uTwist[0];
  let uAngle = twistUniforms.uTwist[1];
  let uOffset = twistUniforms.uOffset;

  twistedCoord -= uOffset;
  
  let dist = length(twistedCoord);

  if (dist < uRadius)
  {
    let ratioDist: f32 = (uRadius - dist) / uRadius;
    let angleMod: f32 = ratioDist * ratioDist * uAngle;
    let s: f32 = sin(angleMod);
    let c: f32 = cos(angleMod);
    twistedCoord = vec2<f32>(twistedCoord.x * c - twistedCoord.y * s, twistedCoord.x * s + twistedCoord.y * c);
  }

  twistedCoord += uOffset;
  return twistedCoord;
}
`,wv=Object.defineProperty,Tv=(n,e,t)=>e in n?wv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,wc=(n,e,t)=>(Tv(n,typeof e!="symbol"?e+"":e,t),t);const Pv=class Tc extends ie{constructor(e){e={...Tc.DEFAULT_OPTIONS,...e};const t=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:Cv,entryPoint:"mainFragment"}}),r=re.from({vertex:le,fragment:Sv,name:"twist-filter"});super({gpuProgram:t,glProgram:r,resources:{twistUniforms:{uTwist:{value:[e.radius??0,e.angle??0],type:"vec2<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},...e}),wc(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(e){this.uniforms.uTwist[0]=e}get angle(){return this.uniforms.uTwist[1]}set angle(e){this.uniforms.uTwist[1]=e}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e}};wc(Pv,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var Av=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uStrength;
uniform vec2 uCenter;
uniform vec2 uRadii;

uniform vec4 uInputSize;

const float MAX_KERNEL_SIZE = \${MAX_KERNEL_SIZE};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {
    float minGradient = uRadii[0] * 0.3;
    float innerRadius = (uRadii[0] + minGradient * 0.5) / uInputSize.x;

    float gradient = uRadii[1] * 0.3;
    float radius = (uRadii[1] - gradient * 0.5) / uInputSize.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / uInputSize.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * uInputSize.y / uInputSize.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / uInputSize.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture(uTexture, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture(uTexture, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,Fv=`struct ZoomBlurUniforms {
    uStrength:f32,
    uCenter:vec2<f32>,
    uRadii:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> zoomBlurUniforms : ZoomBlurUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uStrength = zoomBlurUniforms.uStrength;
  let uCenter = zoomBlurUniforms.uCenter;
  let uRadii = zoomBlurUniforms.uRadii;

  let minGradient: f32 = uRadii[0] * 0.3;
  let innerRadius: f32 = (uRadii[0] + minGradient * 0.5) / gfu.uInputSize.x;

  let gradient: f32 = uRadii[1] * 0.3;
  let radius: f32 = (uRadii[1] - gradient * 0.5) / gfu.uInputSize.x;

  let MAX_KERNEL_SIZE: f32 = \${MAX_KERNEL_SIZE};

  var countLimit: f32 = MAX_KERNEL_SIZE;

  var dir: vec2<f32> = vec2<f32>(uCenter / gfu.uInputSize.xy - uv);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * gfu.uInputSize.y / gfu.uInputSize.x));

  var strength: f32 = uStrength;

  var delta: f32 = 0.0;
  var gap: f32;

  if (dist < innerRadius) {
      delta = innerRadius - dist;
      gap = minGradient;
  } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
      delta = dist - radius;
      gap = gradient;
  }

  var returnColorOnly: bool = false;

  if (delta > 0.0) {
    let normalCount: f32 = gap / gfu.uInputSize.x;
    delta = (normalCount - delta) / normalCount;
    countLimit *= delta;
    strength *= delta;
    
    if (countLimit < 1.0)
    {
      returnColorOnly = true;;
    }
  }

  // randomize the lookup values to hide the fixed number of samples
  let offset: f32 = rand(uv, 0.0);

  var total: f32 = 0.0;
  var color: vec4<f32> = vec4<f32>(0.);

  dir *= strength;

  for (var t = 0.0; t < MAX_KERNEL_SIZE; t += 1.0) {
    let percent: f32 = (t + offset) / MAX_KERNEL_SIZE;
    let weight: f32 = 4.0 * (percent - percent * percent);
    let p: vec2<f32> = uv + dir * percent;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, p);
    
    if (t < countLimit)
    {
      color += sample * weight;
      total += weight;
    }
  }

  color /= total;

  return select(color, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
fn rand(co: vec2<f32>, seed: f32) -> f32
{
  let a: f32 = 12.9898;
  let b: f32 = 78.233;
  let c: f32 = 43758.5453;
  let dt: f32 = dot(co + seed, vec2<f32>(a, b));
  let sn: f32 = modulo(dt, 3.14159);
  return fract(sin(sn) * c + seed);
}`,Mv=Object.defineProperty,Iv=(n,e,t)=>e in n?Mv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Pc=(n,e,t)=>(Iv(n,typeof e!="symbol"?e+"":e,t),t);const zv=class Ac extends ie{constructor(e){e={...Ac.DEFAULT_OPTIONS,...e};const t=e.maxKernelSize??32,r=J.from({vertex:{source:ae,entryPoint:"mainVertex"},fragment:{source:Fv.replace("${MAX_KERNEL_SIZE}",t.toFixed(1)),entryPoint:"mainFragment"}}),i=re.from({vertex:le,fragment:Av.replace("${MAX_KERNEL_SIZE}",t.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{zoomBlurUniforms:{uStrength:{value:e.strength,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Pc(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,e)}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(e){this.uniforms.uRadii[0]=e}get radius(){return this.uniforms.uRadii[1]}set radius(e){this.uniforms.uRadii[1]=e<0||e===1/0?-1:e}};Pc(zv,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});const Ov=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},Ev=n=>(Pf("data-v-77ca8724"),n=n(),Af(),n),Rv={class:"w-full h-screen bg-black relative"},Uv=Ev(()=>Qr("div",{class:"absolute top-0 w-full h-full left-0 z-[1] gradient"},null,-1)),Lv={__name:"AppStartScreenPixi",setup(n){const e=pf(null);let t={},r=null,i=null,s=0,o=60,l=20,a=4,c=null,u=null,f=null,h=null;const d=new sn({color:16777215,alpha:1,blur:6,offset:{x:0,y:8}}),m=new sn({color:16777215,alpha:1,blur:6,offset:{x:8,y:0}}),x=new sn({color:16777215,alpha:1,blur:6,offset:{x:-4,y:0}}),p=new sn({color:16777215,alpha:1,blur:4,offset:{x:0,y:5}}),b=new sn({color:16777215,alpha:1,blur:4,offset:{x:0,y:-5}});let _=new Cx({type:0,angle:180,maxColors:0,stops:[{color:8022620,offset:0,alpha:1},{color:16775407,offset:1,alpha:1}]});const y=new sn({color:16775407,alpha:.5,blur:6,offset:{x:0,y:0}}),w=new ys({strength:1}),$=new ys({strength:.1});let R=new ft,N=new ft,k=new ft,O=new ft,I=new ft,ee=new ft,Z=null,B=null,L=null,T=null,z=null,S=null;const H=()=>{R.clear(),Z.length<=Z.stopLength?(R.moveTo(Z.x,Z.y),R.lineTo(Z.x+Z.length*Math.cos(r*(Math.PI/180)),Z.y+Z.length*Math.sin(r*(Math.PI/180))),Z.length+=o):(R.moveTo(Z.x+Z.hiddenLength*Math.cos(r*(Math.PI/180)),Z.y+Z.hiddenLength*Math.sin(r*(Math.PI/180))),R.lineTo(Z.x+Z.stopLength*Math.cos(r*(Math.PI/180)),Z.y+Z.stopLength*Math.sin(r*(Math.PI/180))),Z.hiddenLength+=o,Z.hiddenLength>=Z.stopLength&&(Z.step="stop-animation")),R.filters=[d,m,w],R.stroke({width:a,color:"#FFF8EF"}),N.clear(),B.length<=B.stopLength?(N.moveTo(B.x,B.y),N.lineTo(B.x+B.length*Math.cos(r*(Math.PI/180)),B.y-B.length*Math.sin(r*(Math.PI/180))),B.length+=o):(N.moveTo(B.x+B.hiddenLength*Math.cos(r*(Math.PI/180)),B.y-B.hiddenLength*Math.sin(r*(Math.PI/180))),N.lineTo(B.x+B.stopLength*Math.cos(r*(Math.PI/180)),B.y-B.stopLength*Math.sin(r*(Math.PI/180))),B.hiddenLength+=o,B.hiddenLength>=B.stopLength&&(B.step="stop-animation")),N.filters=[d,x,w],N.stroke({width:a,color:"#FFF8EF"}),k.clear(),L.length<=L.stopLength?(k.moveTo(L.x,L.y),k.lineTo(L.x-L.length,L.y),L.length+=o):(k.moveTo(L.x-L.hiddenLength,L.y),k.lineTo(0,L.y),L.hiddenLength+=o,L.hiddenLength>=L.stopLength&&(L.step="stop-animation")),k.filters=[p,b,w],k.stroke({width:a,color:"#FFF8EF"})};return ia(async()=>{t.lx1=Math.floor((window.innerWidth-800)/2),t.ly1=Math.floor(36*window.innerHeight/100/2),t.rx1=Math.floor((window.innerWidth-800)/2+800),t.ry1=Math.floor(36*window.innerHeight/100/2),t.bx=Math.floor(window.innerWidth/2),t.by=Math.floor(82*window.innerHeight/100),t.height=Math.floor(64*window.innerHeight/100),r=Math.atan(t.height/(800/2))*180/Math.PI,i=t.ly1,Z={length:0,hiddenLength:0,x:t.lx1-Math.round(i/Math.tan(r*Math.PI/180)),y:0,stopLength:Math.floor(Math.abs(window.innerHeight/Math.sin(r*Math.PI/180)))+20,step:"drawing"},B={length:0,hiddenLength:0,x:t.lx1+800/2-Math.round(i/Math.tan(r*Math.PI/180)),y:window.innerHeight,stopLength:Math.abs(window.innerHeight/Math.sin(r*Math.PI/180))+20,step:"drawing"},L={length:0,hiddenLength:0,x:window.innerWidth,y:i,stopLength:window.innerWidth+20,step:"drawing"},T={lx1:t.lx1,ly1:t.ly1,lx2:t.lx1,ly2:t.ly1,rx1:t.rx1,ry1:t.ry1,rx2:t.rx1,ry2:t.ry1,bx:t.bx,by:t.by,step:"change-opacity"},z=T,S=T;const E=new Su,X=new En;await E.init({resizeTo:window,preference:"webgl",backgroundAlpha:0}),e.value.appendChild(E.canvas);let Fe=0;X.add(()=>{c=performance.now(),u===null&&(u=c+500),(Z.step==="drawing"||B.step==="drawing"||L.step==="drawing")&&(H(),console.log("drawing lines")),c>u&&(O.clear(),I.clear(),ee.clear(),Fe++,s<1&&Fe%7===0&&T.step==="change-opacity"&&(s+=.05,T.step=s<1?T.step:"change-height"),T.step==="change-height"&&(T.ly1=T.ly1>0?T.ly1-l:T.ly1,T.ly2=T.ly2>0?T.ly2-l:T.ly2,T.ry2=T.ry2>0?T.ry2-l:T.ry2,T.ry1=T.ry1>0?T.ry1-l:T.ry1,T.by=T.by<window.innerHeight?T.by+l:T.by,T.step=T.ly1<=0&&T.ly2<=0&&T.ry2<=0&&T.ry1<=0&&T.by>=window.innerHeight?"change-width":T.step),T.step==="change-width"&&(T===z&&(z={...T},S={...T},f=c+300,h=c+600),T.lx1=T.lx1>0?T.lx1-l:T.lx1,T.lx2=T.lx2>0?T.lx2-l:T.lx2,T.rx2=T.rx2<window.innerWidth?T.rx2+l:T.rx2,T.rx1=T.rx1<window.innerWidth?T.rx1+l:T.rx1,T.step=T.lx1<=0&&T.lx2<=0&&T.rx2>=window.innerWidth&&T.rx1>=window.innerWidth?"sides-down":T.step),T.step==="sides-down"&&(T.ly1=T.ly1<window.innerHeight?T.ly1+l:T.ly1,T.ry1=T.ry1<window.innerHeight?T.ry1+l:T.ry1,T.step=T.ly1>=window.innerHeight&&T.ry1>=window.innerHeight?"stop-animation":T.step),f&&c>f&&(z.lx1=z.lx1>0?z.lx1-l:z.lx1,z.lx2=z.lx2>0?z.lx2-l:z.lx2,z.rx2=z.rx2<window.innerWidth?z.rx2+l:z.rx2,z.rx1=z.rx1<window.innerWidth?z.rx1+l:z.rx1,z.step=z.lx1<=0&&z.lx2<=0&&z.rx2>=window.innerWidth&&z.rx1>=window.innerWidth?"sides-down":z.step,z.step==="sides-down"&&(z.ly1=z.ly1<window.innerHeight?z.ly1+l:z.ly1,z.ry1=z.ry1<window.innerHeight?z.ry1+l:z.ry1,z.step=z.ly1>=window.innerHeight&&z.ry1>=window.innerHeight?"stop-animation":z.step)),h&&c>h&&(S.lx1=S.lx1>0?S.lx1-l:S.lx1,S.lx2=S.lx2>0?S.lx2-l:S.lx2,S.rx2=S.rx2<window.innerWidth?S.rx2+l:S.rx2,S.rx1=S.rx1<window.innerWidth?S.rx1+l:S.rx1,S.step=S.lx1<=0&&S.lx2<=0&&S.rx2>=window.innerWidth&&S.rx1>=window.innerWidth?"sides-down":S.step,S.step==="sides-down"&&(S.ly1=S.ly1<window.innerHeight?S.ly1+l:S.ly1,S.ry1=S.ry1<window.innerHeight?S.ry1+l:S.ry1,S.step=S.ly1>=window.innerHeight&&S.ry1>=window.innerHeight?"stop-animation":S.step)),O.poly([T.lx1,T.ly1,T.lx2,T.ly2,T.rx2,T.ry2,T.rx1,T.ry1,T.bx,T.by]),O.filters=[_,y,$],O.fill({color:"#FFF8EF",alpha:s<1?s:1}),(z.step==="change-width"||z.step==="sides-down")&&(I.poly([z.lx1,z.ly1,z.lx2,z.ly2,z.rx2,z.ry2,z.rx1,z.ry1,z.bx,z.by]),I.filters=[_,y,$],I.fill({color:"#FFF8EF",alpha:s<1?s:1})),(S.step==="change-width"||S.step==="sides-down")&&(ee.poly([S.lx1,S.ly1,S.lx2,S.ly2,S.rx2,S.ry2,S.rx1,S.ry1,S.bx,S.by]),ee.filters=[_,y,$],ee.fill({color:"#FFF8EF",alpha:s<1?s:1}))),(S==null?void 0:S.step)==="stop-animation"&&X.destroy(),console.log("animatin work",X.FPS)}),X.start(),E.stage.addChild(R),E.stage.addChild(N),E.stage.addChild(k),E.stage.addChild(O),E.stage.addChild(I),E.stage.addChild(ee)}),(E,X)=>(Sa(),_h("div",Rv,[Uv,Qr("div",{ref_key:"canvasContainer",ref:e,class:"relative z-[2]"},null,512)]))}},Dv=Ov(Lv,[["__scopeId","data-v-77ca8724"]]),Bv={__name:"App",setup(n){return(e,t)=>(Sa(),bh(Dv))}};od(Bv).mount("#app");export{Qm as $,yu as A,Re as B,Be as C,Ft as D,he as E,ie as F,J as G,tl as H,Qn as I,vm as J,Mm as K,_e as L,fe as M,we as N,Wm as O,Ae as P,rl as Q,er as R,Am as S,En as T,cu as U,qd as V,Ci as W,de as X,Ga as Y,j as Z,ve as _,is as a,bp as a0,In as a1,Ln as a2,Pl as a3,Jm as a4,ep as a5,ei as a6,ln as a7,yn as a8,Iu as a9,pl as aa,ft as ab,Cd as ac,Ou as ad,xt as b,re as c,Js as d,ot as e,hp as f,wu as g,ml as h,pp as i,ir as j,Mr as k,Qs as l,gu as m,Vo as n,Ka as o,Ke as p,oe as q,Ud as r,Sd as s,vp as t,wp as u,dt as v,pt as w,Da as x,Ue as y,st as z};
