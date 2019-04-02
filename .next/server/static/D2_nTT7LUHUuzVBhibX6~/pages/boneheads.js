module.exports=function(e){var t=require("../../../ssr-module-cache.js"),n={4:0};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}},i=!0;try{e[n].call(o.exports,o,o.exports,r),i=!1}finally{i&&delete t[n]}return o.l=!0,o.exports}return r.e=function(t){if(0!==n[t]){var r=require("../../../"+({}[t]||t)+"."+{0:"b53de5681e08f308da3c"}[t]+".js"),o=r.modules,i=r.ids;for(var a in o)e[a]=o[a];for(var c=0;c<i.length;c++)n[i[c]]=0}return Promise.all([])},r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){process.nextTick(function(){throw e})},r(r.s=1)}({"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},1:function(e,t,n){e.exports=n("MvCI")},"2Eek":function(e,t,n){e.exports=n("ltjX")},Dtiu:function(e,t){e.exports=require("styled-components")},FbiP:function(e,t,n){e.exports=n("Gf4D")},Gf4D:function(e,t){e.exports=require("core-js/library/fn/object/freeze")},LDx1:function(e,t){e.exports=require("next-server/dynamic")},MvCI:function(e,t,n){"use strict";n.r(t);var r=n("rt45"),o=n("cDcd"),i=n.n(o),a=n("Dtiu"),c=n.n(a),u=n("LDx1"),l=n.n(u),s=n("U7sd"),f=n.n(s),d=n("hIXc");function p(){var e=Object(r.a)(['\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n']);return p=function(){return e},e}var m=Object(a.createGlobalStyle)(p()),b=l()(function(){return n.e(0).then(n.bind(null,"60UT"))},{ssr:!1,loadableGenerated:{webpack:function(){return["60UT"]},modules:["../components/SommWidget"]}}),h=c.a.div.withConfig({displayName:"boneheads__DemoWrapper",componentId:"sc-1kvb8kx-0"})(["width:100vw;height:100vh;overflow:hidden;position:relative;"]),x=c.a.div.withConfig({displayName:"boneheads__IFrameWrapper",componentId:"sc-1kvb8kx-1"})(["width:100vw;height:100%;min-height:100vh;display:flex;position:relative;z-index:1;overflow:hidden;& iframe{width:100%;height:100%;min-height:100vh;}"]);t.default=function(){return i.a.createElement(h,null,i.a.createElement(m,null),i.a.createElement(f.a,null,i.a.createElement("title",null,"Boneheads | Somm Demo"),i.a.createElement("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"})),i.a.createElement(d.a,null),i.a.createElement(x,null,i.a.createElement("iframe",{src:"https://lickthebone.com/",frameBorder:"0"})),i.a.createElement(b,{username:"boneheads",icon:"emoji",iconColor:"#fff",backgroundColor:"#b50000",position:"right",message:"Check out our menu 👇"}))}},R18i:function(e,t){e.exports=require("react-pose")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},U280:function(e,t){e.exports=require("vh-check")},U7sd:function(e,t){e.exports=require("next-server/head")},UnjW:function(e,t){e.exports=require("is-mobile")},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XDoA:function(e,t){e.exports=require("react-emoji-render")},cDcd:function(e,t){e.exports=require("react")},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hIXc:function(e,t,n){"use strict";var r=n("cDcd"),o=n.n(r),i=n("Dtiu"),a=n.n(i).a.div.withConfig({displayName:"DemoBanner__DemoBannerContainer",componentId:"i9auu6-0"})(["position:absolute;top:0;right:0;left:0;z-index:8;height:64px;background:rgba(31,31,31,0.8);padding:0 48px;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;color:#fff;font-weight:bold;@media all and (max-width:940px){padding:0 16px;}@media all and (max-width:640px){height:96px;& div{display:flex;flex-flow:column nowrap;align-items:center;justify-content:space-between;}& a{margin-right:0;}}& a{display:inline-flex;height:48px;background:#f94343;color:#fff;text-decoration:none;font-weight:bold;border-radius:8px;align-items:center;justify-content:center;padding:0 16px;margin-left:8px;}"]);t.a=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),o.a.createElement(a,null,"This is a custom demo of Somm.",o.a.createElement("div",null,"Like what you see?",o.a.createElement("a",{href:"mailto: chris@somm.ca"},"Send Chris an email")))}},ltjX:function(e,t){e.exports=require("core-js/library/fn/object/define-properties")},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},rf6O:function(e,t){e.exports=require("prop-types")},rt45:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("2Eek"),o=n.n(r),i=n("FbiP"),a=n.n(i);function c(e,t){return t||(t=e.slice(0)),a()(o()(e,{raw:{value:a()(t)}}))}},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")}});