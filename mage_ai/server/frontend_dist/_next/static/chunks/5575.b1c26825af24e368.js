"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5575],{80081:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(82394),i=r(26304),o=r(5508),u=r(1887),c=r.n(u),s=r(82684),a=r(28598),l=function(e){var t=e.title;return(0,a.jsxs)(c(),{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("link",{href:"/images/favicons/pro.ico",rel:"icon"}),(0,a.jsx)("style",{id:"dynamic-style-root"}),(0,a.jsx)("meta",{content:"width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0",name:"viewport"})]})},d=s.memo(l,(function(e,t){return e.title===t.title})),f=r(51721),m=r.n(f),h=r(75502),p=r(21547);function j(e){var t=e.headerRef,r=(0,p.$Y)().initialize;return(0,a.jsx)(h.I,{onMount:function(){return r({headerRef:t})},uuid:"HeaderPortal",children:(0,a.jsx)("header",{className:m().header,ref:t})})}var b=r(5635),v=r(22306),y=r(9518),O=r(31237),g=["mode","themeSettings","title","version"];function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){var t=e.Component,r=e.pageProps,n=r.mode,u=r.themeSettings,c=r.title,l=r.version,f=(0,i.Z)(r,g),m=e.router,h=(0,s.useRef)(null),p=(0,s.useState)((null==u?void 0:u[l])||(0,O.RX)()),x=p[0],w=p[1],k=(0,s.useCallback)((function(e){(0,O.vW)(e),w(e)}),[]),S=(0,s.useMemo)((function(){return(null==x?void 0:x.theme)||(0,O.gh)({theme:x})}),[x]),R=(0,s.useMemo)((function(){return(null==x?void 0:x.mode)||n||v.H.DARK}),[n,x]);(0,s.useEffect)((function(){"undefined"!=typeof document&&(document.body.removeAttribute("data-theme"),document.body.setAttribute("data-theme",R))}),[R]);var D=(0,s.useMemo)((function(){return(0,a.jsx)(d,{title:null!=c?c:"Mage Pro"})}),[c]);return(0,a.jsxs)(a.Fragment,{children:[D,(0,a.jsx)(y.ThemeProvider,{theme:S,children:(0,a.jsx)(b.Kb,{children:(0,a.jsxs)(o.default,{main:!0,router:m,theme:S,updateThemeSettings:k,children:[(0,a.jsx)(j,{headerRef:h}),(0,a.jsx)(t,P(P({},f),{},{updateThemeSettings:k}))]})})})]})}}}]);