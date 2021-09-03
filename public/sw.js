var serviceWorkerOption = {"assets":["/0.82bccdae7d5c43b10417.chunk.js","/1.f175689188e578b332cf.chunk.js","/12.94cd1e4cb2594fc75340.chunk.js","/13.717178fb0fedd90180a0.chunk.js","/14.e63a535549be06ac32e2.chunk.js","/15.19c1ca0e710e2a102126.chunk.js","/16.2130b25869e4e77fea30.chunk.js","/17.38f243fd397f830cc340.chunk.js","/18.8c276a0b4b9a062ff40c.chunk.js","/19.28062ce681bc508f3fc7.chunk.js","/2.03ec5b1b93c058f5fb2b.chunk.js","/20.0fb34ba5b16cc893effc.chunk.js","/21.3b3fe847dc095d8a5f92.chunk.js","/22.2c63da18ed7dd34d7e42.chunk.js","/23.373ca1cf5d84a1898ab1.chunk.js","/24.cc559aef00467bbc05ac.chunk.js","/25.a986d8b6440dd5c97de1.chunk.js","/26.7d9e2baa442e8bf905d2.chunk.js","/27.328a9c7bb1632a00ab2e.chunk.js","/28.54508f720fd4991510bc.chunk.js","/29.6bffc279dbd32e5f8768.chunk.js","/3.44fd45d0edbd8e4d21bc.chunk.js","/30.c539f0ac40c4ea38e8dc.chunk.js","/4.879c42057615bcf0cf13.chunk.js","/5.394ead4884451fee450c.chunk.js","/6.a21c626203ea6f816396.chunk.js","/7.df7cd835fb4a23e8fd90.chunk.js","/8.3048559062137f81a55b.chunk.js","/9.ebae394759b748ec7145.chunk.js","/main.5aa175d9c91dbc257adb.bundle.js","/main.d78ac7d0feac366c2386.css","/mtproto.worker.6b7c992c493c08d33619.bundle.worker.js","/npm.qr-code-styling.f4b8deb6ad1eabce8b03.chunk.js","/rlottie.worker.86bed2789739b353d39d.bundle.worker.js","/style-desktop.9d7b485ed526720a3aad.css","/webp.worker.eafb4e17dc09d5858dc8.bundle.worker.js"]};
        
        !function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"log",(function(){return K})),n.d(t,"deferredPromises",(function(){return H}));var o={test:location.search.indexOf("test=1")>0,debug:location.search.indexOf("debug=1")>0,http:!1,ssl:!0,multipleConnections:!0,asServiceWorker:!1};const r=o.debug;"undefined"!=typeof window?window:self;var i,s=r;!function(e){e[e.None=0]="None",e[e.Error=1]="Error",e[e.Warn=2]="Warn",e[e.Log=4]="Log",e[e.Debug=8]="Debug"}(i||(i={}));const a=[i.None,i.Error,i.Warn,i.Log,i.Debug],c=Date.now();function l(){return"["+((Date.now()-c)/1e3).toFixed(3)+"]"}function u(e,t=i.Log|i.Warn|i.Error,n=!1){function o(...n){return t&i.Log&&console.log(l(),e,...n)}return s||n||(t=i.Error),o.warn=function(...n){return t&i.Warn&&console.warn(l(),e,...n)},o.info=function(...n){return t&i.Log&&console.info(l(),e,...n)},o.error=function(...n){return t&i.Error&&console.error(l(),e,...n)},o.trace=function(...n){return t&i.Log&&console.trace(l(),e,...n)},o.debug=function(...n){return t&i.Debug&&console.debug(l(),e,...n)},o.setPrefix=function(t){e="["+t+"]:"},o.setPrefix(e),o.setLevel=function(e){t=a.slice(0,e+1).reduce((e,t)=>e|t,0)},o}var h=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};const d=self;function f(e){return e.ok&&200===e.status}function g(e,t){return new Promise(n=>{const o=new FileReader;o.addEventListener("loadend",e=>n(e.target.result)),o[t](e)})}function p(e){return function(e){return g(e,"readAsArrayBuffer")}(e).then(e=>new Uint8Array(e))}function m(e,t=""){let n;const o=function(e){if(-1===["image/jpeg","image/png","image/gif","image/webp","image/bmp","video/mp4","video/webm","video/quicktime","audio/ogg","audio/mpeg","audio/mp4","application/json","application/pdf"].indexOf(e))return"application/octet-stream";return e}(t);try{n=new Blob(e,{type:o})}catch(t){let r=new BlobBuilder;e.forEach(e=>{r.append(e)}),n=r.getBlob(o)}return n}const v="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,w="undefined"!=typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope,y=()=>self.clients.matchAll({includeUncontrolled:!1,type:"window"}),b=(e,...t)=>{self.clients.matchAll({includeUncontrolled:!1,type:"window"}).then(n=>{n.length&&n.slice(e?0:-1).forEach(e=>{e.postMessage(...t)})})},S=(...e)=>{self.postMessage(...e)},P=()=>{};w&&b.bind(null,!1),w&&b.bind(null,!0);var O=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};var A=new class{constructor(){this.blobSupported=!0;try{m([],"")}catch(e){this.blobSupported=!1}}isAvailable(){return this.blobSupported}write(e,t){return t instanceof Blob?p(t).then(t=>e.write(t)):e.write(t)}getFakeFileWriter(e,t){const n=[];return{write:e=>O(this,void 0,void 0,(function*(){if(!this.blobSupported)throw!1;n.push(e)})),truncate:()=>{n.length=0},finalize:(o=!0)=>{const r=m(n,e);return o&&t&&t(r),r}}}},_=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};class T{constructor(e){this.dbName=e,this.useStorage=!0,o.test&&(this.dbName+="_test"),T.STORAGES.length&&(this.useStorage=T.STORAGES[0].useStorage),this.openDatabase(),T.STORAGES.push(this)}openDatabase(){var e;return null!==(e=this.openDbPromise)&&void 0!==e?e:this.openDbPromise=caches.open(this.dbName)}delete(e){return this.timeoutOperation(t=>t.delete("/"+e))}deleteAll(){return caches.delete(this.dbName)}get(e){return this.timeoutOperation(t=>t.match("/"+e))}save(e,t){return this.timeoutOperation(n=>n.put("/"+e,t))}getFile(e,t="blob"){return this.get(e).then(e=>{if(!e)throw"NO_ENTRY_FOUND";return e[t]()})}saveFile(e,t){t instanceof Blob||(t=m(t));const n=new Response(t,{headers:{"Content-Length":""+t.size}});return this.save(e,n).then(()=>t)}timeoutOperation(e){return this.useStorage?new Promise((t,n)=>_(this,void 0,void 0,(function*(){let o=!1;const r=setTimeout(()=>{n(),o=!0},15e3);try{const n=yield this.openDatabase();if(!n)throw this.useStorage=!1,this.openDbPromise=void 0,"no cache?";const r=yield e(n);if(o)return;t(r)}catch(e){n(e)}clearTimeout(r)}))):Promise.reject("STORAGE_OFFLINE")}getFileWriter(e,t){const n=A.getFakeFileWriter(t,t=>this.saveFile(e,t).catch(()=>t));return Promise.resolve(n)}static toggleStorage(e){return Promise.all(this.STORAGES.map(t=>{if(t.useStorage=e,!e)return t.deleteAll()}))}}T.STORAGES=[];var x=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};const E=new T("cachedStreamChunks");setInterval(()=>E.timeoutOperation(e=>e.keys().then(t=>{const n=new Map,o=Date.now()/1e3|0;for(const e of t){const t=e.url.match(/\/(\d+?)\?/);t&&!n.has(t[1])&&n.set(t[1],e)}const r=[];for(const[t,i]of n){const n=e.match(i).then(n=>{if(+n.headers.get("Time-Cached")+86400<=o)return K("will delete stream chunk:",t),e.delete(i,{ignoreSearch:!0,ignoreVary:!0})});r.push(n)}return Promise.all(r)})),18e5),setInterval(()=>{y().then(e=>{for(const[t,n]of H)if(!e.find(e=>e.id===t)){for(const e in n){n[e].reject()}H.delete(t)}})},12e4);const C=new Map;class j{constructor(e){this.info=e,this.loadedOffsets=new Set,this.destroy=()=>{C.delete(this.id)},this.id=j.getId(e),C.set(this.id,this),this.limitPart=e.size>78643200?k:D,this.destroyDebounced=function(e,t,n=!0,o=!0){let r,i,s,a,c=!1;return(...l)=>(i||(i=new Promise((e,t)=>(s=e,a=t))),r?(clearTimeout(r),c=!0,a(),i=new Promise((e,t)=>(s=e,a=t))):n&&(s(e(...l)),c=!1),r=setTimeout(()=>{!o||n&&!c||s(e(...l)),r=i=s=a=void 0,c=!1},t),i.catch(()=>{}),i)}(this.destroy,15e4,!1,!0)}requestFilePartFromWorker(e,t,n=!1){return x(this,void 0,void 0,(function*(){const o={type:"requestFilePart",payload:[this.info.dcId,this.info.location,e,t]},r=JSON.stringify(o);o.id=r;const i=yield y().then(e=>{if(e.length)return e.find(e=>H.has(e.id))||e[0]});if(!i)throw new Error("no window");let s=H.get(i.id);s||H.set(i.id,s={});let a=s[r];if(a)return a.then(e=>e.bytes);i.postMessage(o),this.loadedOffsets.add(e),a=s[r]=function(){let e={isFulfilled:!1,isRejected:!1,notify:()=>{},notifyAll:(...t)=>{e.lastNotify=t,e.listeners.forEach(e=>e(...t))},lastNotify:void 0,listeners:[],addNotifyListener:t=>{e.lastNotify&&t(...e.lastNotify),e.listeners.push(t)}},t=new Promise((n,o)=>{e.resolve=e=>{t.isFulfilled||(t.isFulfilled=!0,n(e))},e.reject=(...e)=>{t.isRejected||(t.isRejected=!0,o(...e))}});return t.finally(()=>{t.notify=null,t.listeners.length=0,t.lastNotify=null,t.cancel&&(t.cancel=()=>{})}),Object.assign(t,e),t}();const c=a.then(e=>e.bytes);return this.saveChunkToCache(c,e,t),!n&&this.preloadChunks(e,e+15*this.limitPart),c}))}requestFilePartFromCache(e,t,n){const o=this.getChunkKey(e,t);return E.getFile(o).then(e=>n?new Uint8Array:p(e),e=>{})}requestFilePart(e,t,n){return this.requestFilePartFromCache(e,t,n).then(o=>o||this.requestFilePartFromWorker(e,t,n))}saveChunkToCache(e,t,n){return e.then(e=>{const o=this.getChunkKey(t,n),r=new Response(e,{headers:{"Content-Length":""+e.length,"Content-Type":"application/octet-stream","Time-Cached":""+(Date.now()/1e3|0)}});return E.save(o,r)})}preloadChunk(e){this.loadedOffsets.has(e)||(this.loadedOffsets.add(e),this.requestFilePart(e,this.limitPart,!0))}preloadChunks(e,t){if(t>this.info.size&&(t=this.info.size),e)for(;e<t;e+=this.limitPart)this.preloadChunk(e);else this.preloadChunk(F(e,this.limitPart))}requestRange(e){this.destroyDebounced();const t=function(e,t,n){if(0===e[0]&&1===e[1])return new Response(new Uint8Array(2).buffer,{status:206,statusText:"Partial Content",headers:{"Accept-Ranges":"bytes","Content-Range":"bytes 0-1/"+(n||"*"),"Content-Length":"2","Content-Type":t||"video/mp4"}});return null}(e,this.info.mimeType,this.info.size);if(t)return t;let[n,o]=e;const r=o&&o<this.limitPart?function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.log(2)))}(o-n+1):this.limitPart,i=F(n,r);return o||(o=Math.min(n+r,this.info.size-1)),this.requestFilePart(i,r).then(e=>{n===i&&o===i+r||(e=e.slice(n-i,o-i+1));const t={"Accept-Ranges":"bytes","Content-Range":`bytes ${n}-${n+e.byteLength-1}/${this.info.size||"*"}`,"Content-Length":""+e.byteLength};return this.info.mimeType&&(t["Content-Type"]=this.info.mimeType),new Response(e,{status:206,statusText:"Partial Content",headers:t})})}getChunkKey(e,t){return this.id+"?offset="+e+"&limit="+t}static get(e){var t;return null!==(t=C.get(this.getId(e)))&&void 0!==t?t:new j(e)}static getId(e){return e.location.id}}const D=524288,k=1048576;function F(e,t=2048){return e-e%t}var N={name:"tweb",version:7,stores:[{name:"session"},{name:"stickerSets"},{name:"users"},{name:"chats"},{name:"dialogs"},{name:"messages"}]};const R=navigator?navigator.userAgent:null,L=(navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),navigator.userAgent.toLowerCase().indexOf("android"),/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),"undefined"!=typeof window?window:self),M=((/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&L.MSStream,!!("safari"in L)||(!R||(/\b(iPad|iPhone|iPod)\b/.test(R)||R.match("Safari")&&R.match("Chrome"))),navigator.userAgent.toLowerCase().indexOf("firefox")>-1);navigator.maxTouchPoints>0&&navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i);class W{constructor(e,t){this.storageIsAvailable=!0,function(e,t){if(t)for(let n in t)void 0!==t[n]&&(e[n]=t[n])}(this,e),o.test&&(this.name+="_test"),this.storeName=t,this.log=u("IDB-"+this.storeName),this.openDatabase(!0),W.STORAGES.push(this)}static closeDatabases(e){this.STORAGES.forEach(t=>{if(e&&e===t)return;const n=t.db;n&&(n.onclose=()=>{},n.close())})}isAvailable(){return this.storageIsAvailable}openDatabase(e=!1){if(this.openDbPromise&&!e)return this.openDbPromise;try{var t=indexedDB.open(this.name,this.version);if(!t)return Promise.reject()}catch(e){return this.log.error("error opening db",e.message),this.storageIsAvailable=!1,Promise.reject(e)}let n=!1;return setTimeout(()=>{n||t.onerror({type:"IDB_CREATE_TIMEOUT"})},3e3),this.openDbPromise=new Promise((e,o)=>{t.onsuccess=r=>{n=!0;const i=t.result;let s=!1;this.log("Opened"),i.onerror=e=>{this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),o(e)},i.onclose=e=>{this.log.error("closed:",e),!s&&this.openDatabase()},i.onabort=e=>{this.log.error("abort:",e);const t=e.target;this.openDatabase(s=!0),t.onerror&&t.onerror(e),i.close()},i.onversionchange=e=>{this.log.error("onversionchange, lol?")},e(this.db=i)},t.onerror=e=>{n=!0,this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),o(e)},t.onupgradeneeded=e=>{n=!0,this.log.warn("performing idb upgrade from",e.oldVersion,"to",e.newVersion);var t=e.target.result;this.stores.forEach(e=>{t.objectStoreNames.contains(e.name)||((e,t)=>{var n;const o=e.createObjectStore(t.name);if(null===(n=t.indexes)||void 0===n?void 0:n.length)for(const e of t.indexes)o.createIndex(e.indexName,e.keyPath,e.objectParameters)})(t,e)})}})}delete(e){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readwrite",t=>e.map(e=>t.delete(e)),"")}clear(e){return this.getObjectStore("readwrite",e=>e.clear(),"",e)}save(e,t){return Array.isArray(e)||(e=[].concat(e),t=[].concat(t)),this.getObjectStore("readwrite",n=>e.map((e,o)=>n.put(t[o],e)),"")}saveFile(e,t){return t instanceof Blob||(t=m([t])),this.save(e,t)}get(e){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readonly",t=>e.map(e=>t.get(e)),"")}getObjectStore(e,t,n,o=this.storeName){let r;return n&&(r=performance.now(),this.log(n+": start")),this.openDatabase().then(i=>new Promise((s,a)=>{const c=i.transaction([o],e);c.onerror=e=>{clearTimeout(l),a(c.error)},c.oncomplete=e=>{clearTimeout(l),n&&this.log(n+": end",performance.now()-r);const t=d.map(e=>e.result);s(h?t:t[0])};const l=setTimeout(()=>{this.log.error("transaction not finished",c)},1e4),u=t(c.objectStore(o)),h=Array.isArray(u),d=h?u:[].concat(u)}))}getAll(){return this.getObjectStore("readonly",e=>e.getAll(),"")}}W.STORAGES=[];var I=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};const q=self,B=location.protocol+"//"+location.hostname+location.pathname.split("/").slice(0,-1).join("/")+"/";const G=new class{constructor(e,t,n){this.defaults=n,this.cache={},this.storage=new W(e,t)}get(e){return I(this,void 0,void 0,(function*(){if(void 0!==this.cache[e])return this.cache[e];let t;try{t=yield this.storage.get(e)}catch(e){}if(void 0!==this.cache[e])return this.cache[e];if(void 0===t){const n=this.defaults[e];t="function"==typeof n?n():n}return this.cache[e]=t}))}set(e,t){return I(this,void 0,void 0,(function*(){this.cache[e]=t;try{this.storage.save(e,t)}catch(e){}}))}}(N,"session",{push_mute_until:0,push_last_alive:0,push_lang:{},push_settings:{}});q.addEventListener("push",e=>{const t=e.data.json();K("push",t);let n=!1;const o=Promise.all([G.get("push_mute_until"),G.get("push_last_alive"),q.clients.matchAll({type:"window"})]).then(e=>{const[o,r,i]=e;if(K("matched clients",i),n=i.length>0,n)throw"Supress notification because some instance is alive";const s=Date.now();if(J()&&o&&s<o)throw`Supress notification because mute for ${Math.ceil((o-s)/6e4)} min`;if(!t.badge)throw"No badge?"});o.catch(e=>{K(e)});const r=o.then(()=>Promise.all([G.get("push_settings"),G.get("push_lang")])).then(e=>function(e,t,n){const o="assets/img/logo_filled_rounded.png";let r,i=e.title||"Telegram",s=e.description||"";e.custom&&(r=e.custom.channel_id?-e.custom.channel_id:e.custom.chat_id?-e.custom.chat_id:+e.custom.from_id||0);e.custom.peerId=""+r;let a="peer"+r;t&&t.nopreview&&(i="Telegram",s=n.push_message_nopreview||"You have a new message",a="unknown_peer");K("show notify",i,s,o,e);const c=[{action:"mute1d",title:n.push_action_mute1d||"Mute for 24H"}];return q.registration.showNotification(i,{body:s,icon:o,tag:a,data:e,actions:c}).then(e=>{var t;e&&e.notification&&(t=e.notification,z.has(t)||(z.add(t),t.onclose=$))}).catch(e=>{K.error("Show notification promise",e)})}(t,e[0],e[1])).catch(()=>(K("Closing all notifications on push",n),J()||n?V():q.registration.showNotification("Telegram",{tag:"unknown_peer"}).then(()=>{if(n)return V();setTimeout(()=>V(),n?0:100)}).catch(e=>{K.error("Show notification error",e)})));e.waitUntil(r)}),q.addEventListener("notificationclick",e=>{const t=e.notification;K("On notification click: ",t.tag),t.close();const n=e.action;if("mute1d"===n&&J())return K("[SW] mute for 1d"),void G.set("push_mute_until",Date.now()+864e5);const o=t.data;if(!o)return;const r=q.clients.matchAll({type:"window"}).then(e=>{o.action=n,U={type:"push_click",payload:o};for(let t=0;t<e.length;t++){const n=e[t];if("focus"in n)return n.focus(),n.postMessage(U),void(U=void 0)}if(q.clients.openWindow)return G.get("push_settings").then(e=>q.clients.openWindow(e.baseUrl||B))}).catch(e=>{K.error("Clients.matchAll error",e)});e.waitUntil(r)}),q.addEventListener("notificationclose",$);let U,z=new Set;function $(e){var t;t=e.notification,z.delete(t)}function V(){for(const e of z)try{e.close()}catch(e){}let e;return e="getNotifications"in q.registration?q.registration.getNotifications({}).then(e=>{for(let t=0,n=e.length;t<n;++t)try{e[t].close()}catch(e){}}).catch(e=>{K.error("Offline register SW error",e)}):Promise.resolve(),z.clear(),e}function J(){return M}const K=u("SW",i.Error|i.Debug|i.Log|i.Warn),Y=self,H=new Map,X={notifications_clear:()=>{V()},ping:(e,t)=>{!function(e,t){const n=t.ports&&t.ports[0]||t.source,o=e.payload;o.localNotifications&&G.set("push_last_alive",Date.now()),U&&n&&"postMessage"in n&&(n.postMessage(U,[]),U=void 0),o.lang&&G.set("push_lang",o.lang),o.settings&&G.set("push_settings",o.settings)}(e,t)},requestFilePart:(e,t)=>{const n=t.source,o=H.get(n.id);if(!o)return;const r=o[e.id];r&&(e.error?r.reject(e.error):r.resolve(e.payload),delete o[e.id])},toggleStorage:e=>{T.toggleStorage(e.payload)}};Y.addEventListener("message",e=>{const t=e.data,n=X[t.type];n&&n(t,e)});const Q=e=>{if(0===e.request.url.indexOf(location.origin+"/")&&e.request.url.match(/\.(js|css|jpe?g|json|wasm|png|mp3|svg|tgs|ico|woff2?|ttf|webmanifest?)(?:\?.*)?$/))return e.respondWith(function(e){return h(this,void 0,void 0,(function*(){try{const t=yield d.caches.open("cachedAssets"),n=yield t.match(e.request,{ignoreVary:!0});if(n&&f(n))return n;const o={Vary:"*"};let r=yield fetch(e.request,{headers:o});if(f(r))t.put(e.request,r.clone());else if(304===r.status){const n=e.request.url.replace(/\?.+$/,"")+"?"+(1e5*Math.random()|0);r=yield fetch(n,{headers:o}),f(r)&&t.put(e.request,r.clone())}return r}catch(t){return fetch(e.request)}}))}(e));try{const[,t,n,o]=/http[:s]+\/\/.*?(\/(.*?)(?:$|\/(.*)$))/.exec(e.request.url)||[];switch(n){case"stream":!function(e,t){const n=function(e){if(!e)return[0,0];const[,t]=e.split("="),n=t.split(", "),[o,r]=n[0].split("-");return[+o,+r||0]}(e.request.headers.get("Range")),o=JSON.parse(decodeURIComponent(t)),r=j.get(o);var i;e.respondWith(Promise.race([(i=45e3,new Promise(e=>{setTimeout(()=>{e(new Response("",{status:408,statusText:"Request timed out."}))},i)})),r.requestRange(n)]))}(e,o)}}catch(t){e.respondWith(new Response("",{status:500,statusText:"Internal Server Error"}))}},Z=()=>{Y.onfetch=Q};Y.addEventListener("install",e=>{K("installing"),e.waitUntil(Y.skipWaiting())}),Y.addEventListener("activate",e=>{K("activating",Y),e.waitUntil(Y.caches.delete("cachedAssets")),e.waitUntil(Y.clients.claim())}),Y.onerror=e=>{K.error("error:",e)},Y.onunhandledrejection=e=>{K.error("onunhandledrejection:",e)},Y.onoffline=Y.ononline=Z,Z()}]);
//# sourceMappingURL=sw.js.map