(this["webpackJsonpbanner-nft-gen"]=this["webpackJsonpbanner-nft-gen"]||[]).push([[0],{129:function(e,t,n){e.exports={secondaryBoxShadow:"banner-svg_secondaryBoxShadow__LCHhp",SVG:"banner-svg_SVG__2FKLL"}},131:function(e,t,n){},141:function(e,t,n){},15:function(e,t,n){e.exports={button:"template-selector_button__yhn1E",primaryButton:"template-selector_primaryButton__1Xtq3",TemplateSelector:"template-selector_TemplateSelector__3b7ik",footer:"template-selector_footer__1qtlM",primary:"template-selector_primary__3Ocea",secondaryButton:"template-selector_secondaryButton__3kKhN",templateList:"template-selector_templateList__36tTS",templatePreview:"template-selector_templatePreview__JjIeV",selected:"template-selector_selected__10pWA"}},31:function(e,t,n){e.exports={button:"mint-modal_button__1QN7z",primaryButton:"mint-modal_primaryButton__7T8xY",MintModal:"mint-modal_MintModal__1efXV",footer:"mint-modal_footer__JmMxX",mint:"mint-modal_mint__2OY48",secondaryButton:"mint-modal_secondaryButton__26tAQ",cancel:"mint-modal_cancel__2K7Sr",input:"mint-modal_input__3hgCf",creating:"mint-modal_creating__7kdrR",preview:"mint-modal_preview__1mLiB",form:"mint-modal_form__3WKE1",container:"mint-modal_container__2qDPZ",label:"mint-modal_label__OzKGQ"}},327:function(e,t,n){"use strict";n.r(t);var a,c,r=n(0),l=n.n(r),i=n(18),o=n.n(i),s=(n(140),n(141),n(39)),d=n.n(s),j=n(54),u=n.n(j),b=n(6),m=n.n(b),p=n(2),h=function(e){var t=e.children,n=e.className;return Object(p.jsx)("div",{className:m()(u.a.Tile,n),children:t})},_=1500,v=500;!function(e){e[e.NFT=0]="NFT",e[e.LINE_PATTERN=1]="LINE_PATTERN"}(a||(a={})),function(e){e[e.CIRCLE=0]="CIRCLE"}(c||(c={}));var O,f=n(30),x=n(44);!function(e){e[e.NumberSlider=0]="NumberSlider"}(O||(O={}));var N=n(5);function g(e,t){if(e=Object(N.a)(e),Array.isArray(e[0])||(e=e.map((function(e){return[e.x,e.y]}))),t){var n=e[e.length-1],a=e[e.length-2],c=e[0],r=e[1];e.unshift(n),e.unshift(a),e.push(c),e.push(r)}return e.flat()}var y,T=n(335),C=function(e){var t=e.patternId,n=e.width,a=e.height,c=e.padding;return function(e){e.angle;for(var r=e.spread,l=e.strokeWidth,i=e.linePoints,o=e.noise,s=r+l,d=Math.ceil(a/(i-1)),j=[],u=new Array(i).fill(void 0),b=Object(T.a)(-o,o),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3?arguments[3]:void 0,c=(e=g(e,n)).length,r=c-4,l=n?e[2]:e[0],i=n?e[3]:e[1],o="M"+[l,i];a&&a("MOVE",[l,i]);for(var s=n?c-4:c-2,d=2,j=n?2:0;j<s;j+=d){var u=j?e[j-2]:e[0],b=j?e[j-1]:e[1],m=e[j+0],p=e[j+1],h=e[j+2],_=e[j+3],v=m+(h-u)/6*t,O=p+(_-b)/6*t,f=h-((j!==r?e[j+4]:h)-m)/6*t,x=_-((j!==r?e[j+5]:_)-p)/6*t;o+="C"+[v,O,f,x,h,_],a&&a("CURVE",[v,O,f,x,h,_])}return o}(u.map((function(e,t){return{x:b(),y:t*d}})),1,!1),h=-c;h<=n+c;h+=s)j.push(Object(p.jsx)("path",{d:m,stroke:"steelblue",strokeWidth:l,fill:"none",transform:"translate(".concat(h,", 0)")},h));return Object(p.jsx)("g",{"transform-origin":"".concat(n/2," ").concat(a/2),children:j},t)}},w={PFPLeft:{key:"PFPLeft",objects:[(y="Pattern1",{type:a.LINE_PATTERN,id:y,title:"Line Pattern Controls",controls:[{type:O.NumberSlider,title:"Pattern spread",objectId:y,property:"spread",min:4,max:24,default:12},{type:O.NumberSlider,title:"Line width",objectId:y,property:"strokeWidth",min:1,max:12,default:4},{type:O.NumberSlider,title:"Line points",objectId:y,property:"linePoints",min:4,max:60,default:45},{type:O.NumberSlider,title:"Line variance",objectId:y,property:"noise",min:0,max:10,default:7}]}),{type:a.NFT,id:"NFT",title:"PFP NFT",cutout:c.CIRCLE,height:452,width:452,x:250,y:250,controls:[]}]}},P=function(e){return e.app.templateId},S=Object(x.a)(P,(function(e){return null!==e?w[e]:void 0})),k=function(e){return e.app.controlsState},M=function(e){return function(t){return"".concat(e,"/").concat(t)}},B=n(129),L=n.n(B),I=function(){var e=Object(r.useRef)(null),t=Object(f.c)(S),n=Object(f.c)(k);return Object(p.jsx)("svg",{className:L.a.SVG,viewBox:"0 0 ".concat(_," ").concat(v),ref:e,children:void 0!==t?function(e){return e.objects.map((function(e,t){var c,r=M(e.id);switch(e.type){case a.NFT:return c=e,Object(p.jsx)("circle",{cx:c.x,cy:c.y,r:c.width/2},t);case a.LINE_PATTERN:return C({patternId:e.id,width:_,height:v,padding:24})({angle:n[r("angle")],spread:n[r("spread")],strokeWidth:n[r("strokeWidth")],linePoints:n[r("linePoints")],noise:n[r("noise")]})}}))}(t):null})},E=n(130),F=n(70),A=n.n(F),R=function(e){var t=e.children,n=e.title;return Object(p.jsxs)("div",{className:A.a.Control,children:[Object(p.jsx)("div",{className:A.a.label,children:n}),Object(p.jsx)("div",{className:A.a.input,children:t})]})},V=n(131),G=n.n(V),W=n(132),q=n.n(W),K=function(e){var t=e.control,n=e.onChange;return Object(p.jsx)("div",{className:G.a.RangeControl,children:Object(p.jsx)(q.a,{onChange:n,defaultValue:t.default,min:t.min,max:t.max})})},H=n(38),U=Object(H.b)("app/setTemplateId"),D=Object(H.b)("app/deployControls"),J=Object(H.b)("app/updateControlValue"),Q=n(47),z=n.n(Q),X=function(e){Object(E.a)(e);var t,n=Object(f.b)(),a=Object(f.c)(S),c=function(e){return e.map((function(e){var t,a=M(e.objectId)(e.property);if(e.type===O.NumberSlider)return Object(p.jsx)(R,{title:e.title,children:Object(p.jsx)(K,{control:e,onChange:(t=a,function(e){n(J({property:t,value:e}))})})},a)}))};return Object(p.jsx)("div",{className:z.a.Controls,children:void 0!==a?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:z.a.title,children:"Control the look of your banner"}),Object(p.jsx)("div",{className:z.a.containers,children:(t=a,t.objects.filter((function(e){return e.controls.length>0})).map((function(e){return Object(p.jsxs)("div",{className:z.a.controlGroup,children:[Object(p.jsx)("div",{className:z.a.title,children:e.title}),c(e.controls)]},e.id)})))})]}):null})},Y=n(3),Z=n(4),$=n(15),ee=n.n($),te=Object.values(w).map((function(e){return{name:e.key,key:e.key}})),ne=function(e){var t=e.onSelect,n=Object(r.useState)(te),a=Object(Z.a)(n,1)[0],c=Object(r.useState)(),l=Object(Z.a)(c,2),i=l[0],o=l[1];return Object(p.jsxs)("div",{className:ee.a.TemplateSelector,children:[Object(p.jsxs)("div",{className:ee.a.templateList,children:[a.map((function(e){return Object(p.jsx)("div",{className:m()(ee.a.templatePreview,Object(Y.a)({},ee.a.selected,e.key===(null===i||void 0===i?void 0:i.key))),onClick:function(){return o(e)},children:e.key},e.key)})),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"}),Object(p.jsx)("div",{className:ee.a.templatePreview,children:"Testing"})]}),Object(p.jsx)("div",{className:ee.a.footer,children:Object(p.jsx)("button",{className:ee.a.primary,disabled:void 0===i,onClick:function(){void 0!==i&&t(i.key)},children:"Select"})})]})},ae=n(1),ce={open:!1,title:"Modal",onClose:function(){}},re=n(41),le=n.n(re),ie=n(333),oe=function(){var e,t=Object(r.useContext)(se),n=t.modalContent,a=t.handleModal,c=t.modal,l=function(){a(null,{open:!1}),c.onClose()};return c.open?o.a.createPortal(Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:le.a.ModalOverlay,onClick:l}),Object(p.jsxs)("div",{className:le.a.modal,children:[Object(p.jsxs)("div",{className:le.a.header,children:[Object(p.jsx)("span",{className:le.a.title,children:c.title}),Object(p.jsx)("span",{className:le.a.close,onClick:l,children:Object(p.jsx)(ie.a,{})})]}),Object(p.jsx)("div",{className:le.a.body,children:n})]})]}),null!==(e=document.querySelector("#modal-root"))&&void 0!==e?e:document.body):null},se=Object(r.createContext)({modal:ce,handleModal:function(){},modalContent:null}),de=se.Provider,je=function(e){var t=e.children,n=function(){var e=Object(r.useState)(ce),t=Object(Z.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),l=Object(Z.a)(c,2),i=l[0],o=l[1];return{modal:n,handleModal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;a(Object(ae.a)(Object(ae.a)({},n),t)),null!==e&&o(e)},modalContent:i}}(),a=n.modal,c=n.handleModal,l=n.modalContent;return Object(p.jsxs)(de,{value:{modal:a,handleModal:c,modalContent:l},children:[Object(p.jsx)(oe,{}),t]})},ue=n(31),be=n.n(ue),me=n(334),pe=n(88),he=n.n(pe),_e=function(e){var t=e.onCancel,n=Object(r.useState)(""),a=Object(Z.a)(n,2),c=a[0],l=a[1],i=Object(r.useState)(""),o=Object(Z.a)(i,2),s=o[0],d=o[1],j=Object(r.useState)(""),u=Object(Z.a)(j,2),b=u[0],m=u[1],h=Object(r.useState)(!0),O=Object(Z.a)(h,2),f=O[0],x=O[1],N=""===c||""===s||""===b;Object(r.useEffect)((function(){var e=document.querySelector('svg[class*="banner-svg"]');if(null!==e){var t=new Blob([e.outerHTML],{type:"image/svg+xml;charset=utf-8"}),n=URL.createObjectURL(t),a=new Image;a.onload=function(){var e=document.createElement("canvas");e.width=_,e.height=v;var t=e.getContext("2d");null===t||void 0===t||t.drawImage(a,0,0,_,v);var n=e.toDataURL("image/jpg");console.log(n),d(n)},a.src=n,console.log(a)}}),[]),Object(r.useEffect)((function(){x(""===s)}),[s]);var g=function(e){return function(t){var n=t.target;return e(n.value)}};return f?Object(p.jsx)("div",{className:be.a.creating,children:Object(p.jsx)(me.a,{})}):Object(p.jsxs)("div",{className:be.a.MintModal,children:[Object(p.jsx)("div",{className:be.a.preview,children:Object(p.jsx)("img",{src:s})}),Object(p.jsxs)("div",{className:be.a.form,children:[Object(p.jsxs)("div",{className:be.a.container,children:[Object(p.jsx)("div",{className:be.a.label,children:"Name"}),Object(p.jsx)(he.a,{value:c,onChange:g(l),placeholder:"Set NFT name"})]}),Object(p.jsxs)("div",{className:be.a.container,children:[Object(p.jsx)("div",{className:be.a.label,children:"Description"}),Object(p.jsx)(he.a,{value:b,onChange:g(m),placeholder:"Set NFT description"})]})]}),Object(p.jsxs)("div",{className:be.a.footer,children:[Object(p.jsx)("button",{className:be.a.cancel,onClick:t,children:"Cancel"}),Object(p.jsx)("button",{className:be.a.mint,disabled:N,children:"Mint NFT"})]})]})},ve=function(){var e=Object(f.b)(),t=Object(f.c)(P),n=Object(f.c)(S),a=Object(r.useContext)(se).handleModal;Object(r.useEffect)((function(){void 0!==n&&e(D(n.objects))}),[n]);var c=function(t){l(),e(U(t))},l=function(){a(null,{open:!1})};return Object(p.jsxs)(h,{className:d.a.BannerGen,children:[Object(p.jsxs)("div",{className:d.a.header,children:[Object(p.jsxs)("div",{className:d.a.left,children:[Object(p.jsx)("div",{className:u.a.title,children:"Twitter banner generator"}),Object(p.jsx)("div",{className:u.a.subTitle,children:"Use the controls below to generate a unique twitter banner image. When you're happy with the result, mint it as an NFT!"})]}),Object(p.jsx)("button",{className:d.a.mint,disabled:!1,onClick:function(){a(Object(p.jsx)(_e,{onCancel:l}),{open:!0,title:"Mint your creation!"})},children:"Mint"})]}),Object(p.jsx)("div",{className:d.a.bannerGenerator,children:null===t?Object(p.jsx)("div",{className:d.a.noTemplate,children:Object(p.jsx)("button",{onClick:function(){a(Object(p.jsx)(ne,{onSelect:c}),{open:!0,title:"Choose a template"})},children:"Select a template"})}):Object(p.jsx)(I,{})}),Object(p.jsx)("div",{className:d.a.controls,children:Object(p.jsx)(X,{})})]})},Oe=n(71),fe=n.n(Oe),xe=n(89),Ne=n.n(xe),ge=n(24),ye=n.n(ge),Te=n(37),Ce=function(){var e=Object(Te.a)(ye.a.mark((function e(){var t,n;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=12;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return t=e.sent,n={status:"\ud83d\udc46\ud83c\udffd Write a message in the text-field above.",address:t[0]},e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),we=function(){return Object(p.jsx)("div",{className:Ne.a.Header,children:Object(p.jsx)("button",{className:Ne.a.connect,onClick:Ce,children:"Connect Wallet"})})};var Pe=function(){return Object(p.jsxs)("div",{className:fe.a.App,children:[Object(p.jsx)(we,{}),Object(p.jsx)("div",{className:fe.a.body,children:Object(p.jsx)(ve,{})}),Object(p.jsx)("div",{className:fe.a.footer,children:"ETHOnline 2021 - suzamaki.eth"})]})},Se=Object(H.c)({templateId:null,controls:[],controlsState:{}},(function(e){e.addCase(U,(function(e,t){var n=t.payload;return Object(ae.a)(Object(ae.a)({},e),{},{templateId:n})})),e.addCase(D,(function(e,t){var n=t.payload.reduce((function(e,t){var n=M(t.id),a=t.controls.reduce((function(e,t){return Object(ae.a)(Object(ae.a)({},e),{},Object(Y.a)({},n(t.property),t.default))}),{});return Object(ae.a)(Object(ae.a)({},e),a)}),{});return Object(ae.a)(Object(ae.a)({},e),{},{controlsState:n})})),e.addCase(J,(function(e,t){var n=t.payload;return Object(ae.a)(Object(ae.a)({},e),{},{controlsState:Object(ae.a)(Object(ae.a)({},e.controlsState),{},Object(Y.a)({},n.property,n.value))})}))})),ke=Object(H.a)({reducer:{app:Se}});o.a.render(Object(p.jsx)(l.a.StrictMode,{children:Object(p.jsx)(f.a,{store:ke,children:Object(p.jsx)(je,{children:Object(p.jsx)(Pe,{})})})}),document.getElementById("root"))},39:function(e,t,n){e.exports={secondaryBoxShadow:"banner-gen_secondaryBoxShadow__29FPV",BannerGen:"banner-gen_BannerGen__Phb3X",noTemplate:"banner-gen_noTemplate__3hgPo",button:"banner-gen_button__20Dh5",primaryButton:"banner-gen_primaryButton__2B1Vv",mint:"banner-gen_mint__3yPl7",secondaryButton:"banner-gen_secondaryButton__djz9S",bannerGenerator:"banner-gen_bannerGenerator__1DTOq",header:"banner-gen_header__3QotU"}},41:function(e,t,n){e.exports={ModalOverlay:"modal_ModalOverlay__1KPeT",ModalContainer:"modal_ModalContainer__1fpIk",modal:"modal_modal__2bhYs",header:"modal_header__2hP-3",close:"modal_close__1xfsJ",body:"modal_body__2bgsT"}},47:function(e,t,n){e.exports={Controls:"controls_Controls__ElQeb",title:"controls_title__NO-Ek"}},54:function(e,t,n){e.exports={Tile:"tile_Tile__1ccS4",title:"tile_title__2jeIC",subTitle:"tile_subTitle__3rhAW"}},70:function(e,t,n){e.exports={Control:"control_Control__1fxVt",label:"control_label__2mfyC"}},71:function(e,t,n){e.exports={App:"App_App__15LM-",body:"App_body__2a4FT",footer:"App_footer__3csul"}},89:function(e,t,n){e.exports={button:"header_button__1dbnp",primaryButton:"header_primaryButton__1i8Vy",secondaryButton:"header_secondaryButton__12w3K",Header:"header_Header__jF7Og",connect:"header_connect__1s8oO"}}},[[327,1,2]]]);
//# sourceMappingURL=main.5770c230.chunk.js.map