(this.webpackJsonp=this.webpackJsonp||[]).push([[2,22],{105:function(t,e,s){"use strict";function i(t,e,s){return t<e?e:t>s?s:t}s.d(e,"a",(function(){return i}))},113:function(t,e,s){"use strict";function i(t,e){const s=e.split(".");let i=t;return s.forEach(t=>{t&&(i=i[t])}),i}s.d(e,"a",(function(){return i}))},114:function(t,e,s){"use strict";s.d(e,"c",(function(){return a})),s.d(e,"b",(function(){return o})),s.d(e,"a",(function(){return h}));var i=s(7),n=s(51);const r=new Map;function a(t){const e=function(t){return r.get(t)}(t);e&&(e.isCancelled=!0,e.deferred.resolve())}function o(t,e,s){return s||(s=function(t){a(t);const e={isCancelled:!1,deferred:Object(n.a)()};return r.set(t,e),e.deferred.then(()=>{r.delete(t)}),e}(e)),Object(i.b)(()=>{s.isCancelled||(t()?o(t,e,s):s.deferred.resolve())}),s.deferred}function h(t){Object(i.b)(()=>{t()&&h(t)})}},129:function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var i=s(143),n=s(15),r=s(7),a=s(87),o=s(97),h=s(93);function c(t,e,s,c,l=250,d){const u=Object(i.a)(e,t||"tabs"===e.dataset.animation?"tabs":"navigation",l,c);if(t){const i=new Proxy(u,{apply:(e,s,i)=>{const n=+i[0],r=void 0===i[1]||i[1],a=t.querySelector(`[data-tab="${n}"]`)||t.children[n];c(a,n,r)}}),c=(i,o,h=!0)=>{const c=e.children[o];if(s){const t=s(o,c,h);if(void 0!==t&&!t)return}d&&d.scrollIntoViewNew({element:i.parentElement.children[o],position:"center",forceDirection:h?void 0:a.a.Static,forceDuration:l,axis:"x"}),n.default.settings.animationsEnabled||(h=!1);const f=u.prevId();if(i.classList.contains("active")||o===f)return!1;const g=t.querySelector(p.toLowerCase()+".active");Object(r.b)(()=>{g&&g.classList.remove("active")}),m&&-1!==f&&h&&Object(r.b)(()=>{const t=i.querySelector("i"),e=i.parentElement.children[f].querySelector("i");e.classList.remove("animate"),t.classList.remove("animate");const s=e.parentElement.parentElement.offsetLeft-t.parentElement.parentElement.offsetLeft,n=e.clientWidth/t.clientWidth;t.style.transform=`translate3d(${s}px, 0, 0) scale3d(${n}, 1, 1)`,requestAnimationFrame(()=>{t.classList.add("animate"),t.style.transform="none"})}),Object(r.b)(()=>{i.classList.add("active")}),u(o,h)},m=!t.classList.contains("no-stripe"),p=t.firstElementChild.tagName;return t.addEventListener("click",(function(e){let s,i=e.target;if(i=Object(o.a)(i,t),!i)return!1;if(i.dataset.tab){if(s=+i.dataset.tab,-1===s)return!1}else s=Object(h.a)(i);c(i,s)})),i}return u}},139:function(t,e,s){"use strict";function i(t,e){t=t.split(" ",1)[0],e=e.split(" ",1)[0];const s=t.split("."),i=e.split(".");for(let t=0;t<s.length;++t){const e=+s[t],n=+i[t];if(e>n)return 1;if(e<n)return-1}return 0}s.d(e,"a",(function(){return i}))},140:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var i=s(52),n=s(85);function r(t,e,s,a){for(const o in t)typeof e[o]!=typeof t[o]?(e[o]=Object(i.a)(t[o]),s&&s(a||o)):Object(n.a)(t[o])&&r(t[o],e[o],s,a||o)}},142:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var i=s(38);function n(t,e,s,n,r=!0){if(t<s&&e<n&&r)return Object(i.c)(t,e);let a=s,o=n;return t/e>s/n?o=e*s/t|0:(a=t*n/e|0,a>s&&(o=o*s/a|0,a=s)),r&&a>=t&&o>=e&&(a=t,o=e),Object(i.c)(a,o)}s(30).a.calcImageInBox=n},143:function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var i=s(15),n=s(51),r=s(82),a=s(93),o=s(5);function h(t,e,s){const i=e.getBoundingClientRect().width,n=[t,e];return s&&n.reverse(),n[0].style.filter="brightness(80%)",n[0].style.transform=`translate3d(${.25*-i}px, 0, 0)`,n[1].style.transform=`translate3d(${i}px, 0, 0)`,t.classList.add("active"),t.offsetWidth,t.style.transform="",t.style.filter="",()=>{e.style.transform=e.style.filter=""}}function c(t,e,s){const i=e.getBoundingClientRect().width,n=[t,e];return s&&n.reverse(),n[0].style.transform=`translate3d(${-i}px, 0, 0)`,n[1].style.transform=`translate3d(${i}px, 0, 0)`,t.classList.add("active"),t.offsetWidth,t.style.transform="",()=>{e.style.transform=""}}const l=(t,e,s,i,n=!0)=>{let r=null;switch(e){case"tabs":r=c;break;case"navigation":r=h}return t.dataset.animation=e,d(t,r,s,i,n)},d=(t,e,s,h,c=!0,l=!1,d=!0)=>{const u=new Map;let m,p=null;if(d){const s=e?"transitionend":"animationend",i=e=>{if(Object(o.a)(e),e.target.parentElement!==t)return;const n=u.get(e.target);n&&n(),e.target===p&&(!m&&c||(m&&(m.resolve(),m=void 0),h&&h(f.prevId()),t.classList.remove("animating","backwards","disable-hover"),l&&(t.removeEventListener(s,i),p=m=void 0,u.clear())))};t.addEventListener(s,i)}function f(o,l=!0,g){g&&(p=g),o instanceof HTMLElement&&(o=Object(a.a)(o));const v=f.prevId();if(o===v)return!1;const b=t.children[o];if(i.default.settings.animationsEnabled&&-1!==v||(l=!1),!d){const e=t.dataset.timeout;void 0!==e&&clearTimeout(+e),delete t.dataset.timeout}if(!l){if(p)p.classList.remove("active","to","from");else if(b){const t=u.get(b);t&&t()}return b&&(b.classList.remove("to","from"),b.classList.add("active")),t.classList.remove("animating","backwards","disable-hover"),p=b,void(h&&h(o))}d||(t.dataset.timeout=""+window.setTimeout(()=>{b.classList.remove("to"),p&&p.classList.remove("from"),t.classList.remove("animating","backwards","disable-hover"),delete t.dataset.timeout},s)),p&&(p.classList.remove("to"),p.classList.add("from")),t.classList.add("animating");const y=v<o;let w;if(t.classList.toggle("backwards",!y),b&&(e?w=e(b,p,y):b.classList.add("active"),b.classList.remove("from"),b.classList.add("to")),b&&u.set(b,()=>{b.classList.remove("to"),u.delete(b)}),p){const t=p,e=()=>{t.classList.remove("active","from"),w&&w(),u.delete(t)};if(b)u.set(t,e);else{const i=window.setTimeout(e,s);u.set(t,()=>{clearTimeout(i),u.delete(t)})}c&&(m||(m=Object(n.a)()),Object(r.b)(m,2*s))}p=b}return f.prevId=()=>p?Object(a.a)(p):-1,f}},17:function(t,e,s){"use strict";s.r(e),s.d(e,"STATE_INIT",(function(){return S})),s.d(e,"AppStateManager",(function(){return E}));var i=s(43),n=s(49),r=s(15),a=s(90),o=s(41),h=s(8),c=s(30),l=s(103),d=s(0),u=s(138),m=s(75),p=s(66),f=s(139);var g=s(52),v=s(113);var b=s(140),y=function(t,e,s,i){return new(s||(s=Promise))((function(n,r){function a(t){try{h(i.next(t))}catch(t){r(t)}}function o(t){try{h(i.throw(t))}catch(t){r(t)}}function h(t){var e;t.done?n(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(a,o)}h((i=i.apply(t,e||[])).next())}))};const w=h.a.version,k=h.a.build,S={allDialogsLoaded:{},pinnedOrders:{},contactsList:[],updates:{},filters:{},maxSeenMsgId:0,stateCreatedTime:Date.now(),recentEmoji:[],topPeersCache:{},recentSearch:[],version:w,build:k,authState:{_:d.IS_MOBILE?"authStateSignIn":"authStateSignQr"},hiddenPinnedMessages:{},settings:{messagesTextSize:16,distanceUnit:"kilometers",sendShortcut:"enter",animationsEnabled:!0,autoDownload:{photo:{contacts:!0,private:!0,groups:!0,channels:!0},video:{contacts:!0,private:!0,groups:!0,channels:!0},file:{contacts:!0,private:!0,groups:!0,channels:!0}},autoDownloadNew:{_:"autoDownloadSettings",file_size_max:3145728,pFlags:{video_preload_large:!0,audio_preload_next:!0},photo_size_max:1048576,video_size_max:15728640,video_upload_maxbitrate:100},autoPlay:{gifs:!0,videos:!0},stickers:{suggest:!0,loop:!0},emoji:{suggest:!0,big:!0},themes:[{name:"day",background:d.IS_MOBILE?{blur:!1,slug:"",color:"#dbddbb,#6ba587,#d5d88d,#88b884",highlightningColor:"hsla(86.4, 43.846153%, 45.117647%, .4)",intensity:0,id:"1"}:{blur:!1,slug:"pattern",color:"#dbddbb,#6ba587,#d5d88d,#88b884",highlightningColor:"hsla(86.4, 43.846153%, 45.117647%, .4)",intensity:50,id:"1"}},{name:"night",background:d.IS_MOBILE?{blur:!1,slug:"",color:"#0f0f0f",highlightningColor:"hsla(0, 0%, 3.82353%, 0.4)",intensity:0,id:"-1"}:{blur:!1,slug:"pattern",color:"#fec496,#dd6cb9,#962fbf,#4f5bd5",highlightningColor:"hsla(299.142857, 44.166666%, 37.470588%, .4)",intensity:-50,id:"-1"}}],theme:"system",notifications:{sound:!1},timeFormat:(new Date).toLocaleString().match(/\s(AM|PM)/)?"h12":"h23"},keepSigned:!0,chatContextMenuHintWasShown:!1,stateId:Object(p.a)(32),notifySettings:{}},L=Object.keys(S),F=["contactsList","stateCreatedTime","maxSeenMsgId","filters","topPeers"];class E extends n.a{constructor(){super(),this.log=Object(o.b)("STATE"),this.neededPeers=new Map,this.singlePeerMap=new Map,this.storages={users:new l.a(u.a,"users"),chats:new l.a(u.a,"chats"),dialogs:new l.a(u.a,"dialogs")},this.storagesResults={},this.storage=a.a,this.loadSavedState(),r.default.addEventListener("user_auth",()=>{this.requestPeerSingle(r.default.myId,"self")})}loadSavedState(){return this.loaded||(console.time("load state"),this.loaded=new Promise(t=>{const e=Object.keys(this.storages),s=e.map(t=>this.storages[t].getAll()),i=L.map(t=>a.a.get(t)).concat(m.a.get("user_auth"),m.a.get("state_id")).concat(a.a.get("user_auth")).concat(s);Promise.all(i).then(s=>y(this,void 0,void 0,(function*(){let i=this.state={};for(let t=0,e=L.length;t<e;++t){const e=L[t],n=s[t];void 0!==n?i[e]=n:this.pushToState(e,Object(g.a)(S[e]))}s.splice(0,L.length);let n=s.shift();const o=s.shift(),l=s.shift();if(!n&&l){n=l;const t=["dc","server_time_offset","xt_instance"];for(let e=1;e<=5;++e)t.push(`dc${e}_server_salt`),t.push(`dc${e}_auth_key`);const e=yield Promise.all(t.map(t=>a.a.get(t)));t.push("user_auth"),e.push("number"==typeof n||"string"==typeof n?{dcID:e[0]||h.a.baseDcId,date:Date.now()/1e3|0,id:n.toPeerId(!1)}:n);let s={};t.forEach((t,i)=>{s[t]=e[i]}),yield m.a.set(s)}n&&(i.authState={_:"authStateSignedIn"},r.default.dispatchEvent("user_auth","number"==typeof n||"string"==typeof n?{dcID:0,date:Date.now()/1e3|0,id:n.toPeerId(!1)}:n));for(let t=0,i=e.length;t<i;++t)this.storagesResults[e[t]]=s[t];if(s.splice(0,e.length),i.stateId!==o){if(void 0!==o){const t=new Map([["authState",void 0],["stateId",void 0]]);t.forEach((e,s)=>{t.set(s,Object(g.a)(i[s]))}),i=this.state=Object(g.a)(S),t.forEach((t,e)=>{i[e]=t});for(const t in this.storagesResults)this.storagesResults[t].length=0;this.storage.set(i)}yield m.a.set({state_id:i.stateId})}const d=Date.now();if(i.stateCreatedTime+864e5<d){c.b&&this.log("will refresh state",i.stateCreatedTime,d);(t=>{t.forEach(t=>{this.pushToState(t,Object(g.a)(S[t]));const e=this.storagesResults[t];e&&e.length&&(e.length=0)})})(F)}if(!i.settings.hasOwnProperty("theme")&&i.settings.hasOwnProperty("nightTheme")&&(i.settings.theme=i.settings.nightTheme?"night":"day",this.pushToState("settings",i.settings)),!i.settings.hasOwnProperty("themes")&&i.settings.background){i.settings.themes=Object(g.a)(S.settings.themes);const t=i.settings.themes.find(t=>t.name===i.settings.theme);t&&(t.background=i.settings.background,this.pushToState("settings",i.settings))}const u=i.settings.autoDownload;if(void 0!==(null==u?void 0:u.private)){const t=["contacts","private","groups","channels"];["photo","video","file"].forEach(e=>{const s=u[e]={};t.forEach(t=>{s[t]=u[t]})}),t.forEach(t=>{delete u[t]}),this.pushToState("settings",i.settings)}if(Object(b.a)(S,i,t=>{this.pushToState(t,i[t])}),i.version!==w||i.build!==k){if(-1===Object(f.a)(i.version,"0.8.7")){this.state.allDialogsLoaded=Object(g.a)(S.allDialogsLoaded),this.state.filters=Object(g.a)(S.filters);const t=this.storagesResults.dialogs;(null==t?void 0:t.length)&&(t.length=0)}if(-1===Object(f.a)(i.version,"1.3.0")){let t=!1;i.settings.themes.forEach((e,s,i)=>{if("day"===e.name&&"ByxGo2lrMFAIAAAAmkJxZabh8eM"===e.background.slug&&"image"===e.background.type||"night"===e.name&&"#0f0f0f"===e.background.color&&"color"===e.background.type){const n=S.settings.themes.find(t=>t.name===e.name);n&&(i[s]=Object(g.a)(n),t=!0)}}),t&&this.pushToState("settings",i.settings)}0!==Object(f.a)(i.version,w)&&(this.newVersion=w),this.pushToState("version",w),this.pushToState("build",k)}r.default.settings=i.settings,c.b&&this.log("state res",i,Object(g.a)(i)),console.timeEnd("load state"),t(i)}))).catch(t)})),this.loaded}getState(){return void 0===this.state?this.loadSavedState():Promise.resolve(this.state)}setByKey(t,e){!function(t,e,s){const i=e.split(".");Object(v.a)(t,i.slice(0,-1).join("."))[i.pop()]=s}(this.state,t,e),r.default.dispatchEvent("settings_updated",{key:t,value:e});const s=t.split(".")[0];this.pushToState(s,this.state[s])}pushToState(t,e,s=!0){s&&(this.state[t]=e),this.setKeyValueToStorage(t,e)}setKeyValueToStorage(t,e=this.state[t]){this.storage.set({[t]:e})}requestPeer(t,e,s){let i=this.neededPeers.get(t);i&&i.has(e)||(i||(i=new Set,this.neededPeers.set(t,i)),i.add(e),this.dispatchEvent("peerNeeded",t),void 0!==s&&this.keepPeerSingle(t,e))}requestPeerSingle(t,e,s=t){return this.requestPeer(t,e+"_"+s,1)}releaseSinglePeer(t,e){return this.keepPeerSingle(i.c,e+"_"+t)}isPeerNeeded(t){return this.neededPeers.has(t)}keepPeerSingle(t,e){const s=this.singlePeerMap.get(e);if(s&&s!==t&&this.neededPeers.has(s)){const t=this.neededPeers.get(s);t.delete(e),t.size||(this.neededPeers.delete(s),this.dispatchEvent("peerUnneeded",s))}t?this.singlePeerMap.set(e,t):this.singlePeerMap.delete(e)}}E.STATE_INIT=S;const I=new E;c.a.appStateManager=I;e.default=I},188:function(t,e,s){"use strict";s.d(e,"a",(function(){return u}));var i=s(0);let n;if(i.IS_SAFARI)try{n=+navigator.userAgent.match(/Version\/(.+?) /)[1]>=14}catch(t){n=!1}else n=!0;var r=n,a=s(49),o=s(38),h=s(105),c=s(50),l=function(t,e,s,i){return new(s||(s=Promise))((function(n,r){function a(t){try{h(i.next(t))}catch(t){r(t)}}function o(t){try{h(i.throw(t))}catch(t){r(t)}}function h(t){var e;t.done?n(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(a,o)}h((i=i.apply(t,e||[])).next())}))};const d=new class{constructor(){this.cache=new Map}getCache(t){let e=this.cache.get(t);return e||this.cache.set(t,e={frames:new Map,counter:0}),++e.counter,e.frames}releaseCache(t){const e=this.cache.get(t);e&&!--e.counter&&this.cache.delete(t)}getCacheCounter(t){const e=this.cache.get(t);return null==e?void 0:e.counter}generateName(t,e,s,i,n){return[t,e,s,i?"colored":"",n||""].filter(Boolean).join("-")}};class u extends a.a{constructor({el:t,worker:e,options:s}){super(!0),this.reqId=0,this.width=0,this.height=0,this.paused=!0,this.direction=1,this.speed=1,this.autoplay=!0,this.loop=!0,this.group="",this.cachingDelta=0,this.reqId=++u.reqId,this.el=t,this.worker=e;for(let t in s)this.hasOwnProperty(t)&&(this[t]=s[t]);let n;this._loop=this.loop,this._autoplay=this.autoplay,this.initFrame=s.initFrame,this.color=s.color,this.inverseColor=s.inverseColor,this.name=s.name,this.skipFirstFrameRendering=s.skipFirstFrameRendering,this.toneIndex=s.toneIndex,void 0!==s.skipRatio?n=s.skipRatio:(i.IS_ANDROID||i.IS_APPLE_MOBILE||i.IS_APPLE&&!i.IS_SAFARI)&&this.width<100&&this.height<100&&!s.needUpscale&&(n=.5),this.skipDelta=void 0!==n?1/n|0:1;const a=Object(h.a)(window.devicePixelRatio,1,2);a>1&&(s.needUpscale?(this.width=Math.round(this.width*a),this.height=Math.round(this.height*a)):a>1&&(this.width>100&&this.height>100?i.IS_APPLE||!o.b.isMobile?(this.width=Math.round(this.width*a),this.height=Math.round(this.height*a)):a>2.5&&(this.width=Math.round(this.width*(a-1.5)),this.height=Math.round(this.height*(a-1.5))):(this.width=Math.round(this.width*Math.max(1.5,a-1.5)),this.height=Math.round(this.height*Math.max(1.5,a-1.5))))),s.noCache||(i.IS_APPLE&&this.width>100&&this.height>100?this.cachingDelta=2:this.width<100&&this.height<100?this.cachingDelta=1/0:this.cachingDelta=4),this.canvas||(this.canvas=document.createElement("canvas"),this.canvas.classList.add("rlottie"),this.canvas.width=this.width,this.canvas.height=this.height),this.context=this.canvas.getContext("2d"),r&&(this.clamped=new Uint8ClampedArray(this.width*this.height*4)),this.imageData=new ImageData(this.width,this.height),this.name?(this.cacheName=d.generateName(this.name,this.width,this.height,this.color,this.toneIndex),this.frames=d.getCache(this.cacheName)):this.frames=new Map}clearCache(){this.cachingDelta!==1/0&&(this.cacheName&&d.getCacheCounter(this.cacheName)>1||this.frames.clear())}sendQuery(t,...e){this.worker.sendQuery(t,this.reqId,...e)}loadFromData(t){this.sendQuery("loadFromData",t,this.width,this.height,this.toneIndex)}play(){this.paused&&(this.paused=!1,this.setMainLoop())}pause(t=!0){this.paused||(this.paused=!0,t&&clearTimeout(this.rafId))}resetCurrentFrame(){var t;return this.curFrame=null!==(t=this.initFrame)&&void 0!==t?t:1===this.direction?this.minFrame:this.maxFrame}stop(t=!0){this.pause();const e=this.resetCurrentFrame();t&&this.requestFrame(e)}restart(){this.stop(!1),this.play()}setSpeed(t){this.speed!==t&&(this.speed=t,this.paused||this.setMainLoop())}setDirection(t){this.direction!==t&&(this.direction=t,this.paused||this.setMainLoop())}remove(){c.a.onDestroy(this.reqId),this.pause(),this.sendQuery("destroy"),this.cacheName&&d.releaseCache(this.cacheName),this.cleanup()}applyColor(t){const[e,s,i]=this.color;for(let n=0,r=t.length;n<r;n+=4)0!==t[n+3]&&(t[n]=e,t[n+1]=s,t[n+2]=i)}applyInversing(t){const[e,s,i]=this.inverseColor;for(let n=0,r=t.length;n<r;n+=4)0===t[n+3]?(t[n]=e,t[n+1]=s,t[n+2]=i,t[n+3]=255):t[n+3]=0}renderFrame2(t,e){try{this.color&&this.applyColor(t),this.inverseColor&&this.applyInversing(t),this.imageData.data.set(t),this.context.putImageData(this.imageData,0,0)}catch(t){return console.error("RLottiePlayer renderFrame error:",t,this.width,this.height),this.autoplay=!1,void this.pause()}this.dispatchEvent("enterFrame",e)}renderFrame(t,e){if(this.cachingDelta&&(e%this.cachingDelta||!e)&&!this.frames.has(e)&&this.frames.set(e,new Uint8ClampedArray(t)),this.frInterval){const s=Date.now()-this.frThen;if(s<0)return this.rafId&&clearTimeout(this.rafId),this.rafId=window.setTimeout(()=>{this.renderFrame2(t,e)},this.frInterval>-s?-s%this.frInterval:this.frInterval)}this.renderFrame2(t,e)}requestFrame(t){const e=this.frames.get(t);e?this.renderFrame(e,t):(this.clamped&&!this.clamped.length&&(this.clamped=new Uint8ClampedArray(this.width*this.height*4)),this.sendQuery("renderFrame",t,this.clamped))}onLap(){return!!this.loop||(this.pause(!1),!1)}mainLoopForwards(){const{skipDelta:t,maxFrame:e}=this,s=this.curFrame+t>e?this.curFrame=this.loop?this.minFrame:this.maxFrame:this.curFrame+=t;return this.requestFrame(s),!(s+t>e)||this.onLap()}mainLoopBackwards(){const{skipDelta:t,minFrame:e}=this,s=this.curFrame-t<e?this.curFrame=this.loop?this.maxFrame:this.minFrame:this.curFrame-=t;return this.requestFrame(s),!(s-t<e)||this.onLap()}setMainLoop(){clearTimeout(this.rafId),this.frInterval=1e3/this.fps/this.speed*this.skipDelta,this.frThen=Date.now()-this.frInterval;const t=(1===this.direction?this.mainLoopForwards:this.mainLoopBackwards).bind(this);if(this.currentMethod=t,this.frameListener){void 0!==this.listenerResults.enterFrame&&this.frameListener(this.curFrame)}}playPart(t){this.pause();const{from:e,to:s,callback:i}=t;return this.curFrame=e-1,this.playToFrame({frame:s,direction:s>e?1:-1,callback:i})}playToFrame(t){this.pause();const{frame:e,speed:s,callback:i,direction:n}=t;this.setDirection(void 0===n?this.curFrame>e?-1:1:n),void 0!==s&&this.setSpeed(s);const r=[this.curFrame,e];-1===this.direction&&r.reverse(),this.loop=!1,this.setMinMax(r[0],r[1]),this.playToFrameOnFrameCallback&&this.removeEventListener("enterFrame",this.playToFrameOnFrameCallback),i&&(this.playToFrameOnFrameCallback=t=>{t===e&&(this.removeEventListener("enterFrame",this.playToFrameOnFrameCallback),i())},this.addEventListener("enterFrame",this.playToFrameOnFrameCallback)),this.play()}setColor(t,e){this.color=t,e&&this.paused&&this.renderFrame2(this.imageData.data,this.curFrame)}setInverseColor(t){this.inverseColor=t}setMinMax(t=0,e=this.frameCount-1){this.minFrame=t,this.maxFrame=e}onLoad(t,e){return l(this,void 0,void 0,(function*(){this.frameCount=t,this.fps=e,this.setMinMax(),void 0!==this.initFrame&&(this.initFrame=Object(h.a)(this.initFrame,this.minFrame,this.maxFrame));const s=this.resetCurrentFrame();if(this.fps<60&&1!==this.skipDelta){const t=60/e;this.skipDelta=this.skipDelta/t|0}this.frInterval=1e3/this.fps/this.speed*this.skipDelta,this.frThen=Date.now()-this.frInterval,!this.skipFirstFrameRendering&&this.requestFrame(s),this.dispatchEvent("ready"),this.addEventListener("enterFrame",()=>{this.dispatchEvent("firstFrame"),!this.canvas.parentNode&&this.el&&this.el.appendChild(this.canvas),this.frameListener=()=>{if(this.paused)return;const t=Date.now();this.frThen=t+this.frInterval;this.currentMethod()||this.loop||!this.autoplay||(this.autoplay=!1)},this.addEventListener("enterFrame",this.frameListener),"none"===this.group&&this.autoplay&&this.play()},{once:!0})}))}}u.reqId=0},38:function(t,e,s){"use strict";s.d(e,"c",(function(){return h})),s.d(e,"a",(function(){return i}));var i,n=s(30),r=s(142),a=s(49);class o{constructor(t=0,e=t){this.width=t,this.height=e}aspect(t,e){return Object(r.a)(this.width,this.height,t.width,t.height,e)}aspectFitted(t){return this.aspect(t,!0)}aspectCovered(t){return this.aspect(t,!1)}}function h(t,e){return new o(t,e)}!function(t){t[t.mobile=0]="mobile",t[t.medium=1]="medium",t[t.large=2]="large"}(i||(i={}));class c extends a.a{constructor(){super(),this.screenSizes=[{key:i.mobile,value:600},{key:i.medium,value:1275},{key:i.large,value:1680}],this.sizes={handhelds:{regular:h(270,270),webpage:h(270,200),album:h(270,0),esgSticker:h(68,68),animatedSticker:h(180,180),staticSticker:h(180,180),emojiSticker:h(112,112),poll:h(240,0),round:h(200,200),documentName:h(200,0)},desktop:{regular:h(420,340),webpage:h(420,340),album:h(420,0),esgSticker:h(80,80),animatedSticker:h(200,200),staticSticker:h(200,200),emojiSticker:h(112,112),poll:h(330,0),round:h(280,280),documentName:h(240,0)}},this.isMobile=!1,this.handleResize=()=>{const t=window.innerWidth;let e=this.screenSizes[0].key;for(let s=this.screenSizes.length-1;s>=0;--s)if(this.screenSizes[s].value<t){e=(this.screenSizes[s+1]||this.screenSizes[s]).key;break}const s=this.activeScreen;this.activeScreen=e,this.isMobile=this.activeScreen===i.mobile,this.active=this.isMobile?this.sizes.handhelds:this.sizes.desktop,s!==e&&void 0!==s&&this.dispatchEvent("changeScreen",s,e),void 0!==s&&this.dispatchEvent("resize")},window.addEventListener("resize",()=>{this.rAF&&window.cancelAnimationFrame(this.rAF),this.rAF=window.requestAnimationFrame(()=>{this.handleResize(),this.rAF=0})}),this.handleResize()}}const l=new c;n.a.mediaSizes=l,e.b=l},50:function(t,e,s){"use strict";function i(){return new Worker(s.p+"rlottie.worker.086dfed03cbca80766c6.bundle.worker.js")}var n=s(62),r=s(30),a=s(80),o=s(41),h=s(32),c=s(188),l=s(0),d=s(49);class u extends d.a{constructor(t){super(),this.worker=t,this.worker.onerror=t=>{try{this.dispatchEvent("workerError",t),this.cleanup(),this.terminate()}catch(t){}},this.worker.onmessage=t=>{this.dispatchEvent(t.data.queryMethodListener,...t.data.queryMethodArguments)}}postMessage(t){this.worker.postMessage(t)}terminate(){this.worker.terminate()}sendQuery(t,...e){if(l.IS_SAFARI)this.worker.postMessage({queryMethod:t,queryMethodArguments:e});else{const s=[];e.forEach(t=>{t instanceof ArrayBuffer&&s.push(t),"object"==typeof t&&t.buffer instanceof ArrayBuffer&&s.push(t.buffer)}),this.worker.postMessage({queryMethod:t,queryMethodArguments:e},s)}}}var m=s(95),p=function(t,e,s,i){return new(s||(s=Promise))((function(n,r){function a(t){try{h(i.next(t))}catch(t){r(t)}}function o(t){try{h(i.throw(t))}catch(t){r(t)}}function h(t){var e;t.done?n(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(a,o)}h((i=i.apply(t,e||[])).next())}))};const f=new class{constructor(){this.isWebAssemblySupported="undefined"!=typeof WebAssembly,this.loadPromise=this.isWebAssemblySupported?void 0:Promise.reject(),this.loaded=!1,this.workersLimit=4,this.players={},this.workers=[],this.curWorkerNum=0,this.log=Object(o.b)("LOTTIE",o.a.Error),this.onPlayerLoaded=(t,e,s)=>{const i=this.players[t];i?(this.log.debug("onPlayerLoaded"),i.onLoad(e,s)):this.log.warn("onPlayerLoaded on destroyed player:",t,e)},this.onFrame=(t,e,s)=>{const i=this.players[t];i?(void 0!==i.clamped&&(i.clamped=s),i.renderFrame(s,e)):this.log.warn("onFrame on destroyed player:",t,e)},this.onPlayerError=(t,e)=>{const s=this.players[t];if(s){n.a.getAnimations(s.el).forEach(t=>{n.a.checkAnimation(t,!0,!0)})}}}getAnimation(t){for(const e in this.players)if(this.players[e].el===t)return this.players[e];return null}setLoop(t){for(const e in this.players){const s=this.players[e];s.loop=t,s.autoplay=s._autoplay}}loadLottieWorkers(){return this.loadPromise?this.loadPromise:this.loadPromise=new Promise((t,e)=>{let s=this.workersLimit;for(let n=0;n<this.workersLimit;++n){const r=this.workers[n]=new u(new i);r.addEventListener("ready",()=>{this.log("worker #"+n+" ready"),r.addEventListener("frame",this.onFrame),r.addEventListener("loaded",this.onPlayerLoaded),r.addEventListener("error",this.onPlayerError),--s,s||(this.log("workers ready"),t(),this.loaded=!0)},{once:!0}),r.addEventListener("workerError",t=>{e("rlottie load error: "+t.message),this.loaded=!1},{once:!0})}})}loadAnimationAsAsset(t,e){return t.name=e,this.loadAnimationFromURL(t,"assets/tgs/"+e+".json")}loadAnimationFromURL(t,e){return this.isWebAssemblySupported?(this.loaded||this.loadLottieWorkers(),fetch(e).then(t=>t.headers&&"application/octet-stream"!==t.headers.get("content-type")?t.blob():t.arrayBuffer().then(t=>h.a.invokeCrypto("gzipUncompress",t)).then(t=>Object(m.a)(t,""))).then(s=>{const i=Object.assign(t,{animationData:s,needUpscale:!0});return i.name||(i.name=e),this.loadAnimationWorker(i)})):this.loadPromise}waitForFirstFrame(t){return Promise.race([new Promise(e=>{t.addEventListener("firstFrame",e,{once:!0})}),Object(a.a)(2500)]).then(()=>t)}loadAnimationWorker(t,e=t.group||"",s){return p(this,void 0,void 0,(function*(){if(!this.isWebAssemblySupported)return this.loadPromise;if(this.loaded||(yield this.loadLottieWorkers()),s&&!s())throw new Error("middleware");if(t.width&&t.height||(t.width=parseInt(t.container.style.width),t.height=parseInt(t.container.style.height)),!t.width||!t.height)throw new Error("No size for sticker!");t.group=e;const i=this.initPlayer(t.container,t);return"none"!==e&&n.a.addAnimation(i,e),i}))}onDestroy(t){delete this.players[t]}destroyWorkers(){this.workers.forEach((t,e)=>{t.terminate(),this.log("worker #"+e+" terminated")}),this.log("workers destroyed"),this.workers.length=0}initPlayer(t,e){const s=new c.a({el:t,worker:this.workers[this.curWorkerNum++],options:e});return this.players[s.reqId]=s,this.curWorkerNum>=this.workers.length&&(this.curWorkerNum=0),s.loadFromData(e.animationData),s}};r.a.lottieLoader=f;e.a=f},58:function(t,e,s){"use strict";function i(t,e){const s=t.indexOf(e),i=-1!==s&&t.splice(s,1);return i&&i[0]}s.d(e,"a",(function(){return i}))},62:function(t,e,s){"use strict";var i=s(15),n=s(0),r=s(30),a=s(92),o=s(188),h=s(58),c=s(67);const l=new class{constructor(){this.visible=new Set,this.byGroups={},this.lockedGroups={},this.onlyOnePlayableGroup="",this.intersectionLockedGroups={},this.videosLocked=!1,this.observer=new IntersectionObserver(t=>{for(const e of t){const t=e.target;for(const s in this.byGroups){if(this.intersectionLockedGroups[s])continue;const i=this.byGroups[s].find(e=>e.el===t);if(i){if(e.isIntersecting)this.visible.add(i),this.checkAnimation(i,!1);else{this.visible.delete(i),this.checkAnimation(i,!0);const t=i.animation;t instanceof o.a&&t.clearCache()}break}}}}),this.overrideIdleGroups=new Set,i.default.addEventListener("media_play",({doc:t})=>{"round"===t.type&&(this.videosLocked=!0,this.checkAnimations())}),i.default.addEventListener("media_pause",()=>{this.videosLocked&&(this.videosLocked=!1,this.checkAnimations())})}setOverrideIdleGroup(t,e){e?this.overrideIdleGroups.add(t):this.overrideIdleGroups.delete(t)}getAnimations(t){const e=[];for(const s in this.byGroups)for(const i of this.byGroups[s])i.el===t&&e.push(i);return e}removeAnimation(t){const{el:e,animation:s}=t;s.remove(),s instanceof HTMLVideoElement&&n.IS_SAFARI&&setTimeout(()=>{s.src="",s.load()},1e3);const i=this.byGroups[t.group];i&&(Object(h.a)(i,t),i.length||delete this.byGroups[t.group]),this.observer.unobserve(e),this.visible.delete(t)}addAnimation(t,e=""){var s;const n={el:t instanceof o.a?t.el:t,animation:t,group:e};t instanceof o.a&&!i.default.settings.stickers.loop&&t.loop&&(t.loop=i.default.settings.stickers.loop),(null!==(s=this.byGroups[e])&&void 0!==s?s:this.byGroups[e]=[]).push(n),this.observer.observe(n.el)}checkAnimations(t,e,s=!1){if(void 0!==e&&!this.byGroups[e])return;const i=void 0!==e?[e]:Object.keys(this.byGroups);for(const e of i){const i=this.byGroups[e];Object(c.a)(i,e=>{this.checkAnimation(e,t,s)})}}checkAnimation(t,e=!1,s=!1){const{el:n,animation:r,group:o}=t;s||!Object(a.a)(n)&&!this.lockedGroups[o]?this.removeAnimation(t):e||this.onlyOnePlayableGroup&&this.onlyOnePlayableGroup!==o||r instanceof HTMLVideoElement&&this.videosLocked?r.paused||r.pause():!(r.paused&&this.visible.has(t)&&r.autoplay)||this.onlyOnePlayableGroup&&this.onlyOnePlayableGroup!==o||i.default.idle.isIDLE&&!this.overrideIdleGroups.has(t.group)||r.play()}setOnlyOnePlayableGroup(t){this.onlyOnePlayableGroup=t}lockGroup(t){this.lockedGroups[t]=!0}unlockGroup(t){delete this.lockedGroups[t],this.checkAnimations(void 0,t)}refreshGroup(t){const e=this.byGroups[t];e&&e.length&&(e.forEach(t=>{this.observer.unobserve(t.el)}),window.requestAnimationFrame(()=>{e.forEach(t=>{this.observer.observe(t.el)})}))}lockIntersectionGroup(t){this.intersectionLockedGroups[t]=!0}unlockIntersectionGroup(t){delete this.intersectionLockedGroups[t],this.refreshGroup(t)}};r.a&&(r.a.animationIntersector=l),e.a=l},67:function(t,e,s){"use strict";function i(t,e){for(let s=t.length-1;s>=0;--s)e(t[s],s,t)}s.d(e,"a",(function(){return i}))},69:function(t,e,s){"use strict";s.d(e,"a",(function(){return d}));var i=s(50),n=s(129),r=s(30),a=s(87),o=s(93);const h=new class{constructor(){this.pageId=-1,this.pagesDiv=document.getElementById("auth-pages"),this.scrollableDiv=this.pagesDiv.querySelector(".scrollable"),this.selectTab=Object(n.a)(null,this.scrollableDiv.querySelector(".tabs-container"),null,()=>{var t;(null===(t=this.page)||void 0===t?void 0:t.onShown)&&this.page.onShown()})}setPage(t){if(t.isAuthPage){this.pagesDiv.style.display="";let e=Object(o.a)(t.pageEl);if(this.pageId===e)return;this.selectTab(e),-1!==this.pageId&&e>1&&i.a.loadLottieWorkers(),this.pageId=e,this.scrollableDiv&&Object(a.b)({container:this.scrollableDiv,element:this.scrollableDiv.firstElementChild,position:"start"})}else this.pagesDiv.style.display="none",t.pageEl.style.display="",this.pageId=-1;this.page=t}};r.a.pagesManager=h;var c=h,l=function(t,e,s,i){return new(s||(s=Promise))((function(n,r){function a(t){try{h(i.next(t))}catch(t){r(t)}}function o(t){try{h(i.throw(t))}catch(t){r(t)}}function h(t){var e;t.done?n(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(a,o)}h((i=i.apply(t,e||[])).next())}))};class d{constructor(t,e,s,i,n){this.isAuthPage=e,this.onFirstMount=s,this.onMount=i,this.onShown=n,this.installed=!1,this.pageEl=document.body.querySelector("."+t)}mount(...t){return l(this,void 0,void 0,(function*(){if(this.onMount&&this.onMount(...t),!this.installed){if(this.onFirstMount)try{const e=this.onFirstMount(...t);e instanceof Promise&&(yield e)}catch(t){console.error("PAGE MOUNT ERROR:",t)}this.installed=!0}c.setPage(this)}))}}},82:function(t,e,s){"use strict";s.d(e,"b",(function(){return d})),s.d(e,"d",(function(){return m})),s.d(e,"c",(function(){return p}));var i=s(51),n=s(15),r=s(30),a=s(80);let o=!1,h=Object(i.a)(),c=0;h.resolve();const l=console.log.bind(console.log,"[HEAVY-ANIMATION]:");function d(t,e){o||(h=Object(i.a)(),n.default.dispatchEvent("event-heavy-animation-start"),o=!0,r.b&&l("start")),++c,r.b&&l("attach promise, length:",c,e);const s=[void 0!==e?Object(a.a)(e):void 0,t.finally(()=>{})].filter(Boolean),d=performance.now(),m=h;return Promise.race(s).then(()=>{h!==m||h.isFulfilled||(--c,r.b&&l("promise end, length:",c,performance.now()-d),c<=0&&u())}),h}function u(){h.isFulfilled||(o=!1,c=0,n.default.dispatchEvent("event-heavy-animation-end"),h.resolve(),r.b&&l("end"))}function m(){u()}function p(){return h}e.a=function(t,e,s){o&&t();const i=s?s.add(n.default):n.default.addEventListener.bind(n.default),r=s?s.removeManual.bind(s,n.default):n.default.removeEventListener.bind(n.default);return i("event-heavy-animation-start",t),i("event-heavy-animation-end",e),()=>{r("event-heavy-animation-end",e),r("event-heavy-animation-start",t)}}},87:function(t,e,s){"use strict";s.d(e,"a",(function(){return h})),s.d(e,"b",(function(){return c}));var i=s(82),n=s(7),r=s(114),a=s(15),o=s(92);var h;function c(t){if(void 0===t.margin&&(t.margin=0),void 0===t.maxDistance&&(t.maxDistance=1500),void 0===t.axis&&(t.axis="y"),a.default.settings.animationsEnabled||(t.forceDirection=h.Static),t.forceDirection===h.Static)return t.forceDuration=0,l(t);const e=Object(n.d)().then(()=>l(t));return"y"===t.axis?Object(i.b)(e):e}function l(t){const{element:e,container:s,getNormalSize:i,axis:n,margin:a,position:h,forceDirection:c,maxDistance:m,forceDuration:p}=t;if(!Object(o.a)(e))return Object(r.c)(s),Promise.resolve();const f="y"===n?"top":"left",g="y"===n?"bottom":"right",v="y"===n?"height":"width",b="y"===n?"scrollHeight":"scrollWidth",y="y"===n?"scrollTop":"scrollLeft",w=e.getBoundingClientRect(),k=s.getBoundingClientRect?s.getBoundingClientRect():document.body.getBoundingClientRect(),S=w[f]-k[f],L=e[b],F=i?i({rect:k}):k[v];let E=s[y];const I=s[b];let O;switch(h){case"start":O=S-a;break;case"end":O=w[g]-k[g]+a;break;case"nearest":case"center":if(L<F)O=S+L/2-F/2;else{if(t.fallbackToElementStartWhenCentering&&t.fallbackToElementStartWhenCentering!==e)return t.element=t.fallbackToElementStartWhenCentering,t.position="start",l(t);O=S-a}}if(Math.abs(O-(a||0))<1)return Object(r.c)(s),Promise.resolve();if("y"===n&&void 0===c&&(O>m?(E=s.scrollTop+=O-m,O=m):O<-m&&(E=s.scrollTop+=O+m,O=-m)),O<0){const t=-E;O=Math.max(O,t)}else if(O>0){const t=I-(E+F);O=Math.min(O,t)}const P=s[y]+O,M=Math.abs(O),A=null!=p?p:250+M/1500*350,D=Date.now(),j=M<500?u:d,C=()=>{const t=A?Math.min((Date.now()-D)/A,1):1,e=O*(1-j(t));return s[y]=Math.round(P-e),t<1};if(!A||!O)return Object(r.c)(s),C(),Promise.resolve();if(t.startCallback){const e=I-Math.round(P+s["y"===n?"offsetHeight":"offsetWidth"]);t.startCallback({scrollSize:I,scrollPosition:E,distanceToEnd:e,path:O,duration:A,containerRect:k,elementRect:w})}return Object(r.b)(C,s)}function d(t){return 1-Math.pow(1-t,5)}function u(t){return 1-Math.pow(1-t,3.5)}!function(t){t[t.Up=0]="Up",t[t.Down=1]="Down",t[t.Static=2]="Static"}(h||(h={}))},92:function(t,e,s){"use strict";function i(t){return null==t?void 0:t.isConnected}s.d(e,"a",(function(){return i}))},93:function(t,e,s){"use strict";function i(t){if(!t.parentNode)return-1;let e=0;for(;null!==(t=t.previousElementSibling);)++e;return e}s.d(e,"a",(function(){return i}))},97:function(t,e,s){"use strict";function i(t,e){if(t.parentElement===e)return t;for(;t.parentElement;)if((t=t.parentElement).parentElement===e)return t;return null}s.d(e,"a",(function(){return i}))}}]);
//# sourceMappingURL=2.b7f6240317a9b5aa3720.chunk.js.map