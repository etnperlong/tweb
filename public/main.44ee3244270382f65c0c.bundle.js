!function(e){function t(t){for(var n,a,i=t[0],r=t[1],c=0,s=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);for(u&&u(t);s.length;)s.shift()()}var n={},o={10:0};function a(e){return i.p+""+({11:"npm.qr-code-styling"}[e]||e)+"."+{0:"618c7c11776e2089c1ef",1:"515a0f698df4a2895be0",2:"a192566b180b76676f10",3:"a285507ed42eb79308d0",4:"ef78c521d3f7a0d3d5e2",5:"d501f9af06c4a6bdb01d",6:"bf1bb13e6865d0ab49a4",7:"f498021014320457a1cf",8:"ba6cb9f2e82fbe40a3d7",9:"514fbe94e06839e94373",11:"58f96143a0b51bb6bd46",12:"a0ee3091131f2793e4f6",13:"307131e6ffc2d4aa030a",14:"e930175d3f8cfffe542c",15:"cde6adae425224a1b3dd",16:"c6b3645525982399f11c",17:"07244ad895d964ac18a1",18:"f3b3b6c653a8c43b32ad",19:"f318c6e0eef6faf3c596",20:"88687ea3f21189daa9f5",21:"a02078355336763332bd",22:"b9db211a1aed235bdaff",23:"8eee14e9add9c58ed531",24:"ce598434242d3dda9c0b",25:"fb9a04d5240633d8de18",26:"8338df5c1f08f0b00e12",27:"4dfec84fdb513eebf355",28:"528b1cf8f61c2bc0a952",29:"3d3e2b8d23307e2bb676",30:"4e057134a8c84b0bd11d",31:"93ae1532edb2994c49d3"}[e]+".chunk.js"}function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=r);var c=new Error;var s=function t(n,r){var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=n,s=function(n){u.onerror=u.onload=null,clearTimeout(d);var i=o[e];if(0!==i)if(i)if(0===r){var s=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed after 999999 retries.\n("+s+": "+l+")",c.name="ChunkLoadError",c.type=s,c.request=l,i[1](c),o[e]=void 0}else setTimeout((function(){var n=Date.now(),o=t(a(e)+"?"+n,r-1);document.head.appendChild(o)}),0);else o[e]=void 0};var d=setTimeout((function(){s({type:"timeout",target:u})}),12e4);return u.onerror=u.onload=s,u}(a(e),999999);document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var r=this.webpackJsonp=this.webpackJsonp||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var u=c;i(i.s=11)}([function(e,t,n){"use strict";n.r(t),n.d(t,"USER_AGENT",(function(){return a})),n.d(t,"IS_APPLE",(function(){return i})),n.d(t,"IS_ANDROID",(function(){return r})),n.d(t,"IS_CHROMIUM",(function(){return c})),n.d(t,"IS_APPLE_MOBILE",(function(){return s})),n.d(t,"IS_SAFARI",(function(){return u})),n.d(t,"IS_FIREFOX",(function(){return d})),n.d(t,"IS_MOBILE_SAFARI",(function(){return l})),n.d(t,"IS_MOBILE",(function(){return f}));var o=n(2);const a=navigator?navigator.userAgent:null,i=-1!==navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),r=-1!==navigator.userAgent.toLowerCase().indexOf("android"),c=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),s=(/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&!o.a.MSStream,u=!!("safari"in o.a)||!(!a||!(/\b(iPad|iPhone|iPod)\b/.test(a)||a.match("Safari")&&!a.match("Chrome"))),d=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,l=u&&s,f=navigator.maxTouchPoints>0&&-1!=navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i)},function(e,t,n){"use strict";n.r(t),n.d(t,"IS_TOUCH_SUPPORTED",(function(){return o}));const o="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch},function(e,t,n){"use strict";const o="undefined"!=typeof window?window:self;t.a=o},function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var o=n(1),a=n(0),i=n(6),r=n(4);const c=a.IS_SAFARI&&a.IS_MOBILE&&o.IS_TOUCH_SUPPORTED;if(c){let e="clientY",t=0;const n={capture:!0,passive:!1},o=n=>{const o=n.touches[0],a=Object(i.a)(o.target,"scrollable-y");if(a){const i=o[e],r=t-i,c=a.scrollTop,s=a.scrollHeight,u=a.clientHeight,d=c?Math.round(c+a.clientHeight+r):c+r;(s===u||d>=s||d<=0)&&n.preventDefault()}else n.preventDefault()};let a=0;document.addEventListener("focusin",i=>{!i.target.classList.contains("is-sticky-input-bugged")||i.timeStamp-a<50||(Object(r.a)(i.target),document.addEventListener("touchmove",o,n),document.addEventListener("touchstart",n=>{if(n.touches.length>1)return;const o=n.touches[0];t=o[e]}))},{passive:!0}),document.addEventListener("focusout",e=>{document.removeEventListener("touchmove",o,n),a=e.timeStamp},{passive:!0}),document.addEventListener("visibilitychange",()=>{document.activeElement&&document.activeElement.classList.contains("is-sticky-input-bugged")&&document.activeElement.blur&&Object(r.a)(document.activeElement)},{passive:!0})}function s(e){c&&e.classList.add("is-sticky-input-bugged")}},function(e,t,n){"use strict";function o(e){e.style.transform="translateY(-99999px)",e.focus(),setTimeout(()=>{e.style.transform=""},0)}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";function o(e){if(e=e||window.event){e=e.originalEvent||e;try{e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0}catch(e){}}return!1}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";function o(e,t){return e.closest("."+t)}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";const o={id:1025907,hash:"452b0359b988148995f22ff0f4229750",version:"1.1.0",versionFull:"1.1.0 (100)",build:100,langPackVersion:"0.3.9",langPack:"macos",langPackCode:"en",domains:["web.telegram.org"],baseDcId:2,isMainDomain:"web.telegram.org"===location.hostname,suffix:"K"};o.isMainDomain&&(o.id=2496,o.hash="8da85b0d5bfe62527e5b244c209159c3"),t.a=o},function(e,t,n){"use strict";function o(){return!(!document.activeElement||!document.activeElement.blur)&&(document.activeElement.blur(),!0)}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";let o;function a(){return o||(o="fonts"in document?Promise.race([Promise.all(["400 1rem Roboto","500 1rem Roboto","500 1rem tgico"].map(e=>document.fonts.load(e))),new Promise(e=>setTimeout(e,1e3))]):Promise.resolve())}n.d(t,"a",(function(){return a}))},function(e,t,n){"use strict";const o=-1!==navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i);t.a=o},function(e,t,n){"use strict";n.r(t);var o=n(7),a=n(8),i=n(5),r=n(3),c=n(9),s=n(10),u=n(0),d=(n(12),n(13),n(14),function(e,t,n,o){return new(n||(n=Promise))((function(a,i){function r(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}s((o=o.apply(e,t||[])).next())}))});document.addEventListener("DOMContentLoaded",()=>d(void 0,void 0,void 0,(function*(){Element.prototype.toggleAttribute||(Element.prototype.toggleAttribute=function(e,t){return void 0!==t&&(t=!!t),this.hasAttribute(e)?!!t||(this.removeAttribute(e),!1):!1!==t&&(this.setAttribute(e,""),!0)});const e=window.visualViewport||window;let t,d=!1;const l=()=>{const n=.01*(d&&!v.default.isOverlayActive?e.height||e.innerHeight:window.innerHeight);t!==n&&(b.IS_TOUCH_SUPPORTED&&t<n&&n-t>1&&Object(a.a)(),t=n,document.documentElement.style.setProperty("--vh",n+"px"))},f=new Proxy(Worker,{construct:(e,t)=>new e(t[0]+location.search)});Worker=f;const[m,b,h,v,g,p,P]=yield Promise.all([n.e(24).then(n.bind(null,27)),Promise.resolve().then(n.bind(null,1)),Promise.resolve().then(n.bind(null,0)),n.e(22).then(n.bind(null,15)),Promise.all([n.e(0),n.e(28)]).then(n.bind(null,17)),Promise.all([n.e(0),n.e(1)]).then(n.bind(null,16)),n.e(27).then(n.bind(null,28))]);if(window.addEventListener("resize",l),l(),r.a){const t=()=>{d=1===n&&r.a&&!v.default.isOverlayActive,l(),e!==window&&(d?(window.removeEventListener("resize",l),e.addEventListener("resize",l)):(e.removeEventListener("resize",l),window.addEventListener("resize",l)))};let n;v.default.addEventListener("im_tab_change",e=>{const o=void 0!==n;n=e,(o||1===n)&&t()}),v.default.addEventListener("overlay_toggle",()=>{t()})}h.IS_FIREFOX&&!s.a&&document.addEventListener("dragstart",e=>{const t=e.target;if("IMG"===t.tagName&&t.classList.contains("emoji"))return Object(i.a)(e),!1}),document.addEventListener("dragstart",e=>{var t;if("IMG"===(null===(t=e.target)||void 0===t?void 0:t.tagName))return e.preventDefault(),!1}),h.IS_FIREFOX&&document.documentElement.classList.add("is-firefox"),h.IS_APPLE?(h.IS_SAFARI&&document.documentElement.classList.add("is-safari"),document.documentElement.classList.add("emoji-supported"),h.IS_APPLE_MOBILE?document.documentElement.classList.add("is-ios"):document.documentElement.classList.add("is-mac")):h.IS_ANDROID&&document.documentElement.classList.add("is-android"),b.IS_TOUCH_SUPPORTED?document.documentElement.classList.add("is-touch"):document.documentElement.classList.add("no-touch");const y=performance.now(),E=p.default.getCacheLangPack(),[S,w]=yield Promise.all([g.default.getState(),E]);function I(e,t){e.style.opacity="0",t.then(()=>{window.requestAnimationFrame(()=>{e.style.opacity=""})})}p.default.setTimeFormat(S.settings.timeFormat),v.default.setThemeListener(),w.appVersion!==o.a.langPackVersion&&p.default.getLangPack(w.lang_code),console.log("got state, time:",performance.now()-y);const O=S.authState;if("authStateSignedIn"!==O._){console.log("Will mount auth page:",O._,Date.now()/1e3);const e=document.getElementById("auth-pages");let t,o;if(e){t=e.querySelector(".scrollable"),b.IS_TOUCH_SUPPORTED&&!u.IS_MOBILE_SAFARI||t.classList.add("no-scrollbar"),t.style.opacity="0";const n=document.createElement("div");n.classList.add("auth-placeholder"),t.prepend(n),t.append(n.cloneNode())}try{yield Promise.all([Promise.all([n.e(0),n.e(1)]).then(n.bind(null,24)),Promise.all([n.e(0),n.e(1)]).then(n.bind(null,26))]).then(([e,t])=>{e.default.setAuthorized(!1),t.default.forceUnsubscribe()})}catch(e){}switch(O._){case"authStateSignIn":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,20))).default.mount();break;case"authStateSignQr":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(21)]).then(n.bind(null,22))).default.mount();break;case"authStateAuthCode":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(12)]).then(n.bind(null,23))).default.mount(O.sentCode);break;case"authStatePassword":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,21))).default.mount();break;case"authStateSignUp":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(14)]).then(n.bind(null,25))).default.mount(O.authCode)}if(t){o&&(yield o);I(t,"fonts"in document?Promise.race([new Promise(e=>setTimeout(e,1e3)),document.fonts.ready]):Promise.resolve())}}else console.log("Will mount IM page:",Date.now()/1e3),I(document.getElementById("main-columns"),Object(c.a)()),(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(30)]).then(n.bind(null,19))).default.mount();const L=(yield n.e(18).then(n.bind(null,18))).ripple;Array.from(document.getElementsByClassName("rp")).forEach(e=>L(e))})))},function(e,t,n){},function(e,t,n){},function(e,t,n){}]);
//# sourceMappingURL=main.44ee3244270382f65c0c.bundle.js.map