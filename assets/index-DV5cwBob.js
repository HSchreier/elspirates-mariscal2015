var vx=Object.defineProperty;var _x=(r,e,t)=>e in r?vx(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var hn=(r,e,t)=>_x(r,typeof e!="symbol"?e+"":e,t);function xx(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function V0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function G0(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var e=r.default;if(typeof e=="function"){var t=function s(){return this instanceof s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(s){var o=Object.getOwnPropertyDescriptor(r,s);Object.defineProperty(t,s,o.get?o:{enumerable:!0,get:function(){return r[s]}})}),t}var Uf={exports:{}},la={},Nf={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function yx(){if(ng)return dt;ng=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.iterator;function _(O){return O===null||typeof O!="object"?null:(O=m&&O[m]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(O,re,Le){this.props=O,this.context=re,this.refs=M,this.updater=Le||S}y.prototype.isReactComponent={},y.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=y.prototype;function D(O,re,Le){this.props=O,this.context=re,this.refs=M,this.updater=Le||S}var L=D.prototype=new x;L.constructor=D,E(L,y.prototype),L.isPureReactComponent=!0;var P=Array.isArray,V=Object.prototype.hasOwnProperty,U={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function F(O,re,Le){var J,he={},Me=null,_e=null;if(re!=null)for(J in re.ref!==void 0&&(_e=re.ref),re.key!==void 0&&(Me=""+re.key),re)V.call(re,J)&&!C.hasOwnProperty(J)&&(he[J]=re[J]);var we=arguments.length-2;if(we===1)he.children=Le;else if(1<we){for(var Xe=Array(we),Ve=0;Ve<we;Ve++)Xe[Ve]=arguments[Ve+2];he.children=Xe}if(O&&O.defaultProps)for(J in we=O.defaultProps,we)he[J]===void 0&&(he[J]=we[J]);return{$$typeof:r,type:O,key:Me,ref:_e,props:he,_owner:U.current}}function R(O,re){return{$$typeof:r,type:O.type,key:re,ref:O.ref,props:O.props,_owner:O._owner}}function T(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function k(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Le){return re[Le]})}var ne=/\/+/g;function Z(O,re){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):re.toString(36)}function se(O,re,Le,J,he){var Me=typeof O;(Me==="undefined"||Me==="boolean")&&(O=null);var _e=!1;if(O===null)_e=!0;else switch(Me){case"string":case"number":_e=!0;break;case"object":switch(O.$$typeof){case r:case e:_e=!0}}if(_e)return _e=O,he=he(_e),O=J===""?"."+Z(_e,0):J,P(he)?(Le="",O!=null&&(Le=O.replace(ne,"$&/")+"/"),se(he,re,Le,"",function(Ve){return Ve})):he!=null&&(T(he)&&(he=R(he,Le+(!he.key||_e&&_e.key===he.key?"":(""+he.key).replace(ne,"$&/")+"/")+O)),re.push(he)),1;if(_e=0,J=J===""?".":J+":",P(O))for(var we=0;we<O.length;we++){Me=O[we];var Xe=J+Z(Me,we);_e+=se(Me,re,Le,Xe,he)}else if(Xe=_(O),typeof Xe=="function")for(O=Xe.call(O),we=0;!(Me=O.next()).done;)Me=Me.value,Xe=J+Z(Me,we++),_e+=se(Me,re,Le,Xe,he);else if(Me==="object")throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return _e}function ue(O,re,Le){if(O==null)return O;var J=[],he=0;return se(O,J,"","",function(Me){return re.call(Le,Me,he++)}),J}function ee(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(Le){(O._status===0||O._status===-1)&&(O._status=1,O._result=Le)},function(Le){(O._status===0||O._status===-1)&&(O._status=2,O._result=Le)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var pe={current:null},H={transition:null},ae={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:H,ReactCurrentOwner:U};function le(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:ue,forEach:function(O,re,Le){ue(O,function(){re.apply(this,arguments)},Le)},count:function(O){var re=0;return ue(O,function(){re++}),re},toArray:function(O){return ue(O,function(re){return re})||[]},only:function(O){if(!T(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},dt.Component=y,dt.Fragment=t,dt.Profiler=o,dt.PureComponent=D,dt.StrictMode=s,dt.Suspense=h,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,dt.act=le,dt.cloneElement=function(O,re,Le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var J=E({},O.props),he=O.key,Me=O.ref,_e=O._owner;if(re!=null){if(re.ref!==void 0&&(Me=re.ref,_e=U.current),re.key!==void 0&&(he=""+re.key),O.type&&O.type.defaultProps)var we=O.type.defaultProps;for(Xe in re)V.call(re,Xe)&&!C.hasOwnProperty(Xe)&&(J[Xe]=re[Xe]===void 0&&we!==void 0?we[Xe]:re[Xe])}var Xe=arguments.length-2;if(Xe===1)J.children=Le;else if(1<Xe){we=Array(Xe);for(var Ve=0;Ve<Xe;Ve++)we[Ve]=arguments[Ve+2];J.children=we}return{$$typeof:r,type:O.type,key:he,ref:Me,props:J,_owner:_e}},dt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},dt.createElement=F,dt.createFactory=function(O){var re=F.bind(null,O);return re.type=O,re},dt.createRef=function(){return{current:null}},dt.forwardRef=function(O){return{$$typeof:f,render:O}},dt.isValidElement=T,dt.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ee}},dt.memo=function(O,re){return{$$typeof:p,type:O,compare:re===void 0?null:re}},dt.startTransition=function(O){var re=H.transition;H.transition={};try{O()}finally{H.transition=re}},dt.unstable_act=le,dt.useCallback=function(O,re){return pe.current.useCallback(O,re)},dt.useContext=function(O){return pe.current.useContext(O)},dt.useDebugValue=function(){},dt.useDeferredValue=function(O){return pe.current.useDeferredValue(O)},dt.useEffect=function(O,re){return pe.current.useEffect(O,re)},dt.useId=function(){return pe.current.useId()},dt.useImperativeHandle=function(O,re,Le){return pe.current.useImperativeHandle(O,re,Le)},dt.useInsertionEffect=function(O,re){return pe.current.useInsertionEffect(O,re)},dt.useLayoutEffect=function(O,re){return pe.current.useLayoutEffect(O,re)},dt.useMemo=function(O,re){return pe.current.useMemo(O,re)},dt.useReducer=function(O,re,Le){return pe.current.useReducer(O,re,Le)},dt.useRef=function(O){return pe.current.useRef(O)},dt.useState=function(O){return pe.current.useState(O)},dt.useSyncExternalStore=function(O,re,Le){return pe.current.useSyncExternalStore(O,re,Le)},dt.useTransition=function(){return pe.current.useTransition()},dt.version="18.3.1",dt}var ig;function hh(){return ig||(ig=1,Nf.exports=yx()),Nf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function Sx(){if(rg)return la;rg=1;var r=hh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var v,m={},_=null,S=null;p!==void 0&&(_=""+p),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)s.call(h,v)&&!l.hasOwnProperty(v)&&(m[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)m[v]===void 0&&(m[v]=h[v]);return{$$typeof:e,type:f,key:_,ref:S,props:m,_owner:o.current}}return la.Fragment=t,la.jsx=c,la.jsxs=c,la}var sg;function Mx(){return sg||(sg=1,Uf.exports=Sx()),Uf.exports}var xn=Mx(),Ut=hh();const W0=V0(Ut),og=xx({__proto__:null,default:W0},[Ut]);var ql={},Ff={exports:{}},$n={},Of={exports:{}},kf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function Ex(){return ag||(ag=1,function(r){function e(H,ae){var le=H.length;H.push(ae);e:for(;0<le;){var O=le-1>>>1,re=H[O];if(0<o(re,ae))H[O]=ae,H[le]=re,le=O;else break e}}function t(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var ae=H[0],le=H.pop();if(le!==ae){H[0]=le;e:for(var O=0,re=H.length,Le=re>>>1;O<Le;){var J=2*(O+1)-1,he=H[J],Me=J+1,_e=H[Me];if(0>o(he,le))Me<re&&0>o(_e,he)?(H[O]=_e,H[Me]=le,O=Me):(H[O]=he,H[J]=le,O=J);else if(Me<re&&0>o(_e,le))H[O]=_e,H[Me]=le,O=Me;else break e}}return ae}function o(H,ae){var le=H.sortIndex-ae.sortIndex;return le!==0?le:H.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],p=[],v=1,m=null,_=3,S=!1,E=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(H){for(var ae=t(p);ae!==null;){if(ae.callback===null)s(p);else if(ae.startTime<=H)s(p),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=t(p)}}function P(H){if(M=!1,L(H),!E)if(t(h)!==null)E=!0,ee(V);else{var ae=t(p);ae!==null&&pe(P,ae.startTime-H)}}function V(H,ae){E=!1,M&&(M=!1,x(F),F=-1),S=!0;var le=_;try{for(L(ae),m=t(h);m!==null&&(!(m.expirationTime>ae)||H&&!k());){var O=m.callback;if(typeof O=="function"){m.callback=null,_=m.priorityLevel;var re=O(m.expirationTime<=ae);ae=r.unstable_now(),typeof re=="function"?m.callback=re:m===t(h)&&s(h),L(ae)}else s(h);m=t(h)}if(m!==null)var Le=!0;else{var J=t(p);J!==null&&pe(P,J.startTime-ae),Le=!1}return Le}finally{m=null,_=le,S=!1}}var U=!1,C=null,F=-1,R=5,T=-1;function k(){return!(r.unstable_now()-T<R)}function ne(){if(C!==null){var H=r.unstable_now();T=H;var ae=!0;try{ae=C(!0,H)}finally{ae?Z():(U=!1,C=null)}}else U=!1}var Z;if(typeof D=="function")Z=function(){D(ne)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ue=se.port2;se.port1.onmessage=ne,Z=function(){ue.postMessage(null)}}else Z=function(){y(ne,0)};function ee(H){C=H,U||(U=!0,Z())}function pe(H,ae){F=y(function(){H(r.unstable_now())},ae)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,ee(V))},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(H){switch(_){case 1:case 2:case 3:var ae=3;break;default:ae=_}var le=_;_=ae;try{return H()}finally{_=le}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(H,ae){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var le=_;_=H;try{return ae()}finally{_=le}},r.unstable_scheduleCallback=function(H,ae,le){var O=r.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?O+le:O):le=O,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=le+re,H={id:v++,callback:ae,priorityLevel:H,startTime:le,expirationTime:re,sortIndex:-1},le>O?(H.sortIndex=le,e(p,H),t(h)===null&&H===t(p)&&(M?(x(F),F=-1):M=!0,pe(P,le-O))):(H.sortIndex=re,e(h,H),E||S||(E=!0,ee(V))),H},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(H){var ae=_;return function(){var le=_;_=ae;try{return H.apply(this,arguments)}finally{_=le}}}}(kf)),kf}var lg;function wx(){return lg||(lg=1,Of.exports=Ex()),Of.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function Tx(){if(ug)return $n;ug=1;var r=hh(),e=wx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},m={};function _(n){return h.call(m,n)?!0:h.call(v,n)?!1:p.test(n)?m[n]=!0:(v[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(n,i,a,u,d,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new M(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,D);y[i]=new M(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,D);y[i]=new M(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,D);y[i]=new M(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,u)&&(a=null),u||d===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),U=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),k=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),H=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,O;function re(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Le=!1;function J(n,i){if(!n||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var u=te}Reflect.construct(n,[],i)}else{try{i.call()}catch(te){u=te}n.call(i.prototype)}else{try{throw Error()}catch(te){u=te}n()}}catch(te){if(te&&u&&typeof te.stack=="string"){for(var d=te.stack.split(`
`),g=u.stack.split(`
`),w=d.length-1,N=g.length-1;1<=w&&0<=N&&d[w]!==g[N];)N--;for(;1<=w&&0<=N;w--,N--)if(d[w]!==g[N]){if(w!==1||N!==1)do if(w--,N--,0>N||d[w]!==g[N]){var B=`
`+d[w].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=w&&0<=N);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?re(n):""}function he(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case C:return"Fragment";case U:return"Portal";case R:return"Profiler";case F:return"StrictMode";case Z:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case T:return(n._context.displayName||"Context")+".Provider";case ne:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ue:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case ee:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Xe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ve(n){var i=Xe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){u=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Lt(n){n._valueTracker||(n._valueTracker=Ve(n))}function Dt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Xe(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function z(n,i){var a=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ln(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=we(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ct(n,i){ht(n,i);var a=we(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ct(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ct(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function je(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ct(n,i,a){(i!=="number"||ut(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ge=Array.isArray;function I(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+we(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function A(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ge(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:we(a)}}function fe(n,i){var a=we(i.value),u=we(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ce(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Ye=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function qe(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(n){Ne.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),xe[i]=xe[n]})});function Je(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||xe.hasOwnProperty(n)&&xe[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=Je(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Fe=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,i){if(i){if(Fe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function it(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ce=null,oe=null,de=null;function Pe(n){if(n=$o(n)){if(typeof Ce!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ul(i),Ce(n.stateNode,n.type,i))}}function be(n){oe?de?de.push(n):de=[n]:oe=n}function rt(){if(oe){var n=oe,i=de;if(de=oe=null,Pe(n),i)for(n=0;n<i.length;n++)Pe(i[n])}}function Nt(n,i){return n(i)}function nn(){}var _t=!1;function Hn(n,i,a){if(_t)return n(i,a);_t=!0;try{return Nt(n,i,a)}finally{_t=!1,(oe!==null||de!==null)&&(nn(),rt())}}function Dn(n,i){var a=n.stateNode;if(a===null)return null;var u=ul(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ws=!1;if(f)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){ws=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{ws=!1}function Wi(n,i,a,u,d,g,w,N,B){var te=Array.prototype.slice.call(arguments,3);try{i.apply(a,te)}catch(ge){this.onError(ge)}}var Xi=!1,Yr=null,Kr=!1,gr=null,Ha={onError:function(n){Xi=!0,Yr=n}};function Ts(n,i,a,u,d,g,w,N,B){Xi=!1,Yr=null,Wi.apply(Ha,arguments)}function Va(n,i,a,u,d,g,w,N,B){if(Ts.apply(this,arguments),Xi){if(Xi){var te=Yr;Xi=!1,Yr=null}else throw Error(t(198));Kr||(Kr=!0,gr=te)}}function bi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ga(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Wa(n){if(bi(n)!==n)throw Error(t(188))}function nc(n){var i=n.alternate;if(!i){if(i=bi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Wa(d),n;if(g===u)return Wa(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=g;else{for(var w=!1,N=d.child;N;){if(N===a){w=!0,a=d,u=g;break}if(N===u){w=!0,u=d,a=g;break}N=N.sibling}if(!w){for(N=g.child;N;){if(N===a){w=!0,a=g,u=d;break}if(N===u){w=!0,u=g,a=d;break}N=N.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Xa(n){return n=nc(n),n!==null?ja(n):null}function ja(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ja(n);if(i!==null)return i;n=n.sibling}return null}var $a=e.unstable_scheduleCallback,b=e.unstable_cancelCallback,X=e.unstable_shouldYield,ie=e.unstable_requestPaint,Y=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,De=e.unstable_NormalPriority,Oe=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Qe=null,Be=null;function gt(n){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:vt,jt=Math.log,kt=Math.LN2;function vt(n){return n>>>=0,n===0?32:31-(jt(n)/kt|0)|0}var $e=64,$t=4194304;function pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Sn(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var N=w&~d;N!==0?u=pt(N):(g&=w,g!==0&&(u=pt(g)))}else w=a&~d,w!==0?u=pt(w):g!==0&&(u=pt(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-st(i),d=1<<a,u|=n[a],i&=~d;return u}function vr(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function In(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-st(g),N=1<<w,B=d[w];B===-1?((N&a)===0||(N&u)!==0)&&(d[w]=vr(N,i)):B<=i&&(n.expiredLanes|=N),g&=~N}}function ji(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bt(){var n=$e;return $e<<=1,($e&4194240)===0&&($e=64),n}function Mn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function ln(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-st(i),n[i]=a}function gn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-st(a),g=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~g}}function un(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-st(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var xt=0;function Pi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Nh,ic,Fh,Oh,kh,rc=!1,qa=[],_r=null,xr=null,yr=null,Lo=new Map,Do=new Map,Sr=[],Bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bh(n,i){switch(n){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Lo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(i.pointerId)}}function Io(n,i,a,u,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[d]},i!==null&&(i=$o(i),i!==null&&ic(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function zv(n,i,a,u,d){switch(i){case"focusin":return _r=Io(_r,n,i,a,u,d),!0;case"dragenter":return xr=Io(xr,n,i,a,u,d),!0;case"mouseover":return yr=Io(yr,n,i,a,u,d),!0;case"pointerover":var g=d.pointerId;return Lo.set(g,Io(Lo.get(g)||null,n,i,a,u,d)),!0;case"gotpointercapture":return g=d.pointerId,Do.set(g,Io(Do.get(g)||null,n,i,a,u,d)),!0}return!1}function zh(n){var i=Zr(n.target);if(i!==null){var a=bi(i);if(a!==null){if(i=a.tag,i===13){if(i=Ga(a),i!==null){n.blockedOn=i,kh(n.priority,function(){Fh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ya(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=oc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);At=u,a.target.dispatchEvent(u),At=null}else return i=$o(a),i!==null&&ic(i),n.blockedOn=a,!1;i.shift()}return!0}function Hh(n,i,a){Ya(n)&&a.delete(i)}function Hv(){rc=!1,_r!==null&&Ya(_r)&&(_r=null),xr!==null&&Ya(xr)&&(xr=null),yr!==null&&Ya(yr)&&(yr=null),Lo.forEach(Hh),Do.forEach(Hh)}function Uo(n,i){n.blockedOn===i&&(n.blockedOn=null,rc||(rc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Hv)))}function No(n){function i(d){return Uo(d,n)}if(0<qa.length){Uo(qa[0],n);for(var a=1;a<qa.length;a++){var u=qa[a];u.blockedOn===n&&(u.blockedOn=null)}}for(_r!==null&&Uo(_r,n),xr!==null&&Uo(xr,n),yr!==null&&Uo(yr,n),Lo.forEach(i),Do.forEach(i),a=0;a<Sr.length;a++)u=Sr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)zh(a),a.blockedOn===null&&Sr.shift()}var As=P.ReactCurrentBatchConfig,Ka=!0;function Vv(n,i,a,u){var d=xt,g=As.transition;As.transition=null;try{xt=1,sc(n,i,a,u)}finally{xt=d,As.transition=g}}function Gv(n,i,a,u){var d=xt,g=As.transition;As.transition=null;try{xt=4,sc(n,i,a,u)}finally{xt=d,As.transition=g}}function sc(n,i,a,u){if(Ka){var d=oc(n,i,a,u);if(d===null)Ec(n,i,u,Za,a),Bh(n,u);else if(zv(d,n,i,a,u))u.stopPropagation();else if(Bh(n,u),i&4&&-1<Bv.indexOf(n)){for(;d!==null;){var g=$o(d);if(g!==null&&Nh(g),g=oc(n,i,a,u),g===null&&Ec(n,i,u,Za,a),g===d)break;d=g}d!==null&&u.stopPropagation()}else Ec(n,i,u,null,a)}}var Za=null;function oc(n,i,a,u){if(Za=null,n=W(u),n=Zr(n),n!==null)if(i=bi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ga(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Za=n,null}function Vh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case Se:return 1;case Re:return 4;case De:case Oe:return 16;case tt:return 536870912;default:return 16}default:return 16}}var Mr=null,ac=null,Qa=null;function Gh(){if(Qa)return Qa;var n,i=ac,a=i.length,u,d="value"in Mr?Mr.value:Mr.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var w=a-n;for(u=1;u<=w&&i[a-u]===d[g-u];u++);return Qa=d.slice(n,1<u?1-u:void 0)}function Ja(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function el(){return!0}function Wh(){return!1}function Yn(n){function i(a,u,d,g,w){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(a=n[N],this[N]=a?a(g):g[N]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?el:Wh,this.isPropagationStopped=Wh,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),i}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=Yn(Cs),Fo=le({},Cs,{view:0,detail:0}),Wv=Yn(Fo),uc,cc,Oo,tl=le({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Oo&&(Oo&&n.type==="mousemove"?(uc=n.screenX-Oo.screenX,cc=n.screenY-Oo.screenY):cc=uc=0,Oo=n),uc)},movementY:function(n){return"movementY"in n?n.movementY:cc}}),Xh=Yn(tl),Xv=le({},tl,{dataTransfer:0}),jv=Yn(Xv),$v=le({},Fo,{relatedTarget:0}),fc=Yn($v),qv=le({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Yv=Yn(qv),Kv=le({},Cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Zv=Yn(Kv),Qv=le({},Cs,{data:0}),jh=Yn(Qv),Jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=t_[n])?!!i[n]:!1}function dc(){return n_}var i_=le({},Fo,{key:function(n){if(n.key){var i=Jv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ja(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?e_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(n){return n.type==="keypress"?Ja(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ja(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),r_=Yn(i_),s_=le({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$h=Yn(s_),o_=le({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),a_=Yn(o_),l_=le({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),u_=Yn(l_),c_=le({},tl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),f_=Yn(c_),d_=[9,13,27,32],hc=f&&"CompositionEvent"in window,ko=null;f&&"documentMode"in document&&(ko=document.documentMode);var h_=f&&"TextEvent"in window&&!ko,qh=f&&(!hc||ko&&8<ko&&11>=ko),Yh=" ",Kh=!1;function Zh(n,i){switch(n){case"keyup":return d_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Rs=!1;function p_(n,i){switch(n){case"compositionend":return Qh(i);case"keypress":return i.which!==32?null:(Kh=!0,Yh);case"textInput":return n=i.data,n===Yh&&Kh?null:n;default:return null}}function m_(n,i){if(Rs)return n==="compositionend"||!hc&&Zh(n,i)?(n=Gh(),Qa=ac=Mr=null,Rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return qh&&i.locale!=="ko"?null:i.data;default:return null}}var g_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!g_[n.type]:i==="textarea"}function ep(n,i,a,u){be(u),i=ol(i,"onChange"),0<i.length&&(a=new lc("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Bo=null,zo=null;function v_(n){_p(n,0)}function nl(n){var i=Is(n);if(Dt(i))return n}function __(n,i){if(n==="change")return i}var tp=!1;if(f){var pc;if(f){var mc="oninput"in document;if(!mc){var np=document.createElement("div");np.setAttribute("oninput","return;"),mc=typeof np.oninput=="function"}pc=mc}else pc=!1;tp=pc&&(!document.documentMode||9<document.documentMode)}function ip(){Bo&&(Bo.detachEvent("onpropertychange",rp),zo=Bo=null)}function rp(n){if(n.propertyName==="value"&&nl(zo)){var i=[];ep(i,zo,n,W(n)),Hn(v_,i)}}function x_(n,i,a){n==="focusin"?(ip(),Bo=i,zo=a,Bo.attachEvent("onpropertychange",rp)):n==="focusout"&&ip()}function y_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return nl(zo)}function S_(n,i){if(n==="click")return nl(i)}function M_(n,i){if(n==="input"||n==="change")return nl(i)}function E_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var mi=typeof Object.is=="function"?Object.is:E_;function Ho(n,i){if(mi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!mi(n[d],i[d]))return!1}return!0}function sp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function op(n,i){var a=sp(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=sp(a)}}function ap(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ap(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function lp(){for(var n=window,i=ut();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ut(n.document)}return i}function gc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function w_(n){var i=lp(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ap(a.ownerDocument.documentElement,a)){if(u!==null&&gc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(u.start,d);u=u.end===void 0?g:Math.min(u.end,d),!n.extend&&g>u&&(d=u,u=g,g=d),d=op(a,g);var w=op(a,u);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var T_=f&&"documentMode"in document&&11>=document.documentMode,bs=null,vc=null,Vo=null,_c=!1;function up(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_c||bs==null||bs!==ut(u)||(u=bs,"selectionStart"in u&&gc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Vo&&Ho(Vo,u)||(Vo=u,u=ol(vc,"onSelect"),0<u.length&&(i=new lc("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=bs)))}function il(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ps={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},xc={},cp={};f&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function rl(n){if(xc[n])return xc[n];if(!Ps[n])return n;var i=Ps[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in cp)return xc[n]=i[a];return n}var fp=rl("animationend"),dp=rl("animationiteration"),hp=rl("animationstart"),pp=rl("transitionend"),mp=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(n,i){mp.set(n,i),l(i,[n])}for(var yc=0;yc<gp.length;yc++){var Sc=gp[yc],A_=Sc.toLowerCase(),C_=Sc[0].toUpperCase()+Sc.slice(1);Er(A_,"on"+C_)}Er(fp,"onAnimationEnd"),Er(dp,"onAnimationIteration"),Er(hp,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(pp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function vp(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Va(u,i,void 0,n),n.currentTarget=null}function _p(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var w=u.length-1;0<=w;w--){var N=u[w],B=N.instance,te=N.currentTarget;if(N=N.listener,B!==g&&d.isPropagationStopped())break e;vp(d,N,te),g=B}else for(w=0;w<u.length;w++){if(N=u[w],B=N.instance,te=N.currentTarget,N=N.listener,B!==g&&d.isPropagationStopped())break e;vp(d,N,te),g=B}}}if(Kr)throw n=gr,Kr=!1,gr=null,n}function Ft(n,i){var a=i[bc];a===void 0&&(a=i[bc]=new Set);var u=n+"__bubble";a.has(u)||(xp(i,n,2,!1),a.add(u))}function Mc(n,i,a){var u=0;i&&(u|=4),xp(a,n,u,i)}var sl="_reactListening"+Math.random().toString(36).slice(2);function Wo(n){if(!n[sl]){n[sl]=!0,s.forEach(function(a){a!=="selectionchange"&&(R_.has(a)||Mc(a,!1,n),Mc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[sl]||(i[sl]=!0,Mc("selectionchange",!1,i))}}function xp(n,i,a,u){switch(Vh(i)){case 1:var d=Vv;break;case 4:d=Gv;break;default:d=sc}a=d.bind(null,i,a,n),d=void 0,!ws||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Ec(n,i,a,u,d){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var N=u.stateNode.containerInfo;if(N===d||N.nodeType===8&&N.parentNode===d)break;if(w===4)for(w=u.return;w!==null;){var B=w.tag;if((B===3||B===4)&&(B=w.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;w=w.return}for(;N!==null;){if(w=Zr(N),w===null)return;if(B=w.tag,B===5||B===6){u=g=w;continue e}N=N.parentNode}}u=u.return}Hn(function(){var te=g,ge=W(a),ye=[];e:{var me=mp.get(n);if(me!==void 0){var Ie=lc,ke=n;switch(n){case"keypress":if(Ja(a)===0)break e;case"keydown":case"keyup":Ie=r_;break;case"focusin":ke="focus",Ie=fc;break;case"focusout":ke="blur",Ie=fc;break;case"beforeblur":case"afterblur":Ie=fc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=a_;break;case fp:case dp:case hp:Ie=Yv;break;case pp:Ie=u_;break;case"scroll":Ie=Wv;break;case"wheel":Ie=f_;break;case"copy":case"cut":case"paste":Ie=Zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=$h}var ze=(i&4)!==0,Zt=!ze&&n==="scroll",q=ze?me!==null?me+"Capture":null:me;ze=[];for(var G=te,K;G!==null;){K=G;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,q!==null&&(Ee=Dn(G,q),Ee!=null&&ze.push(Xo(G,Ee,K)))),Zt)break;G=G.return}0<ze.length&&(me=new Ie(me,ke,null,a,ge),ye.push({event:me,listeners:ze}))}}if((i&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",me&&a!==At&&(ke=a.relatedTarget||a.fromElement)&&(Zr(ke)||ke[$i]))break e;if((Ie||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Ie?(ke=a.relatedTarget||a.toElement,Ie=te,ke=ke?Zr(ke):null,ke!==null&&(Zt=bi(ke),ke!==Zt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Ie=null,ke=te),Ie!==ke)){if(ze=Xh,Ee="onMouseLeave",q="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(ze=$h,Ee="onPointerLeave",q="onPointerEnter",G="pointer"),Zt=Ie==null?me:Is(Ie),K=ke==null?me:Is(ke),me=new ze(Ee,G+"leave",Ie,a,ge),me.target=Zt,me.relatedTarget=K,Ee=null,Zr(ge)===te&&(ze=new ze(q,G+"enter",ke,a,ge),ze.target=K,ze.relatedTarget=Zt,Ee=ze),Zt=Ee,Ie&&ke)t:{for(ze=Ie,q=ke,G=0,K=ze;K;K=Ls(K))G++;for(K=0,Ee=q;Ee;Ee=Ls(Ee))K++;for(;0<G-K;)ze=Ls(ze),G--;for(;0<K-G;)q=Ls(q),K--;for(;G--;){if(ze===q||q!==null&&ze===q.alternate)break t;ze=Ls(ze),q=Ls(q)}ze=null}else ze=null;Ie!==null&&yp(ye,me,Ie,ze,!1),ke!==null&&Zt!==null&&yp(ye,Zt,ke,ze,!0)}}e:{if(me=te?Is(te):window,Ie=me.nodeName&&me.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&me.type==="file")var We=__;else if(Jh(me))if(tp)We=M_;else{We=y_;var Ke=x_}else(Ie=me.nodeName)&&Ie.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(We=S_);if(We&&(We=We(n,te))){ep(ye,We,a,ge);break e}Ke&&Ke(n,me,te),n==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&Ct(me,"number",me.value)}switch(Ke=te?Is(te):window,n){case"focusin":(Jh(Ke)||Ke.contentEditable==="true")&&(bs=Ke,vc=te,Vo=null);break;case"focusout":Vo=vc=bs=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,up(ye,a,ge);break;case"selectionchange":if(T_)break;case"keydown":case"keyup":up(ye,a,ge)}var Ze;if(hc)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Rs?Zh(n,a)&&(nt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(qh&&a.locale!=="ko"&&(Rs||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Rs&&(Ze=Gh()):(Mr=ge,ac="value"in Mr?Mr.value:Mr.textContent,Rs=!0)),Ke=ol(te,nt),0<Ke.length&&(nt=new jh(nt,n,null,a,ge),ye.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=Qh(a),Ze!==null&&(nt.data=Ze)))),(Ze=h_?p_(n,a):m_(n,a))&&(te=ol(te,"onBeforeInput"),0<te.length&&(ge=new jh("onBeforeInput","beforeinput",null,a,ge),ye.push({event:ge,listeners:te}),ge.data=Ze))}_p(ye,i)})}function Xo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function ol(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=Dn(n,a),g!=null&&u.unshift(Xo(n,g,d)),g=Dn(n,i),g!=null&&u.push(Xo(n,g,d))),n=n.return}return u}function Ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function yp(n,i,a,u,d){for(var g=i._reactName,w=[];a!==null&&a!==u;){var N=a,B=N.alternate,te=N.stateNode;if(B!==null&&B===u)break;N.tag===5&&te!==null&&(N=te,d?(B=Dn(a,g),B!=null&&w.unshift(Xo(a,B,N))):d||(B=Dn(a,g),B!=null&&w.push(Xo(a,B,N)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var b_=/\r\n?/g,P_=/\u0000|\uFFFD/g;function Sp(n){return(typeof n=="string"?n:""+n).replace(b_,`
`).replace(P_,"")}function al(n,i,a){if(i=Sp(i),Sp(n)!==i&&a)throw Error(t(425))}function ll(){}var wc=null,Tc=null;function Ac(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Cc=typeof setTimeout=="function"?setTimeout:void 0,L_=typeof clearTimeout=="function"?clearTimeout:void 0,Mp=typeof Promise=="function"?Promise:void 0,D_=typeof queueMicrotask=="function"?queueMicrotask:typeof Mp<"u"?function(n){return Mp.resolve(null).then(n).catch(I_)}:Cc;function I_(n){setTimeout(function(){throw n})}function Rc(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),No(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);No(i)}function wr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ep(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Li="__reactFiber$"+Ds,jo="__reactProps$"+Ds,$i="__reactContainer$"+Ds,bc="__reactEvents$"+Ds,U_="__reactListeners$"+Ds,N_="__reactHandles$"+Ds;function Zr(n){var i=n[Li];if(i)return i;for(var a=n.parentNode;a;){if(i=a[$i]||a[Li]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ep(n);n!==null;){if(a=n[Li])return a;n=Ep(n)}return i}n=a,a=n.parentNode}return null}function $o(n){return n=n[Li]||n[$i],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Is(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ul(n){return n[jo]||null}var Pc=[],Us=-1;function Tr(n){return{current:n}}function Ot(n){0>Us||(n.current=Pc[Us],Pc[Us]=null,Us--)}function It(n,i){Us++,Pc[Us]=n.current,n.current=i}var Ar={},En=Tr(Ar),Vn=Tr(!1),Qr=Ar;function Ns(n,i){var a=n.type.contextTypes;if(!a)return Ar;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gn(n){return n=n.childContextTypes,n!=null}function cl(){Ot(Vn),Ot(En)}function wp(n,i,a){if(En.current!==Ar)throw Error(t(168));It(En,i),It(Vn,a)}function Tp(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,_e(n)||"Unknown",d));return le({},a,u)}function fl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ar,Qr=En.current,It(En,n),It(Vn,Vn.current),!0}function Ap(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Tp(n,i,Qr),u.__reactInternalMemoizedMergedChildContext=n,Ot(Vn),Ot(En),It(En,n)):Ot(Vn),It(Vn,a)}var qi=null,dl=!1,Lc=!1;function Cp(n){qi===null?qi=[n]:qi.push(n)}function F_(n){dl=!0,Cp(n)}function Cr(){if(!Lc&&qi!==null){Lc=!0;var n=0,i=xt;try{var a=qi;for(xt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}qi=null,dl=!1}catch(d){throw qi!==null&&(qi=qi.slice(n+1)),$a(Se,Cr),d}finally{xt=i,Lc=!1}}return null}var Fs=[],Os=0,hl=null,pl=0,si=[],oi=0,Jr=null,Yi=1,Ki="";function es(n,i){Fs[Os++]=pl,Fs[Os++]=hl,hl=n,pl=i}function Rp(n,i,a){si[oi++]=Yi,si[oi++]=Ki,si[oi++]=Jr,Jr=n;var u=Yi;n=Ki;var d=32-st(u)-1;u&=~(1<<d),a+=1;var g=32-st(i)+d;if(30<g){var w=d-d%5;g=(u&(1<<w)-1).toString(32),u>>=w,d-=w,Yi=1<<32-st(i)+d|a<<d|u,Ki=g+n}else Yi=1<<g|a<<d|u,Ki=n}function Dc(n){n.return!==null&&(es(n,1),Rp(n,1,0))}function Ic(n){for(;n===hl;)hl=Fs[--Os],Fs[Os]=null,pl=Fs[--Os],Fs[Os]=null;for(;n===Jr;)Jr=si[--oi],si[oi]=null,Ki=si[--oi],si[oi]=null,Yi=si[--oi],si[oi]=null}var Kn=null,Zn=null,Bt=!1,gi=null;function bp(n,i){var a=ci(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Pp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Kn=n,Zn=wr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Kn=n,Zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Jr!==null?{id:Yi,overflow:Ki}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ci(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Kn=n,Zn=null,!0):!1;default:return!1}}function Uc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Nc(n){if(Bt){var i=Zn;if(i){var a=i;if(!Pp(n,i)){if(Uc(n))throw Error(t(418));i=wr(a.nextSibling);var u=Kn;i&&Pp(n,i)?bp(u,a):(n.flags=n.flags&-4097|2,Bt=!1,Kn=n)}}else{if(Uc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,Kn=n}}}function Lp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kn=n}function ml(n){if(n!==Kn)return!1;if(!Bt)return Lp(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ac(n.type,n.memoizedProps)),i&&(i=Zn)){if(Uc(n))throw Dp(),Error(t(418));for(;i;)bp(n,i),i=wr(i.nextSibling)}if(Lp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Zn=wr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Zn=null}}else Zn=Kn?wr(n.stateNode.nextSibling):null;return!0}function Dp(){for(var n=Zn;n;)n=wr(n.nextSibling)}function ks(){Zn=Kn=null,Bt=!1}function Fc(n){gi===null?gi=[n]:gi.push(n)}var O_=P.ReactCurrentBatchConfig;function qo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var N=d.refs;w===null?delete N[g]:N[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function gl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Ip(n){var i=n._init;return i(n._payload)}function Up(n){function i(q,G){if(n){var K=q.deletions;K===null?(q.deletions=[G],q.flags|=16):K.push(G)}}function a(q,G){if(!n)return null;for(;G!==null;)i(q,G),G=G.sibling;return null}function u(q,G){for(q=new Map;G!==null;)G.key!==null?q.set(G.key,G):q.set(G.index,G),G=G.sibling;return q}function d(q,G){return q=Nr(q,G),q.index=0,q.sibling=null,q}function g(q,G,K){return q.index=K,n?(K=q.alternate,K!==null?(K=K.index,K<G?(q.flags|=2,G):K):(q.flags|=2,G)):(q.flags|=1048576,G)}function w(q){return n&&q.alternate===null&&(q.flags|=2),q}function N(q,G,K,Ee){return G===null||G.tag!==6?(G=Rf(K,q.mode,Ee),G.return=q,G):(G=d(G,K),G.return=q,G)}function B(q,G,K,Ee){var We=K.type;return We===C?ge(q,G,K.props.children,Ee,K.key):G!==null&&(G.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ee&&Ip(We)===G.type)?(Ee=d(G,K.props),Ee.ref=qo(q,G,K),Ee.return=q,Ee):(Ee=zl(K.type,K.key,K.props,null,q.mode,Ee),Ee.ref=qo(q,G,K),Ee.return=q,Ee)}function te(q,G,K,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=bf(K,q.mode,Ee),G.return=q,G):(G=d(G,K.children||[]),G.return=q,G)}function ge(q,G,K,Ee,We){return G===null||G.tag!==7?(G=ls(K,q.mode,Ee,We),G.return=q,G):(G=d(G,K),G.return=q,G)}function ye(q,G,K){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Rf(""+G,q.mode,K),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case V:return K=zl(G.type,G.key,G.props,null,q.mode,K),K.ref=qo(q,null,G),K.return=q,K;case U:return G=bf(G,q.mode,K),G.return=q,G;case ee:var Ee=G._init;return ye(q,Ee(G._payload),K)}if(Ge(G)||ae(G))return G=ls(G,q.mode,K,null),G.return=q,G;gl(q,G)}return null}function me(q,G,K,Ee){var We=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return We!==null?null:N(q,G,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case V:return K.key===We?B(q,G,K,Ee):null;case U:return K.key===We?te(q,G,K,Ee):null;case ee:return We=K._init,me(q,G,We(K._payload),Ee)}if(Ge(K)||ae(K))return We!==null?null:ge(q,G,K,Ee,null);gl(q,K)}return null}function Ie(q,G,K,Ee,We){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get(K)||null,N(G,q,""+Ee,We);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case V:return q=q.get(Ee.key===null?K:Ee.key)||null,B(G,q,Ee,We);case U:return q=q.get(Ee.key===null?K:Ee.key)||null,te(G,q,Ee,We);case ee:var Ke=Ee._init;return Ie(q,G,K,Ke(Ee._payload),We)}if(Ge(Ee)||ae(Ee))return q=q.get(K)||null,ge(G,q,Ee,We,null);gl(G,Ee)}return null}function ke(q,G,K,Ee){for(var We=null,Ke=null,Ze=G,nt=G=0,dn=null;Ze!==null&&nt<K.length;nt++){Ze.index>nt?(dn=Ze,Ze=null):dn=Ze.sibling;var St=me(q,Ze,K[nt],Ee);if(St===null){Ze===null&&(Ze=dn);break}n&&Ze&&St.alternate===null&&i(q,Ze),G=g(St,G,nt),Ke===null?We=St:Ke.sibling=St,Ke=St,Ze=dn}if(nt===K.length)return a(q,Ze),Bt&&es(q,nt),We;if(Ze===null){for(;nt<K.length;nt++)Ze=ye(q,K[nt],Ee),Ze!==null&&(G=g(Ze,G,nt),Ke===null?We=Ze:Ke.sibling=Ze,Ke=Ze);return Bt&&es(q,nt),We}for(Ze=u(q,Ze);nt<K.length;nt++)dn=Ie(Ze,q,nt,K[nt],Ee),dn!==null&&(n&&dn.alternate!==null&&Ze.delete(dn.key===null?nt:dn.key),G=g(dn,G,nt),Ke===null?We=dn:Ke.sibling=dn,Ke=dn);return n&&Ze.forEach(function(Fr){return i(q,Fr)}),Bt&&es(q,nt),We}function ze(q,G,K,Ee){var We=ae(K);if(typeof We!="function")throw Error(t(150));if(K=We.call(K),K==null)throw Error(t(151));for(var Ke=We=null,Ze=G,nt=G=0,dn=null,St=K.next();Ze!==null&&!St.done;nt++,St=K.next()){Ze.index>nt?(dn=Ze,Ze=null):dn=Ze.sibling;var Fr=me(q,Ze,St.value,Ee);if(Fr===null){Ze===null&&(Ze=dn);break}n&&Ze&&Fr.alternate===null&&i(q,Ze),G=g(Fr,G,nt),Ke===null?We=Fr:Ke.sibling=Fr,Ke=Fr,Ze=dn}if(St.done)return a(q,Ze),Bt&&es(q,nt),We;if(Ze===null){for(;!St.done;nt++,St=K.next())St=ye(q,St.value,Ee),St!==null&&(G=g(St,G,nt),Ke===null?We=St:Ke.sibling=St,Ke=St);return Bt&&es(q,nt),We}for(Ze=u(q,Ze);!St.done;nt++,St=K.next())St=Ie(Ze,q,nt,St.value,Ee),St!==null&&(n&&St.alternate!==null&&Ze.delete(St.key===null?nt:St.key),G=g(St,G,nt),Ke===null?We=St:Ke.sibling=St,Ke=St);return n&&Ze.forEach(function(gx){return i(q,gx)}),Bt&&es(q,nt),We}function Zt(q,G,K,Ee){if(typeof K=="object"&&K!==null&&K.type===C&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case V:e:{for(var We=K.key,Ke=G;Ke!==null;){if(Ke.key===We){if(We=K.type,We===C){if(Ke.tag===7){a(q,Ke.sibling),G=d(Ke,K.props.children),G.return=q,q=G;break e}}else if(Ke.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ee&&Ip(We)===Ke.type){a(q,Ke.sibling),G=d(Ke,K.props),G.ref=qo(q,Ke,K),G.return=q,q=G;break e}a(q,Ke);break}else i(q,Ke);Ke=Ke.sibling}K.type===C?(G=ls(K.props.children,q.mode,Ee,K.key),G.return=q,q=G):(Ee=zl(K.type,K.key,K.props,null,q.mode,Ee),Ee.ref=qo(q,G,K),Ee.return=q,q=Ee)}return w(q);case U:e:{for(Ke=K.key;G!==null;){if(G.key===Ke)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a(q,G.sibling),G=d(G,K.children||[]),G.return=q,q=G;break e}else{a(q,G);break}else i(q,G);G=G.sibling}G=bf(K,q.mode,Ee),G.return=q,q=G}return w(q);case ee:return Ke=K._init,Zt(q,G,Ke(K._payload),Ee)}if(Ge(K))return ke(q,G,K,Ee);if(ae(K))return ze(q,G,K,Ee);gl(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,G!==null&&G.tag===6?(a(q,G.sibling),G=d(G,K),G.return=q,q=G):(a(q,G),G=Rf(K,q.mode,Ee),G.return=q,q=G),w(q)):a(q,G)}return Zt}var Bs=Up(!0),Np=Up(!1),vl=Tr(null),_l=null,zs=null,Oc=null;function kc(){Oc=zs=_l=null}function Bc(n){var i=vl.current;Ot(vl),n._currentValue=i}function zc(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Hs(n,i){_l=n,Oc=zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Wn=!0),n.firstContext=null)}function ai(n){var i=n._currentValue;if(Oc!==n)if(n={context:n,memoizedValue:i,next:null},zs===null){if(_l===null)throw Error(t(308));zs=n,_l.dependencies={lanes:0,firstContext:n}}else zs=zs.next=n;return i}var ts=null;function Hc(n){ts===null?ts=[n]:ts.push(n)}function Fp(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,Hc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Zi(n,u)}function Zi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Rr=!1;function Vc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Op(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Qi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function br(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(yt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Zi(n,a)}return d=u.interleaved,d===null?(i.next=i,Hc(u)):(i.next=d.next,d.next=i),u.interleaved=i,Zi(n,a)}function xl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,un(n,a)}}function kp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function yl(n,i,a,u){var d=n.updateQueue;Rr=!1;var g=d.firstBaseUpdate,w=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var B=N,te=B.next;B.next=null,w===null?g=te:w.next=te,w=B;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,N=ge.lastBaseUpdate,N!==w&&(N===null?ge.firstBaseUpdate=te:N.next=te,ge.lastBaseUpdate=B))}if(g!==null){var ye=d.baseState;w=0,ge=te=B=null,N=g;do{var me=N.lane,Ie=N.eventTime;if((u&me)===me){ge!==null&&(ge=ge.next={eventTime:Ie,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var ke=n,ze=N;switch(me=i,Ie=a,ze.tag){case 1:if(ke=ze.payload,typeof ke=="function"){ye=ke.call(Ie,ye,me);break e}ye=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=ze.payload,me=typeof ke=="function"?ke.call(Ie,ye,me):ke,me==null)break e;ye=le({},ye,me);break e;case 2:Rr=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,me=d.effects,me===null?d.effects=[N]:me.push(N))}else Ie={eventTime:Ie,lane:me,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ge===null?(te=ge=Ie,B=ye):ge=ge.next=Ie,w|=me;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;me=N,N=me.next,me.next=null,d.lastBaseUpdate=me,d.shared.pending=null}}while(!0);if(ge===null&&(B=ye),d.baseState=B,d.firstBaseUpdate=te,d.lastBaseUpdate=ge,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);rs|=w,n.lanes=w,n.memoizedState=ye}}function Bp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Yo={},Di=Tr(Yo),Ko=Tr(Yo),Zo=Tr(Yo);function ns(n){if(n===Yo)throw Error(t(174));return n}function Gc(n,i){switch(It(Zo,i),It(Ko,n),It(Di,Yo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:He(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=He(i,n)}Ot(Di),It(Di,i)}function Vs(){Ot(Di),Ot(Ko),Ot(Zo)}function zp(n){ns(Zo.current);var i=ns(Di.current),a=He(i,n.type);i!==a&&(It(Ko,n),It(Di,a))}function Wc(n){Ko.current===n&&(Ot(Di),Ot(Ko))}var Gt=Tr(0);function Sl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Xc=[];function jc(){for(var n=0;n<Xc.length;n++)Xc[n]._workInProgressVersionPrimary=null;Xc.length=0}var Ml=P.ReactCurrentDispatcher,$c=P.ReactCurrentBatchConfig,is=0,Wt=null,rn=null,cn=null,El=!1,Qo=!1,Jo=0,k_=0;function wn(){throw Error(t(321))}function qc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!mi(n[a],i[a]))return!1;return!0}function Yc(n,i,a,u,d,g){if(is=g,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ml.current=n===null||n.memoizedState===null?V_:G_,n=a(u,d),Qo){g=0;do{if(Qo=!1,Jo=0,25<=g)throw Error(t(301));g+=1,cn=rn=null,i.updateQueue=null,Ml.current=W_,n=a(u,d)}while(Qo)}if(Ml.current=Al,i=rn!==null&&rn.next!==null,is=0,cn=rn=Wt=null,El=!1,i)throw Error(t(300));return n}function Kc(){var n=Jo!==0;return Jo=0,n}function Ii(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Wt.memoizedState=cn=n:cn=cn.next=n,cn}function li(){if(rn===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var i=cn===null?Wt.memoizedState:cn.next;if(i!==null)cn=i,rn=n;else{if(n===null)throw Error(t(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},cn===null?Wt.memoizedState=cn=n:cn=cn.next=n}return cn}function ea(n,i){return typeof i=="function"?i(n):i}function Zc(n){var i=li(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=rn,d=u.baseQueue,g=a.pending;if(g!==null){if(d!==null){var w=d.next;d.next=g.next,g.next=w}u.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,u=u.baseState;var N=w=null,B=null,te=g;do{var ge=te.lane;if((is&ge)===ge)B!==null&&(B=B.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),u=te.hasEagerState?te.eagerState:n(u,te.action);else{var ye={lane:ge,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};B===null?(N=B=ye,w=u):B=B.next=ye,Wt.lanes|=ge,rs|=ge}te=te.next}while(te!==null&&te!==g);B===null?w=u:B.next=N,mi(u,i.memoizedState)||(Wn=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=B,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do g=d.lane,Wt.lanes|=g,rs|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Qc(n){var i=li(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do g=n(g,w.action),w=w.next;while(w!==d);mi(g,i.memoizedState)||(Wn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,u]}function Hp(){}function Vp(n,i){var a=Wt,u=li(),d=i(),g=!mi(u.memoizedState,d);if(g&&(u.memoizedState=d,Wn=!0),u=u.queue,Jc(Xp.bind(null,a,u,n),[n]),u.getSnapshot!==i||g||cn!==null&&cn.memoizedState.tag&1){if(a.flags|=2048,ta(9,Wp.bind(null,a,u,d,i),void 0,null),fn===null)throw Error(t(349));(is&30)!==0||Gp(a,i,d)}return d}function Gp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Wp(n,i,a,u){i.value=a,i.getSnapshot=u,jp(i)&&$p(n)}function Xp(n,i,a){return a(function(){jp(i)&&$p(n)})}function jp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!mi(n,a)}catch{return!0}}function $p(n){var i=Zi(n,1);i!==null&&yi(i,n,1,-1)}function qp(n){var i=Ii();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:n},i.queue=n,n=n.dispatch=H_.bind(null,Wt,n),[i.memoizedState,n]}function ta(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Yp(){return li().memoizedState}function wl(n,i,a,u){var d=Ii();Wt.flags|=n,d.memoizedState=ta(1|i,a,void 0,u===void 0?null:u)}function Tl(n,i,a,u){var d=li();u=u===void 0?null:u;var g=void 0;if(rn!==null){var w=rn.memoizedState;if(g=w.destroy,u!==null&&qc(u,w.deps)){d.memoizedState=ta(i,a,g,u);return}}Wt.flags|=n,d.memoizedState=ta(1|i,a,g,u)}function Kp(n,i){return wl(8390656,8,n,i)}function Jc(n,i){return Tl(2048,8,n,i)}function Zp(n,i){return Tl(4,2,n,i)}function Qp(n,i){return Tl(4,4,n,i)}function Jp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function em(n,i,a){return a=a!=null?a.concat([n]):null,Tl(4,4,Jp.bind(null,i,n),a)}function ef(){}function tm(n,i){var a=li();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&qc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function nm(n,i){var a=li();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&qc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function im(n,i,a){return(is&21)===0?(n.baseState&&(n.baseState=!1,Wn=!0),n.memoizedState=a):(mi(a,i)||(a=bt(),Wt.lanes|=a,rs|=a,n.baseState=!0),i)}function B_(n,i){var a=xt;xt=a!==0&&4>a?a:4,n(!0);var u=$c.transition;$c.transition={};try{n(!1),i()}finally{xt=a,$c.transition=u}}function rm(){return li().memoizedState}function z_(n,i,a){var u=Ir(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},sm(n))om(i,a);else if(a=Fp(n,i,a,u),a!==null){var d=Nn();yi(a,n,u,d),am(a,i,u)}}function H_(n,i,a){var u=Ir(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(sm(n))om(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,N=g(w,a);if(d.hasEagerState=!0,d.eagerState=N,mi(N,w)){var B=i.interleaved;B===null?(d.next=d,Hc(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}a=Fp(n,i,d,u),a!==null&&(d=Nn(),yi(a,n,u,d),am(a,i,u))}}function sm(n){var i=n.alternate;return n===Wt||i!==null&&i===Wt}function om(n,i){Qo=El=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function am(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,un(n,a)}}var Al={readContext:ai,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},V_={readContext:ai,useCallback:function(n,i){return Ii().memoizedState=[n,i===void 0?null:i],n},useContext:ai,useEffect:Kp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,wl(4194308,4,Jp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return wl(4194308,4,n,i)},useInsertionEffect:function(n,i){return wl(4,2,n,i)},useMemo:function(n,i){var a=Ii();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Ii();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=z_.bind(null,Wt,n),[u.memoizedState,n]},useRef:function(n){var i=Ii();return n={current:n},i.memoizedState=n},useState:qp,useDebugValue:ef,useDeferredValue:function(n){return Ii().memoizedState=n},useTransition:function(){var n=qp(!1),i=n[0];return n=B_.bind(null,n[1]),Ii().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Wt,d=Ii();if(Bt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),fn===null)throw Error(t(349));(is&30)!==0||Gp(u,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,Kp(Xp.bind(null,u,g,n),[n]),u.flags|=2048,ta(9,Wp.bind(null,u,g,a,i),void 0,null),a},useId:function(){var n=Ii(),i=fn.identifierPrefix;if(Bt){var a=Ki,u=Yi;a=(u&~(1<<32-st(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Jo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=k_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},G_={readContext:ai,useCallback:tm,useContext:ai,useEffect:Jc,useImperativeHandle:em,useInsertionEffect:Zp,useLayoutEffect:Qp,useMemo:nm,useReducer:Zc,useRef:Yp,useState:function(){return Zc(ea)},useDebugValue:ef,useDeferredValue:function(n){var i=li();return im(i,rn.memoizedState,n)},useTransition:function(){var n=Zc(ea)[0],i=li().memoizedState;return[n,i]},useMutableSource:Hp,useSyncExternalStore:Vp,useId:rm,unstable_isNewReconciler:!1},W_={readContext:ai,useCallback:tm,useContext:ai,useEffect:Jc,useImperativeHandle:em,useInsertionEffect:Zp,useLayoutEffect:Qp,useMemo:nm,useReducer:Qc,useRef:Yp,useState:function(){return Qc(ea)},useDebugValue:ef,useDeferredValue:function(n){var i=li();return rn===null?i.memoizedState=n:im(i,rn.memoizedState,n)},useTransition:function(){var n=Qc(ea)[0],i=li().memoizedState;return[n,i]},useMutableSource:Hp,useSyncExternalStore:Vp,useId:rm,unstable_isNewReconciler:!1};function vi(n,i){if(n&&n.defaultProps){i=le({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function tf(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:le({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Cl={isMounted:function(n){return(n=n._reactInternals)?bi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Nn(),d=Ir(n),g=Qi(u,d);g.payload=i,a!=null&&(g.callback=a),i=br(n,g,d),i!==null&&(yi(i,n,d,u),xl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Nn(),d=Ir(n),g=Qi(u,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=br(n,g,d),i!==null&&(yi(i,n,d,u),xl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Nn(),u=Ir(n),d=Qi(a,u);d.tag=2,i!=null&&(d.callback=i),i=br(n,d,u),i!==null&&(yi(i,n,u,a),xl(i,n,u))}};function lm(n,i,a,u,d,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,w):i.prototype&&i.prototype.isPureReactComponent?!Ho(a,u)||!Ho(d,g):!0}function um(n,i,a){var u=!1,d=Ar,g=i.contextType;return typeof g=="object"&&g!==null?g=ai(g):(d=Gn(i)?Qr:En.current,u=i.contextTypes,g=(u=u!=null)?Ns(n,d):Ar),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Cl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function cm(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Cl.enqueueReplaceState(i,i.state,null)}function nf(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Vc(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=ai(g):(g=Gn(i)?Qr:En.current,d.context=Ns(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(tf(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Cl.enqueueReplaceState(d,d.state,null),yl(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,i){try{var a="",u=i;do a+=he(u),u=u.return;while(u);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function rf(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function sf(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var X_=typeof WeakMap=="function"?WeakMap:Map;function fm(n,i,a){a=Qi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Ul||(Ul=!0,yf=u),sf(n,i)},a}function dm(n,i,a){a=Qi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){sf(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){sf(n,i),typeof u!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function hm(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new X_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=sx.bind(null,n,i,a),i.then(n,n))}function pm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function mm(n,i,a,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Qi(-1,1),i.tag=2,br(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var j_=P.ReactCurrentOwner,Wn=!1;function Un(n,i,a,u){i.child=n===null?Np(i,null,a,u):Bs(i,n.child,a,u)}function gm(n,i,a,u,d){a=a.render;var g=i.ref;return Hs(i,d),u=Yc(n,i,a,u,g,d),a=Kc(),n!==null&&!Wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ji(n,i,d)):(Bt&&a&&Dc(i),i.flags|=1,Un(n,i,u,d),i.child)}function vm(n,i,a,u,d){if(n===null){var g=a.type;return typeof g=="function"&&!Cf(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,_m(n,i,g,u,d)):(n=zl(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ho,a(w,u)&&n.ref===i.ref)return Ji(n,i,d)}return i.flags|=1,n=Nr(g,u),n.ref=i.ref,n.return=i,i.child=n}function _m(n,i,a,u,d){if(n!==null){var g=n.memoizedProps;if(Ho(g,u)&&n.ref===i.ref)if(Wn=!1,i.pendingProps=u=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Wn=!0);else return i.lanes=n.lanes,Ji(n,i,d)}return of(n,i,a,u,d)}function xm(n,i,a){var u=i.pendingProps,d=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Xs,Qn),Qn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(Xs,Qn),Qn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,It(Xs,Qn),Qn|=u}else g!==null?(u=g.baseLanes|a,i.memoizedState=null):u=a,It(Xs,Qn),Qn|=u;return Un(n,i,d,a),i.child}function ym(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function of(n,i,a,u,d){var g=Gn(a)?Qr:En.current;return g=Ns(i,g),Hs(i,d),a=Yc(n,i,a,u,g,d),u=Kc(),n!==null&&!Wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ji(n,i,d)):(Bt&&u&&Dc(i),i.flags|=1,Un(n,i,a,d),i.child)}function Sm(n,i,a,u,d){if(Gn(a)){var g=!0;fl(i)}else g=!1;if(Hs(i,d),i.stateNode===null)bl(n,i),um(i,a,u),nf(i,a,u,d),u=!0;else if(n===null){var w=i.stateNode,N=i.memoizedProps;w.props=N;var B=w.context,te=a.contextType;typeof te=="object"&&te!==null?te=ai(te):(te=Gn(a)?Qr:En.current,te=Ns(i,te));var ge=a.getDerivedStateFromProps,ye=typeof ge=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==u||B!==te)&&cm(i,w,u,te),Rr=!1;var me=i.memoizedState;w.state=me,yl(i,u,w,d),B=i.memoizedState,N!==u||me!==B||Vn.current||Rr?(typeof ge=="function"&&(tf(i,a,ge,u),B=i.memoizedState),(N=Rr||lm(i,a,N,u,me,B,te))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),w.props=u,w.state=B,w.context=te,u=N):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,Op(n,i),N=i.memoizedProps,te=i.type===i.elementType?N:vi(i.type,N),w.props=te,ye=i.pendingProps,me=w.context,B=a.contextType,typeof B=="object"&&B!==null?B=ai(B):(B=Gn(a)?Qr:En.current,B=Ns(i,B));var Ie=a.getDerivedStateFromProps;(ge=typeof Ie=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==ye||me!==B)&&cm(i,w,u,B),Rr=!1,me=i.memoizedState,w.state=me,yl(i,u,w,d);var ke=i.memoizedState;N!==ye||me!==ke||Vn.current||Rr?(typeof Ie=="function"&&(tf(i,a,Ie,u),ke=i.memoizedState),(te=Rr||lm(i,a,te,u,me,ke,B)||!1)?(ge||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,ke,B),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,ke,B)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ke),w.props=u,w.state=ke,w.context=B,u=te):(typeof w.componentDidUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),u=!1)}return af(n,i,a,u,g,d)}function af(n,i,a,u,d,g){ym(n,i);var w=(i.flags&128)!==0;if(!u&&!w)return d&&Ap(i,a,!1),Ji(n,i,g);u=i.stateNode,j_.current=i;var N=w&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&w?(i.child=Bs(i,n.child,null,g),i.child=Bs(i,null,N,g)):Un(n,i,N,g),i.memoizedState=u.state,d&&Ap(i,a,!0),i.child}function Mm(n){var i=n.stateNode;i.pendingContext?wp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&wp(n,i.context,!1),Gc(n,i.containerInfo)}function Em(n,i,a,u,d){return ks(),Fc(d),i.flags|=256,Un(n,i,a,u),i.child}var lf={dehydrated:null,treeContext:null,retryLane:0};function uf(n){return{baseLanes:n,cachePool:null,transitions:null}}function wm(n,i,a){var u=i.pendingProps,d=Gt.current,g=!1,w=(i.flags&128)!==0,N;if((N=w)||(N=n!==null&&n.memoizedState===null?!1:(d&2)!==0),N?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),It(Gt,d&1),n===null)return Nc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=u.children,n=u.fallback,g?(u=i.mode,g=i.child,w={mode:"hidden",children:w},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Hl(w,u,0,null),n=ls(n,u,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=uf(a),i.memoizedState=lf,n):cf(i,w));if(d=n.memoizedState,d!==null&&(N=d.dehydrated,N!==null))return $_(n,i,w,u,N,d,a);if(g){g=u.fallback,w=i.mode,d=n.child,N=d.sibling;var B={mode:"hidden",children:u.children};return(w&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=Nr(d,B),u.subtreeFlags=d.subtreeFlags&14680064),N!==null?g=Nr(N,g):(g=ls(g,w,a,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,w=n.child.memoizedState,w=w===null?uf(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=lf,u}return g=n.child,n=g.sibling,u=Nr(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function cf(n,i){return i=Hl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Rl(n,i,a,u){return u!==null&&Fc(u),Bs(i,n.child,null,a),n=cf(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function $_(n,i,a,u,d,g,w){if(a)return i.flags&256?(i.flags&=-257,u=rf(Error(t(422))),Rl(n,i,w,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,d=i.mode,u=Hl({mode:"visible",children:u.children},d,0,null),g=ls(g,d,w,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&Bs(i,n.child,null,w),i.child.memoizedState=uf(w),i.memoizedState=lf,g);if((i.mode&1)===0)return Rl(n,i,w,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var N=u.dgst;return u=N,g=Error(t(419)),u=rf(g,u,void 0),Rl(n,i,w,u)}if(N=(w&n.childLanes)!==0,Wn||N){if(u=fn,u!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|w))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Zi(n,d),yi(u,n,d,-1))}return Af(),u=rf(Error(t(421))),Rl(n,i,w,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=ox.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,Zn=wr(d.nextSibling),Kn=i,Bt=!0,gi=null,n!==null&&(si[oi++]=Yi,si[oi++]=Ki,si[oi++]=Jr,Yi=n.id,Ki=n.overflow,Jr=i),i=cf(i,u.children),i.flags|=4096,i)}function Tm(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),zc(n.return,i,a)}function ff(n,i,a,u,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=d)}function Am(n,i,a){var u=i.pendingProps,d=u.revealOrder,g=u.tail;if(Un(n,i,u.children,a),u=Gt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Tm(n,a,i);else if(n.tag===19)Tm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(It(Gt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Sl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),ff(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Sl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}ff(i,!0,a,null,g);break;case"together":ff(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function bl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ji(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),rs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Nr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Nr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function q_(n,i,a){switch(i.tag){case 3:Mm(i),ks();break;case 5:zp(i);break;case 1:Gn(i.type)&&fl(i);break;case 4:Gc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;It(vl,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(It(Gt,Gt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?wm(n,i,a):(It(Gt,Gt.current&1),n=Ji(n,i,a),n!==null?n.sibling:null);It(Gt,Gt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Am(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),It(Gt,Gt.current),u)break;return null;case 22:case 23:return i.lanes=0,xm(n,i,a)}return Ji(n,i,a)}var Cm,df,Rm,bm;Cm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},df=function(){},Rm=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,ns(Di.current);var g=null;switch(a){case"input":d=z(n,d),u=z(n,u),g=[];break;case"select":d=le({},d,{value:void 0}),u=le({},u,{value:void 0}),g=[];break;case"textarea":d=A(n,d),u=A(n,u),g=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ll)}ft(a,u);var w;a=null;for(te in d)if(!u.hasOwnProperty(te)&&d.hasOwnProperty(te)&&d[te]!=null)if(te==="style"){var N=d[te];for(w in N)N.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(o.hasOwnProperty(te)?g||(g=[]):(g=g||[]).push(te,null));for(te in u){var B=u[te];if(N=d!=null?d[te]:void 0,u.hasOwnProperty(te)&&B!==N&&(B!=null||N!=null))if(te==="style")if(N){for(w in N)!N.hasOwnProperty(w)||B&&B.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in B)B.hasOwnProperty(w)&&N[w]!==B[w]&&(a||(a={}),a[w]=B[w])}else a||(g||(g=[]),g.push(te,a)),a=B;else te==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,N=N?N.__html:void 0,B!=null&&N!==B&&(g=g||[]).push(te,B)):te==="children"?typeof B!="string"&&typeof B!="number"||(g=g||[]).push(te,""+B):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(o.hasOwnProperty(te)?(B!=null&&te==="onScroll"&&Ft("scroll",n),g||N===B||(g=[])):(g=g||[]).push(te,B))}a&&(g=g||[]).push("style",a);var te=g;(i.updateQueue=te)&&(i.flags|=4)}},bm=function(n,i,a,u){a!==u&&(i.flags|=4)};function na(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Tn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Y_(n,i,a){var u=i.pendingProps;switch(Ic(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(i),null;case 1:return Gn(i.type)&&cl(),Tn(i),null;case 3:return u=i.stateNode,Vs(),Ot(Vn),Ot(En),jc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(ml(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,gi!==null&&(Ef(gi),gi=null))),df(n,i),Tn(i),null;case 5:Wc(i);var d=ns(Zo.current);if(a=i.type,n!==null&&i.stateNode!=null)Rm(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Tn(i),null}if(n=ns(Di.current),ml(i)){u=i.stateNode,a=i.type;var g=i.memoizedProps;switch(u[Li]=i,u[jo]=g,n=(i.mode&1)!==0,a){case"dialog":Ft("cancel",u),Ft("close",u);break;case"iframe":case"object":case"embed":Ft("load",u);break;case"video":case"audio":for(d=0;d<Go.length;d++)Ft(Go[d],u);break;case"source":Ft("error",u);break;case"img":case"image":case"link":Ft("error",u),Ft("load",u);break;case"details":Ft("toggle",u);break;case"input":Ln(u,g),Ft("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Ft("invalid",u);break;case"textarea":Q(u,g),Ft("invalid",u)}ft(a,g),d=null;for(var w in g)if(g.hasOwnProperty(w)){var N=g[w];w==="children"?typeof N=="string"?u.textContent!==N&&(g.suppressHydrationWarning!==!0&&al(u.textContent,N,n),d=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(g.suppressHydrationWarning!==!0&&al(u.textContent,N,n),d=["children",""+N]):o.hasOwnProperty(w)&&N!=null&&w==="onScroll"&&Ft("scroll",u)}switch(a){case"input":Lt(u),je(u,g,!0);break;case"textarea":Lt(u),ve(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=ll)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ce(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(a,{is:u.is}):(n=w.createElement(a),a==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,a),n[Li]=i,n[jo]=u,Cm(n,i,!1,!1),i.stateNode=n;e:{switch(w=it(a,u),a){case"dialog":Ft("cancel",n),Ft("close",n),d=u;break;case"iframe":case"object":case"embed":Ft("load",n),d=u;break;case"video":case"audio":for(d=0;d<Go.length;d++)Ft(Go[d],n);d=u;break;case"source":Ft("error",n),d=u;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),d=u;break;case"details":Ft("toggle",n),d=u;break;case"input":Ln(n,u),d=z(n,u),Ft("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=le({},u,{value:void 0}),Ft("invalid",n);break;case"textarea":Q(n,u),d=A(n,u),Ft("invalid",n);break;default:d=u}ft(a,d),N=d;for(g in N)if(N.hasOwnProperty(g)){var B=N[g];g==="style"?et(n,B):g==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ye(n,B)):g==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&qe(n,B):typeof B=="number"&&qe(n,""+B):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?B!=null&&g==="onScroll"&&Ft("scroll",n):B!=null&&L(n,g,B,w))}switch(a){case"input":Lt(n),je(n,u,!1);break;case"textarea":Lt(n),ve(n);break;case"option":u.value!=null&&n.setAttribute("value",""+we(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?I(n,!!u.multiple,g,!1):u.defaultValue!=null&&I(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ll)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Tn(i),null;case 6:if(n&&i.stateNode!=null)bm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=ns(Zo.current),ns(Di.current),ml(i)){if(u=i.stateNode,a=i.memoizedProps,u[Li]=i,(g=u.nodeValue!==a)&&(n=Kn,n!==null))switch(n.tag){case 3:al(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&al(u.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Li]=i,i.stateNode=u}return Tn(i),null;case 13:if(Ot(Gt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Dp(),ks(),i.flags|=98560,g=!1;else if(g=ml(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Li]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Tn(i),g=!1}else gi!==null&&(Ef(gi),gi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Gt.current&1)!==0?sn===0&&(sn=3):Af())),i.updateQueue!==null&&(i.flags|=4),Tn(i),null);case 4:return Vs(),df(n,i),n===null&&Wo(i.stateNode.containerInfo),Tn(i),null;case 10:return Bc(i.type._context),Tn(i),null;case 17:return Gn(i.type)&&cl(),Tn(i),null;case 19:if(Ot(Gt),g=i.memoizedState,g===null)return Tn(i),null;if(u=(i.flags&128)!==0,w=g.rendering,w===null)if(u)na(g,!1);else{if(sn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Sl(n),w!==null){for(i.flags|=128,na(g,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)g=a,n=u,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return It(Gt,Gt.current&1|2),i.child}n=n.sibling}g.tail!==null&&Y()>js&&(i.flags|=128,u=!0,na(g,!1),i.lanes=4194304)}else{if(!u)if(n=Sl(w),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),na(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Bt)return Tn(i),null}else 2*Y()-g.renderingStartTime>js&&a!==1073741824&&(i.flags|=128,u=!0,na(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Y(),i.sibling=null,a=Gt.current,It(Gt,u?a&1|2:a&1),i):(Tn(i),null);case 22:case 23:return Tf(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Qn&1073741824)!==0&&(Tn(i),i.subtreeFlags&6&&(i.flags|=8192)):Tn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function K_(n,i){switch(Ic(i),i.tag){case 1:return Gn(i.type)&&cl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Vs(),Ot(Vn),Ot(En),jc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Wc(i),null;case 13:if(Ot(Gt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ks()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Gt),null;case 4:return Vs(),null;case 10:return Bc(i.type._context),null;case 22:case 23:return Tf(),null;case 24:return null;default:return null}}var Pl=!1,An=!1,Z_=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Ws(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){qt(n,i,u)}else a.current=null}function hf(n,i,a){try{a()}catch(u){qt(n,i,u)}}var Pm=!1;function Q_(n,i){if(wc=Ka,n=lp(),gc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,N=-1,B=-1,te=0,ge=0,ye=n,me=null;t:for(;;){for(var Ie;ye!==a||d!==0&&ye.nodeType!==3||(N=w+d),ye!==g||u!==0&&ye.nodeType!==3||(B=w+u),ye.nodeType===3&&(w+=ye.nodeValue.length),(Ie=ye.firstChild)!==null;)me=ye,ye=Ie;for(;;){if(ye===n)break t;if(me===a&&++te===d&&(N=w),me===g&&++ge===u&&(B=w),(Ie=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=Ie}a=N===-1||B===-1?null:{start:N,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tc={focusedElem:n,selectionRange:a},Ka=!1,Ue=i;Ue!==null;)if(i=Ue,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ue=n;else for(;Ue!==null;){i=Ue;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var ze=ke.memoizedProps,Zt=ke.memoizedState,q=i.stateNode,G=q.getSnapshotBeforeUpdate(i.elementType===i.type?ze:vi(i.type,ze),Zt);q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){qt(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,Ue=n;break}Ue=i.return}return ke=Pm,Pm=!1,ke}function ia(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&hf(i,a,g)}d=d.next}while(d!==u)}}function Ll(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function pf(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Lm(n){var i=n.alternate;i!==null&&(n.alternate=null,Lm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Li],delete i[jo],delete i[bc],delete i[U_],delete i[N_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Dm(n){return n.tag===5||n.tag===3||n.tag===4}function Im(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Dm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mf(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ll));else if(u!==4&&(n=n.child,n!==null))for(mf(n,i,a),n=n.sibling;n!==null;)mf(n,i,a),n=n.sibling}function gf(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(gf(n,i,a),n=n.sibling;n!==null;)gf(n,i,a),n=n.sibling}var vn=null,_i=!1;function Pr(n,i,a){for(a=a.child;a!==null;)Um(n,i,a),a=a.sibling}function Um(n,i,a){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(Qe,a)}catch{}switch(a.tag){case 5:An||Ws(a,i);case 6:var u=vn,d=_i;vn=null,Pr(n,i,a),vn=u,_i=d,vn!==null&&(_i?(n=vn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(_i?(n=vn,a=a.stateNode,n.nodeType===8?Rc(n.parentNode,a):n.nodeType===1&&Rc(n,a),No(n)):Rc(vn,a.stateNode));break;case 4:u=vn,d=_i,vn=a.stateNode.containerInfo,_i=!0,Pr(n,i,a),vn=u,_i=d;break;case 0:case 11:case 14:case 15:if(!An&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var g=d,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&hf(a,i,w),d=d.next}while(d!==u)}Pr(n,i,a);break;case 1:if(!An&&(Ws(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(N){qt(a,i,N)}Pr(n,i,a);break;case 21:Pr(n,i,a);break;case 22:a.mode&1?(An=(u=An)||a.memoizedState!==null,Pr(n,i,a),An=u):Pr(n,i,a);break;default:Pr(n,i,a)}}function Nm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Z_),i.forEach(function(u){var d=ax.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function xi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var g=n,w=i,N=w;e:for(;N!==null;){switch(N.tag){case 5:vn=N.stateNode,_i=!1;break e;case 3:vn=N.stateNode.containerInfo,_i=!0;break e;case 4:vn=N.stateNode.containerInfo,_i=!0;break e}N=N.return}if(vn===null)throw Error(t(160));Um(g,w,d),vn=null,_i=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(te){qt(d,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Fm(i,n),i=i.sibling}function Fm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xi(i,n),Ui(n),u&4){try{ia(3,n,n.return),Ll(3,n)}catch(ze){qt(n,n.return,ze)}try{ia(5,n,n.return)}catch(ze){qt(n,n.return,ze)}}break;case 1:xi(i,n),Ui(n),u&512&&a!==null&&Ws(a,a.return);break;case 5:if(xi(i,n),Ui(n),u&512&&a!==null&&Ws(a,a.return),n.flags&32){var d=n.stateNode;try{qe(d,"")}catch(ze){qt(n,n.return,ze)}}if(u&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,N=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{N==="input"&&g.type==="radio"&&g.name!=null&&ht(d,g),it(N,w);var te=it(N,g);for(w=0;w<B.length;w+=2){var ge=B[w],ye=B[w+1];ge==="style"?et(d,ye):ge==="dangerouslySetInnerHTML"?Ye(d,ye):ge==="children"?qe(d,ye):L(d,ge,ye,te)}switch(N){case"input":ct(d,g);break;case"textarea":fe(d,g);break;case"select":var me=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var Ie=g.value;Ie!=null?I(d,!!g.multiple,Ie,!1):me!==!!g.multiple&&(g.defaultValue!=null?I(d,!!g.multiple,g.defaultValue,!0):I(d,!!g.multiple,g.multiple?[]:"",!1))}d[jo]=g}catch(ze){qt(n,n.return,ze)}}break;case 6:if(xi(i,n),Ui(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(ze){qt(n,n.return,ze)}}break;case 3:if(xi(i,n),Ui(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{No(i.containerInfo)}catch(ze){qt(n,n.return,ze)}break;case 4:xi(i,n),Ui(n);break;case 13:xi(i,n),Ui(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(xf=Y())),u&4&&Nm(n);break;case 22:if(ge=a!==null&&a.memoizedState!==null,n.mode&1?(An=(te=An)||ge,xi(i,n),An=te):xi(i,n),Ui(n),u&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!ge&&(n.mode&1)!==0)for(Ue=n,ge=n.child;ge!==null;){for(ye=Ue=ge;Ue!==null;){switch(me=Ue,Ie=me.child,me.tag){case 0:case 11:case 14:case 15:ia(4,me,me.return);break;case 1:Ws(me,me.return);var ke=me.stateNode;if(typeof ke.componentWillUnmount=="function"){u=me,a=me.return;try{i=u,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(ze){qt(u,a,ze)}}break;case 5:Ws(me,me.return);break;case 22:if(me.memoizedState!==null){Bm(ye);continue}}Ie!==null?(Ie.return=me,Ue=Ie):Bm(ye)}ge=ge.sibling}e:for(ge=null,ye=n;;){if(ye.tag===5){if(ge===null){ge=ye;try{d=ye.stateNode,te?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(N=ye.stateNode,B=ye.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null,N.style.display=Je("display",w))}catch(ze){qt(n,n.return,ze)}}}else if(ye.tag===6){if(ge===null)try{ye.stateNode.nodeValue=te?"":ye.memoizedProps}catch(ze){qt(n,n.return,ze)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;ge===ye&&(ge=null),ye=ye.return}ge===ye&&(ge=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:xi(i,n),Ui(n),u&4&&Nm(n);break;case 21:break;default:xi(i,n),Ui(n)}}function Ui(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Dm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(qe(d,""),u.flags&=-33);var g=Im(n);gf(n,g,d);break;case 3:case 4:var w=u.stateNode.containerInfo,N=Im(n);mf(n,N,w);break;default:throw Error(t(161))}}catch(B){qt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function J_(n,i,a){Ue=n,Om(n)}function Om(n,i,a){for(var u=(n.mode&1)!==0;Ue!==null;){var d=Ue,g=d.child;if(d.tag===22&&u){var w=d.memoizedState!==null||Pl;if(!w){var N=d.alternate,B=N!==null&&N.memoizedState!==null||An;N=Pl;var te=An;if(Pl=w,(An=B)&&!te)for(Ue=d;Ue!==null;)w=Ue,B=w.child,w.tag===22&&w.memoizedState!==null?zm(d):B!==null?(B.return=w,Ue=B):zm(d);for(;g!==null;)Ue=g,Om(g),g=g.sibling;Ue=d,Pl=N,An=te}km(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,Ue=g):km(n)}}function km(n){for(;Ue!==null;){var i=Ue;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:An||Ll(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!An)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:vi(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Bp(i,g,u);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Bp(i,w,a)}break;case 5:var N=i.stateNode;if(a===null&&i.flags&4){a=N;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var ge=te.memoizedState;if(ge!==null){var ye=ge.dehydrated;ye!==null&&No(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||i.flags&512&&pf(i)}catch(me){qt(i,i.return,me)}}if(i===n){Ue=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ue=a;break}Ue=i.return}}function Bm(n){for(;Ue!==null;){var i=Ue;if(i===n){Ue=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ue=a;break}Ue=i.return}}function zm(n){for(;Ue!==null;){var i=Ue;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ll(4,i)}catch(B){qt(i,a,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(B){qt(i,d,B)}}var g=i.return;try{pf(i)}catch(B){qt(i,g,B)}break;case 5:var w=i.return;try{pf(i)}catch(B){qt(i,w,B)}}}catch(B){qt(i,i.return,B)}if(i===n){Ue=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Ue=N;break}Ue=i.return}}var ex=Math.ceil,Dl=P.ReactCurrentDispatcher,vf=P.ReactCurrentOwner,ui=P.ReactCurrentBatchConfig,yt=0,fn=null,Jt=null,_n=0,Qn=0,Xs=Tr(0),sn=0,ra=null,rs=0,Il=0,_f=0,sa=null,Xn=null,xf=0,js=1/0,er=null,Ul=!1,yf=null,Lr=null,Nl=!1,Dr=null,Fl=0,oa=0,Sf=null,Ol=-1,kl=0;function Nn(){return(yt&6)!==0?Y():Ol!==-1?Ol:Ol=Y()}function Ir(n){return(n.mode&1)===0?1:(yt&2)!==0&&_n!==0?_n&-_n:O_.transition!==null?(kl===0&&(kl=bt()),kl):(n=xt,n!==0||(n=window.event,n=n===void 0?16:Vh(n.type)),n)}function yi(n,i,a,u){if(50<oa)throw oa=0,Sf=null,Error(t(185));ln(n,a,u),((yt&2)===0||n!==fn)&&(n===fn&&((yt&2)===0&&(Il|=a),sn===4&&Ur(n,_n)),jn(n,u),a===1&&yt===0&&(i.mode&1)===0&&(js=Y()+500,dl&&Cr()))}function jn(n,i){var a=n.callbackNode;In(n,i);var u=Sn(n,n===fn?_n:0);if(u===0)a!==null&&b(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&b(a),i===1)n.tag===0?F_(Vm.bind(null,n)):Cp(Vm.bind(null,n)),D_(function(){(yt&6)===0&&Cr()}),a=null;else{switch(Pi(u)){case 1:a=Se;break;case 4:a=Re;break;case 16:a=De;break;case 536870912:a=tt;break;default:a=De}a=Km(a,Hm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Hm(n,i){if(Ol=-1,kl=0,(yt&6)!==0)throw Error(t(327));var a=n.callbackNode;if($s()&&n.callbackNode!==a)return null;var u=Sn(n,n===fn?_n:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Bl(n,u);else{i=u;var d=yt;yt|=2;var g=Wm();(fn!==n||_n!==i)&&(er=null,js=Y()+500,os(n,i));do try{ix();break}catch(N){Gm(n,N)}while(!0);kc(),Dl.current=g,yt=d,Jt!==null?i=0:(fn=null,_n=0,i=sn)}if(i!==0){if(i===2&&(d=ji(n),d!==0&&(u=d,i=Mf(n,d))),i===1)throw a=ra,os(n,0),Ur(n,u),jn(n,Y()),a;if(i===6)Ur(n,u);else{if(d=n.current.alternate,(u&30)===0&&!tx(d)&&(i=Bl(n,u),i===2&&(g=ji(n),g!==0&&(u=g,i=Mf(n,g))),i===1))throw a=ra,os(n,0),Ur(n,u),jn(n,Y()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:as(n,Xn,er);break;case 3:if(Ur(n,u),(u&130023424)===u&&(i=xf+500-Y(),10<i)){if(Sn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Nn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Cc(as.bind(null,n,Xn,er),i);break}as(n,Xn,er);break;case 4:if(Ur(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var w=31-st(u);g=1<<w,w=i[w],w>d&&(d=w),u&=~g}if(u=d,u=Y()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*ex(u/1960))-u,10<u){n.timeoutHandle=Cc(as.bind(null,n,Xn,er),u);break}as(n,Xn,er);break;case 5:as(n,Xn,er);break;default:throw Error(t(329))}}}return jn(n,Y()),n.callbackNode===a?Hm.bind(null,n):null}function Mf(n,i){var a=sa;return n.current.memoizedState.isDehydrated&&(os(n,i).flags|=256),n=Bl(n,i),n!==2&&(i=Xn,Xn=a,i!==null&&Ef(i)),n}function Ef(n){Xn===null?Xn=n:Xn.push.apply(Xn,n)}function tx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],g=d.getSnapshot;d=d.value;try{if(!mi(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ur(n,i){for(i&=~_f,i&=~Il,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-st(i),u=1<<a;n[a]=-1,i&=~u}}function Vm(n){if((yt&6)!==0)throw Error(t(327));$s();var i=Sn(n,0);if((i&1)===0)return jn(n,Y()),null;var a=Bl(n,i);if(n.tag!==0&&a===2){var u=ji(n);u!==0&&(i=u,a=Mf(n,u))}if(a===1)throw a=ra,os(n,0),Ur(n,i),jn(n,Y()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,as(n,Xn,er),jn(n,Y()),null}function wf(n,i){var a=yt;yt|=1;try{return n(i)}finally{yt=a,yt===0&&(js=Y()+500,dl&&Cr())}}function ss(n){Dr!==null&&Dr.tag===0&&(yt&6)===0&&$s();var i=yt;yt|=1;var a=ui.transition,u=xt;try{if(ui.transition=null,xt=1,n)return n()}finally{xt=u,ui.transition=a,yt=i,(yt&6)===0&&Cr()}}function Tf(){Qn=Xs.current,Ot(Xs)}function os(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,L_(a)),Jt!==null)for(a=Jt.return;a!==null;){var u=a;switch(Ic(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&cl();break;case 3:Vs(),Ot(Vn),Ot(En),jc();break;case 5:Wc(u);break;case 4:Vs();break;case 13:Ot(Gt);break;case 19:Ot(Gt);break;case 10:Bc(u.type._context);break;case 22:case 23:Tf()}a=a.return}if(fn=n,Jt=n=Nr(n.current,null),_n=Qn=i,sn=0,ra=null,_f=Il=rs=0,Xn=sa=null,ts!==null){for(i=0;i<ts.length;i++)if(a=ts[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,g=a.pending;if(g!==null){var w=g.next;g.next=d,u.next=w}a.pending=u}ts=null}return n}function Gm(n,i){do{var a=Jt;try{if(kc(),Ml.current=Al,El){for(var u=Wt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}El=!1}if(is=0,cn=rn=Wt=null,Qo=!1,Jo=0,vf.current=null,a===null||a.return===null){sn=1,ra=i,Jt=null;break}e:{var g=n,w=a.return,N=a,B=i;if(i=_n,N.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var te=B,ge=N,ye=ge.tag;if((ge.mode&1)===0&&(ye===0||ye===11||ye===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ie=pm(w);if(Ie!==null){Ie.flags&=-257,mm(Ie,w,N,g,i),Ie.mode&1&&hm(g,te,i),i=Ie,B=te;var ke=i.updateQueue;if(ke===null){var ze=new Set;ze.add(B),i.updateQueue=ze}else ke.add(B);break e}else{if((i&1)===0){hm(g,te,i),Af();break e}B=Error(t(426))}}else if(Bt&&N.mode&1){var Zt=pm(w);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),mm(Zt,w,N,g,i),Fc(Gs(B,N));break e}}g=B=Gs(B,N),sn!==4&&(sn=2),sa===null?sa=[g]:sa.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var q=fm(g,B,i);kp(g,q);break e;case 1:N=B;var G=g.type,K=g.stateNode;if((g.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(Lr===null||!Lr.has(K)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ee=dm(g,N,i);kp(g,Ee);break e}}g=g.return}while(g!==null)}jm(a)}catch(We){i=We,Jt===a&&a!==null&&(Jt=a=a.return);continue}break}while(!0)}function Wm(){var n=Dl.current;return Dl.current=Al,n===null?Al:n}function Af(){(sn===0||sn===3||sn===2)&&(sn=4),fn===null||(rs&268435455)===0&&(Il&268435455)===0||Ur(fn,_n)}function Bl(n,i){var a=yt;yt|=2;var u=Wm();(fn!==n||_n!==i)&&(er=null,os(n,i));do try{nx();break}catch(d){Gm(n,d)}while(!0);if(kc(),yt=a,Dl.current=u,Jt!==null)throw Error(t(261));return fn=null,_n=0,sn}function nx(){for(;Jt!==null;)Xm(Jt)}function ix(){for(;Jt!==null&&!X();)Xm(Jt)}function Xm(n){var i=Ym(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,i===null?jm(n):Jt=i,vf.current=null}function jm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Y_(a,i,Qn),a!==null){Jt=a;return}}else{if(a=K_(a,i),a!==null){a.flags&=32767,Jt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{sn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=n}while(i!==null);sn===0&&(sn=5)}function as(n,i,a){var u=xt,d=ui.transition;try{ui.transition=null,xt=1,rx(n,i,a,u)}finally{ui.transition=d,xt=u}return null}function rx(n,i,a,u){do $s();while(Dr!==null);if((yt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(gn(n,g),n===fn&&(Jt=fn=null,_n=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Nl||(Nl=!0,Km(De,function(){return $s(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=ui.transition,ui.transition=null;var w=xt;xt=1;var N=yt;yt|=4,vf.current=null,Q_(n,a),Fm(a,n),w_(Tc),Ka=!!wc,Tc=wc=null,n.current=a,J_(a),ie(),yt=N,xt=w,ui.transition=g}else n.current=a;if(Nl&&(Nl=!1,Dr=n,Fl=d),g=n.pendingLanes,g===0&&(Lr=null),gt(a.stateNode),jn(n,Y()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(Ul)throw Ul=!1,n=yf,yf=null,n;return(Fl&1)!==0&&n.tag!==0&&$s(),g=n.pendingLanes,(g&1)!==0?n===Sf?oa++:(oa=0,Sf=n):oa=0,Cr(),null}function $s(){if(Dr!==null){var n=Pi(Fl),i=ui.transition,a=xt;try{if(ui.transition=null,xt=16>n?16:n,Dr===null)var u=!1;else{if(n=Dr,Dr=null,Fl=0,(yt&6)!==0)throw Error(t(331));var d=yt;for(yt|=4,Ue=n.current;Ue!==null;){var g=Ue,w=g.child;if((Ue.flags&16)!==0){var N=g.deletions;if(N!==null){for(var B=0;B<N.length;B++){var te=N[B];for(Ue=te;Ue!==null;){var ge=Ue;switch(ge.tag){case 0:case 11:case 15:ia(8,ge,g)}var ye=ge.child;if(ye!==null)ye.return=ge,Ue=ye;else for(;Ue!==null;){ge=Ue;var me=ge.sibling,Ie=ge.return;if(Lm(ge),ge===te){Ue=null;break}if(me!==null){me.return=Ie,Ue=me;break}Ue=Ie}}}var ke=g.alternate;if(ke!==null){var ze=ke.child;if(ze!==null){ke.child=null;do{var Zt=ze.sibling;ze.sibling=null,ze=Zt}while(ze!==null)}}Ue=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,Ue=w;else e:for(;Ue!==null;){if(g=Ue,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:ia(9,g,g.return)}var q=g.sibling;if(q!==null){q.return=g.return,Ue=q;break e}Ue=g.return}}var G=n.current;for(Ue=G;Ue!==null;){w=Ue;var K=w.child;if((w.subtreeFlags&2064)!==0&&K!==null)K.return=w,Ue=K;else e:for(w=G;Ue!==null;){if(N=Ue,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Ll(9,N)}}catch(We){qt(N,N.return,We)}if(N===w){Ue=null;break e}var Ee=N.sibling;if(Ee!==null){Ee.return=N.return,Ue=Ee;break e}Ue=N.return}}if(yt=d,Cr(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(Qe,n)}catch{}u=!0}return u}finally{xt=a,ui.transition=i}}return!1}function $m(n,i,a){i=Gs(a,i),i=fm(n,i,1),n=br(n,i,1),i=Nn(),n!==null&&(ln(n,1,i),jn(n,i))}function qt(n,i,a){if(n.tag===3)$m(n,n,a);else for(;i!==null;){if(i.tag===3){$m(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Lr===null||!Lr.has(u))){n=Gs(a,n),n=dm(i,n,1),i=br(i,n,1),n=Nn(),i!==null&&(ln(i,1,n),jn(i,n));break}}i=i.return}}function sx(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Nn(),n.pingedLanes|=n.suspendedLanes&a,fn===n&&(_n&a)===a&&(sn===4||sn===3&&(_n&130023424)===_n&&500>Y()-xf?os(n,0):_f|=a),jn(n,i)}function qm(n,i){i===0&&((n.mode&1)===0?i=1:(i=$t,$t<<=1,($t&130023424)===0&&($t=4194304)));var a=Nn();n=Zi(n,i),n!==null&&(ln(n,i,a),jn(n,a))}function ox(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),qm(n,a)}function ax(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),qm(n,a)}var Ym;Ym=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Vn.current)Wn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Wn=!1,q_(n,i,a);Wn=(n.flags&131072)!==0}else Wn=!1,Bt&&(i.flags&1048576)!==0&&Rp(i,pl,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;bl(n,i),n=i.pendingProps;var d=Ns(i,En.current);Hs(i,a),d=Yc(null,i,u,n,d,a);var g=Kc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gn(u)?(g=!0,fl(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Vc(i),d.updater=Cl,i.stateNode=d,d._reactInternals=i,nf(i,u,n,a),i=af(null,i,u,!0,g,a)):(i.tag=0,Bt&&g&&Dc(i),Un(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(bl(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=ux(u),n=vi(u,n),d){case 0:i=of(null,i,u,n,a);break e;case 1:i=Sm(null,i,u,n,a);break e;case 11:i=gm(null,i,u,n,a);break e;case 14:i=vm(null,i,u,vi(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:vi(u,d),of(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:vi(u,d),Sm(n,i,u,d,a);case 3:e:{if(Mm(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,d=g.element,Op(n,i),yl(i,u,null,a);var w=i.memoizedState;if(u=w.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=Gs(Error(t(423)),i),i=Em(n,i,u,a,d);break e}else if(u!==d){d=Gs(Error(t(424)),i),i=Em(n,i,u,a,d);break e}else for(Zn=wr(i.stateNode.containerInfo.firstChild),Kn=i,Bt=!0,gi=null,a=Np(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ks(),u===d){i=Ji(n,i,a);break e}Un(n,i,u,a)}i=i.child}return i;case 5:return zp(i),n===null&&Nc(i),u=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,w=d.children,Ac(u,d)?w=null:g!==null&&Ac(u,g)&&(i.flags|=32),ym(n,i),Un(n,i,w,a),i.child;case 6:return n===null&&Nc(i),null;case 13:return wm(n,i,a);case 4:return Gc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Bs(i,null,u,a):Un(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:vi(u,d),gm(n,i,u,d,a);case 7:return Un(n,i,i.pendingProps,a),i.child;case 8:return Un(n,i,i.pendingProps.children,a),i.child;case 12:return Un(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,g=i.memoizedProps,w=d.value,It(vl,u._currentValue),u._currentValue=w,g!==null)if(mi(g.value,w)){if(g.children===d.children&&!Vn.current){i=Ji(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var N=g.dependencies;if(N!==null){w=g.child;for(var B=N.firstContext;B!==null;){if(B.context===u){if(g.tag===1){B=Qi(-1,a&-a),B.tag=2;var te=g.updateQueue;if(te!==null){te=te.shared;var ge=te.pending;ge===null?B.next=B:(B.next=ge.next,ge.next=B),te.pending=B}}g.lanes|=a,B=g.alternate,B!==null&&(B.lanes|=a),zc(g.return,a,i),N.lanes|=a;break}B=B.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,N=w.alternate,N!==null&&(N.lanes|=a),zc(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Un(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Hs(i,a),d=ai(d),u=u(d),i.flags|=1,Un(n,i,u,a),i.child;case 14:return u=i.type,d=vi(u,i.pendingProps),d=vi(u.type,d),vm(n,i,u,d,a);case 15:return _m(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:vi(u,d),bl(n,i),i.tag=1,Gn(u)?(n=!0,fl(i)):n=!1,Hs(i,a),um(i,u,d),nf(i,u,d,a),af(null,i,u,!0,n,a);case 19:return Am(n,i,a);case 22:return xm(n,i,a)}throw Error(t(156,i.tag))};function Km(n,i){return $a(n,i)}function lx(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(n,i,a,u){return new lx(n,i,a,u)}function Cf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ux(n){if(typeof n=="function")return Cf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ne)return 11;if(n===ue)return 14}return 2}function Nr(n,i){var a=n.alternate;return a===null?(a=ci(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function zl(n,i,a,u,d,g){var w=2;if(u=n,typeof n=="function")Cf(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case C:return ls(a.children,d,g,i);case F:w=8,d|=8;break;case R:return n=ci(12,a,i,d|2),n.elementType=R,n.lanes=g,n;case Z:return n=ci(13,a,i,d),n.elementType=Z,n.lanes=g,n;case se:return n=ci(19,a,i,d),n.elementType=se,n.lanes=g,n;case pe:return Hl(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:w=10;break e;case k:w=9;break e;case ne:w=11;break e;case ue:w=14;break e;case ee:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ci(w,a,i,d),i.elementType=n,i.type=u,i.lanes=g,i}function ls(n,i,a,u){return n=ci(7,n,u,i),n.lanes=a,n}function Hl(n,i,a,u){return n=ci(22,n,u,i),n.elementType=pe,n.lanes=a,n.stateNode={isHidden:!1},n}function Rf(n,i,a){return n=ci(6,n,null,i),n.lanes=a,n}function bf(n,i,a){return i=ci(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function cx(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mn(0),this.expirationTimes=Mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Pf(n,i,a,u,d,g,w,N,B){return n=new cx(n,i,a,N,B),i===1?(i=1,g===!0&&(i|=8)):i=0,g=ci(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vc(g),n}function fx(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Zm(n){if(!n)return Ar;n=n._reactInternals;e:{if(bi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gn(a))return Tp(n,a,i)}return i}function Qm(n,i,a,u,d,g,w,N,B){return n=Pf(a,u,!0,n,d,g,w,N,B),n.context=Zm(null),a=n.current,u=Nn(),d=Ir(a),g=Qi(u,d),g.callback=i??null,br(a,g,d),n.current.lanes=d,ln(n,d,u),jn(n,u),n}function Vl(n,i,a,u){var d=i.current,g=Nn(),w=Ir(d);return a=Zm(a),i.context===null?i.context=a:i.pendingContext=a,i=Qi(g,w),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=br(d,i,w),n!==null&&(yi(n,d,w,g),xl(n,d,w)),w}function Gl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Jm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Lf(n,i){Jm(n,i),(n=n.alternate)&&Jm(n,i)}function dx(){return null}var eg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Df(n){this._internalRoot=n}Wl.prototype.render=Df.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Vl(n,i,null,null)},Wl.prototype.unmount=Df.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ss(function(){Vl(null,n,null,null)}),i[$i]=null}};function Wl(n){this._internalRoot=n}Wl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Oh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Sr.length&&i!==0&&i<Sr[a].priority;a++);Sr.splice(a,0,n),a===0&&zh(n)}};function If(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function tg(){}function hx(n,i,a,u,d){if(d){if(typeof u=="function"){var g=u;u=function(){var te=Gl(w);g.call(te)}}var w=Qm(i,u,n,0,null,!1,!1,"",tg);return n._reactRootContainer=w,n[$i]=w.current,Wo(n.nodeType===8?n.parentNode:n),ss(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var N=u;u=function(){var te=Gl(B);N.call(te)}}var B=Pf(n,0,!1,null,null,!1,!1,"",tg);return n._reactRootContainer=B,n[$i]=B.current,Wo(n.nodeType===8?n.parentNode:n),ss(function(){Vl(i,B,a,u)}),B}function jl(n,i,a,u,d){var g=a._reactRootContainer;if(g){var w=g;if(typeof d=="function"){var N=d;d=function(){var B=Gl(w);N.call(B)}}Vl(i,w,n,d)}else w=hx(a,i,n,d,u);return Gl(w)}Nh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=pt(i.pendingLanes);a!==0&&(un(i,a|1),jn(i,Y()),(yt&6)===0&&(js=Y()+500,Cr()))}break;case 13:ss(function(){var u=Zi(n,1);if(u!==null){var d=Nn();yi(u,n,1,d)}}),Lf(n,1)}},ic=function(n){if(n.tag===13){var i=Zi(n,134217728);if(i!==null){var a=Nn();yi(i,n,134217728,a)}Lf(n,134217728)}},Fh=function(n){if(n.tag===13){var i=Ir(n),a=Zi(n,i);if(a!==null){var u=Nn();yi(a,n,i,u)}Lf(n,i)}},Oh=function(){return xt},kh=function(n,i){var a=xt;try{return xt=n,i()}finally{xt=a}},Ce=function(n,i,a){switch(i){case"input":if(ct(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=ul(u);if(!d)throw Error(t(90));Dt(u),ct(u,d)}}}break;case"textarea":fe(n,a);break;case"select":i=a.value,i!=null&&I(n,!!a.multiple,i,!1)}},Nt=wf,nn=ss;var px={usingClientEntryPoint:!1,Events:[$o,Is,ul,be,rt,wf]},aa={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mx={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Xa(n),n===null?null:n.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||dx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{Qe=$l.inject(mx),Be=$l}catch{}}return $n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=px,$n.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!If(i))throw Error(t(200));return fx(n,i,null,a)},$n.createRoot=function(n,i){if(!If(n))throw Error(t(299));var a=!1,u="",d=eg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Pf(n,1,!1,null,null,a,!1,u,d),n[$i]=i.current,Wo(n.nodeType===8?n.parentNode:n),new Df(i)},$n.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Xa(i),n=n===null?null:n.stateNode,n},$n.flushSync=function(n){return ss(n)},$n.hydrate=function(n,i,a){if(!Xl(i))throw Error(t(200));return jl(null,n,i,!0,a)},$n.hydrateRoot=function(n,i,a){if(!If(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,g="",w=eg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Qm(i,null,n,1,a??null,d,!1,g,w),n[$i]=i.current,Wo(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Wl(i)},$n.render=function(n,i,a){if(!Xl(i))throw Error(t(200));return jl(null,n,i,!1,a)},$n.unmountComponentAtNode=function(n){if(!Xl(n))throw Error(t(40));return n._reactRootContainer?(ss(function(){jl(null,null,n,!1,function(){n._reactRootContainer=null,n[$i]=null})}),!0):!1},$n.unstable_batchedUpdates=wf,$n.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Xl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return jl(n,i,a,!1,u)},$n.version="18.3.1-next-f1338f8080-20240426",$n}var cg;function Ax(){if(cg)return Ff.exports;cg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ff.exports=Tx(),Ff.exports}var fg;function Cx(){if(fg)return ql;fg=1;var r=Ax();return ql.createRoot=r.createRoot,ql.hydrateRoot=r.hydrateRoot,ql}var Rx=Cx();const bx=V0(Rx),Ma={black:"#000",white:"#fff"},qs={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Ys={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},Ks={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},Zs={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},Qs={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},ua={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},Px={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function Ea(r){let e="https://mui.com/production-error/?code="+r;for(let t=1;t<arguments.length;t+=1)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified MUI error #"+r+"; visit "+e+" for the full message."}const Lx=Object.freeze(Object.defineProperty({__proto__:null,default:Ea},Symbol.toStringTag,{value:"Module"})),Dx="$$material";function Vt(){return Vt=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Vt.apply(null,arguments)}function qr(r,e){if(r==null)return{};var t={};for(var s in r)if({}.hasOwnProperty.call(r,s)){if(e.indexOf(s)!==-1)continue;t[s]=r[s]}return t}function Ix(r){if(r.sheet)return r.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===r)return document.styleSheets[e]}function Ux(r){var e=document.createElement("style");return e.setAttribute("data-emotion",r.key),r.nonce!==void 0&&e.setAttribute("nonce",r.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Nx=function(){function r(t){var s=this;this._insertTag=function(o){var l;s.tags.length===0?s.insertionPoint?l=s.insertionPoint.nextSibling:s.prepend?l=s.container.firstChild:l=s.before:l=s.tags[s.tags.length-1].nextSibling,s.container.insertBefore(o,l),s.tags.push(o)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=r.prototype;return e.hydrate=function(s){s.forEach(this._insertTag)},e.insert=function(s){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ux(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=Ix(o);try{l.insertRule(s,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(s));this.ctr++},e.flush=function(){this.tags.forEach(function(s){var o;return(o=s.parentNode)==null?void 0:o.removeChild(s)}),this.tags=[],this.ctr=0},r}(),bn="-ms-",Iu="-moz-",Et="-webkit-",X0="comm",ph="rule",mh="decl",Fx="@import",j0="@keyframes",Ox="@layer",kx=Math.abs,Vu=String.fromCharCode,Bx=Object.assign;function zx(r,e){return yn(r,0)^45?(((e<<2^yn(r,0))<<2^yn(r,1))<<2^yn(r,2))<<2^yn(r,3):0}function $0(r){return r.trim()}function Hx(r,e){return(r=e.exec(r))?r[0]:r}function wt(r,e,t){return r.replace(e,t)}function Md(r,e){return r.indexOf(e)}function yn(r,e){return r.charCodeAt(e)|0}function wa(r,e,t){return r.slice(e,t)}function Ni(r){return r.length}function gh(r){return r.length}function Yl(r,e){return e.push(r),r}function Vx(r,e){return r.map(e).join("")}var Gu=1,yo=1,q0=0,qn=0,tn=0,Ao="";function Wu(r,e,t,s,o,l,c){return{value:r,root:e,parent:t,type:s,props:o,children:l,line:Gu,column:yo,length:c,return:""}}function ca(r,e){return Bx(Wu("",null,null,"",null,null,0),r,{length:-r.length},e)}function Gx(){return tn}function Wx(){return tn=qn>0?yn(Ao,--qn):0,yo--,tn===10&&(yo=1,Gu--),tn}function ri(){return tn=qn<q0?yn(Ao,qn++):0,yo++,tn===10&&(yo=1,Gu++),tn}function Bi(){return yn(Ao,qn)}function Mu(){return qn}function Ia(r,e){return wa(Ao,r,e)}function Ta(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Y0(r){return Gu=yo=1,q0=Ni(Ao=r),qn=0,[]}function K0(r){return Ao="",r}function Eu(r){return $0(Ia(qn-1,Ed(r===91?r+2:r===40?r+1:r)))}function Xx(r){for(;(tn=Bi())&&tn<33;)ri();return Ta(r)>2||Ta(tn)>3?"":" "}function jx(r,e){for(;--e&&ri()&&!(tn<48||tn>102||tn>57&&tn<65||tn>70&&tn<97););return Ia(r,Mu()+(e<6&&Bi()==32&&ri()==32))}function Ed(r){for(;ri();)switch(tn){case r:return qn;case 34:case 39:r!==34&&r!==39&&Ed(tn);break;case 40:r===41&&Ed(r);break;case 92:ri();break}return qn}function $x(r,e){for(;ri()&&r+tn!==57;)if(r+tn===84&&Bi()===47)break;return"/*"+Ia(e,qn-1)+"*"+Vu(r===47?r:ri())}function qx(r){for(;!Ta(Bi());)ri();return Ia(r,qn)}function Yx(r){return K0(wu("",null,null,null,[""],r=Y0(r),0,[0],r))}function wu(r,e,t,s,o,l,c,f,h){for(var p=0,v=0,m=c,_=0,S=0,E=0,M=1,y=1,x=1,D=0,L="",P=o,V=l,U=s,C=L;y;)switch(E=D,D=ri()){case 40:if(E!=108&&yn(C,m-1)==58){Md(C+=wt(Eu(D),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:C+=Eu(D);break;case 9:case 10:case 13:case 32:C+=Xx(E);break;case 92:C+=jx(Mu()-1,7);continue;case 47:switch(Bi()){case 42:case 47:Yl(Kx($x(ri(),Mu()),e,t),h);break;default:C+="/"}break;case 123*M:f[p++]=Ni(C)*x;case 125*M:case 59:case 0:switch(D){case 0:case 125:y=0;case 59+v:x==-1&&(C=wt(C,/\f/g,"")),S>0&&Ni(C)-m&&Yl(S>32?hg(C+";",s,t,m-1):hg(wt(C," ","")+";",s,t,m-2),h);break;case 59:C+=";";default:if(Yl(U=dg(C,e,t,p,v,o,f,L,P=[],V=[],m),l),D===123)if(v===0)wu(C,e,U,U,P,l,m,f,V);else switch(_===99&&yn(C,3)===110?100:_){case 100:case 108:case 109:case 115:wu(r,U,U,s&&Yl(dg(r,U,U,0,0,o,f,L,o,P=[],m),V),o,V,m,f,s?P:V);break;default:wu(C,U,U,U,[""],V,0,f,V)}}p=v=S=0,M=x=1,L=C="",m=c;break;case 58:m=1+Ni(C),S=E;default:if(M<1){if(D==123)--M;else if(D==125&&M++==0&&Wx()==125)continue}switch(C+=Vu(D),D*M){case 38:x=v>0?1:(C+="\f",-1);break;case 44:f[p++]=(Ni(C)-1)*x,x=1;break;case 64:Bi()===45&&(C+=Eu(ri())),_=Bi(),v=m=Ni(L=C+=qx(Mu())),D++;break;case 45:E===45&&Ni(C)==2&&(M=0)}}return l}function dg(r,e,t,s,o,l,c,f,h,p,v){for(var m=o-1,_=o===0?l:[""],S=gh(_),E=0,M=0,y=0;E<s;++E)for(var x=0,D=wa(r,m+1,m=kx(M=c[E])),L=r;x<S;++x)(L=$0(M>0?_[x]+" "+D:wt(D,/&\f/g,_[x])))&&(h[y++]=L);return Wu(r,e,t,o===0?ph:f,h,p,v)}function Kx(r,e,t){return Wu(r,e,t,X0,Vu(Gx()),wa(r,2,-2),0)}function hg(r,e,t,s){return Wu(r,e,t,mh,wa(r,0,s),wa(r,s+1,-1),s)}function go(r,e){for(var t="",s=gh(r),o=0;o<s;o++)t+=e(r[o],o,r,e)||"";return t}function Zx(r,e,t,s){switch(r.type){case Ox:if(r.children.length)break;case Fx:case mh:return r.return=r.return||r.value;case X0:return"";case j0:return r.return=r.value+"{"+go(r.children,s)+"}";case ph:r.value=r.props.join(",")}return Ni(t=go(r.children,s))?r.return=r.value+"{"+t+"}":""}function Qx(r){var e=gh(r);return function(t,s,o,l){for(var c="",f=0;f<e;f++)c+=r[f](t,s,o,l)||"";return c}}function Jx(r){return function(e){e.root||(e=e.return)&&r(e)}}function Z0(r){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=r(t)),e[t]}}var ey=function(e,t,s){for(var o=0,l=0;o=l,l=Bi(),o===38&&l===12&&(t[s]=1),!Ta(l);)ri();return Ia(e,qn)},ty=function(e,t){var s=-1,o=44;do switch(Ta(o)){case 0:o===38&&Bi()===12&&(t[s]=1),e[s]+=ey(qn-1,t,s);break;case 2:e[s]+=Eu(o);break;case 4:if(o===44){e[++s]=Bi()===58?"&\f":"",t[s]=e[s].length;break}default:e[s]+=Vu(o)}while(o=ri());return e},ny=function(e,t){return K0(ty(Y0(e),t))},pg=new WeakMap,iy=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,s=e.parent,o=e.column===s.column&&e.line===s.line;s.type!=="rule";)if(s=s.parent,!s)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!pg.get(s))&&!o){pg.set(e,!0);for(var l=[],c=ny(t,l),f=s.props,h=0,p=0;h<c.length;h++)for(var v=0;v<f.length;v++,p++)e.props[p]=l[h]?c[h].replace(/&\f/g,f[v]):f[v]+" "+c[h]}}},ry=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function Q0(r,e){switch(zx(r,e)){case 5103:return Et+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Et+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Et+r+Iu+r+bn+r+r;case 6828:case 4268:return Et+r+bn+r+r;case 6165:return Et+r+bn+"flex-"+r+r;case 5187:return Et+r+wt(r,/(\w+).+(:[^]+)/,Et+"box-$1$2"+bn+"flex-$1$2")+r;case 5443:return Et+r+bn+"flex-item-"+wt(r,/flex-|-self/,"")+r;case 4675:return Et+r+bn+"flex-line-pack"+wt(r,/align-content|flex-|-self/,"")+r;case 5548:return Et+r+bn+wt(r,"shrink","negative")+r;case 5292:return Et+r+bn+wt(r,"basis","preferred-size")+r;case 6060:return Et+"box-"+wt(r,"-grow","")+Et+r+bn+wt(r,"grow","positive")+r;case 4554:return Et+wt(r,/([^-])(transform)/g,"$1"+Et+"$2")+r;case 6187:return wt(wt(wt(r,/(zoom-|grab)/,Et+"$1"),/(image-set)/,Et+"$1"),r,"")+r;case 5495:case 3959:return wt(r,/(image-set\([^]*)/,Et+"$1$`$1");case 4968:return wt(wt(r,/(.+:)(flex-)?(.*)/,Et+"box-pack:$3"+bn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Et+r+r;case 4095:case 3583:case 4068:case 2532:return wt(r,/(.+)-inline(.+)/,Et+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ni(r)-1-e>6)switch(yn(r,e+1)){case 109:if(yn(r,e+4)!==45)break;case 102:return wt(r,/(.+:)(.+)-([^]+)/,"$1"+Et+"$2-$3$1"+Iu+(yn(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~Md(r,"stretch")?Q0(wt(r,"stretch","fill-available"),e)+r:r}break;case 4949:if(yn(r,e+1)!==115)break;case 6444:switch(yn(r,Ni(r)-3-(~Md(r,"!important")&&10))){case 107:return wt(r,":",":"+Et)+r;case 101:return wt(r,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Et+(yn(r,14)===45?"inline-":"")+"box$3$1"+Et+"$2$3$1"+bn+"$2box$3")+r}break;case 5936:switch(yn(r,e+11)){case 114:return Et+r+bn+wt(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Et+r+bn+wt(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Et+r+bn+wt(r,/[svh]\w+-[tblr]{2}/,"lr")+r}return Et+r+bn+r+r}return r}var sy=function(e,t,s,o){if(e.length>-1&&!e.return)switch(e.type){case mh:e.return=Q0(e.value,e.length);break;case j0:return go([ca(e,{value:wt(e.value,"@","@"+Et)})],o);case ph:if(e.length)return Vx(e.props,function(l){switch(Hx(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return go([ca(e,{props:[wt(l,/:(read-\w+)/,":"+Iu+"$1")]})],o);case"::placeholder":return go([ca(e,{props:[wt(l,/:(plac\w+)/,":"+Et+"input-$1")]}),ca(e,{props:[wt(l,/:(plac\w+)/,":"+Iu+"$1")]}),ca(e,{props:[wt(l,/:(plac\w+)/,bn+"input-$1")]})],o)}return""})}},oy=[sy],ay=function(e){var t=e.key;if(t==="css"){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(s,function(M){var y=M.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(M),M.setAttribute("data-s",""))})}var o=e.stylisPlugins||oy,l={},c,f=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(M){for(var y=M.getAttribute("data-emotion").split(" "),x=1;x<y.length;x++)l[y[x]]=!0;f.push(M)});var h,p=[iy,ry];{var v,m=[Zx,Jx(function(M){v.insert(M)})],_=Qx(p.concat(o,m)),S=function(y){return go(Yx(y),_)};h=function(y,x,D,L){v=D,S(y?y+"{"+x.styles+"}":x.styles),L&&(E.inserted[x.name]=!0)}}var E={key:t,sheet:new Nx({key:t,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:h};return E.sheet.hydrate(f),E},ly=!0;function uy(r,e,t){var s="";return t.split(" ").forEach(function(o){r[o]!==void 0?e.push(r[o]+";"):o&&(s+=o+" ")}),s}var J0=function(e,t,s){var o=e.key+"-"+t.name;(s===!1||ly===!1)&&e.registered[o]===void 0&&(e.registered[o]=t.styles)},cy=function(e,t,s){J0(e,t,s);var o=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var l=t;do e.insert(t===l?"."+o:"",l,e.sheet,!0),l=l.next;while(l!==void 0)}};function fy(r){for(var e=0,t,s=0,o=r.length;o>=4;++s,o-=4)t=r.charCodeAt(s)&255|(r.charCodeAt(++s)&255)<<8|(r.charCodeAt(++s)&255)<<16|(r.charCodeAt(++s)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(r.charCodeAt(s+2)&255)<<16;case 2:e^=(r.charCodeAt(s+1)&255)<<8;case 1:e^=r.charCodeAt(s)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var dy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hy=/[A-Z]|^ms/g,py=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ev=function(e){return e.charCodeAt(1)===45},mg=function(e){return e!=null&&typeof e!="boolean"},Bf=Z0(function(r){return ev(r)?r:r.replace(hy,"-$&").toLowerCase()}),gg=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(py,function(s,o,l){return Fi={name:o,styles:l,next:Fi},o})}return dy[e]!==1&&!ev(e)&&typeof t=="number"&&t!==0?t+"px":t};function Aa(r,e,t){if(t==null)return"";var s=t;if(s.__emotion_styles!==void 0)return s;switch(typeof t){case"boolean":return"";case"object":{var o=t;if(o.anim===1)return Fi={name:o.name,styles:o.styles,next:Fi},o.name;var l=t;if(l.styles!==void 0){var c=l.next;if(c!==void 0)for(;c!==void 0;)Fi={name:c.name,styles:c.styles,next:Fi},c=c.next;var f=l.styles+";";return f}return my(r,e,t)}case"function":{if(r!==void 0){var h=Fi,p=t(r);return Fi=h,Aa(r,e,p)}break}}var v=t;if(e==null)return v;var m=e[v];return m!==void 0?m:v}function my(r,e,t){var s="";if(Array.isArray(t))for(var o=0;o<t.length;o++)s+=Aa(r,e,t[o])+";";else for(var l in t){var c=t[l];if(typeof c!="object"){var f=c;e!=null&&e[f]!==void 0?s+=l+"{"+e[f]+"}":mg(f)&&(s+=Bf(l)+":"+gg(l,f)+";")}else if(Array.isArray(c)&&typeof c[0]=="string"&&(e==null||e[c[0]]===void 0))for(var h=0;h<c.length;h++)mg(c[h])&&(s+=Bf(l)+":"+gg(l,c[h])+";");else{var p=Aa(r,e,c);switch(l){case"animation":case"animationName":{s+=Bf(l)+":"+p+";";break}default:s+=l+"{"+p+"}"}}}return s}var vg=/label:\s*([^\s;{]+)\s*(;|$)/g,Fi;function gy(r,e,t){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var s=!0,o="";Fi=void 0;var l=r[0];if(l==null||l.raw===void 0)s=!1,o+=Aa(t,e,l);else{var c=l;o+=c[0]}for(var f=1;f<r.length;f++)if(o+=Aa(t,e,r[f]),s){var h=l;o+=h[f]}vg.lastIndex=0;for(var p="",v;(v=vg.exec(o))!==null;)p+="-"+v[1];var m=fy(o)+p;return{name:m,styles:o,next:Fi}}var vy=function(e){return e()},_y=og.useInsertionEffect?og.useInsertionEffect:!1,xy=_y||vy,tv=Ut.createContext(typeof HTMLElement<"u"?ay({key:"css"}):null);tv.Provider;var yy=function(e){return Ut.forwardRef(function(t,s){var o=Ut.useContext(tv);return e(t,o,s)})},nv=Ut.createContext({}),Sy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,My=Z0(function(r){return Sy.test(r)||r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)<91}),Ey=My,wy=function(e){return e!=="theme"},_g=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Ey:wy},xg=function(e,t,s){var o;if(t){var l=t.shouldForwardProp;o=e.__emotion_forwardProp&&l?function(c){return e.__emotion_forwardProp(c)&&l(c)}:l}return typeof o!="function"&&s&&(o=e.__emotion_forwardProp),o},Ty=function(e){var t=e.cache,s=e.serialized,o=e.isStringTag;return J0(t,s,o),xy(function(){return cy(t,s,o)}),null},Ay=function r(e,t){var s=e.__emotion_real===e,o=s&&e.__emotion_base||e,l,c;t!==void 0&&(l=t.label,c=t.target);var f=xg(e,t,s),h=f||_g(o),p=!h("as");return function(){var v=arguments,m=s&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(l!==void 0&&m.push("label:"+l+";"),v[0]==null||v[0].raw===void 0)m.push.apply(m,v);else{var _=v[0];m.push(_[0]);for(var S=v.length,E=1;E<S;E++)m.push(v[E],_[E])}var M=yy(function(y,x,D){var L=p&&y.as||o,P="",V=[],U=y;if(y.theme==null){U={};for(var C in y)U[C]=y[C];U.theme=Ut.useContext(nv)}typeof y.className=="string"?P=uy(x.registered,V,y.className):y.className!=null&&(P=y.className+" ");var F=gy(m.concat(V),x.registered,U);P+=x.key+"-"+F.name,c!==void 0&&(P+=" "+c);var R=p&&f===void 0?_g(L):h,T={};for(var k in y)p&&k==="as"||R(k)&&(T[k]=y[k]);return T.className=P,D&&(T.ref=D),Ut.createElement(Ut.Fragment,null,Ut.createElement(Ty,{cache:x,serialized:F,isStringTag:typeof L=="string"}),Ut.createElement(L,T))});return M.displayName=l!==void 0?l:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",M.defaultProps=e.defaultProps,M.__emotion_real=M,M.__emotion_base=o,M.__emotion_styles=m,M.__emotion_forwardProp=f,Object.defineProperty(M,"toString",{value:function(){return"."+c}}),M.withComponent=function(y,x){var D=r(y,Vt({},t,x,{shouldForwardProp:xg(M,x,!0)}));return D.apply(void 0,m)},M}},Cy=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],wd=Ay.bind(null);Cy.forEach(function(r){wd[r]=wd(r)});function Ry(r,e){return wd(r,e)}function gs(r){if(typeof r!="object"||r===null)return!1;const e=Object.getPrototypeOf(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)}function iv(r){if(Ut.isValidElement(r)||!gs(r))return r;const e={};return Object.keys(r).forEach(t=>{e[t]=iv(r[t])}),e}function fr(r,e,t={clone:!0}){const s=t.clone?Vt({},r):r;return gs(r)&&gs(e)&&Object.keys(e).forEach(o=>{Ut.isValidElement(e[o])?s[o]=e[o]:gs(e[o])&&Object.prototype.hasOwnProperty.call(r,o)&&gs(r[o])?s[o]=fr(r[o],e[o],t):t.clone?s[o]=gs(e[o])?iv(e[o]):e[o]:s[o]=e[o]}),s}const by=["values","unit","step"],Py=r=>{const e=Object.keys(r).map(t=>({key:t,val:r[t]}))||[];return e.sort((t,s)=>t.val-s.val),e.reduce((t,s)=>Vt({},t,{[s.key]:s.val}),{})};function Ly(r){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:t="px",step:s=5}=r,o=qr(r,by),l=Py(e),c=Object.keys(l);function f(_){return`@media (min-width:${typeof e[_]=="number"?e[_]:_}${t})`}function h(_){return`@media (max-width:${(typeof e[_]=="number"?e[_]:_)-s/100}${t})`}function p(_,S){const E=c.indexOf(S);return`@media (min-width:${typeof e[_]=="number"?e[_]:_}${t}) and (max-width:${(E!==-1&&typeof e[c[E]]=="number"?e[c[E]]:S)-s/100}${t})`}function v(_){return c.indexOf(_)+1<c.length?p(_,c[c.indexOf(_)+1]):f(_)}function m(_){const S=c.indexOf(_);return S===0?f(c[1]):S===c.length-1?h(c[S]):p(_,c[c.indexOf(_)+1]).replace("@media","@media not all and")}return Vt({keys:c,values:l,up:f,down:h,between:p,only:v,not:m,unit:t},o)}const Dy={borderRadius:4};function xa(r,e){return e?fr(r,e,{clone:!1}):r}const vh={xs:0,sm:600,md:900,lg:1200,xl:1536},yg={keys:["xs","sm","md","lg","xl"],up:r=>`@media (min-width:${vh[r]}px)`};function hr(r,e,t){const s=r.theme||{};if(Array.isArray(e)){const l=s.breakpoints||yg;return e.reduce((c,f,h)=>(c[l.up(l.keys[h])]=t(e[h]),c),{})}if(typeof e=="object"){const l=s.breakpoints||yg;return Object.keys(e).reduce((c,f)=>{if(Object.keys(l.values||vh).indexOf(f)!==-1){const h=l.up(f);c[h]=t(e[f],f)}else{const h=f;c[h]=e[h]}return c},{})}return t(e)}function Iy(r={}){var e;return((e=r.keys)==null?void 0:e.reduce((s,o)=>{const l=r.up(o);return s[l]={},s},{}))||{}}function Uy(r,e){return r.reduce((t,s)=>{const o=t[s];return(!o||Object.keys(o).length===0)&&delete t[s],t},e)}function rv(r){if(typeof r!="string")throw new Error(Ea(7));return r.charAt(0).toUpperCase()+r.slice(1)}function Xu(r,e,t=!0){if(!e||typeof e!="string")return null;if(r&&r.vars&&t){const s=`vars.${e}`.split(".").reduce((o,l)=>o&&o[l]?o[l]:null,r);if(s!=null)return s}return e.split(".").reduce((s,o)=>s&&s[o]!=null?s[o]:null,r)}function Uu(r,e,t,s=t){let o;return typeof r=="function"?o=r(t):Array.isArray(r)?o=r[t]||s:o=Xu(r,t)||s,e&&(o=e(o,s,r)),o}function Qt(r){const{prop:e,cssProperty:t=r.prop,themeKey:s,transform:o}=r,l=c=>{if(c[e]==null)return null;const f=c[e],h=c.theme,p=Xu(h,s)||{};return hr(c,f,m=>{let _=Uu(p,o,m);return m===_&&typeof m=="string"&&(_=Uu(p,o,`${e}${m==="default"?"":rv(m)}`,m)),t===!1?_:{[t]:_}})};return l.propTypes={},l.filterProps=[e],l}function Ny(r){const e={};return t=>(e[t]===void 0&&(e[t]=r(t)),e[t])}const Fy={m:"margin",p:"padding"},Oy={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Sg={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},ky=Ny(r=>{if(r.length>2)if(Sg[r])r=Sg[r];else return[r];const[e,t]=r.split(""),s=Fy[e],o=Oy[t]||"";return Array.isArray(o)?o.map(l=>s+l):[s+o]}),_h=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],xh=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[..._h,...xh];function Ua(r,e,t,s){var o;const l=(o=Xu(r,e,!1))!=null?o:t;return typeof l=="number"?c=>typeof c=="string"?c:l*c:Array.isArray(l)?c=>typeof c=="string"?c:l[c]:typeof l=="function"?l:()=>{}}function sv(r){return Ua(r,"spacing",8)}function Na(r,e){if(typeof e=="string"||e==null)return e;const t=Math.abs(e),s=r(t);return e>=0?s:typeof s=="number"?-s:`-${s}`}function By(r,e){return t=>r.reduce((s,o)=>(s[o]=Na(e,t),s),{})}function zy(r,e,t,s){if(e.indexOf(t)===-1)return null;const o=ky(t),l=By(o,s),c=r[t];return hr(r,c,l)}function ov(r,e){const t=sv(r.theme);return Object.keys(r).map(s=>zy(r,e,s,t)).reduce(xa,{})}function Yt(r){return ov(r,_h)}Yt.propTypes={};Yt.filterProps=_h;function Kt(r){return ov(r,xh)}Kt.propTypes={};Kt.filterProps=xh;function Hy(r=8){if(r.mui)return r;const e=sv({spacing:r}),t=(...s)=>(s.length===0?[1]:s).map(l=>{const c=e(l);return typeof c=="number"?`${c}px`:c}).join(" ");return t.mui=!0,t}function ju(...r){const e=r.reduce((s,o)=>(o.filterProps.forEach(l=>{s[l]=o}),s),{}),t=s=>Object.keys(s).reduce((o,l)=>e[l]?xa(o,e[l](s)):o,{});return t.propTypes={},t.filterProps=r.reduce((s,o)=>s.concat(o.filterProps),[]),t}function hi(r){return typeof r!="number"?r:`${r}px solid`}function pi(r,e){return Qt({prop:r,themeKey:"borders",transform:e})}const Vy=pi("border",hi),Gy=pi("borderTop",hi),Wy=pi("borderRight",hi),Xy=pi("borderBottom",hi),jy=pi("borderLeft",hi),$y=pi("borderColor"),qy=pi("borderTopColor"),Yy=pi("borderRightColor"),Ky=pi("borderBottomColor"),Zy=pi("borderLeftColor"),Qy=pi("outline",hi),Jy=pi("outlineColor"),$u=r=>{if(r.borderRadius!==void 0&&r.borderRadius!==null){const e=Ua(r.theme,"shape.borderRadius",4),t=s=>({borderRadius:Na(e,s)});return hr(r,r.borderRadius,t)}return null};$u.propTypes={};$u.filterProps=["borderRadius"];ju(Vy,Gy,Wy,Xy,jy,$y,qy,Yy,Ky,Zy,$u,Qy,Jy);const qu=r=>{if(r.gap!==void 0&&r.gap!==null){const e=Ua(r.theme,"spacing",8),t=s=>({gap:Na(e,s)});return hr(r,r.gap,t)}return null};qu.propTypes={};qu.filterProps=["gap"];const Yu=r=>{if(r.columnGap!==void 0&&r.columnGap!==null){const e=Ua(r.theme,"spacing",8),t=s=>({columnGap:Na(e,s)});return hr(r,r.columnGap,t)}return null};Yu.propTypes={};Yu.filterProps=["columnGap"];const Ku=r=>{if(r.rowGap!==void 0&&r.rowGap!==null){const e=Ua(r.theme,"spacing",8),t=s=>({rowGap:Na(e,s)});return hr(r,r.rowGap,t)}return null};Ku.propTypes={};Ku.filterProps=["rowGap"];const eS=Qt({prop:"gridColumn"}),tS=Qt({prop:"gridRow"}),nS=Qt({prop:"gridAutoFlow"}),iS=Qt({prop:"gridAutoColumns"}),rS=Qt({prop:"gridAutoRows"}),sS=Qt({prop:"gridTemplateColumns"}),oS=Qt({prop:"gridTemplateRows"}),aS=Qt({prop:"gridTemplateAreas"}),lS=Qt({prop:"gridArea"});ju(qu,Yu,Ku,eS,tS,nS,iS,rS,sS,oS,aS,lS);function vo(r,e){return e==="grey"?e:r}const uS=Qt({prop:"color",themeKey:"palette",transform:vo}),cS=Qt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:vo}),fS=Qt({prop:"backgroundColor",themeKey:"palette",transform:vo});ju(uS,cS,fS);function ni(r){return r<=1&&r!==0?`${r*100}%`:r}const dS=Qt({prop:"width",transform:ni}),yh=r=>{if(r.maxWidth!==void 0&&r.maxWidth!==null){const e=t=>{var s,o;const l=((s=r.theme)==null||(s=s.breakpoints)==null||(s=s.values)==null?void 0:s[t])||vh[t];return l?((o=r.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${l}${r.theme.breakpoints.unit}`}:{maxWidth:l}:{maxWidth:ni(t)}};return hr(r,r.maxWidth,e)}return null};yh.filterProps=["maxWidth"];const hS=Qt({prop:"minWidth",transform:ni}),pS=Qt({prop:"height",transform:ni}),mS=Qt({prop:"maxHeight",transform:ni}),gS=Qt({prop:"minHeight",transform:ni});Qt({prop:"size",cssProperty:"width",transform:ni});Qt({prop:"size",cssProperty:"height",transform:ni});const vS=Qt({prop:"boxSizing"});ju(dS,yh,hS,pS,mS,gS,vS);const Zu={border:{themeKey:"borders",transform:hi},borderTop:{themeKey:"borders",transform:hi},borderRight:{themeKey:"borders",transform:hi},borderBottom:{themeKey:"borders",transform:hi},borderLeft:{themeKey:"borders",transform:hi},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:hi},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:$u},color:{themeKey:"palette",transform:vo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:vo},backgroundColor:{themeKey:"palette",transform:vo},p:{style:Kt},pt:{style:Kt},pr:{style:Kt},pb:{style:Kt},pl:{style:Kt},px:{style:Kt},py:{style:Kt},padding:{style:Kt},paddingTop:{style:Kt},paddingRight:{style:Kt},paddingBottom:{style:Kt},paddingLeft:{style:Kt},paddingX:{style:Kt},paddingY:{style:Kt},paddingInline:{style:Kt},paddingInlineStart:{style:Kt},paddingInlineEnd:{style:Kt},paddingBlock:{style:Kt},paddingBlockStart:{style:Kt},paddingBlockEnd:{style:Kt},m:{style:Yt},mt:{style:Yt},mr:{style:Yt},mb:{style:Yt},ml:{style:Yt},mx:{style:Yt},my:{style:Yt},margin:{style:Yt},marginTop:{style:Yt},marginRight:{style:Yt},marginBottom:{style:Yt},marginLeft:{style:Yt},marginX:{style:Yt},marginY:{style:Yt},marginInline:{style:Yt},marginInlineStart:{style:Yt},marginInlineEnd:{style:Yt},marginBlock:{style:Yt},marginBlockStart:{style:Yt},marginBlockEnd:{style:Yt},displayPrint:{cssProperty:!1,transform:r=>({"@media print":{display:r}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:qu},rowGap:{style:Ku},columnGap:{style:Yu},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:ni},maxWidth:{style:yh},minWidth:{transform:ni},height:{transform:ni},maxHeight:{transform:ni},minHeight:{transform:ni},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function _S(...r){const e=r.reduce((s,o)=>s.concat(Object.keys(o)),[]),t=new Set(e);return r.every(s=>t.size===Object.keys(s).length)}function xS(r,e){return typeof r=="function"?r(e):r}function yS(){function r(t,s,o,l){const c={[t]:s,theme:o},f=l[t];if(!f)return{[t]:s};const{cssProperty:h=t,themeKey:p,transform:v,style:m}=f;if(s==null)return null;if(p==="typography"&&s==="inherit")return{[t]:s};const _=Xu(o,p)||{};return m?m(c):hr(c,s,E=>{let M=Uu(_,v,E);return E===M&&typeof E=="string"&&(M=Uu(_,v,`${t}${E==="default"?"":rv(E)}`,E)),h===!1?M:{[h]:M}})}function e(t){var s;const{sx:o,theme:l={}}=t||{};if(!o)return null;const c=(s=l.unstable_sxConfig)!=null?s:Zu;function f(h){let p=h;if(typeof h=="function")p=h(l);else if(typeof h!="object")return h;if(!p)return null;const v=Iy(l.breakpoints),m=Object.keys(v);let _=v;return Object.keys(p).forEach(S=>{const E=xS(p[S],l);if(E!=null)if(typeof E=="object")if(c[S])_=xa(_,r(S,E,l,c));else{const M=hr({theme:l},E,y=>({[S]:y}));_S(M,E)?_[S]=e({sx:E,theme:l}):_=xa(_,M)}else _=xa(_,r(S,E,l,c))}),Uy(m,_)}return Array.isArray(o)?o.map(f):f(o)}return e}const Qu=yS();Qu.filterProps=["sx"];function SS(r,e){const t=this;return t.vars&&typeof t.getColorSchemeSelector=="function"?{[t.getColorSchemeSelector(r).replace(/(\[[^\]]+\])/,"*:where($1)")]:e}:t.palette.mode===r?e:{}}const MS=["breakpoints","palette","spacing","shape"];function av(r={},...e){const{breakpoints:t={},palette:s={},spacing:o,shape:l={}}=r,c=qr(r,MS),f=Ly(t),h=Hy(o);let p=fr({breakpoints:f,direction:"ltr",components:{},palette:Vt({mode:"light"},s),spacing:h,shape:Vt({},Dy,l)},c);return p.applyStyles=SS,p=e.reduce((v,m)=>fr(v,m),p),p.unstable_sxConfig=Vt({},Zu,c==null?void 0:c.unstable_sxConfig),p.unstable_sx=function(m){return Qu({sx:m,theme:this})},p}function ES(r){return Object.keys(r).length===0}function wS(r=null){const e=Ut.useContext(nv);return!e||ES(e)?r:e}const TS=av();function AS(r=TS){return wS(r)}const CS=["sx"],RS=r=>{var e,t;const s={systemProps:{},otherProps:{}},o=(e=r==null||(t=r.theme)==null?void 0:t.unstable_sxConfig)!=null?e:Zu;return Object.keys(r).forEach(l=>{o[l]?s.systemProps[l]=r[l]:s.otherProps[l]=r[l]}),s};function bS(r){const{sx:e}=r,t=qr(r,CS),{systemProps:s,otherProps:o}=RS(t);let l;return Array.isArray(e)?l=[s,...e]:typeof e=="function"?l=(...c)=>{const f=e(...c);return gs(f)?Vt({},s,f):s}:l=Vt({},s,e),Vt({},o,{sx:l})}const Mg=r=>r,PS=()=>{let r=Mg;return{configure(e){r=e},generate(e){return r(e)},reset(){r=Mg}}},lv=PS();function uv(r){var e,t,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var o=r.length;for(e=0;e<o;e++)r[e]&&(t=uv(r[e]))&&(s&&(s+=" "),s+=t)}else for(t in r)r[t]&&(s&&(s+=" "),s+=t);return s}function LS(){for(var r,e,t=0,s="",o=arguments.length;t<o;t++)(r=arguments[t])&&(e=uv(r))&&(s&&(s+=" "),s+=e);return s}const DS=["className","component"];function IS(r={}){const{themeId:e,defaultTheme:t,defaultClassName:s="MuiBox-root",generateClassName:o}=r,l=Ry("div",{shouldForwardProp:f=>f!=="theme"&&f!=="sx"&&f!=="as"})(Qu);return Ut.forwardRef(function(h,p){const v=AS(t),m=bS(h),{className:_,component:S="div"}=m,E=qr(m,DS);return xn.jsx(l,Vt({as:S,ref:p,className:LS(_,o?o(s):s),theme:e&&v[e]||v},E))})}const US={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function NS(r,e,t="Mui"){const s=US[e];return s?`${t}-${s}`:`${lv.generate(r)}-${e}`}function FS(r,e,t="Mui"){const s={};return e.forEach(o=>{s[o]=NS(r,o,t)}),s}function OS(r,e=Number.MIN_SAFE_INTEGER,t=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(r,t))}const kS=Object.freeze(Object.defineProperty({__proto__:null,default:OS},Symbol.toStringTag,{value:"Module"}));function BS(r,e){return Vt({toolbar:{minHeight:56,[r.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[r.up("sm")]:{minHeight:64}}},e)}var Xt={},zf={exports:{}},Eg;function zS(){return Eg||(Eg=1,function(r){function e(t){return t&&t.__esModule?t:{default:t}}r.exports=e,r.exports.__esModule=!0,r.exports.default=r.exports}(zf)),zf.exports}const HS=G0(Lx),VS=G0(kS);var wg;function GS(){if(wg)return Xt;wg=1;var r=zS();Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.alpha=E,Xt.blend=U,Xt.colorChannel=void 0,Xt.darken=y,Xt.decomposeColor=c,Xt.emphasize=P,Xt.getContrastRatio=S,Xt.getLuminance=_,Xt.hexToRgb=o,Xt.hslToRgb=m,Xt.lighten=D,Xt.private_safeAlpha=M,Xt.private_safeColorChannel=void 0,Xt.private_safeDarken=x,Xt.private_safeEmphasize=V,Xt.private_safeLighten=L,Xt.recomposeColor=p,Xt.rgbToHex=v;var e=r(HS),t=r(VS);function s(C,F=0,R=1){return(0,t.default)(C,F,R)}function o(C){C=C.slice(1);const F=new RegExp(`.{1,${C.length>=6?2:1}}`,"g");let R=C.match(F);return R&&R[0].length===1&&(R=R.map(T=>T+T)),R?`rgb${R.length===4?"a":""}(${R.map((T,k)=>k<3?parseInt(T,16):Math.round(parseInt(T,16)/255*1e3)/1e3).join(", ")})`:""}function l(C){const F=C.toString(16);return F.length===1?`0${F}`:F}function c(C){if(C.type)return C;if(C.charAt(0)==="#")return c(o(C));const F=C.indexOf("("),R=C.substring(0,F);if(["rgb","rgba","hsl","hsla","color"].indexOf(R)===-1)throw new Error((0,e.default)(9,C));let T=C.substring(F+1,C.length-1),k;if(R==="color"){if(T=T.split(" "),k=T.shift(),T.length===4&&T[3].charAt(0)==="/"&&(T[3]=T[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(k)===-1)throw new Error((0,e.default)(10,k))}else T=T.split(",");return T=T.map(ne=>parseFloat(ne)),{type:R,values:T,colorSpace:k}}const f=C=>{const F=c(C);return F.values.slice(0,3).map((R,T)=>F.type.indexOf("hsl")!==-1&&T!==0?`${R}%`:R).join(" ")};Xt.colorChannel=f;const h=(C,F)=>{try{return f(C)}catch{return C}};Xt.private_safeColorChannel=h;function p(C){const{type:F,colorSpace:R}=C;let{values:T}=C;return F.indexOf("rgb")!==-1?T=T.map((k,ne)=>ne<3?parseInt(k,10):k):F.indexOf("hsl")!==-1&&(T[1]=`${T[1]}%`,T[2]=`${T[2]}%`),F.indexOf("color")!==-1?T=`${R} ${T.join(" ")}`:T=`${T.join(", ")}`,`${F}(${T})`}function v(C){if(C.indexOf("#")===0)return C;const{values:F}=c(C);return`#${F.map((R,T)=>l(T===3?Math.round(255*R):R)).join("")}`}function m(C){C=c(C);const{values:F}=C,R=F[0],T=F[1]/100,k=F[2]/100,ne=T*Math.min(k,1-k),Z=(ee,pe=(ee+R/30)%12)=>k-ne*Math.max(Math.min(pe-3,9-pe,1),-1);let se="rgb";const ue=[Math.round(Z(0)*255),Math.round(Z(8)*255),Math.round(Z(4)*255)];return C.type==="hsla"&&(se+="a",ue.push(F[3])),p({type:se,values:ue})}function _(C){C=c(C);let F=C.type==="hsl"||C.type==="hsla"?c(m(C)).values:C.values;return F=F.map(R=>(C.type!=="color"&&(R/=255),R<=.03928?R/12.92:((R+.055)/1.055)**2.4)),Number((.2126*F[0]+.7152*F[1]+.0722*F[2]).toFixed(3))}function S(C,F){const R=_(C),T=_(F);return(Math.max(R,T)+.05)/(Math.min(R,T)+.05)}function E(C,F){return C=c(C),F=s(F),(C.type==="rgb"||C.type==="hsl")&&(C.type+="a"),C.type==="color"?C.values[3]=`/${F}`:C.values[3]=F,p(C)}function M(C,F,R){try{return E(C,F)}catch{return C}}function y(C,F){if(C=c(C),F=s(F),C.type.indexOf("hsl")!==-1)C.values[2]*=1-F;else if(C.type.indexOf("rgb")!==-1||C.type.indexOf("color")!==-1)for(let R=0;R<3;R+=1)C.values[R]*=1-F;return p(C)}function x(C,F,R){try{return y(C,F)}catch{return C}}function D(C,F){if(C=c(C),F=s(F),C.type.indexOf("hsl")!==-1)C.values[2]+=(100-C.values[2])*F;else if(C.type.indexOf("rgb")!==-1)for(let R=0;R<3;R+=1)C.values[R]+=(255-C.values[R])*F;else if(C.type.indexOf("color")!==-1)for(let R=0;R<3;R+=1)C.values[R]+=(1-C.values[R])*F;return p(C)}function L(C,F,R){try{return D(C,F)}catch{return C}}function P(C,F=.15){return _(C)>.5?y(C,F):D(C,F)}function V(C,F,R){try{return P(C,F)}catch{return C}}function U(C,F,R,T=1){const k=(ue,ee)=>Math.round((ue**(1/T)*(1-R)+ee**(1/T)*R)**T),ne=c(C),Z=c(F),se=[k(ne.values[0],Z.values[0]),k(ne.values[1],Z.values[1]),k(ne.values[2],Z.values[2])];return p({type:"rgb",values:se})}return Xt}var Td=GS();const WS=["mode","contrastThreshold","tonalOffset"],Tg={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Ma.white,default:Ma.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Hf={text:{primary:Ma.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Ma.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Ag(r,e,t,s){const o=s.light||s,l=s.dark||s*1.5;r[e]||(r.hasOwnProperty(t)?r[e]=r[t]:e==="light"?r.light=Td.lighten(r.main,o):e==="dark"&&(r.dark=Td.darken(r.main,l)))}function XS(r="light"){return r==="dark"?{main:Ks[200],light:Ks[50],dark:Ks[400]}:{main:Ks[700],light:Ks[400],dark:Ks[800]}}function jS(r="light"){return r==="dark"?{main:Ys[200],light:Ys[50],dark:Ys[400]}:{main:Ys[500],light:Ys[300],dark:Ys[700]}}function $S(r="light"){return r==="dark"?{main:qs[500],light:qs[300],dark:qs[700]}:{main:qs[700],light:qs[400],dark:qs[800]}}function qS(r="light"){return r==="dark"?{main:Zs[400],light:Zs[300],dark:Zs[700]}:{main:Zs[700],light:Zs[500],dark:Zs[900]}}function YS(r="light"){return r==="dark"?{main:Qs[400],light:Qs[300],dark:Qs[700]}:{main:Qs[800],light:Qs[500],dark:Qs[900]}}function KS(r="light"){return r==="dark"?{main:ua[400],light:ua[300],dark:ua[700]}:{main:"#ed6c02",light:ua[500],dark:ua[900]}}function ZS(r){const{mode:e="light",contrastThreshold:t=3,tonalOffset:s=.2}=r,o=qr(r,WS),l=r.primary||XS(e),c=r.secondary||jS(e),f=r.error||$S(e),h=r.info||qS(e),p=r.success||YS(e),v=r.warning||KS(e);function m(M){return Td.getContrastRatio(M,Hf.text.primary)>=t?Hf.text.primary:Tg.text.primary}const _=({color:M,name:y,mainShade:x=500,lightShade:D=300,darkShade:L=700})=>{if(M=Vt({},M),!M.main&&M[x]&&(M.main=M[x]),!M.hasOwnProperty("main"))throw new Error(Ea(11,y?` (${y})`:"",x));if(typeof M.main!="string")throw new Error(Ea(12,y?` (${y})`:"",JSON.stringify(M.main)));return Ag(M,"light",D,s),Ag(M,"dark",L,s),M.contrastText||(M.contrastText=m(M.main)),M},S={dark:Hf,light:Tg};return fr(Vt({common:Vt({},Ma),mode:e,primary:_({color:l,name:"primary"}),secondary:_({color:c,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:_({color:f,name:"error"}),warning:_({color:v,name:"warning"}),info:_({color:h,name:"info"}),success:_({color:p,name:"success"}),grey:Px,contrastThreshold:t,getContrastText:m,augmentColor:_,tonalOffset:s},S[e]),o)}const QS=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function JS(r){return Math.round(r*1e5)/1e5}const Cg={textTransform:"uppercase"},Rg='"Roboto", "Helvetica", "Arial", sans-serif';function eM(r,e){const t=typeof e=="function"?e(r):e,{fontFamily:s=Rg,fontSize:o=14,fontWeightLight:l=300,fontWeightRegular:c=400,fontWeightMedium:f=500,fontWeightBold:h=700,htmlFontSize:p=16,allVariants:v,pxToRem:m}=t,_=qr(t,QS),S=o/14,E=m||(x=>`${x/p*S}rem`),M=(x,D,L,P,V)=>Vt({fontFamily:s,fontWeight:x,fontSize:E(D),lineHeight:L},s===Rg?{letterSpacing:`${JS(P/D)}em`}:{},V,v),y={h1:M(l,96,1.167,-1.5),h2:M(l,60,1.2,-.5),h3:M(c,48,1.167,0),h4:M(c,34,1.235,.25),h5:M(c,24,1.334,0),h6:M(f,20,1.6,.15),subtitle1:M(c,16,1.75,.15),subtitle2:M(f,14,1.57,.1),body1:M(c,16,1.5,.15),body2:M(c,14,1.43,.15),button:M(f,14,1.75,.4,Cg),caption:M(c,12,1.66,.4),overline:M(c,12,2.66,1,Cg),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return fr(Vt({htmlFontSize:p,pxToRem:E,fontFamily:s,fontSize:o,fontWeightLight:l,fontWeightRegular:c,fontWeightMedium:f,fontWeightBold:h},y),_,{clone:!1})}const tM=.2,nM=.14,iM=.12;function zt(...r){return[`${r[0]}px ${r[1]}px ${r[2]}px ${r[3]}px rgba(0,0,0,${tM})`,`${r[4]}px ${r[5]}px ${r[6]}px ${r[7]}px rgba(0,0,0,${nM})`,`${r[8]}px ${r[9]}px ${r[10]}px ${r[11]}px rgba(0,0,0,${iM})`].join(",")}const rM=["none",zt(0,2,1,-1,0,1,1,0,0,1,3,0),zt(0,3,1,-2,0,2,2,0,0,1,5,0),zt(0,3,3,-2,0,3,4,0,0,1,8,0),zt(0,2,4,-1,0,4,5,0,0,1,10,0),zt(0,3,5,-1,0,5,8,0,0,1,14,0),zt(0,3,5,-1,0,6,10,0,0,1,18,0),zt(0,4,5,-2,0,7,10,1,0,2,16,1),zt(0,5,5,-3,0,8,10,1,0,3,14,2),zt(0,5,6,-3,0,9,12,1,0,3,16,2),zt(0,6,6,-3,0,10,14,1,0,4,18,3),zt(0,6,7,-4,0,11,15,1,0,4,20,3),zt(0,7,8,-4,0,12,17,2,0,5,22,4),zt(0,7,8,-4,0,13,19,2,0,5,24,4),zt(0,7,9,-4,0,14,21,2,0,5,26,4),zt(0,8,9,-5,0,15,22,2,0,6,28,5),zt(0,8,10,-5,0,16,24,2,0,6,30,5),zt(0,8,11,-5,0,17,26,2,0,6,32,5),zt(0,9,11,-5,0,18,28,2,0,7,34,6),zt(0,9,12,-6,0,19,29,2,0,7,36,6),zt(0,10,13,-6,0,20,31,3,0,8,38,7),zt(0,10,13,-6,0,21,33,3,0,8,40,7),zt(0,10,14,-6,0,22,35,3,0,8,42,7),zt(0,11,14,-7,0,23,36,3,0,9,44,8),zt(0,11,15,-7,0,24,38,3,0,9,46,8)],sM=["duration","easing","delay"],oM={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},aM={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function bg(r){return`${Math.round(r)}ms`}function lM(r){if(!r)return 0;const e=r/36;return Math.round((4+15*e**.25+e/5)*10)}function uM(r){const e=Vt({},oM,r.easing),t=Vt({},aM,r.duration);return Vt({getAutoHeightDuration:lM,create:(o=["all"],l={})=>{const{duration:c=t.standard,easing:f=e.easeInOut,delay:h=0}=l;return qr(l,sM),(Array.isArray(o)?o:[o]).map(p=>`${p} ${typeof c=="string"?c:bg(c)} ${f} ${typeof h=="string"?h:bg(h)}`).join(",")}},r,{easing:e,duration:t})}const cM={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},fM=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function dM(r={},...e){const{mixins:t={},palette:s={},transitions:o={},typography:l={}}=r,c=qr(r,fM);if(r.vars&&r.generateCssVars===void 0)throw new Error(Ea(18));const f=ZS(s),h=av(r);let p=fr(h,{mixins:BS(h.breakpoints,t),palette:f,shadows:rM.slice(),typography:eM(f,l),transitions:uM(o),zIndex:Vt({},cM)});return p=fr(p,c),p=e.reduce((v,m)=>fr(v,m),p),p.unstable_sxConfig=Vt({},Zu,c==null?void 0:c.unstable_sxConfig),p.unstable_sx=function(m){return Qu({sx:m,theme:this})},p}const hM=FS("MuiBox",["root"]),pM=dM(),mM=IS({themeId:Dx,defaultTheme:pM,defaultClassName:hM.root,generateClassName:lv.generate});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sh="176",gM=0,Pg=1,vM=2,cv=1,_M=2,ar=3,pr=0,Bn=1,lr=2,Xr=0,_o=1,Lg=2,Dg=3,Ig=4,xM=5,vs=100,yM=101,SM=102,MM=103,EM=104,wM=200,TM=201,AM=202,CM=203,Ad=204,Cd=205,RM=206,bM=207,PM=208,LM=209,DM=210,IM=211,UM=212,NM=213,FM=214,Rd=0,bd=1,Pd=2,So=3,Ld=4,Dd=5,Id=6,Ud=7,Mh=0,OM=1,kM=2,jr=0,BM=1,zM=2,HM=3,VM=4,GM=5,WM=6,XM=7,fv=300,Mo=301,Eo=302,Nd=303,Fd=304,Ju=306,Nu=1e3,ys=1001,Od=1002,Ai=1003,jM=1004,Kl=1005,ki=1006,Vf=1007,Ss=1008,Hi=1009,dv=1010,hv=1011,Ca=1012,Eh=1013,Ms=1014,ur=1015,Fa=1016,wh=1017,Th=1018,Ra=1020,pv=35902,mv=1021,gv=1022,Ti=1023,ba=1026,Pa=1027,vv=1028,Ah=1029,_v=1030,Ch=1031,Rh=1033,Tu=33776,Au=33777,Cu=33778,Ru=33779,kd=35840,Bd=35841,zd=35842,Hd=35843,Vd=36196,Gd=37492,Wd=37496,Xd=37808,jd=37809,$d=37810,qd=37811,Yd=37812,Kd=37813,Zd=37814,Qd=37815,Jd=37816,eh=37817,th=37818,nh=37819,ih=37820,rh=37821,bu=36492,sh=36494,oh=36495,xv=36283,ah=36284,lh=36285,uh=36286,$M=3200,qM=3201,bh=0,YM=1,Wr="",Pn="srgb",wo="srgb-linear",Fu="linear",Rt="srgb",Js=7680,Ug=519,KM=512,ZM=513,QM=514,yv=515,JM=516,eE=517,tE=518,nE=519,Ng=35044,Fg="300 es",cr=2e3,Ou=2001;class Co{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Og=1234567;const ya=Math.PI/180,La=180/Math.PI;function Ro(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function mt(r,e,t){return Math.max(e,Math.min(t,r))}function Ph(r,e){return(r%e+e)%e}function iE(r,e,t,s,o){return s+(r-e)*(o-s)/(t-e)}function rE(r,e,t){return r!==e?(t-r)/(e-r):0}function Sa(r,e,t){return(1-t)*r+t*e}function sE(r,e,t,s){return Sa(r,e,1-Math.exp(-t*s))}function oE(r,e=1){return e-Math.abs(Ph(r,e*2)-e)}function aE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function lE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function uE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function cE(r,e){return r+Math.random()*(e-r)}function fE(r){return r*(.5-Math.random())}function dE(r){r!==void 0&&(Og=r);let e=Og+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hE(r){return r*ya}function pE(r){return r*La}function mE(r){return(r&r-1)===0&&r!==0}function gE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function vE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function _E(r,e,t,s,o){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+s)/2),v=c((e+s)/2),m=l((e-s)/2),_=c((e-s)/2),S=l((s-e)/2),E=c((s-e)/2);switch(o){case"XYX":r.set(f*v,h*m,h*_,f*p);break;case"YZY":r.set(h*_,f*v,h*m,f*p);break;case"ZXZ":r.set(h*m,h*_,f*v,f*p);break;case"XZX":r.set(f*v,h*E,h*S,f*p);break;case"YXY":r.set(h*S,f*v,h*E,f*p);break;case"ZYZ":r.set(h*E,h*S,f*v,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function po(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Gf={DEG2RAD:ya,RAD2DEG:La,generateUUID:Ro,clamp:mt,euclideanModulo:Ph,mapLinear:iE,inverseLerp:rE,lerp:Sa,damp:sE,pingpong:oE,smoothstep:aE,smootherstep:lE,randInt:uE,randFloat:cE,randFloatSpread:fE,seededRandom:dE,degToRad:hE,radToDeg:pE,isPowerOfTwo:mE,ceilPowerOfTwo:gE,floorPowerOfTwo:vE,setQuaternionFromProperEuler:_E,normalize:Fn,denormalize:po};class Tt{constructor(e=0,t=0){Tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,s,o,l,c,f,h,p){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,p)}set(e,t,s,o,l,c,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=s,v[7]=c,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[3],h=s[6],p=s[1],v=s[4],m=s[7],_=s[2],S=s[5],E=s[8],M=o[0],y=o[3],x=o[6],D=o[1],L=o[4],P=o[7],V=o[2],U=o[5],C=o[8];return l[0]=c*M+f*D+h*V,l[3]=c*y+f*L+h*U,l[6]=c*x+f*P+h*C,l[1]=p*M+v*D+m*V,l[4]=p*y+v*L+m*U,l[7]=p*x+v*P+m*C,l[2]=_*M+S*D+E*V,l[5]=_*y+S*L+E*U,l[8]=_*x+S*P+E*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*c*v-t*f*p-s*l*v+s*f*h+o*l*p-o*c*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8],m=v*c-f*p,_=f*h-v*l,S=p*l-c*h,E=t*m+s*_+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=m*M,e[1]=(o*p-v*s)*M,e[2]=(f*s-o*c)*M,e[3]=_*M,e[4]=(v*t-o*h)*M,e[5]=(o*l-f*t)*M,e[6]=S*M,e[7]=(s*h-p*t)*M,e[8]=(c*t-s*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*c+p*f)+c+e,-o*p,o*h,-o*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Wf.makeScale(e,t)),this}rotate(e){return this.premultiply(Wf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wf=new ot;function Sv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Da(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xE(){const r=Da("canvas");return r.style.display="block",r}const kg={};function Pu(r){r in kg||(kg[r]=!0,console.warn(r))}function yE(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function SE(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ME(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Bg=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zg=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function EE(){const r={enabled:!0,workingColorSpace:wo,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Rt&&(o.r=dr(o.r),o.g=dr(o.g),o.b=dr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Rt&&(o.r=xo(o.r),o.g=xo(o.g),o.b=xo(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Wr?Fu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[wo]:{primaries:e,whitePoint:s,transfer:Fu,toXYZ:Bg,fromXYZ:zg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:s,transfer:Rt,toXYZ:Bg,fromXYZ:zg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),r}const Mt=EE();function dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let eo;class wE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{eo===void 0&&(eo=Da("canvas")),eo.width=e.width,eo.height=e.height;const o=eo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=eo}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Da("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=dr(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(dr(t[s]/255)*255):t[s]=dr(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TE=0;class Lh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Xf(o[c].image)):l.push(Xf(o[c]))}else l=Xf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Xf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AE=0;class zn extends Co{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,s=ys,o=ys,l=ki,c=Ss,f=Ti,h=Hi,p=zn.DEFAULT_ANISOTROPY,v=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Ro(),this.name="",this.source=new Lh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nu:e.x=e.x-Math.floor(e.x);break;case ys:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nu:e.y=e.y-Math.floor(e.y);break;case ys:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=fv;zn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,s=0,o=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,p=h[0],v=h[4],m=h[8],_=h[1],S=h[5],E=h[9],M=h[2],y=h[6],x=h[10];if(Math.abs(v-_)<.01&&Math.abs(m-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+_)<.1&&Math.abs(m+M)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,P=(S+1)/2,V=(x+1)/2,U=(v+_)/4,C=(m+M)/4,F=(E+y)/4;return L>P&&L>V?L<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(L),o=U/s,l=C/s):P>V?P<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),s=U/o,l=F/o):V<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),s=C/l,o=F/l),this.set(s,o,l,t),this}let D=Math.sqrt((y-E)*(y-E)+(m-M)*(m-M)+(_-v)*(_-v));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(m-M)/D,this.z=(_-v)/D,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CE extends Co{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth?s.depth:1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const o={width:e,height:t,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const l=new zn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Lh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends CE{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Mv extends zn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RE extends zn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oa{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,f){let h=s[o+0],p=s[o+1],v=s[o+2],m=s[o+3];const _=l[c+0],S=l[c+1],E=l[c+2],M=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=m;return}if(f===1){e[t+0]=_,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(m!==M||h!==_||p!==S||v!==E){let y=1-f;const x=h*_+p*S+v*E+m*M,D=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const V=Math.sqrt(L),U=Math.atan2(V,x*D);y=Math.sin(y*U)/V,f=Math.sin(f*U)/V}const P=f*D;if(h=h*y+_*P,p=p*y+S*P,v=v*y+E*P,m=m*y+M*P,y===1-f){const V=1/Math.sqrt(h*h+p*p+v*v+m*m);h*=V,p*=V,v*=V,m*=V}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=m}static multiplyQuaternionsFlat(e,t,s,o,l,c){const f=s[o],h=s[o+1],p=s[o+2],v=s[o+3],m=l[c],_=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+v*m+h*S-p*_,e[t+1]=h*E+v*_+p*m-f*S,e[t+2]=p*E+v*S+f*_-h*m,e[t+3]=v*E-f*m-h*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(s/2),v=f(o/2),m=f(l/2),_=h(s/2),S=h(o/2),E=h(l/2);switch(c){case"XYZ":this._x=_*v*m+p*S*E,this._y=p*S*m-_*v*E,this._z=p*v*E+_*S*m,this._w=p*v*m-_*S*E;break;case"YXZ":this._x=_*v*m+p*S*E,this._y=p*S*m-_*v*E,this._z=p*v*E-_*S*m,this._w=p*v*m+_*S*E;break;case"ZXY":this._x=_*v*m-p*S*E,this._y=p*S*m+_*v*E,this._z=p*v*E+_*S*m,this._w=p*v*m-_*S*E;break;case"ZYX":this._x=_*v*m-p*S*E,this._y=p*S*m+_*v*E,this._z=p*v*E-_*S*m,this._w=p*v*m+_*S*E;break;case"YZX":this._x=_*v*m+p*S*E,this._y=p*S*m+_*v*E,this._z=p*v*E-_*S*m,this._w=p*v*m-_*S*E;break;case"XZY":this._x=_*v*m-p*S*E,this._y=p*S*m-_*v*E,this._z=p*v*E+_*S*m,this._w=p*v*m+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],v=t[6],m=t[10],_=s+f+m;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(v-h)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(s>f&&s>m){const S=2*Math.sqrt(1+s-f-m);this._w=(v-h)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(f>m){const S=2*Math.sqrt(1+f-s-m);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+m-s-f);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=s*v+c*f+o*p-l*h,this._y=o*v+c*h+l*f-s*p,this._z=l*v+c*p+s*h-o*f,this._w=c*v-s*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=o,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),v=Math.atan2(p,f),m=Math.sin((1-t)*v)/p,_=Math.sin(t*v)/p;return this._w=c*m+this._w*_,this._x=s*m+this._x*_,this._y=o*m+this._y*_,this._z=l*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,s=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*o-f*s),v=2*(f*t-l*o),m=2*(l*s-c*t);return this.x=t+h*p+c*m-f*v,this.y=s+h*v+f*p-l*m,this.z=o+h*m+l*v-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-s*h,this.z=s*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return jf.copy(this).projectOnVector(e),this.sub(jf)}reflect(e){return this.sub(jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jf=new $,Hg=new Oa;class Es{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Si):Si.fromBufferAttribute(l,c),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Zl.copy(s.boundingBox)),Zl.applyMatrix4(e.matrixWorld),this.union(Zl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Ql.subVectors(this.max,fa),to.subVectors(e.a,fa),no.subVectors(e.b,fa),io.subVectors(e.c,fa),Or.subVectors(no,to),kr.subVectors(io,no),us.subVectors(to,io);let t=[0,-Or.z,Or.y,0,-kr.z,kr.y,0,-us.z,us.y,Or.z,0,-Or.x,kr.z,0,-kr.x,us.z,0,-us.x,-Or.y,Or.x,0,-kr.y,kr.x,0,-us.y,us.x,0];return!$f(t,to,no,io,Ql)||(t=[1,0,0,0,1,0,0,0,1],!$f(t,to,no,io,Ql))?!1:(Jl.crossVectors(Or,kr),t=[Jl.x,Jl.y,Jl.z],$f(t,to,no,io,Ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tr=[new $,new $,new $,new $,new $,new $,new $,new $],Si=new $,Zl=new Es,to=new $,no=new $,io=new $,Or=new $,kr=new $,us=new $,fa=new $,Ql=new $,Jl=new $,cs=new $;function $f(r,e,t,s,o){for(let l=0,c=r.length-3;l<=c;l+=3){cs.fromArray(r,l);const f=o.x*Math.abs(cs.x)+o.y*Math.abs(cs.y)+o.z*Math.abs(cs.z),h=e.dot(cs),p=t.dot(cs),v=s.dot(cs);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const bE=new Es,da=new $,qf=new $;class ka{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):bE.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const t=da.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(da,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(qf)),this.expandByPoint(da.copy(e.center).sub(qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nr=new $,Yf=new $,eu=new $,Br=new $,Kf=new $,tu=new $,Zf=new $;class Dh{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Yf.copy(e).add(t).multiplyScalar(.5),eu.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(Yf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(eu),f=Br.dot(this.direction),h=-Br.dot(eu),p=Br.lengthSq(),v=Math.abs(1-c*c);let m,_,S,E;if(v>0)if(m=c*h-f,_=c*f-h,E=l*v,m>=0)if(_>=-E)if(_<=E){const M=1/v;m*=M,_*=M,S=m*(m+c*_+2*f)+_*(c*m+_+2*h)+p}else _=l,m=Math.max(0,-(c*_+f)),S=-m*m+_*(_+2*h)+p;else _=-l,m=Math.max(0,-(c*_+f)),S=-m*m+_*(_+2*h)+p;else _<=-E?(m=Math.max(0,-(-c*l+f)),_=m>0?-l:Math.min(Math.max(-l,-h),l),S=-m*m+_*(_+2*h)+p):_<=E?(m=0,_=Math.min(Math.max(-l,-h),l),S=_*(_+2*h)+p):(m=Math.max(0,-(c*l+f)),_=m>0?l:Math.min(Math.max(-l,-h),l),S=-m*m+_*(_+2*h)+p);else _=c>0?-l:l,m=Math.max(0,-(c*_+f)),S=-m*m+_*(_+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,m),o&&o.copy(Yf).addScaledVector(eu,_),S}intersectSphere(e,t){nr.subVectors(e.center,this.origin);const s=nr.dot(this.direction),o=nr.dot(nr)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=s-c,h=s+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,f,h;const p=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),v>=0?(l=(e.min.y-_.y)*v,c=(e.max.y-_.y)*v):(l=(e.max.y-_.y)*v,c=(e.min.y-_.y)*v),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),m>=0?(f=(e.min.z-_.z)*m,h=(e.max.z-_.z)*m):(f=(e.max.z-_.z)*m,h=(e.min.z-_.z)*m),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,s,o,l){Kf.subVectors(t,e),tu.subVectors(s,e),Zf.crossVectors(Kf,tu);let c=this.direction.dot(Zf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Br.subVectors(this.origin,e);const h=f*this.direction.dot(tu.crossVectors(Br,tu));if(h<0)return null;const p=f*this.direction.dot(Kf.cross(Br));if(p<0||h+p>c)return null;const v=-f*Br.dot(Zf);return v<0?null:this.at(v/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,s,o,l,c,f,h,p,v,m,_,S,E,M,y){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,p,v,m,_,S,E,M,y)}set(e,t,s,o,l,c,f,h,p,v,m,_,S,E,M,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=o,x[1]=l,x[5]=c,x[9]=f,x[13]=h,x[2]=p,x[6]=v,x[10]=m,x[14]=_,x[3]=S,x[7]=E,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/ro.setFromMatrixColumn(e,0).length(),l=1/ro.setFromMatrixColumn(e,1).length(),c=1/ro.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),m=Math.sin(l);if(e.order==="XYZ"){const _=c*v,S=c*m,E=f*v,M=f*m;t[0]=h*v,t[4]=-h*m,t[8]=p,t[1]=S+E*p,t[5]=_-M*p,t[9]=-f*h,t[2]=M-_*p,t[6]=E+S*p,t[10]=c*h}else if(e.order==="YXZ"){const _=h*v,S=h*m,E=p*v,M=p*m;t[0]=_+M*f,t[4]=E*f-S,t[8]=c*p,t[1]=c*m,t[5]=c*v,t[9]=-f,t[2]=S*f-E,t[6]=M+_*f,t[10]=c*h}else if(e.order==="ZXY"){const _=h*v,S=h*m,E=p*v,M=p*m;t[0]=_-M*f,t[4]=-c*m,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*v,t[9]=M-_*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const _=c*v,S=c*m,E=f*v,M=f*m;t[0]=h*v,t[4]=E*p-S,t[8]=_*p+M,t[1]=h*m,t[5]=M*p+_,t[9]=S*p-E,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const _=c*h,S=c*p,E=f*h,M=f*p;t[0]=h*v,t[4]=M-_*m,t[8]=E*m+S,t[1]=m,t[5]=c*v,t[9]=-f*v,t[2]=-p*v,t[6]=S*m+E,t[10]=_-M*m}else if(e.order==="XZY"){const _=c*h,S=c*p,E=f*h,M=f*p;t[0]=h*v,t[4]=-m,t[8]=p*v,t[1]=_*m+M,t[5]=c*v,t[9]=S*m-E,t[2]=E*m-S,t[6]=f*v,t[10]=M*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PE,e,LE)}lookAt(e,t,s){const o=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),zr.crossVectors(s,Jn),zr.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),zr.crossVectors(s,Jn)),zr.normalize(),nu.crossVectors(Jn,zr),o[0]=zr.x,o[4]=nu.x,o[8]=Jn.x,o[1]=zr.y,o[5]=nu.y,o[9]=Jn.y,o[2]=zr.z,o[6]=nu.z,o[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[4],h=s[8],p=s[12],v=s[1],m=s[5],_=s[9],S=s[13],E=s[2],M=s[6],y=s[10],x=s[14],D=s[3],L=s[7],P=s[11],V=s[15],U=o[0],C=o[4],F=o[8],R=o[12],T=o[1],k=o[5],ne=o[9],Z=o[13],se=o[2],ue=o[6],ee=o[10],pe=o[14],H=o[3],ae=o[7],le=o[11],O=o[15];return l[0]=c*U+f*T+h*se+p*H,l[4]=c*C+f*k+h*ue+p*ae,l[8]=c*F+f*ne+h*ee+p*le,l[12]=c*R+f*Z+h*pe+p*O,l[1]=v*U+m*T+_*se+S*H,l[5]=v*C+m*k+_*ue+S*ae,l[9]=v*F+m*ne+_*ee+S*le,l[13]=v*R+m*Z+_*pe+S*O,l[2]=E*U+M*T+y*se+x*H,l[6]=E*C+M*k+y*ue+x*ae,l[10]=E*F+M*ne+y*ee+x*le,l[14]=E*R+M*Z+y*pe+x*O,l[3]=D*U+L*T+P*se+V*H,l[7]=D*C+L*k+P*ue+V*ae,l[11]=D*F+L*ne+P*ee+V*le,l[15]=D*R+L*Z+P*pe+V*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],v=e[2],m=e[6],_=e[10],S=e[14],E=e[3],M=e[7],y=e[11],x=e[15];return E*(+l*h*m-o*p*m-l*f*_+s*p*_+o*f*S-s*h*S)+M*(+t*h*S-t*p*_+l*c*_-o*c*S+o*p*v-l*h*v)+y*(+t*p*m-t*f*S-l*c*m+s*c*S+l*f*v-s*p*v)+x*(-o*f*v-t*h*m+t*f*_+o*c*m-s*c*_+s*h*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8],m=e[9],_=e[10],S=e[11],E=e[12],M=e[13],y=e[14],x=e[15],D=m*y*p-M*_*p+M*h*S-f*y*S-m*h*x+f*_*x,L=E*_*p-v*y*p-E*h*S+c*y*S+v*h*x-c*_*x,P=v*M*p-E*m*p+E*f*S-c*M*S-v*f*x+c*m*x,V=E*m*h-v*M*h-E*f*_+c*M*_+v*f*y-c*m*y,U=t*D+s*L+o*P+l*V;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/U;return e[0]=D*C,e[1]=(M*_*l-m*y*l-M*o*S+s*y*S+m*o*x-s*_*x)*C,e[2]=(f*y*l-M*h*l+M*o*p-s*y*p-f*o*x+s*h*x)*C,e[3]=(m*h*l-f*_*l-m*o*p+s*_*p+f*o*S-s*h*S)*C,e[4]=L*C,e[5]=(v*y*l-E*_*l+E*o*S-t*y*S-v*o*x+t*_*x)*C,e[6]=(E*h*l-c*y*l-E*o*p+t*y*p+c*o*x-t*h*x)*C,e[7]=(c*_*l-v*h*l+v*o*p-t*_*p-c*o*S+t*h*S)*C,e[8]=P*C,e[9]=(E*m*l-v*M*l-E*s*S+t*M*S+v*s*x-t*m*x)*C,e[10]=(c*M*l-E*f*l+E*s*p-t*M*p-c*s*x+t*f*x)*C,e[11]=(v*f*l-c*m*l-v*s*p+t*m*p+c*s*S-t*f*S)*C,e[12]=V*C,e[13]=(v*M*o-E*m*o+E*s*_-t*M*_-v*s*y+t*m*y)*C,e[14]=(E*f*o-c*M*o-E*s*h+t*M*h+c*s*y-t*f*y)*C,e[15]=(c*m*o-v*f*o+v*s*h-t*m*h-c*s*_+t*f*_)*C,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,f=e.y,h=e.z,p=l*c,v=l*f;return this.set(p*c+s,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+s,v*h-o*c,0,p*h-o*f,v*h+o*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,v=c+c,m=f+f,_=l*p,S=l*v,E=l*m,M=c*v,y=c*m,x=f*m,D=h*p,L=h*v,P=h*m,V=s.x,U=s.y,C=s.z;return o[0]=(1-(M+x))*V,o[1]=(S+P)*V,o[2]=(E-L)*V,o[3]=0,o[4]=(S-P)*U,o[5]=(1-(_+x))*U,o[6]=(y+D)*U,o[7]=0,o[8]=(E+L)*C,o[9]=(y-D)*C,o[10]=(1-(_+M))*C,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=ro.set(o[0],o[1],o[2]).length();const c=ro.set(o[4],o[5],o[6]).length(),f=ro.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],Mi.copy(this);const p=1/l,v=1/c,m=1/f;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=v,Mi.elements[5]*=v,Mi.elements[6]*=v,Mi.elements[8]*=m,Mi.elements[9]*=m,Mi.elements[10]*=m,t.setFromRotationMatrix(Mi),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,o,l,c,f=cr){const h=this.elements,p=2*l/(t-e),v=2*l/(s-o),m=(t+e)/(t-e),_=(s+o)/(s-o);let S,E;if(f===cr)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===Ou)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,o,l,c,f=cr){const h=this.elements,p=1/(t-e),v=1/(s-o),m=1/(c-l),_=(t+e)*p,S=(s+o)*v;let E,M;if(f===cr)E=(c+l)*m,M=-2*m;else if(f===Ou)E=l*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*v,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=M,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const ro=new $,Mi=new Pt,PE=new $(0,0,0),LE=new $(1,1,1),zr=new $,nu=new $,Jn=new $,Vg=new Pt,Gg=new Oa;class Ci{constructor(e=0,t=0,s=0,o=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],p=o[5],v=o[9],m=o[2],_=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-m,l),this._z=0);break;case"ZXY":this._x=Math.asin(mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-m,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gg.setFromEuler(this),this.setFromQuaternion(Gg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class Ev{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DE=0;const Wg=new $,so=new Oa,ir=new Pt,iu=new $,ha=new $,IE=new $,UE=new Oa,Xg=new $(1,0,0),jg=new $(0,1,0),$g=new $(0,0,1),qg={type:"added"},NE={type:"removed"},oo={type:"childadded",child:null},Qf={type:"childremoved",child:null};class mn extends Co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new $,t=new Ci,s=new Oa,o=new $(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Pt},normalMatrix:{value:new ot}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ev,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.multiply(so),this}rotateOnWorldAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.premultiply(so),this}rotateX(e){return this.rotateOnAxis(Xg,e)}rotateY(e){return this.rotateOnAxis(jg,e)}rotateZ(e){return this.rotateOnAxis($g,e)}translateOnAxis(e,t){return Wg.copy(e).applyQuaternion(this.quaternion),this.position.add(Wg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xg,e)}translateY(e){return this.translateOnAxis(jg,e)}translateZ(e){return this.translateOnAxis($g,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?iu.copy(e):iu.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(ha,iu,this.up):ir.lookAt(iu,ha,this.up),this.quaternion.setFromRotationMatrix(ir),o&&(ir.extractRotation(o.matrixWorld),so.setFromRotationMatrix(ir),this.quaternion.premultiply(so.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qg),oo.child=e,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(NE),Qf.child=e,this.dispatchEvent(Qf),Qf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qg),oo.child=e,this.dispatchEvent(oo),oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,IE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,UE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?{min:f.boundingBox.min.toArray(),max:f.boundingBox.max.toArray()}:void 0,boundingSphere:f.boundingSphere?{radius:f.boundingSphere.radius,center:f.boundingSphere.center.toArray()}:void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const m=h[p];l(e.shapes,m)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),v=c(e.images),m=c(e.shapes),_=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),m.length>0&&(s.shapes=m),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=o,s;function c(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}mn.DEFAULT_UP=new $(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new $,rr=new $,Jf=new $,sr=new $,ao=new $,lo=new $,Yg=new $,ed=new $,td=new $,nd=new $,id=new Ht,rd=new Ht,sd=new Ht;class wi{constructor(e=new $,t=new $,s=new $){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),Ei.subVectors(e,t),o.cross(Ei);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){Ei.subVectors(o,t),rr.subVectors(s,t),Jf.subVectors(e,t);const c=Ei.dot(Ei),f=Ei.dot(rr),h=Ei.dot(Jf),p=rr.dot(rr),v=rr.dot(Jf),m=c*p-f*f;if(m===0)return l.set(0,0,0),null;const _=1/m,S=(p*h-f*v)*_,E=(c*v-f*h)*_;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,s,o,l,c,f,h){return this.getBarycoord(e,t,s,o,sr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,sr.x),h.addScaledVector(c,sr.y),h.addScaledVector(f,sr.z),h)}static getInterpolatedAttribute(e,t,s,o,l,c){return id.setScalar(0),rd.setScalar(0),sd.setScalar(0),id.fromBufferAttribute(e,t),rd.fromBufferAttribute(e,s),sd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(id,l.x),c.addScaledVector(rd,l.y),c.addScaledVector(sd,l.z),c}static isFrontFacing(e,t,s,o){return Ei.subVectors(s,t),rr.subVectors(e,t),Ei.cross(rr).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Ei.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return wi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let c,f;ao.subVectors(o,s),lo.subVectors(l,s),ed.subVectors(e,s);const h=ao.dot(ed),p=lo.dot(ed);if(h<=0&&p<=0)return t.copy(s);td.subVectors(e,o);const v=ao.dot(td),m=lo.dot(td);if(v>=0&&m<=v)return t.copy(o);const _=h*m-v*p;if(_<=0&&h>=0&&v<=0)return c=h/(h-v),t.copy(s).addScaledVector(ao,c);nd.subVectors(e,l);const S=ao.dot(nd),E=lo.dot(nd);if(E>=0&&S<=E)return t.copy(l);const M=S*p-h*E;if(M<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(lo,f);const y=v*E-S*m;if(y<=0&&m-v>=0&&S-E>=0)return Yg.subVectors(l,o),f=(m-v)/(m-v+(S-E)),t.copy(o).addScaledVector(Yg,f);const x=1/(y+M+_);return c=M*x,f=_*x,t.copy(s).addScaledVector(ao,c).addScaledVector(lo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},ru={h:0,s:0,l:0};function od(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class at{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Mt.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=Mt.workingColorSpace){if(e=Ph(e,1),t=mt(t,0,1),s=mt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=od(c,l,e+1/3),this.g=od(c,l,e),this.b=od(c,l,e-1/3)}return Mt.toWorkingColorSpace(this,o),this}setStyle(e,t=Pn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pn){const s=wv[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return Mt.fromWorkingColorSpace(Rn.copy(this),e),Math.round(mt(Rn.r*255,0,255))*65536+Math.round(mt(Rn.g*255,0,255))*256+Math.round(mt(Rn.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(Rn.copy(this),t);const s=Rn.r,o=Rn.g,l=Rn.b,c=Math.max(s,o,l),f=Math.min(s,o,l);let h,p;const v=(f+c)/2;if(f===c)h=0,p=0;else{const m=c-f;switch(p=v<=.5?m/(c+f):m/(2-c-f),c){case s:h=(o-l)/m+(o<l?6:0);break;case o:h=(l-s)/m+2;break;case l:h=(s-o)/m+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Pn){Mt.fromWorkingColorSpace(Rn.copy(this),e);const t=Rn.r,s=Rn.g,o=Rn.b;return e!==Pn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(ru);const s=Sa(Hr.h,ru.h,t),o=Sa(Hr.s,ru.s,t),l=Sa(Hr.l,ru.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new at;at.NAMES=wv;let FE=0;class Vi extends Co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=_o,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Cd,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(s.blending=this.blending),this.side!==pr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ad&&(s.blendSrc=this.blendSrc),this.blendDst!==Cd&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ug&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tv extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new $,su=new Tt;let OE=0;class zi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Ng,this.updateRanges=[],this.gpuType=ur,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)su.fromBufferAttribute(this,t),su.applyMatrix3(e),this.setXY(t,su.x,su.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=po(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Fn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=po(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=po(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=po(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=po(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),s=Fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),s=Fn(s,this.array),o=Fn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),s=Fn(s,this.array),o=Fn(o,this.array),l=Fn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ng&&(e.usage=this.usage),e}}class Av extends zi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Cv extends zi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class kn extends zi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let kE=0;const fi=new Pt,ad=new mn,uo=new $,ei=new Es,pa=new Es,pn=new $;class Ri extends Co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sv(e)?Cv:Av)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ot().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,s){return fi.makeTranslation(e,t,s),this.applyMatrix4(fi),this}scale(e,t,s){return fi.makeScale(e,t,s),this.applyMatrix4(fi),this}lookAt(e){return ad.lookAt(e),ad.updateMatrix(),this.applyMatrix4(ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new kn(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];pa.setFromBufferAttribute(f),this.morphTargetsRelative?(pn.addVectors(ei.min,pa.min),ei.expandByPoint(pn),pn.addVectors(ei.max,pa.max),ei.expandByPoint(pn)):(ei.expandByPoint(pa.min),ei.expandByPoint(pa.max))}ei.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)pn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(pn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)pn.fromBufferAttribute(f,p),h&&(uo.fromBufferAttribute(e,p),pn.add(uo)),o=Math.max(o,s.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let F=0;F<s.count;F++)f[F]=new $,h[F]=new $;const p=new $,v=new $,m=new $,_=new Tt,S=new Tt,E=new Tt,M=new $,y=new $;function x(F,R,T){p.fromBufferAttribute(s,F),v.fromBufferAttribute(s,R),m.fromBufferAttribute(s,T),_.fromBufferAttribute(l,F),S.fromBufferAttribute(l,R),E.fromBufferAttribute(l,T),v.sub(p),m.sub(p),S.sub(_),E.sub(_);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(M.copy(v).multiplyScalar(E.y).addScaledVector(m,-S.y).multiplyScalar(k),y.copy(m).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(k),f[F].add(M),f[R].add(M),f[T].add(M),h[F].add(y),h[R].add(y),h[T].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let F=0,R=D.length;F<R;++F){const T=D[F],k=T.start,ne=T.count;for(let Z=k,se=k+ne;Z<se;Z+=3)x(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const L=new $,P=new $,V=new $,U=new $;function C(F){V.fromBufferAttribute(o,F),U.copy(V);const R=f[F];L.copy(R),L.sub(V.multiplyScalar(V.dot(R))).normalize(),P.crossVectors(U,R);const k=P.dot(h[F])<0?-1:1;c.setXYZW(F,L.x,L.y,L.z,k)}for(let F=0,R=D.length;F<R;++F){const T=D[F],k=T.start,ne=T.count;for(let Z=k,se=k+ne;Z<se;Z+=3)C(e.getX(Z+0)),C(e.getX(Z+1)),C(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new zi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const o=new $,l=new $,c=new $,f=new $,h=new $,p=new $,v=new $,m=new $;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),M=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),c.fromBufferAttribute(t,y),v.subVectors(c,l),m.subVectors(o,l),v.cross(m),f.fromBufferAttribute(s,E),h.fromBufferAttribute(s,M),p.fromBufferAttribute(s,y),f.add(v),h.add(v),p.add(v),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(M,h.x,h.y,h.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),v.subVectors(c,l),m.subVectors(o,l),v.cross(m),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,m=f.normalized,_=new p.constructor(h.length*v);let S=0,E=0;for(let M=0,y=h.length;M<y;M++){f.isInterleavedBufferAttribute?S=h[M]*f.data.stride+f.offset:S=h[M]*v;for(let x=0;x<v;x++)_[E++]=p[S++]}return new zi(_,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ri,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,m=p.length;v<m;v++){const _=p[v],S=e(_,s);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let m=0,_=p.length;m<_;m++){const S=p[m];v.push(S.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],m=l[p];for(let _=0,S=m.length;_<S;_++)v.push(m[_].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,v=c.length;p<v;p++){const m=c[p];this.addGroup(m.start,m.count,m.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kg=new Pt,fs=new Dh,ou=new ka,Zg=new $,au=new $,lu=new $,uu=new $,ld=new $,cu=new $,Qg=new $,fu=new $;class ii extends mn{constructor(e=new Ri,t=new Tv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){cu.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],m=l[h];v!==0&&(ld.fromBufferAttribute(m,e),c?cu.addScaledVector(ld,v):cu.addScaledVector(ld.sub(t),v))}t.add(cu)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ou.copy(s.boundingSphere),ou.applyMatrix4(l),fs.copy(e.ray).recast(e.near),!(ou.containsPoint(fs.origin)===!1&&(fs.intersectSphere(ou,Zg)===null||fs.origin.distanceToSquared(Zg)>(e.far-e.near)**2))&&(Kg.copy(l).invert(),fs.copy(e.ray).applyMatrix4(Kg),!(s.boundingBox!==null&&fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,s){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,m=l.attributes.normal,_=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=_.length;E<M;E++){const y=_[E],x=c[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let P=D,V=L;P<V;P+=3){const U=f.getX(P),C=f.getX(P+1),F=f.getX(P+2);o=du(this,x,e,s,p,v,m,U,C,F),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let y=E,x=M;y<x;y+=3){const D=f.getX(y),L=f.getX(y+1),P=f.getX(y+2);o=du(this,c,e,s,p,v,m,D,L,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,M=_.length;E<M;E++){const y=_[E],x=c[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let P=D,V=L;P<V;P+=3){const U=P,C=P+1,F=P+2;o=du(this,x,e,s,p,v,m,U,C,F),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(h.count,S.start+S.count);for(let y=E,x=M;y<x;y+=3){const D=y,L=y+1,P=y+2;o=du(this,c,e,s,p,v,m,D,L,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function BE(r,e,t,s,o,l,c,f){let h;if(e.side===Bn?h=s.intersectTriangle(c,l,o,!0,f):h=s.intersectTriangle(o,l,c,e.side===pr,f),h===null)return null;fu.copy(f),fu.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(fu);return p<t.near||p>t.far?null:{distance:p,point:fu.clone(),object:r}}function du(r,e,t,s,o,l,c,f,h,p){r.getVertexPosition(f,au),r.getVertexPosition(h,lu),r.getVertexPosition(p,uu);const v=BE(r,e,t,s,au,lu,uu,Qg);if(v){const m=new $;wi.getBarycoord(Qg,au,lu,uu,m),o&&(v.uv=wi.getInterpolatedAttribute(o,f,h,p,m,new Tt)),l&&(v.uv1=wi.getInterpolatedAttribute(l,f,h,p,m,new Tt)),c&&(v.normal=wi.getInterpolatedAttribute(c,f,h,p,m,new $),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:f,b:h,c:p,normal:new $,materialIndex:0};wi.getNormal(au,lu,uu,_.normal),v.face=_,v.barycoord=m}return v}class bo extends Ri{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],v=[],m=[];let _=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,o,c,2),E("x","z","y",1,-1,e,s,-t,o,c,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new kn(p,3)),this.setAttribute("normal",new kn(v,3)),this.setAttribute("uv",new kn(m,2));function E(M,y,x,D,L,P,V,U,C,F,R){const T=P/C,k=V/F,ne=P/2,Z=V/2,se=U/2,ue=C+1,ee=F+1;let pe=0,H=0;const ae=new $;for(let le=0;le<ee;le++){const O=le*k-Z;for(let re=0;re<ue;re++){const Le=re*T-ne;ae[M]=Le*D,ae[y]=O*L,ae[x]=se,p.push(ae.x,ae.y,ae.z),ae[M]=0,ae[y]=0,ae[x]=U>0?1:-1,v.push(ae.x,ae.y,ae.z),m.push(re/C),m.push(1-le/F),pe+=1}}for(let le=0;le<F;le++)for(let O=0;O<C;O++){const re=_+O+ue*le,Le=_+O+ue*(le+1),J=_+(O+1)+ue*(le+1),he=_+(O+1)+ue*le;h.push(re,Le,he),h.push(Le,J,he),H+=6}f.addGroup(S,H,R),S+=H,_+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function On(r){const e={};for(let t=0;t<r.length;t++){const s=To(r[t]);for(const o in s)e[o]=s[o]}return e}function zE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Rv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const ku={clone:To,merge:On};var HE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HE,this.fragmentShader=VE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=zE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class bv extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=cr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vr=new $,Jg=new Tt,e0=new Tt;class ti extends bv{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=La*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return La*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,Jg,e0),t.subVectors(e0,Jg)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ya*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*s/p,o*=c.width/h,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const co=-90,fo=1;class GE extends mn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ti(co,fo,e,t);o.layers=this.layers,this.add(o);const l=new ti(co,fo,e,t);l.layers=this.layers,this.add(l);const c=new ti(co,fo,e,t);c.layers=this.layers,this.add(c);const f=new ti(co,fo,e,t);f.layers=this.layers,this.add(f);const h=new ti(co,fo,e,t);h.layers=this.layers,this.add(h);const p=new ti(co,fo,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===cr)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ou)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,v]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,c),e.setRenderTarget(s,2,o),e.render(t,f),e.setRenderTarget(s,3,o),e.render(t,h),e.setRenderTarget(s,4,o),e.render(t,p),s.texture.generateMipmaps=M,e.setRenderTarget(s,5,o),e.render(t,v),e.setRenderTarget(m,_,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Pv extends zn{constructor(e=[],t=Mo,s,o,l,c,f,h,p,v){super(e,t,s,o,l,c,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WE extends $r{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new Pv(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ki}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new bo(5,5,5),l=new Gi({name:"CubemapFromEquirect",uniforms:To(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Bn,blending:Xr});l.uniforms.tEquirect.value=t;const c=new ii(o,l),f=t.minFilter;return t.minFilter===Ss&&(t.minFilter=ki),new GE(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}}class ga extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XE={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,s),x=this._getHandJoint(p,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],m=p.joints["thumb-tip"],_=v.position.distanceTo(m.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(XE)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new ga;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class jE extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const cd=new $,$E=new $,qE=new ot;class Gr{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=cd.subVectors(s,t).cross($E.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(cd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||qE.getNormalMatrix(e),o=this.coplanarPoint(cd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new ka,hu=new $;class Ih{constructor(e=new Gr,t=new Gr,s=new Gr,o=new Gr,l=new Gr,c=new Gr){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=cr){const s=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],h=o[3],p=o[4],v=o[5],m=o[6],_=o[7],S=o[8],E=o[9],M=o[10],y=o[11],x=o[12],D=o[13],L=o[14],P=o[15];if(s[0].setComponents(h-l,_-p,y-S,P-x).normalize(),s[1].setComponents(h+l,_+p,y+S,P+x).normalize(),s[2].setComponents(h+c,_+v,y+E,P+D).normalize(),s[3].setComponents(h-c,_-v,y-E,P-D).normalize(),s[4].setComponents(h-f,_-m,y-M,P-L).normalize(),t===cr)s[5].setComponents(h+f,_+m,y+M,P+L).normalize();else if(t===Ou)s[5].setComponents(f,m,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(hu.x=o.normal.x>0?e.max.x:e.min.x,hu.y=o.normal.y>0?e.max.y:e.min.y,hu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(hu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lu extends Vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bu=new $,zu=new $,t0=new Pt,ma=new Dh,pu=new ka,fd=new $,n0=new $;class YE extends mn{constructor(e=new Ri,t=new Lu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)Bu.fromBufferAttribute(t,o-1),zu.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=Bu.distanceTo(zu);e.setAttribute("lineDistance",new kn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),pu.copy(s.boundingSphere),pu.applyMatrix4(o),pu.radius+=l,e.ray.intersectsSphere(pu)===!1)return;t0.copy(o).invert(),ma.copy(e.ray).applyMatrix4(t0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,v=s.index,_=s.attributes.position;if(v!==null){const S=Math.max(0,c.start),E=Math.min(v.count,c.start+c.count);for(let M=S,y=E-1;M<y;M+=p){const x=v.getX(M),D=v.getX(M+1),L=mu(this,e,ma,h,x,D,M);L&&t.push(L)}if(this.isLineLoop){const M=v.getX(E-1),y=v.getX(S),x=mu(this,e,ma,h,M,y,E-1);x&&t.push(x)}}else{const S=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let M=S,y=E-1;M<y;M+=p){const x=mu(this,e,ma,h,M,M+1,M);x&&t.push(x)}if(this.isLineLoop){const M=mu(this,e,ma,h,E-1,S,E-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function mu(r,e,t,s,o,l,c){const f=r.geometry.attributes.position;if(Bu.fromBufferAttribute(f,o),zu.fromBufferAttribute(f,l),t.distanceSqToSegment(Bu,zu,fd,n0)>s)return;fd.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(fd);if(!(p<e.near||p>e.far))return{distance:p,point:n0.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}const i0=new $,r0=new $;class s0 extends YE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)i0.fromBufferAttribute(t,o),r0.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+i0.distanceTo(r0);e.setAttribute("lineDistance",new kn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class va extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const o0=new Pt,ch=new Dh,gu=new ka,vu=new $;class dd extends mn{constructor(e=new Ri,t=new va){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),gu.copy(s.boundingSphere),gu.applyMatrix4(o),gu.radius+=l,e.ray.intersectsSphere(gu)===!1)return;o0.copy(o).invert(),ch.copy(e.ray).applyMatrix4(o0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=s.index,m=s.attributes.position;if(p!==null){const _=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let E=_,M=S;E<M;E++){const y=p.getX(E);vu.fromBufferAttribute(m,y),a0(vu,y,h,o,e,t,this)}}else{const _=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let E=_,M=S;E<M;E++)vu.fromBufferAttribute(m,E),a0(vu,E,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function a0(r,e,t,s,o,l,c){const f=ch.distanceSqToPoint(r);if(f<t){const h=new $;ch.closestPointToPoint(r,h),h.applyMatrix4(s);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Lv extends zn{constructor(e,t,s=Ms,o,l,c,f=Ai,h=Ai,p,v=ba){if(v!==ba&&v!==Pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,l,c,f,h,v,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ba extends Ri{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(s),h=Math.floor(o),p=f+1,v=h+1,m=e/f,_=t/h,S=[],E=[],M=[],y=[];for(let x=0;x<v;x++){const D=x*_-c;for(let L=0;L<p;L++){const P=L*m-l;E.push(P,-D,0),M.push(0,0,1),y.push(L/f),y.push(1-x/h)}}for(let x=0;x<h;x++)for(let D=0;D<f;D++){const L=D+p*x,P=D+p*(x+1),V=D+1+p*(x+1),U=D+1+p*x;S.push(L,P,U),S.push(P,V,U)}this.setIndex(S),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(M,3)),this.setAttribute("uv",new kn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.widthSegments,e.heightSegments)}}class l0 extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class KE extends Vi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new at(16777215),this.specular=new at(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ZE extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$M,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QE extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hu={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class JE{constructor(e,t,s){const o=this;let l=!1,c=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(v){f++,l===!1&&o.onStart!==void 0&&o.onStart(v,c,f),l=!0},this.itemEnd=function(v){c++,o.onProgress!==void 0&&o.onProgress(v,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return h?h(v):v},this.setURLModifier=function(v){return h=v,this},this.addHandler=function(v,m){return p.push(v,m),this},this.removeHandler=function(v){const m=p.indexOf(v);return m!==-1&&p.splice(m,2),this},this.getHandler=function(v){for(let m=0,_=p.length;m<_;m+=2){const S=p[m],E=p[m+1];if(S.global&&(S.lastIndex=0),S.test(v))return E}return null}}}const e1=new JE;class za{constructor(e){this.manager=e!==void 0?e:e1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}za.DEFAULT_MATERIAL_NAME="__DEFAULT";const or={};class t1 extends Error{constructor(e,t){super(e),this.response=t}}class n1 extends za{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,s,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Hu.get(e);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(or[e]!==void 0){or[e].push({onLoad:t,onProgress:s,onError:o});return}or[e]=[],or[e].push({onLoad:t,onProgress:s,onError:o});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),f=this.mimeType,h=this.responseType;fetch(c).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const v=or[e],m=p.body.getReader(),_=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),S=_?parseInt(_):0,E=S!==0;let M=0;const y=new ReadableStream({start(x){D();function D(){m.read().then(({done:L,value:P})=>{if(L)x.close();else{M+=P.byteLength;const V=new ProgressEvent("progress",{lengthComputable:E,loaded:M,total:S});for(let U=0,C=v.length;U<C;U++){const F=v[U];F.onProgress&&F.onProgress(V)}x.enqueue(P),D()}},L=>{x.error(L)})}}});return new Response(y)}else throw new t1(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(h){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(v=>new DOMParser().parseFromString(v,f));case"json":return p.json();default:if(f==="")return p.text();{const m=/charset="?([^;"\s]*)"?/i.exec(f),_=m&&m[1]?m[1].toLowerCase():void 0,S=new TextDecoder(_);return p.arrayBuffer().then(E=>S.decode(E))}}}).then(p=>{Hu.add(e,p);const v=or[e];delete or[e];for(let m=0,_=v.length;m<_;m++){const S=v[m];S.onLoad&&S.onLoad(p)}}).catch(p=>{const v=or[e];if(v===void 0)throw this.manager.itemError(e),p;delete or[e];for(let m=0,_=v.length;m<_;m++){const S=v[m];S.onError&&S.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class i1 extends za{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Hu.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const f=Da("img");function h(){v(),Hu.add(e,this),t&&t(this),l.manager.itemEnd(e)}function p(m){v(),o&&o(m),l.manager.itemError(e),l.manager.itemEnd(e)}function v(){f.removeEventListener("load",h,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class hd extends za{constructor(e){super(e)}load(e,t,s,o){const l=new zn,c=new i1(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}}class Dv extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const pd=new Pt,u0=new $,c0=new $;class r1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=Hi,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ih,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;u0.setFromMatrixPosition(e.matrixWorld),t.position.copy(u0),c0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(c0),t.updateMatrixWorld(),pd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Iv extends bv{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class s1 extends r1{constructor(){super(new Iv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class o1 extends Dv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new s1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class a1 extends Dv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class l1 extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function f0(r,e,t,s){const o=u1(s);switch(t){case mv:return r*e;case vv:return r*e/o.components*o.byteLength;case Ah:return r*e/o.components*o.byteLength;case _v:return r*e*2/o.components*o.byteLength;case Ch:return r*e*2/o.components*o.byteLength;case gv:return r*e*3/o.components*o.byteLength;case Ti:return r*e*4/o.components*o.byteLength;case Rh:return r*e*4/o.components*o.byteLength;case Tu:case Au:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Cu:case Ru:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Hd:return Math.max(r,16)*Math.max(e,8)/4;case kd:case zd:return Math.max(r,8)*Math.max(e,8)/2;case Vd:case Gd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Wd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case $d:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case qd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case eh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case th:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case nh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ih:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case rh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case bu:case sh:case oh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case xv:case ah:return Math.ceil(r/4)*Math.ceil(e/4)*8;case lh:case uh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function u1(r){switch(r){case Hi:case dv:return{byteLength:1,components:1};case Ca:case hv:case Fa:return{byteLength:2,components:1};case wh:case Th:return{byteLength:2,components:4};case Ms:case Eh:case ur:return{byteLength:4,components:1};case pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uv(){let r=null,e=!1,t=null,s=null;function o(l,c){t(l,c),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function c1(r){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,m=p.byteLength,_=r.createBuffer();r.bindBuffer(h,_),r.bufferData(h,p,v),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:m}}function s(f,h,p){const v=h.array,m=h.updateRanges;if(r.bindBuffer(p,f),m.length===0)r.bufferSubData(p,0,v);else{m.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<m.length;S++){const E=m[_],M=m[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++_,m[_]=M)}m.length=_+1;for(let S=0,E=m.length;S<E;S++){const M=m[S];r.bufferSubData(p,M.start*v.BYTES_PER_ELEMENT,v,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:c}}var f1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d1=`#ifdef USE_ALPHAHASH
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
#endif`,h1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v1=`#ifdef USE_AOMAP
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
#endif`,_1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x1=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,y1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w1=`#ifdef USE_IRIDESCENCE
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
#endif`,T1=`#ifdef USE_BUMPMAP
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
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,I1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,U1=`#define PI 3.141592653589793
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
} // validated`,N1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F1=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,O1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H1="gl_FragColor = linearToOutputTexel( gl_FragColor );",V1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G1=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,W1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X1=`#ifdef USE_ENVMAP
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
#endif`,j1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$1=`#ifdef USE_ENVMAP
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
#endif`,q1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q1=`#ifdef USE_GRADIENTMAP
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
}`,J1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ew=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nw=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,iw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,rw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ow=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,uw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,cw=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_w=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yw=`#if defined( USE_POINTS_UV )
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
#endif`,Sw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ew=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ww=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Aw=`#ifdef USE_MORPHTARGETS
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
#endif`,Cw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iw=`#ifdef USE_NORMALMAP
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
#endif`,Uw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ow=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ww=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$w=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,qw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Kw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zw=`#ifdef USE_SKINNING
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
#endif`,Qw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jw=`#ifdef USE_SKINNING
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
#endif`,eT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rT=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sT=`#ifdef USE_TRANSMISSION
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
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fT=`uniform sampler2D t2D;
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
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`#include <common>
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
}`,vT=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_T=`#define DISTANCE
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
}`,xT=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ST=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`uniform float scale;
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
}`,ET=`uniform vec3 diffuse;
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
}`,wT=`#include <common>
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
}`,TT=`uniform vec3 diffuse;
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
}`,AT=`#define LAMBERT
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
}`,CT=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
}`,RT=`#define MATCAP
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
}`,bT=`#define MATCAP
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
}`,PT=`#define NORMAL
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
}`,LT=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DT=`#define PHONG
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
}`,IT=`#define PHONG
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
#include <alphahash_pars_fragment>
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
}`,UT=`#define STANDARD
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
}`,NT=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,FT=`#define TOON
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
}`,OT=`#define TOON
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
}`,kT=`uniform float size;
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
}`,BT=`uniform vec3 diffuse;
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
}`,zT=`#include <common>
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
}`,HT=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VT=`uniform float rotation;
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
}`,GT=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:f1,alphahash_pars_fragment:d1,alphamap_fragment:h1,alphamap_pars_fragment:p1,alphatest_fragment:m1,alphatest_pars_fragment:g1,aomap_fragment:v1,aomap_pars_fragment:_1,batching_pars_vertex:x1,batching_vertex:y1,begin_vertex:S1,beginnormal_vertex:M1,bsdfs:E1,iridescence_fragment:w1,bumpmap_pars_fragment:T1,clipping_planes_fragment:A1,clipping_planes_pars_fragment:C1,clipping_planes_pars_vertex:R1,clipping_planes_vertex:b1,color_fragment:P1,color_pars_fragment:L1,color_pars_vertex:D1,color_vertex:I1,common:U1,cube_uv_reflection_fragment:N1,defaultnormal_vertex:F1,displacementmap_pars_vertex:O1,displacementmap_vertex:k1,emissivemap_fragment:B1,emissivemap_pars_fragment:z1,colorspace_fragment:H1,colorspace_pars_fragment:V1,envmap_fragment:G1,envmap_common_pars_fragment:W1,envmap_pars_fragment:X1,envmap_pars_vertex:j1,envmap_physical_pars_fragment:iw,envmap_vertex:$1,fog_vertex:q1,fog_pars_vertex:Y1,fog_fragment:K1,fog_pars_fragment:Z1,gradientmap_pars_fragment:Q1,lightmap_pars_fragment:J1,lights_lambert_fragment:ew,lights_lambert_pars_fragment:tw,lights_pars_begin:nw,lights_toon_fragment:rw,lights_toon_pars_fragment:sw,lights_phong_fragment:ow,lights_phong_pars_fragment:aw,lights_physical_fragment:lw,lights_physical_pars_fragment:uw,lights_fragment_begin:cw,lights_fragment_maps:fw,lights_fragment_end:dw,logdepthbuf_fragment:hw,logdepthbuf_pars_fragment:pw,logdepthbuf_pars_vertex:mw,logdepthbuf_vertex:gw,map_fragment:vw,map_pars_fragment:_w,map_particle_fragment:xw,map_particle_pars_fragment:yw,metalnessmap_fragment:Sw,metalnessmap_pars_fragment:Mw,morphinstance_vertex:Ew,morphcolor_vertex:ww,morphnormal_vertex:Tw,morphtarget_pars_vertex:Aw,morphtarget_vertex:Cw,normal_fragment_begin:Rw,normal_fragment_maps:bw,normal_pars_fragment:Pw,normal_pars_vertex:Lw,normal_vertex:Dw,normalmap_pars_fragment:Iw,clearcoat_normal_fragment_begin:Uw,clearcoat_normal_fragment_maps:Nw,clearcoat_pars_fragment:Fw,iridescence_pars_fragment:Ow,opaque_fragment:kw,packing:Bw,premultiplied_alpha_fragment:zw,project_vertex:Hw,dithering_fragment:Vw,dithering_pars_fragment:Gw,roughnessmap_fragment:Ww,roughnessmap_pars_fragment:Xw,shadowmap_pars_fragment:jw,shadowmap_pars_vertex:$w,shadowmap_vertex:qw,shadowmask_pars_fragment:Yw,skinbase_vertex:Kw,skinning_pars_vertex:Zw,skinning_vertex:Qw,skinnormal_vertex:Jw,specularmap_fragment:eT,specularmap_pars_fragment:tT,tonemapping_fragment:nT,tonemapping_pars_fragment:iT,transmission_fragment:rT,transmission_pars_fragment:sT,uv_pars_fragment:oT,uv_pars_vertex:aT,uv_vertex:lT,worldpos_vertex:uT,background_vert:cT,background_frag:fT,backgroundCube_vert:dT,backgroundCube_frag:hT,cube_vert:pT,cube_frag:mT,depth_vert:gT,depth_frag:vT,distanceRGBA_vert:_T,distanceRGBA_frag:xT,equirect_vert:yT,equirect_frag:ST,linedashed_vert:MT,linedashed_frag:ET,meshbasic_vert:wT,meshbasic_frag:TT,meshlambert_vert:AT,meshlambert_frag:CT,meshmatcap_vert:RT,meshmatcap_frag:bT,meshnormal_vert:PT,meshnormal_frag:LT,meshphong_vert:DT,meshphong_frag:IT,meshphysical_vert:UT,meshphysical_frag:NT,meshtoon_vert:FT,meshtoon_frag:OT,points_vert:kT,points_frag:BT,shadow_vert:zT,shadow_frag:HT,sprite_vert:VT,sprite_frag:GT},Te={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Oi={basic:{uniforms:On([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:On([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new at(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:On([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:On([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:On([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new at(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:On([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:On([Te.points,Te.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:On([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:On([Te.common,Te.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:On([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:On([Te.sprite,Te.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:On([Te.common,Te.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:On([Te.lights,Te.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Oi.physical={uniforms:On([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const _u={r:0,b:0,g:0},hs=new Ci,WT=new Pt;function XT(r,e,t,s,o,l,c){const f=new at(0);let h=l===!0?0:1,p,v,m=null,_=0,S=null;function E(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function M(L){let P=!1;const V=E(L);V===null?x(f,h):V&&V.isColor&&(x(V,1),P=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?s.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,P){const V=E(P);V&&(V.isCubeTexture||V.mapping===Ju)?(v===void 0&&(v=new ii(new bo(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:To(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(U,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),hs.copy(P.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),v.material.uniforms.envMap.value=V,v.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(WT.makeRotationFromEuler(hs)),v.material.toneMapped=Mt.getTransfer(V.colorSpace)!==Rt,(m!==V||_!==V.version||S!==r.toneMapping)&&(v.material.needsUpdate=!0,m=V,_=V.version,S=r.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new ii(new Ba(2,2),new Gi({name:"BackgroundMaterial",uniforms:To(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Mt.getTransfer(V.colorSpace)!==Rt,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(m!==V||_!==V.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,m=V,_=V.version,S=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,P){L.getRGB(_u,Rv(r)),s.buffers.color.setClear(_u.r,_u.g,_u.b,P,c)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,P=1){f.set(L),h=P,x(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,x(f,h)},render:M,addToRenderList:y,dispose:D}}function jT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=_(null);let l=o,c=!1;function f(T,k,ne,Z,se){let ue=!1;const ee=m(Z,ne,k);l!==ee&&(l=ee,p(l.object)),ue=S(T,Z,ne,se),ue&&E(T,Z,ne,se),se!==null&&e.update(se,r.ELEMENT_ARRAY_BUFFER),(ue||c)&&(c=!1,P(T,k,ne,Z),se!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function h(){return r.createVertexArray()}function p(T){return r.bindVertexArray(T)}function v(T){return r.deleteVertexArray(T)}function m(T,k,ne){const Z=ne.wireframe===!0;let se=s[T.id];se===void 0&&(se={},s[T.id]=se);let ue=se[k.id];ue===void 0&&(ue={},se[k.id]=ue);let ee=ue[Z];return ee===void 0&&(ee=_(h()),ue[Z]=ee),ee}function _(T){const k=[],ne=[],Z=[];for(let se=0;se<t;se++)k[se]=0,ne[se]=0,Z[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ne,attributeDivisors:Z,object:T,attributes:{},index:null}}function S(T,k,ne,Z){const se=l.attributes,ue=k.attributes;let ee=0;const pe=ne.getAttributes();for(const H in pe)if(pe[H].location>=0){const le=se[H];let O=ue[H];if(O===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(O=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(O=T.instanceColor)),le===void 0||le.attribute!==O||O&&le.data!==O.data)return!0;ee++}return l.attributesNum!==ee||l.index!==Z}function E(T,k,ne,Z){const se={},ue=k.attributes;let ee=0;const pe=ne.getAttributes();for(const H in pe)if(pe[H].location>=0){let le=ue[H];le===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(le=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(le=T.instanceColor));const O={};O.attribute=le,le&&le.data&&(O.data=le.data),se[H]=O,ee++}l.attributes=se,l.attributesNum=ee,l.index=Z}function M(){const T=l.newAttributes;for(let k=0,ne=T.length;k<ne;k++)T[k]=0}function y(T){x(T,0)}function x(T,k){const ne=l.newAttributes,Z=l.enabledAttributes,se=l.attributeDivisors;ne[T]=1,Z[T]===0&&(r.enableVertexAttribArray(T),Z[T]=1),se[T]!==k&&(r.vertexAttribDivisor(T,k),se[T]=k)}function D(){const T=l.newAttributes,k=l.enabledAttributes;for(let ne=0,Z=k.length;ne<Z;ne++)k[ne]!==T[ne]&&(r.disableVertexAttribArray(ne),k[ne]=0)}function L(T,k,ne,Z,se,ue,ee){ee===!0?r.vertexAttribIPointer(T,k,ne,se,ue):r.vertexAttribPointer(T,k,ne,Z,se,ue)}function P(T,k,ne,Z){M();const se=Z.attributes,ue=ne.getAttributes(),ee=k.defaultAttributeValues;for(const pe in ue){const H=ue[pe];if(H.location>=0){let ae=se[pe];if(ae===void 0&&(pe==="instanceMatrix"&&T.instanceMatrix&&(ae=T.instanceMatrix),pe==="instanceColor"&&T.instanceColor&&(ae=T.instanceColor)),ae!==void 0){const le=ae.normalized,O=ae.itemSize,re=e.get(ae);if(re===void 0)continue;const Le=re.buffer,J=re.type,he=re.bytesPerElement,Me=J===r.INT||J===r.UNSIGNED_INT||ae.gpuType===Eh;if(ae.isInterleavedBufferAttribute){const _e=ae.data,we=_e.stride,Xe=ae.offset;if(_e.isInstancedInterleavedBuffer){for(let Ve=0;Ve<H.locationSize;Ve++)x(H.location+Ve,_e.meshPerAttribute);T.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ve=0;Ve<H.locationSize;Ve++)y(H.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let Ve=0;Ve<H.locationSize;Ve++)L(H.location+Ve,O/H.locationSize,J,le,we*he,(Xe+O/H.locationSize*Ve)*he,Me)}else{if(ae.isInstancedBufferAttribute){for(let _e=0;_e<H.locationSize;_e++)x(H.location+_e,ae.meshPerAttribute);T.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let _e=0;_e<H.locationSize;_e++)y(H.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let _e=0;_e<H.locationSize;_e++)L(H.location+_e,O/H.locationSize,J,le,O*he,O/H.locationSize*_e*he,Me)}}else if(ee!==void 0){const le=ee[pe];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(H.location,le);break;case 3:r.vertexAttrib3fv(H.location,le);break;case 4:r.vertexAttrib4fv(H.location,le);break;default:r.vertexAttrib1fv(H.location,le)}}}}D()}function V(){F();for(const T in s){const k=s[T];for(const ne in k){const Z=k[ne];for(const se in Z)v(Z[se].object),delete Z[se];delete k[ne]}delete s[T]}}function U(T){if(s[T.id]===void 0)return;const k=s[T.id];for(const ne in k){const Z=k[ne];for(const se in Z)v(Z[se].object),delete Z[se];delete k[ne]}delete s[T.id]}function C(T){for(const k in s){const ne=s[k];if(ne[T.id]===void 0)continue;const Z=ne[T.id];for(const se in Z)v(Z[se].object),delete Z[se];delete ne[T.id]}}function F(){R(),c=!0,l!==o&&(l=o,p(l.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:F,resetDefaultState:R,dispose:V,releaseStatesOfGeometry:U,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:y,disableUnusedAttributes:D}}function $T(r,e,t){let s;function o(p){s=p}function l(p,v){r.drawArrays(s,p,v),t.update(v,s,1)}function c(p,v,m){m!==0&&(r.drawArraysInstanced(s,p,v,m),t.update(v,s,m))}function f(p,v,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,m);let S=0;for(let E=0;E<m;E++)S+=v[E];t.update(S,s,1)}function h(p,v,m,_){if(m===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],v[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,v,0,_,0,m);let E=0;for(let M=0;M<m;M++)E+=v[M]*_[M];t.update(E,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function qT(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(C){return!(C!==Ti&&s.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(C){const F=C===Fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Hi&&s.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ur&&!F)}function h(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const m=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,U=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:m,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:V,maxSamples:U}}function YT(r){const e=this;let t=null,s=0,o=!1,l=!1;const c=new Gr,f=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const S=m.length!==0||_||s!==0||o;return o=_,s=m.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(m,_){t=v(m,_,0)},this.setState=function(m,_,S){const E=m.clippingPlanes,M=m.clipIntersection,y=m.clipShadows,x=r.get(m);if(!o||E===null||E.length===0||l&&!y)l?v(null):p();else{const D=l?0:s,L=D*4;let P=x.clippingState||null;h.value=P,P=v(E,_,L,S);for(let V=0;V!==L;++V)P[V]=t[V];x.clippingState=P,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(m,_,S,E){const M=m!==null?m.length:0;let y=null;if(M!==0){if(y=h.value,E!==!0||y===null){const x=S+M*4,D=_.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let L=0,P=S;L!==M;++L,P+=4)c.copy(m[L]).applyMatrix4(D,f),c.normal.toArray(y,P),y[P+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function KT(r){let e=new WeakMap;function t(c,f){return f===Nd?c.mapping=Mo:f===Fd&&(c.mapping=Eo),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===Nd||f===Fd)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new WE(h.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const mo=4,d0=[.125,.215,.35,.446,.526,.582],_s=20,md=new Iv,h0=new at;let gd=null,vd=0,_d=0,xd=!1;const ms=(1+Math.sqrt(5))/2,ho=1/ms,p0=[new $(-ms,ho,0),new $(ms,ho,0),new $(-ho,0,ms),new $(ho,0,ms),new $(0,ms,-ho),new $(0,ms,ho),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],ZT=new $;class m0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100,l={}){const{size:c=256,position:f=ZT}=l;gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gd,vd,_d),this._renderer.xr.enabled=xd,e.scissorTest=!1,xu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mo||e.mapping===Eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:ki,minFilter:ki,generateMipmaps:!1,type:Fa,format:Ti,colorSpace:wo,depthBuffer:!1},o=g0(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g0(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QT(l)),this._blurMaterial=JT(l,e,t)}return o}_compileMaterial(e){const t=new ii(this._lodPlanes[0],e);this._renderer.compile(t,md)}_sceneToCubeUV(e,t,s,o,l){const h=new ti(90,1,t,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,S=m.toneMapping;m.getClearColor(h0),m.toneMapping=jr,m.autoClear=!1;const E=new Tv({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),M=new ii(new bo,E);let y=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,y=!0):(E.color.copy(h0),y=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(h.up.set(0,p[D],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[D],l.y,l.z)):L===1?(h.up.set(0,0,p[D]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[D],l.z)):(h.up.set(0,p[D],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[D]));const P=this._cubeSize;xu(o,L*P,D>2?P:0,P,P),m.setRenderTarget(o),y&&m.render(M,h),m.render(e,h)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=S,m.autoClear=_,e.background=x}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===Mo||e.mapping===Eo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=_0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v0());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new ii(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;xu(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(c,md)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=p0[(o-l-1)%p0.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new ii(this._lodPlanes[o],p),_=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*_s-1),M=l/E,y=isFinite(l)?1+Math.floor(v*M):_s;y>_s&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${_s}`);const x=[];let D=0;for(let C=0;C<_s;++C){const F=C/M,R=Math.exp(-F*F/2);x.push(R),C===0?D+=R:C<y&&(D+=2*R)}for(let C=0;C<x.length;C++)x[C]=x[C]/D;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=c==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:L}=this;_.dTheta.value=E,_.mipInt.value=L-s;const P=this._sizeLods[o],V=3*P*(o>L-mo?o-L+mo:0),U=4*(this._cubeSize-P);xu(t,V,U,3*P,2*P),h.setRenderTarget(t),h.render(m,md)}}function QT(r){const e=[],t=[],s=[];let o=r;const l=r-mo+1+d0.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let h=1/f;c>r-mo?h=d0[c-r+mo-1]:c===0&&(h=0),s.push(h);const p=1/(f-2),v=-p,m=1+p,_=[v,v,m,v,m,m,v,v,m,m,v,m],S=6,E=6,M=3,y=2,x=1,D=new Float32Array(M*E*S),L=new Float32Array(y*E*S),P=new Float32Array(x*E*S);for(let U=0;U<S;U++){const C=U%3*2/3-1,F=U>2?0:-1,R=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];D.set(R,M*E*U),L.set(_,y*E*U);const T=[U,U,U,U,U,U];P.set(T,x*E*U)}const V=new Ri;V.setAttribute("position",new zi(D,M)),V.setAttribute("uv",new zi(L,y)),V.setAttribute("faceIndex",new zi(P,x)),e.push(V),o>mo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function g0(r,e,t){const s=new $r(r,e,t);return s.texture.mapping=Ju,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function xu(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function JT(r,e,t){const s=new Float32Array(_s),o=new $(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function v0(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function _0(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function Uh(){return`

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
	`}function eA(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const h=f.mapping,p=h===Nd||h===Fd,v=h===Mo||h===Eo;if(p||v){let m=e.get(f);const _=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new m0(r)),m=p?t.fromEquirectangular(f,m):t.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const S=f.image;return p&&S&&S.height>0||v&&S&&o(S)?(t===null&&(t=new m0(r)),m=p?t.fromEquirectangular(f):t.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",l),m.texture):null}}}return f}function o(f){let h=0;const p=6;for(let v=0;v<p;v++)f[v]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function tA(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&Pu("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function nA(r,e,t,s){const o={},l=new WeakMap;function c(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete o[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(m,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,t.memory.geometries++),_}function h(m){const _=m.attributes;for(const S in _)e.update(_[S],r.ARRAY_BUFFER)}function p(m){const _=[],S=m.index,E=m.attributes.position;let M=0;if(S!==null){const D=S.array;M=S.version;for(let L=0,P=D.length;L<P;L+=3){const V=D[L+0],U=D[L+1],C=D[L+2];_.push(V,U,U,C,C,V)}}else if(E!==void 0){const D=E.array;M=E.version;for(let L=0,P=D.length/3-1;L<P;L+=3){const V=L+0,U=L+1,C=L+2;_.push(V,U,U,C,C,V)}}else return;const y=new(Sv(_)?Cv:Av)(_,1);y.version=M;const x=l.get(m);x&&e.remove(x),l.set(m,y)}function v(m){const _=l.get(m);if(_){const S=m.index;S!==null&&_.version<S.version&&p(m)}else p(m);return l.get(m)}return{get:f,update:h,getWireframeAttribute:v}}function iA(r,e,t){let s;function o(_){s=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function h(_,S){r.drawElements(s,S,l,_*c),t.update(S,s,1)}function p(_,S,E){E!==0&&(r.drawElementsInstanced(s,S,l,_*c,E),t.update(S,s,E))}function v(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,_,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];t.update(y,s,1)}function m(_,S,E,M){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)p(_[x]/c,S[x],M[x]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,_,0,M,0,E);let x=0;for(let D=0;D<E;D++)x+=S[D]*M[D];t.update(x,s,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function rA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function sA(r,e,t){const s=new WeakMap,o=new Ht;function l(c,f,h){const p=c.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,m=v!==void 0?v.length:0;let _=s.get(f);if(_===void 0||_.count!==m){let R=function(){C.dispose(),s.delete(f),f.removeEventListener("dispose",R)};_!==void 0&&_.texture.dispose();const S=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],x=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let L=0;S===!0&&(L=1),E===!0&&(L=2),M===!0&&(L=3);let P=f.attributes.position.count*L,V=1;P>e.maxTextureSize&&(V=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const U=new Float32Array(P*V*4*m),C=new Mv(U,P,V,m);C.type=ur,C.needsUpdate=!0;const F=L*4;for(let T=0;T<m;T++){const k=y[T],ne=x[T],Z=D[T],se=P*V*4*T;for(let ue=0;ue<k.count;ue++){const ee=ue*F;S===!0&&(o.fromBufferAttribute(k,ue),U[se+ee+0]=o.x,U[se+ee+1]=o.y,U[se+ee+2]=o.z,U[se+ee+3]=0),E===!0&&(o.fromBufferAttribute(ne,ue),U[se+ee+4]=o.x,U[se+ee+5]=o.y,U[se+ee+6]=o.z,U[se+ee+7]=0),M===!0&&(o.fromBufferAttribute(Z,ue),U[se+ee+8]=o.x,U[se+ee+9]=o.y,U[se+ee+10]=o.z,U[se+ee+11]=Z.itemSize===4?o.w:1)}}_={count:m,texture:C,size:new Tt(P,V)},s.set(f,_),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let S=0;for(let M=0;M<p.length;M++)S+=p[M];const E=f.morphTargetsRelative?1:1-S;h.getUniforms().setValue(r,"morphTargetBaseInfluence",E),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:l}}function oA(r,e,t,s){let o=new WeakMap;function l(h){const p=s.render.frame,v=h.geometry,m=e.get(h,v);if(o.get(m)!==p&&(e.update(m),o.set(m,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return m}function c(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const Nv=new zn,x0=new Lv(1,1),Fv=new Mv,Ov=new RE,kv=new Pv,y0=[],S0=[],M0=new Float32Array(16),E0=new Float32Array(9),w0=new Float32Array(4);function Po(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=y0[o];if(l===void 0&&(l=new Float32Array(o),y0[o]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function on(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function an(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function ec(r,e){let t=S0[e];t===void 0&&(t=new Int32Array(e),S0[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function aA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function lA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2fv(this.addr,e),an(t,e)}}function uA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;r.uniform3fv(this.addr,e),an(t,e)}}function cA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4fv(this.addr,e),an(t,e)}}function fA(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(on(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,s))return;w0.set(s),r.uniformMatrix2fv(this.addr,!1,w0),an(t,s)}}function dA(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(on(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,s))return;E0.set(s),r.uniformMatrix3fv(this.addr,!1,E0),an(t,s)}}function hA(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(on(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,s))return;M0.set(s),r.uniformMatrix4fv(this.addr,!1,M0),an(t,s)}}function pA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function mA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2iv(this.addr,e),an(t,e)}}function gA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3iv(this.addr,e),an(t,e)}}function vA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4iv(this.addr,e),an(t,e)}}function _A(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function xA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2uiv(this.addr,e),an(t,e)}}function yA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3uiv(this.addr,e),an(t,e)}}function SA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4uiv(this.addr,e),an(t,e)}}function MA(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(x0.compareFunction=yv,l=x0):l=Nv,t.setTexture2D(e||l,o)}function EA(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||Ov,o)}function wA(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||kv,o)}function TA(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||Fv,o)}function AA(r){switch(r){case 5126:return aA;case 35664:return lA;case 35665:return uA;case 35666:return cA;case 35674:return fA;case 35675:return dA;case 35676:return hA;case 5124:case 35670:return pA;case 35667:case 35671:return mA;case 35668:case 35672:return gA;case 35669:case 35673:return vA;case 5125:return _A;case 36294:return xA;case 36295:return yA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return MA;case 35679:case 36299:case 36307:return EA;case 35680:case 36300:case 36308:case 36293:return wA;case 36289:case 36303:case 36311:case 36292:return TA}}function CA(r,e){r.uniform1fv(this.addr,e)}function RA(r,e){const t=Po(e,this.size,2);r.uniform2fv(this.addr,t)}function bA(r,e){const t=Po(e,this.size,3);r.uniform3fv(this.addr,t)}function PA(r,e){const t=Po(e,this.size,4);r.uniform4fv(this.addr,t)}function LA(r,e){const t=Po(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function DA(r,e){const t=Po(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function IA(r,e){const t=Po(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function UA(r,e){r.uniform1iv(this.addr,e)}function NA(r,e){r.uniform2iv(this.addr,e)}function FA(r,e){r.uniform3iv(this.addr,e)}function OA(r,e){r.uniform4iv(this.addr,e)}function kA(r,e){r.uniform1uiv(this.addr,e)}function BA(r,e){r.uniform2uiv(this.addr,e)}function zA(r,e){r.uniform3uiv(this.addr,e)}function HA(r,e){r.uniform4uiv(this.addr,e)}function VA(r,e,t){const s=this.cache,o=e.length,l=ec(t,o);on(s,l)||(r.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||Nv,l[c])}function GA(r,e,t){const s=this.cache,o=e.length,l=ec(t,o);on(s,l)||(r.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Ov,l[c])}function WA(r,e,t){const s=this.cache,o=e.length,l=ec(t,o);on(s,l)||(r.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||kv,l[c])}function XA(r,e,t){const s=this.cache,o=e.length,l=ec(t,o);on(s,l)||(r.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Fv,l[c])}function jA(r){switch(r){case 5126:return CA;case 35664:return RA;case 35665:return bA;case 35666:return PA;case 35674:return LA;case 35675:return DA;case 35676:return IA;case 5124:case 35670:return UA;case 35667:case 35671:return NA;case 35668:case 35672:return FA;case 35669:case 35673:return OA;case 5125:return kA;case 36294:return BA;case 36295:return zA;case 36296:return HA;case 35678:case 36198:case 36298:case 36306:case 35682:return VA;case 35679:case 36299:case 36307:return GA;case 35680:case 36300:case 36308:case 36293:return WA;case 36289:case 36303:case 36311:case 36292:return XA}}class $A{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=AA(t.type)}}class qA{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jA(t.type)}}class YA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function T0(r,e){r.seq.push(e),r.map[e.id]=e}function KA(r,e,t){const s=r.name,o=s.length;for(yd.lastIndex=0;;){const l=yd.exec(s),c=yd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===o){T0(t,p===void 0?new $A(f,r,e):new qA(f,r,e));break}else{let m=t.map[f];m===void 0&&(m=new YA(f),T0(t,m)),t=m}}}class Du{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);KA(l,c,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&s.push(c)}return s}}function A0(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const ZA=37297;let QA=0;function JA(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const C0=new ot;function eC(r){Mt._getMatrix(C0,Mt.workingColorSpace,r);const e=`mat3( ${C0.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(r)){case Fu:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function R0(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+JA(r.getShaderSource(e),c)}else return o}function tC(r,e){const t=eC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nC(r,e){let t;switch(e){case BM:t="Linear";break;case zM:t="Reinhard";break;case HM:t="Cineon";break;case VM:t="ACESFilmic";break;case WM:t="AgX";break;case XM:t="Neutral";break;case GM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yu=new $;function iC(){Mt.getLuminanceCoefficients(yu);const r=yu.x.toFixed(4),e=yu.y.toFixed(4),t=yu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function sC(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function oC(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function _a(r){return r!==""}function b0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function P0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aC=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(r){return r.replace(aC,uC)}const lC=new Map;function uC(r,e){let t=lt[e];if(t===void 0){const s=lC.get(e);if(s!==void 0)t=lt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return fh(t)}const cC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L0(r){return r.replace(cC,fC)}function fC(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function D0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dC(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===cv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===_M?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ar&&(e="SHADOWMAP_TYPE_VSM"),e}function hC(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Mo:case Eo:e="ENVMAP_TYPE_CUBE";break;case Ju:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pC(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Eo:e="ENVMAP_MODE_REFRACTION";break}return e}function mC(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Mh:e="ENVMAP_BLENDING_MULTIPLY";break;case OM:e="ENVMAP_BLENDING_MIX";break;case kM:e="ENVMAP_BLENDING_ADD";break}return e}function gC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function vC(r,e,t,s){const o=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=dC(t),p=hC(t),v=pC(t),m=mC(t),_=gC(t),S=rC(t),E=sC(l),M=o.createProgram();let y,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(_a).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(_a).join(`
`),x.length>0&&(x+=`
`)):(y=[D0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),x=[D0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jr?"#define TONE_MAPPING":"",t.toneMapping!==jr?lt.tonemapping_pars_fragment:"",t.toneMapping!==jr?nC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,tC("linearToOutputTexel",t.outputColorSpace),iC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_a).join(`
`)),c=fh(c),c=b0(c,t),c=P0(c,t),f=fh(f),f=b0(f,t),f=P0(f,t),c=L0(c),f=L0(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=D+y+c,P=D+x+f,V=A0(o,o.VERTEX_SHADER,L),U=A0(o,o.FRAGMENT_SHADER,P);o.attachShader(M,V),o.attachShader(M,U),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function C(k){if(r.debug.checkShaderErrors){const ne=o.getProgramInfoLog(M).trim(),Z=o.getShaderInfoLog(V).trim(),se=o.getShaderInfoLog(U).trim();let ue=!0,ee=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(ue=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,M,V,U);else{const pe=R0(o,V,"vertex"),H=R0(o,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ne+`
`+pe+`
`+H)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(Z===""||se==="")&&(ee=!1);ee&&(k.diagnostics={runnable:ue,programLog:ne,vertexShader:{log:Z,prefix:y},fragmentShader:{log:se,prefix:x}})}o.deleteShader(V),o.deleteShader(U),F=new Du(o,M),R=oC(o,M)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=o.getProgramParameter(M,ZA)),T},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QA++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=V,this.fragmentShader=U,this}let _C=0;class xC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new yC(e),t.set(e,s)),s}}class yC{constructor(e){this.id=_C++,this.code=e,this.usedTimes=0}}function SC(r,e,t,s,o,l,c){const f=new Ev,h=new xC,p=new Set,v=[],m=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,T,k,ne,Z){const se=ne.fog,ue=Z.geometry,ee=R.isMeshStandardMaterial?ne.environment:null,pe=(R.isMeshStandardMaterial?t:e).get(R.envMap||ee),H=pe&&pe.mapping===Ju?pe.image.height:null,ae=E[R.type];R.precision!==null&&(S=o.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const le=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,O=le!==void 0?le.length:0;let re=0;ue.morphAttributes.position!==void 0&&(re=1),ue.morphAttributes.normal!==void 0&&(re=2),ue.morphAttributes.color!==void 0&&(re=3);let Le,J,he,Me;if(ae){const _t=Oi[ae];Le=_t.vertexShader,J=_t.fragmentShader}else Le=R.vertexShader,J=R.fragmentShader,h.update(R),he=h.getVertexShaderID(R),Me=h.getFragmentShaderID(R);const _e=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Xe=Z.isInstancedMesh===!0,Ve=Z.isBatchedMesh===!0,Lt=!!R.map,Dt=!!R.matcap,ut=!!pe,z=!!R.aoMap,Ln=!!R.lightMap,ht=!!R.bumpMap,ct=!!R.normalMap,je=!!R.displacementMap,Ct=!!R.emissiveMap,Ge=!!R.metalnessMap,I=!!R.roughnessMap,A=R.anisotropy>0,Q=R.clearcoat>0,fe=R.dispersion>0,ve=R.iridescence>0,ce=R.sheen>0,He=R.transmission>0,Ae=A&&!!R.anisotropyMap,Ye=Q&&!!R.clearcoatMap,qe=Q&&!!R.clearcoatNormalMap,xe=Q&&!!R.clearcoatRoughnessMap,Ne=ve&&!!R.iridescenceMap,Je=ve&&!!R.iridescenceThicknessMap,et=ce&&!!R.sheenColorMap,Fe=ce&&!!R.sheenRoughnessMap,ft=!!R.specularMap,it=!!R.specularColorMap,At=!!R.specularIntensityMap,W=He&&!!R.transmissionMap,Ce=He&&!!R.thicknessMap,oe=!!R.gradientMap,de=!!R.alphaMap,Pe=R.alphaTest>0,be=!!R.alphaHash,rt=!!R.extensions;let Nt=jr;R.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Nt=r.toneMapping);const nn={shaderID:ae,shaderType:R.type,shaderName:R.name,vertexShader:Le,fragmentShader:J,defines:R.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Ve,batchingColor:Ve&&Z._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&Z.instanceColor!==null,instancingMorph:Xe&&Z.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:wo,alphaToCoverage:!!R.alphaToCoverage,map:Lt,matcap:Dt,envMap:ut,envMapMode:ut&&pe.mapping,envMapCubeUVHeight:H,aoMap:z,lightMap:Ln,bumpMap:ht,normalMap:ct,displacementMap:_&&je,emissiveMap:Ct,normalMapObjectSpace:ct&&R.normalMapType===YM,normalMapTangentSpace:ct&&R.normalMapType===bh,metalnessMap:Ge,roughnessMap:I,anisotropy:A,anisotropyMap:Ae,clearcoat:Q,clearcoatMap:Ye,clearcoatNormalMap:qe,clearcoatRoughnessMap:xe,dispersion:fe,iridescence:ve,iridescenceMap:Ne,iridescenceThicknessMap:Je,sheen:ce,sheenColorMap:et,sheenRoughnessMap:Fe,specularMap:ft,specularColorMap:it,specularIntensityMap:At,transmission:He,transmissionMap:W,thicknessMap:Ce,gradientMap:oe,opaque:R.transparent===!1&&R.blending===_o&&R.alphaToCoverage===!1,alphaMap:de,alphaTest:Pe,alphaHash:be,combine:R.combine,mapUv:Lt&&M(R.map.channel),aoMapUv:z&&M(R.aoMap.channel),lightMapUv:Ln&&M(R.lightMap.channel),bumpMapUv:ht&&M(R.bumpMap.channel),normalMapUv:ct&&M(R.normalMap.channel),displacementMapUv:je&&M(R.displacementMap.channel),emissiveMapUv:Ct&&M(R.emissiveMap.channel),metalnessMapUv:Ge&&M(R.metalnessMap.channel),roughnessMapUv:I&&M(R.roughnessMap.channel),anisotropyMapUv:Ae&&M(R.anisotropyMap.channel),clearcoatMapUv:Ye&&M(R.clearcoatMap.channel),clearcoatNormalMapUv:qe&&M(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&M(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&M(R.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&M(R.iridescenceThicknessMap.channel),sheenColorMapUv:et&&M(R.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&M(R.sheenRoughnessMap.channel),specularMapUv:ft&&M(R.specularMap.channel),specularColorMapUv:it&&M(R.specularColorMap.channel),specularIntensityMapUv:At&&M(R.specularIntensityMap.channel),transmissionMapUv:W&&M(R.transmissionMap.channel),thicknessMapUv:Ce&&M(R.thicknessMap.channel),alphaMapUv:de&&M(R.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(ct||A),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ue.attributes.uv&&(Lt||de),fog:!!se,useFog:R.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:we,skinning:Z.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Lt&&R.map.isVideoTexture===!0&&Mt.getTransfer(R.map.colorSpace)===Rt,decodeVideoTextureEmissive:Ct&&R.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(R.emissiveMap.colorSpace)===Rt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===lr,flipSided:R.side===Bn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:rt&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&R.extensions.multiDraw===!0||Ve)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return nn.vertexUv1s=p.has(1),nn.vertexUv2s=p.has(2),nn.vertexUv3s=p.has(3),p.clear(),nn}function x(R){const T=[];if(R.shaderID?T.push(R.shaderID):(T.push(R.customVertexShaderID),T.push(R.customFragmentShaderID)),R.defines!==void 0)for(const k in R.defines)T.push(k),T.push(R.defines[k]);return R.isRawShaderMaterial===!1&&(D(T,R),L(T,R),T.push(r.outputColorSpace)),T.push(R.customProgramCacheKey),T.join()}function D(R,T){R.push(T.precision),R.push(T.outputColorSpace),R.push(T.envMapMode),R.push(T.envMapCubeUVHeight),R.push(T.mapUv),R.push(T.alphaMapUv),R.push(T.lightMapUv),R.push(T.aoMapUv),R.push(T.bumpMapUv),R.push(T.normalMapUv),R.push(T.displacementMapUv),R.push(T.emissiveMapUv),R.push(T.metalnessMapUv),R.push(T.roughnessMapUv),R.push(T.anisotropyMapUv),R.push(T.clearcoatMapUv),R.push(T.clearcoatNormalMapUv),R.push(T.clearcoatRoughnessMapUv),R.push(T.iridescenceMapUv),R.push(T.iridescenceThicknessMapUv),R.push(T.sheenColorMapUv),R.push(T.sheenRoughnessMapUv),R.push(T.specularMapUv),R.push(T.specularColorMapUv),R.push(T.specularIntensityMapUv),R.push(T.transmissionMapUv),R.push(T.thicknessMapUv),R.push(T.combine),R.push(T.fogExp2),R.push(T.sizeAttenuation),R.push(T.morphTargetsCount),R.push(T.morphAttributeCount),R.push(T.numDirLights),R.push(T.numPointLights),R.push(T.numSpotLights),R.push(T.numSpotLightMaps),R.push(T.numHemiLights),R.push(T.numRectAreaLights),R.push(T.numDirLightShadows),R.push(T.numPointLightShadows),R.push(T.numSpotLightShadows),R.push(T.numSpotLightShadowsWithMaps),R.push(T.numLightProbes),R.push(T.shadowMapType),R.push(T.toneMapping),R.push(T.numClippingPlanes),R.push(T.numClipIntersection),R.push(T.depthPacking)}function L(R,T){f.disableAll(),T.supportsVertexTextures&&f.enable(0),T.instancing&&f.enable(1),T.instancingColor&&f.enable(2),T.instancingMorph&&f.enable(3),T.matcap&&f.enable(4),T.envMap&&f.enable(5),T.normalMapObjectSpace&&f.enable(6),T.normalMapTangentSpace&&f.enable(7),T.clearcoat&&f.enable(8),T.iridescence&&f.enable(9),T.alphaTest&&f.enable(10),T.vertexColors&&f.enable(11),T.vertexAlphas&&f.enable(12),T.vertexUv1s&&f.enable(13),T.vertexUv2s&&f.enable(14),T.vertexUv3s&&f.enable(15),T.vertexTangents&&f.enable(16),T.anisotropy&&f.enable(17),T.alphaHash&&f.enable(18),T.batching&&f.enable(19),T.dispersion&&f.enable(20),T.batchingColor&&f.enable(21),R.push(f.mask),f.disableAll(),T.fog&&f.enable(0),T.useFog&&f.enable(1),T.flatShading&&f.enable(2),T.logarithmicDepthBuffer&&f.enable(3),T.reverseDepthBuffer&&f.enable(4),T.skinning&&f.enable(5),T.morphTargets&&f.enable(6),T.morphNormals&&f.enable(7),T.morphColors&&f.enable(8),T.premultipliedAlpha&&f.enable(9),T.shadowMapEnabled&&f.enable(10),T.doubleSided&&f.enable(11),T.flipSided&&f.enable(12),T.useDepthPacking&&f.enable(13),T.dithering&&f.enable(14),T.transmission&&f.enable(15),T.sheen&&f.enable(16),T.opaque&&f.enable(17),T.pointsUvs&&f.enable(18),T.decodeVideoTexture&&f.enable(19),T.decodeVideoTextureEmissive&&f.enable(20),T.alphaToCoverage&&f.enable(21),R.push(f.mask)}function P(R){const T=E[R.type];let k;if(T){const ne=Oi[T];k=ku.clone(ne.uniforms)}else k=R.uniforms;return k}function V(R,T){let k;for(let ne=0,Z=v.length;ne<Z;ne++){const se=v[ne];if(se.cacheKey===T){k=se,++k.usedTimes;break}}return k===void 0&&(k=new vC(r,T,R,l),v.push(k)),k}function U(R){if(--R.usedTimes===0){const T=v.indexOf(R);v[T]=v[v.length-1],v.pop(),R.destroy()}}function C(R){h.remove(R)}function F(){h.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:P,acquireProgram:V,releaseProgram:U,releaseShaderCache:C,programs:v,dispose:F}}function MC(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function o(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function EC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function I0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function U0(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(m,_,S,E,M,y){let x=r[e];return x===void 0?(x={id:m.id,object:m,geometry:_,material:S,groupOrder:E,renderOrder:m.renderOrder,z:M,group:y},r[e]=x):(x.id=m.id,x.object=m,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=m.renderOrder,x.z=M,x.group=y),e++,x}function f(m,_,S,E,M,y){const x=c(m,_,S,E,M,y);S.transmission>0?s.push(x):S.transparent===!0?o.push(x):t.push(x)}function h(m,_,S,E,M,y){const x=c(m,_,S,E,M,y);S.transmission>0?s.unshift(x):S.transparent===!0?o.unshift(x):t.unshift(x)}function p(m,_){t.length>1&&t.sort(m||EC),s.length>1&&s.sort(_||I0),o.length>1&&o.sort(_||I0)}function v(){for(let m=e,_=r.length;m<_;m++){const S=r[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:f,unshift:h,finish:v,sort:p}}function wC(){let r=new WeakMap;function e(s,o){const l=r.get(s);let c;return l===void 0?(c=new U0,r.set(s,[c])):o>=l.length?(c=new U0,l.push(c)):c=l[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function TC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new at};break;case"SpotLight":t={position:new $,direction:new $,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=t,t}}}function AC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let CC=0;function RC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bC(r){const e=new TC,t=AC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const o=new $,l=new Pt,c=new Pt;function f(p){let v=0,m=0,_=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let S=0,E=0,M=0,y=0,x=0,D=0,L=0,P=0,V=0,U=0,C=0;p.sort(RC);for(let R=0,T=p.length;R<T;R++){const k=p[R],ne=k.color,Z=k.intensity,se=k.distance,ue=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)v+=ne.r*Z,m+=ne.g*Z,_+=ne.b*Z;else if(k.isLightProbe){for(let ee=0;ee<9;ee++)s.probe[ee].addScaledVector(k.sh.coefficients[ee],Z);C++}else if(k.isDirectionalLight){const ee=e.get(k);if(ee.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const pe=k.shadow,H=t.get(k);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,s.directionalShadow[S]=H,s.directionalShadowMap[S]=ue,s.directionalShadowMatrix[S]=k.shadow.matrix,D++}s.directional[S]=ee,S++}else if(k.isSpotLight){const ee=e.get(k);ee.position.setFromMatrixPosition(k.matrixWorld),ee.color.copy(ne).multiplyScalar(Z),ee.distance=se,ee.coneCos=Math.cos(k.angle),ee.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ee.decay=k.decay,s.spot[M]=ee;const pe=k.shadow;if(k.map&&(s.spotLightMap[V]=k.map,V++,pe.updateMatrices(k),k.castShadow&&U++),s.spotLightMatrix[M]=pe.matrix,k.castShadow){const H=t.get(k);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,s.spotShadow[M]=H,s.spotShadowMap[M]=ue,P++}M++}else if(k.isRectAreaLight){const ee=e.get(k);ee.color.copy(ne).multiplyScalar(Z),ee.halfWidth.set(k.width*.5,0,0),ee.halfHeight.set(0,k.height*.5,0),s.rectArea[y]=ee,y++}else if(k.isPointLight){const ee=e.get(k);if(ee.color.copy(k.color).multiplyScalar(k.intensity),ee.distance=k.distance,ee.decay=k.decay,k.castShadow){const pe=k.shadow,H=t.get(k);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,H.shadowCameraNear=pe.camera.near,H.shadowCameraFar=pe.camera.far,s.pointShadow[E]=H,s.pointShadowMap[E]=ue,s.pointShadowMatrix[E]=k.shadow.matrix,L++}s.point[E]=ee,E++}else if(k.isHemisphereLight){const ee=e.get(k);ee.skyColor.copy(k.color).multiplyScalar(Z),ee.groundColor.copy(k.groundColor).multiplyScalar(Z),s.hemi[x]=ee,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=m,s.ambient[2]=_;const F=s.hash;(F.directionalLength!==S||F.pointLength!==E||F.spotLength!==M||F.rectAreaLength!==y||F.hemiLength!==x||F.numDirectionalShadows!==D||F.numPointShadows!==L||F.numSpotShadows!==P||F.numSpotMaps!==V||F.numLightProbes!==C)&&(s.directional.length=S,s.spot.length=M,s.rectArea.length=y,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=P+V-U,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=C,F.directionalLength=S,F.pointLength=E,F.spotLength=M,F.rectAreaLength=y,F.hemiLength=x,F.numDirectionalShadows=D,F.numPointShadows=L,F.numSpotShadows=P,F.numSpotMaps=V,F.numLightProbes=C,s.version=CC++)}function h(p,v){let m=0,_=0,S=0,E=0,M=0;const y=v.matrixWorldInverse;for(let x=0,D=p.length;x<D;x++){const L=p[x];if(L.isDirectionalLight){const P=s.directional[m];P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),m++}else if(L.isSpotLight){const P=s.spot[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const P=s.rectArea[E];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const P=s.point[_];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),_++}else if(L.isHemisphereLight){const P=s.hemi[M];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(y),M++}}}return{setup:f,setupView:h,state:s}}function N0(r){const e=new bC(r),t=[],s=[];function o(v){p.camera=v,t.length=0,s.length=0}function l(v){t.push(v)}function c(v){s.push(v)}function f(){e.setup(t)}function h(v){e.setupView(t,v)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function PC(r){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new N0(r),e.set(o,[f])):l>=c.length?(f=new N0(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const LC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DC=`uniform sampler2D shadow_pass;
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
}`;function IC(r,e,t){let s=new Ih;const o=new Tt,l=new Tt,c=new Ht,f=new ZE({depthPacking:qM}),h=new QE,p={},v=t.maxTextureSize,m={[pr]:Bn,[Bn]:pr,[lr]:lr},_=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:LC,fragmentShader:DC}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new Ri;E.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ii(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cv;let x=this.type;this.render=function(U,C,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;const R=r.getRenderTarget(),T=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),ne=r.state;ne.setBlending(Xr),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const Z=x!==ar&&this.type===ar,se=x===ar&&this.type!==ar;for(let ue=0,ee=U.length;ue<ee;ue++){const pe=U[ue],H=pe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const ae=H.getFrameExtents();if(o.multiply(ae),l.copy(H.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/ae.x),o.x=l.x*ae.x,H.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/ae.y),o.y=l.y*ae.y,H.mapSize.y=l.y)),H.map===null||Z===!0||se===!0){const O=this.type!==ar?{minFilter:Ai,magFilter:Ai}:{};H.map!==null&&H.map.dispose(),H.map=new $r(o.x,o.y,O),H.map.texture.name=pe.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const le=H.getViewportCount();for(let O=0;O<le;O++){const re=H.getViewport(O);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),ne.viewport(c),H.updateMatrices(pe,O),s=H.getFrustum(),P(C,F,H.camera,pe,this.type)}H.isPointLightShadow!==!0&&this.type===ar&&D(H,F),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(R,T,k)};function D(U,C){const F=e.update(M);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new $r(o.x,o.y)),_.uniforms.shadow_pass.value=U.map.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(C,null,F,_,M,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(C,null,F,S,M,null)}function L(U,C,F,R){let T=null;const k=F.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(k!==void 0)T=k;else if(T=F.isPointLight===!0?h:f,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const ne=T.uuid,Z=C.uuid;let se=p[ne];se===void 0&&(se={},p[ne]=se);let ue=se[Z];ue===void 0&&(ue=T.clone(),se[Z]=ue,C.addEventListener("dispose",V)),T=ue}if(T.visible=C.visible,T.wireframe=C.wireframe,R===ar?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:m[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ne=r.properties.get(T);ne.light=F}return T}function P(U,C,F,R,T){if(U.visible===!1)return;if(U.layers.test(C.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&T===ar)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,U.matrixWorld);const Z=e.update(U),se=U.material;if(Array.isArray(se)){const ue=Z.groups;for(let ee=0,pe=ue.length;ee<pe;ee++){const H=ue[ee],ae=se[H.materialIndex];if(ae&&ae.visible){const le=L(U,ae,R,T);U.onBeforeShadow(r,U,C,F,Z,le,H),r.renderBufferDirect(F,null,Z,le,U,H),U.onAfterShadow(r,U,C,F,Z,le,H)}}}else if(se.visible){const ue=L(U,se,R,T);U.onBeforeShadow(r,U,C,F,Z,ue,null),r.renderBufferDirect(F,null,Z,ue,U,null),U.onAfterShadow(r,U,C,F,Z,ue,null)}}const ne=U.children;for(let Z=0,se=ne.length;Z<se;Z++)P(ne[Z],C,F,R,T)}function V(U){U.target.removeEventListener("dispose",V);for(const F in p){const R=p[F],T=U.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}const UC={[Rd]:bd,[Pd]:Id,[Ld]:Ud,[So]:Dd,[bd]:Rd,[Id]:Pd,[Ud]:Ld,[Dd]:So};function NC(r,e){function t(){let W=!1;const Ce=new Ht;let oe=null;const de=new Ht(0,0,0,0);return{setMask:function(Pe){oe!==Pe&&!W&&(r.colorMask(Pe,Pe,Pe,Pe),oe=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,be,rt,Nt,nn){nn===!0&&(Pe*=Nt,be*=Nt,rt*=Nt),Ce.set(Pe,be,rt,Nt),de.equals(Ce)===!1&&(r.clearColor(Pe,be,rt,Nt),de.copy(Ce))},reset:function(){W=!1,oe=null,de.set(-1,0,0,0)}}}function s(){let W=!1,Ce=!1,oe=null,de=null,Pe=null;return{setReversed:function(be){if(Ce!==be){const rt=e.get("EXT_clip_control");be?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),Ce=be;const Nt=Pe;Pe=null,this.setClear(Nt)}},getReversed:function(){return Ce},setTest:function(be){be?_e(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(be){oe!==be&&!W&&(r.depthMask(be),oe=be)},setFunc:function(be){if(Ce&&(be=UC[be]),de!==be){switch(be){case Rd:r.depthFunc(r.NEVER);break;case bd:r.depthFunc(r.ALWAYS);break;case Pd:r.depthFunc(r.LESS);break;case So:r.depthFunc(r.LEQUAL);break;case Ld:r.depthFunc(r.EQUAL);break;case Dd:r.depthFunc(r.GEQUAL);break;case Id:r.depthFunc(r.GREATER);break;case Ud:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=be}},setLocked:function(be){W=be},setClear:function(be){Pe!==be&&(Ce&&(be=1-be),r.clearDepth(be),Pe=be)},reset:function(){W=!1,oe=null,de=null,Pe=null,Ce=!1}}}function o(){let W=!1,Ce=null,oe=null,de=null,Pe=null,be=null,rt=null,Nt=null,nn=null;return{setTest:function(_t){W||(_t?_e(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(_t){Ce!==_t&&!W&&(r.stencilMask(_t),Ce=_t)},setFunc:function(_t,Hn,Dn){(oe!==_t||de!==Hn||Pe!==Dn)&&(r.stencilFunc(_t,Hn,Dn),oe=_t,de=Hn,Pe=Dn)},setOp:function(_t,Hn,Dn){(be!==_t||rt!==Hn||Nt!==Dn)&&(r.stencilOp(_t,Hn,Dn),be=_t,rt=Hn,Nt=Dn)},setLocked:function(_t){W=_t},setClear:function(_t){nn!==_t&&(r.clearStencil(_t),nn=_t)},reset:function(){W=!1,Ce=null,oe=null,de=null,Pe=null,be=null,rt=null,Nt=null,nn=null}}}const l=new t,c=new s,f=new o,h=new WeakMap,p=new WeakMap;let v={},m={},_=new WeakMap,S=[],E=null,M=!1,y=null,x=null,D=null,L=null,P=null,V=null,U=null,C=new at(0,0,0),F=0,R=!1,T=null,k=null,ne=null,Z=null,se=null;const ue=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,pe=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(H)[1]),ee=pe>=1):H.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ee=pe>=2);let ae=null,le={};const O=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),Le=new Ht().fromArray(O),J=new Ht().fromArray(re);function he(W,Ce,oe,de){const Pe=new Uint8Array(4),be=r.createTexture();r.bindTexture(W,be),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<oe;rt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,Pe):r.texImage2D(Ce+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pe);return be}const Me={};Me[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),_e(r.DEPTH_TEST),c.setFunc(So),ht(!1),ct(Pg),_e(r.CULL_FACE),z(Xr);function _e(W){v[W]!==!0&&(r.enable(W),v[W]=!0)}function we(W){v[W]!==!1&&(r.disable(W),v[W]=!1)}function Xe(W,Ce){return m[W]!==Ce?(r.bindFramebuffer(W,Ce),m[W]=Ce,W===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Ce),W===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ve(W,Ce){let oe=S,de=!1;if(W){oe=_.get(Ce),oe===void 0&&(oe=[],_.set(Ce,oe));const Pe=W.textures;if(oe.length!==Pe.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let be=0,rt=Pe.length;be<rt;be++)oe[be]=r.COLOR_ATTACHMENT0+be;oe.length=Pe.length,de=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,de=!0);de&&r.drawBuffers(oe)}function Lt(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const Dt={[vs]:r.FUNC_ADD,[yM]:r.FUNC_SUBTRACT,[SM]:r.FUNC_REVERSE_SUBTRACT};Dt[MM]=r.MIN,Dt[EM]=r.MAX;const ut={[wM]:r.ZERO,[TM]:r.ONE,[AM]:r.SRC_COLOR,[Ad]:r.SRC_ALPHA,[DM]:r.SRC_ALPHA_SATURATE,[PM]:r.DST_COLOR,[RM]:r.DST_ALPHA,[CM]:r.ONE_MINUS_SRC_COLOR,[Cd]:r.ONE_MINUS_SRC_ALPHA,[LM]:r.ONE_MINUS_DST_COLOR,[bM]:r.ONE_MINUS_DST_ALPHA,[IM]:r.CONSTANT_COLOR,[UM]:r.ONE_MINUS_CONSTANT_COLOR,[NM]:r.CONSTANT_ALPHA,[FM]:r.ONE_MINUS_CONSTANT_ALPHA};function z(W,Ce,oe,de,Pe,be,rt,Nt,nn,_t){if(W===Xr){M===!0&&(we(r.BLEND),M=!1);return}if(M===!1&&(_e(r.BLEND),M=!0),W!==xM){if(W!==y||_t!==R){if((x!==vs||P!==vs)&&(r.blendEquation(r.FUNC_ADD),x=vs,P=vs),_t)switch(W){case _o:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Lg:r.blendFunc(r.ONE,r.ONE);break;case Dg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ig:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case _o:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Lg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Dg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ig:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}D=null,L=null,V=null,U=null,C.set(0,0,0),F=0,y=W,R=_t}return}Pe=Pe||Ce,be=be||oe,rt=rt||de,(Ce!==x||Pe!==P)&&(r.blendEquationSeparate(Dt[Ce],Dt[Pe]),x=Ce,P=Pe),(oe!==D||de!==L||be!==V||rt!==U)&&(r.blendFuncSeparate(ut[oe],ut[de],ut[be],ut[rt]),D=oe,L=de,V=be,U=rt),(Nt.equals(C)===!1||nn!==F)&&(r.blendColor(Nt.r,Nt.g,Nt.b,nn),C.copy(Nt),F=nn),y=W,R=!1}function Ln(W,Ce){W.side===lr?we(r.CULL_FACE):_e(r.CULL_FACE);let oe=W.side===Bn;Ce&&(oe=!oe),ht(oe),W.blending===_o&&W.transparent===!1?z(Xr):z(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const de=W.stencilWrite;f.setTest(de),de&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ct(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function ht(W){T!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),T=W)}function ct(W){W!==gM?(_e(r.CULL_FACE),W!==k&&(W===Pg?r.cullFace(r.BACK):W===vM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),k=W}function je(W){W!==ne&&(ee&&r.lineWidth(W),ne=W)}function Ct(W,Ce,oe){W?(_e(r.POLYGON_OFFSET_FILL),(Z!==Ce||se!==oe)&&(r.polygonOffset(Ce,oe),Z=Ce,se=oe)):we(r.POLYGON_OFFSET_FILL)}function Ge(W){W?_e(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function I(W){W===void 0&&(W=r.TEXTURE0+ue-1),ae!==W&&(r.activeTexture(W),ae=W)}function A(W,Ce,oe){oe===void 0&&(ae===null?oe=r.TEXTURE0+ue-1:oe=ae);let de=le[oe];de===void 0&&(de={type:void 0,texture:void 0},le[oe]=de),(de.type!==W||de.texture!==Ce)&&(ae!==oe&&(r.activeTexture(oe),ae=oe),r.bindTexture(W,Ce||Me[W]),de.type=W,de.texture=Ce)}function Q(){const W=le[ae];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function fe(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ce(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function He(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ye(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Je(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(W){Le.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Le.copy(W))}function Fe(W){J.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),J.copy(W))}function ft(W,Ce){let oe=p.get(Ce);oe===void 0&&(oe=new WeakMap,p.set(Ce,oe));let de=oe.get(W);de===void 0&&(de=r.getUniformBlockIndex(Ce,W.name),oe.set(W,de))}function it(W,Ce){const de=p.get(Ce).get(W);h.get(Ce)!==de&&(r.uniformBlockBinding(Ce,de,W.__bindingPointIndex),h.set(Ce,de))}function At(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},ae=null,le={},m={},_=new WeakMap,S=[],E=null,M=!1,y=null,x=null,D=null,L=null,P=null,V=null,U=null,C=new at(0,0,0),F=0,R=!1,T=null,k=null,ne=null,Z=null,se=null,Le.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:_e,disable:we,bindFramebuffer:Xe,drawBuffers:Ve,useProgram:Lt,setBlending:z,setMaterial:Ln,setFlipSided:ht,setCullFace:ct,setLineWidth:je,setPolygonOffset:Ct,setScissorTest:Ge,activeTexture:I,bindTexture:A,unbindTexture:Q,compressedTexImage2D:fe,compressedTexImage3D:ve,texImage2D:Ne,texImage3D:Je,updateUBOMapping:ft,uniformBlockBinding:it,texStorage2D:qe,texStorage3D:xe,texSubImage2D:ce,texSubImage3D:He,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ye,scissor:et,viewport:Fe,reset:At}}function FC(r,e,t,s,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Tt,v=new WeakMap;let m;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,A){return S?new OffscreenCanvas(I,A):Da("canvas")}function M(I,A,Q){let fe=1;const ve=Ge(I);if((ve.width>Q||ve.height>Q)&&(fe=Q/Math.max(ve.width,ve.height)),fe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ce=Math.floor(fe*ve.width),He=Math.floor(fe*ve.height);m===void 0&&(m=E(ce,He));const Ae=A?E(ce,He):m;return Ae.width=ce,Ae.height=He,Ae.getContext("2d").drawImage(I,0,0,ce,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+ce+"x"+He+")."),Ae}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),I;return I}function y(I){return I.generateMipmaps}function x(I){r.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(I,A,Q,fe,ve=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ce=A;if(A===r.RED&&(Q===r.FLOAT&&(ce=r.R32F),Q===r.HALF_FLOAT&&(ce=r.R16F),Q===r.UNSIGNED_BYTE&&(ce=r.R8)),A===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.R8UI),Q===r.UNSIGNED_SHORT&&(ce=r.R16UI),Q===r.UNSIGNED_INT&&(ce=r.R32UI),Q===r.BYTE&&(ce=r.R8I),Q===r.SHORT&&(ce=r.R16I),Q===r.INT&&(ce=r.R32I)),A===r.RG&&(Q===r.FLOAT&&(ce=r.RG32F),Q===r.HALF_FLOAT&&(ce=r.RG16F),Q===r.UNSIGNED_BYTE&&(ce=r.RG8)),A===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ce=r.RG16UI),Q===r.UNSIGNED_INT&&(ce=r.RG32UI),Q===r.BYTE&&(ce=r.RG8I),Q===r.SHORT&&(ce=r.RG16I),Q===r.INT&&(ce=r.RG32I)),A===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),Q===r.UNSIGNED_INT&&(ce=r.RGB32UI),Q===r.BYTE&&(ce=r.RGB8I),Q===r.SHORT&&(ce=r.RGB16I),Q===r.INT&&(ce=r.RGB32I)),A===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ce=r.RGBA32UI),Q===r.BYTE&&(ce=r.RGBA8I),Q===r.SHORT&&(ce=r.RGBA16I),Q===r.INT&&(ce=r.RGBA32I)),A===r.RGB&&Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),A===r.RGBA){const He=ve?Fu:Mt.getTransfer(fe);Q===r.FLOAT&&(ce=r.RGBA32F),Q===r.HALF_FLOAT&&(ce=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ce=He===Rt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(I,A){let Q;return I?A===null||A===Ms||A===Ra?Q=r.DEPTH24_STENCIL8:A===ur?Q=r.DEPTH32F_STENCIL8:A===Ca&&(Q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ms||A===Ra?Q=r.DEPTH_COMPONENT24:A===ur?Q=r.DEPTH_COMPONENT32F:A===Ca&&(Q=r.DEPTH_COMPONENT16),Q}function V(I,A){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ai&&I.minFilter!==ki?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function U(I){const A=I.target;A.removeEventListener("dispose",U),F(A),A.isVideoTexture&&v.delete(A)}function C(I){const A=I.target;A.removeEventListener("dispose",C),T(A)}function F(I){const A=s.get(I);if(A.__webglInit===void 0)return;const Q=I.source,fe=_.get(Q);if(fe){const ve=fe[A.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&R(I),Object.keys(fe).length===0&&_.delete(Q)}s.remove(I)}function R(I){const A=s.get(I);r.deleteTexture(A.__webglTexture);const Q=I.source,fe=_.get(Q);delete fe[A.__cacheKey],c.memory.textures--}function T(I){const A=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(A.__webglFramebuffer[fe]))for(let ve=0;ve<A.__webglFramebuffer[fe].length;ve++)r.deleteFramebuffer(A.__webglFramebuffer[fe][ve]);else r.deleteFramebuffer(A.__webglFramebuffer[fe]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[fe])}else{if(Array.isArray(A.__webglFramebuffer))for(let fe=0;fe<A.__webglFramebuffer.length;fe++)r.deleteFramebuffer(A.__webglFramebuffer[fe]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let fe=0;fe<A.__webglColorRenderbuffer.length;fe++)A.__webglColorRenderbuffer[fe]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[fe]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Q=I.textures;for(let fe=0,ve=Q.length;fe<ve;fe++){const ce=s.get(Q[fe]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),c.memory.textures--),s.remove(Q[fe])}s.remove(I)}let k=0;function ne(){k=0}function Z(){const I=k;return I>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),k+=1,I}function se(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function ue(I,A){const Q=s.get(I);if(I.isVideoTexture&&je(I),I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){const fe=I.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Q,I,A);return}}t.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+A)}function ee(I,A){const Q=s.get(I);if(I.version>0&&Q.__version!==I.version){J(Q,I,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+A)}function pe(I,A){const Q=s.get(I);if(I.version>0&&Q.__version!==I.version){J(Q,I,A);return}t.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+A)}function H(I,A){const Q=s.get(I);if(I.version>0&&Q.__version!==I.version){he(Q,I,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+A)}const ae={[Nu]:r.REPEAT,[ys]:r.CLAMP_TO_EDGE,[Od]:r.MIRRORED_REPEAT},le={[Ai]:r.NEAREST,[jM]:r.NEAREST_MIPMAP_NEAREST,[Kl]:r.NEAREST_MIPMAP_LINEAR,[ki]:r.LINEAR,[Vf]:r.LINEAR_MIPMAP_NEAREST,[Ss]:r.LINEAR_MIPMAP_LINEAR},O={[KM]:r.NEVER,[nE]:r.ALWAYS,[ZM]:r.LESS,[yv]:r.LEQUAL,[QM]:r.EQUAL,[tE]:r.GEQUAL,[JM]:r.GREATER,[eE]:r.NOTEQUAL};function re(I,A){if(A.type===ur&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ki||A.magFilter===Vf||A.magFilter===Kl||A.magFilter===Ss||A.minFilter===ki||A.minFilter===Vf||A.minFilter===Kl||A.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,ae[A.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,ae[A.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,ae[A.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,le[A.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,le[A.minFilter]),A.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,O[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ai||A.minFilter!==Kl&&A.minFilter!==Ss||A.type===ur&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function Le(I,A){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",U));const fe=A.source;let ve=_.get(fe);ve===void 0&&(ve={},_.set(fe,ve));const ce=se(A);if(ce!==I.__cacheKey){ve[ce]===void 0&&(ve[ce]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),ve[ce].usedTimes++;const He=ve[I.__cacheKey];He!==void 0&&(ve[I.__cacheKey].usedTimes--,He.usedTimes===0&&R(A)),I.__cacheKey=ce,I.__webglTexture=ve[ce].texture}return Q}function J(I,A,Q){let fe=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(fe=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(fe=r.TEXTURE_3D);const ve=Le(I,A),ce=A.source;t.bindTexture(fe,I.__webglTexture,r.TEXTURE0+Q);const He=s.get(ce);if(ce.version!==He.__version||ve===!0){t.activeTexture(r.TEXTURE0+Q);const Ae=Mt.getPrimaries(Mt.workingColorSpace),Ye=A.colorSpace===Wr?null:Mt.getPrimaries(A.colorSpace),qe=A.colorSpace===Wr||Ae===Ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let xe=M(A.image,!1,o.maxTextureSize);xe=Ct(A,xe);const Ne=l.convert(A.format,A.colorSpace),Je=l.convert(A.type);let et=L(A.internalFormat,Ne,Je,A.colorSpace,A.isVideoTexture);re(fe,A);let Fe;const ft=A.mipmaps,it=A.isVideoTexture!==!0,At=He.__version===void 0||ve===!0,W=ce.dataReady,Ce=V(A,xe);if(A.isDepthTexture)et=P(A.format===Pa,A.type),At&&(it?t.texStorage2D(r.TEXTURE_2D,1,et,xe.width,xe.height):t.texImage2D(r.TEXTURE_2D,0,et,xe.width,xe.height,0,Ne,Je,null));else if(A.isDataTexture)if(ft.length>0){it&&At&&t.texStorage2D(r.TEXTURE_2D,Ce,et,ft[0].width,ft[0].height);for(let oe=0,de=ft.length;oe<de;oe++)Fe=ft[oe],it?W&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Fe.width,Fe.height,Ne,Je,Fe.data):t.texImage2D(r.TEXTURE_2D,oe,et,Fe.width,Fe.height,0,Ne,Je,Fe.data);A.generateMipmaps=!1}else it?(At&&t.texStorage2D(r.TEXTURE_2D,Ce,et,xe.width,xe.height),W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe.width,xe.height,Ne,Je,xe.data)):t.texImage2D(r.TEXTURE_2D,0,et,xe.width,xe.height,0,Ne,Je,xe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){it&&At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,et,ft[0].width,ft[0].height,xe.depth);for(let oe=0,de=ft.length;oe<de;oe++)if(Fe=ft[oe],A.format!==Ti)if(Ne!==null)if(it){if(W)if(A.layerUpdates.size>0){const Pe=f0(Fe.width,Fe.height,A.format,A.type);for(const be of A.layerUpdates){const rt=Fe.data.subarray(be*Pe/Fe.data.BYTES_PER_ELEMENT,(be+1)*Pe/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,be,Fe.width,Fe.height,1,Ne,rt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,Fe.width,Fe.height,xe.depth,Ne,Fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,oe,et,Fe.width,Fe.height,xe.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?W&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,Fe.width,Fe.height,xe.depth,Ne,Je,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,oe,et,Fe.width,Fe.height,xe.depth,0,Ne,Je,Fe.data)}else{it&&At&&t.texStorage2D(r.TEXTURE_2D,Ce,et,ft[0].width,ft[0].height);for(let oe=0,de=ft.length;oe<de;oe++)Fe=ft[oe],A.format!==Ti?Ne!==null?it?W&&t.compressedTexSubImage2D(r.TEXTURE_2D,oe,0,0,Fe.width,Fe.height,Ne,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,oe,et,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?W&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Fe.width,Fe.height,Ne,Je,Fe.data):t.texImage2D(r.TEXTURE_2D,oe,et,Fe.width,Fe.height,0,Ne,Je,Fe.data)}else if(A.isDataArrayTexture)if(it){if(At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,et,xe.width,xe.height,xe.depth),W)if(A.layerUpdates.size>0){const oe=f0(xe.width,xe.height,A.format,A.type);for(const de of A.layerUpdates){const Pe=xe.data.subarray(de*oe/xe.data.BYTES_PER_ELEMENT,(de+1)*oe/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,de,xe.width,xe.height,1,Ne,Je,Pe)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ne,Je,xe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,et,xe.width,xe.height,xe.depth,0,Ne,Je,xe.data);else if(A.isData3DTexture)it?(At&&t.texStorage3D(r.TEXTURE_3D,Ce,et,xe.width,xe.height,xe.depth),W&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ne,Je,xe.data)):t.texImage3D(r.TEXTURE_3D,0,et,xe.width,xe.height,xe.depth,0,Ne,Je,xe.data);else if(A.isFramebufferTexture){if(At)if(it)t.texStorage2D(r.TEXTURE_2D,Ce,et,xe.width,xe.height);else{let oe=xe.width,de=xe.height;for(let Pe=0;Pe<Ce;Pe++)t.texImage2D(r.TEXTURE_2D,Pe,et,oe,de,0,Ne,Je,null),oe>>=1,de>>=1}}else if(ft.length>0){if(it&&At){const oe=Ge(ft[0]);t.texStorage2D(r.TEXTURE_2D,Ce,et,oe.width,oe.height)}for(let oe=0,de=ft.length;oe<de;oe++)Fe=ft[oe],it?W&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Ne,Je,Fe):t.texImage2D(r.TEXTURE_2D,oe,et,Ne,Je,Fe);A.generateMipmaps=!1}else if(it){if(At){const oe=Ge(xe);t.texStorage2D(r.TEXTURE_2D,Ce,et,oe.width,oe.height)}W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Je,xe)}else t.texImage2D(r.TEXTURE_2D,0,et,Ne,Je,xe);y(A)&&x(fe),He.__version=ce.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function he(I,A,Q){if(A.image.length!==6)return;const fe=Le(I,A),ve=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+Q);const ce=s.get(ve);if(ve.version!==ce.__version||fe===!0){t.activeTexture(r.TEXTURE0+Q);const He=Mt.getPrimaries(Mt.workingColorSpace),Ae=A.colorSpace===Wr?null:Mt.getPrimaries(A.colorSpace),Ye=A.colorSpace===Wr||He===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const qe=A.isCompressedTexture||A.image[0].isCompressedTexture,xe=A.image[0]&&A.image[0].isDataTexture,Ne=[];for(let de=0;de<6;de++)!qe&&!xe?Ne[de]=M(A.image[de],!0,o.maxCubemapSize):Ne[de]=xe?A.image[de].image:A.image[de],Ne[de]=Ct(A,Ne[de]);const Je=Ne[0],et=l.convert(A.format,A.colorSpace),Fe=l.convert(A.type),ft=L(A.internalFormat,et,Fe,A.colorSpace),it=A.isVideoTexture!==!0,At=ce.__version===void 0||fe===!0,W=ve.dataReady;let Ce=V(A,Je);re(r.TEXTURE_CUBE_MAP,A);let oe;if(qe){it&&At&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,ft,Je.width,Je.height);for(let de=0;de<6;de++){oe=Ne[de].mipmaps;for(let Pe=0;Pe<oe.length;Pe++){const be=oe[Pe];A.format!==Ti?et!==null?it?W&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,be.width,be.height,et,be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,ft,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,be.width,be.height,et,Fe,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,ft,be.width,be.height,0,et,Fe,be.data)}}}else{if(oe=A.mipmaps,it&&At){oe.length>0&&Ce++;const de=Ge(Ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,ft,de.width,de.height)}for(let de=0;de<6;de++)if(xe){it?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ne[de].width,Ne[de].height,et,Fe,Ne[de].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,Ne[de].width,Ne[de].height,0,et,Fe,Ne[de].data);for(let Pe=0;Pe<oe.length;Pe++){const rt=oe[Pe].image[de].image;it?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,rt.width,rt.height,et,Fe,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,ft,rt.width,rt.height,0,et,Fe,rt.data)}}else{it?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,et,Fe,Ne[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,et,Fe,Ne[de]);for(let Pe=0;Pe<oe.length;Pe++){const be=oe[Pe];it?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,et,Fe,be.image[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,ft,et,Fe,be.image[de])}}}y(A)&&x(r.TEXTURE_CUBE_MAP),ce.__version=ve.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Me(I,A,Q,fe,ve,ce){const He=l.convert(Q.format,Q.colorSpace),Ae=l.convert(Q.type),Ye=L(Q.internalFormat,He,Ae,Q.colorSpace),qe=s.get(A),xe=s.get(Q);if(xe.__renderTarget=A,!qe.__hasExternalTextures){const Ne=Math.max(1,A.width>>ce),Je=Math.max(1,A.height>>ce);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,ce,Ye,Ne,Je,A.depth,0,He,Ae,null):t.texImage2D(ve,ce,Ye,Ne,Je,0,He,Ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),ct(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,ve,xe.__webglTexture,0,ht(A)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,fe,ve,xe.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(I,A,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,I),A.depthBuffer){const fe=A.depthTexture,ve=fe&&fe.isDepthTexture?fe.type:null,ce=P(A.stencilBuffer,ve),He=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=ht(A);ct(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ae,ce,A.width,A.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,ce,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,ce,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,He,r.RENDERBUFFER,I)}else{const fe=A.textures;for(let ve=0;ve<fe.length;ve++){const ce=fe[ve],He=l.convert(ce.format,ce.colorSpace),Ae=l.convert(ce.type),Ye=L(ce.internalFormat,He,Ae,ce.colorSpace),qe=ht(A);Q&&ct(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,Ye,A.width,A.height):ct(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe,Ye,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ye,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=s.get(A.depthTexture);fe.__renderTarget=A,(!fe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ue(A.depthTexture,0);const ve=fe.__webglTexture,ce=ht(A);if(A.depthTexture.format===ba)ct(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(A.depthTexture.format===Pa)ct(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Xe(I){const A=s.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const fe=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),fe){const ve=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,fe.removeEventListener("dispose",ve)};fe.addEventListener("dispose",ve),A.__depthDisposeCallback=ve}A.__boundDepthTexture=fe}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const fe=I.texture.mipmaps;fe&&fe.length>0?we(A.__webglFramebuffer[0],I):we(A.__webglFramebuffer,I)}else if(Q){A.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[fe]),A.__webglDepthbuffer[fe]===void 0)A.__webglDepthbuffer[fe]=r.createRenderbuffer(),_e(A.__webglDepthbuffer[fe],I,!1);else{const ve=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=A.__webglDepthbuffer[fe];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ce)}}else{const fe=I.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),_e(A.__webglDepthbuffer,I,!1);else{const ve=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ce)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(I,A,Q){const fe=s.get(I);A!==void 0&&Me(fe.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&Xe(I)}function Lt(I){const A=I.texture,Q=s.get(I),fe=s.get(A);I.addEventListener("dispose",C);const ve=I.textures,ce=I.isWebGLCubeRenderTarget===!0,He=ve.length>1;if(He||(fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture()),fe.__version=A.version,c.memory.textures++),ce){Q.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[Ae]=[];for(let Ye=0;Ye<A.mipmaps.length;Ye++)Q.__webglFramebuffer[Ae][Ye]=r.createFramebuffer()}else Q.__webglFramebuffer[Ae]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)Q.__webglFramebuffer[Ae]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(He)for(let Ae=0,Ye=ve.length;Ae<Ye;Ae++){const qe=s.get(ve[Ae]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),c.memory.textures++)}if(I.samples>0&&ct(I)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const Ye=ve[Ae];Q.__webglColorRenderbuffer[Ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ae]);const qe=l.convert(Ye.format,Ye.colorSpace),xe=l.convert(Ye.type),Ne=L(Ye.internalFormat,qe,xe,Ye.colorSpace,I.isXRRenderTarget===!0),Je=ht(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,Ne,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),_e(Q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,fe.__webglTexture),re(r.TEXTURE_CUBE_MAP,A);for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ye=0;Ye<A.mipmaps.length;Ye++)Me(Q.__webglFramebuffer[Ae][Ye],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ye);else Me(Q.__webglFramebuffer[Ae],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(A)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Ae=0,Ye=ve.length;Ae<Ye;Ae++){const qe=ve[Ae],xe=s.get(qe);t.bindTexture(r.TEXTURE_2D,xe.__webglTexture),re(r.TEXTURE_2D,qe),Me(Q.__webglFramebuffer,I,qe,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,0),y(qe)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let Ae=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,fe.__webglTexture),re(Ae,A),A.mipmaps&&A.mipmaps.length>0)for(let Ye=0;Ye<A.mipmaps.length;Ye++)Me(Q.__webglFramebuffer[Ye],I,A,r.COLOR_ATTACHMENT0,Ae,Ye);else Me(Q.__webglFramebuffer,I,A,r.COLOR_ATTACHMENT0,Ae,0);y(A)&&x(Ae),t.unbindTexture()}I.depthBuffer&&Xe(I)}function Dt(I){const A=I.textures;for(let Q=0,fe=A.length;Q<fe;Q++){const ve=A[Q];if(y(ve)){const ce=D(I),He=s.get(ve).__webglTexture;t.bindTexture(ce,He),x(ce),t.unbindTexture()}}}const ut=[],z=[];function Ln(I){if(I.samples>0){if(ct(I)===!1){const A=I.textures,Q=I.width,fe=I.height;let ve=r.COLOR_BUFFER_BIT;const ce=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=s.get(I),Ae=A.length>1;if(Ae)for(let qe=0;qe<A.length;qe++)t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const Ye=I.texture.mipmaps;Ye&&Ye.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let qe=0;qe<A.length;qe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[qe]);const xe=s.get(A[qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xe,0)}r.blitFramebuffer(0,0,Q,fe,0,0,Q,fe,ve,r.NEAREST),h===!0&&(ut.length=0,z.length=0,ut.push(r.COLOR_ATTACHMENT0+qe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ut.push(ce),z.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,z)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ae)for(let qe=0;qe<A.length;qe++){t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.RENDERBUFFER,He.__webglColorRenderbuffer[qe]);const xe=s.get(A[qe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.TEXTURE_2D,xe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&h){const A=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function ht(I){return Math.min(o.maxSamples,I.samples)}function ct(I){const A=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function je(I){const A=c.render.frame;v.get(I)!==A&&(v.set(I,A),I.update())}function Ct(I,A){const Q=I.colorSpace,fe=I.format,ve=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==wo&&Q!==Wr&&(Mt.getTransfer(Q)===Rt?(fe!==Ti||ve!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}function Ge(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=ne,this.setTexture2D=ue,this.setTexture2DArray=ee,this.setTexture3D=pe,this.setTextureCube=H,this.rebindTextures=Ve,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ct}function OC(r,e){function t(s,o=Wr){let l;const c=Mt.getTransfer(o);if(s===Hi)return r.UNSIGNED_BYTE;if(s===wh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Th)return r.UNSIGNED_SHORT_5_5_5_1;if(s===pv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===dv)return r.BYTE;if(s===hv)return r.SHORT;if(s===Ca)return r.UNSIGNED_SHORT;if(s===Eh)return r.INT;if(s===Ms)return r.UNSIGNED_INT;if(s===ur)return r.FLOAT;if(s===Fa)return r.HALF_FLOAT;if(s===mv)return r.ALPHA;if(s===gv)return r.RGB;if(s===Ti)return r.RGBA;if(s===ba)return r.DEPTH_COMPONENT;if(s===Pa)return r.DEPTH_STENCIL;if(s===vv)return r.RED;if(s===Ah)return r.RED_INTEGER;if(s===_v)return r.RG;if(s===Ch)return r.RG_INTEGER;if(s===Rh)return r.RGBA_INTEGER;if(s===Tu||s===Au||s===Cu||s===Ru)if(c===Rt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Tu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Au)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Cu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ru)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Tu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Au)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Cu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ru)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kd||s===Bd||s===zd||s===Hd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===kd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vd||s===Gd||s===Wd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Vd||s===Gd)return c===Rt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Wd)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xd||s===jd||s===$d||s===qd||s===Yd||s===Kd||s===Zd||s===Qd||s===Jd||s===eh||s===th||s===nh||s===ih||s===rh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Xd)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jd)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$d)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qd)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yd)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kd)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zd)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qd)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jd)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===eh)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===th)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nh)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ih)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rh)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bu||s===sh||s===oh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===bu)return c===Rt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===sh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===oh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===xv||s===ah||s===lh||s===uh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===bu)return l.COMPRESSED_RED_RGTC1_EXT;if(s===ah)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===lh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===uh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ra?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const kC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BC=`
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

}`;class zC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new zn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Gi({vertexShader:kC,fragmentShader:BC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ii(new Ba(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HC extends Co{constructor(e,t){super();const s=this;let o=null,l=1,c=null,f="local-floor",h=1,p=null,v=null,m=null,_=null,S=null,E=null;const M=new zC,y=t.getContextAttributes();let x=null,D=null;const L=[],P=[],V=new Tt;let U=null;const C=new ti;C.viewport=new Ht;const F=new ti;F.viewport=new Ht;const R=[C,F],T=new l1;let k=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let he=L[J];return he===void 0&&(he=new ud,L[J]=he),he.getTargetRaySpace()},this.getControllerGrip=function(J){let he=L[J];return he===void 0&&(he=new ud,L[J]=he),he.getGripSpace()},this.getHand=function(J){let he=L[J];return he===void 0&&(he=new ud,L[J]=he),he.getHandSpace()};function Z(J){const he=P.indexOf(J.inputSource);if(he===-1)return;const Me=L[he];Me!==void 0&&(Me.update(J.inputSource,J.frame,p||c),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function se(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",se),o.removeEventListener("inputsourceschange",ue);for(let J=0;J<L.length;J++){const he=P[J];he!==null&&(P[J]=null,L[J].disconnect(he))}k=null,ne=null,M.reset(),e.setRenderTarget(x),S=null,_=null,m=null,o=null,D=null,Le.stop(),s.isPresenting=!1,e.setPixelRatio(U),e.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",se),o.addEventListener("inputsourceschange",ue),y.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,_e=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=y.stencil?Pa:ba,_e=y.stencil?Ra:Ms);const Xe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:l};m=new XRWebGLBinding(o,t),_=m.createProjectionLayer(Xe),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new $r(_.textureWidth,_.textureHeight,{format:Ti,type:Hi,depthTexture:new Lv(_.textureWidth,_.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,Me),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new $r(S.framebufferWidth,S.framebufferHeight,{format:Ti,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await o.requestReferenceSpace(f),Le.setContext(o),Le.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ue(J){for(let he=0;he<J.removed.length;he++){const Me=J.removed[he],_e=P.indexOf(Me);_e>=0&&(P[_e]=null,L[_e].disconnect(Me))}for(let he=0;he<J.added.length;he++){const Me=J.added[he];let _e=P.indexOf(Me);if(_e===-1){for(let Xe=0;Xe<L.length;Xe++)if(Xe>=P.length){P.push(Me),_e=Xe;break}else if(P[Xe]===null){P[Xe]=Me,_e=Xe;break}if(_e===-1)break}const we=L[_e];we&&we.connect(Me)}}const ee=new $,pe=new $;function H(J,he,Me){ee.setFromMatrixPosition(he.matrixWorld),pe.setFromMatrixPosition(Me.matrixWorld);const _e=ee.distanceTo(pe),we=he.projectionMatrix.elements,Xe=Me.projectionMatrix.elements,Ve=we[14]/(we[10]-1),Lt=we[14]/(we[10]+1),Dt=(we[9]+1)/we[5],ut=(we[9]-1)/we[5],z=(we[8]-1)/we[0],Ln=(Xe[8]+1)/Xe[0],ht=Ve*z,ct=Ve*Ln,je=_e/(-z+Ln),Ct=je*-z;if(he.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ct),J.translateZ(je),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),we[10]===-1)J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ge=Ve+je,I=Lt+je,A=ht-Ct,Q=ct+(_e-Ct),fe=Dt*Lt/I*Ge,ve=ut*Lt/I*Ge;J.projectionMatrix.makePerspective(A,Q,fe,ve,Ge,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ae(J,he){he===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(he.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let he=J.near,Me=J.far;M.texture!==null&&(M.depthNear>0&&(he=M.depthNear),M.depthFar>0&&(Me=M.depthFar)),T.near=F.near=C.near=he,T.far=F.far=C.far=Me,(k!==T.near||ne!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),k=T.near,ne=T.far),C.layers.mask=J.layers.mask|2,F.layers.mask=J.layers.mask|4,T.layers.mask=C.layers.mask|F.layers.mask;const _e=J.parent,we=T.cameras;ae(T,_e);for(let Xe=0;Xe<we.length;Xe++)ae(we[Xe],_e);we.length===2?H(T,C,F):T.projectionMatrix.copy(C.projectionMatrix),le(J,T,_e)};function le(J,he,Me){Me===null?J.matrix.copy(he.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(he.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=La*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(_===null&&S===null))return h},this.setFoveation=function(J){h=J,_!==null&&(_.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(T)};let O=null;function re(J,he){if(v=he.getViewerPose(p||c),E=he,v!==null){const Me=v.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let _e=!1;Me.length!==T.cameras.length&&(T.cameras.length=0,_e=!0);for(let Ve=0;Ve<Me.length;Ve++){const Lt=Me[Ve];let Dt=null;if(S!==null)Dt=S.getViewport(Lt);else{const z=m.getViewSubImage(_,Lt);Dt=z.viewport,Ve===0&&(e.setRenderTargetTextures(D,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(D))}let ut=R[Ve];ut===void 0&&(ut=new ti,ut.layers.enable(Ve),ut.viewport=new Ht,R[Ve]=ut),ut.matrix.fromArray(Lt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Lt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Ve===0&&(T.matrix.copy(ut.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),_e===!0&&T.cameras.push(ut)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&m){const Ve=m.getDepthInformation(Me[0]);Ve&&Ve.isValid&&Ve.texture&&M.init(e,Ve,o.renderState)}}for(let Me=0;Me<L.length;Me++){const _e=P[Me],we=L[Me];_e!==null&&we!==void 0&&we.update(_e,he,p||c)}O&&O(J,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),E=null}const Le=new Uv;Le.setAnimationLoop(re),this.setAnimationLoop=function(J){O=J},this.dispose=function(){}}}const ps=new Ci,VC=new Pt;function GC(r,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,Rv(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,D,L,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),m(y,x)):x.isMeshPhongMaterial?(l(y,x),v(y,x)):x.isMeshStandardMaterial?(l(y,x),_(y,x),x.isMeshPhysicalMaterial&&S(y,x,P)):x.isMeshMatcapMaterial?(l(y,x),E(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),M(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?h(y,x,D,L):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Bn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Bn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),L=D.envMap,P=D.envMapRotation;L&&(y.envMap.value=L,ps.copy(P),ps.x*=-1,ps.y*=-1,ps.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),y.envMapRotation.value.setFromMatrix4(VC.makeRotationFromEuler(ps)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function h(y,x,D,L){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=L*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function m(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Bn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function WC(r,e,t,s){let o={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,L){const P=L.program;s.uniformBlockBinding(D,P)}function p(D,L){let P=o[D.id];P===void 0&&(E(D),P=v(D),o[D.id]=P,D.addEventListener("dispose",y));const V=L.program;s.updateUBOMapping(D,V);const U=e.render.frame;l[D.id]!==U&&(_(D),l[D.id]=U)}function v(D){const L=m();D.__bindingPointIndex=L;const P=r.createBuffer(),V=D.__size,U=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,V,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,P),P}function m(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const L=o[D.id],P=D.uniforms,V=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let U=0,C=P.length;U<C;U++){const F=Array.isArray(P[U])?P[U]:[P[U]];for(let R=0,T=F.length;R<T;R++){const k=F[R];if(S(k,U,R,V)===!0){const ne=k.__offset,Z=Array.isArray(k.value)?k.value:[k.value];let se=0;for(let ue=0;ue<Z.length;ue++){const ee=Z[ue],pe=M(ee);typeof ee=="number"||typeof ee=="boolean"?(k.__data[0]=ee,r.bufferSubData(r.UNIFORM_BUFFER,ne+se,k.__data)):ee.isMatrix3?(k.__data[0]=ee.elements[0],k.__data[1]=ee.elements[1],k.__data[2]=ee.elements[2],k.__data[3]=0,k.__data[4]=ee.elements[3],k.__data[5]=ee.elements[4],k.__data[6]=ee.elements[5],k.__data[7]=0,k.__data[8]=ee.elements[6],k.__data[9]=ee.elements[7],k.__data[10]=ee.elements[8],k.__data[11]=0):(ee.toArray(k.__data,se),se+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ne,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,L,P,V){const U=D.value,C=L+"_"+P;if(V[C]===void 0)return typeof U=="number"||typeof U=="boolean"?V[C]=U:V[C]=U.clone(),!0;{const F=V[C];if(typeof U=="number"||typeof U=="boolean"){if(F!==U)return V[C]=U,!0}else if(F.equals(U)===!1)return F.copy(U),!0}return!1}function E(D){const L=D.uniforms;let P=0;const V=16;for(let C=0,F=L.length;C<F;C++){const R=Array.isArray(L[C])?L[C]:[L[C]];for(let T=0,k=R.length;T<k;T++){const ne=R[T],Z=Array.isArray(ne.value)?ne.value:[ne.value];for(let se=0,ue=Z.length;se<ue;se++){const ee=Z[se],pe=M(ee),H=P%V,ae=H%pe.boundary,le=H+ae;P+=ae,le!==0&&V-le<pe.storage&&(P+=V-le),ne.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=P,P+=pe.storage}}}const U=P%V;return U>0&&(P+=V-U),D.__size=P,D.__cache={},this}function M(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function y(D){const L=D.target;L.removeEventListener("dispose",y);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function x(){for(const D in o)r.deleteBuffer(o[D]);c=[],o={},l={}}return{bind:h,update:p,dispose:x}}class XC{constructor(e={}){const{canvas:t=xE(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),M=new Int32Array(4);let y=null,x=null;const D=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let V=!1;this._outputColorSpace=Pn;let U=0,C=0,F=null,R=-1,T=null;const k=new Ht,ne=new Ht;let Z=null;const se=new at(0);let ue=0,ee=t.width,pe=t.height,H=1,ae=null,le=null;const O=new Ht(0,0,ee,pe),re=new Ht(0,0,ee,pe);let Le=!1;const J=new Ih;let he=!1,Me=!1;const _e=new Pt,we=new Pt,Xe=new $,Ve=new Ht,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function ut(){return F===null?H:1}let z=s;function Ln(b,X){return t.getContext(b,X)}try{const b={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sh}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",be,!1),z===null){const X="webgl2";if(z=Ln(X,b),z===null)throw Ln(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ht,ct,je,Ct,Ge,I,A,Q,fe,ve,ce,He,Ae,Ye,qe,xe,Ne,Je,et,Fe,ft,it,At,W;function Ce(){ht=new tA(z),ht.init(),it=new OC(z,ht),ct=new qT(z,ht,e,it),je=new NC(z,ht),ct.reverseDepthBuffer&&_&&je.buffers.depth.setReversed(!0),Ct=new rA(z),Ge=new MC,I=new FC(z,ht,je,Ge,ct,it,Ct),A=new KT(P),Q=new eA(P),fe=new c1(z),At=new jT(z,fe),ve=new nA(z,fe,Ct,At),ce=new oA(z,ve,fe,Ct),et=new sA(z,ct,I),xe=new YT(Ge),He=new SC(P,A,Q,ht,ct,At,xe),Ae=new GC(P,Ge),Ye=new wC,qe=new PC(ht),Je=new XT(P,A,Q,je,ce,S,h),Ne=new IC(P,ce,ct),W=new WC(z,Ct,ct,je),Fe=new $T(z,ht,Ct),ft=new iA(z,ht,Ct),Ct.programs=He.programs,P.capabilities=ct,P.extensions=ht,P.properties=Ge,P.renderLists=Ye,P.shadowMap=Ne,P.state=je,P.info=Ct}Ce();const oe=new HC(P,z);this.xr=oe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=ht.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ht.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(ee,pe,!1))},this.getSize=function(b){return b.set(ee,pe)},this.setSize=function(b,X,ie=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=b,pe=X,t.width=Math.floor(b*H),t.height=Math.floor(X*H),ie===!0&&(t.style.width=b+"px",t.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(ee*H,pe*H).floor()},this.setDrawingBufferSize=function(b,X,ie){ee=b,pe=X,H=ie,t.width=Math.floor(b*ie),t.height=Math.floor(X*ie),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy(O)},this.setViewport=function(b,X,ie,Y){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,X,ie,Y),je.viewport(k.copy(O).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,X,ie,Y){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,X,ie,Y),je.scissor(ne.copy(re).multiplyScalar(H).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(b){je.setScissorTest(Le=b)},this.setOpaqueSort=function(b){ae=b},this.setTransparentSort=function(b){le=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,ie=!0){let Y=0;if(b){let j=!1;if(F!==null){const Se=F.texture.format;j=Se===Rh||Se===Ch||Se===Ah}if(j){const Se=F.texture.type,Re=Se===Hi||Se===Ms||Se===Ca||Se===Ra||Se===wh||Se===Th,De=Je.getClearColor(),Oe=Je.getClearAlpha(),tt=De.r,Qe=De.g,Be=De.b;Re?(E[0]=tt,E[1]=Qe,E[2]=Be,E[3]=Oe,z.clearBufferuiv(z.COLOR,0,E)):(M[0]=tt,M[1]=Qe,M[2]=Be,M[3]=Oe,z.clearBufferiv(z.COLOR,0,M))}else Y|=z.COLOR_BUFFER_BIT}X&&(Y|=z.DEPTH_BUFFER_BIT),ie&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Je.dispose(),Ye.dispose(),qe.dispose(),Ge.dispose(),A.dispose(),Q.dispose(),ce.dispose(),At.dispose(),W.dispose(),He.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ws),oe.removeEventListener("sessionend",mr),Wi.stop()};function de(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const b=Ct.autoReset,X=Ne.enabled,ie=Ne.autoUpdate,Y=Ne.needsUpdate,j=Ne.type;Ce(),Ct.autoReset=b,Ne.enabled=X,Ne.autoUpdate=ie,Ne.needsUpdate=Y,Ne.type=j}function be(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function rt(b){const X=b.target;X.removeEventListener("dispose",rt),Nt(X)}function Nt(b){nn(b),Ge.remove(b)}function nn(b){const X=Ge.get(b).programs;X!==void 0&&(X.forEach(function(ie){He.releaseProgram(ie)}),b.isShaderMaterial&&He.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,ie,Y,j,Se){X===null&&(X=Lt);const Re=j.isMesh&&j.matrixWorld.determinant()<0,De=Ga(b,X,ie,Y,j);je.setMaterial(Y,Re);let Oe=ie.index,tt=1;if(Y.wireframe===!0){if(Oe=ve.getWireframeAttribute(ie),Oe===void 0)return;tt=2}const Qe=ie.drawRange,Be=ie.attributes.position;let gt=Qe.start*tt,st=(Qe.start+Qe.count)*tt;Se!==null&&(gt=Math.max(gt,Se.start*tt),st=Math.min(st,(Se.start+Se.count)*tt)),Oe!==null?(gt=Math.max(gt,0),st=Math.min(st,Oe.count)):Be!=null&&(gt=Math.max(gt,0),st=Math.min(st,Be.count));const jt=st-gt;if(jt<0||jt===1/0)return;At.setup(j,Y,De,ie,Oe);let kt,vt=Fe;if(Oe!==null&&(kt=fe.get(Oe),vt=ft,vt.setIndex(kt)),j.isMesh)Y.wireframe===!0?(je.setLineWidth(Y.wireframeLinewidth*ut()),vt.setMode(z.LINES)):vt.setMode(z.TRIANGLES);else if(j.isLine){let $e=Y.linewidth;$e===void 0&&($e=1),je.setLineWidth($e*ut()),j.isLineSegments?vt.setMode(z.LINES):j.isLineLoop?vt.setMode(z.LINE_LOOP):vt.setMode(z.LINE_STRIP)}else j.isPoints?vt.setMode(z.POINTS):j.isSprite&&vt.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Pu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))vt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const $e=j._multiDrawStarts,$t=j._multiDrawCounts,pt=j._multiDrawCount,Sn=Oe?fe.get(Oe).bytesPerElement:1,vr=Ge.get(Y).currentProgram.getUniforms();for(let In=0;In<pt;In++)vr.setValue(z,"_gl_DrawID",In),vt.render($e[In]/Sn,$t[In])}else if(j.isInstancedMesh)vt.renderInstances(gt,jt,j.count);else if(ie.isInstancedBufferGeometry){const $e=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,$t=Math.min(ie.instanceCount,$e);vt.renderInstances(gt,jt,$t)}else vt.render(gt,jt)};function _t(b,X,ie){b.transparent===!0&&b.side===lr&&b.forceSinglePass===!1?(b.side=Bn,b.needsUpdate=!0,Ts(b,X,ie),b.side=pr,b.needsUpdate=!0,Ts(b,X,ie),b.side=lr):Ts(b,X,ie)}this.compile=function(b,X,ie=null){ie===null&&(ie=b),x=qe.get(ie),x.init(X),L.push(x),ie.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),b!==ie&&b.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const Y=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Se=j.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const De=Se[Re];_t(De,ie,j),Y.add(De)}else _t(Se,ie,j),Y.add(Se)}),x=L.pop(),Y},this.compileAsync=function(b,X,ie=null){const Y=this.compile(b,X,ie);return new Promise(j=>{function Se(){if(Y.forEach(function(Re){Ge.get(Re).currentProgram.isReady()&&Y.delete(Re)}),Y.size===0){j(b);return}setTimeout(Se,10)}ht.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Hn=null;function Dn(b){Hn&&Hn(b)}function ws(){Wi.stop()}function mr(){Wi.start()}const Wi=new Uv;Wi.setAnimationLoop(Dn),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(b){Hn=b,oe.setAnimationLoop(b),b===null?Wi.stop():Wi.start()},oe.addEventListener("sessionstart",ws),oe.addEventListener("sessionend",mr),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(X),X=oe.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,X,F),x=qe.get(b,L.length),x.init(X),L.push(x),we.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),J.setFromProjectionMatrix(we),Me=this.localClippingEnabled,he=xe.init(this.clippingPlanes,Me),y=Ye.get(b,D.length),y.init(),D.push(y),oe.enabled===!0&&oe.isPresenting===!0){const Se=P.xr.getDepthSensingMesh();Se!==null&&Xi(Se,X,-1/0,P.sortObjects)}Xi(b,X,0,P.sortObjects),y.finish(),P.sortObjects===!0&&y.sort(ae,le),Dt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Dt&&Je.addToRenderList(y,b),this.info.render.frame++,he===!0&&xe.beginShadows();const ie=x.state.shadowsArray;Ne.render(ie,b,X),he===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=y.opaque,j=y.transmissive;if(x.setupLights(),X.isArrayCamera){const Se=X.cameras;if(j.length>0)for(let Re=0,De=Se.length;Re<De;Re++){const Oe=Se[Re];Kr(Y,j,b,Oe)}Dt&&Je.render(b);for(let Re=0,De=Se.length;Re<De;Re++){const Oe=Se[Re];Yr(y,b,Oe,Oe.viewport)}}else j.length>0&&Kr(Y,j,b,X),Dt&&Je.render(b),Yr(y,b,X);F!==null&&C===0&&(I.updateMultisampleRenderTarget(F),I.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(P,b,X),At.resetDefaultState(),R=-1,T=null,L.pop(),L.length>0?(x=L[L.length-1],he===!0&&xe.setGlobalState(P.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Xi(b,X,ie,Y){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)ie=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){Y&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(we);const Re=ce.update(b),De=b.material;De.visible&&y.push(b,Re,De,ie,Ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const Re=ce.update(b),De=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ve.copy(Re.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(we)),Array.isArray(De)){const Oe=Re.groups;for(let tt=0,Qe=Oe.length;tt<Qe;tt++){const Be=Oe[tt],gt=De[Be.materialIndex];gt&&gt.visible&&y.push(b,Re,gt,ie,Ve.z,Be)}}else De.visible&&y.push(b,Re,De,ie,Ve.z,null)}}const Se=b.children;for(let Re=0,De=Se.length;Re<De;Re++)Xi(Se[Re],X,ie,Y)}function Yr(b,X,ie,Y){const j=b.opaque,Se=b.transmissive,Re=b.transparent;x.setupLightsView(ie),he===!0&&xe.setGlobalState(P.clippingPlanes,ie),Y&&je.viewport(k.copy(Y)),j.length>0&&gr(j,X,ie),Se.length>0&&gr(Se,X,ie),Re.length>0&&gr(Re,X,ie),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Kr(b,X,ie,Y){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[Y.id]===void 0&&(x.state.transmissionRenderTarget[Y.id]=new $r(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Fa:Hi,minFilter:Ss,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Se=x.state.transmissionRenderTarget[Y.id],Re=Y.viewport||k;Se.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);const De=P.getRenderTarget();P.setRenderTarget(Se),P.getClearColor(se),ue=P.getClearAlpha(),ue<1&&P.setClearColor(16777215,.5),P.clear(),Dt&&Je.render(ie);const Oe=P.toneMapping;P.toneMapping=jr;const tt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),x.setupLightsView(Y),he===!0&&xe.setGlobalState(P.clippingPlanes,Y),gr(b,ie,Y),I.updateMultisampleRenderTarget(Se),I.updateRenderTargetMipmap(Se),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Be=0,gt=X.length;Be<gt;Be++){const st=X[Be],jt=st.object,kt=st.geometry,vt=st.material,$e=st.group;if(vt.side===lr&&jt.layers.test(Y.layers)){const $t=vt.side;vt.side=Bn,vt.needsUpdate=!0,Ha(jt,ie,Y,kt,vt,$e),vt.side=$t,vt.needsUpdate=!0,Qe=!0}}Qe===!0&&(I.updateMultisampleRenderTarget(Se),I.updateRenderTargetMipmap(Se))}P.setRenderTarget(De),P.setClearColor(se,ue),tt!==void 0&&(Y.viewport=tt),P.toneMapping=Oe}function gr(b,X,ie){const Y=X.isScene===!0?X.overrideMaterial:null;for(let j=0,Se=b.length;j<Se;j++){const Re=b[j],De=Re.object,Oe=Re.geometry,tt=Re.group;let Qe=Re.material;Qe.allowOverride===!0&&Y!==null&&(Qe=Y),De.layers.test(ie.layers)&&Ha(De,X,ie,Oe,Qe,tt)}}function Ha(b,X,ie,Y,j,Se){b.onBeforeRender(P,X,ie,Y,j,Se),b.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(P,X,ie,Y,b,Se),j.transparent===!0&&j.side===lr&&j.forceSinglePass===!1?(j.side=Bn,j.needsUpdate=!0,P.renderBufferDirect(ie,X,Y,j,b,Se),j.side=pr,j.needsUpdate=!0,P.renderBufferDirect(ie,X,Y,j,b,Se),j.side=lr):P.renderBufferDirect(ie,X,Y,j,b,Se),b.onAfterRender(P,X,ie,Y,j,Se)}function Ts(b,X,ie){X.isScene!==!0&&(X=Lt);const Y=Ge.get(b),j=x.state.lights,Se=x.state.shadowsArray,Re=j.state.version,De=He.getParameters(b,j.state,Se,X,ie),Oe=He.getProgramCacheKey(De);let tt=Y.programs;Y.environment=b.isMeshStandardMaterial?X.environment:null,Y.fog=X.fog,Y.envMap=(b.isMeshStandardMaterial?Q:A).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,tt===void 0&&(b.addEventListener("dispose",rt),tt=new Map,Y.programs=tt);let Qe=tt.get(Oe);if(Qe!==void 0){if(Y.currentProgram===Qe&&Y.lightsStateVersion===Re)return bi(b,De),Qe}else De.uniforms=He.getUniforms(b),b.onBeforeCompile(De,P),Qe=He.acquireProgram(De,Oe),tt.set(Oe,Qe),Y.uniforms=De.uniforms;const Be=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Be.clippingPlanes=xe.uniform),bi(b,De),Y.needsLights=nc(b),Y.lightsStateVersion=Re,Y.needsLights&&(Be.ambientLightColor.value=j.state.ambient,Be.lightProbe.value=j.state.probe,Be.directionalLights.value=j.state.directional,Be.directionalLightShadows.value=j.state.directionalShadow,Be.spotLights.value=j.state.spot,Be.spotLightShadows.value=j.state.spotShadow,Be.rectAreaLights.value=j.state.rectArea,Be.ltc_1.value=j.state.rectAreaLTC1,Be.ltc_2.value=j.state.rectAreaLTC2,Be.pointLights.value=j.state.point,Be.pointLightShadows.value=j.state.pointShadow,Be.hemisphereLights.value=j.state.hemi,Be.directionalShadowMap.value=j.state.directionalShadowMap,Be.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Be.spotShadowMap.value=j.state.spotShadowMap,Be.spotLightMatrix.value=j.state.spotLightMatrix,Be.spotLightMap.value=j.state.spotLightMap,Be.pointShadowMap.value=j.state.pointShadowMap,Be.pointShadowMatrix.value=j.state.pointShadowMatrix),Y.currentProgram=Qe,Y.uniformsList=null,Qe}function Va(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=Du.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function bi(b,X){const ie=Ge.get(b);ie.outputColorSpace=X.outputColorSpace,ie.batching=X.batching,ie.batchingColor=X.batchingColor,ie.instancing=X.instancing,ie.instancingColor=X.instancingColor,ie.instancingMorph=X.instancingMorph,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function Ga(b,X,ie,Y,j){X.isScene!==!0&&(X=Lt),I.resetTextureUnits();const Se=X.fog,Re=Y.isMeshStandardMaterial?X.environment:null,De=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:wo,Oe=(Y.isMeshStandardMaterial?Q:A).get(Y.envMap||Re),tt=Y.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Qe=!!ie.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Be=!!ie.morphAttributes.position,gt=!!ie.morphAttributes.normal,st=!!ie.morphAttributes.color;let jt=jr;Y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(jt=P.toneMapping);const kt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,vt=kt!==void 0?kt.length:0,$e=Ge.get(Y),$t=x.state.lights;if(he===!0&&(Me===!0||b!==T)){const gn=b===T&&Y.id===R;xe.setState(Y,b,gn)}let pt=!1;Y.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==$t.state.version||$e.outputColorSpace!==De||j.isBatchedMesh&&$e.batching===!1||!j.isBatchedMesh&&$e.batching===!0||j.isBatchedMesh&&$e.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&$e.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&$e.instancing===!1||!j.isInstancedMesh&&$e.instancing===!0||j.isSkinnedMesh&&$e.skinning===!1||!j.isSkinnedMesh&&$e.skinning===!0||j.isInstancedMesh&&$e.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&$e.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&$e.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&$e.instancingMorph===!1&&j.morphTexture!==null||$e.envMap!==Oe||Y.fog===!0&&$e.fog!==Se||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==xe.numPlanes||$e.numIntersection!==xe.numIntersection)||$e.vertexAlphas!==tt||$e.vertexTangents!==Qe||$e.morphTargets!==Be||$e.morphNormals!==gt||$e.morphColors!==st||$e.toneMapping!==jt||$e.morphTargetsCount!==vt)&&(pt=!0):(pt=!0,$e.__version=Y.version);let Sn=$e.currentProgram;pt===!0&&(Sn=Ts(Y,X,j));let vr=!1,In=!1,ji=!1;const bt=Sn.getUniforms(),Mn=$e.uniforms;if(je.useProgram(Sn.program)&&(vr=!0,In=!0,ji=!0),Y.id!==R&&(R=Y.id,In=!0),vr||T!==b){je.buffers.depth.getReversed()?(_e.copy(b.projectionMatrix),SE(_e),ME(_e),bt.setValue(z,"projectionMatrix",_e)):bt.setValue(z,"projectionMatrix",b.projectionMatrix),bt.setValue(z,"viewMatrix",b.matrixWorldInverse);const un=bt.map.cameraPosition;un!==void 0&&un.setValue(z,Xe.setFromMatrixPosition(b.matrixWorld)),ct.logarithmicDepthBuffer&&bt.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&bt.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),T!==b&&(T=b,In=!0,ji=!0)}if(j.isSkinnedMesh){bt.setOptional(z,j,"bindMatrix"),bt.setOptional(z,j,"bindMatrixInverse");const gn=j.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),bt.setValue(z,"boneTexture",gn.boneTexture,I))}j.isBatchedMesh&&(bt.setOptional(z,j,"batchingTexture"),bt.setValue(z,"batchingTexture",j._matricesTexture,I),bt.setOptional(z,j,"batchingIdTexture"),bt.setValue(z,"batchingIdTexture",j._indirectTexture,I),bt.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&bt.setValue(z,"batchingColorTexture",j._colorsTexture,I));const ln=ie.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&et.update(j,ie,Sn),(In||$e.receiveShadow!==j.receiveShadow)&&($e.receiveShadow=j.receiveShadow,bt.setValue(z,"receiveShadow",j.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Mn.envMap.value=Oe,Mn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&X.environment!==null&&(Mn.envMapIntensity.value=X.environmentIntensity),In&&(bt.setValue(z,"toneMappingExposure",P.toneMappingExposure),$e.needsLights&&Wa(Mn,ji),Se&&Y.fog===!0&&Ae.refreshFogUniforms(Mn,Se),Ae.refreshMaterialUniforms(Mn,Y,H,pe,x.state.transmissionRenderTarget[b.id]),Du.upload(z,Va($e),Mn,I)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Du.upload(z,Va($e),Mn,I),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&bt.setValue(z,"center",j.center),bt.setValue(z,"modelViewMatrix",j.modelViewMatrix),bt.setValue(z,"normalMatrix",j.normalMatrix),bt.setValue(z,"modelMatrix",j.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const gn=Y.uniformsGroups;for(let un=0,xt=gn.length;un<xt;un++){const Pi=gn[un];W.update(Pi,Sn),W.bind(Pi,Sn)}}return Sn}function Wa(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function nc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,X,ie){const Y=Ge.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Ge.get(b.texture).__webglTexture=X,Ge.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:ie,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,X){const ie=Ge.get(b);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0};const Xa=z.createFramebuffer();this.setRenderTarget=function(b,X=0,ie=0){F=b,U=X,C=ie;let Y=!0,j=null,Se=!1,Re=!1;if(b){const Oe=Ge.get(b);if(Oe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(z.FRAMEBUFFER,null),Y=!1;else if(Oe.__webglFramebuffer===void 0)I.setupRenderTarget(b);else if(Oe.__hasExternalTextures)I.rebindTextures(b,Ge.get(b.texture).__webglTexture,Ge.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Be=b.depthTexture;if(Oe.__boundDepthTexture!==Be){if(Be!==null&&Ge.has(Be)&&(b.width!==Be.image.width||b.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(b)}}const tt=b.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Re=!0);const Qe=Ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?j=Qe[X][ie]:j=Qe[X],Se=!0):b.samples>0&&I.useMultisampledRTT(b)===!1?j=Ge.get(b).__webglMultisampledFramebuffer:Array.isArray(Qe)?j=Qe[ie]:j=Qe,k.copy(b.viewport),ne.copy(b.scissor),Z=b.scissorTest}else k.copy(O).multiplyScalar(H).floor(),ne.copy(re).multiplyScalar(H).floor(),Z=Le;if(ie!==0&&(j=Xa),je.bindFramebuffer(z.FRAMEBUFFER,j)&&Y&&je.drawBuffers(b,j),je.viewport(k),je.scissor(ne),je.setScissorTest(Z),Se){const Oe=Ge.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Oe.__webglTexture,ie)}else if(Re){const Oe=Ge.get(b.texture),tt=X;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.__webglTexture,ie,tt)}else if(b!==null&&ie!==0){const Oe=Ge.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Oe.__webglTexture,ie)}R=-1},this.readRenderTargetPixels=function(b,X,ie,Y,j,Se,Re){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){je.bindFramebuffer(z.FRAMEBUFFER,De);try{const Oe=b.texture,tt=Oe.format,Qe=Oe.type;if(!ct.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-Y&&ie>=0&&ie<=b.height-j&&z.readPixels(X,ie,Y,j,it.convert(tt),it.convert(Qe),Se)}finally{const Oe=F!==null?Ge.get(F).__webglFramebuffer:null;je.bindFramebuffer(z.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(b,X,ie,Y,j,Se,Re){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De)if(X>=0&&X<=b.width-Y&&ie>=0&&ie<=b.height-j){je.bindFramebuffer(z.FRAMEBUFFER,De);const Oe=b.texture,tt=Oe.format,Qe=Oe.type;if(!ct.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Be),z.bufferData(z.PIXEL_PACK_BUFFER,Se.byteLength,z.STREAM_READ),z.readPixels(X,ie,Y,j,it.convert(tt),it.convert(Qe),0);const gt=F!==null?Ge.get(F).__webglFramebuffer:null;je.bindFramebuffer(z.FRAMEBUFFER,gt);const st=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await yE(z,st,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Be),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Se),z.deleteBuffer(Be),z.deleteSync(st),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,X=null,ie=0){const Y=Math.pow(2,-ie),j=Math.floor(b.image.width*Y),Se=Math.floor(b.image.height*Y),Re=X!==null?X.x:0,De=X!==null?X.y:0;I.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,ie,0,0,Re,De,j,Se),je.unbindTexture()};const ja=z.createFramebuffer(),$a=z.createFramebuffer();this.copyTextureToTexture=function(b,X,ie=null,Y=null,j=0,Se=null){Se===null&&(j!==0?(Pu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=j,j=0):Se=0);let Re,De,Oe,tt,Qe,Be,gt,st,jt;const kt=b.isCompressedTexture?b.mipmaps[Se]:b.image;if(ie!==null)Re=ie.max.x-ie.min.x,De=ie.max.y-ie.min.y,Oe=ie.isBox3?ie.max.z-ie.min.z:1,tt=ie.min.x,Qe=ie.min.y,Be=ie.isBox3?ie.min.z:0;else{const ln=Math.pow(2,-j);Re=Math.floor(kt.width*ln),De=Math.floor(kt.height*ln),b.isDataArrayTexture?Oe=kt.depth:b.isData3DTexture?Oe=Math.floor(kt.depth*ln):Oe=1,tt=0,Qe=0,Be=0}Y!==null?(gt=Y.x,st=Y.y,jt=Y.z):(gt=0,st=0,jt=0);const vt=it.convert(X.format),$e=it.convert(X.type);let $t;X.isData3DTexture?(I.setTexture3D(X,0),$t=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(I.setTexture2DArray(X,0),$t=z.TEXTURE_2D_ARRAY):(I.setTexture2D(X,0),$t=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const pt=z.getParameter(z.UNPACK_ROW_LENGTH),Sn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),vr=z.getParameter(z.UNPACK_SKIP_PIXELS),In=z.getParameter(z.UNPACK_SKIP_ROWS),ji=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,kt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,kt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,tt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Be);const bt=b.isDataArrayTexture||b.isData3DTexture,Mn=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const ln=Ge.get(b),gn=Ge.get(X),un=Ge.get(ln.__renderTarget),xt=Ge.get(gn.__renderTarget);je.bindFramebuffer(z.READ_FRAMEBUFFER,un.__webglFramebuffer),je.bindFramebuffer(z.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Pi=0;Pi<Oe;Pi++)bt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.get(b).__webglTexture,j,Be+Pi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.get(X).__webglTexture,Se,jt+Pi)),z.blitFramebuffer(tt,Qe,Re,De,gt,st,Re,De,z.DEPTH_BUFFER_BIT,z.NEAREST);je.bindFramebuffer(z.READ_FRAMEBUFFER,null),je.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||Ge.has(b)){const ln=Ge.get(b),gn=Ge.get(X);je.bindFramebuffer(z.READ_FRAMEBUFFER,ja),je.bindFramebuffer(z.DRAW_FRAMEBUFFER,$a);for(let un=0;un<Oe;un++)bt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ln.__webglTexture,j,Be+un):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ln.__webglTexture,j),Mn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,gn.__webglTexture,Se,jt+un):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,gn.__webglTexture,Se),j!==0?z.blitFramebuffer(tt,Qe,Re,De,gt,st,Re,De,z.COLOR_BUFFER_BIT,z.NEAREST):Mn?z.copyTexSubImage3D($t,Se,gt,st,jt+un,tt,Qe,Re,De):z.copyTexSubImage2D($t,Se,gt,st,tt,Qe,Re,De);je.bindFramebuffer(z.READ_FRAMEBUFFER,null),je.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Mn?b.isDataTexture||b.isData3DTexture?z.texSubImage3D($t,Se,gt,st,jt,Re,De,Oe,vt,$e,kt.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D($t,Se,gt,st,jt,Re,De,Oe,vt,kt.data):z.texSubImage3D($t,Se,gt,st,jt,Re,De,Oe,vt,$e,kt):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Se,gt,st,Re,De,vt,$e,kt.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Se,gt,st,kt.width,kt.height,vt,kt.data):z.texSubImage2D(z.TEXTURE_2D,Se,gt,st,Re,De,vt,$e,kt);z.pixelStorei(z.UNPACK_ROW_LENGTH,pt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Sn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,vr),z.pixelStorei(z.UNPACK_SKIP_ROWS,In),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ji),Se===0&&X.generateMipmaps&&z.generateMipmap($t),je.unbindTexture()},this.copyTextureToTexture3D=function(b,X,ie=null,Y=null,j=0){return Pu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,X,ie,Y,j)},this.initRenderTarget=function(b){Ge.get(b).__webglFramebuffer===void 0&&I.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?I.setTextureCube(b,0):b.isData3DTexture?I.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?I.setTexture2DArray(b,0):I.setTexture2D(b,0),je.unbindTexture()},this.resetState=function(){U=0,C=0,F=null,je.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}class jC extends ii{constructor(e,t={}){super(e),this.isWater=!0;const s=this,o=t.textureWidth!==void 0?t.textureWidth:512,l=t.textureHeight!==void 0?t.textureHeight:512,c=t.clipBias!==void 0?t.clipBias:0,f=t.alpha!==void 0?t.alpha:1,h=t.time!==void 0?t.time:0,p=t.waterNormals!==void 0?t.waterNormals:null,v=t.sunDirection!==void 0?t.sunDirection:new $(.70707,.70707,0),m=new at(t.sunColor!==void 0?t.sunColor:16777215),_=new at(t.waterColor!==void 0?t.waterColor:8355711),S=t.eye!==void 0?t.eye:new $(0,0,0),E=t.distortionScale!==void 0?t.distortionScale:20,M=t.side!==void 0?t.side:pr,y=t.fog!==void 0?t.fog:!1,x=new Gr,D=new $,L=new $,P=new $,V=new Pt,U=new $(0,0,-1),C=new Ht,F=new $,R=new $,T=new Ht,k=new Pt,ne=new ti,Z=new $r(o,l),se={name:"MirrorShader",uniforms:ku.merge([Te.fog,Te.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Pt},sunColor:{value:new at(8355711)},sunDirection:{value:new $(.70707,.70707,0)},eye:{value:new $},waterColor:{value:new at(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},ue=new Gi({name:se.name,uniforms:ku.clone(se.uniforms),vertexShader:se.vertexShader,fragmentShader:se.fragmentShader,lights:!0,side:M,fog:y});ue.uniforms.mirrorSampler.value=Z.texture,ue.uniforms.textureMatrix.value=k,ue.uniforms.alpha.value=f,ue.uniforms.time.value=h,ue.uniforms.normalSampler.value=p,ue.uniforms.sunColor.value=m,ue.uniforms.waterColor.value=_,ue.uniforms.sunDirection.value=v,ue.uniforms.distortionScale.value=E,ue.uniforms.eye.value=S,s.material=ue,s.onBeforeRender=function(ee,pe,H){if(L.setFromMatrixPosition(s.matrixWorld),P.setFromMatrixPosition(H.matrixWorld),V.extractRotation(s.matrixWorld),D.set(0,0,1),D.applyMatrix4(V),F.subVectors(L,P),F.dot(D)>0)return;F.reflect(D).negate(),F.add(L),V.extractRotation(H.matrixWorld),U.set(0,0,-1),U.applyMatrix4(V),U.add(P),R.subVectors(L,U),R.reflect(D).negate(),R.add(L),ne.position.copy(F),ne.up.set(0,1,0),ne.up.applyMatrix4(V),ne.up.reflect(D),ne.lookAt(R),ne.far=H.far,ne.updateMatrixWorld(),ne.projectionMatrix.copy(H.projectionMatrix),k.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),k.multiply(ne.projectionMatrix),k.multiply(ne.matrixWorldInverse),x.setFromNormalAndCoplanarPoint(D,L),x.applyMatrix4(ne.matrixWorldInverse),C.set(x.normal.x,x.normal.y,x.normal.z,x.constant);const ae=ne.projectionMatrix;T.x=(Math.sign(C.x)+ae.elements[8])/ae.elements[0],T.y=(Math.sign(C.y)+ae.elements[9])/ae.elements[5],T.z=-1,T.w=(1+ae.elements[10])/ae.elements[14],C.multiplyScalar(2/C.dot(T)),ae.elements[2]=C.x,ae.elements[6]=C.y,ae.elements[10]=C.z+1-c,ae.elements[14]=C.w,S.setFromMatrixPosition(H.matrixWorld);const le=ee.getRenderTarget(),O=ee.xr.enabled,re=ee.shadowMap.autoUpdate;s.visible=!1,ee.xr.enabled=!1,ee.shadowMap.autoUpdate=!1,ee.setRenderTarget(Z),ee.state.buffers.depth.setMask(!0),ee.autoClear===!1&&ee.clear(),ee.render(pe,ne),s.visible=!0,ee.xr.enabled=O,ee.shadowMap.autoUpdate=re,ee.setRenderTarget(le);const Le=H.viewport;Le!==void 0&&ee.state.viewport(Le)}}}class tc extends ii{constructor(){const e=tc.SkyShader,t=new Gi({name:e.name,uniforms:ku.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Bn,depthWrite:!1});super(new bo(1,1,1),t),this.isSky=!0}}tc.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new $},up:{value:new $(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const $C=/^[og]\s*(.+)?/,qC=/^mtllib /,YC=/^usemtl /,KC=/^usemap /,F0=/\s+/,O0=new $,Sd=new $,k0=new $,B0=new $,di=new $,Su=new at;function ZC(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const s=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(o,l){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const f={index:this.materials.length,name:o||"",mtllib:Array.isArray(l)&&l.length>0?l[l.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const p={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return p.clone=this.clone.bind(p),p}};return this.materials.push(f),f},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(o){const l=this.currentMaterial();if(l&&l.groupEnd===-1&&(l.groupEnd=this.geometry.vertices.length/3,l.groupCount=l.groupEnd-l.groupStart,l.inherited=!1),o&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return o&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),l}},s&&s.name&&typeof s.clone=="function"){const o=s.clone(0);o.inherited=!0,this.object.materials.push(o)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const s=parseInt(e,10);return(s>=0?s-1:s+t/3)*3},parseNormalIndex:function(e,t){const s=parseInt(e,10);return(s>=0?s-1:s+t/3)*3},parseUVIndex:function(e,t){const s=parseInt(e,10);return(s>=0?s-1:s+t/2)*2},addVertex:function(e,t,s){const o=this.vertices,l=this.object.geometry.vertices;l.push(o[e+0],o[e+1],o[e+2]),l.push(o[t+0],o[t+1],o[t+2]),l.push(o[s+0],o[s+1],o[s+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,s){const o=this.normals,l=this.object.geometry.normals;l.push(o[e+0],o[e+1],o[e+2]),l.push(o[t+0],o[t+1],o[t+2]),l.push(o[s+0],o[s+1],o[s+2])},addFaceNormal:function(e,t,s){const o=this.vertices,l=this.object.geometry.normals;O0.fromArray(o,e),Sd.fromArray(o,t),k0.fromArray(o,s),di.subVectors(k0,Sd),B0.subVectors(O0,Sd),di.cross(B0),di.normalize(),l.push(di.x,di.y,di.z),l.push(di.x,di.y,di.z),l.push(di.x,di.y,di.z)},addColor:function(e,t,s){const o=this.colors,l=this.object.geometry.colors;o[e]!==void 0&&l.push(o[e+0],o[e+1],o[e+2]),o[t]!==void 0&&l.push(o[t+0],o[t+1],o[t+2]),o[s]!==void 0&&l.push(o[s+0],o[s+1],o[s+2])},addUV:function(e,t,s){const o=this.uvs,l=this.object.geometry.uvs;l.push(o[e+0],o[e+1]),l.push(o[t+0],o[t+1]),l.push(o[s+0],o[s+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,s,o,l,c,f,h,p){const v=this.vertices.length;let m=this.parseVertexIndex(e,v),_=this.parseVertexIndex(t,v),S=this.parseVertexIndex(s,v);if(this.addVertex(m,_,S),this.addColor(m,_,S),f!==void 0&&f!==""){const E=this.normals.length;m=this.parseNormalIndex(f,E),_=this.parseNormalIndex(h,E),S=this.parseNormalIndex(p,E),this.addNormal(m,_,S)}else this.addFaceNormal(m,_,S);if(o!==void 0&&o!==""){const E=this.uvs.length;m=this.parseUVIndex(o,E),_=this.parseUVIndex(l,E),S=this.parseUVIndex(c,E),this.addUV(m,_,S),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let s=0,o=e.length;s<o;s++){const l=this.parseVertexIndex(e[s],t);this.addVertexPoint(l),this.addColor(l)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const s=this.vertices.length,o=this.uvs.length;for(let l=0,c=e.length;l<c;l++)this.addVertexLine(this.parseVertexIndex(e[l],s));for(let l=0,c=t.length;l<c;l++)this.addUVLine(this.parseUVIndex(t[l],o))}};return r.startObject("",!1),r}class z0 extends za{constructor(e){super(e),this.materials=null}load(e,t,s,o){const l=this,c=new n1(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(f){try{t(l.parse(f))}catch(h){o?o(h):console.error(h),l.manager.itemError(e)}},s,o)}setMaterials(e){return this.materials=e,this}parse(e){const t=new ZC;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const s=e.split(`
`);let o=[];for(let f=0,h=s.length;f<h;f++){const p=s[f].trimStart();if(p.length===0)continue;const v=p.charAt(0);if(v!=="#")if(v==="v"){const m=p.split(F0);switch(m[0]){case"v":t.vertices.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3])),m.length>=7?(Su.setRGB(parseFloat(m[4]),parseFloat(m[5]),parseFloat(m[6]),Pn),t.colors.push(Su.r,Su.g,Su.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3]));break;case"vt":t.uvs.push(parseFloat(m[1]),parseFloat(m[2]));break}}else if(v==="f"){const _=p.slice(1).trim().split(F0),S=[];for(let M=0,y=_.length;M<y;M++){const x=_[M];if(x.length>0){const D=x.split("/");S.push(D)}}const E=S[0];for(let M=1,y=S.length-1;M<y;M++){const x=S[M],D=S[M+1];t.addFace(E[0],x[0],D[0],E[1],x[1],D[1],E[2],x[2],D[2])}}else if(v==="l"){const m=p.substring(1).trim().split(" ");let _=[];const S=[];if(p.indexOf("/")===-1)_=m;else for(let E=0,M=m.length;E<M;E++){const y=m[E].split("/");y[0]!==""&&_.push(y[0]),y[1]!==""&&S.push(y[1])}t.addLineGeometry(_,S)}else if(v==="p"){const _=p.slice(1).trim().split(" ");t.addPointGeometry(_)}else if((o=$C.exec(p))!==null){const m=(" "+o[0].slice(1).trim()).slice(1);t.startObject(m)}else if(YC.test(p))t.object.startMaterial(p.substring(7).trim(),t.materialLibraries);else if(qC.test(p))t.materialLibraries.push(p.substring(7).trim());else if(KC.test(p))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(v==="s"){if(o=p.split(" "),o.length>1){const _=o[1].trim().toLowerCase();t.object.smooth=_!=="0"&&_!=="off"}else t.object.smooth=!0;const m=t.object.currentMaterial();m&&(m.smooth=t.object.smooth)}else{if(p==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+p+'"')}}t.finalize();const l=new ga;if(l.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let f=0,h=t.objects.length;f<h;f++){const p=t.objects[f],v=p.geometry,m=p.materials,_=v.type==="Line",S=v.type==="Points";let E=!1;if(v.vertices.length===0)continue;const M=new Ri;M.setAttribute("position",new kn(v.vertices,3)),v.normals.length>0&&M.setAttribute("normal",new kn(v.normals,3)),v.colors.length>0&&(E=!0,M.setAttribute("color",new kn(v.colors,3))),v.hasUVIndices===!0&&M.setAttribute("uv",new kn(v.uvs,2));const y=[];for(let D=0,L=m.length;D<L;D++){const P=m[D],V=P.name+"_"+P.smooth+"_"+E;let U=t.materials[V];if(this.materials!==null){if(U=this.materials.create(P.name),_&&U&&!(U instanceof Lu)){const C=new Lu;Vi.prototype.copy.call(C,U),C.color.copy(U.color),U=C}else if(S&&U&&!(U instanceof va)){const C=new va({size:10,sizeAttenuation:!1});Vi.prototype.copy.call(C,U),C.color.copy(U.color),C.map=U.map,U=C}}U===void 0&&(_?U=new Lu:S?U=new va({size:1,sizeAttenuation:!1}):U=new KE,U.name=P.name,U.flatShading=!P.smooth,U.vertexColors=E,t.materials[V]=U),y.push(U)}let x;if(y.length>1){for(let D=0,L=m.length;D<L;D++){const P=m[D];M.addGroup(P.groupStart,P.groupCount,D)}_?x=new s0(M,y):S?x=new dd(M,y):x=new ii(M,y)}else _?x=new s0(M,y[0]):S?x=new dd(M,y[0]):x=new ii(M,y[0]);x.name=p.name,l.add(x)}else if(t.vertices.length>0){const f=new va({size:1,sizeAttenuation:!1}),h=new Ri;h.setAttribute("position",new kn(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new kn(t.colors,3)),f.vertexColors=!0);const p=new dd(h,f);l.add(p)}return l}}const xs=class xs{constructor(e,t){hn(this,"scene");hn(this,"camera");hn(this,"renderer");hn(this,"water");hn(this,"sky");hn(this,"shipRef",null);hn(this,"animationFrameId",null);hn(this,"shipSpeed");hn(this,"shipPosition",{x:0,y:0,z:0});hn(this,"config");hn(this,"assetPaths");hn(this,"container",null);hn(this,"onShipMove");hn(this,"onCameraMove");hn(this,"handleResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)});hn(this,"animate",e=>{if(this.water&&(this.water.material.uniforms.time.value+=.25/25),this.shipRef){const t=this.config.cameraPosition.z-this.shipRef.position.z;t<this.config.shipStopDistance&&(this.shipSpeed=Math.max(this.config.shipMinSpeed,this.shipSpeed*.98),t<5&&(this.shipSpeed=0)),this.shipRef.position.z+=this.shipSpeed;const s=this.shipSpeed>.01?1:this.shipSpeed/.01,o=Math.sin(e*this.config.shipRockingSpeed)*s;this.shipRef.rotation.z=o*.08,this.shipRef.rotation.x=Math.sin(e*this.config.shipRockingSpeed*.7)*.03*s,this.shipRef.position.y=-.5+o*this.config.shipRockingAmount,this.shipRef.position.y+=Math.sin(e*.0015)*.15*s,this.shipPosition={x:this.shipRef.position.x,y:this.shipRef.position.y,z:this.shipRef.position.z},this.onShipMove&&this.onShipMove(this.shipPosition,this.shipSpeed)}if(this.onCameraMove){const t=this.camera.position;this.onCameraMove({x:t.x,y:t.y,z:t.z})}this.renderer.render(this.scene,this.camera),this.animationFrameId=requestAnimationFrame(this.animate)});this.config=e,this.assetPaths=t,this.shipSpeed=e.shipSpeed,this.scene=new jE,this.camera=new ti(65,window.innerWidth/window.innerHeight,.1,2e3),this.camera.position.copy(this.config.cameraPosition),this.camera.lookAt(0,0,0),this.renderer=new XC({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.outputEncoding=Pn,this.scene.add(new a1(16777215,.7));const s=new o1(16777215,1.2);s.position.set(0,50,100),s.castShadow=!0,this.scene.add(s),this.sky=new tc,this.sky.scale.setScalar(100),this.scene.add(this.sky);const o=new $;o.setFromSphericalCoords(this.config.sunPositionSpherical[0],Gf.degToRad(this.config.sunPositionSpherical[1]),Gf.degToRad(this.config.sunPositionSpherical[2])),this.sky.material.uniforms.sunPosition.value.copy(o);const l=new Ba(this.config.waterSize,this.config.waterSize);this.water=new jC(l,{textureWidth:256,textureHeight:256,waterNormals:new hd().load(this.assetPaths.waterNormal,c=>{c.wrapS=c.wrapT=Nu}),sunDirection:o.clone().normalize(),sunColor:16777215,waterColor:this.config.waterColor,distortionScale:2.5,fog:this.scene.fog!==void 0}),this.water.rotation.x=-Math.PI/2,this.scene.add(this.water),this.loadIsland(),this.loadShip(),window.addEventListener("resize",this.handleResize)}static getInstance(e,t){return xs.instance||(xs.instance=new xs(e,t)),xs.instance}attachToDOM(e){this.container=e,e.contains(this.renderer.domElement)||e.appendChild(this.renderer.domElement),this.startAnimation(),this.handleResize()}detachFromDOM(){this.stopAnimation(),this.container&&this.container.contains(this.renderer.domElement)&&this.container.removeChild(this.renderer.domElement)}loadIsland(){const e=new hd,t=new z0;e.load(this.assetPaths.islandTexture,s=>{s.colorSpace=Pn,s.anisotropy=this.renderer.capabilities.getMaxAnisotropy();const o=new l0({map:s,metalness:.1,roughness:.8});t.load(this.assetPaths.islandModel,l=>{const f=new Es().setFromObject(l).getCenter(new $);l.position.sub(f),l.scale.setScalar(this.config.islandScale),l.position.copy(this.config.islandPosition),l.traverse(h=>{if(h.isMesh){const p=h;p.material=o,p.castShadow=!0,p.receiveShadow=!0}}),this.scene.add(l)})})}loadShip(){const e=new hd,t=new z0;e.load(this.assetPaths.shipTexture,s=>{s.colorSpace=Pn,s.anisotropy=this.renderer.capabilities.getMaxAnisotropy();const o=new l0({map:s,metalness:.3,roughness:.7});t.load(this.assetPaths.shipModel,l=>{const c=new Es().setFromObject(l),f=c.getCenter(new $);l.position.sub(f);const h=this.config.shipScale/Math.max(c.getSize(new $).length(),1);l.scale.setScalar(h);const p=c.min.y*h;l.position.set(0,-p,0),l.rotation.y=Gf.degToRad(-290),l.traverse(v=>{if(v.isMesh){const m=v;m.material=o,m.castShadow=!0,m.receiveShadow=!0}}),this.scene.add(l),this.shipRef=l})})}setShipMoveListener(e){this.onShipMove=e}setCameraMoveListener(e){this.onCameraMove=e}startAnimation(){this.animationFrameId||(this.animationFrameId=requestAnimationFrame(this.animate))}stopAnimation(){this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}getShipPosition(){return this.shipPosition}getShipSpeed(){return this.shipSpeed}getCameraPosition(){return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z}}};hn(xs,"instance",null);let dh=xs;const QC="/elspirates-mariscal2015/assets/mp3/theme.mp3",JC="fonts/minecraft.ttf",H0={cameraPosition:new $(-24,1.26,34.29),waterSize:100,shipScale:15,islandScale:60,islandPosition:new $(0,3,-40),waterColor:7695,sunPositionSpherical:[1,88,180],shipSpeed:.02,shipRockingSpeed:.002,shipRockingAmount:.2,shipStopDistance:8,shipMinSpeed:.001,textFadeInDuration:3e3},eR={waterNormal:new URL("/elspirates-mariscal2015/assets/textures/waternormals.jpg",import.meta.url).href,shipModel:new URL("/elspirates-mariscal2015/assets/models/ship-model.obj",import.meta.url).href,shipTexture:new URL("/elspirates-mariscal2015/assets/textures/solar_punk_pirate_shi_0617201936_texture.png",import.meta.url).href,islandModel:new URL("/elspirates-mariscal2015/assets/models/medas.obj",import.meta.url).href,islandTexture:new URL("/elspirates-mariscal2015/assets/textures/medas_texture.png",import.meta.url).href},tR=["Els pirates electrònics","desembarquen","SALA mariscal","28/08/2025"],nR=(r,e,t=.005)=>`hsl(${(r+e*10)*t*360%360}, 100%, 70%)`;function iR(){const r=Ut.useRef(null),[e,t]=Ut.useState(!1),[s,o]=Ut.useState(!1),[l,c]=Ut.useState(0),[f,h]=Ut.useState(0),[p,v]=Ut.useState(!1),m=Ut.useRef(null),_=Ut.useRef(null),S=Ut.useRef(null),E=Ut.useRef(null);Ut.useEffect(()=>((async()=>{try{const L=new FontFace("Minecraft",`url(${JC})`);await L.load(),document.fonts.add(L),m.current=new Audio(QC),m.current.loop=!0,m.current.volume=.3,S.current=dh.getInstance(H0,eR),t(!0)}catch(L){console.error("Loading failed:",L),t(!0)}})(),()=>{m.current&&(m.current.pause(),m.current=null),S.current&&S.current.detachFromDOM()}),[]);const M=()=>{if(!e||s)return;o(!0),m.current&&(m.current.muted=p,m.current.play().catch(V=>console.log("Audio play failed:",V))),r.current&&S.current&&S.current.attachToDOM(r.current);const D=Date.now(),L=()=>{const V=Date.now()-D,U=Math.min(V/H0.textFadeInDuration,1);c(U),U<1&&requestAnimationFrame(L)};L();const P=()=>{h(V=>(V+1)%360),_.current=requestAnimationFrame(P)};_.current=requestAnimationFrame(P)},y=()=>{m.current&&(m.current.muted=!p,v(!p))},x=D=>D.split("").map((L,P)=>xn.jsx("span",{style:{color:nR(f,P),display:"inline-block",textShadow:`
            0 0 5px white,
            0 0 10px white,
            0 0 15px white,
            0 0 20px rgba(255, 255, 255, 0.5),
            2px 2px 0 #3F3F3F`},children:L},P));return xn.jsxs("div",{ref:r,style:{width:"100vw",height:"100vh",overflow:"hidden"},children:[!s&&xn.jsxs("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"#000",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:1e3,color:"white",fontFamily:"Minecraft, monospace"},children:[xn.jsx("h1",{style:{fontSize:"48px",marginBottom:"40px"},children:"Els Pirates Electrònics"}),e?xn.jsx("button",{ref:E,onClick:M,style:{padding:"15px 30px",fontSize:"24px",fontFamily:"Minecraft, monospace",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",transition:"transform 0.2s"},onMouseEnter:()=>{E.current&&(E.current.style.transform="scale(1.05)")},onMouseLeave:()=>{E.current&&(E.current.style.transform="scale(1)")},children:"START VOYAGE"}):xn.jsxs("div",{style:{width:"300px",marginTop:"20px"},children:[xn.jsx("div",{style:{width:"100%",height:"10px",backgroundColor:"#333",borderRadius:"5px"},children:xn.jsx("div",{style:{width:"0%",height:"100%",backgroundColor:"#4CAF50",transition:"width 0.3s"}})}),xn.jsx("p",{style:{textAlign:"center",marginTop:"10px"},children:"Loading..."})]})]}),s&&xn.jsx("button",{onClick:y,style:{position:"absolute",top:"20px",right:"20px",zIndex:100,background:"rgba(0,0,0,0.5)",border:"2px solid white",borderRadius:"50%",width:"50px",height:"50px",color:"white",fontSize:"24px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Minecraft, monospace"},children:p?"🔇":"🔊"}),s&&xn.jsx("div",{style:{position:"absolute",top:"60px",left:"20px",fontFamily:"Minecraft, monospace",textShadow:"2px 2px 0 #3F3F3F",fontSize:"48px",lineHeight:"1.5",opacity:l,transition:"opacity 0.5s ease",pointerEvents:"none",background:"none"},children:tR.map((D,L)=>xn.jsx("div",{children:x(D)},L))})]})}function rR(){return xn.jsx(mM,{sx:{width:"100vw",height:"100vh"},children:xn.jsx(iR,{})})}bx.createRoot(document.getElementById("root")).render(xn.jsx(W0.StrictMode,{children:xn.jsx(rR,{})}));
