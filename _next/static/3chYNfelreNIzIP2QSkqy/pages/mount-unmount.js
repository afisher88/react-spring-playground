(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{231:function(t,e,n){__NEXT_REGISTER_PAGE("/mount-unmount",function(){return t.exports=n(232),{page:t.exports.default}})},232:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return b});var r=n(0),o=n.n(r),a=n(17),i=n(36),l=n(8);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=function(t){function e(){var t,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,r=s(e).call(this),t=!r||"object"!==u(r)&&"function"!=typeof r?p(n):r,m(p(p(t)),"toggle",function(e){t.setState(m({},e,!t.state[e]))}),t.state={multistage:!1,fade:!1,slide:!1},t}var n,b,y;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,r["PureComponent"]),n=e,(b=[{key:"render",value:function(){return o.a.createElement(i.a,null,o.a.createElement(l.b,{title:"Mount / Unmount"}),o.a.createElement(l.a,null),o.a.createElement(l.e,{title:"Multistage the box",btnClickFn:this.toggle,transitionName:"multistage",toggleState:this.state.multistage,noMinHeight:!0},o.a.createElement(a.a,{native:!0,items:this.state.multistage,from:{opacity:0,height:0},enter:[{height:"auto"},{opacity:1}],leave:[{opacity:0},{height:0}]},function(t){return t&&function(t){return o.a.createElement(a.b.div,{style:t},o.a.createElement(l.d,{props:t}))}})),o.a.createElement(l.e,{title:"Fade the box",btnClickFn:this.toggle,transitionName:"fade",toggleState:this.state.fade},o.a.createElement(a.a,{native:!0,items:this.state.fade,from:{opacity:0},enter:{opacity:1},leave:{opacity:0}},function(t){return t&&function(t){return o.a.createElement(a.b.div,{style:t},o.a.createElement(l.d,{props:t}))}})),o.a.createElement(l.e,{title:"Slide the box",btnClickFn:this.toggle,transitionName:"slide",toggleState:this.state.slide},o.a.createElement(a.a,{native:!0,items:this.state.slide,from:{transform:"translate3d(-100%,0,0)"},enter:{transform:"translate3d(0,0,0)"},leave:{transform:"translate3d(-500%,0,0)"}},function(t){return t&&function(t){return o.a.createElement(a.b.div,{style:t},o.a.createElement(l.d,{props:t}))}})))}}])&&c(n.prototype,b),y&&c(n,y),e}()}},[[231,1,0]]]);