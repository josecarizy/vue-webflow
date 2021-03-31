(function(e){function t(t){for(var i,o,l=t[0],s=t[1],c=t[2],u=0,m=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={app:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06d5":function(e,t,n){},1:function(e,t){},"17e3":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"shadow-xl":e.show},attrs:{clsas:"expand-ui"}},[n("button",{staticClass:"expand-ui--header px-4",class:{"rounded-bl-lg rounded-br-lg":!e.show},on:{click:e.expand}},[e.title?n("p",[e._v(e._s(e.title))]):e._t("default"),n("div",{staticClass:"flex-grow"}),n("v-mdi",{attrs:{name:"mdi-chevron-down",rotate:e.show?180:0}})],2),n("hr",{staticClass:"mx-4 border-transparent"}),n("transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"expand-ui--content p-4"},[e._t("default")],2)])],1)},a=[],r=(n("1973"),{name:"expand-ui",props:{title:String},data:function(){return{show:!1}},methods:{expand:function(){this.show=!this.show,this.$emit("change",this.show)}}}),o=r,l=n("2877"),s=Object(l["a"])(o,i,a,!1,null,null,null);t["default"]=s.exports},1946:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-ui relative",class:{"hover:shadow-xl is-hover":e.hover,border:e.outline,small:e.small,large:e.large,disabled:e.disabled},style:{height:e.height,width:e.width},on:{click:function(t){return e.$emit("click",t)}}},[e.$slots.image?n("div",{staticClass:"card-ui--image",on:{click:function(t){return e.$emit("click:image")}}},[e._t("image")],2):e._e(),e.$slots.header?n("div",{staticClass:"card-ui--header flex items-center"},[e._t("header")],2):e._e(),n("div",{staticClass:"card-ui--content",on:{click:function(t){return e.$emit("click:content")}}},[e._t("default")],2)])},a=[],r=(n("a9e3"),n("5df7"),{name:"card-ui",props:{outline:Boolean,hover:Boolean,small:Boolean,disabled:Boolean,large:Boolean,height:[String,Number],width:[String,Number]}}),o=r,l=n("2877"),s=Object(l["a"])(o,i,a,!1,null,null,null);t["default"]=s.exports},1973:function(e,t,n){},"21bb":function(e,t,n){"use strict";var i=n("2dad"),a=n.n(i);a.a},2988:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("textarea",{staticClass:"input-ui textarea",class:[{error:e.error,block:e.block},e.type],style:e.$attrs,attrs:{type:e.nativeType,name:e.name,placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)},change:function(t){return e.$emit("change",t.target.value)}}})},a=[],r=(n("c975"),n("e604"),{name:"textarea-ui",props:{name:String,value:String,error:Boolean,placeholder:String,block:Boolean,type:{type:String,default:"default",validator:function(e){return-1!==["default","outline"].indexOf(e)}},nativeType:{type:String,default:"text"}}}),o=r,l=n("2877"),s=Object(l["a"])(o,i,a,!1,null,null,null);t["default"]=s.exports},"2b9e":function(e,t,n){},"2dad":function(e,t,n){},"336b":function(e,t,n){var i={"./BaseButton.vue":"4629","./BaseCard.vue":"1946","./BaseExpand.vue":"17e3","./BaseInput.vue":"9abf","./BaseList.vue":"81e7","./BaseSelect.vue":"f411","./BaseSwitch.vue":"bf9b","./BaseTextarea.vue":"2988"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=r,e.exports=a,a.id="336b"},4360:function(e,t,n){"use strict";n("96cf");var i=n("c964"),a=n("2b0e"),r=n("2f62"),o=(n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("ddb0"),n("f3f3")),l=n("e5c2"),s=n.n(l),c=n("7067"),d={};c.keys().forEach((function(e){if("./index.js"!==e){var t=s()(e.replace(/\.store\.js$/,""));d[t]=Object(o["a"])({namespaced:!0},c(e).default)}}));var u=d;a["a"].use(r["a"]);t["a"]=new r["a"].Store({modules:u,mutations:{changeState:function(e,t){var n=t.key,i=t.value;a["a"].set(e,n,i)}},actions:{retrieve:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,i,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,i=e.dispatch,a=e.commit,t.prev=1,t.next=4,i("files/retrieve");case 4:r=JSON.parse(localStorage.getItem("settings")),null===r?localStorage.setItem("settings",JSON.stringify(n.settings)):a("changeState",{key:"settings",value:r}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()}}})},4629:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",e._g({staticClass:"button-ui focus:outline-none",class:[e.type,{disabled:e.disabled,loading:e.loading,round:e.round,icon:e.icon,small:e.small,dark:e.dark,plain:e.plain,large:e.large,block:e.block}],style:{width:e.width},attrs:{disabled:e.disabled}},e.$listeners),[e.loading?n("fontawesome-icon",{attrs:{icon:"spinner",pulse:"",spin:""}}):n("span",{staticClass:"button-ui__text"},[e._t("default")],2)],1)},a=[],r=(n("c975"),n("a9e3"),n("4bb3"),{name:"button-ui",props:{type:{type:String,default:"default",validator:function(e){return-1!==["default","primary","secondary","warning","danger"].indexOf(e)}},width:[Number,String],dark:Boolean,disabled:Boolean,block:Boolean,loading:Boolean,round:Boolean,small:Boolean,icon:Boolean,plain:Boolean,large:Boolean}}),o=r,l=n("2877"),s=Object(l["a"])(o,i,a,!1,null,null,null);t["default"]=s.exports},"48a9":function(e,t,n){},"4a0e":function(e,t,n){},"4bb3":function(e,t,n){},"526c":function(e,t,n){"use strict";n.r(t);var i=n("2b0e"),a=n("92ca");t["default"]={state:function(){return{syncScroll:!0,autoSave:!0}},mutations:{update:function(e,t){var n=t.key,r=t.value;i["a"].set(e,n,r),Object(a["a"])("settings",e)}}}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[e.retrieved?n("router-view"):n("div",{staticClass:"h-full w-full absolute splash"},[n("div",{staticClass:"content"},[n("h1",{staticClass:"text-6xl font-bold"},[e._v("MkDown")]),n("p",{staticClass:"text-2xl text-lighter"},[e._v("Online Markdown Editor")]),n("p",{staticClass:"text-lighter mt-6"},[e._v("Loading...")])])])],1)},r=[],o=(n("b0c0"),{data:function(){return{retrieved:!1}},watch:{activeFile:function(e){var t=e.title;document.title=t}},computed:{activeFile:function(){return this.$store.getters["files/activeFile"]}},created:function(){var e=this;"Home"===this.$route.name?this.$store.dispatch("retrieve").then((function(){e.retrieved=!0})):this.retrieved=!0}}),l=o,s=n("2877"),c=Object(s["a"])(l,a,r,!1,null,null,null),d=c.exports,u=n("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var m=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex"},[e.sideMenu?n("side-menu",{on:{close:function(t){e.sideMenu=!1}}}):e._e(),n("div",{style:{width:e.contentWidth}},[n("Menu",{model:{value:e.sideMenu,callback:function(t){e.sideMenu=t},expression:"sideMenu"}}),n("div",{staticClass:"flex",staticStyle:{height:"calc(100vh - 4rem)"}},[n("button-ui",{staticClass:"absolute lg:hidden shadow-xl z-20 bottom-0 right-0 m-6",attrs:{icon:"",type:"primary",round:""},on:{click:function(t){e.preview=!e.preview}}},[n("v-mdi",{attrs:{size:"28",name:"mdi-eye"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"}],staticClass:"bg-light lg:w-6/12 w-screen"},[n("vue-codemirror",{model:{value:e.markdown,callback:function(t){e.markdown=t},expression:"markdown"}})],1),n("simplebar",{staticClass:"lg:w-6/12 px-6 py-3 panel2 h-full hidden w-full",class:{"active-preview":e.preview},attrs:{"data-simplebar-auto-hide":"false"}},[n("preview-content",{attrs:{content:e.markdown}})],1)],1)],1)],1)},p=[],h=n("8d3b"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("codemirror",{staticClass:"h-full",attrs:{value:e.content,options:e.options},on:{input:e.updateContent}})},b=[],g=(n("a7be"),n("5514"),{props:{value:String},data:function(){return{code:"# Hello gan",options:{tabSize:2,keyMap:"sublime",mode:"text/x-gfm",scrollbarStyle:"overlay",theme:"ayu-mirage",highlightFormatting:!0,lineNumbers:!0,lineWrapping:!0,line:!0,extraKeys:{Enter:"newlineAndIndentContinueMarkdownList","Ctrl-B":function(e){var t=e.doc;return t.replaceSelection("**bold text**")},"Ctrl-I":function(e){var t=e.doc;return t.replaceSelection("*italic text*")},"Ctrl-D":function(e){var t=e.doc;return t.replaceSelection("~~strikethrough text~~")}}}}},computed:{content:function(){return this.$store.getters["files/activeFile"].content}},methods:{updateContent:function(e){this.$store.commit("files/updateFile",{id:this.$store.state.files.activeFile,key:"content",value:e})}}}),w=g,k=(n("623a"),Object(s["a"])(w,v,b,!1,null,null,null)),y=k.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown-content",domProps:{innerHTML:e._s(e.$md.render(e.content))}})},_=[],C=(n("f941"),{computed:{content:function(){return this.$store.getters["files/activeFile"].content}}}),j=C,S=Object(s["a"])(j,x,_,!1,null,null,null),F=S.exports,O=(n("4160"),n("fb6a"),n("159b"),n("d0af")),$=n("4360"),E=function(e){var t,n=Object(O["a"])(e,2),i=n[0],a=n[1],r=function e(n){if(!(window.innerWidth<1024)&&$["a"].state.settings.syncScroll){clearTimeout(t);var r=n.target.classList.contains(i.slice(1,i.length)),o=document.querySelector(r?a:i);o.removeEventListener("scroll",e),o.scrollTop=n.target.scrollTop,t=setTimeout((function(){o.addEventListener("scroll",e)}),500)}};e.forEach((function(e){var t=document.querySelector(e);t.addEventListener("scroll",r)}))},B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"p-2 py-3 overflow-hidden flex h-16 z-10 bg-lighter justify-between"},[n("div",{staticClass:"md:w-7/12 w-5/12 inline-block overflow-hidden"},[n("button-ui",{staticClass:"lg:mr-4",attrs:{plain:"",icon:""},on:{click:function(t){return e.$emit("input",!e.value)}}},[n("v-mdi",{attrs:{name:e.value?"mdi-close":"mdi-menu",size:"25"}})],1),e._l(e.actionList,(function(t){return n("button-ui",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.name,expression:"btn.name",modifiers:{bottom:!0}}],key:t.id,class:[t.class?"mr-3":"mr-1"],attrs:{plain:"",icon:""},on:{click:function(n){return e.insertText(t.id)}}},[n("v-mdi",{attrs:{name:t.icon,size:"20"}})],1)}))],2),n("div",{staticClass:"flex items-center justify-end"},[n("preview-file"),n("export-file"),n("import-file",{staticClass:"mr-6"}),n("settings")],1)])},M=[],T={bold:"**bold text**",italic:"*italicized text*",blockquote:"> blockquote","ordered-list":"\n1. first item","unordered-list":"\n- first item",code:"```javascript \nconst code = 'here' \n```",heading:"# Heading","check-list":"\n- [x] checklist",strike:"~~strikethrough text~~",link:"[title](https://www.example.com)",image:"![alt text](https://picsum.photos/400)",table:"\n\n| text1 | text2 |\n|--|--|\n| content1 | content2 |\n\n"},I=T,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-popover",[n("button-ui",{staticClass:"text-sm",attrs:{plain:""}},[e._v(" Import "),n("v-mdi",{staticClass:"align-middle",attrs:{name:"mdi-chevron-down"}})],1),n("template",{slot:"popover"},[n("card-ui",{staticClass:"shadow-xl border"},e._l(e.files,(function(t){return n("label",{key:t.name},[n("list-ui",{staticClass:"cursor-pointer",attrs:{dense:""}},[e._v(e._s(t.name)+" File")]),n("input",{staticClass:"hidden",attrs:{accept:t.type,type:"File"},on:{change:function(n){return e.handleFile(t.name,n)}}})],1)})),0)],1)],2)},L=[],z=(n("ac1f"),n("5319"),n("0122")),A=n("8baf").default,P=n("496e"),H=P.gfm,D=new A;D.use(H);var q={data:function(){return{files:[{name:"Markdown",type:"text/markdown, .md"},{name:"HTML",type:"text/html"}]}},methods:{handleFile:function(e,t){var n=this,i=t.target,a=i.files[0],r=/[^.]+$/.exec(a.name),o=new FileReader;return"md"!==r[0]&&"html"!==r[0]?this.$toast.error("Invalid file type"):(o.readAsText(a),o.onload=function(e){var t,i=e.target.result;"md"===r[0]?t=i:"html"===r[0]&&(t=D.turndown(i)),console.log(t,i,Object(z["a"])(i),r),n.$store.dispatch("files/add",{activate:!0,data:{title:a.name.replace(/.(html|md)$/,""),content:t}})},!0)}}},J=q,W=Object(s["a"])(J,N,L,!1,null,null,null),U=W.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-popover",[n("button-ui",{staticClass:"lg:inline-block mr-4 hidden text-sm",attrs:{plain:""}},[e._v(" Export as "),n("v-mdi",{staticClass:"align-middle",attrs:{name:"mdi-chevron-down"}})],1),n("template",{slot:"popover"},[n("card-ui",{staticClass:"shadow-xl border"},e._l(e.types,(function(t){return n("list-ui",{key:t,staticClass:"cursor-pointer capitalize",attrs:{dense:""},on:{click:function(n){return e.exportFile(t)}}},[e._v(" "+e._s(t.replace("-"," "))+" ")])})),1)],1)],2)},V=[],Z=(n("99af"),n("21a6")),K=".hljs{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#c678dd}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta-string{color:#98c379}.hljs-built_in,.hljs-class .hljs-title{color:#e6c07b}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#d19a66}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#61aeee}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}.hljs-link{text-decoration:underline} ",Q="body{font-family: 'Inter', sans-serif;background-color: #232935; color: white} .markdown-content{width:91.666667%}.py-8{padding-top:2rem;padding-bottom:2rem}.px-4{padding-left:1rem;padding-right:1rem}.mx-auto{margin-left:auto;margin-right:auto}.markdown-content img{max-width: 100%}.markdown-content h1,.markdown-content h2,.markdown-content h3,.markdown-content h4,.markdown-content h5,.markdown-content h6{font-weight:700;margin-top:1.25rem;margin-bottom:1.25rem}.markdown-content blockquote,.markdown-content dd,.markdown-content dl,.markdown-content figure,.markdown-content hr,.markdown-content p,.markdown-content pre{margin-top:1.25rem;margin-bottom:1.25rem}.markdown-content h1{font-size:1.875rem}.markdown-content h2{font-size:1.5rem}.markdown-content h3{font-size:1.25rem}.markdown-content h4{font-size:1.125rem}.markdown-content h5{font-size:1rem}.markdown-content h6{font-size:.875rem}.markdown-content a{color:#0052cc}.markdown-content a:hover{text-decoration:underline}.markdown-content code,.markdown-content pre{font-family:'Fira Code',monospace;background-color:#1f2430;border-radius:.9375rem}.markdown-content pre{padding-top:1rem;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem}.markdown-content pre code{padding:0}.markdown-content code{padding-left:.75rem;padding-right:.75rem;padding-top:.5rem;padding-bottom:.5rem}.markdown-content blockquote{border-left-width:4px;border-color:#0052cc;padding-left:1.25rem;padding-right:1.25rem}.markdown-content table{table-layout:auto;border-collapse:collapse;}.markdown-content table *{border-color:rgba(255,255,255,.24) !important}.markdown-content table td,.markdown-content table th{padding-left:.75rem;padding-right:.75rem;padding-top:.5rem;padding-bottom:.5rem;border-width:1px;border: 1px solid}.markdown-content table tbody tr:nth-child(odd){background-color:#1f2430}.markdown-content ol{padding:auto;list-style:decimal}.markdown-content li{list-style-position:inside}.markdown-content li p{display:inline-block}.markdown-content ul ul{padding-left:1.5rem}.markdown-content ul{list-style:disc}@media (min-width:1024px) {.markdown-content{width:66.666667%}}";function Y(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return'\n    <!DOCTYPE html>\n    <html>\n    <head>\n      <meta name="viewport" content="width=device-width,initial-scale=1.0">\n      '.concat("styled-html"===n?'<link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;700&display=swap" rel="stylesheet">':"","\n      <title>").concat(e,"</title>\n      ").concat("styled-html"===n?'<style type="text/css">'.concat(K+Q,"</style>"):"","\n    </head>\n    <body>\n      ").concat("styled-html"===n?'<div class="markdown-content \'px-4 py-8 mx-auto">'.concat(t,"</div>"):t,"\n    </body>\n    </html>\n  ")}function G(e,t){var n=new Blob([t],{type:"text/plain;charset=utf-8"});Object(Z["saveAs"])(n,e)}var X,ee,te=function(e,t,n){"markdown"===n?G(e,t):"html"===n?G(e,Y(e,t)):"styled-html"===n&&G(e,Y(e,t,"styled-html"))},ne={data:function(){return{types:["markdown","html","styled-html"]}},methods:{exportFile:function(e){var t=this.$store.getters["files/activeFile"],n=t.title,i=t.content,a="markdown"===e?"md":"html",r="".concat(n,".").concat(a),o="markdown"===e?i:this.$md.render(i);te(r,o,e)}}},ie={mixins:[ne]},ae=ie,re=Object(s["a"])(ae,R,V,!1,null,null,null),oe=re.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-popover",[n("button-ui",{staticClass:"lg:inline-block mr-4 hidden text-sm",attrs:{plain:""}},[e._v(" Preview as "),n("v-mdi",{staticClass:"align-middle",attrs:{name:"mdi-chevron-down"}})],1),n("template",{slot:"popover"},[n("card-ui",{staticClass:"shadow-xl border"},e._l(e.types,(function(t){return n("a",{key:t,attrs:{href:"/preview/"+t,target:"_blank"}},[n("list-ui",{staticClass:"capitalize"},[e._v(e._s(t.replace("-"," ")))])],1)})),0)],1)],2)},se=[],ce={data:function(){return{types:["markdown","html","styled-html"]}}},de=ce,ue=Object(s["a"])(de,le,se,!1,null,null,null),me=ue.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-popover",{attrs:{placement:"left-start"}},[n("button-ui",{attrs:{icon:""}},[n("v-mdi",{attrs:{name:"mdi-cog"}})],1),n("template",{slot:"popover"},[n("card-ui",[n("list-ui",[n("switch-ui",{staticClass:"mr-6",attrs:{value:e.settings.autoSave},on:{change:function(t){return e.updateSetting("autoSave",t)}}}),n("p",[e._v("Auto Save")])],1),n("list-ui",[n("switch-ui",{staticClass:"mr-6",attrs:{value:e.settings.syncScroll},on:{change:function(t){return e.updateSetting("syncScroll",t)}}}),n("p",[e._v("Sync Scroll")])],1)],1)],1)],2)},pe=[],he={computed:{settings:function(){return this.$store.state.settings}},methods:{updateSetting:function(e,t){this.$store.commit("settings/update",{key:e,value:t})}}},ve=he,be=Object(s["a"])(ve,fe,pe,!1,null,null,null),ge=be.exports,we={components:{ImportFile:U,ExportFile:oe,PreviewFile:me,Settings:ge},props:{value:Boolean},data:function(){return{actionList:[{name:"Undo - Ctrl + Z",id:"undo",icon:"mdi-undo"},{name:"Redo - Ctrl + Shift + Z",id:"redo",icon:"mdi-redo",class:!0},{name:"Bold - Ctrl + B",id:"bold",icon:"mdi-format-bold"},{name:"Italic - Ctrl + I",id:"italic",icon:"mdi-format-italic"},{name:"Strikethrough - Ctrl + D",id:"strike",icon:"mdi-format-strikethrough"},{name:"Heading",id:"heading",icon:"mdi-format-header-1",class:!0},{name:"Unordered List",id:"unordered-list",icon:"mdi-format-list-bulleted"},{name:"Ordered List",id:"ordered-list",icon:"mdi-format-list-numbered"},{name:"Check list",id:"check-list",icon:"mdi-format-list-checks",class:!0},{name:"Blockquote",id:"blockquote",icon:"mdi-format-quote-close"},{name:"Link",id:"link",icon:"mdi-link"},{name:"Image",id:"image",icon:"mdi-image"},{name:"Table",id:"table",icon:"mdi-table"}]}},methods:{insertText:function(e){var t=document.querySelector(".CodeMirror").CodeMirror;"undo"===e||"redo"===e?t.execCommand(e):t.doc.replaceSelection(I[e])}}},ke=we,ye=(n("66d7"),Object(s["a"])(ke,B,M,!1,null,null,null)),xe=ye.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("simplebar",{staticClass:"content side-menu overflow-auto h-screen p-5 bg-light"},[n("div",{staticClass:"flex items-center justify-between"},[n("p",{staticClass:"text-xl font-bold"},[e._v("MkDown")]),n("button-ui",{staticClass:"lg:hidden",attrs:{icon:""},on:{click:function(t){return e.$emit("close")}}},[n("v-mdi",{attrs:{name:"mdi-close"}})],1)],1),n("div",{staticClass:"mt-12 lg:hidden"},[n("preview-file"),n("export-file",{staticClass:"mt-4"})],1),n("file-list")],1)},Ce=[],je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"file-list mt-8"},[n("div",{staticClass:"files mb-8"},e._l(e.$store.state.files.files,(function(t,i){return n("card-ui",{key:i,staticClass:"cursor-pointer mt-3",class:{"border-2 border-primary":i===e.$store.state.files.activeFile},attrs:{hover:""},on:{click:function(t){return e.changeActive(i)}}},[n("div",{staticClass:"flex items-center"},[i===e.editFileId?n("input-ui",{staticClass:"mr-3",attrs:{autofocus:""},on:{blur:e.updateFileTitle},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateFileTitle(t)}},model:{value:e.tempFileTitle,callback:function(t){e.tempFileTitle=t},expression:"tempFileTitle"}}):n("p",{staticClass:"text-sm leading-tight pr-2 font-semibold line-clamp flex-grow w-11/12"},[e._v(e._s(t.title))]),n("button-ui",{attrs:{icon:""},on:{click:function(n){e.editFileId=i,e.tempFileTitle=t.title}}},[n("v-mdi",{attrs:{name:"mdi-pencil",size:"20"}})],1)],1)])})),1),n("button-ui",{attrs:{block:"",type:"primary"},on:{click:e.addFile}},[e._v(" Add file ")]),n("button-ui",{staticClass:"mt-4",attrs:{block:"",plain:"",type:"danger"},on:{click:e.delFile}},[e._v(" Delete file ")])],1)},Se=[],Fe={data:function(){return{editFileId:"",tempFileTitle:""}},methods:{updateFileTitle:function(){this.editFileId&&(this.$store.commit("files/updateFile",{id:this.editFileId,key:"title",value:this.tempFileTitle}),this.editFileId="")},addFile:function(){this.$store.dispatch("files/add",{activate:!0,data:{title:"untitled",content:""}})},changeActive:function(e){this.$store.commit("files/changeActive",e)},delFile:function(){this.$store.dispatch("files/delete")}}},Oe=Fe,$e=Object(s["a"])(Oe,je,Se,!1,null,null,null),Ee=$e.exports,Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("expand-ui",{attrs:{title:"Export as"}},e._l(e.types,(function(t){return n("list-ui",{key:t,staticClass:"cursor-pointer capitalize",on:{click:function(n){return e.exportFile(t)}}},[e._v(e._s(t.replace("-"," ")))])})),1)},Me=[],Te={mixins:[ne]},Ie=Te,Ne=Object(s["a"])(Ie,Be,Me,!1,null,null,null),Le=Ne.exports,ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("expand-ui",{attrs:{title:"Preview As"}},e._l(e.types,(function(t){return n("a",{key:t,attrs:{href:"/preview/"+t,target:"_blank"}},[n("list-ui",{staticClass:"capitalize"},[e._v(e._s(t.replace("-"," ")))])],1)})),0)},Ae=[],Pe={data:function(){return{types:["markdown","html","styled-html"]}}},He=Pe,De=Object(s["a"])(He,ze,Ae,!1,null,null,null),qe=De.exports,Je={components:{simplebar:h["a"],FileList:Ee,ExportFile:Le,PreviewFile:qe}},We=Je,Ue=(n("8f15"),Object(s["a"])(We,_e,Ce,!1,null,"d2cc0c4e",null)),Re=Ue.exports,Ve=(n("f138"),{components:{VueCodemirror:y,PreviewContent:F,simplebar:h["a"],Menu:xe,SideMenu:Re},data:function(){return{contentWidth:"100%",markdown:"",sideMenu:!1,preview:!1}},watch:{sideMenu:function(){this.resizeHandler()}},methods:{resizeHandler:function(){var e=this.sideMenu?window.innerWidth-280:window.innerWidth;this.contentWidth="".concat(e,"px")}},created:function(){window.addEventListener("resize",this.resizeHandler)},mounted:function(){setTimeout((function(){E([".CodeMirror-scroll",".panel2 .simplebar-content-wrapper"])}),2e3)},destroyed:function(){window.removeEventListener("resize",this.resizeHandler)}}),Ze=Ve,Ke=(n("21bb"),Object(s["a"])(Ze,f,p,!1,null,null,null)),Qe=Ke.exports,Ye={data:function(){return{content:"",title:"",type:""}},created:function(){var e=function(e){return JSON.parse(localStorage.getItem(e))},t=e("activeFile"),n=e("files");if(null!==t&&null!==n){var i=n[t],a=i.title,r=i.content,o=this.$route.params.type;this.title=a,this.type=o,"markdown"===o?this.content=r:"html"!==o&&"styled-html"!==o||(this.content=this.$md.render(r))}},render:function(e){return e("div",{class:{"px-4 py-8 mx-auto lg:w-8/12 w-11/12":"styled-html"===this.type}},[e("markdown"===this.type?"pre":"div",{domProps:{innerHTML:this.content},class:{"markdown-content":"styled-html"===this.type,"whitespace-pre-wrap":"markdown"===this.type}})])}},Ge=Ye,Xe=(n("8232"),Object(s["a"])(Ge,X,ee,!1,null,null,null)),et=Xe.exports;i["a"].use(m["a"]);var tt=[{path:"/",name:"Home",component:Qe},{path:"/preview/:type",name:"Preview",component:et}],nt=new m["a"]({mode:"history",base:"/",routes:tt}),it=nt,at=(n("def6"),n("78a7"),n("e3cf"),n("535c")),rt=n("94ed");at["a"].add({mdiMenu:rt["q"],mdiPencil:rt["r"],mdiDelete:rt["e"],mdiEye:rt["f"],mdiFormatBold:rt["g"],mdiUndo:rt["u"],mdiRedo:rt["s"],mdiFormatItalic:rt["i"],mdiFormatHeader1:rt["h"],mdiFormatStrikethrough:rt["n"],mdiFormatListBulleted:rt["j"],mdiFormatListNumbered:rt["l"],mdiFormatListChecks:rt["k"],mdiLink:rt["p"],mdiImage:rt["o"],mdiTable:rt["t"],mdiFormatQuoteClose:rt["m"],mdiCodeTags:rt["c"],mdiCog:rt["d"],mdiClose:rt["b"],mdiChevronDown:rt["a"]}),i["a"].use(at["a"]);var ot=n("e37d");i["a"].use(ot["a"],{defaultClass:"tooltip-ui",defaultHtml:!0,defaultTemplate:'<div class="tooltip-ui" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',defaultOffset:10,popover:{defaultOffset:10,defaultBoundariesElement:"document.body"}});var lt=n("8f94"),st=n.n(lt);n("1fdb"),n("4498"),n("1ef7"),n("44a0"),n("f9d4"),n("9a48");i["a"].use(st.a);var ct=n("d4cd"),dt=n.n(ct),ut=function(e){return e.default||e},mt=new dt.a("default",{html:!0,linkify:!0,xhtmlOut:!0,breaks:!0,typographer:!0});mt.use(ut(n("5121"))),mt.use(ut(n("cf2b"))),mt.use(ut(n("4bb9"))),mt.use(ut(n("be03"))),mt.use(ut(n("7ba6"))),mt.use(ut(n("54f6"))),mt.use(ut(n("ff97"))),mt.use(ut(n("b792")));var ft=mt;i["a"].prototype.$md=ft;var pt=n("6c42");n("da96");i["a"].use(pt["a"]);n("d3b7"),n("ddb0");var ht=n("336b");ht.keys().forEach((function(e){var t=ht(e);i["a"].component(t.default.name,t.default||t)})),i["a"].directive("autofocus",{inserted:function(e,t){var n=t.value,i=void 0===n||n;i&&e.focus()}}),i["a"].config.productionTip=!1,new i["a"]({router:it,store:$["a"],render:function(e){return e(d)}}).$mount("#app")},"59cb":function(e,t,n){},"5df7":function(e,t,n){},"623a":function(e,t,n){"use strict";var i=n("48a9"),a=n.n(i);a.a},"66d7":function(e,t,n){"use strict";var i=n("4a0e"),a=n.n(i);a.a},7067:function(e,t,n){var i={"./files.store.js":"8ddc","./settings.store.js":"526c"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=r,e.exports=a,a.id="7067"},"78a7":function(e,t,n){},"81e7":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._g({staticClass:"list-ui flex items-center rounded-lg",class:[e.dense?"p-2":"p-3"]},e.$listeners),[e.$slots.prefix?n("div",{staticClass:"prefix mr-3"},[e._t("prefix")],2):e._e(),e._t("default")],2)},a=[],r={name:"list-ui",props:{dense:Boolean}},o=r,l=(n("e21a"),n("2877")),s=Object(l["a"])(o,i,a,!1,null,null,null);t["default"]=s.exports},8232:function(e,t,n){"use strict";var i=n("06d5"),a=n.n(i);a.a},"8ddc":function(e,t,n){"use strict";n.r(t);n("d81d"),n("b64b"),n("d3b7");var i=n("f3f3"),a=n("2b0e"),r=n("8dee"),o=n.n(r),l=n("92ca");t["default"]={state:function(){return{files:{},activeFile:""}},getters:{allFiles:function(e){return Object.keys(e.files).map((function(t){return Object(i["a"])({id:t},e.files[t])}))},activeFile:function(e){return e.files[e.activeFile]}},mutations:{updateState:function(e,t){var n=t.key,i=t.value;a["a"].set(e,n,i)},addFile:function(e,t){var n=t.id,i=t.data;a["a"].set(e.files,n,i),Object(l["a"])("files",e.files)},updateFile:function(e,t){var n=t.id,i=t.key,r=t.value;a["a"].set(e.files[n],i,r),Object(l["a"])("files",e.files)},deleteFile:function(e,t){a["a"].delete(e.files,t),Object(l["a"])("files",e.files)},changeActive:function(e,t){e.activeFile=t,localStorage.setItem("activeFile",JSON.stringify(t))}},actions:{add:function(e,t){var n=e.commit,i=t.activate,a=t.data;return new Promise((function(e){var t=o.a.generate();n("addFile",{id:t,data:a}),i&&n("changeActive",t),e(t)}))},delete:function(e){var t=e.state,n=e.getters,i=e.commit,a=t.activeFile;i("changeActive",n.allFiles[0].id),i("deleteFile",a)},retrieve:function(e){var t=e.commit,n=e.getters,i=e.dispatch;return new Promise((function(e){var a=localStorage.getItem("files"),r=localStorage.getItem("activeFile");if(null===a){var o="# MkDown\n\nMkDown is an online markdown editor built with [vueJs](https://vuejs.org). How to use MkDown Markdown Editor:\n\n- Type some markdown in left side\n- See the preview on right side\n- And Voilà\n\n## Feature\n\n- Import Markdown file from your pc\n- Import your HTML file and convert it to markdown\n- Export your document as a Markdown file, HTML or HTML styled file";i("add",{activate:!0,data:{title:"Welcome!!",content:o}}),e()}else null===r?(t("changeActive",n.allFiles[0].id),e()):a&&r&&(t("updateState",{key:"files",value:JSON.parse(a)}),t("updateState",{key:"activeFile",value:JSON.parse(r)}),e())}))}}}},"8f15":function(e,t,n){"use strict";var i=n("2b9e"),a=n.n(i);a.a},"92ca":function(e,t,n){"use strict";var i=n("f7fe"),a=n.n(i),r=n("4360"),o=a()((function(e,t){r["a"].state.settings.autoSave&&localStorage.setItem(e,JSON.stringify(t))}),1e3);t["a"]=o},"9abf":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-ui",class:[{error:e.error,large:e.large,block:e.block},e.type],on:{click:function(t){return e.$emit("click",t)}}},[n("div",{staticClass:"input-ui--container"},[e.icon?n("v-mdi",{attrs:{name:e.icon}}):e._e(),n("input",{directives:[{name:"autofocus",rawName:"v-autofocus",value:e.autofocus,expression:"autofocus"}],style:{width:e.width,height:e.height},attrs:{type:e.nativeType,name:e.name,placeholder:e.placeholder},domProps:{value:e.value},on:{blur:function(t){return e.$emit("blur",t)},input:function(t){return e.$emit("input",t.target.value)},change:function(t){return e.$emit("change",t.target.value)}}})],1)])},a=[],r=(n("c975"),n("a9e3"),n("e604"),{name:"input-ui",props:{name:String,value:String,error:Boolean,icon:String,placeholder:String,large:Boolean,block:Boolean,autofocus:Boolean,width:[String,Number],height:[String,Number],type:{type:String,default:"default",validator:function(e){return-1!==["default","outline","background"].indexOf(e)}},nativeType:{type:String,default:"text"}}}),o=r,l=n("2877"),s=Object(l["a"])(o,i,a,!1,null,null,null);t["default"]=s.exports},bf9b:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"switch"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"switch-input",attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var n=e.checked,i=t.target,a=!!i.checked;if(Array.isArray(n)){var r=null,o=e._i(n,r);i.checked?o<0&&(e.checked=n.concat([r])):o>-1&&(e.checked=n.slice(0,o).concat(n.slice(o+1)))}else e.checked=a}}}),n("div",{staticClass:"slider round"})])},a=[],r=(n("59cb"),{name:"switch-ui",props:{value:{type:Boolean,default:!1}},computed:{checked:{set:function(e){this.$emit("input",e),this.$emit("change",e)},get:function(){return this.value}}}}),o=r,l=n("2877"),s=Object(l["a"])(o,i,a,!1,null,null,null);t["default"]=s.exports},c572:function(e,t,n){},d9da:function(e,t,n){},def6:function(e,t,n){},e21a:function(e,t,n){"use strict";var i=n("c572"),a=n.n(i);a.a},e3cf:function(e,t,n){},e604:function(e,t,n){},f411:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-popover",{attrs:{placement:"bottom",offset:"10"}},[n("div",{staticClass:"select-ui",class:{block:e.block},attrs:{tabindex:"0"}},[n("div",{staticClass:"select-ui--inner"},[e._t("selected",[n("p",{staticClass:"text-overflow text"},[e._v(e._s(e.value))])],{value:e.value}),n("v-mdi",{attrs:{name:"mdi-chevron-down"}})],2)]),n("card-ui",{staticClass:"shadow-xl border select-ui--content",attrs:{slot:"popover"},slot:"popover"},[e.title?n("p",{staticClass:"font-semibold",attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.title))]):e._e(),e._l(e.list,(function(t){return n("div",{directives:[{name:"close-popover",rawName:"v-close-popover"}],key:t,staticClass:"select-ui--item",on:{change:function(n){return e.$emit("change",t)},click:function(n){return e.$emit("input",t)}}},[e._t("option",[e._v(e._s(t))],{value:t})],2)}))],2)],1)},a=[],r=(n("a9e3"),n("d9da"),{name:"select-ui",props:{value:[String,Number],list:Array,block:Boolean,title:String}}),o=r,l=n("2877"),s=Object(l["a"])(o,i,a,!1,null,null,null);t["default"]=s.exports},f941:function(e,t,n){}});
//# sourceMappingURL=app.ac23c2ab.js.map