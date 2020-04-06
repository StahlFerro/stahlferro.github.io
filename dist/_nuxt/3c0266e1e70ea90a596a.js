(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{145:function(t){t.exports=JSON.parse('{"og:title":"StahlFerro","og:site_name":"StahlFerro\'s Website","og:description":"StahlFerro\'s Official Website","og:image":"/img/Duality.png","og:type":"website","og:url":"https://stahlferro.github.io","twitter:card":"summary_large_image","theme-color":"#5595FF"}')},146:function(t,e,n){var r=n(6),l=n(147)(!0);r(r.S,"Object",{entries:function(t){return l(t)}})},147:function(t,e,n){var r=n(7),l=n(19),c=n(16),o=n(36).f;t.exports=function(t){return function(e){for(var n,d=c(e),v=l(d),m=v.length,i=0,f=[];m>i;)n=v[i++],r&&!o.call(d,n)||f.push(t?[n,d[n]]:d[n]);return f}}},148:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.r(e),n.d(e,"generate_meta",(function(){return c})),n.d(e,"canonize_url",(function(){return o})),n.d(e,"tag_canonical_url",(function(){return d}));var l=n(26);n(25),n(17),n(146);function c(t){var e=o(t.path),n={"og:title":t.title,"og:description":t.description,"og:image":t.image,"theme-color":t.theme_color,"og:url":e},c=Object.entries(n).map((function(t){var e=Object(l.a)(t,2),n=e[0];return{hid:n,name:n,content:e[1]}}));return[{hid:"title",name:"title",content:n["og:title"]},{hid:"description",name:"description",content:n["og:description"]}].concat(r(c))}function o(t){var e=n(145)["og:url"];return"".concat(e).concat(t)}function d(t){return[{hid:"canonical",rel:"canonical",href:o(t)}]}},159:function(t,e,n){"use strict";n.r(e);var r=n(148),l=r.generate_meta,c=r.tag_canonical_url,o="/softwares/tridentframe",d=l({title:"TridentFrame",description:"The swiss-army knife for creating, splitting or converting animated GIFs/APNGs. A FOSS project available for Windows, Mac and Linux",image:"/thumb/TridentFrame_Thumb.png",theme_color:"#34caf8",path:o});console.log(c(o));var v={head:function(){return{title:"TridentFrame",meta:d,link:c(o)}}},m=n(13),component=Object(m.a)(v,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"hero is-medium is-trident-cyan"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-8 is-variable is-vcentered"},[n("div",{staticClass:"column"},[n("div",{staticClass:"content"},[n("nav",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("img",{attrs:{src:"/logos/TridentFrame_logo_inverted.svg",width:"90px",height:"90px"}})]),t._v(" "),n("div",{staticClass:"level-item"}),t._v(" "),n("div",{staticClass:"level-item"},[n("h1",{staticClass:"title is-1"},[t._v("TridentFrame")])])])]),t._v(" "),n("p",{staticClass:"subtitle is-4"},[t._v("\n                The desktop swiss-army knife for creating, splitting or converting\n                "),n("span",{staticClass:"bg-dark-3"},[t._v("GIFs/APNGs")]),t._v(",\n                and building/slicing\n                "),n("span",{staticClass:"bg-dark-3"},[t._v("spritesheets")])]),t._v(" "),n("p",{staticClass:"subtitle is-4"},[t._v("The beta is now out for download!")]),t._v(" "),n("nav",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("a",{staticClass:"button is-github-black is-medium",attrs:{href:"https://github.com/StahlFerro/TridentFrame/releases"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-download"})]),t._v(" "),n("span",[t._v("Downloads")])])]),t._v(" "),n("div",{staticClass:"level-item"},[n("a",{staticClass:"button is-github-black is-medium",attrs:{href:"https://github.com/StahlFerro/TridentFrame"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fab fa-github"})]),t._v(" "),n("span",[t._v("Github")])])])])])])]),t._v(" "),n("div",{staticClass:"column"},[n("figure",{staticClass:"image",attrs:{title:"Raydn didn't feel so good. (Artist: Vayreceane)"}},[n("img",{staticClass:"image-shadow",attrs:{src:"/img/TridentFrame_preview_opt.png"}})])])])])]),t._v(" "),n("div",{staticClass:"hero-foot"},[n("div",{staticClass:"container has-text-centered"},[n("p",[t._v("Website's still rough and sparse at the moment")])])])]),t._v(" "),n("section",{staticClass:"hero is-medium is-trident-cyan-dark-3"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-vcentered has-text-centered"},[n("div",{staticClass:"column"},[n("div",{staticClass:"content"},[n("p",[n("span",{staticClass:"icon is-large"},[n("i",{staticClass:"fas fa-image fa-5x"})])]),t._v(" "),n("p",{staticClass:"title is-1"},[t._v("Create")]),t._v(" "),n("p",{staticClass:"subtitle is-4"},[t._v("Combine a sequence of images into a GIF, or an APNG")])])]),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"content"},[n("p",[n("span",{staticClass:"icon is-large"},[n("i",{staticClass:"far fa-images fa-5x"})])]),t._v(" "),n("p",{staticClass:"title is-1"},[t._v("Split")]),t._v(" "),n("p",{staticClass:"subtitle is-4"},[t._v("Split an animated GIF or APNG into a sequence of images")])])]),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"content"},[n("p",[n("span",{staticClass:"icon is-large"},[n("i",{staticClass:"fas fa-exchange-alt fa-5x"})])]),t._v(" "),n("p",{staticClass:"title is-1"},[t._v("Modify")]),t._v(" "),n("p",{staticClass:"subtitle is-4"},[t._v("Alter GIF/APNG formats, fps, size, optimization and more")])])]),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"content"},[n("p",[n("span",{staticClass:"icon is-large"},[n("i",{staticClass:"fas fa-th fa-5x"})])]),t._v(" "),n("p",{staticClass:"title is-1"},[t._v("Spritesheet")]),t._v(" "),n("p",{staticClass:"subtitle is-4"},[t._v("Create spritesheets from images, or slice a spritesheet into separate tiles")])])])])])])]),t._v(" "),n("section",{staticClass:"hero is-medium is-trident-cyan"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("p",{staticClass:"title is-2"},[t._v("Preview end results")]),t._v(" "),n("p",[t._v("With a modern and clean interface and animated previews, you know what you are exactly making")])])])])]),t._v(" "),n("section",{staticClass:"hero is-medium is-trident-cyan-dark-3"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("p",{staticClass:"title is-2"},[t._v("Details like you want 'em")]),t._v(" "),n("p",[t._v("In-depth information of loaded GIFs/APNGs is always ready if you want to go full technical")])])])])]),t._v(" "),n("section",{staticClass:"hero is-medium is-trident-cyan"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("p",{staticClass:"title is-2"},[t._v("Will always be...")]),t._v(" "),n("p",[t._v("Free ($0). Open source. No-watermarks.")])])])])])])}],!1,null,null,null);e.default=component.exports}}]);