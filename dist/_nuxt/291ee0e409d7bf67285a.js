(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{149:function(t){t.exports=JSON.parse('{"og:title":"StahlFerro","og:site_name":"StahlFerro\'s Website","og:description":"StahlFerro\'s Official Website","og:image":"/img/Duality.png","og:type":"website","og:url":"https://stahlferro.github.io","twitter:card":"summary_large_image","theme-color":"#5595FF"}')},150:function(t,e,r){var n=r(6),o=r(151)(!0);n(n.S,"Object",{entries:function(t){return o(t)}})},151:function(t,e,r){var n=r(7),o=r(20),c=r(17),l=r(41).f;t.exports=function(t){return function(e){for(var r,h=c(e),f=o(h),d=f.length,i=0,m=[];d>i;)r=f[i++],n&&!l.call(h,r)||m.push(t?[r,h[r]]:h[r]);return m}}},152:function(t,e,r){"use strict";r.r(e),r.d(e,"generate_meta",(function(){return h})),r.d(e,"canonize_url",(function(){return f})),r.d(e,"tag_canonical_url",(function(){return d}));var n=r(57);var o=r(72);function c(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=r(28);r(27),r(13),r(150);function h(t){var e=f(t.path),r={"og:title":t.title,"og:description":t.description,"og:image":t.image,"theme-color":t.theme_color,"og:url":e},n=Object.entries(r).map((function(t){var e=Object(l.a)(t,2),r=e[0];return{hid:r,name:r,content:e[1]}}));return[{hid:"title",name:"title",content:r["og:title"]},{hid:"description",name:"description",content:r["og:description"]}].concat(c(n))}function f(t){var e=r(149)["og:url"];return"".concat(e).concat(t)}function d(t){return[{hid:"canonical",rel:"canonical",href:f(t)}]}},167:function(t,e,r){"use strict";r.r(e);var n=r(152),o=n.generate_meta,c=n.tag_canonical_url,l="/softwares/fortressbot",h=o({title:"FortressBot",description:"A moderation bot that auto-nukes server invite links and auto-cleans hoisting or zalgo usernames/nicknames",image:"/thumb/FortressBot_Thumb.png",theme_color:"#3370cc",path:l});console.log(c(l));var f={discord_server_url:r(103).discord},d={head:function(){return{title:"FortressBot",meta:h,link:c(l)}},data:function(){return f}},m=r(14),component=Object(m.a)(d,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"hero is-fullheight-with-navbar is-black"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container has-text-centered"},[r("img",{attrs:{src:"/logos/Fortress_200px.png",width:"200px",height:"200px"}}),t._v(" "),r("h1",{staticClass:"title is-1"},[t._v("FortressBot")]),t._v(" "),r("p",{staticClass:"subtitle is-4"},[t._v("The bane of server invite links and hoisters")]),t._v(" "),r("br"),t._v(" "),r("h1",{staticClass:"title is-1"},[t._v("Rest In Peace")]),t._v(" "),r("h2",{staticClass:"title is-2"},[t._v("2017-04-09 - 2020-06-19")]),t._v(" "),r("p",[t._v("Thank you very much for those that has used FortressBot during it's time of service. I have no more spare time left to properly maintain FortressBot and fix its bugs.\n          All that is left is a bot that has been terribly underperforming for months. It is not fit to serve realiable automoderative actions anymore.")]),t._v(" "),r("p",[t._v("I declare its End of Life effective on date 2020/06/19. Goodbye FortressBot.")])])])])])}],!1,null,null,null);e.default=component.exports}}]);