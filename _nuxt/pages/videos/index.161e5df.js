(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{153:function(t){t.exports=JSON.parse('{"og:title":"StahlFerro","og:site_name":"StahlFerro\'s Website","og:description":"StahlFerro\'s Official Website","og:image":"/img/Duality.png","og:type":"website","og:url":"https://stahlferro.github.io","twitter:card":"summary_large_image","theme-color":"#5595FF"}')},154:function(t,e,n){"use strict";n.r(e),n.d(e,"generate_meta",(function(){return d})),n.d(e,"canonize_url",(function(){return m})),n.d(e,"tag_canonical_url",(function(){return h}));var o=n(57);var r=n(75);function l(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n(29);n(28),n(12),n(152);function d(t){var e=m(t.path),n={"og:title":t.title,"og:description":t.description,"og:image":t.image,"theme-color":t.theme_color,"og:url":e},o=Object.entries(n).map((function(t){var e=Object(c.a)(t,2),n=e[0];return{hid:n,name:n,content:e[1]}}));return[{hid:"title",name:"title",content:n["og:title"]},{hid:"description",name:"description",content:n["og:description"]}].concat(l(o))}function m(t){var e=n(153)["og:url"];return"".concat(e).concat(t)}function h(t){return[{hid:"canonical",rel:"canonical",href:m(t)}]}},157:function(t){t.exports=JSON.parse('[{"name":"Brave Frontier MLG","desc":"The 8-video series of Brave Frontier MLG montage-parody videos","page_url":"brave_frontier_mlg","thumb_url":"BFMLG_Thumb_opt.png"},{"name":"Tutorials","desc":"A collection of how-tos and tutorials on After Effects, and how I made my videos","page_url":"tutorials","thumb_url":"AE_Tutorials.png"},{"name":"Thesis","desc":"Short two videos on the start and end of academics","page_url":"thesis","thumb_url":"Thesis_Duo.png"},{"name":"Miscellaneous MLG","desc":"MLG Parodies on miscellaneous videos, films and other media","page_url":"misc_mlg_videos","thumb_url":"Misc_MLG.png"},{"name":"Montage Galaxy","desc":"An upcoming video series revolving around the Montage Galaxy","thumb_url":"Montage_Galaxy.png"},{"name":"Arknights VFX-animations","desc":"Various Arknights meme material composited with proper VFX","page_url":"arknights_vfx"}]')},166:function(t,e,n){"use strict";n.r(e);var o=n(154),r=o.generate_meta,l=o.tag_canonical_url,c=r({title:"Videos",description:"All of the youtube videos I have made with information regarding them",image:"/thumb/ogthumb_videos.png",theme_color:"#e31e1e",path:"/videos"}),d={videos:n(157)},m={head:function(){return{title:"Videos",meta:c,link:l("/videos")}},data:function(){return d}},h=n(14),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section is-dark-2"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-multiline"},t._l(t.videos,(function(e,o){return n("div",{key:o,staticClass:"column\n       is-one-third-widescreen\n       is-one-half-desktop\n       is-half-tablet\n       is-full-mobile"},[n("div",{staticClass:"card is-white-e"},[n("div",{staticClass:"card-image"},[n("figure",{staticClass:"image is-16by9"},[e.thumb_url?[n("img",{attrs:{src:"/thumb/"+e.thumb_url}})]:[n("img",{attrs:{src:"https://bulma.io/images/placeholders/640x360.png"}})]],2)]),t._v(" "),n("div",{staticClass:"card-content"},[n("nuxt-link",{staticStyle:{position:"absolute",top:"0",left:"0",height:"100%",width:"100%"},attrs:{to:e.page_url?"/videos/"+e.page_url:"/wip"}}),t._v(" "),n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-size-4-mobile"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"subtitle is-5"},[t._v(t._s(e.desc))])])]),t._v(" "),t._m(0,!0)],1)])])})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("p",{staticClass:"is-size-5"})])}],!1,null,null,null);e.default=component.exports}}]);