(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,n){var r=n(6),o=n(146)(!0);r(r.S,"Object",{entries:function(e){return o(e)}})},146:function(e,t,n){var r=n(7),o=n(18),m=n(15),l=n(35).f;e.exports=function(e){return function(t){for(var n,c=m(t),d=o(c),_=d.length,i=0,f=[];_>i;)n=d[i++],r&&!l.call(c,n)||f.push(e?[n,c[n]]:c[n]);return f}}},147:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return r}))},148:function(e){e.exports=JSON.parse('{"og:title":"StahlFerro","og:site_name":"StahlFerro\'s Website","og:description":"StahlFerro\'s Official Website","og:image":"/img/Duality.png","og:type":"website","og:url":"https://stahlferro.github.io","twitter:card":"summary_large_image","theme-color":"#5595FF"}')},149:function(e){e.exports=JSON.parse('[{"name":"Brave Frontier","page_url":"brave_frontier","desc":"GIFs made in conjunction during the development of the Brave Frontier MLG series","medias":[{"name":"Pingu","fname_mp4":"pingu.mp4"},{"name":"War Demon Shusui","fname_mp4":"sushi.mp4"},{"name":"MLG Myoukei","fname_mp4":"mlg_myoukei.mp4"},{"name":"Charis","fname_mp4":"charis_blasted.mp4"},{"name":"Freed MLG","fname_mp4":"freed_mlg.mp4"},{"name":"Silvie MLG","fname_mp4":"silvie_mlg.mp4"},{"name":"Scoper Burny","fname_mp4":"scoper_burny.mp4"},{"name":"U.D.O.","fname_mp4":"ultra_dense_object.mp4"},{"name":"RIP #general-chat","fname_mp4":"ripgenchat.mp4"},{"name":"Ragzebyrl","fname_mp4":"ragzebyrl_poke.mp4"},{"name":"Live 2D Mariletta","fname_mp4":"mariletta_animated.mp4"},{"name":"GIMU HQ Preview","fname_mp4":"gimu_hq.mp4"},{"name":"Dragon summon","fname_mp4":"stirs_summon.mp4"},{"name":"Rune VFX test","fname_mp4":"testsurfaceglow.mp4"},{"name":"Swaglords Silhouette","fname_mp4":"swaglords_silhouette.mp4"},{"name":"Swaglord Four Title Sequence","fname_mp4":"swaglord_four_title_sequence.mp4"}]},{"name":"Blobs","page_url":"blobs","desc":"Various animated blob GIFs seasoned with VFX","medias":[{"name":"Blobnom","fname_mp4":"blobnom.mp4"},{"name":"Blobnomming Discord","fname_mp4":"blobnom_discord.mp4"},{"name":"Blob Crashin\' Thru","fname_mp4":"blobcrash.mp4"},{"name":"B4nzy","fname_mp4":"b4nzy.mp4"},{"name":"Blob Laser","fname_mp4":"blobspacelaser.mp4"},{"name":"Navy Blob Copypasta","fname_mp4":"blobbypasta.mp4"},{"name":"Cosmic Ban","fname_mp4":"blobcosmicban.mp4"},{"name":"Blob Samurai","fname_mp4":"blobsamurai.mp4"},{"name":"SUPER BLOB","fname_mp4":"SUPERBLOB.mp4"}]}]')},163:function(e,t,n){"use strict";n.r(t);var r=n(147),o=n(26),m=(n(25),n(19),n(145),n(149)),l=n(148)["og:url"],c={gifs:m,menuselection:m[0].page_url,base_url:l},d={"og:title":"VFX Gallery","og:description":"The gallery of every short VFX animations that I've made in the form of MP4s","og:image":"/thumb/VFXAnim_Thumb.png","theme-color":"#9947a6","og:url":"".concat(c.base_url,"/gallery")},_=Object.entries(d).map((function(e){var t=Object(o.a)(e,2),n=t[0];return{hid:n,name:n,content:t[1]}}));var f={head:function(){return{title:d["og:title"],meta:[{hid:"title",name:"title",content:d["og:title"]},{hid:"description",name:"description",content:d["og:description"]}].concat(Object(r.a)(_))}},data:function(){return c},methods:{copySuccess:function(){console.log("Successfully copied to clipboard")},copyError:function(){console.log("Cannot copy to clipboard")}}},v=n(12),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"hero is-dark-2 is-medium"},[e._m(0),e._v(" "),n("div",{staticClass:"hero-foot"},[n("div",{staticClass:"tabs is-neon-trident-cyan is-centered is-large"},[n("ul",e._l(e.gifs,(function(t,r){return n("li",{key:r,class:{"is-active":e.menuselection==t.page_url}},[n("a",{on:{click:function(n){e.menuselection=t.page_url}}},[e._v("\n                  "+e._s(t.name)+"\n                ")])])})),0)])])]),e._v(" "),n("section",{staticClass:"hero is-dark-2 is-fullheight-with-navbar"},[n("div",{staticClass:"gallery-container"},e._l(e.gifs,(function(t,r){return n("div",{directives:[{name:"show",rawName:"v-show",value:e.menuselection==t.page_url,expression:"menuselection == collection.page_url"}],key:r,staticClass:"columns is-multiline",attrs:{width:"100%"}},e._l(t.medias,(function(r,o){return n("div",{key:o,staticClass:"column is-one-quarter"},[n("div",{staticClass:"card is-neon-trident-cyan"},[n("div",{staticClass:"card-image"},[n("div",{staticClass:"video-container"},[n("video",{attrs:{controls:"controls",loop:"loop"}},[n("source",{attrs:{src:"/gifstash/"+t.page_url+"/"+r.fname_mp4,type:"video/mp4"}})])])]),e._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[n("p",{staticClass:"title is-4"},[e._v(e._s(r.name))]),e._v(" "),n("p",{staticClass:"content"},[e._v(e._s(r.description))])])]),e._v(" "),n("div",{staticClass:"card-footer"},[n("a",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.base_url+"/gifstash/"+t.page_url+"/"+r.fname_mp4,expression:"`${base_url}/gifstash/${collection.page_url}/${gif.fname_mp4}`",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.copyError,expression:"copyError",arg:"error"}],staticClass:"card-footer-item hover-trident-cyan"},[e._m(1,!0),e._v(" "),n("span",[e._v("Copy link")])])])])])})),0)})),0)])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-centered"},[n("div",{staticClass:"content theme-dark-2"},[n("h1",{staticClass:"title"},[e._v("VFX Gallery")]),e._v(" "),n("p",[e._v("\n            This is the official gallery of short VFX-composited vector animations that I've made. \n            Originally hosted on Imgur and are only link-viewable, they are now gradually compiled here on this webpage.\n          ")]),e._v(" "),n("p",[e._v("\n            All of the animations listed below use the "),n("br"),e._v(" "),n("a",{staticClass:"hover-trident-cyan",attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[e._v("Creative Commons Attribution 4.0 International License")]),e._v(".\n            "),n("br"),e._v(" "),n("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[n("img",{staticStyle:{"border-width":"0"},attrs:{alt:"Creative Commons License",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),n("br")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon is-medium"},[t("i",{staticClass:"fas fa-link"})])}],!1,null,null,null);t.default=component.exports}}]);