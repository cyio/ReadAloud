(function(e){function n(n){for(var o,c,a=n[0],s=n[1],l=n[2],f=0,p=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(n);while(p.length)p.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,a=1;a<t.length;a++){var s=t[a];0!==r[s]&&(o=!1)}o&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},i=[];function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var u=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"249e":function(e,n){self.addEventListener("install",(function(e){console.log("[ServiceWorker] Install")})),self.addEventListener("activate",(function(e){})),self.addEventListener("fetch",(function(e){}))},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],c=(t("5c0b"),t("2877")),a={},s=Object(c["a"])(a,r,i,!1,null,null,null),l=s.exports,u=t("9483");Object(u["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("249e");var f,p,d=t("8c4f"),v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:e.value},on:{input:function(n){n.target.composing||(e.value=n.target.value)}}}),t("input",{staticClass:"flex-fill",attrs:{id:"rate",type:"range",min:"0.5",max:"1.5",value:"1",step:"0.01"}}),t("select",{staticClass:"col-9",attrs:{id:"voiceSelect"}}),t("button",{attrs:{id:"play"},on:{click:e.onClick}},[e._v("播放")])])},h=[];t("d3b7"),t("d81d"),t("4de4"),t("b0c0"),t("2ca0"),t("5319"),t("ac1f"),t("466d"),t("99af"),t("6f8e"),window.speechSynthesis;navigator.serviceWorker&&navigator.serviceWorker.register("./sw.js");var g={name:"Home",components:{},data:function(){return{value:""}},created:function(){},beforeMount:function(){},mounted:function(){this.populateVoiceList()},updated:function(){},beforeDestroy:function(){},methods:{populateVoiceList:function(){"undefined"!==typeof speechSynthesis&&new Promise((function(e,n){setTimeout((function(){f=speechSynthesis.getVoices(),e(f)}),200)})).then((function(e){e=e.filter((function(e){return/^(Microsoft|Google) /.test(e.name)})).map((function(e){return e.name.startsWith("Google ")?e.displayName=e.name.replace(/^Google /,""):e.name.startsWith("Microsoft")&&(p=e.name.match(/^Microsoft (.+) Online.*- (.+)/),e.displayName="".concat(p[2]," - ").concat(p[1])),e})).sort((function(e,n){return e.displayName.localeCompare(n.displayName)})),voiceSelect.innerHTML="";for(var n=0;n<e.length;n++){var t=document.createElement("option");t.textContent=e[n].displayName,voiceSelect.appendChild(t)}}))},speak:function(){var e=new SpeechSynthesisUtterance(this.value);e.onend=function(e){console.log("SpeechSynthesisUtterance.onend"),play.textContent="► Play"},e.onerror=function(e){console.error("SpeechSynthesisUtterance.onerror")},e.voice=f[voiceSelect.selectedIndex],e.rate=rate.value,speechSynthesis.speak(e)},onClick:function(){if(speechSynthesis.speaking)speechSynthesis.cancel(),play.textContent="► Play";else{if(""===this.value)return;this.speak(),play.textContent="■ Stop"}}}},m=g,y=Object(c["a"])(m,v,h,!1,null,null,null),b=y.exports;o["a"].use(d["a"]);var w=[{path:"/",name:"Home",component:b}],S=new d["a"]({routes:w,mode:"hash"});o["a"].config.productionTip=!1,new o["a"]({router:S,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"6f8e":function(e,n){"serviceWorker"in navigator&&(console.log(123),console.log(navigator),navigator.serviceWorker.register("/service-worker.js"))},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.bba5f4cc.js.map