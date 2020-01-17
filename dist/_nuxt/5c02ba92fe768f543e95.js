(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(t){t.exports=JSON.parse('{"og:title":"StahlFerro","og:site_name":"StahlFerro\'s Website","og:description":"StahlFerro\'s Official Website","og:image":"/img/Duality.png","og:type":"website","og:url":"https://stahlferro.github.io","twitter:card":"summary_large_image","theme-color":"#5595FF"}')},146:function(t,e,n){var r=n(6),o=n(147)(!0);r(r.S,"Object",{entries:function(t){return o(t)}})},147:function(t,e,n){var r=n(7),o=n(18),c=n(15),l=n(35).f;t.exports=function(t){return function(e){for(var n,v=c(e),_=o(v),d=_.length,i=0,h=[];d>i;)n=_[i++],r&&!l.call(v,n)||h.push(t?[n,v[n]]:v[n]);return h}}},148:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.r(e);var o=n(26);n(25),n(19),n(146);function c(t){var e=l(t.path),n={"og:title":t.title,"og:description":t.description,"og:image":t.image,"theme-color":t.theme_color,"og:url":e},c=Object.entries(n).map((function(t){var e=Object(o.a)(t,2),n=e[0];return{hid:n,name:n,content:e[1]}}));return[{hid:"title",name:"title",content:n["og:title"]},{hid:"description",name:"description",content:n["og:description"]}].concat(r(c))}function l(t){var e=n(145)["og:url"];return"".concat(e).concat(t)}function v(t){return[{hid:"canonical",rel:"canonical",href:l(t)}]}n.d(e,"generate_meta",(function(){return c})),n.d(e,"canonize_url",(function(){return l})),n.d(e,"tag_canonical_url",(function(){return v}))},161:function(t,e,n){"use strict";n.r(e);var r=n(148),o=r.generate_meta,c=r.tag_canonical_url,l="/softwares/fortressbot",v=o({title:"FortressBot",description:"A moderation bot that auto-nukes server invite links and auto-cleans hoisting or zalgo usernames/nicknames",image:"/thumb/FortressBot_Thumb.png",theme_color:"#3370cc",path:l});console.log(c(l));var _={discord_server_url:n(92).discord},d={head:function(){return{title:"FortressBot",meta:v,link:c(l)}},data:function(){return _}},h=n(12),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"hero is-medium is-black"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-centered"},[n("img",{attrs:{src:"/logos/Fortress_200px.png",width:"200px",height:"200px"}}),t._v(" "),n("h1",{staticClass:"title is-1"},[t._v("FortressBot")]),t._v(" "),n("p",{staticClass:"subtitle is-4"},[t._v("The bane of server invite links and hoisters")]),t._v(" "),t._m(0),t._v(" "),n("br"),t._v(" "),t._m(1),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"has-text-centered"},[n("div",{staticClass:"field is-grouped is-grouped-centered"},[n("p",{staticClass:"control"},[n("a",{staticClass:"button is-neon-trident-cyan is-medium",attrs:{href:t.discord_server_url}},[t._m(2),t._v(" "),n("span",[t._v("HQ/Support")])])]),t._v(" "),t._m(3)])])])])]),t._v(" "),t._m(4),t._v(" "),t._m(5)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"https://discordbots.org/bot/300611567874080769"}},[e("img",{attrs:{src:"https://discordbots.org/api/widget/servers/300611567874080769.svg?noavatar=true",alt:"FortressBot"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{staticClass:"button is-neon-blurple is-large",attrs:{href:"https://discordapp.com/oauth2/authorize?client_id=300611567874080769&scope=bot&permissions=1560673535"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fab fa-discord"})]),this._v(" "),e("span",[this._v("Add to your server")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-info-circle"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"control"},[e("a",{staticClass:"button is-neon-grey is-medium",attrs:{href:"https://fortressbot.readthedocs.io"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-book"})]),this._v(" "),e("span",[this._v("Documentation")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-black"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("p",{staticClass:"title is-2 has-text-centered"},[n("span",{staticClass:"is-iron-red"},[t._v("Primarily")]),t._v(" built for moderation\n          ")]),t._v(" "),n("ul",[n("li",{staticClass:"is-iron-red"},[t._v("Administration")]),t._v(" "),n("ul",[n("li",[t._v("User moderation (mute, temp mute, kick, ban, mass-kick, mass-ban, role management, etc.)")]),t._v(" "),n("li",[t._v("Server moderation (message mass-prune, pinning messages, export channel history, etc.)")])]),t._v(" "),n("li",{staticClass:"is-iron-red"},[t._v("InviteNuke (The automatic invite link remover)")]),t._v(" "),n("ul",[n("li",[t._v("Activate or deactivate the InviteNuke")]),t._v(" "),n("li",[t._v("Set invite exceptions")]),t._v(" "),n("li",[t._v("Set role exceptions")]),t._v(" "),n("li",[t._v("Set channel exceptions")]),t._v(" "),n("li",[t._v("Logging all InviteNuke actions")])]),t._v(" "),n("li",{staticClass:"is-iron-red"},[t._v("Lockdown [UNDER CONSTRUCTION]")]),t._v(" "),n("ul",[n("li",[t._v("Channel lock")]),t._v(" "),n("li",[t._v("Server lock")])]),t._v(" "),n("li",{staticClass:"is-iron-red"},[t._v("NameWash (Auto-dehoist and ascii-fy of usernames by assigning a cleaned version as their nicknames)")]),t._v(" "),n("ul",[n("li",[t._v("Activate or deactivate the NameWash")]),t._v(" "),n("li",[t._v("Set different wash modes between ASCIIfy, dehoist or both")]),t._v(" "),n("li",[t._v("Set what characters are considered as hoisting")]),t._v(" "),n("li",[t._v("Logging all NameWash actions")])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-black"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("p",{staticClass:"title is-2 has-text-centered"},[t._v("\n            With various\n            "),n("span",{staticClass:"is-iron-blue"},[t._v("secondary")]),t._v(" utilities\n          ")]),t._v(" "),n("ul",[n("li",{staticClass:"is-iron-blue"},[t._v("Utility (a large collection of discord related utility commands)")]),t._v(" "),n("ul",[n("li",[t._v("User, server, channel and role information lookup")]),t._v(" "),n("li",[t._v("Emote magnification")]),t._v(" "),n("li",[t._v("..and much more")]),t._v("]\n            ")]),t._v(" "),n("li",{staticClass:"is-iron-blue"},[t._v("Technical (a collection of commands for non-discord technical utilities)")]),t._v(" "),n("ul",[n("li",[t._v("Character information lookup")]),t._v(" "),n("li",[t._v("String utilities")]),t._v(" "),n("li",[t._v("...and others")])]),t._v(" "),n("li",{staticClass:"is-iron-blue"},[t._v("Entertainment (The ubiquitous fun commands)")]),t._v(" "),n("ul",[n("li",[t._v("1v1")]),t._v(" "),n("li",[t._v("rate")]),t._v(" "),n("li",[t._v("roll")]),t._v(" "),n("li",[t._v("...and many more")])])])])])])])}],!1,null,null,null);e.default=component.exports}}]);