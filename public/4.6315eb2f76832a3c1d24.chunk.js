(this.webpackJsonp=this.webpackJsonp||[]).push([[4],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var s=n(14);function i(e,t=!1){if(!s.a||t&&document.activeElement===e)if(e.focus(),void 0!==window.getSelection&&void 0!==document.createRange){var n=document.createRange();n.selectNodeContents(e),n.collapse(!1);var i=window.getSelection();i.removeAllRanges(),i.addRange(n)}else if(void 0!==document.body.createTextRange){var o=document.body.createTextRange();o.moveToElementText(e),o.collapse(!1),o.select()}}},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var s=n(7);const i=new Map;let o=0;const c=(e,t,n="")=>{n=t.country_code+n,o=Math.max(o,n.length),i.set(n,{country:e,code:t})};function a(e){e=e||"",i.size||s.c.countriesList.forEach(e=>{e.country_codes.forEach(t=>{t.prefixes?t.prefixes.forEach(n=>{c(e,t,n)}):c(e,t)})});let t,n=e.replace(/\D/g,""),a=n.slice(0,o);for(let e=a.length-1;e>=0&&(t=i.get(a.slice(0,e+1)),!t);--e);if(!t)return{formatted:n,country:void 0,code:void 0,leftPattern:""};const r=t.country,l=t.code.patterns||[],d=n.slice(t.code.country_code.length);let h="",u=0,p="";for(let e=l.length-1;e>=0;--e){h=l[e];const t=h.replace(/ /g,"");let n=0;for(let e=0,s=Math.min(d.length,t.length);e<s;++e){if(d[e]!==t[e]&&"X"!==t[e]){n=0;break}++n}n>u&&(u=n,p=h)}h=p||h,h=h.replace(/\d/g,"X"),h=t.code.country_code+" "+h,h.split("").forEach((e,t)=>{" "===e&&" "!==n[t]&&n.length>t&&(n=n.slice(0,t)+" "+n.slice(t))});let m=h&&h.length>n.length?h.slice(n.length):"";return m&&(m=m.replace(/X/g,"‒")),{formatted:n,country:r,code:t.code,leftPattern:m}}},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var s=n(117),i=n(118),o=n(2),c=n(64);class a extends c.b{constructor(e={}){super(Object.assign({label:"Contacts.PhoneNumber.Placeholder",name:"phone"},e)),this.pasted=!1,this.lastValue="",this.container.classList.add("input-field-phone");let t=this.input;if(t instanceof HTMLInputElement)t.type="tel",t.autocomplete="rr55RandomRR55";else{t.inputMode="decimal";const e=window.devicePixelRatio;if(e>1){let n;o.b?n=-.16*e:o.a&&(n=0),t.style.setProperty("--letter-spacing",n+"px")}const n=this.setValueSilently.bind(this);this.setValueSilently=e=>{n(e),Object(s.a)(this.input,!0)}}t.addEventListener("input",()=>{t.classList.remove("error");const n=this.value;let s;Math.abs(n.length-this.lastValue.length)>1&&!this.pasted&&o.c&&this.setValueSilently(this.lastValue+n),this.pasted=!1,this.setLabel();let c,a,r,l="";"+"===this.value.replace(/\++/,"+")?this.setValueSilently("+"):(s=Object(i.a)(this.value),c=s.formatted,a=s.country,l=s.leftPattern,r=s.code,this.setValueSilently(this.lastValue=c?"+"+c:"")),t.dataset.leftPattern=l,e.onInput&&e.onInput(s)}),t.addEventListener("paste",()=>{this.pasted=!0}),t.addEventListener("keypress",e=>{const t=e.key;if(/\D/.test(t)&&!e.metaKey&&!e.ctrlKey&&"Backspace"!==t&&("+"!==t||!e.shiftKey))return e.preventDefault(),!1})}}},164:function(e,t,n){"use strict";n.r(t);var s=n(60),i=n(65),o=n(34),c=n(8),a=n(27),r=n(88),l=n(64),d=n(68),h=n(57),u=n(101),p=n(14),m=n(5),g=n(7),f=n(69),b=n(75),v=n(83),L=n(33),y=n(21),S=n(12),E=n(184),w=n(161),k=n(122),x=n(32),O=n(56),j=n(58),A=n(76),T=n(6),_=n(117),P=n(28),C=n(111),H=n(11),M=n(0),N=n(151),V=n(23),D=function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function c(e){try{r(s.next(e))}catch(e){o(e)}}function a(e){try{r(s.throw(e))}catch(e){o(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}r((s=s.apply(e,t||[])).next())}))};let I,R=null;const B=new r.a("page-sign",!0,()=>{const e=()=>{t=g.c.countriesList.filter(e=>{var t;return!(null===(t=e.pFlags)||void 0===t?void 0:t.hidden)}).sort((e,t)=>(e.name||e.default_name).localeCompare(t.name||t.default_name))};let t;e(),M.a.addEventListener("language_change",()=>{e()});const r=new Map;let b,K;const F=document.createElement("div");F.classList.add("input-wrapper");const U=new l.b({label:"Login.CountrySelectorLabel",name:Object(y.b)()});U.container.classList.add("input-select");const W=U.input,z=document.createElement("div");z.classList.add("select-wrapper","z-depth-3","hide");const X=document.createElement("span");X.classList.add("arrow","arrow-down"),U.container.append(X);const q=document.createElement("ul");z.appendChild(q);new i.b(z);let J=()=>{J=null,t.forEach(e=>{const t=Object(P.c)(e.iso2),n=[];e.country_codes.forEach(s=>{const i=document.createElement("li");let o=a.a.wrapEmojiText(t);if(V.a){const e=document.createElement("span");e.innerHTML=o,i.append(e)}else i.innerHTML=o;const c=Object(g.d)(e.default_name);c.dataset.defaultName=e.default_name,i.append(c);const r=document.createElement("span");r.classList.add("phone-code"),r.innerText="+"+s.country_code,i.appendChild(r),n.push(i),q.append(i)}),r.set(e.iso2,n)}),q.addEventListener("mousedown",e=>{if(0!==e.button)return;const t=Object(v.a)(e.target,"LI");Q(t)}),U.container.appendChild(z)};const Q=e=>{const n=e.childNodes[1].dataset.defaultName,s=e.querySelector(".phone-code").innerText,i=s.replace(/\D/g,"");Object(j.a)(W,Object(g.d)(n)),Object(C.a)(W,"input"),b=t.find(e=>e.default_name===n),K=b.country_codes.find(e=>e.country_code===i),ee.value=ee.lastValue=s,Z(),setTimeout(()=>{te.focus(),Object(_.a)(te,!0)},0)};let Y;J(),W.addEventListener("focus",(function(e){J?J():t.forEach(e=>{r.get(e.iso2).forEach(e=>e.style.display="")}),clearTimeout(Y),Y=void 0,z.classList.remove("hide"),z.offsetWidth,z.classList.add("active"),U.select(),Object(u.b)({container:B.pageEl.parentElement.parentElement,element:W,position:"start",margin:4}),setTimeout(()=>{$||(document.addEventListener("mousedown",G,{capture:!0}),$=!0)},0)}));let $=!1;const G=e=>{Object(L.a)(e.target,"input-select")||e.target!==W&&(Z(),document.removeEventListener("mousedown",G,{capture:!0}),$=!1)},Z=()=>{void 0===Y&&(z.classList.remove("active"),Y=window.setTimeout(()=>{z.classList.add("hide"),Y=void 0},200))};W.addEventListener("keyup",e=>{const n=e.key;if(e.ctrlKey||"Control"===n)return!1;let s=U.value.toLowerCase(),i=[];t.forEach(e=>{const t=[e.name,e.default_name,e.iso2];t.filter(Boolean).forEach(e=>{const n=e.split(" ").filter(e=>/\w/.test(e)).map(e=>e[0]).join("");n.length>1&&t.push(n)});let n=!!t.filter(Boolean).find(e=>-1!==e.toLowerCase().indexOf(s));r.get(e.iso2).forEach(e=>e.style.display=n?"":"none"),n&&i.push(e)}),0===i.length?t.forEach(e=>{r.get(e.iso2).forEach(e=>e.style.display="")}):1===i.length&&"Enter"===n&&Q(r.get(i[0].iso2)[0])}),X.addEventListener("mousedown",(function(e){e.cancelBubble=!0,e.preventDefault(),W.matches(":focus")?W.blur():W.focus()}));const ee=new N.a({onInput:e=>{f.a.loadLottieWorkers();const{country:t,code:n}=e||{};let s=t?t.name||t.default_name:"";s===U.value||b&&t&&n&&(b===t||K.country_code===n.country_code)||(Object(j.a)(W,t?Object(g.d)(t.default_name):s),b=t,K=n),t||ee.value.length-1>1?R.style.visibility="":R.style.visibility="hidden"}}),te=ee.input;te.addEventListener("keypress",e=>{if(!R.style.visibility&&"Enter"===e.key)return se()});const ne=new d.a({text:"Login.KeepSigned",name:"keepSession",withRipple:!0,checked:!0});ne.input.addEventListener("change",()=>{const e=ne.checked;o.c.pushToState("keepSigned",e),S.a.toggleStorage(e),E.a.toggleStorage(e),c.a.toggleStorage(e),T.a.toggleStorage(e)}),o.c.getState().then(e=>{o.c.storage.isAvailable()?ne.checked=e.keepSigned:(ne.checked=!1,ne.label.classList.add("checkbox-disabled"))}),R=Object(h.a)("btn-primary btn-color-primary",{text:"Login.Next"}),R.style.visibility="hidden";const se=e=>{e&&Object(x.a)(e);const t=Object(A.a)([R,I],!0);Object(j.a)(R,Object(g.d)("PleaseWait")),Object(s.f)(R);let i=ee.value;c.a.invokeApi("auth.sendCode",{phone_number:i,api_id:m.a.id,api_hash:m.a.hash,settings:{_:"codeSettings"}}).then(e=>{n.e(18).then(n.bind(null,166)).then(t=>t.default.mount(Object.assign(e,{phone_number:i})))}).catch(e=>{switch(t(),e.type){case"PHONE_NUMBER_INVALID":ee.setError(),Object(j.a)(ee.label,Object(g.d)("Login.PhoneLabelInvalid")),te.classList.add("error"),Object(j.a)(R,Object(g.d)("Login.Next"));break;default:console.error("auth.sendCode error:",e),R.innerText=e.type}})};Object(O.b)(R,se),I=Object(h.a)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Login"});I.addEventListener("click",()=>{w.default.mount()}),F.append(U.container,ee.container,ne.label,R,I);const ie=document.createElement("h4");ie.classList.add("text-center"),Object(g.b)(ie,"Login.Title");const oe=document.createElement("div");oe.classList.add("subtitle","text-center"),Object(g.b)(oe,"Login.StartText"),B.pageEl.querySelector(".container").append(ie,oe,F);p.a||setTimeout(()=>{te.focus()},0),Object(k.a)(F),c.a.invokeApi("help.getNearestDc").then(e=>{var t;const n=H.a.getFromCache("langPack");n&&!(null===(t=n.countries)||void 0===t?void 0:t.hash)&&g.c.getLangPack(n.lang_code).then(()=>{Object(C.a)(te,"input")});const s=new Set([1,2,3,4,5]),i=[e.this_dc];let o;return e.nearest_dc!==e.this_dc&&(o=c.a.getNetworker(e.nearest_dc).then(()=>{i.push(e.nearest_dc)})),(o||Promise.resolve()).then(()=>{i.forEach(e=>{s.delete(e)});const e=[...s],t=()=>D(void 0,void 0,void 0,(function*(){const n=e.shift();if(!n)return;const s=`dc${n}_auth_key`;if(yield T.a.get(s))return t();setTimeout(()=>{c.a.getNetworker(n).finally(t)},3e3)}));t()}),e}).then(e=>{U.value.length||ee.value.length||Q(r.get(e.country)[0])})},()=>{R&&(Object(j.a)(R,Object(g.d)("Login.Next")),Object(b.a)(R,void 0,void 0,!0),R.removeAttribute("disabled")),I&&I.removeAttribute("disabled"),o.c.pushToState("authState",{_:"authStateSignIn"})});t.default=B},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var s=n(14),i=n(4),o=n(101),c=n(91),a=n(32);class r{constructor(e,t="",n=document.createElement("div")){this.el=e,this.container=n,this.onScrollMeasure=0,this.lastScrollPosition=0,this.lastScrollDirection=0,this.isHeavyAnimationInProgress=!1,this.needCheckAfterAnimation=!1,this.onScroll=()=>{if(this.isHeavyAnimationInProgress)return this.cancelMeasure(),void(this.needCheckAfterAnimation=!0);(this.onScrolledTop||this.onScrolledBottom||this.splitUp||this.onAdditionalScroll)&&(this.onScrollMeasure||(this.onScrollMeasure=window.requestAnimationFrame(()=>{this.onScrollMeasure=0;const e=this.container[this.scrollProperty];this.lastScrollDirection=this.lastScrollPosition===e?0:this.lastScrollPosition<e?1:-1,this.lastScrollPosition=e,this.onAdditionalScroll&&this.onAdditionalScroll(),this.checkForTriggers&&this.checkForTriggers()})))},this.container.classList.add("scrollable"),this.log=Object(i.b)("SCROLL"+(t?"-"+t:""),i.a.Error),e&&(Array.from(e.children).forEach(e=>this.container.append(e)),e.append(this.container))}addScrollListener(){this.addedScrollListener||(this.addedScrollListener=!0,this.container.addEventListener("scroll",this.onScroll,{passive:!0,capture:!0}))}removeScrollListener(){this.addedScrollListener&&(this.addedScrollListener=!1,this.container.removeEventListener("scroll",this.onScroll,{capture:!0}))}setListeners(){this.removeHeavyAnimationListener||(window.addEventListener("resize",this.onScroll,{passive:!0}),this.addScrollListener(),this.removeHeavyAnimationListener=Object(c.a)(()=>{this.isHeavyAnimationInProgress=!0,this.onScrollMeasure&&(this.cancelMeasure(),this.needCheckAfterAnimation=!0)},()=>{this.isHeavyAnimationInProgress=!1,this.needCheckAfterAnimation&&(this.onScroll(),this.needCheckAfterAnimation=!1)}))}removeListeners(){this.removeHeavyAnimationListener&&(window.removeEventListener("resize",this.onScroll),this.removeScrollListener(),this.removeHeavyAnimationListener(),this.removeHeavyAnimationListener=void 0)}append(e){this.container.append(e)}scrollIntoViewNew(e){return Object(o.b)(Object.assign(Object.assign({},e),{container:this.container}))}cancelMeasure(){this.onScrollMeasure&&(window.cancelAnimationFrame(this.onScrollMeasure),this.onScrollMeasure=0)}}class l extends r{constructor(e,t="",n=300,s){super(e,t),this.onScrollOffset=n,this.loadedAll={top:!0,bottom:!1},this.checkForTriggers=()=>{if(!this.onScrolledTop&&!this.onScrolledBottom)return;if(this.isHeavyAnimationInProgress)return void this.onScroll();const e=this.container.scrollHeight;if(!e)return;const t=e-this.container.clientHeight,n=this.lastScrollPosition;this.onScrolledTop&&n<=this.onScrollOffset&&this.lastScrollDirection<=0&&this.onScrolledTop(),this.onScrolledBottom&&t-n<=this.onScrollOffset&&this.lastScrollDirection>=0&&this.onScrolledBottom()},this.container.classList.add("scrollable-y"),this.setListeners(),this.scrollProperty="scrollTop"}setVirtualContainer(e){this.splitUp=e,this.log("setVirtualContainer:",e,this)}prepend(...e){(this.splitUp||this.padding||this.container).prepend(...e)}append(...e){(this.splitUp||this.padding||this.container).append(...e)}getDistanceToEnd(){return this.scrollHeight-Math.round(this.scrollTop+this.container.offsetHeight)}get isScrolledDown(){return this.getDistanceToEnd()<=1}set scrollTop(e){this.container.scrollTop=e}get scrollTop(){return this.container.scrollTop}setScrollTopSilently(e){this.lastScrollPosition=e,this.ignoreNextScrollEvent(),this.scrollTop=e}ignoreNextScrollEvent(){this.removeHeavyAnimationListener&&(this.removeScrollListener(),this.container.addEventListener("scroll",e=>{Object(a.a)(e),this.addScrollListener()},{capture:!0,passive:!1,once:!0}))}get scrollHeight(){return this.container.scrollHeight}}class d extends r{constructor(e,t="",n=300,i=15,o=document.createElement("div")){if(super(e,t,o),this.onScrollOffset=n,this.splitCount=i,this.container=o,this.container.classList.add("scrollable-x"),!s.a){const e=e=>{!e.deltaX&&this.container.scrollWidth>this.container.clientWidth&&(this.container.scrollLeft+=e.deltaY/4,Object(a.a)(e))};this.container.addEventListener("wheel",e,{passive:!1})}this.scrollProperty="scrollLeft"}}},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var s=n(34),i=n(75),o=n(7),c=n(44);class a{constructor(e={}){const t=this.label=document.createElement("label");t.classList.add("checkbox-field"),e.restriction&&t.classList.add("checkbox-field-restriction"),e.round&&t.classList.add("checkbox-field-round"),e.disabled&&this.toggleDisability(!0);const n=this.input=document.createElement("input");let a;if(n.classList.add("checkbox-field-input"),n.type="checkbox",e.name&&(n.id="input-"+e.name),e.checked&&(n.checked=!0),e.stateKey&&s.c.getState().then(t=>{const i=Object(c.a)(t,e.stateKey);let o;o=e.stateValues?1===e.stateValues.indexOf(i):i,this.setValueSilently(o),n.addEventListener("change",()=>{let t;t=e.stateValues?e.stateValues[n.checked?1:0]:n.checked,s.c.setByKey(e.stateKey,t)})}),e.text?(a=this.span=document.createElement("span"),a.classList.add("checkbox-caption"),Object(o.b)(a,e.text,e.textArgs)):t.classList.add("checkbox-without-caption"),t.append(n),e.toggle){t.classList.add("checkbox-field-toggle");const e=document.createElement("div");e.classList.add("checkbox-toggle"),t.append(e)}else{const e=document.createElement("div");e.classList.add("checkbox-box");const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.classList.add("checkbox-box-check"),n.setAttributeNS(null,"viewBox","0 0 24 24");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS(null,"href","#check"),s.setAttributeNS(null,"x","-1"),n.append(s);const i=document.createElement("div");i.classList.add("checkbox-box-background");const o=document.createElement("div");o.classList.add("checkbox-box-border"),e.append(o,i,n),t.append(e)}a&&t.append(a),e.withRipple?(t.classList.add("checkbox-ripple","hover-effect"),Object(i.a)(t,void 0,void 0,!0)):e.withHover&&t.classList.add("hover-effect")}get checked(){return this.input.checked}set checked(e){this.setValueSilently(e);const t=new Event("change",{bubbles:!0,cancelable:!0});this.input.dispatchEvent(t)}setValueSilently(e){this.input.checked=e}toggleDisability(e){return this.label.classList.toggle("checkbox-disabled",e),()=>this.toggleDisability(!e)}}},76:function(e,t,n){"use strict";function s(e,t){return t?e.forEach(e=>e.setAttribute("disabled","true")):e.forEach(e=>e.removeAttribute("disabled")),()=>s(e,!t)}n.d(t,"a",(function(){return s}))},83:function(e,t,n){"use strict";function s(e,t){return e.closest(t)}n.d(t,"a",(function(){return s}))}}]);
//# sourceMappingURL=4.6315eb2f76832a3c1d24.chunk.js.map