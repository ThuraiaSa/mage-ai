(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3393],{5508:function(e,n,t){"use strict";t.r(n);t(82684);var r=t(46042),u=t(21547),o=t(40062),i=t(30210),l=t(9518),c=t(9310),d=t(28598);n.default=function(e){var n=e.base,t=void 0!==n&&n,s=e.children,a=e.main,f=e.router,v=e.theme,h=e.updateThemeSettings,p=new o.S;return(0,d.jsx)(l.ThemeProvider,{theme:v,children:(0,d.jsx)(u.aM,{router:f,theme:v,updateThemeSettings:h,children:(0,d.jsx)(i.aH,{client:p,children:(0,d.jsx)(r.sp,{base:t,children:(0,d.jsx)(c.pn,{main:a,children:s})})})})})}},9310:function(e,n,t){"use strict";t.d(n,{Mg:function(){return o},AR:function(){return r},Jm:function(){return u},pn:function(){return O},pf:function(){return C}});var r,u,o,i,l=t(82684);!function(e){e.DOWN="down",e.LEFT="left",e.RIGHT="right",e.UP="up"}(r||(r={})),function(e){e.CENTER="center",e.END="end",e.START="start"}(u||(u={})),function(e){e.CENTER="center",e.END="end",e.START="start"}(o||(o={})),function(e){e.BLUR="blur",e.CLICK="click",e.ESCAPE="escape",e.LEAVE="leave"}(i||(i={}));var c=(0,l.createContext)(null),d=function(){var e=(0,l.useContext)(c);if(!e)throw new Error("useTooltip must be used within a TooltipProvider");return e},s=t(82394),a=t(85253),f=t.n(a),v=t(28598);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){var t,r,u,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,l=(t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,u=window.pageYOffset||document.documentElement.scrollTop,{pageX:t.left+r,pageY:t.top+u,width:t.width,height:t.height}),c=l.pageX,d=l.pageY;c&&(c-=o),d&&(d-=i);var s=c,a=d+l.height;n.style.position="absolute",n.style.left="".concat(s,"px"),n.style.top="".concat(a,"px")}function g(e,n){var t=e.children,i=e.layout,c=e.offset,d=e.options,s=(e.optionsPrev,d.event),a=d.style,h=d.wrapperRef,g=i.align,w=void 0===g?o.START:g,E=i.justify,T=void 0===E?u.START:E,R=i.position,y=i.horizontalDirection,O=void 0===y?r.RIGHT:y,C=i.verticalDirection,x=void 0===C?r.UP:C;return(0,l.useEffect)((function(){if(null!=n&&n.current&&null!=h&&h.current){var e,t,i,l=null!=s?s:{},d=(l.pageX,l.pageY,null==n||null===(e=n.current)||void 0===e?void 0:e.getBoundingClientRect()),a=d.height,v=(d.left,d.top,d.width),p=null!==(t=null==h||null===(i=h.current)||void 0===i?void 0:i.getBoundingClientRect())&&void 0!==t?t:{},g=p.height,E=void 0===g?0:g,y=(p.left,p.top,p.width),C=void 0===y?0:y,b=window.innerWidth,j=window.innerHeight,L=0,P=0;w===o.START?L=r.RIGHT===O?0:-v:w===o.CENTER?L=-Math.abs(C-v)/2:w===o.END&&(L=r.LEFT===O?-(v-C):C),T===u.START?P=r.UP===x?-(a+E):-a:T===u.CENTER?P=-(E+(a-E)/2):T===u.END&&(P=0),(null==R?void 0:R.x)+L<0?L=0-R.x:(null==R?void 0:R.x)+L>b&&(L=b-R.x),(null==R?void 0:R.y)+P<0?P=0-R.y:(null==R?void 0:R.y)+P>j&&(P=j-R.y),function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;m(e,n,t,r);var u=function(){m(e,n,t,r)};window.addEventListener("scroll",u)}(h.current,n.current,null==c?void 0:c.x,null==c?void 0:c.y),n.current.style.transform="translate(".concat(L,"px, ").concat(P,"px)"),n.current.classList.remove(f().hide)}}),[w,T]),(0,v.jsx)("div",{className:[f().tooltipContent,f().hide].join(" "),ref:n,style:p({},a),children:t})}var w=l.forwardRef(g),E=t(51774),T=t.n(E),R=t(78050),y=t(9518),O=function(e){var n=e.children,r=(e.main,(0,l.useContext)(y.ThemeContext)),u=(0,l.useRef)(null),o=(0,l.useRef)(null),d=(0,l.useRef)(null),s=(0,l.useRef)(null),a=(0,l.useRef)(null),f=(0,l.useRef)(null),h=(0,l.useRef)(!1);function p(){clearTimeout(u.current),clearTimeout(o.current),u.current=null,o.current=null}function m(e){u.current=setTimeout((function(){p(),d.current&&d.current.render(null),a.current=null,f.current=null,h.current=!1}),null!=e?e:1e3)}return(0,l.useEffect)((function(){var e=function(e){var n,t,r,u,o,i=(null!==(n=a.current)&&void 0!==n?n:{}).wrapperRef;if(!i)return!1;var l=null!==(t=null==i||null===(r=i.current)||void 0===r?void 0:r.getBoundingClientRect())&&void 0!==t?t:{},c=l.height,d=l.left,s=l.top,v=l.width,h=null!==(u=null==f||null===(o=f.current)||void 0===o?void 0:o.getBoundingClientRect())&&void 0!==u?u:{},p=h.height,m=h.left,g=h.top,w=h.width,E=e.pageX,T=e.pageY;return E>=d&&E<=d+v&&T>=s&&T<=s+c||E>=m&&E<=m+w&&T>=g&&T<=g+p},n=function(n){var t,r,l,c;null!=h&&h.current&&null!=a&&a.current&&null!=a&&null!==(t=a.current)&&void 0!==t&&null!==(r=t.hideOn)&&void 0!==r&&r.length&&null!=a&&null!==(l=a.current)&&void 0!==l&&null!==(c=l.hideOn)&&void 0!==c&&c.includes(i.LEAVE)&&(e(n)||u.current||(o.current=null,m()))},t=function(n){var t,r;clearTimeout(o.current),null!=h&&h.current&&null!=a&&a.current&&null!=a&&null!==(t=a.current)&&void 0!==t&&null!==(r=t.hideOn)&&void 0!==r&&r.includes(i.CLICK)&&(e(n)||m(0))},r=function(e){var n,t;null!=h&&h.current&&null!=a&&a.current&&null!=a&&null!==(n=a.current)&&void 0!==n&&null!==(t=n.hideOn)&&void 0!==t&&t.includes(i.ESCAPE)&&"Escape"===e.key&&m(0)};document.addEventListener("focusout",(function(e){var n,t;null!=h&&h.current&&null!=a&&a.current&&null!=a&&null!==(n=a.current)&&void 0!==n&&null!==(t=n.hideOn)&&void 0!==t&&t.includes(i.BLUR)&&([a.current.wrapperRef,f].some((function(n){return(null==n?void 0:n.current)&&!(null!=n&&n.current.contains(e.relatedTarget))}))&&m(0))}),!0),document.addEventListener("keydown",r,!0),document.addEventListener("mousedown",t,!0),document.addEventListener("mousemove",n,!0);var l=d.current,c=s.current;return function(){document.removeEventListener("focusout",n),document.removeEventListener("keydown",r),document.removeEventListener("mousedown",t),document.removeEventListener("mousemove",n),l&&l.unmount(),c&&document.body.removeChild(c)}}),[]),(0,v.jsx)(c.Provider,{value:{hideTooltip:m,showTooltip:function(e,n,u){p();var i=a.current;a.current=u;var l=T()((function(){return Promise.resolve().then(t.bind(t,5508))}),{loadableGenerated:{webpack:function(){return[5508]}}});null!=s&&s.current||(s.current=document.createElement("div"),s.current.className="tooltip-root",s.current.id=String(Number(new Date)),document.body.appendChild(s.current)),d.current||(d.current=(0,R.createRoot)(s.current)),o.current=setTimeout((function(){p(),d.current.render((0,v.jsx)(l,{theme:r,children:(0,v.jsx)(w,{layout:n,options:u,optionsPrev:i,ref:f,children:e})})),h.current=!0}),h.current?0:2e3)}},children:n})};function C(e){var n=e.align,t=e.children,r=e.hide,u=e.justify,o=e.position,c=e.showOnClick,s=e.showOnHover,a=e.style,f=e.tooltip,h=e.tooltipStyle,p=e.horizontalDirection,m=e.verticalDirection,g=d(),w=(g.hideTooltip,g.showTooltip),E=(0,l.useRef)(null),T=(0,l.useCallback)((function(e){var t=e.target;if(t instanceof HTMLElement){var r=t.getBoundingClientRect(),l=r.left,d=r.top,s=[i.BLUR,i.CLICK,i.ESCAPE];c||s.push(i.LEAVE),w(f,{align:n,horizontalDirection:p,justify:u,position:null!=o?o:{x:l,y:d},verticalDirection:m},{event:e,hideOn:s,renderOnMouseMove:!0,style:h,wrapperRef:E})}}),[n,u,o,c,w,f,h,p,m]);return r?t:(0,v.jsx)("div",{onClick:c?T:void 0,onMouseEnter:s||!c?T:void 0,ref:E,style:a,children:t})}},75502:function(e,n,t){"use strict";t.d(n,{I:function(){return i},Z:function(){return l}});var r=t(53860),u=t(82684),o=t(28598);function i(e){var n=e.children,t=e.onMount,i=e.uuid,l=e.waitUntil,c=e.maxAttempts,d=void 0===c?10:c,s=e.pollInterval,a=void 0===s?100:s,f=e.withRef,v=e.strict,h=void 0!==v&&v,p=(0,u.useRef)(0),m=(0,u.useRef)(0),g=(0,u.useRef)(null),w=(0,u.useRef)(null);return(h?u.useLayoutEffect:u.useEffect)((function(){if(!(m.current>=d)){r.e.hooks.withOnMount&&console.log("[WithOnMount:".concat(i,":").concat(p.current,"]")),0===p.current&&(g.current=setTimeout((function e(){clearTimeout(g.current),m.current+=1,m.current>=d?r.e.hooks.withOnMount&&console.log("[WithOnMount]: maxAttempts reached"):0!==p.current||!t||l&&!l(f?w:null)||f&&(null==w||!w.current)?g.current=setTimeout(e,a):(r.e.hooks.withOnMount&&console.log("[WithOnMount:".concat(i,":").concat(p.current,"]")),f?t(w):t(),p.current+=1)}),a));var e=g.current;return function(){clearTimeout(e),m.current=0,p.current=0,g.current=null}}}),[d,t,a]),f?(0,o.jsx)("div",{ref:w,children:n}):(0,o.jsx)(o.Fragment,{children:n})}function l(e){var n=e.children,t=e.onMount,i=e.waitUntil,l=e.maxAttempts,c=void 0===l?10:l,d=e.pollInterval,s=void 0===d?100:d,a=(0,u.useRef)(0),f=(0,u.useRef)(0),v=(0,u.useRef)(null);return r.e.hooks.withOnMount&&console.log("[useWithOnMount] rendering...",null==a?void 0:a.current),(0,u.useEffect)((function(){if(!(f.current>=c)){0===a.current&&(v.current=setTimeout((function e(){clearTimeout(v.current),f.current>=c||(f.current+=1,0!==a.current||!t||i&&!i()?v.current=setTimeout(e,s):(t(),a.current+=1))}),s));var e=v.current;return function(){clearTimeout(e),a.current=0,v.current=null,f.current=0}}}),[c,t,s]),(0,o.jsx)(o.Fragment,{children:n})}},85253:function(e){e.exports={tooltipContent:"TooltipContent_tooltipContent__jwrVy",hide:"TooltipContent_hide__q3_7w"}}}]);