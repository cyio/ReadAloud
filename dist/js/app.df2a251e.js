(function(e){function t(t){for(var o,i,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d5be1ecf"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],i=(n("5c0b"),n("2877")),c={},s=Object(i["a"])(c,r,a,!1,null,null,null),u=s.exports,l=n("9483");Object(l["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var p,f,d=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),n("input",{staticClass:"flex-fill",attrs:{id:"rate",type:"range",min:"0.5",max:"1.5",value:"1",step:"0.01"}}),n("select",{staticClass:"col-9",attrs:{id:"voiceSelect"}}),n("button",{attrs:{id:"play"},on:{click:e.onClick}},[e._v("播放")])])},h=[],m=(n("d81d"),n("4de4"),n("b0c0"),n("2ca0"),n("5319"),n("ac1f"),n("466d"),n("99af"),{name:"Home",components:{},data:function(){return{value:""}},created:function(){},mounted:function(){speechSynthesis.onvoiceschanged=populateVoiceList()},methods:{populateVoiceList:function(){p=speechSynthesis.getVoices().filter((function(e){return/^(Microsoft|Google) /.test(e.name)})).map((function(e){return e.name.startsWith("Google ")?e.displayName=e.name.replace(/^Google /,""):e.name.startsWith("Microsoft")&&(f=e.name.match(/^Microsoft (.+) Online.*- (.+)/),e.displayName="".concat(f[2]," - ").concat(f[1])),e})).sort((function(e,t){return e.displayName.localeCompare(t.displayName)})),voiceSelect.innerHTML="";for(var e=0;e<p.length;e++){var t=document.createElement("option");t.textContent=p[e].displayName,voiceSelect.appendChild(t)}},speak:function(){var e=new SpeechSynthesisUtterance(this.value);e.onend=function(e){console.log("SpeechSynthesisUtterance.onend"),play.textContent="► Play"},e.onerror=function(e){console.error("SpeechSynthesisUtterance.onerror")},e.voice=p[voiceSelect.selectedIndex],e.rate=rate.value,speechSynthesis.speak(e)},onClick:function(){if(speechSynthesis.speaking)speechSynthesis.cancel(),play.textContent="► Play";else{if(""===this.value)return;this.speak(),play.textContent="■ Stop"}}}}),g=m,b=Object(i["a"])(g,v,h,!1,null,null,null),y=b.exports;o["a"].use(d["a"]);var w=[{path:"/",name:"Home",component:y},{path:"/index",name:"Home",component:y},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],S=new d["a"]({routes:w}),k=S;o["a"].config.productionTip=!1,new o["a"]({router:k,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.df2a251e.js.map