(function(e){function t(t){for(var r,s,c=t[0],o=t[1],u=t[2],d=0,l=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&l.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);h&&h(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={app:0},a={app:0},i=[];function c(e){return o.p+"js/"+({about:"about","card~decks~inspect":"card~decks~inspect","card~inspect":"card~inspect",card:"card",inspect:"inspect",decks:"decks",lesson:"lesson"}[e]||e)+"."+{about:"a1f8a85b","card~decks~inspect":"cd9acead","card~inspect":"62945c1a",card:"5837b922",inspect:"4ea5404a",decks:"2f119923",lesson:"64fd0ebe"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={card:1,decks:1,lesson:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var r="css/"+({about:"about","card~decks~inspect":"card~decks~inspect","card~inspect":"card~inspect",card:"card",inspect:"inspect",decks:"decks",lesson:"lesson"}[e]||e)+"."+{about:"31d6cfe0","card~decks~inspect":"31d6cfe0","card~inspect":"31d6cfe0",card:"2edabe47",inspect:"31d6cfe0",decks:"756be1e9",lesson:"ed78f4e8"}[e]+".css",a=o.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===r||d===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete s[e],h.parentNode.removeChild(h),n(i)},h.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){s[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=c(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",l.name="ChunkLoadError",l.type=r,l.request=s,n[1](l)}a[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/janki-beta/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var h=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1227:function(e,t,n){},"525d":function(e,t,n){"use strict";var r=n("1227"),s=n.n(r);s.a},"5bc2":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n("9f82");function s(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}class a{constructor(e,t){this.card=e,this.stack=t,this.metadata={answeredCorrectly:null}}answer(e){this.card.answer(e);const t=r["a"].isCorrectAnswer(e);this.metadata.answeredCorrectly=t;const n=this.stack.indexOf(this);if(!(n>=0))throw console.error("LOG ERROR HERE"),"Pretty sure it should have been in the list";this.stack.splice(n,1),t||this.stack.push(this)}}class i{}class c{constructor(e,t=new i){this.config=t,this.cardsLeftToGetCorrect=[],this.cards=e.map(e=>{const t=new a(e,this.cardsLeftToGetCorrect);return this.cardsLeftToGetCorrect.push(t),t})}shuffle(){s(this.cardsLeftToGetCorrect)}restart(){this.cardsLeftToGetCorrect=this.cards.slice(),this.cardsLeftToGetCorrect.forEach(e=>e.stack=this.cardsLeftToGetCorrect)}getCurrentReviewCard(){return this.isReviewComplete()?null:this.cardsLeftToGetCorrect[0]}isReviewComplete(){return 0==this.cardsLeftToGetCorrect.length}}},6753:function(e,t,n){"use strict";var r=n("fde4"),s=n.n(r);s.a},"9f82":function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return p}));const r=864e5,s=1.3,a=2.5,i=1.3,c=180,o=5;function u(){return(new Date).getTime()}var d,l;(function(e){e["NEW"]="NEW",e["LEARNING"]="LEARNING",e["LEARNED"]="LEARNED",e["LOW_PRIORITY"]="LOW_PRIORITY"})(d||(d={})),function(e){e["WRONG"]="WRONG",e["EASY"]="EASY",e["MEDIUM"]="MEDIUM",e["HARD"]="HARD"}(l||(l={}));const h={WRONG:-.2,HARD:-.15,MEDIUM:0,EASY:.15},p={isCorrectAnswer:function(e){return e==l.EASY||e==l.MEDIUM||e==l.HARD}};class f{constructor(e,t){this.note=e,this.template=t,this.srsData={ef:2.5,interval:0,correctInARow:0,wrongInARow:0},this.id=`${e.id}_${t.id}`,this.auditEvents=[],this.nextReviewTimeMs=null,this._status=null}answer(e){this.auditEvents.push({date:u(),answer:e}),this.setNextReviewTime(e)}isReadyToReview(){const e=u();return!this.nextReviewTimeMs||this.nextReviewTimeMs<=e}compare(e){return this.nextReviewTimeMs&&e.nextReviewTimeMs?this.nextReviewTimeMs-e.nextReviewTimeMs:0}get status(){return this._status?this._status:this.nextReviewTimeMs?d.LEARNED:d.NEW}set status(e){this._status=e}calculateNextReviewTimeDay(e){if(-1==this.srsData.interval)return 0;if(0==this.srsData.interval)return 1;if(1==this.srsData.interval)return 6;{let t=1;e==l.EASY&&(t=i);const n=this.srsData.interval*this.srsData.ef*t;return Math.min(c,n)}}calculateNextReviewTime(e){return e===l.WRONG?u():u()+this.calculateNextReviewTimeDay(e)*r}setNextReviewTime(e){e===l.WRONG?(this.srsData.correctInARow=0,Number.isInteger(this.srsData.wrongInARow)||(this.srsData.wrongInARow=0),this.srsData.wrongInARow+=1,this.srsData.interval=-1,this.srsData.wrongInARow>o&&(this.srsData.wrongInARow=0,this._status=d.NEW)):(this.srsData.correctInARow+=1,this.srsData.wrongInARow=0),this.nextReviewTimeMs=this.calculateNextReviewTime(e),this.srsData.ef+=h[e],this.srsData.ef=Math.max(this.srsData.ef,s),this.srsData.ef=Math.min(this.srsData.ef,a),this.srsData.interval=this.calculateNextReviewTimeDay(e)}}},cd49:function(e,t,n){"use strict";n.r(t);var r=n("a026"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),n("router-link",{attrs:{to:"/decks"}},[e._v("Decks")]),n("router-link",{attrs:{to:"/data"}},[e._v("Saved Data")]),n("router-link",{attrs:{to:"/inspect/decks"}},[e._v("Inspect")])],1),n("div",{attrs:{id:"container"}},[n("router-view")],1)])},a=[],i=(n("525d"),n("2877")),c={},o=Object(i["a"])(c,s,a,!1,null,null,null),u=o.exports,d=n("8c4f"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("router-link",{attrs:{to:"/decks"}},[r("img",{staticClass:"ka-image",attrs:{alt:"katakana ka",src:n("cf05")}})]),r("div",[e._v("Click on the カ to go to the deck overview")])],1)},h=[],p={name:"Home"},f=p,m=(n("6753"),Object(i["a"])(f,l,h,!1,null,"0549dbaf",null)),v=m.exports;r["a"].use(d["a"]);const w=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"4f94"))},{path:"/data",name:"saveddata",component:()=>Promise.all([n.e("card~decks~inspect"),n.e("card~inspect"),n.e("card")]).then(n.bind(null,"f9bb"))},{path:"/card/front",name:"Flashcard-front",component:()=>Promise.all([n.e("card~decks~inspect"),n.e("card~inspect"),n.e("card")]).then(n.bind(null,"8779"))},{path:"/card/back",name:"Flashcard-back",component:()=>Promise.all([n.e("card~decks~inspect"),n.e("card~inspect"),n.e("card")]).then(n.bind(null,"09e2"))},{path:"/lesson",name:"Lesson",component:()=>n.e("lesson").then(n.bind(null,"0dfe"))},{path:"/lesson/review",name:"LessonReview",component:()=>n.e("lesson").then(n.bind(null,"6333"))},{path:"/decks",name:"Decks",component:()=>Promise.all([n.e("card~decks~inspect"),n.e("decks")]).then(n.bind(null,"3899"))},{path:"/inspect/decks",name:"Inspect Decks",component:()=>Promise.all([n.e("card~decks~inspect"),n.e("card~inspect"),n.e("inspect")]).then(n.bind(null,"57dc"))},{path:"/inspect/decks/:id",name:"Inspect Deck",component:()=>Promise.all([n.e("card~decks~inspect"),n.e("card~inspect"),n.e("inspect")]).then(n.bind(null,"b934"))},{path:"/inspect/cards/:id",name:"Inspect Card",component:()=>Promise.all([n.e("card~decks~inspect"),n.e("card~inspect"),n.e("inspect")]).then(n.bind(null,"99f6"))}],b=new d["a"]({mode:"history",base:"/janki-beta/",routes:w});var k=b,R=n("2f62"),g=n("5bc2");r["a"].use(R["a"]);var D=new R["a"].Store({state:{currentLesson:g["a"]},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:k,store:D,render:e=>e(u)}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.363b0c53.png"},fde4:function(e,t,n){}});