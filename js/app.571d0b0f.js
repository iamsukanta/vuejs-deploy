(function(t){function e(e){for(var r,u,i=e[0],s=e[1],c=e[2],p=0,f=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vuejs-deploy/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"1fbd":function(t,e,n){"use strict";var r=n("6968"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u={name:"App"},i=u,s=(n("034f"),n("2877")),c=Object(s["a"])(i,o,a,!1,null,null,null),l=c.exports,p=n("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("h1",[t._v("Welcome to Our Vue.js Github pages deploy App")]),r("ul",[r("li",[r("router-link",{attrs:{to:"/about"}},[t._v("About Page")])],1),r("li",[r("router-link",{attrs:{to:"/contact"}},[t._v("Contact Page")])],1)])])},m=[],d={name:"Home",props:{msg:String}},b=d,h=(n("1fbd"),Object(s["a"])(b,f,m,!1,null,"675462e7",null)),v=h.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("h1",[t._v("About Page")]),r("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum")]),r("ul",[r("li",[r("router-link",{attrs:{to:"/Home"}},[t._v("Home Page")])],1),r("li",[r("router-link",{attrs:{to:"/contact"}},[t._v("Contact Page")])],1)])])},y=[],_={name:"About",props:{msg:String}},w=_,k=(n("bb2d"),Object(s["a"])(w,g,y,!1,null,"250ca5ee",null)),j=k.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contact"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("h1",[t._v("Contact Page")]),r("p",[t._v("Mirpur, Dhaka, Bangladesh")]),r("a",{attrs:{href:"https://bdtunnel.com",target:"_blank"}},[t._v("www.bdtunnel.com")]),r("ul",[r("li",[r("router-link",{attrs:{to:"/"}},[t._v("Home Page")])],1),r("li",[r("router-link",{attrs:{to:"/about"}},[t._v("About Page")])],1)])])},P=[],x={name:"Contact",props:{msg:String}},A=x,C=(n("b312"),Object(s["a"])(A,O,P,!1,null,"49138bdf",null)),S=C.exports;r["a"].use(p["a"]);var H=new p["a"]({base:"/vuejs-deploy",mode:"history",routes:[{path:"/",redirect:"/home",name:"HomeRoot",meta:{auth:!1},component:{render:function(t){return t("router-view")}},children:[{path:"home",name:"Home",component:v},{path:"about",name:"About",component:j},{path:"contact",name:"Contact",component:S}]}]});r["a"].router=H,r["a"].config.productionTip=!1,new r["a"]({el:"#app",router:r["a"].router,template:"<App/>",components:{App:l}})},6968:function(t,e,n){},8417:function(t,e,n){},"85ec":function(t,e,n){},b312:function(t,e,n){"use strict";var r=n("8417"),o=n.n(r);o.a},b5bf:function(t,e,n){},bb2d:function(t,e,n){"use strict";var r=n("b5bf"),o=n.n(r);o.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.571d0b0f.js.map