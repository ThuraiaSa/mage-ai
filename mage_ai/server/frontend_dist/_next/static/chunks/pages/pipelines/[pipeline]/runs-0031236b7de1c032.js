(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[244],{8955:function(e,n,t){"use strict";t.d(n,{G7:function(){return C},ZP:function(){return y},u$:function(){return j}});var r=t(75582),i=t(82394),u=t(26304),o=t(90299),l=t(9134),c=t(24138),s=t(38276),a=t(30160),d=t(75499),f=t(70515),p=t(16488),v=t(42122),h=t(28598),b=["height","heightOffset","pipeline","selectedRun","selectedTab","setSelectedTab"];function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=44,x={uuid:"Run details"},_={uuid:"Dependency tree"},C=[_,x];function y(e){var n=e.height,t=e.heightOffset,i=e.pipeline,g=e.selectedRun,y=e.selectedTab,Z=e.setSelectedTab,O=m({},(0,u.Z)(e,b));g?O.blockStatus=(0,p.IJ)(null===g||void 0===g?void 0:g.block_runs):O.noStatus=!0;var w=(0,v.Kn)(null===g||void 0===g?void 0:g.variables)?m({},null===g||void 0===g?void 0:g.variables):(null===g||void 0===g?void 0:g.variables)||{},P=null===g||void 0===g?void 0:g.event_variables;if(P&&(0,v.Kn)(P)&&!(0,v.Qr)(P))if((0,v.Kn)(w)&&w.hasOwnProperty("event")){var k=(0,v.Kn)(w.event)?w.event:{};w.event=m(m({},k),P)}else w.event=m({},P);var S=[];w&&JSON.stringify(w,null,2).split("\n").forEach((function(e){S.push("    ".concat(e))}));var R=g&&[["Run ID",null===g||void 0===g?void 0:g.id],["Variables",(0,h.jsx)(l.Z,{language:"json",small:!0,source:S.join("\n")},"variable_value")]],I=g&&(0,h.jsx)(s.Z,{pb:f.cd,px:f.cd,children:(0,h.jsx)(d.Z,{alignTop:!0,columnFlex:[null,1],columnMaxWidth:function(e){return 1===e?"100px":null},rows:R.map((function(e,n){var t=(0,r.Z)(e,2),i=t[0],u=t[1];return[(0,h.jsx)(a.ZP,{monospace:!0,muted:!0,children:i},"key_".concat(n)),(0,h.jsx)(a.ZP,{monospace:!0,textOverflow:!0,children:u},"val_".concat(n))]})),uuid:"LogDetail"})}),E=y&&Z;return(0,h.jsxs)(h.Fragment,{children:[E&&(0,h.jsx)(s.Z,{py:f.cd,children:(0,h.jsx)(o.Z,{onClickTab:Z,selectedTabUUID:null===y||void 0===y?void 0:y.uuid,tabs:C,underlineStyle:!0})}),(!E||_.uuid===(null===y||void 0===y?void 0:y.uuid))&&(0,h.jsx)(c.ZP,m(m({},O),{},{height:n,heightOffset:(t||0)+(E?j:0),pipeline:i})),x.uuid===(null===y||void 0===y?void 0:y.uuid)&&I]})}},55072:function(e,n,t){"use strict";t.d(n,{Et:function(){return f},Q:function(){return d}});t(82684);var r=t(71180),i=t(55485),u=t(38276),o=t(31748),l=t(72473),c=t(79633),s=t(70515),a=t(28598),d=30,f=9;n.ZP=function(e){var n=e.page,t=e.maxPages,d=e.onUpdate,f=e.totalPages,p=[],v=t;if(v>f)p=Array.from({length:f},(function(e,n){return n}));else{var h=Math.floor(v/2),b=n-h;n+h>=f?(b=f-v+2,v-=2):n-h<=0?(b=0,v-=2):(v-=4,b=n-Math.floor(v/2)),p=Array.from({length:v},(function(e,n){return n+b}))}return(0,a.jsx)(a.Fragment,{children:f>0&&(0,a.jsxs)(i.ZP,{alignItems:"center",children:[(0,a.jsx)(r.ZP,{disabled:0===n,onClick:function(){return d(n-1)},children:(0,a.jsx)(l.PaginateArrowLeft,{size:1.5*s.iI,stroke:o.Av})}),!p.includes(0)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.Z,{ml:1,children:(0,a.jsx)(r.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(0)},children:1})},0),!p.includes(1)&&(0,a.jsx)(u.Z,{ml:1,children:(0,a.jsx)(r.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),p.map((function(e){return(0,a.jsx)(u.Z,{ml:1,children:(0,a.jsx)(r.ZP,{backgroundColor:e===n&&c.a$,borderLess:!0,noBackground:!0,notClickable:e===n,onClick:function(){e!==n&&d(e)},children:e+1})},e)})),!p.includes(f-1)&&(0,a.jsxs)(a.Fragment,{children:[!p.includes(f-2)&&(0,a.jsx)(u.Z,{ml:1,children:(0,a.jsx)(r.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,a.jsx)(u.Z,{ml:1,children:(0,a.jsx)(r.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(f-1)},children:f})},f-1)]}),(0,a.jsx)(u.Z,{ml:1}),(0,a.jsx)(r.ZP,{disabled:n===f-1,onClick:function(){return d(n+1)},children:(0,a.jsx)(l.PaginateArrowRight,{size:1.5*s.iI,stroke:o.Av})})]})})}},29241:function(e,n,t){"use strict";var r=t(25976),i=t(44897),u=r.default.div.withConfig({displayName:"PageSectionHeader",componentId:"sc-1wznrcv-0"})(["left:0;position:sticky;top:0;width:100%;z-index:3;",""],(function(e){return"\n    background-color: ".concat(e.backgroundColor||(e.theme.background||i.Z.background).page,";\n    border-bottom: 1px solid ").concat((e.theme.borders||i.Z.borders).medium,";\n  ")}));n.Z=u},35526:function(e,n,t){"use strict";t.d(n,{Au:function(){return a},I6:function(){return c},Nb:function(){return r},OK:function(){return s},hZ:function(){return f},k2:function(){return d}});var r,i=t(42631),u=t(72473),o=t(70515),l=t(28598),c="".concat(1.5*o.iI,"px"),s=40*o.iI,a=58;!function(e){e[e.FIRST=1]="FIRST",e[e.SECOND=2]="SECOND"}(r||(r={}));var d={autoHide:!0,size:null,widthFitContent:!0},f={afterIconSize:1.5*o.iI,beforeIcon:(0,l.jsx)(u.Search,{}),borderRadius:i.n_,defaultColor:!0,fullWidth:!0,greyBorder:!0,maxWidth:40*o.iI}},9134:function(e,n,t){"use strict";var r=t(82684),i=t(21124),u=t(68432),o=t(25976),l=t(65292),c=t(44897),s=t(95363),a=t(70515),d=t(28598);n.Z=function(e){var n=e.language,t=e.maxWidth,f=e.showLineNumbers,p=e.small,v=e.source,h=e.wrapLines,b=(0,r.useContext)(o.ThemeContext);function g(e){var r=e.value;return(0,d.jsx)(u.Z,{customStyle:{backgroundColor:(b.background||c.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:s.Vp,fontSize:p?12:14,marginBottom:0,marginTop:0,maxWidth:t,paddingBottom:2*a.iI,paddingTop:2*a.iI},language:n,lineNumberStyle:{color:(b.content||c.Z.content).muted},showLineNumbers:f,style:l._4,useInlineStyles:!0,wrapLines:h,children:r})}return(0,d.jsx)(i.D,{components:{code:function(e){var n=e.children;return(0,d.jsx)(g,{value:n})}},children:v})}},17380:function(e,n,t){"use strict";t.d(n,{i:function(){return a}});t(82684);var r=t(25976),i=(t(97618),t(55485),t(48670),t(38276),t(47329)),u=t.n(i);u().node,u().node,u().node.isRequired,u().bool,u().string.isRequired;t(30160);var o=t(70987),l=t(95363),c=t(70515),s=t(42631),a=(t(28598),"tab");r.default.div.withConfig({displayName:"Tabs__TabHeaderContainerStyle",componentId:"sc-rojme5-0"})(["",""],(function(e){return e.containerWidthPercentage&&"\n    width: ".concat(e.containerWidthPercentage,"%;\n  ")})),r.default.div.withConfig({displayName:"Tabs__TabHeader",componentId:"sc-rojme5-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;margin-right:","px;position:relative;z-index:2;"," "," ",""],s.BG,s.BG,6*c.iI,(function(e){return e.noBottomBorder&&"\n    border-bottom: none;\n  "}),(function(e){return e.active&&"\n    border-bottom: ".concat(c.cd,"px solid;\n    border-color: ").concat((e.theme.interactive||o.Z.interactive).linkPrimary,";\n  ")}),(function(e){return e.fullWidth&&"\n    width: 100%;\n  "})),r.default.div.withConfig({displayName:"Tabs__LinkStyle",componentId:"sc-rojme5-2"})(["align-items:center;display:flex;"," "," ",""],(function(e){return e.bold&&"\n    font-family: ".concat(l.nF,";\n  ")}),(function(e){return e.fullWidth&&"\n    justify-content: center;\n  "}),(function(e){return!e.disabled&&"\n    &:hover {\n      path {\n        fill: ".concat((e.theme.content||o.Z.interactive).linkPrimary," !important;\n      }\n    }\n  ")}))},81080:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ee}});var r=t(77837),i=t(75582),u=t(82394),o=t(38860),l=t.n(o),c=t(82684),s=t(69864),a=t(34376),d=t(28598);var f=function(e){var n=e.size;return(0,d.jsxs)("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.5 8.5H15.5V3.5H20.5V8.5ZM14 9V3C14 2.44772 14.4477 2 15 2H21C21.5523 2 22 2.44772 22 3V9C22 9.55229 21.5523 10 21 10H15C14.4477 10 14 9.55229 14 9ZM2 5V12.5V14V21.5C2 22.0523 2.44772 22.5 3 22.5H10.5H12H19.5C20.0523 22.5 20.5 22.0523 20.5 21.5V13.5C20.5 12.9477 20.0523 12.5 19.5 12.5H12V5C12 4.44772 11.5523 4 11 4H3C2.44772 4 2 4.44772 2 5ZM10.5 14V21H3.5V14H10.5ZM19 14V21H12V14H19ZM10.5 5.5V12.5H3.5V5.5H10.5Z",fill:"url(#paint0_linear_2842_55048)"}),(0,d.jsx)("defs",{children:(0,d.jsxs)("linearGradient",{id:"paint0_linear_2842_55048",x1:"2",y1:"12.25",x2:"22",y2:"12.25",gradientUnits:"userSpaceOnUse",children:[(0,d.jsx)("stop",{offset:"0.28125",stopColor:"#7D55EC"}),(0,d.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]})})]})},p=t(23192),v=t(71180),h=t(90299),b=t(50724),g=t(55485),m=t(46732),j=t(29241),x=t(55072);var _=function(e){var n=e.size;return(0,d.jsxs)("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("g",{clipPath:"url(#clip0_3007_70027)",children:(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.75 6.6859C1.75 3.95988 3.95988 1.75 6.6859 1.75h.98788c-.23022.41608-.36128.89466-.36128 1.40385s.13106.98777.36128 1.40384h-.71224c-1.32761 0-2.40385 1.07624-2.40385 2.40385 0 1.32761 1.07624 2.40385 2.40385 2.40385H15.609c3.3916 0 6.141 2.74941 6.141 6.14101 0 3.3916-2.7494 6.141-6.141 6.141H9.55584c.23019-.416.36123-.8946.36123-1.4037 0-.5092-.13108-.9879-.36134-1.404H15.609c1.8409 0 3.3333-1.4923 3.3333-3.3333 0-1.8409-1.4924-3.3333-3.3333-3.3333H6.96154C4.08329 12.1731 1.75 9.83979 1.75 6.96154V6.6859zM10.2163.25H6.6859C3.13145.25.25 3.13145.25 6.6859v.27564c0 3.70666 3.00486 6.71156 6.71154 6.71156H15.609c1.0125 0 1.8333.8208 1.8333 1.8333s-.8208 1.8333-1.8333 1.8333H7.01282c-1.60375 0-2.90385 1.3001-2.90385 2.9039 0 1.3248.88713 2.4423 2.09974 2.7911.06039.0173.12158.0328.18352.0463.20007.0436.40785.0665.62099.0665l.02449-.0001H15.609c4.22 0 7.641-3.421 7.641-7.641 0-4.22-3.421-7.64101-7.641-7.64101H6.96154c-.49918 0-.90385-.40467-.90385-.90385 0-.49918.40467-.90385.90385-.90385h3.25636c1.6038 0 2.9039-1.30009 2.9039-2.90384 0-1.60375-1.3001-2.903849-2.9039-2.90385h-.0016zm0 4.30769c-.77528 0-1.4038-.62852-1.4038-1.40384 0-.77505.62808-1.4034 1.403-1.40385h.0017c.7749.00045 1.403.6288 1.403 1.40385 0 .77532-.6285 1.40384-1.4039 1.40384zM7.01282 21.6474c-.10108 0-.19967-.0106-.29469-.0309-.03025-.0065-.06014-.0139-.08963-.0223-.58829-.1673-1.01912-.7086-1.01912-1.3505 0-.7753.62852-1.4039 1.40384-1.4039s1.40385.6286 1.40385 1.4039c0 .7696-.61935 1.3946-1.38683 1.4037h-.01742z",fill:"url(#paint0_linear_3007_70027)"})}),(0,d.jsxs)("defs",{children:[(0,d.jsxs)("linearGradient",{id:"paint0_linear_3007_70027",x1:"11.75",y1:".250001",x2:"11.75",y2:"23.1475",gradientUnits:"userSpaceOnUse",children:[(0,d.jsx)("stop",{offset:".28125",stopColor:"#7D55EC"}),(0,d.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]}),(0,d.jsx)("clipPath",{id:"clip0_3007_70027",children:(0,d.jsx)("path",{fill:"#fff",transform:"matrix(0 1 1 0 0 0)",d:"M0 0h24v24H0z"})})]})]})},C=t(75457),y=t(44265),Z=t(53943),O=t(89515),w=t(93808),P=t(44085),k=t(38276),S=t(4190),R=t(17488),I=t(35686),E=t(8955),T=t(98464),D=t(72473),N=t(28795),M=t(11498),H=t(57653),L=t(35526),B=t(41143),A=t(81655),F=t(17380),V=t(70515),U=t(24944),z=t(72619),K=t(15610),G=t(42122),Q=t(69419);function W(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function X(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?W(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var q={Icon:D.PipeIcon,IconSelected:_,label:function(){return"Pipeline runs"},uuid:"pipeline_runs"},J={Icon:D.BlocksSeparated,IconSelected:f,label:function(){return"Block runs"},uuid:"block_runs"},Y=[q,J];function $(e){var n,t,r=e.pipeline,u=(0,a.useRouter)(),o=(0,c.useRef)(null),l=(0,c.useRef)(null),f=(0,c.useState)(null),_=f[0],w=f[1],W=(0,c.useState)(null),$=W[0],ee=W[1],ne=(0,c.useState)(q),te=ne[0],re=ne[1],ie=(0,c.useState)(E.G7[0]),ue=ie[0],oe=ie[1],le=(0,c.useState)(null),ce=le[0],se=le[1],ae=(0,c.useState)({}),de=ae[0],fe=ae[1],pe=(0,c.useState)(null),ve=pe[0],he=pe[1],be=(0,c.useState)(!1),ge=be[0],me=be[1],je=(0,c.useState)(null),xe=je[0],_e=je[1],Ce=(0,c.useState)(null),ye=Ce[0],Ze=Ce[1],Oe=(0,c.useState)(null),we=Oe[0],Pe=Oe[1],ke=(0,c.useMemo)((function(){return q.uuid===(null===te||void 0===te?void 0:te.uuid)}),[null===te||void 0===te?void 0:te.uuid]),Se=r.uuid,Re=I.ZP.pipelines.detail(Se,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,Ie=(0,c.useMemo)((function(){return X(X({},null===Re||void 0===Re?void 0:Re.pipeline),{},{uuid:Se})}),[Re,Se]),Ee=(0,Q.iV)(),Te=(0,T.Z)(Ee),De=null!==Ee&&void 0!==Ee&&Ee.page?Ee.page:0;(0,c.useEffect)((function(){var e=Ee.pipeline_run_id,n=Ee.status;if(!(0,G.Xy)(Ee,Te)){var t=X(X({},Te),Ee);e?t.pipeline_run_id=e:t.pipeline_uuid=Se,n?t.status=n:delete t.status,Pe(t),fe({})}}),[Se,Ee,Te]);var Ne={_limit:x.Q,_offset:De*x.Q,pipeline_uuid:Se},Me=(0,G.gR)(X(X({},we),Ne),[F.i,"page",A.lG.SORT_COL_IDX,A.lG.SORT_DIRECTION]);ke&&(Me=(0,G.gR)(Me,[M.$D.OFFSET,"status"]));var He=null===Ee||void 0===Ee?void 0:Ee[A.lG.SORT_COL_IDX],Le=null===Ee||void 0===Ee?void 0:Ee[A.lG.SORT_DIRECTION];if(He){var Be=p.fi[He],Ae=Le||A.sh.ASC;Me.order_by="".concat(Be,"%20").concat(Ae)}var Fe=I.ZP.block_runs.list(Me,{}).data;(0,c.useEffect)((function(){(0,z.bB)(Fe,ee)}),[Fe]);var Ve=(0,c.useMemo)((function(){return(null===Fe||void 0===Fe?void 0:Fe.block_runs)||[]}),[Fe]),Ue=X(X({},Ne),{},{disable_retries_grouping:!0});null!==Ee&&void 0!==Ee&&Ee.status&&(Ue.status=Ee.status),ke||(Ue=(0,G.gR)(Ue,[M.$D.OFFSET]));var ze=I.ZP.pipeline_runs.list(Ue,{refreshInterval:5e3},{pauseFetch:!Se}),Ke=ze.data,Ge=ze.mutate,Qe=(0,c.useMemo)((function(){var e=(null===Ke||void 0===Ke?void 0:Ke.pipeline_runs)||[];if(ve){var n=ve.toLowerCase();e=e.filter((function(e){var t=e.event_variables,r=e.variables;return JSON.stringify(r||{}).toLowerCase().includes(n)||JSON.stringify(t||{}).toLowerCase().includes(n)}))}return e}),[null===Ke||void 0===Ke?void 0:Ke.pipeline_runs,ve]),We=(0,c.useMemo)((function(){var e,n;return ke?(null===Ke||void 0===Ke||null===(e=Ke.metadata)||void 0===e?void 0:e.count)||[]:(null===Fe||void 0===Fe||null===(n=Fe.metadata)||void 0===n?void 0:n.count)||[]}),[null===Fe||void 0===Fe||null===(n=Fe.metadata)||void 0===n?void 0:n.count,null===Ke||void 0===Ke||null===(t=Ke.metadata)||void 0===t?void 0:t.count,ke]),Xe=(0,c.useMemo)((function(){return Qe.some((function(e){var n=e.status;return n===B.V.INITIAL||n===B.V.RUNNING}))}),[Qe]),qe=(0,c.useMemo)((function(){return Qe.some((function(e){return e.status===B.V.FAILED}))}),[Qe]),Je=(0,c.useMemo)((function(){return Object.values(de||{}).filter((function(e){return null!==e}))}),[de]),Ye=Je.length,$e=(0,c.useMemo)((function(){return Object.values(de||{}).filter((function(e){return null!==e&&y.BF.includes(null===e||void 0===e?void 0:e.status)}))}),[de]),en=$e.length,nn=(0,s.Db)(I.ZP.pipelines.useUpdate(Se),{onSuccess:function(e){return(0,z.wD)(e,{callback:function(){fe({}),Ge()},onErrorCallback:function(e,n){return w({errors:n,response:e})}})}}),tn=(0,i.Z)(nn,1)[0],rn=(0,s.Db)((function(e){return I.ZP.pipeline_runs.useDelete(e)()}),{onSuccess:function(e){return(0,z.wD)(e,{callback:function(e){var n=e.pipeline_run.pipeline_uuid;null===Ge||void 0===Ge||Ge(),n?u.push("/pipelines/[pipeline]/runs","/pipelines/".concat(n,"/runs")):null===Ge||void 0===Ge||Ge(),se(null)},onErrorCallback:function(e,n){return w({errors:n,response:e})}})}}),un=(0,i.Z)(rn,1)[0],on=(0,T.Z)(te);(0,c.useEffect)((function(){var e=Ee[F.i];e&&re(Y.find((function(n){return n.uuid===e})))}),[Ee,te,on]);var ln=(0,c.useMemo)((function(){return[{isGroupingTitle:!0,label:function(){return"".concat(Ye," selected")},uuid:"runs_selected_count"},{beforeIcon:(0,d.jsx)(D.Refresh,{muted:0===Ye}),disabled:0===Ye,label:function(){return"Retry selected (".concat(Ye,")")},onClick:function(){return tn({pipeline:{pipeline_runs:Je,status:H.QK.RETRY}})},uuid:"retry_selected"},{beforeIcon:(0,d.jsx)(D.Refresh,{muted:!qe||Xe}),disabled:!qe||Xe,label:function(){return"Retry all incomplete block runs"},onClick:function(){return tn({pipeline:{status:H.QK.RETRY_INCOMPLETE_BLOCK_RUNS}})},openConfirmationDialogue:!0,uuid:H.QK.RETRY_INCOMPLETE_BLOCK_RUNS},{beforeIcon:(0,d.jsx)(D.AlertTriangle,{muted:0===en}),disabled:0===en,label:function(){return"Cancel selected running (".concat(en,")")},onClick:function(){return tn({pipeline:{pipeline_runs:$e,status:B.V.CANCELLED}})},uuid:"cancel_selected_running"},{beforeIcon:(0,d.jsx)(D.AlertTriangle,{muted:!(Xe&&ke)}),disabled:!(Xe&&ke),label:function(){return"Cancel all running"},onClick:function(){return tn({pipeline:{status:B.V.CANCELLED}})},openConfirmationDialogue:!0,uuid:N.B}]}),[qe,Xe,ke,$e,en,Je,Ye,tn]),cn=(0,c.useMemo)((function(){return(0,d.jsx)(k.Z,{p:2,children:(0,d.jsx)(x.ZP,{maxPages:x.Et,onUpdate:function(e){var n=Number(e),t=X(X({},Ee),{},{page:n>=0?n:0});se(null),u.push("/pipelines/[pipeline]/runs","/pipelines/".concat(Se,"/runs?").concat((0,Q.uM)(t)))},page:Number(De),totalPages:Math.ceil(We/x.Q)})})}),[De,Se,Ee,u,We]),sn=(0,c.useMemo)((function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Z.Z,{allowBulkSelect:(null===Ie||void 0===Ie?void 0:Ie.type)!==H.qL.STREAMING,allowDelete:!0,deletePipelineRun:un,disableKeyboardNav:ge,emptyMessage:ve?"No runs on this page match your search.":void 0,fetchPipelineRuns:Ge,onClickRow:function(e){return se((function(n){var t=Qe[e];return(null===n||void 0===n?void 0:n.id)!==t.id?t:null}))},pipelineRuns:Qe,selectedRun:ce,selectedRuns:de,setErrors:w,setSelectedRun:se,setSelectedRuns:fe}),cn]})}),[un,Ge,cn,null===Ie||void 0===Ie?void 0:Ie.type,Qe,ce,de,ge,ve]),an=(0,c.useMemo)((function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p.ZP,{blockRuns:Ve,pipeline:Ie,sortableColumnIndexes:p.lG}),cn]})}),[Ve,cn,Ie]);return(0,d.jsxs)(C.Z,{afterHidden:ke&&!ce,breadcrumbs:[{label:function(){return"Runs"}}],buildSidekick:ke?function(e){return(0,E.ZP)(X(X({},e),{},{selectedRun:ce,selectedTab:ue,setSelectedTab:oe}))}:function(e){return(0,E.ZP)(e)},errors:_||$,pageName:N.M.RUNS,pipeline:Ie,setErrors:w,title:function(e){var n=e.name;return"".concat(n," runs")},uuid:"".concat(N.M.RUNS,"_").concat(Se),children:[(0,d.jsx)(j.Z,{children:(0,d.jsx)(k.Z,{pr:1,py:1,children:(0,d.jsxs)(g.ZP,{alignItems:"center",children:[(0,d.jsx)(h.Z,{onClickTab:function(e){var n=e.uuid;n!==(null===te||void 0===te?void 0:te.uuid)&&(Pe(null),(0,K.u)({tab:n},{replaceParams:!0}))},selectedTabUUID:null===te||void 0===te?void 0:te.uuid,tabs:Y}),ke&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(U.lZ,{right:1}),(0,d.jsxs)(k.Z,{px:2,children:[(0,d.jsx)(m.Z,{items:ln,multipleConfirmDialogues:!0,onClickCallback:function(){return me(!1)},onClickOutside:function(){return me(!1)},open:ge,parentRef:o,roundedStyle:!0,setConfirmationAction:Ze,setConfirmationDialogueOpen:_e,topOffset:4,uuid:"PipelineRuns/ActionsMenu",children:(0,d.jsx)(v.ZP,{afterIcon:(0,d.jsx)(D.ArrowDown,{}),onClick:function(){return me((function(e){return!e}))},outline:!0,padding:"6px 12px",children:"Actions"})}),(0,d.jsx)(b.Z,{onClickOutside:function(){return _e(null)},open:!!xe,children:(0,d.jsx)(O.Z,{danger:xe===N.B,onCancel:function(){return _e(null)},onClick:function(){null===ye||void 0===ye||ye(),_e(null)},subtitle:"This includes runs on other pages as well, not just the current page."+(xe===H.QK.RETRY_INCOMPLETE_BLOCK_RUNS?" Incomplete block runs will be retried for FAILED pipeline runs specifically.":""),title:xe===N.B?"Are you sure you want to cancel all pipeline runs in progress?":"Are you sure you want to retry all incomplete block runs for any failed pipeline runs?",width:L.OK})})]}),(0,d.jsxs)(P.Z,{compact:!0,defaultColor:!0,greyBorder:!0,onChange:function(e){e.preventDefault(),"all"===e.target.value?(Pe(null),(0,K.u)({tab:q.uuid},{replaceParams:!0})):(0,K.u)({page:0,status:e.target.value})},paddingRight:4*V.iI,placeholder:"Select run status",value:null===we||void 0===we?void 0:we.status,children:[(0,d.jsx)("option",{value:"all",children:"All statuses"},"all_statuses"),y.IK.map((function(e){return(0,d.jsx)("option",{value:e,children:y.Do[e]},e)}))]}),(0,d.jsx)(k.Z,{ml:2}),(0,d.jsx)(R.Z,X(X({},L.hZ),{},{afterIcon:ve?(0,d.jsx)(D.Close,{}):null,afterIconClick:function(){var e;he(""),null===l||void 0===l||null===(e=l.current)||void 0===e||e.focus()},onChange:function(e){return he(e.target.value)},paddingVertical:6,placeholder:"Search pipeline run variables",ref:l,value:ve}))]})]})})}),Ke||Fe?(0,d.jsxs)(d.Fragment,{children:[ke&&sn,J.uuid===(null===te||void 0===te?void 0:te.uuid)&&an]}):(0,d.jsx)(k.Z,{m:3,children:(0,d.jsx)(S.Z,{inverted:!0})})]})}$.getInitialProps=function(){var e=(0,r.Z)(l().mark((function e(n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var ee=(0,w.Z)($)},79897:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/runs",function(){return t(81080)}])},80022:function(e,n,t){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},15544:function(e,n,t){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},13692:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(61049);function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&(0,r.Z)(e,n)}},93189:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(12539),i=t(80022);function u(e,n){if(n&&("object"===r(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}}},function(e){e.O(0,[6085,9161,1557,3782,3943,9774,2888,179],(function(){return n=79897,e(e.s=n);var n}));var n=e.O();_N_E=n}]);