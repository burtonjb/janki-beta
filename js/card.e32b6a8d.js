(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["card"],{"05a4":function(e,t,a){},"09e2":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"session-info"},[e._v(" Cards left in this lesson: "+e._s(e.lesson.cardsLeftToGetCorrect.length)+" ")]),a("div",{staticClass:"card-container"},[a("CardBackDisplay",{attrs:{card:e.card.card}})],1),a("div",{staticClass:"card-answer"},[a("CardAnswer",{attrs:{reviewCard:e.card,callback:e.goToNext()}})],1)])},n=[],o=a("a026"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-answer-container"},[a("div",{staticClass:"btn flex-item correct-answer  card-answer",on:{click:function(t){return e.answer(e.reviewCard,e.CardAnswer.EASY)}}},[e._v(" Easy "),a("br"),e._v(" "+e._s(e._f("epochMsToRelTimeString")(e.reviewCard.card.calculateNextReviewTime(e.CardAnswer.EASY)))+" ")]),a("div",{staticClass:"btn flex-item correct-answer card-answer",on:{click:function(t){return e.answer(e.reviewCard,e.CardAnswer.MEDIUM)}}},[e._v(" Medium "),a("br"),e._v(" "+e._s(e._f("epochMsToRelTimeString")(e.reviewCard.card.calculateNextReviewTime(e.CardAnswer.MEDIUM)))+" ")]),a("div",{staticClass:"btn flex-item correct-answer  card-answer",on:{click:function(t){return e.answer(e.reviewCard,e.CardAnswer.HARD)}}},[e._v(" Hard "),a("br"),e._v(" "+e._s(e._f("epochMsToRelTimeString")(e.reviewCard.card.calculateNextReviewTime(e.CardAnswer.HARD)))+" ")]),a("div",{staticClass:"btn flex-item wrong-answer  card-answer",on:{click:function(t){return e.answer(e.reviewCard,e.CardAnswer.WRONG)}}},[e._v(" Wrong "),a("br"),e._v(" "+e._s(e._f("epochMsToRelTimeString")(e.reviewCard.card.calculateNextReviewTime(e.CardAnswer.WRONG)))+" ")]),a("div",{staticClass:"btn flex-item low-priority card-answer",on:{click:function(t){return e.setLowPriority(e.reviewCard)}}},[e._v(" Set as low priority "),a("br"),e._v(" "+e._s(e.reviewCard.card.status==e.CardStatus.LOW_PRIORITY)+" ")])])},E=[],_=a("3ecc"),i=a("997c"),c=a("9f82"),d=a("5bc2"),K=a("2f1f");function Y(e,t){e.answer(t),K["b"].setItem(e.card.id,e.card)}var l=o["a"].extend({name:"CardAnswer",mounted:function(){window.addEventListener("keypress",this.handleKeyPress)},destroyed:function(){window.removeEventListener("keypress",this.handleKeyPress)},methods:{answer:function(e,t){const a=e;Y(a,t),this.$props.callback()},setLowPriority:function(e){e.card.status==c["d"].LOW_PRIORITY?e.card.status=null:e.card.status=c["d"].LOW_PRIORITY},handleKeyPress:function(e){e.keyCode==_["a"].KEY_1?this.answer(this.$props.reviewCard,c["c"].EASY):e.keyCode==_["a"].KEY_2?this.answer(this.$props.reviewCard,c["c"].MEDIUM):e.keyCode==_["a"].KEY_3?this.answer(this.$props.reviewCard,c["c"].HARD):e.keyCode==_["a"].KEY_4&&this.answer(this.$props.reviewCard,c["c"].WRONG)}},data:function(){return{CardAnswer:c["c"],CardStatus:c["d"]}},props:{reviewCard:d["b"],callback:Function},filters:{epochMsToRelTimeString:i["b"]}}),u=l,C=(a("a7a6"),a("2877")),v=Object(C["a"])(u,s,E,!1,null,"040cdb92",null),w=v.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{domProps:{innerHTML:e._s(e.card.template.renderBack(e.card))}})},p=[],A=o["a"].extend({name:"CardBackDisplay",props:{card:c["b"]}}),T=A,D=Object(C["a"])(T,f,p,!1,null,"b944d324",null),h=D.exports,m=o["a"].extend({methods:{goToNext:function(){const e=this.$store.state.currentLesson,t=this.$router;return function(){const a=e.getCurrentReviewCard();a?t.push("/card/front"):t.push("/lesson/review")}}},data:function(){return{lesson:this.$store.state.currentLesson,card:this.$store.state.currentLesson.getCurrentReviewCard()}},components:{CardBackDisplay:h,CardAnswer:w}}),L=m,F=(a("b5d7"),Object(C["a"])(L,r,n,!1,null,"08edb3ec",null));t["default"]=F.exports},1943:function(e,t,a){"use strict";var r=a("646d"),n=a.n(r);n.a},"3bcd":function(e,t,a){},"3ecc":function(e,t,a){"use strict";var r;a.d(t,"a",(function(){return r})),function(e){e[e["KEY_CANCEL"]=3]="KEY_CANCEL",e[e["KEY_HELP"]=6]="KEY_HELP",e[e["KEY_BACK_SPACE"]=8]="KEY_BACK_SPACE",e[e["KEY_TAB"]=9]="KEY_TAB",e[e["KEY_CLEAR"]=12]="KEY_CLEAR",e[e["KEY_RETURN"]=13]="KEY_RETURN",e[e["KEY_ENTER"]=14]="KEY_ENTER",e[e["KEY_SHIFT"]=16]="KEY_SHIFT",e[e["KEY_CONTROL"]=17]="KEY_CONTROL",e[e["KEY_ALT"]=18]="KEY_ALT",e[e["KEY_PAUSE"]=19]="KEY_PAUSE",e[e["KEY_CAPS_LOCK"]=20]="KEY_CAPS_LOCK",e[e["KEY_ESCAPE"]=27]="KEY_ESCAPE",e[e["KEY_SPACE"]=32]="KEY_SPACE",e[e["KEY_PAGE_UP"]=33]="KEY_PAGE_UP",e[e["KEY_PAGE_DOWN"]=34]="KEY_PAGE_DOWN",e[e["KEY_END"]=35]="KEY_END",e[e["KEY_HOME"]=36]="KEY_HOME",e[e["KEY_LEFT"]=37]="KEY_LEFT",e[e["KEY_UP"]=38]="KEY_UP",e[e["KEY_RIGHT"]=39]="KEY_RIGHT",e[e["KEY_DOWN"]=40]="KEY_DOWN",e[e["KEY_PRINTSCREEN"]=44]="KEY_PRINTSCREEN",e[e["KEY_INSERT"]=45]="KEY_INSERT",e[e["KEY_DELETE"]=46]="KEY_DELETE",e[e["KEY_0"]=48]="KEY_0",e[e["KEY_1"]=49]="KEY_1",e[e["KEY_2"]=50]="KEY_2",e[e["KEY_3"]=51]="KEY_3",e[e["KEY_4"]=52]="KEY_4",e[e["KEY_5"]=53]="KEY_5",e[e["KEY_6"]=54]="KEY_6",e[e["KEY_7"]=55]="KEY_7",e[e["KEY_8"]=56]="KEY_8",e[e["KEY_9"]=57]="KEY_9",e[e["KEY_SEMICOLON"]=59]="KEY_SEMICOLON",e[e["KEY_EQUALS"]=61]="KEY_EQUALS",e[e["KEY_A"]=65]="KEY_A",e[e["KEY_B"]=66]="KEY_B",e[e["KEY_C"]=67]="KEY_C",e[e["KEY_D"]=68]="KEY_D",e[e["KEY_E"]=69]="KEY_E",e[e["KEY_F"]=70]="KEY_F",e[e["KEY_G"]=71]="KEY_G",e[e["KEY_H"]=72]="KEY_H",e[e["KEY_I"]=73]="KEY_I",e[e["KEY_J"]=74]="KEY_J",e[e["KEY_K"]=75]="KEY_K",e[e["KEY_L"]=76]="KEY_L",e[e["KEY_M"]=77]="KEY_M",e[e["KEY_N"]=78]="KEY_N",e[e["KEY_O"]=79]="KEY_O",e[e["KEY_P"]=80]="KEY_P",e[e["KEY_Q"]=81]="KEY_Q",e[e["KEY_R"]=82]="KEY_R",e[e["KEY_S"]=83]="KEY_S",e[e["KEY_T"]=84]="KEY_T",e[e["KEY_U"]=85]="KEY_U",e[e["KEY_V"]=86]="KEY_V",e[e["KEY_W"]=87]="KEY_W",e[e["KEY_X"]=88]="KEY_X",e[e["KEY_Y"]=89]="KEY_Y",e[e["KEY_Z"]=90]="KEY_Z",e[e["KEY_LEFT_CMD"]=91]="KEY_LEFT_CMD",e[e["KEY_RIGHT_CMD"]=93]="KEY_RIGHT_CMD",e[e["KEY_CONTEXT_MENU"]=93]="KEY_CONTEXT_MENU",e[e["KEY_NUMPAD0"]=96]="KEY_NUMPAD0",e[e["KEY_NUMPAD1"]=97]="KEY_NUMPAD1",e[e["KEY_NUMPAD2"]=98]="KEY_NUMPAD2",e[e["KEY_NUMPAD3"]=99]="KEY_NUMPAD3",e[e["KEY_NUMPAD4"]=100]="KEY_NUMPAD4",e[e["KEY_NUMPAD5"]=101]="KEY_NUMPAD5",e[e["KEY_NUMPAD6"]=102]="KEY_NUMPAD6",e[e["KEY_NUMPAD7"]=103]="KEY_NUMPAD7",e[e["KEY_NUMPAD8"]=104]="KEY_NUMPAD8",e[e["KEY_NUMPAD9"]=105]="KEY_NUMPAD9",e[e["KEY_MULTIPLY"]=106]="KEY_MULTIPLY",e[e["KEY_ADD"]=107]="KEY_ADD",e[e["KEY_SEPARATOR"]=108]="KEY_SEPARATOR",e[e["KEY_SUBTRACT"]=109]="KEY_SUBTRACT",e[e["KEY_DECIMAL"]=110]="KEY_DECIMAL",e[e["KEY_DIVIDE"]=111]="KEY_DIVIDE",e[e["KEY_F1"]=112]="KEY_F1",e[e["KEY_F2"]=113]="KEY_F2",e[e["KEY_F3"]=114]="KEY_F3",e[e["KEY_F4"]=115]="KEY_F4",e[e["KEY_F5"]=116]="KEY_F5",e[e["KEY_F6"]=117]="KEY_F6",e[e["KEY_F7"]=118]="KEY_F7",e[e["KEY_F8"]=119]="KEY_F8",e[e["KEY_F9"]=120]="KEY_F9",e[e["KEY_F10"]=121]="KEY_F10",e[e["KEY_F11"]=122]="KEY_F11",e[e["KEY_F12"]=123]="KEY_F12",e[e["KEY_F13"]=124]="KEY_F13",e[e["KEY_F14"]=125]="KEY_F14",e[e["KEY_F15"]=126]="KEY_F15",e[e["KEY_F16"]=127]="KEY_F16",e[e["KEY_F17"]=128]="KEY_F17",e[e["KEY_F18"]=129]="KEY_F18",e[e["KEY_F19"]=130]="KEY_F19",e[e["KEY_F20"]=131]="KEY_F20",e[e["KEY_F21"]=132]="KEY_F21",e[e["KEY_F22"]=133]="KEY_F22",e[e["KEY_F23"]=134]="KEY_F23",e[e["KEY_F24"]=135]="KEY_F24",e[e["KEY_NUM_LOCK"]=144]="KEY_NUM_LOCK",e[e["KEY_SCROLL_LOCK"]=145]="KEY_SCROLL_LOCK",e[e["KEY_COMMA"]=188]="KEY_COMMA",e[e["KEY_PERIOD"]=190]="KEY_PERIOD",e[e["KEY_SLASH"]=191]="KEY_SLASH",e[e["KEY_BACK_QUOTE"]=192]="KEY_BACK_QUOTE",e[e["KEY_OPEN_BRACKET"]=219]="KEY_OPEN_BRACKET",e[e["KEY_BACK_SLASH"]=220]="KEY_BACK_SLASH",e[e["KEY_CLOSE_BRACKET"]=221]="KEY_CLOSE_BRACKET",e[e["KEY_QUOTE"]=222]="KEY_QUOTE",e[e["KEY_META"]=224]="KEY_META"}(r||(r={}))},5978:function(e,t,a){"use strict";var r=a("05a4"),n=a.n(r);n.a},"646d":function(e,t,a){},8779:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"session-info"},[e._v(" Cards left in this lesson: "+e._s(e.lesson.cardsLeftToGetCorrect.length)+" ")]),a("router-link",{staticClass:"unstyled-link",attrs:{to:"/card/back"}},[a("div",{staticClass:"card-container"},[a("CardFrontDisplay",{attrs:{card:e.card.card}})],1)]),a("router-link",{attrs:{to:"/card/back"}},[a("div",[e._v(" Flip over ")])])],1)},n=[],o=a("a026"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{domProps:{innerHTML:e._s(e.card.template.renderFront(e.card))}})])},E=[],_=a("9f82"),i=o["a"].extend({name:"CardFrontDisplay",props:{card:_["b"]}}),c=i,d=a("2877"),K=Object(d["a"])(c,s,E,!1,null,"02969a17",null),Y=K.exports,l=a("3ecc"),u=o["a"].extend({mounted:function(){window.addEventListener("keypress",this.handleKeyPress)},destroyed:function(){window.removeEventListener("keypress",this.handleKeyPress)},methods:{handleKeyPress:function(e){e.keyCode==l["a"].KEY_SPACE&&this.$router.push("/card/back")}},data:function(){return{lesson:this.$store.state.currentLesson,card:this.$store.state.currentLesson.getCurrentReviewCard()}},components:{CardFrontDisplay:Y}}),C=u,v=(a("5978"),Object(d["a"])(C,r,n,!1,null,null,null));t["default"]=v.exports},"9de6":function(e,t,a){},a7a6:function(e,t,a){"use strict";var r=a("3bcd"),n=a.n(r);n.a},b5d7:function(e,t,a){"use strict";var r=a("9de6"),n=a.n(r);n.a},f9bb:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",[e._v(" This is a temp debug page. The data format may change whenever. ")]),a("section",[e._v(" Below is the current data stored. Copy it to the clipboard and save it somewhere to back it up. ")]),a("section",[e._v(" Replace this with the contents from somewhere else and click the buttons below to either merge new data, or clear storage and import ")]),a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.savedData,expression:"savedData"}],attrs:{id:"savedDataTextArea",placeholder:"localstorage",rows:"20",cols:"100"},domProps:{value:e.savedData},on:{input:function(t){t.target.composing||(e.savedData=t.target.value)}}})]),a("div",[a("button",{on:{click:function(t){return e.copyToClipboard()}}},[e._v("Copy to clipboard")]),a("button",{on:{click:function(t){return e.mergeData()}}},[e._v("Merge")]),a("button",{on:{click:function(t){return e.clearAndImportData()}}},[e._v(" Clear storage and import ")]),a("input",{ref:"fileUpload",attrs:{type:"file",id:"fileUpload"},on:{change:function(t){return e.handleFileUpdate()}}}),a("button",{on:{click:function(t){return e.clearData()}}},[e._v("Clear data")])]),a("div",[a("button",{on:{click:function(t){return e.saveToLocal()}}},[e._v("Save data to local storage")]),a("button",{on:{click:function(t){return e.saveRemote()}}},[e._v("Save data to remote")]),a("button",{on:{click:function(t){return e.getDataRemote()}}},[e._v("Merge data from remote")])]),e.downloadLink?a("div",[a("a",{attrs:{href:e.downloadLink.textFileBlob,download:e.downloadLink.fileName}},[e._v(e._s(e.downloadLink.innerHTML))])]):e._e()])},n=[],o=a("a026"),s=a("2f1f"),E=o["a"].extend({methods:{copyToClipboard:function(){const e=document.querySelector("#savedDataTextArea");e&&e instanceof HTMLTextAreaElement?(e.select(),document.execCommand("copy")):console.error("Error in copying text area to clipboard")},clearData:function(){window.localStorage.clear(),window.location.href=a.p},clearAndImportData:function(){window.localStorage.clear(),this.mergeData(),window.location.href=a.p},mergeData:function(){const e=JSON.parse(this.$data.savedData),t=Object.keys(e);t.forEach(t=>{window.localStorage.setItem(t,e[t])}),window.location.href=a.p},saveRemote:function(){const e=window.prompt("Input url to post saved data");e&&s["d"].postData(e,this.$data.savedData)},getDataRemote:function(){const e=window.prompt("Input url to get saved data");if(!e)return;const t=s["d"].getData(e);t.then(e=>{this.$data.savedData=JSON.stringify(e),this.mergeData(),window.location.href=a.p})},handleFileUpdate:async function(){try{const e=this.$refs.fileUpload.files[0],t=await e.text();console.log(t),this.$data.savedData=t,this.mergeData()}catch(e){console.error(e),window.alert("Failed to parse uploaded file")}},saveToLocal:function(){const e=document.querySelector("#savedDataTextArea");if(!e)return void window.alert("Failed to download saved data to file.");const t=e.value,a=new Blob([t],{type:"text/plain"}),r="janki-data.json";this.$data.downloadLink={fileName:r,textFileBlob:window.URL.createObjectURL(a),innerHTML:"Download "+r}}},data:function(){return{downloadLink:void 0,savedData:JSON.stringify({...window.localStorage})}},components:{}}),_=E,i=(a("1943"),a("2877")),c=Object(i["a"])(_,r,n,!1,null,"f0a2ffbc",null);t["default"]=c.exports}}]);