(()=>{"use strict";(()=>{if("undefined"!=typeof __webpack_require__){var e=__webpack_require__.u,t=__webpack_require__.e,r=new Map,i=new Map;__webpack_require__.u=function(t){return e(t)+(r.has(t)?"?"+r.get(t):"")},__webpack_require__.e=function(n){return t(n).catch((function(t){var o=i.has(n)?i.get(n):999999;if(o<1){var a=e(n);throw t.message="Loading chunk "+n+" failed after 999999 retries.\n("+a+")",t.request=a,t}return new Promise((function(e){setTimeout((function(){var t=Date.now();r.set(n,t),i.set(n,o-1),e(__webpack_require__.e(n))}),3e3)}))}))}}})();const e="undefined"!=typeof window?window:self,t=navigator?navigator.userAgent:null,r=(navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),navigator.userAgent.toLowerCase().indexOf("android"),/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),(/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&e.MSStream,!!("safari"in e)||!(!t||!(/\b(iPad|iPhone|iPod)\b/.test(t)||t.match("Safari")&&!t.match("Chrome"))));let i;if(navigator.userAgent.toLowerCase().indexOf("firefox"),navigator.maxTouchPoints>0&&navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i),r)try{i=+navigator.userAgent.match(/Version\/(.+?) /)[1]>=14}catch(e){i=!1}else i=!0;const n=i;const o=[[[16219713,13335381],[16757049,16168585],[16765248,16764327],[16768889,16768965]],[[16219713,10771e3],[16757049,14653547],[16765248,15577475],[16768889,16040864]],[[16219713,7354903],[16757049,11233085],[16765248,12812110],[16768889,14194279]],[[16219713,4858889],[16757049,8207886],[16765248,9852201],[16768889,11100983]],[[16219713,2101002],[16757049,4270372],[16765248,5848375],[16768889,6505791]]];let a=e=>Math.round(255*Math.min(Math.max(e,0),1));importScripts("rlottie-wasm.js");const s=self.Module;class h{constructor(e,t,r){this.reqId=e,this.width=t,this.height=r}init(e,t){if(!this.dead){this.fps=Math.max(1,Math.min(60,t||60));try{this.handle=c.Api.init(),this.stringOnWasmHeap=allocate(intArrayFromString(e),"i8",0),this.frameCount=c.Api.loadFromData(this.handle,this.stringOnWasmHeap),c.Api.resize(this.handle,this.width,this.height),f("loaded",this.reqId,this.frameCount,this.fps)}catch(e){console.error("init RLottieItem error:",e),f("error",this.reqId,e)}}}render(e,t){if(!this.dead&&void 0!==this.handle&&!(this.frameCount<e||e<0))try{c.Api.render(this.handle,e);const r=c.Api.buffer(this.handle),i=s.HEAPU8.subarray(r,r+this.width*this.height*4);t?t.set(i):t=new Uint8ClampedArray(i),f("frame",this.reqId,e,t)}catch(e){console.error("Render error:",e),this.dead=!0,f("error",this.reqId,e)}}destroy(){this.dead=!0,void 0!==this.handle&&c.Api.destroy(this.handle)}}const c=new class{constructor(){this.Api={}}initApi(){this.Api={init:s.cwrap("lottie_init","",[]),destroy:s.cwrap("lottie_destroy","",["number"]),resize:s.cwrap("lottie_resize","",["number","number","number"]),buffer:s.cwrap("lottie_buffer","number",["number"]),render:s.cwrap("lottie_render","",["number","number"]),loadFromData:s.cwrap("lottie_load_from_data","number",["number","number"])}}init(){this.initApi(),f("ready")}};s.onRuntimeInitialized=function(){c.init()};const d={},u={loadFromData:function(e,t,r,i,n){const s=d[e]=new h(e,r,i);(function(e){return function(e,t){return new Promise((t=>{const r=new FileReader;r.addEventListener("loadend",(e=>{t(e.target.result)})),r.readAsText(e)}))}(e)})(t).then((t=>{try{if("number"==typeof n&&n>=1&&n<=5){const e=JSON.parse(t);(function(e,t){const r=o[Math.max(t-1,0)],i=e=>{switch(e.ty){case"st":case"fl":(e=>{const t=e.c.k,i=a(t[2])|a(t[1])<<8|a(t[0])<<16,n=r.find((e=>e[0]===i));n&&(t[0]=(n[1]>>16&255)/255,t[1]=(n[1]>>8&255)/255,t[2]=(255&n[1])/255)})(e)}e.hasOwnProperty("it")&&n(e.it)},n=e=>{for(const t of e)i(t)};try{for(const t of e.layers)if(t.shapes)for(const e of t.shapes)e.it?n(e.it):i(e)}catch(r){console.warn("cant apply replacements",r,e,t)}})(e,n),t=JSON.stringify(e)}const e=t.match(/"fr":\s*?(\d+?),/),r=+(null==e?void 0:e[1])||60;s.init(t,r)}catch(r){console.error("Invalid file for sticker:",t),f("error",e,r)}}))},destroy:function(e){const t=d[e];t&&(t.destroy(),delete d[e])},renderFrame:function(e,t,r){d[e].render(t,r)}};function f(...e){if(arguments.length<1)throw new TypeError("reply - not enough arguments");if(e=Array.prototype.slice.call(arguments,1),n){const t=[];for(let r=0;r<e.length;++r)e[r]instanceof ArrayBuffer&&t.push(e[r]),e[r].buffer&&e[r].buffer instanceof ArrayBuffer&&t.push(e[r].buffer);postMessage({queryMethodListener:arguments[0],queryMethodArguments:e},t)}else postMessage({queryMethodListener:arguments[0],queryMethodArguments:e})}onmessage=function(e){u[e.data.queryMethod].apply(u,e.data.queryMethodArguments)}})();
//# sourceMappingURL=641.be55089deabe08a3e958.chunk.js.map