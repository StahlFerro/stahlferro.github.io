(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(t){t.exports=JSON.parse('{"og:title":"StahlFerro","og:site_name":"StahlFerro\'s Website","og:description":"StahlFerro\'s Official Website","og:image":"/img/Duality.png","og:type":"website","og:url":"https://stahlferro.github.io","twitter:card":"summary_large_image","theme-color":"#5595FF"}')},150:function(t,e,n){var o=n(6),r=n(151)(!0);o(o.S,"Object",{entries:function(t){return r(t)}})},151:function(t,e,n){var o=n(7),r=n(20),c=n(17),l=n(41).f;t.exports=function(t){return function(e){for(var n,h=c(e),f=r(h),d=f.length,i=0,m=[];d>i;)n=f[i++],o&&!l.call(h,n)||m.push(t?[n,h[n]]:h[n]);return m}}},152:function(t,e,n){"use strict";n.r(e),n.d(e,"generate_meta",(function(){return h})),n.d(e,"canonize_url",(function(){return f})),n.d(e,"tag_canonical_url",(function(){return d}));var o=n(57);var r=n(72);function c(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n(28);n(27),n(13),n(150);function h(t){var e=f(t.path),n={"og:title":t.title,"og:description":t.description,"og:image":t.image,"theme-color":t.theme_color,"og:url":e},o=Object.entries(n).map((function(t){var e=Object(l.a)(t,2),n=e[0];return{hid:n,name:n,content:e[1]}}));return[{hid:"title",name:"title",content:n["og:title"]},{hid:"description",name:"description",content:n["og:description"]}].concat(c(o))}function f(t){var e=n(149)["og:url"];return"".concat(e).concat(t)}function d(t){return[{hid:"canonical",rel:"canonical",href:f(t)}]}},162:function(t,e,n){"use strict";n.r(e);var o=n(152),r=o.generate_meta,c=o.tag_canonical_url,l=r({title:"Donations",description:"Donations to support the development of free software and VFX videos that StahlFerro makes",image:"/thumb/ogthumb_donations.png",theme_color:"##e92afa",path:"/donate"}),h={urls:n(103)},f={head:function(){return{title:"Donations",meta:l,link:c("/donate")}},data:function(){return h}},d=n(14),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"hero is-fullheight-with-navbar is-dark-2"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content has-text-centered"},[n("h1",{staticClass:"title is-1"},[t._v("Donations")]),t._v(" "),n("p",[t._v("\n            Making VFX-animation videos and developing softwares that are free and open source, in hopes to provide both high quality entertainment\n            and technical solutions to everyone without charge, is my highest form of passion. However, with current economic disparities, my focus\n            are ultimately divided between these two and my IRL software dev job.\n          ")]),t._v(" "),n("p",[t._v("\n            With the rapidly declining opportunities on my local area and how dev jobs here cover nothing more than minimum living costs, I decided to\n            reach out for support on the international platform to help reduce the financial burden of me and my sibling's education fees.\n          ")]),t._v(" "),n("p",[t._v("\n            Doing just either one of VFX-animation videos or software development takes a huge amount of time and effort. This is the chance in which hopefully,\n            through this donation, I can eventually make this my full time job. Not just a job, but it's one I will never retire from.\n          ")]),t._v(" "),n("a",{staticClass:"button is-patreon-coral is-large",attrs:{href:t.urls.patreon}},[t._m(0),t._v(" "),n("span",[t._v("Patreon")])]),t._v(" "),n("a",{staticClass:"button is-kofi-cyan is-large",attrs:{href:t.urls.kofi}},[t._m(1),t._v(" "),n("span",[t._v("Ko-fi")])]),t._v(" "),n("a",{staticClass:"button is-liberapay-yellow is-large",attrs:{href:t.urls.liberapay}},[t._m(2),t._v(" "),n("span",[t._v("Liberapay")])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fab fa-patreon"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("img",{staticClass:"image",staticStyle:{padding:"4px"},attrs:{src:"/logos/ko-fi_round.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("img",{staticClass:"image",staticStyle:{padding:"4px"},attrs:{src:"/logos/liberapay_white_on_yellow.svg"}})])}],!1,null,null,null);e.default=component.exports}}]);