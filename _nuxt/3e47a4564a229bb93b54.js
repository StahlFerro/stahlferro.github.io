(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{149:function(t){t.exports=JSON.parse('{"og:title":"StahlFerro","og:site_name":"StahlFerro\'s Website","og:description":"StahlFerro\'s Official Website","og:image":"/img/Duality.png","og:type":"website","og:url":"https://stahlferro.github.io","twitter:card":"summary_large_image","theme-color":"#5595FF"}')},150:function(t,e,o){var r=o(6),n=o(151)(!0);r(r.S,"Object",{entries:function(t){return n(t)}})},151:function(t,e,o){var r=o(7),n=o(20),c=o(17),l=o(41).f;t.exports=function(t){return function(e){for(var o,d=c(e),f=n(d),h=f.length,i=0,m=[];h>i;)o=f[i++],r&&!l.call(d,o)||m.push(t?[o,d[o]]:d[o]);return m}}},152:function(t,e,o){"use strict";o.r(e),o.d(e,"generate_meta",(function(){return d})),o.d(e,"canonize_url",(function(){return f})),o.d(e,"tag_canonical_url",(function(){return h}));var r=o(57);var n=o(72);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(n.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=o(28);o(27),o(13),o(150);function d(t){var e=f(t.path),o={"og:title":t.title,"og:description":t.description,"og:image":t.image,"theme-color":t.theme_color,"og:url":e},r=Object.entries(o).map((function(t){var e=Object(l.a)(t,2),o=e[0];return{hid:o,name:o,content:e[1]}}));return[{hid:"title",name:"title",content:o["og:title"]},{hid:"description",name:"description",content:o["og:description"]}].concat(c(r))}function f(t){var e=o(149)["og:url"];return"".concat(e).concat(t)}function h(t){return[{hid:"canonical",rel:"canonical",href:f(t)}]}},167:function(t,e,o){"use strict";o.r(e);var r=o(152),n=r.generate_meta,c=r.tag_canonical_url,l=n({title:"StatusBot",description:"A special discord bot that notifies you if another bot dies.",theme_color:"#991f30",path:"/softwares/statusbot"}),d={head:function(){return{title:"StatusBot",meta:l,link:c("/softwares/statusbot")}}},f=o(14),component=Object(f.a)(d,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"hero is-medium is-iron-red-white-e"},[o("div",{staticClass:"hero-body"},[o("div",{staticClass:"container has-text-centered"},[o("h1",{staticClass:"title is-1"},[t._v("StatusBot")]),t._v(" "),o("p",{staticClass:"subtitle is-4"},[t._v("\n            A special purpose discord bot that notifies you if other bots go offline")]),t._v(" "),o("div",{staticClass:"field is-grouped is-grouped-centered",staticStyle:{"margin-bottom":"50px"}},[o("p",{staticClass:"control"},[o("a",{staticClass:"button is-github-black is-large",attrs:{href:"https://github.com/StahlFerro/StatusBot"}},[o("span",{staticClass:"icon"},[o("i",{staticClass:"fab fa-github"})]),t._v(" "),o("span",[t._v("Github")])])]),t._v(" "),o("p",{staticClass:"control"},[o("a",{staticClass:"button is-iron-red is-large",attrs:{href:"https://statusbot.readthedocs.io/en/latest/"}},[o("span",{staticClass:"icon"},[o("i",{staticClass:"fas fa-book"})]),t._v(" "),o("span",[t._v("Documentation")])])])]),t._v(" "),o("div",{staticClass:"field is-grouped is-grouped-centered"},[o("figure",{staticClass:"image tooltip is-tooltip-bottom",staticStyle:{width:"500px","text-align":"center"},attrs:{"data-tooltip":"It's dead Jim"}},[o("img",{attrs:{src:"/img/StatusBot_preview.PNG",width:"500px"}})])])])])])])}],!1,null,null,null);e.default=component.exports}}]);