(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],d=0,l=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&l.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},s={app:0},a={app:0},i=[];function o(e){return c.p+"js/"+({about:"about","card~decks~inspect":"card~decks~inspect","card~inspect":"card~inspect",card:"card",inspect:"inspect",decks:"decks",lesson:"lesson"}[e]||e)+"."+{about:"ddcf8570","card~decks~inspect":"d8366121","card~inspect":"53f12837",card:"6d995138",inspect:"8c82b99f",decks:"8b4cf256",lesson:"ece61bdd"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={card:1,decks:1,lesson:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var r="css/"+({about:"about","card~decks~inspect":"card~decks~inspect","card~inspect":"card~inspect",card:"card",inspect:"inspect",decks:"decks",lesson:"lesson"}[e]||e)+"."+{about:"31d6cfe0","card~decks~inspect":"31d6cfe0","card~inspect":"31d6cfe0",card:"d03a4191",inspect:"31d6cfe0",decks:"a2801e39",lesson:"ee6868e7"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],d=u.getAttribute("data-href");if(d===r||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete s[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){s[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",l.name="ChunkLoadError",l.type=r,l.request=s,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/janki-beta/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1227:function(e,t,n){},2973:function(e,t,n){"use strict";var r=n("b84a"),s=n.n(r);s.a},4643:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return f}));var r,s,a=864e5,i=1.3,o=2.5,c=1.3,u=180;function d(){return(new Date).getTime()}(function(e){e["NEW"]="NEW",e["LEARNING"]="LEARNING",e["LEARNED"]="LEARNED"})(r||(r={})),function(e){e["WRONG"]="WRONG",e["EASY"]="EASY",e["MEDIUM"]="MEDIUM",e["HARD"]="HARD"}(s||(s={}));var l={WRONG:-.2,HARD:-.15,MEDIUM:0,EASY:.15},f={isCorrectAnswer:function(e){return e==s.EASY||e==s.MEDIUM||e==s.HARD}},p=(function(){function e(e,t){this.date=e,this.answer=t}}(),function(){function e(e,t){this.note=e,this.template=t,this.srsData={ef:2.5,interval:0,correctInARow:0},this.id=e.id+"_"+t.id,this.auditEvents=[],this.nextReviewTimeMs=null}return e.prototype.answer=function(e){this.auditEvents.push({date:d(),answer:e}),this.setNextReviewTime(e)},e.prototype.isReadyToReview=function(){var e=d();return!this.nextReviewTimeMs||this.nextReviewTimeMs<=e},e.prototype.compare=function(e){return this.nextReviewTimeMs&&e.nextReviewTimeMs?this.nextReviewTimeMs-e.nextReviewTimeMs:0},e.prototype.getStatus=function(){return this.nextReviewTimeMs?r.LEARNED:r.NEW},e.prototype.calculateNextReviewTimeDay=function(e){if(-1==this.srsData.interval)return 0;if(0==this.srsData.interval)return 1;if(1==this.srsData.interval)return 6;var t=1;e==s.EASY&&(t=c);var n=this.srsData.interval*this.srsData.ef*t;return Math.min(u,n)},e.prototype.calculateNextReviewTime=function(e){return e===s.WRONG?d():d()+this.calculateNextReviewTimeDay(e)*a},e.prototype.setNextReviewTime=function(e){e===s.WRONG?(this.srsData.correctInARow=0,this.srsData.interval=-1):this.srsData.correctInARow+=1,this.nextReviewTimeMs=this.calculateNextReviewTime(e),this.srsData.ef+=l[e],this.srsData.ef=Math.max(this.srsData.ef,i),this.srsData.ef=Math.min(this.srsData.ef,o),this.srsData.interval=this.calculateNextReviewTimeDay(e)},e}())},"525d":function(e,t,n){"use strict";var r=n("1227"),s=n.n(r);s.a},b84a:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("a026"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),n("router-link",{attrs:{to:"/decks"}},[e._v("Decks")]),n("router-link",{attrs:{to:"/data"}},[e._v("Saved Data")]),n("router-link",{attrs:{to:"/inspect/decks"}},[e._v("Inspect")])],1),n("div",{attrs:{id:"container"}},[n("router-view")],1)])},a=[],i=(n("525d"),n("2877")),o={},c=Object(i["a"])(o,s,a,!1,null,null,null),u=c.exports,d=n("8c4f"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("router-link",{attrs:{to:"/decks"}},[r("img",{staticClass:"ka-image",attrs:{alt:"katakana ka",src:n("cf05")}})]),r("div",[e._v("Click on the Ka to go to the deck overview")])],1)},f=[],p={name:"Home"},h=p,v=(n("2973"),Object(i["a"])(h,l,f,!1,null,"ce40a96c",null)),m=v.exports;r["a"].use(d["a"]);var w=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"4f94"))}},{path:"/data",name:"saveddata",component:function(){return Promise.all([n.e("card~decks~inspect"),n.e("card~inspect"),n.e("card")]).then(n.bind(null,"f9bb"))}},{path:"/card/front",name:"Flashcard-front",component:function(){return Promise.all([n.e("card~decks~inspect"),n.e("card~inspect"),n.e("card")]).then(n.bind(null,"8779"))}},{path:"/card/back",name:"Flashcard-back",component:function(){return Promise.all([n.e("card~decks~inspect"),n.e("card~inspect"),n.e("card")]).then(n.bind(null,"09e2"))}},{path:"/lesson",name:"Lesson",component:function(){return n.e("lesson").then(n.bind(null,"0dfe"))}},{path:"/lesson/review",name:"LessonReview",component:function(){return n.e("lesson").then(n.bind(null,"6333"))}},{path:"/decks",name:"Decks",component:function(){return Promise.all([n.e("card~decks~inspect"),n.e("decks")]).then(n.bind(null,"3899"))}},{path:"/inspect/decks",name:"Inspect Decks",component:function(){return Promise.all([n.e("card~decks~inspect"),n.e("card~inspect"),n.e("inspect")]).then(n.bind(null,"57dc"))}},{path:"/inspect/decks/:id",name:"Inspect Deck",component:function(){return Promise.all([n.e("card~decks~inspect"),n.e("card~inspect"),n.e("inspect")]).then(n.bind(null,"b934"))}},{path:"/inspect/cards/:id",name:"Inspect Card",component:function(){return Promise.all([n.e("card~decks~inspect"),n.e("card~inspect"),n.e("inspect")]).then(n.bind(null,"99f6"))}}],R=new d["a"]({mode:"history",base:"/janki-beta/",routes:w}),b=R,k=n("2f62"),y=n("e48b");r["a"].use(k["a"]);var E=new k["a"].Store({state:{currentLesson:y["b"]},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:b,store:E,render:function(e){return e(u)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.363b0c53.png"},e48b:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var r=n("4643");function s(e){for(var t,n=e.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1));t=[e[r],e[n]],e[n]=t[0],e[r]=t[1]}}var a=function(){function e(e,t){this.card=e,this.stack=t,this.metadata={answeredCorrectly:null}}return e.prototype.answer=function(e){this.card.answer(e);var t=r["a"].isCorrectAnswer(e);this.metadata.answeredCorrectly=t;var n=this.stack.indexOf(this);if(!(n>=0))throw console.error("LOG ERROR HERE"),"Pretty sure it should have been in the list";this.stack.splice(n,1),t||this.stack.push(this)},e}(),i=function(){function e(e,t){this.card=e,this.stack=t,this.metadata={answeredCorrectlyInARow:0,CORRECT_ANSWERS_REQUIRED_TO_LEARN:3}}return e.prototype.answer=function(e){var t=r["a"].isCorrectAnswer(e);t?this.metadata.answeredCorrectlyInARow+=1:this.metadata.answeredCorrectlyInARow=0;var n=this.stack.indexOf(this);if(!(n>=0))throw console.error("LOG ERROR HERE"),"Pretty sure it should have been in the list";this.stack.splice(n,1),console.log(this.metadata.answeredCorrectlyInARow,this.metadata.CORRECT_ANSWERS_REQUIRED_TO_LEARN),this.metadata.answeredCorrectlyInARow<this.metadata.CORRECT_ANSWERS_REQUIRED_TO_LEARN?this.stack.push(this):this.card.answer(e)},e}(),o=function(){function e(){}return e}(),c=function(){function e(e,t){var n=this;void 0===t&&(t=new o),this.config=t,this.cardsLeftToGetCorrect=[],this.cards=e.map((function(e){var t=new a(e,n.cardsLeftToGetCorrect);return n.cardsLeftToGetCorrect.push(t),t}))}return e.prototype.shuffle=function(){s(this.cardsLeftToGetCorrect)},e.prototype.restart=function(){var e=this;this.cardsLeftToGetCorrect=this.cards.slice(),this.cardsLeftToGetCorrect.forEach((function(t){return t.stack=e.cardsLeftToGetCorrect}))},e.prototype.getCurrentReviewCard=function(){return this.isReviewComplete()?null:this.cardsLeftToGetCorrect[0]},e.prototype.isReviewComplete=function(){return 0==this.cardsLeftToGetCorrect.length},e}(),u=function(){function e(e){var t=this;this.cardsLeftToGetCorrect=[],this.cards=e.map((function(e){var n=new i(e,t.cardsLeftToGetCorrect);return t.cardsLeftToGetCorrect.push(n),n}))}return e.prototype.shuffle=function(){s(this.cardsLeftToGetCorrect)},e.prototype.restart=function(){var e=this;this.cardsLeftToGetCorrect=this.cards.slice(),this.cardsLeftToGetCorrect.forEach((function(t){return t.stack=e.cardsLeftToGetCorrect}))},e.prototype.getCurrentReviewCard=function(){return this.isReviewComplete()?null:this.cardsLeftToGetCorrect[0]},e.prototype.isReviewComplete=function(){return 0==this.cardsLeftToGetCorrect.length},e}()}});