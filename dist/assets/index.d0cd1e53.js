const Fv=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};Fv();var _e={exports:{}},Be={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var bd=Object.getOwnPropertySymbols,Uv=Object.prototype.hasOwnProperty,Bv=Object.prototype.propertyIsEnumerable;function Gv(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function Vv(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var i=Object.getOwnPropertyNames(e).map(function(a){return e[a]});if(i.join("")!=="0123456789")return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(a){r[a]=a}),Object.keys(Object.assign({},r)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Dm=Vv()?Object.assign:function(t,e){for(var n,i=Gv(t),r,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var o in n)Uv.call(n,o)&&(i[o]=n[o]);if(bd){r=bd(n);for(var s=0;s<r.length;s++)Bv.call(n,r[s])&&(i[r[s]]=n[r[s]])}}return i};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf=Dm,pa=60103,Im=60106;Be.Fragment=60107;Be.StrictMode=60108;Be.Profiler=60114;var km=60109,Nm=60110,Om=60112;Be.Suspense=60113;var zm=60115,Fm=60116;if(typeof Symbol=="function"&&Symbol.for){var pn=Symbol.for;pa=pn("react.element"),Im=pn("react.portal"),Be.Fragment=pn("react.fragment"),Be.StrictMode=pn("react.strict_mode"),Be.Profiler=pn("react.profiler"),km=pn("react.provider"),Nm=pn("react.context"),Om=pn("react.forward_ref"),Be.Suspense=pn("react.suspense"),zm=pn("react.memo"),Fm=pn("react.lazy")}var Ed=typeof Symbol=="function"&&Symbol.iterator;function Hv(t){return t===null||typeof t!="object"?null:(t=Ed&&t[Ed]||t["@@iterator"],typeof t=="function"?t:null)}function Io(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Um={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bm={};function ma(t,e,n){this.props=t,this.context=e,this.refs=Bm,this.updater=n||Um}ma.prototype.isReactComponent={};ma.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(Io(85));this.updater.enqueueSetState(this,t,e,"setState")};ma.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gm(){}Gm.prototype=ma.prototype;function uf(t,e,n){this.props=t,this.context=e,this.refs=Bm,this.updater=n||Um}var cf=uf.prototype=new Gm;cf.constructor=uf;lf(cf,ma.prototype);cf.isPureReactComponent=!0;var ff={current:null},Vm=Object.prototype.hasOwnProperty,Hm={key:!0,ref:!0,__self:!0,__source:!0};function Wm(t,e,n){var i,r={},a=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)Vm.call(e,i)&&!Hm.hasOwnProperty(i)&&(r[i]=e[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:pa,type:t,key:a,ref:o,props:r,_owner:ff.current}}function Wv(t,e){return{$$typeof:pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function df(t){return typeof t=="object"&&t!==null&&t.$$typeof===pa}function jv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Td=/\/+/g;function jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jv(""+t.key):e.toString(36)}function Es(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pa:case Im:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+jl(o,0):i,Array.isArray(r)?(n="",t!=null&&(n=t.replace(Td,"$&/")+"/"),Es(r,e,n,"",function(u){return u})):r!=null&&(df(r)&&(r=Wv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Td,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Array.isArray(t))for(var s=0;s<t.length;s++){a=t[s];var l=i+jl(a,s);o+=Es(a,e,n,l,r)}else if(l=Hv(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=i+jl(a,s++),o+=Es(a,e,n,l,r);else if(a==="object")throw e=""+t,Error(Io(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function jo(t,e,n){if(t==null)return t;var i=[],r=0;return Es(t,i,"","",function(a){return e.call(n,a,r++)}),i}function Xv(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var jm={current:null};function ni(){var t=jm.current;if(t===null)throw Error(Io(321));return t}var $v={ReactCurrentDispatcher:jm,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:ff,IsSomeRendererActing:{current:!1},assign:lf};Be.Children={map:jo,forEach:function(t,e,n){jo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return jo(t,function(){e++}),e},toArray:function(t){return jo(t,function(e){return e})||[]},only:function(t){if(!df(t))throw Error(Io(143));return t}};Be.Component=ma;Be.PureComponent=uf;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$v;Be.cloneElement=function(t,e,n){if(t==null)throw Error(Io(267,t));var i=lf({},t.props),r=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=ff.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)Vm.call(e,l)&&!Hm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}return{$$typeof:pa,type:t.type,key:r,ref:a,props:i,_owner:o}};Be.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:Nm,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:km,_context:t},t.Consumer=t};Be.createElement=Wm;Be.createFactory=function(t){var e=Wm.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:Om,render:t}};Be.isValidElement=df;Be.lazy=function(t){return{$$typeof:Fm,_payload:{_status:-1,_result:t},_init:Xv}};Be.memo=function(t,e){return{$$typeof:zm,type:t,compare:e===void 0?null:e}};Be.useCallback=function(t,e){return ni().useCallback(t,e)};Be.useContext=function(t,e){return ni().useContext(t,e)};Be.useDebugValue=function(){};Be.useEffect=function(t,e){return ni().useEffect(t,e)};Be.useImperativeHandle=function(t,e,n){return ni().useImperativeHandle(t,e,n)};Be.useLayoutEffect=function(t,e){return ni().useLayoutEffect(t,e)};Be.useMemo=function(t,e){return ni().useMemo(t,e)};Be.useReducer=function(t,e,n){return ni().useReducer(t,e,n)};Be.useRef=function(t){return ni().useRef(t)};Be.useState=function(t){return ni().useState(t)};Be.version="17.0.2";_e.exports=Be;var bn=_e.exports,Xm={exports:{}},hn={},$m={exports:{}},qm={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,i,r;if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,f=function(){if(l!==null)try{var P=t.unstable_now();l(!0,P),l=null}catch(A){throw setTimeout(f,0),A}};e=function(P){l!==null?setTimeout(e,0,P):(l=P,setTimeout(f,0))},n=function(P,A){u=setTimeout(P,A)},i=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},r=t.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,p=null,c=-1,m=5,v=0;t.unstable_shouldYield=function(){return t.unstable_now()>=v},r=function(){},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<P?Math.floor(1e3/P):5};var _=new MessageChannel,x=_.port2;_.port1.onmessage=function(){if(p!==null){var P=t.unstable_now();v=P+m;try{p(!0,P)?x.postMessage(null):(y=!1,p=null)}catch(A){throw x.postMessage(null),A}}else y=!1},e=function(P){p=P,y||(y=!0,x.postMessage(null))},n=function(P,A){c=h(function(){P(t.unstable_now())},A)},i=function(){d(c),c=-1}}function b(P,A){var k=P.length;P.push(A);e:for(;;){var G=k-1>>>1,R=P[G];if(R!==void 0&&0<S(R,A))P[G]=A,P[k]=R,k=G;else break e}}function T(P){return P=P[0],P===void 0?null:P}function L(P){var A=P[0];if(A!==void 0){var k=P.pop();if(k!==A){P[0]=k;e:for(var G=0,R=P.length;G<R;){var ne=2*(G+1)-1,ee=P[ne],se=ne+1,oe=P[se];if(ee!==void 0&&0>S(ee,k))oe!==void 0&&0>S(oe,ee)?(P[G]=oe,P[se]=k,G=se):(P[G]=ee,P[ne]=k,G=ne);else if(oe!==void 0&&0>S(oe,k))P[G]=oe,P[se]=k,G=se;else break e}}return A}return null}function S(P,A){var k=P.sortIndex-A.sortIndex;return k!==0?k:P.id-A.id}var w=[],I=[],q=1,Y=null,O=3,N=!1,B=!1,Z=!1;function X(P){for(var A=T(I);A!==null;){if(A.callback===null)L(I);else if(A.startTime<=P)L(I),A.sortIndex=A.expirationTime,b(w,A);else break;A=T(I)}}function V(P){if(Z=!1,X(P),!B)if(T(w)!==null)B=!0,e(J);else{var A=T(I);A!==null&&n(V,A.startTime-P)}}function J(P,A){B=!1,Z&&(Z=!1,i()),N=!0;var k=O;try{for(X(A),Y=T(w);Y!==null&&(!(Y.expirationTime>A)||P&&!t.unstable_shouldYield());){var G=Y.callback;if(typeof G=="function"){Y.callback=null,O=Y.priorityLevel;var R=G(Y.expirationTime<=A);A=t.unstable_now(),typeof R=="function"?Y.callback=R:Y===T(w)&&L(w),X(A)}else L(w);Y=T(w)}if(Y!==null)var ne=!0;else{var ee=T(I);ee!==null&&n(V,ee.startTime-A),ne=!1}return ne}finally{Y=null,O=k,N=!1}}var Q=r;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){B||N||(B=!0,e(J))},t.unstable_getCurrentPriorityLevel=function(){return O},t.unstable_getFirstCallbackNode=function(){return T(w)},t.unstable_next=function(P){switch(O){case 1:case 2:case 3:var A=3;break;default:A=O}var k=O;O=A;try{return P()}finally{O=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=Q,t.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var k=O;O=P;try{return A()}finally{O=k}},t.unstable_scheduleCallback=function(P,A,k){var G=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?G+k:G):k=G,P){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=k+R,P={id:q++,callback:A,priorityLevel:P,startTime:k,expirationTime:R,sortIndex:-1},k>G?(P.sortIndex=k,b(I,P),T(w)===null&&P===T(I)&&(Z?i():Z=!0,n(V,k-G))):(P.sortIndex=R,b(w,P),B||N||(B=!0,e(J))),P},t.unstable_wrapCallback=function(P){var A=O;return function(){var k=O;O=A;try{return P.apply(this,arguments)}finally{O=k}}}})(qm);$m.exports=qm;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=_e.exports,it=Dm,St=$m.exports;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!vl)throw Error(ie(227));var Ym=new Set,mo={};function hr(t,e){oa(t,e),oa(t+"Capture",e)}function oa(t,e){for(mo[t]=e,t=0;t<e.length;t++)Ym.add(e[t])}var Qn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),qv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cd=Object.prototype.hasOwnProperty,Ad={},Ld={};function Yv(t){return Cd.call(Ld,t)?!0:Cd.call(Ad,t)?!1:qv.test(t)?Ld[t]=!0:(Ad[t]=!0,!1)}function Zv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Kv(t,e,n,i){if(e===null||typeof e=="undefined"||Zv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Bt(t,e,n,i,r,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var Tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tt[t]=new Bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tt[e]=new Bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tt[t]=new Bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tt[t]=new Bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tt[t]=new Bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tt[t]=new Bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tt[t]=new Bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tt[t]=new Bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tt[t]=new Bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var hf=/[\-:]([a-z])/g;function pf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hf,pf);Tt[e]=new Bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hf,pf);Tt[e]=new Bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hf,pf);Tt[e]=new Bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tt[t]=new Bt(t,1,!1,t.toLowerCase(),null,!1,!1)});Tt.xlinkHref=new Bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tt[t]=new Bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function mf(t,e,n,i){var r=Tt.hasOwnProperty(e)?Tt[e]:null,a=r!==null?r.type===0:i?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");a||(Kv(e,n,r,i)&&(n=null),i||r===null?Yv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var pr=vl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=60103,qi=60106,ci=60107,gf=60108,eo=60114,vf=60109,_f=60110,_l=60112,to=60113,Bs=60120,xl=60115,xf=60116,yf=60121,Sf=60128,Zm=60129,Mf=60130,Ju=60131;if(typeof Symbol=="function"&&Symbol.for){var xt=Symbol.for;Xa=xt("react.element"),qi=xt("react.portal"),ci=xt("react.fragment"),gf=xt("react.strict_mode"),eo=xt("react.profiler"),vf=xt("react.provider"),_f=xt("react.context"),_l=xt("react.forward_ref"),to=xt("react.suspense"),Bs=xt("react.suspense_list"),xl=xt("react.memo"),xf=xt("react.lazy"),yf=xt("react.block"),xt("react.scope"),Sf=xt("react.opaque.id"),Zm=xt("react.debug_trace_mode"),Mf=xt("react.offscreen"),Ju=xt("react.legacy_hidden")}var Pd=typeof Symbol=="function"&&Symbol.iterator;function Ea(t){return t===null||typeof t!="object"?null:(t=Pd&&t[Pd]||t["@@iterator"],typeof t=="function"?t:null)}var Xl;function $a(t){if(Xl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xl=e&&e[1]||""}return`
`+Xl+t}var $l=!1;function Xo(t,e){if(!t||$l)return"";$l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var i=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){i=l}t.call(e.prototype)}else{try{throw Error()}catch(l){i=l}t()}}catch(l){if(l&&i&&typeof l.stack=="string"){for(var r=l.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,s=a.length-1;1<=o&&0<=s&&r[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(r[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||r[o]!==a[s])return`
`+r[o].replace(" at new "," at ");while(1<=o&&0<=s);break}}}finally{$l=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$a(t):""}function Qv(t){switch(t.tag){case 5:return $a(t.type);case 16:return $a("Lazy");case 13:return $a("Suspense");case 19:return $a("SuspenseList");case 0:case 2:case 15:return t=Xo(t.type,!1),t;case 11:return t=Xo(t.type.render,!1),t;case 22:return t=Xo(t.type._render,!1),t;case 1:return t=Xo(t.type,!0),t;default:return""}}function Xr(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ci:return"Fragment";case qi:return"Portal";case eo:return"Profiler";case gf:return"StrictMode";case to:return"Suspense";case Bs:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _f:return(t.displayName||"Context")+".Consumer";case vf:return(t._context.displayName||"Context")+".Provider";case _l:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case xl:return Xr(t.type);case yf:return Xr(t._render);case xf:e=t._payload,t=t._init;try{return Xr(t(e))}catch{}}return null}function Ci(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function Km(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jv(t){var e=Km(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $o(t){t._valueTracker||(t._valueTracker=Jv(t))}function Qm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Km(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Gs(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function ec(t,e){var n=e.checked;return it({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Rd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ci(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jm(t,e){e=e.checked,e!=null&&mf(t,"checked",e,!1)}function tc(t,e){Jm(t,e);var n=Ci(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nc(t,e.type,n):e.hasOwnProperty("defaultValue")&&nc(t,e.type,Ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nc(t,e,n){(e!=="number"||Gs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function e1(t){var e="";return vl.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function ic(t,e){return t=it({children:void 0},e),(e=e1(e.children))&&(t.children=e),t}function $r(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ci(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function rc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return it({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Id(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ci(n)}}function e0(t,e){var n=Ci(e.value),i=Ci(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function kd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var ac={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function t0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qo,n0=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!==ac.svg||"innerHTML"in t)t.innerHTML=e;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var no={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},t1=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(t){t1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),no[e]=no[t]})});function i0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||no.hasOwnProperty(t)&&no[t]?(""+e).trim():e+"px"}function r0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=i0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var n1=it({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sc(t,e){if(e){if(n1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function lc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function wf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uc=null,qr=null,Yr=null;function Nd(t){if(t=No(t)){if(typeof uc!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=El(e),uc(t.stateNode,t.type,e))}}function a0(t){qr?Yr?Yr.push(t):Yr=[t]:qr=t}function o0(){if(qr){var t=qr,e=Yr;if(Yr=qr=null,Nd(t),e)for(t=0;t<e.length;t++)Nd(e[t])}}function bf(t,e){return t(e)}function s0(t,e,n,i,r){return t(e,n,i,r)}function Ef(){}var l0=bf,Yi=!1,ql=!1;function Tf(){(qr!==null||Yr!==null)&&(Ef(),o0())}function i1(t,e,n){if(ql)return t(e,n);ql=!0;try{return l0(t,e,n)}finally{ql=!1,Tf()}}function vo(t,e){var n=t.stateNode;if(n===null)return null;var i=El(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var cc=!1;if(Qn)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){cc=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{cc=!1}function r1(t,e,n,i,r,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var io=!1,Vs=null,Hs=!1,fc=null,a1={onError:function(t){io=!0,Vs=t}};function o1(t,e,n,i,r,a,o,s,l){io=!1,Vs=null,r1.apply(a1,arguments)}function s1(t,e,n,i,r,a,o,s,l){if(o1.apply(this,arguments),io){if(io){var u=Vs;io=!1,Vs=null}else throw Error(ie(198));Hs||(Hs=!0,fc=u)}}function mr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function u0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Od(t){if(mr(t)!==t)throw Error(ie(188))}function l1(t){var e=t.alternate;if(!e){if(e=mr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Od(r),t;if(a===i)return Od(r),e;a=a.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=a;else{for(var o=!1,s=r.child;s;){if(s===n){o=!0,n=r,i=a;break}if(s===i){o=!0,i=r,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,i=r;break}if(s===i){o=!0,i=a,n=r;break}s=s.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function c0(t){if(t=l1(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function zd(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var f0,Cf,d0,h0,dc=!1,Pn=[],_i=null,xi=null,yi=null,_o=new Map,xo=new Map,Ca=[],Fd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hc(t,e,n,i,r){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:r,targetContainers:[i]}}function Ud(t,e){switch(t){case"focusin":case"focusout":_i=null;break;case"dragenter":case"dragleave":xi=null;break;case"mouseover":case"mouseout":yi=null;break;case"pointerover":case"pointerout":_o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(e.pointerId)}}function Aa(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t=hc(e,n,i,r,a),e!==null&&(e=No(e),e!==null&&Cf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function u1(t,e,n,i,r){switch(e){case"focusin":return _i=Aa(_i,t,e,n,i,r),!0;case"dragenter":return xi=Aa(xi,t,e,n,i,r),!0;case"mouseover":return yi=Aa(yi,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return _o.set(a,Aa(_o.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,xo.set(a,Aa(xo.get(a)||null,t,e,n,i,r)),!0}return!1}function c1(t){var e=Zi(t.target);if(e!==null){var n=mr(e);if(n!==null){if(e=n.tag,e===13){if(e=u0(n),e!==null){t.blockedOn=e,h0(t.lanePriority,function(){St.unstable_runWithPriority(t.priority,function(){d0(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ts(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=No(n),e!==null&&Cf(e),t.blockedOn=n,!1;e.shift()}return!0}function Bd(t,e,n){Ts(t)&&n.delete(e)}function f1(){for(dc=!1;0<Pn.length;){var t=Pn[0];if(t.blockedOn!==null){t=No(t.blockedOn),t!==null&&f0(t);break}for(var e=t.targetContainers;0<e.length;){var n=Rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&Pn.shift()}_i!==null&&Ts(_i)&&(_i=null),xi!==null&&Ts(xi)&&(xi=null),yi!==null&&Ts(yi)&&(yi=null),_o.forEach(Bd),xo.forEach(Bd)}function La(t,e){t.blockedOn===e&&(t.blockedOn=null,dc||(dc=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,f1)))}function p0(t){function e(r){return La(r,t)}if(0<Pn.length){La(Pn[0],t);for(var n=1;n<Pn.length;n++){var i=Pn[n];i.blockedOn===t&&(i.blockedOn=null)}}for(_i!==null&&La(_i,t),xi!==null&&La(xi,t),yi!==null&&La(yi,t),_o.forEach(e),xo.forEach(e),n=0;n<Ca.length;n++)i=Ca[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ca.length&&(n=Ca[0],n.blockedOn===null);)c1(n),n.blockedOn===null&&Ca.shift()}function Yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Or={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},Yl={},m0={};Qn&&(m0=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function yl(t){if(Yl[t])return Yl[t];if(!Or[t])return t;var e=Or[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in m0)return Yl[t]=e[n];return t}var g0=yl("animationend"),v0=yl("animationiteration"),_0=yl("animationstart"),x0=yl("transitionend"),y0=new Map,Af=new Map,d1=["abort","abort",g0,"animationEnd",v0,"animationIteration",_0,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",x0,"transitionEnd","waiting","waiting"];function Lf(t,e){for(var n=0;n<t.length;n+=2){var i=t[n],r=t[n+1];r="on"+(r[0].toUpperCase()+r.slice(1)),Af.set(i,e),y0.set(i,r),hr(r,[i])}}var h1=St.unstable_now;h1();var Ye=8;function Dr(t){if((1&t)!==0)return Ye=15,1;if((2&t)!==0)return Ye=14,2;if((4&t)!==0)return Ye=13,4;var e=24&t;return e!==0?(Ye=12,e):(t&32)!==0?(Ye=11,32):(e=192&t,e!==0?(Ye=10,e):(t&256)!==0?(Ye=9,256):(e=3584&t,e!==0?(Ye=8,e):(t&4096)!==0?(Ye=7,4096):(e=4186112&t,e!==0?(Ye=6,e):(e=62914560&t,e!==0?(Ye=5,e):t&67108864?(Ye=4,67108864):(t&134217728)!==0?(Ye=3,134217728):(e=805306368&t,e!==0?(Ye=2,e):(1073741824&t)!==0?(Ye=1,1073741824):(Ye=8,t))))))}function p1(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function m1(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(ie(358,t))}}function yo(t,e){var n=t.pendingLanes;if(n===0)return Ye=0;var i=0,r=0,a=t.expiredLanes,o=t.suspendedLanes,s=t.pingedLanes;if(a!==0)i=a,r=Ye=15;else if(a=n&134217727,a!==0){var l=a&~o;l!==0?(i=Dr(l),r=Ye):(s&=a,s!==0&&(i=Dr(s),r=Ye))}else a=n&~o,a!==0?(i=Dr(a),r=Ye):s!==0&&(i=Dr(s),r=Ye);if(i===0)return 0;if(i=31-Ai(i),i=n&((0>i?0:1<<i)<<1)-1,e!==0&&e!==i&&(e&o)===0){if(Dr(e),r<=Ye)return e;Ye=r}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ai(e),r=1<<n,i|=t[n],e&=~r;return i}function S0(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ws(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=Ir(24&~e),t===0?Ws(10,e):t;case 10:return t=Ir(192&~e),t===0?Ws(8,e):t;case 8:return t=Ir(3584&~e),t===0&&(t=Ir(4186112&~e),t===0&&(t=512)),t;case 2:return e=Ir(805306368&~e),e===0&&(e=268435456),e}throw Error(ie(358,t))}function Ir(t){return t&-t}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sl(t,e,n){t.pendingLanes|=e;var i=e-1;t.suspendedLanes&=i,t.pingedLanes&=i,t=t.eventTimes,e=31-Ai(e),t[e]=n}var Ai=Math.clz32?Math.clz32:_1,g1=Math.log,v1=Math.LN2;function _1(t){return t===0?32:31-(g1(t)/v1|0)|0}var x1=St.unstable_UserBlockingPriority,y1=St.unstable_runWithPriority,Cs=!0;function S1(t,e,n,i){Yi||Ef();var r=Pf,a=Yi;Yi=!0;try{s0(r,t,e,n,i)}finally{(Yi=a)||Tf()}}function M1(t,e,n,i){y1(x1,Pf.bind(null,t,e,n,i))}function Pf(t,e,n,i){if(Cs){var r;if((r=(e&4)===0)&&0<Pn.length&&-1<Fd.indexOf(t))t=hc(null,t,e,n,i),Pn.push(t);else{var a=Rf(t,e,n,i);if(a===null)r&&Ud(t,i);else{if(r){if(-1<Fd.indexOf(t)){t=hc(a,t,e,n,i),Pn.push(t);return}if(u1(a,t,e,n,i))return;Ud(t,i)}k0(t,e,i,null,n)}}}}function Rf(t,e,n,i){var r=wf(i);if(r=Zi(r),r!==null){var a=mr(r);if(a===null)r=null;else{var o=a.tag;if(o===13){if(r=u0(a),r!==null)return r;r=null}else if(o===3){if(a.stateNode.hydrate)return a.tag===3?a.stateNode.containerInfo:null;r=null}else a!==r&&(r=null)}}return k0(t,e,i,r,n),null}var fi=null,Df=null,As=null;function M0(){if(As)return As;var t,e=Df,n=e.length,i,r="value"in fi?fi.value:fi.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[a-i];i++);return As=r.slice(t,1<i?1-i:void 0)}function Ls(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zo(){return!0}function Gd(){return!1}function nn(t){function e(n,i,r,a,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Zo:Gd,this.isPropagationStopped=Gd,this}return it(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),e}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},If=nn(ga),ko=it({},ga,{view:0,detail:0}),w1=nn(ko),Kl,Ql,Pa,Ml=it({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pa&&(Pa&&t.type==="mousemove"?(Kl=t.screenX-Pa.screenX,Ql=t.screenY-Pa.screenY):Ql=Kl=0,Pa=t),Kl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),Vd=nn(Ml),b1=it({},Ml,{dataTransfer:0}),E1=nn(b1),T1=it({},ko,{relatedTarget:0}),Jl=nn(T1),C1=it({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),A1=nn(C1),L1=it({},ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),P1=nn(L1),R1=it({},ga,{data:0}),Hd=nn(R1),D1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=k1[t])?!!e[t]:!1}function kf(){return N1}var O1=it({},ko,{key:function(t){if(t.key){var e=D1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ls(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kf,charCode:function(t){return t.type==="keypress"?Ls(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ls(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),z1=nn(O1),F1=it({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wd=nn(F1),U1=it({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kf}),B1=nn(U1),G1=it({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),V1=nn(G1),H1=it({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),W1=nn(H1),j1=[9,13,27,32],Nf=Qn&&"CompositionEvent"in window,ro=null;Qn&&"documentMode"in document&&(ro=document.documentMode);var X1=Qn&&"TextEvent"in window&&!ro,w0=Qn&&(!Nf||ro&&8<ro&&11>=ro),jd=String.fromCharCode(32),Xd=!1;function b0(t,e){switch(t){case"keyup":return j1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function $1(t,e){switch(t){case"compositionend":return E0(e);case"keypress":return e.which!==32?null:(Xd=!0,jd);case"textInput":return t=e.data,t===jd&&Xd?null:t;default:return null}}function q1(t,e){if(zr)return t==="compositionend"||!Nf&&b0(t,e)?(t=M0(),As=Df=fi=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w0&&e.locale!=="ko"?null:e.data;default:return null}}var Y1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Y1[t.type]:e==="textarea"}function T0(t,e,n,i){a0(i),e=js(e,"onChange"),0<e.length&&(n=new If("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ao=null,So=null;function Z1(t){R0(t,0)}function wl(t){var e=Ur(t);if(Qm(e))return t}function K1(t,e){if(t==="change")return e}var C0=!1;if(Qn){var eu;if(Qn){var tu="oninput"in document;if(!tu){var qd=document.createElement("div");qd.setAttribute("oninput","return;"),tu=typeof qd.oninput=="function"}eu=tu}else eu=!1;C0=eu&&(!document.documentMode||9<document.documentMode)}function Yd(){ao&&(ao.detachEvent("onpropertychange",A0),So=ao=null)}function A0(t){if(t.propertyName==="value"&&wl(So)){var e=[];if(T0(e,So,t,wf(t)),t=Z1,Yi)t(e);else{Yi=!0;try{bf(t,e)}finally{Yi=!1,Tf()}}}}function Q1(t,e,n){t==="focusin"?(Yd(),ao=e,So=n,ao.attachEvent("onpropertychange",A0)):t==="focusout"&&Yd()}function J1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(So)}function e_(t,e){if(t==="click")return wl(e)}function t_(t,e){if(t==="input"||t==="change")return wl(e)}function n_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:n_,i_=Object.prototype.hasOwnProperty;function Mo(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++)if(!i_.call(e,n[i])||!ln(t[n[i]],e[n[i]]))return!1;return!0}function Zd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kd(t,e){var n=Zd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zd(n)}}function L0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?L0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qd(){for(var t=window,e=Gs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gs(t.document)}return e}function pc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var r_=Qn&&"documentMode"in document&&11>=document.documentMode,Fr=null,mc=null,oo=null,gc=!1;function Jd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gc||Fr==null||Fr!==Gs(i)||(i=Fr,"selectionStart"in i&&pc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oo&&Mo(oo,i)||(oo=i,i=js(mc,"onSelect"),0<i.length&&(e=new If("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Fr)))}Lf("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Lf("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Lf(d1,2);for(var eh="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),nu=0;nu<eh.length;nu++)Af.set(eh[nu],0);oa("onMouseEnter",["mouseout","mouseover"]);oa("onMouseLeave",["mouseout","mouseover"]);oa("onPointerEnter",["pointerout","pointerover"]);oa("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P0=new Set("cancel close invalid load scroll toggle".split(" ").concat(qa));function th(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,s1(i,e,void 0,t),t.currentTarget=null}function R0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&r.isPropagationStopped())break e;th(r,s,u),a=l}else for(o=0;o<i.length;o++){if(s=i[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&r.isPropagationStopped())break e;th(r,s,u),a=l}}}if(Hs)throw t=fc,Hs=!1,fc=null,t}function Qe(t,e){var n=O0(e),i=t+"__bubble";n.has(i)||(I0(e,t,2,!1),n.add(i))}var nh="_reactListening"+Math.random().toString(36).slice(2);function D0(t){t[nh]||(t[nh]=!0,Ym.forEach(function(e){P0.has(e)||ih(e,!1,t,null),ih(e,!0,t,null)}))}function ih(t,e,n,i){var r=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,a=n;if(t==="selectionchange"&&n.nodeType!==9&&(a=n.ownerDocument),i!==null&&!e&&P0.has(t)){if(t!=="scroll")return;r|=2,a=i}var o=O0(a),s=t+"__"+(e?"capture":"bubble");o.has(s)||(e&&(r|=4),I0(a,t,r,e),o.add(s))}function I0(t,e,n,i){var r=Af.get(e);switch(r===void 0?2:r){case 0:r=S1;break;case 1:r=M1;break;default:r=Pf}n=r.bind(null,e,n,t),r=void 0,!cc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function k0(t,e,n,i,r){var a=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;s!==null;){if(o=Zi(s),o===null)return;if(l=o.tag,l===5||l===6){i=a=o;continue e}s=s.parentNode}}i=i.return}i1(function(){var u=a,f=wf(n),h=[];e:{var d=y0.get(t);if(d!==void 0){var g=If,y=t;switch(t){case"keypress":if(Ls(n)===0)break e;case"keydown":case"keyup":g=z1;break;case"focusin":y="focus",g=Jl;break;case"focusout":y="blur",g=Jl;break;case"beforeblur":case"afterblur":g=Jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=E1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=B1;break;case g0:case v0:case _0:g=A1;break;case x0:g=V1;break;case"scroll":g=w1;break;case"wheel":g=W1;break;case"copy":case"cut":case"paste":g=P1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Wd}var p=(e&4)!==0,c=!p&&t==="scroll",m=p?d!==null?d+"Capture":null:d;p=[];for(var v=u,_;v!==null;){_=v;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,m!==null&&(x=vo(v,m),x!=null&&p.push(wo(v,x,_)))),c)break;v=v.return}0<p.length&&(d=new g(d,y,null,n,f),h.push({event:d,listeners:p}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&(e&16)===0&&(y=n.relatedTarget||n.fromElement)&&(Zi(y)||y[va]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Zi(y):null,y!==null&&(c=mr(y),y!==c||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(p=Vd,x="onMouseLeave",m="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(p=Wd,x="onPointerLeave",m="onPointerEnter",v="pointer"),c=g==null?d:Ur(g),_=y==null?d:Ur(y),d=new p(x,v+"leave",g,n,f),d.target=c,d.relatedTarget=_,x=null,Zi(f)===u&&(p=new p(m,v+"enter",y,n,f),p.target=_,p.relatedTarget=c,x=p),c=x,g&&y)t:{for(p=g,m=y,v=0,_=p;_;_=_r(_))v++;for(_=0,x=m;x;x=_r(x))_++;for(;0<v-_;)p=_r(p),v--;for(;0<_-v;)m=_r(m),_--;for(;v--;){if(p===m||m!==null&&p===m.alternate)break t;p=_r(p),m=_r(m)}p=null}else p=null;g!==null&&rh(h,d,g,p,!1),y!==null&&c!==null&&rh(h,c,y,p,!0)}}e:{if(d=u?Ur(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var b=K1;else if($d(d))if(C0)b=t_;else{b=J1;var T=Q1}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=e_);if(b&&(b=b(t,u))){T0(h,b,n,f);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&nc(d,"number",d.value)}switch(T=u?Ur(u):window,t){case"focusin":($d(T)||T.contentEditable==="true")&&(Fr=T,mc=u,oo=null);break;case"focusout":oo=mc=Fr=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,Jd(h,n,f);break;case"selectionchange":if(r_)break;case"keydown":case"keyup":Jd(h,n,f)}var L;if(Nf)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else zr?b0(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(w0&&n.locale!=="ko"&&(zr||S!=="onCompositionStart"?S==="onCompositionEnd"&&zr&&(L=M0()):(fi=f,Df="value"in fi?fi.value:fi.textContent,zr=!0)),T=js(u,S),0<T.length&&(S=new Hd(S,t,null,n,f),h.push({event:S,listeners:T}),L?S.data=L:(L=E0(n),L!==null&&(S.data=L)))),(L=X1?$1(t,n):q1(t,n))&&(u=js(u,"onBeforeInput"),0<u.length&&(f=new Hd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=L))}R0(h,e)})}function wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function js(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=vo(t,n),a!=null&&i.unshift(wo(t,a,r)),a=vo(t,e),a!=null&&i.push(wo(t,a,r))),t=t.return}return i}function _r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rh(t,e,n,i,r){for(var a=e._reactName,o=[];n!==null&&n!==i;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&u!==null&&(s=u,r?(l=vo(n,a),l!=null&&o.unshift(wo(n,l,s))):r||(l=vo(n,a),l!=null&&o.push(wo(n,l,s)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function Xs(){}var iu=null,ru=null;function N0(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function vc(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,a_=typeof clearTimeout=="function"?clearTimeout:void 0;function Of(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function Zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function oh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var au=0;function o_(t){return{$$typeof:Sf,toString:t,valueOf:t}}var bl=Math.random().toString(36).slice(2),di="__reactFiber$"+bl,$s="__reactProps$"+bl,va="__reactContainer$"+bl,sh="__reactEvents$"+bl;function Zi(t){var e=t[di];if(e)return e;for(var n=t.parentNode;n;){if(e=n[va]||n[di]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=oh(t);t!==null;){if(n=t[di])return n;t=oh(t)}return e}t=n,n=t.parentNode}return null}function No(t){return t=t[di]||t[va],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ur(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function El(t){return t[$s]||null}function O0(t){var e=t[sh];return e===void 0&&(e=t[sh]=new Set),e}var _c=[],Br=-1;function Oi(t){return{current:t}}function et(t){0>Br||(t.current=_c[Br],_c[Br]=null,Br--)}function st(t,e){Br++,_c[Br]=t.current,t.current=e}var Li={},Dt=Oi(Li),Ht=Oi(!1),ar=Li;function sa(t,e){var n=t.type.contextTypes;if(!n)return Li;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Wt(t){return t=t.childContextTypes,t!=null}function qs(){et(Ht),et(Dt)}function lh(t,e,n){if(Dt.current!==Li)throw Error(ie(168));st(Dt,e),st(Ht,n)}function z0(t,e,n){var i=t.stateNode;if(t=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(ie(108,Xr(e)||"Unknown",r));return it({},n,i)}function Ps(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Li,ar=Dt.current,st(Dt,t),st(Ht,Ht.current),!0}function uh(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=z0(t,e,ar),i.__reactInternalMemoizedMergedChildContext=t,et(Ht),et(Dt),st(Dt,t)):et(Ht),st(Ht,n)}var zf=null,nr=null,s_=St.unstable_runWithPriority,Ff=St.unstable_scheduleCallback,xc=St.unstable_cancelCallback,l_=St.unstable_shouldYield,ch=St.unstable_requestPaint,yc=St.unstable_now,u_=St.unstable_getCurrentPriorityLevel,Tl=St.unstable_ImmediatePriority,F0=St.unstable_UserBlockingPriority,U0=St.unstable_NormalPriority,B0=St.unstable_LowPriority,G0=St.unstable_IdlePriority,ou={},c_=ch!==void 0?ch:function(){},Wn=null,Rs=null,su=!1,fh=yc(),Pt=1e4>fh?yc:function(){return yc()-fh};function la(){switch(u_()){case Tl:return 99;case F0:return 98;case U0:return 97;case B0:return 96;case G0:return 95;default:throw Error(ie(332))}}function V0(t){switch(t){case 99:return Tl;case 98:return F0;case 97:return U0;case 96:return B0;case 95:return G0;default:throw Error(ie(332))}}function or(t,e){return t=V0(t),s_(t,e)}function bo(t,e,n){return t=V0(t),Ff(t,e,n)}function zn(){if(Rs!==null){var t=Rs;Rs=null,xc(t)}H0()}function H0(){if(!su&&Wn!==null){su=!0;var t=0;try{var e=Wn;or(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),Wn=null}catch(n){throw Wn!==null&&(Wn=Wn.slice(t+1)),Ff(Tl,zn),n}finally{su=!1}}}var f_=pr.ReactCurrentBatchConfig;function _n(t,e){if(t&&t.defaultProps){e=it({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ys=Oi(null),Zs=null,Gr=null,Ks=null;function Uf(){Ks=Gr=Zs=null}function Bf(t){var e=Ys.current;et(Ys),t.type._context._currentValue=e}function W0(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function Kr(t,e){Zs=t,Ks=Gr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Mn=!0),t.firstContext=null)}function fn(t,e){if(Ks!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Ks=t,e=1073741823),e={context:t,observedBits:e,next:null},Gr===null){if(Zs===null)throw Error(ie(308));Gr=e,Zs.dependencies={lanes:0,firstContext:e,responders:null}}else Gr=Gr.next=e;return t._currentValue}var ui=!1;function Gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function j0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mi(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function dh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Eo(t,e,n,i){var r=t.updateQueue;ui=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var f=t.alternate;if(f!==null){f=f.updateQueue;var h=f.lastBaseUpdate;h!==o&&(h===null?f.firstBaseUpdate=u:h.next=u,f.lastBaseUpdate=l)}}if(a!==null){h=r.baseState,o=0,f=u=l=null;do{s=a.lane;var d=a.eventTime;if((i&s)===s){f!==null&&(f=f.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(s=e,d=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(d,h,s);break e}h=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=y.payload,s=typeof g=="function"?g.call(d,h,s):g,s==null)break e;h=it({},h,s);break e;case 2:ui=!0}}a.callback!==null&&(t.flags|=32,s=r.effects,s===null?r.effects=[a]:s.push(a))}else d={eventTime:d,lane:s,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=d,l=h):f=f.next=d,o|=s;if(a=a.next,a===null){if(s=r.shared.pending,s===null)break;a=s.next,s.next=null,r.lastBaseUpdate=s,r.shared.pending=null}}while(1);f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,zo|=o,t.lanes=o,t.memoizedState=h}}function hh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var X0=new vl.Component().refs;function Qs(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:it({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cl={isMounted:function(t){return(t=t._reactInternals)?mr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=wi(t),a=Si(i,r);a.payload=e,n!=null&&(a.callback=n),Mi(t,a),bi(t,r,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=wi(t),a=Si(i,r);a.tag=1,a.payload=e,n!=null&&(a.callback=n),Mi(t,a),bi(t,r,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=wi(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),Mi(t,r),bi(t,i,n)}};function ph(t,e,n,i,r,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,o):e.prototype&&e.prototype.isPureReactComponent?!Mo(n,i)||!Mo(r,a):!0}function $0(t,e,n){var i=!1,r=Li,a=e.contextType;return typeof a=="object"&&a!==null?a=fn(a):(r=Wt(e)?ar:Dt.current,i=e.contextTypes,a=(i=i!=null)?sa(t,r):Li),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),e}function mh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Cl.enqueueReplaceState(e,e.state,null)}function Sc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=X0,Gf(t);var a=e.contextType;typeof a=="object"&&a!==null?r.context=fn(a):(a=Wt(e)?ar:Dt.current,r.context=sa(t,a)),Eo(t,n,r,i),r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Qs(t,e,a,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cl.enqueueReplaceState(r,r.state,null),Eo(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4)}var Ko=Array.isArray;function Ra(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(a){var o=i.refs;o===X0&&(o=i.refs={}),a===null?delete o[r]:o[r]=a},e._stringRef=r,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function Qo(t,e){if(t.type!=="textarea")throw Error(ie(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function q0(t){function e(c,m){if(t){var v=c.lastEffect;v!==null?(v.nextEffect=m,c.lastEffect=m):c.firstEffect=c.lastEffect=m,m.nextEffect=null,m.flags=8}}function n(c,m){if(!t)return null;for(;m!==null;)e(c,m),m=m.sibling;return null}function i(c,m){for(c=new Map;m!==null;)m.key!==null?c.set(m.key,m):c.set(m.index,m),m=m.sibling;return c}function r(c,m){return c=Ri(c,m),c.index=0,c.sibling=null,c}function a(c,m,v){return c.index=v,t?(v=c.alternate,v!==null?(v=v.index,v<m?(c.flags=2,m):v):(c.flags=2,m)):m}function o(c){return t&&c.alternate===null&&(c.flags=2),c}function s(c,m,v,_){return m===null||m.tag!==6?(m=du(v,c.mode,_),m.return=c,m):(m=r(m,v),m.return=c,m)}function l(c,m,v,_){return m!==null&&m.elementType===v.type?(_=r(m,v.props),_.ref=Ra(c,m,v),_.return=c,_):(_=Ns(v.type,v.key,v.props,null,c.mode,_),_.ref=Ra(c,m,v),_.return=c,_)}function u(c,m,v,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=hu(v,c.mode,_),m.return=c,m):(m=r(m,v.children||[]),m.return=c,m)}function f(c,m,v,_,x){return m===null||m.tag!==7?(m=ta(v,c.mode,_,x),m.return=c,m):(m=r(m,v),m.return=c,m)}function h(c,m,v){if(typeof m=="string"||typeof m=="number")return m=du(""+m,c.mode,v),m.return=c,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Xa:return v=Ns(m.type,m.key,m.props,null,c.mode,v),v.ref=Ra(c,null,m),v.return=c,v;case qi:return m=hu(m,c.mode,v),m.return=c,m}if(Ko(m)||Ea(m))return m=ta(m,c.mode,v,null),m.return=c,m;Qo(c,m)}return null}function d(c,m,v,_){var x=m!==null?m.key:null;if(typeof v=="string"||typeof v=="number")return x!==null?null:s(c,m,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xa:return v.key===x?v.type===ci?f(c,m,v.props.children,_,x):l(c,m,v,_):null;case qi:return v.key===x?u(c,m,v,_):null}if(Ko(v)||Ea(v))return x!==null?null:f(c,m,v,_,null);Qo(c,v)}return null}function g(c,m,v,_,x){if(typeof _=="string"||typeof _=="number")return c=c.get(v)||null,s(m,c,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Xa:return c=c.get(_.key===null?v:_.key)||null,_.type===ci?f(m,c,_.props.children,x,_.key):l(m,c,_,x);case qi:return c=c.get(_.key===null?v:_.key)||null,u(m,c,_,x)}if(Ko(_)||Ea(_))return c=c.get(v)||null,f(m,c,_,x,null);Qo(m,_)}return null}function y(c,m,v,_){for(var x=null,b=null,T=m,L=m=0,S=null;T!==null&&L<v.length;L++){T.index>L?(S=T,T=null):S=T.sibling;var w=d(c,T,v[L],_);if(w===null){T===null&&(T=S);break}t&&T&&w.alternate===null&&e(c,T),m=a(w,m,L),b===null?x=w:b.sibling=w,b=w,T=S}if(L===v.length)return n(c,T),x;if(T===null){for(;L<v.length;L++)T=h(c,v[L],_),T!==null&&(m=a(T,m,L),b===null?x=T:b.sibling=T,b=T);return x}for(T=i(c,T);L<v.length;L++)S=g(T,c,L,v[L],_),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?L:S.key),m=a(S,m,L),b===null?x=S:b.sibling=S,b=S);return t&&T.forEach(function(I){return e(c,I)}),x}function p(c,m,v,_){var x=Ea(v);if(typeof x!="function")throw Error(ie(150));if(v=x.call(v),v==null)throw Error(ie(151));for(var b=x=null,T=m,L=m=0,S=null,w=v.next();T!==null&&!w.done;L++,w=v.next()){T.index>L?(S=T,T=null):S=T.sibling;var I=d(c,T,w.value,_);if(I===null){T===null&&(T=S);break}t&&T&&I.alternate===null&&e(c,T),m=a(I,m,L),b===null?x=I:b.sibling=I,b=I,T=S}if(w.done)return n(c,T),x;if(T===null){for(;!w.done;L++,w=v.next())w=h(c,w.value,_),w!==null&&(m=a(w,m,L),b===null?x=w:b.sibling=w,b=w);return x}for(T=i(c,T);!w.done;L++,w=v.next())w=g(T,c,L,w.value,_),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?L:w.key),m=a(w,m,L),b===null?x=w:b.sibling=w,b=w);return t&&T.forEach(function(q){return e(c,q)}),x}return function(c,m,v,_){var x=typeof v=="object"&&v!==null&&v.type===ci&&v.key===null;x&&(v=v.props.children);var b=typeof v=="object"&&v!==null;if(b)switch(v.$$typeof){case Xa:e:{for(b=v.key,x=m;x!==null;){if(x.key===b){switch(x.tag){case 7:if(v.type===ci){n(c,x.sibling),m=r(x,v.props.children),m.return=c,c=m;break e}break;default:if(x.elementType===v.type){n(c,x.sibling),m=r(x,v.props),m.ref=Ra(c,x,v),m.return=c,c=m;break e}}n(c,x);break}else e(c,x);x=x.sibling}v.type===ci?(m=ta(v.props.children,c.mode,_,v.key),m.return=c,c=m):(_=Ns(v.type,v.key,v.props,null,c.mode,_),_.ref=Ra(c,m,v),_.return=c,c=_)}return o(c);case qi:e:{for(x=v.key;m!==null;){if(m.key===x)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(c,m.sibling),m=r(m,v.children||[]),m.return=c,c=m;break e}else{n(c,m);break}else e(c,m);m=m.sibling}m=hu(v,c.mode,_),m.return=c,c=m}return o(c)}if(typeof v=="string"||typeof v=="number")return v=""+v,m!==null&&m.tag===6?(n(c,m.sibling),m=r(m,v),m.return=c,c=m):(n(c,m),m=du(v,c.mode,_),m.return=c,c=m),o(c);if(Ko(v))return y(c,m,v,_);if(Ea(v))return p(c,m,v,_);if(b&&Qo(c,v),typeof v=="undefined"&&!x)switch(c.tag){case 1:case 22:case 0:case 11:case 15:throw Error(ie(152,Xr(c.type)||"Component"))}return n(c,m)}}var Js=q0(!0),Y0=q0(!1),Oo={},kn=Oi(Oo),To=Oi(Oo),Co=Oi(Oo);function Ki(t){if(t===Oo)throw Error(ie(174));return t}function Mc(t,e){switch(st(Co,e),st(To,t),st(kn,Oo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oc(e,t)}et(kn),st(kn,e)}function ua(){et(kn),et(To),et(Co)}function gh(t){Ki(Co.current);var e=Ki(kn.current),n=oc(e,t.type);e!==n&&(st(To,t),st(kn,n))}function Vf(t){To.current===t&&(et(kn),et(To))}var ot=Oi(0);function el(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $n=null,hi=null,Nn=!1;function Z0(t,e){var n=un(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function vh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function wc(t){if(Nn){var e=hi;if(e){var n=e;if(!vh(t,e)){if(e=Zr(n.nextSibling),!e||!vh(t,e)){t.flags=t.flags&-1025|2,Nn=!1,$n=t;return}Z0($n,n)}$n=t,hi=Zr(e.firstChild)}else t.flags=t.flags&-1025|2,Nn=!1,$n=t}}function _h(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$n=t}function Jo(t){if(t!==$n)return!1;if(!Nn)return _h(t),Nn=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!vc(e,t.memoizedProps))for(e=hi;e;)Z0(t,e),e=Zr(e.nextSibling);if(_h(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hi=Zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hi=null}}else hi=$n?Zr(t.stateNode.nextSibling):null;return!0}function lu(){hi=$n=null,Nn=!1}var Qr=[];function Hf(){for(var t=0;t<Qr.length;t++)Qr[t]._workInProgressVersionPrimary=null;Qr.length=0}var so=pr.ReactCurrentDispatcher,cn=pr.ReactCurrentBatchConfig,Ao=0,ut=null,Lt=null,Mt=null,tl=!1,lo=!1;function Gt(){throw Error(ie(321))}function Wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function jf(t,e,n,i,r,a){if(Ao=a,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,so.current=t===null||t.memoizedState===null?h_:p_,t=n(i,r),lo){a=0;do{if(lo=!1,!(25>a))throw Error(ie(301));a+=1,Mt=Lt=null,e.updateQueue=null,so.current=m_,t=n(i,r)}while(lo)}if(so.current=al,e=Lt!==null&&Lt.next!==null,Ao=0,Mt=Lt=ut=null,tl=!1,e)throw Error(ie(300));return t}function Qi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?ut.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function gr(){if(Lt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Mt===null?ut.memoizedState:Mt.next;if(e!==null)Mt=e,Lt=t;else{if(t===null)throw Error(ie(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Mt===null?ut.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function Rn(t,e){return typeof e=="function"?e(t):e}function Da(t){var e=gr(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,n.pending=null}if(r!==null){r=r.next,i=i.baseState;var s=o=a=null,l=r;do{var u=l.lane;if((Ao&u)===u)s!==null&&(s=s.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),i=l.eagerReducer===t?l.eagerState:t(i,l.action);else{var f={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};s===null?(o=s=f,a=i):s=s.next=f,ut.lanes|=u,zo|=u}l=l.next}while(l!==null&&l!==r);s===null?a=i:s.next=o,ln(i,e.memoizedState)||(Mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=s,n.lastRenderedState=i}return[e.memoizedState,n.dispatch]}function Ia(t){var e=gr(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do a=t(a,o.action),o=o.next;while(o!==r);ln(a,e.memoizedState)||(Mn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function xh(t,e,n){var i=e._getVersion;i=i(e._source);var r=e._workInProgressVersionPrimary;if(r!==null?t=r===i:(t=t.mutableReadLanes,(t=(Ao&t)===t)&&(e._workInProgressVersionPrimary=i,Qr.push(e))),t)return n(e._source);throw Qr.push(e),Error(ie(350))}function K0(t,e,n,i){var r=Ut;if(r===null)throw Error(ie(349));var a=e._getVersion,o=a(e._source),s=so.current,l=s.useState(function(){return xh(r,e,n)}),u=l[1],f=l[0];l=Mt;var h=t.memoizedState,d=h.refs,g=d.getSnapshot,y=h.source;h=h.subscribe;var p=ut;return t.memoizedState={refs:d,source:e,subscribe:i},s.useEffect(function(){d.getSnapshot=n,d.setSnapshot=u;var c=a(e._source);if(!ln(o,c)){c=n(e._source),ln(f,c)||(u(c),c=wi(p),r.mutableReadLanes|=c&r.pendingLanes),c=r.mutableReadLanes,r.entangledLanes|=c;for(var m=r.entanglements,v=c;0<v;){var _=31-Ai(v),x=1<<_;m[_]|=c,v&=~x}}},[n,e,i]),s.useEffect(function(){return i(e._source,function(){var c=d.getSnapshot,m=d.setSnapshot;try{m(c(e._source));var v=wi(p);r.mutableReadLanes|=v&r.pendingLanes}catch(_){m(function(){throw _})}})},[e,i]),ln(g,n)&&ln(y,e)&&ln(h,i)||(t={pending:null,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:f},t.dispatch=u=qf.bind(null,ut,t),l.queue=t,l.baseQueue=null,f=xh(r,e,n),l.memoizedState=l.baseState=f),f}function Q0(t,e,n){var i=gr();return K0(i,t,e,n)}function ka(t){var e=Qi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:t},t=t.dispatch=qf.bind(null,ut,t),[e.memoizedState,t]}function nl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function yh(t){var e=Qi();return t={current:t},e.memoizedState=t}function il(){return gr().memoizedState}function bc(t,e,n,i){var r=Qi();ut.flags|=t,r.memoizedState=nl(1|e,n,void 0,i===void 0?null:i)}function Xf(t,e,n,i){var r=gr();i=i===void 0?null:i;var a=void 0;if(Lt!==null){var o=Lt.memoizedState;if(a=o.destroy,i!==null&&Wf(i,o.deps)){nl(e,n,a,i);return}}ut.flags|=t,r.memoizedState=nl(1|e,n,a,i)}function Sh(t,e){return bc(516,4,t,e)}function rl(t,e){return Xf(516,4,t,e)}function J0(t,e){return Xf(4,2,t,e)}function eg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tg(t,e,n){return n=n!=null?n.concat([t]):null,Xf(4,2,eg.bind(null,e,t),n)}function $f(){}function ng(t,e){var n=gr();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Wf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ig(t,e){var n=gr();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Wf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function d_(t,e){var n=la();or(98>n?98:n,function(){t(!0)}),or(97<n?97:n,function(){var i=cn.transition;cn.transition=1;try{t(!1),e()}finally{cn.transition=i}})}function qf(t,e,n){var i=Qt(),r=wi(t),a={lane:r,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?a.next=a:(a.next=o.next,o.next=a),e.pending=a,o=t.alternate,t===ut||o!==null&&o===ut)lo=tl=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(a.eagerReducer=o,a.eagerState=l,ln(l,s))return}catch{}finally{}bi(t,r,i)}}var al={readContext:fn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useOpaqueIdentifier:Gt,unstable_isNewReconciler:!1},h_={readContext:fn,useCallback:function(t,e){return Qi().memoizedState=[t,e===void 0?null:e],t},useContext:fn,useEffect:Sh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,bc(4,2,eg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return bc(4,2,t,e)},useMemo:function(t,e){var n=Qi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Qi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t=i.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=qf.bind(null,ut,t),[i.memoizedState,t]},useRef:yh,useState:ka,useDebugValue:$f,useDeferredValue:function(t){var e=ka(t),n=e[0],i=e[1];return Sh(function(){var r=cn.transition;cn.transition=1;try{i(t)}finally{cn.transition=r}},[t]),n},useTransition:function(){var t=ka(!1),e=t[0];return t=d_.bind(null,t[1]),yh(t),[t,e]},useMutableSource:function(t,e,n){var i=Qi();return i.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},K0(i,t,e,n)},useOpaqueIdentifier:function(){if(Nn){var t=!1,e=o_(function(){throw t||(t=!0,n("r:"+(au++).toString(36))),Error(ie(355))}),n=ka(e)[1];return(ut.mode&2)===0&&(ut.flags|=516,nl(5,function(){n("r:"+(au++).toString(36))},void 0,null)),e}return e="r:"+(au++).toString(36),ka(e),e},unstable_isNewReconciler:!1},p_={readContext:fn,useCallback:ng,useContext:fn,useEffect:rl,useImperativeHandle:tg,useLayoutEffect:J0,useMemo:ig,useReducer:Da,useRef:il,useState:function(){return Da(Rn)},useDebugValue:$f,useDeferredValue:function(t){var e=Da(Rn),n=e[0],i=e[1];return rl(function(){var r=cn.transition;cn.transition=1;try{i(t)}finally{cn.transition=r}},[t]),n},useTransition:function(){var t=Da(Rn)[0];return[il().current,t]},useMutableSource:Q0,useOpaqueIdentifier:function(){return Da(Rn)[0]},unstable_isNewReconciler:!1},m_={readContext:fn,useCallback:ng,useContext:fn,useEffect:rl,useImperativeHandle:tg,useLayoutEffect:J0,useMemo:ig,useReducer:Ia,useRef:il,useState:function(){return Ia(Rn)},useDebugValue:$f,useDeferredValue:function(t){var e=Ia(Rn),n=e[0],i=e[1];return rl(function(){var r=cn.transition;cn.transition=1;try{i(t)}finally{cn.transition=r}},[t]),n},useTransition:function(){var t=Ia(Rn)[0];return[il().current,t]},useMutableSource:Q0,useOpaqueIdentifier:function(){return Ia(Rn)[0]},unstable_isNewReconciler:!1},g_=pr.ReactCurrentOwner,Mn=!1;function Vt(t,e,n,i){e.child=t===null?Y0(e,null,n,i):Js(e,t.child,n,i)}function Mh(t,e,n,i,r){n=n.render;var a=e.ref;return Kr(e,r),i=jf(t,e,n,i,a,r),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~r,qn(t,e,r)):(e.flags|=1,Vt(t,e,i,r),e.child)}function wh(t,e,n,i,r,a){if(t===null){var o=n.type;return typeof o=="function"&&!ed(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,rg(t,e,o,i,r,a)):(t=Ns(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(r&a)===0&&(r=o.memoizedProps,n=n.compare,n=n!==null?n:Mo,n(r,i)&&t.ref===e.ref)?qn(t,e,a):(e.flags|=1,t=Ri(o,i),t.ref=e.ref,t.return=e,e.child=t)}function rg(t,e,n,i,r,a){if(t!==null&&Mo(t.memoizedProps,i)&&t.ref===e.ref)if(Mn=!1,(a&r)!==0)(t.flags&16384)!==0&&(Mn=!0);else return e.lanes=t.lanes,qn(t,e,a);return Ec(t,e,n,i,a)}function uu(t,e,n){var i=e.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden"||i.mode==="unstable-defer-without-hiding")if((e.mode&4)===0)e.memoizedState={baseLanes:0},ts(e,n);else if((n&1073741824)!==0)e.memoizedState={baseLanes:0},ts(e,a!==null?a.baseLanes:n);else return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},ts(e,t),null;else a!==null?(i=a.baseLanes|n,e.memoizedState=null):i=n,ts(e,i);return Vt(t,e,r,n),e.child}function ag(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Ec(t,e,n,i,r){var a=Wt(n)?ar:Dt.current;return a=sa(e,a),Kr(e,r),n=jf(t,e,n,i,a,r),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~r,qn(t,e,r)):(e.flags|=1,Vt(t,e,n,r),e.child)}function bh(t,e,n,i,r){if(Wt(n)){var a=!0;Ps(e)}else a=!1;if(Kr(e,r),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),$0(e,n,i),Sc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=fn(u):(u=Wt(n)?ar:Dt.current,u=sa(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||l!==u)&&mh(e,o,i,u),ui=!1;var d=e.memoizedState;o.state=d,Eo(e,i,o,r),l=e.memoizedState,s!==i||d!==l||Ht.current||ui?(typeof f=="function"&&(Qs(e,n,f,i),l=e.memoizedState),(s=ui||ph(e,n,s,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=s):(typeof o.componentDidMount=="function"&&(e.flags|=4),i=!1)}else{o=e.stateNode,j0(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:_n(e.type,s),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=fn(l):(l=Wt(n)?ar:Dt.current,l=sa(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||d!==l)&&mh(e,o,i,l),ui=!1,d=e.memoizedState,o.state=d,Eo(e,i,o,r);var y=e.memoizedState;s!==h||d!==y||Ht.current||ui?(typeof g=="function"&&(Qs(e,n,g,i),y=e.memoizedState),(u=ui||ph(e,n,u,i,d,y,l))?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),i=!1)}return Tc(t,e,n,i,a,r)}function Tc(t,e,n,i,r,a){ag(t,e);var o=(e.flags&64)!==0;if(!i&&!o)return r&&uh(e,n,!1),qn(t,e,a);i=e.stateNode,g_.current=e;var s=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Js(e,t.child,null,a),e.child=Js(e,null,s,a)):Vt(t,e,s,a),e.memoizedState=i.state,r&&uh(e,n,!0),e.child}function Eh(t){var e=t.stateNode;e.pendingContext?lh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lh(t,e.context,!1),Mc(t,e.containerInfo)}var es={dehydrated:null,retryLane:0};function Th(t,e,n){var i=e.pendingProps,r=ot.current,a=!1,o;return(o=(e.flags&64)!==0)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(a=!0,e.flags&=-65):t!==null&&t.memoizedState===null||i.fallback===void 0||i.unstable_avoidThisFallback===!0||(r|=1),st(ot,r&1),t===null?(i.fallback!==void 0&&wc(e),t=i.children,r=i.fallback,a?(t=Ch(e,t,r,n),e.child.memoizedState={baseLanes:n},e.memoizedState=es,t):typeof i.unstable_expectedLoadTime=="number"?(t=Ch(e,t,r,n),e.child.memoizedState={baseLanes:n},e.memoizedState=es,e.lanes=33554432,t):(n=td({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?a?(i=Lh(t,e,i.children,i.fallback,n),a=e.child,r=t.child.memoizedState,a.memoizedState=r===null?{baseLanes:n}:{baseLanes:r.baseLanes|n},a.childLanes=t.childLanes&~n,e.memoizedState=es,i):(n=Ah(t,e,i.children,n),e.memoizedState=null,n):a?(i=Lh(t,e,i.children,i.fallback,n),a=e.child,r=t.child.memoizedState,a.memoizedState=r===null?{baseLanes:n}:{baseLanes:r.baseLanes|n},a.childLanes=t.childLanes&~n,e.memoizedState=es,i):(n=Ah(t,e,i.children,n),e.memoizedState=null,n)}function Ch(t,e,n,i){var r=t.mode,a=t.child;return e={mode:"hidden",children:e},(r&2)===0&&a!==null?(a.childLanes=0,a.pendingProps=e):a=td(e,r,0,null),n=ta(n,r,i,null),a.return=t,n.return=t,a.sibling=n,t.child=a,n}function Ah(t,e,n,i){var r=t.child;return t=r.sibling,n=Ri(r,{mode:"visible",children:n}),(e.mode&2)===0&&(n.lanes=i),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function Lh(t,e,n,i,r){var a=e.mode,o=t.child;t=o.sibling;var s={mode:"hidden",children:n};return(a&2)===0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=s,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=Ri(o,s),t!==null?i=Ri(t,i):(i=ta(i,a,r,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,i}function Ph(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),W0(t.return,e)}function cu(t,e,n,i,r,a){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,lastEffect:a}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r,o.lastEffect=a)}function Rh(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(Vt(t,e,i.children,n),i=ot.current,(i&2)!==0)i=i&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ph(t,n);else if(t.tag===19)Ph(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ot,i),(e.mode&2)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&el(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),cu(e,!1,r,n,a,e.lastEffect);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&el(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}cu(e,!0,n,null,a,e.lastEffect);break;case"together":cu(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zo|=e.lanes,(n&e.childLanes)!==0){if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Ri(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ri(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var og,Cc,sg,lg;og=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cc=function(){};sg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ki(kn.current);var a=null;switch(n){case"input":r=ec(t,r),i=ec(t,i),a=[];break;case"option":r=ic(t,r),i=ic(t,i),a=[];break;case"select":r=it({},r,{value:void 0}),i=it({},i,{value:void 0}),a=[];break;case"textarea":r=rc(t,r),i=rc(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Xs)}sc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var s=r[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(mo.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in i){var l=i[u];if(s=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(mo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Qe("scroll",t),a||s===l||(a=[])):typeof l=="object"&&l!==null&&l.$$typeof===Sf?l.toString():(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};lg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Na(t,e){if(!Nn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function v_(t,e,n){var i=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Wt(e.type)&&qs(),null;case 3:return ua(),et(Ht),et(Dt),Hf(),i=e.stateNode,i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Jo(e)?e.flags|=4:i.hydrate||(e.flags|=256)),Cc(e),null;case 5:Vf(e);var r=Ki(Co.current);if(n=e.type,t!==null&&e.stateNode!=null)sg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=128);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return null}if(t=Ki(kn.current),Jo(e)){i=e.stateNode,n=e.type;var a=e.memoizedProps;switch(i[di]=e,i[$s]=a,n){case"dialog":Qe("cancel",i),Qe("close",i);break;case"iframe":case"object":case"embed":Qe("load",i);break;case"video":case"audio":for(t=0;t<qa.length;t++)Qe(qa[t],i);break;case"source":Qe("error",i);break;case"img":case"image":case"link":Qe("error",i),Qe("load",i);break;case"details":Qe("toggle",i);break;case"input":Rd(i,a),Qe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},Qe("invalid",i);break;case"textarea":Id(i,a),Qe("invalid",i)}sc(n,a),t=null;for(var o in a)a.hasOwnProperty(o)&&(r=a[o],o==="children"?typeof r=="string"?i.textContent!==r&&(t=["children",r]):typeof r=="number"&&i.textContent!==""+r&&(t=["children",""+r]):mo.hasOwnProperty(o)&&r!=null&&o==="onScroll"&&Qe("scroll",i));switch(n){case"input":$o(i),Dd(i,a,!0);break;case"textarea":$o(i),kd(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Xs)}i=t,e.updateQueue=i,i!==null&&(e.flags|=4)}else{switch(o=r.nodeType===9?r:r.ownerDocument,t===ac.html&&(t=t0(n)),t===ac.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[di]=e,t[$s]=i,og(t,e,!1,!1),e.stateNode=t,o=lc(n,i),n){case"dialog":Qe("cancel",t),Qe("close",t),r=i;break;case"iframe":case"object":case"embed":Qe("load",t),r=i;break;case"video":case"audio":for(r=0;r<qa.length;r++)Qe(qa[r],t);r=i;break;case"source":Qe("error",t),r=i;break;case"img":case"image":case"link":Qe("error",t),Qe("load",t),r=i;break;case"details":Qe("toggle",t),r=i;break;case"input":Rd(t,i),r=ec(t,i),Qe("invalid",t);break;case"option":r=ic(t,i);break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=it({},i,{value:void 0}),Qe("invalid",t);break;case"textarea":Id(t,i),r=rc(t,i),Qe("invalid",t);break;default:r=i}sc(n,r);var s=r;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?r0(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n0(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&go(t,l):typeof l=="number"&&go(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(mo.hasOwnProperty(a)?l!=null&&a==="onScroll"&&Qe("scroll",t):l!=null&&mf(t,a,l,o))}switch(n){case"input":$o(t),Dd(t,i,!1);break;case"textarea":$o(t),kd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ci(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?$r(t,!!i.multiple,a,!1):i.defaultValue!=null&&$r(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Xs)}N0(n,i)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)lg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));n=Ki(Co.current),Ki(kn.current),Jo(e)?(i=e.stateNode,n=e.memoizedProps,i[di]=e,i.nodeValue!==n&&(e.flags|=4)):(i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[di]=e,e.stateNode=i)}return null;case 13:return et(ot),i=e.memoizedState,(e.flags&64)!==0?(e.lanes=n,e):(i=i!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&Jo(e):n=t.memoizedState!==null,i&&!n&&(e.mode&2)!==0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(ot.current&1)!==0?wt===0&&(wt=3):((wt===0||wt===3)&&(wt=4),Ut===null||(zo&134217727)===0&&(xa&134217727)===0||Jr(Ut,Rt))),(i||n)&&(e.flags|=4),null);case 4:return ua(),Cc(e),t===null&&D0(e.stateNode.containerInfo),null;case 10:return Bf(e),null;case 17:return Wt(e.type)&&qs(),null;case 19:if(et(ot),i=e.memoizedState,i===null)return null;if(a=(e.flags&64)!==0,o=i.rendering,o===null)if(a)Na(i,!1);else{if(wt!==0||t!==null&&(t.flags&64)!==0)for(t=e.child;t!==null;){if(o=el(t),o!==null){for(e.flags|=64,Na(i,!1),a=o.updateQueue,a!==null&&(e.updateQueue=a,e.flags|=4),i.lastEffect===null&&(e.firstEffect=null),e.lastEffect=i.lastEffect,i=n,n=e.child;n!==null;)a=n,t=i,a.flags&=2,a.nextEffect=null,a.firstEffect=null,a.lastEffect=null,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ot,ot.current&1|2),e.child}t=t.sibling}i.tail!==null&&Pt()>Ic&&(e.flags|=64,a=!0,Na(i,!1),e.lanes=33554432)}else{if(!a)if(t=el(o),t!==null){if(e.flags|=64,a=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Na(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Nn)return e=e.lastEffect=i.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*Pt()-i.renderingStartTime>Ic&&n!==1073741824&&(e.flags|=64,a=!0,Na(i,!1),e.lanes=33554432);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.lastEffect=e.lastEffect,i.renderingStartTime=Pt(),n.sibling=null,e=ot.current,st(ot,a?e&1|2:e&1),n):null;case 23:case 24:return Jf(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&i.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(ie(156,e.tag))}function __(t){switch(t.tag){case 1:Wt(t.type)&&qs();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(ua(),et(Ht),et(Dt),Hf(),e=t.flags,(e&64)!==0)throw Error(ie(285));return t.flags=e&-4097|64,t;case 5:return Vf(t),null;case 13:return et(ot),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return et(ot),null;case 4:return ua(),null;case 10:return Bf(t),null;case 23:case 24:return Jf(),null;default:return null}}function Yf(t,e){try{var n="",i=e;do n+=Qv(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:r}}function Ac(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var x_=typeof WeakMap=="function"?WeakMap:Map;function ug(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){sl||(sl=!0,kc=i),Ac(t,e)},n}function cg(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return Ac(t,e),i(r)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){typeof i!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this),Ac(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var y_=typeof WeakSet=="function"?WeakSet:Set;function Dh(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){Ei(t,n)}else e.current=null}function S_(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,i=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:_n(e.type,n),i),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&Of(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(ie(163))}function M_(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)===3){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var r=t;i=r.next,r=r.tag,(r&4)!==0&&(r&1)!==0&&(xg(n,t),P_(n,t)),t=i}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(i=n.elementType===n.type?e.memoizedProps:_n(n.type,e.memoizedProps),t.componentDidUpdate(i,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&hh(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}hh(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&N0(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&p0(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(ie(163))}function Ih(t,e){for(var n=t;;){if(n.tag===5){var i=n.stateNode;if(e)i=i.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{i=n.stateNode;var r=n.memoizedProps.style;r=r!=null&&r.hasOwnProperty("display")?r.display:null,i.style.display=i0("display",r)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function kh(t,e){if(nr&&typeof nr.onCommitFiberUnmount=="function")try{nr.onCommitFiberUnmount(zf,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var i=n,r=i.destroy;if(i=i.tag,r!==void 0)if((i&4)!==0)xg(e,n);else{i=e;try{r()}catch(a){Ei(i,a)}}n=n.next}while(n!==t)}break;case 1:if(Dh(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(a){Ei(e,a)}break;case 5:Dh(e);break;case 4:fg(t,e)}}function Nh(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function Oh(t){return t.tag===5||t.tag===3||t.tag===4}function zh(t){e:{for(var e=t.return;e!==null;){if(Oh(e))break e;e=e.return}throw Error(ie(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var i=!1;break;case 3:e=e.containerInfo,i=!0;break;case 4:e=e.containerInfo,i=!0;break;default:throw Error(ie(161))}n.flags&16&&(go(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||Oh(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}i?Lc(t,n,e):Pc(t,n,e)}function Lc(t,e,n){var i=t.tag,r=i===5||i===6;if(r)t=r?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xs));else if(i!==4&&(t=t.child,t!==null))for(Lc(t,e,n),t=t.sibling;t!==null;)Lc(t,e,n),t=t.sibling}function Pc(t,e,n){var i=t.tag,r=i===5||i===6;if(r)t=r?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Pc(t,e,n),t=t.sibling;t!==null;)Pc(t,e,n),t=t.sibling}function fg(t,e){for(var n=e,i=!1,r,a;;){if(!i){i=n.return;e:for(;;){if(i===null)throw Error(ie(160));switch(r=i.stateNode,i.tag){case 5:a=!1;break e;case 3:r=r.containerInfo,a=!0;break e;case 4:r=r.containerInfo,a=!0;break e}i=i.return}i=!0}if(n.tag===5||n.tag===6){e:for(var o=t,s=n,l=s;;)if(kh(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===s)break e;for(;l.sibling===null;){if(l.return===null||l.return===s)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}a?(o=r,s=n.stateNode,o.nodeType===8?o.parentNode.removeChild(s):o.removeChild(s)):r.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){r=n.stateNode.containerInfo,a=!0,n.child.return=n,n=n.child;continue}}else if(kh(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(i=!1)}n.sibling.return=n.return,n=n.sibling}}function fu(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do(i.tag&3)===3&&(t=i.destroy,i.destroy=void 0,t!==void 0&&t()),i=i.next;while(i!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){i=e.memoizedProps;var r=t!==null?t.memoizedProps:i;t=e.type;var a=e.updateQueue;if(e.updateQueue=null,a!==null){for(n[$s]=i,t==="input"&&i.type==="radio"&&i.name!=null&&Jm(n,i),lc(t,r),e=lc(t,i),r=0;r<a.length;r+=2){var o=a[r],s=a[r+1];o==="style"?r0(n,s):o==="dangerouslySetInnerHTML"?n0(n,s):o==="children"?go(n,s):mf(n,o,s,e)}switch(t){case"input":tc(n,i);break;case"textarea":e0(n,i);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!i.multiple,a=i.value,a!=null?$r(n,!!i.multiple,a,!1):t!==!!i.multiple&&(i.defaultValue!=null?$r(n,!!i.multiple,i.defaultValue,!0):$r(n,!!i.multiple,i.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(ie(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,p0(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(Qf=Pt(),Ih(e.child,!0)),Fh(e);return;case 19:Fh(e);return;case 17:return;case 23:case 24:Ih(e,e.memoizedState!==null);return}throw Error(ie(163))}function Fh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new y_),e.forEach(function(i){var r=I_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function w_(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var b_=Math.ceil,ol=pr.ReactCurrentDispatcher,Zf=pr.ReactCurrentOwner,Ce=0,Ut=null,ht=null,Rt=0,sr=0,Rc=Oi(0),wt=0,Al=null,_a=0,zo=0,xa=0,Kf=0,Dc=null,Qf=0,Ic=1/0;function ya(){Ic=Pt()+500}var he=null,sl=!1,kc=null,Dn=null,Pi=!1,uo=null,Ya=90,Nc=[],Oc=[],Zn=null,co=0,zc=null,Ds=-1,jn=0,Is=0,fo=null,ks=!1;function Qt(){return(Ce&48)!==0?Pt():Ds!==-1?Ds:Ds=Pt()}function wi(t){if(t=t.mode,(t&2)===0)return 1;if((t&4)===0)return la()===99?1:2;if(jn===0&&(jn=_a),f_.transition!==0){Is!==0&&(Is=Dc!==null?Dc.pendingLanes:0),t=jn;var e=4186112&~Is;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=la(),(Ce&4)!==0&&t===98?t=Ws(12,jn):(t=p1(t),t=Ws(t,jn)),t}function bi(t,e,n){if(50<co)throw co=0,zc=null,Error(ie(185));if(t=Ll(t,e),t===null)return null;Sl(t,e,n),t===Ut&&(xa|=e,wt===4&&Jr(t,Rt));var i=la();e===1?(Ce&8)!==0&&(Ce&48)===0?Fc(t):(dn(t,n),Ce===0&&(ya(),zn())):((Ce&4)===0||i!==98&&i!==99||(Zn===null?Zn=new Set([t]):Zn.add(t)),dn(t,n)),Dc=t}function Ll(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function dn(t,e){for(var n=t.callbackNode,i=t.suspendedLanes,r=t.pingedLanes,a=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Ai(o),l=1<<s,u=a[s];if(u===-1){if((l&i)===0||(l&r)!==0){u=e,Dr(l);var f=Ye;a[s]=10<=f?u+250:6<=f?u+5e3:-1}}else u<=e&&(t.expiredLanes|=l);o&=~l}if(i=yo(t,t===Ut?Rt:0),e=Ye,i===0)n!==null&&(n!==ou&&xc(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==ou&&xc(n)}e===15?(n=Fc.bind(null,t),Wn===null?(Wn=[n],Rs=Ff(Tl,H0)):Wn.push(n),n=ou):e===14?n=bo(99,Fc.bind(null,t)):(n=m1(e),n=bo(n,dg.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function dg(t){if(Ds=-1,Is=jn=0,(Ce&48)!==0)throw Error(ie(327));var e=t.callbackNode;if(zi()&&t.callbackNode!==e)return null;var n=yo(t,t===Ut?Rt:0);if(n===0)return null;var i=n,r=Ce;Ce|=16;var a=gg();(Ut!==t||Rt!==i)&&(ya(),ea(t,i));do try{C_();break}catch(s){mg(t,s)}while(1);if(Uf(),ol.current=a,Ce=r,ht!==null?i=0:(Ut=null,Rt=0,i=wt),(_a&xa)!==0)ea(t,0);else if(i!==0){if(i===2&&(Ce|=64,t.hydrate&&(t.hydrate=!1,Of(t.containerInfo)),n=S0(t),n!==0&&(i=Za(t,n))),i===1)throw e=Al,ea(t,0),Jr(t,n),dn(t,Pt()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,i){case 0:case 1:throw Error(ie(345));case 2:Wi(t);break;case 3:if(Jr(t,n),(n&62914560)===n&&(i=Qf+500-Pt(),10<i)){if(yo(t,0)!==0)break;if(r=t.suspendedLanes,(r&n)!==n){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ah(Wi.bind(null,t),i);break}Wi(t);break;case 4:if(Jr(t,n),(n&4186112)===n)break;for(i=t.eventTimes,r=-1;0<n;){var o=31-Ai(n);a=1<<o,o=i[o],o>r&&(r=o),n&=~a}if(n=r,n=Pt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*b_(n/1960))-n,10<n){t.timeoutHandle=ah(Wi.bind(null,t),n);break}Wi(t);break;case 5:Wi(t);break;default:throw Error(ie(329))}}return dn(t,Pt()),t.callbackNode===e?dg.bind(null,t):null}function Jr(t,e){for(e&=~Kf,e&=~xa,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ai(e),i=1<<n;t[n]=-1,e&=~i}}function Fc(t){if((Ce&48)!==0)throw Error(ie(327));if(zi(),t===Ut&&(t.expiredLanes&Rt)!==0){var e=Rt,n=Za(t,e);(_a&xa)!==0&&(e=yo(t,e),n=Za(t,e))}else e=yo(t,0),n=Za(t,e);if(t.tag!==0&&n===2&&(Ce|=64,t.hydrate&&(t.hydrate=!1,Of(t.containerInfo)),e=S0(t),e!==0&&(n=Za(t,e))),n===1)throw n=Al,ea(t,0),Jr(t,e),dn(t,Pt()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wi(t),dn(t,Pt()),null}function E_(){if(Zn!==null){var t=Zn;Zn=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,dn(e,Pt())})}zn()}function hg(t,e){var n=Ce;Ce|=1;try{return t(e)}finally{Ce=n,Ce===0&&(ya(),zn())}}function pg(t,e){var n=Ce;Ce&=-2,Ce|=8;try{return t(e)}finally{Ce=n,Ce===0&&(ya(),zn())}}function ts(t,e){st(Rc,sr),sr|=e,_a|=e}function Jf(){sr=Rc.current,et(Rc)}function ea(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,a_(n)),ht!==null)for(n=ht.return;n!==null;){var i=n;switch(i.tag){case 1:i=i.type.childContextTypes,i!=null&&qs();break;case 3:ua(),et(Ht),et(Dt),Hf();break;case 5:Vf(i);break;case 4:ua();break;case 13:et(ot);break;case 19:et(ot);break;case 10:Bf(i);break;case 23:case 24:Jf()}n=n.return}Ut=t,ht=Ri(t.current,null),Rt=sr=_a=e,wt=0,Al=null,Kf=xa=zo=0}function mg(t,e){do{var n=ht;try{if(Uf(),so.current=al,tl){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}tl=!1}if(Ao=0,Mt=Lt=ut=null,lo=!1,Zf.current=null,n===null||n.return===null){wt=1,Al=e,ht=null;break}e:{var a=t,o=n.return,s=n,l=e;if(e=Rt,s.flags|=2048,s.firstEffect=s.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((s.mode&2)===0){var f=s.alternate;f?(s.updateQueue=f.updateQueue,s.memoizedState=f.memoizedState,s.lanes=f.lanes):(s.updateQueue=null,s.memoizedState=null)}var h=(ot.current&1)!==0,d=o;do{var g;if(g=d.tag===13){var y=d.memoizedState;if(y!==null)g=y.dehydrated!==null;else{var p=d.memoizedProps;g=p.fallback===void 0?!1:p.unstable_avoidThisFallback!==!0?!0:!h}}if(g){var c=d.updateQueue;if(c===null){var m=new Set;m.add(u),d.updateQueue=m}else c.add(u);if((d.mode&2)===0){if(d.flags|=64,s.flags|=16384,s.flags&=-2981,s.tag===1)if(s.alternate===null)s.tag=17;else{var v=Si(-1,1);v.tag=2,Mi(s,v)}s.lanes|=1;break e}l=void 0,s=e;var _=a.pingCache;if(_===null?(_=a.pingCache=new x_,l=new Set,_.set(u,l)):(l=_.get(u),l===void 0&&(l=new Set,_.set(u,l))),!l.has(s)){l.add(s);var x=D_.bind(null,a,u,s);u.then(x,x)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);l=Error((Xr(s.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}wt!==5&&(wt=2),l=Yf(l,s),d=o;do{switch(d.tag){case 3:a=l,d.flags|=4096,e&=-e,d.lanes|=e;var b=ug(d,a,e);dh(d,b);break e;case 1:a=l;var T=d.type,L=d.stateNode;if((d.flags&64)===0&&(typeof T.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(Dn===null||!Dn.has(L)))){d.flags|=4096,e&=-e,d.lanes|=e;var S=cg(d,a,e);dh(d,S);break e}}d=d.return}while(d!==null)}_g(n)}catch(w){e=w,ht===n&&n!==null&&(ht=n=n.return);continue}break}while(1)}function gg(){var t=ol.current;return ol.current=al,t===null?al:t}function Za(t,e){var n=Ce;Ce|=16;var i=gg();Ut===t&&Rt===e||ea(t,e);do try{T_();break}catch(r){mg(t,r)}while(1);if(Uf(),Ce=n,ol.current=i,ht!==null)throw Error(ie(261));return Ut=null,Rt=0,wt}function T_(){for(;ht!==null;)vg(ht)}function C_(){for(;ht!==null&&!l_();)vg(ht)}function vg(t){var e=yg(t.alternate,t,sr);t.memoizedProps=t.pendingProps,e===null?_g(t):ht=e,Zf.current=null}function _g(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)===0){if(n=v_(n,e,sr),n!==null){ht=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(sr&1073741824)!==0||(n.mode&4)===0){for(var i=0,r=n.child;r!==null;)i|=r.lanes|r.childLanes,r=r.sibling;n.childLanes=i}t!==null&&(t.flags&2048)===0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=__(e),n!==null){n.flags&=2047,ht=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){ht=e;return}ht=e=t}while(e!==null);wt===0&&(wt=5)}function Wi(t){var e=la();return or(99,A_.bind(null,t,e)),null}function A_(t,e){do zi();while(uo!==null);if((Ce&48)!==0)throw Error(ie(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null;var i=n.lanes|n.childLanes,r=i,a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;for(var o=t.eventTimes,s=t.expirationTimes;0<a;){var l=31-Ai(a),u=1<<l;r[l]=0,o[l]=-1,s[l]=-1,a&=~u}if(Zn!==null&&(i&24)===0&&Zn.has(t)&&Zn.delete(t),t===Ut&&(ht=Ut=null,Rt=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,i!==null){if(r=Ce,Ce|=32,Zf.current=null,iu=Cs,o=Qd(),pc(o)){if("selectionStart"in o)s={start:o.selectionStart,end:o.selectionEnd};else e:if(s=(s=o.ownerDocument)&&s.defaultView||window,(u=s.getSelection&&s.getSelection())&&u.rangeCount!==0){s=u.anchorNode,a=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{s.nodeType,l.nodeType}catch{s=null;break e}var f=0,h=-1,d=-1,g=0,y=0,p=o,c=null;t:for(;;){for(var m;p!==s||a!==0&&p.nodeType!==3||(h=f+a),p!==l||u!==0&&p.nodeType!==3||(d=f+u),p.nodeType===3&&(f+=p.nodeValue.length),(m=p.firstChild)!==null;)c=p,p=m;for(;;){if(p===o)break t;if(c===s&&++g===a&&(h=f),c===l&&++y===u&&(d=f),(m=p.nextSibling)!==null)break;p=c,c=p.parentNode}p=m}s=h===-1||d===-1?null:{start:h,end:d}}else s=null;s=s||{start:0,end:0}}else s=null;ru={focusedElem:o,selectionRange:s},Cs=!1,fo=null,ks=!1,he=i;do try{L_()}catch(w){if(he===null)throw Error(ie(330));Ei(he,w),he=he.nextEffect}while(he!==null);fo=null,he=i;do try{for(o=t;he!==null;){var v=he.flags;if(v&16&&go(he.stateNode,""),v&128){var _=he.alternate;if(_!==null){var x=_.ref;x!==null&&(typeof x=="function"?x(null):x.current=null)}}switch(v&1038){case 2:zh(he),he.flags&=-3;break;case 6:zh(he),he.flags&=-3,fu(he.alternate,he);break;case 1024:he.flags&=-1025;break;case 1028:he.flags&=-1025,fu(he.alternate,he);break;case 4:fu(he.alternate,he);break;case 8:s=he,fg(o,s);var b=s.alternate;Nh(s),b!==null&&Nh(b)}he=he.nextEffect}}catch(w){if(he===null)throw Error(ie(330));Ei(he,w),he=he.nextEffect}while(he!==null);if(x=ru,_=Qd(),v=x.focusedElem,o=x.selectionRange,_!==v&&v&&v.ownerDocument&&L0(v.ownerDocument.documentElement,v)){for(o!==null&&pc(v)&&(_=o.start,x=o.end,x===void 0&&(x=_),"selectionStart"in v?(v.selectionStart=_,v.selectionEnd=Math.min(x,v.value.length)):(x=(_=v.ownerDocument||document)&&_.defaultView||window,x.getSelection&&(x=x.getSelection(),s=v.textContent.length,b=Math.min(o.start,s),o=o.end===void 0?b:Math.min(o.end,s),!x.extend&&b>o&&(s=o,o=b,b=s),s=Kd(v,b),a=Kd(v,o),s&&a&&(x.rangeCount!==1||x.anchorNode!==s.node||x.anchorOffset!==s.offset||x.focusNode!==a.node||x.focusOffset!==a.offset)&&(_=_.createRange(),_.setStart(s.node,s.offset),x.removeAllRanges(),b>o?(x.addRange(_),x.extend(a.node,a.offset)):(_.setEnd(a.node,a.offset),x.addRange(_)))))),_=[],x=v;x=x.parentNode;)x.nodeType===1&&_.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<_.length;v++)x=_[v],x.element.scrollLeft=x.left,x.element.scrollTop=x.top}Cs=!!iu,ru=iu=null,t.current=n,he=i;do try{for(v=t;he!==null;){var T=he.flags;if(T&36&&M_(v,he.alternate,he),T&128){_=void 0;var L=he.ref;if(L!==null){var S=he.stateNode;switch(he.tag){case 5:_=S;break;default:_=S}typeof L=="function"?L(_):L.current=_}}he=he.nextEffect}}catch(w){if(he===null)throw Error(ie(330));Ei(he,w),he=he.nextEffect}while(he!==null);he=null,c_(),Ce=r}else t.current=n;if(Pi)Pi=!1,uo=t,Ya=e;else for(he=i;he!==null;)e=he.nextEffect,he.nextEffect=null,he.flags&8&&(T=he,T.sibling=null,T.stateNode=null),he=e;if(i=t.pendingLanes,i===0&&(Dn=null),i===1?t===zc?co++:(co=0,zc=t):co=0,n=n.stateNode,nr&&typeof nr.onCommitFiberRoot=="function")try{nr.onCommitFiberRoot(zf,n,void 0,(n.current.flags&64)===64)}catch{}if(dn(t,Pt()),sl)throw sl=!1,t=kc,kc=null,t;return(Ce&8)!==0||zn(),null}function L_(){for(;he!==null;){var t=he.alternate;ks||fo===null||((he.flags&8)!==0?zd(he,fo)&&(ks=!0):he.tag===13&&w_(t,he)&&zd(he,fo)&&(ks=!0));var e=he.flags;(e&256)!==0&&S_(t,he),(e&512)===0||Pi||(Pi=!0,bo(97,function(){return zi(),null})),he=he.nextEffect}}function zi(){if(Ya!==90){var t=97<Ya?97:Ya;return Ya=90,or(t,R_)}return!1}function P_(t,e){Nc.push(e,t),Pi||(Pi=!0,bo(97,function(){return zi(),null}))}function xg(t,e){Oc.push(e,t),Pi||(Pi=!0,bo(97,function(){return zi(),null}))}function R_(){if(uo===null)return!1;var t=uo;if(uo=null,(Ce&48)!==0)throw Error(ie(331));var e=Ce;Ce|=32;var n=Oc;Oc=[];for(var i=0;i<n.length;i+=2){var r=n[i],a=n[i+1],o=r.destroy;if(r.destroy=void 0,typeof o=="function")try{o()}catch(l){if(a===null)throw Error(ie(330));Ei(a,l)}}for(n=Nc,Nc=[],i=0;i<n.length;i+=2){r=n[i],a=n[i+1];try{var s=r.create;r.destroy=s()}catch(l){if(a===null)throw Error(ie(330));Ei(a,l)}}for(s=t.current.firstEffect;s!==null;)t=s.nextEffect,s.nextEffect=null,s.flags&8&&(s.sibling=null,s.stateNode=null),s=t;return Ce=e,zn(),!0}function Uh(t,e,n){e=Yf(n,e),e=ug(t,e,1),Mi(t,e),e=Qt(),t=Ll(t,1),t!==null&&(Sl(t,1,e),dn(t,e))}function Ei(t,e){if(t.tag===3)Uh(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){Uh(n,t,e);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Dn===null||!Dn.has(i))){t=Yf(e,t);var r=cg(n,t,1);if(Mi(n,r),r=Qt(),n=Ll(n,1),n!==null)Sl(n,1,r),dn(n,r);else if(typeof i.componentDidCatch=="function"&&(Dn===null||!Dn.has(i)))try{i.componentDidCatch(e,t)}catch{}break}}n=n.return}}function D_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Rt&n)===n&&(wt===4||wt===3&&(Rt&62914560)===Rt&&500>Pt()-Qf?ea(t,0):Kf|=n),dn(t,e)}function I_(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)===0?e=1:(e&4)===0?e=la()===99?1:2:(jn===0&&(jn=_a),e=Ir(62914560&~jn),e===0&&(e=4194304))),n=Qt(),t=Ll(t,e),t!==null&&(Sl(t,e,n),dn(t,n))}var yg;yg=function(t,e,n){var i=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||Ht.current)Mn=!0;else if((n&i)!==0)Mn=(t.flags&16384)!==0;else{switch(Mn=!1,e.tag){case 3:Eh(e),lu();break;case 5:gh(e);break;case 1:Wt(e.type)&&Ps(e);break;case 4:Mc(e,e.stateNode.containerInfo);break;case 10:i=e.memoizedProps.value;var r=e.type._context;st(Ys,r._currentValue),r._currentValue=i;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!==0?Th(t,e,n):(st(ot,ot.current&1),e=qn(t,e,n),e!==null?e.sibling:null);st(ot,ot.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&64)!==0){if(i)return Rh(t,e,n);e.flags|=64}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ot,ot.current),i)break;return null;case 23:case 24:return e.lanes=0,uu(t,e,n)}return qn(t,e,n)}else Mn=!1;switch(e.lanes=0,e.tag){case 2:if(i=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,r=sa(e,Dt.current),Kr(e,n),r=jf(null,e,i,t,r,n),e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(i)){var a=!0;Ps(e)}else a=!1;e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Gf(e);var o=i.getDerivedStateFromProps;typeof o=="function"&&Qs(e,i,o,t),r.updater=Cl,e.stateNode=r,r._reactInternals=e,Sc(e,i,t,n),e=Tc(null,e,i,!0,a,n)}else e.tag=0,Vt(null,e,r,n),e=e.child;return e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,a=r._init,r=a(r._payload),e.type=r,a=e.tag=N_(r),t=_n(r,t),a){case 0:e=Ec(null,e,r,t,n);break e;case 1:e=bh(null,e,r,t,n);break e;case 11:e=Mh(null,e,r,t,n);break e;case 14:e=wh(null,e,r,_n(r.type,t),i,n);break e}throw Error(ie(306,r,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_n(i,r),Ec(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_n(i,r),bh(t,e,i,r,n);case 3:if(Eh(e),i=e.updateQueue,t===null||i===null)throw Error(ie(282));if(i=e.pendingProps,r=e.memoizedState,r=r!==null?r.element:null,j0(t,e),Eo(e,i,null,n),i=e.memoizedState.element,i===r)lu(),e=qn(t,e,n);else{if(r=e.stateNode,(a=r.hydrate)&&(hi=Zr(e.stateNode.containerInfo.firstChild),$n=e,a=Nn=!0),a){if(t=r.mutableSourceEagerHydrationData,t!=null)for(r=0;r<t.length;r+=2)a=t[r],a._workInProgressVersionPrimary=t[r+1],Qr.push(a);for(n=Y0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Vt(t,e,i,n),lu();e=e.child}return e;case 5:return gh(e),t===null&&wc(e),i=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,o=r.children,vc(i,r)?o=null:a!==null&&vc(i,a)&&(e.flags|=16),ag(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&wc(e),null;case 13:return Th(t,e,n);case 4:return Mc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Js(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_n(i,r),Mh(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{i=e.type._context,r=e.pendingProps,o=e.memoizedProps,a=r.value;var s=e.type._context;if(st(Ys,s._currentValue),s._currentValue=a,o!==null)if(s=o.value,a=ln(s,a)?0:(typeof i._calculateChangedBits=="function"?i._calculateChangedBits(s,a):1073741823)|0,a===0){if(o.children===r.children&&!Ht.current){e=qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===i&&(u.observedBits&a)!==0){s.tag===1&&(u=Si(-1,n&-n),u.tag=2,Mi(s,u)),s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),W0(s.return,n),l.lanes|=n;break}u=u.next}}else o=s.tag===10&&s.type===e.type?null:s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,a=e.pendingProps,i=a.children,Kr(e,n),r=fn(r,a.unstable_observedBits),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return r=e.type,a=_n(r,e.pendingProps),a=_n(r.type,a),wh(t,e,r,a,i,n);case 15:return rg(t,e,e.type,e.pendingProps,i,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_n(i,r),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Wt(i)?(t=!0,Ps(e)):t=!1,Kr(e,n),$0(e,i,r),Sc(e,i,r,n),Tc(null,e,i,!0,t,n);case 19:return Rh(t,e,n);case 23:return uu(t,e,n);case 24:return uu(t,e,n)}throw Error(ie(156,e.tag))};function k_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function un(t,e,n,i){return new k_(t,e,n,i)}function ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function N_(t){if(typeof t=="function")return ed(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_l)return 11;if(t===xl)return 14}return 2}function Ri(t,e){var n=t.alternate;return n===null?(n=un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ns(t,e,n,i,r,a){var o=2;if(i=t,typeof t=="function")ed(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ci:return ta(n.children,r,a,e);case Zm:o=8,r|=16;break;case gf:o=8,r|=1;break;case eo:return t=un(12,n,e,r|8),t.elementType=eo,t.type=eo,t.lanes=a,t;case to:return t=un(13,n,e,r),t.type=to,t.elementType=to,t.lanes=a,t;case Bs:return t=un(19,n,e,r),t.elementType=Bs,t.lanes=a,t;case Mf:return td(n,r,a,e);case Ju:return t=un(24,n,e,r),t.elementType=Ju,t.lanes=a,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case vf:o=10;break e;case _f:o=9;break e;case _l:o=11;break e;case xl:o=14;break e;case xf:o=16,i=null;break e;case yf:o=22;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=un(o,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function ta(t,e,n,i){return t=un(7,t,i,e),t.lanes=n,t}function td(t,e,n,i){return t=un(23,t,i,e),t.elementType=Mf,t.lanes=n,t}function du(t,e,n){return t=un(6,t,null,e),t.lanes=n,t}function hu(t,e,n){return e=un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function O_(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.mutableSourceEagerHydrationData=null}function z_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qi,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ll(t,e,n,i){var r=e.current,a=Qt(),o=wi(r);e:if(n){n=n._reactInternals;t:{if(mr(n)!==n||n.tag!==1)throw Error(ie(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break t;case 1:if(Wt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break t}}s=s.return}while(s!==null);throw Error(ie(171))}if(n.tag===1){var l=n.type;if(Wt(l)){n=z0(n,l,s);break e}}n=s}else n=Li;return e.context===null?e.context=n:e.pendingContext=n,e=Si(a,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),Mi(r,e),bi(r,o,a),o}function pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nd(t,e){Bh(t,e),(t=t.alternate)&&Bh(t,e)}function F_(){return null}function id(t,e,n){var i=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new O_(t,e,n!=null&&n.hydrate===!0),e=un(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,Gf(e),t[va]=n.current,D0(t.nodeType===8?t.parentNode:t),i)for(t=0;t<i.length;t++){e=i[t];var r=e._getVersion;r=r(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,r]:n.mutableSourceEagerHydrationData.push(e,r)}this._internalRoot=n}id.prototype.render=function(t){ll(t,this._internalRoot,null,null)};id.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;ll(null,t,null,function(){e[va]=null})};function Fo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function U_(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new id(t,0,e?{hydrate:!0}:void 0)}function Pl(t,e,n,i,r){var a=n._reactRootContainer;if(a){var o=a._internalRoot;if(typeof r=="function"){var s=r;r=function(){var u=pu(o);s.call(u)}}ll(e,o,t,r)}else{if(a=n._reactRootContainer=U_(n,i),o=a._internalRoot,typeof r=="function"){var l=r;r=function(){var u=pu(o);l.call(u)}}pg(function(){ll(e,o,t,r)})}return pu(o)}f0=function(t){if(t.tag===13){var e=Qt();bi(t,4,e),nd(t,4)}};Cf=function(t){if(t.tag===13){var e=Qt();bi(t,67108864,e),nd(t,67108864)}};d0=function(t){if(t.tag===13){var e=Qt(),n=wi(t);bi(t,n,e),nd(t,n)}};h0=function(t,e){return e()};uc=function(t,e,n){switch(e){case"input":if(tc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=El(i);if(!r)throw Error(ie(90));Qm(i),tc(i,r)}}}break;case"textarea":e0(t,n);break;case"select":e=n.value,e!=null&&$r(t,!!n.multiple,e,!1)}};bf=hg;s0=function(t,e,n,i,r){var a=Ce;Ce|=4;try{return or(98,t.bind(null,e,n,i,r))}finally{Ce=a,Ce===0&&(ya(),zn())}};Ef=function(){(Ce&49)===0&&(E_(),zi())};l0=function(t,e){var n=Ce;Ce|=2;try{return t(e)}finally{Ce=n,Ce===0&&(ya(),zn())}};function Sg(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fo(e))throw Error(ie(200));return z_(t,e,null,n)}var B_={Events:[No,Ur,El,a0,o0,zi,{current:!1}]},Oa={findFiberByHostInstance:Zi,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},G_={bundleType:Oa.bundleType,version:Oa.version,rendererPackageName:Oa.rendererPackageName,rendererConfig:Oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=c0(t),t===null?null:t.stateNode},findFiberByHostInstance:Oa.findFiberByHostInstance||F_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ns.isDisabled&&ns.supportsFiber)try{zf=ns.inject(G_),nr=ns}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B_;hn.createPortal=Sg;hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):Error(ie(268,Object.keys(t)));return t=c0(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t,e){var n=Ce;if((n&48)!==0)return t(e);Ce|=1;try{if(t)return or(99,t.bind(null,e))}finally{Ce=n,zn()}};hn.hydrate=function(t,e,n){if(!Fo(e))throw Error(ie(200));return Pl(null,t,e,!0,n)};hn.render=function(t,e,n){if(!Fo(e))throw Error(ie(200));return Pl(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!Fo(t))throw Error(ie(40));return t._reactRootContainer?(pg(function(){Pl(null,null,t,!1,function(){t._reactRootContainer=null,t[va]=null})}),!0):!1};hn.unstable_batchedUpdates=hg;hn.unstable_createPortal=function(t,e){return Sg(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Fo(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Pl(t,e,n,!1,i)};hn.version="17.0.2";function Mg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mg)}catch(t){console.error(t)}}Mg(),Xm.exports=hn;var V_=Xm.exports;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rd="150",H_=0,Gh=1,W_=2,wg=1,j_=2,Ka=3,Di=0,Jt=1,pi=2,Ti=0,na=1,Vh=2,Hh=3,Wh=4,X_=5,kr=100,$_=101,q_=102,jh=103,Xh=104,Y_=200,Z_=201,K_=202,Q_=203,bg=204,Eg=205,J_=206,ex=207,tx=208,nx=209,ix=210,rx=0,ax=1,ox=2,Uc=3,sx=4,lx=5,ux=6,cx=7,Tg=0,fx=1,dx=2,Kn=0,hx=1,px=2,mx=3,gx=4,vx=5,Cg=300,ca=301,fa=302,Bc=303,Gc=304,Rl=306,Vc=1e3,yn=1001,Hc=1002,zt=1003,$h=1004,mu=1005,sn=1006,_x=1007,Lo=1008,lr=1009,xx=1010,yx=1011,Ag=1012,Sx=1013,Ji=1014,er=1015,Po=1016,Mx=1017,wx=1018,ia=1020,bx=1021,Sn=1023,Ex=1024,Tx=1025,ir=1026,da=1027,Cx=1028,Ax=1029,Lx=1030,Px=1031,Rx=1033,gu=33776,vu=33777,_u=33778,xu=33779,qh=35840,Yh=35841,Zh=35842,Kh=35843,Dx=36196,Qh=37492,Jh=37496,ep=37808,tp=37809,np=37810,ip=37811,rp=37812,ap=37813,op=37814,sp=37815,lp=37816,up=37817,cp=37818,fp=37819,dp=37820,hp=37821,yu=36492,Ix=36283,pp=36284,mp=36285,gp=36286,ur=3e3,Je=3001,kx=3200,Nx=3201,Ox=0,zx=1,An="srgb",Ro="srgb-linear",Lg="display-p3",Su=7680,Fx=519,vp=35044,_p="300 es",Wc=1035;class Sa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mu=Math.PI/180,xp=180/Math.PI;function Uo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[t&255]+Ct[t>>8&255]+Ct[t>>16&255]+Ct[t>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[n&63|128]+Ct[n>>8&255]+"-"+Ct[n>>16&255]+Ct[n>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function Ux(t,e){return(t%e+e)%e}function wu(t,e,n){return(1-n)*t+n*e}function yp(t){return(t&t-1)===0&&t!==0}function Bx(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function is(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,a,o,s,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=s,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],g=i[5],y=i[8],p=r[0],c=r[3],m=r[6],v=r[1],_=r[4],x=r[7],b=r[2],T=r[5],L=r[8];return a[0]=o*p+s*v+l*b,a[3]=o*c+s*_+l*T,a[6]=o*m+s*x+l*L,a[1]=u*p+f*v+h*b,a[4]=u*c+f*_+h*T,a[7]=u*m+f*x+h*L,a[2]=d*p+g*v+y*b,a[5]=d*c+g*_+y*T,a[8]=d*m+g*x+y*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*s*u-i*a*f+i*s*l+r*a*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],f=e[8],h=f*o-s*u,d=s*l-f*a,g=u*a-o*l,y=n*h+i*d+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/y;return e[0]=h*p,e[1]=(r*u-f*i)*p,e[2]=(s*i-r*o)*p,e[3]=d*p,e[4]=(f*n-r*l)*p,e[5]=(r*a-s*n)*p,e[6]=g*p,e[7]=(i*l-u*n)*p,e[8]=(o*n-i*a)*p,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,o,s){const l=Math.cos(a),u=Math.sin(a);return this.set(i*l,i*u,-i*(l*o+u*s)+o+e,-r*u,r*l,-r*(-u*o+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(bu.makeScale(e,n)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(bu.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bu=new Ft;function Pg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ul(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}class Bo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,o,s){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=a[o+0],g=a[o+1],y=a[o+2],p=a[o+3];if(s===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(s===1){e[n+0]=d,e[n+1]=g,e[n+2]=y,e[n+3]=p;return}if(h!==p||l!==d||u!==g||f!==y){let c=1-s;const m=l*d+u*g+f*y+h*p,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const b=Math.sqrt(_),T=Math.atan2(b,m*v);c=Math.sin(c*T)/b,s=Math.sin(s*T)/b}const x=s*v;if(l=l*c+d*x,u=u*c+g*x,f=f*c+y*x,h=h*c+p*x,c===1-s){const b=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=b,u*=b,f*=b,h*=b}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,a,o){const s=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=a[o],d=a[o+1],g=a[o+2],y=a[o+3];return e[n]=s*y+f*h+l*g-u*d,e[n+1]=l*y+f*d+u*h-s*g,e[n+2]=u*y+f*g+s*d-l*h,e[n+3]=f*y-s*h-l*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,u=s(i/2),f=s(r/2),h=s(a/2),d=l(i/2),g=l(r/2),y=l(a/2);switch(o){case"XYZ":this._x=d*f*h+u*g*y,this._y=u*g*h-d*f*y,this._z=u*f*y+d*g*h,this._w=u*f*h-d*g*y;break;case"YXZ":this._x=d*f*h+u*g*y,this._y=u*g*h-d*f*y,this._z=u*f*y-d*g*h,this._w=u*f*h+d*g*y;break;case"ZXY":this._x=d*f*h-u*g*y,this._y=u*g*h+d*f*y,this._z=u*f*y+d*g*h,this._w=u*f*h-d*g*y;break;case"ZYX":this._x=d*f*h-u*g*y,this._y=u*g*h+d*f*y,this._z=u*f*y-d*g*h,this._w=u*f*h+d*g*y;break;case"YZX":this._x=d*f*h+u*g*y,this._y=u*g*h+d*f*y,this._z=u*f*y-d*g*h,this._w=u*f*h-d*g*y;break;case"XZY":this._x=d*f*h-u*g*y,this._y=u*g*h-d*f*y,this._z=u*f*y+d*g*h,this._w=u*f*h+d*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],o=n[1],s=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+s+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(a-u)*g,this._z=(o-r)*g}else if(i>s&&i>h){const g=2*Math.sqrt(1+i-s-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(a+u)/g}else if(s>h){const g=2*Math.sqrt(1+s-i-h);this._w=(a-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-s);this._w=(o-r)/g,this._x=(a+u)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,o=e._w,s=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*s+r*u-a*l,this._y=r*f+o*l+a*s-i*u,this._z=a*f+o*u+i*l-r*s,this._w=o*f-i*s-r*l-a*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,s),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=a*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(a),i*Math.cos(a),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,u=l*n+o*r-s*i,f=l*i+s*n-a*r,h=l*r+a*i-o*n,d=-a*n-o*i-s*r;return this.x=u*l+d*-a+f*-s-h*-o,this.y=f*l+d*-o+h*-a-u*-s,this.z=h*l+d*-s+u*-o-f*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,o=n.x,s=n.y,l=n.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new U,Sp=new Bo;function ra(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Tu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Gx=new Ft().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Vx=new Ft().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),mi=new U;function Hx(t){return t.convertSRGBToLinear(),mi.set(t.r,t.g,t.b).applyMatrix3(Vx),t.setRGB(mi.x,mi.y,mi.z)}function Wx(t){return mi.set(t.r,t.g,t.b).applyMatrix3(Gx),t.setRGB(mi.x,mi.y,mi.z).convertLinearToSRGB()}const jx={[Ro]:t=>t,[An]:t=>t.convertSRGBToLinear(),[Lg]:Hx},Xx={[Ro]:t=>t,[An]:t=>t.convertLinearToSRGB(),[Lg]:Wx},Nt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Ro},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=jx[e],r=Xx[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let xr;class Rg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xr===void 0&&(xr=ul("canvas")),xr.width=e.width,xr.height=e.height;const i=xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const n=ul("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=ra(a[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ra(n[i]/255)*255):n[i]=ra(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Dg{constructor(e=null){this.isSource=!0,this.uuid=Uo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Cu(r[o].image)):a.push(Cu(r[o]))}else a=Cu(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function Cu(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?Rg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $x=0;class en extends Sa{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=yn,r=yn,a=sn,o=Lo,s=Sn,l=lr,u=en.DEFAULT_ANISOTROPY,f=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Uo(),this.name="",this.source=new Dg(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vc:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vc:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Cg;en.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],g=l[5],y=l[9],p=l[2],c=l[6],m=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-p)<.01&&Math.abs(y-c)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+p)<.1&&Math.abs(y+c)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,x=(g+1)/2,b=(m+1)/2,T=(f+d)/4,L=(h+p)/4,S=(y+c)/4;return _>x&&_>b?_<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(_),r=T/i,a=L/i):x>b?x<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(x),i=T/r,a=S/r):b<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(b),i=L/a,r=S/a),this.set(i,r,a,n),this}let v=Math.sqrt((c-y)*(c-y)+(h-p)*(h-p)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(c-y)/v,this.y=(h-p)/v,this.z=(d-f)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cr extends Sa{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new en(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:sn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Dg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ig extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qx extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,a=-1/0,o=-1/0,s=-1/0;for(let l=0,u=e.length;l<u;l+=3){const f=e[l],h=e[l+1],d=e[l+2];f<n&&(n=f),h<i&&(i=h),d<r&&(r=d),f>a&&(a=f),h>o&&(o=h),d>s&&(s=d)}return this.min.set(n,i,r),this.max.set(a,o,s),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,a=-1/0,o=-1/0,s=-1/0;for(let l=0,u=e.count;l<u;l++){const f=e.getX(l),h=e.getY(l),d=e.getZ(l);f<n&&(n=f),h<i&&(i=h),d<r&&(r=d),f>a&&(a=f),h>o&&(o=h),d>s&&(s=d)}return this.min.set(n,i,r),this.max.set(a,o,s),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const a=i.attributes.position;for(let o=0,s=a.count;o<s;o++)Gi.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Gi)}else i.boundingBox===null&&i.computeBoundingBox(),Au.copy(i.boundingBox),Au.applyMatrix4(e.matrixWorld),this.union(Au);const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),rs.subVectors(this.max,za),yr.subVectors(e.a,za),Sr.subVectors(e.b,za),Mr.subVectors(e.c,za),ri.subVectors(Sr,yr),ai.subVectors(Mr,Sr),Vi.subVectors(yr,Mr);let n=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Vi.z,Vi.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Vi.z,0,-Vi.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Vi.y,Vi.x,0];return!Lu(n,yr,Sr,Mr,rs)||(n=[1,0,0,0,1,0,0,0,1],!Lu(n,yr,Sr,Mr,rs))?!1:(as.crossVectors(ri,ai),n=[as.x,as.y,as.z],Lu(n,yr,Sr,Mr,rs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new U,new U,new U,new U,new U,new U,new U,new U],Gi=new U,Au=new Go,yr=new U,Sr=new U,Mr=new U,ri=new U,ai=new U,Vi=new U,za=new U,rs=new U,as=new U,Hi=new U;function Lu(t,e,n,i,r){for(let a=0,o=t.length-3;a<=o;a+=3){Hi.fromArray(t,a);const s=r.x*Math.abs(Hi.x)+r.y*Math.abs(Hi.y)+r.z*Math.abs(Hi.z),l=e.dot(Hi),u=n.dot(Hi),f=i.dot(Hi);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>s)return!1}return!0}const Yx=new Go,Fa=new U,Pu=new U;class ad{constructor(e=new U,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Yx.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const n=Fa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Fa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(Pu)),this.expandByPoint(Fa.copy(e.center).sub(Pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new U,Ru=new U,os=new U,oi=new U,Du=new U,ss=new U,Iu=new U;class Zx{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Bn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,n),Bn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ru.copy(e).add(n).multiplyScalar(.5),os.copy(n).sub(e).normalize(),oi.copy(this.origin).sub(Ru);const a=e.distanceTo(n)*.5,o=-this.direction.dot(os),s=oi.dot(this.direction),l=-oi.dot(os),u=oi.lengthSq(),f=Math.abs(1-o*o);let h,d,g,y;if(f>0)if(h=o*l-s,d=o*s-l,y=a*f,h>=0)if(d>=-y)if(d<=y){const p=1/f;h*=p,d*=p,g=h*(h+o*d+2*s)+d*(o*h+d+2*l)+u}else d=a,h=Math.max(0,-(o*d+s)),g=-h*h+d*(d+2*l)+u;else d=-a,h=Math.max(0,-(o*d+s)),g=-h*h+d*(d+2*l)+u;else d<=-y?(h=Math.max(0,-(-o*a+s)),d=h>0?-a:Math.min(Math.max(-a,-l),a),g=-h*h+d*(d+2*l)+u):d<=y?(h=0,d=Math.min(Math.max(-a,-l),a),g=d*(d+2*l)+u):(h=Math.max(0,-(o*a+s)),d=h>0?a:Math.min(Math.max(-a,-l),a),g=-h*h+d*(d+2*l)+u);else d=o>0?-a:a,h=Math.max(0,-(o*d+s)),g=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ru).addScaledVector(os,d),g}intersectSphere(e,n){Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),r=Bn.dot(Bn)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,o,s,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(a=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(a=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),h>=0?(s=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,n,i,r,a){Du.subVectors(n,e),ss.subVectors(i,e),Iu.crossVectors(Du,ss);let o=this.direction.dot(Iu),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=s*this.direction.dot(ss.crossVectors(oi,ss));if(l<0)return null;const u=s*this.direction.dot(Du.cross(oi));if(u<0||l+u>o)return null;const f=-s*oi.dot(Iu);return f<0?null:this.at(f/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,a,o,s,l,u,f,h,d,g,y,p,c){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=a,m[5]=o,m[9]=s,m[13]=l,m[2]=u,m[6]=f,m[10]=h,m[14]=d,m[3]=g,m[7]=y,m[11]=p,m[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/wr.setFromMatrixColumn(e,0).length(),a=1/wr.setFromMatrixColumn(e,1).length(),o=1/wr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const d=o*f,g=o*h,y=s*f,p=s*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=g+y*u,n[5]=d-p*u,n[9]=-s*l,n[2]=p-d*u,n[6]=y+g*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,g=l*h,y=u*f,p=u*h;n[0]=d+p*s,n[4]=y*s-g,n[8]=o*u,n[1]=o*h,n[5]=o*f,n[9]=-s,n[2]=g*s-y,n[6]=p+d*s,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,g=l*h,y=u*f,p=u*h;n[0]=d-p*s,n[4]=-o*h,n[8]=y+g*s,n[1]=g+y*s,n[5]=o*f,n[9]=p-d*s,n[2]=-o*u,n[6]=s,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,g=o*h,y=s*f,p=s*h;n[0]=l*f,n[4]=y*u-g,n[8]=d*u+p,n[1]=l*h,n[5]=p*u+d,n[9]=g*u-y,n[2]=-u,n[6]=s*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*u,y=s*l,p=s*u;n[0]=l*f,n[4]=p-d*h,n[8]=y*h+g,n[1]=h,n[5]=o*f,n[9]=-s*f,n[2]=-u*f,n[6]=g*h+y,n[10]=d-p*h}else if(e.order==="XZY"){const d=o*l,g=o*u,y=s*l,p=s*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+p,n[5]=o*f,n[9]=g*h-y,n[2]=y*h-g,n[6]=s*f,n[10]=p*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kx,e,Qx)}lookAt(e,n,i){const r=this.elements;return Yt.subVectors(e,n),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),si.crossVectors(i,Yt),si.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),si.crossVectors(i,Yt)),si.normalize(),ls.crossVectors(Yt,si),r[0]=si.x,r[4]=ls.x,r[8]=Yt.x,r[1]=si.y,r[5]=ls.y,r[9]=Yt.y,r[2]=si.z,r[6]=ls.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],g=i[13],y=i[2],p=i[6],c=i[10],m=i[14],v=i[3],_=i[7],x=i[11],b=i[15],T=r[0],L=r[4],S=r[8],w=r[12],I=r[1],q=r[5],Y=r[9],O=r[13],N=r[2],B=r[6],Z=r[10],X=r[14],V=r[3],J=r[7],Q=r[11],P=r[15];return a[0]=o*T+s*I+l*N+u*V,a[4]=o*L+s*q+l*B+u*J,a[8]=o*S+s*Y+l*Z+u*Q,a[12]=o*w+s*O+l*X+u*P,a[1]=f*T+h*I+d*N+g*V,a[5]=f*L+h*q+d*B+g*J,a[9]=f*S+h*Y+d*Z+g*Q,a[13]=f*w+h*O+d*X+g*P,a[2]=y*T+p*I+c*N+m*V,a[6]=y*L+p*q+c*B+m*J,a[10]=y*S+p*Y+c*Z+m*Q,a[14]=y*w+p*O+c*X+m*P,a[3]=v*T+_*I+x*N+b*V,a[7]=v*L+_*q+x*B+b*J,a[11]=v*S+_*Y+x*Z+b*Q,a[15]=v*w+_*O+x*X+b*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],g=e[14],y=e[3],p=e[7],c=e[11],m=e[15];return y*(+a*l*h-r*u*h-a*s*d+i*u*d+r*s*g-i*l*g)+p*(+n*l*g-n*u*d+a*o*d-r*o*g+r*u*f-a*l*f)+c*(+n*u*h-n*s*g-a*o*h+i*o*g+a*s*f-i*u*f)+m*(-r*s*f-n*l*h+n*s*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],g=e[11],y=e[12],p=e[13],c=e[14],m=e[15],v=h*c*u-p*d*u+p*l*g-s*c*g-h*l*m+s*d*m,_=y*d*u-f*c*u-y*l*g+o*c*g+f*l*m-o*d*m,x=f*p*u-y*h*u+y*s*g-o*p*g-f*s*m+o*h*m,b=y*h*l-f*p*l-y*s*d+o*p*d+f*s*c-o*h*c,T=n*v+i*_+r*x+a*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=v*L,e[1]=(p*d*a-h*c*a-p*r*g+i*c*g+h*r*m-i*d*m)*L,e[2]=(s*c*a-p*l*a+p*r*u-i*c*u-s*r*m+i*l*m)*L,e[3]=(h*l*a-s*d*a-h*r*u+i*d*u+s*r*g-i*l*g)*L,e[4]=_*L,e[5]=(f*c*a-y*d*a+y*r*g-n*c*g-f*r*m+n*d*m)*L,e[6]=(y*l*a-o*c*a-y*r*u+n*c*u+o*r*m-n*l*m)*L,e[7]=(o*d*a-f*l*a+f*r*u-n*d*u-o*r*g+n*l*g)*L,e[8]=x*L,e[9]=(y*h*a-f*p*a-y*i*g+n*p*g+f*i*m-n*h*m)*L,e[10]=(o*p*a-y*s*a+y*i*u-n*p*u-o*i*m+n*s*m)*L,e[11]=(f*s*a-o*h*a-f*i*u+n*h*u+o*i*g-n*s*g)*L,e[12]=b*L,e[13]=(f*p*r-y*h*r+y*i*d-n*p*d-f*i*c+n*h*c)*L,e[14]=(y*s*r-o*p*r-y*i*l+n*p*l+o*i*c-n*s*c)*L,e[15]=(o*h*r-f*s*r+f*i*l-n*h*l-o*i*d+n*s*d)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,o=e.x,s=e.y,l=e.z,u=a*o,f=a*s;return this.set(u*o+i,u*s-r*l,u*l+r*s,0,u*s+r*l,f*s+i,f*l-r*o,0,u*l-r*s,f*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,o=n._y,s=n._z,l=n._w,u=a+a,f=o+o,h=s+s,d=a*u,g=a*f,y=a*h,p=o*f,c=o*h,m=s*h,v=l*u,_=l*f,x=l*h,b=i.x,T=i.y,L=i.z;return r[0]=(1-(p+m))*b,r[1]=(g+x)*b,r[2]=(y-_)*b,r[3]=0,r[4]=(g-x)*T,r[5]=(1-(d+m))*T,r[6]=(c+v)*T,r[7]=0,r[8]=(y+_)*L,r[9]=(c-v)*L,r[10]=(1-(d+p))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=wr.set(r[0],r[1],r[2]).length();const o=wr.set(r[4],r[5],r[6]).length(),s=wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const u=1/a,f=1/o,h=1/s;return mn.elements[0]*=u,mn.elements[1]*=u,mn.elements[2]*=u,mn.elements[4]*=f,mn.elements[5]*=f,mn.elements[6]*=f,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,n.setFromRotationMatrix(mn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,n,i,r,a,o){const s=this.elements,l=2*a/(n-e),u=2*a/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r),d=-(o+a)/(o-a),g=-2*o*a/(o-a);return s[0]=l,s[4]=0,s[8]=f,s[12]=0,s[1]=0,s[5]=u,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=d,s[14]=g,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,n,i,r,a,o){const s=this.elements,l=1/(n-e),u=1/(i-r),f=1/(o-a),h=(n+e)*l,d=(i+r)*u,g=(o+a)*f;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*u,s[9]=0,s[13]=-d,s[2]=0,s[6]=0,s[10]=-2*f,s[14]=-g,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const wr=new U,mn=new Et,Kx=new U(0,0,0),Qx=new U(1,1,1),si=new U,ls=new U,Yt=new U,Mp=new Et,wp=new Bo;class Dl{constructor(e=0,n=0,i=0,r=Dl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(s,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,g));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wp.setFromEuler(this),this.setFromQuaternion(wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dl.DEFAULT_ORDER="XYZ";class kg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jx=0;const bp=new U,br=new Bo,Gn=new Et,us=new U,Ua=new U,ey=new U,ty=new Bo,Ep=new U(1,0,0),Tp=new U(0,1,0),Cp=new U(0,0,1),ny={type:"added"},Ap={type:"removed"};class tn extends Sa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new U,n=new Dl,i=new Bo,r=new U(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ft}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new kg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return br.setFromAxisAngle(e,n),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,n){return br.setFromAxisAngle(e,n),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Ep,e)}rotateY(e){return this.rotateOnAxis(Tp,e)}rotateZ(e){return this.rotateOnAxis(Cp,e)}translateOnAxis(e,n){return bp.copy(e).applyQuaternion(this.quaternion),this.position.add(bp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ep,e)}translateY(e){return this.translateOnAxis(Tp,e)}translateZ(e){return this.translateOnAxis(Cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?us.copy(e):us.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ua,us,this.up):Gn.lookAt(us,Ua,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),br.setFromRotationMatrix(Gn),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ny)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ap)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Ap)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,e,ey),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,ty,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(n){const s=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),g=o(e.animations),y=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(s){const l=[];for(const u in s){const f=s[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new U(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new U,Vn=new U,ku=new U,Hn=new U,Er=new U,Tr=new U,Lp=new U,Nu=new U,Ou=new U,zu=new U;class Xn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),gn.subVectors(e,n),r.cross(gn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){gn.subVectors(r,n),Vn.subVectors(i,n),ku.subVectors(e,n);const o=gn.dot(gn),s=gn.dot(Vn),l=gn.dot(ku),u=Vn.dot(Vn),f=Vn.dot(ku),h=o*u-s*s;if(h===0)return a.set(-2,-1,-1);const d=1/h,g=(u*l-s*f)*d,y=(o*f-s*l)*d;return a.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Hn),Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(e,n,i,r,a,o,s,l){return this.getBarycoord(e,n,i,r,Hn),l.set(0,0),l.addScaledVector(a,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(s,Hn.z),l}static isFrontFacing(e,n,i,r){return gn.subVectors(i,n),Vn.subVectors(e,n),gn.cross(Vn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),gn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,a){return Xn.getUV(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let o,s;Er.subVectors(r,i),Tr.subVectors(a,i),Nu.subVectors(e,i);const l=Er.dot(Nu),u=Tr.dot(Nu);if(l<=0&&u<=0)return n.copy(i);Ou.subVectors(e,r);const f=Er.dot(Ou),h=Tr.dot(Ou);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Er,o);zu.subVectors(e,a);const g=Er.dot(zu),y=Tr.dot(zu);if(y>=0&&g<=y)return n.copy(a);const p=g*u-l*y;if(p<=0&&u>=0&&y<=0)return s=u/(u-y),n.copy(i).addScaledVector(Tr,s);const c=f*y-g*h;if(c<=0&&h-f>=0&&g-y>=0)return Lp.subVectors(a,r),s=(h-f)/(h-f+(g-y)),n.copy(r).addScaledVector(Lp,s);const m=1/(c+p+d);return o=p*m,s=d*m,n.copy(i).addScaledVector(Er,o).addScaledVector(Tr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let iy=0;class Il extends Sa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=na,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=bg,this.blendDst=Eg,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Uc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Su,this.stencilZFail=Su,this.stencilZPass=Su,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==na&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(n){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},cs={h:0,s:0,l:0};function Fu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Nt.workingColorSpace){if(e=Ux(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,o=2*i-a;this.r=Fu(o,a,e+1/3),this.g=Fu(o,a,e),this.b=Fu(o,a,e-1/3)}return Nt.toWorkingColorSpace(this,r),this}setStyle(e,n=An){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,Nt.toWorkingColorSpace(this,n),i(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,Nt.toWorkingColorSpace(this,n),i(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(a[1])/360,u=parseFloat(a[2])/100,f=parseFloat(a[3])/100;return i(a[4]),this.setHSL(l,u,f,n)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,Nt.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,Nt.toWorkingColorSpace(this,n),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=An){const i=Ng[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}copyLinearToSRGB(e){return this.r=Tu(e.r),this.g=Tu(e.g),this.b=Tu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Nt.fromWorkingColorSpace(At.copy(this),e),Kt(At.r*255,0,255)<<16^Kt(At.g*255,0,255)<<8^Kt(At.b*255,0,255)<<0}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Nt.workingColorSpace){Nt.fromWorkingColorSpace(At.copy(this),n);const i=At.r,r=At.g,a=At.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,u;const f=(s+o)/2;if(s===o)l=0,u=0;else{const h=o-s;switch(u=f<=.5?h/(o+s):h/(2-o-s),o){case i:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-i)/h+2;break;case a:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(At.copy(this),n),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=An){Nt.fromWorkingColorSpace(At.copy(this),e);const n=At.r,i=At.g,r=At.b;return e!==An?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${n*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,n,i){return this.getHSL(vn),vn.h+=e,vn.s+=n,vn.l+=i,this.setHSL(vn.h,vn.s,vn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(vn),e.getHSL(cs);const i=wu(vn.h,cs.h,n),r=wu(vn.s,cs.s,n),a=wu(vn.l,cs.l,n);return this.setHSL(i,r,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new nt;nt.NAMES=Ng;class Og extends Il{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new U,fs=new He;class On{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fs.fromBufferAttribute(this,n),fs.applyMatrix3(e),this.setXY(n,fs.x,fs.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyMatrix3(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyMatrix4(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyNormalMatrix(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.transformDirection(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=is(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=is(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=is(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=is(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),a=qt(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class zg extends On{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Fg extends On{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class rr extends On{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ry=0;const on=new Et,Uu=new tn,Cr=new U,Zt=new Go,Ba=new Go,yt=new U;class vr extends Sa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pg(e)?Fg:zg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ft().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,n,i){return on.makeTranslation(e,n,i),this.applyMatrix4(on),this}scale(e,n,i){return on.makeScale(e,n,i),this.applyMatrix4(on),this}lookAt(e){return Uu.lookAt(e),Uu.updateMatrix(),this.applyMatrix4(Uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new rr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];Zt.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ad);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const s=n[a];Ba.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(Zt.min,Ba.min),Zt.expandByPoint(yt),yt.addVectors(Zt.max,Ba.max),Zt.expandByPoint(yt)):(Zt.expandByPoint(Ba.min),Zt.expandByPoint(Ba.max))}Zt.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)yt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(yt));if(n)for(let a=0,o=n.length;a<o;a++){const s=n[a],l=this.morphTargetsRelative;for(let u=0,f=s.count;u<f;u++)yt.fromBufferAttribute(s,u),l&&(Cr.fromBufferAttribute(e,u),yt.add(Cr)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,a=n.normal.array,o=n.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let I=0;I<s;I++)u[I]=new U,f[I]=new U;const h=new U,d=new U,g=new U,y=new He,p=new He,c=new He,m=new U,v=new U;function _(I,q,Y){h.fromArray(r,I*3),d.fromArray(r,q*3),g.fromArray(r,Y*3),y.fromArray(o,I*2),p.fromArray(o,q*2),c.fromArray(o,Y*2),d.sub(h),g.sub(h),p.sub(y),c.sub(y);const O=1/(p.x*c.y-c.x*p.y);!isFinite(O)||(m.copy(d).multiplyScalar(c.y).addScaledVector(g,-p.y).multiplyScalar(O),v.copy(g).multiplyScalar(p.x).addScaledVector(d,-c.x).multiplyScalar(O),u[I].add(m),u[q].add(m),u[Y].add(m),f[I].add(v),f[q].add(v),f[Y].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let I=0,q=x.length;I<q;++I){const Y=x[I],O=Y.start,N=Y.count;for(let B=O,Z=O+N;B<Z;B+=3)_(i[B+0],i[B+1],i[B+2])}const b=new U,T=new U,L=new U,S=new U;function w(I){L.fromArray(a,I*3),S.copy(L);const q=u[I];b.copy(q),b.sub(L.multiplyScalar(L.dot(q))).normalize(),T.crossVectors(S,q);const O=T.dot(f[I])<0?-1:1;l[I*4]=b.x,l[I*4+1]=b.y,l[I*4+2]=b.z,l[I*4+3]=O}for(let I=0,q=x.length;I<q;++I){const Y=x[I],O=Y.start,N=Y.count;for(let B=O,Z=O+N;B<Z;B+=3)w(i[B+0]),w(i[B+1]),w(i[B+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new U,a=new U,o=new U,s=new U,l=new U,u=new U,f=new U,h=new U;if(e)for(let d=0,g=e.count;d<g;d+=3){const y=e.getX(d+0),p=e.getX(d+1),c=e.getX(d+2);r.fromBufferAttribute(n,y),a.fromBufferAttribute(n,p),o.fromBufferAttribute(n,c),f.subVectors(o,a),h.subVectors(r,a),f.cross(h),s.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,c),s.add(f),l.add(f),u.add(f),i.setXYZ(y,s.x,s.y,s.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(c,u.x,u.y,u.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),a.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,a),h.subVectors(r,a),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)yt.fromBufferAttribute(e,n),yt.normalize(),e.setXYZ(n,yt.x,yt.y,yt.z)}toNonIndexed(){function e(s,l){const u=s.array,f=s.itemSize,h=s.normalized,d=new u.constructor(l.length*f);let g=0,y=0;for(let p=0,c=l.length;p<c;p++){s.isInterleavedBufferAttribute?g=l[p]*s.data.stride+s.offset:g=l[p]*f;for(let m=0;m<f;m++)d[y++]=u[g++]}return new On(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vr,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],u=e(l,i);n.setAttribute(s,u)}const a=this.morphAttributes;for(const s in a){const l=[],u=a[s];for(let f=0,h=u.length;f<h;f++){const d=u[f],g=e(d,i);l.push(g)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const u=o[s];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const g=u[h];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const a=e.morphAttributes;for(const u in a){const f=[],h=a[u];for(let d=0,g=h.length;d<g;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pp=new Et,Cn=new Zx,ds=new ad,Rp=new U,Ga=new U,Va=new U,Ha=new U,Bu=new U,hs=new U,ps=new He,ms=new He,gs=new He,Gu=new U,vs=new U;class Yn extends tn{constructor(e=new vr,n=new Og){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){hs.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const f=s[l],h=a[l];f!==0&&(Bu.fromBufferAttribute(h,e),o?hs.addScaledVector(Bu,f):hs.addScaledVector(Bu.sub(n),f))}n.add(hs)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ds.copy(i.boundingSphere),ds.applyMatrix4(a),Cn.copy(e.ray).recast(e.near),ds.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(ds,Rp)===null||Cn.origin.distanceToSquared(Rp)>(e.far-e.near)**2))||(Pp.copy(a).invert(),Cn.copy(e.ray).applyMatrix4(Pp),i.boundingBox!==null&&Cn.intersectsBox(i.boundingBox)===!1))return;let o;const s=i.index,l=i.attributes.position,u=i.attributes.uv,f=i.attributes.uv2,h=i.groups,d=i.drawRange;if(s!==null)if(Array.isArray(r))for(let g=0,y=h.length;g<y;g++){const p=h[g],c=r[p.materialIndex],m=Math.max(p.start,d.start),v=Math.min(s.count,Math.min(p.start+p.count,d.start+d.count));for(let _=m,x=v;_<x;_+=3){const b=s.getX(_),T=s.getX(_+1),L=s.getX(_+2);o=_s(this,c,e,Cn,u,f,b,T,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,n.push(o))}}else{const g=Math.max(0,d.start),y=Math.min(s.count,d.start+d.count);for(let p=g,c=y;p<c;p+=3){const m=s.getX(p),v=s.getX(p+1),_=s.getX(p+2);o=_s(this,r,e,Cn,u,f,m,v,_),o&&(o.faceIndex=Math.floor(p/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,y=h.length;g<y;g++){const p=h[g],c=r[p.materialIndex],m=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=m,x=v;_<x;_+=3){const b=_,T=_+1,L=_+2;o=_s(this,c,e,Cn,u,f,b,T,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,n.push(o))}}else{const g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=g,c=y;p<c;p+=3){const m=p,v=p+1,_=p+2;o=_s(this,r,e,Cn,u,f,m,v,_),o&&(o.faceIndex=Math.floor(p/3),n.push(o))}}}}function ay(t,e,n,i,r,a,o,s){let l;if(e.side===Jt?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===Di,s),l===null)return null;vs.copy(s),vs.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(vs);return u<n.near||u>n.far?null:{distance:u,point:vs.clone(),object:t}}function _s(t,e,n,i,r,a,o,s,l){t.getVertexPosition(o,Ga),t.getVertexPosition(s,Va),t.getVertexPosition(l,Ha);const u=ay(t,e,n,i,Ga,Va,Ha,Gu);if(u){r&&(ps.fromBufferAttribute(r,o),ms.fromBufferAttribute(r,s),gs.fromBufferAttribute(r,l),u.uv=Xn.getUV(Gu,Ga,Va,Ha,ps,ms,gs,new He)),a&&(ps.fromBufferAttribute(a,o),ms.fromBufferAttribute(a,s),gs.fromBufferAttribute(a,l),u.uv2=Xn.getUV(Gu,Ga,Va,Ha,ps,ms,gs,new He));const f={a:o,b:s,c:l,normal:new U,materialIndex:0};Xn.getNormal(Ga,Va,Ha,f.normal),u.face=f}return u}class Vo extends vr{constructor(e=1,n=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,g=0;y("z","y","x",-1,-1,i,n,e,o,a,0),y("z","y","x",1,-1,i,n,-e,o,a,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,a,4),y("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new rr(u,3)),this.setAttribute("normal",new rr(f,3)),this.setAttribute("uv",new rr(h,2));function y(p,c,m,v,_,x,b,T,L,S,w){const I=x/L,q=b/S,Y=x/2,O=b/2,N=T/2,B=L+1,Z=S+1;let X=0,V=0;const J=new U;for(let Q=0;Q<Z;Q++){const P=Q*q-O;for(let A=0;A<B;A++){const k=A*I-Y;J[p]=k*v,J[c]=P*_,J[m]=N,u.push(J.x,J.y,J.z),J[p]=0,J[c]=0,J[m]=T>0?1:-1,f.push(J.x,J.y,J.z),h.push(A/L),h.push(1-Q/S),X+=1}}for(let Q=0;Q<S;Q++)for(let P=0;P<L;P++){const A=d+P+B*Q,k=d+P+B*(Q+1),G=d+(P+1)+B*(Q+1),R=d+(P+1)+B*Q;l.push(A,k,R),l.push(k,G,R),V+=6}s.addGroup(g,V,w),g+=V,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ha(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ot(t){const e={};for(let n=0;n<t.length;n++){const i=ha(t[n]);for(const r in i)e[r]=i[r]}return e}function oy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ug(t){return t.getRenderTarget()===null&&t.outputEncoding===Je?An:Ro}const sy={clone:ha,merge:Ot};var ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Il{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ly,this.fragmentShader=uy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=oy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Bg extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class xn extends Bg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xp*2*Math.atan(Math.tan(Mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,a,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Mu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;a+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ar=-90,Lr=1;class cy extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new xn(Ar,Lr,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const a=new xn(Ar,Lr,e,n);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const o=new xn(Ar,Lr,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new xn(Ar,Lr,e,n);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new xn(Ar,Lr,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new xn(Ar,Lr,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,a,o,s,l,u]=this.children,f=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Kn,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,a),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,s),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(f),e.toneMapping=h,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Gg extends en{constructor(e,n,i,r,a,o,s,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:ca,super(e,n,i,r,a,o,s,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fy extends cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Gg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vo(5,5,5),a=new Ii({name:"CubemapFromEquirect",uniforms:ha(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Ti});a.uniforms.tEquirect.value=n;const o=new Yn(r,a),s=n.minFilter;return n.minFilter===Lo&&(n.minFilter=sn),new cy(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(a)}}const Vu=new U,dy=new U,hy=new Ft;class ji{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Vu.subVectors(i,n).cross(dy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Vu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||hy.getNormalMatrix(e),r=this.coplanarPoint(Vu).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new ad,xs=new U;class Vg{constructor(e=new ji,n=new ji,i=new ji,r=new ji,a=new ji,o=new ji){this.planes=[e,n,i,r,a,o]}set(e,n,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],s=i[3],l=i[4],u=i[5],f=i[6],h=i[7],d=i[8],g=i[9],y=i[10],p=i[11],c=i[12],m=i[13],v=i[14],_=i[15];return n[0].setComponents(s-r,h-l,p-d,_-c).normalize(),n[1].setComponents(s+r,h+l,p+d,_+c).normalize(),n[2].setComponents(s+a,h+u,p+g,_+m).normalize(),n[3].setComponents(s-a,h-u,p-g,_-m).normalize(),n[4].setComponents(s-o,h-f,p-y,_-v).normalize(),n[5].setComponents(s+o,h+f,p+y,_+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(xs.x=r.normal.x>0?e.max.x:e.min.x,xs.y=r.normal.y>0?e.max.y:e.min.y,xs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hg(){let t=null,e=!1,n=null,i=null;function r(a,o){n(a,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function py(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,d=u.usage,g=t.createBuffer();t.bindBuffer(f,g),t.bufferData(f,h,d),u.onUploadCallback();let y;if(h instanceof Float32Array)y=5126;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(h instanceof Int16Array)y=5122;else if(h instanceof Uint32Array)y=5125;else if(h instanceof Int32Array)y=5124;else if(h instanceof Int8Array)y=5120;else if(h instanceof Uint8Array)y=5121;else if(h instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function a(u,f,h){const d=f.array,g=f.updateRange;t.bindBuffer(h,u),g.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):t.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,r(u,f)):h.version<u.version&&(a(h.buffer,u,f),h.version=u.version)}return{get:o,remove:s,update:l}}class kl extends vr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,o=n/2,s=Math.floor(i),l=Math.floor(r),u=s+1,f=l+1,h=e/s,d=n/l,g=[],y=[],p=[],c=[];for(let m=0;m<f;m++){const v=m*d-o;for(let _=0;_<u;_++){const x=_*h-a;y.push(x,-v,0),p.push(0,0,1),c.push(_/s),c.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<s;v++){const _=v+u*m,x=v+u*(m+1),b=v+1+u*(m+1),T=v+1+u*m;g.push(_,x,T),g.push(x,b,T)}this.setIndex(g),this.setAttribute("position",new rr(y,3)),this.setAttribute("normal",new rr(p,3)),this.setAttribute("uv",new rr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sy="vec3 transformed = vec3( position );",My=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wy=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,by=`#ifdef USE_IRIDESCENCE
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
#endif`,Ey=`#ifdef USE_BUMPMAP
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
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ky=`#define PI 3.141592653589793
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
}`,Ny=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Oy=`vec3 transformedNormal = objectNormal;
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
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,By=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,qy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qy=`#ifdef USE_GRADIENTMAP
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
}`,Jy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,e2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i2=`uniform bool receiveShadow;
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
#endif`,r2=`#if defined( USE_ENVMAP )
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
#endif`,a2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u2=`PhysicalMaterial material;
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
#endif`,c2=`struct PhysicalMaterial {
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
}`,f2=`
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
#endif`,d2=`#if defined( RE_IndirectDiffuse )
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
#endif`,h2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,p2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,v2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E2=`#ifdef USE_MORPHNORMALS
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
#endif`,T2=`#ifdef USE_MORPHTARGETS
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
#endif`,C2=`#ifdef USE_MORPHTARGETS
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
#endif`,A2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,L2=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,P2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I2=`#ifdef USE_NORMALMAP
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
#endif`,k2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,N2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,O2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,z2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y2=`float getShadowMask() {
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
}`,Z2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K2=`#ifdef USE_SKINNING
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
#endif`,Q2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J2=`#ifdef USE_SKINNING
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
#endif`,e3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r3=`#ifdef USE_TRANSMISSION
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
#endif`,a3=`#ifdef USE_TRANSMISSION
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
#endif`,o3=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,s3=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,l3=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,u3=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,c3=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,f3=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,d3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p3=`uniform sampler2D t2D;
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
}`,m3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,v3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,x3=`#include <common>
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
}`,y3=`#if DEPTH_PACKING == 3200
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
}`,S3=`#define DISTANCE
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
}`,M3=`#define DISTANCE
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
}`,w3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,E3=`uniform float scale;
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
}`,T3=`uniform vec3 diffuse;
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
}`,C3=`#include <common>
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
}`,A3=`uniform vec3 diffuse;
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
}`,L3=`#define LAMBERT
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
}`,P3=`#define LAMBERT
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
}`,R3=`#define MATCAP
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
}`,D3=`#define MATCAP
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
}`,I3=`#define NORMAL
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
}`,k3=`#define NORMAL
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
}`,N3=`#define PHONG
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
}`,O3=`#define PHONG
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
}`,z3=`#define STANDARD
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
}`,F3=`#define STANDARD
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
}`,U3=`#define TOON
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
}`,B3=`#define TOON
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
}`,G3=`uniform float size;
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
}`,V3=`uniform vec3 diffuse;
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
}`,H3=`#include <common>
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
}`,W3=`uniform vec3 color;
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
}`,j3=`uniform float rotation;
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
}`,X3=`uniform vec3 diffuse;
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
}`,Re={alphamap_fragment:my,alphamap_pars_fragment:gy,alphatest_fragment:vy,alphatest_pars_fragment:_y,aomap_fragment:xy,aomap_pars_fragment:yy,begin_vertex:Sy,beginnormal_vertex:My,bsdfs:wy,iridescence_fragment:by,bumpmap_pars_fragment:Ey,clipping_planes_fragment:Ty,clipping_planes_pars_fragment:Cy,clipping_planes_pars_vertex:Ay,clipping_planes_vertex:Ly,color_fragment:Py,color_pars_fragment:Ry,color_pars_vertex:Dy,color_vertex:Iy,common:ky,cube_uv_reflection_fragment:Ny,defaultnormal_vertex:Oy,displacementmap_pars_vertex:zy,displacementmap_vertex:Fy,emissivemap_fragment:Uy,emissivemap_pars_fragment:By,encodings_fragment:Gy,encodings_pars_fragment:Vy,envmap_fragment:Hy,envmap_common_pars_fragment:Wy,envmap_pars_fragment:jy,envmap_pars_vertex:Xy,envmap_physical_pars_fragment:r2,envmap_vertex:$y,fog_vertex:qy,fog_pars_vertex:Yy,fog_fragment:Zy,fog_pars_fragment:Ky,gradientmap_pars_fragment:Qy,lightmap_fragment:Jy,lightmap_pars_fragment:e2,lights_lambert_fragment:t2,lights_lambert_pars_fragment:n2,lights_pars_begin:i2,lights_toon_fragment:a2,lights_toon_pars_fragment:o2,lights_phong_fragment:s2,lights_phong_pars_fragment:l2,lights_physical_fragment:u2,lights_physical_pars_fragment:c2,lights_fragment_begin:f2,lights_fragment_maps:d2,lights_fragment_end:h2,logdepthbuf_fragment:p2,logdepthbuf_pars_fragment:m2,logdepthbuf_pars_vertex:g2,logdepthbuf_vertex:v2,map_fragment:_2,map_pars_fragment:x2,map_particle_fragment:y2,map_particle_pars_fragment:S2,metalnessmap_fragment:M2,metalnessmap_pars_fragment:w2,morphcolor_vertex:b2,morphnormal_vertex:E2,morphtarget_pars_vertex:T2,morphtarget_vertex:C2,normal_fragment_begin:A2,normal_fragment_maps:L2,normal_pars_fragment:P2,normal_pars_vertex:R2,normal_vertex:D2,normalmap_pars_fragment:I2,clearcoat_normal_fragment_begin:k2,clearcoat_normal_fragment_maps:N2,clearcoat_pars_fragment:O2,iridescence_pars_fragment:z2,output_fragment:F2,packing:U2,premultiplied_alpha_fragment:B2,project_vertex:G2,dithering_fragment:V2,dithering_pars_fragment:H2,roughnessmap_fragment:W2,roughnessmap_pars_fragment:j2,shadowmap_pars_fragment:X2,shadowmap_pars_vertex:$2,shadowmap_vertex:q2,shadowmask_pars_fragment:Y2,skinbase_vertex:Z2,skinning_pars_vertex:K2,skinning_vertex:Q2,skinnormal_vertex:J2,specularmap_fragment:e3,specularmap_pars_fragment:t3,tonemapping_fragment:n3,tonemapping_pars_fragment:i3,transmission_fragment:r3,transmission_pars_fragment:a3,uv_pars_fragment:o3,uv_pars_vertex:s3,uv_vertex:l3,uv2_pars_fragment:u3,uv2_pars_vertex:c3,uv2_vertex:f3,worldpos_vertex:d3,background_vert:h3,background_frag:p3,backgroundCube_vert:m3,backgroundCube_frag:g3,cube_vert:v3,cube_frag:_3,depth_vert:x3,depth_frag:y3,distanceRGBA_vert:S3,distanceRGBA_frag:M3,equirect_vert:w3,equirect_frag:b3,linedashed_vert:E3,linedashed_frag:T3,meshbasic_vert:C3,meshbasic_frag:A3,meshlambert_vert:L3,meshlambert_frag:P3,meshmatcap_vert:R3,meshmatcap_frag:D3,meshnormal_vert:I3,meshnormal_frag:k3,meshphong_vert:N3,meshphong_frag:O3,meshphysical_vert:z3,meshphysical_frag:F3,meshtoon_vert:U3,meshtoon_frag:B3,points_vert:G3,points_frag:V3,shadow_vert:H3,shadow_frag:W3,sprite_vert:j3,sprite_frag:X3},le={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ft},uv2Transform:{value:new Ft},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}}},Ln={basic:{uniforms:Ot([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Ot([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new nt(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Ot([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Ot([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Ot([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new nt(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Ot([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Ot([le.points,le.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Ot([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Ot([le.common,le.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Ot([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Ot([le.sprite,le.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Ot([le.common,le.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Ot([le.lights,le.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Ln.physical={uniforms:Ot([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new He(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const ys={r:0,b:0,g:0};function $3(t,e,n,i,r,a,o){const s=new nt(0);let l=a===!0?0:1,u,f,h=null,d=0,g=null;function y(c,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:e).get(_));const x=t.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(_=null),_===null?p(s,l):_&&_.isColor&&(p(_,1),v=!0),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Rl)?(f===void 0&&(f=new Yn(new Vo(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:ha(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,L,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,f.material.toneMapped=_.encoding!==Je,(h!==_||d!==_.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,h=_,d=_.version,g=t.toneMapping),f.layers.enableAll(),c.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Yn(new kl(2,2),new Ii({name:"BackgroundMaterial",uniforms:ha(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=_.encoding!==Je,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,g=t.toneMapping),u.layers.enableAll(),c.unshift(u,u.geometry,u.material,0,0,null))}function p(c,m){c.getRGB(ys,Ug(t)),i.buffers.color.setClear(ys.r,ys.g,ys.b,m,o)}return{getClearColor:function(){return s},setClearColor:function(c,m=1){s.set(c),l=m,p(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(c){l=c,p(s,l)},render:y}}function q3(t,e,n,i){const r=t.getParameter(34921),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=c(null);let u=l,f=!1;function h(N,B,Z,X,V){let J=!1;if(o){const Q=p(X,Z,B);u!==Q&&(u=Q,g(u.object)),J=m(N,X,Z,V),J&&v(N,X,Z,V)}else{const Q=B.wireframe===!0;(u.geometry!==X.id||u.program!==Z.id||u.wireframe!==Q)&&(u.geometry=X.id,u.program=Z.id,u.wireframe=Q,J=!0)}V!==null&&n.update(V,34963),(J||f)&&(f=!1,S(N,B,Z,X),V!==null&&t.bindBuffer(34963,n.get(V).buffer))}function d(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function g(N){return i.isWebGL2?t.bindVertexArray(N):a.bindVertexArrayOES(N)}function y(N){return i.isWebGL2?t.deleteVertexArray(N):a.deleteVertexArrayOES(N)}function p(N,B,Z){const X=Z.wireframe===!0;let V=s[N.id];V===void 0&&(V={},s[N.id]=V);let J=V[B.id];J===void 0&&(J={},V[B.id]=J);let Q=J[X];return Q===void 0&&(Q=c(d()),J[X]=Q),Q}function c(N){const B=[],Z=[],X=[];for(let V=0;V<r;V++)B[V]=0,Z[V]=0,X[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:X,object:N,attributes:{},index:null}}function m(N,B,Z,X){const V=u.attributes,J=B.attributes;let Q=0;const P=Z.getAttributes();for(const A in P)if(P[A].location>=0){const G=V[A];let R=J[A];if(R===void 0&&(A==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),A==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),G===void 0||G.attribute!==R||R&&G.data!==R.data)return!0;Q++}return u.attributesNum!==Q||u.index!==X}function v(N,B,Z,X){const V={},J=B.attributes;let Q=0;const P=Z.getAttributes();for(const A in P)if(P[A].location>=0){let G=J[A];G===void 0&&(A==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),A==="instanceColor"&&N.instanceColor&&(G=N.instanceColor));const R={};R.attribute=G,G&&G.data&&(R.data=G.data),V[A]=R,Q++}u.attributes=V,u.attributesNum=Q,u.index=X}function _(){const N=u.newAttributes;for(let B=0,Z=N.length;B<Z;B++)N[B]=0}function x(N){b(N,0)}function b(N,B){const Z=u.newAttributes,X=u.enabledAttributes,V=u.attributeDivisors;Z[N]=1,X[N]===0&&(t.enableVertexAttribArray(N),X[N]=1),V[N]!==B&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,B),V[N]=B)}function T(){const N=u.newAttributes,B=u.enabledAttributes;for(let Z=0,X=B.length;Z<X;Z++)B[Z]!==N[Z]&&(t.disableVertexAttribArray(Z),B[Z]=0)}function L(N,B,Z,X,V,J){i.isWebGL2===!0&&(Z===5124||Z===5125)?t.vertexAttribIPointer(N,B,Z,V,J):t.vertexAttribPointer(N,B,Z,X,V,J)}function S(N,B,Z,X){if(i.isWebGL2===!1&&(N.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const V=X.attributes,J=Z.getAttributes(),Q=B.defaultAttributeValues;for(const P in J){const A=J[P];if(A.location>=0){let k=V[P];if(k===void 0&&(P==="instanceMatrix"&&N.instanceMatrix&&(k=N.instanceMatrix),P==="instanceColor"&&N.instanceColor&&(k=N.instanceColor)),k!==void 0){const G=k.normalized,R=k.itemSize,ne=n.get(k);if(ne===void 0)continue;const ee=ne.buffer,se=ne.type,oe=ne.bytesPerElement;if(k.isInterleavedBufferAttribute){const ge=k.data,Ee=ge.stride,Ae=k.offset;if(ge.isInstancedInterleavedBuffer){for(let Pe=0;Pe<A.locationSize;Pe++)b(A.location+Pe,ge.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Pe=0;Pe<A.locationSize;Pe++)x(A.location+Pe);t.bindBuffer(34962,ee);for(let Pe=0;Pe<A.locationSize;Pe++)L(A.location+Pe,R/A.locationSize,se,G,Ee*oe,(Ae+R/A.locationSize*Pe)*oe)}else{if(k.isInstancedBufferAttribute){for(let ge=0;ge<A.locationSize;ge++)b(A.location+ge,k.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ge=0;ge<A.locationSize;ge++)x(A.location+ge);t.bindBuffer(34962,ee);for(let ge=0;ge<A.locationSize;ge++)L(A.location+ge,R/A.locationSize,se,G,R*oe,R/A.locationSize*ge*oe)}}else if(Q!==void 0){const G=Q[P];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(A.location,G);break;case 3:t.vertexAttrib3fv(A.location,G);break;case 4:t.vertexAttrib4fv(A.location,G);break;default:t.vertexAttrib1fv(A.location,G)}}}}T()}function w(){Y();for(const N in s){const B=s[N];for(const Z in B){const X=B[Z];for(const V in X)y(X[V].object),delete X[V];delete B[Z]}delete s[N]}}function I(N){if(s[N.id]===void 0)return;const B=s[N.id];for(const Z in B){const X=B[Z];for(const V in X)y(X[V].object),delete X[V];delete B[Z]}delete s[N.id]}function q(N){for(const B in s){const Z=s[B];if(Z[N.id]===void 0)continue;const X=Z[N.id];for(const V in X)y(X[V].object),delete X[V];delete Z[N.id]}}function Y(){O(),f=!0,u!==l&&(u=l,g(u.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:O,dispose:w,releaseStatesOfGeometry:I,releaseStatesOfProgram:q,initAttributes:_,enableAttribute:x,disableUnusedAttributes:T}}function Y3(t,e,n,i){const r=i.isWebGL2;let a;function o(u){a=u}function s(u,f){t.drawArrays(a,u,f),n.update(f,a,1)}function l(u,f,h){if(h===0)return;let d,g;if(r)d=t,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](a,u,f,h),n.update(f,a,h)}this.setMode=o,this.render=s,this.renderInstances=l}function Z3(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(L){if(L==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&t instanceof WebGL2RenderingContext;let s=n.precision!==void 0?n.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(34930),d=t.getParameter(35660),g=t.getParameter(3379),y=t.getParameter(34076),p=t.getParameter(34921),c=t.getParameter(36347),m=t.getParameter(36348),v=t.getParameter(36349),_=d>0,x=o||e.has("OES_texture_float"),b=_&&x,T=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:y,maxAttributes:p,maxVertexUniforms:c,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:T}}function K3(t){const e=this;let n=null,i=0,r=!1,a=!1;const o=new ji,s=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,g){const y=h.clippingPlanes,p=h.clipIntersection,c=h.clipShadows,m=t.get(h);if(!r||y===null||y.length===0||a&&!c)a?f(null):u();else{const v=a?0:i,_=v*4;let x=m.clippingState||null;l.value=x,x=f(y,d,_,g);for(let b=0;b!==_;++b)x[b]=n[b];m.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,g,y){const p=h!==null?h.length:0;let c=null;if(p!==0){if(c=l.value,y!==!0||c===null){const m=g+p*4,v=d.matrixWorldInverse;s.getNormalMatrix(v),(c===null||c.length<m)&&(c=new Float32Array(m));for(let _=0,x=g;_!==p;++_,x+=4)o.copy(h[_]).applyMatrix4(v,s),o.normal.toArray(c,x),c[x+3]=o.constant}l.value=c,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,c}}function Q3(t){let e=new WeakMap;function n(o,s){return s===Bc?o.mapping=ca:s===Gc&&(o.mapping=fa),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Bc||s===Gc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new fy(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Wg extends Bg{constructor(e=-1,n=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,s-=f*this.view.offsetY,l=s-f*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Vr=4,Dp=[.125,.215,.35,.446,.526,.582],$i=20,Hu=new Wg,Ip=new nt;let Wu=null;const Xi=(1+Math.sqrt(5))/2,Rr=1/Xi,kp=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Xi,Rr),new U(0,Xi,-Rr),new U(Rr,0,Xi),new U(-Rr,0,Xi),new U(Xi,Rr,0),new U(-Xi,Rr,0)];class Np{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Wu=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wu),e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ca||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Po,format:Sn,encoding:ur,depthBuffer:!1},r=Op(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Op(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J3(a)),this._blurMaterial=eS(a,e,n)}return r}_compileMaterial(e){const n=new Yn(this._lodPlanes[0],e);this._renderer.compile(n,Hu)}_sceneToCubeUV(e,n,i,r){const s=new xn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Ip),f.toneMapping=Kn,f.autoClear=!1;const g=new Og({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),y=new Yn(new Vo,g);let p=!1;const c=e.background;c?c.isColor&&(g.color.copy(c),e.background=null,p=!0):(g.color.copy(Ip),p=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(s.up.set(0,l[m],0),s.lookAt(u[m],0,0)):v===1?(s.up.set(0,0,l[m]),s.lookAt(0,u[m],0)):(s.up.set(0,l[m],0),s.lookAt(0,0,u[m]));const _=this._cubeSize;Ss(r,v*_,m>2?_:0,_,_),f.setRenderTarget(r),p&&f.render(y,s),f.render(e,s)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=c}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ca||e.mapping===fa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Yn(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Ss(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Hu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kp[(r-1)%kp.length];this._blur(e,r-1,r,a,o)}n.autoClear=i}_blur(e,n,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,o,s){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Yn(this._lodPlanes[r],u),d=u.uniforms,g=this._sizeLods[i]-1,y=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*$i-1),p=a/y,c=isFinite(a)?1+Math.floor(f*p):$i;c>$i&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${$i}`);const m=[];let v=0;for(let L=0;L<$i;++L){const S=L/p,w=Math.exp(-S*S/2);m.push(w),L===0?v+=w:L<c&&(v+=2*w)}for(let L=0;L<m.length;L++)m[L]=m[L]/v;d.envMap.value=e.texture,d.samples.value=c,d.weights.value=m,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:_}=this;d.dTheta.value=y,d.mipInt.value=_-i;const x=this._sizeLods[r],b=3*x*(r>_-Vr?r-_+Vr:0),T=4*(this._cubeSize-x);Ss(n,b,T,3*x,2*x),l.setRenderTarget(n),l.render(h,Hu)}}function J3(t){const e=[],n=[],i=[];let r=t;const a=t-Vr+1+Dp.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);n.push(s);let l=1/s;o>t-Vr?l=Dp[o-t+Vr-1]:o===0&&(l=0),i.push(l);const u=1/(s-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,y=6,p=3,c=2,m=1,v=new Float32Array(p*y*g),_=new Float32Array(c*y*g),x=new Float32Array(m*y*g);for(let T=0;T<g;T++){const L=T%3*2/3-1,S=T>2?0:-1,w=[L,S,0,L+2/3,S,0,L+2/3,S+1,0,L,S,0,L+2/3,S+1,0,L,S+1,0];v.set(w,p*y*T),_.set(d,c*y*T);const I=[T,T,T,T,T,T];x.set(I,m*y*T)}const b=new vr;b.setAttribute("position",new On(v,p)),b.setAttribute("uv",new On(_,c)),b.setAttribute("faceIndex",new On(x,m)),e.push(b),r>Vr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Op(t,e,n){const i=new cr(t,e,n);return i.texture.mapping=Rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function eS(t,e,n){const i=new Float32Array($i),r=new U(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:od(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function zp(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:od(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Fp(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function od(){return`

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
	`}function tS(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,u=l===Bc||l===Gc,f=l===ca||l===fa;if(u||f)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return n===null&&(n=new Np(t)),h=u?n.fromEquirectangular(s,h):n.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Np(t));const d=u?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function r(s){let l=0;const u=6;for(let f=0;f<u;f++)s[f]!==void 0&&l++;return l===u}function a(s){const l=s.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function nS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function iS(t,e,n,i){const r={},a=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);d.removeEventListener("dispose",o),delete r[d.id];const g=a.get(d);g&&(e.remove(g),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function s(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const y in d)e.update(d[y],34962);const g=h.morphAttributes;for(const y in g){const p=g[y];for(let c=0,m=p.length;c<m;c++)e.update(p[c],34962)}}function u(h){const d=[],g=h.index,y=h.attributes.position;let p=0;if(g!==null){const v=g.array;p=g.version;for(let _=0,x=v.length;_<x;_+=3){const b=v[_+0],T=v[_+1],L=v[_+2];d.push(b,T,T,L,L,b)}}else{const v=y.array;p=y.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const b=_+0,T=_+1,L=_+2;d.push(b,T,T,L,L,b)}}const c=new(Pg(d)?Fg:zg)(d,1);c.version=p;const m=a.get(h);m&&e.remove(m),a.set(h,c)}function f(h){const d=a.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&u(h)}else u(h);return a.get(h)}return{get:s,update:l,getWireframeAttribute:f}}function rS(t,e,n,i){const r=i.isWebGL2;let a;function o(d){a=d}let s,l;function u(d){s=d.type,l=d.bytesPerElement}function f(d,g){t.drawElements(a,g,s,d*l),n.update(g,a,1)}function h(d,g,y){if(y===0)return;let p,c;if(r)p=t,c="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[c](a,g,s,d*l,y),n.update(g,a,y)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h}function aS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(n.calls++,o){case 4:n.triangles+=s*(a/3);break;case 1:n.lines+=s*(a/2);break;case 3:n.lines+=s*(a-1);break;case 2:n.lines+=s*a;break;case 0:n.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function oS(t,e){return t[0]-e[0]}function sS(t,e){return Math.abs(e[1])-Math.abs(t[1])}function lS(t,e,n){const i={},r=new Float32Array(8),a=new WeakMap,o=new bt,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function l(u,f,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,p=y!==void 0?y.length:0;let c=a.get(f);if(c===void 0||c.count!==p){let B=function(){O.dispose(),a.delete(f),f.removeEventListener("dispose",B)};var g=B;c!==void 0&&c.texture.dispose();const _=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,T=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],S=f.morphAttributes.color||[];let w=0;_===!0&&(w=1),x===!0&&(w=2),b===!0&&(w=3);let I=f.attributes.position.count*w,q=1;I>e.maxTextureSize&&(q=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const Y=new Float32Array(I*q*4*p),O=new Ig(Y,I,q,p);O.type=er,O.needsUpdate=!0;const N=w*4;for(let Z=0;Z<p;Z++){const X=T[Z],V=L[Z],J=S[Z],Q=I*q*4*Z;for(let P=0;P<X.count;P++){const A=P*N;_===!0&&(o.fromBufferAttribute(X,P),Y[Q+A+0]=o.x,Y[Q+A+1]=o.y,Y[Q+A+2]=o.z,Y[Q+A+3]=0),x===!0&&(o.fromBufferAttribute(V,P),Y[Q+A+4]=o.x,Y[Q+A+5]=o.y,Y[Q+A+6]=o.z,Y[Q+A+7]=0),b===!0&&(o.fromBufferAttribute(J,P),Y[Q+A+8]=o.x,Y[Q+A+9]=o.y,Y[Q+A+10]=o.z,Y[Q+A+11]=J.itemSize===4?o.w:1)}}c={count:p,texture:O,size:new He(I,q)},a.set(f,c),f.addEventListener("dispose",B)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];const v=f.morphTargetsRelative?1:1-m;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",c.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}else{const y=d===void 0?0:d.length;let p=i[f.id];if(p===void 0||p.length!==y){p=[];for(let x=0;x<y;x++)p[x]=[x,0];i[f.id]=p}for(let x=0;x<y;x++){const b=p[x];b[0]=x,b[1]=d[x]}p.sort(sS);for(let x=0;x<8;x++)x<y&&p[x][1]?(s[x][0]=p[x][0],s[x][1]=p[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(oS);const c=f.morphAttributes.position,m=f.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const b=s[x],T=b[0],L=b[1];T!==Number.MAX_SAFE_INTEGER&&L?(c&&f.getAttribute("morphTarget"+x)!==c[T]&&f.setAttribute("morphTarget"+x,c[T]),m&&f.getAttribute("morphNormal"+x)!==m[T]&&f.setAttribute("morphNormal"+x,m[T]),r[x]=L,v+=L):(c&&f.hasAttribute("morphTarget"+x)===!0&&f.deleteAttribute("morphTarget"+x),m&&f.hasAttribute("morphNormal"+x)===!0&&f.deleteAttribute("morphNormal"+x),r[x]=0)}const _=f.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function uS(t,e,n,i){let r=new WeakMap;function a(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);return r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const jg=new en,Xg=new Ig,$g=new qx,qg=new Gg,Up=[],Bp=[],Gp=new Float32Array(16),Vp=new Float32Array(9),Hp=new Float32Array(4);function Ma(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=Up[r];if(a===void 0&&(a=new Float32Array(r),Up[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=n,t[o].toArray(a,s)}return a}function pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function mt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nl(t,e){let n=Bp[e];n===void 0&&(n=new Int32Array(e),Bp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function cS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function fS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pt(n,e))return;t.uniform2fv(this.addr,e),mt(n,e)}}function dS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(pt(n,e))return;t.uniform3fv(this.addr,e),mt(n,e)}}function hS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pt(n,e))return;t.uniform4fv(this.addr,e),mt(n,e)}}function pS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),mt(n,e)}else{if(pt(n,i))return;Hp.set(i),t.uniformMatrix2fv(this.addr,!1,Hp),mt(n,i)}}function mS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),mt(n,e)}else{if(pt(n,i))return;Vp.set(i),t.uniformMatrix3fv(this.addr,!1,Vp),mt(n,i)}}function gS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),mt(n,e)}else{if(pt(n,i))return;Gp.set(i),t.uniformMatrix4fv(this.addr,!1,Gp),mt(n,i)}}function vS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _S(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pt(n,e))return;t.uniform2iv(this.addr,e),mt(n,e)}}function xS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(pt(n,e))return;t.uniform3iv(this.addr,e),mt(n,e)}}function yS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pt(n,e))return;t.uniform4iv(this.addr,e),mt(n,e)}}function SS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function MS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pt(n,e))return;t.uniform2uiv(this.addr,e),mt(n,e)}}function wS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(pt(n,e))return;t.uniform3uiv(this.addr,e),mt(n,e)}}function bS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pt(n,e))return;t.uniform4uiv(this.addr,e),mt(n,e)}}function ES(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||jg,r)}function TS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$g,r)}function CS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||qg,r)}function AS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Xg,r)}function LS(t){switch(t){case 5126:return cS;case 35664:return fS;case 35665:return dS;case 35666:return hS;case 35674:return pS;case 35675:return mS;case 35676:return gS;case 5124:case 35670:return vS;case 35667:case 35671:return _S;case 35668:case 35672:return xS;case 35669:case 35673:return yS;case 5125:return SS;case 36294:return MS;case 36295:return wS;case 36296:return bS;case 35678:case 36198:case 36298:case 36306:case 35682:return ES;case 35679:case 36299:case 36307:return TS;case 35680:case 36300:case 36308:case 36293:return CS;case 36289:case 36303:case 36311:case 36292:return AS}}function PS(t,e){t.uniform1fv(this.addr,e)}function RS(t,e){const n=Ma(e,this.size,2);t.uniform2fv(this.addr,n)}function DS(t,e){const n=Ma(e,this.size,3);t.uniform3fv(this.addr,n)}function IS(t,e){const n=Ma(e,this.size,4);t.uniform4fv(this.addr,n)}function kS(t,e){const n=Ma(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function NS(t,e){const n=Ma(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function OS(t,e){const n=Ma(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zS(t,e){t.uniform1iv(this.addr,e)}function FS(t,e){t.uniform2iv(this.addr,e)}function US(t,e){t.uniform3iv(this.addr,e)}function BS(t,e){t.uniform4iv(this.addr,e)}function GS(t,e){t.uniform1uiv(this.addr,e)}function VS(t,e){t.uniform2uiv(this.addr,e)}function HS(t,e){t.uniform3uiv(this.addr,e)}function WS(t,e){t.uniform4uiv(this.addr,e)}function jS(t,e,n){const i=this.cache,r=e.length,a=Nl(n,r);pt(i,a)||(t.uniform1iv(this.addr,a),mt(i,a));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||jg,a[o])}function XS(t,e,n){const i=this.cache,r=e.length,a=Nl(n,r);pt(i,a)||(t.uniform1iv(this.addr,a),mt(i,a));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||$g,a[o])}function $S(t,e,n){const i=this.cache,r=e.length,a=Nl(n,r);pt(i,a)||(t.uniform1iv(this.addr,a),mt(i,a));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||qg,a[o])}function qS(t,e,n){const i=this.cache,r=e.length,a=Nl(n,r);pt(i,a)||(t.uniform1iv(this.addr,a),mt(i,a));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Xg,a[o])}function YS(t){switch(t){case 5126:return PS;case 35664:return RS;case 35665:return DS;case 35666:return IS;case 35674:return kS;case 35675:return NS;case 35676:return OS;case 5124:case 35670:return zS;case 35667:case 35671:return FS;case 35668:case 35672:return US;case 35669:case 35673:return BS;case 5125:return GS;case 36294:return VS;case 36295:return HS;case 36296:return WS;case 35678:case 36198:case 36298:case 36306:case 35682:return jS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return $S;case 36289:case 36303:case 36311:case 36292:return qS}}class ZS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=LS(n.type)}}class KS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=YS(n.type)}}class QS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,n[s.id],i)}}}const ju=/(\w+)(\])?(\[|\.)?/g;function Wp(t,e){t.seq.push(e),t.map[e.id]=e}function JS(t,e,n){const i=t.name,r=i.length;for(ju.lastIndex=0;;){const a=ju.exec(i),o=ju.lastIndex;let s=a[1];const l=a[2]==="]",u=a[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===r){Wp(n,u===void 0?new ZS(s,t,e):new KS(s,t,e));break}else{let h=n.map[s];h===void 0&&(h=new QS(s),Wp(n,h)),n=h}}}class Os{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),o=e.getUniformLocation(n,a.name);JS(a,o,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,o=n.length;a!==o;++a){const s=n[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function jp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let eM=0;function tM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}function nM(t){switch(t){case ur:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Xp(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+tM(t.getShaderSource(e),o)}else return r}function iM(t,e){const n=nM(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function rM(t,e){let n;switch(e){case hx:n="Linear";break;case px:n="Reinhard";break;case mx:n="OptimizedCineon";break;case gx:n="ACESFilmic";break;case vx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function aM(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qa).join(`
`)}function oM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sM(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),o=a.name;let s=1;a.type===35674&&(s=2),a.type===35675&&(s=3),a.type===35676&&(s=4),n[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return n}function Qa(t){return t!==""}function $p(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lM=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(t){return t.replace(lM,uM)}function uM(t,e){const n=Re[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return jc(n)}const cM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yp(t){return t.replace(cM,fM)}function fM(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Zp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===wg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===j_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ka&&(e="SHADOWMAP_TYPE_VSM"),e}function hM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ca:case fa:e="ENVMAP_TYPE_CUBE";break;case Rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case fa:e="ENVMAP_MODE_REFRACTION";break}return e}function mM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Tg:e="ENVMAP_BLENDING_MULTIPLY";break;case fx:e="ENVMAP_BLENDING_MIX";break;case dx:e="ENVMAP_BLENDING_ADD";break}return e}function gM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vM(t,e,n,i){const r=t.getContext(),a=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=dM(n),u=hM(n),f=pM(n),h=mM(n),d=gM(n),g=n.isWebGL2?"":aM(n),y=oM(a),p=r.createProgram();let c,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(c=[y].filter(Qa).join(`
`),c.length>0&&(c+=`
`),m=[g,y].filter(Qa).join(`
`),m.length>0&&(m+=`
`)):(c=[Zp(n),"#define SHADER_NAME "+n.shaderName,y,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),m=[g,Zp(n),"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Kn?"#define TONE_MAPPING":"",n.toneMapping!==Kn?Re.tonemapping_pars_fragment:"",n.toneMapping!==Kn?rM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,iM("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qa).join(`
`)),o=jc(o),o=$p(o,n),o=qp(o,n),s=jc(s),s=$p(s,n),s=qp(s,n),o=Yp(o),s=Yp(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,c=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,m=["#define varying in",n.glslVersion===_p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+c+o,x=v+m+s,b=jp(r,35633,_),T=jp(r,35632,x);if(r.attachShader(p,b),r.attachShader(p,T),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),t.debug.checkShaderErrors){const w=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(b).trim(),q=r.getShaderInfoLog(T).trim();let Y=!0,O=!0;if(r.getProgramParameter(p,35714)===!1){Y=!1;const N=Xp(r,b,"vertex"),B=Xp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+w+`
`+N+`
`+B)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(I===""||q==="")&&(O=!1);O&&(this.diagnostics={runnable:Y,programLog:w,vertexShader:{log:I,prefix:c},fragmentShader:{log:q,prefix:m}})}r.deleteShader(b),r.deleteShader(T);let L;this.getUniforms=function(){return L===void 0&&(L=new Os(r,p)),L};let S;return this.getAttributes=function(){return S===void 0&&(S=sM(r,p)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=n.shaderName,this.id=eM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=T,this}let _M=0;class xM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yM(e),n.set(e,i)),i}}class yM{constructor(e){this.id=_M++,this.code=e,this.usedTimes=0}}function SM(t,e,n,i,r,a,o){const s=new kg,l=new xM,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S,w,I,q,Y){const O=q.fog,N=Y.geometry,B=S.isMeshStandardMaterial?q.environment:null,Z=(S.isMeshStandardMaterial?n:e).get(S.envMap||B),X=!!Z&&Z.mapping===Rl?Z.image.height:null,V=y[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const J=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Q=J!==void 0?J.length:0;let P=0;N.morphAttributes.position!==void 0&&(P=1),N.morphAttributes.normal!==void 0&&(P=2),N.morphAttributes.color!==void 0&&(P=3);let A,k,G,R;if(V){const Ee=Ln[V];A=Ee.vertexShader,k=Ee.fragmentShader}else A=S.vertexShader,k=S.fragmentShader,l.update(S),G=l.getVertexShaderID(S),R=l.getFragmentShaderID(S);const ne=t.getRenderTarget(),ee=S.alphaTest>0,se=S.clearcoat>0,oe=S.iridescence>0;return{isWebGL2:f,shaderID:V,shaderName:S.type,vertexShader:A,fragmentShader:k,defines:S.defines,customVertexShaderID:G,customFragmentShaderID:R,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:d,outputEncoding:ne===null?t.outputEncoding:ne.isXRRenderTarget===!0?ne.texture.encoding:ur,map:!!S.map,matcap:!!S.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:X,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===zx,tangentSpaceNormalMap:S.normalMapType===Ox,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===Je,clearcoat:se,clearcoatMap:se&&!!S.clearcoatMap,clearcoatRoughnessMap:se&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:se&&!!S.clearcoatNormalMap,iridescence:oe,iridescenceMap:oe&&!!S.iridescenceMap,iridescenceThicknessMap:oe&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===na,alphaMap:!!S.alphaMap,alphaTest:ee,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!N.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||S.transmission>0||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||S.sheen>0||!!S.sheenColorMap||!!S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!O,useFog:S.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:P,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:Kn,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pi,flipSided:S.side===Jt,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function c(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)w.push(I),w.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(m(w,S),v(w,S),w.push(t.outputEncoding)),w.push(S.customProgramCacheKey),w.join()}function m(S,w){S.push(w.precision),S.push(w.outputEncoding),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.combine),S.push(w.vertexUvs),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function v(S,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),S.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.useLegacyLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),S.push(s.mask)}function _(S){const w=y[S.type];let I;if(w){const q=Ln[w];I=sy.clone(q.uniforms)}else I=S.uniforms;return I}function x(S,w){let I;for(let q=0,Y=u.length;q<Y;q++){const O=u[q];if(O.cacheKey===w){I=O,++I.usedTimes;break}}return I===void 0&&(I=new vM(t,w,S,a),u.push(I)),I}function b(S){if(--S.usedTimes===0){const w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:_,acquireProgram:x,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:L}}function MM(){let t=new WeakMap;function e(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function i(a,o,s){t.get(a)[o]=s}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function wM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Kp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qp(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,g,y,p,c){let m=t[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:g,groupOrder:y,renderOrder:h.renderOrder,z:p,group:c},t[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=g,m.groupOrder=y,m.renderOrder=h.renderOrder,m.z=p,m.group=c),e++,m}function s(h,d,g,y,p,c){const m=o(h,d,g,y,p,c);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function l(h,d,g,y,p,c){const m=o(h,d,g,y,p,c);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(h,d){n.length>1&&n.sort(h||wM),i.length>1&&i.sort(d||Kp),r.length>1&&r.sort(d||Kp)}function f(){for(let h=e,d=t.length;h<d;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:f,sort:u}}function bM(){let t=new WeakMap;function e(i,r){const a=t.get(i);let o;return a===void 0?(o=new Qp,t.set(i,[o])):r>=a.length?(o=new Qp,a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function EM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new nt};break;case"SpotLight":n={position:new U,direction:new U,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function TM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let CM=0;function AM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function LM(t,e){const n=new EM,i=TM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new U);const a=new U,o=new Et,s=new Et;function l(f,h){let d=0,g=0,y=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let p=0,c=0,m=0,v=0,_=0,x=0,b=0,T=0,L=0,S=0;f.sort(AM);const w=h===!0?Math.PI:1;for(let q=0,Y=f.length;q<Y;q++){const O=f[q],N=O.color,B=O.intensity,Z=O.distance,X=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=N.r*B*w,g+=N.g*B*w,y+=N.b*B*w;else if(O.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(O.sh.coefficients[V],B);else if(O.isDirectionalLight){const V=n.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*w),O.castShadow){const J=O.shadow,Q=i.get(O);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,r.directionalShadow[p]=Q,r.directionalShadowMap[p]=X,r.directionalShadowMatrix[p]=O.shadow.matrix,x++}r.directional[p]=V,p++}else if(O.isSpotLight){const V=n.get(O);V.position.setFromMatrixPosition(O.matrixWorld),V.color.copy(N).multiplyScalar(B*w),V.distance=Z,V.coneCos=Math.cos(O.angle),V.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),V.decay=O.decay,r.spot[m]=V;const J=O.shadow;if(O.map&&(r.spotLightMap[L]=O.map,L++,J.updateMatrices(O),O.castShadow&&S++),r.spotLightMatrix[m]=J.matrix,O.castShadow){const Q=i.get(O);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,r.spotShadow[m]=Q,r.spotShadowMap[m]=X,T++}m++}else if(O.isRectAreaLight){const V=n.get(O);V.color.copy(N).multiplyScalar(B),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),r.rectArea[v]=V,v++}else if(O.isPointLight){const V=n.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*w),V.distance=O.distance,V.decay=O.decay,O.castShadow){const J=O.shadow,Q=i.get(O);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,r.pointShadow[c]=Q,r.pointShadowMap[c]=X,r.pointShadowMatrix[c]=O.shadow.matrix,b++}r.point[c]=V,c++}else if(O.isHemisphereLight){const V=n.get(O);V.skyColor.copy(O.color).multiplyScalar(B*w),V.groundColor.copy(O.groundColor).multiplyScalar(B*w),r.hemi[_]=V,_++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=y;const I=r.hash;(I.directionalLength!==p||I.pointLength!==c||I.spotLength!==m||I.rectAreaLength!==v||I.hemiLength!==_||I.numDirectionalShadows!==x||I.numPointShadows!==b||I.numSpotShadows!==T||I.numSpotMaps!==L)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=v,r.point.length=c,r.hemi.length=_,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=T+L-S,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=S,I.directionalLength=p,I.pointLength=c,I.spotLength=m,I.rectAreaLength=v,I.hemiLength=_,I.numDirectionalShadows=x,I.numPointShadows=b,I.numSpotShadows=T,I.numSpotMaps=L,r.version=CM++)}function u(f,h){let d=0,g=0,y=0,p=0,c=0;const m=h.matrixWorldInverse;for(let v=0,_=f.length;v<_;v++){const x=f[v];if(x.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),d++}else if(x.isSpotLight){const b=r.spot[y];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),y++}else if(x.isRectAreaLight){const b=r.rectArea[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),s.identity(),o.copy(x.matrixWorld),o.premultiply(m),s.extractRotation(o),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),p++}else if(x.isPointLight){const b=r.point[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),g++}else if(x.isHemisphereLight){const b=r.hemi[c];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),c++}}}return{setup:l,setupView:u,state:r}}function Jp(t,e){const n=new LM(t,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(h){i.push(h)}function s(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s}}function PM(t,e){let n=new WeakMap;function i(a,o=0){const s=n.get(a);let l;return s===void 0?(l=new Jp(t,e),n.set(a,[l])):o>=s.length?(l=new Jp(t,e),s.push(l)):l=s[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class RM extends Il{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DM extends Il{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const IM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kM=`uniform sampler2D shadow_pass;
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
}`;function NM(t,e,n){let i=new Vg;const r=new He,a=new He,o=new bt,s=new RM({depthPacking:Nx}),l=new DM,u={},f=n.maxTextureSize,h={[Di]:Jt,[Jt]:Di,[pi]:pi},d=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:IM,fragmentShader:kM}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const y=new vr;y.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Yn(y,d),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wg,this.render=function(x,b,T){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||x.length===0)return;const L=t.getRenderTarget(),S=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Ti),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let q=0,Y=x.length;q<Y;q++){const O=x[q],N=O.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const B=N.getFrameExtents();if(r.multiply(B),a.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(a.x=Math.floor(f/B.x),r.x=a.x*B.x,N.mapSize.x=a.x),r.y>f&&(a.y=Math.floor(f/B.y),r.y=a.y*B.y,N.mapSize.y=a.y)),N.map===null){const X=this.type!==Ka?{minFilter:zt,magFilter:zt}:{};N.map=new cr(r.x,r.y,X),N.map.texture.name=O.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Z=N.getViewportCount();for(let X=0;X<Z;X++){const V=N.getViewport(X);o.set(a.x*V.x,a.y*V.y,a.x*V.z,a.y*V.w),I.viewport(o),N.updateMatrices(O,X),i=N.getFrustum(),_(b,T,N.camera,O,this.type)}N.isPointLightShadow!==!0&&this.type===Ka&&m(N,T),N.needsUpdate=!1}c.needsUpdate=!1,t.setRenderTarget(L,S,w)};function m(x,b){const T=e.update(p);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,g.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new cr(r.x,r.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,t.setRenderTarget(x.mapPass),t.clear(),t.renderBufferDirect(b,null,T,d,p,null),g.uniforms.shadow_pass.value=x.mapPass.texture,g.uniforms.resolution.value=x.mapSize,g.uniforms.radius.value=x.radius,t.setRenderTarget(x.map),t.clear(),t.renderBufferDirect(b,null,T,g,p,null)}function v(x,b,T,L,S,w){let I=null;const q=T.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(q!==void 0)I=q;else if(I=T.isPointLight===!0?l:s,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const Y=I.uuid,O=b.uuid;let N=u[Y];N===void 0&&(N={},u[Y]=N);let B=N[O];B===void 0&&(B=I.clone(),N[O]=B),I=B}return I.visible=b.visible,I.wireframe=b.wireframe,w===Ka?I.side=b.shadowSide!==null?b.shadowSide:b.side:I.side=b.shadowSide!==null?b.shadowSide:h[b.side],I.alphaMap=b.alphaMap,I.alphaTest=b.alphaTest,I.map=b.map,I.clipShadows=b.clipShadows,I.clippingPlanes=b.clippingPlanes,I.clipIntersection=b.clipIntersection,I.displacementMap=b.displacementMap,I.displacementScale=b.displacementScale,I.displacementBias=b.displacementBias,I.wireframeLinewidth=b.wireframeLinewidth,I.linewidth=b.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(T.matrixWorld),I.nearDistance=L,I.farDistance=S),I}function _(x,b,T,L,S){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&S===Ka)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,x.matrixWorld);const q=e.update(x),Y=x.material;if(Array.isArray(Y)){const O=q.groups;for(let N=0,B=O.length;N<B;N++){const Z=O[N],X=Y[Z.materialIndex];if(X&&X.visible){const V=v(x,X,L,T.near,T.far,S);t.renderBufferDirect(T,null,q,V,x,Z)}}}else if(Y.visible){const O=v(x,Y,L,T.near,T.far,S);t.renderBufferDirect(T,null,q,O,x,null)}}const I=x.children;for(let q=0,Y=I.length;q<Y;q++)_(I[q],b,T,L,S)}}function OM(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const j=new bt;let te=null;const de=new bt(0,0,0,0);return{setMask:function(me){te!==me&&!D&&(t.colorMask(me,me,me,me),te=me)},setLocked:function(me){D=me},setClear:function(me,Ke,vt,It,En){En===!0&&(me*=It,Ke*=It,vt*=It),j.set(me,Ke,vt,It),de.equals(j)===!1&&(t.clearColor(me,Ke,vt,It),de.copy(j))},reset:function(){D=!1,te=null,de.set(-1,0,0,0)}}}function a(){let D=!1,j=null,te=null,de=null;return{setTest:function(me){me?ee(2929):se(2929)},setMask:function(me){j!==me&&!D&&(t.depthMask(me),j=me)},setFunc:function(me){if(te!==me){switch(me){case rx:t.depthFunc(512);break;case ax:t.depthFunc(519);break;case ox:t.depthFunc(513);break;case Uc:t.depthFunc(515);break;case sx:t.depthFunc(514);break;case lx:t.depthFunc(518);break;case ux:t.depthFunc(516);break;case cx:t.depthFunc(517);break;default:t.depthFunc(515)}te=me}},setLocked:function(me){D=me},setClear:function(me){de!==me&&(t.clearDepth(me),de=me)},reset:function(){D=!1,j=null,te=null,de=null}}}function o(){let D=!1,j=null,te=null,de=null,me=null,Ke=null,vt=null,It=null,En=null;return{setTest:function(lt){D||(lt?ee(2960):se(2960))},setMask:function(lt){j!==lt&&!D&&(t.stencilMask(lt),j=lt)},setFunc:function(lt,an,Tn){(te!==lt||de!==an||me!==Tn)&&(t.stencilFunc(lt,an,Tn),te=lt,de=an,me=Tn)},setOp:function(lt,an,Tn){(Ke!==lt||vt!==an||It!==Tn)&&(t.stencilOp(lt,an,Tn),Ke=lt,vt=an,It=Tn)},setLocked:function(lt){D=lt},setClear:function(lt){En!==lt&&(t.clearStencil(lt),En=lt)},reset:function(){D=!1,j=null,te=null,de=null,me=null,Ke=null,vt=null,It=null,En=null}}}const s=new r,l=new a,u=new o,f=new WeakMap,h=new WeakMap;let d={},g={},y=new WeakMap,p=[],c=null,m=!1,v=null,_=null,x=null,b=null,T=null,L=null,S=null,w=!1,I=null,q=null,Y=null,O=null,N=null;const B=t.getParameter(35661);let Z=!1,X=0;const V=t.getParameter(7938);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),Z=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Z=X>=2);let J=null,Q={};const P=t.getParameter(3088),A=t.getParameter(2978),k=new bt().fromArray(P),G=new bt().fromArray(A);function R(D,j,te){const de=new Uint8Array(4),me=t.createTexture();t.bindTexture(D,me),t.texParameteri(D,10241,9728),t.texParameteri(D,10240,9728);for(let Ke=0;Ke<te;Ke++)t.texImage2D(j+Ke,0,6408,1,1,0,6408,5121,de);return me}const ne={};ne[3553]=R(3553,3553,1),ne[34067]=R(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ee(2929),l.setFunc(Uc),qe(!1),We(Gh),ee(2884),De(Ti);function ee(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function se(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function oe(D,j){return g[D]!==j?(t.bindFramebuffer(D,j),g[D]=j,i&&(D===36009&&(g[36160]=j),D===36160&&(g[36009]=j)),!0):!1}function ge(D,j){let te=p,de=!1;if(D)if(te=y.get(j),te===void 0&&(te=[],y.set(j,te)),D.isWebGLMultipleRenderTargets){const me=D.texture;if(te.length!==me.length||te[0]!==36064){for(let Ke=0,vt=me.length;Ke<vt;Ke++)te[Ke]=36064+Ke;te.length=me.length,de=!0}}else te[0]!==36064&&(te[0]=36064,de=!0);else te[0]!==1029&&(te[0]=1029,de=!0);de&&(n.isWebGL2?t.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Ee(D){return c!==D?(t.useProgram(D),c=D,!0):!1}const Ae={[kr]:32774,[$_]:32778,[q_]:32779};if(i)Ae[jh]=32775,Ae[Xh]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ae[jh]=D.MIN_EXT,Ae[Xh]=D.MAX_EXT)}const Pe={[Y_]:0,[Z_]:1,[K_]:768,[bg]:770,[ix]:776,[tx]:774,[J_]:772,[Q_]:769,[Eg]:771,[nx]:775,[ex]:773};function De(D,j,te,de,me,Ke,vt,It){if(D===Ti){m===!0&&(se(3042),m=!1);return}if(m===!1&&(ee(3042),m=!0),D!==X_){if(D!==v||It!==w){if((_!==kr||T!==kr)&&(t.blendEquation(32774),_=kr,T=kr),It)switch(D){case na:t.blendFuncSeparate(1,771,1,771);break;case Vh:t.blendFunc(1,1);break;case Hh:t.blendFuncSeparate(0,769,0,1);break;case Wh:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case na:t.blendFuncSeparate(770,771,1,771);break;case Vh:t.blendFunc(770,1);break;case Hh:t.blendFuncSeparate(0,769,0,1);break;case Wh:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,b=null,L=null,S=null,v=D,w=It}return}me=me||j,Ke=Ke||te,vt=vt||de,(j!==_||me!==T)&&(t.blendEquationSeparate(Ae[j],Ae[me]),_=j,T=me),(te!==x||de!==b||Ke!==L||vt!==S)&&(t.blendFuncSeparate(Pe[te],Pe[de],Pe[Ke],Pe[vt]),x=te,b=de,L=Ke,S=vt),v=D,w=!1}function Ze(D,j){D.side===pi?se(2884):ee(2884);let te=D.side===Jt;j&&(te=!te),qe(te),D.blending===na&&D.transparent===!1?De(Ti):De(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),s.setMask(D.colorWrite);const de=D.stencilWrite;u.setTest(de),de&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),je(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(32926):se(32926)}function qe(D){I!==D&&(D?t.frontFace(2304):t.frontFace(2305),I=D)}function We(D){D!==H_?(ee(2884),D!==q&&(D===Gh?t.cullFace(1029):D===W_?t.cullFace(1028):t.cullFace(1032))):se(2884),q=D}function Ue(D){D!==Y&&(Z&&t.lineWidth(D),Y=D)}function je(D,j,te){D?(ee(32823),(O!==j||N!==te)&&(t.polygonOffset(j,te),O=j,N=te)):se(32823)}function $e(D){D?ee(3089):se(3089)}function Xe(D){D===void 0&&(D=33984+B-1),J!==D&&(t.activeTexture(D),J=D)}function C(D,j,te){te===void 0&&(J===null?te=33984+B-1:te=J);let de=Q[te];de===void 0&&(de={type:void 0,texture:void 0},Q[te]=de),(de.type!==D||de.texture!==j)&&(J!==te&&(t.activeTexture(te),J=te),t.bindTexture(D,j||ne[D]),de.type=D,de.texture=j)}function M(){const D=Q[J];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function H(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(D){k.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),k.copy(D))}function ye(D){G.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),G.copy(D))}function Ge(D,j){let te=h.get(j);te===void 0&&(te=new WeakMap,h.set(j,te));let de=te.get(D);de===void 0&&(de=t.getUniformBlockIndex(j,D.name),te.set(D,de))}function rt(D,j){const de=h.get(j).get(D);f.get(j)!==de&&(t.uniformBlockBinding(j,de,D.__bindingPointIndex),f.set(j,de))}function gt(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},J=null,Q={},g={},y=new WeakMap,p=[],c=null,m=!1,v=null,_=null,x=null,b=null,T=null,L=null,S=null,w=!1,I=null,q=null,Y=null,O=null,N=null,k.set(0,0,t.canvas.width,t.canvas.height),G.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),u.reset()}return{buffers:{color:s,depth:l,stencil:u},enable:ee,disable:se,bindFramebuffer:oe,drawBuffers:ge,useProgram:Ee,setBlending:De,setMaterial:Ze,setFlipSided:qe,setCullFace:We,setLineWidth:Ue,setPolygonOffset:je,setScissorTest:$e,activeTexture:Xe,bindTexture:C,unbindTexture:M,compressedTexImage2D:H,compressedTexImage3D:re,texImage2D:ve,texImage3D:Te,updateUBOMapping:Ge,uniformBlockBinding:rt,texStorage2D:K,texStorage3D:be,texSubImage2D:ae,texSubImage3D:ce,compressedTexSubImage2D:xe,compressedTexSubImage3D:pe,scissor:we,viewport:ye,reset:gt}}function zM(t,e,n,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let p;const c=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return m?new OffscreenCanvas(C,M):ul("canvas")}function _(C,M,H,re){let ae=1;if((C.width>re||C.height>re)&&(ae=re/Math.max(C.width,C.height)),ae<1||M===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){const ce=M?Bx:Math.floor,xe=ce(ae*C.width),pe=ce(ae*C.height);p===void 0&&(p=v(xe,pe));const K=H?v(xe,pe):p;return K.width=xe,K.height=pe,K.getContext("2d").drawImage(C,0,0,xe,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+xe+"x"+pe+")."),K}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return yp(C.width)&&yp(C.height)}function b(C){return s?!1:C.wrapS!==yn||C.wrapT!==yn||C.minFilter!==zt&&C.minFilter!==sn}function T(C,M){return C.generateMipmaps&&M&&C.minFilter!==zt&&C.minFilter!==sn}function L(C){t.generateMipmap(C)}function S(C,M,H,re,ae=!1){if(s===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce=M;return M===6403&&(H===5126&&(ce=33326),H===5131&&(ce=33325),H===5121&&(ce=33321)),M===33319&&(H===5126&&(ce=33328),H===5131&&(ce=33327),H===5121&&(ce=33323)),M===6408&&(H===5126&&(ce=34836),H===5131&&(ce=34842),H===5121&&(ce=re===Je&&ae===!1?35907:32856),H===32819&&(ce=32854),H===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function w(C,M,H){return T(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==zt&&C.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function I(C){return C===zt||C===$h||C===mu?9728:9729}function q(C){const M=C.target;M.removeEventListener("dispose",q),O(M),M.isVideoTexture&&y.delete(M)}function Y(C){const M=C.target;M.removeEventListener("dispose",Y),B(M)}function O(C){const M=i.get(C);if(M.__webglInit===void 0)return;const H=C.source,re=c.get(H);if(re){const ae=re[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&N(C),Object.keys(re).length===0&&c.delete(H)}i.remove(C)}function N(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const H=C.source,re=c.get(H);delete re[M.__cacheKey],o.memory.textures--}function B(C){const M=C.texture,H=i.get(C),re=i.get(M);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)t.deleteFramebuffer(H.__webglFramebuffer[ae]),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ae]);else{if(t.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ae=0;ae<H.__webglColorRenderbuffer.length;ae++)H.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ae]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ae=0,ce=M.length;ae<ce;ae++){const xe=i.get(M[ae]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(M[ae])}i.remove(M),i.remove(C)}let Z=0;function X(){Z=0}function V(){const C=Z;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Z+=1,C}function J(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.encoding),M.join()}function Q(C,M){const H=i.get(C);if(C.isVideoTexture&&$e(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(H,C,M);return}}n.bindTexture(3553,H.__webglTexture,33984+M)}function P(C,M){const H=i.get(C);if(C.version>0&&H.__version!==C.version){se(H,C,M);return}n.bindTexture(35866,H.__webglTexture,33984+M)}function A(C,M){const H=i.get(C);if(C.version>0&&H.__version!==C.version){se(H,C,M);return}n.bindTexture(32879,H.__webglTexture,33984+M)}function k(C,M){const H=i.get(C);if(C.version>0&&H.__version!==C.version){oe(H,C,M);return}n.bindTexture(34067,H.__webglTexture,33984+M)}const G={[Vc]:10497,[yn]:33071,[Hc]:33648},R={[zt]:9728,[$h]:9984,[mu]:9986,[sn]:9729,[_x]:9985,[Lo]:9987};function ne(C,M,H){if(H?(t.texParameteri(C,10242,G[M.wrapS]),t.texParameteri(C,10243,G[M.wrapT]),(C===32879||C===35866)&&t.texParameteri(C,32882,G[M.wrapR]),t.texParameteri(C,10240,R[M.magFilter]),t.texParameteri(C,10241,R[M.minFilter])):(t.texParameteri(C,10242,33071),t.texParameteri(C,10243,33071),(C===32879||C===35866)&&t.texParameteri(C,32882,33071),(M.wrapS!==yn||M.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,10240,I(M.magFilter)),t.texParameteri(C,10241,I(M.minFilter)),M.minFilter!==zt&&M.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===zt||M.minFilter!==mu&&M.minFilter!==Lo||M.type===er&&e.has("OES_texture_float_linear")===!1||s===!1&&M.type===Po&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ee(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",q));const re=M.source;let ae=c.get(re);ae===void 0&&(ae={},c.set(re,ae));const ce=J(M);if(ce!==C.__cacheKey){ae[ce]===void 0&&(ae[ce]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ae[ce].usedTimes++;const xe=ae[C.__cacheKey];xe!==void 0&&(ae[C.__cacheKey].usedTimes--,xe.usedTimes===0&&N(M)),C.__cacheKey=ce,C.__webglTexture=ae[ce].texture}return H}function se(C,M,H){let re=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=35866),M.isData3DTexture&&(re=32879);const ae=ee(C,M),ce=M.source;n.bindTexture(re,C.__webglTexture,33984+H);const xe=i.get(ce);if(ce.version!==xe.__version||ae===!0){n.activeTexture(33984+H),t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const pe=b(M)&&x(M.image)===!1;let K=_(M.image,pe,!1,f);K=Xe(M,K);const be=x(K)||s,ve=a.convert(M.format,M.encoding);let Te=a.convert(M.type),we=S(M.internalFormat,ve,Te,M.encoding,M.isVideoTexture);ne(re,M,be);let ye;const Ge=M.mipmaps,rt=s&&M.isVideoTexture!==!0,gt=xe.__version===void 0||ae===!0,D=w(M,K,be);if(M.isDepthTexture)we=6402,s?M.type===er?we=36012:M.type===Ji?we=33190:M.type===ia?we=35056:we=33189:M.type===er&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ir&&we===6402&&M.type!==Ag&&M.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ji,Te=a.convert(M.type)),M.format===da&&we===6402&&(we=34041,M.type!==ia&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ia,Te=a.convert(M.type))),gt&&(rt?n.texStorage2D(3553,1,we,K.width,K.height):n.texImage2D(3553,0,we,K.width,K.height,0,ve,Te,null));else if(M.isDataTexture)if(Ge.length>0&&be){rt&&gt&&n.texStorage2D(3553,D,we,Ge[0].width,Ge[0].height);for(let j=0,te=Ge.length;j<te;j++)ye=Ge[j],rt?n.texSubImage2D(3553,j,0,0,ye.width,ye.height,ve,Te,ye.data):n.texImage2D(3553,j,we,ye.width,ye.height,0,ve,Te,ye.data);M.generateMipmaps=!1}else rt?(gt&&n.texStorage2D(3553,D,we,K.width,K.height),n.texSubImage2D(3553,0,0,0,K.width,K.height,ve,Te,K.data)):n.texImage2D(3553,0,we,K.width,K.height,0,ve,Te,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){rt&&gt&&n.texStorage3D(35866,D,we,Ge[0].width,Ge[0].height,K.depth);for(let j=0,te=Ge.length;j<te;j++)ye=Ge[j],M.format!==Sn?ve!==null?rt?n.compressedTexSubImage3D(35866,j,0,0,0,ye.width,ye.height,K.depth,ve,ye.data,0,0):n.compressedTexImage3D(35866,j,we,ye.width,ye.height,K.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?n.texSubImage3D(35866,j,0,0,0,ye.width,ye.height,K.depth,ve,Te,ye.data):n.texImage3D(35866,j,we,ye.width,ye.height,K.depth,0,ve,Te,ye.data)}else{rt&&gt&&n.texStorage2D(3553,D,we,Ge[0].width,Ge[0].height);for(let j=0,te=Ge.length;j<te;j++)ye=Ge[j],M.format!==Sn?ve!==null?rt?n.compressedTexSubImage2D(3553,j,0,0,ye.width,ye.height,ve,ye.data):n.compressedTexImage2D(3553,j,we,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?n.texSubImage2D(3553,j,0,0,ye.width,ye.height,ve,Te,ye.data):n.texImage2D(3553,j,we,ye.width,ye.height,0,ve,Te,ye.data)}else if(M.isDataArrayTexture)rt?(gt&&n.texStorage3D(35866,D,we,K.width,K.height,K.depth),n.texSubImage3D(35866,0,0,0,0,K.width,K.height,K.depth,ve,Te,K.data)):n.texImage3D(35866,0,we,K.width,K.height,K.depth,0,ve,Te,K.data);else if(M.isData3DTexture)rt?(gt&&n.texStorage3D(32879,D,we,K.width,K.height,K.depth),n.texSubImage3D(32879,0,0,0,0,K.width,K.height,K.depth,ve,Te,K.data)):n.texImage3D(32879,0,we,K.width,K.height,K.depth,0,ve,Te,K.data);else if(M.isFramebufferTexture){if(gt)if(rt)n.texStorage2D(3553,D,we,K.width,K.height);else{let j=K.width,te=K.height;for(let de=0;de<D;de++)n.texImage2D(3553,de,we,j,te,0,ve,Te,null),j>>=1,te>>=1}}else if(Ge.length>0&&be){rt&&gt&&n.texStorage2D(3553,D,we,Ge[0].width,Ge[0].height);for(let j=0,te=Ge.length;j<te;j++)ye=Ge[j],rt?n.texSubImage2D(3553,j,0,0,ve,Te,ye):n.texImage2D(3553,j,we,ve,Te,ye);M.generateMipmaps=!1}else rt?(gt&&n.texStorage2D(3553,D,we,K.width,K.height),n.texSubImage2D(3553,0,0,0,ve,Te,K)):n.texImage2D(3553,0,we,ve,Te,K);T(M,be)&&L(re),xe.__version=ce.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function oe(C,M,H){if(M.image.length!==6)return;const re=ee(C,M),ae=M.source;n.bindTexture(34067,C.__webglTexture,33984+H);const ce=i.get(ae);if(ae.version!==ce.__version||re===!0){n.activeTexture(33984+H),t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const xe=M.isCompressedTexture||M.image[0].isCompressedTexture,pe=M.image[0]&&M.image[0].isDataTexture,K=[];for(let j=0;j<6;j++)!xe&&!pe?K[j]=_(M.image[j],!1,!0,u):K[j]=pe?M.image[j].image:M.image[j],K[j]=Xe(M,K[j]);const be=K[0],ve=x(be)||s,Te=a.convert(M.format,M.encoding),we=a.convert(M.type),ye=S(M.internalFormat,Te,we,M.encoding),Ge=s&&M.isVideoTexture!==!0,rt=ce.__version===void 0||re===!0;let gt=w(M,be,ve);ne(34067,M,ve);let D;if(xe){Ge&&rt&&n.texStorage2D(34067,gt,ye,be.width,be.height);for(let j=0;j<6;j++){D=K[j].mipmaps;for(let te=0;te<D.length;te++){const de=D[te];M.format!==Sn?Te!==null?Ge?n.compressedTexSubImage2D(34069+j,te,0,0,de.width,de.height,Te,de.data):n.compressedTexImage2D(34069+j,te,ye,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?n.texSubImage2D(34069+j,te,0,0,de.width,de.height,Te,we,de.data):n.texImage2D(34069+j,te,ye,de.width,de.height,0,Te,we,de.data)}}}else{D=M.mipmaps,Ge&&rt&&(D.length>0&&gt++,n.texStorage2D(34067,gt,ye,K[0].width,K[0].height));for(let j=0;j<6;j++)if(pe){Ge?n.texSubImage2D(34069+j,0,0,0,K[j].width,K[j].height,Te,we,K[j].data):n.texImage2D(34069+j,0,ye,K[j].width,K[j].height,0,Te,we,K[j].data);for(let te=0;te<D.length;te++){const me=D[te].image[j].image;Ge?n.texSubImage2D(34069+j,te+1,0,0,me.width,me.height,Te,we,me.data):n.texImage2D(34069+j,te+1,ye,me.width,me.height,0,Te,we,me.data)}}else{Ge?n.texSubImage2D(34069+j,0,0,0,Te,we,K[j]):n.texImage2D(34069+j,0,ye,Te,we,K[j]);for(let te=0;te<D.length;te++){const de=D[te];Ge?n.texSubImage2D(34069+j,te+1,0,0,Te,we,de.image[j]):n.texImage2D(34069+j,te+1,ye,Te,we,de.image[j])}}}T(M,ve)&&L(34067),ce.__version=ae.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ge(C,M,H,re,ae){const ce=a.convert(H.format,H.encoding),xe=a.convert(H.type),pe=S(H.internalFormat,ce,xe,H.encoding);i.get(M).__hasExternalTextures||(ae===32879||ae===35866?n.texImage3D(ae,0,pe,M.width,M.height,M.depth,0,ce,xe,null):n.texImage2D(ae,0,pe,M.width,M.height,0,ce,xe,null)),n.bindFramebuffer(36160,C),je(M)?d.framebufferTexture2DMultisampleEXT(36160,re,ae,i.get(H).__webglTexture,0,Ue(M)):(ae===3553||ae>=34069&&ae<=34074)&&t.framebufferTexture2D(36160,re,ae,i.get(H).__webglTexture,0),n.bindFramebuffer(36160,null)}function Ee(C,M,H){if(t.bindRenderbuffer(36161,C),M.depthBuffer&&!M.stencilBuffer){let re=33189;if(H||je(M)){const ae=M.depthTexture;ae&&ae.isDepthTexture&&(ae.type===er?re=36012:ae.type===Ji&&(re=33190));const ce=Ue(M);je(M)?d.renderbufferStorageMultisampleEXT(36161,ce,re,M.width,M.height):t.renderbufferStorageMultisample(36161,ce,re,M.width,M.height)}else t.renderbufferStorage(36161,re,M.width,M.height);t.framebufferRenderbuffer(36160,36096,36161,C)}else if(M.depthBuffer&&M.stencilBuffer){const re=Ue(M);H&&je(M)===!1?t.renderbufferStorageMultisample(36161,re,35056,M.width,M.height):je(M)?d.renderbufferStorageMultisampleEXT(36161,re,35056,M.width,M.height):t.renderbufferStorage(36161,34041,M.width,M.height),t.framebufferRenderbuffer(36160,33306,36161,C)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ae=0;ae<re.length;ae++){const ce=re[ae],xe=a.convert(ce.format,ce.encoding),pe=a.convert(ce.type),K=S(ce.internalFormat,xe,pe,ce.encoding),be=Ue(M);H&&je(M)===!1?t.renderbufferStorageMultisample(36161,be,K,M.width,M.height):je(M)?d.renderbufferStorageMultisampleEXT(36161,be,K,M.width,M.height):t.renderbufferStorage(36161,K,M.width,M.height)}}t.bindRenderbuffer(36161,null)}function Ae(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,ae=Ue(M);if(M.depthTexture.format===ir)je(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,re,0,ae):t.framebufferTexture2D(36160,36096,3553,re,0);else if(M.depthTexture.format===da)je(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,re,0,ae):t.framebufferTexture2D(36160,33306,3553,re,0);else throw new Error("Unknown depthTexture format")}function Pe(C){const M=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ae(M.__webglFramebuffer,C)}else if(H){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(36160,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=t.createRenderbuffer(),Ee(M.__webglDepthbuffer[re],C,!1)}else n.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Ee(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(36160,null)}function De(C,M,H){const re=i.get(C);M!==void 0&&ge(re.__webglFramebuffer,C,C.texture,36064,3553),H!==void 0&&Pe(C)}function Ze(C){const M=C.texture,H=i.get(C),re=i.get(M);C.addEventListener("dispose",Y),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,o.memory.textures++);const ae=C.isWebGLCubeRenderTarget===!0,ce=C.isWebGLMultipleRenderTargets===!0,xe=x(C)||s;if(ae){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)H.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(H.__webglFramebuffer=t.createFramebuffer(),ce)if(r.drawBuffers){const pe=C.texture;for(let K=0,be=pe.length;K<be;K++){const ve=i.get(pe[K]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&C.samples>0&&je(C)===!1){const pe=ce?M:[M];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let K=0;K<pe.length;K++){const be=pe[K];H.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(36161,H.__webglColorRenderbuffer[K]);const ve=a.convert(be.format,be.encoding),Te=a.convert(be.type),we=S(be.internalFormat,ve,Te,be.encoding,C.isXRRenderTarget===!0),ye=Ue(C);t.renderbufferStorageMultisample(36161,ye,we,C.width,C.height),t.framebufferRenderbuffer(36160,36064+K,36161,H.__webglColorRenderbuffer[K])}t.bindRenderbuffer(36161,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Ee(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(36160,null)}}if(ae){n.bindTexture(34067,re.__webglTexture),ne(34067,M,xe);for(let pe=0;pe<6;pe++)ge(H.__webglFramebuffer[pe],C,M,36064,34069+pe);T(M,xe)&&L(34067),n.unbindTexture()}else if(ce){const pe=C.texture;for(let K=0,be=pe.length;K<be;K++){const ve=pe[K],Te=i.get(ve);n.bindTexture(3553,Te.__webglTexture),ne(3553,ve,xe),ge(H.__webglFramebuffer,C,ve,36064+K,3553),T(ve,xe)&&L(3553)}n.unbindTexture()}else{let pe=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(s?pe=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,re.__webglTexture),ne(pe,M,xe),ge(H.__webglFramebuffer,C,M,36064,pe),T(M,xe)&&L(pe),n.unbindTexture()}C.depthBuffer&&Pe(C)}function qe(C){const M=x(C)||s,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,ae=H.length;re<ae;re++){const ce=H[re];if(T(ce,M)){const xe=C.isWebGLCubeRenderTarget?34067:3553,pe=i.get(ce).__webglTexture;n.bindTexture(xe,pe),L(xe),n.unbindTexture()}}}function We(C){if(s&&C.samples>0&&je(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,re=C.height;let ae=16384;const ce=[],xe=C.stencilBuffer?33306:36096,pe=i.get(C),K=C.isWebGLMultipleRenderTargets===!0;if(K)for(let be=0;be<M.length;be++)n.bindFramebuffer(36160,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+be,36161,null),n.bindFramebuffer(36160,pe.__webglFramebuffer),t.framebufferTexture2D(36009,36064+be,3553,null,0);n.bindFramebuffer(36008,pe.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,pe.__webglFramebuffer);for(let be=0;be<M.length;be++){ce.push(36064+be),C.depthBuffer&&ce.push(xe);const ve=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(ve===!1&&(C.depthBuffer&&(ae|=256),C.stencilBuffer&&(ae|=1024)),K&&t.framebufferRenderbuffer(36008,36064,36161,pe.__webglColorRenderbuffer[be]),ve===!0&&(t.invalidateFramebuffer(36008,[xe]),t.invalidateFramebuffer(36009,[xe])),K){const Te=i.get(M[be]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,Te,0)}t.blitFramebuffer(0,0,H,re,0,0,H,re,ae,9728),g&&t.invalidateFramebuffer(36008,ce)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),K)for(let be=0;be<M.length;be++){n.bindFramebuffer(36160,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+be,36161,pe.__webglColorRenderbuffer[be]);const ve=i.get(M[be]).__webglTexture;n.bindFramebuffer(36160,pe.__webglFramebuffer),t.framebufferTexture2D(36009,36064+be,3553,ve,0)}n.bindFramebuffer(36009,pe.__webglMultisampledFramebuffer)}}function Ue(C){return Math.min(h,C.samples)}function je(C){const M=i.get(C);return s&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $e(C){const M=o.render.frame;y.get(C)!==M&&(y.set(C,M),C.update())}function Xe(C,M){const H=C.encoding,re=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Wc||H!==ur&&(H===Je?s===!1?e.has("EXT_sRGB")===!0&&re===Sn?(C.format=Wc,C.minFilter=sn,C.generateMipmaps=!1):M=Rg.sRGBToLinear(M):(re!==Sn||ae!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),M}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.setTexture2D=Q,this.setTexture2DArray=P,this.setTexture3D=A,this.setTextureCube=k,this.rebindTextures=De,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=je}function FM(t,e,n){const i=n.isWebGL2;function r(a,o=null){let s;if(a===lr)return 5121;if(a===Mx)return 32819;if(a===wx)return 32820;if(a===xx)return 5120;if(a===yx)return 5122;if(a===Ag)return 5123;if(a===Sx)return 5124;if(a===Ji)return 5125;if(a===er)return 5126;if(a===Po)return i?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===bx)return 6406;if(a===Sn)return 6408;if(a===Ex)return 6409;if(a===Tx)return 6410;if(a===ir)return 6402;if(a===da)return 34041;if(a===Wc)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Cx)return 6403;if(a===Ax)return 36244;if(a===Lx)return 33319;if(a===Px)return 33320;if(a===Rx)return 36249;if(a===gu||a===vu||a===_u||a===xu)if(o===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===gu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===vu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===_u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===xu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===gu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===vu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===_u)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===xu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===qh||a===Yh||a===Zh||a===Kh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===qh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Yh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Zh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Kh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Dx)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Qh||a===Jh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Qh)return o===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Jh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ep||a===tp||a===np||a===ip||a===rp||a===ap||a===op||a===sp||a===lp||a===up||a===cp||a===fp||a===dp||a===hp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===ep)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===tp)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===np)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ip)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===rp)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ap)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===op)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===sp)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===lp)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===up)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===cp)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===fp)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===dp)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===hp)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===yu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===yu)return o===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===Ix||a===pp||a===mp||a===gp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===yu)return s.COMPRESSED_RED_RGTC1_EXT;if(a===pp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===mp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===gp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ia?i?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:r}}class UM extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ms extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BM={type:"move"};class Xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const c=n.getJointPose(p,i),m=this._getHandJoint(u,p);c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=c.radius),m.visible=c!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),g=.02,y=.005;u.inputState.pinching&&d>g+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(BM)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ms;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class GM extends en{constructor(e,n,i,r,a,o,s,l,u,f){if(f=f!==void 0?f:ir,f!==ir&&f!==da)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ir&&(i=Ji),i===void 0&&f===da&&(i=ia),super(null,r,a,o,s,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1}}class VM extends Sa{constructor(e,n){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,u=null,f=null,h=null,d=null,g=null,y=null;const p=n.getContextAttributes();let c=null,m=null;const v=[],_=[],x=new Set,b=new Map,T=new xn;T.layers.enable(1),T.viewport=new bt;const L=new xn;L.layers.enable(2),L.viewport=new bt;const S=[T,L],w=new UM;w.layers.enable(1),w.layers.enable(2);let I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let k=v[A];return k===void 0&&(k=new Xu,v[A]=k),k.getTargetRaySpace()},this.getControllerGrip=function(A){let k=v[A];return k===void 0&&(k=new Xu,v[A]=k),k.getGripSpace()},this.getHand=function(A){let k=v[A];return k===void 0&&(k=new Xu,v[A]=k),k.getHandSpace()};function Y(A){const k=_.indexOf(A.inputSource);if(k===-1)return;const G=v[k];G!==void 0&&G.dispatchEvent({type:A.type,data:A.inputSource})}function O(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",N);for(let A=0;A<v.length;A++){const k=_[A];k!==null&&(_[A]=null,v[A].disconnect(k))}I=null,q=null,e.setRenderTarget(c),g=null,d=null,h=null,r=null,m=null,P.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){a=A,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){s=A,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(A){u=A},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(A){if(r=A,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",O),r.addEventListener("inputsourceschange",N),p.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,n,k),r.updateRenderState({baseLayer:g}),m=new cr(g.framebufferWidth,g.framebufferHeight,{format:Sn,type:lr,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let k=null,G=null,R=null;p.depth&&(R=p.stencil?35056:33190,k=p.stencil?da:ir,G=p.stencil?ia:Ji);const ne={colorFormat:32856,depthFormat:R,scaleFactor:a};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(ne),r.updateRenderState({layers:[d]}),m=new cr(d.textureWidth,d.textureHeight,{format:Sn,type:lr,depthTexture:new GM(d.textureWidth,d.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const ee=e.properties.get(m);ee.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(s),P.setContext(r),P.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function N(A){for(let k=0;k<A.removed.length;k++){const G=A.removed[k],R=_.indexOf(G);R>=0&&(_[R]=null,v[R].disconnect(G))}for(let k=0;k<A.added.length;k++){const G=A.added[k];let R=_.indexOf(G);if(R===-1){for(let ee=0;ee<v.length;ee++)if(ee>=_.length){_.push(G),R=ee;break}else if(_[ee]===null){_[ee]=G,R=ee;break}if(R===-1)break}const ne=v[R];ne&&ne.connect(G)}}const B=new U,Z=new U;function X(A,k,G){B.setFromMatrixPosition(k.matrixWorld),Z.setFromMatrixPosition(G.matrixWorld);const R=B.distanceTo(Z),ne=k.projectionMatrix.elements,ee=G.projectionMatrix.elements,se=ne[14]/(ne[10]-1),oe=ne[14]/(ne[10]+1),ge=(ne[9]+1)/ne[5],Ee=(ne[9]-1)/ne[5],Ae=(ne[8]-1)/ne[0],Pe=(ee[8]+1)/ee[0],De=se*Ae,Ze=se*Pe,qe=R/(-Ae+Pe),We=qe*-Ae;k.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(We),A.translateZ(qe),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const Ue=se+qe,je=oe+qe,$e=De-We,Xe=Ze+(R-We),C=ge*oe/je*Ue,M=Ee*oe/je*Ue;A.projectionMatrix.makePerspective($e,Xe,C,M,Ue,je)}function V(A,k){k===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(k.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(r===null)return;w.near=L.near=T.near=A.near,w.far=L.far=T.far=A.far,(I!==w.near||q!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,q=w.far);const k=A.parent,G=w.cameras;V(w,k);for(let ne=0;ne<G.length;ne++)V(G[ne],k);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),A.matrix.copy(w.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale);const R=A.children;for(let ne=0,ee=R.length;ne<ee;ne++)R[ne].updateMatrixWorld(!0);G.length===2?X(w,T,L):w.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(A){l=A,d!==null&&(d.fixedFoveation=A),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=A)},this.getPlanes=function(){return x};let J=null;function Q(A,k){if(f=k.getViewerPose(u||o),y=k,f!==null){const G=f.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let R=!1;G.length!==w.cameras.length&&(w.cameras.length=0,R=!0);for(let ne=0;ne<G.length;ne++){const ee=G[ne];let se=null;if(g!==null)se=g.getViewport(ee);else{const ge=h.getViewSubImage(d,ee);se=ge.viewport,ne===0&&(e.setRenderTargetTextures(m,ge.colorTexture,d.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(m))}let oe=S[ne];oe===void 0&&(oe=new xn,oe.layers.enable(ne),oe.viewport=new bt,S[ne]=oe),oe.matrix.fromArray(ee.transform.matrix),oe.projectionMatrix.fromArray(ee.projectionMatrix),oe.viewport.set(se.x,se.y,se.width,se.height),ne===0&&w.matrix.copy(oe.matrix),R===!0&&w.cameras.push(oe)}}for(let G=0;G<v.length;G++){const R=_[G],ne=v[G];R!==null&&ne!==void 0&&ne.update(R,k,u||o)}if(J&&J(A,k),k.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:k.detectedPlanes});let G=null;for(const R of x)k.detectedPlanes.has(R)||(G===null&&(G=[]),G.push(R));if(G!==null)for(const R of G)x.delete(R),b.delete(R),i.dispatchEvent({type:"planeremoved",data:R});for(const R of k.detectedPlanes)if(!x.has(R))x.add(R),b.set(R,k.lastChangedTime),i.dispatchEvent({type:"planeadded",data:R});else{const ne=b.get(R);R.lastChangedTime>ne&&(b.set(R,R.lastChangedTime),i.dispatchEvent({type:"planechanged",data:R}))}}y=null}const P=new Hg;P.setAnimationLoop(Q),this.setAnimationLoop=function(A){J=A},this.dispose=function(){}}}function HM(t,e){function n(p,c){c.color.getRGB(p.fogColor.value,Ug(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function i(p,c,m,v,_){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(p,c):c.isMeshToonMaterial?(r(p,c),f(p,c)):c.isMeshPhongMaterial?(r(p,c),u(p,c)):c.isMeshStandardMaterial?(r(p,c),h(p,c),c.isMeshPhysicalMaterial&&d(p,c,_)):c.isMeshMatcapMaterial?(r(p,c),g(p,c)):c.isMeshDepthMaterial?r(p,c):c.isMeshDistanceMaterial?(r(p,c),y(p,c)):c.isMeshNormalMaterial?r(p,c):c.isLineBasicMaterial?(a(p,c),c.isLineDashedMaterial&&o(p,c)):c.isPointsMaterial?s(p,c,m,v):c.isSpriteMaterial?l(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map),c.alphaMap&&(p.alphaMap.value=c.alphaMap),c.bumpMap&&(p.bumpMap.value=c.bumpMap,p.bumpScale.value=c.bumpScale,c.side===Jt&&(p.bumpScale.value*=-1)),c.displacementMap&&(p.displacementMap.value=c.displacementMap,p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap),c.normalMap&&(p.normalMap.value=c.normalMap,p.normalScale.value.copy(c.normalScale),c.side===Jt&&p.normalScale.value.negate()),c.specularMap&&(p.specularMap.value=c.specularMap),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const m=e.get(c).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const x=t.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*x}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity);let v;c.map?v=c.map:c.specularMap?v=c.specularMap:c.displacementMap?v=c.displacementMap:c.normalMap?v=c.normalMap:c.bumpMap?v=c.bumpMap:c.roughnessMap?v=c.roughnessMap:c.metalnessMap?v=c.metalnessMap:c.alphaMap?v=c.alphaMap:c.emissiveMap?v=c.emissiveMap:c.clearcoatMap?v=c.clearcoatMap:c.clearcoatNormalMap?v=c.clearcoatNormalMap:c.clearcoatRoughnessMap?v=c.clearcoatRoughnessMap:c.iridescenceMap?v=c.iridescenceMap:c.iridescenceThicknessMap?v=c.iridescenceThicknessMap:c.specularIntensityMap?v=c.specularIntensityMap:c.specularColorMap?v=c.specularColorMap:c.transmissionMap?v=c.transmissionMap:c.thicknessMap?v=c.thicknessMap:c.sheenColorMap?v=c.sheenColorMap:c.sheenRoughnessMap&&(v=c.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let _;c.aoMap?_=c.aoMap:c.lightMap&&(_=c.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function a(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity}function o(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function s(p,c,m,v){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*m,p.scale.value=v*.5,c.map&&(p.map.value=c.map),c.alphaMap&&(p.alphaMap.value=c.alphaMap),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);let _;c.map?_=c.map:c.alphaMap&&(_=c.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map),c.alphaMap&&(p.alphaMap.value=c.alphaMap),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);let m;c.map?m=c.map:c.alphaMap&&(m=c.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function u(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function f(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function h(p,c){p.roughness.value=c.roughness,p.metalness.value=c.metalness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap),c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function d(p,c,m){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap)),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap),c.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),p.clearcoatNormalMap.value=c.clearcoatNormalMap,c.side===Jt&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap)),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap)}function g(p,c){c.matcap&&(p.matcap.value=c.matcap)}function y(p,c){p.referencePosition.value.copy(c.referencePosition),p.nearDistance.value=c.nearDistance,p.farDistance.value=c.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function WM(t,e,n,i){let r={},a={},o=[];const s=n.isWebGL2?t.getParameter(35375):0;function l(v,_){const x=_.program;i.uniformBlockBinding(v,x)}function u(v,_){let x=r[v.id];x===void 0&&(y(v),x=f(v),r[v.id]=x,v.addEventListener("dispose",c));const b=_.program;i.updateUBOMapping(v,b);const T=e.render.frame;a[v.id]!==T&&(d(v),a[v.id]=T)}function f(v){const _=h();v.__bindingPointIndex=_;const x=t.createBuffer(),b=v.__size,T=v.usage;return t.bindBuffer(35345,x),t.bufferData(35345,b,T),t.bindBuffer(35345,null),t.bindBufferBase(35345,_,x),x}function h(){for(let v=0;v<s;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],x=v.uniforms,b=v.__cache;t.bindBuffer(35345,_);for(let T=0,L=x.length;T<L;T++){const S=x[T];if(g(S,T,b)===!0){const w=S.__offset,I=Array.isArray(S.value)?S.value:[S.value];let q=0;for(let Y=0;Y<I.length;Y++){const O=I[Y],N=p(O);typeof O=="number"?(S.__data[0]=O,t.bufferSubData(35345,w+q,S.__data)):O.isMatrix3?(S.__data[0]=O.elements[0],S.__data[1]=O.elements[1],S.__data[2]=O.elements[2],S.__data[3]=O.elements[0],S.__data[4]=O.elements[3],S.__data[5]=O.elements[4],S.__data[6]=O.elements[5],S.__data[7]=O.elements[0],S.__data[8]=O.elements[6],S.__data[9]=O.elements[7],S.__data[10]=O.elements[8],S.__data[11]=O.elements[0]):(O.toArray(S.__data,q),q+=N.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,w,S.__data)}}t.bindBuffer(35345,null)}function g(v,_,x){const b=v.value;if(x[_]===void 0){if(typeof b=="number")x[_]=b;else{const T=Array.isArray(b)?b:[b],L=[];for(let S=0;S<T.length;S++)L.push(T[S].clone());x[_]=L}return!0}else if(typeof b=="number"){if(x[_]!==b)return x[_]=b,!0}else{const T=Array.isArray(x[_])?x[_]:[x[_]],L=Array.isArray(b)?b:[b];for(let S=0;S<T.length;S++){const w=T[S];if(w.equals(L[S])===!1)return w.copy(L[S]),!0}}return!1}function y(v){const _=v.uniforms;let x=0;const b=16;let T=0;for(let L=0,S=_.length;L<S;L++){const w=_[L],I={boundary:0,storage:0},q=Array.isArray(w.value)?w.value:[w.value];for(let Y=0,O=q.length;Y<O;Y++){const N=q[Y],B=p(N);I.boundary+=B.boundary,I.storage+=B.storage}if(w.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=x,L>0){T=x%b;const Y=b-T;T!==0&&Y-I.boundary<0&&(x+=b-T,w.__offset=x)}x+=I.storage}return T=x%b,T>0&&(x+=b-T),v.__size=x,v.__cache={},this}function p(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function c(v){const _=v.target;_.removeEventListener("dispose",c);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete a[_.id]}function m(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},a={}}return{bind:l,update:u,dispose:m}}function jM(){const t=ul("canvas");return t.style.display="block",t}function sd(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:jM(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,a=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,s=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let f;n!==null?f=n.getContextAttributes().alpha:f=t.alpha!==void 0?t.alpha:!1;let h=null,d=null;const g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ur,this.useLegacyLights=!0,this.toneMapping=Kn,this.toneMappingExposure=1;const p=this;let c=!1,m=0,v=0,_=null,x=-1,b=null;const T=new bt,L=new bt;let S=null,w=e.width,I=e.height,q=1,Y=null,O=null;const N=new bt(0,0,w,I),B=new bt(0,0,w,I);let Z=!1;const X=new Vg;let V=!1,J=!1,Q=null;const P=new Et,A=new U,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function G(){return _===null?q:1}let R=n;function ne(E,F){for(let W=0;W<E.length;W++){const z=E[W],$=e.getContext(z,F);if($!==null)return $}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rd}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",ye,!1),R===null){const F=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&F.shift(),R=ne(F,E),R===null)throw ne(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ee,se,oe,ge,Ee,Ae,Pe,De,Ze,qe,We,Ue,je,$e,Xe,C,M,H,re,ae,ce,xe,pe,K;function be(){ee=new nS(R),se=new Z3(R,ee,t),ee.init(se),xe=new FM(R,ee,se),oe=new OM(R,ee,se),ge=new aS,Ee=new MM,Ae=new zM(R,ee,oe,Ee,se,xe,ge),Pe=new Q3(p),De=new tS(p),Ze=new py(R,se),pe=new q3(R,ee,Ze,se),qe=new iS(R,Ze,ge,pe),We=new uS(R,qe,Ze,ge),re=new lS(R,se,Ae),C=new K3(Ee),Ue=new SM(p,Pe,De,ee,se,pe,C),je=new HM(p,Ee),$e=new bM,Xe=new PM(ee,se),H=new $3(p,Pe,De,oe,We,f,o),M=new NM(p,We,se),K=new WM(R,ge,se,oe),ae=new Y3(R,ee,ge,se),ce=new rS(R,ee,ge,se),ge.programs=Ue.programs,p.capabilities=se,p.extensions=ee,p.properties=Ee,p.renderLists=$e,p.shadowMap=M,p.state=oe,p.info=ge}be();const ve=new VM(p,R);this.xr=ve,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(w,I,!1))},this.getSize=function(E){return E.set(w,I)},this.setSize=function(E,F,W=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=E,I=F,e.width=Math.floor(E*q),e.height=Math.floor(F*q),W===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(w*q,I*q).floor()},this.setDrawingBufferSize=function(E,F,W){w=E,I=F,q=W,e.width=Math.floor(E*W),e.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(N)},this.setViewport=function(E,F,W,z){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,F,W,z),oe.viewport(T.copy(N).multiplyScalar(q).floor())},this.getScissor=function(E){return E.copy(B)},this.setScissor=function(E,F,W,z){E.isVector4?B.set(E.x,E.y,E.z,E.w):B.set(E,F,W,z),oe.scissor(L.copy(B).multiplyScalar(q).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(E){oe.setScissorTest(Z=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){O=E},this.getClearColor=function(E){return E.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(E=!0,F=!0,W=!0){let z=0;E&&(z|=16384),F&&(z|=256),W&&(z|=1024),R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",ye,!1),$e.dispose(),Xe.dispose(),Ee.dispose(),Pe.dispose(),De.dispose(),We.dispose(),pe.dispose(),K.dispose(),Ue.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",te),ve.removeEventListener("sessionend",de),Q&&(Q.dispose(),Q=null),me.stop()};function Te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),c=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),c=!1;const E=ge.autoReset,F=M.enabled,W=M.autoUpdate,z=M.needsUpdate,$=M.type;be(),ge.autoReset=E,M.enabled=F,M.autoUpdate=W,M.needsUpdate=z,M.type=$}function ye(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ge(E){const F=E.target;F.removeEventListener("dispose",Ge),rt(F)}function rt(E){gt(E),Ee.remove(E)}function gt(E){const F=Ee.get(E).programs;F!==void 0&&(F.forEach(function(W){Ue.releaseProgram(W)}),E.isShaderMaterial&&Ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,z,$,Me){F===null&&(F=k);const Le=$.isMesh&&$.matrixWorld.determinant()<0,Ie=kv(E,F,W,z,$);oe.setMaterial(z,Le);let ke=W.index,Ve=1;z.wireframe===!0&&(ke=qe.getWireframeAttribute(W),Ve=2);const Oe=W.drawRange,ze=W.attributes.position;let ct=Oe.start*Ve,Xt=(Oe.start+Oe.count)*Ve;Me!==null&&(ct=Math.max(ct,Me.start*Ve),Xt=Math.min(Xt,(Me.start+Me.count)*Ve)),ke!==null?(ct=Math.max(ct,0),Xt=Math.min(Xt,ke.count)):ze!=null&&(ct=Math.max(ct,0),Xt=Math.min(Xt,ze.count));const Fn=Xt-ct;if(Fn<0||Fn===1/0)return;pe.setup($,z,Ie,W,ke);let Fi,ft=ae;if(ke!==null&&(Fi=Ze.get(ke),ft=ce,ft.setIndex(Fi)),$.isMesh)z.wireframe===!0?(oe.setLineWidth(z.wireframeLinewidth*G()),ft.setMode(1)):ft.setMode(4);else if($.isLine){let Fe=z.linewidth;Fe===void 0&&(Fe=1),oe.setLineWidth(Fe*G()),$.isLineSegments?ft.setMode(1):$.isLineLoop?ft.setMode(2):ft.setMode(3)}else $.isPoints?ft.setMode(0):$.isSprite&&ft.setMode(4);if($.isInstancedMesh)ft.renderInstances(ct,Fn,$.count);else if(W.isInstancedBufferGeometry){const Fe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Gl=Math.min(W.instanceCount,Fe);ft.renderInstances(ct,Fn,Gl)}else ft.render(ct,Fn)},this.compile=function(E,F){function W(z,$,Me){z.transparent===!0&&z.side===pi&&z.forceSinglePass===!1?(z.side=Jt,z.needsUpdate=!0,an(z,$,Me),z.side=Di,z.needsUpdate=!0,an(z,$,Me),z.side=pi):an(z,$,Me)}d=Xe.get(E),d.init(),y.push(d),E.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(p.useLegacyLights),E.traverse(function(z){const $=z.material;if($)if(Array.isArray($))for(let Me=0;Me<$.length;Me++){const Le=$[Me];W(Le,E,z)}else W($,E,z)}),y.pop(),d=null};let D=null;function j(E){D&&D(E)}function te(){me.stop()}function de(){me.start()}const me=new Hg;me.setAnimationLoop(j),typeof self!="undefined"&&me.setContext(self),this.setAnimationLoop=function(E){D=E,ve.setAnimationLoop(E),E===null?me.stop():me.start()},ve.addEventListener("sessionstart",te),ve.addEventListener("sessionend",de),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(c===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(F),F=ve.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,F,_),d=Xe.get(E,y.length),d.init(),y.push(d),P.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X.setFromProjectionMatrix(P),J=this.localClippingEnabled,V=C.init(this.clippingPlanes,J),h=$e.get(E,g.length),h.init(),g.push(h),Ke(E,F,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Y,O),V===!0&&C.beginShadows();const W=d.state.shadowsArray;if(M.render(W,E,F),V===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(h,E),d.setupLights(p.useLegacyLights),F.isArrayCamera){const z=F.cameras;for(let $=0,Me=z.length;$<Me;$++){const Le=z[$];vt(h,E,Le,Le.viewport)}}else vt(h,E,F);_!==null&&(Ae.updateMultisampleRenderTarget(_),Ae.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(p,E,F),pe.resetDefaultState(),x=-1,b=null,y.pop(),y.length>0?d=y[y.length-1]:d=null,g.pop(),g.length>0?h=g[g.length-1]:h=null};function Ke(E,F,W,z){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){z&&A.setFromMatrixPosition(E.matrixWorld).applyMatrix4(P);const Le=We.update(E),Ie=E.material;Ie.visible&&h.push(E,Le,Ie,W,A.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==ge.render.frame&&(E.skeleton.update(),E.skeleton.frame=ge.render.frame),!E.frustumCulled||X.intersectsObject(E))){z&&A.setFromMatrixPosition(E.matrixWorld).applyMatrix4(P);const Le=We.update(E),Ie=E.material;if(Array.isArray(Ie)){const ke=Le.groups;for(let Ve=0,Oe=ke.length;Ve<Oe;Ve++){const ze=ke[Ve],ct=Ie[ze.materialIndex];ct&&ct.visible&&h.push(E,Le,ct,W,A.z,ze)}}else Ie.visible&&h.push(E,Le,Ie,W,A.z,null)}}const Me=E.children;for(let Le=0,Ie=Me.length;Le<Ie;Le++)Ke(Me[Le],F,W,z)}function vt(E,F,W,z){const $=E.opaque,Me=E.transmissive,Le=E.transparent;d.setupLightsView(W),V===!0&&C.setGlobalState(p.clippingPlanes,W),Me.length>0&&It($,F,W),z&&oe.viewport(T.copy(z)),$.length>0&&En($,F,W),Me.length>0&&En(Me,F,W),Le.length>0&&En(Le,F,W),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function It(E,F,W){const z=se.isWebGL2;Q===null&&(Q=new cr(1024,1024,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")?Po:lr,minFilter:Lo,samples:z&&a===!0?4:0}));const $=p.getRenderTarget();p.setRenderTarget(Q),p.clear();const Me=p.toneMapping;p.toneMapping=Kn,En(E,F,W),p.toneMapping=Me,Ae.updateMultisampleRenderTarget(Q),Ae.updateRenderTargetMipmap(Q),p.setRenderTarget($)}function En(E,F,W){const z=F.isScene===!0?F.overrideMaterial:null;for(let $=0,Me=E.length;$<Me;$++){const Le=E[$],Ie=Le.object,ke=Le.geometry,Ve=z===null?Le.material:z,Oe=Le.group;Ie.layers.test(W.layers)&&lt(Ie,F,W,ke,Ve,Oe)}}function lt(E,F,W,z,$,Me){E.onBeforeRender(p,F,W,z,$,Me),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(p,F,W,z,E,Me),$.transparent===!0&&$.side===pi&&$.forceSinglePass===!1?($.side=Jt,$.needsUpdate=!0,p.renderBufferDirect(W,F,z,$,E,Me),$.side=Di,$.needsUpdate=!0,p.renderBufferDirect(W,F,z,$,E,Me),$.side=pi):p.renderBufferDirect(W,F,z,$,E,Me),E.onAfterRender(p,F,W,z,$,Me)}function an(E,F,W){F.isScene!==!0&&(F=k);const z=Ee.get(E),$=d.state.lights,Me=d.state.shadowsArray,Le=$.state.version,Ie=Ue.getParameters(E,$.state,Me,F,W),ke=Ue.getProgramCacheKey(Ie);let Ve=z.programs;z.environment=E.isMeshStandardMaterial?F.environment:null,z.fog=F.fog,z.envMap=(E.isMeshStandardMaterial?De:Pe).get(E.envMap||z.environment),Ve===void 0&&(E.addEventListener("dispose",Ge),Ve=new Map,z.programs=Ve);let Oe=Ve.get(ke);if(Oe!==void 0){if(z.currentProgram===Oe&&z.lightsStateVersion===Le)return Tn(E,Ie),Oe}else Ie.uniforms=Ue.getUniforms(E),E.onBuild(W,Ie,p),E.onBeforeCompile(Ie,p),Oe=Ue.acquireProgram(Ie,ke),Ve.set(ke,Oe),z.uniforms=Ie.uniforms;const ze=z.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=C.uniform),Tn(E,Ie),z.needsLights=Ov(E),z.lightsStateVersion=Le,z.needsLights&&(ze.ambientLightColor.value=$.state.ambient,ze.lightProbe.value=$.state.probe,ze.directionalLights.value=$.state.directional,ze.directionalLightShadows.value=$.state.directionalShadow,ze.spotLights.value=$.state.spot,ze.spotLightShadows.value=$.state.spotShadow,ze.rectAreaLights.value=$.state.rectArea,ze.ltc_1.value=$.state.rectAreaLTC1,ze.ltc_2.value=$.state.rectAreaLTC2,ze.pointLights.value=$.state.point,ze.pointLightShadows.value=$.state.pointShadow,ze.hemisphereLights.value=$.state.hemi,ze.directionalShadowMap.value=$.state.directionalShadowMap,ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ze.spotShadowMap.value=$.state.spotShadowMap,ze.spotLightMatrix.value=$.state.spotLightMatrix,ze.spotLightMap.value=$.state.spotLightMap,ze.pointShadowMap.value=$.state.pointShadowMap,ze.pointShadowMatrix.value=$.state.pointShadowMatrix);const ct=Oe.getUniforms(),Xt=Os.seqWithValue(ct.seq,ze);return z.currentProgram=Oe,z.uniformsList=Xt,Oe}function Tn(E,F){const W=Ee.get(E);W.outputEncoding=F.outputEncoding,W.instancing=F.instancing,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function kv(E,F,W,z,$){F.isScene!==!0&&(F=k),Ae.resetTextureUnits();const Me=F.fog,Le=z.isMeshStandardMaterial?F.environment:null,Ie=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:ur,ke=(z.isMeshStandardMaterial?De:Pe).get(z.envMap||Le),Ve=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Oe=!!z.normalMap&&!!W.attributes.tangent,ze=!!W.morphAttributes.position,ct=!!W.morphAttributes.normal,Xt=!!W.morphAttributes.color,Fn=z.toneMapped?p.toneMapping:Kn,Fi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=Fi!==void 0?Fi.length:0,Fe=Ee.get(z),Gl=d.state.lights;if(V===!0&&(J===!0||E!==b)){const $t=E===b&&z.id===x;C.setState(z,E,$t)}let _t=!1;z.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Gl.state.version||Fe.outputEncoding!==Ie||$.isInstancedMesh&&Fe.instancing===!1||!$.isInstancedMesh&&Fe.instancing===!0||$.isSkinnedMesh&&Fe.skinning===!1||!$.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==ke||z.fog===!0&&Fe.fog!==Me||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==C.numPlanes||Fe.numIntersection!==C.numIntersection)||Fe.vertexAlphas!==Ve||Fe.vertexTangents!==Oe||Fe.morphTargets!==ze||Fe.morphNormals!==ct||Fe.morphColors!==Xt||Fe.toneMapping!==Fn||se.isWebGL2===!0&&Fe.morphTargetsCount!==ft)&&(_t=!0):(_t=!0,Fe.__version=z.version);let Ui=Fe.currentProgram;_t===!0&&(Ui=an(z,F,$));let Md=!1,ba=!1,Vl=!1;const kt=Ui.getUniforms(),Bi=Fe.uniforms;if(oe.useProgram(Ui.program)&&(Md=!0,ba=!0,Vl=!0),z.id!==x&&(x=z.id,ba=!0),Md||b!==E){if(kt.setValue(R,"projectionMatrix",E.projectionMatrix),se.logarithmicDepthBuffer&&kt.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),b!==E&&(b=E,ba=!0,Vl=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const $t=kt.map.cameraPosition;$t!==void 0&&$t.setValue(R,A.setFromMatrixPosition(E.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&kt.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||$.isSkinnedMesh)&&kt.setValue(R,"viewMatrix",E.matrixWorldInverse)}if($.isSkinnedMesh){kt.setOptional(R,$,"bindMatrix"),kt.setOptional(R,$,"bindMatrixInverse");const $t=$.skeleton;$t&&(se.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),kt.setValue(R,"boneTexture",$t.boneTexture,Ae),kt.setValue(R,"boneTextureSize",$t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Hl=W.morphAttributes;if((Hl.position!==void 0||Hl.normal!==void 0||Hl.color!==void 0&&se.isWebGL2===!0)&&re.update($,W,Ui),(ba||Fe.receiveShadow!==$.receiveShadow)&&(Fe.receiveShadow=$.receiveShadow,kt.setValue(R,"receiveShadow",$.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Bi.envMap.value=ke,Bi.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ba&&(kt.setValue(R,"toneMappingExposure",p.toneMappingExposure),Fe.needsLights&&Nv(Bi,Vl),Me&&z.fog===!0&&je.refreshFogUniforms(Bi,Me),je.refreshMaterialUniforms(Bi,z,q,I,Q),Os.upload(R,Fe.uniformsList,Bi,Ae)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Os.upload(R,Fe.uniformsList,Bi,Ae),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&kt.setValue(R,"center",$.center),kt.setValue(R,"modelViewMatrix",$.modelViewMatrix),kt.setValue(R,"normalMatrix",$.normalMatrix),kt.setValue(R,"modelMatrix",$.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const $t=z.uniformsGroups;for(let Wl=0,zv=$t.length;Wl<zv;Wl++)if(se.isWebGL2){const wd=$t[Wl];K.update(wd,Ui),K.bind(wd,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function Nv(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Ov(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,F,W){Ee.get(E.texture).__webglTexture=F,Ee.get(E.depthTexture).__webglTexture=W;const z=Ee.get(E);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=W===void 0,z.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,F){const W=Ee.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,W=0){_=E,m=F,v=W;let z=!0,$=null,Me=!1,Le=!1;if(E){const ke=Ee.get(E);ke.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(36160,null),z=!1):ke.__webglFramebuffer===void 0?Ae.setupRenderTarget(E):ke.__hasExternalTextures&&Ae.rebindTextures(E,Ee.get(E.texture).__webglTexture,Ee.get(E.depthTexture).__webglTexture);const Ve=E.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Le=!0);const Oe=Ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?($=Oe[F],Me=!0):se.isWebGL2&&E.samples>0&&Ae.useMultisampledRTT(E)===!1?$=Ee.get(E).__webglMultisampledFramebuffer:$=Oe,T.copy(E.viewport),L.copy(E.scissor),S=E.scissorTest}else T.copy(N).multiplyScalar(q).floor(),L.copy(B).multiplyScalar(q).floor(),S=Z;if(oe.bindFramebuffer(36160,$)&&se.drawBuffers&&z&&oe.drawBuffers(E,$),oe.viewport(T),oe.scissor(L),oe.setScissorTest(S),Me){const ke=Ee.get(E.texture);R.framebufferTexture2D(36160,36064,34069+F,ke.__webglTexture,W)}else if(Le){const ke=Ee.get(E.texture),Ve=F||0;R.framebufferTextureLayer(36160,36064,ke.__webglTexture,W||0,Ve)}x=-1},this.readRenderTargetPixels=function(E,F,W,z,$,Me,Le){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie){oe.bindFramebuffer(36160,Ie);try{const ke=E.texture,Ve=ke.format,Oe=ke.type;if(Ve!==Sn&&xe.convert(Ve)!==R.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Oe===Po&&(ee.has("EXT_color_buffer_half_float")||se.isWebGL2&&ee.has("EXT_color_buffer_float"));if(Oe!==lr&&xe.convert(Oe)!==R.getParameter(35738)&&!(Oe===er&&(se.isWebGL2||ee.has("OES_texture_float")||ee.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-z&&W>=0&&W<=E.height-$&&R.readPixels(F,W,z,$,xe.convert(Ve),xe.convert(Oe),Me)}finally{const ke=_!==null?Ee.get(_).__webglFramebuffer:null;oe.bindFramebuffer(36160,ke)}}},this.copyFramebufferToTexture=function(E,F,W=0){const z=Math.pow(2,-W),$=Math.floor(F.image.width*z),Me=Math.floor(F.image.height*z);Ae.setTexture2D(F,0),R.copyTexSubImage2D(3553,W,0,0,E.x,E.y,$,Me),oe.unbindTexture()},this.copyTextureToTexture=function(E,F,W,z=0){const $=F.image.width,Me=F.image.height,Le=xe.convert(W.format),Ie=xe.convert(W.type);Ae.setTexture2D(W,0),R.pixelStorei(37440,W.flipY),R.pixelStorei(37441,W.premultiplyAlpha),R.pixelStorei(3317,W.unpackAlignment),F.isDataTexture?R.texSubImage2D(3553,z,E.x,E.y,$,Me,Le,Ie,F.image.data):F.isCompressedTexture?R.compressedTexSubImage2D(3553,z,E.x,E.y,F.mipmaps[0].width,F.mipmaps[0].height,Le,F.mipmaps[0].data):R.texSubImage2D(3553,z,E.x,E.y,Le,Ie,F.image),z===0&&W.generateMipmaps&&R.generateMipmap(3553),oe.unbindTexture()},this.copyTextureToTexture3D=function(E,F,W,z,$=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=E.max.x-E.min.x+1,Le=E.max.y-E.min.y+1,Ie=E.max.z-E.min.z+1,ke=xe.convert(z.format),Ve=xe.convert(z.type);let Oe;if(z.isData3DTexture)Ae.setTexture3D(z,0),Oe=32879;else if(z.isDataArrayTexture)Ae.setTexture2DArray(z,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(37440,z.flipY),R.pixelStorei(37441,z.premultiplyAlpha),R.pixelStorei(3317,z.unpackAlignment);const ze=R.getParameter(3314),ct=R.getParameter(32878),Xt=R.getParameter(3316),Fn=R.getParameter(3315),Fi=R.getParameter(32877),ft=W.isCompressedTexture?W.mipmaps[0]:W.image;R.pixelStorei(3314,ft.width),R.pixelStorei(32878,ft.height),R.pixelStorei(3316,E.min.x),R.pixelStorei(3315,E.min.y),R.pixelStorei(32877,E.min.z),W.isDataTexture||W.isData3DTexture?R.texSubImage3D(Oe,$,F.x,F.y,F.z,Me,Le,Ie,ke,Ve,ft.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Oe,$,F.x,F.y,F.z,Me,Le,Ie,ke,ft.data)):R.texSubImage3D(Oe,$,F.x,F.y,F.z,Me,Le,Ie,ke,Ve,ft),R.pixelStorei(3314,ze),R.pixelStorei(32878,ct),R.pixelStorei(3316,Xt),R.pixelStorei(3315,Fn),R.pixelStorei(32877,Fi),$===0&&z.generateMipmaps&&R.generateMipmap(Oe),oe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ae.setTextureCube(E,0):E.isData3DTexture?Ae.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ae.setTexture2DArray(E,0):Ae.setTexture2D(E,0),oe.unbindTexture()},this.resetState=function(){m=0,v=0,_=null,oe.reset(),pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(sd.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}}});class XM extends sd{}XM.prototype.isWebGL1Renderer=!0;class $M extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class qM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=em(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=em();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function em(){return(typeof performance=="undefined"?Date:performance).now()}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rd}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rd);var ld={exports:{}},Ho={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YM=_e.exports,Yg=60103;Ho.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var tm=Symbol.for;Yg=tm("react.element"),Ho.Fragment=tm("react.fragment")}var ZM=YM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,KM=Object.prototype.hasOwnProperty,QM={key:!0,ref:!0,__self:!0,__source:!0};function Zg(t,e,n){var i,r={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)KM.call(e,i)&&!QM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Yg,type:t,key:a,ref:o,props:r,_owner:ZM.current}}Ho.jsx=Zg;Ho.jsxs=Zg;ld.exports=Ho;const ue=ld.exports.jsx,at=ld.exports.jsxs,JM=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ew=`
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
`,nm=8;function tw(t){let e=t.trim();e.startsWith("#")&&(e=e.slice(1));let n=255,i=255,r=255;return e.length===3?(n=parseInt(e[0]+e[0],16),i=parseInt(e[1]+e[1],16),r=parseInt(e[2]+e[2],16)):e.length===6&&(n=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16)),new U(n/255,i/255,r/255)}function nw({linesGradient:t,enabledWaves:e=["top","middle","bottom"],lineCount:n=[6],lineDistance:i=[5],topWavePosition:r,middleWavePosition:a,bottomWavePosition:o={x:2,y:-.7,rotate:-1},animationSpeed:s=1,interactive:l=!0,bendRadius:u=5,bendStrength:f=-.5,mouseDamping:h=.05,parallax:d=!0,parallaxStrength:g=.2,mixBlendMode:y="screen",throttleFrameRate:p=60}){const c=_e.exports.useRef(null),m=_e.exports.useRef(new He(-1e3,-1e3)),v=_e.exports.useRef(new He(-1e3,-1e3)),_=_e.exports.useRef(0),x=_e.exports.useRef(0),b=_e.exports.useRef(new He(0,0)),T=_e.exports.useRef(new He(0,0)),L=B=>{var X;if(typeof n=="number")return n;if(!e.includes(B))return 0;const Z=e.indexOf(B);return(X=n[Z])!=null?X:6},S=B=>{var X;if(typeof i=="number")return i;if(!e.includes(B))return .1;const Z=e.indexOf(B);return(X=i[Z])!=null?X:.1},w=e.includes("top")?L("top"):0,I=e.includes("middle")?L("middle"):0,q=e.includes("bottom")?L("bottom"):0,Y=e.includes("top")?S("top")*.01:.01,O=e.includes("middle")?S("middle")*.01:.01,N=e.includes("bottom")?S("bottom")*.01:.01;return _e.exports.useEffect(()=>{var Ee,Ae,Pe,De,Ze,qe,We,Ue,je;if(!c.current)return;const B=new $M,Z=new Wg(-1,1,1,-1,0,1);Z.position.z=1;const X=new sd({antialias:!0,alpha:!1});X.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),X.domElement.style.width="100%",X.domElement.style.height="100%",c.current.appendChild(X.domElement);const V={iTime:{value:0},iResolution:{value:new U(1,1,1)},animationSpeed:{value:s},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:w},middleLineCount:{value:I},bottomLineCount:{value:q},topLineDistance:{value:Y},middleLineDistance:{value:O},bottomLineDistance:{value:N},topWavePosition:{value:new U((Ee=r==null?void 0:r.x)!=null?Ee:10,(Ae=r==null?void 0:r.y)!=null?Ae:.5,(Pe=r==null?void 0:r.rotate)!=null?Pe:-.4)},middleWavePosition:{value:new U((De=a==null?void 0:a.x)!=null?De:5,(Ze=a==null?void 0:a.y)!=null?Ze:0,(qe=a==null?void 0:a.rotate)!=null?qe:.2)},bottomWavePosition:{value:new U((We=o==null?void 0:o.x)!=null?We:2,(Ue=o==null?void 0:o.y)!=null?Ue:-.7,(je=o==null?void 0:o.rotate)!=null?je:.4)},iMouse:{value:new He(-1e3,-1e3)},interactive:{value:l},bendRadius:{value:u},bendStrength:{value:f},bendInfluence:{value:0},parallax:{value:d},parallaxStrength:{value:g},parallaxOffset:{value:new He(0,0)},lineGradient:{value:Array.from({length:nm},()=>new U(1,1,1))},lineGradientCount:{value:0}};if(t&&t.length>0){const $e=t.slice(0,nm);V.lineGradientCount.value=$e.length,$e.forEach((Xe,C)=>{const M=tw(Xe);V.lineGradient.value[C].set(M.x,M.y,M.z)})}const J=new Ii({uniforms:V,vertexShader:JM,fragmentShader:ew}),Q=new kl(2,2),P=new Yn(Q,J);B.add(P);const A=new qM,k=()=>{const $e=c.current,Xe=$e.clientWidth||1,C=$e.clientHeight||1;X.setSize(Xe,C,!1);const M=X.domElement.width,H=X.domElement.height;V.iResolution.value.set(M,H,1)};k();const G=typeof ResizeObserver!="undefined"?new ResizeObserver(k):null;G&&c.current&&G.observe(c.current);const R=$e=>{const Xe=X.domElement.getBoundingClientRect(),C=$e.clientX-Xe.left,M=$e.clientY-Xe.top,H=X.getPixelRatio();if(m.current.set(C*H,(Xe.height-M)*H),_.current=1,d){const re=Xe.width/2,ae=Xe.height/2,ce=(C-re)/Xe.width,xe=-(M-ae)/Xe.height;b.current.set(ce*g,xe*g)}},ne=()=>{_.current=0};l&&(X.domElement.addEventListener("pointermove",R),X.domElement.addEventListener("pointerleave",ne));let ee=0,se=0;const oe=p?1e3/p:0,ge=$e=>{if(oe>0){if($e-se<oe){ee=requestAnimationFrame(ge);return}se=$e}V.iTime.value=A.getElapsedTime(),l&&(v.current.lerp(m.current,h),V.iMouse.value.copy(v.current),x.current+=(_.current-x.current)*h,V.bendInfluence.value=x.current),d&&(T.current.lerp(b.current,h),V.parallaxOffset.value.copy(T.current)),X.render(B,Z),ee=requestAnimationFrame(ge)};return ee=requestAnimationFrame(ge),()=>{cancelAnimationFrame(ee),G&&c.current&&G.disconnect(),l&&(X.domElement.removeEventListener("pointermove",R),X.domElement.removeEventListener("pointerleave",ne)),Q.dispose(),J.dispose(),X.dispose(),X.domElement.parentElement&&X.domElement.parentElement.removeChild(X.domElement)}},[t,e,n,i,r,a,o,s,l,u,f,h,d,g,p]),ue("div",{ref:c,className:"floating-lines-container",style:{mixBlendMode:y}})}const Nr={SMOOTH_TAU:.05,MIN_COPIES:2,COPY_HEADROOM:1},$u=t=>typeof t=="number"?`${t}px`:t!=null?t:void 0,iw=(t,e,n)=>{_e.exports.useEffect(()=>{if(!window.ResizeObserver){const r=()=>t();return window.addEventListener("resize",r),t(),()=>window.removeEventListener("resize",r)}const i=e.map(r=>{if(!r.current)return null;const a=new ResizeObserver(t);return a.observe(r.current),a});return t(),()=>{i.forEach(r=>r==null?void 0:r.disconnect())}},[t,e,n])},rw=(t,e,n)=>{_e.exports.useEffect(()=>{var o,s;const i=(s=(o=t.current)==null?void 0:o.querySelectorAll("img"))!=null?s:[];if(i.length===0){e();return}let r=i.length;const a=()=>{r-=1,r===0&&e()};return i.forEach(l=>{const u=l;u.complete?a():(u.addEventListener("load",a,{once:!0}),u.addEventListener("error",a,{once:!0}))}),()=>{i.forEach(l=>{l.removeEventListener("load",a),l.removeEventListener("error",a)})}},[e,t,n])},aw=(t,e,n,i,r,a,o)=>{const s=_e.exports.useRef(null),l=_e.exports.useRef(null),u=_e.exports.useRef(0),f=_e.exports.useRef(0);_e.exports.useEffect(()=>{const h=t.current;if(!h)return;const d=o?i:n;if(d>0){u.current=(u.current%d+d)%d;const y=o?`translate3d(0, ${-u.current}px, 0)`:`translate3d(${-u.current}px, 0, 0)`;h.style.transform=y}const g=y=>{l.current===null&&(l.current=y);const p=Math.max(0,y-l.current)/1e3;l.current=y;const c=r&&a!==void 0?a:e,m=1-Math.exp(-p/Nr.SMOOTH_TAU);if(f.current+=(c-f.current)*m,d>0){let v=u.current+f.current*p;v=(v%d+d)%d,u.current=v;const _=o?`translate3d(0, ${-u.current}px, 0)`:`translate3d(${-u.current}px, 0, 0)`;h.style.transform=_}s.current=requestAnimationFrame(g)};return s.current=requestAnimationFrame(g),()=>{s.current!==null&&(cancelAnimationFrame(s.current),s.current=null),l.current=null}},[e,n,i,r,a,o,t])},Kg=_e.exports.memo(({logos:t,speed:e=120,direction:n="left",width:i="100%",logoHeight:r=28,gap:a=32,pauseOnHover:o,hoverSpeed:s,fadeOut:l=!1,fadeOutColor:u,scaleOnHover:f=!1,renderItem:h,ariaLabel:d="Partner logos",className:g,style:y})=>{const p=_e.exports.useRef(null),c=_e.exports.useRef(null),m=_e.exports.useRef(null),[v,_]=_e.exports.useState(0),[x,b]=_e.exports.useState(0),[T,L]=_e.exports.useState(Nr.MIN_COPIES),[S,w]=_e.exports.useState(!1),I=_e.exports.useMemo(()=>{if(o!==!1){if(s!==void 0)return s;if(o===!0)return 0}},[s,o]),q=n==="up"||n==="down",Y=_e.exports.useMemo(()=>{const P=Math.abs(e);let A;q?A=n==="up"?1:-1:A=n==="left"?1:-1;const k=e<0?-1:1;return P*A*k},[e,n,q]),O=_e.exports.useCallback(()=>{var R,ne,ee,se,oe,ge,Ee,Ae,Pe,De,Ze,qe;const P=(ne=(R=p.current)==null?void 0:R.clientWidth)!=null?ne:0,A=(se=(ee=m.current)==null?void 0:ee.getBoundingClientRect)==null?void 0:se.call(ee),k=(oe=A==null?void 0:A.width)!=null?oe:0,G=(ge=A==null?void 0:A.height)!=null?ge:0;if(q){const We=(Pe=(Ae=(Ee=p.current)==null?void 0:Ee.parentElement)==null?void 0:Ae.clientHeight)!=null?Pe:0;if(p.current&&We>0){const Ue=Math.ceil(We);p.current.style.height!==`${Ue}px`&&(p.current.style.height=`${Ue}px`)}if(G>0){b(Math.ceil(G));const Ue=(qe=(Ze=(De=p.current)==null?void 0:De.clientHeight)!=null?Ze:We)!=null?qe:G,je=Math.ceil(Ue/G)+Nr.COPY_HEADROOM;L(Math.max(Nr.MIN_COPIES,je))}}else if(k>0){_(Math.ceil(k));const We=Math.ceil(P/k)+Nr.COPY_HEADROOM;L(Math.max(Nr.MIN_COPIES,We))}},[q]);iw(O,[p,m],[t,a,r,q]),rw(m,O,[t,a,r,q]),aw(c,Y,v,x,S,I,q);const N=_e.exports.useMemo(()=>({"--logoloop-gap":`${a}px`,"--logoloop-logoHeight":`${r}px`,...u&&{"--logoloop-fadeColor":u}}),[a,r,u]),B=_e.exports.useMemo(()=>["logoloop",q?"logoloop--vertical":"logoloop--horizontal",l&&"logoloop--fade",f&&"logoloop--scale-hover",g].filter(Boolean).join(" "),[q,l,f,g]),Z=_e.exports.useCallback(()=>{I!==void 0&&w(!0)},[I]),X=_e.exports.useCallback(()=>{I!==void 0&&w(!1)},[I]),V=_e.exports.useCallback((P,A)=>{var ee,se,oe;if(h)return ue("li",{className:"logoloop__item",role:"listitem",children:h(P,A)},A);const k="node"in P,G=k?ue("span",{className:"logoloop__node","aria-hidden":!!P.href&&!P.ariaLabel,children:P.node}):ue("img",{src:P.src,srcSet:P.srcSet,sizes:P.sizes,width:P.width,height:P.height,alt:(ee=P.alt)!=null?ee:"",title:P.title,loading:"lazy",decoding:"async",draggable:!1}),R=k?(se=P.ariaLabel)!=null?se:P.title:(oe=P.alt)!=null?oe:P.title,ne=P.href?ue("a",{className:"logoloop__link",href:P.href,"aria-label":R||"logo link",target:"_blank",rel:"noreferrer noopener",children:G}):G;return ue("li",{className:"logoloop__item",role:"listitem",children:ne},A)},[h]),J=_e.exports.useMemo(()=>Array.from({length:T},(P,A)=>ue("ul",{className:"logoloop__list",role:"list","aria-hidden":A>0,ref:A===0?m:void 0,children:t.map((k,G)=>V(k,`${A}-${G}`))},`copy-${A}`)),[T,t,V]),Q=_e.exports.useMemo(()=>{var P;return{width:q?$u(i)==="100%"?void 0:$u(i):(P=$u(i))!=null?P:"100%",...N,...y}},[i,N,y,q]);return ue("div",{ref:p,className:B,style:Q,role:"region","aria-label":d,onMouseEnter:Z,onMouseLeave:X,children:ue("div",{className:"logoloop__track",ref:c,children:J})})});Kg.displayName="LogoLoop";var Qg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},im=bn.createContext&&bn.createContext(Qg),ow=["attr","size","title"];function sw(t,e){if(t==null)return{};var n=lw(t,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function lw(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function cl(){return cl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},cl.apply(this,arguments)}function rm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function fl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rm(Object(n),!0).forEach(function(i){uw(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rm(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function uw(t,e,n){return e=cw(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function cw(t){var e=fw(t,"string");return typeof e=="symbol"?e:e+""}function fw(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Jg(t){return t&&t.map((e,n)=>bn.createElement(e.tag,fl({key:n},e.attr),Jg(e.child)))}function jt(t){return e=>bn.createElement(dw,cl({attr:fl({},t.attr)},e),Jg(t.child))}function dw(t){var e=n=>{var{attr:i,size:r,title:a}=t,o=sw(t,ow),s=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),bn.createElement("svg",cl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,o,{className:l,style:fl(fl({color:t.color||n.color},n.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&bn.createElement("title",null,a),t.children)};return im!==void 0?bn.createElement(im.Consumer,null,n=>e(n)):e(Qg)}function hw(t){return jt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"},child:[]}]})(t)}function pw(t){return jt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"},child:[]}]})(t)}function mw(t){return jt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"},child:[]}]})(t)}function gw(t){return jt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"},child:[]}]})(t)}function vw(t){return jt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(t)}function _w(t){return jt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"},child:[]}]})(t)}function xw(t){return jt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.412 4.412h-8.82a7.588 7.588 0 0 0-.008 15.176h8.828a7.588 7.588 0 0 0 0-15.176zm-.193 12.502H7.786a4.915 4.915 0 0 1 0-9.828h8.433a4.914 4.914 0 1 1 0 9.828z"},child:[]}]})(t)}function yw(t){return jt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"},child:[]}]})(t)}function Sw(t){return jt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(t)}function Mw(t){return jt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.8537 1.4158a10.4504 10.4504 0 0 1-1.284 2.2471A11.9666 11.9666 0 1 0 3.8518 20.7757l.4445.3951a11.9543 11.9543 0 0 0 19.6316-8.2971c.3457-3.0126-.568-6.8649-2.0743-11.458zM5.5805 20.8745a1.0174 1.0174 0 1 1-.1482-1.4323 1.0396 1.0396 0 0 1 .1482 1.4323zm16.1991-3.5806c-2.9385 3.9263-9.2601 2.5928-13.2852 2.7904 0 0-.7161.0494-1.4323.1481 0 0 .2717-.1234.6174-.2469 2.8398-.9877 4.1732-1.1853 5.9018-2.0743 3.2349-1.6545 6.4698-5.2844 7.1118-9.0379-1.2347 3.6053-4.9881 6.7167-8.3959 7.9761-2.3459.8643-6.5685 1.7039-6.5685 1.7039l-.1729-.0988c-2.8645-1.4076-2.9632-7.6304 2.2718-9.6306 2.2966-.889 4.4696-.395 6.9637-.9877 2.6422-.6174 5.7043-2.5929 6.939-5.1857 1.3828 4.1732 3.062 10.643.0493 14.6434z"},child:[]}]})(t)}function ww(t){return jt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z"},child:[]}]})(t)}function bw(t){return jt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c6.616 0 12-5.383 12-12S18.616 0 12 0zm0 1.144c5.995 0 10.856 4.86 10.856 10.856 0 5.995-4.86 10.856-10.856 10.856-5.996 0-10.856-4.86-10.856-10.856C1.144 6.004 6.004 1.144 12 1.144zM8.37 5.868a6.707 6.707 0 0 0-.423.005c-.983.056-1.573.517-1.735 1.472-.115.665-.096 1.348-.143 2.017-.013.35-.05.697-.115 1.038-.134.609-.397.798-1.016.83a2.65 2.65 0 0 0-.244.042v1.463c1.126.055 1.278.452 1.37 1.629.033.429-.013.858.015 1.287.018.406.073.808.156 1.2.259 1.075 1.307 1.435 2.575 1.218v-1.283c-.203 0-.383.005-.558 0-.43-.013-.591-.12-.632-.535-.056-.535-.042-1.08-.075-1.62-.064-1.001-.175-1.988-1.153-2.625.503-.37.868-.812.983-1.398.083-.41.134-.821.166-1.237.028-.415-.023-.84.014-1.25.06-.665.102-.937.9-.91.12 0 .235-.017.369-.027v-1.31c-.16 0-.31-.004-.454-.006zm7.593.009a4.247 4.247 0 0 0-.813.06v1.274c.245 0 .434 0 .623.005.328.004.577.13.61.494.032.332.031.669.064 1.006.065.669.101 1.347.217 2.007.102.544.475.95.941 1.283-.817.549-1.057 1.333-1.098 2.215-.023.604-.037 1.213-.069 1.822-.028.554-.222.734-.78.748-.157.004-.31.018-.484.028v1.305c.327 0 .627.019.927 0 .932-.055 1.495-.507 1.68-1.412.078-.498.124-1 .138-1.504.032-.461.028-.927.074-1.384.069-.715.397-1.01 1.112-1.057a.972.972 0 0 0 .199-.046v-1.463c-.12-.014-.204-.027-.291-.032-.536-.023-.804-.203-.937-.71a5.146 5.146 0 0 1-.152-.993c-.037-.618-.033-1.241-.074-1.86-.08-1.192-.794-1.753-1.887-1.786zm-6.89 5.28a.844.844 0 0 0-.083 1.684h.055a.83.83 0 0 0 .877-.78v-.046a.845.845 0 0 0-.83-.858zm2.911 0a.808.808 0 0 0-.834.78c0 .027 0 .05.004.078 0 .503.342.826.859.826.507 0 .826-.332.826-.853-.005-.503-.342-.836-.855-.831zm2.963 0a.861.861 0 0 0-.876.835c0 .47.378.849.849.849h.009c.425.074.853-.337.881-.83.023-.457-.392-.854-.863-.854z"},child:[]}]})(t)}function Ew(t){return jt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(t)}function Tw(t){return jt({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"},child:[]}]})(t)}const Cw="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",Wa={INITIAL_DURATION:1200,INITIAL_X_OFFSET:70,INITIAL_Y_OFFSET:60,DEVICE_BETA_OFFSET:20,ENTER_TRANSITION_MS:180},ja=(t,e=0,n=100)=>Math.min(Math.max(t,e),n),Xc=(t,e=3)=>parseFloat(t.toFixed(e)),am=(t,e,n,i,r)=>Xc(i+(r-i)*(t-e)/(n-e)),Aw=({avatarUrl:t="/avatar/IMG_6291.png",iconUrl:e="/avatar/dev.png",grainUrl:n="",innerGradient:i,behindGlowEnabled:r=!0,behindGlowColor:a,behindGlowSize:o,className:s="",enableTilt:l=!0,enableMobileTilt:u=!0,mobileTiltSensitivity:f=5,miniAvatarUrl:h,name:d="Michele Sanfilippo",title:g="Software Engineer",handle:y="michelesanfilippo",status:p="I build stuff.",contactText:c="Contact",showUserInfo:m=!0,onContactClick:v})=>{const _=_e.exports.useRef(null),x=_e.exports.useRef(null),b=_e.exports.useRef(null),T=_e.exports.useRef(null),[L,S]=_e.exports.useState(!1),w=_e.exports.useMemo(()=>{if(!l)return null;let P=null,A=!1,k=0,G=0,R=0,ne=0,ee=0;const se=.14,oe=.6;let ge=0;const Ee=(De,Ze)=>{const qe=x.current,We=_.current;if(!qe||!We)return;const Ue=qe.clientWidth||1,je=qe.clientHeight||1,$e=ja(100/Ue*De),Xe=ja(100/je*Ze),C=$e-50,M=Xe-50,H={"--pointer-x":`${$e}%`,"--pointer-y":`${Xe}%`,"--background-x":`${am($e,0,100,35,65)}%`,"--background-y":`${am(Xe,0,100,35,65)}%`,"--pointer-from-center":`${ja(Math.hypot(Xe-50,$e-50)/50,0,1)}`,"--pointer-from-top":`${Xe/100}`,"--pointer-from-left":`${$e/100}`,"--rotate-x":`${Xc(-(C/5))}deg`,"--rotate-y":`${Xc(M/4)}deg`};for(const[re,ae]of Object.entries(H))We.style.setProperty(re,ae)},Ae=De=>{if(!A)return;k===0&&(k=De);const Ze=(De-k)/1e3;k=De;const qe=De<ge?oe:se,We=1-Math.exp(-Ze/qe);G+=(ne-G)*We,R+=(ee-R)*We,Ee(G,R),Math.abs(ne-G)>.1||Math.abs(ee-R)>.1?P=requestAnimationFrame(Ae):(A=!1,k=0,P&&(cancelAnimationFrame(P),P=null))},Pe=()=>{A||(A=!0,k=0,P=requestAnimationFrame(Ae))};return{setImmediate(De,Ze){G=De,R=Ze,Ee(G,R)},setTarget(De,Ze){ne=De,ee=Ze,Pe()},toCenter(){const De=x.current;!De||this.setTarget(De.clientWidth/2,De.clientHeight/2)},beginInitial(De){ge=performance.now()+De,Pe()},getCurrent(){return{x:G,y:R,tx:ne,ty:ee}},cancel(){P&&cancelAnimationFrame(P),P=null,A=!1,k=0}}},[l]),I=(P,A)=>{const k=A.getBoundingClientRect();return{x:P.clientX-k.left,y:P.clientY-k.top}},q=_e.exports.useCallback(P=>{const A=x.current;if(!A||!w)return;const{x:k,y:G}=I(P,A);w.setTarget(k,G)},[w]),Y=_e.exports.useCallback(P=>{const A=x.current;if(!A||!w)return;A.classList.add("active"),A.classList.add("entering"),b.current&&window.clearTimeout(b.current),b.current=window.setTimeout(()=>{A.classList.remove("entering")},Wa.ENTER_TRANSITION_MS);const{x:k,y:G}=I(P,A);w.setTarget(k,G)},[w]),O=_e.exports.useCallback(()=>{const P=x.current;if(!P||!w)return;w.toCenter();const A=()=>{const{x:k,y:G,tx:R,ty:ne}=w.getCurrent();Math.hypot(R-k,ne-G)<.6?(P.classList.remove("active"),T.current=null):T.current=requestAnimationFrame(A)};T.current&&cancelAnimationFrame(T.current),T.current=requestAnimationFrame(A)},[w]),N=_e.exports.useCallback(P=>{const A=x.current;if(!A||!w)return;const{beta:k,gamma:G}=P;if(k==null||G==null)return;const R=A.clientWidth/2,ne=A.clientHeight/2,ee=ja(R+G*f,0,A.clientWidth),se=ja(ne+(k-Wa.DEVICE_BETA_OFFSET)*f,0,A.clientHeight);w.setTarget(ee,se)},[w,f]);_e.exports.useEffect(()=>{if(!l||!w)return;const P=x.current;if(!P)return;const A=q,k=Y,G=O,R=N;P.addEventListener("pointerenter",k),P.addEventListener("pointermove",A),P.addEventListener("pointerleave",G);const ne=()=>{if(!u||location.protocol!=="https:")return;const oe=window.DeviceMotionEvent;oe&&typeof oe.requestPermission=="function"?oe.requestPermission().then(ge=>{ge==="granted"&&window.addEventListener("deviceorientation",R)}).catch(console.error):window.addEventListener("deviceorientation",R)};P.addEventListener("click",ne);const ee=(P.clientWidth||0)-Wa.INITIAL_X_OFFSET,se=Wa.INITIAL_Y_OFFSET;return w.setImmediate(ee,se),w.toCenter(),w.beginInitial(Wa.INITIAL_DURATION),()=>{P.removeEventListener("pointerenter",k),P.removeEventListener("pointermove",A),P.removeEventListener("pointerleave",G),P.removeEventListener("click",ne),window.removeEventListener("deviceorientation",R),b.current&&window.clearTimeout(b.current),T.current&&cancelAnimationFrame(T.current),w.cancel(),P.classList.remove("entering")}},[l,u,w,q,Y,O,N]);const B=_e.exports.useMemo(()=>({"--icon":e?`url(${e})`:"none","--grain":n?`url(${n})`:"none","--inner-gradient":i!=null?i:Cw,"--behind-glow-color":a!=null?a:"rgba(125, 190, 255, 0.67)","--behind-glow-size":o!=null?o:"50%"}),[e,n,i,a,o]),Z=_e.exports.useCallback(()=>{v==null||v()},[v]),X=_e.exports.useCallback(()=>{S(!0)},[]),V=_e.exports.useCallback(()=>{S(!1)},[]),J=_e.exports.useMemo(()=>L?45:60,[L]),Q=_e.exports.useMemo(()=>[{node:ue(Tw,{}),title:"Java"},{node:ue(Mw,{}),title:"Spring"},{node:ue(ww,{}),title:"Spring Boot"},{node:ue(gw,{}),title:"HTML"},{node:ue(hw,{}),title:"CSS"},{node:ue(Ew,{}),title:"TypeScript"},{node:ue(vw,{}),title:"JavaScript"},{node:ue(Sw,{}),title:"React"},{node:ue(_w,{}),title:"Node.js"},{node:ue(pw,{}),title:"Git"},{node:ue(mw,{}),title:"GitLab"},{node:ue(xw,{}),title:"Oracle"},{node:ue(bw,{}),title:"Swagger"},{node:ue(yw,{}),title:"Postman"}],[]);return at("div",{ref:_,className:`pc-card-wrapper ${s}`.trim(),style:B,onMouseEnter:X,onMouseLeave:V,children:[r&&ue("div",{className:"pc-behind"}),ue("div",{ref:x,className:"pc-card-shell",children:ue("section",{className:"pc-card",children:at("div",{className:"pc-inside",children:[ue("div",{className:"pc-shine"}),ue("div",{className:"pc-glare"}),at("div",{className:"pc-content pc-avatar-content",children:[ue("img",{className:"avatar",src:t,alt:`${d||"User"} avatar`,loading:"lazy",onError:P=>{const A=P.target;A.style.display="none"}}),m&&at("div",{className:"pc-user-info",children:[at("div",{className:"pc-user-details",children:[ue("div",{className:"pc-mini-avatar",children:ue("img",{src:h||t,alt:`${d||"User"} mini avatar`,loading:"lazy",onError:P=>{const A=P.target;A.style.opacity="0.5",A.src=t}})}),at("div",{className:"pc-user-text",children:[at("div",{className:"pc-handle",children:["@",y]}),ue("div",{className:"pc-status",children:p})]})]}),ue("button",{className:"pc-contact-btn",onClick:Z,style:{pointerEvents:"auto"},type:"button","aria-label":`Contact ${d||"user"}`,children:c})]})]}),ue("div",{className:"pc-content",children:at("div",{className:"pc-details",children:[ue("h3",{children:d}),ue("p",{children:g}),ue("div",{className:"pc-logo-loop",children:ue(Kg,{logos:Q,speed:J,direction:"left",logoHeight:26,gap:60,pauseOnHover:!1,scaleOnHover:!0,fadeOut:!1,fadeOutColor:"rgba(0, 0, 0, 0.9)",ariaLabel:"Tech stack"})})]})})]})})})]})},Lw=bn.memo(Aw);const ws=({children:t,className:e="",spotlightColor:n="rgba(255, 255, 255, 0.25)"})=>{const i=_e.exports.useRef(null),[r,a]=_e.exports.useState(!1);return ue("div",{ref:i,onMouseMove:u=>{if(!i.current)return;const f=i.current.getBoundingClientRect(),h=u.clientX-f.left,d=u.clientY-f.top,g=f.width/2,y=f.height/2,p=(d-y)/y*5,c=(h-g)/g*-5;i.current.style.setProperty("--mouse-x",`${h}px`),i.current.style.setProperty("--mouse-y",`${d}px`),i.current.style.setProperty("--spotlight-color",n),i.current.style.setProperty("--rotate-x",`${p}deg`),i.current.style.setProperty("--rotate-y",`${c}deg`)},onMouseEnter:()=>{a(!0)},onMouseLeave:()=>{a(!1),i.current&&(i.current.style.setProperty("--rotate-x","0deg"),i.current.style.setProperty("--rotate-y","0deg"))},className:`card-spotlight ${r?"hovered":""} ${e}`,children:t})};/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function om(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function fe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?om(Object(n),!0).forEach(function(i){Dw(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):om(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function dl(t){return dl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dl(t)}function Pw(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function sm(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Rw(t,e,n){return e&&sm(t.prototype,e),n&&sm(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Dw(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ud(t,e){return kw(t)||Ow(t,e)||ev(t,e)||Fw()}function Ol(t){return Iw(t)||Nw(t)||ev(t)||zw()}function Iw(t){if(Array.isArray(t))return $c(t)}function kw(t){if(Array.isArray(t))return t}function Nw(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ow(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,a=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){a=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(a)throw s}}return i}}function ev(t,e){if(!!t){if(typeof t=="string")return $c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $c(t,e)}}function $c(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function zw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var lm=function(){},cd={},tv={},nv=null,iv={mark:lm,measure:lm};try{typeof window!="undefined"&&(cd=window),typeof document!="undefined"&&(tv=document),typeof MutationObserver!="undefined"&&(nv=MutationObserver),typeof performance!="undefined"&&(iv=performance)}catch{}var Uw=cd.navigator||{},um=Uw.userAgent,cm=um===void 0?"":um,ki=cd,tt=tv,fm=nv,bs=iv;ki.document;var ii=!!tt.documentElement&&!!tt.head&&typeof tt.addEventListener=="function"&&typeof tt.createElement=="function",rv=~cm.indexOf("MSIE")||~cm.indexOf("Trident/"),Jn="___FONT_AWESOME___",qc=16,av="fa",ov="svg-inline--fa",fr="data-fa-i2svg",Yc="data-fa-pseudo-element",Bw="data-fa-pseudo-element-pending",fd="data-prefix",dd="data-icon",dm="fontawesome-i2svg",Gw="async",Vw=["HTML","HEAD","STYLE","SCRIPT"],sv=function(){try{return!0}catch{return!1}}(),hd={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},hl={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},lv={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Hw={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Ww=/fa[srltdbk\-\ ]/,uv="fa-layers-text",jw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Xw={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},cv=[1,2,3,4,5,6,7,8,9,10],$w=cv.concat([11,12,13,14,15,16,17,18,19,20]),qw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],tr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Yw=[].concat(Ol(Object.keys(hl)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",tr.GROUP,tr.SWAP_OPACITY,tr.PRIMARY,tr.SECONDARY]).concat(cv.map(function(t){return"".concat(t,"x")})).concat($w.map(function(t){return"w-".concat(t)})),fv=ki.FontAwesomeConfig||{};function Zw(t){var e=tt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Kw(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(tt&&typeof tt.querySelector=="function"){var Qw=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Qw.forEach(function(t){var e=ud(t,2),n=e[0],i=e[1],r=Kw(Zw(n));r!=null&&(fv[i]=r)})}var Jw={familyPrefix:av,styleDefault:"solid",replacementClass:ov,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},ho=fe(fe({},Jw),fv);ho.autoReplaceSvg||(ho.observeMutations=!1);var Se={};Object.keys(ho).forEach(function(t){Object.defineProperty(Se,t,{enumerable:!0,set:function(n){ho[t]=n,zs.forEach(function(i){return i(Se)})},get:function(){return ho[t]}})});ki.FontAwesomeConfig=Se;var zs=[];function eb(t){return zs.push(t),function(){zs.splice(zs.indexOf(t),1)}}var li=qc,In={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tb(t){if(!(!t||!ii)){var e=tt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=tt.head.childNodes,i=null,r=n.length-1;r>-1;r--){var a=n[r],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=a)}return tt.head.insertBefore(e,i),t}}var nb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Do(){for(var t=12,e="";t-- >0;)e+=nb[Math.random()*62|0];return e}function wa(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function pd(t){return t.classList?wa(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function dv(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ib(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(dv(t[n]),'" ')},"").trim()}function zl(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function md(t){return t.size!==In.size||t.x!==In.x||t.y!==In.y||t.rotate!==In.rotate||t.flipX||t.flipY}function rb(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:u}}function ab(t){var e=t.transform,n=t.width,i=n===void 0?qc:n,r=t.height,a=r===void 0?qc:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&rv?l+="translate(".concat(e.x/li-i/2,"em, ").concat(e.y/li-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/li,"em), calc(-50% + ").concat(e.y/li,"em)) "):l+="translate(".concat(e.x/li,"em, ").concat(e.y/li,"em) "),l+="scale(".concat(e.size/li*(e.flipX?-1:1),", ").concat(e.size/li*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var ob=`:root, :host {
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
}`;function hv(){var t=av,e=ov,n=Se.familyPrefix,i=Se.replacementClass,r=ob;if(n!==t||i!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(i))}return r}var hm=!1;function qu(){Se.autoAddCss&&!hm&&(tb(hv()),hm=!0)}var sb={mixout:function(){return{dom:{css:hv,insertCss:qu}}},hooks:function(){return{beforeDOMElementCreation:function(){qu()},beforeI2svg:function(){qu()}}}},ei=ki||{};ei[Jn]||(ei[Jn]={});ei[Jn].styles||(ei[Jn].styles={});ei[Jn].hooks||(ei[Jn].hooks={});ei[Jn].shims||(ei[Jn].shims=[]);var wn=ei[Jn],pv=[],lb=function t(){tt.removeEventListener("DOMContentLoaded",t),pl=1,pv.map(function(e){return e()})},pl=!1;ii&&(pl=(tt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(tt.readyState),pl||tt.addEventListener("DOMContentLoaded",lb));function ub(t){!ii||(pl?setTimeout(t,0):pv.push(t))}function Wo(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,a=r===void 0?[]:r;return typeof t=="string"?dv(t):"<".concat(e," ").concat(ib(i),">").concat(a.map(Wo).join(""),"</").concat(e,">")}function pm(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var cb=function(e,n){return function(i,r,a,o){return e.call(n,i,r,a,o)}},Yu=function(e,n,i,r){var a=Object.keys(e),o=a.length,s=r!==void 0?cb(n,r):n,l,u,f;for(i===void 0?(l=1,f=e[a[0]]):(l=0,f=i);l<o;l++)u=a[l],f=s(f,e[u],u,e);return f};function fb(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((r&1023)<<10)+(a&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Zc(t){var e=fb(t);return e.length===1?e[0].toString(16):null}function db(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function mm(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function Kc(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,a=mm(e);typeof wn.hooks.addPack=="function"&&!r?wn.hooks.addPack(t,mm(e)):wn.styles[t]=fe(fe({},wn.styles[t]||{}),a),t==="fas"&&Kc("fa",e)}var po=wn.styles,hb=wn.shims,pb=Object.values(lv),gd=null,mv={},gv={},vv={},_v={},xv={},mb=Object.keys(hd);function gb(t){return~Yw.indexOf(t)}function vb(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!gb(r)?r:null}var yv=function(){var e=function(a){return Yu(po,function(o,s,l){return o[l]=Yu(s,a,{}),o},{})};mv=e(function(r,a,o){if(a[3]&&(r[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),gv=e(function(r,a,o){if(r[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),xv=e(function(r,a,o){var s=a[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in po||Se.autoFetchSvg,i=Yu(hb,function(r,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});vv=i.names,_v=i.unicodes,gd=Fl(Se.styleDefault)};eb(function(t){gd=Fl(t.styleDefault)});yv();function vd(t,e){return(mv[t]||{})[e]}function _b(t,e){return(gv[t]||{})[e]}function Hr(t,e){return(xv[t]||{})[e]}function Sv(t){return vv[t]||{prefix:null,iconName:null}}function xb(t){var e=_v[t],n=vd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ni(){return gd}var _d=function(){return{prefix:null,iconName:null,rest:[]}};function Fl(t){var e=hd[t],n=hl[t]||hl[e],i=t in wn.styles?t:null;return n||i||null}function Ul(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,i=n===void 0?!1:n,r=null,a=t.reduce(function(o,s){var l=vb(Se.familyPrefix,s);if(po[s]?(s=pb.includes(s)?Hw[s]:s,r=s,o.prefix=s):mb.indexOf(s)>-1?(r=s,o.prefix=Fl(s)):l?o.iconName=l:s!==Se.replacementClass&&o.rest.push(s),!i&&o.prefix&&o.iconName){var u=r==="fa"?Sv(o.iconName):{},f=Hr(o.prefix,o.iconName);u.prefix&&(r=null),o.iconName=u.iconName||f||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!po.far&&po.fas&&!Se.autoFetchSvg&&(o.prefix="fas")}return o},_d());return(a.prefix==="fa"||r==="fa")&&(a.prefix=Ni()||"fas"),a}var yb=function(){function t(){Pw(this,t),this.definitions={}}return Rw(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=fe(fe({},n.definitions[s]||{}),o[s]),Kc(s,o[s]);var l=lv[s];l&&Kc(l,o[s]),yv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(a){var o=r[a],s=o.prefix,l=o.iconName,u=o.icon,f=u[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(n[s][h]=u)}),n[s][l]=u}),n}}]),t}(),gm=[],Wr={},aa={},Sb=Object.keys(aa);function Mb(t,e){var n=e.mixoutsTo;return gm=t,Wr={},Object.keys(aa).forEach(function(i){Sb.indexOf(i)===-1&&delete aa[i]}),gm.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),dl(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),i.hooks){var a=i.hooks();Object.keys(a).forEach(function(o){Wr[o]||(Wr[o]=[]),Wr[o].push(a[o])})}i.provides&&i.provides(aa)}),n}function Qc(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var a=Wr[t]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function dr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Wr[t]||[];r.forEach(function(a){a.apply(null,n)})}function ti(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return aa[t]?aa[t].apply(null,e):void 0}function Jc(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ni();if(!!e)return e=Hr(n,e)||e,pm(Mv.definitions,n,e)||pm(wn.styles,n,e)}var Mv=new yb,wb=function(){Se.autoReplaceSvg=!1,Se.observeMutations=!1,dr("noAuto")},bb={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ii?(dr("beforeI2svg",e),ti("pseudoElements2svg",e),ti("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;Se.autoReplaceSvg===!1&&(Se.autoReplaceSvg=!0),Se.observeMutations=!0,ub(function(){Tb({autoReplaceSvgRoot:n}),dr("watch",e)})}},Eb={icon:function(e){if(e===null)return null;if(dl(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Hr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Fl(e[0]);return{prefix:i,iconName:Hr(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(Se.familyPrefix,"-"))>-1||e.match(Ww))){var r=Ul(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Ni(),iconName:Hr(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var a=Ni();return{prefix:a,iconName:Hr(a,e)||e}}}},rn={noAuto:wb,config:Se,dom:bb,parse:Eb,library:Mv,findIconDefinition:Jc,toHtml:Wo},Tb=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?tt:n;(Object.keys(wn.styles).length>0||Se.autoFetchSvg)&&ii&&Se.autoReplaceSvg&&rn.dom.i2svg({node:i})};function Bl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Wo(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!ii){var i=tt.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function Cb(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,a=t.styles,o=t.transform;if(md(o)&&n.found&&!i.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};r.style=zl(fe(fe({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ab(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,a=t.symbol,o=a===!0?"".concat(e,"-").concat(Se.familyPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:fe(fe({},r),{},{id:o}),children:i}]}]}function xd(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,u=t.maskId,f=t.titleId,h=t.extra,d=t.watchable,g=d===void 0?!1:d,y=i.found?i:n,p=y.width,c=y.height,m=r==="fak",v=[Se.replacementClass,a?"".concat(Se.familyPrefix,"-").concat(a):""].filter(function(w){return h.classes.indexOf(w)===-1}).filter(function(w){return w!==""||!!w}).concat(h.classes).join(" "),_={children:[],attributes:fe(fe({},h.attributes),{},{"data-prefix":r,"data-icon":a,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(c)})},x=m&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/c*16*.0625,"em")}:{};g&&(_.attributes[fr]=""),l&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(f||Do())},children:[l]}),delete _.attributes.title);var b=fe(fe({},_),{},{prefix:r,iconName:a,main:n,mask:i,maskId:u,transform:o,symbol:s,styles:fe(fe({},x),h.styles)}),T=i.found&&n.found?ti("generateAbstractMask",b)||{children:[],attributes:{}}:ti("generateAbstractIcon",b)||{children:[],attributes:{}},L=T.children,S=T.attributes;return b.children=L,b.attributes=S,s?Ab(b):Cb(b)}function vm(t){var e=t.content,n=t.width,i=t.height,r=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,u=fe(fe(fe({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[fr]="");var f=fe({},o.styles);md(r)&&(f.transform=ab({transform:r,startCentered:!0,width:n,height:i}),f["-webkit-transform"]=f.transform);var h=zl(f);h.length>0&&(u.style=h);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function Lb(t){var e=t.content,n=t.title,i=t.extra,r=fe(fe(fe({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),a=zl(i.styles);a.length>0&&(r.style=a);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Zu=wn.styles;function ef(t){var e=t[0],n=t[1],i=t.slice(4),r=ud(i,1),a=r[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(Se.familyPrefix,"-").concat(tr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Se.familyPrefix,"-").concat(tr.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(Se.familyPrefix,"-").concat(tr.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}var Pb={found:!1,width:512,height:512};function Rb(t,e){!sv&&!Se.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function tf(t,e){var n=e;return e==="fa"&&Se.styleDefault!==null&&(e=Ni()),new Promise(function(i,r){if(ti("missingIconAbstract"),n==="fa"){var a=Sv(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&Zu[e]&&Zu[e][t]){var o=Zu[e][t];return i(ef(o))}Rb(t,e),i(fe(fe({},Pb),{},{icon:Se.showMissingIcons&&t?ti("missingIconAbstract")||{}:{}}))})}var _m=function(){},nf=Se.measurePerformance&&bs&&bs.mark&&bs.measure?bs:{mark:_m,measure:_m},Ja='FA "6.0.0"',Db=function(e){return nf.mark("".concat(Ja," ").concat(e," begins")),function(){return wv(e)}},wv=function(e){nf.mark("".concat(Ja," ").concat(e," ends")),nf.measure("".concat(Ja," ").concat(e),"".concat(Ja," ").concat(e," begins"),"".concat(Ja," ").concat(e," ends"))},yd={begin:Db,end:wv},Fs=function(){};function xm(t){var e=t.getAttribute?t.getAttribute(fr):null;return typeof e=="string"}function Ib(t){var e=t.getAttribute?t.getAttribute(fd):null,n=t.getAttribute?t.getAttribute(dd):null;return e&&n}function kb(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Se.replacementClass)}function Nb(){if(Se.autoReplaceSvg===!0)return Us.replace;var t=Us[Se.autoReplaceSvg];return t||Us.replace}function Ob(t){return tt.createElementNS("http://www.w3.org/2000/svg",t)}function zb(t){return tt.createElement(t)}function bv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?Ob:zb:n;if(typeof t=="string")return tt.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){r.appendChild(bv(o,{ceFn:i}))}),r}function Fb(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Us={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(bv(r),n)}),n.getAttribute(fr)===null&&Se.keepOriginalSource){var i=tt.createComment(Fb(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~pd(n).indexOf(Se.replacementClass))return Us.replace(e);var r=new RegExp("".concat(Se.familyPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var a=i[0].attributes.class.split(" ").reduce(function(s,l){return l===Se.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});i[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=i.map(function(s){return Wo(s)}).join(`
`);n.setAttribute(fr,""),n.innerHTML=o}};function ym(t){t()}function Ev(t,e){var n=typeof e=="function"?e:Fs;if(t.length===0)n();else{var i=ym;Se.mutateApproach===Gw&&(i=ki.requestAnimationFrame||ym),i(function(){var r=Nb(),a=yd.begin("mutate");t.map(r),a(),n()})}}var Sd=!1;function Tv(){Sd=!0}function rf(){Sd=!1}var ml=null;function Sm(t){if(!!fm&&!!Se.observeMutations){var e=t.treeCallback,n=e===void 0?Fs:e,i=t.nodeCallback,r=i===void 0?Fs:i,a=t.pseudoElementsCallback,o=a===void 0?Fs:a,s=t.observeMutationsRoot,l=s===void 0?tt:s;ml=new fm(function(u){if(!Sd){var f=Ni();wa(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!xm(h.addedNodes[0])&&(Se.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&Se.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&xm(h.target)&&~qw.indexOf(h.attributeName))if(h.attributeName==="class"&&Ib(h.target)){var d=Ul(pd(h.target)),g=d.prefix,y=d.iconName;h.target.setAttribute(fd,g||f),y&&h.target.setAttribute(dd,y)}else kb(h.target)&&r(h.target)})}}),ii&&ml.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ub(){!ml||ml.disconnect()}function Bb(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var a=r.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(i[o]=s.join(":").trim()),i},{})),n}function Gb(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Ul(pd(t));return r.prefix||(r.prefix=Ni()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||r.prefix&&i.length>0&&(r.iconName=_b(r.prefix,t.innerText)||vd(r.prefix,Zc(t.innerText))),r}function Vb(t){var e=wa(t.attributes).reduce(function(r,a){return r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return Se.autoA11y&&(n?e["aria-labelledby"]="".concat(Se.replacementClass,"-title-").concat(i||Do()):(e["aria-hidden"]="true",e.focusable="false")),e}function Hb(){return{iconName:null,title:null,titleId:null,prefix:null,transform:In,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Gb(t),i=n.iconName,r=n.prefix,a=n.rest,o=Vb(t),s=Qc("parseNodeAttributes",{},t),l=e.styleParser?Bb(t):[];return fe({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:In,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Wb=wn.styles;function Cv(t){var e=Se.autoReplaceSvg==="nest"?Mm(t,{styleParser:!1}):Mm(t);return~e.extra.classes.indexOf(uv)?ti("generateLayersText",t,e):ti("generateSvgReplacementMutation",t,e)}function wm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ii)return Promise.resolve();var n=tt.documentElement.classList,i=function(h){return n.add("".concat(dm,"-").concat(h))},r=function(h){return n.remove("".concat(dm,"-").concat(h))},a=Se.autoFetchSvg?Object.keys(hd):Object.keys(Wb),o=[".".concat(uv,":not([").concat(fr,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(fr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=wa(t.querySelectorAll(o))}catch{}if(s.length>0)i("pending"),r("complete");else return Promise.resolve();var l=yd.begin("onTree"),u=s.reduce(function(f,h){try{var d=Cv(h);d&&f.push(d)}catch(g){sv||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,h){Promise.all(u).then(function(d){Ev(d,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(d){l(),h(d)})})}function jb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Cv(t).then(function(n){n&&Ev([n],e)})}function Xb(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Jc(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Jc(r||{})),t(i,fe(fe({},n),{},{mask:r}))}}var $b=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?In:i,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,f=u===void 0?null:u,h=n.title,d=h===void 0?null:h,g=n.titleId,y=g===void 0?null:g,p=n.classes,c=p===void 0?[]:p,m=n.attributes,v=m===void 0?{}:m,_=n.styles,x=_===void 0?{}:_;if(!!e){var b=e.prefix,T=e.iconName,L=e.icon;return Bl(fe({type:"icon"},e),function(){return dr("beforeDOMElementCreation",{iconDefinition:e,params:n}),Se.autoA11y&&(d?v["aria-labelledby"]="".concat(Se.replacementClass,"-title-").concat(y||Do()):(v["aria-hidden"]="true",v.focusable="false")),xd({icons:{main:ef(L),mask:l?ef(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:T,transform:fe(fe({},In),r),symbol:o,title:d,maskId:f,titleId:y,extra:{attributes:v,styles:x,classes:c}})})}},qb={mixout:function(){return{icon:Xb($b)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=wm,n.nodeCallback=jb,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?tt:i,a=n.callback,o=a===void 0?function(){}:a;return wm(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,a=i.title,o=i.titleId,s=i.prefix,l=i.transform,u=i.symbol,f=i.mask,h=i.maskId,d=i.extra;return new Promise(function(g,y){Promise.all([tf(r,s),f.iconName?tf(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var c=ud(p,2),m=c[0],v=c[1];g([n,xd({icons:{main:m,mask:v},prefix:s,iconName:r,transform:l,symbol:u,maskId:h,title:a,titleId:o,extra:d,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.transform,s=n.styles,l=zl(s);l.length>0&&(r.style=l);var u;return md(o)&&(u=ti("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),i.push(u||a.icon),{children:i,attributes:r}}}},Yb={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,a=r===void 0?[]:r;return Bl({type:"layer"},function(){dr("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(Se.familyPrefix,"-layers")].concat(Ol(a)).join(" ")},children:o}]})}}}},Zb={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,a=r===void 0?null:r,o=i.classes,s=o===void 0?[]:o,l=i.attributes,u=l===void 0?{}:l,f=i.styles,h=f===void 0?{}:f;return Bl({type:"counter",content:n},function(){return dr("beforeDOMElementCreation",{content:n,params:i}),Lb({content:n.toString(),title:a,extra:{attributes:u,styles:h,classes:["".concat(Se.familyPrefix,"-layers-counter")].concat(Ol(s))}})})}}}},Kb={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,a=r===void 0?In:r,o=i.title,s=o===void 0?null:o,l=i.classes,u=l===void 0?[]:l,f=i.attributes,h=f===void 0?{}:f,d=i.styles,g=d===void 0?{}:d;return Bl({type:"text",content:n},function(){return dr("beforeDOMElementCreation",{content:n,params:i}),vm({content:n,transform:fe(fe({},In),a),title:s,extra:{attributes:h,styles:g,classes:["".concat(Se.familyPrefix,"-layers-text")].concat(Ol(u))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,a=i.transform,o=i.extra,s=null,l=null;if(rv){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/u,l=f.height/u}return Se.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,vm({content:n.innerHTML,width:s,height:l,transform:a,title:r,extra:o,watchable:!0})])}}},Qb=new RegExp('"',"ug"),bm=[1105920,1112319];function Jb(t){var e=t.replace(Qb,""),n=db(e,0),i=n>=bm[0]&&n<=bm[1],r=e.length===2?e[0]===e[1]:!1;return{value:Zc(r?e[0]:e),isSecondary:i||r}}function Em(t,e){var n="".concat(Bw).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var a=wa(t.children),o=a.filter(function(T){return T.getAttribute(Yc)===e})[0],s=ki.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(jw),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&f!=="none"&&f!==""){var h=s.getPropertyValue("content"),d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?hl[l[2].toLowerCase()]:Xw[u],g=Jb(h),y=g.value,p=g.isSecondary,c=l[0].startsWith("FontAwesome"),m=vd(d,y),v=m;if(c){var _=xb(y);_.iconName&&_.prefix&&(m=_.iconName,d=_.prefix)}if(m&&!p&&(!o||o.getAttribute(fd)!==d||o.getAttribute(dd)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var x=Hb(),b=x.extra;b.attributes[Yc]=e,tf(m,d).then(function(T){var L=xd(fe(fe({},x),{},{icons:{main:T,mask:_d()},prefix:d,iconName:v,extra:b,watchable:!0})),S=tt.createElement("svg");e==="::before"?t.insertBefore(S,t.firstChild):t.appendChild(S),S.outerHTML=L.map(function(w){return Wo(w)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function eE(t){return Promise.all([Em(t,"::before"),Em(t,"::after")])}function tE(t){return t.parentNode!==document.head&&!~Vw.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Yc)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Tm(t){if(!!ii)return new Promise(function(e,n){var i=wa(t.querySelectorAll("*")).filter(tE).map(eE),r=yd.begin("searchPseudoElements");Tv(),Promise.all(i).then(function(){r(),rf(),e()}).catch(function(){r(),rf(),n()})})}var nE={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Tm,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?tt:i;Se.searchPseudoElements&&Tm(r)}}},Cm=!1,iE={mixout:function(){return{dom:{unwatch:function(){Tv(),Cm=!0}}}},hooks:function(){return{bootstrap:function(){Sm(Qc("mutationObserverCallbacks",{}))},noAuto:function(){Ub()},watch:function(n){var i=n.observeMutationsRoot;Cm?rf():Sm(Qc("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Am=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var a=r.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return i.flipX=!0,i;if(o&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(o){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},n)},rE={mixout:function(){return{parse:{transform:function(n){return Am(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Am(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(f)},d={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:h,path:d};return{tag:"g",attributes:fe({},g.outer),children:[{tag:"g",attributes:fe({},g.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:fe(fe({},i.icon.attributes),g.path)}]}]}}}},Ku={x:0,y:0,width:"100%",height:"100%"};function Lm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function aE(t){return t.tag==="g"?t.children:[t]}var oE={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),a=r?Ul(r.split(" ").map(function(o){return o.trim()})):_d();return a.prefix||(a.prefix=Ni()),n.mask=a,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,f=a.icon,h=o.width,d=o.icon,g=rb({transform:l,containerWidth:h,iconWidth:u}),y={tag:"rect",attributes:fe(fe({},Ku),{},{fill:"white"})},p=f.children?{children:f.children.map(Lm)}:{},c={tag:"g",attributes:fe({},g.inner),children:[Lm(fe({tag:f.tag,attributes:fe(fe({},f.attributes),g.path)},p))]},m={tag:"g",attributes:fe({},g.outer),children:[c]},v="mask-".concat(s||Do()),_="clip-".concat(s||Do()),x={tag:"mask",attributes:fe(fe({},Ku),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:aE(d)},x]};return i.push(b,{tag:"rect",attributes:fe({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(v,")")},Ku)}),{children:i,attributes:r}}}},sE={provides:function(e){var n=!1;ki.matchMedia&&(n=ki.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:fe(fe({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=fe(fe({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:fe(fe({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:fe(fe({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:fe(fe({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:fe(fe({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:fe(fe({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:fe(fe({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:fe(fe({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},lE={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),a=r===null?!1:r===""?!0:r;return n.symbol=a,n}}}},uE=[sb,qb,Yb,Zb,Kb,nE,iE,rE,oE,sE,lE];Mb(uE,{mixoutsTo:rn});rn.noAuto;rn.config;rn.library;rn.dom;var af=rn.parse;rn.findIconDefinition;rn.toHtml;var cE=rn.icon;rn.layer;rn.text;rn.counter;var Av={exports:{}},fE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",dE=fE,hE=dE;function Lv(){}function Pv(){}Pv.resetWarningCache=Lv;var pE=function(){function t(i,r,a,o,s,l){if(l!==hE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Pv,resetWarningCache:Lv};return n.PropTypes=n,n};Av.exports=pE();var Ne=Av.exports;function Pm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function gi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Pm(Object(n),!0).forEach(function(i){jr(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pm(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function gl(t){return gl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gl(t)}function jr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mE(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function gE(t,e){if(t==null)return{};var n=mE(t,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function of(t){return vE(t)||_E(t)||xE(t)||yE()}function vE(t){if(Array.isArray(t))return sf(t)}function _E(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function xE(t,e){if(!!t){if(typeof t=="string")return sf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sf(t,e)}}function sf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function yE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function SE(t){var e,n=t.beat,i=t.fade,r=t.beatFade,a=t.bounce,o=t.shake,s=t.flash,l=t.spin,u=t.spinPulse,f=t.spinReverse,h=t.pulse,d=t.fixedWidth,g=t.inverse,y=t.border,p=t.listItem,c=t.flip,m=t.size,v=t.rotation,_=t.pull,x=(e={"fa-beat":n,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":d,"fa-inverse":g,"fa-border":y,"fa-li":p,"fa-flip":c===!0,"fa-flip-horizontal":c==="horizontal"||c==="both","fa-flip-vertical":c==="vertical"||c==="both"},jr(e,"fa-".concat(m),typeof m!="undefined"&&m!==null),jr(e,"fa-rotate-".concat(v),typeof v!="undefined"&&v!==null&&v!==0),jr(e,"fa-pull-".concat(_),typeof _!="undefined"&&_!==null),jr(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(x).map(function(b){return x[b]?b:null}).filter(function(b){return b})}function ME(t){return t=t-0,t===t}function Rv(t){return ME(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var wE=["style"];function bE(t){return t.charAt(0).toUpperCase()+t.slice(1)}function EE(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=Rv(n.slice(0,i)),a=n.slice(i+1).trim();return r.startsWith("webkit")?e[bE(r)]=a:e[r]=a,e},{})}function Dv(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return Dv(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,u){var f=e.attributes[u];switch(u){case"class":l.attrs.className=f,delete e.attributes.class;break;case"style":l.attrs.style=EE(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=f:l.attrs[Rv(u)]=f}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=gE(n,wE);return r.attrs.style=gi(gi({},r.attrs.style),o),t.apply(void 0,[e.tag,gi(gi({},r.attrs),s)].concat(of(i)))}var Iv=!1;try{Iv=!0}catch{}function TE(){if(!Iv&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Rm(t){if(t&&gl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(af.icon)return af.icon(t);if(t===null)return null;if(t&&gl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Qu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?jr({},t,e):{}}var vi=bn.forwardRef(function(t,e){var n=t.icon,i=t.mask,r=t.symbol,a=t.className,o=t.title,s=t.titleId,l=t.maskId,u=Rm(n),f=Qu("classes",[].concat(of(SE(t)),of(a.split(" ")))),h=Qu("transform",typeof t.transform=="string"?af.transform(t.transform):t.transform),d=Qu("mask",Rm(i)),g=cE(u,gi(gi(gi(gi({},f),h),d),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!g)return TE("Could not find icon",u),null;var y=g.abstract,p={ref:e};return Object.keys(t).forEach(function(c){vi.defaultProps.hasOwnProperty(c)||(p[c]=t[c])}),CE(y[0],p)});vi.displayName="FontAwesomeIcon";vi.propTypes={beat:Ne.bool,border:Ne.bool,beatFade:Ne.bool,bounce:Ne.bool,className:Ne.string,fade:Ne.bool,flash:Ne.bool,mask:Ne.oneOfType([Ne.object,Ne.array,Ne.string]),maskId:Ne.string,fixedWidth:Ne.bool,inverse:Ne.bool,flip:Ne.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ne.oneOfType([Ne.object,Ne.array,Ne.string]),listItem:Ne.bool,pull:Ne.oneOf(["right","left"]),pulse:Ne.bool,rotation:Ne.oneOf([0,90,180,270]),shake:Ne.bool,size:Ne.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ne.bool,spinPulse:Ne.bool,spinReverse:Ne.bool,symbol:Ne.oneOfType([Ne.bool,Ne.string]),title:Ne.string,titleId:Ne.string,transform:Ne.oneOfType([Ne.string,Ne.object]),swapOpacity:Ne.bool};vi.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var CE=Dv.bind(null,bn.createElement);/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var AE={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},LE={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]},PE={prefix:"fab",iconName:"react",icon:[512,512,[],"f41b","M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9-53.4 18.5-91.7 47.7-91.7 77.9 0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zM136.9 187.2c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zM115.7 320.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zM256 301.8a45.8 45.8 0 1 0 0-91.6 45.8 45.8 0 1 0 0 91.6z"]},RE={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};function DE(){const t=_e.exports.useMemo(()=>typeof window=="undefined"?!1:/iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768,[]);return _e.exports.useMemo(()=>{if(typeof navigator=="undefined")return!1;const e=navigator.deviceMemory;return e&&e<=4},[]),at("div",{className:"main-container",style:{width:"100%",height:"100vh",position:"relative",overflow:"hidden"},children:[ue("div",{style:{position:"absolute",inset:0,zIndex:0},children:ue(nw,{enabledWaves:["middle"],lineCount:t?2:8,lineDistance:6,bendRadius:5,bendStrength:-.5,interactive:!t,parallax:!1,animationSpeed:t?.5:1,throttleFrameRate:t?30:60})}),at("div",{className:"social-icons",style:{position:"absolute",top:"30px",left:"50%",transform:"translateX(-50%)",zIndex:10,display:"flex",gap:"1.5rem",alignItems:"center"},children:[ue("a",{href:"https://www.instagram.com/michele_sanfi/?hl=it",target:"_blank",rel:"noopener noreferrer",style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"1.4rem",transition:"all 0.3s ease",cursor:"pointer"},onMouseEnter:e=>{e.currentTarget.style.color="#C13584",e.currentTarget.style.transform="scale(1.2)"},onMouseLeave:e=>{e.currentTarget.style.color="rgba(255, 255, 255, 0.7)",e.currentTarget.style.transform="scale(1)"},children:ue(vi,{icon:RE})}),ue("a",{href:"https://github.com/michelesanfilippo",target:"_blank",rel:"noopener noreferrer",style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"1.4rem",transition:"all 0.3s ease",cursor:"pointer"},onMouseEnter:e=>{e.currentTarget.style.color="#FFD700",e.currentTarget.style.transform="scale(1.2)"},onMouseLeave:e=>{e.currentTarget.style.color="rgba(255, 255, 255, 0.7)",e.currentTarget.style.transform="scale(1)"},children:ue(vi,{icon:AE})}),ue("a",{href:"https://it.linkedin.com/in/michele-sanfilippo-b22404157",target:"_blank",rel:"noopener noreferrer",style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"1.4rem",transition:"all 0.3s ease",cursor:"pointer"},onMouseEnter:e=>{e.currentTarget.style.color="#0077B5",e.currentTarget.style.transform="scale(1.2)"},onMouseLeave:e=>{e.currentTarget.style.color="rgba(255, 255, 255, 0.7)",e.currentTarget.style.transform="scale(1)"},children:ue(vi,{icon:LE})})]}),ue("div",{className:"profile-card-container",style:{position:"absolute",left:"14%",top:"50%",transform:"translateY(-50%) scale(1.08)",zIndex:10},children:ue(Lw,{name:"Michele Sanfilippo",title:"Software Engineer",handle:"michelesanfilippo",status:"I build stuff.",contactText:"Contact Me",avatarUrl:"/avatar/IMG_6291.png",iconUrl:"/avatar/dev.png",showUserInfo:!0,enableTilt:!t,enableMobileTilt:!1,onContactClick:()=>window.location.href="mailto:michelesanfilippo01@gmail.com?subject=Hi Michele! I'm here from your page"})}),at("div",{className:"spotlight-cards-container",style:{position:"absolute",right:"12%",top:"50%",transform:"translateY(-50%) scale(1.08)",zIndex:10,display:"flex",flexDirection:"column",gap:"0.5rem",maxWidth:"660px",width:"100%",height:"80svh",maxHeight:"540px"},children:[at("div",{style:{display:"flex",gap:"0.5rem",flex:1,minHeight:0},children:[ue("div",{style:{flex:1,minWidth:0,display:"flex"},children:at(ws,{className:"custom-spotlight-card",spotlightColor:"rgba(216, 27, 143, 0.2)",children:[ue("h2",{style:{color:"white",marginBottom:"0.4rem",fontSize:"0.9rem"},children:"Background"}),at("p",{style:{color:"#aaa",fontSize:"0.65rem",lineHeight:"1.35"},children:["\u{1F44B} Hi there i'm Michele, I currently live in Palermo, Sicily. ",ue("br",{})," ",ue("br",{}),"I love programming and challenging myself every day. I enjoy challenging projects and finding the best solutions! ",ue("br",{}),ue("br",{}),"In my free time I like to keep an eye on open-source projects, related to genAI that allow me to stay updated. ",ue("br",{}),ue("br",{}),"Outside tech, I like photography, playing soccer with friends and I am passionate about collecting cards and mangas."]})]})}),at("div",{style:{flex:1.5,minWidth:0,display:"flex",flexDirection:"column",gap:"0.5rem"},children:[ue("div",{style:{flex:1,display:"flex",minHeight:0},children:at(ws,{className:"custom-spotlight-card",spotlightColor:"rgba(0, 38, 255, 0.2)",children:[ue("h2",{style:{color:"white",marginBottom:"0.5rem",fontSize:"0.9rem"},children:"Education"}),at("p",{style:{color:"#aaa",fontSize:"0.7rem",lineHeight:"1.4"},children:["\u{1F393} Universit\xE0 degli studi di Palermo (2017 - 2020)",ue("br",{}),ue("br",{}),"Bachelor's degree in Computer Science with thesis: Graph theory and application algorithms for social networks, with a grade of 105/110."]})]})}),ue("div",{style:{flex:1,display:"flex",minHeight:0},children:at(ws,{className:"custom-spotlight-card",spotlightColor:"rgba(8, 245, 115, 0.2)",children:[ue("h2",{style:{color:"white",marginBottom:"0.5rem",fontSize:"0.9rem"},children:"Skills"}),at("p",{style:{color:"#aaa",fontSize:"0.7rem",lineHeight:"1.4"},children:["I mainly work as back-end engineer with: Java, Spring, Docker, SQL, JavaScript, HTML, CSS, Git, AWS. ",ue("br",{}),ue("br",{}),"I also have experience with Python, C/C++, Node.js and TypeScript. ",ue("br",{}),ue("br",{}),"I work by adopting Agile methodology and devOps principles."]})]})})]})]}),ue("div",{style:{width:"100%",minHeight:0},children:at(ws,{className:"custom-spotlight-card",spotlightColor:"rgba(227, 243, 9, 0.1)",children:[ue("h2",{style:{color:"white",marginBottom:"0.4rem",fontSize:"0.9rem"},children:"Experience"}),at("p",{style:{color:"#aaa",fontSize:"0.7rem",lineHeight:"1.4"},children:["I work as software engineer since 2020 mainly in financial services.",ue("br",{}),ue("br",{}),"I've collaborated with various clients, like as banks and insurance companies, contributing to the development of scalable and efficient software solutions.",ue("br",{}),ue("br",{}),"I'm passionate about learning new technologies and improving my skills to deliver high-quality products."]})]})})]}),at("div",{style:{position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",zIndex:10,color:"rgba(255, 255, 255, 0.6)",fontSize:"0.75rem",fontWeight:400,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",display:"flex",alignItems:"center",gap:"0.4rem"},children:["Built with"," ",at("a",{href:"https://react.dev/",target:"_blank",rel:"noopener noreferrer",style:{color:"rgba(255, 255, 255, 0.9)",textDecoration:"none",borderBottom:"1px solid rgba(255, 255, 255, 0.3)",transition:"all 0.2s ease",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.3rem"},onMouseEnter:e=>{e.currentTarget.style.color="#61dafb",e.currentTarget.style.borderBottomColor="#61dafb"},onMouseLeave:e=>{e.currentTarget.style.color="rgba(255, 255, 255, 0.9)",e.currentTarget.style.borderBottomColor="rgba(255, 255, 255, 0.3)"},children:[ue(vi,{icon:PE,style:{fontSize:"1rem"}}),"React"]})]})]})}V_.render(ue(bn.StrictMode,{children:ue(DE,{})}),document.getElementById("root"));
