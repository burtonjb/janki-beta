(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["card"],{"09e2":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"session-info"},[e._v(" Cards left in this lesson: "+e._s(e.lesson.cardsLeftToGetCorrect.length)+" ")]),r("div",{staticClass:"card-container"},[r("CardBackDisplay",{attrs:{card:e.card.card}})],1),r("div",{staticClass:"card-answer"},[r("CardAnswer",{attrs:{reviewCard:e.card,callback:e.goToNext()}})],1)])},E=[],n=r("a026"),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-answer-container"},[r("div",{staticClass:"flex-item correct-answer  card-answer",on:{click:function(t){return e.answer(e.reviewCard,e.CardAnswer.EASY)}}},[e._v(" Easy "),r("br"),e._v(" "+e._s(e._f("epochMsToRelTimeString")(e.reviewCard.card.calculateNextReviewTime(e.CardAnswer.EASY)))+" ")]),r("div",{staticClass:"flex-item correct-answer card-answer",on:{click:function(t){return e.answer(e.reviewCard,e.CardAnswer.MEDIUM)}}},[e._v(" Medium "),r("br"),e._v(" "+e._s(e._f("epochMsToRelTimeString")(e.reviewCard.card.calculateNextReviewTime(e.CardAnswer.MEDIUM)))+" ")]),r("div",{staticClass:"flex-item correct-answer  card-answer",on:{click:function(t){return e.answer(e.reviewCard,e.CardAnswer.HARD)}}},[e._v(" Hard "),r("br"),e._v(" "+e._s(e._f("epochMsToRelTimeString")(e.reviewCard.card.calculateNextReviewTime(e.CardAnswer.HARD)))+" ")]),r("div",{staticClass:"flex-item wrong-answer  card-answer",on:{click:function(t){return e.answer(e.reviewCard,e.CardAnswer.WRONG)}}},[e._v(" Wrong "),r("br"),e._v(" "+e._s(e._f("epochMsToRelTimeString")(e.reviewCard.card.calculateNextReviewTime(e.CardAnswer.WRONG)))+" ")])])},s=[],K=r("3ecc"),c=r("997c"),o=r("4643"),Y=r("e48b"),i=r("2f1f");function d(e,t){e.answer(t),i["b"].setItem(e.card.id,e.card)}var l=n["a"].extend({name:"CardAnswer",mounted:function(){window.addEventListener("keypress",this.handleKeyPress)},destroyed:function(){window.removeEventListener("keypress",this.handleKeyPress)},methods:{answer:function(e,t){var r=e;d(r,t),this.$props.callback()},handleKeyPress:function(e){e.keyCode==K["a"].KEY_1?this.answer(this.$props.reviewCard,o["c"].EASY):e.keyCode==K["a"].KEY_2?this.answer(this.$props.reviewCard,o["c"].MEDIUM):e.keyCode==K["a"].KEY_3?this.answer(this.$props.reviewCard,o["c"].HARD):e.keyCode==K["a"].KEY_4&&this.answer(this.$props.reviewCard,o["c"].WRONG)}},data:function(){return{CardAnswer:o["c"]}},props:{reviewCard:Y["b"],callback:Function},filters:{epochMsToRelTimeString:c["b"]}}),u=l,C=(r("7270"),r("2877")),v=Object(C["a"])(u,_,s,!1,null,"2c8c753c",null),A=v.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{domProps:{innerHTML:e._s(e.card.template.renderBack(e.card))}})},w=[],p=n["a"].extend({name:"CardBackDisplay",props:{card:o["b"]}}),T=p,D=Object(C["a"])(T,f,w,!1,null,"3a28de8e",null),h=D.exports,m=n["a"].extend({methods:{goToNext:function(){var e=this.$store.state.currentLesson,t=this.$router;return function(){var r=e.getCurrentReviewCard();r?t.push("/card/front"):t.push("/lesson/review")}}},data:function(){return{lesson:this.$store.state.currentLesson,card:this.$store.state.currentLesson.getCurrentReviewCard()}},components:{CardBackDisplay:h,CardAnswer:A}}),N=m,F=(r("dd58"),Object(C["a"])(N,a,E,!1,null,"7cab63ac",null));t["default"]=F.exports},"0b1a":function(e,t,r){"use strict";var a=r("9f2e"),E=r.n(a);E.a},3145:function(e,t,r){},"3ecc":function(e,t,r){"use strict";var a;r.d(t,"a",(function(){return a})),function(e){e[e["KEY_CANCEL"]=3]="KEY_CANCEL",e[e["KEY_HELP"]=6]="KEY_HELP",e[e["KEY_BACK_SPACE"]=8]="KEY_BACK_SPACE",e[e["KEY_TAB"]=9]="KEY_TAB",e[e["KEY_CLEAR"]=12]="KEY_CLEAR",e[e["KEY_RETURN"]=13]="KEY_RETURN",e[e["KEY_ENTER"]=14]="KEY_ENTER",e[e["KEY_SHIFT"]=16]="KEY_SHIFT",e[e["KEY_CONTROL"]=17]="KEY_CONTROL",e[e["KEY_ALT"]=18]="KEY_ALT",e[e["KEY_PAUSE"]=19]="KEY_PAUSE",e[e["KEY_CAPS_LOCK"]=20]="KEY_CAPS_LOCK",e[e["KEY_ESCAPE"]=27]="KEY_ESCAPE",e[e["KEY_SPACE"]=32]="KEY_SPACE",e[e["KEY_PAGE_UP"]=33]="KEY_PAGE_UP",e[e["KEY_PAGE_DOWN"]=34]="KEY_PAGE_DOWN",e[e["KEY_END"]=35]="KEY_END",e[e["KEY_HOME"]=36]="KEY_HOME",e[e["KEY_LEFT"]=37]="KEY_LEFT",e[e["KEY_UP"]=38]="KEY_UP",e[e["KEY_RIGHT"]=39]="KEY_RIGHT",e[e["KEY_DOWN"]=40]="KEY_DOWN",e[e["KEY_PRINTSCREEN"]=44]="KEY_PRINTSCREEN",e[e["KEY_INSERT"]=45]="KEY_INSERT",e[e["KEY_DELETE"]=46]="KEY_DELETE",e[e["KEY_0"]=48]="KEY_0",e[e["KEY_1"]=49]="KEY_1",e[e["KEY_2"]=50]="KEY_2",e[e["KEY_3"]=51]="KEY_3",e[e["KEY_4"]=52]="KEY_4",e[e["KEY_5"]=53]="KEY_5",e[e["KEY_6"]=54]="KEY_6",e[e["KEY_7"]=55]="KEY_7",e[e["KEY_8"]=56]="KEY_8",e[e["KEY_9"]=57]="KEY_9",e[e["KEY_SEMICOLON"]=59]="KEY_SEMICOLON",e[e["KEY_EQUALS"]=61]="KEY_EQUALS",e[e["KEY_A"]=65]="KEY_A",e[e["KEY_B"]=66]="KEY_B",e[e["KEY_C"]=67]="KEY_C",e[e["KEY_D"]=68]="KEY_D",e[e["KEY_E"]=69]="KEY_E",e[e["KEY_F"]=70]="KEY_F",e[e["KEY_G"]=71]="KEY_G",e[e["KEY_H"]=72]="KEY_H",e[e["KEY_I"]=73]="KEY_I",e[e["KEY_J"]=74]="KEY_J",e[e["KEY_K"]=75]="KEY_K",e[e["KEY_L"]=76]="KEY_L",e[e["KEY_M"]=77]="KEY_M",e[e["KEY_N"]=78]="KEY_N",e[e["KEY_O"]=79]="KEY_O",e[e["KEY_P"]=80]="KEY_P",e[e["KEY_Q"]=81]="KEY_Q",e[e["KEY_R"]=82]="KEY_R",e[e["KEY_S"]=83]="KEY_S",e[e["KEY_T"]=84]="KEY_T",e[e["KEY_U"]=85]="KEY_U",e[e["KEY_V"]=86]="KEY_V",e[e["KEY_W"]=87]="KEY_W",e[e["KEY_X"]=88]="KEY_X",e[e["KEY_Y"]=89]="KEY_Y",e[e["KEY_Z"]=90]="KEY_Z",e[e["KEY_LEFT_CMD"]=91]="KEY_LEFT_CMD",e[e["KEY_RIGHT_CMD"]=93]="KEY_RIGHT_CMD",e[e["KEY_CONTEXT_MENU"]=93]="KEY_CONTEXT_MENU",e[e["KEY_NUMPAD0"]=96]="KEY_NUMPAD0",e[e["KEY_NUMPAD1"]=97]="KEY_NUMPAD1",e[e["KEY_NUMPAD2"]=98]="KEY_NUMPAD2",e[e["KEY_NUMPAD3"]=99]="KEY_NUMPAD3",e[e["KEY_NUMPAD4"]=100]="KEY_NUMPAD4",e[e["KEY_NUMPAD5"]=101]="KEY_NUMPAD5",e[e["KEY_NUMPAD6"]=102]="KEY_NUMPAD6",e[e["KEY_NUMPAD7"]=103]="KEY_NUMPAD7",e[e["KEY_NUMPAD8"]=104]="KEY_NUMPAD8",e[e["KEY_NUMPAD9"]=105]="KEY_NUMPAD9",e[e["KEY_MULTIPLY"]=106]="KEY_MULTIPLY",e[e["KEY_ADD"]=107]="KEY_ADD",e[e["KEY_SEPARATOR"]=108]="KEY_SEPARATOR",e[e["KEY_SUBTRACT"]=109]="KEY_SUBTRACT",e[e["KEY_DECIMAL"]=110]="KEY_DECIMAL",e[e["KEY_DIVIDE"]=111]="KEY_DIVIDE",e[e["KEY_F1"]=112]="KEY_F1",e[e["KEY_F2"]=113]="KEY_F2",e[e["KEY_F3"]=114]="KEY_F3",e[e["KEY_F4"]=115]="KEY_F4",e[e["KEY_F5"]=116]="KEY_F5",e[e["KEY_F6"]=117]="KEY_F6",e[e["KEY_F7"]=118]="KEY_F7",e[e["KEY_F8"]=119]="KEY_F8",e[e["KEY_F9"]=120]="KEY_F9",e[e["KEY_F10"]=121]="KEY_F10",e[e["KEY_F11"]=122]="KEY_F11",e[e["KEY_F12"]=123]="KEY_F12",e[e["KEY_F13"]=124]="KEY_F13",e[e["KEY_F14"]=125]="KEY_F14",e[e["KEY_F15"]=126]="KEY_F15",e[e["KEY_F16"]=127]="KEY_F16",e[e["KEY_F17"]=128]="KEY_F17",e[e["KEY_F18"]=129]="KEY_F18",e[e["KEY_F19"]=130]="KEY_F19",e[e["KEY_F20"]=131]="KEY_F20",e[e["KEY_F21"]=132]="KEY_F21",e[e["KEY_F22"]=133]="KEY_F22",e[e["KEY_F23"]=134]="KEY_F23",e[e["KEY_F24"]=135]="KEY_F24",e[e["KEY_NUM_LOCK"]=144]="KEY_NUM_LOCK",e[e["KEY_SCROLL_LOCK"]=145]="KEY_SCROLL_LOCK",e[e["KEY_COMMA"]=188]="KEY_COMMA",e[e["KEY_PERIOD"]=190]="KEY_PERIOD",e[e["KEY_SLASH"]=191]="KEY_SLASH",e[e["KEY_BACK_QUOTE"]=192]="KEY_BACK_QUOTE",e[e["KEY_OPEN_BRACKET"]=219]="KEY_OPEN_BRACKET",e[e["KEY_BACK_SLASH"]=220]="KEY_BACK_SLASH",e[e["KEY_CLOSE_BRACKET"]=221]="KEY_CLOSE_BRACKET",e[e["KEY_QUOTE"]=222]="KEY_QUOTE",e[e["KEY_META"]=224]="KEY_META"}(a||(a={}))},"49a9":function(e,t,r){},7270:function(e,t,r){"use strict";var a=r("49a9"),E=r.n(a);E.a},8779:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"session-info"},[e._v(" Cards left in this lesson: "+e._s(e.lesson.cardsLeftToGetCorrect.length)+" ")]),r("router-link",{staticClass:"unstyled-link",attrs:{to:"/card/back"}},[r("div",{staticClass:"card-container"},[r("CardFrontDisplay",{attrs:{card:e.card.card}})],1)]),r("router-link",{attrs:{to:"/card/back"}},[r("div",[e._v(" Flip over ")])])],1)},E=[],n=r("a026"),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{domProps:{innerHTML:e._s(e.card.template.renderFront(e.card))}})])},s=[],K=r("4643"),c=n["a"].extend({name:"CardFrontDisplay",props:{card:K["b"]}}),o=c,Y=r("2877"),i=Object(Y["a"])(o,_,s,!1,null,"453455f7",null),d=i.exports,l=r("3ecc"),u=n["a"].extend({mounted:function(){window.addEventListener("keypress",this.handleKeyPress)},destroyed:function(){window.removeEventListener("keypress",this.handleKeyPress)},methods:{handleKeyPress:function(e){e.keyCode==l["a"].KEY_SPACE&&this.$router.push("/card/back")}},data:function(){return{lesson:this.$store.state.currentLesson,card:this.$store.state.currentLesson.getCurrentReviewCard()}},components:{CardFrontDisplay:d}}),C=u,v=(r("0b1a"),Object(Y["a"])(C,a,E,!1,null,"d86c353e",null));t["default"]=v.exports},"9f2e":function(e,t,r){},dd58:function(e,t,r){"use strict";var a=r("3145"),E=r.n(a);E.a},f36d:function(e,t,r){},f9bb:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",[e._v(" This is a temp debug page. The data format may change whenever. ")]),r("section",[e._v(" Below is the current data stored. Copy it to the clipboard and save it somewhere to back it up. ")]),r("section",[e._v(" Replace this with the contents from somewhere else and click the buttons below to either merge new data, or clear storage and import ")]),r("div",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.savedData,expression:"savedData"}],attrs:{id:"savedDataTextArea",placeholder:"localstorage",rows:"20",cols:"100"},domProps:{value:e.savedData},on:{input:function(t){t.target.composing||(e.savedData=t.target.value)}}})]),r("button",{on:{click:function(t){return e.copyToClipboard()}}},[e._v("Copy to clipboard")]),r("button",{on:{click:function(t){return e.mergeData()}}},[e._v("Merge")]),r("button",{on:{click:function(t){return e.clearAndImportData()}}},[e._v("Clear storage and import")]),r("button",{on:{click:function(t){return e.clearData()}}},[e._v("Clear data")])])},E=[],n=r("9ab4"),_=r("a026"),s=_["a"].extend({methods:{copyToClipboard:function(){var e=document.querySelector("#savedDataTextArea");e&&e instanceof HTMLTextAreaElement?(e.select(),document.execCommand("copy")):console.error("Error in copying text area to clipboard")},clearData:function(){window.localStorage.clear(),window.location.href=r.p},clearAndImportData:function(){window.localStorage.clear(),this.mergeData(),window.location.href=r.p},mergeData:function(){var e=JSON.parse(this.$data.savedData),t=Object.keys(e);t.forEach((function(t){window.localStorage.setItem(t,e[t])})),window.location.href=r.p}},data:function(){return{savedData:JSON.stringify(Object(n["a"])({},window.localStorage))}},components:{}}),K=s,c=(r("fcfa"),r("2877")),o=Object(c["a"])(K,a,E,!1,null,"5e4823c0",null);t["default"]=o.exports},fcfa:function(e,t,r){"use strict";var a=r("f36d"),E=r.n(a);E.a}}]);