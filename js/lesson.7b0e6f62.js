(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lesson"],{"0dfe":function(e,i,n){"use strict";n.r(i);var a=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",[n("ul",e._l(e.lesson.cards,(function(e){return n("li",{key:e.card.id},[n("LessonRow",{attrs:{reviewCard:e}})],1)})),0),n("router-link",{attrs:{to:"/card/front"}},[e._v("Begin Lesson")])],1)},d=[],s=n("a026"),f=n("9c90"),t=n("3b28"),k=n("e48b"),g=s["a"].extend({beforeCreate:function(){var e=new k["a"](t["a"].slice(0,2));this.$store.state.currentLesson instanceof k["a"]||(this.$store.state.currentLesson=e)},beforeMount:function(){this.$data.lesson.restart()},data:function(){return{lesson:this.$store.state.currentLesson}},components:{LessonRow:f["a"]}}),l=g,r=n("2877"),c=Object(r["a"])(l,a,d,!1,null,null,null);i["default"]=c.exports},"3b28":function(e,i,n){"use strict";n.d(i,"a",(function(){return g})),n.d(i,"b",(function(){return k})),n.d(i,"c",(function(){return t}));var a=function(){function e(e,i,n){this.id=e,this.tags=i,this.fields=n}return e}(),d=function(){function e(e,i,n){this.id=e,this.frontKey=i,this.backKey=n}return e.prototype.renderLessonFront=function(e){var i=e.note.fields[this.frontKey];return"<span>"+i+"</span>"},e.prototype.renderLessonBack=function(e){var i=e.note.fields[this.backKey];return"<span>"+i+"</span>"},e.prototype.renderFront=function(e){var i=e.note.fields[this.frontKey];return'<span style="font-size: 3em;">'+i+"</span>"},e.prototype.renderBack=function(e){var i=e.note.fields[this.frontKey],n=e.note.fields[this.backKey];return'\n    <span>\n      <span style="font-size: 3em;">'+n+'</span>\n      <hr/>\n      <span style="font-size: 1.5em;">'+i+"</span>  \n    </span>\n    "},e}(),s=n("4643"),f=[{fields:{english:"um...",kanji:"あの…",reading:"あの…"},id:"444a7a2c-db4a-4f22-9796-4ae877319266",tags:["Genki","Genki_1"]},{fields:{english:"now",kanji:"今",reading:"今[いま]"},id:"bf814289-319f-4c34-afd6-9e5b6add8b5f",tags:["Genki","Genki_1"]},{fields:{english:"English (language)",kanji:"英語",reading:"英語[えいご]"},id:"ed630360-a34c-4fbb-89f4-718cb9f222be",tags:["Genki","Genki_1"]},{fields:{english:"student",kanji:"学生",reading:"学生[がくせい]"},id:"0ac304c2-2d68-4b40-9935-38c059e95b11",tags:["Genki","Genki_1"]},{fields:{english:"language",kanji:"〜語",reading:"〜 語[ご]"},id:"45f76b75-02ff-4f8f-a443-0bedd13a8ede",tags:["Genki","Genki_1"]},{fields:{english:"high school",kanji:"高校",reading:"高校[こうこう]"},id:"000386ac-20f1-4476-9e36-3f9f391d2caf",tags:["Genki","Genki_1"]},{fields:{english:"P.M.",kanji:"午後",reading:"午後[ごご]"},id:"44615d4f-985d-4b77-a1f1-78e3f1ad45b5",tags:["Genki","Genki_1"]},{fields:{english:"A.M.",kanji:"午前",reading:"午前[ごぜん]"},id:"909079ad-406b-449b-9f5e-32fc0d6a24b2",tags:["Genki","Genki_1"]},{fields:{english:"...years old",kanji:"〜歳",reading:"〜 歳[さい]"},id:"afed8749-a225-4e81-b99b-292b66c2dc22",tags:["Genki","Genki_1"]},{fields:{english:"Mr./Ms....",kanji:"〜さん",reading:"〜さん"},id:"c3e011a5-d591-43aa-afe2-c58fea4d6797",tags:["Genki","Genki_1"]},{fields:{english:"o'clock",kanji:"〜時",reading:"〜 時[じ]"},id:"05ec0756-45fa-4cb2-9b6e-790720207d54",tags:["Genki","Genki_1"]},{fields:{english:"~ people",kanji:"〜人",reading:"〜 人[じん]"},id:"1fd59da4-91f7-44bc-90a0-3686e082a6d1",tags:["Genki","Genki_1"]},{fields:{english:"teacher; Professor ...",kanji:"先生",reading:"先生[せんせい]"},id:"dcbbfb8a-d29a-499a-9e92-e9fcfc9ed889",tags:["Genki","Genki_1"]},{fields:{english:"major",kanji:"専門",reading:"専門[せんもん]"},id:"d4925e26-cdf3-4a1b-9ea9-1ec98b98dfff",tags:["Genki","Genki_1"]},{fields:{english:"That's right.",kanji:"そうです",reading:"そうです"},id:"83892e0a-b703-4671-8ff2-eb466d520f2f",tags:["Genki","Genki_1"]},{fields:{english:"college; university",kanji:"大学",reading:"大学[だいがく]"},id:"6106fef5-3705-41b9-b79a-32e09c6ff814",tags:["Genki","Genki_1"]},{fields:{english:"telephone",kanji:"電話",reading:"電話[でんわ]"},id:"a734c6ab-339c-419e-b64a-f120eb396a67",tags:["Genki","Genki_1"]},{fields:{english:"friend",kanji:"友達",reading:"友達[ともだち]"},id:"7dcf1748-1ce2-4e6c-83fe-92c697453eb3",tags:["Genki","Genki_1"]},{fields:{english:"name",kanji:"名前",reading:"名前[なまえ]"},id:"d5c88f3d-44b9-44ce-b116-06351d804187",tags:["Genki","Genki_1"]},{fields:{english:"what",kanji:"何",reading:"何[なに]"},id:"c11e5ccd-884f-4e04-87a1-9894c334b07b",tags:["Genki","Genki_1"]},{fields:{english:"Japan",kanji:"日本",reading:"日本[にっぽん]"},id:"705d73d9-d8c3-4dbc-9390-dd4218c6cdbb",tags:["Genki","Genki_1"]},{fields:{english:"...year student",kanji:"〜年生",reading:"〜 年生[ねんせい]"},id:"6f928021-756f-4abb-8c08-0ed8a0ea230f",tags:["Genki","Genki_1"]},{fields:{english:"yes",kanji:"はい",reading:"はい"},id:"d7d1198b-7e1d-45ae-99ad-7fc16fd1ab4b",tags:["Genki","Genki_1"]},{fields:{english:"half",kanji:"半",reading:"半[はん]"},id:"57e226f1-cee4-4d96-aa21-6357ff77885a",tags:["Genki","Genki_1"]},{fields:{english:"number",kanji:"番号",reading:"番号[ばんごう]"},id:"b7be12c2-e1be-4e08-8fc7-361b9059d64a",tags:["Genki","Genki_1"]},{fields:{english:"international student",kanji:"留学生",reading:"留学生[りゅうがくせい]"},id:"a80cb18a-13f3-43d0-a657-01692e1a6c97",tags:["Genki","Genki_1"]},{fields:{english:"I",kanji:"私",reading:"私[わたし]"},id:"ded181df-980f-403a-91a1-4479e99dc839",tags:["Genki","Genki_1"]},{fields:{english:"U.S.A.",kanji:"アメリカ",reading:"アメリカ"},id:"775c61a0-ce69-4500-980c-cb9c13792070",tags:["Genki","Genki_1"]},{fields:{english:"Britain",kanji:"イギリス",reading:"イギリス"},id:"7ae84b95-f596-4af4-af22-252b974c0857",tags:["Genki","Genki_1"]},{fields:{english:"Australia",kanji:"オーストラリア",reading:"オーストラリア"},id:"c4d9f236-0474-4fb9-98a3-b319fa1c0fed",tags:["Genki","Genki_1"]},{fields:{english:"Korea",kanji:"韓国",reading:"韓国[かんこく]"},id:"bb3fb07b-ee3e-45d0-8f36-4f3bcaf9fce1",tags:["Genki","Genki_1"]},{fields:{english:"Sweden",kanji:"スウェーデン",reading:"スウェーデン"},id:"18dc6e63-7e7b-495e-ba12-ce672a1851ed",tags:["Genki","Genki_1"]},{fields:{english:"China",kanji:"中国",reading:"中国[ちゅうごく]"},id:"75809a36-90b5-4571-88c2-33aacce51dd8",tags:["Genki","Genki_1"]},{fields:{english:"science",kanji:"科学",reading:"科学[かがく]"},id:"81a26057-825e-424c-b26b-58e4b98ce8d8",tags:["Genki","Genki_1"]},{fields:{english:"Asian studies",kanji:"アジア研究",reading:"アジア 研究[けんきゅう]"},id:"5524758e-d18c-4c85-816d-7b73b1c1c052",tags:["Genki","Genki_1"]},{fields:{english:"international relations",kanji:"国際関係",reading:"国際[こくさい] 関係[かんけい]"},id:"f89f7b41-ade8-4183-bb91-51c26763d244",tags:["Genki","Genki_1"]},{fields:{english:"computer",kanji:"コンピューター",reading:"コンピューター"},id:"ef4ab1f2-1cf0-45ee-a3fe-f8faea521c6d",tags:["Genki","Genki_1"]},{fields:{english:"anthropology",kanji:"人類学",reading:"人類[じんるい] 学[がく]"},id:"5bd83ba5-dd9e-4913-b294-83589b369269",tags:["Genki","Genki_1"]},{fields:{english:"politics",kanji:"政治",reading:"政治[せいじ]"},id:"a86f0500-b8e8-4919-a575-6b03f85eaf80",tags:["Genki","Genki_1"]},{fields:{english:"business",kanji:"ビジネス",reading:"ビジネス"},id:"ab96cc02-c461-4c4a-8590-9c937798dc09",tags:["Genki","Genki_1"]},{fields:{english:"literature",kanji:"文学",reading:"文学[ぶんがく]"},id:"07efba2f-0ce2-4861-abf2-24d0d70f2aec",tags:["Genki","Genki_1"]},{fields:{english:"history",kanji:"歴史",reading:"歴史[れきし]"},id:"d9bb4dc6-c79e-45b4-8043-0fbec31ffad0",tags:["Genki","Genki_1"]},{fields:{english:"job; work; occupation",kanji:"仕事",reading:"仕事[しごと]"},id:"fdef3760-0cbc-44fd-aa84-743aac2274d4",tags:["Genki","Genki_1"]},{fields:{english:"doctor",kanji:"医者",reading:"医者[いしゃ]"},id:"0dd08dbb-511d-4eb2-ad87-0a28b960017e",tags:["Genki","Genki_1"]},{fields:{english:"office worker",kanji:"会社員",reading:"会社[かいしゃ] 員[いん]"},id:"a5612638-f27a-4922-b757-8120ad9d0b5d",tags:["Genki","Genki_1"]},{fields:{english:"high school student",kanji:"高校生",reading:"高校生[こうこうせい]"},id:"2f615095-bc0f-480f-a5cf-7f8fc4444080",tags:["Genki","Genki_1"]},{fields:{english:"housewife",kanji:"主婦",reading:"主婦[しゅふ]"},id:"d65a7445-4ae8-4c67-93c5-b89d57d6fe91",tags:["Genki","Genki_1"]},{fields:{english:"graduate student",kanji:"大学院生",reading:"大学院生[だいがくいんせい]"},id:"598db310-6f2e-4045-ad4a-a5eb2cfabbd6",tags:["Genki","Genki_1"]},{fields:{english:"college student",kanji:"大学生",reading:"大学生[だいがくせい]"},id:"b9e736a9-4411-48b9-9712-0d875f626f58",tags:["Genki","Genki_1"]},{fields:{english:"lawyer",kanji:"弁護士",reading:"弁護士[べんごし]"},id:"107ffcf6-1113-45a9-a608-f0931ebd50ca",tags:["Genki","Genki_1"]},{fields:{english:"mother",kanji:"お母さん",reading:"お 母[かあ]さん"},id:"bea7cce2-fa7a-4ec2-8beb-ee0e29bd39a7",tags:["Genki","Genki_1"]},{fields:{english:"father",kanji:"お父さん",reading:"お 父[とう]さん"},id:"782a5bce-7b82-4a79-a76d-da0e266b6c2a",tags:["Genki","Genki_1"]},{fields:{english:"older sister",kanji:"お姉さん",reading:"お 姉[ねえ]さん"},id:"14c1ac96-960a-4081-890d-978ba021299c",tags:["Genki","Genki_1"]},{fields:{english:"older brother",kanji:"お兄さん",reading:"お 兄[にい]さん"},id:"c0231207-7f7a-4e45-96a9-9684ec695879",tags:["Genki","Genki_1"]},{fields:{english:"younger sister",kanji:"妹",reading:"妹[いもうと]"},id:"cd8009a9-10b1-451f-b753-85c14f1f22a7",tags:["Genki","Genki_1"]},{fields:{english:"(my) younger brother",kanji:"弟",reading:"弟[おとうと]"},id:"1436b3c1-d529-4a80-a31c-ba78ccca8f8d",tags:["Genki","Genki_1"]},{fields:{english:"one year old",kanji:"一歳",reading:"一歳[いっさい]"},id:"eccd5017-b1ea-417e-907c-af47c1fdb039",tags:["Genki","Genki_1"]},{fields:{english:"one minute",kanji:"一分",reading:"一分[いっぷん]"},id:"5eaea103-953d-4c30-9131-8d54707ca362",tags:["Genki","Genki_1"]},{fields:{english:"nine years old",kanji:"九歳",reading:"九歳[きゅうさい]"},id:"ec5dbaa6-b828-4831-80ff-31b1c225554e",tags:["Genki","Genki_1"]},{fields:{english:"nine minutes",kanji:"九分",reading:"九分[きゅうふん]"},id:"6d3c9aad-522e-4fa2-9c5b-4cdad9689f82",tags:["Genki","Genki_1"]},{fields:{english:"nine o'clock",kanji:"九時",reading:"九時[くじ]"},id:"d3b248d1-e38c-429d-a969-73ffa12b857f",tags:["Genki","Genki_1"]},{fields:{english:"five years old",kanji:"五歳",reading:"五歳[ごさい]"},id:"7f54e75c-73b8-467d-948e-76ea4a7e7af6",tags:["Genki","Genki_1"]},{fields:{english:"five o'clock",kanji:"五時",reading:"五時[ごじ]"},id:"4c724747-82a8-4437-8855-682abc35d369",tags:["Genki","Genki_1"]},{fields:{english:"five minutes",kanji:"五分",reading:"五分[ごふん]"},id:"2b475000-1ba9-406c-bf35-f0952efb5b27",tags:["Genki","Genki_1"]},{fields:{english:"three years old",kanji:"三歳",reading:"三歳[さんさい]"},id:"c8f20ddb-8347-425a-b4c5-88503b70e4ba",tags:["Genki","Genki_1"]},{fields:{english:"three o'clock",kanji:"三時",reading:"三時[さんじ]"},id:"2c93a66e-0495-4d35-8dcc-27522cf4f1d3",tags:["Genki","Genki_1"]},{fields:{english:"thirty minutes",kanji:"三十分",reading:"三十分[さんじゅっぷん]"},id:"94e35894-ea64-47dd-8d43-944c2fc51213",tags:["Genki","Genki_1"]},{fields:{english:"three minutes",kanji:"三分",reading:"三分[さんぷん]"},id:"08d9ef03-762b-457d-820e-8b0bfd6302c4",tags:["Genki","Genki_1"]},{fields:{english:"seven o'clock",kanji:"七時",reading:"七時[しちじ]"},id:"7374794f-4cd2-4bbd-849b-8d5b12067d08",tags:["Genki","Genki_1"]},{fields:{english:"eleven o'clock",kanji:"十一時",reading:"十一時[じゅういちじ]"},id:"803c14ab-ee38-4df2-8676-95eff5b26191",tags:["Genki","Genki_1"]},{fields:{english:"eleven years old",kanji:"十一歳",reading:"十一歳[じゅういっさい]"},id:"94eb4c40-7b8e-4816-9717-1bf3d1bbb4ba",tags:["Genki","Genki_1"]},{fields:{english:"eleven minutes",kanji:"十一分",reading:"十一分[じゅういっぷん]"},id:"6517bd48-83da-4f7f-8936-b5f9f737e08a",tags:["Genki","Genki_1"]},{fields:{english:"nineteen minutes",kanji:"十九分",reading:"十九分[じゅうきゅうふん]"},id:"93e1364f-c5ae-4e39-aa25-c09dfc864a0d",tags:["Genki","Genki_1"]},{fields:{english:"fifteen minutes",kanji:"十五分",reading:"十五分[じゅうごふん]"},id:"de3eb4a4-fbad-48c7-9d03-78c987aa4a95",tags:["Genki","Genki_1"]},{fields:{english:"thirteen minutes",kanji:"十三分",reading:"十三分[じゅうさんぷん]"},id:"d0562104-7581-4df4-a3b2-c9a9b645977b",tags:["Genki","Genki_1"]},{fields:{english:"ten o'clock",kanji:"十時",reading:"十時[じゅうじ]"},id:"aea45bf2-490a-483e-bb36-269d581f0636",tags:["Genki","Genki_1"]},{fields:{english:"seventeen minutes",kanji:"十七分",reading:"十七分[じゅうななふん]"},id:"58407be0-9872-4852-9b41-8448f90b3827",tags:["Genki","Genki_1"]},{fields:{english:"twelve o'clock",kanji:"十二時",reading:"十二時[じゅうにじ]"},id:"514a17f9-ca7a-4c76-b004-9d0ba7137004",tags:["Genki","Genki_1"]},{fields:{english:"twelve minutes",kanji:"十二分",reading:"十二分[じゅうにふん]"},id:"8208ca70-204c-4071-9237-44b642774808",tags:["Genki","Genki_1"]},{fields:{english:"eighteen minutes",kanji:"十八分",reading:"十八分[じゅうはっぷん]"},id:"5f232b35-4927-45c0-8292-f5c080df6b28",tags:["Genki","Genki_1"]},{fields:{english:"fourteen minutes",kanji:"十四分",reading:"十四分[じゅうよんぷん]"},id:"8541de4b-cfad-4693-9d2f-ef67b62a575b",tags:["Genki","Genki_1"]},{fields:{english:"sixteen minutes",kanji:"十六分",reading:"十六分[じゅうろっぷん]"},id:"f3f0e619-330b-48ab-a833-3fa154863524",tags:["Genki","Genki_1"]},{fields:{english:"ten years old",kanji:"十歳",reading:"十歳[じゅっさい]"},id:"a3c28340-b9a5-4c1b-b190-979c34ec29f8",tags:["Genki","Genki_1"]},{fields:{english:"ten minutes",kanji:"十分",reading:"十分[じゅっぷん]"},id:"150d1fcd-1b8b-4781-9752-10cc511bfba6",tags:["Genki","Genki_1"]},{fields:{english:"seven years old",kanji:"七歳",reading:"七歳[ななさい]"},id:"c79648d8-977e-4c25-8c9a-19ede5f95f35",tags:["Genki","Genki_1"]},{fields:{english:"seven minutes",kanji:"七分",reading:"七分[ななふん]"},id:"976bfc4b-9970-453e-82bd-56d3187dc1ea",tags:["Genki","Genki_1"]},{fields:{english:"two years old",kanji:"二歳",reading:"二歳[にさい]"},id:"6ff02d36-cfb6-4e38-8c38-a7f2564c60df",tags:["Genki","Genki_1"]},{fields:{english:"two o'clock",kanji:"二時",reading:"二時[にじ]"},id:"25fc7c3e-5a2e-4d23-9948-b4b5924b3b7f",tags:["Genki","Genki_1"]},{fields:{english:"twenty minutes",kanji:"二十分",reading:"二十分[にじゅっぷん]"},id:"aaa90536-61dd-431e-a9a1-505d775e7923",tags:["Genki","Genki_1"]},{fields:{english:"two minutes",kanji:"二分",reading:"二分[にふん]"},id:"7d071a69-b607-4e32-84e5-2694b98f1b62",tags:["Genki","Genki_1"]},{fields:{english:"twenty years old",kanji:"二十歳",reading:"二十歳[はたち]"},id:"510ec3d7-e01f-458e-9809-33aecd3979fe",tags:["Genki","Genki_1"]},{fields:{english:"eight o'clock",kanji:"八時",reading:"八時[はちじ]"},id:"38f0e62c-6715-4593-904d-5d39ab5f352e",tags:["Genki","Genki_1"]},{fields:{english:"eight years old",kanji:"八歳",reading:"八歳[はっさい]"},id:"cf7faafb-e8a5-4ca3-8804-72d8ba282db9",tags:["Genki","Genki_1"]},{fields:{english:"eight minutes",kanji:"八分",reading:"八分[はっぷん]"},id:"87cf0b03-4c20-410f-bb1f-3341f074c1af",tags:["Genki","Genki_1"]},{fields:{english:"four o'clock",kanji:"四時",reading:"四時[よじ]"},id:"a1f05b49-3b7c-4963-9461-e47a0b321fe7",tags:["Genki","Genki_1"]},{fields:{english:"four years old",kanji:"四歳",reading:"四歳[よんさい]"},id:"e2104086-c563-42b7-ad65-229f7d4f127f",tags:["Genki","Genki_1"]},{fields:{english:"four minutes",kanji:"四分",reading:"四分[よんぷん]"},id:"bd12636f-6b18-45ae-9704-e84c08021d82",tags:["Genki","Genki_1"]},{fields:{english:"six years old",kanji:"六歳",reading:"六歳[ろくさい]"},id:"263a103c-0b5d-45b5-9ba0-bcb24e21d261",tags:["Genki","Genki_1"]},{fields:{english:"six o'clock",kanji:"六時",reading:"六時[ろくじ]"},id:"f958126b-086a-4ef7-ad85-6a5a9e8e9de4",tags:["Genki","Genki_1"]},{fields:{english:"six minutes",kanji:"六分",reading:"六分[ろっぷん]"},id:"0d944e49-06b0-4d2f-9f56-7a3276b2a7fd",tags:["Genki","Genki_1"]}],t=new d("template_id","kanji","english"),k=f.map((function(e){return new a(e.id,e.tags,e.fields)})),g=k.map((function(e){return new s["b"](e,t)}))},6333:function(e,i,n){"use strict";n.r(i);var a=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",[n("ul",e._l(e.lesson.cards,(function(e){return n("li",{key:e.card.id},[n("LessonRow",{attrs:{reviewCard:e}})],1)})),0),n("router-link",{attrs:{to:"/lesson"},on:{click:function(i){return e.lesson.restart()}}},[e._v("Restart lesson")])],1)},d=[],s=n("9c90"),f=n("a026"),t=f["a"].extend({data:function(){return{lesson:this.$store.state.currentLesson}},components:{LessonRow:s["a"]}}),k=t,g=n("2877"),l=Object(g["a"])(k,a,d,!1,null,null,null);i["default"]=l.exports},"9c90":function(e,i,n){"use strict";var a=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("span",[e._v(" "+e._s(e.reviewCard.card.id)+" | "),n("span",{domProps:{innerHTML:e._s(e.reviewCard.card.template.renderLessonFront(e.reviewCard.card))}}),e._v(" | "),n("span",{domProps:{innerHTML:e._s(e.reviewCard.card.template.renderLessonBack(e.reviewCard.card))}}),e._v(" | "+e._s(e.reviewCard.metadata.answeredCorrectly)+" ")])},d=[],s=n("a026"),f=s["a"].extend({name:"LessonRow",props:{reviewCard:Object}}),t=f,k=n("2877"),g=Object(k["a"])(t,a,d,!1,null,null,null);i["a"]=g.exports}}]);
//# sourceMappingURL=lesson.7b0e6f62.js.map