var Ly=Object.defineProperty;var Dy=(r,e,t)=>e in r?Ly(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var tn=(r,e,t)=>Dy(r,typeof e!="symbol"?e+"":e,t);function Iy(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function t_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function n_(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var e=r.default;if(typeof e=="function"){var t=function s(){return this instanceof s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(s){var o=Object.getOwnPropertyDescriptor(r,s);Object.defineProperty(t,s,o.get?o:{enumerable:!0,get:function(){return r[s]}})}),t}var Gf={exports:{}},pa={},Wf={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function Uy(){if(dg)return ht;dg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),m=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=m&&O[m]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(O,re,Le){this.props=O,this.context=re,this.refs=M,this.updater=Le||S}x.prototype.isReactComponent={},x.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=x.prototype;function L(O,re,Le){this.props=O,this.context=re,this.refs=M,this.updater=Le||S}var I=L.prototype=new y;I.constructor=L,E(I,x.prototype),I.isPureReactComponent=!0;var P=Array.isArray,V=Object.prototype.hasOwnProperty,U={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function F(O,re,Le){var J,he={},Me=null,ve=null;if(re!=null)for(J in re.ref!==void 0&&(ve=re.ref),re.key!==void 0&&(Me=""+re.key),re)V.call(re,J)&&!R.hasOwnProperty(J)&&(he[J]=re[J]);var Te=arguments.length-2;if(Te===1)he.children=Le;else if(1<Te){for(var Xe=Array(Te),Ve=0;Ve<Te;Ve++)Xe[Ve]=arguments[Ve+2];he.children=Xe}if(O&&O.defaultProps)for(J in Te=O.defaultProps,Te)he[J]===void 0&&(he[J]=Te[J]);return{$$typeof:r,type:O,key:Me,ref:ve,props:he,_owner:U.current}}function C(O,re){return{$$typeof:r,type:O.type,key:re,ref:O.ref,props:O.props,_owner:O._owner}}function w(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function k(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Le){return re[Le]})}var ne=/\/+/g;function Z(O,re){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):re.toString(36)}function se(O,re,Le,J,he){var Me=typeof O;(Me==="undefined"||Me==="boolean")&&(O=null);var ve=!1;if(O===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(O.$$typeof){case r:case e:ve=!0}}if(ve)return ve=O,he=he(ve),O=J===""?"."+Z(ve,0):J,P(he)?(Le="",O!=null&&(Le=O.replace(ne,"$&/")+"/"),se(he,re,Le,"",function(Ve){return Ve})):he!=null&&(w(he)&&(he=C(he,Le+(!he.key||ve&&ve.key===he.key?"":(""+he.key).replace(ne,"$&/")+"/")+O)),re.push(he)),1;if(ve=0,J=J===""?".":J+":",P(O))for(var Te=0;Te<O.length;Te++){Me=O[Te];var Xe=J+Z(Me,Te);ve+=se(Me,re,Le,Xe,he)}else if(Xe=v(O),typeof Xe=="function")for(O=Xe.call(O),Te=0;!(Me=O.next()).done;)Me=Me.value,Xe=J+Z(Me,Te++),ve+=se(Me,re,Le,Xe,he);else if(Me==="object")throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ve}function ce(O,re,Le){if(O==null)return O;var J=[],he=0;return se(O,J,"","",function(Me){return re.call(Le,Me,he++)}),J}function ee(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(Le){(O._status===0||O._status===-1)&&(O._status=1,O._result=Le)},function(Le){(O._status===0||O._status===-1)&&(O._status=2,O._result=Le)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var pe={current:null},H={transition:null},ae={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:H,ReactCurrentOwner:U};function le(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:ce,forEach:function(O,re,Le){ce(O,function(){re.apply(this,arguments)},Le)},count:function(O){var re=0;return ce(O,function(){re++}),re},toArray:function(O){return ce(O,function(re){return re})||[]},only:function(O){if(!w(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ht.Component=x,ht.Fragment=t,ht.Profiler=o,ht.PureComponent=L,ht.StrictMode=s,ht.Suspense=h,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ht.act=le,ht.cloneElement=function(O,re,Le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var J=E({},O.props),he=O.key,Me=O.ref,ve=O._owner;if(re!=null){if(re.ref!==void 0&&(Me=re.ref,ve=U.current),re.key!==void 0&&(he=""+re.key),O.type&&O.type.defaultProps)var Te=O.type.defaultProps;for(Xe in re)V.call(re,Xe)&&!R.hasOwnProperty(Xe)&&(J[Xe]=re[Xe]===void 0&&Te!==void 0?Te[Xe]:re[Xe])}var Xe=arguments.length-2;if(Xe===1)J.children=Le;else if(1<Xe){Te=Array(Xe);for(var Ve=0;Ve<Xe;Ve++)Te[Ve]=arguments[Ve+2];J.children=Te}return{$$typeof:r,type:O.type,key:he,ref:Me,props:J,_owner:ve}},ht.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},ht.createElement=F,ht.createFactory=function(O){var re=F.bind(null,O);return re.type=O,re},ht.createRef=function(){return{current:null}},ht.forwardRef=function(O){return{$$typeof:f,render:O}},ht.isValidElement=w,ht.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:ee}},ht.memo=function(O,re){return{$$typeof:p,type:O,compare:re===void 0?null:re}},ht.startTransition=function(O){var re=H.transition;H.transition={};try{O()}finally{H.transition=re}},ht.unstable_act=le,ht.useCallback=function(O,re){return pe.current.useCallback(O,re)},ht.useContext=function(O){return pe.current.useContext(O)},ht.useDebugValue=function(){},ht.useDeferredValue=function(O){return pe.current.useDeferredValue(O)},ht.useEffect=function(O,re){return pe.current.useEffect(O,re)},ht.useId=function(){return pe.current.useId()},ht.useImperativeHandle=function(O,re,Le){return pe.current.useImperativeHandle(O,re,Le)},ht.useInsertionEffect=function(O,re){return pe.current.useInsertionEffect(O,re)},ht.useLayoutEffect=function(O,re){return pe.current.useLayoutEffect(O,re)},ht.useMemo=function(O,re){return pe.current.useMemo(O,re)},ht.useReducer=function(O,re,Le){return pe.current.useReducer(O,re,Le)},ht.useRef=function(O){return pe.current.useRef(O)},ht.useState=function(O){return pe.current.useState(O)},ht.useSyncExternalStore=function(O,re,Le){return pe.current.useSyncExternalStore(O,re,Le)},ht.useTransition=function(){return pe.current.useTransition()},ht.version="18.3.1",ht}var hg;function Eh(){return hg||(hg=1,Wf.exports=Uy()),Wf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function Ny(){if(pg)return pa;pg=1;var r=Eh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var g,m={},v=null,S=null;p!==void 0&&(v=""+p),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)s.call(h,g)&&!l.hasOwnProperty(g)&&(m[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)m[g]===void 0&&(m[g]=h[g]);return{$$typeof:e,type:f,key:v,ref:S,props:m,_owner:o.current}}return pa.Fragment=t,pa.jsx=u,pa.jsxs=u,pa}var mg;function Fy(){return mg||(mg=1,Gf.exports=Ny()),Gf.exports}var Bi=Fy(),Qt=Eh();const i_=t_(Qt),gg=Iy({__proto__:null,default:i_},[Qt]);var ec={},Xf={exports:{}},$n={},jf={exports:{}},Yf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function Oy(){return _g||(_g=1,function(r){function e(H,ae){var le=H.length;H.push(ae);e:for(;0<le;){var O=le-1>>>1,re=H[O];if(0<o(re,ae))H[O]=ae,H[le]=re,le=O;else break e}}function t(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var ae=H[0],le=H.pop();if(le!==ae){H[0]=le;e:for(var O=0,re=H.length,Le=re>>>1;O<Le;){var J=2*(O+1)-1,he=H[J],Me=J+1,ve=H[Me];if(0>o(he,le))Me<re&&0>o(ve,he)?(H[O]=ve,H[Me]=le,O=Me):(H[O]=he,H[J]=le,O=J);else if(Me<re&&0>o(ve,le))H[O]=ve,H[Me]=le,O=Me;else break e}}return ae}function o(H,ae){var le=H.sortIndex-ae.sortIndex;return le!==0?le:H.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var h=[],p=[],g=1,m=null,v=3,S=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(H){for(var ae=t(p);ae!==null;){if(ae.callback===null)s(p);else if(ae.startTime<=H)s(p),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=t(p)}}function P(H){if(M=!1,I(H),!E)if(t(h)!==null)E=!0,ee(V);else{var ae=t(p);ae!==null&&pe(P,ae.startTime-H)}}function V(H,ae){E=!1,M&&(M=!1,y(F),F=-1),S=!0;var le=v;try{for(I(ae),m=t(h);m!==null&&(!(m.expirationTime>ae)||H&&!k());){var O=m.callback;if(typeof O=="function"){m.callback=null,v=m.priorityLevel;var re=O(m.expirationTime<=ae);ae=r.unstable_now(),typeof re=="function"?m.callback=re:m===t(h)&&s(h),I(ae)}else s(h);m=t(h)}if(m!==null)var Le=!0;else{var J=t(p);J!==null&&pe(P,J.startTime-ae),Le=!1}return Le}finally{m=null,v=le,S=!1}}var U=!1,R=null,F=-1,C=5,w=-1;function k(){return!(r.unstable_now()-w<C)}function ne(){if(R!==null){var H=r.unstable_now();w=H;var ae=!0;try{ae=R(!0,H)}finally{ae?Z():(U=!1,R=null)}}else U=!1}var Z;if(typeof L=="function")Z=function(){L(ne)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ce=se.port2;se.port1.onmessage=ne,Z=function(){ce.postMessage(null)}}else Z=function(){x(ne,0)};function ee(H){R=H,U||(U=!0,Z())}function pe(H,ae){F=x(function(){H(r.unstable_now())},ae)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,ee(V))},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(H){switch(v){case 1:case 2:case 3:var ae=3;break;default:ae=v}var le=v;v=ae;try{return H()}finally{v=le}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(H,ae){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var le=v;v=H;try{return ae()}finally{v=le}},r.unstable_scheduleCallback=function(H,ae,le){var O=r.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?O+le:O):le=O,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=le+re,H={id:g++,callback:ae,priorityLevel:H,startTime:le,expirationTime:re,sortIndex:-1},le>O?(H.sortIndex=le,e(p,H),t(h)===null&&H===t(p)&&(M?(y(F),F=-1):M=!0,pe(P,le-O))):(H.sortIndex=re,e(h,H),E||S||(E=!0,ee(V))),H},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(H){var ae=v;return function(){var le=v;v=ae;try{return H.apply(this,arguments)}finally{v=le}}}}(Yf)),Yf}var vg;function ky(){return vg||(vg=1,jf.exports=Oy()),jf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function zy(){if(yg)return $n;yg=1;var r=Eh(),e=ky();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},m={};function v(n){return h.call(m,n)?!0:h.call(g,n)?!1:p.test(n)?m[n]=!0:(g[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(n,i,a,c,d,_,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=_,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new M(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,L);x[i]=new M(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,L);x[i]=new M(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,L);x[i]=new M(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,i,a,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,c)&&(a=null),c||d===null?v(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),U=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),k=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),H=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,O;function re(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Le=!1;function J(n,i){if(!n||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var c=te}Reflect.construct(n,[],i)}else{try{i.call()}catch(te){c=te}n.call(i.prototype)}else{try{throw Error()}catch(te){c=te}n()}}catch(te){if(te&&c&&typeof te.stack=="string"){for(var d=te.stack.split(`
`),_=c.stack.split(`
`),T=d.length-1,N=_.length-1;1<=T&&0<=N&&d[T]!==_[N];)N--;for(;1<=T&&0<=N;T--,N--)if(d[T]!==_[N]){if(T!==1||N!==1)do if(T--,N--,0>N||d[T]!==_[N]){var z=`
`+d[T].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=T&&0<=N);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?re(n):""}function he(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case R:return"Fragment";case U:return"Portal";case C:return"Profiler";case F:return"StrictMode";case Z:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case w:return(n._context.displayName||"Context")+".Provider";case ne:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ce:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case ee:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Xe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ve(n){var i=Xe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,_=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,_.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Dt(n){n._valueTracker||(n._valueTracker=Ve(n))}function It(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Xe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function B(n,i){var a=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Dn(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Te(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function mt(n,i){i=i.checked,i!=null&&I(n,"checked",i,!1)}function ft(n,i){mt(n,i);var a=Te(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Rt(n,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function je(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Rt(n,i,a){(i!=="number"||ut(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ge=Array.isArray;function D(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Te(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function A(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ge(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Te(a)}}function fe(n,i){var a=Te(i.value),c=Te(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ue(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ue(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,qe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function $e(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(n){Ne.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ye[i]=ye[n]})});function Je(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ye.hasOwnProperty(n)&&ye[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Je(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Fe=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(n,i){if(i){if(Fe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function it(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,oe=null,de=null;function Pe(n){if(n=Jo(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ml(i),Re(n.stateNode,n.type,i))}}function be(n){oe?de?de.push(n):de=[n]:oe=n}function rt(){if(oe){var n=oe,i=de;if(de=oe=null,Pe(n),i)for(n=0;n<i.length;n++)Pe(i[n])}}function Nt(n,i){return n(i)}function sn(){}var yt=!1;function Vn(n,i,a){if(yt)return n(i,a);yt=!0;try{return Nt(n,i,a)}finally{yt=!1,(oe!==null||de!==null)&&(sn(),rt())}}function In(n,i){var a=n.stateNode;if(a===null)return null;var c=ml(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var bs=!1;if(f)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){bs=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{bs=!1}function Yi(n,i,a,c,d,_,T,N,z){var te=Array.prototype.slice.call(arguments,3);try{i.apply(a,te)}catch(ge){this.onError(ge)}}var $i=!1,Qr=null,Jr=!1,xr=null,Ya={onError:function(n){$i=!0,Qr=n}};function Ps(n,i,a,c,d,_,T,N,z){$i=!1,Qr=null,Yi.apply(Ya,arguments)}function $a(n,i,a,c,d,_,T,N,z){if(Ps.apply(this,arguments),$i){if($i){var te=Qr;$i=!1,Qr=null}else throw Error(t(198));Jr||(Jr=!0,xr=te)}}function Li(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function qa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ka(n){if(Li(n)!==n)throw Error(t(188))}function fu(n){var i=n.alternate;if(!i){if(i=Li(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var _=d.alternate;if(_===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===_.child){for(_=d.child;_;){if(_===a)return Ka(d),n;if(_===c)return Ka(d),i;_=_.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=_;else{for(var T=!1,N=d.child;N;){if(N===a){T=!0,a=d,c=_;break}if(N===c){T=!0,c=d,a=_;break}N=N.sibling}if(!T){for(N=_.child;N;){if(N===a){T=!0,a=_,c=d;break}if(N===c){T=!0,c=_,a=d;break}N=N.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Za(n){return n=fu(n),n!==null?Qa(n):null}function Qa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Qa(n);if(i!==null)return i;n=n.sibling}return null}var Ja=e.unstable_scheduleCallback,b=e.unstable_cancelCallback,j=e.unstable_shouldYield,ie=e.unstable_requestPaint,q=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Ce=e.unstable_UserBlockingPriority,De=e.unstable_NormalPriority,Oe=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Qe=null,ze=null;function _t(n){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:vt,jt=Math.log,kt=Math.LN2;function vt(n){return n>>>=0,n===0?32:31-(jt(n)/kt|0)|0}var Ye=64,Yt=4194304;function gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Mn(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,_=n.pingedLanes,T=a&268435455;if(T!==0){var N=T&~d;N!==0?c=gt(N):(_&=T,_!==0&&(c=gt(_)))}else T=a&~d,T!==0?c=gt(T):_!==0&&(c=gt(_));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,_=i&-i,d>=_||d===16&&(_&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-st(i),d=1<<a,c|=n[a],i&=~d;return c}function Sr(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Un(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,_=n.pendingLanes;0<_;){var T=31-st(_),N=1<<T,z=d[T];z===-1?((N&a)===0||(N&c)!==0)&&(d[T]=Sr(N,i)):z<=i&&(n.expiredLanes|=N),_&=~N}}function qi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pt(){var n=Ye;return Ye<<=1,(Ye&4194240)===0&&(Ye=64),n}function En(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function fn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-st(i),n[i]=a}function vn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-st(a),_=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~_}}function dn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-st(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var xt=0;function Di(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Xh,du,jh,Yh,$h,hu=!1,el=[],Mr=null,Er=null,Tr=null,Oo=new Map,ko=new Map,wr=[],J_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qh(n,i){switch(n){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Oo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(i.pointerId)}}function zo(n,i,a,c,d,_){return n===null||n.nativeEvent!==_?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:_,targetContainers:[d]},i!==null&&(i=Jo(i),i!==null&&du(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function ev(n,i,a,c,d){switch(i){case"focusin":return Mr=zo(Mr,n,i,a,c,d),!0;case"dragenter":return Er=zo(Er,n,i,a,c,d),!0;case"mouseover":return Tr=zo(Tr,n,i,a,c,d),!0;case"pointerover":var _=d.pointerId;return Oo.set(_,zo(Oo.get(_)||null,n,i,a,c,d)),!0;case"gotpointercapture":return _=d.pointerId,ko.set(_,zo(ko.get(_)||null,n,i,a,c,d)),!0}return!1}function Kh(n){var i=es(n.target);if(i!==null){var a=Li(i);if(a!==null){if(i=a.tag,i===13){if(i=qa(a),i!==null){n.blockedOn=i,$h(n.priority,function(){jh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function tl(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=mu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);At=c,a.target.dispatchEvent(c),At=null}else return i=Jo(a),i!==null&&du(i),n.blockedOn=a,!1;i.shift()}return!0}function Zh(n,i,a){tl(n)&&a.delete(i)}function tv(){hu=!1,Mr!==null&&tl(Mr)&&(Mr=null),Er!==null&&tl(Er)&&(Er=null),Tr!==null&&tl(Tr)&&(Tr=null),Oo.forEach(Zh),ko.forEach(Zh)}function Bo(n,i){n.blockedOn===i&&(n.blockedOn=null,hu||(hu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,tv)))}function Ho(n){function i(d){return Bo(d,n)}if(0<el.length){Bo(el[0],n);for(var a=1;a<el.length;a++){var c=el[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Mr!==null&&Bo(Mr,n),Er!==null&&Bo(Er,n),Tr!==null&&Bo(Tr,n),Oo.forEach(i),ko.forEach(i),a=0;a<wr.length;a++)c=wr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<wr.length&&(a=wr[0],a.blockedOn===null);)Kh(a),a.blockedOn===null&&wr.shift()}var Ls=P.ReactCurrentBatchConfig,nl=!0;function nv(n,i,a,c){var d=xt,_=Ls.transition;Ls.transition=null;try{xt=1,pu(n,i,a,c)}finally{xt=d,Ls.transition=_}}function iv(n,i,a,c){var d=xt,_=Ls.transition;Ls.transition=null;try{xt=4,pu(n,i,a,c)}finally{xt=d,Ls.transition=_}}function pu(n,i,a,c){if(nl){var d=mu(n,i,a,c);if(d===null)Du(n,i,c,il,a),qh(n,c);else if(ev(d,n,i,a,c))c.stopPropagation();else if(qh(n,c),i&4&&-1<J_.indexOf(n)){for(;d!==null;){var _=Jo(d);if(_!==null&&Xh(_),_=mu(n,i,a,c),_===null&&Du(n,i,c,il,a),_===d)break;d=_}d!==null&&c.stopPropagation()}else Du(n,i,c,null,a)}}var il=null;function mu(n,i,a,c){if(il=null,n=W(c),n=es(n),n!==null)if(i=Li(n),i===null)n=null;else if(a=i.tag,a===13){if(n=qa(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return il=n,null}function Qh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Se:return 1;case Ce:return 4;case De:case Oe:return 16;case tt:return 536870912;default:return 16}default:return 16}}var Ar=null,gu=null,rl=null;function Jh(){if(rl)return rl;var n,i=gu,a=i.length,c,d="value"in Ar?Ar.value:Ar.textContent,_=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[_-c];c++);return rl=d.slice(n,1<c?1-c:void 0)}function sl(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ol(){return!0}function ep(){return!1}function Zn(n){function i(a,c,d,_,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(a=n[N],this[N]=a?a(_):_[N]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?ol:ep,this.isPropagationStopped=ep,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),i}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_u=Zn(Ds),Vo=le({},Ds,{view:0,detail:0}),rv=Zn(Vo),vu,yu,Go,al=le({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Go&&(Go&&n.type==="mousemove"?(vu=n.screenX-Go.screenX,yu=n.screenY-Go.screenY):yu=vu=0,Go=n),vu)},movementY:function(n){return"movementY"in n?n.movementY:yu}}),tp=Zn(al),sv=le({},al,{dataTransfer:0}),ov=Zn(sv),av=le({},Vo,{relatedTarget:0}),xu=Zn(av),lv=le({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),cv=Zn(lv),uv=le({},Ds,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),fv=Zn(uv),dv=le({},Ds,{data:0}),np=Zn(dv),hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=mv[n])?!!i[n]:!1}function Su(){return gv}var _v=le({},Vo,{key:function(n){if(n.key){var i=hv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=sl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?pv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(n){return n.type==="keypress"?sl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?sl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),vv=Zn(_v),yv=le({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=Zn(yv),xv=le({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),Sv=Zn(xv),Mv=le({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ev=Zn(Mv),Tv=le({},al,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=Zn(Tv),Av=[9,13,27,32],Mu=f&&"CompositionEvent"in window,Wo=null;f&&"documentMode"in document&&(Wo=document.documentMode);var Rv=f&&"TextEvent"in window&&!Wo,rp=f&&(!Mu||Wo&&8<Wo&&11>=Wo),sp=" ",op=!1;function ap(n,i){switch(n){case"keyup":return Av.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function Cv(n,i){switch(n){case"compositionend":return lp(i);case"keypress":return i.which!==32?null:(op=!0,sp);case"textInput":return n=i.data,n===sp&&op?null:n;default:return null}}function bv(n,i){if(Is)return n==="compositionend"||!Mu&&ap(n,i)?(n=Jh(),rl=gu=Ar=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return rp&&i.locale!=="ko"?null:i.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Pv[n.type]:i==="textarea"}function up(n,i,a,c){be(c),i=dl(i,"onChange"),0<i.length&&(a=new _u("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Xo=null,jo=null;function Lv(n){Cp(n,0)}function ll(n){var i=ks(n);if(It(i))return n}function Dv(n,i){if(n==="change")return i}var fp=!1;if(f){var Eu;if(f){var Tu="oninput"in document;if(!Tu){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),Tu=typeof dp.oninput=="function"}Eu=Tu}else Eu=!1;fp=Eu&&(!document.documentMode||9<document.documentMode)}function hp(){Xo&&(Xo.detachEvent("onpropertychange",pp),jo=Xo=null)}function pp(n){if(n.propertyName==="value"&&ll(jo)){var i=[];up(i,jo,n,W(n)),Vn(Lv,i)}}function Iv(n,i,a){n==="focusin"?(hp(),Xo=i,jo=a,Xo.attachEvent("onpropertychange",pp)):n==="focusout"&&hp()}function Uv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ll(jo)}function Nv(n,i){if(n==="click")return ll(i)}function Fv(n,i){if(n==="input"||n==="change")return ll(i)}function Ov(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var _i=typeof Object.is=="function"?Object.is:Ov;function Yo(n,i){if(_i(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!_i(n[d],i[d]))return!1}return!0}function mp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function gp(n,i){var a=mp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mp(a)}}function _p(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?_p(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function vp(){for(var n=window,i=ut();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ut(n.document)}return i}function wu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function kv(n){var i=vp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&_p(a.ownerDocument.documentElement,a)){if(c!==null&&wu(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,_=Math.min(c.start,d);c=c.end===void 0?_:Math.min(c.end,d),!n.extend&&_>c&&(d=c,c=_,_=d),d=gp(a,_);var T=gp(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),_>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var zv=f&&"documentMode"in document&&11>=document.documentMode,Us=null,Au=null,$o=null,Ru=!1;function yp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ru||Us==null||Us!==ut(c)||(c=Us,"selectionStart"in c&&wu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),$o&&Yo($o,c)||($o=c,c=dl(Au,"onSelect"),0<c.length&&(i=new _u("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Us)))}function cl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ns={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},Cu={},xp={};f&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function ul(n){if(Cu[n])return Cu[n];if(!Ns[n])return n;var i=Ns[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in xp)return Cu[n]=i[a];return n}var Sp=ul("animationend"),Mp=ul("animationiteration"),Ep=ul("animationstart"),Tp=ul("transitionend"),wp=new Map,Ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(n,i){wp.set(n,i),l(i,[n])}for(var bu=0;bu<Ap.length;bu++){var Pu=Ap[bu],Bv=Pu.toLowerCase(),Hv=Pu[0].toUpperCase()+Pu.slice(1);Rr(Bv,"on"+Hv)}Rr(Sp,"onAnimationEnd"),Rr(Mp,"onAnimationIteration"),Rr(Ep,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(Tp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vv=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Rp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,$a(c,i,void 0,n),n.currentTarget=null}function Cp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var _=void 0;if(i)for(var T=c.length-1;0<=T;T--){var N=c[T],z=N.instance,te=N.currentTarget;if(N=N.listener,z!==_&&d.isPropagationStopped())break e;Rp(d,N,te),_=z}else for(T=0;T<c.length;T++){if(N=c[T],z=N.instance,te=N.currentTarget,N=N.listener,z!==_&&d.isPropagationStopped())break e;Rp(d,N,te),_=z}}}if(Jr)throw n=xr,Jr=!1,xr=null,n}function Ft(n,i){var a=i[ku];a===void 0&&(a=i[ku]=new Set);var c=n+"__bubble";a.has(c)||(bp(i,n,2,!1),a.add(c))}function Lu(n,i,a){var c=0;i&&(c|=4),bp(a,n,c,i)}var fl="_reactListening"+Math.random().toString(36).slice(2);function Ko(n){if(!n[fl]){n[fl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Vv.has(a)||Lu(a,!1,n),Lu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[fl]||(i[fl]=!0,Lu("selectionchange",!1,i))}}function bp(n,i,a,c){switch(Qh(i)){case 1:var d=nv;break;case 4:d=iv;break;default:d=pu}a=d.bind(null,i,a,n),d=void 0,!bs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Du(n,i,a,c,d){var _=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var N=c.stateNode.containerInfo;if(N===d||N.nodeType===8&&N.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var z=T.tag;if((z===3||z===4)&&(z=T.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;T=T.return}for(;N!==null;){if(T=es(N),T===null)return;if(z=T.tag,z===5||z===6){c=_=T;continue e}N=N.parentNode}}c=c.return}Vn(function(){var te=_,ge=W(a),xe=[];e:{var me=wp.get(n);if(me!==void 0){var Ie=_u,ke=n;switch(n){case"keypress":if(sl(a)===0)break e;case"keydown":case"keyup":Ie=vv;break;case"focusin":ke="focus",Ie=xu;break;case"focusout":ke="blur",Ie=xu;break;case"beforeblur":case"afterblur":Ie=xu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Sv;break;case Sp:case Mp:case Ep:Ie=cv;break;case Tp:Ie=Ev;break;case"scroll":Ie=rv;break;case"wheel":Ie=wv;break;case"copy":case"cut":case"paste":Ie=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=ip}var Be=(i&4)!==0,Zt=!Be&&n==="scroll",$=Be?me!==null?me+"Capture":null:me;Be=[];for(var G=te,K;G!==null;){K=G;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,$!==null&&(Ee=In(G,$),Ee!=null&&Be.push(Zo(G,Ee,K)))),Zt)break;G=G.return}0<Be.length&&(me=new Ie(me,ke,null,a,ge),xe.push({event:me,listeners:Be}))}}if((i&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",me&&a!==At&&(ke=a.relatedTarget||a.fromElement)&&(es(ke)||ke[Ki]))break e;if((Ie||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Ie?(ke=a.relatedTarget||a.toElement,Ie=te,ke=ke?es(ke):null,ke!==null&&(Zt=Li(ke),ke!==Zt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Ie=null,ke=te),Ie!==ke)){if(Be=tp,Ee="onMouseLeave",$="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Be=ip,Ee="onPointerLeave",$="onPointerEnter",G="pointer"),Zt=Ie==null?me:ks(Ie),K=ke==null?me:ks(ke),me=new Be(Ee,G+"leave",Ie,a,ge),me.target=Zt,me.relatedTarget=K,Ee=null,es(ge)===te&&(Be=new Be($,G+"enter",ke,a,ge),Be.target=K,Be.relatedTarget=Zt,Ee=Be),Zt=Ee,Ie&&ke)t:{for(Be=Ie,$=ke,G=0,K=Be;K;K=Fs(K))G++;for(K=0,Ee=$;Ee;Ee=Fs(Ee))K++;for(;0<G-K;)Be=Fs(Be),G--;for(;0<K-G;)$=Fs($),K--;for(;G--;){if(Be===$||$!==null&&Be===$.alternate)break t;Be=Fs(Be),$=Fs($)}Be=null}else Be=null;Ie!==null&&Pp(xe,me,Ie,Be,!1),ke!==null&&Zt!==null&&Pp(xe,Zt,ke,Be,!0)}}e:{if(me=te?ks(te):window,Ie=me.nodeName&&me.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&me.type==="file")var We=Dv;else if(cp(me))if(fp)We=Fv;else{We=Uv;var Ke=Iv}else(Ie=me.nodeName)&&Ie.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(We=Nv);if(We&&(We=We(n,te))){up(xe,We,a,ge);break e}Ke&&Ke(n,me,te),n==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&Rt(me,"number",me.value)}switch(Ke=te?ks(te):window,n){case"focusin":(cp(Ke)||Ke.contentEditable==="true")&&(Us=Ke,Au=te,$o=null);break;case"focusout":$o=Au=Us=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,yp(xe,a,ge);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":yp(xe,a,ge)}var Ze;if(Mu)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Is?ap(n,a)&&(nt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(rp&&a.locale!=="ko"&&(Is||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Is&&(Ze=Jh()):(Ar=ge,gu="value"in Ar?Ar.value:Ar.textContent,Is=!0)),Ke=dl(te,nt),0<Ke.length&&(nt=new np(nt,n,null,a,ge),xe.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=lp(a),Ze!==null&&(nt.data=Ze)))),(Ze=Rv?Cv(n,a):bv(n,a))&&(te=dl(te,"onBeforeInput"),0<te.length&&(ge=new np("onBeforeInput","beforeinput",null,a,ge),xe.push({event:ge,listeners:te}),ge.data=Ze))}Cp(xe,i)})}function Zo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function dl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,_=d.stateNode;d.tag===5&&_!==null&&(d=_,_=In(n,a),_!=null&&c.unshift(Zo(n,_,d)),_=In(n,i),_!=null&&c.push(Zo(n,_,d))),n=n.return}return c}function Fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Pp(n,i,a,c,d){for(var _=i._reactName,T=[];a!==null&&a!==c;){var N=a,z=N.alternate,te=N.stateNode;if(z!==null&&z===c)break;N.tag===5&&te!==null&&(N=te,d?(z=In(a,_),z!=null&&T.unshift(Zo(a,z,N))):d||(z=In(a,_),z!=null&&T.push(Zo(a,z,N)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var Gv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function Lp(n){return(typeof n=="string"?n:""+n).replace(Gv,`
`).replace(Wv,"")}function hl(n,i,a){if(i=Lp(i),Lp(n)!==i&&a)throw Error(t(425))}function pl(){}var Iu=null,Uu=null;function Nu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fu=typeof setTimeout=="function"?setTimeout:void 0,Xv=typeof clearTimeout=="function"?clearTimeout:void 0,Dp=typeof Promise=="function"?Promise:void 0,jv=typeof queueMicrotask=="function"?queueMicrotask:typeof Dp<"u"?function(n){return Dp.resolve(null).then(n).catch(Yv)}:Fu;function Yv(n){setTimeout(function(){throw n})}function Ou(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Ho(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Ho(i)}function Cr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ip(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Os=Math.random().toString(36).slice(2),Ii="__reactFiber$"+Os,Qo="__reactProps$"+Os,Ki="__reactContainer$"+Os,ku="__reactEvents$"+Os,$v="__reactListeners$"+Os,qv="__reactHandles$"+Os;function es(n){var i=n[Ii];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ki]||a[Ii]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ip(n);n!==null;){if(a=n[Ii])return a;n=Ip(n)}return i}n=a,a=n.parentNode}return null}function Jo(n){return n=n[Ii]||n[Ki],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ml(n){return n[Qo]||null}var zu=[],zs=-1;function br(n){return{current:n}}function Ot(n){0>zs||(n.current=zu[zs],zu[zs]=null,zs--)}function Ut(n,i){zs++,zu[zs]=n.current,n.current=i}var Pr={},Tn=br(Pr),Gn=br(!1),ts=Pr;function Bs(n,i){var a=n.type.contextTypes;if(!a)return Pr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},_;for(_ in a)d[_]=i[_];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wn(n){return n=n.childContextTypes,n!=null}function gl(){Ot(Gn),Ot(Tn)}function Up(n,i,a){if(Tn.current!==Pr)throw Error(t(168));Ut(Tn,i),Ut(Gn,a)}function Np(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ve(n)||"Unknown",d));return le({},a,c)}function _l(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Pr,ts=Tn.current,Ut(Tn,n),Ut(Gn,Gn.current),!0}function Fp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Np(n,i,ts),c.__reactInternalMemoizedMergedChildContext=n,Ot(Gn),Ot(Tn),Ut(Tn,n)):Ot(Gn),Ut(Gn,a)}var Zi=null,vl=!1,Bu=!1;function Op(n){Zi===null?Zi=[n]:Zi.push(n)}function Kv(n){vl=!0,Op(n)}function Lr(){if(!Bu&&Zi!==null){Bu=!0;var n=0,i=xt;try{var a=Zi;for(xt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Zi=null,vl=!1}catch(d){throw Zi!==null&&(Zi=Zi.slice(n+1)),Ja(Se,Lr),d}finally{xt=i,Bu=!1}}return null}var Hs=[],Vs=0,yl=null,xl=0,ai=[],li=0,ns=null,Qi=1,Ji="";function is(n,i){Hs[Vs++]=xl,Hs[Vs++]=yl,yl=n,xl=i}function kp(n,i,a){ai[li++]=Qi,ai[li++]=Ji,ai[li++]=ns,ns=n;var c=Qi;n=Ji;var d=32-st(c)-1;c&=~(1<<d),a+=1;var _=32-st(i)+d;if(30<_){var T=d-d%5;_=(c&(1<<T)-1).toString(32),c>>=T,d-=T,Qi=1<<32-st(i)+d|a<<d|c,Ji=_+n}else Qi=1<<_|a<<d|c,Ji=n}function Hu(n){n.return!==null&&(is(n,1),kp(n,1,0))}function Vu(n){for(;n===yl;)yl=Hs[--Vs],Hs[Vs]=null,xl=Hs[--Vs],Hs[Vs]=null;for(;n===ns;)ns=ai[--li],ai[li]=null,Ji=ai[--li],ai[li]=null,Qi=ai[--li],ai[li]=null}var Qn=null,Jn=null,zt=!1,vi=null;function zp(n,i){var a=di(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Bp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Qn=n,Jn=Cr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Qn=n,Jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ns!==null?{id:Qi,overflow:Ji}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=di(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Qn=n,Jn=null,!0):!1;default:return!1}}function Gu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Wu(n){if(zt){var i=Jn;if(i){var a=i;if(!Bp(n,i)){if(Gu(n))throw Error(t(418));i=Cr(a.nextSibling);var c=Qn;i&&Bp(n,i)?zp(c,a):(n.flags=n.flags&-4097|2,zt=!1,Qn=n)}}else{if(Gu(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,Qn=n}}}function Hp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Qn=n}function Sl(n){if(n!==Qn)return!1;if(!zt)return Hp(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Nu(n.type,n.memoizedProps)),i&&(i=Jn)){if(Gu(n))throw Vp(),Error(t(418));for(;i;)zp(n,i),i=Cr(i.nextSibling)}if(Hp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Jn=Cr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Jn=null}}else Jn=Qn?Cr(n.stateNode.nextSibling):null;return!0}function Vp(){for(var n=Jn;n;)n=Cr(n.nextSibling)}function Gs(){Jn=Qn=null,zt=!1}function Xu(n){vi===null?vi=[n]:vi.push(n)}var Zv=P.ReactCurrentBatchConfig;function ea(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,_=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===_?i.ref:(i=function(T){var N=d.refs;T===null?delete N[_]:N[_]=T},i._stringRef=_,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ml(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Gp(n){var i=n._init;return i(n._payload)}function Wp(n){function i($,G){if(n){var K=$.deletions;K===null?($.deletions=[G],$.flags|=16):K.push(G)}}function a($,G){if(!n)return null;for(;G!==null;)i($,G),G=G.sibling;return null}function c($,G){for($=new Map;G!==null;)G.key!==null?$.set(G.key,G):$.set(G.index,G),G=G.sibling;return $}function d($,G){return $=zr($,G),$.index=0,$.sibling=null,$}function _($,G,K){return $.index=K,n?(K=$.alternate,K!==null?(K=K.index,K<G?($.flags|=2,G):K):($.flags|=2,G)):($.flags|=1048576,G)}function T($){return n&&$.alternate===null&&($.flags|=2),$}function N($,G,K,Ee){return G===null||G.tag!==6?(G=Of(K,$.mode,Ee),G.return=$,G):(G=d(G,K),G.return=$,G)}function z($,G,K,Ee){var We=K.type;return We===R?ge($,G,K.props.children,Ee,K.key):G!==null&&(G.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ee&&Gp(We)===G.type)?(Ee=d(G,K.props),Ee.ref=ea($,G,K),Ee.return=$,Ee):(Ee=jl(K.type,K.key,K.props,null,$.mode,Ee),Ee.ref=ea($,G,K),Ee.return=$,Ee)}function te($,G,K,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=kf(K,$.mode,Ee),G.return=$,G):(G=d(G,K.children||[]),G.return=$,G)}function ge($,G,K,Ee,We){return G===null||G.tag!==7?(G=fs(K,$.mode,Ee,We),G.return=$,G):(G=d(G,K),G.return=$,G)}function xe($,G,K){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Of(""+G,$.mode,K),G.return=$,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case V:return K=jl(G.type,G.key,G.props,null,$.mode,K),K.ref=ea($,null,G),K.return=$,K;case U:return G=kf(G,$.mode,K),G.return=$,G;case ee:var Ee=G._init;return xe($,Ee(G._payload),K)}if(Ge(G)||ae(G))return G=fs(G,$.mode,K,null),G.return=$,G;Ml($,G)}return null}function me($,G,K,Ee){var We=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return We!==null?null:N($,G,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case V:return K.key===We?z($,G,K,Ee):null;case U:return K.key===We?te($,G,K,Ee):null;case ee:return We=K._init,me($,G,We(K._payload),Ee)}if(Ge(K)||ae(K))return We!==null?null:ge($,G,K,Ee,null);Ml($,K)}return null}function Ie($,G,K,Ee,We){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return $=$.get(K)||null,N(G,$,""+Ee,We);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case V:return $=$.get(Ee.key===null?K:Ee.key)||null,z(G,$,Ee,We);case U:return $=$.get(Ee.key===null?K:Ee.key)||null,te(G,$,Ee,We);case ee:var Ke=Ee._init;return Ie($,G,K,Ke(Ee._payload),We)}if(Ge(Ee)||ae(Ee))return $=$.get(K)||null,ge(G,$,Ee,We,null);Ml(G,Ee)}return null}function ke($,G,K,Ee){for(var We=null,Ke=null,Ze=G,nt=G=0,mn=null;Ze!==null&&nt<K.length;nt++){Ze.index>nt?(mn=Ze,Ze=null):mn=Ze.sibling;var Mt=me($,Ze,K[nt],Ee);if(Mt===null){Ze===null&&(Ze=mn);break}n&&Ze&&Mt.alternate===null&&i($,Ze),G=_(Mt,G,nt),Ke===null?We=Mt:Ke.sibling=Mt,Ke=Mt,Ze=mn}if(nt===K.length)return a($,Ze),zt&&is($,nt),We;if(Ze===null){for(;nt<K.length;nt++)Ze=xe($,K[nt],Ee),Ze!==null&&(G=_(Ze,G,nt),Ke===null?We=Ze:Ke.sibling=Ze,Ke=Ze);return zt&&is($,nt),We}for(Ze=c($,Ze);nt<K.length;nt++)mn=Ie(Ze,$,nt,K[nt],Ee),mn!==null&&(n&&mn.alternate!==null&&Ze.delete(mn.key===null?nt:mn.key),G=_(mn,G,nt),Ke===null?We=mn:Ke.sibling=mn,Ke=mn);return n&&Ze.forEach(function(Br){return i($,Br)}),zt&&is($,nt),We}function Be($,G,K,Ee){var We=ae(K);if(typeof We!="function")throw Error(t(150));if(K=We.call(K),K==null)throw Error(t(151));for(var Ke=We=null,Ze=G,nt=G=0,mn=null,Mt=K.next();Ze!==null&&!Mt.done;nt++,Mt=K.next()){Ze.index>nt?(mn=Ze,Ze=null):mn=Ze.sibling;var Br=me($,Ze,Mt.value,Ee);if(Br===null){Ze===null&&(Ze=mn);break}n&&Ze&&Br.alternate===null&&i($,Ze),G=_(Br,G,nt),Ke===null?We=Br:Ke.sibling=Br,Ke=Br,Ze=mn}if(Mt.done)return a($,Ze),zt&&is($,nt),We;if(Ze===null){for(;!Mt.done;nt++,Mt=K.next())Mt=xe($,Mt.value,Ee),Mt!==null&&(G=_(Mt,G,nt),Ke===null?We=Mt:Ke.sibling=Mt,Ke=Mt);return zt&&is($,nt),We}for(Ze=c($,Ze);!Mt.done;nt++,Mt=K.next())Mt=Ie(Ze,$,nt,Mt.value,Ee),Mt!==null&&(n&&Mt.alternate!==null&&Ze.delete(Mt.key===null?nt:Mt.key),G=_(Mt,G,nt),Ke===null?We=Mt:Ke.sibling=Mt,Ke=Mt);return n&&Ze.forEach(function(Py){return i($,Py)}),zt&&is($,nt),We}function Zt($,G,K,Ee){if(typeof K=="object"&&K!==null&&K.type===R&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case V:e:{for(var We=K.key,Ke=G;Ke!==null;){if(Ke.key===We){if(We=K.type,We===R){if(Ke.tag===7){a($,Ke.sibling),G=d(Ke,K.props.children),G.return=$,$=G;break e}}else if(Ke.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ee&&Gp(We)===Ke.type){a($,Ke.sibling),G=d(Ke,K.props),G.ref=ea($,Ke,K),G.return=$,$=G;break e}a($,Ke);break}else i($,Ke);Ke=Ke.sibling}K.type===R?(G=fs(K.props.children,$.mode,Ee,K.key),G.return=$,$=G):(Ee=jl(K.type,K.key,K.props,null,$.mode,Ee),Ee.ref=ea($,G,K),Ee.return=$,$=Ee)}return T($);case U:e:{for(Ke=K.key;G!==null;){if(G.key===Ke)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a($,G.sibling),G=d(G,K.children||[]),G.return=$,$=G;break e}else{a($,G);break}else i($,G);G=G.sibling}G=kf(K,$.mode,Ee),G.return=$,$=G}return T($);case ee:return Ke=K._init,Zt($,G,Ke(K._payload),Ee)}if(Ge(K))return ke($,G,K,Ee);if(ae(K))return Be($,G,K,Ee);Ml($,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,G!==null&&G.tag===6?(a($,G.sibling),G=d(G,K),G.return=$,$=G):(a($,G),G=Of(K,$.mode,Ee),G.return=$,$=G),T($)):a($,G)}return Zt}var Ws=Wp(!0),Xp=Wp(!1),El=br(null),Tl=null,Xs=null,ju=null;function Yu(){ju=Xs=Tl=null}function $u(n){var i=El.current;Ot(El),n._currentValue=i}function qu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function js(n,i){Tl=n,ju=Xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Xn=!0),n.firstContext=null)}function ci(n){var i=n._currentValue;if(ju!==n)if(n={context:n,memoizedValue:i,next:null},Xs===null){if(Tl===null)throw Error(t(308));Xs=n,Tl.dependencies={lanes:0,firstContext:n}}else Xs=Xs.next=n;return i}var rs=null;function Ku(n){rs===null?rs=[n]:rs.push(n)}function jp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Ku(i)):(a.next=d.next,d.next=a),i.interleaved=a,er(n,c)}function er(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Dr=!1;function Zu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function tr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Ir(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(St&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,er(n,a)}return d=c.interleaved,d===null?(i.next=i,Ku(c)):(i.next=d.next,d.next=i),c.interleaved=i,er(n,a)}function wl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,dn(n,a)}}function $p(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?d=_=T:_=_.next=T,a=a.next}while(a!==null);_===null?d=_=i:_=_.next=i}else d=_=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:_,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Al(n,i,a,c){var d=n.updateQueue;Dr=!1;var _=d.firstBaseUpdate,T=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var z=N,te=z.next;z.next=null,T===null?_=te:T.next=te,T=z;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,N=ge.lastBaseUpdate,N!==T&&(N===null?ge.firstBaseUpdate=te:N.next=te,ge.lastBaseUpdate=z))}if(_!==null){var xe=d.baseState;T=0,ge=te=z=null,N=_;do{var me=N.lane,Ie=N.eventTime;if((c&me)===me){ge!==null&&(ge=ge.next={eventTime:Ie,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var ke=n,Be=N;switch(me=i,Ie=a,Be.tag){case 1:if(ke=Be.payload,typeof ke=="function"){xe=ke.call(Ie,xe,me);break e}xe=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=Be.payload,me=typeof ke=="function"?ke.call(Ie,xe,me):ke,me==null)break e;xe=le({},xe,me);break e;case 2:Dr=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,me=d.effects,me===null?d.effects=[N]:me.push(N))}else Ie={eventTime:Ie,lane:me,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ge===null?(te=ge=Ie,z=xe):ge=ge.next=Ie,T|=me;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;me=N,N=me.next,me.next=null,d.lastBaseUpdate=me,d.shared.pending=null}}while(!0);if(ge===null&&(z=xe),d.baseState=z,d.firstBaseUpdate=te,d.lastBaseUpdate=ge,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else _===null&&(d.shared.lanes=0);as|=T,n.lanes=T,n.memoizedState=xe}}function qp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ta={},Ui=br(ta),na=br(ta),ia=br(ta);function ss(n){if(n===ta)throw Error(t(174));return n}function Qu(n,i){switch(Ut(ia,i),Ut(na,n),Ut(Ui,ta),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:He(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=He(i,n)}Ot(Ui),Ut(Ui,i)}function Ys(){Ot(Ui),Ot(na),Ot(ia)}function Kp(n){ss(ia.current);var i=ss(Ui.current),a=He(i,n.type);i!==a&&(Ut(na,n),Ut(Ui,a))}function Ju(n){na.current===n&&(Ot(Ui),Ot(na))}var Gt=br(0);function Rl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ef=[];function tf(){for(var n=0;n<ef.length;n++)ef[n]._workInProgressVersionPrimary=null;ef.length=0}var Cl=P.ReactCurrentDispatcher,nf=P.ReactCurrentBatchConfig,os=0,Wt=null,on=null,hn=null,bl=!1,ra=!1,sa=0,Qv=0;function wn(){throw Error(t(321))}function rf(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!_i(n[a],i[a]))return!1;return!0}function sf(n,i,a,c,d,_){if(os=_,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Cl.current=n===null||n.memoizedState===null?ny:iy,n=a(c,d),ra){_=0;do{if(ra=!1,sa=0,25<=_)throw Error(t(301));_+=1,hn=on=null,i.updateQueue=null,Cl.current=ry,n=a(c,d)}while(ra)}if(Cl.current=Dl,i=on!==null&&on.next!==null,os=0,hn=on=Wt=null,bl=!1,i)throw Error(t(300));return n}function of(){var n=sa!==0;return sa=0,n}function Ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Wt.memoizedState=hn=n:hn=hn.next=n,hn}function ui(){if(on===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var i=hn===null?Wt.memoizedState:hn.next;if(i!==null)hn=i,on=n;else{if(n===null)throw Error(t(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},hn===null?Wt.memoizedState=hn=n:hn=hn.next=n}return hn}function oa(n,i){return typeof i=="function"?i(n):i}function af(n){var i=ui(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=on,d=c.baseQueue,_=a.pending;if(_!==null){if(d!==null){var T=d.next;d.next=_.next,_.next=T}c.baseQueue=d=_,a.pending=null}if(d!==null){_=d.next,c=c.baseState;var N=T=null,z=null,te=_;do{var ge=te.lane;if((os&ge)===ge)z!==null&&(z=z.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),c=te.hasEagerState?te.eagerState:n(c,te.action);else{var xe={lane:ge,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};z===null?(N=z=xe,T=c):z=z.next=xe,Wt.lanes|=ge,as|=ge}te=te.next}while(te!==null&&te!==_);z===null?T=c:z.next=N,_i(c,i.memoizedState)||(Xn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do _=d.lane,Wt.lanes|=_,as|=_,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function lf(n){var i=ui(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,_=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do _=n(_,T.action),T=T.next;while(T!==d);_i(_,i.memoizedState)||(Xn=!0),i.memoizedState=_,i.baseQueue===null&&(i.baseState=_),a.lastRenderedState=_}return[_,c]}function Zp(){}function Qp(n,i){var a=Wt,c=ui(),d=i(),_=!_i(c.memoizedState,d);if(_&&(c.memoizedState=d,Xn=!0),c=c.queue,cf(tm.bind(null,a,c,n),[n]),c.getSnapshot!==i||_||hn!==null&&hn.memoizedState.tag&1){if(a.flags|=2048,aa(9,em.bind(null,a,c,d,i),void 0,null),pn===null)throw Error(t(349));(os&30)!==0||Jp(a,i,d)}return d}function Jp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function em(n,i,a,c){i.value=a,i.getSnapshot=c,nm(i)&&im(n)}function tm(n,i,a){return a(function(){nm(i)&&im(n)})}function nm(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!_i(n,a)}catch{return!0}}function im(n){var i=er(n,1);i!==null&&Mi(i,n,1,-1)}function rm(n){var i=Ni();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:n},i.queue=n,n=n.dispatch=ty.bind(null,Wt,n),[i.memoizedState,n]}function aa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function sm(){return ui().memoizedState}function Pl(n,i,a,c){var d=Ni();Wt.flags|=n,d.memoizedState=aa(1|i,a,void 0,c===void 0?null:c)}function Ll(n,i,a,c){var d=ui();c=c===void 0?null:c;var _=void 0;if(on!==null){var T=on.memoizedState;if(_=T.destroy,c!==null&&rf(c,T.deps)){d.memoizedState=aa(i,a,_,c);return}}Wt.flags|=n,d.memoizedState=aa(1|i,a,_,c)}function om(n,i){return Pl(8390656,8,n,i)}function cf(n,i){return Ll(2048,8,n,i)}function am(n,i){return Ll(4,2,n,i)}function lm(n,i){return Ll(4,4,n,i)}function cm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function um(n,i,a){return a=a!=null?a.concat([n]):null,Ll(4,4,cm.bind(null,i,n),a)}function uf(){}function fm(n,i){var a=ui();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&rf(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function dm(n,i){var a=ui();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&rf(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function hm(n,i,a){return(os&21)===0?(n.baseState&&(n.baseState=!1,Xn=!0),n.memoizedState=a):(_i(a,i)||(a=Pt(),Wt.lanes|=a,as|=a,n.baseState=!0),i)}function Jv(n,i){var a=xt;xt=a!==0&&4>a?a:4,n(!0);var c=nf.transition;nf.transition={};try{n(!1),i()}finally{xt=a,nf.transition=c}}function pm(){return ui().memoizedState}function ey(n,i,a){var c=Or(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},mm(n))gm(i,a);else if(a=jp(n,i,a,c),a!==null){var d=Fn();Mi(a,n,c,d),_m(a,i,c)}}function ty(n,i,a){var c=Or(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(mm(n))gm(i,d);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=i.lastRenderedReducer,_!==null))try{var T=i.lastRenderedState,N=_(T,a);if(d.hasEagerState=!0,d.eagerState=N,_i(N,T)){var z=i.interleaved;z===null?(d.next=d,Ku(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}a=jp(n,i,d,c),a!==null&&(d=Fn(),Mi(a,n,c,d),_m(a,i,c))}}function mm(n){var i=n.alternate;return n===Wt||i!==null&&i===Wt}function gm(n,i){ra=bl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function _m(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,dn(n,a)}}var Dl={readContext:ci,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},ny={readContext:ci,useCallback:function(n,i){return Ni().memoizedState=[n,i===void 0?null:i],n},useContext:ci,useEffect:om,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Pl(4194308,4,cm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Pl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Pl(4,2,n,i)},useMemo:function(n,i){var a=Ni();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ni();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=ey.bind(null,Wt,n),[c.memoizedState,n]},useRef:function(n){var i=Ni();return n={current:n},i.memoizedState=n},useState:rm,useDebugValue:uf,useDeferredValue:function(n){return Ni().memoizedState=n},useTransition:function(){var n=rm(!1),i=n[0];return n=Jv.bind(null,n[1]),Ni().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Wt,d=Ni();if(zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),pn===null)throw Error(t(349));(os&30)!==0||Jp(c,i,a)}d.memoizedState=a;var _={value:a,getSnapshot:i};return d.queue=_,om(tm.bind(null,c,_,n),[n]),c.flags|=2048,aa(9,em.bind(null,c,_,a,i),void 0,null),a},useId:function(){var n=Ni(),i=pn.identifierPrefix;if(zt){var a=Ji,c=Qi;a=(c&~(1<<32-st(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=sa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Qv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},iy={readContext:ci,useCallback:fm,useContext:ci,useEffect:cf,useImperativeHandle:um,useInsertionEffect:am,useLayoutEffect:lm,useMemo:dm,useReducer:af,useRef:sm,useState:function(){return af(oa)},useDebugValue:uf,useDeferredValue:function(n){var i=ui();return hm(i,on.memoizedState,n)},useTransition:function(){var n=af(oa)[0],i=ui().memoizedState;return[n,i]},useMutableSource:Zp,useSyncExternalStore:Qp,useId:pm,unstable_isNewReconciler:!1},ry={readContext:ci,useCallback:fm,useContext:ci,useEffect:cf,useImperativeHandle:um,useInsertionEffect:am,useLayoutEffect:lm,useMemo:dm,useReducer:lf,useRef:sm,useState:function(){return lf(oa)},useDebugValue:uf,useDeferredValue:function(n){var i=ui();return on===null?i.memoizedState=n:hm(i,on.memoizedState,n)},useTransition:function(){var n=lf(oa)[0],i=ui().memoizedState;return[n,i]},useMutableSource:Zp,useSyncExternalStore:Qp,useId:pm,unstable_isNewReconciler:!1};function yi(n,i){if(n&&n.defaultProps){i=le({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function ff(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:le({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Il={isMounted:function(n){return(n=n._reactInternals)?Li(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Fn(),d=Or(n),_=tr(c,d);_.payload=i,a!=null&&(_.callback=a),i=Ir(n,_,d),i!==null&&(Mi(i,n,d,c),wl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Fn(),d=Or(n),_=tr(c,d);_.tag=1,_.payload=i,a!=null&&(_.callback=a),i=Ir(n,_,d),i!==null&&(Mi(i,n,d,c),wl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Fn(),c=Or(n),d=tr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Ir(n,d,c),i!==null&&(Mi(i,n,c,a),wl(i,n,c))}};function vm(n,i,a,c,d,_,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,_,T):i.prototype&&i.prototype.isPureReactComponent?!Yo(a,c)||!Yo(d,_):!0}function ym(n,i,a){var c=!1,d=Pr,_=i.contextType;return typeof _=="object"&&_!==null?_=ci(_):(d=Wn(i)?ts:Tn.current,c=i.contextTypes,_=(c=c!=null)?Bs(n,d):Pr),i=new i(a,_),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Il,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=_),i}function xm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Il.enqueueReplaceState(i,i.state,null)}function df(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Zu(n);var _=i.contextType;typeof _=="object"&&_!==null?d.context=ci(_):(_=Wn(i)?ts:Tn.current,d.context=Bs(n,_)),d.state=n.memoizedState,_=i.getDerivedStateFromProps,typeof _=="function"&&(ff(n,i,_,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Il.enqueueReplaceState(d,d.state,null),Al(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function $s(n,i){try{var a="",c=i;do a+=he(c),c=c.return;while(c);var d=a}catch(_){d=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:i,stack:d,digest:null}}function hf(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function pf(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var sy=typeof WeakMap=="function"?WeakMap:Map;function Sm(n,i,a){a=tr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Bl||(Bl=!0,bf=c),pf(n,i)},a}function Mm(n,i,a){a=tr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){pf(n,i)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){pf(n,i),typeof c!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Em(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new sy;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=yy.bind(null,n,i,a),i.then(n,n))}function Tm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function wm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=tr(-1,1),i.tag=2,Ir(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var oy=P.ReactCurrentOwner,Xn=!1;function Nn(n,i,a,c){i.child=n===null?Xp(i,null,a,c):Ws(i,n.child,a,c)}function Am(n,i,a,c,d){a=a.render;var _=i.ref;return js(i,d),c=sf(n,i,a,c,_,d),a=of(),n!==null&&!Xn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,nr(n,i,d)):(zt&&a&&Hu(i),i.flags|=1,Nn(n,i,c,d),i.child)}function Rm(n,i,a,c,d){if(n===null){var _=a.type;return typeof _=="function"&&!Ff(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=_,Cm(n,i,_,c,d)):(n=jl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(_=n.child,(n.lanes&d)===0){var T=_.memoizedProps;if(a=a.compare,a=a!==null?a:Yo,a(T,c)&&n.ref===i.ref)return nr(n,i,d)}return i.flags|=1,n=zr(_,c),n.ref=i.ref,n.return=i,i.child=n}function Cm(n,i,a,c,d){if(n!==null){var _=n.memoizedProps;if(Yo(_,c)&&n.ref===i.ref)if(Xn=!1,i.pendingProps=c=_,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Xn=!0);else return i.lanes=n.lanes,nr(n,i,d)}return mf(n,i,a,c,d)}function bm(n,i,a){var c=i.pendingProps,d=c.children,_=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ks,ei),ei|=a;else{if((a&1073741824)===0)return n=_!==null?_.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ut(Ks,ei),ei|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:a,Ut(Ks,ei),ei|=c}else _!==null?(c=_.baseLanes|a,i.memoizedState=null):c=a,Ut(Ks,ei),ei|=c;return Nn(n,i,d,a),i.child}function Pm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function mf(n,i,a,c,d){var _=Wn(a)?ts:Tn.current;return _=Bs(i,_),js(i,d),a=sf(n,i,a,c,_,d),c=of(),n!==null&&!Xn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,nr(n,i,d)):(zt&&c&&Hu(i),i.flags|=1,Nn(n,i,a,d),i.child)}function Lm(n,i,a,c,d){if(Wn(a)){var _=!0;_l(i)}else _=!1;if(js(i,d),i.stateNode===null)Nl(n,i),ym(i,a,c),df(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,N=i.memoizedProps;T.props=N;var z=T.context,te=a.contextType;typeof te=="object"&&te!==null?te=ci(te):(te=Wn(a)?ts:Tn.current,te=Bs(i,te));var ge=a.getDerivedStateFromProps,xe=typeof ge=="function"||typeof T.getSnapshotBeforeUpdate=="function";xe||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==c||z!==te)&&xm(i,T,c,te),Dr=!1;var me=i.memoizedState;T.state=me,Al(i,c,T,d),z=i.memoizedState,N!==c||me!==z||Gn.current||Dr?(typeof ge=="function"&&(ff(i,a,ge,c),z=i.memoizedState),(N=Dr||vm(i,a,N,c,me,z,te))?(xe||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),T.props=c,T.state=z,T.context=te,c=N):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Yp(n,i),N=i.memoizedProps,te=i.type===i.elementType?N:yi(i.type,N),T.props=te,xe=i.pendingProps,me=T.context,z=a.contextType,typeof z=="object"&&z!==null?z=ci(z):(z=Wn(a)?ts:Tn.current,z=Bs(i,z));var Ie=a.getDerivedStateFromProps;(ge=typeof Ie=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==xe||me!==z)&&xm(i,T,c,z),Dr=!1,me=i.memoizedState,T.state=me,Al(i,c,T,d);var ke=i.memoizedState;N!==xe||me!==ke||Gn.current||Dr?(typeof Ie=="function"&&(ff(i,a,Ie,c),ke=i.memoizedState),(te=Dr||vm(i,a,te,c,me,ke,z)||!1)?(ge||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,ke,z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,ke,z)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ke),T.props=c,T.state=ke,T.context=z,c=te):(typeof T.componentDidUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),c=!1)}return gf(n,i,a,c,_,d)}function gf(n,i,a,c,d,_){Pm(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&Fp(i,a,!1),nr(n,i,_);c=i.stateNode,oy.current=i;var N=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Ws(i,n.child,null,_),i.child=Ws(i,null,N,_)):Nn(n,i,N,_),i.memoizedState=c.state,d&&Fp(i,a,!0),i.child}function Dm(n){var i=n.stateNode;i.pendingContext?Up(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Up(n,i.context,!1),Qu(n,i.containerInfo)}function Im(n,i,a,c,d){return Gs(),Xu(d),i.flags|=256,Nn(n,i,a,c),i.child}var _f={dehydrated:null,treeContext:null,retryLane:0};function vf(n){return{baseLanes:n,cachePool:null,transitions:null}}function Um(n,i,a){var c=i.pendingProps,d=Gt.current,_=!1,T=(i.flags&128)!==0,N;if((N=T)||(N=n!==null&&n.memoizedState===null?!1:(d&2)!==0),N?(_=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ut(Gt,d&1),n===null)return Wu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,_?(c=i.mode,_=i.child,T={mode:"hidden",children:T},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=Yl(T,c,0,null),n=fs(n,c,a,null),_.return=i,n.return=i,_.sibling=n,i.child=_,i.child.memoizedState=vf(a),i.memoizedState=_f,n):yf(i,T));if(d=n.memoizedState,d!==null&&(N=d.dehydrated,N!==null))return ay(n,i,T,c,N,d,a);if(_){_=c.fallback,T=i.mode,d=n.child,N=d.sibling;var z={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=zr(d,z),c.subtreeFlags=d.subtreeFlags&14680064),N!==null?_=zr(N,_):(_=fs(_,T,a,null),_.flags|=2),_.return=i,c.return=i,c.sibling=_,i.child=c,c=_,_=i.child,T=n.child.memoizedState,T=T===null?vf(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=n.childLanes&~a,i.memoizedState=_f,c}return _=n.child,n=_.sibling,c=zr(_,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function yf(n,i){return i=Yl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ul(n,i,a,c){return c!==null&&Xu(c),Ws(i,n.child,null,a),n=yf(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function ay(n,i,a,c,d,_,T){if(a)return i.flags&256?(i.flags&=-257,c=hf(Error(t(422))),Ul(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(_=c.fallback,d=i.mode,c=Yl({mode:"visible",children:c.children},d,0,null),_=fs(_,d,T,null),_.flags|=2,c.return=i,_.return=i,c.sibling=_,i.child=c,(i.mode&1)!==0&&Ws(i,n.child,null,T),i.child.memoizedState=vf(T),i.memoizedState=_f,_);if((i.mode&1)===0)return Ul(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var N=c.dgst;return c=N,_=Error(t(419)),c=hf(_,c,void 0),Ul(n,i,T,c)}if(N=(T&n.childLanes)!==0,Xn||N){if(c=pn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==_.retryLane&&(_.retryLane=d,er(n,d),Mi(c,n,d,-1))}return Nf(),c=hf(Error(t(421))),Ul(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=xy.bind(null,n),d._reactRetry=i,null):(n=_.treeContext,Jn=Cr(d.nextSibling),Qn=i,zt=!0,vi=null,n!==null&&(ai[li++]=Qi,ai[li++]=Ji,ai[li++]=ns,Qi=n.id,Ji=n.overflow,ns=i),i=yf(i,c.children),i.flags|=4096,i)}function Nm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),qu(n.return,i,a)}function xf(n,i,a,c,d){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=a,_.tailMode=d)}function Fm(n,i,a){var c=i.pendingProps,d=c.revealOrder,_=c.tail;if(Nn(n,i,c.children,a),c=Gt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Nm(n,a,i);else if(n.tag===19)Nm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ut(Gt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Rl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),xf(i,!1,d,a,_);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Rl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}xf(i,!0,a,null,_);break;case"together":xf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Nl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function nr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),as|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=zr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=zr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function ly(n,i,a){switch(i.tag){case 3:Dm(i),Gs();break;case 5:Kp(i);break;case 1:Wn(i.type)&&_l(i);break;case 4:Qu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ut(El,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ut(Gt,Gt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Um(n,i,a):(Ut(Gt,Gt.current&1),n=nr(n,i,a),n!==null?n.sibling:null);Ut(Gt,Gt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Fm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ut(Gt,Gt.current),c)break;return null;case 22:case 23:return i.lanes=0,bm(n,i,a)}return nr(n,i,a)}var Om,Sf,km,zm;Om=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Sf=function(){},km=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ss(Ui.current);var _=null;switch(a){case"input":d=B(n,d),c=B(n,c),_=[];break;case"select":d=le({},d,{value:void 0}),c=le({},c,{value:void 0}),_=[];break;case"textarea":d=A(n,d),c=A(n,c),_=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=pl)}dt(a,c);var T;a=null;for(te in d)if(!c.hasOwnProperty(te)&&d.hasOwnProperty(te)&&d[te]!=null)if(te==="style"){var N=d[te];for(T in N)N.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(o.hasOwnProperty(te)?_||(_=[]):(_=_||[]).push(te,null));for(te in c){var z=c[te];if(N=d!=null?d[te]:void 0,c.hasOwnProperty(te)&&z!==N&&(z!=null||N!=null))if(te==="style")if(N){for(T in N)!N.hasOwnProperty(T)||z&&z.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in z)z.hasOwnProperty(T)&&N[T]!==z[T]&&(a||(a={}),a[T]=z[T])}else a||(_||(_=[]),_.push(te,a)),a=z;else te==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,N=N?N.__html:void 0,z!=null&&N!==z&&(_=_||[]).push(te,z)):te==="children"?typeof z!="string"&&typeof z!="number"||(_=_||[]).push(te,""+z):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(o.hasOwnProperty(te)?(z!=null&&te==="onScroll"&&Ft("scroll",n),_||N===z||(_=[])):(_=_||[]).push(te,z))}a&&(_=_||[]).push("style",a);var te=_;(i.updateQueue=te)&&(i.flags|=4)}},zm=function(n,i,a,c){a!==c&&(i.flags|=4)};function la(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function An(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function cy(n,i,a){var c=i.pendingProps;switch(Vu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(i),null;case 1:return Wn(i.type)&&gl(),An(i),null;case 3:return c=i.stateNode,Ys(),Ot(Gn),Ot(Tn),tf(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Sl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,vi!==null&&(Df(vi),vi=null))),Sf(n,i),An(i),null;case 5:Ju(i);var d=ss(ia.current);if(a=i.type,n!==null&&i.stateNode!=null)km(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return An(i),null}if(n=ss(Ui.current),Sl(i)){c=i.stateNode,a=i.type;var _=i.memoizedProps;switch(c[Ii]=i,c[Qo]=_,n=(i.mode&1)!==0,a){case"dialog":Ft("cancel",c),Ft("close",c);break;case"iframe":case"object":case"embed":Ft("load",c);break;case"video":case"audio":for(d=0;d<qo.length;d++)Ft(qo[d],c);break;case"source":Ft("error",c);break;case"img":case"image":case"link":Ft("error",c),Ft("load",c);break;case"details":Ft("toggle",c);break;case"input":Dn(c,_),Ft("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},Ft("invalid",c);break;case"textarea":Q(c,_),Ft("invalid",c)}dt(a,_),d=null;for(var T in _)if(_.hasOwnProperty(T)){var N=_[T];T==="children"?typeof N=="string"?c.textContent!==N&&(_.suppressHydrationWarning!==!0&&hl(c.textContent,N,n),d=["children",N]):typeof N=="number"&&c.textContent!==""+N&&(_.suppressHydrationWarning!==!0&&hl(c.textContent,N,n),d=["children",""+N]):o.hasOwnProperty(T)&&N!=null&&T==="onScroll"&&Ft("scroll",c)}switch(a){case"input":Dt(c),je(c,_,!0);break;case"textarea":Dt(c),_e(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=pl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ue(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Ii]=i,n[Qo]=c,Om(n,i,!1,!1),i.stateNode=n;e:{switch(T=it(a,c),a){case"dialog":Ft("cancel",n),Ft("close",n),d=c;break;case"iframe":case"object":case"embed":Ft("load",n),d=c;break;case"video":case"audio":for(d=0;d<qo.length;d++)Ft(qo[d],n);d=c;break;case"source":Ft("error",n),d=c;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),d=c;break;case"details":Ft("toggle",n),d=c;break;case"input":Dn(n,c),d=B(n,c),Ft("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=le({},c,{value:void 0}),Ft("invalid",n);break;case"textarea":Q(n,c),d=A(n,c),Ft("invalid",n);break;default:d=c}dt(a,d),N=d;for(_ in N)if(N.hasOwnProperty(_)){var z=N[_];_==="style"?et(n,z):_==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&qe(n,z)):_==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&$e(n,z):typeof z=="number"&&$e(n,""+z):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?z!=null&&_==="onScroll"&&Ft("scroll",n):z!=null&&I(n,_,z,T))}switch(a){case"input":Dt(n),je(n,c,!1);break;case"textarea":Dt(n),_e(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Te(c.value));break;case"select":n.multiple=!!c.multiple,_=c.value,_!=null?D(n,!!c.multiple,_,!1):c.defaultValue!=null&&D(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=pl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return An(i),null;case 6:if(n&&i.stateNode!=null)zm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ss(ia.current),ss(Ui.current),Sl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ii]=i,(_=c.nodeValue!==a)&&(n=Qn,n!==null))switch(n.tag){case 3:hl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&hl(c.nodeValue,a,(n.mode&1)!==0)}_&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ii]=i,i.stateNode=c}return An(i),null;case 13:if(Ot(Gt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Vp(),Gs(),i.flags|=98560,_=!1;else if(_=Sl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=i.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ii]=i}else Gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;An(i),_=!1}else vi!==null&&(Df(vi),vi=null),_=!0;if(!_)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Gt.current&1)!==0?an===0&&(an=3):Nf())),i.updateQueue!==null&&(i.flags|=4),An(i),null);case 4:return Ys(),Sf(n,i),n===null&&Ko(i.stateNode.containerInfo),An(i),null;case 10:return $u(i.type._context),An(i),null;case 17:return Wn(i.type)&&gl(),An(i),null;case 19:if(Ot(Gt),_=i.memoizedState,_===null)return An(i),null;if(c=(i.flags&128)!==0,T=_.rendering,T===null)if(c)la(_,!1);else{if(an!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Rl(n),T!==null){for(i.flags|=128,la(_,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)_=a,n=c,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,n=T.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ut(Gt,Gt.current&1|2),i.child}n=n.sibling}_.tail!==null&&q()>Zs&&(i.flags|=128,c=!0,la(_,!1),i.lanes=4194304)}else{if(!c)if(n=Rl(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),la(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!zt)return An(i),null}else 2*q()-_.renderingStartTime>Zs&&a!==1073741824&&(i.flags|=128,c=!0,la(_,!1),i.lanes=4194304);_.isBackwards?(T.sibling=i.child,i.child=T):(a=_.last,a!==null?a.sibling=T:i.child=T,_.last=T)}return _.tail!==null?(i=_.tail,_.rendering=i,_.tail=i.sibling,_.renderingStartTime=q(),i.sibling=null,a=Gt.current,Ut(Gt,c?a&1|2:a&1),i):(An(i),null);case 22:case 23:return Uf(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ei&1073741824)!==0&&(An(i),i.subtreeFlags&6&&(i.flags|=8192)):An(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function uy(n,i){switch(Vu(i),i.tag){case 1:return Wn(i.type)&&gl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ys(),Ot(Gn),Ot(Tn),tf(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Ju(i),null;case 13:if(Ot(Gt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Gt),null;case 4:return Ys(),null;case 10:return $u(i.type._context),null;case 22:case 23:return Uf(),null;case 24:return null;default:return null}}var Fl=!1,Rn=!1,fy=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function qs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){$t(n,i,c)}else a.current=null}function Mf(n,i,a){try{a()}catch(c){$t(n,i,c)}}var Bm=!1;function dy(n,i){if(Iu=nl,n=vp(),wu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var T=0,N=-1,z=-1,te=0,ge=0,xe=n,me=null;t:for(;;){for(var Ie;xe!==a||d!==0&&xe.nodeType!==3||(N=T+d),xe!==_||c!==0&&xe.nodeType!==3||(z=T+c),xe.nodeType===3&&(T+=xe.nodeValue.length),(Ie=xe.firstChild)!==null;)me=xe,xe=Ie;for(;;){if(xe===n)break t;if(me===a&&++te===d&&(N=T),me===_&&++ge===c&&(z=T),(Ie=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Ie}a=N===-1||z===-1?null:{start:N,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uu={focusedElem:n,selectionRange:a},nl=!1,Ue=i;Ue!==null;)if(i=Ue,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ue=n;else for(;Ue!==null;){i=Ue;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var Be=ke.memoizedProps,Zt=ke.memoizedState,$=i.stateNode,G=$.getSnapshotBeforeUpdate(i.elementType===i.type?Be:yi(i.type,Be),Zt);$.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){$t(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,Ue=n;break}Ue=i.return}return ke=Bm,Bm=!1,ke}function ca(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var _=d.destroy;d.destroy=void 0,_!==void 0&&Mf(i,a,_)}d=d.next}while(d!==c)}}function Ol(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Ef(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Hm(n){var i=n.alternate;i!==null&&(n.alternate=null,Hm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ii],delete i[Qo],delete i[ku],delete i[$v],delete i[qv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Vm(n){return n.tag===5||n.tag===3||n.tag===4}function Gm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Vm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Tf(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=pl));else if(c!==4&&(n=n.child,n!==null))for(Tf(n,i,a),n=n.sibling;n!==null;)Tf(n,i,a),n=n.sibling}function wf(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(wf(n,i,a),n=n.sibling;n!==null;)wf(n,i,a),n=n.sibling}var yn=null,xi=!1;function Ur(n,i,a){for(a=a.child;a!==null;)Wm(n,i,a),a=a.sibling}function Wm(n,i,a){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(Qe,a)}catch{}switch(a.tag){case 5:Rn||qs(a,i);case 6:var c=yn,d=xi;yn=null,Ur(n,i,a),yn=c,xi=d,yn!==null&&(xi?(n=yn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):yn.removeChild(a.stateNode));break;case 18:yn!==null&&(xi?(n=yn,a=a.stateNode,n.nodeType===8?Ou(n.parentNode,a):n.nodeType===1&&Ou(n,a),Ho(n)):Ou(yn,a.stateNode));break;case 4:c=yn,d=xi,yn=a.stateNode.containerInfo,xi=!0,Ur(n,i,a),yn=c,xi=d;break;case 0:case 11:case 14:case 15:if(!Rn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var _=d,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&Mf(a,i,T),d=d.next}while(d!==c)}Ur(n,i,a);break;case 1:if(!Rn&&(qs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(N){$t(a,i,N)}Ur(n,i,a);break;case 21:Ur(n,i,a);break;case 22:a.mode&1?(Rn=(c=Rn)||a.memoizedState!==null,Ur(n,i,a),Rn=c):Ur(n,i,a);break;default:Ur(n,i,a)}}function Xm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new fy),i.forEach(function(c){var d=Sy.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Si(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var _=n,T=i,N=T;e:for(;N!==null;){switch(N.tag){case 5:yn=N.stateNode,xi=!1;break e;case 3:yn=N.stateNode.containerInfo,xi=!0;break e;case 4:yn=N.stateNode.containerInfo,xi=!0;break e}N=N.return}if(yn===null)throw Error(t(160));Wm(_,T,d),yn=null,xi=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(te){$t(d,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)jm(i,n),i=i.sibling}function jm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Si(i,n),Fi(n),c&4){try{ca(3,n,n.return),Ol(3,n)}catch(Be){$t(n,n.return,Be)}try{ca(5,n,n.return)}catch(Be){$t(n,n.return,Be)}}break;case 1:Si(i,n),Fi(n),c&512&&a!==null&&qs(a,a.return);break;case 5:if(Si(i,n),Fi(n),c&512&&a!==null&&qs(a,a.return),n.flags&32){var d=n.stateNode;try{$e(d,"")}catch(Be){$t(n,n.return,Be)}}if(c&4&&(d=n.stateNode,d!=null)){var _=n.memoizedProps,T=a!==null?a.memoizedProps:_,N=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{N==="input"&&_.type==="radio"&&_.name!=null&&mt(d,_),it(N,T);var te=it(N,_);for(T=0;T<z.length;T+=2){var ge=z[T],xe=z[T+1];ge==="style"?et(d,xe):ge==="dangerouslySetInnerHTML"?qe(d,xe):ge==="children"?$e(d,xe):I(d,ge,xe,te)}switch(N){case"input":ft(d,_);break;case"textarea":fe(d,_);break;case"select":var me=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!_.multiple;var Ie=_.value;Ie!=null?D(d,!!_.multiple,Ie,!1):me!==!!_.multiple&&(_.defaultValue!=null?D(d,!!_.multiple,_.defaultValue,!0):D(d,!!_.multiple,_.multiple?[]:"",!1))}d[Qo]=_}catch(Be){$t(n,n.return,Be)}}break;case 6:if(Si(i,n),Fi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,_=n.memoizedProps;try{d.nodeValue=_}catch(Be){$t(n,n.return,Be)}}break;case 3:if(Si(i,n),Fi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ho(i.containerInfo)}catch(Be){$t(n,n.return,Be)}break;case 4:Si(i,n),Fi(n);break;case 13:Si(i,n),Fi(n),d=n.child,d.flags&8192&&(_=d.memoizedState!==null,d.stateNode.isHidden=_,!_||d.alternate!==null&&d.alternate.memoizedState!==null||(Cf=q())),c&4&&Xm(n);break;case 22:if(ge=a!==null&&a.memoizedState!==null,n.mode&1?(Rn=(te=Rn)||ge,Si(i,n),Rn=te):Si(i,n),Fi(n),c&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!ge&&(n.mode&1)!==0)for(Ue=n,ge=n.child;ge!==null;){for(xe=Ue=ge;Ue!==null;){switch(me=Ue,Ie=me.child,me.tag){case 0:case 11:case 14:case 15:ca(4,me,me.return);break;case 1:qs(me,me.return);var ke=me.stateNode;if(typeof ke.componentWillUnmount=="function"){c=me,a=me.return;try{i=c,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(Be){$t(c,a,Be)}}break;case 5:qs(me,me.return);break;case 22:if(me.memoizedState!==null){qm(xe);continue}}Ie!==null?(Ie.return=me,Ue=Ie):qm(xe)}ge=ge.sibling}e:for(ge=null,xe=n;;){if(xe.tag===5){if(ge===null){ge=xe;try{d=xe.stateNode,te?(_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(N=xe.stateNode,z=xe.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null,N.style.display=Je("display",T))}catch(Be){$t(n,n.return,Be)}}}else if(xe.tag===6){if(ge===null)try{xe.stateNode.nodeValue=te?"":xe.memoizedProps}catch(Be){$t(n,n.return,Be)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;ge===xe&&(ge=null),xe=xe.return}ge===xe&&(ge=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:Si(i,n),Fi(n),c&4&&Xm(n);break;case 21:break;default:Si(i,n),Fi(n)}}function Fi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Vm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&($e(d,""),c.flags&=-33);var _=Gm(n);wf(n,_,d);break;case 3:case 4:var T=c.stateNode.containerInfo,N=Gm(n);Tf(n,N,T);break;default:throw Error(t(161))}}catch(z){$t(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function hy(n,i,a){Ue=n,Ym(n)}function Ym(n,i,a){for(var c=(n.mode&1)!==0;Ue!==null;){var d=Ue,_=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||Fl;if(!T){var N=d.alternate,z=N!==null&&N.memoizedState!==null||Rn;N=Fl;var te=Rn;if(Fl=T,(Rn=z)&&!te)for(Ue=d;Ue!==null;)T=Ue,z=T.child,T.tag===22&&T.memoizedState!==null?Km(d):z!==null?(z.return=T,Ue=z):Km(d);for(;_!==null;)Ue=_,Ym(_),_=_.sibling;Ue=d,Fl=N,Rn=te}$m(n)}else(d.subtreeFlags&8772)!==0&&_!==null?(_.return=d,Ue=_):$m(n)}}function $m(n){for(;Ue!==null;){var i=Ue;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Rn||Ol(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Rn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:yi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=i.updateQueue;_!==null&&qp(i,_,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}qp(i,T,a)}break;case 5:var N=i.stateNode;if(a===null&&i.flags&4){a=N;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var ge=te.memoizedState;if(ge!==null){var xe=ge.dehydrated;xe!==null&&Ho(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Rn||i.flags&512&&Ef(i)}catch(me){$t(i,i.return,me)}}if(i===n){Ue=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ue=a;break}Ue=i.return}}function qm(n){for(;Ue!==null;){var i=Ue;if(i===n){Ue=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ue=a;break}Ue=i.return}}function Km(n){for(;Ue!==null;){var i=Ue;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ol(4,i)}catch(z){$t(i,a,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(z){$t(i,d,z)}}var _=i.return;try{Ef(i)}catch(z){$t(i,_,z)}break;case 5:var T=i.return;try{Ef(i)}catch(z){$t(i,T,z)}}}catch(z){$t(i,i.return,z)}if(i===n){Ue=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Ue=N;break}Ue=i.return}}var py=Math.ceil,kl=P.ReactCurrentDispatcher,Af=P.ReactCurrentOwner,fi=P.ReactCurrentBatchConfig,St=0,pn=null,en=null,xn=0,ei=0,Ks=br(0),an=0,ua=null,as=0,zl=0,Rf=0,fa=null,jn=null,Cf=0,Zs=1/0,ir=null,Bl=!1,bf=null,Nr=null,Hl=!1,Fr=null,Vl=0,da=0,Pf=null,Gl=-1,Wl=0;function Fn(){return(St&6)!==0?q():Gl!==-1?Gl:Gl=q()}function Or(n){return(n.mode&1)===0?1:(St&2)!==0&&xn!==0?xn&-xn:Zv.transition!==null?(Wl===0&&(Wl=Pt()),Wl):(n=xt,n!==0||(n=window.event,n=n===void 0?16:Qh(n.type)),n)}function Mi(n,i,a,c){if(50<da)throw da=0,Pf=null,Error(t(185));fn(n,a,c),((St&2)===0||n!==pn)&&(n===pn&&((St&2)===0&&(zl|=a),an===4&&kr(n,xn)),Yn(n,c),a===1&&St===0&&(i.mode&1)===0&&(Zs=q()+500,vl&&Lr()))}function Yn(n,i){var a=n.callbackNode;Un(n,i);var c=Mn(n,n===pn?xn:0);if(c===0)a!==null&&b(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&b(a),i===1)n.tag===0?Kv(Qm.bind(null,n)):Op(Qm.bind(null,n)),jv(function(){(St&6)===0&&Lr()}),a=null;else{switch(Di(c)){case 1:a=Se;break;case 4:a=Ce;break;case 16:a=De;break;case 536870912:a=tt;break;default:a=De}a=og(a,Zm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Zm(n,i){if(Gl=-1,Wl=0,(St&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Qs()&&n.callbackNode!==a)return null;var c=Mn(n,n===pn?xn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Xl(n,c);else{i=c;var d=St;St|=2;var _=eg();(pn!==n||xn!==i)&&(ir=null,Zs=q()+500,cs(n,i));do try{_y();break}catch(N){Jm(n,N)}while(!0);Yu(),kl.current=_,St=d,en!==null?i=0:(pn=null,xn=0,i=an)}if(i!==0){if(i===2&&(d=qi(n),d!==0&&(c=d,i=Lf(n,d))),i===1)throw a=ua,cs(n,0),kr(n,c),Yn(n,q()),a;if(i===6)kr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!my(d)&&(i=Xl(n,c),i===2&&(_=qi(n),_!==0&&(c=_,i=Lf(n,_))),i===1))throw a=ua,cs(n,0),kr(n,c),Yn(n,q()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:us(n,jn,ir);break;case 3:if(kr(n,c),(c&130023424)===c&&(i=Cf+500-q(),10<i)){if(Mn(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Fn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Fu(us.bind(null,n,jn,ir),i);break}us(n,jn,ir);break;case 4:if(kr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-st(c);_=1<<T,T=i[T],T>d&&(d=T),c&=~_}if(c=d,c=q()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*py(c/1960))-c,10<c){n.timeoutHandle=Fu(us.bind(null,n,jn,ir),c);break}us(n,jn,ir);break;case 5:us(n,jn,ir);break;default:throw Error(t(329))}}}return Yn(n,q()),n.callbackNode===a?Zm.bind(null,n):null}function Lf(n,i){var a=fa;return n.current.memoizedState.isDehydrated&&(cs(n,i).flags|=256),n=Xl(n,i),n!==2&&(i=jn,jn=a,i!==null&&Df(i)),n}function Df(n){jn===null?jn=n:jn.push.apply(jn,n)}function my(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],_=d.getSnapshot;d=d.value;try{if(!_i(_(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function kr(n,i){for(i&=~Rf,i&=~zl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-st(i),c=1<<a;n[a]=-1,i&=~c}}function Qm(n){if((St&6)!==0)throw Error(t(327));Qs();var i=Mn(n,0);if((i&1)===0)return Yn(n,q()),null;var a=Xl(n,i);if(n.tag!==0&&a===2){var c=qi(n);c!==0&&(i=c,a=Lf(n,c))}if(a===1)throw a=ua,cs(n,0),kr(n,i),Yn(n,q()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,us(n,jn,ir),Yn(n,q()),null}function If(n,i){var a=St;St|=1;try{return n(i)}finally{St=a,St===0&&(Zs=q()+500,vl&&Lr())}}function ls(n){Fr!==null&&Fr.tag===0&&(St&6)===0&&Qs();var i=St;St|=1;var a=fi.transition,c=xt;try{if(fi.transition=null,xt=1,n)return n()}finally{xt=c,fi.transition=a,St=i,(St&6)===0&&Lr()}}function Uf(){ei=Ks.current,Ot(Ks)}function cs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Xv(a)),en!==null)for(a=en.return;a!==null;){var c=a;switch(Vu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&gl();break;case 3:Ys(),Ot(Gn),Ot(Tn),tf();break;case 5:Ju(c);break;case 4:Ys();break;case 13:Ot(Gt);break;case 19:Ot(Gt);break;case 10:$u(c.type._context);break;case 22:case 23:Uf()}a=a.return}if(pn=n,en=n=zr(n.current,null),xn=ei=i,an=0,ua=null,Rf=zl=as=0,jn=fa=null,rs!==null){for(i=0;i<rs.length;i++)if(a=rs[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,_=a.pending;if(_!==null){var T=_.next;_.next=d,c.next=T}a.pending=c}rs=null}return n}function Jm(n,i){do{var a=en;try{if(Yu(),Cl.current=Dl,bl){for(var c=Wt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}bl=!1}if(os=0,hn=on=Wt=null,ra=!1,sa=0,Af.current=null,a===null||a.return===null){an=1,ua=i,en=null;break}e:{var _=n,T=a.return,N=a,z=i;if(i=xn,N.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var te=z,ge=N,xe=ge.tag;if((ge.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ie=Tm(T);if(Ie!==null){Ie.flags&=-257,wm(Ie,T,N,_,i),Ie.mode&1&&Em(_,te,i),i=Ie,z=te;var ke=i.updateQueue;if(ke===null){var Be=new Set;Be.add(z),i.updateQueue=Be}else ke.add(z);break e}else{if((i&1)===0){Em(_,te,i),Nf();break e}z=Error(t(426))}}else if(zt&&N.mode&1){var Zt=Tm(T);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),wm(Zt,T,N,_,i),Xu($s(z,N));break e}}_=z=$s(z,N),an!==4&&(an=2),fa===null?fa=[_]:fa.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,i&=-i,_.lanes|=i;var $=Sm(_,z,i);$p(_,$);break e;case 1:N=z;var G=_.type,K=_.stateNode;if((_.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(Nr===null||!Nr.has(K)))){_.flags|=65536,i&=-i,_.lanes|=i;var Ee=Mm(_,N,i);$p(_,Ee);break e}}_=_.return}while(_!==null)}ng(a)}catch(We){i=We,en===a&&a!==null&&(en=a=a.return);continue}break}while(!0)}function eg(){var n=kl.current;return kl.current=Dl,n===null?Dl:n}function Nf(){(an===0||an===3||an===2)&&(an=4),pn===null||(as&268435455)===0&&(zl&268435455)===0||kr(pn,xn)}function Xl(n,i){var a=St;St|=2;var c=eg();(pn!==n||xn!==i)&&(ir=null,cs(n,i));do try{gy();break}catch(d){Jm(n,d)}while(!0);if(Yu(),St=a,kl.current=c,en!==null)throw Error(t(261));return pn=null,xn=0,an}function gy(){for(;en!==null;)tg(en)}function _y(){for(;en!==null&&!j();)tg(en)}function tg(n){var i=sg(n.alternate,n,ei);n.memoizedProps=n.pendingProps,i===null?ng(n):en=i,Af.current=null}function ng(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=cy(a,i,ei),a!==null){en=a;return}}else{if(a=uy(a,i),a!==null){a.flags&=32767,en=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,en=null;return}}if(i=i.sibling,i!==null){en=i;return}en=i=n}while(i!==null);an===0&&(an=5)}function us(n,i,a){var c=xt,d=fi.transition;try{fi.transition=null,xt=1,vy(n,i,a,c)}finally{fi.transition=d,xt=c}return null}function vy(n,i,a,c){do Qs();while(Fr!==null);if((St&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=a.lanes|a.childLanes;if(vn(n,_),n===pn&&(en=pn=null,xn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Hl||(Hl=!0,og(De,function(){return Qs(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=fi.transition,fi.transition=null;var T=xt;xt=1;var N=St;St|=4,Af.current=null,dy(n,a),jm(a,n),kv(Uu),nl=!!Iu,Uu=Iu=null,n.current=a,hy(a),ie(),St=N,xt=T,fi.transition=_}else n.current=a;if(Hl&&(Hl=!1,Fr=n,Vl=d),_=n.pendingLanes,_===0&&(Nr=null),_t(a.stateNode),Yn(n,q()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Bl)throw Bl=!1,n=bf,bf=null,n;return(Vl&1)!==0&&n.tag!==0&&Qs(),_=n.pendingLanes,(_&1)!==0?n===Pf?da++:(da=0,Pf=n):da=0,Lr(),null}function Qs(){if(Fr!==null){var n=Di(Vl),i=fi.transition,a=xt;try{if(fi.transition=null,xt=16>n?16:n,Fr===null)var c=!1;else{if(n=Fr,Fr=null,Vl=0,(St&6)!==0)throw Error(t(331));var d=St;for(St|=4,Ue=n.current;Ue!==null;){var _=Ue,T=_.child;if((Ue.flags&16)!==0){var N=_.deletions;if(N!==null){for(var z=0;z<N.length;z++){var te=N[z];for(Ue=te;Ue!==null;){var ge=Ue;switch(ge.tag){case 0:case 11:case 15:ca(8,ge,_)}var xe=ge.child;if(xe!==null)xe.return=ge,Ue=xe;else for(;Ue!==null;){ge=Ue;var me=ge.sibling,Ie=ge.return;if(Hm(ge),ge===te){Ue=null;break}if(me!==null){me.return=Ie,Ue=me;break}Ue=Ie}}}var ke=_.alternate;if(ke!==null){var Be=ke.child;if(Be!==null){ke.child=null;do{var Zt=Be.sibling;Be.sibling=null,Be=Zt}while(Be!==null)}}Ue=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,Ue=T;else e:for(;Ue!==null;){if(_=Ue,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:ca(9,_,_.return)}var $=_.sibling;if($!==null){$.return=_.return,Ue=$;break e}Ue=_.return}}var G=n.current;for(Ue=G;Ue!==null;){T=Ue;var K=T.child;if((T.subtreeFlags&2064)!==0&&K!==null)K.return=T,Ue=K;else e:for(T=G;Ue!==null;){if(N=Ue,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Ol(9,N)}}catch(We){$t(N,N.return,We)}if(N===T){Ue=null;break e}var Ee=N.sibling;if(Ee!==null){Ee.return=N.return,Ue=Ee;break e}Ue=N.return}}if(St=d,Lr(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(Qe,n)}catch{}c=!0}return c}finally{xt=a,fi.transition=i}}return!1}function ig(n,i,a){i=$s(a,i),i=Sm(n,i,1),n=Ir(n,i,1),i=Fn(),n!==null&&(fn(n,1,i),Yn(n,i))}function $t(n,i,a){if(n.tag===3)ig(n,n,a);else for(;i!==null;){if(i.tag===3){ig(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Nr===null||!Nr.has(c))){n=$s(a,n),n=Mm(i,n,1),i=Ir(i,n,1),n=Fn(),i!==null&&(fn(i,1,n),Yn(i,n));break}}i=i.return}}function yy(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Fn(),n.pingedLanes|=n.suspendedLanes&a,pn===n&&(xn&a)===a&&(an===4||an===3&&(xn&130023424)===xn&&500>q()-Cf?cs(n,0):Rf|=a),Yn(n,i)}function rg(n,i){i===0&&((n.mode&1)===0?i=1:(i=Yt,Yt<<=1,(Yt&130023424)===0&&(Yt=4194304)));var a=Fn();n=er(n,i),n!==null&&(fn(n,i,a),Yn(n,a))}function xy(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),rg(n,a)}function Sy(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),rg(n,a)}var sg;sg=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Gn.current)Xn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Xn=!1,ly(n,i,a);Xn=(n.flags&131072)!==0}else Xn=!1,zt&&(i.flags&1048576)!==0&&kp(i,xl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Nl(n,i),n=i.pendingProps;var d=Bs(i,Tn.current);js(i,a),d=sf(null,i,c,n,d,a);var _=of();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Wn(c)?(_=!0,_l(i)):_=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Zu(i),d.updater=Il,i.stateNode=d,d._reactInternals=i,df(i,c,n,a),i=gf(null,i,c,!0,_,a)):(i.tag=0,zt&&_&&Hu(i),Nn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Nl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Ey(c),n=yi(c,n),d){case 0:i=mf(null,i,c,n,a);break e;case 1:i=Lm(null,i,c,n,a);break e;case 11:i=Am(null,i,c,n,a);break e;case 14:i=Rm(null,i,c,yi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:yi(c,d),mf(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:yi(c,d),Lm(n,i,c,d,a);case 3:e:{if(Dm(i),n===null)throw Error(t(387));c=i.pendingProps,_=i.memoizedState,d=_.element,Yp(n,i),Al(i,c,null,a);var T=i.memoizedState;if(c=T.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=_,i.memoizedState=_,i.flags&256){d=$s(Error(t(423)),i),i=Im(n,i,c,a,d);break e}else if(c!==d){d=$s(Error(t(424)),i),i=Im(n,i,c,a,d);break e}else for(Jn=Cr(i.stateNode.containerInfo.firstChild),Qn=i,zt=!0,vi=null,a=Xp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Gs(),c===d){i=nr(n,i,a);break e}Nn(n,i,c,a)}i=i.child}return i;case 5:return Kp(i),n===null&&Wu(i),c=i.type,d=i.pendingProps,_=n!==null?n.memoizedProps:null,T=d.children,Nu(c,d)?T=null:_!==null&&Nu(c,_)&&(i.flags|=32),Pm(n,i),Nn(n,i,T,a),i.child;case 6:return n===null&&Wu(i),null;case 13:return Um(n,i,a);case 4:return Qu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ws(i,null,c,a):Nn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:yi(c,d),Am(n,i,c,d,a);case 7:return Nn(n,i,i.pendingProps,a),i.child;case 8:return Nn(n,i,i.pendingProps.children,a),i.child;case 12:return Nn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,_=i.memoizedProps,T=d.value,Ut(El,c._currentValue),c._currentValue=T,_!==null)if(_i(_.value,T)){if(_.children===d.children&&!Gn.current){i=nr(n,i,a);break e}}else for(_=i.child,_!==null&&(_.return=i);_!==null;){var N=_.dependencies;if(N!==null){T=_.child;for(var z=N.firstContext;z!==null;){if(z.context===c){if(_.tag===1){z=tr(-1,a&-a),z.tag=2;var te=_.updateQueue;if(te!==null){te=te.shared;var ge=te.pending;ge===null?z.next=z:(z.next=ge.next,ge.next=z),te.pending=z}}_.lanes|=a,z=_.alternate,z!==null&&(z.lanes|=a),qu(_.return,a,i),N.lanes|=a;break}z=z.next}}else if(_.tag===10)T=_.type===i.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=a,N=T.alternate,N!==null&&(N.lanes|=a),qu(T,a,i),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===i){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}Nn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,js(i,a),d=ci(d),c=c(d),i.flags|=1,Nn(n,i,c,a),i.child;case 14:return c=i.type,d=yi(c,i.pendingProps),d=yi(c.type,d),Rm(n,i,c,d,a);case 15:return Cm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:yi(c,d),Nl(n,i),i.tag=1,Wn(c)?(n=!0,_l(i)):n=!1,js(i,a),ym(i,c,d),df(i,c,d,a),gf(null,i,c,!0,n,a);case 19:return Fm(n,i,a);case 22:return bm(n,i,a)}throw Error(t(156,i.tag))};function og(n,i){return Ja(n,i)}function My(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,i,a,c){return new My(n,i,a,c)}function Ff(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ey(n){if(typeof n=="function")return Ff(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ne)return 11;if(n===ce)return 14}return 2}function zr(n,i){var a=n.alternate;return a===null?(a=di(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function jl(n,i,a,c,d,_){var T=2;if(c=n,typeof n=="function")Ff(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case R:return fs(a.children,d,_,i);case F:T=8,d|=8;break;case C:return n=di(12,a,i,d|2),n.elementType=C,n.lanes=_,n;case Z:return n=di(13,a,i,d),n.elementType=Z,n.lanes=_,n;case se:return n=di(19,a,i,d),n.elementType=se,n.lanes=_,n;case pe:return Yl(a,d,_,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:T=10;break e;case k:T=9;break e;case ne:T=11;break e;case ce:T=14;break e;case ee:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=di(T,a,i,d),i.elementType=n,i.type=c,i.lanes=_,i}function fs(n,i,a,c){return n=di(7,n,c,i),n.lanes=a,n}function Yl(n,i,a,c){return n=di(22,n,c,i),n.elementType=pe,n.lanes=a,n.stateNode={isHidden:!1},n}function Of(n,i,a){return n=di(6,n,null,i),n.lanes=a,n}function kf(n,i,a){return i=di(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Ty(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=En(0),this.expirationTimes=En(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function zf(n,i,a,c,d,_,T,N,z){return n=new Ty(n,i,a,N,z),i===1?(i=1,_===!0&&(i|=8)):i=0,_=di(3,null,null,i),n.current=_,_.stateNode=n,_.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(_),n}function wy(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function ag(n){if(!n)return Pr;n=n._reactInternals;e:{if(Li(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wn(a))return Np(n,a,i)}return i}function lg(n,i,a,c,d,_,T,N,z){return n=zf(a,c,!0,n,d,_,T,N,z),n.context=ag(null),a=n.current,c=Fn(),d=Or(a),_=tr(c,d),_.callback=i??null,Ir(a,_,d),n.current.lanes=d,fn(n,d,c),Yn(n,c),n}function $l(n,i,a,c){var d=i.current,_=Fn(),T=Or(d);return a=ag(a),i.context===null?i.context=a:i.pendingContext=a,i=tr(_,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Ir(d,i,T),n!==null&&(Mi(n,d,T,_),wl(n,d,T)),T}function ql(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function cg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Bf(n,i){cg(n,i),(n=n.alternate)&&cg(n,i)}function Ay(){return null}var ug=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hf(n){this._internalRoot=n}Kl.prototype.render=Hf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));$l(n,i,null,null)},Kl.prototype.unmount=Hf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ls(function(){$l(null,n,null,null)}),i[Ki]=null}};function Kl(n){this._internalRoot=n}Kl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Yh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<wr.length&&i!==0&&i<wr[a].priority;a++);wr.splice(a,0,n),a===0&&Kh(n)}};function Vf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Zl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function fg(){}function Ry(n,i,a,c,d){if(d){if(typeof c=="function"){var _=c;c=function(){var te=ql(T);_.call(te)}}var T=lg(i,c,n,0,null,!1,!1,"",fg);return n._reactRootContainer=T,n[Ki]=T.current,Ko(n.nodeType===8?n.parentNode:n),ls(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var N=c;c=function(){var te=ql(z);N.call(te)}}var z=zf(n,0,!1,null,null,!1,!1,"",fg);return n._reactRootContainer=z,n[Ki]=z.current,Ko(n.nodeType===8?n.parentNode:n),ls(function(){$l(i,z,a,c)}),z}function Ql(n,i,a,c,d){var _=a._reactRootContainer;if(_){var T=_;if(typeof d=="function"){var N=d;d=function(){var z=ql(T);N.call(z)}}$l(i,T,n,d)}else T=Ry(a,i,n,d,c);return ql(T)}Xh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=gt(i.pendingLanes);a!==0&&(dn(i,a|1),Yn(i,q()),(St&6)===0&&(Zs=q()+500,Lr()))}break;case 13:ls(function(){var c=er(n,1);if(c!==null){var d=Fn();Mi(c,n,1,d)}}),Bf(n,1)}},du=function(n){if(n.tag===13){var i=er(n,134217728);if(i!==null){var a=Fn();Mi(i,n,134217728,a)}Bf(n,134217728)}},jh=function(n){if(n.tag===13){var i=Or(n),a=er(n,i);if(a!==null){var c=Fn();Mi(a,n,i,c)}Bf(n,i)}},Yh=function(){return xt},$h=function(n,i){var a=xt;try{return xt=n,i()}finally{xt=a}},Re=function(n,i,a){switch(i){case"input":if(ft(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=ml(c);if(!d)throw Error(t(90));It(c),ft(c,d)}}}break;case"textarea":fe(n,a);break;case"select":i=a.value,i!=null&&D(n,!!a.multiple,i,!1)}},Nt=If,sn=ls;var Cy={usingClientEntryPoint:!1,Events:[Jo,ks,ml,be,rt,If]},ha={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},by={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Za(n),n===null?null:n.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||Ay,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{Qe=Jl.inject(by),ze=Jl}catch{}}return $n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cy,$n.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(i))throw Error(t(200));return wy(n,i,null,a)},$n.createRoot=function(n,i){if(!Vf(n))throw Error(t(299));var a=!1,c="",d=ug;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=zf(n,1,!1,null,null,a,!1,c,d),n[Ki]=i.current,Ko(n.nodeType===8?n.parentNode:n),new Hf(i)},$n.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Za(i),n=n===null?null:n.stateNode,n},$n.flushSync=function(n){return ls(n)},$n.hydrate=function(n,i,a){if(!Zl(i))throw Error(t(200));return Ql(null,n,i,!0,a)},$n.hydrateRoot=function(n,i,a){if(!Vf(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,_="",T=ug;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=lg(i,null,n,1,a??null,d,!1,_,T),n[Ki]=i.current,Ko(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Kl(i)},$n.render=function(n,i,a){if(!Zl(i))throw Error(t(200));return Ql(null,n,i,!1,a)},$n.unmountComponentAtNode=function(n){if(!Zl(n))throw Error(t(40));return n._reactRootContainer?(ls(function(){Ql(null,null,n,!1,function(){n._reactRootContainer=null,n[Ki]=null})}),!0):!1},$n.unstable_batchedUpdates=If,$n.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Zl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ql(n,i,a,!1,c)},$n.version="18.3.1-next-f1338f8080-20240426",$n}var xg;function By(){if(xg)return Xf.exports;xg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Xf.exports=zy(),Xf.exports}var Sg;function Hy(){if(Sg)return ec;Sg=1;var r=By();return ec.createRoot=r.createRoot,ec.hydrateRoot=r.hydrateRoot,ec}var Vy=Hy();const Gy=t_(Vy),ba={black:"#000",white:"#fff"},Js={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},eo={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},to={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},no={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},io={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},ma={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},Wy={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function Pa(r){let e="https://mui.com/production-error/?code="+r;for(let t=1;t<arguments.length;t+=1)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified MUI error #"+r+"; visit "+e+" for the full message."}const Xy=Object.freeze(Object.defineProperty({__proto__:null,default:Pa},Symbol.toStringTag,{value:"Module"})),jy="$$material";function Vt(){return Vt=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Vt.apply(null,arguments)}function Zr(r,e){if(r==null)return{};var t={};for(var s in r)if({}.hasOwnProperty.call(r,s)){if(e.indexOf(s)!==-1)continue;t[s]=r[s]}return t}function Yy(r){if(r.sheet)return r.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===r)return document.styleSheets[e]}function $y(r){var e=document.createElement("style");return e.setAttribute("data-emotion",r.key),r.nonce!==void 0&&e.setAttribute("nonce",r.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var qy=function(){function r(t){var s=this;this._insertTag=function(o){var l;s.tags.length===0?s.insertionPoint?l=s.insertionPoint.nextSibling:s.prepend?l=s.container.firstChild:l=s.before:l=s.tags[s.tags.length-1].nextSibling,s.container.insertBefore(o,l),s.tags.push(o)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=r.prototype;return e.hydrate=function(s){s.forEach(this._insertTag)},e.insert=function(s){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag($y(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=Yy(o);try{l.insertRule(s,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(s));this.ctr++},e.flush=function(){this.tags.forEach(function(s){var o;return(o=s.parentNode)==null?void 0:o.removeChild(s)}),this.tags=[],this.ctr=0},r}(),Pn="-ms-",Hc="-moz-",Tt="-webkit-",r_="comm",Th="rule",wh="decl",Ky="@import",s_="@keyframes",Zy="@layer",Qy=Math.abs,Kc=String.fromCharCode,Jy=Object.assign;function ex(r,e){return Sn(r,0)^45?(((e<<2^Sn(r,0))<<2^Sn(r,1))<<2^Sn(r,2))<<2^Sn(r,3):0}function o_(r){return r.trim()}function tx(r,e){return(r=e.exec(r))?r[0]:r}function wt(r,e,t){return r.replace(e,t)}function Dd(r,e){return r.indexOf(e)}function Sn(r,e){return r.charCodeAt(e)|0}function La(r,e,t){return r.slice(e,t)}function Oi(r){return r.length}function Ah(r){return r.length}function tc(r,e){return e.push(r),r}function nx(r,e){return r.map(e).join("")}var Zc=1,Ro=1,a_=0,Kn=0,rn=0,Io="";function Qc(r,e,t,s,o,l,u){return{value:r,root:e,parent:t,type:s,props:o,children:l,line:Zc,column:Ro,length:u,return:""}}function ga(r,e){return Jy(Qc("",null,null,"",null,null,0),r,{length:-r.length},e)}function ix(){return rn}function rx(){return rn=Kn>0?Sn(Io,--Kn):0,Ro--,rn===10&&(Ro=1,Zc--),rn}function oi(){return rn=Kn<a_?Sn(Io,Kn++):0,Ro++,rn===10&&(Ro=1,Zc++),rn}function Vi(){return Sn(Io,Kn)}function bc(){return Kn}function Ba(r,e){return La(Io,r,e)}function Da(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function l_(r){return Zc=Ro=1,a_=Oi(Io=r),Kn=0,[]}function c_(r){return Io="",r}function Pc(r){return o_(Ba(Kn-1,Id(r===91?r+2:r===40?r+1:r)))}function sx(r){for(;(rn=Vi())&&rn<33;)oi();return Da(r)>2||Da(rn)>3?"":" "}function ox(r,e){for(;--e&&oi()&&!(rn<48||rn>102||rn>57&&rn<65||rn>70&&rn<97););return Ba(r,bc()+(e<6&&Vi()==32&&oi()==32))}function Id(r){for(;oi();)switch(rn){case r:return Kn;case 34:case 39:r!==34&&r!==39&&Id(rn);break;case 40:r===41&&Id(r);break;case 92:oi();break}return Kn}function ax(r,e){for(;oi()&&r+rn!==57;)if(r+rn===84&&Vi()===47)break;return"/*"+Ba(e,Kn-1)+"*"+Kc(r===47?r:oi())}function lx(r){for(;!Da(Vi());)oi();return Ba(r,Kn)}function cx(r){return c_(Lc("",null,null,null,[""],r=l_(r),0,[0],r))}function Lc(r,e,t,s,o,l,u,f,h){for(var p=0,g=0,m=u,v=0,S=0,E=0,M=1,x=1,y=1,L=0,I="",P=o,V=l,U=s,R=I;x;)switch(E=L,L=oi()){case 40:if(E!=108&&Sn(R,m-1)==58){Dd(R+=wt(Pc(L),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:R+=Pc(L);break;case 9:case 10:case 13:case 32:R+=sx(E);break;case 92:R+=ox(bc()-1,7);continue;case 47:switch(Vi()){case 42:case 47:tc(ux(ax(oi(),bc()),e,t),h);break;default:R+="/"}break;case 123*M:f[p++]=Oi(R)*y;case 125*M:case 59:case 0:switch(L){case 0:case 125:x=0;case 59+g:y==-1&&(R=wt(R,/\f/g,"")),S>0&&Oi(R)-m&&tc(S>32?Eg(R+";",s,t,m-1):Eg(wt(R," ","")+";",s,t,m-2),h);break;case 59:R+=";";default:if(tc(U=Mg(R,e,t,p,g,o,f,I,P=[],V=[],m),l),L===123)if(g===0)Lc(R,e,U,U,P,l,m,f,V);else switch(v===99&&Sn(R,3)===110?100:v){case 100:case 108:case 109:case 115:Lc(r,U,U,s&&tc(Mg(r,U,U,0,0,o,f,I,o,P=[],m),V),o,V,m,f,s?P:V);break;default:Lc(R,U,U,U,[""],V,0,f,V)}}p=g=S=0,M=y=1,I=R="",m=u;break;case 58:m=1+Oi(R),S=E;default:if(M<1){if(L==123)--M;else if(L==125&&M++==0&&rx()==125)continue}switch(R+=Kc(L),L*M){case 38:y=g>0?1:(R+="\f",-1);break;case 44:f[p++]=(Oi(R)-1)*y,y=1;break;case 64:Vi()===45&&(R+=Pc(oi())),v=Vi(),g=m=Oi(I=R+=lx(bc())),L++;break;case 45:E===45&&Oi(R)==2&&(M=0)}}return l}function Mg(r,e,t,s,o,l,u,f,h,p,g){for(var m=o-1,v=o===0?l:[""],S=Ah(v),E=0,M=0,x=0;E<s;++E)for(var y=0,L=La(r,m+1,m=Qy(M=u[E])),I=r;y<S;++y)(I=o_(M>0?v[y]+" "+L:wt(L,/&\f/g,v[y])))&&(h[x++]=I);return Qc(r,e,t,o===0?Th:f,h,p,g)}function ux(r,e,t){return Qc(r,e,t,r_,Kc(ix()),La(r,2,-2),0)}function Eg(r,e,t,s){return Qc(r,e,t,wh,La(r,0,s),La(r,s+1,-1),s)}function Mo(r,e){for(var t="",s=Ah(r),o=0;o<s;o++)t+=e(r[o],o,r,e)||"";return t}function fx(r,e,t,s){switch(r.type){case Zy:if(r.children.length)break;case Ky:case wh:return r.return=r.return||r.value;case r_:return"";case s_:return r.return=r.value+"{"+Mo(r.children,s)+"}";case Th:r.value=r.props.join(",")}return Oi(t=Mo(r.children,s))?r.return=r.value+"{"+t+"}":""}function dx(r){var e=Ah(r);return function(t,s,o,l){for(var u="",f=0;f<e;f++)u+=r[f](t,s,o,l)||"";return u}}function hx(r){return function(e){e.root||(e=e.return)&&r(e)}}function u_(r){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=r(t)),e[t]}}var px=function(e,t,s){for(var o=0,l=0;o=l,l=Vi(),o===38&&l===12&&(t[s]=1),!Da(l);)oi();return Ba(e,Kn)},mx=function(e,t){var s=-1,o=44;do switch(Da(o)){case 0:o===38&&Vi()===12&&(t[s]=1),e[s]+=px(Kn-1,t,s);break;case 2:e[s]+=Pc(o);break;case 4:if(o===44){e[++s]=Vi()===58?"&\f":"",t[s]=e[s].length;break}default:e[s]+=Kc(o)}while(o=oi());return e},gx=function(e,t){return c_(mx(l_(e),t))},Tg=new WeakMap,_x=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,s=e.parent,o=e.column===s.column&&e.line===s.line;s.type!=="rule";)if(s=s.parent,!s)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!Tg.get(s))&&!o){Tg.set(e,!0);for(var l=[],u=gx(t,l),f=s.props,h=0,p=0;h<u.length;h++)for(var g=0;g<f.length;g++,p++)e.props[p]=l[h]?u[h].replace(/&\f/g,f[g]):f[g]+" "+u[h]}}},vx=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function f_(r,e){switch(ex(r,e)){case 5103:return Tt+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Tt+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Tt+r+Hc+r+Pn+r+r;case 6828:case 4268:return Tt+r+Pn+r+r;case 6165:return Tt+r+Pn+"flex-"+r+r;case 5187:return Tt+r+wt(r,/(\w+).+(:[^]+)/,Tt+"box-$1$2"+Pn+"flex-$1$2")+r;case 5443:return Tt+r+Pn+"flex-item-"+wt(r,/flex-|-self/,"")+r;case 4675:return Tt+r+Pn+"flex-line-pack"+wt(r,/align-content|flex-|-self/,"")+r;case 5548:return Tt+r+Pn+wt(r,"shrink","negative")+r;case 5292:return Tt+r+Pn+wt(r,"basis","preferred-size")+r;case 6060:return Tt+"box-"+wt(r,"-grow","")+Tt+r+Pn+wt(r,"grow","positive")+r;case 4554:return Tt+wt(r,/([^-])(transform)/g,"$1"+Tt+"$2")+r;case 6187:return wt(wt(wt(r,/(zoom-|grab)/,Tt+"$1"),/(image-set)/,Tt+"$1"),r,"")+r;case 5495:case 3959:return wt(r,/(image-set\([^]*)/,Tt+"$1$`$1");case 4968:return wt(wt(r,/(.+:)(flex-)?(.*)/,Tt+"box-pack:$3"+Pn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Tt+r+r;case 4095:case 3583:case 4068:case 2532:return wt(r,/(.+)-inline(.+)/,Tt+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Oi(r)-1-e>6)switch(Sn(r,e+1)){case 109:if(Sn(r,e+4)!==45)break;case 102:return wt(r,/(.+:)(.+)-([^]+)/,"$1"+Tt+"$2-$3$1"+Hc+(Sn(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~Dd(r,"stretch")?f_(wt(r,"stretch","fill-available"),e)+r:r}break;case 4949:if(Sn(r,e+1)!==115)break;case 6444:switch(Sn(r,Oi(r)-3-(~Dd(r,"!important")&&10))){case 107:return wt(r,":",":"+Tt)+r;case 101:return wt(r,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Tt+(Sn(r,14)===45?"inline-":"")+"box$3$1"+Tt+"$2$3$1"+Pn+"$2box$3")+r}break;case 5936:switch(Sn(r,e+11)){case 114:return Tt+r+Pn+wt(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Tt+r+Pn+wt(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Tt+r+Pn+wt(r,/[svh]\w+-[tblr]{2}/,"lr")+r}return Tt+r+Pn+r+r}return r}var yx=function(e,t,s,o){if(e.length>-1&&!e.return)switch(e.type){case wh:e.return=f_(e.value,e.length);break;case s_:return Mo([ga(e,{value:wt(e.value,"@","@"+Tt)})],o);case Th:if(e.length)return nx(e.props,function(l){switch(tx(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Mo([ga(e,{props:[wt(l,/:(read-\w+)/,":"+Hc+"$1")]})],o);case"::placeholder":return Mo([ga(e,{props:[wt(l,/:(plac\w+)/,":"+Tt+"input-$1")]}),ga(e,{props:[wt(l,/:(plac\w+)/,":"+Hc+"$1")]}),ga(e,{props:[wt(l,/:(plac\w+)/,Pn+"input-$1")]})],o)}return""})}},xx=[yx],Sx=function(e){var t=e.key;if(t==="css"){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(s,function(M){var x=M.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(M),M.setAttribute("data-s",""))})}var o=e.stylisPlugins||xx,l={},u,f=[];u=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(M){for(var x=M.getAttribute("data-emotion").split(" "),y=1;y<x.length;y++)l[x[y]]=!0;f.push(M)});var h,p=[_x,vx];{var g,m=[fx,hx(function(M){g.insert(M)})],v=dx(p.concat(o,m)),S=function(x){return Mo(cx(x),v)};h=function(x,y,L,I){g=L,S(x?x+"{"+y.styles+"}":y.styles),I&&(E.inserted[y.name]=!0)}}var E={key:t,sheet:new qy({key:t,container:u,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:h};return E.sheet.hydrate(f),E},Mx=!0;function Ex(r,e,t){var s="";return t.split(" ").forEach(function(o){r[o]!==void 0?e.push(r[o]+";"):o&&(s+=o+" ")}),s}var d_=function(e,t,s){var o=e.key+"-"+t.name;(s===!1||Mx===!1)&&e.registered[o]===void 0&&(e.registered[o]=t.styles)},Tx=function(e,t,s){d_(e,t,s);var o=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var l=t;do e.insert(t===l?"."+o:"",l,e.sheet,!0),l=l.next;while(l!==void 0)}};function wx(r){for(var e=0,t,s=0,o=r.length;o>=4;++s,o-=4)t=r.charCodeAt(s)&255|(r.charCodeAt(++s)&255)<<8|(r.charCodeAt(++s)&255)<<16|(r.charCodeAt(++s)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(r.charCodeAt(s+2)&255)<<16;case 2:e^=(r.charCodeAt(s+1)&255)<<8;case 1:e^=r.charCodeAt(s)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Ax={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rx=/[A-Z]|^ms/g,Cx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,h_=function(e){return e.charCodeAt(1)===45},wg=function(e){return e!=null&&typeof e!="boolean"},$f=u_(function(r){return h_(r)?r:r.replace(Rx,"-$&").toLowerCase()}),Ag=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(Cx,function(s,o,l){return ki={name:o,styles:l,next:ki},o})}return Ax[e]!==1&&!h_(e)&&typeof t=="number"&&t!==0?t+"px":t};function Ia(r,e,t){if(t==null)return"";var s=t;if(s.__emotion_styles!==void 0)return s;switch(typeof t){case"boolean":return"";case"object":{var o=t;if(o.anim===1)return ki={name:o.name,styles:o.styles,next:ki},o.name;var l=t;if(l.styles!==void 0){var u=l.next;if(u!==void 0)for(;u!==void 0;)ki={name:u.name,styles:u.styles,next:ki},u=u.next;var f=l.styles+";";return f}return bx(r,e,t)}case"function":{if(r!==void 0){var h=ki,p=t(r);return ki=h,Ia(r,e,p)}break}}var g=t;if(e==null)return g;var m=e[g];return m!==void 0?m:g}function bx(r,e,t){var s="";if(Array.isArray(t))for(var o=0;o<t.length;o++)s+=Ia(r,e,t[o])+";";else for(var l in t){var u=t[l];if(typeof u!="object"){var f=u;e!=null&&e[f]!==void 0?s+=l+"{"+e[f]+"}":wg(f)&&(s+=$f(l)+":"+Ag(l,f)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&(e==null||e[u[0]]===void 0))for(var h=0;h<u.length;h++)wg(u[h])&&(s+=$f(l)+":"+Ag(l,u[h])+";");else{var p=Ia(r,e,u);switch(l){case"animation":case"animationName":{s+=$f(l)+":"+p+";";break}default:s+=l+"{"+p+"}"}}}return s}var Rg=/label:\s*([^\s;{]+)\s*(;|$)/g,ki;function Px(r,e,t){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var s=!0,o="";ki=void 0;var l=r[0];if(l==null||l.raw===void 0)s=!1,o+=Ia(t,e,l);else{var u=l;o+=u[0]}for(var f=1;f<r.length;f++)if(o+=Ia(t,e,r[f]),s){var h=l;o+=h[f]}Rg.lastIndex=0;for(var p="",g;(g=Rg.exec(o))!==null;)p+="-"+g[1];var m=wx(o)+p;return{name:m,styles:o,next:ki}}var Lx=function(e){return e()},Dx=gg.useInsertionEffect?gg.useInsertionEffect:!1,Ix=Dx||Lx,p_=Qt.createContext(typeof HTMLElement<"u"?Sx({key:"css"}):null);p_.Provider;var Ux=function(e){return Qt.forwardRef(function(t,s){var o=Qt.useContext(p_);return e(t,o,s)})},m_=Qt.createContext({}),Nx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Fx=u_(function(r){return Nx.test(r)||r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)<91}),Ox=Fx,kx=function(e){return e!=="theme"},Cg=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Ox:kx},bg=function(e,t,s){var o;if(t){var l=t.shouldForwardProp;o=e.__emotion_forwardProp&&l?function(u){return e.__emotion_forwardProp(u)&&l(u)}:l}return typeof o!="function"&&s&&(o=e.__emotion_forwardProp),o},zx=function(e){var t=e.cache,s=e.serialized,o=e.isStringTag;return d_(t,s,o),Ix(function(){return Tx(t,s,o)}),null},Bx=function r(e,t){var s=e.__emotion_real===e,o=s&&e.__emotion_base||e,l,u;t!==void 0&&(l=t.label,u=t.target);var f=bg(e,t,s),h=f||Cg(o),p=!h("as");return function(){var g=arguments,m=s&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(l!==void 0&&m.push("label:"+l+";"),g[0]==null||g[0].raw===void 0)m.push.apply(m,g);else{var v=g[0];m.push(v[0]);for(var S=g.length,E=1;E<S;E++)m.push(g[E],v[E])}var M=Ux(function(x,y,L){var I=p&&x.as||o,P="",V=[],U=x;if(x.theme==null){U={};for(var R in x)U[R]=x[R];U.theme=Qt.useContext(m_)}typeof x.className=="string"?P=Ex(y.registered,V,x.className):x.className!=null&&(P=x.className+" ");var F=Px(m.concat(V),y.registered,U);P+=y.key+"-"+F.name,u!==void 0&&(P+=" "+u);var C=p&&f===void 0?Cg(I):h,w={};for(var k in x)p&&k==="as"||C(k)&&(w[k]=x[k]);return w.className=P,L&&(w.ref=L),Qt.createElement(Qt.Fragment,null,Qt.createElement(zx,{cache:y,serialized:F,isStringTag:typeof I=="string"}),Qt.createElement(I,w))});return M.displayName=l!==void 0?l:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",M.defaultProps=e.defaultProps,M.__emotion_real=M,M.__emotion_base=o,M.__emotion_styles=m,M.__emotion_forwardProp=f,Object.defineProperty(M,"toString",{value:function(){return"."+u}}),M.withComponent=function(x,y){var L=r(x,Vt({},t,y,{shouldForwardProp:bg(M,y,!0)}));return L.apply(void 0,m)},M}},Hx=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Ud=Bx.bind(null);Hx.forEach(function(r){Ud[r]=Ud(r)});function Vx(r,e){return Ud(r,e)}function ys(r){if(typeof r!="object"||r===null)return!1;const e=Object.getPrototypeOf(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)}function g_(r){if(Qt.isValidElement(r)||!ys(r))return r;const e={};return Object.keys(r).forEach(t=>{e[t]=g_(r[t])}),e}function mr(r,e,t={clone:!0}){const s=t.clone?Vt({},r):r;return ys(r)&&ys(e)&&Object.keys(e).forEach(o=>{Qt.isValidElement(e[o])?s[o]=e[o]:ys(e[o])&&Object.prototype.hasOwnProperty.call(r,o)&&ys(r[o])?s[o]=mr(r[o],e[o],t):t.clone?s[o]=ys(e[o])?g_(e[o]):e[o]:s[o]=e[o]}),s}const Gx=["values","unit","step"],Wx=r=>{const e=Object.keys(r).map(t=>({key:t,val:r[t]}))||[];return e.sort((t,s)=>t.val-s.val),e.reduce((t,s)=>Vt({},t,{[s.key]:s.val}),{})};function Xx(r){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:t="px",step:s=5}=r,o=Zr(r,Gx),l=Wx(e),u=Object.keys(l);function f(v){return`@media (min-width:${typeof e[v]=="number"?e[v]:v}${t})`}function h(v){return`@media (max-width:${(typeof e[v]=="number"?e[v]:v)-s/100}${t})`}function p(v,S){const E=u.indexOf(S);return`@media (min-width:${typeof e[v]=="number"?e[v]:v}${t}) and (max-width:${(E!==-1&&typeof e[u[E]]=="number"?e[u[E]]:S)-s/100}${t})`}function g(v){return u.indexOf(v)+1<u.length?p(v,u[u.indexOf(v)+1]):f(v)}function m(v){const S=u.indexOf(v);return S===0?f(u[1]):S===u.length-1?h(u[S]):p(v,u[u.indexOf(v)+1]).replace("@media","@media not all and")}return Vt({keys:u,values:l,up:f,down:h,between:p,only:g,not:m,unit:t},o)}const jx={borderRadius:4};function wa(r,e){return e?mr(r,e,{clone:!1}):r}const Rh={xs:0,sm:600,md:900,lg:1200,xl:1536},Pg={keys:["xs","sm","md","lg","xl"],up:r=>`@media (min-width:${Rh[r]}px)`};function _r(r,e,t){const s=r.theme||{};if(Array.isArray(e)){const l=s.breakpoints||Pg;return e.reduce((u,f,h)=>(u[l.up(l.keys[h])]=t(e[h]),u),{})}if(typeof e=="object"){const l=s.breakpoints||Pg;return Object.keys(e).reduce((u,f)=>{if(Object.keys(l.values||Rh).indexOf(f)!==-1){const h=l.up(f);u[h]=t(e[f],f)}else{const h=f;u[h]=e[h]}return u},{})}return t(e)}function Yx(r={}){var e;return((e=r.keys)==null?void 0:e.reduce((s,o)=>{const l=r.up(o);return s[l]={},s},{}))||{}}function $x(r,e){return r.reduce((t,s)=>{const o=t[s];return(!o||Object.keys(o).length===0)&&delete t[s],t},e)}function __(r){if(typeof r!="string")throw new Error(Pa(7));return r.charAt(0).toUpperCase()+r.slice(1)}function Jc(r,e,t=!0){if(!e||typeof e!="string")return null;if(r&&r.vars&&t){const s=`vars.${e}`.split(".").reduce((o,l)=>o&&o[l]?o[l]:null,r);if(s!=null)return s}return e.split(".").reduce((s,o)=>s&&s[o]!=null?s[o]:null,r)}function Vc(r,e,t,s=t){let o;return typeof r=="function"?o=r(t):Array.isArray(r)?o=r[t]||s:o=Jc(r,t)||s,e&&(o=e(o,s,r)),o}function Jt(r){const{prop:e,cssProperty:t=r.prop,themeKey:s,transform:o}=r,l=u=>{if(u[e]==null)return null;const f=u[e],h=u.theme,p=Jc(h,s)||{};return _r(u,f,m=>{let v=Vc(p,o,m);return m===v&&typeof m=="string"&&(v=Vc(p,o,`${e}${m==="default"?"":__(m)}`,m)),t===!1?v:{[t]:v}})};return l.propTypes={},l.filterProps=[e],l}function qx(r){const e={};return t=>(e[t]===void 0&&(e[t]=r(t)),e[t])}const Kx={m:"margin",p:"padding"},Zx={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Lg={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Qx=qx(r=>{if(r.length>2)if(Lg[r])r=Lg[r];else return[r];const[e,t]=r.split(""),s=Kx[e],o=Zx[t]||"";return Array.isArray(o)?o.map(l=>s+l):[s+o]}),Ch=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],bh=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Ch,...bh];function Ha(r,e,t,s){var o;const l=(o=Jc(r,e,!1))!=null?o:t;return typeof l=="number"?u=>typeof u=="string"?u:l*u:Array.isArray(l)?u=>typeof u=="string"?u:l[u]:typeof l=="function"?l:()=>{}}function v_(r){return Ha(r,"spacing",8)}function Va(r,e){if(typeof e=="string"||e==null)return e;const t=Math.abs(e),s=r(t);return e>=0?s:typeof s=="number"?-s:`-${s}`}function Jx(r,e){return t=>r.reduce((s,o)=>(s[o]=Va(e,t),s),{})}function eS(r,e,t,s){if(e.indexOf(t)===-1)return null;const o=Qx(t),l=Jx(o,s),u=r[t];return _r(r,u,l)}function y_(r,e){const t=v_(r.theme);return Object.keys(r).map(s=>eS(r,e,s,t)).reduce(wa,{})}function qt(r){return y_(r,Ch)}qt.propTypes={};qt.filterProps=Ch;function Kt(r){return y_(r,bh)}Kt.propTypes={};Kt.filterProps=bh;function tS(r=8){if(r.mui)return r;const e=v_({spacing:r}),t=(...s)=>(s.length===0?[1]:s).map(l=>{const u=e(l);return typeof u=="number"?`${u}px`:u}).join(" ");return t.mui=!0,t}function eu(...r){const e=r.reduce((s,o)=>(o.filterProps.forEach(l=>{s[l]=o}),s),{}),t=s=>Object.keys(s).reduce((o,l)=>e[l]?wa(o,e[l](s)):o,{});return t.propTypes={},t.filterProps=r.reduce((s,o)=>s.concat(o.filterProps),[]),t}function mi(r){return typeof r!="number"?r:`${r}px solid`}function gi(r,e){return Jt({prop:r,themeKey:"borders",transform:e})}const nS=gi("border",mi),iS=gi("borderTop",mi),rS=gi("borderRight",mi),sS=gi("borderBottom",mi),oS=gi("borderLeft",mi),aS=gi("borderColor"),lS=gi("borderTopColor"),cS=gi("borderRightColor"),uS=gi("borderBottomColor"),fS=gi("borderLeftColor"),dS=gi("outline",mi),hS=gi("outlineColor"),tu=r=>{if(r.borderRadius!==void 0&&r.borderRadius!==null){const e=Ha(r.theme,"shape.borderRadius",4),t=s=>({borderRadius:Va(e,s)});return _r(r,r.borderRadius,t)}return null};tu.propTypes={};tu.filterProps=["borderRadius"];eu(nS,iS,rS,sS,oS,aS,lS,cS,uS,fS,tu,dS,hS);const nu=r=>{if(r.gap!==void 0&&r.gap!==null){const e=Ha(r.theme,"spacing",8),t=s=>({gap:Va(e,s)});return _r(r,r.gap,t)}return null};nu.propTypes={};nu.filterProps=["gap"];const iu=r=>{if(r.columnGap!==void 0&&r.columnGap!==null){const e=Ha(r.theme,"spacing",8),t=s=>({columnGap:Va(e,s)});return _r(r,r.columnGap,t)}return null};iu.propTypes={};iu.filterProps=["columnGap"];const ru=r=>{if(r.rowGap!==void 0&&r.rowGap!==null){const e=Ha(r.theme,"spacing",8),t=s=>({rowGap:Va(e,s)});return _r(r,r.rowGap,t)}return null};ru.propTypes={};ru.filterProps=["rowGap"];const pS=Jt({prop:"gridColumn"}),mS=Jt({prop:"gridRow"}),gS=Jt({prop:"gridAutoFlow"}),_S=Jt({prop:"gridAutoColumns"}),vS=Jt({prop:"gridAutoRows"}),yS=Jt({prop:"gridTemplateColumns"}),xS=Jt({prop:"gridTemplateRows"}),SS=Jt({prop:"gridTemplateAreas"}),MS=Jt({prop:"gridArea"});eu(nu,iu,ru,pS,mS,gS,_S,vS,yS,xS,SS,MS);function Eo(r,e){return e==="grey"?e:r}const ES=Jt({prop:"color",themeKey:"palette",transform:Eo}),TS=Jt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Eo}),wS=Jt({prop:"backgroundColor",themeKey:"palette",transform:Eo});eu(ES,TS,wS);function ri(r){return r<=1&&r!==0?`${r*100}%`:r}const AS=Jt({prop:"width",transform:ri}),Ph=r=>{if(r.maxWidth!==void 0&&r.maxWidth!==null){const e=t=>{var s,o;const l=((s=r.theme)==null||(s=s.breakpoints)==null||(s=s.values)==null?void 0:s[t])||Rh[t];return l?((o=r.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${l}${r.theme.breakpoints.unit}`}:{maxWidth:l}:{maxWidth:ri(t)}};return _r(r,r.maxWidth,e)}return null};Ph.filterProps=["maxWidth"];const RS=Jt({prop:"minWidth",transform:ri}),CS=Jt({prop:"height",transform:ri}),bS=Jt({prop:"maxHeight",transform:ri}),PS=Jt({prop:"minHeight",transform:ri});Jt({prop:"size",cssProperty:"width",transform:ri});Jt({prop:"size",cssProperty:"height",transform:ri});const LS=Jt({prop:"boxSizing"});eu(AS,Ph,RS,CS,bS,PS,LS);const su={border:{themeKey:"borders",transform:mi},borderTop:{themeKey:"borders",transform:mi},borderRight:{themeKey:"borders",transform:mi},borderBottom:{themeKey:"borders",transform:mi},borderLeft:{themeKey:"borders",transform:mi},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:mi},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:tu},color:{themeKey:"palette",transform:Eo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Eo},backgroundColor:{themeKey:"palette",transform:Eo},p:{style:Kt},pt:{style:Kt},pr:{style:Kt},pb:{style:Kt},pl:{style:Kt},px:{style:Kt},py:{style:Kt},padding:{style:Kt},paddingTop:{style:Kt},paddingRight:{style:Kt},paddingBottom:{style:Kt},paddingLeft:{style:Kt},paddingX:{style:Kt},paddingY:{style:Kt},paddingInline:{style:Kt},paddingInlineStart:{style:Kt},paddingInlineEnd:{style:Kt},paddingBlock:{style:Kt},paddingBlockStart:{style:Kt},paddingBlockEnd:{style:Kt},m:{style:qt},mt:{style:qt},mr:{style:qt},mb:{style:qt},ml:{style:qt},mx:{style:qt},my:{style:qt},margin:{style:qt},marginTop:{style:qt},marginRight:{style:qt},marginBottom:{style:qt},marginLeft:{style:qt},marginX:{style:qt},marginY:{style:qt},marginInline:{style:qt},marginInlineStart:{style:qt},marginInlineEnd:{style:qt},marginBlock:{style:qt},marginBlockStart:{style:qt},marginBlockEnd:{style:qt},displayPrint:{cssProperty:!1,transform:r=>({"@media print":{display:r}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:nu},rowGap:{style:ru},columnGap:{style:iu},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:ri},maxWidth:{style:Ph},minWidth:{transform:ri},height:{transform:ri},maxHeight:{transform:ri},minHeight:{transform:ri},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function DS(...r){const e=r.reduce((s,o)=>s.concat(Object.keys(o)),[]),t=new Set(e);return r.every(s=>t.size===Object.keys(s).length)}function IS(r,e){return typeof r=="function"?r(e):r}function US(){function r(t,s,o,l){const u={[t]:s,theme:o},f=l[t];if(!f)return{[t]:s};const{cssProperty:h=t,themeKey:p,transform:g,style:m}=f;if(s==null)return null;if(p==="typography"&&s==="inherit")return{[t]:s};const v=Jc(o,p)||{};return m?m(u):_r(u,s,E=>{let M=Vc(v,g,E);return E===M&&typeof E=="string"&&(M=Vc(v,g,`${t}${E==="default"?"":__(E)}`,E)),h===!1?M:{[h]:M}})}function e(t){var s;const{sx:o,theme:l={}}=t||{};if(!o)return null;const u=(s=l.unstable_sxConfig)!=null?s:su;function f(h){let p=h;if(typeof h=="function")p=h(l);else if(typeof h!="object")return h;if(!p)return null;const g=Yx(l.breakpoints),m=Object.keys(g);let v=g;return Object.keys(p).forEach(S=>{const E=IS(p[S],l);if(E!=null)if(typeof E=="object")if(u[S])v=wa(v,r(S,E,l,u));else{const M=_r({theme:l},E,x=>({[S]:x}));DS(M,E)?v[S]=e({sx:E,theme:l}):v=wa(v,M)}else v=wa(v,r(S,E,l,u))}),$x(m,v)}return Array.isArray(o)?o.map(f):f(o)}return e}const ou=US();ou.filterProps=["sx"];function NS(r,e){const t=this;return t.vars&&typeof t.getColorSchemeSelector=="function"?{[t.getColorSchemeSelector(r).replace(/(\[[^\]]+\])/,"*:where($1)")]:e}:t.palette.mode===r?e:{}}const FS=["breakpoints","palette","spacing","shape"];function x_(r={},...e){const{breakpoints:t={},palette:s={},spacing:o,shape:l={}}=r,u=Zr(r,FS),f=Xx(t),h=tS(o);let p=mr({breakpoints:f,direction:"ltr",components:{},palette:Vt({mode:"light"},s),spacing:h,shape:Vt({},jx,l)},u);return p.applyStyles=NS,p=e.reduce((g,m)=>mr(g,m),p),p.unstable_sxConfig=Vt({},su,u==null?void 0:u.unstable_sxConfig),p.unstable_sx=function(m){return ou({sx:m,theme:this})},p}function OS(r){return Object.keys(r).length===0}function kS(r=null){const e=Qt.useContext(m_);return!e||OS(e)?r:e}const zS=x_();function BS(r=zS){return kS(r)}const HS=["sx"],VS=r=>{var e,t;const s={systemProps:{},otherProps:{}},o=(e=r==null||(t=r.theme)==null?void 0:t.unstable_sxConfig)!=null?e:su;return Object.keys(r).forEach(l=>{o[l]?s.systemProps[l]=r[l]:s.otherProps[l]=r[l]}),s};function GS(r){const{sx:e}=r,t=Zr(r,HS),{systemProps:s,otherProps:o}=VS(t);let l;return Array.isArray(e)?l=[s,...e]:typeof e=="function"?l=(...u)=>{const f=e(...u);return ys(f)?Vt({},s,f):s}:l=Vt({},s,e),Vt({},o,{sx:l})}const Dg=r=>r,WS=()=>{let r=Dg;return{configure(e){r=e},generate(e){return r(e)},reset(){r=Dg}}},S_=WS();function M_(r){var e,t,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var o=r.length;for(e=0;e<o;e++)r[e]&&(t=M_(r[e]))&&(s&&(s+=" "),s+=t)}else for(t in r)r[t]&&(s&&(s+=" "),s+=t);return s}function XS(){for(var r,e,t=0,s="",o=arguments.length;t<o;t++)(r=arguments[t])&&(e=M_(r))&&(s&&(s+=" "),s+=e);return s}const jS=["className","component"];function YS(r={}){const{themeId:e,defaultTheme:t,defaultClassName:s="MuiBox-root",generateClassName:o}=r,l=Vx("div",{shouldForwardProp:f=>f!=="theme"&&f!=="sx"&&f!=="as"})(ou);return Qt.forwardRef(function(h,p){const g=BS(t),m=GS(h),{className:v,component:S="div"}=m,E=Zr(m,jS);return Bi.jsx(l,Vt({as:S,ref:p,className:XS(v,o?o(s):s),theme:e&&g[e]||g},E))})}const $S={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function qS(r,e,t="Mui"){const s=$S[e];return s?`${t}-${s}`:`${S_.generate(r)}-${e}`}function KS(r,e,t="Mui"){const s={};return e.forEach(o=>{s[o]=qS(r,o,t)}),s}function ZS(r,e=Number.MIN_SAFE_INTEGER,t=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(r,t))}const QS=Object.freeze(Object.defineProperty({__proto__:null,default:ZS},Symbol.toStringTag,{value:"Module"}));function JS(r,e){return Vt({toolbar:{minHeight:56,[r.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[r.up("sm")]:{minHeight:64}}},e)}var Xt={},qf={exports:{}},Ig;function eM(){return Ig||(Ig=1,function(r){function e(t){return t&&t.__esModule?t:{default:t}}r.exports=e,r.exports.__esModule=!0,r.exports.default=r.exports}(qf)),qf.exports}const tM=n_(Xy),nM=n_(QS);var Ug;function iM(){if(Ug)return Xt;Ug=1;var r=eM();Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.alpha=E,Xt.blend=U,Xt.colorChannel=void 0,Xt.darken=x,Xt.decomposeColor=u,Xt.emphasize=P,Xt.getContrastRatio=S,Xt.getLuminance=v,Xt.hexToRgb=o,Xt.hslToRgb=m,Xt.lighten=L,Xt.private_safeAlpha=M,Xt.private_safeColorChannel=void 0,Xt.private_safeDarken=y,Xt.private_safeEmphasize=V,Xt.private_safeLighten=I,Xt.recomposeColor=p,Xt.rgbToHex=g;var e=r(tM),t=r(nM);function s(R,F=0,C=1){return(0,t.default)(R,F,C)}function o(R){R=R.slice(1);const F=new RegExp(`.{1,${R.length>=6?2:1}}`,"g");let C=R.match(F);return C&&C[0].length===1&&(C=C.map(w=>w+w)),C?`rgb${C.length===4?"a":""}(${C.map((w,k)=>k<3?parseInt(w,16):Math.round(parseInt(w,16)/255*1e3)/1e3).join(", ")})`:""}function l(R){const F=R.toString(16);return F.length===1?`0${F}`:F}function u(R){if(R.type)return R;if(R.charAt(0)==="#")return u(o(R));const F=R.indexOf("("),C=R.substring(0,F);if(["rgb","rgba","hsl","hsla","color"].indexOf(C)===-1)throw new Error((0,e.default)(9,R));let w=R.substring(F+1,R.length-1),k;if(C==="color"){if(w=w.split(" "),k=w.shift(),w.length===4&&w[3].charAt(0)==="/"&&(w[3]=w[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(k)===-1)throw new Error((0,e.default)(10,k))}else w=w.split(",");return w=w.map(ne=>parseFloat(ne)),{type:C,values:w,colorSpace:k}}const f=R=>{const F=u(R);return F.values.slice(0,3).map((C,w)=>F.type.indexOf("hsl")!==-1&&w!==0?`${C}%`:C).join(" ")};Xt.colorChannel=f;const h=(R,F)=>{try{return f(R)}catch{return R}};Xt.private_safeColorChannel=h;function p(R){const{type:F,colorSpace:C}=R;let{values:w}=R;return F.indexOf("rgb")!==-1?w=w.map((k,ne)=>ne<3?parseInt(k,10):k):F.indexOf("hsl")!==-1&&(w[1]=`${w[1]}%`,w[2]=`${w[2]}%`),F.indexOf("color")!==-1?w=`${C} ${w.join(" ")}`:w=`${w.join(", ")}`,`${F}(${w})`}function g(R){if(R.indexOf("#")===0)return R;const{values:F}=u(R);return`#${F.map((C,w)=>l(w===3?Math.round(255*C):C)).join("")}`}function m(R){R=u(R);const{values:F}=R,C=F[0],w=F[1]/100,k=F[2]/100,ne=w*Math.min(k,1-k),Z=(ee,pe=(ee+C/30)%12)=>k-ne*Math.max(Math.min(pe-3,9-pe,1),-1);let se="rgb";const ce=[Math.round(Z(0)*255),Math.round(Z(8)*255),Math.round(Z(4)*255)];return R.type==="hsla"&&(se+="a",ce.push(F[3])),p({type:se,values:ce})}function v(R){R=u(R);let F=R.type==="hsl"||R.type==="hsla"?u(m(R)).values:R.values;return F=F.map(C=>(R.type!=="color"&&(C/=255),C<=.03928?C/12.92:((C+.055)/1.055)**2.4)),Number((.2126*F[0]+.7152*F[1]+.0722*F[2]).toFixed(3))}function S(R,F){const C=v(R),w=v(F);return(Math.max(C,w)+.05)/(Math.min(C,w)+.05)}function E(R,F){return R=u(R),F=s(F),(R.type==="rgb"||R.type==="hsl")&&(R.type+="a"),R.type==="color"?R.values[3]=`/${F}`:R.values[3]=F,p(R)}function M(R,F,C){try{return E(R,F)}catch{return R}}function x(R,F){if(R=u(R),F=s(F),R.type.indexOf("hsl")!==-1)R.values[2]*=1-F;else if(R.type.indexOf("rgb")!==-1||R.type.indexOf("color")!==-1)for(let C=0;C<3;C+=1)R.values[C]*=1-F;return p(R)}function y(R,F,C){try{return x(R,F)}catch{return R}}function L(R,F){if(R=u(R),F=s(F),R.type.indexOf("hsl")!==-1)R.values[2]+=(100-R.values[2])*F;else if(R.type.indexOf("rgb")!==-1)for(let C=0;C<3;C+=1)R.values[C]+=(255-R.values[C])*F;else if(R.type.indexOf("color")!==-1)for(let C=0;C<3;C+=1)R.values[C]+=(1-R.values[C])*F;return p(R)}function I(R,F,C){try{return L(R,F)}catch{return R}}function P(R,F=.15){return v(R)>.5?x(R,F):L(R,F)}function V(R,F,C){try{return P(R,F)}catch{return R}}function U(R,F,C,w=1){const k=(ce,ee)=>Math.round((ce**(1/w)*(1-C)+ee**(1/w)*C)**w),ne=u(R),Z=u(F),se=[k(ne.values[0],Z.values[0]),k(ne.values[1],Z.values[1]),k(ne.values[2],Z.values[2])];return p({type:"rgb",values:se})}return Xt}var Nd=iM();const rM=["mode","contrastThreshold","tonalOffset"],Ng={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:ba.white,default:ba.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Kf={text:{primary:ba.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:ba.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Fg(r,e,t,s){const o=s.light||s,l=s.dark||s*1.5;r[e]||(r.hasOwnProperty(t)?r[e]=r[t]:e==="light"?r.light=Nd.lighten(r.main,o):e==="dark"&&(r.dark=Nd.darken(r.main,l)))}function sM(r="light"){return r==="dark"?{main:to[200],light:to[50],dark:to[400]}:{main:to[700],light:to[400],dark:to[800]}}function oM(r="light"){return r==="dark"?{main:eo[200],light:eo[50],dark:eo[400]}:{main:eo[500],light:eo[300],dark:eo[700]}}function aM(r="light"){return r==="dark"?{main:Js[500],light:Js[300],dark:Js[700]}:{main:Js[700],light:Js[400],dark:Js[800]}}function lM(r="light"){return r==="dark"?{main:no[400],light:no[300],dark:no[700]}:{main:no[700],light:no[500],dark:no[900]}}function cM(r="light"){return r==="dark"?{main:io[400],light:io[300],dark:io[700]}:{main:io[800],light:io[500],dark:io[900]}}function uM(r="light"){return r==="dark"?{main:ma[400],light:ma[300],dark:ma[700]}:{main:"#ed6c02",light:ma[500],dark:ma[900]}}function fM(r){const{mode:e="light",contrastThreshold:t=3,tonalOffset:s=.2}=r,o=Zr(r,rM),l=r.primary||sM(e),u=r.secondary||oM(e),f=r.error||aM(e),h=r.info||lM(e),p=r.success||cM(e),g=r.warning||uM(e);function m(M){return Nd.getContrastRatio(M,Kf.text.primary)>=t?Kf.text.primary:Ng.text.primary}const v=({color:M,name:x,mainShade:y=500,lightShade:L=300,darkShade:I=700})=>{if(M=Vt({},M),!M.main&&M[y]&&(M.main=M[y]),!M.hasOwnProperty("main"))throw new Error(Pa(11,x?` (${x})`:"",y));if(typeof M.main!="string")throw new Error(Pa(12,x?` (${x})`:"",JSON.stringify(M.main)));return Fg(M,"light",L,s),Fg(M,"dark",I,s),M.contrastText||(M.contrastText=m(M.main)),M},S={dark:Kf,light:Ng};return mr(Vt({common:Vt({},ba),mode:e,primary:v({color:l,name:"primary"}),secondary:v({color:u,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:v({color:f,name:"error"}),warning:v({color:g,name:"warning"}),info:v({color:h,name:"info"}),success:v({color:p,name:"success"}),grey:Wy,contrastThreshold:t,getContrastText:m,augmentColor:v,tonalOffset:s},S[e]),o)}const dM=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function hM(r){return Math.round(r*1e5)/1e5}const Og={textTransform:"uppercase"},kg='"Roboto", "Helvetica", "Arial", sans-serif';function pM(r,e){const t=typeof e=="function"?e(r):e,{fontFamily:s=kg,fontSize:o=14,fontWeightLight:l=300,fontWeightRegular:u=400,fontWeightMedium:f=500,fontWeightBold:h=700,htmlFontSize:p=16,allVariants:g,pxToRem:m}=t,v=Zr(t,dM),S=o/14,E=m||(y=>`${y/p*S}rem`),M=(y,L,I,P,V)=>Vt({fontFamily:s,fontWeight:y,fontSize:E(L),lineHeight:I},s===kg?{letterSpacing:`${hM(P/L)}em`}:{},V,g),x={h1:M(l,96,1.167,-1.5),h2:M(l,60,1.2,-.5),h3:M(u,48,1.167,0),h4:M(u,34,1.235,.25),h5:M(u,24,1.334,0),h6:M(f,20,1.6,.15),subtitle1:M(u,16,1.75,.15),subtitle2:M(f,14,1.57,.1),body1:M(u,16,1.5,.15),body2:M(u,14,1.43,.15),button:M(f,14,1.75,.4,Og),caption:M(u,12,1.66,.4),overline:M(u,12,2.66,1,Og),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return mr(Vt({htmlFontSize:p,pxToRem:E,fontFamily:s,fontSize:o,fontWeightLight:l,fontWeightRegular:u,fontWeightMedium:f,fontWeightBold:h},x),v,{clone:!1})}const mM=.2,gM=.14,_M=.12;function Bt(...r){return[`${r[0]}px ${r[1]}px ${r[2]}px ${r[3]}px rgba(0,0,0,${mM})`,`${r[4]}px ${r[5]}px ${r[6]}px ${r[7]}px rgba(0,0,0,${gM})`,`${r[8]}px ${r[9]}px ${r[10]}px ${r[11]}px rgba(0,0,0,${_M})`].join(",")}const vM=["none",Bt(0,2,1,-1,0,1,1,0,0,1,3,0),Bt(0,3,1,-2,0,2,2,0,0,1,5,0),Bt(0,3,3,-2,0,3,4,0,0,1,8,0),Bt(0,2,4,-1,0,4,5,0,0,1,10,0),Bt(0,3,5,-1,0,5,8,0,0,1,14,0),Bt(0,3,5,-1,0,6,10,0,0,1,18,0),Bt(0,4,5,-2,0,7,10,1,0,2,16,1),Bt(0,5,5,-3,0,8,10,1,0,3,14,2),Bt(0,5,6,-3,0,9,12,1,0,3,16,2),Bt(0,6,6,-3,0,10,14,1,0,4,18,3),Bt(0,6,7,-4,0,11,15,1,0,4,20,3),Bt(0,7,8,-4,0,12,17,2,0,5,22,4),Bt(0,7,8,-4,0,13,19,2,0,5,24,4),Bt(0,7,9,-4,0,14,21,2,0,5,26,4),Bt(0,8,9,-5,0,15,22,2,0,6,28,5),Bt(0,8,10,-5,0,16,24,2,0,6,30,5),Bt(0,8,11,-5,0,17,26,2,0,6,32,5),Bt(0,9,11,-5,0,18,28,2,0,7,34,6),Bt(0,9,12,-6,0,19,29,2,0,7,36,6),Bt(0,10,13,-6,0,20,31,3,0,8,38,7),Bt(0,10,13,-6,0,21,33,3,0,8,40,7),Bt(0,10,14,-6,0,22,35,3,0,8,42,7),Bt(0,11,14,-7,0,23,36,3,0,9,44,8),Bt(0,11,15,-7,0,24,38,3,0,9,46,8)],yM=["duration","easing","delay"],xM={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},SM={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function zg(r){return`${Math.round(r)}ms`}function MM(r){if(!r)return 0;const e=r/36;return Math.round((4+15*e**.25+e/5)*10)}function EM(r){const e=Vt({},xM,r.easing),t=Vt({},SM,r.duration);return Vt({getAutoHeightDuration:MM,create:(o=["all"],l={})=>{const{duration:u=t.standard,easing:f=e.easeInOut,delay:h=0}=l;return Zr(l,yM),(Array.isArray(o)?o:[o]).map(p=>`${p} ${typeof u=="string"?u:zg(u)} ${f} ${typeof h=="string"?h:zg(h)}`).join(",")}},r,{easing:e,duration:t})}const TM={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},wM=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function AM(r={},...e){const{mixins:t={},palette:s={},transitions:o={},typography:l={}}=r,u=Zr(r,wM);if(r.vars&&r.generateCssVars===void 0)throw new Error(Pa(18));const f=fM(s),h=x_(r);let p=mr(h,{mixins:JS(h.breakpoints,t),palette:f,shadows:vM.slice(),typography:pM(f,l),transitions:EM(o),zIndex:Vt({},TM)});return p=mr(p,u),p=e.reduce((g,m)=>mr(g,m),p),p.unstable_sxConfig=Vt({},su,u==null?void 0:u.unstable_sxConfig),p.unstable_sx=function(m){return ou({sx:m,theme:this})},p}const RM=KS("MuiBox",["root"]),CM=AM(),bM=YS({themeId:jy,defaultTheme:CM,defaultClassName:RM.root,generateClassName:S_.generate});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lh="176",To={ROTATE:0,DOLLY:1,PAN:2},xo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},PM=0,Bg=1,LM=2,E_=1,DM=2,ur=3,vr=0,Bn=1,dr=2,$r=0,wo=1,Hg=2,Vg=3,Gg=4,IM=5,xs=100,UM=101,NM=102,FM=103,OM=104,kM=200,zM=201,BM=202,HM=203,Fd=204,Od=205,VM=206,GM=207,WM=208,XM=209,jM=210,YM=211,$M=212,qM=213,KM=214,kd=0,zd=1,Bd=2,Co=3,Hd=4,Vd=5,Gd=6,Wd=7,Dh=0,ZM=1,QM=2,qr=0,JM=1,eE=2,tE=3,nE=4,iE=5,rE=6,sE=7,T_=300,bo=301,Po=302,Xd=303,jd=304,au=306,Gc=1e3,Es=1001,Yd=1002,Ci=1003,oE=1004,nc=1005,Hi=1006,Zf=1007,Ts=1008,Wi=1009,w_=1010,A_=1011,Ua=1012,Ih=1013,ws=1014,hr=1015,Ga=1016,Uh=1017,Nh=1018,Na=1020,R_=35902,C_=1021,b_=1022,Ri=1023,Fa=1026,Oa=1027,P_=1028,Fh=1029,L_=1030,Oh=1031,kh=1033,Dc=33776,Ic=33777,Uc=33778,Nc=33779,$d=35840,qd=35841,Kd=35842,Zd=35843,Qd=36196,Jd=37492,eh=37496,th=37808,nh=37809,ih=37810,rh=37811,sh=37812,oh=37813,ah=37814,lh=37815,ch=37816,uh=37817,fh=37818,dh=37819,hh=37820,ph=37821,Fc=36492,mh=36494,gh=36495,D_=36283,_h=36284,vh=36285,yh=36286,aE=3200,lE=3201,zh=0,cE=1,Yr="",Ln="srgb",Lo="srgb-linear",Wc="linear",Ct="srgb",ro=7680,Wg=519,uE=512,fE=513,dE=514,I_=515,hE=516,pE=517,mE=518,gE=519,Xg=35044,jg="300 es",pr=2e3,Xc=2001;class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yg=1234567;const Aa=Math.PI/180,ka=180/Math.PI;function Uo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function pt(r,e,t){return Math.max(e,Math.min(t,r))}function Bh(r,e){return(r%e+e)%e}function _E(r,e,t,s,o){return s+(r-e)*(o-s)/(t-e)}function vE(r,e,t){return r!==e?(t-r)/(e-r):0}function Ra(r,e,t){return(1-t)*r+t*e}function yE(r,e,t,s){return Ra(r,e,1-Math.exp(-t*s))}function xE(r,e=1){return e-Math.abs(Bh(r,e*2)-e)}function SE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ME(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function EE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function TE(r,e){return r+Math.random()*(e-r)}function wE(r){return r*(.5-Math.random())}function AE(r){r!==void 0&&(Yg=r);let e=Yg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function RE(r){return r*Aa}function CE(r){return r*ka}function bE(r){return(r&r-1)===0&&r!==0}function PE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function LE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function DE(r,e,t,s,o){const l=Math.cos,u=Math.sin,f=l(t/2),h=u(t/2),p=l((e+s)/2),g=u((e+s)/2),m=l((e-s)/2),v=u((e-s)/2),S=l((s-e)/2),E=u((s-e)/2);switch(o){case"XYX":r.set(f*g,h*m,h*v,f*p);break;case"YZY":r.set(h*v,f*g,h*m,f*p);break;case"ZXZ":r.set(h*m,h*v,f*g,f*p);break;case"XZX":r.set(f*g,h*E,h*S,f*p);break;case"YXY":r.set(h*S,f*g,h*E,f*p);break;case"ZYZ":r.set(h*E,h*S,f*g,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function yo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function On(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Oc={DEG2RAD:Aa,RAD2DEG:ka,generateUUID:Uo,clamp:pt,euclideanModulo:Bh,mapLinear:_E,inverseLerp:vE,lerp:Ra,damp:yE,pingpong:xE,smoothstep:SE,smootherstep:ME,randInt:EE,randFloat:TE,randFloatSpread:wE,seededRandom:AE,degToRad:RE,radToDeg:CE,isPowerOfTwo:bE,ceilPowerOfTwo:PE,floorPowerOfTwo:LE,setQuaternionFromProperEuler:DE,normalize:On,denormalize:yo};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(pt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,s,o,l,u,f,h,p){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,h,p)}set(e,t,s,o,l,u,f,h,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=s,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[3],h=s[6],p=s[1],g=s[4],m=s[7],v=s[2],S=s[5],E=s[8],M=o[0],x=o[3],y=o[6],L=o[1],I=o[4],P=o[7],V=o[2],U=o[5],R=o[8];return l[0]=u*M+f*L+h*V,l[3]=u*x+f*I+h*U,l[6]=u*y+f*P+h*R,l[1]=p*M+g*L+m*V,l[4]=p*x+g*I+m*U,l[7]=p*y+g*P+m*R,l[2]=v*M+S*L+E*V,l[5]=v*x+S*I+E*U,l[8]=v*y+S*P+E*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*u*g-t*f*p-s*l*g+s*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],g=e[8],m=g*u-f*p,v=f*h-g*l,S=p*l-u*h,E=t*m+s*v+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=m*M,e[1]=(o*p-g*s)*M,e[2]=(f*s-o*u)*M,e[3]=v*M,e[4]=(g*t-o*h)*M,e[5]=(o*l-f*t)*M,e[6]=S*M,e[7]=(s*h-p*t)*M,e[8]=(u*t-s*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Qf.makeScale(e,t)),this}rotate(e){return this.premultiply(Qf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new at;function U_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function za(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function IE(){const r=za("canvas");return r.style.display="block",r}const $g={};function kc(r){r in $g||($g[r]=!0,console.warn(r))}function UE(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function NE(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function FE(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qg=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kg=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OE(){const r={enabled:!0,workingColorSpace:Lo,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ct&&(o.r=gr(o.r),o.g=gr(o.g),o.b=gr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ct&&(o.r=Ao(o.r),o.g=Ao(o.g),o.b=Ao(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Yr?Wc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Lo]:{primaries:e,whitePoint:s,transfer:Wc,toXYZ:qg,fromXYZ:Kg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:s,transfer:Ct,toXYZ:qg,fromXYZ:Kg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),r}const Et=OE();function gr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let so;class kE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{so===void 0&&(so=za("canvas")),so.width=e.width,so.height=e.height;const o=so.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=so}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=za("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=gr(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(gr(t[s]/255)*255):t[s]=gr(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zE=0;class Hh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Jf(o[u].image)):l.push(Jf(o[u]))}else l=Jf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Jf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?kE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BE=0;class Hn extends Cs{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,s=Es,o=Es,l=Hi,u=Ts,f=Ri,h=Wi,p=Hn.DEFAULT_ANISOTROPY,g=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=Uo(),this.name="",this.source=new Hh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gc:e.x=e.x-Math.floor(e.x);break;case Es:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gc:e.y=e.y-Math.floor(e.y);break;case Es:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=T_;Hn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,s=0,o=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,p=h[0],g=h[4],m=h[8],v=h[1],S=h[5],E=h[9],M=h[2],x=h[6],y=h[10];if(Math.abs(g-v)<.01&&Math.abs(m-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(m+M)<.1&&Math.abs(E+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(p+1)/2,P=(S+1)/2,V=(y+1)/2,U=(g+v)/4,R=(m+M)/4,F=(E+x)/4;return I>P&&I>V?I<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(I),o=U/s,l=R/s):P>V?P<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),s=U/o,l=F/o):V<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),s=R/l,o=F/l),this.set(s,o,l,t),this}let L=Math.sqrt((x-E)*(x-E)+(m-M)*(m-M)+(v-g)*(v-g));return Math.abs(L)<.001&&(L=1),this.x=(x-E)/L,this.y=(m-M)/L,this.z=(v-g)/L,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HE extends Cs{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth?s.depth:1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const o={width:e,height:t,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const l=new Hn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Hh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends HE{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class N_ extends Hn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VE extends Hn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,f){let h=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];const v=l[u+0],S=l[u+1],E=l[u+2],M=l[u+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(f===1){e[t+0]=v,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(m!==M||h!==v||p!==S||g!==E){let x=1-f;const y=h*v+p*S+g*E+m*M,L=y>=0?1:-1,I=1-y*y;if(I>Number.EPSILON){const V=Math.sqrt(I),U=Math.atan2(V,y*L);x=Math.sin(x*U)/V,f=Math.sin(f*U)/V}const P=f*L;if(h=h*x+v*P,p=p*x+S*P,g=g*x+E*P,m=m*x+M*P,x===1-f){const V=1/Math.sqrt(h*h+p*p+g*g+m*m);h*=V,p*=V,g*=V,m*=V}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=m}static multiplyQuaternionsFlat(e,t,s,o,l,u){const f=s[o],h=s[o+1],p=s[o+2],g=s[o+3],m=l[u],v=l[u+1],S=l[u+2],E=l[u+3];return e[t]=f*E+g*m+h*S-p*v,e[t+1]=h*E+g*v+p*m-f*S,e[t+2]=p*E+g*S+f*v-h*m,e[t+3]=g*E-f*m-h*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(s/2),g=f(o/2),m=f(l/2),v=h(s/2),S=h(o/2),E=h(l/2);switch(u){case"XYZ":this._x=v*g*m+p*S*E,this._y=p*S*m-v*g*E,this._z=p*g*E+v*S*m,this._w=p*g*m-v*S*E;break;case"YXZ":this._x=v*g*m+p*S*E,this._y=p*S*m-v*g*E,this._z=p*g*E-v*S*m,this._w=p*g*m+v*S*E;break;case"ZXY":this._x=v*g*m-p*S*E,this._y=p*S*m+v*g*E,this._z=p*g*E+v*S*m,this._w=p*g*m-v*S*E;break;case"ZYX":this._x=v*g*m-p*S*E,this._y=p*S*m+v*g*E,this._z=p*g*E-v*S*m,this._w=p*g*m+v*S*E;break;case"YZX":this._x=v*g*m+p*S*E,this._y=p*S*m+v*g*E,this._z=p*g*E-v*S*m,this._w=p*g*m-v*S*E;break;case"XZY":this._x=v*g*m-p*S*E,this._y=p*S*m-v*g*E,this._z=p*g*E+v*S*m,this._w=p*g*m+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],g=t[6],m=t[10],v=s+f+m;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(s>f&&s>m){const S=2*Math.sqrt(1+s-f-m);this._w=(g-h)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(f>m){const S=2*Math.sqrt(1+f-s-m);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+m-s-f);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=s*g+u*f+o*p-l*h,this._y=o*g+u*h+l*f-s*p,this._z=l*g+u*p+s*h-o*f,this._w=u*g-s*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,u=this._w;let f=u*e._w+s*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=s,this._y=o,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*s+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,f),m=Math.sin((1-t)*g)/p,v=Math.sin(t*g)/p;return this._w=u*m+this._w*v,this._x=s*m+this._x*v,this._y=o*m+this._y*v,this._z=l*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,s=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*s),g=2*(f*t-l*o),m=2*(l*s-u*t);return this.x=t+h*p+u*m-f*g,this.y=s+h*g+f*p-l*m,this.z=o+h*m+l*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-s*h,this.z=s*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ed.copy(this).projectOnVector(e),this.sub(ed)}reflect(e){return this.sub(ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(pt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new X,Zg=new As;class Rs{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ei):Ei.fromBufferAttribute(l,u),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ic.copy(s.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_a),rc.subVectors(this.max,_a),oo.subVectors(e.a,_a),ao.subVectors(e.b,_a),lo.subVectors(e.c,_a),Hr.subVectors(ao,oo),Vr.subVectors(lo,ao),ds.subVectors(oo,lo);let t=[0,-Hr.z,Hr.y,0,-Vr.z,Vr.y,0,-ds.z,ds.y,Hr.z,0,-Hr.x,Vr.z,0,-Vr.x,ds.z,0,-ds.x,-Hr.y,Hr.x,0,-Vr.y,Vr.x,0,-ds.y,ds.x,0];return!td(t,oo,ao,lo,rc)||(t=[1,0,0,0,1,0,0,0,1],!td(t,oo,ao,lo,rc))?!1:(sc.crossVectors(Hr,Vr),t=[sc.x,sc.y,sc.z],td(t,oo,ao,lo,rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rr=[new X,new X,new X,new X,new X,new X,new X,new X],Ei=new X,ic=new Rs,oo=new X,ao=new X,lo=new X,Hr=new X,Vr=new X,ds=new X,_a=new X,rc=new X,sc=new X,hs=new X;function td(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){hs.fromArray(r,l);const f=o.x*Math.abs(hs.x)+o.y*Math.abs(hs.y)+o.z*Math.abs(hs.z),h=e.dot(hs),p=t.dot(hs),g=s.dot(hs);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const GE=new Rs,va=new X,nd=new X;class Wa{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):GE.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;va.subVectors(e,this.center);const t=va.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(va,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(va.copy(e.center).add(nd)),this.expandByPoint(va.copy(e.center).sub(nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sr=new X,id=new X,oc=new X,Gr=new X,rd=new X,ac=new X,sd=new X;class lu{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){id.copy(e).add(t).multiplyScalar(.5),oc.copy(t).sub(e).normalize(),Gr.copy(this.origin).sub(id);const l=e.distanceTo(t)*.5,u=-this.direction.dot(oc),f=Gr.dot(this.direction),h=-Gr.dot(oc),p=Gr.lengthSq(),g=Math.abs(1-u*u);let m,v,S,E;if(g>0)if(m=u*h-f,v=u*f-h,E=l*g,m>=0)if(v>=-E)if(v<=E){const M=1/g;m*=M,v*=M,S=m*(m+u*v+2*f)+v*(u*m+v+2*h)+p}else v=l,m=Math.max(0,-(u*v+f)),S=-m*m+v*(v+2*h)+p;else v=-l,m=Math.max(0,-(u*v+f)),S=-m*m+v*(v+2*h)+p;else v<=-E?(m=Math.max(0,-(-u*l+f)),v=m>0?-l:Math.min(Math.max(-l,-h),l),S=-m*m+v*(v+2*h)+p):v<=E?(m=0,v=Math.min(Math.max(-l,-h),l),S=v*(v+2*h)+p):(m=Math.max(0,-(u*l+f)),v=m>0?l:Math.min(Math.max(-l,-h),l),S=-m*m+v*(v+2*h)+p);else v=u>0?-l:l,m=Math.max(0,-(u*v+f)),S=-m*m+v*(v+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,m),o&&o.copy(id).addScaledVector(oc,v),S}intersectSphere(e,t){sr.subVectors(e.center,this.origin);const s=sr.dot(this.direction),o=sr.dot(sr)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=s-u,h=s+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,f,h;const p=1/this.direction.x,g=1/this.direction.y,m=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,o=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,o=(e.min.x-v.x)*p),g>=0?(l=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),m>=0?(f=(e.min.z-v.z)*m,h=(e.max.z-v.z)*m):(f=(e.max.z-v.z)*m,h=(e.min.z-v.z)*m),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,s,o,l){rd.subVectors(t,e),ac.subVectors(s,e),sd.crossVectors(rd,ac);let u=this.direction.dot(sd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Gr.subVectors(this.origin,e);const h=f*this.direction.dot(ac.crossVectors(Gr,ac));if(h<0)return null;const p=f*this.direction.dot(rd.cross(Gr));if(p<0||h+p>u)return null;const g=-f*Gr.dot(sd);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,s,o,l,u,f,h,p,g,m,v,S,E,M,x){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,h,p,g,m,v,S,E,M,x)}set(e,t,s,o,l,u,f,h,p,g,m,v,S,E,M,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=s,y[12]=o,y[1]=l,y[5]=u,y[9]=f,y[13]=h,y[2]=p,y[6]=g,y[10]=m,y[14]=v,y[3]=S,y[7]=E,y[11]=M,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/co.setFromMatrixColumn(e,0).length(),l=1/co.setFromMatrixColumn(e,1).length(),u=1/co.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),h=Math.cos(o),p=Math.sin(o),g=Math.cos(l),m=Math.sin(l);if(e.order==="XYZ"){const v=u*g,S=u*m,E=f*g,M=f*m;t[0]=h*g,t[4]=-h*m,t[8]=p,t[1]=S+E*p,t[5]=v-M*p,t[9]=-f*h,t[2]=M-v*p,t[6]=E+S*p,t[10]=u*h}else if(e.order==="YXZ"){const v=h*g,S=h*m,E=p*g,M=p*m;t[0]=v+M*f,t[4]=E*f-S,t[8]=u*p,t[1]=u*m,t[5]=u*g,t[9]=-f,t[2]=S*f-E,t[6]=M+v*f,t[10]=u*h}else if(e.order==="ZXY"){const v=h*g,S=h*m,E=p*g,M=p*m;t[0]=v-M*f,t[4]=-u*m,t[8]=E+S*f,t[1]=S+E*f,t[5]=u*g,t[9]=M-v*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const v=u*g,S=u*m,E=f*g,M=f*m;t[0]=h*g,t[4]=E*p-S,t[8]=v*p+M,t[1]=h*m,t[5]=M*p+v,t[9]=S*p-E,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const v=u*h,S=u*p,E=f*h,M=f*p;t[0]=h*g,t[4]=M-v*m,t[8]=E*m+S,t[1]=m,t[5]=u*g,t[9]=-f*g,t[2]=-p*g,t[6]=S*m+E,t[10]=v-M*m}else if(e.order==="XZY"){const v=u*h,S=u*p,E=f*h,M=f*p;t[0]=h*g,t[4]=-m,t[8]=p*g,t[1]=v*m+M,t[5]=u*g,t[9]=S*m-E,t[2]=E*m-S,t[6]=f*g,t[10]=M*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WE,e,XE)}lookAt(e,t,s){const o=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Wr.crossVectors(s,ti),Wr.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Wr.crossVectors(s,ti)),Wr.normalize(),lc.crossVectors(ti,Wr),o[0]=Wr.x,o[4]=lc.x,o[8]=ti.x,o[1]=Wr.y,o[5]=lc.y,o[9]=ti.y,o[2]=Wr.z,o[6]=lc.z,o[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[4],h=s[8],p=s[12],g=s[1],m=s[5],v=s[9],S=s[13],E=s[2],M=s[6],x=s[10],y=s[14],L=s[3],I=s[7],P=s[11],V=s[15],U=o[0],R=o[4],F=o[8],C=o[12],w=o[1],k=o[5],ne=o[9],Z=o[13],se=o[2],ce=o[6],ee=o[10],pe=o[14],H=o[3],ae=o[7],le=o[11],O=o[15];return l[0]=u*U+f*w+h*se+p*H,l[4]=u*R+f*k+h*ce+p*ae,l[8]=u*F+f*ne+h*ee+p*le,l[12]=u*C+f*Z+h*pe+p*O,l[1]=g*U+m*w+v*se+S*H,l[5]=g*R+m*k+v*ce+S*ae,l[9]=g*F+m*ne+v*ee+S*le,l[13]=g*C+m*Z+v*pe+S*O,l[2]=E*U+M*w+x*se+y*H,l[6]=E*R+M*k+x*ce+y*ae,l[10]=E*F+M*ne+x*ee+y*le,l[14]=E*C+M*Z+x*pe+y*O,l[3]=L*U+I*w+P*se+V*H,l[7]=L*R+I*k+P*ce+V*ae,l[11]=L*F+I*ne+P*ee+V*le,l[15]=L*C+I*Z+P*pe+V*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],g=e[2],m=e[6],v=e[10],S=e[14],E=e[3],M=e[7],x=e[11],y=e[15];return E*(+l*h*m-o*p*m-l*f*v+s*p*v+o*f*S-s*h*S)+M*(+t*h*S-t*p*v+l*u*v-o*u*S+o*p*g-l*h*g)+x*(+t*p*m-t*f*S-l*u*m+s*u*S+l*f*g-s*p*g)+y*(-o*f*g-t*h*m+t*f*v+o*u*m-s*u*v+s*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],g=e[8],m=e[9],v=e[10],S=e[11],E=e[12],M=e[13],x=e[14],y=e[15],L=m*x*p-M*v*p+M*h*S-f*x*S-m*h*y+f*v*y,I=E*v*p-g*x*p-E*h*S+u*x*S+g*h*y-u*v*y,P=g*M*p-E*m*p+E*f*S-u*M*S-g*f*y+u*m*y,V=E*m*h-g*M*h-E*f*v+u*M*v+g*f*x-u*m*x,U=t*L+s*I+o*P+l*V;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/U;return e[0]=L*R,e[1]=(M*v*l-m*x*l-M*o*S+s*x*S+m*o*y-s*v*y)*R,e[2]=(f*x*l-M*h*l+M*o*p-s*x*p-f*o*y+s*h*y)*R,e[3]=(m*h*l-f*v*l-m*o*p+s*v*p+f*o*S-s*h*S)*R,e[4]=I*R,e[5]=(g*x*l-E*v*l+E*o*S-t*x*S-g*o*y+t*v*y)*R,e[6]=(E*h*l-u*x*l-E*o*p+t*x*p+u*o*y-t*h*y)*R,e[7]=(u*v*l-g*h*l+g*o*p-t*v*p-u*o*S+t*h*S)*R,e[8]=P*R,e[9]=(E*m*l-g*M*l-E*s*S+t*M*S+g*s*y-t*m*y)*R,e[10]=(u*M*l-E*f*l+E*s*p-t*M*p-u*s*y+t*f*y)*R,e[11]=(g*f*l-u*m*l-g*s*p+t*m*p+u*s*S-t*f*S)*R,e[12]=V*R,e[13]=(g*M*o-E*m*o+E*s*v-t*M*v-g*s*x+t*m*x)*R,e[14]=(E*f*o-u*M*o-E*s*h+t*M*h+u*s*x-t*f*x)*R,e[15]=(u*m*o-g*f*o+g*s*h-t*m*h-u*s*v+t*f*v)*R,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,f=e.y,h=e.z,p=l*u,g=l*f;return this.set(p*u+s,p*f-o*h,p*h+o*f,0,p*f+o*h,g*f+s,g*h-o*u,0,p*h-o*f,g*h+o*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,g=u+u,m=f+f,v=l*p,S=l*g,E=l*m,M=u*g,x=u*m,y=f*m,L=h*p,I=h*g,P=h*m,V=s.x,U=s.y,R=s.z;return o[0]=(1-(M+y))*V,o[1]=(S+P)*V,o[2]=(E-I)*V,o[3]=0,o[4]=(S-P)*U,o[5]=(1-(v+y))*U,o[6]=(x+L)*U,o[7]=0,o[8]=(E+I)*R,o[9]=(x-L)*R,o[10]=(1-(v+M))*R,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=co.set(o[0],o[1],o[2]).length();const u=co.set(o[4],o[5],o[6]).length(),f=co.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],Ti.copy(this);const p=1/l,g=1/u,m=1/f;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=g,Ti.elements[5]*=g,Ti.elements[6]*=g,Ti.elements[8]*=m,Ti.elements[9]*=m,Ti.elements[10]*=m,t.setFromRotationMatrix(Ti),s.x=l,s.y=u,s.z=f,this}makePerspective(e,t,s,o,l,u,f=pr){const h=this.elements,p=2*l/(t-e),g=2*l/(s-o),m=(t+e)/(t-e),v=(s+o)/(s-o);let S,E;if(f===pr)S=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(f===Xc)S=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,o,l,u,f=pr){const h=this.elements,p=1/(t-e),g=1/(s-o),m=1/(u-l),v=(t+e)*p,S=(s+o)*g;let E,M;if(f===pr)E=(u+l)*m,M=-2*m;else if(f===Xc)E=l*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=M,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const co=new X,Ti=new Lt,WE=new X(0,0,0),XE=new X(1,1,1),Wr=new X,lc=new X,ti=new X,Qg=new Lt,Jg=new As;class bi{constructor(e=0,t=0,s=0,o=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],g=o[9],m=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-m,l),this._z=0);break;case"ZXY":this._x=Math.asin(pt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-pt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-m,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Qg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jg.setFromEuler(this),this.setFromQuaternion(Jg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class F_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jE=0;const e0=new X,uo=new As,or=new Lt,cc=new X,ya=new X,YE=new X,$E=new As,t0=new X(1,0,0),n0=new X(0,1,0),i0=new X(0,0,1),r0={type:"added"},qE={type:"removed"},fo={type:"childadded",child:null},od={type:"childremoved",child:null};class _n extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new X,t=new bi,s=new As,o=new X(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Lt},normalMatrix:{value:new at}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new F_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return uo.setFromAxisAngle(e,t),this.quaternion.multiply(uo),this}rotateOnWorldAxis(e,t){return uo.setFromAxisAngle(e,t),this.quaternion.premultiply(uo),this}rotateX(e){return this.rotateOnAxis(t0,e)}rotateY(e){return this.rotateOnAxis(n0,e)}rotateZ(e){return this.rotateOnAxis(i0,e)}translateOnAxis(e,t){return e0.copy(e).applyQuaternion(this.quaternion),this.position.add(e0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(t0,e)}translateY(e){return this.translateOnAxis(n0,e)}translateZ(e){return this.translateOnAxis(i0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?cc.copy(e):cc.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(ya,cc,this.up):or.lookAt(cc,ya,this.up),this.quaternion.setFromRotationMatrix(or),o&&(or.extractRotation(o.matrixWorld),uo.setFromRotationMatrix(or),this.quaternion.premultiply(uo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(r0),fo.child=e,this.dispatchEvent(fo),fo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qE),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(r0),fo.child=e,this.dispatchEvent(fo),fo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,YE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,$E,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?{min:f.boundingBox.min.toArray(),max:f.boundingBox.max.toArray()}:void 0,boundingSphere:f.boundingSphere?{radius:f.boundingSphere.radius,center:f.boundingSphere.center.toArray()}:void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const m=h[p];l(e.shapes,m)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),g=u(e.images),m=u(e.shapes),v=u(e.skeletons),S=u(e.animations),E=u(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),m.length>0&&(s.shapes=m),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}_n.DEFAULT_UP=new X(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new X,ar=new X,ad=new X,lr=new X,ho=new X,po=new X,s0=new X,ld=new X,cd=new X,ud=new X,fd=new Ht,dd=new Ht,hd=new Ht;class Ai{constructor(e=new X,t=new X,s=new X){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),wi.subVectors(e,t),o.cross(wi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){wi.subVectors(o,t),ar.subVectors(s,t),ad.subVectors(e,t);const u=wi.dot(wi),f=wi.dot(ar),h=wi.dot(ad),p=ar.dot(ar),g=ar.dot(ad),m=u*p-f*f;if(m===0)return l.set(0,0,0),null;const v=1/m,S=(p*h-f*g)*v,E=(u*g-f*h)*v;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,s,o,l,u,f,h){return this.getBarycoord(e,t,s,o,lr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,lr.x),h.addScaledVector(u,lr.y),h.addScaledVector(f,lr.z),h)}static getInterpolatedAttribute(e,t,s,o,l,u){return fd.setScalar(0),dd.setScalar(0),hd.setScalar(0),fd.fromBufferAttribute(e,t),dd.fromBufferAttribute(e,s),hd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(fd,l.x),u.addScaledVector(dd,l.y),u.addScaledVector(hd,l.z),u}static isFrontFacing(e,t,s,o){return wi.subVectors(s,t),ar.subVectors(e,t),wi.cross(ar).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),wi.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return Ai.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,f;ho.subVectors(o,s),po.subVectors(l,s),ld.subVectors(e,s);const h=ho.dot(ld),p=po.dot(ld);if(h<=0&&p<=0)return t.copy(s);cd.subVectors(e,o);const g=ho.dot(cd),m=po.dot(cd);if(g>=0&&m<=g)return t.copy(o);const v=h*m-g*p;if(v<=0&&h>=0&&g<=0)return u=h/(h-g),t.copy(s).addScaledVector(ho,u);ud.subVectors(e,l);const S=ho.dot(ud),E=po.dot(ud);if(E>=0&&S<=E)return t.copy(l);const M=S*p-h*E;if(M<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(po,f);const x=g*E-S*m;if(x<=0&&m-g>=0&&S-E>=0)return s0.subVectors(l,o),f=(m-g)/(m-g+(S-E)),t.copy(o).addScaledVector(s0,f);const y=1/(x+M+v);return u=M*y,f=v*y,t.copy(s).addScaledVector(ho,u).addScaledVector(po,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const O_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},uc={h:0,s:0,l:0};function pd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class lt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=s,Et.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=Et.workingColorSpace){if(e=Bh(e,1),t=pt(t,0,1),s=pt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=pd(u,l,e+1/3),this.g=pd(u,l,e),this.b=pd(u,l,e-1/3)}return Et.toWorkingColorSpace(this,o),this}setStyle(e,t=Ln){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){const s=O_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return Et.fromWorkingColorSpace(bn.copy(this),e),Math.round(pt(bn.r*255,0,255))*65536+Math.round(pt(bn.g*255,0,255))*256+Math.round(pt(bn.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(bn.copy(this),t);const s=bn.r,o=bn.g,l=bn.b,u=Math.max(s,o,l),f=Math.min(s,o,l);let h,p;const g=(f+u)/2;if(f===u)h=0,p=0;else{const m=u-f;switch(p=g<=.5?m/(u+f):m/(2-u-f),u){case s:h=(o-l)/m+(o<l?6:0);break;case o:h=(l-s)/m+2;break;case l:h=(s-o)/m+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Ln){Et.fromWorkingColorSpace(bn.copy(this),e);const t=bn.r,s=bn.g,o=bn.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(uc);const s=Ra(Xr.h,uc.h,t),o=Ra(Xr.s,uc.s,t),l=Ra(Xr.l,uc.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new lt;lt.NAMES=O_;let KE=0;class Xi extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=wo,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=Od,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(s.blending=this.blending),this.side!==vr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Fd&&(s.blendSrc=this.blendSrc),this.blendDst!==Od&&(s.blendDst=this.blendDst),this.blendEquation!==xs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ro&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ro&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ro&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class k_ extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new X,fc=new ot;let ZE=0;class Gi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Xg,this.updateRanges=[],this.gpuType=hr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)fc.fromBufferAttribute(this,t),fc.applyMatrix3(e),this.setXY(t,fc.x,fc.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=yo(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=On(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yo(t,this.array)),t}setX(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yo(t,this.array)),t}setY(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yo(t,this.array)),t}setW(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),s=On(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),s=On(s,this.array),o=On(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),s=On(s,this.array),o=On(o,this.array),l=On(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xg&&(e.usage=this.usage),e}}class z_ extends Gi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class B_ extends Gi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class zn extends Gi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let QE=0;const hi=new Lt,md=new _n,mo=new X,ni=new Rs,xa=new Rs,gn=new X;class Pi extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U_(e)?B_:z_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new at().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,s){return hi.makeTranslation(e,t,s),this.applyMatrix4(hi),this}scale(e,t,s){return hi.makeScale(e,t,s),this.applyMatrix4(hi),this}lookAt(e){return md.lookAt(e),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new zn(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];ni.setFromBufferAttribute(l),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];xa.setFromBufferAttribute(f),this.morphTargetsRelative?(gn.addVectors(ni.min,xa.min),ni.expandByPoint(gn),gn.addVectors(ni.max,xa.max),ni.expandByPoint(gn)):(ni.expandByPoint(xa.min),ni.expandByPoint(xa.max))}ni.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)gn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(gn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)gn.fromBufferAttribute(f,p),h&&(mo.fromBufferAttribute(e,p),gn.add(mo)),o=Math.max(o,s.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let F=0;F<s.count;F++)f[F]=new X,h[F]=new X;const p=new X,g=new X,m=new X,v=new ot,S=new ot,E=new ot,M=new X,x=new X;function y(F,C,w){p.fromBufferAttribute(s,F),g.fromBufferAttribute(s,C),m.fromBufferAttribute(s,w),v.fromBufferAttribute(l,F),S.fromBufferAttribute(l,C),E.fromBufferAttribute(l,w),g.sub(p),m.sub(p),S.sub(v),E.sub(v);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(M.copy(g).multiplyScalar(E.y).addScaledVector(m,-S.y).multiplyScalar(k),x.copy(m).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(k),f[F].add(M),f[C].add(M),f[w].add(M),h[F].add(x),h[C].add(x),h[w].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let F=0,C=L.length;F<C;++F){const w=L[F],k=w.start,ne=w.count;for(let Z=k,se=k+ne;Z<se;Z+=3)y(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const I=new X,P=new X,V=new X,U=new X;function R(F){V.fromBufferAttribute(o,F),U.copy(V);const C=f[F];I.copy(C),I.sub(V.multiplyScalar(V.dot(C))).normalize(),P.crossVectors(U,C);const k=P.dot(h[F])<0?-1:1;u.setXYZW(F,I.x,I.y,I.z,k)}for(let F=0,C=L.length;F<C;++F){const w=L[F],k=w.start,ne=w.count;for(let Z=k,se=k+ne;Z<se;Z+=3)R(e.getX(Z+0)),R(e.getX(Z+1)),R(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Gi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const o=new X,l=new X,u=new X,f=new X,h=new X,p=new X,g=new X,m=new X;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),M=e.getX(v+1),x=e.getX(v+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),u.fromBufferAttribute(t,x),g.subVectors(u,l),m.subVectors(o,l),g.cross(m),f.fromBufferAttribute(s,E),h.fromBufferAttribute(s,M),p.fromBufferAttribute(s,x),f.add(g),h.add(g),p.add(g),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(M,h.x,h.y,h.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),g.subVectors(u,l),m.subVectors(o,l),g.cross(m),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,m=f.normalized,v=new p.constructor(h.length*g);let S=0,E=0;for(let M=0,x=h.length;M<x;M++){f.isInterleavedBufferAttribute?S=h[M]*f.data.stride+f.offset:S=h[M]*g;for(let y=0;y<g;y++)v[E++]=p[S++]}return new Gi(v,g,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pi,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,m=p.length;g<m;g++){const v=p[g],S=e(v,s);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let m=0,v=p.length;m<v;m++){const S=p[m];g.push(S.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],m=l[p];for(let v=0,S=m.length;v<S;v++)g.push(m[v].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const m=u[p];this.addGroup(m.start,m.count,m.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const o0=new Lt,ps=new lu,dc=new Wa,a0=new X,hc=new X,pc=new X,mc=new X,gd=new X,gc=new X,l0=new X,_c=new X;class si extends _n{constructor(e=new Pi,t=new k_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){gc.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],m=l[h];g!==0&&(gd.fromBufferAttribute(m,e),u?gc.addScaledVector(gd,g):gc.addScaledVector(gd.sub(t),g))}t.add(gc)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),dc.copy(s.boundingSphere),dc.applyMatrix4(l),ps.copy(e.ray).recast(e.near),!(dc.containsPoint(ps.origin)===!1&&(ps.intersectSphere(dc,a0)===null||ps.origin.distanceToSquared(a0)>(e.far-e.near)**2))&&(o0.copy(l).invert(),ps.copy(e.ray).applyMatrix4(o0),!(s.boundingBox!==null&&ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,m=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const x=v[E],y=u[x.materialIndex],L=Math.max(x.start,S.start),I=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let P=L,V=I;P<V;P+=3){const U=f.getX(P),R=f.getX(P+1),F=f.getX(P+2);o=vc(this,y,e,s,p,g,m,U,R,F),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let x=E,y=M;x<y;x+=3){const L=f.getX(x),I=f.getX(x+1),P=f.getX(x+2);o=vc(this,u,e,s,p,g,m,L,I,P),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const x=v[E],y=u[x.materialIndex],L=Math.max(x.start,S.start),I=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let P=L,V=I;P<V;P+=3){const U=P,R=P+1,F=P+2;o=vc(this,y,e,s,p,g,m,U,R,F),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(h.count,S.start+S.count);for(let x=E,y=M;x<y;x+=3){const L=x,I=x+1,P=x+2;o=vc(this,u,e,s,p,g,m,L,I,P),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function JE(r,e,t,s,o,l,u,f){let h;if(e.side===Bn?h=s.intersectTriangle(u,l,o,!0,f):h=s.intersectTriangle(o,l,u,e.side===vr,f),h===null)return null;_c.copy(f),_c.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(_c);return p<t.near||p>t.far?null:{distance:p,point:_c.clone(),object:r}}function vc(r,e,t,s,o,l,u,f,h,p){r.getVertexPosition(f,hc),r.getVertexPosition(h,pc),r.getVertexPosition(p,mc);const g=JE(r,e,t,s,hc,pc,mc,l0);if(g){const m=new X;Ai.getBarycoord(l0,hc,pc,mc,m),o&&(g.uv=Ai.getInterpolatedAttribute(o,f,h,p,m,new ot)),l&&(g.uv1=Ai.getInterpolatedAttribute(l,f,h,p,m,new ot)),u&&(g.normal=Ai.getInterpolatedAttribute(u,f,h,p,m,new X),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:h,c:p,normal:new X,materialIndex:0};Ai.getNormal(hc,pc,mc,v.normal),g.face=v,g.barycoord=m}return g}class No extends Pi{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],g=[],m=[];let v=0,S=0;E("z","y","x",-1,-1,s,t,e,u,l,0),E("z","y","x",1,-1,s,t,-e,u,l,1),E("x","z","y",1,1,e,s,t,o,u,2),E("x","z","y",1,-1,e,s,-t,o,u,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new zn(p,3)),this.setAttribute("normal",new zn(g,3)),this.setAttribute("uv",new zn(m,2));function E(M,x,y,L,I,P,V,U,R,F,C){const w=P/R,k=V/F,ne=P/2,Z=V/2,se=U/2,ce=R+1,ee=F+1;let pe=0,H=0;const ae=new X;for(let le=0;le<ee;le++){const O=le*k-Z;for(let re=0;re<ce;re++){const Le=re*w-ne;ae[M]=Le*L,ae[x]=O*I,ae[y]=se,p.push(ae.x,ae.y,ae.z),ae[M]=0,ae[x]=0,ae[y]=U>0?1:-1,g.push(ae.x,ae.y,ae.z),m.push(re/R),m.push(1-le/F),pe+=1}}for(let le=0;le<F;le++)for(let O=0;O<R;O++){const re=v+O+ce*le,Le=v+O+ce*(le+1),J=v+(O+1)+ce*(le+1),he=v+(O+1)+ce*le;h.push(re,Le,he),h.push(Le,J,he),H+=6}f.addGroup(S,H,C),S+=H,v+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Do(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function kn(r){const e={};for(let t=0;t<r.length;t++){const s=Do(r[t]);for(const o in s)e[o]=s[o]}return e}function e1(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function H_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const jc={clone:Do,merge:kn};var t1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t1,this.fragmentShader=n1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=e1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class V_ extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=pr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jr=new X,c0=new ot,u0=new ot;class ii extends V_{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jr.x,jr.y).multiplyScalar(-e/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(jr.x,jr.y).multiplyScalar(-e/jr.z)}getViewSize(e,t){return this.getViewBounds(e,c0,u0),t.subVectors(u0,c0)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Aa*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*s/p,o*=u.width/h,s*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const go=-90,_o=1;class i1 extends _n{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ii(go,_o,e,t);o.layers=this.layers,this.add(o);const l=new ii(go,_o,e,t);l.layers=this.layers,this.add(l);const u=new ii(go,_o,e,t);u.layers=this.layers,this.add(u);const f=new ii(go,_o,e,t);f.layers=this.layers,this.add(f);const h=new ii(go,_o,e,t);h.layers=this.layers,this.add(h);const p=new ii(go,_o,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===pr)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Xc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,g]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,u),e.setRenderTarget(s,2,o),e.render(t,f),e.setRenderTarget(s,3,o),e.render(t,h),e.setRenderTarget(s,4,o),e.render(t,p),s.texture.generateMipmaps=M,e.setRenderTarget(s,5,o),e.render(t,g),e.setRenderTarget(m,v,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class G_ extends Hn{constructor(e=[],t=bo,s,o,l,u,f,h,p,g){super(e,t,s,o,l,u,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class r1 extends Kr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new G_(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new No(5,5,5),l=new ji({name:"CubemapFromEquirect",uniforms:Do(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Bn,blending:$r});l.uniforms.tEquirect.value=t;const u=new si(o,l),f=t.minFilter;return t.minFilter===Ts&&(t.minFilter=Hi),new i1(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}class Ma extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s1={type:"move"};class _d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,s),y=this._getHandJoint(p,M);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const g=p.joints["index-finger-tip"],m=p.joints["thumb-tip"],v=g.position.distanceTo(m.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(s1)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Ma;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class o1 extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vd=new X,a1=new X,l1=new at;class fr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=vd.subVectors(s,t).cross(a1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(vd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||l1.getNormalMatrix(e),o=this.coplanarPoint(vd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Wa,yc=new X;class Vh{constructor(e=new fr,t=new fr,s=new fr,o=new fr,l=new fr,u=new fr){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=pr){const s=this.planes,o=e.elements,l=o[0],u=o[1],f=o[2],h=o[3],p=o[4],g=o[5],m=o[6],v=o[7],S=o[8],E=o[9],M=o[10],x=o[11],y=o[12],L=o[13],I=o[14],P=o[15];if(s[0].setComponents(h-l,v-p,x-S,P-y).normalize(),s[1].setComponents(h+l,v+p,x+S,P+y).normalize(),s[2].setComponents(h+u,v+g,x+E,P+L).normalize(),s[3].setComponents(h-u,v-g,x-E,P-L).normalize(),s[4].setComponents(h-f,v-m,x-M,P-I).normalize(),t===pr)s[5].setComponents(h+f,v+m,x+M,P+I).normalize();else if(t===Xc)s[5].setComponents(f,m,M,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(yc.x=o.normal.x>0?e.max.x:e.min.x,yc.y=o.normal.y>0?e.max.y:e.min.y,yc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(yc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zc extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yc=new X,$c=new X,f0=new Lt,Sa=new lu,xc=new Wa,yd=new X,d0=new X;class c1 extends _n{constructor(e=new Pi,t=new zc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)Yc.fromBufferAttribute(t,o-1),$c.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=Yc.distanceTo($c);e.setAttribute("lineDistance",new zn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(o),xc.radius+=l,e.ray.intersectsSphere(xc)===!1)return;f0.copy(o).invert(),Sa.copy(e.ray).applyMatrix4(f0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const S=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let M=S,x=E-1;M<x;M+=p){const y=g.getX(M),L=g.getX(M+1),I=Sc(this,e,Sa,h,y,L,M);I&&t.push(I)}if(this.isLineLoop){const M=g.getX(E-1),x=g.getX(S),y=Sc(this,e,Sa,h,M,x,E-1);y&&t.push(y)}}else{const S=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let M=S,x=E-1;M<x;M+=p){const y=Sc(this,e,Sa,h,M,M+1,M);y&&t.push(y)}if(this.isLineLoop){const M=Sc(this,e,Sa,h,E-1,S,E-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Sc(r,e,t,s,o,l,u){const f=r.geometry.attributes.position;if(Yc.fromBufferAttribute(f,o),$c.fromBufferAttribute(f,l),t.distanceSqToSegment(Yc,$c,yd,d0)>s)return;yd.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(yd);if(!(p<e.near||p>e.far))return{distance:p,point:d0.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const h0=new X,p0=new X;class m0 extends c1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)h0.fromBufferAttribute(t,o),p0.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+h0.distanceTo(p0);e.setAttribute("lineDistance",new zn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ea extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const g0=new Lt,xh=new lu,Mc=new Wa,Ec=new X;class xd extends _n{constructor(e=new Pi,t=new Ea){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Mc.copy(s.boundingSphere),Mc.applyMatrix4(o),Mc.radius+=l,e.ray.intersectsSphere(Mc)===!1)return;g0.copy(o).invert(),xh.copy(e.ray).applyMatrix4(g0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=s.index,m=s.attributes.position;if(p!==null){const v=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let E=v,M=S;E<M;E++){const x=p.getX(E);Ec.fromBufferAttribute(m,x),_0(Ec,x,h,o,e,t,this)}}else{const v=Math.max(0,u.start),S=Math.min(m.count,u.start+u.count);for(let E=v,M=S;E<M;E++)Ec.fromBufferAttribute(m,E),_0(Ec,E,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function _0(r,e,t,s,o,l,u){const f=xh.distanceSqToPoint(r);if(f<t){const h=new X;xh.closestPointToPoint(r,h),h.applyMatrix4(s);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class W_ extends Hn{constructor(e,t,s=ws,o,l,u,f=Ci,h=Ci,p,g=Fa){if(g!==Fa&&g!==Oa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,l,u,f,h,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xa extends Pi{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(s),h=Math.floor(o),p=f+1,g=h+1,m=e/f,v=t/h,S=[],E=[],M=[],x=[];for(let y=0;y<g;y++){const L=y*v-u;for(let I=0;I<p;I++){const P=I*m-l;E.push(P,-L,0),M.push(0,0,1),x.push(I/f),x.push(1-y/h)}}for(let y=0;y<h;y++)for(let L=0;L<f;L++){const I=L+p*y,P=L+p*(y+1),V=L+1+p*(y+1),U=L+1+p*y;S.push(I,P,U),S.push(P,V,U)}this.setIndex(S),this.setAttribute("position",new zn(E,3)),this.setAttribute("normal",new zn(M,3)),this.setAttribute("uv",new zn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.widthSegments,e.heightSegments)}}class v0 extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class u1 extends Xi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class f1 extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class d1 extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class h1{constructor(e,t,s){const o=this;let l=!1,u=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(g){f++,l===!1&&o.onStart!==void 0&&o.onStart(g,u,f),l=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,f),u===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,m){return p.push(g,m),this},this.removeHandler=function(g){const m=p.indexOf(g);return m!==-1&&p.splice(m,2),this},this.getHandler=function(g){for(let m=0,v=p.length;m<v;m+=2){const S=p[m],E=p[m+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null}}}const p1=new h1;class ja{constructor(e){this.manager=e!==void 0?e:p1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ja.DEFAULT_MATERIAL_NAME="__DEFAULT";const cr={};class m1 extends Error{constructor(e,t){super(e),this.response=t}}class g1 extends ja{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,s,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=qc.get(e);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(cr[e]!==void 0){cr[e].push({onLoad:t,onProgress:s,onError:o});return}cr[e]=[],cr[e].push({onLoad:t,onProgress:s,onError:o});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),f=this.mimeType,h=this.responseType;fetch(u).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=cr[e],m=p.body.getReader(),v=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),S=v?parseInt(v):0,E=S!==0;let M=0;const x=new ReadableStream({start(y){L();function L(){m.read().then(({done:I,value:P})=>{if(I)y.close();else{M+=P.byteLength;const V=new ProgressEvent("progress",{lengthComputable:E,loaded:M,total:S});for(let U=0,R=g.length;U<R;U++){const F=g[U];F.onProgress&&F.onProgress(V)}y.enqueue(P),L()}},I=>{y.error(I)})}}});return new Response(x)}else throw new m1(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(h){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return p.json();default:if(f==="")return p.text();{const m=/charset="?([^;"\s]*)"?/i.exec(f),v=m&&m[1]?m[1].toLowerCase():void 0,S=new TextDecoder(v);return p.arrayBuffer().then(E=>S.decode(E))}}}).then(p=>{qc.add(e,p);const g=cr[e];delete cr[e];for(let m=0,v=g.length;m<v;m++){const S=g[m];S.onLoad&&S.onLoad(p)}}).catch(p=>{const g=cr[e];if(g===void 0)throw this.manager.itemError(e),p;delete cr[e];for(let m=0,v=g.length;m<v;m++){const S=g[m];S.onError&&S.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _1 extends ja{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=qc.get(e);if(u!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u;const f=za("img");function h(){g(),qc.add(e,this),t&&t(this),l.manager.itemEnd(e)}function p(m){g(),o&&o(m),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class Sd extends ja{constructor(e){super(e)}load(e,t,s,o){const l=new Hn,u=new _1(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}}class X_ extends _n{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Md=new Lt,y0=new X,x0=new X;class v1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Wi,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vh,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;y0.setFromMatrixPosition(e.matrixWorld),t.position.copy(y0),x0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(x0),t.updateMatrixWorld(),Md.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class j_ extends V_{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class y1 extends v1{constructor(){super(new j_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class x1 extends X_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new y1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class S1 extends X_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class M1 extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class S0{constructor(e=1,t=0,s=0){this.radius=e,this.phi=t,this.theta=s}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class E1 extends Cs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function M0(r,e,t,s){const o=T1(s);switch(t){case C_:return r*e;case P_:return r*e/o.components*o.byteLength;case Fh:return r*e/o.components*o.byteLength;case L_:return r*e*2/o.components*o.byteLength;case Oh:return r*e*2/o.components*o.byteLength;case b_:return r*e*3/o.components*o.byteLength;case Ri:return r*e*4/o.components*o.byteLength;case kh:return r*e*4/o.components*o.byteLength;case Dc:case Ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Uc:case Nc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qd:case Zd:return Math.max(r,16)*Math.max(e,8)/4;case $d:case Kd:return Math.max(r,8)*Math.max(e,8)/2;case Qd:case Jd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case eh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ih:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case rh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case sh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case oh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ah:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case lh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ch:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case uh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case fh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case dh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case hh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ph:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Fc:case mh:case gh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case D_:case _h:return Math.ceil(r/4)*Math.ceil(e/4)*8;case vh:case yh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T1(r){switch(r){case Wi:case w_:return{byteLength:1,components:1};case Ua:case A_:case Ga:return{byteLength:2,components:1};case Uh:case Nh:return{byteLength:2,components:4};case ws:case Ih:case hr:return{byteLength:4,components:1};case R_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Y_(){let r=null,e=!1,t=null,s=null;function o(l,u){t(l,u),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function w1(r){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,m=p.byteLength,v=r.createBuffer();r.bindBuffer(h,v),r.bufferData(h,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:m}}function s(f,h,p){const g=h.array,m=h.updateRanges;if(r.bindBuffer(p,f),m.length===0)r.bufferSubData(p,0,g);else{m.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<m.length;S++){const E=m[v],M=m[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,m[v]=M)}m.length=v+1;for(let S=0,E=m.length;S<E;S++){const M=m[S];r.bufferSubData(p,M.start*g.BYTES_PER_ELEMENT,g,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var A1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R1=`#ifdef USE_ALPHAHASH
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
#endif`,C1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D1=`#ifdef USE_AOMAP
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
#endif`,I1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U1=`#ifdef USE_BATCHING
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
#endif`,N1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z1=`#ifdef USE_IRIDESCENCE
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
#endif`,B1=`#ifdef USE_BUMPMAP
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
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,q1=`#define PI 3.141592653589793
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
} // validated`,K1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z1=`vec3 transformedNormal = objectNormal;
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
#endif`,Q1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nT="gl_FragColor = linearToOutputTexel( gl_FragColor );",iT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rT=`#ifdef USE_ENVMAP
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
#endif`,sT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oT=`#ifdef USE_ENVMAP
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
#endif`,aT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lT=`#ifdef USE_ENVMAP
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
#endif`,cT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hT=`#ifdef USE_GRADIENTMAP
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
}`,pT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_T=`uniform bool receiveShadow;
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
#endif`,vT=`#ifdef USE_ENVMAP
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
#endif`,yT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ST=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ET=`PhysicalMaterial material;
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
#endif`,TT=`struct PhysicalMaterial {
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
}`,wT=`
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
#endif`,AT=`#if defined( RE_IndirectDiffuse )
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
#endif`,RT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,NT=`#if defined( USE_POINTS_UV )
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
#endif`,FT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HT=`#ifdef USE_MORPHTARGETS
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
#endif`,VT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$T=`#ifdef USE_NORMALMAP
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
#endif`,qT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ew=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ow=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uw=`float getShadowMask() {
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
}`,fw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dw=`#ifdef USE_SKINNING
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
#endif`,hw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pw=`#ifdef USE_SKINNING
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
#endif`,mw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_w=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yw=`#ifdef USE_TRANSMISSION
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
#endif`,xw=`#ifdef USE_TRANSMISSION
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
#endif`,Sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ww=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Aw=`uniform sampler2D t2D;
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
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lw=`#include <common>
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
}`,Dw=`#if DEPTH_PACKING == 3200
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
}`,Iw=`#define DISTANCE
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
}`,Uw=`#define DISTANCE
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
}`,Nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ow=`uniform float scale;
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
}`,kw=`uniform vec3 diffuse;
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
}`,zw=`#include <common>
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
}`,Bw=`uniform vec3 diffuse;
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
}`,Hw=`#define LAMBERT
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
}`,Vw=`#define LAMBERT
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
}`,Gw=`#define MATCAP
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
}`,Ww=`#define MATCAP
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
}`,Xw=`#define NORMAL
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
}`,jw=`#define NORMAL
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
}`,Yw=`#define PHONG
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
}`,$w=`#define PHONG
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
}`,qw=`#define STANDARD
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
}`,Kw=`#define STANDARD
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
}`,Zw=`#define TOON
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
}`,Qw=`#define TOON
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
}`,Jw=`uniform float size;
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
}`,eA=`uniform vec3 diffuse;
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
}`,tA=`#include <common>
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
}`,nA=`uniform vec3 color;
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
}`,iA=`uniform float rotation;
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
}`,rA=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:A1,alphahash_pars_fragment:R1,alphamap_fragment:C1,alphamap_pars_fragment:b1,alphatest_fragment:P1,alphatest_pars_fragment:L1,aomap_fragment:D1,aomap_pars_fragment:I1,batching_pars_vertex:U1,batching_vertex:N1,begin_vertex:F1,beginnormal_vertex:O1,bsdfs:k1,iridescence_fragment:z1,bumpmap_pars_fragment:B1,clipping_planes_fragment:H1,clipping_planes_pars_fragment:V1,clipping_planes_pars_vertex:G1,clipping_planes_vertex:W1,color_fragment:X1,color_pars_fragment:j1,color_pars_vertex:Y1,color_vertex:$1,common:q1,cube_uv_reflection_fragment:K1,defaultnormal_vertex:Z1,displacementmap_pars_vertex:Q1,displacementmap_vertex:J1,emissivemap_fragment:eT,emissivemap_pars_fragment:tT,colorspace_fragment:nT,colorspace_pars_fragment:iT,envmap_fragment:rT,envmap_common_pars_fragment:sT,envmap_pars_fragment:oT,envmap_pars_vertex:aT,envmap_physical_pars_fragment:vT,envmap_vertex:lT,fog_vertex:cT,fog_pars_vertex:uT,fog_fragment:fT,fog_pars_fragment:dT,gradientmap_pars_fragment:hT,lightmap_pars_fragment:pT,lights_lambert_fragment:mT,lights_lambert_pars_fragment:gT,lights_pars_begin:_T,lights_toon_fragment:yT,lights_toon_pars_fragment:xT,lights_phong_fragment:ST,lights_phong_pars_fragment:MT,lights_physical_fragment:ET,lights_physical_pars_fragment:TT,lights_fragment_begin:wT,lights_fragment_maps:AT,lights_fragment_end:RT,logdepthbuf_fragment:CT,logdepthbuf_pars_fragment:bT,logdepthbuf_pars_vertex:PT,logdepthbuf_vertex:LT,map_fragment:DT,map_pars_fragment:IT,map_particle_fragment:UT,map_particle_pars_fragment:NT,metalnessmap_fragment:FT,metalnessmap_pars_fragment:OT,morphinstance_vertex:kT,morphcolor_vertex:zT,morphnormal_vertex:BT,morphtarget_pars_vertex:HT,morphtarget_vertex:VT,normal_fragment_begin:GT,normal_fragment_maps:WT,normal_pars_fragment:XT,normal_pars_vertex:jT,normal_vertex:YT,normalmap_pars_fragment:$T,clearcoat_normal_fragment_begin:qT,clearcoat_normal_fragment_maps:KT,clearcoat_pars_fragment:ZT,iridescence_pars_fragment:QT,opaque_fragment:JT,packing:ew,premultiplied_alpha_fragment:tw,project_vertex:nw,dithering_fragment:iw,dithering_pars_fragment:rw,roughnessmap_fragment:sw,roughnessmap_pars_fragment:ow,shadowmap_pars_fragment:aw,shadowmap_pars_vertex:lw,shadowmap_vertex:cw,shadowmask_pars_fragment:uw,skinbase_vertex:fw,skinning_pars_vertex:dw,skinning_vertex:hw,skinnormal_vertex:pw,specularmap_fragment:mw,specularmap_pars_fragment:gw,tonemapping_fragment:_w,tonemapping_pars_fragment:vw,transmission_fragment:yw,transmission_pars_fragment:xw,uv_pars_fragment:Sw,uv_pars_vertex:Mw,uv_vertex:Ew,worldpos_vertex:Tw,background_vert:ww,background_frag:Aw,backgroundCube_vert:Rw,backgroundCube_frag:Cw,cube_vert:bw,cube_frag:Pw,depth_vert:Lw,depth_frag:Dw,distanceRGBA_vert:Iw,distanceRGBA_frag:Uw,equirect_vert:Nw,equirect_frag:Fw,linedashed_vert:Ow,linedashed_frag:kw,meshbasic_vert:zw,meshbasic_frag:Bw,meshlambert_vert:Hw,meshlambert_frag:Vw,meshmatcap_vert:Gw,meshmatcap_frag:Ww,meshnormal_vert:Xw,meshnormal_frag:jw,meshphong_vert:Yw,meshphong_frag:$w,meshphysical_vert:qw,meshphysical_frag:Kw,meshtoon_vert:Zw,meshtoon_frag:Qw,points_vert:Jw,points_frag:eA,shadow_vert:tA,shadow_frag:nA,sprite_vert:iA,sprite_frag:rA},we={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},zi={basic:{uniforms:kn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:kn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new lt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:kn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:kn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:kn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new lt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:kn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:kn([we.points,we.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:kn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:kn([we.common,we.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:kn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:kn([we.sprite,we.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:kn([we.common,we.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:kn([we.lights,we.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};zi.physical={uniforms:kn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Tc={r:0,b:0,g:0},gs=new bi,sA=new Lt;function oA(r,e,t,s,o,l,u){const f=new lt(0);let h=l===!0?0:1,p,g,m=null,v=0,S=null;function E(I){let P=I.isScene===!0?I.background:null;return P&&P.isTexture&&(P=(I.backgroundBlurriness>0?t:e).get(P)),P}function M(I){let P=!1;const V=E(I);V===null?y(f,h):V&&V.isColor&&(y(V,1),P=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?s.buffers.color.setClear(0,0,0,1,u):U==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(r.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(I,P){const V=E(P);V&&(V.isCubeTexture||V.mapping===au)?(g===void 0&&(g=new si(new No(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Do(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(U,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),gs.copy(P.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(sA.makeRotationFromEuler(gs)),g.material.toneMapped=Et.getTransfer(V.colorSpace)!==Ct,(m!==V||v!==V.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,m=V,v=V.version,S=r.toneMapping),g.layers.enableAll(),I.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new si(new Xa(2,2),new ji({name:"BackgroundMaterial",uniforms:Do(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Et.getTransfer(V.colorSpace)!==Ct,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(m!==V||v!==V.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,m=V,v=V.version,S=r.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function y(I,P){I.getRGB(Tc,H_(r)),s.buffers.color.setClear(Tc.r,Tc.g,Tc.b,P,u)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(I,P=1){f.set(I),h=P,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,y(f,h)},render:M,addToRenderList:x,dispose:L}}function aA(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=v(null);let l=o,u=!1;function f(w,k,ne,Z,se){let ce=!1;const ee=m(Z,ne,k);l!==ee&&(l=ee,p(l.object)),ce=S(w,Z,ne,se),ce&&E(w,Z,ne,se),se!==null&&e.update(se,r.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,P(w,k,ne,Z),se!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function h(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function m(w,k,ne){const Z=ne.wireframe===!0;let se=s[w.id];se===void 0&&(se={},s[w.id]=se);let ce=se[k.id];ce===void 0&&(ce={},se[k.id]=ce);let ee=ce[Z];return ee===void 0&&(ee=v(h()),ce[Z]=ee),ee}function v(w){const k=[],ne=[],Z=[];for(let se=0;se<t;se++)k[se]=0,ne[se]=0,Z[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ne,attributeDivisors:Z,object:w,attributes:{},index:null}}function S(w,k,ne,Z){const se=l.attributes,ce=k.attributes;let ee=0;const pe=ne.getAttributes();for(const H in pe)if(pe[H].location>=0){const le=se[H];let O=ce[H];if(O===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),le===void 0||le.attribute!==O||O&&le.data!==O.data)return!0;ee++}return l.attributesNum!==ee||l.index!==Z}function E(w,k,ne,Z){const se={},ce=k.attributes;let ee=0;const pe=ne.getAttributes();for(const H in pe)if(pe[H].location>=0){let le=ce[H];le===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(le=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(le=w.instanceColor));const O={};O.attribute=le,le&&le.data&&(O.data=le.data),se[H]=O,ee++}l.attributes=se,l.attributesNum=ee,l.index=Z}function M(){const w=l.newAttributes;for(let k=0,ne=w.length;k<ne;k++)w[k]=0}function x(w){y(w,0)}function y(w,k){const ne=l.newAttributes,Z=l.enabledAttributes,se=l.attributeDivisors;ne[w]=1,Z[w]===0&&(r.enableVertexAttribArray(w),Z[w]=1),se[w]!==k&&(r.vertexAttribDivisor(w,k),se[w]=k)}function L(){const w=l.newAttributes,k=l.enabledAttributes;for(let ne=0,Z=k.length;ne<Z;ne++)k[ne]!==w[ne]&&(r.disableVertexAttribArray(ne),k[ne]=0)}function I(w,k,ne,Z,se,ce,ee){ee===!0?r.vertexAttribIPointer(w,k,ne,se,ce):r.vertexAttribPointer(w,k,ne,Z,se,ce)}function P(w,k,ne,Z){M();const se=Z.attributes,ce=ne.getAttributes(),ee=k.defaultAttributeValues;for(const pe in ce){const H=ce[pe];if(H.location>=0){let ae=se[pe];if(ae===void 0&&(pe==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),pe==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor)),ae!==void 0){const le=ae.normalized,O=ae.itemSize,re=e.get(ae);if(re===void 0)continue;const Le=re.buffer,J=re.type,he=re.bytesPerElement,Me=J===r.INT||J===r.UNSIGNED_INT||ae.gpuType===Ih;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Xe=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ve=0;Ve<H.locationSize;Ve++)y(H.location+Ve,ve.meshPerAttribute);w.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ve=0;Ve<H.locationSize;Ve++)x(H.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let Ve=0;Ve<H.locationSize;Ve++)I(H.location+Ve,O/H.locationSize,J,le,Te*he,(Xe+O/H.locationSize*Ve)*he,Me)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<H.locationSize;ve++)y(H.location+ve,ae.meshPerAttribute);w.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<H.locationSize;ve++)x(H.location+ve);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let ve=0;ve<H.locationSize;ve++)I(H.location+ve,O/H.locationSize,J,le,O*he,O/H.locationSize*ve*he,Me)}}else if(ee!==void 0){const le=ee[pe];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(H.location,le);break;case 3:r.vertexAttrib3fv(H.location,le);break;case 4:r.vertexAttrib4fv(H.location,le);break;default:r.vertexAttrib1fv(H.location,le)}}}}L()}function V(){F();for(const w in s){const k=s[w];for(const ne in k){const Z=k[ne];for(const se in Z)g(Z[se].object),delete Z[se];delete k[ne]}delete s[w]}}function U(w){if(s[w.id]===void 0)return;const k=s[w.id];for(const ne in k){const Z=k[ne];for(const se in Z)g(Z[se].object),delete Z[se];delete k[ne]}delete s[w.id]}function R(w){for(const k in s){const ne=s[k];if(ne[w.id]===void 0)continue;const Z=ne[w.id];for(const se in Z)g(Z[se].object),delete Z[se];delete ne[w.id]}}function F(){C(),u=!0,l!==o&&(l=o,p(l.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:F,resetDefaultState:C,dispose:V,releaseStatesOfGeometry:U,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:x,disableUnusedAttributes:L}}function lA(r,e,t){let s;function o(p){s=p}function l(p,g){r.drawArrays(s,p,g),t.update(g,s,1)}function u(p,g,m){m!==0&&(r.drawArraysInstanced(s,p,g,m),t.update(g,s,m))}function f(p,g,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,m);let S=0;for(let E=0;E<m;E++)S+=g[E];t.update(S,s,1)}function h(p,g,m,v){if(m===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)u(p[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,v,0,m);let E=0;for(let M=0;M<m;M++)E+=g[M]*v[M];t.update(E,s,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function cA(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(R){return!(R!==Ri&&s.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(R){const F=R===Ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Wi&&s.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==hr&&!F)}function h(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const m=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,U=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:m,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:L,maxVaryings:I,maxFragmentUniforms:P,vertexTextures:V,maxSamples:U}}function uA(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new fr,f=new at,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const S=m.length!==0||v||s!==0||o;return o=v,s=m.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(m,v){t=g(m,v,0)},this.setState=function(m,v,S){const E=m.clippingPlanes,M=m.clipIntersection,x=m.clipShadows,y=r.get(m);if(!o||E===null||E.length===0||l&&!x)l?g(null):p();else{const L=l?0:s,I=L*4;let P=y.clippingState||null;h.value=P,P=g(E,v,I,S);for(let V=0;V!==I;++V)P[V]=t[V];y.clippingState=P,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(m,v,S,E){const M=m!==null?m.length:0;let x=null;if(M!==0){if(x=h.value,E!==!0||x===null){const y=S+M*4,L=v.matrixWorldInverse;f.getNormalMatrix(L),(x===null||x.length<y)&&(x=new Float32Array(y));for(let I=0,P=S;I!==M;++I,P+=4)u.copy(m[I]).applyMatrix4(L,f),u.normal.toArray(x,P),x[P+3]=u.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function fA(r){let e=new WeakMap;function t(u,f){return f===Xd?u.mapping=bo:f===jd&&(u.mapping=Po),u}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Xd||f===jd)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new r1(h.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const So=4,E0=[.125,.215,.35,.446,.526,.582],Ss=20,Ed=new j_,T0=new lt;let Td=null,wd=0,Ad=0,Rd=!1;const vs=(1+Math.sqrt(5))/2,vo=1/vs,w0=[new X(-vs,vo,0),new X(vs,vo,0),new X(-vo,0,vs),new X(vo,0,vs),new X(0,vs,-vo),new X(0,vs,vo),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],dA=new X;class A0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100,l={}){const{size:u=256,position:f=dA}=l;Td=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Td,wd,Ad),this._renderer.xr.enabled=Rd,e.scissorTest=!1,wc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bo||e.mapping===Po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Td=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:Ga,format:Ri,colorSpace:Lo,depthBuffer:!1},o=R0(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R0(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hA(l)),this._blurMaterial=pA(l,e,t)}return o}_compileMaterial(e){const t=new si(this._lodPlanes[0],e);this._renderer.compile(t,Ed)}_sceneToCubeUV(e,t,s,o,l){const h=new ii(90,1,t,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,S=m.toneMapping;m.getClearColor(T0),m.toneMapping=qr,m.autoClear=!1;const E=new k_({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),M=new si(new No,E);let x=!1;const y=e.background;y?y.isColor&&(E.color.copy(y),e.background=null,x=!0):(E.color.copy(T0),x=!0);for(let L=0;L<6;L++){const I=L%3;I===0?(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[L],l.y,l.z)):I===1?(h.up.set(0,0,p[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[L],l.z)):(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[L]));const P=this._cubeSize;wc(o,I*P,L>2?P:0,P,P),m.setRenderTarget(o),x&&m.render(M,h),m.render(e,h)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=S,m.autoClear=v,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===bo||e.mapping===Po;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=b0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new si(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;wc(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,Ed)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=w0[(o-l-1)%w0.length];this._blur(e,l-1,l,u,f)}t.autoClear=s}_blur(e,t,s,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,o,"latitudinal",l),this._halfBlur(u,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,m=new si(this._lodPlanes[o],p),v=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Ss-1),M=l/E,x=isFinite(l)?1+Math.floor(g*M):Ss;x>Ss&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ss}`);const y=[];let L=0;for(let R=0;R<Ss;++R){const F=R/M,C=Math.exp(-F*F/2);y.push(C),R===0?L+=C:R<x&&(L+=2*C)}for(let R=0;R<y.length;R++)y[R]=y[R]/L;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:I}=this;v.dTheta.value=E,v.mipInt.value=I-s;const P=this._sizeLods[o],V=3*P*(o>I-So?o-I+So:0),U=4*(this._cubeSize-P);wc(t,V,U,3*P,2*P),h.setRenderTarget(t),h.render(m,Ed)}}function hA(r){const e=[],t=[],s=[];let o=r;const l=r-So+1+E0.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);t.push(f);let h=1/f;u>r-So?h=E0[u-r+So-1]:u===0&&(h=0),s.push(h);const p=1/(f-2),g=-p,m=1+p,v=[g,g,m,g,m,m,g,g,m,m,g,m],S=6,E=6,M=3,x=2,y=1,L=new Float32Array(M*E*S),I=new Float32Array(x*E*S),P=new Float32Array(y*E*S);for(let U=0;U<S;U++){const R=U%3*2/3-1,F=U>2?0:-1,C=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];L.set(C,M*E*U),I.set(v,x*E*U);const w=[U,U,U,U,U,U];P.set(w,y*E*U)}const V=new Pi;V.setAttribute("position",new Gi(L,M)),V.setAttribute("uv",new Gi(I,x)),V.setAttribute("faceIndex",new Gi(P,y)),e.push(V),o>So&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function R0(r,e,t){const s=new Kr(r,e,t);return s.texture.mapping=au,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function wc(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function pA(r,e,t){const s=new Float32Array(Ss),o=new X(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:$r,depthTest:!1,depthWrite:!1})}function C0(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:$r,depthTest:!1,depthWrite:!1})}function b0(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$r,depthTest:!1,depthWrite:!1})}function Gh(){return`

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
	`}function mA(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const h=f.mapping,p=h===Xd||h===jd,g=h===bo||h===Po;if(p||g){let m=e.get(f);const v=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new A0(r)),m=p?t.fromEquirectangular(f,m):t.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&o(S)?(t===null&&(t=new A0(r)),m=p?t.fromEquirectangular(f):t.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",l),m.texture):null}}}return f}function o(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:u}}function gA(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&kc("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function _A(r,e,t,s){const o={},l=new WeakMap;function u(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(m,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function h(m){const v=m.attributes;for(const S in v)e.update(v[S],r.ARRAY_BUFFER)}function p(m){const v=[],S=m.index,E=m.attributes.position;let M=0;if(S!==null){const L=S.array;M=S.version;for(let I=0,P=L.length;I<P;I+=3){const V=L[I+0],U=L[I+1],R=L[I+2];v.push(V,U,U,R,R,V)}}else if(E!==void 0){const L=E.array;M=E.version;for(let I=0,P=L.length/3-1;I<P;I+=3){const V=I+0,U=I+1,R=I+2;v.push(V,U,U,R,R,V)}}else return;const x=new(U_(v)?B_:z_)(v,1);x.version=M;const y=l.get(m);y&&e.remove(y),l.set(m,x)}function g(m){const v=l.get(m);if(v){const S=m.index;S!==null&&v.version<S.version&&p(m)}else p(m);return l.get(m)}return{get:f,update:h,getWireframeAttribute:g}}function vA(r,e,t){let s;function o(v){s=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function h(v,S){r.drawElements(s,S,l,v*u),t.update(S,s,1)}function p(v,S,E){E!==0&&(r.drawElementsInstanced(s,S,l,v*u,E),t.update(S,s,E))}function g(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,v,0,E);let x=0;for(let y=0;y<E;y++)x+=S[y];t.update(x,s,1)}function m(v,S,E,M){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v.length;y++)p(v[y]/u,S[y],M[y]);else{x.multiDrawElementsInstancedWEBGL(s,S,0,l,v,0,M,0,E);let y=0;for(let L=0;L<E;L++)y+=S[L]*M[L];t.update(y,s,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=m}function yA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function xA(r,e,t){const s=new WeakMap,o=new Ht;function l(u,f,h){const p=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,m=g!==void 0?g.length:0;let v=s.get(f);if(v===void 0||v.count!==m){let C=function(){R.dispose(),s.delete(f),f.removeEventListener("dispose",C)};v!==void 0&&v.texture.dispose();const S=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],y=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let I=0;S===!0&&(I=1),E===!0&&(I=2),M===!0&&(I=3);let P=f.attributes.position.count*I,V=1;P>e.maxTextureSize&&(V=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const U=new Float32Array(P*V*4*m),R=new N_(U,P,V,m);R.type=hr,R.needsUpdate=!0;const F=I*4;for(let w=0;w<m;w++){const k=x[w],ne=y[w],Z=L[w],se=P*V*4*w;for(let ce=0;ce<k.count;ce++){const ee=ce*F;S===!0&&(o.fromBufferAttribute(k,ce),U[se+ee+0]=o.x,U[se+ee+1]=o.y,U[se+ee+2]=o.z,U[se+ee+3]=0),E===!0&&(o.fromBufferAttribute(ne,ce),U[se+ee+4]=o.x,U[se+ee+5]=o.y,U[se+ee+6]=o.z,U[se+ee+7]=0),M===!0&&(o.fromBufferAttribute(Z,ce),U[se+ee+8]=o.x,U[se+ee+9]=o.y,U[se+ee+10]=o.z,U[se+ee+11]=Z.itemSize===4?o.w:1)}}v={count:m,texture:R,size:new ot(P,V)},s.set(f,v),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let S=0;for(let M=0;M<p.length;M++)S+=p[M];const E=f.morphTargetsRelative?1:1-S;h.getUniforms().setValue(r,"morphTargetBaseInfluence",E),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function SA(r,e,t,s){let o=new WeakMap;function l(h){const p=s.render.frame,g=h.geometry,m=e.get(h,g);if(o.get(m)!==p&&(e.update(m),o.set(m,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const v=h.skeleton;o.get(v)!==p&&(v.update(),o.set(v,p))}return m}function u(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const $_=new Hn,P0=new W_(1,1),q_=new N_,K_=new VE,Z_=new G_,L0=[],D0=[],I0=new Float32Array(16),U0=new Float32Array(9),N0=new Float32Array(4);function Fo(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=L0[o];if(l===void 0&&(l=new Float32Array(o),L0[o]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function cn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function un(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function cu(r,e){let t=D0[e];t===void 0&&(t=new Int32Array(e),D0[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function MA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function EA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2fv(this.addr,e),un(t,e)}}function TA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;r.uniform3fv(this.addr,e),un(t,e)}}function wA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4fv(this.addr,e),un(t,e)}}function AA(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(cn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,s))return;N0.set(s),r.uniformMatrix2fv(this.addr,!1,N0),un(t,s)}}function RA(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(cn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,s))return;U0.set(s),r.uniformMatrix3fv(this.addr,!1,U0),un(t,s)}}function CA(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(cn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,s))return;I0.set(s),r.uniformMatrix4fv(this.addr,!1,I0),un(t,s)}}function bA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function PA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2iv(this.addr,e),un(t,e)}}function LA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;r.uniform3iv(this.addr,e),un(t,e)}}function DA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4iv(this.addr,e),un(t,e)}}function IA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function UA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2uiv(this.addr,e),un(t,e)}}function NA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;r.uniform3uiv(this.addr,e),un(t,e)}}function FA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4uiv(this.addr,e),un(t,e)}}function OA(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(P0.compareFunction=I_,l=P0):l=$_,t.setTexture2D(e||l,o)}function kA(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||K_,o)}function zA(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||Z_,o)}function BA(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||q_,o)}function HA(r){switch(r){case 5126:return MA;case 35664:return EA;case 35665:return TA;case 35666:return wA;case 35674:return AA;case 35675:return RA;case 35676:return CA;case 5124:case 35670:return bA;case 35667:case 35671:return PA;case 35668:case 35672:return LA;case 35669:case 35673:return DA;case 5125:return IA;case 36294:return UA;case 36295:return NA;case 36296:return FA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return kA;case 35680:case 36300:case 36308:case 36293:return zA;case 36289:case 36303:case 36311:case 36292:return BA}}function VA(r,e){r.uniform1fv(this.addr,e)}function GA(r,e){const t=Fo(e,this.size,2);r.uniform2fv(this.addr,t)}function WA(r,e){const t=Fo(e,this.size,3);r.uniform3fv(this.addr,t)}function XA(r,e){const t=Fo(e,this.size,4);r.uniform4fv(this.addr,t)}function jA(r,e){const t=Fo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function YA(r,e){const t=Fo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function $A(r,e){const t=Fo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function qA(r,e){r.uniform1iv(this.addr,e)}function KA(r,e){r.uniform2iv(this.addr,e)}function ZA(r,e){r.uniform3iv(this.addr,e)}function QA(r,e){r.uniform4iv(this.addr,e)}function JA(r,e){r.uniform1uiv(this.addr,e)}function eR(r,e){r.uniform2uiv(this.addr,e)}function tR(r,e){r.uniform3uiv(this.addr,e)}function nR(r,e){r.uniform4uiv(this.addr,e)}function iR(r,e,t){const s=this.cache,o=e.length,l=cu(t,o);cn(s,l)||(r.uniform1iv(this.addr,l),un(s,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||$_,l[u])}function rR(r,e,t){const s=this.cache,o=e.length,l=cu(t,o);cn(s,l)||(r.uniform1iv(this.addr,l),un(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||K_,l[u])}function sR(r,e,t){const s=this.cache,o=e.length,l=cu(t,o);cn(s,l)||(r.uniform1iv(this.addr,l),un(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Z_,l[u])}function oR(r,e,t){const s=this.cache,o=e.length,l=cu(t,o);cn(s,l)||(r.uniform1iv(this.addr,l),un(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||q_,l[u])}function aR(r){switch(r){case 5126:return VA;case 35664:return GA;case 35665:return WA;case 35666:return XA;case 35674:return jA;case 35675:return YA;case 35676:return $A;case 5124:case 35670:return qA;case 35667:case 35671:return KA;case 35668:case 35672:return ZA;case 35669:case 35673:return QA;case 5125:return JA;case 36294:return eR;case 36295:return tR;case 36296:return nR;case 35678:case 36198:case 36298:case 36306:case 35682:return iR;case 35679:case 36299:case 36307:return rR;case 35680:case 36300:case 36308:case 36293:return sR;case 36289:case 36303:case 36311:case 36292:return oR}}class lR{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=HA(t.type)}}class cR{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aR(t.type)}}class uR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function F0(r,e){r.seq.push(e),r.map[e.id]=e}function fR(r,e,t){const s=r.name,o=s.length;for(Cd.lastIndex=0;;){const l=Cd.exec(s),u=Cd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){F0(t,p===void 0?new lR(f,r,e):new cR(f,r,e));break}else{let m=t.map[f];m===void 0&&(m=new uR(f),F0(t,m)),t=m}}}class Bc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);fR(l,u,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function O0(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const dR=37297;let hR=0;function pR(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const k0=new at;function mR(r){Et._getMatrix(k0,Et.workingColorSpace,r);const e=`mat3( ${k0.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(r)){case Wc:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function z0(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+pR(r.getShaderSource(e),u)}else return o}function gR(r,e){const t=mR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _R(r,e){let t;switch(e){case JM:t="Linear";break;case eE:t="Reinhard";break;case tE:t="Cineon";break;case nE:t="ACESFilmic";break;case rE:t="AgX";break;case sE:t="Neutral";break;case iE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ac=new X;function vR(){Et.getLuminanceCoefficients(Ac);const r=Ac.x.toFixed(4),e=Ac.y.toFixed(4),t=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function xR(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function SR(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function Ta(r){return r!==""}function B0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function H0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(r){return r.replace(MR,TR)}const ER=new Map;function TR(r,e){let t=ct[e];if(t===void 0){const s=ER.get(e);if(s!==void 0)t=ct[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Sh(t)}const wR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(r){return r.replace(wR,AR)}function AR(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function G0(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function RR(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===E_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===DM?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ur&&(e="SHADOWMAP_TYPE_VSM"),e}function CR(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case bo:case Po:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bR(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Po:e="ENVMAP_MODE_REFRACTION";break}return e}function PR(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Dh:e="ENVMAP_BLENDING_MULTIPLY";break;case ZM:e="ENVMAP_BLENDING_MIX";break;case QM:e="ENVMAP_BLENDING_ADD";break}return e}function LR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function DR(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=RR(t),p=CR(t),g=bR(t),m=PR(t),v=LR(t),S=yR(t),E=xR(l),M=o.createProgram();let x,y,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ta).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ta).join(`
`),y.length>0&&(y+=`
`)):(x=[G0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),y=[G0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qr?"#define TONE_MAPPING":"",t.toneMapping!==qr?ct.tonemapping_pars_fragment:"",t.toneMapping!==qr?_R("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,gR("linearToOutputTexel",t.outputColorSpace),vR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),u=Sh(u),u=B0(u,t),u=H0(u,t),f=Sh(f),f=B0(f,t),f=H0(f,t),u=V0(u),f=V0(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const I=L+x+u,P=L+y+f,V=O0(o,o.VERTEX_SHADER,I),U=O0(o,o.FRAGMENT_SHADER,P);o.attachShader(M,V),o.attachShader(M,U),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function R(k){if(r.debug.checkShaderErrors){const ne=o.getProgramInfoLog(M).trim(),Z=o.getShaderInfoLog(V).trim(),se=o.getShaderInfoLog(U).trim();let ce=!0,ee=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(ce=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,M,V,U);else{const pe=z0(o,V,"vertex"),H=z0(o,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ne+`
`+pe+`
`+H)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(Z===""||se==="")&&(ee=!1);ee&&(k.diagnostics={runnable:ce,programLog:ne,vertexShader:{log:Z,prefix:x},fragmentShader:{log:se,prefix:y}})}o.deleteShader(V),o.deleteShader(U),F=new Bc(o,M),C=SR(o,M)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(M,dR)),w},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hR++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=V,this.fragmentShader=U,this}let IR=0;class UR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new NR(e),t.set(e,s)),s}}class NR{constructor(e){this.id=IR++,this.code=e,this.usedTimes=0}}function FR(r,e,t,s,o,l,u){const f=new F_,h=new UR,p=new Set,g=[],m=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(C){return p.add(C),C===0?"uv":`uv${C}`}function x(C,w,k,ne,Z){const se=ne.fog,ce=Z.geometry,ee=C.isMeshStandardMaterial?ne.environment:null,pe=(C.isMeshStandardMaterial?t:e).get(C.envMap||ee),H=pe&&pe.mapping===au?pe.image.height:null,ae=E[C.type];C.precision!==null&&(S=o.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const le=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,O=le!==void 0?le.length:0;let re=0;ce.morphAttributes.position!==void 0&&(re=1),ce.morphAttributes.normal!==void 0&&(re=2),ce.morphAttributes.color!==void 0&&(re=3);let Le,J,he,Me;if(ae){const yt=zi[ae];Le=yt.vertexShader,J=yt.fragmentShader}else Le=C.vertexShader,J=C.fragmentShader,h.update(C),he=h.getVertexShaderID(C),Me=h.getFragmentShaderID(C);const ve=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),Xe=Z.isInstancedMesh===!0,Ve=Z.isBatchedMesh===!0,Dt=!!C.map,It=!!C.matcap,ut=!!pe,B=!!C.aoMap,Dn=!!C.lightMap,mt=!!C.bumpMap,ft=!!C.normalMap,je=!!C.displacementMap,Rt=!!C.emissiveMap,Ge=!!C.metalnessMap,D=!!C.roughnessMap,A=C.anisotropy>0,Q=C.clearcoat>0,fe=C.dispersion>0,_e=C.iridescence>0,ue=C.sheen>0,He=C.transmission>0,Ae=A&&!!C.anisotropyMap,qe=Q&&!!C.clearcoatMap,$e=Q&&!!C.clearcoatNormalMap,ye=Q&&!!C.clearcoatRoughnessMap,Ne=_e&&!!C.iridescenceMap,Je=_e&&!!C.iridescenceThicknessMap,et=ue&&!!C.sheenColorMap,Fe=ue&&!!C.sheenRoughnessMap,dt=!!C.specularMap,it=!!C.specularColorMap,At=!!C.specularIntensityMap,W=He&&!!C.transmissionMap,Re=He&&!!C.thicknessMap,oe=!!C.gradientMap,de=!!C.alphaMap,Pe=C.alphaTest>0,be=!!C.alphaHash,rt=!!C.extensions;let Nt=qr;C.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Nt=r.toneMapping);const sn={shaderID:ae,shaderType:C.type,shaderName:C.name,vertexShader:Le,fragmentShader:J,defines:C.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Ve,batchingColor:Ve&&Z._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&Z.instanceColor!==null,instancingMorph:Xe&&Z.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Lo,alphaToCoverage:!!C.alphaToCoverage,map:Dt,matcap:It,envMap:ut,envMapMode:ut&&pe.mapping,envMapCubeUVHeight:H,aoMap:B,lightMap:Dn,bumpMap:mt,normalMap:ft,displacementMap:v&&je,emissiveMap:Rt,normalMapObjectSpace:ft&&C.normalMapType===cE,normalMapTangentSpace:ft&&C.normalMapType===zh,metalnessMap:Ge,roughnessMap:D,anisotropy:A,anisotropyMap:Ae,clearcoat:Q,clearcoatMap:qe,clearcoatNormalMap:$e,clearcoatRoughnessMap:ye,dispersion:fe,iridescence:_e,iridescenceMap:Ne,iridescenceThicknessMap:Je,sheen:ue,sheenColorMap:et,sheenRoughnessMap:Fe,specularMap:dt,specularColorMap:it,specularIntensityMap:At,transmission:He,transmissionMap:W,thicknessMap:Re,gradientMap:oe,opaque:C.transparent===!1&&C.blending===wo&&C.alphaToCoverage===!1,alphaMap:de,alphaTest:Pe,alphaHash:be,combine:C.combine,mapUv:Dt&&M(C.map.channel),aoMapUv:B&&M(C.aoMap.channel),lightMapUv:Dn&&M(C.lightMap.channel),bumpMapUv:mt&&M(C.bumpMap.channel),normalMapUv:ft&&M(C.normalMap.channel),displacementMapUv:je&&M(C.displacementMap.channel),emissiveMapUv:Rt&&M(C.emissiveMap.channel),metalnessMapUv:Ge&&M(C.metalnessMap.channel),roughnessMapUv:D&&M(C.roughnessMap.channel),anisotropyMapUv:Ae&&M(C.anisotropyMap.channel),clearcoatMapUv:qe&&M(C.clearcoatMap.channel),clearcoatNormalMapUv:$e&&M(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&M(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&M(C.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&M(C.iridescenceThicknessMap.channel),sheenColorMapUv:et&&M(C.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&M(C.sheenRoughnessMap.channel),specularMapUv:dt&&M(C.specularMap.channel),specularColorMapUv:it&&M(C.specularColorMap.channel),specularIntensityMapUv:At&&M(C.specularIntensityMap.channel),transmissionMapUv:W&&M(C.transmissionMap.channel),thicknessMapUv:Re&&M(C.thicknessMap.channel),alphaMapUv:de&&M(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(ft||A),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ce.attributes.uv&&(Dt||de),fog:!!se,useFog:C.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Te,skinning:Z.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Dt&&C.map.isVideoTexture===!0&&Et.getTransfer(C.map.colorSpace)===Ct,decodeVideoTextureEmissive:Rt&&C.emissiveMap.isVideoTexture===!0&&Et.getTransfer(C.emissiveMap.colorSpace)===Ct,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===dr,flipSided:C.side===Bn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:rt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&C.extensions.multiDraw===!0||Ve)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return sn.vertexUv1s=p.has(1),sn.vertexUv2s=p.has(2),sn.vertexUv3s=p.has(3),p.clear(),sn}function y(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)w.push(k),w.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(L(w,C),I(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function L(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function I(C,w){f.disableAll(),w.supportsVertexTextures&&f.enable(0),w.instancing&&f.enable(1),w.instancingColor&&f.enable(2),w.instancingMorph&&f.enable(3),w.matcap&&f.enable(4),w.envMap&&f.enable(5),w.normalMapObjectSpace&&f.enable(6),w.normalMapTangentSpace&&f.enable(7),w.clearcoat&&f.enable(8),w.iridescence&&f.enable(9),w.alphaTest&&f.enable(10),w.vertexColors&&f.enable(11),w.vertexAlphas&&f.enable(12),w.vertexUv1s&&f.enable(13),w.vertexUv2s&&f.enable(14),w.vertexUv3s&&f.enable(15),w.vertexTangents&&f.enable(16),w.anisotropy&&f.enable(17),w.alphaHash&&f.enable(18),w.batching&&f.enable(19),w.dispersion&&f.enable(20),w.batchingColor&&f.enable(21),C.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reverseDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),C.push(f.mask)}function P(C){const w=E[C.type];let k;if(w){const ne=zi[w];k=jc.clone(ne.uniforms)}else k=C.uniforms;return k}function V(C,w){let k;for(let ne=0,Z=g.length;ne<Z;ne++){const se=g[ne];if(se.cacheKey===w){k=se,++k.usedTimes;break}}return k===void 0&&(k=new DR(r,w,C,l),g.push(k)),k}function U(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function R(C){h.remove(C)}function F(){h.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:P,acquireProgram:V,releaseProgram:U,releaseShaderCache:R,programs:g,dispose:F}}function OR(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function o(u,f,h){r.get(u)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function kR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function W0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function X0(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(m,v,S,E,M,x){let y=r[e];return y===void 0?(y={id:m.id,object:m,geometry:v,material:S,groupOrder:E,renderOrder:m.renderOrder,z:M,group:x},r[e]=y):(y.id=m.id,y.object=m,y.geometry=v,y.material=S,y.groupOrder=E,y.renderOrder=m.renderOrder,y.z=M,y.group=x),e++,y}function f(m,v,S,E,M,x){const y=u(m,v,S,E,M,x);S.transmission>0?s.push(y):S.transparent===!0?o.push(y):t.push(y)}function h(m,v,S,E,M,x){const y=u(m,v,S,E,M,x);S.transmission>0?s.unshift(y):S.transparent===!0?o.unshift(y):t.unshift(y)}function p(m,v){t.length>1&&t.sort(m||kR),s.length>1&&s.sort(v||W0),o.length>1&&o.sort(v||W0)}function g(){for(let m=e,v=r.length;m<v;m++){const S=r[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:f,unshift:h,finish:g,sort:p}}function zR(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new X0,r.set(s,[u])):o>=l.length?(u=new X0,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function BR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new lt};break;case"SpotLight":t={position:new X,direction:new X,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function HR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let VR=0;function GR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function WR(r){const e=new BR,t=HR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new X);const o=new X,l=new Lt,u=new Lt;function f(p){let g=0,m=0,v=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let S=0,E=0,M=0,x=0,y=0,L=0,I=0,P=0,V=0,U=0,R=0;p.sort(GR);for(let C=0,w=p.length;C<w;C++){const k=p[C],ne=k.color,Z=k.intensity,se=k.distance,ce=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=ne.r*Z,m+=ne.g*Z,v+=ne.b*Z;else if(k.isLightProbe){for(let ee=0;ee<9;ee++)s.probe[ee].addScaledVector(k.sh.coefficients[ee],Z);R++}else if(k.isDirectionalLight){const ee=e.get(k);if(ee.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const pe=k.shadow,H=t.get(k);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,s.directionalShadow[S]=H,s.directionalShadowMap[S]=ce,s.directionalShadowMatrix[S]=k.shadow.matrix,L++}s.directional[S]=ee,S++}else if(k.isSpotLight){const ee=e.get(k);ee.position.setFromMatrixPosition(k.matrixWorld),ee.color.copy(ne).multiplyScalar(Z),ee.distance=se,ee.coneCos=Math.cos(k.angle),ee.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ee.decay=k.decay,s.spot[M]=ee;const pe=k.shadow;if(k.map&&(s.spotLightMap[V]=k.map,V++,pe.updateMatrices(k),k.castShadow&&U++),s.spotLightMatrix[M]=pe.matrix,k.castShadow){const H=t.get(k);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,s.spotShadow[M]=H,s.spotShadowMap[M]=ce,P++}M++}else if(k.isRectAreaLight){const ee=e.get(k);ee.color.copy(ne).multiplyScalar(Z),ee.halfWidth.set(k.width*.5,0,0),ee.halfHeight.set(0,k.height*.5,0),s.rectArea[x]=ee,x++}else if(k.isPointLight){const ee=e.get(k);if(ee.color.copy(k.color).multiplyScalar(k.intensity),ee.distance=k.distance,ee.decay=k.decay,k.castShadow){const pe=k.shadow,H=t.get(k);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,H.shadowCameraNear=pe.camera.near,H.shadowCameraFar=pe.camera.far,s.pointShadow[E]=H,s.pointShadowMap[E]=ce,s.pointShadowMatrix[E]=k.shadow.matrix,I++}s.point[E]=ee,E++}else if(k.isHemisphereLight){const ee=e.get(k);ee.skyColor.copy(k.color).multiplyScalar(Z),ee.groundColor.copy(k.groundColor).multiplyScalar(Z),s.hemi[y]=ee,y++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=m,s.ambient[2]=v;const F=s.hash;(F.directionalLength!==S||F.pointLength!==E||F.spotLength!==M||F.rectAreaLength!==x||F.hemiLength!==y||F.numDirectionalShadows!==L||F.numPointShadows!==I||F.numSpotShadows!==P||F.numSpotMaps!==V||F.numLightProbes!==R)&&(s.directional.length=S,s.spot.length=M,s.rectArea.length=x,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=P+V-U,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=R,F.directionalLength=S,F.pointLength=E,F.spotLength=M,F.rectAreaLength=x,F.hemiLength=y,F.numDirectionalShadows=L,F.numPointShadows=I,F.numSpotShadows=P,F.numSpotMaps=V,F.numLightProbes=R,s.version=VR++)}function h(p,g){let m=0,v=0,S=0,E=0,M=0;const x=g.matrixWorldInverse;for(let y=0,L=p.length;y<L;y++){const I=p[y];if(I.isDirectionalLight){const P=s.directional[m];P.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),m++}else if(I.isSpotLight){const P=s.spot[S];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),S++}else if(I.isRectAreaLight){const P=s.rectArea[E];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(x),u.identity(),l.copy(I.matrixWorld),l.premultiply(x),u.extractRotation(l),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),E++}else if(I.isPointLight){const P=s.point[v];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(x),v++}else if(I.isHemisphereLight){const P=s.hemi[M];P.direction.setFromMatrixPosition(I.matrixWorld),P.direction.transformDirection(x),M++}}}return{setup:f,setupView:h,state:s}}function j0(r){const e=new WR(r),t=[],s=[];function o(g){p.camera=g,t.length=0,s.length=0}function l(g){t.push(g)}function u(g){s.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function XR(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new j0(r),e.set(o,[f])):l>=u.length?(f=new j0(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const jR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YR=`uniform sampler2D shadow_pass;
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
}`;function $R(r,e,t){let s=new Vh;const o=new ot,l=new ot,u=new Ht,f=new f1({depthPacking:lE}),h=new d1,p={},g=t.maxTextureSize,m={[vr]:Bn,[Bn]:vr,[dr]:dr},v=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:jR,fragmentShader:YR}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new Pi;E.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new si(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E_;let y=this.type;this.render=function(U,R,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;const C=r.getRenderTarget(),w=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),ne=r.state;ne.setBlending($r),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const Z=y!==ur&&this.type===ur,se=y===ur&&this.type!==ur;for(let ce=0,ee=U.length;ce<ee;ce++){const pe=U[ce],H=pe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const ae=H.getFrameExtents();if(o.multiply(ae),l.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/ae.x),o.x=l.x*ae.x,H.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/ae.y),o.y=l.y*ae.y,H.mapSize.y=l.y)),H.map===null||Z===!0||se===!0){const O=this.type!==ur?{minFilter:Ci,magFilter:Ci}:{};H.map!==null&&H.map.dispose(),H.map=new Kr(o.x,o.y,O),H.map.texture.name=pe.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const le=H.getViewportCount();for(let O=0;O<le;O++){const re=H.getViewport(O);u.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),ne.viewport(u),H.updateMatrices(pe,O),s=H.getFrustum(),P(R,F,H.camera,pe,this.type)}H.isPointLightShadow!==!0&&this.type===ur&&L(H,F),H.needsUpdate=!1}y=this.type,x.needsUpdate=!1,r.setRenderTarget(C,w,k)};function L(U,R){const F=e.update(M);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Kr(o.x,o.y)),v.uniforms.shadow_pass.value=U.map.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(R,null,F,v,M,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(R,null,F,S,M,null)}function I(U,R,F,C){let w=null;const k=F.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(k!==void 0)w=k;else if(w=F.isPointLight===!0?h:f,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const ne=w.uuid,Z=R.uuid;let se=p[ne];se===void 0&&(se={},p[ne]=se);let ce=se[Z];ce===void 0&&(ce=w.clone(),se[Z]=ce,R.addEventListener("dispose",V)),w=ce}if(w.visible=R.visible,w.wireframe=R.wireframe,C===ur?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:m[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,F.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ne=r.properties.get(w);ne.light=F}return w}function P(U,R,F,C,w){if(U.visible===!1)return;if(U.layers.test(R.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&w===ur)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,U.matrixWorld);const Z=e.update(U),se=U.material;if(Array.isArray(se)){const ce=Z.groups;for(let ee=0,pe=ce.length;ee<pe;ee++){const H=ce[ee],ae=se[H.materialIndex];if(ae&&ae.visible){const le=I(U,ae,C,w);U.onBeforeShadow(r,U,R,F,Z,le,H),r.renderBufferDirect(F,null,Z,le,U,H),U.onAfterShadow(r,U,R,F,Z,le,H)}}}else if(se.visible){const ce=I(U,se,C,w);U.onBeforeShadow(r,U,R,F,Z,ce,null),r.renderBufferDirect(F,null,Z,ce,U,null),U.onAfterShadow(r,U,R,F,Z,ce,null)}}const ne=U.children;for(let Z=0,se=ne.length;Z<se;Z++)P(ne[Z],R,F,C,w)}function V(U){U.target.removeEventListener("dispose",V);for(const F in p){const C=p[F],w=U.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const qR={[kd]:zd,[Bd]:Gd,[Hd]:Wd,[Co]:Vd,[zd]:kd,[Gd]:Bd,[Wd]:Hd,[Vd]:Co};function KR(r,e){function t(){let W=!1;const Re=new Ht;let oe=null;const de=new Ht(0,0,0,0);return{setMask:function(Pe){oe!==Pe&&!W&&(r.colorMask(Pe,Pe,Pe,Pe),oe=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,be,rt,Nt,sn){sn===!0&&(Pe*=Nt,be*=Nt,rt*=Nt),Re.set(Pe,be,rt,Nt),de.equals(Re)===!1&&(r.clearColor(Pe,be,rt,Nt),de.copy(Re))},reset:function(){W=!1,oe=null,de.set(-1,0,0,0)}}}function s(){let W=!1,Re=!1,oe=null,de=null,Pe=null;return{setReversed:function(be){if(Re!==be){const rt=e.get("EXT_clip_control");be?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),Re=be;const Nt=Pe;Pe=null,this.setClear(Nt)}},getReversed:function(){return Re},setTest:function(be){be?ve(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(be){oe!==be&&!W&&(r.depthMask(be),oe=be)},setFunc:function(be){if(Re&&(be=qR[be]),de!==be){switch(be){case kd:r.depthFunc(r.NEVER);break;case zd:r.depthFunc(r.ALWAYS);break;case Bd:r.depthFunc(r.LESS);break;case Co:r.depthFunc(r.LEQUAL);break;case Hd:r.depthFunc(r.EQUAL);break;case Vd:r.depthFunc(r.GEQUAL);break;case Gd:r.depthFunc(r.GREATER);break;case Wd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=be}},setLocked:function(be){W=be},setClear:function(be){Pe!==be&&(Re&&(be=1-be),r.clearDepth(be),Pe=be)},reset:function(){W=!1,oe=null,de=null,Pe=null,Re=!1}}}function o(){let W=!1,Re=null,oe=null,de=null,Pe=null,be=null,rt=null,Nt=null,sn=null;return{setTest:function(yt){W||(yt?ve(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(yt){Re!==yt&&!W&&(r.stencilMask(yt),Re=yt)},setFunc:function(yt,Vn,In){(oe!==yt||de!==Vn||Pe!==In)&&(r.stencilFunc(yt,Vn,In),oe=yt,de=Vn,Pe=In)},setOp:function(yt,Vn,In){(be!==yt||rt!==Vn||Nt!==In)&&(r.stencilOp(yt,Vn,In),be=yt,rt=Vn,Nt=In)},setLocked:function(yt){W=yt},setClear:function(yt){sn!==yt&&(r.clearStencil(yt),sn=yt)},reset:function(){W=!1,Re=null,oe=null,de=null,Pe=null,be=null,rt=null,Nt=null,sn=null}}}const l=new t,u=new s,f=new o,h=new WeakMap,p=new WeakMap;let g={},m={},v=new WeakMap,S=[],E=null,M=!1,x=null,y=null,L=null,I=null,P=null,V=null,U=null,R=new lt(0,0,0),F=0,C=!1,w=null,k=null,ne=null,Z=null,se=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,pe=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(H)[1]),ee=pe>=1):H.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ee=pe>=2);let ae=null,le={};const O=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),Le=new Ht().fromArray(O),J=new Ht().fromArray(re);function he(W,Re,oe,de){const Pe=new Uint8Array(4),be=r.createTexture();r.bindTexture(W,be),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<oe;rt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,Pe):r.texImage2D(Re+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pe);return be}const Me={};Me[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ve(r.DEPTH_TEST),u.setFunc(Co),mt(!1),ft(Bg),ve(r.CULL_FACE),B($r);function ve(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Te(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Xe(W,Re){return m[W]!==Re?(r.bindFramebuffer(W,Re),m[W]=Re,W===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Re),W===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ve(W,Re){let oe=S,de=!1;if(W){oe=v.get(Re),oe===void 0&&(oe=[],v.set(Re,oe));const Pe=W.textures;if(oe.length!==Pe.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let be=0,rt=Pe.length;be<rt;be++)oe[be]=r.COLOR_ATTACHMENT0+be;oe.length=Pe.length,de=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,de=!0);de&&r.drawBuffers(oe)}function Dt(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const It={[xs]:r.FUNC_ADD,[UM]:r.FUNC_SUBTRACT,[NM]:r.FUNC_REVERSE_SUBTRACT};It[FM]=r.MIN,It[OM]=r.MAX;const ut={[kM]:r.ZERO,[zM]:r.ONE,[BM]:r.SRC_COLOR,[Fd]:r.SRC_ALPHA,[jM]:r.SRC_ALPHA_SATURATE,[WM]:r.DST_COLOR,[VM]:r.DST_ALPHA,[HM]:r.ONE_MINUS_SRC_COLOR,[Od]:r.ONE_MINUS_SRC_ALPHA,[XM]:r.ONE_MINUS_DST_COLOR,[GM]:r.ONE_MINUS_DST_ALPHA,[YM]:r.CONSTANT_COLOR,[$M]:r.ONE_MINUS_CONSTANT_COLOR,[qM]:r.CONSTANT_ALPHA,[KM]:r.ONE_MINUS_CONSTANT_ALPHA};function B(W,Re,oe,de,Pe,be,rt,Nt,sn,yt){if(W===$r){M===!0&&(Te(r.BLEND),M=!1);return}if(M===!1&&(ve(r.BLEND),M=!0),W!==IM){if(W!==x||yt!==C){if((y!==xs||P!==xs)&&(r.blendEquation(r.FUNC_ADD),y=xs,P=xs),yt)switch(W){case wo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hg:r.blendFunc(r.ONE,r.ONE);break;case Vg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case wo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Vg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,I=null,V=null,U=null,R.set(0,0,0),F=0,x=W,C=yt}return}Pe=Pe||Re,be=be||oe,rt=rt||de,(Re!==y||Pe!==P)&&(r.blendEquationSeparate(It[Re],It[Pe]),y=Re,P=Pe),(oe!==L||de!==I||be!==V||rt!==U)&&(r.blendFuncSeparate(ut[oe],ut[de],ut[be],ut[rt]),L=oe,I=de,V=be,U=rt),(Nt.equals(R)===!1||sn!==F)&&(r.blendColor(Nt.r,Nt.g,Nt.b,sn),R.copy(Nt),F=sn),x=W,C=!1}function Dn(W,Re){W.side===dr?Te(r.CULL_FACE):ve(r.CULL_FACE);let oe=W.side===Bn;Re&&(oe=!oe),mt(oe),W.blending===wo&&W.transparent===!1?B($r):B(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const de=W.stencilWrite;f.setTest(de),de&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Rt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function mt(W){w!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),w=W)}function ft(W){W!==PM?(ve(r.CULL_FACE),W!==k&&(W===Bg?r.cullFace(r.BACK):W===LM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),k=W}function je(W){W!==ne&&(ee&&r.lineWidth(W),ne=W)}function Rt(W,Re,oe){W?(ve(r.POLYGON_OFFSET_FILL),(Z!==Re||se!==oe)&&(r.polygonOffset(Re,oe),Z=Re,se=oe)):Te(r.POLYGON_OFFSET_FILL)}function Ge(W){W?ve(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function D(W){W===void 0&&(W=r.TEXTURE0+ce-1),ae!==W&&(r.activeTexture(W),ae=W)}function A(W,Re,oe){oe===void 0&&(ae===null?oe=r.TEXTURE0+ce-1:oe=ae);let de=le[oe];de===void 0&&(de={type:void 0,texture:void 0},le[oe]=de),(de.type!==W||de.texture!==Re)&&(ae!==oe&&(r.activeTexture(oe),ae=oe),r.bindTexture(W,Re||Me[W]),de.type=W,de.texture=Re)}function Q(){const W=le[ae];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function fe(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ue(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function He(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $e(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Je(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(W){Le.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Le.copy(W))}function Fe(W){J.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),J.copy(W))}function dt(W,Re){let oe=p.get(Re);oe===void 0&&(oe=new WeakMap,p.set(Re,oe));let de=oe.get(W);de===void 0&&(de=r.getUniformBlockIndex(Re,W.name),oe.set(W,de))}function it(W,Re){const de=p.get(Re).get(W);h.get(Re)!==de&&(r.uniformBlockBinding(Re,de,W.__bindingPointIndex),h.set(Re,de))}function At(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},ae=null,le={},m={},v=new WeakMap,S=[],E=null,M=!1,x=null,y=null,L=null,I=null,P=null,V=null,U=null,R=new lt(0,0,0),F=0,C=!1,w=null,k=null,ne=null,Z=null,se=null,Le.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ve,disable:Te,bindFramebuffer:Xe,drawBuffers:Ve,useProgram:Dt,setBlending:B,setMaterial:Dn,setFlipSided:mt,setCullFace:ft,setLineWidth:je,setPolygonOffset:Rt,setScissorTest:Ge,activeTexture:D,bindTexture:A,unbindTexture:Q,compressedTexImage2D:fe,compressedTexImage3D:_e,texImage2D:Ne,texImage3D:Je,updateUBOMapping:dt,uniformBlockBinding:it,texStorage2D:$e,texStorage3D:ye,texSubImage2D:ue,texSubImage3D:He,compressedTexSubImage2D:Ae,compressedTexSubImage3D:qe,scissor:et,viewport:Fe,reset:At}}function ZR(r,e,t,s,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ot,g=new WeakMap;let m;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,A){return S?new OffscreenCanvas(D,A):za("canvas")}function M(D,A,Q){let fe=1;const _e=Ge(D);if((_e.width>Q||_e.height>Q)&&(fe=Q/Math.max(_e.width,_e.height)),fe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ue=Math.floor(fe*_e.width),He=Math.floor(fe*_e.height);m===void 0&&(m=E(ue,He));const Ae=A?E(ue,He):m;return Ae.width=ue,Ae.height=He,Ae.getContext("2d").drawImage(D,0,0,ue,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ue+"x"+He+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function x(D){return D.generateMipmaps}function y(D){r.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function I(D,A,Q,fe,_e=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ue=A;if(A===r.RED&&(Q===r.FLOAT&&(ue=r.R32F),Q===r.HALF_FLOAT&&(ue=r.R16F),Q===r.UNSIGNED_BYTE&&(ue=r.R8)),A===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.R8UI),Q===r.UNSIGNED_SHORT&&(ue=r.R16UI),Q===r.UNSIGNED_INT&&(ue=r.R32UI),Q===r.BYTE&&(ue=r.R8I),Q===r.SHORT&&(ue=r.R16I),Q===r.INT&&(ue=r.R32I)),A===r.RG&&(Q===r.FLOAT&&(ue=r.RG32F),Q===r.HALF_FLOAT&&(ue=r.RG16F),Q===r.UNSIGNED_BYTE&&(ue=r.RG8)),A===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ue=r.RG16UI),Q===r.UNSIGNED_INT&&(ue=r.RG32UI),Q===r.BYTE&&(ue=r.RG8I),Q===r.SHORT&&(ue=r.RG16I),Q===r.INT&&(ue=r.RG32I)),A===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),Q===r.UNSIGNED_INT&&(ue=r.RGB32UI),Q===r.BYTE&&(ue=r.RGB8I),Q===r.SHORT&&(ue=r.RGB16I),Q===r.INT&&(ue=r.RGB32I)),A===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ue=r.RGBA32UI),Q===r.BYTE&&(ue=r.RGBA8I),Q===r.SHORT&&(ue=r.RGBA16I),Q===r.INT&&(ue=r.RGBA32I)),A===r.RGB&&Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),A===r.RGBA){const He=_e?Wc:Et.getTransfer(fe);Q===r.FLOAT&&(ue=r.RGBA32F),Q===r.HALF_FLOAT&&(ue=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ue=He===Ct?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function P(D,A){let Q;return D?A===null||A===ws||A===Na?Q=r.DEPTH24_STENCIL8:A===hr?Q=r.DEPTH32F_STENCIL8:A===Ua&&(Q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ws||A===Na?Q=r.DEPTH_COMPONENT24:A===hr?Q=r.DEPTH_COMPONENT32F:A===Ua&&(Q=r.DEPTH_COMPONENT16),Q}function V(D,A){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ci&&D.minFilter!==Hi?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function U(D){const A=D.target;A.removeEventListener("dispose",U),F(A),A.isVideoTexture&&g.delete(A)}function R(D){const A=D.target;A.removeEventListener("dispose",R),w(A)}function F(D){const A=s.get(D);if(A.__webglInit===void 0)return;const Q=D.source,fe=v.get(Q);if(fe){const _e=fe[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&C(D),Object.keys(fe).length===0&&v.delete(Q)}s.remove(D)}function C(D){const A=s.get(D);r.deleteTexture(A.__webglTexture);const Q=D.source,fe=v.get(Q);delete fe[A.__cacheKey],u.memory.textures--}function w(D){const A=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(A.__webglFramebuffer[fe]))for(let _e=0;_e<A.__webglFramebuffer[fe].length;_e++)r.deleteFramebuffer(A.__webglFramebuffer[fe][_e]);else r.deleteFramebuffer(A.__webglFramebuffer[fe]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[fe])}else{if(Array.isArray(A.__webglFramebuffer))for(let fe=0;fe<A.__webglFramebuffer.length;fe++)r.deleteFramebuffer(A.__webglFramebuffer[fe]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let fe=0;fe<A.__webglColorRenderbuffer.length;fe++)A.__webglColorRenderbuffer[fe]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[fe]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Q=D.textures;for(let fe=0,_e=Q.length;fe<_e;fe++){const ue=s.get(Q[fe]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),u.memory.textures--),s.remove(Q[fe])}s.remove(D)}let k=0;function ne(){k=0}function Z(){const D=k;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),k+=1,D}function se(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function ce(D,A){const Q=s.get(D);if(D.isVideoTexture&&je(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const fe=D.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Q,D,A);return}}t.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+A)}function ee(D,A){const Q=s.get(D);if(D.version>0&&Q.__version!==D.version){J(Q,D,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+A)}function pe(D,A){const Q=s.get(D);if(D.version>0&&Q.__version!==D.version){J(Q,D,A);return}t.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+A)}function H(D,A){const Q=s.get(D);if(D.version>0&&Q.__version!==D.version){he(Q,D,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+A)}const ae={[Gc]:r.REPEAT,[Es]:r.CLAMP_TO_EDGE,[Yd]:r.MIRRORED_REPEAT},le={[Ci]:r.NEAREST,[oE]:r.NEAREST_MIPMAP_NEAREST,[nc]:r.NEAREST_MIPMAP_LINEAR,[Hi]:r.LINEAR,[Zf]:r.LINEAR_MIPMAP_NEAREST,[Ts]:r.LINEAR_MIPMAP_LINEAR},O={[uE]:r.NEVER,[gE]:r.ALWAYS,[fE]:r.LESS,[I_]:r.LEQUAL,[dE]:r.EQUAL,[mE]:r.GEQUAL,[hE]:r.GREATER,[pE]:r.NOTEQUAL};function re(D,A){if(A.type===hr&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Hi||A.magFilter===Zf||A.magFilter===nc||A.magFilter===Ts||A.minFilter===Hi||A.minFilter===Zf||A.minFilter===nc||A.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,ae[A.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,ae[A.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,ae[A.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,le[A.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,le[A.minFilter]),A.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,O[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ci||A.minFilter!==nc&&A.minFilter!==Ts||A.type===hr&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function Le(D,A){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",U));const fe=A.source;let _e=v.get(fe);_e===void 0&&(_e={},v.set(fe,_e));const ue=se(A);if(ue!==D.__cacheKey){_e[ue]===void 0&&(_e[ue]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),_e[ue].usedTimes++;const He=_e[D.__cacheKey];He!==void 0&&(_e[D.__cacheKey].usedTimes--,He.usedTimes===0&&C(A)),D.__cacheKey=ue,D.__webglTexture=_e[ue].texture}return Q}function J(D,A,Q){let fe=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(fe=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(fe=r.TEXTURE_3D);const _e=Le(D,A),ue=A.source;t.bindTexture(fe,D.__webglTexture,r.TEXTURE0+Q);const He=s.get(ue);if(ue.version!==He.__version||_e===!0){t.activeTexture(r.TEXTURE0+Q);const Ae=Et.getPrimaries(Et.workingColorSpace),qe=A.colorSpace===Yr?null:Et.getPrimaries(A.colorSpace),$e=A.colorSpace===Yr||Ae===qe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ye=M(A.image,!1,o.maxTextureSize);ye=Rt(A,ye);const Ne=l.convert(A.format,A.colorSpace),Je=l.convert(A.type);let et=I(A.internalFormat,Ne,Je,A.colorSpace,A.isVideoTexture);re(fe,A);let Fe;const dt=A.mipmaps,it=A.isVideoTexture!==!0,At=He.__version===void 0||_e===!0,W=ue.dataReady,Re=V(A,ye);if(A.isDepthTexture)et=P(A.format===Oa,A.type),At&&(it?t.texStorage2D(r.TEXTURE_2D,1,et,ye.width,ye.height):t.texImage2D(r.TEXTURE_2D,0,et,ye.width,ye.height,0,Ne,Je,null));else if(A.isDataTexture)if(dt.length>0){it&&At&&t.texStorage2D(r.TEXTURE_2D,Re,et,dt[0].width,dt[0].height);for(let oe=0,de=dt.length;oe<de;oe++)Fe=dt[oe],it?W&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Fe.width,Fe.height,Ne,Je,Fe.data):t.texImage2D(r.TEXTURE_2D,oe,et,Fe.width,Fe.height,0,Ne,Je,Fe.data);A.generateMipmaps=!1}else it?(At&&t.texStorage2D(r.TEXTURE_2D,Re,et,ye.width,ye.height),W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye.width,ye.height,Ne,Je,ye.data)):t.texImage2D(r.TEXTURE_2D,0,et,ye.width,ye.height,0,Ne,Je,ye.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){it&&At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,et,dt[0].width,dt[0].height,ye.depth);for(let oe=0,de=dt.length;oe<de;oe++)if(Fe=dt[oe],A.format!==Ri)if(Ne!==null)if(it){if(W)if(A.layerUpdates.size>0){const Pe=M0(Fe.width,Fe.height,A.format,A.type);for(const be of A.layerUpdates){const rt=Fe.data.subarray(be*Pe/Fe.data.BYTES_PER_ELEMENT,(be+1)*Pe/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,be,Fe.width,Fe.height,1,Ne,rt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,Fe.width,Fe.height,ye.depth,Ne,Fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,oe,et,Fe.width,Fe.height,ye.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?W&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,Fe.width,Fe.height,ye.depth,Ne,Je,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,oe,et,Fe.width,Fe.height,ye.depth,0,Ne,Je,Fe.data)}else{it&&At&&t.texStorage2D(r.TEXTURE_2D,Re,et,dt[0].width,dt[0].height);for(let oe=0,de=dt.length;oe<de;oe++)Fe=dt[oe],A.format!==Ri?Ne!==null?it?W&&t.compressedTexSubImage2D(r.TEXTURE_2D,oe,0,0,Fe.width,Fe.height,Ne,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,oe,et,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?W&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Fe.width,Fe.height,Ne,Je,Fe.data):t.texImage2D(r.TEXTURE_2D,oe,et,Fe.width,Fe.height,0,Ne,Je,Fe.data)}else if(A.isDataArrayTexture)if(it){if(At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,et,ye.width,ye.height,ye.depth),W)if(A.layerUpdates.size>0){const oe=M0(ye.width,ye.height,A.format,A.type);for(const de of A.layerUpdates){const Pe=ye.data.subarray(de*oe/ye.data.BYTES_PER_ELEMENT,(de+1)*oe/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,de,ye.width,ye.height,1,Ne,Je,Pe)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ne,Je,ye.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,et,ye.width,ye.height,ye.depth,0,Ne,Je,ye.data);else if(A.isData3DTexture)it?(At&&t.texStorage3D(r.TEXTURE_3D,Re,et,ye.width,ye.height,ye.depth),W&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ne,Je,ye.data)):t.texImage3D(r.TEXTURE_3D,0,et,ye.width,ye.height,ye.depth,0,Ne,Je,ye.data);else if(A.isFramebufferTexture){if(At)if(it)t.texStorage2D(r.TEXTURE_2D,Re,et,ye.width,ye.height);else{let oe=ye.width,de=ye.height;for(let Pe=0;Pe<Re;Pe++)t.texImage2D(r.TEXTURE_2D,Pe,et,oe,de,0,Ne,Je,null),oe>>=1,de>>=1}}else if(dt.length>0){if(it&&At){const oe=Ge(dt[0]);t.texStorage2D(r.TEXTURE_2D,Re,et,oe.width,oe.height)}for(let oe=0,de=dt.length;oe<de;oe++)Fe=dt[oe],it?W&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Ne,Je,Fe):t.texImage2D(r.TEXTURE_2D,oe,et,Ne,Je,Fe);A.generateMipmaps=!1}else if(it){if(At){const oe=Ge(ye);t.texStorage2D(r.TEXTURE_2D,Re,et,oe.width,oe.height)}W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Je,ye)}else t.texImage2D(r.TEXTURE_2D,0,et,Ne,Je,ye);x(A)&&y(fe),He.__version=ue.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function he(D,A,Q){if(A.image.length!==6)return;const fe=Le(D,A),_e=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Q);const ue=s.get(_e);if(_e.version!==ue.__version||fe===!0){t.activeTexture(r.TEXTURE0+Q);const He=Et.getPrimaries(Et.workingColorSpace),Ae=A.colorSpace===Yr?null:Et.getPrimaries(A.colorSpace),qe=A.colorSpace===Yr||He===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const $e=A.isCompressedTexture||A.image[0].isCompressedTexture,ye=A.image[0]&&A.image[0].isDataTexture,Ne=[];for(let de=0;de<6;de++)!$e&&!ye?Ne[de]=M(A.image[de],!0,o.maxCubemapSize):Ne[de]=ye?A.image[de].image:A.image[de],Ne[de]=Rt(A,Ne[de]);const Je=Ne[0],et=l.convert(A.format,A.colorSpace),Fe=l.convert(A.type),dt=I(A.internalFormat,et,Fe,A.colorSpace),it=A.isVideoTexture!==!0,At=ue.__version===void 0||fe===!0,W=_e.dataReady;let Re=V(A,Je);re(r.TEXTURE_CUBE_MAP,A);let oe;if($e){it&&At&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,dt,Je.width,Je.height);for(let de=0;de<6;de++){oe=Ne[de].mipmaps;for(let Pe=0;Pe<oe.length;Pe++){const be=oe[Pe];A.format!==Ri?et!==null?it?W&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,be.width,be.height,et,be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,dt,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,be.width,be.height,et,Fe,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,dt,be.width,be.height,0,et,Fe,be.data)}}}else{if(oe=A.mipmaps,it&&At){oe.length>0&&Re++;const de=Ge(Ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,dt,de.width,de.height)}for(let de=0;de<6;de++)if(ye){it?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ne[de].width,Ne[de].height,et,Fe,Ne[de].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,dt,Ne[de].width,Ne[de].height,0,et,Fe,Ne[de].data);for(let Pe=0;Pe<oe.length;Pe++){const rt=oe[Pe].image[de].image;it?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,rt.width,rt.height,et,Fe,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,dt,rt.width,rt.height,0,et,Fe,rt.data)}}else{it?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,et,Fe,Ne[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,dt,et,Fe,Ne[de]);for(let Pe=0;Pe<oe.length;Pe++){const be=oe[Pe];it?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,et,Fe,be.image[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,dt,et,Fe,be.image[de])}}}x(A)&&y(r.TEXTURE_CUBE_MAP),ue.__version=_e.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Me(D,A,Q,fe,_e,ue){const He=l.convert(Q.format,Q.colorSpace),Ae=l.convert(Q.type),qe=I(Q.internalFormat,He,Ae,Q.colorSpace),$e=s.get(A),ye=s.get(Q);if(ye.__renderTarget=A,!$e.__hasExternalTextures){const Ne=Math.max(1,A.width>>ue),Je=Math.max(1,A.height>>ue);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,ue,qe,Ne,Je,A.depth,0,He,Ae,null):t.texImage2D(_e,ue,qe,Ne,Je,0,He,Ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),ft(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,_e,ye.__webglTexture,0,mt(A)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,fe,_e,ye.__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(D,A,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),A.depthBuffer){const fe=A.depthTexture,_e=fe&&fe.isDepthTexture?fe.type:null,ue=P(A.stencilBuffer,_e),He=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=mt(A);ft(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ae,ue,A.width,A.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,ue,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,ue,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,He,r.RENDERBUFFER,D)}else{const fe=A.textures;for(let _e=0;_e<fe.length;_e++){const ue=fe[_e],He=l.convert(ue.format,ue.colorSpace),Ae=l.convert(ue.type),qe=I(ue.internalFormat,He,Ae,ue.colorSpace),$e=mt(A);Q&&ft(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,qe,A.width,A.height):ft(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e,qe,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,qe,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=s.get(A.depthTexture);fe.__renderTarget=A,(!fe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ce(A.depthTexture,0);const _e=fe.__webglTexture,ue=mt(A);if(A.depthTexture.format===Fa)ft(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(A.depthTexture.format===Oa)ft(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Xe(D){const A=s.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const fe=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),fe){const _e=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,fe.removeEventListener("dispose",_e)};fe.addEventListener("dispose",_e),A.__depthDisposeCallback=_e}A.__boundDepthTexture=fe}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const fe=D.texture.mipmaps;fe&&fe.length>0?Te(A.__webglFramebuffer[0],D):Te(A.__webglFramebuffer,D)}else if(Q){A.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[fe]),A.__webglDepthbuffer[fe]===void 0)A.__webglDepthbuffer[fe]=r.createRenderbuffer(),ve(A.__webglDepthbuffer[fe],D,!1);else{const _e=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer[fe];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,ue)}}else{const fe=D.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),ve(A.__webglDepthbuffer,D,!1);else{const _e=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,ue)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(D,A,Q){const fe=s.get(D);A!==void 0&&Me(fe.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&Xe(D)}function Dt(D){const A=D.texture,Q=s.get(D),fe=s.get(A);D.addEventListener("dispose",R);const _e=D.textures,ue=D.isWebGLCubeRenderTarget===!0,He=_e.length>1;if(He||(fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture()),fe.__version=A.version,u.memory.textures++),ue){Q.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[Ae]=[];for(let qe=0;qe<A.mipmaps.length;qe++)Q.__webglFramebuffer[Ae][qe]=r.createFramebuffer()}else Q.__webglFramebuffer[Ae]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)Q.__webglFramebuffer[Ae]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(He)for(let Ae=0,qe=_e.length;Ae<qe;Ae++){const $e=s.get(_e[Ae]);$e.__webglTexture===void 0&&($e.__webglTexture=r.createTexture(),u.memory.textures++)}if(D.samples>0&&ft(D)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const qe=_e[Ae];Q.__webglColorRenderbuffer[Ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ae]);const $e=l.convert(qe.format,qe.colorSpace),ye=l.convert(qe.type),Ne=I(qe.internalFormat,$e,ye,qe.colorSpace,D.isXRRenderTarget===!0),Je=mt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,Ne,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(Q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,fe.__webglTexture),re(r.TEXTURE_CUBE_MAP,A);for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0)for(let qe=0;qe<A.mipmaps.length;qe++)Me(Q.__webglFramebuffer[Ae][qe],D,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,qe);else Me(Q.__webglFramebuffer[Ae],D,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);x(A)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Ae=0,qe=_e.length;Ae<qe;Ae++){const $e=_e[Ae],ye=s.get($e);t.bindTexture(r.TEXTURE_2D,ye.__webglTexture),re(r.TEXTURE_2D,$e),Me(Q.__webglFramebuffer,D,$e,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,0),x($e)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let Ae=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,fe.__webglTexture),re(Ae,A),A.mipmaps&&A.mipmaps.length>0)for(let qe=0;qe<A.mipmaps.length;qe++)Me(Q.__webglFramebuffer[qe],D,A,r.COLOR_ATTACHMENT0,Ae,qe);else Me(Q.__webglFramebuffer,D,A,r.COLOR_ATTACHMENT0,Ae,0);x(A)&&y(Ae),t.unbindTexture()}D.depthBuffer&&Xe(D)}function It(D){const A=D.textures;for(let Q=0,fe=A.length;Q<fe;Q++){const _e=A[Q];if(x(_e)){const ue=L(D),He=s.get(_e).__webglTexture;t.bindTexture(ue,He),y(ue),t.unbindTexture()}}}const ut=[],B=[];function Dn(D){if(D.samples>0){if(ft(D)===!1){const A=D.textures,Q=D.width,fe=D.height;let _e=r.COLOR_BUFFER_BIT;const ue=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=s.get(D),Ae=A.length>1;if(Ae)for(let $e=0;$e<A.length;$e++)t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const qe=D.texture.mipmaps;qe&&qe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let $e=0;$e<A.length;$e++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[$e]);const ye=s.get(A[$e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ye,0)}r.blitFramebuffer(0,0,Q,fe,0,0,Q,fe,_e,r.NEAREST),h===!0&&(ut.length=0,B.length=0,ut.push(r.COLOR_ATTACHMENT0+$e),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ut.push(ue),B.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,B)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ae)for(let $e=0;$e<A.length;$e++){t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,He.__webglColorRenderbuffer[$e]);const ye=s.get(A[$e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,ye,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const A=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function mt(D){return Math.min(o.maxSamples,D.samples)}function ft(D){const A=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function je(D){const A=u.render.frame;g.get(D)!==A&&(g.set(D,A),D.update())}function Rt(D,A){const Q=D.colorSpace,fe=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==Lo&&Q!==Yr&&(Et.getTransfer(Q)===Ct?(fe!==Ri||_e!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}function Ge(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=ne,this.setTexture2D=ce,this.setTexture2DArray=ee,this.setTexture3D=pe,this.setTextureCube=H,this.rebindTextures=Ve,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Dn,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ft}function QR(r,e){function t(s,o=Yr){let l;const u=Et.getTransfer(o);if(s===Wi)return r.UNSIGNED_BYTE;if(s===Uh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Nh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===R_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===w_)return r.BYTE;if(s===A_)return r.SHORT;if(s===Ua)return r.UNSIGNED_SHORT;if(s===Ih)return r.INT;if(s===ws)return r.UNSIGNED_INT;if(s===hr)return r.FLOAT;if(s===Ga)return r.HALF_FLOAT;if(s===C_)return r.ALPHA;if(s===b_)return r.RGB;if(s===Ri)return r.RGBA;if(s===Fa)return r.DEPTH_COMPONENT;if(s===Oa)return r.DEPTH_STENCIL;if(s===P_)return r.RED;if(s===Fh)return r.RED_INTEGER;if(s===L_)return r.RG;if(s===Oh)return r.RG_INTEGER;if(s===kh)return r.RGBA_INTEGER;if(s===Dc||s===Ic||s===Uc||s===Nc)if(u===Ct)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Dc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ic)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Dc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ic)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Uc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$d||s===qd||s===Kd||s===Zd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===$d)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qd||s===Jd||s===eh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Qd||s===Jd)return u===Ct?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===eh)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===th||s===nh||s===ih||s===rh||s===sh||s===oh||s===ah||s===lh||s===ch||s===uh||s===fh||s===dh||s===hh||s===ph)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===th)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nh)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ih)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rh)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sh)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===oh)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ah)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lh)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ch)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===uh)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fh)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dh)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hh)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ph)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fc||s===mh||s===gh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Fc)return u===Ct?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===mh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===D_||s===_h||s===vh||s===yh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Fc)return l.COMPRESSED_RED_RGTC1_EXT;if(s===_h)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Na?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const JR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eC=`
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

}`;class tC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new Hn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new ji({vertexShader:JR,fragmentShader:eC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new si(new Xa(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nC extends Cs{constructor(e,t){super();const s=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,g=null,m=null,v=null,S=null,E=null;const M=new tC,x=t.getContextAttributes();let y=null,L=null;const I=[],P=[],V=new ot;let U=null;const R=new ii;R.viewport=new Ht;const F=new ii;F.viewport=new Ht;const C=[R,F],w=new M1;let k=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let he=I[J];return he===void 0&&(he=new _d,I[J]=he),he.getTargetRaySpace()},this.getControllerGrip=function(J){let he=I[J];return he===void 0&&(he=new _d,I[J]=he),he.getGripSpace()},this.getHand=function(J){let he=I[J];return he===void 0&&(he=new _d,I[J]=he),he.getHandSpace()};function Z(J){const he=P.indexOf(J.inputSource);if(he===-1)return;const Me=I[he];Me!==void 0&&(Me.update(J.inputSource,J.frame,p||u),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function se(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",se),o.removeEventListener("inputsourceschange",ce);for(let J=0;J<I.length;J++){const he=P[J];he!==null&&(P[J]=null,I[J].disconnect(he))}k=null,ne=null,M.reset(),e.setRenderTarget(y),S=null,v=null,m=null,o=null,L=null,Le.stop(),s.isPresenting=!1,e.setPixelRatio(U),e.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",se),o.addEventListener("inputsourceschange",ce),x.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ve=null,Te=null;x.depth&&(Te=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=x.stencil?Oa:Fa,ve=x.stencil?Na:ws);const Xe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:l};m=new XRWebGLBinding(o,t),v=m.createProjectionLayer(Xe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new Kr(v.textureWidth,v.textureHeight,{format:Ri,type:Wi,depthTexture:new W_(v.textureWidth,v.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,Me),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Kr(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Le.setContext(o),Le.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ce(J){for(let he=0;he<J.removed.length;he++){const Me=J.removed[he],ve=P.indexOf(Me);ve>=0&&(P[ve]=null,I[ve].disconnect(Me))}for(let he=0;he<J.added.length;he++){const Me=J.added[he];let ve=P.indexOf(Me);if(ve===-1){for(let Xe=0;Xe<I.length;Xe++)if(Xe>=P.length){P.push(Me),ve=Xe;break}else if(P[Xe]===null){P[Xe]=Me,ve=Xe;break}if(ve===-1)break}const Te=I[ve];Te&&Te.connect(Me)}}const ee=new X,pe=new X;function H(J,he,Me){ee.setFromMatrixPosition(he.matrixWorld),pe.setFromMatrixPosition(Me.matrixWorld);const ve=ee.distanceTo(pe),Te=he.projectionMatrix.elements,Xe=Me.projectionMatrix.elements,Ve=Te[14]/(Te[10]-1),Dt=Te[14]/(Te[10]+1),It=(Te[9]+1)/Te[5],ut=(Te[9]-1)/Te[5],B=(Te[8]-1)/Te[0],Dn=(Xe[8]+1)/Xe[0],mt=Ve*B,ft=Ve*Dn,je=ve/(-B+Dn),Rt=je*-B;if(he.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Rt),J.translateZ(je),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Te[10]===-1)J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ge=Ve+je,D=Dt+je,A=mt-Rt,Q=ft+(ve-Rt),fe=It*Dt/D*Ge,_e=ut*Dt/D*Ge;J.projectionMatrix.makePerspective(A,Q,fe,_e,Ge,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ae(J,he){he===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(he.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let he=J.near,Me=J.far;M.texture!==null&&(M.depthNear>0&&(he=M.depthNear),M.depthFar>0&&(Me=M.depthFar)),w.near=F.near=R.near=he,w.far=F.far=R.far=Me,(k!==w.near||ne!==w.far)&&(o.updateRenderState({depthNear:w.near,depthFar:w.far}),k=w.near,ne=w.far),R.layers.mask=J.layers.mask|2,F.layers.mask=J.layers.mask|4,w.layers.mask=R.layers.mask|F.layers.mask;const ve=J.parent,Te=w.cameras;ae(w,ve);for(let Xe=0;Xe<Te.length;Xe++)ae(Te[Xe],ve);Te.length===2?H(w,R,F):w.projectionMatrix.copy(R.projectionMatrix),le(J,w,ve)};function le(J,he,Me){Me===null?J.matrix.copy(he.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(he.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ka*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function(J){h=J,v!==null&&(v.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(w)};let O=null;function re(J,he){if(g=he.getViewerPose(p||u),E=he,g!==null){const Me=g.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let ve=!1;Me.length!==w.cameras.length&&(w.cameras.length=0,ve=!0);for(let Ve=0;Ve<Me.length;Ve++){const Dt=Me[Ve];let It=null;if(S!==null)It=S.getViewport(Dt);else{const B=m.getViewSubImage(v,Dt);It=B.viewport,Ve===0&&(e.setRenderTargetTextures(L,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(L))}let ut=C[Ve];ut===void 0&&(ut=new ii,ut.layers.enable(Ve),ut.viewport=new Ht,C[Ve]=ut),ut.matrix.fromArray(Dt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Dt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(It.x,It.y,It.width,It.height),Ve===0&&(w.matrix.copy(ut.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ve===!0&&w.cameras.push(ut)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&m){const Ve=m.getDepthInformation(Me[0]);Ve&&Ve.isValid&&Ve.texture&&M.init(e,Ve,o.renderState)}}for(let Me=0;Me<I.length;Me++){const ve=P[Me],Te=I[Me];ve!==null&&Te!==void 0&&Te.update(ve,he,p||u)}O&&O(J,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),E=null}const Le=new Y_;Le.setAnimationLoop(re),this.setAnimationLoop=function(J){O=J},this.dispose=function(){}}}const _s=new bi,iC=new Lt;function rC(r,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function s(x,y){y.color.getRGB(x.fogColor.value,H_(r)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,L,I,P){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),m(x,y)):y.isMeshPhongMaterial?(l(x,y),g(x,y)):y.isMeshStandardMaterial?(l(x,y),v(x,y),y.isMeshPhysicalMaterial&&S(x,y,P)):y.isMeshMatcapMaterial?(l(x,y),E(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),M(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&f(x,y)):y.isPointsMaterial?h(x,y,L,I):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Bn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Bn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const L=e.get(y),I=L.envMap,P=L.envMapRotation;I&&(x.envMap.value=I,_s.copy(P),_s.x*=-1,_s.y*=-1,_s.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),x.envMapRotation.value.setFromMatrix4(iC.makeRotationFromEuler(_s)),x.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function f(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function h(x,y,L,I){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*L,x.scale.value=I*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function g(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function m(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,L){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Bn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,y){y.matcap&&(x.matcap.value=y.matcap)}function M(x,y){const L=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function sC(r,e,t,s){let o={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,I){const P=I.program;s.uniformBlockBinding(L,P)}function p(L,I){let P=o[L.id];P===void 0&&(E(L),P=g(L),o[L.id]=P,L.addEventListener("dispose",x));const V=I.program;s.updateUBOMapping(L,V);const U=e.render.frame;l[L.id]!==U&&(v(L),l[L.id]=U)}function g(L){const I=m();L.__bindingPointIndex=I;const P=r.createBuffer(),V=L.__size,U=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,V,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,P),P}function m(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const I=o[L.id],P=L.uniforms,V=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let U=0,R=P.length;U<R;U++){const F=Array.isArray(P[U])?P[U]:[P[U]];for(let C=0,w=F.length;C<w;C++){const k=F[C];if(S(k,U,C,V)===!0){const ne=k.__offset,Z=Array.isArray(k.value)?k.value:[k.value];let se=0;for(let ce=0;ce<Z.length;ce++){const ee=Z[ce],pe=M(ee);typeof ee=="number"||typeof ee=="boolean"?(k.__data[0]=ee,r.bufferSubData(r.UNIFORM_BUFFER,ne+se,k.__data)):ee.isMatrix3?(k.__data[0]=ee.elements[0],k.__data[1]=ee.elements[1],k.__data[2]=ee.elements[2],k.__data[3]=0,k.__data[4]=ee.elements[3],k.__data[5]=ee.elements[4],k.__data[6]=ee.elements[5],k.__data[7]=0,k.__data[8]=ee.elements[6],k.__data[9]=ee.elements[7],k.__data[10]=ee.elements[8],k.__data[11]=0):(ee.toArray(k.__data,se),se+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ne,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(L,I,P,V){const U=L.value,R=I+"_"+P;if(V[R]===void 0)return typeof U=="number"||typeof U=="boolean"?V[R]=U:V[R]=U.clone(),!0;{const F=V[R];if(typeof U=="number"||typeof U=="boolean"){if(F!==U)return V[R]=U,!0}else if(F.equals(U)===!1)return F.copy(U),!0}return!1}function E(L){const I=L.uniforms;let P=0;const V=16;for(let R=0,F=I.length;R<F;R++){const C=Array.isArray(I[R])?I[R]:[I[R]];for(let w=0,k=C.length;w<k;w++){const ne=C[w],Z=Array.isArray(ne.value)?ne.value:[ne.value];for(let se=0,ce=Z.length;se<ce;se++){const ee=Z[se],pe=M(ee),H=P%V,ae=H%pe.boundary,le=H+ae;P+=ae,le!==0&&V-le<pe.storage&&(P+=V-le),ne.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=P,P+=pe.storage}}}const U=P%V;return U>0&&(P+=V-U),L.__size=P,L.__cache={},this}function M(L){const I={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(I.boundary=4,I.storage=4):L.isVector2?(I.boundary=8,I.storage=8):L.isVector3||L.isColor?(I.boundary=16,I.storage=12):L.isVector4?(I.boundary=16,I.storage=16):L.isMatrix3?(I.boundary=48,I.storage=48):L.isMatrix4?(I.boundary=64,I.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),I}function x(L){const I=L.target;I.removeEventListener("dispose",x);const P=u.indexOf(I.__bindingPointIndex);u.splice(P,1),r.deleteBuffer(o[I.id]),delete o[I.id],delete l[I.id]}function y(){for(const L in o)r.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:h,update:p,dispose:y}}class oC{constructor(e={}){const{canvas:t=IE(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),M=new Int32Array(4);let x=null,y=null;const L=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let V=!1;this._outputColorSpace=Ln;let U=0,R=0,F=null,C=-1,w=null;const k=new Ht,ne=new Ht;let Z=null;const se=new lt(0);let ce=0,ee=t.width,pe=t.height,H=1,ae=null,le=null;const O=new Ht(0,0,ee,pe),re=new Ht(0,0,ee,pe);let Le=!1;const J=new Vh;let he=!1,Me=!1;const ve=new Lt,Te=new Lt,Xe=new X,Ve=new Ht,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function ut(){return F===null?H:1}let B=s;function Dn(b,j){return t.getContext(b,j)}try{const b={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lh}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",be,!1),B===null){const j="webgl2";if(B=Dn(j,b),B===null)throw Dn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let mt,ft,je,Rt,Ge,D,A,Q,fe,_e,ue,He,Ae,qe,$e,ye,Ne,Je,et,Fe,dt,it,At,W;function Re(){mt=new gA(B),mt.init(),it=new QR(B,mt),ft=new cA(B,mt,e,it),je=new KR(B,mt),ft.reverseDepthBuffer&&v&&je.buffers.depth.setReversed(!0),Rt=new yA(B),Ge=new OR,D=new ZR(B,mt,je,Ge,ft,it,Rt),A=new fA(P),Q=new mA(P),fe=new w1(B),At=new aA(B,fe),_e=new _A(B,fe,Rt,At),ue=new SA(B,_e,fe,Rt),et=new xA(B,ft,D),ye=new uA(Ge),He=new FR(P,A,Q,mt,ft,At,ye),Ae=new rC(P,Ge),qe=new zR,$e=new XR(mt),Je=new oA(P,A,Q,je,ue,S,h),Ne=new $R(P,ue,ft),W=new sC(B,Rt,ft,je),Fe=new lA(B,mt,Rt),dt=new vA(B,mt,Rt),Rt.programs=He.programs,P.capabilities=ft,P.extensions=mt,P.properties=Ge,P.renderLists=qe,P.shadowMap=Ne,P.state=je,P.info=Rt}Re();const oe=new nC(P,B);this.xr=oe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(ee,pe,!1))},this.getSize=function(b){return b.set(ee,pe)},this.setSize=function(b,j,ie=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=b,pe=j,t.width=Math.floor(b*H),t.height=Math.floor(j*H),ie===!0&&(t.style.width=b+"px",t.style.height=j+"px"),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set(ee*H,pe*H).floor()},this.setDrawingBufferSize=function(b,j,ie){ee=b,pe=j,H=ie,t.width=Math.floor(b*ie),t.height=Math.floor(j*ie),this.setViewport(0,0,b,j)},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy(O)},this.setViewport=function(b,j,ie,q){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,j,ie,q),je.viewport(k.copy(O).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,j,ie,q){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,j,ie,q),je.scissor(ne.copy(re).multiplyScalar(H).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(b){je.setScissorTest(Le=b)},this.setOpaqueSort=function(b){ae=b},this.setTransparentSort=function(b){le=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(b=!0,j=!0,ie=!0){let q=0;if(b){let Y=!1;if(F!==null){const Se=F.texture.format;Y=Se===kh||Se===Oh||Se===Fh}if(Y){const Se=F.texture.type,Ce=Se===Wi||Se===ws||Se===Ua||Se===Na||Se===Uh||Se===Nh,De=Je.getClearColor(),Oe=Je.getClearAlpha(),tt=De.r,Qe=De.g,ze=De.b;Ce?(E[0]=tt,E[1]=Qe,E[2]=ze,E[3]=Oe,B.clearBufferuiv(B.COLOR,0,E)):(M[0]=tt,M[1]=Qe,M[2]=ze,M[3]=Oe,B.clearBufferiv(B.COLOR,0,M))}else q|=B.COLOR_BUFFER_BIT}j&&(q|=B.DEPTH_BUFFER_BIT),ie&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Je.dispose(),qe.dispose(),$e.dispose(),Ge.dispose(),A.dispose(),Q.dispose(),ue.dispose(),At.dispose(),W.dispose(),He.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",bs),oe.removeEventListener("sessionend",yr),Yi.stop()};function de(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const b=Rt.autoReset,j=Ne.enabled,ie=Ne.autoUpdate,q=Ne.needsUpdate,Y=Ne.type;Re(),Rt.autoReset=b,Ne.enabled=j,Ne.autoUpdate=ie,Ne.needsUpdate=q,Ne.type=Y}function be(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function rt(b){const j=b.target;j.removeEventListener("dispose",rt),Nt(j)}function Nt(b){sn(b),Ge.remove(b)}function sn(b){const j=Ge.get(b).programs;j!==void 0&&(j.forEach(function(ie){He.releaseProgram(ie)}),b.isShaderMaterial&&He.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,ie,q,Y,Se){j===null&&(j=Dt);const Ce=Y.isMesh&&Y.matrixWorld.determinant()<0,De=qa(b,j,ie,q,Y);je.setMaterial(q,Ce);let Oe=ie.index,tt=1;if(q.wireframe===!0){if(Oe=_e.getWireframeAttribute(ie),Oe===void 0)return;tt=2}const Qe=ie.drawRange,ze=ie.attributes.position;let _t=Qe.start*tt,st=(Qe.start+Qe.count)*tt;Se!==null&&(_t=Math.max(_t,Se.start*tt),st=Math.min(st,(Se.start+Se.count)*tt)),Oe!==null?(_t=Math.max(_t,0),st=Math.min(st,Oe.count)):ze!=null&&(_t=Math.max(_t,0),st=Math.min(st,ze.count));const jt=st-_t;if(jt<0||jt===1/0)return;At.setup(Y,q,De,ie,Oe);let kt,vt=Fe;if(Oe!==null&&(kt=fe.get(Oe),vt=dt,vt.setIndex(kt)),Y.isMesh)q.wireframe===!0?(je.setLineWidth(q.wireframeLinewidth*ut()),vt.setMode(B.LINES)):vt.setMode(B.TRIANGLES);else if(Y.isLine){let Ye=q.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*ut()),Y.isLineSegments?vt.setMode(B.LINES):Y.isLineLoop?vt.setMode(B.LINE_LOOP):vt.setMode(B.LINE_STRIP)}else Y.isPoints?vt.setMode(B.POINTS):Y.isSprite&&vt.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)kc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))vt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ye=Y._multiDrawStarts,Yt=Y._multiDrawCounts,gt=Y._multiDrawCount,Mn=Oe?fe.get(Oe).bytesPerElement:1,Sr=Ge.get(q).currentProgram.getUniforms();for(let Un=0;Un<gt;Un++)Sr.setValue(B,"_gl_DrawID",Un),vt.render(Ye[Un]/Mn,Yt[Un])}else if(Y.isInstancedMesh)vt.renderInstances(_t,jt,Y.count);else if(ie.isInstancedBufferGeometry){const Ye=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Yt=Math.min(ie.instanceCount,Ye);vt.renderInstances(_t,jt,Yt)}else vt.render(_t,jt)};function yt(b,j,ie){b.transparent===!0&&b.side===dr&&b.forceSinglePass===!1?(b.side=Bn,b.needsUpdate=!0,Ps(b,j,ie),b.side=vr,b.needsUpdate=!0,Ps(b,j,ie),b.side=dr):Ps(b,j,ie)}this.compile=function(b,j,ie=null){ie===null&&(ie=b),y=$e.get(ie),y.init(j),I.push(y),ie.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),b!==ie&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights();const q=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Se=Y.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const De=Se[Ce];yt(De,ie,Y),q.add(De)}else yt(Se,ie,Y),q.add(Se)}),y=I.pop(),q},this.compileAsync=function(b,j,ie=null){const q=this.compile(b,j,ie);return new Promise(Y=>{function Se(){if(q.forEach(function(Ce){Ge.get(Ce).currentProgram.isReady()&&q.delete(Ce)}),q.size===0){Y(b);return}setTimeout(Se,10)}mt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Vn=null;function In(b){Vn&&Vn(b)}function bs(){Yi.stop()}function yr(){Yi.start()}const Yi=new Y_;Yi.setAnimationLoop(In),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(b){Vn=b,oe.setAnimationLoop(b),b===null?Yi.stop():Yi.start()},oe.addEventListener("sessionstart",bs),oe.addEventListener("sessionend",yr),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(j),j=oe.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,j,F),y=$e.get(b,I.length),y.init(j),I.push(y),Te.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),J.setFromProjectionMatrix(Te),Me=this.localClippingEnabled,he=ye.init(this.clippingPlanes,Me),x=qe.get(b,L.length),x.init(),L.push(x),oe.enabled===!0&&oe.isPresenting===!0){const Se=P.xr.getDepthSensingMesh();Se!==null&&$i(Se,j,-1/0,P.sortObjects)}$i(b,j,0,P.sortObjects),x.finish(),P.sortObjects===!0&&x.sort(ae,le),It=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,It&&Je.addToRenderList(x,b),this.info.render.frame++,he===!0&&ye.beginShadows();const ie=y.state.shadowsArray;Ne.render(ie,b,j),he===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,Y=x.transmissive;if(y.setupLights(),j.isArrayCamera){const Se=j.cameras;if(Y.length>0)for(let Ce=0,De=Se.length;Ce<De;Ce++){const Oe=Se[Ce];Jr(q,Y,b,Oe)}It&&Je.render(b);for(let Ce=0,De=Se.length;Ce<De;Ce++){const Oe=Se[Ce];Qr(x,b,Oe,Oe.viewport)}}else Y.length>0&&Jr(q,Y,b,j),It&&Je.render(b),Qr(x,b,j);F!==null&&R===0&&(D.updateMultisampleRenderTarget(F),D.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(P,b,j),At.resetDefaultState(),C=-1,w=null,I.pop(),I.length>0?(y=I[I.length-1],he===!0&&ye.setGlobalState(P.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?x=L[L.length-1]:x=null};function $i(b,j,ie,q){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)ie=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){q&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Te);const Ce=ue.update(b),De=b.material;De.visible&&x.push(b,Ce,De,ie,Ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const Ce=ue.update(b),De=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ve.copy(Ce.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(Te)),Array.isArray(De)){const Oe=Ce.groups;for(let tt=0,Qe=Oe.length;tt<Qe;tt++){const ze=Oe[tt],_t=De[ze.materialIndex];_t&&_t.visible&&x.push(b,Ce,_t,ie,Ve.z,ze)}}else De.visible&&x.push(b,Ce,De,ie,Ve.z,null)}}const Se=b.children;for(let Ce=0,De=Se.length;Ce<De;Ce++)$i(Se[Ce],j,ie,q)}function Qr(b,j,ie,q){const Y=b.opaque,Se=b.transmissive,Ce=b.transparent;y.setupLightsView(ie),he===!0&&ye.setGlobalState(P.clippingPlanes,ie),q&&je.viewport(k.copy(q)),Y.length>0&&xr(Y,j,ie),Se.length>0&&xr(Se,j,ie),Ce.length>0&&xr(Ce,j,ie),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Jr(b,j,ie,q){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[q.id]===void 0&&(y.state.transmissionRenderTarget[q.id]=new Kr(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Ga:Wi,minFilter:Ts,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Se=y.state.transmissionRenderTarget[q.id],Ce=q.viewport||k;Se.setSize(Ce.z*P.transmissionResolutionScale,Ce.w*P.transmissionResolutionScale);const De=P.getRenderTarget();P.setRenderTarget(Se),P.getClearColor(se),ce=P.getClearAlpha(),ce<1&&P.setClearColor(16777215,.5),P.clear(),It&&Je.render(ie);const Oe=P.toneMapping;P.toneMapping=qr;const tt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),y.setupLightsView(q),he===!0&&ye.setGlobalState(P.clippingPlanes,q),xr(b,ie,q),D.updateMultisampleRenderTarget(Se),D.updateRenderTargetMipmap(Se),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ze=0,_t=j.length;ze<_t;ze++){const st=j[ze],jt=st.object,kt=st.geometry,vt=st.material,Ye=st.group;if(vt.side===dr&&jt.layers.test(q.layers)){const Yt=vt.side;vt.side=Bn,vt.needsUpdate=!0,Ya(jt,ie,q,kt,vt,Ye),vt.side=Yt,vt.needsUpdate=!0,Qe=!0}}Qe===!0&&(D.updateMultisampleRenderTarget(Se),D.updateRenderTargetMipmap(Se))}P.setRenderTarget(De),P.setClearColor(se,ce),tt!==void 0&&(q.viewport=tt),P.toneMapping=Oe}function xr(b,j,ie){const q=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,Se=b.length;Y<Se;Y++){const Ce=b[Y],De=Ce.object,Oe=Ce.geometry,tt=Ce.group;let Qe=Ce.material;Qe.allowOverride===!0&&q!==null&&(Qe=q),De.layers.test(ie.layers)&&Ya(De,j,ie,Oe,Qe,tt)}}function Ya(b,j,ie,q,Y,Se){b.onBeforeRender(P,j,ie,q,Y,Se),b.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(P,j,ie,q,b,Se),Y.transparent===!0&&Y.side===dr&&Y.forceSinglePass===!1?(Y.side=Bn,Y.needsUpdate=!0,P.renderBufferDirect(ie,j,q,Y,b,Se),Y.side=vr,Y.needsUpdate=!0,P.renderBufferDirect(ie,j,q,Y,b,Se),Y.side=dr):P.renderBufferDirect(ie,j,q,Y,b,Se),b.onAfterRender(P,j,ie,q,Y,Se)}function Ps(b,j,ie){j.isScene!==!0&&(j=Dt);const q=Ge.get(b),Y=y.state.lights,Se=y.state.shadowsArray,Ce=Y.state.version,De=He.getParameters(b,Y.state,Se,j,ie),Oe=He.getProgramCacheKey(De);let tt=q.programs;q.environment=b.isMeshStandardMaterial?j.environment:null,q.fog=j.fog,q.envMap=(b.isMeshStandardMaterial?Q:A).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?j.environmentRotation:b.envMapRotation,tt===void 0&&(b.addEventListener("dispose",rt),tt=new Map,q.programs=tt);let Qe=tt.get(Oe);if(Qe!==void 0){if(q.currentProgram===Qe&&q.lightsStateVersion===Ce)return Li(b,De),Qe}else De.uniforms=He.getUniforms(b),b.onBeforeCompile(De,P),Qe=He.acquireProgram(De,Oe),tt.set(Oe,Qe),q.uniforms=De.uniforms;const ze=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=ye.uniform),Li(b,De),q.needsLights=fu(b),q.lightsStateVersion=Ce,q.needsLights&&(ze.ambientLightColor.value=Y.state.ambient,ze.lightProbe.value=Y.state.probe,ze.directionalLights.value=Y.state.directional,ze.directionalLightShadows.value=Y.state.directionalShadow,ze.spotLights.value=Y.state.spot,ze.spotLightShadows.value=Y.state.spotShadow,ze.rectAreaLights.value=Y.state.rectArea,ze.ltc_1.value=Y.state.rectAreaLTC1,ze.ltc_2.value=Y.state.rectAreaLTC2,ze.pointLights.value=Y.state.point,ze.pointLightShadows.value=Y.state.pointShadow,ze.hemisphereLights.value=Y.state.hemi,ze.directionalShadowMap.value=Y.state.directionalShadowMap,ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ze.spotShadowMap.value=Y.state.spotShadowMap,ze.spotLightMatrix.value=Y.state.spotLightMatrix,ze.spotLightMap.value=Y.state.spotLightMap,ze.pointShadowMap.value=Y.state.pointShadowMap,ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.currentProgram=Qe,q.uniformsList=null,Qe}function $a(b){if(b.uniformsList===null){const j=b.currentProgram.getUniforms();b.uniformsList=Bc.seqWithValue(j.seq,b.uniforms)}return b.uniformsList}function Li(b,j){const ie=Ge.get(b);ie.outputColorSpace=j.outputColorSpace,ie.batching=j.batching,ie.batchingColor=j.batchingColor,ie.instancing=j.instancing,ie.instancingColor=j.instancingColor,ie.instancingMorph=j.instancingMorph,ie.skinning=j.skinning,ie.morphTargets=j.morphTargets,ie.morphNormals=j.morphNormals,ie.morphColors=j.morphColors,ie.morphTargetsCount=j.morphTargetsCount,ie.numClippingPlanes=j.numClippingPlanes,ie.numIntersection=j.numClipIntersection,ie.vertexAlphas=j.vertexAlphas,ie.vertexTangents=j.vertexTangents,ie.toneMapping=j.toneMapping}function qa(b,j,ie,q,Y){j.isScene!==!0&&(j=Dt),D.resetTextureUnits();const Se=j.fog,Ce=q.isMeshStandardMaterial?j.environment:null,De=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Lo,Oe=(q.isMeshStandardMaterial?Q:A).get(q.envMap||Ce),tt=q.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Qe=!!ie.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ze=!!ie.morphAttributes.position,_t=!!ie.morphAttributes.normal,st=!!ie.morphAttributes.color;let jt=qr;q.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(jt=P.toneMapping);const kt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,vt=kt!==void 0?kt.length:0,Ye=Ge.get(q),Yt=y.state.lights;if(he===!0&&(Me===!0||b!==w)){const vn=b===w&&q.id===C;ye.setState(q,b,vn)}let gt=!1;q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Yt.state.version||Ye.outputColorSpace!==De||Y.isBatchedMesh&&Ye.batching===!1||!Y.isBatchedMesh&&Ye.batching===!0||Y.isBatchedMesh&&Ye.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ye.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ye.instancing===!1||!Y.isInstancedMesh&&Ye.instancing===!0||Y.isSkinnedMesh&&Ye.skinning===!1||!Y.isSkinnedMesh&&Ye.skinning===!0||Y.isInstancedMesh&&Ye.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ye.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ye.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ye.instancingMorph===!1&&Y.morphTexture!==null||Ye.envMap!==Oe||q.fog===!0&&Ye.fog!==Se||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ye.numPlanes||Ye.numIntersection!==ye.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==Qe||Ye.morphTargets!==ze||Ye.morphNormals!==_t||Ye.morphColors!==st||Ye.toneMapping!==jt||Ye.morphTargetsCount!==vt)&&(gt=!0):(gt=!0,Ye.__version=q.version);let Mn=Ye.currentProgram;gt===!0&&(Mn=Ps(q,j,Y));let Sr=!1,Un=!1,qi=!1;const Pt=Mn.getUniforms(),En=Ye.uniforms;if(je.useProgram(Mn.program)&&(Sr=!0,Un=!0,qi=!0),q.id!==C&&(C=q.id,Un=!0),Sr||w!==b){je.buffers.depth.getReversed()?(ve.copy(b.projectionMatrix),NE(ve),FE(ve),Pt.setValue(B,"projectionMatrix",ve)):Pt.setValue(B,"projectionMatrix",b.projectionMatrix),Pt.setValue(B,"viewMatrix",b.matrixWorldInverse);const dn=Pt.map.cameraPosition;dn!==void 0&&dn.setValue(B,Xe.setFromMatrixPosition(b.matrixWorld)),ft.logarithmicDepthBuffer&&Pt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Pt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,Un=!0,qi=!0)}if(Y.isSkinnedMesh){Pt.setOptional(B,Y,"bindMatrix"),Pt.setOptional(B,Y,"bindMatrixInverse");const vn=Y.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Pt.setValue(B,"boneTexture",vn.boneTexture,D))}Y.isBatchedMesh&&(Pt.setOptional(B,Y,"batchingTexture"),Pt.setValue(B,"batchingTexture",Y._matricesTexture,D),Pt.setOptional(B,Y,"batchingIdTexture"),Pt.setValue(B,"batchingIdTexture",Y._indirectTexture,D),Pt.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Pt.setValue(B,"batchingColorTexture",Y._colorsTexture,D));const fn=ie.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&et.update(Y,ie,Mn),(Un||Ye.receiveShadow!==Y.receiveShadow)&&(Ye.receiveShadow=Y.receiveShadow,Pt.setValue(B,"receiveShadow",Y.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(En.envMap.value=Oe,En.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&j.environment!==null&&(En.envMapIntensity.value=j.environmentIntensity),Un&&(Pt.setValue(B,"toneMappingExposure",P.toneMappingExposure),Ye.needsLights&&Ka(En,qi),Se&&q.fog===!0&&Ae.refreshFogUniforms(En,Se),Ae.refreshMaterialUniforms(En,q,H,pe,y.state.transmissionRenderTarget[b.id]),Bc.upload(B,$a(Ye),En,D)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Bc.upload(B,$a(Ye),En,D),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Pt.setValue(B,"center",Y.center),Pt.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Pt.setValue(B,"normalMatrix",Y.normalMatrix),Pt.setValue(B,"modelMatrix",Y.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const vn=q.uniformsGroups;for(let dn=0,xt=vn.length;dn<xt;dn++){const Di=vn[dn];W.update(Di,Mn),W.bind(Di,Mn)}}return Mn}function Ka(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function fu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,j,ie){const q=Ge.get(b);q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ge.get(b.texture).__webglTexture=j,Ge.get(b.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:ie,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,j){const ie=Ge.get(b);ie.__webglFramebuffer=j,ie.__useDefaultFramebuffer=j===void 0};const Za=B.createFramebuffer();this.setRenderTarget=function(b,j=0,ie=0){F=b,U=j,R=ie;let q=!0,Y=null,Se=!1,Ce=!1;if(b){const Oe=Ge.get(b);if(Oe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(B.FRAMEBUFFER,null),q=!1;else if(Oe.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(Oe.__hasExternalTextures)D.rebindTextures(b,Ge.get(b.texture).__webglTexture,Ge.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ze=b.depthTexture;if(Oe.__boundDepthTexture!==ze){if(ze!==null&&Ge.has(ze)&&(b.width!==ze.image.width||b.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const tt=b.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ce=!0);const Qe=Ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qe[j])?Y=Qe[j][ie]:Y=Qe[j],Se=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?Y=Ge.get(b).__webglMultisampledFramebuffer:Array.isArray(Qe)?Y=Qe[ie]:Y=Qe,k.copy(b.viewport),ne.copy(b.scissor),Z=b.scissorTest}else k.copy(O).multiplyScalar(H).floor(),ne.copy(re).multiplyScalar(H).floor(),Z=Le;if(ie!==0&&(Y=Za),je.bindFramebuffer(B.FRAMEBUFFER,Y)&&q&&je.drawBuffers(b,Y),je.viewport(k),je.scissor(ne),je.setScissorTest(Z),Se){const Oe=Ge.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,Oe.__webglTexture,ie)}else if(Ce){const Oe=Ge.get(b.texture),tt=j;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.__webglTexture,ie,tt)}else if(b!==null&&ie!==0){const Oe=Ge.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oe.__webglTexture,ie)}C=-1},this.readRenderTargetPixels=function(b,j,ie,q,Y,Se,Ce){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){je.bindFramebuffer(B.FRAMEBUFFER,De);try{const Oe=b.texture,tt=Oe.format,Qe=Oe.type;if(!ft.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-q&&ie>=0&&ie<=b.height-Y&&B.readPixels(j,ie,q,Y,it.convert(tt),it.convert(Qe),Se)}finally{const Oe=F!==null?Ge.get(F).__webglFramebuffer:null;je.bindFramebuffer(B.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(b,j,ie,q,Y,Se,Ce){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(j>=0&&j<=b.width-q&&ie>=0&&ie<=b.height-Y){je.bindFramebuffer(B.FRAMEBUFFER,De);const Oe=b.texture,tt=Oe.format,Qe=Oe.type;if(!ft.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ze),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),B.readPixels(j,ie,q,Y,it.convert(tt),it.convert(Qe),0);const _t=F!==null?Ge.get(F).__webglFramebuffer:null;je.bindFramebuffer(B.FRAMEBUFFER,_t);const st=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await UE(B,st,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ze),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.deleteBuffer(ze),B.deleteSync(st),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,j=null,ie=0){const q=Math.pow(2,-ie),Y=Math.floor(b.image.width*q),Se=Math.floor(b.image.height*q),Ce=j!==null?j.x:0,De=j!==null?j.y:0;D.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,ie,0,0,Ce,De,Y,Se),je.unbindTexture()};const Qa=B.createFramebuffer(),Ja=B.createFramebuffer();this.copyTextureToTexture=function(b,j,ie=null,q=null,Y=0,Se=null){Se===null&&(Y!==0?(kc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=Y,Y=0):Se=0);let Ce,De,Oe,tt,Qe,ze,_t,st,jt;const kt=b.isCompressedTexture?b.mipmaps[Se]:b.image;if(ie!==null)Ce=ie.max.x-ie.min.x,De=ie.max.y-ie.min.y,Oe=ie.isBox3?ie.max.z-ie.min.z:1,tt=ie.min.x,Qe=ie.min.y,ze=ie.isBox3?ie.min.z:0;else{const fn=Math.pow(2,-Y);Ce=Math.floor(kt.width*fn),De=Math.floor(kt.height*fn),b.isDataArrayTexture?Oe=kt.depth:b.isData3DTexture?Oe=Math.floor(kt.depth*fn):Oe=1,tt=0,Qe=0,ze=0}q!==null?(_t=q.x,st=q.y,jt=q.z):(_t=0,st=0,jt=0);const vt=it.convert(j.format),Ye=it.convert(j.type);let Yt;j.isData3DTexture?(D.setTexture3D(j,0),Yt=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(D.setTexture2DArray(j,0),Yt=B.TEXTURE_2D_ARRAY):(D.setTexture2D(j,0),Yt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const gt=B.getParameter(B.UNPACK_ROW_LENGTH),Mn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Sr=B.getParameter(B.UNPACK_SKIP_PIXELS),Un=B.getParameter(B.UNPACK_SKIP_ROWS),qi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,kt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,kt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,tt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ze);const Pt=b.isDataArrayTexture||b.isData3DTexture,En=j.isDataArrayTexture||j.isData3DTexture;if(b.isDepthTexture){const fn=Ge.get(b),vn=Ge.get(j),dn=Ge.get(fn.__renderTarget),xt=Ge.get(vn.__renderTarget);je.bindFramebuffer(B.READ_FRAMEBUFFER,dn.__webglFramebuffer),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Di=0;Di<Oe;Di++)Pt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.get(b).__webglTexture,Y,ze+Di),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.get(j).__webglTexture,Se,jt+Di)),B.blitFramebuffer(tt,Qe,Ce,De,_t,st,Ce,De,B.DEPTH_BUFFER_BIT,B.NEAREST);je.bindFramebuffer(B.READ_FRAMEBUFFER,null),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||Ge.has(b)){const fn=Ge.get(b),vn=Ge.get(j);je.bindFramebuffer(B.READ_FRAMEBUFFER,Qa),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ja);for(let dn=0;dn<Oe;dn++)Pt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,fn.__webglTexture,Y,ze+dn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fn.__webglTexture,Y),En?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,vn.__webglTexture,Se,jt+dn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,vn.__webglTexture,Se),Y!==0?B.blitFramebuffer(tt,Qe,Ce,De,_t,st,Ce,De,B.COLOR_BUFFER_BIT,B.NEAREST):En?B.copyTexSubImage3D(Yt,Se,_t,st,jt+dn,tt,Qe,Ce,De):B.copyTexSubImage2D(Yt,Se,_t,st,tt,Qe,Ce,De);je.bindFramebuffer(B.READ_FRAMEBUFFER,null),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else En?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Yt,Se,_t,st,jt,Ce,De,Oe,vt,Ye,kt.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(Yt,Se,_t,st,jt,Ce,De,Oe,vt,kt.data):B.texSubImage3D(Yt,Se,_t,st,jt,Ce,De,Oe,vt,Ye,kt):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,_t,st,Ce,De,vt,Ye,kt.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,_t,st,kt.width,kt.height,vt,kt.data):B.texSubImage2D(B.TEXTURE_2D,Se,_t,st,Ce,De,vt,Ye,kt);B.pixelStorei(B.UNPACK_ROW_LENGTH,gt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Mn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Sr),B.pixelStorei(B.UNPACK_SKIP_ROWS,Un),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qi),Se===0&&j.generateMipmaps&&B.generateMipmap(Yt),je.unbindTexture()},this.copyTextureToTexture3D=function(b,j,ie=null,q=null,Y=0){return kc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,j,ie,q,Y)},this.initRenderTarget=function(b){Ge.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),je.unbindTexture()},this.resetState=function(){U=0,R=0,F=null,je.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}class aC extends si{constructor(e,t={}){super(e),this.isWater=!0;const s=this,o=t.textureWidth!==void 0?t.textureWidth:512,l=t.textureHeight!==void 0?t.textureHeight:512,u=t.clipBias!==void 0?t.clipBias:0,f=t.alpha!==void 0?t.alpha:1,h=t.time!==void 0?t.time:0,p=t.waterNormals!==void 0?t.waterNormals:null,g=t.sunDirection!==void 0?t.sunDirection:new X(.70707,.70707,0),m=new lt(t.sunColor!==void 0?t.sunColor:16777215),v=new lt(t.waterColor!==void 0?t.waterColor:8355711),S=t.eye!==void 0?t.eye:new X(0,0,0),E=t.distortionScale!==void 0?t.distortionScale:20,M=t.side!==void 0?t.side:vr,x=t.fog!==void 0?t.fog:!1,y=new fr,L=new X,I=new X,P=new X,V=new Lt,U=new X(0,0,-1),R=new Ht,F=new X,C=new X,w=new Ht,k=new Lt,ne=new ii,Z=new Kr(o,l),se={name:"MirrorShader",uniforms:jc.merge([we.fog,we.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Lt},sunColor:{value:new lt(8355711)},sunDirection:{value:new X(.70707,.70707,0)},eye:{value:new X},waterColor:{value:new lt(5592405)}}]),vertexShader:`
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
				}`},ce=new ji({name:se.name,uniforms:jc.clone(se.uniforms),vertexShader:se.vertexShader,fragmentShader:se.fragmentShader,lights:!0,side:M,fog:x});ce.uniforms.mirrorSampler.value=Z.texture,ce.uniforms.textureMatrix.value=k,ce.uniforms.alpha.value=f,ce.uniforms.time.value=h,ce.uniforms.normalSampler.value=p,ce.uniforms.sunColor.value=m,ce.uniforms.waterColor.value=v,ce.uniforms.sunDirection.value=g,ce.uniforms.distortionScale.value=E,ce.uniforms.eye.value=S,s.material=ce,s.onBeforeRender=function(ee,pe,H){if(I.setFromMatrixPosition(s.matrixWorld),P.setFromMatrixPosition(H.matrixWorld),V.extractRotation(s.matrixWorld),L.set(0,0,1),L.applyMatrix4(V),F.subVectors(I,P),F.dot(L)>0)return;F.reflect(L).negate(),F.add(I),V.extractRotation(H.matrixWorld),U.set(0,0,-1),U.applyMatrix4(V),U.add(P),C.subVectors(I,U),C.reflect(L).negate(),C.add(I),ne.position.copy(F),ne.up.set(0,1,0),ne.up.applyMatrix4(V),ne.up.reflect(L),ne.lookAt(C),ne.far=H.far,ne.updateMatrixWorld(),ne.projectionMatrix.copy(H.projectionMatrix),k.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),k.multiply(ne.projectionMatrix),k.multiply(ne.matrixWorldInverse),y.setFromNormalAndCoplanarPoint(L,I),y.applyMatrix4(ne.matrixWorldInverse),R.set(y.normal.x,y.normal.y,y.normal.z,y.constant);const ae=ne.projectionMatrix;w.x=(Math.sign(R.x)+ae.elements[8])/ae.elements[0],w.y=(Math.sign(R.y)+ae.elements[9])/ae.elements[5],w.z=-1,w.w=(1+ae.elements[10])/ae.elements[14],R.multiplyScalar(2/R.dot(w)),ae.elements[2]=R.x,ae.elements[6]=R.y,ae.elements[10]=R.z+1-u,ae.elements[14]=R.w,S.setFromMatrixPosition(H.matrixWorld);const le=ee.getRenderTarget(),O=ee.xr.enabled,re=ee.shadowMap.autoUpdate;s.visible=!1,ee.xr.enabled=!1,ee.shadowMap.autoUpdate=!1,ee.setRenderTarget(Z),ee.state.buffers.depth.setMask(!0),ee.autoClear===!1&&ee.clear(),ee.render(pe,ne),s.visible=!0,ee.xr.enabled=O,ee.shadowMap.autoUpdate=re,ee.setRenderTarget(le);const Le=H.viewport;Le!==void 0&&ee.state.viewport(Le)}}}class uu extends si{constructor(){const e=uu.SkyShader,t=new ji({name:e.name,uniforms:jc.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Bn,depthWrite:!1});super(new No(1,1,1),t),this.isSky=!0}}uu.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new X},up:{value:new X(0,1,0)}},vertexShader:`
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

		}`};const lC=/^[og]\s*(.+)?/,cC=/^mtllib /,uC=/^usemtl /,fC=/^usemap /,Y0=/\s+/,$0=new X,bd=new X,q0=new X,K0=new X,pi=new X,Rc=new lt;function dC(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const s=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(o,l){const u=this._finalize(!1);u&&(u.inherited||u.groupCount<=0)&&this.materials.splice(u.index,1);const f={index:this.materials.length,name:o||"",mtllib:Array.isArray(l)&&l.length>0?l[l.length-1]:"",smooth:u!==void 0?u.smooth:this.smooth,groupStart:u!==void 0?u.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const p={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return p.clone=this.clone.bind(p),p}};return this.materials.push(f),f},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(o){const l=this.currentMaterial();if(l&&l.groupEnd===-1&&(l.groupEnd=this.geometry.vertices.length/3,l.groupCount=l.groupEnd-l.groupStart,l.inherited=!1),o&&this.materials.length>1)for(let u=this.materials.length-1;u>=0;u--)this.materials[u].groupCount<=0&&this.materials.splice(u,1);return o&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),l}},s&&s.name&&typeof s.clone=="function"){const o=s.clone(0);o.inherited=!0,this.object.materials.push(o)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const s=parseInt(e,10);return(s>=0?s-1:s+t/3)*3},parseNormalIndex:function(e,t){const s=parseInt(e,10);return(s>=0?s-1:s+t/3)*3},parseUVIndex:function(e,t){const s=parseInt(e,10);return(s>=0?s-1:s+t/2)*2},addVertex:function(e,t,s){const o=this.vertices,l=this.object.geometry.vertices;l.push(o[e+0],o[e+1],o[e+2]),l.push(o[t+0],o[t+1],o[t+2]),l.push(o[s+0],o[s+1],o[s+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,s){const o=this.normals,l=this.object.geometry.normals;l.push(o[e+0],o[e+1],o[e+2]),l.push(o[t+0],o[t+1],o[t+2]),l.push(o[s+0],o[s+1],o[s+2])},addFaceNormal:function(e,t,s){const o=this.vertices,l=this.object.geometry.normals;$0.fromArray(o,e),bd.fromArray(o,t),q0.fromArray(o,s),pi.subVectors(q0,bd),K0.subVectors($0,bd),pi.cross(K0),pi.normalize(),l.push(pi.x,pi.y,pi.z),l.push(pi.x,pi.y,pi.z),l.push(pi.x,pi.y,pi.z)},addColor:function(e,t,s){const o=this.colors,l=this.object.geometry.colors;o[e]!==void 0&&l.push(o[e+0],o[e+1],o[e+2]),o[t]!==void 0&&l.push(o[t+0],o[t+1],o[t+2]),o[s]!==void 0&&l.push(o[s+0],o[s+1],o[s+2])},addUV:function(e,t,s){const o=this.uvs,l=this.object.geometry.uvs;l.push(o[e+0],o[e+1]),l.push(o[t+0],o[t+1]),l.push(o[s+0],o[s+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,s,o,l,u,f,h,p){const g=this.vertices.length;let m=this.parseVertexIndex(e,g),v=this.parseVertexIndex(t,g),S=this.parseVertexIndex(s,g);if(this.addVertex(m,v,S),this.addColor(m,v,S),f!==void 0&&f!==""){const E=this.normals.length;m=this.parseNormalIndex(f,E),v=this.parseNormalIndex(h,E),S=this.parseNormalIndex(p,E),this.addNormal(m,v,S)}else this.addFaceNormal(m,v,S);if(o!==void 0&&o!==""){const E=this.uvs.length;m=this.parseUVIndex(o,E),v=this.parseUVIndex(l,E),S=this.parseUVIndex(u,E),this.addUV(m,v,S),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let s=0,o=e.length;s<o;s++){const l=this.parseVertexIndex(e[s],t);this.addVertexPoint(l),this.addColor(l)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const s=this.vertices.length,o=this.uvs.length;for(let l=0,u=e.length;l<u;l++)this.addVertexLine(this.parseVertexIndex(e[l],s));for(let l=0,u=t.length;l<u;l++)this.addUVLine(this.parseUVIndex(t[l],o))}};return r.startObject("",!1),r}class Z0 extends ja{constructor(e){super(e),this.materials=null}load(e,t,s,o){const l=this,u=new g1(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(f){try{t(l.parse(f))}catch(h){o?o(h):console.error(h),l.manager.itemError(e)}},s,o)}setMaterials(e){return this.materials=e,this}parse(e){const t=new dC;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const s=e.split(`
`);let o=[];for(let f=0,h=s.length;f<h;f++){const p=s[f].trimStart();if(p.length===0)continue;const g=p.charAt(0);if(g!=="#")if(g==="v"){const m=p.split(Y0);switch(m[0]){case"v":t.vertices.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3])),m.length>=7?(Rc.setRGB(parseFloat(m[4]),parseFloat(m[5]),parseFloat(m[6]),Ln),t.colors.push(Rc.r,Rc.g,Rc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3]));break;case"vt":t.uvs.push(parseFloat(m[1]),parseFloat(m[2]));break}}else if(g==="f"){const v=p.slice(1).trim().split(Y0),S=[];for(let M=0,x=v.length;M<x;M++){const y=v[M];if(y.length>0){const L=y.split("/");S.push(L)}}const E=S[0];for(let M=1,x=S.length-1;M<x;M++){const y=S[M],L=S[M+1];t.addFace(E[0],y[0],L[0],E[1],y[1],L[1],E[2],y[2],L[2])}}else if(g==="l"){const m=p.substring(1).trim().split(" ");let v=[];const S=[];if(p.indexOf("/")===-1)v=m;else for(let E=0,M=m.length;E<M;E++){const x=m[E].split("/");x[0]!==""&&v.push(x[0]),x[1]!==""&&S.push(x[1])}t.addLineGeometry(v,S)}else if(g==="p"){const v=p.slice(1).trim().split(" ");t.addPointGeometry(v)}else if((o=lC.exec(p))!==null){const m=(" "+o[0].slice(1).trim()).slice(1);t.startObject(m)}else if(uC.test(p))t.object.startMaterial(p.substring(7).trim(),t.materialLibraries);else if(cC.test(p))t.materialLibraries.push(p.substring(7).trim());else if(fC.test(p))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(g==="s"){if(o=p.split(" "),o.length>1){const v=o[1].trim().toLowerCase();t.object.smooth=v!=="0"&&v!=="off"}else t.object.smooth=!0;const m=t.object.currentMaterial();m&&(m.smooth=t.object.smooth)}else{if(p==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+p+'"')}}t.finalize();const l=new Ma;if(l.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let f=0,h=t.objects.length;f<h;f++){const p=t.objects[f],g=p.geometry,m=p.materials,v=g.type==="Line",S=g.type==="Points";let E=!1;if(g.vertices.length===0)continue;const M=new Pi;M.setAttribute("position",new zn(g.vertices,3)),g.normals.length>0&&M.setAttribute("normal",new zn(g.normals,3)),g.colors.length>0&&(E=!0,M.setAttribute("color",new zn(g.colors,3))),g.hasUVIndices===!0&&M.setAttribute("uv",new zn(g.uvs,2));const x=[];for(let L=0,I=m.length;L<I;L++){const P=m[L],V=P.name+"_"+P.smooth+"_"+E;let U=t.materials[V];if(this.materials!==null){if(U=this.materials.create(P.name),v&&U&&!(U instanceof zc)){const R=new zc;Xi.prototype.copy.call(R,U),R.color.copy(U.color),U=R}else if(S&&U&&!(U instanceof Ea)){const R=new Ea({size:10,sizeAttenuation:!1});Xi.prototype.copy.call(R,U),R.color.copy(U.color),R.map=U.map,U=R}}U===void 0&&(v?U=new zc:S?U=new Ea({size:1,sizeAttenuation:!1}):U=new u1,U.name=P.name,U.flatShading=!P.smooth,U.vertexColors=E,t.materials[V]=U),x.push(U)}let y;if(x.length>1){for(let L=0,I=m.length;L<I;L++){const P=m[L];M.addGroup(P.groupStart,P.groupCount,L)}v?y=new m0(M,x):S?y=new xd(M,x):y=new si(M,x)}else v?y=new m0(M,x[0]):S?y=new xd(M,x[0]):y=new si(M,x[0]);y.name=p.name,l.add(y)}else if(t.vertices.length>0){const f=new Ea({size:1,sizeAttenuation:!1}),h=new Pi;h.setAttribute("position",new zn(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new zn(t.colors,3)),f.vertexColors=!0);const p=new xd(h,f);l.add(p)}return l}}const Q0={type:"change"},Wh={type:"start"},Q_={type:"end"},Cc=new lu,J0=new fr,hC=Math.cos(70*Oc.DEG2RAD),ln=new X,qn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pd=1e-6;class pC extends E1{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:To.ROTATE,MIDDLE:To.DOLLY,RIGHT:To.PAN},this.touches={ONE:xo.ROTATE,TWO:xo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new As,this._lastTargetPosition=new X,this._quat=new As().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new S0,this._sphericalDelta=new S0,this._scale=1,this._panOffset=new X,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new X,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gC.bind(this),this._onPointerDown=mC.bind(this),this._onPointerUp=_C.bind(this),this._onContextMenu=TC.bind(this),this._onMouseWheel=xC.bind(this),this._onKeyDown=SC.bind(this),this._onTouchStart=MC.bind(this),this._onTouchMove=EC.bind(this),this._onMouseDown=vC.bind(this),this._onMouseMove=yC.bind(this),this._interceptControlDown=wC.bind(this),this._interceptControlUp=AC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Q0),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;ln.copy(t).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(s)&&isFinite(o)&&(s<-Math.PI?s+=qn:s>Math.PI&&(s-=qn),o<-Math.PI?o+=qn:o>Math.PI&&(o-=qn),s<=o?this._spherical.theta=Math.max(s,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+o)/2?Math.max(s,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),t.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=ln.length();u=this._clampDistance(f*this._scale);const h=f-u;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const f=new X(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const p=new X(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(f),this.object.updateMatrixWorld(),u=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Cc.origin.copy(this.object.position),Cc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cc.direction))<hC?this.object.lookAt(this.target):(J0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cc.intersectPlane(J0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Pd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pd||this._lastTargetPosition.distanceToSquared(this.target)>Pd?(this.dispatchEvent(Q0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qn/60*this.autoRotateSpeed*e:qn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ln.setFromMatrixColumn(t,0),ln.multiplyScalar(-e),this._panOffset.add(ln)}_panUp(e,t){this.screenSpacePanning===!0?ln.setFromMatrixColumn(t,1):(ln.setFromMatrixColumn(t,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(e),this._panOffset.add(ln)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;ln.copy(o).sub(this.target);let l=ln.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/s.clientHeight,this.object.matrix),this._panUp(2*t*l/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),o=e-s.left,l=t-s.top,u=s.width,f=s.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(s,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(s,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(s*s+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),o=.5*(e.pageX+s.x),l=.5*(e.pageY+s.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(s,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(s*s+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ot,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function mC(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function gC(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function _C(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Q_),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function vC(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case To.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=bt.DOLLY;break;case To.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=bt.ROTATE}break;case To.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Wh)}function yC(r){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function xC(r){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(r.preventDefault(),this.dispatchEvent(Wh),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Q_))}function SC(r){this.enabled!==!1&&this._handleKeyDown(r)}function MC(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case xo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=bt.TOUCH_ROTATE;break;case xo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case xo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=bt.TOUCH_DOLLY_PAN;break;case xo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Wh)}function EC(r){switch(this._trackPointer(r),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=bt.NONE}}function TC(r){this.enabled!==!1&&r.preventDefault()}function wC(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AC(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ca=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(g){g.preventDefault(),s(++r%e.children.length)},!1);function t(g){return e.appendChild(g.dom),g}function s(g){for(var m=0;m<e.children.length;m++)e.children[m].style.display=m===g?"block":"none";r=g}var o=(performance||Date).now(),l=o,u=0,f=t(new Ca.Panel("FPS","#0ff","#002")),h=t(new Ca.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var p=t(new Ca.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:e,addPanel:t,showPanel:s,begin:function(){o=(performance||Date).now()},end:function(){u++;var g=(performance||Date).now();if(h.update(g-o,200),g>=l+1e3&&(f.update(u*1e3/(g-l),100),l=g,u=0,p)){var m=performance.memory;p.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return g},update:function(){o=this.end()},domElement:e,setMode:s}};Ca.Panel=function(r,e,t){var s=1/0,o=0,l=Math.round,u=l(window.devicePixelRatio||1),f=80*u,h=48*u,p=3*u,g=2*u,m=3*u,v=15*u,S=74*u,E=30*u,M=document.createElement("canvas");M.width=f,M.height=h,M.style.cssText="width:80px;height:48px";var x=M.getContext("2d");return x.font="bold "+9*u+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=t,x.fillRect(0,0,f,h),x.fillStyle=e,x.fillText(r,p,g),x.fillRect(m,v,S,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(m,v,S,E),{dom:M,update:function(y,L){s=Math.min(s,y),o=Math.max(o,y),x.fillStyle=t,x.globalAlpha=1,x.fillRect(0,0,f,v),x.fillStyle=e,x.fillText(l(y)+" "+r+" ("+l(s)+"-"+l(o)+")",p,g),x.drawImage(M,m+u,v,S-u,E,m,v,S-u,E),x.fillRect(m+S-u,v,u,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(m+S-u,v,u,l((1-y/L)*E))}}};const Ms=class Ms{constructor(e,t){tn(this,"scene");tn(this,"camera");tn(this,"renderer");tn(this,"controls");tn(this,"stats");tn(this,"water");tn(this,"sky");tn(this,"shipRef",null);tn(this,"animationFrameId",null);tn(this,"shipSpeed");tn(this,"shipPosition",{x:0,y:0,z:0});tn(this,"config");tn(this,"assetPaths");tn(this,"container",null);tn(this,"onShipMove");tn(this,"onCameraMove");tn(this,"handleResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)});tn(this,"animate",e=>{if(this.stats.update(),this.controls.update(),this.water&&(this.water.material.uniforms.time.value+=1/60),this.shipRef){const t=this.config.cameraPosition.z-this.shipRef.position.z;t<this.config.shipStopDistance&&(this.shipSpeed=Math.max(this.config.shipMinSpeed,this.shipSpeed*.98),t<5&&(this.shipSpeed=0)),this.shipRef.position.z+=this.shipSpeed;const s=this.shipSpeed>.01?1:this.shipSpeed/.01,o=Math.sin(e*this.config.shipRockingSpeed)*s;this.shipRef.rotation.z=o*.08,this.shipRef.rotation.x=Math.sin(e*this.config.shipRockingSpeed*.7)*.03*s,this.shipRef.position.y=-.5+o*this.config.shipRockingAmount,this.shipRef.position.y+=Math.sin(e*.0015)*.15*s,this.shipPosition={x:this.shipRef.position.x,y:this.shipRef.position.y,z:this.shipRef.position.z},this.onShipMove&&this.onShipMove(this.shipPosition,this.shipSpeed)}if(this.onCameraMove){const t=this.camera.position;this.onCameraMove({x:t.x,y:t.y,z:t.z})}this.renderer.render(this.scene,this.camera),this.animationFrameId=requestAnimationFrame(this.animate)});this.config=e,this.assetPaths=t,this.shipSpeed=e.shipSpeed,this.scene=new o1,this.camera=new ii(65,window.innerWidth/window.innerHeight,.1,2e3),this.camera.position.copy(this.config.cameraPosition),this.camera.lookAt(0,0,0),this.renderer=new oC({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.outputEncoding=Ln,this.scene.add(new S1(16777215,.7));const s=new x1(16777215,1.2);s.position.set(0,50,100),s.castShadow=!0,this.scene.add(s),this.sky=new uu,this.sky.scale.setScalar(100),this.scene.add(this.sky);const o=new X;o.setFromSphericalCoords(this.config.sunPositionSpherical[0],Oc.degToRad(this.config.sunPositionSpherical[1]),Oc.degToRad(this.config.sunPositionSpherical[2])),this.sky.material.uniforms.sunPosition.value.copy(o);const l=new Xa(this.config.waterSize,this.config.waterSize);this.water=new aC(l,{textureWidth:256,textureHeight:256,waterNormals:new Sd().load(this.assetPaths.waterNormal,u=>{u.wrapS=u.wrapT=Gc}),sunDirection:o.clone().normalize(),sunColor:16777215,waterColor:this.config.waterColor,distortionScale:2.5,fog:this.scene.fog!==void 0}),this.water.rotation.x=-Math.PI/2,this.scene.add(this.water),this.controls=new pC(this.camera,this.renderer.domElement),this.controls.target.set(0,.5,0),this.controls.update(),this.stats=new Ca,this.loadIsland(),this.loadShip(),window.addEventListener("resize",this.handleResize)}static getInstance(e,t){return Ms.instance||(Ms.instance=new Ms(e,t)),Ms.instance}attachToDOM(e){this.container=e,e.contains(this.renderer.domElement)||(e.appendChild(this.renderer.domElement),e.appendChild(this.stats.dom)),this.startAnimation(),this.handleResize()}detachFromDOM(){this.stopAnimation(),this.container&&(this.container.contains(this.renderer.domElement)&&this.container.removeChild(this.renderer.domElement),this.container.contains(this.stats.dom)&&this.container.removeChild(this.stats.dom))}loadIsland(){const e=new Sd,t=new Z0;e.load(this.assetPaths.islandTexture,s=>{s.colorSpace=Ln,s.anisotropy=this.renderer.capabilities.getMaxAnisotropy();const o=new v0({map:s,metalness:.1,roughness:.8});t.load(this.assetPaths.islandModel,l=>{const f=new Rs().setFromObject(l).getCenter(new X);l.position.sub(f),l.scale.setScalar(this.config.islandScale),l.position.copy(this.config.islandPosition),l.traverse(h=>{if(h.isMesh){const p=h;p.material=o,p.castShadow=!0,p.receiveShadow=!0}}),this.scene.add(l)})})}loadShip(){const e=new Sd,t=new Z0;e.load(this.assetPaths.shipTexture,s=>{s.colorSpace=Ln,s.anisotropy=this.renderer.capabilities.getMaxAnisotropy();const o=new v0({map:s,metalness:.3,roughness:.7});t.load(this.assetPaths.shipModel,l=>{const u=new Rs().setFromObject(l),f=u.getCenter(new X);l.position.sub(f);const h=this.config.shipScale/Math.max(u.getSize(new X).length(),1);l.scale.setScalar(h);const p=u.min.y*h;l.position.set(0,-p,0),l.rotation.y=Oc.degToRad(-290),l.traverse(g=>{if(g.isMesh){const m=g;m.material=o,m.castShadow=!0,m.receiveShadow=!0}}),this.scene.add(l),this.shipRef=l})})}setShipMoveListener(e){this.onShipMove=e}setCameraMoveListener(e){this.onCameraMove=e}startAnimation(){this.animationFrameId||(this.animationFrameId=requestAnimationFrame(this.animate))}stopAnimation(){this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}getShipPosition(){return this.shipPosition}getShipSpeed(){return this.shipSpeed}getCameraPosition(){return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z}}};tn(Ms,"instance",null);let Mh=Ms;const RC="fonts/minecraft.ttf",e_={cameraPosition:new X(-24,1.26,34.29),waterSize:100,shipScale:15,islandScale:30,islandPosition:new X(0,3,-40),waterColor:7695,sunPositionSpherical:[1,88,180],shipSpeed:.05,shipRockingSpeed:.002,shipRockingAmount:.2,shipStopDistance:15,shipMinSpeed:.001,textFadeInDuration:3e3},CC={waterNormal:new URL("/elspirates-mariscal2015/assets/textures/waternormals.jpg",import.meta.url).href,shipModel:new URL("/elspirates-mariscal2015/assets/models/ship-model.obj",import.meta.url).href,shipTexture:new URL("/elspirates-mariscal2015/assets/textures/solar_punk_pirate_shi_0617201936_texture.png",import.meta.url).href,islandModel:new URL("/elspirates-mariscal2015/assets/models/medas.obj",import.meta.url).href,islandTexture:new URL("/elspirates-mariscal2015/assets/textures/medas_texture.png",import.meta.url).href},bC=["Els pirates electrònics","desembarquen","SALA mariscal","28/08/2025"],Ld=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.hostname==="[::1]");function PC(){const r=Qt.useRef(null),[e,t]=Qt.useState(0),[s,o]=Qt.useState({x:0,y:0,z:0}),[l,u]=Qt.useState(0),[f,h]=Qt.useState(Ld?null:{x:0,y:0,z:0});return Qt.useEffect(()=>{const p=new FontFace("Minecraft",`url(${RC})`);document.fonts.add(p),p.load().then(()=>{const m=Date.now(),v=()=>{const S=Date.now()-m,E=Math.min(S/e_.textFadeInDuration,1);t(E),E<1&&requestAnimationFrame(v)};v()}).catch(()=>t(1));const g=Mh.getInstance(e_,CC);return r.current&&g.attachToDOM(r.current),g.setShipMoveListener((m,v)=>{o(m),u(v)}),Ld||g.setCameraMoveListener(m=>{h(m)}),()=>{g.detachFromDOM()}},[]),Bi.jsxs("div",{ref:r,style:{width:"100vw",height:"100vh",overflow:"hidden"},children:[Bi.jsx("div",{style:{position:"absolute",top:"60px",left:"20px",fontFamily:"Minecraft, monospace",color:"#FFFFFF",textShadow:"2px 2px 0 #3F3F3F",fontSize:"24px",lineHeight:"1.5",opacity:e,transition:"opacity 0.5s ease",pointerEvents:"none",background:"none"},children:bC.map((p,g)=>Bi.jsx("div",{children:p},g))}),!Ld&&f&&Bi.jsxs("div",{style:{position:"absolute",bottom:"50px",left:"10px",backgroundColor:"rgba(0, 0, 0, 0.6)",color:"lime",fontFamily:"monospace",padding:"8px",borderRadius:"4px",fontSize:"12px",zIndex:1},children:["camera.position.set(",f.x.toFixed(2),",",f.y.toFixed(2),",",f.z.toFixed(2),")"]}),Bi.jsxs("div",{style:{position:"absolute",bottom:"10px",left:"10px",backgroundColor:"rgba(0, 0, 0, 0.6)",color:"cyan",fontFamily:"monospace",padding:"8px",borderRadius:"4px",fontSize:"12px",zIndex:1},children:["ship.position: z=",s.z.toFixed(2),", speed=",l.toFixed(4)]})]})}function LC(){return Bi.jsx(bM,{sx:{width:"100vw",height:"100vh"},children:Bi.jsx(PC,{})})}Gy.createRoot(document.getElementById("root")).render(Bi.jsx(i_.StrictMode,{children:Bi.jsx(LC,{})}));
