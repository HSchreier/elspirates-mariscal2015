var x1=Object.defineProperty;var S1=(r,e,t)=>e in r?x1(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ro=(r,e,t)=>S1(r,typeof e!="symbol"?e+"":e,t);function M1(r,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in r)){const a=Object.getOwnPropertyDescriptor(n,s);a&&Object.defineProperty(r,s,a.get?a:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function Wy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Xy(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var e=r.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var s=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return r[n]}})}),t}var Pd={exports:{}},bl={},Dd={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function E1(){if(z0)return pt;z0=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function _(B){return B===null||typeof B!="object"?null:(B=m&&B[m]||B["@@iterator"],typeof B=="function"?B:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,S={};function y(B,te,we){this.props=B,this.context=te,this.refs=S,this.updater=we||x}y.prototype.isReactComponent={},y.prototype.setState=function(B,te){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,te,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function v(){}v.prototype=y.prototype;function R(B,te,we){this.props=B,this.context=te,this.refs=S,this.updater=we||x}var P=R.prototype=new v;P.constructor=R,E(P,y.prototype),P.isPureReactComponent=!0;var b=Array.isArray,N=Object.prototype.hasOwnProperty,L={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function U(B,te,we){var Q,ue={},Se=null,_e=null;if(te!=null)for(Q in te.ref!==void 0&&(_e=te.ref),te.key!==void 0&&(Se=""+te.key),te)N.call(te,Q)&&!T.hasOwnProperty(Q)&&(ue[Q]=te[Q]);var Te=arguments.length-2;if(Te===1)ue.children=we;else if(1<Te){for(var Xe=Array(Te),Be=0;Be<Te;Be++)Xe[Be]=arguments[Be+2];ue.children=Xe}if(B&&B.defaultProps)for(Q in Te=B.defaultProps,Te)ue[Q]===void 0&&(ue[Q]=Te[Q]);return{$$typeof:r,type:B,key:Se,ref:_e,props:ue,_owner:L.current}}function w(B,te){return{$$typeof:r,type:B.type,key:te,ref:B.ref,props:B.props,_owner:B._owner}}function A(B){return typeof B=="object"&&B!==null&&B.$$typeof===r}function k(B){var te={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(we){return te[we]})}var $=/\/+/g;function j(B,te){return typeof B=="object"&&B!==null&&B.key!=null?k(""+B.key):te.toString(36)}function re(B,te,we,Q,ue){var Se=typeof B;(Se==="undefined"||Se==="boolean")&&(B=null);var _e=!1;if(B===null)_e=!0;else switch(Se){case"string":case"number":_e=!0;break;case"object":switch(B.$$typeof){case r:case e:_e=!0}}if(_e)return _e=B,ue=ue(_e),B=Q===""?"."+j(_e,0):Q,b(ue)?(we="",B!=null&&(we=B.replace($,"$&/")+"/"),re(ue,te,we,"",function(Be){return Be})):ue!=null&&(A(ue)&&(ue=w(ue,we+(!ue.key||_e&&_e.key===ue.key?"":(""+ue.key).replace($,"$&/")+"/")+B)),te.push(ue)),1;if(_e=0,Q=Q===""?".":Q+":",b(B))for(var Te=0;Te<B.length;Te++){Se=B[Te];var Xe=Q+j(Se,Te);_e+=re(Se,te,we,Xe,ue)}else if(Xe=_(B),typeof Xe=="function")for(B=Xe.call(B),Te=0;!(Se=B.next()).done;)Se=Se.value,Xe=Q+j(Se,Te++),_e+=re(Se,te,we,Xe,ue);else if(Se==="object")throw te=String(B),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return _e}function ae(B,te,we){if(B==null)return B;var Q=[],ue=0;return re(B,Q,"","",function(Se){return te.call(we,Se,ue++)}),Q}function K(B){if(B._status===-1){var te=B._result;te=te(),te.then(function(we){(B._status===0||B._status===-1)&&(B._status=1,B._result=we)},function(we){(B._status===0||B._status===-1)&&(B._status=2,B._result=we)}),B._status===-1&&(B._status=0,B._result=te)}if(B._status===1)return B._result.default;throw B._result}var ce={current:null},F={transition:null},se={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:F,ReactCurrentOwner:L};function Z(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ae,forEach:function(B,te,we){ae(B,function(){te.apply(this,arguments)},we)},count:function(B){var te=0;return ae(B,function(){te++}),te},toArray:function(B){return ae(B,function(te){return te})||[]},only:function(B){if(!A(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},pt.Component=y,pt.Fragment=t,pt.Profiler=s,pt.PureComponent=R,pt.StrictMode=n,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,pt.act=Z,pt.cloneElement=function(B,te,we){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Q=E({},B.props),ue=B.key,Se=B.ref,_e=B._owner;if(te!=null){if(te.ref!==void 0&&(Se=te.ref,_e=L.current),te.key!==void 0&&(ue=""+te.key),B.type&&B.type.defaultProps)var Te=B.type.defaultProps;for(Xe in te)N.call(te,Xe)&&!T.hasOwnProperty(Xe)&&(Q[Xe]=te[Xe]===void 0&&Te!==void 0?Te[Xe]:te[Xe])}var Xe=arguments.length-2;if(Xe===1)Q.children=we;else if(1<Xe){Te=Array(Xe);for(var Be=0;Be<Xe;Be++)Te[Be]=arguments[Be+2];Q.children=Te}return{$$typeof:r,type:B.type,key:ue,ref:Se,props:Q,_owner:_e}},pt.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:a,_context:B},B.Consumer=B},pt.createElement=U,pt.createFactory=function(B){var te=U.bind(null,B);return te.type=B,te},pt.createRef=function(){return{current:null}},pt.forwardRef=function(B){return{$$typeof:c,render:B}},pt.isValidElement=A,pt.lazy=function(B){return{$$typeof:p,_payload:{_status:-1,_result:B},_init:K}},pt.memo=function(B,te){return{$$typeof:d,type:B,compare:te===void 0?null:te}},pt.startTransition=function(B){var te=F.transition;F.transition={};try{B()}finally{F.transition=te}},pt.unstable_act=Z,pt.useCallback=function(B,te){return ce.current.useCallback(B,te)},pt.useContext=function(B){return ce.current.useContext(B)},pt.useDebugValue=function(){},pt.useDeferredValue=function(B){return ce.current.useDeferredValue(B)},pt.useEffect=function(B,te){return ce.current.useEffect(B,te)},pt.useId=function(){return ce.current.useId()},pt.useImperativeHandle=function(B,te,we){return ce.current.useImperativeHandle(B,te,we)},pt.useInsertionEffect=function(B,te){return ce.current.useInsertionEffect(B,te)},pt.useLayoutEffect=function(B,te){return ce.current.useLayoutEffect(B,te)},pt.useMemo=function(B,te){return ce.current.useMemo(B,te)},pt.useReducer=function(B,te,we){return ce.current.useReducer(B,te,we)},pt.useRef=function(B){return ce.current.useRef(B)},pt.useState=function(B){return ce.current.useState(B)},pt.useSyncExternalStore=function(B,te,we){return ce.current.useSyncExternalStore(B,te,we)},pt.useTransition=function(){return ce.current.useTransition()},pt.version="18.3.1",pt}var B0;function Lm(){return B0||(B0=1,Dd.exports=E1()),Dd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function T1(){if(H0)return bl;H0=1;var r=Lm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,h,d){var p,m={},_=null,x=null;d!==void 0&&(_=""+d),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(x=h.ref);for(p in h)n.call(h,p)&&!a.hasOwnProperty(p)&&(m[p]=h[p]);if(c&&c.defaultProps)for(p in h=c.defaultProps,h)m[p]===void 0&&(m[p]=h[p]);return{$$typeof:e,type:c,key:_,ref:x,props:m,_owner:s.current}}return bl.Fragment=t,bl.jsx=u,bl.jsxs=u,bl}var V0;function w1(){return V0||(V0=1,Pd.exports=T1()),Pd.exports}var Yr=w1(),Lt=Lm();const jy=Wy(Lt),G0=M1({__proto__:null,default:jy},[Lt]);var Cc={},Ld={exports:{}},li={},Id={exports:{}},Ud={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function A1(){return W0||(W0=1,function(r){function e(F,se){var Z=F.length;F.push(se);e:for(;0<Z;){var B=Z-1>>>1,te=F[B];if(0<s(te,se))F[B]=se,F[Z]=te,Z=B;else break e}}function t(F){return F.length===0?null:F[0]}function n(F){if(F.length===0)return null;var se=F[0],Z=F.pop();if(Z!==se){F[0]=Z;e:for(var B=0,te=F.length,we=te>>>1;B<we;){var Q=2*(B+1)-1,ue=F[Q],Se=Q+1,_e=F[Se];if(0>s(ue,Z))Se<te&&0>s(_e,ue)?(F[B]=_e,F[Se]=Z,B=Se):(F[B]=ue,F[Q]=Z,B=Q);else if(Se<te&&0>s(_e,Z))F[B]=_e,F[Se]=Z,B=Se;else break e}}return se}function s(F,se){var Z=F.sortIndex-se.sortIndex;return Z!==0?Z:F.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();r.unstable_now=function(){return u.now()-c}}var h=[],d=[],p=1,m=null,_=3,x=!1,E=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(F){for(var se=t(d);se!==null;){if(se.callback===null)n(d);else if(se.startTime<=F)n(d),se.sortIndex=se.expirationTime,e(h,se);else break;se=t(d)}}function b(F){if(S=!1,P(F),!E)if(t(h)!==null)E=!0,K(N);else{var se=t(d);se!==null&&ce(b,se.startTime-F)}}function N(F,se){E=!1,S&&(S=!1,v(U),U=-1),x=!0;var Z=_;try{for(P(se),m=t(h);m!==null&&(!(m.expirationTime>se)||F&&!k());){var B=m.callback;if(typeof B=="function"){m.callback=null,_=m.priorityLevel;var te=B(m.expirationTime<=se);se=r.unstable_now(),typeof te=="function"?m.callback=te:m===t(h)&&n(h),P(se)}else n(h);m=t(h)}if(m!==null)var we=!0;else{var Q=t(d);Q!==null&&ce(b,Q.startTime-se),we=!1}return we}finally{m=null,_=Z,x=!1}}var L=!1,T=null,U=-1,w=5,A=-1;function k(){return!(r.unstable_now()-A<w)}function $(){if(T!==null){var F=r.unstable_now();A=F;var se=!0;try{se=T(!0,F)}finally{se?j():(L=!1,T=null)}}else L=!1}var j;if(typeof R=="function")j=function(){R($)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ae=re.port2;re.port1.onmessage=$,j=function(){ae.postMessage(null)}}else j=function(){y($,0)};function K(F){T=F,L||(L=!0,j())}function ce(F,se){U=y(function(){F(r.unstable_now())},se)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_continueExecution=function(){E||x||(E=!0,K(N))},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(F){switch(_){case 1:case 2:case 3:var se=3;break;default:se=_}var Z=_;_=se;try{return F()}finally{_=Z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(F,se){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Z=_;_=F;try{return se()}finally{_=Z}},r.unstable_scheduleCallback=function(F,se,Z){var B=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?B+Z:B):Z=B,F){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=Z+te,F={id:p++,callback:se,priorityLevel:F,startTime:Z,expirationTime:te,sortIndex:-1},Z>B?(F.sortIndex=Z,e(d,F),t(h)===null&&F===t(d)&&(S?(v(U),U=-1):S=!0,ce(b,Z-B))):(F.sortIndex=te,e(h,F),E||x||(E=!0,K(N))),F},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(F){var se=_;return function(){var Z=_;_=se;try{return F.apply(this,arguments)}finally{_=Z}}}}(Ud)),Ud}var X0;function b1(){return X0||(X0=1,Id.exports=A1()),Id.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function C1(){if(j0)return li;j0=1;var r=Lm(),e=b1();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)n.add(o[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function _(i){return h.call(m,i)?!0:h.call(p,i)?!1:d.test(i)?m[i]=!0:(p[i]=!0,!1)}function x(i,o,l,f){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,o,l,f){if(o===null||typeof o>"u"||x(i,o,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function S(i,o,l,f,g,M,C){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=M,this.removeEmptyString=C}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new S(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];y[o]=new S(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new S(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new S(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new S(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new S(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new S(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new S(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new S(i,5,!1,i.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(v,R);y[o]=new S(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(v,R);y[o]=new S(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(v,R);y[o]=new S(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new S(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new S(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,o,l,f){var g=y.hasOwnProperty(o)?y[o]:null;(g!==null?g.type!==0:f||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(E(o,l,g,f)&&(l=null),f||g===null?_(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):g.mustUseProperty?i[g.propertyName]=l===null?g.type===3?!1:"":l:(o=g.attributeName,f=g.attributeNamespace,l===null?i.removeAttribute(o):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,f?i.setAttributeNS(f,o,l):i.setAttribute(o,l))))}var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),L=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),k=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),F=Symbol.iterator;function se(i){return i===null||typeof i!="object"?null:(i=F&&i[F]||i["@@iterator"],typeof i=="function"?i:null)}var Z=Object.assign,B;function te(i){if(B===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);B=o&&o[1]||""}return`
`+B+i}var we=!1;function Q(i,o){if(!i||we)return"";we=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(oe){var f=oe}Reflect.construct(i,[],o)}else{try{o.call()}catch(oe){f=oe}i.call(o.prototype)}else{try{throw Error()}catch(oe){f=oe}i()}}catch(oe){if(oe&&f&&typeof oe.stack=="string"){for(var g=oe.stack.split(`
`),M=f.stack.split(`
`),C=g.length-1,z=M.length-1;1<=C&&0<=z&&g[C]!==M[z];)z--;for(;1<=C&&0<=z;C--,z--)if(g[C]!==M[z]){if(C!==1||z!==1)do if(C--,z--,0>z||g[C]!==M[z]){var V=`
`+g[C].replace(" at new "," at ");return i.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",i.displayName)),V}while(1<=C&&0<=z);break}}}finally{we=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?te(i):""}function ue(i){switch(i.tag){case 5:return te(i.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return i=Q(i.type,!1),i;case 11:return i=Q(i.type.render,!1),i;case 1:return i=Q(i.type,!0),i;default:return""}}function Se(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case T:return"Fragment";case L:return"Portal";case w:return"Profiler";case U:return"StrictMode";case j:return"Suspense";case re:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case k:return(i.displayName||"Context")+".Consumer";case A:return(i._context.displayName||"Context")+".Provider";case $:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ae:return o=i.displayName||null,o!==null?o:Se(i.type)||"Memo";case K:o=i._payload,i=i._init;try{return Se(i(o))}catch{}}return null}function _e(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(o);case 8:return o===U?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Te(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Xe(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Be(i){var o=Xe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),f=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,M=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return g.call(this)},set:function(C){f=""+C,M.call(this,C)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(C){f=""+C},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Rt(i){i._valueTracker||(i._valueTracker=Be(i))}function Pt(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),f="";return i&&(f=Xe(i)?i.checked?"true":"false":i.value),i=f,i!==l?(o.setValue(i),!0):!1}function at(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function H(i,o){var l=o.checked;return Z({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function bn(i,o){var l=o.defaultValue==null?"":o.defaultValue,f=o.checked!=null?o.checked:o.defaultChecked;l=Te(o.value!=null?o.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ht(i,o){o=o.checked,o!=null&&P(i,"checked",o,!1)}function ct(i,o){ht(i,o);var l=Te(o.value),f=o.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?wt(i,o.type,l):o.hasOwnProperty("defaultValue")&&wt(i,o.type,Te(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function je(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var f=o.type;if(!(f!=="submit"&&f!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function wt(i,o,l){(o!=="number"||at(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var He=Array.isArray;function O(i,o,l,f){if(i=i.options,o){o={};for(var g=0;g<l.length;g++)o["$"+l[g]]=!0;for(l=0;l<i.length;l++)g=o.hasOwnProperty("$"+i[l].value),i[l].selected!==g&&(i[l].selected=g),g&&f&&(i[l].defaultSelected=!0)}else{for(l=""+Te(l),o=null,g=0;g<i.length;g++){if(i[g].value===l){i[g].selected=!0,f&&(i[g].defaultSelected=!0);return}o!==null||i[g].disabled||(o=i[g])}o!==null&&(o.selected=!0)}}function D(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ie(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(He(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:Te(l)}}function de(i,o){var l=Te(o.value),f=Te(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function ve(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function he(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?he(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var be,qe=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,f,g){MSApp.execUnsafeLocalFunction(function(){return i(o,l,f,g)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=be.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function $e(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(i){Ne.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),ye[o]=ye[i]})});function Je(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ye.hasOwnProperty(i)&&ye[i]?(""+o).trim():o+"px"}function et(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var f=l.indexOf("--")===0,g=Je(l,o[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,g):i[l]=g}}var Oe=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(i,o){if(o){if(Oe[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function it(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function X(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ce=null,fe=null,pe=null;function De(i){if(i=hl(i)){if(typeof Ce!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Gu(o),Ce(i.stateNode,i.type,o))}}function Pe(i){fe?pe?pe.push(i):pe=[i]:fe=i}function rt(){if(fe){var i=fe,o=pe;if(pe=fe=null,De(i),o)for(i=0;i<o.length;i++)De(o[i])}}function kt(i,o){return i(o)}function dn(){}var xt=!1;function ni(i,o,l){if(xt)return i(o,l);xt=!0;try{return kt(i,o,l)}finally{xt=!1,(fe!==null||pe!==null)&&(dn(),rt())}}function jn(i,o){var l=i.stateNode;if(l===null)return null;var f=Gu(l);if(f===null)return null;l=f[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var Do=!1;if(c)try{var ns={};Object.defineProperty(ns,"passive",{get:function(){Do=!0}}),window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{Do=!1}function wr(i,o,l,f,g,M,C,z,V){var oe=Array.prototype.slice.call(arguments,3);try{o.apply(l,oe)}catch(ge){this.onError(ge)}}var Ar=!1,Ws=null,Xs=!1,is=null,Su={onError:function(i){Ar=!0,Ws=i}};function Lo(i,o,l,f,g,M,C,z,V){Ar=!1,Ws=null,wr.apply(Su,arguments)}function Mu(i,o,l,f,g,M,C,z,V){if(Lo.apply(this,arguments),Ar){if(Ar){var oe=Ws;Ar=!1,Ws=null}else throw Error(t(198));Xs||(Xs=!0,is=oe)}}function sr(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Eu(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Tu(i){if(sr(i)!==i)throw Error(t(188))}function Jf(i){var o=i.alternate;if(!o){if(o=sr(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,f=o;;){var g=l.return;if(g===null)break;var M=g.alternate;if(M===null){if(f=g.return,f!==null){l=f;continue}break}if(g.child===M.child){for(M=g.child;M;){if(M===l)return Tu(g),i;if(M===f)return Tu(g),o;M=M.sibling}throw Error(t(188))}if(l.return!==f.return)l=g,f=M;else{for(var C=!1,z=g.child;z;){if(z===l){C=!0,l=g,f=M;break}if(z===f){C=!0,f=g,l=M;break}z=z.sibling}if(!C){for(z=M.child;z;){if(z===l){C=!0,l=M,f=g;break}if(z===f){C=!0,f=M,l=g;break}z=z.sibling}if(!C)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function wu(i){return i=Jf(i),i!==null?Au(i):null}function Au(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Au(i);if(o!==null)return o;i=i.sibling}return null}var bu=e.unstable_scheduleCallback,I=e.unstable_cancelCallback,Y=e.unstable_shouldYield,le=e.unstable_requestPaint,ee=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,Fe=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Qe=null,ze=null;function _t(i){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(Qe,i,void 0,(i.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:yt,Qt=Math.log,Ht=Math.LN2;function yt(i){return i>>>=0,i===0?32:31-(Qt(i)/Ht|0)|0}var Ye=64,Jt=4194304;function gt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function In(i,o){var l=i.pendingLanes;if(l===0)return 0;var f=0,g=i.suspendedLanes,M=i.pingedLanes,C=l&268435455;if(C!==0){var z=C&~g;z!==0?f=gt(z):(M&=C,M!==0&&(f=gt(M)))}else C=l&~g,C!==0?f=gt(C):M!==0&&(f=gt(M));if(f===0)return 0;if(o!==0&&o!==f&&(o&g)===0&&(g=f&-f,M=o&-o,g>=M||g===16&&(M&4194240)!==0))return o;if((f&4)!==0&&(f|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=f;0<o;)l=31-st(o),g=1<<l,f|=i[l],o&=~g;return f}function rs(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yn(i,o){for(var l=i.suspendedLanes,f=i.pingedLanes,g=i.expirationTimes,M=i.pendingLanes;0<M;){var C=31-st(M),z=1<<C,V=g[C];V===-1?((z&l)===0||(z&f)!==0)&&(g[C]=rs(z,o)):V<=o&&(i.expiredLanes|=z),M&=~z}}function br(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ut(){var i=Ye;return Ye<<=1,(Ye&4194240)===0&&(Ye=64),i}function Un(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function yn(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-st(o),i[o]=l}function Cn(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var g=31-st(l),M=1<<g;o[g]=0,f[g]=-1,i[g]=-1,l&=~M}}function xn(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var f=31-st(l),g=1<<f;g&o|i[f]&o&&(i[f]|=o),l&=~g}}var St=0;function or(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var vg,eh,yg,xg,Sg,th=!1,Cu=[],ss=null,os=null,as=null,Ka=new Map,Za=new Map,ls=[],VS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mg(i,o){switch(i){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":os=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":Ka.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(o.pointerId)}}function Qa(i,o,l,f,g,M){return i===null||i.nativeEvent!==M?(i={blockedOn:o,domEventName:l,eventSystemFlags:f,nativeEvent:M,targetContainers:[g]},o!==null&&(o=hl(o),o!==null&&eh(o)),i):(i.eventSystemFlags|=f,o=i.targetContainers,g!==null&&o.indexOf(g)===-1&&o.push(g),i)}function GS(i,o,l,f,g){switch(o){case"focusin":return ss=Qa(ss,i,o,l,f,g),!0;case"dragenter":return os=Qa(os,i,o,l,f,g),!0;case"mouseover":return as=Qa(as,i,o,l,f,g),!0;case"pointerover":var M=g.pointerId;return Ka.set(M,Qa(Ka.get(M)||null,i,o,l,f,g)),!0;case"gotpointercapture":return M=g.pointerId,Za.set(M,Qa(Za.get(M)||null,i,o,l,f,g)),!0}return!1}function Eg(i){var o=js(i.target);if(o!==null){var l=sr(o);if(l!==null){if(o=l.tag,o===13){if(o=Eu(l),o!==null){i.blockedOn=o,Sg(i.priority,function(){yg(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Ru(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=ih(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);Ct=f,l.target.dispatchEvent(f),Ct=null}else return o=hl(l),o!==null&&eh(o),i.blockedOn=l,!1;o.shift()}return!0}function Tg(i,o,l){Ru(i)&&l.delete(o)}function WS(){th=!1,ss!==null&&Ru(ss)&&(ss=null),os!==null&&Ru(os)&&(os=null),as!==null&&Ru(as)&&(as=null),Ka.forEach(Tg),Za.forEach(Tg)}function Ja(i,o){i.blockedOn===o&&(i.blockedOn=null,th||(th=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,WS)))}function el(i){function o(g){return Ja(g,i)}if(0<Cu.length){Ja(Cu[0],i);for(var l=1;l<Cu.length;l++){var f=Cu[l];f.blockedOn===i&&(f.blockedOn=null)}}for(ss!==null&&Ja(ss,i),os!==null&&Ja(os,i),as!==null&&Ja(as,i),Ka.forEach(o),Za.forEach(o),l=0;l<ls.length;l++)f=ls[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<ls.length&&(l=ls[0],l.blockedOn===null);)Eg(l),l.blockedOn===null&&ls.shift()}var Io=b.ReactCurrentBatchConfig,Pu=!0;function XS(i,o,l,f){var g=St,M=Io.transition;Io.transition=null;try{St=1,nh(i,o,l,f)}finally{St=g,Io.transition=M}}function jS(i,o,l,f){var g=St,M=Io.transition;Io.transition=null;try{St=4,nh(i,o,l,f)}finally{St=g,Io.transition=M}}function nh(i,o,l,f){if(Pu){var g=ih(i,o,l,f);if(g===null)xh(i,o,f,Du,l),Mg(i,f);else if(GS(g,i,o,l,f))f.stopPropagation();else if(Mg(i,f),o&4&&-1<VS.indexOf(i)){for(;g!==null;){var M=hl(g);if(M!==null&&vg(M),M=ih(i,o,l,f),M===null&&xh(i,o,f,Du,l),M===g)break;g=M}g!==null&&f.stopPropagation()}else xh(i,o,f,null,l)}}var Du=null;function ih(i,o,l,f){if(Du=null,i=X(f),i=js(i),i!==null)if(o=sr(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Eu(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Du=i,null}function wg(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case Me:return 1;case Re:return 4;case Le:case Fe:return 16;case tt:return 536870912;default:return 16}default:return 16}}var us=null,rh=null,Lu=null;function Ag(){if(Lu)return Lu;var i,o=rh,l=o.length,f,g="value"in us?us.value:us.textContent,M=g.length;for(i=0;i<l&&o[i]===g[i];i++);var C=l-i;for(f=1;f<=C&&o[l-f]===g[M-f];f++);return Lu=g.slice(i,1<f?1-f:void 0)}function Iu(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Uu(){return!0}function bg(){return!1}function gi(i){function o(l,f,g,M,C){this._reactName=l,this._targetInst=g,this.type=f,this.nativeEvent=M,this.target=C,this.currentTarget=null;for(var z in i)i.hasOwnProperty(z)&&(l=i[z],this[z]=l?l(M):M[z]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Uu:bg,this.isPropagationStopped=bg,this}return Z(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Uu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Uu)},persist:function(){},isPersistent:Uu}),o}var Uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sh=gi(Uo),tl=Z({},Uo,{view:0,detail:0}),YS=gi(tl),oh,ah,nl,Nu=Z({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uh,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==nl&&(nl&&i.type==="mousemove"?(oh=i.screenX-nl.screenX,ah=i.screenY-nl.screenY):ah=oh=0,nl=i),oh)},movementY:function(i){return"movementY"in i?i.movementY:ah}}),Cg=gi(Nu),$S=Z({},Nu,{dataTransfer:0}),qS=gi($S),KS=Z({},tl,{relatedTarget:0}),lh=gi(KS),ZS=Z({},Uo,{animationName:0,elapsedTime:0,pseudoElement:0}),QS=gi(ZS),JS=Z({},Uo,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),eM=gi(JS),tM=Z({},Uo,{data:0}),Rg=gi(tM),nM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sM(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=rM[i])?!!o[i]:!1}function uh(){return sM}var oM=Z({},tl,{key:function(i){if(i.key){var o=nM[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Iu(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?iM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uh,charCode:function(i){return i.type==="keypress"?Iu(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Iu(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),aM=gi(oM),lM=Z({},Nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pg=gi(lM),uM=Z({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uh}),cM=gi(uM),fM=Z({},Uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),hM=gi(fM),dM=Z({},Nu,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),pM=gi(dM),mM=[9,13,27,32],ch=c&&"CompositionEvent"in window,il=null;c&&"documentMode"in document&&(il=document.documentMode);var gM=c&&"TextEvent"in window&&!il,Dg=c&&(!ch||il&&8<il&&11>=il),Lg=" ",Ig=!1;function Ug(i,o){switch(i){case"keyup":return mM.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ng(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var No=!1;function _M(i,o){switch(i){case"compositionend":return Ng(o);case"keypress":return o.which!==32?null:(Ig=!0,Lg);case"textInput":return i=o.data,i===Lg&&Ig?null:i;default:return null}}function vM(i,o){if(No)return i==="compositionend"||!ch&&Ug(i,o)?(i=Ag(),Lu=rh=us=null,No=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Dg&&o.locale!=="ko"?null:o.data;default:return null}}var yM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Og(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!yM[i.type]:o==="textarea"}function Fg(i,o,l,f){Pe(f),o=Bu(o,"onChange"),0<o.length&&(l=new sh("onChange","change",null,l,f),i.push({event:l,listeners:o}))}var rl=null,sl=null;function xM(i){t_(i,0)}function Ou(i){var o=Bo(i);if(Pt(o))return i}function SM(i,o){if(i==="change")return o}var kg=!1;if(c){var fh;if(c){var hh="oninput"in document;if(!hh){var zg=document.createElement("div");zg.setAttribute("oninput","return;"),hh=typeof zg.oninput=="function"}fh=hh}else fh=!1;kg=fh&&(!document.documentMode||9<document.documentMode)}function Bg(){rl&&(rl.detachEvent("onpropertychange",Hg),sl=rl=null)}function Hg(i){if(i.propertyName==="value"&&Ou(sl)){var o=[];Fg(o,sl,i,X(i)),ni(xM,o)}}function MM(i,o,l){i==="focusin"?(Bg(),rl=o,sl=l,rl.attachEvent("onpropertychange",Hg)):i==="focusout"&&Bg()}function EM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ou(sl)}function TM(i,o){if(i==="click")return Ou(o)}function wM(i,o){if(i==="input"||i==="change")return Ou(o)}function AM(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Xi=typeof Object.is=="function"?Object.is:AM;function ol(i,o){if(Xi(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),f=Object.keys(o);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var g=l[f];if(!h.call(o,g)||!Xi(i[g],o[g]))return!1}return!0}function Vg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Gg(i,o){var l=Vg(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=o&&f>=o)return{node:l,offset:o-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Vg(l)}}function Wg(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?Wg(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function Xg(){for(var i=window,o=at();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=at(i.document)}return o}function dh(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function bM(i){var o=Xg(),l=i.focusedElem,f=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&Wg(l.ownerDocument.documentElement,l)){if(f!==null&&dh(l)){if(o=f.start,i=f.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var g=l.textContent.length,M=Math.min(f.start,g);f=f.end===void 0?M:Math.min(f.end,g),!i.extend&&M>f&&(g=f,f=M,M=g),g=Gg(l,M);var C=Gg(l,f);g&&C&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==C.node||i.focusOffset!==C.offset)&&(o=o.createRange(),o.setStart(g.node,g.offset),i.removeAllRanges(),M>f?(i.addRange(o),i.extend(C.node,C.offset)):(o.setEnd(C.node,C.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var CM=c&&"documentMode"in document&&11>=document.documentMode,Oo=null,ph=null,al=null,mh=!1;function jg(i,o,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;mh||Oo==null||Oo!==at(f)||(f=Oo,"selectionStart"in f&&dh(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),al&&ol(al,f)||(al=f,f=Bu(ph,"onSelect"),0<f.length&&(o=new sh("onSelect","select",null,o,l),i.push({event:o,listeners:f}),o.target=Oo)))}function Fu(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var Fo={animationend:Fu("Animation","AnimationEnd"),animationiteration:Fu("Animation","AnimationIteration"),animationstart:Fu("Animation","AnimationStart"),transitionend:Fu("Transition","TransitionEnd")},gh={},Yg={};c&&(Yg=document.createElement("div").style,"AnimationEvent"in window||(delete Fo.animationend.animation,delete Fo.animationiteration.animation,delete Fo.animationstart.animation),"TransitionEvent"in window||delete Fo.transitionend.transition);function ku(i){if(gh[i])return gh[i];if(!Fo[i])return i;var o=Fo[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in Yg)return gh[i]=o[l];return i}var $g=ku("animationend"),qg=ku("animationiteration"),Kg=ku("animationstart"),Zg=ku("transitionend"),Qg=new Map,Jg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cs(i,o){Qg.set(i,o),a(o,[i])}for(var _h=0;_h<Jg.length;_h++){var vh=Jg[_h],RM=vh.toLowerCase(),PM=vh[0].toUpperCase()+vh.slice(1);cs(RM,"on"+PM)}cs($g,"onAnimationEnd"),cs(qg,"onAnimationIteration"),cs(Kg,"onAnimationStart"),cs("dblclick","onDoubleClick"),cs("focusin","onFocus"),cs("focusout","onBlur"),cs(Zg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ll));function e_(i,o,l){var f=i.type||"unknown-event";i.currentTarget=l,Mu(f,o,void 0,i),i.currentTarget=null}function t_(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],g=f.event;f=f.listeners;e:{var M=void 0;if(o)for(var C=f.length-1;0<=C;C--){var z=f[C],V=z.instance,oe=z.currentTarget;if(z=z.listener,V!==M&&g.isPropagationStopped())break e;e_(g,z,oe),M=V}else for(C=0;C<f.length;C++){if(z=f[C],V=z.instance,oe=z.currentTarget,z=z.listener,V!==M&&g.isPropagationStopped())break e;e_(g,z,oe),M=V}}}if(Xs)throw i=is,Xs=!1,is=null,i}function zt(i,o){var l=o[Ah];l===void 0&&(l=o[Ah]=new Set);var f=i+"__bubble";l.has(f)||(n_(o,i,2,!1),l.add(f))}function yh(i,o,l){var f=0;o&&(f|=4),n_(l,i,f,o)}var zu="_reactListening"+Math.random().toString(36).slice(2);function ul(i){if(!i[zu]){i[zu]=!0,n.forEach(function(l){l!=="selectionchange"&&(DM.has(l)||yh(l,!1,i),yh(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[zu]||(o[zu]=!0,yh("selectionchange",!1,o))}}function n_(i,o,l,f){switch(wg(o)){case 1:var g=XS;break;case 4:g=jS;break;default:g=nh}l=g.bind(null,o,l,i),g=void 0,!Do||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(g=!0),f?g!==void 0?i.addEventListener(o,l,{capture:!0,passive:g}):i.addEventListener(o,l,!0):g!==void 0?i.addEventListener(o,l,{passive:g}):i.addEventListener(o,l,!1)}function xh(i,o,l,f,g){var M=f;if((o&1)===0&&(o&2)===0&&f!==null)e:for(;;){if(f===null)return;var C=f.tag;if(C===3||C===4){var z=f.stateNode.containerInfo;if(z===g||z.nodeType===8&&z.parentNode===g)break;if(C===4)for(C=f.return;C!==null;){var V=C.tag;if((V===3||V===4)&&(V=C.stateNode.containerInfo,V===g||V.nodeType===8&&V.parentNode===g))return;C=C.return}for(;z!==null;){if(C=js(z),C===null)return;if(V=C.tag,V===5||V===6){f=M=C;continue e}z=z.parentNode}}f=f.return}ni(function(){var oe=M,ge=X(l),xe=[];e:{var me=Qg.get(i);if(me!==void 0){var Ie=sh,ke=i;switch(i){case"keypress":if(Iu(l)===0)break e;case"keydown":case"keyup":Ie=aM;break;case"focusin":ke="focus",Ie=lh;break;case"focusout":ke="blur",Ie=lh;break;case"beforeblur":case"afterblur":Ie=lh;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=qS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=cM;break;case $g:case qg:case Kg:Ie=QS;break;case Zg:Ie=hM;break;case"scroll":Ie=YS;break;case"wheel":Ie=pM;break;case"copy":case"cut":case"paste":Ie=eM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Pg}var Ve=(o&4)!==0,sn=!Ve&&i==="scroll",J=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var G=oe,ne;G!==null;){ne=G;var Ee=ne.stateNode;if(ne.tag===5&&Ee!==null&&(ne=Ee,J!==null&&(Ee=jn(G,J),Ee!=null&&Ve.push(cl(G,Ee,ne)))),sn)break;G=G.return}0<Ve.length&&(me=new Ie(me,ke,null,l,ge),xe.push({event:me,listeners:Ve}))}}if((o&7)===0){e:{if(me=i==="mouseover"||i==="pointerover",Ie=i==="mouseout"||i==="pointerout",me&&l!==Ct&&(ke=l.relatedTarget||l.fromElement)&&(js(ke)||ke[Cr]))break e;if((Ie||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Ie?(ke=l.relatedTarget||l.toElement,Ie=oe,ke=ke?js(ke):null,ke!==null&&(sn=sr(ke),ke!==sn||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Ie=null,ke=oe),Ie!==ke)){if(Ve=Cg,Ee="onMouseLeave",J="onMouseEnter",G="mouse",(i==="pointerout"||i==="pointerover")&&(Ve=Pg,Ee="onPointerLeave",J="onPointerEnter",G="pointer"),sn=Ie==null?me:Bo(Ie),ne=ke==null?me:Bo(ke),me=new Ve(Ee,G+"leave",Ie,l,ge),me.target=sn,me.relatedTarget=ne,Ee=null,js(ge)===oe&&(Ve=new Ve(J,G+"enter",ke,l,ge),Ve.target=ne,Ve.relatedTarget=sn,Ee=Ve),sn=Ee,Ie&&ke)t:{for(Ve=Ie,J=ke,G=0,ne=Ve;ne;ne=ko(ne))G++;for(ne=0,Ee=J;Ee;Ee=ko(Ee))ne++;for(;0<G-ne;)Ve=ko(Ve),G--;for(;0<ne-G;)J=ko(J),ne--;for(;G--;){if(Ve===J||J!==null&&Ve===J.alternate)break t;Ve=ko(Ve),J=ko(J)}Ve=null}else Ve=null;Ie!==null&&i_(xe,me,Ie,Ve,!1),ke!==null&&sn!==null&&i_(xe,sn,ke,Ve,!0)}}e:{if(me=oe?Bo(oe):window,Ie=me.nodeName&&me.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&me.type==="file")var We=SM;else if(Og(me))if(kg)We=wM;else{We=EM;var Ke=MM}else(Ie=me.nodeName)&&Ie.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(We=TM);if(We&&(We=We(i,oe))){Fg(xe,We,l,ge);break e}Ke&&Ke(i,me,oe),i==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&wt(me,"number",me.value)}switch(Ke=oe?Bo(oe):window,i){case"focusin":(Og(Ke)||Ke.contentEditable==="true")&&(Oo=Ke,ph=oe,al=null);break;case"focusout":al=ph=Oo=null;break;case"mousedown":mh=!0;break;case"contextmenu":case"mouseup":case"dragend":mh=!1,jg(xe,l,ge);break;case"selectionchange":if(CM)break;case"keydown":case"keyup":jg(xe,l,ge)}var Ze;if(ch)e:{switch(i){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else No?Ug(i,l)&&(nt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(nt="onCompositionStart");nt&&(Dg&&l.locale!=="ko"&&(No||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&No&&(Ze=Ag()):(us=ge,rh="value"in us?us.value:us.textContent,No=!0)),Ke=Bu(oe,nt),0<Ke.length&&(nt=new Rg(nt,i,null,l,ge),xe.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=Ng(l),Ze!==null&&(nt.data=Ze)))),(Ze=gM?_M(i,l):vM(i,l))&&(oe=Bu(oe,"onBeforeInput"),0<oe.length&&(ge=new Rg("onBeforeInput","beforeinput",null,l,ge),xe.push({event:ge,listeners:oe}),ge.data=Ze))}t_(xe,o)})}function cl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Bu(i,o){for(var l=o+"Capture",f=[];i!==null;){var g=i,M=g.stateNode;g.tag===5&&M!==null&&(g=M,M=jn(i,l),M!=null&&f.unshift(cl(i,M,g)),M=jn(i,o),M!=null&&f.push(cl(i,M,g))),i=i.return}return f}function ko(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function i_(i,o,l,f,g){for(var M=o._reactName,C=[];l!==null&&l!==f;){var z=l,V=z.alternate,oe=z.stateNode;if(V!==null&&V===f)break;z.tag===5&&oe!==null&&(z=oe,g?(V=jn(l,M),V!=null&&C.unshift(cl(l,V,z))):g||(V=jn(l,M),V!=null&&C.push(cl(l,V,z)))),l=l.return}C.length!==0&&i.push({event:o,listeners:C})}var LM=/\r\n?/g,IM=/\u0000|\uFFFD/g;function r_(i){return(typeof i=="string"?i:""+i).replace(LM,`
`).replace(IM,"")}function Hu(i,o,l){if(o=r_(o),r_(i)!==o&&l)throw Error(t(425))}function Vu(){}var Sh=null,Mh=null;function Eh(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Th=typeof setTimeout=="function"?setTimeout:void 0,UM=typeof clearTimeout=="function"?clearTimeout:void 0,s_=typeof Promise=="function"?Promise:void 0,NM=typeof queueMicrotask=="function"?queueMicrotask:typeof s_<"u"?function(i){return s_.resolve(null).then(i).catch(OM)}:Th;function OM(i){setTimeout(function(){throw i})}function wh(i,o){var l=o,f=0;do{var g=l.nextSibling;if(i.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(f===0){i.removeChild(g),el(o);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=g}while(l);el(o)}function fs(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function o_(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var zo=Math.random().toString(36).slice(2),ar="__reactFiber$"+zo,fl="__reactProps$"+zo,Cr="__reactContainer$"+zo,Ah="__reactEvents$"+zo,FM="__reactListeners$"+zo,kM="__reactHandles$"+zo;function js(i){var o=i[ar];if(o)return o;for(var l=i.parentNode;l;){if(o=l[Cr]||l[ar]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=o_(i);i!==null;){if(l=i[ar])return l;i=o_(i)}return o}i=l,l=i.parentNode}return null}function hl(i){return i=i[ar]||i[Cr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Bo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Gu(i){return i[fl]||null}var bh=[],Ho=-1;function hs(i){return{current:i}}function Bt(i){0>Ho||(i.current=bh[Ho],bh[Ho]=null,Ho--)}function Ft(i,o){Ho++,bh[Ho]=i.current,i.current=o}var ds={},Nn=hs(ds),ii=hs(!1),Ys=ds;function Vo(i,o){var l=i.type.contextTypes;if(!l)return ds;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===o)return f.__reactInternalMemoizedMaskedChildContext;var g={},M;for(M in l)g[M]=o[M];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=g),g}function ri(i){return i=i.childContextTypes,i!=null}function Wu(){Bt(ii),Bt(Nn)}function a_(i,o,l){if(Nn.current!==ds)throw Error(t(168));Ft(Nn,o),Ft(ii,l)}function l_(i,o,l){var f=i.stateNode;if(o=o.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var g in f)if(!(g in o))throw Error(t(108,_e(i)||"Unknown",g));return Z({},l,f)}function Xu(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||ds,Ys=Nn.current,Ft(Nn,i),Ft(ii,ii.current),!0}function u_(i,o,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=l_(i,o,Ys),f.__reactInternalMemoizedMergedChildContext=i,Bt(ii),Bt(Nn),Ft(Nn,i)):Bt(ii),Ft(ii,l)}var Rr=null,ju=!1,Ch=!1;function c_(i){Rr===null?Rr=[i]:Rr.push(i)}function zM(i){ju=!0,c_(i)}function ps(){if(!Ch&&Rr!==null){Ch=!0;var i=0,o=St;try{var l=Rr;for(St=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}Rr=null,ju=!1}catch(g){throw Rr!==null&&(Rr=Rr.slice(i+1)),bu(Me,ps),g}finally{St=o,Ch=!1}}return null}var Go=[],Wo=0,Yu=null,$u=0,Li=[],Ii=0,$s=null,Pr=1,Dr="";function qs(i,o){Go[Wo++]=$u,Go[Wo++]=Yu,Yu=i,$u=o}function f_(i,o,l){Li[Ii++]=Pr,Li[Ii++]=Dr,Li[Ii++]=$s,$s=i;var f=Pr;i=Dr;var g=32-st(f)-1;f&=~(1<<g),l+=1;var M=32-st(o)+g;if(30<M){var C=g-g%5;M=(f&(1<<C)-1).toString(32),f>>=C,g-=C,Pr=1<<32-st(o)+g|l<<g|f,Dr=M+i}else Pr=1<<M|l<<g|f,Dr=i}function Rh(i){i.return!==null&&(qs(i,1),f_(i,1,0))}function Ph(i){for(;i===Yu;)Yu=Go[--Wo],Go[Wo]=null,$u=Go[--Wo],Go[Wo]=null;for(;i===$s;)$s=Li[--Ii],Li[Ii]=null,Dr=Li[--Ii],Li[Ii]=null,Pr=Li[--Ii],Li[Ii]=null}var _i=null,vi=null,Vt=!1,ji=null;function h_(i,o){var l=Fi(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function d_(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,_i=i,vi=fs(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,_i=i,vi=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=$s!==null?{id:Pr,overflow:Dr}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Fi(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,_i=i,vi=null,!0):!1;default:return!1}}function Dh(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Lh(i){if(Vt){var o=vi;if(o){var l=o;if(!d_(i,o)){if(Dh(i))throw Error(t(418));o=fs(l.nextSibling);var f=_i;o&&d_(i,o)?h_(f,l):(i.flags=i.flags&-4097|2,Vt=!1,_i=i)}}else{if(Dh(i))throw Error(t(418));i.flags=i.flags&-4097|2,Vt=!1,_i=i}}}function p_(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;_i=i}function qu(i){if(i!==_i)return!1;if(!Vt)return p_(i),Vt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Eh(i.type,i.memoizedProps)),o&&(o=vi)){if(Dh(i))throw m_(),Error(t(418));for(;o;)h_(i,o),o=fs(o.nextSibling)}if(p_(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){vi=fs(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}vi=null}}else vi=_i?fs(i.stateNode.nextSibling):null;return!0}function m_(){for(var i=vi;i;)i=fs(i.nextSibling)}function Xo(){vi=_i=null,Vt=!1}function Ih(i){ji===null?ji=[i]:ji.push(i)}var BM=b.ReactCurrentBatchConfig;function dl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var g=f,M=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===M?o.ref:(o=function(C){var z=g.refs;C===null?delete z[M]:z[M]=C},o._stringRef=M,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Ku(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function g_(i){var o=i._init;return o(i._payload)}function __(i){function o(J,G){if(i){var ne=J.deletions;ne===null?(J.deletions=[G],J.flags|=16):ne.push(G)}}function l(J,G){if(!i)return null;for(;G!==null;)o(J,G),G=G.sibling;return null}function f(J,G){for(J=new Map;G!==null;)G.key!==null?J.set(G.key,G):J.set(G.index,G),G=G.sibling;return J}function g(J,G){return J=Ms(J,G),J.index=0,J.sibling=null,J}function M(J,G,ne){return J.index=ne,i?(ne=J.alternate,ne!==null?(ne=ne.index,ne<G?(J.flags|=2,G):ne):(J.flags|=2,G)):(J.flags|=1048576,G)}function C(J){return i&&J.alternate===null&&(J.flags|=2),J}function z(J,G,ne,Ee){return G===null||G.tag!==6?(G=Td(ne,J.mode,Ee),G.return=J,G):(G=g(G,ne),G.return=J,G)}function V(J,G,ne,Ee){var We=ne.type;return We===T?ge(J,G,ne.props.children,Ee,ne.key):G!==null&&(G.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===K&&g_(We)===G.type)?(Ee=g(G,ne.props),Ee.ref=dl(J,G,ne),Ee.return=J,Ee):(Ee=xc(ne.type,ne.key,ne.props,null,J.mode,Ee),Ee.ref=dl(J,G,ne),Ee.return=J,Ee)}function oe(J,G,ne,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==ne.containerInfo||G.stateNode.implementation!==ne.implementation?(G=wd(ne,J.mode,Ee),G.return=J,G):(G=g(G,ne.children||[]),G.return=J,G)}function ge(J,G,ne,Ee,We){return G===null||G.tag!==7?(G=io(ne,J.mode,Ee,We),G.return=J,G):(G=g(G,ne),G.return=J,G)}function xe(J,G,ne){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Td(""+G,J.mode,ne),G.return=J,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case N:return ne=xc(G.type,G.key,G.props,null,J.mode,ne),ne.ref=dl(J,null,G),ne.return=J,ne;case L:return G=wd(G,J.mode,ne),G.return=J,G;case K:var Ee=G._init;return xe(J,Ee(G._payload),ne)}if(He(G)||se(G))return G=io(G,J.mode,ne,null),G.return=J,G;Ku(J,G)}return null}function me(J,G,ne,Ee){var We=G!==null?G.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return We!==null?null:z(J,G,""+ne,Ee);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case N:return ne.key===We?V(J,G,ne,Ee):null;case L:return ne.key===We?oe(J,G,ne,Ee):null;case K:return We=ne._init,me(J,G,We(ne._payload),Ee)}if(He(ne)||se(ne))return We!==null?null:ge(J,G,ne,Ee,null);Ku(J,ne)}return null}function Ie(J,G,ne,Ee,We){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return J=J.get(ne)||null,z(G,J,""+Ee,We);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case N:return J=J.get(Ee.key===null?ne:Ee.key)||null,V(G,J,Ee,We);case L:return J=J.get(Ee.key===null?ne:Ee.key)||null,oe(G,J,Ee,We);case K:var Ke=Ee._init;return Ie(J,G,ne,Ke(Ee._payload),We)}if(He(Ee)||se(Ee))return J=J.get(ne)||null,ge(G,J,Ee,We,null);Ku(G,Ee)}return null}function ke(J,G,ne,Ee){for(var We=null,Ke=null,Ze=G,nt=G=0,En=null;Ze!==null&&nt<ne.length;nt++){Ze.index>nt?(En=Ze,Ze=null):En=Ze.sibling;var Et=me(J,Ze,ne[nt],Ee);if(Et===null){Ze===null&&(Ze=En);break}i&&Ze&&Et.alternate===null&&o(J,Ze),G=M(Et,G,nt),Ke===null?We=Et:Ke.sibling=Et,Ke=Et,Ze=En}if(nt===ne.length)return l(J,Ze),Vt&&qs(J,nt),We;if(Ze===null){for(;nt<ne.length;nt++)Ze=xe(J,ne[nt],Ee),Ze!==null&&(G=M(Ze,G,nt),Ke===null?We=Ze:Ke.sibling=Ze,Ke=Ze);return Vt&&qs(J,nt),We}for(Ze=f(J,Ze);nt<ne.length;nt++)En=Ie(Ze,J,nt,ne[nt],Ee),En!==null&&(i&&En.alternate!==null&&Ze.delete(En.key===null?nt:En.key),G=M(En,G,nt),Ke===null?We=En:Ke.sibling=En,Ke=En);return i&&Ze.forEach(function(Es){return o(J,Es)}),Vt&&qs(J,nt),We}function Ve(J,G,ne,Ee){var We=se(ne);if(typeof We!="function")throw Error(t(150));if(ne=We.call(ne),ne==null)throw Error(t(151));for(var Ke=We=null,Ze=G,nt=G=0,En=null,Et=ne.next();Ze!==null&&!Et.done;nt++,Et=ne.next()){Ze.index>nt?(En=Ze,Ze=null):En=Ze.sibling;var Es=me(J,Ze,Et.value,Ee);if(Es===null){Ze===null&&(Ze=En);break}i&&Ze&&Es.alternate===null&&o(J,Ze),G=M(Es,G,nt),Ke===null?We=Es:Ke.sibling=Es,Ke=Es,Ze=En}if(Et.done)return l(J,Ze),Vt&&qs(J,nt),We;if(Ze===null){for(;!Et.done;nt++,Et=ne.next())Et=xe(J,Et.value,Ee),Et!==null&&(G=M(Et,G,nt),Ke===null?We=Et:Ke.sibling=Et,Ke=Et);return Vt&&qs(J,nt),We}for(Ze=f(J,Ze);!Et.done;nt++,Et=ne.next())Et=Ie(Ze,J,nt,Et.value,Ee),Et!==null&&(i&&Et.alternate!==null&&Ze.delete(Et.key===null?nt:Et.key),G=M(Et,G,nt),Ke===null?We=Et:Ke.sibling=Et,Ke=Et);return i&&Ze.forEach(function(y1){return o(J,y1)}),Vt&&qs(J,nt),We}function sn(J,G,ne,Ee){if(typeof ne=="object"&&ne!==null&&ne.type===T&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case N:e:{for(var We=ne.key,Ke=G;Ke!==null;){if(Ke.key===We){if(We=ne.type,We===T){if(Ke.tag===7){l(J,Ke.sibling),G=g(Ke,ne.props.children),G.return=J,J=G;break e}}else if(Ke.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===K&&g_(We)===Ke.type){l(J,Ke.sibling),G=g(Ke,ne.props),G.ref=dl(J,Ke,ne),G.return=J,J=G;break e}l(J,Ke);break}else o(J,Ke);Ke=Ke.sibling}ne.type===T?(G=io(ne.props.children,J.mode,Ee,ne.key),G.return=J,J=G):(Ee=xc(ne.type,ne.key,ne.props,null,J.mode,Ee),Ee.ref=dl(J,G,ne),Ee.return=J,J=Ee)}return C(J);case L:e:{for(Ke=ne.key;G!==null;){if(G.key===Ke)if(G.tag===4&&G.stateNode.containerInfo===ne.containerInfo&&G.stateNode.implementation===ne.implementation){l(J,G.sibling),G=g(G,ne.children||[]),G.return=J,J=G;break e}else{l(J,G);break}else o(J,G);G=G.sibling}G=wd(ne,J.mode,Ee),G.return=J,J=G}return C(J);case K:return Ke=ne._init,sn(J,G,Ke(ne._payload),Ee)}if(He(ne))return ke(J,G,ne,Ee);if(se(ne))return Ve(J,G,ne,Ee);Ku(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,G!==null&&G.tag===6?(l(J,G.sibling),G=g(G,ne),G.return=J,J=G):(l(J,G),G=Td(ne,J.mode,Ee),G.return=J,J=G),C(J)):l(J,G)}return sn}var jo=__(!0),v_=__(!1),Zu=hs(null),Qu=null,Yo=null,Uh=null;function Nh(){Uh=Yo=Qu=null}function Oh(i){var o=Zu.current;Bt(Zu),i._currentValue=o}function Fh(i,o,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,f!==null&&(f.childLanes|=o)):f!==null&&(f.childLanes&o)!==o&&(f.childLanes|=o),i===l)break;i=i.return}}function $o(i,o){Qu=i,Uh=Yo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(si=!0),i.firstContext=null)}function Ui(i){var o=i._currentValue;if(Uh!==i)if(i={context:i,memoizedValue:o,next:null},Yo===null){if(Qu===null)throw Error(t(308));Yo=i,Qu.dependencies={lanes:0,firstContext:i}}else Yo=Yo.next=i;return o}var Ks=null;function kh(i){Ks===null?Ks=[i]:Ks.push(i)}function y_(i,o,l,f){var g=o.interleaved;return g===null?(l.next=l,kh(o)):(l.next=g.next,g.next=l),o.interleaved=l,Lr(i,f)}function Lr(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var ms=!1;function zh(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function x_(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Ir(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function gs(i,o,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(Mt&2)!==0){var g=f.pending;return g===null?o.next=o:(o.next=g.next,g.next=o),f.pending=o,Lr(i,l)}return g=f.interleaved,g===null?(o.next=o,kh(f)):(o.next=g.next,g.next=o),f.interleaved=o,Lr(i,l)}function Ju(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var f=o.lanes;f&=i.pendingLanes,l|=f,o.lanes=l,xn(i,l)}}function S_(i,o){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var g=null,M=null;if(l=l.firstBaseUpdate,l!==null){do{var C={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};M===null?g=M=C:M=M.next=C,l=l.next}while(l!==null);M===null?g=M=o:M=M.next=o}else g=M=o;l={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:M,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function ec(i,o,l,f){var g=i.updateQueue;ms=!1;var M=g.firstBaseUpdate,C=g.lastBaseUpdate,z=g.shared.pending;if(z!==null){g.shared.pending=null;var V=z,oe=V.next;V.next=null,C===null?M=oe:C.next=oe,C=V;var ge=i.alternate;ge!==null&&(ge=ge.updateQueue,z=ge.lastBaseUpdate,z!==C&&(z===null?ge.firstBaseUpdate=oe:z.next=oe,ge.lastBaseUpdate=V))}if(M!==null){var xe=g.baseState;C=0,ge=oe=V=null,z=M;do{var me=z.lane,Ie=z.eventTime;if((f&me)===me){ge!==null&&(ge=ge.next={eventTime:Ie,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var ke=i,Ve=z;switch(me=o,Ie=l,Ve.tag){case 1:if(ke=Ve.payload,typeof ke=="function"){xe=ke.call(Ie,xe,me);break e}xe=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=Ve.payload,me=typeof ke=="function"?ke.call(Ie,xe,me):ke,me==null)break e;xe=Z({},xe,me);break e;case 2:ms=!0}}z.callback!==null&&z.lane!==0&&(i.flags|=64,me=g.effects,me===null?g.effects=[z]:me.push(z))}else Ie={eventTime:Ie,lane:me,tag:z.tag,payload:z.payload,callback:z.callback,next:null},ge===null?(oe=ge=Ie,V=xe):ge=ge.next=Ie,C|=me;if(z=z.next,z===null){if(z=g.shared.pending,z===null)break;me=z,z=me.next,me.next=null,g.lastBaseUpdate=me,g.shared.pending=null}}while(!0);if(ge===null&&(V=xe),g.baseState=V,g.firstBaseUpdate=oe,g.lastBaseUpdate=ge,o=g.shared.interleaved,o!==null){g=o;do C|=g.lane,g=g.next;while(g!==o)}else M===null&&(g.shared.lanes=0);Js|=C,i.lanes=C,i.memoizedState=xe}}function M_(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var f=i[o],g=f.callback;if(g!==null){if(f.callback=null,f=l,typeof g!="function")throw Error(t(191,g));g.call(f)}}}var pl={},lr=hs(pl),ml=hs(pl),gl=hs(pl);function Zs(i){if(i===pl)throw Error(t(174));return i}function Bh(i,o){switch(Ft(gl,o),Ft(ml,i),Ft(lr,pl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Ge(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Ge(o,i)}Bt(lr),Ft(lr,o)}function qo(){Bt(lr),Bt(ml),Bt(gl)}function E_(i){Zs(gl.current);var o=Zs(lr.current),l=Ge(o,i.type);o!==l&&(Ft(ml,i),Ft(lr,l))}function Hh(i){ml.current===i&&(Bt(lr),Bt(ml))}var Yt=hs(0);function tc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Vh=[];function Gh(){for(var i=0;i<Vh.length;i++)Vh[i]._workInProgressVersionPrimary=null;Vh.length=0}var nc=b.ReactCurrentDispatcher,Wh=b.ReactCurrentBatchConfig,Qs=0,$t=null,pn=null,Sn=null,ic=!1,_l=!1,vl=0,HM=0;function On(){throw Error(t(321))}function Xh(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!Xi(i[l],o[l]))return!1;return!0}function jh(i,o,l,f,g,M){if(Qs=M,$t=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,nc.current=i===null||i.memoizedState===null?XM:jM,i=l(f,g),_l){M=0;do{if(_l=!1,vl=0,25<=M)throw Error(t(301));M+=1,Sn=pn=null,o.updateQueue=null,nc.current=YM,i=l(f,g)}while(_l)}if(nc.current=oc,o=pn!==null&&pn.next!==null,Qs=0,Sn=pn=$t=null,ic=!1,o)throw Error(t(300));return i}function Yh(){var i=vl!==0;return vl=0,i}function ur(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?$t.memoizedState=Sn=i:Sn=Sn.next=i,Sn}function Ni(){if(pn===null){var i=$t.alternate;i=i!==null?i.memoizedState:null}else i=pn.next;var o=Sn===null?$t.memoizedState:Sn.next;if(o!==null)Sn=o,pn=i;else{if(i===null)throw Error(t(310));pn=i,i={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},Sn===null?$t.memoizedState=Sn=i:Sn=Sn.next=i}return Sn}function yl(i,o){return typeof o=="function"?o(i):o}function $h(i){var o=Ni(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=pn,g=f.baseQueue,M=l.pending;if(M!==null){if(g!==null){var C=g.next;g.next=M.next,M.next=C}f.baseQueue=g=M,l.pending=null}if(g!==null){M=g.next,f=f.baseState;var z=C=null,V=null,oe=M;do{var ge=oe.lane;if((Qs&ge)===ge)V!==null&&(V=V.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),f=oe.hasEagerState?oe.eagerState:i(f,oe.action);else{var xe={lane:ge,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};V===null?(z=V=xe,C=f):V=V.next=xe,$t.lanes|=ge,Js|=ge}oe=oe.next}while(oe!==null&&oe!==M);V===null?C=f:V.next=z,Xi(f,o.memoizedState)||(si=!0),o.memoizedState=f,o.baseState=C,o.baseQueue=V,l.lastRenderedState=f}if(i=l.interleaved,i!==null){g=i;do M=g.lane,$t.lanes|=M,Js|=M,g=g.next;while(g!==i)}else g===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function qh(i){var o=Ni(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,g=l.pending,M=o.memoizedState;if(g!==null){l.pending=null;var C=g=g.next;do M=i(M,C.action),C=C.next;while(C!==g);Xi(M,o.memoizedState)||(si=!0),o.memoizedState=M,o.baseQueue===null&&(o.baseState=M),l.lastRenderedState=M}return[M,f]}function T_(){}function w_(i,o){var l=$t,f=Ni(),g=o(),M=!Xi(f.memoizedState,g);if(M&&(f.memoizedState=g,si=!0),f=f.queue,Kh(C_.bind(null,l,f,i),[i]),f.getSnapshot!==o||M||Sn!==null&&Sn.memoizedState.tag&1){if(l.flags|=2048,xl(9,b_.bind(null,l,f,g,o),void 0,null),Mn===null)throw Error(t(349));(Qs&30)!==0||A_(l,o,g)}return g}function A_(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=$t.updateQueue,o===null?(o={lastEffect:null,stores:null},$t.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function b_(i,o,l,f){o.value=l,o.getSnapshot=f,R_(o)&&P_(i)}function C_(i,o,l){return l(function(){R_(o)&&P_(i)})}function R_(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!Xi(i,l)}catch{return!0}}function P_(i){var o=Lr(i,1);o!==null&&Ki(o,i,1,-1)}function D_(i){var o=ur();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:i},o.queue=i,i=i.dispatch=WM.bind(null,$t,i),[o.memoizedState,i]}function xl(i,o,l,f){return i={tag:i,create:o,destroy:l,deps:f,next:null},o=$t.updateQueue,o===null?(o={lastEffect:null,stores:null},$t.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,o.lastEffect=i)),i}function L_(){return Ni().memoizedState}function rc(i,o,l,f){var g=ur();$t.flags|=i,g.memoizedState=xl(1|o,l,void 0,f===void 0?null:f)}function sc(i,o,l,f){var g=Ni();f=f===void 0?null:f;var M=void 0;if(pn!==null){var C=pn.memoizedState;if(M=C.destroy,f!==null&&Xh(f,C.deps)){g.memoizedState=xl(o,l,M,f);return}}$t.flags|=i,g.memoizedState=xl(1|o,l,M,f)}function I_(i,o){return rc(8390656,8,i,o)}function Kh(i,o){return sc(2048,8,i,o)}function U_(i,o){return sc(4,2,i,o)}function N_(i,o){return sc(4,4,i,o)}function O_(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function F_(i,o,l){return l=l!=null?l.concat([i]):null,sc(4,4,O_.bind(null,o,i),l)}function Zh(){}function k_(i,o){var l=Ni();o=o===void 0?null:o;var f=l.memoizedState;return f!==null&&o!==null&&Xh(o,f[1])?f[0]:(l.memoizedState=[i,o],i)}function z_(i,o){var l=Ni();o=o===void 0?null:o;var f=l.memoizedState;return f!==null&&o!==null&&Xh(o,f[1])?f[0]:(i=i(),l.memoizedState=[i,o],i)}function B_(i,o,l){return(Qs&21)===0?(i.baseState&&(i.baseState=!1,si=!0),i.memoizedState=l):(Xi(l,o)||(l=Ut(),$t.lanes|=l,Js|=l,i.baseState=!0),o)}function VM(i,o){var l=St;St=l!==0&&4>l?l:4,i(!0);var f=Wh.transition;Wh.transition={};try{i(!1),o()}finally{St=l,Wh.transition=f}}function H_(){return Ni().memoizedState}function GM(i,o,l){var f=xs(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},V_(i))G_(o,l);else if(l=y_(i,o,l,f),l!==null){var g=qn();Ki(l,i,f,g),W_(l,o,f)}}function WM(i,o,l){var f=xs(i),g={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(V_(i))G_(o,g);else{var M=i.alternate;if(i.lanes===0&&(M===null||M.lanes===0)&&(M=o.lastRenderedReducer,M!==null))try{var C=o.lastRenderedState,z=M(C,l);if(g.hasEagerState=!0,g.eagerState=z,Xi(z,C)){var V=o.interleaved;V===null?(g.next=g,kh(o)):(g.next=V.next,V.next=g),o.interleaved=g;return}}catch{}finally{}l=y_(i,o,g,f),l!==null&&(g=qn(),Ki(l,i,f,g),W_(l,o,f))}}function V_(i){var o=i.alternate;return i===$t||o!==null&&o===$t}function G_(i,o){_l=ic=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function W_(i,o,l){if((l&4194240)!==0){var f=o.lanes;f&=i.pendingLanes,l|=f,o.lanes=l,xn(i,l)}}var oc={readContext:Ui,useCallback:On,useContext:On,useEffect:On,useImperativeHandle:On,useInsertionEffect:On,useLayoutEffect:On,useMemo:On,useReducer:On,useRef:On,useState:On,useDebugValue:On,useDeferredValue:On,useTransition:On,useMutableSource:On,useSyncExternalStore:On,useId:On,unstable_isNewReconciler:!1},XM={readContext:Ui,useCallback:function(i,o){return ur().memoizedState=[i,o===void 0?null:o],i},useContext:Ui,useEffect:I_,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,rc(4194308,4,O_.bind(null,o,i),l)},useLayoutEffect:function(i,o){return rc(4194308,4,i,o)},useInsertionEffect:function(i,o){return rc(4,2,i,o)},useMemo:function(i,o){var l=ur();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var f=ur();return o=l!==void 0?l(o):o,f.memoizedState=f.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},f.queue=i,i=i.dispatch=GM.bind(null,$t,i),[f.memoizedState,i]},useRef:function(i){var o=ur();return i={current:i},o.memoizedState=i},useState:D_,useDebugValue:Zh,useDeferredValue:function(i){return ur().memoizedState=i},useTransition:function(){var i=D_(!1),o=i[0];return i=VM.bind(null,i[1]),ur().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var f=$t,g=ur();if(Vt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Mn===null)throw Error(t(349));(Qs&30)!==0||A_(f,o,l)}g.memoizedState=l;var M={value:l,getSnapshot:o};return g.queue=M,I_(C_.bind(null,f,M,i),[i]),f.flags|=2048,xl(9,b_.bind(null,f,M,l,o),void 0,null),l},useId:function(){var i=ur(),o=Mn.identifierPrefix;if(Vt){var l=Dr,f=Pr;l=(f&~(1<<32-st(f)-1)).toString(32)+l,o=":"+o+"R"+l,l=vl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=HM++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},jM={readContext:Ui,useCallback:k_,useContext:Ui,useEffect:Kh,useImperativeHandle:F_,useInsertionEffect:U_,useLayoutEffect:N_,useMemo:z_,useReducer:$h,useRef:L_,useState:function(){return $h(yl)},useDebugValue:Zh,useDeferredValue:function(i){var o=Ni();return B_(o,pn.memoizedState,i)},useTransition:function(){var i=$h(yl)[0],o=Ni().memoizedState;return[i,o]},useMutableSource:T_,useSyncExternalStore:w_,useId:H_,unstable_isNewReconciler:!1},YM={readContext:Ui,useCallback:k_,useContext:Ui,useEffect:Kh,useImperativeHandle:F_,useInsertionEffect:U_,useLayoutEffect:N_,useMemo:z_,useReducer:qh,useRef:L_,useState:function(){return qh(yl)},useDebugValue:Zh,useDeferredValue:function(i){var o=Ni();return pn===null?o.memoizedState=i:B_(o,pn.memoizedState,i)},useTransition:function(){var i=qh(yl)[0],o=Ni().memoizedState;return[i,o]},useMutableSource:T_,useSyncExternalStore:w_,useId:H_,unstable_isNewReconciler:!1};function Yi(i,o){if(i&&i.defaultProps){o=Z({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function Qh(i,o,l,f){o=i.memoizedState,l=l(f,o),l=l==null?o:Z({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var ac={isMounted:function(i){return(i=i._reactInternals)?sr(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var f=qn(),g=xs(i),M=Ir(f,g);M.payload=o,l!=null&&(M.callback=l),o=gs(i,M,g),o!==null&&(Ki(o,i,g,f),Ju(o,i,g))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var f=qn(),g=xs(i),M=Ir(f,g);M.tag=1,M.payload=o,l!=null&&(M.callback=l),o=gs(i,M,g),o!==null&&(Ki(o,i,g,f),Ju(o,i,g))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=qn(),f=xs(i),g=Ir(l,f);g.tag=2,o!=null&&(g.callback=o),o=gs(i,g,f),o!==null&&(Ki(o,i,f,l),Ju(o,i,f))}};function X_(i,o,l,f,g,M,C){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,M,C):o.prototype&&o.prototype.isPureReactComponent?!ol(l,f)||!ol(g,M):!0}function j_(i,o,l){var f=!1,g=ds,M=o.contextType;return typeof M=="object"&&M!==null?M=Ui(M):(g=ri(o)?Ys:Nn.current,f=o.contextTypes,M=(f=f!=null)?Vo(i,g):ds),o=new o(l,M),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ac,i.stateNode=o,o._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=M),o}function Y_(i,o,l,f){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,f),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,f),o.state!==i&&ac.enqueueReplaceState(o,o.state,null)}function Jh(i,o,l,f){var g=i.stateNode;g.props=l,g.state=i.memoizedState,g.refs={},zh(i);var M=o.contextType;typeof M=="object"&&M!==null?g.context=Ui(M):(M=ri(o)?Ys:Nn.current,g.context=Vo(i,M)),g.state=i.memoizedState,M=o.getDerivedStateFromProps,typeof M=="function"&&(Qh(i,o,M,l),g.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(o=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),o!==g.state&&ac.enqueueReplaceState(g,g.state,null),ec(i,l,g,f),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function Ko(i,o){try{var l="",f=o;do l+=ue(f),f=f.return;while(f);var g=l}catch(M){g=`
Error generating stack: `+M.message+`
`+M.stack}return{value:i,source:o,stack:g,digest:null}}function ed(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function td(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var $M=typeof WeakMap=="function"?WeakMap:Map;function $_(i,o,l){l=Ir(-1,l),l.tag=3,l.payload={element:null};var f=o.value;return l.callback=function(){pc||(pc=!0,gd=f),td(i,o)},l}function q_(i,o,l){l=Ir(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var g=o.value;l.payload=function(){return f(g)},l.callback=function(){td(i,o)}}var M=i.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(l.callback=function(){td(i,o),typeof f!="function"&&(vs===null?vs=new Set([this]):vs.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})}),l}function K_(i,o,l){var f=i.pingCache;if(f===null){f=i.pingCache=new $M;var g=new Set;f.set(o,g)}else g=f.get(o),g===void 0&&(g=new Set,f.set(o,g));g.has(l)||(g.add(l),i=l1.bind(null,i,o,l),o.then(i,i))}function Z_(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function Q_(i,o,l,f,g){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Ir(-1,1),o.tag=2,gs(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var qM=b.ReactCurrentOwner,si=!1;function $n(i,o,l,f){o.child=i===null?v_(o,null,l,f):jo(o,i.child,l,f)}function J_(i,o,l,f,g){l=l.render;var M=o.ref;return $o(o,g),f=jh(i,o,l,f,M,g),l=Yh(),i!==null&&!si?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~g,Ur(i,o,g)):(Vt&&l&&Rh(o),o.flags|=1,$n(i,o,f,g),o.child)}function e0(i,o,l,f,g){if(i===null){var M=l.type;return typeof M=="function"&&!Ed(M)&&M.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=M,t0(i,o,M,f,g)):(i=xc(l.type,null,f,o,o.mode,g),i.ref=o.ref,i.return=o,o.child=i)}if(M=i.child,(i.lanes&g)===0){var C=M.memoizedProps;if(l=l.compare,l=l!==null?l:ol,l(C,f)&&i.ref===o.ref)return Ur(i,o,g)}return o.flags|=1,i=Ms(M,f),i.ref=o.ref,i.return=o,o.child=i}function t0(i,o,l,f,g){if(i!==null){var M=i.memoizedProps;if(ol(M,f)&&i.ref===o.ref)if(si=!1,o.pendingProps=f=M,(i.lanes&g)!==0)(i.flags&131072)!==0&&(si=!0);else return o.lanes=i.lanes,Ur(i,o,g)}return nd(i,o,l,f,g)}function n0(i,o,l){var f=o.pendingProps,g=f.children,M=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Qo,yi),yi|=l;else{if((l&1073741824)===0)return i=M!==null?M.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,Ft(Qo,yi),yi|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=M!==null?M.baseLanes:l,Ft(Qo,yi),yi|=f}else M!==null?(f=M.baseLanes|l,o.memoizedState=null):f=l,Ft(Qo,yi),yi|=f;return $n(i,o,g,l),o.child}function i0(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function nd(i,o,l,f,g){var M=ri(l)?Ys:Nn.current;return M=Vo(o,M),$o(o,g),l=jh(i,o,l,f,M,g),f=Yh(),i!==null&&!si?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~g,Ur(i,o,g)):(Vt&&f&&Rh(o),o.flags|=1,$n(i,o,l,g),o.child)}function r0(i,o,l,f,g){if(ri(l)){var M=!0;Xu(o)}else M=!1;if($o(o,g),o.stateNode===null)uc(i,o),j_(o,l,f),Jh(o,l,f,g),f=!0;else if(i===null){var C=o.stateNode,z=o.memoizedProps;C.props=z;var V=C.context,oe=l.contextType;typeof oe=="object"&&oe!==null?oe=Ui(oe):(oe=ri(l)?Ys:Nn.current,oe=Vo(o,oe));var ge=l.getDerivedStateFromProps,xe=typeof ge=="function"||typeof C.getSnapshotBeforeUpdate=="function";xe||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(z!==f||V!==oe)&&Y_(o,C,f,oe),ms=!1;var me=o.memoizedState;C.state=me,ec(o,f,C,g),V=o.memoizedState,z!==f||me!==V||ii.current||ms?(typeof ge=="function"&&(Qh(o,l,ge,f),V=o.memoizedState),(z=ms||X_(o,l,z,f,me,V,oe))?(xe||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(o.flags|=4194308)):(typeof C.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=f,o.memoizedState=V),C.props=f,C.state=V,C.context=oe,f=z):(typeof C.componentDidMount=="function"&&(o.flags|=4194308),f=!1)}else{C=o.stateNode,x_(i,o),z=o.memoizedProps,oe=o.type===o.elementType?z:Yi(o.type,z),C.props=oe,xe=o.pendingProps,me=C.context,V=l.contextType,typeof V=="object"&&V!==null?V=Ui(V):(V=ri(l)?Ys:Nn.current,V=Vo(o,V));var Ie=l.getDerivedStateFromProps;(ge=typeof Ie=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(z!==xe||me!==V)&&Y_(o,C,f,V),ms=!1,me=o.memoizedState,C.state=me,ec(o,f,C,g);var ke=o.memoizedState;z!==xe||me!==ke||ii.current||ms?(typeof Ie=="function"&&(Qh(o,l,Ie,f),ke=o.memoizedState),(oe=ms||X_(o,l,oe,f,me,ke,V)||!1)?(ge||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(f,ke,V),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(f,ke,V)),typeof C.componentDidUpdate=="function"&&(o.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof C.componentDidUpdate!="function"||z===i.memoizedProps&&me===i.memoizedState||(o.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&me===i.memoizedState||(o.flags|=1024),o.memoizedProps=f,o.memoizedState=ke),C.props=f,C.state=ke,C.context=V,f=oe):(typeof C.componentDidUpdate!="function"||z===i.memoizedProps&&me===i.memoizedState||(o.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&me===i.memoizedState||(o.flags|=1024),f=!1)}return id(i,o,l,f,M,g)}function id(i,o,l,f,g,M){i0(i,o);var C=(o.flags&128)!==0;if(!f&&!C)return g&&u_(o,l,!1),Ur(i,o,M);f=o.stateNode,qM.current=o;var z=C&&typeof l.getDerivedStateFromError!="function"?null:f.render();return o.flags|=1,i!==null&&C?(o.child=jo(o,i.child,null,M),o.child=jo(o,null,z,M)):$n(i,o,z,M),o.memoizedState=f.state,g&&u_(o,l,!0),o.child}function s0(i){var o=i.stateNode;o.pendingContext?a_(i,o.pendingContext,o.pendingContext!==o.context):o.context&&a_(i,o.context,!1),Bh(i,o.containerInfo)}function o0(i,o,l,f,g){return Xo(),Ih(g),o.flags|=256,$n(i,o,l,f),o.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function sd(i){return{baseLanes:i,cachePool:null,transitions:null}}function a0(i,o,l){var f=o.pendingProps,g=Yt.current,M=!1,C=(o.flags&128)!==0,z;if((z=C)||(z=i!==null&&i.memoizedState===null?!1:(g&2)!==0),z?(M=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),Ft(Yt,g&1),i===null)return Lh(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(C=f.children,i=f.fallback,M?(f=o.mode,M=o.child,C={mode:"hidden",children:C},(f&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=C):M=Sc(C,f,0,null),i=io(i,f,l,null),M.return=o,i.return=o,M.sibling=i,o.child=M,o.child.memoizedState=sd(l),o.memoizedState=rd,i):od(o,C));if(g=i.memoizedState,g!==null&&(z=g.dehydrated,z!==null))return KM(i,o,C,f,z,g,l);if(M){M=f.fallback,C=o.mode,g=i.child,z=g.sibling;var V={mode:"hidden",children:f.children};return(C&1)===0&&o.child!==g?(f=o.child,f.childLanes=0,f.pendingProps=V,o.deletions=null):(f=Ms(g,V),f.subtreeFlags=g.subtreeFlags&14680064),z!==null?M=Ms(z,M):(M=io(M,C,l,null),M.flags|=2),M.return=o,f.return=o,f.sibling=M,o.child=f,f=M,M=o.child,C=i.child.memoizedState,C=C===null?sd(l):{baseLanes:C.baseLanes|l,cachePool:null,transitions:C.transitions},M.memoizedState=C,M.childLanes=i.childLanes&~l,o.memoizedState=rd,f}return M=i.child,i=M.sibling,f=Ms(M,{mode:"visible",children:f.children}),(o.mode&1)===0&&(f.lanes=l),f.return=o,f.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=f,o.memoizedState=null,f}function od(i,o){return o=Sc({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function lc(i,o,l,f){return f!==null&&Ih(f),jo(o,i.child,null,l),i=od(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function KM(i,o,l,f,g,M,C){if(l)return o.flags&256?(o.flags&=-257,f=ed(Error(t(422))),lc(i,o,C,f)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(M=f.fallback,g=o.mode,f=Sc({mode:"visible",children:f.children},g,0,null),M=io(M,g,C,null),M.flags|=2,f.return=o,M.return=o,f.sibling=M,o.child=f,(o.mode&1)!==0&&jo(o,i.child,null,C),o.child.memoizedState=sd(C),o.memoizedState=rd,M);if((o.mode&1)===0)return lc(i,o,C,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var z=f.dgst;return f=z,M=Error(t(419)),f=ed(M,f,void 0),lc(i,o,C,f)}if(z=(C&i.childLanes)!==0,si||z){if(f=Mn,f!==null){switch(C&-C){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|C))!==0?0:g,g!==0&&g!==M.retryLane&&(M.retryLane=g,Lr(i,g),Ki(f,i,g,-1))}return Md(),f=ed(Error(t(421))),lc(i,o,C,f)}return g.data==="$?"?(o.flags|=128,o.child=i.child,o=u1.bind(null,i),g._reactRetry=o,null):(i=M.treeContext,vi=fs(g.nextSibling),_i=o,Vt=!0,ji=null,i!==null&&(Li[Ii++]=Pr,Li[Ii++]=Dr,Li[Ii++]=$s,Pr=i.id,Dr=i.overflow,$s=o),o=od(o,f.children),o.flags|=4096,o)}function l0(i,o,l){i.lanes|=o;var f=i.alternate;f!==null&&(f.lanes|=o),Fh(i.return,o,l)}function ad(i,o,l,f,g){var M=i.memoizedState;M===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:g}:(M.isBackwards=o,M.rendering=null,M.renderingStartTime=0,M.last=f,M.tail=l,M.tailMode=g)}function u0(i,o,l){var f=o.pendingProps,g=f.revealOrder,M=f.tail;if($n(i,o,f.children,l),f=Yt.current,(f&2)!==0)f=f&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&l0(i,l,o);else if(i.tag===19)l0(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Ft(Yt,f),(o.mode&1)===0)o.memoizedState=null;else switch(g){case"forwards":for(l=o.child,g=null;l!==null;)i=l.alternate,i!==null&&tc(i)===null&&(g=l),l=l.sibling;l=g,l===null?(g=o.child,o.child=null):(g=l.sibling,l.sibling=null),ad(o,!1,g,l,M);break;case"backwards":for(l=null,g=o.child,o.child=null;g!==null;){if(i=g.alternate,i!==null&&tc(i)===null){o.child=g;break}i=g.sibling,g.sibling=l,l=g,g=i}ad(o,!0,l,null,M);break;case"together":ad(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function uc(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Ur(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),Js|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Ms(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Ms(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function ZM(i,o,l){switch(o.tag){case 3:s0(o),Xo();break;case 5:E_(o);break;case 1:ri(o.type)&&Xu(o);break;case 4:Bh(o,o.stateNode.containerInfo);break;case 10:var f=o.type._context,g=o.memoizedProps.value;Ft(Zu,f._currentValue),f._currentValue=g;break;case 13:if(f=o.memoizedState,f!==null)return f.dehydrated!==null?(Ft(Yt,Yt.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?a0(i,o,l):(Ft(Yt,Yt.current&1),i=Ur(i,o,l),i!==null?i.sibling:null);Ft(Yt,Yt.current&1);break;case 19:if(f=(l&o.childLanes)!==0,(i.flags&128)!==0){if(f)return u0(i,o,l);o.flags|=128}if(g=o.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Ft(Yt,Yt.current),f)break;return null;case 22:case 23:return o.lanes=0,n0(i,o,l)}return Ur(i,o,l)}var c0,ld,f0,h0;c0=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},ld=function(){},f0=function(i,o,l,f){var g=i.memoizedProps;if(g!==f){i=o.stateNode,Zs(lr.current);var M=null;switch(l){case"input":g=H(i,g),f=H(i,f),M=[];break;case"select":g=Z({},g,{value:void 0}),f=Z({},f,{value:void 0}),M=[];break;case"textarea":g=D(i,g),f=D(i,f),M=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Vu)}dt(l,f);var C;l=null;for(oe in g)if(!f.hasOwnProperty(oe)&&g.hasOwnProperty(oe)&&g[oe]!=null)if(oe==="style"){var z=g[oe];for(C in z)z.hasOwnProperty(C)&&(l||(l={}),l[C]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(s.hasOwnProperty(oe)?M||(M=[]):(M=M||[]).push(oe,null));for(oe in f){var V=f[oe];if(z=g!=null?g[oe]:void 0,f.hasOwnProperty(oe)&&V!==z&&(V!=null||z!=null))if(oe==="style")if(z){for(C in z)!z.hasOwnProperty(C)||V&&V.hasOwnProperty(C)||(l||(l={}),l[C]="");for(C in V)V.hasOwnProperty(C)&&z[C]!==V[C]&&(l||(l={}),l[C]=V[C])}else l||(M||(M=[]),M.push(oe,l)),l=V;else oe==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,z=z?z.__html:void 0,V!=null&&z!==V&&(M=M||[]).push(oe,V)):oe==="children"?typeof V!="string"&&typeof V!="number"||(M=M||[]).push(oe,""+V):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(s.hasOwnProperty(oe)?(V!=null&&oe==="onScroll"&&zt("scroll",i),M||z===V||(M=[])):(M=M||[]).push(oe,V))}l&&(M=M||[]).push("style",l);var oe=M;(o.updateQueue=oe)&&(o.flags|=4)}},h0=function(i,o,l,f){l!==f&&(o.flags|=4)};function Sl(i,o){if(!Vt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function Fn(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(o)for(var g=i.child;g!==null;)l|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)l|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=f,i.childLanes=l,o}function QM(i,o,l){var f=o.pendingProps;switch(Ph(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fn(o),null;case 1:return ri(o.type)&&Wu(),Fn(o),null;case 3:return f=o.stateNode,qo(),Bt(ii),Bt(Nn),Gh(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(qu(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,ji!==null&&(yd(ji),ji=null))),ld(i,o),Fn(o),null;case 5:Hh(o);var g=Zs(gl.current);if(l=o.type,i!==null&&o.stateNode!=null)f0(i,o,l,f,g),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!f){if(o.stateNode===null)throw Error(t(166));return Fn(o),null}if(i=Zs(lr.current),qu(o)){f=o.stateNode,l=o.type;var M=o.memoizedProps;switch(f[ar]=o,f[fl]=M,i=(o.mode&1)!==0,l){case"dialog":zt("cancel",f),zt("close",f);break;case"iframe":case"object":case"embed":zt("load",f);break;case"video":case"audio":for(g=0;g<ll.length;g++)zt(ll[g],f);break;case"source":zt("error",f);break;case"img":case"image":case"link":zt("error",f),zt("load",f);break;case"details":zt("toggle",f);break;case"input":bn(f,M),zt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!M.multiple},zt("invalid",f);break;case"textarea":ie(f,M),zt("invalid",f)}dt(l,M),g=null;for(var C in M)if(M.hasOwnProperty(C)){var z=M[C];C==="children"?typeof z=="string"?f.textContent!==z&&(M.suppressHydrationWarning!==!0&&Hu(f.textContent,z,i),g=["children",z]):typeof z=="number"&&f.textContent!==""+z&&(M.suppressHydrationWarning!==!0&&Hu(f.textContent,z,i),g=["children",""+z]):s.hasOwnProperty(C)&&z!=null&&C==="onScroll"&&zt("scroll",f)}switch(l){case"input":Rt(f),je(f,M,!0);break;case"textarea":Rt(f),ve(f);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(f.onclick=Vu)}f=g,o.updateQueue=f,f!==null&&(o.flags|=4)}else{C=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=he(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=C.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=C.createElement(l,{is:f.is}):(i=C.createElement(l),l==="select"&&(C=i,f.multiple?C.multiple=!0:f.size&&(C.size=f.size))):i=C.createElementNS(i,l),i[ar]=o,i[fl]=f,c0(i,o,!1,!1),o.stateNode=i;e:{switch(C=it(l,f),l){case"dialog":zt("cancel",i),zt("close",i),g=f;break;case"iframe":case"object":case"embed":zt("load",i),g=f;break;case"video":case"audio":for(g=0;g<ll.length;g++)zt(ll[g],i);g=f;break;case"source":zt("error",i),g=f;break;case"img":case"image":case"link":zt("error",i),zt("load",i),g=f;break;case"details":zt("toggle",i),g=f;break;case"input":bn(i,f),g=H(i,f),zt("invalid",i);break;case"option":g=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},g=Z({},f,{value:void 0}),zt("invalid",i);break;case"textarea":ie(i,f),g=D(i,f),zt("invalid",i);break;default:g=f}dt(l,g),z=g;for(M in z)if(z.hasOwnProperty(M)){var V=z[M];M==="style"?et(i,V):M==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&qe(i,V)):M==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&$e(i,V):typeof V=="number"&&$e(i,""+V):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(s.hasOwnProperty(M)?V!=null&&M==="onScroll"&&zt("scroll",i):V!=null&&P(i,M,V,C))}switch(l){case"input":Rt(i),je(i,f,!1);break;case"textarea":Rt(i),ve(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Te(f.value));break;case"select":i.multiple=!!f.multiple,M=f.value,M!=null?O(i,!!f.multiple,M,!1):f.defaultValue!=null&&O(i,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=Vu)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Fn(o),null;case 6:if(i&&o.stateNode!=null)h0(i,o,i.memoizedProps,f);else{if(typeof f!="string"&&o.stateNode===null)throw Error(t(166));if(l=Zs(gl.current),Zs(lr.current),qu(o)){if(f=o.stateNode,l=o.memoizedProps,f[ar]=o,(M=f.nodeValue!==l)&&(i=_i,i!==null))switch(i.tag){case 3:Hu(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Hu(f.nodeValue,l,(i.mode&1)!==0)}M&&(o.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[ar]=o,o.stateNode=f}return Fn(o),null;case 13:if(Bt(Yt),f=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Vt&&vi!==null&&(o.mode&1)!==0&&(o.flags&128)===0)m_(),Xo(),o.flags|=98560,M=!1;else if(M=qu(o),f!==null&&f.dehydrated!==null){if(i===null){if(!M)throw Error(t(318));if(M=o.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[ar]=o}else Xo(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Fn(o),M=!1}else ji!==null&&(yd(ji),ji=null),M=!0;if(!M)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(Yt.current&1)!==0?mn===0&&(mn=3):Md())),o.updateQueue!==null&&(o.flags|=4),Fn(o),null);case 4:return qo(),ld(i,o),i===null&&ul(o.stateNode.containerInfo),Fn(o),null;case 10:return Oh(o.type._context),Fn(o),null;case 17:return ri(o.type)&&Wu(),Fn(o),null;case 19:if(Bt(Yt),M=o.memoizedState,M===null)return Fn(o),null;if(f=(o.flags&128)!==0,C=M.rendering,C===null)if(f)Sl(M,!1);else{if(mn!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(C=tc(i),C!==null){for(o.flags|=128,Sl(M,!1),f=C.updateQueue,f!==null&&(o.updateQueue=f,o.flags|=4),o.subtreeFlags=0,f=l,l=o.child;l!==null;)M=l,i=f,M.flags&=14680066,C=M.alternate,C===null?(M.childLanes=0,M.lanes=i,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=C.childLanes,M.lanes=C.lanes,M.child=C.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=C.memoizedProps,M.memoizedState=C.memoizedState,M.updateQueue=C.updateQueue,M.type=C.type,i=C.dependencies,M.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Ft(Yt,Yt.current&1|2),o.child}i=i.sibling}M.tail!==null&&ee()>Jo&&(o.flags|=128,f=!0,Sl(M,!1),o.lanes=4194304)}else{if(!f)if(i=tc(C),i!==null){if(o.flags|=128,f=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Sl(M,!0),M.tail===null&&M.tailMode==="hidden"&&!C.alternate&&!Vt)return Fn(o),null}else 2*ee()-M.renderingStartTime>Jo&&l!==1073741824&&(o.flags|=128,f=!0,Sl(M,!1),o.lanes=4194304);M.isBackwards?(C.sibling=o.child,o.child=C):(l=M.last,l!==null?l.sibling=C:o.child=C,M.last=C)}return M.tail!==null?(o=M.tail,M.rendering=o,M.tail=o.sibling,M.renderingStartTime=ee(),o.sibling=null,l=Yt.current,Ft(Yt,f?l&1|2:l&1),o):(Fn(o),null);case 22:case 23:return Sd(),f=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(o.flags|=8192),f&&(o.mode&1)!==0?(yi&1073741824)!==0&&(Fn(o),o.subtreeFlags&6&&(o.flags|=8192)):Fn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function JM(i,o){switch(Ph(o),o.tag){case 1:return ri(o.type)&&Wu(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return qo(),Bt(ii),Bt(Nn),Gh(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return Hh(o),null;case 13:if(Bt(Yt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Xo()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return Bt(Yt),null;case 4:return qo(),null;case 10:return Oh(o.type._context),null;case 22:case 23:return Sd(),null;case 24:return null;default:return null}}var cc=!1,kn=!1,e1=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Zo(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){en(i,o,f)}else l.current=null}function ud(i,o,l){try{l()}catch(f){en(i,o,f)}}var d0=!1;function t1(i,o){if(Sh=Pu,i=Xg(),dh(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var g=f.anchorOffset,M=f.focusNode;f=f.focusOffset;try{l.nodeType,M.nodeType}catch{l=null;break e}var C=0,z=-1,V=-1,oe=0,ge=0,xe=i,me=null;t:for(;;){for(var Ie;xe!==l||g!==0&&xe.nodeType!==3||(z=C+g),xe!==M||f!==0&&xe.nodeType!==3||(V=C+f),xe.nodeType===3&&(C+=xe.nodeValue.length),(Ie=xe.firstChild)!==null;)me=xe,xe=Ie;for(;;){if(xe===i)break t;if(me===l&&++oe===g&&(z=C),me===M&&++ge===f&&(V=C),(Ie=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Ie}l=z===-1||V===-1?null:{start:z,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(Mh={focusedElem:i,selectionRange:l},Pu=!1,Ue=o;Ue!==null;)if(o=Ue,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,Ue=i;else for(;Ue!==null;){o=Ue;try{var ke=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var Ve=ke.memoizedProps,sn=ke.memoizedState,J=o.stateNode,G=J.getSnapshotBeforeUpdate(o.elementType===o.type?Ve:Yi(o.type,Ve),sn);J.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ne=o.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){en(o,o.return,Ee)}if(i=o.sibling,i!==null){i.return=o.return,Ue=i;break}Ue=o.return}return ke=d0,d0=!1,ke}function Ml(i,o,l){var f=o.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&i)===i){var M=g.destroy;g.destroy=void 0,M!==void 0&&ud(o,l,M)}g=g.next}while(g!==f)}}function fc(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==o)}}function cd(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function p0(i){var o=i.alternate;o!==null&&(i.alternate=null,p0(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[ar],delete o[fl],delete o[Ah],delete o[FM],delete o[kM])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function m0(i){return i.tag===5||i.tag===3||i.tag===4}function g0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||m0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function fd(i,o,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Vu));else if(f!==4&&(i=i.child,i!==null))for(fd(i,o,l),i=i.sibling;i!==null;)fd(i,o,l),i=i.sibling}function hd(i,o,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(hd(i,o,l),i=i.sibling;i!==null;)hd(i,o,l),i=i.sibling}var Rn=null,$i=!1;function _s(i,o,l){for(l=l.child;l!==null;)_0(i,o,l),l=l.sibling}function _0(i,o,l){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(Qe,l)}catch{}switch(l.tag){case 5:kn||Zo(l,o);case 6:var f=Rn,g=$i;Rn=null,_s(i,o,l),Rn=f,$i=g,Rn!==null&&($i?(i=Rn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Rn.removeChild(l.stateNode));break;case 18:Rn!==null&&($i?(i=Rn,l=l.stateNode,i.nodeType===8?wh(i.parentNode,l):i.nodeType===1&&wh(i,l),el(i)):wh(Rn,l.stateNode));break;case 4:f=Rn,g=$i,Rn=l.stateNode.containerInfo,$i=!0,_s(i,o,l),Rn=f,$i=g;break;case 0:case 11:case 14:case 15:if(!kn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var M=g,C=M.destroy;M=M.tag,C!==void 0&&((M&2)!==0||(M&4)!==0)&&ud(l,o,C),g=g.next}while(g!==f)}_s(i,o,l);break;case 1:if(!kn&&(Zo(l,o),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(z){en(l,o,z)}_s(i,o,l);break;case 21:_s(i,o,l);break;case 22:l.mode&1?(kn=(f=kn)||l.memoizedState!==null,_s(i,o,l),kn=f):_s(i,o,l);break;default:_s(i,o,l)}}function v0(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new e1),o.forEach(function(f){var g=c1.bind(null,i,f);l.has(f)||(l.add(f),f.then(g,g))})}}function qi(i,o){var l=o.deletions;if(l!==null)for(var f=0;f<l.length;f++){var g=l[f];try{var M=i,C=o,z=C;e:for(;z!==null;){switch(z.tag){case 5:Rn=z.stateNode,$i=!1;break e;case 3:Rn=z.stateNode.containerInfo,$i=!0;break e;case 4:Rn=z.stateNode.containerInfo,$i=!0;break e}z=z.return}if(Rn===null)throw Error(t(160));_0(M,C,g),Rn=null,$i=!1;var V=g.alternate;V!==null&&(V.return=null),g.return=null}catch(oe){en(g,o,oe)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)y0(o,i),o=o.sibling}function y0(i,o){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(qi(o,i),cr(i),f&4){try{Ml(3,i,i.return),fc(3,i)}catch(Ve){en(i,i.return,Ve)}try{Ml(5,i,i.return)}catch(Ve){en(i,i.return,Ve)}}break;case 1:qi(o,i),cr(i),f&512&&l!==null&&Zo(l,l.return);break;case 5:if(qi(o,i),cr(i),f&512&&l!==null&&Zo(l,l.return),i.flags&32){var g=i.stateNode;try{$e(g,"")}catch(Ve){en(i,i.return,Ve)}}if(f&4&&(g=i.stateNode,g!=null)){var M=i.memoizedProps,C=l!==null?l.memoizedProps:M,z=i.type,V=i.updateQueue;if(i.updateQueue=null,V!==null)try{z==="input"&&M.type==="radio"&&M.name!=null&&ht(g,M),it(z,C);var oe=it(z,M);for(C=0;C<V.length;C+=2){var ge=V[C],xe=V[C+1];ge==="style"?et(g,xe):ge==="dangerouslySetInnerHTML"?qe(g,xe):ge==="children"?$e(g,xe):P(g,ge,xe,oe)}switch(z){case"input":ct(g,M);break;case"textarea":de(g,M);break;case"select":var me=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!M.multiple;var Ie=M.value;Ie!=null?O(g,!!M.multiple,Ie,!1):me!==!!M.multiple&&(M.defaultValue!=null?O(g,!!M.multiple,M.defaultValue,!0):O(g,!!M.multiple,M.multiple?[]:"",!1))}g[fl]=M}catch(Ve){en(i,i.return,Ve)}}break;case 6:if(qi(o,i),cr(i),f&4){if(i.stateNode===null)throw Error(t(162));g=i.stateNode,M=i.memoizedProps;try{g.nodeValue=M}catch(Ve){en(i,i.return,Ve)}}break;case 3:if(qi(o,i),cr(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{el(o.containerInfo)}catch(Ve){en(i,i.return,Ve)}break;case 4:qi(o,i),cr(i);break;case 13:qi(o,i),cr(i),g=i.child,g.flags&8192&&(M=g.memoizedState!==null,g.stateNode.isHidden=M,!M||g.alternate!==null&&g.alternate.memoizedState!==null||(md=ee())),f&4&&v0(i);break;case 22:if(ge=l!==null&&l.memoizedState!==null,i.mode&1?(kn=(oe=kn)||ge,qi(o,i),kn=oe):qi(o,i),cr(i),f&8192){if(oe=i.memoizedState!==null,(i.stateNode.isHidden=oe)&&!ge&&(i.mode&1)!==0)for(Ue=i,ge=i.child;ge!==null;){for(xe=Ue=ge;Ue!==null;){switch(me=Ue,Ie=me.child,me.tag){case 0:case 11:case 14:case 15:Ml(4,me,me.return);break;case 1:Zo(me,me.return);var ke=me.stateNode;if(typeof ke.componentWillUnmount=="function"){f=me,l=me.return;try{o=f,ke.props=o.memoizedProps,ke.state=o.memoizedState,ke.componentWillUnmount()}catch(Ve){en(f,l,Ve)}}break;case 5:Zo(me,me.return);break;case 22:if(me.memoizedState!==null){M0(xe);continue}}Ie!==null?(Ie.return=me,Ue=Ie):M0(xe)}ge=ge.sibling}e:for(ge=null,xe=i;;){if(xe.tag===5){if(ge===null){ge=xe;try{g=xe.stateNode,oe?(M=g.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(z=xe.stateNode,V=xe.memoizedProps.style,C=V!=null&&V.hasOwnProperty("display")?V.display:null,z.style.display=Je("display",C))}catch(Ve){en(i,i.return,Ve)}}}else if(xe.tag===6){if(ge===null)try{xe.stateNode.nodeValue=oe?"":xe.memoizedProps}catch(Ve){en(i,i.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===i)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===i)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===i)break e;ge===xe&&(ge=null),xe=xe.return}ge===xe&&(ge=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:qi(o,i),cr(i),f&4&&v0(i);break;case 21:break;default:qi(o,i),cr(i)}}function cr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(m0(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&($e(g,""),f.flags&=-33);var M=g0(i);hd(i,M,g);break;case 3:case 4:var C=f.stateNode.containerInfo,z=g0(i);fd(i,z,C);break;default:throw Error(t(161))}}catch(V){en(i,i.return,V)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function n1(i,o,l){Ue=i,x0(i)}function x0(i,o,l){for(var f=(i.mode&1)!==0;Ue!==null;){var g=Ue,M=g.child;if(g.tag===22&&f){var C=g.memoizedState!==null||cc;if(!C){var z=g.alternate,V=z!==null&&z.memoizedState!==null||kn;z=cc;var oe=kn;if(cc=C,(kn=V)&&!oe)for(Ue=g;Ue!==null;)C=Ue,V=C.child,C.tag===22&&C.memoizedState!==null?E0(g):V!==null?(V.return=C,Ue=V):E0(g);for(;M!==null;)Ue=M,x0(M),M=M.sibling;Ue=g,cc=z,kn=oe}S0(i)}else(g.subtreeFlags&8772)!==0&&M!==null?(M.return=g,Ue=M):S0(i)}}function S0(i){for(;Ue!==null;){var o=Ue;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:kn||fc(5,o);break;case 1:var f=o.stateNode;if(o.flags&4&&!kn)if(l===null)f.componentDidMount();else{var g=o.elementType===o.type?l.memoizedProps:Yi(o.type,l.memoizedProps);f.componentDidUpdate(g,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var M=o.updateQueue;M!==null&&M_(o,M,f);break;case 3:var C=o.updateQueue;if(C!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}M_(o,C,l)}break;case 5:var z=o.stateNode;if(l===null&&o.flags&4){l=z;var V=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var oe=o.alternate;if(oe!==null){var ge=oe.memoizedState;if(ge!==null){var xe=ge.dehydrated;xe!==null&&el(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}kn||o.flags&512&&cd(o)}catch(me){en(o,o.return,me)}}if(o===i){Ue=null;break}if(l=o.sibling,l!==null){l.return=o.return,Ue=l;break}Ue=o.return}}function M0(i){for(;Ue!==null;){var o=Ue;if(o===i){Ue=null;break}var l=o.sibling;if(l!==null){l.return=o.return,Ue=l;break}Ue=o.return}}function E0(i){for(;Ue!==null;){var o=Ue;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{fc(4,o)}catch(V){en(o,l,V)}break;case 1:var f=o.stateNode;if(typeof f.componentDidMount=="function"){var g=o.return;try{f.componentDidMount()}catch(V){en(o,g,V)}}var M=o.return;try{cd(o)}catch(V){en(o,M,V)}break;case 5:var C=o.return;try{cd(o)}catch(V){en(o,C,V)}}}catch(V){en(o,o.return,V)}if(o===i){Ue=null;break}var z=o.sibling;if(z!==null){z.return=o.return,Ue=z;break}Ue=o.return}}var i1=Math.ceil,hc=b.ReactCurrentDispatcher,dd=b.ReactCurrentOwner,Oi=b.ReactCurrentBatchConfig,Mt=0,Mn=null,ln=null,Pn=0,yi=0,Qo=hs(0),mn=0,El=null,Js=0,dc=0,pd=0,Tl=null,oi=null,md=0,Jo=1/0,Nr=null,pc=!1,gd=null,vs=null,mc=!1,ys=null,gc=0,wl=0,_d=null,_c=-1,vc=0;function qn(){return(Mt&6)!==0?ee():_c!==-1?_c:_c=ee()}function xs(i){return(i.mode&1)===0?1:(Mt&2)!==0&&Pn!==0?Pn&-Pn:BM.transition!==null?(vc===0&&(vc=Ut()),vc):(i=St,i!==0||(i=window.event,i=i===void 0?16:wg(i.type)),i)}function Ki(i,o,l,f){if(50<wl)throw wl=0,_d=null,Error(t(185));yn(i,l,f),((Mt&2)===0||i!==Mn)&&(i===Mn&&((Mt&2)===0&&(dc|=l),mn===4&&Ss(i,Pn)),ai(i,f),l===1&&Mt===0&&(o.mode&1)===0&&(Jo=ee()+500,ju&&ps()))}function ai(i,o){var l=i.callbackNode;Yn(i,o);var f=In(i,i===Mn?Pn:0);if(f===0)l!==null&&I(l),i.callbackNode=null,i.callbackPriority=0;else if(o=f&-f,i.callbackPriority!==o){if(l!=null&&I(l),o===1)i.tag===0?zM(w0.bind(null,i)):c_(w0.bind(null,i)),NM(function(){(Mt&6)===0&&ps()}),l=null;else{switch(or(f)){case 1:l=Me;break;case 4:l=Re;break;case 16:l=Le;break;case 536870912:l=tt;break;default:l=Le}l=I0(l,T0.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function T0(i,o){if(_c=-1,vc=0,(Mt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(ea()&&i.callbackNode!==l)return null;var f=In(i,i===Mn?Pn:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||o)o=yc(i,f);else{o=f;var g=Mt;Mt|=2;var M=b0();(Mn!==i||Pn!==o)&&(Nr=null,Jo=ee()+500,to(i,o));do try{o1();break}catch(z){A0(i,z)}while(!0);Nh(),hc.current=M,Mt=g,ln!==null?o=0:(Mn=null,Pn=0,o=mn)}if(o!==0){if(o===2&&(g=br(i),g!==0&&(f=g,o=vd(i,g))),o===1)throw l=El,to(i,0),Ss(i,f),ai(i,ee()),l;if(o===6)Ss(i,f);else{if(g=i.current.alternate,(f&30)===0&&!r1(g)&&(o=yc(i,f),o===2&&(M=br(i),M!==0&&(f=M,o=vd(i,M))),o===1))throw l=El,to(i,0),Ss(i,f),ai(i,ee()),l;switch(i.finishedWork=g,i.finishedLanes=f,o){case 0:case 1:throw Error(t(345));case 2:no(i,oi,Nr);break;case 3:if(Ss(i,f),(f&130023424)===f&&(o=md+500-ee(),10<o)){if(In(i,0)!==0)break;if(g=i.suspendedLanes,(g&f)!==f){qn(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=Th(no.bind(null,i,oi,Nr),o);break}no(i,oi,Nr);break;case 4:if(Ss(i,f),(f&4194240)===f)break;for(o=i.eventTimes,g=-1;0<f;){var C=31-st(f);M=1<<C,C=o[C],C>g&&(g=C),f&=~M}if(f=g,f=ee()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*i1(f/1960))-f,10<f){i.timeoutHandle=Th(no.bind(null,i,oi,Nr),f);break}no(i,oi,Nr);break;case 5:no(i,oi,Nr);break;default:throw Error(t(329))}}}return ai(i,ee()),i.callbackNode===l?T0.bind(null,i):null}function vd(i,o){var l=Tl;return i.current.memoizedState.isDehydrated&&(to(i,o).flags|=256),i=yc(i,o),i!==2&&(o=oi,oi=l,o!==null&&yd(o)),i}function yd(i){oi===null?oi=i:oi.push.apply(oi,i)}function r1(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var g=l[f],M=g.getSnapshot;g=g.value;try{if(!Xi(M(),g))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Ss(i,o){for(o&=~pd,o&=~dc,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-st(o),f=1<<l;i[l]=-1,o&=~f}}function w0(i){if((Mt&6)!==0)throw Error(t(327));ea();var o=In(i,0);if((o&1)===0)return ai(i,ee()),null;var l=yc(i,o);if(i.tag!==0&&l===2){var f=br(i);f!==0&&(o=f,l=vd(i,f))}if(l===1)throw l=El,to(i,0),Ss(i,o),ai(i,ee()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,no(i,oi,Nr),ai(i,ee()),null}function xd(i,o){var l=Mt;Mt|=1;try{return i(o)}finally{Mt=l,Mt===0&&(Jo=ee()+500,ju&&ps())}}function eo(i){ys!==null&&ys.tag===0&&(Mt&6)===0&&ea();var o=Mt;Mt|=1;var l=Oi.transition,f=St;try{if(Oi.transition=null,St=1,i)return i()}finally{St=f,Oi.transition=l,Mt=o,(Mt&6)===0&&ps()}}function Sd(){yi=Qo.current,Bt(Qo)}function to(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,UM(l)),ln!==null)for(l=ln.return;l!==null;){var f=l;switch(Ph(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Wu();break;case 3:qo(),Bt(ii),Bt(Nn),Gh();break;case 5:Hh(f);break;case 4:qo();break;case 13:Bt(Yt);break;case 19:Bt(Yt);break;case 10:Oh(f.type._context);break;case 22:case 23:Sd()}l=l.return}if(Mn=i,ln=i=Ms(i.current,null),Pn=yi=o,mn=0,El=null,pd=dc=Js=0,oi=Tl=null,Ks!==null){for(o=0;o<Ks.length;o++)if(l=Ks[o],f=l.interleaved,f!==null){l.interleaved=null;var g=f.next,M=l.pending;if(M!==null){var C=M.next;M.next=g,f.next=C}l.pending=f}Ks=null}return i}function A0(i,o){do{var l=ln;try{if(Nh(),nc.current=oc,ic){for(var f=$t.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}ic=!1}if(Qs=0,Sn=pn=$t=null,_l=!1,vl=0,dd.current=null,l===null||l.return===null){mn=1,El=o,ln=null;break}e:{var M=i,C=l.return,z=l,V=o;if(o=Pn,z.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var oe=V,ge=z,xe=ge.tag;if((ge.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ie=Z_(C);if(Ie!==null){Ie.flags&=-257,Q_(Ie,C,z,M,o),Ie.mode&1&&K_(M,oe,o),o=Ie,V=oe;var ke=o.updateQueue;if(ke===null){var Ve=new Set;Ve.add(V),o.updateQueue=Ve}else ke.add(V);break e}else{if((o&1)===0){K_(M,oe,o),Md();break e}V=Error(t(426))}}else if(Vt&&z.mode&1){var sn=Z_(C);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),Q_(sn,C,z,M,o),Ih(Ko(V,z));break e}}M=V=Ko(V,z),mn!==4&&(mn=2),Tl===null?Tl=[M]:Tl.push(M),M=C;do{switch(M.tag){case 3:M.flags|=65536,o&=-o,M.lanes|=o;var J=$_(M,V,o);S_(M,J);break e;case 1:z=V;var G=M.type,ne=M.stateNode;if((M.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(vs===null||!vs.has(ne)))){M.flags|=65536,o&=-o,M.lanes|=o;var Ee=q_(M,z,o);S_(M,Ee);break e}}M=M.return}while(M!==null)}R0(l)}catch(We){o=We,ln===l&&l!==null&&(ln=l=l.return);continue}break}while(!0)}function b0(){var i=hc.current;return hc.current=oc,i===null?oc:i}function Md(){(mn===0||mn===3||mn===2)&&(mn=4),Mn===null||(Js&268435455)===0&&(dc&268435455)===0||Ss(Mn,Pn)}function yc(i,o){var l=Mt;Mt|=2;var f=b0();(Mn!==i||Pn!==o)&&(Nr=null,to(i,o));do try{s1();break}catch(g){A0(i,g)}while(!0);if(Nh(),Mt=l,hc.current=f,ln!==null)throw Error(t(261));return Mn=null,Pn=0,mn}function s1(){for(;ln!==null;)C0(ln)}function o1(){for(;ln!==null&&!Y();)C0(ln)}function C0(i){var o=L0(i.alternate,i,yi);i.memoizedProps=i.pendingProps,o===null?R0(i):ln=o,dd.current=null}function R0(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=QM(l,o,yi),l!==null){ln=l;return}}else{if(l=JM(l,o),l!==null){l.flags&=32767,ln=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{mn=6,ln=null;return}}if(o=o.sibling,o!==null){ln=o;return}ln=o=i}while(o!==null);mn===0&&(mn=5)}function no(i,o,l){var f=St,g=Oi.transition;try{Oi.transition=null,St=1,a1(i,o,l,f)}finally{Oi.transition=g,St=f}return null}function a1(i,o,l,f){do ea();while(ys!==null);if((Mt&6)!==0)throw Error(t(327));l=i.finishedWork;var g=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var M=l.lanes|l.childLanes;if(Cn(i,M),i===Mn&&(ln=Mn=null,Pn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||mc||(mc=!0,I0(Le,function(){return ea(),null})),M=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||M){M=Oi.transition,Oi.transition=null;var C=St;St=1;var z=Mt;Mt|=4,dd.current=null,t1(i,l),y0(l,i),bM(Mh),Pu=!!Sh,Mh=Sh=null,i.current=l,n1(l),le(),Mt=z,St=C,Oi.transition=M}else i.current=l;if(mc&&(mc=!1,ys=i,gc=g),M=i.pendingLanes,M===0&&(vs=null),_t(l.stateNode),ai(i,ee()),o!==null)for(f=i.onRecoverableError,l=0;l<o.length;l++)g=o[l],f(g.value,{componentStack:g.stack,digest:g.digest});if(pc)throw pc=!1,i=gd,gd=null,i;return(gc&1)!==0&&i.tag!==0&&ea(),M=i.pendingLanes,(M&1)!==0?i===_d?wl++:(wl=0,_d=i):wl=0,ps(),null}function ea(){if(ys!==null){var i=or(gc),o=Oi.transition,l=St;try{if(Oi.transition=null,St=16>i?16:i,ys===null)var f=!1;else{if(i=ys,ys=null,gc=0,(Mt&6)!==0)throw Error(t(331));var g=Mt;for(Mt|=4,Ue=i.current;Ue!==null;){var M=Ue,C=M.child;if((Ue.flags&16)!==0){var z=M.deletions;if(z!==null){for(var V=0;V<z.length;V++){var oe=z[V];for(Ue=oe;Ue!==null;){var ge=Ue;switch(ge.tag){case 0:case 11:case 15:Ml(8,ge,M)}var xe=ge.child;if(xe!==null)xe.return=ge,Ue=xe;else for(;Ue!==null;){ge=Ue;var me=ge.sibling,Ie=ge.return;if(p0(ge),ge===oe){Ue=null;break}if(me!==null){me.return=Ie,Ue=me;break}Ue=Ie}}}var ke=M.alternate;if(ke!==null){var Ve=ke.child;if(Ve!==null){ke.child=null;do{var sn=Ve.sibling;Ve.sibling=null,Ve=sn}while(Ve!==null)}}Ue=M}}if((M.subtreeFlags&2064)!==0&&C!==null)C.return=M,Ue=C;else e:for(;Ue!==null;){if(M=Ue,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:Ml(9,M,M.return)}var J=M.sibling;if(J!==null){J.return=M.return,Ue=J;break e}Ue=M.return}}var G=i.current;for(Ue=G;Ue!==null;){C=Ue;var ne=C.child;if((C.subtreeFlags&2064)!==0&&ne!==null)ne.return=C,Ue=ne;else e:for(C=G;Ue!==null;){if(z=Ue,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:fc(9,z)}}catch(We){en(z,z.return,We)}if(z===C){Ue=null;break e}var Ee=z.sibling;if(Ee!==null){Ee.return=z.return,Ue=Ee;break e}Ue=z.return}}if(Mt=g,ps(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(Qe,i)}catch{}f=!0}return f}finally{St=l,Oi.transition=o}}return!1}function P0(i,o,l){o=Ko(l,o),o=$_(i,o,1),i=gs(i,o,1),o=qn(),i!==null&&(yn(i,1,o),ai(i,o))}function en(i,o,l){if(i.tag===3)P0(i,i,l);else for(;o!==null;){if(o.tag===3){P0(o,i,l);break}else if(o.tag===1){var f=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(vs===null||!vs.has(f))){i=Ko(l,i),i=q_(o,i,1),o=gs(o,i,1),i=qn(),o!==null&&(yn(o,1,i),ai(o,i));break}}o=o.return}}function l1(i,o,l){var f=i.pingCache;f!==null&&f.delete(o),o=qn(),i.pingedLanes|=i.suspendedLanes&l,Mn===i&&(Pn&l)===l&&(mn===4||mn===3&&(Pn&130023424)===Pn&&500>ee()-md?to(i,0):pd|=l),ai(i,o)}function D0(i,o){o===0&&((i.mode&1)===0?o=1:(o=Jt,Jt<<=1,(Jt&130023424)===0&&(Jt=4194304)));var l=qn();i=Lr(i,o),i!==null&&(yn(i,o,l),ai(i,l))}function u1(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),D0(i,l)}function c1(i,o){var l=0;switch(i.tag){case 13:var f=i.stateNode,g=i.memoizedState;g!==null&&(l=g.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(o),D0(i,l)}var L0;L0=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||ii.current)si=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return si=!1,ZM(i,o,l);si=(i.flags&131072)!==0}else si=!1,Vt&&(o.flags&1048576)!==0&&f_(o,$u,o.index);switch(o.lanes=0,o.tag){case 2:var f=o.type;uc(i,o),i=o.pendingProps;var g=Vo(o,Nn.current);$o(o,l),g=jh(null,o,f,i,g,l);var M=Yh();return o.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,ri(f)?(M=!0,Xu(o)):M=!1,o.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,zh(o),g.updater=ac,o.stateNode=g,g._reactInternals=o,Jh(o,f,i,l),o=id(null,o,f,!0,M,l)):(o.tag=0,Vt&&M&&Rh(o),$n(null,o,g,l),o=o.child),o;case 16:f=o.elementType;e:{switch(uc(i,o),i=o.pendingProps,g=f._init,f=g(f._payload),o.type=f,g=o.tag=h1(f),i=Yi(f,i),g){case 0:o=nd(null,o,f,i,l);break e;case 1:o=r0(null,o,f,i,l);break e;case 11:o=J_(null,o,f,i,l);break e;case 14:o=e0(null,o,f,Yi(f.type,i),l);break e}throw Error(t(306,f,""))}return o;case 0:return f=o.type,g=o.pendingProps,g=o.elementType===f?g:Yi(f,g),nd(i,o,f,g,l);case 1:return f=o.type,g=o.pendingProps,g=o.elementType===f?g:Yi(f,g),r0(i,o,f,g,l);case 3:e:{if(s0(o),i===null)throw Error(t(387));f=o.pendingProps,M=o.memoizedState,g=M.element,x_(i,o),ec(o,f,null,l);var C=o.memoizedState;if(f=C.element,M.isDehydrated)if(M={element:f,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},o.updateQueue.baseState=M,o.memoizedState=M,o.flags&256){g=Ko(Error(t(423)),o),o=o0(i,o,f,l,g);break e}else if(f!==g){g=Ko(Error(t(424)),o),o=o0(i,o,f,l,g);break e}else for(vi=fs(o.stateNode.containerInfo.firstChild),_i=o,Vt=!0,ji=null,l=v_(o,null,f,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Xo(),f===g){o=Ur(i,o,l);break e}$n(i,o,f,l)}o=o.child}return o;case 5:return E_(o),i===null&&Lh(o),f=o.type,g=o.pendingProps,M=i!==null?i.memoizedProps:null,C=g.children,Eh(f,g)?C=null:M!==null&&Eh(f,M)&&(o.flags|=32),i0(i,o),$n(i,o,C,l),o.child;case 6:return i===null&&Lh(o),null;case 13:return a0(i,o,l);case 4:return Bh(o,o.stateNode.containerInfo),f=o.pendingProps,i===null?o.child=jo(o,null,f,l):$n(i,o,f,l),o.child;case 11:return f=o.type,g=o.pendingProps,g=o.elementType===f?g:Yi(f,g),J_(i,o,f,g,l);case 7:return $n(i,o,o.pendingProps,l),o.child;case 8:return $n(i,o,o.pendingProps.children,l),o.child;case 12:return $n(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(f=o.type._context,g=o.pendingProps,M=o.memoizedProps,C=g.value,Ft(Zu,f._currentValue),f._currentValue=C,M!==null)if(Xi(M.value,C)){if(M.children===g.children&&!ii.current){o=Ur(i,o,l);break e}}else for(M=o.child,M!==null&&(M.return=o);M!==null;){var z=M.dependencies;if(z!==null){C=M.child;for(var V=z.firstContext;V!==null;){if(V.context===f){if(M.tag===1){V=Ir(-1,l&-l),V.tag=2;var oe=M.updateQueue;if(oe!==null){oe=oe.shared;var ge=oe.pending;ge===null?V.next=V:(V.next=ge.next,ge.next=V),oe.pending=V}}M.lanes|=l,V=M.alternate,V!==null&&(V.lanes|=l),Fh(M.return,l,o),z.lanes|=l;break}V=V.next}}else if(M.tag===10)C=M.type===o.type?null:M.child;else if(M.tag===18){if(C=M.return,C===null)throw Error(t(341));C.lanes|=l,z=C.alternate,z!==null&&(z.lanes|=l),Fh(C,l,o),C=M.sibling}else C=M.child;if(C!==null)C.return=M;else for(C=M;C!==null;){if(C===o){C=null;break}if(M=C.sibling,M!==null){M.return=C.return,C=M;break}C=C.return}M=C}$n(i,o,g.children,l),o=o.child}return o;case 9:return g=o.type,f=o.pendingProps.children,$o(o,l),g=Ui(g),f=f(g),o.flags|=1,$n(i,o,f,l),o.child;case 14:return f=o.type,g=Yi(f,o.pendingProps),g=Yi(f.type,g),e0(i,o,f,g,l);case 15:return t0(i,o,o.type,o.pendingProps,l);case 17:return f=o.type,g=o.pendingProps,g=o.elementType===f?g:Yi(f,g),uc(i,o),o.tag=1,ri(f)?(i=!0,Xu(o)):i=!1,$o(o,l),j_(o,f,g),Jh(o,f,g,l),id(null,o,f,!0,i,l);case 19:return u0(i,o,l);case 22:return n0(i,o,l)}throw Error(t(156,o.tag))};function I0(i,o){return bu(i,o)}function f1(i,o,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fi(i,o,l,f){return new f1(i,o,l,f)}function Ed(i){return i=i.prototype,!(!i||!i.isReactComponent)}function h1(i){if(typeof i=="function")return Ed(i)?1:0;if(i!=null){if(i=i.$$typeof,i===$)return 11;if(i===ae)return 14}return 2}function Ms(i,o){var l=i.alternate;return l===null?(l=Fi(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function xc(i,o,l,f,g,M){var C=2;if(f=i,typeof i=="function")Ed(i)&&(C=1);else if(typeof i=="string")C=5;else e:switch(i){case T:return io(l.children,g,M,o);case U:C=8,g|=8;break;case w:return i=Fi(12,l,o,g|2),i.elementType=w,i.lanes=M,i;case j:return i=Fi(13,l,o,g),i.elementType=j,i.lanes=M,i;case re:return i=Fi(19,l,o,g),i.elementType=re,i.lanes=M,i;case ce:return Sc(l,g,M,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case A:C=10;break e;case k:C=9;break e;case $:C=11;break e;case ae:C=14;break e;case K:C=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Fi(C,l,o,g),o.elementType=i,o.type=f,o.lanes=M,o}function io(i,o,l,f){return i=Fi(7,i,f,o),i.lanes=l,i}function Sc(i,o,l,f){return i=Fi(22,i,f,o),i.elementType=ce,i.lanes=l,i.stateNode={isHidden:!1},i}function Td(i,o,l){return i=Fi(6,i,null,o),i.lanes=l,i}function wd(i,o,l){return o=Fi(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function d1(i,o,l,f,g){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Un(0),this.expirationTimes=Un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Un(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Ad(i,o,l,f,g,M,C,z,V){return i=new d1(i,o,l,z,V),o===1?(o=1,M===!0&&(o|=8)):o=0,M=Fi(3,null,null,o),i.current=M,M.stateNode=i,M.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},zh(M),i}function p1(i,o,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:f==null?null:""+f,children:i,containerInfo:o,implementation:l}}function U0(i){if(!i)return ds;i=i._reactInternals;e:{if(sr(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(ri(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(ri(l))return l_(i,l,o)}return o}function N0(i,o,l,f,g,M,C,z,V){return i=Ad(l,f,!0,i,g,M,C,z,V),i.context=U0(null),l=i.current,f=qn(),g=xs(l),M=Ir(f,g),M.callback=o??null,gs(l,M,g),i.current.lanes=g,yn(i,g,f),ai(i,f),i}function Mc(i,o,l,f){var g=o.current,M=qn(),C=xs(g);return l=U0(l),o.context===null?o.context=l:o.pendingContext=l,o=Ir(M,C),o.payload={element:i},f=f===void 0?null:f,f!==null&&(o.callback=f),i=gs(g,o,C),i!==null&&(Ki(i,g,C,M),Ju(i,g,C)),C}function Ec(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function O0(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function bd(i,o){O0(i,o),(i=i.alternate)&&O0(i,o)}function m1(){return null}var F0=typeof reportError=="function"?reportError:function(i){console.error(i)};function Cd(i){this._internalRoot=i}Tc.prototype.render=Cd.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Mc(i,o,null,null)},Tc.prototype.unmount=Cd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;eo(function(){Mc(null,i,null,null)}),o[Cr]=null}};function Tc(i){this._internalRoot=i}Tc.prototype.unstable_scheduleHydration=function(i){if(i){var o=xg();i={blockedOn:null,target:i,priority:o};for(var l=0;l<ls.length&&o!==0&&o<ls[l].priority;l++);ls.splice(l,0,i),l===0&&Eg(i)}};function Rd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function wc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function k0(){}function g1(i,o,l,f,g){if(g){if(typeof f=="function"){var M=f;f=function(){var oe=Ec(C);M.call(oe)}}var C=N0(o,f,i,0,null,!1,!1,"",k0);return i._reactRootContainer=C,i[Cr]=C.current,ul(i.nodeType===8?i.parentNode:i),eo(),C}for(;g=i.lastChild;)i.removeChild(g);if(typeof f=="function"){var z=f;f=function(){var oe=Ec(V);z.call(oe)}}var V=Ad(i,0,!1,null,null,!1,!1,"",k0);return i._reactRootContainer=V,i[Cr]=V.current,ul(i.nodeType===8?i.parentNode:i),eo(function(){Mc(o,V,l,f)}),V}function Ac(i,o,l,f,g){var M=l._reactRootContainer;if(M){var C=M;if(typeof g=="function"){var z=g;g=function(){var V=Ec(C);z.call(V)}}Mc(o,C,i,g)}else C=g1(l,o,i,g,f);return Ec(C)}vg=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=gt(o.pendingLanes);l!==0&&(xn(o,l|1),ai(o,ee()),(Mt&6)===0&&(Jo=ee()+500,ps()))}break;case 13:eo(function(){var f=Lr(i,1);if(f!==null){var g=qn();Ki(f,i,1,g)}}),bd(i,1)}},eh=function(i){if(i.tag===13){var o=Lr(i,134217728);if(o!==null){var l=qn();Ki(o,i,134217728,l)}bd(i,134217728)}},yg=function(i){if(i.tag===13){var o=xs(i),l=Lr(i,o);if(l!==null){var f=qn();Ki(l,i,o,f)}bd(i,o)}},xg=function(){return St},Sg=function(i,o){var l=St;try{return St=i,o()}finally{St=l}},Ce=function(i,o,l){switch(o){case"input":if(ct(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var f=l[o];if(f!==i&&f.form===i.form){var g=Gu(f);if(!g)throw Error(t(90));Pt(f),ct(f,g)}}}break;case"textarea":de(i,l);break;case"select":o=l.value,o!=null&&O(i,!!l.multiple,o,!1)}},kt=xd,dn=eo;var _1={usingClientEntryPoint:!1,Events:[hl,Bo,Gu,Pe,rt,xd]},Al={findFiberByHostInstance:js,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},v1={bundleType:Al.bundleType,version:Al.version,rendererPackageName:Al.rendererPackageName,rendererConfig:Al.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=wu(i),i===null?null:i.stateNode},findFiberByHostInstance:Al.findFiberByHostInstance||m1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{Qe=bc.inject(v1),ze=bc}catch{}}return li.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_1,li.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(o))throw Error(t(200));return p1(i,o,null,l)},li.createRoot=function(i,o){if(!Rd(i))throw Error(t(299));var l=!1,f="",g=F0;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),o=Ad(i,1,!1,null,null,l,!1,f,g),i[Cr]=o.current,ul(i.nodeType===8?i.parentNode:i),new Cd(o)},li.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=wu(o),i=i===null?null:i.stateNode,i},li.flushSync=function(i){return eo(i)},li.hydrate=function(i,o,l){if(!wc(o))throw Error(t(200));return Ac(null,i,o,!0,l)},li.hydrateRoot=function(i,o,l){if(!Rd(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,g=!1,M="",C=F0;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(M=l.identifierPrefix),l.onRecoverableError!==void 0&&(C=l.onRecoverableError)),o=N0(o,null,i,1,l??null,g,!1,M,C),i[Cr]=o.current,ul(i),f)for(i=0;i<f.length;i++)l=f[i],g=l._getVersion,g=g(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,g]:o.mutableSourceEagerHydrationData.push(l,g);return new Tc(o)},li.render=function(i,o,l){if(!wc(o))throw Error(t(200));return Ac(null,i,o,!1,l)},li.unmountComponentAtNode=function(i){if(!wc(i))throw Error(t(40));return i._reactRootContainer?(eo(function(){Ac(null,null,i,!1,function(){i._reactRootContainer=null,i[Cr]=null})}),!0):!1},li.unstable_batchedUpdates=xd,li.unstable_renderSubtreeIntoContainer=function(i,o,l,f){if(!wc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Ac(i,o,l,!1,f)},li.version="18.3.1-next-f1338f8080-20240426",li}var Y0;function R1(){if(Y0)return Ld.exports;Y0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ld.exports=C1(),Ld.exports}var $0;function P1(){if($0)return Cc;$0=1;var r=R1();return Cc.createRoot=r.createRoot,Cc.hydrateRoot=r.hydrateRoot,Cc}var D1=P1();const L1=Wy(D1),ql={black:"#000",white:"#fff"},ta={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},na={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},ia={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},ra={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},sa={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},Cl={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},I1={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function Kl(r){let e="https://mui.com/production-error/?code="+r;for(let t=1;t<arguments.length;t+=1)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified MUI error #"+r+"; visit "+e+" for the full message."}const U1=Object.freeze(Object.defineProperty({__proto__:null,default:Kl},Symbol.toStringTag,{value:"Module"})),N1="$$material";function jt(){return jt=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},jt.apply(null,arguments)}function Vs(r,e){if(r==null)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)!==-1)continue;t[n]=r[n]}return t}function O1(r){if(r.sheet)return r.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===r)return document.styleSheets[e]}function F1(r){var e=document.createElement("style");return e.setAttribute("data-emotion",r.key),r.nonce!==void 0&&e.setAttribute("nonce",r.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var k1=function(){function r(t){var n=this;this._insertTag=function(s){var a;n.tags.length===0?n.insertionPoint?a=n.insertionPoint.nextSibling:n.prepend?a=n.container.firstChild:a=n.before:a=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(s,a),n.tags.push(s)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=r.prototype;return e.hydrate=function(n){n.forEach(this._insertTag)},e.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(F1(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var a=O1(s);try{a.insertRule(n,a.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(n));this.ctr++},e.flush=function(){this.tags.forEach(function(n){var s;return(s=n.parentNode)==null?void 0:s.removeChild(n)}),this.tags=[],this.ctr=0},r}(),Hn="-ms-",yf="-moz-",At="-webkit-",Yy="comm",Im="rule",Um="decl",z1="@import",$y="@keyframes",B1="@layer",H1=Math.abs,Nf=String.fromCharCode,V1=Object.assign;function G1(r,e){return Dn(r,0)^45?(((e<<2^Dn(r,0))<<2^Dn(r,1))<<2^Dn(r,2))<<2^Dn(r,3):0}function qy(r){return r.trim()}function W1(r,e){return(r=e.exec(r))?r[0]:r}function bt(r,e,t){return r.replace(e,t)}function Ap(r,e){return r.indexOf(e)}function Dn(r,e){return r.charCodeAt(e)|0}function Zl(r,e,t){return r.slice(e,t)}function hr(r){return r.length}function Nm(r){return r.length}function Rc(r,e){return e.push(r),r}function X1(r,e){return r.map(e).join("")}var Of=1,Ua=1,Ky=0,pi=0,hn=0,ja="";function Ff(r,e,t,n,s,a,u){return{value:r,root:e,parent:t,type:n,props:s,children:a,line:Of,column:Ua,length:u,return:""}}function Rl(r,e){return V1(Ff("",null,null,"",null,null,0),r,{length:-r.length},e)}function j1(){return hn}function Y1(){return hn=pi>0?Dn(ja,--pi):0,Ua--,hn===10&&(Ua=1,Of--),hn}function Ci(){return hn=pi<Ky?Dn(ja,pi++):0,Ua++,hn===10&&(Ua=1,Of++),hn}function vr(){return Dn(ja,pi)}function sf(){return pi}function du(r,e){return Zl(ja,r,e)}function Ql(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Zy(r){return Of=Ua=1,Ky=hr(ja=r),pi=0,[]}function Qy(r){return ja="",r}function of(r){return qy(du(pi-1,bp(r===91?r+2:r===40?r+1:r)))}function $1(r){for(;(hn=vr())&&hn<33;)Ci();return Ql(r)>2||Ql(hn)>3?"":" "}function q1(r,e){for(;--e&&Ci()&&!(hn<48||hn>102||hn>57&&hn<65||hn>70&&hn<97););return du(r,sf()+(e<6&&vr()==32&&Ci()==32))}function bp(r){for(;Ci();)switch(hn){case r:return pi;case 34:case 39:r!==34&&r!==39&&bp(hn);break;case 40:r===41&&bp(r);break;case 92:Ci();break}return pi}function K1(r,e){for(;Ci()&&r+hn!==57;)if(r+hn===84&&vr()===47)break;return"/*"+du(e,pi-1)+"*"+Nf(r===47?r:Ci())}function Z1(r){for(;!Ql(vr());)Ci();return du(r,pi)}function Q1(r){return Qy(af("",null,null,null,[""],r=Zy(r),0,[0],r))}function af(r,e,t,n,s,a,u,c,h){for(var d=0,p=0,m=u,_=0,x=0,E=0,S=1,y=1,v=1,R=0,P="",b=s,N=a,L=n,T=P;y;)switch(E=R,R=Ci()){case 40:if(E!=108&&Dn(T,m-1)==58){Ap(T+=bt(of(R),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:T+=of(R);break;case 9:case 10:case 13:case 32:T+=$1(E);break;case 92:T+=q1(sf()-1,7);continue;case 47:switch(vr()){case 42:case 47:Rc(J1(K1(Ci(),sf()),e,t),h);break;default:T+="/"}break;case 123*S:c[d++]=hr(T)*v;case 125*S:case 59:case 0:switch(R){case 0:case 125:y=0;case 59+p:v==-1&&(T=bt(T,/\f/g,"")),x>0&&hr(T)-m&&Rc(x>32?K0(T+";",n,t,m-1):K0(bt(T," ","")+";",n,t,m-2),h);break;case 59:T+=";";default:if(Rc(L=q0(T,e,t,d,p,s,c,P,b=[],N=[],m),a),R===123)if(p===0)af(T,e,L,L,b,a,m,c,N);else switch(_===99&&Dn(T,3)===110?100:_){case 100:case 108:case 109:case 115:af(r,L,L,n&&Rc(q0(r,L,L,0,0,s,c,P,s,b=[],m),N),s,N,m,c,n?b:N);break;default:af(T,L,L,L,[""],N,0,c,N)}}d=p=x=0,S=v=1,P=T="",m=u;break;case 58:m=1+hr(T),x=E;default:if(S<1){if(R==123)--S;else if(R==125&&S++==0&&Y1()==125)continue}switch(T+=Nf(R),R*S){case 38:v=p>0?1:(T+="\f",-1);break;case 44:c[d++]=(hr(T)-1)*v,v=1;break;case 64:vr()===45&&(T+=of(Ci())),_=vr(),p=m=hr(P=T+=Z1(sf())),R++;break;case 45:E===45&&hr(T)==2&&(S=0)}}return a}function q0(r,e,t,n,s,a,u,c,h,d,p){for(var m=s-1,_=s===0?a:[""],x=Nm(_),E=0,S=0,y=0;E<n;++E)for(var v=0,R=Zl(r,m+1,m=H1(S=u[E])),P=r;v<x;++v)(P=qy(S>0?_[v]+" "+R:bt(R,/&\f/g,_[v])))&&(h[y++]=P);return Ff(r,e,t,s===0?Im:c,h,d,p)}function J1(r,e,t){return Ff(r,e,t,Yy,Nf(j1()),Zl(r,2,-2),0)}function K0(r,e,t,n){return Ff(r,e,t,Um,Zl(r,0,n),Zl(r,n+1,-1),n)}function Aa(r,e){for(var t="",n=Nm(r),s=0;s<n;s++)t+=e(r[s],s,r,e)||"";return t}function eE(r,e,t,n){switch(r.type){case B1:if(r.children.length)break;case z1:case Um:return r.return=r.return||r.value;case Yy:return"";case $y:return r.return=r.value+"{"+Aa(r.children,n)+"}";case Im:r.value=r.props.join(",")}return hr(t=Aa(r.children,n))?r.return=r.value+"{"+t+"}":""}function tE(r){var e=Nm(r);return function(t,n,s,a){for(var u="",c=0;c<e;c++)u+=r[c](t,n,s,a)||"";return u}}function nE(r){return function(e){e.root||(e=e.return)&&r(e)}}function Jy(r){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=r(t)),e[t]}}var iE=function(e,t,n){for(var s=0,a=0;s=a,a=vr(),s===38&&a===12&&(t[n]=1),!Ql(a);)Ci();return du(e,pi)},rE=function(e,t){var n=-1,s=44;do switch(Ql(s)){case 0:s===38&&vr()===12&&(t[n]=1),e[n]+=iE(pi-1,t,n);break;case 2:e[n]+=of(s);break;case 4:if(s===44){e[++n]=vr()===58?"&\f":"",t[n]=e[n].length;break}default:e[n]+=Nf(s)}while(s=Ci());return e},sE=function(e,t){return Qy(rE(Zy(e),t))},Z0=new WeakMap,oE=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,s=e.column===n.column&&e.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!Z0.get(n))&&!s){Z0.set(e,!0);for(var a=[],u=sE(t,a),c=n.props,h=0,d=0;h<u.length;h++)for(var p=0;p<c.length;p++,d++)e.props[d]=a[h]?u[h].replace(/&\f/g,c[p]):c[p]+" "+u[h]}}},aE=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function ex(r,e){switch(G1(r,e)){case 5103:return At+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return At+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return At+r+yf+r+Hn+r+r;case 6828:case 4268:return At+r+Hn+r+r;case 6165:return At+r+Hn+"flex-"+r+r;case 5187:return At+r+bt(r,/(\w+).+(:[^]+)/,At+"box-$1$2"+Hn+"flex-$1$2")+r;case 5443:return At+r+Hn+"flex-item-"+bt(r,/flex-|-self/,"")+r;case 4675:return At+r+Hn+"flex-line-pack"+bt(r,/align-content|flex-|-self/,"")+r;case 5548:return At+r+Hn+bt(r,"shrink","negative")+r;case 5292:return At+r+Hn+bt(r,"basis","preferred-size")+r;case 6060:return At+"box-"+bt(r,"-grow","")+At+r+Hn+bt(r,"grow","positive")+r;case 4554:return At+bt(r,/([^-])(transform)/g,"$1"+At+"$2")+r;case 6187:return bt(bt(bt(r,/(zoom-|grab)/,At+"$1"),/(image-set)/,At+"$1"),r,"")+r;case 5495:case 3959:return bt(r,/(image-set\([^]*)/,At+"$1$`$1");case 4968:return bt(bt(r,/(.+:)(flex-)?(.*)/,At+"box-pack:$3"+Hn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+At+r+r;case 4095:case 3583:case 4068:case 2532:return bt(r,/(.+)-inline(.+)/,At+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hr(r)-1-e>6)switch(Dn(r,e+1)){case 109:if(Dn(r,e+4)!==45)break;case 102:return bt(r,/(.+:)(.+)-([^]+)/,"$1"+At+"$2-$3$1"+yf+(Dn(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~Ap(r,"stretch")?ex(bt(r,"stretch","fill-available"),e)+r:r}break;case 4949:if(Dn(r,e+1)!==115)break;case 6444:switch(Dn(r,hr(r)-3-(~Ap(r,"!important")&&10))){case 107:return bt(r,":",":"+At)+r;case 101:return bt(r,/(.+:)([^;!]+)(;|!.+)?/,"$1"+At+(Dn(r,14)===45?"inline-":"")+"box$3$1"+At+"$2$3$1"+Hn+"$2box$3")+r}break;case 5936:switch(Dn(r,e+11)){case 114:return At+r+Hn+bt(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return At+r+Hn+bt(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return At+r+Hn+bt(r,/[svh]\w+-[tblr]{2}/,"lr")+r}return At+r+Hn+r+r}return r}var lE=function(e,t,n,s){if(e.length>-1&&!e.return)switch(e.type){case Um:e.return=ex(e.value,e.length);break;case $y:return Aa([Rl(e,{value:bt(e.value,"@","@"+At)})],s);case Im:if(e.length)return X1(e.props,function(a){switch(W1(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Aa([Rl(e,{props:[bt(a,/:(read-\w+)/,":"+yf+"$1")]})],s);case"::placeholder":return Aa([Rl(e,{props:[bt(a,/:(plac\w+)/,":"+At+"input-$1")]}),Rl(e,{props:[bt(a,/:(plac\w+)/,":"+yf+"$1")]}),Rl(e,{props:[bt(a,/:(plac\w+)/,Hn+"input-$1")]})],s)}return""})}},uE=[lE],cE=function(e){var t=e.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(S){var y=S.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var s=e.stylisPlugins||uE,a={},u,c=[];u=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(S){for(var y=S.getAttribute("data-emotion").split(" "),v=1;v<y.length;v++)a[y[v]]=!0;c.push(S)});var h,d=[oE,aE];{var p,m=[eE,nE(function(S){p.insert(S)})],_=tE(d.concat(s,m)),x=function(y){return Aa(Q1(y),_)};h=function(y,v,R,P){p=R,x(y?y+"{"+v.styles+"}":v.styles),P&&(E.inserted[v.name]=!0)}}var E={key:t,sheet:new k1({key:t,container:u,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:h};return E.sheet.hydrate(c),E},fE=!0;function hE(r,e,t){var n="";return t.split(" ").forEach(function(s){r[s]!==void 0?e.push(r[s]+";"):s&&(n+=s+" ")}),n}var tx=function(e,t,n){var s=e.key+"-"+t.name;(n===!1||fE===!1)&&e.registered[s]===void 0&&(e.registered[s]=t.styles)},dE=function(e,t,n){tx(e,t,n);var s=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var a=t;do e.insert(t===a?"."+s:"",a,e.sheet,!0),a=a.next;while(a!==void 0)}};function pE(r){for(var e=0,t,n=0,s=r.length;s>=4;++n,s-=4)t=r.charCodeAt(n)&255|(r.charCodeAt(++n)&255)<<8|(r.charCodeAt(++n)&255)<<16|(r.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(s){case 3:e^=(r.charCodeAt(n+2)&255)<<16;case 2:e^=(r.charCodeAt(n+1)&255)<<8;case 1:e^=r.charCodeAt(n)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var mE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},gE=/[A-Z]|^ms/g,_E=/_EMO_([^_]+?)_([^]*?)_EMO_/g,nx=function(e){return e.charCodeAt(1)===45},Q0=function(e){return e!=null&&typeof e!="boolean"},Nd=Jy(function(r){return nx(r)?r:r.replace(gE,"-$&").toLowerCase()}),J0=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(_E,function(n,s,a){return dr={name:s,styles:a,next:dr},s})}return mE[e]!==1&&!nx(e)&&typeof t=="number"&&t!==0?t+"px":t};function Jl(r,e,t){if(t==null)return"";var n=t;if(n.__emotion_styles!==void 0)return n;switch(typeof t){case"boolean":return"";case"object":{var s=t;if(s.anim===1)return dr={name:s.name,styles:s.styles,next:dr},s.name;var a=t;if(a.styles!==void 0){var u=a.next;if(u!==void 0)for(;u!==void 0;)dr={name:u.name,styles:u.styles,next:dr},u=u.next;var c=a.styles+";";return c}return vE(r,e,t)}case"function":{if(r!==void 0){var h=dr,d=t(r);return dr=h,Jl(r,e,d)}break}}var p=t;if(e==null)return p;var m=e[p];return m!==void 0?m:p}function vE(r,e,t){var n="";if(Array.isArray(t))for(var s=0;s<t.length;s++)n+=Jl(r,e,t[s])+";";else for(var a in t){var u=t[a];if(typeof u!="object"){var c=u;e!=null&&e[c]!==void 0?n+=a+"{"+e[c]+"}":Q0(c)&&(n+=Nd(a)+":"+J0(a,c)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&(e==null||e[u[0]]===void 0))for(var h=0;h<u.length;h++)Q0(u[h])&&(n+=Nd(a)+":"+J0(a,u[h])+";");else{var d=Jl(r,e,u);switch(a){case"animation":case"animationName":{n+=Nd(a)+":"+d+";";break}default:n+=a+"{"+d+"}"}}}return n}var ev=/label:\s*([^\s;{]+)\s*(;|$)/g,dr;function yE(r,e,t){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var n=!0,s="";dr=void 0;var a=r[0];if(a==null||a.raw===void 0)n=!1,s+=Jl(t,e,a);else{var u=a;s+=u[0]}for(var c=1;c<r.length;c++)if(s+=Jl(t,e,r[c]),n){var h=a;s+=h[c]}ev.lastIndex=0;for(var d="",p;(p=ev.exec(s))!==null;)d+="-"+p[1];var m=pE(s)+d;return{name:m,styles:s,next:dr}}var xE=function(e){return e()},SE=G0.useInsertionEffect?G0.useInsertionEffect:!1,ME=SE||xE,ix=Lt.createContext(typeof HTMLElement<"u"?cE({key:"css"}):null);ix.Provider;var EE=function(e){return Lt.forwardRef(function(t,n){var s=Lt.useContext(ix);return e(t,s,n)})},rx=Lt.createContext({}),TE=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,wE=Jy(function(r){return TE.test(r)||r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)<91}),AE=wE,bE=function(e){return e!=="theme"},tv=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?AE:bE},nv=function(e,t,n){var s;if(t){var a=t.shouldForwardProp;s=e.__emotion_forwardProp&&a?function(u){return e.__emotion_forwardProp(u)&&a(u)}:a}return typeof s!="function"&&n&&(s=e.__emotion_forwardProp),s},CE=function(e){var t=e.cache,n=e.serialized,s=e.isStringTag;return tx(t,n,s),ME(function(){return dE(t,n,s)}),null},RE=function r(e,t){var n=e.__emotion_real===e,s=n&&e.__emotion_base||e,a,u;t!==void 0&&(a=t.label,u=t.target);var c=nv(e,t,n),h=c||tv(s),d=!h("as");return function(){var p=arguments,m=n&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(a!==void 0&&m.push("label:"+a+";"),p[0]==null||p[0].raw===void 0)m.push.apply(m,p);else{var _=p[0];m.push(_[0]);for(var x=p.length,E=1;E<x;E++)m.push(p[E],_[E])}var S=EE(function(y,v,R){var P=d&&y.as||s,b="",N=[],L=y;if(y.theme==null){L={};for(var T in y)L[T]=y[T];L.theme=Lt.useContext(rx)}typeof y.className=="string"?b=hE(v.registered,N,y.className):y.className!=null&&(b=y.className+" ");var U=yE(m.concat(N),v.registered,L);b+=v.key+"-"+U.name,u!==void 0&&(b+=" "+u);var w=d&&c===void 0?tv(P):h,A={};for(var k in y)d&&k==="as"||w(k)&&(A[k]=y[k]);return A.className=b,R&&(A.ref=R),Lt.createElement(Lt.Fragment,null,Lt.createElement(CE,{cache:v,serialized:U,isStringTag:typeof P=="string"}),Lt.createElement(P,A))});return S.displayName=a!==void 0?a:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",S.defaultProps=e.defaultProps,S.__emotion_real=S,S.__emotion_base=s,S.__emotion_styles=m,S.__emotion_forwardProp=c,Object.defineProperty(S,"toString",{value:function(){return"."+u}}),S.withComponent=function(y,v){var R=r(y,jt({},t,v,{shouldForwardProp:nv(S,v,!0)}));return R.apply(void 0,m)},S}},PE=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Cp=RE.bind(null);PE.forEach(function(r){Cp[r]=Cp(r)});function DE(r,e){return Cp(r,e)}function go(r){if(typeof r!="object"||r===null)return!1;const e=Object.getPrototypeOf(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)}function sx(r){if(Lt.isValidElement(r)||!go(r))return r;const e={};return Object.keys(r).forEach(t=>{e[t]=sx(r[t])}),e}function Kr(r,e,t={clone:!0}){const n=t.clone?jt({},r):r;return go(r)&&go(e)&&Object.keys(e).forEach(s=>{Lt.isValidElement(e[s])?n[s]=e[s]:go(e[s])&&Object.prototype.hasOwnProperty.call(r,s)&&go(r[s])?n[s]=Kr(r[s],e[s],t):t.clone?n[s]=go(e[s])?sx(e[s]):e[s]:n[s]=e[s]}),n}const LE=["values","unit","step"],IE=r=>{const e=Object.keys(r).map(t=>({key:t,val:r[t]}))||[];return e.sort((t,n)=>t.val-n.val),e.reduce((t,n)=>jt({},t,{[n.key]:n.val}),{})};function UE(r){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:t="px",step:n=5}=r,s=Vs(r,LE),a=IE(e),u=Object.keys(a);function c(_){return`@media (min-width:${typeof e[_]=="number"?e[_]:_}${t})`}function h(_){return`@media (max-width:${(typeof e[_]=="number"?e[_]:_)-n/100}${t})`}function d(_,x){const E=u.indexOf(x);return`@media (min-width:${typeof e[_]=="number"?e[_]:_}${t}) and (max-width:${(E!==-1&&typeof e[u[E]]=="number"?e[u[E]]:x)-n/100}${t})`}function p(_){return u.indexOf(_)+1<u.length?d(_,u[u.indexOf(_)+1]):c(_)}function m(_){const x=u.indexOf(_);return x===0?c(u[1]):x===u.length-1?h(u[x]):d(_,u[u.indexOf(_)+1]).replace("@media","@media not all and")}return jt({keys:u,values:a,up:c,down:h,between:d,only:p,not:m,unit:t},s)}const NE={borderRadius:4};function Vl(r,e){return e?Kr(r,e,{clone:!1}):r}const Om={xs:0,sm:600,md:900,lg:1200,xl:1536},iv={keys:["xs","sm","md","lg","xl"],up:r=>`@media (min-width:${Om[r]}px)`};function Qr(r,e,t){const n=r.theme||{};if(Array.isArray(e)){const a=n.breakpoints||iv;return e.reduce((u,c,h)=>(u[a.up(a.keys[h])]=t(e[h]),u),{})}if(typeof e=="object"){const a=n.breakpoints||iv;return Object.keys(e).reduce((u,c)=>{if(Object.keys(a.values||Om).indexOf(c)!==-1){const h=a.up(c);u[h]=t(e[c],c)}else{const h=c;u[h]=e[h]}return u},{})}return t(e)}function OE(r={}){var e;return((e=r.keys)==null?void 0:e.reduce((n,s)=>{const a=r.up(s);return n[a]={},n},{}))||{}}function FE(r,e){return r.reduce((t,n)=>{const s=t[n];return(!s||Object.keys(s).length===0)&&delete t[n],t},e)}function ox(r){if(typeof r!="string")throw new Error(Kl(7));return r.charAt(0).toUpperCase()+r.slice(1)}function kf(r,e,t=!0){if(!e||typeof e!="string")return null;if(r&&r.vars&&t){const n=`vars.${e}`.split(".").reduce((s,a)=>s&&s[a]?s[a]:null,r);if(n!=null)return n}return e.split(".").reduce((n,s)=>n&&n[s]!=null?n[s]:null,r)}function xf(r,e,t,n=t){let s;return typeof r=="function"?s=r(t):Array.isArray(r)?s=r[t]||n:s=kf(r,t)||n,e&&(s=e(s,n,r)),s}function an(r){const{prop:e,cssProperty:t=r.prop,themeKey:n,transform:s}=r,a=u=>{if(u[e]==null)return null;const c=u[e],h=u.theme,d=kf(h,n)||{};return Qr(u,c,m=>{let _=xf(d,s,m);return m===_&&typeof m=="string"&&(_=xf(d,s,`${e}${m==="default"?"":ox(m)}`,m)),t===!1?_:{[t]:_}})};return a.propTypes={},a.filterProps=[e],a}function kE(r){const e={};return t=>(e[t]===void 0&&(e[t]=r(t)),e[t])}const zE={m:"margin",p:"padding"},BE={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},rv={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},HE=kE(r=>{if(r.length>2)if(rv[r])r=rv[r];else return[r];const[e,t]=r.split(""),n=zE[e],s=BE[t]||"";return Array.isArray(s)?s.map(a=>n+a):[n+s]}),Fm=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],km=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Fm,...km];function pu(r,e,t,n){var s;const a=(s=kf(r,e,!1))!=null?s:t;return typeof a=="number"?u=>typeof u=="string"?u:a*u:Array.isArray(a)?u=>typeof u=="string"?u:a[u]:typeof a=="function"?a:()=>{}}function ax(r){return pu(r,"spacing",8)}function mu(r,e){if(typeof e=="string"||e==null)return e;const t=Math.abs(e),n=r(t);return e>=0?n:typeof n=="number"?-n:`-${n}`}function VE(r,e){return t=>r.reduce((n,s)=>(n[s]=mu(e,t),n),{})}function GE(r,e,t,n){if(e.indexOf(t)===-1)return null;const s=HE(t),a=VE(s,n),u=r[t];return Qr(r,u,a)}function lx(r,e){const t=ax(r.theme);return Object.keys(r).map(n=>GE(r,e,n,t)).reduce(Vl,{})}function tn(r){return lx(r,Fm)}tn.propTypes={};tn.filterProps=Fm;function nn(r){return lx(r,km)}nn.propTypes={};nn.filterProps=km;function WE(r=8){if(r.mui)return r;const e=ax({spacing:r}),t=(...n)=>(n.length===0?[1]:n).map(a=>{const u=e(a);return typeof u=="number"?`${u}px`:u}).join(" ");return t.mui=!0,t}function zf(...r){const e=r.reduce((n,s)=>(s.filterProps.forEach(a=>{n[a]=s}),n),{}),t=n=>Object.keys(n).reduce((s,a)=>e[a]?Vl(s,e[a](n)):s,{});return t.propTypes={},t.filterProps=r.reduce((n,s)=>n.concat(s.filterProps),[]),t}function Hi(r){return typeof r!="number"?r:`${r}px solid`}function Wi(r,e){return an({prop:r,themeKey:"borders",transform:e})}const XE=Wi("border",Hi),jE=Wi("borderTop",Hi),YE=Wi("borderRight",Hi),$E=Wi("borderBottom",Hi),qE=Wi("borderLeft",Hi),KE=Wi("borderColor"),ZE=Wi("borderTopColor"),QE=Wi("borderRightColor"),JE=Wi("borderBottomColor"),eT=Wi("borderLeftColor"),tT=Wi("outline",Hi),nT=Wi("outlineColor"),Bf=r=>{if(r.borderRadius!==void 0&&r.borderRadius!==null){const e=pu(r.theme,"shape.borderRadius",4),t=n=>({borderRadius:mu(e,n)});return Qr(r,r.borderRadius,t)}return null};Bf.propTypes={};Bf.filterProps=["borderRadius"];zf(XE,jE,YE,$E,qE,KE,ZE,QE,JE,eT,Bf,tT,nT);const Hf=r=>{if(r.gap!==void 0&&r.gap!==null){const e=pu(r.theme,"spacing",8),t=n=>({gap:mu(e,n)});return Qr(r,r.gap,t)}return null};Hf.propTypes={};Hf.filterProps=["gap"];const Vf=r=>{if(r.columnGap!==void 0&&r.columnGap!==null){const e=pu(r.theme,"spacing",8),t=n=>({columnGap:mu(e,n)});return Qr(r,r.columnGap,t)}return null};Vf.propTypes={};Vf.filterProps=["columnGap"];const Gf=r=>{if(r.rowGap!==void 0&&r.rowGap!==null){const e=pu(r.theme,"spacing",8),t=n=>({rowGap:mu(e,n)});return Qr(r,r.rowGap,t)}return null};Gf.propTypes={};Gf.filterProps=["rowGap"];const iT=an({prop:"gridColumn"}),rT=an({prop:"gridRow"}),sT=an({prop:"gridAutoFlow"}),oT=an({prop:"gridAutoColumns"}),aT=an({prop:"gridAutoRows"}),lT=an({prop:"gridTemplateColumns"}),uT=an({prop:"gridTemplateRows"}),cT=an({prop:"gridTemplateAreas"}),fT=an({prop:"gridArea"});zf(Hf,Vf,Gf,iT,rT,sT,oT,aT,lT,uT,cT,fT);function ba(r,e){return e==="grey"?e:r}const hT=an({prop:"color",themeKey:"palette",transform:ba}),dT=an({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:ba}),pT=an({prop:"backgroundColor",themeKey:"palette",transform:ba});zf(hT,dT,pT);function Ti(r){return r<=1&&r!==0?`${r*100}%`:r}const mT=an({prop:"width",transform:Ti}),zm=r=>{if(r.maxWidth!==void 0&&r.maxWidth!==null){const e=t=>{var n,s;const a=((n=r.theme)==null||(n=n.breakpoints)==null||(n=n.values)==null?void 0:n[t])||Om[t];return a?((s=r.theme)==null||(s=s.breakpoints)==null?void 0:s.unit)!=="px"?{maxWidth:`${a}${r.theme.breakpoints.unit}`}:{maxWidth:a}:{maxWidth:Ti(t)}};return Qr(r,r.maxWidth,e)}return null};zm.filterProps=["maxWidth"];const gT=an({prop:"minWidth",transform:Ti}),_T=an({prop:"height",transform:Ti}),vT=an({prop:"maxHeight",transform:Ti}),yT=an({prop:"minHeight",transform:Ti});an({prop:"size",cssProperty:"width",transform:Ti});an({prop:"size",cssProperty:"height",transform:Ti});const xT=an({prop:"boxSizing"});zf(mT,zm,gT,_T,vT,yT,xT);const Wf={border:{themeKey:"borders",transform:Hi},borderTop:{themeKey:"borders",transform:Hi},borderRight:{themeKey:"borders",transform:Hi},borderBottom:{themeKey:"borders",transform:Hi},borderLeft:{themeKey:"borders",transform:Hi},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Hi},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Bf},color:{themeKey:"palette",transform:ba},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:ba},backgroundColor:{themeKey:"palette",transform:ba},p:{style:nn},pt:{style:nn},pr:{style:nn},pb:{style:nn},pl:{style:nn},px:{style:nn},py:{style:nn},padding:{style:nn},paddingTop:{style:nn},paddingRight:{style:nn},paddingBottom:{style:nn},paddingLeft:{style:nn},paddingX:{style:nn},paddingY:{style:nn},paddingInline:{style:nn},paddingInlineStart:{style:nn},paddingInlineEnd:{style:nn},paddingBlock:{style:nn},paddingBlockStart:{style:nn},paddingBlockEnd:{style:nn},m:{style:tn},mt:{style:tn},mr:{style:tn},mb:{style:tn},ml:{style:tn},mx:{style:tn},my:{style:tn},margin:{style:tn},marginTop:{style:tn},marginRight:{style:tn},marginBottom:{style:tn},marginLeft:{style:tn},marginX:{style:tn},marginY:{style:tn},marginInline:{style:tn},marginInlineStart:{style:tn},marginInlineEnd:{style:tn},marginBlock:{style:tn},marginBlockStart:{style:tn},marginBlockEnd:{style:tn},displayPrint:{cssProperty:!1,transform:r=>({"@media print":{display:r}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Hf},rowGap:{style:Gf},columnGap:{style:Vf},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Ti},maxWidth:{style:zm},minWidth:{transform:Ti},height:{transform:Ti},maxHeight:{transform:Ti},minHeight:{transform:Ti},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function ST(...r){const e=r.reduce((n,s)=>n.concat(Object.keys(s)),[]),t=new Set(e);return r.every(n=>t.size===Object.keys(n).length)}function MT(r,e){return typeof r=="function"?r(e):r}function ET(){function r(t,n,s,a){const u={[t]:n,theme:s},c=a[t];if(!c)return{[t]:n};const{cssProperty:h=t,themeKey:d,transform:p,style:m}=c;if(n==null)return null;if(d==="typography"&&n==="inherit")return{[t]:n};const _=kf(s,d)||{};return m?m(u):Qr(u,n,E=>{let S=xf(_,p,E);return E===S&&typeof E=="string"&&(S=xf(_,p,`${t}${E==="default"?"":ox(E)}`,E)),h===!1?S:{[h]:S}})}function e(t){var n;const{sx:s,theme:a={}}=t||{};if(!s)return null;const u=(n=a.unstable_sxConfig)!=null?n:Wf;function c(h){let d=h;if(typeof h=="function")d=h(a);else if(typeof h!="object")return h;if(!d)return null;const p=OE(a.breakpoints),m=Object.keys(p);let _=p;return Object.keys(d).forEach(x=>{const E=MT(d[x],a);if(E!=null)if(typeof E=="object")if(u[x])_=Vl(_,r(x,E,a,u));else{const S=Qr({theme:a},E,y=>({[x]:y}));ST(S,E)?_[x]=e({sx:E,theme:a}):_=Vl(_,S)}else _=Vl(_,r(x,E,a,u))}),FE(m,_)}return Array.isArray(s)?s.map(c):c(s)}return e}const Xf=ET();Xf.filterProps=["sx"];function TT(r,e){const t=this;return t.vars&&typeof t.getColorSchemeSelector=="function"?{[t.getColorSchemeSelector(r).replace(/(\[[^\]]+\])/,"*:where($1)")]:e}:t.palette.mode===r?e:{}}const wT=["breakpoints","palette","spacing","shape"];function ux(r={},...e){const{breakpoints:t={},palette:n={},spacing:s,shape:a={}}=r,u=Vs(r,wT),c=UE(t),h=WE(s);let d=Kr({breakpoints:c,direction:"ltr",components:{},palette:jt({mode:"light"},n),spacing:h,shape:jt({},NE,a)},u);return d.applyStyles=TT,d=e.reduce((p,m)=>Kr(p,m),d),d.unstable_sxConfig=jt({},Wf,u==null?void 0:u.unstable_sxConfig),d.unstable_sx=function(m){return Xf({sx:m,theme:this})},d}function AT(r){return Object.keys(r).length===0}function bT(r=null){const e=Lt.useContext(rx);return!e||AT(e)?r:e}const CT=ux();function RT(r=CT){return bT(r)}const PT=["sx"],DT=r=>{var e,t;const n={systemProps:{},otherProps:{}},s=(e=r==null||(t=r.theme)==null?void 0:t.unstable_sxConfig)!=null?e:Wf;return Object.keys(r).forEach(a=>{s[a]?n.systemProps[a]=r[a]:n.otherProps[a]=r[a]}),n};function LT(r){const{sx:e}=r,t=Vs(r,PT),{systemProps:n,otherProps:s}=DT(t);let a;return Array.isArray(e)?a=[n,...e]:typeof e=="function"?a=(...u)=>{const c=e(...u);return go(c)?jt({},n,c):n}:a=jt({},n,e),jt({},s,{sx:a})}const sv=r=>r,IT=()=>{let r=sv;return{configure(e){r=e},generate(e){return r(e)},reset(){r=sv}}},cx=IT();function fx(r){var e,t,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(e=0;e<s;e++)r[e]&&(t=fx(r[e]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t);return n}function UT(){for(var r,e,t=0,n="",s=arguments.length;t<s;t++)(r=arguments[t])&&(e=fx(r))&&(n&&(n+=" "),n+=e);return n}const NT=["className","component"];function OT(r={}){const{themeId:e,defaultTheme:t,defaultClassName:n="MuiBox-root",generateClassName:s}=r,a=DE("div",{shouldForwardProp:c=>c!=="theme"&&c!=="sx"&&c!=="as"})(Xf);return Lt.forwardRef(function(h,d){const p=RT(t),m=LT(h),{className:_,component:x="div"}=m,E=Vs(m,NT);return Yr.jsx(a,jt({as:x,ref:d,className:UT(_,s?s(n):n),theme:e&&p[e]||p},E))})}const FT={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function kT(r,e,t="Mui"){const n=FT[e];return n?`${t}-${n}`:`${cx.generate(r)}-${e}`}function zT(r,e,t="Mui"){const n={};return e.forEach(s=>{n[s]=kT(r,s,t)}),n}function BT(r,e=Number.MIN_SAFE_INTEGER,t=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(r,t))}const HT=Object.freeze(Object.defineProperty({__proto__:null,default:BT},Symbol.toStringTag,{value:"Module"}));function VT(r,e){return jt({toolbar:{minHeight:56,[r.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[r.up("sm")]:{minHeight:64}}},e)}var qt={},Od={exports:{}},ov;function GT(){return ov||(ov=1,function(r){function e(t){return t&&t.__esModule?t:{default:t}}r.exports=e,r.exports.__esModule=!0,r.exports.default=r.exports}(Od)),Od.exports}const WT=Xy(U1),XT=Xy(HT);var av;function jT(){if(av)return qt;av=1;var r=GT();Object.defineProperty(qt,"__esModule",{value:!0}),qt.alpha=E,qt.blend=L,qt.colorChannel=void 0,qt.darken=y,qt.decomposeColor=u,qt.emphasize=b,qt.getContrastRatio=x,qt.getLuminance=_,qt.hexToRgb=s,qt.hslToRgb=m,qt.lighten=R,qt.private_safeAlpha=S,qt.private_safeColorChannel=void 0,qt.private_safeDarken=v,qt.private_safeEmphasize=N,qt.private_safeLighten=P,qt.recomposeColor=d,qt.rgbToHex=p;var e=r(WT),t=r(XT);function n(T,U=0,w=1){return(0,t.default)(T,U,w)}function s(T){T=T.slice(1);const U=new RegExp(`.{1,${T.length>=6?2:1}}`,"g");let w=T.match(U);return w&&w[0].length===1&&(w=w.map(A=>A+A)),w?`rgb${w.length===4?"a":""}(${w.map((A,k)=>k<3?parseInt(A,16):Math.round(parseInt(A,16)/255*1e3)/1e3).join(", ")})`:""}function a(T){const U=T.toString(16);return U.length===1?`0${U}`:U}function u(T){if(T.type)return T;if(T.charAt(0)==="#")return u(s(T));const U=T.indexOf("("),w=T.substring(0,U);if(["rgb","rgba","hsl","hsla","color"].indexOf(w)===-1)throw new Error((0,e.default)(9,T));let A=T.substring(U+1,T.length-1),k;if(w==="color"){if(A=A.split(" "),k=A.shift(),A.length===4&&A[3].charAt(0)==="/"&&(A[3]=A[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(k)===-1)throw new Error((0,e.default)(10,k))}else A=A.split(",");return A=A.map($=>parseFloat($)),{type:w,values:A,colorSpace:k}}const c=T=>{const U=u(T);return U.values.slice(0,3).map((w,A)=>U.type.indexOf("hsl")!==-1&&A!==0?`${w}%`:w).join(" ")};qt.colorChannel=c;const h=(T,U)=>{try{return c(T)}catch{return T}};qt.private_safeColorChannel=h;function d(T){const{type:U,colorSpace:w}=T;let{values:A}=T;return U.indexOf("rgb")!==-1?A=A.map((k,$)=>$<3?parseInt(k,10):k):U.indexOf("hsl")!==-1&&(A[1]=`${A[1]}%`,A[2]=`${A[2]}%`),U.indexOf("color")!==-1?A=`${w} ${A.join(" ")}`:A=`${A.join(", ")}`,`${U}(${A})`}function p(T){if(T.indexOf("#")===0)return T;const{values:U}=u(T);return`#${U.map((w,A)=>a(A===3?Math.round(255*w):w)).join("")}`}function m(T){T=u(T);const{values:U}=T,w=U[0],A=U[1]/100,k=U[2]/100,$=A*Math.min(k,1-k),j=(K,ce=(K+w/30)%12)=>k-$*Math.max(Math.min(ce-3,9-ce,1),-1);let re="rgb";const ae=[Math.round(j(0)*255),Math.round(j(8)*255),Math.round(j(4)*255)];return T.type==="hsla"&&(re+="a",ae.push(U[3])),d({type:re,values:ae})}function _(T){T=u(T);let U=T.type==="hsl"||T.type==="hsla"?u(m(T)).values:T.values;return U=U.map(w=>(T.type!=="color"&&(w/=255),w<=.03928?w/12.92:((w+.055)/1.055)**2.4)),Number((.2126*U[0]+.7152*U[1]+.0722*U[2]).toFixed(3))}function x(T,U){const w=_(T),A=_(U);return(Math.max(w,A)+.05)/(Math.min(w,A)+.05)}function E(T,U){return T=u(T),U=n(U),(T.type==="rgb"||T.type==="hsl")&&(T.type+="a"),T.type==="color"?T.values[3]=`/${U}`:T.values[3]=U,d(T)}function S(T,U,w){try{return E(T,U)}catch{return T}}function y(T,U){if(T=u(T),U=n(U),T.type.indexOf("hsl")!==-1)T.values[2]*=1-U;else if(T.type.indexOf("rgb")!==-1||T.type.indexOf("color")!==-1)for(let w=0;w<3;w+=1)T.values[w]*=1-U;return d(T)}function v(T,U,w){try{return y(T,U)}catch{return T}}function R(T,U){if(T=u(T),U=n(U),T.type.indexOf("hsl")!==-1)T.values[2]+=(100-T.values[2])*U;else if(T.type.indexOf("rgb")!==-1)for(let w=0;w<3;w+=1)T.values[w]+=(255-T.values[w])*U;else if(T.type.indexOf("color")!==-1)for(let w=0;w<3;w+=1)T.values[w]+=(1-T.values[w])*U;return d(T)}function P(T,U,w){try{return R(T,U)}catch{return T}}function b(T,U=.15){return _(T)>.5?y(T,U):R(T,U)}function N(T,U,w){try{return b(T,U)}catch{return T}}function L(T,U,w,A=1){const k=(ae,K)=>Math.round((ae**(1/A)*(1-w)+K**(1/A)*w)**A),$=u(T),j=u(U),re=[k($.values[0],j.values[0]),k($.values[1],j.values[1]),k($.values[2],j.values[2])];return d({type:"rgb",values:re})}return qt}var Rp=jT();const YT=["mode","contrastThreshold","tonalOffset"],lv={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:ql.white,default:ql.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Fd={text:{primary:ql.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:ql.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function uv(r,e,t,n){const s=n.light||n,a=n.dark||n*1.5;r[e]||(r.hasOwnProperty(t)?r[e]=r[t]:e==="light"?r.light=Rp.lighten(r.main,s):e==="dark"&&(r.dark=Rp.darken(r.main,a)))}function $T(r="light"){return r==="dark"?{main:ia[200],light:ia[50],dark:ia[400]}:{main:ia[700],light:ia[400],dark:ia[800]}}function qT(r="light"){return r==="dark"?{main:na[200],light:na[50],dark:na[400]}:{main:na[500],light:na[300],dark:na[700]}}function KT(r="light"){return r==="dark"?{main:ta[500],light:ta[300],dark:ta[700]}:{main:ta[700],light:ta[400],dark:ta[800]}}function ZT(r="light"){return r==="dark"?{main:ra[400],light:ra[300],dark:ra[700]}:{main:ra[700],light:ra[500],dark:ra[900]}}function QT(r="light"){return r==="dark"?{main:sa[400],light:sa[300],dark:sa[700]}:{main:sa[800],light:sa[500],dark:sa[900]}}function JT(r="light"){return r==="dark"?{main:Cl[400],light:Cl[300],dark:Cl[700]}:{main:"#ed6c02",light:Cl[500],dark:Cl[900]}}function ew(r){const{mode:e="light",contrastThreshold:t=3,tonalOffset:n=.2}=r,s=Vs(r,YT),a=r.primary||$T(e),u=r.secondary||qT(e),c=r.error||KT(e),h=r.info||ZT(e),d=r.success||QT(e),p=r.warning||JT(e);function m(S){return Rp.getContrastRatio(S,Fd.text.primary)>=t?Fd.text.primary:lv.text.primary}const _=({color:S,name:y,mainShade:v=500,lightShade:R=300,darkShade:P=700})=>{if(S=jt({},S),!S.main&&S[v]&&(S.main=S[v]),!S.hasOwnProperty("main"))throw new Error(Kl(11,y?` (${y})`:"",v));if(typeof S.main!="string")throw new Error(Kl(12,y?` (${y})`:"",JSON.stringify(S.main)));return uv(S,"light",R,n),uv(S,"dark",P,n),S.contrastText||(S.contrastText=m(S.main)),S},x={dark:Fd,light:lv};return Kr(jt({common:jt({},ql),mode:e,primary:_({color:a,name:"primary"}),secondary:_({color:u,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:_({color:c,name:"error"}),warning:_({color:p,name:"warning"}),info:_({color:h,name:"info"}),success:_({color:d,name:"success"}),grey:I1,contrastThreshold:t,getContrastText:m,augmentColor:_,tonalOffset:n},x[e]),s)}const tw=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function nw(r){return Math.round(r*1e5)/1e5}const cv={textTransform:"uppercase"},fv='"Roboto", "Helvetica", "Arial", sans-serif';function iw(r,e){const t=typeof e=="function"?e(r):e,{fontFamily:n=fv,fontSize:s=14,fontWeightLight:a=300,fontWeightRegular:u=400,fontWeightMedium:c=500,fontWeightBold:h=700,htmlFontSize:d=16,allVariants:p,pxToRem:m}=t,_=Vs(t,tw),x=s/14,E=m||(v=>`${v/d*x}rem`),S=(v,R,P,b,N)=>jt({fontFamily:n,fontWeight:v,fontSize:E(R),lineHeight:P},n===fv?{letterSpacing:`${nw(b/R)}em`}:{},N,p),y={h1:S(a,96,1.167,-1.5),h2:S(a,60,1.2,-.5),h3:S(u,48,1.167,0),h4:S(u,34,1.235,.25),h5:S(u,24,1.334,0),h6:S(c,20,1.6,.15),subtitle1:S(u,16,1.75,.15),subtitle2:S(c,14,1.57,.1),body1:S(u,16,1.5,.15),body2:S(u,14,1.43,.15),button:S(c,14,1.75,.4,cv),caption:S(u,12,1.66,.4),overline:S(u,12,2.66,1,cv),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Kr(jt({htmlFontSize:d,pxToRem:E,fontFamily:n,fontSize:s,fontWeightLight:a,fontWeightRegular:u,fontWeightMedium:c,fontWeightBold:h},y),_,{clone:!1})}const rw=.2,sw=.14,ow=.12;function Gt(...r){return[`${r[0]}px ${r[1]}px ${r[2]}px ${r[3]}px rgba(0,0,0,${rw})`,`${r[4]}px ${r[5]}px ${r[6]}px ${r[7]}px rgba(0,0,0,${sw})`,`${r[8]}px ${r[9]}px ${r[10]}px ${r[11]}px rgba(0,0,0,${ow})`].join(",")}const aw=["none",Gt(0,2,1,-1,0,1,1,0,0,1,3,0),Gt(0,3,1,-2,0,2,2,0,0,1,5,0),Gt(0,3,3,-2,0,3,4,0,0,1,8,0),Gt(0,2,4,-1,0,4,5,0,0,1,10,0),Gt(0,3,5,-1,0,5,8,0,0,1,14,0),Gt(0,3,5,-1,0,6,10,0,0,1,18,0),Gt(0,4,5,-2,0,7,10,1,0,2,16,1),Gt(0,5,5,-3,0,8,10,1,0,3,14,2),Gt(0,5,6,-3,0,9,12,1,0,3,16,2),Gt(0,6,6,-3,0,10,14,1,0,4,18,3),Gt(0,6,7,-4,0,11,15,1,0,4,20,3),Gt(0,7,8,-4,0,12,17,2,0,5,22,4),Gt(0,7,8,-4,0,13,19,2,0,5,24,4),Gt(0,7,9,-4,0,14,21,2,0,5,26,4),Gt(0,8,9,-5,0,15,22,2,0,6,28,5),Gt(0,8,10,-5,0,16,24,2,0,6,30,5),Gt(0,8,11,-5,0,17,26,2,0,6,32,5),Gt(0,9,11,-5,0,18,28,2,0,7,34,6),Gt(0,9,12,-6,0,19,29,2,0,7,36,6),Gt(0,10,13,-6,0,20,31,3,0,8,38,7),Gt(0,10,13,-6,0,21,33,3,0,8,40,7),Gt(0,10,14,-6,0,22,35,3,0,8,42,7),Gt(0,11,14,-7,0,23,36,3,0,9,44,8),Gt(0,11,15,-7,0,24,38,3,0,9,46,8)],lw=["duration","easing","delay"],uw={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},cw={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function hv(r){return`${Math.round(r)}ms`}function fw(r){if(!r)return 0;const e=r/36;return Math.round((4+15*e**.25+e/5)*10)}function hw(r){const e=jt({},uw,r.easing),t=jt({},cw,r.duration);return jt({getAutoHeightDuration:fw,create:(s=["all"],a={})=>{const{duration:u=t.standard,easing:c=e.easeInOut,delay:h=0}=a;return Vs(a,lw),(Array.isArray(s)?s:[s]).map(d=>`${d} ${typeof u=="string"?u:hv(u)} ${c} ${typeof h=="string"?h:hv(h)}`).join(",")}},r,{easing:e,duration:t})}const dw={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},pw=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function mw(r={},...e){const{mixins:t={},palette:n={},transitions:s={},typography:a={}}=r,u=Vs(r,pw);if(r.vars&&r.generateCssVars===void 0)throw new Error(Kl(18));const c=ew(n),h=ux(r);let d=Kr(h,{mixins:VT(h.breakpoints,t),palette:c,shadows:aw.slice(),typography:iw(c,a),transitions:hw(s),zIndex:jt({},dw)});return d=Kr(d,u),d=e.reduce((p,m)=>Kr(p,m),d),d.unstable_sxConfig=jt({},Wf,u==null?void 0:u.unstable_sxConfig),d.unstable_sx=function(m){return Xf({sx:m,theme:this})},d}const gw=zT("MuiBox",["root"]),_w=mw(),vw=OT({themeId:N1,defaultTheme:_w,defaultClassName:gw.root,generateClassName:cx.generate});var Gl=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(p){p.preventDefault(),n(++r%e.children.length)},!1);function t(p){return e.appendChild(p.dom),p}function n(p){for(var m=0;m<e.children.length;m++)e.children[m].style.display=m===p?"block":"none";r=p}var s=(performance||Date).now(),a=s,u=0,c=t(new Gl.Panel("FPS","#0ff","#002")),h=t(new Gl.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=t(new Gl.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){s=(performance||Date).now()},end:function(){u++;var p=(performance||Date).now();if(h.update(p-s,200),p>=a+1e3&&(c.update(u*1e3/(p-a),100),a=p,u=0,d)){var m=performance.memory;d.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return p},update:function(){s=this.end()},domElement:e,setMode:n}};Gl.Panel=function(r,e,t){var n=1/0,s=0,a=Math.round,u=a(window.devicePixelRatio||1),c=80*u,h=48*u,d=3*u,p=2*u,m=3*u,_=15*u,x=74*u,E=30*u,S=document.createElement("canvas");S.width=c,S.height=h,S.style.cssText="width:80px;height:48px";var y=S.getContext("2d");return y.font="bold "+9*u+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=t,y.fillRect(0,0,c,h),y.fillStyle=e,y.fillText(r,d,p),y.fillRect(m,_,x,E),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(m,_,x,E),{dom:S,update:function(v,R){n=Math.min(n,v),s=Math.max(s,v),y.fillStyle=t,y.globalAlpha=1,y.fillRect(0,0,c,_),y.fillStyle=e,y.fillText(a(v)+" "+r+" ("+a(n)+"-"+a(s)+")",d,p),y.drawImage(S,m+u,_,x-u,E,m,_,x-u,E),y.fillRect(m+x-u,_,u,E),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(m+x-u,_,u,a((1-v/R)*E))}}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bm="176",Ca={ROTATE:0,DOLLY:1,PAN:2},Ma={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yw=0,dv=1,xw=2,hx=1,Sw=2,Vr=3,Jr=0,ei=1,jr=2,Us=0,Ra=1,pv=2,mv=3,gv=4,Mw=5,_o=100,Ew=101,Tw=102,ww=103,Aw=104,bw=200,Cw=201,Rw=202,Pw=203,Pp=204,Dp=205,Dw=206,Lw=207,Iw=208,Uw=209,Nw=210,Ow=211,Fw=212,kw=213,zw=214,Lp=0,Ip=1,Up=2,Na=3,Np=4,Op=5,Fp=6,kp=7,Hm=0,Bw=1,Hw=2,Ns=0,Vw=1,Gw=2,Ww=3,Xw=4,jw=5,Yw=6,$w=7,dx=300,Oa=301,Fa=302,zp=303,Bp=304,jf=306,Sf=1e3,yo=1001,Hp=1002,nr=1003,qw=1004,Pc=1005,gr=1006,kd=1007,xo=1008,Sr=1009,px=1010,mx=1011,eu=1012,Vm=1013,Ao=1014,$r=1015,gu=1016,Gm=1017,Wm=1018,tu=1020,gx=35902,_x=1021,vx=1022,tr=1023,nu=1026,iu=1027,yx=1028,Xm=1029,xx=1030,jm=1031,Ym=1033,lf=33776,uf=33777,cf=33778,ff=33779,Vp=35840,Gp=35841,Wp=35842,Xp=35843,jp=36196,Yp=37492,$p=37496,qp=37808,Kp=37809,Zp=37810,Qp=37811,Jp=37812,em=37813,tm=37814,nm=37815,im=37816,rm=37817,sm=37818,om=37819,am=37820,lm=37821,hf=36492,um=36494,cm=36495,Sx=36283,fm=36284,hm=36285,dm=36286,Kw=3200,Zw=3201,$m=0,Qw=1,Ps="",Vn="srgb",ka="srgb-linear",Mf="linear",Dt="srgb",oa=7680,_v=519,Jw=512,eA=513,tA=514,Mx=515,nA=516,iA=517,rA=518,sA=519,vv=35044,yv="300 es",qr=2e3,Ef=2001;class Ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,u=s.length;a<u;a++)s[a].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xv=1234567;const Wl=Math.PI/180,ru=180/Math.PI;function Ya(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]).toLowerCase()}function mt(r,e,t){return Math.max(e,Math.min(t,r))}function qm(r,e){return(r%e+e)%e}function oA(r,e,t,n,s){return n+(r-e)*(s-n)/(t-e)}function aA(r,e,t){return r!==e?(t-r)/(e-r):0}function Xl(r,e,t){return(1-t)*r+t*e}function lA(r,e,t,n){return Xl(r,e,1-Math.exp(-t*n))}function uA(r,e=1){return e-Math.abs(qm(r,e*2)-e)}function cA(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function fA(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function hA(r,e){return r+Math.floor(Math.random()*(e-r+1))}function dA(r,e){return r+Math.random()*(e-r)}function pA(r){return r*(.5-Math.random())}function mA(r){r!==void 0&&(xv=r);let e=xv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gA(r){return r*Wl}function _A(r){return r*ru}function vA(r){return(r&r-1)===0&&r!==0}function yA(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function xA(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function SA(r,e,t,n,s){const a=Math.cos,u=Math.sin,c=a(t/2),h=u(t/2),d=a((e+n)/2),p=u((e+n)/2),m=a((e-n)/2),_=u((e-n)/2),x=a((n-e)/2),E=u((n-e)/2);switch(s){case"XYX":r.set(c*p,h*m,h*_,c*d);break;case"YZY":r.set(h*_,c*p,h*m,c*d);break;case"ZXZ":r.set(h*m,h*_,c*p,c*d);break;case"XZX":r.set(c*p,h*E,h*x,c*d);break;case"YXY":r.set(h*x,c*p,h*E,c*d);break;case"ZYZ":r.set(h*E,h*x,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ol={DEG2RAD:Wl,RAD2DEG:ru,generateUUID:Ya,clamp:mt,euclideanModulo:qm,mapLinear:oA,inverseLerp:aA,lerp:Xl,damp:lA,pingpong:uA,smoothstep:cA,smootherstep:fA,randInt:hA,randFloat:dA,randFloatSpread:pA,seededRandom:mA,degToRad:gA,radToDeg:_A,isPowerOfTwo:vA,ceilPowerOfTwo:yA,floorPowerOfTwo:xA,setQuaternionFromProperEuler:SA,normalize:Kn,denormalize:Sa};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*s+e.x,this.y=a*s+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,n,s,a,u,c,h,d){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,u,c,h,d)}set(e,t,n,s,a,u,c,h,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=a,p[5]=h,p[6]=n,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,u=n[0],c=n[3],h=n[6],d=n[1],p=n[4],m=n[7],_=n[2],x=n[5],E=n[8],S=s[0],y=s[3],v=s[6],R=s[1],P=s[4],b=s[7],N=s[2],L=s[5],T=s[8];return a[0]=u*S+c*R+h*N,a[3]=u*y+c*P+h*L,a[6]=u*v+c*b+h*T,a[1]=d*S+p*R+m*N,a[4]=d*y+p*P+m*L,a[7]=d*v+p*b+m*T,a[2]=_*S+x*R+E*N,a[5]=_*y+x*P+E*L,a[8]=_*v+x*b+E*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-n*a*p+n*c*h+s*a*d-s*u*h}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8],m=p*u-c*d,_=c*h-p*a,x=d*a-u*h,E=t*m+n*_+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/E;return e[0]=m*S,e[1]=(s*d-p*n)*S,e[2]=(c*n-s*u)*S,e[3]=_*S,e[4]=(p*t-s*h)*S,e[5]=(s*a-c*t)*S,e[6]=x*S,e[7]=(n*h-d*t)*S,e[8]=(u*t-n*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,u,c){const h=Math.cos(a),d=Math.sin(a);return this.set(n*h,n*d,-n*(h*u+d*c)+u+e,-s*d,s*h,-s*(-d*u+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(zd.makeScale(e,t)),this}rotate(e){return this.premultiply(zd.makeRotation(-e)),this}translate(e,t){return this.premultiply(zd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zd=new lt;function Ex(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function su(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function MA(){const r=su("canvas");return r.style.display="block",r}const Sv={};function df(r){r in Sv||(Sv[r]=!0,console.warn(r))}function EA(r,e,t){return new Promise(function(n,s){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function TA(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wA(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mv=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ev=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AA(){const r={enabled:!0,workingColorSpace:ka,spaces:{},convert:function(s,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===Dt&&(s.r=Zr(s.r),s.g=Zr(s.g),s.b=Zr(s.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(s.r=Pa(s.r),s.g=Pa(s.g),s.b=Pa(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ps?Mf:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,u){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ka]:{primaries:e,whitePoint:n,transfer:Mf,toXYZ:Mv,fromXYZ:Ev,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:n,transfer:Dt,toXYZ:Mv,fromXYZ:Ev,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),r}const Tt=AA();function Zr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Pa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let aa;class bA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{aa===void 0&&(aa=su("canvas")),aa.width=e.width,aa.height=e.height;const s=aa.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=aa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=su("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let u=0;u<a.length;u++)a[u]=Zr(a[u]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zr(t[n]/255)*255):t[n]=Zr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CA=0;class Km{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CA++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?a.push(Bd(s[u].image)):a.push(Bd(s[u]))}else a=Bd(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function Bd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bA.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RA=0;class ti extends Ro{constructor(e=ti.DEFAULT_IMAGE,t=ti.DEFAULT_MAPPING,n=yo,s=yo,a=gr,u=xo,c=tr,h=Sr,d=ti.DEFAULT_ANISOTROPY,p=Ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RA++}),this.uuid=Ya(),this.name="",this.source=new Km(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sf:e.x=e.x-Math.floor(e.x);break;case yo:e.x=e.x<0?0:1;break;case Hp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sf:e.y=e.y-Math.floor(e.y);break;case yo:e.y=e.y<0?0:1;break;case Hp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=dx;ti.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,n=0,s=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*s+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*s+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*s+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*s+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const h=e.elements,d=h[0],p=h[4],m=h[8],_=h[1],x=h[5],E=h[9],S=h[2],y=h[6],v=h[10];if(Math.abs(p-_)<.01&&Math.abs(m-S)<.01&&Math.abs(E-y)<.01){if(Math.abs(p+_)<.1&&Math.abs(m+S)<.1&&Math.abs(E+y)<.1&&Math.abs(d+x+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(d+1)/2,b=(x+1)/2,N=(v+1)/2,L=(p+_)/4,T=(m+S)/4,U=(E+y)/4;return P>b&&P>N?P<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(P),s=L/n,a=T/n):b>N?b<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),n=L/s,a=U/s):N<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(N),n=T/a,s=U/a),this.set(n,s,a,t),this}let R=Math.sqrt((y-E)*(y-E)+(m-S)*(m-S)+(_-p)*(_-p));return Math.abs(R)<.001&&(R=1),this.x=(y-E)/R,this.y=(m-S)/R,this.z=(_-p)/R,this.w=Math.acos((d+x+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PA extends Ro{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);const s={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const a=new ti(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Km(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ks extends PA{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tx extends ti{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nr,this.minFilter=nr,this.wrapR=yo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DA extends ti{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nr,this.minFilter=nr,this.wrapR=yo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,u,c){let h=n[s+0],d=n[s+1],p=n[s+2],m=n[s+3];const _=a[u+0],x=a[u+1],E=a[u+2],S=a[u+3];if(c===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=m;return}if(c===1){e[t+0]=_,e[t+1]=x,e[t+2]=E,e[t+3]=S;return}if(m!==S||h!==_||d!==x||p!==E){let y=1-c;const v=h*_+d*x+p*E+m*S,R=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const N=Math.sqrt(P),L=Math.atan2(N,v*R);y=Math.sin(y*L)/N,c=Math.sin(c*L)/N}const b=c*R;if(h=h*y+_*b,d=d*y+x*b,p=p*y+E*b,m=m*y+S*b,y===1-c){const N=1/Math.sqrt(h*h+d*d+p*p+m*m);h*=N,d*=N,p*=N,m*=N}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,a,u){const c=n[s],h=n[s+1],d=n[s+2],p=n[s+3],m=a[u],_=a[u+1],x=a[u+2],E=a[u+3];return e[t]=c*E+p*m+h*x-d*_,e[t+1]=h*E+p*_+d*m-c*x,e[t+2]=d*E+p*x+c*_-h*m,e[t+3]=p*E-c*m-h*_-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,u=e._order,c=Math.cos,h=Math.sin,d=c(n/2),p=c(s/2),m=c(a/2),_=h(n/2),x=h(s/2),E=h(a/2);switch(u){case"XYZ":this._x=_*p*m+d*x*E,this._y=d*x*m-_*p*E,this._z=d*p*E+_*x*m,this._w=d*p*m-_*x*E;break;case"YXZ":this._x=_*p*m+d*x*E,this._y=d*x*m-_*p*E,this._z=d*p*E-_*x*m,this._w=d*p*m+_*x*E;break;case"ZXY":this._x=_*p*m-d*x*E,this._y=d*x*m+_*p*E,this._z=d*p*E+_*x*m,this._w=d*p*m-_*x*E;break;case"ZYX":this._x=_*p*m-d*x*E,this._y=d*x*m+_*p*E,this._z=d*p*E-_*x*m,this._w=d*p*m+_*x*E;break;case"YZX":this._x=_*p*m+d*x*E,this._y=d*x*m+_*p*E,this._z=d*p*E-_*x*m,this._w=d*p*m-_*x*E;break;case"XZY":this._x=_*p*m-d*x*E,this._y=d*x*m-_*p*E,this._z=d*p*E+_*x*m,this._w=d*p*m+_*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],u=t[1],c=t[5],h=t[9],d=t[2],p=t[6],m=t[10],_=n+c+m;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(p-h)*x,this._y=(a-d)*x,this._z=(u-s)*x}else if(n>c&&n>m){const x=2*Math.sqrt(1+n-c-m);this._w=(p-h)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(a+d)/x}else if(c>m){const x=2*Math.sqrt(1+c-n-m);this._w=(a-d)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(h+p)/x}else{const x=2*Math.sqrt(1+m-n-c);this._w=(u-s)/x,this._x=(a+d)/x,this._y=(h+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,u=e._w,c=t._x,h=t._y,d=t._z,p=t._w;return this._x=n*p+u*c+s*d-a*h,this._y=s*p+u*h+a*c-n*d,this._z=a*p+u*d+n*h-s*c,this._w=u*p-n*c-s*h-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,u=this._w;let c=u*e._w+n*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=s,this._z=a,this;const h=1-c*c;if(h<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*n+t*this._x,this._y=x*s+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,c),m=Math.sin((1-t)*p)/d,_=Math.sin(t*p)/d;return this._w=u*m+this._w*_,this._x=n*m+this._x*_,this._y=s*m+this._y*_,this._z=a*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,u=e.y,c=e.z,h=e.w,d=2*(u*s-c*n),p=2*(c*t-a*s),m=2*(a*n-u*t);return this.x=t+h*d+u*m-c*p,this.y=n+h*p+c*d-a*m,this.z=s+h*m+a*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,u=t.x,c=t.y,h=t.z;return this.x=s*h-a*c,this.y=a*u-n*h,this.z=n*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hd=new W,Tv=new zs;class bo{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Zi):Zi.fromBufferAttribute(a,u),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dc.copy(n.boundingBox)),Dc.applyMatrix4(e.matrixWorld),this.union(Dc)}const s=e.children;for(let a=0,u=s.length;a<u;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pl),Lc.subVectors(this.max,Pl),la.subVectors(e.a,Pl),ua.subVectors(e.b,Pl),ca.subVectors(e.c,Pl),Ts.subVectors(ua,la),ws.subVectors(ca,ua),so.subVectors(la,ca);let t=[0,-Ts.z,Ts.y,0,-ws.z,ws.y,0,-so.z,so.y,Ts.z,0,-Ts.x,ws.z,0,-ws.x,so.z,0,-so.x,-Ts.y,Ts.x,0,-ws.y,ws.x,0,-so.y,so.x,0];return!Vd(t,la,ua,ca,Lc)||(t=[1,0,0,0,1,0,0,0,1],!Vd(t,la,ua,ca,Lc))?!1:(Ic.crossVectors(Ts,ws),t=[Ic.x,Ic.y,Ic.z],Vd(t,la,ua,ca,Lc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Or=[new W,new W,new W,new W,new W,new W,new W,new W],Zi=new W,Dc=new bo,la=new W,ua=new W,ca=new W,Ts=new W,ws=new W,so=new W,Pl=new W,Lc=new W,Ic=new W,oo=new W;function Vd(r,e,t,n,s){for(let a=0,u=r.length-3;a<=u;a+=3){oo.fromArray(r,a);const c=s.x*Math.abs(oo.x)+s.y*Math.abs(oo.y)+s.z*Math.abs(oo.z),h=e.dot(oo),d=t.dot(oo),p=n.dot(oo);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>c)return!1}return!0}const LA=new bo,Dl=new W,Gd=new W;class _u{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):LA.setFromPoints(e).getCenter(n);let s=0;for(let a=0,u=e.length;a<u;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dl.subVectors(e,this.center);const t=Dl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Dl,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dl.copy(e.center).add(Gd)),this.expandByPoint(Dl.copy(e.center).sub(Gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fr=new W,Wd=new W,Uc=new W,As=new W,Xd=new W,Nc=new W,jd=new W;class Yf{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fr.copy(this.origin).addScaledVector(this.direction,t),Fr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wd.copy(e).add(t).multiplyScalar(.5),Uc.copy(t).sub(e).normalize(),As.copy(this.origin).sub(Wd);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Uc),c=As.dot(this.direction),h=-As.dot(Uc),d=As.lengthSq(),p=Math.abs(1-u*u);let m,_,x,E;if(p>0)if(m=u*h-c,_=u*c-h,E=a*p,m>=0)if(_>=-E)if(_<=E){const S=1/p;m*=S,_*=S,x=m*(m+u*_+2*c)+_*(u*m+_+2*h)+d}else _=a,m=Math.max(0,-(u*_+c)),x=-m*m+_*(_+2*h)+d;else _=-a,m=Math.max(0,-(u*_+c)),x=-m*m+_*(_+2*h)+d;else _<=-E?(m=Math.max(0,-(-u*a+c)),_=m>0?-a:Math.min(Math.max(-a,-h),a),x=-m*m+_*(_+2*h)+d):_<=E?(m=0,_=Math.min(Math.max(-a,-h),a),x=_*(_+2*h)+d):(m=Math.max(0,-(u*a+c)),_=m>0?a:Math.min(Math.max(-a,-h),a),x=-m*m+_*(_+2*h)+d);else _=u>0?-a:a,m=Math.max(0,-(u*_+c)),x=-m*m+_*(_+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Wd).addScaledVector(Uc,_),x}intersectSphere(e,t){Fr.subVectors(e.center,this.origin);const n=Fr.dot(this.direction),s=Fr.dot(Fr)-n*n,a=e.radius*e.radius;if(s>a)return null;const u=Math.sqrt(a-s),c=n-u,h=n+u;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,u,c,h;const d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,_=this.origin;return d>=0?(n=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(n=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),p>=0?(a=(e.min.y-_.y)*p,u=(e.max.y-_.y)*p):(a=(e.max.y-_.y)*p,u=(e.min.y-_.y)*p),n>u||a>s||((a>n||isNaN(n))&&(n=a),(u<s||isNaN(s))&&(s=u),m>=0?(c=(e.min.z-_.z)*m,h=(e.max.z-_.z)*m):(c=(e.max.z-_.z)*m,h=(e.min.z-_.z)*m),n>h||c>s)||((c>n||n!==n)&&(n=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fr)!==null}intersectTriangle(e,t,n,s,a){Xd.subVectors(t,e),Nc.subVectors(n,e),jd.crossVectors(Xd,Nc);let u=this.direction.dot(jd),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;As.subVectors(this.origin,e);const h=c*this.direction.dot(Nc.crossVectors(As,Nc));if(h<0)return null;const d=c*this.direction.dot(Xd.cross(As));if(d<0||h+d>u)return null;const p=-c*As.dot(jd);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,n,s,a,u,c,h,d,p,m,_,x,E,S,y){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,u,c,h,d,p,m,_,x,E,S,y)}set(e,t,n,s,a,u,c,h,d,p,m,_,x,E,S,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=s,v[1]=a,v[5]=u,v[9]=c,v[13]=h,v[2]=d,v[6]=p,v[10]=m,v[14]=_,v[3]=x,v[7]=E,v[11]=S,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/fa.setFromMatrixColumn(e,0).length(),a=1/fa.setFromMatrixColumn(e,1).length(),u=1/fa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const _=u*p,x=u*m,E=c*p,S=c*m;t[0]=h*p,t[4]=-h*m,t[8]=d,t[1]=x+E*d,t[5]=_-S*d,t[9]=-c*h,t[2]=S-_*d,t[6]=E+x*d,t[10]=u*h}else if(e.order==="YXZ"){const _=h*p,x=h*m,E=d*p,S=d*m;t[0]=_+S*c,t[4]=E*c-x,t[8]=u*d,t[1]=u*m,t[5]=u*p,t[9]=-c,t[2]=x*c-E,t[6]=S+_*c,t[10]=u*h}else if(e.order==="ZXY"){const _=h*p,x=h*m,E=d*p,S=d*m;t[0]=_-S*c,t[4]=-u*m,t[8]=E+x*c,t[1]=x+E*c,t[5]=u*p,t[9]=S-_*c,t[2]=-u*d,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const _=u*p,x=u*m,E=c*p,S=c*m;t[0]=h*p,t[4]=E*d-x,t[8]=_*d+S,t[1]=h*m,t[5]=S*d+_,t[9]=x*d-E,t[2]=-d,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const _=u*h,x=u*d,E=c*h,S=c*d;t[0]=h*p,t[4]=S-_*m,t[8]=E*m+x,t[1]=m,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=x*m+E,t[10]=_-S*m}else if(e.order==="XZY"){const _=u*h,x=u*d,E=c*h,S=c*d;t[0]=h*p,t[4]=-m,t[8]=d*p,t[1]=_*m+S,t[5]=u*p,t[9]=x*m-E,t[2]=E*m-x,t[6]=c*p,t[10]=S*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(IA,e,UA)}lookAt(e,t,n){const s=this.elements;return xi.subVectors(e,t),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),bs.crossVectors(n,xi),bs.lengthSq()===0&&(Math.abs(n.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),bs.crossVectors(n,xi)),bs.normalize(),Oc.crossVectors(xi,bs),s[0]=bs.x,s[4]=Oc.x,s[8]=xi.x,s[1]=bs.y,s[5]=Oc.y,s[9]=xi.y,s[2]=bs.z,s[6]=Oc.z,s[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,u=n[0],c=n[4],h=n[8],d=n[12],p=n[1],m=n[5],_=n[9],x=n[13],E=n[2],S=n[6],y=n[10],v=n[14],R=n[3],P=n[7],b=n[11],N=n[15],L=s[0],T=s[4],U=s[8],w=s[12],A=s[1],k=s[5],$=s[9],j=s[13],re=s[2],ae=s[6],K=s[10],ce=s[14],F=s[3],se=s[7],Z=s[11],B=s[15];return a[0]=u*L+c*A+h*re+d*F,a[4]=u*T+c*k+h*ae+d*se,a[8]=u*U+c*$+h*K+d*Z,a[12]=u*w+c*j+h*ce+d*B,a[1]=p*L+m*A+_*re+x*F,a[5]=p*T+m*k+_*ae+x*se,a[9]=p*U+m*$+_*K+x*Z,a[13]=p*w+m*j+_*ce+x*B,a[2]=E*L+S*A+y*re+v*F,a[6]=E*T+S*k+y*ae+v*se,a[10]=E*U+S*$+y*K+v*Z,a[14]=E*w+S*j+y*ce+v*B,a[3]=R*L+P*A+b*re+N*F,a[7]=R*T+P*k+b*ae+N*se,a[11]=R*U+P*$+b*K+N*Z,a[15]=R*w+P*j+b*ce+N*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],u=e[1],c=e[5],h=e[9],d=e[13],p=e[2],m=e[6],_=e[10],x=e[14],E=e[3],S=e[7],y=e[11],v=e[15];return E*(+a*h*m-s*d*m-a*c*_+n*d*_+s*c*x-n*h*x)+S*(+t*h*x-t*d*_+a*u*_-s*u*x+s*d*p-a*h*p)+y*(+t*d*m-t*c*x-a*u*m+n*u*x+a*c*p-n*d*p)+v*(-s*c*p-t*h*m+t*c*_+s*u*m-n*u*_+n*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8],m=e[9],_=e[10],x=e[11],E=e[12],S=e[13],y=e[14],v=e[15],R=m*y*d-S*_*d+S*h*x-c*y*x-m*h*v+c*_*v,P=E*_*d-p*y*d-E*h*x+u*y*x+p*h*v-u*_*v,b=p*S*d-E*m*d+E*c*x-u*S*x-p*c*v+u*m*v,N=E*m*h-p*S*h-E*c*_+u*S*_+p*c*y-u*m*y,L=t*R+n*P+s*b+a*N;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/L;return e[0]=R*T,e[1]=(S*_*a-m*y*a-S*s*x+n*y*x+m*s*v-n*_*v)*T,e[2]=(c*y*a-S*h*a+S*s*d-n*y*d-c*s*v+n*h*v)*T,e[3]=(m*h*a-c*_*a-m*s*d+n*_*d+c*s*x-n*h*x)*T,e[4]=P*T,e[5]=(p*y*a-E*_*a+E*s*x-t*y*x-p*s*v+t*_*v)*T,e[6]=(E*h*a-u*y*a-E*s*d+t*y*d+u*s*v-t*h*v)*T,e[7]=(u*_*a-p*h*a+p*s*d-t*_*d-u*s*x+t*h*x)*T,e[8]=b*T,e[9]=(E*m*a-p*S*a-E*n*x+t*S*x+p*n*v-t*m*v)*T,e[10]=(u*S*a-E*c*a+E*n*d-t*S*d-u*n*v+t*c*v)*T,e[11]=(p*c*a-u*m*a-p*n*d+t*m*d+u*n*x-t*c*x)*T,e[12]=N*T,e[13]=(p*S*s-E*m*s+E*n*_-t*S*_-p*n*y+t*m*y)*T,e[14]=(E*c*s-u*S*s-E*n*h+t*S*h+u*n*y-t*c*y)*T,e[15]=(u*m*s-p*c*s+p*n*h-t*m*h-u*n*_+t*c*_)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,u=e.x,c=e.y,h=e.z,d=a*u,p=a*c;return this.set(d*u+n,d*c-s*h,d*h+s*c,0,d*c+s*h,p*c+n,p*h-s*u,0,d*h-s*c,p*h+s*u,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,u){return this.set(1,n,a,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,u=t._y,c=t._z,h=t._w,d=a+a,p=u+u,m=c+c,_=a*d,x=a*p,E=a*m,S=u*p,y=u*m,v=c*m,R=h*d,P=h*p,b=h*m,N=n.x,L=n.y,T=n.z;return s[0]=(1-(S+v))*N,s[1]=(x+b)*N,s[2]=(E-P)*N,s[3]=0,s[4]=(x-b)*L,s[5]=(1-(_+v))*L,s[6]=(y+R)*L,s[7]=0,s[8]=(E+P)*T,s[9]=(y-R)*T,s[10]=(1-(_+S))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=fa.set(s[0],s[1],s[2]).length();const u=fa.set(s[4],s[5],s[6]).length(),c=fa.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Qi.copy(this);const d=1/a,p=1/u,m=1/c;return Qi.elements[0]*=d,Qi.elements[1]*=d,Qi.elements[2]*=d,Qi.elements[4]*=p,Qi.elements[5]*=p,Qi.elements[6]*=p,Qi.elements[8]*=m,Qi.elements[9]*=m,Qi.elements[10]*=m,t.setFromRotationMatrix(Qi),n.x=a,n.y=u,n.z=c,this}makePerspective(e,t,n,s,a,u,c=qr){const h=this.elements,d=2*a/(t-e),p=2*a/(n-s),m=(t+e)/(t-e),_=(n+s)/(n-s);let x,E;if(c===qr)x=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===Ef)x=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=p,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,a,u,c=qr){const h=this.elements,d=1/(t-e),p=1/(n-s),m=1/(u-a),_=(t+e)*d,x=(n+s)*p;let E,S;if(c===qr)E=(u+a)*m,S=-2*m;else if(c===Ef)E=a*m,S=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=S,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fa=new W,Qi=new Ot,IA=new W(0,0,0),UA=new W(1,1,1),bs=new W,Oc=new W,xi=new W,wv=new Ot,Av=new zs;class ir{constructor(e=0,t=0,n=0,s=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],u=s[4],c=s[8],h=s[1],d=s[5],p=s[9],m=s[2],_=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wv,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Av.setFromEuler(this),this.setFromQuaternion(Av,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class wx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NA=0;const bv=new W,ha=new zs,kr=new Ot,Fc=new W,Ll=new W,OA=new W,FA=new zs,Cv=new W(1,0,0),Rv=new W(0,1,0),Pv=new W(0,0,1),Dv={type:"added"},kA={type:"removed"},da={type:"childadded",child:null},Yd={type:"childremoved",child:null};class wn extends Ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NA++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new W,t=new ir,n=new zs,s=new W(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ot},normalMatrix:{value:new lt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ha.setFromAxisAngle(e,t),this.quaternion.multiply(ha),this}rotateOnWorldAxis(e,t){return ha.setFromAxisAngle(e,t),this.quaternion.premultiply(ha),this}rotateX(e){return this.rotateOnAxis(Cv,e)}rotateY(e){return this.rotateOnAxis(Rv,e)}rotateZ(e){return this.rotateOnAxis(Pv,e)}translateOnAxis(e,t){return bv.copy(e).applyQuaternion(this.quaternion),this.position.add(bv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cv,e)}translateY(e){return this.translateOnAxis(Rv,e)}translateZ(e){return this.translateOnAxis(Pv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fc.copy(e):Fc.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kr.lookAt(Ll,Fc,this.up):kr.lookAt(Fc,Ll,this.up),this.quaternion.setFromRotationMatrix(kr),s&&(kr.extractRotation(s.matrixWorld),ha.setFromRotationMatrix(kr),this.quaternion.premultiply(ha.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dv),da.child=e,this.dispatchEvent(da),da.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kA),Yd.child=e,this.dispatchEvent(Yd),Yd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kr.multiply(e.parent.matrixWorld)),e.applyMatrix4(kr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dv),da.child=e,this.dispatchEvent(da),da.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,e,OA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,FA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?{min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}:void 0,boundingSphere:c.boundingSphere?{radius:c.boundingSphere.radius,center:c.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function a(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const m=h[d];a(e.shapes,m)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(a(e.materials,this.material[h]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];s.animations.push(a(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),d=u(e.textures),p=u(e.images),m=u(e.shapes),_=u(e.skeletons),x=u(e.animations),E=u(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),_.length>0&&(n.skeletons=_),x.length>0&&(n.animations=x),E.length>0&&(n.nodes=E)}return n.object=s,n;function u(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wn.DEFAULT_UP=new W(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ji=new W,zr=new W,$d=new W,Br=new W,pa=new W,ma=new W,Lv=new W,qd=new W,Kd=new W,Zd=new W,Qd=new Xt,Jd=new Xt,ep=new Xt;class er{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ji.subVectors(e,t),s.cross(Ji);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Ji.subVectors(s,t),zr.subVectors(n,t),$d.subVectors(e,t);const u=Ji.dot(Ji),c=Ji.dot(zr),h=Ji.dot($d),d=zr.dot(zr),p=zr.dot($d),m=u*d-c*c;if(m===0)return a.set(0,0,0),null;const _=1/m,x=(d*h-c*p)*_,E=(u*p-c*h)*_;return a.set(1-x-E,E,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Br)===null?!1:Br.x>=0&&Br.y>=0&&Br.x+Br.y<=1}static getInterpolation(e,t,n,s,a,u,c,h){return this.getBarycoord(e,t,n,s,Br)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Br.x),h.addScaledVector(u,Br.y),h.addScaledVector(c,Br.z),h)}static getInterpolatedAttribute(e,t,n,s,a,u){return Qd.setScalar(0),Jd.setScalar(0),ep.setScalar(0),Qd.fromBufferAttribute(e,t),Jd.fromBufferAttribute(e,n),ep.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Qd,a.x),u.addScaledVector(Jd,a.y),u.addScaledVector(ep,a.z),u}static isFrontFacing(e,t,n,s){return Ji.subVectors(n,t),zr.subVectors(e,t),Ji.cross(zr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),zr.subVectors(this.a,this.b),Ji.cross(zr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return er.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return er.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return er.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return er.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return er.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let u,c;pa.subVectors(s,n),ma.subVectors(a,n),qd.subVectors(e,n);const h=pa.dot(qd),d=ma.dot(qd);if(h<=0&&d<=0)return t.copy(n);Kd.subVectors(e,s);const p=pa.dot(Kd),m=ma.dot(Kd);if(p>=0&&m<=p)return t.copy(s);const _=h*m-p*d;if(_<=0&&h>=0&&p<=0)return u=h/(h-p),t.copy(n).addScaledVector(pa,u);Zd.subVectors(e,a);const x=pa.dot(Zd),E=ma.dot(Zd);if(E>=0&&x<=E)return t.copy(a);const S=x*d-h*E;if(S<=0&&d>=0&&E<=0)return c=d/(d-E),t.copy(n).addScaledVector(ma,c);const y=p*E-x*m;if(y<=0&&m-p>=0&&x-E>=0)return Lv.subVectors(a,s),c=(m-p)/(m-p+(x-E)),t.copy(s).addScaledVector(Lv,c);const v=1/(y+S+_);return u=S*v,c=_*v,t.copy(n).addScaledVector(pa,u).addScaledVector(ma,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cs={h:0,s:0,l:0},kc={h:0,s:0,l:0};function tp(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ut{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Tt.workingColorSpace){if(e=qm(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=tp(u,a,e+1/3),this.g=tp(u,a,e),this.b=tp(u,a,e-1/3)}return Tt.toWorkingColorSpace(this,s),this}setStyle(e,t=Vn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vn){const n=Ax[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return Tt.fromWorkingColorSpace(Bn.copy(this),e),Math.round(mt(Bn.r*255,0,255))*65536+Math.round(mt(Bn.g*255,0,255))*256+Math.round(mt(Bn.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(Bn.copy(this),t);const n=Bn.r,s=Bn.g,a=Bn.b,u=Math.max(n,s,a),c=Math.min(n,s,a);let h,d;const p=(c+u)/2;if(c===u)h=0,d=0;else{const m=u-c;switch(d=p<=.5?m/(u+c):m/(2-u-c),u){case n:h=(s-a)/m+(s<a?6:0);break;case s:h=(a-n)/m+2;break;case a:h=(n-s)/m+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Vn){Tt.fromWorkingColorSpace(Bn.copy(this),e);const t=Bn.r,n=Bn.g,s=Bn.b;return e!==Vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Cs),this.setHSL(Cs.h+e,Cs.s+t,Cs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cs),e.getHSL(kc);const n=Xl(Cs.h,kc.h,t),s=Xl(Cs.s,kc.s,t),a=Xl(Cs.l,kc.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new ut;ut.NAMES=Ax;let zA=0;class Mr extends Ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zA++}),this.uuid=Ya(),this.name="",this.type="Material",this.blending=Ra,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pp,this.blendDst=Dp,this.blendEquation=_o,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ra&&(n.blending=this.blending),this.side!==Jr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pp&&(n.blendSrc=this.blendSrc),this.blendDst!==Dp&&(n.blendDst=this.blendDst),this.blendEquation!==_o&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Na&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_v&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oa&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oa&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oa&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const u=[];for(const c in a){const h=a[c];delete h.metadata,u.push(h)}return u}if(t){const a=s(e.textures),u=s(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bx extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=Hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new W,zc=new ot;let BA=0;class yr{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vv,this.updateRanges=[],this.gpuType=$r,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zc.fromBufferAttribute(this,t),zc.applyMatrix3(e),this.setXY(t,zc.x,zc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array),s=Kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array),s=Kn(s,this.array),a=Kn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vv&&(e.usage=this.usage),e}}class Cx extends yr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rx extends yr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qn extends yr{constructor(e,t,n){super(new Float32Array(e),t,n)}}let HA=0;const ki=new Ot,np=new wn,ga=new W,Si=new bo,Il=new bo,Tn=new W;class rr extends Ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HA++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ex(e)?Rx:Cx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new lt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,t,n){return ki.makeTranslation(e,t,n),this.applyMatrix4(ki),this}scale(e,t,n){return ki.makeScale(e,t,n),this.applyMatrix4(ki),this}lookAt(e){return np.lookAt(e),np.updateMatrix(),this.applyMatrix4(np.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ga).negate(),this.translate(ga.x,ga.y,ga.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const u=e[s];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Qn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Si.setFromBufferAttribute(a),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _u);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];Il.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(Si.min,Il.min),Si.expandByPoint(Tn),Tn.addVectors(Si.max,Il.max),Si.expandByPoint(Tn)):(Si.expandByPoint(Il.min),Si.expandByPoint(Il.max))}Si.getCenter(n);let s=0;for(let a=0,u=e.count;a<u;a++)Tn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Tn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],h=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)Tn.fromBufferAttribute(c,d),h&&(ga.fromBufferAttribute(e,d),Tn.add(ga)),s=Math.max(s,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yr(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],h=[];for(let U=0;U<n.count;U++)c[U]=new W,h[U]=new W;const d=new W,p=new W,m=new W,_=new ot,x=new ot,E=new ot,S=new W,y=new W;function v(U,w,A){d.fromBufferAttribute(n,U),p.fromBufferAttribute(n,w),m.fromBufferAttribute(n,A),_.fromBufferAttribute(a,U),x.fromBufferAttribute(a,w),E.fromBufferAttribute(a,A),p.sub(d),m.sub(d),x.sub(_),E.sub(_);const k=1/(x.x*E.y-E.x*x.y);isFinite(k)&&(S.copy(p).multiplyScalar(E.y).addScaledVector(m,-x.y).multiplyScalar(k),y.copy(m).multiplyScalar(x.x).addScaledVector(p,-E.x).multiplyScalar(k),c[U].add(S),c[w].add(S),c[A].add(S),h[U].add(y),h[w].add(y),h[A].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let U=0,w=R.length;U<w;++U){const A=R[U],k=A.start,$=A.count;for(let j=k,re=k+$;j<re;j+=3)v(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const P=new W,b=new W,N=new W,L=new W;function T(U){N.fromBufferAttribute(s,U),L.copy(N);const w=c[U];P.copy(w),P.sub(N.multiplyScalar(N.dot(w))).normalize(),b.crossVectors(L,w);const k=b.dot(h[U])<0?-1:1;u.setXYZW(U,P.x,P.y,P.z,k)}for(let U=0,w=R.length;U<w;++U){const A=R[U],k=A.start,$=A.count;for(let j=k,re=k+$;j<re;j+=3)T(e.getX(j+0)),T(e.getX(j+1)),T(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,x=n.count;_<x;_++)n.setXYZ(_,0,0,0);const s=new W,a=new W,u=new W,c=new W,h=new W,d=new W,p=new W,m=new W;if(e)for(let _=0,x=e.count;_<x;_+=3){const E=e.getX(_+0),S=e.getX(_+1),y=e.getX(_+2);s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,S),u.fromBufferAttribute(t,y),p.subVectors(u,a),m.subVectors(s,a),p.cross(m),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),c.add(p),h.add(p),d.add(p),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(S,h.x,h.y,h.z),n.setXYZ(y,d.x,d.y,d.z)}else for(let _=0,x=t.count;_<x;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),p.subVectors(u,a),m.subVectors(s,a),p.cross(m),n.setXYZ(_+0,p.x,p.y,p.z),n.setXYZ(_+1,p.x,p.y,p.z),n.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(c,h){const d=c.array,p=c.itemSize,m=c.normalized,_=new d.constructor(h.length*p);let x=0,E=0;for(let S=0,y=h.length;S<y;S++){c.isInterleavedBufferAttribute?x=h[S]*c.data.stride+c.offset:x=h[S]*p;for(let v=0;v<p;v++)_[E++]=d[x++]}return new yr(_,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rr,n=this.index.array,s=this.attributes;for(const c in s){const h=s[c],d=e(h,n);t.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const h=[],d=a[c];for(let p=0,m=d.length;p<m;p++){const _=d[p],x=e(_,n);h.push(x)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const d=n[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let a=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let m=0,_=d.length;m<_;m++){const x=d[m];p.push(x.toJSON(e.data))}p.length>0&&(s[h]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],m=a[d];for(let _=0,x=m.length;_<x;_++)p.push(m[_].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Iv=new Ot,ao=new Yf,Bc=new _u,Uv=new W,Hc=new W,Vc=new W,Gc=new W,ip=new W,Wc=new W,Nv=new W,Xc=new W;class Ai extends wn{constructor(e=new rr,t=new bx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){Wc.set(0,0,0);for(let h=0,d=a.length;h<d;h++){const p=c[h],m=a[h];p!==0&&(ip.fromBufferAttribute(m,e),u?Wc.addScaledVector(ip,p):Wc.addScaledVector(ip.sub(t),p))}t.add(Wc)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bc.copy(n.boundingSphere),Bc.applyMatrix4(a),ao.copy(e.ray).recast(e.near),!(Bc.containsPoint(ao.origin)===!1&&(ao.intersectSphere(Bc,Uv)===null||ao.origin.distanceToSquared(Uv)>(e.far-e.near)**2))&&(Iv.copy(a).invert(),ao.copy(e.ray).applyMatrix4(Iv),!(n.boundingBox!==null&&ao.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ao)))}_computeIntersections(e,t,n){let s;const a=this.geometry,u=this.material,c=a.index,h=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,_=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,S=_.length;E<S;E++){const y=_[E],v=u[y.materialIndex],R=Math.max(y.start,x.start),P=Math.min(c.count,Math.min(y.start+y.count,x.start+x.count));for(let b=R,N=P;b<N;b+=3){const L=c.getX(b),T=c.getX(b+1),U=c.getX(b+2);s=jc(this,v,e,n,d,p,m,L,T,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),S=Math.min(c.count,x.start+x.count);for(let y=E,v=S;y<v;y+=3){const R=c.getX(y),P=c.getX(y+1),b=c.getX(y+2);s=jc(this,u,e,n,d,p,m,R,P,b),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,S=_.length;E<S;E++){const y=_[E],v=u[y.materialIndex],R=Math.max(y.start,x.start),P=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let b=R,N=P;b<N;b+=3){const L=b,T=b+1,U=b+2;s=jc(this,v,e,n,d,p,m,L,T,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),S=Math.min(h.count,x.start+x.count);for(let y=E,v=S;y<v;y+=3){const R=y,P=y+1,b=y+2;s=jc(this,u,e,n,d,p,m,R,P,b),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function VA(r,e,t,n,s,a,u,c){let h;if(e.side===ei?h=n.intersectTriangle(u,a,s,!0,c):h=n.intersectTriangle(s,a,u,e.side===Jr,c),h===null)return null;Xc.copy(c),Xc.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Xc);return d<t.near||d>t.far?null:{distance:d,point:Xc.clone(),object:r}}function jc(r,e,t,n,s,a,u,c,h,d){r.getVertexPosition(c,Hc),r.getVertexPosition(h,Vc),r.getVertexPosition(d,Gc);const p=VA(r,e,t,n,Hc,Vc,Gc,Nv);if(p){const m=new W;er.getBarycoord(Nv,Hc,Vc,Gc,m),s&&(p.uv=er.getInterpolatedAttribute(s,c,h,d,m,new ot)),a&&(p.uv1=er.getInterpolatedAttribute(a,c,h,d,m,new ot)),u&&(p.normal=er.getInterpolatedAttribute(u,c,h,d,m,new W),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:h,c:d,normal:new W,materialIndex:0};er.getNormal(Hc,Vc,Gc,_.normal),p.face=_,p.barycoord=m}return p}class $a extends rr{constructor(e=1,t=1,n=1,s=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:u};const c=this;s=Math.floor(s),a=Math.floor(a),u=Math.floor(u);const h=[],d=[],p=[],m=[];let _=0,x=0;E("z","y","x",-1,-1,n,t,e,u,a,0),E("z","y","x",1,-1,n,t,-e,u,a,1),E("x","z","y",1,1,e,n,t,s,u,2),E("x","z","y",1,-1,e,n,-t,s,u,3),E("x","y","z",1,-1,e,t,n,s,a,4),E("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(h),this.setAttribute("position",new Qn(d,3)),this.setAttribute("normal",new Qn(p,3)),this.setAttribute("uv",new Qn(m,2));function E(S,y,v,R,P,b,N,L,T,U,w){const A=b/T,k=N/U,$=b/2,j=N/2,re=L/2,ae=T+1,K=U+1;let ce=0,F=0;const se=new W;for(let Z=0;Z<K;Z++){const B=Z*k-j;for(let te=0;te<ae;te++){const we=te*A-$;se[S]=we*R,se[y]=B*P,se[v]=re,d.push(se.x,se.y,se.z),se[S]=0,se[y]=0,se[v]=L>0?1:-1,p.push(se.x,se.y,se.z),m.push(te/T),m.push(1-Z/U),ce+=1}}for(let Z=0;Z<U;Z++)for(let B=0;B<T;B++){const te=_+B+ae*Z,we=_+B+ae*(Z+1),Q=_+(B+1)+ae*(Z+1),ue=_+(B+1)+ae*Z;h.push(te,we,ue),h.push(we,Q,ue),F+=6}c.addGroup(x,F,w),x+=F,_+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function za(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Zn(r){const e={};for(let t=0;t<r.length;t++){const n=za(r[t]);for(const s in n)e[s]=n[s]}return e}function GA(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Px(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Tf={clone:za,merge:Zn};var WA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WA,this.fragmentShader=XA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=za(e.uniforms),this.uniformsGroups=GA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Dx extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=qr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rs=new W,Ov=new ot,Fv=new ot;class Ei extends Dx{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ru*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ru*2*Math.atan(Math.tan(Wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rs.x,Rs.y).multiplyScalar(-e/Rs.z),Rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rs.x,Rs.y).multiplyScalar(-e/Rs.z)}getViewSize(e,t){return this.getViewBounds(e,Ov,Fv),t.subVectors(Fv,Ov)}setViewOffset(e,t,n,s,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,d=u.fullHeight;a+=u.offsetX*s/h,t-=u.offsetY*n/d,s*=u.width/h,n*=u.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _a=-90,va=1;class jA extends wn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ei(_a,va,e,t);s.layers=this.layers,this.add(s);const a=new Ei(_a,va,e,t);a.layers=this.layers,this.add(a);const u=new Ei(_a,va,e,t);u.layers=this.layers,this.add(u);const c=new Ei(_a,va,e,t);c.layers=this.layers,this.add(c);const h=new Ei(_a,va,e,t);h.layers=this.layers,this.add(h);const d=new Ei(_a,va,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,u,c,h]=t;for(const d of t)this.remove(d);if(e===qr)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ef)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,h,d,p]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,u),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,h),e.setRenderTarget(n,4,s),e.render(t,d),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),e.render(t,p),e.setRenderTarget(m,_,x),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class Lx extends ti{constructor(e=[],t=Oa,n,s,a,u,c,h,d,p){super(e,t,n,s,a,u,c,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class YA extends ks{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Lx(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $a(5,5,5),a=new Er({name:"CubemapFromEquirect",uniforms:za(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ei,blending:Us});a.uniforms.tEquirect.value=t;const u=new Ai(s,a),c=t.minFilter;return t.minFilter===xo&&(t.minFilter=gr),new jA(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,s);e.setRenderTarget(a)}}class Fl extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $A={type:"move"};class rp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,u=null;const c=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const S of e.hand.values()){const y=t.getJointPose(S,n),v=this._getHandJoint(d,S);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],_=p.position.distanceTo(m.position),x=.02,E=.005;d.inputState.pinching&&_>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent($A)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class qA extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const sp=new W,KA=new W,ZA=new lt;class Wr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=sp.subVectors(n,t).cross(KA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sp),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ZA.getNormalMatrix(e),s=this.coplanarPoint(sp).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lo=new _u,Yc=new W;class Zm{constructor(e=new Wr,t=new Wr,n=new Wr,s=new Wr,a=new Wr,u=new Wr){this.planes=[e,t,n,s,a,u]}set(e,t,n,s,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qr){const n=this.planes,s=e.elements,a=s[0],u=s[1],c=s[2],h=s[3],d=s[4],p=s[5],m=s[6],_=s[7],x=s[8],E=s[9],S=s[10],y=s[11],v=s[12],R=s[13],P=s[14],b=s[15];if(n[0].setComponents(h-a,_-d,y-x,b-v).normalize(),n[1].setComponents(h+a,_+d,y+x,b+v).normalize(),n[2].setComponents(h+u,_+p,y+E,b+R).normalize(),n[3].setComponents(h-u,_-p,y-E,b-R).normalize(),n[4].setComponents(h-c,_-m,y-S,b-P).normalize(),t===qr)n[5].setComponents(h+c,_+m,y+S,b+P).normalize();else if(t===Ef)n[5].setComponents(c,m,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lo)}intersectsSprite(e){return lo.center.set(0,0,0),lo.radius=.7071067811865476,lo.applyMatrix4(e.matrixWorld),this.intersectsSphere(lo)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Yc.x=s.normal.x>0?e.max.x:e.min.x,Yc.y=s.normal.y>0?e.max.y:e.min.y,Yc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pf extends Mr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wf=new W,Af=new W,kv=new Ot,Ul=new Yf,$c=new _u,op=new W,zv=new W;class QA extends wn{constructor(e=new rr,t=new pf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)wf.fromBufferAttribute(t,s-1),Af.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=wf.distanceTo(Af);e.setAttribute("lineDistance",new Qn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$c.copy(n.boundingSphere),$c.applyMatrix4(s),$c.radius+=a,e.ray.intersectsSphere($c)===!1)return;kv.copy(s).invert(),Ul.copy(e.ray).applyMatrix4(kv);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=this.isLineSegments?2:1,p=n.index,_=n.attributes.position;if(p!==null){const x=Math.max(0,u.start),E=Math.min(p.count,u.start+u.count);for(let S=x,y=E-1;S<y;S+=d){const v=p.getX(S),R=p.getX(S+1),P=qc(this,e,Ul,h,v,R,S);P&&t.push(P)}if(this.isLineLoop){const S=p.getX(E-1),y=p.getX(x),v=qc(this,e,Ul,h,S,y,E-1);v&&t.push(v)}}else{const x=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let S=x,y=E-1;S<y;S+=d){const v=qc(this,e,Ul,h,S,S+1,S);v&&t.push(v)}if(this.isLineLoop){const S=qc(this,e,Ul,h,E-1,x,E-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function qc(r,e,t,n,s,a,u){const c=r.geometry.attributes.position;if(wf.fromBufferAttribute(c,s),Af.fromBufferAttribute(c,a),t.distanceSqToSegment(wf,Af,op,zv)>n)return;op.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(op);if(!(d<e.near||d>e.far))return{distance:d,point:zv.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const Bv=new W,Hv=new W;class Vv extends QA{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)Bv.fromBufferAttribute(t,s),Hv.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bv.distanceTo(Hv);e.setAttribute("lineDistance",new Qn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kl extends Mr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gv=new Ot,pm=new Yf,Kc=new _u,Zc=new W;class ap extends wn{constructor(e=new rr,t=new kl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kc.copy(n.boundingSphere),Kc.applyMatrix4(s),Kc.radius+=a,e.ray.intersectsSphere(Kc)===!1)return;Gv.copy(s).invert(),pm.copy(e.ray).applyMatrix4(Gv);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=n.index,m=n.attributes.position;if(d!==null){const _=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let E=_,S=x;E<S;E++){const y=d.getX(E);Zc.fromBufferAttribute(m,y),Wv(Zc,y,h,s,e,t,this)}}else{const _=Math.max(0,u.start),x=Math.min(m.count,u.start+u.count);for(let E=_,S=x;E<S;E++)Zc.fromBufferAttribute(m,E),Wv(Zc,E,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Wv(r,e,t,n,s,a,u){const c=pm.distanceSqToPoint(r);if(c<t){const h=new W;pm.closestPointToPoint(r,h),h.applyMatrix4(n);const d=s.ray.origin.distanceTo(h);if(d<s.near||d>s.far)return;a.push({distance:d,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Ix extends ti{constructor(e,t,n=Ao,s,a,u,c=nr,h=nr,d,p=nu){if(p!==nu&&p!==iu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,a,u,c,h,p,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Km(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vu extends rr{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,u=t/2,c=Math.floor(n),h=Math.floor(s),d=c+1,p=h+1,m=e/c,_=t/h,x=[],E=[],S=[],y=[];for(let v=0;v<p;v++){const R=v*_-u;for(let P=0;P<d;P++){const b=P*m-a;E.push(b,-R,0),S.push(0,0,1),y.push(P/c),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let R=0;R<c;R++){const P=R+d*v,b=R+d*(v+1),N=R+1+d*(v+1),L=R+1+d*v;x.push(P,b,L),x.push(b,N,L)}this.setIndex(x),this.setAttribute("position",new Qn(E,3)),this.setAttribute("normal",new Qn(S,3)),this.setAttribute("uv",new Qn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.width,e.height,e.widthSegments,e.heightSegments)}}class lp extends Mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$m,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class JA extends Mr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ut(16777215),this.specular=new ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$m,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=Hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eb extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tb extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ux{constructor(e,t,n){const s=this;let a=!1,u=0,c=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){c++,a===!1&&s.onStart!==void 0&&s.onStart(p,u,c),a=!0},this.itemEnd=function(p){u++,s.onProgress!==void 0&&s.onProgress(p,u,c),u===c&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,m){return d.push(p,m),this},this.removeHandler=function(p){const m=d.indexOf(p);return m!==-1&&d.splice(m,2),this},this.getHandler=function(p){for(let m=0,_=d.length;m<_;m+=2){const x=d[m],E=d[m+1];if(x.global&&(x.lastIndex=0),x.test(p))return E}return null}}}const nb=new Ux;class yu{constructor(e){this.manager=e!==void 0?e:nb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yu.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hr={};class ib extends Error{constructor(e,t){super(e),this.response=t}}class rb extends yu{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=bf.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Hr[e]!==void 0){Hr[e].push({onLoad:t,onProgress:n,onError:s});return}Hr[e]=[],Hr[e].push({onLoad:t,onProgress:n,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,h=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=Hr[e],m=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=_?parseInt(_):0,E=x!==0;let S=0;const y=new ReadableStream({start(v){R();function R(){m.read().then(({done:P,value:b})=>{if(P)v.close();else{S+=b.byteLength;const N=new ProgressEvent("progress",{lengthComputable:E,loaded:S,total:x});for(let L=0,T=p.length;L<T;L++){const U=p[L];U.onProgress&&U.onProgress(N)}v.enqueue(b),R()}},P=>{v.error(P)})}}});return new Response(y)}else throw new ib(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,c));case"json":return d.json();default:if(c==="")return d.text();{const m=/charset="?([^;"\s]*)"?/i.exec(c),_=m&&m[1]?m[1].toLowerCase():void 0,x=new TextDecoder(_);return d.arrayBuffer().then(E=>x.decode(E))}}}).then(d=>{bf.add(e,d);const p=Hr[e];delete Hr[e];for(let m=0,_=p.length;m<_;m++){const x=p[m];x.onLoad&&x.onLoad(d)}}).catch(d=>{const p=Hr[e];if(p===void 0)throw this.manager.itemError(e),d;delete Hr[e];for(let m=0,_=p.length;m<_;m++){const x=p[m];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class sb extends yu{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=bf.get(e);if(u!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u;const c=su("img");function h(){p(),bf.add(e,this),t&&t(this),a.manager.itemEnd(e)}function d(m){p(),s&&s(m),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){c.removeEventListener("load",h,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class Xv extends yu{constructor(e){super(e)}load(e,t,n,s){const a=new ti,u=new sb(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class Nx extends wn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const up=new Ot,jv=new W,Yv=new W;class ob{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Sr,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zm,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jv.setFromMatrixPosition(e.matrixWorld),t.position.copy(jv),Yv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yv),t.updateMatrixWorld(),up.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(up),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(up)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ox extends Dx{constructor(e=-1,t=1,n=1,s=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,u=a+d*this.view.width,c-=p*this.view.offsetY,h=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ab extends ob{constructor(){super(new Ox(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lb extends Nx{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new ab}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ub extends Nx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class cb extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class fb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$v(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$v();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $v(){return performance.now()}class qv{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hb extends Ro{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Kv(r,e,t,n){const s=db(n);switch(t){case _x:return r*e;case yx:return r*e/s.components*s.byteLength;case Xm:return r*e/s.components*s.byteLength;case xx:return r*e*2/s.components*s.byteLength;case jm:return r*e*2/s.components*s.byteLength;case vx:return r*e*3/s.components*s.byteLength;case tr:return r*e*4/s.components*s.byteLength;case Ym:return r*e*4/s.components*s.byteLength;case lf:case uf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case cf:case ff:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gp:case Xp:return Math.max(r,16)*Math.max(e,8)/4;case Vp:case Wp:return Math.max(r,8)*Math.max(e,8)/2;case jp:case Yp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $p:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Zp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Jp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case em:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case tm:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case nm:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case im:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case rm:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case sm:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case om:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case am:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case lm:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case hf:case um:case cm:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Sx:case fm:return Math.ceil(r/4)*Math.ceil(e/4)*8;case hm:case dm:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function db(r){switch(r){case Sr:case px:return{byteLength:1,components:1};case eu:case mx:case gu:return{byteLength:2,components:1};case Gm:case Wm:return{byteLength:2,components:4};case Ao:case Vm:case $r:return{byteLength:4,components:1};case gx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fx(){let r=null,e=!1,t=null,n=null;function s(a,u){t(a,u),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function pb(r){const e=new WeakMap;function t(c,h){const d=c.array,p=c.usage,m=d.byteLength,_=r.createBuffer();r.bindBuffer(h,_),r.bufferData(h,d,p),c.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,h,d){const p=h.array,m=h.updateRanges;if(r.bindBuffer(d,c),m.length===0)r.bufferSubData(d,0,p);else{m.sort((x,E)=>x.start-E.start);let _=0;for(let x=1;x<m.length;x++){const E=m[_],S=m[x];S.start<=E.start+E.count+1?E.count=Math.max(E.count,S.start+S.count-E.start):(++_,m[_]=S)}m.length=_+1;for(let x=0,E=m.length;x<E;x++){const S=m[x];r.bufferSubData(d,S.start*p.BYTES_PER_ELEMENT,p,S.start,S.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(r.deleteBuffer(h.buffer),e.delete(c))}function u(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,c,h),d.version=c.version}}return{get:s,remove:a,update:u}}var mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gb=`#ifdef USE_ALPHAHASH
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
#endif`,_b=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sb=`#ifdef USE_AOMAP
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
#endif`,Mb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eb=`#ifdef USE_BATCHING
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
#endif`,Tb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ab=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cb=`#ifdef USE_IRIDESCENCE
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
#endif`,Rb=`#ifdef USE_BUMPMAP
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
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ub=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kb=`#define PI 3.141592653589793
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
} // validated`,zb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bb=`vec3 transformedNormal = objectNormal;
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
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",jb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yb=`#ifdef USE_ENVMAP
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
#endif`,$b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qb=`#ifdef USE_ENVMAP
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
#endif`,Kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nC=`#ifdef USE_GRADIENTMAP
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
}`,iC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oC=`uniform bool receiveShadow;
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
#endif`,aC=`#ifdef USE_ENVMAP
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
#endif`,lC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hC=`PhysicalMaterial material;
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
#endif`,dC=`struct PhysicalMaterial {
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
}`,pC=`
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
#endif`,mC=`#if defined( RE_IndirectDiffuse )
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
#endif`,gC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_C=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TC=`#if defined( USE_POINTS_UV )
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
#endif`,wC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PC=`#ifdef USE_MORPHTARGETS
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
#endif`,DC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FC=`#ifdef USE_NORMALMAP
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
#endif`,kC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$C=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JC=`float getShadowMask() {
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
}`,eR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tR=`#ifdef USE_SKINNING
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
#endif`,nR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iR=`#ifdef USE_SKINNING
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
#endif`,rR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lR=`#ifdef USE_TRANSMISSION
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
#endif`,uR=`#ifdef USE_TRANSMISSION
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
#endif`,cR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mR=`uniform sampler2D t2D;
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
}`,gR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_R=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xR=`#include <common>
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
}`,SR=`#if DEPTH_PACKING == 3200
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
}`,MR=`#define DISTANCE
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
}`,ER=`#define DISTANCE
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
}`,TR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AR=`uniform float scale;
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
}`,bR=`uniform vec3 diffuse;
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
}`,CR=`#include <common>
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
}`,RR=`uniform vec3 diffuse;
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
}`,PR=`#define LAMBERT
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
}`,DR=`#define LAMBERT
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
}`,LR=`#define MATCAP
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
}`,IR=`#define MATCAP
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
}`,UR=`#define NORMAL
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
}`,NR=`#define NORMAL
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
}`,OR=`#define PHONG
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
}`,FR=`#define PHONG
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
}`,kR=`#define STANDARD
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
}`,zR=`#define STANDARD
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
}`,BR=`#define TOON
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
}`,HR=`#define TOON
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
}`,VR=`uniform float size;
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
}`,GR=`uniform vec3 diffuse;
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
}`,WR=`#include <common>
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
}`,XR=`uniform vec3 color;
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
}`,jR=`uniform float rotation;
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
}`,YR=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:mb,alphahash_pars_fragment:gb,alphamap_fragment:_b,alphamap_pars_fragment:vb,alphatest_fragment:yb,alphatest_pars_fragment:xb,aomap_fragment:Sb,aomap_pars_fragment:Mb,batching_pars_vertex:Eb,batching_vertex:Tb,begin_vertex:wb,beginnormal_vertex:Ab,bsdfs:bb,iridescence_fragment:Cb,bumpmap_pars_fragment:Rb,clipping_planes_fragment:Pb,clipping_planes_pars_fragment:Db,clipping_planes_pars_vertex:Lb,clipping_planes_vertex:Ib,color_fragment:Ub,color_pars_fragment:Nb,color_pars_vertex:Ob,color_vertex:Fb,common:kb,cube_uv_reflection_fragment:zb,defaultnormal_vertex:Bb,displacementmap_pars_vertex:Hb,displacementmap_vertex:Vb,emissivemap_fragment:Gb,emissivemap_pars_fragment:Wb,colorspace_fragment:Xb,colorspace_pars_fragment:jb,envmap_fragment:Yb,envmap_common_pars_fragment:$b,envmap_pars_fragment:qb,envmap_pars_vertex:Kb,envmap_physical_pars_fragment:aC,envmap_vertex:Zb,fog_vertex:Qb,fog_pars_vertex:Jb,fog_fragment:eC,fog_pars_fragment:tC,gradientmap_pars_fragment:nC,lightmap_pars_fragment:iC,lights_lambert_fragment:rC,lights_lambert_pars_fragment:sC,lights_pars_begin:oC,lights_toon_fragment:lC,lights_toon_pars_fragment:uC,lights_phong_fragment:cC,lights_phong_pars_fragment:fC,lights_physical_fragment:hC,lights_physical_pars_fragment:dC,lights_fragment_begin:pC,lights_fragment_maps:mC,lights_fragment_end:gC,logdepthbuf_fragment:_C,logdepthbuf_pars_fragment:vC,logdepthbuf_pars_vertex:yC,logdepthbuf_vertex:xC,map_fragment:SC,map_pars_fragment:MC,map_particle_fragment:EC,map_particle_pars_fragment:TC,metalnessmap_fragment:wC,metalnessmap_pars_fragment:AC,morphinstance_vertex:bC,morphcolor_vertex:CC,morphnormal_vertex:RC,morphtarget_pars_vertex:PC,morphtarget_vertex:DC,normal_fragment_begin:LC,normal_fragment_maps:IC,normal_pars_fragment:UC,normal_pars_vertex:NC,normal_vertex:OC,normalmap_pars_fragment:FC,clearcoat_normal_fragment_begin:kC,clearcoat_normal_fragment_maps:zC,clearcoat_pars_fragment:BC,iridescence_pars_fragment:HC,opaque_fragment:VC,packing:GC,premultiplied_alpha_fragment:WC,project_vertex:XC,dithering_fragment:jC,dithering_pars_fragment:YC,roughnessmap_fragment:$C,roughnessmap_pars_fragment:qC,shadowmap_pars_fragment:KC,shadowmap_pars_vertex:ZC,shadowmap_vertex:QC,shadowmask_pars_fragment:JC,skinbase_vertex:eR,skinning_pars_vertex:tR,skinning_vertex:nR,skinnormal_vertex:iR,specularmap_fragment:rR,specularmap_pars_fragment:sR,tonemapping_fragment:oR,tonemapping_pars_fragment:aR,transmission_fragment:lR,transmission_pars_fragment:uR,uv_pars_fragment:cR,uv_pars_vertex:fR,uv_vertex:hR,worldpos_vertex:dR,background_vert:pR,background_frag:mR,backgroundCube_vert:gR,backgroundCube_frag:_R,cube_vert:vR,cube_frag:yR,depth_vert:xR,depth_frag:SR,distanceRGBA_vert:MR,distanceRGBA_frag:ER,equirect_vert:TR,equirect_frag:wR,linedashed_vert:AR,linedashed_frag:bR,meshbasic_vert:CR,meshbasic_frag:RR,meshlambert_vert:PR,meshlambert_frag:DR,meshmatcap_vert:LR,meshmatcap_frag:IR,meshnormal_vert:UR,meshnormal_frag:NR,meshphong_vert:OR,meshphong_frag:FR,meshphysical_vert:kR,meshphysical_frag:zR,meshtoon_vert:BR,meshtoon_frag:HR,points_vert:VR,points_frag:GR,shadow_vert:WR,shadow_frag:XR,sprite_vert:jR,sprite_frag:YR},Ae={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},pr={basic:{uniforms:Zn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Zn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ut(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Zn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Zn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Zn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ut(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Zn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Zn([Ae.points,Ae.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Zn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Zn([Ae.common,Ae.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Zn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Zn([Ae.sprite,Ae.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Zn([Ae.common,Ae.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Zn([Ae.lights,Ae.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};pr.physical={uniforms:Zn([pr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Qc={r:0,b:0,g:0},uo=new ir,$R=new Ot;function qR(r,e,t,n,s,a,u){const c=new ut(0);let h=a===!0?0:1,d,p,m=null,_=0,x=null;function E(P){let b=P.isScene===!0?P.background:null;return b&&b.isTexture&&(b=(P.backgroundBlurriness>0?t:e).get(b)),b}function S(P){let b=!1;const N=E(P);N===null?v(c,h):N&&N.isColor&&(v(N,1),b=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(P,b){const N=E(b);N&&(N.isCubeTexture||N.mapping===jf)?(p===void 0&&(p=new Ai(new $a(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:za(pr.backgroundCube.uniforms),vertexShader:pr.backgroundCube.vertexShader,fragmentShader:pr.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,T,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),uo.copy(b.backgroundRotation),uo.x*=-1,uo.y*=-1,uo.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(uo.y*=-1,uo.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4($R.makeRotationFromEuler(uo)),p.material.toneMapped=Tt.getTransfer(N.colorSpace)!==Dt,(m!==N||_!==N.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,m=N,_=N.version,x=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new Ai(new vu(2,2),new Er({name:"BackgroundMaterial",uniforms:za(pr.background.uniforms),vertexShader:pr.background.vertexShader,fragmentShader:pr.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=Tt.getTransfer(N.colorSpace)!==Dt,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(m!==N||_!==N.version||x!==r.toneMapping)&&(d.material.needsUpdate=!0,m=N,_=N.version,x=r.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null))}function v(P,b){P.getRGB(Qc,Px(r)),n.buffers.color.setClear(Qc.r,Qc.g,Qc.b,b,u)}function R(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,b=1){c.set(P),h=b,v(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,v(c,h)},render:S,addToRenderList:y,dispose:R}}function KR(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=_(null);let a=s,u=!1;function c(A,k,$,j,re){let ae=!1;const K=m(j,$,k);a!==K&&(a=K,d(a.object)),ae=x(A,j,$,re),ae&&E(A,j,$,re),re!==null&&e.update(re,r.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,b(A,k,$,j),re!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function h(){return r.createVertexArray()}function d(A){return r.bindVertexArray(A)}function p(A){return r.deleteVertexArray(A)}function m(A,k,$){const j=$.wireframe===!0;let re=n[A.id];re===void 0&&(re={},n[A.id]=re);let ae=re[k.id];ae===void 0&&(ae={},re[k.id]=ae);let K=ae[j];return K===void 0&&(K=_(h()),ae[j]=K),K}function _(A){const k=[],$=[],j=[];for(let re=0;re<t;re++)k[re]=0,$[re]=0,j[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:j,object:A,attributes:{},index:null}}function x(A,k,$,j){const re=a.attributes,ae=k.attributes;let K=0;const ce=$.getAttributes();for(const F in ce)if(ce[F].location>=0){const Z=re[F];let B=ae[F];if(B===void 0&&(F==="instanceMatrix"&&A.instanceMatrix&&(B=A.instanceMatrix),F==="instanceColor"&&A.instanceColor&&(B=A.instanceColor)),Z===void 0||Z.attribute!==B||B&&Z.data!==B.data)return!0;K++}return a.attributesNum!==K||a.index!==j}function E(A,k,$,j){const re={},ae=k.attributes;let K=0;const ce=$.getAttributes();for(const F in ce)if(ce[F].location>=0){let Z=ae[F];Z===void 0&&(F==="instanceMatrix"&&A.instanceMatrix&&(Z=A.instanceMatrix),F==="instanceColor"&&A.instanceColor&&(Z=A.instanceColor));const B={};B.attribute=Z,Z&&Z.data&&(B.data=Z.data),re[F]=B,K++}a.attributes=re,a.attributesNum=K,a.index=j}function S(){const A=a.newAttributes;for(let k=0,$=A.length;k<$;k++)A[k]=0}function y(A){v(A,0)}function v(A,k){const $=a.newAttributes,j=a.enabledAttributes,re=a.attributeDivisors;$[A]=1,j[A]===0&&(r.enableVertexAttribArray(A),j[A]=1),re[A]!==k&&(r.vertexAttribDivisor(A,k),re[A]=k)}function R(){const A=a.newAttributes,k=a.enabledAttributes;for(let $=0,j=k.length;$<j;$++)k[$]!==A[$]&&(r.disableVertexAttribArray($),k[$]=0)}function P(A,k,$,j,re,ae,K){K===!0?r.vertexAttribIPointer(A,k,$,re,ae):r.vertexAttribPointer(A,k,$,j,re,ae)}function b(A,k,$,j){S();const re=j.attributes,ae=$.getAttributes(),K=k.defaultAttributeValues;for(const ce in ae){const F=ae[ce];if(F.location>=0){let se=re[ce];if(se===void 0&&(ce==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),ce==="instanceColor"&&A.instanceColor&&(se=A.instanceColor)),se!==void 0){const Z=se.normalized,B=se.itemSize,te=e.get(se);if(te===void 0)continue;const we=te.buffer,Q=te.type,ue=te.bytesPerElement,Se=Q===r.INT||Q===r.UNSIGNED_INT||se.gpuType===Vm;if(se.isInterleavedBufferAttribute){const _e=se.data,Te=_e.stride,Xe=se.offset;if(_e.isInstancedInterleavedBuffer){for(let Be=0;Be<F.locationSize;Be++)v(F.location+Be,_e.meshPerAttribute);A.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Be=0;Be<F.locationSize;Be++)y(F.location+Be);r.bindBuffer(r.ARRAY_BUFFER,we);for(let Be=0;Be<F.locationSize;Be++)P(F.location+Be,B/F.locationSize,Q,Z,Te*ue,(Xe+B/F.locationSize*Be)*ue,Se)}else{if(se.isInstancedBufferAttribute){for(let _e=0;_e<F.locationSize;_e++)v(F.location+_e,se.meshPerAttribute);A.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let _e=0;_e<F.locationSize;_e++)y(F.location+_e);r.bindBuffer(r.ARRAY_BUFFER,we);for(let _e=0;_e<F.locationSize;_e++)P(F.location+_e,B/F.locationSize,Q,Z,B*ue,B/F.locationSize*_e*ue,Se)}}else if(K!==void 0){const Z=K[ce];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(F.location,Z);break;case 3:r.vertexAttrib3fv(F.location,Z);break;case 4:r.vertexAttrib4fv(F.location,Z);break;default:r.vertexAttrib1fv(F.location,Z)}}}}R()}function N(){U();for(const A in n){const k=n[A];for(const $ in k){const j=k[$];for(const re in j)p(j[re].object),delete j[re];delete k[$]}delete n[A]}}function L(A){if(n[A.id]===void 0)return;const k=n[A.id];for(const $ in k){const j=k[$];for(const re in j)p(j[re].object),delete j[re];delete k[$]}delete n[A.id]}function T(A){for(const k in n){const $=n[k];if($[A.id]===void 0)continue;const j=$[A.id];for(const re in j)p(j[re].object),delete j[re];delete $[A.id]}}function U(){w(),u=!0,a!==s&&(a=s,d(a.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:U,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:y,disableUnusedAttributes:R}}function ZR(r,e,t){let n;function s(d){n=d}function a(d,p){r.drawArrays(n,d,p),t.update(p,n,1)}function u(d,p,m){m!==0&&(r.drawArraysInstanced(n,d,p,m),t.update(p,n,m))}function c(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,p,0,m);let x=0;for(let E=0;E<m;E++)x+=p[E];t.update(x,n,1)}function h(d,p,m,_){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<d.length;E++)u(d[E],p[E],_[E]);else{x.multiDrawArraysInstancedWEBGL(n,d,0,p,0,_,0,m);let E=0;for(let S=0;S<m;S++)E+=p[S]*_[S];t.update(E,n,1)}}this.setMode=s,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function QR(r,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(T){return!(T!==tr&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(T){const U=T===gu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Sr&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==$r&&!U)}function h(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=h(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,L=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:m,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:E,maxTextureSize:S,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:R,maxVaryings:P,maxFragmentUniforms:b,vertexTextures:N,maxSamples:L}}function JR(r){const e=this;let t=null,n=0,s=!1,a=!1;const u=new Wr,c=new lt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const x=m.length!==0||_||n!==0||s;return s=_,n=m.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,_){t=p(m,_,0)},this.setState=function(m,_,x){const E=m.clippingPlanes,S=m.clipIntersection,y=m.clipShadows,v=r.get(m);if(!s||E===null||E.length===0||a&&!y)a?p(null):d();else{const R=a?0:n,P=R*4;let b=v.clippingState||null;h.value=b,b=p(E,_,P,x);for(let N=0;N!==P;++N)b[N]=t[N];v.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=R}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,_,x,E){const S=m!==null?m.length:0;let y=null;if(S!==0){if(y=h.value,E!==!0||y===null){const v=x+S*4,R=_.matrixWorldInverse;c.getNormalMatrix(R),(y===null||y.length<v)&&(y=new Float32Array(v));for(let P=0,b=x;P!==S;++P,b+=4)u.copy(m[P]).applyMatrix4(R,c),u.normal.toArray(y,b),y[b+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,y}}function eP(r){let e=new WeakMap;function t(u,c){return c===zp?u.mapping=Oa:c===Bp&&(u.mapping=Fa),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===zp||c===Bp)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const d=new YA(h.height);return d.fromEquirectangularTexture(r,u),e.set(u,d),u.addEventListener("dispose",s),t(d.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Ea=4,Zv=[.125,.215,.35,.446,.526,.582],vo=20,cp=new Ox,Qv=new ut;let fp=null,hp=0,dp=0,pp=!1;const po=(1+Math.sqrt(5))/2,ya=1/po,Jv=[new W(-po,ya,0),new W(po,ya,0),new W(-ya,0,po),new W(ya,0,po),new W(0,po,-ya),new W(0,po,ya),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],tP=new W;class ey{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,a={}){const{size:u=256,position:c=tP}=a;fp=this._renderer.getRenderTarget(),hp=this._renderer.getActiveCubeFace(),dp=this._renderer.getActiveMipmapLevel(),pp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,s,h,c),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ny(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fp,hp,dp),this._renderer.xr.enabled=pp,e.scissorTest=!1,Jc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oa||e.mapping===Fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fp=this._renderer.getRenderTarget(),hp=this._renderer.getActiveCubeFace(),dp=this._renderer.getActiveMipmapLevel(),pp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gr,minFilter:gr,generateMipmaps:!1,type:gu,format:tr,colorSpace:ka,depthBuffer:!1},s=ty(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ty(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nP(a)),this._blurMaterial=iP(a,e,t)}return s}_compileMaterial(e){const t=new Ai(this._lodPlanes[0],e);this._renderer.compile(t,cp)}_sceneToCubeUV(e,t,n,s,a){const h=new Ei(90,1,t,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,x=m.toneMapping;m.getClearColor(Qv),m.toneMapping=Ns,m.autoClear=!1;const E=new bx({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),S=new Ai(new $a,E);let y=!1;const v=e.background;v?v.isColor&&(E.color.copy(v),e.background=null,y=!0):(E.color.copy(Qv),y=!0);for(let R=0;R<6;R++){const P=R%3;P===0?(h.up.set(0,d[R],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+p[R],a.y,a.z)):P===1?(h.up.set(0,0,d[R]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+p[R],a.z)):(h.up.set(0,d[R],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+p[R]));const b=this._cubeSize;Jc(s,P*b,R>2?b:0,b,b),m.setRenderTarget(s),y&&m.render(S,h),m.render(e,h)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=x,m.autoClear=_,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Oa||e.mapping===Fa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=iy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ny());const a=s?this._cubemapMaterial:this._equirectMaterial,u=new Ai(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const h=this._cubeSize;Jc(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(u,cp)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Jv[(s-a-1)%Jv.length];this._blur(e,a-1,a,u,c)}t.autoClear=n}_blur(e,t,n,s,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,s,"latitudinal",a),this._halfBlur(u,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,u,c){const h=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new Ai(this._lodPlanes[s],d),_=d.uniforms,x=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*vo-1),S=a/E,y=isFinite(a)?1+Math.floor(p*S):vo;y>vo&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${vo}`);const v=[];let R=0;for(let T=0;T<vo;++T){const U=T/S,w=Math.exp(-U*U/2);v.push(w),T===0?R+=w:T<y&&(R+=2*w)}for(let T=0;T<v.length;T++)v[T]=v[T]/R;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=u==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:P}=this;_.dTheta.value=E,_.mipInt.value=P-n;const b=this._sizeLods[s],N=3*b*(s>P-Ea?s-P+Ea:0),L=4*(this._cubeSize-b);Jc(t,N,L,3*b,2*b),h.setRenderTarget(t),h.render(m,cp)}}function nP(r){const e=[],t=[],n=[];let s=r;const a=r-Ea+1+Zv.length;for(let u=0;u<a;u++){const c=Math.pow(2,s);t.push(c);let h=1/c;u>r-Ea?h=Zv[u-r+Ea-1]:u===0&&(h=0),n.push(h);const d=1/(c-2),p=-d,m=1+d,_=[p,p,m,p,m,m,p,p,m,m,p,m],x=6,E=6,S=3,y=2,v=1,R=new Float32Array(S*E*x),P=new Float32Array(y*E*x),b=new Float32Array(v*E*x);for(let L=0;L<x;L++){const T=L%3*2/3-1,U=L>2?0:-1,w=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];R.set(w,S*E*L),P.set(_,y*E*L);const A=[L,L,L,L,L,L];b.set(A,v*E*L)}const N=new rr;N.setAttribute("position",new yr(R,S)),N.setAttribute("uv",new yr(P,y)),N.setAttribute("faceIndex",new yr(b,v)),e.push(N),s>Ea&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ty(r,e,t){const n=new ks(r,e,t);return n.texture.mapping=jf,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jc(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function iP(r,e,t){const n=new Float32Array(vo),s=new W(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:vo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qm(),fragmentShader:`

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
		`,blending:Us,depthTest:!1,depthWrite:!1})}function ny(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qm(),fragmentShader:`

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
		`,blending:Us,depthTest:!1,depthWrite:!1})}function iy(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Us,depthTest:!1,depthWrite:!1})}function Qm(){return`

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
	`}function rP(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const h=c.mapping,d=h===zp||h===Bp,p=h===Oa||h===Fa;if(d||p){let m=e.get(c);const _=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return t===null&&(t=new ey(r)),m=d?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const x=c.image;return d&&x&&x.height>0||p&&x&&s(x)?(t===null&&(t=new ey(r)),m=d?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",a),m.texture):null}}}return c}function s(c){let h=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&h++;return h===d}function a(c){const h=c.target;h.removeEventListener("dispose",a);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function sP(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&df("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function oP(r,e,t,n){const s={},a=new WeakMap;function u(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete s[_.id];const x=a.get(_);x&&(e.remove(x),a.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(m,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function h(m){const _=m.attributes;for(const x in _)e.update(_[x],r.ARRAY_BUFFER)}function d(m){const _=[],x=m.index,E=m.attributes.position;let S=0;if(x!==null){const R=x.array;S=x.version;for(let P=0,b=R.length;P<b;P+=3){const N=R[P+0],L=R[P+1],T=R[P+2];_.push(N,L,L,T,T,N)}}else if(E!==void 0){const R=E.array;S=E.version;for(let P=0,b=R.length/3-1;P<b;P+=3){const N=P+0,L=P+1,T=P+2;_.push(N,L,L,T,T,N)}}else return;const y=new(Ex(_)?Rx:Cx)(_,1);y.version=S;const v=a.get(m);v&&e.remove(v),a.set(m,y)}function p(m){const _=a.get(m);if(_){const x=m.index;x!==null&&_.version<x.version&&d(m)}else d(m);return a.get(m)}return{get:c,update:h,getWireframeAttribute:p}}function aP(r,e,t){let n;function s(_){n=_}let a,u;function c(_){a=_.type,u=_.bytesPerElement}function h(_,x){r.drawElements(n,x,a,_*u),t.update(x,n,1)}function d(_,x,E){E!==0&&(r.drawElementsInstanced(n,x,a,_*u,E),t.update(x,n,E))}function p(_,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,x,0,a,_,0,E);let y=0;for(let v=0;v<E;v++)y+=x[v];t.update(y,n,1)}function m(_,x,E,S){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_.length;v++)d(_[v]/u,x[v],S[v]);else{y.multiDrawElementsInstancedWEBGL(n,x,0,a,_,0,S,0,E);let v=0;for(let R=0;R<E;R++)v+=x[R]*S[R];t.update(v,n,1)}}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function lP(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function uP(r,e,t){const n=new WeakMap,s=new Xt;function a(u,c,h){const d=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let _=n.get(c);if(_===void 0||_.count!==m){let w=function(){T.dispose(),n.delete(c),c.removeEventListener("dispose",w)};_!==void 0&&_.texture.dispose();const x=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],v=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let P=0;x===!0&&(P=1),E===!0&&(P=2),S===!0&&(P=3);let b=c.attributes.position.count*P,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const L=new Float32Array(b*N*4*m),T=new Tx(L,b,N,m);T.type=$r,T.needsUpdate=!0;const U=P*4;for(let A=0;A<m;A++){const k=y[A],$=v[A],j=R[A],re=b*N*4*A;for(let ae=0;ae<k.count;ae++){const K=ae*U;x===!0&&(s.fromBufferAttribute(k,ae),L[re+K+0]=s.x,L[re+K+1]=s.y,L[re+K+2]=s.z,L[re+K+3]=0),E===!0&&(s.fromBufferAttribute($,ae),L[re+K+4]=s.x,L[re+K+5]=s.y,L[re+K+6]=s.z,L[re+K+7]=0),S===!0&&(s.fromBufferAttribute(j,ae),L[re+K+8]=s.x,L[re+K+9]=s.y,L[re+K+10]=s.z,L[re+K+11]=j.itemSize===4?s.w:1)}}_={count:m,texture:T,size:new ot(b,N)},n.set(c,_),c.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let x=0;for(let S=0;S<d.length;S++)x+=d[S];const E=c.morphTargetsRelative?1:1-x;h.getUniforms().setValue(r,"morphTargetBaseInfluence",E),h.getUniforms().setValue(r,"morphTargetInfluences",d)}h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:a}}function cP(r,e,t,n){let s=new WeakMap;function a(h){const d=n.render.frame,p=h.geometry,m=e.get(h,p);if(s.get(m)!==d&&(e.update(m),s.set(m,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),s.get(h)!==d&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),s.set(h,d))),h.isSkinnedMesh){const _=h.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return m}function u(){s=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:u}}const kx=new ti,ry=new Ix(1,1),zx=new Tx,Bx=new DA,Hx=new Lx,sy=[],oy=[],ay=new Float32Array(16),ly=new Float32Array(9),uy=new Float32Array(4);function qa(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let a=sy[s];if(a===void 0&&(a=new Float32Array(s),sy[s]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(a,c)}return a}function _n(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function vn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function $f(r,e){let t=oy[e];t===void 0&&(t=new Int32Array(e),oy[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function fP(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function hP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2fv(this.addr,e),vn(t,e)}}function dP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;r.uniform3fv(this.addr,e),vn(t,e)}}function pP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4fv(this.addr,e),vn(t,e)}}function mP(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;uy.set(n),r.uniformMatrix2fv(this.addr,!1,uy),vn(t,n)}}function gP(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;ly.set(n),r.uniformMatrix3fv(this.addr,!1,ly),vn(t,n)}}function _P(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;ay.set(n),r.uniformMatrix4fv(this.addr,!1,ay),vn(t,n)}}function vP(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function yP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2iv(this.addr,e),vn(t,e)}}function xP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;r.uniform3iv(this.addr,e),vn(t,e)}}function SP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4iv(this.addr,e),vn(t,e)}}function MP(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function EP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2uiv(this.addr,e),vn(t,e)}}function TP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;r.uniform3uiv(this.addr,e),vn(t,e)}}function wP(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4uiv(this.addr,e),vn(t,e)}}function AP(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let a;this.type===r.SAMPLER_2D_SHADOW?(ry.compareFunction=Mx,a=ry):a=kx,t.setTexture2D(e||a,s)}function bP(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bx,s)}function CP(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hx,s)}function RP(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zx,s)}function PP(r){switch(r){case 5126:return fP;case 35664:return hP;case 35665:return dP;case 35666:return pP;case 35674:return mP;case 35675:return gP;case 35676:return _P;case 5124:case 35670:return vP;case 35667:case 35671:return yP;case 35668:case 35672:return xP;case 35669:case 35673:return SP;case 5125:return MP;case 36294:return EP;case 36295:return TP;case 36296:return wP;case 35678:case 36198:case 36298:case 36306:case 35682:return AP;case 35679:case 36299:case 36307:return bP;case 35680:case 36300:case 36308:case 36293:return CP;case 36289:case 36303:case 36311:case 36292:return RP}}function DP(r,e){r.uniform1fv(this.addr,e)}function LP(r,e){const t=qa(e,this.size,2);r.uniform2fv(this.addr,t)}function IP(r,e){const t=qa(e,this.size,3);r.uniform3fv(this.addr,t)}function UP(r,e){const t=qa(e,this.size,4);r.uniform4fv(this.addr,t)}function NP(r,e){const t=qa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function OP(r,e){const t=qa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function FP(r,e){const t=qa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function kP(r,e){r.uniform1iv(this.addr,e)}function zP(r,e){r.uniform2iv(this.addr,e)}function BP(r,e){r.uniform3iv(this.addr,e)}function HP(r,e){r.uniform4iv(this.addr,e)}function VP(r,e){r.uniform1uiv(this.addr,e)}function GP(r,e){r.uniform2uiv(this.addr,e)}function WP(r,e){r.uniform3uiv(this.addr,e)}function XP(r,e){r.uniform4uiv(this.addr,e)}function jP(r,e,t){const n=this.cache,s=e.length,a=$f(t,s);_n(n,a)||(r.uniform1iv(this.addr,a),vn(n,a));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||kx,a[u])}function YP(r,e,t){const n=this.cache,s=e.length,a=$f(t,s);_n(n,a)||(r.uniform1iv(this.addr,a),vn(n,a));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||Bx,a[u])}function $P(r,e,t){const n=this.cache,s=e.length,a=$f(t,s);_n(n,a)||(r.uniform1iv(this.addr,a),vn(n,a));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||Hx,a[u])}function qP(r,e,t){const n=this.cache,s=e.length,a=$f(t,s);_n(n,a)||(r.uniform1iv(this.addr,a),vn(n,a));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||zx,a[u])}function KP(r){switch(r){case 5126:return DP;case 35664:return LP;case 35665:return IP;case 35666:return UP;case 35674:return NP;case 35675:return OP;case 35676:return FP;case 5124:case 35670:return kP;case 35667:case 35671:return zP;case 35668:case 35672:return BP;case 35669:case 35673:return HP;case 5125:return VP;case 36294:return GP;case 36295:return WP;case 36296:return XP;case 35678:case 36198:case 36298:case 36306:case 35682:return jP;case 35679:case 36299:case 36307:return YP;case 35680:case 36300:case 36308:case 36293:return $P;case 36289:case 36303:case 36311:case 36292:return qP}}class ZP{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=PP(t.type)}}class QP{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KP(t.type)}}class JP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,u=s.length;a!==u;++a){const c=s[a];c.setValue(e,t[c.id],n)}}}const mp=/(\w+)(\])?(\[|\.)?/g;function cy(r,e){r.seq.push(e),r.map[e.id]=e}function e2(r,e,t){const n=r.name,s=n.length;for(mp.lastIndex=0;;){const a=mp.exec(n),u=mp.lastIndex;let c=a[1];const h=a[2]==="]",d=a[3];if(h&&(c=c|0),d===void 0||d==="["&&u+2===s){cy(t,d===void 0?new ZP(c,r,e):new QP(c,r,e));break}else{let m=t.map[c];m===void 0&&(m=new JP(c),cy(t,m)),t=m}}}class mf{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),u=e.getUniformLocation(t,a.name);e2(a,u,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,u=t.length;a!==u;++a){const c=t[a],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const u=e[s];u.id in t&&n.push(u)}return n}}function fy(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const t2=37297;let n2=0;function i2(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=s;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const hy=new lt;function r2(r){Tt._getMatrix(hy,Tt.workingColorSpace,r);const e=`mat3( ${hy.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(r)){case Mf:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function dy(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+i2(r.getShaderSource(e),u)}else return s}function s2(r,e){const t=r2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function o2(r,e){let t;switch(e){case Vw:t="Linear";break;case Gw:t="Reinhard";break;case Ww:t="Cineon";break;case Xw:t="ACESFilmic";break;case Yw:t="AgX";break;case $w:t="Neutral";break;case jw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ef=new W;function a2(){Tt.getLuminanceCoefficients(ef);const r=ef.x.toFixed(4),e=ef.y.toFixed(4),t=ef.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zl).join(`
`)}function u2(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function c2(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=r.getActiveAttrib(e,s),u=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function zl(r){return r!==""}function py(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function my(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f2=/^[ \t]*#include +<([\w\d./]+)>/gm;function mm(r){return r.replace(f2,d2)}const h2=new Map;function d2(r,e){let t=ft[e];if(t===void 0){const n=h2.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mm(t)}const p2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gy(r){return r.replace(p2,m2)}function m2(r,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function _y(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function g2(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===hx?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Sw?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vr&&(e="SHADOWMAP_TYPE_VSM"),e}function _2(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Oa:case Fa:e="ENVMAP_TYPE_CUBE";break;case jf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v2(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Fa:e="ENVMAP_MODE_REFRACTION";break}return e}function y2(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Hm:e="ENVMAP_BLENDING_MULTIPLY";break;case Bw:e="ENVMAP_BLENDING_MIX";break;case Hw:e="ENVMAP_BLENDING_ADD";break}return e}function x2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function S2(r,e,t,n){const s=r.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=g2(t),d=_2(t),p=v2(t),m=y2(t),_=x2(t),x=l2(t),E=u2(a),S=s.createProgram();let y,v,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(zl).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(zl).join(`
`),v.length>0&&(v+=`
`)):(y=[_y(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zl).join(`
`),v=[_y(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ns?"#define TONE_MAPPING":"",t.toneMapping!==Ns?ft.tonemapping_pars_fragment:"",t.toneMapping!==Ns?o2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,s2("linearToOutputTexel",t.outputColorSpace),a2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zl).join(`
`)),u=mm(u),u=py(u,t),u=my(u,t),c=mm(c),c=py(c,t),c=my(c,t),u=gy(u),c=gy(c),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===yv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=R+y+u,b=R+v+c,N=fy(s,s.VERTEX_SHADER,P),L=fy(s,s.FRAGMENT_SHADER,b);s.attachShader(S,N),s.attachShader(S,L),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function T(k){if(r.debug.checkShaderErrors){const $=s.getProgramInfoLog(S).trim(),j=s.getShaderInfoLog(N).trim(),re=s.getShaderInfoLog(L).trim();let ae=!0,K=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ae=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,S,N,L);else{const ce=dy(s,N,"vertex"),F=dy(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+$+`
`+ce+`
`+F)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(j===""||re==="")&&(K=!1);K&&(k.diagnostics={runnable:ae,programLog:$,vertexShader:{log:j,prefix:y},fragmentShader:{log:re,prefix:v}})}s.deleteShader(N),s.deleteShader(L),U=new mf(s,S),w=c2(s,S)}let U;this.getUniforms=function(){return U===void 0&&T(this),U};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(S,t2)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=n2++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=N,this.fragmentShader=L,this}let M2=0;class E2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new T2(e),t.set(e,n)),n}}class T2{constructor(e){this.id=M2++,this.code=e,this.usedTimes=0}}function w2(r,e,t,n,s,a,u){const c=new wx,h=new E2,d=new Set,p=[],m=s.logarithmicDepthBuffer,_=s.vertexTextures;let x=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(w){return d.add(w),w===0?"uv":`uv${w}`}function y(w,A,k,$,j){const re=$.fog,ae=j.geometry,K=w.isMeshStandardMaterial?$.environment:null,ce=(w.isMeshStandardMaterial?t:e).get(w.envMap||K),F=ce&&ce.mapping===jf?ce.image.height:null,se=E[w.type];w.precision!==null&&(x=s.getMaxPrecision(w.precision),x!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const Z=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,B=Z!==void 0?Z.length:0;let te=0;ae.morphAttributes.position!==void 0&&(te=1),ae.morphAttributes.normal!==void 0&&(te=2),ae.morphAttributes.color!==void 0&&(te=3);let we,Q,ue,Se;if(se){const xt=pr[se];we=xt.vertexShader,Q=xt.fragmentShader}else we=w.vertexShader,Q=w.fragmentShader,h.update(w),ue=h.getVertexShaderID(w),Se=h.getFragmentShaderID(w);const _e=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),Xe=j.isInstancedMesh===!0,Be=j.isBatchedMesh===!0,Rt=!!w.map,Pt=!!w.matcap,at=!!ce,H=!!w.aoMap,bn=!!w.lightMap,ht=!!w.bumpMap,ct=!!w.normalMap,je=!!w.displacementMap,wt=!!w.emissiveMap,He=!!w.metalnessMap,O=!!w.roughnessMap,D=w.anisotropy>0,ie=w.clearcoat>0,de=w.dispersion>0,ve=w.iridescence>0,he=w.sheen>0,Ge=w.transmission>0,be=D&&!!w.anisotropyMap,qe=ie&&!!w.clearcoatMap,$e=ie&&!!w.clearcoatNormalMap,ye=ie&&!!w.clearcoatRoughnessMap,Ne=ve&&!!w.iridescenceMap,Je=ve&&!!w.iridescenceThicknessMap,et=he&&!!w.sheenColorMap,Oe=he&&!!w.sheenRoughnessMap,dt=!!w.specularMap,it=!!w.specularColorMap,Ct=!!w.specularIntensityMap,X=Ge&&!!w.transmissionMap,Ce=Ge&&!!w.thicknessMap,fe=!!w.gradientMap,pe=!!w.alphaMap,De=w.alphaTest>0,Pe=!!w.alphaHash,rt=!!w.extensions;let kt=Ns;w.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(kt=r.toneMapping);const dn={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:we,fragmentShader:Q,defines:w.defines,customVertexShaderID:ue,customFragmentShaderID:Se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:Be,batchingColor:Be&&j._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&j.instanceColor!==null,instancingMorph:Xe&&j.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:ka,alphaToCoverage:!!w.alphaToCoverage,map:Rt,matcap:Pt,envMap:at,envMapMode:at&&ce.mapping,envMapCubeUVHeight:F,aoMap:H,lightMap:bn,bumpMap:ht,normalMap:ct,displacementMap:_&&je,emissiveMap:wt,normalMapObjectSpace:ct&&w.normalMapType===Qw,normalMapTangentSpace:ct&&w.normalMapType===$m,metalnessMap:He,roughnessMap:O,anisotropy:D,anisotropyMap:be,clearcoat:ie,clearcoatMap:qe,clearcoatNormalMap:$e,clearcoatRoughnessMap:ye,dispersion:de,iridescence:ve,iridescenceMap:Ne,iridescenceThicknessMap:Je,sheen:he,sheenColorMap:et,sheenRoughnessMap:Oe,specularMap:dt,specularColorMap:it,specularIntensityMap:Ct,transmission:Ge,transmissionMap:X,thicknessMap:Ce,gradientMap:fe,opaque:w.transparent===!1&&w.blending===Ra&&w.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:Pe,combine:w.combine,mapUv:Rt&&S(w.map.channel),aoMapUv:H&&S(w.aoMap.channel),lightMapUv:bn&&S(w.lightMap.channel),bumpMapUv:ht&&S(w.bumpMap.channel),normalMapUv:ct&&S(w.normalMap.channel),displacementMapUv:je&&S(w.displacementMap.channel),emissiveMapUv:wt&&S(w.emissiveMap.channel),metalnessMapUv:He&&S(w.metalnessMap.channel),roughnessMapUv:O&&S(w.roughnessMap.channel),anisotropyMapUv:be&&S(w.anisotropyMap.channel),clearcoatMapUv:qe&&S(w.clearcoatMap.channel),clearcoatNormalMapUv:$e&&S(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&S(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&S(w.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&S(w.iridescenceThicknessMap.channel),sheenColorMapUv:et&&S(w.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&S(w.sheenRoughnessMap.channel),specularMapUv:dt&&S(w.specularMap.channel),specularColorMapUv:it&&S(w.specularColorMap.channel),specularIntensityMapUv:Ct&&S(w.specularIntensityMap.channel),transmissionMapUv:X&&S(w.transmissionMap.channel),thicknessMapUv:Ce&&S(w.thicknessMap.channel),alphaMapUv:pe&&S(w.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(ct||D),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ae.attributes.uv&&(Rt||pe),fog:!!re,useFog:w.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Te,skinning:j.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:te,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:kt,decodeVideoTexture:Rt&&w.map.isVideoTexture===!0&&Tt.getTransfer(w.map.colorSpace)===Dt,decodeVideoTextureEmissive:wt&&w.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(w.emissiveMap.colorSpace)===Dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===jr,flipSided:w.side===ei,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:rt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&w.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return dn.vertexUv1s=d.has(1),dn.vertexUv2s=d.has(2),dn.vertexUv3s=d.has(3),d.clear(),dn}function v(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)A.push(k),A.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(R(A,w),P(A,w),A.push(r.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function R(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function P(w,A){c.disableAll(),A.supportsVertexTextures&&c.enable(0),A.instancing&&c.enable(1),A.instancingColor&&c.enable(2),A.instancingMorph&&c.enable(3),A.matcap&&c.enable(4),A.envMap&&c.enable(5),A.normalMapObjectSpace&&c.enable(6),A.normalMapTangentSpace&&c.enable(7),A.clearcoat&&c.enable(8),A.iridescence&&c.enable(9),A.alphaTest&&c.enable(10),A.vertexColors&&c.enable(11),A.vertexAlphas&&c.enable(12),A.vertexUv1s&&c.enable(13),A.vertexUv2s&&c.enable(14),A.vertexUv3s&&c.enable(15),A.vertexTangents&&c.enable(16),A.anisotropy&&c.enable(17),A.alphaHash&&c.enable(18),A.batching&&c.enable(19),A.dispersion&&c.enable(20),A.batchingColor&&c.enable(21),w.push(c.mask),c.disableAll(),A.fog&&c.enable(0),A.useFog&&c.enable(1),A.flatShading&&c.enable(2),A.logarithmicDepthBuffer&&c.enable(3),A.reverseDepthBuffer&&c.enable(4),A.skinning&&c.enable(5),A.morphTargets&&c.enable(6),A.morphNormals&&c.enable(7),A.morphColors&&c.enable(8),A.premultipliedAlpha&&c.enable(9),A.shadowMapEnabled&&c.enable(10),A.doubleSided&&c.enable(11),A.flipSided&&c.enable(12),A.useDepthPacking&&c.enable(13),A.dithering&&c.enable(14),A.transmission&&c.enable(15),A.sheen&&c.enable(16),A.opaque&&c.enable(17),A.pointsUvs&&c.enable(18),A.decodeVideoTexture&&c.enable(19),A.decodeVideoTextureEmissive&&c.enable(20),A.alphaToCoverage&&c.enable(21),w.push(c.mask)}function b(w){const A=E[w.type];let k;if(A){const $=pr[A];k=Tf.clone($.uniforms)}else k=w.uniforms;return k}function N(w,A){let k;for(let $=0,j=p.length;$<j;$++){const re=p[$];if(re.cacheKey===A){k=re,++k.usedTimes;break}}return k===void 0&&(k=new S2(r,A,w,a),p.push(k)),k}function L(w){if(--w.usedTimes===0){const A=p.indexOf(w);p[A]=p[p.length-1],p.pop(),w.destroy()}}function T(w){h.remove(w)}function U(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:b,acquireProgram:N,releaseProgram:L,releaseShaderCache:T,programs:p,dispose:U}}function A2(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let c=r.get(u);return c===void 0&&(c={},r.set(u,c)),c}function n(u){r.delete(u)}function s(u,c,h){r.get(u)[c]=h}function a(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function b2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function vy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function yy(){const r=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function u(m,_,x,E,S,y){let v=r[e];return v===void 0?(v={id:m.id,object:m,geometry:_,material:x,groupOrder:E,renderOrder:m.renderOrder,z:S,group:y},r[e]=v):(v.id=m.id,v.object=m,v.geometry=_,v.material=x,v.groupOrder=E,v.renderOrder=m.renderOrder,v.z=S,v.group=y),e++,v}function c(m,_,x,E,S,y){const v=u(m,_,x,E,S,y);x.transmission>0?n.push(v):x.transparent===!0?s.push(v):t.push(v)}function h(m,_,x,E,S,y){const v=u(m,_,x,E,S,y);x.transmission>0?n.unshift(v):x.transparent===!0?s.unshift(v):t.unshift(v)}function d(m,_){t.length>1&&t.sort(m||b2),n.length>1&&n.sort(_||vy),s.length>1&&s.sort(_||vy)}function p(){for(let m=e,_=r.length;m<_;m++){const x=r[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:c,unshift:h,finish:p,sort:d}}function C2(){let r=new WeakMap;function e(n,s){const a=r.get(n);let u;return a===void 0?(u=new yy,r.set(n,[u])):s>=a.length?(u=new yy,a.push(u)):u=a[s],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function R2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new ut};break;case"SpotLight":t={position:new W,direction:new W,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new W,halfWidth:new W,halfHeight:new W};break}return r[e.id]=t,t}}}function P2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let D2=0;function L2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function I2(r){const e=new R2,t=P2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new W);const s=new W,a=new Ot,u=new Ot;function c(d){let p=0,m=0,_=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let x=0,E=0,S=0,y=0,v=0,R=0,P=0,b=0,N=0,L=0,T=0;d.sort(L2);for(let w=0,A=d.length;w<A;w++){const k=d[w],$=k.color,j=k.intensity,re=k.distance,ae=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=$.r*j,m+=$.g*j,_+=$.b*j;else if(k.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(k.sh.coefficients[K],j);T++}else if(k.isDirectionalLight){const K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ce=k.shadow,F=t.get(k);F.shadowIntensity=ce.intensity,F.shadowBias=ce.bias,F.shadowNormalBias=ce.normalBias,F.shadowRadius=ce.radius,F.shadowMapSize=ce.mapSize,n.directionalShadow[x]=F,n.directionalShadowMap[x]=ae,n.directionalShadowMatrix[x]=k.shadow.matrix,R++}n.directional[x]=K,x++}else if(k.isSpotLight){const K=e.get(k);K.position.setFromMatrixPosition(k.matrixWorld),K.color.copy($).multiplyScalar(j),K.distance=re,K.coneCos=Math.cos(k.angle),K.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),K.decay=k.decay,n.spot[S]=K;const ce=k.shadow;if(k.map&&(n.spotLightMap[N]=k.map,N++,ce.updateMatrices(k),k.castShadow&&L++),n.spotLightMatrix[S]=ce.matrix,k.castShadow){const F=t.get(k);F.shadowIntensity=ce.intensity,F.shadowBias=ce.bias,F.shadowNormalBias=ce.normalBias,F.shadowRadius=ce.radius,F.shadowMapSize=ce.mapSize,n.spotShadow[S]=F,n.spotShadowMap[S]=ae,b++}S++}else if(k.isRectAreaLight){const K=e.get(k);K.color.copy($).multiplyScalar(j),K.halfWidth.set(k.width*.5,0,0),K.halfHeight.set(0,k.height*.5,0),n.rectArea[y]=K,y++}else if(k.isPointLight){const K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),K.distance=k.distance,K.decay=k.decay,k.castShadow){const ce=k.shadow,F=t.get(k);F.shadowIntensity=ce.intensity,F.shadowBias=ce.bias,F.shadowNormalBias=ce.normalBias,F.shadowRadius=ce.radius,F.shadowMapSize=ce.mapSize,F.shadowCameraNear=ce.camera.near,F.shadowCameraFar=ce.camera.far,n.pointShadow[E]=F,n.pointShadowMap[E]=ae,n.pointShadowMatrix[E]=k.shadow.matrix,P++}n.point[E]=K,E++}else if(k.isHemisphereLight){const K=e.get(k);K.skyColor.copy(k.color).multiplyScalar(j),K.groundColor.copy(k.groundColor).multiplyScalar(j),n.hemi[v]=K,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=_;const U=n.hash;(U.directionalLength!==x||U.pointLength!==E||U.spotLength!==S||U.rectAreaLength!==y||U.hemiLength!==v||U.numDirectionalShadows!==R||U.numPointShadows!==P||U.numSpotShadows!==b||U.numSpotMaps!==N||U.numLightProbes!==T)&&(n.directional.length=x,n.spot.length=S,n.rectArea.length=y,n.point.length=E,n.hemi.length=v,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=b+N-L,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=T,U.directionalLength=x,U.pointLength=E,U.spotLength=S,U.rectAreaLength=y,U.hemiLength=v,U.numDirectionalShadows=R,U.numPointShadows=P,U.numSpotShadows=b,U.numSpotMaps=N,U.numLightProbes=T,n.version=D2++)}function h(d,p){let m=0,_=0,x=0,E=0,S=0;const y=p.matrixWorldInverse;for(let v=0,R=d.length;v<R;v++){const P=d[v];if(P.isDirectionalLight){const b=n.directional[m];b.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),m++}else if(P.isSpotLight){const b=n.spot[x];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),x++}else if(P.isRectAreaLight){const b=n.rectArea[E];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(y),u.identity(),a.copy(P.matrixWorld),a.premultiply(y),u.extractRotation(a),b.halfWidth.set(P.width*.5,0,0),b.halfHeight.set(0,P.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const b=n.point[_];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(y),_++}else if(P.isHemisphereLight){const b=n.hemi[S];b.direction.setFromMatrixPosition(P.matrixWorld),b.direction.transformDirection(y),S++}}}return{setup:c,setupView:h,state:n}}function xy(r){const e=new I2(r),t=[],n=[];function s(p){d.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function u(p){n.push(p)}function c(){e.setup(t)}function h(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:u}}function U2(r){let e=new WeakMap;function t(s,a=0){const u=e.get(s);let c;return u===void 0?(c=new xy(r),e.set(s,[c])):a>=u.length?(c=new xy(r),u.push(c)):c=u[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const N2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O2=`uniform sampler2D shadow_pass;
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
}`;function F2(r,e,t){let n=new Zm;const s=new ot,a=new ot,u=new Xt,c=new eb({depthPacking:Zw}),h=new tb,d={},p=t.maxTextureSize,m={[Jr]:ei,[ei]:Jr,[jr]:jr},_=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:N2,fragmentShader:O2}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const E=new rr;E.setAttribute("position",new yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ai(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hx;let v=this.type;this.render=function(L,T,U){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;const w=r.getRenderTarget(),A=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),$=r.state;$.setBlending(Us),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const j=v!==Vr&&this.type===Vr,re=v===Vr&&this.type!==Vr;for(let ae=0,K=L.length;ae<K;ae++){const ce=L[ae],F=ce.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const se=F.getFrameExtents();if(s.multiply(se),a.copy(F.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/se.x),s.x=a.x*se.x,F.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/se.y),s.y=a.y*se.y,F.mapSize.y=a.y)),F.map===null||j===!0||re===!0){const B=this.type!==Vr?{minFilter:nr,magFilter:nr}:{};F.map!==null&&F.map.dispose(),F.map=new ks(s.x,s.y,B),F.map.texture.name=ce.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const Z=F.getViewportCount();for(let B=0;B<Z;B++){const te=F.getViewport(B);u.set(a.x*te.x,a.y*te.y,a.x*te.z,a.y*te.w),$.viewport(u),F.updateMatrices(ce,B),n=F.getFrustum(),b(T,U,F.camera,ce,this.type)}F.isPointLightShadow!==!0&&this.type===Vr&&R(F,U),F.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(w,A,k)};function R(L,T){const U=e.update(S);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ks(s.x,s.y)),_.uniforms.shadow_pass.value=L.map.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(T,null,U,_,S,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(T,null,U,x,S,null)}function P(L,T,U,w){let A=null;const k=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)A=k;else if(A=U.isPointLight===!0?h:c,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const $=A.uuid,j=T.uuid;let re=d[$];re===void 0&&(re={},d[$]=re);let ae=re[j];ae===void 0&&(ae=A.clone(),re[j]=ae,T.addEventListener("dispose",N)),A=ae}if(A.visible=T.visible,A.wireframe=T.wireframe,w===Vr?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:m[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,U.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const $=r.properties.get(A);$.light=U}return A}function b(L,T,U,w,A){if(L.visible===!1)return;if(L.layers.test(T.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&A===Vr)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);const j=e.update(L),re=L.material;if(Array.isArray(re)){const ae=j.groups;for(let K=0,ce=ae.length;K<ce;K++){const F=ae[K],se=re[F.materialIndex];if(se&&se.visible){const Z=P(L,se,w,A);L.onBeforeShadow(r,L,T,U,j,Z,F),r.renderBufferDirect(U,null,j,Z,L,F),L.onAfterShadow(r,L,T,U,j,Z,F)}}}else if(re.visible){const ae=P(L,re,w,A);L.onBeforeShadow(r,L,T,U,j,ae,null),r.renderBufferDirect(U,null,j,ae,L,null),L.onAfterShadow(r,L,T,U,j,ae,null)}}const $=L.children;for(let j=0,re=$.length;j<re;j++)b($[j],T,U,w,A)}function N(L){L.target.removeEventListener("dispose",N);for(const U in d){const w=d[U],A=L.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}const k2={[Lp]:Ip,[Up]:Fp,[Np]:kp,[Na]:Op,[Ip]:Lp,[Fp]:Up,[kp]:Np,[Op]:Na};function z2(r,e){function t(){let X=!1;const Ce=new Xt;let fe=null;const pe=new Xt(0,0,0,0);return{setMask:function(De){fe!==De&&!X&&(r.colorMask(De,De,De,De),fe=De)},setLocked:function(De){X=De},setClear:function(De,Pe,rt,kt,dn){dn===!0&&(De*=kt,Pe*=kt,rt*=kt),Ce.set(De,Pe,rt,kt),pe.equals(Ce)===!1&&(r.clearColor(De,Pe,rt,kt),pe.copy(Ce))},reset:function(){X=!1,fe=null,pe.set(-1,0,0,0)}}}function n(){let X=!1,Ce=!1,fe=null,pe=null,De=null;return{setReversed:function(Pe){if(Ce!==Pe){const rt=e.get("EXT_clip_control");Pe?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),Ce=Pe;const kt=De;De=null,this.setClear(kt)}},getReversed:function(){return Ce},setTest:function(Pe){Pe?_e(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(Pe){fe!==Pe&&!X&&(r.depthMask(Pe),fe=Pe)},setFunc:function(Pe){if(Ce&&(Pe=k2[Pe]),pe!==Pe){switch(Pe){case Lp:r.depthFunc(r.NEVER);break;case Ip:r.depthFunc(r.ALWAYS);break;case Up:r.depthFunc(r.LESS);break;case Na:r.depthFunc(r.LEQUAL);break;case Np:r.depthFunc(r.EQUAL);break;case Op:r.depthFunc(r.GEQUAL);break;case Fp:r.depthFunc(r.GREATER);break;case kp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Pe}},setLocked:function(Pe){X=Pe},setClear:function(Pe){De!==Pe&&(Ce&&(Pe=1-Pe),r.clearDepth(Pe),De=Pe)},reset:function(){X=!1,fe=null,pe=null,De=null,Ce=!1}}}function s(){let X=!1,Ce=null,fe=null,pe=null,De=null,Pe=null,rt=null,kt=null,dn=null;return{setTest:function(xt){X||(xt?_e(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(xt){Ce!==xt&&!X&&(r.stencilMask(xt),Ce=xt)},setFunc:function(xt,ni,jn){(fe!==xt||pe!==ni||De!==jn)&&(r.stencilFunc(xt,ni,jn),fe=xt,pe=ni,De=jn)},setOp:function(xt,ni,jn){(Pe!==xt||rt!==ni||kt!==jn)&&(r.stencilOp(xt,ni,jn),Pe=xt,rt=ni,kt=jn)},setLocked:function(xt){X=xt},setClear:function(xt){dn!==xt&&(r.clearStencil(xt),dn=xt)},reset:function(){X=!1,Ce=null,fe=null,pe=null,De=null,Pe=null,rt=null,kt=null,dn=null}}}const a=new t,u=new n,c=new s,h=new WeakMap,d=new WeakMap;let p={},m={},_=new WeakMap,x=[],E=null,S=!1,y=null,v=null,R=null,P=null,b=null,N=null,L=null,T=new ut(0,0,0),U=0,w=!1,A=null,k=null,$=null,j=null,re=null;const ae=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ce=0;const F=r.getParameter(r.VERSION);F.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(F)[1]),K=ce>=1):F.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),K=ce>=2);let se=null,Z={};const B=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),we=new Xt().fromArray(B),Q=new Xt().fromArray(te);function ue(X,Ce,fe,pe){const De=new Uint8Array(4),Pe=r.createTexture();r.bindTexture(X,Pe),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<fe;rt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(Ce+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return Pe}const Se={};Se[r.TEXTURE_2D]=ue(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),_e(r.DEPTH_TEST),u.setFunc(Na),ht(!1),ct(dv),_e(r.CULL_FACE),H(Us);function _e(X){p[X]!==!0&&(r.enable(X),p[X]=!0)}function Te(X){p[X]!==!1&&(r.disable(X),p[X]=!1)}function Xe(X,Ce){return m[X]!==Ce?(r.bindFramebuffer(X,Ce),m[X]=Ce,X===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Ce),X===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Be(X,Ce){let fe=x,pe=!1;if(X){fe=_.get(Ce),fe===void 0&&(fe=[],_.set(Ce,fe));const De=X.textures;if(fe.length!==De.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let Pe=0,rt=De.length;Pe<rt;Pe++)fe[Pe]=r.COLOR_ATTACHMENT0+Pe;fe.length=De.length,pe=!0}}else fe[0]!==r.BACK&&(fe[0]=r.BACK,pe=!0);pe&&r.drawBuffers(fe)}function Rt(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const Pt={[_o]:r.FUNC_ADD,[Ew]:r.FUNC_SUBTRACT,[Tw]:r.FUNC_REVERSE_SUBTRACT};Pt[ww]=r.MIN,Pt[Aw]=r.MAX;const at={[bw]:r.ZERO,[Cw]:r.ONE,[Rw]:r.SRC_COLOR,[Pp]:r.SRC_ALPHA,[Nw]:r.SRC_ALPHA_SATURATE,[Iw]:r.DST_COLOR,[Dw]:r.DST_ALPHA,[Pw]:r.ONE_MINUS_SRC_COLOR,[Dp]:r.ONE_MINUS_SRC_ALPHA,[Uw]:r.ONE_MINUS_DST_COLOR,[Lw]:r.ONE_MINUS_DST_ALPHA,[Ow]:r.CONSTANT_COLOR,[Fw]:r.ONE_MINUS_CONSTANT_COLOR,[kw]:r.CONSTANT_ALPHA,[zw]:r.ONE_MINUS_CONSTANT_ALPHA};function H(X,Ce,fe,pe,De,Pe,rt,kt,dn,xt){if(X===Us){S===!0&&(Te(r.BLEND),S=!1);return}if(S===!1&&(_e(r.BLEND),S=!0),X!==Mw){if(X!==y||xt!==w){if((v!==_o||b!==_o)&&(r.blendEquation(r.FUNC_ADD),v=_o,b=_o),xt)switch(X){case Ra:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pv:r.blendFunc(r.ONE,r.ONE);break;case mv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gv:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ra:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pv:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case mv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gv:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}R=null,P=null,N=null,L=null,T.set(0,0,0),U=0,y=X,w=xt}return}De=De||Ce,Pe=Pe||fe,rt=rt||pe,(Ce!==v||De!==b)&&(r.blendEquationSeparate(Pt[Ce],Pt[De]),v=Ce,b=De),(fe!==R||pe!==P||Pe!==N||rt!==L)&&(r.blendFuncSeparate(at[fe],at[pe],at[Pe],at[rt]),R=fe,P=pe,N=Pe,L=rt),(kt.equals(T)===!1||dn!==U)&&(r.blendColor(kt.r,kt.g,kt.b,dn),T.copy(kt),U=dn),y=X,w=!1}function bn(X,Ce){X.side===jr?Te(r.CULL_FACE):_e(r.CULL_FACE);let fe=X.side===ei;Ce&&(fe=!fe),ht(fe),X.blending===Ra&&X.transparent===!1?H(Us):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),a.setMask(X.colorWrite);const pe=X.stencilWrite;c.setTest(pe),pe&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),wt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function ht(X){A!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),A=X)}function ct(X){X!==yw?(_e(r.CULL_FACE),X!==k&&(X===dv?r.cullFace(r.BACK):X===xw?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),k=X}function je(X){X!==$&&(K&&r.lineWidth(X),$=X)}function wt(X,Ce,fe){X?(_e(r.POLYGON_OFFSET_FILL),(j!==Ce||re!==fe)&&(r.polygonOffset(Ce,fe),j=Ce,re=fe)):Te(r.POLYGON_OFFSET_FILL)}function He(X){X?_e(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function O(X){X===void 0&&(X=r.TEXTURE0+ae-1),se!==X&&(r.activeTexture(X),se=X)}function D(X,Ce,fe){fe===void 0&&(se===null?fe=r.TEXTURE0+ae-1:fe=se);let pe=Z[fe];pe===void 0&&(pe={type:void 0,texture:void 0},Z[fe]=pe),(pe.type!==X||pe.texture!==Ce)&&(se!==fe&&(r.activeTexture(fe),se=fe),r.bindTexture(X,Ce||Se[X]),pe.type=X,pe.texture=Ce)}function ie(){const X=Z[se];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function de(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qe(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $e(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ye(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ne(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Je(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(X){we.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),we.copy(X))}function Oe(X){Q.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function dt(X,Ce){let fe=d.get(Ce);fe===void 0&&(fe=new WeakMap,d.set(Ce,fe));let pe=fe.get(X);pe===void 0&&(pe=r.getUniformBlockIndex(Ce,X.name),fe.set(X,pe))}function it(X,Ce){const pe=d.get(Ce).get(X);h.get(Ce)!==pe&&(r.uniformBlockBinding(Ce,pe,X.__bindingPointIndex),h.set(Ce,pe))}function Ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},se=null,Z={},m={},_=new WeakMap,x=[],E=null,S=!1,y=null,v=null,R=null,P=null,b=null,N=null,L=null,T=new ut(0,0,0),U=0,w=!1,A=null,k=null,$=null,j=null,re=null,we.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:_e,disable:Te,bindFramebuffer:Xe,drawBuffers:Be,useProgram:Rt,setBlending:H,setMaterial:bn,setFlipSided:ht,setCullFace:ct,setLineWidth:je,setPolygonOffset:wt,setScissorTest:He,activeTexture:O,bindTexture:D,unbindTexture:ie,compressedTexImage2D:de,compressedTexImage3D:ve,texImage2D:Ne,texImage3D:Je,updateUBOMapping:dt,uniformBlockBinding:it,texStorage2D:$e,texStorage3D:ye,texSubImage2D:he,texSubImage3D:Ge,compressedTexSubImage2D:be,compressedTexSubImage3D:qe,scissor:et,viewport:Oe,reset:Ct}}function B2(r,e,t,n,s,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ot,p=new WeakMap;let m;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,D){return x?new OffscreenCanvas(O,D):su("canvas")}function S(O,D,ie){let de=1;const ve=He(O);if((ve.width>ie||ve.height>ie)&&(de=ie/Math.max(ve.width,ve.height)),de<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const he=Math.floor(de*ve.width),Ge=Math.floor(de*ve.height);m===void 0&&(m=E(he,Ge));const be=D?E(he,Ge):m;return be.width=he,be.height=Ge,be.getContext("2d").drawImage(O,0,0,he,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+he+"x"+Ge+")."),be}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),O;return O}function y(O){return O.generateMipmaps}function v(O){r.generateMipmap(O)}function R(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(O,D,ie,de,ve=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he=D;if(D===r.RED&&(ie===r.FLOAT&&(he=r.R32F),ie===r.HALF_FLOAT&&(he=r.R16F),ie===r.UNSIGNED_BYTE&&(he=r.R8)),D===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(he=r.R8UI),ie===r.UNSIGNED_SHORT&&(he=r.R16UI),ie===r.UNSIGNED_INT&&(he=r.R32UI),ie===r.BYTE&&(he=r.R8I),ie===r.SHORT&&(he=r.R16I),ie===r.INT&&(he=r.R32I)),D===r.RG&&(ie===r.FLOAT&&(he=r.RG32F),ie===r.HALF_FLOAT&&(he=r.RG16F),ie===r.UNSIGNED_BYTE&&(he=r.RG8)),D===r.RG_INTEGER&&(ie===r.UNSIGNED_BYTE&&(he=r.RG8UI),ie===r.UNSIGNED_SHORT&&(he=r.RG16UI),ie===r.UNSIGNED_INT&&(he=r.RG32UI),ie===r.BYTE&&(he=r.RG8I),ie===r.SHORT&&(he=r.RG16I),ie===r.INT&&(he=r.RG32I)),D===r.RGB_INTEGER&&(ie===r.UNSIGNED_BYTE&&(he=r.RGB8UI),ie===r.UNSIGNED_SHORT&&(he=r.RGB16UI),ie===r.UNSIGNED_INT&&(he=r.RGB32UI),ie===r.BYTE&&(he=r.RGB8I),ie===r.SHORT&&(he=r.RGB16I),ie===r.INT&&(he=r.RGB32I)),D===r.RGBA_INTEGER&&(ie===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),ie===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),ie===r.UNSIGNED_INT&&(he=r.RGBA32UI),ie===r.BYTE&&(he=r.RGBA8I),ie===r.SHORT&&(he=r.RGBA16I),ie===r.INT&&(he=r.RGBA32I)),D===r.RGB&&ie===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),D===r.RGBA){const Ge=ve?Mf:Tt.getTransfer(de);ie===r.FLOAT&&(he=r.RGBA32F),ie===r.HALF_FLOAT&&(he=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(he=Ge===Dt?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(O,D){let ie;return O?D===null||D===Ao||D===tu?ie=r.DEPTH24_STENCIL8:D===$r?ie=r.DEPTH32F_STENCIL8:D===eu&&(ie=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===Ao||D===tu?ie=r.DEPTH_COMPONENT24:D===$r?ie=r.DEPTH_COMPONENT32F:D===eu&&(ie=r.DEPTH_COMPONENT16),ie}function N(O,D){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==nr&&O.minFilter!==gr?Math.log2(Math.max(D.width,D.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?D.mipmaps.length:1}function L(O){const D=O.target;D.removeEventListener("dispose",L),U(D),D.isVideoTexture&&p.delete(D)}function T(O){const D=O.target;D.removeEventListener("dispose",T),A(D)}function U(O){const D=n.get(O);if(D.__webglInit===void 0)return;const ie=O.source,de=_.get(ie);if(de){const ve=de[D.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&w(O),Object.keys(de).length===0&&_.delete(ie)}n.remove(O)}function w(O){const D=n.get(O);r.deleteTexture(D.__webglTexture);const ie=O.source,de=_.get(ie);delete de[D.__cacheKey],u.memory.textures--}function A(O){const D=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(D.__webglFramebuffer[de]))for(let ve=0;ve<D.__webglFramebuffer[de].length;ve++)r.deleteFramebuffer(D.__webglFramebuffer[de][ve]);else r.deleteFramebuffer(D.__webglFramebuffer[de]);D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer[de])}else{if(Array.isArray(D.__webglFramebuffer))for(let de=0;de<D.__webglFramebuffer.length;de++)r.deleteFramebuffer(D.__webglFramebuffer[de]);else r.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&r.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let de=0;de<D.__webglColorRenderbuffer.length;de++)D.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(D.__webglColorRenderbuffer[de]);D.__webglDepthRenderbuffer&&r.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const ie=O.textures;for(let de=0,ve=ie.length;de<ve;de++){const he=n.get(ie[de]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),u.memory.textures--),n.remove(ie[de])}n.remove(O)}let k=0;function $(){k=0}function j(){const O=k;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),k+=1,O}function re(O){const D=[];return D.push(O.wrapS),D.push(O.wrapT),D.push(O.wrapR||0),D.push(O.magFilter),D.push(O.minFilter),D.push(O.anisotropy),D.push(O.internalFormat),D.push(O.format),D.push(O.type),D.push(O.generateMipmaps),D.push(O.premultiplyAlpha),D.push(O.flipY),D.push(O.unpackAlignment),D.push(O.colorSpace),D.join()}function ae(O,D){const ie=n.get(O);if(O.isVideoTexture&&je(O),O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){const de=O.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(ie,O,D);return}}t.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+D)}function K(O,D){const ie=n.get(O);if(O.version>0&&ie.__version!==O.version){Q(ie,O,D);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+D)}function ce(O,D){const ie=n.get(O);if(O.version>0&&ie.__version!==O.version){Q(ie,O,D);return}t.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+D)}function F(O,D){const ie=n.get(O);if(O.version>0&&ie.__version!==O.version){ue(ie,O,D);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+D)}const se={[Sf]:r.REPEAT,[yo]:r.CLAMP_TO_EDGE,[Hp]:r.MIRRORED_REPEAT},Z={[nr]:r.NEAREST,[qw]:r.NEAREST_MIPMAP_NEAREST,[Pc]:r.NEAREST_MIPMAP_LINEAR,[gr]:r.LINEAR,[kd]:r.LINEAR_MIPMAP_NEAREST,[xo]:r.LINEAR_MIPMAP_LINEAR},B={[Jw]:r.NEVER,[sA]:r.ALWAYS,[eA]:r.LESS,[Mx]:r.LEQUAL,[tA]:r.EQUAL,[rA]:r.GEQUAL,[nA]:r.GREATER,[iA]:r.NOTEQUAL};function te(O,D){if(D.type===$r&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===gr||D.magFilter===kd||D.magFilter===Pc||D.magFilter===xo||D.minFilter===gr||D.minFilter===kd||D.minFilter===Pc||D.minFilter===xo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,se[D.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,se[D.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,se[D.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,Z[D.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,Z[D.minFilter]),D.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,B[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===nr||D.minFilter!==Pc&&D.minFilter!==xo||D.type===$r&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function we(O,D){let ie=!1;O.__webglInit===void 0&&(O.__webglInit=!0,D.addEventListener("dispose",L));const de=D.source;let ve=_.get(de);ve===void 0&&(ve={},_.set(de,ve));const he=re(D);if(he!==O.__cacheKey){ve[he]===void 0&&(ve[he]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ie=!0),ve[he].usedTimes++;const Ge=ve[O.__cacheKey];Ge!==void 0&&(ve[O.__cacheKey].usedTimes--,Ge.usedTimes===0&&w(D)),O.__cacheKey=he,O.__webglTexture=ve[he].texture}return ie}function Q(O,D,ie){let de=r.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),D.isData3DTexture&&(de=r.TEXTURE_3D);const ve=we(O,D),he=D.source;t.bindTexture(de,O.__webglTexture,r.TEXTURE0+ie);const Ge=n.get(he);if(he.version!==Ge.__version||ve===!0){t.activeTexture(r.TEXTURE0+ie);const be=Tt.getPrimaries(Tt.workingColorSpace),qe=D.colorSpace===Ps?null:Tt.getPrimaries(D.colorSpace),$e=D.colorSpace===Ps||be===qe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ye=S(D.image,!1,s.maxTextureSize);ye=wt(D,ye);const Ne=a.convert(D.format,D.colorSpace),Je=a.convert(D.type);let et=P(D.internalFormat,Ne,Je,D.colorSpace,D.isVideoTexture);te(de,D);let Oe;const dt=D.mipmaps,it=D.isVideoTexture!==!0,Ct=Ge.__version===void 0||ve===!0,X=he.dataReady,Ce=N(D,ye);if(D.isDepthTexture)et=b(D.format===iu,D.type),Ct&&(it?t.texStorage2D(r.TEXTURE_2D,1,et,ye.width,ye.height):t.texImage2D(r.TEXTURE_2D,0,et,ye.width,ye.height,0,Ne,Je,null));else if(D.isDataTexture)if(dt.length>0){it&&Ct&&t.texStorage2D(r.TEXTURE_2D,Ce,et,dt[0].width,dt[0].height);for(let fe=0,pe=dt.length;fe<pe;fe++)Oe=dt[fe],it?X&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Oe.width,Oe.height,Ne,Je,Oe.data):t.texImage2D(r.TEXTURE_2D,fe,et,Oe.width,Oe.height,0,Ne,Je,Oe.data);D.generateMipmaps=!1}else it?(Ct&&t.texStorage2D(r.TEXTURE_2D,Ce,et,ye.width,ye.height),X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye.width,ye.height,Ne,Je,ye.data)):t.texImage2D(r.TEXTURE_2D,0,et,ye.width,ye.height,0,Ne,Je,ye.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){it&&Ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,et,dt[0].width,dt[0].height,ye.depth);for(let fe=0,pe=dt.length;fe<pe;fe++)if(Oe=dt[fe],D.format!==tr)if(Ne!==null)if(it){if(X)if(D.layerUpdates.size>0){const De=Kv(Oe.width,Oe.height,D.format,D.type);for(const Pe of D.layerUpdates){const rt=Oe.data.subarray(Pe*De/Oe.data.BYTES_PER_ELEMENT,(Pe+1)*De/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,Pe,Oe.width,Oe.height,1,Ne,rt)}D.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Oe.width,Oe.height,ye.depth,Ne,Oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,et,Oe.width,Oe.height,ye.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Oe.width,Oe.height,ye.depth,Ne,Je,Oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,et,Oe.width,Oe.height,ye.depth,0,Ne,Je,Oe.data)}else{it&&Ct&&t.texStorage2D(r.TEXTURE_2D,Ce,et,dt[0].width,dt[0].height);for(let fe=0,pe=dt.length;fe<pe;fe++)Oe=dt[fe],D.format!==tr?Ne!==null?it?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,Oe.width,Oe.height,Ne,Oe.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,et,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Oe.width,Oe.height,Ne,Je,Oe.data):t.texImage2D(r.TEXTURE_2D,fe,et,Oe.width,Oe.height,0,Ne,Je,Oe.data)}else if(D.isDataArrayTexture)if(it){if(Ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,et,ye.width,ye.height,ye.depth),X)if(D.layerUpdates.size>0){const fe=Kv(ye.width,ye.height,D.format,D.type);for(const pe of D.layerUpdates){const De=ye.data.subarray(pe*fe/ye.data.BYTES_PER_ELEMENT,(pe+1)*fe/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,ye.width,ye.height,1,Ne,Je,De)}D.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ne,Je,ye.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,et,ye.width,ye.height,ye.depth,0,Ne,Je,ye.data);else if(D.isData3DTexture)it?(Ct&&t.texStorage3D(r.TEXTURE_3D,Ce,et,ye.width,ye.height,ye.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ne,Je,ye.data)):t.texImage3D(r.TEXTURE_3D,0,et,ye.width,ye.height,ye.depth,0,Ne,Je,ye.data);else if(D.isFramebufferTexture){if(Ct)if(it)t.texStorage2D(r.TEXTURE_2D,Ce,et,ye.width,ye.height);else{let fe=ye.width,pe=ye.height;for(let De=0;De<Ce;De++)t.texImage2D(r.TEXTURE_2D,De,et,fe,pe,0,Ne,Je,null),fe>>=1,pe>>=1}}else if(dt.length>0){if(it&&Ct){const fe=He(dt[0]);t.texStorage2D(r.TEXTURE_2D,Ce,et,fe.width,fe.height)}for(let fe=0,pe=dt.length;fe<pe;fe++)Oe=dt[fe],it?X&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Ne,Je,Oe):t.texImage2D(r.TEXTURE_2D,fe,et,Ne,Je,Oe);D.generateMipmaps=!1}else if(it){if(Ct){const fe=He(ye);t.texStorage2D(r.TEXTURE_2D,Ce,et,fe.width,fe.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Je,ye)}else t.texImage2D(r.TEXTURE_2D,0,et,Ne,Je,ye);y(D)&&v(de),Ge.__version=he.version,D.onUpdate&&D.onUpdate(D)}O.__version=D.version}function ue(O,D,ie){if(D.image.length!==6)return;const de=we(O,D),ve=D.source;t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+ie);const he=n.get(ve);if(ve.version!==he.__version||de===!0){t.activeTexture(r.TEXTURE0+ie);const Ge=Tt.getPrimaries(Tt.workingColorSpace),be=D.colorSpace===Ps?null:Tt.getPrimaries(D.colorSpace),qe=D.colorSpace===Ps||Ge===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const $e=D.isCompressedTexture||D.image[0].isCompressedTexture,ye=D.image[0]&&D.image[0].isDataTexture,Ne=[];for(let pe=0;pe<6;pe++)!$e&&!ye?Ne[pe]=S(D.image[pe],!0,s.maxCubemapSize):Ne[pe]=ye?D.image[pe].image:D.image[pe],Ne[pe]=wt(D,Ne[pe]);const Je=Ne[0],et=a.convert(D.format,D.colorSpace),Oe=a.convert(D.type),dt=P(D.internalFormat,et,Oe,D.colorSpace),it=D.isVideoTexture!==!0,Ct=he.__version===void 0||de===!0,X=ve.dataReady;let Ce=N(D,Je);te(r.TEXTURE_CUBE_MAP,D);let fe;if($e){it&&Ct&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,dt,Je.width,Je.height);for(let pe=0;pe<6;pe++){fe=Ne[pe].mipmaps;for(let De=0;De<fe.length;De++){const Pe=fe[De];D.format!==tr?et!==null?it?X&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Pe.width,Pe.height,et,Pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,dt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Pe.width,Pe.height,et,Oe,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,dt,Pe.width,Pe.height,0,et,Oe,Pe.data)}}}else{if(fe=D.mipmaps,it&&Ct){fe.length>0&&Ce++;const pe=He(Ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,dt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ye){it?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ne[pe].width,Ne[pe].height,et,Oe,Ne[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,Ne[pe].width,Ne[pe].height,0,et,Oe,Ne[pe].data);for(let De=0;De<fe.length;De++){const rt=fe[De].image[pe].image;it?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,rt.width,rt.height,et,Oe,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,dt,rt.width,rt.height,0,et,Oe,rt.data)}}else{it?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,Oe,Ne[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,et,Oe,Ne[pe]);for(let De=0;De<fe.length;De++){const Pe=fe[De];it?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,et,Oe,Pe.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,dt,et,Oe,Pe.image[pe])}}}y(D)&&v(r.TEXTURE_CUBE_MAP),he.__version=ve.version,D.onUpdate&&D.onUpdate(D)}O.__version=D.version}function Se(O,D,ie,de,ve,he){const Ge=a.convert(ie.format,ie.colorSpace),be=a.convert(ie.type),qe=P(ie.internalFormat,Ge,be,ie.colorSpace),$e=n.get(D),ye=n.get(ie);if(ye.__renderTarget=D,!$e.__hasExternalTextures){const Ne=Math.max(1,D.width>>he),Je=Math.max(1,D.height>>he);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,he,qe,Ne,Je,D.depth,0,Ge,be,null):t.texImage2D(ve,he,qe,Ne,Je,0,Ge,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,O),ct(D)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ve,ye.__webglTexture,0,ht(D)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,ve,ye.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(O,D,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,O),D.depthBuffer){const de=D.depthTexture,ve=de&&de.isDepthTexture?de.type:null,he=b(D.stencilBuffer,ve),Ge=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=ht(D);ct(D)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,he,D.width,D.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,he,D.width,D.height):r.renderbufferStorage(r.RENDERBUFFER,he,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ge,r.RENDERBUFFER,O)}else{const de=D.textures;for(let ve=0;ve<de.length;ve++){const he=de[ve],Ge=a.convert(he.format,he.colorSpace),be=a.convert(he.type),qe=P(he.internalFormat,Ge,be,he.colorSpace),$e=ht(D);ie&&ct(D)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,qe,D.width,D.height):ct(D)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e,qe,D.width,D.height):r.renderbufferStorage(r.RENDERBUFFER,qe,D.width,D.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(O,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,O),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=n.get(D.depthTexture);de.__renderTarget=D,(!de.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),ae(D.depthTexture,0);const ve=de.__webglTexture,he=ht(D);if(D.depthTexture.format===nu)ct(D)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(D.depthTexture.format===iu)ct(D)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Xe(O){const D=n.get(O),ie=O.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==O.depthTexture){const de=O.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),de){const ve=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,de.removeEventListener("dispose",ve)};de.addEventListener("dispose",ve),D.__depthDisposeCallback=ve}D.__boundDepthTexture=de}if(O.depthTexture&&!D.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");const de=O.texture.mipmaps;de&&de.length>0?Te(D.__webglFramebuffer[0],O):Te(D.__webglFramebuffer,O)}else if(ie){D.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer[de]),D.__webglDepthbuffer[de]===void 0)D.__webglDepthbuffer[de]=r.createRenderbuffer(),_e(D.__webglDepthbuffer[de],O,!1);else{const ve=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=D.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,he)}}else{const de=O.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=r.createRenderbuffer(),_e(D.__webglDepthbuffer,O,!1);else{const ve=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=D.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,he)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Be(O,D,ie){const de=n.get(O);D!==void 0&&Se(de.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&Xe(O)}function Rt(O){const D=O.texture,ie=n.get(O),de=n.get(D);O.addEventListener("dispose",T);const ve=O.textures,he=O.isWebGLCubeRenderTarget===!0,Ge=ve.length>1;if(Ge||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=D.version,u.memory.textures++),he){ie.__webglFramebuffer=[];for(let be=0;be<6;be++)if(D.mipmaps&&D.mipmaps.length>0){ie.__webglFramebuffer[be]=[];for(let qe=0;qe<D.mipmaps.length;qe++)ie.__webglFramebuffer[be][qe]=r.createFramebuffer()}else ie.__webglFramebuffer[be]=r.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){ie.__webglFramebuffer=[];for(let be=0;be<D.mipmaps.length;be++)ie.__webglFramebuffer[be]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(Ge)for(let be=0,qe=ve.length;be<qe;be++){const $e=n.get(ve[be]);$e.__webglTexture===void 0&&($e.__webglTexture=r.createTexture(),u.memory.textures++)}if(O.samples>0&&ct(O)===!1){ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let be=0;be<ve.length;be++){const qe=ve[be];ie.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[be]);const $e=a.convert(qe.format,qe.colorSpace),ye=a.convert(qe.type),Ne=P(qe.internalFormat,$e,ye,qe.colorSpace,O.isXRRenderTarget===!0),Je=ht(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,Ne,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,ie.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),_e(ie.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),te(r.TEXTURE_CUBE_MAP,D);for(let be=0;be<6;be++)if(D.mipmaps&&D.mipmaps.length>0)for(let qe=0;qe<D.mipmaps.length;qe++)Se(ie.__webglFramebuffer[be][qe],O,D,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe);else Se(ie.__webglFramebuffer[be],O,D,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(D)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let be=0,qe=ve.length;be<qe;be++){const $e=ve[be],ye=n.get($e);t.bindTexture(r.TEXTURE_2D,ye.__webglTexture),te(r.TEXTURE_2D,$e),Se(ie.__webglFramebuffer,O,$e,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,0),y($e)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(be=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,de.__webglTexture),te(be,D),D.mipmaps&&D.mipmaps.length>0)for(let qe=0;qe<D.mipmaps.length;qe++)Se(ie.__webglFramebuffer[qe],O,D,r.COLOR_ATTACHMENT0,be,qe);else Se(ie.__webglFramebuffer,O,D,r.COLOR_ATTACHMENT0,be,0);y(D)&&v(be),t.unbindTexture()}O.depthBuffer&&Xe(O)}function Pt(O){const D=O.textures;for(let ie=0,de=D.length;ie<de;ie++){const ve=D[ie];if(y(ve)){const he=R(O),Ge=n.get(ve).__webglTexture;t.bindTexture(he,Ge),v(he),t.unbindTexture()}}}const at=[],H=[];function bn(O){if(O.samples>0){if(ct(O)===!1){const D=O.textures,ie=O.width,de=O.height;let ve=r.COLOR_BUFFER_BIT;const he=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=n.get(O),be=D.length>1;if(be)for(let $e=0;$e<D.length;$e++)t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const qe=O.texture.mipmaps;qe&&qe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let $e=0;$e<D.length;$e++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[$e]);const ye=n.get(D[$e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ye,0)}r.blitFramebuffer(0,0,ie,de,0,0,ie,de,ve,r.NEAREST),h===!0&&(at.length=0,H.length=0,at.push(r.COLOR_ATTACHMENT0+$e),O.depthBuffer&&O.resolveDepthBuffer===!1&&(at.push(he),H.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,H)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let $e=0;$e<D.length;$e++){t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[$e]);const ye=n.get(D[$e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,ye,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&h){const D=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[D])}}}function ht(O){return Math.min(s.maxSamples,O.samples)}function ct(O){const D=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function je(O){const D=u.render.frame;p.get(O)!==D&&(p.set(O,D),O.update())}function wt(O,D){const ie=O.colorSpace,de=O.format,ve=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ie!==ka&&ie!==Ps&&(Tt.getTransfer(ie)===Dt?(de!==tr||ve!==Sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),D}function He(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=j,this.resetTextureUnits=$,this.setTexture2D=ae,this.setTexture2DArray=K,this.setTexture3D=ce,this.setTextureCube=F,this.rebindTextures=Be,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ct}function H2(r,e){function t(n,s=Ps){let a;const u=Tt.getTransfer(s);if(n===Sr)return r.UNSIGNED_BYTE;if(n===Gm)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wm)return r.UNSIGNED_SHORT_5_5_5_1;if(n===gx)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===px)return r.BYTE;if(n===mx)return r.SHORT;if(n===eu)return r.UNSIGNED_SHORT;if(n===Vm)return r.INT;if(n===Ao)return r.UNSIGNED_INT;if(n===$r)return r.FLOAT;if(n===gu)return r.HALF_FLOAT;if(n===_x)return r.ALPHA;if(n===vx)return r.RGB;if(n===tr)return r.RGBA;if(n===nu)return r.DEPTH_COMPONENT;if(n===iu)return r.DEPTH_STENCIL;if(n===yx)return r.RED;if(n===Xm)return r.RED_INTEGER;if(n===xx)return r.RG;if(n===jm)return r.RG_INTEGER;if(n===Ym)return r.RGBA_INTEGER;if(n===lf||n===uf||n===cf||n===ff)if(u===Dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===lf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ff)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===lf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ff)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vp||n===Gp||n===Wp||n===Xp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Vp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jp||n===Yp||n===$p)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===jp||n===Yp)return u===Dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===$p)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qp||n===Kp||n===Zp||n===Qp||n===Jp||n===em||n===tm||n===nm||n===im||n===rm||n===sm||n===om||n===am||n===lm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===qp)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kp)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zp)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qp)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jp)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===em)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tm)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nm)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===im)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rm)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sm)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===om)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===am)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lm)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hf||n===um||n===cm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===hf)return u===Dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===um)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sx||n===fm||n===hm||n===dm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===hf)return a.COMPRESSED_RED_RGTC1_EXT;if(n===fm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tu?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const V2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G2=`
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

}`;class W2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new ti,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Er({vertexShader:V2,fragmentShader:G2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ai(new vu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class X2 extends Ro{constructor(e,t){super();const n=this;let s=null,a=1,u=null,c="local-floor",h=1,d=null,p=null,m=null,_=null,x=null,E=null;const S=new W2,y=t.getContextAttributes();let v=null,R=null;const P=[],b=[],N=new ot;let L=null;const T=new Ei;T.viewport=new Xt;const U=new Ei;U.viewport=new Xt;const w=[T,U],A=new cb;let k=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=P[Q];return ue===void 0&&(ue=new rp,P[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=P[Q];return ue===void 0&&(ue=new rp,P[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=P[Q];return ue===void 0&&(ue=new rp,P[Q]=ue),ue.getHandSpace()};function j(Q){const ue=b.indexOf(Q.inputSource);if(ue===-1)return;const Se=P[ue];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,d||u),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function re(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",ae);for(let Q=0;Q<P.length;Q++){const ue=b[Q];ue!==null&&(b[Q]=null,P[Q].disconnect(ue))}k=null,$=null,S.reset(),e.setRenderTarget(v),x=null,_=null,m=null,s=null,R=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",re),s.addEventListener("inputsourceschange",ae),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,_e=null,Te=null;y.depth&&(Te=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=y.stencil?iu:nu,_e=y.stencil?tu:Ao);const Xe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:a};m=new XRWebGLBinding(s,t),_=m.createProjectionLayer(Xe),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),R=new ks(_.textureWidth,_.textureHeight,{format:tr,type:Sr,depthTexture:new Ix(_.textureWidth,_.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new ks(x.framebufferWidth,x.framebufferHeight,{format:tr,type:Sr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(h),d=null,u=await s.requestReferenceSpace(c),we.setContext(s),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ae(Q){for(let ue=0;ue<Q.removed.length;ue++){const Se=Q.removed[ue],_e=b.indexOf(Se);_e>=0&&(b[_e]=null,P[_e].disconnect(Se))}for(let ue=0;ue<Q.added.length;ue++){const Se=Q.added[ue];let _e=b.indexOf(Se);if(_e===-1){for(let Xe=0;Xe<P.length;Xe++)if(Xe>=b.length){b.push(Se),_e=Xe;break}else if(b[Xe]===null){b[Xe]=Se,_e=Xe;break}if(_e===-1)break}const Te=P[_e];Te&&Te.connect(Se)}}const K=new W,ce=new W;function F(Q,ue,Se){K.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(Se.matrixWorld);const _e=K.distanceTo(ce),Te=ue.projectionMatrix.elements,Xe=Se.projectionMatrix.elements,Be=Te[14]/(Te[10]-1),Rt=Te[14]/(Te[10]+1),Pt=(Te[9]+1)/Te[5],at=(Te[9]-1)/Te[5],H=(Te[8]-1)/Te[0],bn=(Xe[8]+1)/Xe[0],ht=Be*H,ct=Be*bn,je=_e/(-H+bn),wt=je*-H;if(ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(wt),Q.translateZ(je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Te[10]===-1)Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const He=Be+je,O=Rt+je,D=ht-wt,ie=ct+(_e-wt),de=Pt*Rt/O*He,ve=at*Rt/O*He;Q.projectionMatrix.makePerspective(D,ie,de,ve,He,O),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function se(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ue=Q.near,Se=Q.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(Se=S.depthFar)),A.near=U.near=T.near=ue,A.far=U.far=T.far=Se,(k!==A.near||$!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,$=A.far),T.layers.mask=Q.layers.mask|2,U.layers.mask=Q.layers.mask|4,A.layers.mask=T.layers.mask|U.layers.mask;const _e=Q.parent,Te=A.cameras;se(A,_e);for(let Xe=0;Xe<Te.length;Xe++)se(Te[Xe],_e);Te.length===2?F(A,T,U):A.projectionMatrix.copy(T.projectionMatrix),Z(Q,A,_e)};function Z(Q,ue,Se){Se===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ru*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&x===null))return h},this.setFoveation=function(Q){h=Q,_!==null&&(_.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(A)};let B=null;function te(Q,ue){if(p=ue.getViewerPose(d||u),E=ue,p!==null){const Se=p.views;x!==null&&(e.setRenderTargetFramebuffer(R,x.framebuffer),e.setRenderTarget(R));let _e=!1;Se.length!==A.cameras.length&&(A.cameras.length=0,_e=!0);for(let Be=0;Be<Se.length;Be++){const Rt=Se[Be];let Pt=null;if(x!==null)Pt=x.getViewport(Rt);else{const H=m.getViewSubImage(_,Rt);Pt=H.viewport,Be===0&&(e.setRenderTargetTextures(R,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(R))}let at=w[Be];at===void 0&&(at=new Ei,at.layers.enable(Be),at.viewport=new Xt,w[Be]=at),at.matrix.fromArray(Rt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Rt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),Be===0&&(A.matrix.copy(at.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),_e===!0&&A.cameras.push(at)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){const Be=m.getDepthInformation(Se[0]);Be&&Be.isValid&&Be.texture&&S.init(e,Be,s.renderState)}}for(let Se=0;Se<P.length;Se++){const _e=b[Se],Te=P[Se];_e!==null&&Te!==void 0&&Te.update(_e,ue,d||u)}B&&B(Q,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),E=null}const we=new Fx;we.setAnimationLoop(te),this.setAnimationLoop=function(Q){B=Q},this.dispose=function(){}}}const co=new ir,j2=new Ot;function Y2(r,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function n(y,v){v.color.getRGB(y.fogColor.value,Px(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function s(y,v,R,P,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(y,v):v.isMeshToonMaterial?(a(y,v),m(y,v)):v.isMeshPhongMaterial?(a(y,v),p(y,v)):v.isMeshStandardMaterial?(a(y,v),_(y,v),v.isMeshPhysicalMaterial&&x(y,v,b)):v.isMeshMatcapMaterial?(a(y,v),E(y,v)):v.isMeshDepthMaterial?a(y,v):v.isMeshDistanceMaterial?(a(y,v),S(y,v)):v.isMeshNormalMaterial?a(y,v):v.isLineBasicMaterial?(u(y,v),v.isLineDashedMaterial&&c(y,v)):v.isPointsMaterial?h(y,v,R,P):v.isSpriteMaterial?d(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===ei&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===ei&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const R=e.get(v),P=R.envMap,b=R.envMapRotation;P&&(y.envMap.value=P,co.copy(b),co.x*=-1,co.y*=-1,co.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(co.y*=-1,co.z*=-1),y.envMapRotation.value.setFromMatrix4(j2.makeRotationFromEuler(co)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function u(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function c(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,R,P){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*R,y.scale.value=P*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function m(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function x(y,v,R){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ei&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function S(y,v){const R=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $2(r,e,t,n){let s={},a={},u=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,P){const b=P.program;n.uniformBlockBinding(R,b)}function d(R,P){let b=s[R.id];b===void 0&&(E(R),b=p(R),s[R.id]=b,R.addEventListener("dispose",y));const N=P.program;n.updateUBOMapping(R,N);const L=e.render.frame;a[R.id]!==L&&(_(R),a[R.id]=L)}function p(R){const P=m();R.__bindingPointIndex=P;const b=r.createBuffer(),N=R.__size,L=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,N,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,b),b}function m(){for(let R=0;R<c;R++)if(u.indexOf(R)===-1)return u.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){const P=s[R.id],b=R.uniforms,N=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let L=0,T=b.length;L<T;L++){const U=Array.isArray(b[L])?b[L]:[b[L]];for(let w=0,A=U.length;w<A;w++){const k=U[w];if(x(k,L,w,N)===!0){const $=k.__offset,j=Array.isArray(k.value)?k.value:[k.value];let re=0;for(let ae=0;ae<j.length;ae++){const K=j[ae],ce=S(K);typeof K=="number"||typeof K=="boolean"?(k.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,$+re,k.__data)):K.isMatrix3?(k.__data[0]=K.elements[0],k.__data[1]=K.elements[1],k.__data[2]=K.elements[2],k.__data[3]=0,k.__data[4]=K.elements[3],k.__data[5]=K.elements[4],k.__data[6]=K.elements[5],k.__data[7]=0,k.__data[8]=K.elements[6],k.__data[9]=K.elements[7],k.__data[10]=K.elements[8],k.__data[11]=0):(K.toArray(k.__data,re),re+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,$,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(R,P,b,N){const L=R.value,T=P+"_"+b;if(N[T]===void 0)return typeof L=="number"||typeof L=="boolean"?N[T]=L:N[T]=L.clone(),!0;{const U=N[T];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return N[T]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function E(R){const P=R.uniforms;let b=0;const N=16;for(let T=0,U=P.length;T<U;T++){const w=Array.isArray(P[T])?P[T]:[P[T]];for(let A=0,k=w.length;A<k;A++){const $=w[A],j=Array.isArray($.value)?$.value:[$.value];for(let re=0,ae=j.length;re<ae;re++){const K=j[re],ce=S(K),F=b%N,se=F%ce.boundary,Z=F+se;b+=se,Z!==0&&N-Z<ce.storage&&(b+=N-Z),$.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=b,b+=ce.storage}}}const L=b%N;return L>0&&(b+=N-L),R.__size=b,R.__cache={},this}function S(R){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=48,P.storage=48):R.isMatrix4?(P.boundary=64,P.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),P}function y(R){const P=R.target;P.removeEventListener("dispose",y);const b=u.indexOf(P.__bindingPointIndex);u.splice(b,1),r.deleteBuffer(s[P.id]),delete s[P.id],delete a[P.id]}function v(){for(const R in s)r.deleteBuffer(s[R]);u=[],s={},a={}}return{bind:h,update:d,dispose:v}}class q2{constructor(e={}){const{canvas:t=MA(),context:n=null,depth:s=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=u;const E=new Uint32Array(4),S=new Int32Array(4);let y=null,v=null;const R=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ns,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let N=!1;this._outputColorSpace=Vn;let L=0,T=0,U=null,w=-1,A=null;const k=new Xt,$=new Xt;let j=null;const re=new ut(0);let ae=0,K=t.width,ce=t.height,F=1,se=null,Z=null;const B=new Xt(0,0,K,ce),te=new Xt(0,0,K,ce);let we=!1;const Q=new Zm;let ue=!1,Se=!1;const _e=new Ot,Te=new Ot,Xe=new W,Be=new Xt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function at(){return U===null?F:1}let H=n;function bn(I,Y){return t.getContext(I,Y)}try{const I={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bm}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),H===null){const Y="webgl2";if(H=bn(Y,I),H===null)throw bn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ht,ct,je,wt,He,O,D,ie,de,ve,he,Ge,be,qe,$e,ye,Ne,Je,et,Oe,dt,it,Ct,X;function Ce(){ht=new sP(H),ht.init(),it=new H2(H,ht),ct=new QR(H,ht,e,it),je=new z2(H,ht),ct.reverseDepthBuffer&&_&&je.buffers.depth.setReversed(!0),wt=new lP(H),He=new A2,O=new B2(H,ht,je,He,ct,it,wt),D=new eP(b),ie=new rP(b),de=new pb(H),Ct=new KR(H,de),ve=new oP(H,de,wt,Ct),he=new cP(H,ve,de,wt),et=new uP(H,ct,O),ye=new JR(He),Ge=new w2(b,D,ie,ht,ct,Ct,ye),be=new Y2(b,He),qe=new C2,$e=new U2(ht),Je=new qR(b,D,ie,je,he,x,h),Ne=new F2(b,he,ct),X=new $2(H,wt,ct,je),Oe=new ZR(H,ht,wt),dt=new aP(H,ht,wt),wt.programs=Ge.programs,b.capabilities=ct,b.extensions=ht,b.properties=He,b.renderLists=qe,b.shadowMap=Ne,b.state=je,b.info=wt}Ce();const fe=new X2(b,H);this.xr=fe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const I=ht.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ht.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(I){I!==void 0&&(F=I,this.setSize(K,ce,!1))},this.getSize=function(I){return I.set(K,ce)},this.setSize=function(I,Y,le=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=I,ce=Y,t.width=Math.floor(I*F),t.height=Math.floor(Y*F),le===!0&&(t.style.width=I+"px",t.style.height=Y+"px"),this.setViewport(0,0,I,Y)},this.getDrawingBufferSize=function(I){return I.set(K*F,ce*F).floor()},this.setDrawingBufferSize=function(I,Y,le){K=I,ce=Y,F=le,t.width=Math.floor(I*le),t.height=Math.floor(Y*le),this.setViewport(0,0,I,Y)},this.getCurrentViewport=function(I){return I.copy(k)},this.getViewport=function(I){return I.copy(B)},this.setViewport=function(I,Y,le,ee){I.isVector4?B.set(I.x,I.y,I.z,I.w):B.set(I,Y,le,ee),je.viewport(k.copy(B).multiplyScalar(F).round())},this.getScissor=function(I){return I.copy(te)},this.setScissor=function(I,Y,le,ee){I.isVector4?te.set(I.x,I.y,I.z,I.w):te.set(I,Y,le,ee),je.scissor($.copy(te).multiplyScalar(F).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(I){je.setScissorTest(we=I)},this.setOpaqueSort=function(I){se=I},this.setTransparentSort=function(I){Z=I},this.getClearColor=function(I){return I.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(I=!0,Y=!0,le=!0){let ee=0;if(I){let q=!1;if(U!==null){const Me=U.texture.format;q=Me===Ym||Me===jm||Me===Xm}if(q){const Me=U.texture.type,Re=Me===Sr||Me===Ao||Me===eu||Me===tu||Me===Gm||Me===Wm,Le=Je.getClearColor(),Fe=Je.getClearAlpha(),tt=Le.r,Qe=Le.g,ze=Le.b;Re?(E[0]=tt,E[1]=Qe,E[2]=ze,E[3]=Fe,H.clearBufferuiv(H.COLOR,0,E)):(S[0]=tt,S[1]=Qe,S[2]=ze,S[3]=Fe,H.clearBufferiv(H.COLOR,0,S))}else ee|=H.COLOR_BUFFER_BIT}Y&&(ee|=H.DEPTH_BUFFER_BIT),le&&(ee|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Je.dispose(),qe.dispose(),$e.dispose(),He.dispose(),D.dispose(),ie.dispose(),he.dispose(),Ct.dispose(),X.dispose(),Ge.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Do),fe.removeEventListener("sessionend",ns),wr.stop()};function pe(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const I=wt.autoReset,Y=Ne.enabled,le=Ne.autoUpdate,ee=Ne.needsUpdate,q=Ne.type;Ce(),wt.autoReset=I,Ne.enabled=Y,Ne.autoUpdate=le,Ne.needsUpdate=ee,Ne.type=q}function Pe(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function rt(I){const Y=I.target;Y.removeEventListener("dispose",rt),kt(Y)}function kt(I){dn(I),He.remove(I)}function dn(I){const Y=He.get(I).programs;Y!==void 0&&(Y.forEach(function(le){Ge.releaseProgram(le)}),I.isShaderMaterial&&Ge.releaseShaderCache(I))}this.renderBufferDirect=function(I,Y,le,ee,q,Me){Y===null&&(Y=Rt);const Re=q.isMesh&&q.matrixWorld.determinant()<0,Le=Eu(I,Y,le,ee,q);je.setMaterial(ee,Re);let Fe=le.index,tt=1;if(ee.wireframe===!0){if(Fe=ve.getWireframeAttribute(le),Fe===void 0)return;tt=2}const Qe=le.drawRange,ze=le.attributes.position;let _t=Qe.start*tt,st=(Qe.start+Qe.count)*tt;Me!==null&&(_t=Math.max(_t,Me.start*tt),st=Math.min(st,(Me.start+Me.count)*tt)),Fe!==null?(_t=Math.max(_t,0),st=Math.min(st,Fe.count)):ze!=null&&(_t=Math.max(_t,0),st=Math.min(st,ze.count));const Qt=st-_t;if(Qt<0||Qt===1/0)return;Ct.setup(q,ee,Le,le,Fe);let Ht,yt=Oe;if(Fe!==null&&(Ht=de.get(Fe),yt=dt,yt.setIndex(Ht)),q.isMesh)ee.wireframe===!0?(je.setLineWidth(ee.wireframeLinewidth*at()),yt.setMode(H.LINES)):yt.setMode(H.TRIANGLES);else if(q.isLine){let Ye=ee.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*at()),q.isLineSegments?yt.setMode(H.LINES):q.isLineLoop?yt.setMode(H.LINE_LOOP):yt.setMode(H.LINE_STRIP)}else q.isPoints?yt.setMode(H.POINTS):q.isSprite&&yt.setMode(H.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)df("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))yt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ye=q._multiDrawStarts,Jt=q._multiDrawCounts,gt=q._multiDrawCount,In=Fe?de.get(Fe).bytesPerElement:1,rs=He.get(ee).currentProgram.getUniforms();for(let Yn=0;Yn<gt;Yn++)rs.setValue(H,"_gl_DrawID",Yn),yt.render(Ye[Yn]/In,Jt[Yn])}else if(q.isInstancedMesh)yt.renderInstances(_t,Qt,q.count);else if(le.isInstancedBufferGeometry){const Ye=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Jt=Math.min(le.instanceCount,Ye);yt.renderInstances(_t,Qt,Jt)}else yt.render(_t,Qt)};function xt(I,Y,le){I.transparent===!0&&I.side===jr&&I.forceSinglePass===!1?(I.side=ei,I.needsUpdate=!0,Lo(I,Y,le),I.side=Jr,I.needsUpdate=!0,Lo(I,Y,le),I.side=jr):Lo(I,Y,le)}this.compile=function(I,Y,le=null){le===null&&(le=I),v=$e.get(le),v.init(Y),P.push(v),le.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),I!==le&&I.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights();const ee=new Set;return I.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Me=q.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){const Le=Me[Re];xt(Le,le,q),ee.add(Le)}else xt(Me,le,q),ee.add(Me)}),v=P.pop(),ee},this.compileAsync=function(I,Y,le=null){const ee=this.compile(I,Y,le);return new Promise(q=>{function Me(){if(ee.forEach(function(Re){He.get(Re).currentProgram.isReady()&&ee.delete(Re)}),ee.size===0){q(I);return}setTimeout(Me,10)}ht.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ni=null;function jn(I){ni&&ni(I)}function Do(){wr.stop()}function ns(){wr.start()}const wr=new Fx;wr.setAnimationLoop(jn),typeof self<"u"&&wr.setContext(self),this.setAnimationLoop=function(I){ni=I,fe.setAnimationLoop(I),I===null?wr.stop():wr.start()},fe.addEventListener("sessionstart",Do),fe.addEventListener("sessionend",ns),this.render=function(I,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(Y),Y=fe.getCamera()),I.isScene===!0&&I.onBeforeRender(b,I,Y,U),v=$e.get(I,P.length),v.init(Y),P.push(v),Te.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(Te),Se=this.localClippingEnabled,ue=ye.init(this.clippingPlanes,Se),y=qe.get(I,R.length),y.init(),R.push(y),fe.enabled===!0&&fe.isPresenting===!0){const Me=b.xr.getDepthSensingMesh();Me!==null&&Ar(Me,Y,-1/0,b.sortObjects)}Ar(I,Y,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(se,Z),Pt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Pt&&Je.addToRenderList(y,I),this.info.render.frame++,ue===!0&&ye.beginShadows();const le=v.state.shadowsArray;Ne.render(le,I,Y),ue===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=y.opaque,q=y.transmissive;if(v.setupLights(),Y.isArrayCamera){const Me=Y.cameras;if(q.length>0)for(let Re=0,Le=Me.length;Re<Le;Re++){const Fe=Me[Re];Xs(ee,q,I,Fe)}Pt&&Je.render(I);for(let Re=0,Le=Me.length;Re<Le;Re++){const Fe=Me[Re];Ws(y,I,Fe,Fe.viewport)}}else q.length>0&&Xs(ee,q,I,Y),Pt&&Je.render(I),Ws(y,I,Y);U!==null&&T===0&&(O.updateMultisampleRenderTarget(U),O.updateRenderTargetMipmap(U)),I.isScene===!0&&I.onAfterRender(b,I,Y),Ct.resetDefaultState(),w=-1,A=null,P.pop(),P.length>0?(v=P[P.length-1],ue===!0&&ye.setGlobalState(b.clippingPlanes,v.state.camera)):v=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function Ar(I,Y,le,ee){if(I.visible===!1)return;if(I.layers.test(Y.layers)){if(I.isGroup)le=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Y);else if(I.isLight)v.pushLight(I),I.castShadow&&v.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Q.intersectsSprite(I)){ee&&Be.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Te);const Re=he.update(I),Le=I.material;Le.visible&&y.push(I,Re,Le,le,Be.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Q.intersectsObject(I))){const Re=he.update(I),Le=I.material;if(ee&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Be.copy(I.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Be.copy(Re.boundingSphere.center)),Be.applyMatrix4(I.matrixWorld).applyMatrix4(Te)),Array.isArray(Le)){const Fe=Re.groups;for(let tt=0,Qe=Fe.length;tt<Qe;tt++){const ze=Fe[tt],_t=Le[ze.materialIndex];_t&&_t.visible&&y.push(I,Re,_t,le,Be.z,ze)}}else Le.visible&&y.push(I,Re,Le,le,Be.z,null)}}const Me=I.children;for(let Re=0,Le=Me.length;Re<Le;Re++)Ar(Me[Re],Y,le,ee)}function Ws(I,Y,le,ee){const q=I.opaque,Me=I.transmissive,Re=I.transparent;v.setupLightsView(le),ue===!0&&ye.setGlobalState(b.clippingPlanes,le),ee&&je.viewport(k.copy(ee)),q.length>0&&is(q,Y,le),Me.length>0&&is(Me,Y,le),Re.length>0&&is(Re,Y,le),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Xs(I,Y,le,ee){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ee.id]===void 0&&(v.state.transmissionRenderTarget[ee.id]=new ks(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?gu:Sr,minFilter:xo,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Me=v.state.transmissionRenderTarget[ee.id],Re=ee.viewport||k;Me.setSize(Re.z*b.transmissionResolutionScale,Re.w*b.transmissionResolutionScale);const Le=b.getRenderTarget();b.setRenderTarget(Me),b.getClearColor(re),ae=b.getClearAlpha(),ae<1&&b.setClearColor(16777215,.5),b.clear(),Pt&&Je.render(le);const Fe=b.toneMapping;b.toneMapping=Ns;const tt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),v.setupLightsView(ee),ue===!0&&ye.setGlobalState(b.clippingPlanes,ee),is(I,le,ee),O.updateMultisampleRenderTarget(Me),O.updateRenderTargetMipmap(Me),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ze=0,_t=Y.length;ze<_t;ze++){const st=Y[ze],Qt=st.object,Ht=st.geometry,yt=st.material,Ye=st.group;if(yt.side===jr&&Qt.layers.test(ee.layers)){const Jt=yt.side;yt.side=ei,yt.needsUpdate=!0,Su(Qt,le,ee,Ht,yt,Ye),yt.side=Jt,yt.needsUpdate=!0,Qe=!0}}Qe===!0&&(O.updateMultisampleRenderTarget(Me),O.updateRenderTargetMipmap(Me))}b.setRenderTarget(Le),b.setClearColor(re,ae),tt!==void 0&&(ee.viewport=tt),b.toneMapping=Fe}function is(I,Y,le){const ee=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,Me=I.length;q<Me;q++){const Re=I[q],Le=Re.object,Fe=Re.geometry,tt=Re.group;let Qe=Re.material;Qe.allowOverride===!0&&ee!==null&&(Qe=ee),Le.layers.test(le.layers)&&Su(Le,Y,le,Fe,Qe,tt)}}function Su(I,Y,le,ee,q,Me){I.onBeforeRender(b,Y,le,ee,q,Me),I.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),q.onBeforeRender(b,Y,le,ee,I,Me),q.transparent===!0&&q.side===jr&&q.forceSinglePass===!1?(q.side=ei,q.needsUpdate=!0,b.renderBufferDirect(le,Y,ee,q,I,Me),q.side=Jr,q.needsUpdate=!0,b.renderBufferDirect(le,Y,ee,q,I,Me),q.side=jr):b.renderBufferDirect(le,Y,ee,q,I,Me),I.onAfterRender(b,Y,le,ee,q,Me)}function Lo(I,Y,le){Y.isScene!==!0&&(Y=Rt);const ee=He.get(I),q=v.state.lights,Me=v.state.shadowsArray,Re=q.state.version,Le=Ge.getParameters(I,q.state,Me,Y,le),Fe=Ge.getProgramCacheKey(Le);let tt=ee.programs;ee.environment=I.isMeshStandardMaterial?Y.environment:null,ee.fog=Y.fog,ee.envMap=(I.isMeshStandardMaterial?ie:D).get(I.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&I.envMap===null?Y.environmentRotation:I.envMapRotation,tt===void 0&&(I.addEventListener("dispose",rt),tt=new Map,ee.programs=tt);let Qe=tt.get(Fe);if(Qe!==void 0){if(ee.currentProgram===Qe&&ee.lightsStateVersion===Re)return sr(I,Le),Qe}else Le.uniforms=Ge.getUniforms(I),I.onBeforeCompile(Le,b),Qe=Ge.acquireProgram(Le,Fe),tt.set(Fe,Qe),ee.uniforms=Le.uniforms;const ze=ee.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(ze.clippingPlanes=ye.uniform),sr(I,Le),ee.needsLights=Jf(I),ee.lightsStateVersion=Re,ee.needsLights&&(ze.ambientLightColor.value=q.state.ambient,ze.lightProbe.value=q.state.probe,ze.directionalLights.value=q.state.directional,ze.directionalLightShadows.value=q.state.directionalShadow,ze.spotLights.value=q.state.spot,ze.spotLightShadows.value=q.state.spotShadow,ze.rectAreaLights.value=q.state.rectArea,ze.ltc_1.value=q.state.rectAreaLTC1,ze.ltc_2.value=q.state.rectAreaLTC2,ze.pointLights.value=q.state.point,ze.pointLightShadows.value=q.state.pointShadow,ze.hemisphereLights.value=q.state.hemi,ze.directionalShadowMap.value=q.state.directionalShadowMap,ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ze.spotShadowMap.value=q.state.spotShadowMap,ze.spotLightMatrix.value=q.state.spotLightMatrix,ze.spotLightMap.value=q.state.spotLightMap,ze.pointShadowMap.value=q.state.pointShadowMap,ze.pointShadowMatrix.value=q.state.pointShadowMatrix),ee.currentProgram=Qe,ee.uniformsList=null,Qe}function Mu(I){if(I.uniformsList===null){const Y=I.currentProgram.getUniforms();I.uniformsList=mf.seqWithValue(Y.seq,I.uniforms)}return I.uniformsList}function sr(I,Y){const le=He.get(I);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function Eu(I,Y,le,ee,q){Y.isScene!==!0&&(Y=Rt),O.resetTextureUnits();const Me=Y.fog,Re=ee.isMeshStandardMaterial?Y.environment:null,Le=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ka,Fe=(ee.isMeshStandardMaterial?ie:D).get(ee.envMap||Re),tt=ee.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Qe=!!le.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),ze=!!le.morphAttributes.position,_t=!!le.morphAttributes.normal,st=!!le.morphAttributes.color;let Qt=Ns;ee.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Qt=b.toneMapping);const Ht=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,yt=Ht!==void 0?Ht.length:0,Ye=He.get(ee),Jt=v.state.lights;if(ue===!0&&(Se===!0||I!==A)){const Cn=I===A&&ee.id===w;ye.setState(ee,I,Cn)}let gt=!1;ee.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Jt.state.version||Ye.outputColorSpace!==Le||q.isBatchedMesh&&Ye.batching===!1||!q.isBatchedMesh&&Ye.batching===!0||q.isBatchedMesh&&Ye.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ye.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ye.instancing===!1||!q.isInstancedMesh&&Ye.instancing===!0||q.isSkinnedMesh&&Ye.skinning===!1||!q.isSkinnedMesh&&Ye.skinning===!0||q.isInstancedMesh&&Ye.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ye.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ye.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ye.instancingMorph===!1&&q.morphTexture!==null||Ye.envMap!==Fe||ee.fog===!0&&Ye.fog!==Me||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ye.numPlanes||Ye.numIntersection!==ye.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==Qe||Ye.morphTargets!==ze||Ye.morphNormals!==_t||Ye.morphColors!==st||Ye.toneMapping!==Qt||Ye.morphTargetsCount!==yt)&&(gt=!0):(gt=!0,Ye.__version=ee.version);let In=Ye.currentProgram;gt===!0&&(In=Lo(ee,Y,q));let rs=!1,Yn=!1,br=!1;const Ut=In.getUniforms(),Un=Ye.uniforms;if(je.useProgram(In.program)&&(rs=!0,Yn=!0,br=!0),ee.id!==w&&(w=ee.id,Yn=!0),rs||A!==I){je.buffers.depth.getReversed()?(_e.copy(I.projectionMatrix),TA(_e),wA(_e),Ut.setValue(H,"projectionMatrix",_e)):Ut.setValue(H,"projectionMatrix",I.projectionMatrix),Ut.setValue(H,"viewMatrix",I.matrixWorldInverse);const xn=Ut.map.cameraPosition;xn!==void 0&&xn.setValue(H,Xe.setFromMatrixPosition(I.matrixWorld)),ct.logarithmicDepthBuffer&&Ut.setValue(H,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Ut.setValue(H,"isOrthographic",I.isOrthographicCamera===!0),A!==I&&(A=I,Yn=!0,br=!0)}if(q.isSkinnedMesh){Ut.setOptional(H,q,"bindMatrix"),Ut.setOptional(H,q,"bindMatrixInverse");const Cn=q.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Ut.setValue(H,"boneTexture",Cn.boneTexture,O))}q.isBatchedMesh&&(Ut.setOptional(H,q,"batchingTexture"),Ut.setValue(H,"batchingTexture",q._matricesTexture,O),Ut.setOptional(H,q,"batchingIdTexture"),Ut.setValue(H,"batchingIdTexture",q._indirectTexture,O),Ut.setOptional(H,q,"batchingColorTexture"),q._colorsTexture!==null&&Ut.setValue(H,"batchingColorTexture",q._colorsTexture,O));const yn=le.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&et.update(q,le,In),(Yn||Ye.receiveShadow!==q.receiveShadow)&&(Ye.receiveShadow=q.receiveShadow,Ut.setValue(H,"receiveShadow",q.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Un.envMap.value=Fe,Un.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&Y.environment!==null&&(Un.envMapIntensity.value=Y.environmentIntensity),Yn&&(Ut.setValue(H,"toneMappingExposure",b.toneMappingExposure),Ye.needsLights&&Tu(Un,br),Me&&ee.fog===!0&&be.refreshFogUniforms(Un,Me),be.refreshMaterialUniforms(Un,ee,F,ce,v.state.transmissionRenderTarget[I.id]),mf.upload(H,Mu(Ye),Un,O)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(mf.upload(H,Mu(Ye),Un,O),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Ut.setValue(H,"center",q.center),Ut.setValue(H,"modelViewMatrix",q.modelViewMatrix),Ut.setValue(H,"normalMatrix",q.normalMatrix),Ut.setValue(H,"modelMatrix",q.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Cn=ee.uniformsGroups;for(let xn=0,St=Cn.length;xn<St;xn++){const or=Cn[xn];X.update(or,In),X.bind(or,In)}}return In}function Tu(I,Y){I.ambientLightColor.needsUpdate=Y,I.lightProbe.needsUpdate=Y,I.directionalLights.needsUpdate=Y,I.directionalLightShadows.needsUpdate=Y,I.pointLights.needsUpdate=Y,I.pointLightShadows.needsUpdate=Y,I.spotLights.needsUpdate=Y,I.spotLightShadows.needsUpdate=Y,I.rectAreaLights.needsUpdate=Y,I.hemisphereLights.needsUpdate=Y}function Jf(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(I,Y,le){const ee=He.get(I);ee.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),He.get(I.texture).__webglTexture=Y,He.get(I.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:le,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,Y){const le=He.get(I);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};const wu=H.createFramebuffer();this.setRenderTarget=function(I,Y=0,le=0){U=I,L=Y,T=le;let ee=!0,q=null,Me=!1,Re=!1;if(I){const Fe=He.get(I);if(Fe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(H.FRAMEBUFFER,null),ee=!1;else if(Fe.__webglFramebuffer===void 0)O.setupRenderTarget(I);else if(Fe.__hasExternalTextures)O.rebindTextures(I,He.get(I.texture).__webglTexture,He.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const ze=I.depthTexture;if(Fe.__boundDepthTexture!==ze){if(ze!==null&&He.has(ze)&&(I.width!==ze.image.width||I.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(I)}}const tt=I.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Re=!0);const Qe=He.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Qe[Y])?q=Qe[Y][le]:q=Qe[Y],Me=!0):I.samples>0&&O.useMultisampledRTT(I)===!1?q=He.get(I).__webglMultisampledFramebuffer:Array.isArray(Qe)?q=Qe[le]:q=Qe,k.copy(I.viewport),$.copy(I.scissor),j=I.scissorTest}else k.copy(B).multiplyScalar(F).floor(),$.copy(te).multiplyScalar(F).floor(),j=we;if(le!==0&&(q=wu),je.bindFramebuffer(H.FRAMEBUFFER,q)&&ee&&je.drawBuffers(I,q),je.viewport(k),je.scissor($),je.setScissorTest(j),Me){const Fe=He.get(I.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,le)}else if(Re){const Fe=He.get(I.texture),tt=Y;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.__webglTexture,le,tt)}else if(I!==null&&le!==0){const Fe=He.get(I.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Fe.__webglTexture,le)}w=-1},this.readRenderTargetPixels=function(I,Y,le,ee,q,Me,Re){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=He.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){je.bindFramebuffer(H.FRAMEBUFFER,Le);try{const Fe=I.texture,tt=Fe.format,Qe=Fe.type;if(!ct.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=I.width-ee&&le>=0&&le<=I.height-q&&H.readPixels(Y,le,ee,q,it.convert(tt),it.convert(Qe),Me)}finally{const Fe=U!==null?He.get(U).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(I,Y,le,ee,q,Me,Re){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=He.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le)if(Y>=0&&Y<=I.width-ee&&le>=0&&le<=I.height-q){je.bindFramebuffer(H.FRAMEBUFFER,Le);const Fe=I.texture,tt=Fe.format,Qe=Fe.type;if(!ct.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ze),H.bufferData(H.PIXEL_PACK_BUFFER,Me.byteLength,H.STREAM_READ),H.readPixels(Y,le,ee,q,it.convert(tt),it.convert(Qe),0);const _t=U!==null?He.get(U).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,_t);const st=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await EA(H,st,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ze),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Me),H.deleteBuffer(ze),H.deleteSync(st),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,Y=null,le=0){const ee=Math.pow(2,-le),q=Math.floor(I.image.width*ee),Me=Math.floor(I.image.height*ee),Re=Y!==null?Y.x:0,Le=Y!==null?Y.y:0;O.setTexture2D(I,0),H.copyTexSubImage2D(H.TEXTURE_2D,le,0,0,Re,Le,q,Me),je.unbindTexture()};const Au=H.createFramebuffer(),bu=H.createFramebuffer();this.copyTextureToTexture=function(I,Y,le=null,ee=null,q=0,Me=null){Me===null&&(q!==0?(df("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=q,q=0):Me=0);let Re,Le,Fe,tt,Qe,ze,_t,st,Qt;const Ht=I.isCompressedTexture?I.mipmaps[Me]:I.image;if(le!==null)Re=le.max.x-le.min.x,Le=le.max.y-le.min.y,Fe=le.isBox3?le.max.z-le.min.z:1,tt=le.min.x,Qe=le.min.y,ze=le.isBox3?le.min.z:0;else{const yn=Math.pow(2,-q);Re=Math.floor(Ht.width*yn),Le=Math.floor(Ht.height*yn),I.isDataArrayTexture?Fe=Ht.depth:I.isData3DTexture?Fe=Math.floor(Ht.depth*yn):Fe=1,tt=0,Qe=0,ze=0}ee!==null?(_t=ee.x,st=ee.y,Qt=ee.z):(_t=0,st=0,Qt=0);const yt=it.convert(Y.format),Ye=it.convert(Y.type);let Jt;Y.isData3DTexture?(O.setTexture3D(Y,0),Jt=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(O.setTexture2DArray(Y,0),Jt=H.TEXTURE_2D_ARRAY):(O.setTexture2D(Y,0),Jt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const gt=H.getParameter(H.UNPACK_ROW_LENGTH),In=H.getParameter(H.UNPACK_IMAGE_HEIGHT),rs=H.getParameter(H.UNPACK_SKIP_PIXELS),Yn=H.getParameter(H.UNPACK_SKIP_ROWS),br=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ht.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ht.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,tt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Qe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ze);const Ut=I.isDataArrayTexture||I.isData3DTexture,Un=Y.isDataArrayTexture||Y.isData3DTexture;if(I.isDepthTexture){const yn=He.get(I),Cn=He.get(Y),xn=He.get(yn.__renderTarget),St=He.get(Cn.__renderTarget);je.bindFramebuffer(H.READ_FRAMEBUFFER,xn.__webglFramebuffer),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let or=0;or<Fe;or++)Ut&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.get(I).__webglTexture,q,ze+or),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.get(Y).__webglTexture,Me,Qt+or)),H.blitFramebuffer(tt,Qe,Re,Le,_t,st,Re,Le,H.DEPTH_BUFFER_BIT,H.NEAREST);je.bindFramebuffer(H.READ_FRAMEBUFFER,null),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(q!==0||I.isRenderTargetTexture||He.has(I)){const yn=He.get(I),Cn=He.get(Y);je.bindFramebuffer(H.READ_FRAMEBUFFER,Au),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,bu);for(let xn=0;xn<Fe;xn++)Ut?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,yn.__webglTexture,q,ze+xn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,yn.__webglTexture,q),Un?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Cn.__webglTexture,Me,Qt+xn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Cn.__webglTexture,Me),q!==0?H.blitFramebuffer(tt,Qe,Re,Le,_t,st,Re,Le,H.COLOR_BUFFER_BIT,H.NEAREST):Un?H.copyTexSubImage3D(Jt,Me,_t,st,Qt+xn,tt,Qe,Re,Le):H.copyTexSubImage2D(Jt,Me,_t,st,tt,Qe,Re,Le);je.bindFramebuffer(H.READ_FRAMEBUFFER,null),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Un?I.isDataTexture||I.isData3DTexture?H.texSubImage3D(Jt,Me,_t,st,Qt,Re,Le,Fe,yt,Ye,Ht.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Jt,Me,_t,st,Qt,Re,Le,Fe,yt,Ht.data):H.texSubImage3D(Jt,Me,_t,st,Qt,Re,Le,Fe,yt,Ye,Ht):I.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Me,_t,st,Re,Le,yt,Ye,Ht.data):I.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Me,_t,st,Ht.width,Ht.height,yt,Ht.data):H.texSubImage2D(H.TEXTURE_2D,Me,_t,st,Re,Le,yt,Ye,Ht);H.pixelStorei(H.UNPACK_ROW_LENGTH,gt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,In),H.pixelStorei(H.UNPACK_SKIP_PIXELS,rs),H.pixelStorei(H.UNPACK_SKIP_ROWS,Yn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,br),Me===0&&Y.generateMipmaps&&H.generateMipmap(Jt),je.unbindTexture()},this.copyTextureToTexture3D=function(I,Y,le=null,ee=null,q=0){return df('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,Y,le,ee,q)},this.initRenderTarget=function(I){He.get(I).__webglFramebuffer===void 0&&O.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?O.setTextureCube(I,0):I.isData3DTexture?O.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?O.setTexture2DArray(I,0):O.setTexture2D(I,0),je.unbindTexture()},this.resetState=function(){L=0,T=0,U=null,je.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}class K2 extends Ai{constructor(e,t={}){super(e),this.isWater=!0;const n=this,s=t.textureWidth!==void 0?t.textureWidth:512,a=t.textureHeight!==void 0?t.textureHeight:512,u=t.clipBias!==void 0?t.clipBias:0,c=t.alpha!==void 0?t.alpha:1,h=t.time!==void 0?t.time:0,d=t.waterNormals!==void 0?t.waterNormals:null,p=t.sunDirection!==void 0?t.sunDirection:new W(.70707,.70707,0),m=new ut(t.sunColor!==void 0?t.sunColor:16777215),_=new ut(t.waterColor!==void 0?t.waterColor:8355711),x=t.eye!==void 0?t.eye:new W(0,0,0),E=t.distortionScale!==void 0?t.distortionScale:20,S=t.side!==void 0?t.side:Jr,y=t.fog!==void 0?t.fog:!1,v=new Wr,R=new W,P=new W,b=new W,N=new Ot,L=new W(0,0,-1),T=new Xt,U=new W,w=new W,A=new Xt,k=new Ot,$=new Ei,j=new ks(s,a),re={name:"MirrorShader",uniforms:Tf.merge([Ae.fog,Ae.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ot},sunColor:{value:new ut(8355711)},sunDirection:{value:new W(.70707,.70707,0)},eye:{value:new W},waterColor:{value:new ut(5592405)}}]),vertexShader:`
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
				}`},ae=new Er({name:re.name,uniforms:Tf.clone(re.uniforms),vertexShader:re.vertexShader,fragmentShader:re.fragmentShader,lights:!0,side:S,fog:y});ae.uniforms.mirrorSampler.value=j.texture,ae.uniforms.textureMatrix.value=k,ae.uniforms.alpha.value=c,ae.uniforms.time.value=h,ae.uniforms.normalSampler.value=d,ae.uniforms.sunColor.value=m,ae.uniforms.waterColor.value=_,ae.uniforms.sunDirection.value=p,ae.uniforms.distortionScale.value=E,ae.uniforms.eye.value=x,n.material=ae,n.onBeforeRender=function(K,ce,F){if(P.setFromMatrixPosition(n.matrixWorld),b.setFromMatrixPosition(F.matrixWorld),N.extractRotation(n.matrixWorld),R.set(0,0,1),R.applyMatrix4(N),U.subVectors(P,b),U.dot(R)>0)return;U.reflect(R).negate(),U.add(P),N.extractRotation(F.matrixWorld),L.set(0,0,-1),L.applyMatrix4(N),L.add(b),w.subVectors(P,L),w.reflect(R).negate(),w.add(P),$.position.copy(U),$.up.set(0,1,0),$.up.applyMatrix4(N),$.up.reflect(R),$.lookAt(w),$.far=F.far,$.updateMatrixWorld(),$.projectionMatrix.copy(F.projectionMatrix),k.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),k.multiply($.projectionMatrix),k.multiply($.matrixWorldInverse),v.setFromNormalAndCoplanarPoint(R,P),v.applyMatrix4($.matrixWorldInverse),T.set(v.normal.x,v.normal.y,v.normal.z,v.constant);const se=$.projectionMatrix;A.x=(Math.sign(T.x)+se.elements[8])/se.elements[0],A.y=(Math.sign(T.y)+se.elements[9])/se.elements[5],A.z=-1,A.w=(1+se.elements[10])/se.elements[14],T.multiplyScalar(2/T.dot(A)),se.elements[2]=T.x,se.elements[6]=T.y,se.elements[10]=T.z+1-u,se.elements[14]=T.w,x.setFromMatrixPosition(F.matrixWorld);const Z=K.getRenderTarget(),B=K.xr.enabled,te=K.shadowMap.autoUpdate;n.visible=!1,K.xr.enabled=!1,K.shadowMap.autoUpdate=!1,K.setRenderTarget(j),K.state.buffers.depth.setMask(!0),K.autoClear===!1&&K.clear(),K.render(ce,$),n.visible=!0,K.xr.enabled=B,K.shadowMap.autoUpdate=te,K.setRenderTarget(Z);const we=F.viewport;we!==void 0&&K.state.viewport(we)}}}class qf extends Ai{constructor(){const e=qf.SkyShader,t=new Er({name:e.name,uniforms:Tf.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:ei,depthWrite:!1});super(new $a(1,1,1),t),this.isSky=!0}}qf.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new W},up:{value:new W(0,1,0)}},vertexShader:`
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

		}`};const Sy={type:"change"},Jm={type:"start"},Vx={type:"end"},tf=new Yf,My=new Wr,Z2=Math.cos(70*Ol.DEG2RAD),gn=new W,ui=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gp=1e-6;class Q2 extends hb{constructor(e,t=null){super(e,t),this.state=It.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ca.ROTATE,MIDDLE:Ca.DOLLY,RIGHT:Ca.PAN},this.touches={ONE:Ma.ROTATE,TWO:Ma.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new zs,this._lastTargetPosition=new W,this._quat=new zs().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qv,this._sphericalDelta=new qv,this._scale=1,this._panOffset=new W,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new W,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eD.bind(this),this._onPointerDown=J2.bind(this),this._onPointerUp=tD.bind(this),this._onContextMenu=lD.bind(this),this._onMouseWheel=rD.bind(this),this._onKeyDown=sD.bind(this),this._onTouchStart=oD.bind(this),this._onTouchMove=aD.bind(this),this._onMouseDown=nD.bind(this),this._onMouseMove=iD.bind(this),this._interceptControlDown=uD.bind(this),this._interceptControlUp=cD.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sy),this.update(),this.state=It.NONE}update(e=null){const t=this.object.position;gn.copy(t).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ui:n>Math.PI&&(n-=ui),s<-Math.PI?s+=ui:s>Math.PI&&(s-=ui),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=u!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),t.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const c=gn.length();u=this._clampDistance(c*this._scale);const h=c-u;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),a=!!h}else if(this.object.isOrthographicCamera){const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=h!==this.object.zoom;const d=new W(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(c),this.object.updateMatrixWorld(),u=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(tf.origin.copy(this.object.position),tf.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tf.direction))<Z2?this.object.lookAt(this.target):(My.setFromNormalAndCoplanarPoint(this.object.up,this.target),tf.intersectPlane(My,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>gp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gp||this._lastTargetPosition.distanceToSquared(this.target)>gp?(this.dispatchEvent(Sy),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ui/60*this.autoRotateSpeed*e:ui/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){gn.setFromMatrixColumn(t,0),gn.multiplyScalar(-e),this._panOffset.add(gn)}_panUp(e,t){this.screenSpacePanning===!0?gn.setFromMatrixColumn(t,1):(gn.setFromMatrixColumn(t,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(e),this._panOffset.add(gn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;gn.copy(s).sub(this.target);let a=gn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,a=t-n.top,u=n.width,c=n.height;this._mouse.x=s/u*2-1,this._mouse.y=-(a/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(u,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ot,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function J2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function eD(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function tD(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vx),this.state=It.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nD(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ca.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=It.DOLLY;break;case Ca.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=It.ROTATE}break;case Ca.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Jm)}function iD(r){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function rD(r){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(r.preventDefault(),this.dispatchEvent(Jm),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Vx))}function sD(r){this.enabled!==!1&&this._handleKeyDown(r)}function oD(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ma.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=It.TOUCH_ROTATE;break;case Ma.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case Ma.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=It.TOUCH_DOLLY_PAN;break;case Ma.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Jm)}function aD(r){switch(this._trackPointer(r),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=It.NONE}}function lD(r){this.enabled!==!1&&r.preventDefault()}function uD(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cD(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const fD=/^[og]\s*(.+)?/,hD=/^mtllib /,dD=/^usemtl /,pD=/^usemap /,Ey=/\s+/,Ty=new W,_p=new W,wy=new W,Ay=new W,zi=new W,nf=new ut;function mD(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,a){const u=this._finalize(!1);u&&(u.inherited||u.groupCount<=0)&&this.materials.splice(u.index,1);const c={index:this.materials.length,name:s||"",mtllib:Array.isArray(a)&&a.length>0?a[a.length-1]:"",smooth:u!==void 0?u.smooth:this.smooth,groupStart:u!==void 0?u.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const d={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return d.clone=this.clone.bind(d),d}};return this.materials.push(c),c},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const a=this.currentMaterial();if(a&&a.groupEnd===-1&&(a.groupEnd=this.geometry.vertices.length/3,a.groupCount=a.groupEnd-a.groupStart,a.inherited=!1),s&&this.materials.length>1)for(let u=this.materials.length-1;u>=0;u--)this.materials[u].groupCount<=0&&this.materials.splice(u,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),a}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,a=this.object.geometry.vertices;a.push(s[e+0],s[e+1],s[e+2]),a.push(s[t+0],s[t+1],s[t+2]),a.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,a=this.object.geometry.normals;a.push(s[e+0],s[e+1],s[e+2]),a.push(s[t+0],s[t+1],s[t+2]),a.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,a=this.object.geometry.normals;Ty.fromArray(s,e),_p.fromArray(s,t),wy.fromArray(s,n),zi.subVectors(wy,_p),Ay.subVectors(Ty,_p),zi.cross(Ay),zi.normalize(),a.push(zi.x,zi.y,zi.z),a.push(zi.x,zi.y,zi.z),a.push(zi.x,zi.y,zi.z)},addColor:function(e,t,n){const s=this.colors,a=this.object.geometry.colors;s[e]!==void 0&&a.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&a.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&a.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,a=this.object.geometry.uvs;a.push(s[e+0],s[e+1]),a.push(s[t+0],s[t+1]),a.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,a,u,c,h,d){const p=this.vertices.length;let m=this.parseVertexIndex(e,p),_=this.parseVertexIndex(t,p),x=this.parseVertexIndex(n,p);if(this.addVertex(m,_,x),this.addColor(m,_,x),c!==void 0&&c!==""){const E=this.normals.length;m=this.parseNormalIndex(c,E),_=this.parseNormalIndex(h,E),x=this.parseNormalIndex(d,E),this.addNormal(m,_,x)}else this.addFaceNormal(m,_,x);if(s!==void 0&&s!==""){const E=this.uvs.length;m=this.parseUVIndex(s,E),_=this.parseUVIndex(a,E),x=this.parseUVIndex(u,E),this.addUV(m,_,x),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const a=this.parseVertexIndex(e[n],t);this.addVertexPoint(a),this.addColor(a)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let a=0,u=e.length;a<u;a++)this.addVertexLine(this.parseVertexIndex(e[a],n));for(let a=0,u=t.length;a<u;a++)this.addUVLine(this.parseUVIndex(t[a],s))}};return r.startObject("",!1),r}class gD extends yu{constructor(e){super(e),this.materials=null}load(e,t,n,s){const a=this,u=new rb(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(c){try{t(a.parse(c))}catch(h){s?s(h):console.error(h),a.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new mD;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let c=0,h=n.length;c<h;c++){const d=n[c].trimStart();if(d.length===0)continue;const p=d.charAt(0);if(p!=="#")if(p==="v"){const m=d.split(Ey);switch(m[0]){case"v":t.vertices.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3])),m.length>=7?(nf.setRGB(parseFloat(m[4]),parseFloat(m[5]),parseFloat(m[6]),Vn),t.colors.push(nf.r,nf.g,nf.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3]));break;case"vt":t.uvs.push(parseFloat(m[1]),parseFloat(m[2]));break}}else if(p==="f"){const _=d.slice(1).trim().split(Ey),x=[];for(let S=0,y=_.length;S<y;S++){const v=_[S];if(v.length>0){const R=v.split("/");x.push(R)}}const E=x[0];for(let S=1,y=x.length-1;S<y;S++){const v=x[S],R=x[S+1];t.addFace(E[0],v[0],R[0],E[1],v[1],R[1],E[2],v[2],R[2])}}else if(p==="l"){const m=d.substring(1).trim().split(" ");let _=[];const x=[];if(d.indexOf("/")===-1)_=m;else for(let E=0,S=m.length;E<S;E++){const y=m[E].split("/");y[0]!==""&&_.push(y[0]),y[1]!==""&&x.push(y[1])}t.addLineGeometry(_,x)}else if(p==="p"){const _=d.slice(1).trim().split(" ");t.addPointGeometry(_)}else if((s=fD.exec(d))!==null){const m=(" "+s[0].slice(1).trim()).slice(1);t.startObject(m)}else if(dD.test(d))t.object.startMaterial(d.substring(7).trim(),t.materialLibraries);else if(hD.test(d))t.materialLibraries.push(d.substring(7).trim());else if(pD.test(d))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(s=d.split(" "),s.length>1){const _=s[1].trim().toLowerCase();t.object.smooth=_!=="0"&&_!=="off"}else t.object.smooth=!0;const m=t.object.currentMaterial();m&&(m.smooth=t.object.smooth)}else{if(d==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+d+'"')}}t.finalize();const a=new Fl;if(a.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let c=0,h=t.objects.length;c<h;c++){const d=t.objects[c],p=d.geometry,m=d.materials,_=p.type==="Line",x=p.type==="Points";let E=!1;if(p.vertices.length===0)continue;const S=new rr;S.setAttribute("position",new Qn(p.vertices,3)),p.normals.length>0&&S.setAttribute("normal",new Qn(p.normals,3)),p.colors.length>0&&(E=!0,S.setAttribute("color",new Qn(p.colors,3))),p.hasUVIndices===!0&&S.setAttribute("uv",new Qn(p.uvs,2));const y=[];for(let R=0,P=m.length;R<P;R++){const b=m[R],N=b.name+"_"+b.smooth+"_"+E;let L=t.materials[N];if(this.materials!==null){if(L=this.materials.create(b.name),_&&L&&!(L instanceof pf)){const T=new pf;Mr.prototype.copy.call(T,L),T.color.copy(L.color),L=T}else if(x&&L&&!(L instanceof kl)){const T=new kl({size:10,sizeAttenuation:!1});Mr.prototype.copy.call(T,L),T.color.copy(L.color),T.map=L.map,L=T}}L===void 0&&(_?L=new pf:x?L=new kl({size:1,sizeAttenuation:!1}):L=new JA,L.name=b.name,L.flatShading=!b.smooth,L.vertexColors=E,t.materials[N]=L),y.push(L)}let v;if(y.length>1){for(let R=0,P=m.length;R<P;R++){const b=m[R];S.addGroup(b.groupStart,b.groupCount,R)}_?v=new Vv(S,y):x?v=new ap(S,y):v=new Ai(S,y)}else _?v=new Vv(S,y[0]):x?v=new ap(S,y[0]):v=new Ai(S,y[0]);v.name=d.name,a.add(v)}else if(t.vertices.length>0){const c=new kl({size:1,sizeAttenuation:!1}),h=new rr;h.setAttribute("position",new Qn(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new Qn(t.colors,3)),c.vertexColors=!0);const d=new ap(h,c);a.add(d)}return a}}function Gr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Gx(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ba={duration:.5,overwrite:!1,delay:0},eg,Ln,Wt,xr=1e8,Wn=1/xr,gm=Math.PI*2,_D=gm/4,vD=0,Wx=Math.sqrt,yD=Math.cos,xD=Math.sin,An=function(e){return typeof e=="string"},rn=function(e){return typeof e=="function"},es=function(e){return typeof e=="number"},tg=function(e){return typeof e>"u"},Tr=function(e){return typeof e=="object"},ci=function(e){return e!==!1},ng=function(){return typeof window<"u"},rf=function(e){return rn(e)||An(e)},Xx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xn=Array.isArray,_m=/(?:-?\.?\d|\.)+/gi,jx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ta=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,vp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yx=/[+-]=-?[.\d]+/,$x=/[^,'"\[\]\s]+/gi,SD=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Kt,fr,vm,ig,Pi={},Cf={},qx,Kx=function(e){return(Cf=Ha(e,Pi))&&mi},rg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ou=function(e,t){return!t&&console.warn(e)},Zx=function(e,t){return e&&(Pi[e]=t)&&Cf&&(Cf[e]=t)||Pi},au=function(){return 0},MD={suppressEvents:!0,isStart:!0,kill:!1},gf={suppressEvents:!0,kill:!1},ED={suppressEvents:!0},sg={},Os=[],ym={},Qx,Mi={},yp={},by=30,_f=[],og="",ag=function(e){var t=e[0],n,s;if(Tr(t)||rn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(s=_f.length;s--&&!_f[s].targetTest(t););n=_f[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new MS(e[s],n)))||e.splice(s,1);return e},Mo=function(e){return e._gsap||ag(Vi(e))[0]._gsap},Jx=function(e,t,n){return(n=e[t])&&rn(n)?e[t]():tg(n)&&e.getAttribute&&e.getAttribute(t)||n},fi=function(e,t){return(e=e.split(",")).forEach(t)||e},on=function(e){return Math.round(e*1e5)/1e5||0},fn=function(e){return Math.round(e*1e7)/1e7||0},Da=function(e,t){var n=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},TD=function(e,t){for(var n=t.length,s=0;e.indexOf(t[s])<0&&++s<n;);return s<n},Rf=function(){var e=Os.length,t=Os.slice(0),n,s;for(ym={},Os.length=0,n=0;n<e;n++)s=t[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},lg=function(e){return!!(e._initted||e._startAt||e.add)},eS=function(e,t,n,s){Os.length&&!Ln&&Rf(),e.render(t,n,!!(Ln&&t<0&&lg(e))),Os.length&&!Ln&&Rf()},tS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match($x).length<2?t:An(e)?e.trim():e},nS=function(e){return e},Di=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},wD=function(e){return function(t,n){for(var s in n)s in t||s==="duration"&&e||s==="ease"||(t[s]=n[s])}},Ha=function(e,t){for(var n in t)e[n]=t[n];return e},Cy=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Tr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Pf=function(e,t){var n={},s;for(s in e)s in t||(n[s]=e[s]);return n},jl=function(e){var t=e.parent||Kt,n=e.keyframes?wD(Xn(e.keyframes)):Di;if(ci(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},AD=function(e,t){for(var n=e.length,s=n===t.length;s&&n--&&e[n]===t[n];);return n<0},iS=function(e,t,n,s,a){var u=e[s],c;if(a)for(c=t[a];u&&u[a]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[s]=t,t._prev=u,t.parent=t._dp=e,t},Kf=function(e,t,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var a=t._prev,u=t._next;a?a._next=u:e[n]===t&&(e[n]=u),u?u._prev=a:e[s]===t&&(e[s]=a),t._next=t._prev=t.parent=null},Bs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Eo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},bD=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xm=function(e,t,n,s){return e._startAt&&(Ln?e._startAt.revert(gf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},CD=function r(e){return!e||e._ts&&r(e.parent)},Ry=function(e){return e._repeat?Va(e._tTime,e=e.duration()+e._rDelay)*e:0},Va=function(e,t){var n=Math.floor(e=fn(e/t));return e&&n===e?n-1:n},Df=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Zf=function(e){return e._end=fn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Wn)||0))},Qf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=fn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Zf(e),n._dirty||Eo(n,e)),e},rS=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Df(e.rawTime(),t),(!t._dur||xu(0,t.totalDuration(),n)-t._tTime>Wn)&&t.render(n,!0)),Eo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},mr=function(e,t,n,s){return t.parent&&Bs(t),t._start=fn((es(n)?n:n||e!==Kt?Bi(e,n,t):e._time)+t._delay),t._end=fn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),iS(e,t,"_first","_last",e._sort?"_start":0),Sm(t)||(e._recent=t),s||rS(e,t),e._ts<0&&Qf(e,e._tTime),e},sS=function(e,t){return(Pi.ScrollTrigger||rg("scrollTrigger",t))&&Pi.ScrollTrigger.create(t,e)},oS=function(e,t,n,s,a){if(cg(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!Ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Qx!==wi.frame)return Os.push(e),e._lazy=[a,s],1},RD=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Sm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},PD=function(e,t,n,s){var a=e.ratio,u=t<0||!t&&(!e._start&&RD(e)&&!(!e._initted&&Sm(e))||(e._ts<0||e._dp._ts<0)&&!Sm(e))?0:1,c=e._rDelay,h=0,d,p,m;if(c&&e._repeat&&(h=xu(0,e._tDur,t),p=Va(h,c),e._yoyo&&p&1&&(u=1-u),p!==Va(e._tTime,c)&&(a=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==a||Ln||s||e._zTime===Wn||!t&&e._zTime){if(!e._initted&&oS(e,t,s,n,h))return;for(m=e._zTime,e._zTime=t||(n?Wn:0),n||(n=t&&!m),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=h,d=e._pt;d;)d.r(u,d.d),d=d._next;t<0&&xm(e,t,n,!0),e._onUpdate&&!n&&bi(e,"onUpdate"),h&&e._repeat&&!n&&e.parent&&bi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&Bs(e,1),!n&&!Ln&&(bi(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},DD=function(e,t,n){var s;if(n>t)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Ga=function(e,t,n,s){var a=e._repeat,u=fn(t)||0,c=e._tTime/e._tDur;return c&&!s&&(e._time*=u/e._dur),e._dur=u,e._tDur=a?a<0?1e10:fn(u*(a+1)+e._rDelay*a):u,c>0&&!s&&Qf(e,e._tTime=e._tDur*c),e.parent&&Zf(e),n||Eo(e.parent,e),e},Py=function(e){return e instanceof Jn?Eo(e):Ga(e,e._dur)},LD={_start:0,endTime:au,totalDuration:au},Bi=function r(e,t,n){var s=e.labels,a=e._recent||LD,u=e.duration()>=xr?a.endTime(!1):e._dur,c,h,d;return An(t)&&(isNaN(t)||t in s)?(h=t.charAt(0),d=t.substr(-1)==="%",c=t.indexOf("="),h==="<"||h===">"?(c>=0&&(t=t.replace(/=/,"")),(h==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(c<0?a:n).totalDuration()/100:1)):c<0?(t in s||(s[t]=u),s[t]):(h=parseFloat(t.charAt(c-1)+t.substr(c+1)),d&&n&&(h=h/100*(Xn(n)?n[0]:n).totalDuration()),c>1?r(e,t.substr(0,c-1),n)+h:u+h)):t==null?u:+t},Yl=function(e,t,n){var s=es(t[1]),a=(s?2:1)+(e<2?0:1),u=t[a],c,h;if(s&&(u.duration=t[1]),u.parent=n,e){for(c=u,h=n;h&&!("immediateRender"in c);)c=h.vars.defaults||{},h=ci(h.vars.inherit)&&h.parent;u.immediateRender=ci(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[a-1]}return new cn(t[0],u,t[a+1])},Gs=function(e,t){return e||e===0?t(e):t},xu=function(e,t,n){return n<e?e:n>t?t:n},Gn=function(e,t){return!An(e)||!(t=SD.exec(e))?"":t[1]},ID=function(e,t,n){return Gs(n,function(s){return xu(e,t,s)})},Mm=[].slice,aS=function(e,t){return e&&Tr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Tr(e[0]))&&!e.nodeType&&e!==fr},UD=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(s){var a;return An(s)&&!t||aS(s,1)?(a=n).push.apply(a,Vi(s)):n.push(s)})||n},Vi=function(e,t,n){return Wt&&!t&&Wt.selector?Wt.selector(e):An(e)&&!n&&(vm||!Wa())?Mm.call((t||ig).querySelectorAll(e),0):Xn(e)?UD(e,n):aS(e)?Mm.call(e,0):e?[e]:[]},Em=function(e){return e=Vi(e)[0]||ou("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Vi(t,n.querySelectorAll?n:n===e?ou("Invalid scope")||ig.createElement("div"):e)}},lS=function(e){return e.sort(function(){return .5-Math.random()})},uS=function(e){if(rn(e))return e;var t=Tr(e)?e:{each:e},n=To(t.ease),s=t.from||0,a=parseFloat(t.base)||0,u={},c=s>0&&s<1,h=isNaN(s)||c,d=t.axis,p=s,m=s;return An(s)?p=m={center:.5,edges:.5,end:1}[s]||0:!c&&h&&(p=s[0],m=s[1]),function(_,x,E){var S=(E||t).length,y=u[S],v,R,P,b,N,L,T,U,w;if(!y){if(w=t.grid==="auto"?0:(t.grid||[1,xr])[1],!w){for(T=-1e8;T<(T=E[w++].getBoundingClientRect().left)&&w<S;);w<S&&w--}for(y=u[S]=[],v=h?Math.min(w,S)*p-.5:s%w,R=w===xr?0:h?S*m/w-.5:s/w|0,T=0,U=xr,L=0;L<S;L++)P=L%w-v,b=R-(L/w|0),y[L]=N=d?Math.abs(d==="y"?b:P):Wx(P*P+b*b),N>T&&(T=N),N<U&&(U=N);s==="random"&&lS(y),y.max=T-U,y.min=U,y.v=S=(parseFloat(t.amount)||parseFloat(t.each)*(w>S?S-1:d?d==="y"?S/w:w:Math.max(w,S/w))||0)*(s==="edges"?-1:1),y.b=S<0?a-S:a,y.u=Gn(t.amount||t.each)||0,n=n&&S<0?yS(n):n}return S=(y[_]-y.min)/y.max||0,fn(y.b+(n?n(S):S)*y.v)+y.u}},Tm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=fn(Math.round(parseFloat(n)/e)*e*t);return(s-s%1)/t+(es(n)?0:Gn(n))}},cS=function(e,t){var n=Xn(e),s,a;return!n&&Tr(e)&&(s=n=e.radius||xr,e.values?(e=Vi(e.values),(a=!es(e[0]))&&(s*=s)):e=Tm(e.increment)),Gs(t,n?rn(e)?function(u){return a=e(u),Math.abs(a-u)<=s?a:u}:function(u){for(var c=parseFloat(a?u.x:u),h=parseFloat(a?u.y:0),d=xr,p=0,m=e.length,_,x;m--;)a?(_=e[m].x-c,x=e[m].y-h,_=_*_+x*x):_=Math.abs(e[m]-c),_<d&&(d=_,p=m);return p=!s||d<=s?e[p]:u,a||p===u||es(u)?p:p+Gn(u)}:Tm(e))},fS=function(e,t,n,s){return Gs(Xn(e)?!t:n===!0?!!(n=0):!s,function(){return Xn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*s)/s})},ND=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(s){return t.reduce(function(a,u){return u(a)},s)}},OD=function(e,t){return function(n){return e(parseFloat(n))+(t||Gn(n))}},FD=function(e,t,n){return dS(e,t,0,1,n)},hS=function(e,t,n){return Gs(n,function(s){return e[~~t(s)]})},kD=function r(e,t,n){var s=t-e;return Xn(e)?hS(e,r(0,e.length),t):Gs(n,function(a){return(s+(a-e)%s)%s+e})},zD=function r(e,t,n){var s=t-e,a=s*2;return Xn(e)?hS(e,r(0,e.length-1),t):Gs(n,function(u){return u=(a+(u-e)%a)%a||0,e+(u>s?a-u:u)})},lu=function(e){for(var t=0,n="",s,a,u,c;~(s=e.indexOf("random(",t));)u=e.indexOf(")",s),c=e.charAt(s+7)==="[",a=e.substr(s+7,u-s-7).match(c?$x:_m),n+=e.substr(t,s-t)+fS(c?a:+a[0],c?0:+a[1],+a[2]||1e-5),t=u+1;return n+e.substr(t,e.length-t)},dS=function(e,t,n,s,a){var u=t-e,c=s-n;return Gs(a,function(h){return n+((h-e)/u*c||0)})},BD=function r(e,t,n,s){var a=isNaN(e+t)?0:function(x){return(1-x)*e+x*t};if(!a){var u=An(e),c={},h,d,p,m,_;if(n===!0&&(s=1)&&(n=null),u)e={p:e},t={p:t};else if(Xn(e)&&!Xn(t)){for(p=[],m=e.length,_=m-2,d=1;d<m;d++)p.push(r(e[d-1],e[d]));m--,a=function(E){E*=m;var S=Math.min(_,~~E);return p[S](E-S)},n=t}else s||(e=Ha(Xn(e)?[]:{},e));if(!p){for(h in t)ug.call(c,e,h,"get",t[h]);a=function(E){return dg(E,c)||(u?e.p:e)}}}return Gs(n,a)},Dy=function(e,t,n){var s=e.labels,a=xr,u,c,h;for(u in s)c=s[u]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(h=u,a=c);return h},bi=function(e,t,n){var s=e.vars,a=s[t],u=Wt,c=e._ctx,h,d,p;if(a)return h=s[t+"Params"],d=s.callbackScope||e,n&&Os.length&&Rf(),c&&(Wt=c),p=h?a.apply(d,h):a.call(d),Wt=u,p},Bl=function(e){return Bs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ln),e.progress()<1&&bi(e,"onInterrupt"),e},wa,pS=[],mS=function(e){if(e)if(e=!e.name&&e.default||e,ng()||e.headless){var t=e.name,n=rn(e),s=t&&!n&&e.init?function(){this._props=[]}:e,a={init:au,render:dg,add:ug,kill:nL,modifier:tL,rawVars:0},u={targetTest:0,get:0,getSetter:hg,aliases:{},register:0};if(Wa(),e!==s){if(Mi[t])return;Di(s,Di(Pf(e,a),u)),Ha(s.prototype,Ha(a,Pf(e,u))),Mi[s.prop=t]=s,e.targetTest&&(_f.push(s),sg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zx(t,s),e.register&&e.register(mi,s,hi)}else pS.push(e)},Nt=255,Hl={aqua:[0,Nt,Nt],lime:[0,Nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Nt],navy:[0,0,128],white:[Nt,Nt,Nt],olive:[128,128,0],yellow:[Nt,Nt,0],orange:[Nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Nt,0,0],pink:[Nt,192,203],cyan:[0,Nt,Nt],transparent:[Nt,Nt,Nt,0]},xp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Nt+.5|0},gS=function(e,t,n){var s=e?es(e)?[e>>16,e>>8&Nt,e&Nt]:0:Hl.black,a,u,c,h,d,p,m,_,x,E;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hl[e])s=Hl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+a+a+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Nt,s&Nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Nt,e&Nt]}else if(e.substr(0,3)==="hsl"){if(s=E=e.match(_m),!t)h=+s[0]%360/360,d=+s[1]/100,p=+s[2]/100,u=p<=.5?p*(d+1):p+d-p*d,a=p*2-u,s.length>3&&(s[3]*=1),s[0]=xp(h+1/3,a,u),s[1]=xp(h,a,u),s[2]=xp(h-1/3,a,u);else if(~e.indexOf("="))return s=e.match(jx),n&&s.length<4&&(s[3]=1),s}else s=e.match(_m)||Hl.transparent;s=s.map(Number)}return t&&!E&&(a=s[0]/Nt,u=s[1]/Nt,c=s[2]/Nt,m=Math.max(a,u,c),_=Math.min(a,u,c),p=(m+_)/2,m===_?h=d=0:(x=m-_,d=p>.5?x/(2-m-_):x/(m+_),h=m===a?(u-c)/x+(u<c?6:0):m===u?(c-a)/x+2:(a-u)/x+4,h*=60),s[0]=~~(h+.5),s[1]=~~(d*100+.5),s[2]=~~(p*100+.5)),n&&s.length<4&&(s[3]=1),s},_S=function(e){var t=[],n=[],s=-1;return e.split(Fs).forEach(function(a){var u=a.match(Ta)||[];t.push.apply(t,u),n.push(s+=u.length+1)}),t.c=n,t},Ly=function(e,t,n){var s="",a=(e+s).match(Fs),u=t?"hsla(":"rgba(",c=0,h,d,p,m;if(!a)return e;if(a=a.map(function(_){return(_=gS(_,t,1))&&u+(t?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),n&&(p=_S(e),h=n.c,h.join(s)!==p.c.join(s)))for(d=e.replace(Fs,"1").split(Ta),m=d.length-1;c<m;c++)s+=d[c]+(~h.indexOf(c)?a.shift()||u+"0,0,0,0)":(p.length?p:a.length?a:n).shift());if(!d)for(d=e.split(Fs),m=d.length-1;c<m;c++)s+=d[c]+a[c];return s+d[m]},Fs=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hl)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),HD=/hsl[a]?\(/,vS=function(e){var t=e.join(" "),n;if(Fs.lastIndex=0,Fs.test(t))return n=HD.test(t),e[1]=Ly(e[1],n),e[0]=Ly(e[0],n,_S(e[1])),!0},uu,wi=function(){var r=Date.now,e=500,t=33,n=r(),s=n,a=1e3/240,u=a,c=[],h,d,p,m,_,x,E=function S(y){var v=r()-s,R=y===!0,P,b,N,L;if((v>e||v<0)&&(n+=v-t),s+=v,N=s-n,P=N-u,(P>0||R)&&(L=++m.frame,_=N-m.time*1e3,m.time=N=N/1e3,u+=P+(P>=a?4:a-P),b=1),R||(h=d(S)),b)for(x=0;x<c.length;x++)c[x](N,_,L,y)};return m={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return _/(1e3/(y||60))},wake:function(){qx&&(!vm&&ng()&&(fr=vm=window,ig=fr.document||{},Pi.gsap=mi,(fr.gsapVersions||(fr.gsapVersions=[])).push(mi.version),Kx(Cf||fr.GreenSockGlobals||!fr.gsap&&fr||{}),pS.forEach(mS)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,h&&m.sleep(),d=p||function(y){return setTimeout(y,u-m.time*1e3+1|0)},uu=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(h),uu=0,d=au},lagSmoothing:function(y,v){e=y||1/0,t=Math.min(v||33,e)},fps:function(y){a=1e3/(y||240),u=m.time*1e3+a},add:function(y,v,R){var P=v?function(b,N,L,T){y(b,N,L,T),m.remove(P)}:y;return m.remove(y),c[R?"unshift":"push"](P),Wa(),P},remove:function(y,v){~(v=c.indexOf(y))&&c.splice(v,1)&&x>=v&&x--},_listeners:c},m}(),Wa=function(){return!uu&&wi.wake()},vt={},VD=/^[\d.\-M][\d.\-,\s]/,GD=/["']/g,WD=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),s=n[0],a=1,u=n.length,c,h,d;a<u;a++)h=n[a],c=a!==u-1?h.lastIndexOf(","):h.length,d=h.substr(0,c),t[s]=isNaN(d)?d.replace(GD,"").trim():+d,s=h.substr(c+1).trim();return t},XD=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<n?e.indexOf(")",n+1):n)},jD=function(e){var t=(e+"").split("("),n=vt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[WD(t[1])]:XD(e).split(",").map(tS)):vt._CE&&VD.test(e)?vt._CE("",e):n},yS=function(e){return function(t){return 1-e(1-t)}},xS=function r(e,t){for(var n=e._first,s;n;)n instanceof Jn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=t)),n=n._next},To=function(e,t){return e&&(rn(e)?e:vt[e]||jD(e))||t},Po=function(e,t,n,s){n===void 0&&(n=function(h){return 1-t(1-h)}),s===void 0&&(s=function(h){return h<.5?t(h*2)/2:1-t((1-h)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:s},u;return fi(e,function(c){vt[c]=Pi[c]=a,vt[u=c.toLowerCase()]=n;for(var h in a)vt[u+(h==="easeIn"?".in":h==="easeOut"?".out":".inOut")]=vt[c+"."+h]=a[h]}),a},SS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Sp=function r(e,t,n){var s=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),u=a/gm*(Math.asin(1/s)||0),c=function(p){return p===1?1:s*Math.pow(2,-10*p)*xD((p-u)*a)+1},h=e==="out"?c:e==="in"?function(d){return 1-c(1-d)}:SS(c);return a=gm/a,h.config=function(d,p){return r(e,d,p)},h},Mp=function r(e,t){t===void 0&&(t=1.70158);var n=function(u){return u?--u*u*((t+1)*u+t)+1:0},s=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:SS(n);return s.config=function(a){return r(e,a)},s};fi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Po(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;Po("Elastic",Sp("in"),Sp("out"),Sp());(function(r,e){var t=1/e,n=2*t,s=2.5*t,a=function(c){return c<t?r*c*c:c<n?r*Math.pow(c-1.5/e,2)+.75:c<s?r*(c-=2.25/e)*c+.9375:r*Math.pow(c-2.625/e,2)+.984375};Po("Bounce",function(u){return 1-a(1-u)},a)})(7.5625,2.75);Po("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Po("Circ",function(r){return-(Wx(1-r*r)-1)});Po("Sine",function(r){return r===1?1:-yD(r*_D)+1});Po("Back",Mp("in"),Mp("out"),Mp());vt.SteppedEase=vt.steps=Pi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,s=e+(t?0:1),a=t?1:0,u=1-Wn;return function(c){return((s*xu(0,u,c)|0)+a)*n}}};Ba.ease=vt["quad.out"];fi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return og+=r+","+r+"Params,"});var MS=function(e,t){this.id=vD++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jx,this.set=t?t.getSetter:hg},cu=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ga(this,+t.duration,1,1),this.data=t.data,Wt&&(this._ctx=Wt,Wt.data.push(this)),uu||wi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ga(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(Wa(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Qf(this,n),!a._dp||a.parent||rS(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Wn||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),eS(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ry(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ry(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,s):this._repeat?Va(this._tTime,a)+1:1},e.timeScale=function(n,s){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?Df(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(xu(-Math.abs(this._delay),this.totalDuration(),a),s!==!1),Zf(this),bD(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Wa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Wn&&(this._tTime-=Wn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&mr(s,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ci(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Df(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ED);var s=Ln;return Ln=n,lg(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ln=s,this},e.globalTime=function(n){for(var s=this,a=arguments.length?n:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Py(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,Py(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(Bi(this,n),ci(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,ci(s)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=s&&a<this.endTime(!0)-Wn)},e.eventCallback=function(n,s,a){var u=this.vars;return arguments.length>1?(s?(u[n]=s,a&&(u[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=s)):delete u[n],this):u[n]},e.then=function(n){var s=this;return new Promise(function(a){var u=rn(n)?n:nS,c=function(){var d=s.then;s.then=null,rn(u)&&(u=u(s))&&(u.then||u===s)&&(s.then=d),a(u),s.then=d};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?c():s._prom=c})},e.kill=function(){Bl(this)},r}();Di(cu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Jn=function(r){Gx(e,r);function e(n,s){var a;return n===void 0&&(n={}),a=r.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=ci(n.sortChildren),Kt&&mr(n.parent||Kt,Gr(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&sS(Gr(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(s,a,u){return Yl(0,arguments,this),this},t.from=function(s,a,u){return Yl(1,arguments,this),this},t.fromTo=function(s,a,u,c){return Yl(2,arguments,this),this},t.set=function(s,a,u){return a.duration=0,a.parent=this,jl(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new cn(s,a,Bi(this,u),1),this},t.call=function(s,a,u){return mr(this,cn.delayedCall(0,s,a),u)},t.staggerTo=function(s,a,u,c,h,d,p){return u.duration=a,u.stagger=u.stagger||c,u.onComplete=d,u.onCompleteParams=p,u.parent=this,new cn(s,u,Bi(this,h)),this},t.staggerFrom=function(s,a,u,c,h,d,p){return u.runBackwards=1,jl(u).immediateRender=ci(u.immediateRender),this.staggerTo(s,a,u,c,h,d,p)},t.staggerFromTo=function(s,a,u,c,h,d,p,m){return c.startAt=u,jl(c).immediateRender=ci(c.immediateRender),this.staggerTo(s,a,c,h,d,p,m)},t.render=function(s,a,u){var c=this._time,h=this._dirty?this.totalDuration():this._tDur,d=this._dur,p=s<=0?0:fn(s),m=this._zTime<0!=s<0&&(this._initted||!d),_,x,E,S,y,v,R,P,b,N,L,T;if(this!==Kt&&p>h&&s>=0&&(p=h),p!==this._tTime||u||m){if(c!==this._time&&d&&(p+=this._time-c,s+=this._time-c),_=p,b=this._start,P=this._ts,v=!P,m&&(d||(c=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(L=this._yoyo,y=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(y*100+s,a,u);if(_=fn(p%y),p===h?(S=this._repeat,_=d):(N=fn(p/y),S=~~N,S&&S===N&&(_=d,S--),_>d&&(_=d)),N=Va(this._tTime,y),!c&&this._tTime&&N!==S&&this._tTime-N*y-this._dur<=0&&(N=S),L&&S&1&&(_=d-_,T=1),S!==N&&!this._lock){var U=L&&N&1,w=U===(L&&S&1);if(S<N&&(U=!U),c=U?0:p%d?d:p,this._lock=1,this.render(c||(T?0:fn(S*y)),a,!d)._lock=0,this._tTime=p,!a&&this.parent&&bi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),c&&c!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,h=this._tDur,w&&(this._lock=2,c=U?d:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;xS(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=DD(this,fn(c),fn(_)),R&&(p-=_-(_=R._start))),this._tTime=p,this._time=_,this._act=!P,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,c=0),!c&&p&&!a&&!N&&(bi(this,"onStart"),this._tTime!==p))return this;if(_>=c&&s>=0)for(x=this._first;x;){if(E=x._next,(x._act||_>=x._start)&&x._ts&&R!==x){if(x.parent!==this)return this.render(s,a,u);if(x.render(x._ts>0?(_-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(_-x._start)*x._ts,a,u),_!==this._time||!this._ts&&!v){R=0,E&&(p+=this._zTime=-1e-8);break}}x=E}else{x=this._last;for(var A=s<0?s:_;x;){if(E=x._prev,(x._act||A<=x._end)&&x._ts&&R!==x){if(x.parent!==this)return this.render(s,a,u);if(x.render(x._ts>0?(A-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(A-x._start)*x._ts,a,u||Ln&&lg(x)),_!==this._time||!this._ts&&!v){R=0,E&&(p+=this._zTime=A?-1e-8:Wn);break}}x=E}}if(R&&!a&&(this.pause(),R.render(_>=c?0:-1e-8)._zTime=_>=c?1:-1,this._ts))return this._start=b,Zf(this),this.render(s,a,u);this._onUpdate&&!a&&bi(this,"onUpdate",!0),(p===h&&this._tTime>=this.totalDuration()||!p&&c)&&(b===this._start||Math.abs(P)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(p===h&&this._ts>0||!p&&this._ts<0)&&Bs(this,1),!a&&!(s<0&&!c)&&(p||c||!h)&&(bi(this,p===h&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<h&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,a){var u=this;if(es(a)||(a=Bi(this,a,s)),!(s instanceof cu)){if(Xn(s))return s.forEach(function(c){return u.add(c,a)}),this;if(An(s))return this.addLabel(s,a);if(rn(s))s=cn.delayedCall(0,s);else return this}return this!==s?mr(this,s,a):this},t.getChildren=function(s,a,u,c){s===void 0&&(s=!0),a===void 0&&(a=!0),u===void 0&&(u=!0),c===void 0&&(c=-1e8);for(var h=[],d=this._first;d;)d._start>=c&&(d instanceof cn?a&&h.push(d):(u&&h.push(d),s&&h.push.apply(h,d.getChildren(!0,a,u)))),d=d._next;return h},t.getById=function(s){for(var a=this.getChildren(1,1,1),u=a.length;u--;)if(a[u].vars.id===s)return a[u]},t.remove=function(s){return An(s)?this.removeLabel(s):rn(s)?this.killTweensOf(s):(s.parent===this&&Kf(this,s),s===this._recent&&(this._recent=this._last),Eo(this))},t.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=fn(wi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),r.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},t.addLabel=function(s,a){return this.labels[s]=Bi(this,a),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,a,u){var c=cn.delayedCall(0,a||au,u);return c.data="isPause",this._hasPause=1,mr(this,c,Bi(this,s))},t.removePause=function(s){var a=this._first;for(s=Bi(this,s);a;)a._start===s&&a.data==="isPause"&&Bs(a),a=a._next},t.killTweensOf=function(s,a,u){for(var c=this.getTweensOf(s,u),h=c.length;h--;)Ds!==c[h]&&c[h].kill(s,a);return this},t.getTweensOf=function(s,a){for(var u=[],c=Vi(s),h=this._first,d=es(a),p;h;)h instanceof cn?TD(h._targets,c)&&(d?(!Ds||h._initted&&h._ts)&&h.globalTime(0)<=a&&h.globalTime(h.totalDuration())>a:!a||h.isActive())&&u.push(h):(p=h.getTweensOf(c,a)).length&&u.push.apply(u,p),h=h._next;return u},t.tweenTo=function(s,a){a=a||{};var u=this,c=Bi(u,s),h=a,d=h.startAt,p=h.onStart,m=h.onStartParams,_=h.immediateRender,x,E=cn.to(u,Di({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(d&&"time"in d?d.time:u._time))/u.timeScale())||Wn,onStart:function(){if(u.pause(),!x){var y=a.duration||Math.abs((c-(d&&"time"in d?d.time:u._time))/u.timeScale());E._dur!==y&&Ga(E,y,0,1).render(E._time,!0,!0),x=1}p&&p.apply(E,m||[])}},a));return _?E.render(0):E},t.tweenFromTo=function(s,a,u){return this.tweenTo(a,Di({startAt:{time:Bi(this,s)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),Dy(this,Bi(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),Dy(this,Bi(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Wn)},t.shiftChildren=function(s,a,u){u===void 0&&(u=0);for(var c=this._first,h=this.labels,d;c;)c._start>=u&&(c._start+=s,c._end+=s),c=c._next;if(a)for(d in h)h[d]>=u&&(h[d]+=s);return Eo(this)},t.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return r.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,u;a;)u=a._next,this.remove(a),a=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Eo(this)},t.totalDuration=function(s){var a=0,u=this,c=u._last,h=xr,d,p,m;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(m=u.parent;c;)d=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>h&&u._sort&&c._ts&&!u._lock?(u._lock=1,mr(u,c,p-c._delay,1)._lock=0):h=p,p<0&&c._ts&&(a-=p,(!m&&!u._dp||m&&m.smoothChildTiming)&&(u._start+=p/u._ts,u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),h=0),c._end>a&&c._ts&&(a=c._end),c=d;Ga(u,u===Kt&&u._time>a?u._time:a,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(s){if(Kt._ts&&(eS(Kt,Df(s,Kt)),Qx=wi.frame),wi.frame>=by){by+=Ri.autoSleep||120;var a=Kt._first;if((!a||!a._ts)&&Ri.autoSleep&&wi._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||wi.sleep()}}},e}(cu);Di(Jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var YD=function(e,t,n,s,a,u,c){var h=new hi(this._pt,e,t,0,1,CS,null,a),d=0,p=0,m,_,x,E,S,y,v,R;for(h.b=n,h.e=s,n+="",s+="",(v=~s.indexOf("random("))&&(s=lu(s)),u&&(R=[n,s],u(R,e,t),n=R[0],s=R[1]),_=n.match(vp)||[];m=vp.exec(s);)E=m[0],S=s.substring(d,m.index),x?x=(x+1)%5:S.substr(-5)==="rgba("&&(x=1),E!==_[p++]&&(y=parseFloat(_[p-1])||0,h._pt={_next:h._pt,p:S||p===1?S:",",s:y,c:E.charAt(1)==="="?Da(y,E)-y:parseFloat(E)-y,m:x&&x<4?Math.round:0},d=vp.lastIndex);return h.c=d<s.length?s.substring(d,s.length):"",h.fp=c,(Yx.test(s)||v)&&(h.e=0),this._pt=h,h},ug=function(e,t,n,s,a,u,c,h,d,p){rn(s)&&(s=s(a||0,e,u));var m=e[t],_=n!=="get"?n:rn(m)?d?e[t.indexOf("set")||!rn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():m,x=rn(m)?d?QD:AS:fg,E;if(An(s)&&(~s.indexOf("random(")&&(s=lu(s)),s.charAt(1)==="="&&(E=Da(_,s)+(Gn(_)||0),(E||E===0)&&(s=E))),!p||_!==s||wm)return!isNaN(_*s)&&s!==""?(E=new hi(this._pt,e,t,+_||0,s-(_||0),typeof m=="boolean"?eL:bS,0,x),d&&(E.fp=d),c&&E.modifier(c,this,e),this._pt=E):(!m&&!(t in e)&&rg(t,s),YD.call(this,e,t,_,s,x,h||Ri.stringFilter,d))},$D=function(e,t,n,s,a){if(rn(e)&&(e=$l(e,a,t,n,s)),!Tr(e)||e.style&&e.nodeType||Xn(e)||Xx(e))return An(e)?$l(e,a,t,n,s):e;var u={},c;for(c in e)u[c]=$l(e[c],a,t,n,s);return u},ES=function(e,t,n,s,a,u){var c,h,d,p;if(Mi[e]&&(c=new Mi[e]).init(a,c.rawVars?t[e]:$D(t[e],s,a,u,n),n,s,u)!==!1&&(n._pt=h=new hi(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==wa))for(d=n._ptLookup[n._targets.indexOf(a)],p=c._props.length;p--;)d[c._props[p]]=h;return c},Ds,wm,cg=function r(e,t,n){var s=e.vars,a=s.ease,u=s.startAt,c=s.immediateRender,h=s.lazy,d=s.onUpdate,p=s.runBackwards,m=s.yoyoEase,_=s.keyframes,x=s.autoRevert,E=e._dur,S=e._startAt,y=e._targets,v=e.parent,R=v&&v.data==="nested"?v.vars.targets:y,P=e._overwrite==="auto"&&!eg,b=e.timeline,N,L,T,U,w,A,k,$,j,re,ae,K,ce;if(b&&(!_||!a)&&(a="none"),e._ease=To(a,Ba.ease),e._yEase=m?yS(To(m===!0?a:m,Ba.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!b&&!!s.runBackwards,!b||_&&!s.stagger){if($=y[0]?Mo(y[0]).harness:0,K=$&&s[$.prop],N=Pf(s,sg),S&&(S._zTime<0&&S.progress(1),t<0&&p&&c&&!x?S.render(-1,!0):S.revert(p&&E?gf:MD),S._lazy=0),u){if(Bs(e._startAt=cn.set(y,Di({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!S&&ci(h),startAt:null,delay:0,onUpdate:d&&function(){return bi(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ln||!c&&!x)&&e._startAt.revert(gf),c&&E&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&E&&!S){if(t&&(c=!1),T=Di({overwrite:!1,data:"isFromStart",lazy:c&&!S&&ci(h),immediateRender:c,stagger:0,parent:v},N),K&&(T[$.prop]=K),Bs(e._startAt=cn.set(y,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ln?e._startAt.revert(gf):e._startAt.render(-1,!0)),e._zTime=t,!c)r(e._startAt,Wn,Wn);else if(!t)return}for(e._pt=e._ptCache=0,h=E&&ci(h)||h&&!E,L=0;L<y.length;L++){if(w=y[L],k=w._gsap||ag(y)[L]._gsap,e._ptLookup[L]=re={},ym[k.id]&&Os.length&&Rf(),ae=R===y?L:R.indexOf(w),$&&(j=new $).init(w,K||N,e,ae,R)!==!1&&(e._pt=U=new hi(e._pt,w,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(F){re[F]=U}),j.priority&&(A=1)),!$||K)for(T in N)Mi[T]&&(j=ES(T,N,e,ae,w,R))?j.priority&&(A=1):re[T]=U=ug.call(e,w,T,"get",N[T],ae,R,0,s.stringFilter);e._op&&e._op[L]&&e.kill(w,e._op[L]),P&&e._pt&&(Ds=e,Kt.killTweensOf(w,re,e.globalTime(t)),ce=!e.parent,Ds=0),e._pt&&h&&(ym[k.id]=1)}A&&RS(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!ce,_&&t<=0&&b.render(xr,!0,!0)},qD=function(e,t,n,s,a,u,c,h){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,m,_,x;if(!d)for(d=e._ptCache[t]=[],_=e._ptLookup,x=e._targets.length;x--;){if(p=_[x][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return wm=1,e.vars[t]="+=0",cg(e,c),wm=0,h?ou(t+" not eligible for reset"):1;d.push(p)}for(x=d.length;x--;)m=d[x],p=m._pt||m,p.s=(s||s===0)&&!a?s:p.s+(s||0)+u*p.c,p.c=n-p.s,m.e&&(m.e=on(n)+Gn(m.e)),m.b&&(m.b=p.s+Gn(m.b))},KD=function(e,t){var n=e[0]?Mo(e[0]).harness:0,s=n&&n.aliases,a,u,c,h;if(!s)return t;a=Ha({},t);for(u in s)if(u in a)for(h=s[u].split(","),c=h.length;c--;)a[h[c]]=a[u];return a},ZD=function(e,t,n,s){var a=t.ease||s||"power1.inOut",u,c;if(Xn(t))c=n[e]||(n[e]=[]),t.forEach(function(h,d){return c.push({t:d/(t.length-1)*100,v:h,e:a})});else for(u in t)c=n[u]||(n[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:a})},$l=function(e,t,n,s,a){return rn(e)?e.call(t,n,s,a):An(e)&&~e.indexOf("random(")?lu(e):e},TS=og+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",wS={};fi(TS+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return wS[r]=1});var cn=function(r){Gx(e,r);function e(n,s,a,u){var c;typeof s=="number"&&(a.duration=s,s=a,a=null),c=r.call(this,u?s:jl(s))||this;var h=c.vars,d=h.duration,p=h.delay,m=h.immediateRender,_=h.stagger,x=h.overwrite,E=h.keyframes,S=h.defaults,y=h.scrollTrigger,v=h.yoyoEase,R=s.parent||Kt,P=(Xn(n)||Xx(n)?es(n[0]):"length"in s)?[n]:Vi(n),b,N,L,T,U,w,A,k;if(c._targets=P.length?ag(P):ou("GSAP target "+n+" not found. https://gsap.com",!Ri.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=x,E||_||rf(d)||rf(p)){if(s=c.vars,b=c.timeline=new Jn({data:"nested",defaults:S||{},targets:R&&R.data==="nested"?R.vars.targets:P}),b.kill(),b.parent=b._dp=Gr(c),b._start=0,_||rf(d)||rf(p)){if(T=P.length,A=_&&uS(_),Tr(_))for(U in _)~TS.indexOf(U)&&(k||(k={}),k[U]=_[U]);for(N=0;N<T;N++)L=Pf(s,wS),L.stagger=0,v&&(L.yoyoEase=v),k&&Ha(L,k),w=P[N],L.duration=+$l(d,Gr(c),N,w,P),L.delay=(+$l(p,Gr(c),N,w,P)||0)-c._delay,!_&&T===1&&L.delay&&(c._delay=p=L.delay,c._start+=p,L.delay=0),b.to(w,L,A?A(N,w,P):0),b._ease=vt.none;b.duration()?d=p=0:c.timeline=0}else if(E){jl(Di(b.vars.defaults,{ease:"none"})),b._ease=To(E.ease||s.ease||"none");var $=0,j,re,ae;if(Xn(E))E.forEach(function(K){return b.to(P,K,">")}),b.duration();else{L={};for(U in E)U==="ease"||U==="easeEach"||ZD(U,E[U],L,E.easeEach);for(U in L)for(j=L[U].sort(function(K,ce){return K.t-ce.t}),$=0,N=0;N<j.length;N++)re=j[N],ae={ease:re.e,duration:(re.t-(N?j[N-1].t:0))/100*d},ae[U]=re.v,b.to(P,ae,$),$+=ae.duration;b.duration()<d&&b.to({},{duration:d-b.duration()})}}d||c.duration(d=b.duration())}else c.timeline=0;return x===!0&&!eg&&(Ds=Gr(c),Kt.killTweensOf(P),Ds=0),mr(R,Gr(c),a),s.reversed&&c.reverse(),s.paused&&c.paused(!0),(m||!d&&!E&&c._start===fn(R._time)&&ci(m)&&CD(Gr(c))&&R.data!=="nested")&&(c._tTime=-1e-8,c.render(Math.max(0,-p)||0)),y&&sS(Gr(c),y),c}var t=e.prototype;return t.render=function(s,a,u){var c=this._time,h=this._tDur,d=this._dur,p=s<0,m=s>h-Wn&&!p?h:s<Wn?0:s,_,x,E,S,y,v,R,P,b;if(!d)PD(this,s,a,u);else if(m!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(_=m,P=this.timeline,this._repeat){if(S=d+this._rDelay,this._repeat<-1&&p)return this.totalTime(S*100+s,a,u);if(_=fn(m%S),m===h?(E=this._repeat,_=d):(y=fn(m/S),E=~~y,E&&E===y?(_=d,E--):_>d&&(_=d)),v=this._yoyo&&E&1,v&&(b=this._yEase,_=d-_),y=Va(this._tTime,S),_===c&&!u&&this._initted&&E===y)return this._tTime=m,this;E!==y&&(P&&this._yEase&&xS(P,v),this.vars.repeatRefresh&&!v&&!this._lock&&_!==S&&this._initted&&(this._lock=u=1,this.render(fn(S*E),!0).invalidate()._lock=0))}if(!this._initted){if(oS(this,p?s:_,u,a,m))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&E!==y))return this;if(d!==this._dur)return this.render(s,a,u)}if(this._tTime=m,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=R=(b||this._ease)(_/d),this._from&&(this.ratio=R=1-R),!c&&m&&!a&&!y&&(bi(this,"onStart"),this._tTime!==m))return this;for(x=this._pt;x;)x.r(R,x.d),x=x._next;P&&P.render(s<0?s:P._dur*P._ease(_/this._dur),a,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(p&&xm(this,s,a,u),bi(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!a&&this.parent&&bi(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(p&&!this._onUpdate&&xm(this,s,!0,!0),(s||!d)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&Bs(this,1),!a&&!(p&&!c)&&(m||c||v)&&(bi(this,m===h?"onComplete":"onReverseComplete",!0),this._prom&&!(m<h&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),r.prototype.invalidate.call(this,s)},t.resetTo=function(s,a,u,c,h){uu||wi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||cg(this,d),p=this._ease(d/this._dur),qD(this,s,a,u,c,p,d,h)?this.resetTo(s,a,u,c,1):(Qf(this,0),this.parent||iS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Bl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ln),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,Ds&&Ds.vars.overwrite!==!0)._first||Bl(this),this.parent&&u!==this.timeline.totalDuration()&&Ga(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,h=s?Vi(s):c,d=this._ptLookup,p=this._pt,m,_,x,E,S,y,v;if((!a||a==="all")&&AD(c,h))return a==="all"&&(this._pt=0),Bl(this);for(m=this._op=this._op||[],a!=="all"&&(An(a)&&(S={},fi(a,function(R){return S[R]=1}),a=S),a=KD(c,a)),v=c.length;v--;)if(~h.indexOf(c[v])){_=d[v],a==="all"?(m[v]=a,E=_,x={}):(x=m[v]=m[v]||{},E=a);for(S in E)y=_&&_[S],y&&((!("kill"in y.d)||y.d.kill(S)===!0)&&Kf(this,y,"_pt"),delete _[S]),x!=="all"&&(x[S]=1)}return this._initted&&!this._pt&&p&&Bl(this),this},e.to=function(s,a){return new e(s,a,arguments[2])},e.from=function(s,a){return Yl(1,arguments)},e.delayedCall=function(s,a,u,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(s,a,u){return Yl(2,arguments)},e.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(s,a)},e.killTweensOf=function(s,a,u){return Kt.killTweensOf(s,a,u)},e}(cu);Di(cn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fi("staggerTo,staggerFrom,staggerFromTo",function(r){cn[r]=function(){var e=new Jn,t=Mm.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var fg=function(e,t,n){return e[t]=n},AS=function(e,t,n){return e[t](n)},QD=function(e,t,n,s){return e[t](s.fp,n)},JD=function(e,t,n){return e.setAttribute(t,n)},hg=function(e,t){return rn(e[t])?AS:tg(e[t])&&e.setAttribute?JD:fg},bS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},eL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},CS=function(e,t){var n=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=t.c}t.set(t.t,t.p,s,t)},dg=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},tL=function(e,t,n,s){for(var a=this._pt,u;a;)u=a._next,a.p===s&&a.modifier(e,t,n),a=u},nL=function(e){for(var t=this._pt,n,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Kf(this,t,"_pt"):t.dep||(n=1),t=s;return!n},iL=function(e,t,n,s){s.mSet(e,t,s.m.call(s.tween,n,s.mt),s)},RS=function(e){for(var t=e._pt,n,s,a,u;t;){for(n=t._next,s=a;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:u)?t._prev._next=t:a=t,(t._next=s)?s._prev=t:u=t,t=n}e._pt=a},hi=function(){function r(t,n,s,a,u,c,h,d,p){this.t=n,this.s=a,this.c=u,this.p=s,this.r=c||bS,this.d=h||this,this.set=d||fg,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,s,a){this.mSet=this.mSet||this.set,this.set=iL,this.m=n,this.mt=a,this.tween=s},r}();fi(og+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return sg[r]=1});Pi.TweenMax=Pi.TweenLite=cn;Pi.TimelineLite=Pi.TimelineMax=Jn;Kt=new Jn({sortChildren:!1,defaults:Ba,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ri.stringFilter=vS;var wo=[],vf={},rL=[],Iy=0,sL=0,Ep=function(e){return(vf[e]||rL).map(function(t){return t()})},Am=function(){var e=Date.now(),t=[];e-Iy>2&&(Ep("matchMediaInit"),wo.forEach(function(n){var s=n.queries,a=n.conditions,u,c,h,d;for(c in s)u=fr.matchMedia(s[c]).matches,u&&(h=1),u!==a[c]&&(a[c]=u,d=1);d&&(n.revert(),h&&t.push(n))}),Ep("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),Iy=e,Ep("matchMedia"))},PS=function(){function r(t,n){this.selector=n&&Em(n),this.data=[],this._r=[],this.isReverted=!1,this.id=sL++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,s,a){rn(n)&&(a=s,s=n,n=rn);var u=this,c=function(){var d=Wt,p=u.selector,m;return d&&d!==u&&d.data.push(u),a&&(u.selector=Em(a)),Wt=u,m=s.apply(u,arguments),rn(m)&&u._r.push(m),Wt=d,u.selector=p,u.isReverted=!1,m};return u.last=c,n===rn?c(u,function(h){return u.add(null,h)}):n?u[n]=c:c},e.ignore=function(n){var s=Wt;Wt=null,n(this),Wt=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof r?n.push.apply(n,s.getTweens()):s instanceof cn&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var a=this;if(n?function(){for(var c=a.getTweens(),h=a.data.length,d;h--;)d=a.data[h],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,m){return m.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),h=a.data.length;h--;)d=a.data[h],d instanceof Jn?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof cn)&&d.revert&&d.revert(n);a._r.forEach(function(p){return p(n,a)}),a.isReverted=!0}():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),s)for(var u=wo.length;u--;)wo[u].id===this.id&&wo.splice(u,1)},e.revert=function(n){this.kill(n||{})},r}(),oL=function(){function r(t){this.contexts=[],this.scope=t,Wt&&Wt.data.push(this)}var e=r.prototype;return e.add=function(n,s,a){Tr(n)||(n={matches:n});var u=new PS(0,a||this.scope),c=u.conditions={},h,d,p;Wt&&!u.selector&&(u.selector=Wt.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=n;for(d in n)d==="all"?p=1:(h=fr.matchMedia(n[d]),h&&(wo.indexOf(u)<0&&wo.push(u),(c[d]=h.matches)&&(p=1),h.addListener?h.addListener(Am):h.addEventListener("change",Am)));return p&&s(u,function(m){return u.add(null,m)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},r}(),Lf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(s){return mS(s)})},timeline:function(e){return new Jn(e)},getTweensOf:function(e,t){return Kt.getTweensOf(e,t)},getProperty:function(e,t,n,s){An(e)&&(e=Vi(e)[0]);var a=Mo(e||{}).get,u=n?nS:tS;return n==="native"&&(n=""),e&&(t?u((Mi[t]&&Mi[t].get||a)(e,t,n,s)):function(c,h,d){return u((Mi[c]&&Mi[c].get||a)(e,c,h,d))})},quickSetter:function(e,t,n){if(e=Vi(e),e.length>1){var s=e.map(function(p){return mi.quickSetter(p,t,n)}),a=s.length;return function(p){for(var m=a;m--;)s[m](p)}}e=e[0]||{};var u=Mi[t],c=Mo(e),h=c.harness&&(c.harness.aliases||{})[t]||t,d=u?function(p){var m=new u;wa._pt=0,m.init(e,n?p+n:p,wa,0,[e]),m.render(1,m),wa._pt&&dg(1,wa)}:c.set(e,h);return u?d:function(p){return d(e,h,n?p+n:p,c,1)}},quickTo:function(e,t,n){var s,a=mi.to(e,Di((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),n||{})),u=function(h,d,p){return a.resetTo(t,h,d,p)};return u.tween=a,u},isTweening:function(e){return Kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=To(e.ease,Ba.ease)),Cy(Ba,e||{})},config:function(e){return Cy(Ri,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,s=e.plugins,a=e.defaults,u=e.extendTimeline;(s||"").split(",").forEach(function(c){return c&&!Mi[c]&&!Pi[c]&&ou(t+" effect requires "+c+" plugin.")}),yp[t]=function(c,h,d){return n(Vi(c),Di(h||{},a),d)},u&&(Jn.prototype[t]=function(c,h,d){return this.add(yp[t](c,Tr(h)?h:(d=h)&&{},this),d)})},registerEase:function(e,t){vt[e]=To(t)},parseEase:function(e,t){return arguments.length?To(e,t):vt},getById:function(e){return Kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Jn(e),s,a;for(n.smoothChildTiming=ci(e.smoothChildTiming),Kt.remove(n),n._dp=0,n._time=n._tTime=Kt._time,s=Kt._first;s;)a=s._next,(t||!(!s._dur&&s instanceof cn&&s.vars.onComplete===s._targets[0]))&&mr(n,s,s._start-s._delay),s=a;return mr(Kt,n,0),n},context:function(e,t){return e?new PS(e,t):Wt},matchMedia:function(e){return new oL(e)},matchMediaRefresh:function(){return wo.forEach(function(e){var t=e.conditions,n,s;for(s in t)t[s]&&(t[s]=!1,n=1);n&&e.revert()})||Am()},addEventListener:function(e,t){var n=vf[e]||(vf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=vf[e],s=n&&n.indexOf(t);s>=0&&n.splice(s,1)},utils:{wrap:kD,wrapYoyo:zD,distribute:uS,random:fS,snap:cS,normalize:FD,getUnit:Gn,clamp:ID,splitColor:gS,toArray:Vi,selector:Em,mapRange:dS,pipe:ND,unitize:OD,interpolate:BD,shuffle:lS},install:Kx,effects:yp,ticker:wi,updateRoot:Jn.updateRoot,plugins:Mi,globalTimeline:Kt,core:{PropTween:hi,globals:Zx,Tween:cn,Timeline:Jn,Animation:cu,getCache:Mo,_removeLinkedListItem:Kf,reverting:function(){return Ln},context:function(e){return e&&Wt&&(Wt.data.push(e),e._ctx=Wt),Wt},suppressOverwrites:function(e){return eg=e}}};fi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Lf[r]=cn[r]});wi.add(Jn.updateRoot);wa=Lf.to({},{duration:0});var aL=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},lL=function(e,t){var n=e._targets,s,a,u;for(s in t)for(a=n.length;a--;)u=e._ptLookup[a][s],u&&(u=u.d)&&(u._pt&&(u=aL(u,s)),u&&u.modifier&&u.modifier(t[s],e,n[a],s))},Tp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,a,u){u._onInit=function(c){var h,d;if(An(a)&&(h={},fi(a,function(p){return h[p]=1}),a=h),t){h={};for(d in a)h[d]=t(a[d]);a=h}lL(c,a)}}}},mi=Lf.registerPlugin({name:"attr",init:function(e,t,n,s,a){var u,c,h;this.tween=n;for(u in t)h=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(h||0)+"",t[u],s,a,0,0,u),c.op=u,c.b=h,this._props.push(u)},render:function(e,t){for(var n=t._pt;n;)Ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Tp("roundProps",Tm),Tp("modifiers"),Tp("snap",cS))||Lf;cn.version=Jn.version=mi.version="3.13.0";qx=1;ng()&&Wa();vt.Power0;vt.Power1;vt.Power2;vt.Power3;vt.Power4;vt.Linear;vt.Quad;vt.Cubic;vt.Quart;vt.Quint;vt.Strong;vt.Elastic;vt.Back;vt.SteppedEase;vt.Bounce;vt.Sine;vt.Expo;vt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Uy,Ls,La,pg,So,Ny,mg,uL=function(){return typeof window<"u"},ts={},mo=180/Math.PI,Ia=Math.PI/180,xa=Math.atan2,Oy=1e8,gg=/([A-Z])/g,cL=/(left|right|width|margin|padding|x)/i,fL=/[\s,\(]\S/,_r={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},pL=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},DS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},LS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},mL=function(e,t,n){return e.style[t]=n},gL=function(e,t,n){return e.style.setProperty(t,n)},_L=function(e,t,n){return e._gsap[t]=n},vL=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},yL=function(e,t,n,s,a){var u=e._gsap;u.scaleX=u.scaleY=n,u.renderTransform(a,u)},xL=function(e,t,n,s,a){var u=e._gsap;u[t]=n,u.renderTransform(a,u)},Zt="transform",di=Zt+"Origin",SL=function r(e,t){var n=this,s=this.target,a=s.style,u=s._gsap;if(e in ts&&a){if(this.tfm=this.tfm||{},e!=="transform")e=_r[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=Xr(s,c)}):this.tfm[e]=u.x?u[e]:Xr(s,e),e===di&&(this.tfm.zOrigin=u.zOrigin);else return _r.transform.split(",").forEach(function(c){return r.call(n,c,t)});if(this.props.indexOf(Zt)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(di,t,"")),e=Zt}(a||t)&&this.props.push(e,t,a[e])},IS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ML=function(){var e=this.props,t=this.target,n=t.style,s=t._gsap,a,u;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(gg,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=mg(),(!a||!a.isStart)&&!n[Zt]&&(IS(n),s.zOrigin&&n[di]&&(n[di]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},US=function(e,t){var n={target:e,props:[],revert:ML,save:SL};return e._gsap||mi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return n.save(s)}),n},NS,Cm=function(e,t){var n=Ls.createElementNS?Ls.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ls.createElement(e);return n&&n.style?n:Ls.createElement(e)},Gi=function r(e,t,n){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(gg,"-$1").toLowerCase())||s.getPropertyValue(t)||!n&&r(e,Xa(t)||t,1)||""},Fy="O,Moz,ms,Ms,Webkit".split(","),Xa=function(e,t,n){var s=t||So,a=s.style,u=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(Fy[u]+e in a););return u<0?null:(u===3?"ms":u>=0?Fy[u]:"")+e},Rm=function(){uL()&&window.document&&(Uy=window,Ls=Uy.document,La=Ls.documentElement,So=Cm("div")||{style:{}},Cm("div"),Zt=Xa(Zt),di=Zt+"Origin",So.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",NS=!!Xa("perspective"),mg=mi.core.reverting,pg=1)},ky=function(e){var t=e.ownerSVGElement,n=Cm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),a;s.style.display="block",n.appendChild(s),La.appendChild(n);try{a=s.getBBox()}catch{}return n.removeChild(s),La.removeChild(n),a},zy=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},OS=function(e){var t,n;try{t=e.getBBox()}catch{t=ky(e),n=1}return t&&(t.width||t.height)||n||(t=ky(e)),t&&!t.width&&!t.x&&!t.y?{x:+zy(e,["x","cx","x1"])||0,y:+zy(e,["y","cy","y1"])||0,width:0,height:0}:t},FS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&OS(e))},Co=function(e,t){if(t){var n=e.style,s;t in ts&&t!==di&&(t=Zt),n.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(s==="--"?t:t.replace(gg,"-$1").toLowerCase())):n.removeAttribute(t)}},Is=function(e,t,n,s,a,u){var c=new hi(e._pt,t,n,0,1,u?LS:DS);return e._pt=c,c.b=s,c.e=a,e._props.push(n),c},By={deg:1,rad:1,turn:1},EL={grid:1,flex:1},Hs=function r(e,t,n,s){var a=parseFloat(n)||0,u=(n+"").trim().substr((a+"").length)||"px",c=So.style,h=cL.test(t),d=e.tagName.toLowerCase()==="svg",p=(d?"client":"offset")+(h?"Width":"Height"),m=100,_=s==="px",x=s==="%",E,S,y,v;if(s===u||!a||By[s]||By[u])return a;if(u!=="px"&&!_&&(a=r(e,t,n,"px")),v=e.getCTM&&FS(e),(x||u==="%")&&(ts[t]||~t.indexOf("adius")))return E=v?e.getBBox()[h?"width":"height"]:e[p],on(x?a/E*m:a/100*E);if(c[h?"width":"height"]=m+(_?u:s),S=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!d?e:e.parentNode,v&&(S=(e.ownerSVGElement||{}).parentNode),(!S||S===Ls||!S.appendChild)&&(S=Ls.body),y=S._gsap,y&&x&&y.width&&h&&y.time===wi.time&&!y.uncache)return on(a/y.width*m);if(x&&(t==="height"||t==="width")){var R=e.style[t];e.style[t]=m+s,E=e[p],R?e.style[t]=R:Co(e,t)}else(x||u==="%")&&!EL[Gi(S,"display")]&&(c.position=Gi(e,"position")),S===e&&(c.position="static"),S.appendChild(So),E=So[p],S.removeChild(So),c.position="absolute";return h&&x&&(y=Mo(S),y.time=wi.time,y.width=S[p]),on(_?E*a/m:E&&a?m/E*a:0)},Xr=function(e,t,n,s){var a;return pg||Rm(),t in _r&&t!=="transform"&&(t=_r[t],~t.indexOf(",")&&(t=t.split(",")[0])),ts[t]&&t!=="transform"?(a=hu(e,s),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:Uf(Gi(e,di))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=If[t]&&If[t](e,t,n)||Gi(e,t)||Jx(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?Hs(e,t,a,n)+n:a},TL=function(e,t,n,s){if(!n||n==="none"){var a=Xa(t,e,1),u=a&&Gi(e,a,1);u&&u!==n?(t=a,n=u):t==="borderColor"&&(n=Gi(e,"borderTopColor"))}var c=new hi(this._pt,e.style,t,0,1,CS),h=0,d=0,p,m,_,x,E,S,y,v,R,P,b,N;if(c.b=n,c.e=s,n+="",s+="",s.substring(0,6)==="var(--"&&(s=Gi(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(S=e.style[t],e.style[t]=s,s=Gi(e,t)||s,S?e.style[t]=S:Co(e,t)),p=[n,s],vS(p),n=p[0],s=p[1],_=n.match(Ta)||[],N=s.match(Ta)||[],N.length){for(;m=Ta.exec(s);)y=m[0],R=s.substring(h,m.index),E?E=(E+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(E=1),y!==(S=_[d++]||"")&&(x=parseFloat(S)||0,b=S.substr((x+"").length),y.charAt(1)==="="&&(y=Da(x,y)+b),v=parseFloat(y),P=y.substr((v+"").length),h=Ta.lastIndex-P.length,P||(P=P||Ri.units[t]||b,h===s.length&&(s+=P,c.e+=P)),b!==P&&(x=Hs(e,t,S,P)||0),c._pt={_next:c._pt,p:R||d===1?R:",",s:x,c:v-x,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=h<s.length?s.substring(h,s.length):""}else c.r=t==="display"&&s==="none"?LS:DS;return Yx.test(s)&&(c.e=0),this._pt=c,c},Hy={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},wL=function(e){var t=e.split(" "),n=t[0],s=t[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),t[0]=Hy[n]||n,t[1]=Hy[s]||s,t.join(" ")},AL=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,s=n.style,a=t.u,u=n._gsap,c,h,d;if(a==="all"||a===!0)s.cssText="",h=1;else for(a=a.split(","),d=a.length;--d>-1;)c=a[d],ts[c]&&(h=1,c=c==="transformOrigin"?di:Zt),Co(n,c);h&&(Co(n,Zt),u&&(u.svg&&n.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",hu(n,1),u.uncache=1,IS(s)))}},If={clearProps:function(e,t,n,s,a){if(a.data!=="isFromStart"){var u=e._pt=new hi(e._pt,t,n,0,0,AL);return u.u=s,u.pr=-10,u.tween=a,e._props.push(n),1}}},fu=[1,0,0,1,0,0],kS={},zS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Vy=function(e){var t=Gi(e,Zt);return zS(t)?fu:t.substr(7).match(jx).map(on)},_g=function(e,t){var n=e._gsap||Mo(e),s=e.style,a=Vy(e),u,c,h,d;return n.svg&&e.getAttribute("transform")?(h=e.transform.baseVal.consolidate().matrix,a=[h.a,h.b,h.c,h.d,h.e,h.f],a.join(",")==="1,0,0,1,0,0"?fu:a):(a===fu&&!e.offsetParent&&e!==La&&!n.svg&&(h=s.display,s.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,c=e.nextElementSibling,La.appendChild(e)),a=Vy(e),h?s.display=h:Co(e,"display"),d&&(c?u.insertBefore(e,c):u?u.appendChild(e):La.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Pm=function(e,t,n,s,a,u){var c=e._gsap,h=a||_g(e,!0),d=c.xOrigin||0,p=c.yOrigin||0,m=c.xOffset||0,_=c.yOffset||0,x=h[0],E=h[1],S=h[2],y=h[3],v=h[4],R=h[5],P=t.split(" "),b=parseFloat(P[0])||0,N=parseFloat(P[1])||0,L,T,U,w;n?h!==fu&&(T=x*y-E*S)&&(U=b*(y/T)+N*(-S/T)+(S*R-y*v)/T,w=b*(-E/T)+N*(x/T)-(x*R-E*v)/T,b=U,N=w):(L=OS(e),b=L.x+(~P[0].indexOf("%")?b/100*L.width:b),N=L.y+(~(P[1]||P[0]).indexOf("%")?N/100*L.height:N)),s||s!==!1&&c.smooth?(v=b-d,R=N-p,c.xOffset=m+(v*x+R*S)-v,c.yOffset=_+(v*E+R*y)-R):c.xOffset=c.yOffset=0,c.xOrigin=b,c.yOrigin=N,c.smooth=!!s,c.origin=t,c.originIsAbsolute=!!n,e.style[di]="0px 0px",u&&(Is(u,c,"xOrigin",d,b),Is(u,c,"yOrigin",p,N),Is(u,c,"xOffset",m,c.xOffset),Is(u,c,"yOffset",_,c.yOffset)),e.setAttribute("data-svg-origin",b+" "+N)},hu=function(e,t){var n=e._gsap||new MS(e);if("x"in n&&!t&&!n.uncache)return n;var s=e.style,a=n.scaleX<0,u="px",c="deg",h=getComputedStyle(e),d=Gi(e,di)||"0",p,m,_,x,E,S,y,v,R,P,b,N,L,T,U,w,A,k,$,j,re,ae,K,ce,F,se,Z,B,te,we,Q,ue;return p=m=_=S=y=v=R=P=b=0,x=E=1,n.svg=!!(e.getCTM&&FS(e)),h.translate&&((h.translate!=="none"||h.scale!=="none"||h.rotate!=="none")&&(s[Zt]=(h.translate!=="none"?"translate3d("+(h.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(h.rotate!=="none"?"rotate("+h.rotate+") ":"")+(h.scale!=="none"?"scale("+h.scale.split(" ").join(",")+") ":"")+(h[Zt]!=="none"?h[Zt]:"")),s.scale=s.rotate=s.translate="none"),T=_g(e,n.svg),n.svg&&(n.uncache?(F=e.getBBox(),d=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",ce=""):ce=!t&&e.getAttribute("data-svg-origin"),Pm(e,ce||d,!!ce||n.originIsAbsolute,n.smooth!==!1,T)),N=n.xOrigin||0,L=n.yOrigin||0,T!==fu&&(k=T[0],$=T[1],j=T[2],re=T[3],p=ae=T[4],m=K=T[5],T.length===6?(x=Math.sqrt(k*k+$*$),E=Math.sqrt(re*re+j*j),S=k||$?xa($,k)*mo:0,R=j||re?xa(j,re)*mo+S:0,R&&(E*=Math.abs(Math.cos(R*Ia))),n.svg&&(p-=N-(N*k+L*j),m-=L-(N*$+L*re))):(ue=T[6],we=T[7],Z=T[8],B=T[9],te=T[10],Q=T[11],p=T[12],m=T[13],_=T[14],U=xa(ue,te),y=U*mo,U&&(w=Math.cos(-U),A=Math.sin(-U),ce=ae*w+Z*A,F=K*w+B*A,se=ue*w+te*A,Z=ae*-A+Z*w,B=K*-A+B*w,te=ue*-A+te*w,Q=we*-A+Q*w,ae=ce,K=F,ue=se),U=xa(-j,te),v=U*mo,U&&(w=Math.cos(-U),A=Math.sin(-U),ce=k*w-Z*A,F=$*w-B*A,se=j*w-te*A,Q=re*A+Q*w,k=ce,$=F,j=se),U=xa($,k),S=U*mo,U&&(w=Math.cos(U),A=Math.sin(U),ce=k*w+$*A,F=ae*w+K*A,$=$*w-k*A,K=K*w-ae*A,k=ce,ae=F),y&&Math.abs(y)+Math.abs(S)>359.9&&(y=S=0,v=180-v),x=on(Math.sqrt(k*k+$*$+j*j)),E=on(Math.sqrt(K*K+ue*ue)),U=xa(ae,K),R=Math.abs(U)>2e-4?U*mo:0,b=Q?1/(Q<0?-Q:Q):0),n.svg&&(ce=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!zS(Gi(e,Zt)),ce&&e.setAttribute("transform",ce))),Math.abs(R)>90&&Math.abs(R)<270&&(a?(x*=-1,R+=S<=0?180:-180,S+=S<=0?180:-180):(E*=-1,R+=R<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+u,n.y=m-((n.yPercent=m&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+u,n.z=_+u,n.scaleX=on(x),n.scaleY=on(E),n.rotation=on(S)+c,n.rotationX=on(y)+c,n.rotationY=on(v)+c,n.skewX=R+c,n.skewY=P+c,n.transformPerspective=b+u,(n.zOrigin=parseFloat(d.split(" ")[2])||!t&&n.zOrigin||0)&&(s[di]=Uf(d)),n.xOffset=n.yOffset=0,n.force3D=Ri.force3D,n.renderTransform=n.svg?CL:NS?BS:bL,n.uncache=0,n},Uf=function(e){return(e=e.split(" "))[0]+" "+e[1]},wp=function(e,t,n){var s=Gn(t);return on(parseFloat(t)+parseFloat(Hs(e,"x",n+"px",s)))+s},bL=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,BS(e,t)},fo="0deg",Nl="0px",ho=") ",BS=function(e,t){var n=t||this,s=n.xPercent,a=n.yPercent,u=n.x,c=n.y,h=n.z,d=n.rotation,p=n.rotationY,m=n.rotationX,_=n.skewX,x=n.skewY,E=n.scaleX,S=n.scaleY,y=n.transformPerspective,v=n.force3D,R=n.target,P=n.zOrigin,b="",N=v==="auto"&&e&&e!==1||v===!0;if(P&&(m!==fo||p!==fo)){var L=parseFloat(p)*Ia,T=Math.sin(L),U=Math.cos(L),w;L=parseFloat(m)*Ia,w=Math.cos(L),u=wp(R,u,T*w*-P),c=wp(R,c,-Math.sin(L)*-P),h=wp(R,h,U*w*-P+P)}y!==Nl&&(b+="perspective("+y+ho),(s||a)&&(b+="translate("+s+"%, "+a+"%) "),(N||u!==Nl||c!==Nl||h!==Nl)&&(b+=h!==Nl||N?"translate3d("+u+", "+c+", "+h+") ":"translate("+u+", "+c+ho),d!==fo&&(b+="rotate("+d+ho),p!==fo&&(b+="rotateY("+p+ho),m!==fo&&(b+="rotateX("+m+ho),(_!==fo||x!==fo)&&(b+="skew("+_+", "+x+ho),(E!==1||S!==1)&&(b+="scale("+E+", "+S+ho),R.style[Zt]=b||"translate(0, 0)"},CL=function(e,t){var n=t||this,s=n.xPercent,a=n.yPercent,u=n.x,c=n.y,h=n.rotation,d=n.skewX,p=n.skewY,m=n.scaleX,_=n.scaleY,x=n.target,E=n.xOrigin,S=n.yOrigin,y=n.xOffset,v=n.yOffset,R=n.forceCSS,P=parseFloat(u),b=parseFloat(c),N,L,T,U,w;h=parseFloat(h),d=parseFloat(d),p=parseFloat(p),p&&(p=parseFloat(p),d+=p,h+=p),h||d?(h*=Ia,d*=Ia,N=Math.cos(h)*m,L=Math.sin(h)*m,T=Math.sin(h-d)*-_,U=Math.cos(h-d)*_,d&&(p*=Ia,w=Math.tan(d-p),w=Math.sqrt(1+w*w),T*=w,U*=w,p&&(w=Math.tan(p),w=Math.sqrt(1+w*w),N*=w,L*=w)),N=on(N),L=on(L),T=on(T),U=on(U)):(N=m,U=_,L=T=0),(P&&!~(u+"").indexOf("px")||b&&!~(c+"").indexOf("px"))&&(P=Hs(x,"x",u,"px"),b=Hs(x,"y",c,"px")),(E||S||y||v)&&(P=on(P+E-(E*N+S*T)+y),b=on(b+S-(E*L+S*U)+v)),(s||a)&&(w=x.getBBox(),P=on(P+s/100*w.width),b=on(b+a/100*w.height)),w="matrix("+N+","+L+","+T+","+U+","+P+","+b+")",x.setAttribute("transform",w),R&&(x.style[Zt]=w)},RL=function(e,t,n,s,a){var u=360,c=An(a),h=parseFloat(a)*(c&&~a.indexOf("rad")?mo:1),d=h-s,p=s+d+"deg",m,_;return c&&(m=a.split("_")[1],m==="short"&&(d%=u,d!==d%(u/2)&&(d+=d<0?u:-360)),m==="cw"&&d<0?d=(d+u*Oy)%u-~~(d/u)*u:m==="ccw"&&d>0&&(d=(d-u*Oy)%u-~~(d/u)*u)),e._pt=_=new hi(e._pt,t,n,s,d,hL),_.e=p,_.u="deg",e._props.push(n),_},Gy=function(e,t){for(var n in t)e[n]=t[n];return e},PL=function(e,t,n){var s=Gy({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",u=n.style,c,h,d,p,m,_,x,E;s.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),u[Zt]=t,c=hu(n,1),Co(n,Zt),n.setAttribute("transform",d)):(d=getComputedStyle(n)[Zt],u[Zt]=t,c=hu(n,1),u[Zt]=d);for(h in ts)d=s[h],p=c[h],d!==p&&a.indexOf(h)<0&&(x=Gn(d),E=Gn(p),m=x!==E?Hs(n,h,d,E):parseFloat(d),_=parseFloat(p),e._pt=new hi(e._pt,c,h,m,_-m,bm),e._pt.u=E||0,e._props.push(h));Gy(c,s)};fi("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",s="Bottom",a="Left",u=(e<3?[t,n,s,a]:[t+a,t+n,s+n,s+a]).map(function(c){return e<2?r+c:"border"+c+r});If[e>1?"border"+r:r]=function(c,h,d,p,m){var _,x;if(arguments.length<4)return _=u.map(function(E){return Xr(c,E,d)}),x=_.join(" "),x.split(_[0]).length===5?_[0]:x;_=(p+"").split(" "),x={},u.forEach(function(E,S){return x[E]=_[S]=_[S]||_[(S-1)/2|0]}),c.init(h,x,m)}});var HS={name:"css",register:Rm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,s,a){var u=this._props,c=e.style,h=n.vars.startAt,d,p,m,_,x,E,S,y,v,R,P,b,N,L,T,U;pg||Rm(),this.styles=this.styles||US(e),U=this.styles.props,this.tween=n;for(S in t)if(S!=="autoRound"&&(p=t[S],!(Mi[S]&&ES(S,t,n,s,e,a)))){if(x=typeof p,E=If[S],x==="function"&&(p=p.call(n,s,e,a),x=typeof p),x==="string"&&~p.indexOf("random(")&&(p=lu(p)),E)E(this,e,S,p,n)&&(T=1);else if(S.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(S)+"").trim(),p+="",Fs.lastIndex=0,Fs.test(d)||(y=Gn(d),v=Gn(p)),v?y!==v&&(d=Hs(e,S,d,v)+v):y&&(p+=y),this.add(c,"setProperty",d,p,s,a,0,0,S),u.push(S),U.push(S,0,c[S]);else if(x!=="undefined"){if(h&&S in h?(d=typeof h[S]=="function"?h[S].call(n,s,e,a):h[S],An(d)&&~d.indexOf("random(")&&(d=lu(d)),Gn(d+"")||d==="auto"||(d+=Ri.units[S]||Gn(Xr(e,S))||""),(d+"").charAt(1)==="="&&(d=Xr(e,S))):d=Xr(e,S),_=parseFloat(d),R=x==="string"&&p.charAt(1)==="="&&p.substr(0,2),R&&(p=p.substr(2)),m=parseFloat(p),S in _r&&(S==="autoAlpha"&&(_===1&&Xr(e,"visibility")==="hidden"&&m&&(_=0),U.push("visibility",0,c.visibility),Is(this,c,"visibility",_?"inherit":"hidden",m?"inherit":"hidden",!m)),S!=="scale"&&S!=="transform"&&(S=_r[S],~S.indexOf(",")&&(S=S.split(",")[0]))),P=S in ts,P){if(this.styles.save(S),x==="string"&&p.substring(0,6)==="var(--"&&(p=Gi(e,p.substring(4,p.indexOf(")"))),m=parseFloat(p)),b||(N=e._gsap,N.renderTransform&&!t.parseTransform||hu(e,t.parseTransform),L=t.smoothOrigin!==!1&&N.smooth,b=this._pt=new hi(this._pt,c,Zt,0,1,N.renderTransform,N,0,-1),b.dep=1),S==="scale")this._pt=new hi(this._pt,N,"scaleY",N.scaleY,(R?Da(N.scaleY,R+m):m)-N.scaleY||0,bm),this._pt.u=0,u.push("scaleY",S),S+="X";else if(S==="transformOrigin"){U.push(di,0,c[di]),p=wL(p),N.svg?Pm(e,p,0,L,0,this):(v=parseFloat(p.split(" ")[2])||0,v!==N.zOrigin&&Is(this,N,"zOrigin",N.zOrigin,v),Is(this,c,S,Uf(d),Uf(p)));continue}else if(S==="svgOrigin"){Pm(e,p,1,L,0,this);continue}else if(S in kS){RL(this,N,S,_,R?Da(_,R+p):p);continue}else if(S==="smoothOrigin"){Is(this,N,"smooth",N.smooth,p);continue}else if(S==="force3D"){N[S]=p;continue}else if(S==="transform"){PL(this,p,e);continue}}else S in c||(S=Xa(S)||S);if(P||(m||m===0)&&(_||_===0)&&!fL.test(p)&&S in c)y=(d+"").substr((_+"").length),m||(m=0),v=Gn(p)||(S in Ri.units?Ri.units[S]:y),y!==v&&(_=Hs(e,S,d,v)),this._pt=new hi(this._pt,P?N:c,S,_,(R?Da(_,R+m):m)-_,!P&&(v==="px"||S==="zIndex")&&t.autoRound!==!1?pL:bm),this._pt.u=v||0,y!==v&&v!=="%"&&(this._pt.b=d,this._pt.r=dL);else if(S in c)TL.call(this,e,S,d,R?R+p:p);else if(S in e)this.add(e,S,d||e[S],R?R+p:p,s,a);else if(S!=="parseTransform"){rg(S,p);continue}P||(S in c?U.push(S,0,c[S]):typeof e[S]=="function"?U.push(S,2,e[S]()):U.push(S,1,d||e[S])),u.push(S)}}T&&RS(this)},render:function(e,t){if(t.tween._time||!mg())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Xr,aliases:_r,getSetter:function(e,t,n){var s=_r[t];return s&&s.indexOf(",")<0&&(t=s),t in ts&&t!==di&&(e._gsap.x||Xr(e,"x"))?n&&Ny===n?t==="scale"?vL:_L:(Ny=n||{})&&(t==="scale"?yL:xL):e.style&&!tg(e.style[t])?mL:~t.indexOf("-")?gL:hg(e,t)},core:{_removeProperty:Co,_getMatrix:_g}};mi.utils.checkPrefix=Xa;mi.core.getStyleSaver=US;(function(r,e,t,n){var s=fi(r+","+e+","+t,function(a){ts[a]=1});fi(e,function(a){Ri.units[a]="deg",kS[a]=1}),_r[s[13]]=r+","+e,fi(n,function(a){var u=a.split(":");_r[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ri.units[r]="px"});mi.registerPlugin(HS);var Dm=mi.registerPlugin(HS)||mi;Dm.core.Tween;class DL{constructor(){ro(this,"clock");ro(this,"animationFrameId",null);ro(this,"callbacks",[]);ro(this,"ship",null);ro(this,"birdOfPrey",null);ro(this,"targetShipPosition",new W(0,-.5,-10));this.clock=new fb}add(e){this.callbacks.push(e)}start(){const e=()=>{this.animationFrameId=requestAnimationFrame(e);const t=Math.min(this.clock.getDelta(),.1),n=this.clock.getElapsedTime();this.callbacks.forEach(s=>s(t,n))};this.clock.start(),e()}stop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}clear(){this.callbacks=[]}dispose(){this.stop(),this.clear()}setShip(e){this.ship=e}setBirdOfPrey(e){this.birdOfPrey=e,this.birdOfPrey.visible=!1}playCloakReveal(){if(!this.ship||!this.birdOfPrey)return;const e=this.targetShipPosition.clone().add(new W(0,0,-20));this.ship.position.copy(e),this.birdOfPrey.visible=!1,Dm.to(this.ship.position,{z:this.targetShipPosition.z,duration:3,ease:"sine.out",onStart:()=>{this.revealBirdOfPrey()}})}revealBirdOfPrey(){if(!this.birdOfPrey)return;const e=this.birdOfPrey;e.visible=!0,e.traverse(t=>{if(t.isMesh){const n=t.material;n.transparent=!0,n.opacity=0,Dm.to(n,{opacity:1,duration:5,ease:"power1.out",onComplete:()=>{n.transparent=!1}})}})}}function LL(){const r=Lt.useRef(null),[e,t]=Lt.useState(!0),[n,s]=Lt.useState(0),a=Lt.useRef(null),u=Lt.useRef(null),c=Lt.useRef(null),h=Lt.useRef(null),d=Lt.useRef(null),p=Lt.useRef(null),m=Lt.useRef(null),_={waterNormal:new URL(""+new URL("textures/waternormals-Dfm-ILpY.jpg",import.meta.url).href,import.meta.url).href,shipModel:new URL(""+new URL("models/ship-model-DYGB5HRT.obj",import.meta.url).href,import.meta.url).href,shipTexture:new URL(""+new URL("textures/solar_punk_pirate_shi_0617201936_texture-CBaoT2g5.png",import.meta.url).href,import.meta.url).href,islandModel:new URL(""+new URL("models/medas-C3C47lR6.obj",import.meta.url).href,import.meta.url).href,islandTexture:new URL(""+new URL("textures/medas_texture-CBqzix36.png",import.meta.url).href,import.meta.url).href},x=(y,v)=>{const b=y.x*.1,N=y.z*.1,L=v*.25,T=Math.sin(b+L*1.7)*.5,U=Math.sin(b*.5+N*1.5+L*1.3)*.3,w=Math.sin(b*2.3+N*.7+L*.3)*.2;return(T+U+w)*2.5*.5};Lt.useEffect(()=>{if(!r.current)return;const y=r.current,v=new qA;a.current=v;const R=new Ei(65,window.innerWidth/window.innerHeight,.1,2e3);R.position.set(20.67,2.31,8.87),R.lookAt(0,0,0);const P=new q2({antialias:!0});P.setSize(window.innerWidth,window.innerHeight),P.setPixelRatio(window.devicePixelRatio),P.outputEncoding=Vn,y.appendChild(P.domElement),u.current=P;const b=new Gl;y.appendChild(b.dom);const N=new vu(100,100),L=new K2(N,{textureWidth:256,textureHeight:256,waterNormals:new Xv().load(_.waterNormal,F=>{F.wrapS=F.wrapT=Sf}),sunDirection:new W,sunColor:16777215,waterColor:7695,distortionScale:2.5,fog:v.fog!==void 0});L.rotation.x=-Math.PI/2,v.add(L),p.current=L;const T=new qf;T.scale.setScalar(100),v.add(T);const U=new W;U.setFromSphericalCoords(1,Ol.degToRad(88),Ol.degToRad(180)),T.material.uniforms.sunPosition.value.copy(U),L.material.uniforms.sunDirection.value.copy(U).normalize(),v.add(new ub(16777215,.7));const w=new lb(16777215,1.2);w.position.set(0,50,100),w.castShadow=!0,v.add(w);const A=new Q2(R,P.domElement);A.target.set(0,.5,0),A.enableDamping=!0,c.current=A;const k=new DL;m.current=k;const $=new Xv,j=new gD(new Ux(()=>t(!1),(F,se,Z)=>s(se/Z*100))),re=()=>{$.load(_.islandTexture,F=>{F.colorSpace=Vn,F.anisotropy=P.capabilities.getMaxAnisotropy();const se=new lp({map:F,metalness:.1,roughness:.8});j.load(_.islandModel,Z=>{const B=new bo().setFromObject(Z),te=B.getCenter(new W);Z.position.sub(te);const we=B.getSize(new W),Q=30/Math.max(we.x,we.y,we.z);Z.scale.setScalar(Q),Z.position.set(0,3,-40),Z.traverse(ue=>{ue.isMesh&&(ue.material=se,ue.castShadow=!0,ue.receiveShadow=!0)}),d.current=Z,v.add(Z)})},void 0,F=>{console.error("Error loading island texture:",F)})};let ae;const K=()=>{j.load(_.shipModel,F=>{const se=new bo().setFromObject(F),Z=se.getCenter(new W);F.position.sub(Z);const B=se.getSize(new W),te=15/Math.max(B.x,B.y,B.z);F.scale.setScalar(te);const we=se.min.y*te;F.position.set(0,-we,0);const Q=new W().subVectors(R.position.clone().setY(0),F.position.clone().setY(0)).normalize();F.quaternion.setFromUnitVectors(new W(0,0,-1),Q),F.traverse(ue=>{ue.isMesh&&(ue.material=ae,ue.castShadow=!0,ue.receiveShadow=!0)}),h.current=F,v.add(F)})};$.load(_.shipTexture,F=>{F.colorSpace=Vn,F.anisotropy=P.capabilities.getMaxAnisotropy(),ae=new lp({map:F,metalness:.3,roughness:.7}),K()},void 0,F=>{console.error("Error loading ship texture:",F),ae=new lp({color:5592405,metalness:.3,roughness:.7}),K()}),re(),k.add((F,se)=>{if(b.begin(),L.material.uniforms.time.value+=F*.25,h.current){const Z=h.current,B=Z.position.clone().setY(0),te=R.position.clone().setY(0),we=new W().subVectors(te,B).normalize(),Q=new W(0,0,-1).applyQuaternion(Z.quaternion).setY(0).normalize(),ue=Q.angleTo(we),Se=new W().crossVectors(Q,we).normalize();if(ue>.001){const ie=new zs().setFromAxisAngle(Se,Math.min(ue*F*2,ue));Z.quaternion.multiply(ie)}const _e=3,Te=new W(0,0,-1).applyQuaternion(Z.quaternion).normalize();Z.position.addScaledVector(Te,_e*F);const Xe=.5,Be=x(Z.position,se);Z.position.y=Be-Xe;const Rt=1,Pt=Z.position.clone().add(Te.clone().multiplyScalar(Rt)),at=Z.position.clone().add(Te.clone().multiplyScalar(-1)),H=new W().crossVectors(Te,new W(0,1,0)).normalize(),bn=Z.position.clone().add(H.clone().multiplyScalar(-1)),ht=Z.position.clone().add(H.clone().multiplyScalar(Rt)),ct=x(Pt,se),je=x(at,se),wt=x(bn,se),He=x(ht,se),O=(ct-je)*.5,D=(wt-He)*.5;Z.rotation.x=Ol.lerp(Z.rotation.x,O,F*3),Z.rotation.z=Ol.lerp(Z.rotation.z,D,F*3)}A.update(),P.render(v,R),b.end()}),k.start();const ce=()=>{R.aspect=window.innerWidth/window.innerHeight,R.updateProjectionMatrix(),P.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ce),()=>{var F;k.dispose(),window.removeEventListener("resize",ce),P.dispose(),(F=r.current)!=null&&F.contains(P.domElement)&&r.current.removeChild(P.domElement)}},[]);const[E,S]=Lt.useState({x:0,y:0,z:0});return Lt.useEffect(()=>{const y=()=>{if(c.current){const v=c.current.object.position;S({x:v.x,y:v.y,z:v.z})}requestAnimationFrame(y)};y()},[]),Yr.jsxs("div",{ref:r,style:{width:"100%",height:"100%"},children:[e&&Yr.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",backgroundColor:"rgba(0,0,0,0.7)",padding:"20px",borderRadius:"5px"},children:Yr.jsxs("div",{children:["Loading model... ",Math.round(n),"%"]})}),Yr.jsxs("div",{style:{position:"absolute",bottom:"10px",left:"10px",backgroundColor:"rgba(0, 0, 0, 0.6)",color:"lime",fontFamily:"monospace",padding:"8px",borderRadius:"4px",fontSize:"12px",zIndex:1},children:["camera.position.set(",E.x.toFixed(2),",",E.y.toFixed(2),",",E.z.toFixed(2),")"]})]})}function IL(){return Yr.jsx(vw,{sx:{width:"100vw",height:"100vh"},children:Yr.jsx(LL,{})})}L1.createRoot(document.getElementById("root")).render(Yr.jsx(jy.StrictMode,{children:Yr.jsx(IL,{})}));
