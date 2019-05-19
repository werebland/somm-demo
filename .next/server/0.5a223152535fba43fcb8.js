exports.ids=[0],exports.modules={"0iUn":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return o})},"60UT":function(e,t,n){"use strict";n.r(t);var o=n("0iUn"),i=n("sLSF"),r=n("MI3g"),a=n("a7VT"),c=n("Tit0"),s=n("cDcd"),p=n.n(s),l=(n("rf6O"),n("R18i")),u=n.n(l),d=n("Dtiu"),f=n.n(d),m=n("U280"),h=n.n(m),g=n("UnjW"),x=n.n(g),y=n("XDoA"),b=n.n(y),w=f.a.div.withConfig({displayName:"SommWidget__WidgetContainer",componentId:"i7qmkt-0"})(["position:fixed;",":",";bottom:16px;z-index:8;"],function(e){return e.position},function(e){return"left"==e.position?"64px":"16px"}),v=u.a.div({enter:{scale:1,opacity:1},exit:{scale:0,opacity:0},init:{scale:0,opacity:0}}),E=f()(function(e){return p.a.createElement(v,e)}).withConfig({displayName:"SommWidget__WidgetToggle",componentId:"i7qmkt-1"})(["width:48px;height:48px;background:",";box-shadow:0 2px 16px -2px rgba(0,0,0,0.32);border-radius:8px;position:absolute;bottom:0;right:0;display:flex;align-items:center;justify-content:center;cursor:pointer;"],function(e){return e.background}),k=u.a.div({enter:{scale:1,opacity:1},exit:{scale:0,opacity:0},init:{scale:0,opacity:0}}),_=f()(k).withConfig({displayName:"SommWidget__StyledWidgetFrame",componentId:"i7qmkt-2"})(["width:calc(100vw - 32px);max-width:360px;height:",";max-height:600px;display:block;border:0;appearance:none;background:#FFFFFF;box-shadow:0 2px 16px -2px rgba(0,0,0,0.32);border-radius:8px;overflow:hidden;position:absolute;bottom:64px;",":",";scale:1;opacity:1;transform-origin:bottom ",";"],function(e){return"calc(".concat(e.viewportHeight,"px - 32px - 64px)")},function(e){return e.position},function(e){return"left"==e.position?"-48px":"0"},function(e){return e.position}),C=u.a.div({enter:{scale:1,opacity:1},exit:{scale:0,opacity:0},init:{scale:0,opacity:0}}),S=f()(C).withConfig({displayName:"SommWidget__StyledWidgetToggleIcon",componentId:"i7qmkt-3"})(["width:24px;height:24px;display:flex;align-items:center;justify-content:center;opacity:1;& svg{fill:",";transform:",";}"],function(e){return e.iconColor},function(e){return"close"===e.role?"scale(1.1)":"scale(1.2)"}),W=Object(d.keyframes)(["0%{top:28px;left:28px;width:0;height:0;opacity:1;}100%{top:-1px;left:-1px;width:58px;height:58px;opacity:0;}"]),F=f.a.div.withConfig({displayName:"SommWidget__SpinnerWrapper",componentId:"i7qmkt-4"})(["width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;right:0;bottom:0;left:0;-webkit-overflow-scrolling:touch;overflow-y:",";border-radius:8px;& iframe{border-radius:8px;}"],x()()?"scroll":"hidden"),q=f.a.div.withConfig({displayName:"SommWidget__Spinner",componentId:"i7qmkt-5"})(["display:inline-flex;position:relative;width:64px;height:64px;& div{position:absolute;border:4px solid ",";opacity:1;border-radius:50%;animation:"," 1.5s cubic-bezier(0,0.2,0.8,1) infinite}& div:nth-child(2){animation-delay:-0.5s;}"],function(e){return e.color},W),T=u.a.div({enter:{scale:1,opacity:1,delay:1e3},exit:{scale:0,opacity:0},init:{scale:0,opacity:0}}),z=f()(function(e){return p.a.createElement(T,e)}).withConfig({displayName:"SommWidget__WidgetMessage",componentId:"i7qmkt-6"})(["width:auto;max-width:224px;display:block;border:0;appearance:none;background:#FFFFFF;box-shadow:0 2px 16px -2px rgba(0,0,0,0.32);border-radius:8px;overflow:hidden;position:absolute;bottom:64px;right:0;scale:1;opacity:1;transform-origin:bottom right;padding:16px;box-sizing:border-box;display:flex;align-items:center;font-family:'Montserrat',sans-serif;font-weight:700;color:#1f1f1f;font-size:1rem;white-space:pre;"]),j=f.a.span.withConfig({displayName:"SommWidget__WidgetToggleIconEmoji",componentId:"i7qmkt-7"})(["font-size:1.75rem;line-height:1.5rem;padding-top:4px;"]),I=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(a.a)(t).call(this,e))).state={open:!1,hasOpened:!1,messageVisible:!!n.props.message},n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"handleToggle",value:function(){}},{key:"render",value:function(){var e=this,t=h()();return console.log(t),console.log(x()()),p.a.createElement(w,{position:this.props.position},p.a.createElement(l.PoseGroup,{animateOnMount:!0,preEnterPose:"init"},this.state.messageVisible&&!this.state.hasOpened&&p.a.createElement(z,{key:"1"},this.props.message)),p.a.createElement(l.PoseGroup,null,this.state.open&&p.a.createElement(_,{key:"0",viewportHeight:t.windowHeight,position:this.props.position},p.a.createElement(F,null,p.a.createElement("iframe",{style:{zIndex:8,position:"absolute",top:0,left:0,background:"transparent",display:"block"},src:"https://app.somm.ca/".concat(this.props.username),sandbox:"allow-same-origin allow-scripts allow-popups allow-top-navigation",width:"100%",height:"100%",frameBorder:"0"}),p.a.createElement(q,{color:this.props.iconColor},p.a.createElement("div",null),p.a.createElement("div",null))))),p.a.createElement(l.PoseGroup,{animateOnMount:!0,preEnterPose:"init"},p.a.createElement(E,{key:"-1",background:this.props.backgroundColor,onClick:function(){return e.setState({open:!e.state.open,hasOpened:!0})}},this.state.open?p.a.createElement(S,{iconColor:this.props.iconColor,role:"close"},p.a.createElement("svg",{fill:this.props.iconColor,width:"18px",height:"18px",viewBox:"0 0 16 16",version:"1.1"},p.a.createElement("g",{id:"Page-4",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},p.a.createElement("g",{id:"Search",transform:"translate(-46.000000, -45.000000)",fill:this.props.iconColor,fillRule:"nonzero"},p.a.createElement("g",{id:"Group",transform:"translate(32.000000, 32.000000)"},p.a.createElement("g",{id:"Group-2",transform:"translate(14.000000, 11.000000)"},p.a.createElement("polygon",{id:"Shape",points:"15.5555556 3.56666667 13.9888889 2 7.77777778 8.21111111 1.56666667 2 0 3.56666667 6.21111111 9.77777778 0 15.9888889 1.56666667 17.5555556 7.77777778 11.3444444 13.9888889 17.5555556 15.5555556 15.9888889 9.34444444 9.77777778"}))))))):p.a.createElement(S,{iconColor:this.props.iconColor,role:"open"},"rounded"===this.props.icon&&p.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},p.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),p.a.createElement("path",{d:"M8.1 13.34l2.83-2.83-6.19-6.18c-.48-.48-1.31-.35-1.61.27-.71 1.49-.45 3.32.78 4.56l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L4.4 19.17c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 14.41l6.18 6.18c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 13l1.47-1.47z"})),"sharp"===this.props.icon&&p.a.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},p.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),p.a.createElement("path",{d:"M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"})),"emoji"===this.props.icon&&p.a.createElement(j,null,p.a.createElement(b.a,{text:"🍽"}))))))}}]),t}(s.Component);t.default=I},Bhuq:function(e,t,n){e.exports=n("/+oN")},MI3g:function(e,t,n){"use strict";var o=n("XVgq"),i=n.n(o),r=n("Z7t5"),a=n.n(r);function c(e){return(c="function"==typeof a.a&&"symbol"==typeof i.a?function(e){return typeof e}:function(e){return e&&"function"==typeof a.a&&e.constructor===a.a&&e!==a.a.prototype?"symbol":typeof e})(e)}function s(e){return(s="function"==typeof a.a&&"symbol"===c(i.a)?function(e){return c(e)}:function(e){return e&&"function"==typeof a.a&&e.constructor===a.a&&e!==a.a.prototype?"symbol":c(e)})(e)}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",function(){return p})},SqZg:function(e,t,n){e.exports=n("o5io")},TRZx:function(e,t,n){e.exports=n("Wk4r")},Tit0:function(e,t,n){"use strict";var o=n("SqZg"),i=n.n(o),r=n("TRZx"),a=n.n(r);function c(e,t){return(c=a.a||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=i()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}n.d(t,"a",function(){return s})},XVgq:function(e,t,n){e.exports=n("gHn/")},Z7t5:function(e,t,n){e.exports=n("vqFK")},a7VT:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n("Bhuq"),i=n.n(o),r=n("TRZx"),a=n.n(r);function c(e){return(c=a.a?i.a:function(e){return e.__proto__||i()(e)})(e)}},hfKm:function(e,t,n){e.exports=n("TUA0")},sLSF:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("hfKm"),i=n.n(o);function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),i()(e,o.key,o)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}};