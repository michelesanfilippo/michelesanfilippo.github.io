const Av=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}};Av();var je={exports:{}},ze={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var xd=Object.getOwnPropertySymbols,Lv=Object.prototype.hasOwnProperty,Pv=Object.prototype.propertyIsEnumerable;function Rv(n){if(n==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}function Dv(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de",Object.getOwnPropertyNames(n)[0]==="5")return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var i=Object.getOwnPropertyNames(e).map(function(a){return e[a]});if(i.join("")!=="0123456789")return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(a){r[a]=a}),Object.keys(Object.assign({},r)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Em=Dv()?Object.assign:function(n,e){for(var t,i=Rv(n),r,a=1;a<arguments.length;a++){t=Object(arguments[a]);for(var o in t)Lv.call(t,o)&&(i[o]=t[o]);if(xd){r=xd(t);for(var s=0;s<r.length;s++)Pv.call(t,r[s])&&(i[r[s]]=t[r[s]])}}return i};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf=Em,fa=60103,Tm=60106;ze.Fragment=60107;ze.StrictMode=60108;ze.Profiler=60114;var Cm=60109,Am=60110,Lm=60112;ze.Suspense=60113;var Pm=60115,Rm=60116;if(typeof Symbol=="function"&&Symbol.for){var hn=Symbol.for;fa=hn("react.element"),Tm=hn("react.portal"),ze.Fragment=hn("react.fragment"),ze.StrictMode=hn("react.strict_mode"),ze.Profiler=hn("react.profiler"),Cm=hn("react.provider"),Am=hn("react.context"),Lm=hn("react.forward_ref"),ze.Suspense=hn("react.suspense"),Pm=hn("react.memo"),Rm=hn("react.lazy")}var yd=typeof Symbol=="function"&&Symbol.iterator;function Iv(n){return n===null||typeof n!="object"?null:(n=yd&&n[yd]||n["@@iterator"],typeof n=="function"?n:null)}function Po(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Im={};function da(n,e,t){this.props=n,this.context=e,this.refs=Im,this.updater=t||Dm}da.prototype.isReactComponent={};da.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error(Po(85));this.updater.enqueueSetState(this,n,e,"setState")};da.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function km(){}km.prototype=da.prototype;function rf(n,e,t){this.props=n,this.context=e,this.refs=Im,this.updater=t||Dm}var af=rf.prototype=new km;af.constructor=rf;nf(af,da.prototype);af.isPureReactComponent=!0;var of={current:null},Nm=Object.prototype.hasOwnProperty,Om={key:!0,ref:!0,__self:!0,__source:!0};function Fm(n,e,t){var i,r={},a=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)Nm.call(e,i)&&!Om.hasOwnProperty(i)&&(r[i]=e[i]);var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in s=n.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:fa,type:n,key:a,ref:o,props:r,_owner:of.current}}function kv(n,e){return{$$typeof:fa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function sf(n){return typeof n=="object"&&n!==null&&n.$$typeof===fa}function Nv(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Sd=/\/+/g;function Gl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Nv(""+n.key):e.toString(36)}function ws(n,e,t,i,r){var a=typeof n;(a==="undefined"||a==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case fa:case Tm:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Gl(o,0):i,Array.isArray(r)?(t="",n!=null&&(t=n.replace(Sd,"$&/")+"/"),ws(r,e,t,"",function(u){return u})):r!=null&&(sf(r)&&(r=kv(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Sd,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Array.isArray(n))for(var s=0;s<n.length;s++){a=n[s];var l=i+Gl(a,s);o+=ws(a,e,t,l,r)}else if(l=Iv(n),typeof l=="function")for(n=l.call(n),s=0;!(a=n.next()).done;)a=a.value,l=i+Gl(a,s++),o+=ws(a,e,t,l,r);else if(a==="object")throw e=""+n,Error(Po(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e));return o}function Vo(n,e,t){if(n==null)return n;var i=[],r=0;return ws(n,i,"","",function(a){return e.call(t,a,r++)}),i}function Ov(n){if(n._status===-1){var e=n._result;e=e(),n._status=0,n._result=e,e.then(function(t){n._status===0&&(t=t.default,n._status=1,n._result=t)},function(t){n._status===0&&(n._status=2,n._result=t)})}if(n._status===1)return n._result;throw n._result}var zm={current:null};function ei(){var n=zm.current;if(n===null)throw Error(Po(321));return n}var Fv={ReactCurrentDispatcher:zm,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:of,IsSomeRendererActing:{current:!1},assign:nf};ze.Children={map:Vo,forEach:function(n,e,t){Vo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Vo(n,function(){e++}),e},toArray:function(n){return Vo(n,function(e){return e})||[]},only:function(n){if(!sf(n))throw Error(Po(143));return n}};ze.Component=da;ze.PureComponent=rf;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fv;ze.cloneElement=function(n,e,t){if(n==null)throw Error(Po(267,n));var i=nf({},n.props),r=n.key,a=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=of.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var s=n.type.defaultProps;for(l in e)Nm.call(e,l)&&!Om.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}return{$$typeof:fa,type:n.type,key:r,ref:a,props:i,_owner:o}};ze.createContext=function(n,e){return e===void 0&&(e=null),n={$$typeof:Am,_calculateChangedBits:e,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null},n.Provider={$$typeof:Cm,_context:n},n.Consumer=n};ze.createElement=Fm;ze.createFactory=function(n){var e=Fm.bind(null,n);return e.type=n,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(n){return{$$typeof:Lm,render:n}};ze.isValidElement=sf;ze.lazy=function(n){return{$$typeof:Rm,_payload:{_status:-1,_result:n},_init:Ov}};ze.memo=function(n,e){return{$$typeof:Pm,type:n,compare:e===void 0?null:e}};ze.useCallback=function(n,e){return ei().useCallback(n,e)};ze.useContext=function(n,e){return ei().useContext(n,e)};ze.useDebugValue=function(){};ze.useEffect=function(n,e){return ei().useEffect(n,e)};ze.useImperativeHandle=function(n,e,t){return ei().useImperativeHandle(n,e,t)};ze.useLayoutEffect=function(n,e){return ei().useLayoutEffect(n,e)};ze.useMemo=function(n,e){return ei().useMemo(n,e)};ze.useReducer=function(n,e,t){return ei().useReducer(n,e,t)};ze.useRef=function(n){return ei().useRef(n)};ze.useState=function(n){return ei().useState(n)};ze.version="17.0.2";je.exports=ze;var dl=je.exports,Um={exports:{}},dn={},Bm={exports:{}},Gm={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){var e,t,i,r;if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();n.unstable_now=function(){return o.now()-s}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,f=function(){if(l!==null)try{var G=n.unstable_now();l(!0,G),l=null}catch(L){throw setTimeout(f,0),L}};e=function(G){l!==null?setTimeout(e,0,G):(l=G,setTimeout(f,0))},t=function(G,L){u=setTimeout(G,L)},i=function(){clearTimeout(u)},n.unstable_shouldYield=function(){return!1},r=n.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,p=null,c=-1,m=5,v=0;n.unstable_shouldYield=function(){return n.unstable_now()>=v},r=function(){},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<G?Math.floor(1e3/G):5};var _=new MessageChannel,x=_.port2;_.port1.onmessage=function(){if(p!==null){var G=n.unstable_now();v=G+m;try{p(!0,G)?x.postMessage(null):(y=!1,p=null)}catch(L){throw x.postMessage(null),L}}else y=!1},e=function(G){p=G,y||(y=!0,x.postMessage(null))},t=function(G,L){c=h(function(){G(n.unstable_now())},L)},i=function(){d(c),c=-1}}function b(G,L){var B=G.length;G.push(L);e:for(;;){var J=B-1>>>1,D=G[J];if(D!==void 0&&0<S(D,L))G[J]=L,G[B]=D,B=J;else break e}}function T(G){return G=G[0],G===void 0?null:G}function A(G){var L=G[0];if(L!==void 0){var B=G.pop();if(B!==L){G[0]=B;e:for(var J=0,D=G.length;J<D;){var le=2*(J+1)-1,se=G[le],ne=le+1,oe=G[ne];if(se!==void 0&&0>S(se,B))oe!==void 0&&0>S(oe,se)?(G[J]=oe,G[ne]=B,J=ne):(G[J]=se,G[le]=B,J=le);else if(oe!==void 0&&0>S(oe,B))G[J]=oe,G[ne]=B,J=ne;else break e}}return L}return null}function S(G,L){var B=G.sortIndex-L.sortIndex;return B!==0?B:G.id-L.id}var M=[],R=[],Q=1,q=null,F=3,I=!1,k=!1,O=!1;function W(G){for(var L=T(R);L!==null;){if(L.callback===null)A(R);else if(L.startTime<=G)A(R),L.sortIndex=L.expirationTime,b(M,L);else break;L=T(R)}}function V(G){if(O=!1,W(G),!k)if(T(M)!==null)k=!0,e(K);else{var L=T(R);L!==null&&t(V,L.startTime-G)}}function K(G,L){k=!1,O&&(O=!1,i()),I=!0;var B=F;try{for(W(L),q=T(M);q!==null&&(!(q.expirationTime>L)||G&&!n.unstable_shouldYield());){var J=q.callback;if(typeof J=="function"){q.callback=null,F=q.priorityLevel;var D=J(q.expirationTime<=L);L=n.unstable_now(),typeof D=="function"?q.callback=D:q===T(M)&&A(M),W(L)}else A(M);q=T(M)}if(q!==null)var le=!0;else{var se=T(R);se!==null&&t(V,se.startTime-L),le=!1}return le}finally{q=null,F=B,I=!1}}var Y=r;n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){k||I||(k=!0,e(K))},n.unstable_getCurrentPriorityLevel=function(){return F},n.unstable_getFirstCallbackNode=function(){return T(M)},n.unstable_next=function(G){switch(F){case 1:case 2:case 3:var L=3;break;default:L=F}var B=F;F=L;try{return G()}finally{F=B}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=Y,n.unstable_runWithPriority=function(G,L){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var B=F;F=G;try{return L()}finally{F=B}},n.unstable_scheduleCallback=function(G,L,B){var J=n.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?J+B:J):B=J,G){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=B+D,G={id:Q++,callback:L,priorityLevel:G,startTime:B,expirationTime:D,sortIndex:-1},B>J?(G.sortIndex=B,b(R,G),T(M)===null&&G===T(R)&&(O?i():O=!0,t(V,B-J))):(G.sortIndex=D,b(M,G),k||I||(k=!0,e(K))),G},n.unstable_wrapCallback=function(G){var L=F;return function(){var B=F;F=L;try{return G.apply(this,arguments)}finally{F=B}}}})(Gm);Bm.exports=Gm;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hl=je.exports,Je=Em,yt=Bm.exports;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!hl)throw Error(te(227));var Vm=new Set,fo={};function fr(n,e){ia(n,e),ia(n+"Capture",e)}function ia(n,e){for(fo[n]=e,n=0;n<e.length;n++)Vm.add(e[n])}var Zn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),zv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wd=Object.prototype.hasOwnProperty,Md={},bd={};function Uv(n){return wd.call(bd,n)?!0:wd.call(Md,n)?!1:zv.test(n)?bd[n]=!0:(Md[n]=!0,!1)}function Bv(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Gv(n,e,t,i){if(e===null||typeof e=="undefined"||Bv(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Bt(n,e,t,i,r,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Et[n]=new Bt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Et[e]=new Bt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Et[n]=new Bt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Et[n]=new Bt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Et[n]=new Bt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Et[n]=new Bt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Et[n]=new Bt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Et[n]=new Bt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Et[n]=new Bt(n,5,!1,n.toLowerCase(),null,!1,!1)});var lf=/[\-:]([a-z])/g;function uf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(lf,uf);Et[e]=new Bt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(lf,uf);Et[e]=new Bt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(lf,uf);Et[e]=new Bt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Et[n]=new Bt(n,1,!1,n.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Et[n]=new Bt(n,1,!1,n.toLowerCase(),null,!0,!0)});function cf(n,e,t,i){var r=Et.hasOwnProperty(e)?Et[e]:null,a=r!==null?r.type===0:i?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");a||(Gv(e,t,r,i)&&(t=null),i||r===null?Uv(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var dr=hl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=60103,Xi=60106,li=60107,ff=60108,Ka=60114,df=60109,hf=60110,pl=60112,Qa=60113,Fs=60120,ml=60115,pf=60116,mf=60121,gf=60128,Hm=60129,vf=60130,qu=60131;if(typeof Symbol=="function"&&Symbol.for){var _t=Symbol.for;Ha=_t("react.element"),Xi=_t("react.portal"),li=_t("react.fragment"),ff=_t("react.strict_mode"),Ka=_t("react.profiler"),df=_t("react.provider"),hf=_t("react.context"),pl=_t("react.forward_ref"),Qa=_t("react.suspense"),Fs=_t("react.suspense_list"),ml=_t("react.memo"),pf=_t("react.lazy"),mf=_t("react.block"),_t("react.scope"),gf=_t("react.opaque.id"),Hm=_t("react.debug_trace_mode"),vf=_t("react.offscreen"),qu=_t("react.legacy_hidden")}var Ed=typeof Symbol=="function"&&Symbol.iterator;function wa(n){return n===null||typeof n!="object"?null:(n=Ed&&n[Ed]||n["@@iterator"],typeof n=="function"?n:null)}var Vl;function Wa(n){if(Vl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Vl=e&&e[1]||""}return`
`+Vl+n}var Hl=!1;function Ho(n,e){if(!n||Hl)return"";Hl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var i=l}Reflect.construct(n,[],e)}else{try{e.call()}catch(l){i=l}n.call(e.prototype)}else{try{throw Error()}catch(l){i=l}n()}}catch(l){if(l&&i&&typeof l.stack=="string"){for(var r=l.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,s=a.length-1;1<=o&&0<=s&&r[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(r[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||r[o]!==a[s])return`
`+r[o].replace(" at new "," at ");while(1<=o&&0<=s);break}}}finally{Hl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Wa(n):""}function Vv(n){switch(n.tag){case 5:return Wa(n.type);case 16:return Wa("Lazy");case 13:return Wa("Suspense");case 19:return Wa("SuspenseList");case 0:case 2:case 15:return n=Ho(n.type,!1),n;case 11:return n=Ho(n.type.render,!1),n;case 22:return n=Ho(n.type._render,!1),n;case 1:return n=Ho(n.type,!0),n;default:return""}}function Hr(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case li:return"Fragment";case Xi:return"Portal";case Ka:return"Profiler";case ff:return"StrictMode";case Qa:return"Suspense";case Fs:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case hf:return(n.displayName||"Context")+".Consumer";case df:return(n._context.displayName||"Context")+".Provider";case pl:var e=n.render;return e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case ml:return Hr(n.type);case mf:return Hr(n._render);case pf:e=n._payload,n=n._init;try{return Hr(n(e))}catch{}}return null}function Ei(n){switch(typeof n){case"boolean":case"number":case"object":case"string":case"undefined":return n;default:return""}}function Wm(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hv(n){var e=Wm(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,a=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Wo(n){n._valueTracker||(n._valueTracker=Hv(n))}function jm(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Wm(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function zs(n){if(n=n||(typeof document!="undefined"?document:void 0),typeof n=="undefined")return null;try{return n.activeElement||n.body}catch{return n.body}}function Yu(n,e){var t=e.checked;return Je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function Td(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ei(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xm(n,e){e=e.checked,e!=null&&cf(n,"checked",e,!1)}function Zu(n,e){Xm(n,e);var t=Ei(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Ku(n,e.type,t):e.hasOwnProperty("defaultValue")&&Ku(n,e.type,Ei(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Cd(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Ku(n,e,t){(e!=="number"||zs(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}function Wv(n){var e="";return hl.Children.forEach(n,function(t){t!=null&&(e+=t)}),e}function Qu(n,e){return n=Je({children:void 0},e),(e=Wv(e.children))&&(n.children=e),n}function Wr(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ei(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Ju(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return Je({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ad(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(Array.isArray(t)){if(!(1>=t.length))throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ei(t)}}function $m(n,e){var t=Ei(e.value),i=Ei(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Ld(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}var ec={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function qm(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?qm(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var jo,Ym=function(n){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!==ec.svg||"innerHTML"in n)n.innerHTML=e;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ho(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ja={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jv=["Webkit","ms","Moz","O"];Object.keys(Ja).forEach(function(n){jv.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ja[e]=Ja[n]})});function Zm(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ja.hasOwnProperty(n)&&Ja[n]?(""+e).trim():e+"px"}function Km(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Zm(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Xv=Je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nc(n,e){if(e){if(Xv[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function ic(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function _f(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rc=null,jr=null,Xr=null;function Pd(n){if(n=Do(n)){if(typeof rc!="function")throw Error(te(280));var e=n.stateNode;e&&(e=Sl(e),rc(n.stateNode,n.type,e))}}function Qm(n){jr?Xr?Xr.push(n):Xr=[n]:jr=n}function Jm(){if(jr){var n=jr,e=Xr;if(Xr=jr=null,Pd(n),e)for(n=0;n<e.length;n++)Pd(e[n])}}function xf(n,e){return n(e)}function eg(n,e,t,i,r){return n(e,t,i,r)}function yf(){}var tg=xf,$i=!1,Wl=!1;function Sf(){(jr!==null||Xr!==null)&&(yf(),Jm())}function $v(n,e,t){if(Wl)return n(e,t);Wl=!0;try{return tg(n,e,t)}finally{Wl=!1,Sf()}}function po(n,e){var t=n.stateNode;if(t===null)return null;var i=Sl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var ac=!1;if(Zn)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){ac=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{ac=!1}function qv(n,e,t,i,r,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(f){this.onError(f)}}var eo=!1,Us=null,Bs=!1,oc=null,Yv={onError:function(n){eo=!0,Us=n}};function Zv(n,e,t,i,r,a,o,s,l){eo=!1,Us=null,qv.apply(Yv,arguments)}function Kv(n,e,t,i,r,a,o,s,l){if(Zv.apply(this,arguments),eo){if(eo){var u=Us;eo=!1,Us=null}else throw Error(te(198));Bs||(Bs=!0,oc=u)}}function hr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&1026)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function ng(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Rd(n){if(hr(n)!==n)throw Error(te(188))}function Qv(n){var e=n.alternate;if(!e){if(e=hr(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===t)return Rd(r),n;if(a===i)return Rd(r),e;a=a.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=a;else{for(var o=!1,s=r.child;s;){if(s===t){o=!0,t=r,i=a;break}if(s===i){o=!0,i=r,t=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===t){o=!0,t=a,i=r;break}if(s===i){o=!0,i=a,t=r;break}s=s.sibling}if(!o)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function ig(n){if(n=Qv(n),!n)return null;for(var e=n;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===n)break;for(;!e.sibling;){if(!e.return||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function Dd(n,e){for(var t=n.alternate;e!==null;){if(e===n||e===t)return!0;e=e.return}return!1}var rg,wf,ag,og,sc=!1,An=[],gi=null,vi=null,_i=null,mo=new Map,go=new Map,ba=[],Id="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lc(n,e,t,i,r){return{blockedOn:n,domEventName:e,eventSystemFlags:t|16,nativeEvent:r,targetContainers:[i]}}function kd(n,e){switch(n){case"focusin":case"focusout":gi=null;break;case"dragenter":case"dragleave":vi=null;break;case"mouseover":case"mouseout":_i=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function Ea(n,e,t,i,r,a){return n===null||n.nativeEvent!==a?(n=lc(e,t,i,r,a),e!==null&&(e=Do(e),e!==null&&wf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Jv(n,e,t,i,r){switch(e){case"focusin":return gi=Ea(gi,n,e,t,i,r),!0;case"dragenter":return vi=Ea(vi,n,e,t,i,r),!0;case"mouseover":return _i=Ea(_i,n,e,t,i,r),!0;case"pointerover":var a=r.pointerId;return mo.set(a,Ea(mo.get(a)||null,n,e,t,i,r)),!0;case"gotpointercapture":return a=r.pointerId,go.set(a,Ea(go.get(a)||null,n,e,t,i,r)),!0}return!1}function e_(n){var e=qi(n.target);if(e!==null){var t=hr(e);if(t!==null){if(e=t.tag,e===13){if(e=ng(t),e!==null){n.blockedOn=e,og(n.lanePriority,function(){yt.unstable_runWithPriority(n.priority,function(){ag(t)})});return}}else if(e===3&&t.stateNode.hydrate){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ms(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Tf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t!==null)return e=Do(t),e!==null&&wf(e),n.blockedOn=t,!1;e.shift()}return!0}function Nd(n,e,t){Ms(n)&&t.delete(e)}function t_(){for(sc=!1;0<An.length;){var n=An[0];if(n.blockedOn!==null){n=Do(n.blockedOn),n!==null&&rg(n);break}for(var e=n.targetContainers;0<e.length;){var t=Tf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t!==null){n.blockedOn=t;break}e.shift()}n.blockedOn===null&&An.shift()}gi!==null&&Ms(gi)&&(gi=null),vi!==null&&Ms(vi)&&(vi=null),_i!==null&&Ms(_i)&&(_i=null),mo.forEach(Nd),go.forEach(Nd)}function Ta(n,e){n.blockedOn===e&&(n.blockedOn=null,sc||(sc=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,t_)))}function sg(n){function e(r){return Ta(r,n)}if(0<An.length){Ta(An[0],n);for(var t=1;t<An.length;t++){var i=An[t];i.blockedOn===n&&(i.blockedOn=null)}}for(gi!==null&&Ta(gi,n),vi!==null&&Ta(vi,n),_i!==null&&Ta(_i,n),mo.forEach(e),go.forEach(e),t=0;t<ba.length;t++)i=ba[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<ba.length&&(t=ba[0],t.blockedOn===null);)e_(t),t.blockedOn===null&&ba.shift()}function Xo(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ir={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},jl={},lg={};Zn&&(lg=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function gl(n){if(jl[n])return jl[n];if(!Ir[n])return n;var e=Ir[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in lg)return jl[n]=e[t];return n}var ug=gl("animationend"),cg=gl("animationiteration"),fg=gl("animationstart"),dg=gl("transitionend"),hg=new Map,Mf=new Map,n_=["abort","abort",ug,"animationEnd",cg,"animationIteration",fg,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",dg,"transitionEnd","waiting","waiting"];function bf(n,e){for(var t=0;t<n.length;t+=2){var i=n[t],r=n[t+1];r="on"+(r[0].toUpperCase()+r.slice(1)),Mf.set(i,e),hg.set(i,r),fr(r,[i])}}var i_=yt.unstable_now;i_();var We=8;function Pr(n){if((1&n)!==0)return We=15,1;if((2&n)!==0)return We=14,2;if((4&n)!==0)return We=13,4;var e=24&n;return e!==0?(We=12,e):(n&32)!==0?(We=11,32):(e=192&n,e!==0?(We=10,e):(n&256)!==0?(We=9,256):(e=3584&n,e!==0?(We=8,e):(n&4096)!==0?(We=7,4096):(e=4186112&n,e!==0?(We=6,e):(e=62914560&n,e!==0?(We=5,e):n&67108864?(We=4,67108864):(n&134217728)!==0?(We=3,134217728):(e=805306368&n,e!==0?(We=2,e):(1073741824&n)!==0?(We=1,1073741824):(We=8,n))))))}function r_(n){switch(n){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function a_(n){switch(n){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(te(358,n))}}function vo(n,e){var t=n.pendingLanes;if(t===0)return We=0;var i=0,r=0,a=n.expiredLanes,o=n.suspendedLanes,s=n.pingedLanes;if(a!==0)i=a,r=We=15;else if(a=t&134217727,a!==0){var l=a&~o;l!==0?(i=Pr(l),r=We):(s&=a,s!==0&&(i=Pr(s),r=We))}else a=t&~o,a!==0?(i=Pr(a),r=We):s!==0&&(i=Pr(s),r=We);if(i===0)return 0;if(i=31-Ti(i),i=t&((0>i?0:1<<i)<<1)-1,e!==0&&e!==i&&(e&o)===0){if(Pr(e),r<=We)return e;We=r}if(e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Ti(e),r=1<<t,i|=n[t],e&=~r;return i}function pg(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Gs(n,e){switch(n){case 15:return 1;case 14:return 2;case 12:return n=Rr(24&~e),n===0?Gs(10,e):n;case 10:return n=Rr(192&~e),n===0?Gs(8,e):n;case 8:return n=Rr(3584&~e),n===0&&(n=Rr(4186112&~e),n===0&&(n=512)),n;case 2:return e=Rr(805306368&~e),e===0&&(e=268435456),e}throw Error(te(358,n))}function Rr(n){return n&-n}function Xl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function vl(n,e,t){n.pendingLanes|=e;var i=e-1;n.suspendedLanes&=i,n.pingedLanes&=i,n=n.eventTimes,e=31-Ti(e),n[e]=t}var Ti=Math.clz32?Math.clz32:l_,o_=Math.log,s_=Math.LN2;function l_(n){return n===0?32:31-(o_(n)/s_|0)|0}var u_=yt.unstable_UserBlockingPriority,c_=yt.unstable_runWithPriority,bs=!0;function f_(n,e,t,i){$i||yf();var r=Ef,a=$i;$i=!0;try{eg(r,n,e,t,i)}finally{($i=a)||Sf()}}function d_(n,e,t,i){c_(u_,Ef.bind(null,n,e,t,i))}function Ef(n,e,t,i){if(bs){var r;if((r=(e&4)===0)&&0<An.length&&-1<Id.indexOf(n))n=lc(null,n,e,t,i),An.push(n);else{var a=Tf(n,e,t,i);if(a===null)r&&kd(n,i);else{if(r){if(-1<Id.indexOf(n)){n=lc(a,n,e,t,i),An.push(n);return}if(Jv(a,n,e,t,i))return;kd(n,i)}Cg(n,e,i,null,t)}}}}function Tf(n,e,t,i){var r=_f(i);if(r=qi(r),r!==null){var a=hr(r);if(a===null)r=null;else{var o=a.tag;if(o===13){if(r=ng(a),r!==null)return r;r=null}else if(o===3){if(a.stateNode.hydrate)return a.tag===3?a.stateNode.containerInfo:null;r=null}else a!==r&&(r=null)}}return Cg(n,e,i,r,t),null}var ui=null,Cf=null,Es=null;function mg(){if(Es)return Es;var n,e=Cf,t=e.length,i,r="value"in ui?ui.value:ui.textContent,a=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[a-i];i++);return Es=r.slice(n,1<i?1-i:void 0)}function Ts(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function $o(){return!0}function Od(){return!1}function tn(n){function e(t,i,r,a,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in n)n.hasOwnProperty(s)&&(t=n[s],this[s]=t?t(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?$o:Od,this.isPropagationStopped=Od,this}return Je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),e}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Af=tn(ha),Ro=Je({},ha,{view:0,detail:0}),h_=tn(Ro),$l,ql,Ca,_l=Je({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ca&&(Ca&&n.type==="mousemove"?($l=n.screenX-Ca.screenX,ql=n.screenY-Ca.screenY):ql=$l=0,Ca=n),$l)},movementY:function(n){return"movementY"in n?n.movementY:ql}}),Fd=tn(_l),p_=Je({},_l,{dataTransfer:0}),m_=tn(p_),g_=Je({},Ro,{relatedTarget:0}),Yl=tn(g_),v_=Je({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),__=tn(v_),x_=Je({},ha,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),y_=tn(x_),S_=Je({},ha,{data:0}),zd=tn(S_),w_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E_(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=b_[n])?!!e[n]:!1}function Lf(){return E_}var T_=Je({},Ro,{key:function(n){if(n.key){var e=w_[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ts(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lf,charCode:function(n){return n.type==="keypress"?Ts(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ts(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),C_=tn(T_),A_=Je({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ud=tn(A_),L_=Je({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lf}),P_=tn(L_),R_=Je({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),D_=tn(R_),I_=Je({},_l,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),k_=tn(I_),N_=[9,13,27,32],Pf=Zn&&"CompositionEvent"in window,to=null;Zn&&"documentMode"in document&&(to=document.documentMode);var O_=Zn&&"TextEvent"in window&&!to,gg=Zn&&(!Pf||to&&8<to&&11>=to),Bd=String.fromCharCode(32),Gd=!1;function vg(n,e){switch(n){case"keyup":return N_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _g(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var kr=!1;function F_(n,e){switch(n){case"compositionend":return _g(e);case"keypress":return e.which!==32?null:(Gd=!0,Bd);case"textInput":return n=e.data,n===Bd&&Gd?null:n;default:return null}}function z_(n,e){if(kr)return n==="compositionend"||!Pf&&vg(n,e)?(n=mg(),Es=Cf=ui=null,kr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gg&&e.locale!=="ko"?null:e.data;default:return null}}var U_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!U_[n.type]:e==="textarea"}function xg(n,e,t,i){Qm(i),e=Vs(e,"onChange"),0<e.length&&(t=new Af("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var no=null,_o=null;function B_(n){bg(n,0)}function xl(n){var e=Or(n);if(jm(e))return n}function G_(n,e){if(n==="change")return e}var yg=!1;if(Zn){var Zl;if(Zn){var Kl="oninput"in document;if(!Kl){var Hd=document.createElement("div");Hd.setAttribute("oninput","return;"),Kl=typeof Hd.oninput=="function"}Zl=Kl}else Zl=!1;yg=Zl&&(!document.documentMode||9<document.documentMode)}function Wd(){no&&(no.detachEvent("onpropertychange",Sg),_o=no=null)}function Sg(n){if(n.propertyName==="value"&&xl(_o)){var e=[];if(xg(e,_o,n,_f(n)),n=B_,$i)n(e);else{$i=!0;try{xf(n,e)}finally{$i=!1,Sf()}}}}function V_(n,e,t){n==="focusin"?(Wd(),no=e,_o=t,no.attachEvent("onpropertychange",Sg)):n==="focusout"&&Wd()}function H_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xl(_o)}function W_(n,e){if(n==="click")return xl(e)}function j_(n,e){if(n==="input"||n==="change")return xl(e)}function X_(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var sn=typeof Object.is=="function"?Object.is:X_,$_=Object.prototype.hasOwnProperty;function xo(n,e){if(sn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++)if(!$_.call(e,t[i])||!sn(n[t[i]],e[t[i]]))return!1;return!0}function jd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Xd(n,e){var t=jd(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=jd(t)}}function wg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?wg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function $d(){for(var n=window,e=zs();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=zs(n.document)}return e}function uc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var q_=Zn&&"documentMode"in document&&11>=document.documentMode,Nr=null,cc=null,io=null,fc=!1;function qd(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;fc||Nr==null||Nr!==zs(i)||(i=Nr,"selectionStart"in i&&uc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),io&&xo(io,i)||(io=i,i=Vs(cc,"onSelect"),0<i.length&&(e=new Af("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Nr)))}bf("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);bf("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);bf(n_,2);for(var Yd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Ql=0;Ql<Yd.length;Ql++)Mf.set(Yd[Ql],0);ia("onMouseEnter",["mouseout","mouseover"]);ia("onMouseLeave",["mouseout","mouseover"]);ia("onPointerEnter",["pointerout","pointerover"]);ia("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ja));function Zd(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Kv(i,e,void 0,n),n.currentTarget=null}function bg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&r.isPropagationStopped())break e;Zd(r,s,u),a=l}else for(o=0;o<i.length;o++){if(s=i[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&r.isPropagationStopped())break e;Zd(r,s,u),a=l}}}if(Bs)throw n=oc,Bs=!1,oc=null,n}function $e(n,e){var t=Lg(e),i=n+"__bubble";t.has(i)||(Tg(e,n,2,!1),t.add(i))}var Kd="_reactListening"+Math.random().toString(36).slice(2);function Eg(n){n[Kd]||(n[Kd]=!0,Vm.forEach(function(e){Mg.has(e)||Qd(e,!1,n,null),Qd(e,!0,n,null)}))}function Qd(n,e,t,i){var r=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,a=t;if(n==="selectionchange"&&t.nodeType!==9&&(a=t.ownerDocument),i!==null&&!e&&Mg.has(n)){if(n!=="scroll")return;r|=2,a=i}var o=Lg(a),s=n+"__"+(e?"capture":"bubble");o.has(s)||(e&&(r|=4),Tg(a,n,r,e),o.add(s))}function Tg(n,e,t,i){var r=Mf.get(e);switch(r===void 0?2:r){case 0:r=f_;break;case 1:r=d_;break;default:r=Ef}t=r.bind(null,e,t,n),r=void 0,!ac||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Cg(n,e,t,i,r){var a=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;s!==null;){if(o=qi(s),o===null)return;if(l=o.tag,l===5||l===6){i=a=o;continue e}s=s.parentNode}}i=i.return}$v(function(){var u=a,f=_f(t),h=[];e:{var d=hg.get(n);if(d!==void 0){var g=Af,y=n;switch(n){case"keypress":if(Ts(t)===0)break e;case"keydown":case"keyup":g=C_;break;case"focusin":y="focus",g=Yl;break;case"focusout":y="blur",g=Yl;break;case"beforeblur":case"afterblur":g=Yl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=m_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=P_;break;case ug:case cg:case fg:g=__;break;case dg:g=D_;break;case"scroll":g=h_;break;case"wheel":g=k_;break;case"copy":case"cut":case"paste":g=y_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ud}var p=(e&4)!==0,c=!p&&n==="scroll",m=p?d!==null?d+"Capture":null:d;p=[];for(var v=u,_;v!==null;){_=v;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,m!==null&&(x=po(v,m),x!=null&&p.push(yo(v,x,_)))),c)break;v=v.return}0<p.length&&(d=new g(d,y,null,t,f),h.push({event:d,listeners:p}))}}if((e&7)===0){e:{if(d=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",d&&(e&16)===0&&(y=t.relatedTarget||t.fromElement)&&(qi(y)||y[pa]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=t.relatedTarget||t.toElement,g=u,y=y?qi(y):null,y!==null&&(c=hr(y),y!==c||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(p=Fd,x="onMouseLeave",m="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(p=Ud,x="onPointerLeave",m="onPointerEnter",v="pointer"),c=g==null?d:Or(g),_=y==null?d:Or(y),d=new p(x,v+"leave",g,t,f),d.target=c,d.relatedTarget=_,x=null,qi(f)===u&&(p=new p(m,v+"enter",y,t,f),p.target=_,p.relatedTarget=c,x=p),c=x,g&&y)t:{for(p=g,m=y,v=0,_=p;_;_=gr(_))v++;for(_=0,x=m;x;x=gr(x))_++;for(;0<v-_;)p=gr(p),v--;for(;0<_-v;)m=gr(m),_--;for(;v--;){if(p===m||m!==null&&p===m.alternate)break t;p=gr(p),m=gr(m)}p=null}else p=null;g!==null&&Jd(h,d,g,p,!1),y!==null&&c!==null&&Jd(h,c,y,p,!0)}}e:{if(d=u?Or(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var b=G_;else if(Vd(d))if(yg)b=j_;else{b=H_;var T=V_}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=W_);if(b&&(b=b(n,u))){xg(h,b,t,f);break e}T&&T(n,d,u),n==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Ku(d,"number",d.value)}switch(T=u?Or(u):window,n){case"focusin":(Vd(T)||T.contentEditable==="true")&&(Nr=T,cc=u,io=null);break;case"focusout":io=cc=Nr=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,qd(h,t,f);break;case"selectionchange":if(q_)break;case"keydown":case"keyup":qd(h,t,f)}var A;if(Pf)e:{switch(n){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else kr?vg(n,t)&&(S="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(gg&&t.locale!=="ko"&&(kr||S!=="onCompositionStart"?S==="onCompositionEnd"&&kr&&(A=mg()):(ui=f,Cf="value"in ui?ui.value:ui.textContent,kr=!0)),T=Vs(u,S),0<T.length&&(S=new zd(S,n,null,t,f),h.push({event:S,listeners:T}),A?S.data=A:(A=_g(t),A!==null&&(S.data=A)))),(A=O_?F_(n,t):z_(n,t))&&(u=Vs(u,"onBeforeInput"),0<u.length&&(f=new zd("onBeforeInput","beforeinput",null,t,f),h.push({event:f,listeners:u}),f.data=A))}bg(h,e)})}function yo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Vs(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=po(n,t),a!=null&&i.unshift(yo(n,a,r)),a=po(n,e),a!=null&&i.push(yo(n,a,r))),n=n.return}return i}function gr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Jd(n,e,t,i,r){for(var a=e._reactName,o=[];t!==null&&t!==i;){var s=t,l=s.alternate,u=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&u!==null&&(s=u,r?(l=po(t,a),l!=null&&o.unshift(yo(t,l,s))):r||(l=po(t,a),l!=null&&o.push(yo(t,l,s)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}function Hs(){}var Jl=null,eu=null;function Ag(n,e){switch(n){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function dc(n,e){return n==="textarea"||n==="option"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var eh=typeof setTimeout=="function"?setTimeout:void 0,Y_=typeof clearTimeout=="function"?clearTimeout:void 0;function Rf(n){n.nodeType===1?n.textContent="":n.nodeType===9&&(n=n.body,n!=null&&(n.textContent=""))}function $r(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break}return n}function th(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var tu=0;function Z_(n){return{$$typeof:gf,toString:n,valueOf:n}}var yl=Math.random().toString(36).slice(2),ci="__reactFiber$"+yl,Ws="__reactProps$"+yl,pa="__reactContainer$"+yl,nh="__reactEvents$"+yl;function qi(n){var e=n[ci];if(e)return e;for(var t=n.parentNode;t;){if(e=t[pa]||t[ci]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=th(n);n!==null;){if(t=n[ci])return t;n=th(n)}return e}n=t,t=n.parentNode}return null}function Do(n){return n=n[ci]||n[pa],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Or(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function Sl(n){return n[Ws]||null}function Lg(n){var e=n[nh];return e===void 0&&(e=n[nh]=new Set),e}var hc=[],Fr=-1;function ki(n){return{current:n}}function Ye(n){0>Fr||(n.current=hc[Fr],hc[Fr]=null,Fr--)}function it(n,e){Fr++,hc[Fr]=n.current,n.current=e}var Ci={},Dt=ki(Ci),Ht=ki(!1),ir=Ci;function ra(n,e){var t=n.type.contextTypes;if(!t)return Ci;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in t)r[a]=e[a];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Wt(n){return n=n.childContextTypes,n!=null}function js(){Ye(Ht),Ye(Dt)}function ih(n,e,t){if(Dt.current!==Ci)throw Error(te(168));it(Dt,e),it(Ht,t)}function Pg(n,e,t){var i=n.stateNode;if(n=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in n))throw Error(te(108,Hr(e)||"Unknown",r));return Je({},t,i)}function Cs(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ci,ir=Dt.current,it(Dt,n),it(Ht,Ht.current),!0}function rh(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=Pg(n,e,ir),i.__reactInternalMemoizedMergedChildContext=n,Ye(Ht),Ye(Dt),it(Dt,n)):Ye(Ht),it(Ht,t)}var Df=null,er=null,K_=yt.unstable_runWithPriority,If=yt.unstable_scheduleCallback,pc=yt.unstable_cancelCallback,Q_=yt.unstable_shouldYield,ah=yt.unstable_requestPaint,mc=yt.unstable_now,J_=yt.unstable_getCurrentPriorityLevel,wl=yt.unstable_ImmediatePriority,Rg=yt.unstable_UserBlockingPriority,Dg=yt.unstable_NormalPriority,Ig=yt.unstable_LowPriority,kg=yt.unstable_IdlePriority,nu={},ex=ah!==void 0?ah:function(){},Vn=null,As=null,iu=!1,oh=mc(),Pt=1e4>oh?mc:function(){return mc()-oh};function aa(){switch(J_()){case wl:return 99;case Rg:return 98;case Dg:return 97;case Ig:return 96;case kg:return 95;default:throw Error(te(332))}}function Ng(n){switch(n){case 99:return wl;case 98:return Rg;case 97:return Dg;case 96:return Ig;case 95:return kg;default:throw Error(te(332))}}function rr(n,e){return n=Ng(n),K_(n,e)}function So(n,e,t){return n=Ng(n),If(n,e,t)}function Nn(){if(As!==null){var n=As;As=null,pc(n)}Og()}function Og(){if(!iu&&Vn!==null){iu=!0;var n=0;try{var e=Vn;rr(99,function(){for(;n<e.length;n++){var t=e[n];do t=t(!0);while(t!==null)}}),Vn=null}catch(t){throw Vn!==null&&(Vn=Vn.slice(n+1)),If(wl,Nn),t}finally{iu=!1}}}var tx=dr.ReactCurrentBatchConfig;function vn(n,e){if(n&&n.defaultProps){e=Je({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Xs=ki(null),$s=null,zr=null,qs=null;function kf(){qs=zr=$s=null}function Nf(n){var e=Xs.current;Ye(Xs),n.type._context._currentValue=e}function Fg(n,e){for(;n!==null;){var t=n.alternate;if((n.childLanes&e)===e){if(t===null||(t.childLanes&e)===e)break;t.childLanes|=e}else n.childLanes|=e,t!==null&&(t.childLanes|=e);n=n.return}}function qr(n,e){$s=n,qs=zr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Sn=!0),n.firstContext=null)}function cn(n,e){if(qs!==n&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(qs=n,e=1073741823),e={context:n,observedBits:e,next:null},zr===null){if($s===null)throw Error(te(308));zr=e,$s.dependencies={lanes:0,firstContext:e,responders:null}}else zr=zr.next=e;return n._currentValue}var si=!1;function Of(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function zg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function yi(n,e){if(n=n.updateQueue,n!==null){n=n.shared;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}}function sh(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?r=a=o:a=a.next=o,t=t.next}while(t!==null);a===null?r=a=e:a=a.next=e}else r=a=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function wo(n,e,t,i){var r=n.updateQueue;si=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var f=n.alternate;if(f!==null){f=f.updateQueue;var h=f.lastBaseUpdate;h!==o&&(h===null?f.firstBaseUpdate=u:h.next=u,f.lastBaseUpdate=l)}}if(a!==null){h=r.baseState,o=0,f=u=l=null;do{s=a.lane;var d=a.eventTime;if((i&s)===s){f!==null&&(f=f.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,y=a;switch(s=e,d=t,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(d,h,s);break e}h=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=y.payload,s=typeof g=="function"?g.call(d,h,s):g,s==null)break e;h=Je({},h,s);break e;case 2:si=!0}}a.callback!==null&&(n.flags|=32,s=r.effects,s===null?r.effects=[a]:s.push(a))}else d={eventTime:d,lane:s,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=d,l=h):f=f.next=d,o|=s;if(a=a.next,a===null){if(s=r.shared.pending,s===null)break;a=s.next,s.next=null,r.lastBaseUpdate=s,r.shared.pending=null}}while(1);f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,ko|=o,n.lanes=o,n.memoizedState=h}}function lh(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Ug=new hl.Component().refs;function Ys(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Je({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ml={isMounted:function(n){return(n=n._reactInternals)?hr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Kt(),r=Si(n),a=xi(i,r);a.payload=e,t!=null&&(a.callback=t),yi(n,a),wi(n,r,i)},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Kt(),r=Si(n),a=xi(i,r);a.tag=1,a.payload=e,t!=null&&(a.callback=t),yi(n,a),wi(n,r,i)},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Kt(),i=Si(n),r=xi(t,i);r.tag=2,e!=null&&(r.callback=e),yi(n,r),wi(n,i,t)}};function uh(n,e,t,i,r,a,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,a,o):e.prototype&&e.prototype.isPureReactComponent?!xo(t,i)||!xo(r,a):!0}function Bg(n,e,t){var i=!1,r=Ci,a=e.contextType;return typeof a=="object"&&a!==null?a=cn(a):(r=Wt(e)?ir:Dt.current,i=e.contextTypes,a=(i=i!=null)?ra(n,r):Ci),e=new e(t,a),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ml,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=a),e}function ch(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Ml.enqueueReplaceState(e,e.state,null)}function gc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Ug,Of(n);var a=e.contextType;typeof a=="object"&&a!==null?r.context=cn(a):(a=Wt(e)?ir:Dt.current,r.context=ra(n,a)),wo(n,t,r,i),r.state=n.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Ys(n,e,a,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ml.enqueueReplaceState(r,r.state,null),wo(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4)}var qo=Array.isArray;function Aa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(a){var o=i.refs;o===Ug&&(o=i.refs={}),a===null?delete o[r]:o[r]=a},e._stringRef=r,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function Yo(n,e){if(n.type!=="textarea")throw Error(te(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function Gg(n){function e(c,m){if(n){var v=c.lastEffect;v!==null?(v.nextEffect=m,c.lastEffect=m):c.firstEffect=c.lastEffect=m,m.nextEffect=null,m.flags=8}}function t(c,m){if(!n)return null;for(;m!==null;)e(c,m),m=m.sibling;return null}function i(c,m){for(c=new Map;m!==null;)m.key!==null?c.set(m.key,m):c.set(m.index,m),m=m.sibling;return c}function r(c,m){return c=Li(c,m),c.index=0,c.sibling=null,c}function a(c,m,v){return c.index=v,n?(v=c.alternate,v!==null?(v=v.index,v<m?(c.flags=2,m):v):(c.flags=2,m)):m}function o(c){return n&&c.alternate===null&&(c.flags=2),c}function s(c,m,v,_){return m===null||m.tag!==6?(m=lu(v,c.mode,_),m.return=c,m):(m=r(m,v),m.return=c,m)}function l(c,m,v,_){return m!==null&&m.elementType===v.type?(_=r(m,v.props),_.ref=Aa(c,m,v),_.return=c,_):(_=Ds(v.type,v.key,v.props,null,c.mode,_),_.ref=Aa(c,m,v),_.return=c,_)}function u(c,m,v,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=uu(v,c.mode,_),m.return=c,m):(m=r(m,v.children||[]),m.return=c,m)}function f(c,m,v,_,x){return m===null||m.tag!==7?(m=Qr(v,c.mode,_,x),m.return=c,m):(m=r(m,v),m.return=c,m)}function h(c,m,v){if(typeof m=="string"||typeof m=="number")return m=lu(""+m,c.mode,v),m.return=c,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ha:return v=Ds(m.type,m.key,m.props,null,c.mode,v),v.ref=Aa(c,null,m),v.return=c,v;case Xi:return m=uu(m,c.mode,v),m.return=c,m}if(qo(m)||wa(m))return m=Qr(m,c.mode,v,null),m.return=c,m;Yo(c,m)}return null}function d(c,m,v,_){var x=m!==null?m.key:null;if(typeof v=="string"||typeof v=="number")return x!==null?null:s(c,m,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ha:return v.key===x?v.type===li?f(c,m,v.props.children,_,x):l(c,m,v,_):null;case Xi:return v.key===x?u(c,m,v,_):null}if(qo(v)||wa(v))return x!==null?null:f(c,m,v,_,null);Yo(c,v)}return null}function g(c,m,v,_,x){if(typeof _=="string"||typeof _=="number")return c=c.get(v)||null,s(m,c,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ha:return c=c.get(_.key===null?v:_.key)||null,_.type===li?f(m,c,_.props.children,x,_.key):l(m,c,_,x);case Xi:return c=c.get(_.key===null?v:_.key)||null,u(m,c,_,x)}if(qo(_)||wa(_))return c=c.get(v)||null,f(m,c,_,x,null);Yo(m,_)}return null}function y(c,m,v,_){for(var x=null,b=null,T=m,A=m=0,S=null;T!==null&&A<v.length;A++){T.index>A?(S=T,T=null):S=T.sibling;var M=d(c,T,v[A],_);if(M===null){T===null&&(T=S);break}n&&T&&M.alternate===null&&e(c,T),m=a(M,m,A),b===null?x=M:b.sibling=M,b=M,T=S}if(A===v.length)return t(c,T),x;if(T===null){for(;A<v.length;A++)T=h(c,v[A],_),T!==null&&(m=a(T,m,A),b===null?x=T:b.sibling=T,b=T);return x}for(T=i(c,T);A<v.length;A++)S=g(T,c,A,v[A],_),S!==null&&(n&&S.alternate!==null&&T.delete(S.key===null?A:S.key),m=a(S,m,A),b===null?x=S:b.sibling=S,b=S);return n&&T.forEach(function(R){return e(c,R)}),x}function p(c,m,v,_){var x=wa(v);if(typeof x!="function")throw Error(te(150));if(v=x.call(v),v==null)throw Error(te(151));for(var b=x=null,T=m,A=m=0,S=null,M=v.next();T!==null&&!M.done;A++,M=v.next()){T.index>A?(S=T,T=null):S=T.sibling;var R=d(c,T,M.value,_);if(R===null){T===null&&(T=S);break}n&&T&&R.alternate===null&&e(c,T),m=a(R,m,A),b===null?x=R:b.sibling=R,b=R,T=S}if(M.done)return t(c,T),x;if(T===null){for(;!M.done;A++,M=v.next())M=h(c,M.value,_),M!==null&&(m=a(M,m,A),b===null?x=M:b.sibling=M,b=M);return x}for(T=i(c,T);!M.done;A++,M=v.next())M=g(T,c,A,M.value,_),M!==null&&(n&&M.alternate!==null&&T.delete(M.key===null?A:M.key),m=a(M,m,A),b===null?x=M:b.sibling=M,b=M);return n&&T.forEach(function(Q){return e(c,Q)}),x}return function(c,m,v,_){var x=typeof v=="object"&&v!==null&&v.type===li&&v.key===null;x&&(v=v.props.children);var b=typeof v=="object"&&v!==null;if(b)switch(v.$$typeof){case Ha:e:{for(b=v.key,x=m;x!==null;){if(x.key===b){switch(x.tag){case 7:if(v.type===li){t(c,x.sibling),m=r(x,v.props.children),m.return=c,c=m;break e}break;default:if(x.elementType===v.type){t(c,x.sibling),m=r(x,v.props),m.ref=Aa(c,x,v),m.return=c,c=m;break e}}t(c,x);break}else e(c,x);x=x.sibling}v.type===li?(m=Qr(v.props.children,c.mode,_,v.key),m.return=c,c=m):(_=Ds(v.type,v.key,v.props,null,c.mode,_),_.ref=Aa(c,m,v),_.return=c,c=_)}return o(c);case Xi:e:{for(x=v.key;m!==null;){if(m.key===x)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){t(c,m.sibling),m=r(m,v.children||[]),m.return=c,c=m;break e}else{t(c,m);break}else e(c,m);m=m.sibling}m=uu(v,c.mode,_),m.return=c,c=m}return o(c)}if(typeof v=="string"||typeof v=="number")return v=""+v,m!==null&&m.tag===6?(t(c,m.sibling),m=r(m,v),m.return=c,c=m):(t(c,m),m=lu(v,c.mode,_),m.return=c,c=m),o(c);if(qo(v))return y(c,m,v,_);if(wa(v))return p(c,m,v,_);if(b&&Yo(c,v),typeof v=="undefined"&&!x)switch(c.tag){case 1:case 22:case 0:case 11:case 15:throw Error(te(152,Hr(c.type)||"Component"))}return t(c,m)}}var Zs=Gg(!0),Vg=Gg(!1),Io={},Dn=ki(Io),Mo=ki(Io),bo=ki(Io);function Yi(n){if(n===Io)throw Error(te(174));return n}function vc(n,e){switch(it(bo,e),it(Mo,n),it(Dn,Io),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=tc(e,n)}Ye(Dn),it(Dn,e)}function oa(){Ye(Dn),Ye(Mo),Ye(bo)}function fh(n){Yi(bo.current);var e=Yi(Dn.current),t=tc(e,n.type);e!==t&&(it(Mo,n),it(Dn,t))}function Ff(n){Mo.current===n&&(Ye(Dn),Ye(Mo))}var nt=ki(0);function Ks(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jn=null,fi=null,In=!1;function Hg(n,e){var t=ln(5,null,null,0);t.elementType="DELETED",t.type="DELETED",t.stateNode=e,t.return=n,t.flags=8,n.lastEffect!==null?(n.lastEffect.nextEffect=t,n.lastEffect=t):n.firstEffect=n.lastEffect=t}function dh(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function _c(n){if(In){var e=fi;if(e){var t=e;if(!dh(n,e)){if(e=$r(t.nextSibling),!e||!dh(n,e)){n.flags=n.flags&-1025|2,In=!1,jn=n;return}Hg(jn,t)}jn=n,fi=$r(e.firstChild)}else n.flags=n.flags&-1025|2,In=!1,jn=n}}function hh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jn=n}function Zo(n){if(n!==jn)return!1;if(!In)return hh(n),In=!0,!1;var e=n.type;if(n.tag!==5||e!=="head"&&e!=="body"&&!dc(e,n.memoizedProps))for(e=fi;e;)Hg(n,e),e=$r(e.nextSibling);if(hh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){fi=$r(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}fi=null}}else fi=jn?$r(n.stateNode.nextSibling):null;return!0}function ru(){fi=jn=null,In=!1}var Yr=[];function zf(){for(var n=0;n<Yr.length;n++)Yr[n]._workInProgressVersionPrimary=null;Yr.length=0}var ro=dr.ReactCurrentDispatcher,un=dr.ReactCurrentBatchConfig,Eo=0,ot=null,Lt=null,St=null,Qs=!1,ao=!1;function Gt(){throw Error(te(321))}function Uf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!sn(n[t],e[t]))return!1;return!0}function Bf(n,e,t,i,r,a){if(Eo=a,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ro.current=n===null||n.memoizedState===null?ix:rx,n=t(i,r),ao){a=0;do{if(ao=!1,!(25>a))throw Error(te(301));a+=1,St=Lt=null,e.updateQueue=null,ro.current=ax,n=t(i,r)}while(ao)}if(ro.current=nl,e=Lt!==null&&Lt.next!==null,Eo=0,St=Lt=ot=null,Qs=!1,e)throw Error(te(300));return n}function Zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?ot.memoizedState=St=n:St=St.next=n,St}function pr(){if(Lt===null){var n=ot.alternate;n=n!==null?n.memoizedState:null}else n=Lt.next;var e=St===null?ot.memoizedState:St.next;if(e!==null)St=e,Lt=n;else{if(n===null)throw Error(te(310));Lt=n,n={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},St===null?ot.memoizedState=St=n:St=St.next=n}return St}function Ln(n,e){return typeof e=="function"?e(n):e}function La(n){var e=pr(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=Lt,r=i.baseQueue,a=t.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,t.pending=null}if(r!==null){r=r.next,i=i.baseState;var s=o=a=null,l=r;do{var u=l.lane;if((Eo&u)===u)s!==null&&(s=s.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),i=l.eagerReducer===n?l.eagerState:n(i,l.action);else{var f={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};s===null?(o=s=f,a=i):s=s.next=f,ot.lanes|=u,ko|=u}l=l.next}while(l!==null&&l!==r);s===null?a=i:s.next=o,sn(i,e.memoizedState)||(Sn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=s,t.lastRenderedState=i}return[e.memoizedState,t.dispatch]}function Pa(n){var e=pr(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,a=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do a=n(a,o.action),o=o.next;while(o!==r);sn(a,e.memoizedState)||(Sn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),t.lastRenderedState=a}return[a,i]}function ph(n,e,t){var i=e._getVersion;i=i(e._source);var r=e._workInProgressVersionPrimary;if(r!==null?n=r===i:(n=n.mutableReadLanes,(n=(Eo&n)===n)&&(e._workInProgressVersionPrimary=i,Yr.push(e))),n)return t(e._source);throw Yr.push(e),Error(te(350))}function Wg(n,e,t,i){var r=Ut;if(r===null)throw Error(te(349));var a=e._getVersion,o=a(e._source),s=ro.current,l=s.useState(function(){return ph(r,e,t)}),u=l[1],f=l[0];l=St;var h=n.memoizedState,d=h.refs,g=d.getSnapshot,y=h.source;h=h.subscribe;var p=ot;return n.memoizedState={refs:d,source:e,subscribe:i},s.useEffect(function(){d.getSnapshot=t,d.setSnapshot=u;var c=a(e._source);if(!sn(o,c)){c=t(e._source),sn(f,c)||(u(c),c=Si(p),r.mutableReadLanes|=c&r.pendingLanes),c=r.mutableReadLanes,r.entangledLanes|=c;for(var m=r.entanglements,v=c;0<v;){var _=31-Ti(v),x=1<<_;m[_]|=c,v&=~x}}},[t,e,i]),s.useEffect(function(){return i(e._source,function(){var c=d.getSnapshot,m=d.setSnapshot;try{m(c(e._source));var v=Si(p);r.mutableReadLanes|=v&r.pendingLanes}catch(_){m(function(){throw _})}})},[e,i]),sn(g,t)&&sn(y,e)&&sn(h,i)||(n={pending:null,dispatch:null,lastRenderedReducer:Ln,lastRenderedState:f},n.dispatch=u=Hf.bind(null,ot,n),l.queue=n,l.baseQueue=null,f=ph(r,e,t),l.memoizedState=l.baseState=f),f}function jg(n,e,t){var i=pr();return Wg(i,n,e,t)}function Ra(n){var e=Zi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n=e.queue={pending:null,dispatch:null,lastRenderedReducer:Ln,lastRenderedState:n},n=n.dispatch=Hf.bind(null,ot,n),[e.memoizedState,n]}function Js(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=ot.updateQueue,e===null?(e={lastEffect:null},ot.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function mh(n){var e=Zi();return n={current:n},e.memoizedState=n}function el(){return pr().memoizedState}function xc(n,e,t,i){var r=Zi();ot.flags|=n,r.memoizedState=Js(1|e,t,void 0,i===void 0?null:i)}function Gf(n,e,t,i){var r=pr();i=i===void 0?null:i;var a=void 0;if(Lt!==null){var o=Lt.memoizedState;if(a=o.destroy,i!==null&&Uf(i,o.deps)){Js(e,t,a,i);return}}ot.flags|=n,r.memoizedState=Js(1|e,t,a,i)}function gh(n,e){return xc(516,4,n,e)}function tl(n,e){return Gf(516,4,n,e)}function Xg(n,e){return Gf(4,2,n,e)}function $g(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function qg(n,e,t){return t=t!=null?t.concat([n]):null,Gf(4,2,$g.bind(null,e,n),t)}function Vf(){}function Yg(n,e){var t=pr();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Uf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Zg(n,e){var t=pr();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Uf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function nx(n,e){var t=aa();rr(98>t?98:t,function(){n(!0)}),rr(97<t?97:t,function(){var i=un.transition;un.transition=1;try{n(!1),e()}finally{un.transition=i}})}function Hf(n,e,t){var i=Kt(),r=Si(n),a={lane:r,action:t,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?a.next=a:(a.next=o.next,o.next=a),e.pending=a,o=n.alternate,n===ot||o!==null&&o===ot)ao=Qs=!0;else{if(n.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,t);if(a.eagerReducer=o,a.eagerState=l,sn(l,s))return}catch{}finally{}wi(n,r,i)}}var nl={readContext:cn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useOpaqueIdentifier:Gt,unstable_isNewReconciler:!1},ix={readContext:cn,useCallback:function(n,e){return Zi().memoizedState=[n,e===void 0?null:e],n},useContext:cn,useEffect:gh,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,xc(4,2,$g.bind(null,e,n),t)},useLayoutEffect:function(n,e){return xc(4,2,n,e)},useMemo:function(n,e){var t=Zi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Zi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n=i.queue={pending:null,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},n=n.dispatch=Hf.bind(null,ot,n),[i.memoizedState,n]},useRef:mh,useState:Ra,useDebugValue:Vf,useDeferredValue:function(n){var e=Ra(n),t=e[0],i=e[1];return gh(function(){var r=un.transition;un.transition=1;try{i(n)}finally{un.transition=r}},[n]),t},useTransition:function(){var n=Ra(!1),e=n[0];return n=nx.bind(null,n[1]),mh(n),[n,e]},useMutableSource:function(n,e,t){var i=Zi();return i.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:n,subscribe:t},Wg(i,n,e,t)},useOpaqueIdentifier:function(){if(In){var n=!1,e=Z_(function(){throw n||(n=!0,t("r:"+(tu++).toString(36))),Error(te(355))}),t=Ra(e)[1];return(ot.mode&2)===0&&(ot.flags|=516,Js(5,function(){t("r:"+(tu++).toString(36))},void 0,null)),e}return e="r:"+(tu++).toString(36),Ra(e),e},unstable_isNewReconciler:!1},rx={readContext:cn,useCallback:Yg,useContext:cn,useEffect:tl,useImperativeHandle:qg,useLayoutEffect:Xg,useMemo:Zg,useReducer:La,useRef:el,useState:function(){return La(Ln)},useDebugValue:Vf,useDeferredValue:function(n){var e=La(Ln),t=e[0],i=e[1];return tl(function(){var r=un.transition;un.transition=1;try{i(n)}finally{un.transition=r}},[n]),t},useTransition:function(){var n=La(Ln)[0];return[el().current,n]},useMutableSource:jg,useOpaqueIdentifier:function(){return La(Ln)[0]},unstable_isNewReconciler:!1},ax={readContext:cn,useCallback:Yg,useContext:cn,useEffect:tl,useImperativeHandle:qg,useLayoutEffect:Xg,useMemo:Zg,useReducer:Pa,useRef:el,useState:function(){return Pa(Ln)},useDebugValue:Vf,useDeferredValue:function(n){var e=Pa(Ln),t=e[0],i=e[1];return tl(function(){var r=un.transition;un.transition=1;try{i(n)}finally{un.transition=r}},[n]),t},useTransition:function(){var n=Pa(Ln)[0];return[el().current,n]},useMutableSource:jg,useOpaqueIdentifier:function(){return Pa(Ln)[0]},unstable_isNewReconciler:!1},ox=dr.ReactCurrentOwner,Sn=!1;function Vt(n,e,t,i){e.child=n===null?Vg(e,null,t,i):Zs(e,n.child,t,i)}function vh(n,e,t,i,r){t=t.render;var a=e.ref;return qr(e,r),i=Bf(n,e,t,i,a,r),n!==null&&!Sn?(e.updateQueue=n.updateQueue,e.flags&=-517,n.lanes&=~r,Xn(n,e,r)):(e.flags|=1,Vt(n,e,i,r),e.child)}function _h(n,e,t,i,r,a){if(n===null){var o=t.type;return typeof o=="function"&&!Yf(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=o,Kg(n,e,o,i,r,a)):(n=Ds(t.type,null,i,e,e.mode,a),n.ref=e.ref,n.return=e,e.child=n)}return o=n.child,(r&a)===0&&(r=o.memoizedProps,t=t.compare,t=t!==null?t:xo,t(r,i)&&n.ref===e.ref)?Xn(n,e,a):(e.flags|=1,n=Li(o,i),n.ref=e.ref,n.return=e,e.child=n)}function Kg(n,e,t,i,r,a){if(n!==null&&xo(n.memoizedProps,i)&&n.ref===e.ref)if(Sn=!1,(a&r)!==0)(n.flags&16384)!==0&&(Sn=!0);else return e.lanes=n.lanes,Xn(n,e,a);return yc(n,e,t,i,a)}function au(n,e,t){var i=e.pendingProps,r=i.children,a=n!==null?n.memoizedState:null;if(i.mode==="hidden"||i.mode==="unstable-defer-without-hiding")if((e.mode&4)===0)e.memoizedState={baseLanes:0},Qo(e,t);else if((t&1073741824)!==0)e.memoizedState={baseLanes:0},Qo(e,a!==null?a.baseLanes:t);else return n=a!==null?a.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n},Qo(e,n),null;else a!==null?(i=a.baseLanes|t,e.memoizedState=null):i=t,Qo(e,i);return Vt(n,e,r,t),e.child}function Qg(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=128)}function yc(n,e,t,i,r){var a=Wt(t)?ir:Dt.current;return a=ra(e,a),qr(e,r),t=Bf(n,e,t,i,a,r),n!==null&&!Sn?(e.updateQueue=n.updateQueue,e.flags&=-517,n.lanes&=~r,Xn(n,e,r)):(e.flags|=1,Vt(n,e,t,r),e.child)}function xh(n,e,t,i,r){if(Wt(t)){var a=!0;Cs(e)}else a=!1;if(qr(e,r),e.stateNode===null)n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2),Bg(e,t,i),gc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=cn(u):(u=Wt(t)?ir:Dt.current,u=ra(e,u));var f=t.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||l!==u)&&ch(e,o,i,u),si=!1;var d=e.memoizedState;o.state=d,wo(e,i,o,r),l=e.memoizedState,s!==i||d!==l||Ht.current||si?(typeof f=="function"&&(Ys(e,t,f,i),l=e.memoizedState),(s=si||uh(e,t,s,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=s):(typeof o.componentDidMount=="function"&&(e.flags|=4),i=!1)}else{o=e.stateNode,zg(n,e),s=e.memoizedProps,u=e.type===e.elementType?s:vn(e.type,s),o.props=u,h=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=cn(l):(l=Wt(t)?ir:Dt.current,l=ra(e,l));var g=t.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||d!==l)&&ch(e,o,i,l),si=!1,d=e.memoizedState,o.state=d,wo(e,i,o,r);var y=e.memoizedState;s!==h||d!==y||Ht.current||si?(typeof g=="function"&&(Ys(e,t,g,i),y=e.memoizedState),(u=si||uh(e,t,u,i,d,y,l))?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||s===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&d===n.memoizedState||(e.flags|=256),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||s===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&d===n.memoizedState||(e.flags|=256),i=!1)}return Sc(n,e,t,i,a,r)}function Sc(n,e,t,i,r,a){Qg(n,e);var o=(e.flags&64)!==0;if(!i&&!o)return r&&rh(e,t,!1),Xn(n,e,a);i=e.stateNode,ox.current=e;var s=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Zs(e,n.child,null,a),e.child=Zs(e,null,s,a)):Vt(n,e,s,a),e.memoizedState=i.state,r&&rh(e,t,!0),e.child}function yh(n){var e=n.stateNode;e.pendingContext?ih(n,e.pendingContext,e.pendingContext!==e.context):e.context&&ih(n,e.context,!1),vc(n,e.containerInfo)}var Ko={dehydrated:null,retryLane:0};function Sh(n,e,t){var i=e.pendingProps,r=nt.current,a=!1,o;return(o=(e.flags&64)!==0)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(a=!0,e.flags&=-65):n!==null&&n.memoizedState===null||i.fallback===void 0||i.unstable_avoidThisFallback===!0||(r|=1),it(nt,r&1),n===null?(i.fallback!==void 0&&_c(e),n=i.children,r=i.fallback,a?(n=wh(e,n,r,t),e.child.memoizedState={baseLanes:t},e.memoizedState=Ko,n):typeof i.unstable_expectedLoadTime=="number"?(n=wh(e,n,r,t),e.child.memoizedState={baseLanes:t},e.memoizedState=Ko,e.lanes=33554432,n):(t=Zf({mode:"visible",children:n},e.mode,t,null),t.return=e,e.child=t)):n.memoizedState!==null?a?(i=bh(n,e,i.children,i.fallback,t),a=e.child,r=n.child.memoizedState,a.memoizedState=r===null?{baseLanes:t}:{baseLanes:r.baseLanes|t},a.childLanes=n.childLanes&~t,e.memoizedState=Ko,i):(t=Mh(n,e,i.children,t),e.memoizedState=null,t):a?(i=bh(n,e,i.children,i.fallback,t),a=e.child,r=n.child.memoizedState,a.memoizedState=r===null?{baseLanes:t}:{baseLanes:r.baseLanes|t},a.childLanes=n.childLanes&~t,e.memoizedState=Ko,i):(t=Mh(n,e,i.children,t),e.memoizedState=null,t)}function wh(n,e,t,i){var r=n.mode,a=n.child;return e={mode:"hidden",children:e},(r&2)===0&&a!==null?(a.childLanes=0,a.pendingProps=e):a=Zf(e,r,0,null),t=Qr(t,r,i,null),a.return=n,t.return=n,a.sibling=t,n.child=a,t}function Mh(n,e,t,i){var r=n.child;return n=r.sibling,t=Li(r,{mode:"visible",children:t}),(e.mode&2)===0&&(t.lanes=i),t.return=e,t.sibling=null,n!==null&&(n.nextEffect=null,n.flags=8,e.firstEffect=e.lastEffect=n),e.child=t}function bh(n,e,t,i,r){var a=e.mode,o=n.child;n=o.sibling;var s={mode:"hidden",children:t};return(a&2)===0&&e.child!==o?(t=e.child,t.childLanes=0,t.pendingProps=s,o=t.lastEffect,o!==null?(e.firstEffect=t.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):t=Li(o,s),n!==null?i=Li(n,i):(i=Qr(i,a,r,null),i.flags|=2),i.return=e,t.return=e,t.sibling=i,e.child=t,i}function Eh(n,e){n.lanes|=e;var t=n.alternate;t!==null&&(t.lanes|=e),Fg(n.return,e)}function ou(n,e,t,i,r,a){var o=n.memoizedState;o===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r,lastEffect:a}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=r,o.lastEffect=a)}function Th(n,e,t){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(Vt(n,e,i.children,t),i=nt.current,(i&2)!==0)i=i&1|2,e.flags|=64;else{if(n!==null&&(n.flags&64)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Eh(n,t);else if(n.tag===19)Eh(n,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(it(nt,i),(e.mode&2)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Ks(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),ou(e,!1,r,t,a,e.lastEffect);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Ks(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}ou(e,!0,t,null,a,e.lastEffect);break;case"together":ou(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Xn(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ko|=e.lanes,(t&e.childLanes)!==0){if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=Li(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Li(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}return null}var Jg,wc,e0,t0;Jg=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};wc=function(){};e0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Yi(Dn.current);var a=null;switch(t){case"input":r=Yu(n,r),i=Yu(n,i),a=[];break;case"option":r=Qu(n,r),i=Qu(n,i),a=[];break;case"select":r=Je({},r,{value:void 0}),i=Je({},i,{value:void 0}),a=[];break;case"textarea":r=Ju(n,r),i=Ju(n,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Hs)}nc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var s=r[u];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fo.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in i){var l=i[u];if(s=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(a||(a=[]),a.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$e("scroll",n),a||s===l||(a=[])):typeof l=="object"&&l!==null&&l.$$typeof===gf?l.toString():(a=a||[]).push(u,l))}t&&(a=a||[]).push("style",t);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};t0=function(n,e,t,i){t!==i&&(e.flags|=4)};function Da(n,e){if(!In)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function sx(n,e,t){var i=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Wt(e.type)&&js(),null;case 3:return oa(),Ye(Ht),Ye(Dt),zf(),i=e.stateNode,i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Zo(e)?e.flags|=4:i.hydrate||(e.flags|=256)),wc(e),null;case 5:Ff(e);var r=Yi(bo.current);if(t=e.type,n!==null&&e.stateNode!=null)e0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=128);else{if(!i){if(e.stateNode===null)throw Error(te(166));return null}if(n=Yi(Dn.current),Zo(e)){i=e.stateNode,t=e.type;var a=e.memoizedProps;switch(i[ci]=e,i[Ws]=a,t){case"dialog":$e("cancel",i),$e("close",i);break;case"iframe":case"object":case"embed":$e("load",i);break;case"video":case"audio":for(n=0;n<ja.length;n++)$e(ja[n],i);break;case"source":$e("error",i);break;case"img":case"image":case"link":$e("error",i),$e("load",i);break;case"details":$e("toggle",i);break;case"input":Td(i,a),$e("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},$e("invalid",i);break;case"textarea":Ad(i,a),$e("invalid",i)}nc(t,a),n=null;for(var o in a)a.hasOwnProperty(o)&&(r=a[o],o==="children"?typeof r=="string"?i.textContent!==r&&(n=["children",r]):typeof r=="number"&&i.textContent!==""+r&&(n=["children",""+r]):fo.hasOwnProperty(o)&&r!=null&&o==="onScroll"&&$e("scroll",i));switch(t){case"input":Wo(i),Cd(i,a,!0);break;case"textarea":Wo(i),Ld(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Hs)}i=n,e.updateQueue=i,i!==null&&(e.flags|=4)}else{switch(o=r.nodeType===9?r:r.ownerDocument,n===ec.html&&(n=qm(t)),n===ec.html?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ci]=e,n[Ws]=i,Jg(n,e,!1,!1),e.stateNode=n,o=ic(t,i),t){case"dialog":$e("cancel",n),$e("close",n),r=i;break;case"iframe":case"object":case"embed":$e("load",n),r=i;break;case"video":case"audio":for(r=0;r<ja.length;r++)$e(ja[r],n);r=i;break;case"source":$e("error",n),r=i;break;case"img":case"image":case"link":$e("error",n),$e("load",n),r=i;break;case"details":$e("toggle",n),r=i;break;case"input":Td(n,i),r=Yu(n,i),$e("invalid",n);break;case"option":r=Qu(n,i);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Je({},i,{value:void 0}),$e("invalid",n);break;case"textarea":Ad(n,i),r=Ju(n,i),$e("invalid",n);break;default:r=i}nc(t,r);var s=r;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Km(n,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ym(n,l)):a==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ho(n,l):typeof l=="number"&&ho(n,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(fo.hasOwnProperty(a)?l!=null&&a==="onScroll"&&$e("scroll",n):l!=null&&cf(n,a,l,o))}switch(t){case"input":Wo(n),Cd(n,i,!1);break;case"textarea":Wo(n),Ld(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ei(i.value));break;case"select":n.multiple=!!i.multiple,a=i.value,a!=null?Wr(n,!!i.multiple,a,!1):i.defaultValue!=null&&Wr(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Hs)}Ag(t,i)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(n&&e.stateNode!=null)t0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));t=Yi(bo.current),Yi(Dn.current),Zo(e)?(i=e.stateNode,t=e.memoizedProps,i[ci]=e,i.nodeValue!==t&&(e.flags|=4)):(i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i)}return null;case 13:return Ye(nt),i=e.memoizedState,(e.flags&64)!==0?(e.lanes=t,e):(i=i!==null,t=!1,n===null?e.memoizedProps.fallback!==void 0&&Zo(e):t=n.memoizedState!==null,i&&!t&&(e.mode&2)!==0&&(n===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(nt.current&1)!==0?wt===0&&(wt=3):((wt===0||wt===3)&&(wt=4),Ut===null||(ko&134217727)===0&&(ga&134217727)===0||Zr(Ut,Rt))),(i||t)&&(e.flags|=4),null);case 4:return oa(),wc(e),n===null&&Eg(e.stateNode.containerInfo),null;case 10:return Nf(e),null;case 17:return Wt(e.type)&&js(),null;case 19:if(Ye(nt),i=e.memoizedState,i===null)return null;if(a=(e.flags&64)!==0,o=i.rendering,o===null)if(a)Da(i,!1);else{if(wt!==0||n!==null&&(n.flags&64)!==0)for(n=e.child;n!==null;){if(o=Ks(n),o!==null){for(e.flags|=64,Da(i,!1),a=o.updateQueue,a!==null&&(e.updateQueue=a,e.flags|=4),i.lastEffect===null&&(e.firstEffect=null),e.lastEffect=i.lastEffect,i=t,t=e.child;t!==null;)a=t,n=i,a.flags&=2,a.nextEffect=null,a.firstEffect=null,a.lastEffect=null,o=a.alternate,o===null?(a.childLanes=0,a.lanes=n,a.child=null,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,n=o.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return it(nt,nt.current&1|2),e.child}n=n.sibling}i.tail!==null&&Pt()>Ac&&(e.flags|=64,a=!0,Da(i,!1),e.lanes=33554432)}else{if(!a)if(n=Ks(o),n!==null){if(e.flags|=64,a=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Da(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!In)return e=e.lastEffect=i.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*Pt()-i.renderingStartTime>Ac&&t!==1073741824&&(e.flags|=64,a=!0,Da(i,!1),e.lanes=33554432);i.isBackwards?(o.sibling=e.child,e.child=o):(t=i.last,t!==null?t.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.lastEffect=e.lastEffect,i.renderingStartTime=Pt(),t.sibling=null,e=nt.current,it(nt,a?e&1|2:e&1),t):null;case 23:case 24:return qf(),n!==null&&n.memoizedState!==null!=(e.memoizedState!==null)&&i.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(te(156,e.tag))}function lx(n){switch(n.tag){case 1:Wt(n.type)&&js();var e=n.flags;return e&4096?(n.flags=e&-4097|64,n):null;case 3:if(oa(),Ye(Ht),Ye(Dt),zf(),e=n.flags,(e&64)!==0)throw Error(te(285));return n.flags=e&-4097|64,n;case 5:return Ff(n),null;case 13:return Ye(nt),e=n.flags,e&4096?(n.flags=e&-4097|64,n):null;case 19:return Ye(nt),null;case 4:return oa(),null;case 10:return Nf(n),null;case 23:case 24:return qf(),null;default:return null}}function Wf(n,e){try{var t="",i=e;do t+=Vv(i),i=i.return;while(i);var r=t}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:n,source:e,stack:r}}function Mc(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var ux=typeof WeakMap=="function"?WeakMap:Map;function n0(n,e,t){t=xi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){rl||(rl=!0,Lc=i),Mc(n,e)},t}function i0(n,e,t){t=xi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return Mc(n,e),i(r)}}var a=n.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){typeof i!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this),Mc(n,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}var cx=typeof WeakSet=="function"?WeakSet:Set;function Ch(n){var e=n.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(t){Mi(n,t)}else e.current=null}function fx(n,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&n!==null){var t=n.memoizedProps,i=n.memoizedState;n=e.stateNode,e=n.getSnapshotBeforeUpdate(e.elementType===e.type?t:vn(e.type,t),i),n.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&Rf(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(te(163))}function dx(n,e,t){switch(t.tag){case 0:case 11:case 15:case 22:if(e=t.updateQueue,e=e!==null?e.lastEffect:null,e!==null){n=e=e.next;do{if((n.tag&3)===3){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}if(e=t.updateQueue,e=e!==null?e.lastEffect:null,e!==null){n=e=e.next;do{var r=n;i=r.next,r=r.tag,(r&4)!==0&&(r&1)!==0&&(d0(t,n),yx(t,n)),n=i}while(n!==e)}return;case 1:n=t.stateNode,t.flags&4&&(e===null?n.componentDidMount():(i=t.elementType===t.type?e.memoizedProps:vn(t.type,e.memoizedProps),n.componentDidUpdate(i,e.memoizedState,n.__reactInternalSnapshotBeforeUpdate))),e=t.updateQueue,e!==null&&lh(t,e,n);return;case 3:if(e=t.updateQueue,e!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lh(t,e,n)}return;case 5:n=t.stateNode,e===null&&t.flags&4&&Ag(t.type,t.memoizedProps)&&n.focus();return;case 6:return;case 4:return;case 12:return;case 13:t.memoizedState===null&&(t=t.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&sg(t))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(te(163))}function Ah(n,e){for(var t=n;;){if(t.tag===5){var i=t.stateNode;if(e)i=i.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{i=t.stateNode;var r=t.memoizedProps.style;r=r!=null&&r.hasOwnProperty("display")?r.display:null,i.style.display=Zm("display",r)}}else if(t.tag===6)t.stateNode.nodeValue=e?"":t.memoizedProps;else if((t.tag!==23&&t.tag!==24||t.memoizedState===null||t===n)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}}function Lh(n,e){if(er&&typeof er.onCommitFiberUnmount=="function")try{er.onCommitFiberUnmount(Df,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(n=e.updateQueue,n!==null&&(n=n.lastEffect,n!==null)){var t=n=n.next;do{var i=t,r=i.destroy;if(i=i.tag,r!==void 0)if((i&4)!==0)d0(e,t);else{i=e;try{r()}catch(a){Mi(i,a)}}t=t.next}while(t!==n)}break;case 1:if(Ch(e),n=e.stateNode,typeof n.componentWillUnmount=="function")try{n.props=e.memoizedProps,n.state=e.memoizedState,n.componentWillUnmount()}catch(a){Mi(e,a)}break;case 5:Ch(e);break;case 4:r0(n,e)}}function Ph(n){n.alternate=null,n.child=null,n.dependencies=null,n.firstEffect=null,n.lastEffect=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.return=null,n.updateQueue=null}function Rh(n){return n.tag===5||n.tag===3||n.tag===4}function Dh(n){e:{for(var e=n.return;e!==null;){if(Rh(e))break e;e=e.return}throw Error(te(160))}var t=e;switch(e=t.stateNode,t.tag){case 5:var i=!1;break;case 3:e=e.containerInfo,i=!0;break;case 4:e=e.containerInfo,i=!0;break;default:throw Error(te(161))}t.flags&16&&(ho(e,""),t.flags&=-17);e:t:for(t=n;;){for(;t.sibling===null;){if(t.return===null||Rh(t.return)){t=null;break e}t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2)){t=t.stateNode;break e}}i?bc(n,t,e):Ec(n,t,e)}function bc(n,e,t){var i=n.tag,r=i===5||i===6;if(r)n=r?n.stateNode:n.stateNode.instance,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Hs));else if(i!==4&&(n=n.child,n!==null))for(bc(n,e,t),n=n.sibling;n!==null;)bc(n,e,t),n=n.sibling}function Ec(n,e,t){var i=n.tag,r=i===5||i===6;if(r)n=r?n.stateNode:n.stateNode.instance,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Ec(n,e,t),n=n.sibling;n!==null;)Ec(n,e,t),n=n.sibling}function r0(n,e){for(var t=e,i=!1,r,a;;){if(!i){i=t.return;e:for(;;){if(i===null)throw Error(te(160));switch(r=i.stateNode,i.tag){case 5:a=!1;break e;case 3:r=r.containerInfo,a=!0;break e;case 4:r=r.containerInfo,a=!0;break e}i=i.return}i=!0}if(t.tag===5||t.tag===6){e:for(var o=n,s=t,l=s;;)if(Lh(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===s)break e;for(;l.sibling===null;){if(l.return===null||l.return===s)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}a?(o=r,s=t.stateNode,o.nodeType===8?o.parentNode.removeChild(s):o.removeChild(s)):r.removeChild(t.stateNode)}else if(t.tag===4){if(t.child!==null){r=t.stateNode.containerInfo,a=!0,t.child.return=t,t=t.child;continue}}else if(Lh(n,t),t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return,t.tag===4&&(i=!1)}t.sibling.return=t.return,t=t.sibling}}function su(n,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var t=e.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do(i.tag&3)===3&&(n=i.destroy,i.destroy=void 0,n!==void 0&&n()),i=i.next;while(i!==t)}return;case 1:return;case 5:if(t=e.stateNode,t!=null){i=e.memoizedProps;var r=n!==null?n.memoizedProps:i;n=e.type;var a=e.updateQueue;if(e.updateQueue=null,a!==null){for(t[Ws]=i,n==="input"&&i.type==="radio"&&i.name!=null&&Xm(t,i),ic(n,r),e=ic(n,i),r=0;r<a.length;r+=2){var o=a[r],s=a[r+1];o==="style"?Km(t,s):o==="dangerouslySetInnerHTML"?Ym(t,s):o==="children"?ho(t,s):cf(t,o,s,e)}switch(n){case"input":Zu(t,i);break;case"textarea":$m(t,i);break;case"select":n=t._wrapperState.wasMultiple,t._wrapperState.wasMultiple=!!i.multiple,a=i.value,a!=null?Wr(t,!!i.multiple,a,!1):n!==!!i.multiple&&(i.defaultValue!=null?Wr(t,!!i.multiple,i.defaultValue,!0):Wr(t,!!i.multiple,i.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(te(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:t=e.stateNode,t.hydrate&&(t.hydrate=!1,sg(t.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&($f=Pt(),Ah(e.child,!0)),Ih(e);return;case 19:Ih(e);return;case 17:return;case 23:case 24:Ah(e,e.memoizedState!==null);return}throw Error(te(163))}function Ih(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new cx),e.forEach(function(i){var r=Mx.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function hx(n,e){return n!==null&&(n=n.memoizedState,n===null||n.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var px=Math.ceil,il=dr.ReactCurrentDispatcher,jf=dr.ReactCurrentOwner,Te=0,Ut=null,dt=null,Rt=0,ar=0,Tc=ki(0),wt=0,bl=null,ma=0,ko=0,ga=0,Xf=0,Cc=null,$f=0,Ac=1/0;function va(){Ac=Pt()+500}var de=null,rl=!1,Lc=null,Pn=null,Ai=!1,oo=null,Xa=90,Pc=[],Rc=[],qn=null,so=0,Dc=null,Ls=-1,Hn=0,Ps=0,lo=null,Rs=!1;function Kt(){return(Te&48)!==0?Pt():Ls!==-1?Ls:Ls=Pt()}function Si(n){if(n=n.mode,(n&2)===0)return 1;if((n&4)===0)return aa()===99?1:2;if(Hn===0&&(Hn=ma),tx.transition!==0){Ps!==0&&(Ps=Cc!==null?Cc.pendingLanes:0),n=Hn;var e=4186112&~Ps;return e&=-e,e===0&&(n=4186112&~n,e=n&-n,e===0&&(e=8192)),e}return n=aa(),(Te&4)!==0&&n===98?n=Gs(12,Hn):(n=r_(n),n=Gs(n,Hn)),n}function wi(n,e,t){if(50<so)throw so=0,Dc=null,Error(te(185));if(n=El(n,e),n===null)return null;vl(n,e,t),n===Ut&&(ga|=e,wt===4&&Zr(n,Rt));var i=aa();e===1?(Te&8)!==0&&(Te&48)===0?Ic(n):(fn(n,t),Te===0&&(va(),Nn())):((Te&4)===0||i!==98&&i!==99||(qn===null?qn=new Set([n]):qn.add(n)),fn(n,t)),Cc=n}function El(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}function fn(n,e){for(var t=n.callbackNode,i=n.suspendedLanes,r=n.pingedLanes,a=n.expirationTimes,o=n.pendingLanes;0<o;){var s=31-Ti(o),l=1<<s,u=a[s];if(u===-1){if((l&i)===0||(l&r)!==0){u=e,Pr(l);var f=We;a[s]=10<=f?u+250:6<=f?u+5e3:-1}}else u<=e&&(n.expiredLanes|=l);o&=~l}if(i=vo(n,n===Ut?Rt:0),e=We,i===0)t!==null&&(t!==nu&&pc(t),n.callbackNode=null,n.callbackPriority=0);else{if(t!==null){if(n.callbackPriority===e)return;t!==nu&&pc(t)}e===15?(t=Ic.bind(null,n),Vn===null?(Vn=[t],As=If(wl,Og)):Vn.push(t),t=nu):e===14?t=So(99,Ic.bind(null,n)):(t=a_(e),t=So(t,a0.bind(null,n))),n.callbackPriority=e,n.callbackNode=t}}function a0(n){if(Ls=-1,Ps=Hn=0,(Te&48)!==0)throw Error(te(327));var e=n.callbackNode;if(Ni()&&n.callbackNode!==e)return null;var t=vo(n,n===Ut?Rt:0);if(t===0)return null;var i=t,r=Te;Te|=16;var a=u0();(Ut!==n||Rt!==i)&&(va(),Kr(n,i));do try{vx();break}catch(s){l0(n,s)}while(1);if(kf(),il.current=a,Te=r,dt!==null?i=0:(Ut=null,Rt=0,i=wt),(ma&ga)!==0)Kr(n,0);else if(i!==0){if(i===2&&(Te|=64,n.hydrate&&(n.hydrate=!1,Rf(n.containerInfo)),t=pg(n),t!==0&&(i=$a(n,t))),i===1)throw e=bl,Kr(n,0),Zr(n,t),fn(n,Pt()),e;switch(n.finishedWork=n.current.alternate,n.finishedLanes=t,i){case 0:case 1:throw Error(te(345));case 2:Vi(n);break;case 3:if(Zr(n,t),(t&62914560)===t&&(i=$f+500-Pt(),10<i)){if(vo(n,0)!==0)break;if(r=n.suspendedLanes,(r&t)!==t){Kt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=eh(Vi.bind(null,n),i);break}Vi(n);break;case 4:if(Zr(n,t),(t&4186112)===t)break;for(i=n.eventTimes,r=-1;0<t;){var o=31-Ti(t);a=1<<o,o=i[o],o>r&&(r=o),t&=~a}if(t=r,t=Pt()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*px(t/1960))-t,10<t){n.timeoutHandle=eh(Vi.bind(null,n),t);break}Vi(n);break;case 5:Vi(n);break;default:throw Error(te(329))}}return fn(n,Pt()),n.callbackNode===e?a0.bind(null,n):null}function Zr(n,e){for(e&=~Xf,e&=~ga,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Ti(e),i=1<<t;n[t]=-1,e&=~i}}function Ic(n){if((Te&48)!==0)throw Error(te(327));if(Ni(),n===Ut&&(n.expiredLanes&Rt)!==0){var e=Rt,t=$a(n,e);(ma&ga)!==0&&(e=vo(n,e),t=$a(n,e))}else e=vo(n,0),t=$a(n,e);if(n.tag!==0&&t===2&&(Te|=64,n.hydrate&&(n.hydrate=!1,Rf(n.containerInfo)),e=pg(n),e!==0&&(t=$a(n,e))),t===1)throw t=bl,Kr(n,0),Zr(n,e),fn(n,Pt()),t;return n.finishedWork=n.current.alternate,n.finishedLanes=e,Vi(n),fn(n,Pt()),null}function mx(){if(qn!==null){var n=qn;qn=null,n.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,fn(e,Pt())})}Nn()}function o0(n,e){var t=Te;Te|=1;try{return n(e)}finally{Te=t,Te===0&&(va(),Nn())}}function s0(n,e){var t=Te;Te&=-2,Te|=8;try{return n(e)}finally{Te=t,Te===0&&(va(),Nn())}}function Qo(n,e){it(Tc,ar),ar|=e,ma|=e}function qf(){ar=Tc.current,Ye(Tc)}function Kr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Y_(t)),dt!==null)for(t=dt.return;t!==null;){var i=t;switch(i.tag){case 1:i=i.type.childContextTypes,i!=null&&js();break;case 3:oa(),Ye(Ht),Ye(Dt),zf();break;case 5:Ff(i);break;case 4:oa();break;case 13:Ye(nt);break;case 19:Ye(nt);break;case 10:Nf(i);break;case 23:case 24:qf()}t=t.return}Ut=n,dt=Li(n.current,null),Rt=ar=ma=e,wt=0,bl=null,Xf=ga=ko=0}function l0(n,e){do{var t=dt;try{if(kf(),ro.current=nl,Qs){for(var i=ot.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Qs=!1}if(Eo=0,St=Lt=ot=null,ao=!1,jf.current=null,t===null||t.return===null){wt=1,bl=e,dt=null;break}e:{var a=n,o=t.return,s=t,l=e;if(e=Rt,s.flags|=2048,s.firstEffect=s.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((s.mode&2)===0){var f=s.alternate;f?(s.updateQueue=f.updateQueue,s.memoizedState=f.memoizedState,s.lanes=f.lanes):(s.updateQueue=null,s.memoizedState=null)}var h=(nt.current&1)!==0,d=o;do{var g;if(g=d.tag===13){var y=d.memoizedState;if(y!==null)g=y.dehydrated!==null;else{var p=d.memoizedProps;g=p.fallback===void 0?!1:p.unstable_avoidThisFallback!==!0?!0:!h}}if(g){var c=d.updateQueue;if(c===null){var m=new Set;m.add(u),d.updateQueue=m}else c.add(u);if((d.mode&2)===0){if(d.flags|=64,s.flags|=16384,s.flags&=-2981,s.tag===1)if(s.alternate===null)s.tag=17;else{var v=xi(-1,1);v.tag=2,yi(s,v)}s.lanes|=1;break e}l=void 0,s=e;var _=a.pingCache;if(_===null?(_=a.pingCache=new ux,l=new Set,_.set(u,l)):(l=_.get(u),l===void 0&&(l=new Set,_.set(u,l))),!l.has(s)){l.add(s);var x=wx.bind(null,a,u,s);u.then(x,x)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);l=Error((Hr(s.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}wt!==5&&(wt=2),l=Wf(l,s),d=o;do{switch(d.tag){case 3:a=l,d.flags|=4096,e&=-e,d.lanes|=e;var b=n0(d,a,e);sh(d,b);break e;case 1:a=l;var T=d.type,A=d.stateNode;if((d.flags&64)===0&&(typeof T.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Pn===null||!Pn.has(A)))){d.flags|=4096,e&=-e,d.lanes|=e;var S=i0(d,a,e);sh(d,S);break e}}d=d.return}while(d!==null)}f0(t)}catch(M){e=M,dt===t&&t!==null&&(dt=t=t.return);continue}break}while(1)}function u0(){var n=il.current;return il.current=nl,n===null?nl:n}function $a(n,e){var t=Te;Te|=16;var i=u0();Ut===n&&Rt===e||Kr(n,e);do try{gx();break}catch(r){l0(n,r)}while(1);if(kf(),Te=t,il.current=i,dt!==null)throw Error(te(261));return Ut=null,Rt=0,wt}function gx(){for(;dt!==null;)c0(dt)}function vx(){for(;dt!==null&&!Q_();)c0(dt)}function c0(n){var e=h0(n.alternate,n,ar);n.memoizedProps=n.pendingProps,e===null?f0(n):dt=e,jf.current=null}function f0(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&2048)===0){if(t=sx(t,e,ar),t!==null){dt=t;return}if(t=e,t.tag!==24&&t.tag!==23||t.memoizedState===null||(ar&1073741824)!==0||(t.mode&4)===0){for(var i=0,r=t.child;r!==null;)i|=r.lanes|r.childLanes,r=r.sibling;t.childLanes=i}n!==null&&(n.flags&2048)===0&&(n.firstEffect===null&&(n.firstEffect=e.firstEffect),e.lastEffect!==null&&(n.lastEffect!==null&&(n.lastEffect.nextEffect=e.firstEffect),n.lastEffect=e.lastEffect),1<e.flags&&(n.lastEffect!==null?n.lastEffect.nextEffect=e:n.firstEffect=e,n.lastEffect=e))}else{if(t=lx(e),t!==null){t.flags&=2047,dt=t;return}n!==null&&(n.firstEffect=n.lastEffect=null,n.flags|=2048)}if(e=e.sibling,e!==null){dt=e;return}dt=e=n}while(e!==null);wt===0&&(wt=5)}function Vi(n){var e=aa();return rr(99,_x.bind(null,n,e)),null}function _x(n,e){do Ni();while(oo!==null);if((Te&48)!==0)throw Error(te(327));var t=n.finishedWork;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null;var i=t.lanes|t.childLanes,r=i,a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;for(var o=n.eventTimes,s=n.expirationTimes;0<a;){var l=31-Ti(a),u=1<<l;r[l]=0,o[l]=-1,s[l]=-1,a&=~u}if(qn!==null&&(i&24)===0&&qn.has(n)&&qn.delete(n),n===Ut&&(dt=Ut=null,Rt=0),1<t.flags?t.lastEffect!==null?(t.lastEffect.nextEffect=t,i=t.firstEffect):i=t:i=t.firstEffect,i!==null){if(r=Te,Te|=32,jf.current=null,Jl=bs,o=$d(),uc(o)){if("selectionStart"in o)s={start:o.selectionStart,end:o.selectionEnd};else e:if(s=(s=o.ownerDocument)&&s.defaultView||window,(u=s.getSelection&&s.getSelection())&&u.rangeCount!==0){s=u.anchorNode,a=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{s.nodeType,l.nodeType}catch{s=null;break e}var f=0,h=-1,d=-1,g=0,y=0,p=o,c=null;t:for(;;){for(var m;p!==s||a!==0&&p.nodeType!==3||(h=f+a),p!==l||u!==0&&p.nodeType!==3||(d=f+u),p.nodeType===3&&(f+=p.nodeValue.length),(m=p.firstChild)!==null;)c=p,p=m;for(;;){if(p===o)break t;if(c===s&&++g===a&&(h=f),c===l&&++y===u&&(d=f),(m=p.nextSibling)!==null)break;p=c,c=p.parentNode}p=m}s=h===-1||d===-1?null:{start:h,end:d}}else s=null;s=s||{start:0,end:0}}else s=null;eu={focusedElem:o,selectionRange:s},bs=!1,lo=null,Rs=!1,de=i;do try{xx()}catch(M){if(de===null)throw Error(te(330));Mi(de,M),de=de.nextEffect}while(de!==null);lo=null,de=i;do try{for(o=n;de!==null;){var v=de.flags;if(v&16&&ho(de.stateNode,""),v&128){var _=de.alternate;if(_!==null){var x=_.ref;x!==null&&(typeof x=="function"?x(null):x.current=null)}}switch(v&1038){case 2:Dh(de),de.flags&=-3;break;case 6:Dh(de),de.flags&=-3,su(de.alternate,de);break;case 1024:de.flags&=-1025;break;case 1028:de.flags&=-1025,su(de.alternate,de);break;case 4:su(de.alternate,de);break;case 8:s=de,r0(o,s);var b=s.alternate;Ph(s),b!==null&&Ph(b)}de=de.nextEffect}}catch(M){if(de===null)throw Error(te(330));Mi(de,M),de=de.nextEffect}while(de!==null);if(x=eu,_=$d(),v=x.focusedElem,o=x.selectionRange,_!==v&&v&&v.ownerDocument&&wg(v.ownerDocument.documentElement,v)){for(o!==null&&uc(v)&&(_=o.start,x=o.end,x===void 0&&(x=_),"selectionStart"in v?(v.selectionStart=_,v.selectionEnd=Math.min(x,v.value.length)):(x=(_=v.ownerDocument||document)&&_.defaultView||window,x.getSelection&&(x=x.getSelection(),s=v.textContent.length,b=Math.min(o.start,s),o=o.end===void 0?b:Math.min(o.end,s),!x.extend&&b>o&&(s=o,o=b,b=s),s=Xd(v,b),a=Xd(v,o),s&&a&&(x.rangeCount!==1||x.anchorNode!==s.node||x.anchorOffset!==s.offset||x.focusNode!==a.node||x.focusOffset!==a.offset)&&(_=_.createRange(),_.setStart(s.node,s.offset),x.removeAllRanges(),b>o?(x.addRange(_),x.extend(a.node,a.offset)):(_.setEnd(a.node,a.offset),x.addRange(_)))))),_=[],x=v;x=x.parentNode;)x.nodeType===1&&_.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<_.length;v++)x=_[v],x.element.scrollLeft=x.left,x.element.scrollTop=x.top}bs=!!Jl,eu=Jl=null,n.current=t,de=i;do try{for(v=n;de!==null;){var T=de.flags;if(T&36&&dx(v,de.alternate,de),T&128){_=void 0;var A=de.ref;if(A!==null){var S=de.stateNode;switch(de.tag){case 5:_=S;break;default:_=S}typeof A=="function"?A(_):A.current=_}}de=de.nextEffect}}catch(M){if(de===null)throw Error(te(330));Mi(de,M),de=de.nextEffect}while(de!==null);de=null,ex(),Te=r}else n.current=t;if(Ai)Ai=!1,oo=n,Xa=e;else for(de=i;de!==null;)e=de.nextEffect,de.nextEffect=null,de.flags&8&&(T=de,T.sibling=null,T.stateNode=null),de=e;if(i=n.pendingLanes,i===0&&(Pn=null),i===1?n===Dc?so++:(so=0,Dc=n):so=0,t=t.stateNode,er&&typeof er.onCommitFiberRoot=="function")try{er.onCommitFiberRoot(Df,t,void 0,(t.current.flags&64)===64)}catch{}if(fn(n,Pt()),rl)throw rl=!1,n=Lc,Lc=null,n;return(Te&8)!==0||Nn(),null}function xx(){for(;de!==null;){var n=de.alternate;Rs||lo===null||((de.flags&8)!==0?Dd(de,lo)&&(Rs=!0):de.tag===13&&hx(n,de)&&Dd(de,lo)&&(Rs=!0));var e=de.flags;(e&256)!==0&&fx(n,de),(e&512)===0||Ai||(Ai=!0,So(97,function(){return Ni(),null})),de=de.nextEffect}}function Ni(){if(Xa!==90){var n=97<Xa?97:Xa;return Xa=90,rr(n,Sx)}return!1}function yx(n,e){Pc.push(e,n),Ai||(Ai=!0,So(97,function(){return Ni(),null}))}function d0(n,e){Rc.push(e,n),Ai||(Ai=!0,So(97,function(){return Ni(),null}))}function Sx(){if(oo===null)return!1;var n=oo;if(oo=null,(Te&48)!==0)throw Error(te(331));var e=Te;Te|=32;var t=Rc;Rc=[];for(var i=0;i<t.length;i+=2){var r=t[i],a=t[i+1],o=r.destroy;if(r.destroy=void 0,typeof o=="function")try{o()}catch(l){if(a===null)throw Error(te(330));Mi(a,l)}}for(t=Pc,Pc=[],i=0;i<t.length;i+=2){r=t[i],a=t[i+1];try{var s=r.create;r.destroy=s()}catch(l){if(a===null)throw Error(te(330));Mi(a,l)}}for(s=n.current.firstEffect;s!==null;)n=s.nextEffect,s.nextEffect=null,s.flags&8&&(s.sibling=null,s.stateNode=null),s=n;return Te=e,Nn(),!0}function kh(n,e,t){e=Wf(t,e),e=n0(n,e,1),yi(n,e),e=Kt(),n=El(n,1),n!==null&&(vl(n,1,e),fn(n,e))}function Mi(n,e){if(n.tag===3)kh(n,n,e);else for(var t=n.return;t!==null;){if(t.tag===3){kh(t,n,e);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pn===null||!Pn.has(i))){n=Wf(e,n);var r=i0(t,n,1);if(yi(t,r),r=Kt(),t=El(t,1),t!==null)vl(t,1,r),fn(t,r);else if(typeof i.componentDidCatch=="function"&&(Pn===null||!Pn.has(i)))try{i.componentDidCatch(e,n)}catch{}break}}t=t.return}}function wx(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Kt(),n.pingedLanes|=n.suspendedLanes&t,Ut===n&&(Rt&t)===t&&(wt===4||wt===3&&(Rt&62914560)===Rt&&500>Pt()-$f?Kr(n,0):Xf|=t),fn(n,e)}function Mx(n,e){var t=n.stateNode;t!==null&&t.delete(e),e=0,e===0&&(e=n.mode,(e&2)===0?e=1:(e&4)===0?e=aa()===99?1:2:(Hn===0&&(Hn=ma),e=Rr(62914560&~Hn),e===0&&(e=4194304))),t=Kt(),n=El(n,e),n!==null&&(vl(n,e,t),fn(n,t))}var h0;h0=function(n,e,t){var i=e.lanes;if(n!==null)if(n.memoizedProps!==e.pendingProps||Ht.current)Sn=!0;else if((t&i)!==0)Sn=(n.flags&16384)!==0;else{switch(Sn=!1,e.tag){case 3:yh(e),ru();break;case 5:fh(e);break;case 1:Wt(e.type)&&Cs(e);break;case 4:vc(e,e.stateNode.containerInfo);break;case 10:i=e.memoizedProps.value;var r=e.type._context;it(Xs,r._currentValue),r._currentValue=i;break;case 13:if(e.memoizedState!==null)return(t&e.child.childLanes)!==0?Sh(n,e,t):(it(nt,nt.current&1),e=Xn(n,e,t),e!==null?e.sibling:null);it(nt,nt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&64)!==0){if(i)return Th(n,e,t);e.flags|=64}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(nt,nt.current),i)break;return null;case 23:case 24:return e.lanes=0,au(n,e,t)}return Xn(n,e,t)}else Sn=!1;switch(e.lanes=0,e.tag){case 2:if(i=e.type,n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2),n=e.pendingProps,r=ra(e,Dt.current),qr(e,t),r=Bf(null,e,i,n,r,t),e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(i)){var a=!0;Cs(e)}else a=!1;e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Of(e);var o=i.getDerivedStateFromProps;typeof o=="function"&&Ys(e,i,o,n),r.updater=Ml,e.stateNode=r,r._reactInternals=e,gc(e,i,n,t),e=Sc(null,e,i,!0,a,t)}else e.tag=0,Vt(null,e,r,t),e=e.child;return e;case 16:r=e.elementType;e:{switch(n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2),n=e.pendingProps,a=r._init,r=a(r._payload),e.type=r,a=e.tag=Ex(r),n=vn(r,n),a){case 0:e=yc(null,e,r,n,t);break e;case 1:e=xh(null,e,r,n,t);break e;case 11:e=vh(null,e,r,n,t);break e;case 14:e=_h(null,e,r,vn(r.type,n),i,t);break e}throw Error(te(306,r,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),yc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),xh(n,e,i,r,t);case 3:if(yh(e),i=e.updateQueue,n===null||i===null)throw Error(te(282));if(i=e.pendingProps,r=e.memoizedState,r=r!==null?r.element:null,zg(n,e),wo(e,i,null,t),i=e.memoizedState.element,i===r)ru(),e=Xn(n,e,t);else{if(r=e.stateNode,(a=r.hydrate)&&(fi=$r(e.stateNode.containerInfo.firstChild),jn=e,a=In=!0),a){if(n=r.mutableSourceEagerHydrationData,n!=null)for(r=0;r<n.length;r+=2)a=n[r],a._workInProgressVersionPrimary=n[r+1],Yr.push(a);for(t=Vg(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|1024,t=t.sibling}else Vt(n,e,i,t),ru();e=e.child}return e;case 5:return fh(e),n===null&&_c(e),i=e.type,r=e.pendingProps,a=n!==null?n.memoizedProps:null,o=r.children,dc(i,r)?o=null:a!==null&&dc(i,a)&&(e.flags|=16),Qg(n,e),Vt(n,e,o,t),e.child;case 6:return n===null&&_c(e),null;case 13:return Sh(n,e,t);case 4:return vc(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Zs(e,null,i,t):Vt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),vh(n,e,i,r,t);case 7:return Vt(n,e,e.pendingProps,t),e.child;case 8:return Vt(n,e,e.pendingProps.children,t),e.child;case 12:return Vt(n,e,e.pendingProps.children,t),e.child;case 10:e:{i=e.type._context,r=e.pendingProps,o=e.memoizedProps,a=r.value;var s=e.type._context;if(it(Xs,s._currentValue),s._currentValue=a,o!==null)if(s=o.value,a=sn(s,a)?0:(typeof i._calculateChangedBits=="function"?i._calculateChangedBits(s,a):1073741823)|0,a===0){if(o.children===r.children&&!Ht.current){e=Xn(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===i&&(u.observedBits&a)!==0){s.tag===1&&(u=xi(-1,t&-t),u.tag=2,yi(s,u)),s.lanes|=t,u=s.alternate,u!==null&&(u.lanes|=t),Fg(s.return,t),l.lanes|=t;break}u=u.next}}else o=s.tag===10&&s.type===e.type?null:s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,a=e.pendingProps,i=a.children,qr(e,t),r=cn(r,a.unstable_observedBits),i=i(r),e.flags|=1,Vt(n,e,i,t),e.child;case 14:return r=e.type,a=vn(r,e.pendingProps),a=vn(r.type,a),_h(n,e,r,a,i,t);case 15:return Kg(n,e,e.type,e.pendingProps,i,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Wt(i)?(n=!0,Cs(e)):n=!1,qr(e,t),Bg(e,i,r),gc(e,i,r,t),Sc(null,e,i,!0,n,t);case 19:return Th(n,e,t);case 23:return au(n,e,t);case 24:return au(n,e,t)}throw Error(te(156,e.tag))};function bx(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(n,e,t,i){return new bx(n,e,t,i)}function Yf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ex(n){if(typeof n=="function")return Yf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===pl)return 11;if(n===ml)return 14}return 2}function Li(n,e){var t=n.alternate;return t===null?(t=ln(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.nextEffect=null,t.firstEffect=null,t.lastEffect=null),t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ds(n,e,t,i,r,a){var o=2;if(i=n,typeof n=="function")Yf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case li:return Qr(t.children,r,a,e);case Hm:o=8,r|=16;break;case ff:o=8,r|=1;break;case Ka:return n=ln(12,t,e,r|8),n.elementType=Ka,n.type=Ka,n.lanes=a,n;case Qa:return n=ln(13,t,e,r),n.type=Qa,n.elementType=Qa,n.lanes=a,n;case Fs:return n=ln(19,t,e,r),n.elementType=Fs,n.lanes=a,n;case vf:return Zf(t,r,a,e);case qu:return n=ln(24,t,e,r),n.elementType=qu,n.lanes=a,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case df:o=10;break e;case hf:o=9;break e;case pl:o=11;break e;case ml:o=14;break e;case pf:o=16,i=null;break e;case mf:o=22;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=ln(o,t,e,r),e.elementType=n,e.type=i,e.lanes=a,e}function Qr(n,e,t,i){return n=ln(7,n,i,e),n.lanes=t,n}function Zf(n,e,t,i){return n=ln(23,n,i,e),n.elementType=vf,n.lanes=t,n}function lu(n,e,t){return n=ln(6,n,null,e),n.lanes=t,n}function uu(n,e,t){return e=ln(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Tx(n,e,t){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=t,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.mutableSourceEagerHydrationData=null}function Cx(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xi,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function al(n,e,t,i){var r=e.current,a=Kt(),o=Si(r);e:if(t){t=t._reactInternals;t:{if(hr(t)!==t||t.tag!==1)throw Error(te(170));var s=t;do{switch(s.tag){case 3:s=s.stateNode.context;break t;case 1:if(Wt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break t}}s=s.return}while(s!==null);throw Error(te(171))}if(t.tag===1){var l=t.type;if(Wt(l)){t=Pg(t,l,s);break e}}t=s}else t=Ci;return e.context===null?e.context=t:e.pendingContext=t,e=xi(a,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),yi(r,e),wi(r,o,a),o}function cu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Nh(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Kf(n,e){Nh(n,e),(n=n.alternate)&&Nh(n,e)}function Ax(){return null}function Qf(n,e,t){var i=t!=null&&t.hydrationOptions!=null&&t.hydrationOptions.mutableSources||null;if(t=new Tx(n,e,t!=null&&t.hydrate===!0),e=ln(3,null,null,e===2?7:e===1?3:0),t.current=e,e.stateNode=t,Of(e),n[pa]=t.current,Eg(n.nodeType===8?n.parentNode:n),i)for(n=0;n<i.length;n++){e=i[n];var r=e._getVersion;r=r(e._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[e,r]:t.mutableSourceEagerHydrationData.push(e,r)}this._internalRoot=t}Qf.prototype.render=function(n){al(n,this._internalRoot,null,null)};Qf.prototype.unmount=function(){var n=this._internalRoot,e=n.containerInfo;al(null,n,null,function(){e[pa]=null})};function No(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Lx(n,e){if(e||(e=n?n.nodeType===9?n.documentElement:n.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var t;t=n.lastChild;)n.removeChild(t);return new Qf(n,0,e?{hydrate:!0}:void 0)}function Tl(n,e,t,i,r){var a=t._reactRootContainer;if(a){var o=a._internalRoot;if(typeof r=="function"){var s=r;r=function(){var u=cu(o);s.call(u)}}al(e,o,n,r)}else{if(a=t._reactRootContainer=Lx(t,i),o=a._internalRoot,typeof r=="function"){var l=r;r=function(){var u=cu(o);l.call(u)}}s0(function(){al(e,o,n,r)})}return cu(o)}rg=function(n){if(n.tag===13){var e=Kt();wi(n,4,e),Kf(n,4)}};wf=function(n){if(n.tag===13){var e=Kt();wi(n,67108864,e),Kf(n,67108864)}};ag=function(n){if(n.tag===13){var e=Kt(),t=Si(n);wi(n,t,e),Kf(n,t)}};og=function(n,e){return e()};rc=function(n,e,t){switch(e){case"input":if(Zu(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Sl(i);if(!r)throw Error(te(90));jm(i),Zu(i,r)}}}break;case"textarea":$m(n,t);break;case"select":e=t.value,e!=null&&Wr(n,!!t.multiple,e,!1)}};xf=o0;eg=function(n,e,t,i,r){var a=Te;Te|=4;try{return rr(98,n.bind(null,e,t,i,r))}finally{Te=a,Te===0&&(va(),Nn())}};yf=function(){(Te&49)===0&&(mx(),Ni())};tg=function(n,e){var t=Te;Te|=2;try{return n(e)}finally{Te=t,Te===0&&(va(),Nn())}};function p0(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!No(e))throw Error(te(200));return Cx(n,e,null,t)}var Px={Events:[Do,Or,Sl,Qm,Jm,Ni,{current:!1}]},Ia={findFiberByHostInstance:qi,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Rx={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ig(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||Ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{Df=Jo.inject(Rx),er=Jo}catch{}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Px;dn.createPortal=p0;dn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):Error(te(268,Object.keys(n)));return n=ig(e),n=n===null?null:n.stateNode,n};dn.flushSync=function(n,e){var t=Te;if((t&48)!==0)return n(e);Te|=1;try{if(n)return rr(99,n.bind(null,e))}finally{Te=t,Nn()}};dn.hydrate=function(n,e,t){if(!No(e))throw Error(te(200));return Tl(null,n,e,!0,t)};dn.render=function(n,e,t){if(!No(e))throw Error(te(200));return Tl(null,n,e,!1,t)};dn.unmountComponentAtNode=function(n){if(!No(n))throw Error(te(40));return n._reactRootContainer?(s0(function(){Tl(null,null,n,!1,function(){n._reactRootContainer=null,n[pa]=null})}),!0):!1};dn.unstable_batchedUpdates=o0;dn.unstable_createPortal=function(n,e){return p0(n,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};dn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!No(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return Tl(n,e,t,!1,i)};dn.version="17.0.2";function m0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m0)}catch(n){console.error(n)}}m0(),Um.exports=dn;var Dx=Um.exports;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="150",Ix=0,Oh=1,kx=2,g0=1,Nx=2,qa=3,Pi=0,Qt=1,di=2,bi=0,Jr=1,Fh=2,zh=3,Uh=4,Ox=5,Dr=100,Fx=101,zx=102,Bh=103,Gh=104,Ux=200,Bx=201,Gx=202,Vx=203,v0=204,_0=205,Hx=206,Wx=207,jx=208,Xx=209,$x=210,qx=0,Yx=1,Zx=2,kc=3,Kx=4,Qx=5,Jx=6,ey=7,x0=0,ty=1,ny=2,Yn=0,iy=1,ry=2,ay=3,oy=4,sy=5,y0=300,sa=301,la=302,Nc=303,Oc=304,Cl=306,Fc=1e3,xn=1001,zc=1002,Ft=1003,Vh=1004,fu=1005,on=1006,ly=1007,To=1008,or=1009,uy=1010,cy=1011,S0=1012,fy=1013,Ki=1014,Qi=1015,Co=1016,dy=1017,hy=1018,ea=1020,py=1021,yn=1023,my=1024,gy=1025,tr=1026,ua=1027,vy=1028,_y=1029,xy=1030,yy=1031,Sy=1033,du=33776,hu=33777,pu=33778,mu=33779,Hh=35840,Wh=35841,jh=35842,Xh=35843,wy=36196,$h=37492,qh=37496,Yh=37808,Zh=37809,Kh=37810,Qh=37811,Jh=37812,ep=37813,tp=37814,np=37815,ip=37816,rp=37817,ap=37818,op=37819,sp=37820,lp=37821,gu=36492,My=36283,up=36284,cp=36285,fp=36286,sr=3e3,qe=3001,by=3200,Ey=3201,Ty=0,Cy=1,Tn="srgb",Ao="srgb-linear",w0="display-p3",vu=7680,Ay=519,dp=35044,hp="300 es",Uc=1035;class _a{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_u=Math.PI/180,pp=180/Math.PI;function Oo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Zt(n,e,t){return Math.max(e,Math.min(t,n))}function Ly(n,e){return(n%e+e)%e}function xu(n,e,t){return(1-t)*n+t*e}function mp(n){return(n&n-1)===0&&n!==0}function Py(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function es(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,a,o,s,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=s,f[3]=t,f[4]=a,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],g=i[5],y=i[8],p=r[0],c=r[3],m=r[6],v=r[1],_=r[4],x=r[7],b=r[2],T=r[5],A=r[8];return a[0]=o*p+s*v+l*b,a[3]=o*c+s*_+l*T,a[6]=o*m+s*x+l*A,a[1]=u*p+f*v+h*b,a[4]=u*c+f*_+h*T,a[7]=u*m+f*x+h*A,a[2]=d*p+g*v+y*b,a[5]=d*c+g*_+y*T,a[8]=d*m+g*x+y*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],f=e[8];return t*o*f-t*s*u-i*a*f+i*s*l+r*a*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],f=e[8],h=f*o-s*u,d=s*l-f*a,g=u*a-o*l,y=t*h+i*d+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/y;return e[0]=h*p,e[1]=(r*u-f*i)*p,e[2]=(s*i-r*o)*p,e[3]=d*p,e[4]=(f*t-r*l)*p,e[5]=(r*a-s*t)*p,e[6]=g*p,e[7]=(i*l-u*t)*p,e[8]=(o*t-i*a)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const l=Math.cos(a),u=Math.sin(a);return this.set(i*l,i*u,-i*(l*o+u*s)+o+e,-r*u,r*l,-r*(-u*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(yu.makeScale(e,t)),this}rotate(e){return this.premultiply(yu.makeRotation(-e)),this}translate(e,t){return this.premultiply(yu.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yu=new zt;function M0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ol(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}class Fo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=a[o+0],g=a[o+1],y=a[o+2],p=a[o+3];if(s===0){e[t+0]=l,e[t+1]=u,e[t+2]=f,e[t+3]=h;return}if(s===1){e[t+0]=d,e[t+1]=g,e[t+2]=y,e[t+3]=p;return}if(h!==p||l!==d||u!==g||f!==y){let c=1-s;const m=l*d+u*g+f*y+h*p,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const b=Math.sqrt(_),T=Math.atan2(b,m*v);c=Math.sin(c*T)/b,s=Math.sin(s*T)/b}const x=s*v;if(l=l*c+d*x,u=u*c+g*x,f=f*c+y*x,h=h*c+p*x,c===1-s){const b=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=b,u*=b,f*=b,h*=b}}e[t]=l,e[t+1]=u,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=a[o],d=a[o+1],g=a[o+2],y=a[o+3];return e[t]=s*y+f*h+l*g-u*d,e[t+1]=l*y+f*d+u*h-s*g,e[t+2]=u*y+f*g+s*d-l*h,e[t+3]=f*y-s*h-l*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,u=s(i/2),f=s(r/2),h=s(a/2),d=l(i/2),g=l(r/2),y=l(a/2);switch(o){case"XYZ":this._x=d*f*h+u*g*y,this._y=u*g*h-d*f*y,this._z=u*f*y+d*g*h,this._w=u*f*h-d*g*y;break;case"YXZ":this._x=d*f*h+u*g*y,this._y=u*g*h-d*f*y,this._z=u*f*y-d*g*h,this._w=u*f*h+d*g*y;break;case"ZXY":this._x=d*f*h-u*g*y,this._y=u*g*h+d*f*y,this._z=u*f*y+d*g*h,this._w=u*f*h-d*g*y;break;case"ZYX":this._x=d*f*h-u*g*y,this._y=u*g*h+d*f*y,this._z=u*f*y-d*g*h,this._w=u*f*h+d*g*y;break;case"YZX":this._x=d*f*h+u*g*y,this._y=u*g*h+d*f*y,this._z=u*f*y-d*g*h,this._w=u*f*h-d*g*y;break;case"XZY":this._x=d*f*h-u*g*y,this._y=u*g*h-d*f*y,this._z=u*f*y+d*g*h,this._w=u*f*h+d*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],u=t[2],f=t[6],h=t[10],d=i+s+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(a-u)*g,this._z=(o-r)*g}else if(i>s&&i>h){const g=2*Math.sqrt(1+i-s-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(a+u)/g}else if(s>h){const g=2*Math.sqrt(1+s-i-h);this._w=(a-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-s);this._w=(o-r)/g,this._x=(a+u)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,u=t._z,f=t._w;return this._x=i*f+o*s+r*u-a*l,this._y=r*f+o*l+a*s-i*u,this._z=a*f+o*u+i*l-r*s,this._w=o*f-i*s-r*l-a*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,s),h=Math.sin((1-t)*f)/u,d=Math.sin(t*f)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=a*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,u=l*t+o*r-s*i,f=l*i+s*t-a*r,h=l*r+a*i-o*t,d=-a*t-o*i-s*r;return this.x=u*l+d*-a+f*-s-h*-o,this.y=f*l+d*-o+h*-a-u*-s,this.z=h*l+d*-s+u*-o-f*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Su.copy(this).projectOnVector(e),this.sub(Su)}reflect(e){return this.sub(Su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Su=new U,gp=new Fo;function ta(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ry=new zt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Dy=new zt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),hi=new U;function Iy(n){return n.convertSRGBToLinear(),hi.set(n.r,n.g,n.b).applyMatrix3(Dy),n.setRGB(hi.x,hi.y,hi.z)}function ky(n){return hi.set(n.r,n.g,n.b).applyMatrix3(Ry),n.setRGB(hi.x,hi.y,hi.z).convertLinearToSRGB()}const Ny={[Ao]:n=>n,[Tn]:n=>n.convertSRGBToLinear(),[w0]:Iy},Oy={[Ao]:n=>n,[Tn]:n=>n.convertLinearToSRGB(),[w0]:ky},Nt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Ao},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ny[e],r=Oy[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let vr;class b0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vr===void 0&&(vr=ol("canvas")),vr.width=e.width,vr.height=e.height;const i=vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=ol("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=ta(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ta(t[i]/255)*255):t[i]=ta(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class E0{constructor(e=null){this.isSource=!0,this.uuid=Oo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Mu(r[o].image)):a.push(Mu(r[o]))}else a=Mu(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Mu(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?b0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fy=0;class Jt extends _a{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=xn,r=xn,a=on,o=To,s=yn,l=or,u=Jt.DEFAULT_ANISOTROPY,f=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Oo(),this.name="",this.source=new E0(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fc:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fc:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=y0;Jt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],g=l[5],y=l[9],p=l[2],c=l[6],m=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-p)<.01&&Math.abs(y-c)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+p)<.1&&Math.abs(y+c)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,x=(g+1)/2,b=(m+1)/2,T=(f+d)/4,A=(h+p)/4,S=(y+c)/4;return _>x&&_>b?_<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(_),r=T/i,a=A/i):x>b?x<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(x),i=T/r,a=S/r):b<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(b),i=A/a,r=S/a),this.set(i,r,a,t),this}let v=Math.sqrt((c-y)*(c-y)+(h-p)*(h-p)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(c-y)/v,this.y=(h-p)/v,this.z=(d-f)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lr extends _a{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:on,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new E0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class T0 extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zy extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,a=-1/0,o=-1/0,s=-1/0;for(let l=0,u=e.length;l<u;l+=3){const f=e[l],h=e[l+1],d=e[l+2];f<t&&(t=f),h<i&&(i=h),d<r&&(r=d),f>a&&(a=f),h>o&&(o=h),d>s&&(s=d)}return this.min.set(t,i,r),this.max.set(a,o,s),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,a=-1/0,o=-1/0,s=-1/0;for(let l=0,u=e.count;l<u;l++){const f=e.getX(l),h=e.getY(l),d=e.getZ(l);f<t&&(t=f),h<i&&(i=h),d<r&&(r=d),f>a&&(a=f),h>o&&(o=h),d>s&&(s=d)}return this.min.set(t,i,r),this.max.set(a,o,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const a=i.attributes.position;for(let o=0,s=a.count;o<s;o++)Ui.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ui)}else i.boundingBox===null&&i.computeBoundingBox(),bu.copy(i.boundingBox),bu.applyMatrix4(e.matrixWorld),this.union(bu);const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),ts.subVectors(this.max,ka),_r.subVectors(e.a,ka),xr.subVectors(e.b,ka),yr.subVectors(e.c,ka),ni.subVectors(xr,_r),ii.subVectors(yr,xr),Bi.subVectors(_r,yr);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Bi.z,Bi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Bi.z,0,-Bi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Bi.y,Bi.x,0];return!Eu(t,_r,xr,yr,ts)||(t=[1,0,0,0,1,0,0,0,1],!Eu(t,_r,xr,yr,ts))?!1:(ns.crossVectors(ni,ii),t=[ns.x,ns.y,ns.z],Eu(t,_r,xr,yr,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new U,new U,new U,new U,new U,new U,new U,new U],Ui=new U,bu=new zo,_r=new U,xr=new U,yr=new U,ni=new U,ii=new U,Bi=new U,ka=new U,ts=new U,ns=new U,Gi=new U;function Eu(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){Gi.fromArray(n,a);const s=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),l=e.dot(Gi),u=t.dot(Gi),f=i.dot(Gi);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>s)return!1}return!0}const Uy=new zo,Na=new U,Tu=new U;class ed{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Uy.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const t=Na.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(Tu)),this.expandByPoint(Na.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new U,Cu=new U,is=new U,ri=new U,Au=new U,rs=new U,Lu=new U;class By{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Cu.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Cu);const a=e.distanceTo(t)*.5,o=-this.direction.dot(is),s=ri.dot(this.direction),l=-ri.dot(is),u=ri.lengthSq(),f=Math.abs(1-o*o);let h,d,g,y;if(f>0)if(h=o*l-s,d=o*s-l,y=a*f,h>=0)if(d>=-y)if(d<=y){const p=1/f;h*=p,d*=p,g=h*(h+o*d+2*s)+d*(o*h+d+2*l)+u}else d=a,h=Math.max(0,-(o*d+s)),g=-h*h+d*(d+2*l)+u;else d=-a,h=Math.max(0,-(o*d+s)),g=-h*h+d*(d+2*l)+u;else d<=-y?(h=Math.max(0,-(-o*a+s)),d=h>0?-a:Math.min(Math.max(-a,-l),a),g=-h*h+d*(d+2*l)+u):d<=y?(h=0,d=Math.min(Math.max(-a,-l),a),g=d*(d+2*l)+u):(h=Math.max(0,-(o*a+s)),d=h>0?a:Math.min(Math.max(-a,-l),a),g=-h*h+d*(d+2*l)+u);else d=o>0?-a:a,h=Math.max(0,-(o*d+s)),g=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Cu).addScaledVector(is,d),g}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(a=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(a=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),h>=0?(s=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,r,a){Au.subVectors(t,e),rs.subVectors(i,e),Lu.crossVectors(Au,rs);let o=this.direction.dot(Lu),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=s*this.direction.dot(rs.crossVectors(ri,rs));if(l<0)return null;const u=s*this.direction.dot(Au.cross(ri));if(u<0||l+u>o)return null;const f=-s*ri.dot(Lu);return f<0?null:this.at(f/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,a,o,s,l,u,f,h,d,g,y,p,c){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=a,m[5]=o,m[9]=s,m[13]=l,m[2]=u,m[6]=f,m[10]=h,m[14]=d,m[3]=g,m[7]=y,m[11]=p,m[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Sr.setFromMatrixColumn(e,0).length(),a=1/Sr.setFromMatrixColumn(e,1).length(),o=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const d=o*f,g=o*h,y=s*f,p=s*h;t[0]=l*f,t[4]=-l*h,t[8]=u,t[1]=g+y*u,t[5]=d-p*u,t[9]=-s*l,t[2]=p-d*u,t[6]=y+g*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*f,g=l*h,y=u*f,p=u*h;t[0]=d+p*s,t[4]=y*s-g,t[8]=o*u,t[1]=o*h,t[5]=o*f,t[9]=-s,t[2]=g*s-y,t[6]=p+d*s,t[10]=o*l}else if(e.order==="ZXY"){const d=l*f,g=l*h,y=u*f,p=u*h;t[0]=d-p*s,t[4]=-o*h,t[8]=y+g*s,t[1]=g+y*s,t[5]=o*f,t[9]=p-d*s,t[2]=-o*u,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const d=o*f,g=o*h,y=s*f,p=s*h;t[0]=l*f,t[4]=y*u-g,t[8]=d*u+p,t[1]=l*h,t[5]=p*u+d,t[9]=g*u-y,t[2]=-u,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*u,y=s*l,p=s*u;t[0]=l*f,t[4]=p-d*h,t[8]=y*h+g,t[1]=h,t[5]=o*f,t[9]=-s*f,t[2]=-u*f,t[6]=g*h+y,t[10]=d-p*h}else if(e.order==="XZY"){const d=o*l,g=o*u,y=s*l,p=s*u;t[0]=l*f,t[4]=-h,t[8]=u*f,t[1]=d*h+p,t[5]=o*f,t[9]=g*h-y,t[2]=y*h-g,t[6]=s*f,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gy,e,Vy)}lookAt(e,t,i){const r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),ai.crossVectors(i,qt),ai.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),ai.crossVectors(i,qt)),ai.normalize(),as.crossVectors(qt,ai),r[0]=ai.x,r[4]=as.x,r[8]=qt.x,r[1]=ai.y,r[5]=as.y,r[9]=qt.y,r[2]=ai.z,r[6]=as.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],g=i[13],y=i[2],p=i[6],c=i[10],m=i[14],v=i[3],_=i[7],x=i[11],b=i[15],T=r[0],A=r[4],S=r[8],M=r[12],R=r[1],Q=r[5],q=r[9],F=r[13],I=r[2],k=r[6],O=r[10],W=r[14],V=r[3],K=r[7],Y=r[11],G=r[15];return a[0]=o*T+s*R+l*I+u*V,a[4]=o*A+s*Q+l*k+u*K,a[8]=o*S+s*q+l*O+u*Y,a[12]=o*M+s*F+l*W+u*G,a[1]=f*T+h*R+d*I+g*V,a[5]=f*A+h*Q+d*k+g*K,a[9]=f*S+h*q+d*O+g*Y,a[13]=f*M+h*F+d*W+g*G,a[2]=y*T+p*R+c*I+m*V,a[6]=y*A+p*Q+c*k+m*K,a[10]=y*S+p*q+c*O+m*Y,a[14]=y*M+p*F+c*W+m*G,a[3]=v*T+_*R+x*I+b*V,a[7]=v*A+_*Q+x*k+b*K,a[11]=v*S+_*q+x*O+b*Y,a[15]=v*M+_*F+x*W+b*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],g=e[14],y=e[3],p=e[7],c=e[11],m=e[15];return y*(+a*l*h-r*u*h-a*s*d+i*u*d+r*s*g-i*l*g)+p*(+t*l*g-t*u*d+a*o*d-r*o*g+r*u*f-a*l*f)+c*(+t*u*h-t*s*g-a*o*h+i*o*g+a*s*f-i*u*f)+m*(-r*s*f-t*l*h+t*s*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],g=e[11],y=e[12],p=e[13],c=e[14],m=e[15],v=h*c*u-p*d*u+p*l*g-s*c*g-h*l*m+s*d*m,_=y*d*u-f*c*u-y*l*g+o*c*g+f*l*m-o*d*m,x=f*p*u-y*h*u+y*s*g-o*p*g-f*s*m+o*h*m,b=y*h*l-f*p*l-y*s*d+o*p*d+f*s*c-o*h*c,T=t*v+i*_+r*x+a*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(p*d*a-h*c*a-p*r*g+i*c*g+h*r*m-i*d*m)*A,e[2]=(s*c*a-p*l*a+p*r*u-i*c*u-s*r*m+i*l*m)*A,e[3]=(h*l*a-s*d*a-h*r*u+i*d*u+s*r*g-i*l*g)*A,e[4]=_*A,e[5]=(f*c*a-y*d*a+y*r*g-t*c*g-f*r*m+t*d*m)*A,e[6]=(y*l*a-o*c*a-y*r*u+t*c*u+o*r*m-t*l*m)*A,e[7]=(o*d*a-f*l*a+f*r*u-t*d*u-o*r*g+t*l*g)*A,e[8]=x*A,e[9]=(y*h*a-f*p*a-y*i*g+t*p*g+f*i*m-t*h*m)*A,e[10]=(o*p*a-y*s*a+y*i*u-t*p*u-o*i*m+t*s*m)*A,e[11]=(f*s*a-o*h*a-f*i*u+t*h*u+o*i*g-t*s*g)*A,e[12]=b*A,e[13]=(f*p*r-y*h*r+y*i*d-t*p*d-f*i*c+t*h*c)*A,e[14]=(y*s*r-o*p*r-y*i*l+t*p*l+o*i*c-t*s*c)*A,e[15]=(o*h*r-f*s*r+f*i*l-t*h*l-o*i*d+t*s*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,u=a*o,f=a*s;return this.set(u*o+i,u*s-r*l,u*l+r*s,0,u*s+r*l,f*s+i,f*l-r*o,0,u*l-r*s,f*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,u=a+a,f=o+o,h=s+s,d=a*u,g=a*f,y=a*h,p=o*f,c=o*h,m=s*h,v=l*u,_=l*f,x=l*h,b=i.x,T=i.y,A=i.z;return r[0]=(1-(p+m))*b,r[1]=(g+x)*b,r[2]=(y-_)*b,r[3]=0,r[4]=(g-x)*T,r[5]=(1-(d+m))*T,r[6]=(c+v)*T,r[7]=0,r[8]=(y+_)*A,r[9]=(c-v)*A,r[10]=(1-(d+p))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Sr.set(r[0],r[1],r[2]).length();const o=Sr.set(r[4],r[5],r[6]).length(),s=Sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],pn.copy(this);const u=1/a,f=1/o,h=1/s;return pn.elements[0]*=u,pn.elements[1]*=u,pn.elements[2]*=u,pn.elements[4]*=f,pn.elements[5]*=f,pn.elements[6]*=f,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,t.setFromRotationMatrix(pn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o){const s=this.elements,l=2*a/(t-e),u=2*a/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),d=-(o+a)/(o-a),g=-2*o*a/(o-a);return s[0]=l,s[4]=0,s[8]=f,s[12]=0,s[1]=0,s[5]=u,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=d,s[14]=g,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,i,r,a,o){const s=this.elements,l=1/(t-e),u=1/(i-r),f=1/(o-a),h=(t+e)*l,d=(i+r)*u,g=(o+a)*f;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*u,s[9]=0,s[13]=-d,s[2]=0,s[6]=0,s[10]=-2*f,s[14]=-g,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Sr=new U,pn=new bt,Gy=new U(0,0,0),Vy=new U(1,1,1),ai=new U,as=new U,qt=new U,vp=new bt,_p=new Fo;class Al{constructor(e=0,t=0,i=0,r=Al.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(s,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,g));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _p.setFromEuler(this),this.setFromQuaternion(_p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Al.DEFAULT_ORDER="XYZ";class C0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hy=0;const xp=new U,wr=new Fo,Un=new bt,os=new U,Oa=new U,Wy=new U,jy=new Fo,yp=new U(1,0,0),Sp=new U(0,1,0),wp=new U(0,0,1),Xy={type:"added"},Mp={type:"removed"};class en extends _a{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new U,t=new Al,i=new Fo,r=new U(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new zt}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new C0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(yp,e)}rotateY(e){return this.rotateOnAxis(Sp,e)}rotateZ(e){return this.rotateOnAxis(wp,e)}translateOnAxis(e,t){return xp.copy(e).applyQuaternion(this.quaternion),this.position.add(xp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yp,e)}translateY(e){return this.translateOnAxis(Sp,e)}translateZ(e){return this.translateOnAxis(wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?os.copy(e):os.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Oa,os,this.up):Un.lookAt(os,Oa,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(Un),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Mp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,Wy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,jy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),g=o(e.animations),y=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(s){const l=[];for(const u in s){const f=s[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}en.DEFAULT_UP=new U(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new U,Bn=new U,Pu=new U,Gn=new U,Mr=new U,br=new U,bp=new U,Ru=new U,Du=new U,Iu=new U;class Wn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),mn.subVectors(e,t),r.cross(mn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){mn.subVectors(r,t),Bn.subVectors(i,t),Pu.subVectors(e,t);const o=mn.dot(mn),s=mn.dot(Bn),l=mn.dot(Pu),u=Bn.dot(Bn),f=Bn.dot(Pu),h=o*u-s*s;if(h===0)return a.set(-2,-1,-1);const d=1/h,g=(u*l-s*f)*d,y=(o*f-s*l)*d;return a.set(1-g-y,y,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gn),Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getUV(e,t,i,r,a,o,s,l){return this.getBarycoord(e,t,i,r,Gn),l.set(0,0),l.addScaledVector(a,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(s,Gn.z),l}static isFrontFacing(e,t,i,r){return mn.subVectors(i,t),Bn.subVectors(e,t),mn.cross(Bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),mn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return Wn.getUV(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;Mr.subVectors(r,i),br.subVectors(a,i),Ru.subVectors(e,i);const l=Mr.dot(Ru),u=br.dot(Ru);if(l<=0&&u<=0)return t.copy(i);Du.subVectors(e,r);const f=Mr.dot(Du),h=br.dot(Du);if(f>=0&&h<=f)return t.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(Mr,o);Iu.subVectors(e,a);const g=Mr.dot(Iu),y=br.dot(Iu);if(y>=0&&g<=y)return t.copy(a);const p=g*u-l*y;if(p<=0&&u>=0&&y<=0)return s=u/(u-y),t.copy(i).addScaledVector(br,s);const c=f*y-g*h;if(c<=0&&h-f>=0&&g-y>=0)return bp.subVectors(a,r),s=(h-f)/(h-f+(g-y)),t.copy(r).addScaledVector(bp,s);const m=1/(c+p+d);return o=p*m,s=d*m,t.copy(i).addScaledVector(Mr,o).addScaledVector(br,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let $y=0;class Ll extends _a{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=Jr,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=v0,this.blendDst=_0,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=kc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ay,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vu,this.stencilZFail=vu,this.stencilZPass=vu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const A0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},ss={h:0,s:0,l:0};function ku(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Nt.workingColorSpace){if(e=Ly(e,1),t=Zt(t,0,1),i=Zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=ku(o,a,e+1/3),this.g=ku(o,a,e),this.b=ku(o,a,e-1/3)}return Nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Tn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,Nt.toWorkingColorSpace(this,t),i(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,Nt.toWorkingColorSpace(this,t),i(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(a[1])/360,u=parseFloat(a[2])/100,f=parseFloat(a[3])/100;return i(a[4]),this.setHSL(l,u,f,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,Nt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,Nt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const i=A0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}copyLinearToSRGB(e){return this.r=wu(e.r),this.g=wu(e.g),this.b=wu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Nt.fromWorkingColorSpace(At.copy(this),e),Zt(At.r*255,0,255)<<16^Zt(At.g*255,0,255)<<8^Zt(At.b*255,0,255)<<0}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(At.copy(this),t);const i=At.r,r=At.g,a=At.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,u;const f=(s+o)/2;if(s===o)l=0,u=0;else{const h=o-s;switch(u=f<=.5?h/(o+s):h/(2-o-s),o){case i:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-i)/h+2;break;case a:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Tn){Nt.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(gn),gn.h+=e,gn.s+=t,gn.l+=i,this.setHSL(gn.h,gn.s,gn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(ss);const i=xu(gn.h,ss.h,t),r=xu(gn.s,ss.s,t),a=xu(gn.l,ss.l,t);return this.setHSL(i,r,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Qe;Qe.NAMES=A0;class L0 extends Ll{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=x0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new U,ls=new Ve;class kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=es(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=es(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=es(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array),a=$t(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class P0 extends kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class R0 extends kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nr extends kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let qy=0;const an=new bt,Nu=new en,Er=new U,Yt=new zo,Fa=new zo,xt=new U;class mr extends _a{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(M0(e)?R0:P0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new zt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return Nu.lookAt(e),Nu.updateMatrix(),this.applyMatrix4(Nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new nr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Yt.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ed);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Fa.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(Yt.min,Fa.min),Yt.expandByPoint(xt),xt.addVectors(Yt.max,Fa.max),Yt.expandByPoint(xt)):(Yt.expandByPoint(Fa.min),Yt.expandByPoint(Fa.max))}Yt.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)xt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(xt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let u=0,f=s.count;u<f;u++)xt.fromBufferAttribute(s,u),l&&(Er.fromBufferAttribute(e,u),xt.add(Er)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let R=0;R<s;R++)u[R]=new U,f[R]=new U;const h=new U,d=new U,g=new U,y=new Ve,p=new Ve,c=new Ve,m=new U,v=new U;function _(R,Q,q){h.fromArray(r,R*3),d.fromArray(r,Q*3),g.fromArray(r,q*3),y.fromArray(o,R*2),p.fromArray(o,Q*2),c.fromArray(o,q*2),d.sub(h),g.sub(h),p.sub(y),c.sub(y);const F=1/(p.x*c.y-c.x*p.y);!isFinite(F)||(m.copy(d).multiplyScalar(c.y).addScaledVector(g,-p.y).multiplyScalar(F),v.copy(g).multiplyScalar(p.x).addScaledVector(d,-c.x).multiplyScalar(F),u[R].add(m),u[Q].add(m),u[q].add(m),f[R].add(v),f[Q].add(v),f[q].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let R=0,Q=x.length;R<Q;++R){const q=x[R],F=q.start,I=q.count;for(let k=F,O=F+I;k<O;k+=3)_(i[k+0],i[k+1],i[k+2])}const b=new U,T=new U,A=new U,S=new U;function M(R){A.fromArray(a,R*3),S.copy(A);const Q=u[R];b.copy(Q),b.sub(A.multiplyScalar(A.dot(Q))).normalize(),T.crossVectors(S,Q);const F=T.dot(f[R])<0?-1:1;l[R*4]=b.x,l[R*4+1]=b.y,l[R*4+2]=b.z,l[R*4+3]=F}for(let R=0,Q=x.length;R<Q;++R){const q=x[R],F=q.start,I=q.count;for(let k=F,O=F+I;k<O;k+=3)M(i[k+0]),M(i[k+1]),M(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new U,a=new U,o=new U,s=new U,l=new U,u=new U,f=new U,h=new U;if(e)for(let d=0,g=e.count;d<g;d+=3){const y=e.getX(d+0),p=e.getX(d+1),c=e.getX(d+2);r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),o.fromBufferAttribute(t,c),f.subVectors(o,a),h.subVectors(r,a),f.cross(h),s.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,c),s.add(f),l.add(f),u.add(f),i.setXYZ(y,s.x,s.y,s.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(c,u.x,u.y,u.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),f.subVectors(o,a),h.subVectors(r,a),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(s,l){const u=s.array,f=s.itemSize,h=s.normalized,d=new u.constructor(l.length*f);let g=0,y=0;for(let p=0,c=l.length;p<c;p++){s.isInterleavedBufferAttribute?g=l[p]*s.data.stride+s.offset:g=l[p]*f;for(let m=0;m<f;m++)d[y++]=u[g++]}return new kn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mr,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],u=e(l,i);t.setAttribute(s,u)}const a=this.morphAttributes;for(const s in a){const l=[],u=a[s];for(let f=0,h=u.length;f<h;f++){const d=u[f],g=e(d,i);l.push(g)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const u=o[s];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const g=u[h];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const a=e.morphAttributes;for(const u in a){const f=[],h=a[u];for(let d=0,g=h.length;d<g;d++)f.push(h[d].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ep=new bt,En=new By,us=new ed,Tp=new U,za=new U,Ua=new U,Ba=new U,Ou=new U,cs=new U,fs=new Ve,ds=new Ve,hs=new Ve,Fu=new U,ps=new U;class $n extends en{constructor(e=new mr,t=new L0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){cs.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const f=s[l],h=a[l];f!==0&&(Ou.fromBufferAttribute(h,e),o?cs.addScaledVector(Ou,f):cs.addScaledVector(Ou.sub(t),f))}t.add(cs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),us.copy(i.boundingSphere),us.applyMatrix4(a),En.copy(e.ray).recast(e.near),us.containsPoint(En.origin)===!1&&(En.intersectSphere(us,Tp)===null||En.origin.distanceToSquared(Tp)>(e.far-e.near)**2))||(Ep.copy(a).invert(),En.copy(e.ray).applyMatrix4(Ep),i.boundingBox!==null&&En.intersectsBox(i.boundingBox)===!1))return;let o;const s=i.index,l=i.attributes.position,u=i.attributes.uv,f=i.attributes.uv2,h=i.groups,d=i.drawRange;if(s!==null)if(Array.isArray(r))for(let g=0,y=h.length;g<y;g++){const p=h[g],c=r[p.materialIndex],m=Math.max(p.start,d.start),v=Math.min(s.count,Math.min(p.start+p.count,d.start+d.count));for(let _=m,x=v;_<x;_+=3){const b=s.getX(_),T=s.getX(_+1),A=s.getX(_+2);o=ms(this,c,e,En,u,f,b,T,A),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const g=Math.max(0,d.start),y=Math.min(s.count,d.start+d.count);for(let p=g,c=y;p<c;p+=3){const m=s.getX(p),v=s.getX(p+1),_=s.getX(p+2);o=ms(this,r,e,En,u,f,m,v,_),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,y=h.length;g<y;g++){const p=h[g],c=r[p.materialIndex],m=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=m,x=v;_<x;_+=3){const b=_,T=_+1,A=_+2;o=ms(this,c,e,En,u,f,b,T,A),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=g,c=y;p<c;p+=3){const m=p,v=p+1,_=p+2;o=ms(this,r,e,En,u,f,m,v,_),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Yy(n,e,t,i,r,a,o,s){let l;if(e.side===Qt?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===Pi,s),l===null)return null;ps.copy(s),ps.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(ps);return u<t.near||u>t.far?null:{distance:u,point:ps.clone(),object:n}}function ms(n,e,t,i,r,a,o,s,l){n.getVertexPosition(o,za),n.getVertexPosition(s,Ua),n.getVertexPosition(l,Ba);const u=Yy(n,e,t,i,za,Ua,Ba,Fu);if(u){r&&(fs.fromBufferAttribute(r,o),ds.fromBufferAttribute(r,s),hs.fromBufferAttribute(r,l),u.uv=Wn.getUV(Fu,za,Ua,Ba,fs,ds,hs,new Ve)),a&&(fs.fromBufferAttribute(a,o),ds.fromBufferAttribute(a,s),hs.fromBufferAttribute(a,l),u.uv2=Wn.getUV(Fu,za,Ua,Ba,fs,ds,hs,new Ve));const f={a:o,b:s,c:l,normal:new U,materialIndex:0};Wn.getNormal(za,Ua,Ba,f.normal),u.face=f}return u}class Uo extends mr{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,g=0;y("z","y","x",-1,-1,i,t,e,o,a,0),y("z","y","x",1,-1,i,t,-e,o,a,1),y("x","z","y",1,1,e,i,t,r,o,2),y("x","z","y",1,-1,e,i,-t,r,o,3),y("x","y","z",1,-1,e,t,i,r,a,4),y("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new nr(u,3)),this.setAttribute("normal",new nr(f,3)),this.setAttribute("uv",new nr(h,2));function y(p,c,m,v,_,x,b,T,A,S,M){const R=x/A,Q=b/S,q=x/2,F=b/2,I=T/2,k=A+1,O=S+1;let W=0,V=0;const K=new U;for(let Y=0;Y<O;Y++){const G=Y*Q-F;for(let L=0;L<k;L++){const B=L*R-q;K[p]=B*v,K[c]=G*_,K[m]=I,u.push(K.x,K.y,K.z),K[p]=0,K[c]=0,K[m]=T>0?1:-1,f.push(K.x,K.y,K.z),h.push(L/A),h.push(1-Y/S),W+=1}}for(let Y=0;Y<S;Y++)for(let G=0;G<A;G++){const L=d+G+k*Y,B=d+G+k*(Y+1),J=d+(G+1)+k*(Y+1),D=d+(G+1)+k*Y;l.push(L,B,D),l.push(B,J,D),V+=6}s.addGroup(g,V,M),g+=V,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ca(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ot(n){const e={};for(let t=0;t<n.length;t++){const i=ca(n[t]);for(const r in i)e[r]=i[r]}return e}function Zy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function D0(n){return n.getRenderTarget()===null&&n.outputEncoding===qe?Tn:Ao}const Ky={clone:ca,merge:Ot};var Qy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Ll{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qy,this.fragmentShader=Jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=Zy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class I0 extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends I0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pp*2*Math.atan(Math.tan(_u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_u*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Tr=-90,Cr=1;class e1 extends en{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new _n(Tr,Cr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const a=new _n(Tr,Cr,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const o=new _n(Tr,Cr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new _n(Tr,Cr,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new _n(Tr,Cr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new _n(Tr,Cr,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,a,o,s,l,u]=this.children,f=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Yn,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,a),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(f),e.toneMapping=h,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class k0 extends Jt{constructor(e,t,i,r,a,o,s,l,u,f){e=e!==void 0?e:[],t=t!==void 0?t:sa,super(e,t,i,r,a,o,s,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class t1 extends lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new k0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Uo(5,5,5),a=new Ri({name:"CubemapFromEquirect",uniforms:ca(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:bi});a.uniforms.tEquirect.value=t;const o=new $n(r,a),s=t.minFilter;return t.minFilter===To&&(t.minFilter=on),new e1(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const zu=new U,n1=new U,i1=new zt;class Hi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=zu.subVectors(i,t).cross(n1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||i1.getNormalMatrix(e),r=this.coplanarPoint(zu).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new ed,gs=new U;class N0{constructor(e=new Hi,t=new Hi,i=new Hi,r=new Hi,a=new Hi,o=new Hi){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],s=i[3],l=i[4],u=i[5],f=i[6],h=i[7],d=i[8],g=i[9],y=i[10],p=i[11],c=i[12],m=i[13],v=i[14],_=i[15];return t[0].setComponents(s-r,h-l,p-d,_-c).normalize(),t[1].setComponents(s+r,h+l,p+d,_+c).normalize(),t[2].setComponents(s+a,h+u,p+g,_+m).normalize(),t[3].setComponents(s-a,h-u,p-g,_-m).normalize(),t[4].setComponents(s-o,h-f,p-y,_-v).normalize(),t[5].setComponents(s+o,h+f,p+y,_+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(gs.x=r.normal.x>0?e.max.x:e.min.x,gs.y=r.normal.y>0?e.max.y:e.min.y,gs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function O0(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function r1(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,d=u.usage,g=n.createBuffer();n.bindBuffer(f,g),n.bufferData(f,h,d),u.onUploadCallback();let y;if(h instanceof Float32Array)y=5126;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(h instanceof Int16Array)y=5122;else if(h instanceof Uint32Array)y=5125;else if(h instanceof Int32Array)y=5124;else if(h instanceof Int8Array)y=5120;else if(h instanceof Uint8Array)y=5121;else if(h instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function a(u,f,h){const d=f.array,g=f.updateRange;n.bindBuffer(h,u),g.count===-1?n.bufferSubData(h,0,d):(t?n.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):n.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(n.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,r(u,f)):h.version<u.version&&(a(h.buffer,u,f),h.version=u.version)}return{get:o,remove:s,update:l}}class Pl extends mr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),u=s+1,f=l+1,h=e/s,d=t/l,g=[],y=[],p=[],c=[];for(let m=0;m<f;m++){const v=m*d-o;for(let _=0;_<u;_++){const x=_*h-a;y.push(x,-v,0),p.push(0,0,1),c.push(_/s),c.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<s;v++){const _=v+u*m,x=v+u*(m+1),b=v+1+u*(m+1),T=v+1+u*m;g.push(_,x,T),g.push(x,b,T)}this.setIndex(g),this.setAttribute("position",new nr(y,3)),this.setAttribute("normal",new nr(p,3)),this.setAttribute("uv",new nr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.width,e.height,e.widthSegments,e.heightSegments)}}var a1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,o1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,l1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,c1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f1="vec3 transformed = vec3( position );",d1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h1=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,p1=`#ifdef USE_IRIDESCENCE
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
#endif`,m1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
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
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,M1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,b1=`#define PI 3.141592653589793
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
}`,E1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T1=`vec3 transformedNormal = objectNormal;
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
#endif`,C1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,L1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R1="gl_FragColor = linearToOutputTexel( gl_FragColor );",D1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I1=`#ifdef USE_ENVMAP
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
#endif`,k1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N1=`#ifdef USE_ENVMAP
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
#endif`,O1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F1=`#ifdef USE_ENVMAP
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
#endif`,z1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V1=`#ifdef USE_GRADIENTMAP
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
}`,H1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,W1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$1=`uniform bool receiveShadow;
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
#endif`,q1=`#if defined( USE_ENVMAP )
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
#endif`,Y1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,eS=`struct PhysicalMaterial {
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
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
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
}`,tS=`
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
#endif`,nS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
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
#endif`,iS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,rS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mS=`#ifdef USE_MORPHNORMALS
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
#endif`,gS=`#ifdef USE_MORPHTARGETS
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
#endif`,vS=`#ifdef USE_MORPHTARGETS
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
#endif`,_S=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,xS=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,bS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ES=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,TS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,CS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,PS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,US=`float getShadowMask() {
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
}`,BS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GS=`#ifdef USE_SKINNING
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
#endif`,VS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HS=`#ifdef USE_SKINNING
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
#endif`,WS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$S=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
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
#endif`,YS=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
#endif`,ZS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,KS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,QS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,JS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ew=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,tw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,nw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rw=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ow=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,uw=`#include <common>
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
}`,cw=`#if DEPTH_PACKING == 3200
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
}`,fw=`#define DISTANCE
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
}`,dw=`#define DISTANCE
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
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vw=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
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
}`,_w=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
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
}`,xw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,yw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
}`,Sw=`#define MATCAP
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
}`,ww=`#define MATCAP
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
}`,Mw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,Ew=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,Tw=`#define PHONG
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
#include <uv2_pars_fragment>
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
}`,Cw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,Aw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
}`,Lw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,Pw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
}`,Rw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,Dw=`uniform vec3 diffuse;
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
}`,Iw=`#include <common>
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
}`,kw=`uniform vec3 color;
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
}`,Nw=`uniform float rotation;
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
}`,Ow=`uniform vec3 diffuse;
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
}`,Le={alphamap_fragment:a1,alphamap_pars_fragment:o1,alphatest_fragment:s1,alphatest_pars_fragment:l1,aomap_fragment:u1,aomap_pars_fragment:c1,begin_vertex:f1,beginnormal_vertex:d1,bsdfs:h1,iridescence_fragment:p1,bumpmap_pars_fragment:m1,clipping_planes_fragment:g1,clipping_planes_pars_fragment:v1,clipping_planes_pars_vertex:_1,clipping_planes_vertex:x1,color_fragment:y1,color_pars_fragment:S1,color_pars_vertex:w1,color_vertex:M1,common:b1,cube_uv_reflection_fragment:E1,defaultnormal_vertex:T1,displacementmap_pars_vertex:C1,displacementmap_vertex:A1,emissivemap_fragment:L1,emissivemap_pars_fragment:P1,encodings_fragment:R1,encodings_pars_fragment:D1,envmap_fragment:I1,envmap_common_pars_fragment:k1,envmap_pars_fragment:N1,envmap_pars_vertex:O1,envmap_physical_pars_fragment:q1,envmap_vertex:F1,fog_vertex:z1,fog_pars_vertex:U1,fog_fragment:B1,fog_pars_fragment:G1,gradientmap_pars_fragment:V1,lightmap_fragment:H1,lightmap_pars_fragment:W1,lights_lambert_fragment:j1,lights_lambert_pars_fragment:X1,lights_pars_begin:$1,lights_toon_fragment:Y1,lights_toon_pars_fragment:Z1,lights_phong_fragment:K1,lights_phong_pars_fragment:Q1,lights_physical_fragment:J1,lights_physical_pars_fragment:eS,lights_fragment_begin:tS,lights_fragment_maps:nS,lights_fragment_end:iS,logdepthbuf_fragment:rS,logdepthbuf_pars_fragment:aS,logdepthbuf_pars_vertex:oS,logdepthbuf_vertex:sS,map_fragment:lS,map_pars_fragment:uS,map_particle_fragment:cS,map_particle_pars_fragment:fS,metalnessmap_fragment:dS,metalnessmap_pars_fragment:hS,morphcolor_vertex:pS,morphnormal_vertex:mS,morphtarget_pars_vertex:gS,morphtarget_vertex:vS,normal_fragment_begin:_S,normal_fragment_maps:xS,normal_pars_fragment:yS,normal_pars_vertex:SS,normal_vertex:wS,normalmap_pars_fragment:MS,clearcoat_normal_fragment_begin:bS,clearcoat_normal_fragment_maps:ES,clearcoat_pars_fragment:TS,iridescence_pars_fragment:CS,output_fragment:AS,packing:LS,premultiplied_alpha_fragment:PS,project_vertex:RS,dithering_fragment:DS,dithering_pars_fragment:IS,roughnessmap_fragment:kS,roughnessmap_pars_fragment:NS,shadowmap_pars_fragment:OS,shadowmap_pars_vertex:FS,shadowmap_vertex:zS,shadowmask_pars_fragment:US,skinbase_vertex:BS,skinning_pars_vertex:GS,skinning_vertex:VS,skinnormal_vertex:HS,specularmap_fragment:WS,specularmap_pars_fragment:jS,tonemapping_fragment:XS,tonemapping_pars_fragment:$S,transmission_fragment:qS,transmission_pars_fragment:YS,uv_pars_fragment:ZS,uv_pars_vertex:KS,uv_vertex:QS,uv2_pars_fragment:JS,uv2_pars_vertex:ew,uv2_vertex:tw,worldpos_vertex:nw,background_vert:iw,background_frag:rw,backgroundCube_vert:aw,backgroundCube_frag:ow,cube_vert:sw,cube_frag:lw,depth_vert:uw,depth_frag:cw,distanceRGBA_vert:fw,distanceRGBA_frag:dw,equirect_vert:hw,equirect_frag:pw,linedashed_vert:mw,linedashed_frag:gw,meshbasic_vert:vw,meshbasic_frag:_w,meshlambert_vert:xw,meshlambert_frag:yw,meshmatcap_vert:Sw,meshmatcap_frag:ww,meshnormal_vert:Mw,meshnormal_frag:bw,meshphong_vert:Ew,meshphong_frag:Tw,meshphysical_vert:Cw,meshphysical_frag:Aw,meshtoon_vert:Lw,meshtoon_frag:Pw,points_vert:Rw,points_frag:Dw,shadow_vert:Iw,shadow_frag:kw,sprite_vert:Nw,sprite_frag:Ow},ae={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new zt},uv2Transform:{value:new zt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}}},Cn={basic:{uniforms:Ot([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Ot([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Ot([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Ot([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Ot([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Ot([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Ot([ae.points,ae.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Ot([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Ot([ae.common,ae.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Ot([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Ot([ae.sprite,ae.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Ot([ae.common,ae.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Ot([ae.lights,ae.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Cn.physical={uniforms:Ot([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const vs={r:0,b:0,g:0};function Fw(n,e,t,i,r,a,o){const s=new Qe(0);let l=a===!0?0:1,u,f,h=null,d=0,g=null;function y(c,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_));const x=n.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(_=null),_===null?p(s,l):_&&_.isColor&&(p(_,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Cl)?(f===void 0&&(f=new $n(new Uo(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:ca(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,f.material.toneMapped=_.encoding!==qe,(h!==_||d!==_.version||g!==n.toneMapping)&&(f.material.needsUpdate=!0,h=_,d=_.version,g=n.toneMapping),f.layers.enableAll(),c.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new $n(new Pl(2,2),new Ri({name:"BackgroundMaterial",uniforms:ca(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=_.encoding!==qe,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,g=n.toneMapping),u.layers.enableAll(),c.unshift(u,u.geometry,u.material,0,0,null))}function p(c,m){c.getRGB(vs,D0(n)),i.buffers.color.setClear(vs.r,vs.g,vs.b,m,o)}return{getClearColor:function(){return s},setClearColor:function(c,m=1){s.set(c),l=m,p(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(c){l=c,p(s,l)},render:y}}function zw(n,e,t,i){const r=n.getParameter(34921),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=c(null);let u=l,f=!1;function h(I,k,O,W,V){let K=!1;if(o){const Y=p(W,O,k);u!==Y&&(u=Y,g(u.object)),K=m(I,W,O,V),K&&v(I,W,O,V)}else{const Y=k.wireframe===!0;(u.geometry!==W.id||u.program!==O.id||u.wireframe!==Y)&&(u.geometry=W.id,u.program=O.id,u.wireframe=Y,K=!0)}V!==null&&t.update(V,34963),(K||f)&&(f=!1,S(I,k,O,W),V!==null&&n.bindBuffer(34963,t.get(V).buffer))}function d(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function g(I){return i.isWebGL2?n.bindVertexArray(I):a.bindVertexArrayOES(I)}function y(I){return i.isWebGL2?n.deleteVertexArray(I):a.deleteVertexArrayOES(I)}function p(I,k,O){const W=O.wireframe===!0;let V=s[I.id];V===void 0&&(V={},s[I.id]=V);let K=V[k.id];K===void 0&&(K={},V[k.id]=K);let Y=K[W];return Y===void 0&&(Y=c(d()),K[W]=Y),Y}function c(I){const k=[],O=[],W=[];for(let V=0;V<r;V++)k[V]=0,O[V]=0,W[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:O,attributeDivisors:W,object:I,attributes:{},index:null}}function m(I,k,O,W){const V=u.attributes,K=k.attributes;let Y=0;const G=O.getAttributes();for(const L in G)if(G[L].location>=0){const J=V[L];let D=K[L];if(D===void 0&&(L==="instanceMatrix"&&I.instanceMatrix&&(D=I.instanceMatrix),L==="instanceColor"&&I.instanceColor&&(D=I.instanceColor)),J===void 0||J.attribute!==D||D&&J.data!==D.data)return!0;Y++}return u.attributesNum!==Y||u.index!==W}function v(I,k,O,W){const V={},K=k.attributes;let Y=0;const G=O.getAttributes();for(const L in G)if(G[L].location>=0){let J=K[L];J===void 0&&(L==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),L==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));const D={};D.attribute=J,J&&J.data&&(D.data=J.data),V[L]=D,Y++}u.attributes=V,u.attributesNum=Y,u.index=W}function _(){const I=u.newAttributes;for(let k=0,O=I.length;k<O;k++)I[k]=0}function x(I){b(I,0)}function b(I,k){const O=u.newAttributes,W=u.enabledAttributes,V=u.attributeDivisors;O[I]=1,W[I]===0&&(n.enableVertexAttribArray(I),W[I]=1),V[I]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),V[I]=k)}function T(){const I=u.newAttributes,k=u.enabledAttributes;for(let O=0,W=k.length;O<W;O++)k[O]!==I[O]&&(n.disableVertexAttribArray(O),k[O]=0)}function A(I,k,O,W,V,K){i.isWebGL2===!0&&(O===5124||O===5125)?n.vertexAttribIPointer(I,k,O,V,K):n.vertexAttribPointer(I,k,O,W,V,K)}function S(I,k,O,W){if(i.isWebGL2===!1&&(I.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const V=W.attributes,K=O.getAttributes(),Y=k.defaultAttributeValues;for(const G in K){const L=K[G];if(L.location>=0){let B=V[G];if(B===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(B=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(B=I.instanceColor)),B!==void 0){const J=B.normalized,D=B.itemSize,le=t.get(B);if(le===void 0)continue;const se=le.buffer,ne=le.type,oe=le.bytesPerElement;if(B.isInterleavedBufferAttribute){const ge=B.data,be=ge.stride,Ae=B.offset;if(ge.isInstancedInterleavedBuffer){for(let Ie=0;Ie<L.locationSize;Ie++)b(L.location+Ie,ge.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ie=0;Ie<L.locationSize;Ie++)x(L.location+Ie);n.bindBuffer(34962,se);for(let Ie=0;Ie<L.locationSize;Ie++)A(L.location+Ie,D/L.locationSize,ne,J,be*oe,(Ae+D/L.locationSize*Ie)*oe)}else{if(B.isInstancedBufferAttribute){for(let ge=0;ge<L.locationSize;ge++)b(L.location+ge,B.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ge=0;ge<L.locationSize;ge++)x(L.location+ge);n.bindBuffer(34962,se);for(let ge=0;ge<L.locationSize;ge++)A(L.location+ge,D/L.locationSize,ne,J,D*oe,D/L.locationSize*ge*oe)}}else if(Y!==void 0){const J=Y[G];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(L.location,J);break;case 3:n.vertexAttrib3fv(L.location,J);break;case 4:n.vertexAttrib4fv(L.location,J);break;default:n.vertexAttrib1fv(L.location,J)}}}}T()}function M(){q();for(const I in s){const k=s[I];for(const O in k){const W=k[O];for(const V in W)y(W[V].object),delete W[V];delete k[O]}delete s[I]}}function R(I){if(s[I.id]===void 0)return;const k=s[I.id];for(const O in k){const W=k[O];for(const V in W)y(W[V].object),delete W[V];delete k[O]}delete s[I.id]}function Q(I){for(const k in s){const O=s[k];if(O[I.id]===void 0)continue;const W=O[I.id];for(const V in W)y(W[V].object),delete W[V];delete O[I.id]}}function q(){F(),f=!0,u!==l&&(u=l,g(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:F,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfProgram:Q,initAttributes:_,enableAttribute:x,disableUnusedAttributes:T}}function Uw(n,e,t,i){const r=i.isWebGL2;let a;function o(u){a=u}function s(u,f){n.drawArrays(a,u,f),t.update(f,a,1)}function l(u,f,h){if(h===0)return;let d,g;if(r)d=n,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](a,u,f,h),t.update(f,a,h)}this.setMode=o,this.render=s,this.renderInstances=l}function Bw(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){if(A==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const u=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,h=n.getParameter(34930),d=n.getParameter(35660),g=n.getParameter(3379),y=n.getParameter(34076),p=n.getParameter(34921),c=n.getParameter(36347),m=n.getParameter(36348),v=n.getParameter(36349),_=d>0,x=o||e.has("OES_texture_float"),b=_&&x,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:y,maxAttributes:p,maxVertexUniforms:c,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:T}}function Gw(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new Hi,s=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,g){const y=h.clippingPlanes,p=h.clipIntersection,c=h.clipShadows,m=n.get(h);if(!r||y===null||y.length===0||a&&!c)a?f(null):u();else{const v=a?0:i,_=v*4;let x=m.clippingState||null;l.value=x,x=f(y,d,_,g);for(let b=0;b!==_;++b)x[b]=t[b];m.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,g,y){const p=h!==null?h.length:0;let c=null;if(p!==0){if(c=l.value,y!==!0||c===null){const m=g+p*4,v=d.matrixWorldInverse;s.getNormalMatrix(v),(c===null||c.length<m)&&(c=new Float32Array(m));for(let _=0,x=g;_!==p;++_,x+=4)o.copy(h[_]).applyMatrix4(v,s),o.normal.toArray(c,x),c[x+3]=o.constant}l.value=c,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,c}}function Vw(n){let e=new WeakMap;function t(o,s){return s===Nc?o.mapping=sa:s===Oc&&(o.mapping=la),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Nc||s===Oc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new t1(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class F0 extends I0{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,s-=f*this.view.offsetY,l=s-f*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ur=4,Cp=[.125,.215,.35,.446,.526,.582],ji=20,Uu=new F0,Ap=new Qe;let Bu=null;const Wi=(1+Math.sqrt(5))/2,Lr=1/Wi,Lp=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Wi,Lr),new U(0,Wi,-Lr),new U(Lr,0,Wi),new U(-Lr,0,Wi),new U(Wi,Lr,0),new U(-Wi,Lr,0)];class Pp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Bu=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu),e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sa||e.mapping===la?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Co,format:yn,encoding:sr,depthBuffer:!1},r=Rp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rp(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hw(a)),this._blurMaterial=Ww(a,e,t)}return r}_compileMaterial(e){const t=new $n(this._lodPlanes[0],e);this._renderer.compile(t,Uu)}_sceneToCubeUV(e,t,i,r){const s=new _n(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Ap),f.toneMapping=Yn,f.autoClear=!1;const g=new L0({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),y=new $n(new Uo,g);let p=!1;const c=e.background;c?c.isColor&&(g.color.copy(c),e.background=null,p=!0):(g.color.copy(Ap),p=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(s.up.set(0,l[m],0),s.lookAt(u[m],0,0)):v===1?(s.up.set(0,0,l[m]),s.lookAt(0,u[m],0)):(s.up.set(0,l[m],0),s.lookAt(0,0,u[m]));const _=this._cubeSize;_s(r,v*_,m>2?_:0,_,_),f.setRenderTarget(r),p&&f.render(y,s),f.render(e,s)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=c}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===sa||e.mapping===la;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dp());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new $n(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;_s(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Uu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lp[(r-1)%Lp.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new $n(this._lodPlanes[r],u),d=u.uniforms,g=this._sizeLods[i]-1,y=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*ji-1),p=a/y,c=isFinite(a)?1+Math.floor(f*p):ji;c>ji&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${ji}`);const m=[];let v=0;for(let A=0;A<ji;++A){const S=A/p,M=Math.exp(-S*S/2);m.push(M),A===0?v+=M:A<c&&(v+=2*M)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;d.envMap.value=e.texture,d.samples.value=c,d.weights.value=m,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:_}=this;d.dTheta.value=y,d.mipInt.value=_-i;const x=this._sizeLods[r],b=3*x*(r>_-Ur?r-_+Ur:0),T=4*(this._cubeSize-x);_s(t,b,T,3*x,2*x),l.setRenderTarget(t),l.render(h,Uu)}}function Hw(n){const e=[],t=[],i=[];let r=n;const a=n-Ur+1+Cp.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>n-Ur?l=Cp[o-n+Ur-1]:o===0&&(l=0),i.push(l);const u=1/(s-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,y=6,p=3,c=2,m=1,v=new Float32Array(p*y*g),_=new Float32Array(c*y*g),x=new Float32Array(m*y*g);for(let T=0;T<g;T++){const A=T%3*2/3-1,S=T>2?0:-1,M=[A,S,0,A+2/3,S,0,A+2/3,S+1,0,A,S,0,A+2/3,S+1,0,A,S+1,0];v.set(M,p*y*T),_.set(d,c*y*T);const R=[T,T,T,T,T,T];x.set(R,m*y*T)}const b=new mr;b.setAttribute("position",new kn(v,p)),b.setAttribute("uv",new kn(_,c)),b.setAttribute("faceIndex",new kn(x,m)),e.push(b),r>Ur&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rp(n,e,t){const i=new lr(n,e,t);return i.texture.mapping=Cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _s(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ww(n,e,t){const i=new Float32Array(ji),r=new U(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:td(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Dp(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:td(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Ip(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function td(){return`

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
	`}function jw(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,u=l===Nc||l===Oc,f=l===sa||l===la;if(u||f)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new Pp(n)),h=u?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(u&&h&&h.height>0||f&&h&&r(h)){t===null&&(t=new Pp(n));const d=u?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function r(s){let l=0;const u=6;for(let f=0;f<u;f++)s[f]!==void 0&&l++;return l===u}function a(s){const l=s.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Xw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $w(n,e,t,i){const r={},a=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);d.removeEventListener("dispose",o),delete r[d.id];const g=a.get(d);g&&(e.remove(g),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const y in d)e.update(d[y],34962);const g=h.morphAttributes;for(const y in g){const p=g[y];for(let c=0,m=p.length;c<m;c++)e.update(p[c],34962)}}function u(h){const d=[],g=h.index,y=h.attributes.position;let p=0;if(g!==null){const v=g.array;p=g.version;for(let _=0,x=v.length;_<x;_+=3){const b=v[_+0],T=v[_+1],A=v[_+2];d.push(b,T,T,A,A,b)}}else{const v=y.array;p=y.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const b=_+0,T=_+1,A=_+2;d.push(b,T,T,A,A,b)}}const c=new(M0(d)?R0:P0)(d,1);c.version=p;const m=a.get(h);m&&e.remove(m),a.set(h,c)}function f(h){const d=a.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&u(h)}else u(h);return a.get(h)}return{get:s,update:l,getWireframeAttribute:f}}function qw(n,e,t,i){const r=i.isWebGL2;let a;function o(d){a=d}let s,l;function u(d){s=d.type,l=d.bytesPerElement}function f(d,g){n.drawElements(a,g,s,d*l),t.update(g,a,1)}function h(d,g,y){if(y===0)return;let p,c;if(r)p=n,c="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[c](a,g,s,d*l,y),t.update(g,a,y)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h}function Yw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case 4:t.triangles+=s*(a/3);break;case 1:t.lines+=s*(a/2);break;case 3:t.lines+=s*(a-1);break;case 2:t.lines+=s*a;break;case 0:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Zw(n,e){return n[0]-e[0]}function Kw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Qw(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,o=new Mt,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function l(u,f,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,p=y!==void 0?y.length:0;let c=a.get(f);if(c===void 0||c.count!==p){let k=function(){F.dispose(),a.delete(f),f.removeEventListener("dispose",k)};var g=k;c!==void 0&&c.texture.dispose();const _=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,T=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],S=f.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),b===!0&&(M=3);let R=f.attributes.position.count*M,Q=1;R>e.maxTextureSize&&(Q=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const q=new Float32Array(R*Q*4*p),F=new T0(q,R,Q,p);F.type=Qi,F.needsUpdate=!0;const I=M*4;for(let O=0;O<p;O++){const W=T[O],V=A[O],K=S[O],Y=R*Q*4*O;for(let G=0;G<W.count;G++){const L=G*I;_===!0&&(o.fromBufferAttribute(W,G),q[Y+L+0]=o.x,q[Y+L+1]=o.y,q[Y+L+2]=o.z,q[Y+L+3]=0),x===!0&&(o.fromBufferAttribute(V,G),q[Y+L+4]=o.x,q[Y+L+5]=o.y,q[Y+L+6]=o.z,q[Y+L+7]=0),b===!0&&(o.fromBufferAttribute(K,G),q[Y+L+8]=o.x,q[Y+L+9]=o.y,q[Y+L+10]=o.z,q[Y+L+11]=K.itemSize===4?o.w:1)}}c={count:p,texture:F,size:new Ve(R,Q)},a.set(f,c),f.addEventListener("dispose",k)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];const v=f.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",c.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",c.size)}else{const y=d===void 0?0:d.length;let p=i[f.id];if(p===void 0||p.length!==y){p=[];for(let x=0;x<y;x++)p[x]=[x,0];i[f.id]=p}for(let x=0;x<y;x++){const b=p[x];b[0]=x,b[1]=d[x]}p.sort(Kw);for(let x=0;x<8;x++)x<y&&p[x][1]?(s[x][0]=p[x][0],s[x][1]=p[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(Zw);const c=f.morphAttributes.position,m=f.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const b=s[x],T=b[0],A=b[1];T!==Number.MAX_SAFE_INTEGER&&A?(c&&f.getAttribute("morphTarget"+x)!==c[T]&&f.setAttribute("morphTarget"+x,c[T]),m&&f.getAttribute("morphNormal"+x)!==m[T]&&f.setAttribute("morphNormal"+x,m[T]),r[x]=A,v+=A):(c&&f.hasAttribute("morphTarget"+x)===!0&&f.deleteAttribute("morphTarget"+x),m&&f.hasAttribute("morphNormal"+x)===!0&&f.deleteAttribute("morphNormal"+x),r[x]=0)}const _=f.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Jw(n,e,t,i){let r=new WeakMap;function a(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);return r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const z0=new Jt,U0=new T0,B0=new zy,G0=new k0,kp=[],Np=[],Op=new Float32Array(16),Fp=new Float32Array(9),zp=new Float32Array(4);function xa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=kp[r];if(a===void 0&&(a=new Float32Array(r),kp[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rl(n,e){let t=Np[e];t===void 0&&(t=new Int32Array(e),Np[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function eM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function nM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function rM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;zp.set(i),n.uniformMatrix2fv(this.addr,!1,zp),pt(t,i)}}function aM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;Fp.set(i),n.uniformMatrix3fv(this.addr,!1,Fp),pt(t,i)}}function oM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;Op.set(i),n.uniformMatrix4fv(this.addr,!1,Op),pt(t,i)}}function sM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function lM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function cM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function fM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function pM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function mM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||z0,r)}function gM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||B0,r)}function vM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||G0,r)}function _M(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||U0,r)}function xM(n){switch(n){case 5126:return eM;case 35664:return tM;case 35665:return nM;case 35666:return iM;case 35674:return rM;case 35675:return aM;case 35676:return oM;case 5124:case 35670:return sM;case 35667:case 35671:return lM;case 35668:case 35672:return uM;case 35669:case 35673:return cM;case 5125:return fM;case 36294:return dM;case 36295:return hM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return _M}}function yM(n,e){n.uniform1fv(this.addr,e)}function SM(n,e){const t=xa(e,this.size,2);n.uniform2fv(this.addr,t)}function wM(n,e){const t=xa(e,this.size,3);n.uniform3fv(this.addr,t)}function MM(n,e){const t=xa(e,this.size,4);n.uniform4fv(this.addr,t)}function bM(n,e){const t=xa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function EM(n,e){const t=xa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function TM(n,e){const t=xa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function CM(n,e){n.uniform1iv(this.addr,e)}function AM(n,e){n.uniform2iv(this.addr,e)}function LM(n,e){n.uniform3iv(this.addr,e)}function PM(n,e){n.uniform4iv(this.addr,e)}function RM(n,e){n.uniform1uiv(this.addr,e)}function DM(n,e){n.uniform2uiv(this.addr,e)}function IM(n,e){n.uniform3uiv(this.addr,e)}function kM(n,e){n.uniform4uiv(this.addr,e)}function NM(n,e,t){const i=this.cache,r=e.length,a=Rl(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),pt(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||z0,a[o])}function OM(n,e,t){const i=this.cache,r=e.length,a=Rl(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),pt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||B0,a[o])}function FM(n,e,t){const i=this.cache,r=e.length,a=Rl(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),pt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||G0,a[o])}function zM(n,e,t){const i=this.cache,r=e.length,a=Rl(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),pt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||U0,a[o])}function UM(n){switch(n){case 5126:return yM;case 35664:return SM;case 35665:return wM;case 35666:return MM;case 35674:return bM;case 35675:return EM;case 35676:return TM;case 5124:case 35670:return CM;case 35667:case 35671:return AM;case 35668:case 35672:return LM;case 35669:case 35673:return PM;case 5125:return RM;case 36294:return DM;case 36295:return IM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return zM}}class BM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=xM(t.type)}}class GM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=UM(t.type)}}class VM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const Gu=/(\w+)(\])?(\[|\.)?/g;function Up(n,e){n.seq.push(e),n.map[e.id]=e}function HM(n,e,t){const i=n.name,r=i.length;for(Gu.lastIndex=0;;){const a=Gu.exec(i),o=Gu.lastIndex;let s=a[1];const l=a[2]==="]",u=a[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===r){Up(t,u===void 0?new BM(s,n,e):new GM(s,n,e));break}else{let h=t.map[s];h===void 0&&(h=new VM(s),Up(t,h)),t=h}}}class Is{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);HM(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Bp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let WM=0;function jM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function XM(n){switch(n){case sr:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Gp(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+jM(n.getShaderSource(e),o)}else return r}function $M(n,e){const t=XM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function qM(n,e){let t;switch(e){case iy:t="Linear";break;case ry:t="Reinhard";break;case ay:t="OptimizedCineon";break;case oy:t="ACESFilmic";break;case sy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function YM(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ya).join(`
`)}function ZM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function KM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===35674&&(s=2),a.type===35675&&(s=3),a.type===35676&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function Ya(n){return n!==""}function Vp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(n){return n.replace(QM,JM)}function JM(n,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Bc(t)}const e2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wp(n){return n.replace(e2,t2)}function t2(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function jp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function n2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===g0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qa&&(e="SHADOWMAP_TYPE_VSM"),e}function i2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sa:case la:e="ENVMAP_TYPE_CUBE";break;case Cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case la:e="ENVMAP_MODE_REFRACTION";break}return e}function a2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case x0:e="ENVMAP_BLENDING_MULTIPLY";break;case ty:e="ENVMAP_BLENDING_MIX";break;case ny:e="ENVMAP_BLENDING_ADD";break}return e}function o2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function s2(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=n2(t),u=i2(t),f=r2(t),h=a2(t),d=o2(t),g=t.isWebGL2?"":YM(t),y=ZM(a),p=r.createProgram();let c,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=[y].filter(Ya).join(`
`),c.length>0&&(c+=`
`),m=[g,y].filter(Ya).join(`
`),m.length>0&&(m+=`
`)):(c=[jp(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),m=[g,jp(t),"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Le.tonemapping_pars_fragment:"",t.toneMapping!==Yn?qM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,$M("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ya).join(`
`)),o=Bc(o),o=Vp(o,t),o=Hp(o,t),s=Bc(s),s=Vp(s,t),s=Hp(s,t),o=Wp(o),s=Wp(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,c=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,m=["#define varying in",t.glslVersion===hp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+c+o,x=v+m+s,b=Bp(r,35633,_),T=Bp(r,35632,x);if(r.attachShader(p,b),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(p).trim(),R=r.getShaderInfoLog(b).trim(),Q=r.getShaderInfoLog(T).trim();let q=!0,F=!0;if(r.getProgramParameter(p,35714)===!1){q=!1;const I=Gp(r,b,"vertex"),k=Gp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+M+`
`+I+`
`+k)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(R===""||Q==="")&&(F=!1);F&&(this.diagnostics={runnable:q,programLog:M,vertexShader:{log:R,prefix:c},fragmentShader:{log:Q,prefix:m}})}r.deleteShader(b),r.deleteShader(T);let A;this.getUniforms=function(){return A===void 0&&(A=new Is(r,p)),A};let S;return this.getAttributes=function(){return S===void 0&&(S=KM(r,p)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=WM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=T,this}let l2=0;class u2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new c2(e),t.set(e,i)),i}}class c2{constructor(e){this.id=l2++,this.code=e,this.usedTimes=0}}function f2(n,e,t,i,r,a,o){const s=new C0,l=new u2,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S,M,R,Q,q){const F=Q.fog,I=q.geometry,k=S.isMeshStandardMaterial?Q.environment:null,O=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),W=!!O&&O.mapping===Cl?O.image.height:null,V=y[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Y=K!==void 0?K.length:0;let G=0;I.morphAttributes.position!==void 0&&(G=1),I.morphAttributes.normal!==void 0&&(G=2),I.morphAttributes.color!==void 0&&(G=3);let L,B,J,D;if(V){const be=Cn[V];L=be.vertexShader,B=be.fragmentShader}else L=S.vertexShader,B=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),D=l.getFragmentShaderID(S);const le=n.getRenderTarget(),se=S.alphaTest>0,ne=S.clearcoat>0,oe=S.iridescence>0;return{isWebGL2:f,shaderID:V,shaderName:S.type,vertexShader:L,fragmentShader:B,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:D,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:d,outputEncoding:le===null?n.outputEncoding:le.isXRRenderTarget===!0?le.texture.encoding:sr,map:!!S.map,matcap:!!S.matcap,envMap:!!O,envMapMode:O&&O.mapping,envMapCubeUVHeight:W,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===Cy,tangentSpaceNormalMap:S.normalMapType===Ty,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===qe,clearcoat:ne,clearcoatMap:ne&&!!S.clearcoatMap,clearcoatRoughnessMap:ne&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:ne&&!!S.clearcoatNormalMap,iridescence:oe,iridescenceMap:oe&&!!S.iridescenceMap,iridescenceThicknessMap:oe&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===Jr,alphaMap:!!S.alphaMap,alphaTest:se,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!I.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||S.transmission>0||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||S.sheen>0||!!S.sheenColorMap||!!S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!F,useFog:S.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:G,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:Yn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===di,flipSided:S.side===Qt,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function c(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(m(M,S),v(M,S),M.push(n.outputEncoding)),M.push(S.customProgramCacheKey),M.join()}function m(S,M){S.push(M.precision),S.push(M.outputEncoding),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.combine),S.push(M.vertexUvs),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){s.disableAll(),M.isWebGL2&&s.enable(0),M.supportsVertexTextures&&s.enable(1),M.instancing&&s.enable(2),M.instancingColor&&s.enable(3),M.map&&s.enable(4),M.matcap&&s.enable(5),M.envMap&&s.enable(6),M.lightMap&&s.enable(7),M.aoMap&&s.enable(8),M.emissiveMap&&s.enable(9),M.bumpMap&&s.enable(10),M.normalMap&&s.enable(11),M.objectSpaceNormalMap&&s.enable(12),M.tangentSpaceNormalMap&&s.enable(13),M.clearcoat&&s.enable(14),M.clearcoatMap&&s.enable(15),M.clearcoatRoughnessMap&&s.enable(16),M.clearcoatNormalMap&&s.enable(17),M.iridescence&&s.enable(18),M.iridescenceMap&&s.enable(19),M.iridescenceThicknessMap&&s.enable(20),M.displacementMap&&s.enable(21),M.specularMap&&s.enable(22),M.roughnessMap&&s.enable(23),M.metalnessMap&&s.enable(24),M.gradientMap&&s.enable(25),M.alphaMap&&s.enable(26),M.alphaTest&&s.enable(27),M.vertexColors&&s.enable(28),M.vertexAlphas&&s.enable(29),M.vertexUvs&&s.enable(30),M.vertexTangents&&s.enable(31),M.uvsVertexOnly&&s.enable(32),S.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.skinning&&s.enable(4),M.morphTargets&&s.enable(5),M.morphNormals&&s.enable(6),M.morphColors&&s.enable(7),M.premultipliedAlpha&&s.enable(8),M.shadowMapEnabled&&s.enable(9),M.useLegacyLights&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.specularIntensityMap&&s.enable(15),M.specularColorMap&&s.enable(16),M.transmission&&s.enable(17),M.transmissionMap&&s.enable(18),M.thicknessMap&&s.enable(19),M.sheen&&s.enable(20),M.sheenColorMap&&s.enable(21),M.sheenRoughnessMap&&s.enable(22),M.decodeVideoTexture&&s.enable(23),M.opaque&&s.enable(24),S.push(s.mask)}function _(S){const M=y[S.type];let R;if(M){const Q=Cn[M];R=Ky.clone(Q.uniforms)}else R=S.uniforms;return R}function x(S,M){let R;for(let Q=0,q=u.length;Q<q;Q++){const F=u[Q];if(F.cacheKey===M){R=F,++R.usedTimes;break}}return R===void 0&&(R=new s2(n,M,S,a),u.push(R)),R}function b(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:_,acquireProgram:x,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:A}}function d2(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function h2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $p(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,g,y,p,c){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:g,groupOrder:y,renderOrder:h.renderOrder,z:p,group:c},n[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=g,m.groupOrder=y,m.renderOrder=h.renderOrder,m.z=p,m.group=c),e++,m}function s(h,d,g,y,p,c){const m=o(h,d,g,y,p,c);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function l(h,d,g,y,p,c){const m=o(h,d,g,y,p,c);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function u(h,d){t.length>1&&t.sort(h||h2),i.length>1&&i.sort(d||Xp),r.length>1&&r.sort(d||Xp)}function f(){for(let h=e,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:f,sort:u}}function p2(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new $p,n.set(i,[o])):r>=a.length?(o=new $p,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function m2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Qe};break;case"SpotLight":t={position:new U,direction:new U,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function g2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let v2=0;function _2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function x2(n,e){const t=new m2,i=g2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new U);const a=new U,o=new bt,s=new bt;function l(f,h){let d=0,g=0,y=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let p=0,c=0,m=0,v=0,_=0,x=0,b=0,T=0,A=0,S=0;f.sort(_2);const M=h===!0?Math.PI:1;for(let Q=0,q=f.length;Q<q;Q++){const F=f[Q],I=F.color,k=F.intensity,O=F.distance,W=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=I.r*k*M,g+=I.g*k*M,y+=I.b*k*M;else if(F.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(F.sh.coefficients[V],k);else if(F.isDirectionalLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity*M),F.castShadow){const K=F.shadow,Y=i.get(F);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[p]=Y,r.directionalShadowMap[p]=W,r.directionalShadowMatrix[p]=F.shadow.matrix,x++}r.directional[p]=V,p++}else if(F.isSpotLight){const V=t.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(I).multiplyScalar(k*M),V.distance=O,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,r.spot[m]=V;const K=F.shadow;if(F.map&&(r.spotLightMap[A]=F.map,A++,K.updateMatrices(F),F.castShadow&&S++),r.spotLightMatrix[m]=K.matrix,F.castShadow){const Y=i.get(F);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[m]=Y,r.spotShadowMap[m]=W,T++}m++}else if(F.isRectAreaLight){const V=t.get(F);V.color.copy(I).multiplyScalar(k),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),r.rectArea[v]=V,v++}else if(F.isPointLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity*M),V.distance=F.distance,V.decay=F.decay,F.castShadow){const K=F.shadow,Y=i.get(F);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[c]=Y,r.pointShadowMap[c]=W,r.pointShadowMatrix[c]=F.shadow.matrix,b++}r.point[c]=V,c++}else if(F.isHemisphereLight){const V=t.get(F);V.skyColor.copy(F.color).multiplyScalar(k*M),V.groundColor.copy(F.groundColor).multiplyScalar(k*M),r.hemi[_]=V,_++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=y;const R=r.hash;(R.directionalLength!==p||R.pointLength!==c||R.spotLength!==m||R.rectAreaLength!==v||R.hemiLength!==_||R.numDirectionalShadows!==x||R.numPointShadows!==b||R.numSpotShadows!==T||R.numSpotMaps!==A)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=v,r.point.length=c,r.hemi.length=_,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=T+A-S,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=S,R.directionalLength=p,R.pointLength=c,R.spotLength=m,R.rectAreaLength=v,R.hemiLength=_,R.numDirectionalShadows=x,R.numPointShadows=b,R.numSpotShadows=T,R.numSpotMaps=A,r.version=v2++)}function u(f,h){let d=0,g=0,y=0,p=0,c=0;const m=h.matrixWorldInverse;for(let v=0,_=f.length;v<_;v++){const x=f[v];if(x.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),d++}else if(x.isSpotLight){const b=r.spot[y];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),y++}else if(x.isRectAreaLight){const b=r.rectArea[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),s.identity(),o.copy(x.matrixWorld),o.premultiply(m),s.extractRotation(o),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),p++}else if(x.isPointLight){const b=r.point[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),g++}else if(x.isHemisphereLight){const b=r.hemi[c];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),c++}}}return{setup:l,setupView:u,state:r}}function qp(n,e){const t=new x2(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(h){i.push(h)}function s(h){r.push(h)}function l(h){t.setup(i,h)}function u(h){t.setupView(i,h)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s}}function y2(n,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new qp(n,e),t.set(a,[l])):o>=s.length?(l=new qp(n,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class S2 extends Ll{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=by,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class w2 extends Ll{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const M2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b2=`uniform sampler2D shadow_pass;
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
}`;function E2(n,e,t){let i=new N0;const r=new Ve,a=new Ve,o=new Mt,s=new S2({depthPacking:Ey}),l=new w2,u={},f=t.maxTextureSize,h={[Pi]:Qt,[Qt]:Pi,[di]:di},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:M2,fragmentShader:b2}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const y=new mr;y.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new $n(y,d),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g0,this.render=function(x,b,T){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||x.length===0)return;const A=n.getRenderTarget(),S=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),R=n.state;R.setBlending(bi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let Q=0,q=x.length;Q<q;Q++){const F=x[Q],I=F.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const k=I.getFrameExtents();if(r.multiply(k),a.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(a.x=Math.floor(f/k.x),r.x=a.x*k.x,I.mapSize.x=a.x),r.y>f&&(a.y=Math.floor(f/k.y),r.y=a.y*k.y,I.mapSize.y=a.y)),I.map===null){const W=this.type!==qa?{minFilter:Ft,magFilter:Ft}:{};I.map=new lr(r.x,r.y,W),I.map.texture.name=F.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const O=I.getViewportCount();for(let W=0;W<O;W++){const V=I.getViewport(W);o.set(a.x*V.x,a.y*V.y,a.x*V.z,a.y*V.w),R.viewport(o),I.updateMatrices(F,W),i=I.getFrustum(),_(b,T,I.camera,F,this.type)}I.isPointLightShadow!==!0&&this.type===qa&&m(I,T),I.needsUpdate=!1}c.needsUpdate=!1,n.setRenderTarget(A,S,M)};function m(x,b){const T=e.update(p);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,g.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new lr(r.x,r.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(b,null,T,d,p,null),g.uniforms.shadow_pass.value=x.mapPass.texture,g.uniforms.resolution.value=x.mapSize,g.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(b,null,T,g,p,null)}function v(x,b,T,A,S,M){let R=null;const Q=T.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(Q!==void 0)R=Q;else if(R=T.isPointLight===!0?l:s,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const q=R.uuid,F=b.uuid;let I=u[q];I===void 0&&(I={},u[q]=I);let k=I[F];k===void 0&&(k=R.clone(),I[F]=k),R=k}return R.visible=b.visible,R.wireframe=b.wireframe,M===qa?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:h[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(T.matrixWorld),R.nearDistance=A,R.farDistance=S),R}function _(x,b,T,A,S){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&S===qa)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,x.matrixWorld);const Q=e.update(x),q=x.material;if(Array.isArray(q)){const F=Q.groups;for(let I=0,k=F.length;I<k;I++){const O=F[I],W=q[O.materialIndex];if(W&&W.visible){const V=v(x,W,A,T.near,T.far,S);n.renderBufferDirect(T,null,Q,V,x,O)}}}else if(q.visible){const F=v(x,q,A,T.near,T.far,S);n.renderBufferDirect(T,null,Q,F,x,null)}}const R=x.children;for(let Q=0,q=R.length;Q<q;Q++)_(R[Q],b,T,A,S)}}function T2(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const j=new Mt;let ee=null;const fe=new Mt(0,0,0,0);return{setMask:function(pe){ee!==pe&&!P&&(n.colorMask(pe,pe,pe,pe),ee=pe)},setLocked:function(pe){P=pe},setClear:function(pe,Xe,gt,It,Mn){Mn===!0&&(pe*=It,Xe*=It,gt*=It),j.set(pe,Xe,gt,It),fe.equals(j)===!1&&(n.clearColor(pe,Xe,gt,It),fe.copy(j))},reset:function(){P=!1,ee=null,fe.set(-1,0,0,0)}}}function a(){let P=!1,j=null,ee=null,fe=null;return{setTest:function(pe){pe?se(2929):ne(2929)},setMask:function(pe){j!==pe&&!P&&(n.depthMask(pe),j=pe)},setFunc:function(pe){if(ee!==pe){switch(pe){case qx:n.depthFunc(512);break;case Yx:n.depthFunc(519);break;case Zx:n.depthFunc(513);break;case kc:n.depthFunc(515);break;case Kx:n.depthFunc(514);break;case Qx:n.depthFunc(518);break;case Jx:n.depthFunc(516);break;case ey:n.depthFunc(517);break;default:n.depthFunc(515)}ee=pe}},setLocked:function(pe){P=pe},setClear:function(pe){fe!==pe&&(n.clearDepth(pe),fe=pe)},reset:function(){P=!1,j=null,ee=null,fe=null}}}function o(){let P=!1,j=null,ee=null,fe=null,pe=null,Xe=null,gt=null,It=null,Mn=null;return{setTest:function(at){P||(at?se(2960):ne(2960))},setMask:function(at){j!==at&&!P&&(n.stencilMask(at),j=at)},setFunc:function(at,rn,bn){(ee!==at||fe!==rn||pe!==bn)&&(n.stencilFunc(at,rn,bn),ee=at,fe=rn,pe=bn)},setOp:function(at,rn,bn){(Xe!==at||gt!==rn||It!==bn)&&(n.stencilOp(at,rn,bn),Xe=at,gt=rn,It=bn)},setLocked:function(at){P=at},setClear:function(at){Mn!==at&&(n.clearStencil(at),Mn=at)},reset:function(){P=!1,j=null,ee=null,fe=null,pe=null,Xe=null,gt=null,It=null,Mn=null}}}const s=new r,l=new a,u=new o,f=new WeakMap,h=new WeakMap;let d={},g={},y=new WeakMap,p=[],c=null,m=!1,v=null,_=null,x=null,b=null,T=null,A=null,S=null,M=!1,R=null,Q=null,q=null,F=null,I=null;const k=n.getParameter(35661);let O=!1,W=0;const V=n.getParameter(7938);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=W>=2);let K=null,Y={};const G=n.getParameter(3088),L=n.getParameter(2978),B=new Mt().fromArray(G),J=new Mt().fromArray(L);function D(P,j,ee){const fe=new Uint8Array(4),pe=n.createTexture();n.bindTexture(P,pe),n.texParameteri(P,10241,9728),n.texParameteri(P,10240,9728);for(let Xe=0;Xe<ee;Xe++)n.texImage2D(j+Xe,0,6408,1,1,0,6408,5121,fe);return pe}const le={};le[3553]=D(3553,3553,1),le[34067]=D(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),u.setClear(0),se(2929),l.setFunc(kc),ft(!1),He(Oh),se(2884),Ke(bi);function se(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function ne(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function oe(P,j){return g[P]!==j?(n.bindFramebuffer(P,j),g[P]=j,i&&(P===36009&&(g[36160]=j),P===36160&&(g[36009]=j)),!0):!1}function ge(P,j){let ee=p,fe=!1;if(P)if(ee=y.get(j),ee===void 0&&(ee=[],y.set(j,ee)),P.isWebGLMultipleRenderTargets){const pe=P.texture;if(ee.length!==pe.length||ee[0]!==36064){for(let Xe=0,gt=pe.length;Xe<gt;Xe++)ee[Xe]=36064+Xe;ee.length=pe.length,fe=!0}}else ee[0]!==36064&&(ee[0]=36064,fe=!0);else ee[0]!==1029&&(ee[0]=1029,fe=!0);fe&&(t.isWebGL2?n.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function be(P){return c!==P?(n.useProgram(P),c=P,!0):!1}const Ae={[Dr]:32774,[Fx]:32778,[zx]:32779};if(i)Ae[Bh]=32775,Ae[Gh]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ae[Bh]=P.MIN_EXT,Ae[Gh]=P.MAX_EXT)}const Ie={[Ux]:0,[Bx]:1,[Gx]:768,[v0]:770,[$x]:776,[jx]:774,[Hx]:772,[Vx]:769,[_0]:771,[Xx]:775,[Wx]:773};function Ke(P,j,ee,fe,pe,Xe,gt,It){if(P===bi){m===!0&&(ne(3042),m=!1);return}if(m===!1&&(se(3042),m=!0),P!==Ox){if(P!==v||It!==M){if((_!==Dr||T!==Dr)&&(n.blendEquation(32774),_=Dr,T=Dr),It)switch(P){case Jr:n.blendFuncSeparate(1,771,1,771);break;case Fh:n.blendFunc(1,1);break;case zh:n.blendFuncSeparate(0,769,0,1);break;case Uh:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Jr:n.blendFuncSeparate(770,771,1,771);break;case Fh:n.blendFunc(770,1);break;case zh:n.blendFuncSeparate(0,769,0,1);break;case Uh:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,b=null,A=null,S=null,v=P,M=It}return}pe=pe||j,Xe=Xe||ee,gt=gt||fe,(j!==_||pe!==T)&&(n.blendEquationSeparate(Ae[j],Ae[pe]),_=j,T=pe),(ee!==x||fe!==b||Xe!==A||gt!==S)&&(n.blendFuncSeparate(Ie[ee],Ie[fe],Ie[Xe],Ie[gt]),x=ee,b=fe,A=Xe,S=gt),v=P,M=!1}function st(P,j){P.side===di?ne(2884):se(2884);let ee=P.side===Qt;j&&(ee=!ee),ft(ee),P.blending===Jr&&P.transparent===!1?Ke(bi):Ke(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),s.setMask(P.colorWrite);const fe=P.stencilWrite;u.setTest(fe),fe&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ue(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(32926):ne(32926)}function ft(P){R!==P&&(P?n.frontFace(2304):n.frontFace(2305),R=P)}function He(P){P!==Ix?(se(2884),P!==Q&&(P===Oh?n.cullFace(1029):P===kx?n.cullFace(1028):n.cullFace(1032))):ne(2884),Q=P}function ke(P){P!==q&&(O&&n.lineWidth(P),q=P)}function Ue(P,j,ee){P?(se(32823),(F!==j||I!==ee)&&(n.polygonOffset(j,ee),F=j,I=ee)):ne(32823)}function rt(P){P?se(3089):ne(3089)}function Tt(P){P===void 0&&(P=33984+k-1),K!==P&&(n.activeTexture(P),K=P)}function C(P,j,ee){ee===void 0&&(K===null?ee=33984+k-1:ee=K);let fe=Y[ee];fe===void 0&&(fe={type:void 0,texture:void 0},Y[ee]=fe),(fe.type!==P||fe.texture!==j)&&(K!==ee&&(n.activeTexture(ee),K=ee),n.bindTexture(P,j||le[P]),fe.type=P,fe.texture=j)}function w(){const P=Y[K];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(P){B.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),B.copy(P))}function ve(P){J.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),J.copy(P))}function Be(P,j){let ee=h.get(j);ee===void 0&&(ee=new WeakMap,h.set(j,ee));let fe=ee.get(P);fe===void 0&&(fe=n.getUniformBlockIndex(j,P.name),ee.set(P,fe))}function et(P,j){const fe=h.get(j).get(P);f.get(j)!==fe&&(n.uniformBlockBinding(j,fe,P.__bindingPointIndex),f.set(j,fe))}function mt(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},K=null,Y={},g={},y=new WeakMap,p=[],c=null,m=!1,v=null,_=null,x=null,b=null,T=null,A=null,S=null,M=!1,R=null,Q=null,q=null,F=null,I=null,B.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),u.reset()}return{buffers:{color:s,depth:l,stencil:u},enable:se,disable:ne,bindFramebuffer:oe,drawBuffers:ge,useProgram:be,setBlending:Ke,setMaterial:st,setFlipSided:ft,setCullFace:He,setLineWidth:ke,setPolygonOffset:Ue,setScissorTest:rt,activeTexture:Tt,bindTexture:C,unbindTexture:w,compressedTexImage2D:X,compressedTexImage3D:ie,texImage2D:me,texImage3D:Ee,updateUBOMapping:Be,uniformBlockBinding:et,texStorage2D:Z,texStorage3D:Me,texSubImage2D:re,texSubImage3D:ue,compressedTexSubImage2D:ye,compressedTexSubImage3D:he,scissor:we,viewport:ve,reset:mt}}function C2(n,e,t,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let p;const c=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,w){return m?new OffscreenCanvas(C,w):ol("canvas")}function _(C,w,X,ie){let re=1;if((C.width>ie||C.height>ie)&&(re=ie/Math.max(C.width,C.height)),re<1||w===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){const ue=w?Py:Math.floor,ye=ue(re*C.width),he=ue(re*C.height);p===void 0&&(p=v(ye,he));const Z=X?v(ye,he):p;return Z.width=ye,Z.height=he,Z.getContext("2d").drawImage(C,0,0,ye,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ye+"x"+he+")."),Z}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return mp(C.width)&&mp(C.height)}function b(C){return s?!1:C.wrapS!==xn||C.wrapT!==xn||C.minFilter!==Ft&&C.minFilter!==on}function T(C,w){return C.generateMipmaps&&w&&C.minFilter!==Ft&&C.minFilter!==on}function A(C){n.generateMipmap(C)}function S(C,w,X,ie,re=!1){if(s===!1)return w;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ue=w;return w===6403&&(X===5126&&(ue=33326),X===5131&&(ue=33325),X===5121&&(ue=33321)),w===33319&&(X===5126&&(ue=33328),X===5131&&(ue=33327),X===5121&&(ue=33323)),w===6408&&(X===5126&&(ue=34836),X===5131&&(ue=34842),X===5121&&(ue=ie===qe&&re===!1?35907:32856),X===32819&&(ue=32854),X===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function M(C,w,X){return T(C,X)===!0||C.isFramebufferTexture&&C.minFilter!==Ft&&C.minFilter!==on?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function R(C){return C===Ft||C===Vh||C===fu?9728:9729}function Q(C){const w=C.target;w.removeEventListener("dispose",Q),F(w),w.isVideoTexture&&y.delete(w)}function q(C){const w=C.target;w.removeEventListener("dispose",q),k(w)}function F(C){const w=i.get(C);if(w.__webglInit===void 0)return;const X=C.source,ie=c.get(X);if(ie){const re=ie[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&I(C),Object.keys(ie).length===0&&c.delete(X)}i.remove(C)}function I(C){const w=i.get(C);n.deleteTexture(w.__webglTexture);const X=C.source,ie=c.get(X);delete ie[w.__cacheKey],o.memory.textures--}function k(C){const w=C.texture,X=i.get(C),ie=i.get(w);if(ie.__webglTexture!==void 0&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)n.deleteFramebuffer(X.__webglFramebuffer[re]),X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer[re]);else{if(n.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&n.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let re=0;re<X.__webglColorRenderbuffer.length;re++)X.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(X.__webglColorRenderbuffer[re]);X.__webglDepthRenderbuffer&&n.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let re=0,ue=w.length;re<ue;re++){const ye=i.get(w[re]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(w[re])}i.remove(w),i.remove(C)}let O=0;function W(){O=0}function V(){const C=O;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),O+=1,C}function K(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function Y(C,w){const X=i.get(C);if(C.isVideoTexture&&rt(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(X,C,w);return}}t.bindTexture(3553,X.__webglTexture,33984+w)}function G(C,w){const X=i.get(C);if(C.version>0&&X.__version!==C.version){ne(X,C,w);return}t.bindTexture(35866,X.__webglTexture,33984+w)}function L(C,w){const X=i.get(C);if(C.version>0&&X.__version!==C.version){ne(X,C,w);return}t.bindTexture(32879,X.__webglTexture,33984+w)}function B(C,w){const X=i.get(C);if(C.version>0&&X.__version!==C.version){oe(X,C,w);return}t.bindTexture(34067,X.__webglTexture,33984+w)}const J={[Fc]:10497,[xn]:33071,[zc]:33648},D={[Ft]:9728,[Vh]:9984,[fu]:9986,[on]:9729,[ly]:9985,[To]:9987};function le(C,w,X){if(X?(n.texParameteri(C,10242,J[w.wrapS]),n.texParameteri(C,10243,J[w.wrapT]),(C===32879||C===35866)&&n.texParameteri(C,32882,J[w.wrapR]),n.texParameteri(C,10240,D[w.magFilter]),n.texParameteri(C,10241,D[w.minFilter])):(n.texParameteri(C,10242,33071),n.texParameteri(C,10243,33071),(C===32879||C===35866)&&n.texParameteri(C,32882,33071),(w.wrapS!==xn||w.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,10240,R(w.magFilter)),n.texParameteri(C,10241,R(w.minFilter)),w.minFilter!==Ft&&w.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ft||w.minFilter!==fu&&w.minFilter!==To||w.type===Qi&&e.has("OES_texture_float_linear")===!1||s===!1&&w.type===Co&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(C,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function se(C,w){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",Q));const ie=w.source;let re=c.get(ie);re===void 0&&(re={},c.set(ie,re));const ue=K(w);if(ue!==C.__cacheKey){re[ue]===void 0&&(re[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[ue].usedTimes++;const ye=re[C.__cacheKey];ye!==void 0&&(re[C.__cacheKey].usedTimes--,ye.usedTimes===0&&I(w)),C.__cacheKey=ue,C.__webglTexture=re[ue].texture}return X}function ne(C,w,X){let ie=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=35866),w.isData3DTexture&&(ie=32879);const re=se(C,w),ue=w.source;t.bindTexture(ie,C.__webglTexture,33984+X);const ye=i.get(ue);if(ue.version!==ye.__version||re===!0){t.activeTexture(33984+X),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const he=b(w)&&x(w.image)===!1;let Z=_(w.image,he,!1,f);Z=Tt(w,Z);const Me=x(Z)||s,me=a.convert(w.format,w.encoding);let Ee=a.convert(w.type),we=S(w.internalFormat,me,Ee,w.encoding,w.isVideoTexture);le(ie,w,Me);let ve;const Be=w.mipmaps,et=s&&w.isVideoTexture!==!0,mt=ye.__version===void 0||re===!0,P=M(w,Z,Me);if(w.isDepthTexture)we=6402,s?w.type===Qi?we=36012:w.type===Ki?we=33190:w.type===ea?we=35056:we=33189:w.type===Qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===tr&&we===6402&&w.type!==S0&&w.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ki,Ee=a.convert(w.type)),w.format===ua&&we===6402&&(we=34041,w.type!==ea&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ea,Ee=a.convert(w.type))),mt&&(et?t.texStorage2D(3553,1,we,Z.width,Z.height):t.texImage2D(3553,0,we,Z.width,Z.height,0,me,Ee,null));else if(w.isDataTexture)if(Be.length>0&&Me){et&&mt&&t.texStorage2D(3553,P,we,Be[0].width,Be[0].height);for(let j=0,ee=Be.length;j<ee;j++)ve=Be[j],et?t.texSubImage2D(3553,j,0,0,ve.width,ve.height,me,Ee,ve.data):t.texImage2D(3553,j,we,ve.width,ve.height,0,me,Ee,ve.data);w.generateMipmaps=!1}else et?(mt&&t.texStorage2D(3553,P,we,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,Z.width,Z.height,me,Ee,Z.data)):t.texImage2D(3553,0,we,Z.width,Z.height,0,me,Ee,Z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){et&&mt&&t.texStorage3D(35866,P,we,Be[0].width,Be[0].height,Z.depth);for(let j=0,ee=Be.length;j<ee;j++)ve=Be[j],w.format!==yn?me!==null?et?t.compressedTexSubImage3D(35866,j,0,0,0,ve.width,ve.height,Z.depth,me,ve.data,0,0):t.compressedTexImage3D(35866,j,we,ve.width,ve.height,Z.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(35866,j,0,0,0,ve.width,ve.height,Z.depth,me,Ee,ve.data):t.texImage3D(35866,j,we,ve.width,ve.height,Z.depth,0,me,Ee,ve.data)}else{et&&mt&&t.texStorage2D(3553,P,we,Be[0].width,Be[0].height);for(let j=0,ee=Be.length;j<ee;j++)ve=Be[j],w.format!==yn?me!==null?et?t.compressedTexSubImage2D(3553,j,0,0,ve.width,ve.height,me,ve.data):t.compressedTexImage2D(3553,j,we,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(3553,j,0,0,ve.width,ve.height,me,Ee,ve.data):t.texImage2D(3553,j,we,ve.width,ve.height,0,me,Ee,ve.data)}else if(w.isDataArrayTexture)et?(mt&&t.texStorage3D(35866,P,we,Z.width,Z.height,Z.depth),t.texSubImage3D(35866,0,0,0,0,Z.width,Z.height,Z.depth,me,Ee,Z.data)):t.texImage3D(35866,0,we,Z.width,Z.height,Z.depth,0,me,Ee,Z.data);else if(w.isData3DTexture)et?(mt&&t.texStorage3D(32879,P,we,Z.width,Z.height,Z.depth),t.texSubImage3D(32879,0,0,0,0,Z.width,Z.height,Z.depth,me,Ee,Z.data)):t.texImage3D(32879,0,we,Z.width,Z.height,Z.depth,0,me,Ee,Z.data);else if(w.isFramebufferTexture){if(mt)if(et)t.texStorage2D(3553,P,we,Z.width,Z.height);else{let j=Z.width,ee=Z.height;for(let fe=0;fe<P;fe++)t.texImage2D(3553,fe,we,j,ee,0,me,Ee,null),j>>=1,ee>>=1}}else if(Be.length>0&&Me){et&&mt&&t.texStorage2D(3553,P,we,Be[0].width,Be[0].height);for(let j=0,ee=Be.length;j<ee;j++)ve=Be[j],et?t.texSubImage2D(3553,j,0,0,me,Ee,ve):t.texImage2D(3553,j,we,me,Ee,ve);w.generateMipmaps=!1}else et?(mt&&t.texStorage2D(3553,P,we,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,me,Ee,Z)):t.texImage2D(3553,0,we,me,Ee,Z);T(w,Me)&&A(ie),ye.__version=ue.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function oe(C,w,X){if(w.image.length!==6)return;const ie=se(C,w),re=w.source;t.bindTexture(34067,C.__webglTexture,33984+X);const ue=i.get(re);if(re.version!==ue.__version||ie===!0){t.activeTexture(33984+X),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const ye=w.isCompressedTexture||w.image[0].isCompressedTexture,he=w.image[0]&&w.image[0].isDataTexture,Z=[];for(let j=0;j<6;j++)!ye&&!he?Z[j]=_(w.image[j],!1,!0,u):Z[j]=he?w.image[j].image:w.image[j],Z[j]=Tt(w,Z[j]);const Me=Z[0],me=x(Me)||s,Ee=a.convert(w.format,w.encoding),we=a.convert(w.type),ve=S(w.internalFormat,Ee,we,w.encoding),Be=s&&w.isVideoTexture!==!0,et=ue.__version===void 0||ie===!0;let mt=M(w,Me,me);le(34067,w,me);let P;if(ye){Be&&et&&t.texStorage2D(34067,mt,ve,Me.width,Me.height);for(let j=0;j<6;j++){P=Z[j].mipmaps;for(let ee=0;ee<P.length;ee++){const fe=P[ee];w.format!==yn?Ee!==null?Be?t.compressedTexSubImage2D(34069+j,ee,0,0,fe.width,fe.height,Ee,fe.data):t.compressedTexImage2D(34069+j,ee,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(34069+j,ee,0,0,fe.width,fe.height,Ee,we,fe.data):t.texImage2D(34069+j,ee,ve,fe.width,fe.height,0,Ee,we,fe.data)}}}else{P=w.mipmaps,Be&&et&&(P.length>0&&mt++,t.texStorage2D(34067,mt,ve,Z[0].width,Z[0].height));for(let j=0;j<6;j++)if(he){Be?t.texSubImage2D(34069+j,0,0,0,Z[j].width,Z[j].height,Ee,we,Z[j].data):t.texImage2D(34069+j,0,ve,Z[j].width,Z[j].height,0,Ee,we,Z[j].data);for(let ee=0;ee<P.length;ee++){const pe=P[ee].image[j].image;Be?t.texSubImage2D(34069+j,ee+1,0,0,pe.width,pe.height,Ee,we,pe.data):t.texImage2D(34069+j,ee+1,ve,pe.width,pe.height,0,Ee,we,pe.data)}}else{Be?t.texSubImage2D(34069+j,0,0,0,Ee,we,Z[j]):t.texImage2D(34069+j,0,ve,Ee,we,Z[j]);for(let ee=0;ee<P.length;ee++){const fe=P[ee];Be?t.texSubImage2D(34069+j,ee+1,0,0,Ee,we,fe.image[j]):t.texImage2D(34069+j,ee+1,ve,Ee,we,fe.image[j])}}}T(w,me)&&A(34067),ue.__version=re.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ge(C,w,X,ie,re){const ue=a.convert(X.format,X.encoding),ye=a.convert(X.type),he=S(X.internalFormat,ue,ye,X.encoding);i.get(w).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,he,w.width,w.height,w.depth,0,ue,ye,null):t.texImage2D(re,0,he,w.width,w.height,0,ue,ye,null)),t.bindFramebuffer(36160,C),Ue(w)?d.framebufferTexture2DMultisampleEXT(36160,ie,re,i.get(X).__webglTexture,0,ke(w)):(re===3553||re>=34069&&re<=34074)&&n.framebufferTexture2D(36160,ie,re,i.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function be(C,w,X){if(n.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let ie=33189;if(X||Ue(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===Qi?ie=36012:re.type===Ki&&(ie=33190));const ue=ke(w);Ue(w)?d.renderbufferStorageMultisampleEXT(36161,ue,ie,w.width,w.height):n.renderbufferStorageMultisample(36161,ue,ie,w.width,w.height)}else n.renderbufferStorage(36161,ie,w.width,w.height);n.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const ie=ke(w);X&&Ue(w)===!1?n.renderbufferStorageMultisample(36161,ie,35056,w.width,w.height):Ue(w)?d.renderbufferStorageMultisampleEXT(36161,ie,35056,w.width,w.height):n.renderbufferStorage(36161,34041,w.width,w.height),n.framebufferRenderbuffer(36160,33306,36161,C)}else{const ie=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<ie.length;re++){const ue=ie[re],ye=a.convert(ue.format,ue.encoding),he=a.convert(ue.type),Z=S(ue.internalFormat,ye,he,ue.encoding),Me=ke(w);X&&Ue(w)===!1?n.renderbufferStorageMultisample(36161,Me,Z,w.width,w.height):Ue(w)?d.renderbufferStorageMultisampleEXT(36161,Me,Z,w.width,w.height):n.renderbufferStorage(36161,Z,w.width,w.height)}}n.bindRenderbuffer(36161,null)}function Ae(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y(w.depthTexture,0);const ie=i.get(w.depthTexture).__webglTexture,re=ke(w);if(w.depthTexture.format===tr)Ue(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,re):n.framebufferTexture2D(36160,36096,3553,ie,0);else if(w.depthTexture.format===ua)Ue(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,re):n.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function Ie(C){const w=i.get(C),X=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,C)}else if(X){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]=n.createRenderbuffer(),be(w.__webglDepthbuffer[ie],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),be(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Ke(C,w,X){const ie=i.get(C);w!==void 0&&ge(ie.__webglFramebuffer,C,C.texture,36064,3553),X!==void 0&&Ie(C)}function st(C){const w=C.texture,X=i.get(C),ie=i.get(w);C.addEventListener("dispose",q),C.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=w.version,o.memory.textures++);const re=C.isWebGLCubeRenderTarget===!0,ue=C.isWebGLMultipleRenderTargets===!0,ye=x(C)||s;if(re){X.__webglFramebuffer=[];for(let he=0;he<6;he++)X.__webglFramebuffer[he]=n.createFramebuffer()}else{if(X.__webglFramebuffer=n.createFramebuffer(),ue)if(r.drawBuffers){const he=C.texture;for(let Z=0,Me=he.length;Z<Me;Z++){const me=i.get(he[Z]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&C.samples>0&&Ue(C)===!1){const he=ue?w:[w];X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let Z=0;Z<he.length;Z++){const Me=he[Z];X.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(36161,X.__webglColorRenderbuffer[Z]);const me=a.convert(Me.format,Me.encoding),Ee=a.convert(Me.type),we=S(Me.internalFormat,me,Ee,Me.encoding,C.isXRRenderTarget===!0),ve=ke(C);n.renderbufferStorageMultisample(36161,ve,we,C.width,C.height),n.framebufferRenderbuffer(36160,36064+Z,36161,X.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(36161,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),be(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,ie.__webglTexture),le(34067,w,ye);for(let he=0;he<6;he++)ge(X.__webglFramebuffer[he],C,w,36064,34069+he);T(w,ye)&&A(34067),t.unbindTexture()}else if(ue){const he=C.texture;for(let Z=0,Me=he.length;Z<Me;Z++){const me=he[Z],Ee=i.get(me);t.bindTexture(3553,Ee.__webglTexture),le(3553,me,ye),ge(X.__webglFramebuffer,C,me,36064+Z,3553),T(me,ye)&&A(3553)}t.unbindTexture()}else{let he=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(s?he=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ie.__webglTexture),le(he,w,ye),ge(X.__webglFramebuffer,C,w,36064,he),T(w,ye)&&A(he),t.unbindTexture()}C.depthBuffer&&Ie(C)}function ft(C){const w=x(C)||s,X=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ie=0,re=X.length;ie<re;ie++){const ue=X[ie];if(T(ue,w)){const ye=C.isWebGLCubeRenderTarget?34067:3553,he=i.get(ue).__webglTexture;t.bindTexture(ye,he),A(ye),t.unbindTexture()}}}function He(C){if(s&&C.samples>0&&Ue(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],X=C.width,ie=C.height;let re=16384;const ue=[],ye=C.stencilBuffer?33306:36096,he=i.get(C),Z=C.isWebGLMultipleRenderTargets===!0;if(Z)for(let Me=0;Me<w.length;Me++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Me,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Me,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let Me=0;Me<w.length;Me++){ue.push(36064+Me),C.depthBuffer&&ue.push(ye);const me=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(me===!1&&(C.depthBuffer&&(re|=256),C.stencilBuffer&&(re|=1024)),Z&&n.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[Me]),me===!0&&(n.invalidateFramebuffer(36008,[ye]),n.invalidateFramebuffer(36009,[ye])),Z){const Ee=i.get(w[Me]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Ee,0)}n.blitFramebuffer(0,0,X,ie,0,0,X,ie,re,9728),g&&n.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let Me=0;Me<w.length;Me++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Me,36161,he.__webglColorRenderbuffer[Me]);const me=i.get(w[Me]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Me,3553,me,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function ke(C){return Math.min(h,C.samples)}function Ue(C){const w=i.get(C);return s&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function rt(C){const w=o.render.frame;y.get(C)!==w&&(y.set(C,w),C.update())}function Tt(C,w){const X=C.encoding,ie=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Uc||X!==sr&&(X===qe?s===!1?e.has("EXT_sRGB")===!0&&ie===yn?(C.format=Uc,C.minFilter=on,C.generateMipmaps=!1):w=b0.sRGBToLinear(w):(ie!==yn||re!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),w}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=L,this.setTextureCube=B,this.rebindTextures=Ke,this.setupRenderTarget=st,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ue}function A2(n,e,t){const i=t.isWebGL2;function r(a,o=null){let s;if(a===or)return 5121;if(a===dy)return 32819;if(a===hy)return 32820;if(a===uy)return 5120;if(a===cy)return 5122;if(a===S0)return 5123;if(a===fy)return 5124;if(a===Ki)return 5125;if(a===Qi)return 5126;if(a===Co)return i?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===py)return 6406;if(a===yn)return 6408;if(a===my)return 6409;if(a===gy)return 6410;if(a===tr)return 6402;if(a===ua)return 34041;if(a===Uc)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===vy)return 6403;if(a===_y)return 36244;if(a===xy)return 33319;if(a===yy)return 33320;if(a===Sy)return 36249;if(a===du||a===hu||a===pu||a===mu)if(o===qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===du)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===hu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===pu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===mu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===du)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===hu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===pu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===mu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Hh||a===Wh||a===jh||a===Xh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Hh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===jh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===wy)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===$h||a===qh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===$h)return o===qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===qh)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Yh||a===Zh||a===Kh||a===Qh||a===Jh||a===ep||a===tp||a===np||a===ip||a===rp||a===ap||a===op||a===sp||a===lp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Yh)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Zh)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Kh)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Qh)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Jh)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ep)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===tp)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===np)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ip)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===rp)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ap)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===op)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===sp)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===lp)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===gu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===gu)return o===qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===My||a===up||a===cp||a===fp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===gu)return s.COMPRESSED_RED_RGTC1_EXT;if(a===up)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===cp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===fp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ea?i?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class L2 extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xs extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P2={type:"move"};class Vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const c=t.getJointPose(p,i),m=this._getHandJoint(u,p);c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=c.radius),m.visible=c!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),g=.02,y=.005;u.inputState.pinching&&d>g+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(P2)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class R2 extends Jt{constructor(e,t,i,r,a,o,s,l,u,f){if(f=f!==void 0?f:tr,f!==tr&&f!==ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===tr&&(i=Ki),i===void 0&&f===ua&&(i=ea),super(null,r,a,o,s,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1}}class D2 extends _a{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,u=null,f=null,h=null,d=null,g=null,y=null;const p=t.getContextAttributes();let c=null,m=null;const v=[],_=[],x=new Set,b=new Map,T=new _n;T.layers.enable(1),T.viewport=new Mt;const A=new _n;A.layers.enable(2),A.viewport=new Mt;const S=[T,A],M=new L2;M.layers.enable(1),M.layers.enable(2);let R=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let B=v[L];return B===void 0&&(B=new Vu,v[L]=B),B.getTargetRaySpace()},this.getControllerGrip=function(L){let B=v[L];return B===void 0&&(B=new Vu,v[L]=B),B.getGripSpace()},this.getHand=function(L){let B=v[L];return B===void 0&&(B=new Vu,v[L]=B),B.getHandSpace()};function q(L){const B=_.indexOf(L.inputSource);if(B===-1)return;const J=v[B];J!==void 0&&J.dispatchEvent({type:L.type,data:L.inputSource})}function F(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",I);for(let L=0;L<v.length;L++){const B=_[L];B!==null&&(_[L]=null,v[L].disconnect(B))}R=null,Q=null,e.setRenderTarget(c),g=null,d=null,h=null,r=null,m=null,G.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){s=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(L){u=L},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",F),r.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,B),r.updateRenderState({baseLayer:g}),m=new lr(g.framebufferWidth,g.framebufferHeight,{format:yn,type:or,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let B=null,J=null,D=null;p.depth&&(D=p.stencil?35056:33190,B=p.stencil?ua:tr,J=p.stencil?ea:Ki);const le={colorFormat:32856,depthFormat:D,scaleFactor:a};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(le),r.updateRenderState({layers:[d]}),m=new lr(d.textureWidth,d.textureHeight,{format:yn,type:or,depthTexture:new R2(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const se=e.properties.get(m);se.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(s),G.setContext(r),G.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(L){for(let B=0;B<L.removed.length;B++){const J=L.removed[B],D=_.indexOf(J);D>=0&&(_[D]=null,v[D].disconnect(J))}for(let B=0;B<L.added.length;B++){const J=L.added[B];let D=_.indexOf(J);if(D===-1){for(let se=0;se<v.length;se++)if(se>=_.length){_.push(J),D=se;break}else if(_[se]===null){_[se]=J,D=se;break}if(D===-1)break}const le=v[D];le&&le.connect(J)}}const k=new U,O=new U;function W(L,B,J){k.setFromMatrixPosition(B.matrixWorld),O.setFromMatrixPosition(J.matrixWorld);const D=k.distanceTo(O),le=B.projectionMatrix.elements,se=J.projectionMatrix.elements,ne=le[14]/(le[10]-1),oe=le[14]/(le[10]+1),ge=(le[9]+1)/le[5],be=(le[9]-1)/le[5],Ae=(le[8]-1)/le[0],Ie=(se[8]+1)/se[0],Ke=ne*Ae,st=ne*Ie,ft=D/(-Ae+Ie),He=ft*-Ae;B.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(He),L.translateZ(ft),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const ke=ne+ft,Ue=oe+ft,rt=Ke-He,Tt=st+(D-He),C=ge*oe/Ue*ke,w=be*oe/Ue*ke;L.projectionMatrix.makePerspective(rt,Tt,C,w,ke,Ue)}function V(L,B){B===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(B.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;M.near=A.near=T.near=L.near,M.far=A.far=T.far=L.far,(R!==M.near||Q!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,Q=M.far);const B=L.parent,J=M.cameras;V(M,B);for(let le=0;le<J.length;le++)V(J[le],B);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),L.matrix.copy(M.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);const D=L.children;for(let le=0,se=D.length;le<se;le++)D[le].updateMatrixWorld(!0);J.length===2?W(M,T,A):M.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(L){l=L,d!==null&&(d.fixedFoveation=L),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=L)},this.getPlanes=function(){return x};let K=null;function Y(L,B){if(f=B.getViewerPose(u||o),y=B,f!==null){const J=f.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let D=!1;J.length!==M.cameras.length&&(M.cameras.length=0,D=!0);for(let le=0;le<J.length;le++){const se=J[le];let ne=null;if(g!==null)ne=g.getViewport(se);else{const ge=h.getViewSubImage(d,se);ne=ge.viewport,le===0&&(e.setRenderTargetTextures(m,ge.colorTexture,d.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(m))}let oe=S[le];oe===void 0&&(oe=new _n,oe.layers.enable(le),oe.viewport=new Mt,S[le]=oe),oe.matrix.fromArray(se.transform.matrix),oe.projectionMatrix.fromArray(se.projectionMatrix),oe.viewport.set(ne.x,ne.y,ne.width,ne.height),le===0&&M.matrix.copy(oe.matrix),D===!0&&M.cameras.push(oe)}}for(let J=0;J<v.length;J++){const D=_[J],le=v[J];D!==null&&le!==void 0&&le.update(D,B,u||o)}if(K&&K(L,B),B.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:B.detectedPlanes});let J=null;for(const D of x)B.detectedPlanes.has(D)||(J===null&&(J=[]),J.push(D));if(J!==null)for(const D of J)x.delete(D),b.delete(D),i.dispatchEvent({type:"planeremoved",data:D});for(const D of B.detectedPlanes)if(!x.has(D))x.add(D),b.set(D,B.lastChangedTime),i.dispatchEvent({type:"planeadded",data:D});else{const le=b.get(D);D.lastChangedTime>le&&(b.set(D,D.lastChangedTime),i.dispatchEvent({type:"planechanged",data:D}))}}y=null}const G=new O0;G.setAnimationLoop(Y),this.setAnimationLoop=function(L){K=L},this.dispose=function(){}}}function I2(n,e){function t(p,c){c.color.getRGB(p.fogColor.value,D0(n)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function i(p,c,m,v,_){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(p,c):c.isMeshToonMaterial?(r(p,c),f(p,c)):c.isMeshPhongMaterial?(r(p,c),u(p,c)):c.isMeshStandardMaterial?(r(p,c),h(p,c),c.isMeshPhysicalMaterial&&d(p,c,_)):c.isMeshMatcapMaterial?(r(p,c),g(p,c)):c.isMeshDepthMaterial?r(p,c):c.isMeshDistanceMaterial?(r(p,c),y(p,c)):c.isMeshNormalMaterial?r(p,c):c.isLineBasicMaterial?(a(p,c),c.isLineDashedMaterial&&o(p,c)):c.isPointsMaterial?s(p,c,m,v):c.isSpriteMaterial?l(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map),c.alphaMap&&(p.alphaMap.value=c.alphaMap),c.bumpMap&&(p.bumpMap.value=c.bumpMap,p.bumpScale.value=c.bumpScale,c.side===Qt&&(p.bumpScale.value*=-1)),c.displacementMap&&(p.displacementMap.value=c.displacementMap,p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap),c.normalMap&&(p.normalMap.value=c.normalMap,p.normalScale.value.copy(c.normalScale),c.side===Qt&&p.normalScale.value.negate()),c.specularMap&&(p.specularMap.value=c.specularMap),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const m=e.get(c).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const x=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*x}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity);let v;c.map?v=c.map:c.specularMap?v=c.specularMap:c.displacementMap?v=c.displacementMap:c.normalMap?v=c.normalMap:c.bumpMap?v=c.bumpMap:c.roughnessMap?v=c.roughnessMap:c.metalnessMap?v=c.metalnessMap:c.alphaMap?v=c.alphaMap:c.emissiveMap?v=c.emissiveMap:c.clearcoatMap?v=c.clearcoatMap:c.clearcoatNormalMap?v=c.clearcoatNormalMap:c.clearcoatRoughnessMap?v=c.clearcoatRoughnessMap:c.iridescenceMap?v=c.iridescenceMap:c.iridescenceThicknessMap?v=c.iridescenceThicknessMap:c.specularIntensityMap?v=c.specularIntensityMap:c.specularColorMap?v=c.specularColorMap:c.transmissionMap?v=c.transmissionMap:c.thicknessMap?v=c.thicknessMap:c.sheenColorMap?v=c.sheenColorMap:c.sheenRoughnessMap&&(v=c.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let _;c.aoMap?_=c.aoMap:c.lightMap&&(_=c.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function a(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity}function o(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function s(p,c,m,v){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*m,p.scale.value=v*.5,c.map&&(p.map.value=c.map),c.alphaMap&&(p.alphaMap.value=c.alphaMap),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);let _;c.map?_=c.map:c.alphaMap&&(_=c.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map),c.alphaMap&&(p.alphaMap.value=c.alphaMap),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);let m;c.map?m=c.map:c.alphaMap&&(m=c.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function u(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function f(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function h(p,c){p.roughness.value=c.roughness,p.metalness.value=c.metalness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap),c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function d(p,c,m){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap)),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap),c.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),p.clearcoatNormalMap.value=c.clearcoatNormalMap,c.side===Qt&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap)),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap)}function g(p,c){c.matcap&&(p.matcap.value=c.matcap)}function y(p,c){p.referencePosition.value.copy(c.referencePosition),p.nearDistance.value=c.nearDistance,p.farDistance.value=c.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function k2(n,e,t,i){let r={},a={},o=[];const s=t.isWebGL2?n.getParameter(35375):0;function l(v,_){const x=_.program;i.uniformBlockBinding(v,x)}function u(v,_){let x=r[v.id];x===void 0&&(y(v),x=f(v),r[v.id]=x,v.addEventListener("dispose",c));const b=_.program;i.updateUBOMapping(v,b);const T=e.render.frame;a[v.id]!==T&&(d(v),a[v.id]=T)}function f(v){const _=h();v.__bindingPointIndex=_;const x=n.createBuffer(),b=v.__size,T=v.usage;return n.bindBuffer(35345,x),n.bufferData(35345,b,T),n.bindBuffer(35345,null),n.bindBufferBase(35345,_,x),x}function h(){for(let v=0;v<s;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],x=v.uniforms,b=v.__cache;n.bindBuffer(35345,_);for(let T=0,A=x.length;T<A;T++){const S=x[T];if(g(S,T,b)===!0){const M=S.__offset,R=Array.isArray(S.value)?S.value:[S.value];let Q=0;for(let q=0;q<R.length;q++){const F=R[q],I=p(F);typeof F=="number"?(S.__data[0]=F,n.bufferSubData(35345,M+Q,S.__data)):F.isMatrix3?(S.__data[0]=F.elements[0],S.__data[1]=F.elements[1],S.__data[2]=F.elements[2],S.__data[3]=F.elements[0],S.__data[4]=F.elements[3],S.__data[5]=F.elements[4],S.__data[6]=F.elements[5],S.__data[7]=F.elements[0],S.__data[8]=F.elements[6],S.__data[9]=F.elements[7],S.__data[10]=F.elements[8],S.__data[11]=F.elements[0]):(F.toArray(S.__data,Q),Q+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,M,S.__data)}}n.bindBuffer(35345,null)}function g(v,_,x){const b=v.value;if(x[_]===void 0){if(typeof b=="number")x[_]=b;else{const T=Array.isArray(b)?b:[b],A=[];for(let S=0;S<T.length;S++)A.push(T[S].clone());x[_]=A}return!0}else if(typeof b=="number"){if(x[_]!==b)return x[_]=b,!0}else{const T=Array.isArray(x[_])?x[_]:[x[_]],A=Array.isArray(b)?b:[b];for(let S=0;S<T.length;S++){const M=T[S];if(M.equals(A[S])===!1)return M.copy(A[S]),!0}}return!1}function y(v){const _=v.uniforms;let x=0;const b=16;let T=0;for(let A=0,S=_.length;A<S;A++){const M=_[A],R={boundary:0,storage:0},Q=Array.isArray(M.value)?M.value:[M.value];for(let q=0,F=Q.length;q<F;q++){const I=Q[q],k=p(I);R.boundary+=k.boundary,R.storage+=k.storage}if(M.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,A>0){T=x%b;const q=b-T;T!==0&&q-R.boundary<0&&(x+=b-T,M.__offset=x)}x+=R.storage}return T=x%b,T>0&&(x+=b-T),v.__size=x,v.__cache={},this}function p(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function c(v){const _=v.target;_.removeEventListener("dispose",c);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete a[_.id]}function m(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},a={}}return{bind:l,update:u,dispose:m}}function N2(){const n=ol("canvas");return n.style.display="block",n}function nd(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:N2(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,a=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,s=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let f;t!==null?f=t.getContextAttributes().alpha:f=n.alpha!==void 0?n.alpha:!1;let h=null,d=null;const g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=sr,this.useLegacyLights=!0,this.toneMapping=Yn,this.toneMappingExposure=1;const p=this;let c=!1,m=0,v=0,_=null,x=-1,b=null;const T=new Mt,A=new Mt;let S=null,M=e.width,R=e.height,Q=1,q=null,F=null;const I=new Mt(0,0,M,R),k=new Mt(0,0,M,R);let O=!1;const W=new N0;let V=!1,K=!1,Y=null;const G=new bt,L=new U,B={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function J(){return _===null?Q:1}let D=t;function le(E,z){for(let H=0;H<E.length;H++){const N=E[H],$=e.getContext(N,z);if($!==null)return $}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jf}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",ve,!1),D===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),D=le(z,E),D===null)throw le(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let se,ne,oe,ge,be,Ae,Ie,Ke,st,ft,He,ke,Ue,rt,Tt,C,w,X,ie,re,ue,ye,he,Z;function Me(){se=new Xw(D),ne=new Bw(D,se,n),se.init(ne),ye=new A2(D,se,ne),oe=new T2(D,se,ne),ge=new Yw,be=new d2,Ae=new C2(D,se,oe,be,ne,ye,ge),Ie=new Vw(p),Ke=new jw(p),st=new r1(D,ne),he=new zw(D,se,st,ne),ft=new $w(D,st,ge,he),He=new Jw(D,ft,st,ge),ie=new Qw(D,ne,Ae),C=new Gw(be),ke=new f2(p,Ie,Ke,se,ne,he,C),Ue=new I2(p,be),rt=new p2,Tt=new y2(se,ne),X=new Fw(p,Ie,Ke,oe,He,f,o),w=new E2(p,He,ne),Z=new k2(D,ge,ne,oe),re=new Uw(D,se,ge,ne),ue=new qw(D,se,ge,ne),ge.programs=ke.programs,p.capabilities=ne,p.extensions=se,p.properties=be,p.renderLists=rt,p.shadowMap=w,p.state=oe,p.info=ge}Me();const me=new D2(p,D);this.xr=me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(M,R,!1))},this.getSize=function(E){return E.set(M,R)},this.setSize=function(E,z,H=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=E,R=z,e.width=Math.floor(E*Q),e.height=Math.floor(z*Q),H===!0&&(e.style.width=E+"px",e.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(M*Q,R*Q).floor()},this.setDrawingBufferSize=function(E,z,H){M=E,R=z,Q=H,e.width=Math.floor(E*H),e.height=Math.floor(z*H),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,z,H,N){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,z,H,N),oe.viewport(T.copy(I).multiplyScalar(Q).floor())},this.getScissor=function(E){return E.copy(k)},this.setScissor=function(E,z,H,N){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,z,H,N),oe.scissor(A.copy(k).multiplyScalar(Q).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(E){oe.setScissorTest(O=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){F=E},this.getClearColor=function(E){return E.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(E=!0,z=!0,H=!0){let N=0;E&&(N|=16384),z&&(N|=256),H&&(N|=1024),D.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",ve,!1),rt.dispose(),Tt.dispose(),be.dispose(),Ie.dispose(),Ke.dispose(),He.dispose(),he.dispose(),Z.dispose(),ke.dispose(),me.dispose(),me.removeEventListener("sessionstart",ee),me.removeEventListener("sessionend",fe),Y&&(Y.dispose(),Y=null),pe.stop()};function Ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),c=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),c=!1;const E=ge.autoReset,z=w.enabled,H=w.autoUpdate,N=w.needsUpdate,$=w.type;Me(),ge.autoReset=E,w.enabled=z,w.autoUpdate=H,w.needsUpdate=N,w.type=$}function ve(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Be(E){const z=E.target;z.removeEventListener("dispose",Be),et(z)}function et(E){mt(E),be.remove(E)}function mt(E){const z=be.get(E).programs;z!==void 0&&(z.forEach(function(H){ke.releaseProgram(H)}),E.isShaderMaterial&&ke.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,H,N,$,Se){z===null&&(z=B);const Ce=$.isMesh&&$.matrixWorld.determinant()<0,Pe=bv(E,z,H,N,$);oe.setMaterial(N,Ce);let Re=H.index,Ge=1;N.wireframe===!0&&(Re=ft.getWireframeAttribute(H),Ge=2);const Ne=H.drawRange,Oe=H.attributes.position;let lt=Ne.start*Ge,jt=(Ne.start+Ne.count)*Ge;Se!==null&&(lt=Math.max(lt,Se.start*Ge),jt=Math.min(jt,(Se.start+Se.count)*Ge)),Re!==null?(lt=Math.max(lt,0),jt=Math.min(jt,Re.count)):Oe!=null&&(lt=Math.max(lt,0),jt=Math.min(jt,Oe.count));const On=jt-lt;if(On<0||On===1/0)return;he.setup($,N,Pe,H,Re);let Oi,ut=re;if(Re!==null&&(Oi=st.get(Re),ut=ue,ut.setIndex(Oi)),$.isMesh)N.wireframe===!0?(oe.setLineWidth(N.wireframeLinewidth*J()),ut.setMode(1)):ut.setMode(4);else if($.isLine){let Fe=N.linewidth;Fe===void 0&&(Fe=1),oe.setLineWidth(Fe*J()),$.isLineSegments?ut.setMode(1):$.isLineLoop?ut.setMode(2):ut.setMode(3)}else $.isPoints?ut.setMode(0):$.isSprite&&ut.setMode(4);if($.isInstancedMesh)ut.renderInstances(lt,On,$.count);else if(H.isInstancedBufferGeometry){const Fe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Fl=Math.min(H.instanceCount,Fe);ut.renderInstances(lt,On,Fl)}else ut.render(lt,On)},this.compile=function(E,z){function H(N,$,Se){N.transparent===!0&&N.side===di&&N.forceSinglePass===!1?(N.side=Qt,N.needsUpdate=!0,rn(N,$,Se),N.side=Pi,N.needsUpdate=!0,rn(N,$,Se),N.side=di):rn(N,$,Se)}d=Tt.get(E),d.init(),y.push(d),E.traverseVisible(function(N){N.isLight&&N.layers.test(z.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights(p.useLegacyLights),E.traverse(function(N){const $=N.material;if($)if(Array.isArray($))for(let Se=0;Se<$.length;Se++){const Ce=$[Se];H(Ce,E,N)}else H($,E,N)}),y.pop(),d=null};let P=null;function j(E){P&&P(E)}function ee(){pe.stop()}function fe(){pe.start()}const pe=new O0;pe.setAnimationLoop(j),typeof self!="undefined"&&pe.setContext(self),this.setAnimationLoop=function(E){P=E,me.setAnimationLoop(E),E===null?pe.stop():pe.start()},me.addEventListener("sessionstart",ee),me.addEventListener("sessionend",fe),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(c===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(z),z=me.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,z,_),d=Tt.get(E,y.length),d.init(),y.push(d),G.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(G),K=this.localClippingEnabled,V=C.init(this.clippingPlanes,K),h=rt.get(E,g.length),h.init(),g.push(h),Xe(E,z,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(q,F),V===!0&&C.beginShadows();const H=d.state.shadowsArray;if(w.render(H,E,z),V===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),X.render(h,E),d.setupLights(p.useLegacyLights),z.isArrayCamera){const N=z.cameras;for(let $=0,Se=N.length;$<Se;$++){const Ce=N[$];gt(h,E,Ce,Ce.viewport)}}else gt(h,E,z);_!==null&&(Ae.updateMultisampleRenderTarget(_),Ae.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(p,E,z),he.resetDefaultState(),x=-1,b=null,y.pop(),y.length>0?d=y[y.length-1]:d=null,g.pop(),g.length>0?h=g[g.length-1]:h=null};function Xe(E,z,H,N){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){N&&L.setFromMatrixPosition(E.matrixWorld).applyMatrix4(G);const Ce=He.update(E),Pe=E.material;Pe.visible&&h.push(E,Ce,Pe,H,L.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==ge.render.frame&&(E.skeleton.update(),E.skeleton.frame=ge.render.frame),!E.frustumCulled||W.intersectsObject(E))){N&&L.setFromMatrixPosition(E.matrixWorld).applyMatrix4(G);const Ce=He.update(E),Pe=E.material;if(Array.isArray(Pe)){const Re=Ce.groups;for(let Ge=0,Ne=Re.length;Ge<Ne;Ge++){const Oe=Re[Ge],lt=Pe[Oe.materialIndex];lt&&lt.visible&&h.push(E,Ce,lt,H,L.z,Oe)}}else Pe.visible&&h.push(E,Ce,Pe,H,L.z,null)}}const Se=E.children;for(let Ce=0,Pe=Se.length;Ce<Pe;Ce++)Xe(Se[Ce],z,H,N)}function gt(E,z,H,N){const $=E.opaque,Se=E.transmissive,Ce=E.transparent;d.setupLightsView(H),V===!0&&C.setGlobalState(p.clippingPlanes,H),Se.length>0&&It($,z,H),N&&oe.viewport(T.copy(N)),$.length>0&&Mn($,z,H),Se.length>0&&Mn(Se,z,H),Ce.length>0&&Mn(Ce,z,H),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function It(E,z,H){const N=ne.isWebGL2;Y===null&&(Y=new lr(1024,1024,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")?Co:or,minFilter:To,samples:N&&a===!0?4:0}));const $=p.getRenderTarget();p.setRenderTarget(Y),p.clear();const Se=p.toneMapping;p.toneMapping=Yn,Mn(E,z,H),p.toneMapping=Se,Ae.updateMultisampleRenderTarget(Y),Ae.updateRenderTargetMipmap(Y),p.setRenderTarget($)}function Mn(E,z,H){const N=z.isScene===!0?z.overrideMaterial:null;for(let $=0,Se=E.length;$<Se;$++){const Ce=E[$],Pe=Ce.object,Re=Ce.geometry,Ge=N===null?Ce.material:N,Ne=Ce.group;Pe.layers.test(H.layers)&&at(Pe,z,H,Re,Ge,Ne)}}function at(E,z,H,N,$,Se){E.onBeforeRender(p,z,H,N,$,Se),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(p,z,H,N,E,Se),$.transparent===!0&&$.side===di&&$.forceSinglePass===!1?($.side=Qt,$.needsUpdate=!0,p.renderBufferDirect(H,z,N,$,E,Se),$.side=Pi,$.needsUpdate=!0,p.renderBufferDirect(H,z,N,$,E,Se),$.side=di):p.renderBufferDirect(H,z,N,$,E,Se),E.onAfterRender(p,z,H,N,$,Se)}function rn(E,z,H){z.isScene!==!0&&(z=B);const N=be.get(E),$=d.state.lights,Se=d.state.shadowsArray,Ce=$.state.version,Pe=ke.getParameters(E,$.state,Se,z,H),Re=ke.getProgramCacheKey(Pe);let Ge=N.programs;N.environment=E.isMeshStandardMaterial?z.environment:null,N.fog=z.fog,N.envMap=(E.isMeshStandardMaterial?Ke:Ie).get(E.envMap||N.environment),Ge===void 0&&(E.addEventListener("dispose",Be),Ge=new Map,N.programs=Ge);let Ne=Ge.get(Re);if(Ne!==void 0){if(N.currentProgram===Ne&&N.lightsStateVersion===Ce)return bn(E,Pe),Ne}else Pe.uniforms=ke.getUniforms(E),E.onBuild(H,Pe,p),E.onBeforeCompile(Pe,p),Ne=ke.acquireProgram(Pe,Re),Ge.set(Re,Ne),N.uniforms=Pe.uniforms;const Oe=N.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=C.uniform),bn(E,Pe),N.needsLights=Tv(E),N.lightsStateVersion=Ce,N.needsLights&&(Oe.ambientLightColor.value=$.state.ambient,Oe.lightProbe.value=$.state.probe,Oe.directionalLights.value=$.state.directional,Oe.directionalLightShadows.value=$.state.directionalShadow,Oe.spotLights.value=$.state.spot,Oe.spotLightShadows.value=$.state.spotShadow,Oe.rectAreaLights.value=$.state.rectArea,Oe.ltc_1.value=$.state.rectAreaLTC1,Oe.ltc_2.value=$.state.rectAreaLTC2,Oe.pointLights.value=$.state.point,Oe.pointLightShadows.value=$.state.pointShadow,Oe.hemisphereLights.value=$.state.hemi,Oe.directionalShadowMap.value=$.state.directionalShadowMap,Oe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Oe.spotShadowMap.value=$.state.spotShadowMap,Oe.spotLightMatrix.value=$.state.spotLightMatrix,Oe.spotLightMap.value=$.state.spotLightMap,Oe.pointShadowMap.value=$.state.pointShadowMap,Oe.pointShadowMatrix.value=$.state.pointShadowMatrix);const lt=Ne.getUniforms(),jt=Is.seqWithValue(lt.seq,Oe);return N.currentProgram=Ne,N.uniformsList=jt,Ne}function bn(E,z){const H=be.get(E);H.outputEncoding=z.outputEncoding,H.instancing=z.instancing,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphColors=z.morphColors,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents,H.toneMapping=z.toneMapping}function bv(E,z,H,N,$){z.isScene!==!0&&(z=B),Ae.resetTextureUnits();const Se=z.fog,Ce=N.isMeshStandardMaterial?z.environment:null,Pe=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:sr,Re=(N.isMeshStandardMaterial?Ke:Ie).get(N.envMap||Ce),Ge=N.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ne=!!N.normalMap&&!!H.attributes.tangent,Oe=!!H.morphAttributes.position,lt=!!H.morphAttributes.normal,jt=!!H.morphAttributes.color,On=N.toneMapped?p.toneMapping:Yn,Oi=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ut=Oi!==void 0?Oi.length:0,Fe=be.get(N),Fl=d.state.lights;if(V===!0&&(K===!0||E!==b)){const Xt=E===b&&N.id===x;C.setState(N,E,Xt)}let vt=!1;N.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Fl.state.version||Fe.outputEncoding!==Pe||$.isInstancedMesh&&Fe.instancing===!1||!$.isInstancedMesh&&Fe.instancing===!0||$.isSkinnedMesh&&Fe.skinning===!1||!$.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Re||N.fog===!0&&Fe.fog!==Se||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==C.numPlanes||Fe.numIntersection!==C.numIntersection)||Fe.vertexAlphas!==Ge||Fe.vertexTangents!==Ne||Fe.morphTargets!==Oe||Fe.morphNormals!==lt||Fe.morphColors!==jt||Fe.toneMapping!==On||ne.isWebGL2===!0&&Fe.morphTargetsCount!==ut)&&(vt=!0):(vt=!0,Fe.__version=N.version);let Fi=Fe.currentProgram;vt===!0&&(Fi=rn(N,z,$));let vd=!1,Sa=!1,zl=!1;const kt=Fi.getUniforms(),zi=Fe.uniforms;if(oe.useProgram(Fi.program)&&(vd=!0,Sa=!0,zl=!0),N.id!==x&&(x=N.id,Sa=!0),vd||b!==E){if(kt.setValue(D,"projectionMatrix",E.projectionMatrix),ne.logarithmicDepthBuffer&&kt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),b!==E&&(b=E,Sa=!0,zl=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Xt=kt.map.cameraPosition;Xt!==void 0&&Xt.setValue(D,L.setFromMatrixPosition(E.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&kt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||$.isSkinnedMesh)&&kt.setValue(D,"viewMatrix",E.matrixWorldInverse)}if($.isSkinnedMesh){kt.setOptional(D,$,"bindMatrix"),kt.setOptional(D,$,"bindMatrixInverse");const Xt=$.skeleton;Xt&&(ne.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),kt.setValue(D,"boneTexture",Xt.boneTexture,Ae),kt.setValue(D,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ul=H.morphAttributes;if((Ul.position!==void 0||Ul.normal!==void 0||Ul.color!==void 0&&ne.isWebGL2===!0)&&ie.update($,H,Fi),(Sa||Fe.receiveShadow!==$.receiveShadow)&&(Fe.receiveShadow=$.receiveShadow,kt.setValue(D,"receiveShadow",$.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(zi.envMap.value=Re,zi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Sa&&(kt.setValue(D,"toneMappingExposure",p.toneMappingExposure),Fe.needsLights&&Ev(zi,zl),Se&&N.fog===!0&&Ue.refreshFogUniforms(zi,Se),Ue.refreshMaterialUniforms(zi,N,Q,R,Y),Is.upload(D,Fe.uniformsList,zi,Ae)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Is.upload(D,Fe.uniformsList,zi,Ae),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&kt.setValue(D,"center",$.center),kt.setValue(D,"modelViewMatrix",$.modelViewMatrix),kt.setValue(D,"normalMatrix",$.normalMatrix),kt.setValue(D,"modelMatrix",$.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Xt=N.uniformsGroups;for(let Bl=0,Cv=Xt.length;Bl<Cv;Bl++)if(ne.isWebGL2){const _d=Xt[Bl];Z.update(_d,Fi),Z.bind(_d,Fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fi}function Ev(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Tv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,z,H){be.get(E.texture).__webglTexture=z,be.get(E.depthTexture).__webglTexture=H;const N=be.get(E);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=H===void 0,N.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,z){const H=be.get(E);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,H=0){_=E,m=z,v=H;let N=!0,$=null,Se=!1,Ce=!1;if(E){const Re=be.get(E);Re.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(36160,null),N=!1):Re.__webglFramebuffer===void 0?Ae.setupRenderTarget(E):Re.__hasExternalTextures&&Ae.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture);const Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ce=!0);const Ne=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?($=Ne[z],Se=!0):ne.isWebGL2&&E.samples>0&&Ae.useMultisampledRTT(E)===!1?$=be.get(E).__webglMultisampledFramebuffer:$=Ne,T.copy(E.viewport),A.copy(E.scissor),S=E.scissorTest}else T.copy(I).multiplyScalar(Q).floor(),A.copy(k).multiplyScalar(Q).floor(),S=O;if(oe.bindFramebuffer(36160,$)&&ne.drawBuffers&&N&&oe.drawBuffers(E,$),oe.viewport(T),oe.scissor(A),oe.setScissorTest(S),Se){const Re=be.get(E.texture);D.framebufferTexture2D(36160,36064,34069+z,Re.__webglTexture,H)}else if(Ce){const Re=be.get(E.texture),Ge=z||0;D.framebufferTextureLayer(36160,36064,Re.__webglTexture,H||0,Ge)}x=-1},this.readRenderTargetPixels=function(E,z,H,N,$,Se,Ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){oe.bindFramebuffer(36160,Pe);try{const Re=E.texture,Ge=Re.format,Ne=Re.type;if(Ge!==yn&&ye.convert(Ge)!==D.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ne===Co&&(se.has("EXT_color_buffer_half_float")||ne.isWebGL2&&se.has("EXT_color_buffer_float"));if(Ne!==or&&ye.convert(Ne)!==D.getParameter(35738)&&!(Ne===Qi&&(ne.isWebGL2||se.has("OES_texture_float")||se.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-N&&H>=0&&H<=E.height-$&&D.readPixels(z,H,N,$,ye.convert(Ge),ye.convert(Ne),Se)}finally{const Re=_!==null?be.get(_).__webglFramebuffer:null;oe.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(E,z,H=0){const N=Math.pow(2,-H),$=Math.floor(z.image.width*N),Se=Math.floor(z.image.height*N);Ae.setTexture2D(z,0),D.copyTexSubImage2D(3553,H,0,0,E.x,E.y,$,Se),oe.unbindTexture()},this.copyTextureToTexture=function(E,z,H,N=0){const $=z.image.width,Se=z.image.height,Ce=ye.convert(H.format),Pe=ye.convert(H.type);Ae.setTexture2D(H,0),D.pixelStorei(37440,H.flipY),D.pixelStorei(37441,H.premultiplyAlpha),D.pixelStorei(3317,H.unpackAlignment),z.isDataTexture?D.texSubImage2D(3553,N,E.x,E.y,$,Se,Ce,Pe,z.image.data):z.isCompressedTexture?D.compressedTexSubImage2D(3553,N,E.x,E.y,z.mipmaps[0].width,z.mipmaps[0].height,Ce,z.mipmaps[0].data):D.texSubImage2D(3553,N,E.x,E.y,Ce,Pe,z.image),N===0&&H.generateMipmaps&&D.generateMipmap(3553),oe.unbindTexture()},this.copyTextureToTexture3D=function(E,z,H,N,$=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=E.max.x-E.min.x+1,Ce=E.max.y-E.min.y+1,Pe=E.max.z-E.min.z+1,Re=ye.convert(N.format),Ge=ye.convert(N.type);let Ne;if(N.isData3DTexture)Ae.setTexture3D(N,0),Ne=32879;else if(N.isDataArrayTexture)Ae.setTexture2DArray(N,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(37440,N.flipY),D.pixelStorei(37441,N.premultiplyAlpha),D.pixelStorei(3317,N.unpackAlignment);const Oe=D.getParameter(3314),lt=D.getParameter(32878),jt=D.getParameter(3316),On=D.getParameter(3315),Oi=D.getParameter(32877),ut=H.isCompressedTexture?H.mipmaps[0]:H.image;D.pixelStorei(3314,ut.width),D.pixelStorei(32878,ut.height),D.pixelStorei(3316,E.min.x),D.pixelStorei(3315,E.min.y),D.pixelStorei(32877,E.min.z),H.isDataTexture||H.isData3DTexture?D.texSubImage3D(Ne,$,z.x,z.y,z.z,Se,Ce,Pe,Re,Ge,ut.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ne,$,z.x,z.y,z.z,Se,Ce,Pe,Re,ut.data)):D.texSubImage3D(Ne,$,z.x,z.y,z.z,Se,Ce,Pe,Re,Ge,ut),D.pixelStorei(3314,Oe),D.pixelStorei(32878,lt),D.pixelStorei(3316,jt),D.pixelStorei(3315,On),D.pixelStorei(32877,Oi),$===0&&N.generateMipmaps&&D.generateMipmap(Ne),oe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ae.setTextureCube(E,0):E.isData3DTexture?Ae.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ae.setTexture2DArray(E,0):Ae.setTexture2D(E,0),oe.unbindTexture()},this.resetState=function(){m=0,v=0,_=null,oe.reset(),he.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(nd.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}}});class O2 extends nd{}O2.prototype.isWebGL1Renderer=!0;class F2 extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class z2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yp(){return(typeof performance=="undefined"?Date:performance).now()}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);var id={exports:{}},Bo={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U2=je.exports,V0=60103;Bo.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Zp=Symbol.for;V0=Zp("react.element"),Bo.Fragment=Zp("react.fragment")}var B2=U2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G2=Object.prototype.hasOwnProperty,V2={key:!0,ref:!0,__self:!0,__source:!0};function H0(n,e,t){var i,r={},a=null,o=null;t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)G2.call(e,i)&&!V2.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:V0,type:n,key:a,ref:o,props:r,_owner:B2.current}}Bo.jsx=H0;Bo.jsxs=H0;id.exports=Bo;const _e=id.exports.jsx,tt=id.exports.jsxs,H2=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,W2=`
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK  = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE  = vec3(47.0,  75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);

  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;

  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }

  vec3 gradientColor;
  
  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];
    
    gradientColor = mix(c1, c2, f);
  }
  
  return gradientColor * 0.5;
}

  float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;

  float x_offset   = offset;
  float x_movement = time * 0.1;
  float amp        = sin(offset + time * 0.2) * 0.3;
  float y          = sin(uv.x + x_offset + x_movement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius); // radial falloff around cursor
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;
  
  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);

  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }
  
  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      );
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`,Kp=8;function j2(n){let e=n.trim();e.startsWith("#")&&(e=e.slice(1));let t=255,i=255,r=255;return e.length===3?(t=parseInt(e[0]+e[0],16),i=parseInt(e[1]+e[1],16),r=parseInt(e[2]+e[2],16)):e.length===6&&(t=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16)),new U(t/255,i/255,r/255)}function X2({linesGradient:n,enabledWaves:e=["top","middle","bottom"],lineCount:t=[6],lineDistance:i=[5],topWavePosition:r,middleWavePosition:a,bottomWavePosition:o={x:2,y:-.7,rotate:-1},animationSpeed:s=1,interactive:l=!0,bendRadius:u=5,bendStrength:f=-.5,mouseDamping:h=.05,parallax:d=!0,parallaxStrength:g=.2,mixBlendMode:y="screen"}){const p=je.exports.useRef(null),c=je.exports.useRef(new Ve(-1e3,-1e3)),m=je.exports.useRef(new Ve(-1e3,-1e3)),v=je.exports.useRef(0),_=je.exports.useRef(0),x=je.exports.useRef(new Ve(0,0)),b=je.exports.useRef(new Ve(0,0)),T=I=>{var O;if(typeof t=="number")return t;if(!e.includes(I))return 0;const k=e.indexOf(I);return(O=t[k])!=null?O:6},A=I=>{var O;if(typeof i=="number")return i;if(!e.includes(I))return .1;const k=e.indexOf(I);return(O=i[k])!=null?O:.1},S=e.includes("top")?T("top"):0,M=e.includes("middle")?T("middle"):0,R=e.includes("bottom")?T("bottom"):0,Q=e.includes("top")?A("top")*.01:.01,q=e.includes("middle")?A("middle")*.01:.01,F=e.includes("bottom")?A("bottom")*.01:.01;return je.exports.useEffect(()=>{var ne,oe,ge,be,Ae,Ie,Ke,st,ft;if(!p.current)return;const I=new F2,k=new F0(-1,1,1,-1,0,1);k.position.z=1;const O=new nd({antialias:!0,alpha:!1});O.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),O.domElement.style.width="100%",O.domElement.style.height="100%",p.current.appendChild(O.domElement);const W={iTime:{value:0},iResolution:{value:new U(1,1,1)},animationSpeed:{value:s},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:S},middleLineCount:{value:M},bottomLineCount:{value:R},topLineDistance:{value:Q},middleLineDistance:{value:q},bottomLineDistance:{value:F},topWavePosition:{value:new U((ne=r==null?void 0:r.x)!=null?ne:10,(oe=r==null?void 0:r.y)!=null?oe:.5,(ge=r==null?void 0:r.rotate)!=null?ge:-.4)},middleWavePosition:{value:new U((be=a==null?void 0:a.x)!=null?be:5,(Ae=a==null?void 0:a.y)!=null?Ae:0,(Ie=a==null?void 0:a.rotate)!=null?Ie:.2)},bottomWavePosition:{value:new U((Ke=o==null?void 0:o.x)!=null?Ke:2,(st=o==null?void 0:o.y)!=null?st:-.7,(ft=o==null?void 0:o.rotate)!=null?ft:.4)},iMouse:{value:new Ve(-1e3,-1e3)},interactive:{value:l},bendRadius:{value:u},bendStrength:{value:f},bendInfluence:{value:0},parallax:{value:d},parallaxStrength:{value:g},parallaxOffset:{value:new Ve(0,0)},lineGradient:{value:Array.from({length:Kp},()=>new U(1,1,1))},lineGradientCount:{value:0}};if(n&&n.length>0){const He=n.slice(0,Kp);W.lineGradientCount.value=He.length,He.forEach((ke,Ue)=>{const rt=j2(ke);W.lineGradient.value[Ue].set(rt.x,rt.y,rt.z)})}const V=new Ri({uniforms:W,vertexShader:H2,fragmentShader:W2}),K=new Pl(2,2),Y=new $n(K,V);I.add(Y);const G=new z2,L=()=>{const He=p.current,ke=He.clientWidth||1,Ue=He.clientHeight||1;O.setSize(ke,Ue,!1);const rt=O.domElement.width,Tt=O.domElement.height;W.iResolution.value.set(rt,Tt,1)};L();const B=typeof ResizeObserver!="undefined"?new ResizeObserver(L):null;B&&p.current&&B.observe(p.current);const J=He=>{const ke=O.domElement.getBoundingClientRect(),Ue=He.clientX-ke.left,rt=He.clientY-ke.top,Tt=O.getPixelRatio();if(c.current.set(Ue*Tt,(ke.height-rt)*Tt),v.current=1,d){const C=ke.width/2,w=ke.height/2,X=(Ue-C)/ke.width,ie=-(rt-w)/ke.height;x.current.set(X*g,ie*g)}},D=()=>{v.current=0};l&&(O.domElement.addEventListener("pointermove",J),O.domElement.addEventListener("pointerleave",D));let le=0;const se=()=>{W.iTime.value=G.getElapsedTime(),l&&(m.current.lerp(c.current,h),W.iMouse.value.copy(m.current),_.current+=(v.current-_.current)*h,W.bendInfluence.value=_.current),d&&(b.current.lerp(x.current,h),W.parallaxOffset.value.copy(b.current)),O.render(I,k),le=requestAnimationFrame(se)};return se(),()=>{cancelAnimationFrame(le),B&&p.current&&B.disconnect(),l&&(O.domElement.removeEventListener("pointermove",J),O.domElement.removeEventListener("pointerleave",D)),K.dispose(),V.dispose(),O.dispose(),O.domElement.parentElement&&O.domElement.parentElement.removeChild(O.domElement)}},[n,e,t,i,r,a,o,s,l,u,f,h,d,g]),_e("div",{ref:p,className:"floating-lines-container",style:{mixBlendMode:y}})}const $2="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",Ga={INITIAL_DURATION:1200,INITIAL_X_OFFSET:70,INITIAL_Y_OFFSET:60,DEVICE_BETA_OFFSET:20,ENTER_TRANSITION_MS:180},Va=(n,e=0,t=100)=>Math.min(Math.max(n,e),t),Gc=(n,e=3)=>parseFloat(n.toFixed(e)),Qp=(n,e,t,i,r)=>Gc(i+(r-i)*(n-e)/(t-e)),q2=({avatarUrl:n="/src/avatar/MS.jpg",iconUrl:e="/src/avatar/dev.png",grainUrl:t="",innerGradient:i,behindGlowEnabled:r=!0,behindGlowColor:a,behindGlowSize:o,className:s="",enableTilt:l=!0,enableMobileTilt:u=!0,mobileTiltSensitivity:f=5,miniAvatarUrl:h,name:d="Michele Sanfilippo",title:g="Software Engineer",handle:y="michelesanfilippo",status:p="I build stuff.",contactText:c="Contact",showUserInfo:m=!0,onContactClick:v})=>{const _=je.exports.useRef(null),x=je.exports.useRef(null),b=je.exports.useRef(null),T=je.exports.useRef(null),A=je.exports.useMemo(()=>{if(!l)return null;let k=null,O=!1,W=0,V=0,K=0,Y=0,G=0;const L=.14,B=.6;let J=0;const D=(ne,oe)=>{const ge=x.current,be=_.current;if(!ge||!be)return;const Ae=ge.clientWidth||1,Ie=ge.clientHeight||1,Ke=Va(100/Ae*ne),st=Va(100/Ie*oe),ft=Ke-50,He=st-50,ke={"--pointer-x":`${Ke}%`,"--pointer-y":`${st}%`,"--background-x":`${Qp(Ke,0,100,35,65)}%`,"--background-y":`${Qp(st,0,100,35,65)}%`,"--pointer-from-center":`${Va(Math.hypot(st-50,Ke-50)/50,0,1)}`,"--pointer-from-top":`${st/100}`,"--pointer-from-left":`${Ke/100}`,"--rotate-x":`${Gc(-(ft/5))}deg`,"--rotate-y":`${Gc(He/4)}deg`};for(const[Ue,rt]of Object.entries(ke))be.style.setProperty(Ue,rt)},le=ne=>{if(!O)return;W===0&&(W=ne);const oe=(ne-W)/1e3;W=ne;const ge=ne<J?B:L,be=1-Math.exp(-oe/ge);V+=(Y-V)*be,K+=(G-K)*be,D(V,K),Math.abs(Y-V)>.05||Math.abs(G-K)>.05||document.hasFocus()?k=requestAnimationFrame(le):(O=!1,W=0,k&&(cancelAnimationFrame(k),k=null))},se=()=>{O||(O=!0,W=0,k=requestAnimationFrame(le))};return{setImmediate(ne,oe){V=ne,K=oe,D(V,K)},setTarget(ne,oe){Y=ne,G=oe,se()},toCenter(){const ne=x.current;!ne||this.setTarget(ne.clientWidth/2,ne.clientHeight/2)},beginInitial(ne){J=performance.now()+ne,se()},getCurrent(){return{x:V,y:K,tx:Y,ty:G}},cancel(){k&&cancelAnimationFrame(k),k=null,O=!1,W=0}}},[l]),S=(k,O)=>{const W=O.getBoundingClientRect();return{x:k.clientX-W.left,y:k.clientY-W.top}},M=je.exports.useCallback(k=>{const O=x.current;if(!O||!A)return;const{x:W,y:V}=S(k,O);A.setTarget(W,V)},[A]),R=je.exports.useCallback(k=>{const O=x.current;if(!O||!A)return;O.classList.add("active"),O.classList.add("entering"),b.current&&window.clearTimeout(b.current),b.current=window.setTimeout(()=>{O.classList.remove("entering")},Ga.ENTER_TRANSITION_MS);const{x:W,y:V}=S(k,O);A.setTarget(W,V)},[A]),Q=je.exports.useCallback(()=>{const k=x.current;if(!k||!A)return;A.toCenter();const O=()=>{const{x:W,y:V,tx:K,ty:Y}=A.getCurrent();Math.hypot(K-W,Y-V)<.6?(k.classList.remove("active"),T.current=null):T.current=requestAnimationFrame(O)};T.current&&cancelAnimationFrame(T.current),T.current=requestAnimationFrame(O)},[A]),q=je.exports.useCallback(k=>{const O=x.current;if(!O||!A)return;const{beta:W,gamma:V}=k;if(W==null||V==null)return;const K=O.clientWidth/2,Y=O.clientHeight/2,G=Va(K+V*f,0,O.clientWidth),L=Va(Y+(W-Ga.DEVICE_BETA_OFFSET)*f,0,O.clientHeight);A.setTarget(G,L)},[A,f]);je.exports.useEffect(()=>{if(!l||!A)return;const k=x.current;if(!k)return;const O=M,W=R,V=Q,K=q;k.addEventListener("pointerenter",W),k.addEventListener("pointermove",O),k.addEventListener("pointerleave",V);const Y=()=>{if(!u||location.protocol!=="https:")return;const B=window.DeviceMotionEvent;B&&typeof B.requestPermission=="function"?B.requestPermission().then(J=>{J==="granted"&&window.addEventListener("deviceorientation",K)}).catch(console.error):window.addEventListener("deviceorientation",K)};k.addEventListener("click",Y);const G=(k.clientWidth||0)-Ga.INITIAL_X_OFFSET,L=Ga.INITIAL_Y_OFFSET;return A.setImmediate(G,L),A.toCenter(),A.beginInitial(Ga.INITIAL_DURATION),()=>{k.removeEventListener("pointerenter",W),k.removeEventListener("pointermove",O),k.removeEventListener("pointerleave",V),k.removeEventListener("click",Y),window.removeEventListener("deviceorientation",K),b.current&&window.clearTimeout(b.current),T.current&&cancelAnimationFrame(T.current),A.cancel(),k.classList.remove("entering")}},[l,u,A,M,R,Q,q]);const F=je.exports.useMemo(()=>({"--icon":e?`url(${e})`:"none","--grain":t?`url(${t})`:"none","--inner-gradient":i!=null?i:$2,"--behind-glow-color":a!=null?a:"rgba(125, 190, 255, 0.67)","--behind-glow-size":o!=null?o:"50%"}),[e,t,i,a,o]),I=je.exports.useCallback(()=>{v==null||v()},[v]);return tt("div",{ref:_,className:`pc-card-wrapper ${s}`.trim(),style:F,children:[r&&_e("div",{className:"pc-behind"}),_e("div",{ref:x,className:"pc-card-shell",children:_e("section",{className:"pc-card",children:tt("div",{className:"pc-inside",children:[_e("div",{className:"pc-shine"}),_e("div",{className:"pc-glare"}),tt("div",{className:"pc-content pc-avatar-content",children:[_e("img",{className:"avatar",src:n,alt:`${d||"User"} avatar`,loading:"lazy",onError:k=>{const O=k.target;O.style.display="none"}}),m&&tt("div",{className:"pc-user-info",children:[tt("div",{className:"pc-user-details",children:[_e("div",{className:"pc-mini-avatar",children:_e("img",{src:h||n,alt:`${d||"User"} mini avatar`,loading:"lazy",onError:k=>{const O=k.target;O.style.opacity="0.5",O.src=n}})}),tt("div",{className:"pc-user-text",children:[tt("div",{className:"pc-handle",children:["@",y]}),_e("div",{className:"pc-status",children:p})]})]}),_e("button",{className:"pc-contact-btn",onClick:I,style:{pointerEvents:"auto"},type:"button","aria-label":`Contact ${d||"user"}`,children:c})]})]}),_e("div",{className:"pc-content",children:tt("div",{className:"pc-details",children:[_e("h3",{children:d}),_e("p",{children:g})]})})]})})})]})},Y2=dl.memo(q2);const ys=({children:n,className:e="",spotlightColor:t="rgba(255, 255, 255, 0.25)"})=>{const i=je.exports.useRef(null),[r,a]=je.exports.useState(!1);return _e("div",{ref:i,onMouseMove:u=>{if(!i.current)return;const f=i.current.getBoundingClientRect(),h=u.clientX-f.left,d=u.clientY-f.top,g=f.width/2,y=f.height/2,p=(d-y)/y*5,c=(h-g)/g*-5;i.current.style.setProperty("--mouse-x",`${h}px`),i.current.style.setProperty("--mouse-y",`${d}px`),i.current.style.setProperty("--spotlight-color",t),i.current.style.setProperty("--rotate-x",`${p}deg`),i.current.style.setProperty("--rotate-y",`${c}deg`)},onMouseEnter:()=>{a(!0)},onMouseLeave:()=>{a(!1),i.current&&(i.current.style.setProperty("--rotate-x","0deg"),i.current.style.setProperty("--rotate-y","0deg"))},className:`card-spotlight ${r?"hovered":""} ${e}`,children:n})};/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Jp(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function ce(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Jp(Object(t),!0).forEach(function(i){Q2(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Jp(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function sl(n){return sl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sl(n)}function Z2(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function em(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function K2(n,e,t){return e&&em(n.prototype,e),t&&em(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Q2(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function rd(n,e){return eb(n)||nb(n,e)||W0(n,e)||rb()}function Dl(n){return J2(n)||tb(n)||W0(n)||ib()}function J2(n){if(Array.isArray(n))return Vc(n)}function eb(n){if(Array.isArray(n))return n}function tb(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function nb(n,e){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,a=!1,o,s;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){a=!0,s=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(a)throw s}}return i}}function W0(n,e){if(!!n){if(typeof n=="string")return Vc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Vc(n,e)}}function Vc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function ib(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var tm=function(){},ad={},j0={},X0=null,$0={mark:tm,measure:tm};try{typeof window!="undefined"&&(ad=window),typeof document!="undefined"&&(j0=document),typeof MutationObserver!="undefined"&&(X0=MutationObserver),typeof performance!="undefined"&&($0=performance)}catch{}var ab=ad.navigator||{},nm=ab.userAgent,im=nm===void 0?"":nm,Di=ad,Ze=j0,rm=X0,Ss=$0;Di.document;var ti=!!Ze.documentElement&&!!Ze.head&&typeof Ze.addEventListener=="function"&&typeof Ze.createElement=="function",q0=~im.indexOf("MSIE")||~im.indexOf("Trident/"),Kn="___FONT_AWESOME___",Hc=16,Y0="fa",Z0="svg-inline--fa",ur="data-fa-i2svg",Wc="data-fa-pseudo-element",ob="data-fa-pseudo-element-pending",od="data-prefix",sd="data-icon",am="fontawesome-i2svg",sb="async",lb=["HTML","HEAD","STYLE","SCRIPT"],K0=function(){try{return!0}catch{return!1}}(),ld={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},ll={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Q0={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},ub={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},cb=/fa[srltdbk\-\ ]/,J0="fa-layers-text",fb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,db={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},ev=[1,2,3,4,5,6,7,8,9,10],hb=ev.concat([11,12,13,14,15,16,17,18,19,20]),pb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ji={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mb=[].concat(Dl(Object.keys(ll)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ji.GROUP,Ji.SWAP_OPACITY,Ji.PRIMARY,Ji.SECONDARY]).concat(ev.map(function(n){return"".concat(n,"x")})).concat(hb.map(function(n){return"w-".concat(n)})),tv=Di.FontAwesomeConfig||{};function gb(n){var e=Ze.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function vb(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(Ze&&typeof Ze.querySelector=="function"){var _b=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_b.forEach(function(n){var e=rd(n,2),t=e[0],i=e[1],r=vb(gb(t));r!=null&&(tv[i]=r)})}var xb={familyPrefix:Y0,styleDefault:"solid",replacementClass:Z0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},uo=ce(ce({},xb),tv);uo.autoReplaceSvg||(uo.observeMutations=!1);var xe={};Object.keys(uo).forEach(function(n){Object.defineProperty(xe,n,{enumerable:!0,set:function(t){uo[n]=t,ks.forEach(function(i){return i(xe)})},get:function(){return uo[n]}})});Di.FontAwesomeConfig=xe;var ks=[];function yb(n){return ks.push(n),function(){ks.splice(ks.indexOf(n),1)}}var oi=Hc,Rn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Sb(n){if(!(!n||!ti)){var e=Ze.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=Ze.head.childNodes,i=null,r=t.length-1;r>-1;r--){var a=t[r],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=a)}return Ze.head.insertBefore(e,i),n}}var wb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Lo(){for(var n=12,e="";n-- >0;)e+=wb[Math.random()*62|0];return e}function ya(n){for(var e=[],t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function ud(n){return n.classList?ya(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(e){return e})}function nv(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Mb(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(nv(n[t]),'" ')},"").trim()}function Il(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t].trim(),";")},"")}function cd(n){return n.size!==Rn.size||n.x!==Rn.x||n.y!==Rn.y||n.rotate!==Rn.rotate||n.flipX||n.flipY}function bb(n){var e=n.transform,t=n.containerWidth,i=n.iconWidth,r={transform:"translate(".concat(t/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Eb(n){var e=n.transform,t=n.width,i=t===void 0?Hc:t,r=n.height,a=r===void 0?Hc:r,o=n.startCentered,s=o===void 0?!1:o,l="";return s&&q0?l+="translate(".concat(e.x/oi-i/2,"em, ").concat(e.y/oi-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/oi,"em), calc(-50% + ").concat(e.y/oi,"em)) "):l+="translate(".concat(e.x/oi,"em, ").concat(e.y/oi,"em) "),l+="scale(".concat(e.size/oi*(e.flipX?-1:1),", ").concat(e.size/oi*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Tb=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function iv(){var n=Y0,e=Z0,t=xe.familyPrefix,i=xe.replacementClass,r=Tb;if(t!==n||i!==e){var a=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(a,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(i))}return r}var om=!1;function Hu(){xe.autoAddCss&&!om&&(Sb(iv()),om=!0)}var Cb={mixout:function(){return{dom:{css:iv,insertCss:Hu}}},hooks:function(){return{beforeDOMElementCreation:function(){Hu()},beforeI2svg:function(){Hu()}}}},Qn=Di||{};Qn[Kn]||(Qn[Kn]={});Qn[Kn].styles||(Qn[Kn].styles={});Qn[Kn].hooks||(Qn[Kn].hooks={});Qn[Kn].shims||(Qn[Kn].shims=[]);var wn=Qn[Kn],rv=[],Ab=function n(){Ze.removeEventListener("DOMContentLoaded",n),ul=1,rv.map(function(e){return e()})},ul=!1;ti&&(ul=(Ze.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ze.readyState),ul||Ze.addEventListener("DOMContentLoaded",Ab));function Lb(n){!ti||(ul?setTimeout(n,0):rv.push(n))}function Go(n){var e=n.tag,t=n.attributes,i=t===void 0?{}:t,r=n.children,a=r===void 0?[]:r;return typeof n=="string"?nv(n):"<".concat(e," ").concat(Mb(i),">").concat(a.map(Go).join(""),"</").concat(e,">")}function sm(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var Pb=function(e,t){return function(i,r,a,o){return e.call(t,i,r,a,o)}},Wu=function(e,t,i,r){var a=Object.keys(e),o=a.length,s=r!==void 0?Pb(t,r):t,l,u,f;for(i===void 0?(l=1,f=e[a[0]]):(l=0,f=i);l<o;l++)u=a[l],f=s(f,e[u],u,e);return f};function Rb(n){for(var e=[],t=0,i=n.length;t<i;){var r=n.charCodeAt(t++);if(r>=55296&&r<=56319&&t<i){var a=n.charCodeAt(t++);(a&64512)==56320?e.push(((r&1023)<<10)+(a&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}function jc(n){var e=Rb(n);return e.length===1?e[0].toString(16):null}function Db(n,e){var t=n.length,i=n.charCodeAt(e),r;return i>=55296&&i<=56319&&t>e+1&&(r=n.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function lm(n){return Object.keys(n).reduce(function(e,t){var i=n[t],r=!!i.icon;return r?e[i.iconName]=i.icon:e[t]=i,e},{})}function Xc(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,r=i===void 0?!1:i,a=lm(e);typeof wn.hooks.addPack=="function"&&!r?wn.hooks.addPack(n,lm(e)):wn.styles[n]=ce(ce({},wn.styles[n]||{}),a),n==="fas"&&Xc("fa",e)}var co=wn.styles,Ib=wn.shims,kb=Object.values(Q0),fd=null,av={},ov={},sv={},lv={},uv={},Nb=Object.keys(ld);function Ob(n){return~mb.indexOf(n)}function Fb(n,e){var t=e.split("-"),i=t[0],r=t.slice(1).join("-");return i===n&&r!==""&&!Ob(r)?r:null}var cv=function(){var e=function(a){return Wu(co,function(o,s,l){return o[l]=Wu(s,a,{}),o},{})};av=e(function(r,a,o){if(a[3]&&(r[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),ov=e(function(r,a,o){if(r[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),uv=e(function(r,a,o){var s=a[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var t="far"in co||xe.autoFetchSvg,i=Wu(Ib,function(r,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});sv=i.names,lv=i.unicodes,fd=kl(xe.styleDefault)};yb(function(n){fd=kl(n.styleDefault)});cv();function dd(n,e){return(av[n]||{})[e]}function zb(n,e){return(ov[n]||{})[e]}function Br(n,e){return(uv[n]||{})[e]}function fv(n){return sv[n]||{prefix:null,iconName:null}}function Ub(n){var e=lv[n],t=dd("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Ii(){return fd}var hd=function(){return{prefix:null,iconName:null,rest:[]}};function kl(n){var e=ld[n],t=ll[n]||ll[e],i=n in wn.styles?n:null;return t||i||null}function Nl(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.skipLookups,i=t===void 0?!1:t,r=null,a=n.reduce(function(o,s){var l=Fb(xe.familyPrefix,s);if(co[s]?(s=kb.includes(s)?ub[s]:s,r=s,o.prefix=s):Nb.indexOf(s)>-1?(r=s,o.prefix=kl(s)):l?o.iconName=l:s!==xe.replacementClass&&o.rest.push(s),!i&&o.prefix&&o.iconName){var u=r==="fa"?fv(o.iconName):{},f=Br(o.prefix,o.iconName);u.prefix&&(r=null),o.iconName=u.iconName||f||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!co.far&&co.fas&&!xe.autoFetchSvg&&(o.prefix="fas")}return o},hd());return(a.prefix==="fa"||r==="fa")&&(a.prefix=Ii()||"fas"),a}var Bb=function(){function n(){Z2(this,n),this.definitions={}}return K2(n,[{key:"add",value:function(){for(var t=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=ce(ce({},t.definitions[s]||{}),o[s]),Xc(s,o[s]);var l=Q0[s];l&&Xc(l,o[s]),cv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(a){var o=r[a],s=o.prefix,l=o.iconName,u=o.icon,f=u[2];t[s]||(t[s]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(t[s][h]=u)}),t[s][l]=u}),t}}]),n}(),um=[],Gr={},na={},Gb=Object.keys(na);function Vb(n,e){var t=e.mixoutsTo;return um=n,Gr={},Object.keys(na).forEach(function(i){Gb.indexOf(i)===-1&&delete na[i]}),um.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),sl(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=r[o][s]})}),i.hooks){var a=i.hooks();Object.keys(a).forEach(function(o){Gr[o]||(Gr[o]=[]),Gr[o].push(a[o])})}i.provides&&i.provides(na)}),t}function $c(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];var a=Gr[n]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function cr(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var r=Gr[n]||[];r.forEach(function(a){a.apply(null,t)})}function Jn(){var n=arguments[0],e=Array.prototype.slice.call(arguments,1);return na[n]?na[n].apply(null,e):void 0}function qc(n){n.prefix==="fa"&&(n.prefix="fas");var e=n.iconName,t=n.prefix||Ii();if(!!e)return e=Br(t,e)||e,sm(dv.definitions,t,e)||sm(wn.styles,t,e)}var dv=new Bb,Hb=function(){xe.autoReplaceSvg=!1,xe.observeMutations=!1,cr("noAuto")},Wb={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ti?(cr("beforeI2svg",e),Jn("pseudoElements2svg",e),Jn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;xe.autoReplaceSvg===!1&&(xe.autoReplaceSvg=!0),xe.observeMutations=!0,Lb(function(){Xb({autoReplaceSvgRoot:t}),cr("watch",e)})}},jb={icon:function(e){if(e===null)return null;if(sl(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Br(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=kl(e[0]);return{prefix:i,iconName:Br(i,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(xe.familyPrefix,"-"))>-1||e.match(cb))){var r=Nl(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Ii(),iconName:Br(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var a=Ii();return{prefix:a,iconName:Br(a,e)||e}}}},nn={noAuto:Hb,config:xe,dom:Wb,parse:jb,library:dv,findIconDefinition:qc,toHtml:Go},Xb=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,i=t===void 0?Ze:t;(Object.keys(wn.styles).length>0||xe.autoFetchSvg)&&ti&&xe.autoReplaceSvg&&nn.dom.i2svg({node:i})};function Ol(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(i){return Go(i)})}}),Object.defineProperty(n,"node",{get:function(){if(!!ti){var i=Ze.createElement("div");return i.innerHTML=n.html,i.children}}}),n}function $b(n){var e=n.children,t=n.main,i=n.mask,r=n.attributes,a=n.styles,o=n.transform;if(cd(o)&&t.found&&!i.found){var s=t.width,l=t.height,u={x:s/l/2,y:.5};r.style=Il(ce(ce({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function qb(n){var e=n.prefix,t=n.iconName,i=n.children,r=n.attributes,a=n.symbol,o=a===!0?"".concat(e,"-").concat(xe.familyPrefix,"-").concat(t):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ce(ce({},r),{},{id:o}),children:i}]}]}function pd(n){var e=n.icons,t=e.main,i=e.mask,r=n.prefix,a=n.iconName,o=n.transform,s=n.symbol,l=n.title,u=n.maskId,f=n.titleId,h=n.extra,d=n.watchable,g=d===void 0?!1:d,y=i.found?i:t,p=y.width,c=y.height,m=r==="fak",v=[xe.replacementClass,a?"".concat(xe.familyPrefix,"-").concat(a):""].filter(function(M){return h.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(h.classes).join(" "),_={children:[],attributes:ce(ce({},h.attributes),{},{"data-prefix":r,"data-icon":a,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(c)})},x=m&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/c*16*.0625,"em")}:{};g&&(_.attributes[ur]=""),l&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(f||Lo())},children:[l]}),delete _.attributes.title);var b=ce(ce({},_),{},{prefix:r,iconName:a,main:t,mask:i,maskId:u,transform:o,symbol:s,styles:ce(ce({},x),h.styles)}),T=i.found&&t.found?Jn("generateAbstractMask",b)||{children:[],attributes:{}}:Jn("generateAbstractIcon",b)||{children:[],attributes:{}},A=T.children,S=T.attributes;return b.children=A,b.attributes=S,s?qb(b):$b(b)}function cm(n){var e=n.content,t=n.width,i=n.height,r=n.transform,a=n.title,o=n.extra,s=n.watchable,l=s===void 0?!1:s,u=ce(ce(ce({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[ur]="");var f=ce({},o.styles);cd(r)&&(f.transform=Eb({transform:r,startCentered:!0,width:t,height:i}),f["-webkit-transform"]=f.transform);var h=Il(f);h.length>0&&(u.style=h);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function Yb(n){var e=n.content,t=n.title,i=n.extra,r=ce(ce(ce({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),a=Il(i.styles);a.length>0&&(r.style=a);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}var ju=wn.styles;function Yc(n){var e=n[0],t=n[1],i=n.slice(4),r=rd(i,1),a=r[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(xe.familyPrefix,"-").concat(Ji.GROUP)},children:[{tag:"path",attributes:{class:"".concat(xe.familyPrefix,"-").concat(Ji.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(xe.familyPrefix,"-").concat(Ji.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:t,icon:o}}var Zb={found:!1,width:512,height:512};function Kb(n,e){!K0&&!xe.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function Zc(n,e){var t=e;return e==="fa"&&xe.styleDefault!==null&&(e=Ii()),new Promise(function(i,r){if(Jn("missingIconAbstract"),t==="fa"){var a=fv(n)||{};n=a.iconName||n,e=a.prefix||e}if(n&&e&&ju[e]&&ju[e][n]){var o=ju[e][n];return i(Yc(o))}Kb(n,e),i(ce(ce({},Zb),{},{icon:xe.showMissingIcons&&n?Jn("missingIconAbstract")||{}:{}}))})}var fm=function(){},Kc=xe.measurePerformance&&Ss&&Ss.mark&&Ss.measure?Ss:{mark:fm,measure:fm},Za='FA "6.0.0"',Qb=function(e){return Kc.mark("".concat(Za," ").concat(e," begins")),function(){return hv(e)}},hv=function(e){Kc.mark("".concat(Za," ").concat(e," ends")),Kc.measure("".concat(Za," ").concat(e),"".concat(Za," ").concat(e," begins"),"".concat(Za," ").concat(e," ends"))},md={begin:Qb,end:hv},Ns=function(){};function dm(n){var e=n.getAttribute?n.getAttribute(ur):null;return typeof e=="string"}function Jb(n){var e=n.getAttribute?n.getAttribute(od):null,t=n.getAttribute?n.getAttribute(sd):null;return e&&t}function e3(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(xe.replacementClass)}function t3(){if(xe.autoReplaceSvg===!0)return Os.replace;var n=Os[xe.autoReplaceSvg];return n||Os.replace}function n3(n){return Ze.createElementNS("http://www.w3.org/2000/svg",n)}function i3(n){return Ze.createElement(n)}function pv(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,i=t===void 0?n.tag==="svg"?n3:i3:t;if(typeof n=="string")return Ze.createTextNode(n);var r=i(n.tag);Object.keys(n.attributes||[]).forEach(function(o){r.setAttribute(o,n.attributes[o])});var a=n.children||[];return a.forEach(function(o){r.appendChild(pv(o,{ceFn:i}))}),r}function r3(n){var e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Os={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(r){t.parentNode.insertBefore(pv(r),t)}),t.getAttribute(ur)===null&&xe.keepOriginalSource){var i=Ze.createComment(r3(t));t.parentNode.replaceChild(i,t)}else t.remove()},nest:function(e){var t=e[0],i=e[1];if(~ud(t).indexOf(xe.replacementClass))return Os.replace(e);var r=new RegExp("".concat(xe.familyPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var a=i[0].attributes.class.split(" ").reduce(function(s,l){return l===xe.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});i[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",a.toNode.join(" "))}var o=i.map(function(s){return Go(s)}).join(`
`);t.setAttribute(ur,""),t.innerHTML=o}};function hm(n){n()}function mv(n,e){var t=typeof e=="function"?e:Ns;if(n.length===0)t();else{var i=hm;xe.mutateApproach===sb&&(i=Di.requestAnimationFrame||hm),i(function(){var r=t3(),a=md.begin("mutate");n.map(r),a(),t()})}}var gd=!1;function gv(){gd=!0}function Qc(){gd=!1}var cl=null;function pm(n){if(!!rm&&!!xe.observeMutations){var e=n.treeCallback,t=e===void 0?Ns:e,i=n.nodeCallback,r=i===void 0?Ns:i,a=n.pseudoElementsCallback,o=a===void 0?Ns:a,s=n.observeMutationsRoot,l=s===void 0?Ze:s;cl=new rm(function(u){if(!gd){var f=Ii();ya(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!dm(h.addedNodes[0])&&(xe.searchPseudoElements&&o(h.target),t(h.target)),h.type==="attributes"&&h.target.parentNode&&xe.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&dm(h.target)&&~pb.indexOf(h.attributeName))if(h.attributeName==="class"&&Jb(h.target)){var d=Nl(ud(h.target)),g=d.prefix,y=d.iconName;h.target.setAttribute(od,g||f),y&&h.target.setAttribute(sd,y)}else e3(h.target)&&r(h.target)})}}),ti&&cl.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function a3(){!cl||cl.disconnect()}function o3(n){var e=n.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(i,r){var a=r.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(i[o]=s.join(":").trim()),i},{})),t}function s3(n){var e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"",r=Nl(ud(n));return r.prefix||(r.prefix=Ii()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||r.prefix&&i.length>0&&(r.iconName=zb(r.prefix,n.innerText)||dd(r.prefix,jc(n.innerText))),r}function l3(n){var e=ya(n.attributes).reduce(function(r,a){return r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r},{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return xe.autoA11y&&(t?e["aria-labelledby"]="".concat(xe.replacementClass,"-title-").concat(i||Lo()):(e["aria-hidden"]="true",e.focusable="false")),e}function u3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Rn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function mm(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=s3(n),i=t.iconName,r=t.prefix,a=t.rest,o=l3(n),s=$c("parseNodeAttributes",{},n),l=e.styleParser?o3(n):[];return ce({iconName:i,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:Rn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var c3=wn.styles;function vv(n){var e=xe.autoReplaceSvg==="nest"?mm(n,{styleParser:!1}):mm(n);return~e.extra.classes.indexOf(J0)?Jn("generateLayersText",n,e):Jn("generateSvgReplacementMutation",n,e)}function gm(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ti)return Promise.resolve();var t=Ze.documentElement.classList,i=function(h){return t.add("".concat(am,"-").concat(h))},r=function(h){return t.remove("".concat(am,"-").concat(h))},a=xe.autoFetchSvg?Object.keys(ld):Object.keys(c3),o=[".".concat(J0,":not([").concat(ur,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(ur,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ya(n.querySelectorAll(o))}catch{}if(s.length>0)i("pending"),r("complete");else return Promise.resolve();var l=md.begin("onTree"),u=s.reduce(function(f,h){try{var d=vv(h);d&&f.push(d)}catch(g){K0||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,h){Promise.all(u).then(function(d){mv(d,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(d){l(),h(d)})})}function f3(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;vv(n).then(function(t){t&&mv([t],e)})}function d3(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:qc(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:qc(r||{})),n(i,ce(ce({},t),{},{mask:r}))}}var h3=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,r=i===void 0?Rn:i,a=t.symbol,o=a===void 0?!1:a,s=t.mask,l=s===void 0?null:s,u=t.maskId,f=u===void 0?null:u,h=t.title,d=h===void 0?null:h,g=t.titleId,y=g===void 0?null:g,p=t.classes,c=p===void 0?[]:p,m=t.attributes,v=m===void 0?{}:m,_=t.styles,x=_===void 0?{}:_;if(!!e){var b=e.prefix,T=e.iconName,A=e.icon;return Ol(ce({type:"icon"},e),function(){return cr("beforeDOMElementCreation",{iconDefinition:e,params:t}),xe.autoA11y&&(d?v["aria-labelledby"]="".concat(xe.replacementClass,"-title-").concat(y||Lo()):(v["aria-hidden"]="true",v.focusable="false")),pd({icons:{main:Yc(A),mask:l?Yc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:T,transform:ce(ce({},Rn),r),symbol:o,title:d,maskId:f,titleId:y,extra:{attributes:v,styles:x,classes:c}})})}},p3={mixout:function(){return{icon:d3(h3)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=gm,t.nodeCallback=f3,t}}},provides:function(e){e.i2svg=function(t){var i=t.node,r=i===void 0?Ze:i,a=t.callback,o=a===void 0?function(){}:a;return gm(r,o)},e.generateSvgReplacementMutation=function(t,i){var r=i.iconName,a=i.title,o=i.titleId,s=i.prefix,l=i.transform,u=i.symbol,f=i.mask,h=i.maskId,d=i.extra;return new Promise(function(g,y){Promise.all([Zc(r,s),f.iconName?Zc(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var c=rd(p,2),m=c[0],v=c[1];g([t,pd({icons:{main:m,mask:v},prefix:s,iconName:r,transform:l,symbol:u,maskId:h,title:a,titleId:o,extra:d,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(t){var i=t.children,r=t.attributes,a=t.main,o=t.transform,s=t.styles,l=Il(s);l.length>0&&(r.style=l);var u;return cd(o)&&(u=Jn("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),i.push(u||a.icon),{children:i,attributes:r}}}},m3={mixout:function(){return{layer:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,a=r===void 0?[]:r;return Ol({type:"layer"},function(){cr("beforeDOMElementCreation",{assembler:t,params:i});var o=[];return t(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(xe.familyPrefix,"-layers")].concat(Dl(a)).join(" ")},children:o}]})}}}},g3={mixout:function(){return{counter:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,a=r===void 0?null:r,o=i.classes,s=o===void 0?[]:o,l=i.attributes,u=l===void 0?{}:l,f=i.styles,h=f===void 0?{}:f;return Ol({type:"counter",content:t},function(){return cr("beforeDOMElementCreation",{content:t,params:i}),Yb({content:t.toString(),title:a,extra:{attributes:u,styles:h,classes:["".concat(xe.familyPrefix,"-layers-counter")].concat(Dl(s))}})})}}}},v3={mixout:function(){return{text:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,a=r===void 0?Rn:r,o=i.title,s=o===void 0?null:o,l=i.classes,u=l===void 0?[]:l,f=i.attributes,h=f===void 0?{}:f,d=i.styles,g=d===void 0?{}:d;return Ol({type:"text",content:t},function(){return cr("beforeDOMElementCreation",{content:t,params:i}),cm({content:t,transform:ce(ce({},Rn),a),title:s,extra:{attributes:h,styles:g,classes:["".concat(xe.familyPrefix,"-layers-text")].concat(Dl(u))}})})}}},provides:function(e){e.generateLayersText=function(t,i){var r=i.title,a=i.transform,o=i.extra,s=null,l=null;if(q0){var u=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();s=f.width/u,l=f.height/u}return xe.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,cm({content:t.innerHTML,width:s,height:l,transform:a,title:r,extra:o,watchable:!0})])}}},_3=new RegExp('"',"ug"),vm=[1105920,1112319];function x3(n){var e=n.replace(_3,""),t=Db(e,0),i=t>=vm[0]&&t<=vm[1],r=e.length===2?e[0]===e[1]:!1;return{value:jc(r?e[0]:e),isSecondary:i||r}}function _m(n,e){var t="".concat(ob).concat(e.replace(":","-"));return new Promise(function(i,r){if(n.getAttribute(t)!==null)return i();var a=ya(n.children),o=a.filter(function(T){return T.getAttribute(Wc)===e})[0],s=Di.getComputedStyle(n,e),l=s.getPropertyValue("font-family").match(fb),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return n.removeChild(o),i();if(l&&f!=="none"&&f!==""){var h=s.getPropertyValue("content"),d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ll[l[2].toLowerCase()]:db[u],g=x3(h),y=g.value,p=g.isSecondary,c=l[0].startsWith("FontAwesome"),m=dd(d,y),v=m;if(c){var _=Ub(y);_.iconName&&_.prefix&&(m=_.iconName,d=_.prefix)}if(m&&!p&&(!o||o.getAttribute(od)!==d||o.getAttribute(sd)!==v)){n.setAttribute(t,v),o&&n.removeChild(o);var x=u3(),b=x.extra;b.attributes[Wc]=e,Zc(m,d).then(function(T){var A=pd(ce(ce({},x),{},{icons:{main:T,mask:hd()},prefix:d,iconName:v,extra:b,watchable:!0})),S=Ze.createElement("svg");e==="::before"?n.insertBefore(S,n.firstChild):n.appendChild(S),S.outerHTML=A.map(function(M){return Go(M)}).join(`
`),n.removeAttribute(t),i()}).catch(r)}else i()}else i()})}function y3(n){return Promise.all([_m(n,"::before"),_m(n,"::after")])}function S3(n){return n.parentNode!==document.head&&!~lb.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Wc)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function xm(n){if(!!ti)return new Promise(function(e,t){var i=ya(n.querySelectorAll("*")).filter(S3).map(y3),r=md.begin("searchPseudoElements");gv(),Promise.all(i).then(function(){r(),Qc(),e()}).catch(function(){r(),Qc(),t()})})}var w3={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=xm,t}}},provides:function(e){e.pseudoElements2svg=function(t){var i=t.node,r=i===void 0?Ze:i;xe.searchPseudoElements&&xm(r)}}},ym=!1,M3={mixout:function(){return{dom:{unwatch:function(){gv(),ym=!0}}}},hooks:function(){return{bootstrap:function(){pm($c("mutationObserverCallbacks",{}))},noAuto:function(){a3()},watch:function(t){var i=t.observeMutationsRoot;ym?Qc():pm($c("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Sm=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var a=r.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return i.flipX=!0,i;if(o&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(o){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},t)},b3={mixout:function(){return{parse:{transform:function(t){return Sm(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-transform");return r&&(t.transform=Sm(r)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var i=t.main,r=t.transform,a=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(f)},d={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:h,path:d};return{tag:"g",attributes:ce({},g.outer),children:[{tag:"g",attributes:ce({},g.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:ce(ce({},i.icon.attributes),g.path)}]}]}}}},Xu={x:0,y:0,width:"100%",height:"100%"};function wm(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function E3(n){return n.tag==="g"?n.children:[n]}var T3={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-mask"),a=r?Nl(r.split(" ").map(function(o){return o.trim()})):hd();return a.prefix||(a.prefix=Ii()),t.mask=a,t.maskId=i.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var i=t.children,r=t.attributes,a=t.main,o=t.mask,s=t.maskId,l=t.transform,u=a.width,f=a.icon,h=o.width,d=o.icon,g=bb({transform:l,containerWidth:h,iconWidth:u}),y={tag:"rect",attributes:ce(ce({},Xu),{},{fill:"white"})},p=f.children?{children:f.children.map(wm)}:{},c={tag:"g",attributes:ce({},g.inner),children:[wm(ce({tag:f.tag,attributes:ce(ce({},f.attributes),g.path)},p))]},m={tag:"g",attributes:ce({},g.outer),children:[c]},v="mask-".concat(s||Lo()),_="clip-".concat(s||Lo()),x={tag:"mask",attributes:ce(ce({},Xu),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:E3(d)},x]};return i.push(b,{tag:"rect",attributes:ce({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(v,")")},Xu)}),{children:i,attributes:r}}}},C3={provides:function(e){var t=!1;Di.matchMedia&&(t=Di.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:ce(ce({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=ce(ce({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:ce(ce({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:ce(ce({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:ce(ce({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:ce(ce({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:ce(ce({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||i.push({tag:"path",attributes:ce(ce({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:ce(ce({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},A3={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-symbol"),a=r===null?!1:r===""?!0:r;return t.symbol=a,t}}}},L3=[Cb,p3,m3,g3,v3,w3,M3,b3,T3,C3,A3];Vb(L3,{mixoutsTo:nn});nn.noAuto;nn.config;nn.library;nn.dom;var Jc=nn.parse;nn.findIconDefinition;nn.toHtml;var P3=nn.icon;nn.layer;nn.text;nn.counter;var _v={exports:{}},R3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",D3=R3,I3=D3;function xv(){}function yv(){}yv.resetWarningCache=xv;var k3=function(){function n(i,r,a,o,s,l){if(l!==I3){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}n.isRequired=n;function e(){return n}var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:yv,resetWarningCache:xv};return t.PropTypes=t,t};_v.exports=k3();var De=_v.exports;function Mm(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function pi(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Mm(Object(t),!0).forEach(function(i){Vr(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Mm(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function fl(n){return fl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fl(n)}function Vr(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function N3(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function O3(n,e){if(n==null)return{};var t=N3(n,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,i)||(t[i]=n[i]))}return t}function ef(n){return F3(n)||z3(n)||U3(n)||B3()}function F3(n){if(Array.isArray(n))return tf(n)}function z3(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function U3(n,e){if(!!n){if(typeof n=="string")return tf(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return tf(n,e)}}function tf(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function B3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G3(n){var e,t=n.beat,i=n.fade,r=n.beatFade,a=n.bounce,o=n.shake,s=n.flash,l=n.spin,u=n.spinPulse,f=n.spinReverse,h=n.pulse,d=n.fixedWidth,g=n.inverse,y=n.border,p=n.listItem,c=n.flip,m=n.size,v=n.rotation,_=n.pull,x=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":d,"fa-inverse":g,"fa-border":y,"fa-li":p,"fa-flip":c===!0,"fa-flip-horizontal":c==="horizontal"||c==="both","fa-flip-vertical":c==="vertical"||c==="both"},Vr(e,"fa-".concat(m),typeof m!="undefined"&&m!==null),Vr(e,"fa-rotate-".concat(v),typeof v!="undefined"&&v!==null&&v!==0),Vr(e,"fa-pull-".concat(_),typeof _!="undefined"&&_!==null),Vr(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(x).map(function(b){return x[b]?b:null}).filter(function(b){return b})}function V3(n){return n=n-0,n===n}function Sv(n){return V3(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var H3=["style"];function W3(n){return n.charAt(0).toUpperCase()+n.slice(1)}function j3(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),r=Sv(t.slice(0,i)),a=t.slice(i+1).trim();return r.startsWith("webkit")?e[W3(r)]=a:e[r]=a,e},{})}function wv(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return wv(n,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,u){var f=e.attributes[u];switch(u){case"class":l.attrs.className=f,delete e.attributes.class;break;case"style":l.attrs.style=j3(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=f:l.attrs[Sv(u)]=f}return l},{attrs:{}}),a=t.style,o=a===void 0?{}:a,s=O3(t,H3);return r.attrs.style=pi(pi({},r.attrs.style),o),n.apply(void 0,[e.tag,pi(pi({},r.attrs),s)].concat(ef(i)))}var Mv=!1;try{Mv=!0}catch{}function X3(){if(!Mv&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function bm(n){if(n&&fl(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Jc.icon)return Jc.icon(n);if(n===null)return null;if(n&&fl(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function $u(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Vr({},n,e):{}}var mi=dl.forwardRef(function(n,e){var t=n.icon,i=n.mask,r=n.symbol,a=n.className,o=n.title,s=n.titleId,l=n.maskId,u=bm(t),f=$u("classes",[].concat(ef(G3(n)),ef(a.split(" ")))),h=$u("transform",typeof n.transform=="string"?Jc.transform(n.transform):n.transform),d=$u("mask",bm(i)),g=P3(u,pi(pi(pi(pi({},f),h),d),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!g)return X3("Could not find icon",u),null;var y=g.abstract,p={ref:e};return Object.keys(n).forEach(function(c){mi.defaultProps.hasOwnProperty(c)||(p[c]=n[c])}),$3(y[0],p)});mi.displayName="FontAwesomeIcon";mi.propTypes={beat:De.bool,border:De.bool,beatFade:De.bool,bounce:De.bool,className:De.string,fade:De.bool,flash:De.bool,mask:De.oneOfType([De.object,De.array,De.string]),maskId:De.string,fixedWidth:De.bool,inverse:De.bool,flip:De.oneOf([!0,!1,"horizontal","vertical","both"]),icon:De.oneOfType([De.object,De.array,De.string]),listItem:De.bool,pull:De.oneOf(["right","left"]),pulse:De.bool,rotation:De.oneOf([0,90,180,270]),shake:De.bool,size:De.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:De.bool,spinPulse:De.bool,spinReverse:De.bool,symbol:De.oneOfType([De.bool,De.string]),title:De.string,titleId:De.string,transform:De.oneOfType([De.string,De.object]),swapOpacity:De.bool};mi.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var $3=wv.bind(null,dl.createElement);/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var q3={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Y3={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]},Z3={prefix:"fab",iconName:"react",icon:[512,512,[],"f41b","M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9-53.4 18.5-91.7 47.7-91.7 77.9 0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zM136.9 187.2c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zM115.7 320.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zM256 301.8a45.8 45.8 0 1 0 0-91.6 45.8 45.8 0 1 0 0 91.6z"]},K3={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};function Q3(){return tt("div",{style:{width:"100%",height:"100vh",position:"relative",overflow:"hidden"},children:[_e("div",{style:{position:"absolute",inset:0,zIndex:0},children:_e(X2,{enabledWaves:["top","middle","bottom"],lineCount:[10,15,20],lineDistance:[8,6,4],bendRadius:5,bendStrength:-.5,interactive:!0,parallax:!0})}),tt("div",{style:{position:"absolute",top:"30px",left:"50%",transform:"translateX(-50%)",zIndex:10,display:"flex",gap:"1.5rem",alignItems:"center"},children:[_e("a",{href:"https://www.instagram.com/michele_sanfi/?hl=it",target:"_blank",rel:"noopener noreferrer",style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"1.1rem",transition:"all 0.3s ease",cursor:"pointer"},onMouseEnter:n=>{n.currentTarget.style.color="#C13584",n.currentTarget.style.transform="scale(1.2)"},onMouseLeave:n=>{n.currentTarget.style.color="rgba(255, 255, 255, 0.7)",n.currentTarget.style.transform="scale(1)"},children:_e(mi,{icon:K3})}),_e("a",{href:"https://github.com/michelesanfilippo",target:"_blank",rel:"noopener noreferrer",style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"1.1rem",transition:"all 0.3s ease",cursor:"pointer"},onMouseEnter:n=>{n.currentTarget.style.color="#FFD700",n.currentTarget.style.transform="scale(1.2)"},onMouseLeave:n=>{n.currentTarget.style.color="rgba(255, 255, 255, 0.7)",n.currentTarget.style.transform="scale(1)"},children:_e(mi,{icon:q3})}),_e("a",{href:"https://it.linkedin.com/in/michele-sanfilippo-b22404157",target:"_blank",rel:"noopener noreferrer",style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"1.1rem",transition:"all 0.3s ease",cursor:"pointer"},onMouseEnter:n=>{n.currentTarget.style.color="#0077B5",n.currentTarget.style.transform="scale(1.2)"},onMouseLeave:n=>{n.currentTarget.style.color="rgba(255, 255, 255, 0.7)",n.currentTarget.style.transform="scale(1)"},children:_e(mi,{icon:Y3})})]}),_e("div",{style:{position:"absolute",left:"10%",top:"50%",transform:"translateY(-50%)",zIndex:10},children:_e(Y2,{name:"Michele Sanfilippo",title:"Software Engineer",handle:"michelesanfilippo",status:"I build stuff.",contactText:"Contact Me",avatarUrl:"/avatar/download.png",showUserInfo:!0,enableTilt:!0,enableMobileTilt:!0,onContactClick:()=>window.location.href="mailto:michelesanfilippo01@gmail.com?subject=Hi Michele! I'm here from your page"})}),tt("div",{style:{position:"absolute",right:"8%",top:"50%",transform:"translateY(-50%)",zIndex:10,display:"flex",flexDirection:"column",gap:"0.5rem",maxWidth:"660px",width:"100%",height:"80svh",maxHeight:"540px"},children:[tt("div",{style:{display:"flex",gap:"0.5rem",flex:1,minHeight:0},children:[_e("div",{style:{flex:1,minWidth:0,display:"flex"},children:tt(ys,{className:"custom-spotlight-card",spotlightColor:"rgba(216, 27, 143, 0.2)",children:[_e("h2",{style:{color:"white",marginBottom:"0.5rem",fontSize:"0.95rem"},children:"Background"}),tt("p",{style:{color:"#aaa",fontSize:"0.7rem",lineHeight:"1.4"},children:["\u{1F44B} Hi there i'm Michele, I currently live in Palermo, Sicily. ",_e("br",{})," ",_e("br",{}),"I love programming and challenging myself every day, so I can learn as much as possible. I enjoy challenging projects and finding the best solutions! ",_e("br",{}),_e("br",{}),"Besides programming, in my free time I like to keep an eye on some open-source projects, related to genAI that allow me to stay updated. ",_e("br",{}),_e("br",{}),"Outside the tech context, I have many hobbies, I like photography because it allows me to capture and preserve special moments, I like playing soccer with friends and I am passionate about the world of collecting cards and mangas."]})]})}),tt("div",{style:{flex:1.5,minWidth:0,display:"flex",flexDirection:"column",gap:"0.5rem"},children:[_e("div",{style:{flex:1,display:"flex",minHeight:0},children:tt(ys,{className:"custom-spotlight-card",spotlightColor:"rgba(0, 38, 255, 0.2)",children:[_e("h2",{style:{color:"white",marginBottom:"0.5rem",fontSize:"0.95rem"},children:"Education"}),tt("p",{style:{color:"#aaa",fontSize:"0.7rem",lineHeight:"1.4"},children:["\u{1F393} Universit\xE0 degli studi di Palermo (2017 - 2020)",_e("br",{}),_e("br",{}),"Bachelor's degree in Computer Science with thesis: Graph theory and application algorithms for social networks, with a grade of 105/110."]})]})}),_e("div",{style:{flex:1,display:"flex",minHeight:0},children:tt(ys,{className:"custom-spotlight-card",spotlightColor:"rgba(8, 245, 115, 0.2)",children:[_e("h2",{style:{color:"white",marginBottom:"0.5rem",fontSize:"0.95rem"},children:"Skills"}),tt("p",{style:{color:"#aaa",fontSize:"0.7rem",lineHeight:"1.4"},children:["I mainly work as back-end engineer with: Java, Spring, Docker, SQL, JavaScript, HTML, CSS, Git, AWS. ",_e("br",{}),_e("br",{}),"I also have experience with Python, C/C++, Node.js and TypeScript. ",_e("br",{}),_e("br",{}),"I work by adopting Agile methodology and devOps principles."]})]})})]})]}),_e("div",{style:{width:"100%",minHeight:0},children:tt(ys,{className:"custom-spotlight-card",spotlightColor:"rgba(227, 243, 9, 0.1)",children:[_e("h2",{style:{color:"white",marginBottom:"0.4rem",fontSize:"0.95rem"},children:"Experience"}),tt("p",{style:{color:"#aaa",fontSize:"0.7rem",lineHeight:"1.4"},children:["I work as software engineer since 2020 mainly in financial services.",_e("br",{}),_e("br",{}),"I've collaborated with various clients, like as banks and insurance companies, contributing to the development of scalable and efficient software solutions.",_e("br",{}),_e("br",{}),"I'm passionate about learning new technologies and improving my skills to deliver high-quality products."]})]})})]}),tt("div",{style:{position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",zIndex:10,color:"rgba(255, 255, 255, 0.6)",fontSize:"0.75rem",fontWeight:400,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",display:"flex",alignItems:"center",gap:"0.4rem"},children:["Built with"," ",tt("a",{href:"https://react.dev/",target:"_blank",rel:"noopener noreferrer",style:{color:"rgba(255, 255, 255, 0.9)",textDecoration:"none",borderBottom:"1px solid rgba(255, 255, 255, 0.3)",transition:"all 0.2s ease",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.3rem"},onMouseEnter:n=>{n.currentTarget.style.color="#61dafb",n.currentTarget.style.borderBottomColor="#61dafb"},onMouseLeave:n=>{n.currentTarget.style.color="rgba(255, 255, 255, 0.9)",n.currentTarget.style.borderBottomColor="rgba(255, 255, 255, 0.3)"},children:[_e(mi,{icon:Z3,style:{fontSize:"1rem"}}),"React"]})]})]})}Dx.render(_e(dl.StrictMode,{children:_e(Q3,{})}),document.getElementById("root"));
