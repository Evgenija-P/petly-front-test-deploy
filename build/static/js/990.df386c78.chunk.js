"use strict";(self.webpackChunkpetly_front_test_deploy=self.webpackChunkpetly_front_test_deploy||[]).push([[990],{8819:function(e,n,t){t.d(n,{Z:function(){return D}});var r=function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},r.apply(this,arguments)};function o(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}Object.create;Object.create;var a=t(2791),c="right-scroll-bar-position",i="width-before-scroll-bar";function u(e,n){return function(e,n){var t=(0,a.useState)((function(){return{value:e,callback:n,facade:{get current(){return t.value},set current(e){var n=t.value;n!==e&&(t.value=e,t.callback(e,n))}}}}))[0];return t.callback=n,t.facade}(n||null,(function(n){return e.forEach((function(e){return function(e,n){return"function"===typeof e?e(n):e&&(e.current=n),e}(e,n)}))}))}function l(e){return e}function s(e,n){void 0===n&&(n=l);var t=[],r=!1;return{read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(e){var o=n(e,r);return t.push(o),function(){t=t.filter((function(e){return e!==o}))}},assignSyncMedium:function(e){for(r=!0;t.length;){var n=t;t=[],n.forEach(e)}t={push:function(n){return e(n)},filter:function(){return t}}},assignMedium:function(e){r=!0;var n=[];if(t.length){var o=t;t=[],o.forEach(e),n=t}var a=function(){var t=n;n=[],t.forEach(e)},c=function(){return Promise.resolve().then(a)};c(),t={push:function(e){n.push(e),c()},filter:function(e){return n=n.filter(e),t}}}}}var d=function(e){void 0===e&&(e={});var n=s(null);return n.options=r({async:!0,ssr:!1},e),n}(),f=function(){},p=a.forwardRef((function(e,n){var t=a.useRef(null),c=a.useState({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:f}),i=c[0],l=c[1],s=e.forwardProps,p=e.children,v=e.className,h=e.removeScrollBar,m=e.enabled,g=e.shards,y=e.sideCar,b=e.noIsolation,w=e.inert,E=e.allowPinchZoom,O=e.as,C=void 0===O?"div":O,S=o(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),_=y,k=u([t,n]),x=r(r({},S),i);return a.createElement(a.Fragment,null,m&&a.createElement(_,{sideCar:d,removeScrollBar:h,shards:g,noIsolation:b,inert:w,setCallbacks:l,allowPinchZoom:!!E,lockRef:t}),s?a.cloneElement(a.Children.only(p),r(r({},x),{ref:k})):a.createElement(C,r({},x,{className:v,ref:k}),p))}));p.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},p.classNames={fullWidth:i,zeroRight:c};var v,h=function(e){var n=e.sideCar,t=o(e,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var c=n.read();if(!c)throw new Error("Sidecar medium not found");return a.createElement(c,r({},t))};h.isSideCarExport=!0;function m(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=v||t.nc;return n&&e.setAttribute("nonce",n),e}var g=function(){var e=0,n=null;return{add:function(t){var r,o;0==e&&(n=m())&&(o=t,(r=n).styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o)),function(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}(n)),e++},remove:function(){!--e&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},y=function(){var e=function(){var e=g();return function(n,t){a.useEffect((function(){return e.add(n),function(){e.remove()}}),[n&&t])}}();return function(n){var t=n.styles,r=n.dynamic;return e(t,r),null}},b={left:0,top:0,right:0,gap:0},w=function(e){return parseInt(e||"",10)||0},E=function(e){if(void 0===e&&(e="margin"),"undefined"===typeof window)return b;var n=function(e){var n=window.getComputedStyle(document.body),t=n["padding"===e?"paddingLeft":"marginLeft"],r=n["padding"===e?"paddingTop":"marginTop"],o=n["padding"===e?"paddingRight":"marginRight"];return[w(t),w(r),w(o)]}(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},O=y(),C=function(e,n,t,r){var o=e.left,a=e.top,u=e.right,l=e.gap;return void 0===t&&(t="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([n&&"position: relative ".concat(r,";"),"margin"===t&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(u,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===t&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(c," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(i," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(c," .").concat(c," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(i," .").concat(i," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},S=function(e){var n=e.noRelative,t=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,c=a.useMemo((function(){return E(o)}),[o]);return a.createElement(O,{styles:C(c,!n,o,t?"":"!important")})},_=!1;if("undefined"!==typeof window)try{var k=Object.defineProperty({},"passive",{get:function(){return _=!0,!0}});window.addEventListener("test",k,k),window.removeEventListener("test",k,k)}catch(V){_=!1}var x=!!_&&{passive:!1},j=function(e,n){var t=window.getComputedStyle(e);return"hidden"!==t[n]&&!(t.overflowY===t.overflowX&&!function(e){return"TEXTAREA"===e.tagName}(e)&&"visible"===t[n])},P=function(e,n){var t=n;do{if("undefined"!==typeof ShadowRoot&&t instanceof ShadowRoot&&(t=t.host),R(e,t)){var r=M(e,t);if(r[1]>r[2])return!0}t=t.parentNode}while(t&&t!==document.body);return!1},R=function(e,n){return"v"===e?function(e){return j(e,"overflowY")}(n):function(e){return j(e,"overflowX")}(n)},M=function(e,n){return"v"===e?[(t=n).scrollTop,t.scrollHeight,t.clientHeight]:function(e){return[e.scrollLeft,e.scrollWidth,e.clientWidth]}(n);var t},L=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},T=function(e){return[e.deltaX,e.deltaY]},N=function(e){return e&&"current"in e?e.current:e},A=function(e){return"\n  .block-interactivity-".concat(e," {pointer-events: none;}\n  .allow-interactivity-").concat(e," {pointer-events: all;}\n")},B=0,I=[];var W,X=(W=function(e){var n=a.useRef([]),t=a.useRef([0,0]),r=a.useRef(),o=a.useState(B++)[0],c=a.useState((function(){return y()}))[0],i=a.useRef(e);a.useEffect((function(){i.current=e}),[e]),a.useEffect((function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var n=function(e,n,t){if(t||2===arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}([e.lockRef.current],(e.shards||[]).map(N),!0).filter(Boolean);return n.forEach((function(e){return e.classList.add("allow-interactivity-".concat(o))})),function(){document.body.classList.remove("block-interactivity-".concat(o)),n.forEach((function(e){return e.classList.remove("allow-interactivity-".concat(o))}))}}}),[e.inert,e.lockRef.current,e.shards]);var u=a.useCallback((function(e,n){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var o,a=L(e),c=t.current,u="deltaX"in e?e.deltaX:c[0]-a[0],l="deltaY"in e?e.deltaY:c[1]-a[1],s=e.target,d=Math.abs(u)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=P(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=P(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(u||l)&&(r.current=o),!o)return!0;var p=r.current||o;return function(e,n,t,r,o){var a=function(e,n){return"h"===e&&"rtl"===n?-1:1}(e,window.getComputedStyle(n).direction),c=a*r,i=t.target,u=n.contains(i),l=!1,s=c>0,d=0,f=0;do{var p=M(e,i),v=p[0],h=p[1]-p[2]-a*v;(v||h)&&R(e,i)&&(d+=h,f+=v),i=i.parentNode}while(!u&&i!==document.body||u&&(n.contains(i)||n===i));return(s&&(o&&0===d||!o&&c>d)||!s&&(o&&0===f||!o&&-c>f))&&(l=!0),l}(p,n,e,"h"===p?u:l,!0)}),[]),l=a.useCallback((function(e){var t=e;if(I.length&&I[I.length-1]===c){var r="deltaY"in t?T(t):L(t),o=n.current.filter((function(e){return e.name===t.type&&e.target===t.target&&(n=e.delta,o=r,n[0]===o[0]&&n[1]===o[1]);var n,o}))[0];if(o&&o.should)t.cancelable&&t.preventDefault();else if(!o){var a=(i.current.shards||[]).map(N).filter(Boolean).filter((function(e){return e.contains(t.target)}));(a.length>0?u(t,a[0]):!i.current.noIsolation)&&t.cancelable&&t.preventDefault()}}}),[]),s=a.useCallback((function(e,t,r,o){var a={name:e,delta:t,target:r,should:o};n.current.push(a),setTimeout((function(){n.current=n.current.filter((function(e){return e!==a}))}),1)}),[]),d=a.useCallback((function(e){t.current=L(e),r.current=void 0}),[]),f=a.useCallback((function(n){s(n.type,T(n),n.target,u(n,e.lockRef.current))}),[]),p=a.useCallback((function(n){s(n.type,L(n),n.target,u(n,e.lockRef.current))}),[]);a.useEffect((function(){return I.push(c),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",l,x),document.addEventListener("touchmove",l,x),document.addEventListener("touchstart",d,x),function(){I=I.filter((function(e){return e!==c})),document.removeEventListener("wheel",l,x),document.removeEventListener("touchmove",l,x),document.removeEventListener("touchstart",d,x)}}),[]);var v=e.removeScrollBar,h=e.inert;return a.createElement(a.Fragment,null,h?a.createElement(c,{styles:A(o)}):null,v?a.createElement(S,{gapMode:"margin"}):null)},d.useMedium(W),h),Y=a.forwardRef((function(e,n){return a.createElement(p,r({},e,{ref:n,sideCar:X}))}));Y.classNames=p.classNames;var D=Y},2299:function(e,n,t){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},r.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t);var o=Object.getOwnPropertyDescriptor(n,t);o&&!("get"in o?!n.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,r,o)}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&o(n,e,t);return a(n,e),n},i=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var u=c(t(2791)),l=t(8945),s=(0,t(7074).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");n.default=function(e){var n=e.loading,t=void 0===n||n,o=e.color,a=void 0===o?"#000000":o,c=e.speedMultiplier,d=void 0===c?1:c,f=e.cssOverride,p=void 0===f?{}:f,v=e.size,h=void 0===v?35:v,m=i(e,["loading","color","speedMultiplier","cssOverride","size"]),g=r({background:"transparent !important",width:(0,l.cssValue)(h),height:(0,l.cssValue)(h),borderRadius:"100%",border:"2px solid",borderTopColor:a,borderBottomColor:"transparent",borderLeftColor:a,borderRightColor:a,display:"inline-block",animation:"".concat(s," ").concat(.75/d,"s 0s infinite linear"),animationFillMode:"both"},p);return t?u.createElement("span",r({style:g},m)):null}},7074:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.createAnimation=void 0;n.createAnimation=function(e,n,t){var r="react-spinners-".concat(e,"-").concat(t);if("undefined"==typeof window||!window.document)return r;var o=document.createElement("style");document.head.appendChild(o);var a=o.sheet,c="\n    @keyframes ".concat(r," {\n      ").concat(n,"\n    }\n  ");return a&&a.insertRule(c,0),r}},8945:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.cssValue=n.parseLengthAndUnit=void 0;var t={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"===typeof e)return{value:e,unit:"px"};var n,r=(e.match(/^[0-9.]*/)||"").toString();n=r.includes(".")?parseFloat(r):parseInt(r,10);var o=(e.match(/[^0-9]*$/)||"").toString();return t[o]?{value:n,unit:o}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(n,"px.")),{value:n,unit:"px"})}n.parseLengthAndUnit=r,n.cssValue=function(e){var n=r(e);return"".concat(n.value).concat(n.unit)}},5984:function(e,n,t){t.d(n,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=990.df386c78.chunk.js.map